#!/usr/bin/env node
/** Inject kdo-geo-locale.js in head + async first-visit locale detection */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const apps = fs.readdirSync(root).filter(f => f.endsWith('-v3.html'));

const headGeo = '<script src="shared/kdo-analytics-config.js"></script>\n<script src="shared/kdo-geo-locale.js"></script>';
const geoInit = `
(async function(){
  if(localStorage.getItem('kdo:locale')) return;
  if(typeof KDO_detectLocale!=='function') return;
  try{
    const loc=await KDO_detectLocale();
    if(loc && typeof setLang==='function' && loc!==appLang) setLang(loc);
  }catch(_){}
})();`;

for (const file of apps) {
  const fp = path.join(root, file);
  let s = fs.readFileSync(fp, 'utf8');

  if (!s.includes('kdo-geo-locale.js')) {
    if (s.includes('kdo-analytics-config.js') && s.includes('kdo-ui-i18n.js')) {
      // already has analytics-config elsewhere — only add geo after ui-i18n if missing
      if (!s.includes('kdo-analytics-config.js\n<script src="shared/kdo-geo-locale.js">')) {
        s = s.replace(
          '<script src="shared/kdo-ui-i18n.js"></script>',
          '<script src="shared/kdo-ui-i18n.js"></script>\n' + headGeo
        );
      }
    } else {
      s = s.replace(
        '<script src="shared/kdo-ui-i18n.js"></script>',
        '<script src="shared/kdo-ui-i18n.js"></script>\n' + headGeo
      );
    }
  }

  if (!s.includes('KDO_detectLocale')) {
    s = s.replace(
      '<script src="shared/kdo-analytics.js"></script>',
      geoInit + '\n<script src="shared/kdo-analytics.js"></script>'
    );
  }

  if (!s.includes('KDO_detectLocaleSync')) {
    s = s.replace(
      /let appLang = localStorage\.getItem\('kdo:locale'\) \|\| localStorage\.getItem\('([^']+)'\) \|\| 'tr';/,
      "let appLang = localStorage.getItem('kdo:locale') || localStorage.getItem('$1') || (typeof KDO_detectLocaleSync==='function'?KDO_detectLocaleSync():'tr');"
    );
  }

  // Remove duplicate analytics-config before analytics.js if now in head
  s = s.replace(
    /<script src="shared\/kdo-analytics-config\.js"><\/script>\n<script src="shared\/kdo-analytics\.js"><\/script>/,
    geoInit + '\n<script src="shared/kdo-analytics.js"></script>'
  );

  fs.writeFileSync(fp, s);
  console.log('patched', file);
}
