/**
 * Ülkeye göre ilk arayüz dili (Cloudflare CF-IPCountry + tarayıcı yedek).
 * Desteklenmeyen ülke/dil → İngilizce.
 */
(function () {
  'use strict';

  var SUPPORTED = window.KDO_UI_LANGS || ['tr', 'en', 'fr', 'de', 'es', 'it', 'ru', 'ar', 'zh', 'th'];

  var COUNTRY_TO_LOCALE = {
    TR: 'tr',
    US: 'en', GB: 'en', AU: 'en', NZ: 'en', IE: 'en', ZA: 'en', IN: 'en', PH: 'en', NG: 'en',
    CA: 'en', JM: 'en', TT: 'en', GH: 'en', KE: 'en', PK: 'en', BD: 'en', SG: 'en',
    FR: 'fr', BE: 'fr', LU: 'fr', MC: 'fr', SN: 'fr', CI: 'fr', CM: 'fr', MA: 'fr', TN: 'fr',
    DE: 'de', AT: 'de', LI: 'de',
    CH: 'de',
    ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es', VE: 'es', EC: 'es', GT: 'es',
    CU: 'es', BO: 'es', DO: 'es', HN: 'es', PY: 'es', SV: 'es', NI: 'es', CR: 'es', PA: 'es', UY: 'es',
    IT: 'it', SM: 'it', VA: 'it',
    RU: 'ru', BY: 'ru', KZ: 'ru', KG: 'ru', UZ: 'ru', AM: 'ru', AZ: 'ru', MD: 'ru', UA: 'ru',
    SA: 'ar', AE: 'ar', EG: 'ar', IQ: 'ar', JO: 'ar', KW: 'ar', LB: 'ar', OM: 'ar', QA: 'ar',
    SY: 'ar', YE: 'ar', BH: 'ar', DZ: 'ar', LY: 'ar', SD: 'ar', PS: 'ar',
    CN: 'zh', TW: 'zh', HK: 'zh', MO: 'zh',
    TH: 'th',
    JP: 'en', KR: 'en', NL: 'en', SE: 'en', NO: 'en', DK: 'en', FI: 'en', PL: 'en', PT: 'en',
    BR: 'en', GR: 'en', CZ: 'en', HU: 'en', RO: 'en', BG: 'en', HR: 'en', SK: 'en', SI: 'en',
    IL: 'en', ID: 'en', MY: 'en', VN: 'en'
  };

  function pick(code) {
    if (code && SUPPORTED.indexOf(code) >= 0) return code;
    return 'en';
  }

  function localeFromCountry(country) {
    var cc = (country || '').toUpperCase();
    if (!cc || cc === '??' || cc === 'XX') return null;
    return pick(COUNTRY_TO_LOCALE[cc] || 'en');
  }

  function localeFromBrowser() {
    var raw = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    var base = raw.split('-')[0];
    return pick(base);
  }

  function localeFromCountryOrBrowser(country) {
    return localeFromCountry(country) || localeFromBrowser();
  }

  function detectLocaleSync() {
    var saved = localStorage.getItem('kdo:locale') || localStorage.getItem('kdo:ui');
    if (saved && SUPPORTED.indexOf(saved) >= 0) return saved;
    var cached = sessionStorage.getItem('kdo:geo_locale');
    if (cached && SUPPORTED.indexOf(cached) >= 0) return cached;
    return localeFromBrowser();
  }

  async function detectLocale() {
    var saved = localStorage.getItem('kdo:locale') || localStorage.getItem('kdo:ui');
    if (saved && SUPPORTED.indexOf(saved) >= 0) return saved;

    var cached = sessionStorage.getItem('kdo:geo_locale');
    if (cached && SUPPORTED.indexOf(cached) >= 0) return cached;

    try {
      var endpoint = (window.KDO_ANALYTICS || {}).endpoint;
      if (endpoint) {
        var url = String(endpoint).replace(/\/$/, '') + '/geo';
        var res = await fetch(url, { method: 'GET', cache: 'no-store' });
        if (res.ok) {
          var data = await res.json();
          var loc = localeFromCountryOrBrowser(data.country);
          sessionStorage.setItem('kdo:geo_locale', loc);
          if (data.country) sessionStorage.setItem('kdo:geo_country', data.country);
          return loc;
        }
      }
    } catch (_) { /* offline / CORS — browser fallback */ }

    var fallback = localeFromBrowser();
    sessionStorage.setItem('kdo:geo_locale', fallback);
    return fallback;
  }

  window.KDO_localeFromCountry = localeFromCountry;
  window.KDO_localeFromBrowser = localeFromBrowser;
  window.KDO_detectLocaleSync = detectLocaleSync;
  window.KDO_detectLocale = detectLocale;
})();
