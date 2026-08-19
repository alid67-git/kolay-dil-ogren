/** Service Worker güncelleme — header ikonu + alt banner (RideAtlas tarzı) */
(function () {
  'use strict';

  var _waitingSW = null;

  function uiLang() {
    if (typeof appLang !== 'undefined' && appLang) return appLang;
    return localStorage.getItem('kdo:locale') || localStorage.getItem('kdo:ui') || 'tr';
  }

  function injectStyles() {
    if (document.getElementById('kdo-update-style')) return;
    var st = document.createElement('style');
    st.id = 'kdo-update-style';
    st.textContent = [
      '#update-badge{display:none;align-items:center;justify-content:center;',
      'background:#fbbf24;color:#78350f;border:none;border-radius:999px;',
      'min-width:28px;height:28px;padding:0 8px;font-size:14px;font-weight:800;',
      'cursor:pointer;flex-shrink:0;box-shadow:0 0 0 2px rgba(255,255,255,.35);',
      'animation:kdoUpdatePulse 1.4s ease-in-out infinite;}',
      '#update-badge.show{display:inline-flex;}',
      '@keyframes kdoUpdatePulse{0%,100%{transform:scale(1);box-shadow:0 0 0 2px rgba(255,255,255,.35);}',
      '50%{transform:scale(1.08);box-shadow:0 0 0 4px rgba(251,191,36,.55);}}'
    ].join('');
    document.head.appendChild(st);
  }

  function showUpdateUI() {
    injectStyles();
    var lang = uiLang();
    var msgs = { tr: '🆕 Yeni sürüm hazır', en: '🆕 Update available', th: '🆕 มีการอัปเดต' };
    var btnMsgs = { tr: 'Güncelle', en: 'Update', th: 'อัปเดต' };
    var banner = document.getElementById('update-banner');
    var txt = document.getElementById('update-banner-text');
    var btn = document.getElementById('update-btn');
    if (txt) txt.textContent = msgs[lang] || msgs.tr;
    if (btn) btn.textContent = btnMsgs[lang] || btnMsgs.tr;
    if (banner) banner.classList.add('show');
    var badge = document.getElementById('update-badge');
    if (badge) badge.classList.add('show');
  }

  function hideUpdateUI() {
    var banner = document.getElementById('update-banner');
    if (banner) banner.classList.remove('show');
    var badge = document.getElementById('update-badge');
    if (badge) badge.classList.remove('show');
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
