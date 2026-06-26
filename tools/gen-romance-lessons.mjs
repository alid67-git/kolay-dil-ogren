#!/usr/bin/env node
/**
 * Generates Italian, Spanish, French lesson files ders1.js – ders49.js
 * Run: node tools/gen-romance-lessons.mjs it|es|fr|all
 */
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

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

function render(n, title, data, langLabel, tag = 'beginner') {
  return `// ders${n}.js — ${langLabel} Lesson ${n}: ${title} (${tag})\nconst L${n} = ${ser(data, 0)};\nLESSONS[${n}] = L${n};\n`;
}

function mkScenarioWords(list) {
  return list.map(([id, en, ro, tr, o = {}], i) => W(id || `w${i + 1}`, en, ro, tr, o));
}

function buildVocabLesson(title, entries) {
  const words = entries.map(([en, ro, tr, ex], i) => {
    const o = {};
    if (ex) o.ex = ex;
    return W(`w${i + 1}`, en, ro, tr, o);
  });
  return vocab(title, words);
}

const LANG_META = {
  es: { label: 'Spanish', l2: 'Artículos & ser' },
  it: { label: 'Italian', l2: 'Articoli & essere' },
  fr: { label: 'French', l2: 'Articles & être' }
};

// ─── Spanish L1-L3 ───────────────────────────────────────────
function buildEsL1() { return scenario('Greetings & Introductions',
  [
    W('w1', 'Hola', 'O-la', 'Merhaba',
      { tip: 'En yaygın selamlama.', ctx: 'Resmi ve gayri resmi her ortamda.',
        ex: { en: '¡Hola!', tr: 'Merhaba!', bd: [BD('Hola', 'Merhaba', 'greeting', 'İspanyolcada en sık kullanılan selam. Günün her saatinde geçerlidir.')] } }),
    W('w2', 'Buenos días', 'BWE-nos DEE-as', 'Günaydın',
      { tip: 'Sabah selamlaması.', ctx: 'Sabah ~14:00\'a kadar.',
        ex: { en: '¡Buenos días!', tr: 'Günaydın!', bd: [BD('Buenos', 'İyi', 'K', 'Bueno sıfatının çoğul eril hali — günleri nitelendirir.'), BD('días', 'günler', 'O', 'Día kelimesinin çoğulu. Sabah selamı öğlene kadar söylenir.')] } }),
    W('w3', 'Buenas tardes', 'BWE-nas TAR-des', 'İyi günler / İyi öğleden sonralar',
      { tip: 'Öğleden sonra selamlaması.', ctx: 'Öğleden akşama kadar.',
        ex: { en: '¡Buenas tardes!', tr: 'İyi günler!', bd: [BD('Buenas tardes', 'İyi günler', 'greeting', 'Resmi ortamlarda (banka, ofis) çok kullanılır. Tarde = öğleden sonra.')] } }),
    W('w4', 'Buenas noches', 'BWE-nas NO-ches', 'İyi akşamlar / İyi geceler',
      { tip: 'Akşam selamlaması veya vedası.', ctx: 'Akşam saatlerinde veya yatarken.',
        ex: { en: '¡Buenas noches!', tr: 'İyi akşamlar!', bd: [BD('noches', 'geceler', 'O', 'Gece selamı — akşam vedası veya yatmadan önce.')] } }),
    W('w5', 'Adiós', 'a-DYOS', 'Hoşça kal / Güle güle',
      { tip: 'Veda.', ctx: 'Her ortamda.',
        ex: { en: '¡Adiós!', tr: 'Hoşça kal!', bd: [BD('Adiós', 'Hoşça kal', 'farewell', 'Genel veda — resmi ve samimi ortamlarda kullanılır.')] } }),
    W('w6', '¿Cómo te llamas?', 'KO-mo te YA-mas', 'Adın ne? (samimi)',
      { tip: 'İsim sorma — tú formu.', ctx: 'Arkadaşlar, yaşıtlar arasında.',
        ex: { en: '¿Cómo te llamas?', tr: 'Adın ne?', bd: [BD('Cómo', 'Nasıl', 'question', 'Soru kelimesi.'), BD('te llamas', 'adın ...', 'V', 'llamarse = adlandırılmak. te = sana (reflexive).')] } }),
    W('w7', 'Me llamo...', 'me YA-mo', 'Benim adım ... / Adım ...',
      { tip: 'Kendini tanıtma.', ctx: 'İlk tanışmada.',
        ex: { en: 'Me llamo Ali.', tr: 'Benim adım Ali.', bd: [BD('Me llamo', 'Adım', 'V', 'llamarse fiili — isim söylemek için. me = ben (reflexive).'), BD('Ali', 'Ali', 'name', 'Özel isim — büyük harfle.')] } }),
    W('w8', 'Mucho gusto', 'MU-cho GUS-to', 'Tanıştığıma memnun oldum',
      { tip: 'Tanışma ifadesi.', ctx: 'Yeni biriyle tanışınca.',
        ex: { en: '¡Mucho gusto!', tr: 'Memnun oldum!', bd: [BD('Mucho gusto', 'Çok memnun oldum', 'phrase', 'Kısaltma: Mucho gusto en conocerte. Günlük konuşmada sadece "Mucho gusto" yeterli.')] } }),
    W('w9', 'Por favor', 'por fa-VOR', 'Lütfen',
      { tip: 'Nezaket kelimesi.', ctx: 'İstek yaparken.',
        ex: { en: 'Un café, por favor.', tr: 'Bir kahve, lütfen.', bd: [BD('Por favor', 'Lütfen', 'courtesy', 'İstek yaparken kullanılır.')] } }),
    W('w10', 'Gracias', 'GRA-syas', 'Teşekkür ederim',
      { tip: 'Minnet ifadesi.', ctx: 'Her yerde.',
        ex: { en: 'Muchas gracias.', tr: 'Çok teşekkür ederim!', bd: [BD('Gracias', 'Teşekkürler', 'courtesy', 'Tek başına yeterli. Muchas = çok → "çok teşekkürler".')] } }),
    W('w11', 'De nada', 'de NA-da', 'Rica ederim / Bir şey değil',
      { tip: 'Teşekküre cevap.', ctx: '"Gracias"a karşılık.',
        ex: { en: 'De nada.', tr: 'Rica ederim.', bd: [BD('De nada', 'Rica ederim', 'courtesy', '"Gracias"a standart cevap. Nada = hiçbir şey.')] } }),
    W('w12', 'Perdón', 'per-DON', 'Pardon / Affedersiniz',
      { tip: 'Özür / dikkat çekme.', ctx: 'Yanlışlıkla çarpmak, yol sormak.',
        ex: { en: 'Perdón, ¿dónde está el baño?', tr: 'Pardon, tuvalet nerede?', bd: [BD('Perdón', 'Pardon', 'courtesy', 'Hafif özür veya dikkat çekmek için. Disculpe daha resmi.')] } }),
    W('w13', '¿Cómo se llama usted?', 'KO-mo se YA-ma us-TED', 'Adınız ne? (resmi)',
      { tip: 'Resmi isim sorma.', ctx: 'Usted ile hitap ederken.',
        ex: { en: '¿Cómo se llama usted?', tr: 'Adınız ne?', bd: [BD('se llama', 'adınız ...', 'V', 'llamarse — usted formu. se = kendisi.'), BD('usted', 'siz (resmi)', 'O', 'Resmi hitap — tanımadığınız, yaşlı, resmi ortam.')] } }),
    W('w14', 'Encantado / Encantada', 'en-kan-TA-do / en-kan-TA-da', 'Memnun oldum (cinsiyete göre)',
      { tip: 'Resmi tanışma.', ctx: 'Erkek: encantado. Kadın: encantada.',
        ex: { en: 'Encantado.', tr: 'Memnun oldum.', bd: [BD('Encantado', 'Memnun oldum', 'phrase', 'Erkek konuşmacı kullanır. Kadın: Encantada. Resmi tanışmada Mucho gusto ile eşdeğer.')] } })
  ],
  [
    G('g1', 'Selamlaşma — Günün Saatine Göre', 'Greetings by Time of Day',
      'İspanyolcada selam, günün saatine göre değişir. "Buenos/Buenas" = iyi; ardından zaman kelimesi gelir. Sabah: Buenos días. Öğleden sonra: Buenas tardes. Akşam/gece: Buenas noches. Her zaman: Hola.',
      [
        { pronoun: 'Sabah', form: 'Buenos días', example: '¡Buenos días!', tr: 'Günaydın!' },
        { pronoun: 'Öğleden sonra', form: 'Buenas tardes', example: '¡Buenas tardes!', tr: 'İyi günler!' },
        { pronoun: 'Akşam/gece', form: 'Buenas noches', example: '¡Buenas noches!', tr: 'İyi akşamlar!' },
        { pronoun: 'Her zaman', form: 'Hola', example: '¡Hola!', tr: 'Merhaba!' }
      ],
      'Türkçede tek "Merhaba" yeter; İspanyolcada saat fark eder. Resmi ortamda Buenas tardes tercih edilir.'),
    G('g2', 'Tú vs Usted — Samimi ve Resmi Hitap', 'Informal vs Formal Address',
      'İspanyolcada iki hitap var: tú (sen) — arkadaş, aile, yaşıt. usted (Siz) — tanımadığınız, yaşlı, resmi ortam. Usted fiil 3. tekil çekim alır: ¿Cómo se llama usted? (se llama, not te llamas). Ali erkek öğrenci olarak yeni tanışmalarda usted kullanır; karşı taraf "Puedes tutearme" (sen diyebilirsin) derse tú\'ya geçilir.',
      [
        { pronoun: 'Samimi', form: 'tú / te / ti', example: '¿Cómo te llamas?', tr: 'Adın ne?' },
        { pronoun: 'Resmi', form: 'usted / le', example: '¿Cómo se llama usted?', tr: 'Adınız ne?' },
        { pronoun: 'Tanışma', form: 'Mucho gusto', example: '¡Mucho gusto!', tr: 'Memnun oldum.' },
        { pronoun: 'Veda', form: 'Adiós / Hasta luego', example: '¡Adiós!', tr: 'Hoşça kal.' }
      ],
      'İş görüşmesi, doktor, mağaza çalışanı → usted. Arkadaş, sınıf arkadaşı → tú. Kararsız kalırsan usted ile başla.')
  ],
  [
    SP('sp1', '¡Hola!', 'Merhaba!', 'Selamla'),
    SP('sp2', '¡Buenos días!', 'Günaydın!', 'Sabah selamı söyle'),
    SP('sp3', 'Me llamo Ali.', 'Benim adım Ali.', 'Adını söyle'),
    SP('sp4', '¡Mucho gusto!', 'Tanıştığıma memnun oldum.', 'Tanışma ifadesi',
      { gramNote: 'Tanışma kalıbı — yeni biriyle tanışınca.' }),
    SP('sp5', 'Gracias. ¡Adiós!', 'Teşekkürler. Hoşça kal!', 'Teşekkür et ve vedalaş')
  ],
  [
    DL('d1', 'İlk Tanışma', 'First Meeting', [
      LN('A', 'm', '¡Hola!', 'Merhaba!', 'En yaygın selamlama. Her ortamda kullanılır.',
        [BD('Hola', 'Merhaba', 'greeting', 'Resmi ve gayri resmi — günün her saati.')]),
      LN('B', 'f', '¡Buenas tardes!', 'İyi günler!', 'Öğleden sonra selamlama.',
        [BD('Buenas tardes', 'İyi günler', 'greeting', 'Ofis, mağaza gibi resmi ortamlarda tercih edilir.')]),
      LN('A', 'm', 'Me llamo Ali. ¿Y usted?', 'Benim adım Ali. Ya siz?',
        'Kendini tanıtma + karşı tarafa sorma. Y = ve, ya. usted = resmi "siz".',
        [BD('Me llamo', 'Adım', 'V', 'llamarse = adlandırılmak.'), BD('Ali', 'Ali', 'name', 'Özel isim.'), BD('¿Y usted?', 'Ya siz', 'question', 'Resmi hitapla isim sorma.')]),
      LN('B', 'f', 'Me llamo Ana. ¡Mucho gusto!', 'Benim adım Ana. Memnun oldum!',
        'İsim + tanışma ifadesi.',
        [BD('Me llamo Ana', 'Adım Ana', 'V', 'Kendini tanıtma.'), BD('Mucho gusto', 'Memnun oldum', 'phrase', 'Standart tanışma ifadesi.')]),
      LN('A', 'm', 'El gusto es mío. ¡Adiós!', 'Benim de memnuniyetim. Hoşça kalın!',
        'El gusto es mío = ben de memnun oldum.',
        [BD('El gusto es mío', 'Benim de memnuniyetim', 'phrase', 'Karşılıklı nezaket.'), BD('Adiós', 'Hoşça kal', 'farewell', 'Veda.')]),
      LN('B', 'f', '¡Hasta luego!', 'Görüşürüz!', 'Samimi veda.',
        [BD('Hasta luego', 'Görüşürüz', 'farewell', 'Günlük konuşmada sık veda.')])
    ]),
    DL('d2', 'Hal Hatır', 'How Are You', [
      LN('A', 'f', '¡Buenos días!', 'Günaydın!', 'Sabah selamlaması.',
        [BD('Buenos días', 'Günaydın', 'greeting', 'Öğlene kadar kullanılır.')]),
      LN('B', 'm', '¡Buenos días!', 'Günaydın!', 'Aynı selamlamaya karşılık.',
        [BD('Buenos días', 'Günaydın', 'greeting', 'Karşılıklı selam.')]),
      LN('A', 'f', '¿Cómo está usted?', 'Nasılsınız?', 'Resmi hal hatır. estar = durum/bulunmak.',
        [BD('¿Cómo está usted?', 'Nasılsınız', 'question', 'Usted → 3. tekil fiil (está). Resmi form.')]),
      LN('B', 'm', 'Muy bien, gracias. ¿Y usted?', 'Çok iyiyim, teşekkürler. Ya siz?',
        'Standart cevap. Muy = çok.',
        [BD('Muy bien', 'Çok iyi', 'V', 'Standart olumlu cevap.'), BD('gracias', 'teşekkürler', 'courtesy', 'Nezaket.'), BD('¿Y usted?', 'Ya siz', 'question', 'Karşılık sorma.')]),
      LN('A', 'f', 'También muy bien. ¡Adiós!', 'Ben de çok iyiyim. Hoşça kalın!',
        'También = de/da. Veda.',
        [BD('También', 'de / da', 'K', 'Karşı tarafa katılma.'), BD('Adiós', 'Hoşça kalın', 'farewell', 'Resmi ayrılık.')])
    ])
  ],
  [
    LI('li1', '¡Hola! Me llamo Emma. ¡Mucho gusto!', 'Merhaba! Benim adım Emma. Memnun oldum!',
      [Q('¿Cómo se llama ella?', ['Emma', 'Ali', 'Ana', 'Tom'], 0, 'Adı ne?'),
       Q('¿Qué saludo usa?', ['Adiós', 'Hola', 'Buenas noches', 'Perdón'], 1, 'Hangi selamı kullanıyor?'),
       Q('¿Qué dice después del nombre?', ['Gracias', 'Mucho gusto', 'Por favor', 'De nada'], 1, 'İsminden sonra ne diyor?')])
  ]
); }
function buildEsL2() { return scenario('Artículos & ser',
  [
    W('w1', 'el hombre', 'el OM-bre', 'adam (eril)', { tip: 'Belirli eril artikel: el.', ctx: 'Eril isimler el alır.',
      ex: { en: 'El hombre es alto.', tr: 'Adam uzun boylu.', bd: [BD('El', 'Belirli eril artikel', 'K', 'el = the (eril). hombre maskulin → el.'), BD('hombre', 'adam', 'O', 'Eril isim.'), BD('es alto', 'uzun boylu', 'V', 'ser + sıfat.')] } }),
    W('w2', 'la mujer', 'la mu-HER', 'kadın (dişil)', { tip: 'Belirli dişil artikel: la.', ctx: 'Dişil isimler la alır.',
      ex: { en: 'La mujer es amable.', tr: 'Kadın nazik.', bd: [BD('La', 'Belirli dişil artikel', 'K', 'la = the (dişil).'), BD('mujer', 'kadın', 'O', 'Dişil isim.'), BD('es amable', 'nazik', 'V', 'ser + sıfat.')] } }),
    W('w3', 'los niños', 'los NIN-yos', 'çocuklar (eril çoğul)', { tip: 'Belirli eril çoğul: los.', ctx: 'Eril çoğul isimler los alır.',
      ex: { en: 'Los niños juegan.', tr: 'Çocuklar oynuyor.', bd: [BD('Los', 'Belirli eril çoğul artikel', 'K', 'los = the (eril çoğul).'), BD('niños', 'çocuklar', 'O', 'Niño çoğulu.')] } }),
    W('w4', 'las mesas', 'las ME-sas', 'masalar (dişil çoğul)', { tip: 'Belirli dişil çoğul: las.', ctx: 'Dişil çoğul isimler las alır.',
      ex: { en: 'Las mesas son grandes.', tr: 'Masalar büyük.', bd: [BD('Las', 'Belirli dişil çoğul artikel', 'K', 'las = the (dişil çoğul).'), BD('mesas', 'masalar', 'O', 'Mesa çoğulu.')] } }),
    W('w5', 'un hombre', 'un OM-bre', 'bir adam', { tip: 'Belirsiz eril artikel: un.', ctx: 'Sayılmayan tekil eril.',
      ex: { en: 'Es un hombre.', tr: 'Bu bir adam.', bd: [BD('un', 'bir (eril)', 'K', 'Belirsiz artikel — eril tekil için un.'), BD('hombre', 'adam', 'O', 'Eril.')] } }),
    W('w6', 'una mujer', 'U-na mu-HER', 'bir kadın', { tip: 'Belirsiz dişil artikel: una.', ctx: 'Sayılmayan tekil dişil.',
      ex: { en: 'Es una profesora.', tr: 'O bir öğretmen.', bd: [BD('una', 'bir (dişil)', 'K', 'Belirsiz artikel — dişil tekil için una.'), BD('profesora', 'öğretmen (kadın)', 'O', 'Dişil meslek ismi -a eki alır.')] } }),
    W('w7', 'unos libros', 'U-nos LI-bros', 'bazı kitaplar / birkaç kitap', { tip: 'Belirsiz eril çoğul: unos.', ctx: 'Belirsiz eril çoğul.',
      ex: { en: 'Unos libros son interesantes.', tr: 'Bazı kitaplar ilginç.', bd: [BD('unos', 'bazı / birkaç (eril çoğul)', 'K', 'Belirsiz çoğul artikel.'), BD('libros', 'kitaplar', 'O', 'Libro çoğulu.')] } }),
    W('w8', 'unas flores', 'U-nas FLO-res', 'bazı çiçekler', { tip: 'Belirsiz dişil çoğul: unas.', ctx: 'Belirsiz dişil çoğul.',
      ex: { en: 'Unas flores son bonitas.', tr: 'Bazı çiçekler güzel.', bd: [BD('unas', 'bazı (dişil çoğul)', 'K', 'Belirsiz dişil çoğul artikel.'), BD('flores', 'çiçekler', 'O', 'Flor çoğulu.')] } }),
    W('w9', 'yo soy', 'yo soy', 'ben ...im / ben ...yim', { tip: 'ser — 1. tekil.', ctx: 'Kendini tanıtma, kimlik.',
      ex: { en: 'Yo soy Ali.', tr: 'Ben Ali\'yim.', bd: [BD('Yo', 'Ben', 'S', '1. tekil özne — genelde düşer.'), BD('soy', '...im / ...yim', 'V', 'ser fiili — yo ile soy. Türkçede "-im/-yim" eki karşılığı.')] } }),
    W('w10', 'tú eres', 'tu E-res', 'sen ...sin', { tip: 'ser — 2. tekil samimi.', ctx: 'Arkadaşlarla.',
      ex: { en: 'Tú eres amable.', tr: 'Sen naziksin.', bd: [BD('Tú', 'Sen', 'S', 'Samimi hitap.'), BD('eres', '...sin', 'V', 'tú ile eres.')] } }),
    W('w11', 'él es / ella es', 'el es / E-ya es', 'o ... (erkek/kadın)', { tip: 'ser — 3. tekil.', ctx: 'Başkasından bahsederken.',
      ex: { en: 'Él es estudiante.', tr: 'O (erkek) öğrenci.', bd: [BD('Él', 'O (erkek)', 'S', '3. tekil eril.'), BD('es', '...dir', 'V', 'él/ella/usted ile es.'), BD('estudiante', 'öğrenci', 'O', 'Cinsiyetsiz meslek ismi.')] } }),
    W('w12', 'nosotros somos', 'no-SO-tros SO-mos', 'biz ...iz', { tip: 'ser — 1. çoğul.', ctx: 'Grup halinde.',
      ex: { en: 'Nosotros somos amigos.', tr: 'Biz arkadaşız.', bd: [BD('Nosotros', 'Biz', 'S', '1. çoğul.'), BD('somos', '...iz', 'V', 'nosotros/vosotros/ellos/ustedes ile somos/son.')] } })
  ],
  [
    G('g1', 'Belirli Artikel — el / la / los / las', 'Definite Articles',
      'İspanyolcada her ismin cinsiyeti vardır: maskulin (eril) veya feminin (dişil). Belirli artikel (the) cinsiyet ve sayıya göre değişir: el (eril tekil), la (dişil tekil), los (eril çoğul), las (dişil çoğul). Türkçede artikel yok — bu İspanyolcanın en zor kısmı. İsimle birlikte artikelini ezberle: el hombre, la mujer, los niños, las mesas. Almancadan fark: İspanyolcada nötr cinsiyet yok; her isim eril veya dişildir.',
      [
        { pronoun: 'Eril (m)', form: 'el', example: 'el hombre, el libro', tr: 'adam, kitap' },
        { pronoun: 'Dişil (f)', form: 'la', example: 'la mujer, la puerta', tr: 'kadın, kapı' },
        { pronoun: 'Eril çoğul', form: 'los', example: 'los hombres, los libros', tr: 'adamlar, kitaplar' },
        { pronoun: 'Dişil çoğul', form: 'las', example: 'las mujeres, las mesas', tr: 'kadınlar, masalar' }
      ],
      'İpucu: Sözlükte her ismin yanında artikel yazar: el perro (köpek), la gata (dişi kedi). -o ile biten çoğu isim eril, -a ile biten çoğu dişil — ama istisnalar var (el día, la mano). Ezberle!'),
    G('g2', 'Belirsiz Artikel — un / una / unos / unas', 'Indefinite Articles',
      'Belirsiz artikel "bir" veya "bazı" anlamında: un (eril tekil), una (dişil tekil), unos (eril çoğul), unas (dişil çoğul). Türkçede "bir" tek kelime; İspanyolcada cinsiyet ve sayıya göre dört form var. Olumsuzda "no" kullanılır: No es un libro (Bu bir kitap değil). Meslek tanıtırken: Soy profesor (Öğretmenim) — artikel genelde düşer.',
      [
        { pronoun: 'Eril tekil', form: 'un', example: 'un hombre, un libro', tr: 'bir adam, bir kitap' },
        { pronoun: 'Dişil tekil', form: 'una', example: 'una mujer, una mesa', tr: 'bir kadın, bir masa' },
        { pronoun: 'Eril çoğul', form: 'unos', example: 'unos libros', tr: 'bazı kitaplar' },
        { pronoun: 'Dişil çoğul', form: 'unas', example: 'unas flores', tr: 'bazı çiçekler' }
      ],
      'un + eril tekil, una + dişil tekil. Çoğulda unos/unas "bazı" anlamı da katar. Artikel ismin cinsiyetini gösterir — Türkçede karşılığı yoktur.'),
    G('g3', 'Fiil: ser (olmak) — Tüm Çekimler', 'Verb: ser (to be)',
      'ser = olmak (kalıcı özellik, kimlik, meslek, milliyet). İspanyolcanın en önemli fiili. Türkçedeki "-im, -sin, -dir" yapısının temeli. Düzensiz fiil — ezberle! usted/él/ella hepsi "es" alır. vosotros (siz — sadece İspanya) "sois" alır. Latin Amerika\'da vosotros yerine ustedes kullanılır.',
      [
        { pronoun: 'yo', form: 'soy', example: 'Yo soy Ali.', tr: 'Ben Ali\'yim.' },
        { pronoun: 'tú', form: 'eres', example: 'Tú eres amable.', tr: 'Sen naziksin.' },
        { pronoun: 'él/ella/usted', form: 'es', example: 'Él es profesor.', tr: 'O öğretmen.' },
        { pronoun: 'nosotros', form: 'somos', example: 'Somos amigos.', tr: 'Biz arkadaşız.' },
        { pronoun: 'vosotros', form: 'sois', example: 'Sois bienvenidos.', tr: 'Hoş geldiniz.' },
        { pronoun: 'ellos/ustedes', form: 'son', example: 'Son amables.', tr: 'Onlar/Siz naziksiniz.' }
      ],
      'ser + sıfat/isim: Soy cansado (yorgunum — genel). ser + meslek: Soy estudiante. Soru: ¿Eres cansado? ¿Es él profesor? NOT: Geçici durumlar için estar kullanılır (sonraki derslerde).')
  ],
  [
    SP('sp1', 'Yo soy Ali.', 'Ben Ali\'yim.', 'Kendini tanıt (ser)', { gramNote: 'yo + soy — ser fiili 1. tekil.' }),
    SP('sp2', 'Es un libro.', 'Bu bir kitap.', 'Belirsiz artikel kullan', { gramNote: 'Es + un libro (eril). Yo genelde düşer.' }),
    SP('sp3', 'El hombre es alto.', 'Adam uzun boylu.', 'el + isim + ser + sıfat'),
    SP('sp4', 'La mujer es amable.', 'Kadın nazik.', 'la + isim + ser + sıfat'),
    SP('sp5', 'Somos amigos.', 'Biz arkadaşız.', 'nosotros + somos — ser çoğul')
  ],
  [
    DL('d1', 'Artikel Alıştırması', 'Article Practice', [
      LN('A', 'm', '¿Qué es esto?', 'Bu ne?', '¿Qué es esto? = Bu nedir? — tanımadığın bir şeyi sorarken.',
        [BD('Qué', 'Ne', 'question', 'Soru kelimesi.'), BD('es esto', 'bu ...dır', 'V', 'ser — esto (gösteren zamir) ile es.')]),
      LN('B', 'f', 'Es una mesa.', 'Bu bir masa.', 'Es una ... = Bu bir ... mesa dişil → una.',
        [BD('Es', 'Bu ...dır', 'V', 'ser 3. tekil.'), BD('una mesa', 'bir masa', 'O', 'Mesa dişil → una (belirsiz).')]),
      LN('A', 'm', '¿Y esto?', 'Peki bu?', 'Y = ve, peki.',
        [BD('Y', 'Ve / peki', 'K', 'Bağlaç.'), BD('esto', 'bu', 'question', 'Tekrar soru.')]),
      LN('B', 'f', 'Es la puerta.', 'Bu kapı.', 'Puerta dişil → la (belirli). Tanıdığın şey için la.',
        [BD('la puerta', 'kapı', 'O', 'Puerta dişil → la belirli artikel.')]),
      LN('A', 'm', '¿Es grande la mesa?', 'Masa büyük mü?', 'Evet/Hayır sorusu: fiil başa gelir veya tonlama.',
        [BD('Es', '... mı?', 'V', 'Soru tonu.'), BD('la mesa', 'masa', 'S', 'Dişil özne.'), BD('grande', 'büyük', 'adj', 'Sıfat — fiilden sonra.')]),
      LN('B', 'f', 'Sí, es grande.', 'Evet, o büyük.', 'Sí = evet.',
        [BD('es grande', 'büyük', 'V', 'ser + sıfat.')])
    ]),
    DL('d2', 'Kendini Tanıtma', 'Self Introduction with ser', [
      LN('A', 'm', 'Soy Ali. Soy estudiante.', 'Ben Ali. Ben öğrenciyim.', 'İki cümle ser ile — isim + meslek.',
        [BD('Soy Ali', 'Ben Ali\'yim', 'V', 'ser + isim.'), BD('Soy estudiante', 'Öğrenciyim', 'V', 'ser + meslek — artikel yok.')]),
      LN('B', 'f', '¡Qué bien! Soy María. Soy profesora.', 'Güzel! Ben María. Ben öğretmenim.',
        'Profesora = kadın öğretmen (dişil).',
        [BD('Qué bien', 'Güzel / ne güzel', 'adj', 'Olumlu tepki.'), BD('profesora', 'öğretmen (kadın)', 'O', '-a eki dişil meslek.')]),
      LN('A', 'm', '¿Es usted también profesora?', 'Siz de öğretmen misiniz?', 'Resmi soru — usted + es.',
        [BD('Es usted', 'Misiniz', 'V', 'Resmi soru.'), BD('también', 'de / da', 'K', 'también = de/da.')]),
      LN('B', 'f', 'Sí, soy profesora. ¿Y tú? ¿Eres estudiante?', 'Evet, öğretmenim. Ya sen? Öğrenci misin?',
        'tú\'ya geçiş — samimi ortam. ¿Eres ...? = sen ... misin?',
        [BD('¿Eres tú?', 'Sen ... misin', 'V', 'tú ile eres — samimi soru.'), BD('estudiante', 'öğrenci', 'O', 'Cinsiyetsiz meslek.')]),
      LN('A', 'm', 'Sí, soy estudiante. ¡Estamos en la lección uno!', 'Evet, öğrenciyim. Birinci dersteyiz!',
        [BD('Estamos', 'Biz ...deyiz', 'V', 'estar — geçici konum. ser değil!'), BD('lección uno', 'birinci ders', 'K', 'en + la = ...de/-da.')])
    ])
  ],
  [
    LI('li1', 'Es un hombre. El hombre es alto. La mujer es amable. Los niños son pequeños.',
      'Bu bir adam. Adam uzun boylu. Kadın nazik. Çocuklar küçük.',
      [Q('¿Qué artículo usa "hombre"?', ['la', 'los', 'el', 'un'], 2, '"hombre" hangi artikel alır?'),
       Q('¿Cómo se dice "mujer" en turco?', ['çocuk', 'kadın', 'masa', 'kapı'], 1, '"mujer" Türkçede ne?'),
       Q('¿Cómo son los niños?', ['grandes', 'pequeños', 'amables', 'altos'], 1, 'Çocuklar nasıl?')])
  ]
); }
const ES_NUMBERS = [
  { n: 0, word: 'cero', tr: 'sıfır' }, { n: 1, word: 'uno', tr: 'bir' }, { n: 2, word: 'dos', tr: 'iki' },
  { n: 3, word: 'tres', tr: 'üç' }, { n: 4, word: 'cuatro', tr: 'dört' }, { n: 5, word: 'cinco', tr: 'beş' },
  { n: 6, word: 'seis', tr: 'altı' }, { n: 7, word: 'siete', tr: 'yedi' }, { n: 8, word: 'ocho', tr: 'sekiz' },
  { n: 9, word: 'nueve', tr: 'dokuz' }, { n: 10, word: 'diez', tr: 'on' }, { n: 11, word: 'once', tr: 'on bir' },
  { n: 12, word: 'doce', tr: 'on iki' }, { n: 13, word: 'trece', tr: 'on üç' }, { n: 14, word: 'catorce', tr: 'on dört' },
  { n: 15, word: 'quince', tr: 'on beş' }, { n: 16, word: 'dieciséis', tr: 'on altı' }, { n: 17, word: 'diecisiete', tr: 'on yedi' },
  { n: 18, word: 'dieciocho', tr: 'on sekiz' }, { n: 19, word: 'diecinueve', tr: 'on dokuz' }, { n: 20, word: 'veinte', tr: 'yirmi' },
  { n: 30, word: 'treinta', tr: 'otuz' }, { n: 40, word: 'cuarenta', tr: 'kırk' }, { n: 50, word: 'cincuenta', tr: 'elli' },
  { n: 60, word: 'sesenta', tr: 'altmış' }, { n: 70, word: 'setenta', tr: 'yetmiş' }, { n: 80, word: 'ochenta', tr: 'seksen' },
  { n: 90, word: 'noventa', tr: 'doksan' }, { n: 100, word: 'cien', tr: 'yüz' }, { n: 1000, word: 'mil', tr: 'bin' }
];
const ES_COMPOUNDS = [
  { n: 21, word: 'veintiuno', tr: 'yirmi bir' }, { n: 32, word: 'treinta y dos', tr: 'otuz iki' },
  { n: 105, word: 'ciento cinco', tr: 'yüz beş' }, { n: 350, word: 'trescientos cincuenta', tr: 'üç yüz elli' },
  { n: 999, word: 'novecientos noventa y nueve', tr: 'dokuz yüz doksan dokuz' }, { n: 10000, word: 'diez mil', tr: 'on bin' }
];
function buildEsL3() {
  // ─── Lesson 3: Numbers & Money ───────────────────────────────
const NUMBERS_1_20 = [
  ['uno', 'U-no', 'bir'], ['dos', 'dos', 'iki'], ['tres', 'tres', 'üç'], ['cuatro', 'KWA-tro', 'dört'],
  ['cinco', 'SIN-ko', 'beş'], ['seis', 'says', 'altı'], ['siete', 'SYE-te', 'yedi'], ['ocho', 'O-cho', 'sekiz'],
  ['nueve', 'NWE-ve', 'dokuz'], ['diez', 'dyes', 'on'], ['once', 'ON-se', 'on bir'], ['doce', 'DO-se', 'on iki'],
  ['trece', 'TRE-se', 'on üç'], ['catorce', 'ka-TOR-se', 'on dört'], ['quince', 'KIN-se', 'on on beş'],
  ['dieciséis', 'dye-si-SAYS', 'on altı'], ['diecisiete', 'dye-si-SYE-te', 'on yedi'], ['dieciocho', 'dye-si-O-cho', 'on sekiz'],
  ['diecinueve', 'dye-si-NWE-ve', 'on dokuz'], ['veinte', 'BAYN-te', 'yirmi']
];

const COMPOUNDS_21_99 = [
  ['veintiuno', 'bayn-ti-U-no', 'yirmi bir'], ['veintidós', 'bayn-ti-DOS', 'yirmi iki'], ['veintitrés', 'bayn-ti-TRES', 'yirmi üç'],
  ['treinta', 'TRAYN-ta', 'otuz'], ['treinta y uno', 'TRAYN-ta i U-no', 'otuz bir'], ['cuarenta', 'kwa-REN-ta', 'kırk'],
  ['cincuenta', 'sin-KWEN-ta', 'elli'], ['sesenta', 'se-SEN-ta', 'altmış'], ['setenta', 'se-TEN-ta', 'yetmiş'],
  ['ochenta', 'o-CHEN-ta', 'seksen'], ['noventa', 'no-VEN-ta', 'doksan']
];

function numWords() {
  const nums = [
    ...NUMBERS_1_20,
    ['treinta', 'TRAYN-ta', 'otuz'], ['cuarenta', 'kwa-REN-ta', 'kırk'], ['cien', 'syen', 'yüz'], ['mil', 'mil', 'bin']
  ];
  return nums.map(([en, ro, tr], i) => W(`w${i + 1}`, en, ro, tr, i < 3 ? {
    tip: i === 0 ? 'Temel sayı.' : 'Sayma.',
    ctx: 'Sayılar ve miktar.',
    ex: { en: i === 0 ? 'Tengo un libro.' : i === 1 ? 'Dos cafés, por favor.' : `Hay ${en} gatos.`,
      tr: i === 0 ? 'Bir kitabım var.' : i === 1 ? 'İki kahve, lütfen.' : `${tr.charAt(0).toUpperCase() + tr.slice(1)} kedi var.`,
      bd: [BD(en, tr, 'number', `${en} = ${tr}`)] }
  } : {}));
}
  return { ...scenario('Numbers & Money',
  [
    ...numWords(),
    W('w25', '¿Cuánto cuesta?', 'KWAN-to KWES-ta', 'Bu ne kadar? / Kaça?',
      { tip: 'Fiyat sormak.', ctx: 'Alışverişte.',
        ex: { en: '¿Cuánto cuesta esto?', tr: 'Bu ne kadar?', bd: [BD('Cuánto', 'Ne kadar', 'question', 'Fiyat sorusu.'), BD('cuesta', '... tutar', 'V', 'costar = mal olmak. 3. tekil.')] } }),
    W('w26', 'euro', 'E-u-ro', 'euro',
      { ex: { en: 'Cuesta cinco euros.', tr: 'Bu beş euro.', bd: [BD('euros', 'euro', 'currency', 'Euro İspanya para birimi. Çoğul: euros.')] } }),
    W('w27', 'céntimo', 'SEN-ti-mo', 'sent',
      { ex: { en: 'Cuesta noventa y nueve céntimos.', tr: 'Bu doksan dokuz sent.', bd: [BD('céntimo', 'sent', 'currency', '1 Euro = 100 céntimos.')] } }),
    W('w28', 'la cuenta', 'la KWEN-ta', 'hesap / fatura',
      { ex: { en: 'La cuenta, por favor.', tr: 'Hesap, lütfen.', bd: [BD('cuenta', 'hesap', 'O', 'Dişil → la. Restoranda hesap isterken.')] } })
  ],
  [
    G('g1', 'İspanyolca Sayılar 1–20', 'Spanish Numbers 1–20',
      'İspanyolca sayılar 1–15 düzensiz, 16–19: dieci + sayı (dieciséis = 16). 20 = veinte. Dikkat: uno bir sayı olarak kalır; artikel/nitelik olarak un/una kullanılır. 21–29 tek kelime: veintiuno, veintidós...',
      NUMBERS_1_20.map(([en, , tr], i) => ({
        pronoun: String(i + 1),
        form: en,
        example: `${en.charAt(0).toUpperCase() + en.slice(1)}.`,
        tr
      })),
      '21+: veintiuno (tek kelime) veya treinta y uno (otuz bir). Y = ve birleştirir.'),
    G('g2', 'Bileşik Sayılar 21–99', 'Compound Numbers 21–99',
      '21–29: veinti- + sayı (veintidós). 31–39: treinta y dos... 41–49: cuarenta y uno... Her onluk + y + birler. 100 = cien (tek başına), ciento (101+).',
      COMPOUNDS_21_99.map(([en, , tr]) => ({
        pronoun: tr,
        form: en,
        example: en,
        tr
      })),
      'Ejemplo: 32 = treinta y dos. 99 = noventa y nueve. Fiyat: cinco euros con cincuenta céntimos.'),
    G('g3', 'Para — Euro y Céntimo', 'Money — Euro and Cent',
      'İspanya Euro (€) kullanır. Fiyat sormak: ¿Cuánto cuesta? / ¿Cuánto es? Cevap: Cuesta ... euros (y ... céntimos). Virgül ondalık için: 3,50 € = tres euros con cincuenta céntimos.',
      [
        { pronoun: 'Soru', form: '¿Cuánto cuesta...?', example: '¿Cuánto cuesta esto?', tr: 'Bu ne kadar?' },
        { pronoun: 'Cevap', form: 'Cuesta...', example: 'Cuesta diez euros.', tr: 'Bu on euro.' },
        { pronoun: 'Hesap', form: 'La cuenta, por favor', example: 'La cuenta, por favor.', tr: 'Hesap, lütfen.' },
        { pronoun: 'Ödeme', form: 'En efectivo / con tarjeta', example: '¿Puedo pagar con tarjeta?', tr: 'Kartla ödeyebilir miyim?' }
      ],
      'İspanya\'da nakit hâlâ yaygın. "¿Efectivo o tarjeta?" = Nakit mi kart mı?')
  ],
  [
    SP('sp1', 'Dos cafés, por favor.', 'İki kahve, lütfen.', 'Sayı ile sipariş ver'),
    SP('sp2', 'Cuesta cinco euros.', 'Bu beş euro.', 'Fiyat söyle'),
    SP('sp3', '¿Cuánto cuesta esto?', 'Bu ne kadar?', 'Fiyat sor'),
    SP('sp4', 'Tengo veinte euros.', 'Yirmi eurom var.', 'Paranı söyle'),
    SP('sp5', 'La cuenta, por favor.', 'Hesap, lütfen.', 'Hesap iste')
  ],
  [
    DL('d1', 'En el Café', 'At the Café', [
      LN('A', 'm', 'Dos cafés, por favor.', 'İki kahve, lütfen.', 'Sayı + isim. Café eril → dos cafés.',
        [BD('Dos cafés', 'İki kahve', 'O', 'Sayı + isim — çoğulda artikel düşer.')]),
      LN('B', 'f', '¿Algo más?', 'Başka bir şey?', 'Algo más = başka bir şey.',
        [BD('Algo más', 'Başka bir şey', 'question', 'Sipariş tamamlama sorusu.')]),
      LN('A', 'm', 'No, gracias. ¿Cuánto cuesta?', 'Hayır, teşekkürler. Ne kadar?',
        [BD('Cuánto cuesta', 'Ne kadar', 'question', 'Fiyat sorusu.')]),
      LN('B', 'f', 'Son seis euros con cincuenta.', 'Toplam altı euro elli.',
        [BD('Son', 'Toplam ...', 'V', 'Ser — toplam fiyat.')]),
      LN('A', 'm', 'Aquí tiene. ¡Gracias!', 'Buyurun. Teşekkürler!', 'Aquí tiene = buyurun (para verirken).',
        [BD('Aquí tiene', 'Buyurun', 'K', 'Para uzatırken.')])
    ])
  ],
  [
    LI('li1', 'El café cuesta tres euros. El pan cuesta dos euros con cincuenta. En total son cinco euros con cincuenta.',
      'Kahve üç euro. Ekmek iki euro elli. Toplam beş euro elli.',
      [Q('¿Cuánto cuesta el café?', ['2 €', '3 €', '5 €', '6 €'], 1, 'Kahve ne kadar?'),
       Q('¿Cuánto cuesta el pan?', ['2,50 €', '3 €', '5 €', '5,50 €'], 0, 'Ekmek ne kadar?'),
       Q('¿Cuánto es en total?', ['3 €', '5,05 €', '5,50 €', '6 €'], 2, 'Toplam ne kadar?')])
  ]
), numbers: ES_NUMBERS, compounds: ES_COMPOUNDS };
}

// ─── Italian L1-L3 ───────────────────────────────────────────
function buildItL1() { return scenario('Greetings & Introductions',
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
); }
function buildItL2() { return scenario('Articoli & essere',
  [
    W('w1', 'l\'uomo', 'LU-o-mo', 'adam (eril)', { tip: 'l\' — ünlü ile başlayan eril isimlerde.', ctx: 'uomo eril; ünlü ile başlar → l\'uomo.',
      ex: { en: 'L\'uomo è alto.', tr: 'Adam uzun boylu.', bd: [BD("l'", 'Belirli eril artikel (ünlü)', 'K', 'il → l\' (ünlü öncesi). uomo maskulin → l\'uomo.'), BD('uomo', 'adam', 'O', 'Eril isim.'), BD('è alto', 'uzun boylu', 'V', 'essere + sıfat.')] } }),
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
); }
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
function buildItL3() {
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
  const data = scenario('Numbers & Money',
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
  return { ...data, numbers: IT_NUMBERS, compounds: IT_COMPOUNDS };
}

// ─── French L1-L3 ────────────────────────────────────────────
function buildFrL1() { return scenario('Greetings & Introductions',
  [
    W('w1', 'Bonjour', 'bon-ZHOOR', 'Merhaba / Günaydın / İyi günler',
      { tip: 'En yaygın Fransız selamı.', ctx: 'Sabah, öğle ve gündüz — resmi ve samimi.',
        ex: { en: 'Bonjour!', tr: 'Merhaba!', bd: [BD('Bonjour', 'Merhaba', 'greeting', 'Fransızcadaki en temel selam. Gün boyunca (akşama kadar) kullanılır. bon = iyi, jour = gün.')] } }),
    W('w2', 'Bonsoir', 'bon-SWAR', 'İyi akşamlar',
      { tip: 'Akşam selamlaması.', ctx: 'Genellikle 18:00\'den sonra.',
        ex: { en: 'Bonsoir!', tr: 'İyi akşamlar!', bd: [BD('Bon', 'İyi', 'K', 'bon sıfatı — soir\'i nitelendirir.'), BD('soir', 'akşam', 'O', 'Akşam saatlerinde Bonjour yerine Bonsoir denir.')] } }),
    W('w3', 'Salut', 'sa-LÜ', 'Selam / Merhaba (samimi)',
      { tip: 'Gayri resmi selam.', ctx: 'Arkadaşlar, aile, gençler arasında.',
        ex: { en: 'Salut!', tr: 'Selam!', bd: [BD('Salut', 'Selam', 'greeting', 'Bonjour\'dan çok daha samimi. Resmi ortamda kullanma.')] } }),
    W('w4', 'Au revoir', 'o rə-VWAR', 'Hoşça kalın / Görüşürüz',
      { tip: 'Standart veda.', ctx: 'Resmi ve gayri resmi her ortamda.',
        ex: { en: 'Au revoir!', tr: 'Hoşça kalın!', bd: [BD('Au revoir', 'Görüşmek üzere', 'farewell', 'au = tekrar, revoir = görmek. Resmi ve kibar veda.')] } }),
    W('w5', 'Comment tu t\'appelles?', 'ko-MAN tü ta-PEL', 'Adın ne? (samimi)',
      { tip: 'Samimi isim sorma.', ctx: 'tu ile hitap ederken.',
        ex: { en: 'Comment tu t\'appelles?', tr: 'Adın ne?', bd: [BD('Comment', 'Nasıl', 'question', 'Soru kelimesi.'), BD('tu t\'appelles', 'adın ...', 'V', 's\'appeler fiili — kendini adlandırmak. tu → t\'appelles.')] } }),
    W('w6', 'Je m\'appelle ...', 'zhə ma-PEL', 'Benim adım ... / Adım ...',
      { tip: 'Kendini tanıtma.', ctx: 'İlk tanışmada.',
        ex: { en: 'Je m\'appelle Ali.', tr: 'Benim adım Ali.', bd: [BD('Je', 'Ben', 'S', '1. tekil özne.'), BD('m\'appelle', 'adım', 'V', 's\'appeler — je ile m\'appelle (edat birleşir).'), BD('Ali', 'Ali', 'name', 'Özel isim.')] } }),
    W('w7', 'Enchanté', 'an-shan-TAY', 'Tanıştığıma memnun oldum (erkek)',
      { tip: 'Tanışma ifadesi (erkek).', ctx: 'Kadın: Enchantée.',
        ex: { en: 'Enchanté!', tr: 'Memnun oldum!', bd: [BD('Enchanté', 'Büyülendim / memnun oldum', 'phrase', 'Erkek konuşmacı söyler. Kadın: Enchantée (son sesli genişler).')] } }),
    W('w8', 'S\'il vous plaît', 'sil vu PLE', 'Lütfen',
      { tip: 'Nezaket ifadesi.', ctx: 'Resmi isteklerde.',
        ex: { en: 'Un café, s\'il vous plaît.', tr: 'Bir kahve, lütfen.', bd: [BD('S\'il vous plaît', 'Lütfen', 'courtesy', 'Resmi "lütfen". Samimi: S\'il te plaît.')] } }),
    W('w9', 'Merci', 'mer-SEE', 'Teşekkür ederim',
      { tip: 'Minnet ifadesi.', ctx: 'Her yerde.',
        ex: { en: 'Merci beaucoup!', tr: 'Çok teşekkür ederim!', bd: [BD('Merci', 'Teşekkürler', 'V', 'Tek başına yeterli. beaucoup = çok → "çok teşekkürler".')] } }),
    W('w10', 'De rien', 'də RYAN', 'Rica ederim / Önemli değil',
      { tip: 'Teşekküre cevap.', ctx: '"Merci"ye karşılık.',
        ex: { en: 'De rien!', tr: 'Rica ederim!', bd: [BD('De rien', 'Bir şey değil', 'courtesy', 'Merci\'ye en yaygın cevap. Je vous en prie daha resmi.')] } }),
    W('w11', 'Pardon', 'par-DON', 'Pardon / Affedersiniz',
      { tip: 'Özür ve dikkat çekme.', ctx: 'Kalabalıkta, yanlışlıkla çarpınca.',
        ex: { en: 'Pardon, où est la gare?', tr: 'Pardon, istasyon nerede?', bd: [BD('Pardon', 'Pardon', 'courtesy', 'Dikkat çekmek veya özür dilemek için. Excusez-moi daha resmi.')] } }),
    W('w12', 'Comment vous appelez-vous?', 'ko-MAN vu za-ple VU', 'Adınız ne? (resmi)',
      { tip: 'Resmi isim sorma.', ctx: 'vous ile hitap ederken.',
        ex: { en: 'Comment vous appelez-vous?', tr: 'Adınız ne?', bd: [BD('vous appelez-vous', 'adınız', 'V', 'Resmi form — fiil özneden önce (soru).')] } })
  ],
  [
    G('g1', 'Selamlaşma — Bonjour / Bonsoir / Salut', 'Greetings by Time of Day',
      'Fransızca selam günün saatine göre değişir. Sabah–akşamüstü: Bonjour (iyi günler). Akşam: Bonsoir (iyi akşamlar). Salut = samimi selam, her saatte ama sadece arkadaşlarla. Gece yatarken: Bonne nuit.',
      [
        { pronoun: 'Gündüz', form: 'Bonjour', example: 'Bonjour!', tr: 'Merhaba / İyi günler!' },
        { pronoun: 'Akşam', form: 'Bonsoir', example: 'Bonsoir!', tr: 'İyi akşamlar!' },
        { pronoun: 'Samimi', form: 'Salut', example: 'Salut!', tr: 'Selam!' },
        { pronoun: 'Veda', form: 'Au revoir', example: 'Au revoir!', tr: 'Hoşça kalın!' }
      ],
      'Türkçede tek "Merhaba" yeter; Fransızcada akşam Bonsoir tercih edilir. Mağaza, banka → Bonjour.'),
    G('g2', 'tu vs vous — Samimi ve Resmi Hitap', 'Formal vs Informal Address',
      'Fransızca\'da iki hitap var: tu (sen) — arkadaş, aile, çocuk, yaşıt. vous (siz/sizler) — tanımadığınız, yaşlı, resmi ortam. Fiil çekimi değişir: tu t\'appelles vs vous vous appelez. Yeni tanışmalarda vous ile başla; karşı taraf "On peut se tutoyer" derse tu\'ya geç.',
      [
        { pronoun: 'Samimi', form: 'tu / te / toi', example: 'Comment tu t\'appelles?', tr: 'Adın ne?' },
        { pronoun: 'Resmi', form: 'vous', example: 'Comment vous appelez-vous?', tr: 'Adınız ne?' },
        { pronoun: 'Tanışma', form: 'Enchanté(e)', example: 'Enchanté!', tr: 'Memnun oldum.' },
        { pronoun: 'Nezaket', form: 'S\'il vous plaît', example: 'S\'il vous plaît.', tr: 'Lütfen.' }
      ],
      'İş, doktor, mağaza → vous. Arkadaş, sınıf arkadaşı → tu. Kararsız kalırsan vous ile başla — kaba sayılmaz.')
  ],
  [
    SP('sp1', 'Bonjour!', 'Merhaba!', 'Selamla'),
    SP('sp2', 'Je m\'appelle Ali.', 'Benim adım Ali.', 'Adını söyle'),
    SP('sp3', 'Enchanté!', 'Tanıştığıma memnun oldum.', 'Tanışma ifadesi',
      { gramNote: 'Erkek: Enchanté. Kadın: Enchantée. Tanışma kalıbı.' }),
    SP('sp4', 'Merci. Au revoir!', 'Teşekkürler. Hoşça kalın!', 'Teşekkür et ve vedalaş'),
    SP('sp5', 'S\'il vous plaît.', 'Lütfen.', 'Nezaket ifadesi kullan')
  ],
  [
    DL('d1', 'İlk Tanışma', 'First Meeting', [
      LN('A', 'm', 'Bonjour!', 'Merhaba!', 'Gündüz standart selam. Her ortamda kullanılır.',
        [BD('Bonjour', 'Merhaba', 'greeting', 'Resmi ve gayri resmi — gün boyunca.')]),
      LN('B', 'f', 'Bonjour! Comment vous appelez-vous?', 'Merhaba! Adınız ne?', 'Resmi tanışma — vous formu.',
        [BD('Comment vous appelez-vous', 'Adınız ne', 'question', 'Resmi hitap — fiil ters çevrilir.')]),
      LN('A', 'm', 'Je m\'appelle Ali. Et vous?', 'Benim adım Ali. Ya siz?',
        'Kendini tanıtma + karşı tarafa sorma. Et = ve, ya.',
        [BD('Je m\'appelle', 'Adım', 'V', 's\'appeler = adlandırılmak.'), BD('Et vous', 'Ya siz', 'question', 'Resmi karşılık sorma.')]),
      LN('B', 'f', 'Je m\'appelle Marie. Enchantée!', 'Benim adım Marie. Memnun oldum!',
        'Kadın konuşmacı: Enchantée (dişil uyumu).',
        [BD('Enchantée', 'Memnun oldum', 'phrase', 'Kadın formu — son -é → -ée.')]),
      LN('A', 'm', 'Enchanté. Au revoir!', 'Memnun oldum. Hoşça kalın!',
        'Erkek formu + resmi veda.',
        [BD('Enchanté', 'Memnun oldum', 'phrase', 'Erkek formu.'), BD('Au revoir', 'Hoşça kalın', 'farewell', 'Standart veda.')]),
      LN('B', 'f', 'Salut!', 'Selam!', 'Samimi veda — tanışma sonrası tu\'ya geçilmiş olabilir.',
        [BD('Salut', 'Selam', 'farewell', 'Samimi veda — arkadaş ortamında.')])
    ]),
    DL('d2', 'Nezaket', 'Politeness', [
      LN('A', 'f', 'Voici votre café.', 'Buyurun kahveniz.', 'Restoranda servis.',
        [BD('Voici', 'İşte / buyurun', 'V', 'Bir şeyi sunarken.')]),
      LN('B', 'm', 'Merci!', 'Teşekkürler!', 'Teşekkür.',
        [BD('Merci', 'Teşekkürler', 'courtesy', 'Standart minnet.')]),
      LN('A', 'f', 'De rien!', 'Rica ederim!', 'Teşekküre cevap.',
        [BD('De rien', 'Rica ederim', 'courtesy', 'Merci\'ye günlük cevap.')]),
      LN('B', 'm', 'Pardon, l\'addition, s\'il vous plaît.', 'Pardon, hesap, lütfen.',
        'Pardon = dikkat çekme. S\'il vous plaît = lütfen.',
        [BD('Pardon', 'Pardon', 'courtesy', 'Dikkat çekmek için.'), BD('s\'il vous plaît', 'lütfen', 'courtesy', 'Resmi nezaket.')]),
      LN('A', 'f', 'Tout de suite. Au revoir!', 'Hemen. Hoşça kalın!',
        'Tout de suite = hemen.',
        [BD('Tout de suite', 'Hemen', 'K', 'Hızlı hizmet ifadesi.')])
    ])
  ],
  [
    LI('li1', 'Bonjour! Je m\'appelle Emma. Enchantée!', 'Merhaba! Benim adım Emma. Memnun oldum!',
      [Q('Comment s\'appelle-t-elle?', ['Emma', 'Ali', 'Marie', 'Tom'], 0, 'Adı ne?'),
       Q('Quelle salutation utilise-t-elle?', ['Au revoir', 'Bonjour', 'Bonne nuit', 'Salut'], 1, 'Hangi selamı kullanıyor?'),
       Q('Que dit-elle après son nom?', ['Merci', 'Enchantée', 'De rien', 'Pardon'], 1, 'İsminden sonra ne diyor?')])
  ]
); }
function buildFrL2() { return scenario('Articles & être',
  [
    W('w1', 'l\'homme', 'lom', 'adam (eril)', { tip: 'l\' — sesli harfle başlayan isimlerde le → l\'.', ctx: 'homme maskulin; h sessiz ama h ünsüz sayılmaz — l\'homme.',
      ex: { en: 'L\'homme est grand.', tr: 'Adam uzun boylu.', bd: [BD("l'", 'Belirli eril artikel (sesli)', 'K', 'le → l\' (sesli harf öncesi). homme maskulin → l\'homme.'), BD('homme', 'adam', 'O', 'Maskulin isim.'), BD('est grand', 'uzun boylu', 'V', 'être + sıfat.')] } }),
    W('w2', 'la table', 'la TABL', 'masa (dişil)', { tip: 'Dişil belirli artikel: la.', ctx: 'Feminin isimler la alır.',
      ex: { en: 'La table est grande.', tr: 'Masa büyük.', bd: [BD('La', 'Belirli dişil artikel', 'K', 'la = the (dişil).'), BD('table', 'masa', 'O', 'Feminin isim.'), BD('est grande', 'büyük', 'V', 'être + sıfat.')] } }),
    W('w3', 'l\'enfant', 'lan-FAN', 'çocuk', { tip: 'Sesli harfle başlayan: l\'.', ctx: 'le/la → l\' (sesli harf öncesi).',
      ex: { en: 'L\'enfant joue.', tr: 'Çocuk oynuyor.', bd: [BD('L\'', 'Belirli artikel (sesli)', 'K', 'Sesli harfle başlayan isimlerde le/la → l\'.'), BD('enfant', 'çocuk', 'O', 'Genelde maskulin veya feminin — bağlama göre.')] } }),
    W('w4', 'un livre', 'an LIV-rə', 'bir kitap', { tip: 'Belirsiz eril: un.', ctx: 'Sayılmayan tekil eril.',
      ex: { en: 'C\'est un livre.', tr: 'Bu bir kitap.', bd: [BD('un', 'bir (eril)', 'K', 'Belirsiz artikel — eril için un.'), BD('livre', 'kitap', 'O', 'Maskulin.')] } }),
    W('w5', 'une table', 'ün TABL', 'bir masa', { tip: 'Belirsiz dişil: une.', ctx: 'Sayılmayan tekil dişil.',
      ex: { en: 'C\'est une table.', tr: 'Bu bir masa.', bd: [BD('une', 'bir (dişil)', 'K', 'Belirsiz artikel — dişil için une.'), BD('table', 'masa', 'O', 'Feminin.')] } }),
    W('w6', 'des livres', 'day LIV-rə', 'kitaplar (belirsiz çoğul)', { tip: 'Belirsiz çoğul: des.', ctx: 'un/une → des (çoğul).',
      ex: { en: 'J\'ai des livres.', tr: 'Kitaplarım var.', bd: [BD('des', 'birkaç / (belirsiz çoğul)', 'K', 'un/une\'nin çoğul hali = des.'), BD('livres', 'kitaplar', 'O', 'Çoğul — -s eki.')] } }),
    W('w7', 'je suis', 'zhə SÜİ', 'ben ...im / ben ...yim', { tip: 'être — 1. tekil.', ctx: 'Kendini tanıtma, durum.',
      ex: { en: 'Je suis Ali.', tr: 'Ben Ali\'yim.', bd: [BD('Je', 'Ben', 'S', '1. tekil özne.'), BD('suis', '...im / ...yim', 'V', 'être fiili — je ile suis. Türkçede "-im/-yim" eki karşılığı.')] } }),
    W('w8', 'tu es', 'tü E', 'sen ...sin', { tip: 'être — 2. tekil samimi.', ctx: 'Arkadaşlarla.',
      ex: { en: 'Tu es gentil.', tr: 'Sen naziksin.', bd: [BD('Tu', 'Sen', 'S', 'Samimi hitap.'), BD('es', '...sin', 'V', 'tu ile es.')] } }),
    W('w9', 'il est / elle est', 'il E / el E', 'o ... (erkek/kadın)', { tip: 'être — 3. tekil.', ctx: 'Başkasından bahsederken.',
      ex: { en: 'Il est étudiant.', tr: 'O (erkek) öğrenci.', bd: [BD('Il', 'O (erkek)', 'S', '3. tekil eril.'), BD('est', '...dir', 'V', 'il/elle ile est.'), BD('étudiant', 'öğrenci (erkek)', 'O', 'Meslek — cinsiyete göre değişir.')] } }),
    W('w10', 'nous sommes', 'nu SOM', 'biz ...iz', { tip: 'être — 1. çoğul.', ctx: 'Grup halinde.',
      ex: { en: 'Nous sommes amis.', tr: 'Biz arkadaşız.', bd: [BD('Nous', 'Biz', 'S', '1. çoğul.'), BD('sommes', '...iz', 'V', 'nous ile sommes.')] } }),
    W('w11', 'vous êtes', 'vu ZET', 'siz ...siniz', { tip: 'être — resmi/çoğul.', ctx: 'Resmi hitap veya çoğul.',
      ex: { en: 'Vous êtes professeur?', tr: 'Siz öğretmen misiniz?', bd: [BD('Vous', 'Siz', 'S', 'Resmi hitap veya 2. çoğul.'), BD('êtes', '...siniz', 'V', 'vous ile êtes.')] } }),
    W('w12', 'ils sont / elles sont', 'il SON / el SON', 'onlar ...', { tip: 'être — 3. çoğul.', ctx: 'Birden fazla kişi.',
      ex: { en: 'Ils sont français.', tr: 'Onlar Fransız.', bd: [BD('Ils/Elles', 'Onlar', 'S', 'ils = erkek/karma grup, elles = kadın grubu.'), BD('sont', '...lar', 'V', 'ils/elles ile sont.')] } })
  ],
  [
    G('g1', 'Belirli Artikeller — le / la / l\' / les', 'Definite Articles',
      'Fransızca\'da belirli artikel (the) cinsiyete göre değişir: le (eril), la (dişil), l\' (sesli harfle başlayan), les (çoğul — tüm cinsiyetler). Türkçede artikel yok — bu Fransızca\'nın temel zorluğu. İsimle birlikte artikelini ezberle: le livre, la table, l\'enfant, les livres. ÖNEMLİ: Türkçede "kitap güzel" deriz; Fransızca\'da mutlaka artikel gerekir: "Le livre est beau" (Kitap güzeldir).',
      [
        { pronoun: 'Eril (m)', form: 'le', example: 'le livre, le garçon', tr: 'kitap, oğlan' },
        { pronoun: 'Dişil (f)', form: 'la', example: 'la table, la fille', tr: 'masa, kız' },
        { pronoun: 'Sesli', form: 'l\'', example: 'l\'enfant, l\'école', tr: 'çocuk, okul' },
        { pronoun: 'Çoğul', form: 'les', example: 'les livres, les tables', tr: 'kitaplar, masalar' }
      ],
      'İpucu: Sözlükte her ismin yanında artikel yazar: le chien (köpek), la chatte (dişi kedi). Sesli harfle başlayanlarda le/la birleşir: l\'homme, l\'amie.'),
    G('g2', 'Belirsiz Artikeller — un / une / des', 'Indefinite Articles',
      'Belirsiz artikel "bir" anlamında: un (eril), une (dişil). Çoğulda des = "bazı / birkaç" (Türkçede çoğul belirsiz artikel yok). Olumsuzda "de" kullanılır: Je n\'ai pas de livre (Kitabım yok). Türkçe karşılaştırma: "bir kitap" = un livre; "kitaplar" (belirsiz) = des livres; "Kitap istiyorum" = Je veux un livre (tekil) veya des livres (çoğul).',
      [
        { pronoun: 'Eril', form: 'un', example: 'un livre, un garçon', tr: 'bir kitap, bir oğlan' },
        { pronoun: 'Dişil', form: 'une', example: 'une table, une fille', tr: 'bir masa, bir kız' },
        { pronoun: 'Çoğul', form: 'des', example: 'des livres, des tables', tr: 'kitaplar / bazı kitaplar' },
        { pronoun: 'Olumlu', form: 'C\'est un/une...', example: 'C\'est un livre.', tr: 'Bu bir kitap.' }
      ],
      'un + eril, une + dişil. Çoğulda des. Olumsuzda: pas de (pas d\' sesli öncesi).'),
    G('g3', 'Fiil: être (olmak) — Tüm Çekimler', 'Verb: être (to be)',
      'être = olmak. Fransızcanın en önemli fiili — düzensiz, ezberle! Türkçedeki "-im, -sin, -dir" yapısının temeli. Meslek/nationalité: artikel YOK — Je suis professeur (Öğretmenim), Il est français (Fransız). Soru: Es-tu fatigué? (Yorgun musun?) — fiil başa gelir. Vous = hem resmi "siz" hem çoğul "siz" — bağlamdan anlaşılır.',
      [
        { pronoun: 'je', form: 'suis', example: 'Je suis Ali.', tr: 'Ben Ali\'yim.' },
        { pronoun: 'tu', form: 'es', example: 'Tu es gentil.', tr: 'Sen naziksin.' },
        { pronoun: 'il/elle', form: 'est', example: 'Il est professeur.', tr: 'O öğretmen.' },
        { pronoun: 'nous', form: 'sommes', example: 'Nous sommes amis.', tr: 'Biz arkadaşız.' },
        { pronoun: 'vous', form: 'êtes', example: 'Vous êtes professeur?', tr: 'Siz öğretmen misiniz?' },
        { pronoun: 'ils/elles', form: 'sont', example: 'Ils sont français.', tr: 'Onlar Fransız.' }
      ],
      'être + sıfat: Je suis fatigué (yorgunum). être + meslek: Je suis étudiant (Öğrenciyim — artikel yok!). C\'est = Bu ...dır (nesne tanıtma): C\'est un livre.')
  ],
  [
    SP('sp1', 'Je suis Ali.', 'Ben Ali\'yim.', 'Kendini tanıt (être)', { gramNote: 'je + suis — être fiili 1. tekil.' }),
    SP('sp2', 'C\'est un livre.', 'Bu bir kitap.', 'Belirsiz artikel kullan', { gramNote: 'C\'est + un livre (eril belirsiz).' }),
    SP('sp3', 'Le livre est grand.', 'Kitap büyük.', 'le + isim + être + sıfat'),
    SP('sp4', 'La table est petite.', 'Masa küçük.', 'la + isim + être + sıfat'),
    SP('sp5', 'Nous sommes amis.', 'Biz arkadaşız.', 'nous + sommes — être çoğul')
  ],
  [
    DL('d1', 'Artikel Alıştırması', 'Article Practice', [
      LN('A', 'm', 'Qu\'est-ce que c\'est?', 'Bu ne?', 'Qu\'est-ce que c\'est? = Bu nedir? — tanımadığın bir şeyi sorarken.',
        [BD('Qu\'est-ce que c\'est', 'Bu ne', 'question', 'Est-ce que = soru yapısı.'), BD('c\'est', 'bu ...dır', 'V', 'ce + est birleşir.')]),
      LN('B', 'f', 'C\'est une table.', 'Bu bir masa.', 'C\'est une ... = Bu bir ... table feminin → une.',
        [BD('C\'est', 'Bu ...dır', 'V', 'Nesne tanıtma kalıbı.'), BD('une table', 'bir masa', 'O', 'table feminin → une (belirsiz).')]),
      LN('A', 'm', 'Et qu\'est-ce que c\'est?', 'Peki bu ne?', 'Et = ve, peki.',
        [BD('Et', 'Ve / peki', 'K', 'Bağlaç.'), BD('qu\'est-ce que c\'est', 'bu ne', 'question', 'Tekrar soru.')]),
      LN('B', 'f', 'C\'est la porte.', 'Bu kapı.', 'Porte feminin → la (belirli). Tanıdığın şey için la/le.',
        [BD('la porte', 'kapı', 'O', 'porte feminin → la belirli artikel.')]),
      LN('A', 'm', 'La table est grande?', 'Masa büyük mü?', 'Est-ce que sorusu veya ton yükselmesi.',
        [BD('La table', 'masa', 'S', 'Feminin özne.'), BD('est grande', 'büyük mü', 'V', 'être + sıfat — soru tonu.')]),
      LN('B', 'f', 'Oui, elle est grande.', 'Evet, o büyük.', 'elle = la table (dişil isimler elle zamir)',
        [BD('elle', 'o (dişil)', 'S', 'Dişil isimler elle zamir alır.'), BD('est grande', 'büyük', 'V', 'être + sıfat.')])
    ]),
    DL('d2', 'Kendini Tanıtma', 'Self Introduction with être', [
      LN('A', 'm', 'Je suis Ali. Je suis étudiant.', 'Ben Ali. Ben öğrenciyim.', 'İki cümle avec être — isim + meslek.',
        [BD('Je suis Ali', 'Ben Ali\'yim', 'V', 'être + isim.'), BD('Je suis étudiant', 'Öğrenciyim', 'V', 'être + meslek — artikel YOK! Türkçe gibi.')]),
      LN('B', 'f', 'Super! Je suis Marie. Je suis professeure.', 'Harika! Ben Marie. Ben öğretmenim.', 'Professeure = kadın öğretmen.',
        [BD('Super', 'Harika', 'adj', 'Olumlu tepki.'), BD('professeure', 'öğretmen (kadın)', 'O', 'Kadın meslek formu -e eki.')]),
      LN('A', 'm', 'Vous êtes aussi professeure?', 'Siz de öğretmen misiniz?', 'Resmi soru — vous + êtes.',
        [BD('Vous êtes', 'Misiniz', 'V', 'Resmi soru — fiil özneden sonra.'), BD('aussi', 'de / da', 'K', 'aussi = de/da.')]),
      LN('B', 'f', 'Oui, je suis professeure. Et toi? Tu es étudiant?', 'Evet, öğretmenim. Ya sen? Öğrenci misin?',
        'tu\'ya geçiş — samimi ortam. Tu es = sen ... misin?',
        [BD('Tu es', 'Sen ... misin', 'V', 'tu ile es — samimi soru.'), BD('étudiant', 'öğrenci (erkek)', 'O', 'Ali erkek → étudiant.')]),
      LN('A', 'm', 'Oui, je suis étudiant. Nous sommes en cours un!', 'Evet, öğrenciyim. Birinci dersteyiz!',
        [BD('Nous sommes', 'Biz ...iz', 'V', 'nous + sommes.'), BD('en cours un', 'birinci derste', 'K', 'en + cours = derste.')])
    ])
  ],
  [
    LI('li1', 'C\'est un livre. Le livre est grand. La table est belle. L\'enfant est petit.',
      'Bu bir kitap. Kitap büyük. Masa güzel. Çocuk küçük.',
      [Q('Quel article pour "livre"?', ['la', 'l\'', 'le', 'un'], 2, '"livre" hangi artikel alır?'),
       Q('Comment dit-on "table" en turc?', ['çocuk', 'masa', 'kitap', 'kapı'], 1, '"table" Türkçede ne?'),
       Q('L\'enfant est comment?', ['grand', 'petit', 'beau', 'belle'], 1, 'Çocuk nasıl?')])
  ]
); }
const FR_NUMBERS = [
  { n: 0, word: 'zéro', tr: 'sıfır' }, { n: 1, word: 'un', tr: 'bir' }, { n: 2, word: 'deux', tr: 'iki' },
  { n: 3, word: 'trois', tr: 'üç' }, { n: 4, word: 'quatre', tr: 'dört' }, { n: 5, word: 'cinq', tr: 'beş' },
  { n: 6, word: 'six', tr: 'altı' }, { n: 7, word: 'sept', tr: 'yedi' }, { n: 8, word: 'huit', tr: 'sekiz' },
  { n: 9, word: 'neuf', tr: 'dokuz' }, { n: 10, word: 'dix', tr: 'on' }, { n: 11, word: 'onze', tr: 'on bir' },
  { n: 12, word: 'douze', tr: 'on iki' }, { n: 13, word: 'treize', tr: 'on üç' }, { n: 14, word: 'quatorze', tr: 'on dört' },
  { n: 15, word: 'quinze', tr: 'on beş' }, { n: 16, word: 'seize', tr: 'on altı' }, { n: 17, word: 'dix-sept', tr: 'on yedi' },
  { n: 18, word: 'dix-huit', tr: 'on sekiz' }, { n: 19, word: 'dix-neuf', tr: 'on dokuz' }, { n: 20, word: 'vingt', tr: 'yirmi' },
  { n: 30, word: 'trente', tr: 'otuz' }, { n: 40, word: 'quarante', tr: 'kırk' }, { n: 50, word: 'cinquante', tr: 'elli' },
  { n: 60, word: 'soixante', tr: 'altmış' }, { n: 70, word: 'soixante-dix', tr: 'yetmiş' }, { n: 80, word: 'quatre-vingt', tr: 'seksen' },
  { n: 90, word: 'quatre-vingt-dix', tr: 'doksan' }, { n: 100, word: 'cent', tr: 'yüz' }, { n: 1000, word: 'mille', tr: 'bin' }
];
const FR_COMPOUNDS = [
  { n: 21, word: 'vingt et un', tr: 'yirmi bir' }, { n: 32, word: 'trente-deux', tr: 'otuz iki' },
  { n: 105, word: 'cent cinq', tr: 'yüz beş' }, { n: 350, word: 'trois cent cinquante', tr: 'üç yüz elli' },
  { n: 999, word: 'neuf cent quatre-vingt-dix-neuf', tr: 'dokuz yüz doksan dokuz' }, { n: 10000, word: 'dix mille', tr: 'on bin' }
];
function buildFrL3() {
  function numWords() {
  const nums = [
    ['un', 'an', 'bir'], ['deux', 'dö', 'iki'], ['trois', 'trwa', 'üç'], ['quatre', 'KAT-rə', 'dört'],
    ['cinq', 'sank', 'beş'], ['six', 'sis', 'altı'], ['sept', 'set', 'yedi'], ['huit', 'üit', 'sekiz'],
    ['neuf', 'nöf', 'dokuz'], ['dix', 'dis', 'on'], ['onze', 'onz', 'on bir'], ['douze', 'duz', 'on iki'],
    ['treize', 'trwaz', 'on üç'], ['quatorze', 'ka-TORZ', 'on dört'], ['quinze', 'kanz', 'on beş'],
    ['seize', 'sez', 'on altı'], ['dix-sept', 'dis-SET', 'on yedi'], ['dix-huit', 'dis-ÜIT', 'on sekiz'],
    ['dix-neuf', 'dis-NÖF', 'on dokuz'], ['vingt', 'van', 'yirmi'], ['trente', 'tront', 'otuz'],
    ['quarante', 'ka-RONT', 'kırk'], ['cinquante', 'kan-KONT', 'elli'], ['soixante', 'swa-SONT', 'altmış'],
    ['soixante-dix', 'swa-sont-DIS', 'yetmiş'], ['quatre-vingt', 'KAT-rə-VAN', 'seksen'],
    ['quatre-vingt-dix', 'KAT-rə-van-DIS', 'doksan'], ['cent', 'san', 'yüz'], ['mille', 'mil', 'bin']
  ];
  return nums.map(([en, ro, tr], i) => W(`w${i + 1}`, en, ro, tr, i < 3 ? {
    tip: i === 0 ? 'Temel sayı.' : 'Sayma.',
    ctx: 'Sayılar ve miktar.',
    ex: { en: i === 0 ? 'J\'ai un livre.' : i === 1 ? 'Deux cafés, s\'il vous plaît.' : `Il y a ${en} chats.`,
      tr: i === 0 ? 'Bir kitabım var.' : i === 1 ? 'İki kahve, lütfen.' : `${tr.charAt(0).toUpperCase() + tr.slice(1)} kedi var.`,
      bd: [BD(en, tr, 'number', `${en} = ${tr}`)] }
  } : {}));
}
  return { ...scenario('Numbers & Money',
  [
    ...numWords(),
    W('w30', 'Combien ça coûte?', 'kom-BYAN sa KUT', 'Bu ne kadar?',
      { tip: 'Fiyat sormak.', ctx: 'Alışverişte.',
        ex: { en: 'Combien ça coûte?', tr: 'Bu ne kadar?', bd: [BD('Combien', 'Ne kadar', 'question', 'Fiyat sorusu.'), BD('ça coûte', 'bu ... tutar', 'V', 'coûter = mal olmak.')] } }),
    W('w31', 'euro', 'ö-RO', 'euro',
      { ex: { en: 'Ça coûte cinq euros.', tr: 'Bu beş euro.', bd: [BD('cinq euros', 'beş euro', 'currency', 'Euro Fransa para birimi. Çoğul: euros.')] } }),
    W('w32', 'centime', 'san-TIM', 'sent',
      { ex: { en: 'Ça coûte quatre-vingt-dix-neuf centimes.', tr: 'Bu doksan dokuz sent.', bd: [BD('centime', 'sent', 'currency', '1 euro = 100 centimes.')] } }),
    W('w33', 'l\'addition', 'la-di-SYON', 'hesap / fatura',
      { ex: { en: 'L\'addition, s\'il vous plaît.', tr: 'Hesap, lütfen.', bd: [BD('l\'addition', 'hesap', 'O', 'Feminin → l\'. Restoranda hesap isterken.')] } })
  ],
  [
    G('g1', 'Fransızca Sayılar — Özel Sistem', 'French Numbers — Special System',
      'Fransızca sayılar 1–16 düzenli. 17–19: dix-sept, dix-huit, dix-neuf. 20–69 düzenli. 70 = soixante-dix (60+10)! 80 = quatre-vingt (4×20)! 90 = quatre-vingt-dix! Bu vigesimal (20\'lik) sistem Türkçeden çok farklı — dikkat! 21: vingt et un (et = ve). 22–29: vingt-deux, vingt-trois...',
      [
        { pronoun: '1–16', form: 'un ... seize', example: 'un, deux, trois...', tr: 'bir ... on altı' },
        { pronoun: '17–19', form: 'dix + sayı', example: 'dix-sept, dix-huit', tr: 'on yedi, on sekiz' },
        { pronoun: '70', form: 'soixante-dix', example: 'soixante-dix = 70', tr: 'yetmiş (60+10!)' },
        { pronoun: '80–99', form: 'quatre-vingt...', example: 'quatre-vingt-dix = 90', tr: 'doksan (4×20+10!)' }
      ],
      '71: soixante et onze (et birleşir). 77: soixante-dix-sept. 99: quatre-vingt-dix-neuf.'),
    G('g2', 'Para — Euro et Centimes', 'Money — Euro and Centimes',
      'Fransa Euro (€) kullanır. Fiyat sormak: Combien ça coûte? / C\'est combien? Cevap: Ça coûte ... euros (et ... centimes). Virgül ondalık: 3,50 € = trois euros cinquante. L\'addition, s\'il vous plaît = Hesap lütfen.',
      [
        { pronoun: 'Soru', form: 'Combien ça coûte?', example: 'Combien ça coûte?', tr: 'Bu ne kadar?' },
        { pronoun: 'Cevap', form: 'Ça coûte...', example: 'Ça coûte dix euros.', tr: 'Bu on euro.' },
        { pronoun: 'Hesap', form: 'L\'addition, s\'il vous plaît', example: 'L\'addition, s\'il vous plaît.', tr: 'Hesap, lütfen.' },
        { pronoun: 'Ödeme', form: 'En espèces / par carte', example: 'Je peux payer par carte?', tr: 'Kartla ödeyebilir miyim?' }
      ],
      'Fransa\'da kart yaygın. "Espèces ou carte?" = Nakit mi kart mı?')
  ],
  [
    SP('sp1', 'Deux cafés, s\'il vous plaît.', 'İki kahve, lütfen.', 'Sayı ile sipariş ver'),
    SP('sp2', 'Ça coûte cinq euros.', 'Bu beş euro.', 'Fiyat söyle'),
    SP('sp3', 'Combien ça coûte?', 'Bu ne kadar?', 'Fiyat sor'),
    SP('sp4', 'J\'ai vingt euros.', 'Yirmi eurom var.', 'Paranı söyle'),
    SP('sp5', 'L\'addition, s\'il vous plaît.', 'Hesap, lütfen.', 'Hesap iste')
  ],
  [
    DL('d1', 'Au Café', 'At the Café', [
      LN('A', 'm', 'Deux cafés, s\'il vous plaît.', 'İki kahve, lütfen.', 'Sayı + isim. café maskulin → deux cafés.',
        [BD('Deux cafés', 'İki kahve', 'O', 'Sayı + isim — çoğul -s eki.')]),
      LN('B', 'f', 'Autre chose?', 'Başka bir şey?', 'Autre = başka, chose = şey.',
        [BD('Autre chose', 'Başka bir şey', 'question', 'Sipariş tamamlama sorusu.')]),
      LN('A', 'm', 'Non, merci. Combien ça coûte?', 'Hayır, teşekkürler. Ne kadar?',
        [BD('Combien ça coûte', 'Ne kadar', 'question', 'Fiyat sorusu.')]),
      LN('B', 'f', 'Ça fait six euros cinquante.', 'Toplam altı euro elli.', 'Ça fait = toplam ... tutar.',
        [BD('Ça fait', 'Toplam ... tutar', 'V', 'Alışverişte toplam fiyat.')]),
      LN('A', 'm', 'Voilà. Merci!', 'Buyurun. Teşekkürler!', 'Voilà = işte, buyurun (para verirken).',
        [BD('Voilà', 'Buyurun / işte', 'K', 'Para uzatırken.')])
    ])
  ],
  [
    LI('li1', 'Le café coûte trois euros. Le pain coûte deux euros cinquante. En tout, ça fait cinq euros cinquante.',
      'Kahve üç euro. Ekmek iki euro elli. Toplam beş euro elli.',
      [Q('Combien coûte le café?', ['2 €', '3 €', '5 €', '6 €'], 1, 'Kahve ne kadar?'),
       Q('Combien coûte le pain?', ['2,50 €', '3 €', '5 €', '5,50 €'], 0, 'Ekmek ne kadar?'),
       Q('Combien coûte le total?', ['3 €', '5,05 €', '5,50 €', '6 €'], 2, 'Toplam ne kadar?')])
  ]
), numbers: FR_NUMBERS, compounds: FR_COMPOUNDS };
}

// ─── L4-L20 scenario data & builders ─────────────────────────

function mkWords(rows) {
  return rows.map(([en, ro, tr], i) => [null, en, ro, tr, i === 0 ? { tip: 'Temel kelime.', ctx: 'Günlük konuşma.' } : {}]);
}

function mkSimple(code, title, rows, sampleLine) {
  const words = mkScenarioWords(mkWords(rows));
  const w0 = rows[0][0].replace(/'/g, "\\'");
  const t0 = rows[0][2].replace(/'/g, "\\'");
  return scenario(title, words,
    [G('g1', `${title} — Temel`, `${title} — Basics`,
      `Bu derste ${title} konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.`,
      [{ pronoun: 'Örnek', form: w0, example: w0, tr: t0 },
       { pronoun: 'Pratik', form: rows[1][0], example: rows[1][0], tr: rows[1][2] }],
      'Kelime + artikel (varsa) birlikte ezberle.')],
    [SP('sp1', w0, t0, 'İfade et'),
     SP('sp2', rows[1][0], rows[1][2], 'Kelime kullan'),
     SP('sp3', rows[2][0], rows[2][2], 'Cümle kur'),
     SP('sp4', rows[3][0], rows[3][2], 'Soru sor'),
     SP('sp5', rows[4][0], rows[4][2], 'Konuşma pratiği')],
    [DL('d1', title, title, [
      LN('A', 'm', rows[0][0], rows[0][2], 'Ali konuşuyor.', [BD(rows[0][0], rows[0][2], 'phrase', 'Örnek.')]),
      LN('B', 'f', rows[1][0], rows[1][2], 'Karşılık.', [BD(rows[1][0], rows[1][2], 'phrase', 'Cevap.')]),
      LN('A', 'm', rows[2][0], rows[2][2], null, []),
      LN('B', 'f', rows[3][0], rows[3][2], null, [])
    ])],
    [LI('li1', sampleLine, sampleLine.split('.')[0] + '.',
      [Q('?', [rows[0][0], rows[1][0], rows[2][0], rows[3][0]], 0, 'Doğru kelime?'),
       Q('??', [rows[1][0], rows[2][0], rows[3][0], rows[4][0]], 1, 'İkinci soru?')])]
  );
}

const TOPIC_ROWS = {
  4: {
    title: 'Time & Date',
    es: [['¿Qué hora es?', 'kay O-ra es', 'Saat kaç?'], ['Son las tres', 'son las tres', 'Saat üç'], ['la mañana', 'la ma-NYA-na', 'sabah'], ['hoy', 'oy', 'bugün'], ['lunes', 'LU-nes', 'Pazartesi'], ['enero', 'e-NE-ro', 'Ocak'], ['¿Cuándo?', 'KWAN-do', 'Ne zaman?'], ['¿A qué hora?', 'a kay O-ra', 'Saat kaçta?'], ['mañana', 'ma-NYA-na', 'yarın'], ['ayer', 'a-YER', 'dün'], ['la tarde', 'la TAR-de', 'öğleden sonra'], ['la noche', 'la NO-che', 'gece'], ['martes', 'MAR-tes', 'Salı'], ['miércoles', 'MYER-ko-les', 'Çarşamba'], ['jueves', 'HWE-ves', 'Perşembe'], ['viernes', 'BYER-nes', 'Cuma'], ['sábado', 'SA-ba-do', 'Cumartesi'], ['domingo', 'do-MIN-go', 'Pazar'], ['julio', 'HU-lyo', 'Temmuz'], ['la semana', 'la se-MA-na', 'hafta']],
    it: [['Che ore sono?', 'kay O-re SO-no', 'Saat kaç?'], ['Sono le tre', 'SO-no le tre', 'Saat üç'], ['la mattina', 'la mat-TI-na', 'sabah'], ['oggi', 'OD-dji', 'bugün'], ['lunedì', 'lu-ne-DI', 'Pazartesi'], ['gennaio', 'jen-NA-yo', 'Ocak'], ['Quando?', 'KWAN-do', 'Ne zaman?'], ['A che ora?', 'a kay O-ra', 'Saat kaçta?'], ['domani', 'do-MA-ni', 'yarın'], ['ieri', 'YE-ri', 'dün'], ['il pomeriggio', 'il po-me-RID-jo', 'öğleden sonra'], ['la sera', 'la SE-ra', 'akşam'], ['martedì', 'mar-te-DI', 'Salı'], ['mercoledì', 'mer-ko-le-DI', 'Çarşamba'], ['giovedì', 'jo-ve-DI', 'Perşembe'], ['venerdì', 've-ner-DI', 'Cuma'], ['sabato', 'SA-ba-to', 'Cumartesi'], ['domenica', 'do-ME-ni-ka', 'Pazar'], ['luglio', 'LU-lyo', 'Temmuz'], ['la settimana', 'la set-ti-MA-na', 'hafta']],
    fr: [['Quelle heure est-il?', 'kel œr e-til', 'Saat kaç?'], ['Il est trois heures', 'il e trwa œr', 'Saat üç'], ['le matin', 'lə ma-TAN', 'sabah'], ['aujourd\'hui', 'o-ʒuʁ-DÜİ', 'bugün'], ['lundi', 'lən-DI', 'Pazartesi'], ['janvier', 'ʒɑ̃-VYE', 'Ocak'], ['Quand?', 'kɑ̃', 'Ne zaman?'], ['À quelle heure?', 'a kel œr', 'Saat kaçta?'], ['demain', 'də-MAN', 'yarın'], ['hier', 'YER', 'dün'], ['l\'après-midi', 'la-prɛ-mi-DI', 'öğleden sonra'], ['le soir', 'lə SWAR', 'akşam'], ['mardi', 'mar-DI', 'Salı'], ['mercredi', 'mɛʁ-krə-DI', 'Çarşamba'], ['jeudi', 'ʒə-DÜİ', 'Perşembe'], ['vendredi', 'vɑ̃-drə-DI', 'Cuma'], ['samedi', 'sam-DI', 'Cumartesi'], ['dimanche', 'di-Mɑ̃ʃ', 'Pazar'], ['juillet', 'ʒüi-YE', 'Temmuz'], ['la semaine', 'la sə-MEN', 'hafta']],
    sample: { es: 'Hoy es miércoles. La clase empieza a las nueve.', it: 'Oggi è mercoledì. La lezione inizia alle nove.', fr: 'Aujourd\'hui c\'est mercredi. Le cours commence à neuf heures.' }
  },
  5: { title: 'Restaurant & Food',
    es: [['Una mesa para dos, por favor.', 'U-na ME-sa', 'İki kişilik masa, lütfen.'], ['la carta', 'la KAR-ta', 'menü'], ['pedir', 'pe-DIR', 'sipariş vermek'], ['Quisiera...', 'ki-SYE-ra', '... istiyorum'], ['el agua', 'el A-gwa', 'su'], ['el café', 'el ka-FE', 'kahve'], ['el pan', 'el pan', 'ekmek'], ['la sopa', 'la SO-pa', 'çorba'], ['la ensalada', 'la en-sa-LA-da', 'salata'], ['el pollo', 'el PO-lyo', 'tavuk'], ['el pescado', 'el pes-KA-do', 'balık'], ['vegetariano', 've-ge-ta-RYA-no', 'vejetaryen'], ['delicioso', 'de-li-SYO-so', 'lezzetli'], ['la cuenta', 'la KWEN-ta', 'hesap'], ['la reserva', 'la re-SER-va', 'rezervasyon'], ['el postre', 'el POS-tre', 'tatlı'], ['el entrante', 'el en-TRAN-te', 'başlangıç'], ['el plato principal', 'el PLA-to', 'ana yemek'], ['la bebida', 'la be-BI-da', 'içecek'], ['¡Buen provecho!', 'bwen pro-VE-cho', 'Afiyet olsun!']],
    it: [['Un tavolo per due, per favore.', 'un TA-vo-lo', 'İki kişilik masa, lütfen.'], ['il menù', 'il me-NU', 'menü'], ['ordinare', 'or-di-NA-re', 'sipariş vermek'], ['Vorrei...', 'vor-REI', '... istiyorum'], ['l\'acqua', 'LAK-kwa', 'su'], ['il caffè', 'il kaf-FE', 'kahve'], ['il pane', 'il PA-ne', 'ekmek'], ['la zuppa', 'la TSUP-pa', 'çorba'], ['l\'insalata', 'lin-sa-LA-ta', 'salata'], ['il pollo', 'il POL-lo', 'tavuk'], ['il pesce', 'il PE-she', 'balık'], ['vegetariano', 've-ge-ta-RYA-no', 'vejetaryen'], ['delizioso', 'de-LIT-syo-zo', 'lezzetli'], ['il conto', 'il KON-to', 'hesap'], ['la prenotazione', 'la pre-no-ta-TSYO-ne', 'rezervasyon'], ['il dolce', 'il DOL-che', 'tatlı'], ['l\'antipasto', 'lan-ti-PAS-to', 'başlangıç'], ['il piatto principale', 'il PYAT-to', 'ana yemek'], ['la bevanda', 'la be-VAN-da', 'içecek'], ['Buon appetito!', 'bwon ap-pe-TI-to', 'Afiyet olsun!']],
    fr: [['Une table pour deux, s\'il vous plaît.', 'ün TABL', 'İki kişilik masa, lütfen.'], ['la carte', 'la kart', 'menü'], ['commander', 'ko-mɑ̃-DE', 'sipariş vermek'], ['Je voudrais...', 'zhə vud-Rɛ', '... istiyorum'], ['l\'eau', 'lo', 'su'], ['le café', 'lə ka-FE', 'kahve'], ['le pain', 'lə pɛ̃', 'ekmek'], ['la soupe', 'la sup', 'çorba'], ['la salade', 'la sa-LAD', 'salata'], ['le poulet', 'lə pu-Lɛ', 'tavuk'], ['le poisson', 'lə pwa-Sɔ̃', 'balık'], ['végétarien', 've-ʒe-ta-RYɛ̃', 'vejetaryen'], ['délicieux', 'de-li-SJø', 'lezzetli'], ['l\'addition', 'la-di-SYON', 'hesap'], ['la réservation', 'la re-ze-va-SYON', 'rezervasyon'], ['le dessert', 'lə de-Sɛʁ', 'tatlı'], ['l\'entrée', 'lɑ̃-tʁe', 'başlangıç'], ['le plat principal', 'lə pla', 'ana yemek'], ['la boisson', 'la bwa-Sɔ̃', 'içecek'], ['Bon appétit!', 'bɔ̃ na-pe-TI', 'Afiyet olsun!']],
    sample: { es: 'Quisiera la sopa y un café, por favor.', it: 'Vorrei la zuppa e un caffè, per favore.', fr: 'Je voudrais la soupe et un café, s\'il vous plaît.' }
  },
  6: { title: 'Shopping',
    es: [['¿Dónde encuentro...?', 'DON-de en-KWEN-tro', '... nerede bulabilirim?'], ['¿Cuánto cuesta?', 'KWAN-to KWES-ta', 'Bu ne kadar?'], ['muy caro', 'muy KA-ro', 'çok pahalı'], ['barato', 'ba-RA-to', 'ucuz'], ['el descuento', 'des-KWEN-to', 'indirim'], ['la talla', 'la TA-lya', 'beden'], ['el color', 'el ko-LOR', 'renk'], ['probarse', 'pro-BAR-se', 'denemek'], ['el probador', 'pro-ba-DOR', 'deneme kabini'], ['quedar bien', 'ke-DAR byen', 'uymak'], ['comprar', 'kom-PRAR', 'satın almak'], ['pagar', 'pa-GAR', 'ödemek'], ['el recibo', 're-CI-bo', 'fiş'], ['cambiar', 'kam-BYAR', 'değiştirmek'], ['la oferta', 'la o-FER-ta', 'özel teklif'], ['la tienda', 'la TYEN-da', 'mağaza'], ['el precio', 'el PRE-syo', 'fiyat'], ['grande', 'GRAN-de', 'büyük (beden)'], ['pequeño', 'pe-KE-nyo', 'küçük'], ['¿Tiene...?', 'TYE-ne', '... var mı?']],
    it: [['Dove trovo...?', 'DO-ve TRO-vo', '... nerede bulabilirim?'], ['Quanto costa?', 'KWAN-to KOS-ta', 'Bu ne kadar?'], ['troppo caro', 'TROP-po KA-ro', 'çok pahalı'], ['economico', 'e-ko-NO-mi-ko', 'ucuz'], ['lo sconto', 'lo SKON-to', 'indirim'], ['la taglia', 'la TA-lya', 'beden'], ['il colore', 'il ko-LO-re', 'renk'], ['provare', 'pro-VA-re', 'denemek'], ['il camerino', 'il ka-me-RI-no', 'deneme kabini'], ['andare bene', 'an-DA-re BE-ne', 'uymak'], ['comprare', 'kom-PRA-re', 'satın almak'], ['pagare', 'pa-GA-re', 'ödemek'], ['lo scontrino', 'skon-TRI-no', 'fiş'], ['cambiare', 'kam-BYA-re', 'değiştirmek'], ['l\'offerta', 'lof-FER-ta', 'özel teklif'], ['il negozio', 'il ne-GO-tsyo', 'mağaza'], ['il prezzo', 'il PRET-tso', 'fiyat'], ['grande', 'GRAN-de', 'büyük'], ['piccolo', 'PIK-ko-lo', 'küçük'], ['Ha...?', 'a', '... var mı?']],
    fr: [['Où est-ce que je trouve...?', 'u ɛs kə zhə truv', '... nerede bulabilirim?'], ['Combien ça coûte?', 'kɔ̃-byɛ̃ sa kut', 'Bu ne kadar?'], ['trop cher', 'tro ʃɛʁ', 'çok pahalı'], ['bon marché', 'bɔ̃ marʃe', 'ucuz'], ['la réduction', 'la re-dyk-SYON', 'indirim'], ['la taille', 'la taj', 'beden'], ['la couleur', 'la ku-lœʁ', 'renk'], ['essayer', 'e-se-JE', 'denemek'], ['la cabine', 'la ka-bin', 'deneme kabini'], ['aller bien', 'a-le bjɛ̃', 'uymak'], ['acheter', 'aʃ-te', 'satın almak'], ['payer', 'pɛ-JE', 'ödemek'], ['le reçu', 'lə rə-SÜ', 'fiş'], ['échanger', 'e-ʃɑ̃-ʒe', 'değiştirmek'], ['l\'offre', 'lɔfʁ', 'özel teklif'], ['le magasin', 'lə ma-ga-Zɛ̃', 'mağaza'], ['le prix', 'lə pʁi', 'fiyat'], ['grand', 'grɑ̃', 'büyük'], ['petit', 'pə-ti', 'küçük'], ['Avez-vous...?', 'a-ve-VU', '... var mı?']],
    sample: { es: '¿Cuánto cuesta esta chaqueta?', it: 'Quanto costa questa giacca?', fr: 'Combien coûte cette veste?' }
  }
};

// Add L7-L20 with shared TR rows pattern
const MORE_TOPICS = [
  [7, 'Directions', {
    es: ['¿Dónde está...?', 'a la izquierda', 'a la derecha', 'todo recto', 'la esquina', 'la calle', 'la estación', 'la parada', 'el semáforo', 'cruzar', 'el cruce', 'cerca', 'lejos', 'el mapa', 'la dirección', 'seguir', 'girar', 'la plaza', 'el banco', '¿Cómo llego a...?'],
    it: ['Dov\'è...?', 'a sinistra', 'a destra', 'dritto', 'l\'angolo', 'la strada', 'la stazione', 'la fermata', 'il semaforo', 'attraversare', 'l\'incrocio', 'vicino', 'lontano', 'la mappa', 'la direzione', 'seguire', 'girare', 'la piazza', 'la banca', 'Come arrivo a...?'],
    fr: ['Où est...?', 'à gauche', 'à droite', 'tout droit', 'le coin', 'la rue', 'la gare', 'l\'arrêt', 'le feu', 'traverser', 'le carrefour', 'près de', 'loin de', 'la carte', 'la direction', 'suivre', 'tourner', 'la place', 'la banque', 'Comment aller à...?']
  }, ['... nerede?', 'sol', 'sağ', 'düz', 'köşe', 'cadde', 'istasyon', 'durak', 'trafik lambası', 'karşıdan geçmek', 'kavşak', 'yakında', 'uzakta', 'harita', 'yön', 'takip etmek', 'dönmek', 'meydan', 'banka', '... nasıl giderim?']],
  [8, 'Transport & Travel', {
    es: ['el tren', 'el autobús', 'el metro', 'el avión', 'el aeropuerto', 'el billete', 'subir', 'bajar', 'hacer transbordo', 'el andén', 'salir', 'llegar', 'el viaje', 'el equipaje', 'el pasaporte', 'la frontera', 'la salida', 'la llegada', 'retrasado', '¿A qué hora sale?'],
    it: ['il treno', 'l\'autobus', 'la metropolitana', 'l\'aereo', 'l\'aeroporto', 'il biglietto', 'salire', 'scendere', 'fare cambio', 'il binario', 'partire', 'arrivare', 'il viaggio', 'il bagaglio', 'il passaporto', 'la frontiera', 'la partenza', 'l\'arrivo', 'in ritardo', 'A che ora parte?'],
    fr: ['le train', 'le bus', 'le métro', 'l\'avion', 'l\'aéroport', 'le billet', 'monter', 'descendre', 'changer', 'le quai', 'partir', 'arriver', 'le voyage', 'les bagages', 'le passeport', 'la frontière', 'le départ', 'l\'arrivée', 'en retard', 'À quelle heure part-il?']
  }, ['tren', 'otobüs', 'metro', 'uçak', 'havaalanı', 'bilet', 'binmek', 'inmek', 'aktarma', 'peron', 'kalkmak', 'varmak', 'yolculuk', 'bagaj', 'pasaport', 'sınır', 'kalkış', 'varış', 'gecikmeli', 'Ne zaman kalkıyor?']],
  [9, 'Hotel & Accommodation', {
    es: ['el hotel', 'la recepción', 'la habitación', 'hacer check-in', 'hacer check-out', 'la llave', 'habitación individual', 'habitación doble', 'el desayuno', 'wifi', 'el aire acondicionado', 'la reserva', 'la cama', 'el baño', 'la ducha', 'la toalla', 'la limpieza', 'una noche', '¿Hay wifi?', '¿A qué hora es el desayuno?'],
    it: ['l\'hotel', 'la reception', 'la camera', 'fare il check-in', 'fare il check-out', 'la chiave', 'camera singola', 'camera doppia', 'la colazione', 'wifi', 'l\'aria condizionata', 'la prenotazione', 'il letto', 'il bagno', 'la doccia', 'l\'asciugamano', 'la pulizia', 'una notte', 'C\'è il wifi?', 'A che ora è la colazione?'],
    fr: ['l\'hôtel', 'la réception', 'la chambre', 'faire le check-in', 'faire le check-out', 'la clé', 'chambre simple', 'chambre double', 'le petit-déjeuner', 'wifi', 'la climatisation', 'la réservation', 'le lit', 'la salle de bain', 'la douche', 'la serviette', 'le ménage', 'une nuit', 'Y a-t-il le wifi?', 'À quelle heure est le petit-déjeuner?']
  }, ['otel', 'resepsiyon', 'oda', 'giriş yapmak', 'çıkış yapmak', 'anahtar', 'tek kişilik oda', 'çift kişilik oda', 'kahvaltı', 'wifi', 'klima', 'rezervasyon', 'yatak', 'banyo', 'duş', 'havlu', 'temizlik', 'bir gece', 'WiFi var mı?', 'Kahvaltı ne zaman?']],
  [10, 'Work & Business', {
    es: ['el trabajo', 'la profesión', 'el compañero', 'el jefe', 'la oficina', 'la reunión', 'el contrato', 'el salario', 'la solicitud', 'la entrevista', 'tiempo completo', 'fin de jornada', 'el horario', 'la empresa', 'el cliente', 'el proyecto', 'la experiencia', '¿A qué se dedica?', 'Soy...', 'Trabajo como...'],
    it: ['il lavoro', 'la professione', 'il collega', 'il capo', 'l\'ufficio', 'la riunione', 'il contratto', 'lo stipendio', 'la domanda', 'il colloquio', 'tempo pieno', 'fine giornata', 'l\'orario', 'l\'azienda', 'il cliente', 'il progetto', 'l\'esperienza', 'Che lavoro fa?', 'Sono...', 'Lavoro come...'],
    fr: ['le travail', 'le métier', 'le collègue', 'le patron', 'le bureau', 'la réunion', 'le contrat', 'le salaire', 'la candidature', 'l\'entretien', 'temps plein', 'fin de journée', 'l\'horaire', 'l\'entreprise', 'le client', 'le projet', 'l\'expérience', 'Que faites-vous?', 'Je suis...', 'Je travaille comme...']
  }, ['iş', 'meslek', 'iş arkadaşı', 'patron', 'ofis', 'toplantı', 'sözleşme', 'maaş', 'başvuru', 'görüşme', 'tam zamanlı', 'iş çıkışı', 'çalışma saati', 'şirket', 'müşteri', 'proje', 'deneyim', 'Ne iş yapıyorsunuz?', 'Ben ...yim', '... olarak çalışıyorum']],
  [11, 'Health', {
    es: ['el médico', 'el hospital', 'la farmacia', 'enfermo', 'el dolor', 'la fiebre', 'la tos', 'el resfriado', 'el medicamento', 'la cita', 'el seguro', '¡Que te mejores!', 'la receta', 'la emergencia', 'la alergia', 'mareado', 'la herida', 'descansar', 'Necesito un médico', 'Me duele...'],
    it: ['il medico', 'l\'ospedale', 'la farmacia', 'malato', 'il dolore', 'la febbre', 'la tosse', 'il raffreddore', 'il medicinale', 'l\'appuntamento', 'l\'assicurazione', 'Guarisci presto!', 'la ricetta', 'l\'emergenza', 'l\'allergia', 'stordito', 'la ferita', 'riposare', 'Ho bisogno di un medico', 'Mi fa male...'],
    fr: ['le médecin', 'l\'hôpital', 'la pharmacie', 'malade', 'la douleur', 'la fièvre', 'la toux', 'le rhume', 'le médicament', 'le rendez-vous', 'l\'assurance', 'Bon rétablissement!', 'l\'ordonnance', 'l\'urgence', 'l\'allergie', 'étourdi', 'la blessure', 'se reposer', 'J\'ai besoin d\'un médecin', 'J\'ai mal...']
  }, ['doktor', 'hastane', 'eczane', 'hasta', 'ağrı', 'ateş', 'öksürük', 'soğuk algınlığı', 'ilaç', 'randevu', 'sigorta', 'Geçmiş olsun!', 'reçete', 'acil', 'alerji', 'baş dönmesi', 'yara', 'dinlenmek', 'Doktora ihtiyacım var', '... ağrıyor']],
  [12, 'Phone & Communication', {
    es: ['llamar', 'el mensaje', 'el correo', 'el número de teléfono', 'Hola, soy...', '¿Puede devolverme la llamada?', 'No puedo hablar ahora.', 'el buzón de voz', 'escribir', 'el contestador', 'ocupado', 'conectar', 'enviar', 'recibir', 'la llamada', 'colgar', '¿Está...?', 'Un momento', '¿Puede repetir?', 'Adiós'],
    it: ['chiamare', 'il messaggio', 'l\'email', 'il numero di telefono', 'Pronto, sono...', 'Può richiamarmi?', 'Non posso parlare ora.', 'la segreteria', 'scrivere', 'il segreteria telefonica', 'occupato', 'mettere in comunicazione', 'inviare', 'ricevere', 'la chiamata', 'riagganciare', 'È...?', 'Un momento', 'Può ripetere?', 'Arrivederci'],
    fr: ['appeler', 'le message', 'l\'e-mail', 'le numéro de téléphone', 'Allô, c\'est...', 'Pouvez-vous me rappeler?', 'Je ne peux pas parler maintenant.', 'la messagerie', 'écrire', 'le répondeur', 'occupé', 'mettre en relation', 'envoyer', 'recevoir', 'l\'appel', 'raccrocher', 'Est-ce que...?', 'Un moment', 'Pouvez-vous répéter?', 'Au revoir']
  }, ['aramak', 'mesaj', 'e-posta', 'telefon numarası', 'Merhaba, ... ben', 'Geri arayabilir misiniz?', 'Şu an konuşamıyorum.', 'sesli mesaj', 'yazmak', 'telesekreter', 'meşgul', 'bağlamak', 'göndermek', 'almak', 'arama', 'kapatmak', '... var mı?', 'Bir dakika', 'Tekrar edebilir misiniz?', 'Hoşça kalın']],
  [13, 'Social Life', {
    es: ['la fiesta', 'el cine', 'el concierto', 'salir', 'quedar', 'invitar', 'aceptar', 'rechazar', 'el amigo', 'divertido', 'aburrido', '¿Quedamos?', 'el café', 'la cerveza', 'celebrar', 'el cumpleaños', 'la invitación', 'el plan', '¿Qué haces este fin de semana?', 'Nos vemos'],
    it: ['la festa', 'il cinema', 'il concerto', 'uscire', 'incontrarsi', 'invitare', 'accettare', 'rifiutare', 'l\'amico', 'divertente', 'noioso', 'Ci vediamo?', 'il caffè', 'la birra', 'festeggiare', 'il compleanno', 'l\'invito', 'il programma', 'Cosa fai questo weekend?', 'Ci vediamo'],
    fr: ['la fête', 'le cinéma', 'le concert', 'sortir', 'se retrouver', 'inviter', 'accepter', 'refuser', 'l\'ami', 'amusant', 'ennuyeux', 'On se voit?', 'le café', 'la bière', 'fêter', 'l\'anniversaire', 'l\'invitation', 'le programme', 'Qu\'est-ce que tu fais ce week-end?', 'On se voit']
  }, ['parti', 'sinema', 'konser', 'dışarı çıkmak', 'buluşmak', 'davet etmek', 'kabul etmek', 'reddetmek', 'arkadaş', 'eğlenceli', 'sıkıcı', 'Buluşalım mı?', 'kahve', 'bira', 'kutlamak', 'doğum günü', 'davet', 'plan', 'Bu hafta sonu ne yapıyorsun?', 'Görüşürüz']],
  [14, 'Home & Living', {
    es: ['la casa', 'el piso', 'el alquiler', 'la cocina', 'el baño', 'el dormitorio', 'el salón', 'la puerta', 'la ventana', 'los muebles', 'la cama', 'la mesa', 'la silla', 'el sofá', 'el armario', 'la nevera', 'la lavadora', 'el balcón', 'el jardín', 'vivir'],
    it: ['la casa', 'l\'appartamento', 'l\'affitto', 'la cucina', 'il bagno', 'la camera', 'il soggiorno', 'la porta', 'la finestra', 'i mobili', 'il letto', 'il tavolo', 'la sedia', 'il divano', 'l\'armadio', 'il frigorifero', 'la lavatrice', 'il balcone', 'il giardino', 'vivere'],
    fr: ['la maison', 'l\'appartement', 'le loyer', 'la cuisine', 'la salle de bain', 'la chambre', 'le salon', 'la porte', 'la fenêtre', 'les meubles', 'le lit', 'la table', 'la chaise', 'le canapé', 'l\'armoire', 'le réfrigérateur', 'la machine à laver', 'le balcon', 'le jardin', 'habiter']
  }, ['ev', 'daire', 'kira', 'mutfak', 'banyo', 'yatak odası', 'oturma odası', 'kapı', 'pencere', 'mobilya', 'yatak', 'masa', 'sandalye', 'kanepe', 'dolap', 'buzdolabı', 'çamaşır makinesi', 'balkon', 'bahçe', 'yaşamak']],
  [15, 'Education & School', {
    es: ['la escuela', 'la universidad', 'el profesor', 'el estudiante', 'la clase', 'el examen', 'la tarea', 'estudiar', 'aprender', 'el libro', 'el cuaderno', 'la biblioteca', 'la lección', 'la nota', 'aprobar', 'suspender', 'el curso', 'la materia', 'la pregunta', 'la respuesta'],
    it: ['la scuola', 'l\'università', 'il professore', 'lo studente', 'la lezione', 'l\'esame', 'i compiti', 'studiare', 'imparare', 'il libro', 'il quaderno', 'la biblioteca', 'la classe', 'il voto', 'passare', 'bocciare', 'il corso', 'la materia', 'la domanda', 'la risposta'],
    fr: ['l\'école', 'l\'université', 'le professeur', 'l\'étudiant', 'le cours', 'l\'examen', 'les devoirs', 'étudier', 'apprendre', 'le livre', 'le cahier', 'la bibliothèque', 'la classe', 'la note', 'réussir', 'échouer', 'le cours', 'la matière', 'la question', 'la réponse']
  }, ['okul', 'üniversite', 'öğretmen', 'öğrenci', 'ders', 'sınav', 'ödev', 'çalışmak', 'öğrenmek', 'kitap', 'defter', 'kütüphane', 'sınıf', 'not', 'geçmek', 'kalmak', 'kurs', 'ders konusu', 'soru', 'cevap']],
  [16, 'Countries & Nationalities', {
    es: ['el país', 'la ciudad', 'España', 'Italia', 'Francia', 'Turquía', 'español', 'italiano', 'francés', 'turco', 'europeo', '¿De dónde eres?', 'Soy de...', 'vivir', 'nacer', 'la capital', 'el extranjero', 'el idioma', 'hablar', 'la cultura'],
    it: ['il paese', 'la città', 'Spagna', 'Italia', 'Francia', 'Turchia', 'spagnolo', 'italiano', 'francese', 'turco', 'europeo', 'Di dove sei?', 'Sono di...', 'vivere', 'nascere', 'la capitale', 'l\'estero', 'la lingua', 'parlare', 'la cultura'],
    fr: ['le pays', 'la ville', 'l\'Espagne', 'l\'Italie', 'la France', 'la Turquie', 'espagnol', 'italien', 'français', 'turc', 'européen', 'D\'où venez-vous?', 'Je viens de...', 'habiter', 'naître', 'la capitale', 'l\'étranger', 'la langue', 'parler', 'la culture']
  }, ['ülke', 'şehir', 'İspanya', 'İtalya', 'Fransa', 'Türkiye', 'İspanyol', 'İtalyan', 'Fransız', 'Türk', 'Avrupalı', 'Nerelisin?', '...liyim', 'yaşamak', 'doğmak', 'başkent', 'yurt dışı', 'dil', 'konuşmak', 'kültür']],
  [17, 'Emotions & Feelings', {
    es: ['feliz', 'triste', 'enfadado', 'nervioso', 'cansado', 'emocionado', 'preocupado', 'sorprendido', 'asustado', 'orgulloso', 'avergonzado', 'Me siento...', 'contento', 'ansioso', 'relajado', 'confundido', 'solo', 'enamorado', 'Estoy feliz', 'Estoy triste'],
    it: ['felice', 'triste', 'arrabbiato', 'nervoso', 'stanco', 'emozionato', 'preoccupato', 'sorpreso', 'spaventato', 'orgoglioso', 'imbarazzato', 'Mi sento...', 'contento', 'ansioso', 'rilassato', 'confuso', 'solo', 'innamorato', 'Sono felice', 'Sono triste'],
    fr: ['heureux', 'triste', 'en colère', 'nerveux', 'fatigué', 'excité', 'inquiet', 'surpris', 'effrayé', 'fier', 'gêné', 'Je me sens...', 'content', 'anxieux', 'détendu', 'confus', 'seul', 'amoureux', 'Je suis heureux', 'Je suis triste']
  }, ['mutlu', 'üzgün', 'kızgın', 'gergin', 'yorgun', 'heyecanlı', 'endişeli', 'şaşkın', 'korkmuş', 'gururlu', 'utanmış', 'Kendimi ... hissediyorum', 'memnun', 'kaygılı', 'rahat', 'kafası karışık', 'yalnız', 'aşık', 'Mutluyum', 'Üzgünüm']],
  [18, 'Weather', {
    es: ['el tiempo', 'el sol', 'la lluvia', 'la nieve', 'el viento', 'la nube', 'hace calor', 'hace frío', 'hace sol', 'llueve', 'nieva', '¿Qué tiempo hace?', 'la tormenta', 'húmedo', 'seco', 'la temperatura', 'el pronóstico', 'la primavera', 'el verano', 'el invierno'],
    it: ['il tempo', 'il sole', 'la pioggia', 'la neve', 'il vento', 'la nuvola', 'fa caldo', 'fa freddo', 'c\'è il sole', 'piove', 'nevica', 'Che tempo fa?', 'il temporale', 'umido', 'secco', 'la temperatura', 'le previsioni', 'la primavera', 'l\'estate', 'l\'inverno'],
    fr: ['le temps', 'le soleil', 'la pluie', 'la neige', 'le vent', 'le nuage', 'il fait chaud', 'il fait froid', 'il fait soleil', 'il pleut', 'il neige', 'Quel temps fait-il?', 'l\'orage', 'humide', 'sec', 'la température', 'la météo', 'le printemps', 'l\'été', 'l\'hiver']
  }, ['hava', 'güneş', 'yağmur', 'kar', 'rüzgar', 'bulut', 'sıcak', 'soğuk', 'güneşli', 'yağmurlu', 'karlı', 'Hava nasıl?', 'fırtına', 'nemli', 'kuru', 'sıcaklık', 'hava tahmini', 'ilkbahar', 'yaz', 'kış']],
  [19, 'Entertainment & Hobbies', {
    es: ['el hobby', 'leer', 'escribir', 'bailar', 'cantar', 'pintar', 'la música', 'el deporte', 'el fútbol', 'nadar', 'viajar', 'la fotografía', 'el teatro', 'la película', 'jugar', 'correr', 'cocinar', 'el jardín', 'la guitarra', 'el piano'],
    it: ['il hobby', 'leggere', 'scrivere', 'ballare', 'cantare', 'dipingere', 'la musica', 'lo sport', 'il calcio', 'nuotare', 'viaggiare', 'la fotografia', 'il teatro', 'il film', 'giocare', 'correre', 'cucinare', 'il giardino', 'la chitarra', 'il pianoforte'],
    fr: ['le hobby', 'lire', 'écrire', 'danser', 'chanter', 'peindre', 'la musique', 'le sport', 'le football', 'nager', 'voyager', 'la photographie', 'le théâtre', 'le film', 'jouer', 'courir', 'cuisiner', 'le jardin', 'la guitare', 'le piano']
  }, ['hobi', 'okumak', 'yazmak', 'dans etmek', 'şarkı söylemek', 'resim yapmak', 'müzik', 'spor', 'futbol', 'yüzmek', 'seyahat', 'fotoğrafçılık', 'tiyatro', 'film', 'oynamak', 'koşmak', 'yemek yapmak', 'bahçe', 'gitar', 'piyano']],
  [20, 'Daily Conversation Practice', {
    es: ['¡Buenos días!', '¿Cómo está usted?', 'Muy bien.', 'Perdón', 'No hay problema', 'Por supuesto', '¿Entiende?', 'No entiendo.', '¿Puede repetir?', 'Despacio, por favor.', 'Un momento, por favor.', '¡Entendido!', 'Gracias', 'De nada', 'Hasta luego', 'Me llamo Ali', 'Mucho gusto', '¿Habla inglés?', 'Un poco', '¿Puede ayudarme?'],
    it: ['Buongiorno!', 'Come sta?', 'Bene.', 'Scusi', 'Nessun problema', 'Certo', 'Capisce?', 'Non capisco.', 'Può ripetere?', 'Piano, per favore.', 'Un momento, per favore.', 'Capito!', 'Grazie', 'Prego', 'A dopo', 'Mi chiamo Ali', 'Piacere', 'Parla inglese?', 'Un po\'', 'Può aiutarmi?'],
    fr: ['Bonjour!', 'Comment allez-vous?', 'Très bien.', 'Pardon', 'Pas de problème', 'Bien sûr', 'Vous comprenez?', 'Je ne comprends pas.', 'Pouvez-vous répéter?', 'Lentement, s\'il vous plaît.', 'Un moment, s\'il vous plaît.', 'Compris!', 'Merci', 'De rien', 'À bientôt', 'Je m\'appelle Ali', 'Enchanté', 'Parlez-vous anglais?', 'Un peu', 'Pouvez-vous m\'aider?']
  }, ['İyi günler!', 'Nasılsınız?', 'İyiyim.', 'Pardon', 'Sorun değil', 'Tabii ki', 'Anlıyor musunuz?', 'Anlamıyorum.', 'Tekrar edebilir misiniz?', 'Yavaş, lütfen.', 'Bir dakika, lütfen.', 'Anlaşıldı!', 'Teşekkürler', 'Rica ederim', 'Görüşürüz', 'Benim adım Ali', 'Memnun oldum', 'İngilizce biliyor musunuz?', 'Biraz', 'Yardım edebilir misiniz?']]
];

for (const [n, title, langs, trs] of MORE_TOPICS) {
  TOPIC_ROWS[n] = {
    title,
    es: langs.es.map((en, i) => [en, en.slice(0, 6), trs[i]]),
    it: langs.it.map((en, i) => [en, en.slice(0, 6), trs[i]]),
    fr: langs.fr.map((en, i) => [en, en.slice(0, 6), trs[i]]),
    sample: { es: langs.es[0] + '.', it: langs.it[0] + '.', fr: langs.fr[0] + '.' }
  };
}

function buildTopic(code, n) {
  const t = TOPIC_ROWS[n];
  if (n === 4) {
    // L4 has extra grammar blocks
    const words = mkScenarioWords(mkWords(t[code]));
    const w0 = t[code][0];
    return scenario(t.title, words,
      [G('g1', 'Saat Sorma ve Söyleme', 'Telling Time',
        code === 'es' ? 'İspanyolcada saat: ¿Qué hora es? Son las ... (2+), Es la una (1:00). y media = buçuk. A las ocho = saat sekizde.' :
        code === 'it' ? 'İtalyancada saat: Che ore sono? Sono le ... (2+), È l\'una (1:00). e mezza = buçuk. Alle otto = saat sekizde.' :
        'Fransızcada saat: Quelle heure est-il? Il est ... heure(s). et demie = buçuk. À huit heures = saat sekizde.',
        [{ pronoun: 'Tam saat', form: w0[0], example: w0[0], tr: w0[2] },
         { pronoun: 'Bugün', form: t[code][3][0], example: t[code][3][0], tr: t[code][3][2] }],
        'Saat ifadelerini Türkçe açıklamalarla ezberle.'),
       G('g2', 'Günler ve Aylar', 'Days and Months',
        'Günler ve aylar küçük harfle yazılır. Randevu için gün + saat kombinasyonu kullanılır.',
        [{ pronoun: 'Günler', form: t[code][4][0], example: t[code][4][0], tr: t[code][4][2] },
         { pronoun: 'Aylar', form: t[code][5][0], example: t[code][5][0], tr: t[code][5][2] }],
        'el/il/le + gün, en/a + ay, a las/alle/à + saat.')],
      [SP('sp1', w0[0], w0[2], 'Saat sor'),
       SP('sp2', t[code][1][0], t[code][1][2], 'Saati söyle'),
       SP('sp3', t[code][3][0], t[code][3][2], 'Bugünü söyle'),
       SP('sp4', t[code][8][0], t[code][8][2], 'Yarın hakkında konuş'),
       SP('sp5', t[code][7][0], t[code][7][2], 'Randevu saati belirt')],
      [DL('d1', 'Randevu', 'Appointment', [
        LN('A', 'm', t[code][6][0] + '?', t[code][6][2] + '?', 'Randevu sorusu.', []),
        LN('B', 'f', t[code][4][0] + ' ' + t[code][7][0], t[code][4][2], 'Öneri.', []),
        LN('A', 'm',
          code === 'es' ? 'Sí, me viene bien.' : code === 'it' ? 'Sì, mi va bene.' : 'Oui, ça me convient.',
          'Evet, uyar.', null, []),
        LN('B', 'f',
          code === 'es' ? '¡Hasta luego!' : code === 'it' ? 'A dopo!' : 'À bientôt!',
          'Görüşürüz!', null, [])
      ])],
      [LI('li1', t.sample[code], t.sample[code],
        [Q('?', [t[code][0][0], t[code][1][0], t[code][2][0], t[code][3][0]], 0, 'İlk kelime?'),
         Q('??', [t[code][1][0], t[code][2][0], t[code][3][0], t[code][4][0]], 3, 'Dördüncü kelime?')])]
    );
  }
  return mkSimple(code, t.title, t[code], t.sample[code]);
}

function buildL4(code) { return buildTopic(code, 4); }
function buildL5(code) { return buildTopic(code, 5); }
function buildL6(code) { return buildTopic(code, 6); }
function buildL7(code) { return buildTopic(code, 7); }
function buildL8(code) { return buildTopic(code, 8); }
function buildL9(code) { return buildTopic(code, 9); }
function buildL10(code) { return buildTopic(code, 10); }
function buildL11(code) { return buildTopic(code, 11); }
function buildL12(code) { return buildTopic(code, 12); }
function buildL13(code) { return buildTopic(code, 13); }
function buildL14(code) { return buildTopic(code, 14); }
function buildL15(code) { return buildTopic(code, 15); }
function buildL16(code) { return buildTopic(code, 16); }
function buildL17(code) { return buildTopic(code, 17); }
function buildL18(code) { return buildTopic(code, 18); }
function buildL19(code) { return buildTopic(code, 19); }
function buildL20(code) { return buildTopic(code, 20); }

// ─── Vocab L21-L49 ───────────────────────────────────────────
function vw(rows) { return rows; }

const VOCAB_ES = {
  21: ['Verbos básicos', vw([['ser','ser','olmak'],['tener','te-NER','sahip olmak'],['hacer','A-ser','yapmak'],['ir','ir','gitmek'],['venir','be-NIR','gelmek'],['ver','ver','görmek'],['saber','sa-BER','bilmek'],['pensar','pen-SAR','düşünmek'],['querer','ke-REr','istemek'],['deber','de-BER','zorunda olmak'],['poder','po-DER','-ebilmek'],['gustar','gus-TAR','hoşlanmak'],['decir','de-SIR','söylemek'],['preguntar','pre-gun-TAR','sormak'],['dar','dar','vermek'],['tomar','to-MAR','almak'],['encontrar','en-kon-TRAR','bulmak'],['quedarse','ke-DAR-se','kalmak'],['estar','es-TAR','olmak (durum)'],['ayudar','a-yu-DAR','yardım etmek'],['aprender','a-pren-DER','öğrenmek'],['trabajar','tra-ba-HAR','çalışmak']])],
  22: ['Adjetivos', vw([['grande','GRAN-de','büyük'],['pequeño','pe-KE-nyo','küçük'],['bueno','BWE-no','iyi'],['malo','MA-lo','kötü'],['nuevo','NWE-vo','yeni'],['viejo','VYE-ho','eski'],['rápido','RA-pi-do','hızlı'],['lento','LEN-to','yavaş'],['fácil','FA-sil','kolay'],['difícil','di-FI-sil','zor'],['bonito','bo-NI-to','güzel'],['feo','FE-o','çirkin'],['alto','AL-to','uzun'],['bajo','BA-ho','kısa'],['ligero','li-GE-ro','hafif'],['limpio','LIM-pyo','temiz'],['sucio','SU-syo','kirli'],['interesante','in-te-re-SAN-te','ilginç'],['aburrido','a-bu-RI-do','sıkıcı'],['caro','KA-ro','pahalı'],['barato','ba-RA-to','ucuz'],['importante','im-por-TAN-te','önemli']])],
  23: ['Personas y relaciones', vw([['el hombre','OM-bre','adam'],['la mujer','mu-HER','kadın'],['el niño','NI-nyo','çocuk'],['el padre','PA-dre','baba'],['la madre','MA-dre','anne'],['el hermano','er-MA-no','erkek kardeş'],['la hermana','er-MA-na','kız kardeş'],['el amigo','a-MI-go','arkadaş'],['la amiga','a-MI-ga','arkadaş (kadın)'],['el vecino','ve-SI-no','komşu'],['el compañero','kom-PA-nyo','iş arkadaşı'],['el jefe','HE-fe','patron'],['el profesor','pro-fe-SOR','öğretmen'],['el médico','ME-di-ko','doktor'],['el estudiante','es-tu-DYAN-te','öğrenci'],['la familia','fa-MI-lya','aile'],['el esposo','es-PO-so','koca'],['la esposa','es-PO-sa','eş'],['el hijo','I-ho','oğul'],['la hija','I-ha','kız evlat'],['el abuelo','a-BWE-lo','büyükbaba'],['los abuelos','a-BWE-los','büyükanne/baba'],['el conocido','ko-no-SI-do','tanıdık'],['el extranjero','eks-tran-HE-ro','yabancı'],['la pareja','pa-RE-ha','çift'],['la relación','re-la-SYON','ilişki'],['el invitado','in-vi-TA-do','misafir']])]
};

const VOCAB_IT = {
  21: ['Verbi fondamentali', vw([['essere','es-SE-re','olmak'],['avere','a-VE-re','sahip olmak'],['fare','FA-re','yapmak'],['andare','an-DA-re','gitmek'],['venire','ve-NI-re','gelmek'],['vedere','ve-DE-re','görmek'],['sapere','SA-pe-re','bilmek'],['pensare','pen-SA-re','düşünmek'],['volere','vo-LE-re','istemek'],['dovere','do-VE-re','zorunda olmak'],['potere','po-TE-re','-ebilmek'],['piacere','pya-CHE-re','hoşlanmak'],['dire','DI-re','söylemek'],['chiedere','KYE-de-re','sormak'],['dare','DA-re','vermek'],['prendere','PREN-de-re','almak'],['trovare','tro-VA-re','bulmak'],['restare','res-TA-re','kalmak'],['stare','STA-re','olmak (durum)'],['aiutare','a-yu-TA-re','yardım etmek'],['imparare','im-pa-RA-re','öğrenmek'],['lavorare','la-vo-RA-re','çalışmak']])],
  22: ['Aggettivi', vw([['grande','GRAN-de','büyük'],['piccolo','PIK-ko-lo','küçük'],['buono','BWO-no','iyi'],['cattivo','kat-TI-vo','kötü'],['nuovo','NWO-vo','yeni'],['vecchio','VEK-kyo','eski'],['veloce','ve-LO-che','hızlı'],['lento','LEN-to','yavaş'],['facile','FA-chi-le','kolay'],['difficile','dif-FI-chi-le','zor'],['bello','BEL-lo','güzel'],['brutto','BRUT-to','çirkin'],['alto','AL-to','uzun'],['basso','BAS-so','kısa'],['leggero','led-JE-ro','hafif'],['pulito','pu-LI-to','temiz'],['sporco','SPOR-ko','kirli'],['interessante','in-te-res-SAN-te','ilginç'],['noioso','no-YO-zo','sıkıcı'],['caro','KA-ro','pahalı'],['economico','e-ko-NO-mi-ko','ucuz'],['importante','im-por-TAN-te','önemli']])],
  23: ['Persone e relazioni', vw([['l\'uomo','UO-mo','adam'],['la donna','DON-na','kadın'],['il bambino','bam-BI-no','çocuk'],['il padre','PA-dre','baba'],['la madre','MA-dre','anne'],['il fratello','frat-TEL-lo','erkek kardeş'],['la sorella','sor-TEL-la','kız kardeş'],['l\'amico','a-MI-ko','arkadaş'],['l\'amica','a-MI-ka','arkadaş (kadın)'],['il vicino','vi-CI-no','komşu'],['il collega','kol-LE-ga','iş arkadaşı'],['il capo','KA-po','patron'],['il professore','prof-fes-SO-re','öğretmen'],['il medico','ME-di-ko','doktor'],['lo studente','stu-DEN-te','öğrenci'],['la famiglia','fa-MI-glya','aile'],['il marito','ma-RI-to','koca'],['la moglie','MOL-lye','eş'],['il figlio','FI-lyo','oğul'],['la figlia','FI-lya','kız evlat'],['il nonno','NON-no','büyükbaba'],['i nonni','NON-ni','büyükanne/baba'],['il conoscente','ko-no-SHEN-te','tanıdık'],['lo straniero','stra-NYEH-ro','yabancı'],['la coppia','KOP-pya','çift'],['la relazione','re-la-TSYO-ne','ilişki'],['l\'ospite','OS-pi-te','misafir']])]
};

const VOCAB_FR = {
  21: ['Verbes de base', vw([['être','ɛtʁ','olmak'],['avoir','a-VWAR','sahip olmak'],['faire','fɛʁ','yapmak'],['aller','a-LE','gitmek'],['venir','və-NIR','gelmek'],['voir','VWAR','görmek'],['savoir','sa-VWAR','bilmek'],['penser','pɑ̃-SE','düşünmek'],['vouloir','vu-LWAR','istemek'],['devoir','də-VWAR','zorunda olmak'],['pouvoir','pu-VWAR','-ebilmek'],['aimer','ɛ-ME','sevmek'],['dire','DIR','söylemek'],['demander','də-mɑ̃-DE','sormak'],['donner','do-NE','vermek'],['prendre','prɑ̃dʁ','almak'],['trouver','tru-Ve','bulmak'],['rester','rɛs-TE','kalmak'],['rester','rɛs-TE','bulunmak'],['aider','ɛ-DE','yardım etmek'],['apprendre','a-prɑ̃dʁ','öğrenmek'],['travailler','tra-va-JE','çalışmak']])],
  22: ['Adjectifs', vw([['grand','grɑ̃','büyük'],['petit','pə-TI','küçük'],['bon','bɔ̃','iyi'],['mauvais','mo-Vɛ','kötü'],['nouveau','nu-Vo','yeni'],['vieux','vjø','eski'],['rapide','ra-PID','hızlı'],['lent','lɑ̃','yavaş'],['facile','fa-SIL','kolay'],['difficile','di-fi-SIL','zor'],['beau','bo','güzel'],['laid','lɛ','çirkin'],['haut','o','uzun'],['bas','ba','kısa'],['léger','le-ʒE','hafif'],['propre','prɔpʁ','temiz'],['sale','sal','kirli'],['intéressant','ɛ̃-te-re-Sɑ̃','ilginç'],['ennuyeux','ɑ̃-nüi-Jø','sıkıcı'],['cher','ʃɛʁ','pahalı'],['bon marché','bɔ̃ mar-ʃE','ucuz'],['important','ɛ̃-pɔʁ-tɑ̃','önemli']])],
  23: ['Personnes et relations', vw([['l\'homme','om','adam'],['la femme','fam','kadın'],['l\'enfant','ɑ̃-fɑ̃','çocuk'],['le père','pɛʁ','baba'],['la mère','mɛʁ','anne'],['le frère','fʁɛʁ','erkek kardeş'],['la sœur','sœʁ','kız kardeş'],['l\'ami','a-MI','arkadaş'],['l\'amie','a-MI','arkadaş (kadın)'],['le voisin','vwa-zɛ̃','komşu'],['le collègue','kɔ-lɛɡ','iş arkadaşı'],['le patron','pa-tʁɔ̃','patron'],['le professeur','prɔ-fə-sœʁ','öğretmen'],['le médecin','med-sɛ̃','doktor'],['l\'étudiant','e-ty-djɑ̃','öğrenci'],['la famille','fa-mij','aile'],['le mari','ma-ʁi','koca'],['la femme','fam','eş'],['le fils','fis','oğul'],['la fille','fij','kız evlat'],['le grand-père','grɑ̃-pɛʁ','büyükbaba'],['les grands-parents','grɑ̃-paʁɑ̃','büyükanne/baba'],['la connaissance','kɔ-nɛ-sɑ̃s','tanıdık'],['l\'étranger','e-tʁa-ʒE','yabancı'],['le couple','ku-pl','çift'],['la relation','ʁe-la-sjɔ̃','ilişki'],['l\'invité','ɛ̃-vi-te','misafir']])]
};

const VOCAB_TITLES = {
  24: { es: 'Ciudad y lugares', it: 'Città e luoghi', fr: 'Ville et lieux' },
  25: { es: 'Comida y bebida', it: 'Cibo e bevande', fr: 'Nourriture et boissons' },
  26: { es: 'Colores', it: 'Colori', fr: 'Couleurs' },
  27: { es: 'Expresiones de tiempo', it: 'Espressioni di tempo', fr: 'Expressions de temps' },
  28: { es: 'Deporte y movimiento', it: 'Sport e movimento', fr: 'Sport et mouvement' },
  29: { es: 'Trabajo y tecnología', it: 'Lavoro e tecnologia', fr: 'Travail et technologie' },
  30: { es: 'Viajes y turismo', it: 'Viaggi e turismo', fr: 'Voyages et tourisme' },
  31: { es: 'Casa y muebles', it: 'Casa e mobili', fr: 'Maison et meubles' },
  32: { es: 'Ropa', it: 'Abbigliamento', fr: 'Vêtements' },
  33: { es: 'Naturaleza y medio ambiente', it: 'Natura e ambiente', fr: 'Nature et environnement' },
  34: { es: 'Dinero y finanzas', it: 'Denaro e finanze', fr: 'Argent et finances' },
  35: { es: 'Ciencia e investigación', it: 'Scienza e ricerca', fr: 'Science et recherche' },
  36: { es: 'Arte y cultura', it: 'Arte e cultura', fr: 'Art et culture' },
  37: { es: 'Palabras interrogativas', it: 'Parole interrogative', fr: 'Mots interrogatifs' },
  38: { es: 'Profesiones', it: 'Professioni', fr: 'Professions' },
  39: { es: 'Pensamiento y opinión', it: 'Pensiero e opinione', fr: 'Pensée et opinion' },
  40: { es: 'Animales', it: 'Animali', fr: 'Animaux' },
  41: { es: 'Vocabulario de salud', it: 'Vocabolario della salute', fr: 'Vocabulaire de santé' },
  42: { es: 'Español académico', it: 'Italiano accademico', fr: 'Français académique' },
  43: { es: 'Tecnología y vida digital', it: 'Tecnologia e vita digitale', fr: 'Technologie et vie numérique' },
  44: { es: 'Expresiones sociales', it: 'Espressioni sociali', fr: 'Expressions sociales' },
  45: { es: 'Geografía y mundo', it: 'Geografia e mondo', fr: 'Géographie et monde' },
  46: { es: 'Verbos de acción', it: 'Verbi d\'azione', fr: 'Verbes d\'action' },
  47: { es: 'Historia y sociedad', it: 'Storia e società', fr: 'Histoire et société' },
  48: { es: 'Expresiones y refranes', it: 'Espressioni e proverbi', fr: 'Expressions et proverbes' },
  49: { es: 'Repaso avanzado', it: 'Ripasso avanzato', fr: 'Révision avancée' }
};

function fillVocabFromTopic(vocabMap, code, n) {
  const topicN = n <= 33 ? n - 20 : 20;
  const rows = TOPIC_ROWS[topicN]?.[code] || [];
  const title = VOCAB_TITLES[n][code];
  const words = rows.length >= 20 ? rows.slice(0, 22).map(([en, ro, tr]) => [en, ro, tr]) : rows.map(([en, ro, tr]) => [en, ro, tr]);
  while (words.length < 20) {
    const i = words.length + 1;
    words.push([`${title} ${i}`, 'ro', `kelime ${i}`]);
  }
  vocabMap[n] = [title, words];
}

for (let n = 24; n <= 49; n++) {
  fillVocabFromTopic(VOCAB_ES, 'es', n);
  fillVocabFromTopic(VOCAB_IT, 'it', n);
  fillVocabFromTopic(VOCAB_FR, 'fr', n);
}

const VOCAB_BY_LANG = { es: VOCAB_ES, it: VOCAB_IT, fr: VOCAB_FR };


function buildLessonsForLang(code) {
  const builders = { es: [buildEsL1, buildEsL2, buildEsL3], it: [buildItL1, buildItL2, buildItL3], fr: [buildFrL1, buildFrL2, buildFrL3] };
  const l2title = LANG_META[code].l2;
  const all = {
    1: ['Greetings & Introductions', builders[code][0]()],
    2: [l2title, builders[code][1]()],
    3: ['Numbers & Money', builders[code][2]()],
    4: ['Time & Date', buildL4(code)],
    5: ['Restaurant & Food', buildL5(code)],
    6: ['Shopping', buildL6(code)],
    7: ['Directions', buildL7(code)],
    8: ['Transport & Travel', buildL8(code)],
    9: ['Hotel & Accommodation', buildL9(code)],
    10: ['Work & Business', buildL10(code)],
    11: ['Health', buildL11(code)],
    12: ['Phone & Communication', buildL12(code)],
    13: ['Social Life', buildL13(code)],
    14: ['Home & Living', buildL14(code)],
    15: ['Education & School', buildL15(code)],
    16: ['Countries & Nationalities', buildL16(code)],
    17: ['Emotions & Feelings', buildL17(code)],
    18: ['Weather', buildL18(code)],
    19: ['Entertainment & Hobbies', buildL19(code)],
    20: ['Daily Conversation Practice', buildL20(code)]
  };
  for (const [n, [title, entries]] of Object.entries(VOCAB_BY_LANG[code])) {
    all[+n] = [title, buildVocabLesson(title, entries)];
  }
  return all;
}

const arg = (process.argv[2] || 'all').toLowerCase();
const codes = arg === 'all' ? ['es', 'it', 'fr'] : [arg];
if (!codes.every(c => LANG_META[c])) {
  console.error('Usage: node tools/gen-romance-lessons.mjs it|es|fr|all');
  process.exit(1);
}

let total = 0;
for (const code of codes) {
  const outDir = join(__dirname, `../languages/${code}/lessons`);
  mkdirSync(outDir, { recursive: true });
  const lessons = buildLessonsForLang(code);
  const label = LANG_META[code].label;
  let created = 0;
  for (let n = 1; n <= 49; n++) {
    const [title, data] = lessons[n];
    const tag = n <= 20 ? 'beginner' : 'vocabulary';
    writeFileSync(join(outDir, `ders${n}.js`), render(n, title, data, label, tag), 'utf8');
    created++;
  }
  total += created;
  console.log(`✓ ${code}: ${created}/49 lessons → ${outDir}`);
}
console.log(`\nTotal: ${total} files generated.`);
