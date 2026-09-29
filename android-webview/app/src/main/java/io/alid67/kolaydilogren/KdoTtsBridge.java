package io.alid67.kolaydilogren;

import android.content.Context;
import android.media.AudioAttributes;
import android.media.AudioFocusRequest;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import android.webkit.JavascriptInterface;
import java.io.File;
import java.util.Locale;
import org.json.JSONObject;

/**
 * WebView speechSynthesis Android'de sessiz. Native TTS de birçok cihazda
 * STREAM_NOTIFICATION'a gidip mute olur. WAV üretip MediaPlayer (STREAM_MUSIC)
 * ile çalmak hoparlörü açar.
 */
public class KdoTtsBridge {
    private static final String GOOGLE_ENGINE = "com.google.android.tts";

    private final Context appContext;
    private final Handler main = new Handler(Looper.getMainLooper());
    private final AudioManager audioManager;
    private final File wavFile;
    private TextToSpeech tts;
    private MediaPlayer player;
    private AudioFocusRequest focusRequest;
    private volatile boolean ready;
    private boolean retriedGoogle;
    private int speakGen;
    private int lastFileGen = -1;
    private String lastText = "";
    private String pendingJson;

    public KdoTtsBridge(Context context) {
        appContext = context.getApplicationContext();
        audioManager = (AudioManager) appContext.getSystemService(Context.AUDIO_SERVICE);
        wavFile = new File(appContext.getCacheDir(), "kdo-tts.wav");
        initTts(null);
    }

    private void initTts(String engine) {
        TextToSpeech.OnInitListener listener = status -> {
            ready = status == TextToSpeech.SUCCESS;
            if (!ready && !retriedGoogle && engine == null) {
                retriedGoogle = true;
                TextToSpeech old = tts;
                tts = null;
                main.post(() -> {
                    if (old != null) {
                        try { old.shutdown(); } catch (RuntimeException ignored) {}
                    }
                    initTts(GOOGLE_ENGINE);
                });
                return;
            }
            if (ready && tts != null) {
                applyAudioAttrs();
                tts.setOnUtteranceProgressListener(new UtteranceProgressListener() {
                    @Override
                    public void onStart(String utteranceId) {}

                    @Override
                    public void onDone(String utteranceId) {
                        if (utteranceId != null && utteranceId.startsWith("kdo-file-")) {
                            final int gen = parseGen(utteranceId);
                            main.post(() -> playWav(gen));
                        }
                    }

                    @Override
                    public void onError(String utteranceId) {
                        if (utteranceId != null && utteranceId.startsWith("kdo-file-")) {
                            final int gen = parseGen(utteranceId);
                            main.post(() -> speakDirect(gen));
                        }
                    }
                });
                if (pendingJson != null) {
                    String json = pendingJson;
                    pendingJson = null;
                    speakJson(json);
                }
            }
        };
        try {
            tts = engine == null
                    ? new TextToSpeech(appContext, listener)
                    : new TextToSpeech(appContext, listener, engine);
        } catch (RuntimeException e) {
            ready = false;
        }
    }

    private static int parseGen(String utteranceId) {
        try {
            return Integer.parseInt(utteranceId.substring("kdo-file-".length()));
        } catch (NumberFormatException e) {
            return -1;
        }
    }

    private void applyAudioAttrs() {
        if (tts == null) return;
        AudioAttributes attrs = mediaAttrs();
        tts.setAudioAttributes(attrs);
    }

    private static AudioAttributes mediaAttrs() {
        return new AudioAttributes.Builder()
                .setUsage(AudioAttributes.USAGE_MEDIA)
                .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                .setLegacyStreamType(AudioManager.STREAM_MUSIC)
                .build();
    }

    @JavascriptInterface
    public boolean isAvailable() {
        return tts != null;
    }

    @JavascriptInterface
    public void speakText(String text) {
        speakJson("{\"t\":" + jsonString(text) + "}");
    }

    @JavascriptInterface
    public void speak(String text, String lang, String rate, String pitch) {
        JSONObject o = new JSONObject();
        try {
            o.put("t", text == null ? "" : text);
            o.put("l", lang == null ? "en-US" : lang);
            o.put("r", rate == null ? "1" : rate);
            o.put("p", pitch == null ? "1" : pitch);
        } catch (Exception ignored) {}
        speakJson(o.toString());
    }

    @JavascriptInterface
    public void speakJson(String json) {
        if (json == null || json.trim().isEmpty()) return;
        final String raw = json;
        main.post(() -> {
            if (!ready) {
                pendingJson = raw;
                return;
            }
            enqueue(raw);
        });
    }

    @JavascriptInterface
    public void stop() {
        main.post(this::stopAll);
    }

    public void shutdown() {
        main.post(() -> {
            stopAll();
            ready = false;
            if (tts != null) {
                tts.shutdown();
                tts = null;
            }
        });
    }

    private void enqueue(String json) {
        String text = json;
        String lang = "en-US";
        float rate = 0.95f;
        float pitch = 1f;
        try {
            JSONObject o = new JSONObject(json);
            text = o.optString("t", json);
            lang = o.optString("l", "en-US");
            rate = parseFloat(o.optString("r", "0.95"), 0.95f);
            pitch = parseFloat(o.optString("p", "1"), 1f);
        } catch (Exception ignored) {}
        if (text == null || text.trim().isEmpty()) return;
        if (tts == null) return;

        lastText = text;
        stopPlayer();
        requestFocus();
        final int gen = ++speakGen;
        Locale loc = localeFor(lang);
        int result = tts.setLanguage(loc);
        if (result == TextToSpeech.LANG_MISSING_DATA
                || result == TextToSpeech.LANG_NOT_SUPPORTED) {
            result = tts.setLanguage(Locale.getDefault());
            if (result == TextToSpeech.LANG_MISSING_DATA
                    || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                tts.setLanguage(Locale.US);
            }
        }
        tts.setSpeechRate(clamp(rate, 0.4f, 1.6f));
        tts.setPitch(clamp(pitch, 0.5f, 2f));

        Bundle params = streamParams();
        String fileId = "kdo-file-" + gen;
        int syn = TextToSpeech.ERROR;
        try {
            syn = tts.synthesizeToFile(text, params, wavFile, fileId);
        } catch (RuntimeException ignored) {}
        if (syn == TextToSpeech.ERROR) {
            speakDirect(gen, text);
            return;
        }
        final int thisGen = gen;
        main.postDelayed(() -> {
            if (thisGen == speakGen && lastFileGen != thisGen && player == null) {
                speakDirect(thisGen, lastText);
            }
        }, 3500);
    }

    private void speakDirect(int gen) {
        speakDirect(gen, lastText);
    }

    private void speakDirect(int gen, String text) {
        if (gen != speakGen || tts == null) return;
        requestFocus();
        Bundle params = streamParams();
        if (text != null && !text.isEmpty()) {
            tts.speak(text, TextToSpeech.QUEUE_FLUSH, params, "kdo-speak-" + gen);
        }
    }

    private void playWav(int gen) {
        if (gen != speakGen) return;
        if (wavFile == null || !wavFile.exists() || wavFile.length() < 44) {
            return;
        }
        stopPlayer();
        try {
            MediaPlayer mp = new MediaPlayer();
            player = mp;
            mp.setAudioAttributes(mediaAttrs());
            mp.setDataSource(wavFile.getAbsolutePath());
            mp.setOnCompletionListener(p -> stopPlayer());
            mp.setOnErrorListener((p, what, extra) -> {
                stopPlayer();
                return true;
            });
            mp.prepare();
            mp.start();
            lastFileGen = gen;
        } catch (Exception e) {
            stopPlayer();
            speakDirect(gen);
        }
    }

    private void stopAll() {
        pendingJson = null;
        speakGen++;
        stopPlayer();
        if (tts != null) {
            try { tts.stop(); } catch (RuntimeException ignored) {}
        }
    }

    private void stopPlayer() {
        if (player == null) return;
        try {
            if (player.isPlaying()) player.stop();
        } catch (RuntimeException ignored) {}
        try { player.reset(); } catch (RuntimeException ignored) {}
        try { player.release(); } catch (RuntimeException ignored) {}
        player = null;
    }

    private static Bundle streamParams() {
        Bundle params = new Bundle();
        params.putInt(TextToSpeech.Engine.KEY_PARAM_STREAM, AudioManager.STREAM_MUSIC);
        return params;
    }

    private void requestFocus() {
        if (audioManager == null) return;
        try {
            if (Build.VERSION.SDK_INT >= 26) {
                if (focusRequest == null) {
                    focusRequest = new AudioFocusRequest.Builder(
                            AudioManager.AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK)
                            .setAudioAttributes(mediaAttrs())
                            .build();
                }
                audioManager.requestAudioFocus(focusRequest);
            } else {
                audioManager.requestAudioFocus(
                        null,
                        AudioManager.STREAM_MUSIC,
                        AudioManager.AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK);
            }
        } catch (RuntimeException ignored) {
        }
    }

    private static Locale localeFor(String lang) {
        if (lang == null || lang.isEmpty()) return Locale.getDefault();
        try {
            return Locale.forLanguageTag(lang.replace('_', '-'));
        } catch (RuntimeException e) {
            return Locale.getDefault();
        }
    }

    private static float parseFloat(String raw, float fallback) {
        if (raw == null || raw.isEmpty()) return fallback;
        try {
            return Float.parseFloat(raw);
        } catch (NumberFormatException e) {
            return fallback;
        }
    }

    private static float clamp(float v, float lo, float hi) {
        return Math.max(lo, Math.min(hi, v));
    }

    private static String jsonString(String s) {
        if (s == null) return "\"\"";
        return JSONObject.quote(s);
    }
}
