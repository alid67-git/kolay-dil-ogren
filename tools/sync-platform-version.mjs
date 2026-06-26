#!/usr/bin/env node
/** sync-platform-version.mjs — tek kaynak: shared/kdo-version.js */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const verJs = fs.readFileSync(path.join(root, 'shared', 'kdo-version.js'), 'utf8');
const m = verJs.match(/KDO_PLATFORM_VERSION\s*=\s*'([^']+)'/);
if (!m) {
  console.error('Could not read version from kdo-version.js');
  process.exit(1);
}
const VERSION = m[1];

const htmlFiles = [
  'learn.html', 'tayca-v3.html',
  'english-v3.html', 'german-v3.html', 'italian-v3.html',
  'spanish-v3.html', 'french-v3.html',
  'russian-v3.html', 'arabic-v3.html', 'chinese-v3.html', 'turkish-v3.html',
];

const openModalOld = /if\(id==='help-overlay'\)\{\s*const v = document\.getElementById\('app-version'\);\s*const hv = document\.getElementById\('hakkinda-version'\);\s*if\(v && hv\) hv\.textContent = v\.textContent;\s*\}/;
const openModalNew = `if(id==='help-overlay'){
    const hv = document.getElementById('hakkinda-version');
    if(hv) hv.textContent = APP_VERSION;
  }`;

for (const file of htmlFiles) {
  const fp = path.join(root, file);
  if (!fs.existsSync(fp)) continue;
  let s = fs.readFileSync(fp, 'utf8');
  if (s.length < 500) continue; // redirect stub

  if (!s.includes('kdo-version.js')) {
    s = s.replace('</style>\n<script>', '</style>\n<script src="shared/kdo-version.js"></script>\n<script>');
  }
  if (!s.includes('kdo-platform-init.js') && file === 'learn.html') {
    s = s.replace(
      '<script src="shared/kdo-version.js"></script>',
      '<script src="shared/kdo-version.js"></script>\n<script src="shared/kdo-platform-init.js"></script>'
    );
  }

  s = s.replace(
    /const APP_VERSION = window\.KDO_APP_VERSION \|\| window\.KDO_PLATFORM_VERSION;/,
    'const APP_VERSION = window.KDO_APP_VERSION || window.KDO_PLATFORM_VERSION;'
  );
  s = s.replace(
    /const APP_VERSION = window\.KDO_PLATFORM_VERSION \|\| 'v[^']+';/,
    'const APP_VERSION = window.KDO_APP_VERSION || window.KDO_PLATFORM_VERSION;'
  );
  s = s.replace(/<strong id="hakkinda-version">v[^<]+<\/strong>/, `<strong id="hakkinda-version">${VERSION}</strong>`);
  s = s.replace(/<span class="vbadge" id="app-version">[^<]*<\/span>/, '<span class="vbadge" id="app-version"></span>');
  s = openModalOld.test(s) ? s.replace(openModalOld, openModalNew) : s;

  fs.writeFileSync(fp, s);
  console.log('synced', file);
}

// tayca — eksik ortak scriptler
const tayca = path.join(root, 'tayca-v3.html');
if (fs.existsSync(tayca)) {
  let t = fs.readFileSync(tayca, 'utf8');
  if (!t.includes('kdo-version.js')) {
    t = t.replace(
      '</style>\n<script>',
      `</style>
<script src="shared/kdo-version.js"></script>
<script src="shared/kdo-platform-init.js"></script>
<script src="shared/kdo-ui-i18n.js"></script>
<script src="shared/kdo-ui-extra.js"></script>
<script src="shared/kdo-ui-helpers.js"></script>
<script>`
    );
    t = t.replace(
      /const APP_VERSION = window\.KDO_PLATFORM_VERSION \|\| 'v[^']+';[\s\S]*?\(function\(\)\{const _vb[\s\S]*?\}\)\(\);/,
      'const APP_VERSION = window.KDO_APP_VERSION || window.KDO_PLATFORM_VERSION;'
    );
    fs.writeFileSync(tayca, t);
    console.log('patched tayca-v3.html shared scripts');
  }
}

// index.html
const idx = path.join(root, 'index.html');
let ix = fs.readFileSync(idx, 'utf8');
if (!ix.includes('kdo-platform-init.js')) {
  ix = ix.replace(
    '<script src="shared/kdo-version.js"></script>',
    '<script src="shared/kdo-version.js"></script>\n<script src="shared/kdo-platform-init.js"></script>'
  );
}
ix = ix.replace(/<div class="ver" id="platform-ver">[^<]*<\/div>/, '<div class="ver" id="platform-ver"></div>');
fs.writeFileSync(idx, ix);
console.log('patched index.html');

console.log('Platform version:', VERSION);
