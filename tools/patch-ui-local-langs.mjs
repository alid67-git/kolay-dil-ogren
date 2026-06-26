#!/usr/bin/env node
/** Her uygulamaya de/fr/es/it/ru UI_LOCAL + _mergeUI iyilestirmesi */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const TARGET = {
  'german-v3.html': { de: 'Deutsch', en: 'German', fr: 'allemand', es: 'alemán', it: 'tedesco', ru: 'немецкий' },
  'english-v3.html': { de: 'Englisch', en: 'English', fr: 'anglais', es: 'inglés', it: 'inglese', ru: 'английский' },
  'french-v3.html': { de: 'Französisch', en: 'French', fr: 'français', es: 'francés', it: 'francese', ru: 'французский' },
  'spanish-v3.html': { de: 'Spanisch', en: 'Spanish', fr: 'espagnol', es: 'español', it: 'spagnolo', ru: 'испанский' },
  'italian-v3.html': { de: 'Italienisch', en: 'Italian', fr: 'italien', es: 'italiano', it: 'italiano', ru: 'итальянский' },
  'russian-v3.html': { de: 'Russisch', en: 'Russian', fr: 'russe', es: 'ruso', it: 'russo', ru: 'русский' },
  'arabic-v3.html': { de: 'Arabisch', en: 'Arabic', fr: 'arabe', es: 'árabe', it: 'arabo', ru: 'арабский' },
  'chinese-v3.html': { de: 'Chinesisch', en: 'Chinese', fr: 'chinois', es: 'chino', it: 'cinese', ru: 'китайский' },
  'turkish-v3.html': { de: 'Türkisch', en: 'Turkish', fr: 'turc', es: 'turco', it: 'turco', ru: 'турецкий' },
  'tayca-v3.html': { de: 'Thailändisch', en: 'Thai', fr: 'thaï', es: 'tailandés', it: 'thai', ru: 'тайский' },
};

function block(lang, name, meaning) {
  const L = { de: 'Bedeutung', fr: 'Sens', es: 'Significado', it: 'Significato', ru: 'Значение' };
  const m = L[lang] || 'Meaning';
  const flags = { de: '🇩🇪', fr: '🇫🇷', es: '🇪🇸', it: '🇮🇹', ru: '🇷🇺' };
  const mix = { de: 'Gemischt', fr: 'Mixte', es: 'Mixto', it: 'Misto', ru: 'Смешанный' };
  return `  ${lang}:{
    test_dir_en2tr:'${name} → ${m}',
    test_dir_tr2en:'${m} → ${name}',
    test_dir_mix:'${mix[lang]}',
    review_q_en2tr:'${flags[lang]||''} ${name} → ${m}',
    review_q_tr2en:'🇹🇷 ${m} → ${name}',
    translate_placeholder:'${name} / ${m}...',
    translate_tip:'${name} veya ${m} yazın.',
    settings_voices:'🔊 ${name}',
    settings_voices_loading:'...',
    pron_col_english:'${name}'
  },`;
}

const mergeOld = `function _mergeUI(){
  const langs = window.KDO_UI_LANGS || ['tr','en'];
  const ui = {};
  for(const l of langs){
    ui[l] = Object.assign({}, (window.KDO_UI||{})[l]||{}, (UI_LOCAL[l]||{}));
  }
  return ui;
}`;

const mergeNew = `function _mergeUI(){
  const langs = window.KDO_UI_LANGS || ['tr','en'];
  const ui = {};
  for(const l of langs){
    const locBase = l==='tr' ? (UI_LOCAL.tr||{}) : (UI_LOCAL.en||{});
    ui[l] = Object.assign({}, locBase, (window.KDO_UI||{})[l]||{}, (UI_LOCAL[l]||{}));
  }
  return ui;
}`;

for (const [file, names] of Object.entries(TARGET)) {
  const fp = path.join(root, file);
  let s = fs.readFileSync(fp, 'utf8');

  if (!s.includes('UI_LOCAL.de')) {
    const extra = ['de', 'fr', 'es', 'it', 'ru'].map(l => block(l, names[l], names.en)).join('\n');
    s = s.replace(/\n\};\n\nfunction _mergeUI/, `,\n${extra}\n};\n\nfunction _mergeUI`);
  }

  if (s.includes(mergeOld)) s = s.replace(mergeOld, mergeNew);

  const lfOld = /function Lf\(item, field\)\{\s*if\(!item\) return '';\s*if\(appLang!==?'tr'[\s\S]*?return item\[field\] \|\| '';\s*\}/;
  const lfNew = `function Lf(item,field){
  if(!item) return '';
  if(typeof KDO_Lf==='function') return KDO_Lf(item,field,appLang);
  if(appLang!=='tr'&&item[field+'_en']!==undefined) return item[field+'_en'];
  return item[field]||'';
}`;
  if (lfOld.test(s)) s = s.replace(lfOld, lfNew);

  // gramNote Lf
  s = s.replace(/, e\.gramNote\)/g, ", Lf(e,'gramNote')||e.gramNote)");
  s = s.replace(/, l\.gramNote\)/g, ", Lf(l,'gramNote')||l.gramNote)");
  s = s.replace(/, sp\.gramNote\)/g, ", Lf(sp,'gramNote')||sp.gramNote)");
  s = s.replace(/line\.gramNote\)/g, "Lf(line,'gramNote')||line.gramNote)");

  fs.writeFileSync(fp, s);
  console.log('patched', file);
}
