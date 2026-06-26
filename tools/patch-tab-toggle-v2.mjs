#!/usr/bin/env node
/**
 * Fix tab double-click toggle: dblclick + click double-tap were firing twice (net no-op).
 * Use click-only double-tap detection with debounced single-click.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = fs.readdirSync(root).filter(f => f.endsWith('-v3.html'));

const oldBlock = /document\.querySelectorAll\('\.ltab'\)\.forEach\(btn=>\{\s*let lastTap = 0;\s*let clickTimer = null;\s*const runToggle[\s\S]*?clickTimer = setTimeout\(\(\)=>switchLessonTab\(tab, btn\), 320\);\s*\}\);\s*\}\);/;

const newBlock = `document.querySelectorAll('.ltab').forEach(btn=>{
    let lastTap = 0;
    let clickTimer = null;
    btn.addEventListener('click',(e)=>{
      const tab = btn.dataset.tab;
      const now = Date.now();
      if(now - lastTap < 380){
        e.preventDefault();
        clearTimeout(clickTimer);
        clickTimer = null;
        lastTap = 0;
        toggleTabVisited(tab, btn);
        return;
      }
      lastTap = now;
      clearTimeout(clickTimer);
      clickTimer = setTimeout(()=>{
        clickTimer = null;
        switchLessonTab(tab, btn);
      }, 380);
    });
  });`;

for (const file of files) {
  const fp = path.join(root, file);
  let s = fs.readFileSync(fp, 'utf8');
  if (!oldBlock.test(s)) {
    console.warn('Pattern not found:', file);
    continue;
  }
  s = s.replace(oldBlock, newBlock);
  fs.writeFileSync(fp, s);
  console.log('Fixed:', file);
}
