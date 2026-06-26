#!/usr/bin/env node
import fs from 'fs';
const files = fs.readdirSync('.').filter(f => f.endsWith('-v3.html'));
const re = /<script src="shared\/kdo-analytics-config\.js"><\/script>\s*\n\s*\(async function\(\)\{[\s\S]*?\}\)\(\);\s*\n<script src="shared\/kdo-analytics\.js"><\/script>/;
const good = `<script>
(async function(){
  if(localStorage.getItem('kdo:locale')) return;
  if(typeof KDO_detectLocale!=='function') return;
  try{
    const loc=await KDO_detectLocale();
    if(loc && typeof setLang==='function' && loc!==appLang) setLang(loc);
  }catch(_){}
})();
</script>
<script src="shared/kdo-analytics.js"></script>`;
for (const f of files) {
  let s = fs.readFileSync(f, 'utf8');
  if (re.test(s)) {
    s = s.replace(re, good);
    fs.writeFileSync(f, s);
    console.log('fixed', f);
  }
}
