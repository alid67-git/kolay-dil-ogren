#!/usr/bin/env node
/** Generate languages/sw/lessons/ders1–20.js + manifest.js */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'languages', 'sw', 'lessons');
fs.mkdirSync(outDir, { recursive: true });

function esc(s) {
  return String(s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function emitBd(bd) {
  return bd.map((b) => `{ro:'${esc(b.ro)}',tr:'${esc(b.tr)}',role:'${esc(b.role)}',note:'${esc(b.note)}'}`).join(',');
}

function emitWord(w) {
  const ex = w.ex || { sw: w.sw, ro: w.ro, tr: w.tr, bd: [{ ro: w.sw, tr: w.tr, role: 'kelime', note: '' }] };
  return `    {id:'${w.id}', sw:'${esc(w.sw)}', ro:'${esc(w.ro)}', tr:'${esc(w.tr)}',
     tip:'${esc(w.tip)}',
     ctx:'${esc(w.ctx)}',
     examples:[{
       sw:'${esc(ex.sw)}', ro:'${esc(ex.ro)}', tr:'${esc(ex.tr)}',
       bd:[${emitBd(ex.bd)}]
     }]
    }`;
}

function emitGrammar(g) {
  const rows = g.table.map((r) =>
    `       {pronoun:'${esc(r.pronoun)}', form:'${esc(r.form)}', example:'${esc(r.example)}', tr:'${esc(r.tr)}'}`
  ).join(',\n');
  return `    {id:'${g.id}', title:'${esc(g.title)}', title_en:'${esc(g.title_en)}',
     explanation:'${esc(g.explanation)}',
     table:[\n${rows}\n     ],
     note:'${esc(g.note)}'
    }`;
}

function emitSpeaking(s) {
  return `    {id:'${sp.id}', sw:'${esc(s.sw)}', tr:'${esc(s.tr)}', prompt:'${esc(s.prompt)}'}`;
}

function emitDialogue(d) {
  const lines = d.lines.map((l) =>
    `       {speaker:'${l.speaker}', gender:'${l.gender}', sw:'${esc(l.sw)}', tr:'${esc(l.tr)}',
        gramNote:'${esc(l.gramNote)}',
        bd:[${emitBd(l.bd)}]}`
  ).join(',\n');
  return `    {id:'${d.id}', title:'${esc(d.title)}', title_tr:'${esc(d.title_tr)}',
     lines:[\n${lines}\n     ]
    }`;
}

function emitLesson(num, titleEn, data) {
  const parts = [];
  if (data.words?.length) parts.push(`  words: [\n${data.words.map(emitWord).join(',\n')}\n  ]`);
  if (data.grammar?.length) parts.push(`  grammar: [\n${data.grammar.map(emitGrammar).join(',\n')}\n  ]`);
  if (data.speaking?.length) {
    parts.push(`  speaking: [\n${data.speaking.map((s) =>
      `    {id:'${s.id}', sw:'${esc(s.sw)}', tr:'${esc(s.tr)}', prompt:'${esc(s.prompt)}'}`
    ).join(',\n')}\n  ]`);
  }
  if (data.dialogues?.length) parts.push(`  dialogues: [\n${data.dialogues.map(emitDialogue).join(',\n')}\n  ]`);
  if (data.listening?.length) {
    const li = data.listening[0];
    const qs = li.questions.map((q) =>
      `       {q:'${esc(q.q)}', opts:${JSON.stringify(q.opts)}, answer:${q.answer}, tr:'${esc(q.tr)}'}`
    ).join(',\n');
    parts.push(`  listening: [
    {id:'${li.id}', audio:'', transcript:'${esc(li.transcript)}',
     tr:'${esc(li.tr)}',
     questions:[\n${qs}\n     ]
    }
  ]`);
  }
  return `// ders${num}.js — Swahili Lesson ${num}: ${titleEn}\nconst L${num} = {\n${parts.join(',\n')}\n};\nLESSONS[${num}] = L${num};\n`;
}

function w(id, sw, ro, tr, tip, ctx, ex) {
  return { id, sw, ro, tr, tip, ctx, ex };
}

// ─── Lesson data ───────────────────────────────────────────────────────────

const L1 = {
  words: [
    w('w1', 'Jambo', 'jam-bo', 'Merhaba', 'En yaygın selamlama.', 'Günlük karşılaşmalarda.', {
      sw: 'Jambo rafiki!', ro: 'jam-bo ra-fi-ki', tr: 'Merhaba arkadaş!',
      bd: [{ ro: 'Jambo', tr: 'Merhaba', role: 'selamlama', note: 'Temel selam.' }, { ro: 'rafiki', tr: 'arkadaş', role: 'isim', note: 'Samimi hitap.' }],
    }),
    w('w2', 'Habari', 'ha-ba-ri', 'Selam / Haber', 'Genel selamlama kelimesi.', 'Her saatte kullanılır.', {
      sw: 'Habari yako?', ro: 'ha-ba-ri ya-ko', tr: 'Nasılsın?',
      bd: [{ ro: 'Habari', tr: 'Selam', role: 'selamlama', note: 'Haber/selam.' }, { ro: 'yako', tr: 'senin', role: 'zamir', note: 'Senin halin.' }],
    }),
    w('w3', 'Habari za asubuhi', 'ha-ba-ri za a-su-bu-hi', 'Günaydın', 'Sabah selamı.', 'Sabah erken saatlerde.', {
      sw: 'Habari za asubuhi!', ro: 'ha-ba-ri za a-su-bu-hi', tr: 'Günaydın!',
      bd: [{ ro: 'Habari za asubuhi', tr: 'Günaydın', role: 'selamlama', note: 'Sabah selamı.' }],
    }),
    w('w4', 'Habari za mchana', 'ha-ba-ri za mcha-na', 'İyi günler', 'Öğleden sonra selamı.', 'Gündüz kullanılır.', {
      sw: 'Habari za mchana!', ro: 'ha-ba-ri za mcha-na', tr: 'İyi günler!',
      bd: [{ ro: 'Habari za mchana', tr: 'İyi günler', role: 'selamlama', note: 'Öğle selamı.' }],
    }),
    w('w5', 'Habari za jioni', 'ha-ba-ri za jo-ni', 'İyi akşamlar', 'Akşam selamı.', 'Akşam saatlerinde.', {
      sw: 'Habari za jioni!', ro: 'ha-ba-ri za jo-ni', tr: 'İyi akşamlar!',
      bd: [{ ro: 'Habari za jioni', tr: 'İyi akşamlar', role: 'selamlama', note: 'Akşam selamı.' }],
    }),
    w('w6', 'Sijambo', 'si-jam-bo', 'İyiyim (cevap)', 'Habari yako? sorusuna olumlu yanıt.', 'Selamlaşma cevabı.', {
      sw: 'Habari yako? — Sijambo.', ro: 'ha-ba-ri ya-ko si-jam-bo', tr: 'Nasılsın? — İyiyim.',
      bd: [{ ro: 'Sijambo', tr: 'İyiyim', role: 'yanıt', note: 'Olumlu cevap.' }],
    }),
    w('w7', 'Jina langu ni...', 'ji-na lan-gu ni', 'Benim adım...', 'Kendini tanıtma kalıbı.', 'Tanışırken.', {
      sw: 'Jina langu ni Amina.', ro: 'ji-na lan-gu ni a-mi-na', tr: 'Benim adım Amina.',
      bd: [{ ro: 'Jina langu ni', tr: 'Benim adım', role: 'tanıtma', note: 'İsim söyleme.' }, { ro: 'Amina', tr: 'Amina', role: 'isim', note: 'Kişi adı.' }],
    }),
    w('w8', 'Jina lako nani?', 'ji-na la-ko na-ni', 'Adın ne?', 'Karşıdakinin adını sorma.', 'Tanışma sırasında.', {
      sw: 'Jina lako nani?', ro: 'ji-na la-ko na-ni', tr: 'Adın ne?',
      bd: [{ ro: 'Jina lako', tr: 'Senin adın', role: 'soru', note: 'İsim sorusu.' }, { ro: 'nani', tr: 'kim', role: 'soru', note: 'Kim/ne.' }],
    }),
    w('w9', 'Asante', 'a-san-te', 'Teşekkür ederim', 'En yaygın teşekkür.', 'Her durumda.', {
      sw: 'Asante sana!', ro: 'a-san-te sa-na', tr: 'Sana teşekkürler!',
      bd: [{ ro: 'Asante', tr: 'Teşekkürler', role: 'nezaket', note: 'Teşekkür.' }, { ro: 'sana', tr: 'sana', role: 'zamir', note: 'Sana.' }],
    }),
    w('w10', 'Karibu', 'ka-ri-bu', 'Hoş geldin / Buyurun', 'Karşılama ve davet.', 'Ev veya mekâna girerken.', {
      sw: 'Karibu nyumbani!', ro: 'ka-ri-bu nyum-ba-ni', tr: 'Eve hoş geldin!',
      bd: [{ ro: 'Karibu', tr: 'Hoş geldin', role: 'karşılama', note: 'Davet.' }, { ro: 'nyumbani', tr: 'eve', role: 'yer', note: 'Ev.' }],
    }),
    w('w11', 'Ndiyo', 'ndi-yo', 'Evet', 'Onay.', 'Olumlu yanıt.', {
      sw: 'Ndiyo, nitaenda.', ro: 'ndi-yo ni-ta-en-da', tr: 'Evet, gideceğim.',
      bd: [{ ro: 'Ndiyo', tr: 'Evet', role: 'onay', note: 'Olumlu.' }],
    }),
    w('w12', 'Hapana', 'ha-pa-na', 'Hayır', 'Ret.', 'Olumsuz yanıt.', {
      sw: 'Hapana, sitaenda.', ro: 'ha-pa-na si-ta-en-da', tr: 'Hayır, gitmeyeceğim.',
      bd: [{ ro: 'Hapana', tr: 'Hayır', role: 'ret', note: 'Olumsuz.' }],
    }),
    w('w13', 'Kwaheri', 'kwa-he-ri', 'Hoşça kal / Görüşürüz', 'Veda.', 'Ayrılırken.', {
      sw: 'Kwaheri, tutaonana!', ro: 'kwa-he-ri tu-ta-o-na-na', tr: 'Hoşça kal, görüşürüz!',
      bd: [{ ro: 'Kwaheri', tr: 'Hoşça kal', role: 'veda', note: 'Veda.' }],
    }),
    w('w14', 'Tafadhali', 'ta-fa-dha-li', 'Lütfen', 'Nezaket.', 'Rica ederken.', {
      sw: 'Tafadhali, saidia.', ro: 'ta-fa-dha-li sa-i-di-a', tr: 'Lütfen yardım et.',
      bd: [{ ro: 'Tafadhali', tr: 'Lütfen', role: 'nezaket', note: 'Rica.' }],
    }),
    w('w15', 'Pole', 'po-le', 'Geçmiş olsun / Üzgünüm', 'Empati ve özür.', 'Üzücü haber veya hata için.', {
      sw: 'Pole sana.', ro: 'po-le sa-na', tr: 'Üzgünüm / Geçmiş olsun.',
      bd: [{ ro: 'Pole', tr: 'Üzgünüm', role: 'empati', note: 'Acıma/özür.' }],
    }),
  ],
  grammar: [{
    id: 'g1', title: 'Svahilice Selamlama', title_en: 'Greetings in Swahili',
    explanation: 'Svahilicede günün saatine göre habari za ... kalıbı kullanılır. Habari yako? sorusuna Sijambo veya Nzuri ile yanıt verilir.',
    table: [
      { pronoun: 'Sabah', form: 'Habari za asubuhi', example: 'Habari za asubuhi!', tr: 'Günaydın!' },
      { pronoun: 'Öğle', form: 'Habari za mchana', example: 'Habari za mchana!', tr: 'İyi günler!' },
      { pronoun: 'Akşam', form: 'Habari za jioni', example: 'Habari za jioni!', tr: 'İyi akşamlar!' },
      { pronoun: 'Genel', form: 'Jambo / Habari', example: 'Jambo! Habari yako?', tr: 'Merhaba! Nasılsın?' },
    ],
    note: 'Jambo daha gayri resmi, Habari daha yaygındır. Cevap: Sijambo (iyiyim) veya Nzuri (güzel/iyi).',
  }],
  speaking: [
    { id: 'sp1', sw: 'Jambo!', tr: 'Merhaba!', prompt: 'Birisini selamla' },
    { id: 'sp2', sw: 'Habari za asubuhi!', tr: 'Günaydın!', prompt: 'Sabah selamı ver' },
    { id: 'sp3', sw: 'Jina langu ni Ali.', tr: 'Benim adım Ali.', prompt: 'Kendini tanıt' },
    { id: 'sp4', sw: 'Asante sana!', tr: 'Teşekkür ederim!', prompt: 'Teşekkür et' },
    { id: 'sp5', sw: 'Kwaheri!', tr: 'Hoşça kal!', prompt: 'Vedalaş' },
  ],
  dialogues: [{
    id: 'd1', title: 'Tanışma', title_tr: 'Tanışma Diyaloğu',
    lines: [
      { speaker: 'A', gender: 'm', sw: 'Jambo!', tr: 'Merhaba!', gramNote: 'Selamlama.', bd: [{ ro: 'Jambo', tr: 'Merhaba', role: 'selamlama', note: 'Selam.' }] },
      { speaker: 'B', gender: 'f', sw: 'Jambo! Habari yako?', tr: 'Merhaba! Nasılsın?', gramNote: 'Selam + hal sorusu.', bd: [{ ro: 'Habari yako', tr: 'Nasılsın', role: 'soru', note: 'Hal sorusu.' }] },
      { speaker: 'A', gender: 'm', sw: 'Sijambo. Jina langu ni Juma.', tr: 'İyiyim. Adım Juma.', gramNote: 'Cevap + tanıtma.', bd: [{ ro: 'Jina langu ni Juma', tr: 'Adım Juma', role: 'tanıtma', note: 'İsim.' }] },
      { speaker: 'B', gender: 'f', sw: 'Nafurahi kukutana nawe. Jina langu ni Amina.', tr: 'Tanıştığıma memnun oldum. Adım Amina.', gramNote: 'Memnuniyet + isim.', bd: [{ ro: 'Nafurahi kukutana nawe', tr: 'Tanıştığıma memnun oldum', role: 'nezaket', note: 'Tanışma.' }] },
      { speaker: 'A', gender: 'm', sw: 'Kwaheri, Amina!', tr: 'Hoşça kal Amina!', gramNote: 'Veda.', bd: [{ ro: 'Kwaheri', tr: 'Hoşça kal', role: 'veda', note: 'Veda.' }] },
    ],
  }],
  listening: [{
    id: 'li1', transcript: 'Jambo! Jina langu ni Amina. Nafurahi kukutana nawe.',
    tr: 'Merhaba! Benim adım Amina. Tanıştığıma memnun oldum.',
    questions: [
      { q: 'Konuşanın adı ne?', opts: ['Amina', 'Juma', 'Ali', 'Fatuma'], answer: 0, tr: 'Konuşanın adı ne?' },
      { q: 'Hangi selamlama kullanıldı?', opts: ['Jambo', 'Kwaheri', 'Asante', 'Hapana'], answer: 0, tr: 'Hangi selamlama?' },
    ],
  }],
};

const L2 = {
  words: [
    w('w1', 'moja', 'mo-ja', 'Bir (1)', 'Temel sayı.', 'Sayma.', { sw: 'Moja tu.', ro: 'mo-ja tu', tr: 'Sadece bir.', bd: [{ ro: 'moja', tr: 'bir', role: 'sayı', note: '1' }] }),
    w('w2', 'mbili', 'mbi-li', 'İki (2)', 'Çift.', 'Sayma.', { sw: 'Mbili vitabu.', ro: 'mbi-li vi-ta-bu', tr: 'İki kitap.', bd: [{ ro: 'mbili', tr: 'iki', role: 'sayı', note: '2' }] }),
    w('w3', 'tatu', 'ta-tu', 'Üç (3)', 'Üçlü.', 'Sayma.', { sw: 'Watoto watatu.', ro: 'wa-to-to wa-ta-tu', tr: 'Üç çocuk.', bd: [{ ro: 'tatu', tr: 'üç', role: 'sayı', note: '3' }] }),
    w('w4', 'nne', 'nne', 'Dört (4)', 'Dörtlü.', 'Sayma.', { sw: 'Siku nne.', ro: 'si-ku nne', tr: 'Dört gün.', bd: [{ ro: 'nne', tr: 'dört', role: 'sayı', note: '4' }] }),
    w('w5', 'tano', 'ta-no', 'Beş (5)', 'Beşli.', 'Sayma.', { sw: 'Shilingi tano.', ro: 'shi-lin-gi ta-no', tr: 'Beş şilin.', bd: [{ ro: 'tano', tr: 'beş', role: 'sayı', note: '5' }] }),
    w('w6', 'sita', 'si-ta', 'Altı (6)', '', 'Sayma.', { sw: 'Saa sita.', ro: 'saa si-ta', tr: 'Altı saat.', bd: [{ ro: 'sita', tr: 'altı', role: 'sayı', note: '6' }] }),
    w('w7', 'saba', 'sa-ba', 'Yedi (7)', '', 'Sayma.', { sw: 'Siku saba.', ro: 'si-ku sa-ba', tr: 'Yedi gün.', bd: [{ ro: 'saba', tr: 'yedi', role: 'sayı', note: '7' }] }),
    w('w8', 'nane', 'na-ne', 'Sekiz (8)', '', 'Sayma.', { sw: 'Watu wanane.', ro: 'wa-tu wa-na-ne', tr: 'Sekiz kişi.', bd: [{ ro: 'nane', tr: 'sekiz', role: 'sayı', note: '8' }] }),
    w('w9', 'tisa', 'ti-sa', 'Dokuz (9)', '', 'Sayma.', { sw: 'Dakika tisa.', ro: 'da-ki-na ti-sa', tr: 'Dokuz dakika.', bd: [{ ro: 'tisa', tr: 'dokuz', role: 'sayı', note: '9' }] }),
    w('w10', 'kumi', 'ku-mi', 'On (10)', 'Onluk sistem temeli.', 'Sayma.', { sw: 'Shilingi kumi.', ro: 'shi-lin-gi ku-mi', tr: 'On şilin.', bd: [{ ro: 'kumi', tr: 'on', role: 'sayı', note: '10' }] }),
    w('w11', 'ishirini', 'i-shi-ri-ni', 'Yirmi (20)', 'Onluk kat.', 'Büyük sayılar.', { sw: 'Ishirini na moja.', ro: 'i-shi-ri-ni na mo-ja', tr: 'Yirmi bir.', bd: [{ ro: 'ishirini na moja', tr: 'yirmi bir', role: 'sayı', note: '21' }] }),
    w('w12', 'shilingi', 'shi-lin-gi', 'Şilin (para birimi)', 'Tanzanya para birimi.', 'Alışveriş.', { sw: 'Bei ni shilingi mia.', ro: 'bei ni shi-lin-gi mi-a', tr: 'Fiyat yüz şilin.', bd: [{ ro: 'shilingi', tr: 'şilin', role: 'para', note: 'TZS' }] }),
  ],
  grammar: [{
    id: 'g1', title: 'Svahili Sayıları', title_en: 'Swahili Numbers',
    explanation: '1–10 temel sayılardır. 11+ için onluk + na + birlik: ishirini na moja = 21.',
    table: [
      { pronoun: '1–5', form: 'moja, mbili, tatu, nne, tano', example: 'Shilingi tano', tr: 'Beş şilin' },
      { pronoun: '6–10', form: 'sita, saba, nane, tisa, kumi', example: 'Watu kumi', tr: 'On kişi' },
      { pronoun: '21', form: 'ishirini na moja', example: 'Siku ishirini na moja', tr: 'Yirmi bir gün' },
    ],
    note: 'Sayılar isimlerle uyumlu önek alır (mfano: vitabu viwili = iki kitap).',
  }],
  speaking: [
    { id: 'sp1', sw: 'Moja, mbili, tatu...', tr: 'Bir, iki, üç...', prompt: '1-2-3 say' },
    { id: 'sp2', sw: 'Shilingi kumi, tafadhali.', tr: 'On şilin lütfen.', prompt: 'Para miktarı söyle' },
  ],
};

function vocabLesson(words) {
  return { words: words.map((x, i) => w(`w${i + 1}`, x[0], x[1], x[2], x[3] || '', x[4] || 'Günlük kullanım.', {
    sw: x[5] || x[0], ro: x[1], tr: x[6] || x[2],
    bd: [{ ro: x[0], tr: x[2], role: 'kelime', note: x[3] || '' }],
  })) };
}

const LESSONS = [
  { num: 1, title: 'Greetings & Introductions', data: L1 },
  { num: 2, title: 'Numbers & Money', data: L2 },
  { num: 3, title: 'Time & Date', data: vocabLesson([
    ['Saa ngapi?', 'saa nga-pi', 'Saat kaç?', 'Zaman sorusu', 'Saat sorarken', 'Saa ngapi sasa?', 'Şimdi saat kaç?'],
    ['saa moja', 'saa mo-ja', 'saat bir / bir saat', '', 'Zaman', 'Saa moja asubuhi.', 'Sabah bir saat.'],
    ['leo', 'le-o', 'bugün', '', 'Tarih', 'Leo ni Ijumaa.', 'Bugün Cuma.'],
    ['kesho', 'ke-sho', 'yarın', '', 'Tarih', 'Kesho nitaenda.', 'Yarın gideceğim.'],
    ['jana', 'ja-na', 'dün', '', 'Tarih', 'Jana nilikuwa nyumbani.', 'Dün evdeydim.'],
    ['wiki', 'wi-ki', 'hafta', '', 'Tarih', 'Wiki moja.', 'Bir hafta.'],
    ['mwezi', 'mwe-zi', 'ay', '', 'Tarih', 'Mwezi mmoja.', 'Bir ay.'],
    ['mwaka', 'mwa-ka', 'yıl', '', 'Tarih', 'Mwaka mpya.', 'Yeni yıl.'],
    ['sasa', 'sa-sa', 'şimdi', '', 'Zaman', 'Sasa twende.', 'Şimdi gidelim.'],
    ['baadaye', 'baa-da-ye', 'sonra', '', 'Zaman', 'Baadaye tutaonana.', 'Sonra görüşürüz.'],
  ]) },
  { num: 4, title: 'Restaurant & Food', data: vocabLesson([
    ['chakula', 'cha-ku-la', 'yemek', '', 'Restoran', 'Chakula kitamu.', 'Yemek lezzetli.'],
    ['maji', 'ma-ji', 'su', '', 'İçecek', 'Maji baridi.', 'Soğuk su.'],
    ['chai', 'chai', 'çay', '', 'İçecek', 'Chai moto.', 'Sıcak çay.'],
    ['kahawa', 'ka-ha-wa', 'kahve', '', 'İçecek', 'Kahawa na sukari.', 'Şekerli kahve.'],
    ['mkate', 'mka-te', 'ekmek', '', 'Yemek', 'Mkate mmoja.', 'Bir ekmek.'],
    ['nyama', 'nya-ma', 'et', '', 'Yemek', 'Nyama ya kuku.', 'Tavuk eti.'],
    ['samaki', 'sa-ma-ki', 'balık', '', 'Yemek', 'Samaki wa kuchoma.', 'Izgara balık.'],
    ['menyu', 'me-nyu', 'menü', '', 'Restoran', 'Menyu tafadhali.', 'Menü lütfen.'],
    ['hesabu', 'he-sa-bu', 'hesap', '', 'Restoran', 'Hesabu, tafadhali.', 'Hesap lütfen.'],
    ['kitamu', 'ki-ta-mu', 'lezzetli', '', 'Sıfat', 'Chakula ni kitamu.', 'Yemek lezzetli.'],
  ]) },
  { num: 5, title: 'Market & Shopping', data: vocabLesson([
    ['bei', 'bei', 'fiyat', '', 'Alışveriş', 'Bei gani?', 'Fiyat ne?'],
    ['Bei gani?', 'bei ga-ni', 'Ne kadar?', 'Fiyat sorusu', 'Pazar', 'Bei gani hii?', 'Bu ne kadar?'],
    ['ghali', 'gha-li', 'pahalı', '', 'Sıfat', 'Ni ghali sana.', 'Sana pahalı.'],
    ['rahisi', 'ra-hi-si', 'ucuz', '', 'Sıfat', 'Ni rahisi.', 'Ucuz.'],
    ['nunua', 'nu-nu-a', 'satın almak', '', 'Fiil', 'Ninataka kununua.', 'Satın almak istiyorum.'],
    ['uza', 'u-za', 'satmak', '', 'Fiil', 'Anauza matunda.', 'Meyve satıyor.'],
    ['soko', 'so-ko', 'pazar', '', 'Yer', 'Nenda sokoni.', 'Pazara git.'],
    ['duka', 'du-ka', 'dükkan', '', 'Yer', 'Duka la mboga.', 'Sebze dükkanı.'],
    ['pesa', 'pe-sa', 'para', '', 'Para', 'Pesa ngapi?', 'Ne kadar para?'],
    ['mzigo', 'mzi-go', 'poşet / yük', '', 'Alışveriş', 'Mzigo mzito.', 'Ağır poşet.'],
  ]) },
  { num: 6, title: 'Directions & Places', data: vocabLesson([
    ['wapi', 'wa-pi', 'nerede?', '', 'Soru', 'Wapi hospitali?', 'Hastane nerede?'],
    ['hapa', 'ha-pa', 'burada', '', 'Yer', 'Kaa hapa.', 'Burada otur.'],
    ['huko', 'hu-ko', 'orada', '', 'Yer', 'Yuko huko.', 'O orada.'],
    ['kulia', 'ku-li-a', 'sağa', '', 'Yön', 'Geuka kulia.', 'Sağa dön.'],
    ['kushoto', 'ku-sho-to', 'sola', '', 'Yön', 'Geuka kushoto.', 'Sola dön.'],
    ['mbele', 'mbe-le', 'ileri / ön', '', 'Yön', 'Mbele ya hoteli.', 'Otelin önünde.'],
    ['nyuma', 'nyu-ma', 'arka', '', 'Yön', 'Nyuma ya jengo.', 'Binanın arkasında.'],
    ['barabara', 'ba-ra-ba-ra', 'cadde', '', 'Yer', 'Barabara kuu.', 'Ana cadde.'],
    ['karibu na', 'ka-ri-bu na', 'yakınında', '', 'Yer', 'Karibu na soko.', 'Pazarın yakınında.'],
    ['mbali na', 'mba-li na', 'uzakta', '', 'Yer', 'Mbali na mji.', 'Şehirden uzakta.'],
  ]) },
  { num: 7, title: 'Transport & Travel', data: vocabLesson([
    ['basi', 'ba-si', 'otobüs', '', 'Ulaşım', 'Basi la mji.', 'Şehir otobüsü.'],
    ['gari', 'ga-ri', 'araba', '', 'Ulaşım', 'Gari la abiria.', 'Yolcu arabası.'],
    ['ndege', 'nde-ge', 'uçak', '', 'Ulaşım', 'Ndege inashuka.', 'Uçak iniyor.'],
    ['tikiti', 'ti-ki-ti', 'bilet', '', 'Ulaşım', 'Tikiti moja.', 'Bir bilet.'],
    ['stesheni', 'ste-she-ni', 'istasyon', '', 'Yer', 'Stesheni ya basi.', 'Otobüs istasyonu.'],
    ['safari', 'sa-fa-ri', 'yolculuk', '', 'Seyahat', 'Safari njema!', 'İyi yolculuklar!'],
    ['bandari', 'ban-da-ri', 'liman', '', 'Yer', 'Bandari ya Dar.', 'Dar limanı.'],
    ['uwanja wa ndege', 'u-wan-ja wa nde-ge', 'havaalanı', '', 'Yer', 'Nenda uwanjani.', 'Havaalanına git.'],
    ['konde', 'kon-de', 'bilet kontrolü', '', 'Ulaşım', 'Onyesha tikiti.', 'Bileti göster.'],
    ['kusubiri', 'ku-su-bi-ri', 'beklemek', '', 'Fiil', 'Ninasubiri basi.', 'Otobüs bekliyorum.'],
  ]) },
  { num: 8, title: 'Hotel & Accommodation', data: vocabLesson([
    ['hoteli', 'ho-te-li', 'otel', '', 'Konaklama', 'Hoteli nzuri.', 'Güzel otel.'],
    ['chumba', 'chum-ba', 'oda', '', 'Konaklama', 'Chumba kimoja.', 'Bir oda.'],
    ['funguo', 'fun-guo', 'anahtar', '', 'Konaklama', 'Funguo la chumba.', 'Oda anahtarı.'],
    ['kitanda', 'ki-tan-da', 'yatak', '', 'Eşya', 'Kitanda kikubwa.', 'Büyük yatak.'],
    ['bafu', 'ba-fu', 'banyo', '', 'Eşya', 'Bafu safi.', 'Temiz banyo.'],
    ['hifadhi', 'hi-fa-dhi', 'rezervasyon', '', 'Konaklama', 'Nina hifadhi.', 'Rezervasyonum var.'],
    ['malazi', 'ma-la-zi', 'konaklama', '', 'Konaklama', 'Malazi ya usiku.', 'Gece konaklaması.'],
    ['kulala', 'ku-la-la', 'uyumak', '', 'Fiil', 'Nataka kulala.', 'Uyumak istiyorum.'],
    ['amka', 'am-ka', 'uyan', '', 'Fiil', 'Amka asubuhi.', 'Sabah uyan.'],
    ['usiku mwema', 'u-si-ku mwe-ma', 'iyi geceler', '', 'Nezaket', 'Usiku mwema!', 'İyi geceler!'],
  ]) },
  { num: 9, title: 'Health & Emergencies', data: vocabLesson([
    ['hospitali', 'hos-pi-ta-li', 'hastane', '', 'Sağlık', 'Nenda hospitalini.', 'Hastaneye git.'],
    ['daktari', 'dak-ta-ri', 'doktor', '', 'Sağlık', 'Nahitaji daktari.', 'Doktora ihtiyacım var.'],
    ['dawa', 'da-wa', 'ilaç', '', 'Sağlık', 'Dawa ya maumivu.', 'Ağrı kesici.'],
    ['maumivu', 'mau-mi-vu', 'ağrı', '', 'Sağlık', 'Nina maumivu.', 'Ağrım var.'],
    ['kichwa', 'ki-chwa', 'baş', '', 'Vücut', 'Kichwa kinauma.', 'Başım ağrıyor.'],
    ['homaa', 'ho-ma-a', 'ateş / grip', '', 'Sağlık', 'Nina homa.', 'Ateşim var.'],
    ['msaada', 'msaa-da', 'yardım', '', 'Acil', 'Nahitaji msaada!', 'Yardıma ihtiyacım var!'],
    ['polisi', 'po-li-si', 'polis', '', 'Acil', 'Piga simu polisi.', 'Polisi ara.'],
    ['haraka', 'ha-ra-ka', 'acele', '', 'Acil', 'Haraka!', 'Acele!'],
    ['afya', 'af-ya', 'sağlık', '', 'Sağlık', 'Afya njema!', 'Sağlıklı kal!'],
  ]) },
  { num: 10, title: 'Daily Conversation', data: vocabLesson([
    ['samahani', 'sa-ma-ha-ni', 'affedersiniz', '', 'Nezaket', 'Samahani, wapi?', 'Affedersiniz, nerede?'],
    ['sawa', 'sa-wa', 'tamam / peki', '', 'Nezaket', 'Sawa, twende.', 'Tamam, gidelim.'],
    ['labda', 'lab-da', 'belki', '', 'Konuşma', 'Labda kesho.', 'Belki yarın.'],
    ['hakika', 'ha-ki-ka', 'kesinlikle', '', 'Konuşma', 'Hakika!', 'Kesinlikle!'],
    ['bado', 'ba-do', 'henüz / hâlâ', '', 'Zaman', 'Bado sijui.', 'Henüz bilmiyorum.'],
    ['tayari', 'ta-ya-ri', 'hazır', '', 'Durum', 'Niko tayari.', 'Hazırım.'],
    ['ninaomba', 'ni-na-om-ba', 'rica ediyorum', '', 'Nezaket', 'Ninaomba maji.', 'Su rica ediyorum.'],
    ['nafurahi', 'na-fu-ra-hi', 'memnunum', '', 'Duygu', 'Nafurahi kukuona.', 'Seni gördüğüme sevindim.'],
    ['ninasikitika', 'ni-na-si-ki-ti-ka', 'üzgünüm', '', 'Duygu', 'Ninasikitika sana.', 'Üzgünüm.'],
    ['tutaonana', 'tu-ta-o-na-na', 'görüşürüz', '', 'Veda', 'Tutaonana kesho.', 'Yarın görüşürüz.'],
  ]) },
  { num: 11, title: 'Vocab 1 — Essential Verbs', data: vocabLesson([
    ['kwenda', 'kwen-da', 'gitmek', '', 'Fiil', 'Nitaenda sokoni.', 'Pazara gideceğim.'],
    ['kuja', 'ku-ja', 'gelmek', '', 'Fiil', 'Njoo hapa!', 'Buraya gel!'],
    ['kula', 'ku-la', 'yemek', '', 'Fiil', 'Ninakula chakula.', 'Yemek yiyorum.'],
    ['kunywa', 'ku-nywa', 'içmek', '', 'Fiil', 'Ninakunywa maji.', 'Su içiyorum.'],
    ['kusoma', 'ku-so-ma', 'okumak', '', 'Fiil', 'Anasoma kitabu.', 'Kitap okuyor.'],
    ['kuandika', 'ku-an-di-ka', 'yazmak', '', 'Fiil', 'Naandika barua.', 'Mektup yazıyorum.'],
    ['kusema', 'ku-se-ma', 'söylemek', '', 'Fiil', 'Anasema Kiswahili.', 'Svahili konuşuyor.'],
    ['kusikiliza', 'ku-si-ki-li-za', 'dinlemek', '', 'Fiil', 'Sikiliza!', 'Dinle!'],
    ['kufanya', 'ku-fan-ya', 'yapmak', '', 'Fiil', 'Ninafanya kazi.', 'İş yapıyorum.'],
    ['kupenda', 'ku-pen-da', 'sevmek / istemek', '', 'Fiil', 'Ninapenda kahawa.', 'Kahve severim.'],
  ]) },
  { num: 12, title: 'Vocab 2 — Adjectives & Feelings', data: vocabLesson([
    ['nzuri', 'nzu-ri', 'güzel / iyi', '', 'Sıfat', 'Siku nzuri.', 'Güzel gün.'],
    ['mbaya', 'mba-ya', 'kötü', '', 'Sıfat', 'Hali mbaya.', 'Kötü durum.'],
    ['kubwa', 'ku-bwa', 'büyük', '', 'Sıfat', 'Jengo kubwa.', 'Büyük bina.'],
    ['ndogo', 'ndo-go', 'küçük', '', 'Sıfat', 'Mtoto mdogo.', 'Küçük çocuk.'],
    ['refu', 're-fu', 'uzun', '', 'Sıfat', 'Barabara refu.', 'Uzun yol.'],
    ['fupi', 'fu-pi', 'kısa', '', 'Sıfat', 'Muda mfupi.', 'Kısa süre.'],
    ['furaha', 'fu-ra-ha', 'mutluluk', '', 'Duygu', 'Nina furaha.', 'Mutluyum.'],
    ['huzuni', 'hu-zu-ni', 'üzüntü', '', 'Duygu', 'Nina huzuni.', 'Üzgünüm.'],
    ['choyo', 'cho-yo', 'yorgun', '', 'Duygu', 'Nimechoka.', 'Yoruldum.'],
    ['na furaha', 'na fu-ra-ha', 'mutlu', '', 'Duygu', 'Niko na furaha.', 'Mutluyum.'],
  ]) },
  { num: 13, title: 'Vocab 3 — People & Family', data: vocabLesson([
    ['mtu', 'mtu', 'kişi', '', 'İnsan', 'Mtu mmoja.', 'Bir kişi.'],
    ['watu', 'wa-tu', 'insanlar', '', 'İnsan', 'Watu wengi.', 'Çok insan.'],
    ['mtoto', 'mto-to', 'çocuk', '', 'Aile', 'Mtoto mdogo.', 'Küçük çocuk.'],
    ['baba', 'ba-ba', 'baba', '', 'Aile', 'Baba yangu.', 'Babam.'],
    ['mama', 'ma-ma', 'anne', '', 'Aile', 'Mama yangu.', 'Annem.'],
    ['ndugu', 'ndu-gu', 'kardeş', '', 'Aile', 'Ndugu yangu.', 'Kardeşim.'],
    ['rafiki', 'ra-fi-ki', 'arkadaş', '', 'İlişki', 'Rafiki yangu.', 'Arkadaşım.'],
    ['jirani', 'ji-ra-ni', 'komşu', '', 'İlişki', 'Jirani mzuri.', 'İyi komşu.'],
    ['mwanafunzi', 'mwa-na-fun-zi', 'öğrenci', '', 'Rol', 'Mwanafunzi mzuri.', 'İyi öğrenci.'],
    ['mwalimu', 'mwa-li-mu', 'öğretmen', '', 'Rol', 'Mwalimu wangu.', 'Öğretmenim.'],
  ]) },
  { num: 14, title: 'Vocab 4 — City & Places', data: vocabLesson([
    ['mji', 'mji', 'şehir', '', 'Yer', 'Mji mkubwa.', 'Büyük şehir.'],
    ['nyumbani', 'nyum-ba-ni', 'evde', '', 'Yer', 'Niko nyumbani.', 'Evdeyim.'],
    ['shule', 'shu-le', 'okul', '', 'Yer', 'Shule ya msingi.', 'İlkokul.'],
    ['kanisa', 'ka-ni-sa', 'kilise', '', 'Yer', 'Kanisa kubwa.', 'Büyük kilise.'],
    ['msikiti', 'msi-ki-ti', 'cami', '', 'Yer', 'Msikiti wa mji.', 'Şehir camii.'],
    ['benki', 'ben-ki', 'banka', '', 'Yer', 'Benki ya taifa.', 'Ulusal banka.'],
    ['maktaba', 'mak-ta-ba', 'kütüphane', '', 'Yer', 'Maktaba ya shule.', 'Okul kütüphanesi.'],
    ['uwanja', 'u-wan-ja', 'meydan / saha', '', 'Yer', 'Uwanja wa michezo.', 'Spor sahası.'],
    ['ofisi', 'o-fi-si', 'ofis', '', 'Yer', 'Ofisi yangu.', 'Ofisim.'],
    ['kazi', 'ka-zi', 'iş', '', 'Yer', 'Nenda kazini.', 'İşe git.'],
  ]) },
  { num: 15, title: 'Vocab 5 — Food & Drinks', data: vocabLesson([
    ['matunda', 'ma-tun-da', 'meyve', '', 'Yemek', 'Matunda matamu.', 'Tatlı meyve.'],
    ['mboga', 'mbo-ga', 'sebze', '', 'Yemek', 'Mboga za majani.', 'Yeşil sebze.'],
    ['mchele', 'mche-le', 'pirinç', '', 'Yemek', 'Mchele na maharage.', 'Pirinç ve fasulye.'],
    ['maharage', 'ma-ha-ra-ge', 'fasulye', '', 'Yemek', 'Maharage ya kupika.', 'Pişirme fasulyesi.'],
    ['viazi', 'vi-a-zi', 'patates', '', 'Yemek', 'Viazi vya kukaanga.', 'Kızarmış patates.'],
    ['tunda la nanasi', 'tun-da la na-na-si', 'ananas', '', 'Yemek', 'Nanasi tamu.', 'Tatlı ananas.'],
    ['maji ya machungwa', 'ma-ji ya ma-chun-gwa', 'portakal suyu', '', 'İçecek', 'Maji ya machungwa baridi.', 'Soğuk portakal suyu.'],
    ['sukari', 'su-ka-ri', 'şeker', '', 'Malzeme', 'Sukari kidogo.', 'Az şeker.'],
    ['chumvi', 'chum-vi', 'tuz', '', 'Malzeme', 'Chumvi na pilipili.', 'Tuz ve biber.'],
    ['njaa', 'njaa', 'açlık', '', 'Duygu', 'Nina njaa.', 'Açım.'],
  ]) },
  { num: 16, title: 'Vocab 6 — Nature & Environment', data: vocabLesson([
    ['mazingira', 'ma-zin-gi-ra', 'çevre', '', 'Doğa', 'Mazingira safi.', 'Temiz çevre.'],
    ['mti', 'mti', 'ağaç', '', 'Doğa', 'Mti mrefu.', 'Uzun ağaç.'],
    ['mto', 'mto', 'nehir', '', 'Doğa', 'Mto mkubwa.', 'Büyük nehir.'],
    ['bahari', 'ba-ha-ri', 'deniz', '', 'Doğa', 'Bahari ya Hindi.', 'Hint okyanusu.'],
    ['mlima', 'mli-ma', 'dağ', '', 'Doğa', 'Mlima Kilimanjaro.', 'Kilimanjaro dağı.'],
    ['jua', 'ju-a', 'güneş', '', 'Doğa', 'Jua kali.', 'Kavurucu güneş.'],
    ['mvua', 'mvua', 'yağmur', '', 'Doğa', 'Mvua kubwa.', 'Şiddetli yağmur.'],
    ['upepo', 'u-pe-po', 'rüzgar', '', 'Doğa', 'Upepo mwanana.', 'Hafif rüzgar.'],
    ['wanyama', 'wa-nya-ma', 'hayvanlar', '', 'Doğa', 'Wanyama porini.', 'Vahşi hayvanlar.'],
    ['asili', 'a-si-li', 'doğa', '', 'Doğa', 'Asili nzuri.', 'Güzel doğa.'],
  ]) },
  { num: 17, title: 'Vocab 7 — Professions & Work', data: vocabLesson([
    ['mfanyakazi', 'mfa-nya-ka-zi', 'çalışan', '', 'Meslek', 'Mfanyakazi bora.', 'İyi çalışan.'],
    ['mhandisi', 'mhan-di-si', 'mühendis', '', 'Meslek', 'Mhandisi wa kompyuta.', 'Bilgisayar mühendisi.'],
    ['muuguzi', 'mu-u-gu-zi', 'hemşire', '', 'Meslek', 'Muuguzi hospitalini.', 'Hastane hemşiresi.'],
    ['mkulima', 'mku-li-ma', 'çiftçi', '', 'Meslek', 'Mkulima shambani.', 'Tarladaki çiftçi.'],
    ['mwanasheria', 'mwa-na-she-ria', 'avukat', '', 'Meslek', 'Mwanasheria mzuri.', 'İyi avukat.'],
    ['mwanahabari', 'mwa-na-ha-ba-ri', 'gazeteci', '', 'Meslek', 'Mwanahabari wa TV.', 'TV gazetecisi.'],
    ['meneja', 'me-ne-ja', 'müdür', '', 'Meslek', 'Meneja wa duka.', 'Dükkan müdürü.'],
    ['kazi ngumu', 'ka-zi ngu-mu', 'zor iş', '', 'İş', 'Kazi ngumu sana.', 'Çok zor iş.'],
    ['mshahara', 'msha-ha-ra', 'maaş', '', 'İş', 'Mshahara mzuri.', 'İyi maaş.'],
    ['likizo', 'li-ki-zo', 'tatil', '', 'İş', 'Likizo ya wiki.', 'Haftalık tatil.'],
  ]) },
  { num: 18, title: 'Vocab 8 — Time & Frequency', data: vocabLesson([
    ['dakika', 'da-ki-na', 'dakika', '', 'Zaman', 'Dakika kumi.', 'On dakika.'],
    ['saa', 'saa', 'saat', '', 'Zaman', 'Saa mbili.', 'İki saat.'],
    ['asubuhi', 'a-su-bu-hi', 'sabah', '', 'Zaman', 'Asubuhi na mapema.', 'Sabah erken.'],
    ['mchana', 'mcha-na', 'öğle', '', 'Zaman', 'Mchana mwema.', 'İyi öğlen.'],
    ['jioni', 'jo-ni', 'akşam', '', 'Zaman', 'Jioni nzuri.', 'Güzel akşam.'],
    ['usiku', 'u-si-ku', 'gece', '', 'Zaman', 'Usiku wa manane.', 'Gece yarısı.'],
    ['kila siku', 'ki-la si-ku', 'her gün', '', 'Sıklık', 'Kila siku ninasoma.', 'Her gün okuyorum.'],
    ['mara moja', 'ma-ra mo-ja', 'bir kez', '', 'Sıklık', 'Mara moja tu.', 'Sadece bir kez.'],
    ['mara nyingi', 'ma-ra nyingi', 'sık sık', '', 'Sıklık', 'Mara nyingi sana.', 'Çok sık.'],
    ['wakati mwingine', 'wa-ka-ti mwingi-ne', 'bazen', '', 'Sıklık', 'Wakati mwingine nenda.', 'Bazen giderim.'],
  ]) },
  { num: 19, title: 'Vocab 9 — Actions & Activities', data: vocabLesson([
    ['kucheza', 'ku-che-za', 'oynamak', '', 'Aktivite', 'Watoto wanacheza.', 'Çocuklar oynuyor.'],
    ['kuimba', 'ku-im-ba', 'şarkı söylemek', '', 'Aktivite', 'Anaimba vizuri.', 'Güzel şarkı söylüyor.'],
    ['kucheza ngoma', 'ku-che-za ngo-ma', 'dans etmek', '', 'Aktivite', 'Wanacheza ngoma.', 'Dans ediyorlar.'],
    ['kuogelea', 'ku-o-ge-le-a', 'yüzmek', '', 'Aktivite', 'Anaogelea baharini.', 'Denizde yüzüyor.'],
    ['kukimbia', 'ku-kim-bi-a', 'koşmak', '', 'Aktivite', 'Anakimbia haraka.', 'Hızlı koşuyor.'],
    ['kupumzika', 'ku-pum-zi-ka', 'dinlenmek', '', 'Aktivite', 'Ninapumzika.', 'Dinleniyorum.'],
    ['kusafiri', 'ku-sa-fi-ri', 'seyahat etmek', '', 'Aktivite', 'Tunasafiri Tanzania.', 'Tanzanya\'da seyahat ediyoruz.'],
    ['kupiga picha', 'ku-pi-ga pi-cha', 'fotoğraf çekmek', '', 'Aktivite', 'Piga picha!', 'Fotoğraf çek!'],
    ['kutazama', 'ku-ta-za-ma', 'izlemek', '', 'Aktivite', 'Tunatazama filamu.', 'Film izliyoruz.'],
    ['kupika', 'ku-pi-ka', 'yemek pişirmek', '', 'Aktivite', 'Anapika chakula.', 'Yemek pişiriyor.'],
  ]) },
  { num: 20, title: 'Vocab 10 — Mixed Vocabulary', data: vocabLesson([
    ['lugha', 'lu-gha', 'dil', '', 'Genel', 'Lugha ya Kiswahili.', 'Svahili dili.'],
    ['nchi', 'nchi', 'ülke', '', 'Genel', 'Nchi ya Tanzania.', 'Tanzanya ülkesi.'],
    ['mji mkuu', 'mji mkuu', 'başkent', '', 'Genel', 'Mji mkuu ni Dodoma.', 'Başkent Dodoma.'],
    ['Dar es Salaam', 'dar es sa-laam', 'Darüsselam', '', 'Yer', 'Ninaishi Dar.', 'Dar\'da yaşıyorum.'],
    ['Zanzibar', 'zan-zi-bar', 'Zanzibar', '', 'Yer', 'Zanzibar nzuri.', 'Güzel Zanzibar.'],
    ['Kilimanjaro', 'ki-li-man-ja-ro', 'Kilimanjaro', '', 'Yer', 'Mlima Kilimanjaro.', 'Kilimanjaro dağı.'],
    ['taifa', 'tai-fa', 'ulus / millet', '', 'Genel', 'Taifa letu.', 'Ulusumuz.'],
    ['demokrasia', 'de-mo-kra-si-a', 'demokrasi', '', 'Genel', 'Demokrasia ni muhimu.', 'Demokrasi önemli.'],
    ['amani', 'a-ma-ni', 'barış', '', 'Genel', 'Amani kwa wote.', 'Herkese barış.'],
    ['uhuru', 'u-hu-ru', 'özgürlük', '', 'Genel', 'Uhuru wa kusema.', 'Konuşma özgürlüğü.'],
  ]) },
];

for (const { num, title, data } of LESSONS) {
  fs.writeFileSync(path.join(outDir, `ders${num}.js`), emitLesson(num, title, data));
  console.log('wrote ders' + num + '.js');
}

const MANIFEST_LESSONS = [
  ['👋', 'Selamlaşma ve Tanışma', 'Greetings & Introductions', 'Mazungumzo na Utambulisho'],
  ['🔢', 'Sayılar ve Para', 'Numbers & Money', 'Nambari na Pesa'],
  ['🕐', 'Zaman ve Tarih', 'Time & Date', 'Muda na Tarehe'],
  ['🍽️', 'Restoran ve Yemek', 'Restaurant & Food', 'Mkahawa na Chakula'],
  ['🛒', 'Market ve Alışveriş', 'Market & Shopping', 'Soko na Ununuzi'],
  ['🗺️', 'Yol Tarifi ve Yönler', 'Directions & Places', 'Maelekezo na Maeneo'],
  ['🚌', 'Ulaşım ve Seyahat', 'Transport & Travel', 'Usafiri na Safari'],
  ['🏨', 'Otel ve Konaklama', 'Hotel & Accommodation', 'Hoteli na Malazi'],
  ['🏥', 'Sağlık ve Acil Durumlar', 'Health & Emergencies', 'Afya na Dharura'],
  ['🗣️', 'Günlük Konuşma', 'Daily Conversation', 'Mazungumzo ya Kila Siku'],
  ['🌟', 'Kelimeler 1 — Temel Fiiller', 'Vocab 1 — Essential Verbs', 'Maneno 1 — Vitenzi'],
  ['😊', 'Kelimeler 2 — Sıfatlar ve Duygular', 'Vocab 2 — Adjectives & Feelings', 'Maneno 2 — Vivumishi'],
  ['👤', 'Kelimeler 3 — İnsanlar ve Aile', 'Vocab 3 — People & Family', 'Maneno 3 — Watu na Familia'],
  ['🏙️', 'Kelimeler 4 — Şehir ve Mekanlar', 'Vocab 4 — City & Places', 'Maneno 4 — Jiji na Maeneo'],
  ['🍎', 'Kelimeler 5 — Yiyecekler ve İçecekler', 'Vocab 5 — Food & Drinks', 'Maneno 5 — Chakula na Vinywaji'],
  ['🌍', 'Kelimeler 6 — Doğa ve Çevre', 'Vocab 6 — Nature & Environment', 'Maneno 6 — Mazingira'],
  ['🔧', 'Kelimeler 7 — Meslekler ve İş', 'Vocab 7 — Professions & Work', 'Maneno 7 — Kazi'],
  ['⏰', 'Kelimeler 8 — Zaman ve Sıklık', 'Vocab 8 — Time & Frequency', 'Maneno 8 — Muda'],
  ['🏃', 'Kelimeler 9 — Eylemler ve Aktiviteler', 'Vocab 9 — Actions & Activities', 'Maneno 9 — Shughuli'],
  ['🎯', 'Kelimeler 10 — Karma Kelimeler', 'Vocab 10 — Mixed Vocabulary', 'Maneno 10 — Mchanganyiko'],
];

const manifestLessons = MANIFEST_LESSONS.map((m, i) => {
  const num = i + 1;
  return `    {
      "num": ${num},
      "emoji": "${m[0]}",
      "title": "${m[1]}",
      "title_en": "${m[2]}",
      "title_sw": "${m[3]}",
      "hasContent": true,
      "hasTones": false
    }`;
});

const manifest = `window.KDO_LANGUAGE_MANIFEST = {
  "code": "sw",
  "name": "Swahili",
  "nativeName": "Kiswahili",
  "voiceLang": "sw-TZ",
  "sourceLocale": "sw",
  "defaultBaseLanguage": "tr",
  "lessonPath": "languages/sw/lessons/ders{num}.js",
  "supports": {
    "romanization": true,
    "grammar": true,
    "speaking": true,
    "dialogues": true,
    "listening": true,
    "srs": true,
    "numbers": true,
    "calculator": false
  },
  "numbersLesson": 2,
  "fieldMap": {
    "text": "sw",
    "pronunciation": "ro",
    "meaning": "tr"
  },
  "lessons": [
${manifestLessons.join(',\n')}
  ]
};
`;

fs.writeFileSync(path.join(root, 'languages', 'sw', 'manifest.js'), manifest);
console.log('wrote languages/sw/manifest.js —', LESSONS.length, 'lessons');
