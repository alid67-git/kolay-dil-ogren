#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TARGET = join(__dirname, 'gen-french-lessons.mjs');
let f = readFileSync(TARGET, 'utf8');

function splice(startRe, endRe, replacement) {
  const start = f.search(startRe);
  const end = f.search(endRe);
  if (start < 0 || end < 0 || end <= start) throw new Error(`Markers not found: ${startRe} -> ${endRe} (${start}, ${end})`);
  f = f.slice(0, start) + replacement + f.slice(end);
}

const L1 = `// ─── Lesson 1: Greetings ─────────────────────────────────────
const L1 = scenario('Greetings & Introductions',
  [
    W('w1', 'Bonjour', 'bon-ZHOOR', 'Merhaba / Günaydın / İyi günler',
      { tip: 'En yaygın Fransız selamı.', ctx: 'Sabah, öğle ve gündüz — resmi ve samimi.',
        ex: { en: 'Bonjour!', tr: 'Merhaba!', bd: [BD('Bonjour', 'Merhaba', 'greeting', 'Fransızcadaki en temel selam. Gün boyunca kullanılır.')] } }),
    W('w2', 'Bonsoir', 'bon-SWAR', 'İyi akşamlar',
      { tip: 'Akşam selamlaması.', ctx: 'Genellikle 18:00\\'den sonra.',
        ex: { en: 'Bonsoir!', tr: 'İyi akşamlar!', bd: [BD('Bonsoir', 'İyi akşamlar', 'greeting', 'Akşam saatlerinde Bonjour yerine.')] } }),
    W('w3', 'Salut', 'sa-LÜ', 'Selam (samimi)',
      { tip: 'Gayri resmi selam.', ctx: 'Arkadaşlar, aile arasında.',
        ex: { en: 'Salut!', tr: 'Selam!', bd: [BD('Salut', 'Selam', 'greeting', 'Bonjour\\'dan çok daha samimi.')] } }),
    W('w4', 'Au revoir', 'o rə-VWAR', 'Hoşça kalın / Görüşürüz',
      { ex: { en: 'Au revoir!', tr: 'Hoşça kalın!', bd: [BD('Au revoir', 'Görüşmek üzere', 'farewell', 'Standart veda.')] } }),
    W('w5', 'Comment tu t\\'appelles?', 'ko-MAN tü ta-PEL', 'Adın ne? (samimi)',
      { ex: { en: 'Comment tu t\\'appelles?', tr: 'Adın ne?', bd: [BD('tu t\\'appelles', 'adın', 'V', 's\\'appeler — samimi form.')] } }),
    W('w6', 'Je m\\'appelle ...', 'zhə ma-PEL', 'Benim adım ...',
      { ex: { en: 'Je m\\'appelle Ali.', tr: 'Benim adım Ali.', bd: [BD('Je m\\'appelle', 'Adım', 'V', 's\\'appeler fiili.')] } }),
    W('w7', 'Enchanté', 'an-shan-TAY', 'Tanıştığıma memnun oldum (erkek)',
      { ex: { en: 'Enchanté!', tr: 'Memnun oldum!', bd: [BD('Enchanté', 'Memnun oldum', 'phrase', 'Erkek formu. Kadın: Enchantée.')] } }),
    W('w8', 'S\\'il vous plaît', 'sil vu PLE', 'Lütfen',
      { ex: { en: 'Un café, s\\'il vous plaît.', tr: 'Bir kahve, lütfen.', bd: [BD('S\\'il vous plaît', 'Lütfen', 'courtesy', 'Resmi nezaket.')] } }),
    W('w9', 'Merci', 'mer-SEE', 'Teşekkür ederim',
      { ex: { en: 'Merci beaucoup!', tr: 'Çok teşekkür ederim!', bd: [BD('Merci', 'Teşekkürler', 'V', 'Minnet ifadesi.')] } }),
    W('w10', 'De rien', 'də RYAN', 'Rica ederim',
      { ex: { en: 'De rien!', tr: 'Rica ederim!', bd: [BD('De rien', 'Bir şey değil', 'courtesy', 'Merci\\'ye cevap.')] } }),
    W('w11', 'Pardon', 'par-DON', 'Pardon / Affedersiniz',
      { ex: { en: 'Pardon, où est la gare?', tr: 'Pardon, istasyon nerede?', bd: [BD('Pardon', 'Pardon', 'courtesy', 'Dikkat çekme veya özür.')] } }),
    W('w12', 'Comment vous appelez-vous?', 'ko-MAN vu za-ple VU', 'Adınız ne? (resmi)',
      { ex: { en: 'Comment vous appelez-vous?', tr: 'Adınız ne?', bd: [BD('vous appelez-vous', 'adınız', 'V', 'Resmi form.')] } })
  ],
  [
    G('g1', 'Selamlaşma — Bonjour / Bonsoir / Salut', 'Greetings by Time of Day',
      'Fransızca selam günün saatine göre değişir. Gündüz: Bonjour. Akşam: Bonsoir. Salut = samimi selam. Gece: Bonne nuit.',
      [{ pronoun: 'Gündüz', form: 'Bonjour', example: 'Bonjour!', tr: 'Merhaba!' },
       { pronoun: 'Akşam', form: 'Bonsoir', example: 'Bonsoir!', tr: 'İyi akşamlar!' },
       { pronoun: 'Samimi', form: 'Salut', example: 'Salut!', tr: 'Selam!' },
       { pronoun: 'Veda', form: 'Au revoir', example: 'Au revoir!', tr: 'Hoşça kalın!' }],
      'Türkçede tek Merhaba yeter; Fransızcada akşam Bonsoir tercih edilir.'),
    G('g2', 'tu vs vous — Samimi ve Resmi Hitap', 'Formal vs Informal Address',
      'tu (sen) — arkadaş, aile. vous (siz) — tanımadığınız, resmi ortam. Fiil çekimi değişir: tu t\\'appelles vs vous vous appelez.',
      [{ pronoun: 'Samimi', form: 'tu', example: 'Comment tu t\\'appelles?', tr: 'Adın ne?' },
       { pronoun: 'Resmi', form: 'vous', example: 'Comment vous appelez-vous?', tr: 'Adınız ne?' },
       { pronoun: 'Tanışma', form: 'Enchanté(e)', example: 'Enchanté!', tr: 'Memnun oldum.' },
       { pronoun: 'Nezaket', form: 'S\\'il vous plaît', example: 'S\\'il vous plaît.', tr: 'Lütfen.' }],
      'Kararsız kalırsan vous ile başla.')
  ],
  [SP('sp1', 'Bonjour!', 'Merhaba!', 'Selamla'),
   SP('sp2', 'Je m\\'appelle Ali.', 'Benim adım Ali.', 'Adını söyle'),
   SP('sp3', 'Enchanté!', 'Tanıştığıma memnun oldum.', 'Tanışma ifadesi', { gramNote: 'Erkek: Enchanté. Kadın: Enchantée.' }),
   SP('sp4', 'Merci. Au revoir!', 'Teşekkürler. Hoşça kalın!', 'Teşekkür et ve vedalaş'),
   SP('sp5', 'S\\'il vous plaît.', 'Lütfen.', 'Nezaket ifadesi')],
  [DL('d1', 'İlk Tanışma', 'First Meeting', [
    LN('A', 'm', 'Bonjour!', 'Merhaba!', 'Gündüz standart selam.', [BD('Bonjour', 'Merhaba', 'greeting', 'Gün boyunca.')]),
    LN('B', 'f', 'Bonjour! Comment vous appelez-vous?', 'Merhaba! Adınız ne?', 'Resmi tanışma.', [BD('Comment vous appelez-vous', 'Adınız ne', 'question', 'Resmi form.')]),
    LN('A', 'm', 'Je m\\'appelle Ali. Et vous?', 'Benim adım Ali. Ya siz?', 'Kendini tanıtma.', [BD('Je m\\'appelle', 'Adım', 'V', 's\\'appeler.'), BD('Et vous', 'Ya siz', 'question', 'Karşılık sorma.')]),
    LN('B', 'f', 'Je m\\'appelle Marie. Enchantée!', 'Benim adım Marie. Memnun oldum!', 'Kadın formu.', [BD('Enchantée', 'Memnun oldum', 'phrase', 'Kadın formu.')]),
    LN('A', 'm', 'Enchanté. Au revoir!', 'Memnun oldum. Hoşça kalın!', 'Erkek formu + veda.', [BD('Au revoir', 'Hoşça kalın', 'farewell', 'Standart veda.')]),
    LN('B', 'f', 'Salut!', 'Selam!', 'Samimi veda.', [BD('Salut', 'Selam', 'farewell', 'Arkadaş ortamında.')])
  ]),
   DL('d2', 'Nezaket', 'Politeness', [
    LN('A', 'f', 'Voici votre café.', 'Buyurun kahveniz.', 'Servis.', [BD('Voici', 'Buyurun', 'V', 'Sunma.')]),
    LN('B', 'm', 'Merci!', 'Teşekkürler!', 'Teşekkür.', [BD('Merci', 'Teşekkürler', 'courtesy', 'Minnet.')]),
    LN('A', 'f', 'De rien!', 'Rica ederim!', 'Cevap.', [BD('De rien', 'Rica ederim', 'courtesy', 'Merci cevabı.')]),
    LN('B', 'm', 'Pardon, l\\'addition, s\\'il vous plaît.', 'Pardon, hesap, lütfen.', 'Hesap isteme.', [BD('l\\'addition', 'hesap', 'O', 'Restoranda.')]),
    LN('A', 'f', 'Tout de suite. Au revoir!', 'Hemen. Hoşça kalın!', 'Veda.', [BD('Tout de suite', 'Hemen', 'K', 'Hızlı hizmet.')])
  ])],
  [LI('li1', 'Bonjour! Je m\\'appelle Emma. Enchantée!', 'Merhaba! Benim adım Emma. Memnun oldum!',
    [Q('Comment s\\'appelle-t-elle?', ['Emma', 'Ali', 'Marie', 'Tom'], 0, 'Adı ne?'),
     Q('Quelle salutation?', ['Au revoir', 'Bonjour', 'Bonne nuit', 'Salut'], 1, 'Hangi selam?'),
     Q('Après son nom?', ['Merci', 'Enchantée', 'De rien', 'Pardon'], 1, 'İsminden sonra ne?')])]
);

`;

// Load L2, L3, L4-20, VOCAB from companion file
const { L2, L3, L4_20, FR_VOCAB } = await import('./fr-patch-data.mjs');

splice(/\/\/ .* Lesson 1: Greetings/, /\/\/ .* Lesson 2:/, L1);
splice(/\/\/ .* Lesson 2: Artikel & sein/, /\/\/ .* Lesson 3:/, L2);
splice(/\/\/ .* Lesson 3: Numbers & Money/, /\/\/ .* Helper: compact scenario builder/, L3);
splice(/\/\/ .* Lessons 4.20: Scenario topics/, /\/\/ .* Vocab lessons 21/, L4_20);

const vocStart = f.indexOf('const VOCAB = {');
const vocEnd = f.indexOf('};', vocStart) + 2;
f = f.slice(0, vocStart) + `const VOCAB = ${FR_VOCAB};\n` + f.slice(vocEnd);

writeFileSync(TARGET, f, 'utf8');
console.log('Patched gen-french-lessons.mjs successfully');
