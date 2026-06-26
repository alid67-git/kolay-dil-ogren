#!/usr/bin/env node
/** Sync platform version across all language HTML apps */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const VERSION = 'v2.2.5';

const htmlFiles = [
  'english-v3.html', 'german-v3.html', 'italian-v3.html',
  'spanish-v3.html', 'french-v3.html', 'tayca-v3.html',
  'russian-v3.html', 'arabic-v3.html', 'chinese-v3.html', 'turkish-v3.html'
];

const openModalOld = /if\(id==='help-overlay'\)\{\s*const v = document\.getElementById\('app-version'\);\s*const hv = document\.getElementById\('hakkinda-version'\);\s*if\(v && hv\) hv\.textContent = v\.textContent;\s*\}/;
const openModalNew = `if(id==='help-overlay'){
    const hv = document.getElementById('hakkinda-version');
    if(hv) hv.textContent = APP_VERSION;
  }`;

for (const file of htmlFiles) {
  const fp = path.join(root, file);
  let s = fs.readFileSync(fp, 'utf8');

  if (!s.includes('kdo-version.js')) {
    s = s.replace('</style>\n<script>', '</style>\n<script src="shared/kdo-version.js"></script>\n<script>');
  }

  s = s.replace(/const APP_VERSION = window\.KDO_PLATFORM_VERSION \|\| 'v[^']+';/, `const APP_VERSION = window.KDO_PLATFORM_VERSION || '${VERSION}';`);
  s = s.replace(/<strong id="hakkinda-version">v[^<]+<\/strong>/, `<strong id="hakkinda-version">${VERSION}</strong>`);
  s = s.replace(/<div class="changelog-ver">v3\.46\+<\/div>/, `<div class="changelog-ver">${VERSION}</div>`);
  s = s.replace(/<span class="vbadge" id="app-version">[^<]*<\/span>/, `<span class="vbadge" id="app-version">${VERSION}</span>`);
  s = openModalOld.test(s) ? s.replace(openModalOld, openModalNew) : s;

  if (!s.includes('_vb.textContent=APP_VERSION')) {
    s = s.replace(
      "localStorage.setItem('app_version', APP_VERSION);",
      `localStorage.setItem('app_version', APP_VERSION);\n(function(){const _vb=document.getElementById('app-version');if(_vb)_vb.textContent=APP_VERSION;})();`
    );
  }

  fs.writeFileSync(fp, s);
  console.log('patched', file);
}

// index.html
const idx = path.join(root, 'index.html');
let ix = fs.readFileSync(idx, 'utf8');
if (!ix.includes('kdo-version.js')) {
  ix = ix.replace('</style>\n</head>', '</style>\n<script src="shared/kdo-version.js"></script>\n</head>');
}
ix = ix.replace(/<div class="ver">[^<]*<\/div>/, `<div class="ver" id="platform-ver">${VERSION}</div>`);
if (!ix.includes('platform-ver')) {
  ix = ix.replace('</body>', `<script>document.getElementById('platform-ver').textContent=window.KDO_PLATFORM_VERSION||'${VERSION}';</script>\n</body>`);
}
fs.writeFileSync(idx, ix);
console.log('patched index.html');

console.log('Platform version:', VERSION);
