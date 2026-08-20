/** Service Worker güncelleme — alt banner (RideAtlas tarzı) */
(function () {
  'use strict';

  var _waitingSW = null;

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

  window.applyUpdate = function () {
    if (_waitingSW) _waitingSW.postMessage({ type: 'SKIP_WAITING' });
    hideUpdateUI();
  };

  window.dismissUpdate = function () {
    hideUpdateUI();
  };

  function trackWaiting(worker) {
    _waitingSW = worker;
    showUpdateUI();
  }

  function initUpdateChecker() {
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
    }).catch(function (err) {
      console.warn('SW register failed', err);
    });

    var refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
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
