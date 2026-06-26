#!/usr/bin/env node
/** Tayca: arayüz dili ↔ Tayca çeviri */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const fp = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'tayca-v3.html');
let s = fs.readFileSync(fp, 'utf8');

if (!s.includes('kdo-translate.js')) {
  s = s.replace(
    '<script src="shared/kdo-geo-locale.js"></script>',
    '<script src="shared/kdo-geo-locale.js"></script>\n<script src="shared/kdo-translate.js"></script>'
  );
}

const cfg = `window.KDO_TRANSLATE={target:'th',targetRe:/[\\u0E00-\\u0E7F]/,fallback:'tr',lessonTargetField:'th',lessonBaseField:'tr'};`;

s = s.replace(
  /let _translateTimer = null;\s*\nconst TR_WORDS_TH[\s\S]*?function detectThaiDir\(q\)\{[\s\S]*?\n\}/,
  `let _translateTimer = null;\n${cfg}\nfunction detectTranslateDir(q){
  if(typeof KDO_detectTranslateDir==='function') return KDO_detectTranslateDir(q);
  const p=typeof KDO_getTranslatePair==='function'?KDO_getTranslatePair():{base:'tr',target:'th'};
  return {from:p.base,to:p.target,isFromTarget:false,base:p.base,target:p.target};
}

function translateHint(dir){
  if(typeof KDO_translateHint==='function') return KDO_translateHint(dir);
  return '';
}`
);

s = s.replace(
  `placeholder="\${s('translate_placeholder')}"`,
  `placeholder="\${typeof KDO_translatePlaceholder==='function'?KDO_translatePlaceholder():s('translate_placeholder')}"`
);
s = s.replace(
  `<div style="font-size:12px;opacity:.8;margin-top:2px;">\${s('translate_tip')}</div>`,
  `<div style="font-size:12px;opacity:.8;margin-top:2px;">\${typeof KDO_translateTip==='function'?KDO_translateTip():s('translate_tip')}</div>`
);

s = s.replace(
  /const dir = detectThaiDir\(q\);/g,
  'const dir = detectTranslateDir(q);'
);
s = s.replace(
  /hint\.textContent = q\.trim\(\) \? \(dir\.isThai[\s\S]*?\) : '';/,
  "hint.textContent = q.trim() ? translateHint(dir) : '';"
);

s = s.replace(
  /const isThai = detectThaiDir\(q\)\.isThai;/g,
  'const dir = detectTranslateDir(q);'
);

// searchLessons
s = s.replace(
  /const isThai = detectThaiDir\(q\)\.isThai;\s*\n  const results = \[\];[\s\S]*?const field = isThai \? item\.th : item\.tr;/,
  `const dir = detectTranslateDir(q);
  const results = [];

  Object.values(LESSONS).forEach(L=>{
    if(!L) return;
    const check = (item, source) => {
      const fk=typeof KDO_lessonSearchField==='function'?KDO_lessonSearchField(dir):(dir.isFromTarget?'th':'tr');
      const field = item[fk];`
);

// doTranslate parallel tasks
s = s.replace(
  /const tasks = \[googleTranslate\(q, isThai\)\];\s*\n  if\(apiKey && !hasExact\) tasks\.push\(claudeTranslate\(q, isThai\)\);/,
  'const tasks = [googleTranslate(q, dir)];\n  if(apiKey && !hasExact) tasks.push(claudeTranslate(q, dir));'
);

// googleTranslate
s = s.replace(
  /async function googleTranslate\(q, isThai\)\{\s*\n  const sl = isThai \? 'th' : 'tr';\s*\n  const tl = isThai \? 'tr' : 'th';/,
  `async function googleTranslate(q, dir){
  const sl = dir.from;
  const tl = dir.to;`
);
s = s.replace(/if\(isThai\)\{/g, 'if(dir.isFromTarget){');

// claudeTranslate for tayca
const claudeStart = s.indexOf('async function claudeTranslate');
if (claudeStart > 0) {
  const claudeEnd = s.indexOf('\n}\n', s.indexOf("const el = document.getElementById('claude-result')", claudeStart));
  const oldClaude = s.slice(claudeStart, claudeEnd + 3);
  const newClaude = `async function claudeTranslate(q, dir){
  const apiKey = localStorage.getItem('tayca_api_key');
  const prompt = typeof KDO_claudeTranslatePrompt==='function'
    ? KDO_claudeTranslatePrompt(q, dir)
    : \`Translate "\${q}" from \${dir.from} to \${dir.to}\`;
  const systemMsg = typeof KDO_claudeSystemPrompt==='function'
    ? KDO_claudeSystemPrompt()
    : 'You are a Thai language teacher. Give short, clear answers.';
  try{
    const resp = await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'x-api-key':apiKey,'anthropic-version':'2023-06-01','content-type':'application/json','anthropic-dangerous-direct-browser-calls':'true'},
      body:JSON.stringify({
        model:'claude-haiku-4-5-20251001',
        max_tokens:300,
        system:systemMsg,
        messages:[{role:'user',content:prompt}]
      })
    });
    const data = await resp.json();
    const text = data.content?.[0]?.text || s('translate_no_match');
    const el = document.getElementById('claude-result');
    if(!el) return;
    const lines = text.split('\\n').filter(l=>l.trim());
    let out = '';
    lines.forEach(line=>{
      const [label,...rest] = line.split(':');
      const val = rest.join(':').trim();
      if(!val) return;
      out += \`<div style="margin-bottom:6px;"><span style="font-size:11px;font-weight:700;color:#7c3aed;">\${label.trim()}:</span> <span style="font-size:14px;color:#222;">\${val}</span></div>\`;
    });
    el.innerHTML = out || \`<div style="font-size:14px;color:#222;">\${text}</div>\`;
  }catch(e){
    const el = document.getElementById('claude-result');
    if(el) el.innerHTML = \`<div style="color:#dc2626;font-size:13px;">❌ \${e.message}</div>\`;
  }
}`;
  if (oldClaude.includes('isThai')) {
    s = s.replace(oldClaude, newClaude);
  }
}

fs.writeFileSync(fp, s);
console.log('patched tayca-v3.html');
