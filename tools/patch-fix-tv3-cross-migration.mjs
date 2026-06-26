#!/usr/bin/env node
/**
 * Tayca (tv3_*) ilerlemesi yanlışlıkla diğer dillere kopyalanıyordu.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const PREFIXES = {
  'english-v3.html': 'en1_',
  'german-v3.html': 'de1_',
  'italian-v3.html': 'it1_',
  'spanish-v3.html': 'es1_',
  'french-v3.html': 'fr1_',
  'russian-v3.html': 'ru1_',
  'arabic-v3.html': 'ar1_',
  'chinese-v3.html': 'zh1_',
  'turkish-v3.html': 'tk1_',
};

const migrateBlockRe = /\/\/ Eski uygulama anahtarlarından \(tv3_\*\)[\s\S]*?\}\)\(\);\s*\n/;

function fixBlock(prefix) {
  return `// Tayca (tv3_*) verisi bu uygulamaya yanlış kopyalanmış olabilir — tek seferlik temizlik
(function fixTv3CrossMigration(){
  const PREFIX='${prefix}';
  const MARK='kdo:purge-tv3-cross:'+PREFIX;
  if(localStorage.getItem(MARK)) return;
  ['star','visited','stats','complete','bonusOpen','srs','lang'].forEach(s=>{
    const appKey=PREFIX+s;
    const thaiKey='tv3_'+s;
    const a=localStorage.getItem(appKey);
    const t=localStorage.getItem(thaiKey);
    if(a!=null&&t!=null&&a===t) localStorage.removeItem(appKey);
  });
  localStorage.setItem(MARK,'1');
})();

`;
}

for (const [file, prefix] of Object.entries(PREFIXES)) {
  const fp = path.join(root, file);
  if (!fs.existsSync(fp)) continue;
  let s = fs.readFileSync(fp, 'utf8');

  if (migrateBlockRe.test(s)) {
    s = s.replace(migrateBlockRe, fixBlock(prefix));
  }

  const k = prefix.replace(/_$/, '');
  s = s.replace(`payload.${k}_star     || payload['tv3_star']`, `payload.${k}_star`);
  s = s.replace(`payload.${k}_complete || payload['tv3_complete']`, `payload.${k}_complete`);
  s = s.replace(`payload.${k}_srs      || payload['tv3_srs']`, `payload.${k}_srs`);
  s = s.replace(`payload.${k}_stats    || payload['tv3_stats']`, `payload.${k}_stats`);

  fs.writeFileSync(fp, s);
  console.log('patched', file);
}
