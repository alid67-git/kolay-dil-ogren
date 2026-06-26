#!/usr/bin/env node
/**
 * Generates Spanish lesson files ders1.js � ders49.js
 * Run: node tools/gen-spanish-lessons.mjs
 */
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '../languages/es/lessons');
mkdirSync(OUT_DIR, { recursive: true });

// ������ Serialization ��������������������������������������������������������������������������������������
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

// ������ Builders ������������������������������������������������������������������������������������������������
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
  return `// ders${n}.js � Spanish Lesson ${n}: ${title} (${tag})\nconst L${n} = ${ser(data, 0)};\nLESSONS[${n}] = L${n};\n`;
}

// ������ Lesson 1: Greetings ��������������������������������������������������������������������������
const L1 = scenario('Greetings & Introductions',
  [
    W('w1', 'Hola', 'O-la', 'Merhaba',
      { tip: 'En yaygın selamlama.', ctx: 'Resmi ve gayri resmi her ortamda.',
        ex: { en: '¡Hola!', tr: 'Merhaba!', bd: [BD('Hola', 'Merhaba', 'greeting', 'İspanyolcada en sık kullanılan selam. Günün her saatinde geçerlidir.')] } }),
    W('w2', 'Buenos días', 'BWE-nos DEE-as', 'Günaydın',
      { tip: 'Sabah selamlaması.', ctx: 'Sabah ~14:00\'a kadar.',
        ex: { en: '¡Buenos días!', tr: 'Günaydın!', bd: [BD('Buenos', 'İyi', 'K', 'Bueno sıfatının ço�xul eril hali � günleri nitelendirir.'), BD('días', 'günler', 'O', 'Día kelimesinin ço�xulu. Sabah selamı ö�xlene kadar söylenir.')] } }),
    W('w3', 'Buenas tardes', 'BWE-nas TAR-des', 'İyi günler / İyi ö�xleden sonralar',
      { tip: '��xleden sonra selamlaması.', ctx: '��xleden ak�xama kadar.',
        ex: { en: '¡Buenas tardes!', tr: 'İyi günler!', bd: [BD('Buenas tardes', 'İyi günler', 'greeting', 'Resmi ortamlarda (banka, ofis) çok kullanılır. Tarde = ö�xleden sonra.')] } }),
    W('w4', 'Buenas noches', 'BWE-nas NO-ches', 'İyi ak�xamlar / İyi geceler',
      { tip: 'Ak�xam selamlaması veya vedası.', ctx: 'Ak�xam saatlerinde veya yatarken.',
        ex: { en: '¡Buenas noches!', tr: 'İyi ak�xamlar!', bd: [BD('noches', 'geceler', 'O', 'Gece selamı � ak�xam vedası veya yatmadan önce.')] } }),
    W('w5', 'Adiós', 'a-DYOS', 'Ho�xça kal / Güle güle',
      { tip: 'Veda.', ctx: 'Her ortamda.',
        ex: { en: '¡Adiós!', tr: 'Ho�xça kal!', bd: [BD('Adiós', 'Ho�xça kal', 'farewell', 'Genel veda � resmi ve samimi ortamlarda kullanılır.')] } }),
    W('w6', '¿Cómo te llamas?', 'KO-mo te YA-mas', 'Adın ne? (samimi)',
      { tip: 'İsim sorma � tú formu.', ctx: 'Arkada�xlar, ya�xıtlar arasında.',
        ex: { en: '¿Cómo te llamas?', tr: 'Adın ne?', bd: [BD('Cómo', 'Nasıl', 'question', 'Soru kelimesi.'), BD('te llamas', 'adın ...', 'V', 'llamarse = adlandırılmak. te = sana (reflexive).')] } }),
    W('w7', 'Me llamo...', 'me YA-mo', 'Benim adım ... / Adım ...',
      { tip: 'Kendini tanıtma.', ctx: 'İlk tanı�xmada.',
        ex: { en: 'Me llamo Ali.', tr: 'Benim adım Ali.', bd: [BD('Me llamo', 'Adım', 'V', 'llamarse fiili � isim söylemek için. me = ben (reflexive).'), BD('Ali', 'Ali', 'name', '�zel isim � büyük harfle.')] } }),
    W('w8', 'Mucho gusto', 'MU-cho GUS-to', 'Tanı�xtı�xıma memnun oldum',
      { tip: 'Tanı�xma ifadesi.', ctx: 'Yeni biriyle tanı�xınca.',
        ex: { en: '¡Mucho gusto!', tr: 'Memnun oldum!', bd: [BD('Mucho gusto', '�!ok memnun oldum', 'phrase', 'Kısaltma: Mucho gusto en conocerte. Günlük konu�xmada sadece "Mucho gusto" yeterli.')] } }),
    W('w9', 'Por favor', 'por fa-VOR', 'Lütfen',
      { tip: 'Nezaket kelimesi.', ctx: 'İstek yaparken.',
        ex: { en: 'Un café, por favor.', tr: 'Bir kahve, lütfen.', bd: [BD('Por favor', 'Lütfen', 'courtesy', 'İstek yaparken kullanılır.')] } }),
    W('w10', 'Gracias', 'GRA-syas', 'Te�xekkür ederim',
      { tip: 'Minnet ifadesi.', ctx: 'Her yerde.',
        ex: { en: 'Muchas gracias.', tr: '�!ok te�xekkür ederim!', bd: [BD('Gracias', 'Te�xekkürler', 'courtesy', 'Tek ba�xına yeterli. Muchas = çok �  "çok te�xekkürler".')] } }),
    W('w11', 'De nada', 'de NA-da', 'Rica ederim / Bir �xey de�xil',
      { tip: 'Te�xekküre cevap.', ctx: '"Gracias"a kar�xılık.',
        ex: { en: 'De nada.', tr: 'Rica ederim.', bd: [BD('De nada', 'Rica ederim', 'courtesy', '"Gracias"a standart cevap. Nada = hiçbir �xey.')] } }),
    W('w12', 'Perdón', 'per-DON', 'Pardon / Affedersiniz',
      { tip: '�zür / dikkat çekme.', ctx: 'Yanlı�xlıkla çarpmak, yol sormak.',
        ex: { en: 'Perdón, ¿dónde está el baño?', tr: 'Pardon, tuvalet nerede?', bd: [BD('Perdón', 'Pardon', 'courtesy', 'Hafif özür veya dikkat çekmek için. Disculpe daha resmi.')] } }),
    W('w13', '¿Cómo se llama usted?', 'KO-mo se YA-ma us-TED', 'Adınız ne? (resmi)',
      { tip: 'Resmi isim sorma.', ctx: 'Usted ile hitap ederken.',
        ex: { en: '¿Cómo se llama usted?', tr: 'Adınız ne?', bd: [BD('se llama', 'adınız ...', 'V', 'llamarse � usted formu. se = kendisi.'), BD('usted', 'siz (resmi)', 'O', 'Resmi hitap � tanımadı�xınız, ya�xlı, resmi ortam.')] } }),
    W('w14', 'Encantado / Encantada', 'en-kan-TA-do / en-kan-TA-da', 'Memnun oldum (cinsiyete göre)',
      { tip: 'Resmi tanı�xma.', ctx: 'Erkek: encantado. Kadın: encantada.',
        ex: { en: 'Encantado.', tr: 'Memnun oldum.', bd: [BD('Encantado', 'Memnun oldum', 'phrase', 'Erkek konu�xmacı kullanır. Kadın: Encantada. Resmi tanı�xmada Mucho gusto ile e�xde�xer.')] } })
  ],
  [
    G('g1', 'Selamla�xma � Günün Saatine Göre', 'Greetings by Time of Day',
      'İspanyolcada selam, günün saatine göre de�xi�xir. "Buenos/Buenas" = iyi; ardından zaman kelimesi gelir. Sabah: Buenos días. ��xleden sonra: Buenas tardes. Ak�xam/gece: Buenas noches. Her zaman: Hola.',
      [
        { pronoun: 'Sabah', form: 'Buenos días', example: '¡Buenos días!', tr: 'Günaydın!' },
        { pronoun: '��xleden sonra', form: 'Buenas tardes', example: '¡Buenas tardes!', tr: 'İyi günler!' },
        { pronoun: 'Ak�xam/gece', form: 'Buenas noches', example: '¡Buenas noches!', tr: 'İyi ak�xamlar!' },
        { pronoun: 'Her zaman', form: 'Hola', example: '¡Hola!', tr: 'Merhaba!' }
      ],
      'Türkçede tek "Merhaba" yeter; İspanyolcada saat fark eder. Resmi ortamda Buenas tardes tercih edilir.'),
    G('g2', 'Tú vs Usted � Samimi ve Resmi Hitap', 'Informal vs Formal Address',
      'İspanyolcada iki hitap var: tú (sen) � arkada�x, aile, ya�xıt. usted (Siz) � tanımadı�xınız, ya�xlı, resmi ortam. Usted fiil 3. tekil çekim alır: ¿Cómo se llama usted? (se llama, not te llamas). Ali erkek ö�xrenci olarak yeni tanı�xmalarda usted kullanır; kar�xı taraf "Puedes tutearme" (sen diyebilirsin) derse tú\'ya geçilir.',
      [
        { pronoun: 'Samimi', form: 'tú / te / ti', example: '¿Cómo te llamas?', tr: 'Adın ne?' },
        { pronoun: 'Resmi', form: 'usted / le', example: '¿Cómo se llama usted?', tr: 'Adınız ne?' },
        { pronoun: 'Tanı�xma', form: 'Mucho gusto', example: '¡Mucho gusto!', tr: 'Memnun oldum.' },
        { pronoun: 'Veda', form: 'Adiós / Hasta luego', example: '¡Adiós!', tr: 'Ho�xça kal.' }
      ],
      'İ�x görü�xmesi, doktor, ma�xaza çalı�xanı �  usted. Arkada�x, sınıf arkada�xı �  tú. Kararsız kalırsan usted ile ba�xla.')
  ],
  [
    SP('sp1', '¡Hola!', 'Merhaba!', 'Selamla'),
    SP('sp2', '¡Buenos días!', 'Günaydın!', 'Sabah selamı söyle'),
    SP('sp3', 'Me llamo Ali.', 'Benim adım Ali.', 'Adını söyle'),
    SP('sp4', '¡Mucho gusto!', 'Tanı�xtı�xıma memnun oldum.', 'Tanı�xma ifadesi',
      { gramNote: 'Tanı�xma kalıbı � yeni biriyle tanı�xınca.' }),
    SP('sp5', 'Gracias. ¡Adiós!', 'Te�xekkürler. Ho�xça kal!', 'Te�xekkür et ve vedala�x')
  ],
  [
    DL('d1', 'İlk Tanı�xma', 'First Meeting', [
      LN('A', 'm', '¡Hola!', 'Merhaba!', 'En yaygın selamlama. Her ortamda kullanılır.',
        [BD('Hola', 'Merhaba', 'greeting', 'Resmi ve gayri resmi � günün her saati.')]),
      LN('B', 'f', '¡Buenas tardes!', 'İyi günler!', '��xleden sonra selamlama.',
        [BD('Buenas tardes', 'İyi günler', 'greeting', 'Ofis, ma�xaza gibi resmi ortamlarda tercih edilir.')]),
      LN('A', 'm', 'Me llamo Ali. ¿Y usted?', 'Benim adım Ali. Ya siz?',
        'Kendini tanıtma + kar�xı tarafa sorma. Y = ve, ya. usted = resmi "siz".',
        [BD('Me llamo', 'Adım', 'V', 'llamarse = adlandırılmak.'), BD('Ali', 'Ali', 'name', '�zel isim.'), BD('¿Y usted?', 'Ya siz', 'question', 'Resmi hitapla isim sorma.')]),
      LN('B', 'f', 'Me llamo Ana. ¡Mucho gusto!', 'Benim adım Ana. Memnun oldum!',
        'İsim + tanı�xma ifadesi.',
        [BD('Me llamo Ana', 'Adım Ana', 'V', 'Kendini tanıtma.'), BD('Mucho gusto', 'Memnun oldum', 'phrase', 'Standart tanı�xma ifadesi.')]),
      LN('A', 'm', 'El gusto es mío. ¡Adiós!', 'Benim de memnuniyetim. Ho�xça kalın!',
        'El gusto es mío = ben de memnun oldum.',
        [BD('El gusto es mío', 'Benim de memnuniyetim', 'phrase', 'Kar�xılıklı nezaket.'), BD('Adiós', 'Ho�xça kal', 'farewell', 'Veda.')]),
      LN('B', 'f', '¡Hasta luego!', 'Görü�xürüz!', 'Samimi veda.',
        [BD('Hasta luego', 'Görü�xürüz', 'farewell', 'Günlük konu�xmada sık veda.')])
    ]),
    DL('d2', 'Hal Hatır', 'How Are You', [
      LN('A', 'f', '¡Buenos días!', 'Günaydın!', 'Sabah selamlaması.',
        [BD('Buenos días', 'Günaydın', 'greeting', '��xlene kadar kullanılır.')]),
      LN('B', 'm', '¡Buenos días!', 'Günaydın!', 'Aynı selamlamaya kar�xılık.',
        [BD('Buenos días', 'Günaydın', 'greeting', 'Kar�xılıklı selam.')]),
      LN('A', 'f', '¿Cómo está usted?', 'Nasılsınız?', 'Resmi hal hatır. estar = durum/bulunmak.',
        [BD('¿Cómo está usted?', 'Nasılsınız', 'question', 'Usted �  3. tekil fiil (está). Resmi form.')]),
      LN('B', 'm', 'Muy bien, gracias. ¿Y usted?', '�!ok iyiyim, te�xekkürler. Ya siz?',
        'Standart cevap. Muy = çok.',
        [BD('Muy bien', '�!ok iyi', 'V', 'Standart olumlu cevap.'), BD('gracias', 'te�xekkürler', 'courtesy', 'Nezaket.'), BD('¿Y usted?', 'Ya siz', 'question', 'Kar�xılık sorma.')]),
      LN('A', 'f', 'También muy bien. ¡Adiós!', 'Ben de çok iyiyim. Ho�xça kalın!',
        'También = de/da. Veda.',
        [BD('También', 'de / da', 'K', 'Kar�xı tarafa katılma.'), BD('Adiós', 'Ho�xça kalın', 'farewell', 'Resmi ayrılık.')])
    ])
  ],
  [
    LI('li1', '¡Hola! Me llamo Emma. ¡Mucho gusto!', 'Merhaba! Benim adım Emma. Memnun oldum!',
      [Q('¿Cómo se llama ella?', ['Emma', 'Ali', 'Ana', 'Tom'], 0, 'Adı ne?'),
       Q('¿Qué saludo usa?', ['Adiós', 'Hola', 'Buenas noches', 'Perdón'], 1, 'Hangi selamı kullanıyor?'),
       Q('¿Qué dice después del nombre?', ['Gracias', 'Mucho gusto', 'Por favor', 'De nada'], 1, 'İsminden sonra ne diyor?')])
  ]
);

// ������ Lesson 2: Artículos & ser ��������������������������������������������������������������
const L2 = scenario('Artículos & ser',
  [
    W('w1', 'el hombre', 'el OM-bre', 'adam (eril)', { tip: 'Belirli eril artikel: el.', ctx: 'Eril isimler el alır.',
      ex: { en: 'El hombre es alto.', tr: 'Adam uzun boylu.', bd: [BD('El', 'Belirli eril artikel', 'K', 'el = the (eril). hombre maskulin �  el.'), BD('hombre', 'adam', 'O', 'Eril isim.'), BD('es alto', 'uzun boylu', 'V', 'ser + sıfat.')] } }),
    W('w2', 'la mujer', 'la mu-HER', 'kadın (di�xil)', { tip: 'Belirli di�xil artikel: la.', ctx: 'Di�xil isimler la alır.',
      ex: { en: 'La mujer es amable.', tr: 'Kadın nazik.', bd: [BD('La', 'Belirli di�xil artikel', 'K', 'la = the (di�xil).'), BD('mujer', 'kadın', 'O', 'Di�xil isim.'), BD('es amable', 'nazik', 'V', 'ser + sıfat.')] } }),
    W('w3', 'los niños', 'los NIN-yos', 'çocuklar (eril ço�xul)', { tip: 'Belirli eril ço�xul: los.', ctx: 'Eril ço�xul isimler los alır.',
      ex: { en: 'Los niños juegan.', tr: '�!ocuklar oynuyor.', bd: [BD('Los', 'Belirli eril ço�xul artikel', 'K', 'los = the (eril ço�xul).'), BD('niños', 'çocuklar', 'O', 'Niño ço�xulu.')] } }),
    W('w4', 'las mesas', 'las ME-sas', 'masalar (di�xil ço�xul)', { tip: 'Belirli di�xil ço�xul: las.', ctx: 'Di�xil ço�xul isimler las alır.',
      ex: { en: 'Las mesas son grandes.', tr: 'Masalar büyük.', bd: [BD('Las', 'Belirli di�xil ço�xul artikel', 'K', 'las = the (di�xil ço�xul).'), BD('mesas', 'masalar', 'O', 'Mesa ço�xulu.')] } }),
    W('w5', 'un hombre', 'un OM-bre', 'bir adam', { tip: 'Belirsiz eril artikel: un.', ctx: 'Sayılmayan tekil eril.',
      ex: { en: 'Es un hombre.', tr: 'Bu bir adam.', bd: [BD('un', 'bir (eril)', 'K', 'Belirsiz artikel � eril tekil için un.'), BD('hombre', 'adam', 'O', 'Eril.')] } }),
    W('w6', 'una mujer', 'U-na mu-HER', 'bir kadın', { tip: 'Belirsiz di�xil artikel: una.', ctx: 'Sayılmayan tekil di�xil.',
      ex: { en: 'Es una profesora.', tr: 'O bir ö�xretmen.', bd: [BD('una', 'bir (di�xil)', 'K', 'Belirsiz artikel � di�xil tekil için una.'), BD('profesora', 'ö�xretmen (kadın)', 'O', 'Di�xil meslek ismi -a eki alır.')] } }),
    W('w7', 'unos libros', 'U-nos LI-bros', 'bazı kitaplar / birkaç kitap', { tip: 'Belirsiz eril ço�xul: unos.', ctx: 'Belirsiz eril ço�xul.',
      ex: { en: 'Unos libros son interesantes.', tr: 'Bazı kitaplar ilginç.', bd: [BD('unos', 'bazı / birkaç (eril ço�xul)', 'K', 'Belirsiz ço�xul artikel.'), BD('libros', 'kitaplar', 'O', 'Libro ço�xulu.')] } }),
    W('w8', 'unas flores', 'U-nas FLO-res', 'bazı çiçekler', { tip: 'Belirsiz di�xil ço�xul: unas.', ctx: 'Belirsiz di�xil ço�xul.',
      ex: { en: 'Unas flores son bonitas.', tr: 'Bazı çiçekler güzel.', bd: [BD('unas', 'bazı (di�xil ço�xul)', 'K', 'Belirsiz di�xil ço�xul artikel.'), BD('flores', 'çiçekler', 'O', 'Flor ço�xulu.')] } }),
    W('w9', 'yo soy', 'yo soy', 'ben ...im / ben ...yim', { tip: 'ser � 1. tekil.', ctx: 'Kendini tanıtma, kimlik.',
      ex: { en: 'Yo soy Ali.', tr: 'Ben Ali\'yim.', bd: [BD('Yo', 'Ben', 'S', '1. tekil özne � genelde dü�xer.'), BD('soy', '...im / ...yim', 'V', 'ser fiili � yo ile soy. Türkçede "-im/-yim" eki kar�xılı�xı.')] } }),
    W('w10', 'tú eres', 'tu E-res', 'sen ...sin', { tip: 'ser � 2. tekil samimi.', ctx: 'Arkada�xlarla.',
      ex: { en: 'Tú eres amable.', tr: 'Sen naziksin.', bd: [BD('Tú', 'Sen', 'S', 'Samimi hitap.'), BD('eres', '...sin', 'V', 'tú ile eres.')] } }),
    W('w11', 'él es / ella es', 'el es / E-ya es', 'o ... (erkek/kadın)', { tip: 'ser � 3. tekil.', ctx: 'Ba�xkasından bahsederken.',
      ex: { en: '�0l es estudiante.', tr: 'O (erkek) ö�xrenci.', bd: [BD('�0l', 'O (erkek)', 'S', '3. tekil eril.'), BD('es', '...dir', 'V', 'él/ella/usted ile es.'), BD('estudiante', 'ö�xrenci', 'O', 'Cinsiyetsiz meslek ismi.')] } }),
    W('w12', 'nosotros somos', 'no-SO-tros SO-mos', 'biz ...iz', { tip: 'ser � 1. ço�xul.', ctx: 'Grup halinde.',
      ex: { en: 'Nosotros somos amigos.', tr: 'Biz arkada�xız.', bd: [BD('Nosotros', 'Biz', 'S', '1. ço�xul.'), BD('somos', '...iz', 'V', 'nosotros/vosotros/ellos/ustedes ile somos/son.')] } })
  ],
  [
    G('g1', 'Belirli Artikel � el / la / los / las', 'Definite Articles',
      'İspanyolcada her ismin cinsiyeti vardır: maskulin (eril) veya feminin (di�xil). Belirli artikel (the) cinsiyet ve sayıya göre de�xi�xir: el (eril tekil), la (di�xil tekil), los (eril ço�xul), las (di�xil ço�xul). Türkçede artikel yok � bu İspanyolcanın en zor kısmı. İsimle birlikte artikelini ezberle: el hombre, la mujer, los niños, las mesas. Almancadan fark: İspanyolcada nötr cinsiyet yok; her isim eril veya di�xildir.',
      [
        { pronoun: 'Eril (m)', form: 'el', example: 'el hombre, el libro', tr: 'adam, kitap' },
        { pronoun: 'Di�xil (f)', form: 'la', example: 'la mujer, la puerta', tr: 'kadın, kapı' },
        { pronoun: 'Eril ço�xul', form: 'los', example: 'los hombres, los libros', tr: 'adamlar, kitaplar' },
        { pronoun: 'Di�xil ço�xul', form: 'las', example: 'las mujeres, las mesas', tr: 'kadınlar, masalar' }
      ],
      'İpucu: Sözlükte her ismin yanında artikel yazar: el perro (köpek), la gata (di�xi kedi). -o ile biten ço�xu isim eril, -a ile biten ço�xu di�xil � ama istisnalar var (el día, la mano). Ezberle!'),
    G('g2', 'Belirsiz Artikel � un / una / unos / unas', 'Indefinite Articles',
      'Belirsiz artikel "bir" veya "bazı" anlamında: un (eril tekil), una (di�xil tekil), unos (eril ço�xul), unas (di�xil ço�xul). Türkçede "bir" tek kelime; İspanyolcada cinsiyet ve sayıya göre dört form var. Olumsuzda "no" kullanılır: No es un libro (Bu bir kitap de�xil). Meslek tanıtırken: Soy profesor (��xretmenim) � artikel genelde dü�xer.',
      [
        { pronoun: 'Eril tekil', form: 'un', example: 'un hombre, un libro', tr: 'bir adam, bir kitap' },
        { pronoun: 'Di�xil tekil', form: 'una', example: 'una mujer, una mesa', tr: 'bir kadın, bir masa' },
        { pronoun: 'Eril ço�xul', form: 'unos', example: 'unos libros', tr: 'bazı kitaplar' },
        { pronoun: 'Di�xil ço�xul', form: 'unas', example: 'unas flores', tr: 'bazı çiçekler' }
      ],
      'un + eril tekil, una + di�xil tekil. �!o�xulda unos/unas "bazı" anlamı da katar. Artikel ismin cinsiyetini gösterir � Türkçede kar�xılı�xı yoktur.'),
    G('g3', 'Fiil: ser (olmak) � Tüm �!ekimler', 'Verb: ser (to be)',
      'ser = olmak (kalıcı özellik, kimlik, meslek, milliyet). İspanyolcanın en önemli fiili. Türkçedeki "-im, -sin, -dir" yapısının temeli. Düzensiz fiil � ezberle! usted/él/ella hepsi "es" alır. vosotros (siz � sadece İspanya) "sois" alır. Latin Amerika\'da vosotros yerine ustedes kullanılır.',
      [
        { pronoun: 'yo', form: 'soy', example: 'Yo soy Ali.', tr: 'Ben Ali\'yim.' },
        { pronoun: 'tú', form: 'eres', example: 'Tú eres amable.', tr: 'Sen naziksin.' },
        { pronoun: 'él/ella/usted', form: 'es', example: '�0l es profesor.', tr: 'O ö�xretmen.' },
        { pronoun: 'nosotros', form: 'somos', example: 'Somos amigos.', tr: 'Biz arkada�xız.' },
        { pronoun: 'vosotros', form: 'sois', example: 'Sois bienvenidos.', tr: 'Ho�x geldiniz.' },
        { pronoun: 'ellos/ustedes', form: 'son', example: 'Son amables.', tr: 'Onlar/Siz naziksiniz.' }
      ],
      'ser + sıfat/isim: Soy cansado (yorgunum � genel). ser + meslek: Soy estudiante. Soru: ¿Eres cansado? ¿Es él profesor? NOT: Geçici durumlar için estar kullanılır (sonraki derslerde).')
  ],
  [
    SP('sp1', 'Yo soy Ali.', 'Ben Ali\'yim.', 'Kendini tanıt (ser)', { gramNote: 'yo + soy � ser fiili 1. tekil.' }),
    SP('sp2', 'Es un libro.', 'Bu bir kitap.', 'Belirsiz artikel kullan', { gramNote: 'Es + un libro (eril). Yo genelde dü�xer.' }),
    SP('sp3', 'El hombre es alto.', 'Adam uzun boylu.', 'el + isim + ser + sıfat'),
    SP('sp4', 'La mujer es amable.', 'Kadın nazik.', 'la + isim + ser + sıfat'),
    SP('sp5', 'Somos amigos.', 'Biz arkada�xız.', 'nosotros + somos � ser ço�xul')
  ],
  [
    DL('d1', 'Artikel Alı�xtırması', 'Article Practice', [
      LN('A', 'm', '¿Qué es esto?', 'Bu ne?', '¿Qué es esto? = Bu nedir? � tanımadı�xın bir �xeyi sorarken.',
        [BD('Qué', 'Ne', 'question', 'Soru kelimesi.'), BD('es esto', 'bu ...dır', 'V', 'ser � esto (gösteren zamir) ile es.')]),
      LN('B', 'f', 'Es una mesa.', 'Bu bir masa.', 'Es una ... = Bu bir ... mesa di�xil �  una.',
        [BD('Es', 'Bu ...dır', 'V', 'ser 3. tekil.'), BD('una mesa', 'bir masa', 'O', 'Mesa di�xil �  una (belirsiz).')]),
      LN('A', 'm', '¿Y esto?', 'Peki bu?', 'Y = ve, peki.',
        [BD('Y', 'Ve / peki', 'K', 'Ba�xlaç.'), BD('esto', 'bu', 'question', 'Tekrar soru.')]),
      LN('B', 'f', 'Es la puerta.', 'Bu kapı.', 'Puerta di�xil �  la (belirli). Tanıdı�xın �xey için la.',
        [BD('la puerta', 'kapı', 'O', 'Puerta di�xil �  la belirli artikel.')]),
      LN('A', 'm', '¿Es grande la mesa?', 'Masa büyük mü?', 'Evet/Hayır sorusu: fiil ba�xa gelir veya tonlama.',
        [BD('Es', '... mı?', 'V', 'Soru tonu.'), BD('la mesa', 'masa', 'S', 'Di�xil özne.'), BD('grande', 'büyük', 'adj', 'Sıfat � fiilden sonra.')]),
      LN('B', 'f', 'Sí, es grande.', 'Evet, o büyük.', 'Sí = evet.',
        [BD('es grande', 'büyük', 'V', 'ser + sıfat.')])
    ]),
    DL('d2', 'Kendini Tanıtma', 'Self Introduction with ser', [
      LN('A', 'm', 'Soy Ali. Soy estudiante.', 'Ben Ali. Ben ö�xrenciyim.', 'İki cümle ser ile � isim + meslek.',
        [BD('Soy Ali', 'Ben Ali\'yim', 'V', 'ser + isim.'), BD('Soy estudiante', '��xrenciyim', 'V', 'ser + meslek � artikel yok.')]),
      LN('B', 'f', '¡Qué bien! Soy María. Soy profesora.', 'Güzel! Ben María. Ben ö�xretmenim.',
        'Profesora = kadın ö�xretmen (di�xil).',
        [BD('Qué bien', 'Güzel / ne güzel', 'adj', 'Olumlu tepki.'), BD('profesora', 'ö�xretmen (kadın)', 'O', '-a eki di�xil meslek.')]),
      LN('A', 'm', '¿Es usted también profesora?', 'Siz de ö�xretmen misiniz?', 'Resmi soru � usted + es.',
        [BD('Es usted', 'Misiniz', 'V', 'Resmi soru.'), BD('también', 'de / da', 'K', 'también = de/da.')]),
      LN('B', 'f', 'Sí, soy profesora. ¿Y tú? ¿Eres estudiante?', 'Evet, ö�xretmenim. Ya sen? ��xrenci misin?',
        'tú\'ya geçi�x � samimi ortam. ¿Eres ...? = sen ... misin?',
        [BD('¿Eres tú?', 'Sen ... misin', 'V', 'tú ile eres � samimi soru.'), BD('estudiante', 'ö�xrenci', 'O', 'Cinsiyetsiz meslek.')]),
      LN('A', 'm', 'Sí, soy estudiante. ¡Estamos en la lección uno!', 'Evet, ö�xrenciyim. Birinci dersteyiz!',
        [BD('Estamos', 'Biz ...deyiz', 'V', 'estar � geçici konum. ser de�xil!'), BD('lección uno', 'birinci ders', 'K', 'en + la = ...de/-da.')])
    ])
  ],
  [
    LI('li1', 'Es un hombre. El hombre es alto. La mujer es amable. Los niños son pequeños.',
      'Bu bir adam. Adam uzun boylu. Kadın nazik. �!ocuklar küçük.',
      [Q('¿Qué artículo usa "hombre"?', ['la', 'los', 'el', 'un'], 2, '"hombre" hangi artikel alır?'),
       Q('¿Cómo se dice "mujer" en turco?', ['çocuk', 'kadın', 'masa', 'kapı'], 1, '"mujer" Türkçede ne?'),
       Q('¿Cómo son los niños?', ['grandes', 'pequeños', 'amables', 'altos'], 1, '�!ocuklar nasıl?')])
  ]
);

// ������ Lesson 3: Numbers & Money ��������������������������������������������������������������
const NUMBERS_1_20 = [
  ['uno', 'U-no', 'bir'], ['dos', 'dos', 'iki'], ['tres', 'tres', 'üç'], ['cuatro', 'KWA-tro', 'dört'],
  ['cinco', 'SIN-ko', 'be�x'], ['seis', 'says', 'altı'], ['siete', 'SYE-te', 'yedi'], ['ocho', 'O-cho', 'sekiz'],
  ['nueve', 'NWE-ve', 'dokuz'], ['diez', 'dyes', 'on'], ['once', 'ON-se', 'on bir'], ['doce', 'DO-se', 'on iki'],
  ['trece', 'TRE-se', 'on üç'], ['catorce', 'ka-TOR-se', 'on dört'], ['quince', 'KIN-se', 'on on be�x'],
  ['dieciséis', 'dye-si-SAYS', 'on altı'], ['diecisiete', 'dye-si-SYE-te', 'on yedi'], ['dieciocho', 'dye-si-O-cho', 'on sekiz'],
  ['diecinueve', 'dye-si-NWE-ve', 'on dokuz'], ['veinte', 'BAYN-te', 'yirmi']
];

const COMPOUNDS_21_99 = [
  ['veintiuno', 'bayn-ti-U-no', 'yirmi bir'], ['veintidós', 'bayn-ti-DOS', 'yirmi iki'], ['veintitrés', 'bayn-ti-TRES', 'yirmi üç'],
  ['treinta', 'TRAYN-ta', 'otuz'], ['treinta y uno', 'TRAYN-ta i U-no', 'otuz bir'], ['cuarenta', 'kwa-REN-ta', 'kırk'],
  ['cincuenta', 'sin-KWEN-ta', 'elli'], ['sesenta', 'se-SEN-ta', 'altmı�x'], ['setenta', 'se-TEN-ta', 'yetmi�x'],
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

const L3 = scenario('Numbers & Money',
  [
    ...numWords(),
    W('w25', '¿Cuánto cuesta?', 'KWAN-to KWES-ta', 'Bu ne kadar? / Kaça?',
      { tip: 'Fiyat sormak.', ctx: 'Alı�xveri�xte.',
        ex: { en: '¿Cuánto cuesta esto?', tr: 'Bu ne kadar?', bd: [BD('Cuánto', 'Ne kadar', 'question', 'Fiyat sorusu.'), BD('cuesta', '... tutar', 'V', 'costar = mal olmak. 3. tekil.')] } }),
    W('w26', 'euro', 'E-u-ro', 'euro',
      { ex: { en: 'Cuesta cinco euros.', tr: 'Bu be�x euro.', bd: [BD('euros', 'euro', 'currency', 'Euro İspanya para birimi. �!o�xul: euros.')] } }),
    W('w27', 'céntimo', 'SEN-ti-mo', 'sent',
      { ex: { en: 'Cuesta noventa y nueve céntimos.', tr: 'Bu doksan dokuz sent.', bd: [BD('céntimo', 'sent', 'currency', '1 Euro = 100 céntimos.')] } }),
    W('w28', 'la cuenta', 'la KWEN-ta', 'hesap / fatura',
      { ex: { en: 'La cuenta, por favor.', tr: 'Hesap, lütfen.', bd: [BD('cuenta', 'hesap', 'O', 'Di�xil �  la. Restoranda hesap isterken.')] } })
  ],
  [
    G('g1', 'İspanyolca Sayılar 1�20', 'Spanish Numbers 1�20',
      'İspanyolca sayılar 1�15 düzensiz, 16�19: dieci + sayı (dieciséis = 16). 20 = veinte. Dikkat: uno bir sayı olarak kalır; artikel/nitelik olarak un/una kullanılır. 21�29 tek kelime: veintiuno, veintidós...',
      NUMBERS_1_20.map(([en, , tr], i) => ({
        pronoun: String(i + 1),
        form: en,
        example: `${en.charAt(0).toUpperCase() + en.slice(1)}.`,
        tr
      })),
      '21+: veintiuno (tek kelime) veya treinta y uno (otuz bir). Y = ve birle�xtirir.'),
    G('g2', 'Bile�xik Sayılar 21�99', 'Compound Numbers 21�99',
      '21�29: veinti- + sayı (veintidós). 31�39: treinta y dos... 41�49: cuarenta y uno... Her onluk + y + birler. 100 = cien (tek ba�xına), ciento (101+).',
      COMPOUNDS_21_99.map(([en, , tr]) => ({
        pronoun: tr,
        form: en,
        example: en,
        tr
      })),
      'Ejemplo: 32 = treinta y dos. 99 = noventa y nueve. Fiyat: cinco euros con cincuenta céntimos.'),
    G('g3', 'Para � Euro y Céntimo', 'Money � Euro and Cent',
      'İspanya Euro (��) kullanır. Fiyat sormak: ¿Cuánto cuesta? / ¿Cuánto es? Cevap: Cuesta ... euros (y ... céntimos). Virgül ondalık için: 3,50 �� = tres euros con cincuenta céntimos.',
      [
        { pronoun: 'Soru', form: '¿Cuánto cuesta...?', example: '¿Cuánto cuesta esto?', tr: 'Bu ne kadar?' },
        { pronoun: 'Cevap', form: 'Cuesta...', example: 'Cuesta diez euros.', tr: 'Bu on euro.' },
        { pronoun: 'Hesap', form: 'La cuenta, por favor', example: 'La cuenta, por favor.', tr: 'Hesap, lütfen.' },
        { pronoun: '�deme', form: 'En efectivo / con tarjeta', example: '¿Puedo pagar con tarjeta?', tr: 'Kartla ödeyebilir miyim?' }
      ],
      'İspanya\'da nakit hâlâ yaygın. "¿Efectivo o tarjeta?" = Nakit mi kart mı?')
  ],
  [
    SP('sp1', 'Dos cafés, por favor.', 'İki kahve, lütfen.', 'Sayı ile sipari�x ver'),
    SP('sp2', 'Cuesta cinco euros.', 'Bu be�x euro.', 'Fiyat söyle'),
    SP('sp3', '¿Cuánto cuesta esto?', 'Bu ne kadar?', 'Fiyat sor'),
    SP('sp4', 'Tengo veinte euros.', 'Yirmi eurom var.', 'Paranı söyle'),
    SP('sp5', 'La cuenta, por favor.', 'Hesap, lütfen.', 'Hesap iste')
  ],
  [
    DL('d1', 'En el Café', 'At the Café', [
      LN('A', 'm', 'Dos cafés, por favor.', 'İki kahve, lütfen.', 'Sayı + isim. Café eril �  dos cafés.',
        [BD('Dos cafés', 'İki kahve', 'O', 'Sayı + isim � ço�xulda artikel dü�xer.')]),
      LN('B', 'f', '¿Algo más?', 'Ba�xka bir �xey?', 'Algo más = ba�xka bir �xey.',
        [BD('Algo más', 'Ba�xka bir �xey', 'question', 'Sipari�x tamamlama sorusu.')]),
      LN('A', 'm', 'No, gracias. ¿Cuánto cuesta?', 'Hayır, te�xekkürler. Ne kadar?',
        [BD('Cuánto cuesta', 'Ne kadar', 'question', 'Fiyat sorusu.')]),
      LN('B', 'f', 'Son seis euros con cincuenta.', 'Toplam altı euro elli.',
        [BD('Son', 'Toplam ...', 'V', 'Ser � toplam fiyat.')]),
      LN('A', 'm', 'Aquí tiene. ¡Gracias!', 'Buyurun. Te�xekkürler!', 'Aquí tiene = buyurun (para verirken).',
        [BD('Aquí tiene', 'Buyurun', 'K', 'Para uzatırken.')])
    ])
  ],
  [
    LI('li1', 'El café cuesta tres euros. El pan cuesta dos euros con cincuenta. En total son cinco euros con cincuenta.',
      'Kahve üç euro. Ekmek iki euro elli. Toplam be�x euro elli.',
      [Q('¿Cuánto cuesta el café?', ['2 ��', '3 ��', '5 ��', '6 ��'], 1, 'Kahve ne kadar?'),
       Q('¿Cuánto cuesta el pan?', ['2,50 ��', '3 ��', '5 ��', '5,50 ��'], 0, 'Ekmek ne kadar?'),
       Q('¿Cuánto es en total?', ['3 ��', '5,05 ��', '5,50 ��', '6 ��'], 2, 'Toplam ne kadar?')])
  ]
);

// ������ Helper: compact scenario builder ������������������������������������������������
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

// ������ Lessons 4�20: Scenario topics ������������������������������������������������������
const L4 = scenario('Time & Date',
  mkScenarioWords([
    ['w1', '¿Qué hora es?', 'kay O-ra es', 'Saat kaç?', { tip: 'Saat sormak.', ex: { en: 'Perdón, ¿qué hora es?', tr: 'Pardon, saat kaç?', bd: [BD('¿Qué hora es?', 'Saat kaç', 'question', 'Resmi ortamda Perdón ekle.')] } }],
    ['w2', 'Son las tres', 'son las tres', 'Saat üç', { ex: { en: 'Son las tres.', tr: 'Saat üç.', bd: [BD('Son las', 'Saat ...', 'V', '2+ için Son las. 1:00 = Es la una.')] } }],
    ['w3', 'la mañana', 'la ma-NYA-na', 'sabah'],
    ['w4', 'la tarde', 'la TAR-de', 'ö�xleden sonra'],
    ['w5', 'la noche', 'la NO-che', 'ak�xam / gece'],
    ['w6', 'hoy', 'oy', 'bugün'],
    ['w7', 'mañana', 'ma-NYA-na', 'yarın'],
    ['w8', 'ayer', 'a-YER', 'dün'],
    ['w9', 'lunes', 'LU-nes', 'Pazartesi'],
    ['w10', 'martes', 'MAR-tes', 'Salı'],
    ['w11', 'miércoles', 'MYER-ko-les', '�!ar�xamba'],
    ['w12', 'jueves', 'HWE-ves', 'Per�xembe'],
    ['w13', 'viernes', 'BYER-nes', 'Cuma'],
    ['w14', 'sábado', 'SA-ba-do', 'Cumartesi'],
    ['w15', 'domingo', 'do-MIN-go', 'Pazar'],
    ['w16', 'enero', 'e-NE-ro', 'Ocak'],
    ['w17', 'julio', 'HU-lyo', 'Temmuz'],
    ['w18', '¿Cuándo?', 'KWAN-do', 'Ne zaman?'],
    ['w19', '¿A qué hora?', 'a kay O-ra', 'Saat kaçta?'],
    ['w20', 'la semana', 'la se-MA-na', 'hafta']
  ]),
  [G('g1', 'Saat Sorma ve Söyleme', 'Telling Time',
    'İspanyolcada saat: ¿Qué hora es? Son las ... (2+), Es la una (1:00). y media = buçuk, y cuarto = çeyrek. A las ocho = saat sekizde.',
    [{ pronoun: 'Tam saat', form: 'Son las ...', example: 'Son las tres.', tr: 'Saat üç.' },
     { pronoun: '1:00', form: 'Es la una', example: 'Es la una.', tr: 'Saat bir.' },
     { pronoun: 'Buçuk', form: 'y media', example: 'Son las tres y media.', tr: 'Saat üç buçuk.' },
     { pronoun: 'Randevu', form: 'A las ...', example: 'A las ocho.', tr: 'Saat sekizde.' }],
    'İspanyolcada saat Türkçe gibi � yarım üç = tres y media (3:30).'),
   G('g2', 'Günler ve Aylar', 'Days and Months',
    'Günler ve aylar İspanyolcada küçük harfle yazılır (Pazartesi hariç özel isim de�xil). el lunes = pazartesi günü. en julio = temmuz ayında.',
    [{ pronoun: 'Günler', form: 'lunes ... domingo', example: 'El lunes.', tr: 'Pazartesi günü.' },
     { pronoun: 'Aylar', form: 'enero ... diciembre', example: 'En julio.', tr: 'Temmuz\'da.' },
     { pronoun: 'Bugün', form: 'hoy / mañana / ayer', example: 'Hoy es viernes.', tr: 'Bugün cuma.' },
     { pronoun: 'Soru', form: '¿Cuándo?', example: '¿Cuándo empieza el curso?', tr: 'Kurs ne zaman ba�xlıyor?' }],
    'el + gün, en + ay, a las + saat � edatları ezberle.')],
  [SP('sp1', '¿Qué hora es?', 'Saat kaç?', 'Saat sor'),
   SP('sp2', 'Son las diez.', 'Saat on.', 'Saati söyle'),
   SP('sp3', 'Hoy es lunes.', 'Bugün pazartesi.', 'Bugünün gününü söyle'),
   SP('sp4', 'Mañana tengo tiempo.', 'Yarın vaktim var.', 'Yarın hakkında konu�x'),
   SP('sp5', 'A las nueve, por favor.', 'Saat dokuzda, lütfen.', 'Randevu saati belirt')],
  [DL('d1', 'Concertar una cita', 'Making an Appointment', [
    LN('A', 'm', '¿Cuándo tiene tiempo?', 'Ne zaman müsait siniz?', 'Resmi randevu sorusu.',
      [BD('¿Cuándo', 'Ne zaman', 'question', 'Zaman sorusu.'), BD('tiene tiempo', 'müsait misiniz', 'V', 'tener tiempo = vakti olmak.')]),
    LN('B', 'f', '¿El martes a las diez?', 'Salı saat onda?', '�neri � el + gün, a las + saat.',
      [BD('El martes', 'Salı günü', 'K', 'el + gün.'), BD('a las diez', 'saat onda', 'K', 'a las + saat.')]),
    LN('A', 'm', 'Sí, me viene bien. ¡Hasta el martes!', 'Evet, uyar. Salıya kadar!', 'Me viene bien = uyar, olur.',
      [BD('Me viene bien', 'Uyar / olur', 'V', 'Günlük kabul ifadesi.')]),
    LN('B', 'f', 'Hasta el martes. ¡Adiós!', 'Salıya kadar. Ho�xça kalın!', 'Hasta = ...e kadar.',
      [BD('Hasta el martes', 'Salıya kadar', 'farewell', 'Hasta + zaman = ...e kadar.')])
  ])],
  [LI('li1', 'Hoy es miércoles, quince de marzo. La clase empieza a las nueve y termina a las once.',
    'Bugün çar�xamba, 15 Mart. Ders saat dokuzda ba�xlıyor ve saat on birde bitiyor.',
    [Q('¿Qué día es hoy?', ['lunes', 'martes', 'miércoles', 'viernes'], 2, 'Bugün hangi gün?'),
     Q('¿Cuándo empieza la clase?', ['8:00', '9:00', '10:00', '11:00'], 1, 'Ders ne zaman ba�xlıyor?'),
     Q('¿Cuándo termina la clase?', ['9:00', '10:00', '11:00', '12:00'], 2, 'Ders ne zaman bitiyor?')])]
);

const L5 = scenario('Restaurant & Food',
  mkScenarioWords([
    ['w1', 'Una mesa para dos, por favor.', 'U-na ME-sa pa-ra dos, por fa-VOR', 'İki ki�xilik masa, lütfen.', { tip: 'Masa isteme.', ex: { en: 'Buenas noches. Una mesa para dos, por favor.', tr: 'İyi ak�xamlar. İki ki�xilik masa, lütfen.', bd: [BD('Una mesa', 'bir masa', 'O', 'Mesa di�xil �  una.')] } }],
    ['w2', 'la carta', 'la KAR-ta', 'menü'],
    ['w3', 'pedir', 'pe-DIR', 'sipari�x vermek'],
    ['w4', 'Quisiera...', 'ki-SYE-ra', '... alabilir miyim / ... istiyorum', { tip: 'Nazik sipari�x.', ex: { en: 'Quisiera un café.', tr: 'Bir kahve istiyorum.', bd: [BD('Quisiera', 'İstiyorum', 'modal', 'Restoranda nazik sipari�x kalıbı.')] } }],
    ['w5', 'el entrante', 'el en-TRAN-te', 'ba�xlangıç yeme�xi'],
    ['w6', 'el plato principal', 'el PLA-to prin-si-PAL', 'ana yemek'],
    ['w7', 'el postre', 'el POS-tre', 'tatlı'],
    ['w8', 'la bebida', 'la be-BI-da', 'içecek'],
    ['w9', 'el agua', 'el A-gwa', 'su'],
    ['w10', 'el café', 'el ka-FE', 'kahve'],
    ['w11', 'el té', 'el tay', 'çay'],
    ['w12', 'el zumo', 'el SU-mo', 'meyve suyu'],
    ['w13', 'el pan', 'el pan', 'ekmek'],
    ['w14', 'la sopa', 'la SO-pa', 'çorba'],
    ['w15', 'la ensalada', 'la en-sa-LA-da', 'salata'],
    ['w16', 'el pollo', 'el PO-yo', 'tavuk'],
    ['w17', 'la carne de vaca', 'la KAR-ne de BA-ka', 'sı�xır eti'],
    ['w18', 'el pescado', 'el pes-KA-do', 'balık'],
    ['w19', 'vegetariano', 've-he-ta-RYA-no', 'vejetaryen'],
    ['w20', 'delicioso', 'de-li-THYO-so', 'lezzetli'],
    ['w21', 'la cuenta', 'la KWEN-ta', 'hesap'],
    ['w22', 'la propina', 'la pro-PI-na', 'bah�xi�x'],
    ['w23', 'la reserva', 'la re-SER-va', 'rezervasyon'],
    ['w24', 'alérgico', 'a-LER-hi-ko', 'alerjik'],
    ['w25', '¡Buen provecho!', 'bwen pro-VE-cho', 'Afiyet olsun']
  ]),
  [G('g1', 'Restoranda Sipari�x Verme', 'Ordering at a Restaurant',
    'İspanya\'da garsona el kaldırılır veya göz teması kurulur. Quisiera... = nazik sipari�x. ¿Algo más? = Ba�xka bir �xey? La cuenta, por favor = Hesap lütfen.',
    [{ pronoun: 'Nazik istek', form: 'Quisiera...', example: 'Quisiera la sopa.', tr: '�!orba istiyorum.' },
     { pronoun: 'Soru', form: '¿Qué recomienda?', example: '¿Qué recomienda usted?', tr: 'Ne tavsiye edersiniz?' },
     { pronoun: 'Hesap', form: 'La cuenta, por favor', example: 'La cuenta, por favor.', tr: 'Hesap, lütfen.' },
     { pronoun: '�zel istek', form: 'Sin... / Con...', example: 'Sin cebolla, por favor.', tr: 'So�xansız, lütfen.' }],
    'Propina (bah�xi�x) zorunlu de�xil ama %5-10 bırakılır.')],
  [SP('sp1', 'Una mesa para tres, por favor.', '�Sç ki�xilik masa, lütfen.', 'Masa iste'),
   SP('sp2', 'Quisiera la sopa, por favor.', '�!orba istiyorum, lütfen.', 'Yemek sipari�x et'),
   SP('sp3', 'La cuenta, por favor.', 'Hesap, lütfen.', 'Hesap iste'),
   SP('sp4', '¡Está muy rico!', 'Bu çok lezzetli!', 'Yeme�xi öv'),
   SP('sp5', 'Soy alérgico a los frutos secos.', 'Kuruyemi�xe alerjim var.', 'Alerji belirt')],
  [DL('d1', 'En el restaurante', 'At the Restaurant', [
    LN('A', 'f', '¡Buenas noches! ¿Tiene reserva?', 'İyi ak�xamlar! Rezervasyonunuz var mı?', 'Resmi kar�xılama.',
      [BD('¿Tiene reserva?', 'Rezervasyon var mı', 'question', 'Resmi soru.')]),
    LN('B', 'm', 'Sí, a nombre de Ali. Para dos personas.', 'Evet, Ali adına. İki ki�xilik.',
      [BD('a nombre de', 'adına', 'K', 'a nombre de + isim.')]),
    LN('A', 'f', 'Por aquí, su mesa. La carta.', 'Buyurun, masanız burada. Menü.',
      [BD('carta', 'menü', 'O', 'Di�xil �  la.')]),
    LN('B', 'm', 'Gracias. Quisiera el pollo y una ensalada.', 'Te�xekkürler. Tavuk ve salata istiyorum.',
      [BD('Quisiera', 'İstiyorum', 'modal', 'Nazik sipari�x.')]),
    LN('A', 'f', '¿Desea algo de beber?', 'Bir �xey içmek ister misiniz?', 'Desear = istemek (nazik).',
      [BD('¿Desea', 'İster misiniz', 'modal', 'Resmi nazik istek.')]),
    LN('B', 'm', 'Sí, un agua y un café, por favor.', 'Evet, bir su ve bir kahve, lütfen.',
      [BD('un agua', 'bir su', 'O', 'Agua di�xil ama un el ile.'), BD('un café', 'bir kahve', 'O', 'Eril �  un.')])
  ])],
  [LI('li1', 'Hoy hay salmón con verduras por catorce euros y pasta vegetariana por diez euros. De postre hay tarta de chocolate por cinco euros.',
    'Bugün somon sebze ile on dört euro, vejetaryen makarna on euro. Tatlı olarak çikolatalı kek be�x euro.',
    [Q('¿Cuánto cuesta el salmón?', ['10 ��', '12 ��', '14 ��', '16 ��'], 2, 'Somon ne kadar?'),
     Q('¿Qué opción vegetariana hay?', ['sopa', 'ensalada', 'pasta', 'pizza'], 2, 'Hangi vejetaryen seçenek var?'),
     Q('¿Cuál es el postre?', ['helado', 'tarta de queso', 'tarta de manzana', 'tarta de chocolate'], 3, 'Tatlı ne?')])]
);

const L6 = scenario('Shopping',
  mkScenarioWords([
    ['w1', '¿Dónde encuentro...?', 'DON-de en-KWEN-tro', '... nerede bulabilirim?'],
    ['w2', '¿Cuánto cuesta?', 'KWAN-to KWES-ta', 'Bu ne kadar?'],
    ['w3', 'muy caro', 'muy KA-ro', 'çok pahalı'],
    ['w4', 'barato', 'ba-RA-to', 'ucuz'],
    ['w5', 'el descuento', 'el des-KWEN-to', 'indirim'],
    ['w6', 'la talla', 'la TA-ya', 'beden'],
    ['w7', 'el color', 'el ko-LOR', 'renk'],
    ['w8', 'probarse', 'pro-BAR-se', 'denemek (giysi)'],
    ['w9', 'el probador', 'el pro-ba-DOR', 'deneme kabini'],
    ['w10', 'quedar bien', 'ke-DAR byen', 'uymak / olmak (beden)'],
    ['w11', 'comprar', 'kom-PRAR', 'satın almak'],
    ['w12', 'pagar', 'pa-GAR', 'ödemek'],
    ['w13', 'el ticket', 'el ti-KET', 'fi�x'],
    ['w14', 'cambiar', 'kam-BYAR', 'de�xi�xtirmek (iade)'],
    ['w15', 'la oferta', 'la o-FER-ta', 'özel teklif / indirim']
  ]),
  [G('g1', 'Alı�xveri�xte Faydalı İfadeler', 'Useful Shopping Phrases',
    'Ma�xazada: Buenas tardes ile ba�xla. ¿Cuánto cuesta? = fiyat sor. ¿Puedo probármelo? = deneyebilir miyim? Es muy caro = çok pahalı.',
    [{ pronoun: 'Fiyat', form: '¿Cuánto cuesta...?', example: '¿Cuánto cuesta la chaqueta?', tr: 'Ceket ne kadar?' },
     { pronoun: 'Deneme', form: '¿Puedo probármelo?', example: '¿Puedo probármelo?', tr: 'Deneyebilir miyim?' },
     { pronoun: 'Beden', form: '¿Tiene talla M?', example: '¿Tiene talla L?', tr: 'L beden var mı?' },
     { pronoun: '�deme', form: '¿Dónde puedo pagar?', example: '¿Dónde puedo pagar?', tr: 'Nerede ödeyebilirim?' }],
    'Domingos ço�xu ma�xaza kapalı � İspanya\'da dinlenme günü.')],
  [G('g2', 'Satın Alma', 'Making a Purchase',
    'İspanyolcada satın alma: Me lo llevo = Bunu alıyorum. ¿Puedo pagar con tarjeta? = Kartla ödeyebilir miyim? ¿Tiene en...? = ... var mı?',
    [{ pronoun: 'Satın alma', form: 'Me lo llevo / Me quedo con...', example: 'Me quedo con la chaqueta azul.', tr: 'Mavi ceketi alıyorum.' },
     { pronoun: '�deme', form: '¿Efectivo o tarjeta?', example: '¿Puedo pagar con tarjeta?', tr: 'Kartla ödeyebilir miyim?' },
     { pronoun: 'Fi�x', form: '¿Me da un ticket?', example: '¿Me da un ticket, por favor?', tr: 'Fi�x alabilir miyim?' },
     { pronoun: 'İade', form: '¿Puedo cambiarlo?', example: '¿Puedo cambiarlo?', tr: 'Bunu de�xi�xtirebilir miyim?' }],
    'Ticket = fi�x. Derecho de devolución = iade hakkı (genelde 14 gün).')],
  [SP('sp1', '¿Cuánto cuesta?', 'Bu ne kadar?', 'Fiyat sor'),
   SP('sp2', 'Es muy caro.', 'Bu çok pahalı.', 'Pahalı de'),
   SP('sp3', '¿Puedo probármelo?', 'Bunu deneyebilir miyim?', 'Deneme iste'),
   SP('sp4', 'Me queda bien.', 'Bu bana uyuyor.', 'Beden uygun de'),
   SP('sp5', 'Me lo llevo.', 'Bunu alıyorum.', 'Satın al')],
  [DL('d1', 'En la tienda', 'In the Shop', [
    LN('A', 'f', '¡Buenas tardes! ¿En qué puedo ayudarle?', 'İyi günler! Size nasıl yardımcı olabilirim?', 'Satı�x elemanı kar�xılama.',
      [BD('¿En qué puedo ayudarle?', 'Nasıl yardım edebilirim', 'modal', 'Ma�xaza standart sorusu.')]),
    LN('B', 'm', 'Busco una chaqueta.', 'Ceket arıyorum.', 'buscar = aramak.',
      [BD('Busco', 'arıyorum', 'V', 'buscar + isim.')]),
    LN('A', 'f', '¿Qué talla necesita?', 'Hangi beden lazım?', 'necesitar = ihtiyaç duymak.',
      [BD('¿Qué talla', 'Hangi beden', 'question', 'Qué = hangi.')]),
    LN('B', 'm', 'Talla M, por favor. ¿Puedo probármela?', 'M beden, lütfen. Deneyebilir miyim?',
      [BD('probarse', 'denemek', 'V', 'Giysi denemek.')]),
    LN('A', 'f', 'Claro. El probador está allí.', 'Tabii. Deneme kabini orada.',
      [BD('probador', 'deneme kabini', 'O', 'Eril �  el.')]),
    LN('B', 'm', '¡Me queda bien! ¿Cuánto cuesta?', 'Bu uydu! Ne kadar?',
      [BD('¿Cuánto cuesta?', 'Ne kadar', 'question', 'Fiyat sorusu.')])
  ])],
  [LI('li1', 'La chaqueta cuesta noventa y nueve euros. Hoy hay un veinte por ciento de descuento. Así que cuesta setenta y nueve euros.',
    'Ceket doksan dokuz euro. Bugün yüzde yirmi indirim var. Yani yetmi�x dokuz euro.',
    [Q('¿Cuánto cuesta la chaqueta normalmente?', ['79 ��', '89 ��', '99 ��', '119 ��'], 2, 'Ceket normal fiyatı ne?'),
     Q('¿Qué porcentaje de descuento hay?', ['10%', '15%', '20%', '30%'], 2, 'Yüzde kaç indirim?'),
     Q('¿Cuánto cuesta con descuento?', ['69 ��', '79 ��', '89 ��', '99 ��'], 1, 'İndirimli fiyat ne?')])]
);

const L7 = scenario('Directions',
  mkScenarioWords([
    ['w1', '¿Dónde está...?', 'DON-de es-TA', '... nerede?'],
    ['w2', 'a la izquierda', 'a la is-KYEY-dra', 'sola'],
    ['w3', 'a la derecha', 'a la de-RE-cha', 'sa�xa'],
    ['w4', 'todo recto', 'TO-do REK-to', 'düz / ileri'],
    ['w5', 'la esquina', 'la es-KI-na', 'kö�xe'],
    ['w6', 'la calle', 'la KA-ye', 'cadde / sokak'],
    ['w7', 'la estación de tren', 'la es-ta-THYON de tren', 'tren istasyonu'],
    ['w8', 'la parada', 'la pa-RA-da', 'durak'],
    ['w9', 'el semáforo', 'el se-ma-FO-ro', 'trafik lambası'],
    ['w10', 'cruzar', 'kru-SAR', 'kar�xıdan kar�xıya geçmek'],
    ['w11', 'el cruce', 'el KRU-se', 'kav�xak'],
    ['w12', 'cerca', 'SER-ka', 'yakında']
  ]),
  [G('g1', 'Yön Tarifi Verme', 'Giving Directions',
    'Temel yönler: a la izquierda (sol), a la derecha (sa�x), todo recto (düz). Siga... = ... gidin (resmi emir). En la esquina = kö�xede.',
    [{ pronoun: 'Yönler', form: 'izquierda / derecha / recto', example: 'Siga todo recto.', tr: 'Düz gidin.' },
     { pronoun: 'Konum', form: 'cerca / lejos', example: 'Está cerca.', tr: 'Yakında.' },
     { pronoun: 'Soru', form: '¿Dónde está...? / ¿Cómo llego a...?', example: '¿Dónde está la estación?', tr: 'Tren istasyonu nerede?' },
     { pronoun: 'Mesafe', form: 'aprox. / unos', example: 'Está a unos cinco minutos.', tr: 'Yakla�xık be�x dakika.' }],
    'İspanya\'da yaya geçitlerine dikkat � kırmızıda geçme!')],
  [SP('sp1', '¿Dónde está la estación de tren?', 'Tren istasyonu nerede?', 'Yer sor'),
   SP('sp2', 'Siga todo recto.', 'Düz gidin.', 'Yön tarif et'),
   SP('sp3', 'Luego a la izquierda.', 'Sonra sola.', 'Yön ekle'),
   SP('sp4', 'Está cerca.', 'Yakında.', 'Mesafe belirt'),
   SP('sp5', '¡Gracias por la ayuda!', 'Yardım için te�xekkürler!', 'Te�xekkür et')],
  [DL('d1', 'Pedir direcciones', 'Asking for Directions', [
    LN('A', 'm', 'Perdón, ¿dónde está la estación de tren?', 'Pardon, tren istasyonu nerede?', 'Yol sorma � Perdón ile ba�xla.',
      [BD('Perdón', 'Pardon', 'courtesy', 'Yabancıya yakla�xırken.'), BD('¿dónde está', 'nerede', 'question', 'Dónde + está + isim.')]),
    LN('B', 'f', 'Siga todo recto, luego a la izquierda.', 'Düz gidin, sonra sola.', 'luego = sonra.',
      [BD('todo recto', 'düz', 'direction', 'İleri git.'), BD('luego a la izquierda', 'sonra sol', 'direction', 'Sıralı yön.')]),
    LN('A', 'm', '¿En el semáforo?', 'Trafik lambasında mı?', 'Onay sorma.',
      [BD('En el semáforo', 'Trafik lambasında', 'K', 'en + isim � ...de/-da.')]),
    LN('B', 'f', 'Sí, en el semáforo a la derecha. Luego verá la estación.', 'Evet, trafik lambasında sa�xa. Sonra istasyonu görürsünüz.',
      [BD('verá', 'görürsünüz', 'V', 'Resmi emir / tavsiye (futuro de cortesía).')])
  ])],
  [LI('li1', 'Siga todo recto hasta el cruce. Luego a la izquierda. La estación está a cinco minutos a pie.',
    'Kav�xa�xa kadar düz gidin. Sonra sola. Tren istasyonu yürüyerek be�x dakika.',
    [Q('¿Qué se hace en el cruce?', ['derecha', 'izquierda', 'volver', 'parar'], 1, 'Kav�xakta ne yapılır?'),
     Q('¿Cuánto se tarda a pie?', ['3 min.', '5 min.', '10 min.', '15 min.'], 1, 'Yürüyerek ne kadar sürer?'),
     Q('¿Hacia dónde se va primero?', ['izquierda', 'derecha', 'recto', 'atrás'], 2, '�nce nereye gidilir?')])]
);

const L8 = scenario('Transport & Travel',
  mkScenarioWords([
    ['w1', 'el tren', 'el tren', 'tren'],
    ['w2', 'el autobús', 'el au-to-BUS', 'otobüs'],
    ['w3', 'el metro', 'el ME-tro', 'metro'],
    ['w4', 'el avión', 'el a-BYON', 'uçak'],
    ['w5', 'el aeropuerto', 'el a-e-ro-PWER-to', 'havaalanı'],
    ['w6', 'el billete', 'el bi-YE-te', 'bilet'],
    ['w7', 'subir', 'su-BIR', 'binmek (araç)'],
    ['w8', 'bajar', 'ba-HAR', 'inmek (araç)'],
    ['w9', 'hacer transbordo', 'a-SER trans-BOR-do', 'aktarma yapmak'],
    ['w10', 'el andén', 'el an-DEN', 'peron'],
    ['w11', 'salir', 'sa-LIR', 'kalkmak (araç)'],
    ['w12', 'llegar', 'ye-GAR', 'varmak']
  ]),
  [G('g1', 'Toplu Ta�xıma', 'Public Transport',
    'İspanya\'da metro, autobús, tranvía. Billete = bilet. Subir/Bajar = binmek/inmek. ¡Valide el billete! = Bileti damgalayın!',
    [{ pronoun: 'Bilet', form: 'el billete', example: 'Un billete, por favor.', tr: 'Bir bilet, lütfen.' },
     { pronoun: 'Peron', form: 'andén ...', example: 'El tren sale del andén 3.', tr: 'Tren 3. perondan kalkıyor.' },
     { pronoun: 'Aktarma', form: 'hacer transbordo', example: 'Hay que hacer transbordo en Madrid.', tr: 'Madrid\'de aktarma yap.' },
     { pronoun: 'Gecikme', form: 'retraso', example: 'El tren tiene retraso.', tr: 'Tren gecikmeli.' }],
    'Renfe = tren �xirketi. Metro de Madrid/Barcelona = �xehir içi ula�xım.')],
  [SP('sp1', 'Un billete a Barcelona, por favor.', 'Barcelona\'ya bir bilet, lütfen.', 'Bilet al'),
   SP('sp2', '¿Dónde tengo que hacer transbordo?', 'Nerede aktarma yapmalıyım?', 'Aktarma sor'),
   SP('sp3', 'El tren sale del andén 5.', 'Tren 5. perondan kalkıyor.', 'Peron söyle'),
   SP('sp4', '¿Cuándo pasa el próximo autobús?', 'Sonraki otobüs ne zaman geliyor?', 'Otobüs saati sor'),
   SP('sp5', 'Bajo aquí.', 'Burada iniyorum.', 'İnece�xini söyle')],
  [DL('d1', 'En la estación', 'At the Train Station', [
    LN('A', 'm', 'Un billete a Valencia, por favor.', 'Valencia\'ya bir bilet, lütfen.', 'Bilet alma.',
      [BD('a Valencia', 'Valencia\'ya', 'K', 'a + �xehir = ...e/-a.')]),
    LN('B', 'f', '¿Ida o ida y vuelta?', 'Tek yön mü gidi�x-dönü�x mü?', 'Bilet türü sorusu.',
      [BD('ida y vuelta', 'gidi�x-dönü�x', 'K', 'Standart bilet sorusu.')]),
    LN('A', 'm', 'Ida y vuelta, por favor.', 'Gidi�x-dönü�x, lütfen.', 'Cevap.',
      [BD('Ida y vuelta', 'Gidi�x-dönü�x', 'O', 'Bilet türü.')]),
    LN('B', 'f', 'Son ochenta euros. Andén 7, salida a las diez.', 'Seksen euro. 7. peron, kalkı�x saat on.',
      [BD('Andén 7', '7. peron', 'O', 'Andén = peron.'), BD('salida', 'kalkı�x', 'O', 'salir = kalkmak.')])
  ])],
  [LI('li1', 'El AVE a Madrid sale a las catorce treinta del andén 8. El viaje dura cuatro horas.',
    'Madrid AVE\'si saat 14:30\'da 8. perondan kalkıyor. Yolculuk dört saat sürüyor.',
    [Q('¿A dónde va el tren?', ['Valencia', 'Sevilla', 'Madrid', 'Bilbao'], 2, 'Tren nereye gidiyor?'),
     Q('¿De qué andén?', ['5', '7', '8', '10'], 2, 'Hangi perondan?'),
     Q('¿Cuánto dura el viaje?', ['2 h', '3 h', '4 h', '5 h'], 2, 'Yolculuk ne kadar sürer?')])]
);

const L9 = scenario('Hotel & Accommodation',
  mkScenarioWords([
    ['w1', 'el hotel', 'el o-TEL', 'otel'],
    ['w2', 'la recepción', 'la re-sep-THYON', 'resepsiyon'],
    ['w3', 'la habitación', 'la a-bi-ta-THYON', 'oda'],
    ['w4', 'hacer el check-in', 'a-SER el chek-in', 'giri�x yapmak (otel)'],
    ['w5', 'hacer el check-out', 'a-SER el chek-aut', 'çıkı�x yapmak'],
    ['w6', 'la llave', 'la YA-ve', 'anahtar'],
    ['w7', 'la habitación individual', 'la a-bi-ta-THYON in-di-bi-DWAL', 'tek ki�xilik oda'],
    ['w8', 'la habitación doble', 'la a-bi-ta-THYON DO-ble', 'çift ki�xilik oda'],
    ['w9', 'el desayuno', 'el de-sa-YU-no', 'kahvaltı'],
    ['w10', 'el wifi', 'el wi-fi', 'kablosuz internet'],
    ['w11', 'el aire acondicionado', 'el AY-re a-kon-di-thyo-NA-do', 'klima'],
    ['w12', 'la reserva', 'la re-SER-va', 'rezervasyon']
  ]),
  [G('g1', 'Otelde Check-in', 'Hotel Check-in',
    'Tengo una reserva = Rezervasyonum var. A nombre de... = ... adına. ¿El desayuno está incluido? = Kahvaltı dahil mi? Check-out antes de las once.',
    [{ pronoun: 'Rezervasyon', form: 'Tengo una reserva', example: 'Tengo una reserva a nombre de Ali.', tr: 'Ali adına rezervasyonum var.' },
     { pronoun: 'Oda', form: 'Una habitación doble', example: 'Una habitación doble, por favor.', tr: '�!ift ki�xilik oda, lütfen.' },
     { pronoun: 'Kahvaltı', form: '¿Está incluido el desayuno?', example: '¿El desayuno está incluido?', tr: 'Kahvaltı dahil mi?' },
     { pronoun: '�!ıkı�x', form: '¿Hasta qué hora puedo hacer el check-out?', example: '¿Hasta qué hora es el check-out?', tr: 'En geç ne zaman çıkı�x yapmalıyım?' }],
    'İspanya\'da otellerde genelde temizlik ve düzen önemlidir.')],
  [SP('sp1', 'Tengo una reserva.', 'Rezervasyonum var.', 'Check-in yap'),
   SP('sp2', 'Una habitación individual, por favor.', 'Tek ki�xilik oda, lütfen.', 'Oda iste'),
   SP('sp3', '¿Dónde está el desayuno?', 'Kahvaltı nerede?', 'Kahvaltı sor'),
   SP('sp4', '¿Puedo hacer el check-out?', '�!ıkı�x yapabilir miyim?', 'Check-out yap'),
   SP('sp5', 'La habitación es muy bonita.', 'Oda çok güzel.', 'Odayı öv')],
  [DL('d1', 'Check-in en el hotel', 'Hotel Check-in', [
    LN('A', 'f', '¡Buenas noches! Bienvenido al hotel.', 'İyi ak�xamlar! Otele ho�x geldiniz.', 'Resepsiyon kar�xılama.',
      [BD('Bienvenido', 'Ho�x geldiniz', 'greeting', 'Otel kar�xılama.')]),
    LN('B', 'm', 'Buenas noches. Tengo una reserva a nombre de Ali.', 'İyi ak�xamlar. Ali adına rezervasyonum var.',
      [BD('a nombre de', 'adına rezervasyon', 'O', 'a nombre de + isim.')]),
    LN('A', 'f', 'Sí, una habitación individual por dos noches. El desayuno está incluido.', 'Evet, iki gece tek ki�xilik oda. Kahvaltı dahil.',
      [BD('incluido', 'dahil', 'adj', 'Fiyata dahil.')]),
    LN('B', 'm', 'Perfecto. ¿Hay wifi?', 'Mükemmel. WiFi var mı?', '¿Hay...? = var mı.',
      [BD('¿Hay', 'Var mı', 'question', 'Hay = var (genel).')]),
    LN('A', 'f', 'Sí, la contraseña está en el papel. Aquí tiene su llave. Habitación 305.', 'Evet, �xifre ka�xıtta. Anahtarınız burada. Oda 305.',
      [BD('llave', 'anahtar', 'O', 'Di�xil �  la.')])
  ])],
  [LI('li1', 'Ali ha reservado una habitación individual por tres noches. El desayuno es de siete a diez. El check-out es antes de las once.',
    'Ali üç gece tek ki�xilik oda ayırttı. Kahvaltı yedi ile on arası. �!ıkı�x on bire kadar.',
    [Q('¿Cuántas noches?', ['1', '2', '3', '4'], 2, 'Kaç gece?'),
     Q('¿Cuándo es el desayuno?', ['6�9', '7�10', '8�11', '9�12'], 1, 'Kahvaltı ne zaman?'),
     Q('¿Hasta qué hora el check-out?', ['10:00', '11:00', '12:00', '13:00'], 1, 'En geç ne zaman çıkı�x?')])]
);

const L10 = scenario('Work & Business',
  mkScenarioWords([
    ['w1', 'el trabajo', 'el tra-BA-ho', 'i�x / çalı�xma'],
    ['w2', 'la profesión', 'la pro-fe-SYON', 'meslek'],
    ['w3', 'el compañero / la compañera', 'el kom-pa-NYE-ro / la kom-pa-NYE-ra', 'i�x arkada�xı'],
    ['w4', 'el jefe / la jefa', 'el HE-fe / la HE-fa', 'patron'],
    ['w5', 'la oficina', 'la o-fi-THI-na', 'ofis'],
    ['w6', 'la reunión', 'la re-u-NYON', 'toplantı'],
    ['w7', 'el contrato', 'el kon-TRAK-to', 'sözle�xme'],
    ['w8', 'el sueldo', 'el SWEL-do', 'maa�x'],
    ['w9', 'la solicitud de empleo', 'la so-li-thi-TUD de em-PLE-o', 'i�x ba�xvurusu'],
    ['w10', 'la entrevista de trabajo', 'la en-tre-VIS-ta de tra-BA-ho', 'i�x görü�xmesi'],
    ['w11', 'a tiempo completo / a tiempo parcial', 'a TYEM-po kom-PLE-to / par-THYAL', 'tam zamanlı / yarı zamanlı'],
    ['w12', 'la salida del trabajo', 'la sa-LI-da del tra-BA-ho', 'i�x çıkı�xı / mesai sonu']
  ]),
  [G('g1', 'İ�x Hayatında Temel İfadeler', 'Basic Work Phrases',
    '¿A qué se dedica? = Ne i�x yapıyorsunuz? Trabajo como... = ... olarak çalı�xıyorum. Tengo una reunión = Toplantım var.',
    [{ pronoun: 'Meslek sorma', form: '¿Cuál es su profesión?', example: '¿A qué se dedica usted?', tr: 'Mesle�xiniz ne?' },
     { pronoun: 'Cevap', form: 'Soy... / Trabajo como...', example: 'Trabajo como ingeniero.', tr: 'Mühendis olarak çalı�xıyorum.' },
     { pronoun: 'Toplantı', form: 'Tengo una reunión', example: 'A las diez tengo una reunión.', tr: 'Saat onda toplantım var.' },
     { pronoun: 'Mesai sonu', form: '¡Que tenga buena tarde!', example: '¡Hasta mañana!', tr: 'İyi ak�xamlar! (i�x çıkı�xı)' }],
    'İspanya\'da i�x saatleri genelde 9�18 arası. La puntualidad (dakiklik) çok önemli!')],
  [SP('sp1', '¿A qué se dedica usted?', 'Mesle�xiniz ne?', 'Meslek sor'),
   SP('sp2', 'Trabajo como programador.', 'Yazılımcı olarak çalı�xıyorum.', 'Mesle�xini söyle'),
   SP('sp3', 'Tengo una reunión a las tres.', 'Saat üçte toplantım var.', 'Toplantı belirt'),
   SP('sp4', '¡Hasta mañana!', 'Yarın görü�xürüz! (i�x çıkı�xı)', 'Mesai sonu de'),
   SP('sp5', '¿Podemos concertar una cita?', 'Randevu ayarlayabilir miyiz?', 'Randevu öner')],
  [DL('d1', 'En la oficina', 'At the Office', [
    LN('A', 'm', '¡Buenos días! ¿Qué tal el fin de semana?', 'Günaydın! Hafta sonunuz nasıldı?', 'İ�x yerinde selam.',
      [BD('¿Qué tal', 'Nasıldı', 'question', 'Hal hatır sorusu.')]),
    LN('B', 'f', 'Muy bien, gracias. ¿Y usted?', 'Oldukça iyi, te�xekkürler. Ya siz?', 'Muy bien = oldukça iyi.',
      [BD('Muy bien', 'Oldukça iyi', 'adj', 'Olumlu kısa cevap.')]),
    LN('A', 'm', 'Bien también. ¿Tiene reuniones hoy?', 'Ben de iyiyim. Bugün toplantılarınız var mı?',
      [BD('reuniones', 'toplantılar', 'O', 'Di�xil ço�xul �  las.')]),
    LN('B', 'f', 'Sí, a las once. Después tengo tiempo.', 'Evet, saat on birde. Sonra vaktim var.',
      [BD('Después', 'Sonra', 'K', 'Zaman sırası.')])
  ])],
  [LI('li1', 'Ali trabaja como ingeniero en Madrid. Empieza a las ocho y tiene una reunión a las diez. Termina a las cinco de la tarde.',
    'Ali Madrid\'de mühendis olarak çalı�xıyor. Saat sekizde ba�xlıyor ve saat onda toplantısı var. Mesai saat be�xte bitiyor.',
    [Q('¿Cuál es la profesión de Ali?', ['profesor', 'médico', 'ingeniero', 'cocinero'], 2, 'Ali\'nin mesle�xi ne?'),
     Q('¿Cuándo empieza el trabajo?', ['7:00', '8:00', '9:00', '10:00'], 1, 'İ�x ne zaman ba�xlıyor?'),
     Q('¿Cuándo termina?', ['16:00', '17:00', '18:00', '19:00'], 1, 'Mesai ne zaman bitiyor?')])]
);

const L11 = scenario('Health',
  mkScenarioWords([
    ['w1', 'el médico / la médica', 'el ME-di-ko / la ME-di-ka', 'doktor'],
    ['w2', 'el hospital', 'el os-pi-TAL', 'hastane'],
    ['w3', 'la farmacia', 'la far-MA-thya', 'eczane'],
    ['w4', 'enfermo', 'en-FER-mo', 'hasta'],
    ['w5', 'el dolor', 'el do-LOR', 'a�xrı'],
    ['w6', 'la fiebre', 'la FYE-bre', 'ate�x'],
    ['w7', 'la tos', 'la tos', 'öksürük'],
    ['w8', 'el resfriado', 'el res-fri-A-do', 'so�xuk algınlı�xı'],
    ['w9', 'el medicamento', 'el me-di-ka-MEN-to', 'ilaç'],
    ['w10', 'la cita', 'la THI-ta', 'randevu'],
    ['w11', 'el seguro', 'el se-GU-ro', 'sigorta'],
    ['w12', '¡Que te mejores!', 'ke te me-HO-res', 'Geçmi�x olsun!']
  ]),
  [G('g1', 'Doktorda', 'At the Doctor',
    'Me duele... = ... a�xrıyor. Estoy enfermo = hastayım. Necesito una cita = randevuya ihtiyacım var. ¡Que te mejores! = Geçmi�x olsun!',
    [{ pronoun: 'A�xrı', form: 'Me duele...', example: 'Me duele la cabeza.', tr: 'Ba�xım a�xrıyor.' },
     { pronoun: 'Hastalık', form: 'Estoy enfermo / tengo fiebre', example: 'Tengo fiebre.', tr: 'Ate�xim var.' },
     { pronoun: 'Randevu', form: 'Necesito una cita', example: '¿Puedo pedir una cita?', tr: 'Randevu alabilir miyim?' },
     { pronoun: 'İlaç', form: 'receta / medicamento', example: '¿Necesito receta?', tr: 'Reçete gerekli mi?' }],
    'İspanya\'da el seguro médico (sa�xlık sigortası) zorunludur.')],
  [SP('sp1', 'Me duele la cabeza.', 'Ba�xım a�xrıyor.', 'A�xrı belirt'),
   SP('sp2', 'Estoy enfermo.', 'Hastayım.', 'Hastalık söyle'),
   SP('sp3', 'Necesito una cita.', 'Randevuya ihtiyacım var.', 'Randevu iste'),
   SP('sp4', 'Tengo fiebre.', 'Ate�xim var.', 'Belirti söyle'),
   SP('sp5', '¡Que te mejores!', 'Geçmi�x olsun!', 'Tebrik/iyi dilek')],
  [DL('d1', 'En el médico', 'At the Doctor', [
    LN('A', 'f', '¿Qué le pasa?', 'Sizin �xikayetiniz ne?', 'Doktor sorusu.',
      [BD('¿Qué le pasa?', 'Ne �xikayetiniz var', 'question', 'Resmi doktor sorusu.')]),
    LN('B', 'm', 'Me duele la garganta y tengo fiebre.', 'Bo�xazım a�xrıyor ve ate�xim var.',
      [BD('Me duele la garganta', 'Bo�xazım a�xrıyor', 'V', 'doler + isim.')]),
    LN('A', 'f', '¿Desde cuándo?', 'Ne zamandan beri?', 'Desde cuándo = ne zamandan beri.',
      [BD('¿Desde cuándo?', 'Ne zamandan beri', 'question', 'Süre sorusu.')]),
    LN('B', 'm', 'Desde ayer por la noche.', 'Dün ak�xamdan beri.',
      [BD('Desde ayer por la noche', 'Dün ak�xamdan beri', 'K', 'desde + zaman.')]),
    LN('A', 'f', 'Le receto medicamentos. ¡Que se mejore!', 'Size ilaç yazıyorum. Geçmi�x olsun!',
      [BD('Que se mejore', 'Geçmi�x olsun', 'phrase', 'Standart iyi dilek (resmi).')])
  ])],
  [LI('li1', 'Ali está enfermo. Tiene fiebre y tos. El médico dice: Tres días de reposo y beber mucha agua.',
    'Ali hasta. Ate�xi ve öksürü�xü var. Doktor diyor: �Sç gün dinlen ve bol su iç.',
    [Q('¿Qué tiene Ali?', ['dolor de cabeza', 'fiebre y tos', 'dolor de estómago', 'alergia'], 1, 'Ali\'nin �xikayeti ne?'),
     Q('¿Qué recomienda el médico?', ['deporte', 'reposo y beber', 'trabajar', 'viajar'], 1, 'Doktor ne öneriyor?'),
     Q('¿Cuántos días de reposo?', ['1', '2', '3', '5'], 2, 'Kaç gün dinlenme?')])]
);

const L12 = scenario('Phone & Communication',
  mkScenarioWords([
    ['w1', 'llamar', 'ya-MAR', 'telefon etmek / aramak'],
    ['w2', 'el mensaje', 'el men-SA-he', 'mesaj'],
    ['w3', 'el correo electrónico', 'el ko-RRE-o e-lek-TRO-ni-ko', 'e-posta'],
    ['w4', 'el número de teléfono', 'el NU-me-ro de te-LE-fo-no', 'telefon numarası'],
    ['w5', 'Hola, soy...', 'O-la, soy', 'Merhaba, ... ben', { tip: 'Telefonda kendini tanıtma.' }],
    ['w6', '¿Puede devolverme la llamada?', 'PWE-de de-bol-ver-me la ya-MAR-da', 'Beni geri arayabilir misiniz?'],
    ['w7', 'No puedo hablar ahora.', 'no PWE-do a-BLAR a-HO-ra', 'Şu an konu�xamıyorum.'],
    ['w8', 'el buzón de voz', 'el bu-SON de boys', 'sesli mesaj'],
    ['w9', 'escribir', 'es-kri-BIR', 'yazmak'],
    ['w10', 'el contestador', 'el kon-tes-ta-DOR', 'telesekreter'],
    ['w11', 'ocupado', 'o-ku-PA-do', 'me�xgul (hat)'],
    ['w12', 'conectar', 'kon-e-KTAR', 'ba�xlamak (telefon)']
  ]),
  [G('g1', 'Telefonda Konu�xma', 'Phone Conversations',
    'İspanya\'da telefonda: ¿Dígame? = Buyurun? Soy Ali = Ali ben. Hasta luego = Ho�xça kalın. ¿Puede hablar más despacio? = Daha yava�x konu�xabilir misiniz?',
    [{ pronoun: 'Tanıtma', form: 'Soy... / Me llamo...', example: 'Hola, soy Ali.', tr: 'Merhaba, Ali ben.' },
     { pronoun: 'Ba�xlama', form: '¿Puede pasarme con...?', example: '¿Puede pasarme con el señor García?', tr: 'Beni Bay García\'ya ba�xlayabilir misiniz?' },
     { pronoun: 'Me�xgul', form: 'La línea está ocupada', example: 'Está ocupado.', tr: 'Hat me�xgul.' },
     { pronoun: 'Veda', form: 'Hasta luego / Adiós', example: '¡Hasta luego!', tr: 'Ho�xça kalın! (telefon)' }],
    'İspanya telefon numaraları +34 ile ba�xlar.')],
  [SP('sp1', 'Hola, soy Ali.', 'Merhaba, Ali ben.', 'Telefonda tanıt'),
   SP('sp2', '¿Puede hablar más despacio, por favor?', 'Lütfen daha yava�x konu�xabilir misiniz?', 'Yava�x konu�x iste'),
   SP('sp3', 'Llamo más tarde.', 'Sonra geri ararım.', 'Geri arama sözü ver'),
   SP('sp4', '¿Puede repetir, por favor?', 'Lütfen tekrar edebilir misiniz?', 'Tekrar iste'),
   SP('sp5', '¡Hasta luego!', 'Ho�xça kalın! (telefon)', 'Telefonda vedala�x')],
  [DL('d1', 'Llamada telefónica', 'Phone Call', [
    LN('A', 'f', 'Buenos días, empresa García. ¿En qué puedo ayudarle?', 'İyi günler, García Şirketi. Size nasıl yardımcı olabilirim?', 'Resmi telefon kar�xılama.',
      [BD('¿En qué puedo ayudarle?', 'Ne yapabilirim', 'question', 'Resmi telefon kalıbı.')]),
    LN('B', 'm', 'Buenos días. Soy Ali. ¿Puedo hablar con el señor López?', 'İyi günler. Ali ben. Bay López ile konu�xabilir miyim?',
      [BD('Soy Ali', 'Ali ben', 'phrase', 'Telefonda tanıtma.')]),
    LN('A', 'f', 'Un momento, por favor. Le paso.', 'Bir dakika, lütfen. Sizi ba�xlıyorum.',
      [BD('Un momento', 'Bir dakika', 'courtesy', 'Bekletme ifadesi.')]),
    LN('B', 'm', 'Gracias. ¡Hasta luego!', 'Te�xekkürler. Ho�xça kalın!',
      [BD('Hasta luego', 'Ho�xça kalın', 'farewell', 'Telefon vedası.')])
  ])],
  [LI('li1', 'Ali llama a la consulta del médico. El horario de consulta es de ocho a doce. Para una cita, pulse el uno.',
    'Ali doktor muayenehanesini arıyor. Muayene saatleri sekiz ile on iki arası. Randevu için bire basın.',
    [Q('¿A quién llama Ali?', ['farmacia', 'consulta médica', 'hotel', 'estación'], 1, 'Ali kimi arıyor?'),
     Q('¿Cuándo es la consulta?', ['7�11', '8�12', '9�13', '10�14'], 1, 'Muayene saatleri ne?'),
     Q('¿Qué tecla para cita?', ['0', '1', '2', '9'], 1, 'Randevu için hangi tu�x?')])]
);

const L13 = scenario('Social Life',
  mkScenarioWords([
    ['w1', 'el amigo / la amiga', 'el a-MI-go / la a-MI-ga', 'erkek/kadın arkada�x'],
    ['w2', 'la fiesta', 'la FYES-ta', 'parti'],
    ['w3', 'invitar', 'in-bi-TAR', 'davet etmek'],
    ['w4', 'la invitación', 'la in-bi-ta-THYON', 'davet'],
    ['w5', 'celebrar', 'the-le-BRAR', 'kutlamak'],
    ['w6', 'el cumpleaños', 'el kum-ple-a-NYOS', 'do�xum günü'],
    ['w7', '¡Feliz cumpleaños!', 'fe-LIS kum-ple-a-NYOS', 'İyi ki do�xdun!'],
    ['w8', '¡Salud!', 'sa-LUD', 'Şerefe!'],
    ['w9', 'quedar', 'ke-DAR', 'bulu�xmak'],
    ['w10', 'la cita', 'la THI-ta', 'bulu�xma / randevu'],
    ['w11', 'tarde', 'TAR-de', 'geç'],
    ['w12', 'puntual', 'pun-TWAL', 'dakik']
  ]),
  [G('g1', 'Sosyal Davetler', 'Social Invitations',
    '¿Quieres...? = ... ister misin? (samimi). ¿Le apetece...? = İster misiniz? (resmi). ¡Feliz cumpleaños! = Do�xum günün kutlu olsun! ¡Salud! = Şerefe!',
    [{ pronoun: 'Davet', form: '¿Quieres...? / ¿Te apetece...?', example: '¿Te apetece ir al cine?', tr: 'Sinemaya gitmek ister misin?' },
     { pronoun: 'Kabul', form: '¡Claro! / ¡Me encanta!', example: '¡Sí, claro!', tr: 'Evet, memnuniyetle!' },
     { pronoun: 'Red', form: 'Lo siento, no puedo.', example: 'Lo siento, no tengo tiempo.', tr: 'Maalesef vaktim yok.' },
     { pronoun: 'Kutlama', form: '¡Feliz cumpleaños! / ¡Salud!', example: '¡Feliz cumpleaños!', tr: 'Do�xum günün kutlu olsun!' }],
    'İspanya\'da ser puntual (dakik) olmak sosyal görgü kuralıdır.')],
  [SP('sp1', '¿Tienes tiempo el sábado?', 'Cumartesi müsait misin?', 'Bulu�xma teklif et'),
   SP('sp2', '¡Claro! ¿Dónde quedamos?', 'Evet, memnuniyetle! Nerede bulu�xalım?', 'Kabul et ve yer sor'),
   SP('sp3', '¡Feliz cumpleaños!', 'Do�xum günün kutlu olsun!', 'Do�xum günü kutla'),
   SP('sp4', '¡Salud!', 'Şerefe!', 'Kadeh kaldır'),
   SP('sp5', 'Lo siento, no puedo.', 'Maalesef gelemem.', 'Daveti reddet')],
  [DL('d1', 'Invitación', 'Invitation', [
    LN('A', 'f', '¡Hola Ali! El sábado doy una fiesta. ¿Vienes?', 'Hey Ali! Cumartesi parti veriyorum. Gelir misin?', 'Samimi davet.',
      [BD('doy una fiesta', 'parti veriyorum', 'V', 'dar una fiesta = parti vermek.')]),
    LN('B', 'm', '¡Claro! ¿Llevo algo?', 'Evet, memnuniyetle! Bir �xey getireyim mi?', 'llevar = getirmek.',
      [BD('¿Llevo algo?', 'bir �xey getireyim mi', 'V', 'Partiye katkı sorusu.')]),
    LN('A', 'f', 'No, gracias. ¡Solo tú! A las ocho en mi casa.', 'Hayır, te�xekkürler. Sadece sen! Saat sekizde bende.',
      [BD('en mi casa', 'evimde', 'K', 'en + isim = ...de/-da.')]),
    LN('B', 'm', '¡Genial! ¡Hasta el sábado!', 'Harika! Cumartesiye kadar!',
      [BD('Hasta el sábado', 'Cumartesiye kadar', 'farewell', 'Hasta + gün.')])
  ])],
  [LI('li1', 'Laura celebra su cumpleaños el viernes. La fiesta empieza a las diecinueve. Ali trae una tarta.',
    'Laura cuma günü do�xum gününü kutluyor. Parti saat 19:00\'da ba�xlıyor. Ali bir kek getiriyor.',
    [Q('¿Qué celebra Laura?', ['boda', 'cumpleaños', 'graduación', 'Año Nuevo'], 1, 'Laura ne kutluyor?'),
     Q('¿Cuándo empieza la fiesta?', ['18:00', '19:00', '20:00', '21:00'], 1, 'Parti ne zaman ba�xlıyor?'),
     Q('¿Qué trae Ali?', ['vino', 'flores', 'tarta', 'pan'], 2, 'Ali ne getiriyor?')])]
);

const L14 = scenario('Home & Living',
  mkScenarioWords([
    ['w1', 'el piso', 'el PI-so', 'daire / konut'],
    ['w2', 'la casa', 'la KA-sa', 'ev'],
    ['w3', 'la habitación', 'la a-bi-ta-THYON', 'oda'],
    ['w4', 'la cocina', 'la ko-THI-na', 'mutfak'],
    ['w5', 'el baño', 'el BAN-yo', 'banyo'],
    ['w6', 'el balcón', 'el bal-KON', 'balkon'],
    ['w7', 'el alquiler', 'el al-KI-ler', 'kira'],
    ['w8', 'el casero / la casera', 'el ka-SER-o / la ka-SER-a', 'ev sahibi'],
    ['w9', 'mudarse', 'mu-DAR-se', 'ta�xınmak'],
    ['w10', 'los vecinos', 'los be-THI-nos', 'kom�xular'],
    ['w11', 'la electricidad', 'la e-lek-thi-thi-DAD', 'elektrik'],
    ['w12', 'la calefacción', 'la ka-le-fa-THYON', 'ısıtma']
  ]),
  [G('g1', 'Ev ve Konut', 'Home and Housing',
    'Vivo en... = ...de ya�xıyorum. El alquiler es de... = Kira ... tutar. Gastos incluidos = ek masraflar dahil.',
    [{ pronoun: 'Adres', form: 'Vivo en... / Mi dirección es...', example: 'Vivo en Madrid.', tr: 'Madrid\'de ya�xıyorum.' },
     { pronoun: 'Kira', form: 'El alquiler es de...', example: 'El alquiler es de ochocientos euros.', tr: 'Kira sekiz yüz euro.' },
     { pronoun: 'Ta�xınma', form: 'Me mudo', example: 'El mes que viene me mudo.', tr: 'Gelecek ay ta�xınıyorum.' },
     { pronoun: 'Kom�xu', form: 'los vecinos', example: 'Mis vecinos son majos.', tr: 'Kom�xularım nazik.' }],
    'İspanya\'da ço�xu ki�xi kiralık oturur � piso de alquiler.')],
  [SP('sp1', 'Vivo en un piso.', 'Bir dairede ya�xıyorum.', 'Konut tipini söyle'),
   SP('sp2', 'El piso tiene tres habitaciones.', 'Dairenin üç odası var.', 'Oda sayısı söyle'),
   SP('sp3', 'El alquiler es de seiscientos euros.', 'Kira altı yüz euro.', 'Kira söyle'),
   SP('sp4', 'Me mudo el mes que viene.', 'Gelecek ay ta�xınıyorum.', 'Ta�xınma haberi ver'),
   SP('sp5', 'Los vecinos son muy majos.', 'Kom�xular çok nazik.', 'Kom�xulardan bahset')],
  [DL('d1', 'Buscar piso', 'Apartment Hunting', [
    LN('A', 'm', 'Buenas tardes. Busco un piso.', 'İyi günler. Daire arıyorum.', 'Ev arama.',
      [BD('Busco', 'Arıyorum', 'V', 'buscar + isim.')]),
    LN('B', 'f', '¿Cuántas habitaciones necesita?', 'Kaç oda lazım?', 'Ev sahibi/emlak sorusu.',
      [BD('¿Cuántas habitaciones', 'Kaç oda', 'question', 'Cuántas = kaç tane.')]),
    LN('A', 'm', 'Dos habitaciones. ¿Cuánto es el alquiler?', 'İki oda. Kira ne kadar?', 'Fiyat sorusu.',
      [BD('el alquiler', 'kira', 'O', 'Eril �  el.')]),
    LN('B', 'f', 'Setecientos euros con gastos incluidos.', 'Yedi yüz euro masraflar dahil.',
      [BD('gastos incluidos', 'masraflar dahil', 'adj', 'Ek masraflar dahil.')])
  ])],
  [LI('li1', 'Ali vive en un piso de dos habitaciones en Barcelona. El alquiler es de novecientos euros. La cocina es moderna y el balcón es grande.',
    'Ali Barcelona\'da iki odalı bir dairede oturuyor. Kira dokuz yüz euro. Mutfak modern ve balkon büyük.',
    [Q('¿Dónde vive Ali?', ['Madrid', 'Valencia', 'Barcelona', 'Sevilla'], 2, 'Ali nerede oturuyor?'),
     Q('¿Cuántas habitaciones?', ['1', '2', '3', '4'], 1, 'Kaç oda?'),
     Q('¿Cuánto es el alquiler?', ['700 ��', '800 ��', '900 ��', '1000 ��'], 2, 'Kira ne kadar?')])]
);

const L15 = scenario('Education & School',
  mkScenarioWords([
    ['w1', 'el colegio', 'el ko-LE-hyo', 'okul'],
    ['w2', 'la universidad', 'la u-ni-ver-si-DAD', 'üniversite'],
    ['w3', 'el estudiante / la estudiante', 'el es-tu-DYAN-te', 'üniversite ö�xrencisi'],
    ['w4', 'el profesor / la profesora', 'el pro-fe-SOR / la pro-fe-SO-ra', 'ö�xretmen'],
    ['w5', 'el curso', 'el KUR-so', 'kurs'],
    ['w6', 'el examen', 'el ek-SA-men', 'sınav'],
    ['w7', 'aprender', 'a-pren-DER', 'ö�xrenmek'],
    ['w8', 'estudiar', 'es-tu-DYAR', 'okumak (üniversite)'],
    ['w9', 'los deberes', 'los de-BE-res', 'ev ödevi'],
    ['w10', 'la clase', 'la KLA-se', 'sınıf'],
    ['w11', 'el horario', 'el o-ra-RYO', 'ders programı'],
    ['w12', 'aprobar', 'a-pro-BAR', 'geçmek (sınav)']
  ]),
  [G('g1', 'E�xitim Hayatı', 'Education',
    'Estudio ... en la universidad = �Sniversitede ... okuyorum. Aprendo español = İspanyolca ö�xreniyorum. El examen es el... = Sınav ... günü.',
    [{ pronoun: 'Okumak', form: 'Estudio...', example: 'Estudio medicina.', tr: 'Tıp okuyorum.' },
     { pronoun: '��xrenmek', form: 'Aprendo...', example: 'Aprendo español.', tr: 'İspanyolca ö�xreniyorum.' },
     { pronoun: 'Sınav', form: 'Tengo un examen', example: 'La semana que viene tengo un examen.', tr: 'Gelecek hafta sınavım var.' },
     { pronoun: 'Ba�xarı', form: 'He aprobado', example: 'He aprobado el examen.', tr: 'Sınavı geçtim.' }],
    'İspanya\'da devlet üniversiteleri uygun fiyatlı � kaliteli e�xitim.')],
  [SP('sp1', 'Aprendo español.', 'İspanyolca ö�xreniyorum.', 'Ne ö�xrendi�xini söyle'),
   SP('sp2', 'Estudio en la universidad.', '�Sniversitede okuyorum.', 'E�xitim durumunu söyle'),
   SP('sp3', 'La semana que viene tengo un examen.', 'Gelecek hafta sınavım var.', 'Sınav haberi ver'),
   SP('sp4', 'El curso empieza a las nueve.', 'Kurs saat dokuzda ba�xlıyor.', 'Kurs saati söyle'),
   SP('sp5', '¡He aprobado el examen!', 'Sınavı geçtim!', 'Ba�xarı payla�x')],
  [DL('d1', 'En la universidad', 'At University', [
    LN('A', 'f', '¿Qué estudias?', 'Ne okuyorsun?', 'Samimi soru � tú formu.',
      [BD('¿Qué estudias?', 'Ne okuyorsun', 'question', 'tú ile samimi.')]),
    LN('B', 'm', 'Estudio informática. ¿Y tú?', 'Bilgisayar okuyorum. Ya sen?',
      [BD('informática', 'bilgisayar bilimi', 'O', 'Di�xil �  la informática.')]),
    LN('A', 'f', 'Estudio medicina. ¡Difícil pero interesante!', 'Tıp okuyorum. Zor ama ilginç!',
      [BD('Difícil pero interesante', 'Zor ama ilginç', 'adj', 'Pero = ama.')]),
    LN('B', 'm', '¡Mucha suerte en el examen!', 'Sınavda ba�xarılar!', 'Suerte = �xans / ba�xarı.',
      [BD('Mucha suerte', 'Ba�xarılar', 'phrase', 'Sınav öncesi iyi dilek.')])
  ])],
  [LI('li1', 'Ali asiste a un curso de español. El curso es los lunes y miércoles de seis a ocho. El mes que viene tiene un examen.',
    'Ali bir İspanyolca kursuna gidiyor. Kurs pazartesi ve çar�xamba 18-20 arası. Gelecek ay sınavı var.',
    [Q('¿Qué idioma aprende Ali?', ['inglés', 'francés', 'español', 'turco'], 2, 'Ali hangi dili ö�xreniyor?'),
     Q('¿Qué días?', ['Lu+Ma', 'Lu+Mi', 'Ma+Ju', 'Mi+Vi'], 1, 'Hangi günler?'),
     Q('¿Cuándo es el examen?', ['Esta semana', 'La semana que viene', 'El mes que viene', 'El año que viene'], 2, 'Sınav ne zaman?')])]
);

const L16 = scenario('Countries & Nationalities',
  mkScenarioWords([
    ['w1', 'Alemania', 'a-le-MAN-ya', 'Almanya'],
    ['w2', 'Turquía', 'tur-KEE-a', 'Türkiye'],
    ['w3', 'Austria', 'AUS-tria', 'Avusturya'],
    ['w4', 'Suiza', 'SWI-sa', 'İsviçre'],
    ['w5', 'alemán', 'a-le-MAN', 'Alman'],
    ['w6', 'turco', 'TUR-ko', 'Türk'],
    ['w7', '¿De dónde es usted?', 'de DON-de es us-TED', 'Nerelisiniz?'],
    ['w8', 'Soy de...', 'soy de', '...den geliyorum'],
    ['w9', 'Europa', 'e-u-RO-pa', 'Avrupa'],
    ['w10', 'el idioma', 'el i-DYO-ma', 'dil'],
    ['w11', 'inglés', 'in-GLES', 'İngilizce'],
    ['w12', 'la capital', 'la ka-pi-TAL', 'ba�xkent']
  ]),
  [G('g1', '�Slkeler ve Milliyetler', 'Countries and Nationalities',
    '¿De dónde es usted? = Nerelisiniz? Soy de Turquía = Türkiye\'den geliyorum. Milliyet sıfatları küçük harfle: alemán, turco. �Slkeler büyük harfle: España.',
    [{ pronoun: 'Soru', form: '¿De dónde es usted?', example: '¿De dónde es usted?', tr: 'Nerelisiniz?' },
     { pronoun: 'Cevap', form: 'Soy de...', example: 'Soy de Turquía.', tr: 'Türkiye\'den geliyorum.' },
     { pronoun: 'Milliyet', form: 'Soy...', example: 'Soy turco.', tr: 'Türküm.' },
     { pronoun: 'Dil', form: 'Hablo...', example: 'Hablo turco y español.', tr: 'Türkçe ve İspanyolca konu�xuyorum.' }],
    'de + ülke: de Turquía, de España. Soy + milliyet: soy turco/a.')],
  [SP('sp1', '¿De dónde es usted?', 'Nerelisiniz?', 'Memleket sor'),
   SP('sp2', 'Soy de Turquía.', 'Türkiye\'den geliyorum.', 'Memleketini söyle'),
   SP('sp3', 'Soy turco.', 'Türküm.', 'Milliyetini söyle'),
   SP('sp4', 'Hablo turco y español.', 'Türkçe ve İspanyolca konu�xuyorum.', 'Dillerini söyle'),
   SP('sp5', 'La capital de Turquía es Ankara.', 'Türkiye\'nin ba�xkenti Ankara.', 'Ba�xkent söyle')],
  [DL('d1', 'Origen', 'Origin', [
    LN('A', 'f', '¿De dónde es usted?', 'Nerelisiniz?', 'Resmi memleket sorusu.',
      [BD('¿De dónde es usted?', 'Nerelisiniz', 'question', 'De dónde = nereden.')]),
    LN('B', 'm', 'Soy de Turquía, de Estambul.', 'Türkiye\'den, İstanbul\'dan geliyorum.',
      [BD('de Turquía', 'Türkiye\'den', 'K', 'de + ülke.')]),
    LN('A', 'f', '¡Ah, qué bien! ¿Ya habla español?', 'Ah, güzel! Zaten İspanyolca konu�xuyor musunuz?',
      [BD('ya', 'zaten / hâlihazırda', 'K', 'ya = already/zaten.')]),
    LN('B', 'm', 'Un poco. Todavía estoy aprendiendo.', 'Biraz. Hâlâ ö�xreniyorum.',
      [BD('Un poco', 'Biraz', 'K', 'Miktar ifadesi.'), BD('todavía', 'hâlâ', 'K', 'Devam eden eylem.')])
  ])],
  [LI('li1', 'Ali es de Turquía. Ahora vive en Madrid. Habla turco, español y un poco de inglés.',
    'Ali Türkiye\'den geliyor. Şimdi Madrid\'de ya�xıyor. Türkçe, İspanyolca ve biraz İngilizce konu�xuyor.',
    [Q('¿De dónde es Ali?', ['Alemania', 'Austria', 'Turquía', 'Suiza'], 2, 'Ali nereli?'),
     Q('¿Dónde vive ahora?', ['Estambul', 'Ankara', 'Madrid', 'Barcelona'], 2, 'Şimdi nerede ya�xıyor?'),
     Q('¿Cuántos idiomas?', ['1', '2', '3', '4'], 2, 'Kaç dil konu�xuyor?')])]
);

const L17 = scenario('Emotions & Feelings',
  mkScenarioWords([
    ['w1', 'feliz', 'fe-LIS', 'mutlu'],
    ['w2', 'triste', 'TRIS-te', 'üzgün'],
    ['w3', 'cansado', 'kan-SA-do', 'yorgun'],
    ['w4', 'nervioso', 'ner-BYO-so', 'gergin / sinirli'],
    ['w5', 'emocionado', 'e-mo-thyo-NA-do', 'heyecanlı'],
    ['w6', 'enfadado', 'en-fa-DA-do', 'kızgın'],
    ['w7', 'tener miedo', 'te-ner MYE-do', 'korkmak'],
    ['w8', 'alegrarse', 'a-le-grar-SE', 'sevinmek'],
    ['w9', 'aburrirse', 'a-bu-RIR-se', 'sıkılmak'],
    ['w10', 'orgulloso', 'or-gu-YO-so', 'gururlu'],
    ['w11', 'sorprendido', 'sor-pren-DI-do', '�xa�xırmı�x'],
    ['w12', 'Me siento...', 'me SYEN-to', 'Kendimi ... hissediyorum']
  ]),
  [G('g1', 'Duyguları İfade Etme', 'Expressing Emotions',
    'Estoy cansado = yorgunum. Tengo miedo = korkuyorum. Me alegro = sevindim. Tengo frío/calor = ü�xüyorum/sıcaklanıyorum. Reflexive fiiller: alegrarse, aburrirse.',
    [{ pronoun: 'Olumlu', form: 'Estoy feliz / me alegro', example: 'Me alegro por mañana.', tr: 'Yarına seviniyorum.' },
     { pronoun: 'Olumsuz', form: 'Estoy triste / cansado', example: 'Estoy muy cansado.', tr: '�!ok yorgunum.' },
     { pronoun: 'Korku', form: 'Tengo miedo de...', example: 'Tengo miedo de las arañas.', tr: '�rümceklerden korkuyorum.' },
     { pronoun: 'Sorma', form: '¿Cómo te sientes?', example: '¿Cómo te sientes?', tr: 'Nasıl hissediyorsun?' }],
    'sentirse = hissetmek. Me siento bien = kendimi iyi hissediyorum.')],
  [SP('sp1', 'Estoy feliz.', 'Mutluyum.', 'Duygu ifade et'),
   SP('sp2', 'Estoy cansado.', 'Yorgunum.', 'Yorgunlu�xunu söyle'),
   SP('sp3', '¡Me alegro!', 'Seviniyorum!', 'Sevincini ifade et'),
   SP('sp4', '¿Cómo te sientes?', 'Nasıl hissediyorsun?', 'Duygu sor'),
   SP('sp5', 'Lo siento.', '�Szgünüm.', '�zür dile')],
  [DL('d1', 'Sentimientos', 'Feelings', [
    LN('A', 'f', 'Pareces triste. ¿Qué pasa?', '�Szgün görünüyorsun. Ne oldu?', 'parecer = görünmek.',
      [BD('pareces triste', 'üzgün görünüyorsun', 'V', 'Parecer = dı�x görünü�x.')]),
    LN('B', 'm', 'Estoy un poco cansado. Mucho trabajo.', 'Biraz yorgunum. �!ok i�x.',
      [BD('cansado', 'yorgun', 'adj', 'Estar + sıfat.')]),
    LN('A', 'f', 'Lo entiendo. ¡Descansa un poco!', 'Anlıyorum. Biraz dinlen!', 'Descansar = dinlenmek.',
      [BD('Descansa', 'Dinlen', 'V', 'Imperativo � tú formu.')]),
    LN('B', 'm', 'Gracias. Eso ayuda.', 'Te�xekkürler. Bu yardımcı oluyor.',
      [BD('Eso ayuda', 'Bu yardımcı oluyor', 'V', 'ayudar = yardım etmek.')])
  ])],
  [LI('li1', 'Ali está muy feliz hoy. Ha aprobado el examen. Sus amigos se alegran con él.',
    'Ali bugün çok mutlu. Sınavı geçti. Arkada�xları onunla birlikte seviniyor.',
    [Q('¿Cómo se siente Ali?', ['triste', 'cansado', 'feliz', 'enfadado'], 2, 'Ali nasıl hissediyor?'),
     Q('¿Por qué?', ['nuevo trabajo', 'examen aprobado', 'vacaciones', 'fiesta'], 1, 'Neden?'),
     Q('¿Cómo reaccionan los amigos?', ['están tristes', 'se alegran', 'están enfadados', 'tienen miedo'], 1, 'Arkada�xlar nasıl tepki veriyor?')])]
);

const L18 = scenario('Weather',
  mkScenarioWords([
    ['w1', 'el tiempo', 'el TYEM-po', 'hava'],
    ['w2', 'el sol', 'el sol', 'güne�x'],
    ['w3', 'la lluvia', 'la YU-vya', 'ya�xmur'],
    ['w4', 'la nieve', 'la NYE-ve', 'kar'],
    ['w5', 'el viento', 'el BYEN-to', 'rüzgar'],
    ['w6', 'caluroso', 'ka-lu-RO-so', 'sıcak'],
    ['w7', 'frío', 'FRI-o', 'so�xuk'],
    ['w8', '¿Qué tiempo hace?', 'ke TYEM-po A-se', 'Hava nasıl?'],
    ['w9', 'Está lloviendo.', 'es-TA yo-BYEN-do', 'Ya�xmur ya�xıyor.'],
    ['w10', 'Está nevando.', 'es-TA ne-VAN-do', 'Kar ya�xıyor.'],
    ['w11', 'nublado', 'nu-BLA-do', 'bulutlu'],
    ['w12', 'el paraguas', 'el pa-ra-GWAS', '�xemsiye']
  ]),
  [G('g1', 'Hava Durumu', 'Weather',
    'İspanyolcada hava hacer ile: Hace calor/frío. Está lloviendo = ya�xmur ya�xıyor. Hace sol = güne�x parlıyor. ¿Qué tiempo hace hoy? = Bugün hava nasıl?',
    [{ pronoun: 'Soru', form: '¿Qué tiempo hace?', example: '¿Qué tiempo hace hoy?', tr: 'Bugün hava nasıl?' },
     { pronoun: 'Sıcaklık', form: 'Hace ... grados', example: 'Hace veinte grados.', tr: 'Hava yirmi derece.' },
     { pronoun: 'Ya�xı�x', form: 'Está lloviendo / nevando', example: 'Hoy está lloviendo.', tr: 'Bugün ya�xmur ya�xıyor.' },
     { pronoun: 'Tavsiye', form: '¡Lleva un paraguas!', example: 'Va a llover.', tr: 'Ya�xmur ya�xacak.' }],
    'İspanya\'da güney sıcak, kuzey ya�xı�xlı � �xemsiye ta�xı!')],
  [SP('sp1', '¿Qué tiempo hace hoy?', 'Bugün hava nasıl?', 'Hava sor'),
   SP('sp2', 'Hace calor y hay sol.', 'Hava sıcak ve güne�xli.', 'Hava durumu söyle'),
   SP('sp3', 'Está lloviendo. Necesito un paraguas.', 'Ya�xmur ya�xıyor. Şemsiyeye ihtiyacım var.', 'Ya�xmurdan bahset'),
   SP('sp4', '¡Hace mucho frío!', 'Hava çok so�xuk!', 'So�xuktan bahset'),
   SP('sp5', 'Mañana va a nevar.', 'Yarın kar ya�xacak.', 'Tahmin söyle')],
  [DL('d1', 'Hablar del tiempo', 'Weather Talk', [
    LN('A', 'm', '¿Qué tiempo hace hoy?', 'Bugün hava nasıl?', 'Klasik sohbet açılı�xı.',
      [BD('tiempo', 'hava', 'O', 'El tiempo = hava durumu.')]),
    LN('B', 'f', 'Hace frío y está nublado. Dos grados bajo cero.', 'So�xuk ve bulutlu. Eksi iki derece.',
      [BD('nublado', 'bulutlu', 'adj', 'Hava sıfatı.')]),
    LN('A', 'm', '¡Vaya! Entonces necesito un abrigo.', 'Oh! O zaman sıcak bir monta ihtiyacım var.',
      [BD('un abrigo', 'mont / palto', 'O', 'Eril �  un.')]),
    LN('B', 'f', 'Sí, y quizás una bufanda. Va a hacer viento.', 'Evet, belki bir atkı. Rüzgarlı olacak.',
      [BD('viento', 'rüzgar', 'O', 'Va a hacer = olacak (gelecek).')])
  ])],
  [LI('li1', 'Hoy hace sol y calor, veinte grados. Mañana va a llover. El fin de semana quizás nieva.',
    'Bugün güne�xli ve sıcak, yirmi derece. Yarın ya�xmur ya�xacak. Hafta sonu belki kar ya�xar.',
    [Q('¿Qué tiempo hace hoy?', ['lluvioso', 'soleado y caluroso', 'nieve', 'ventoso'], 1, 'Bugün hava nasıl?'),
     Q('¿Qué pasa mañana?', ['sol', 'lluvia', 'nieve', 'viento'], 1, 'Yarın ne oluyor?'),
     Q('¿Qué pasa el fin de semana?', ['lluvia', 'sol', 'nieve quizás', 'tormenta'], 2, 'Hafta sonu ne oluyor?')])]
);

const L19 = scenario('Entertainment & Hobbies',
  mkScenarioWords([
    ['w1', 'el hobby', 'el HO-bi', 'hobi'],
    ['w2', 'leer', 'le-ER', 'okumak'],
    ['w3', 'escuchar música', 'es-ku-CHAR mu-SI-ka', 'müzik dinlemek'],
    ['w4', 'hacer deporte', 'a-SER de-POR-te', 'spor yapmak'],
    ['w5', 'cocinar', 'ko-thi-NAR', 'yemek yapmak'],
    ['w6', 'viajar', 'bya-HAR', 'seyahat etmek'],
    ['w7', 'la película', 'la pe-LI-ku-la', 'film'],
    ['w8', 'el concierto', 'el kon-THYER-to', 'konser'],
    ['w9', 'el museo', 'el mu-SE-o', 'müze'],
    ['w10', 'jugar', 'hu-GAR', 'oynamak'],
    ['w11', 'hacer senderismo', 'a-SER sen-de-RIS-mo', 'yürüyü�x yapmak / trekking'],
    ['w12', 'hacer fotos', 'a-SER FO-tos', 'foto�xraf çekmek']
  ]),
  [G('g1', 'Hobiler ve Bo�x Zaman', 'Hobbies and Free Time',
    '¿Qué haces en tu tiempo libre? = Bo�x zamanında ne yapıyorsun? Me interesa... = ...ile ilgileniyorum. Me gusta = severek: Me gusta leer = okumayı severim.',
    [{ pronoun: 'Soru', form: '¿Cuáles son tus hobbies?', example: '¿Qué te gusta hacer?', tr: 'Ne yapmaktan ho�xlanırsın?' },
     { pronoun: 'Sevme', form: 'Me gusta...', example: 'Me gusta leer libros.', tr: 'Kitap okumayı severim.' },
     { pronoun: 'İlgi', form: 'Me interesa...', example: 'Me interesa la música.', tr: 'Müzikle ilgileniyorum.' },
     { pronoun: 'Davet', form: '¿Te apetece...?', example: '¿Te apetece ir al cine?', tr: 'Sinemaya gitmek ister misin?' }],
    'El fin de semana = hafta sonu. En el tiempo libre = bo�x zamanında.')],
  [SP('sp1', 'Mi hobby es leer.', 'Hobim okumak.', 'Hobini söyle'),
   SP('sp2', 'Me gusta hacer deporte.', 'Spor yapmayı severim.', 'Spor hakkında konu�x'),
   SP('sp3', '¿Te apetece ir al cine?', 'Sinemaya gitmek ister misin?', 'Etkinlik teklif et'),
   SP('sp4', 'Me interesa la música.', 'Müzikle ilgileniyorum.', 'İlgi alanını söyle'),
   SP('sp5', 'El fin de semana me gusta hacer senderismo.', 'Hafta sonu yürüyü�x yapmayı severim.', 'Hafta sonu planı söyle')],
  [DL('d1', 'Tiempo libre', 'Free Time', [
    LN('A', 'f', '¿Qué haces el fin de semana?', 'Hafta sonu ne yapıyorsun?', 'Bo�x zaman sorusu.',
      [BD('el fin de semana', 'hafta sonu', 'K', 'el + fin de semana.')]),
    LN('B', 'm', 'Voy de senderismo y me gusta leer.', 'Yürüyü�xe gidiyorum ve okumayı severim.',
      [BD('senderismo', 'yürüyü�x', 'O', 'İspanya\'da popüler hobi.')]),
    LN('A', 'f', '¡Qué bien! Voy al cine. ¿Quieres venir?', 'Harika! Ben sinemaya gidiyorum. Benimle gelmek ister misin?',
      [BD('¿Quieres venir?', 'Gelmek ister misin', 'V', 'Davet.')]),
    LN('B', 'm', '¡Claro! ¿Qué película?', 'Evet, memnuniyetle! Hangi film?',
      [BD('¿Qué película?', 'Hangi film', 'question', 'Qué = hangi.')])
  ])],
  [LI('li1', 'El sábado Ali va al museo. Por la noche escucha música y lee un libro. El domingo hace deporte.',
    'Cumartesi Ali müzeye gidiyor. Ak�xam müzik dinliyor ve kitap okuyor. Pazar spor yapıyor.',
    [Q('¿Adónde va Ali el sábado?', ['cine', 'museo', 'concierto', 'parque'], 1, 'Cumartesi Ali nereye gidiyor?'),
     Q('¿Qué hace el sábado por la noche?', ['deporte', 'música y leer', 'cocinar', 'viajar'], 1, 'Cumartesi ak�xamı ne yapıyor?'),
     Q('¿Qué hace el domingo?', ['museo', 'leer', 'deporte', 'cine'], 2, 'Pazar ne yapıyor?')])]
);

const L20 = scenario('Daily Conversation Practice',
  mkScenarioWords([
    ['w1', '¡Buenos días!', 'BWE-nos DEE-as', 'Günaydın / İyi günler!'],
    ['w2', '¿Cómo está usted?', 'KO-mo es-TA us-TED', 'Nasılsınız?'],
    ['w3', 'Estoy bien.', 'es-TOY byen', 'İyiyim.'],
    ['w4', 'Perdón', 'per-DON', 'Pardon / Affedersiniz'],
    ['w5', 'No hay problema', 'no ay pro-BLE-ma', 'Sorun de�xil'],
    ['w6', 'Por supuesto', 'por su-PWES-to', 'Tabii ki'],
    ['w7', '¿Entiende?', 'en-TYEN-de', 'Anlıyor musunuz?'],
    ['w8', 'No entiendo.', 'no en-TYEN-do', 'Anlamıyorum.'],
    ['w9', '¿Puede repetir?', 'PWE-de re-pe-TIR', 'Tekrar edebilir misiniz?'],
    ['w10', 'Despacio, por favor.', 'des-PA-thyo, por fa-VOR', 'Yava�x, lütfen.'],
    ['w11', 'Un momento, por favor.', 'un mo-MEN-to, por fa-VOR', 'Bir dakika, lütfen.'],
    ['w12', '¡Entendido!', 'en-ten-DI-do', 'Tamam! / Anla�xıldı!']
  ]),
  [G('g1', 'Günlük Konu�xma Kalıpları', 'Daily Conversation Patterns',
    'Bu derste ö�xrendi�xin tüm kalıpları birle�xtiriyoruz. Perdón = pardon. No hay problema = sorun de�xil. Despacio, por favor = yava�x, lütfen. Entendido = tamam/anla�xıldı.',
    [{ pronoun: 'Anlama', form: '¿Entiende? / No entiendo', example: 'Perdón, no entiendo.', tr: 'Pardon, anlamıyorum.' },
     { pronoun: 'Tekrar', form: '¿Puede repetir?', example: '¿Puede repetir, por favor?', tr: 'Tekrar edebilir misiniz?' },
     { pronoun: 'Onay', form: 'Entendido / Por supuesto', example: '¡Entendido, gracias!', tr: 'Tamam, te�xekkürler!' },
     { pronoun: 'Rica', form: 'Por favor / Gracias / De nada', example: '¡Gracias! � ¡De nada!', tr: 'Te�xekkürler! � Rica ederim!' }],
    'İspanyolca ö�xrenirken "Despacio, por favor" cümlesini çok kullan � kimse alınmaz!'),
   G('g2', 'Küçük Konu�xma � Small Talk', 'Small Talk',
    'İspanya\'da small talk samimi tutulur. ¿Cómo está? �  Estoy bien, gracias. ¡Qué buen tiempo! = Bugün hava güzel! ¡Buen fin de semana! = İyi hafta sonları!',
    [{ pronoun: 'Hal hatır', form: '¿Cómo está?', example: '¿Cómo está usted?', tr: 'Nasılsınız?' },
     { pronoun: 'Hava', form: '¡Qué buen tiempo!', example: 'Hoy hace buen tiempo.', tr: 'Bugün hava güzel.' },
     { pronoun: 'Hafta sonu', form: '¡Buen fin de semana!', example: '¡Buen fin de semana!', tr: 'İyi hafta sonları!' },
     { pronoun: 'Veda', form: 'Hasta pronto / Cuídate', example: '¡Hasta pronto!', tr: 'Yakında görü�xürüz!' }],
    'Small talk sonrası asıl konuya geç � İspanya\'da da verimlilik önemli.')],
  [SP('sp1', 'Perdón, no entiendo.', 'Pardon, anlamıyorum.', 'Anlamadı�xını söyle'),
   SP('sp2', '¿Puede hablar más despacio, por favor?', 'Lütfen daha yava�x konu�xabilir misiniz?', 'Yava�x konu�x iste'),
   SP('sp3', '¡Entendido, gracias!', 'Tamam, te�xekkürler!', 'Onayla'),
   SP('sp4', '¡Buen fin de semana!', 'İyi hafta sonları!', 'Hafta sonu dile�xi'),
   SP('sp5', 'Encantado de conocerle.', 'Tanı�xtı�xımıza memnun oldum.', 'Resmi tanı�xma')],
  [DL('d1', 'Situación cotidiana', 'Daily Situation', [
    LN('A', 'm', '¡Buenos días! ¿Cómo está usted?', 'Günaydın! Nasılsınız?', 'Resmi günlük selam.',
      [BD('Buenos días', 'Günaydın', 'greeting', 'Standart sabah selamı.')]),
    LN('B', 'f', 'Estoy bien, gracias. ¿Y usted?', 'İyiyim, te�xekkürler. Ya siz?',
      [BD('Estoy bien', 'İyiyim', 'V', 'Standart cevap.')]),
    LN('A', 'm', 'Bien también. Perdón, ¿dónde está el baño?', 'Ben de iyiyim. Pardon, tuvalet nerede?',
      [BD('Perdón', 'Pardon', 'courtesy', 'Yol sormadan önce.')]),
    LN('B', 'f', 'Todo recto, luego a la izquierda.', 'Düz, sonra sola.', 'Kısa yön tarifi.',
      [BD('Todo recto, luego izquierda', 'Düz sonra sol', 'direction', 'Basit tarif.')]),
    LN('A', 'm', '¡Muchas gracias! ¡Adiós!', '�!ok te�xekkürler! Ho�xça kalın!',
      [BD('Muchas gracias', '�!ok te�xekkürler', 'courtesy', 'Nezaket.')])
  ]),
   DL('d2', 'Clase de idiomas', 'Language Course', [
    LN('A', 'f', '¿Entiende?', 'Anlıyor musunuz?', '��xretmen kontrol sorusu.',
      [BD('¿Entiende?', 'Anlıyor musunuz', 'question', 'Resmi form.')]),
    LN('B', 'm', 'Solo un poco. ¿Puede hablar más despacio?', 'Sadece biraz. Daha yava�x konu�xabilir misiniz?',
      [BD('Solo un poco', 'Sadece biraz', 'K', 'Sınırlı anlama.')]),
    LN('A', 'f', '¡Por supuesto! No hay problema.', 'Tabii ki! Sorun de�xil.',
      [BD('No hay problema', 'Sorun de�xil', 'phrase', 'Günlük rahatlatma.')]),
    LN('B', 'm', '¡Gracias! Ahora entiendo.', 'Te�xekkürler! Şimdi anlıyorum.',
      [BD('Ahora entiendo', 'Şimdi anlıyorum', 'V', 'Ahora = �ximdi.')])
  ])],
  [LI('li1', 'Ali aprende español. A veces no entiende todo. Dice: Perdón, ¿puede repetir? Despacio, por favor. Luego entiende.',
    'Ali İspanyolca ö�xreniyor. Bazen her �xeyi anlamıyor. Diyor ki: Pardon, tekrar edebilir misiniz? Yava�x, lütfen. Sonra anlıyor.',
    [Q('¿Qué aprende Ali?', ['inglés', 'español', 'francés', 'turco'], 1, 'Ali ne ö�xreniyor?'),
     Q('¿Qué dice cuando no entiende?', ['Adiós', 'Despacio, por favor', 'Buenos días', 'Salud'], 1, 'Anlamadı�xında ne diyor?'),
     Q('¿Entiende al final?', ['No', 'Sí', 'Quizás', 'Nunca'], 1, 'Sonunda anlıyor mu?')])]
);


// ������ Vocab lessons 21�49 ��������������������������������������������������������������������������
const VOCAB = {
  21: ['Verbos básicos', [
    ['ser', 'ser', 'olmak', { en: '�0l es médico.', tr: 'O doktor.', bd: [BD('es', 'dır', 'V', 'ser fiili')] }],
    ['tener', 'te-NER', 'sahip olmak / var', { en: 'Tengo tiempo.', tr: 'Vaktim var.', bd: [BD('tengo', 'var', 'V', 'tener fiili')] }],
    ['hacer', 'a-SER', 'yapmak', { en: '¿Qué haces?', tr: 'Ne yapıyorsun?', bd: [BD('haces', 'yapıyorsun', 'V', 'hacer fiili')] }],
    ['ir', 'ir', 'gitmek', { en: 'Voy a casa.', tr: 'Eve gidiyorum.', bd: [BD('voy', 'gidiyorum', 'V', 'ir fiili')] }],
    ['venir', 'be-NIR', 'gelmek', { en: '¿Vienes conmigo?', tr: 'Benimle gelir misin?', bd: [BD('vienes', 'gelir misin', 'V', 'venir fiili')] }],
    ['ver', 'ver', 'görmek', { en: 'Te veo.', tr: 'Seni görüyorum.', bd: [BD('veo', 'görüyorum', 'V', 'ver fiili')] }],
    ['saber', 'sa-BER', 'bilmek', { en: 'Lo sé.', tr: 'Biliyorum.', bd: [BD('sé', 'biliyorum', 'V', 'saber � düzensiz')] }],
    ['pensar', 'pen-SAR', 'dü�xünmek', { en: 'Pienso que tienes razón.', tr: 'Sanırım haklısın.', bd: [BD('pienso', 'sanırım', 'V', 'pensar fiili')] }],
    ['querer', 'ke-RER', 'istemek', { en: 'Quiero aprender español.', tr: 'İspanyolca ö�xrenmek istiyorum.', bd: [BD('quiero', 'istiyorum', 'V', 'querer � düzensiz')] }],
    ['deber', 'de-BER', 'zorunda olmak / -meli', { en: 'Debo trabajar.', tr: '�!alı�xmam lazım.', bd: [BD('debo', 'lazım', 'V', 'deber fiili')] }],
    ['poder', 'po-DER', '-ebilmek', { en: 'Puedo nadar.', tr: 'Yüzebilirim.', bd: [BD('puedo', 'ebilirim', 'V', 'poder � düzensiz')] }],
    ['gustar', 'gus-TAR', 'sevmek / ho�xlanmak', { en: 'Me gusta el café.', tr: 'Kahveyi severim.', bd: [BD('gusta', 'sever', 'V', 'gustar � özneye göre çekim')] }],
    ['decir', 'de-THIR', 'söylemek', { en: '¿Qué dices?', tr: 'Ne diyorsun?', bd: [BD('dices', 'diyorsun', 'V', 'decir � düzensiz')] }],
    ['preguntar', 'pre-gun-TAR', 'sormak', { en: '¿Puedo preguntar?', tr: 'Sorabilir miyim?', bd: [BD('preguntar', 'sormak', 'V', 'preguntar fiili')] }],
    ['dar', 'dar', 'vermek', { en: 'Dame el libro, por favor.', tr: 'Lütfen kitabı ver.', bd: [BD('Dame', 'Ver', 'V', 'dar � düzensiz')] }],
    ['tomar', 'to-MAR', 'almak', { en: 'Tomo el autobús.', tr: 'Otobüse biniyorum.', bd: [BD('tomo', 'alıyorum', 'V', 'tomar fiili')] }],
    ['encontrar', 'en-kon-TRAR', 'bulmak / be�xenmek', { en: 'Lo encuentro bien.', tr: 'Bunu iyi buluyorum.', bd: [BD('encuentro', 'buluyorum', 'V', 'encontrar fiili')] }],
    ['quedarse', 'ke-DAR-se', 'kalmak', { en: 'Me quedo en casa.', tr: 'Evde kalıyorum.', bd: [BD('quedo', 'kalıyorum', 'V', 'quedarse fiili')] }],
    ['estar', 'es-TAR', 'bulunmak / olmak (geçici)', { en: 'Estoy cansado.', tr: 'Yorgunum.', bd: [BD('estoy', '...im', 'V', 'estar fiili')] }],
    ['poner', 'po-NER', 'koymak', { en: 'Ponlo en la mesa.', tr: 'Masaya koy.', bd: [BD('Pon', 'Koy', 'V', 'poner � düzensiz')] }],
    ['traer', 'tra-ER', 'getirmek', { en: 'Trae agua, por favor.', tr: 'Lütfen su getir.', bd: [BD('Trae', 'Getir', 'V', 'traer � düzensiz')] }],
    ['ayudar', 'a-yu-DAR', 'yardım etmek', { en: '¿Puedes ayudarme?', tr: 'Bana yardım edebilir misin?', bd: [BD('ayudar', 'yardım etmek', 'V', 'ayudar fiili')] }],
    ['aprender', 'a-pren-DER', 'ö�xrenmek', { en: 'Aprendo español.', tr: 'İspanyolca ö�xreniyorum.', bd: [BD('aprendo', 'ö�xreniyorum', 'V', 'aprender fiili')] }],
    ['trabajar', 'tra-ba-HAR', 'çalı�xmak', { en: 'Trabaja en Madrid.', tr: 'Madrid\'de çalı�xıyor.', bd: [BD('trabaja', 'çalı�xıyor', 'V', 'trabajar fiili')] }]
  ]],
  22: ['Adjetivos', [
    ['grande', 'GRAN-de', 'büyük'],
    ['pequeño', 'pe-KEN-yo', 'küçük'],
    ['bueno', 'BWE-no', 'iyi'],
    ['malo', 'MA-lo', 'kötü'],
    ['nuevo', 'NWE-vo', 'yeni'],
    ['viejo', 'BYE-ho', 'eski / ya�xlı'],
    ['rápido', 'RA-pi-do', 'hızlı'],
    ['lento', 'LEN-to', 'yava�x'],
    ['fácil', 'FA-thil', 'kolay'],
    ['difícil', 'di-FI-thil', 'zor'],
    ['bonito', 'bo-NI-to', 'güzel'],
    ['feo', 'FE-o', 'çirkin'],
    ['alto', 'AL-to', 'yüksek / uzun'],
    ['bajo', 'BA-ho', 'alçak / kısa'],
    ['ligero', 'li-HE-ro', 'hafif'],
    ['limpio', 'LIM-pyo', 'temiz'],
    ['sucio', 'SU-thyo', 'kirli'],
    ['interesante', 'in-te-re-SAN-te', 'ilginç'],
    ['aburrido', 'a-bu-RI-do', 'sıkıcı'],
    ['caro', 'KA-ro', 'pahalı'],
    ['barato', 'ba-RA-to', 'ucuz'],
    ['importante', 'im-por-TAN-te', 'önemli'],
    ['diferente', 'di-fe-REN-te', 'farklı'],
    ['igual', 'i-GWAL', 'aynı'],
    ['correcto', 'ko-REK-to', 'do�xru'],
    ['incorrecto', 'in-ko-REK-to', 'yanlı�x']
  ]],
  23: ['Personas', [
    ['el hombre', 'el OM-bre', 'adam / erkek'],
    ['la mujer', 'la mu-HER', 'kadın'],
    ['el niño', 'el NI-nyo', 'çocuk'],
    ['el padre', 'el PA-dre', 'baba'],
    ['la madre', 'la MA-dre', 'anne'],
    ['el hermano', 'el er-MA-no', 'erkek karde�x'],
    ['la hermana', 'la er-MA-na', 'kız karde�x'],
    ['el amigo', 'el a-MI-go', 'erkek arkada�x'],
    ['la amiga', 'la a-MI-ga', 'kız arkada�x'],
    ['el vecino', 'el be-THI-no', 'kom�xu (erkek)'],
    ['el compañero', 'el kom-pa-NYE-ro', 'i�x arkada�xı (erkek)'],
    ['el jefe', 'el HE-fe', 'patron (erkek)'],
    ['el profesor', 'el pro-fe-SOR', 'ö�xretmen (erkek)'],
    ['el médico', 'el ME-di-ko', 'doktor (erkek)'],
    ['el estudiante', 'el es-tu-DYAN-te', 'ö�xrenci (erkek)'],
    ['la familia', 'la fa-MI-lya', 'aile'],
    ['el marido', 'el ma-RI-do', 'koca'],
    ['la esposa', 'la es-PO-sa', 'e�x (kadın)'],
    ['el hijo', 'el I-ho', 'o�xul'],
    ['la hija', 'la I-ha', 'kız evlat'],
    ['el nieto', 'el NYE-to', 'torun (erkek)'],
    ['los abuelos', 'los a-BWE-los', 'büyükanne/baba'],
    ['el conocido', 'el ko-no-THI-do', 'tanıdık'],
    ['el extranjero', 'el eks-tran-HE-ro', 'yabancı'],
    ['la pareja', 'la pa-RE-ha', 'çift'],
    ['la relación', 'la re-la-THYON', 'ili�xki'],
    ['el invitado', 'el in-bi-TA-do', 'misafir']
  ]],
  24: ['Ciudad', [
    ['la ciudad', 'la thyu-DAD', '�xehir'],
    ['el pueblo', 'el PWEB-lo', 'köy'],
    ['la calle', 'la KA-ye', 'cadde / sokak'],
    ['la plaza', 'la PLA-sa', 'meydan / alan'],
    ['el mercado', 'el mer-KA-do', 'pazar / market'],
    ['la tienda', 'la TYEN-da', 'dükkan'],
    ['el centro comercial', 'el THEN-tro ko-mer-THYAL', 'AVM'],
    ['el banco', 'el BAN-ko', 'banka'],
    ['la oficina de correos', 'la o-fi-THI-na de ko-RRE-os', 'postane'],
    ['el hospital', 'el os-pi-TAL', 'hastane'],
    ['la farmacia', 'la far-MA-thya', 'eczane'],
    ['el colegio', 'el ko-LE-hyo', 'okul'],
    ['la universidad', 'la u-ni-ver-si-DAD', 'üniversite'],
    ['el parque', 'el PAR-ke', 'park'],
    ['la estación de tren', 'la es-ta-THYON de tren', 'tren istasyonu'],
    ['el aeropuerto', 'el a-e-ro-PWER-to', 'havaalanı'],
    ['la parada', 'la pa-RA-da', 'durak'],
    ['el puente', 'el PWEN-te', 'köprü'],
    ['el ayuntamiento', 'el a-yun-ta-MYEN-to', 'belediye binası'],
    ['la iglesia', 'la i-GLE-sya', 'kilise'],
    ['el museo', 'el mu-SE-o', 'müze'],
    ['el cine', 'el THI-ne', 'sinema'],
    ['el restaurante', 'el res-tau-RAN-te', 'restoran'],
    ['el café', 'el ka-FE', 'kafe'],
    ['el supermercado', 'el su-per-mer-KA-do', 'süpermarket'],
    ['la biblioteca', 'la bi-ble-o-TE-ka', 'kütüphane'],
    ['la panadería', 'la pa-na-de-RI-a', 'fırın / ekmekçi'],
    ['el centro', 'el THEN-tro', '�xehir merkezi']
  ]],
  25: ['Comida', [
    ['la manzana', 'la man-SA-na', 'elma'],
    ['la naranja', 'la na-RAN-ha', 'portakal'],
    ['el plátano', 'el PLA-ta-no', 'muz'],
    ['la fresa', 'la FRE-sa', 'çilek'],
    ['el tomate', 'el to-MA-te', 'domates'],
    ['la patata', 'la pa-TA-ta', 'patates'],
    ['el arroz', 'el a-RROS', 'pirinç'],
    ['el pan', 'el pan', 'ekmek'],
    ['el queso', 'el KE-so', 'peynir'],
    ['el huevo', 'el WE-vo', 'yumurta'],
    ['la carne', 'la KAR-ne', 'et'],
    ['el pollo', 'el PO-yo', 'tavuk'],
    ['el pescado', 'el pes-KA-do', 'balık'],
    ['la verdura', 'la ver-DU-ra', 'sebze'],
    ['la fruta', 'la FRU-ta', 'meyve'],
    ['el agua', 'el A-gwa', 'su'],
    ['el café', 'el ka-FE', 'kahve'],
    ['el té', 'el tay', 'çay'],
    ['el zumo', 'el SU-mo', 'meyve suyu'],
    ['la cerveza', 'la ser-BE-sa', 'bira'],
    ['el vino', 'el BI-no', '�xarap'],
    ['el desayuno', 'el de-sa-YU-no', 'kahvaltı'],
    ['la comida', 'la ko-MI-da', 'ö�xle yeme�xi'],
    ['la cena', 'la THE-na', 'ak�xam yeme�xi'],
    ['el tentempié', 'el ten-tem-PYE', 'atı�xtırmalık'],
    ['la receta', 'la re-THE-ta', 'tarif', { en: '¿Tienes una receta?', tr: 'Tarifin var mı?', bd: [BD('receta', 'tarif', 'O', 'Di�xil �  la.')] }]
  ]],
  26: ['Colores', [
    ['rojo', 'RO-ho', 'kırmızı'],
    ['azul', 'a-THUL', 'mavi'],
    ['verde', 'VER-de', 'ye�xil'],
    ['amarillo', 'a-ma-RI-yo', 'sarı'],
    ['negro', 'NE-gro', 'siyah'],
    ['blanco', 'BLAN-ko', 'beyaz'],
    ['gris', 'gris', 'gri'],
    ['marrón', 'ma-RON', 'kahverengi'],
    ['naranja', 'na-RAN-ha', 'turuncu'],
    ['morado', 'mo-RA-do', 'mor'],
    ['rosa', 'RO-sa', 'pembe'],
    ['claro', 'KLA-ro', 'açık (renk)'],
    ['oscuro', 'os-KU-ro', 'koyu (renk)'],
    ['colorido', 'ko-lo-ri-DO', 'renkli'],
    ['incoloro', 'in-ko-LO-ro', 'renksiz'],
    ['el color', 'el ko-LOR', 'renk'],
    ['dorado', 'do-RA-do', 'altın rengi'],
    ['plateado', 'pla-te-A-do', 'gümü�x rengi'],
    ['beige', 'beich', 'bej'],
    ['turquesa', 'tur-KE-sa', 'turkuaz'],
    ['violeta', 'byo-LE-ta', 'eflatun'],
    ['de colores', 'de ko-LO-res', 'renkli'],
    ['brillar', 'bri-YAR', 'parıldamak'],
    ['el tono', 'el TO-no', 'renk tonu'],
    ['mate', 'MA-te', 'mat (parlak olmayan)']
  ]],
  27: ['Tiempo', [
    ['hoy', 'oy', 'bugün'],
    ['mañana', 'ma-NYA-na', 'yarın'],
    ['ayer', 'a-YER', 'dün'],
    ['pasado mañana', 'pa-SA-do ma-NYA-na', 'yarından sonra'],
    ['anteayer', 'an-te-a-YER', 'evvelsi gün'],
    ['ahora', 'a-O-ra', '�ximdi'],
    ['después', 'des-PWES', 'sonra'],
    ['antes', 'AN-tes', 'önce'],
    ['pronto', 'PRON-to', 'yakında'],
    ['inmediatamente', 'in-me-dya-ta-MEN-te', 'hemen'],
    ['siempre', 'SYEM-pre', 'her zaman'],
    ['a veces', 'a BE-ses', 'bazen'],
    ['nunca', 'NUN-ka', 'asla / hiç'],
    ['a menudo', 'a me-NU-do', 'sık sık'],
    ['raramente', 'ra-ra-MEN-te', 'nadiren'],
    ['diariamente', 'dya-ria-MEN-te', 'günlük'],
    ['semanalmente', 'se-ma-nal-MEN-te', 'haftalık'],
    ['mensualmente', 'men-swal-MEN-te', 'aylık'],
    ['anualmente', 'a-nwal-MEN-te', 'yıllık'],
    ['el minuto', 'el mi-NU-to', 'dakika'],
    ['la hora', 'la O-ra', 'saat'],
    ['el día', 'el DEE-a', 'gün'],
    ['la semana', 'la se-MA-na', 'hafta'],
    ['el mes', 'el mes', 'ay'],
    ['el año', 'el A-nyo', 'yıl'],
    ['el tiempo', 'el TYEM-po', 'zaman'],
    ['puntual', 'pun-TWAL', 'dakik']
  ]],
  28: ['Deporte', [
    ['el deporte', 'el de-POR-te', 'spor'],
    ['el fútbol', 'el FUT-bol', 'futbol'],
    ['el baloncesto', 'el ba-lon-THEs-to', 'basketbol'],
    ['el tenis', 'el TE-nis', 'tenis'],
    ['la natación', 'la na-ta-THYON', 'yüzme'],
    ['correr', 'ko-RER', 'ko�xmak'],
    ['montar en bicicleta', 'mon-TAR en bi-thi-KLE-ta', 'bisiklete binmek'],
    ['el senderismo', 'el sen-de-RIS-mo', 'yürüyü�x / trekking'],
    ['esquiar', 'es-kyar', 'kayak yapmak'],
    ['entrenar', 'en-tre-NAR', 'antrenman yapmak'],
    ['ganar', 'ga-NAR', 'kazanmak'],
    ['perder', 'per-DER', 'kaybetmek'],
    ['el equipo', 'el e-KI-po', 'takım'],
    ['el jugador', 'el hu-ga-DOR', 'oyuncu (erkek)'],
    ['el entrenador', 'el en-tre-na-DOR', 'antrenör'],
    ['el estadio', 'el es-TA-dyo', 'stadyum'],
    ['el gimnasio', 'el him-NA-syo', 'spor salonu'],
    ['el ejercicio', 'el e-her-THI-thyo', 'egzersiz'],
    ['la medalla', 'la me-DA-ya', 'madalya'],
    ['el trofeo', 'el tro-FE-o', 'kupa / ödül'],
    ['en forma', 'en FOR-ma', 'formda / fit'],
    ['cansado', 'kan-SA-do', 'yorgun'],
    ['fuerte', 'FWER-te', 'güçlü'],
    ['débil', 'DE-bil', 'zayıf']
  ]],
  29: ['Trabajo/Tech', [
    ['el ordenador', 'el or-de-na-DOR', 'bilgisayar'],
    ['el portátil', 'el por-TA-til', 'dizüstü bilgisayar'],
    ['el móvil', 'el MO-bil', 'cep telefonu'],
    ['internet', 'in-ter-NET', 'internet'],
    ['el correo electrónico', 'el ko-RRE-o e-lek-TRO-ni-ko', 'e-posta'],
    ['la página web', 'la PA-hi-na web', 'web sitesi'],
    ['el software', 'el SOFT-ware', 'yazılım'],
    ['la aplicación', 'la ap-li-ka-THYON', 'uygulama'],
    ['la contraseña', 'la kon-tra-SE-nya', '�xifre'],
    ['la pantalla', 'la pan-TA-ya', 'ekran'],
    ['el teclado', 'el te-KLA-do', 'klavye'],
    ['el ratón', 'el ra-TON', 'fare (bilgisayar)'],
    ['imprimir', 'im-pri-MIR', 'yazdırmak'],
    ['guardar', 'guar-DAR', 'kaydetmek'],
    ['borrar', 'bo-RRAR', 'silmek'],
    ['subir', 'su-BIR', 'yüklemek (upload)'],
    ['descargar', 'des-kar-GAR', 'indirmek (download)'],
    ['la reunión', 'la re-u-NYON', 'toplantı (online)'],
    ['la conferencia', 'la kon-fe-REN-thya', 'konferans'],
    ['la oficina', 'la o-fi-THI-na', 'ofis'],
    ['el escritorio', 'el es-kri-TOR-yo', 'yazı masası'],
    ['la impresora', 'la im-pre-SO-ra', 'yazıcı'],
    ['la red', 'la red', 'a�x / network'],
    ['el archivo', 'el ar-THI-vo', 'dosya'],
    ['el compañero', 'el kom-pa-NYE-ro', 'i�x arkada�xı']
  ]],
  30: ['Viajes', [
    ['el viaje', 'el BYA-he', 'seyahat / yolculuk'],
    ['las vacaciones', 'las ba-ka-THYO-nes', 'tatil'],
    ['el pasaporte', 'el pa-sa-POR-te', 'pasaport'],
    ['la maleta', 'la ma-LE-ta', 'bavul'],
    ['el visado', 'el bi-SA-do', 'vize'],
    ['la frontera', 'la fron-TE-ra', 'sınır'],
    ['la aduana', 'la a-DWA-na', 'gümrük'],
    ['el lugar turístico', 'el lu-GAR tu-RIS-ti-ko', 'turistik yer'],
    ['la visita guiada', 'la bi-SI-ta gya-DA-da', 'tur / rehberli gezi'],
    ['el alojamiento', 'el a-lo-ha-MYEN-to', 'konaklama'],
    ['la pensión', 'la pen-SYON', 'pansiyon'],
    ['la guía turística', 'la GYA tur-RIS-ti-ka', 'turist rehberi'],
    ['el mapa', 'el MA-pa', 'harita'],
    ['la brújula', 'la BRU-hu-la', 'pusula'],
    ['el recuerdo', 'el re-KWER-do', 'hediyelik e�xya'],
    ['la playa', 'la PLA-ya', 'sahil / plaj'],
    ['la montaña', 'la mon-TA-nya', 'da�x'],
    ['el lago', 'el LA-go', 'göl'],
    ['el río', 'el RI-o', 'nehir'],
    ['la isla', 'la IS-la', 'ada'],
    ['el puerto', 'el PWER-to', 'liman'],
    ['el casco antiguo', 'el KAS-ko an-TI-go', 'eski �xehir / tarihi merkez'],
    ['la plaza del mercado', 'la PLA-sa del mer-KA-do', 'pazar yeri / meydan'],
    ['el castillo', 'el kas-TE-yo', 'kale / �xato'],
    ['la torre', 'la TO-rre', 'kule'],
    ['la excursión', 'la eks-kur-SYON', 'gezi / gezinti']
  ]],
  31: ['Casa', [
    ['el salón', 'el sa-LON', 'oturma odası'], ['el dormitorio', 'el dor-mi-TO-ryo', 'yatak odası'],
    ['la cocina', 'la ko-THI-na', 'mutfak'], ['el baño', 'el BAN-yo', 'banyo'],
    ['el pasillo', 'el pa-SI-yo', 'koridor / antre'], ['el balcón', 'el bal-KON', 'balkon'],
    ['el jardín', 'el har-DIN', 'bahçe'], ['la puerta', 'la PWER-ta', 'kapı'],
    ['la ventana', 'la ben-TA-na', 'pencere'], ['la pared', 'la pa-RED', 'duvar'],
    ['el techo', 'el TE-cho', 'çatı'], ['las escaleras', 'las es-ka-LE-ras', 'merdiven'],
    ['la mesa', 'la ME-sa', 'masa'], ['la silla', 'la SI-ya', 'sandalye'],
    ['el sofá', 'el so-FA', 'kanepe'], ['la cama', 'la KA-ma', 'yatak'],
    ['el armario', 'el ar-MA-ryo', 'dolap'], ['la estantería', 'la es-tan-te-RI-a', 'raf'],
    ['la lámpara', 'la LAM-pa-ra', 'lamba'], ['la alfombra', 'la al-fom-BRA', 'halı'],
    ['el espejo', 'el es-PE-ho', 'ayna'], ['el frigorífico', 'el fri-go-RI-fi-ko', 'buzdolabı'],
    ['la cocina (fogón)', 'la ko-THI-na', 'ocak'], ['la lavadora', 'la la-va-DO-ra', 'çama�xır makinesi'],
    ['la aspiradora', 'la as-pi-ra-DO-ra', 'elektrikli süpürge'], ['el sofá cama', 'el so-FA KA-ma', 'kanepe']
  ]],
  32: ['Ropa', [
    ['la ropa', 'la RO-pa', 'giysi / kıyafet'], ['la camisa', 'la ka-MI-sa', 'gömlek (erkek)'],
    ['la blusa', 'la BLU-sa', 'bluz'], ['el pantalón', 'el pan-ta-LON', 'pantolon'],
    ['la falda', 'la FAL-da', 'etek'], ['el vestido', 'el ves-TI-do', 'elbise'],
    ['el traje', 'el TRA-he', 'takım elbise'], ['la chaqueta', 'la cha-KWE-ta', 'ceket'],
    ['el abrigo', 'el a-BRI-go', 'palto / mont'], ['el jersey', 'el HER-sey', 'kazak / süveter'],
    ['la camiseta', 'la ka-mi-SE-ta', 'ti�xört'], ['los vaqueros', 'los ba-KE-ros', 'kot pantolon'],
    ['los zapatos', 'los tha-PA-tos', 'ayakkabılar'], ['las botas', 'las BO-tas', 'bot'],
    ['los calcetines', 'los kal-the-TE-nes', 'çorap'], ['el sombrero', 'el som-BRE-ro', '�xapka'],
    ['la bufanda', 'la bu-FAN-da', 'atkı / e�xarp'], ['los guantes', 'los GWAN-tes', 'eldiven'],
    ['el cinturón', 'el thin-tu-RON', 'kemer'], ['la corbata', 'la kor-BA-ta', 'kravat'],
    ['el disfraz', 'el dis-FRAS', 'kostüm'], ['la ropa interior', 'la RO-pa in-te-RYOR', 'iç çama�xırı'],
    ['llevar', 'ya-BAR', 'giymek / ta�xımak'], ['probarse', 'pro-BAR-se', 'denemek (giysi)'],
    ['quedar bien', 'ke-DAR byen', 'uymak'], ['la talla', 'la TA-ya', 'beden']
  ]],
  33: ['Naturaleza', [
    ['la naturaleza', 'la na-tu-ra-LE-sa', 'do�xa'], ['el bosque', 'el BOS-ke', 'orman'],
    ['el árbol', 'el AR-bol', 'a�xaç'], ['la flor', 'la flor', 'çiçek'],
    ['la hierba', 'la YER-ba', 'çimen'], ['la montaña', 'la mon-TA-nya', 'da�x'],
    ['el río', 'el RI-o', 'nehir'], ['el lago', 'el LA-go', 'göl'],
    ['el mar', 'el mar', 'deniz'], ['la playa', 'la PLA-ya', 'sahil'],
    ['el sol', 'el sol', 'güne�x'], ['la luna', 'la LU-na', 'ay'],
    ['la estrella', 'la es-TRE-ya', 'yıldız'], ['el cielo', 'el THYE-lo', 'gökyüzü'],
    ['la nube', 'la NU-be', 'bulut'], ['la lluvia', 'la YU-vya', 'ya�xmur'],
    ['la nieve', 'la NYE-ve', 'kar'], ['el viento', 'el BYEN-to', 'rüzgar'],
    ['el medio ambiente', 'el ME-dyo am-BYEN-te', 'çevre'], ['la basura', 'la ba-SU-ra', 'çöp'],
    ['reciclar', 're-thi-KLAR', 'geri dönü�xtürmek'], ['proteger', 'pro-te-HER', 'korumak'],
    ['la planta', 'la PLAN-ta', 'bitki'], ['el animal', 'el a-ni-MAL', 'hayvan'],
    ['el pájaro', 'el PA-ha-ro', 'ku�x'], ['el pez', 'el pes', 'balık'],
    ['la energía', 'la e-ner-HI-a', 'enerji']
  ]],
  34: ['Dinero', [
    ['el dinero', 'el di-NE-ro', 'para'], ['el euro', 'el E-u-ro', 'euro'],
    ['el céntimo', 'el SEN-ti-mo', 'sent'], ['el banco', 'el BAN-ko', 'banka'],
    ['la cuenta', 'la KWEN-ta', 'hesap (banka)'], ['la tarjeta de crédito', 'la tar-HYE-ta de KRE-di-to', 'kredi kartı'],
    ['la tarjeta bancaria', 'la tar-HYE-ta ban-KA-rya', 'banka kartı'],
    ['sin efectivo', 'sin e-fek-TI-vo', 'nakitsiz'], ['en efectivo', 'en e-fek-TI-vo', 'nakit'],
    ['pagar', 'pa-GAR', 'ödemek'], ['costar', 'kos-TAR', 'mal olmak / tutmak'],
    ['ahorrar', 'a-o-RRAR', 'biriktirmek / tasarruf etmek'], ['gastar', 'gas-TAR', 'harcamak'],
    ['ganar (dinero)', 'ga-NAR', 'kazanmak (para)'], ['la factura', 'la fak-TU-ra', 'fatura / hesap'],
    ['el ticket', 'el ti-KET', 'fi�x'], ['el precio', 'el PRE-thyo', 'fiyat'],
    ['el descuento', 'el des-KWEN-to', 'indirim'], ['caro', 'KA-ro', 'pahalı'],
    ['barato', 'ba-RA-to', 'ucuz'], ['gratis', 'GRA-tis', 'ücretsiz'],
    ['el alquiler', 'el al-KI-ler', 'kira'], ['el sueldo', 'el SWEL-do', 'maa�x'],
    ['el seguro', 'el se-GU-ro', 'sigorta'], ['el impuesto', 'el im-PWES-to', 'vergi'],
    ['el crédito', 'el KRE-di-to', 'kredi'], ['las deudas', 'las DEU-das', 'borçlar']
  ]],
  35: ['Ciencia', [
    ['la ciencia', 'la THYEN-thya', 'bilim'], ['la investigación', 'la in-ves-ti-ga-THYON', 'ara�xtırma'],
    ['el experimento', 'el eks-pe-ri-MEN-to', 'deney'], ['la teoría', 'la te-o-RI-a', 'teori'],
    ['la práctica', 'la PRAK-ti-ka', 'pratik / uygulama'], ['la prueba', 'la PRWE-ba', 'kanıt / ispat'],
    ['la hipótesis', 'la i-PO-te-sis', 'hipotez'], ['el descubrimiento', 'el des-ku-bri-MYEN-to', 'ke�xif'],
    ['el científico', 'el thyen-THI-fi-ko', 'bilim insanı'], ['el laboratorio', 'el la-bo-ra-TO-ryo', 'laboratuvar'],
    ['la química', 'la KI-mi-ka', 'kimya'], ['la física', 'la FIS-i-ka', 'fizik'],
    ['la biología', 'la byo-lo-HI-a', 'biyoloji'], ['las matemáticas', 'las ma-te-MA-ti-kas', 'matematik'],
    ['la medicina', 'la me-di-THI-na', 'tıp / ilaç'], ['el médico', 'el ME-di-ko', 'doktor'],
    ['la tecnología', 'la tek-no-lo-HI-a', 'teknik / mühendislik'], ['el ingeniero', 'el in-he-NYE-ro', 'mühendis'],
    ['el invento', 'el in-VEN-to', 'icat'], ['el premio Nobel', 'el PRE-myo no-BEL', 'Nobel ödülü'],
    ['analizar', 'a-na-li-SAR', 'analiz etmek'], ['investigar', 'in-ves-ti-GAR', 'incelemek / ara�xtırmak'],
    ['demostrar', 'de-mos-TRAR', 'kanıtlamak'], ['descubrir', 'des-ku-BRIR', 'ke�xfetmek'],
    ['desarrollar', 'de-sa-rro-YAR', 'geli�xtirmek'], ['estudiar', 'es-tu-DYAR', 'okumak / incelemek']
  ]],
  36: ['Arte', [
    ['el arte', 'el AR-te', 'sanat'], ['la cultura', 'la kul-TU-ra', 'kültür'],
    ['el museo', 'el mu-SE-o', 'müze'], ['la galería', 'la ga-le-RI-a', 'galeri'],
    ['el cuadro', 'el KWA-dro', 'tablo / resim (sanat)'], ['la escultura', 'la es-kul-TU-ra', 'heykel'],
    ['el artista', 'el ar-TIS-ta', 'sanatçı'], ['la exposición', 'la eks-po-si-THYON', 'sergi'],
    ['el concierto', 'el kon-THYER-to', 'konser'], ['la ópera', 'la O-pe-ra', 'opera'],
    ['el teatro', 'el te-A-tro', 'tiyatro'], ['el actor', 'el AK-tor', 'oyuncu (erkek)'],
    ['la música', 'la MU-si-ka', 'müzik'], ['la canción', 'la kan-THYON', '�xarkı'],
    ['el pintor', 'el pin-TOR', 'ressam'], ['el poeta', 'el po-E-ta', '�xair'],
    ['el escritor', 'el es-kri-TOR', 'yazar'], ['el libro', 'el LI-bro', 'kitap'],
    ['la literatura', 'la li-te-ra-TU-ra', 'edebiyat'], ['la historia', 'la is-TOR-ya', 'tarih / hikaye'],
    ['el festival', 'el fes-ti-VAL', 'festival'], ['la tradición', 'la tra-di-THYON', 'gelenek'],
    ['la costumbre', 'la kos-TUM-bre', 'gelenek / adet'], ['celebrar', 'the-le-BRAR', 'kutlamak'],
    ['admirar', 'ad-mi-RAR', 'hayran kalmak'], ['creativo', 'kre-a-TI-vo', 'yaratıcı'],
    ['inspirar', 'ins-pi-RAR', 'ilham vermek']
  ]],
  37: ['Preguntas', [
    ['quién', 'kyen', 'kim'], ['qué', 'ke', 'ne'], ['dónde', 'DON-de', 'nerede'],
    ['adónde', 'a-DON-de', 'nereye'], ['de dónde', 'de DON-de', 'nereden'], ['cuándo', 'KWAN-do', 'ne zaman'],
    ['cómo', 'KO-mo', 'nasıl'], ['por qué', 'por ke', 'neden / niçin'], ['cuál', 'KWAL', 'hangi'],
    ['cuánto', 'KWAN-to', 'ne kadar (miktar)'], ['para qué', 'pa-ra ke', 'ne için'],
    ['con qué', 'kon ke', 'ne ile / neyle'], ['sobre qué', 'SO-bre ke', 'ne hakkında'],
    ['de quién', 'de kyen', 'kimin'], ['cuántos', 'KWAN-tos', 'ne kadar / kaç tane'],
    ['con qué frecuencia', 'kon ke fre-KWEN-thya', 'ne sıklıkla'], ['cuánto tiempo', 'KWAN-to TYEM-po', 'ne kadar süre'],
    ['¿Quién eres tú?', 'kyen E-res tu', 'Sen kimsin?'], ['¿Qué haces?', 'ke A-ses', 'Ne yapıyorsun?'],
    ['¿Dónde vives?', 'DON-de BI-ves', 'Nerede ya�xıyorsun?'], ['¿Cuándo vienes?', 'KWAN-do BYE-nes', 'Ne zaman geliyorsun?'],
    ['¿Por qué aprendes español?', 'por ke a-PREN-des es-pa-NYOL', 'Neden İspanyolca ö�xreniyorsun?'], ['¿Cómo te llamas?', 'KO-mo te YA-mas', 'Adın ne?']
  ]],
  38: ['Profesiones', [
    ['el médico / la médica', 'el ME-di-ko / la ME-di-ka', 'doktor'],
    ['el profesor / la profesora', 'el pro-fe-SOR / la pro-fe-SO-ra', 'ö�xretmen'],
    ['el ingeniero / la ingeniera', 'el in-he-NYE-ro / la in-he-NYE-ra', 'mühendis'],
    ['el cocinero / la cocinera', 'el ko-thi-NE-ro / la ko-thi-NE-ra', 'a�xçı'],
    ['el camarero / la camarera', 'el ka-ma-RE-ro / la ka-ma-RE-ra', 'garson'],
    ['el policía', 'el po-li-THI-a', 'polis'],
    ['el bombero', 'el bom-BE-ro', 'itfaiyeci'],
    ['el abogado / la abogada', 'el a-bo-GA-do / la a-bo-GA-da', 'avukat'],
    ['el arquitecto / la arquitecta', 'el ar-ki-TEK-to / la ar-ki-TEK-ta', 'mimar'],
    ['el mecánico', 'el me-KA-ni-ko', 'tamirci / mekanik'],
    ['el electricista', 'el e-lek-thi-THIS-ta', 'elektrikçi'],
    ['el peluquero / la peluquera', 'el pe-lu-KE-ro / la pe-lu-KE-ra', 'kuaför / berber'],
    ['el panadero / la panadera', 'el pa-na-DE-ro / la pa-na-DE-ra', 'fırıncı'],
    ['el vendedor / la vendedora', 'el ben-de-DOR / la ben-de-DO-ra', 'satı�x elemanı'],
    ['el programador', 'el pro-gra-ma-DOR', 'yazılımcı'],
    ['el periodista', 'el pe-ryo-DIS-ta', 'gazeteci'],
    ['el fotógrafo', 'el fo-TO-gra-fo', 'foto�xrafçı'],
    ['el músico', 'el MU-si-ko', 'müzisyen'],
    ['el actor / la actriz', 'el AK-tor / la ak-TRIS', 'oyuncu'],
    ['el piloto', 'el pi-LO-to', 'pilot'],
    ['el enfermero / la enfermera', 'el en-fer-ME-ro / la en-fer-ME-ra', 'hem�xire / sa�xlık görevlisi'],
    ['el estudiante / la estudiante', 'el es-tu-DYAN-te', 'ö�xrenci'],
    ['el jubilado / la jubilada', 'el hu-bi-LA-do / la hu-bi-LA-da', 'emekli'],
    ['el jefe / la jefa', 'el HE-fe / la HE-fa', 'patron / müdür'],
    ['el obrero', 'el o-BRE-ro', 'i�xçi'], ['el agricultor', 'el ag-ri-kul-TOR', 'çiftçi']
  ]],
  39: ['Opiniones', [
    ['pensar', 'pen-SAR', 'dü�xünmek'], ['creer', 'kre-ER', 'inanmak / sanmak'],
    ['opinar', 'o-pi-NAR', 'dü�xünmek / kastetmek'], ['encontrar', 'en-kon-TRAR', 'bulmak / dü�xünmek'],
    ['entender', 'en-ten-DER', 'anlamak'], ['estar de acuerdo', 'es-TAR de a-KWER-do', 'katılmak'],
    ['discrepar', 'dis-kre-PAR', 'kar�xı çıkmak / itiraz etmek'], ['discutir', 'dis-ku-TIR', 'tartı�xmak'],
    ['argumentar', 'ar-gu-men-TAR', 'argüman sunmak'], ['convencer', 'kon-BEN-ser', 'ikna etmek'],
    ['la opinión', 'la o-pi-NYON', 'görü�x / fikir'], ['el punto de vista', 'el PWEN-to de VIS-ta', 'görü�x / bakı�x açısı'],
    ['la idea', 'la i-DE-a', 'fikir / idea'], ['la postura', 'la pos-TU-ra', 'görü�x / duru�x'],
    ['Pienso que...', 'PYEN-so ke', 'Sanırım ki...'], ['En mi opinión...', 'en mi o-pi-NYON', 'Bence...'],
    ['Creo que...', 'KRE-o ke', 'Kanaatimce...'], ['Me parece...', 'me pa-RE-se', 'Bence... / ... buluyorum'],
    ['¡Exacto!', 'ek-SAK-to', 'Do�xru! / Haklısın!'], ['No es cierto.', 'no es THYER-to', 'Bu do�xru de�xil.'],
    ['quizás', 'ki-SAS', 'belki'], ['probablemente', 'pro-ba-ble-MEN-te', 'muhtemelen'],
    ['seguro', 'se-GU-ro', 'kesinlikle / eminim'], ['sin duda', 'sin DU-da', '�xüphesiz'],
    ['¡Interesante!', 'in-te-re-SAN-te', 'İlginç!'], ['Es una buena pregunta.', 'es U-na BWE-na pre-GUN-ta', 'Bu iyi bir soru.']
  ]],
  40: ['Animales', [
    ['el perro', 'el PE-rro', 'köpek'], ['el gato', 'el GA-to', 'kedi'], ['el caballo', 'el ka-BA-yo', 'at'],
    ['la vaca', 'la BA-ka', 'inek'], ['el cerdo', 'el THER-do', 'domuz'], ['la oveja', 'la o-BE-ha', 'koyun'],
    ['la cabra', 'la KA-bra', 'keçi'], ['la gallina', 'la ga-YI-na', 'tavuk (hayvan)'],
    ['el gallo', 'el GA-yo', 'horoz'], ['el conejo', 'el ko-NE-ho', 'tav�xan'],
    ['el pájaro', 'el PA-ha-ro', 'ku�x'], ['el ratón', 'el ra-TON', 'fare'],
    ['el oso', 'el O-so', 'ayı'], ['el lobo', 'el LO-bo', 'kurt'],
    ['el zorro', 'el THO-rro', 'tilki'], ['el león', 'el le-ON', 'aslan'],
    ['el elefante', 'el e-le-FAN-te', 'fil'], ['la jirafa', 'la hi-RA-fa', 'zürafa'],
    ['el cocodrilo', 'el ko-ko-DRI-lo', 'timsah'], ['la serpiente', 'la ser-PYEN-te', 'yılan'],
    ['el pez', 'el pes', 'balık'], ['el tiburón', 'el ti-bu-RON', 'köpekbalı�xı'],
    ['el delfín', 'el del-FIN', 'yunus'], ['la ballena', 'la ba-YE-na', 'balina'],
    ['la abeja', 'la a-BE-ha', 'arı'], ['la mariposa', 'la ma-ri-PO-sa', 'kelebek'],
    ['la liebre', 'la LYE-bre', 'tav�xan (yabani)'], ['la ardilla', 'la ar-DI-ya', 'sincap']
  ]],
  41: ['Salud', [
    ['la salud', 'la sa-LUD', 'sa�xlık'], ['enfermo', 'en-FER-mo', 'hasta'],
    ['sano', 'SA-no', 'sa�xlıklı'], ['el dolor', 'el do-LOR', 'a�xrı'],
    ['la fiebre', 'la FYE-bre', 'ate�x'], ['la tos', 'la tos', 'öksürük'],
    ['el resfriado', 'el res-fri-A-do', 'so�xuk algınlı�xı'], ['la gripe', 'la GRI-pe', 'grip'],
    ['la alergia', 'la a-LER-hya', 'alerji'], ['el medicamento', 'el me-di-ka-MEN-to', 'ilaç'],
    ['la receta', 'la re-THE-ta', 'reçete'], ['la farmacia', 'la far-MA-thya', 'eczane'],
    ['el médico / la médica', 'el ME-di-ko / la ME-di-ka', 'doktor'],
    ['el hospital', 'el os-pi-TAL', 'hastane'], ['la emergencia', 'la e-mer-HEN-thya', 'acil durum'],
    ['el médico de urgencias', 'el ME-di-ko de ur-HEN-thyas', 'acil doktor'],
    ['el seguro médico', 'el se-GU-ro ME-di-ko', 'sa�xlık sigortası'],
    ['la vacuna', 'la ba-KU-na', 'a�xı'], ['vacunarse', 'ba-ku-NAR-se', 'a�xı olmak'],
    ['la tensión arterial', 'la ten-SYON ar-te-RYAL', 'tansiyon / kan basıncı'], ['el pulso', 'el PUL-so', 'nabız'],
    ['mareado', 'ma-re-A-do', 'mide bulantısı / ba�x dönmesi'],
    ['recuperarse', 're-ku-pe-RAR-se', 'dinlenmek / iyile�xmek'], ['curar', 'ku-RAR', 'iyile�xtirmek'],
    ['operar', 'o-pe-RAR', 'ameliyat etmek'], ['la operación', 'la o-pe-ra-THYON', 'ameliyat']
  ]],
  42: ['Académico', [
    ['la universidad', 'la u-ni-ver-si-DAD', 'üniversite'], ['la clase magistral', 'la KLA-se ma-his-TRAL', 'ders (üniversite)'],
    ['el seminario', 'el se-mi-NA-ryo', 'seminer'], ['el examen', 'el ek-SA-men', 'sınav'],
    ['el examen escrito', 'el ek-SA-men es-KRI-to', 'yazılı sınav'], ['el trabajo', 'el tra-BA-ho', 'ev ödevi / ara�xtırma yazısı'],
    ['la tesis de licenciatura', 'la TE-sis de li-then-thya-TU-ra', 'lisans tezi'],
    ['la tesis de máster', 'la TE-sis de MAS-ter', 'yüksek lisans tezi'],
    ['la tesis doctoral', 'la TE-sis dok-to-RAL', 'doktora tezi'], ['el profesor', 'el pro-fe-SOR', 'profesör'],
    ['el profesor adjunto', 'el pro-fe-SOR ad-HUN-to', 'doçent / ö�xretim görevlisi'],
    ['el estudiante / la estudiante', 'el es-tu-DYAN-te', 'ö�xrenci'],
    ['la asignatura', 'la a-sig-na-TU-ra', 'bran�x / ders alanı'], ['el semestre', 'el se-MES-tre', 'dönem / sömestr'],
    ['matricularse', 'ma-tri-ku-LAR-se', 'kaydolmak (üniversite)'], ['aprobar', 'a-pro-BAR', 'geçmek (sınav)'],
    ['suspender', 'sus-PEN-der', 'kalmak (sınav)'], ['la beca', 'la BE-ka', 'burs'],
    ['la biblioteca', 'la bi-ble-o-TE-ka', 'kütüphane'], ['investigar', 'in-ves-ti-GAR', 'ara�xtırmak'],
    ['citar', 'thi-TAR', 'alıntı yapmak'], ['la bibliografía', 'la bi-ble-o-gra-FI-a', 'kaynakça'],
    ['la tesis', 'la TE-sis', 'tez / sav'], ['argumentar', 'ar-gu-men-TAR', 'argüman sunmak'],
    ['analizar', 'a-na-li-SAR', 'analiz etmek'], ['resumir', 're-su-MIR', 'özetlemek']
  ]],
  43: ['Tecnología', [
    ['el ordenador', 'el or-de-na-DOR', 'bilgisayar'], ['el smartphone', 'el SMART-fon', 'akıllı telefon'],
    ['internet', 'in-ter-NET', 'internet'], ['la página web', 'la PA-hi-na web', 'web sitesi'],
    ['la aplicación', 'la ap-li-ka-THYON', 'uygulama'], ['el software', 'el SOFT-ware', 'yazılım'],
    ['el hardware', 'el HARD-ware', 'donanım'], ['la contraseña', 'la kon-tra-SE-nya', '�xifre'],
    ['el nombre de usuario', 'el NOM-bre de u-su-A-ryo', 'kullanıcı adı'], ['iniciar sesión', 'i-ni-thyar se-SYON', 'giri�x yapmak (login)'],
    ['cerrar sesión', 'the-RAR se-SYON', 'çıkı�x yapmak (logout)'], ['descargar', 'des-kar-GAR', 'indirmek'],
    ['subir', 'su-BIR', 'yüklemek'], ['guardar', 'guar-DAR', 'kaydetmek'],
    ['borrar', 'bo-RRAR', 'silmek'], ['el almacenamiento en la nube', 'el al-ma-se-na-MYEN-to en la nu-be', 'bulut depolama'],
    ['la inteligencia artificial', 'la in-te-li-HEN-thya ar-ti-fi-THYAL', 'yapay zeka'],
    ['el algoritmo', 'el al-GOR-it-mo', 'algoritma'], ['la protección de datos', 'la pro-tek-THYON de DA-tos', 'veri koruma / gizlilik'],
    ['la ciberseguridad', 'la si-ber-se-gu-ri-DAD', 'siber güvenlik'], ['hackear', 'a-KE-ar', 'hacklemek'],
    ['el virus', 'el BI-rus', 'virüs'], ['actualizar', 'ak-tu-a-li-SAR', 'güncellemek'],
    ['instalar', 'ins-ta-LAR', 'yüklemek / kurmak'], ['la notificación', 'la no-ti-fi-ka-THYON', 'bildirim'],
    ['transmitir', 'trans-mi-TIR', 'yayın izlemek / stream'], ['en línea', 'en LI-ne-a', 'çevrimiçi'],
    ['sin conexión', 'sin ko-nek-SYON', 'çevrimdı�xı']
  ]],
  44: ['Expresiones sociales', [
    ['¡Enhorabuena!', 'en-o-ra-BWE-na', 'Tebrikler! / Kutlarım!'],
    ['¡Felicidades!', 'fe-li-thi-DA-des', 'Her �xey gönlünce! / Tebrikler!'],
    ['¡Que te mejores!', 'ke te me-HO-res', 'Geçmi�x olsun!'],
    ['¡Buen provecho!', 'bwen pro-VE-cho', 'Afiyet olsun!'],
    ['¡Salud!', 'sa-LUD', 'Şerefe!'],
    ['¡Buen apetito!', 'bwen a-pe-TI-to', 'Afiyet olsun! (yemek öncesi)'],
    ['¡Jesús!', 'he-SUS', '�!ok ya�xa! (hap�xırık sonrası)'],
    ['¡Bienvenido!', 'byen-be-NI-do', 'Ho�x geldiniz!'],
    ['¡Me alegra que estés aquí!', 'me a-LE-gra ke es-TES a-KI', 'Burada olman güzel!'],
    ['¡Mucha suerte!', 'MU-cha SWER-te', 'Ba�xarılar!'],
    ['¡Que lo pases bien!', 'ke lo PA-ses byen', 'İyi e�xlenceler!'],
    ['¡Buen fin de semana!', 'bwen fin de se-MA-na', 'İyi hafta sonları!'],
    ['¡Buenas vacaciones!', 'BWE-nas ba-ka-THYO-nes', 'İyi tatiller!'],
    ['¡Buen viaje!', 'bwen BYA-he', 'İyi yolculuklar!'],
    ['Lo siento.', 'lo SYEN-to', '�Szgünüm.'],
    ['No hay problema.', 'no ay pro-BLE-ma', 'Sorun de�xil.'],
    ['De nada.', 'de NA-da', '�nemli de�xil / Rica ederim.'],
    ['¡Me alegro!', 'me a-LE-gro', 'Buna sevindim!'],
    ['¡Qué pena!', 'ke PE-na', 'Ne yazık! / �!ok kötü!'],
    ['¡Exacto!', 'ek-SAK-to', 'Do�xru! / Aynen!'],
    ['¡Claro!', 'KLA-ro', 'Aynen! / Tam olarak!'],
    ['¡Por supuesto!', 'por su-PWES-to', 'Tabii ki! / Elbette!'],
    ['¡Cuídate!', 'kwi-DA-te', 'Kendine iyi bak! / Ho�xça kal! (samimi)'],
    ['¡Hasta pronto!', 'AS-ta PRON-to', 'Yakında görü�xürüz!'],
    ['¡Un saludo!', 'un sa-LU-do', 'Selamlar! / Sevgiler!']
  ]],
  45: ['Geografía', [
    ['el mundo', 'el MUN-do', 'dünya'], ['el continente', 'el kon-ti-NEN-te', 'kıta'],
    ['Europa', 'e-u-RO-pa', 'Avrupa'], ['Asia', 'A-sya', 'Asya'], ['África', 'A-fri-ka', 'Afrika'],
    ['América del Norte', 'a-ME-ri-ka del NOR-te', 'Kuzey Amerika'], ['América del Sur', 'a-ME-ri-ka del sur', 'Güney Amerika'],
    ['Australia', 'aus-TRA-lya', 'Avustralya'], ['la Antártida', 'la an-TAR-ti-da', 'Antarktika'],
    ['Alemania', 'a-le-MAN-ya', 'Almanya'], ['Turquía', 'tur-KEE-a', 'Türkiye'],
    ['Austria', 'AUS-tria', 'Avusturya'], ['Suiza', 'SWI-sa', 'İsviçre'],
    ['Francia', 'FRAN-thya', 'Fransa'], ['Italia', 'i-TA-lya', 'İtalya'],
    ['España', 'es-PA-nya', 'İspanya'], ['Inglaterra / Reino Unido', 'in-gla-THE-rra / REI-no U-ni-do', 'İngiltere / Büyük Britanya'],
    ['los EE.UU.', 'los E-E U-U', 'ABD'], ['Rusia', 'RU-sya', 'Rusya'],
    ['China', 'CHI-na', '�!in'], ['Japón', 'ha-PON', 'Japonya'],
    ['el océano', 'el o-THE-a-no', 'okyanus'], ['el Atlántico', 'el at-LAN-ti-ko', 'Atlas Okyanusu'],
    ['la capital', 'la ka-pi-TAL', 'ba�xkent'], ['la frontera', 'la fron-TE-ra', 'sınır'],
    ['el mapa', 'el MA-pa', 'harita'], ['el globo terráqueo', 'el GLO-bo te-RA-kea-o', 'küre / dünya küresi']
  ]],
  46: ['Verbos de acción', [
    ['ir', 'ir', 'gitmek'], ['venir', 'be-NIR', 'gelmek'], ['conducir', 'kon-du-THIR', 'gitmek (araçla)'],
    ['correr', 'ko-RER', 'ko�xmak / yürümek'], ['volar', 'bo-LAR', 'uçmak'], ['nadar', 'na-DAR', 'yüzmek'],
    ['saltar', 'sal-TAR', 'zıplamak / atlamak'], ['escalar', 'es-ka-LAR', 'tırmanmak'],
    ['lanzar', 'lan-SAR', 'atmak / fırlatmak'], ['atrapar', 'a-tra-PAR', 'yakalamak'],
    ['llevar', 'ya-BAR', 'ta�xımak / giymek'], ['levantar', 'le-ban-TAR', 'kaldırmak'],
    ['empujar', 'em-pu-HAR', 'itmek / basmak'], ['tirar', 'ti-RAR', 'çekmek'],
    ['abrir', 'a-BRIR', 'açmak'], ['cerrar', 'the-RAR', 'kapatmak'],
    ['construir', 'kons-tru-IR', 'in�xa etmek / yapmak'], ['reparar', 're-pa-RAR', 'tamir etmek'],
    ['cocinar', 'ko-thi-NAR', 'yemek yapmak'], ['hornear', 'or-ne-AR', 'fırında pi�xirmek'],
    ['cortar', 'kor-TAR', 'kesmek'], ['mezclar', 'meth-KLAR', 'karı�xtırmak'],
    ['lavar', 'la-BAR', 'yıkamak'], ['limpiar', 'lim-PYAR', 'temizlemek'],
    ['buscar', 'bus-KAR', 'aramak'], ['encontrar', 'en-kon-TRAR', 'bulmak'],
    ['dar', 'dar', 'vermek'], ['tomar', 'to-MAR', 'almak'],
    ['comprar', 'kom-PRAR', 'satın almak'], ['vender', 'ben-DER', 'satmak']
  ]],
  47: ['Historia/Sociedad', [
    ['la historia', 'la is-TOR-ya', 'tarih / hikaye'], ['el pasado', 'el pa-SA-do', 'geçmi�x'],
    ['el presente', 'el pre-SEN-te', 'günümüz / �ximdiki zaman'], ['el futuro', 'el fu-TU-ro', 'gelecek'],
    ['la guerra', 'la GWER-ra', 'sava�x'], ['la paz', 'la pas', 'barı�x'],
    ['la revolución', 'la re-bo-lu-THYON', 'devrim'], ['el imperio', 'el im-PE-ryo', 'imparatorluk / devlet'],
    ['el emperador', 'el em-pe-ra-DOR', 'imparator'], ['la democracia', 'la de-mo-kra-THYA', 'demokrasi'],
    ['la dictadura', 'la dik-ta-DU-ra', 'diktatörlük'], ['la libertad', 'la li-ber-TAD', 'özgürlük'],
    ['la igualdad', 'la i-gwal-DAD', 'e�xitlik'], ['la justicia', 'la hus-TI-thya', 'adalet'],
    ['la sociedad', 'la so-thye-DAD', 'toplum'], ['la cultura', 'la kul-TU-ra', 'kültür'],
    ['la tradición', 'la tra-di-THYON', 'gelenek'], ['la costumbre', 'la kos-TUM-bre', 'adet / gelenek'],
    ['la fiesta', 'la FYES-ta', 'bayram / festival'], ['la Navidad', 'la na-bi-DAD', 'Noel'],
    ['la Pascua', 'la PAS-kwa', 'Paskalya'], ['la Semana Santa', 'la se-MA-na SAN-ta', 'Kutsal Hafta (İspanya)'],
    ['el muro', 'el MU-ro', 'duvar'], ['la unidad', 'la u-ni-DAD', 'birlik'],
    ['la inmigración', 'la in-mi-gra-THYON', 'göç / göçmenlik'], ['la integración', 'la in-te-gra-THYON', 'entegrasyon'],
    ['la libertad de expresión', 'la li-ber-TAD de eks-pre-SYON', 'ifade özgürlü�xü'], ['votar', 'bo-TAR', 'oy vermek / seçmek']
  ]],
  48: ['Refranes', [
    ['Todo está bien.', 'to-do es-TA byen', 'Her �xey yolunda.'],
    ['No es asunto mío.', 'no es a-SUN-to MI-o', 'Bu beni ilgilendirmez. (günlük)'],
    ['Aquí se baila.', 'a-KI se ba-I-la', 'Orada e�xlence dorukta. / Harika bir yer.'],
    ['No entiendo nada.', 'no en-TYEN-do NA-da', 'Hiçbir �xey anlamıyorum.'],
    ['Me da igual.', 'me da i-GWAL', 'Umurumda de�xil. (günlük)'],
    ['Hacerse el sueco', 'a-SER-se el SWE-ko', 'Görmemezlikten gelmek.'],
    ['¡Cruza los dedos!', 'KRU-sa los DE-dos', 'Ba�xarı dilemek! (parmakları çaprazla)'],
    ['¡Qué suerte!', 'ke SWER-te', 'Şanslısın! / Kurtuldun!'],
    ['Es increíble.', 'es in-kre-I-ble', 'Bu çok abartı / inanılmaz.'],
    ['Molestar a alguien', 'mo-les-TAR a al-GYEN', 'Birini rahatsız etmek / sinirini bozmak.'],
    ['Creo que estoy soñando.', 'KRE-o ke es-TOY so-NYAN-do', 'Sanırım rüya görüyorum. / İnanamıyorum.'],
    ['Es pan comido.', 'es pan ko-MI-do', 'Bu çocuk oyunca�xı. / �!ok kolay.'],
    ['¡Mucha mierda!', 'MU-cha MYER-da', 'Kırılacak bir yere git! (sahne öncesi)'],
    ['Morder la bala', 'mor-DER la BA-la', 'Di�xini sıkmak / zor bir �xeyi kabul etmek.'],
    ['Tener algo en mente', 'te-ner AL-go en MEN-te', 'Bir �xeyi aklında/planında tutmak.'],
    ['Estar metido en algo', 'es-TAR me-TI-do en AL-go', 'Aynı i�xi birlikte yapmak / gizlice anla�xmak.'],
    ['¡Es la leche!', 'es la LE-che', 'Bu harika! / İnanılmaz! (günlük)'],
    ['Ya veremos.', 'ya be-RE-mos', 'Görece�xiz. / Bakalım.'],
    ['Despacio pero seguro.', 'des-PA-thyo pe-ro se-GU-ro', 'Yava�x ama emin adımlarla.'],
    ['La práctica hace al maestro.', 'la PRAK-ti-ka A-se al ma-ES-tro', 'Alı�xtırma ustala�xtırır.'],
    ['Todo comienzo es difícil.', 'to-do ko-MYEN-thyo es di-FI-thil', 'Her ba�xlangıç zordur.'],
    ['A quien madruga, Dios le ayuda.', 'a kyen ma-DRU-ga DYOS le a-YU-da', 'Erken kalkan yol alır.'],
    ['No dejes para mañana lo que puedas hacer hoy.', 'no DE-hes pa-ra ma-NYA-na lo ke PWE-das a-SER oy', 'Bugünün i�xini yarına bırakma.'],
    ['Lo bueno, si breve, dos veces bueno.', 'lo BWE-no si BRE-ve dos BE-ses BWE-no', 'Kısa ve öz olmak güzeldir.'],
    ['Cada país tiene sus costumbres.', 'KA-da pa-IS TYE-ne sus kos-TUM-bres', 'Her ülkenin adeti farklı.']
  ]],
  49: ['Conectores avanzados', [
    ['aunque', 'aun-KE', 'ra�xmen / -e ra�xmen'], ['sin embargo', 'sin em-BAR-go', 'yine de / buna ra�xmen'],
    ['por eso', 'por E-so', 'bu yüzden'], ['por lo tanto', 'por lo TAN-to', 'bu nedenle'],
    ['además', 'a-de-MAS', 'ayrıca / bunun dı�xında'], ['pero', 'pe-ro', 'ancak / fakat'],
    ['no obstante', 'no obs-TAN-te', 'ne var ki / ancak'], ['aunque... pero', 'aun-KE... pe-ro', '... ise de, ama'],
    ['tanto... como', 'TAN-to... ko-mo', 'hem... hem de'], ['o... o', 'o... o', 'ya... ya da'],
    ['ni... ni', 'ni... ni', 'ne... ne de'], ['cuanto más... más', 'KWAN-to mas... mas', 'ne kadar... o kadar'],
    ['si', 'si', 'e�xer / -mesi halinde'], ['en cuanto', 'en KWAN-to', '... r olur olmaz'],
    ['antes de que', 'AN-tes de ke', '... den önce'], ['después de que', 'des-PWES de ke', '... den sonra'],
    ['mientras', 'myen-TRAS', '... iken / sırasında'], ['hasta', 'AS-ta', '... e kadar'],
    ['desde', 'DES-de', '... den beri'], ['sin', 'sin', '... siz / -meden'],
    ['en lugar de', 'en lu-GAR de', '... yerine'], ['por', 'por', '... yüzünden / nedeniyle'],
    ['según', 'se-GUN', '... ya göre / ... e göre'], ['de acuerdo con', 'de a-KWER-do kon', '... e uygun olarak'],
    ['con respecto a', 'kon res-PEK-to a', '... ile ilgili / hakkında'], ['en cuanto a', 'en KWAN-to a', '... açısından'],
    ['como resultado de', 'KO-mo res-ul-TA-do de', '... sonucu olarak'], ['a pesar de', 'a pes-SAR de', '... e ra�xmen'],
    ['en vez de', 'en ves de', '... yerine'], ['dentro de', 'DEN-tro de', '... içinde / ... dahilinde'],
    ['fuera de', 'FWER-a de', '... dı�xında'], ['incluido', 'in-kLU-i-do', '... dahil']
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

// ������ All lessons map ����������������������������������������������������������������������������������
const ALL = {
  1: ['Greetings & Introductions', L1],
  2: ['Artículos & ser', L2],
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

// ������ Write files ������������������������������������������������������������������������������������������
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

console.log(`\n�S Generated ${created}/49 Spanish lesson files in ${OUT_DIR}`);
if (errors.length) {
  console.error('\nErrors:');
  errors.forEach(({ n, error }) => console.error(`  ders${n}.js: ${error}`));
} else {
  console.log('No errors.');
}
console.log('\nFiles: ders1.js � ders49.js');

