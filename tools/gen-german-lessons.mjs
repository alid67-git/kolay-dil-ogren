#!/usr/bin/env node
/**
 * Generates German lesson files ders1.js – ders49.js
 * Run: node tools/gen-german-lessons.mjs
 */
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '../languages/de/lessons');
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
  return `// ders${n}.js — German Lesson ${n}: ${title} (${tag})\nconst L${n} = ${ser(data, 0)};\nLESSONS[${n}] = L${n};\n`;
}

// ─── Lesson 1: Greetings ─────────────────────────────────────
const L1 = scenario('Greetings & Introductions',
  [
    W('w1', 'Hallo', 'HA-lo', 'Merhaba',
      { tip: 'En yaygın selamlama.', ctx: 'Resmi ve gayri resmi her ortamda.',
        ex: { en: 'Hallo!', tr: 'Merhaba!', bd: [BD('Hallo', 'Merhaba', 'greeting', 'Almancada en sık kullanılan selam. Günün her saatinde geçerlidir.')] } }),
    W('w2', 'Guten Morgen', 'GU-ten MOR-gen', 'Günaydın',
      { tip: 'Sabah selamlaması.', ctx: 'Sabah ~11:00\'a kadar.',
        ex: { en: 'Guten Morgen!', tr: 'Günaydın!', bd: [BD('Guten', 'İyi', 'K', 'Gut sıfatının çekimli hali — Morgen\'i nitelendirir.'), BD('Morgen', 'sabah', 'O', 'Sabah selamlaması öğlene kadar söylenir.')] } }),
    W('w3', 'Guten Tag', 'GU-ten TAK', 'İyi günler',
      { tip: 'Gündüz selamlaması.', ctx: 'Öğleden akşama kadar.',
        ex: { en: 'Guten Tag!', tr: 'İyi günler!', bd: [BD('Guten Tag', 'İyi günler', 'greeting', 'Resmi ortamlarda (banka, ofis) çok kullanılır. Tag = gün.')] } }),
    W('w4', 'Guten Abend', 'GU-ten A-bent', 'İyi akşamlar',
      { tip: 'Akşam selamlaması.', ctx: 'Akşam saatlerinde.',
        ex: { en: 'Guten Abend!', tr: 'İyi akşamlar!', bd: [BD('Abend', 'akşam', 'O', 'Genellikle 18:00\'den sonra kullanılır.')] } }),
    W('w5', 'Auf Wiedersehen', 'auf VEE-der-ze-en', 'Hoşça kalın / Görüşürüz',
      { tip: 'Resmi veda.', ctx: 'Resmi ortamlarda.',
        ex: { en: 'Auf Wiedersehen!', tr: 'Hoşça kalın!', bd: [BD('Auf Wiedersehen', 'Görüşmek üzere', 'farewell', 'Resmi veda — müşteri, iş ortamı, tanımadığınız kişilerle.')] } }),
    W('w6', 'Tschüss', 'tshüs', 'Hoşça kal / Güle güle',
      { tip: 'Samimi veda.', ctx: 'Arkadaşlar, aile arasında.',
        ex: { en: 'Tschüss!', tr: 'Hoşça kal!', bd: [BD('Tschüss', 'Hoşça kal', 'farewell', 'Günlük konuşmada en sık veda. Auf Wiedersehen\'den daha samimi.')] } }),
    W('w7', 'Danke', 'DAN-ke', 'Teşekkür ederim',
      { tip: 'Minnet ifadesi.', ctx: 'Her yerde.',
        ex: { en: 'Danke schön!', tr: 'Çok teşekkür ederim!', bd: [BD('Danke', 'Teşekkür', 'V', 'Tek başına yeterli. schön = güzel → "güzel teşekkürler".')] } }),
    W('w8', 'Bitte', 'BIT-te', 'Lütfen / Rica ederim',
      { tip: 'Nezaket kelimesi.', ctx: 'İstek veya teşekküre cevap.',
        ex: { en: 'Bitte schön.', tr: 'Buyurun / Rica ederim.', bd: [BD('Bitte', 'Lütfen', 'courtesy', 'İstek yaparken veya "danke"ye cevap olarak kullanılır.')] } }),
    W('w9', 'Ja', 'ya', 'Evet',
      { ex: { en: 'Ja, natürlich.', tr: 'Evet, tabii ki.', bd: [BD('Ja', 'Evet', 'phrase', 'Onay cevabı.')] } }),
    W('w10', 'Nein', 'nayn', 'Hayır',
      { ex: { en: 'Nein, danke.', tr: 'Hayır, teşekkürler.', bd: [BD('Nein', 'Hayır', 'phrase', 'Red cevabı. danke ile birlikte kibar red: "Hayır, teşekkürler".')] } }),
    W('w11', 'Ich heiße ...', 'ikh HAI-se', 'Benim adım ... / Adım ...',
      { tip: 'Kendini tanıtma.', ctx: 'İlk tanışmada.',
        ex: { en: 'Ich heiße Ali.', tr: 'Benim adım Ali.', bd: [BD('Ich', 'Ben', 'S', '1. tekil özne.'), BD('heiße', 'adım ... / ... denirim', 'V', 'heißen fiili — isim söylemek için. ich → heiße (özel çekim).'), BD('Ali', 'Ali', 'name', 'Özel isim — büyük harfle.')] } }),
    W('w12', 'Freut mich', 'froyt mikh', 'Tanıştığıma memnun oldum',
      { tip: 'Tanışma ifadesi.', ctx: 'Yeni biriyle tanışınca.',
        ex: { en: 'Freut mich!', tr: 'Memnun oldum!', bd: [BD('Freut mich', 'Beni sevindirdi', 'phrase', 'Kısaltma: Es freut mich, Sie kennenzulernen. Günlük konuşmada sadece "Freut mich" yeterli.')] } }),
    W('w13', 'Wie geht es Ihnen?', 'vee GAYT es EE-nen', 'Nasılsınız? (resmi)',
      { tip: 'Resmi hal hatır sorusu.', ctx: 'Sie ile hitap ederken.',
        ex: { en: 'Wie geht es Ihnen?', tr: 'Nasılsınız?', bd: [BD('Wie', 'Nasıl', 'question', 'Soru kelimesi.'), BD('geht es', 'gidiyor mu', 'V', 'gehen fiili — "es geht" = gidiyor, oluyor.'), BD('Ihnen', 'size', 'O', 'Resmi hitap — Sie\'nin dativ hali.')] } }),
    W('w14', 'Mir geht es gut', 'meer GAYT es gut', 'İyiyim',
      { tip: 'Standart cevap.', ctx: 'Wie geht es? sorusuna.',
        ex: { en: 'Mir geht es gut, danke.', tr: 'İyiyim, teşekkürler.', bd: [BD('Mir', 'Bana', 'O', 'Dativ — "bana" anlamında.'), BD('geht es gut', 'iyi gidiyor', 'V', 'Es geht gut = iyiyim. Almancada durum dativ ile ifade edilir.')] } })
  ],
  [
    G('g1', 'Selamlaşma — Guten + Zaman', 'Greetings by Time of Day',
      'Almancada selam, günün saatine göre değişir. "Guten" = iyi; ardından zaman kelimesi gelir. Sabah: Guten Morgen. Gündüz: Guten Tag. Akşam: Guten Abend. Gece: Gute Nacht (sadece yatarken).',
      [
        { pronoun: 'Sabah', form: 'Guten Morgen', example: 'Guten Morgen!', tr: 'Günaydın!' },
        { pronoun: 'Gündüz', form: 'Guten Tag', example: 'Guten Tag!', tr: 'İyi günler!' },
        { pronoun: 'Akşam', form: 'Guten Abend', example: 'Guten Abend!', tr: 'İyi akşamlar!' },
        { pronoun: 'Her zaman', form: 'Hallo', example: 'Hallo!', tr: 'Merhaba!' }
      ],
      'Türkçede tek "Merhaba" yeter; Almancada saat fark eder. Resmi ortamda Guten Tag tercih edilir.'),
    G('g2', 'Sie vs du — Resmi ve Samimi Hitap', 'Formal vs Informal Address',
      'Almancada iki hitap var: du (sen) — arkadaş, aile, yaşıt. Sie (Siz) — tanımadığınız, yaşlı, resmi ortam. Sie BÜYÜK harfle yazılır. Ali erkek öğrenci olarak yeni tanışmalarda Sie kullanır; karşı taraf "Wir können du sagen" derse du\'ya geçilir.',
      [
        { pronoun: 'Samimi', form: 'du / dich / dir', example: 'Wie heißt du?', tr: 'Adın ne?' },
        { pronoun: 'Resmi', form: 'Sie / Ihnen', example: 'Wie heißen Sie?', tr: 'Adınız ne?' },
        { pronoun: 'Tanışma', form: 'Freut mich', example: 'Freut mich!', tr: 'Memnun oldum.' },
        { pronoun: 'Veda', form: 'Tschüss / Auf Wiedersehen', example: 'Auf Wiedersehen!', tr: 'Hoşça kalın.' }
      ],
      'İş görüşmesi, doktor, mağaza çalışanı → Sie. Arkadaş, sınıf arkadaşı → du. Kararsız kalırsan Sie ile başla.')
  ],
  [
    SP('sp1', 'Hallo!', 'Merhaba!', 'Selamla'),
    SP('sp2', 'Guten Morgen!', 'Günaydın!', 'Sabah selamı söyle'),
    SP('sp3', 'Ich heiße Ali.', 'Benim adım Ali.', 'Adını söyle'),
    SP('sp4', 'Freut mich!', 'Tanıştığıma memnun oldum.', 'Tanışma ifadesi',
      { gramNote: 'Tanışma kalıbı — yeni biriyle tanışınca. Es freut mich kısaltması.' }),
    SP('sp5', 'Danke. Auf Wiedersehen!', 'Teşekkürler. Hoşça kalın!', 'Teşekkür et ve vedalaş')
  ],
  [
    DL('d1', 'İlk Tanışma', 'First Meeting', [
      LN('A', 'm', 'Hallo!', 'Merhaba!', 'En yaygın selamlama. Her ortamda kullanılır.',
        [BD('Hallo', 'Merhaba', 'greeting', 'Resmi ve gayri resmi — günün her saati.')]),
      LN('B', 'f', 'Guten Tag!', 'İyi günler!', 'Gündüz resmi selamlama. Tag = gün.',
        [BD('Guten Tag', 'İyi günler', 'greeting', 'Ofis, mağaza gibi resmi ortamlarda tercih edilir.')]),
      LN('A', 'm', 'Ich heiße Ali. Und Sie?', 'Benim adım Ali. Ya siz?',
        'Kendini tanıtma + karşı tarafa sorma. Und = ve, ya. Sie = resmi "siz".',
        [BD('Ich heiße', 'Adım', 'V', 'heißen = adlandırılmak. ich → heiße.'), BD('Ali', 'Ali', 'name', 'Özel isim.'), BD('Und Sie', 'Ya siz', 'question', 'Resmi hitapla isim sorma.')]),
      LN('B', 'f', 'Ich heiße Anna. Freut mich!', 'Benim adım Anna. Memnun oldum!',
        'İsim + tanışma ifadesi. Freut mich = tanıştığıma sevindim.',
        [BD('Ich heiße Anna', 'Adım Anna', 'V', 'Kendini tanıtma.'), BD('Freut mich', 'Memnun oldum', 'phrase', 'Es freut mich kısaltması.')]),
      LN('A', 'm', 'Freut mich auch. Auf Wiedersehen!', 'Ben de memnun oldum. Hoşça kalın!',
        'auch = de/da. Resmi veda.',
        [BD('auch', 'de / da', 'K', 'Karşı tarafa katılma.'), BD('Auf Wiedersehen', 'Hoşça kalın', 'farewell', 'Resmi veda.')]),
      LN('B', 'f', 'Tschüss!', 'Hoşça kal!', 'Samimi veda — tanışma sonrası du\'ya geçilmiş olabilir.',
        [BD('Tschüss', 'Hoşça kal', 'farewell', 'Günlük konuşmada en sık veda.')])
    ]),
    DL('d2', 'Hal Hatır', 'How Are You', [
      LN('A', 'f', 'Guten Morgen!', 'Günaydın!', 'Sabah selamlaması.',
        [BD('Guten Morgen', 'Günaydın', 'greeting', 'Öğlene kadar kullanılır.')]),
      LN('B', 'm', 'Guten Morgen!', 'Günaydın!', 'Aynı selamlamaya karşılık.',
        [BD('Guten Morgen', 'Günaydın', 'greeting', 'Karşılıklı selam.')]),
      LN('A', 'f', 'Wie geht es Ihnen?', 'Nasılsınız?', 'Resmi hal hatır. es geht = gidiyor (durum).',
        [BD('Wie geht es Ihnen', 'Nasılsınız', 'question', 'Ihnen = size (dativ). Resmi form.')]),
      LN('B', 'm', 'Mir geht es gut, danke. Und Ihnen?', 'İyiyim, teşekkürler. Ya size?',
        'Standart cevap. Mir = bana (dativ).',
        [BD('Mir geht es gut', 'İyiyim', 'V', 'Dativ yapı — Türkçede yok.'), BD('danke', 'teşekkürler', 'courtesy', 'Nezaket.'), BD('Und Ihnen', 'Ya size', 'question', 'Karşılık sorma.')]),
      LN('A', 'f', 'Mir geht es auch gut. Auf Wiedersehen!', 'Ben de iyiyim. Hoşça kalın!',
        'Olumlu cevap + veda.',
        [BD('auch gut', 'ben de iyi', 'V', 'auch = de/da.'), BD('Auf Wiedersehen', 'Hoşça kalın', 'farewell', 'Resmi ayrılık.')])
    ])
  ],
  [
    LI('li1', 'Hallo! Ich heiße Emma. Freut mich!', 'Merhaba! Benim adım Emma. Memnun oldum!',
      [Q('Wie heißt sie?', ['Emma', 'Ali', 'Anna', 'Tom'], 0, 'Adı ne?'),
       Q('Welche Begrüßung benutzt sie?', ['Auf Wiedersehen', 'Hallo', 'Gute Nacht', 'Tschüss'], 1, 'Hangi selamı kullanıyor?'),
       Q('Was sagt sie nach dem Namen?', ['Danke', 'Freut mich', 'Bitte', 'Nein'], 1, 'İsminden sonra ne diyor?')])
  ]
);

// ─── Lesson 2: Artikel & sein ────────────────────────────────
const L2 = scenario('Artikel & sein',
  [
    W('w1', 'der Mann', 'der MAN', 'adam (eril)', { tip: 'Eril artikel: der.', ctx: 'Maskulin isimler der alır.',
      ex: { en: 'Der Mann ist groß.', tr: 'Adam uzun boylu.', bd: [BD('Der', 'Belirli eril artikel', 'K', 'der = the (eril). Mann maskulin → der.'), BD('Mann', 'adam', 'O', 'Maskulin isim.'), BD('ist groß', 'uzun boylu', 'V', 'sein + sıfat.')] } }),
    W('w2', 'die Frau', 'dee FRAU', 'kadın (dişil)', { tip: 'Dişil artikel: die.', ctx: 'Feminin isimler die alır.',
      ex: { en: 'Die Frau ist nett.', tr: 'Kadın nazik.', bd: [BD('Die', 'Belirli dişil artikel', 'K', 'die = the (dişil).'), BD('Frau', 'kadın', 'O', 'Feminin isim.'), BD('ist nett', 'nazik', 'V', 'sein + sıfat.')] } }),
    W('w3', 'das Kind', 'das KINT', 'çocuk (nötr)', { tip: 'Nötr artikel: das.', ctx: 'Neutrum isimler das alır.',
      ex: { en: 'Das Kind spielt.', tr: 'Çocuk oynuyor.', bd: [BD('Das', 'Belirli nötr artikel', 'K', 'das = the (nötr).'), BD('Kind', 'çocuk', 'O', 'Neutrum isim — cinsiyet belirtmez.')] } }),
    W('w4', 'ein Mann', 'ayn MAN', 'bir adam', { tip: 'Belirsiz eril artikel: ein.', ctx: 'Sayılmayan tekil eril.',
      ex: { en: 'Das ist ein Mann.', tr: 'Bu bir adam.', bd: [BD('ein', 'bir (eril)', 'K', 'Belirsiz artikel — eril ve nötr için ein.'), BD('Mann', 'adam', 'O', 'Maskulin.')] } }),
    W('w5', 'eine Frau', 'AY-ne FRAU', 'bir kadın', { tip: 'Belirsiz dişil artikel: eine.', ctx: 'Sayılmayan tekil dişil.',
      ex: { en: 'Sie ist eine Lehrerin.', tr: 'O bir öğretmen.', bd: [BD('eine', 'bir (dişil)', 'K', 'Belirsiz artikel — sadece dişil için eine.'), BD('Lehrerin', 'öğretmen (kadın)', 'O', 'Dişil meslek ismi -in eki alır.')] } }),
    W('w6', 'ich bin', 'ikh bin', 'ben ...im / ben ...yim', { tip: 'sein — 1. tekil.', ctx: 'Kendini tanıtma, durum.',
      ex: { en: 'Ich bin Ali.', tr: 'Ben Ali\'yim.', bd: [BD('Ich', 'Ben', 'S', '1. tekil özne.'), BD('bin', '...im / ...yim', 'V', 'sein fiili — ich ile bin. Türkçede "-im/-yim" eki karşılığı.')] } }),
    W('w7', 'du bist', 'du bist', 'sen ...sin', { tip: 'sein — 2. tekil samimi.', ctx: 'Arkadaşlarla.',
      ex: { en: 'Du bist freundlich.', tr: 'Sen dost canlısısın.', bd: [BD('Du', 'Sen', 'S', 'Samimi hitap.'), BD('bist', '...sin', 'V', 'du ile bist.')] } }),
    W('w8', 'er ist / sie ist', 'er ist / zee ist', 'o ... (erkek/kadın)', { tip: 'sein — 3. tekil.', ctx: 'Başkasından bahsederken.',
      ex: { en: 'Er ist Student.', tr: 'O (erkek) öğrenci.', bd: [BD('Er', 'O (erkek)', 'S', '3. tekil eril.'), BD('ist', '...dir', 'V', 'er/sie/es ile ist.'), BD('Student', 'öğrenci (erkek)', 'O', 'Maskulin meslek.')] } }),
    W('w9', 'wir sind', 'veer zint', 'biz ...iz', { tip: 'sein — 1. çoğul.', ctx: 'Grup halinde.',
      ex: { en: 'Wir sind Freunde.', tr: 'Biz arkadaşız.', bd: [BD('Wir', 'Biz', 'S', '1. çoğul.'), BD('sind', '...iz', 'V', 'wir/sie/Sie ile sind.')] } }),
    W('w10', 'der Tisch', 'der TISH', 'masa', { tip: 'Maskulin — der.', ctx: 'Ev eşyası.',
      ex: { en: 'Der Tisch ist groß.', tr: 'Masa büyük.', bd: [BD('Der Tisch', 'masa', 'O', 'Tisch maskulin → der.')] } }),
    W('w11', 'die Tür', 'dee TÜR', 'kapı', { tip: 'Feminin — die.', ctx: 'Ev eşyası.',
      ex: { en: 'Die Tür ist offen.', tr: 'Kapı açık.', bd: [BD('Die Tür', 'kapı', 'O', 'Tür feminin → die.')] } }),
    W('w12', 'das Buch', 'das BUKH', 'kitap', { tip: 'Neutrum — das.', ctx: 'Eşya.',
      ex: { en: 'Das Buch ist interessant.', tr: 'Kitap ilginç.', bd: [BD('Das Buch', 'kitap', 'O', 'Buch neutrum → das.')] } })
  ],
  [
    G('g1', 'Belirli Artikel — der / die / das', 'Definite Articles',
      'Almancada her ismin cinsiyeti vardır: maskulin (eril), feminin (dişil), neutrum (nötr). Belirli artikel (the = the) cinsiyete göre değişir: der (eril), die (dişil), das (nötr). Çoğulda hepsi die olur. Türkçede artikel yok — bu Almanca\'nın en zor kısmı. İsimle birlikte artikelini ezberle: der Tisch, die Tür, das Buch.',
      [
        { pronoun: 'Eril (m)', form: 'der', example: 'der Mann, der Tisch', tr: 'adam, masa' },
        { pronoun: 'Dişil (f)', form: 'die', example: 'die Frau, die Tür', tr: 'kadın, kapı' },
        { pronoun: 'Nötr (n)', form: 'das', example: 'das Kind, das Buch', tr: 'çocuk, kitap' },
        { pronoun: 'Çoğul', form: 'die', example: 'die Männer, die Kinder', tr: 'adamlar, çocuklar' }
      ],
      'İpucu: Sözlükte her ismin yanında artikel yazar: der Hund (köpek), die Katze (kedi). Ezberle!'),
    G('g2', 'Belirsiz Artikel — ein / eine', 'Indefinite Articles',
      'Belirsiz artikel "bir" anlamında: ein (eril/nötr), eine (dişil). Çoğulda belirsiz artikel yok — sadece isim: Männer (adamlar). Olumsuzda "kein" kullanılır (sonraki derslerde).',
      [
        { pronoun: 'Eril/Nötr', form: 'ein', example: 'ein Mann, ein Kind', tr: 'bir adam, bir çocuk' },
        { pronoun: 'Dişil', form: 'eine', example: 'eine Frau, eine Tür', tr: 'bir kadın, bir kapı' },
        { pronoun: 'Olumlu', form: 'Das ist ein ...', example: 'Das ist ein Buch.', tr: 'Bu bir kitap.' },
        { pronoun: 'Meslek', form: 'Er ist ein ...', example: 'Er ist ein Arzt.', tr: 'O bir doktor.' }
      ],
      'ein + maskulin/nötr, eine + feminin. Artikel ismin cinsiyetini gösterir.'),
    G('g3', 'Fiil: sein (olmak) — Tüm Çekimler', 'Verb: sein (to be)',
      'sein = olmak. Almancanın en önemli fiili. Türkçedeki "-im, -sin, -dir" ve "var/yok" yapısının temeli. Düzensiz fiil — ezberle! Sie (resmi Siz) büyük harfle yazılır ve sind alır — sie (onlar) ile aynı fiil ama bağlamdan anlaşılır.',
      [
        { pronoun: 'ich', form: 'bin', example: 'Ich bin Ali.', tr: 'Ben Ali\'yim.' },
        { pronoun: 'du', form: 'bist', example: 'Du bist nett.', tr: 'Sen naziksin.' },
        { pronoun: 'er/sie/es', form: 'ist', example: 'Er ist Lehrer.', tr: 'O öğretmen.' },
        { pronoun: 'wir', form: 'sind', example: 'Wir sind Freunde.', tr: 'Biz arkadaşız.' },
        { pronoun: 'ihr', form: 'seid', example: 'Ihr seid willkommen.', tr: 'Hoş geldiniz.' },
        { pronoun: 'sie/Sie', form: 'sind', example: 'Sie sind freundlich.', tr: 'Siz naziksiniz / Onlar nazik.' }
      ],
      'sein + sıfat/isim: Ich bin müde (yorgunum). sein + meslek: Ich bin Student. Soru: Bist du müde? Ist er da?')
  ],
  [
    SP('sp1', 'Ich bin Ali.', 'Ben Ali\'yim.', 'Kendini tanıt (sein)', { gramNote: 'ich + bin — sein fiili 1. tekil.' }),
    SP('sp2', 'Das ist ein Buch.', 'Bu bir kitap.', 'Belirsiz artikel kullan', { gramNote: 'das (nötr) + ist + ein Buch (nötr).' }),
    SP('sp3', 'Der Mann ist groß.', 'Adam uzun boylu.', 'der + isim + sein + sıfat'),
    SP('sp4', 'Die Frau ist nett.', 'Kadın nazik.', 'die + isim + sein + sıfat'),
    SP('sp5', 'Wir sind Freunde.', 'Biz arkadaşız.', 'wir + sind — sein çoğul')
  ],
  [
    DL('d1', 'Artikel Alıştırması', 'Article Practice', [
      LN('A', 'm', 'Was ist das?', 'Bu ne?', 'Was ist das? = Bu nedir? — tanımadığın bir şeyi sorarken.',
        [BD('Was', 'Ne', 'question', 'Soru kelimesi.'), BD('ist das', 'bu ...dır', 'V', 'sein — das (nötr) ile ist.')]),
      LN('B', 'f', 'Das ist ein Tisch.', 'Bu bir masa.', 'Das ist ein ... = Bu bir ... Tisch maskulin ama das ile başlarız.',
        [BD('Das ist', 'Bu ...dır', 'V', 'Nötr gösteren das.'), BD('ein Tisch', 'bir masa', 'O', 'Tisch maskulin → ein (belirsiz).')]),
      LN('A', 'm', 'Und was ist das?', 'Peki bu ne?', 'Und = ve, peki.',
        [BD('Und', 'Ve / peki', 'K', 'Bağlaç.'), BD('was ist das', 'bu ne', 'question', 'Tekrar soru.')]),
      LN('B', 'f', 'Das ist die Tür.', 'Bu kapı.', 'Tür feminin → die (belirli). Tanıdığın şey için die.',
        [BD('die Tür', 'kapı', 'O', 'Tür feminin → die belirli artikel.')]),
      LN('A', 'm', 'Ist der Tisch groß?', 'Masa büyük mü?', 'Ja/Nein sorusu: fiil başa gelir.',
        [BD('Ist', '... mı?', 'V', 'Soru — fiil başta.'), BD('der Tisch', 'masa', 'S', 'Maskulin özne.'), BD('groß', 'büyük', 'adj', 'Sıfat — fiilden sonra.')]),
      LN('B', 'f', 'Ja, er ist groß.', 'Evet, o büyük.', 'er = der Tisch (eril isimler er ile zamir)',
        [BD('er', 'o (eril)', 'S', 'Maskulin isimler er zamir alır.'), BD('ist groß', 'büyük', 'V', 'sein + sıfat.')])
    ]),
    DL('d2', 'Kendini Tanıtma', 'Self Introduction with sein', [
      LN('A', 'm', 'Ich bin Ali. Ich bin Student.', 'Ben Ali. Ben öğrenciyim.', 'Zwei Sätze mit sein — isim + meslek.',
        [BD('Ich bin Ali', 'Ben Ali\'yim', 'V', 'sein + isim.'), BD('Ich bin Student', 'Öğrenciyim', 'V', 'sein + meslek — artikel yok.')]),
      LN('B', 'f', 'Schön! Ich bin Maria. Ich bin Lehrerin.', 'Güzel! Ben Maria. Ben öğretmenim.', 'Lehrerin = kadın öğretmen (feminin).',
        [BD('Schön', 'Güzel', 'adj', 'Olumlu tepki.'), BD('Lehrerin', 'öğretmen (kadın)', 'O', '-in eki dişil meslek.')]),
      LN('A', 'm', 'Sind Sie auch Lehrerin?', 'Siz de öğretmen misiniz?', 'Resmi soru — Sie + sind (fiil başta).',
        [BD('Sind Sie', 'Misiniz', 'V', 'Resmi soru — fiil başta.'), BD('auch', 'de / da', 'K', 'auch = de/da.')]),
      LN('B', 'f', 'Ja, ich bin Lehrerin. Und du? Bist du Student?', 'Evet, öğretmenim. Ya sen? Öğrenci misin?',
        'du\'ya geçiş — samimi ortam. Bist du = sen ... misin?',
        [BD('Bist du', 'Sen ... misin', 'V', 'du ile bist — samimi soru.'), BD('Student', 'öğrenci (erkek)', 'O', 'Ali erkek → Student.')]),
      LN('A', 'm', 'Ja, ich bin Student. Wir sind in ders eins!', 'Evet, öğrenciyim. Birinci dersteyiz!',
        [BD('Wir sind', 'Biz ...iz', 'V', 'wir + sind.'), BD('in ders eins', 'birinci derste', 'K', 'in + dativ — içinde.')])
    ])
  ],
  [
    LI('li1', 'Das ist ein Mann. Der Mann ist groß. Die Frau ist nett. Das Kind ist klein.',
      'Bu bir adam. Adam uzun boylu. Kadın nazik. Çocuk küçük.',
      [Q('Welcher Artikel hat "Mann"?', ['die', 'das', 'der', 'ein'], 2, '"Mann" hangi artikel alır?'),
       Q('Wie heißt "Frau" auf Türkisch?', ['çocuk', 'kadın', 'masa', 'kapı'], 1, '"Frau" Türkçede ne?'),
       Q('Was ist das Kind?', ['groß', 'klein', 'nett', 'offen'], 1, 'Çocuk nasıl?')])
  ]
);

// ─── Lesson 3: Numbers & Money ───────────────────────────────
function numWords() {
  const nums = [
    ['eins', 'ayns', 'bir'], ['zwei', 'tsvay', 'iki'], ['drei', 'dray', 'üç'], ['vier', 'feer', 'dört'],
    ['fünf', 'fünf', 'beş'], ['sechs', 'zeks', 'altı'], ['sieben', 'ZEE-ben', 'yedi'], ['acht', 'aht', 'sekiz'],
    ['neun', 'noyn', 'dokuz'], ['zehn', 'tsayn', 'on'], ['elf', 'elf', 'on bir'], ['zwölf', 'tsvölf', 'on iki'],
    ['zwanzig', 'TSVAN-tsikh', 'yirmi'], ['dreißig', 'DRAY-sikh', 'otuz'], ['hundert', 'HUN-dert', 'yüz'], ['tausend', 'TAU-zent', 'bin']
  ];
  return nums.map(([en, ro, tr], i) => W(`w${i + 1}`, en, ro, tr, i < 3 ? {
    tip: i === 0 ? 'Temel sayı.' : 'Sayma.',
    ctx: 'Sayılar ve miktar.',
    ex: { en: i === 0 ? 'Ich habe ein Buch.' : i === 1 ? 'Zwei Kaffee, bitte.' : `Es gibt ${en} Katzen.`,
      tr: i === 0 ? 'Bir kitabım var.' : i === 1 ? 'İki kahve, lütfen.' : `${tr.charAt(0).toUpperCase() + tr.slice(1)} kedi var.`,
      bd: [BD(en, tr, 'number', `${en} = ${tr}`)] }
  } : {}));
}

const L3 = scenario('Numbers & Money',
  [
    ...numWords(),
    W('w17', 'Wie viel kostet das?', 'vee feel KOS-tet das', 'Bu ne kadar?',
      { tip: 'Fiyat sormak.', ctx: 'Alışverişte.',
        ex: { en: 'Wie viel kostet das?', tr: 'Bu ne kadar?', bd: [BD('Wie viel', 'Ne kadar', 'question', 'Fiyat sorusu.'), BD('kostet das', 'bu ... tutar', 'V', 'kosten = mal olmak.')] } }),
    W('w18', 'Euro', 'OY-ro', 'euro',
      { ex: { en: 'Das kostet fünf Euro.', tr: 'Bu beş euro.', bd: [BD('fünf Euro', 'beş euro', 'currency', 'Euro Almanya para birimi.')] } }),
    W('w19', 'Cent', 'tsent', 'sent',
      { ex: { en: 'Das kostet neunundneunzig Cent.', tr: 'Bu doksan dokuz sent.', bd: [BD('Cent', 'sent', 'currency', '1 Euro = 100 Cent.')] } }),
    W('w20', 'die Rechnung', 'dee REKH-nung', 'hesap / fatura',
      { ex: { en: 'Die Rechnung, bitte.', tr: 'Hesap, lütfen.', bd: [BD('Rechnung', 'hesap', 'O', 'Feminin → die. Restoranda hesap isterken.')] } })
  ],
  [
    G('g1', 'Almanca Sayılar 1–20', 'German Numbers 1–20',
      'Almanca sayılar genelde düzenli. 13–19: sayı + zehn (dreizehn = 13). Dikkat: sechs → sechzehn, sieben → siebzehn. eins bir sayı olarak kalır; artikel olarak ein kullanılır.',
      [
        { pronoun: '1–10', form: 'eins ... zehn', example: 'eins, zwei, drei...', tr: 'bir ... on' },
        { pronoun: '11–12', form: 'elf, zwölf', example: 'elf, zwölf', tr: 'on bir, on iki' },
        { pronoun: '13–19', form: '-zehn', example: 'dreizehn, vierzehn', tr: 'on üç, on dört' },
        { pronoun: 'Onluklar', form: '-zig', example: 'zwanzig, dreißig', tr: 'yirmi, otuz' }
      ],
      '21+: birler + und + onluk: einundzwanzig = 21, zweiunddreißig = 32'),
    G('g2', 'Para — Euro und Cent', 'Money — Euro and Cent',
      'Almanya Euro (€) kullanır. Fiyat sormak: Wie viel kostet das? / Was kostet das? Cevap: Das kostet ... Euro (und ... Cent). Virgül ondalık için: 3,50 € = drei Euro fünfzig.',
      [
        { pronoun: 'Soru', form: 'Wie viel kostet...?', example: 'Wie viel kostet das?', tr: 'Bu ne kadar?' },
        { pronoun: 'Cevap', form: 'Das kostet...', example: 'Das kostet zehn Euro.', tr: 'Bu on euro.' },
        { pronoun: 'Hesap', form: 'Die Rechnung, bitte', example: 'Die Rechnung, bitte.', tr: 'Hesap, lütfen.' },
        { pronoun: 'Ödeme', form: 'Bar / mit Karte', example: 'Kann ich mit Karte zahlen?', tr: 'Kartla ödeyebilir miyim?' }
      ],
      'Almanya\'da nakit hâlâ yaygın. "Bar oder Karte?" = Nakit mi kart mı?')
  ],
  [
    SP('sp1', 'Zwei Kaffee, bitte.', 'İki kahve, lütfen.', 'Sayı ile sipariş ver'),
    SP('sp2', 'Das kostet fünf Euro.', 'Bu beş euro.', 'Fiyat söyle'),
    SP('sp3', 'Wie viel kostet das?', 'Bu ne kadar?', 'Fiyat sor'),
    SP('sp4', 'Ich habe zwanzig Euro.', 'Yirmi eurom var.', 'Paranı söyle'),
    SP('sp5', 'Die Rechnung, bitte.', 'Hesap, lütfen.', 'Hesap iste')
  ],
  [
    DL('d1', 'Im Café', 'At the Café', [
      LN('A', 'm', 'Zwei Kaffee, bitte.', 'İki kahve, lütfen.', 'Sayı + isim. Kaffee maskulin → zwei Kaffee (çoğulda artikel yok).',
        [BD('Zwei Kaffee', 'İki kahve', 'O', 'Sayı + isim — çoğulda artikel düşer.')]),
      LN('B', 'f', 'Sonst noch etwas?', 'Başka bir şey?', 'Sonst = başka, noch = daha, etwas = bir şey.',
        [BD('Sonst noch etwas', 'Başka bir şey', 'question', 'Sipariş tamamlama sorusu.')]),
      LN('A', 'm', 'Nein, danke. Wie viel kostet das?', 'Hayır, teşekkürler. Ne kadar?',
        [BD('Wie viel kostet das', 'Ne kadar', 'question', 'Fiyat sorusu.')]),
      LN('B', 'f', 'Das macht sechs Euro fünfzig.', 'Toplam altı euro elli.', 'Das macht = toplam ... tutar.',
        [BD('Das macht', 'Toplam ... tutar', 'V', 'Alışverişte toplam fiyat.')]),
      LN('A', 'm', 'Hier, bitte. Danke!', 'Buyurun. Teşekkürler!', 'Hier = burada, işte (para verirken).',
        [BD('Hier', 'Buyurun / işte', 'K', 'Para uzatırken.')])
    ])
  ],
  [
    LI('li1', 'Der Kaffee kostet drei Euro. Das Brot kostet zwei Euro fünfzig. Zusammen macht das fünf Euro fünfzig.',
      'Kahve üç euro. Ekmek iki euro elli. Toplam beş euro elli.',
      [Q('Wie viel kostet der Kaffee?', ['2 €', '3 €', '5 €', '6 €'], 1, 'Kahve ne kadar?'),
       Q('Wie viel kostet das Brot?', ['2,50 €', '3 €', '5 €', '5,50 €'], 0, 'Ekmek ne kadar?'),
       Q('Wie viel kostet alles zusammen?', ['3 €', '5,05 €', '5,50 €', '6 €'], 2, 'Toplam ne kadar?')])
  ]
);

// ─── Helper: compact scenario builder ────────────────────────
function mkScenarioWords(list) {
  return list.map(([id, en, ro, tr, o = {}], i) => W(id || `w${i + 1}`, en, ro, tr, o));
}

function mkVocabWords(list) {
  return list.map(([en, ro, tr, ex], i) => {
    const o = {};
    if (ex) o.ex = ex;
    return W(`w${i + 1}`, en, ro, tr, o);
  });
}

// ─── Lessons 4–20: Scenario topics ───────────────────────────
const L4 = scenario('Time & Date',
  mkScenarioWords([
    ['w1', 'Wie spät ist es?', 'vee shpayt ist es', 'Saat kaç?', { tip: 'Saat sormak.', ex: { en: 'Entschuldigung, wie spät ist es?', tr: 'Pardon, saat kaç?', bd: [BD('Wie spät ist es', 'Saat kaç', 'question', 'Resmi ortamda Entschuldigung ekle.')] } }],
    ['w2', 'Es ist drei Uhr', 'es ist dray ur', 'Saat üç', { ex: { en: 'Es ist drei Uhr.', tr: 'Saat üç.', bd: [BD('Es ist', 'Saat ...', 'V', 'Es = nötr zamir. Uhr = saat.')] } }],
    ['w3', 'der Morgen', 'der MOR-gen', 'sabah'],
    ['w4', 'der Nachmittag', 'der NAKH-mi-tak', 'öğleden sonra'],
    ['w5', 'der Abend', 'der A-bent', 'akşam'],
    ['w6', 'die Nacht', 'dee NAKHT', 'gece'],
    ['w7', 'heute', 'HOY-te', 'bugün'],
    ['w8', 'morgen', 'MOR-gen', 'yarın'],
    ['w9', 'gestern', 'GES-tern', 'dün'],
    ['w10', 'Montag', 'MON-tak', 'Pazartesi'],
    ['w11', 'Dienstag', 'DEENS-tak', 'Salı'],
    ['w12', 'Mittwoch', 'MIT-vokh', 'Çarşamba'],
    ['w13', 'Donnerstag', 'DO-ner-stak', 'Perşembe'],
    ['w14', 'Freitag', 'FRAY-tak', 'Cuma'],
    ['w15', 'Samstag', 'ZAMS-tak', 'Cumartesi'],
    ['w16', 'Sonntag', 'ZON-tak', 'Pazar'],
    ['w17', 'der Januar', 'der YAN-oo-ar', 'Ocak'],
    ['w18', 'der Juli', 'der YOO-lee', 'Temmuz'],
    ['w19', 'Wann?', 'van', 'Ne zaman?'],
    ['w20', 'Um wie viel Uhr?', 'um vee feel ur', 'Saat kaçta?']
  ]),
  [G('g1', 'Saat Sorma ve Söyleme', 'Telling Time',
    'Almancada saat: Es ist ... Uhr. 15:00 = Es ist fünfzehn Uhr (resmi) veya Es ist drei Uhr (gündüz). Viertel nach = çeyrek geçe, halb = buçuk.',
    [{ pronoun: 'Tam saat', form: 'Es ist ... Uhr', example: 'Es ist drei Uhr.', tr: 'Saat üç.' },
     { pronoun: 'Buçuk', form: 'halb ...', example: 'Es ist halb vier.', tr: 'Saat üç buçuk.' },
     { pronoun: 'Soru', form: 'Wie spät ist es?', example: 'Wie spät ist es?', tr: 'Saat kaç?' },
     { pronoun: 'Randevu', form: 'Um ... Uhr', example: 'Um acht Uhr.', tr: 'Saat sekizde.' }],
    'halb vier = 3:30 (Almancada yarım dördüncü saate gidilir — Türkçeden farklı!)'),
   G('g2', 'Günler ve Aylar', 'Days and Months',
    'Günler ve aylar büyük harfle yazılır. am Montag = pazartesi günü. im Januar = ocak ayında. Wann? = ne zaman?',
    [{ pronoun: 'Günler', form: 'Montag ... Sonntag', example: 'Am Montag.', tr: 'Pazartesi günü.' },
     { pronoun: 'Aylar', form: 'Januar ... Dezember', example: 'Im Juli.', tr: 'Temmuz\'da.' },
     { pronoun: 'Bugün', form: 'heute / morgen / gestern', example: 'Heute ist Freitag.', tr: 'Bugün cuma.' },
     { pronoun: 'Soru', form: 'Wann?', example: 'Wann beginnt der Kurs?', tr: 'Kurs ne zaman başlıyor?' }],
    'am + gün, im + ay, um + saat — edatları ezberle.')],
  [SP('sp1', 'Wie spät ist es?', 'Saat kaç?', 'Saat sor'),
   SP('sp2', 'Es ist zehn Uhr.', 'Saat on.', 'Saati söyle'),
   SP('sp3', 'Heute ist Montag.', 'Bugün pazartesi.', 'Bugünün gününü söyle'),
   SP('sp4', 'Morgen habe ich Zeit.', 'Yarın vaktim var.', 'Yarın hakkında konuş'),
   SP('sp5', 'Um neun Uhr, bitte.', 'Saat dokuzda, lütfen.', 'Randevu saati belirt')],
  [DL('d1', 'Termin vereinbaren', 'Making an Appointment', [
    LN('A', 'm', 'Wann haben Sie Zeit?', 'Ne zaman müsait siniz?', 'Resmi randevu sorusu.',
      [BD('Wann', 'Ne zaman', 'question', 'Zaman sorusu.'), BD('haben Sie Zeit', 'müsait misiniz', 'V', 'Zeit haben = vakti olmak.')]),
    LN('B', 'f', 'Am Dienstag um zehn Uhr?', 'Salı saat onda?', 'Öneri — am + gün, um + saat.',
      [BD('Am Dienstag', 'Salı günü', 'K', 'am + gün.'), BD('um zehn Uhr', 'saat onda', 'K', 'um + saat.')]),
    LN('A', 'm', 'Ja, das passt. Bis Dienstag!', 'Evet, uyar. Salıya kadar!', 'Das passt = uyar, olur.',
      [BD('Das passt', 'Uyar / olur', 'V', 'Günlük kabul ifadesi.')]),
    LN('B', 'f', 'Bis Dienstag. Auf Wiedersehen!', 'Salıya kadar. Hoşça kalın!', 'Bis = ...e kadar.',
      [BD('Bis Dienstag', 'Salıya kadar', 'farewell', 'Bis + zaman = ...e kadar.')])
  ])],
  [LI('li1', 'Heute ist Mittwoch, der fünfzehnte März. Der Unterricht beginnt um neun Uhr und endet um elf Uhr.',
    'Bugün çarşamba, 15 Mart. Ders saat dokuzda başlıyor ve saat on birde bitiyor.',
    [Q('Welcher Tag ist heute?', ['Montag', 'Dienstag', 'Mittwoch', 'Freitag'], 2, 'Bugün hangi gün?'),
     Q('Wann beginnt der Unterricht?', ['8 Uhr', '9 Uhr', '10 Uhr', '11 Uhr'], 1, 'Ders ne zaman başlıyor?'),
     Q('Wann endet der Unterricht?', ['9 Uhr', '10 Uhr', '11 Uhr', '12 Uhr'], 2, 'Ders ne zaman bitiyor?')])]
);

const L5 = scenario('Restaurant & Food',
  mkScenarioWords([
    ['w1', 'Einen Tisch für zwei, bitte.', 'AY-nen tish führ tsvay, bit-te', 'İki kişilik masa, lütfen.', { tip: 'Masa isteme.', ex: { en: 'Guten Abend. Einen Tisch für zwei, bitte.', tr: 'İyi akşamlar. İki kişilik masa, lütfen.', bd: [BD('Einen Tisch', 'bir masa (aküsatif)', 'O', 'Maskulin aküsatif: den → einen.')] } }],
    ['w2', 'die Speisekarte', 'dee SHPY-ze-kar-te', 'menü'],
    ['w3', 'bestellen', 'be-SHTEL-len', 'sipariş vermek'],
    ['w4', 'Ich hätte gern...', 'ikh HET-te gern', '... alabilir miyim / ... istiyorum', { tip: 'Nazik sipariş.', ex: { en: 'Ich hätte gern einen Kaffee.', tr: 'Bir kahve istiyorum.', bd: [BD('Ich hätte gern', 'İstiyorum', 'modal', 'Restoranda nazik sipariş kalıbı.')] } }],
    ['w5', 'die Vorspeise', 'dee FOR-shpy-ze', 'başlangıç yemeği'],
    ['w6', 'das Hauptgericht', 'das HAUPT-ge-rikht', 'ana yemek'],
    ['w7', 'der Nachtisch', 'der NAKH-tish', 'tatlı'],
    ['w8', 'das Getränk', 'das ge-TRENK', 'içecek'],
    ['w9', 'das Wasser', 'das VAS-ser', 'su'],
    ['w10', 'der Kaffee', 'der ka-FE', 'kahve'],
    ['w11', 'der Tee', 'der tay', 'çay'],
    ['w12', 'der Saft', 'der zaft', 'meyve suyu'],
    ['w13', 'das Brot', 'das brot', 'ekmek'],
    ['w14', 'die Suppe', 'dee ZU-pe', 'çorba'],
    ['w15', 'der Salat', 'der za-LAT', 'salata'],
    ['w16', 'das Hähnchen', 'das HEN-khen', 'tavuk'],
    ['w17', 'das Rindfleisch', 'das RINT-flysh', 'sığır eti'],
    ['w18', 'der Fisch', 'der fish', 'balık'],
    ['w19', 'vegetarisch', 've-ge-TA-rish', 'vejetaryen'],
    ['w20', 'lecker', 'LE-ker', 'lezzetli'],
    ['w21', 'die Rechnung', 'dee REKH-nung', 'hesap'],
    ['w22', 'das Trinkgeld', 'das TRINK-gelt', 'bahşiş'],
    ['w23', 'die Reservierung', 'dee re-zer-vee-RUNG', 'rezervasyon'],
    ['w24', 'allergisch', 'a-LER-gish', 'alerjik'],
    ['w25', 'Guten Appetit!', 'GU-ten a-pe-TEET', 'Afiyet olsun']
  ]),
  [G('g1', 'Restoranda Sipariş Verme', 'Ordering at a Restaurant',
    'Almanya\'da garsona el kaldırılır veya göz teması kurulur. Ich hätte gern... = nazik sipariş. Noch etwas? = Başka bir şey? Die Rechnung, bitte = Hesap lütfen.',
    [{ pronoun: 'Nazik istek', form: 'Ich hätte gern...', example: 'Ich hätte gern die Suppe.', tr: 'Çorba istiyorum.' },
     { pronoun: 'Soru', form: 'Was empfehlen Sie?', example: 'Was empfehlen Sie?', tr: 'Ne tavsiye edersiniz?' },
     { pronoun: 'Hesap', form: 'Die Rechnung, bitte', example: 'Die Rechnung, bitte.', tr: 'Hesap, lütfen.' },
     { pronoun: 'Özel istek', form: 'Ohne... / Mit...', example: 'Ohne Zwiebeln, bitte.', tr: 'Soğansız, lütfen.' }],
    'Trinkgeld (bahşiş) zorunlu değil ama %5-10 bırakılır.')],
  [SP('sp1', 'Einen Tisch für drei, bitte.', 'Üç kişilik masa, lütfen.', 'Masa iste'),
   SP('sp2', 'Ich hätte gern die Suppe, bitte.', 'Çorba istiyorum, lütfen.', 'Yemek sipariş et'),
   SP('sp3', 'Die Rechnung, bitte.', 'Hesap, lütfen.', 'Hesap iste'),
   SP('sp4', 'Das schmeckt sehr gut!', 'Bu çok lezzetli!', 'Yemeği öv'),
   SP('sp5', 'Ich bin allergisch gegen Nüsse.', 'Kuruyemişe alerjim var.', 'Alerji belirt')],
  [DL('d1', 'Im Restaurant', 'At the Restaurant', [
    LN('A', 'f', 'Guten Abend! Haben Sie reserviert?', 'İyi akşamlar! Rezervasyonunuz var mı?', 'Resmi karşılama.',
      [BD('Haben Sie reserviert', 'Rezervasyon var mı', 'question', 'Resmi soru.')]),
    LN('B', 'm', 'Ja, auf den Namen Ali. Für zwei Personen.', 'Evet, Ali adına. İki kişilik.',
      [BD('auf den Namen', 'adına', 'K', 'auf + aküsatif — adına.')]),
    LN('A', 'f', 'Bitte schön, hier ist Ihr Tisch. Die Speisekarte.', 'Buyurun, masanız burada. Menü.',
      [BD('Speisekarte', 'menü', 'O', 'Feminin → die.')]),
    LN('B', 'm', 'Danke. Ich hätte gern das Hähnchen und einen Salat.', 'Teşekkürler. Tavuk ve salata istiyorum.',
      [BD('Ich hätte gern', 'İstiyorum', 'modal', 'Nazik sipariş.')]),
    LN('A', 'f', 'Möchten Sie etwas trinken?', 'Bir şey içmek ister misiniz?', 'Möchten = istemek (nazik).',
      [BD('Möchten Sie', 'İster misiniz', 'modal', 'Resmi nazik istek.')]),
    LN('B', 'm', 'Ja, ein Wasser und einen Kaffee, bitte.', 'Evet, bir su ve bir kahve, lütfen.',
      [BD('ein Wasser', 'bir su', 'O', 'Neutrum → ein.'), BD('einen Kaffee', 'bir kahve', 'O', 'Maskulin aküsatif → einen.')])
  ])],
  [LI('li1', 'Heute gibt es Lachs mit Gemüse für vierzehn Euro und vegetarische Pasta für zehn Euro. Als Nachtisch gibt es Schokoladenkuchen für fünf Euro.',
    'Bugün somon sebze ile on dört euro, vejetaryen makarna on euro. Tatlı olarak çikolatalı kek beş euro.',
    [Q('Wie viel kostet der Lachs?', ['10 €', '12 €', '14 €', '16 €'], 2, 'Somon ne kadar?'),
     Q('Welche vegetarische Option gibt es?', ['Suppe', 'Salat', 'Pasta', 'Pizza'], 2, 'Hangi vejetaryen seçenek var?'),
     Q('Was ist der Nachtisch?', ['Eis', 'Käsekuchen', 'Apfelkuchen', 'Schokoladenkuchen'], 3, 'Tatlı ne?')])]
);

const L6 = scenario('Shopping',
  mkScenarioWords([
    ['w1', 'Wo finde ich...?', 'vo FIN-de ikh', '... nerede bulabilirim?'],
    ['w2', 'Wie viel kostet das?', 'vee feel KOS-tet das', 'Bu ne kadar?'],
    ['w3', 'zu teuer', 'tsu TOY-er', 'çok pahalı'],
    ['w4', 'billig', 'BIL-likh', 'ucuz'],
    ['w5', 'der Rabatt', 'der ra-BAT', 'indirim'],
    ['w6', 'die Größe', 'dee GRÖ-se', 'beden'],
    ['w7', 'die Farbe', 'dee FAR-be', 'renk'],
    ['w8', 'anprobieren', 'AN-pro-bee-ren', 'denemek (giysi)'],
    ['w9', 'die Umkleidekabine', 'dee UM-kly-de-ka-BEE-ne', 'deneme kabini'],
    ['w10', 'passen', 'PAS-sen', 'uymak / olmak (beden)'],
    ['w11', 'kaufen', 'KAU-fen', 'satın almak'],
    ['w12', 'bezahlen', 'be-TSA-len', 'ödemek'],
    ['w13', 'die Quittung', 'dee kvi-TUNG', 'fiş'],
    ['w14', 'umtauschen', 'UM-taush-en', 'değiştirmek (iade)'],
    ['w15', 'das Sonderangebot', 'das ZON-der-an-ge-bot', 'özel teklif / indirim']
  ]),
  [G('g1', 'Alışverişte Faydalı İfadeler', 'Useful Shopping Phrases',
    'Mağazada: Guten Tag ile başla. Wie viel kostet das? = fiyat sor. Kann ich das anprobieren? = deneyebilir miyim? Das ist zu teuer = çok pahalı.',
    [{ pronoun: 'Fiyat', form: 'Wie viel kostet...?', example: 'Wie viel kostet die Jacke?', tr: 'Ceket ne kadar?' },
     { pronoun: 'Deneme', form: 'Kann ich anprobieren?', example: 'Kann ich das anprobieren?', tr: 'Deneyebilir miyim?' },
     { pronoun: 'Beden', form: 'Haben Sie Größe M?', example: 'Haben Sie das in Größe L?', tr: 'L beden var mı?' },
     { pronoun: 'Ödeme', form: 'Wo kann ich bezahlen?', example: 'Wo kann ich bezahlen?', tr: 'Nerede ödeyebilirim?' }],
    'Sonntags çoğu mağaza kapalı — Almanya\'da dinlenme günü.')],
  [G('g2', 'Satın Alma', 'Making a Purchase',
    'Almancada satın alma: Ich nehme das = Bunu alıyorum. Kann ich mit Karte zahlen? = Kartla ödeyebilir miyim? Haben Sie das in ...? = ... var mı?',
    [{ pronoun: 'Satın alma', form: 'Ich nehme...', example: 'Ich nehme die blaue Jacke.', tr: 'Mavi ceketi alıyorum.' },
     { pronoun: 'Ödeme', form: 'Bar oder mit Karte?', example: 'Kann ich mit Karte zahlen?', tr: 'Kartla ödeyebilir miyim?' },
     { pronoun: 'Fiş', form: 'Kann ich eine Quittung haben?', example: 'Kann ich eine Quittung haben?', tr: 'Fiş alabilir miyim?' },
     { pronoun: 'İade', form: 'Kann ich das umtauschen?', example: 'Kann ich das umtauschen?', tr: 'Bunu değiştirebilir miyim?' }],
    'Kassenbon = fiş. Umtauschrecht = değişim hakkı (genelde 14 gün).')],
  [SP('sp1', 'Wie viel kostet das?', 'Bu ne kadar?', 'Fiyat sor'),
   SP('sp2', 'Das ist zu teuer.', 'Bu çok pahalı.', 'Pahalı de'),
   SP('sp3', 'Kann ich das anprobieren?', 'Bunu deneyebilir miyim?', 'Deneme iste'),
   SP('sp4', 'Das passt mir.', 'Bu bana uyuyor.', 'Beden uygun de'),
   SP('sp5', 'Ich nehme das.', 'Bunu alıyorum.', 'Satın al')],
  [DL('d1', 'Im Geschäft', 'In the Shop', [
    LN('A', 'f', 'Guten Tag! Kann ich Ihnen helfen?', 'İyi günler! Yardımcı olabilir miyim?', 'Satış elemanı karşılama.',
      [BD('Kann ich helfen', 'Yardım edebilir miyim', 'modal', 'Mağaza standart sorusu.')]),
    LN('B', 'm', 'Ja, ich suche eine Jacke.', 'Evet, ceket arıyorum.', 'suchen = aramak.',
      [BD('ich suche', 'arıyorum', 'V', 'suchen + aküsatif.')]),
    LN('A', 'f', 'Welche Größe brauchen Sie?', 'Hangi beden lazım?', 'brauchen = ihtiyaç duymak.',
      [BD('Welche Größe', 'Hangi beden', 'question', 'Welche = hangi (dişil).')]),
    LN('B', 'm', 'Größe M, bitte. Kann ich die anprobieren?', 'M beden, lütfen. Deneyebilir miyim?',
      [BD('anprobieren', 'denemek', 'V', 'Giysi denemek.')]),
    LN('A', 'f', 'Natürlich. Die Umkleidekabine ist dort.', 'Tabii. Deneme kabini orada.',
      [BD('Umkleidekabine', 'deneme kabini', 'O', 'Feminin → die.')]),
    LN('B', 'm', 'Die passt! Wie viel kostet sie?', 'Bu uydu! Ne kadar?', 'Feminin zamir: sie = die Jacke.',
      [BD('sie', 'o (dişil)', 'S', 'Dişil isimler sie zamir alır.')])
  ])],
  [LI('li1', 'Die Jacke kostet neunundneunzig Euro. Heute gibt es zwanzig Prozent Rabatt. Also kostet sie neunundsiebzig Euro.',
    'Ceket doksan dokuz euro. Bugün yüzde yirmi indirim var. Yani yetmiş dokuz euro.',
    [Q('Wie viel kostet die Jacke normal?', ['79 €', '89 €', '99 €', '119 €'], 2, 'Ceket normal fiyatı ne?'),
     Q('Wie viel Prozent Rabatt gibt es?', ['10%', '15%', '20%', '30%'], 2, 'Yüzde kaç indirim?'),
     Q('Wie viel kostet die Jacke mit Rabatt?', ['69 €', '79 €', '89 €', '99 €'], 1, 'İndirimli fiyat ne?')])]
);

const L7 = scenario('Directions',
  mkScenarioWords([
    ['w1', 'Wo ist...?', 'vo ist', '... nerede?'],
    ['w2', 'links', 'links', 'sol'],
    ['w3', 'rechts', 'rekhts', 'sağ'],
    ['w4', 'geradeaus', 'ge-RA-de-aus', 'düz / ileri'],
    ['w5', 'die Ecke', 'dee E-ke', 'köşe'],
    ['w6', 'die Straße', 'dee SHTra-se', 'cadde / sokak'],
    ['w7', 'der Bahnhof', 'der BAHN-hof', 'tren istasyonu'],
    ['w8', 'die Haltestelle', 'dee HAL-te-shtel-le', 'durak'],
    ['w9', 'die Ampel', 'dee AM-pel', 'trafik lambası'],
    ['w10', 'überqueren', 'ü-ber-KVAY-ren', 'karşıdan karşıya geçmek'],
    ['w11', 'die Kreuzung', 'dee KROY-tsung', 'kavşak'],
    ['w12', 'in der Nähe', 'in der NEE-e', 'yakında']
  ]),
  [G('g1', 'Yön Tarifi Verme', 'Giving Directions',
    'Temel yönler: links (sol), rechts (sağ), geradeaus (düz). Gehen Sie... = ... gidin (resmi emir). An der Ecke = köşede. Die erste Straße = ilk sokak.',
    [{ pronoun: 'Yönler', form: 'links / rechts / geradeaus', example: 'Gehen Sie geradeaus.', tr: 'Düz gidin.' },
     { pronoun: 'Konum', form: 'in der Nähe / weit weg', example: 'Es ist in der Nähe.', tr: 'Yakında.' },
     { pronoun: 'Soru', form: 'Wo ist...? / Wie komme ich...?', example: 'Wo ist der Bahnhof?', tr: 'Tren istasyonu nerede?' },
     { pronoun: 'Mesafe', form: 'ca. / ungefähr', example: 'Es ist ca. fünf Minuten.', tr: 'Yaklaşık beş dakika.' }],
    'Almanya\'da yaya geçitlerine dikkat — kırmızıda geçme!')],
  [SP('sp1', 'Wo ist der Bahnhof?', 'Tren istasyonu nerede?', 'Yer sor'),
   SP('sp2', 'Gehen Sie geradeaus.', 'Düz gidin.', 'Yön tarif et'),
   SP('sp3', 'Dann links.', 'Sonra sola.', 'Yön ekle'),
   SP('sp4', 'Es ist in der Nähe.', 'Yakında.', 'Mesafe belirt'),
   SP('sp5', 'Danke für die Hilfe!', 'Yardım için teşekkürler!', 'Teşekkür et')],
  [DL('d1', 'Nach dem Weg fragen', 'Asking for Directions', [
    LN('A', 'm', 'Entschuldigung, wo ist der Bahnhof?', 'Pardon, tren istasyonu nerede?', 'Yol sorma — Entschuldigung ile başla.',
      [BD('Entschuldigung', 'Pardon', 'courtesy', 'Yabancıya yaklaşırken.'), BD('wo ist', 'nerede', 'question', 'Wo + ist + isim.')]),
    LN('B', 'f', 'Gehen Sie geradeaus, dann links.', 'Düz gidin, sonra sola.', 'dann = sonra.',
      [BD('geradeaus', 'düz', 'direction', 'İleri git.'), BD('dann links', 'sonra sol', 'direction', 'Sıralı yön.')]),
    LN('A', 'm', 'An der Ampel?', 'Trafik lambasında mı?', 'Onay sorma.',
      [BD('An der Ampel', 'Trafik lambasında', 'K', 'an + dativ — ...de/-da.')]),
    LN('B', 'f', 'Ja, an der Ampel rechts. Dann sehen Sie den Bahnhof.', 'Evet, trafik lambasında sağa. Sonra istasyonu görürsünüz.',
      [BD('sehen Sie', 'görürsünüz', 'V', 'Resmi emir / tavsiye.')])
  ])],
  [LI('li1', 'Gehen Sie geradeaus bis zur Kreuzung. Dann links. Der Bahnhof ist in fünf Minuten zu Fuß.',
    'Kavşağa kadar düz gidin. Sonra sola. Tren istasyonu yürüyerek beş dakika.',
    [Q('Was macht man an der Kreuzung?', ['rechts', 'links', 'zurück', 'stehen'], 1, 'Kavşakta ne yapılır?'),
     Q('Wie lange braucht man zu Fuß?', ['3 Min.', '5 Min.', '10 Min.', '15 Min.'], 1, 'Yürüyerek ne kadar sürer?'),
     Q('Wohin geht man zuerst?', ['links', 'rechts', 'geradeaus', 'zurück'], 2, 'Önce nereye gidilir?')])]
);

const L8 = scenario('Transport & Travel',
  mkScenarioWords([
    ['w1', 'der Zug', 'der tsuk', 'tren'],
    ['w2', 'der Bus', 'der bus', 'otobüs'],
    ['w3', 'die U-Bahn', 'dee U-bahn', 'metro'],
    ['w4', 'das Flugzeug', 'das FLUK-tsayk', 'uçak'],
    ['w5', 'der Flughafen', 'der FLUKH-ha-fen', 'havaalanı'],
    ['w6', 'die Fahrkarte', 'dee FAR-kar-te', 'bilet'],
    ['w7', 'einsteigen', 'AYN-shty-gen', 'binmek (araç)'],
    ['w8', 'aussteigen', 'AUS-shty-gen', 'inmek (araç)'],
    ['w9', 'umsteigen', 'UM-shty-gen', 'aktarma yapmak'],
    ['w10', 'der Gleis', 'der glys', 'peron'],
    ['w11', 'abfahren', 'AP-fah-ren', 'kalkmak (araç)'],
    ['w12', 'ankommen', 'AN-ko-men', 'varmak']
  ]),
  [G('g1', 'Toplu Taşıma', 'Public Transport',
    'Almanya\'da U-Bahn (metro), S-Bahn (banliyö), Bus, Tram. Fahrkarte = bilet. Einsteigen/Aussteigen = binmek/inmek. Bitte entwerten! = Bileti damgalayın!',
    [{ pronoun: 'Bilet', form: 'die Fahrkarte', example: 'Eine Fahrkarte, bitte.', tr: 'Bir bilet, lütfen.' },
     { pronoun: 'Peron', form: 'Gleis ...', example: 'Der Zug fährt von Gleis 3.', tr: 'Tren 3. perondan kalkıyor.' },
     { pronoun: 'Aktarma', form: 'umsteigen', example: 'In Berlin umsteigen.', tr: 'Berlin\'de aktarma yap.' },
     { pronoun: 'Gecikme', form: 'Verspätung', example: 'Der Zug hat Verspätung.', tr: 'Tren gecikmeli.' }],
    'Deutsche Bahn (DB) = tren şirketi. BVG/MVV = şehir içi ulaşım.')],
  [SP('sp1', 'Eine Fahrkarte nach Berlin, bitte.', 'Berlin\'e bir bilet, lütfen.', 'Bilet al'),
   SP('sp2', 'Wo muss ich umsteigen?', 'Nerede aktarma yapmalıyım?', 'Aktarma sor'),
   SP('sp3', 'Der Zug fährt von Gleis 5.', 'Tren 5. perondan kalkıyor.', 'Peron söyle'),
   SP('sp4', 'Wann kommt der nächste Bus?', 'Sonraki otobüs ne zaman geliyor?', 'Otobüs saati sor'),
   SP('sp5', 'Ich steige hier aus.', 'Burada iniyorum.', 'İneceğini söyle')],
  [DL('d1', 'Am Bahnhof', 'At the Train Station', [
    LN('A', 'm', 'Eine Fahrkarte nach München, bitte.', 'Münih\'e bir bilet, lütfen.', 'Bilet alma.',
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
    [Q('Wohin fährt der Zug?', ['München', 'Hamburg', 'Berlin', 'Köln'], 2, 'Tren nereye gidiyor?'),
     Q('Von welchem Gleis?', ['5', '7', '8', '10'], 2, 'Hangi perondan?'),
     Q('Wie lange dauert die Fahrt?', ['2 Std.', '3 Std.', '4 Std.', '5 Std.'], 2, 'Yolculuk ne kadar sürer?')])]
);

const L9 = scenario('Hotel & Accommodation',
  mkScenarioWords([
    ['w1', 'das Hotel', 'das ho-TEL', 'otel'],
    ['w2', 'die Rezeption', 'dee re-tsep-TSI-ON', 'resepsiyon'],
    ['w3', 'das Zimmer', 'das TSI-mer', 'oda'],
    ['w4', 'einchecken', 'AYN-shek-en', 'giriş yapmak (otel)'],
    ['w5', 'auschecken', 'AUS-shek-en', 'çıkış yapmak'],
    ['w6', 'der Schlüssel', 'der SHLÜ-sel', 'anahtar'],
    ['w7', 'das Einzelzimmer', 'das AYN-tsel-tsi-mer', 'tek kişilik oda'],
    ['w8', 'das Doppelzimmer', 'das DO-pel-tsi-mer', 'çift kişilik oda'],
    ['w9', 'Frühstück', 'FRÜ-shtük', 'kahvaltı'],
    ['w10', 'WLAN / WiFi', 'vee-fee', 'kablosuz internet'],
    ['w11', 'die Klimaanlage', 'dee KLEE-ma-an-la-ge', 'klima'],
    ['w12', 'die Buchung', 'dee BUKH-ung', 'rezervasyon']
  ]),
  [G('g1', 'Otelde Check-in', 'Hotel Check-in',
    'Ich habe eine Buchung = Rezervasyonum var. Unter dem Namen... = ... adına. Frühstück inbegriffen? = Kahvaltı dahil mi? Spätestens um 11 Uhr auschecken.',
    [{ pronoun: 'Rezervasyon', form: 'Ich habe eine Buchung', example: 'Ich habe eine Buchung auf Ali.', tr: 'Ali adına rezervasyonum var.' },
     { pronoun: 'Oda', form: 'Ein Doppelzimmer', example: 'Ein Doppelzimmer, bitte.', tr: 'Çift kişilik oda, lütfen.' },
     { pronoun: 'Kahvaltı', form: 'Ist Frühstück dabei?', example: 'Ist Frühstück inbegriffen?', tr: 'Kahvaltı dahil mi?' },
     { pronoun: 'Çıkış', form: 'Wann muss ich auschecken?', example: 'Bis wann kann ich auschecken?', tr: 'En geç ne zaman çıkış yapmalıyım?' }],
    'Almanya\'da otellerde genelde temizlik ve düzen önemlidir.')],
  [SP('sp1', 'Ich habe eine Buchung.', 'Rezervasyonum var.', 'Check-in yap'),
   SP('sp2', 'Ein Einzelzimmer, bitte.', 'Tek kişilik oda, lütfen.', 'Oda iste'),
   SP('sp3', 'Wo ist das Frühstück?', 'Kahvaltı nerede?', 'Kahvaltı sor'),
   SP('sp4', 'Kann ich auschecken?', 'Çıkış yapabilir miyim?', 'Check-out yap'),
   SP('sp5', 'Das Zimmer ist sehr schön.', 'Oda çok güzel.', 'Odayı öv')],
  [DL('d1', 'Hotel Check-in', 'Hotel Check-in', [
    LN('A', 'f', 'Guten Abend! Willkommen im Hotel.', 'İyi akşamlar! Otele hoş geldiniz.', 'Resepsiyon karşılama.',
      [BD('Willkommen', 'Hoş geldiniz', 'greeting', 'Otel karşılama.')]),
    LN('B', 'm', 'Guten Abend. Ich habe eine Buchung auf den Namen Ali.', 'İyi akşamlar. Ali adına rezervasyonum var.',
      [BD('Buchung auf den Namen', 'adına rezervasyon', 'O', 'auf + aküsatif — adına.')]),
    LN('A', 'f', 'Ja, ein Einzelzimmer für zwei Nächte. Frühstück ist inbegriffen.', 'Evet, iki gece tek kişilik oda. Kahvaltı dahil.',
      [BD('inbegriffen', 'dahil', 'adj', 'Fiyata dahil.')]),
    LN('B', 'm', 'Perfekt. Gibt es WLAN?', 'Mükemmel. WiFi var mı?', 'Gibt es = var mı.',
      [BD('Gibt es', 'Var mı', 'question', 'Es gibt = var (genel).')]),
    LN('A', 'f', 'Ja, das Passwort steht auf dem Zettel. Hier ist Ihr Schlüssel. Zimmer 305.', 'Evet, şifre kağıtta. Anahtarınız burada. Oda 305.',
      [BD('Schlüssel', 'anahtar', 'O', 'Maskulin → der.')])
  ])],
  [LI('li1', 'Ali hat ein Einzelzimmer für drei Nächte gebucht. Frühstück ist von sieben bis zehn Uhr. Auschecken bis elf Uhr.',
    'Ali üç gece tek kişilik oda ayırttı. Kahvaltı yedi ile on arası. Çıkış on bire kadar.',
    [Q('Wie viele Nächte?', ['1', '2', '3', '4'], 2, 'Kaç gece?'),
     Q('Wann ist Frühstück?', ['6–9', '7–10', '8–11', '9–12'], 1, 'Kahvaltı ne zaman?'),
     Q('Bis wann auschecken?', ['10 Uhr', '11 Uhr', '12 Uhr', '13 Uhr'], 1, 'En geç ne zaman çıkış?')])]
);

const L10 = scenario('Work & Business',
  mkScenarioWords([
    ['w1', 'die Arbeit', 'dee AR-bayt', 'iş / çalışma'],
    ['w2', 'der Beruf', 'der be-ROOF', 'meslek'],
    ['w3', 'der Kollege / die Kollegin', 'der ko-LAY-ge / dee ko-LAY-gin', 'iş arkadaşı'],
    ['w4', 'der Chef / die Chefin', 'der shef / dee she-fin', 'patron'],
    ['w5', 'das Büro', 'das BÜ-ro', 'ofis'],
    ['w6', 'die Besprechung', 'dee be-SHPRE-khung', 'toplantı'],
    ['w7', 'der Vertrag', 'der fer-TRAK', 'sözleşme'],
    ['w8', 'der Gehalt', 'der ge-HALT', 'maaş'],
    ['w9', 'die Bewerbung', 'dee be-VER-bung', 'iş başvurusu'],
    ['w10', 'das Vorstellungsgespräch', 'das FOR-shtel-lungs-ge-shprekh', 'iş görüşmesi'],
    ['w11', 'Vollzeit / Teilzeit', 'fol-tsayt / TAYL-tsayt', 'tam zamanlı / yarı zamanlı'],
    ['w12', 'der Feierabend', 'der FAY-er-a-bent', 'iş çıkışı / mesai sonu']
  ]),
  [G('g1', 'İş Hayatında Temel İfadeler', 'Basic Work Phrases',
    'Was machen Sie beruflich? = Ne iş yapıyorsunuz? Ich arbeite als... = ... olarak çalışıyorum. Ich habe eine Besprechung = Toplantım var.',
    [{ pronoun: 'Meslek sorma', form: 'Was sind Sie von Beruf?', example: 'Was sind Sie von Beruf?', tr: 'Mesleğiniz ne?' },
     { pronoun: 'Cevap', form: 'Ich bin ... / Ich arbeite als...', example: 'Ich arbeite als Ingenieur.', tr: 'Mühendis olarak çalışıyorum.' },
     { pronoun: 'Toplantı', form: 'Ich habe eine Besprechung', example: 'Um zehn Uhr habe ich eine Besprechung.', tr: 'Saat onda toplantım var.' },
     { pronoun: 'Mesai sonu', form: 'Schönen Feierabend!', example: 'Schönen Feierabend!', tr: 'İyi akşamlar! (iş çıkışı)' }],
    'Almanya\'da iş saatleri genelde 8–17 arası. Pünktlichkeit (dakiklik) çok önemli!')],
  [SP('sp1', 'Was sind Sie von Beruf?', 'Mesleğiniz ne?', 'Meslek sor'),
   SP('sp2', 'Ich arbeite als Programmierer.', 'Yazılımcı olarak çalışıyorum.', 'Mesleğini söyle'),
   SP('sp3', 'Ich habe um drei Uhr eine Besprechung.', 'Saat üçte toplantım var.', 'Toplantı belirt'),
   SP('sp4', 'Schönen Feierabend!', 'İyi akşamlar! (iş çıkışı)', 'Mesai sonu de'),
   SP('sp5', 'Können wir einen Termin vereinbaren?', 'Randevu ayarlayabilir miyiz?', 'Randevu öner')],
  [DL('d1', 'Im Büro', 'At the Office', [
    LN('A', 'm', 'Guten Morgen! Wie war Ihr Wochenende?', 'Günaydın! Hafta sonunuz nasıldı?', 'İş yerinde selam.',
      [BD('Wie war', 'Nasıldı', 'question', 'Geçmiş zaman soru.')]),
    LN('B', 'f', 'Ganz gut, danke. Und Ihnen?', 'Oldukça iyi, teşekkürler. Ya size?', 'Ganz gut = oldukça iyi.',
      [BD('Ganz gut', 'Oldukça iyi', 'adj', 'Olumlu kısa cevap.')]),
    LN('A', 'm', 'Auch gut. Haben Sie heute Besprechungen?', 'Ben de iyi. Bugün toplantılarınız var mı?',
      [BD('Besprechungen', 'toplantılar', 'O', 'Feminin çoğul → die.')]),
    LN('B', 'f', 'Ja, um elf Uhr. Danach habe ich Zeit.', 'Evet, saat on birde. Sonra vaktim var.',
      [BD('Danach', 'Sonra', 'K', 'Zaman sırası.')])
  ])],
  [LI('li1', 'Ali arbeitet als Ingenieur in Berlin. Er beginnt um acht Uhr und hat um zehn Uhr eine Besprechung. Feierabend ist um siebzehn Uhr.',
    'Ali Berlin\'de mühendis olarak çalışıyor. Saat sekizde başlıyor ve saat onda toplantısı var. Mesai saat on yedide bitiyor.',
    [Q('Was ist Alis Beruf?', ['Lehrer', 'Arzt', 'Ingenieur', 'Koch'], 2, 'Ali\'nin mesleği ne?'),
     Q('Wann beginnt die Arbeit?', ['7 Uhr', '8 Uhr', '9 Uhr', '10 Uhr'], 1, 'İş ne zaman başlıyor?'),
     Q('Wann ist Feierabend?', ['16 Uhr', '17 Uhr', '18 Uhr', '19 Uhr'], 1, 'Mesai ne zaman bitiyor?')])]
);

const L11 = scenario('Health',
  mkScenarioWords([
    ['w1', 'der Arzt / die Ärztin', 'der artst / dee ERT-sin', 'doktor'],
    ['w2', 'das Krankenhaus', 'das KRANK-en-haus', 'hastane'],
    ['w3', 'die Apotheke', 'dee a-po-TAY-ke', 'eczane'],
    ['w4', 'krank', 'krank', 'hasta'],
    ['w5', 'die Schmerzen', 'dee SHMER-tsen', 'ağrı'],
    ['w6', 'das Fieber', 'das FEE-ber', 'ateş'],
    ['w7', 'der Husten', 'der HUS-ten', 'öksürük'],
    ['w8', 'die Erkältung', 'dee er-KEL-tung', 'soğuk algınlığı'],
    ['w9', 'das Medikament', 'das me-di-ka-MENT', 'ilaç'],
    ['w10', 'der Termin', 'der ter-MIN', 'randevu'],
    ['w11', 'die Versicherung', 'dee fer-ZI-khe-rung', 'sigorta'],
    ['w12', 'Gute Besserung!', 'GU-te BE-ser-ung', 'Geçmiş olsun!']
  ]),
  [G('g1', 'Doktorda', 'At the Doctor',
    'Mir tut ... weh = ... ağrıyor. Ich bin krank = hastayım. Ich brauche einen Termin = randevuya ihtiyacım var. Gute Besserung! = Geçmiş olsun!',
    [{ pronoun: 'Ağrı', form: 'Mir tut ... weh', example: 'Mir tut der Kopf weh.', tr: 'Başım ağrıyor.' },
     { pronoun: 'Hastalık', form: 'Ich bin krank / habe Fieber', example: 'Ich habe Fieber.', tr: 'Ateşim var.' },
     { pronoun: 'Randevu', form: 'Ich brauche einen Termin', example: 'Kann ich einen Termin haben?', tr: 'Randevu alabilir miyim?' },
     { pronoun: 'İlaç', form: 'Rezept / Medikament', example: 'Brauche ich ein Rezept?', tr: 'Reçete gerekli mi?' }],
    'Almanya\'da Krankenversicherung (sağlık sigortası) zorunludur.')],
  [SP('sp1', 'Mir tut der Kopf weh.', 'Başım ağrıyor.', 'Ağrı belirt'),
   SP('sp2', 'Ich bin krank.', 'Hastayım.', 'Hastalık söyle'),
   SP('sp3', 'Ich brauche einen Termin.', 'Randevuya ihtiyacım var.', 'Randevu iste'),
   SP('sp4', 'Ich habe Fieber.', 'Ateşim var.', 'Belirti söyle'),
   SP('sp5', 'Gute Besserung!', 'Geçmiş olsun!', 'Tebrik/iyi dilek')],
  [DL('d1', 'Beim Arzt', 'At the Doctor', [
    LN('A', 'f', 'Was fehlt Ihnen?', 'Sizin şikayetiniz ne?', 'Doktor sorusu.',
      [BD('Was fehlt Ihnen', 'Ne şikayetiniz var', 'question', 'Resmi doktor sorusu.')]),
    LN('B', 'm', 'Mir tut die Kehle weh und ich habe Fieber.', 'Boğazım ağrıyor ve ateşim var.',
      [BD('Mir tut die Kehle weh', 'Boğazım ağrıyor', 'V', 'weh tun + dativ.')]),
    LN('A', 'f', 'Seit wann?', 'Ne zamandan beri?', 'Seit wann = ne zamandan beri.',
      [BD('Seit wann', 'Ne zamandan beri', 'question', 'Süre sorusu.')]),
    LN('B', 'm', 'Seit gestern Abend.', 'Dün akşamdan beri.',
      [BD('Seit gestern Abend', 'Dün akşamdan beri', 'K', 'seit + zaman.')]),
    LN('A', 'f', 'Ich verschreibe Ihnen Medikamente. Gute Besserung!', 'Size ilaç yazıyorum. Geçmiş olsun!',
      [BD('Gute Besserung', 'Geçmiş olsun', 'phrase', 'Standart iyi dilek.')])
  ])],
  [LI('li1', 'Ali ist krank. Er hat Fieber und Husten. Der Arzt sagt: Drei Tage Ruhe und viel trinken.',
    'Ali hasta. Ateşi ve öksürüğü var. Doktor diyor: Üç gün dinlen ve bol su iç.',
    [Q('Was hat Ali?', ['Kopfschmerzen', 'Fieber und Husten', 'Bauchschmerzen', 'Allergie'], 1, 'Ali\'nin şikayeti ne?'),
     Q('Was empfiehlt der Arzt?', ['Sport', 'Ruhe und trinken', 'Arbeiten', 'Reisen'], 1, 'Doktor ne öneriyor?'),
     Q('Wie lange Ruhe?', ['1 Tag', '2 Tage', '3 Tage', '5 Tage'], 2, 'Kaç gün dinlenme?')])]
);

const L12 = scenario('Phone & Communication',
  mkScenarioWords([
    ['w1', 'anrufen', 'AN-roo-fen', 'telefon etmek / aramak'],
    ['w2', 'die Nachricht', 'dee NAKH-rikht', 'mesaj'],
    ['w3', 'die E-Mail', 'dee EE-mayl', 'e-posta'],
    ['w4', 'die Telefonnummer', 'dee te-le-FON-nu-mer', 'telefon numarası'],
    ['w5', 'Hallo, hier ist...', 'HA-lo, heer ist', 'Merhaba, ... ben', { tip: 'Telefonda kendini tanıtma.' }],
    ['w6', 'Können Sie mich zurückrufen?', 'KÖ-nen zee mikh TSU-rük-roo-fen', 'Beni geri arayabilir misiniz?'],
    ['w7', 'Ich kann gerade nicht sprechen.', 'ikh kan ge-RA-de nikht SHPRE-khen', 'Şu an konuşamıyorum.'],
    ['w8', 'die Mailbox / die Mailbox', 'dee MELT-boks', 'sesli mesaj'],
    ['w9', 'schreiben', 'SHREE-ben', 'yazmak'],
    ['w10', 'der Anrufbeantworter', 'der AN-roof-be-ant-vor-ter', 'telesekreter'],
    ['w11', 'besetzt', 'be-ZETST', 'meşgul (hat)'],
    ['w12', 'verbinden', 'fer-BIN-den', 'bağlamak (telefon)']
  ]),
  [G('g1', 'Telefonda Konuşma', 'Phone Conversations',
    'Almanya\'da telefonda: Name? = Kimin aradığı? Hier ist Ali = Ali ben. Auf Wiederhören = Hoşça kalın (telefonda). Können Sie bitte langsamer sprechen? = Daha yavaş konuşabilir misiniz?',
    [{ pronoun: 'Tanıtma', form: 'Hier ist... / Mein Name ist...', example: 'Hallo, hier ist Ali.', tr: 'Merhaba, Ali ben.' },
     { pronoun: 'Bağlama', form: 'Können Sie mich verbinden?', example: 'Können Sie mich mit Herrn Müller verbinden?', tr: 'Beni Bay Müller\'e bağlayabilir misiniz?' },
     { pronoun: 'Meşgul', form: 'Die Leitung ist besetzt', example: 'Es ist besetzt.', tr: 'Hat meşgul.' },
     { pronoun: 'Veda', form: 'Auf Wiederhören', example: 'Auf Wiederhören!', tr: 'Hoşça kalın! (telefon)' }],
    'Almanya\'da telefon numaraları +49 ile başlar.')],
  [SP('sp1', 'Hallo, hier ist Ali.', 'Merhaba, Ali ben.', 'Telefonda tanıt'),
   SP('sp2', 'Können Sie bitte langsamer sprechen?', 'Lütfen daha yavaş konuşabilir misiniz?', 'Yavaş konuş iste'),
   SP('sp3', 'Ich rufe später zurück.', 'Sonra geri ararım.', 'Geri arama sözü ver'),
   SP('sp4', 'Können Sie das bitte wiederholen?', 'Lütfen tekrar edebilir misiniz?', 'Tekrar iste'),
   SP('sp5', 'Auf Wiederhören!', 'Hoşça kalın! (telefon)', 'Telefonda vedalaş')],
  [DL('d1', 'Telefongespräch', 'Phone Call', [
    LN('A', 'f', 'Guten Tag, Firma Müller. Was kann ich für Sie tun?', 'İyi günler, Müller Şirketi. Size nasıl yardımcı olabilirim?', 'Resmi telefon karşılama.',
      [BD('Was kann ich tun', 'Ne yapabilirim', 'question', 'Resmi telefon kalıbı.')]),
    LN('B', 'm', 'Guten Tag. Hier ist Ali. Kann ich Herrn Schmidt sprechen?', 'İyi günler. Ali ben. Bay Schmidt ile konuşabilir miyim?',
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
    ['w8', 'Prost!', 'prost', 'Şerefe!'],
    ['w9', 'sich treffen', 'zikh TREF-en', 'buluşmak'],
    ['w10', 'der Termin', 'der ter-MIN', 'buluşma / randevu'],
    ['w11', 'spät', 'shpayt', 'geç'],
    ['w12', 'pünktlich', 'PÜNK-tlich', 'dakik']
  ]),
  [G('g1', 'Sosyal Davetler', 'Social Invitations',
    'Möchtest du...? = ... ister misin? (samimi). Haben Sie Lust? = İster misiniz? (resmi). Alles Gute zum Geburtstag! = Doğum günün kutlu olsun! Prost! = Şerefe!',
    [{ pronoun: 'Davet', form: 'Möchtest du...? / Lust haben', example: 'Hast du Lust, ins Kino zu gehen?', tr: 'Sinemaya gitmek ister misin?' },
     { pronoun: 'Kabul', form: 'Gerne! / Das klingt gut!', example: 'Ja, gerne!', tr: 'Evet, memnuniyetle!' },
     { pronoun: 'Red', form: 'Leider kann ich nicht.', example: 'Tut mir leid, ich habe keine Zeit.', tr: 'Maalesef vaktim yok.' },
     { pronoun: 'Kutlama', form: 'Alles Gute! / Prost!', example: 'Alles Gute zum Geburtstag!', tr: 'Doğum günün kutlu olsun!' }],
    'Almanya\'da pünktlich (dakik) olmak sosyal görgü kuralıdır.')],
  [SP('sp1', 'Hast du am Samstag Zeit?', 'Cumartesi müsait misin?', 'Buluşma teklif et'),
   SP('sp2', 'Ja, gerne! Wo treffen wir uns?', 'Evet, memnuniyetle! Nerede buluşalım?', 'Kabul et ve yer sor'),
   SP('sp3', 'Alles Gute zum Geburtstag!', 'Doğum günün kutlu olsun!', 'Doğum günü kutla'),
   SP('sp4', 'Prost!', 'Şerefe!', 'Kadeh kaldır'),
   SP('sp5', 'Es tut mir leid, ich kann nicht.', 'Maalesef gelemem.', 'Daveti reddet')],
  [DL('d1', 'Einladung', 'Invitation', [
    LN('A', 'f', 'Hey Ali! Ich mache am Samstag eine Party. Kommst du?', 'Hey Ali! Cumartesi parti veriyorum. Gelir misin?', 'Samimi davet.',
      [BD('Ich mache eine Party', 'Parti veriyorum', 'V', 'machen = yapmak/vermek.')]),
    LN('B', 'm', 'Ja, gerne! Soll ich etwas mitbringen?', 'Evet, memnuniyetle! Bir şey getireyim mi?', 'mitbringen = yanında getirmek.',
      [BD('etwas mitbringen', 'bir şey getirmek', 'V', 'Partiye katkı sorusu.')]),
    LN('A', 'f', 'Nein, danke. Nur du! Um acht Uhr bei mir.', 'Hayır, teşekkürler. Sadece sen! Saat sekizde bende.',
      [BD('bei mir', 'bende / evimde', 'K', 'bei + dativ = ...de/-da.')]),
    LN('B', 'm', 'Super! Bis Samstag!', 'Harika! Cumartesiye kadar!',
      [BD('Bis Samstag', 'Cumartesiye kadar', 'farewell', 'Bis + gün.')])
  ])],
  [LI('li1', 'Lisa feiert am Freitag ihren Geburtstag. Die Party beginnt um neunzehn Uhr. Ali bringt einen Kuchen mit.',
    'Lisa cuma günü doğum gününü kutluyor. Parti saat 19:00\'da başlıyor. Ali bir kek getiriyor.',
    [Q('Was feiert Lisa?', ['Hochzeit', 'Geburtstag', 'Abschluss', 'Neujahr'], 1, 'Lisa ne kutluyor?'),
     Q('Wann beginnt die Party?', ['18 Uhr', '19 Uhr', '20 Uhr', '21 Uhr'], 1, 'Parti ne zaman başlıyor?'),
     Q('Was bringt Ali mit?', ['Wein', 'Blumen', 'Kuchen', 'Brot'], 2, 'Ali ne getiriyor?')])]
);

const L14 = scenario('Home & Living',
  mkScenarioWords([
    ['w1', 'die Wohnung', 'dee VON-ung', 'daire / konut'],
    ['w2', 'das Haus', 'das haus', 'ev'],
    ['w3', 'das Zimmer', 'das TSI-mer', 'oda'],
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
    'Almanya\'da çoğu kişi kiralık oturur — Mietwohnung.')],
  [SP('sp1', 'Ich wohne in einer Wohnung.', 'Bir dairede yaşıyorum.', 'Konut tipini söyle'),
   SP('sp2', 'Die Wohnung hat drei Zimmer.', 'Dairenin üç odası var.', 'Oda sayısı söyle'),
   SP('sp3', 'Die Miete ist sechshundert Euro.', 'Kira altı yüz euro.', 'Kira söyle'),
   SP('sp4', 'Ich ziehe nächsten Monat um.', 'Gelecek ay taşınıyorum.', 'Taşınma haberi ver'),
   SP('sp5', 'Die Nachbarn sind sehr nett.', 'Komşular çok nazik.', 'Komşulardan bahset')],
  [DL('d1', 'Wohnungssuche', 'Apartment Hunting', [
    LN('A', 'm', 'Guten Tag. Ich suche eine Wohnung.', 'İyi günler. Daire arıyorum.', 'Ev arama.',
      [BD('Ich suche', 'Arıyorum', 'V', 'suchen + aküsatif.')]),
    LN('B', 'f', 'Wie viele Zimmer brauchen Sie?', 'Kaç oda lazım?', 'Ev sahibi/emlak sorusu.',
      [BD('Wie viele Zimmer', 'Kaç oda', 'question', 'Wie viele = kaç tane.')]),
    LN('A', 'm', 'Zwei Zimmer. Was kostet die Miete?', 'İki oda. Kira ne kadar?', 'Fiyat sorusu.',
      [BD('die Miete', 'kira', 'O', 'Feminin → die.')]),
    LN('B', 'f', 'Siebenhundert Euro warm, inklusive Nebenkosten.', 'Yedi yüz euro ısıtma dahil, ek masraflar dahil.',
      [BD('warm', 'ısıtma dahil', 'adj', 'Warmmiete = Nebenkosten dahil.')])
  ])],
  [LI('li1', 'Ali wohnt in einer Zweizimmerwohnung in München. Die Miete beträgt neunhundert Euro. Die Küche ist modern und der Balkon ist groß.',
    'Ali Münih\'te iki odalı bir dairede oturuyor. Kira dokuz yüz euro. Mutfak modern ve balkon büyük.',
    [Q('Wo wohnt Ali?', ['Berlin', 'Hamburg', 'München', 'Köln'], 2, 'Ali nerede oturuyor?'),
     Q('Wie viele Zimmer?', ['1', '2', '3', '4'], 1, 'Kaç oda?'),
     Q('Wie viel ist die Miete?', ['700 €', '800 €', '900 €', '1000 €'], 2, 'Kira ne kadar?')])]
);

const L15 = scenario('Education & School',
  mkScenarioWords([
    ['w1', 'die Schule', 'dee SHOO-le', 'okul'],
    ['w2', 'die Universität', 'dee u-ni-ver-zi-TET', 'üniversite'],
    ['w3', 'der Student / die Studentin', 'der shtu-DENT / dee shtu-DEN-tin', 'üniversite öğrencisi'],
    ['w4', 'der Lehrer / die Lehrerin', 'der LAY-rer / dee LAY-re-rin', 'öğretmen'],
    ['w5', 'der Kurs', 'der kurs', 'kurs'],
    ['w6', 'die Prüfung', 'dee PRÜ-fung', 'sınav'],
    ['w7', 'lernen', 'LER-nen', 'öğrenmek'],
    ['w8', 'studieren', 'shtu-DEE-ren', 'okumak (üniversite)'],
    ['w9', 'die Hausaufgabe', 'dee HAUS-auf-ga-be', 'ev ödevi'],
    ['w10', 'die Klasse', 'dee KLA-se', 'sınıf'],
    ['w11', 'der Stundenplan', 'der SHTUN-den-plan', 'ders programı'],
    ['w12', 'bestehen', 'be-SHTAY-en', 'geçmek (sınav)']
  ]),
  [G('g1', 'Eğitim Hayatı', 'Education',
    'Ich studiere ... an der Universität = Üniversitede ... okuyorum. Ich lerne Deutsch = Almanca öğreniyorum. Die Prüfung ist am... = Sınav ... günü.',
    [{ pronoun: 'Okumak', form: 'Ich studiere...', example: 'Ich studiere Medizin.', tr: 'Tıp okuyorum.' },
     { pronoun: 'Öğrenmek', form: 'Ich lerne...', example: 'Ich lerne Deutsch.', tr: 'Almanca öğreniyorum.' },
     { pronoun: 'Sınav', form: 'Ich habe eine Prüfung', example: 'Nächste Woche habe ich eine Prüfung.', tr: 'Gelecek hafta sınavım var.' },
     { pronoun: 'Başarı', form: 'Ich habe bestanden', example: 'Ich habe die Prüfung bestanden.', tr: 'Sınavı geçtim.' }],
    'Almanya\'da eğitim ücretsiz (devlet üniversiteleri) — çok kaliteli.')],
  [SP('sp1', 'Ich lerne Deutsch.', 'Almanca öğreniyorum.', 'Ne öğrendiğini söyle'),
   SP('sp2', 'Ich studiere an der Universität.', 'Üniversitede okuyorum.', 'Eğitim durumunu söyle'),
   SP('sp3', 'Nächste Woche habe ich eine Prüfung.', 'Gelecek hafta sınavım var.', 'Sınav haberi ver'),
   SP('sp4', 'Der Kurs beginnt um neun Uhr.', 'Kurs saat dokuzda başlıyor.', 'Kurs saati söyle'),
   SP('sp5', 'Ich habe die Prüfung bestanden!', 'Sınavı geçtim!', 'Başarı paylaş')],
  [DL('d1', 'An der Uni', 'At University', [
    LN('A', 'f', 'Was studierst du?', 'Ne okuyorsun?', 'Samimi soru — du formu.',
      [BD('Was studierst du', 'Ne okuyorsun', 'question', 'du ile samimi.')]),
    LN('B', 'm', 'Ich studiere Informatik. Und du?', 'Bilgisayar okuyorum. Ya sen?',
      [BD('Informatik', 'bilgisayar bilimi', 'O', 'Neutrum → das Fach.')]),
    LN('A', 'f', 'Ich studiere Medizin. Schwer, aber interessant!', 'Tıp okuyorum. Zor ama ilginç!',
      [BD('Schwer, aber interessant', 'Zor ama ilginç', 'adj', 'Aber = ama.')]),
    LN('B', 'm', 'Viel Erfolg bei der Prüfung!', 'Sınavda başarılar!', 'Erfolg = başarı.',
      [BD('Viel Erfolg', 'Başarılar', 'phrase', 'Sınav öncesi iyi dilek.')])
  ])],
  [LI('li1', 'Ali besucht einen Deutschkurs. Der Kurs ist montags und mittwochs von achtzehn bis zwanzig Uhr. Nächsten Monat hat er eine Prüfung.',
    'Ali bir Almanca kursuna gidiyor. Kurs pazartesi ve çarşamba 18-20 arası. Gelecek ay sınavı var.',
    [Q('Welche Sprache lernt Ali?', ['Englisch', 'Französisch', 'Deutsch', 'Türkisch'], 2, 'Ali hangi dili öğreniyor?'),
     Q('An welchen Tagen?', ['Mo+Di', 'Mo+Mi', 'Di+Do', 'Mi+Fr'], 1, 'Hangi günler?'),
     Q('Wann ist die Prüfung?', ['Diese Woche', 'Nächste Woche', 'Nächsten Monat', 'Nächstes Jahr'], 2, 'Sınav ne zaman?')])]
);

const L16 = scenario('Countries & Nationalities',
  mkScenarioWords([
    ['w1', 'Deutschland', 'DOYTSH-lant', 'Almanya'],
    ['w2', 'die Türkei', 'dee TÜR-kay', 'Türkiye'],
    ['w3', 'Österreich', 'ÖS-ter-aykh', 'Avusturya'],
    ['w4', 'die Schweiz', 'dee shvayts', 'İsviçre'],
    ['w5', 'deutsch', 'doytsh', 'Alman'],
    ['w6', 'türkisch', 'TÜR-kish', 'Türk'],
    ['w7', 'Woher kommen Sie?', 'vo-HER KO-men zee', 'Nerelisiniz?'],
    ['w8', 'Ich komme aus...', 'ikh KO-me aus', '...den geliyorum'],
    ['w9', 'Europa', 'oy-RO-pa', 'Avrupa'],
    ['w10', 'die Sprache', 'dee SHPRA-khe', 'dil'],
    ['w11', 'Englisch', 'ENG-lish', 'İngilizce'],
    ['w12', 'die Hauptstadt', 'dee HAUPT-shtat', 'başkent']
  ]),
  [G('g1', 'Ülkeler ve Milliyetler', 'Countries and Nationalities',
    'Woher kommen Sie? = Nerelisiniz? Ich komme aus der Türkei = Türkiye\'den geliyorum. Milliyet sıfatları küçük harfle: deutsch, türkisch. Ülkeler büyük harfle: Deutschland.',
    [{ pronoun: 'Soru', form: 'Woher kommen Sie?', example: 'Woher kommen Sie?', tr: 'Nerelisiniz?' },
     { pronoun: 'Cevap', form: 'Ich komme aus...', example: 'Ich komme aus der Türkei.', tr: 'Türkiye\'den geliyorum.' },
     { pronoun: 'Milliyet', form: 'Ich bin ...', example: 'Ich bin Türke.', tr: 'Türküm.' },
     { pronoun: 'Dil', form: 'Ich spreche...', example: 'Ich spreche Türkisch und Deutsch.', tr: 'Türkçe ve Almanca konuşuyorum.' }],
    'aus + dativ: aus der Türkei, aus Deutschland. aus + eril ülke: aus dem Iran.')],
  [SP('sp1', 'Woher kommen Sie?', 'Nerelisiniz?', 'Memleket sor'),
   SP('sp2', 'Ich komme aus der Türkei.', 'Türkiye\'den geliyorum.', 'Memleketini söyle'),
   SP('sp3', 'Ich bin Türke.', 'Türküm.', 'Milliyetini söyle'),
   SP('sp4', 'Ich spreche Türkisch und Deutsch.', 'Türkçe ve Almanca konuşuyorum.', 'Dillerini söyle'),
   SP('sp5', 'Die Hauptstadt der Türkei ist Ankara.', 'Türkiye\'nin başkenti Ankara.', 'Başkent söyle')],
  [DL('d1', 'Herkunft', 'Origin', [
    LN('A', 'f', 'Woher kommen Sie?', 'Nerelisiniz?', 'Resmi memleket sorusu.',
      [BD('Woher kommen Sie', 'Nerelisiniz', 'question', 'Woher = nereden.')]),
    LN('B', 'm', 'Ich komme aus der Türkei, aus Istanbul.', 'Türkiye\'den, İstanbul\'dan geliyorum.',
      [BD('aus der Türkei', 'Türkiye\'den', 'K', 'aus + dativ.')]),
    LN('A', 'f', 'Ah, schön! Sprechen Sie schon Deutsch?', 'Ah, güzel! Zaten Almanca konuşuyor musunuz?',
      [BD('schon', 'zaten / hâlihazırda', 'K', 'schon = already/zaten.')]),
    LN('B', 'm', 'Ein bisschen. Ich lerne noch.', 'Biraz. Hâlâ öğreniyorum.',
      [BD('Ein bisschen', 'Biraz', 'K', 'Miktar ifadesi.'), BD('noch', 'hâlâ', 'K', 'Devam eden eylem.')])
  ])],
  [LI('li1', 'Ali kommt aus der Türkei. Er wohnt jetzt in Berlin. Er spricht Türkisch, Deutsch und ein bisschen Englisch.',
    'Ali Türkiye\'den geliyor. Şimdi Berlin\'de yaşıyor. Türkçe, Almanca ve biraz İngilizce konuşuyor.',
    [Q('Woher kommt Ali?', ['Deutschland', 'Österreich', 'Türkei', 'Schweiz'], 2, 'Ali nereli?'),
     Q('Wo wohnt er jetzt?', ['Istanbul', 'Ankara', 'Berlin', 'München'], 2, 'Şimdi nerede yaşıyor?'),
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
    ['w7', 'Angst haben', 'angst HA-ben', 'korkmak'],
    ['w8', 'sich freuen', 'zikh FROY-en', 'sevinmek'],
    ['w9', 'sich langweilen', 'zikh LANG-vay-len', 'sıkılmak'],
    ['w10', 'stolz', 'shtolts', 'gururlu'],
    ['w11', 'überrascht', 'ü-ber-RASST', 'şaşırmış'],
    ['w12', 'Ich fühle mich...', 'ikh FÜ-le mikh', 'Kendimi ... hissediyorum']
  ]),
  [G('g1', 'Duyguları İfade Etme', 'Expressing Emotions',
    'Ich bin müde = yorgunum. Ich habe Angst = korkuyorum. Es freut mich = sevindim. Mir ist kalt/warm = üşüyorum/sıcaklanıyorum. Reflexive fiiller: sich freuen, sich langweilen.',
    [{ pronoun: 'Olumlu', form: 'Ich bin glücklich / freue mich', example: 'Ich freue mich auf morgen.', tr: 'Yarına seviniyorum.' },
     { pronoun: 'Olumsuz', form: 'Ich bin traurig / müde', example: 'Ich bin sehr müde.', tr: 'Çok yorgunum.' },
     { pronoun: 'Korku', form: 'Ich habe Angst vor...', example: 'Ich habe Angst vor Spinnen.', tr: 'Örümceklerden korkuyorum.' },
     { pronoun: 'Sorma', form: 'Wie fühlst du dich?', example: 'Wie fühlst du dich?', tr: 'Nasıl hissediyorsun?' }],
    'sich fühlen = hissetmek (reflexiv). Ich fühle mich gut = kendimi iyi hissediyorum.')],
  [SP('sp1', 'Ich bin glücklich.', 'Mutluyum.', 'Duygu ifade et'),
   SP('sp2', 'Ich bin müde.', 'Yorgunum.', 'Yorgunluğunu söyle'),
   SP('sp3', 'Ich freue mich!', 'Seviniyorum!', 'Sevincini ifade et'),
   SP('sp4', 'Wie fühlst du dich?', 'Nasıl hissediyorsun?', 'Duygu sor'),
   SP('sp5', 'Es tut mir leid.', 'Üzgünüm.', 'Özür dile')],
  [DL('d1', 'Gefühle', 'Feelings', [
    LN('A', 'f', 'Du siehst traurig aus. Was ist los?', 'Üzgün görünüyorsun. Ne oldu?', 'sich aussehen = görünmek.',
      [BD('traurig aussehen', 'üzgün görünmek', 'V', 'Aussehen = dış görünüş.')]),
    LN('B', 'm', 'Ich bin ein bisschen müde. Viel Arbeit.', 'Biraz yorgunum. Çok iş.',
      [BD('müde', 'yorgun', 'adj', 'Sein + sıfat.')]),
    LN('A', 'f', 'Das verstehe ich. Mach eine Pause!', 'Anlıyorum. Mola ver!', 'Pause machen = mola vermek.',
      [BD('Mach eine Pause', 'Mola ver', 'V', 'Imperativ — du formu.')]),
    LN('B', 'm', 'Danke. Das hilft.', 'Teşekkürler. Bu yardımcı oluyor.',
      [BD('Das hilft', 'Bu yardımcı oluyor', 'V', 'helfen = yardım etmek.')])
  ])],
  [LI('li1', 'Ali ist heute sehr glücklich. Er hat die Prüfung bestanden. Seine Freunde freuen sich mit ihm.',
    'Ali bugün çok mutlu. Sınavı geçti. Arkadaşları onunla birlikte seviniyor.',
    [Q('Wie fühlt sich Ali?', ['traurig', 'müde', 'glücklich', 'wütend'], 2, 'Ali nasıl hissediyor?'),
     Q('Warum?', ['Neuer Job', 'Prüfung bestanden', 'Urlaub', 'Party'], 1, 'Neden?'),
     Q('Wie reagieren die Freunde?', ['sie sind traurig', 'sie freuen sich', 'sie sind wütend', 'sie haben Angst'], 1, 'Arkadaşlar nasıl tepki veriyor?')])]
);

const L18 = scenario('Weather',
  mkScenarioWords([
    ['w1', 'das Wetter', 'das VET-er', 'hava'],
    ['w2', 'die Sonne', 'dee ZO-ne', 'güneş'],
    ['w3', 'der Regen', 'der RAY-gen', 'yağmur'],
    ['w4', 'der Schnee', 'der shnay', 'kar'],
    ['w5', 'der Wind', 'der vint', 'rüzgar'],
    ['w6', 'warm', 'varm', 'sıcak'],
    ['w7', 'kalt', 'kalt', 'soğuk'],
    ['w8', 'Wie ist das Wetter?', 'vee ist das VET-er', 'Hava nasıl?'],
    ['w9', 'Es regnet.', 'es RAY-net', 'Yağmur yağıyor.'],
    ['w10', 'Es schneit.', 'es shnayt', 'Kar yağıyor.'],
    ['w11', 'bewölkt', 'be-VÖLKT', 'bulutlu'],
    ['w12', 'der Regenschirm', 'der RAY-gen-shirm', 'şemsiye']
  ]),
  [G('g1', 'Hava Durumu', 'Weather',
    'Almancada hava es (it) ile: Es ist warm/kalt. Es regnet = yağmur yağıyor. Es scheint die Sonne = güneş parlıyor. Wie ist das Wetter heute? = Bugün hava nasıl?',
    [{ pronoun: 'Soru', form: 'Wie ist das Wetter?', example: 'Wie ist das Wetter heute?', tr: 'Bugün hava nasıl?' },
     { pronoun: 'Sıcaklık', form: 'Es ist ... Grad', example: 'Es ist zwanzig Grad.', tr: 'Hava yirmi derece.' },
     { pronoun: 'Yağış', form: 'Es regnet / schneit', example: 'Es regnet heute.', tr: 'Bugün yağmur yağıyor.' },
     { pronoun: 'Tavsiye', form: 'Nimm einen Regenschirm!', example: 'Es wird regnen.', tr: 'Yağmur yağacak.' }],
    'Almanya\'da hava değişken — her zaman şemsiye taşı!')],
  [SP('sp1', 'Wie ist das Wetter heute?', 'Bugün hava nasıl?', 'Hava sor'),
   SP('sp2', 'Es ist warm und sonnig.', 'Hava sıcak ve güneşli.', 'Hava durumu söyle'),
   SP('sp3', 'Es regnet. Ich brauche einen Regenschirm.', 'Yağmur yağıyor. Şemsiyeye ihtiyacım var.', 'Yağmurdan bahset'),
   SP('sp4', 'Es ist sehr kalt!', 'Hava çok soğuk!', 'Soğuktan bahset'),
   SP('sp5', 'Morgen wird es schneien.', 'Yarın kar yağacak.', 'Tahmin söyle')],
  [DL('d1', 'Wettergespräch', 'Weather Talk', [
    LN('A', 'm', 'Wie ist das Wetter heute?', 'Bugün hava nasıl?', 'Klasik sohbet açılışı — Almanya\'da çok yaygın.',
      [BD('Wetter', 'hava', 'O', 'Neutrum → das.')]),
    LN('B', 'f', 'Es ist kalt und bewölkt. Minus zwei Grad.', 'Soğuk ve bulutlu. Eksi iki derece.',
      [BD('bewölkt', 'bulutlu', 'adj', 'Wetter sıfatı.')]),
    LN('A', 'm', 'Oh! Dann brauche ich eine warme Jacke.', 'Oh! O zaman sıcak bir cekete ihtiyacım var.',
      [BD('eine warme Jacke', 'sıcak ceket', 'O', 'Adjektiv vor Nomen — sıfat çekimi.')]),
    LN('B', 'f', 'Ja, und vielleicht einen Schal. Es wird windig.', 'Evet, belki bir atkı. Rüzgarlı olacak.',
      [BD('windig', 'rüzgarlı', 'adj', 'Es wird = olacak (gelecek).')])
  ])],
  [LI('li1', 'Heute ist es sonnig und warm, zwanzig Grad. Morgen wird es regnen. Am Wochenende schneit es vielleicht.',
    'Bugün güneşli ve sıcak, yirmi derece. Yarın yağmur yağacak. Hafta sonu belki kar yağar.',
    [Q('Wie ist das Wetter heute?', ['regnerisch', 'sonnig und warm', 'schnee', 'windig'], 1, 'Bugün hava nasıl?'),
     Q('Was passiert morgen?', ['Sonne', 'Regen', 'Schnee', 'Wind'], 1, 'Yarın ne oluyor?'),
     Q('Was passiert am Wochenende?', ['Regen', 'Sonne', 'Schnee vielleicht', 'Sturm'], 2, 'Hafta sonu ne oluyor?')])]
);

const L19 = scenario('Entertainment & Hobbies',
  mkScenarioWords([
    ['w1', 'das Hobby', 'das HO-bee', 'hobi'],
    ['w2', 'lesen', 'LAY-zen', 'okumak'],
    ['w3', 'Musik hören', 'mu-ZEEK HÖ-ren', 'müzik dinlemek'],
    ['w4', 'Sport treiben', 'shtport TRAY-ben', 'spor yapmak'],
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
     { pronoun: 'İlgi', form: 'Ich interessiere mich für...', example: 'Ich interessiere mich für Musik.', tr: 'Müzikle ilgileniyorum.' },
     { pronoun: 'Davet', form: 'Lust auf...?', example: 'Hast du Lust auf Kino?', tr: 'Sinemaya gitmek ister misin?' }],
    'Am Wochenende = hafta sonu. In der Freizeit = boş zamanında.')],
  [SP('sp1', 'Mein Hobby ist Lesen.', 'Hobim okumak.', 'Hobini söyle'),
   SP('sp2', 'Ich treibe gern Sport.', 'Spor yapmayı severim.', 'Spor hakkında konuş'),
   SP('sp3', 'Hast du Lust auf Kino?', 'Sinemaya gitmek ister misin?', 'Etkinlik teklif et'),
   SP('sp4', 'Ich interessiere mich für Musik.', 'Müzikle ilgileniyorum.', 'İlgi alanını söyle'),
   SP('sp5', 'Am Wochenende wandere ich gern.', 'Hafta sonu yürüyüş yapmayı severim.', 'Hafta sonu planı söyle')],
  [DL('d1', 'Freizeit', 'Free Time', [
    LN('A', 'f', 'Was machst du am Wochenende?', 'Hafta sonu ne yapıyorsun?', 'Boş zaman sorusu.',
      [BD('am Wochenende', 'hafta sonu', 'K', 'am + Wochenende.')]),
    LN('B', 'm', 'Ich gehe wandern und lese gern.', 'Yürüyüşe gidiyorum ve okumayı severim.',
      [BD('wandern', 'yürüyüş yapmak', 'V', 'Almanya\'da çok popüler hobi.')]),
    LN('A', 'f', 'Cool! Ich gehe ins Kino. Willst du mitkommen?', 'Harika! Ben sinemaya gidiyorum. Benimle gelmek ister misin?',
      [BD('mitkommen', 'birlikte gelmek', 'V', 'mit = ile/birlikte.')]),
    LN('B', 'm', 'Ja, gerne! Welcher Film?', 'Evet, memnuniyetle! Hangi film?',
      [BD('Welcher Film', 'Hangi film', 'question', 'Welcher = hangi (eril).')])
  ])],
  [LI('li1', 'Am Samstag geht Ali ins Museum. Am Abend hört er Musik und liest ein Buch. Sonntag treibt er Sport.',
    'Cumartesi Ali müzeye gidiyor. Akşam müzik dinliyor ve kitap okuyor. Pazar spor yapıyor.',
    [Q('Wohin geht Ali am Samstag?', ['Kino', 'Museum', 'Konzert', 'Park'], 1, 'Cumartesi Ali nereye gidiyor?'),
     Q('Was macht er am Samstagabend?', ['Sport', 'Musik hören und lesen', 'Kochen', 'Reisen'], 1, 'Cumartesi akşamı ne yapıyor?'),
     Q('Was macht er am Sonntag?', ['Museum', 'Lesen', 'Sport treiben', 'Kino'], 2, 'Pazar ne yapıyor?')])]
);

const L20 = scenario('Daily Conversation Practice',
  mkScenarioWords([
    ['w1', 'Guten Tag!', 'GU-ten tak', 'İyi günler!'],
    ['w2', 'Wie geht es Ihnen?', 'vee GAYT es EE-nen', 'Nasılsınız?'],
    ['w3', 'Mir geht es gut.', 'meer GAYT es gut', 'İyiyim.'],
    ['w4', 'Entschuldigung', 'ent-SHUL-di-gung', 'Pardon / Affedersiniz'],
    ['w5', 'Kein Problem', 'kayn pro-BLAYM', 'Sorun değil'],
    ['w6', 'Natürlich', 'na-TÜR-lich', 'Tabii ki'],
    ['w7', 'Verstehen Sie?', 'fer-SHTAY-en zee', 'Anlıyor musunuz?'],
    ['w8', 'Ich verstehe nicht.', 'ikh fer-SHTAY-e nikht', 'Anlamıyorum.'],
    ['w9', 'Können Sie das wiederholen?', 'KÖ-nen zee das VEE-der-ho-len', 'Tekrar edebilir misiniz?'],
    ['w10', 'Langsam, bitte.', 'LANG-zam, bit-te', 'Yavaş, lütfen.'],
    ['w11', 'Einen Moment, bitte.', 'AY-nen mo-MENT, bit-te', 'Bir dakika, lütfen.'],
    ['w12', 'Alles klar!', 'A-les klar', 'Tamam! / Anlaşıldı!']
  ]),
  [G('g1', 'Günlük Konuşma Kalıpları', 'Daily Conversation Patterns',
    'Bu derste öğrendiğin tüm kalıpları birleştiriyoruz. Entschuldigung = pardon. Kein Problem = sorun değil. Langsam, bitte = yavaş, lütfen. Alles klar = tamam/anlaşıldı.',
    [{ pronoun: 'Anlama', form: 'Verstehen Sie? / Ich verstehe nicht', example: 'Entschuldigung, ich verstehe nicht.', tr: 'Pardon, anlamıyorum.' },
     { pronoun: 'Tekrar', form: 'Können Sie wiederholen?', example: 'Können Sie das bitte wiederholen?', tr: 'Tekrar edebilir misiniz?' },
     { pronoun: 'Onay', form: 'Alles klar / Natürlich', example: 'Alles klar, danke!', tr: 'Tamam, teşekkürler!' },
     { pronoun: 'Rica', form: 'Bitte / Danke / Gern geschehen', example: 'Danke! — Gern geschehen!', tr: 'Teşekkürler! — Rica ederim!' }],
    'Almanca öğrenirken "Langsam, bitte" cümlesini çok kullan — kimse alınmaz!'),
   G('g2', 'Küçük Konuşma — Small Talk', 'Small Talk',
    'Almanya\'da small talk kısa tutulur. Wie geht es Ihnen? → Mir geht es gut, danke. Schönes Wetter heute! = Bugün hava güzel! Schönes Wochenende! = İyi hafta sonları!',
    [{ pronoun: 'Hal hatır', form: 'Wie geht es?', example: 'Wie geht es Ihnen?', tr: 'Nasılsınız?' },
     { pronoun: 'Hava', form: 'Schönes Wetter!', example: 'Heute ist schönes Wetter.', tr: 'Bugün hava güzel.' },
     { pronoun: 'Hafta sonu', form: 'Schönes Wochenende!', example: 'Schönes Wochenende!', tr: 'İyi hafta sonları!' },
     { pronoun: 'Veda', form: 'Bis bald / Mach\'s gut', example: 'Bis bald!', tr: 'Yakında görüşürüz!' }],
    'Small talk sonrası asıl konuya geç — Almanya\'da verimlilik önemli.')],
  [SP('sp1', 'Entschuldigung, ich verstehe nicht.', 'Pardon, anlamıyorum.', 'Anlamadığını söyle'),
   SP('sp2', 'Können Sie bitte langsamer sprechen?', 'Lütfen daha yavaş konuşabilir misiniz?', 'Yavaş konuş iste'),
   SP('sp3', 'Alles klar, danke!', 'Tamam, teşekkürler!', 'Onayla'),
   SP('sp4', 'Schönes Wochenende!', 'İyi hafta sonları!', 'Hafta sonu dileği'),
   SP('sp5', 'Es freut mich, Sie kennenzulernen.', 'Tanıştığımıza memnun oldum.', 'Resmi tanışma')],
  [DL('d1', 'Alltagssituation', 'Daily Situation', [
    LN('A', 'm', 'Guten Tag! Wie geht es Ihnen?', 'İyi günler! Nasılsınız?', 'Resmi günlük selam.',
      [BD('Guten Tag', 'İyi günler', 'greeting', 'Standart gündüz selamı.')]),
    LN('B', 'f', 'Mir geht es gut, danke. Und Ihnen?', 'İyiyim, teşekkürler. Ya siz?',
      [BD('Mir geht es gut', 'İyiyim', 'V', 'Standart cevap.')]),
    LN('A', 'm', 'Auch gut. Entschuldigung, wo ist die Toilette?', 'Ben de iyiyim. Pardon, tuvalet nerede?',
      [BD('Entschuldigung', 'Pardon', 'courtesy', 'Yol sormadan önce.')]),
    LN('B', 'f', 'Geradeaus, dann links.', 'Düz, sonra sola.', 'Kısa yön tarifi.',
      [BD('Geradeaus, dann links', 'Düz sonra sol', 'direction', 'Basit tarif.')]),
    LN('A', 'm', 'Danke schön! Auf Wiedersehen!', 'Çok teşekkürler! Hoşça kalın!',
      [BD('Danke schön', 'Çok teşekkürler', 'courtesy', 'Nezaket.')])
  ]),
   DL('d2', 'Sprachkurs', 'Language Course', [
    LN('A', 'f', 'Verstehen Sie?', 'Anlıyor musunuz?', 'Öğretmen kontrol sorusu.',
      [BD('Verstehen Sie', 'Anlıyor musunuz', 'question', 'Resmi form.')]),
    LN('B', 'm', 'Nur ein bisschen. Können Sie langsamer sprechen?', 'Sadece biraz. Daha yavaş konuşabilir misiniz?',
      [BD('Nur ein bisschen', 'Sadece biraz', 'K', 'Sınırlı anlama.')]),
    LN('A', 'f', 'Natürlich! Kein Problem.', 'Tabii ki! Sorun değil.',
      [BD('Kein Problem', 'Sorun değil', 'phrase', 'Günlük rahatlatma.')]),
    LN('B', 'm', 'Danke! Jetzt verstehe ich.', 'Teşekkürler! Şimdi anlıyorum.',
      [BD('Jetzt verstehe ich', 'Şimdi anlıyorum', 'V', 'Jetzt = şimdi.')])
  ])],
  [LI('li1', 'Ali lernt Deutsch. Manchmal versteht er nicht alles. Er sagt: Entschuldigung, können Sie das wiederholen? Langsam, bitte. Dann versteht er.',
    'Ali Almanca öğreniyor. Bazen her şeyi anlamıyor. Diyor ki: Pardon, tekrar edebilir misiniz? Yavaş, lütfen. Sonra anlıyor.',
    [Q('Was lernt Ali?', ['Englisch', 'Deutsch', 'Französisch', 'Türkisch'], 1, 'Ali ne öğreniyor?'),
     Q('Was sagt Ali, wenn er nicht versteht?', ['Auf Wiedersehen', 'Langsam, bitte', 'Guten Tag', 'Prost'], 1, 'Anlamadığında ne diyor?'),
     Q('Versteht er am Ende?', ['Nein', 'Ja', 'Vielleicht', 'Nie'], 1, 'Sonunda anlıyor mu?')])]
);

// ─── Vocab lessons 21–49 ─────────────────────────────────────
const VOCAB = {
  21: ['Grundverben', [
    ['sein', 'zayn', 'olmak', { en: 'Er ist Arzt.', tr: 'O doktor.', bd: [BD('ist', 'dır', 'V', 'sein fiili')] }],
    ['haben', 'HA-ben', 'sahip olmak / var', { en: 'Ich habe Zeit.', tr: 'Vaktim var.', bd: [BD('habe', 'var', 'V', 'haben fiili')] }],
    ['werden', 'VER-den', 'olmak / -ecek', { en: 'Ich werde Arzt.', tr: 'Doktor olacağım.', bd: [BD('werde', 'olacağım', 'V', 'werden fiili')] }],
    ['machen', 'MA-khen', 'yapmak', { en: 'Was machst du?', tr: 'Ne yapıyorsun?', bd: [BD('machst', 'yapıyorsun', 'V', 'machen fiili')] }],
    ['gehen', 'GAY-en', 'gitmek', { en: 'Ich gehe nach Hause.', tr: 'Eve gidiyorum.', bd: [BD('gehe', 'gidiyorum', 'V', 'gehen fiili')] }],
    ['kommen', 'KO-men', 'gelmek', { en: 'Kommst du mit?', tr: 'Benimle gelir misin?', bd: [BD('Kommst du', 'Gelir misin', 'V', 'kommen fiili')] }],
    ['sehen', 'ZAY-en', 'görmek', { en: 'Ich sehe dich.', tr: 'Seni görüyorum.', bd: [BD('sehe', 'görüyorum', 'V', 'sehen fiili')] }],
    ['wissen', 'VIS-sen', 'bilmek', { en: 'Ich weiß es.', tr: 'Biliyorum.', bd: [BD('weiß', 'biliyorum', 'V', 'wissen — düzensiz')] }],
    ['denken', 'DEN-ken', 'düşünmek', { en: 'Ich denke, du hast recht.', tr: 'Sanırım haklısın.', bd: [BD('denke', 'sanırım', 'V', 'denken fiili')] }],
    ['wollen', 'VOL-len', 'istemek', { en: 'Ich will Deutsch lernen.', tr: 'Almanca öğrenmek istiyorum.', bd: [BD('will', 'istiyorum', 'V', 'wollen — düzensiz')] }],
    ['müssen', 'MÜ-sen', 'zorunda olmak / -meli', { en: 'Ich muss arbeiten.', tr: 'Çalışmam lazım.', bd: [BD('muss', 'lazım', 'V', 'müssen — düzensiz')] }],
    ['können', 'KÖ-nen', '-ebilmek', { en: 'Ich kann schwimmen.', tr: 'Yüzebilirim.', bd: [BD('kann', 'ebilirim', 'V', 'können — düzensiz')] }],
    ['mögen', 'MÖ-gen', 'sevmek / hoşlanmak', { en: 'Ich mag Kaffee.', tr: 'Kahveyi severim.', bd: [BD('mag', 'severim', 'V', 'mögen — düzensiz')] }],
    ['sagen', 'ZAH-gen', 'söylemek', { en: 'Was sagst du?', tr: 'Ne diyorsun?', bd: [BD('sagst', 'diyorsun', 'V', 'sagen fiili')] }],
    ['fragen', 'FRAH-gen', 'sormak', { en: 'Darf ich fragen?', tr: 'Sorabilir miyim?', bd: [BD('fragen', 'sormak', 'V', 'fragen fiili')] }],
    ['geben', 'GAY-ben', 'vermek', { en: 'Gib mir bitte das Buch.', tr: 'Lütfen kitabı ver.', bd: [BD('Gib', 'Ver', 'V', 'geben — düzensiz')] }],
    ['nehmen', 'NAY-men', 'almak', { en: 'Ich nehme den Bus.', tr: 'Otobüse biniyorum.', bd: [BD('nehme', 'alıyorum', 'V', 'nehmen — düzensiz')] }],
    ['finden', 'FIN-den', 'bulmak / beğenmek', { en: 'Ich finde das gut.', tr: 'Bunu iyi buluyorum.', bd: [BD('finde', 'buluyorum', 'V', 'finden fiili')] }],
    ['bleiben', 'BLAY-ben', 'kalmak', { en: 'Ich bleibe zu Hause.', tr: 'Evde kalıyorum.', bd: [BD('bleibe', 'kalıyorum', 'V', 'bleiben fiili')] }],
    ['stehen', 'SHTAY-en', 'durmak / yazılı olmak', { en: 'Das steht im Buch.', tr: 'Bu kitapta yazıyor.', bd: [BD('steht', 'yazıyor/duruyor', 'V', 'stehen fiili')] }],
    ['liegen', 'LEE-gen', 'yatmak / bulunmak', { en: 'Das Buch liegt auf dem Tisch.', tr: 'Kitap masanın üstünde.', bd: [BD('liegt', 'bulunuyor', 'V', 'liegen fiili')] }],
    ['bringen', 'BRING-en', 'getirmek', { en: 'Bring bitte Wasser.', tr: 'Lütfen su getir.', bd: [BD('Bring', 'Getir', 'V', 'bringen fiili')] }],
    ['helfen', 'HEL-fen', 'yardım etmek', { en: 'Kannst du mir helfen?', tr: 'Bana yardım edebilir misin?', bd: [BD('helfen', 'yardım etmek', 'V', 'helfen — düzensiz')] }],
    ['lernen', 'LER-nen', 'öğrenmek', { en: 'Ich lerne Deutsch.', tr: 'Almanca öğreniyorum.', bd: [BD('lerne', 'öğreniyorum', 'V', 'lernen fiili')] }],
    ['arbeiten', 'AR-bay-ten', 'çalışmak', { en: 'Er arbeitet in Berlin.', tr: 'Berlin\'de çalışıyor.', bd: [BD('arbeitet', 'çalışıyor', 'V', 'arbeiten fiili')] }]
  ]],
  22: ['Adjektive', [
    ['groß', 'gros', 'büyük'], ['klein', 'klayn', 'küçük'], ['gut', 'gut', 'iyi'],
    ['schlecht', 'shlekt', 'kötü'], ['neu', 'noy', 'yeni'], ['alt', 'alt', 'eski / yaşlı'],
    ['schnell', 'shnel', 'hızlı'], ['langsam', 'LANG-zam', 'yavaş'], ['einfach', 'AYN-fakh', 'kolay'],
    ['schwer', 'shvayr', 'zor / ağır'], ['schön', 'shön', 'güzel'], ['hässlich', 'HES-likh', 'çirkin'],
    ['hoch', 'khokh', 'yüksek / uzun'], ['niedrig', 'NEE-drikh', 'alçak / kısa'],
    ['leicht', 'laykht', 'hafif / kolay'], ['sauber', 'ZAU-ber', 'temiz'], ['schmutzig', 'SHMU-tsikh', 'kirli'],
    ['interessant', 'in-te-re-SANT', 'ilginç'], ['langweilig', 'LANG-vay-likh', 'sıkıcı'],
    ['teuer', 'TOY-er', 'pahalı'], ['billig', 'BIL-likh', 'ucuz'], ['wichtig', 'VIKH-tikh', 'önemli'],
    ['anders', 'AN-ders', 'farklı'], ['gleich', 'glaykh', 'aynı'], ['richtig', 'RIKH-tikh', 'doğru'],
    ['falsch', 'falsh', 'yanlış']
  ]],
  23: ['Menschen & Beziehungen', [
    ['der Mann', 'der man', 'adam / erkek'], ['die Frau', 'dee frau', 'kadın'], ['das Kind', 'das kint', 'çocuk'],
    ['der Vater', 'der FAH-ter', 'baba'], ['die Mutter', 'dee MUT-er', 'anne'], ['der Bruder', 'der BRU-der', 'erkek kardeş'],
    ['die Schwester', 'dee SHVES-ter', 'kız kardeş'], ['der Freund', 'der froynt', 'erkek arkadaş / erkek dost'],
    ['die Freundin', 'dee FROYND-in', 'kız arkadaş / kadın dost'], ['der Nachbar', 'der NAKH-bar', 'komşu (erkek)'],
    ['der Kollege', 'der ko-LAY-ge', 'iş arkadaşı (erkek)'], ['der Chef', 'der shef', 'patron (erkek)'],
    ['der Lehrer', 'der LAY-rer', 'öğretmen (erkek)'], ['der Arzt', 'der artst', 'doktor (erkek)'],
    ['der Student', 'der shtu-DENT', 'öğrenci (erkek)'], ['die Familie', 'dee fa-MEE-lee', 'aile'],
    ['der Ehemann', 'der AY-ge-mann', 'koca'], ['die Ehefrau', 'dee AY-ge-frau', 'eş (kadın)'],
    ['der Sohn', 'der zon', 'oğul'], ['die Tochter', 'dee TOKH-ter', 'kız evlat'],
    ['der Enkel', 'der ENG-kel', 'torun (erkek)'], ['die Großeltern', 'dee GROS-el-ternt', 'büyükanne/baba'],
    ['der Bekannte', 'der be-KANT-te', 'tanıdık'], ['der Fremde', 'der FREM-de', 'yabancı'],
    ['das Paar', 'das par', 'çift'], ['die Beziehung', 'dee be-ZEE-khung', 'ilişki'],
    ['der Gast', 'der gast', 'misafir']
  ]],
  24: ['Stadt & Orte', [
    ['die Stadt', 'dee shtat', 'şehir'], ['das Dorf', 'das dorf', 'köy'], ['die Straße', 'dee SHTra-se', 'cadde / sokak'],
    ['der Platz', 'der plats', 'meydan / alan'], ['der Markt', 'der markt', 'pazar / market'],
    ['das Geschäft', 'das ge-SHEFT', 'dükkan / iş yeri'], ['das Kaufhaus', 'das KAUF-haus', 'büyük mağaza'],
    ['die Bank', 'dee bank', 'banka'], ['die Post', 'dee post', 'postane'], ['das Krankenhaus', 'das KRANK-en-haus', 'hastane'],
    ['die Apotheke', 'dee a-po-TAY-ke', 'eczane'], ['die Schule', 'dee SHOO-le', 'okul'],
    ['die Universität', 'dee u-ni-ver-zi-TET', 'üniversite'], ['der Park', 'der park', 'park'],
    ['der Bahnhof', 'der BAHN-hof', 'tren istasyonu'], ['der Flughafen', 'der FLUKH-ha-fen', 'havaalanı'],
    ['die Haltestelle', 'dee HAL-te-shtel-le', 'durak'], ['die Brücke', 'dee BRÜ-ke', 'köprü'],
    ['das Rathaus', 'das RAT-haus', 'belediye binası'], ['die Kirche', 'dee KIR-khe', 'kilise'],
    ['das Museum', 'das mu-ZAY-um', 'müze'], ['das Kino', 'das KEE-no', 'sinema'],
    ['das Restaurant', 'das res-to-RANG', 'restoran'], ['das Café', 'das ka-FAY', 'kafe'],
    ['der Supermarkt', 'der ZU-per-markt', 'süpermarket'], ['die Bibliothek', 'dee bi-ble-o-TAYK', 'kütüphane'],
    ['der Bäcker', 'der BE-ker', 'fırıncı / ekmekçi'], ['die Innenstadt', 'dee IN-nen-shtat', 'şehir merkezi']
  ]],
  25: ['Essen & Trinken', [
    ['der Apfel', 'der AP-fel', 'elma'], ['die Orange', 'dee o-RAN-zhe', 'portakal'], ['die Banane', 'dee ba-NA-ne', 'muz'],
    ['die Erdbeere', 'dee ERT-bay-re', 'çilek'], ['die Tomate', 'dee to-MA-te', 'domates'], ['die Kartoffel', 'dee kar-TOF-fel', 'patates'],
    ['der Reis', 'der rays', 'pirinç'], ['das Brot', 'das brot', 'ekmek'], ['der Käse', 'der KAY-ze', 'peynir'],
    ['das Ei', 'das ay', 'yumurta'], ['das Fleisch', 'das flysh', 'et'], ['das Hähnchen', 'das HEN-khen', 'tavuk'],
    ['der Fisch', 'der fish', 'balık'], ['das Gemüse', 'das ge-MÜ-ze', 'sebze'], ['das Obst', 'das opst', 'meyve'],
    ['das Wasser', 'das VAS-ser', 'su'], ['der Kaffee', 'der ka-FE', 'kahve'], ['der Tee', 'der tay', 'çay'],
    ['der Saft', 'der zaft', 'meyve suyu'], ['das Bier', 'das beer', 'bira'], ['der Wein', 'der vayn', 'şarap'],
    ['das Frühstück', 'das FRÜ-shtük', 'kahvaltı'], ['das Mittagessen', 'das MIT-tak-es-sen', 'öğle yemeği'],
    ['das Abendessen', 'das A-bent-es-sen', 'akşam yemeği'], ['der Snack', 'der snack', 'atıştırmalık'],
    ['das Rezept', 'das re-TSEPT', 'tarif', { en: 'Hast du ein Rezept?', tr: 'Tarifin var mı?', bd: [BD('Rezept', 'tarif', 'O', 'Neutrum → das.')] }]
  ]],
  26: ['Farben', [
    ['rot', 'rot', 'kırmızı'], ['blau', 'blau', 'mavi'], ['grün', 'grün', 'yeşil'], ['gelb', 'gelp', 'sarı'],
    ['schwarz', 'shvarts', 'siyah'], ['weiß', 'vays', 'beyaz'], ['grau', 'grau', 'gri'], ['braun', 'braun', 'kahverengi'],
    ['orange', 'o-RAN-zhe', 'turuncu'], ['lila', 'LEE-la', 'mor'], ['rosa', 'RO-za', 'pembe'],
    ['hell', 'hel', 'açık (renk)'], ['dunkel', 'DUN-kel', 'koyu (renk)'], ['bunt', 'bunt', 'renkli / rengarenk'],
    ['farblos', 'FARB-los', 'renksiz'], ['die Farbe', 'dee FAR-be', 'renk'],
    ['bunt', 'bunt', 'renkli'], ['golden', 'GOL-den', 'altın rengi'], ['silbern', 'ZIL-bern', 'gümüş rengi'],
    ['beige', 'bezh', 'bej'], ['türkis', 'tür-KIS', 'turkuaz'], ['violett', 'vee-o-LET', 'eflatun'],
    ['farbig', 'FAR-bikh', 'renkli'], ['schillern', 'SHIL-ern', 'parıldamak'], ['leuchten', 'LOY-kh-ten', 'parlamak / ışıldamak'],
    ['der Farbton', 'der FARB-ton', 'renk tonu'], ['matt', 'mat', 'mat (parlak olmayan)']
  ]],
  27: ['Zeitausdrücke', [
    ['heute', 'HOY-te', 'bugün'], ['morgen', 'MOR-gen', 'yarın'], ['gestern', 'GES-tern', 'dün'],
    ['übermorgen', 'Ü-ber-mor-gen', 'yarından sonra'], ['vorgestern', 'FOR-ges-tern', 'evvelsi gün'],
    ['jetzt', 'yetst', 'şimdi'], ['später', 'SHPAY-ter', 'sonra'], ['früher', 'FRÜ-er', 'önce / eskiden'],
    ['bald', 'balt', 'yakında'], ['sofort', 'zo-FORT', 'hemen'], ['immer', 'IM-mer', 'her zaman'],
    ['manchmal', 'MANKH-mal', 'bazen'], ['nie', 'nee', 'asla / hiç'], ['oft', 'oft', 'sık sık'],
    ['selten', 'ZEL-ten', 'nadiren'], ['täglich', 'TAYK-likh', 'günlük'], ['wöchentlich', 'VÖKH-ent-likh', 'haftalık'],
    ['monatlich', 'mo-NAT-likh', 'aylık'], ['jährlich', 'YER-likh', 'yıllık'],
    ['die Minute', 'dee mi-NU-te', 'dakika'], ['die Stunde', 'dee SHTUN-de', 'saat'],
    ['der Tag', 'der tak', 'gün'], ['die Woche', 'dee VO-khe', 'hafta'],
    ['der Monat', 'der mo-NAT', 'ay'], ['das Jahr', 'das yar', 'yıl'],
    ['die Zeit', 'dee tsayt', 'zaman'], ['pünktlich', 'PÜNK-tlich', 'dakik']
  ]],
  28: ['Sport & Bewegung', [
    ['der Sport', 'der shport', 'spor'], ['Fußball', 'FUS-bal', 'futbol'], ['Basketball', 'BAS-ket-bal', 'basketbol'],
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
  29: ['Arbeit & Technologie', [
    ['der Computer', 'der kom-PYU-ter', 'bilgisayar'], ['der Laptop', 'der LAP-top', 'dizüstü bilgisayar'],
    ['das Handy', 'das HEN-dee', 'cep telefonu'], ['das Internet', 'das IN-ter-net', 'internet'],
    ['die E-Mail', 'dee EE-mayl', 'e-posta'], ['die Website', 'dee VEB-sayt', 'web sitesi'],
    ['die Software', 'dee SOFT-ver', 'yazılım'], ['die App', 'dee ep', 'uygulama'],
    ['das Passwort', 'das PAS-vort', 'şifre'], ['der Bildschirm', 'der BILT-shirm', 'ekran'],
    ['die Tastatur', 'dee tas-ta-TUR', 'klavye'], ['die Maus', 'dee maus', 'fare (bilgisayar)'],
    ['drucken', 'DRU-ken', 'yazdırmak'], ['speichern', 'SHPY-khern', 'kaydetmek'],
    ['löschen', 'LÖ-shen', 'silmek'], ['hochladen', 'HOKH-lah-den', 'yüklemek (upload)'],
    ['herunterladen', 'he-RUN-ter-lah-den', 'indirmek (download)'], ['das Meeting', 'das MEE-ting', 'toplantı (online)'],
    ['die Konferenz', 'dee kon-fe-RENTS', 'konferans'], ['das Büro', 'das BÜ-ro', 'ofis'],
    ['der Schreibtisch', 'der SHRAYP-tish', 'yazı masası'], ['der Drucker', 'der DRU-ker', 'yazıcı'],
    ['das Netzwerk', 'das NETS-verk', 'ağ / network'], ['die Datei', 'dee da-TAY', 'dosya'],
    ['der Kollege', 'der ko-LAY-ge', 'iş arkadaşı']
  ]],
  30: ['Reisen & Tourismus', [
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
  31: ['Zuhause & Möbel', [
    ['das Wohnzimmer', 'das VON-tsi-mer', 'oturma odası'], ['das Schlafzimmer', 'das SHLAF-tsi-mer', 'yatak odası'],
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
  32: ['Kleidung', [
    ['die Kleidung', 'dee KLAY-dung', 'giysi / kıyafet'], ['das Hemd', 'das hemt', 'gömlek (erkek)'],
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
    ['tragen', 'TRAH-gen', 'giymek / taşımak'], ['anprobieren', 'AN-pro-bee-ren', 'denemek (giysi)'],
    ['passen', 'PAS-sen', 'uymak'], ['die Größe', 'dee GRÖ-se', 'beden']
  ]],
  33: ['Natur & Umwelt', [
    ['die Natur', 'dee na-TUR', 'doğa'], ['der Wald', 'der valt', 'orman'],
    ['der Baum', 'der baum', 'ağaç'], ['die Blume', 'dee BLU-me', 'çiçek'],
    ['das Gras', 'das gras', 'çimen'], ['der Berg', 'der berk', 'dağ'],
    ['der Fluss', 'der flus', 'nehir'], ['der See', 'der zay', 'göl'],
    ['das Meer', 'das mayr', 'deniz'], ['der Strand', 'der shtrant', 'sahil'],
    ['die Sonne', 'dee ZO-ne', 'güneş'], ['der Mond', 'der mont', 'ay'],
    ['der Stern', 'der shtarn', 'yıldız'], ['der Himmel', 'der HI-mel', 'gökyüzü'],
    ['die Wolke', 'dee VOL-ke', 'bulut'], ['der Regen', 'der RAY-gen', 'yağmur'],
    ['der Schnee', 'der shnay', 'kar'], ['der Wind', 'der vint', 'rüzgar'],
    ['die Umwelt', 'dee UM-velt', 'çevre'], ['der Müll', 'der mül', 'çöp'],
    ['recyceln', 're-TSAY-keln', 'geri dönüştürmek'], ['schützen', 'SHÜ-tsen', 'korumak'],
    ['die Pflanze', 'dee PFLAN-tse', 'bitki'], ['das Tier', 'das teer', 'hayvan'],
    ['der Vogel', 'der FO-gel', 'kuş'], ['der Fisch', 'der fish', 'balık'],
    ['die Energie', 'dee en-er-GHEE', 'enerji']
  ]],
  34: ['Geld & Finanzen', [
    ['das Geld', 'das gelt', 'para'], ['der Euro', 'der OY-ro', 'euro'],
    ['der Cent', 'der tsent', 'sent'], ['die Bank', 'dee bank', 'banka'],
    ['das Konto', 'das KON-to', 'hesap (banka)'], ['die Kreditkarte', 'dee kre-DIT-kar-te', 'kredi kartı'],
    ['die EC-Karte', 'dee AY-Tsay kar-te', 'banka kartı (Almanya)'],
    ['bargeldlos', 'BAR-gelt-los', 'nakitsiz'], ['bar', 'bar', 'nakit'],
    ['bezahlen', 'be-TSA-len', 'ödemek'], ['kosten', 'KOS-ten', 'mal olmak / tutmak'],
    ['sparen', 'SHPAH-ren', 'biriktirmek / tasarruf etmek'], ['ausgeben', 'AUS-ge-ben', 'harcamak'],
    ['verdienen', 'fer-DEE-nen', 'kazanmak (para)'], ['die Rechnung', 'dee REKH-nung', 'fatura / hesap'],
    ['die Quittung', 'dee kvi-TUNG', 'fiş'], ['der Preis', 'der prays', 'fiyat'],
    ['der Rabatt', 'der ra-BAT', 'indirim'], ['teuer', 'TOY-er', 'pahalı'],
    ['billig', 'BIL-likh', 'ucuz'], ['kostenlos', 'KOS-ten-los', 'ücretsiz'],
    ['die Miete', 'dee MEE-te', 'kira'], ['das Gehalt', 'das ge-HALT', 'maaş'],
    ['die Versicherung', 'dee fer-ZI-khe-rung', 'sigorta'], ['die Steuer', 'dee SHTOY-er', 'vergi'],
    ['der Kredit', 'der kre-DIT', 'kredi'], ['die Schulden', 'dee SHUL-den', 'borçlar']
  ]],
  35: ['Wissenschaft & Forschung', [
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
  36: ['Kunst & Kultur', [
    ['die Kunst', 'dee kunst', 'sanat'], ['die Kultur', 'dee kul-TUR', 'kültür'],
    ['das Museum', 'das mu-ZAY-um', 'müze'], ['die Galerie', 'dee ga-le-REE', 'galeri'],
    ['das Gemälde', 'das ge-MEL-de', 'tablo / resim (sanat)'], ['die Skulptur', 'dee skulp-TUR', 'heykel'],
    ['der Künstler', 'der KÜNST-ler', 'sanatçı (erkek)'], ['die Ausstellung', 'dee AUS-shtel-lung', 'sergi'],
    ['das Konzert', 'das kon-TSERT', 'konser'], ['die Oper', 'dee O-per', 'opera'],
    ['das Theater', 'das te-A-ter', 'tiyatro'], ['der Schauspieler', 'der SHAUS-shpee-ler', 'oyuncu (erkek)'],
    ['die Musik', 'dee mu-ZEEK', 'müzik'], ['das Lied', 'das leet', 'şarkı'],
    ['der Maler', 'der MAH-ler', 'ressam'], ['der Dichter', 'der DIKH-ter', 'şair'],
    ['der Schriftsteller', 'der SHRIFT-shtel-ler', 'yazar'], ['das Buch', 'das bukh', 'kitap'],
    ['die Literatur', 'dee li-te-ra-TUR', 'edebiyat'], ['die Geschichte', 'dee ge-SHIKH-te', 'tarih / hikaye'],
    ['das Festival', 'das FES-ti-val', 'festival'], ['die Tradition', 'dee tra-di-TSI-on', 'gelenek'],
    ['das Brauchtum', 'das BRAUKH-tum', 'gelenek / adet'], ['feiern', 'FAY-ern', 'kutlamak'],
    ['bewundern', 'be-VUN-dern', 'hayran kalmak'], ['kreativ', 'kre-a-TEEF', 'yaratıcı'],
    ['inspirieren', 'in-shpi-REE-ren', 'ilham vermek']
  ]],
  37: ['Fragewörter', [
    ['wer', 'vayr', 'kim'], ['was', 'vas', 'ne'], ['wo', 'vo', 'nerede'],
    ['wohin', 'vo-HIN', 'nereye'], ['woher', 'vo-HER', 'nereden'], ['wann', 'van', 'ne zaman'],
    ['wie', 'vee', 'nasıl'], ['warum', 'va-RUM', 'neden / niçin'], ['welcher/welche/welches', 'VEL-kher', 'hangi'],
    ['wieviel', 'VEE-feel', 'ne kadar (miktar)'], ['wieso', 'VEE-zo', 'niye / neden (günlük)'],
    ['weshalb', 'VES-halp', 'neden (resmi)'], ['womit', 'vo-MIT', 'ne ile / neyle'],
    ['worüber', 'vo-RÜ-ber', 'ne hakkında'], ['wofür', 'vo-FÜR', 'ne için'],
    ['wessen', 'VES-sen', 'kimin'], ['wie viel', 'vee feel', 'ne kadar'],
    ['wie oft', 'vee oft', 'ne sıklıkla'], ['wie lange', 'vee LANG-ge', 'ne kadar süre'],
    ['inwiefern', 'in-VEE-fern', 'hangi açıdan / ne ölçüde'], ['ob', 'op', '... mı (dolaylı soru)'],
    ['Wer bist du?', 'vayr bist du', 'Sen kimsin?'], ['Was machst du?', 'vas makhs du', 'Ne yapıyorsun?'],
    ['Wo wohnst du?', 'vo vonst du', 'Nerede yaşıyorsun?'], ['Wann kommst du?', 'van komst du', 'Ne zaman geliyorsun?'],
    ['Warum lernst du Deutsch?', 'va-RUM lernst du doytsh', 'Neden Almanca öğreniyorsun?'], ['Wie heißt du?', 'vee hayst du', 'Adın ne?']
  ]],
  38: ['Berufe', [
    ['der Arzt / die Ärztin', 'der artst / dee ERT-sin', 'doktor'], ['der Lehrer / die Lehrerin', 'der LAY-rer / dee LAY-re-rin', 'öğretmen'],
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
    ['der Fotograf', 'der fo-to-GRAF', 'fotoğrafçı'], ['der Musiker', 'der MU-zi-ker', 'müzisyen'],
    ['der Schauspieler', 'der SHAUS-shpee-ler', 'oyuncu'], ['der Pilot', 'der pi-LOT', 'pilot'],
    ['der Krankenpfleger', 'der KRANK-en-pfle-ger', 'hemşire (erkek) / sağlık görevlisi'],
    ['der Student / die Studentin', 'der shtu-DENT / dee shtu-DEN-tin', 'öğrenci'],
    ['der Rentner', 'der RENT-ner', 'emekli'], ['der Chef / die Chefin', 'der shef / dee she-fin', 'patron / müdür'],
    ['der Arbeiter', 'der AR-bay-ter', 'işçi'], ['der Bauer', 'der BAU-er', 'çiftçi']
  ]],
  39: ['Denken & Meinung', [
    ['denken', 'DEN-ken', 'düşünmek'], ['glauben', 'GLAU-ben', 'inanmak / sanmak'],
    ['meinen', 'MAY-nen', 'düşünmek / kastetmek'], ['finden', 'FIN-den', 'bulmak / düşünmek'],
    ['verstehen', 'fer-SHTAY-en', 'anlamak'], ['zustimmen', 'TSU-shtim-men', 'katılmak / aynı fikirde olmak'],
    ['widersprechen', 'VI-der-shpre-khen', 'karşı çıkmak / itiraz etmek'], ['diskutieren', 'dis-ku-TEE-ren', 'tartışmak'],
    ['argumentieren', 'ar-gu-men-TEE-ren', 'argüman sunmak'], ['überzeugen', 'ü-ber-TSOY-gen', 'ikna etmek'],
    ['die Meinung', 'dee MAY-nung', 'görüş / fikir'], ['die Ansicht', 'dee AN-zikht', 'görüş / bakış açısı'],
    ['die Idee', 'dee i-DAY', 'fikir / idea'], ['der Standpunkt', 'der SHTANT-punkt', 'görüş / duruş'],
    ['Ich denke, dass...', 'ikh DEN-ke, das', 'Sanırım ki...'], ['Meiner Meinung nach...', 'MAY-ner MAY-nung nakh', 'Bence...'],
    ['Ich bin der Meinung, dass...', 'ikh bin der MAY-nung, das', 'Kanaatimce...'], ['Ich finde...', 'ikh FIN-de', 'Bence... / ... buluyorum'],
    ['Stimmt!', 'shtimt', 'Doğru! / Haklısın!'], ['Das stimmt nicht.', 'das shtimt nikht', 'Bu doğru değil.'],
    ['Vielleicht', 'fi-LAY-kht', 'belki'], ['Wahrscheinlich', 'var-SHAYn-likh', 'muhtemelen'],
    ['Sicher', 'ZI-kher', 'kesinlikle / eminim'], ['Zweifellos', 'TSVAY-fel-los', 'şüphesiz'],
    ['Interessant!', 'in-te-re-SANT', 'İlginç!'], ['Das ist eine gute Frage.', 'das ist AY-ne GU-te FRA-ge', 'Bu iyi bir soru.']
  ]],
  40: ['Tiere', [
    ['der Hund', 'der hunt', 'köpek'], ['die Katze', 'dee KAT-tse', 'kedi'], ['das Pferd', 'das pfayrt', 'at'],
    ['die Kuh', 'dee ku', 'inek'], ['das Schwein', 'das shvayn', 'domuz'], ['das Schaf', 'das shaf', 'koyun'],
    ['die Ziege', 'dee TSEE-ge', 'keçi'], ['das Huhn', 'das hun', 'tavuk (hayvan)'],
    ['der Hahn', 'der han', 'horoz'], ['das Kaninchen', 'das ka-NIN-khen', 'tavşan'],
    ['der Vogel', 'der FO-gel', 'kuş'], ['die Maus', 'dee maus', 'fare'],
    ['der Bär', 'der bayr', 'ayı'], ['der Wolf', 'der volf', 'kurt'],
    ['der Fuchs', 'der fuks', 'tilki'], ['der Löwe', 'der LÖ-ve', 'aslan'],
    ['der Elefant', 'der e-le-FANT', 'fil'], ['die Giraffe', 'dee zhi-RA-fe', 'zürafa'],
    ['das Krokodil', 'das kro-ko-DEEL', 'timsah'], ['die Schlange', 'dee SHLANG-ge', 'yılan'],
    ['der Fisch', 'der fish', 'balık'], ['der Hai', 'der hay', 'köpekbalığı'],
    ['der Delphin', 'der DEL-fin', 'yunus'], ['der Wal', 'der val', 'balina'],
    ['die Biene', 'dee BEE-ne', 'arı'], ['der Schmetterling', 'der SHMET-ter-ling', 'kelebek'],
    ['der Hase', 'der HAH-ze', 'tavşan (yabani)'], ['das Eichhörnchen', 'das AYK-hörnkhen', 'sincap']
  ]],
  41: ['Gesundheitsvokabular', [
    ['die Gesundheit', 'dee ge-ZUNT-hayt', 'sağlık'], ['krank', 'krank', 'hasta'],
    ['gesund', 'ge-ZUNT', 'sağlıklı'], ['der Schmerz / die Schmerzen', 'der shmerts / dee SHMER-tsen', 'ağrı'],
    ['das Fieber', 'das FEE-ber', 'ateş'], ['der Husten', 'der HUS-ten', 'öksürük'],
    ['die Erkältung', 'dee er-KEL-tung', 'soğuk algınlığı'], ['die Grippe', 'dee GRI-pe', 'grip'],
    ['die Allergie', 'dee a-LER-zhee', 'alerji'], ['das Medikament', 'das me-di-ka-MENT', 'ilaç'],
    ['das Rezept', 'das re-TSEPT', 'reçete'], ['die Apotheke', 'dee a-po-TAY-ke', 'eczane'],
    ['der Arzt / die Ärztin', 'der artst / dee ERT-sin', 'doktor'],
    ['das Krankenhaus', 'das KRANK-en-haus', 'hastane'], ['der Notfall', 'der NOT-fal', 'acil durum'],
    ['der Notarzt', 'der NOT-artst', 'acil doktor'], ['die Krankenversicherung', 'dee KRANK-en-fer-ZI-khe-rung', 'sağlık sigortası'],
    ['die Impfung', 'dee IMP-fung', 'aşı'], ['sich impfen lassen', 'zikh IMP-fen LA-sen', 'aşı olmak'],
    ['der Blutdruck', 'der BLUT-druk', 'tansiyon / kan basıncı'], ['der Puls', 'der puls', 'nabız'],
    ['übel', 'Ü-bel', 'mide bulantısı / kötü hissetme'], ['schwindlig', 'SHVINT-likh', 'baş dönmesi'],
    ['sich erholen', 'zikh er-HO-len', 'dinlenmek / iyileşmek'], ['heilen', 'HAY-len', 'iyileştirmek / iyileşmek'],
    ['operieren', 'o-pe-REE-ren', 'ameliyat etmek / ameliyat olmak'], ['die Operation', 'dee o-pe-ra-TSI-on', 'ameliyat']
  ]],
  42: ['Akademisches Deutsch', [
    ['die Universität', 'dee u-ni-ver-zi-TET', 'üniversite'], ['die Vorlesung', 'dee FOR-le-zung', 'ders (üniversite)'],
    ['das Seminar', 'das ze-mi-NAR', 'seminer'], ['die Prüfung', 'dee PRÜ-fung', 'sınav'],
    ['die Klausur', 'dee KLAU-zur', 'yazılı sınav'], ['die Hausarbeit', 'dee HAUS-ar-bayt', 'ev ödevi / araştırma yazısı'],
    ['die Bachelorarbeit', 'dee BE-khe-lor-ar-bayt', 'lisans tezi'], ['die Masterarbeit', 'dee MAS-ter-ar-bayt', 'yüksek lisans tezi'],
    ['die Dissertation', 'dee di-ser-ta-TSI-on', 'doktora tezi'], ['der Professor', 'der pro-FES-sor', 'profesör'],
    ['der Dozent', 'der do-TSEnt', 'doçent / öğretim görevlisi'], ['der Student / die Studentin', 'der shtu-DENT / dee shtu-DEN-tin', 'öğrenci'],
    ['das Fach', 'das fakh', 'branş / ders alanı'], ['das Semester', 'das ze-MES-ter', 'dönem / sömestr'],
    ['einschreiben', 'AYN-shray-ben', 'kaydolmak (üniversite)'], ['bestehen', 'be-SHTAY-en', 'geçmek (sınav)'],
    ['durchfallen', 'DURKH-fal-en', 'kalmak (sınav)'], ['das Stipendium', 'das shti-PEN-di-um', 'burs'],
    ['die Bibliothek', 'dee bi-ble-o-TAYK', 'kütüphane'], ['recherchieren', 're-sher-SHEE-ren', 'araştırmak'],
    ['zitieren', 'tsee-TEE-ren', 'alıntı yapmak'], ['das Quellenverzeichnis', 'das KVEL-len-fer-tsaykh-nis', 'kaynakça'],
    ['die These', 'dee TAY-ze', 'tez / sav'], ['argumentieren', 'ar-gu-men-TEE-ren', 'argüman sunmak'],
    ['analysieren', 'a-na-lü-ZEE-ren', 'analiz etmek'], ['zusammenfassen', 'tsu-ZA-men-fa-sen', 'özetlemek']
  ]],
  43: ['Technologie & Digitales Leben', [
    ['der Computer', 'der kom-PYU-ter', 'bilgisayar'], ['das Smartphone', 'das SMART-fon', 'akıllı telefon'],
    ['das Internet', 'das IN-ter-net', 'internet'], ['die Website', 'dee VEB-sayt', 'web sitesi'],
    ['die App', 'dee ep', 'uygulama'], ['die Software', 'dee SOFT-ver', 'yazılım'],
    ['die Hardware', 'dee HARD-ver', 'donanım'], ['das Passwort', 'das PAS-vort', 'şifre'],
    ['der Benutzername', 'der be-NUT-ser-na-me', 'kullanıcı adı'], ['einloggen', 'AYN-log-gen', 'giriş yapmak (login)'],
    ['ausloggen', 'AUS-log-gen', 'çıkış yapmak (logout)'], ['herunterladen', 'he-RUN-ter-lah-den', 'indirmek'],
    ['hochladen', 'HOKH-lah-den', 'yüklemek'], ['speichern', 'SHPY-khern', 'kaydetmek'],
    ['löschen', 'LÖ-shen', 'silmek'], ['der Cloud-Speicher', 'der klaut-SHPY-kher', 'bulut depolama'],
    ['die KI / künstliche Intelligenz', 'dee ka-INST-likhe in-tel-li-GHENTS', 'yapay zeka'],
    ['der Algorithmus', 'der al-go-RIT-mus', 'algoritma'], ['die Datenschutz', 'dee DA-ten-shuts', 'veri koruma / gizlilik'],
    ['die Cybersecurity', 'dee SY-ber-si-kyu-RI-tee', 'siber güvenlik'], ['hacken', 'HE-ken', 'hacklemek'],
    ['der Virus', 'der VEE-rus', 'virüs'], ['aktualisieren', 'ak-tu-a-li-ZEE-ren', 'güncellemek'],
    ['installieren', 'in-sta-li-ZEE-ren', 'yüklemek / kurmak'], ['die Benachrichtigung', 'dee be-NAAKH-rikh-ti-gung', 'bildirim'],
    ['streamen', 'SHTREE-men', 'yayın izlemek / stream'], ['online', 'ON-layn', 'çevrimiçi'],
    ['offline', 'OFF-layn', 'çevrimdışı']
  ]],
  44: ['Soziale Ausdrücke', [
    ['Herzlichen Glückwunsch!', 'HER-ts-likh-en GLÜK-vunsh', 'Tebrikler! / Kutlarım!'],
    ['Alles Gute!', 'A-les GU-te', 'Her şey gönlünce! / İyi ki doğdun!'],
    ['Gute Besserung!', 'GU-te BE-ser-ung', 'Geçmiş olsun!'],
    ['Guten Appetit!', 'GU-ten a-pe-TEET', 'Afiyet olsun!'],
    ['Prost!', 'prost', 'Şerefe!'],
    ['Prost Mahlzeit!', 'prost MAHL-tsayt', 'Afiyet olsun! (yemek öncesi)'],
    ['Gesundheit!', 'ge-ZUNT-hayt', 'Çok yaşa! (hapşırık sonrası)'],
    ['Willkommen!', 'VIL-ko-men', 'Hoş geldiniz!'],
    ['Schön, dass du da bist!', 'shön, das du da bist', 'Burada olman güzel!'],
    ['Viel Erfolg!', 'feel er-FOLK', 'Başarılar!'],
    ['Viel Spaß!', 'feel shpas', 'İyi eğlenceler!'],
    ['Schönes Wochenende!', 'SHÖ-nes VO-khen-en-de', 'İyi hafta sonları!'],
    ['Schönen Urlaub!', 'SHÖ-nen UR-laup', 'İyi tatiller!'],
    ['Gute Reise!', 'GU-te RAY-ze', 'İyi yolculuklar!'],
    ['Es tut mir leid.', 'es tut meer layt', 'Üzgünüm.'],
    ['Kein Problem.', 'kayn pro-BLAYM', 'Sorun değil.'],
    ['Keine Ursache.', 'KAY-ne UR-zau-khe', 'Önemli değil / Rica ederim.'],
    ['Das freut mich!', 'das froyt mikh', 'Buna sevindim!'],
    ['Wie schade!', 'vee SHAH-de', 'Ne yazık! / Çok kötü!'],
    ['Stimmt!', 'shtimt', 'Doğru! / Aynen!'],
    ['Genau!', 'ge-NAU', 'Aynen! / Tam olarak!'],
    ['Na klar!', 'na klar', 'Tabii ki! / Elbette!'],
    ['Mach\'s gut!', 'maks gut', 'Kendine iyi bak! / Hoşça kal! (samimi)'],
    ['Bis bald!', 'bis balt', 'Yakında görüşürüz!'],
    ['Schöne Grüße!', 'SHÖ-ne GRÜ-se', 'Selamlar! / Sevgiler!']
  ]],
  45: ['Geographie & Welt', [
    ['die Welt', 'dee velt', 'dünya'], ['der Kontinent', 'der kon-ti-NENT', 'kıta'],
    ['Europa', 'oy-RO-pa', 'Avrupa'], ['Asien', 'AH-zi-en', 'Asya'], ['Afrika', 'AF-ri-ka', 'Afrika'],
    ['Nordamerika', 'NORT-a-me-ri-ka', 'Kuzey Amerika'], ['Südamerika', 'ZÜT-a-me-ri-ka', 'Güney Amerika'],
    ['Australien', 'aus-TRA-lyen', 'Avustralya'], ['die Antarktis', 'dee an-TARK-tis', 'Antarktika'],
    ['Deutschland', 'DOYTSH-lant', 'Almanya'], ['die Türkei', 'dee TÜR-kay', 'Türkiye'],
    ['Österreich', 'ÖS-ter-aykh', 'Avusturya'], ['die Schweiz', 'dee shvayts', 'İsviçre'],
    ['Frankreich', 'FRANK-rikh', 'Fransa'], ['Italien', 'i-TA-lyen', 'İtalya'],
    ['Spanien', 'SHPA-nyen', 'İspanya'], ['England / Großbritannien', 'ENG-lant / GROS-bri-ta-nyen', 'İngiltere / Büyük Britanya'],
    ['die USA', 'dee U-es-A', 'ABD'], ['Russland', 'RUS-lant', 'Rusya'],
    ['China', 'KHEE-na', 'Çin'], ['Japan', 'ya-PAN', 'Japonya'],
    ['der Ozean', 'der o-tse-AN', 'okyanus'], ['der Atlantik', 'der at-LAN-tik', 'Atlas Okyanusu'],
    ['die Hauptstadt', 'dee HAUPT-shtat', 'başkent'], ['die Grenze', 'dee GREN-tse', 'sınır'],
    ['die Landkarte', 'dee LANT-kar-te', 'harita'], ['der Globus', 'der GLO-bus', 'küre / dünya küresi']
  ]],
  46: ['Aktionsverben', [
    ['gehen', 'GAY-en', 'gitmek'], ['kommen', 'KO-men', 'gelmek'], ['fahren', 'FAH-ren', 'gitmek (araçla)'],
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
    ['suchen', 'ZU-khen', 'aramak'], ['finden', 'FIN-den', 'bulmak'],
    ['geben', 'GAY-ben', 'vermek'], ['nehmen', 'NAY-men', 'almak'],
    ['kaufen', 'KAU-fen', 'satın almak'], ['verkaufen', 'fer-KAU-fen', 'satmak']
  ]],
  47: ['Geschichte & Gesellschaft', [
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
    ['Ostern', 'OS-tern', 'Paskalya'], ['Oktoberfest', 'ok-TO-ber-fest', 'Oktoberfest (Almanya)'],
    ['die Mauer', 'dee MAU-er', 'duvar (Berlin Duvarı vb.)'], ['die Einheit', 'dee AYN-hayt', 'birlik'],
    ['die Einwanderung', 'dee AYN-van-de-rung', 'göç / göçmenlik'], ['die Integration', 'dee in-te-g-Ra-TSI-on', 'entegrasyon'],
    ['die Meinungsfreiheit', 'dee MAY-nungs-fray-hayt', 'ifade özgürlüğü'], ['wählen', 'VAY-len', 'oy vermek / seçmek']
  ]],
  48: ['Redewendungen & Sprichwörter', [
    ['Alles in Ordnung.', 'A-les in ORD-nung', 'Her şey yolunda.'],
    ['Das ist nicht mein Bier.', 'das ist nikht mayn beer', 'Bu beni ilgilendirmez. (günlük)'],
    ['Da steppt der Bär.', 'da shtept der bayr', 'Orada eğlence dorukta. / Harika bir yer.'],
    ['Ich verstehe nur Bahnhof.', 'ikh fer-SHTAY-e nur BAHN-hof', 'Hiçbir şey anlamıyorum.'],
    ['Das ist mir Wurst.', 'das ist meer vurst', 'Umurumda değil. (günlük)'],
    ['Tomaten auf den Augen haben', 'to-MA-ten auf den AUG-en HA-ben', 'Görmemezlikten gelmek.'],
    ['Die Daumen drücken!', 'dee DAU-men DRÜ-ken', 'Başarı dilemek! (parmakları çaprazla)'],
    ['Schwein gehabt!', 'shvayn ge-HA-pt', 'Şanslısın! / Kurtuldun!'],
    ['Das geht auf keine Kuhhaut.', 'das gayt auf KAY-ne KOO-haut', 'Bu çok abartı / inanılmaz.'],
    ['Jemandem auf den Keks gehen', 'YAY-men-dem auf den keks GAY-en', 'Birini rahatsız etmek / sinirini bozmak.'],
    ['Ich glaube, ich spinne.', 'ikh GLAU-be, ikh SHPI-ne', 'Sanırım rüya görüyorum. / İnanamıyorum.'],
    ['Das ist ein Kinderspiel.', 'das ist ayn KIN-der-shpeel', 'Bu çocuk oyuncağı. / Çok kolay.'],
    ['Hals- und Beinbruch!', 'hals unt BAYN-brukh', 'Kırılacak bir yere git! (sahne öncesi)'],
    ['In den sauren Apfel beißen', 'in den ZAU-er-n AP-fel BEE-zen', 'Dişini sıkmak / zor bir şeyi kabul etmek.'],
    ['Etwas auf dem Schirm haben', 'ET-vas auf dem shirm HA-ben', 'Bir şeyi aklında/planında tutmak.'],
    ['Unter einer Decke stecken', 'UN-ter AY-ner DE-ke SHTE-ken', 'Aynı işi birlikte yapmak / gizlice anlaşmak.'],
    ['Das ist der Hammer!', 'das ist der HA-mer', 'Bu harika! / İnanılmaz! (günlük)'],
    ['Mal sehen.', 'mal ZAY-en', 'Göreceğiz. / Bakalım.'],
    ['Langsam aber sicher.', 'LANG-zam AH-ber ZI-kher', 'Yavaş ama emin adımlarla.'],
    ['Übung macht den Meister.', 'Ü-bung makht den MAYS-ter', 'Alıştırma ustalaştırır.'],
    ['Aller Anfang ist schwer.', 'A-ler AN-fang ist shvayr', 'Her başlangıç zordur.'],
    ['Morgenstund hat Gold im Mund.', 'MOR-gen-shtunt hat gold im munt', 'Erken kalkan yol alır.'],
    ['Was du heute kannst besorgen, das verschiebe nicht auf morgen.', 'vas du HOY-te kanst be-ZOR-gen, das fer-SHEE-be nikht auf MOR-gen', 'Bugünün işini yarına bırakma.'],
    ['In der Kürze liegt die Würze.', 'in der KÜR-tse leet dee VÜR-tse', 'Kısa ve öz olmak güzeldir.'],
    ['Andere Länder, andere Sitten.', 'AN-de-re LEN-der, AN-de-re ZIT-en', 'Her ülkenin adeti farklı.']
  ]],
  49: ['Gemischte Wiederholung & Fortgeschritten', [
    ['obwohl', 'op-VOHL', 'rağmen / -e rağmen'], ['trotzdem', 'TROTST-dem', 'yine de / buna rağmen'],
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
    ['infolge', 'IN-fol-ge', '... sonucu olarak'], ['trotz', 'trots', '... e rağmen (+ genitiv)'],
    ['anstatt', 'AN-shtat', '... yerine'], ['innerhalb', 'IN-er-halp', '... içinde / ... dahilinde'],
    ['außerhalb', 'AUS-ser-halp', '... dışında'], ['einschließlich', 'AYN-shlis-likh', '... dahil']
  ]]
};

function buildVocabLesson(n, title, entries) {
  const words = entries.map(([en, ro, tr, ex], i) => {
    const o = {};
    if (ex) o.ex = ex;
    return W(`w${i + 1}`, en, ro, tr, o);
  });
  return vocab(title, words);
}

// ─── All lessons map ─────────────────────────────────────────
const ALL = {
  1: ['Greetings & Introductions', L1],
  2: ['Artikel & sein', L2],
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

console.log(`\n✓ Generated ${created}/49 German lesson files in ${OUT_DIR}`);
if (errors.length) {
  console.error('\nErrors:');
  errors.forEach(({ n, error }) => console.error(`  ders${n}.js: ${error}`));
} else {
  console.log('No errors.');
}
console.log('\nFiles: ders1.js – ders49.js');
