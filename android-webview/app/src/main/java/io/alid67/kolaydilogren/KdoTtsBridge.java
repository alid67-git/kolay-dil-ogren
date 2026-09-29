package io.alid67.kolaydilogren;

import android.content.Context;
import android.media.AudioAttributes;
import android.media.AudioFocusRequest;
import android.media.AudioManager;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.speech.tts.TextToSpeech;
import android.webkit.JavascriptInterface;
import java.util.Locale;

/**
 * Android WebView'da window.speechSynthesis çoğu cihazda sessiz veya yok.
 * iOS WKWebView çalışır; APK native TextToSpeech kullanır.
 *
 * JavascriptInterface yalnızca String alır — JS number/float imza eşleşmesi
 * bazı WebView sürümlerinde sessizce düşer.
 */
public class KdoTtsBridge {
    private static final String GOOGLE_ENGINE = "com.google.android.tts";

    private final Context appContext;
    private final Handler main = new Handler(Looper.getMainLooper());
    private final AudioManager audioManager;
    private TextToSpeech tts;
    private AudioFocusRequest focusRequest;
    private volatile boolean ready;
    private boolean retriedGoogle;
    private String pendingText;
    private String pendingLang;
    private float pendingRate = 1f;
    private float pendingPitch = 1f;

    public KdoTtsBridge(Context context) {
        appContext = context.getApplicationContext();
        audioManager = (AudioManager) appContext.getSystemService(Context.AUDIO_SERVICE);
        initTts(null);
    }

    private void initTts(String engine) {
        TextToSpeech.OnInitListener listener = status -> {
            ready = status == TextToSpeech.SUCCESS;
            if (!ready && !retriedGoogle && engine == null) {
                retriedGoogle = true;
                if (tts != null) {
                    try { tts.shutdown(); } catch (RuntimeException ignored) {}
                    tts = null;
                }
                initTts(GOOGLE_ENGINE);
                return;
            }
            if (ready) {
                applyAudioAttrs();
                if (pendingText != null) {
                    speakNow(pendingText, pendingLang, pendingRate, pendingPitch);
                    pendingText = null;
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

    private void applyAudioAttrs() {
        if (tts == null) return;
        AudioAttributes attrs = new AudioAttributes.Builder()
                .setUsage(AudioAttributes.USAGE_MEDIA)
                .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                .setLegacyStreamType(AudioManager.STREAM_MUSIC)
                .build();
        tts.setAudioAttributes(attrs);
    }

    @JavascriptInterface
    public boolean isAvailable() {
        return tts != null;
    }

    @JavascriptInterface
    public void speak(String text, String lang, String rate, String pitch) {
        if (text == null || text.trim().isEmpty()) return;
        final String t = text;
        final String l = lang;
        final float r = parseFloat(rate, 0.95f);
        final float p = parseFloat(pitch, 1f);
        main.post(() -> {
            if (tts == null) return;
            if (!ready) {
                pendingText = t;
                pendingLang = l;
                pendingRate = r;
                pendingPitch = p;
                return;
            }
            speakNow(t, l, r, p);
        });
    }

    @JavascriptInterface
    public void stop() {
        main.post(() -> {
            pendingText = null;
            if (tts != null) tts.stop();
        });
    }

    public void shutdown() {
        main.post(() -> {
            pendingText = null;
            ready = false;
            if (tts != null) {
                tts.stop();
                tts.shutdown();
                tts = null;
            }
        });
    }

    private void speakNow(String text, String lang, float rate, float pitch) {
        if (tts == null) return;
        requestFocus();
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
        int spoken = tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "kdo-tts");
        if (spoken == TextToSpeech.ERROR) {
            tts.setLanguage(Locale.getDefault());
            tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "kdo-tts");
        }
    }

    private void requestFocus() {
        if (audioManager == null) return;
        try {
            if (Build.VERSION.SDK_INT >= 26) {
                if (focusRequest == null) {
                    AudioAttributes attrs = new AudioAttributes.Builder()
                            .setUsage(AudioAttributes.USAGE_MEDIA)
                            .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                            .build();
                    focusRequest = new AudioFocusRequest.Builder(
                            AudioManager.AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK)
                            .setAudioAttributes(attrs)
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
}
