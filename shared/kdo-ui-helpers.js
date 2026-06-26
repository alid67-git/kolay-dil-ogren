/**
 * Ortak UI yardımcıları: s() geri dönüşü, Lf(), gramer rol etiketleri.
 */
(function () {
  'use strict';

  function isTr(lang) {
    return lang === 'tr';
  }

  function sFix(UI, lang, key) {
    if (!UI) return key;
    var p = UI[lang];
    if (p && p[key]) return p[key];
    if (UI.en && UI.en[key]) return UI.en[key];
    if (UI.tr && UI.tr[key]) return UI.tr[key];
    return key;
  }

  function Lf(item, field, lang) {
    if (!item) return '';
    if (lang && !isTr(lang)) {
      var loc = item[field + '_' + lang];
      if (loc !== undefined && loc !== '') return loc;
      var en = item[field + '_en'];
      if (en !== undefined && en !== '') return en;
    }
    return item[field] || '';
  }

  function LfNote(piece, lang) {
    if (!piece) return '';
    if (lang && !isTr(lang)) {
      if (piece['note_' + lang]) return piece['note_' + lang];
      if (piece.note_en) return piece.note_en;
    }
    return piece.note || '';
  }

  function resolveAppLang(opts) {
    opts = opts || {};
    if (opts.appKey) {
      var ak = localStorage.getItem(opts.appKey);
      if (ak) return ak;
      if (opts.skipGlobalLocale) {
        return (typeof KDO_detectLocaleSync === 'function' ? KDO_detectLocaleSync() : null)
          || opts.fallback || 'tr';
      }
    }
    if (opts.prefix) {
      var pk = localStorage.getItem(opts.prefix + 'lang');
      if (pk) return pk;
      if (opts.skipGlobalLocale) {
        return (typeof KDO_detectLocaleSync === 'function' ? KDO_detectLocaleSync() : null)
          || opts.fallback || 'tr';
      }
    }
    return localStorage.getItem('kdo:locale')
      || localStorage.getItem('kdo:ui')
      || (typeof KDO_detectLocaleSync === 'function' ? KDO_detectLocaleSync() : null)
      || opts.fallback
      || 'tr';
  }

  function loc(tr, en, th, UI, lang) {
    if (lang === 'tr') return tr;
    if (lang === 'th') return th || en;
    if (UI && UI[lang]) {
      var pack = UI[lang];
      if (pack._loc) {
        if (pack._loc[tr]) return pack._loc[tr];
        if (pack._loc[en]) return pack._loc[en];
      }
    }
    return en;
  }

  function localeTag(lang) {
    var map = {
      tr: 'tr-TR', en: 'en-US', de: 'de-DE', fr: 'fr-FR', es: 'es-ES',
      it: 'it-IT', ru: 'ru-RU', ar: 'ar-SA', zh: 'zh-CN', th: 'th-TH'
    };
    return map[lang] || 'en-US';
  }

  function gramRoleLabel(role, appLang, sFn) {
    var map = {
      S: 'gram_legend_s', V: 'gram_legend_v', O: 'gram_legend_o',
      K: 'gram_legend_k', Q: 'gram_legend_q'
    };
    if (map[role] && sFn) {
      var v = sFn(map[role]);
      if (v && v !== map[role]) return v;
    }
    var ext = {
      greeting: 'gram_role_greeting', farewell: 'gram_role_farewell',
      phrase: 'gram_role_phrase', adj: 'gram_role_adj',
      question: 'gram_role_question', courtesy: 'gram_role_courtesy',
      modal: 'gram_role_modal', name: 'gram_role_name', N: 'gram_role_neg'
    };
    if (ext[role] && sFn) {
      var v2 = sFn(ext[role]);
      if (v2 && v2 !== ext[role]) return v2;
    }
    var en = {
      S: 'Subject', V: 'Verb', O: 'Object', K: 'Modifier', Q: 'Question',
      greeting: 'Greeting', farewell: 'Farewell', phrase: 'Phrase', adj: 'Adjective',
      question: 'Question word', courtesy: 'Courtesy', modal: 'Auxiliary',
      name: 'Name', N: 'Negative'
    };
    var tr = {
      S: 'Özne', V: 'Yüklem', O: 'Nesne', K: 'Zarf / Belirteç', Q: 'Soru',
      greeting: 'Selamlama', farewell: 'Veda', phrase: 'Kalıp ifade', adj: 'Sıfat',
      question: 'Soru kelimesi', courtesy: 'Nezaket', modal: 'Yardımcı fiil',
      name: 'İsim', N: 'Olumsuz'
    };
    var L = isTr(appLang) ? tr : en;
    if (sFn) {
      var sk = map[role] || ext[role];
      if (sk) {
        var sv = sFn(sk);
        if (sv && sv !== sk) return sv;
      }
    }
    return L[role] || role;
  }

  window.KDO_isTr = isTr;
  window.KDO_resolveAppLang = resolveAppLang;
  window.KDO_loc = loc;
  window.KDO_sFix = sFix;
  window.KDO_Lf = Lf;
  window.KDO_LfNote = LfNote;
  window.KDO_gramRoleLabel = gramRoleLabel;
  window.KDO_localeTag = localeTag;
})();
