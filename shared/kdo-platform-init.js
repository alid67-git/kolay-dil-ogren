/** Ortak platform başlatma — sürüm, önbellek, marka */
(function () {
  'use strict';
  var APP_VERSION = window.KDO_PLATFORM_VERSION || 'v3.0.1';
  window.KDO_APP_VERSION = APP_VERSION;

  window.KDO_PLATFORM_BRAND = window.KDO_PLATFORM_BRAND || {
    flag: '',
    nameTr: 'Kolay Dil Öğren',
    nameEn: 'Easy Language Learning',
    nameTh: 'เรียนภาษาง่ายๆ',
    title: 'Kolay Dil Öğrenme',
    titleEn: 'Easy Language Learning',
    titleTh: 'เรียนภาษาง่ายๆ'
  };

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
      var sep = location.search ? '&' : '?';
      location.replace(location.pathname + location.search + sep + '_r=' + Date.now() + (location.hash || ''));
      return;
    }
    console.log('Yeni versiyon: ' + APP_VERSION + ', cache temizlendi.');
  }
  localStorage.setItem('app_version', APP_VERSION);

  function resolveUiLocale() {
    if (typeof appLang !== 'undefined' && appLang) return appLang;
    var tgt = localStorage.getItem('kdo:target');
    var keys = { th: 'tv3_lang', tk: 'tk1_lang', en: 'en1_lang', de: 'de1_lang', it: 'it1_lang',
      es: 'es1_lang', fr: 'fr1_lang', ru: 'ru1_lang', ar: 'ar1_lang', zh: 'zh1_lang',
      ha: 'ha1_lang', sw: 'sw1_lang', pt: 'pt1_lang' };
    if (tgt && keys[tgt]) {
      var appLoc = localStorage.getItem(keys[tgt]);
      if (appLoc) return appLoc;
    }
    return localStorage.getItem('kdo:locale')
      || localStorage.getItem('kdo:ui')
      || 'tr';
  }

  function brandNameForLocale(cfg, lang) {
    if (!cfg) return 'Kolay Dil Öğren';
    if (lang === 'tr' && cfg.targetLabelTr) {
      return 'Kolay ' + cfg.targetLabelTr + ' Öğren';
    }
    if (lang === 'en') {
      if (cfg.nameEn) return cfg.nameEn.replace(/ Learning$/, ' Learn').replace(/ Öğrenme$/, ' Learn');
      if (cfg.targetLabelEn) return 'Easy ' + cfg.targetLabelEn + ' Learn';
    }
    if (lang === 'th') {
      if (cfg.nameTh) return cfg.nameTh;
      if (cfg.targetLabelTr) return 'เรียนภาษา' + cfg.targetLabelTr + 'ง่ายๆ';
    }
    if (lang !== 'tr' && cfg['name' + lang.charAt(0).toUpperCase() + lang.slice(1)]) {
      return cfg['name' + lang.charAt(0).toUpperCase() + lang.slice(1)];
    }
    if (cfg.nameTr && lang === 'tr') return cfg.nameTr + ' Öğren';
    if (cfg.nameEn) return cfg.nameEn;
    return cfg.nameTr || cfg.title || 'Kolay Dil Öğren';
  }

  function brandTitleForLocale(cfg, lang) {
    if (lang === 'tr' && cfg.targetLabelTr) {
      return 'Kolay ' + cfg.targetLabelTr + ' Öğrenme';
    }
    if (lang === 'en' && cfg.titleEn) return cfg.titleEn;
    if (lang === 'th' && cfg.titleTh) return cfg.titleTh;
    if (lang === 'tr') return cfg.title || cfg.nameTr;
    return cfg.titleEn || cfg.title || cfg.nameEn || cfg.nameTr;
  }

  function fitBrandText() {
    var el = document.querySelector('.brand');
    if (!el) return;
    el.style.fontSize = '';
    var size = parseFloat(window.getComputedStyle(el).fontSize) || 17;
    var min = 10;
    var guard = 0;
    while (el.scrollWidth > el.clientWidth + 1 && size > min && guard < 40) {
      size -= 0.5;
      el.style.fontSize = size + 'px';
      guard++;
    }
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
    if (hv) hv.textContent = APP_VERSION + ' ↗';
  }

  function applyBrandHeader() {
    var cfg = window.KDO_PLATFORM_BRAND;
    if (!cfg) return;
    var brand = document.querySelector('.brand');
    if (!brand) return;
    var lang = resolveUiLocale();
    var name = brandNameForLocale(cfg, lang);
    brand.textContent = cfg.flag ? (cfg.flag + ' ' + name) : name;
    document.title = brandTitleForLocale(cfg, lang);
    fitBrandText();
  }

  window.KDO_applyBrandDev = applyBrandDev;
  window.KDO_applyBrandHeader = applyBrandHeader;
  window.KDO_applyVersionBadge = applyVersionBadge;
  window.KDO_fitBrandText = fitBrandText;
  window.KDO_platformAppTitle = function (lang) {
    return brandTitleForLocale(window.KDO_PLATFORM_BRAND, lang || resolveUiLocale());
  };

  function onReady() {
    applyBrandDev();
    applyVersionBadge();
    applyBrandHeader();
    if (typeof KDO_ensureLessonsRendered === 'function') KDO_ensureLessonsRendered();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
  window.addEventListener('load', function () {
    applyBrandHeader();
    if (typeof KDO_ensureLessonsRendered === 'function') KDO_ensureLessonsRendered();
  });
  window.addEventListener('resize', fitBrandText);
  applyVersionBadge();

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
