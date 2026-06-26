#!/usr/bin/env node
/** Add developer credit under brand + fix Ali Dinçer spelling in help */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const htmlFiles = [
  'english-v3.html', 'german-v3.html', 'italian-v3.html',
  'spanish-v3.html', 'french-v3.html', 'tayca-v3.html',
  'russian-v3.html', 'arabic-v3.html', 'chinese-v3.html',
  'index.html'
];

const brandStyle = `.brand-wrap{display:flex;flex-direction:column;line-height:1.2;}
.brand-dev{font-size:9px;font-weight:500;color:rgba(255,255,255,.55);letter-spacing:.02em;margin-top:1px;}`;

for (const file of htmlFiles) {
  const fp = path.join(root, file);
  if (!fs.existsSync(fp)) continue;
  let s = fs.readFileSync(fp, 'utf8');

  // CSS
  if (!s.includes('.brand-dev')) {
    if (file === 'index.html') {
      s = s.replace(
        'h1{margin:0 0 6px;font-size:22px;color:#134e4a}',
        `h1{margin:0 0 2px;font-size:22px;color:#134e4a}
.dev-credit{margin:0 0 6px;font-size:10px;color:#94a3b8;font-weight:500}`
      );
    } else if (s.includes('.brand{font-size:17px')) {
      s = s.replace(
        '.brand{font-size:17px;font-weight:700;white-space:nowrap;}',
        `.brand-wrap{display:flex;flex-direction:column;line-height:1.2;}
.brand{font-size:17px;font-weight:700;white-space:nowrap;}
.brand-dev{font-size:9px;font-weight:500;color:rgba(255,255,255,.55);letter-spacing:.02em;margin-top:1px;}`
      );
    }
  }

  // Header brand wrap (language apps)
  if (file !== 'index.html' && s.includes('<div class="brand">') && !s.includes('id="brand-dev"')) {
    s = s.replace(
      /<div class="brand">([^<]+)<\/div>/,
      `<div class="brand-wrap"><div class="brand">$1</div><div class="brand-dev" id="brand-dev"></div></div>`
    );
  }

  // index.html developer credit
  if (file === 'index.html' && !s.includes('id="dev-credit"')) {
    s = s.replace(
      '<h1>Kolay Dil Ogren</h1>',
      '<h1>Kolay Dil Ogren</h1>\n  <p class="dev-credit" id="dev-credit"></p>'
    );
  }

  // Fix help developer name
  s = s.replace(/Ali Dincer/g, 'Ali Dinçer');

  // Brand dev update on lang switch (language apps)
  if (file !== 'index.html' && s.includes('id="brand-dev"') && !s.includes("getElementById('brand-dev')")) {
    if (s.includes('function setLang(lang){')) {
      s = s.replace(
        'function setLang(lang){',
        `function setLang(lang){
  const _bd=document.getElementById('brand-dev');if(_bd)_bd.textContent=lang==='en'?'Developed by: Ali Dinçer':'Geliştiren: Ali Dinçer';`
      );
    }
    if (s.includes('function setUiLang(lang){')) {
      s = s.replace(
        'function setUiLang(lang){',
        `function setUiLang(lang){
  const _bd=document.getElementById('brand-dev');if(_bd)_bd.textContent=lang==='en'?'Developed by: Ali Dinçer':'Geliştiren: Ali Dinçer';`
      );
    }
    // Initial display on page load
    s = s.replace(
      "localStorage.setItem('app_version', APP_VERSION);",
      `localStorage.setItem('app_version', APP_VERSION);
(function(){const _bd=document.getElementById('brand-dev');const _l=localStorage.getItem('kdo:locale')||'tr';if(_bd)_bd.textContent=_l==='en'?'Developed by: Ali Dinçer':'Geliştiren: Ali Dinçer';})();`
    );
  }

  if (file === 'index.html' && !s.includes("getElementById('dev-credit')")) {
    s = s.replace(
      'document.documentElement.lang=locale;',
      `document.documentElement.lang=locale;
  const dc=document.getElementById('dev-credit');if(dc)dc.textContent=locale==='en'?'Developed by: Ali Dinçer':'Geliştiren: Ali Dinçer';`
    );
  }

  fs.writeFileSync(fp, s);
  console.log('patched', file);
}
