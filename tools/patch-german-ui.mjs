#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const file = join(dirname(fileURLToPath(import.meta.url)), '../german-v3.html');
let h = readFileSync(file, 'utf8');

const pairs = [
  // UI tr — target language labels
  ["test_dir_en2tr:'İngilizce → Anlam'", "test_dir_en2tr:'Almanca → Anlam'"],
  ["test_dir_tr2en:'Anlam → İngilizce'", "test_dir_tr2en:'Anlam → Almanca'"],
  ["review_q_en2tr:'🇩🇪 İngilizce → Türkçe'", "review_q_en2tr:'🇩🇪 Almanca → Türkçe'"],
  ["review_q_tr2en:'🇹🇷 Türkçe → İngilizce'", "review_q_tr2en:'🇹🇷 Türkçe → Almanca'"],
  ["translate_placeholder:'İngilizce veya Türkçe yaz...'", "translate_placeholder:'Almanca veya Türkçe yaz...'"],
  ["translate_tip:'İngilizce veya Türkçe bir kelime veya cümle yaz.'", "translate_tip:'Almanca veya Türkçe bir kelime veya cümle yaz.'"],
  ["settings_voices:'🔊 İngilizce Sesleri'", "settings_voices:'🔊 Almanca Sesleri'"],
  ["pron_col_english:'İngilizce'", "pron_col_english:'Almanca'"],
  ["num_info:'Sıfır olan basamaklar atlanır. 20 = yîi-sìp (özel!). 11 = sìp-èt. Karta dokun → sesini duy 🔊'", "num_info:'Almanca sayılarda birler önce, onlar sonda gelir: 21 = einundzwanzig. Karta dokun → sesini duy 🔊'"],
  ["calc_info:'Herhangi bir sayıyı gir — İngilizce karşılığı anında çıkar. 🔊 ile seslendir.'", "calc_info:'Herhangi bir sayıyı gir — Almanca karşılığı anında çıkar. 🔊 ile seslendir.'"],
  // UI en
  ["test_dir_en2tr:'English → Meaning'", "test_dir_en2tr:'German → Meaning'"],
  ["test_dir_tr2en:'Meaning → English'", "test_dir_tr2en:'Meaning → German'"],
  ["review_q_en2tr:'🇩🇪 English → Turkish'", "review_q_en2tr:'🇩🇪 German → Turkish'"],
  ["review_q_tr2en:'🇹🇷 Turkish → English'", "review_q_tr2en:'🇹🇷 Turkish → German'"],
  ["translate_placeholder:'Type English or Turkish...'", "translate_placeholder:'Type German or Turkish...'"],
  ["translate_tip:'Type an English or Turkish word or phrase.'", "translate_tip:'Type a German or Turkish word or phrase.'"],
  ["settings_voices:'🔊 English Voices'", "settings_voices:'🔊 German Voices'"],
  ["pron_col_english:'English'", "pron_col_english:'German'"],
  ["num_info:'Zero digits are skipped. 20 = yîi-sìp (special!). 11 = sìp-èt. Tap a card to hear it 🔊'", "num_info:'German numbers: ones before tens — 21 = einundzwanzig. Tap a card to hear it 🔊'"],
  ["calc_info:'Enter any number — get the English word instantly. 🔊 to hear it.'", "calc_info:'Enter any number — get the German word instantly. 🔊 to hear it.'"],
  // Settings lang button (UI language, not target)
  ['data-lang="en" onclick="setLang(\'en\')" style="flex:1;">🇩🇪 English', 'data-lang="en" onclick="setLang(\'en\')" style="flex:1;">🇬🇧 English'],
  // Dialogue TTS
  ["u.lang = 'en-US';", "u.lang = 'de-DE';"],
  // Grammar hint
  ["return 'Soru cümlesi — İngilizcede yardımcı fiil çoğu zaman özneden önce gelir.';", "return 'Soru cümlesi — Almancada fiil genelde cümlenin sonunda gelir (V2 kuralı).';"],
  // Help modal
  ["en?'Easy English Learning · Guide'", "en?'Easy German Learning · Guide'"],
  ["en?'Designed to quickly learn practical English for everyday use. Focuses on real conversation, not textbook phrases.':'Günlük hayatta kullanılan pratik İngilizce\\'yi hızlıca öğrenmek için tasarlandı. Ders kitabı değil, gerçek konuşma diline odaklanır.'", "en?'Designed to quickly learn practical German for everyday use. Focuses on real conversation, not textbook phrases.':'Günlük hayatta kullanılan pratik Almanca\\'yı hızlıca öğrenmek için tasarlandı. Ders kitabı değil, gerçek konuşma diline odaklanır.'"],
  ["en?'Instant English ↔ Turkish translation.':'İngilizce ↔ Türkçe anında çeviri.'", "en?'Instant German ↔ Turkish translation.':'Almanca ↔ Türkçe anında çeviri.'"],
  ["en?'Normal-speed English audio - uses device TTS engine.':'Normal hizda Ingilizce sesi - cihazin TTS motorunu kullanir.'", "en?'Normal-speed German audio - uses device TTS engine.':'Normal hızda Almanca sesi — cihazın TTS motorunu kullanır.'"],
  ["en?'Lesson 1 only. English pronunciation essentials — vowels, consonants and difficult sounds (/θ/, /w/, /v/).':'Sadece Ders 1\\'de. İngilizce telaffuz temelleri — ünlüler, ünsüzler ve zor sesler (/θ/, /w/, /v/).'", "en?'Lesson 1 only. German pronunciation essentials — umlauts (ä, ö, ü), ß and ch sounds.':'Sadece Ders 1\\'de. Almanca telaffuz temelleri — umlaut (ä, ö, ü), ß ve ch sesleri.'"],
  ["en?'Tap listen, hear English, choose the correct option. Easy / Medium / Hard levels.':'Dinle butonuna bas, Ingilizceyi dinle, dogru sikki sec. Kolay / Orta / Zor seviyeleri var.'", "en?'Tap listen, hear German, choose the correct option. Easy / Medium / Hard levels.':'Dinle butonuna bas, Almancayı dinle, doğru şıkkı seç. Kolay / Orta / Zor seviyeleri var.'"],
  ["en?'Lesson 2 only. All digits + compound number examples. Tap a card to hear it.':'Sadece Ders 2\\'de. Tüm rakamlar + bileşik sayı örnekleri. Her karta dokun → sesini duy.'", "en?'Lesson 3 only. All digits + compound number examples. Tap a card to hear it.':'Sadece Ders 3\\'te. Tüm rakamlar + bileşik sayı örnekleri. Her karta dokun → sesini duy.'"],
  ["en?'Lesson 2 only. Enter 0-9,999,999 to see English spelling + digit breakdown.':'Sadece Ders 2 de. 0-9.999.999 arasi herhangi bir sayiyi gir, Ingilizce karsiligi + basamak dokumu gelsin.'", "en?'Lesson 3 only. Enter 0-9,999,999 to see German spelling + digit breakdown.':'Sadece Ders 3\\'te. 0-9.999.999 arası herhangi bir sayıyı gir, Almanca karşılığı + basamak dökümü gelsin.'"],
  ["en?'A card appears. Flashcard first (see English, guess meaning). Tap Show Answer.':'Kart gosterilir. Once flashcard ile Ingilizceyi gor, anlamini tahmin et. Cevabi gor e bas.'", "en?'A card appears. Flashcard first (see German, guess meaning). Tap Show Answer.':'Kart gösterilir. Önce flashcard ile Almancayı gör, anlamını tahmin et. Cevabı Gör\\'e bas.'"],
  ["en?'Always flashcard on first show. English to meaning direction.':'Ilk gosterimde her zaman flashcard. Ingilizce -> anlam yonunde.'", "en?'Always flashcard on first show. German to meaning direction.':'İlk gösterimde her zaman flashcard. Almanca → anlam yönünde.'"],
  ["en?'English pronunciation is stress-based; reading alone is not enough. Tap every card to hear it.':'Ingilizcede vurgu ve ritim onemlidir; sadece okumak yetmez. Her kartta sesi dinle.'", "en?'German pronunciation needs clear vowels and umlauts; reading alone is not enough. Tap every card to hear it.':'Almancada ünlüler ve umlautlar önemlidir; sadece okumak yetmez. Her kartta sesi dinle.'"],
  ["en?'Tap the analysis button on any example; seeing S/V/O structure internalizes English grammar.':'Her ornek cumlede analiz butonuna bas; S/V/O yapisini gorunce Ingilizce grameri oturur.'", "en?'Tap the analysis button on any example; seeing S/V/O structure internalizes German grammar.':'Her örnek cümlede analiz butonuna bas; S/V/O yapısını görünce Almanca grameri oturur.'"],
  ["en?'Please, thank you and excuse me make everyday English sound natural. Use them often.':'Please, thank you ve excuse me gibi ifadeler Ingilizceyi dogal ve nazik yapar. Sik kullan.'", "en?'Bitte, danke and Entschuldigung make everyday German sound natural. Use them often.':'Bitte, danke ve Entschuldigung gibi ifadeler Almancayı doğal ve nazik yapar. Sık kullan.'"],
  ["en?'Easy English Learning':'Kolay Almanca Öğrenme'", "en?'Easy German Learning':'Kolay Almanca Öğrenme'"],
  ["en?'An English learning app focused on real conversation for Turkish speakers.':'Türkçe konuşanlar için gerçek konuşma diline odaklı İngilizce öğrenme uygulaması.'", "en?'A German learning app focused on real conversation for Turkish speakers.':'Türkçe konuşanlar için gerçek konuşma diline odaklı Almanca öğrenme uygulaması.'"],
  ["en?'New Lesson 2: Verb Tenses (all 6 main tenses). Numbers moved to Lesson 3; lesson numbers 2+ shifted; progress migrated automatically':'Yeni Ders 2: Fiil Zamanları (6 ana zaman). Sayılar Ders 3\\'e taşındı; ders numaraları kaydırıldı; ilerleme otomatik taşındı'", "en?'New Lesson 2: Articles & sein (der/die/das). Numbers in Lesson 3 with calculator.':'Yeni Ders 2: Artikel & sein (der/die/das). Sayılar Ders 3\\'te — hesap makinesi ile.'"],
  ["en?'Lesson engine adapted for English data: pronunciation, grammar tables, dialogues, listening':'Ders motoru İngilizce veri yapısına uyarlandı: telaffuz, gramer, diyalog, dinleme'", "en?'Lesson engine adapted for German data: pronunciation, grammar tables, dialogues, listening':'Ders motoru Almanca veri yapısına uyarlandı: telaffuz, gramer, diyalog, dinleme'"],
  ["en?'Built to help Turkish speakers practise practical English every day.<br><strong style=\"color:#0d9488;\">Keep speaking.</strong>':'Turkce konusanlarin her gun pratik Ingilizce calismasi icin yapildi.<br><strong style=\"color:#0d9488;\">Konusmaya devam.</strong>'", "en?'Built to help Turkish speakers practise practical German every day.<br><strong style=\"color:#0d9488;\">Keep speaking.</strong>':'Türkçe konuşanların her gün pratik Almanca çalışması için yapıldı.<br><strong style=\"color:#0d9488;\">Konuşmaya devam.</strong>'"],
  ["description:'English Ogren v1 - User Data'", "description:'Kolay Almanca v1 - User Data'"],
  ["appLang==='en'?'English detected':'İngilizce algılandı'", "appLang==='en'?'German detected':'Almanca algılandı'"],
  // Translate AI
  ['? `Translate this Turkish phrase to English: "${q}"\\n\\nRespond ONLY in this format:\\nEnglish: ...\\nNote: ...`',
   '? `Translate this Turkish phrase to German: "${q}"\\n\\nRespond ONLY in this format:\\nGerman: ...\\nNote: ...`'],
  [': `Translate this English phrase to Turkish: "${q}"\\n\\nRespond ONLY in this format:\\nTurkish: ...\\nNote: ...`)',
   ': `Translate this German phrase to Turkish: "${q}"\\n\\nRespond ONLY in this format:\\nTurkish: ...\\nNote: ...`)'],
  ['? `Kullanıcı şu Türkçe ifadeyi İngilizceye çevirmek istiyor: "${q}"\\n\\nŞu formatta cevap ver (başka hiçbir şey yazma):\\nİngilizce: ...\\nAçıklama: ...`',
   '? `Kullanıcı şu Türkçe ifadeyi Almancaya çevirmek istiyor: "${q}"\\n\\nŞu formatta cevap ver (başka hiçbir şey yazma):\\nAlmanca: ...\\nAçıklama: ...`'],
  [': `Kullanıcı şu İngilizce ifadeyi Türkçeye çevirmek istiyor: "${q}"\\n\\nŞu formatta cevap ver (başka hiçbir şey yazma):\\nTürkçe: ...\\nAçıklama: ...`);',
   ': `Kullanıcı şu Almanca ifadeyi Türkçeye çevirmek istiyor: "${q}"\\n\\nŞu formatta cevap ver (başka hiçbir şey yazma):\\nTürkçe: ...\\nAçıklama: ...`);'],
  ["system: appLang==='en' ? 'You are an English language teacher. Give short, clear, instructive answers for Turkish-speaking learners.' : 'Sen bir İngilizce öğretmenisin. Kısa, net ve öğretici cevaplar ver. Türk kullanıcılara İngilizce öğretiyorsun.'",
   "system: appLang==='en' ? 'You are a German language teacher. Give short, clear, instructive answers for Turkish-speaking learners.' : 'Sen bir Almanca öğretmenisin. Kısa, net ve öğretici cevaplar ver. Türk kullanıcılara Almanca öğretiyorsun.'"],
  ["if(label.includes('İngilizce')||label.includes('English')){", "if(label.includes('Almanca')||label.includes('German')||label.includes('İngilizce')||label.includes('English')){"],
];

for (const [from, to] of pairs) {
  if (!h.includes(from)) console.warn('MISSING:', from.slice(0, 60));
  else h = h.split(from).join(to);
}

// German number calculator
const calcOld = `const EN_ONES=['zero','one','two','three','four','five','six','seven','eight','nine',
  'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const EN_TENS=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
const TR_ONES=['sıfır','bir','iki','üç','dört','beş','altı','yedi','sekiz','dokuz',
  'on','on bir','on iki','on üç','on dört','on beş','on altı','on yedi','on sekiz','on dokuz'];
const TR_TENS=['','','yirmi','otuz','kırk','elli','altmış','yetmiş','seksen','doksan'];

function l2BuildEnglish(n){
  if(n===0) return {word:'zero',tr:'sıfır',chunks:[{val:'0',en:'zero',tr:'sıfır'}]};
  const parts=[];const trParts=[];const chunks=[];let r=n;
  const seg=(val,label,trLabel)=>{if(val>0){const w=l2EN999(val);const t=l2TR999(val);parts.push(w+(label?' '+label:''));trParts.push(t+(trLabel?' '+trLabel:''));chunks.push({val:(val*(label==='million'?1000000:label==='thousand'?1000:1)).toLocaleString('tr'),en:w+(label?' '+label:''),tr:t+(trLabel?' '+trLabel:'')});}};
  const m=Math.floor(r/1000000); r-=m*1000000; seg(m,'million','milyon');
  const k=Math.floor(r/1000);   r-=k*1000;     seg(k,'thousand','bin');
  const h=Math.floor(r/100);    r-=h*100;       if(h){parts.push(EN_ONES[h]+' hundred');trParts.push(l2TR999(h*100));chunks.push({val:String(h*100),en:EN_ONES[h]+' hundred',tr:l2TR999(h*100)});}
  if(r>0){const w=l2EN99(r);const t=l2TR99(r);parts.push(w);trParts.push(t);chunks.push({val:String(r),en:w,tr:t});}
  return {word:parts.join(' '),tr:trParts.join(' '),chunks};
}
function l2EN99(n){if(n<20)return EN_ONES[n];const t=Math.floor(n/10),o=n%10;return EN_TENS[t]+(o?'-'+EN_ONES[o]:'');}
function l2EN999(n){if(n<100)return l2EN99(n);const h=Math.floor(n/100),r=n%100;return EN_ONES[h]+' hundred'+(r?' '+l2EN99(r):'');}
function l2TR99(n){if(n<20)return TR_ONES[n];const t=Math.floor(n/10),o=n%10;return TR_TENS[t]+(o?' '+TR_ONES[o]:'');}
function l2TR999(n){if(n===0)return'';if(n<100)return l2TR99(n);const h=Math.floor(n/100),r=n%100;return(h===1?'':''+TR_ONES[h]+' ')+'yüz'+(r?' '+l2TR99(r):'');}`;

const calcNew = `const DE_ONES=['null','eins','zwei','drei','vier','fünf','sechs','sieben','acht','neun',
  'zehn','elf','zwölf','dreizehn','vierzehn','fünfzehn','sechzehn','siebzehn','achtzehn','neunzehn'];
const DE_TENS=['','','zwanzig','dreißig','vierzig','fünfzig','sechzig','siebzig','achtzig','neunzig'];
const TR_ONES=['sıfır','bir','iki','üç','dört','beş','altı','yedi','sekiz','dokuz',
  'on','on bir','on iki','on üç','on dört','on beş','on altı','on yedi','on sekiz','on dokuz'];
const TR_TENS=['','','yirmi','otuz','kırk','elli','altmış','yetmiş','seksen','doksan'];

function l2BuildGerman(n){
  if(n===0) return {word:'null',tr:'sıfır',chunks:[{val:'0',en:'null',tr:'sıfır'}]};
  const parts=[];const trParts=[];const chunks=[];let r=n;
  const seg=(val,deLabel,trLabel)=>{if(val>0){const w=l2DE999(val);const t=l2TR999(val);parts.push(w+(deLabel?' '+deLabel:''));trParts.push(t+(trLabel?' '+trLabel:''));chunks.push({val:(val*(deLabel==='Millionen'?1000000:deLabel==='tausend'?1000:1)).toLocaleString('tr'),en:w+(deLabel?' '+deLabel:''),tr:t+(trLabel?' '+trLabel:'')});}};
  const m=Math.floor(r/1000000); r-=m*1000000; if(m) seg(m, m===1?'Million':'Millionen','milyon');
  const k=Math.floor(r/1000);   r-=k*1000;     if(k) seg(k,'tausend','bin');
  const h=Math.floor(r/100);    r-=h*100;       if(h){const w=l2DEHundred(h,r);const t=l2TR999(h*100+(r>0?0:0));parts.push(w);if(h*100<=999){const ht=l2TR999(h*100);trParts.push(ht);chunks.push({val:String(h*100),en:w,tr:ht});}}
  if(r>0){const w=l2DE99(r);const t=l2TR99(r);parts.push(w);trParts.push(t);chunks.push({val:String(r),en:w,tr:t});}
  return {word:parts.join(' '),tr:trParts.join(' '),chunks};
}
function l2DE99(n){if(n<20)return DE_ONES[n];const t=Math.floor(n/10),o=n%10;if(o===0)return DE_TENS[t];const ones=o===1?'ein':DE_ONES[o];return ones+'und'+DE_TENS[t];}
function l2DE999(n){if(n<100)return l2DE99(n);const h=Math.floor(n/100),r=n%100;return(h===1?'ein':DE_ONES[h])+'hundert'+(r?l2DE99(r):'');}
function l2DEHundred(h,r){return(h===1?'ein':DE_ONES[h])+'hundert'+(r?l2DE99(r):'');}
function l2TR99(n){if(n<20)return TR_ONES[n];const t=Math.floor(n/10),o=n%10;return TR_TENS[t]+(o?' '+TR_ONES[o]:'');}
function l2TR999(n){if(n===0)return'';if(n<100)return l2TR99(n);const h=Math.floor(n/100),r=n%100;return(h===1?'':''+TR_ONES[h]+' ')+'yüz'+(r?' '+l2TR99(r):'');}`;

if (h.includes(calcOld)) h = h.replace(calcOld, calcNew);
else console.warn('Calculator block not found');

h = h.replace('const res = l2BuildEnglish(n);', 'const res = l2BuildGerman(n);');

writeFileSync(file, h);
console.log('Patched german-v3.html');
