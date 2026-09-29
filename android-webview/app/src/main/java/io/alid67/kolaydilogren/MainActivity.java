package io.alid67.kolaydilogren;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.content.SharedPreferences;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.webkit.JsPromptResult;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.activity.OnBackPressedCallback;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import io.alid67.kolaydilogren.billing.KdoPromoCode;
import io.alid67.kolaydilogren.prefs.KdoPrefs;

public class MainActivity extends AppCompatActivity {

    private static final String APP_VERSION = "3.0.94";
    private static final String START_URL =
            "https://alid67-git.github.io/kolay-dil-ogren/?v=" + APP_VERSION;
    private static final String ALLOWED_HOST = "alid67-git.github.io";
    private static final String ALLOWED_PATH_PREFIX = "/kolay-dil-ogren";

    private WebView webView;
    private KdoTtsBridge ttsBridge;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        if (BuildConfig.PAYWALL_ENABLED
                && !new KdoPrefs(this).isSubscriptionActive()
                && !KdoPromoCode.isActive(this)) {
            startActivity(new Intent(this, PaywallActivity.class));
            finish();
            return;
        }

        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);

        // decorFits=true: sistem çubukları WebView dışına yerleşir.
        // Immersive sticky (v3.0.71) Android'de dokunma hedeflerini bozuyordu.
        WindowCompat.setDecorFitsSystemWindows(getWindow(), true);
        getWindow().setStatusBarColor(Color.parseColor("#1565c0"));
        getWindow().setNavigationBarColor(Color.parseColor("#0d47a1"));
        WindowInsetsControllerCompat controller =
                WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView());
        if (controller != null) {
            controller.setAppearanceLightStatusBars(false);
            controller.setAppearanceLightNavigationBars(false);
        }

        webView = new WebView(this);
        webView.setBackgroundColor(Color.parseColor("#f5f5f5"));
        webView.setFocusable(true);
        webView.setFocusableInTouchMode(true);
        ttsBridge = new KdoTtsBridge(this);
        webView.addJavascriptInterface(ttsBridge, "KdoAndroidTts");
        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onJsPrompt(
                    WebView view,
                    String url,
                    String message,
                    String defaultValue,
                    JsPromptResult result) {
                if (message != null && message.startsWith("kdo-tts:")) {
                    if (ttsBridge != null) {
                        ttsBridge.speakJson(message.substring("kdo-tts:".length()));
                    }
                    result.confirm("ok");
                    return true;
                }
                return super.onJsPrompt(view, url, message, defaultValue, result);
            }
        });
        setContentView(webView);
        maybeClearCacheForUpgrade();

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setAllowFileAccess(false);
        settings.setSupportZoom(false);
        settings.setBuiltInZoomControls(false);
        settings.setDisplayZoomControls(false);
        settings.setLoadWithOverviewMode(false);
        settings.setUseWideViewPort(true);
        // GitHub Pages HTML uzun cache'leniyor; LOAD_DEFAULT eski v3.0.92'de takılı kalıyordu
        settings.setCacheMode(WebSettings.LOAD_NO_CACHE);
        // Dokunma koordinatlarının ölçek kaymasından kaçın
        webView.setInitialScale(100);
        webView.setHorizontalScrollBarEnabled(false);

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                String url = request.getUrl() != null ? request.getUrl().toString() : "";
                if (handleTtsUrl(url)) return true;
                return !isAllowedUrl(url);
            }

            @Override
            @SuppressWarnings("deprecation")
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                if (handleTtsUrl(url)) return true;
                return !isAllowedUrl(url);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                // Eski önbellekli HTML'de bile viewport + tap bağlama (ders kartı hit-test)
                view.evaluateJavascript(
                        "(function(){try{"
                                + "window.KDO_HAS_NATIVE_TTS=true;"
                                + "window.KDO_NATIVE_APP_VERSION='" + APP_VERSION + "';"
                                + "document.documentElement.classList.add('kdo-android-wv');"
                                + "if(window.KDO_fixViewportLayout) window.KDO_fixViewportLayout();"
                                + "if(window.KDO_bindAndroidTaps) window.KDO_bindAndroidTaps();"
                                + "else if(window.KDO_bindLessonCards) window.KDO_bindLessonCards();"
                                + "}catch(e){}})();",
                        null);
            }
        });

        getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
            @Override
            public void handleOnBackPressed() {
                if (webView.canGoBack()) {
                    webView.goBack();
                } else {
                    setEnabled(false);
                    getOnBackPressedDispatcher().onBackPressed();
                }
            }
        });

        if (savedInstanceState != null) {
            webView.restoreState(savedInstanceState);
        } else {
            webView.loadUrl(START_URL + "&t=" + System.currentTimeMillis());
        }
    }

    private void maybeClearCacheForUpgrade() {
        try {
            PackageInfo info = getPackageManager().getPackageInfo(getPackageName(), 0);
            int versionCode = info.versionCode;
            SharedPreferences prefs = getSharedPreferences("kdo_webview", MODE_PRIVATE);
            int saved = prefs.getInt("version_code", -1);
            if (saved != versionCode) {
                webView.clearCache(true);
                webView.clearHistory();
                prefs.edit().putInt("version_code", versionCode).apply();
            }
        } catch (PackageManager.NameNotFoundException ignored) {
        }
    }

    private boolean handleTtsUrl(String url) {
        if (url == null || !url.startsWith("kdo-tts:")) return false;
        try {
            String payload = url.substring("kdo-tts:".length());
            if (payload.startsWith("//")) payload = payload.substring(2);
            int q = payload.indexOf('?');
            if (q >= 0) {
                Uri uri = Uri.parse(url);
                String j = uri.getQueryParameter("j");
                if (j != null && !j.isEmpty()) {
                    payload = j;
                } else {
                    payload = java.net.URLDecoder.decode(payload.substring(q + 1), "UTF-8");
                }
            }
            if (ttsBridge != null) ttsBridge.speakJson(payload);
        } catch (Exception ignored) {
        }
        return true;
    }

    private boolean isAllowedUrl(String url) {
        if (url == null) return false;
        if (!url.startsWith("https://")) return false;
        try {
            java.net.URI uri = java.net.URI.create(url);
            if (!ALLOWED_HOST.equals(uri.getHost())) return false;
            String path = uri.getPath() != null ? uri.getPath() : "/";
            return path.startsWith(ALLOWED_PATH_PREFIX);
        } catch (IllegalArgumentException e) {
            return false;
        }
    }

    @Override
    protected void onStart() {
        super.onStart();
        if (isFinishing()) return;
        if (BuildConfig.PAYWALL_ENABLED) {
            KdoPrefs prefs = new KdoPrefs(this);
            if (!prefs.isSubscriptionActive() && !KdoPromoCode.isActive(this)) {
                startActivity(new Intent(this, PaywallActivity.class));
                finish();
                return;
            }
            io.alid67.kolaydilogren.billing.KdoSubscriptionManager.INSTANCE
                    .refreshEntitlement(this, entitled -> {
                        if (!entitled && !KdoPromoCode.isActive(this)) {
                            runOnUiThread(() -> {
                                startActivity(new Intent(this, PaywallActivity.class));
                                finish();
                            });
                        }
                    });
        }
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        webView.saveState(outState);
    }

    @Override
    protected void onDestroy() {
        if (ttsBridge != null) {
            ttsBridge.shutdown();
            ttsBridge = null;
        }
        if (webView != null) {
            webView.destroy();
        }
        super.onDestroy();
    }
}
