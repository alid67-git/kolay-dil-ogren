#!/usr/bin/env node
/**
 * Create language HTML app from german-v3.html template
 * Usage: node tools/create-lang-html.mjs it|es|fr
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { LANGS } from './lang-config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const code = process.argv[2];
if (!code || !LANGS[code]) {
  console.error('Usage: node tools/create-lang-html.mjs it|es|fr');
  process.exit(1);
}
const L = LANGS[code];
let s = fs.readFileSync(path.join(root, 'german-v3.html'), 'utf8');

// Base replacements from German template
const reps = [
  [/de1_/g, L.prefix],
  [/german_/g, L.storageBrand],
  [/de-DE-Chirp3-HD-Aoede/g, L.googleVoiceF],
  [/de-DE-Chirp3-HD-Orus/g, L.googleVoiceM],
  [/languageCode:'de-DE'/g, `languageCode:'${L.tts}'`],
  [/u\.lang='de-DE'/g, `u.lang='${L.tts}'`],
  [/u\.lang = 'de-DE'/g, `u.lang = '${L.tts}'`],
  [/x\.lang==='de-DE'/g, `x.lang==='${L.tts}'`],
  [/x\.lang==='de-AT'/g, `x.lang==='${L.ttsAlt}'`],
  [/x\.lang\.startsWith\('de'\)/g, `x.lang.startsWith('${L.ttsPrefix}')`],
  [/Kolay Almanca Öğrenme/g, L.title],
  [/Kolay Almanca/g, L.nameTr],
  [/Easy German Learning/g, L.nameEn],
  [/languages\/de\/lessons/g, L.lessonsPath],
  [/localStorage\.setItem\('kdo:target','de'\)/g, `localStorage.setItem('kdo:target','${L.kdoTarget}')`],
  [/localStorage\.getItem\('de1_lang'\)/g, `localStorage.getItem('${L.prefix}lang')`],
  [/🇩🇪/g, L.flag],
  [/German/g, L.targetLabelEn],
  [/Almanca/g, L.targetLabelTr],
  [/Almancaya/g, L.targetLabelTr + 'ya'],
  [/Almancayı/g, L.targetLabelTr + 'yı'],
  [/Almancanın/g, L.targetLabelTr + 'nın'],
  [/Almancada/g, L.targetLabelTr + 'da'],
  [/Almanca\\'yı/g, L.targetLabelTr + 'yı'],
  [/Almanca\\'ya/g, L.targetLabelTr + 'ya'],
  [/Almanca\\'nın/g, L.targetLabelTr + 'nın'],
  [/Deutsch/g, L.targetLabelEn],
  ["description:'Kolay Almanca v1 - User Data'", `description:'${L.nameTr} v1 - User Data'`],
  [`const sl = isTurkish ? 'tr' : 'en';\n  const tl = isTurkish ? 'en' : 'tr';`, `const sl = isTurkish ? 'tr' : '${L.code}';\n  const tl = isTurkish ? '${L.code}' : 'tr';`],
];

for (const [a, b] of reps) s = s.replace(a, b);

// LESSONS_META lesson 2
s = s.replace(
  `{num:2, emoji:'📗', title:'Artikel & sein', title_en:'Articles & sein', subtitle:'der/die/das — adım adım', subtitle_en:'der/die/das — step by step', hasContent:true, hasTones:false}`,
  `{num:2, emoji:'📗', title:'${L.l2Meta.title}', title_en:'${L.l2Meta.title_en}', subtitle:'${L.l2Meta.subtitle}', subtitle_en:'${L.l2Meta.subtitle_en}', hasContent:true, hasTones:false}`
);

// num_info in UI object
s = s.replace(
  "num_info:'Almanca sayılarda birler önce, onlar sonda gelir: 21 = einundzwanzig. Karta dokun → sesini duy 🔊'",
  `num_info:'${L.numInfoTr}'`
);
s = s.replace(
  "num_info:'German numbers: ones before tens — 21 = einundzwanzig. Tap a card to hear it 🔊'",
  `num_info:'${L.numInfoEn}'`
);

// Pronoun tables per language
const pronTables = {
  it: `<tr style="border-bottom:1px solid #e0f2f1;background:white;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'1st sing.':'1. tekil'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">io</td><td style="padding:6px 6px;">Ben</td><td style="padding:6px 6px;color:#888;">\${appLang==='en'?'Always lowercase':'Küçük harf'}</td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'2nd sing. (informal)':'2. tekil (samimi)'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">tu</td><td style="padding:6px 6px;">Sen</td><td style="padding:6px 6px;color:#888;">\${appLang==='en'?'Informal you':'Samimi sen'}</td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;background:white;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'2nd sing. (formal)':'2. tekil (resmi)'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">Lei</td><td style="padding:6px 6px;">Siz</td><td style="padding:6px 6px;color:#888;">\${appLang==='en'?'Capital L = formal':'Büyük L = resmi'}</td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'3rd sing.':'3. tekil'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">lui / lei</td><td style="padding:6px 6px;">O</td><td style="padding:6px 6px;color:#888;">\${appLang==='en'?'M / F':'E / K'}</td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;background:white;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'1st plural':'1. çoğul'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">noi</td><td style="padding:6px 6px;">Biz</td><td style="padding:6px 6px;color:#888;"></td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'3rd plural':'3. çoğul'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">loro</td><td style="padding:6px 6px;">Onlar</td><td style="padding:6px 6px;color:#888;"></td></tr>`,
  es: `<tr style="border-bottom:1px solid #e0f2f1;background:white;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'1st sing.':'1. tekil'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">yo</td><td style="padding:6px 6px;">Ben</td><td style="padding:6px 6px;color:#888;"></td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'2nd sing. (informal)':'2. tekil (samimi)'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">tú</td><td style="padding:6px 6px;">Sen</td><td style="padding:6px 6px;color:#888;">\${appLang==='en'?'Informal tú':'Samimi tú'}</td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;background:white;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'2nd sing. (formal)':'2. tekil (resmi)'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">usted</td><td style="padding:6px 6px;">Siz</td><td style="padding:6px 6px;color:#888;">\${appLang==='en'?'Formal you':'Resmi siz'}</td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'3rd sing.':'3. tekil'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">él / ella</td><td style="padding:6px 6px;">O</td><td style="padding:6px 6px;color:#888;">\${appLang==='en'?'M / F':'E / K'}</td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;background:white;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'1st plural':'1. çoğul'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">nosotros</td><td style="padding:6px 6px;">Biz</td><td style="padding:6px 6px;color:#888;"></td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'3rd plural':'3. çoğul'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">ellos / ellas</td><td style="padding:6px 6px;">Onlar</td><td style="padding:6px 6px;color:#888;">\${appLang==='en'?'M / F plural':'E / K çoğul'}</td></tr>`,
  fr: `<tr style="border-bottom:1px solid #e0f2f1;background:white;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'1st sing.':'1. tekil'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">je</td><td style="padding:6px 6px;">Ben</td><td style="padding:6px 6px;color:#888;"></td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'2nd sing. (informal)':'2. tekil (samimi)'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">tu</td><td style="padding:6px 6px;">Sen</td><td style="padding:6px 6px;color:#888;">\${appLang==='en'?'Informal tu':'Samimi tu'}</td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;background:white;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'2nd sing. (formal)':'2. tekil (resmi)'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">vous</td><td style="padding:6px 6px;">Siz</td><td style="padding:6px 6px;color:#888;">\${appLang==='en'?'Formal vous':'Resmi vous'}</td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'3rd sing.':'3. tekil'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">il / elle</td><td style="padding:6px 6px;">O</td><td style="padding:6px 6px;color:#888;">\${appLang==='en'?'M / F':'E / K'}</td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;background:white;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'1st plural':'1. çoğul'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">nous</td><td style="padding:6px 6px;">Biz</td><td style="padding:6px 6px;color:#888;"></td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'3rd plural':'3. çoğul'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">ils / elles</td><td style="padding:6px 6px;">Onlar</td><td style="padding:6px 6px;color:#888;">\${appLang==='en'?'M / F plural':'E / K çoğul'}</td></tr>`,
};

s = s.replace(
  /<tr style="border-bottom:1px solid #e0f2f1;background:white;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\$\{appLang==='en'\?'1st sing\.':'1\. tekil'\}<\/td><td style="padding:6px 6px;font-weight:700;font-size:15px;">ich<\/td>[\s\S]*?<tr style="border-bottom:1px solid #e0f2f1;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\$\{appLang==='en'\?'3rd plural':'3\. çoğul'\}<\/td><td style="padding:6px 6px;font-weight:700;font-size:15px;">sie \/ Sie<\/td><td style="padding:6px 6px;">Onlar \/ Siz<\/td><td style="padding:6px 6px;color:#888;">\$\{appLang==='en'\?'sie=they, Sie=formal you':'sie=onlar, Sie=resmi siz'\}<\/td><\/tr>/,
  pronTables[code]
);

// Number calculator — language-specific (pre-built blocks)
const calcBlocks = {
  it: `const IT_ONES=['zero','uno','due','tre','quattro','cinque','sei','sette','otto','nove','dieci','undici','dodici','tredici','quattordici','quindici','sedici','diciassette','diciotto','diciannove'];
const IT_TENS=['','','venti','trenta','quaranta','cinquanta','sessanta','settanta','ottanta','novanta'];
const TR_ONES=['sıfır','bir','iki','üç','dört','beş','altı','yedi','sekiz','dokuz','on','on bir','on iki','on üç','on dört','on beş','on altı','on yedi','on sekiz','on dokuz'];
const TR_TENS=['','','yirmi','otuz','kırk','elli','altmış','yetmiş','seksen','doksan'];
function l2BuildItalian(n){
  if(n===0) return {word:'zero',tr:'sıfır',chunks:[{val:'0',en:'zero',tr:'sıfır'}]};
  const parts=[];const trParts=[];const chunks=[];let r=n;
  const push=(val,suf,trSuf,mult)=>{const w=l2ITChunk(val,suf);const t=l2TR999(val)+(trSuf?' '+trSuf:'');parts.push(w);trParts.push(t);chunks.push({val:(val*mult).toLocaleString('tr'),en:w,tr:t});};
  const m=Math.floor(r/1000000);r%=1000000;if(m)push(m,m===1?' milione':' milioni','milyon',1000000);
  if(r>0)push(r,'','',1);return{word:parts.join(' '),tr:trParts.join(' '),chunks};
}
function l2IT99(n){if(n<20)return IT_ONES[n];const t=Math.floor(n/10),o=n%10;if(o===0)return IT_TENS[t];if(t===2&&o===1)return'ventuno';return(o===1?'un':IT_ONES[o])+IT_TENS[t];}
function l2IT999(n){if(n<100)return l2IT99(n);const h=Math.floor(n/100),r=n%100;return(h===1?'cento':IT_ONES[h]+'cento')+(r?l2IT99(r):'');}
function l2ITChunk(n,suffix){if(suffix.includes('milion'))return l2IT999(n)+suffix;if(n<1000)return l2IT999(n);const k=Math.floor(n/1000),r=n%1000;return(k===1?'mille':l2IT999(k)+'mila')+(r?l2IT999(r):'');}
function l2TR99(n){if(n<20)return TR_ONES[n];const t=Math.floor(n/10),o=n%10;return TR_TENS[t]+(o?' '+TR_ONES[o]:'');}
function l2TR999(n){if(n===0)return'';if(n<100)return l2TR99(n);const h=Math.floor(n/100),r=n%100;return(h===1?'':TR_ONES[h]+' ')+'yüz'+(r?' '+l2TR99(r):'');}`,
  es: `const ES_ONES=['cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce','quince','dieciséis','diecisiete','dieciocho','diecinueve'];
const ES_TENS=['','','veinte','treinta','cuarenta','cincuenta','sesenta','setenta','ochenta','noventa'];
const TR_ONES=['sıfır','bir','iki','üç','dört','beş','altı','yedi','sekiz','dokuz','on','on bir','on iki','on üç','on dört','on beş','on altı','on yedi','on sekiz','on dokuz'];
const TR_TENS=['','','yirmi','otuz','kırk','elli','altmış','yetmiş','seksen','doksan'];
function l2BuildSpanish(n){
  if(n===0) return {word:'cero',tr:'sıfır',chunks:[{val:'0',en:'cero',tr:'sıfır'}]};
  const parts=[];const trParts=[];const chunks=[];let r=n;
  const push=(val,suf,trSuf,mult)=>{const w=l2ESChunk(val,suf);const t=l2TR999(val)+(trSuf?' '+trSuf:'');parts.push(w);trParts.push(t);chunks.push({val:(val*mult).toLocaleString('tr'),en:w,tr:t});};
  const m=Math.floor(r/1000000);r%=1000000;if(m)push(m,m===1?' millón':' millones','milyon',1000000);
  if(r>0)push(r,'','',1);return{word:parts.join(' '),tr:trParts.join(' '),chunks};
}
function l2ES99(n){if(n<20)return ES_ONES[n];const t=Math.floor(n/10),o=n%10;if(o===0)return ES_TENS[t];if(t===2&&o===1)return'veintiuno';return ES_ONES[o]+(o?' y ':'')+ES_TENS[t];}
function l2ES999(n){if(n<100)return l2ES99(n);const h=Math.floor(n/100),r=n%100;return(h===1?'cien':ES_ONES[h]+' cien')+(r?' '+l2ES99(r):'');}
function l2ESChunk(n,suffix){if(suffix.includes('mill'))return l2ES999(n)+suffix;if(n<1000)return l2ES999(n);const k=Math.floor(n/1000),r=n%1000;return(k===1?'mil':l2ES999(k)+' mil')+(r?' '+l2ES999(r):'');}
function l2TR99(n){if(n<20)return TR_ONES[n];const t=Math.floor(n/10),o=n%10;return TR_TENS[t]+(o?' '+TR_ONES[o]:'');}
function l2TR999(n){if(n===0)return'';if(n<100)return l2TR99(n);const h=Math.floor(n/100),r=n%100;return(h===1?'':TR_ONES[h]+' ')+'yüz'+(r?' '+l2TR99(r):'');}`,
  fr: `const FR_ONES=['zéro','un','deux','trois','quatre','cinq','six','sept','huit','neuf','dix','onze','douze','treize','quatorze','quinze','seize','dix-sept','dix-huit','dix-neuf'];
const FR_TENS=['','','vingt','trente','quarante','cinquante','soixante','soixante','quatre-vingt','quatre-vingt'];
const TR_ONES=['sıfır','bir','iki','üç','dört','beş','altı','yedi','sekiz','dokuz','on','on bir','on iki','on üç','on dört','on beş','on altı','on yedi','on sekiz','on dokuz'];
const TR_TENS=['','','yirmi','otuz','kırk','elli','altmış','yetmiş','seksen','doksan'];
function l2BuildFrench(n){
  if(n===0) return {word:'zéro',tr:'sıfır',chunks:[{val:'0',en:'zéro',tr:'sıfır'}]};
  const parts=[];const trParts=[];const chunks=[];let r=n;
  const push=(val,suf,trSuf,mult)=>{const w=l2FRChunk(val,suf);const t=l2TR999(val)+(trSuf?' '+trSuf:'');parts.push(w);trParts.push(t);chunks.push({val:(val*mult).toLocaleString('tr'),en:w,tr:t});};
  const m=Math.floor(r/1000000);r%=1000000;if(m)push(m,m===1?' million':' millions','milyon',1000000);
  if(r>0)push(r,'','',1);return{word:parts.join(' '),tr:trParts.join(' '),chunks};
}
function l2FR99(n){
  if(n<20)return FR_ONES[n];if(n<70){const t=Math.floor(n/10),o=n%10;if(o===0)return FR_TENS[t];return FR_ONES[o]+'-'+FR_TENS[t];}
  if(n<80)return'soixante-'+FR_ONES[n-60];if(n<100){const r=n-80;return r===0?'quatre-vingts':'quatre-vingt-'+FR_ONES[r];}return'';
}
function l2FR999(n){if(n<100)return l2FR99(n);const h=Math.floor(n/100),r=n%100;return(h===1?'cent':FR_ONES[h]+' cent')+(r?' '+l2FR99(r):'');}
function l2FRChunk(n,suffix){if(suffix.includes('million'))return l2FR999(n)+suffix;if(n<1000)return l2FR999(n);const k=Math.floor(n/1000),r=n%1000;return(k===1?'mille':l2FR999(k)+' mille')+(r?' '+l2FR999(r):'');}
function l2TR99(n){if(n<20)return TR_ONES[n];const t=Math.floor(n/10),o=n%10;return TR_TENS[t]+(o?' '+TR_ONES[o]:'');}
function l2TR999(n){if(n===0)return'';if(n<100)return l2TR99(n);const h=Math.floor(n/100),r=n%100;return(h===1?'':TR_ONES[h]+' ')+'yüz'+(r?' '+l2TR99(r):'');}`,
};

// Replace German calc with language calc
const calcStart = s.indexOf('const DE_ONES=');
const calcEnd = s.indexOf('let l2CalcWord =');
if (calcStart >= 0 && calcEnd > calcStart) {
  s = s.slice(0, calcStart) + calcBlocks[code] + '\n\n' + s.slice(calcEnd);
}
s = s.replace('const res = l2BuildGerman(n);', `const res = ${code === 'it' ? 'l2BuildItalian' : code === 'es' ? 'l2BuildSpanish' : 'l2BuildFrench'}(n);`);

// Help: umlauts -> language specific pronunciation note already handled by German/Italian swap

const out = path.join(root, L.htmlFile);
fs.writeFileSync(out, s);
console.log(`Created ${L.htmlFile} (${fs.statSync(out).size} bytes)`);
