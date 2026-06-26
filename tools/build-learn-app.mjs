#!/usr/bin/env node
/**
 * Tek arayüz: german-v3.html şablonundan learn.html üretir.
 * Dil özgü ayarlar shared/kdo-lang-registry.js üzerinden gelir.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const templatePath = path.join(root, 'tools', 'app-template.html');
const outPath = path.join(root, 'learn.html');

let html = fs.readFileSync(templatePath, 'utf8');

// Başlık — runtime'da güncellenir
html = html.replace(/<title>[^<]+<\/title>/, '<title>Kolay Dil Öğren</title>');

// Ortak script yığını
const sharedHead = `</style>
<script src="shared/kdo-version.js"></script>
<script src="shared/kdo-lang-registry.js"></script>
<script src="shared/kdo-platform-init.js"></script>
<script src="shared/kdo-ui-i18n.js"></script>
<script src="shared/kdo-ui-extra.js"></script>
<script src="shared/kdo-ui-helpers.js"></script>
<script src="shared/kdo-analytics-config.js"></script>
<script src="shared/kdo-geo-locale.js"></script>
<script src="shared/kdo-translate.js"></script>
<script>
if (!window.KDO_bootLang || !KDO_bootLang()) { /* legacy redirect */ }
</script>
<script id="kdo-gram-turkish-loader"></script>
<script>`;

html = html.replace(
  /<\/style>\s*<script src="shared\/kdo-version\.js"><\/script>[\s\S]*?<script>/,
  sharedHead
);

// Ana uygulama scriptini çıkar ve dönüştür
const scriptStart = html.indexOf('<script>\n// Cache temizleme');
const scriptEnd = html.indexOf('</script>\n\n<!-- EXERCISE OVERLAY -->');
if (scriptStart < 0 || scriptEnd < 0) {
  console.error('Could not find main script block');
  process.exit(1);
}

let app = html.slice(scriptStart + '<script>'.length, scriptEnd);

// Platform-init'e taşınan blokları kaldır
app = app.replace(/\/\/ Cache temizleme[\s\S]*?\(function\(\)\{const _vb[\s\S]*?\}\)\(\);\s*/, '');
app = app.replace(/\/\/ Tayca \(tv3_\*\)[\s\S]*?localStorage\.setItem\(MARK,'1'\);\s*\}\)\(\);\s*/, '');

// Sürüm — platform-init
app = app.replace(
  /const APP_VERSION = window\.KDO_PLATFORM_VERSION \|\| '[^']+';/,
  'const APP_VERSION = window.KDO_APP_VERSION || window.KDO_PLATFORM_VERSION;'
);

// PREFIX — registry'den
app = 'const PREFIX = window.KDO_PREFIX;\nconst KDO_CFG = window.KDO_CFG;\nconst APP_VERSION = window.KDO_APP_VERSION || window.KDO_PLATFORM_VERSION;\n' + app;

// localStorage anahtarları
app = app.replace(/localStorage\.(getItem|setItem|removeItem)\('de1_([^']+)'/g, "localStorage.$1(PREFIX+'$2'");
app = app.replace(/localStorage\.(getItem|setItem|removeItem)\("de1_([^"]+)"/g, 'localStorage.$1(PREFIX+"$2"');
app = app.replace(/_key:\s*'de1_srs'/, "_key: PREFIX+'srs'");

// Ders yolu
app = app.replace(
  /`languages\/de\/lessons\/ders\$\{num\}\.js\?v=\$\{APP_VERSION\}`/,
  '`${KDO_CFG.lessonsPath}/ders${num}.js?v=${APP_VERSION}`'
);

// TTS
app = app.replace(/u\.lang='de-DE'/g, 'u.lang=KDO_CFG.tts');
app = app.replace(/u\.lang = 'de-DE'/g, 'u.lang = KDO_CFG.tts');
app = app.replace(/x\.lang==='de-DE'/g, 'x.lang===KDO_CFG.tts');
app = app.replace(/x\.lang==='de-AT'/g, 'x.lang===KDO_CFG.ttsAlt');
app = app.replace(/x\.lang\.startsWith\('de'\)/g, 'x.lang.startsWith(KDO_CFG.ttsPrefix)');

// Google sesleri
app = app.replace(/de-DE-Chirp3-HD-Aoede/g, "'+KDO_CFG.googleVoiceF+'");
app = app.replace(/de-DE-Chirp3-HD-Orus/g, "'+KDO_CFG.googleVoiceM+'");

// storageBrand
app = app.replace(/localStorage\.getItem\('german_/g, "localStorage.getItem(KDO_CFG.storageBrand+'");
app = app.replace(/localStorage\.setItem\('german_/g, "localStorage.setItem(KDO_CFG.storageBrand+'");

// Gist payload — dinamik anahtarlar
app = app.replace(/payload\.de1_(\w+)/g, "payload[PREFIX+'$1']");
app = app.replace(/de1_star:/g, "[PREFIX+'star']:");
app = app.replace(/de1_complete:/g, "[PREFIX+'complete']:");
app = app.replace(/de1_srs:/g, "[PREFIX+'srs']:");
app = app.replace(/de1_stats:/g, "[PREFIX+'stats']:");

app = app.replace(
  /description:'Kolay Almanca v1 - User Data'/,
  "description:KDO_CFG.nameTr+' v1 - User Data'"
);

// KDO_TRANSLATE — boot'ta ayarlanır
app = app.replace(/window\.KDO_TRANSLATE=\{[^}]+\};?\s*/, '');

// kdo:target init
app = app.replace(/localStorage\.setItem\('kdo:target','de'\);\s*/, '');

// UI_LOCAL hedef dil yaması
const uiPatch = `
function applyTargetUi(){
  const tu=(KDO_CFG&&KDO_CFG.targetUi)||{};
  for(const loc of Object.keys(tu)){
    if(UI_LOCAL[loc]) Object.assign(UI_LOCAL[loc], tu[loc]);
  }
}
function patchL2Meta(){
  if(!KDO_CFG||!KDO_CFG.l2Meta||!LESSONS_META[1]) return;
  const m=KDO_CFG.l2Meta;
  Object.assign(LESSONS_META[1],{
    title:m.title, title_en:m.title_en,
    subtitle:m.subtitle, subtitle_en:m.subtitle_en
  });
}
function runEnLesson2Migration(){
  if(!KDO_CFG||!KDO_CFG.enLesson2Migration) return;
  const mk=PREFIX+'lesson2_migrated';
  if(localStorage.getItem(mk)) return;
  const sv=localStorage.getItem('app_version');
  if(sv && sv !== 'v1.4'){
    const shiftNum=n=>(n>=2?n+1:n);
    const cl=JSON.parse(localStorage.getItem(PREFIX+'complete')||'[]');
    localStorage.setItem(PREFIX+'complete',JSON.stringify([...new Set(cl.map(shiftNum))].sort((a,b)=>a-b)));
    const vt=JSON.parse(localStorage.getItem(PREFIX+'visited')||'{}');
    const newVt={};
    Object.keys(vt).forEach(k=>{
      const m=k.match(/^L(\\d+)_(.+)$/);
      if(m) newVt['L'+shiftNum(+m[1])+'_'+m[2]]=vt[k];
      else newVt[k]=vt[k];
    });
    localStorage.setItem(PREFIX+'visited',JSON.stringify(newVt));
    const st=JSON.parse(localStorage.getItem(PREFIX+'stats')||'{}');
    const newSt={};
    Object.keys(st).forEach(k=>{
      const n=+k;
      newSt[!isNaN(n)?shiftNum(n):k]=st[k];
    });
    localStorage.setItem(PREFIX+'stats',JSON.stringify(newSt));
  }
  localStorage.setItem(mk,'1');
}
applyTargetUi();
`;

app = app.replace('const UI = _mergeUI();', uiPatch + 'const UI = _mergeUI();');
app = app.replace(
  'const LESSONS_META = [',
  'const LESSONS_META = ['
);
app = app.replace(
  /(const LESSONS_META = \[[\s\S]*?\];)/,
  '$1\npatchL2Meta();\nrunEnLesson2Migration();'
);

// Help içeriğinde hedef dil etiketleri (seçili alanlar)
app = app.replace(
  /en\?'Easy German Learning':'Kolay Almanca Öğrenme'/g,
  "en?KDO_CFG.nameEn:KDO_CFG.title"
);
app = app.replace(
  /en\?'Easy German Learning · Guide':'Kolay Almanca · Rehber'/g,
  "en?KDO_CFG.nameEn+' · Guide':KDO_CFG.nameTr+' · Rehber'"
);

// Gramer tablosu başlığı
app = app.replace(
  /\$\{appLang!=='tr'\?'German':'Almanca'\}/g,
  "${appLang!=='tr'?KDO_CFG.targetLabelEn:KDO_CFG.targetLabelTr}"
);

// INIT sonuna gram-turkish ve brand
const initExtra = `
if((KDO_CFG.extras||[]).includes('gram-turkish')){
  window.KDO_TURKISH_APP=true;
  const gs=document.getElementById('kdo-gram-turkish-loader');
  if(gs){ const s=document.createElement('script'); s.src='shared/kdo-gram-turkish.js'; gs.parentNode.insertBefore(s,gs); }
}
if(typeof KDO_applyBrandHeader==='function') KDO_applyBrandHeader();
`;

app = app.replace('gistAutoSync();\n}', 'gistAutoSync();\n}' + initExtra);

html = html.slice(0, scriptStart) + '<script>' + app + html.slice(scriptEnd);

// Marka — placeholder
html = html.replace(
  /<div class="brand">🇩🇪 Kolay Almanca<\/div>/,
  '<div class="brand">Kolay Dil Öğren</div>'
);

// Versiyon rozeti — platform-init doldurur
html = html.replace(
  /<span class="vbadge" id="app-version">[^<]*<\/span>/,
  '<span class="vbadge" id="app-version"></span>'
);

fs.writeFileSync(outPath, html);
console.log('Built learn.html (' + html.split('\n').length + ' lines)');
