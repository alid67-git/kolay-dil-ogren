/**
 * Ayarlar içinden dil / hedef uygulama seçici (hub) — köşede ✕ ile kapat.
 */
(function () {
  'use strict';

  var APP = 'kdo';
  var ROUTES = {
    tk: 'learn.html?t=tk', th: 'tayca-v3.html', en: 'learn.html?t=en',
    de: 'learn.html?t=de', it: 'learn.html?t=it', es: 'learn.html?t=es',
    fr: 'learn.html?t=fr', ru: 'learn.html?t=ru', ar: 'learn.html?t=ar',
    zh: 'learn.html?t=zh', ha: 'learn.html?t=ha'
  };
  var LANG_KEYS = {
    tk: 'tk1_lang', th: 'tv3_lang', en: 'en1_lang', de: 'de1_lang',
    it: 'it1_lang', es: 'es1_lang', fr: 'fr1_lang', ru: 'ru1_lang',
    ar: 'ar1_lang', zh: 'zh1_lang', ha: 'ha1_lang'
  };
  var HUB_UI = {
    tr: { title: 'Dil değiştir', locale: 'Arayüz dili', target: 'Öğrenilecek dil', apply: 'Uygula', cancel: 'İptal' },
    en: { title: 'Change language', locale: 'Interface language', target: 'Language to learn', apply: 'Apply', cancel: 'Cancel' },
    fr: { title: 'Changer de langue', locale: "Langue de l'interface", target: 'Langue à apprendre', apply: 'Appliquer', cancel: 'Annuler' },
    de: { title: 'Sprache wechseln', locale: 'Oberflächensprache', target: 'Zu lernende Sprache', apply: 'Anwenden', cancel: 'Abbrechen' },
    es: { title: 'Cambiar idioma', locale: 'Idioma de la interfaz', target: 'Idioma a aprender', apply: 'Aplicar', cancel: 'Cancelar' },
    it: { title: 'Cambia lingua', locale: 'Lingua interfaccia', target: 'Lingua da imparare', apply: 'Applica', cancel: 'Annulla' },
    ru: { title: 'Сменить язык', locale: 'Язык интерфейса', target: 'Изучаемый язык', apply: 'Применить', cancel: 'Отмена' },
    ar: { title: 'تغيير اللغة', locale: 'لغة الواجهة', target: 'اللغة المطلوبة', apply: 'تطبيق', cancel: 'إلغاء' },
    zh: { title: '切换语言', locale: '界面语言', target: '学习语言', apply: '应用', cancel: '取消' },
    th: { title: 'เปลี่ยนภาษา', locale: 'ภาษาอินเทอร์เฟซ', target: 'ภาษาที่เรียน', apply: 'ใช้', cancel: 'ยกเลิก' }
  };

  function uiLang() {
    if (typeof appLang !== 'undefined' && appLang) return appLang;
    var tgt = currentTarget();
    var key = LANG_KEYS[tgt];
    if (key) {
      var appLoc = localStorage.getItem(key);
      if (appLoc) return appLoc;
    }
    return localStorage.getItem(APP + ':locale') || localStorage.getItem(APP + ':ui') || 'tr';
  }

  function hubPack() {
    return HUB_UI[uiLang()] || HUB_UI.en;
  }

  function currentTarget() {
    return localStorage.getItem(APP + ':target') || 'th';
  }

  function injectStyles() {
    if (document.getElementById('kdo-hub-picker-style')) return;
    var st = document.createElement('style');
    st.id = 'kdo-hub-picker-style';
    st.textContent = [
      '#lang-hub-overlay .lang-hub-modal{position:relative;max-width:400px;width:100%;}',
      '#lang-hub-overlay .lang-hub-close{position:absolute;top:10px;right:10px;z-index:2;',
      'background:#f3f4f6;border:none;width:32px;height:32px;border-radius:50%;',
      'font-size:18px;line-height:1;cursor:pointer;color:#666;display:flex;align-items:center;justify-content:center;}',
      '#lang-hub-overlay .lang-hub-close:hover{background:#e5e7eb;color:#333;}',
      '#lang-hub-overlay .lang-hub-title{font-size:16px;font-weight:700;margin:0 36px 14px 0;color:#134e4a;}',
      '#lang-hub-overlay .hub-field{margin-bottom:12px;}',
      '#lang-hub-overlay .hub-field label{display:block;font-size:10px;font-weight:800;text-transform:uppercase;',
      'letter-spacing:.06em;color:#667085;margin-bottom:5px;}',
      '#lang-hub-overlay .hub-field select{width:100%;padding:6px 10px;border:1.5px solid #e5e7eb;',
      'border-radius:10px;font-size:14px;font-weight:600;color:#172033;background:#fff;',
      'overflow-y:auto;}',
      '#lang-hub-overlay .hub-field select option{padding:8px 10px;line-height:1.8;}',
      '#lang-hub-overlay .lang-hub-actions{display:flex;gap:8px;margin-top:16px;}',
      '#lang-hub-overlay .lang-hub-apply{flex:1;padding:12px;border:0;border-radius:10px;background:#0d9488;',
      'color:#fff;font-size:14px;font-weight:700;cursor:pointer;}',
      '#lang-hub-overlay .lang-hub-cancel{flex:0 0 auto;padding:12px 16px;border:1.5px solid #e5e7eb;',
      'border-radius:10px;background:#fff;font-size:14px;font-weight:600;cursor:pointer;color:#555;}',
      '@media(prefers-color-scheme:dark){',
      '#lang-hub-overlay .lang-hub-close{background:#333;color:#aaa;}',
      '#lang-hub-overlay .lang-hub-title{color:#e0f2f1;}',
      '#lang-hub-overlay .hub-field select{background:#2a2a2a;border-color:#444;color:#e0e0e0;}',
      '#lang-hub-overlay .hub-field label{color:#888;}',
      '#lang-hub-overlay .lang-hub-cancel{background:#2a2a2a;border-color:#444;color:#ccc;}',
      '}'
    ].join('');
    document.head.appendChild(st);
  }

  function injectOverlay() {
    if (document.getElementById('lang-hub-overlay')) return;
    injectStyles();
    var el = document.createElement('div');
    el.id = 'lang-hub-overlay';
    el.className = 'overlay';
    el.innerHTML = [
      '<div class="modal lang-hub-modal">',
      '  <button type="button" class="lang-hub-close" id="lang-hub-close-btn" aria-label="Close">✕</button>',
      '  <div class="lang-hub-title" id="lang-hub-title">Dil değiştir</div>',
      '  <div class="hub-field"><label id="lang-hub-lbl-locale">Arayüz dili</label>',
      '    <select id="lang-hub-locale">',
      '      <option value="tr">Türkçe</option><option value="en">English</option>',
      '      <option value="fr">Français</option><option value="de">Deutsch</option>',
      '      <option value="es">Español</option><option value="it">Italiano</option>',
      '      <option value="ru">Русский</option><option value="ar">العربية</option>',
      '      <option value="zh">中文</option><option value="th">ไทย</option>',
      '    </select></div>',
      '  <div class="hub-field"><label id="lang-hub-lbl-target">Öğrenilecek dil</label>',
      '    <select id="lang-hub-target" size="5" style="height:auto;overflow-y:auto;">',
      '      <option value="tk">🇹🇷 Türkçe Öğrenme</option>',
      '      <option value="ha">🇳🇬 Hausa</option>',
      '      <option value="th">🇹🇭 Tayca</option>',
      '      <option value="en">🇬🇧 İngilizce</option>',
      '      <option value="de">🇩🇪 Almanca</option>',
      '      <option value="it">🇮🇹 İtalyanca</option>',
      '      <option value="es">🇪🇸 İspanyolca</option>',
      '      <option value="fr">🇫🇷 Fransızca</option>',
      '      <option value="ru">🇷🇺 Rusça</option>',
      '      <option value="ar">🇸🇦 Arapça</option>',
      '      <option value="zh">🇨🇳 Çince</option>',
      '    </select></div>',
      '  <div class="lang-hub-actions">',
      '    <button type="button" class="lang-hub-cancel" id="lang-hub-cancel-btn">İptal</button>',
      '    <button type="button" class="lang-hub-apply" id="lang-hub-apply-btn">Uygula</button>',
      '  </div>',
      '</div>'
    ].join('');
    document.body.appendChild(el);
    document.getElementById('lang-hub-close-btn').onclick = closeLangHubPicker;
    document.getElementById('lang-hub-cancel-btn').onclick = closeLangHubPicker;
    document.getElementById('lang-hub-apply-btn').onclick = applyLangHub;
    el.addEventListener('click', function (e) {
      if (e.target === el) closeLangHubPicker();
    });
  }

  function refreshLabels() {
    var p = hubPack();
    var t = document.getElementById('lang-hub-title');
    var ll = document.getElementById('lang-hub-lbl-locale');
    var tl = document.getElementById('lang-hub-lbl-target');
    var ab = document.getElementById('lang-hub-apply-btn');
    var cb = document.getElementById('lang-hub-cancel-btn');
    var x = document.getElementById('lang-hub-close-btn');
    if (t) t.textContent = '🌐 ' + p.title;
    if (ll) ll.textContent = p.locale;
    if (tl) tl.textContent = p.target;
    if (ab) ab.textContent = p.apply;
    if (cb) cb.textContent = p.cancel;
    if (x) x.setAttribute('aria-label', p.cancel);
  }

  function openLangHubPicker() {
    injectOverlay();
    refreshLabels();
    var locSel = document.getElementById('lang-hub-locale');
    var tgtSel = document.getElementById('lang-hub-target');
    if (locSel) locSel.value = uiLang();
    if (tgtSel) tgtSel.value = currentTarget();
    document.getElementById('lang-hub-overlay').classList.add('open');
  }

  function closeLangHubPicker() {
    var ov = document.getElementById('lang-hub-overlay');
    if (ov) ov.classList.remove('open');
  }

  function applyLangHub() {
    var loc = document.getElementById('lang-hub-locale').value;
    var tgt = document.getElementById('lang-hub-target').value;
    var prevTgt = currentTarget();
    localStorage.setItem(APP + ':locale', loc);
    localStorage.setItem(APP + ':ui', loc);
    localStorage.setItem(APP + ':base', loc);
    localStorage.setItem(APP + ':target', tgt);
    localStorage.setItem(APP + ':setup-done', '1');
    localStorage.setItem(LANG_KEYS[tgt] || 'tv3_lang', loc);
    closeLangHubPicker();
    if (typeof closeModal === 'function') closeModal('settings-overlay');
    if (tgt === prevTgt && typeof setLang === 'function') {
      setLang(loc);
      return;
    }
    location.href = ROUTES[tgt] || ROUTES.th;
  }

  window.openLangHubPicker = openLangHubPicker;
  window.closeLangHubPicker = closeLangHubPicker;
})();
