#!/usr/bin/env node
/** tr:'...' alanlarına gloss'tan tr_th, tip_th ekler */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const glossSrc = fs.readFileSync(path.join(root, 'shared', 'kdo-gloss.js'), 'utf8');
const i0 = glossSrc.indexOf('th: {');
const i1 = glossSrc.indexOf('},\n    de:');
if (i0 < 0 || i1 < 0) {
  console.error('Could not parse kdo-gloss.js');
  process.exit(1);
}
const TH = JSON.parse(glossSrc.slice(i0 + 4, i1 + 1));

function thFor(val) {
  if (!val) return '';
  const k = String(val).trim();
  return TH[k] || TH[k.toLowerCase()] || '';
}

function patchFile(fp) {
  let s = fs.readFileSync(fp, 'utf8');
  let n = 0;
  s = s.replace(/(\btr:'((?:\\'|[^'])*)')(?!\s*,\s*tr_th:)/g, (full, _q, inner) => {
    const th = thFor(inner.replace(/\\'/g, "'"));
    if (!th) return full;
    n++;
    return `${full}, tr_th:'${th.replace(/'/g, "\\'")}'`;
  });
  s = s.replace(/(\btip:'((?:\\'|[^'])*)')(?!\s*,\s*tip_th:)/g, (full, _q, inner) => {
    const th = thFor(inner.replace(/\\'/g, "'"));
    if (!th) return full;
    n++;
    return `${full}, tip_th:'${th.replace(/'/g, "\\'")}'`;
  });
  if (n) fs.writeFileSync(fp, s);
  return n;
}

const dir = path.join(root, 'languages', 'tr', 'lessons');
let total = 0;
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.js'))) {
  const c = patchFile(path.join(dir, f));
  if (c) {
    console.log(f, '+', c);
    total += c;
  }
}
console.log('patched', total, 'fields');
