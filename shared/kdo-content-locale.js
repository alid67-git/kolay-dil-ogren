/**
 * Ders içeriği yerelleştirme: anlam, ipucu, açıklama.
 */
(function () {
  'use strict';

  function meaningBaseLang() {
    var tgt = window.KDO_CFG && (window.KDO_CFG.kdoTarget || window.KDO_CFG.code);
    if (tgt === 'tk') return 'en';
    return 'tr';
  }

  function glossLookup(lang, text) {
    if (!text || !window.KDO_GLOSS || !window.KDO_GLOSS[lang]) return '';
    var g = window.KDO_GLOSS[lang];
    var k = String(text).trim();
    return g[k] || g[k.toLowerCase()] || '';
  }

  function bridgeGloss(lang, bridge) {
    if (!bridge) return '';
    var hit = glossLookup(lang, bridge);
    if (hit) return hit;
    var parts = String(bridge).split(/\s*\/\s*|\s*—\s*|\s*–\s*/);
    for (var i = 0; i < parts.length; i++) {
      hit = glossLookup(lang, parts[i].trim());
      if (hit) return hit;
    }
    return '';
  }

  function Lm(item, field, lang) {
    if (!item) return '';
    field = field || 'tr';
    lang = lang || 'tr';

    var loc = item[field + '_' + lang];
    if (loc !== undefined && loc !== '') return loc;

    var bridge = item[field];
    if (bridge === undefined || bridge === null) bridge = '';
    bridge = String(bridge);

    if (lang === 'tr') return bridge;

    var hit = bridgeGloss(lang, bridge);
    if (!hit && field === 'tr') {
      hit = glossLookup(lang, item.en) || glossLookup(lang, item.th);
    }
    if (hit) return hit;

    var en = item[field + '_en'];
    if (en !== undefined && en !== '') {
      var glossed = glossLookup(lang, en);
      if (glossed) return glossed;
      if (lang === 'en' || (field === 'explanation' || field === 'explain' || field === 'title')) return en;
    }

    if (lang === 'en') return bridge;

    if (meaningBaseLang() === 'en') return bridge;

    return '';
  }

  function Ltips(item, lang) {
    if (!item) return null;
    lang = lang || 'tr';
    if (lang !== 'tr' && item['tips_' + lang] && item['tips_' + lang].length) return item['tips_' + lang];
    if (lang !== 'tr' && item.tips_en && item.tips_en.length) return item.tips_en;
    if (lang === 'tr' && item.tips) return item.tips;
    if (!item.tips || !item.tips.length) return null;
    if (lang === 'tr') return item.tips;
    return item.tips.map(function (t) { return glossLookup(lang, t) || (meaningBaseLang() === 'en' ? t : ''); }).filter(Boolean);
  }

  window.KDO_meaningBaseLang = meaningBaseLang;
  window.KDO_glossLookup = glossLookup;
  window.KDO_Lm = Lm;
  window.KDO_Ltips = Ltips;
})();
