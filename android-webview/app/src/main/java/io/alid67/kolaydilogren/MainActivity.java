package io.alid67.kolaydilogren;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.content.SharedPreferences;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.os.Bundle;
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

    private static final String APP_VERSION = "3.0.89";
    private static final String START_URL =
            "https://alid67-git.github.io/kolay-dil-ogren/?v=" + APP_VERSION;
    private static final String ALLOWED_HOST = "alid67-git.github.io";
    private static final String ALLOWED_PATH_PREFIX = "/kolay-dil-ogren";

    private WebView webView;

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
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        // Dokunma koordinatlarının ölçek kaymasından kaçın
        webView.setInitialScale(100);
        webView.setHorizontalScrollBarEnabled(false);

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                return !isAllowedUrl(request.getUrl().toString());
            }

            @Override
            @SuppressWarnings("deprecation")
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                return !isAllowedUrl(url);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                // Eski önbellekli HTML'de bile viewport + tap bağlama (ders kartı hit-test)
                view.evaluateJavascript(
                        "(function(){try{"
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
            webView.loadUrl(START_URL);
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
        if (webView != null) {
            webView.destroy();
        }
        super.onDestroy();
    }
}
