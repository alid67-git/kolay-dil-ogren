#!/usr/bin/env node
/**
 * Generates Italian lesson files ders1.js – ders49.js
 * Run: node tools/gen-italian-lessons.mjs
 */
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '../languages/it/lessons');
mkdirSync(OUT_DIR, { recursive: true });

// ─── Serialization ───────────────────────────────────────────
function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r/g, '');
}

function ser(v, d = 0) {
  const p = '  '.repeat(d);
  const pi = '  '.repeat(d + 1);
  if (v === null || v === undefined) return 'null';
  if (typeof v === 'string') return `'${esc(v)}'`;
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  if (Array.isArray(v)) {
    if (!v.length) return '[]';
    return '[\n' + v.map(x => pi + ser(x, d + 1)).join(',\n') + '\n' + p + ']';
  }
  const keys = Object.keys(v);
  if (!keys.length) return '{}';
  return '{\n' + keys.map(k => {
    const key = /^[a-zA-Z_]\w*$/.test(k) ? k : `'${k}'`;
    return pi + key + ':' + ser(v[k], d + 1);
  }).join(',\n') + '\n' + p + '}';
}

// ─── Builders ────────────────────────────────────────────────
function W(id, en, ro, tr, o = {}) {
  const w = { id, en, ro, tr };
  if (o.tip) w.tip = o.tip;
  if (o.ctx) w.ctx = o.ctx;
  if (o.ex) {
    const ex = { en: o.ex.en, tr: o.ex.tr, bd: o.ex.bd || [] };
    if (o.ex.gramNote) ex.gramNote = o.ex.gramNote;
    w.examples = [ex];
  }
  return w;
}

function G(id, title, title_en, explanation, table, note) {
  return { id, title, title_en, explanation, table, note };
}

function SP(id, en, tr, prompt, o = {}) {
  const s = { id, en, tr, prompt };
  if (o.gramNote) s.gramNote = o.gramNote;
  if (o.ro) s.ro = o.ro;
  if (o.tip) s.tip = o.tip;
  return s;
}

function DL(id, title, title_en, lines) {
  return { id, title, title_en, lines };
}

function LN(speaker, gender, en, tr, gramNote, bd) {
  const l = { speaker, gender, en, tr };
  if (gramNote) l.gramNote = gramNote;
  if (bd) l.bd = bd;
  return l;
}

function BD(ro, tr, role, note) {
  return { ro, tr, role, note };
}

function LI(id, transcript, tr, questions) {
  return { id, audio: '', transcript, tr, questions };
}

function Q(q, opts, answer, tr) {
  return { q, opts, answer, tr };
}

function scenario(title, words, grammar, speaking, dialogues, listening) {
  return { words, grammar, speaking, dialogues, listening, tones: [] };
}

function vocab(title, words) {
  return { words, grammar: [], speaking: [], dialogues: [], listening: [], tones: [] };
}

function render(n, title, data, tag = 'beginner') {
  return `// ders${n}.js — Italian Lesson ${n}: ${title} (${tag})\nconst L${n} = ${ser(data, 0)};\nLESSONS[${n}] = L${n};\n`;
}

// ─── Italian numbers for Lesson 3 UI ─────────────────────────
const IT_NUMBERS = [
  { n: 0, word: 'zero', tr: 'sıfır' },
  { n: 1, word: 'uno', tr: 'bir' },
  { n: 2, word: 'due', tr: 'iki' },
  { n: 3, word: 'tre', tr: 'üç' },
  { n: 4, word: 'quattro', tr: 'dört' },
  { n: 5, word: 'cinque', tr: 'beş' },
  { n: 6, word: 'sei', tr: 'altı' },
  { n: 7, word: 'sette', tr: 'yedi' },
  { n: 8, word: 'otto', tr: 'sekiz' },
  { n: 9, word: 'nove', tr: 'dokuz' },
  { n: 10, word: 'dieci', tr: 'on' },
  { n: 11, word: 'undici', tr: 'on bir' },
  { n: 12, word: 'dodici', tr: 'on iki' },
  { n: 13, word: 'tredici', tr: 'on üç' },
  { n: 14, word: 'quattordici', tr: 'on dört' },
  { n: 15, word: 'quindici', tr: 'on beş' },
  { n: 16, word: 'sedici', tr: 'on altı' },
  { n: 17, word: 'diciassette', tr: 'on yedi' },
  { n: 18, word: 'diciotto', tr: 'on sekiz' },
  { n: 19, word: 'diciannove', tr: 'on dokuz' },
  { n: 20, word: 'venti', tr: 'yirmi' },
  { n: 30, word: 'trenta', tr: 'otuz' },
  { n: 40, word: 'quaranta', tr: 'kırk' },
  { n: 50, word: 'cinquanta', tr: 'elli' },
  { n: 60, word: 'sessanta', tr: 'altmış' },
  { n: 70, word: 'settanta', tr: 'yetmiş' },
  { n: 80, word: 'ottanta', tr: 'seksen' },
  { n: 90, word: 'novanta', tr: 'doksan' },
  { n: 100, word: 'cento', tr: 'yüz' },
  { n: 1000, word: 'mille', tr: 'bin' }
];

const IT_COMPOUNDS = [
  { n: 21, word: 'ventuno', tr: 'yirmi bir' },
  { n: 32, word: 'trentadue', tr: 'otuz iki' },
  { n: 105, word: 'centocinque', tr: 'yüz beş' },
  { n: 350, word: 'trecentocinquanta', tr: 'üç yüz elli' },
  { n: 1835, word: 'milleottocentotrentacinque', tr: 'bin sekiz yüz otuz beş' },
  { n: 10000, word: 'diecimila', tr: 'on bin' }
];

function mkScenarioWords(list) {
  return list.map(([id, en, ro, tr, o = {}], i) => W(id || `w${i + 1}`, en, ro, tr, o));
}

function buildVocabLesson(n, title, entries) {
  const words = entries.map(([en, ro, tr, ex], i) => {
    const o = {};
    if (ex) o.ex = ex;
    return W(`w${i + 1}`, en, ro, tr, o);
  });
  return vocab(title, words);
}

// ─── Lesson 1: Greetings ─────────────────────────────────────
const L1 = scenario('Greetings & Introductions',
  [
    W('w1', 'Ciao', 'CHAO', 'Merhaba / Selam',
      { tip: 'En yaygın selamlama.', ctx: 'Samimi — arkadaş, aile, gençler arası.',
        ex: { en: 'Ciao!', tr: 'Selam!', bd: [BD('Ciao', 'Merhaba', 'greeting', 'İtalyancada en sık selam. Günün her saatinde samimi ortamda.')] } }),
    W('w2', 'Buongiorno', 'buan-JOR-no', 'Günaydın / İyi günler',
      { tip: 'Sabah ve gündüz selamı.', ctx: 'Resmi ve yarı resmi ortamlarda.',
        ex: { en: 'Buongiorno!', tr: 'Günaydın!', bd: [BD('Buon', 'İyi', 'K', 'Buono sıfatının kısaltması — iyi.'), BD('giorno', 'gün', 'O', 'Sabah ~öğlene kadar veya resmi gündüz selamı.')] } }),
    W('w3', 'Buonasera', 'bua-na-SE-ra', 'İyi akşamlar',
      { tip: 'Akşam selamlaması.', ctx: 'Genellikle 17:00\'den sonra.',
        ex: { en: 'Buonasera!', tr: 'İyi akşamlar!', bd: [BD('Buonasera', 'İyi akşamlar', 'greeting', 'sera = akşam. Restoran, tiyatro gibi akşam ortamlarında.')] } }),
    W('w4', 'Arrivederci', 'a-ri-ve-DER-chi', 'Hoşça kalın / Görüşürüz',
      { tip: 'Resmi ve nötr veda.', ctx: 'Her ortamda güvenle kullanılır.',
        ex: { en: 'Arrivederci!', tr: 'Hoşça kalın!', bd: [BD('Arrivederci', 'Görüşmek üzere', 'farewell', 'a + rivederci (tekrar görmek). Kibar veda.')] } }),
    W('w5', 'Come ti chiami?', 'KO-me ti KYA-mi', 'Adın ne? (samimi)',
      { tip: 'İsim sorma — tu formu.', ctx: 'Arkadaşça tanışmada.',
        ex: { en: 'Ciao, come ti chiami?', tr: 'Selam, adın ne?', bd: [BD('Come', 'Nasıl / ne', 'question', 'Soru kelimesi.'), BD('ti chiami', 'adın ...', 'V', 'chiamarsi = adlandırılmak. ti = sana (reflexive).')] } }),
    W('w6', 'Mi chiamo ...', 'mi KYA-mo', 'Benim adım ... / Adım ...',
      { tip: 'Kendini tanıtma.', ctx: 'İlk tanışmada.',
        ex: { en: 'Mi chiamo Ali.', tr: 'Benim adım Ali.', bd: [BD('Mi', 'Beni / benim', 'S', 'Reflexive — kendinden bahsederken.'), BD('chiamo', 'adım ...', 'V', 'chiamarsi: mi chiamo = adım ... (erkek Ali).')] } }),
    W('w7', 'Piacere', 'pya-CHE-re', 'Memnun oldum',
      { tip: 'Tanışma ifadesi.', ctx: 'Yeni biriyle tanışınca.',
        ex: { en: 'Piacere!', tr: 'Memnun oldum!', bd: [BD('Piacere', 'Zevk / memnuniyet', 'phrase', 'Kısaltma: Piacere di conoscerti. Günlükte sadece Piacere yeterli.')] } }),
    W('w8', 'Per favore', 'per fa-VO-re', 'Lütfen',
      { tip: 'Nezaket kelimesi.', ctx: 'İstek yaparken.',
        ex: { en: 'Un caffè, per favore.', tr: 'Bir kahve, lütfen.', bd: [BD('Per favore', 'Lütfen', 'courtesy', 'İstek cümlelerinde veya siparişte.')] } }),
    W('w9', 'Grazie', 'GRA-tsye', 'Teşekkür ederim',
      { tip: 'Minnet ifadesi.', ctx: 'Her yerde.',
        ex: { en: 'Grazie mille!', tr: 'Çok teşekkürler!', bd: [BD('Grazie', 'Teşekkürler', 'courtesy', 'Tek başına yeterli. mille = bin → çok teşekkürler.')] } }),
    W('w10', 'Prego', 'PRE-go', 'Rica ederim / Buyurun',
      { tip: 'Teşekküre veya ricaya cevap.', ctx: 'Mağaza, restoran, günlük konuşma.',
        ex: { en: 'Grazie! — Prego!', tr: 'Teşekkürler! — Rica ederim!', bd: [BD('Prego', 'Rica ederim', 'courtesy', 'grazie\'ye cevap. Ayrıca "buyurun" anlamında.')] } }),
    W('w11', 'Scusi', 'SKU-zi', 'Affedersiniz / Pardon',
      { tip: 'Resmi özür / dikkat çekme.', ctx: 'Yabancıya, yaşlıya, resmi ortamda.',
        ex: { en: 'Scusi, dov\'è la stazione?', tr: 'Affedersiniz, istasyon nerede?', bd: [BD('Scusi', 'Affedersiniz', 'courtesy', 'Lei formu (resmi). Samimide scusa kullanılır.')] } }),
    W('w12', 'Come sta?', 'KO-me STA', 'Nasılsınız? (resmi)',
      { tip: 'Resmi hal hatır sorusu.', ctx: 'Lei ile hitap ederken.',
        ex: { en: 'Buongiorno, come sta?', tr: 'İyi günler, nasılsınız?', bd: [BD('Come sta', 'Nasılsınız', 'question', 'sta = stare (durum). Lei formu — resmi.')] } }),
    W('w13', 'Sto bene', 'sto BE-ne', 'İyiyim',
      { tip: 'Standart cevap.', ctx: 'Come sta? sorusuna.',
        ex: { en: 'Sto bene, grazie. E Lei?', tr: 'İyiyim, teşekkürler. Ya siz?', bd: [BD('Sto bene', 'İyiyim', 'V', 'stare + bene. Türkçede "iyiyim".'), BD('E Lei', 'Ya siz', 'question', 'Lei büyük harfle — saygı.')] } }),
    W('w14', 'Sì / No', 'see / no', 'Evet / Hayır',
      { ex: { en: 'Sì, grazie. / No, grazie.', tr: 'Evet, teşekkürler. / Hayır, teşekkürler.', bd: [BD('Sì', 'Evet', 'phrase', 'Onay.'), BD('No', 'Hayır', 'phrase', 'grazie ile kibar red.')] } })
  ],
  [
    G('g1', 'Selamlaşma — Saate Göre', 'Greetings by Time of Day',
      'İtalyancada selam saate göre değişir. Ciao her zaman samimi ortamda geçer. Sabah ve gündüz: Buongiorno. Akşam: Buonasera. Gece yatarken: Buonanotte. Resmi ortamda Buongiorno/Buonasera tercih edilir; Ciao çok samimi kalır.',
      [
        { pronoun: 'Sabah/gündüz', form: 'Buongiorno', example: 'Buongiorno!', tr: 'Günaydın / İyi günler!' },
        { pronoun: 'Akşam', form: 'Buonasera', example: 'Buonasera!', tr: 'İyi akşamlar!' },
        { pronoun: 'Samimi', form: 'Ciao', example: 'Ciao!', tr: 'Selam!' },
        { pronoun: 'Veda', form: 'Arrivederci / Ciao', example: 'Arrivederci!', tr: 'Hoşça kalın!' }
      ],
      'Türkçede tek "Merhaba" yeter; İtalyancada saat ve samimiyet fark eder.'),
    G('g2', 'tu vs Lei — Samimi ve Resmi Hitap', 'Informal tu vs Formal Lei',
      'İtalyancada iki hitap vardır: tu (sen) — arkadaş, aile, yaşıt. Lei (Siz) — tanımadığınız, yaşlı, resmi ortam. Lei aslında 3. tekil şahıs fiili kullanır (come sta?, non capisco). Ali erkek öğrenci olarak yeni tanışmalarda Lei kullanır; karşı taraf "Diamo del tu" derse tu\'ya geçilir. Scusi = resmi, scusa = samimi.',
      [
        { pronoun: 'Samimi', form: 'tu / ti / te', example: 'Come ti chiami?', tr: 'Adın ne?' },
        { pronoun: 'Resmi', form: 'Lei', example: 'Come si chiama?', tr: 'Adınız ne?' },
        { pronoun: 'Tanışma', form: 'Piacere', example: 'Piacere!', tr: 'Memnun oldum.' },
        { pronoun: 'Nezaket', form: 'Per favore / Grazie / Prego', example: 'Grazie! — Prego!', tr: 'Teşekkürler! — Rica ederim.' }
      ],
      'Mağaza, doktor, iş görüşmesi → Lei. Arkadaş, sınıf arkadaşı → tu. Kararsız kalırsan Lei ile başla.')
  ],
  [
    SP('sp1', 'Ciao!', 'Selam!', 'Samimi selamla'),
    SP('sp2', 'Buongiorno!', 'Günaydın!', 'Sabah selamı söyle'),
    SP('sp3', 'Mi chiamo Ali.', 'Benim adım Ali.', 'Adını söyle'),
    SP('sp4', 'Piacere!', 'Memnun oldum.', 'Tanışma ifadesi',
      { gramNote: 'Tanışma kalıbı — yeni biriyle tanışınca.' }),
    SP('sp5', 'Grazie. Arrivederci!', 'Teşekkürler. Hoşça kalın!', 'Teşekkür et ve vedalaş')
  ],
  [
    DL('d1', 'İlk Tanışma', 'First Meeting', [
      LN('A', 'm', 'Ciao!', 'Selam!', 'Samimi selamlama.',
        [BD('Ciao', 'Selam', 'greeting', 'Günlük ortamda en sık selam.')]),
      LN('B', 'f', 'Buongiorno!', 'Günaydın!', 'Resmi selamlama — gündüz.',
        [BD('Buongiorno', 'İyi günler', 'greeting', 'Ofis, ders gibi ortamlarda.')]),
      LN('A', 'm', 'Mi chiamo Ali. E tu?', 'Benim adım Ali. Ya sen?',
        'Kendini tanıtma + karşı tarafa sorma. E = ve, ya.',
        [BD('Mi chiamo', 'Adım', 'V', 'chiamarsi — mi chiamo.'), BD('Ali', 'Ali', 'name', 'Özel isim.'), BD('E tu', 'Ya sen', 'question', 'Samimi isim sorma.')]),
      LN('B', 'f', 'Mi chiamo Anna. Piacere!', 'Benim adım Anna. Memnun oldum!',
        'İsim + tanışma ifadesi.',
        [BD('Mi chiamo Anna', 'Adım Anna', 'V', 'Kendini tanıtma.'), BD('Piacere', 'Memnun oldum', 'phrase', 'Tanışma ifadesi.')]),
      LN('A', 'm', 'Piacere anche a me. Arrivederci!', 'Ben de memnun oldum. Hoşça kalın!',
        'anche a me = bana da. Resmi veda.',
        [BD('anche a me', 'bana da', 'K', 'Karşılıklı memnuniyet.'), BD('Arrivederci', 'Hoşça kalın', 'farewell', 'Kibar veda.')]),
      LN('B', 'f', 'Ciao!', 'Hoşça kal!', 'Samimi veda.',
        [BD('Ciao', 'Hoşça kal', 'farewell', 'Samimi ortamda veda.')])
    ]),
    DL('d2', 'Hal Hatır', 'How Are You', [
      LN('A', 'f', 'Buongiorno!', 'Günaydın!', 'Sabah selamlaması.',
        [BD('Buongiorno', 'Günaydın', 'greeting', 'Öğlene kadar veya resmi gündüz.')]),
      LN('B', 'm', 'Buongiorno!', 'Günaydın!', 'Karşılıklı selam.',
        [BD('Buongiorno', 'Günaydın', 'greeting', 'Aynı selamla karşılık.')]),
      LN('A', 'f', 'Come sta?', 'Nasılsınız?', 'Resmi hal hatır — Lei formu.',
        [BD('Come sta', 'Nasılsınız', 'question', 'stare fiili — Lei (resmi).')]),
      LN('B', 'm', 'Sto bene, grazie. E Lei?', 'İyiyim, teşekkürler. Ya siz?',
        'Standart cevap. Lei büyük harfle yazılır.',
        [BD('Sto bene', 'İyiyim', 'V', 'stare + bene.'), BD('grazie', 'teşekkürler', 'courtesy', 'Nezaket.'), BD('E Lei', 'Ya siz', 'question', 'Resmi karşılık sorma.')]),
      LN('A', 'f', 'Bene anche io, grazie. Arrivederci!', 'Ben de iyiyim, teşekkürler. Hoşça kalın!',
        'anche io = ben de. Olumlu cevap + veda.',
        [BD('anche io', 'ben de', 'K', 'Karşılık.'), BD('Arrivederci', 'Hoşça kalın', 'farewell', 'Resmi ayrılık.')])
    ])
  ],
  [
    LI('li1', 'Ciao! Mi chiamo Emma. Piacere!', 'Selam! Benim adım Emma. Memnun oldum!',
      [Q('Come si chiama?', ['Emma', 'Ali', 'Anna', 'Marco'], 0, 'Adı ne?'),
       Q('Quale saluto usa?', ['Arrivederci', 'Ciao', 'Buonanotte', 'Grazie'], 1, 'Hangi selamı kullanıyor?'),
       Q('Cosa dice dopo il nome?', ['Grazie', 'Piacere', 'Prego', 'No'], 1, 'İsminden sonra ne diyor?')])
  ]
);

// ─── Lesson 2: Articoli & essere ─────────────────────────────
const L2 = scenario('Articoli & essere',
  [
    W('w1', 'il libro', 'il LI-bro', 'kitap (eril)', { tip: 'Belirli eril artikel: il.', ctx: 'Çoğu eril isim il alır.',
      ex: { en: 'Il libro è interessante.', tr: 'Kitap ilginç.', bd: [BD('Il', 'Belirli eril artikel', 'K', 'il = the (eril).'), BD('libro', 'kitap', 'O', 'Eril isim.'), BD('è interessante', 'ilginç', 'V', 'essere + sıfat.')] } }),
    W('w2', 'lo studente', 'lo stu-DEN-te', 'öğrenci (erkek)', { tip: 'lo: s+ünsüz veya z, gn, ps, x ile başlayan eril.', ctx: 'Özel eril kuralı.',
      ex: { en: 'Lo studente è italiano.', tr: 'Öğrenci İtalyan.', bd: [BD('Lo', 'Belirli eril (özel)', 'K', 's+consonant → lo.'), BD('studente', 'öğrenci', 'O', 'Eril.')] } }),
    W('w3', 'la donna', 'la DON-na', 'kadın (dişil)', { tip: 'Belirli dişil artikel: la.', ctx: 'Dişil isimler la alır.',
      ex: { en: 'La donna è gentile.', tr: 'Kadın nazik.', bd: [BD('La', 'Belirli dişil artikel', 'K', 'la = the (dişil).'), BD('donna', 'kadın', 'O', 'Dişil isim.')] } }),
    W('w4', 'l\'amico', 'la-MI-ko', 'arkadaş (erkek)', { tip: 'l\' — ünlü ile başlayan isimlerde.', ctx: 'il/lo/la yerine l\'.',
      ex: { en: 'L\'amico è simpatico.', tr: 'Arkadaş sevimli.', bd: [BD("l'", 'belirli artikel (ünlü)', 'K', 'Ünlü öncesi kısaltma.'), BD('amico', 'arkadaş (erkek)', 'O', 'Eril.')] } }),
    W('w5', 'un libro', 'un LI-bro', 'bir kitap', { tip: 'Belirsiz eril: un.', ctx: 'Sayılmayan tekil eril.',
      ex: { en: 'È un libro.', tr: 'Bu bir kitap.', bd: [BD('un', 'bir (eril)', 'K', 'Belirsiz artikel — eril.'), BD('libro', 'kitap', 'O', 'Eril.')] } }),
    W('w6', 'uno studente', 'U-no stu-DEN-te', 'bir öğrenci', { tip: 'uno: z, gn, ps, s+ünsüz ile başlayan eril.', ctx: 'Özel belirsiz eril.',
      ex: { en: 'È uno studente.', tr: 'O bir öğrenci.', bd: [BD('uno', 'bir (özel eril)', 'K', 'lo ile aynı kural.'), BD('studente', 'öğrenci', 'O', 'Eril.')] } }),
    W('w7', 'una donna', 'U-na DON-na', 'bir kadın', { tip: 'Belirsiz dişil: una.', ctx: 'Sayılmayan tekil dişil.',
      ex: { en: 'È una donna.', tr: 'O bir kadın.', bd: [BD('una', 'bir (dişil)', 'K', 'Sadece dişil için una.'), BD('donna', 'kadın', 'O', 'Dişil.')] } }),
    W('w8', 'io sono', 'yo SO-no', 'ben ...im / ben ...yim', { tip: 'essere — 1. tekil.', ctx: 'Kendini tanıtma.',
      ex: { en: 'Io sono Ali.', tr: 'Ben Ali\'yim.', bd: [BD('Io', 'Ben', 'S', '1. tekil özne (çoğu zaman düşer).'), BD('sono', '...im', 'V', 'essere — io ile sono.')] } }),
    W('w9', 'tu sei', 'tu say', 'sen ...sin', { tip: 'essere — 2. tekil samimi.', ctx: 'Arkadaşlarla.',
      ex: { en: 'Tu sei simpatico.', tr: 'Sen sevimlisin.', bd: [BD('Tu', 'Sen', 'S', 'Samimi hitap.'), BD('sei', '...sin', 'V', 'tu ile sei.')] } }),
    W('w10', 'lui/lei è', 'lu-i / lay eh', 'o ... (erkek/kadın)', { tip: 'essere — 3. tekil.', ctx: 'Başkasından bahsederken.',
      ex: { en: 'Lui è studente.', tr: 'O (erkek) öğrenci.', bd: [BD('Lui', 'O (erkek)', 'S', '3. tekil eril.'), BD('è', '...dir', 'V', 'lui/lei/Lei ile è.')] } }),
    W('w11', 'noi siamo', 'noy SYA-mo', 'biz ...iz', { tip: 'essere — 1. çoğul.', ctx: 'Grup halinde.',
      ex: { en: 'Noi siamo amici.', tr: 'Biz arkadaşız.', bd: [BD('Noi', 'Biz', 'S', '1. çoğul.'), BD('siamo', '...iz', 'V', 'noi ile siamo.')] } }),
    W('w12', 'voi siete', 'voy SYE-te', 'siz ...siniz', { tip: 'essere — 2. çoğul.', ctx: 'Birden fazla kişiye.',
      ex: { en: 'Voi siete bravi.', tr: 'Siz iyisiniz.', bd: [BD('Voi', 'Siz (çoğul)', 'S', '2. çoğul.'), BD('siete', '...siniz', 'V', 'voi ile siete.')] } })
  ],
  [
    G('g1', 'Belirli Artikeller — il / lo / la / l\'', 'Definite Articles',
      'İtalyancada isimler eril veya dişildir. Belirli artikel (the): il (çoğu eril), lo (s+ünsüz, z, gn, ps, x ile başlayan eril), la (dişil), l\' (ünlü ile başlayan). Çoğulda: i, gli, le. Türkçede artikel yok — isimle birlikte ezberle: il tavolo (masa), la porta (kapı).',
      [
        { pronoun: 'Eril', form: 'il / lo', example: 'il libro, lo studente', tr: 'kitap, öğrenci' },
        { pronoun: 'Dişil', form: 'la', example: 'la donna, la porta', tr: 'kadın, kapı' },
        { pronoun: 'Ünlü', form: "l'", example: "l'amico, l'amica", tr: 'arkadaş' },
        { pronoun: 'Çoğul', form: 'i / gli / le', example: 'i libri, gli studenti, le donne', tr: 'kitaplar, öğrenciler, kadınlar' }
      ],
      'Sözlükte artikel ile ezberle: il cane (köpek), la gatta (dişi kedi).'),
    G('g2', 'Belirsiz Artikeller — un / uno / una', 'Indefinite Articles',
      'Belirsiz artikel "bir" anlamında: un (çoğu eril), uno (lo ile aynı kural), una (dişil). Çoğulda belirsiz artikel yok — sadece isim veya sayı: libri (kitaplar). Olumsuzda "non ho un ..." = ... yok.',
      [
        { pronoun: 'Eril', form: 'un / uno', example: 'un libro, uno studente', tr: 'bir kitap, bir öğrenci' },
        { pronoun: 'Dişil', form: 'una', example: 'una donna, una porta', tr: 'bir kadın, bir kapı' },
        { pronoun: 'Olumlu', form: 'È un/una ...', example: 'È un tavolo.', tr: 'Bu bir masa.' },
        { pronoun: 'Meslek', form: 'È un medico', example: 'È un medico.', tr: 'O bir doktor.' }
      ],
      'un + çoğu eril, uno + özel eril, una + dişil.'),
    G('g3', 'Fiil: essere (olmak) — Tüm Çekimler', 'Verb: essere (to be)',
      'essere = olmak. İtalyancanın en önemli fiili. Türkçedeki "-im, -sin, -dir" yapısının temeli. Düzensiz fiil — ezberle! Lei (resmi Siz) è alır — 3. tekil fiil kullanılır: Lei è italiano? (Siz İtalyan mısınız?). Loro = onlar → sono.',
      [
        { pronoun: 'io', form: 'sono', example: 'Io sono Ali.', tr: 'Ben Ali\'yim.' },
        { pronoun: 'tu', form: 'sei', example: 'Tu sei gentile.', tr: 'Sen naziksin.' },
        { pronoun: 'lui/lei/Lei', form: 'è', example: 'Lei è professoressa.', tr: 'Siz öğretmensiniz.' },
        { pronoun: 'noi', form: 'siamo', example: 'Noi siamo amici.', tr: 'Biz arkadaşız.' },
        { pronoun: 'voi', form: 'siete', example: 'Voi siete benvenuti.', tr: 'Hoş geldiniz.' },
        { pronoun: 'loro', form: 'sono', example: 'Loro sono italiani.', tr: 'Onlar İtalyan.' }
      ],
      'essere + sıfat/isim: Sono stanco (yorgunum). essere + meslek: Sono studente. Soru: Sei stanco? È lui?')
  ],
  [
    SP('sp1', 'Io sono Ali.', 'Ben Ali\'yim.', 'Kendini tanıt (essere)', { gramNote: 'io + sono — essere fiili 1. tekil.' }),
    SP('sp2', 'È un libro.', 'Bu bir kitap.', 'Belirsiz artikel kullan', { gramNote: 'È + un libro (eril).' }),
    SP('sp3', 'Il tavolo è grande.', 'Masa büyük.', 'il + isim + essere + sıfat'),
    SP('sp4', 'La donna è gentile.', 'Kadın nazik.', 'la + isim + essere + sıfat'),
    SP('sp5', 'Noi siamo amici.', 'Biz arkadaşız.', 'noi + siamo — essere çoğul')
  ],
  [
    DL('d1', 'Artikel Alıştırması', 'Article Practice', [
      LN('A', 'm', 'Cos\'è questo?', 'Bu ne?', 'Cos\'è = Bu nedir?',
        [BD('Cos\'è', 'Bu nedir', 'question', 'cosa + è kısaltması.')]),
      LN('B', 'f', 'È un tavolo.', 'Bu bir masa.', 'È un ... = Bu bir ...',
        [BD('È un tavolo', 'bir masa', 'O', 'tavolo eril → un.')]),
      LN('A', 'm', 'E quello?', 'Peki şu?', 'E = ve, peki.',
        [BD('E quello', 'Peki şu', 'question', 'Başka bir şeyi sor.')]),
      LN('B', 'f', 'È la porta.', 'Bu kapı.', 'porta dişil → la.',
        [BD('la porta', 'kapı', 'O', 'porta dişil → la belirli.')]),
      LN('A', 'm', 'Il tavolo è grande?', 'Masa büyük mü?', 'Soru — fiil sona veya başa.',
        [BD('È grande', 'büyük mü', 'V', 'Soru tonu veya ? ile.'), BD('il tavolo', 'masa', 'S', 'Eril özne.')]),
      LN('B', 'f', 'Sì, è grande.', 'Evet, büyük.', 'è = o (masa) büyük.',
        [BD('è grande', 'büyük', 'V', 'essere + sıfat.')])
    ]),
    DL('d2', 'Kendini Tanıtma', 'Self Introduction with essere', [
      LN('A', 'm', 'Io sono Ali. Sono studente.', 'Ben Ali. Öğrenciyim.', 'İki cümle — isim + meslek.',
        [BD('Io sono Ali', 'Ben Ali\'yim', 'V', 'essere + isim.'), BD('Sono studente', 'Öğrenciyim', 'V', 'essere + meslek — artikel yok.')]),
      LN('B', 'f', 'Bene! Io sono Maria. Sono insegnante.', 'Güzel! Ben Maria. Öğretmenim.',
        [BD('insegnante', 'öğretmen', 'O', 'Dişil/eril aynı form.'), BD('Sono insegnante', 'Öğretmenim', 'V', 'Meslek.')]),
      LN('A', 'm', 'Lei è insegnante anche?', 'Siz de öğretmen misiniz?', 'Resmi soru — Lei + è.',
        [BD('Lei è', 'Siz ... misiniz', 'V', 'Resmi soru.'), BD('anche', 'de / da', 'K', 'anche = de/da.')]),
      LN('B', 'f', 'Sì, sono insegnante. E tu? Sei studente?', 'Evet, öğretmenim. Ya sen? Öğrenci misin?',
        'tu\'ya geçiş — samimi ortam.',
        [BD('Sei studente', 'Öğrenci misin', 'V', 'tu ile sei — samimi soru.')]),
      LN('A', 'm', 'Sì, sono studente. Siamo nella lezione uno!', 'Evet, öğrenciyim. Birinci dersteyiz!',
        [BD('Siamo', 'Biz ...iz', 'V', 'noi + siamo.'), BD('nella lezione uno', 'birinci derste', 'K', 'in + la lezione.')])
    ])
  ],
  [
    LI('li1', 'È un uomo. L\'uomo è alto. La donna è gentile. Il bambino è piccolo.',
      'Bu bir adam. Adam uzun boylu. Kadın nazik. Çocuk küçük.',
      [Q('Quale articolo ha "uomo"?', ['la', 'lo', 'l\'', 'una'], 2, '"uomo" hangi artikel alır?'),
       Q('Come si dice "donna" in turco?', ['çocuk', 'kadın', 'masa', 'kapı'], 1, '"donna" Türkçede ne?'),
       Q('Com\'è il bambino?', ['alto', 'piccolo', 'gentile', 'aperto'], 1, 'Çocuk nasıl?')])
  ]
);

function numWords() {
  const nums = [
    ['uno', 'U-no', 'bir'], ['due', 'DU-e', 'iki'], ['tre', 'tre', 'üç'], ['quattro', 'KWAT-tro', 'dört'],
    ['cinque', 'CHIN-kwe', 'beş'], ['sei', 'say', 'altı'], ['sette', 'SET-te', 'yedi'], ['otto', 'OT-to', 'sekiz'],
    ['nove', 'NO-ve', 'dokuz'], ['dieci', 'DYE-chi', 'on'], ['undici', 'UN-di-chi', 'on bir'], ['dodici', 'DO-di-chi', 'on iki'],
    ['venti', 'VEN-ti', 'yirmi'], ['trenta', 'TREN-ta', 'otuz'], ['cento', 'CHEN-to', 'yüz'], ['mille', 'MIL-le', 'bin']
  ];
  return nums.map(([en, ro, tr], i) => W(`w${i + 1}`, en, ro, tr, i < 3 ? {
    tip: i === 0 ? 'Temel sayı.' : 'Sayma.',
    ctx: 'Sayılar ve miktar.',
    ex: { en: i === 0 ? 'Ho un libro.' : i === 1 ? 'Due caffè, per favore.' : `Ci sono ${en} gatti.`,
      tr: i === 0 ? 'Bir kitabım var.' : i === 1 ? 'İki kahve, lütfen.' : `${tr.charAt(0).toUpperCase() + tr.slice(1)} kedi var.`,
      bd: [BD(en, tr, 'number', `${en} = ${tr}`)] }
  } : {}));
}

const L3base = scenario('Numbers & Money',
    [
      ...numWords(),
      W('w17', 'Quanto costa?', 'KWAN-to KOS-ta', 'Ne kadar? / Bu ne kadar?',
        { tip: 'Fiyat sormak.', ctx: 'Alışverişte.',
          ex: { en: 'Quanto costa questo?', tr: 'Bu ne kadar?', bd: [BD('Quanto costa', 'Ne kadar', 'question', 'Fiyat sorusu.'), BD('questo', 'bu', 'O', 'Gösterilen nesne.')] } }),
      W('w18', 'euro', 'EU-ro', 'euro',
        { ex: { en: 'Costa cinque euro.', tr: 'Bu beş euro.', bd: [BD('cinque euro', 'beş euro', 'currency', 'İtalya para birimi Euro.')] } }),
      W('w19', 'centesimo', 'chen-TE-zi-mo', 'sent',
        { ex: { en: 'Costa novantanove centesimi.', tr: 'Bu doksan dokuz sent.', bd: [BD('centesimo', 'sent', 'currency', '1 Euro = 100 centesimi.')] } }),
      W('w20', 'il conto', 'il KON-to', 'hesap / fatura',
        { ex: { en: 'Il conto, per favore.', tr: 'Hesap, lütfen.', bd: [BD('il conto', 'hesap', 'O', 'Restoranda hesap isterken.')] } })
    ],
    [
      G('g1', 'İtalyanca Sayılar 1–20', 'Italian Numbers 1–20',
        'İtalyanca sayılar: 1–10 düzenli. 11–16 özel (undici, dodici...). 17–19: dici + sayı (diciassette = 17). 20+: onluk + birler (ventuno = 21, trentadue = 32). Dikkat: ventuno (bir eki düşer), ventidue.',
        [
          { pronoun: '1–10', form: 'uno ... dieci', example: 'uno, due, tre...', tr: 'bir ... on' },
          { pronoun: '11–16', form: 'undici ... sedici', example: 'undici, dodici', tr: 'on bir, on iki' },
          { pronoun: '17–19', form: 'dici + N', example: 'diciassette, diciotto', tr: 'on yedi, on sekiz' },
          { pronoun: 'Onluklar', form: '-nta', example: 'venti, trenta', tr: 'yirmi, otuz' }
        ],
        '21+: ventuno, trentadue — birler + onluk (Almancanın tersi!).'),
      G('g2', 'Para — Euro e centesimi', 'Money — Euro and Cents',
        'İtalya Euro (€) kullanır. Fiyat sormak: Quanto costa? / Quanto viene? Cevap: Costa ... euro (e ... centesimi). Virgül ondalık: 3,50 € = tre euro e cinquanta centesimi.',
        [
          { pronoun: 'Soru', form: 'Quanto costa...?', example: 'Quanto costa questo?', tr: 'Bu ne kadar?' },
          { pronoun: 'Cevap', form: 'Costa...', example: 'Costa dieci euro.', tr: 'Bu on euro.' },
          { pronoun: 'Hesap', form: 'Il conto, per favore', example: 'Il conto, per favore.', tr: 'Hesap, lütfen.' },
          { pronoun: 'Ödeme', form: 'Contanti / con carta', example: 'Posso pagare con carta?', tr: 'Kartla ödeyebilir miyim?' }
        ],
        'İtalya\'da nakit hâlâ yaygın. "Contanti o carta?" = Nakit mi kart mı?')
    ],
    [
      SP('sp1', 'Due caffè, per favore.', 'İki kahve, lütfen.', 'Sayı ile sipariş ver'),
      SP('sp2', 'Costa cinque euro.', 'Bu beş euro.', 'Fiyat söyle'),
      SP('sp3', 'Quanto costa questo?', 'Bu ne kadar?', 'Fiyat sor'),
      SP('sp4', 'Ho venti euro.', 'Yirmi eurom var.', 'Paranı söyle'),
      SP('sp5', 'Il conto, per favore.', 'Hesap, lütfen.', 'Hesap iste')
    ],
    [
      DL('d1', 'Al bar', 'At the Café', [
        LN('A', 'm', 'Due caffè, per favore.', 'İki kahve, lütfen.', 'Sayı + isim.',
          [BD('Due caffè', 'İki kahve', 'O', 'Sayı + isim — artikel düşer.')]),
        LN('B', 'f', 'Altro?', 'Başka bir şey?', 'Altro = başka.',
          [BD('Altro', 'Başka bir şey', 'question', 'Sipariş tamamlama.')]),
        LN('A', 'm', 'No, grazie. Quanto costa?', 'Hayır, teşekkürler. Ne kadar?',
          [BD('Quanto costa', 'Ne kadar', 'question', 'Fiyat sorusu.')]),
        LN('B', 'f', 'Sei euro e cinquanta.', 'Toplam altı euro elli.',
          [BD('Sei euro e cinquanta', '6,50 euro', 'currency', 'e = ve (ondalık).')]),
        LN('A', 'm', 'Ecco, grazie!', 'Buyurun. Teşekkürler!', 'Ecco = işte, buyurun.',
          [BD('Ecco', 'Buyurun / işte', 'K', 'Para verirken.')])
      ])
    ],
    [
      LI('li1', 'Il caffè costa tre euro. Il pane costa due euro e cinquanta. In totale sono cinque euro e cinquanta.',
        'Kahve üç euro. Ekmek iki euro elli. Toplam beş euro elli.',
        [Q('Quanto costa il caffè?', ['2 €', '3 €', '5 €', '6 €'], 1, 'Kahve ne kadar?'),
         Q('Quanto costa il pane?', ['2,50 €', '3 €', '5 €', '5,50 €'], 0, 'Ekmek ne kadar?'),
         Q('Quanto costa tutto?', ['3 €', '5,05 €', '5,50 €', '6 €'], 2, 'Toplam ne kadar?')])
    ]
  );

const L3 = { ...L3base, numbers: IT_NUMBERS, compounds: IT_COMPOUNDS };

// ─── Lessons 4–20: Scenario topics ───────────────────────────
const L4 = scenario('Time & Date',
  mkScenarioWords([
    ['w1', 'Che ore sono?', 'vee shpayt ist es', 'Saat kaç?', { tip: 'Saat sormak.', ex: { en: 'Scusi, che ore sono?', tr: 'Pardon, saat kaç?', bd: [BD('Wie spät ist es', 'Saat kaç', 'question', 'Resmi ortamda Scusi ekle.')] } }],
    ['w2', 'Sono le tre', 'es ist dray ur', 'Saat üç', { ex: { en: 'Sono le tre.', tr: 'Saat üç.', bd: [BD('Es ist', 'Saat ...', 'V', 'Es = nötr zamir. Uhr = saat.')] } }],
    ['w3', 'la mattina', 'der MOR-gen', 'sabah'],
    ['w4', 'il pomeriggio', 'der NAKH-mi-tak', 'öğleden sonra'],
    ['w5', 'la sera', 'der A-bent', 'akşam'],
    ['w6', 'la notte', 'dee NAKHT', 'gece'],
    ['w7', 'oggi', 'HOY-te', 'bugün'],
    ['w8', 'domani', 'MOR-gen', 'yarın'],
    ['w9', 'ieri', 'GES-tern', 'dün'],
    ['w10', 'lunedì', 'MON-tak', 'Pazartesi'],
    ['w11', 'martedì', 'DEENS-tak', 'Salı'],
    ['w12', 'mercoledì', 'MIT-vokh', 'Çarşamba'],
    ['w13', 'giovedì', 'DO-ner-stak', 'Perşembe'],
    ['w14', 'venerdì', 'FRAY-tak', 'Cuma'],
    ['w15', 'sabato', 'ZAMS-tak', 'Cumartesi'],
    ['w16', 'domenica', 'ZON-tak', 'Pazar'],
    ['w17', 'gennaio', 'der YAN-oo-ar', 'Ocak'],
    ['w18', 'luglio', 'der YOO-lee', 'Temmuz'],
    ['w19', 'Quando?', 'van', 'Ne zaman?'],
    ['w20', 'Um wie viel Uhr?', 'um vee feel ur', 'Saat kaçta?']
  ]),
  [G('g1', 'Saat Sorma ve Söyleme', 'Telling Time',
    'İtalyancada saat: Es ist ... Uhr. 15:00 = Es ist fünfzehn Uhr (resmi) veya Sono le tre (gündüz). Viertel nach = çeyrek geçe, halb = buçuk.',
    [{ pronoun: 'Tam saat', form: 'Es ist ... Uhr', example: 'Sono le tre.', tr: 'Saat üç.' },
     { pronoun: 'Buçuk', form: 'halb ...', example: 'Es ist halb vier.', tr: 'Saat üç buçuk.' },
     { pronoun: 'Soru', form: 'Che ore sono?', example: 'Che ore sono?', tr: 'Saat kaç?' },
     { pronoun: 'Randevu', form: 'Um ... Uhr', example: 'Um acht Uhr.', tr: 'Saat sekizde.' }],
    'halb vier = 3:30 (İtalyancada yarım dördüncü saate gidilir — Türkçeden farklı!)'),
   G('g2', 'Günler ve Aylar', 'Days and Months',
    'Günler ve aylar büyük harfle yazılır. am lunedì = pazartesi günü. im Januar = ocak ayında. Quando? = ne zaman?',
    [{ pronoun: 'Günler', form: 'lunedì ... domenica', example: 'Am lunedì.', tr: 'Pazartesi günü.' },
     { pronoun: 'Aylar', form: 'Januar ... Dezember', example: 'Im Juli.', tr: 'Temmuz\'da.' },
     { pronoun: 'Bugün', form: 'oggi / domani / ieri', example: 'Heute ist venerdì.', tr: 'Bugün cuma.' },
     { pronoun: 'Soru', form: 'Quando?', example: 'Wann beginnt der Kurs?', tr: 'Kurs ne zaman başlıyor?' }],
    'am + gün, im + ay, um + saat — edatları ezberle.')],
  [SP('sp1', 'Che ore sono?', 'Saat kaç?', 'Saat sor'),
   SP('sp2', 'Sono le dieci.', 'Saat on.', 'Saati söyle'),
   SP('sp3', 'Oggi è lunedì.', 'Bugün pazartesi.', 'Bugünün gününü söyle'),
   SP('sp4', 'Domani ho tempo.', 'Yarın vaktim var.', 'Yarın hakkında konuş'),
   SP('sp5', 'Alle nove, per favore.', 'Saat dokuzda, lütfen.', 'Randevu saati belirt')],
  [DL('d1', 'Termin vereinbaren', 'Making an Appointment', [
    LN('A', 'm', 'Quando ha tempo?', 'Ne zaman müsait siniz?', 'Resmi randevu sorusu.',
      [BD('Wann', 'Ne zaman', 'question', 'Zaman sorusu.'), BD('avere Sie Zeit', 'müsait misiniz', 'V', 'Zeit avere = vakti olmak.')]),
    LN('B', 'f', 'Martedì alle dieci?', 'Salı saat onda?', 'Öneri — am + gün, um + saat.',
      [BD('Am martedì', 'Salı günü', 'K', 'am + gün.'), BD('um zehn Uhr', 'saat onda', 'K', 'um + saat.')]),
    LN('A', 'm', 'Sì, va bene. A martedì!', 'Evet, uyar. Salıya kadar!', 'Das passt = uyar, olur.',
      [BD('Das passt', 'Uyar / olur', 'V', 'Günlük kabul ifadesi.')]),
    LN('B', 'f', 'A martedì. Arrivederci!', 'Salıya kadar. Hoşça kalın!', 'Bis = ...e kadar.',
      [BD('Bis martedì', 'Salıya kadar', 'farewell', 'Bis + zaman = ...e kadar.')])
  ])],
  [LI('li1', 'Oggi è mercoledì, der fünfzehnte März. Der Unterricht beginnt um nuovon Uhr und endet um elf Uhr.',
    'Bugün çarşamba, 15 Mart. Ders saat dokuzda başlıyor ve saat on birde bitiyor.',
    [Q('Welcher Tag ist oggi?', ['lunedì', 'martedì', 'mercoledì', 'venerdì'], 2, 'Bugün hangi gün?'),
     Q('Wann beginnt der Unterricht?', ['8 Uhr', '9 Uhr', '10 Uhr', '11 Uhr'], 1, 'Ders ne zaman başlıyor?'),
     Q('Wann endet der Unterricht?', ['9 Uhr', '10 Uhr', '11 Uhr', '12 Uhr'], 2, 'Ders ne zaman bitiyor?')])]
);

const L5 = scenario('Restaurant & Food',
  mkScenarioWords([
    ['w1', 'Un tavolo per due, per favore.', 'AY-nen tish führ tsvay, bit-te', 'İki kişilik masa, lütfen.', { tip: 'Masa isteme.', ex: { en: 'Guten Abend. Un tavolo per due, per favore.', tr: 'İyi akşamlar. İki kişilik masa, lütfen.', bd: [BD('Einen Tisch', 'bir masa (aküsatif)', 'O', 'Maskulin aküsatif: den → einen.')] } }],
    ['w2', 'il menu', 'dee SHPY-ze-kar-te', 'menü'],
    ['w3', 'ordinare', 'be-SHTEL-len', 'sipariş vermek'],
    ['w4', 'Vorrei...', 'ikh HET-te gern', '... alabilir miyim / ... istiyorum', { tip: 'Nazik sipariş.', ex: { en: 'Vorrei un caffè.', tr: 'Bir kahve istiyorum.', bd: [BD('Ich hätte gern', 'İstiyorum', 'modal', 'Restoranda nazik sipariş kalıbı.')] } }],
    ['w5', 'l\'antipasto', 'dee FOR-shpy-ze', 'başlangıç yemeği'],
    ['w6', 'il piatto principale', 'das HAUPT-ge-rikht', 'ana yemek'],
    ['w7', 'il dolce', 'der NAKH-tish', 'tatlı'],
    ['w8', 'la bevanda', 'das ge-TRENK', 'içecek'],
    ['w9', 'l\'acqua', 'das VAS-ser', 'su'],
    ['w10', 'il caffè', 'der ka-FE', 'kahve'],
    ['w11', 'il tè', 'der tay', 'çay'],
    ['w12', 'il succo', 'der zaft', 'meyve suyu'],
    ['w13', 'il pane', 'das brosso', 'ekmek'],
    ['w14', 'la zuppa', 'dee ZU-pe', 'çorba'],
    ['w15', 'l\'insalata', 'der za-LAT', 'salata'],
    ['w16', 'das Hähnchen', 'das HEN-khen', 'tavuk'],
    ['w17', 'das Rindfleisch', 'das RINT-flysh', 'sığır eti'],
    ['w18', 'il pesce', 'der fish', 'balık'],
    ['w19', 'vegetariano', 've-ge-TA-rish', 'vejetaryen'],
    ['w20', 'delizioso', 'LE-ker', 'lezzetli'],
    ['w21', 'il conto', 'dee REKH-nung', 'hesap'],
    ['w22', 'das Trinkgeld', 'das TRINK-gelt', 'bahşiş'],
    ['w23', 'la prenotazione', 'dee re-zer-vee-RUNG', 'rezervasyon'],
    ['w24', 'allergisch', 'a-LER-gish', 'alerjik'],
    ['w25', 'Buon appetito!', 'GU-ten a-pe-TEET', 'Afiyet olsun']
  ]),
  [G('g1', 'Restoranda Sipariş Verme', 'Ordering at a Restaurant',
    'İtalya\'da garsona el kaldırılır veya göz teması kurulur. Vorrei... = nazik sipariş. Noch etwas? = Başka bir şey? Die Rechnung, bitte = Hesap lütfen.',
    [{ pronoun: 'Nazik istek', form: 'Vorrei...', example: 'Ich hätte gern la zuppa.', tr: 'Çorba istiyorum.' },
     { pronoun: 'Soru', form: 'Cosa consiglia?', example: 'Cosa consiglia?', tr: 'Ne tavsiye edersiniz?' },
     { pronoun: 'Hesap', form: 'Die Rechnung, bitte', example: 'Il conto, per favore.', tr: 'Hesap, lütfen.' },
     { pronoun: 'Özel istek', form: 'Ohne... / Mit...', example: 'Senza cipolle, per favore.', tr: 'Soğansız, lütfen.' }],
    'Trinkgeld (bahşiş) zorunlu değil ama %5-10 bırakılır.')],
  [SP('sp1', 'Un tavolo per tre, per favore.', 'Üç kişilik masa, lütfen.', 'Masa iste'),
   SP('sp2', 'Vorrei la zuppa, per favore.', 'Çorba istiyorum, lütfen.', 'Yemek sipariş et'),
   SP('sp3', 'Il conto, per favore.', 'Hesap, lütfen.', 'Hesap iste'),
   SP('sp4', 'È buonissimo!', 'Bu çok lezzetli!', 'Yemeği öv'),
   SP('sp5', 'Sono allergico alle noci.', 'Kuruyemişe alerjim var.', 'Alerji belirt')],
  [DL('d1', 'Im Restaurant', 'At the Restaurant', [
    LN('A', 'f', 'Buonasera! Ha prenotato?', 'İyi akşamlar! Rezervasyonunuz var mı?', 'Resmi karşılama.',
      [BD('Haben Sie reserviert', 'Rezervasyon var mı', 'question', 'Resmi soru.')]),
    LN('B', 'm', 'Ja, auf den Namen Ali. Für zwei Personen.', 'Evet, Ali adına. İki kişilik.',
      [BD('auf den Namen', 'adına', 'K', 'auf + aküsatif — adına.')]),
    LN('A', 'f', 'Bitte bello, hier ist Ihr Tisch. Die Speisekarte.', 'Buyurun, masanız burada. Menü.',
      [BD('Speisekarte', 'menü', 'O', 'Feminin → die.')]),
    LN('B', 'm', 'Danke. Ich hätte gern das Hähnchen und einen Salat.', 'Teşekkürler. Tavuk ve salata istiyorum.',
      [BD('Ich hätte gern', 'İstiyorum', 'modal', 'Nazik sipariş.')]),
    LN('A', 'f', 'Möchten Sie etwas trinken?', 'Bir şey içmek ister misiniz?', 'Möchten = istemek (nazik).',
      [BD('Möchten Sie', 'İster misiniz', 'modal', 'Resmi nazik istek.')]),
    LN('B', 'm', 'Ja, ein Wasser und einen Kaffee, bitte.', 'Evet, bir su ve bir kahve, lütfen.',
      [BD('ein Wasser', 'bir su', 'O', 'Neutrum → ein.'), BD('einen Kaffee', 'bir kahve', 'O', 'Maskulin aküsatif → einen.')])
  ])],
  [LI('li1', 'Heute gibt es Lachs mit Gemüse für vierzehn Euro und vegetarianoe Pasta für zehn Euro. Als Nachtisch gibt es Schokoladenkuchen für fünf Euro.',
    'Bugün somon sebze ile on dört euro, vejetaryen makarna on euro. Tatlı olarak çikolatalı kek beş euro.',
    [Q('Wie viel kostet der Lachs?', ['10 €', '12 €', '14 €', '16 €'], 2, 'Somon ne kadar?'),
     Q('Welche vegetarianoe Option gibt es?', ['Suppe', 'Salat', 'Pasta', 'Pizza'], 2, 'Hangi vejetaryen seçenek var?'),
     Q('Was ist il dolce?', ['Eis', 'Käsekuchen', 'Apfelkuchen', 'Schokoladenkuchen'], 3, 'Tatlı ne?')])]
);

const L6 = scenario('Shopping',
  mkScenarioWords([
    ['w1', 'Dove trovo...?', 'vo FIN-de ikh', '... nerede bulabilirim?'],
    ['w2', 'Quanto costa?', 'vee feel KOS-tet das', 'Bu ne kadar?'],
    ['w3', 'troppo caro', 'tsu TOY-er', 'çok pahalı'],
    ['w4', 'economico', 'BIL-likh', 'ucuz'],
    ['w5', 'lo sconto', 'der ra-BAT', 'indirim'],
    ['w6', 'la taglia', 'dee GRÖ-se', 'beden'],
    ['w7', 'il colore', 'dee FAR-be', 'renk'],
    ['w8', 'provare', 'AN-pro-bee-ren', 'denemek (giysi)'],
    ['w9', 'die Umkleidekabine', 'dee UM-kly-de-ka-BEE-ne', 'deneme kabini'],
    ['w10', 'andare bene', 'PAS-sen', 'uymak / olmak (beden)'],
    ['w11', 'comprare', 'KAU-fen', 'satın almak'],
    ['w12', 'pagare', 'be-TSA-len', 'ödemek'],
    ['w13', 'die Quittung', 'dee kvi-TUNG', 'fiş'],
    ['w14', 'umtauschen', 'UM-taush-en', 'değiştirmek (iade)'],
    ['w15', 'das Sonderangebot', 'das ZON-der-an-ge-bot', 'özel teklif / indirim']
  ]),
  [G('g1', 'Alışverişte Faydalı İfadeler', 'Useful Shopping Phrases',
    'Mağazada: Guten Tag ile başla. Quanto costa? = fiyat sor. Posso provarlo? = deneyebilir miyim? Das ist troppo caro = çok pahalı.',
    [{ pronoun: 'Fiyat', form: 'Wie viel kostet...?', example: 'Wie viel kostet die Jacke?', tr: 'Ceket ne kadar?' },
     { pronoun: 'Deneme', form: 'Kann ich provare?', example: 'Posso provarlo?', tr: 'Deneyebilir miyim?' },
     { pronoun: 'Beden', form: 'Haben Sie Größe M?', example: 'Haben Sie das in Größe L?', tr: 'L beden var mı?' },
     { pronoun: 'Ödeme', form: 'Wo kann ich pagare?', example: 'Wo kann ich pagare?', tr: 'Nerede ödeyebilirim?' }],
    'domenicas çoğu mağaza kapalı — İtalya\'da dinlenme günü.')],
  [G('g2', 'Satın Alma', 'Making a Purchase',
    'İtalyancada satın alma: Ich nehme das = Bunu alıyorum. Kann ich mit Karte zahlen? = Kartla ödeyebilir miyim? Haben Sie das in ...? = ... var mı?',
    [{ pronoun: 'Satın alma', form: 'Ich nehme...', example: 'Ich nehme die blue Jacke.', tr: 'Mavi ceketi alıyorum.' },
     { pronoun: 'Ödeme', form: 'Bar oder mit Karte?', example: 'Kann ich mit Karte zahlen?', tr: 'Kartla ödeyebilir miyim?' },
     { pronoun: 'Fiş', form: 'Kann ich eine Quittung avere?', example: 'Kann ich eine Quittung avere?', tr: 'Fiş alabilir miyim?' },
     { pronoun: 'İade', form: 'Kann ich das umtauschen?', example: 'Kann ich das umtauschen?', tr: 'Bunu değiştirebilir miyim?' }],
    'Kassenbon = fiş. Umtauschrecht = değişim hakkı (genelde 14 gün).')],
  [SP('sp1', 'Quanto costa?', 'Bu ne kadar?', 'Fiyat sor'),
   SP('sp2', 'È troppo caro.', 'Bu çok pahalı.', 'Pahalı de'),
   SP('sp3', 'Posso provarlo?', 'Bunu deneyebilir miyim?', 'Deneme iste'),
   SP('sp4', 'Mi sta bene.', 'Bu bana uyuyor.', 'Beden uygun de'),
   SP('sp5', 'Lo prendo.', 'Bunu alıyorum.', 'Satın al')],
  [DL('d1', 'Im Geschäft', 'In the Shop', [
    LN('A', 'f', 'Buongiorno! Kann ich Ihnen aiutare?', 'İyi günler! Yardımcı olabilir miyim?', 'Satış elemanı karşılama.',
      [BD('Kann ich aiutare', 'Yardım edebilir miyim', 'modal', 'Mağaza standart sorusu.')]),
    LN('B', 'm', 'Ja, ich suche eine Jacke.', 'Evet, ceket arıyorum.', 'suchen = aramak.',
      [BD('ich suche', 'arıyorum', 'V', 'suchen + aküsatif.')]),
    LN('A', 'f', 'Welche Größe brauchen Sie?', 'Hangi beden lazım?', 'brauchen = ihtiyaç duymak.',
      [BD('Welche Größe', 'Hangi beden', 'question', 'Welche = hangi (dişil).')]),
    LN('B', 'm', 'Größe M, bitte. Kann ich die provare?', 'M beden, lütfen. Deneyebilir miyim?',
      [BD('provare', 'denemek', 'V', 'Giysi denemek.')]),
    LN('A', 'f', 'Certo. Die Umkleidekabine ist dort.', 'Tabii. Deneme kabini orada.',
      [BD('Umkleidekabine', 'deneme kabini', 'O', 'Feminin → die.')]),
    LN('B', 'm', 'Die passt! Wie viel kostet sie?', 'Bu uydu! Ne kadar?', 'Feminin zamir: sie = die Jacke.',
      [BD('sie', 'o (dişil)', 'S', 'Dişil isimler sie zamir alır.')])
  ])],
  [LI('li1', 'Die Jacke kostet nuovonundnuovonzig Euro. Heute gibt es zwanzig Prozent Rabatt. Also kostet sie nuovonundsiebzig Euro.',
    'Ceket doksan dokuz euro. Bugün yüzde yirmi indirim var. Yani yetmiş dokuz euro.',
    [Q('Wie viel kostet die Jacke normal?', ['79 €', '89 €', '99 €', '119 €'], 2, 'Ceket normal fiyatı ne?'),
     Q('Wie viel Prozent Rabatt gibt es?', ['10%', '15%', '20%', '30%'], 2, 'Yüzde kaç indirim?'),
     Q('Wie viel kostet die Jacke mit Rabatt?', ['69 €', '79 €', '89 €', '99 €'], 1, 'İndirimli fiyat ne?')])]
);

const L7 = scenario('Directions',
  mkScenarioWords([
    ['w1', 'Dov\'è...?', 'vo ist', '... nerede?'],
    ['w2', 'a sinistra', 'a sinistra', 'sol'],
    ['w3', 'a destra', 'rekhts', 'sağ'],
    ['w4', 'dritto', 'ge-RA-de-aus', 'düz / ileri'],
    ['w5', 'die Ecke', 'dee E-ke', 'köşe'],
    ['w6', 'la strada', 'dee SHTra-se', 'cadde / sokak'],
    ['w7', 'la stazione', 'der BAHN-hof', 'tren istasyonu'],
    ['w8', 'die Haltestelle', 'dee HAL-te-shtel-le', 'durak'],
    ['w9', 'die Ampel', 'dee AM-pel', 'trafik lambası'],
    ['w10', 'überqueren', 'ü-ber-KVAY-ren', 'karşıdan karşıya geçmek'],
    ['w11', 'die Kreuzung', 'dee KROY-tsung', 'kavşak'],
    ['w12', 'in der Nähe', 'in der NEE-e', 'yakında']
  ]),
  [G('g1', 'Yön Tarifi Verme', 'Giving Directions',
    'Temel yönler: a sinistra (sol), a destra (sağ), dritto (düz). Gehen Sie... = ... gidin (resmi emir). An der Ecke = köşede. Die erste Straße = ilk sokak.',
    [{ pronoun: 'Yönler', form: 'a sinistra / a destra / dritto', example: 'Vada dritto.', tr: 'Düz gidin.' },
     { pronoun: 'Konum', form: 'in der Nähe / weit weg', example: 'È vicino.', tr: 'Yakında.' },
     { pronoun: 'Soru', form: 'Dov\'è...? / Wie komme ich...?', example: 'Dov\'è la stazione?', tr: 'Tren istasyonu nerede?' },
     { pronoun: 'Mesafe', form: 'ca. / ungefähr', example: 'Es ist ca. fünf Minuten.', tr: 'Yaklaşık beş dakika.' }],
    'İtalya\'da yaya geçitlerine dikkat — kırmızıda geçme!')],
  [SP('sp1', 'Dov\'è la stazione?', 'Tren istasyonu nerede?', 'Yer sor'),
   SP('sp2', 'Vada dritto.', 'Düz gidin.', 'Yön tarif et'),
   SP('sp3', 'Poi a sinistra.', 'Sonra sola.', 'Yön ekle'),
   SP('sp4', 'È vicino.', 'Yakında.', 'Mesafe belirt'),
   SP('sp5', 'Danke für die Hilfe!', 'Yardım için teşekkürler!', 'Teşekkür et')],
  [DL('d1', 'Nach dem Weg chiedere', 'Asking for Directions', [
    LN('A', 'm', 'Scusi, dov\'è la stazione?', 'Pardon, tren istasyonu nerede?', 'Yol sorma — Scusi ile başla.',
      [BD('Scusi', 'Pardon', 'courtesy', 'Yabancıya yaklaşırken.'), BD('wo ist', 'nerede', 'question', 'Wo + ist + isim.')]),
    LN('B', 'f', 'Vada dritto, poi a sinistra.', 'Düz gidin, sonra sola.', 'dann = sonra.',
      [BD('dritto', 'düz', 'direction', 'İleri git.'), BD('dann a sinistra', 'sonra sol', 'direction', 'Sıralı yön.')]),
    LN('A', 'm', 'An der Ampel?', 'Trafik lambasında mı?', 'Onay sorma.',
      [BD('An der Ampel', 'Trafik lambasında', 'K', 'an + dativ — ...de/-da.')]),
    LN('B', 'f', 'Ja, an der Ampel a destra. Dann vedere Sie den Bahnhof.', 'Evet, trafik lambasında sağa. Sonra istasyonu görürsünüz.',
      [BD('vedere Sie', 'görürsünüz', 'V', 'Resmi emir / tavsiye.')])
  ])],
  [LI('li1', 'Gehen Sie dritto bis zur Kreuzung. Poi a sinistra. Der Bahnhof ist in fünf Minuten zu Fuß.',
    'Kavşağa kadar düz gidin. Sonra sola. Tren istasyonu yürüyerek beş dakika.',
    [Q('Was macht man an der Kreuzung?', ['a destra', 'a sinistra', 'zurück', 'stehen'], 1, 'Kavşakta ne yapılır?'),
     Q('Wie lange braucht man zu Fuß?', ['3 Min.', '5 Min.', '10 Min.', '15 Min.'], 1, 'Yürüyerek ne kadar sürer?'),
     Q('Wohin geht man zuerst?', ['a sinistra', 'a destra', 'dritto', 'zurück'], 2, 'Önce nereye gidilir?')])]
);

const L8 = scenario('Transport & Travel',
  mkScenarioWords([
    ['w1', 'il treno', 'der tsuk', 'tren'],
    ['w2', 'l\'autobus', 'der bus', 'otobüs'],
    ['w3', 'la metropolitana', 'dee U-bahn', 'metro'],
    ['w4', 'l\'aereo', 'das FLUK-tsayk', 'uçak'],
    ['w5', 'l\'aeroporto', 'der FLUKH-ha-fen', 'havaalanı'],
    ['w6', 'il biglietto', 'dee FAR-kar-te', 'bilet'],
    ['w7', 'einsteigen', 'AYN-shty-gen', 'binmek (araç)'],
    ['w8', 'aussteigen', 'AUS-shty-gen', 'inmek (araç)'],
    ['w9', 'umsteigen', 'UM-shty-gen', 'aktarma yapmak'],
    ['w10', 'der Gleis', 'der glys', 'peron'],
    ['w11', 'abfahren', 'AP-fah-ren', 'kalkmak (araç)'],
    ['w12', 'anvenire', 'AN-ko-men', 'varmak']
  ]),
  [G('g1', 'Toplu Taşıma', 'Public Transport',
    'İtalya\'da U-Bahn (metro), S-Bahn (banliyö), Bus, Tram. Fahrkarte = bilet. Einsteigen/Aussteigen = binmek/inmek. Bitte entwerten! = Bileti damgalayın!',
    [{ pronoun: 'Bilet', form: 'il biglietto', example: 'Eine Fahrkarte, bitte.', tr: 'Bir bilet, lütfen.' },
     { pronoun: 'Peron', form: 'Gleis ...', example: 'Der Zug fährt von Gleis 3.', tr: 'Tren 3. perondan kalkıyor.' },
     { pronoun: 'Aktarma', form: 'umsteigen', example: 'In Berlin umsteigen.', tr: 'Berlin\'de aktarma yap.' },
     { pronoun: 'Gecikme', form: 'Verspätung', example: 'Der Zug hat Verspätung.', tr: 'Tren gecikmeli.' }],
    'Deutsche Bahn (DB) = tren şirketi. BVG/MVV = şehir içi ulaşım.')],
  [SP('sp1', 'Un biglietto per Roma, per favore.', 'Berlin\'e bir bilet, lütfen.', 'Bilet al'),
   SP('sp2', 'Wo muss ich umsteigen?', 'Nerede aktarma yapmalıyım?', 'Aktarma sor'),
   SP('sp3', 'Der Zug fährt von Gleis 5.', 'Tren 5. perondan kalkıyor.', 'Peron söyle'),
   SP('sp4', 'Wann kommt der nächste Bus?', 'Sonraki otobüs ne zaman geliyor?', 'Otobüs saati sor'),
   SP('sp5', 'Ich steige hier aus.', 'Burada iniyorum.', 'İneceğini söyle')],
  [DL('d1', 'Am Bahnhof', 'At the Train Station', [
    LN('A', 'm', 'Un biglietto per Milano, per favore.', 'Münih\'e bir bilet, lütfen.', 'Bilet alma.',
      [BD('nach München', 'Münih\'e', 'K', 'nach + şehir = ...e/-a.')]),
    LN('B', 'f', 'Einfach oder hin und zurück?', 'Tek yön mü gidiş-dönüş mü?', 'Bilet türü sorusu.',
      [BD('hin und zurück', 'gidiş-dönüş', 'K', 'Standart bilet sorusu.')]),
    LN('A', 'm', 'Hin und zurück, bitte.', 'Gidiş-dönüş, lütfen.', 'Cevap.',
      [BD('Hin und zurück', 'Gidiş-dönüş', 'O', 'Bilet türü.')]),
    LN('B', 'f', 'Das macht achtzig Euro. Gleis 7, Abfahrt um zehn Uhr.', 'Seksen euro. 7. peron, kalkış saat on.',
      [BD('Gleis 7', '7. peron', 'O', 'Gleis = peron.'), BD('Abfahrt', 'kalkış', 'O', 'abfahren = kalkmak.')])
  ])],
  [LI('li1', 'Der ICE nach Berlin fährt um vierzehn Uhr dreißig von Gleis 8 ab. Die Fahrt dauert vier Stunden.',
    'Berlin ICE\'si saat 14:30\'da 8. perondan kalkıyor. Yolculuk dört saat sürüyor.',
    [Q('Wohin fährt il treno?', ['München', 'Hamburg', 'Berlin', 'Köln'], 2, 'Tren nereye gidiyor?'),
     Q('Von welchem Gleis?', ['5', '7', '8', '10'], 2, 'Hangi perondan?'),
     Q('Wie lange dauert die Fahrt?', ['2 Std.', '3 Std.', '4 Std.', '5 Std.'], 2, 'Yolculuk ne kadar sürer?')])]
);

const L9 = scenario('Hotel & Accommodation',
  mkScenarioWords([
    ['w1', 'l\'hotel', 'das ho-TEL', 'otel'],
    ['w2', 'die Rezeption', 'dee re-tsep-TSI-ON', 'resepsiyon'],
    ['w3', 'la camera', 'das TSI-mer', 'oda'],
    ['w4', 'einchecken', 'AYN-shek-en', 'giriş yapmak (otel)'],
    ['w5', 'auschecken', 'AUS-shek-en', 'çıkış yapmak'],
    ['w6', 'der Schlüssel', 'der SHLÜ-sel', 'anahtar'],
    ['w7', 'das Einzelzsempre', 'das AYN-tsel-tsi-mer', 'tek kişilik oda'],
    ['w8', 'das Doppelzsempre', 'das DO-pel-tsi-mer', 'çift kişilik oda'],
    ['w9', 'la colazione', 'FRÜ-shtük', 'kahvaltı'],
    ['w10', 'WLAN / WiFi', 'vee-fee', 'kablosuz internet'],
    ['w11', 'die Klimaanlage', 'dee KLEE-ma-an-la-ge', 'klima'],
    ['w12', 'die Buchung', 'dee BUKH-ung', 'rezervasyon']
  ]),
  [G('g1', 'Otelde Check-in', 'Hotel Check-in',
    'Ich habe eine Buchung = Rezervasyonum var. Unter dem Namen... = ... adına. la colazione inbegriffen? = Kahvaltı dahil mi? Spätestens um 11 Uhr auschecken.',
    [{ pronoun: 'Rezervasyon', form: 'Ich habe eine Buchung', example: 'Ich habe eine Buchung auf Ali.', tr: 'Ali adına rezervasyonum var.' },
     { pronoun: 'Oda', form: 'Ein Doppelzsempre', example: 'Ein Doppelzsempre, bitte.', tr: 'Çift kişilik oda, lütfen.' },
     { pronoun: 'Kahvaltı', form: 'Ist la colazione dabei?', example: 'Ist la colazione inbegriffen?', tr: 'Kahvaltı dahil mi?' },
     { pronoun: 'Çıkış', form: 'Wann muss ich auschecken?', example: 'Bis wann kann ich auschecken?', tr: 'En geç ne zaman çıkış yapmalıyım?' }],
    'İtalya\'da otellerde genelde temizlik ve düzen önemlidir.')],
  [SP('sp1', 'Ho una prenotazione.', 'Rezervasyonum var.', 'Check-in yap'),
   SP('sp2', 'Ein Einzelzsempre, bitte.', 'Tek kişilik oda, lütfen.', 'Oda iste'),
   SP('sp3', 'Wo ist das la colazione?', 'Kahvaltı nerede?', 'Kahvaltı sor'),
   SP('sp4', 'Kann ich auschecken?', 'Çıkış yapabilir miyim?', 'Check-out yap'),
   SP('sp5', 'Das Zsempre ist sehr bello.', 'Oda çok güzel.', 'Odayı öv')],
  [DL('d1', 'Hotel Check-in', 'Hotel Check-in', [
    LN('A', 'f', 'Buonasera! Benvenuto in hotel.', 'İyi akşamlar! Otele hoş geldiniz.', 'Resepsiyon karşılama.',
      [BD('Willvenire', 'Hoş geldiniz', 'greeting', 'Otel karşılama.')]),
    LN('B', 'm', 'Guten Abend. Ich habe eine Buchung auf den Namen Ali.', 'İyi akşamlar. Ali adına rezervasyonum var.',
      [BD('Buchung auf den Namen', 'adına rezervasyon', 'O', 'auf + aküsatif — adına.')]),
    LN('A', 'f', 'Ja, ein Einzelzsempre für zwei Nächte. la colazione ist inbegriffen.', 'Evet, iki gece tek kişilik oda. Kahvaltı dahil.',
      [BD('inbegriffen', 'dahil', 'adj', 'Fiyata dahil.')]),
    LN('B', 'm', 'Perfekt. Gibt es WLAN?', 'Mükemmel. WiFi var mı?', 'Gibt es = var mı.',
      [BD('Gibt es', 'Var mı', 'question', 'Es gibt = var (genel).')]),
    LN('A', 'f', 'Ja, das Passwort steht auf dem Zettel. Hier ist Ihr Schlüssel. Zsempre 305.', 'Evet, şifre kağıtta. Anahtarınız burada. Oda 305.',
      [BD('Schlüssel', 'anahtar', 'O', 'Maskulin → der.')])
  ])],
  [LI('li1', 'Ali hat ein Einzelzsempre für drei Nächte gebucht. la colazione ist von sieben bis zehn Uhr. Auschecken bis elf Uhr.',
    'Ali üç gece tek kişilik oda ayırttı. Kahvaltı yedi ile on arası. Çıkış on bire kadar.',
    [Q('Wie viele Nächte?', ['1', '2', '3', '4'], 2, 'Kaç gece?'),
     Q('Wann ist la colazione?', ['6–9', '7–10', '8–11', '9–12'], 1, 'Kahvaltı ne zaman?'),
     Q('Bis wann auschecken?', ['10 Uhr', '11 Uhr', '12 Uhr', '13 Uhr'], 1, 'En geç ne zaman çıkış?')])]
);

const L10 = scenario('Work & Business',
  mkScenarioWords([
    ['w1', 'il lavoro', 'dee AR-bayt', 'iş / çalışma'],
    ['w2', 'la professione', 'der be-ROOF', 'meslek'],
    ['w3', 'der Kollege / die Kollegin', 'der ko-LAY-ge / dee ko-LAY-gin', 'iş arkadaşı'],
    ['w4', 'der Chef / die Chefin', 'der shef / dee she-fin', 'patron'],
    ['w5', 'l\'ufficio', 'das BÜ-ro', 'ofis'],
    ['w6', 'die Besprechung', 'dee be-SHPRE-khung', 'toplantı'],
    ['w7', 'der Vertrag', 'der fer-TRAK', 'sözleşme'],
    ['w8', 'der Gehalt', 'der ge-HALT', 'maaş'],
    ['w9', 'die Bewerbung', 'dee be-VER-bung', 'iş başvurusu'],
    ['w10', 'das Vorstellungsgespräch', 'das FOR-shtel-lungs-ge-shprekh', 'iş görüşmesi'],
    ['w11', 'Vollzeit / Teilzeit', 'fol-tsayt / TAYL-tsayt', 'tam zamanlı / yarı zamanlı'],
    ['w12', 'der Feierabend', 'der FAY-er-a-bent', 'iş çıkışı / mesai sonu']
  ]),
  [G('g1', 'İş Hayatında Temel İfadeler', 'Basic Work Phrases',
    'Was fare Sie beruflich? = Ne iş yapıyorsunuz? Ich arbeite als... = ... olarak çalışıyorum. Ich habe eine Besprechung = Toplantım var.',
    [{ pronoun: 'Meslek sorma', form: 'Qual è la sua professione?', example: 'Qual è la sua professione?', tr: 'Mesleğiniz ne?' },
     { pronoun: 'Cevap', form: 'Ich bin ... / Ich arbeite als...', example: 'Ich arbeite als Ingenieur.', tr: 'Mühendis olarak çalışıyorum.' },
     { pronoun: 'Toplantı', form: 'Ich habe eine Besprechung', example: 'Um zehn Uhr habe ich eine Besprechung.', tr: 'Saat onda toplantım var.' },
     { pronoun: 'Mesai sonu', form: 'Buona serata!', example: 'Buona serata!', tr: 'İyi akşamlar! (iş çıkışı)' }],
    'İtalya\'da iş saatleri genelde 8–17 arası. Pünktlichkeit (dakiklik) çok önemli!')],
  [SP('sp1', 'Qual è la sua professione?', 'Mesleğiniz ne?', 'Meslek sor'),
   SP('sp2', 'Ich arbeite als Programmierer.', 'Yazılımcı olarak çalışıyorum.', 'Mesleğini söyle'),
   SP('sp3', 'Ich habe um drei Uhr eine Besprechung.', 'Saat üçte toplantım var.', 'Toplantı belirt'),
   SP('sp4', 'Buona serata!', 'İyi akşamlar! (iş çıkışı)', 'Mesai sonu de'),
   SP('sp5', 'Können wir einen Termin vereinbaren?', 'Randevu ayarlayabilir miyiz?', 'Randevu öner')],
  [DL('d1', 'Im Büro', 'At the Office', [
    LN('A', 'm', 'Buongiorno! Wie war Ihr Wochenende?', 'Günaydın! Hafta sonunuz nasıldı?', 'İş yerinde selam.',
      [BD('Wie war', 'Nasıldı', 'question', 'Geçmiş zaman soru.')]),
    LN('B', 'f', 'Ganz buono, danke. Und Ihnen?', 'Oldukça iyi, teşekkürler. Ya size?', 'Ganz buono = oldukça iyi.',
      [BD('Ganz buono', 'Oldukça iyi', 'adj', 'Olumlu kısa cevap.')]),
    LN('A', 'm', 'Auch buono. Haben Sie oggi Besprechungen?', 'Ben de iyi. Bugün toplantılarınız var mı?',
      [BD('Besprechungen', 'toplantılar', 'O', 'Feminin çoğul → die.')]),
    LN('B', 'f', 'Ja, um elf Uhr. Danach habe ich Zeit.', 'Evet, saat on birde. Sonra vaktim var.',
      [BD('Danach', 'Sonra', 'K', 'Zaman sırası.')])
  ])],
  [LI('li1', 'Ali arbeitet als Ingenieur in Berlin. Er beginnt um acht Uhr und hat um zehn Uhr eine Besprechung. Feierabend ist um siebzehn Uhr.',
    'Ali Berlin\'de mühendis olarak çalışıyor. Saat sekizde başlıyor ve saat onda toplantısı var. Mesai saat on yedide bitiyor.',
    [Q('Was ist Alis Beruf?', ['Lehrer', 'Arzt', 'Ingenieur', 'Koch'], 2, 'Ali\'nin mesleği ne?'),
     Q('Wann beginnt il lavoro?', ['7 Uhr', '8 Uhr', '9 Uhr', '10 Uhr'], 1, 'İş ne zaman başlıyor?'),
     Q('Wann ist Feierabend?', ['16 Uhr', '17 Uhr', '18 Uhr', '19 Uhr'], 1, 'Mesai ne zaman bitiyor?')])]
);

const L11 = scenario('Health',
  mkScenarioWords([
    ['w1', 'il medico / la medica', 'der artst / dee ERT-sin', 'doktor'],
    ['w2', 'l\'ospedale', 'das KRANK-en-haus', 'hastane'],
    ['w3', 'la farmacia', 'dee a-po-TAY-ke', 'eczane'],
    ['w4', 'malato', 'malato', 'hasta'],
    ['w5', 'die Schmerzen', 'dee SHMER-tsen', 'ağrı'],
    ['w6', 'das Fieber', 'das FEE-ber', 'ateş'],
    ['w7', 'der Husten', 'der HUS-ten', 'öksürük'],
    ['w8', 'die Erkältung', 'dee er-KEL-tung', 'soğuk algınlığı'],
    ['w9', 'das Medikament', 'das me-di-ka-MENT', 'ilaç'],
    ['w10', 'der Termin', 'der ter-MIN', 'randevu'],
    ['w11', 'die Versicherung', 'dee fer-ZI-khe-rung', 'sigorta'],
    ['w12', 'Guarisci presto!', 'GU-te BE-ser-ung', 'Geçmiş olsun!']
  ]),
  [G('g1', 'Doktorda', 'At the Doctor',
    'Mir tut ... weh = ... ağrıyor. Ich bin malato = hastayım. Ich brauche einen Termin = randevuya ihtiyacım var. Guarisci presto! = Geçmiş olsun!',
    [{ pronoun: 'Ağrı', form: 'Mir tut ... weh', example: 'Mir tut der Kopf weh.', tr: 'Başım ağrıyor.' },
     { pronoun: 'Hastalık', form: 'Ich bin malato / habe Fieber', example: 'Ho la febbre.', tr: 'Ateşim var.' },
     { pronoun: 'Randevu', form: 'Ich brauche einen Termin', example: 'Kann ich einen Termin avere?', tr: 'Randevu alabilir miyim?' },
     { pronoun: 'İlaç', form: 'Rezept / Medikament', example: 'Brauche ich ein Rezept?', tr: 'Reçete gerekli mi?' }],
    'İtalya\'da Krankenversicherung (sağlık sigortası) zorunludur.')],
  [SP('sp1', 'Mir tut der Kopf weh.', 'Başım ağrıyor.', 'Ağrı belirt'),
   SP('sp2', 'Sono malato.', 'Hastayım.', 'Hastalık söyle'),
   SP('sp3', 'Ich brauche einen Termin.', 'Randevuya ihtiyacım var.', 'Randevu iste'),
   SP('sp4', 'Ho la febbre.', 'Ateşim var.', 'Belirti söyle'),
   SP('sp5', 'Guarisci presto!', 'Geçmiş olsun!', 'Tebrik/iyi dilek')],
  [DL('d1', 'Beim Arzt', 'At the Doctor', [
    LN('A', 'f', 'Was fehlt Ihnen?', 'Sizin şikayetiniz ne?', 'Doktor sorusu.',
      [BD('Was fehlt Ihnen', 'Ne şikayetiniz var', 'question', 'Resmi doktor sorusu.')]),
    LN('B', 'm', 'Mir tut die Kehle weh und ich habe Fieber.', 'Boğazım ağrıyor ve ateşim var.',
      [BD('Mir tut die Kehle weh', 'Boğazım ağrıyor', 'V', 'weh tun + dativ.')]),
    LN('A', 'f', 'Seit wann?', 'Ne zamandan beri?', 'Seit wann = ne zamandan beri.',
      [BD('Seit wann', 'Ne zamandan beri', 'question', 'Süre sorusu.')]),
    LN('B', 'm', 'Seit ieri Abend.', 'Dün akşamdan beri.',
      [BD('Seit ieri Abend', 'Dün akşamdan beri', 'K', 'seit + zaman.')]),
    LN('A', 'f', 'Ich verschreibe Ihnen Medikamente. Guarisci presto!', 'Size ilaç yazıyorum. Geçmiş olsun!',
      [BD('Gute Besserung', 'Geçmiş olsun', 'phrase', 'Standart iyi dilek.')])
  ])],
  [LI('li1', 'Ali ist malato. Er hat Fieber und Husten. Der Arzt sagt: Drei Tage Ruhe und viel trinken.',
    'Ali hasta. Ateşi ve öksürüğü var. Doktor diyor: Üç gün dinlen ve bol su iç.',
    [Q('Was hat Ali?', ['Kopfschmerzen', 'Fieber und Husten', 'Bauchschmerzen', 'Allergie'], 1, 'Ali\'nin şikayeti ne?'),
     Q('Was empfiehlt der Arzt?', ['sport', 'Ruhe und trinken', 'Arbeiten', 'Reisen'], 1, 'Doktor ne öneriyor?'),
     Q('Wie lange Ruhe?', ['1 Tag', '2 Tage', '3 Tage', '5 Tage'], 2, 'Kaç gün dinlenme?')])]
);

const L12 = scenario('Phone & Communication',
  mkScenarioWords([
    ['w1', 'anrufen', 'AN-roo-fen', 'telefon etmek / aramak'],
    ['w2', 'die Nachricht', 'dee NAKH-rikht', 'mesaj'],
    ['w3', 'die E-Mail', 'dee EE-mayl', 'e-posta'],
    ['w4', 'die Telefonnummer', 'dee te-le-FON-nu-mer', 'telefon numarası'],
    ['w5', 'Ciao, sono...', 'HA-lo, heer ist', 'Merhaba, ... ben', { tip: 'Telefonda kendini tanıtma.' }],
    ['w6', 'Können Sie mich zurückrufen?', 'KÖ-nen zee mikh TSU-rük-roo-fen', 'Beni geri arayabilir misiniz?'],
    ['w7', 'Ich kann gerade nicht sprechen.', 'ikh kan ge-RA-de nikht SHPRE-khen', 'Şu an konuşamıyorum.'],
    ['w8', 'die Mailbox / die Mailbox', 'dee MELT-boks', 'sesli mesaj'],
    ['w9', 'schreiben', 'SHREE-ben', 'yazmak'],
    ['w10', 'der Anrufbeantworter', 'der AN-roof-be-ant-vor-ter', 'telesekreter'],
    ['w11', 'besetzt', 'be-ZETST', 'meşgul (hat)'],
    ['w12', 'verbinden', 'fer-BIN-den', 'bağlamak (telefon)']
  ]),
  [G('g1', 'Telefonda Konuşma', 'Phone Conversations',
    'İtalya\'da telefonda: Name? = Kimin aradığı? Hier ist Ali = Ali ben. Auf Wiederhören = Hoşça kalın (telefonda). Può parlare più piano, per favore? = Daha yavaş konuşabilir misiniz?',
    [{ pronoun: 'Tanıtma', form: 'Hier ist... / Mein Name ist...', example: 'Ciao, sono Ali.', tr: 'Merhaba, Ali ben.' },
     { pronoun: 'Bağlama', form: 'Können Sie mich verbinden?', example: 'Können Sie mich mit Herrn Müller verbinden?', tr: 'Beni Bay Müller\'e bağlayabilir misiniz?' },
     { pronoun: 'Meşgul', form: 'Die Leitung ist besetzt', example: 'Es ist besetzt.', tr: 'Hat meşgul.' },
     { pronoun: 'Veda', form: 'Auf Wiederhören', example: 'Auf Wiederhören!', tr: 'Hoşça kalın! (telefon)' }],
    'İtalya\'da telefon numaraları +49 ile başlar.')],
  [SP('sp1', 'Ciao, sono Ali.', 'Merhaba, Ali ben.', 'Telefonda tanıt'),
   SP('sp2', 'Può parlare più piano, per favore?', 'Lütfen daha yavaş konuşabilir misiniz?', 'Yavaş konuş iste'),
   SP('sp3', 'Ich rufe dopo zurück.', 'Sonra geri ararım.', 'Geri arama sözü ver'),
   SP('sp4', 'Können Sie das bitte wiederholen?', 'Lütfen tekrar edebilir misiniz?', 'Tekrar iste'),
   SP('sp5', 'Auf Wiederhören!', 'Hoşça kalın! (telefon)', 'Telefonda vedalaş')],
  [DL('d1', 'Telefongespräch', 'Phone Call', [
    LN('A', 'f', 'Buongiorno, ditta Müller. Cosa posso fare per Lei?', 'İyi günler, Müller Şirketi. Size nasıl yardımcı olabilirim?', 'Resmi telefon karşılama.',
      [BD('Was kann ich tun', 'Ne yapabilirim', 'question', 'Resmi telefon kalıbı.')]),
    LN('B', 'm', 'Buongiorno. Sono Ali. Posso parlare con il signor Schmidt?', 'İyi günler. Ali ben. Bay Schmidt ile konuşabilir miyim?',
      [BD('Hier ist Ali', 'Ali ben', 'phrase', 'Telefonda tanıtma.')]),
    LN('A', 'f', 'Einen Moment, bitte. Ich verbinde Sie.', 'Bir dakika, lütfen. Sizi bağlıyorum.',
      [BD('Einen Moment', 'Bir dakika', 'courtesy', 'Bekletme ifadesi.')]),
    LN('B', 'm', 'Danke. Auf Wiederhören!', 'Teşekkürler. Hoşça kalın!',
      [BD('Auf Wiederhören', 'Hoşça kalın', 'farewell', 'Telefon vedası — hören = duymak.')])
  ])],
  [LI('li1', 'Ali ruft die Arztpraxis an. Die Sprechstunde ist von acht bis zwölf Uhr. Für einen Termin drücken Sie die eins.',
    'Ali doktor muayenehanesini arıyor. Muayene saatleri sekiz ile on iki arası. Randevu için bire basın.',
    [Q('Wen ruft Ali an?', ['Apotheke', 'Arztpraxis', 'Hotel', 'Bahnhof'], 1, 'Ali kimi arıyor?'),
     Q('Wann ist Sprechstunde?', ['7–11', '8–12', '9–13', '10–14'], 1, 'Muayene saatleri ne?'),
     Q('Für Termin welche Taste?', ['0', '1', '2', '9'], 1, 'Randevu için hangi tuş?')])]
);

const L13 = scenario('Social Life',
  mkScenarioWords([
    ['w1', 'der Freund / die Freundin', 'der froynt / dee FROYND-in', 'erkek/kadın arkadaş'],
    ['w2', 'die Party', 'dee PAR-ty', 'parti'],
    ['w3', 'einladen', 'AYN-la-den', 'davet etmek'],
    ['w4', 'die Einladung', 'dee AYN-la-dung', 'davet'],
    ['w5', 'feiern', 'FAY-ern', 'kutlamak'],
    ['w6', 'der Geburtstag', 'der ge-BURTS-tak', 'doğum günü'],
    ['w7', 'Alles Gute!', 'A-les GU-te', 'İyi ki doğdun! / Her şey gönlünce!'],
    ['w8', 'Cin cin!', 'prost', 'Şerefe!'],
    ['w9', 'sich treffen', 'zikh TREF-en', 'buluşmak'],
    ['w10', 'der Termin', 'der ter-MIN', 'buluşma / randevu'],
    ['w11', 'spät', 'shpayt', 'geç'],
    ['w12', 'pünktlich', 'PÜNK-tlich', 'dakik']
  ]),
  [G('g1', 'Sosyal Davetler', 'Social Invitations',
    'Möchtest du...? = ... ister misin? (samimi). Haben Sie Lust? = İster misiniz? (resmi). Alles Gute zum Geburtstag! = Doğum günün kutlu olsun! Cin cin! = Şerefe!',
    [{ pronoun: 'Davet', form: 'Möchtest du...? / Lust avere', example: 'Hast du Lust, ins Kino zu andare?', tr: 'Sinemaya gitmek ister misin?' },
     { pronoun: 'Kabul', form: 'Gerne! / Das klingt buono!', example: 'Ja, gerne!', tr: 'Evet, memnuniyetle!' },
     { pronoun: 'Red', form: 'Leider kann ich nicht.', example: 'Tut mir leid, ich habe keine Zeit.', tr: 'Maalesef vaktim yok.' },
     { pronoun: 'Kutlama', form: 'Alles Gute! / Cin cin!', example: 'Alles Gute zum Geburtstag!', tr: 'Doğum günün kutlu olsun!' }],
    'İtalya\'da pünktlich (dakik) olmak sosyal görgü kuralıdır.')],
  [SP('sp1', 'Hast du am sabato Zeit?', 'Cumartesi müsait misin?', 'Buluşma teklif et'),
   SP('sp2', 'Ja, gerne! Wo treffen wir uns?', 'Evet, memnuniyetle! Nerede buluşalım?', 'Kabul et ve yer sor'),
   SP('sp3', 'Alles Gute zum Geburtstag!', 'Doğum günün kutlu olsun!', 'Doğum günü kutla'),
   SP('sp4', 'Cin cin!', 'Şerefe!', 'Kadeh kaldır'),
   SP('sp5', 'Es tut mir leid, ich kann nicht.', 'Maalesef gelemem.', 'Daveti reddet')],
  [DL('d1', 'Einladung', 'Invitation', [
    LN('A', 'f', 'Hey Ali! Ich mache am sabato eine Party. Kommst du?', 'Hey Ali! Cumartesi parti veriyorum. Gelir misin?', 'Samimi davet.',
      [BD('Ich mache eine Party', 'Parti veriyorum', 'V', 'fare = yapmak/vermek.')]),
    LN('B', 'm', 'Ja, gerne! Soll ich etwas mitbringen?', 'Evet, memnuniyetle! Bir şey getireyim mi?', 'mitbringen = yanında getirmek.',
      [BD('etwas mitbringen', 'bir şey getirmek', 'V', 'Partiye katkı sorusu.')]),
    LN('A', 'f', 'Nein, danke. Nur du! Um acht Uhr bei mir.', 'Hayır, teşekkürler. Sadece sen! Saat sekizde bende.',
      [BD('bei mir', 'bende / evimde', 'K', 'bei + dativ = ...de/-da.')]),
    LN('B', 'm', 'Super! Bis sabato!', 'Harika! Cumartesiye kadar!',
      [BD('Bis sabato', 'Cumartesiye kadar', 'farewell', 'Bis + gün.')])
  ])],
  [LI('li1', 'Lisa feiert am venerdì ihren Geburtstag. Die Party beginnt um nuovonzehn Uhr. Ali bringt einen Kuchen mit.',
    'Lisa cuma günü doğum gününü kutluyor. Parti saat 19:00\'da başlıyor. Ali bir kek getiriyor.',
    [Q('Was feiert Lisa?', ['Hochzeit', 'Geburtstag', 'Abschluss', 'Neujahr'], 1, 'Lisa ne kutluyor?'),
     Q('Wann beginnt die Party?', ['18 Uhr', '19 Uhr', '20 Uhr', '21 Uhr'], 1, 'Parti ne zaman başlıyor?'),
     Q('Was bringt Ali mit?', ['Wein', 'Blumen', 'Kuchen', 'Brosso'], 2, 'Ali ne getiriyor?')])]
);

const L14 = scenario('Home & Living',
  mkScenarioWords([
    ['w1', 'die Wohnung', 'dee VON-ung', 'daire / konut'],
    ['w2', 'das Haus', 'das haus', 'ev'],
    ['w3', 'la camera', 'das TSI-mer', 'oda'],
    ['w4', 'die Küche', 'dee KÜ-she', 'mutfak'],
    ['w5', 'das Bad', 'das bad', 'banyo'],
    ['w6', 'der Balkon', 'der bal-KON', 'balkon'],
    ['w7', 'die Miete', 'dee MEE-te', 'kira'],
    ['w8', 'der Vermieter', 'der fer-MEE-ter', 'ev sahibi'],
    ['w9', 'umziehen', 'UM-tsee-en', 'taşınmak'],
    ['w10', 'die Nachbarn', 'dee NAKH-barn', 'komşular'],
    ['w11', 'der Strom', 'der shtrom', 'elektrik'],
    ['w12', 'die Heizung', 'dee HAY-tsung', 'ısıtma']
  ]),
  [G('g1', 'Ev ve Konut', 'Home and Housing',
    'Ich wohne in... = ...de yaşıyorum. Die Miete beträgt... = Kira ... tutar. Nebenkosten = ek masraflar. Warmmiete = ısıtma dahil kira.',
    [{ pronoun: 'Adres', form: 'Ich wohne in... / Meine Adresse ist...', example: 'Ich wohne in Berlin.', tr: 'Berlin\'de yaşıyorum.' },
     { pronoun: 'Kira', form: 'Die Miete beträgt...', example: 'Die Miete beträgt achthundert Euro.', tr: 'Kira sekiz yüz euro.' },
     { pronoun: 'Taşınma', form: 'Ich ziehe um', example: 'Nächsten Monat ziehe ich um.', tr: 'Gelecek ay taşınıyorum.' },
     { pronoun: 'Komşu', form: 'die Nachbarn', example: 'Meine Nachbarn sind nett.', tr: 'Komşularım nazik.' }],
    'İtalya\'da çoğu kişi kiralık oturur — Mietwohnung.')],
  [SP('sp1', 'Ich wohne in einer Wohnung.', 'Bir dairede yaşıyorum.', 'Konut tipini söyle'),
   SP('sp2', 'Die Wohnung hat drei Zsempre.', 'Dairenin üç odası var.', 'Oda sayısı söyle'),
   SP('sp3', 'Die Miete ist sechshundert Euro.', 'Kira altı yüz euro.', 'Kira söyle'),
   SP('sp4', 'Ich ziehe nächsten Monat um.', 'Gelecek ay taşınıyorum.', 'Taşınma haberi ver'),
   SP('sp5', 'Die Nachbarn sind sehr nett.', 'Komşular çok nazik.', 'Komşulardan bahset')],
  [DL('d1', 'Wohnungssuche', 'Apartment Hunting', [
    LN('A', 'm', 'Buongiorno. Cerco un appartamento.', 'İyi günler. Daire arıyorum.', 'Ev arama.',
      [BD('Ich suche', 'Arıyorum', 'V', 'suchen + aküsatif.')]),
    LN('B', 'f', 'Wie viele Zsempre brauchen Sie?', 'Kaç oda lazım?', 'Ev sahibi/emlak sorusu.',
      [BD('Wie viele Zsempre', 'Kaç oda', 'question', 'Wie viele = kaç tane.')]),
    LN('A', 'm', 'Zwei Zsempre. Was kostet die Miete?', 'İki oda. Kira ne kadar?', 'Fiyat sorusu.',
      [BD('die Miete', 'kira', 'O', 'Feminin → die.')]),
    LN('B', 'f', 'Siebenhundert Euro caldo, inklusive Nebenkosten.', 'Yedi yüz euro ısıtma dahil, ek masraflar dahil.',
      [BD('caldo', 'ısıtma dahil', 'adj', 'Warmmiete = Nebenkosten dahil.')])
  ])],
  [LI('li1', 'Ali wohnt in einer Zweizsemprewohnung in München. Die Miete beträgt nuovonhundert Euro. Die Küche ist modern und der Balkon ist grande.',
    'Ali Münih\'te iki odalı bir dairede oturuyor. Kira dokuz yüz euro. Mutfak modern ve balkon büyük.',
    [Q('Wo wohnt Ali?', ['Berlin', 'Hamburg', 'München', 'Köln'], 2, 'Ali nerede oturuyor?'),
     Q('Wie viele Zsempre?', ['1', '2', '3', '4'], 1, 'Kaç oda?'),
     Q('Wie viel ist die Miete?', ['700 €', '800 €', '900 €', '1000 €'], 2, 'Kira ne kadar?')])]
);

const L15 = scenario('Education & School',
  mkScenarioWords([
    ['w1', 'la scuola', 'dee SHOO-le', 'okul'],
    ['w2', 'l\'università', 'dee u-ni-ver-zi-TET', 'üniversite'],
    ['w3', 'lo studente / la studentessa', 'der shtu-DENT / dee shtu-DEN-tin', 'üniversite öğrencisi'],
    ['w4', 'l\'insegnante', 'der LAY-rer / dee LAY-re-rin', 'öğretmen'],
    ['w5', 'der Kurs', 'der kurs', 'kurs'],
    ['w6', 'die Prüfung', 'dee PRÜ-fung', 'sınav'],
    ['w7', 'imparare', 'LER-nen', 'öğrenmek'],
    ['w8', 'studieren', 'shtu-DEE-ren', 'okumak (üniversite)'],
    ['w9', 'die Hausaufgabe', 'dee HAUS-auf-ga-be', 'ev ödevi'],
    ['w10', 'die Klasse', 'dee KLA-se', 'sınıf'],
    ['w11', 'der Stundenplan', 'der SHTUN-den-plan', 'ders programı'],
    ['w12', 'bestehen', 'be-SHTAY-en', 'geçmek (sınav)']
  ]),
  [G('g1', 'Eğitim Hayatı', 'Education',
    'Ich studiere ... an der Universität = Üniversitede ... okuyorum. Ich lerne italiano = İtalyanca öğreniyorum. Die Prüfung ist am... = Sınav ... günü.',
    [{ pronoun: 'Okumak', form: 'Ich studiere...', example: 'Ich studiere Medizin.', tr: 'Tıp okuyorum.' },
     { pronoun: 'Öğrenmek', form: 'Ich lerne...', example: 'Ich lerne italiano.', tr: 'İtalyanca öğreniyorum.' },
     { pronoun: 'Sınav', form: 'Ich habe eine Prüfung', example: 'Nächste Woche habe ich eine Prüfung.', tr: 'Gelecek hafta sınavım var.' },
     { pronoun: 'Başarı', form: 'Ich habe bestanden', example: 'Ich habe die Prüfung bestanden.', tr: 'Sınavı geçtim.' }],
    'İtalya\'da eğitim ücretsiz (devlet üniversiteleri) — çok kaliteli.')],
  [SP('sp1', 'Ich lerne italiano.', 'İtalyanca öğreniyorum.', 'Ne öğrendiğini söyle'),
   SP('sp2', 'Ich studiere an der Universität.', 'Üniversitede okuyorum.', 'Eğitim durumunu söyle'),
   SP('sp3', 'Nächste Woche habe ich eine Prüfung.', 'Gelecek hafta sınavım var.', 'Sınav haberi ver'),
   SP('sp4', 'Der Kurs beginnt um nuovon Uhr.', 'Kurs saat dokuzda başlıyor.', 'Kurs saati söyle'),
   SP('sp5', 'Ich habe die Prüfung bestanden!', 'Sınavı geçtim!', 'Başarı paylaş')],
  [DL('d1', 'An der Uni', 'At University', [
    LN('A', 'f', 'Was studierst du?', 'Ne okuyorsun?', 'Samimi soru — du formu.',
      [BD('Was studierst du', 'Ne okuyorsun', 'question', 'du ile samimi.')]),
    LN('B', 'm', 'Ich studiere Informatik. Und du?', 'Bilgisayar okuyorum. Ya sen?',
      [BD('Informatik', 'bilgisayar bilimi', 'O', 'Neutrum → das Fach.')]),
    LN('A', 'f', 'Ich studiere Medizin. Schwer, aber interessante!', 'Tıp okuyorum. Zor ama ilginç!',
      [BD('Schwer, aber interessante', 'Zor ama ilginç', 'adj', 'Aber = ama.')]),
    LN('B', 'm', 'Viel Erfolg bei der Prüfung!', 'Sınavda başarılar!', 'Erfolg = başarı.',
      [BD('Viel Erfolg', 'Başarılar', 'phrase', 'Sınav öncesi iyi dilek.')])
  ])],
  [LI('li1', 'Ali besucht einen Deutschkurs. Der Kurs ist montags und mittwochs von achtzehn bis zwanzig Uhr. Nächsten Monat hat er eine Prüfung.',
    'Ali bir İtalyanca kursuna gidiyor. Kurs pazartesi ve çarşamba 18-20 arası. Gelecek ay sınavı var.',
    [Q('Welche Sprache lernt Ali?', ['Englisch', 'Französisch', 'Deutsch', 'Türkisch'], 2, 'Ali hangi dili öğreniyor?'),
     Q('An welchen Tagen?', ['Mo+Di', 'Mo+Mi', 'Di+Do', 'Mi+Fr'], 1, 'Hangi günler?'),
     Q('Wann ist die Prüfung?', ['Diese Woche', 'Nächste Woche', 'Nächsten Monat', 'Nächstes Jahr'], 2, 'Sınav ne zaman?')])]
);

const L16 = scenario('Countries & Nationalities',
  mkScenarioWords([
    ['w1', 'Italia', 'DOYTSH-lant', 'İtalya'],
    ['w2', 'la Turchia', 'dee TÜR-kay', 'Türkiye'],
    ['w3', 'Österreich', 'ÖS-ter-aykh', 'Avusturya'],
    ['w4', 'die Schweiz', 'dee shvayts', 'İsviçre'],
    ['w5', 'deutsch', 'doytsh', 'Alman'],
    ['w6', 'türkisch', 'TÜR-kish', 'Türk'],
    ['w7', 'Woher venire Sie?', 'vo-HER KO-men zee', 'Nerelisiniz?'],
    ['w8', 'Ich komme aus...', 'ikh KO-me aus', '...den geliyorum'],
    ['w9', 'Europa', 'oy-RO-pa', 'Avrupa'],
    ['w10', 'die Sprache', 'dee SHPRA-khe', 'dil'],
    ['w11', 'Englisch', 'ENG-lish', 'İngilizce'],
    ['w12', 'die Hauptstadt', 'dee HAUPT-shtat', 'başkent']
  ]),
  [G('g1', 'Ülkeler ve Milliyetler', 'Countries and Nationalities',
    'Woher venire Sie? = Nerelisiniz? Ich komme aus der Türkei = Türkiye\'den geliyorum. Milliyet sıfatları küçük harfle: deutsch, türkisch. Ülkeler büyük harfle: Italia.',
    [{ pronoun: 'Soru', form: 'Woher venire Sie?', example: 'Woher venire Sie?', tr: 'Nerelisiniz?' },
     { pronoun: 'Cevap', form: 'Ich komme aus...', example: 'Ich komme aus der Türkei.', tr: 'Türkiye\'den geliyorum.' },
     { pronoun: 'Milliyet', form: 'Ich bin ...', example: 'Sono turco.', tr: 'Türküm.' },
     { pronoun: 'Dil', form: 'Ich spreche...', example: 'Ich spreche Türkisch und italiano.', tr: 'Türkçe ve İtalyanca konuşuyorum.' }],
    'aus + dativ: aus der Türkei, aus Italia. aus + eril ülke: aus dem Iran.')],
  [SP('sp1', 'Woher venire Sie?', 'Nerelisiniz?', 'Memleket sor'),
   SP('sp2', 'Ich komme aus der Türkei.', 'Türkiye\'den geliyorum.', 'Memleketini söyle'),
   SP('sp3', 'Sono turco.', 'Türküm.', 'Milliyetini söyle'),
   SP('sp4', 'Ich spreche Türkisch und italiano.', 'Türkçe ve İtalyanca konuşuyorum.', 'Dillerini söyle'),
   SP('sp5', 'Die Hauptstadt der Türkei ist Ankara.', 'Türkiye\'nin başkenti Ankara.', 'Başkent söyle')],
  [DL('d1', 'Herkunft', 'Origin', [
    LN('A', 'f', 'Woher venire Sie?', 'Nerelisiniz?', 'Resmi memleket sorusu.',
      [BD('Woher venire Sie', 'Nerelisiniz', 'question', 'Woher = nereden.')]),
    LN('B', 'm', 'Ich komme aus der Türkei, aus Istanbul.', 'Türkiye\'den, İstanbul\'dan geliyorum.',
      [BD('aus der Türkei', 'Türkiye\'den', 'K', 'aus + dativ.')]),
    LN('A', 'f', 'Ah, bello! Sprechen Sie schon Deutsch?', 'Ah, güzel! Zaten İtalyanca konuşuyor musunuz?',
      [BD('schon', 'zaten / hâlihazırda', 'K', 'schon = already/zaten.')]),
    LN('B', 'm', 'Ein bisschen. Ich lerne noch.', 'Biraz. Hâlâ öğreniyorum.',
      [BD('Ein bisschen', 'Biraz', 'K', 'Miktar ifadesi.'), BD('noch', 'hâlâ', 'K', 'Devam eden eylem.')])
  ])],
  [LI('li1', 'Ali kommt aus der Türkei. Er wohnt adesso in Berlin. Er spricht Türkisch, italiano und ein bisschen Englisch.',
    'Ali Türkiye\'den geliyor. Şimdi Berlin\'de yaşıyor. Türkçe, İtalyanca ve biraz İngilizce konuşuyor.',
    [Q('Woher kommt Ali?', ['Italia', 'Österreich', 'Türkei', 'Schweiz'], 2, 'Ali nereli?'),
     Q('Wo wohnt er adesso?', ['Istanbul', 'Ankara', 'Berlin', 'München'], 2, 'Şimdi nerede yaşıyor?'),
     Q('Wie viele Sprachen?', ['1', '2', '3', '4'], 2, 'Kaç dil konuşuyor?')])]
);

const L17 = scenario('Emotions & Feelings',
  mkScenarioWords([
    ['w1', 'glücklich', 'GLÜ-klich', 'mutlu'],
    ['w2', 'traurig', 'TRAU-rikh', 'üzgün'],
    ['w3', 'müde', 'MÜ-de', 'yorgun'],
    ['w4', 'nervös', 'ner-VÖS', 'gergin / sinirli'],
    ['w5', 'aufgeregt', 'AUF-ge-rekt', 'heyecanlı'],
    ['w6', 'wütend', 'VÜ-tent', 'kızgın'],
    ['w7', 'Angst avere', 'angst HA-ben', 'korkmak'],
    ['w8', 'sich freuen', 'zikh FROY-en', 'sevinmek'],
    ['w9', 'sich langweilen', 'zikh LANG-vay-len', 'sıkılmak'],
    ['w10', 'stolz', 'shtolts', 'gururlu'],
    ['w11', 'überrascht', 'ü-ber-RASST', 'şaşırmış'],
    ['w12', 'Ich fühle mich...', 'ikh FÜ-le mikh', 'Kendimi ... hissediyorum']
  ]),
  [G('g1', 'Duyguları İfade Etme', 'Expressing Emotions',
    'Ich bin müde = yorgunum. Ich habe Angst = korkuyorum. Es freut mich = sevindim. Mir ist freddo/caldo = üşüyorum/sıcaklanıyorum. Reflexive fiiller: sich freuen, sich langweilen.',
    [{ pronoun: 'Olumlu', form: 'Ich bin glücklich / freue mich', example: 'Ich freue mich auf domani.', tr: 'Yarına seviniyorum.' },
     { pronoun: 'Olumsuz', form: 'Ich bin traurig / müde', example: 'Sono molto stanco.', tr: 'Çok yorgunum.' },
     { pronoun: 'Korku', form: 'Ich habe Angst vor...', example: 'Ich habe Angst vor Spinnen.', tr: 'Örümceklerden korkuyorum.' },
     { pronoun: 'Sorma', form: 'Wie fühlst du dich?', example: 'Wie fühlst du dich?', tr: 'Nasıl hissediyorsun?' }],
    'sich fühlen = hissetmek (reflexiv). Ich fühle mich buono = kendimi iyi hissediyorum.')],
  [SP('sp1', 'Sono felice.', 'Mutluyum.', 'Duygu ifade et'),
   SP('sp2', 'Sono stanco.', 'Yorgunum.', 'Yorgunluğunu söyle'),
   SP('sp3', 'Ich freue mich!', 'Seviniyorum!', 'Sevincini ifade et'),
   SP('sp4', 'Wie fühlst du dich?', 'Nasıl hissediyorsun?', 'Duygu sor'),
   SP('sp5', 'Mi dispiace.', 'Üzgünüm.', 'Özür dile')],
  [DL('d1', 'Gefühle', 'Feelings', [
    LN('A', 'f', 'Du siehst traurig aus. Was ist los?', 'Üzgün görünüyorsun. Ne oldu?', 'sich ausvedere = görünmek.',
      [BD('traurig ausvedere', 'üzgün görünmek', 'V', 'Ausvedere = dış görünüş.')]),
    LN('B', 'm', 'Sono un po\' stanco. Molto lavoro.', 'Biraz yorgunum. Çok iş.',
      [BD('müde', 'yorgun', 'adj', 'Sein + sıfat.')]),
    LN('A', 'f', 'Das verstehe ich. Mach eine Pause!', 'Anlıyorum. Mola ver!', 'Pause fare = mola vermek.',
      [BD('Mach eine Pause', 'Mola ver', 'V', 'Imperativ — du formu.')]),
    LN('B', 'm', 'Danke. Das hilft.', 'Teşekkürler. Bu yardımcı oluyor.',
      [BD('Das hilft', 'Bu yardımcı oluyor', 'V', 'aiutare = yardım etmek.')])
  ])],
  [LI('li1', 'Ali ist oggi sehr glücklich. Er hat die Prüfung bestanden. Seine Freunde freuen sich mit ihm.',
    'Ali bugün çok mutlu. Sınavı geçti. Arkadaşları onunla birlikte seviniyor.',
    [Q('Wie fühlt sich Ali?', ['traurig', 'müde', 'glücklich', 'wütend'], 2, 'Ali nasıl hissediyor?'),
     Q('Warum?', ['Neuer Job', 'Prüfung bestanden', 'Urlaub', 'Party'], 1, 'Neden?'),
     Q('Wie reagieren die Freunde?', ['sie sind traurig', 'sie freuen sich', 'sie sind wütend', 'sie avere Angst'], 1, 'Arkadaşlar nasıl tepki veriyor?')])]
);

const L18 = scenario('Weather',
  mkScenarioWords([
    ['w1', 'il tempo', 'das VET-er', 'hava'],
    ['w2', 'il sole', 'dee ZO-ne', 'güneş'],
    ['w3', 'la pioggia', 'der RAY-gen', 'yağmur'],
    ['w4', 'la neve', 'der shnay', 'kar'],
    ['w5', 'der Wind', 'der vint', 'rüzgar'],
    ['w6', 'caldo', 'varm', 'sıcak'],
    ['w7', 'freddo', 'freddo', 'soğuk'],
    ['w8', 'Wie ist il tempo?', 'vee ist das VET-er', 'Hava nasıl?'],
    ['w9', 'Es regnet.', 'es RAY-net', 'Yağmur yağıyor.'],
    ['w10', 'Es schneit.', 'es shnayt', 'Kar yağıyor.'],
    ['w11', 'bewölkt', 'be-VÖLKT', 'bulutlu'],
    ['w12', 'la pioggiaschirm', 'der RAY-gen-shirm', 'şemsiye']
  ]),
  [G('g1', 'Hava Durumu', 'Weather',
    'İtalyancada hava es (it) ile: Es ist caldo/freddo. Es regnet = yağmur yağıyor. Es scheint il sole = güneş parlıyor. Wie ist il tempo oggi? = Bugün hava nasıl?',
    [{ pronoun: 'Soru', form: 'Wie ist il tempo?', example: 'Wie ist il tempo oggi?', tr: 'Bugün hava nasıl?' },
     { pronoun: 'Sıcaklık', form: 'Es ist ... Grad', example: 'Es ist zwanzig Grad.', tr: 'Hava yirmi derece.' },
     { pronoun: 'Yağış', form: 'Es regnet / schneit', example: 'Es regnet oggi.', tr: 'Bugün yağmur yağıyor.' },
     { pronoun: 'Tavsiye', form: 'Nimm einen Regenschirm!', example: 'Es wird regnen.', tr: 'Yağmur yağacak.' }],
    'İtalya\'da hava değişken — her zaman şemsiye taşı!')],
  [SP('sp1', 'Wie ist il tempo oggi?', 'Bugün hava nasıl?', 'Hava sor'),
   SP('sp2', 'Es ist caldo und sonnig.', 'Hava sıcak ve güneşli.', 'Hava durumu söyle'),
   SP('sp3', 'Es regnet. Ich brauche einen Regenschirm.', 'Yağmur yağıyor. Şemsiyeye ihtiyacım var.', 'Yağmurdan bahset'),
   SP('sp4', 'Es ist sehr freddo!', 'Hava çok soğuk!', 'Soğuktan bahset'),
   SP('sp5', 'Morgen wird es schneien.', 'Yarın kar yağacak.', 'Tahmin söyle')],
  [DL('d1', 'Wettergespräch', 'Weather Talk', [
    LN('A', 'm', 'Wie ist il tempo oggi?', 'Bugün hava nasıl?', 'Klasik sohbet açılışı — İtalya\'da çok yaygın.',
      [BD('Wetter', 'hava', 'O', 'Neutrum → das.')]),
    LN('B', 'f', 'Es ist freddo und bewölkt. Minus zwei Grad.', 'Soğuk ve bulutlu. Eksi iki derece.',
      [BD('bewölkt', 'bulutlu', 'adj', 'Wetter sıfatı.')]),
    LN('A', 'm', 'Oh! Dann brauche ich eine caldoe Jacke.', 'Oh! O zaman sıcak bir cekete ihtiyacım var.',
      [BD('eine caldoe Jacke', 'sıcak ceket', 'O', 'Adjektiv vor Nomen — sıfat çekimi.')]),
    LN('B', 'f', 'Ja, und vielleicht einen Schal. Es wird windig.', 'Evet, belki bir atkı. Rüzgarlı olacak.',
      [BD('windig', 'rüzgarlı', 'adj', 'Es wird = olacak (gelecek).')])
  ])],
  [LI('li1', 'Heute ist es sonnig und caldo, zwanzig Grad. Morgen wird es regnen. Am Wochenende schneit es vielleicht.',
    'Bugün güneşli ve sıcak, yirmi derece. Yarın yağmur yağacak. Hafta sonu belki kar yağar.',
    [Q('Wie ist il tempo oggi?', ['regnerisch', 'sonnig und caldo', 'schnee', 'windig'], 1, 'Bugün hava nasıl?'),
     Q('Was passiert domani?', ['Sonne', 'Regen', 'Schnee', 'Wind'], 1, 'Yarın ne oluyor?'),
     Q('Was passiert am Wochenende?', ['Regen', 'Sonne', 'Schnee vielleicht', 'Sturm'], 2, 'Hafta sonu ne oluyor?')])]
);

const L19 = scenario('Entertainment & Hobbies',
  mkScenarioWords([
    ['w1', 'das Hobby', 'das HO-bee', 'hobi'],
    ['w2', 'leggere', 'LAY-zen', 'okumak'],
    ['w3', 'musica hören', 'mu-ZEEK HÖ-ren', 'müzik dinlemek'],
    ['w4', 'sport treiben', 'shtport TRAY-ben', 'spor yapmak'],
    ['w5', 'kochen', 'KO-khen', 'yemek yapmak'],
    ['w6', 'reisen', 'RAY-zen', 'seyahat etmek'],
    ['w7', 'der Film', 'der film', 'film'],
    ['w8', 'das Konzert', 'das kon-TSERT', 'konser'],
    ['w9', 'das Museum', 'das mu-ZAY-um', 'müze'],
    ['w10', 'spielen', 'SHPEE-len', 'oynamak'],
    ['w11', 'wandern', 'VAN-dern', 'yürüyüş yapmak / trekking'],
    ['w12', 'fotografieren', 'fo-to-gra-FEE-ren', 'fotoğraf çekmek']
  ]),
  [G('g1', 'Hobiler ve Boş Zaman', 'Hobbies and Free Time',
    'Was machst du in deiner Freizeit? = Boş zamanında ne yapıyorsun? Ich interessiere mich für... = ...ile ilgileniyorum. gern = severek: Ich lese gern = okumayı severim.',
    [{ pronoun: 'Soru', form: 'Was sind deine Hobbys?', example: 'Was machst du gern?', tr: 'Ne yapmaktan hoşlanırsın?' },
     { pronoun: 'Sevme', form: 'Ich ... gern', example: 'Ich lese gern Bücher.', tr: 'Kitap okumayı severim.' },
     { pronoun: 'İlgi', form: 'Ich interessiere mich für...', example: 'Ich interessiere mich für musica.', tr: 'Müzikle ilgileniyorum.' },
     { pronoun: 'Davet', form: 'Lust auf...?', example: 'Hast du Lust auf Kino?', tr: 'Sinemaya gitmek ister misin?' }],
    'Am Wochenende = hafta sonu. In der Freizeit = boş zamanında.')],
  [SP('sp1', 'Mein Hobby ist Lesen.', 'Hobim okumak.', 'Hobini söyle'),
   SP('sp2', 'Ich treibe gern sport.', 'Spor yapmayı severim.', 'Spor hakkında konuş'),
   SP('sp3', 'Hast du Lust auf Kino?', 'Sinemaya gitmek ister misin?', 'Etkinlik teklif et'),
   SP('sp4', 'Ich interessiere mich für musica.', 'Müzikle ilgileniyorum.', 'İlgi alanını söyle'),
   SP('sp5', 'Am Wochenende wandere ich gern.', 'Hafta sonu yürüyüş yapmayı severim.', 'Hafta sonu planı söyle')],
  [DL('d1', 'Freizeit', 'Free Time', [
    LN('A', 'f', 'Was machst du am Wochenende?', 'Hafta sonu ne yapıyorsun?', 'Boş zaman sorusu.',
      [BD('am Wochenende', 'hafta sonu', 'K', 'am + Wochenende.')]),
    LN('B', 'm', 'Ich gehe wandern und lese gern.', 'Yürüyüşe gidiyorum ve okumayı severim.',
      [BD('wandern', 'yürüyüş yapmak', 'V', 'İtalya\'da çok popüler hobi.')]),
    LN('A', 'f', 'Cool! Ich gehe ins Kino. Willst du mitvenire?', 'Harika! Ben sinemaya gidiyorum. Benimle gelmek ister misin?',
      [BD('mitvenire', 'birlikte gelmek', 'V', 'mit = ile/birlikte.')]),
    LN('B', 'm', 'Ja, gerne! Welcher Film?', 'Evet, memnuniyetle! Hangi film?',
      [BD('Welcher Film', 'Hangi film', 'question', 'Welcher = hangi (eril).')])
  ])],
  [LI('li1', 'Am sabato geht Ali ins Museum. Am Abend hört er musica und liest ein Buch. domenica treibt er sport.',
    'Cumartesi Ali müzeye gidiyor. Akşam müzik dinliyor ve kitap okuyor. Pazar spor yapıyor.',
    [Q('Wohin geht Ali am sabato?', ['Kino', 'Museum', 'Konzert', 'Park'], 1, 'Cumartesi Ali nereye gidiyor?'),
     Q('Was macht er am sabatoabend?', ['sport', 'musica hören und leggere', 'Kochen', 'Reisen'], 1, 'Cumartesi akşamı ne yapıyor?'),
     Q('Was macht er am domenica?', ['Museum', 'Lesen', 'sport treiben', 'Kino'], 2, 'Pazar ne yapıyor?')])]
);

const L20 = scenario('Daily Conversation Practice',
  mkScenarioWords([
    ['w1', 'Buongiorno!', 'buan-JOR-no', 'İyi günler!'],
    ['w2', 'Come sta?', 'KO-me STA', 'Nasılsınız?'],
    ['w3', 'Sto bene.', 'sto BE-ne', 'İyiyim.'],
    ['w4', 'Scusi', 'SKU-zi', 'Pardon / Affedersiniz'],
    ['w5', 'Nessun problema', 'nes-SUN pro-BLE-ma', 'Sorun değil'],
    ['w6', 'Certo', 'CHER-to', 'Tabii ki'],
    ['w7', 'Capisce?', 'ka-PISH-she', 'Anlıyor musunuz?'],
    ['w8', 'Non capisco.', 'non ka-PI-sko', 'Anlamıyorum.'],
    ['w9', 'Può ripetere?', 'PU-o ri-pe-TE-re', 'Tekrar edebilir misiniz?'],
    ['w10', 'Piano, per favore.', 'PYA-no per fa-VO-re', 'Yavaş, lütfen.'],
    ['w11', 'Un momento, per favore.', 'un mo-MEN-to', 'Bir dakika, lütfen.'],
    ['w12', 'Tutto chiaro!', 'TUT-to KYA-ro', 'Tamam! / Anlaşıldı!']
  ]),
  [G('g1', 'Günlük Konuşma Kalıpları', 'Daily Conversation Patterns',
    'Bu derste öğrendiğin tüm kalıpları birleştiriyoruz. Scusi = pardon. Nessun problema = sorun değil. Piano, per favore = yavaş, lütfen. Tutto chiaro = tamam/anlaşıldı.',
    [{ pronoun: 'Anlama', form: 'Capisce? / Non capisco', example: 'Scusi, non capisco.', tr: 'Pardon, anlamıyorum.' },
     { pronoun: 'Tekrar', form: 'Può ripetere?', example: 'Può ripetere, per favore?', tr: 'Tekrar edebilir misiniz?' },
     { pronoun: 'Onay', form: 'Tutto chiaro / Certo', example: 'Tutto chiaro, grazie!', tr: 'Tamam, teşekkürler!' },
     { pronoun: 'Rica', form: 'Per favore / Grazie / Prego', example: 'Grazie! — Prego!', tr: 'Teşekkürler! — Rica ederim!' }],
    'İtalyanca öğrenirken "Piano, per favore" cümlesini çok kullan!'),
   G('g2', 'Küçük Konuşma — Small Talk', 'Small Talk',
    'İtalya\'da small talk sıcak tutulur. Come sta? → Sto bene, grazie. Bel tempo oggi! = Bugün hava güzel! Buon weekend! = İyi hafta sonları!',
    [{ pronoun: 'Hal hatır', form: 'Come sta?', example: 'Come sta?', tr: 'Nasılsınız?' },
     { pronoun: 'Hava', form: 'Bel tempo!', example: 'Oggi c\'è bel tempo.', tr: 'Bugün hava güzel.' },
     { pronoun: 'Hafta sonu', form: 'Buon weekend!', example: 'Buon weekend!', tr: 'İyi hafta sonları!' },
     { pronoun: 'Veda', form: 'A presto / Ci vediamo', example: 'A presto!', tr: 'Yakında görüşürüz!' }],
    'İş ortamında kısa tutulur; arkadaşlarla daha uzun sohbet normal.')],
  [SP('sp1', 'Scusi, non capisco.', 'Pardon, anlamıyorum.', 'Anlamadığını söyle'),
   SP('sp2', 'Può parlare più piano, per favore?', 'Lütfen daha yavaş konuşabilir misiniz?', 'Yavaş konuş iste'),
   SP('sp3', 'Tutto chiaro, grazie!', 'Tamam, teşekkürler!', 'Onayla'),
   SP('sp4', 'Buon weekend!', 'İyi hafta sonları!', 'Hafta sonu dileği'),
   SP('sp5', 'Piacere di conoscerla.', 'Tanıştığımıza memnun oldum.', 'Resmi tanışma')],
  [DL('d1', 'Situazione quotidiana', 'Daily Situation', [
    LN('A', 'm', 'Buongiorno! Come sta?', 'İyi günler! Nasılsınız?', 'Resmi günlük selam.',
      [BD('Buongiorno', 'İyi günler', 'greeting', 'Standart gündüz selamı.')]),
    LN('B', 'f', 'Sto bene, grazie. E a Lei?', 'İyiyim, teşekkürler. Ya siz?',
      [BD('Sto bene', 'İyiyim', 'V', 'Standart cevap.')]),
    LN('A', 'm', 'Bene anche io. Scusi, dov\'è il bagno?', 'Ben de iyiyim. Pardon, tuvalet nerede?',
      [BD('Scusi', 'Pardon', 'courtesy', 'Yol sormadan önce.')]),
    LN('B', 'f', 'Dritto, poi a sinistra.', 'Düz, sonra sola.', 'Kısa yön tarifi.',
      [BD('Dritto, poi a sinistra', 'Düz sonra sol', 'direction', 'Basit tarif.')]),
    LN('A', 'm', 'Grazie mille! Arrivederci!', 'Çok teşekkürler! Hoşça kalın!',
      [BD('Grazie mille', 'Çok teşekkürler', 'courtesy', 'Nezaket.')])
  ]),
   DL('d2', 'Corso di lingua', 'Language Course', [
    LN('A', 'f', 'Capisce?', 'Anlıyor musunuz?', 'Öğretmen kontrol sorusu.',
      [BD('Capisce', 'Anlıyor musunuz', 'question', 'Resmi form.')]),
    LN('B', 'm', 'Solo un po\'. Può parlare più piano?', 'Sadece biraz. Daha yavaş konuşabilir misiniz?',
      [BD('Solo un po\'', 'Sadece biraz', 'K', 'Sınırlı anlama.')]),
    LN('A', 'f', 'Certo! Nessun problema.', 'Tabii ki! Sorun değil.',
      [BD('Nessun problema', 'Sorun değil', 'phrase', 'Günlük rahatlatma.')]),
    LN('B', 'm', 'Grazie! Ora capisco.', 'Teşekkürler! Şimdi anlıyorum.',
      [BD('Ora capisco', 'Şimdi anlıyorum', 'V', 'Ora = şimdi.')])
  ])],
  [LI('li1', 'Ali impara l\'italiano. A volte non capisce tutto. Dice: Scusi, può ripetere? Piano, per favore. Poi capisce.',
    'Ali İtalyanca öğreniyor. Bazen her şeyi anlamıyor. Diyor ki: Pardon, tekrar edebilir misiniz? Yavaş, lütfen. Sonra anlıyor.',
    [Q('Cosa impara Ali?', ['inglese', 'italiano', 'francese', 'turco'], 1, 'Ali ne öğreniyor?'),
     Q('Cosa dice Ali quando non capisce?', ['Arrivederci', 'Piano, per favore', 'Buongiorno', 'Cin cin'], 1, 'Anlamadığında ne diyor?'),
     Q('Capisce alla fine?', ['No', 'Sì', 'Forse', 'Mai'], 1, 'Sonunda anlıyor mu?')])]
);

// ─── Vocab lessons 21–49 ─────────────────────────────────────
const VOCAB = {
  21: ['Verbi fondamentali', [
    ['essere', 'ES-se-re', 'olmak', { en: 'Lui è medico.', tr: 'O doktor.', bd: [BD('è', 'dır', 'V', 'essere fiili')] }],
    ['avere', 'a-VE-re', 'sahip olmak / var', { en: 'Ho tempo.', tr: 'Vaktim var.', bd: [BD('ho', 'var', 'V', 'avere fiili')] }],
    ['diventare', 'di-ven-TA-re', 'olmak / -mek', { en: 'Divento medico.', tr: 'Doktor oluyorum.', bd: [BD('divento', 'oluyorum', 'V', 'diventare fiili')] }],
    ['fare', 'FA-re', 'yapmak', { en: 'Cosa fai?', tr: 'Ne yapıyorsun?', bd: [BD('fai', 'yapıyorsun', 'V', 'fare fiili')] }],
    ['andare', 'an-DA-re', 'gitmek', { en: 'Vado a casa.', tr: 'Eve gidiyorum.', bd: [BD('vado', 'gidiyorum', 'V', 'andare fiili')] }],
    ['venire', 've-NI-re', 'gelmek', { en: 'Vieni con me?', tr: 'Benimle gelir misin?', bd: [BD('Vieni', 'Gelir misin', 'V', 'venire fiili')] }],
    ['vedere', 've-DE-re', 'görmek', { en: 'Ti vedo.', tr: 'Seni görüyorum.', bd: [BD('vedo', 'görüyorum', 'V', 'vedere fiili')] }],
    ['sapere', 'sa-PE-re', 'bilmek', { en: 'Lo so.', tr: 'Biliyorum.', bd: [BD('so', 'biliyorum', 'V', 'sapere fiili')] }],
    ['pensare', 'pen-SA-re', 'düşünmek', { en: 'Penso che hai ragione.', tr: 'Sanırım haklısın.', bd: [BD('penso', 'sanırım', 'V', 'pensare fiili')] }],
    ['volere', 'vo-LE-re', 'istemek', { en: 'Voglio imparare l\'italiano.', tr: 'İtalyanca öğrenmek istiyorum.', bd: [BD('voglio', 'istiyorum', 'V', 'volere fiili')] }],
    ['dovere', 'do-VE-re', 'zorunda olmak / -meli', { en: 'Devo lavorare.', tr: 'Çalışmam lazım.', bd: [BD('devo', 'lazım', 'V', 'dovere fiili')] }],
    ['potere', 'po-TE-re', '-ebilmek', { en: 'Posso nuotare.', tr: 'Yüzebilirim.', bd: [BD('posso', 'ebilirim', 'V', 'potere fiili')] }],
    ['piacere', 'pya-CHE-re', 'hoşlanmak', { en: 'Mi piace il caffè.', tr: 'Kahveyi severim.', bd: [BD('piace', 'hoşuna gider', 'V', 'piacere fiili')] }],
    ['dire', 'DI-re', 'söylemek', { en: 'Cosa dici?', tr: 'Ne diyorsun?', bd: [BD('dici', 'diyorsun', 'V', 'dire fiili')] }],
    ['chiedere', 'KYE-de-re', 'sormak', { en: 'Posso chiedere?', tr: 'Sorabilir miyim?', bd: [BD('chiedere', 'sormak', 'V', 'chiedere fiili')] }],
    ['dare', 'DA-re', 'vermek', { en: 'Dammi il libro, per favore.', tr: 'Lütfen kitabı ver.', bd: [BD('Dammi', 'Ver', 'V', 'dare fiili')] }],
    ['prendere', 'PREN-de-re', 'almak', { en: 'Prendo l\'autobus.', tr: 'Otobüse biniyorum.', bd: [BD('prendo', 'alıyorum', 'V', 'prendere fiili')] }],
    ['trovare', 'tro-VA-re', 'bulmak', { en: 'Trovo questo bene.', tr: 'Bunu iyi buluyorum.', bd: [BD('trovo', 'buluyorum', 'V', 'trovare fiili')] }],
    ['restare', 'res-TA-re', 'kalmak', { en: 'Resto a casa.', tr: 'Evde kalıyorum.', bd: [BD('resto', 'kalıyorum', 'V', 'restare fiili')] }],
    ['stare', 'STA-re', 'durmak / olmak', { en: 'Sto bene.', tr: 'İyiyim.', bd: [BD('sto', '...im', 'V', 'stare fiili')] }],
    ['esserci', 'es-SER-chi', 'bulunmak / var olmak', { en: 'C\'è un libro sul tavolo.', tr: 'Masada bir kitap var.', bd: [BD('c\'è', 'var', 'V', 'esserci')] }],
    ['portare', 'por-TA-re', 'getirmek', { en: 'Porta l\'acqua, per favore.', tr: 'Lütfen su getir.', bd: [BD('Porta', 'Getir', 'V', 'portare fiili')] }],
    ['aiutare', 'a-yu-TA-re', 'yardım etmek', { en: 'Puoi aiutarmi?', tr: 'Bana yardım edebilir misin?', bd: [BD('aiutare', 'yardım etmek', 'V', 'aiutare fiili')] }],
    ['imparare', 'im-pa-RA-re', 'öğrenmek', { en: 'Imparo l\'italiano.', tr: 'İtalyanca öğreniyorum.', bd: [BD('imparo', 'öğreniyorum', 'V', 'imparare fiili')] }],
    ['lavorare', 'la-vo-RA-re', 'çalışmak', { en: 'Lavora a Roma.', tr: 'Roma\'da çalışıyor.', bd: [BD('lavora', 'çalışıyor', 'V', 'lavorare fiili')] }]
  ]],
  22: ['Aggettivi', [
    ['grande', 'gros', 'büyük'], ['piccolo', 'klayn', 'küçük'], ['buono', 'buono', 'iyi'],
    ['cattivo', 'shlekt', 'kötü'], ['nuovo', 'noy', 'yeni'], ['alt', 'alt', 'eski / yaşlı'],
    ['veloce', 'shnel', 'hızlı'], ['lento', 'LANG-zam', 'yavaş'], ['facile', 'AYN-fakh', 'kolay'],
    ['difficile', 'shvayr', 'zor / ağır'], ['bello', 'shön', 'güzel'], ['hässlich', 'HES-likh', 'çirkin'],
    ['hoch', 'khokh', 'yüksek / uzun'], ['niedrig', 'NEE-drikh', 'alçak / kısa'],
    ['leicht', 'laykht', 'hafif / kolay'], ['sauber', 'ZAU-ber', 'temiz'], ['schmutzig', 'SHMU-tsikh', 'kirli'],
    ['interessante', 'in-te-re-SANT', 'ilginç'], ['noioso', 'LANG-vay-likh', 'sıkıcı'],
    ['caro', 'TOY-er', 'pahalı'], ['economico', 'BIL-likh', 'ucuz'], ['importante', 'VIKH-tikh', 'önemli'],
    ['anders', 'AN-ders', 'farklı'], ['gleich', 'glaykh', 'aynı'], ['giusto', 'RIKH-tikh', 'doğru'],
    ['sbagliato', 'falsh', 'yanlış']
  ]],
  23: ['Persone & Relazioni', [
    ['l\'uomo', 'der man', 'adam / erkek'], ['la donna', 'dee frau', 'kadın'], ['il bambino', 'das kint', 'çocuk'],
    ['il padre', 'der FAH-ter', 'baba'], ['la madre', 'dee MUT-er', 'anne'], ['il fratello', 'der BRU-der', 'erkek kardeş'],
    ['la sorella', 'dee SHVES-ter', 'kız kardeş'], ['der Freund', 'der froynt', 'erkek arkadaş / erkek dost'],
    ['die Freundin', 'dee FROYND-in', 'kız arkadaş / kadın dost'], ['der Nachbar', 'der NAKH-bar', 'komşu (erkek)'],
    ['der Kollege', 'der ko-LAY-ge', 'iş arkadaşı (erkek)'], ['der Chef', 'der shef', 'patron (erkek)'],
    ['der Lehrer', 'der LAY-rer', 'öğretmen (erkek)'], ['der Arzt', 'der artst', 'doktor (erkek)'],
    ['der Student', 'der shtu-DENT', 'öğrenci (erkek)'], ['la famiglia', 'dee fa-MEE-lee', 'aile'],
    ['der Ehemann', 'der AY-ge-mann', 'koca'], ['die Ehefrau', 'dee AY-ge-frau', 'eş (kadın)'],
    ['der Sohn', 'der zon', 'oğul'], ['die Tochter', 'dee TOKH-ter', 'kız evlat'],
    ['der Enkel', 'der ENG-kel', 'torun (erkek)'], ['die Großeltern', 'dee GROS-el-ternt', 'büyükanne/baba'],
    ['der Bekannte', 'der be-KANT-te', 'tanıdık'], ['der Fremde', 'der FREM-de', 'yabancı'],
    ['das Paar', 'das par', 'çift'], ['die Beziehung', 'dee be-ZEE-khung', 'ilişki'],
    ['der Gast', 'der gast', 'misafir']
  ]],
  24: ['Città & Luoghi', [
    ['la città', 'dee shtat', 'şehir'], ['das Dorf', 'das dorf', 'köy'], ['la strada', 'dee SHTra-se', 'cadde / sokak'],
    ['der Platz', 'der plats', 'meydan / alan'], ['der Markt', 'der markt', 'pazar / market'],
    ['das Geschäft', 'das ge-SHEFT', 'dükkan / iş yeri'], ['das Kaufhaus', 'das KAUF-haus', 'büyük mağaza'],
    ['die Bank', 'dee bank', 'banka'], ['die Post', 'dee post', 'postane'], ['l\'ospedale', 'das KRANK-en-haus', 'hastane'],
    ['la farmacia', 'dee a-po-TAY-ke', 'eczane'], ['la scuola', 'dee SHOO-le', 'okul'],
    ['l\'università', 'dee u-ni-ver-zi-TET', 'üniversite'], ['il parco', 'der park', 'park'],
    ['la stazione', 'der BAHN-hof', 'tren istasyonu'], ['l\'aeroporto', 'der FLUKH-ha-fen', 'havaalanı'],
    ['die Haltestelle', 'dee HAL-te-shtel-le', 'durak'], ['die Brücke', 'dee BRÜ-ke', 'köprü'],
    ['das Rathaus', 'das RAT-haus', 'belediye binası'], ['die Kirche', 'dee KIR-khe', 'kilise'],
    ['das Museum', 'das mu-ZAY-um', 'müze'], ['il cinema', 'das KEE-no', 'sinema'],
    ['il ristorante', 'das res-to-RANG', 'restoran'], ['das Café', 'das ka-FAY', 'kafe'],
    ['der Supermarkt', 'der ZU-per-markt', 'süpermarket'], ['die Bibliothek', 'dee bi-ble-o-TAYK', 'kütüphane'],
    ['der Bäcker', 'der BE-ker', 'fırıncı / ekmekçi'], ['die Innenstadt', 'dee IN-nen-shtat', 'şehir merkezi']
  ]],
  25: ['Cibo & Bevande', [
    ['la mela', 'der AP-fel', 'elma'], ['die Orange', 'dee o-RAN-zhe', 'portakal'], ['la banana', 'dee ba-NA-ne', 'muz'],
    ['die Erdbeere', 'dee ERT-bay-re', 'çilek'], ['die Tomate', 'dee to-MA-te', 'domates'], ['die Kartoffel', 'dee kar-TOF-fel', 'patates'],
    ['der Reis', 'der rays', 'pirinç'], ['il pane', 'das brosso', 'ekmek'], ['il formaggio', 'der KAY-ze', 'peynir'],
    ['das Ei', 'das ay', 'yumurta'], ['das Fleisch', 'das flysh', 'et'], ['das Hähnchen', 'das HEN-khen', 'tavuk'],
    ['il pesce', 'der fish', 'balık'], ['das Gemüse', 'das ge-MÜ-ze', 'sebze'], ['das Obst', 'das opst', 'meyve'],
    ['l\'acqua', 'das VAS-ser', 'su'], ['il caffè', 'der ka-FE', 'kahve'], ['il tè', 'der tay', 'çay'],
    ['il succo', 'der zaft', 'meyve suyu'], ['das Bier', 'das beer', 'bira'], ['der Wein', 'der vayn', 'şarap'],
    ['das la colazione', 'das FRÜ-shtük', 'kahvaltı'], ['das Mittagessen', 'das MIT-tak-es-sen', 'öğle yemeği'],
    ['das Abendessen', 'das A-bent-es-sen', 'akşam yemeği'], ['der Snack', 'der snack', 'atıştırmalık'],
    ['das Rezept', 'das re-TSEPT', 'tarif', { en: 'Hast du ein Rezept?', tr: 'Tarifin var mı?', bd: [BD('Rezept', 'tarif', 'O', 'Neutrum → das.')] }]
  ]],
  26: ['Colori', [
    ['rosso', 'rosso', 'kırmızı'], ['blu', 'blu', 'mavi'], ['verde', 'verde', 'yeşil'], ['giallo', 'gelp', 'sarı'],
    ['nero', 'shvarts', 'siyah'], ['bianco', 'vays', 'beyaz'], ['grau', 'grau', 'gri'], ['braun', 'braun', 'kahverengi'],
    ['orange', 'o-RAN-zhe', 'turuncu'], ['lila', 'LEE-la', 'mor'], ['rosa', 'RO-za', 'pembe'],
    ['hell', 'hel', 'açık (renk)'], ['dunkel', 'DUN-kel', 'koyu (renk)'], ['bunt', 'bunt', 'renkli / rengarenk'],
    ['farblos', 'FARB-los', 'renksiz'], ['il colore', 'dee FAR-be', 'renk'],
    ['bunt', 'bunt', 'renkli'], ['golden', 'GOL-den', 'altın rengi'], ['silbern', 'ZIL-bern', 'gümüş rengi'],
    ['beige', 'bezh', 'bej'], ['türkis', 'tür-KIS', 'turkuaz'], ['violett', 'vee-o-LET', 'eflatun'],
    ['farbig', 'FAR-bikh', 'renkli'], ['schillern', 'SHIL-ern', 'parıldamak'], ['leuchten', 'LOY-kh-ten', 'parlamak / ışıldamak'],
    ['der Farbton', 'der FARB-ton', 'renk tonu'], ['matt', 'mat', 'mat (parlak olmayan)']
  ]],
  27: ['Espressioni di tempo', [
    ['oggi', 'HOY-te', 'bugün'], ['domani', 'MOR-gen', 'yarın'], ['ieri', 'GES-tern', 'dün'],
    ['überdomani', 'Ü-ber-mor-gen', 'yarından sonra'], ['vorieri', 'FOR-ges-tern', 'evvelsi gün'],
    ['adesso', 'yetst', 'şimdi'], ['dopo', 'SHPAY-ter', 'sonra'], ['früher', 'FRÜ-er', 'önce / eskiden'],
    ['bald', 'balt', 'yakında'], ['sofort', 'zo-FORT', 'hemen'], ['sempre', 'IM-mer', 'her zaman'],
    ['a volte', 'MANKH-mal', 'bazen'], ['nie', 'nee', 'asla / hiç'], ['spesso', 'spesso', 'sık sık'],
    ['selten', 'ZEL-ten', 'nadiren'], ['täglich', 'TAYK-likh', 'günlük'], ['wöchentlich', 'VÖKH-ent-likh', 'haftalık'],
    ['monatlich', 'mo-NAT-likh', 'aylık'], ['jährlich', 'YER-likh', 'yıllık'],
    ['die Minute', 'dee mi-NU-te', 'dakika'], ['die Stunde', 'dee SHTUN-de', 'saat'],
    ['der Tag', 'der tak', 'gün'], ['die Woche', 'dee VO-khe', 'hafta'],
    ['der Monat', 'der mo-NAT', 'ay'], ['das Jahr', 'das yar', 'yıl'],
    ['die Zeit', 'dee tsayt', 'zaman'], ['pünktlich', 'PÜNK-tlich', 'dakik']
  ]],
  28: ['sport & Movimento', [
    ['lo sport', 'lo sport', 'spor'], ['il calcio', 'il KAL-cho', 'futbol'], ['il basket', 'il BAS-ket', 'basketbol'],
    ['Tennis', 'TE-nis', 'tenis'], ['Schwimmen', 'SHVIM-men', 'yüzme'], ['Laufen', 'LAU-fen', 'koşma / koşmak'],
    ['Radfahren', 'RAT-fah-ren', 'bisiklete binmek'], ['Wandern', 'VAN-dern', 'yürüyüş / trekking'],
    ['Skifahren', 'SHEE-fah-ren', 'kayak yapmak'], ['trainieren', 'tray-NEE-ren', 'antrenman yapmak'],
    ['gewinnen', 'ge-VIN-nen', 'kazanmak'], ['verlieren', 'fer-LEE-ren', 'kaybetmek'],
    ['das Team', 'das team', 'takım'], ['der Spieler', 'der SHPEE-ler', 'oyuncu (erkek)'],
    ['der Trainer', 'der TREY-ner', 'antrenör'], ['das Stadion', 'das shta-DI-on', 'stadyum'],
    ['das Fitnessstudio', 'das FIT-nes-shtu-DI-o', 'spor salonu'], ['die Übung', 'dee Ü-bung', 'egzersiz'],
    ['die Mannschaft', 'dee MAN-shaft', 'takım (grup)'], ['der Wettkampf', 'der VET-kampf', 'yarışma / müsabaka'],
    ['die Medaille', 'dee me-DA-ye', 'madalya'], ['der Pokal', 'der po-KAL', 'kupa / ödül'],
    ['fit', 'fit', 'formda / fit'], ['müde', 'MÜ-de', 'yorgun'], ['stark', 'shtark', 'güçlü'],
    ['schwach', 'shvakh', 'zayıf']
  ]],
  29: ['Lavoro & Tecnologia', [
    ['der Computer', 'der kom-PYU-ter', 'bilgisayar'], ['der Laptop', 'der LAP-top', 'dizüstü bilgisayar'],
    ['das Handy', 'das HEN-dee', 'cep telefonu'], ['das Internet', 'das IN-ter-net', 'internet'],
    ['die E-Mail', 'dee EE-mayl', 'e-posta'], ['die Website', 'dee VEB-sayt', 'web sitesi'],
    ['die Sspessoware', 'dee SOFT-ver', 'yazılım'], ['die App', 'dee ep', 'uygulama'],
    ['das Passwort', 'das PAS-vort', 'şifre'], ['der Bildschirm', 'der BILT-shirm', 'ekran'],
    ['die Tastatur', 'dee tas-ta-TUR', 'klavye'], ['die Maus', 'dee maus', 'fare (bilgisayar)'],
    ['drucken', 'DRU-ken', 'yazdırmak'], ['speichern', 'SHPY-khern', 'kaydetmek'],
    ['löschen', 'LÖ-shen', 'silmek'], ['hochladen', 'HOKH-lah-den', 'yüklemek (upload)'],
    ['herunterladen', 'he-RUN-ter-lah-den', 'indirmek (download)'], ['das Meeting', 'das MEE-ting', 'toplantı (online)'],
    ['die Konferenz', 'dee kon-fe-RENTS', 'konferans'], ['l\'ufficio', 'das BÜ-ro', 'ofis'],
    ['der Schreibtisch', 'der SHRAYP-tish', 'yazı masası'], ['der Drucker', 'der DRU-ker', 'yazıcı'],
    ['das Netzwerk', 'das NETS-verk', 'ağ / network'], ['die Datei', 'dee da-TAY', 'dosya'],
    ['der Kollege', 'der ko-LAY-ge', 'iş arkadaşı']
  ]],
  30: ['Viaggi & Turismo', [
    ['die Reise', 'dee RAY-ze', 'seyahat / yolculuk'], ['der Urlaub', 'der UR-laup', 'tatil'],
    ['der Reisepass', 'der RAY-ze-pas', 'pasaport'], ['der Koffer', 'der KO-fer', 'bavul'],
    ['das Visum', 'das VEE-zum', 'vize'], ['die Grenze', 'dee GREN-tse', 'sınır'],
    ['der Zoll', 'der tsol', 'gümrük'], ['die Sehenswürdigkeit', 'dee ZAY-ens-vür-dikh-kayt', 'turistik yer / görülecek yer'],
    ['die Führung', 'dee FÜ-rung', 'tur / rehberli gezi'], ['die Unterkunft', 'dee UN-ter-kunft', 'konaklama'],
    ['die Pension', 'dee pan-ZI-on', 'pansiyon'], ['der Reiseführer', 'der RAY-ze-fü-rer', 'turist rehberi / gezi kitabı'],
    ['die Landkarte', 'dee LANT-kar-te', 'harita'], ['der Kompass', 'der kom-PAS', 'pusula'],
    ['das Souvenir', 'das su-ve-NEER', 'hediyelik eşya'], ['der Strand', 'der shtrant', 'sahil / plaj'],
    ['der Berg', 'der berk', 'dağ'], ['der See', 'der zay', 'göl'],
    ['der Fluss', 'der flus', 'nehir'], ['die Insel', 'dee IN-zel', 'ada'],
    ['der Hafen', 'der HAH-fen', 'liman'], ['die Altstadt', 'dee ALT-shtat', 'eski şehir / tarihi merkez'],
    ['der Marktplatz', 'der MARKT-plats', 'pazar yeri / meydan'], ['die Burg', 'dee burk', 'kale / şato'],
    ['der Turm', 'der turm', 'kule'], ['der Ausflug', 'der AUS-fluk', 'gezi / gezinti']
  ]],
  31: ['Casa & Mobili', [
    ['das Wohnzsempre', 'das VON-tsi-mer', 'oturma odası'], ['das Schlafzsempre', 'das SHLAF-tsi-mer', 'yatak odası'],
    ['die Küche', 'dee KÜ-she', 'mutfak'], ['das Bad', 'das bad', 'banyo'],
    ['der Flur', 'der flur', 'koridor / antre'], ['der Balkon', 'der bal-KON', 'balkon'],
    ['der Garten', 'der GAR-ten', 'bahçe'], ['die Tür', 'dee tür', 'kapı'],
    ['das Fenster', 'das FEN-ster', 'pencere'], ['die Wand', 'dee vant', 'duvar'],
    ['das Dach', 'das dakh', 'çatı'], ['die Treppe', 'dee TRE-pe', 'merdiven'],
    ['der Tisch', 'der tish', 'masa'], ['der Stuhl', 'der shtul', 'sandalye'],
    ['das Sofa', 'das ZO-fa', 'kanepe'], ['das Bett', 'das bet', 'yatak'],
    ['der Schrank', 'der shrank', 'dolap'], ['das Regal', 'das re-GAL', 'raf'],
    ['die Lampe', 'dee LAM-pe', 'lamba'], ['der Teppich', 'der TE-pikh', 'halı'],
    ['der Spiegel', 'der SHPEE-gel', 'ayna'], ['der Kühlschrank', 'der KÜL-shrank', 'buzdolabı'],
    ['der Herd', 'der hayrt', 'ocak'], ['die Waschmaschine', 'dee VASH-ma-shi-ne', 'çamaşır makinesi'],
    ['der Staubsauger', 'der SHTAUP-zau-ger', 'elektrikli süpürge'], ['die Couch', 'dee kautsh', 'kanepe']
  ]],
  32: ['Abbigliamento', [
    ['die Abbigliamento', 'dee KLAY-dung', 'giysi / kıyafet'], ['das Hemd', 'das hemt', 'gömlek (erkek)'],
    ['die Bluse', 'dee BLU-ze', 'bluz'], ['die Hose', 'dee HO-ze', 'pantolon'],
    ['der Rock', 'der rok', 'etek'], ['das Kleid', 'das klayt', 'elbise'],
    ['der Anzug', 'der AN-tsuk', 'takım elbise'], ['die Jacke', 'dee YA-ke', 'ceket'],
    ['der Mantel', 'der MAN-tel', 'palto / mont'], ['der Pullover', 'der PUL-o-ver', 'kazak / süveter'],
    ['das T-Shirt', 'das TEE-shert', 'tişört'], ['die Jeans', 'dee jeans', 'kot pantolon'],
    ['die Schuhe', 'dee SHOO-e', 'ayakkabılar'], ['die Stiefel', 'dee SHTEE-fel', 'bot'],
    ['die Socke', 'dee ZO-ke', 'çorap'], ['der Hut', 'der hut', 'şapka'],
    ['der Schal', 'der shal', 'atkı / eşarp'], ['die Handschuhe', 'dee HANT-shoo-e', 'eldiven'],
    ['der Gürtel', 'der GÜR-tel', 'kemer'], ['die Krawatte', 'dee kra-VA-te', 'kravat'],
    ['das Kostüm', 'das kos-TÜM', 'kostüm / takım'], ['die Unterwäsche', 'dee UN-ter-veshe', 'iç çamaşırı'],
    ['tragen', 'TRAH-gen', 'giymek / taşımak'], ['provare', 'AN-pro-bee-ren', 'denemek (giysi)'],
    ['andare bene', 'PAS-sen', 'uymak'], ['la taglia', 'dee GRÖ-se', 'beden']
  ]],
  33: ['Natura & Ambiente', [
    ['die Natur', 'dee na-TUR', 'doğa'], ['der Wald', 'der valt', 'orman'],
    ['der Baum', 'der baum', 'ağaç'], ['die Blume', 'dee BLU-me', 'çiçek'],
    ['das Gras', 'das gras', 'çimen'], ['der Berg', 'der berk', 'dağ'],
    ['der Fluss', 'der flus', 'nehir'], ['der See', 'der zay', 'göl'],
    ['das Meer', 'das mayr', 'deniz'], ['der Strand', 'der shtrant', 'sahil'],
    ['il sole', 'dee ZO-ne', 'güneş'], ['der Mond', 'der mont', 'ay'],
    ['der Stern', 'der shtarn', 'yıldız'], ['der Himmel', 'der HI-mel', 'gökyüzü'],
    ['die Wolke', 'dee VOL-ke', 'bulut'], ['la pioggia', 'der RAY-gen', 'yağmur'],
    ['la neve', 'der shnay', 'kar'], ['der Wind', 'der vint', 'rüzgar'],
    ['die Umwelt', 'dee UM-velt', 'çevre'], ['der Müll', 'der mül', 'çöp'],
    ['recyceln', 're-TSAY-keln', 'geri dönüştürmek'], ['schützen', 'SHÜ-tsen', 'korumak'],
    ['die Pflanze', 'dee PFLAN-tse', 'bitki'], ['das Tier', 'das teer', 'hayvan'],
    ['der Vogel', 'der FO-gel', 'kuş'], ['il pesce', 'der fish', 'balık'],
    ['die Energie', 'dee en-er-GHEE', 'enerji']
  ]],
  34: ['Denaro & Finanza', [
    ['das Geld', 'das gelt', 'para'], ['der Euro', 'der OY-ro', 'euro'],
    ['der Cent', 'der tsent', 'sent'], ['die Bank', 'dee bank', 'banka'],
    ['das Konto', 'das KON-to', 'hesap (banka)'], ['die Kreditkarte', 'dee kre-DIT-kar-te', 'kredi kartı'],
    ['die EC-Karte', 'dee AY-Tsay kar-te', 'banka kartı (İtalya)'],
    ['bargeldlos', 'BAR-gelt-los', 'nakitsiz'], ['bar', 'bar', 'nakit'],
    ['pagare', 'be-TSA-len', 'ödemek'], ['kosten', 'KOS-ten', 'mal olmak / tutmak'],
    ['sparen', 'SHPAH-ren', 'biriktirmek / tasarruf etmek'], ['ausdare', 'AUS-ge-ben', 'harcamak'],
    ['verdienen', 'fer-DEE-nen', 'kazanmak (para)'], ['il conto', 'dee REKH-nung', 'fatura / hesap'],
    ['die Quittung', 'dee kvi-TUNG', 'fiş'], ['der Preis', 'der prays', 'fiyat'],
    ['lo sconto', 'der ra-BAT', 'indirim'], ['caro', 'TOY-er', 'pahalı'],
    ['economico', 'BIL-likh', 'ucuz'], ['kostenlos', 'KOS-ten-los', 'ücretsiz'],
    ['die Miete', 'dee MEE-te', 'kira'], ['das Gehalt', 'das ge-HALT', 'maaş'],
    ['die Versicherung', 'dee fer-ZI-khe-rung', 'sigorta'], ['die Scaro', 'dee SHTOY-er', 'vergi'],
    ['der Kredit', 'der kre-DIT', 'kredi'], ['die Schulden', 'dee SHUL-den', 'borçlar']
  ]],
  35: ['Scienza & Ricerca', [
    ['die Wissenschaft', 'dee VIS-sen-shaft', 'bilim'], ['die Forschung', 'dee FOR-shung', 'araştırma'],
    ['das Experiment', 'das eks-pe-ri-MENT', 'deney'], ['die Theorie', 'dee te-o-REE', 'teori'],
    ['die Praxis', 'dee PRAK-sis', 'pratik / uygulama'], ['der Beweis', 'der be-VAYS', 'kanıt / ispat'],
    ['die Hypothese', 'dee hü-po-TAY-ze', 'hipotez'], ['die Entdeckung', 'dee ent-DE-kung', 'keşif'],
    ['der Wissenschaftler', 'der VIS-sen-shaft-ler', 'bilim insanı'], ['das Labor', 'das la-BOR', 'laboratuvar'],
    ['die Chemie', 'dee KHE-mee', 'kimya'], ['die Physik', 'dee fü-ZIK', 'fizik'],
    ['die Biologie', 'dee bi-o-lo-GEE', 'biyoloji'], ['die Mathematik', 'dee ma-te-ma-TIK', 'matematik'],
    ['die Medizin', 'dee me-di-TSIN', 'tıp / ilaç'], ['der Arzt', 'der artst', 'doktor'],
    ['die Technik', 'dee TEKH-nik', 'teknik / mühendislik'], ['der Ingenieur', 'der in-zhe-NÖR', 'mühendis'],
    ['die Erfindung', 'dee er-FIN-dung', 'icat'], ['der Nobelpreis', 'der no-BEL-prays', 'Nobel ödülü'],
    ['analysieren', 'a-na-lü-ZEE-ren', 'analiz etmek'], ['untersuchen', 'UN-ter-zu-khen', 'incelemek / araştırmak'],
    ['beweisen', 'be-VAY-zen', 'kanıtlamak'], ['entdecken', 'ent-DE-ken', 'keşfetmek'],
    ['entwickeln', 'ent-VIK-keln', 'geliştirmek'], ['studieren', 'shtu-DEE-ren', 'okumak / incelemek']
  ]],
  36: ['Arte & Cultura', [
    ['die Kunst', 'dee kunst', 'sanat'], ['die Kultur', 'dee kul-TUR', 'kültür'],
    ['das Museum', 'das mu-ZAY-um', 'müze'], ['die Galerie', 'dee ga-le-REE', 'galeri'],
    ['das Gemälde', 'das ge-MEL-de', 'tablo / resim (sanat)'], ['die Skulptur', 'dee skulp-TUR', 'heykel'],
    ['der Künstler', 'der KÜNST-ler', 'sanatçı (erkek)'], ['die Ausstellung', 'dee AUS-shtel-lung', 'sergi'],
    ['das Konzert', 'das kon-TSERT', 'konser'], ['die Oper', 'dee O-per', 'opera'],
    ['das Theater', 'das te-A-ter', 'tiyatro'], ['der Schauspieler', 'der SHAUS-shpee-ler', 'oyuncu (erkek)'],
    ['die musica', 'dee mu-ZEEK', 'müzik'], ['das Lied', 'das leet', 'şarkı'],
    ['der Maler', 'der MAH-ler', 'ressam'], ['der Dichter', 'der DIKH-ter', 'şair'],
    ['der Schriftsteller', 'der SHRIFT-shtel-ler', 'yazar'], ['il libro', 'das bukh', 'kitap'],
    ['die Literatur', 'dee li-te-ra-TUR', 'edebiyat'], ['die Geschichte', 'dee ge-SHIKH-te', 'tarih / hikaye'],
    ['das Festival', 'das FES-ti-val', 'festival'], ['die Tradition', 'dee tra-di-TSI-on', 'gelenek'],
    ['das Brauchtum', 'das BRAUKH-tum', 'gelenek / adet'], ['feiern', 'FAY-ern', 'kutlamak'],
    ['bewundern', 'be-VUN-dern', 'hayran kalmak'], ['kreativ', 'kre-a-TEEF', 'yaratıcı'],
    ['inspirieren', 'in-shpi-REE-ren', 'ilham vermek']
  ]],
  37: ['Parole interrogative', [
    ['wer', 'vayr', 'kim'], ['was', 'vas', 'ne'], ['wo', 'vo', 'nerede'],
    ['wohin', 'vo-HIN', 'nereye'], ['woher', 'vo-HER', 'nereden'], ['wann', 'van', 'ne zaman'],
    ['wie', 'vee', 'nasıl'], ['warum', 'va-RUM', 'neden / niçin'], ['welcher/welche/welches', 'VEL-kher', 'hangi'],
    ['wieviel', 'VEE-feel', 'ne kadar (miktar)'], ['wieso', 'VEE-zo', 'niye / neden (günlük)'],
    ['weshalb', 'VES-halp', 'neden (resmi)'], ['womit', 'vo-MIT', 'ne ile / neyle'],
    ['worüber', 'vo-RÜ-ber', 'ne hakkında'], ['wofür', 'vo-FÜR', 'ne için'],
    ['wessen', 'VES-sen', 'kimin'], ['wie viel', 'vee feel', 'ne kadar'],
    ['wie spesso', 'vee spesso', 'ne sıklıkla'], ['wie lange', 'vee LANG-ge', 'ne kadar süre'],
    ['inwiefern', 'in-VEE-fern', 'hangi açıdan / ne ölçüde'], ['ob', 'op', '... mı (dolaylı soru)'],
    ['Wer bist du?', 'vayr bist du', 'Sen kimsin?'], ['Was machst du?', 'vas makhs du', 'Ne yapıyorsun?'],
    ['Wo wohnst du?', 'vo vonst du', 'Nerede yaşıyorsun?'], ['Wann kommst du?', 'van komst du', 'Ne zaman geliyorsun?'],
    ['Perché impari l\'italiano?', 'va-RUM lernst du doytsh', 'Neden İtalyanca öğreniyorsun?'], ['Wie heißt du?', 'vee hayst du', 'Adın ne?']
  ]],
  38: ['Professioni', [
    ['il medico / la medica', 'der artst / dee ERT-sin', 'doktor'], ['l\'insegnante', 'der LAY-rer / dee LAY-re-rin', 'öğretmen'],
    ['der Ingenieur / die Ingenieurin', 'der in-zhe-NÖR / dee in-zhe-nü-o-REE-nin', 'mühendis'],
    ['der Koch / die Köchin', 'der khok / dee KÖ-khin', 'aşçı'], ['der Kellner / die Kellnerin', 'der KEL-ner / dee KEL-ne-rin', 'garson'],
    ['der Polizist / die Polizistin', 'der po-li-TSIST / dee po-li-TSIS-tin', 'polis'],
    ['der Feuerwehrmann', 'der FOY-er-ver-man', 'itfaiyeci'], ['der Anwalt / die Anwältin', 'der AN-valt / dee AN-vel-tin', 'avukat'],
    ['der Architekt / die Architektin', 'der ar-khi-TEKT / dee ar-khi-TEK-tin', 'mimar'],
    ['der Mechaniker', 'der me-KHA-ni-ker', 'tamirci / mekanik'], ['der Elektriker', 'der e-lek-TRI-ker', 'elektrikçi'],
    ['der Friseur / die Friseurin', 'der fri-ZÖR / dee fri-ZÖ-rin', 'kuaför / berber'],
    ['der Bäcker / die Bäckerin', 'der BE-ker / dee BE-ke-rin', 'fırıncı'],
    ['der Verkäufer / die Verkäuferin', 'der fer-KOY-fer / dee fer-KOY-fe-rin', 'satış elemanı'],
    ['der Programmierer', 'der pro-gram-MEE-rer', 'yazılımcı'], ['der Journalist', 'der zhur-na-LIST', 'gazeteci'],
    ['der Fotograf', 'der fo-to-GRAF', 'fotoğrafçı'], ['der musicaer', 'der MU-zi-ker', 'müzisyen'],
    ['der Schauspieler', 'der SHAUS-shpee-ler', 'oyuncu'], ['der Pilot', 'der pi-LOT', 'pilot'],
    ['der Krankenpfleger', 'der KRANK-en-pfle-ger', 'hemşire (erkek) / sağlık görevlisi'],
    ['lo studente / la studentessa', 'der shtu-DENT / dee shtu-DEN-tin', 'öğrenci'],
    ['der Rentner', 'der RENT-ner', 'emekli'], ['der Chef / die Chefin', 'der shef / dee she-fin', 'patron / müdür'],
    ['der Arbeiter', 'der AR-bay-ter', 'işçi'], ['der Bauer', 'der BAU-er', 'çiftçi']
  ]],
  39: ['Pensiero & Opinione', [
    ['pensare', 'DEN-ken', 'düşünmek'], ['glauben', 'GLAU-ben', 'inanmak / sanmak'],
    ['meinen', 'MAY-nen', 'düşünmek / kastetmek'], ['trovare', 'FIN-den', 'bulmak / düşünmek'],
    ['verstehen', 'fer-SHTAY-en', 'anlamak'], ['zustimmen', 'TSU-shtim-men', 'katılmak / aynı fikirde olmak'],
    ['widersprechen', 'VI-der-shpre-khen', 'karşı çıkmak / itiraz etmek'], ['diskutieren', 'dis-ku-TEE-ren', 'tartışmak'],
    ['argumentieren', 'ar-gu-men-TEE-ren', 'argüman sunmak'], ['überzeugen', 'ü-ber-TSOY-gen', 'ikna etmek'],
    ['die Meinung', 'dee MAY-nung', 'görüş / fikir'], ['die Ansicht', 'dee AN-zikht', 'görüş / bakış açısı'],
    ['die Idee', 'dee i-DAY', 'fikir / idea'], ['der Standpunkt', 'der SHTANT-punkt', 'görüş / duruş'],
    ['Ich denke, dass...', 'ikh DEN-ke, das', 'Sanırım ki...'], ['Meiner Meinung nach...', 'MAY-ner MAY-nung nakh', 'Bence...'],
    ['Sono dell\'opinione che...', 'ikh bin der MAY-nung, das', 'Kanaatimce...'], ['Ich finde...', 'ikh FIN-de', 'Bence... / ... buluyorum'],
    ['Stimmt!', 'shtimt', 'Doğru! / Haklısın!'], ['Das stimmt nicht.', 'das shtimt nikht', 'Bu doğru değil.'],
    ['Vielleicht', 'fi-LAY-kht', 'belki'], ['Wahrscheinlich', 'var-SHAYn-likh', 'muhtemelen'],
    ['Sicher', 'ZI-kher', 'kesinlikle / eminim'], ['Zweifellos', 'TSVAY-fel-los', 'şüphesiz'],
    ['Interessant!', 'in-te-re-SANT', 'İlginç!'], ['Das ist eine buonoe Frage.', 'das ist AY-ne GU-te FRA-ge', 'Bu iyi bir soru.']
  ]],
  40: ['Animali', [
    ['il cane', 'der hunt', 'köpek'], ['il gatto', 'dee KAT-tse', 'kedi'], ['das Pferd', 'das pfayrt', 'at'],
    ['die Kuh', 'dee ku', 'inek'], ['das Schwein', 'das shvayn', 'domuz'], ['das Schaf', 'das shaf', 'koyun'],
    ['die Ziege', 'dee TSEE-ge', 'keçi'], ['das Huhn', 'das hun', 'tavuk (hayvan)'],
    ['der Hahn', 'der han', 'horoz'], ['das Kaninchen', 'das ka-NIN-khen', 'tavşan'],
    ['der Vogel', 'der FO-gel', 'kuş'], ['die Maus', 'dee maus', 'fare'],
    ['der Bär', 'der bayr', 'ayı'], ['der Wolf', 'der volf', 'kurt'],
    ['der Fuchs', 'der fuks', 'tilki'], ['der Löwe', 'der LÖ-ve', 'aslan'],
    ['der Elefant', 'der e-le-FANT', 'fil'], ['die Giraffe', 'dee zhi-RA-fe', 'zürafa'],
    ['das Krokodil', 'das kro-ko-DEEL', 'timsah'], ['die Schlange', 'dee SHLANG-ge', 'yılan'],
    ['il pesce', 'der fish', 'balık'], ['der Hai', 'der hay', 'köpekbalığı'],
    ['der Delphin', 'der DEL-fin', 'yunus'], ['der Wal', 'der val', 'balina'],
    ['die Biene', 'dee BEE-ne', 'arı'], ['der Schmetterling', 'der SHMET-ter-ling', 'kelebek'],
    ['der Hase', 'der HAH-ze', 'tavşan (yabani)'], ['das Eichhörnchen', 'das AYK-hörnkhen', 'sincap']
  ]],
  41: ['Vocabolario salute', [
    ['die Gesundheit', 'dee ge-ZUNT-hayt', 'sağlık'], ['malato', 'malato', 'hasta'],
    ['gesund', 'ge-ZUNT', 'sağlıklı'], ['der Schmerz / die Schmerzen', 'der shmerts / dee SHMER-tsen', 'ağrı'],
    ['das Fieber', 'das FEE-ber', 'ateş'], ['der Husten', 'der HUS-ten', 'öksürük'],
    ['die Erkältung', 'dee er-KEL-tung', 'soğuk algınlığı'], ['die Grippe', 'dee GRI-pe', 'grip'],
    ['die Allergie', 'dee a-LER-zhee', 'alerji'], ['das Medikament', 'das me-di-ka-MENT', 'ilaç'],
    ['das Rezept', 'das re-TSEPT', 'reçete'], ['la farmacia', 'dee a-po-TAY-ke', 'eczane'],
    ['il medico / la medica', 'der artst / dee ERT-sin', 'doktor'],
    ['l\'ospedale', 'das KRANK-en-haus', 'hastane'], ['der Notfall', 'der NOT-fal', 'acil durum'],
    ['der Notarzt', 'der NOT-artst', 'acil doktor'], ['die Krankenversicherung', 'dee KRANK-en-fer-ZI-khe-rung', 'sağlık sigortası'],
    ['die Impfung', 'dee IMP-fung', 'aşı'], ['sich impfen lassen', 'zikh IMP-fen LA-sen', 'aşı olmak'],
    ['der Blutdruck', 'der BLUT-druk', 'tansiyon / kan basıncı'], ['der Puls', 'der puls', 'nabız'],
    ['übel', 'Ü-bel', 'mide bulantısı / kötü hissetme'], ['schwindlig', 'SHVINT-likh', 'baş dönmesi'],
    ['sich erholen', 'zikh er-HO-len', 'dinlenmek / iyileşmek'], ['heilen', 'HAY-len', 'iyileştirmek / iyileşmek'],
    ['operieren', 'o-pe-REE-ren', 'ameliyat etmek / ameliyat olmak'], ['die Operation', 'dee o-pe-ra-TSI-on', 'ameliyat']
  ]],
  42: ['Italiano accademico', [
    ['l\'università', 'dee u-ni-ver-zi-TET', 'üniversite'], ['die Vorlesung', 'dee FOR-le-zung', 'ders (üniversite)'],
    ['das Seminar', 'das ze-mi-NAR', 'seminer'], ['die Prüfung', 'dee PRÜ-fung', 'sınav'],
    ['die Klausur', 'dee KLAU-zur', 'yazılı sınav'], ['die Hausarbeit', 'dee HAUS-ar-bayt', 'ev ödevi / araştırma yazısı'],
    ['die Bachelorarbeit', 'dee BE-khe-lor-ar-bayt', 'lisans tezi'], ['die Masterarbeit', 'dee MAS-ter-ar-bayt', 'yüksek lisans tezi'],
    ['die Dissertation', 'dee di-ser-ta-TSI-on', 'doktora tezi'], ['der Professor', 'der pro-FES-sor', 'profesör'],
    ['der Dozent', 'der do-TSEnt', 'doçent / öğretim görevlisi'], ['lo studente / la studentessa', 'der shtu-DENT / dee shtu-DEN-tin', 'öğrenci'],
    ['das Fach', 'das fakh', 'branş / ders alanı'], ['das Semester', 'das ze-MES-ter', 'dönem / sömestr'],
    ['einschreiben', 'AYN-shray-ben', 'kaydolmak (üniversite)'], ['bestehen', 'be-SHTAY-en', 'geçmek (sınav)'],
    ['durchfallen', 'DURKH-fal-en', 'kalmak (sınav)'], ['das Stipendium', 'das shti-PEN-di-um', 'burs'],
    ['die Bibliothek', 'dee bi-ble-o-TAYK', 'kütüphane'], ['recherchieren', 're-sher-SHEE-ren', 'araştırmak'],
    ['zitieren', 'tsee-TEE-ren', 'alıntı yapmak'], ['das Quellenverzeichnis', 'das KVEL-len-fer-tsaykh-nis', 'kaynakça'],
    ['die These', 'dee TAY-ze', 'tez / sav'], ['argumentieren', 'ar-gu-men-TEE-ren', 'argüman sunmak'],
    ['analysieren', 'a-na-lü-ZEE-ren', 'analiz etmek'], ['zusammenfassen', 'tsu-ZA-men-fa-sen', 'özetlemek']
  ]],
  43: ['Tecnologia & Vita digitale', [
    ['der Computer', 'der kom-PYU-ter', 'bilgisayar'], ['das Smartphone', 'das SMART-fon', 'akıllı telefon'],
    ['das Internet', 'das IN-ter-net', 'internet'], ['die Website', 'dee VEB-sayt', 'web sitesi'],
    ['die App', 'dee ep', 'uygulama'], ['die Sspessoware', 'dee SOFT-ver', 'yazılım'],
    ['die Hardware', 'dee HARD-ver', 'donanım'], ['das Passwort', 'das PAS-vort', 'şifre'],
    ['der Benutzername', 'der be-NUT-ser-na-me', 'kullanıcı adı'], ['einloggen', 'AYN-log-gen', 'giriş yapmak (login)'],
    ['ausloggen', 'AUS-log-gen', 'çıkış yapmak (logout)'], ['herunterladen', 'he-RUN-ter-lah-den', 'indirmek'],
    ['hochladen', 'HOKH-lah-den', 'yüklemek'], ['speichern', 'SHPY-khern', 'kaydetmek'],
    ['löschen', 'LÖ-shen', 'silmek'], ['der Cloud-Speicher', 'der klaut-SHPY-kher', 'bulut depolama'],
    ['die KI / künstliche Intelligenz', 'dee ka-INST-likhe in-tel-li-GHENTS', 'yapay zeka'],
    ['der Algorithmus', 'der al-go-RIT-mus', 'algoritma'], ['die Datenschutz', 'dee DA-ten-shuts', 'veri koruma / gizlilik'],
    ['die Cybersecurity', 'dee SY-ber-si-kyu-RI-tee', 'siber güvenlik'], ['hacken', 'HE-ken', 'hacklemek'],
    ['der Virus', 'der VEE-rus', 'virüs'], ['aktualisieren', 'ak-tu-a-li-ZEE-ren', 'güncellemek'],
    ['installieren', 'in-sta-li-ZEE-ren', 'yüklemek / kurmak'], ['die Benachgiustoung', 'dee be-NAAKH-rikh-ti-gung', 'bildirim'],
    ['streamen', 'SHTREE-men', 'yayın izlemek / stream'], ['online', 'ON-layn', 'çevrimiçi'],
    ['offline', 'OFF-layn', 'çevrimdışı']
  ]],
  44: ['Espressioni sociali', [
    ['Congratulazioni!', 'HER-ts-likh-en GLÜK-vunsh', 'Tebrikler! / Kutlarım!'],
    ['Alles Gute!', 'A-les GU-te', 'Her şey gönlünce! / İyi ki doğdun!'],
    ['Guarisci presto!', 'GU-te BE-ser-ung', 'Geçmiş olsun!'],
    ['Buon appetito!', 'GU-ten a-pe-TEET', 'Afiyet olsun!'],
    ['Cin cin!', 'prost', 'Şerefe!'],
    ['Prost Mahlzeit!', 'prost MAHL-tsayt', 'Afiyet olsun! (yemek öncesi)'],
    ['Gesundheit!', 'ge-ZUNT-hayt', 'Çok yaşa! (hapşırık sonrası)'],
    ['Benvenuto!', 'VIL-ko-men', 'Hoş geldiniz!'],
    ['Schön, dass du da bist!', 'shön, das du da bist', 'Burada olman güzel!'],
    ['Viel Erfolg!', 'feel er-FOLK', 'Başarılar!'],
    ['Viel Spaß!', 'feel shpas', 'İyi eğlenceler!'],
    ['Buon fine settimana!', 'SHÖ-nes VO-khen-en-de', 'İyi hafta sonları!'],
    ['Schönen Urlaub!', 'SHÖ-nen UR-laup', 'İyi tatiller!'],
    ['Gute Reise!', 'GU-te RAY-ze', 'İyi yolculuklar!'],
    ['Mi dispiace.', 'es tut meer layt', 'Üzgünüm.'],
    ['Nessun problema.', 'kayn pro-BLAYM', 'Sorun değil.'],
    ['Keine Ursache.', 'KAY-ne UR-zau-khe', 'Önemli değil / Rica ederim.'],
    ['Das freut mich!', 'das froyt mikh', 'Buna sevindim!'],
    ['Wie schade!', 'vee SHAH-de', 'Ne yazık! / Çok kötü!'],
    ['Stimmt!', 'shtimt', 'Doğru! / Aynen!'],
    ['Genau!', 'ge-NAU', 'Aynen! / Tam olarak!'],
    ['Na klar!', 'na klar', 'Tabii ki! / Elbette!'],
    ['Mach\'s buono!', 'maks buono', 'Kendine iyi bak! / Hoşça kal! (samimi)'],
    ['Bis bald!', 'bis balt', 'Yakında görüşürüz!'],
    ['Schöne Grüße!', 'SHÖ-ne GRÜ-se', 'Selamlar! / Sevgiler!']
  ]],
  45: ['Geografia & Mondo', [
    ['die Welt', 'dee velt', 'dünya'], ['der Kontinent', 'der kon-ti-NENT', 'kıta'],
    ['Europa', 'oy-RO-pa', 'Avrupa'], ['Asien', 'AH-zi-en', 'Asya'], ['Afrika', 'AF-ri-ka', 'Afrika'],
    ['Nordamerika', 'NORT-a-me-ri-ka', 'Kuzey Amerika'], ['Südamerika', 'ZÜT-a-me-ri-ka', 'Güney Amerika'],
    ['Australien', 'aus-TRA-lyen', 'Avustralya'], ['die Antarktis', 'dee an-TARK-tis', 'Antarktika'],
    ['Italia', 'DOYTSH-lant', 'İtalya'], ['la Turchia', 'dee TÜR-kay', 'Türkiye'],
    ['Österreich', 'ÖS-ter-aykh', 'Avusturya'], ['die Schweiz', 'dee shvayts', 'İsviçre'],
    ['Francia', 'FRANK-rikh', 'Fransa'], ['Italia', 'i-TA-lyen', 'İtalya'],
    ['Spagna', 'SHPA-nyen', 'İspanya'], ['England / Großbritannien', 'ENG-lant / GROS-bri-ta-nyen', 'İngiltere / Büyük Britanya'],
    ['die USA', 'dee U-es-A', 'ABD'], ['Russland', 'RUS-lant', 'Rusya'],
    ['China', 'KHEE-na', 'Çin'], ['Japan', 'ya-PAN', 'Japonya'],
    ['der Ozean', 'der o-tse-AN', 'okyanus'], ['der Atlantik', 'der at-LAN-tik', 'Atlas Okyanusu'],
    ['die Hauptstadt', 'dee HAUPT-shtat', 'başkent'], ['die Grenze', 'dee GREN-tse', 'sınır'],
    ['die Landkarte', 'dee LANT-kar-te', 'harita'], ['der Globus', 'der GLO-bus', 'küre / dünya küresi']
  ]],
  46: ['Verbi d\'azione', [
    ['andare', 'GAY-en', 'gitmek'], ['venire', 'KO-men', 'gelmek'], ['fahren', 'FAH-ren', 'gitmek (araçla)'],
    ['laufen', 'LAU-fen', 'koşmak / yürümek'], ['fliegen', 'FLEE-gen', 'uçmak'], ['schwimmen', 'SHVIM-men', 'yüzmek'],
    ['springen', 'SHPRING-en', 'zıplamak / atlamak'], ['klettern', 'KLET-tern', 'tırmanmak'],
    ['werfen', 'VER-fen', 'atmak / fırlatmak'], ['fangen', 'FANG-en', 'yakalamak'],
    ['tragen', 'TRAH-gen', 'taşımak / giymek'], ['heben', 'HAY-ben', 'kaldırmak'],
    ['drücken', 'DRÜ-ken', 'itmek / basmak'], ['ziehen', 'TSEE-en', 'çekmek'],
    ['öffnen', 'ÖF-nen', 'açmak'], ['schließen', 'SHLEE-sen', 'kapatmak'],
    ['bauen', 'BAU-en', 'inşa etmek / yapmak'], ['reparieren', 're-pa-REE-ren', 'tamir etmek'],
    ['kochen', 'KO-khen', 'yemek yapmak'], ['backen', 'BA-ken', 'fırında pişirmek / hamur işi yapmak'],
    ['schneiden', 'SHNAY-den', 'kesmek'], ['mischen', 'MI-shen', 'karıştırmak'],
    ['waschen', 'VA-shen', 'yıkamak'], ['putzen', 'PUT-tsen', 'temizlemek'],
    ['suchen', 'ZU-khen', 'aramak'], ['trovare', 'FIN-den', 'bulmak'],
    ['dare', 'GAY-ben', 'vermek'], ['prendere', 'NAY-men', 'almak'],
    ['comprare', 'KAU-fen', 'satın almak'], ['vercomprare', 'fer-KAU-fen', 'satmak']
  ]],
  47: ['Storia & Società', [
    ['die Geschichte', 'dee ge-SHIKH-te', 'tarih / hikaye'], ['die Vergangenheit', 'dee fer-GANG-en-hayt', 'geçmiş'],
    ['die Gegenwart', 'dee GE-gen-vart', 'günümüz / şimdiki zaman'], ['die Zukunft', 'dee TSU-kunft', 'gelecek'],
    ['der Krieg', 'der kreek', 'savaş'], ['der Frieden', 'der FRI-den', 'barış'],
    ['die Revolution', 'dee re-vo-lu-TSI-on', 'devrim'], ['das Reich', 'das raykh', 'imparatorluk / devlet'],
    ['der Kaiser', 'der KAY-zer', 'imparator'], ['die Demokratie', 'dee de-mo-kra-TEE', 'demokrasi'],
    ['die Diktatur', 'dee dik-ta-TUR', 'diktatörlük'], ['die Freiheit', 'dee FRAY-hayt', 'özgürlük'],
    ['die Gleichheit', 'dee GLAYKH-hayt', 'eşitlik'], ['die Gerechtigkeit', 'dee ge-REKH-tikh-kayt', 'adalet'],
    ['die Gesellschaft', 'dee ge-ZEL-shaft', 'toplum'], ['die Kultur', 'dee kul-TUR', 'kültür'],
    ['die Tradition', 'dee tra-di-TSI-on', 'gelenek'], ['der Brauch', 'der braukh', 'adet / gelenek'],
    ['das Fest', 'das fest', 'bayram / festival'], ['Weihnachten', 'VAY-nakht-en', 'Noel'],
    ['Ostern', 'OS-tern', 'Paskalya'], ['Oktoberfest', 'ok-TO-ber-fest', 'Oktoberfest (İtalya)'],
    ['die Mauer', 'dee MAU-er', 'duvar (Berlin Duvarı vb.)'], ['die Einheit', 'dee AYN-hayt', 'birlik'],
    ['die Einwanderung', 'dee AYN-van-de-rung', 'göç / göçmenlik'], ['die Integration', 'dee in-te-g-Ra-TSI-on', 'entegrasyon'],
    ['die Meinungsfreiheit', 'dee MAY-nungs-fray-hayt', 'ifade özgürlüğü'], ['wählen', 'VAY-len', 'oy vermek / seçmek']
  ]],
  48: ['Modi di dire & Proverbi', [
    ['Alles in Ordnung.', 'A-les in ORD-nung', 'Her şey yolunda.'],
    ['Das ist nicht mein Bier.', 'das ist nikht mayn beer', 'Bu beni ilgilendirmez. (günlük)'],
    ['Da steppt der Bär.', 'da shtept der bayr', 'Orada eğlence dorukta. / Harika bir yer.'],
    ['Ich verstehe nur Bahnhof.', 'ikh fer-SHTAY-e nur BAHN-hof', 'Hiçbir şey anlamıyorum.'],
    ['Das ist mir Wurst.', 'das ist meer vurst', 'Umurumda değil. (günlük)'],
    ['Tomaten auf den Augen avere', 'to-MA-ten auf den AUG-en HA-ben', 'Görmemezlikten gelmek.'],
    ['Die Daumen drücken!', 'dee DAU-men DRÜ-ken', 'Başarı dilemek! (parmakları çaprazla)'],
    ['Schwein gehabt!', 'shvayn ge-HA-pt', 'Şanslısın! / Kurtuldun!'],
    ['Das geht auf keine Kuhhaut.', 'das gayt auf KAY-ne KOO-haut', 'Bu çok abartı / inanılmaz.'],
    ['Jemandem auf den Keks andare', 'YAY-men-dem auf den keks GAY-en', 'Birini rahatsız etmek / sinirini bozmak.'],
    ['Ich glaube, ich spinne.', 'ikh GLAU-be, ikh SHPI-ne', 'Sanırım rüya görüyorum. / İnanamıyorum.'],
    ['Das ist ein Kinderspiel.', 'das ist ayn KIN-der-shpeel', 'Bu çocuk oyuncağı. / Çok kolay.'],
    ['Hals- und Beinbruch!', 'hals unt BAYN-brukh', 'Kırılacak bir yere git! (sahne öncesi)'],
    ['In den sauren Apfel beißen', 'in den ZAU-er-n AP-fel BEE-zen', 'Dişini sıkmak / zor bir şeyi kabul etmek.'],
    ['Etwas auf dem Schirm avere', 'ET-vas auf dem shirm HA-ben', 'Bir şeyi aklında/planında tutmak.'],
    ['Unter einer Decke stecken', 'UN-ter AY-ner DE-ke SHTE-ken', 'Aynı işi birlikte yapmak / gizlice anlaşmak.'],
    ['Das ist der Hammer!', 'das ist der HA-mer', 'Bu harika! / İnanılmaz! (günlük)'],
    ['Mal vedere.', 'mal ZAY-en', 'Göreceğiz. / Bakalım.'],
    ['Langsam aber sicher.', 'LANG-zam AH-ber ZI-kher', 'Yavaş ama emin adımlarla.'],
    ['Übung macht den Meister.', 'Ü-bung makht den MAYS-ter', 'Alıştırma ustalaştırır.'],
    ['Aller Anfang ist difficile.', 'A-ler AN-fang ist shvayr', 'Her başlangıç zordur.'],
    ['Morgenstund hat Gold im Mund.', 'MOR-gen-shtunt hat gold im munt', 'Erken kalkan yol alır.'],
    ['Was du oggi kannst besorgen, das verschiebe nicht auf domani.', 'vas du HOY-te kanst be-ZOR-gen, das fer-SHEE-be nikht auf MOR-gen', 'Bugünün işini yarına bırakma.'],
    ['In der Kürze liegt die Würze.', 'in der KÜR-tse leet dee VÜR-tse', 'Kısa ve öz olmak güzeldir.'],
    ['Andere Länder, andere Sitten.', 'AN-de-re LEN-der, AN-de-re ZIT-en', 'Her ülkenin adeti farklı.']
  ]],
  49: ['Ripasso misto & Avanzato', [
    ['obwohl', 'op-VOHL', 'rağmen / -e rağmen'], ['trossozdem', 'TROTST-dem', 'yine de / buna rağmen'],
    ['deshalb', 'DES-halp', 'bu yüzden'], ['deswegen', 'des-VAY-gen', 'bu nedenle'],
    ['außerdem', 'AUS-ser-dem', 'ayrıca / bunun dışında'], ['jedoch', 'ye-DOKH', 'ancak / fakat'],
    ['allerdings', 'A-ler-dings', 'ne var ki / ancak'], ['zwar... aber', 'tsvar... AH-ber', '... ise de, ama'],
    ['sowohl... als auch', 'zo-VOHL... als auch', 'hem... hem de'], ['entweder... oder', 'ent-VAY-der... O-der', 'ya... ya da'],
    ['weder... noch', 'VAY-der... nokh', 'ne... ne de'], ['je... desto', 'ye... DES-to', 'ne kadar... o kadar'],
    ['falls', 'fals', 'eğer / -mesi halinde'], ['sobald', 'zo-BALT', '... r olur olmaz'],
    ['bevor', 'be-FOR', '... den önce'], ['nachdem', 'NAKH-dem', '... den sonra'],
    ['während', 'VAY-rent', '... iken / sırasında'], ['bis', 'bis', '... e kadar'],
    ['seit', 'zayt', '... den beri'], ['ohne', 'O-ne', '... siz / -meden'],
    ['statt', 'shtat', '... yerine'], ['wegen', 'VAY-gen', '... yüzünden / nedeniyle'],
    ['laut', 'laut', '... ya göre / ... e göre'], ['gemäß', 'ge-MES', '... e uygun olarak'],
    ['bezüglich', 'be-TÜG-likh', '... ile ilgili / hakkında'], ['hinsichtlich', 'HIN-zikht-likh', '... açısından'],
    ['infolge', 'IN-fol-ge', '... sonucu olarak'], ['trossoz', 'trossos', '... e rağmen (+ genitiv)'],
    ['anstatt', 'AN-shtat', '... yerine'], ['innerhalb', 'IN-er-halp', '... içinde / ... dahilinde'],
    ['außerhalb', 'AUS-ser-halp', '... dışında'], ['einschließlich', 'AYN-shlis-likh', '... dahil']
  ]]
};

// ─── All lessons map ─────────────────────────────────────────
const ALL = {
  1: ['Greetings & Introductions', L1],
  2: ['Articoli & essere', L2],
  3: ['Numbers & Money', L3],
  4: ['Time & Date', L4],
  5: ['Restaurant & Food', L5],
  6: ['Shopping', L6],
  7: ['Directions', L7],
  8: ['Transport & Travel', L8],
  9: ['Hotel & Accommodation', L9],
  10: ['Work & Business', L10],
  11: ['Health', L11],
  12: ['Phone & Communication', L12],
  13: ['Social Life', L13],
  14: ['Home & Living', L14],
  15: ['Education & School', L15],
  16: ['Countries & Nationalities', L16],
  17: ['Emotions & Feelings', L17],
  18: ['Weather', L18],
  19: ['Entertainment & Hobbies', L19],
  20: ['Daily Conversation Practice', L20]
};

// Add vocab lessons
for (const [n, [title, entries]] of Object.entries(VOCAB)) {
  ALL[n] = [title, buildVocabLesson(+n, title, entries)];
}

// ─── Write files ─────────────────────────────────────────────
let created = 0;
const errors = [];

for (let n = 1; n <= 49; n++) {
  try {
    const [title, data] = ALL[n];
    const tag = n <= 20 ? 'beginner' : 'vocabulary';
    const content = render(n, title, data, tag);
    writeFileSync(join(OUT_DIR, `ders${n}.js`), content, 'utf8');
    created++;
  } catch (e) {
    errors.push({ n, error: e.message });
  }
}

console.log(`\n✓ Generated ${created}/49 Italian lesson files in ${OUT_DIR}`);
if (errors.length) {
  console.error('\nErrors:');
  errors.forEach(({ n, error }) => console.error(`  ders${n}.js: ${error}`));
} else {
  console.log('No errors.');
}
console.log('\nFiles: ders1.js – ders49.js');
