/** Ortak platform başlatma — sürüm, önbellek, marka */
(function () {
  'use strict';
  var APP_VERSION = window.KDO_PLATFORM_VERSION || 'v3.0.1';
  var storedVersion = localStorage.getItem('app_version');
  if (storedVersion && storedVersion !== APP_VERSION) {
    if ('caches' in window) {
      caches.keys().then(function (names) {
        names.forEach(function (name) { caches.delete(name); });
      });
    }
    var reloadKey = 'kdo:reload-' + APP_VERSION;
    if (!sessionStorage.getItem(reloadKey)) {
      sessionStorage.setItem(reloadKey, '1');
      localStorage.setItem('app_version', APP_VERSION);
      location.reload();
      return;
    }
    console.log('Yeni versiyon: ' + APP_VERSION + ', cache temizlendi.');
  }
  localStorage.setItem('app_version', APP_VERSION);
  window.KDO_APP_VERSION = APP_VERSION;

  function resolveUiLocale() {
    if (typeof appLang !== 'undefined' && appLang) return appLang;
    var tgt = localStorage.getItem('kdo:target');
    var keys = { th: 'tv3_lang', tk: 'tk1_lang', en: 'en1_lang', de: 'de1_lang', it: 'it1_lang',
      es: 'es1_lang', fr: 'fr1_lang', ru: 'ru1_lang', ar: 'ar1_lang', zh: 'zh1_lang' };
    if (tgt && keys[tgt]) {
      var appLoc = localStorage.getItem(keys[tgt]);
      if (appLoc) return appLoc;
    }
    return localStorage.getItem('kdo:locale')
      || localStorage.getItem('kdo:ui')
      || 'tr';
  }

  function applyBrandDev() {
    var el = document.getElementById('brand-dev');
    if (!el) return;
    var loc = resolveUiLocale();
    if (typeof devCredit === 'function') {
      el.textContent = devCredit(loc);
    } else {
      var dev = window.KDO_UI_DEV || {};
      el.textContent = dev[loc] || dev.tr || '';
    }
  }

  function applyVersionBadge() {
    var vb = document.getElementById('app-version');
    if (vb) vb.textContent = APP_VERSION;
    var pv = document.getElementById('platform-ver');
    if (pv) pv.textContent = APP_VERSION;
    var hv = document.getElementById('hakkinda-version');
    if (hv) hv.textContent = APP_VERSION;
  }

  function applyBrandHeader() {
    var cfg = window.KDO_CFG;
    if (!cfg) return;
    var brand = document.querySelector('.brand');
    if (!brand) return;
    var lang = resolveUiLocale();
    var name = cfg.nameTr;
    if (lang === 'en' && cfg.nameEn) name = cfg.nameEn;
    else if (lang === 'th' && cfg.nameTh) name = cfg.nameTh;
    else if (lang !== 'tr' && cfg['name' + lang.charAt(0).toUpperCase() + lang.slice(1)]) {
      name = cfg['name' + lang.charAt(0).toUpperCase() + lang.slice(1)];
    } else if (lang !== 'tr' && cfg.nameEn) name = cfg.nameEn;
    brand.textContent = cfg.flag + ' ' + name;
    if (cfg.title) {
      var titles = { tr: cfg.title, en: cfg.titleEn, th: cfg.titleTh };
      document.title = titles[lang] || cfg.titleEn || cfg.title;
    }
  }

  window.KDO_applyBrandDev = applyBrandDev;
  window.KDO_applyBrandHeader = applyBrandHeader;

  function onReady() {
    applyBrandDev();
    applyVersionBadge();
    applyBrandHeader();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
  window.addEventListener('load', onReady);
  applyVersionBadge();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (regs) {
      regs.forEach(function (reg) { reg.unregister(); });
    });
  }

  window.KDO_fixTv3CrossMigration = function (prefix) {
    if (!prefix) return;
    var mark = 'kdo:purge-tv3-cross:' + prefix;
    if (localStorage.getItem(mark)) return;
    ['star', 'visited', 'stats', 'complete', 'bonusOpen', 'srs', 'lang'].forEach(function (s) {
      var appKey = prefix + s;
      var thaiKey = 'tv3_' + s;
      var a = localStorage.getItem(appKey);
      var t = localStorage.getItem(thaiKey);
      if (a != null && t != null && a === t) localStorage.removeItem(appKey);
    });
    localStorage.setItem(mark, '1');
  };
})();
