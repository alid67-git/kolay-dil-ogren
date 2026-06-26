#!/usr/bin/env node
/**
 * i18n v4 — çok dilli arayüz düzeltmeleri (tayca + learn şablonu)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = ['tayca-v3.html', path.join('tools', 'app-template.html')];

const mergeUIOld = /function _mergeUI\(\)\{\s*const langs = window\.KDO_UI_LANGS \|\| \['tr','en'\];\s*const ui = \{\};\s*for\(const l of langs\)\{\s*const locBase = l==='tr' \? \(UI_LOCAL\.tr\|\|\{\}\) : \(UI_LOCAL\.en\|\|\{\}\);\s*ui\[l\] = Object\.assign\(\{\}, locBase, \(window\.KDO_UI\|\|\{\}\)\[l\]\|\|\{\}, \(UI_LOCAL\[l\]\|\|\{\}\)\);\s*\}\s*return ui;\s*\}/;

const mergeUINew = `function _mergeUI(){
  const langs = window.KDO_UI_LANGS || ['tr','en'];
  const ui = {};
  const KUI = window.KDO_UI || {};
  for(const l of langs){
    const locBase = l==='tr' ? (UI_LOCAL.tr||{})
      : l==='en' ? (UI_LOCAL.en||{})
      : Object.assign({}, UI_LOCAL.en||{}, KUI.en||{}, KUI[l]||{});
    ui[l] = Object.assign({}, locBase, KUI[l]||{}, (UI_LOCAL[l]||{}));
  }
  return ui;
}`;

const subtitleOld = /function lessonSubtitle\(meta\)\{\s*if\(!meta\) return '';\s*return appLang!==['"]tr['"] \? \(meta\.title\|\|''\) : \(meta\.title_en\|\|''\);\s*\}/;
const subtitleNew = `function lessonSubtitle(meta){
  if(!meta) return '';
  const sub = appLang!=='tr' ? (meta.subtitle_en||meta.subtitle) : (meta.subtitle||meta.subtitle_en);
  if(sub) return sub;
  return appLang!=='tr' ? (meta.title_en||meta.title||'') : (meta.title||meta.title_en||'');
}`;

const replacements = [
  [/\(appLang!==['"]tr['"]\?['"]Lesson ['"]:['"]Ders ['"]\)/g, "s('lesson_prefix')+' '"],
  [/\(appLang!==['"]tr['"]\?['"]tabs['"]:['"]sekme['"]\)/g, "s('ui_tabs')"],
  [/\(appLang!==['"]tr['"]\?['"]Mark:['"]:['"]İşaret:['"]\)/g, "s('ui_mark')"],
  [/\(appLang!==['"]tr['"]\?['"]System:['"]:['"]Sistem:['"]\)/g, "s('ui_system')"],
  [/\(appLang!==['"]tr['"]\?['"]🔢 Basic Numbers \(0–9\)['"]:['"]🔢 Temel Rakamlar \(0–9\)['"]\)/g, "s('ui_basic_numbers')"],
  [/\(appLang!==['"]tr['"]\?['"]🔟 Tens \(10–100\)['"]:['"]🔟 Onlar \(10–100\)['"]\)/g, "s('ui_tens')"],
  [/\(appLang!==['"]tr['"]\?['"]💯 Large Units['"]:['"]💯 Büyük Birimler['"]\)/g, "s('ui_large_units')"],
  [/\(appLang!==['"]tr['"]\?['"]Starred items['"]:['"]Yıldızlılar['"]\)/g, "s('ui_starred')"],
  [/alert\(appLang!==['"]tr['"]\?['"]Saved\.['"]:['"]Kaydedildi\.['"]\)/g, "alert(s('ui_saved'))"],
  [/appLang!==['"]tr['"]\?['"]Save Gist token first\.['"]:['"]Önce Gist token kaydet\.['"]/g, "s('ui_gist_first')"],
  [/'⏳ '\+\(appLang!==['"]tr['"]\?['"]Uploading\.\.\.['"]:['"]Yükleniyor\.\.\.['"]\)/g, "'⏳ '+s('ui_uploading')"],
  [/'⏳ '\+\(appLang!==['"]tr['"]\?['"]Searching\.\.\.['"]:['"]Aranıyor\.\.\.['"]\)/g, "'⏳ '+s('ui_searching')"],
  [/appLang!==['"]tr['"]\?['"]Unknown error['"]:['"]Bilinmeyen hata['"]/g, "s('gist_error')"],
  [/appLang!==['"]tr['"]\?['"]Gist file not found\.['"]:['"]Gist dosyası bulunamadı\.['"]/g, "s('gist_no_file')"],
  [/'❌ '\+\(appLang!==['"]tr['"]\?['"]Error: ['"]:['"]Hata: ['"]\)/g, "'❌ '+s('ui_error')+' '"],
  [/toLocaleTimeString\(appLang!==['"]tr['"]\?['"]en-US['"]:['"]tr-TR['"]/g, "toLocaleTimeString(typeof KDO_localeTag==='function'?KDO_localeTag(appLang):(appLang==='tr'?'tr-TR':'en-US')"],
  [/toLocaleString\(appLang!==['"]tr['"]\?['"]en-US['"]:['"]tr-TR['"]/g, "toLocaleString(typeof KDO_localeTag==='function'?KDO_localeTag(appLang):(appLang==='tr'?'tr-TR':'en-US')"],
  [/'✅ '\+\(appLang!==['"]tr['"]\?['"]Saved to cloud · ['"]:['"]Buluta kaydedildi · ['"]\)/g, "'✅ '+s('ui_saved_cloud')+' · '"],
  [/appLang!==['"]tr['"]\?['"]No cloud data found\. First push from another device\.['"]:['"]Bulutta veri bulunamadı\. Önce bir cihazdan "Buluta Kaydet" yap\.['"]/g, "s('ui_no_cloud')"],
  [/appLang!==['"]tr['"]\?['"]Device speech \(Web Speech API\)['"]:['"]Cihaz sesi \(Web Speech API\)['"]/g, "s('ui_device_tts')"],
  [/appLang!==['"]tr['"]\?['"]Uses your phone\/browser built-in voices — no API key needed\.['"]:['"]Telefon\/tarayıcının yerleşik sesleri kullanılır — API anahtarı gerekmez\.['"]/g, "s('ui_device_tts_info')"],
  [/appLang!==['"]tr['"]\?['"]Could not load lesson data\. Please open the lesson first\.['"]:['"]Ders verisi yüklenemedi\. Lütfen önce derse girin\.['"]/g, "s('ui_lesson_load_fail')"],
  [/appLang===["']en["']\?["']Add Anthropic API Key in ⚙️ Settings for Claude translation\.["']:["']Claude çevirisi için ⚙️ Ayarlar\\'dan Anthropic API Key ekle\.["']/g, "s('claude_api_warn')"],
  [/\$\{appLang!==['"]tr['"]\?['"]Start here:['"]:['"]Buradan başla:['"]\}/g, "${s('ui_start_here')}"],
  [/\$\{appLang!==['"]tr['"]\?['"]Learn one word at a time\. Listen 🔊, repeat aloud, then try 🐢 slow mode\. Build sentences only after you know the words\.['"]:['"]Önce tek tek kelimeleri öğren\. 🔊 dinle, yüksek sesle tekrar et, sonra 🐢 yavaş modu dene\. Cümlelere kelimeler oturduktan sonra geç\.['"]\}/g, "${s('ui_learn_words')}"],
  [/\$\{appLang!==['"]tr['"]\?['"]Personal Pronouns — Quick Reference['"]:['"]Kişi Zamirleri — Hızlı Referans['"]\}/g, "${s('ui_pronouns_ref')}"],
  [/\$\{appLang!==['"]tr['"]\?['"]Person['"]:['"]Kişi['"]\}/g, "${s('ui_col_person')}"],
  [/\$\{appLang!==['"]tr['"]\?['"]Note['"]:['"]Not['"]\}/g, "${s('ui_col_note')}"],
  [/\$\{appLang!==['"]tr['"]\?['"]Form['"]:['"]Biçim['"]\}/g, "${s('ui_col_form')}"],
  [/\$\{appLang!==['"]tr['"]\?['"]Rule['"]:['"]Kural['"]\}/g, "${s('ui_col_rule')}"],
  [/\$\{appLang!==['"]tr['"]\?['"]Example['"]:['"]Örnek['"]\}/g, "${s('ui_col_example')}"],
  [/\$\{appLang!==['"]tr['"]\?['"]More examples → Grammar tab → Rule 1['"]:['"]Detaylı örnekler → Gramer sekmesi → Kural 1['"]\}/g, "${s('ui_more_grammar')}"],
];

// Tayca: de/fr/es/it/ru yama anahtarları th2tr ile uyumlu
const taycaKeyFixes = [
  [/test_dir_en2tr:/g, 'test_dir_th2tr:'],
  [/test_dir_tr2en:/g, 'test_dir_tr2th:'],
  [/review_q_en2tr:/g, 'review_q_th2tr:'],
  [/review_q_tr2en:/g, 'review_q_tr2th:'],
  [/translate_placeholder:[^\n]+\n/g, ''],
  [/translate_tip:[^\n]+\n/g, ''],
];

const geoHead = `<script src="shared/kdo-analytics-config.js"></script>
<script src="shared/kdo-geo-locale.js"></script>
<script src="shared/kdo-translate.js"></script>`;

const geoBodyOld = /<script src="shared\/kdo-analytics-config\.js"><\/script>\s*<script src="shared\/kdo-geo-locale\.js"><\/script>\s*<script src="shared\/kdo-translate\.js"><\/script>/;

const geoAsyncOld = /if\(localStorage\.getItem\('kdo:locale'\)\) return;/g;
const geoAsyncNew = `if(localStorage.getItem('kdo:locale')) return;
  if(localStorage.getItem('tv3_lang')) return;
  if(typeof PREFIX!=='undefined'&&localStorage.getItem(PREFIX+'lang')) return;`;

const learnGeoAsyncNew = `if(localStorage.getItem('kdo:locale')) return;
  if(typeof PREFIX!=='undefined'&&localStorage.getItem(PREFIX+'lang')) return;`;

for (const rel of files) {
  const fp = path.join(root, rel);
  if (!fs.existsSync(fp)) continue;
  let s = fs.readFileSync(fp, 'utf8');
  const isTayca = rel.includes('tayca');

  if (mergeUIOld.test(s)) s = s.replace(mergeUIOld, mergeUINew);
  if (subtitleOld.test(s)) s = s.replace(subtitleOld, subtitleNew);

  for (const [a, b] of replacements) s = s.replace(a, b);

  if (isTayca) {
    for (const [a, b] of taycaKeyFixes) s = s.replace(a, b);
    if (!s.includes('kdo-geo-locale.js') || s.indexOf('kdo-geo-locale.js') > s.indexOf('</head>')) {
      if (!s.includes('shared/kdo-geo-locale.js')) {
        s = s.replace(
          '<script src="shared/kdo-ui-helpers.js"></script>',
          '<script src="shared/kdo-ui-helpers.js"></script>\n' + geoHead
        );
      }
      s = s.replace(geoBodyOld, '');
    }
    s = s.replace(geoAsyncOld, geoAsyncNew);
  } else {
    s = s.replace(geoAsyncOld, learnGeoAsyncNew);
  }

  // UI_LOCAL de/fr/es/it/ru: translate alanlarını kaldır (KDO_translate kullanır)
  if (isTayca) {
    s = s.replace(/(  de:\{[^}]*)(translate_placeholder:[^\n]*\n)/g, '$1');
    s = s.replace(/(  de:\{[^}]*)(translate_tip:[^\n]*\n)/g, '$1');
    ['fr', 'es', 'it', 'ru'].forEach(loc => {
      const re = new RegExp(`(  ${loc}:\\{[^}]*)(translate_placeholder:[^\\n]*\\n)`, 'g');
      s = s.replace(re, '$1');
      const re2 = new RegExp(`(  ${loc}:\\{[^}]*)(translate_tip:[^\\n]*\\n)`, 'g');
      s = s.replace(re2, '$1');
    });
  }

  fs.writeFileSync(fp, s);
  console.log('patched', rel);
}

console.log('i18n v4 patch complete');
