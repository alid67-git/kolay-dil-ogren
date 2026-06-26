#!/usr/bin/env node
/** claudeTranslate + searchLessons field fix */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = fs.readdirSync(root).filter(f => f.endsWith('-v3.html') && f !== 'tayca-v3.html');

const searchFieldOld = /const field=dir\.isFromTarget\?\(item\.en\|\|item\.ro\):\(item\.tr\);/g;
const searchFieldNew = `const fk=typeof KDO_lessonSearchField==='function'?KDO_lessonSearchField(dir):(dir.isFromTarget?'en':'tr');
      const field=item[fk]||(fk==='en'?(item.en||item.ro):item.tr);`;

const claudeRe = /const prompt=appLang===[\s\S]*?Açıklama: \.\.\.`\);/;

const claudeNew = `const prompt=typeof KDO_claudeTranslatePrompt==='function'
    ?KDO_claudeTranslatePrompt(q,dir)
    :\`Translate "\${q}" from \${dir.from} to \${dir.to}\`;
  const systemMsg=typeof KDO_claudeSystemPrompt==='function'
    ?KDO_claudeSystemPrompt()
    :'You are a language teacher. Give short, clear answers.';`;

const systemRe = /system:appLang===[\s\S]*?Türk kullanıcılara Almanca öğretiyorsun\.'[^,]*/;

for (const file of files) {
  let s = fs.readFileSync(path.join(root, file), 'utf8');
  let changed = false;

  if (searchFieldOld.test(s)) {
    s = s.replace(searchFieldOld, searchFieldNew);
    changed = true;
  }

  // turkish-v3 inverted isFromTr
  const turkishOld = /const field=dir\.isFromTr\?\(item\.en\|\|item\.ro\):\(item\.tr\);/;
  if (turkishOld.test(s)) {
    s = s.replace(turkishOld, searchFieldNew);
    changed = true;
  }

  if (claudeRe.test(s)) {
    s = s.replace(claudeRe, claudeNew);
    changed = true;
  }

  if (systemRe.test(s)) {
    s = s.replace(systemRe, 'system:systemMsg');
    changed = true;
  }

  if (file === 'turkish-v3.html' && s.includes("target:'tr'")) {
    s = s.replace(
      "window.KDO_TRANSLATE={target:'tr',targetRe:/[çğıöşüÇĞİÖŞÜ]/,fallback:'en'};",
      "window.KDO_TRANSLATE={target:'tr',targetRe:/[çğıöşüÇĞİÖŞÜ]/,fallback:'en',lessonTargetField:'tr',lessonBaseField:'en'};"
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(path.join(root, file), s);
    console.log('patched', file);
  }
}
