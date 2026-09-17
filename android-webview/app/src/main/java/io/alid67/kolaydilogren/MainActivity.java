package io.alid67.kolaydilogren;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.graphics.Color;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
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

    private static final String APP_VERSION = "3.0.82";
    private static final String START_URL =
            "https://alid67-git.github.io/kolay-dil-ogren/?v=" + APP_VERSION;
    private static final String ALLOWED_HOST = "alid67-git.github.io";
    private static final String ALLOWED_PATH_PREFIX = "/kolay-dil-ogren";

    /**
     * WebView hit-test bozuk olsa bile native MotionEvent koordinatından
     * element.click() tetikler. SW önbelleği Android kabuğunda gerekmez.
     */
    private static final String TAP_BOOT =
            "(function(){try{"
                    + "var d=document.documentElement;d.classList.add('kdo-android-wv');"
                    + "if(!document.getElementById('kdo-android-tap-css')){"
                    + "var s=document.createElement('style');s.id='kdo-android-tap-css';"
                    + "s.textContent='html.kdo-android-wv,html.kdo-android-wv body{height:auto!important;max-height:none!important;min-height:100%!important;overflow-x:hidden!important;overflow-y:auto!important;display:block!important}html.kdo-android-wv header,html.kdo-android-wv nav{position:relative!important;overflow:visible!important;pointer-events:auto!important}html.kdo-android-wv nav{display:flex!important;flex-wrap:wrap!important}html.kdo-android-wv main{overflow:visible!important;height:auto!important;max-height:none!important;flex:none!important}html.kdo-android-wv .ltabs{overflow:visible!important;flex-wrap:wrap!important}html.kdo-android-wv .overlay:not(.open),html.kdo-android-wv #changelog-overlay:not(.open),html.kdo-android-wv #exercise-overlay:not(.open),html.kdo-android-wv .gram-modal-overlay:not(.open),html.kdo-android-wv #lstar-overlay:not(.open){display:none!important;visibility:hidden!important;pointer-events:none!important;width:0!important;height:0!important;inset:auto!important;left:-100vw!important;top:-100vh!important;background:transparent!important;z-index:-1!important}html.kdo-android-wv .overlay.open,html.kdo-android-wv #changelog-overlay.open,html.kdo-android-wv #exercise-overlay.open,html.kdo-android-wv .gram-modal-overlay.open,html.kdo-android-wv #lstar-overlay.open{display:flex!important;visibility:visible!important;pointer-events:auto!important;inset:0!important}';"
                    + "(document.head||d).appendChild(s);}"
                    + "window.KDO_handleTapAt=function(x,y){"
                    + "var stack=(document.elementsFromPoint&&document.elementsFromPoint(x,y))||[];"
                    + "if(!stack.length){var one=document.elementFromPoint(x,y);if(one)stack=[one];}"
                    + "for(var i=0;i<stack.length;i++){"
                    + "var el=stack[i];if(!el||el===document.documentElement||el===document.body)continue;"
                    + "var ov=el.closest&&el.closest('.overlay,#changelog-overlay,#exercise-overlay,#lstar-overlay,.gram-modal-overlay');"
                    + "if(ov&&!ov.classList.contains('open'))continue;"
                    + "var c=el.closest('button,a[href],[onclick],[role=button],.lesson-card,.nbtn,.ltab,.hbtn,.bonus-header,.filter-btn,.setting-btn,.lang-btn,.lesson-back-btn');"
                    + "if(!c||(c.classList&&c.classList.contains('empty')))continue;"
                    + "var cov=c.closest&&c.closest('.overlay,#changelog-overlay,#exercise-overlay,#lstar-overlay,.gram-modal-overlay');"
                    + "if(cov&&!cov.classList.contains('open'))continue;"
                    + "c.click();return true;}return false;};"
                    + "if(navigator.serviceWorker){"
                    + "navigator.serviceWorker.getRegistrations().then(function(rs){rs.forEach(function(r){r.unregister()});});}"
                    + "if(window.caches){caches.keys().then(function(ks){ks.forEach(function(k){caches.delete(k);});});}"
                    + "if(window.KDO_fixViewportLayout)window.KDO_fixViewportLayout();"
                    + "if(window.KDO_bindAndroidTaps)window.KDO_bindAndroidTaps();"
                    + "}catch(e){}})();";

    private WebView webView;
    private float downX;
    private float downY;

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

        WindowCompat.setDecorFitsSystemWindows(getWindow(), true);
        getWindow().setStatusBarColor(Color.parseColor("#0d9488"));
        getWindow().setNavigationBarColor(Color.parseColor("#0f766e"));
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
        webView.setClickable(true);
        setContentView(webView);

        webView.clearCache(true);
        webView.clearHistory();

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
        settings.setUseWideViewPort(false);
        settings.setCacheMode(WebSettings.LOAD_NO_CACHE);
        webView.setInitialScale(100);
        webView.setHorizontalScrollBarEnabled(false);

        webView.setOnTouchListener(new View.OnTouchListener() {
            @Override
            @SuppressLint("ClickableViewAccessibility")
            public boolean onTouch(View v, MotionEvent event) {
                if (event.getAction() == MotionEvent.ACTION_DOWN) {
                    downX = event.getX();
                    downY = event.getY();
                    return false;
                }
                if (event.getAction() == MotionEvent.ACTION_UP) {
                    float dx = Math.abs(event.getX() - downX);
                    float dy = Math.abs(event.getY() - downY);
                    if (dx < 40 && dy < 40) {
                        float scale = webView.getScale() <= 0 ? 1f : webView.getScale();
                        float x = event.getX() / scale;
                        float y = event.getY() / scale;
                        webView.evaluateJavascript(
                                "window.KDO_handleTapAt&&window.KDO_handleTapAt(" + x + "," + y + ")",
                                null);
                    }
                }
                return false;
            }
        });

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
                view.evaluateJavascript(TAP_BOOT, null);
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
