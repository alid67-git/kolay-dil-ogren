#!/usr/bin/env node
/** brand-dev: DOM yuklenmeden once calistigi icin gorunmuyordu */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = fs.readdirSync(root).filter(f => f.endsWith('-v3.html'));

const oldInit = "(function(){const _bd=document.getElementById('brand-dev');const _l=localStorage.getItem('kdo:locale')||'tr';if(_bd)_bd.textContent=devCredit(_l);})();";
const newInit = `function applyBrandDev(){
  const _bd=document.getElementById('brand-dev');
  if(!_bd) return;
  const _l=localStorage.getItem('kdo:locale')||'tr';
  _bd.textContent=typeof devCredit==='function'?devCredit(_l):((window.KDO_UI_DEV||{})[_l]||(window.KDO_UI_DEV||{}).tr||'');
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',applyBrandDev);
else applyBrandDev();`;

const devCreditFn = "function devCredit(lang){ return (window.KDO_UI_DEV||{})[lang] || (window.KDO_UI_DEV||{}).tr || ''; }\n";

for (const file of files) {
  const fp = path.join(root, file);
  let s = fs.readFileSync(fp, 'utf8');
  if (!s.includes(oldInit)) continue;

  s = s.replace(oldInit, newInit);

  if (file === 'tayca-v3.html') {
    if (!s.includes('kdo-ui-i18n.js')) {
      s = s.replace(
        '</style>\n<script>',
        '</style>\n<script src="shared/kdo-ui-i18n.js"></script>\n<script>'
      );
    }
    if (!s.includes('function devCredit')) {
      s = s.replace(
        '// =================== DİL SİSTEMİ / LANGUAGE SYSTEM ===================',
        devCreditFn + '// =================== DİL SİSTEMİ / LANGUAGE SYSTEM ==================='
      );
    }
  }

  fs.writeFileSync(fp, s);
  console.log('patched', file);
}
