#!/usr/bin/env node
/**
 * Çeviri: arayüz dili ↔ hedef dil. KDO_TRANSLATE config + ortak detect/hint.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const APP_CFG = {
  'german-v3.html': { target: 'de', targetRe: `/[äöüßÄÖÜ]|(\\b(der|die|das|den|dem|des|ein|eine|und|ist|sind|nicht|ich|du|er|sie|wir|ihr|haben|sein|wird|kann|auch|mit|von|auf|für|aber|oder|wenn|dass|guten|tag|morgen|abend)\\b)/i` },
  'english-v3.html': { target: 'en', targetRe: `/\\b(the|is|are|was|were|have|has|had|will|would|can|could|hello|good|morning|please|thank|you|your|my|this|that|what|how|where|when|why)\\b/i` },
  'french-v3.html': { target: 'fr', targetRe: `/[àâæçéèêëîïôùûüœÀÂÆÇÉÈÊËÎÏÔÙÛÜŒ]|(\\b(le|la|les|un|une|des|je|tu|il|elle|nous|vous|ils|bonjour|merci|oui|non|est|sont|pas|avec|pour)\\b)/i` },
  'spanish-v3.html': { target: 'es', targetRe: `/[áéíóúüñ¿¡]|(\\b(el|la|los|las|un|una|yo|tú|él|hola|gracias|sí|no|es|son|con|para|por)\\b)/i` },
  'italian-v3.html': { target: 'it', targetRe: `/[àèéìòù]|(\\b(il|lo|la|i|gli|le|un|una|io|tu|lui|lei|ciao|grazie|è|sono|non|con|per)\\b)/i` },
  'russian-v3.html': { target: 'ru', targetRe: `/[а-яА-ЯёЁ]/` },
  'arabic-v3.html': { target: 'ar', targetRe: `/[\\u0600-\\u06FF]/` },
  'chinese-v3.html': { target: 'zh-CN', targetRe: `/[\\u4e00-\\u9fff]/` },
  'turkish-v3.html': { target: 'tr', targetRe: `/[çğıöşüÇĞİÖŞÜ]/`, fallback: 'en' },
};

const newDetectBlock = `function detectTranslateDir(q){
  if(typeof KDO_detectTranslateDir==='function') return KDO_detectTranslateDir(q);
  const p=typeof KDO_getTranslatePair==='function'?KDO_getTranslatePair():{base:'tr',target:TRANSLATE_TARGET};
  return {from:p.base,to:p.target,isFromTarget:false,base:p.base,target:p.target};
}

function translateHint(dir){
  if(typeof KDO_translateHint==='function') return KDO_translateHint(dir);
  return '';
}`;

const oldDetectStart = /const TRANSLATE_TARGET[\s\S]*?function translateHint\(dir\)\{[\s\S]*?\n\}/;

for (const [file, cfg] of Object.entries(APP_CFG)) {
  const fp = path.join(root, file);
  if (!fs.existsSync(fp)) continue;
  let s = fs.readFileSync(fp, 'utf8');

  if (!s.includes('kdo-translate.js')) {
    s = s.replace(
      '<script src="shared/kdo-geo-locale.js"></script>',
      '<script src="shared/kdo-geo-locale.js"></script>\n<script src="shared/kdo-translate.js"></script>'
    );
  }

  const cfgLine = `window.KDO_TRANSLATE={target:'${cfg.target}',targetRe:${cfg.targetRe}${cfg.fallback ? `,fallback:'${cfg.fallback}'` : ''}};`;
  if (s.includes('let _translateTimer = null;')) {
    s = s.replace(
      /let _translateTimer = null;\s*\n(window\.KDO_TRANSLATE[\s\S]*?)?const TRANSLATE_TARGET[^\n]*\n/,
      `let _translateTimer = null;\n${cfgLine}\nconst TRANSLATE_TARGET='${cfg.target}';\n`
    );
  }

  if (oldDetectStart.test(s)) {
    s = s.replace(oldDetectStart, newDetectBlock);
  }

  s = s.replace(
    /const field=dir\.isFromTr\?item\.tr:\(item\.en\|\|item\.ro\);/g,
    `const field=dir.isFromTarget?(item.en||item.ro):(item.tr);`
  );
  s = s.replace(/if\(dir\.isFromTr\)/g, 'if(dir.isFromTarget)');

  s = s.replace(
    `placeholder="\${s('translate_placeholder')}"`,
    `placeholder="\${typeof KDO_translatePlaceholder==='function'?KDO_translatePlaceholder():s('translate_placeholder')}"`
  );
  s = s.replace(
    `<div style="font-size:12px;opacity:.8;margin-top:2px;">\${s('translate_tip')}</div>`,
    `<div style="font-size:12px;opacity:.8;margin-top:2px;">\${typeof KDO_translateTip==='function'?KDO_translateTip():s('translate_tip')}</div>`
  );

  fs.writeFileSync(fp, s);
  console.log('patched', file);
}
