/** Hedef dile göre zamir tablosu (Ders 1) */
(function () {
  'use strict';

  function wrap(sFn, rows, hintKey) {
    return (
      '<div style="background:#f0fdf9;border:1.5px solid #b2dfdb;border-radius:12px;padding:12px 14px;margin-bottom:16px;">' +
      '<div style="font-size:12px;font-weight:700;color:#0d9488;margin-bottom:10px;">👤 ' + sFn('ui_pronouns_ref') + '</div>' +
      '<table style="width:100%;border-collapse:collapse;font-size:12px;">' +
      '<tr style="border-bottom:1px solid #b2dfdb;">' +
      '<th style="text-align:left;padding:5px 6px;color:#555;font-weight:600;">' + sFn('ui_col_person') + '</th>' +
      '<th style="text-align:left;padding:5px 6px;color:#555;font-weight:600;">' + sFn('ui_col_target') + '</th>' +
      '<th style="text-align:left;padding:5px 6px;color:#555;font-weight:600;">' + sFn('ui_col_meaning') + '</th>' +
      '<th style="text-align:left;padding:5px 6px;color:#555;font-weight:600;">' + sFn('ui_col_note') + '</th>' +
      '</tr>' + rows +
      '</table>' +
      '<div style="font-size:10px;color:#888;margin-top:8px;">💡 ' + sFn(hintKey || 'ui_more_grammar') + '</div>' +
      '</div>'
    );
  }

  function row(label, target, meaning, note) {
    return (
      '<tr style="border-bottom:1px solid #e0f2f1;background:white;">' +
      '<td style="padding:6px 6px;font-weight:700;color:#0d9488;">' + label + '</td>' +
      '<td style="padding:6px 6px;font-weight:700;font-size:15px;">' + target + '</td>' +
      '<td style="padding:6px 6px;">' + meaning + '</td>' +
      '<td style="padding:6px 6px;color:#888;">' + (note || '') + '</td></tr>'
    );
  }

  var TABLES = {
    de: function (s) {
      return wrap(s,
        row(s('pron_row_1sg'), 'ich', 'Ben', s('pron_note_lower')) +
        row(s('pron_row_2sg_inf'), 'du', 'Sen', s('pron_note_inf')) +
        row(s('pron_row_2sg_form'), 'Sie', 'Siz', s('pron_note_formal')) +
        row(s('pron_row_3sg'), 'er / sie / es', 'O', s('pron_note_gender')) +
        row(s('pron_row_1pl'), 'wir', 'Biz', '') +
        row(s('pron_row_3pl'), 'sie / Sie', 'Onlar / Siz', s('pron_note_sie'))
      );
    },
    tk: function (s) {
      return wrap(s,
        row(s('pron_row_1sg'), 'ben', s('tk_pron_ben'), '') +
        row(s('pron_row_2sg_inf'), 'sen', s('tk_pron_sen'), s('pron_note_inf')) +
        row(s('pron_row_2sg_form'), 'siz', s('tk_pron_siz'), s('pron_note_formal')) +
        row(s('pron_row_3sg'), 'o', s('tk_pron_o'), '') +
        row(s('pron_row_1pl'), 'biz', s('tk_pron_biz'), '') +
        row(s('pron_row_3pl'), 'onlar', s('tk_pron_onlar'), '')
      );
    },
    en: function (s) {
      return wrap(s,
        row(s('pron_row_1sg'), 'I', s('en_pron_i'), '') +
        row(s('pron_row_2sg_inf'), 'you', s('en_pron_you'), s('pron_note_inf')) +
        row(s('pron_row_3sg'), 'he / she / it', s('en_pron_he'), s('pron_note_gender')) +
        row(s('pron_row_1pl'), 'we', s('en_pron_we'), '') +
        row(s('pron_row_3pl'), 'they', s('en_pron_they'), '')
      );
    },
    fr: function (s) {
      return wrap(s,
        row(s('pron_row_1sg'), 'je', 'I / ben', '') +
        row(s('pron_row_2sg_inf'), 'tu', 'you (inf.)', s('pron_note_inf')) +
        row(s('pron_row_2sg_form'), 'vous', 'you (form.)', s('pron_note_formal')) +
        row(s('pron_row_3sg'), 'il / elle', 'he / she', s('pron_note_gender')) +
        row(s('pron_row_1pl'), 'nous', 'we', '') +
        row(s('pron_row_3pl'), 'ils / elles', 'they', '')
      );
    },
    es: function (s) {
      return wrap(s,
        row(s('pron_row_1sg'), 'yo', 'I', '') +
        row(s('pron_row_2sg_inf'), 'tú', 'you (inf.)', s('pron_note_inf')) +
        row(s('pron_row_2sg_form'), 'usted', 'you (form.)', s('pron_note_formal')) +
        row(s('pron_row_3sg'), 'él / ella', 'he / she', '') +
        row(s('pron_row_1pl'), 'nosotros', 'we', '') +
        row(s('pron_row_3pl'), 'ellos / ellas', 'they', '')
      );
    },
    it: function (s) {
      return wrap(s,
        row(s('pron_row_1sg'), 'io', 'I', '') +
        row(s('pron_row_2sg_inf'), 'tu', 'you (inf.)', s('pron_note_inf')) +
        row(s('pron_row_2sg_form'), 'Lei', 'you (form.)', s('pron_note_formal')) +
        row(s('pron_row_3sg'), 'lui / lei', 'he / she', '') +
        row(s('pron_row_1pl'), 'noi', 'we', '') +
        row(s('pron_row_3pl'), 'loro', 'they', '')
      );
    },
    ru: function (s) {
      return wrap(s,
        row(s('pron_row_1sg'), 'я', 'I', '') +
        row(s('pron_row_2sg_inf'), 'ты', 'you (inf.)', s('pron_note_inf')) +
        row(s('pron_row_2sg_form'), 'Вы', 'you (form.)', s('pron_note_formal')) +
        row(s('pron_row_3sg'), 'он / она', 'he / she', '') +
        row(s('pron_row_1pl'), 'мы', 'we', '') +
        row(s('pron_row_3pl'), 'они', 'they', '')
      );
    },
    ar: function (s) {
      return wrap(s,
        row(s('pron_row_1sg'), 'أنا', 'I', '') +
        row(s('pron_row_2sg_inf'), 'أنت', 'you', s('pron_note_inf')) +
        row(s('pron_row_3sg'), 'هو / هي', 'he / she', '') +
        row(s('pron_row_1pl'), 'نحن', 'we', '') +
        row(s('pron_row_3pl'), 'هم', 'they', '')
      );
    },
    zh: function (s) {
      return wrap(s,
        row(s('pron_row_1sg'), '我', 'I', '') +
        row(s('pron_row_2sg_inf'), '你', 'you', s('pron_note_inf')) +
        row(s('pron_row_3sg'), '他 / 她', 'he / she', '') +
        row(s('pron_row_1pl'), '我们', 'we', '') +
        row(s('pron_row_3pl'), '他们', 'they', '')
      );
    },
  };

  window.KDO_buildPronounTable = function (meta, sFn) {
    if (!meta || meta.num !== 1) return '';
    var tgt = (window.KDO_TARGET || (window.KDO_CFG && window.KDO_CFG.kdoTarget) || 'de');
    var fn = TABLES[tgt] || TABLES.de;
    return fn(sFn || function (k) { return k; });
  };
})();
