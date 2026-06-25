import fs from 'fs';
const p = new URL('../german-v3.html', import.meta.url);
let s = fs.readFileSync(p, 'utf8');

const reps = [
  [/en1_/g, 'de1_'],
  [/english_/g, 'german_'],
  [/en-US-Chirp3-HD-Aoede/g, 'de-DE-Chirp3-HD-Aoede'],
  [/en-US-Chirp3-HD-Orus/g, 'de-DE-Chirp3-HD-Orus'],
  [/languageCode:'en-US'/g, "languageCode:'de-DE'"],
  [/u\.lang='en-US'/g, "u.lang='de-DE'"],
  [/x\.lang==='en-US'/g, "x.lang==='de-DE'"],
  [/x\.lang==='en-GB'/g, "x.lang==='de-AT'"],
  [/x\.lang\.startsWith\('en'\)/g, "x.lang.startsWith('de')"],
  [/Kolay İngilizce/g, 'Kolay Almanca'],
  [/🇬🇧/g, '🇩🇪'],
  [/languages\/en\/lessons/g, 'languages/de/lessons'],
  [/const APP_VERSION = 'v1\.6\.0'/g, "const APP_VERSION = 'v1.0.0'"],
  [/<span class="vbadge" id="app-version">v1\.6\.0<\/span>/g, '<span class="vbadge" id="app-version">v1.0.0</span>'],
  [/localStorage\.setItem\('kdo:target','en'\)/g, "localStorage.setItem('kdo:target','de')"],
  [/localStorage\.setItem\(tgt==='en'\?'en1_lang':'tv3_lang',loc\)/g, "localStorage.setItem(tgt==='en'?'en1_lang':tgt==='de'?'de1_lang':'tv3_lang',loc)"],
];

for (const [a, b] of reps) s = s.replace(a, b);

// Remove English-only lesson2 migration
s = s.replace(
  /\n\/\/ One-time: shift lesson numbers[\s\S]*?localStorage\.setItem\('de1_lesson2_migrated', '1'\);\n\}/,
  ''
);

// LESSONS_META lesson 2
s = s.replace(
  `{num:2, emoji:'📗', title:'Fiil Zamanları', title_en:'Verb Tenses', subtitle:'6 ana zaman — adım adım', subtitle_en:'6 main tenses — step by step', hasContent:true, hasTones:false}`,
  `{num:2, emoji:'📗', title:'Artikel & sein', title_en:'Articles & sein', subtitle:'der/die/das — adım adım', subtitle_en:'der/die/das — step by step', hasContent:true, hasTones:false}`
);

// L1 pronoun table header: English -> Deutsch
s = s.replace(
  `<th style="text-align:left;padding:5px 6px;color:#555;font-weight:600;">${'${appLang===\'en\'?\'English\':\'İngilizce\'}'}</th>`,
  `<th style="text-align:left;padding:5px 6px;color:#555;font-weight:600;">\${appLang==='en'?'German':'Almanca'}</th>`
);

// Pronoun rows - replace English with German
const pronBlock = `<tr style="border-bottom:1px solid #e0f2f1;background:white;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'1st sing.':'1. tekil'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">ich</td><td style="padding:6px 6px;">Ben</td><td style="padding:6px 6px;color:#888;">\${appLang==='en'?'Always lowercase':'Küçük harf'}</td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'2nd sing. (informal)':'2. tekil (samimi)'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">du</td><td style="padding:6px 6px;">Sen</td><td style="padding:6px 6px;color:#888;">\${appLang==='en'?'Informal you':'Samimi sen'}</td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;background:white;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'2nd sing. (formal)':'2. tekil (resmi)'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">Sie</td><td style="padding:6px 6px;">Siz</td><td style="padding:6px 6px;color:#888;">\${appLang==='en'?'Capital S = formal':'Büyük S = resmi'}</td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'3rd sing.':'3. tekil'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">er / sie / es</td><td style="padding:6px 6px;">O</td><td style="padding:6px 6px;color:#888;">\${appLang==='en'?'M / F / neuter':'E / K / nötr'}</td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;background:white;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'1st plural':'1. çoğul'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">wir</td><td style="padding:6px 6px;">Biz</td><td style="padding:6px 6px;color:#888;"></td></tr>
        <tr style="border-bottom:1px solid #e0f2f1;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\${appLang==='en'?'3rd plural':'3. çoğul'}</td><td style="padding:6px 6px;font-weight:700;font-size:15px;">sie / Sie</td><td style="padding:6px 6px;">Onlar / Siz</td><td style="padding:6px 6px;color:#888;">\${appLang==='en'?'sie=they, Sie=formal you':'sie=onlar, Sie=resmi siz'}</td></tr>`;

s = s.replace(
  /<tr style="border-bottom:1px solid #e0f2f1;background:white;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\$\{appLang==='en'\?'1st sing\.':'1\. tekil'\}<\/td><td style="padding:6px 6px;font-weight:700;font-size:15px;">I<\/td>[\s\S]*?<tr style="border-bottom:1px solid #e0f2f1;"><td style="padding:6px 6px;font-weight:700;color:#0d9488;">\$\{appLang==='en'\?'3rd plural':'3\. çoğul'\}<\/td><td style="padding:6px 6px;font-weight:700;font-size:15px;">They<\/td><td style="padding:6px 6px;">Onlar<\/td><td style="padding:6px 6px;color:#888;"><\/td><\/tr>/,
  pronBlock
);

// Help modal subtitle
s = s.replace('Kolay Almanca Öğrenme · Rehber', 'Kolay Almanca · Rehber');

// Translate hint - German chars
s = s.replace(/\/\[฀-๿\]\//g, '/[äöüßÄÖÜ]/');

fs.writeFileSync(p, s);
console.log('Patched german-v3.html', fs.statSync(p).size, 'bytes');
