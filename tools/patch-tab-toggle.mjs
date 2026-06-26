#!/usr/bin/env node
/**
 * Sekme çift tıklama: işaretle / kaldır (toggle).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = fs.readdirSync(root).filter(f => f.endsWith('-v3.html'));

const toggleFn = `
function toggleTabVisited(tab, btn){
  if(!currentLesson) return;
  const vkey = 'L'+currentLesson.num+'_'+tab;
  const elBtn = btn || document.querySelector('.ltab[data-tab="'+tab+'"]');
  if(visitedTabs[vkey]){
    delete visitedTabs[vkey];
    if(elBtn) elBtn.classList.remove('visited');
    const activeTab = document.querySelector('.ltab.active');
    if(activeTab && activeTab.dataset.tab === tab) startTabTimer(tab);
  }else{
    visitedTabs[vkey] = true;
    if(elBtn){
      elBtn.classList.add('visited');
      elBtn.classList.remove('timing');
    }
    if(_tabTimer.tab === tab) stopTabTimer();
    const el = document.getElementById('lc-'+tab);
    const wrap = el && el.querySelector('.tab-timer-wrap');
    if(wrap) wrap.style.display = 'none';
  }
  saveVisited();
  updateProgressBar();
  _updateTabButtons();
  _refreshCompleteBtn();
  if(elBtn){
    elBtn.style.transform = 'scale(.88)';
    setTimeout(()=>{ elBtn.style.transform = ''; }, 200);
  }
}
`;

const oldListener = `  document.querySelectorAll('.ltab').forEach(btn=>{
    let lastTap = 0;
    btn.addEventListener('click',(e)=>{
      const tab = e.target.closest('.ltab').dataset.tab;
      const now = Date.now();
      const vkey = 'L'+currentLesson.num+'_'+tab;
      // Çift tıklama (300ms içinde 2 kez)
      if(now - lastTap < 300 && visitedTabs[vkey]){
        delete visitedTabs[vkey];
        saveVisited();
        btn.classList.remove('visited');
        // Aktifse de active'i koru ama visited gitsin
        updateProgressBar();
        // Küçük titreme animasyonu
        btn.style.transform = 'scale(.88)';
        setTimeout(()=>btn.style.transform='', 200);
        lastTap = 0;
        return;
      }
      lastTap = now;
      switchLessonTab(tab, e.target.closest('.ltab'));
    });
  });`;

const newListener = `  document.querySelectorAll('.ltab').forEach(btn=>{
    let lastTap = 0;
    let clickTimer = null;
    const runToggle = (tab)=>{
      clearTimeout(clickTimer);
      lastTap = 0;
      toggleTabVisited(tab, btn);
    };
    btn.addEventListener('dblclick',(e)=>{
      e.preventDefault();
      runToggle(btn.dataset.tab);
    });
    btn.addEventListener('click',()=>{
      const tab = btn.dataset.tab;
      const now = Date.now();
      if(now - lastTap < 320){
        runToggle(tab);
        return;
      }
      lastTap = now;
      clearTimeout(clickTimer);
      clickTimer = setTimeout(()=>switchLessonTab(tab, btn), 320);
    });
  });`;

const oldTabBtn = `return \`<button class="ltab \${isDone?'visited':''}" data-tab="\${t}">\${getTabLabels()[t]}</button>\`;`;
const newTabBtn = `return \`<button class="ltab \${isDone?'visited':''}" data-tab="\${t}" title="\${s('lesson_tab_dbl')}">\${getTabLabels()[t]}</button>\`;`;

for (const file of files) {
  let s = fs.readFileSync(path.join(root, file), 'utf8');
  const before = s;

  if (!s.includes('function toggleTabVisited(')) {
    if (s.includes('function _updateTabButtons(){')) {
      s = s.replace('function _updateTabButtons(){', toggleFn + '\nfunction _updateTabButtons(){');
    } else {
      console.warn('No _updateTabButtons:', file);
      continue;
    }
  }

  if (s.includes(oldListener)) s = s.replace(oldListener, newListener);
  else console.warn('Listener block not found:', file);

  if (s.includes(oldTabBtn)) s = s.replace(oldTabBtn, newTabBtn);
  else if (!s.includes("title=\"\\${s('lesson_tab_dbl')}\"")) console.warn('Tab btn template not found:', file);

  if (!s.includes("lesson_tab_dbl:")) {
    s = s.replace(
      "lesson_complete_btn_active:'Tüm sekmeler tamamlandı!',",
      "lesson_complete_btn_active:'Tüm sekmeler tamamlandı!',\n    lesson_tab_dbl:'Çift tıkla: sekme işaretle / kaldır',"
    );
    s = s.replace(
      "lesson_complete_btn_active:'All tabs completed!',",
      "lesson_complete_btn_active:'All tabs completed!',\n    lesson_tab_dbl:'Double-click: mark / unmark tab',"
    );
  }

  // version bump
  s = s.replace(/const APP_VERSION = 'v([^']+)'/, (m, ver) => {
    const parts = ver.split('.');
    const patch = parseInt(parts[parts.length - 1], 10) + 1;
    parts[parts.length - 1] = String(patch);
    return `const APP_VERSION = 'v${parts.join('.')}'`;
  });

  if (s !== before) {
    fs.writeFileSync(path.join(root, file), s);
    console.log('Patched:', file);
  } else {
    console.log('No changes:', file);
  }
}
