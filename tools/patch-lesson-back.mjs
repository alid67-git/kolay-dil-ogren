#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = fs.readdirSync(root).filter(f => f.endsWith('-v3.html'));

const oldSwitch = `function switchView(v, btn){
  if(v!=='list'){ _lessonStarFilter=null; const b=document.getElementById('star-filter-banner'); if(b) b.remove(); }
  document.querySelectorAll('.view').forEach(el=>el.classList.remove('active'));
  document.getElementById(v+'-view').classList.add('active');
  document.querySelectorAll('.nbtn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  if(v==='list') renderList();
  if(v==='review') renderReview();
  if(v==='test') initTestView();
  if(v==='translate') initTranslateView();
}`;

const newSwitch = `function switchView(v, btn){
  const wasDetail = document.getElementById('detail-view').classList.contains('active');
  if(wasDetail && v !== 'detail'){
    stopTabTimer();
    stopLessonTimer();
    currentLesson = null;
  }
  if(v!=='list'){ _lessonStarFilter=null; const b=document.getElementById('star-filter-banner'); if(b) b.remove(); }
  document.querySelectorAll('.view').forEach(el=>el.classList.remove('active'));
  document.getElementById(v+'-view').classList.add('active');
  document.querySelectorAll('.nbtn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  else if(v==='lessons'){ const nb=document.getElementById('nav-lessons-btn'); if(nb) nb.classList.add('active'); }
  if(v==='lessons'){ renderLessonList(); window.scrollTo(0,0); }
  if(v==='list') renderList();
  if(v==='review') renderReview();
  if(v==='test') initTestView();
  if(v==='translate') initTranslateView();
}`;

const oldClose = `function closeLessonDetail(){
  stopTabTimer();
  stopLessonTimer();
  const returnNum = currentLesson ? currentLesson.num : null;
  if(returnNum && returnNum>=21) bonusOpen = true;
  renderLessonList();
  switchView('lessons', document.querySelector('.nbtn'));
  document.querySelector('.nbtn').classList.add('active');
  if(returnNum){
    requestAnimationFrame(()=>{
      const card = document.querySelector(\`.lesson-card[data-num="\${returnNum}"]\`);
      if(card) card.scrollIntoView({block:'center', behavior:'smooth'});
    });
  }
}`;

const newClose = `function closeLessonDetail(){
  if(!document.getElementById('detail-view').classList.contains('active')) return;
  stopTabTimer();
  stopLessonTimer();
  const returnNum = currentLesson ? currentLesson.num : null;
  if(returnNum && returnNum>=21) bonusOpen = true;
  currentLesson = null;
  document.getElementById('detail-content').innerHTML = '';
  switchView('lessons', document.getElementById('nav-lessons-btn'));
  window.scrollTo(0,0);
  try{
    if(location.hash) history.replaceState({kdoView:'lessons'}, '', location.pathname+location.search);
  }catch(_){}
  if(returnNum){
    requestAnimationFrame(()=>{
      const card = document.querySelector(\`.lesson-card[data-num="\${returnNum}"]\`);
      if(card) card.scrollIntoView({block:'nearest', behavior:'smooth'});
    });
  }
}`;

const historyBlock = `
window.addEventListener('popstate', ()=>{
  if(document.getElementById('detail-view').classList.contains('active')) closeLessonDetail();
});
`;

const openLessonPush = `  startLessonTimer(num);
  try{ history.pushState({kdoView:'detail',lesson:num}, '', '#ders'+num); }catch(_){}`;

const openLessonOld = `  startLessonTimer(num);
  } catch(err) {`;

for (const file of files) {
  let s = fs.readFileSync(path.join(root, file), 'utf8');
  const before = s;

  if (!s.includes('position:sticky')) {
    s = s.replace(
      'header{background:linear-gradient(135deg,#0d9488,#06b6d4)',
      'header{position:sticky;top:0;z-index:50;background:linear-gradient(135deg,#0d9488,#06b6d4)'
    );
    s = s.replace(
      'nav{display:flex;gap:6px;padding:10px 14px;background:white;border-bottom:1px solid #e0e0e0;overflow-x:auto;}',
      'nav{position:sticky;top:54px;z-index:49;display:flex;gap:6px;padding:10px 14px;background:white;border-bottom:1px solid #e0e0e0;overflow-x:auto;box-shadow:0 2px 8px rgba(0,0,0,.06);}'
    );
  }

  s = s.replace(
    /<button class="nbtn active" onclick="switchView\('lessons',this\)"/,
    '<button class="nbtn active" id="nav-lessons-btn" onclick="switchView(\'lessons\',this)"'
  );

  if (s.includes(oldSwitch)) s = s.replace(oldSwitch, newSwitch);
  else console.warn('switchView not found:', file);

  if (s.includes(oldClose)) s = s.replace(oldClose, newClose);
  else console.warn('closeLessonDetail not found:', file);

  if (!s.includes("addEventListener('popstate'")) {
    s = s.replace('// =================== NAV ===================', '// =================== NAV ===================' + historyBlock);
  }

  if (s.includes(openLessonOld) && !s.includes("kdoView:'detail'")) {
    s = s.replace(openLessonOld, openLessonPush + '\n  } catch(err) {');
  }

  s = s.replace(/const APP_VERSION = 'v([^']+)'/, (m, ver) => {
    const parts = ver.split('.');
    parts[parts.length - 1] = String(parseInt(parts[parts.length - 1], 10) + 1);
    return `const APP_VERSION = 'v${parts.join('.')}'`;
  });

  if (s !== before) {
    fs.writeFileSync(path.join(root, file), s);
    console.log('Patched:', file);
  }
}
