#!/usr/bin/env node
/**
 * Fix translate module: correct target language codes + robust TR/target detection.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const LANGS = {
  german: {
    file: 'german-v3.html',
    code: 'de',
    flag: '🇩🇪',
    labelTr: 'Almanca',
    labelEn: 'German',
    claudeTargetTr: 'Almanca',
    claudeTargetEn: 'German',
    teacherTr: 'Sen bir Almanca öğretmenisin. Kısa, net ve öğretici cevaplar ver. Türk kullanıcılara Almanca öğretiyorsun.',
    teacherEn: 'You are a German language teacher. Give short, clear, instructive answers for Turkish-speaking learners.',
  },
  french: {
    file: 'french-v3.html',
    code: 'fr',
    flag: '🇫🇷',
    labelTr: 'Fransızca',
    labelEn: 'French',
    claudeTargetTr: 'Fransızca',
    claudeTargetEn: 'French',
    teacherTr: 'Sen bir Fransızca öğretmenisin. Kısa, net ve öğretici cevaplar ver. Türk kullanıcılara Fransızca öğretiyorsun.',
    teacherEn: 'You are a French language teacher. Give short, clear, instructive answers for Turkish-speaking learners.',
  },
  italian: {
    file: 'italian-v3.html',
    code: 'it',
    flag: '🇮🇹',
    labelTr: 'İtalyanca',
    labelEn: 'Italian',
    claudeTargetTr: 'İtalyanca',
    claudeTargetEn: 'Italian',
    teacherTr: 'Sen bir İtalyanca öğretmenisin. Kısa, net ve öğretici cevaplar ver. Türk kullanıcılara İtalyanca öğretiyorsun.',
    teacherEn: 'You are an Italian language teacher. Give short, clear, instructive answers for Turkish-speaking learners.',
  },
  spanish: {
    file: 'spanish-v3.html',
    code: 'es',
    flag: '🇪🇸',
    labelTr: 'İspanyolca',
    labelEn: 'Spanish',
    claudeTargetTr: 'İspanyolca',
    claudeTargetEn: 'Spanish',
    teacherTr: 'Sen bir İspanyolca öğretmenisin. Kısa, net ve öğretici cevaplar ver. Türk kullanıcılara İspanyolca öğretiyorsun.',
    teacherEn: 'You are a Spanish language teacher. Give short, clear, instructive answers for Turkish-speaking learners.',
  },
  english: {
    file: 'english-v3.html',
    code: 'en',
    flag: '🇬🇧',
    labelTr: 'İngilizce',
    labelEn: 'English',
    claudeTargetTr: 'İngilizce',
    claudeTargetEn: 'English',
    teacherTr: 'Sen bir İngilizce öğretmenisin. Kısa, net ve öğretici cevaplar ver. Türk kullanıcılara İngilizce öğretiyorsun.',
    teacherEn: 'You are an English language teacher. Give short, clear, instructive answers for Turkish-speaking learners.',
  },
};

function buildTranslateBlock(L, storageBrand) {
  const targetPattern =
    L.code === 'de'
      ? `/[äöüßÄÖÜ]|(\\b(der|die|das|den|dem|des|ein|eine|und|ist|sind|nicht|ich|du|er|sie|wir|ihr|haben|sein|wird|kann|auch|mit|von|auf|für|aber|oder|wenn|dass|guten|tag|morgen|abend)\\b)/i`
      : L.code === 'fr'
        ? `/[àâæçéèêëïîôùûüœ]|(\\b(le|la|les|un|une|des|je|tu|il|elle|nous|vous|est|sont|pas|ne|avec|pour|bonjour|merci|oui|non|très|bien|comment)\\b)/i`
        : L.code === 'es'
          ? `/[áéíóúüñ¿¡]|(\\b(el|la|los|las|un|una|yo|tu|él|ella|nosotros|es|son|no|con|para|hola|gracias|sí|muy|bien|cómo|qué)\\b)/i`
          : L.code === 'it'
            ? `/[àèéìòù]|(\\b(il|lo|la|i|le|un|una|io|tu|lui|lei|noi|voi|loro|è|sono|non|con|per|ciao|grazie|sì|molto|bene|come|che)\\b)/i`
            : `/\\b(the|and|is|are|was|were|have|has|had|you|your|they|their|this|that|with|from|what|how|hello|good|morning|thank|please|yes|no)\\b/i`;

  return `let _translateTimer = null;

const TRANSLATE_TARGET = '${L.code}';
const TR_WORDS_RE = /\\b(bir|iki|uc|üç|dort|dört|bes|bu|su|o|ben|sen|biz|siz|onlar|ne|nasil|nasıl|neden|nicin|niçin|icin|için|ile|ve|veya|ama|degil|değil|var|yok|merhaba|gunaydin|günaydın|tesekkur|teşekkür|lutfen|lütfen|evet|hayir|hayır|cok|çok|iyi|kotu|kötü|naber|nasilsin|nasılsın|ogren|öğren|kelime|cumle|cümle|nasil\\s+denir|ne\\s+demek|anlami|anlamı)\\b/i;
const TARGET_LANG_RE = ${targetPattern};

function detectTranslateDir(q){
  const t=(q||'').trim();
  if(!t) return {from:'tr',to:TRANSLATE_TARGET,isFromTr:true};
  if(/[çğıöşüÇĞİÖŞÜ]/.test(t)) return {from:'tr',to:TRANSLATE_TARGET,isFromTr:true};
  if(TARGET_LANG_RE.test(t)) return {from:TRANSLATE_TARGET,to:'tr',isFromTr:false};
  if(TR_WORDS_RE.test(t)) return {from:'tr',to:TRANSLATE_TARGET,isFromTr:true};
  return {from:'tr',to:TRANSLATE_TARGET,isFromTr:true};
}

function translateHint(dir){
  const tgt=appLang==='en'?'${L.labelEn}':'${L.labelTr}';
  if(dir.isFromTr) return '🇹🇷 → ${L.flag} '+tgt;
  return '${L.flag} '+tgt+' → 🇹🇷 '+(appLang==='en'?'Turkish':'Türkçe');
}

function translateDebounce(){
  const q=document.getElementById('translate-input').value;
  const dir=detectTranslateDir(q);
  const hint=document.getElementById('translate-lang-hint');
  if(hint) hint.textContent=q.trim()?translateHint(dir):'';
  clearTimeout(_translateTimer);
  if(q.trim().length>=2) _translateTimer=setTimeout(doTranslate,800);
}

function searchLessons(q){
  const norm=str=>str.toLowerCase().replace(/\\s+/g,' ').trim();
  const nq=norm(q);
  const dir=detectTranslateDir(q);
  const results=[];

  Object.values(LESSONS).forEach(L=>{
    if(!L) return;
    const check=(item,source)=>{
      const field=dir.isFromTr?item.tr:(item.en||item.ro);
      if(!field) return;
      const nf=norm(field);
      if(nf.includes(nq)||nq.includes(nf)){
        results.push({...item,_source:source,_score:nf===nq?2:1});
      }
    };
    (L.words||[]).forEach(w=>{check(w,'word');(w.examples||[]).forEach(e=>check(e,'example'));});
    (L.grammar||[]).forEach(g=>{(g.examples||[]).forEach(e=>check(e,'grammar'));});
    (L.speaking||[]).forEach(sp=>check(sp,'speaking'));
    (L.dialogues||[]).forEach(d=>{(d.lines||[]).forEach(l=>check(l,'dialogue'));});
  });

  return results.sort((a,b)=>b._score-a._score).slice(0,5);
}

async function doTranslate(){
  const q=document.getElementById('translate-input')?.value?.trim();
  if(!q) return;
  const wrap=document.getElementById('translate-results');
  if(!wrap) return;

  const hits=searchLessons(q);
  const dir=detectTranslateDir(q);

  let html='';

  if(hits.length>0){
    html+=\`<div style="font-size:11px;font-weight:700;color:#0d9488;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;">📚 \${s('translate_lesson_matches')}</div>\`;
    hits.forEach(h=>{
      const bdHtml=(h.bd||[]).map(p=>\`<span style="display:inline-block;background:#f0fdf9;border:1px solid #b2dfdb;border-radius:4px;padding:2px 6px;font-size:10px;margin:2px;color:#0d9488;"><strong>\${p.ro}</strong> = \${p.tr}</span>\`).join('');
      html+=\`
        <div style="background:white;border:1.5px solid #e0e0e0;border-radius:12px;padding:12px 14px;margin-bottom:8px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;">
            <div style="flex:1;">
              <div style="font-size:20px;font-weight:700;color:#0d9488;">\${h.en||h.th||''}</div>
              <div style="font-size:12px;color:#888;font-style:italic;margin-top:1px;">\${h.ro||''}</div>
              <div style="font-size:14px;font-weight:600;color:#222;margin-top:4px;">\${h.tr||''}</div>
              \${bdHtml?'<div style="margin-top:6px;">'+bdHtml+'</div>':''}
            </div>
            <button onclick="speak('\${(h.en||h.th||'').replace(/'/g,'&#39;')}',false,'m')" style="background:none;border:1px solid #e0e0e0;border-radius:20px;padding:4px 10px;font-size:11px;color:#888;cursor:pointer;flex-shrink:0;margin-left:8px;">🔊</button>
          </div>
          <div style="font-size:10px;color:#aaa;margin-top:6px;text-transform:uppercase;">\${h._source}</div>
        </div>\`;
    });
  }

  const hasExact=hits.some(h=>h._score===2);
  const apiKey=localStorage.getItem('${storageBrand}api_key');

  html+=\`<div style="font-size:11px;font-weight:700;color:#4285f4;text-transform:uppercase;letter-spacing:.06em;margin:12px 0 8px;">\${s('translate_google')}</div>\`;
  html+=\`<div id="google-result" style="background:white;border:1.5px solid #e0e0e0;border-radius:12px;padding:14px;"><div style="color:#aaa;font-size:13px;">\${s('translate_loading')}</div></div>\`;

  if(apiKey&&!hasExact){
    html+=\`<div style="font-size:11px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:.06em;margin:12px 0 8px;">\${s('translate_claude')}</div>\`;
    html+=\`<div id="claude-result" style="background:white;border:1.5px solid #e0e0e0;border-radius:12px;padding:14px;"><div style="color:#aaa;font-size:13px;">\${s('translate_loading')}</div></div>\`;
  }

  wrap.innerHTML=html;

  const tasks=[googleTranslate(q,dir)];
  if(apiKey&&!hasExact) tasks.push(claudeTranslate(q,dir));
  await Promise.all(tasks);
}

async function googleTranslate(q,dir){
  const sl=dir.from;
  const tl=dir.to;
  try{
    const url=\`https://translate.googleapis.com/translate_a/single?client=gtx&sl=\${sl}&tl=\${tl}&dt=t&dt=rm&q=\${encodeURIComponent(q)}\`;
    const data=await fetch(url).then(r=>r.json());
    const translated=(data[0]||[]).map(x=>x[0]||'').join('');
    const el=document.getElementById('google-result');
    if(!el) return;
    if(!translated){el.innerHTML='<div style="color:#aaa;font-size:13px;">'+s('translate_no_match')+'</div>';return;}
    if(dir.isFromTr){
      el.innerHTML=\`
        <div style="font-size:22px;font-weight:700;color:#0d9488;margin-bottom:4px;">
          \${translated}
          <button onclick="speak('\${translated.replace(/'/g,'&#39;')}',false,'m')" style="background:none;border:1px solid #e0e0e0;border-radius:20px;padding:3px 10px;font-size:11px;color:#888;cursor:pointer;margin-left:8px;">🔊</button>
        </div>\`;
    }else{
      el.innerHTML=\`<div style="font-size:15px;font-weight:600;color:#222;">\${translated}</div>\`;
    }
  }catch(e){
    const el=document.getElementById('google-result');
    if(el) el.innerHTML=\`<div style="color:#dc2626;font-size:13px;">❌ \${e.message}</div>\`;
  }
}

async function claudeTranslate(q,dir){
  const apiKey=localStorage.getItem('${storageBrand}api_key');
  const prompt=appLang==='en'
    ?(dir.isFromTr
      ?\`Translate this Turkish phrase to ${L.claudeTargetEn}: "\${q}"\\n\\nRespond ONLY in this format:\\n${L.claudeTargetEn}: ...\\nNote: ...\`
      :\`Translate this ${L.claudeTargetEn} phrase to Turkish: "\${q}"\\n\\nRespond ONLY in this format:\\nTurkish: ...\\nNote: ...\`)
    :(dir.isFromTr
      ?\`Kullanıcı şu Türkçe ifadeyi ${L.claudeTargetTr}ya çevirmek istiyor: "\${q}"\\n\\nŞu formatta cevap ver (başka hiçbir şey yazma):\\n${L.claudeTargetTr}: ...\\nAçıklama: ...\`
      :\`Kullanıcı şu ${L.claudeTargetTr} ifadeyi Türkçeye çevirmek istiyor: "\${q}"\\n\\nŞu formatta cevap ver (başka hiçbir şey yazma):\\nTürkçe: ...\\nAçıklama: ...\`);
  try{
    const resp=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'x-api-key':apiKey,'anthropic-version':'2023-06-01','content-type':'application/json','anthropic-dangerous-direct-browser-calls':'true'},
      body:JSON.stringify({
        model:'claude-haiku-4-5-20251001',
        max_tokens:300,
        system:appLang==='en'?'${L.teacherEn}':'${L.teacherTr}',
        messages:[{role:'user',content:prompt}]
      })
    });
    const data=await resp.json();
    const text=data.content?.[0]?.text||s('translate_no_match');
    const el=document.getElementById('claude-result');
    if(!el) return;
    const lines=text.split('\\n').filter(l=>l.trim());
    let out='';
    lines.forEach(line=>{
      const [label,...rest]=line.split(':');
      const val=rest.join(':').trim();
      if(!val) return;
      const ll=label.toLowerCase();
      if(ll.includes('${L.claudeTargetTr.toLowerCase()}')||ll.includes('${L.claudeTargetEn.toLowerCase()}')||ll.includes('ingilizce')||ll.includes('english')||ll.includes('almanca')||ll.includes('german')||ll.includes('fransızca')||ll.includes('french')||ll.includes('italyanca')||ll.includes('italian')||ll.includes('ispanyolca')||ll.includes('spanish')){
        out+=\`<div style="font-size:22px;font-weight:700;color:#0d9488;margin-bottom:4px;">\${val}
          <button onclick="speak('\${val.replace(/'/g,'&#39;')}',false,'m')" style="background:none;border:1px solid #e0e0e0;border-radius:20px;padding:3px 10px;font-size:11px;color:#888;cursor:pointer;margin-left:8px;">🔊</button></div>\`;
      }else if(ll.includes('türkçe')||ll.includes('turkish')){
        out+=\`<div style="font-size:15px;font-weight:600;color:#222;margin-bottom:6px;">\${val}</div>\`;
      }else{
        out+=\`<div style="font-size:12px;color:#666;border-top:1px solid #f0f0f0;padding-top:8px;margin-top:4px;">\${line}</div>\`;
      }
    });
    el.innerHTML=out||text;
  }catch(e){
    const el=document.getElementById('claude-result');
    if(el) el.innerHTML=\`<div style="color:#dc2626;font-size:13px;">❌ \${appLang==='en'?'Error:':'Hata:'} \${e.message}</div>\`;
  }
}`;
}

const storageBrands = {
  german: 'german_',
  french: 'french_',
  italian: 'italian_',
  spanish: 'spanish_',
  english: 'english_',
};

const blockRe = /let _translateTimer = null;[\s\S]*?async function claudeTranslate\(q[\s\S]*?\n\}/;

for (const [key, L] of Object.entries(LANGS)) {
  const fp = path.join(root, L.file);
  let s = fs.readFileSync(fp, 'utf8');
  const block = buildTranslateBlock(L, storageBrands[key]);
  const next = s.replace(blockRe, block);
  if (next === s) {
    console.warn('No match:', L.file);
    continue;
  }
  fs.writeFileSync(fp, next);
  console.log('Patched:', L.file);
}

// Tayca: improve ambiguous default (TR → TH)
const thaiFp = path.join(root, 'tayca-v3.html');
let th = fs.readFileSync(thaiFp, 'utf8');
const thaiOld = `function translateDebounce(){
  const q = document.getElementById('translate-input').value;
  const isThai = /[฀-๿]/.test(q);
  const hint = document.getElementById('translate-lang-hint');
  if(hint) hint.textContent = q.trim() ? (isThai ? '🇹🇭 '+(appLang==='en'?'Thai detected':'Tayca algılandı') : (appLang==='en'?'🌐 Text detected':'🌐 Metin algılandı')) : '';
  clearTimeout(_translateTimer);
  if(q.trim().length >= 2) _translateTimer = setTimeout(doTranslate, 800);
}`;

const thaiNew = `const TR_WORDS_TH = /\\b(bir|iki|bu|ben|sen|ne|ve|ile|merhaba|gunaydin|günaydın|tesekkur|teşekkür|nasil|nasıl|evet|hayir|hayır|cok|çok|iyi)\\b/i;

function detectThaiDir(q){
  const t=(q||'').trim();
  if(!t) return {isThai:false};
  if(/[฀-๿]/.test(t)) return {isThai:true};
  if(TR_WORDS_TH.test(t)||/[çğıöşüÇĞİÖŞÜ]/.test(t)) return {isThai:false};
  return {isThai:false};
}

function translateDebounce(){
  const q = document.getElementById('translate-input').value;
  const dir = detectThaiDir(q);
  const hint = document.getElementById('translate-lang-hint');
  if(hint) hint.textContent = q.trim() ? (dir.isThai ? '🇹🇭 → 🇹🇷 '+(appLang==='en'?'Thai → Turkish':'Tayca → Türkçe') : '🇹🇷 → 🇹🇭 '+(appLang==='en'?'Turkish → Thai':'Türkçe → Tayca')) : '';
  clearTimeout(_translateTimer);
  if(q.trim().length >= 2) _translateTimer = setTimeout(doTranslate, 800);
}`;

if (th.includes(thaiOld)) {
  th = th.replace(thaiOld, thaiNew);
  th = th.replace(
    `  const hits = searchLessons(q);
  const isThai = /[฀-๿]/.test(q);`,
  `  const hits = searchLessons(q);
  const dir = detectThaiDir(q);
  const isThai = dir.isThai;`
  );
  th = th.replace(
    `  const isThai = /[฀-๿]/.test(q);
  const results = [];`,
  `  const dir = detectThaiDir(q);
  const isThai = dir.isThai;
  const results = [];`
  );
  fs.writeFileSync(thaiFp, th);
  console.log('Patched: tayca-v3.html');
} else {
  console.warn('Tayca patch skipped');
}
