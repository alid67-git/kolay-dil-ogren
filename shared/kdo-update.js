/** Service Worker + uzak sürüm kontrolü — alt banner (RideAtlas tarzı) */
(function () {
  'use strict';

  var _waitingSW = null;
  var _remoteVersion = '';
  var APK_URL = 'https://github.com/alid67-git/kolay-dil-ogren/releases/download/android-latest/KolayDilOgren.apk';

  function uiLang() {
    if (typeof appLang !== 'undefined' && appLang) return appLang;
    return localStorage.getItem('kdo:locale') || localStorage.getItem('kdo:ui') || 'tr';
  }

  function showUpdateUI() {
    var lang = uiLang();
    var msgs = { tr: '🆕 Yeni sürüm hazır', en: '🆕 Update available', th: '🆕 มีการอัปเดต' };
    var btnMsgs = { tr: 'Güncelle', en: 'Update', th: 'อัปเดต' };
    var banner = document.getElementById('update-banner');
    var txt = document.getElementById('update-banner-text');
    var btn = document.getElementById('update-btn');
    if (txt) txt.textContent = msgs[lang] || msgs.tr;
    if (btn) btn.textContent = btnMsgs[lang] || btnMsgs.tr;
    if (banner) banner.classList.add('show');
  }

  function hideUpdateUI() {
    var banner = document.getElementById('update-banner');
    if (banner) banner.classList.remove('show');
  }

  function bustAndReload() {
    if ('caches' in window) {
      caches.keys().then(function (names) {
        names.forEach(function (name) { caches.delete(name); });
      });
    }
    var sep = location.search ? '&' : '?';
    location.replace(location.pathname + location.search + sep + '_u=' + Date.now() + (location.hash || ''));
  }

  window.applyUpdate = function () {
    if (_waitingSW) {
      try { _waitingSW.postMessage({ type: 'SKIP_WAITING' }); } catch (_) {}
    }
    hideUpdateUI();
    if (/Android/i.test(navigator.userAgent || '') && window.KdoAndroidTts) {
      location.href = APK_URL;
      return;
    }
    bustAndReload();
  };

  window.dismissUpdate = function () {
    hideUpdateUI();
  };

  function trackWaiting(worker) {
    _waitingSW = worker;
    try {
      worker.postMessage({ type: 'SKIP_WAITING' });
    } catch (_) {}
    showUpdateUI();
  }

  function localVersion() {
    return String(window.KDO_PLATFORM_VERSION || window.KDO_APP_VERSION || '').replace(/^v/, '');
  }

  function parseRemoteVersion(text) {
    var m = String(text || '').match(/KDO_PLATFORM_VERSION\s*=\s*['"]v?([^'"]+)['"]/);
    return m ? m[1] : '';
  }

  function checkRemotePlatform() {
    var href;
    try {
      href = new URL('shared/kdo-version.js?t=' + Date.now(), location.href).href;
    } catch (_) {
      href = '/kolay-dil-ogren/shared/kdo-version.js?t=' + Date.now();
    }
    fetch(href, { cache: 'no-store' }).then(function (r) {
      if (!r.ok) return '';
      return r.text();
    }).then(function (text) {
      if (!text) return;
      var remote = parseRemoteVersion(text);
      var local = localVersion();
      if (!remote || !local || remote === local) return;
      var reloadKey = 'kdo:ver-reload-' + remote;
      if (sessionStorage.getItem(reloadKey)) {
        showUpdateUI();
        return;
      }
      sessionStorage.setItem(reloadKey, '1');
      showUpdateUI();
      bustAndReload();
    }).catch(function () {});
  }

  function initUpdateChecker() {
    checkRemotePlatform();
    setInterval(checkRemotePlatform, 30000);

    if (!('serviceWorker' in navigator)) return;

    navigator.serviceWorker.register('/kolay-dil-ogren/sw.js').then(function (reg) {
      if (reg.waiting) trackWaiting(reg.waiting);
      reg.addEventListener('updatefound', function () {
        var newSW = reg.installing;
        if (!newSW) return;
        newSW.addEventListener('statechange', function () {
          if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
            trackWaiting(newSW);
          }
        });
      });
      try { reg.update(); } catch (_) {}
    }).catch(function (err) {
      console.warn('SW register failed', err);
    });

    var refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });

    setInterval(function () {
      navigator.serviceWorker.getRegistration('/kolay-dil-ogren/sw.js').then(function (reg) {
        if (reg) reg.update();
      });
    }, 60000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUpdateChecker);
  } else {
    initUpdateChecker();
  }
})();
