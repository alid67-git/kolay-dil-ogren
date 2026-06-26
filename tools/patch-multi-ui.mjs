#!/usr/bin/env node
/**
 * Inject shared UI i18n, merge locales, expand language selector, fix dev credit.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = fs.readdirSync(root).filter(f => f.endsWith('-v3.html'));

const mergeBlock = `
function _mergeUI(){
  const langs = window.KDO_UI_LANGS || ['tr','en'];
  const ui = {};
  for(const l of langs){
    ui[l] = Object.assign({}, (window.KDO_UI||{})[l]||{}, (UI_LOCAL[l]||{}));
  }
  return ui;
}
const UI = _mergeUI();
function devCredit(lang){ return (window.KDO_UI_DEV||{})[lang] || (window.KDO_UI_DEV||{}).tr || ''; }
function uiB(en, tr){ return appLang==='tr' ? tr : en; }
`;

const langButtons = ``; // unused — inline in replace below

const initLangButtons = `
function _initLangButtons(){
  const wrap = document.getElementById('lang-btn-wrap');
  if(!wrap) return;
  const langs = window.KDO_UI_LANGS || ['tr','en'];
  const labels = window.KDO_UI_LABELS || {tr:'🇹🇷 Türkçe',en:'🇬🇧 English'};
  wrap.innerHTML = langs.map(l=>\`<button class="setting-btn lang-btn" data-lang="\${l}" onclick="setLang('\${l}')" style="flex:0 1 auto;min-width:46%;font-size:12px;padding:8px 6px;">\${labels[l]||l}</button>\`).join('');
  wrap.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===appLang));
}
`;

for (const file of files) {
  let s = fs.readFileSync(path.join(root, file), 'utf8');

  if (!s.includes('kdo-ui-i18n.js')) {
    s = s.replace(
      '<script src="shared/kdo-version.js"></script>',
      '<script src="shared/kdo-version.js"></script>\n<script src="shared/kdo-ui-i18n.js"></script>'
    );
  }

  if (!s.includes('const UI_LOCAL')) {
    s = s.replace('const UI = {', 'const UI_LOCAL = {');
    s = s.replace(/\n};\n\nfunction s\(key\)/, '\n};\n' + mergeBlock + '\nfunction s(key)');
  }

  if (!s.includes('id="lang-btn-wrap"')) {
    s = s.replace(
      /<div style="display:flex;gap:8px;margin-top:6px;">\s*<button class="setting-btn lang-btn[\s\S]*?<\/div>\s*<\/div>\s*<div class="setting-row"><div class="setting-label">Anthropic API Key/,
      `<div id="lang-btn-wrap" style="display:flex;flex-wrap:wrap;gap:6px;margin-top:6px;"></div>
    </div>
    <div class="setting-row"><div class="setting-label">Anthropic API Key`
    );
  }

  if (!s.includes('function _initLangButtons')) {
    s = s.replace(
      'function setLang(lang){',
      initLangButtons + '\nfunction setLang(lang){'
    );
    s = s.replace(
      /const _bd=document\.getElementById\('brand-dev'\);if\(_bd\)_bd\.textContent=lang==='en'\?'Developed by: Ali Dinçer':'Geliştiren: Ali Dinçer';/,
      "const _bd=document.getElementById('brand-dev');if(_bd)_bd.textContent=devCredit(lang);"
    );
    s = s.replace(
      /\(function\(\)\{const _bd=document\.getElementById\('brand-dev'\);const _l=localStorage\.getItem\('kdo:locale'\)\|\|'tr';if\(_bd\)_bd\.textContent=_l==='en'\?'Developed by: Ali Dinçer':'Geliştiren: Ali Dinçer';\}\)\(\);/,
      "(function(){const _bd=document.getElementById('brand-dev');const _l=localStorage.getItem('kdo:locale')||'tr';if(_bd)_bd.textContent=devCredit(_l);})();"
    );
    s = s.replace(
      "document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));",
      "_initLangButtons();"
    );
    s = s.replace(
      'document.querySelectorAll(\'.lang-btn\').forEach(b=>b.classList.toggle(\'active\', b.dataset.lang===appLang));',
      '_initLangButtons();'
    );
  }

  // Lf: non-Turkish UI uses _en fields
  s = s.replace(
    "if(appLang==='en' && item[field+'_en']!==undefined)",
    "if(appLang!=='tr' && item[field+'_en']!==undefined)"
  );
  s = s.replace(
    "const sub = appLang==='en' ? (meta.subtitle_en||meta.subtitle) : (meta.subtitle||meta.subtitle_en);",
    "const sub = appLang!=='tr' ? (meta.subtitle_en||meta.subtitle) : (meta.subtitle||meta.subtitle_en);"
  );
  s = s.replace(
    "return appLang==='en' ? (meta.title_en||'') : (meta.title_en||'');",
    "return appLang!=='tr' ? (meta.title_en||meta.title||'') : (meta.title||meta.title_en||'');"
  );

  if (s.includes("en?'🏠 General':'🏠 Genel'")) {
    s = s.replace(
      "document.getElementById('htab-btn-genel').textContent   = en?'🏠 General':'🏠 Genel';",
      "document.getElementById('htab-btn-genel').textContent   = '🏠 '+s('help_tab_guide');"
    );
    s = s.replace(
      "document.getElementById('htab-btn-hakkinda').textContent= en?'ℹ️ About':'ℹ️ Hakkında';",
      "document.getElementById('htab-btn-hakkinda').textContent= 'ℹ️ '+s('help_tab_about');"
    );
  }

  // buildHelpContent: non-Turkish UI langs use English text
  s = s.replace(
    'function buildHelpContent(){\n  const en = appLang===\'en\';',
    "function buildHelpContent(){\n  const en = appLang!=='tr';"
  );

  // Exercise module
  s = s.replace(
    /const en = appLang==='en';\s*\/\/ exercise/g,
    "const en = appLang!=='tr'; // exercise"
  );

  fs.writeFileSync(path.join(root, file), s);
  console.log('Patched:', file);
}

// index.html hub UI languages
const idxPath = path.join(root, 'index.html');
let ix = fs.readFileSync(idxPath, 'utf8');
if (!ix.includes('kdo-ui-i18n.js')) {
  ix = ix.replace(
    '<script src="shared/kdo-version.js"></script>',
    '<script src="shared/kdo-version.js"></script>\n<script src="shared/kdo-ui-i18n.js"></script>'
  );
}
const localeOptions = `      <option value="tr">Turkce</option>
      <option value="en">English</option>
      <option value="fr">Francais</option>
      <option value="de">Deutsch</option>
      <option value="es">Espanol</option>
      <option value="it">Italiano</option>
      <option value="ru">Русский</option>
      <option value="ar">العربية</option>
      <option value="zh">中文</option>
      <option value="th">ไทย</option>`;
ix = ix.replace(
  /<select id="locale">[\s\S]*?<\/select>/,
  `<select id="locale">\n${localeOptions}\n    </select>`
);
// Hub ui strings for all locales
if (!ix.includes('fr:{intro:')) {
  ix = ix.replace(
    `const ui={
  tr:{intro:'Tayca, Ingilizce, Almanca, Italyanca, Ispanyolca, Fransizca, Rusca, Arapca ve Cince — tam surumler.',locale:'Arayuz dili',target:'Ogrenilecek dil',go:'Basla',note:'Tam dersler, detayli gramer, alistirma ve SRS.'},
  en:{intro:'Thai, English, German, Italian, Spanish, French, Russian, Arabic and Chinese — full apps.',locale:'Interface language',target:'Language to learn',go:'Start',note:'Full lessons, detailed grammar, practice and SRS.'}
};`,
    `const HUB_UI={
  tr:{intro:'10 dil — tam surumler, detayli gramer.',locale:'Arayuz dili',target:'Ogrenilecek dil',go:'Basla',note:'Tam dersler, detayli gramer, alistirma ve SRS.',dev:'Gelistiren: Ali Dinçer'},
  en:{intro:'10 languages — full apps with detailed grammar.',locale:'Interface language',target:'Language to learn',go:'Start',note:'Full lessons, grammar, practice and SRS.',dev:'Developed by: Ali Dinçer'},
  fr:{intro:'10 langues — lecons completes et grammaire detaillee.',locale:'Langue de l interface',target:'Langue a apprendre',go:'Commencer',note:'Lecons, grammaire, exercices et SRS.',dev:'Developpe par : Ali Dinçer'},
  de:{intro:'10 Sprachen — vollstandige Lektionen und Grammatik.',locale:'Oberflachensprache',target:'Zu lernende Sprache',go:'Starten',note:'Lektionen, Grammatik, Ubung und SRS.',dev:'Entwickelt von: Ali Dinçer'},
  es:{intro:'10 idiomas — lecciones completas y gramatica detallada.',locale:'Idioma de la interfaz',target:'Idioma a aprender',go:'Empezar',note:'Lecciones, gramatica, practica y SRS.',dev:'Desarrollado por: Ali Dinçer'},
  it:{intro:'10 lingue — lezioni complete e grammatica dettagliata.',locale:'Lingua interfaccia',target:'Lingua da imparare',go:'Inizia',note:'Lezioni, grammatica, pratica e SRS.',dev:'Sviluppato da: Ali Dinçer'},
  ru:{intro:'10 языков — полные уроки и грамматика.',locale:'Язык интерфейса',target:'Изучаемый язык',go:'Начать',note:'Уроки, грамматика, практика и SRS.',dev:'Разработчик: Ali Dinçer'},
  ar:{intro:'10 لغات — دروس كاملة وقواعد مفصلة.',locale:'لغة الواجهة',target:'اللغة المطلوبة',go:'ابدأ',note:'دروس وقواعد وتمرين وSRS.',dev:'المطور: علي دينشر'},
  zh:{intro:'10种语言——完整课程与详细语法。',locale:'界面语言',target:'学习语言',go:'开始',note:'课程、语法、练习和SRS。',dev:'开发者：Ali Dinçer'},
  th:{intro:'10 ภาษา — บทเรียนครบและไวยากรณ์ละเอียด',locale:'ภาษาอินเทอร์เฟซ',target:'ภาษาที่เรียน',go:'เริ่ม',note:'บทเรียน ไวยากรณ์ ฝึกหัด และ SRS',dev:'พัฒนาโดย: Ali Dinçer'}
};
const ui=HUB_UI;`
  );
  ix = ix.replace(
    `const dc=document.getElementById('dev-credit');if(dc)dc.textContent=locale==='en'?'Developed by: Ali Dinçer':'Geliştiren: Ali Dinçer';`,
    `const dc=document.getElementById('dev-credit');if(dc)dc.textContent=(HUB_UI[locale]||HUB_UI.tr).dev;`
  );
}
// Add Turkish target option
if (!ix.includes("value=\"tk\"")) {
  ix = ix.replace(
    '<option value="th">Tayca',
    '<option value="tk">Turkce — Turkce</option>\n      <option value="th">Tayca'
  );
  ix = ix.replace(
    "const ROUTES={th:'tayca-v3.html'",
    "const ROUTES={tk:'turkish-v3.html',th:'tayca-v3.html'"
  );
  ix = ix.replace(
    "const LANG_KEYS={th:'tv3_lang'",
    "const LANG_KEYS={tk:'tk1_lang',th:'tv3_lang'"
  );
}
fs.writeFileSync(idxPath, ix);
console.log('Patched: index.html');
