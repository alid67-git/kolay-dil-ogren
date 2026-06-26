#!/usr/bin/env node
/** Kapsamlı i18n + Türkçe gramer yaması */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = fs.readdirSync(root).filter(f => f.endsWith('-v3.html'));

const injectAfter = '<script src="shared/kdo-ui-i18n.js"></script>';
const injectBlock =
  '<script src="shared/kdo-ui-i18n.js"></script>\n' +
  '<script src="shared/kdo-ui-extra.js"></script>\n' +
  '<script src="shared/kdo-ui-helpers.js"></script>';

const sOld = /function s\(key\)\{ return \(UI\[appLang\]\|\|UI\.tr\)\[key\] \|\| UI\.tr\[key\] \|\| key; \}/;
const sNew = `function s(key){ return typeof KDO_sFix==='function'?KDO_sFix(UI,appLang,key):((UI[appLang]||UI.en||UI.tr)[key]||(UI.en||{})[key]||(UI.tr||{})[key]||key); }`;

const lfOld = /function Lf\(item, field\)\{\s*if\(!item\) return '';\s*if\(appLang!==='tr' && item\[field\+'_en'\]!==undefined\) return item\[field\+'_en'\];\s*return item\[field\] \|\| '';\s*\}/;
const lfNew = `function Lf(item,field){
  if(!item) return '';
  if(typeof KDO_Lf==='function') return KDO_Lf(item,field,appLang);
  if(appLang!=='tr'&&item[field+'_en']!==undefined) return item[field+'_en'];
  return item[field]||'';
}`;

const gramRoleOld = /function gramRoleLabel\(role\)\{\s*role = normalizeGramRole\(role\);[\s\S]*?return L\[role\]\|\|role;\s*\}/;
const gramRoleNew = `function gramRoleLabel(role){
  role=normalizeGramRole(role);
  if(typeof KDO_gramRoleLabel==='function') return KDO_gramRoleLabel(role,appLang,function(k){return s(k);});
  return role;
}`;

const gTipsOld = /const gTips = \(appLang==='en' && g\.tips_en\) \? g\.tips_en : g\.tips;/g;
const gTipsNew = `const gTips=(appLang!=='tr'&&(g.tips_en||g['tips_'+appLang]))?(g['tips_'+appLang]||g.tips_en):g.tips;`;

const gExplainOld = /const gExplain = Lf\(g,'explain'\)\|\|g\.explain\|\|g\.explanation\|\|'';/g;
const gExplainNew = `const gExplain=Lf(g,'explanation')||Lf(g,'explain')||g.explain||g.explanation||'';`;

const noteLineOld = /note: p\.note \|\| guessPieceNote\(p\.ro, p\.role, i, arr\.map\(x=>x\.ro\), cleanEn\)/g;
const noteLineNew = `note: (typeof KDO_LfNote==='function'&&KDO_LfNote(p,appLang))?KDO_LfNote(p,appLang):(p.note||guessPieceNote(p.ro,p.role,i,arr.map(x=>x.ro),cleanEn))`;

const turkishPrepOld = `function prepareExampleBreakdown(en, tr, rawBd, gramNote){
  const text = (en||'').trim();
  if(!text) return {bd:[], summary: gramNote||''};`;
const turkishPrepNew = `function prepareExampleBreakdown(en, tr, rawBd, gramNote){
  const text = (en||'').trim();
  if(typeof KDO_prepareTurkishBreakdown==='function'&&window.KDO_TURKISH_APP) return KDO_prepareTurkishBreakdown(text,tr,rawBd,gramNote,appLang);
  if(!text) return {bd:[], summary: gramNote||''};`;

for (const file of files) {
  const fp = path.join(root, file);
  let s = fs.readFileSync(fp, 'utf8');

  if (!s.includes('kdo-ui-extra.js')) {
    s = s.replace(injectAfter, injectBlock);
  }

  if (file === 'turkish-v3.html' && !s.includes('kdo-gram-turkish.js')) {
    s = s.replace(
      '<script src="shared/kdo-ui-helpers.js"></script>',
      '<script src="shared/kdo-ui-helpers.js"></script>\n<script src="shared/kdo-gram-turkish.js"></script>'
    );
    if (!s.includes('KDO_TURKISH_APP')) {
      s = s.replace(
        '<script src="shared/kdo-gram-turkish.js"></script>',
        '<script src="shared/kdo-gram-turkish.js"></script>\n<script>window.KDO_TURKISH_APP=true;</script>'
      );
    }
  }

  if (sOld.test(s)) s = s.replace(sOld, sNew);
  if (lfOld.test(s)) s = s.replace(lfOld, lfNew);
  if (gramRoleOld.test(s)) s = s.replace(gramRoleOld, gramRoleNew);
  s = s.replace(gTipsOld, gTipsNew);
  s = s.replace(gExplainOld, gExplainNew);
  s = s.replace(noteLineOld, noteLineNew);

  if (file === 'turkish-v3.html' && s.includes(turkishPrepOld)) {
    s = s.replace(turkishPrepOld, turkishPrepNew);
  }

  // UI metinleri: sadece tr/en ikilisi yerine tüm arayüz dilleri
  s = s.replace(/appLang==='en'/g, "appLang!=='tr'");

  // title attribute hub button
  s = s.replace(/title="Dil degistir"/g, 'title="" data-lk="ui_change_lang"');

  fs.writeFileSync(fp, s);
  console.log('patched', file);
}

// index.html — extra scripts only
const idx = path.join(root, 'index.html');
let ix = fs.readFileSync(idx, 'utf8');
if (!ix.includes('kdo-ui-extra.js')) {
  ix = ix.replace(injectAfter, injectBlock);
  fs.writeFileSync(idx, ix);
  console.log('patched index.html');
}
