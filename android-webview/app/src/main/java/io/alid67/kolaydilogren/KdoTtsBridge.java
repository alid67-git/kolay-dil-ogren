package io.alid67.kolaydilogren;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.speech.tts.TextToSpeech;
import android.webkit.JavascriptInterface;
import java.util.Locale;

/**
 * Android WebView'da window.speechSynthesis çoğu cihazda sessiz veya yok.
 * iOS WKWebView çalışır; APK native TextToSpeech kullanır.
 */
public class KdoTtsBridge {
    private final Handler main = new Handler(Looper.getMainLooper());
    private TextToSpeech tts;
    private volatile boolean ready;
    private String pendingText;
    private String pendingLang;
    private float pendingRate = 1f;
    private float pendingPitch = 1f;

    public KdoTtsBridge(Context context) {
        tts = new TextToSpeech(context.getApplicationContext(), status -> {
            ready = status == TextToSpeech.SUCCESS;
            if (ready && pendingText != null) {
                speakNow(pendingText, pendingLang, pendingRate, pendingPitch);
                pendingText = null;
            }
        });
    }

    @JavascriptInterface
    public boolean isAvailable() {
        return ready || tts != null;
    }

    @JavascriptInterface
    public void speak(String text, String lang, float rate, float pitch) {
        if (text == null || text.trim().isEmpty()) return;
        final String t = text;
        final String l = lang;
        final float r = rate;
        final float p = pitch;
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
        Locale loc = localeFor(lang);
        int result = tts.setLanguage(loc);
        if (result == TextToSpeech.LANG_MISSING_DATA
                || result == TextToSpeech.LANG_NOT_SUPPORTED) {
            tts.setLanguage(Locale.getDefault());
        }
        tts.setSpeechRate(clamp(rate, 0.4f, 1.6f));
        tts.setPitch(clamp(pitch, 0.5f, 2f));
        tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "kdo-tts");
    }

    private static Locale localeFor(String lang) {
        if (lang == null || lang.isEmpty()) return Locale.getDefault();
        try {
            return Locale.forLanguageTag(lang.replace('_', '-'));
        } catch (RuntimeException e) {
            return Locale.getDefault();
        }
    }

    private static float clamp(float v, float lo, float hi) {
        return Math.max(lo, Math.min(hi, v));
    }
}
