#!/usr/bin/env node
/**
 * Remove Google Cloud TTS — use device Web Speech API only.
 * Usage: node tools/patch-local-tts.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = fs.readdirSync(root).filter(f => f.endsWith('-v3.html'));

const ttsBlockRe = /\/\/ =+ GOOGLE TTS =+[\s\S]*?^async function speak\(text, slow, gender\)\{[\s\S]*?^}\n\nfunction speakWebSpeech/m;

const newTtsBlock = `// =================== SES (cihaz TTS) ===================
function speakStop(){
  if(window.speechSynthesis) window.speechSynthesis.cancel();
}

function speak(text, slow, gender){
  if(!text||!text.trim()) return;
  speakStop();
  speakWebSpeech(text, slow, gender);
}

function speakWebSpeech`;

const settingsRowRe = /\s*<div class="setting-row"><div class="setting-label">Google TTS API Key<\/div>[\s\S]*?<\/div>\n/;

const saveGoogleRe = /function saveGoogleTTSKey\(\)\{[^\n]+\}\n/;

const loadVoiceRe = /function loadVoiceList\(\)\{[\s\S]*?document\.getElementById\('test-voice-controls'\)\.style\.display = 'block';\n\}/;

const newLoadVoice = `function loadVoiceList(){
  const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  let html = '<div style="font-size:12px;color:#059669;margin-bottom:8px;">✅ '+(appLang==='en'?'Device speech (Web Speech API)':'Cihaz sesi (Web Speech API)')+'</div>';
  html += '<div style="color:#666;padding:8px;background:#ecfdf5;border-radius:6px;font-size:12px;">';
  html += (appLang==='en'?'Uses your phone/browser built-in voices — no API key needed.':'Telefon/tarayıcının yerleşik sesleri kullanılır — API anahtarı gerekmez.');
  if(voices.length){
    const sample = voices.filter(v=>v.lang).slice(0,6).map(v=>'<li>'+v.name+' ('+v.lang+')</li>').join('');
    html += '<ul style="margin:8px 0 0 16px;font-size:11px;">'+sample+'</ul>';
  }
  html += '</div>';
  document.getElementById('voice-list').innerHTML = html;
  document.getElementById('test-voice-controls').style.display = 'block';
}`;

const googleKeyInitRe = /document\.getElementById\('google-tts-key-input'\)\.value = localStorage\.getItem\('[^']+'\)\|\|'';\n/;

for (const file of files) {
  let s = fs.readFileSync(path.join(root, file), 'utf8');
  const before = s;
  s = s.replace(ttsBlockRe, newTtsBlock);
  s = s.replace(settingsRowRe, '\n');
  s = s.replace(saveGoogleRe, '');
  s = s.replace(loadVoiceRe, newLoadVoice);
  s = s.replace(googleKeyInitRe, '');
  if (s === before) {
    console.warn('No changes:', file);
  } else {
    fs.writeFileSync(path.join(root, file), s);
    console.log('Patched:', file);
  }
}
