#!/usr/bin/env node
/** Eski *-v3.html dosyalarını learn.html yönlendirmesine çevirir (tayca hariç) */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { LANGS } from './lang-config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const redirects = {
  de: 'de', en: 'en', it: 'it', es: 'es', fr: 'fr',
  ru: 'ru', ar: 'ar', zh: 'zh', tk: 'tk',
};

for (const [code, t] of Object.entries(redirects)) {
  const L = LANGS[code];
  if (!L) continue;
  const html = `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta http-equiv="refresh" content="0;url=learn.html?t=${t}">
<script src="shared/kdo-version.js"></script>
<script>
localStorage.setItem('kdo:target','${L.kdoTarget}');
location.replace('learn.html?t=${t}');
</script>
<title>${L.title}</title>
</head>
<body><p><a href="learn.html?t=${t}">${L.nameTr}</a></p></body>
</html>
`;
  fs.writeFileSync(path.join(root, L.htmlFile), html);
  console.log('redirect stub:', L.htmlFile, '→ learn.html?t=' + t);
}

console.log('tayca-v3.html kept as legacy Thai app');
