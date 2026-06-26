/**
 * Çeviri: arayüz dili ↔ öğrenilen dil (aynı dil çifti asla olmaz).
 * Her uygulama window.KDO_TRANSLATE = { target, targetRe, targetLabel? } tanımlar.
 */
(function () {
  'use strict';

  var UI_TO_GT = {
    tr: 'tr', en: 'en', fr: 'fr', de: 'de', es: 'es',
    it: 'it', ru: 'ru', ar: 'ar', zh: 'zh-CN', th: 'th'
  };

  var GT_TO_UI = {
    tr: 'tr', en: 'en', fr: 'fr', de: 'de', es: 'es',
    it: 'it', ru: 'ru', ar: 'ar', 'zh-CN': 'zh', th: 'th'
  };

  var FLAGS = {
    tr: '🇹🇷', en: '🇬🇧', fr: '🇫🇷', de: '🇩🇪', es: '🇪🇸',
    it: '🇮🇹', ru: '🇷🇺', ar: '🇸🇦', zh: '🇨🇳', th: '🇹🇭'
  };

  var NAMES = {
    tr: { tr: 'Türkçe', en: 'İngilizce', fr: 'Fransızca', de: 'Almanca', es: 'İspanyolca', it: 'İtalyanca', ru: 'Rusça', ar: 'Arapça', zh: 'Çince', th: 'Tayca' },
    en: { tr: 'Turkish', en: 'English', fr: 'French', de: 'German', es: 'Spanish', it: 'Italian', ru: 'Russian', ar: 'Arabic', zh: 'Chinese', th: 'Thai' },
    fr: { tr: 'turc', en: 'anglais', fr: 'français', de: 'allemand', es: 'espagnol', it: 'italien', ru: 'russe', ar: 'arabe', zh: 'chinois', th: 'thaï' },
    de: { tr: 'Türkisch', en: 'Englisch', fr: 'Französisch', de: 'Deutsch', es: 'Spanisch', it: 'Italienisch', ru: 'Russisch', ar: 'Arabisch', zh: 'Chinesisch', th: 'Thailändisch' },
    es: { tr: 'turco', en: 'inglés', fr: 'francés', de: 'alemán', es: 'español', it: 'italiano', ru: 'ruso', ar: 'árabe', zh: 'chino', th: 'tailandés' },
    it: { tr: 'turco', en: 'inglese', fr: 'francese', de: 'tedesco', es: 'spagnolo', it: 'italiano', ru: 'russo', ar: 'arabo', zh: 'cinese', th: 'thai' },
    ru: { tr: 'турецкий', en: 'английский', fr: 'французский', de: 'немецкий', es: 'испанский', it: 'итальянский', ru: 'русский', ar: 'арабский', zh: 'китайский', th: 'тайский' },
    ar: { tr: 'التركية', en: 'الإنجليزية', fr: 'الفرنسية', de: 'الألمانية', es: 'الإسبانية', it: 'الإيطالية', ru: 'الروسية', ar: 'العربية', zh: 'الصينية', th: 'التايلاندية' },
    zh: { tr: '土耳其语', en: '英语', fr: '法语', de: '德语', es: '西班牙语', it: '意大利语', ru: '俄语', ar: '阿拉伯语', zh: '中文', th: '泰语' },
    th: { tr: 'ตุรกี', en: 'อังกฤษ', fr: 'ฝรั่งเศส', de: 'เยอรมัน', es: 'สเปน', it: 'อิตาลี', ru: 'รัสเซีย', ar: 'อาหรับ', zh: 'จีน', th: 'ไทย' }
  };

  var BASE_RE = {
    tr: /[çğıöşüÇĞİÖŞÜ]/,
    en: /\b(the|is|are|was|were|hello|what|how|where|when|why|you|me|my|your|this|that|have|has|do|does|can|will|would|please|thanks|thank|yes|no|good|morning|evening)\b/i,
    fr: /[àâæçéèêëîïôùûüœÀÂÆÇÉÈÊËÎÏÔÙÛÜŒ]|\b(je|tu|il|elle|nous|vous|ils|elles|le|la|les|un|une|est|sont|pas|avec|pour|bonjour|merci|oui|non)\b/i,
    de: /[äöüßÄÖÜ]|\b(ich|du|er|sie|wir|ihr|der|die|das|ist|sind|nicht|und|oder|mit|von|hallo|danke)\b/i,
    es: /[áéíóúüñ¿¡]|\b(yo|tú|él|ella|el|la|los|las|es|son|no|con|para|hola|gracias|sí)\b/i,
    it: /[àèéìòù]|\b(io|tu|lui|lei|il|lo|la|i|è|sono|non|con|per|ciao|grazie|sì)\b/i,
    ru: /[а-яА-ЯёЁ]/,
    ar: /[\u0600-\u06FF]/,
    zh: /[\u4e00-\u9fff]/,
    th: /[\u0E00-\u0E7F]/
  };

  function uiGt() {
    var lang = (typeof appLang !== 'undefined' ? appLang : 'tr') || 'tr';
    return UI_TO_GT[lang] || 'en';
  }

  function nameFor(gtCode) {
    var ui = (typeof appLang !== 'undefined' ? appLang : 'tr') || 'tr';
    var key = GT_TO_UI[gtCode] || gtCode;
    return (NAMES[ui] && NAMES[ui][key]) || (NAMES.en && NAMES.en[key]) || gtCode;
  }

  function flagFor(gtCode) {
    var key = GT_TO_UI[gtCode] || gtCode;
    return FLAGS[key] || '🌐';
  }

  function getPair() {
    var cfg = window.KDO_TRANSLATE || {};
    var target = cfg.target || 'en';
    var base = uiGt();
    if (base === target) {
      var fb = cfg.fallback;
      if (!fb) {
        if (target === 'tr') fb = 'en';
        else if (target === 'en') fb = 'tr';
        else if (target === 'th') fb = 'en';
        else fb = 'en';
      }
      base = fb;
    }
    if (base === target) base = 'en';
    return { base: base, target: target };
  }

  function detectTranslateDir(q) {
    var pair = getPair();
    var base = pair.base;
    var target = pair.target;
    var t = (q || '').trim();
    if (!t) return { from: base, to: target, isFromTarget: false, base: base, target: target };

    var targetRe = window.KDO_TRANSLATE && window.KDO_TRANSLATE.targetRe;
    if (targetRe && targetRe.test(t)) {
      return { from: target, to: base, isFromTarget: true, base: base, target: target };
    }

    var uiKey = GT_TO_UI[base] || 'en';
    var baseRe = BASE_RE[uiKey] || BASE_RE.en;
    if (baseRe.test(t)) {
      return { from: base, to: target, isFromTarget: false, base: base, target: target };
    }

    return { from: base, to: target, isFromTarget: false, base: base, target: target };
  }

  function translateHint(dir) {
    dir = dir || detectTranslateDir('');
    var fromN = nameFor(dir.from);
    var toN = nameFor(dir.to);
    return flagFor(dir.from) + ' ' + fromN + ' → ' + flagFor(dir.to) + ' ' + toN;
  }

  function translatePlaceholder() {
    var p = getPair();
    var ui = (typeof appLang !== 'undefined' ? appLang : 'tr') || 'tr';
    var a = nameFor(p.base);
    var b = nameFor(p.target);
    if (ui === 'tr') return a + ' veya ' + b + ' yaz...';
    if (ui === 'en') return 'Type ' + a + ' or ' + b + '...';
    if (ui === 'fr') return 'Écrivez en ' + a + ' ou ' + b + '...';
    if (ui === 'de') return a + ' oder ' + b + ' eingeben...';
    if (ui === 'es') return 'Escribe en ' + a + ' o ' + b + '...';
    if (ui === 'it') return 'Scrivi in ' + a + ' o ' + b + '...';
    if (ui === 'ru') return 'Введите ' + a + ' или ' + b + '...';
    if (ui === 'ar') return 'اكتب بال' + a + ' أو ' + b + '...';
    if (ui === 'zh') return '输入' + a + '或' + b + '...';
    if (ui === 'th') return 'พิมพ์' + a + ' หรือ ' + b + '...';
    return a + ' / ' + b + '...';
  }

  function translateTip() {
    var ui = (typeof appLang !== 'undefined' ? appLang : 'tr') || 'tr';
    var p = getPair();
    var a = nameFor(p.base);
    var b = nameFor(p.target);
    if (ui === 'tr') return a + ' ↔ ' + b + ' anında çeviri. Aynı dilde çeviri yapılmaz.';
    if (ui === 'en') return 'Instant ' + a + ' ↔ ' + b + ' translation.';
    return a + ' ↔ ' + b;
  }

  function lessonSearchField(dir) {
    var cfg = window.KDO_TRANSLATE || {};
    if (dir.isFromTarget) return cfg.lessonTargetField || 'en';
    var base = dir.base;
    if (base === 'tr') return 'tr';
    if (base === 'en') return cfg.lessonBaseField || 'en';
    return cfg.lessonBaseField || 'tr';
  }

  function claudeTranslatePrompt(q, dir) {
    var fromN = nameFor(dir.from);
    var toN = nameFor(dir.to);
    var ui = (typeof appLang !== 'undefined' ? appLang : 'tr') || 'tr';
    if (ui === 'en') {
      return 'Translate this ' + fromN + ' phrase to ' + toN + ': "' + q + '"\n\nRespond ONLY in this format:\n' + toN + ': ...\nNote: ...';
    }
    if (ui === 'tr') {
      return 'Kullanıcı şu ' + fromN + ' ifadeyi ' + toN + ' diline çevirmek istiyor: "' + q + '"\n\nŞu formatta cevap ver (başka hiçbir şey yazma):\n' + toN + ': ...\nAçıklama: ...';
    }
    if (ui === 'fr') {
      return 'Traduisez cette phrase ' + fromN + ' en ' + toN + ' : "' + q + '"\n\nRépondez UNIQUEMENT dans ce format :\n' + toN + ' : ...\nNote : ...';
    }
    if (ui === 'de') {
      return 'Übersetze diesen ' + fromN + '-Satz ins ' + toN + ': "' + q + '"\n\nAntworte NUR in diesem Format:\n' + toN + ': ...\nHinweis: ...';
    }
    if (ui === 'es') {
      return 'Traduce esta frase de ' + fromN + ' a ' + toN + ': "' + q + '"\n\nResponde SOLO en este formato:\n' + toN + ': ...\nNota: ...';
    }
    if (ui === 'it') {
      return 'Traduci questa frase da ' + fromN + ' a ' + toN + ': "' + q + '"\n\nRispondi SOLO in questo formato:\n' + toN + ': ...\nNota: ...';
    }
    return 'Translate "' + q + '" from ' + fromN + ' to ' + toN + '.\nFormat:\n' + toN + ': ...\nNote: ...';
  }

  function claudeSystemPrompt() {
    var ui = (typeof appLang !== 'undefined' ? appLang : 'tr') || 'tr';
    var tgt = nameFor((window.KDO_TRANSLATE || {}).target || 'en');
    if (ui === 'en') return 'You are a ' + tgt + ' language teacher. Give short, clear, instructive answers.';
    if (ui === 'tr') return 'Sen bir ' + tgt + ' öğretmenisin. Kısa, net ve öğretici cevaplar ver.';
    if (ui === 'fr') return 'Tu es professeur de ' + tgt + '. Réponses courtes et claires.';
    if (ui === 'de') return 'Du bist ' + tgt + '-Lehrer. Kurze, klare Antworten.';
    if (ui === 'es') return 'Eres profesor de ' + tgt + '. Respuestas breves y claras.';
    if (ui === 'it') return 'Sei insegnante di ' + tgt + '. Risposte brevi e chiare.';
    return 'You are a ' + tgt + ' language teacher. Give short, clear answers.';
  }

  window.KDO_UI_TO_GT = UI_TO_GT;
  window.KDO_getTranslatePair = getPair;
  window.KDO_detectTranslateDir = detectTranslateDir;
  window.KDO_translateHint = translateHint;
  window.KDO_translatePlaceholder = translatePlaceholder;
  window.KDO_translateTip = translateTip;
  window.KDO_translateName = nameFor;
  window.KDO_lessonSearchField = lessonSearchField;
  window.KDO_claudeTranslatePrompt = claudeTranslatePrompt;
  window.KDO_claudeSystemPrompt = claudeSystemPrompt;
})();
