package io.alid67.kolaydilogren;

import android.annotation.SuppressLint;
import android.content.pm.ActivityInfo;
import android.content.SharedPreferences;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.activity.OnBackPressedCallback;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsControllerCompat;

public class MainActivity extends AppCompatActivity {

    private static final String APP_VERSION = "3.0.73";
    private static final String START_URL =
            "https://alid67-git.github.io/kolay-dil-ogren/?v=" + APP_VERSION;
    private static final String ALLOWED_HOST = "alid67-git.github.io";
    private static final String ALLOWED_PATH_PREFIX = "/kolay-dil-ogren";

    private WebView webView;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);

        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            getWindow().getAttributes().layoutInDisplayCutoutMode =
                    WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
        }
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
        webView.setOverScrollMode(View.OVER_SCROLL_NEVER);
        setContentView(webView);
        maybeClearCacheForUpgrade();
        hideSystemUI();

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setAllowFileAccess(false);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);

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
                hideSystemUI();
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

    private void hideSystemUI() {
        View decorView = getWindow().getDecorView();
        decorView.setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                        | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                        | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_FULLSCREEN
        );
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) {
            hideSystemUI();
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
