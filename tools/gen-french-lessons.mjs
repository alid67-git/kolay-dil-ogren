#!/usr/bin/env node
/**
 * Generates French lesson files ders1.js – ders49.js
 * Run: node tools/gen-french-lessons.mjs
 */
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '../languages/fr/lessons');
mkdirSync(OUT_DIR, { recursive: true });

// --- Serialization -----------------------------------------------------------
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

// --- Builders ----------------------------------------------------------------
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
  return `// ders${n}.js - French Lesson ${n}: ${title} (${tag})\nconst L${n} = ${ser(data, 0)};\nLESSONS[${n}] = L${n};\n`;
}

// --- Lesson 1: Greetings -----------------------------------------------------
const L1 = scenario('Greetings',
  [
    W('w1', 'Bonjour', 'bon-JUR', 'Merhaba / Günaydın',
      { tip: 'Günün en yaygın ve güvenli selamıdır.', ctx: 'Sabah ve gündüz resmi-gayriresmi ortamlarda.',
        ex: { en: 'Bonjour, madame.', tr: 'Merhaba hanımefendi.', bd: [BD('Bonjour', 'Merhaba', 'greeting', 'Fransızcada ilk temas için en nötr selamlama.')] } }),
    W('w2', 'Bonsoir', 'bon-SUAR', 'İyi akşamlar',
      { tip: 'Akşam saatlerinde kullanılır.', ctx: 'Genelde gün batımından sonra.',
        ex: { en: 'Bonsoir, monsieur.', tr: 'İyi akşamlar beyefendi.', bd: [BD('Bonsoir', 'İyi akşamlar', 'greeting', 'Hem karşılama hem kısa selam için kullanılır.')] } }),
    W('w3', 'Salut', 'sa-LÜ', 'Selam',
      { tip: 'Samimi ve günlük selamdır.', ctx: 'Arkadaş, aile, yakın çevre.',
        ex: { en: 'Salut, ça va?', tr: 'Selam, nasılsın?', bd: [BD('Salut', 'Selam', 'greeting', 'Resmi ortamlarda tercih edilmez.')] } }),
    W('w4', 'Au revoir', 'o rə-VUAR', 'Hoşça kalın / Görüşmek üzere',
      { tip: 'Standart vedalaşma ifadesidir.', ctx: 'Her ortamda güvenli vedadır.',
        ex: { en: 'Merci, au revoir.', tr: 'Teşekkürler, hoşça kalın.', bd: [BD('Au revoir', 'Hoşça kalın', 'farewell', 'Resmi ve günlük kullanımda çok yaygındır.')] } }),
    W('w5', "Comment tu t'appelles?", 'ko-MAN tü ta-PEL', 'Adın ne? (samimi)',
      { tip: '`tu` ile samimi hitap sorusudur.', ctx: 'Yakın yaş grubu, arkadaş çevresi.',
        ex: { en: "Comment tu t'appelles?", tr: 'Adın ne?', bd: [BD("tu t'appelles", 'adın ...', 'question', "s'appeler fiilinin `tu` çekimiyle isim sorulur.")] } }),
    W('w6', "Je m'appelle", 'jə ma-PEL', 'Benim adım ...',
      { tip: 'Kendini tanıtmanın temel kalıbıdır.', ctx: 'İlk tanışma anında.',
        ex: { en: "Je m'appelle Ali.", tr: 'Benim adım Ali.', bd: [BD("Je m'appelle", 'Benim adım ...', 'phrase', "s'appeler fiilinin `je` formu.")] } }),
    W('w7', 'Enchanté', 'AN-şan-TE', 'Memnun oldum',
      { tip: 'Tanışma sonrasında nezaket ifadesidir.', ctx: 'Erkek konuşmacı formu; kadın için Enchantée.',
        ex: { en: 'Enchanté de faire votre connaissance.', tr: 'Sizi tanıdığıma memnun oldum.', bd: [BD('Enchanté', 'Memnun oldum', 'courtesy', 'Yeni biriyle tanışınca doğal bir kapanış ifadesidir.')] } }),
    W('w8', "S'il vous plaît", 'sil vu PLE', 'Lütfen',
      { tip: 'İstek cümlelerini nazikleştirir.', ctx: 'Resmi ve günlük tüm ortamlarda.',
        ex: { en: "Un café, s'il vous plaît.", tr: 'Bir kahve, lütfen.', bd: [BD("S'il vous plaît", 'Lütfen', 'courtesy', 'Sipariş veya ricada tonu yumuşatır.')] } }),
    W('w9', 'Merci', 'mer-SI', 'Teşekkür ederim',
      { tip: 'En temel teşekkür ifadesidir.', ctx: 'Her durumda kullanılır.',
        ex: { en: 'Merci beaucoup.', tr: 'Çok teşekkür ederim.', bd: [BD('Merci', 'Teşekkürler', 'courtesy', 'beaucoup eklenince vurgu artar.')] } }),
    W('w10', 'De rien', 'də ri-YAN', 'Rica ederim',
      { tip: 'Teşekküre verilen standart cevaptır.', ctx: 'Günlük ve resmi kullanım.',
        ex: { en: 'Merci. - De rien.', tr: 'Teşekkürler. - Rica ederim.', bd: [BD('De rien', 'Rica ederim', 'courtesy', 'Kelime anlamı “bir şey değil” gibi düşünülebilir.')] } }),
    W('w11', 'Pardon', 'par-DON', 'Pardon / Affedersiniz',
      { tip: 'Dikkat çekme veya hafif özür için kullanılır.', ctx: 'Yol sorma, yanlışlıkla çarpma vb.',
        ex: { en: 'Pardon, où est la gare?', tr: 'Affedersiniz, istasyon nerede?', bd: [BD('Pardon', 'Affedersiniz', 'courtesy', 'Kısa ve nazik bir giriş ifadesidir.')] } }),
    W('w12', 'Comment vous appelez-vous?', 'ko-MAN vu za-ple-VU', 'Adınız nedir? (resmi)',
      { tip: '`vous` ile resmi hitap sorusudur.', ctx: 'Tanımadığınız veya resmi kişilere.',
        ex: { en: 'Comment vous appelez-vous, monsieur?', tr: 'Adınız nedir beyefendi?', bd: [BD('vous', 'siz', 'pronoun', 'Hem çoğul hem resmi tekil hitap için kullanılır.')] } })
  ],
  [
    G('g1', 'tu ve vous farkı', 'tu vs vous',
      'Fransızcada hitap seçimi sosyal mesafe ve resmiyet düzeyini doğrudan gösterir. `tu` Türkçedeki “sen”e karşılık gelir ve arkadaşlar, aile üyeleri, çocuklar veya samimi ortamlar için uygundur. `vous` ise Türkçedeki “siz” gibi çalışır; resmi tekil hitapta, yeni tanışmalarda, iş ortamında, öğretmen-müşteri ilişkilerinde ve saygı göstermek istediğiniz durumlarda tercih edilir. En kritik nokta şudur: `vous` hem çoğul “siz” hem de resmi tekil “siz” olarak kullanılır; anlamı bağlamdan anlarsınız. Güvenli strateji: İlk temaslarda `vous` ile başlayın, karşı taraf “On peut se tutoyer” (senli konuşabiliriz) derse `tu`ya geçin.',
      [
        { pronoun: 'Samimi', form: "Comment tu t'appelles?", example: "Salut, comment tu t'appelles?", tr: 'Selam, adın ne?' },
        { pronoun: 'Resmi', form: 'Comment vous appelez-vous?', example: 'Bonjour, comment vous appelez-vous?', tr: 'Merhaba, adınız nedir?' },
        { pronoun: 'Cevap', form: "Je m'appelle ...", example: "Je m'appelle Elif.", tr: 'Benim adım Elif.' },
        { pronoun: 'Nezaket', form: "S'il vous plaît / Merci", example: "Un ticket, s'il vous plaît.", tr: 'Bir bilet, lütfen.' }
      ],
      'Yeni bir ülkede ilk günlerde otomatik olarak `vous` kullanmak iletişim kazalarını önler. Özellikle yaşça büyük kişilerle ve hizmet sektöründe `tu` kullanmak kaba algılanabilir.'),
    G('g2', 'Günün saatine göre selamlama', 'Time-based greetings',
      'Fransızcada selamlaşma saatle birlikte değişir ve doğru seçim doğal görünmenizi sağlar. `Bonjour` sabah başlayıp akşamüstüne kadar kullanılan genel selamdır; mağaza, okul, ofis gibi her yerde güvenlidir. `Bonsoir` akşam saatlerinde kullanılır ve “iyi akşamlar” tonundadır. `Salut` yalnızca samimi bağlamlarda kullanılır; resmi görüşmede kaçınılmalıdır. Vedalaşırken en nötr seçenek `Au revoir`dur. Türkçede tek bir “merhaba” çoğu durumda yeterli olsa da Fransızcada zaman uyumu sosyal açıdan daha görünür bir kuraldır.',
      [
        { pronoun: 'Sabah/Gündüz', form: 'Bonjour', example: 'Bonjour, madame.', tr: 'Merhaba hanımefendi.' },
        { pronoun: 'Akşam', form: 'Bonsoir', example: 'Bonsoir, monsieur.', tr: 'İyi akşamlar beyefendi.' },
        { pronoun: 'Samimi', form: 'Salut', example: 'Salut, Thomas!', tr: 'Selam, Thomas!' },
        { pronoun: 'Veda', form: 'Au revoir', example: 'Merci, au revoir.', tr: 'Teşekkürler, hoşça kalın.' }
      ],
      'Kuralı basit tut: Şüphede kalırsan gündüz `Bonjour`, akşam `Bonsoir`, ayrılırken `Au revoir` kullan. Bu üçlü günlük yaşamın büyük kısmını kapsar.')
  ],
  [
    SP('sp1', 'Bonjour, je m\'appelle Ali.', 'Merhaba, benim adım Ali.', 'Kendini tanıt'),
    SP('sp2', 'Comment vous appelez-vous?', 'Adınız nedir?', 'Resmi isim sorusu sor'),
    SP('sp3', "Comment tu t'appelles?", 'Adın ne?', 'Samimi isim sorusu sor'),
    SP('sp4', "Un café, s'il vous plaît.", 'Bir kahve, lütfen.', 'Nezaketle istek yap'),
    SP('sp5', 'Merci, au revoir.', 'Teşekkürler, hoşça kalın.', 'Kibarca vedalaş')
  ],
  [
    DL('d1', 'İlk tanışma (resmi)', 'First meeting (formal)', [
      LN('A', 'm', 'Bonjour.', 'Merhaba.', 'Resmi başlangıçta en güvenli selam.',
        [BD('Bonjour', 'Merhaba', 'greeting', 'Gündüz her resmi ortamda kullanılabilir.')]),
      LN('B', 'f', 'Bonjour, comment vous appelez-vous?', 'Merhaba, adınız nedir?', '`vous` ile resmi soru.',
        [BD('vous', 'siz', 'pronoun', 'Resmi hitap ve çoğul için aynı form.')]),
      LN('A', 'm', "Je m'appelle Ali. Enchanté.", 'Benim adım Ali. Memnun oldum.', 'Kendini tanıtma + nezaket.',
        [BD("Je m'appelle", 'Benim adım ...', 'phrase', 'İsim söylemenin en temel kalıbı.')]),
      LN('B', 'f', 'Je m\'appelle Claire. Enchantée.', 'Benim adım Claire. Memnun oldum.', 'Kadın konuşmacı Enchantée kullanır.',
        [BD('Enchantée', 'Memnun oldum', 'courtesy', 'Kadın biçimi sonuna -e alır.')]),
      LN('A', 'm', 'Merci, au revoir.', 'Teşekkürler, hoşça kalın.', 'Nazik kapanış.',
        [BD('Au revoir', 'Hoşça kalın', 'farewell', 'Resmi vedalaşmada standarttır.')])
    ]),
    DL('d2', 'Arkadaşça selamlaşma', 'Friendly greeting', [
      LN('A', 'f', 'Salut! Comment tu t\'appelles?', 'Selam! Adın ne?', '`tu` ile samimi kullanım.',
        [BD('Salut', 'Selam', 'greeting', 'Yakın ilişkilerde doğal selam.')]),
      LN('B', 'm', "Je m'appelle Emre.", 'Benim adım Emre.', 'Kısa tanıtım.',
        [BD("Je m'appelle", 'Benim adım', 'phrase', 'Hızlı tanışma kalıbı.')]),
      LN('A', 'f', 'Enchantée, Emre.', 'Memnun oldum, Emre.', 'Samimi ama kibar tepki.',
        [BD('Enchantée', 'Memnun oldum', 'courtesy', 'Konuşan kadın ise bu formu kullanır.')]),
      LN('B', 'm', 'Merci! À bientôt.', 'Teşekkürler! Yakında görüşürüz.', 'Dostça kapanış.',
        [BD('À bientôt', 'Yakında görüşürüz', 'farewell', 'Yakın çevrede sık kullanılan bir vedadır.')])
    ])
  ],
  [
    LI('li1', "Bonjour! Je m'appelle Léa. Comment vous appelez-vous? - Je m'appelle Murat. Enchanté. Merci, au revoir.",
      'Merhaba! Benim adım Léa. Adınız nedir? - Benim adım Murat. Memnun oldum. Teşekkürler, hoşça kalın.',
      [Q('İlk konuşmacının adı nedir?', ['Léa', 'Murat', 'Claire', 'Ali'], 0, 'İlk konuşmacı kim?'),
       Q('Konuşmada hangi resmi soru geçiyor?', ["Comment tu t'appelles?", 'Comment vous appelez-vous?', 'Ça va?', 'Qui es-tu?'], 1, 'Hangi resmi soru kullanıldı?'),
       Q('Diyalog nasıl bitiyor?', ['Salut', 'Merci, au revoir', 'Pardon', 'Bonsoir'], 1, 'Kapanış ifadesi nedir?')])
  ]
);

// --- Lesson 2: Articles & être ----------------------------------------------
const L2 = scenario('Articles & être',
  [
    W('w1', 'le livre', 'lə li-VR', 'kitap (belirli)',
      { tip: '`le` eril tekil belirli artikeldir.', ctx: 'Belirli ve eril isimlerde kullanılır.',
        ex: { en: 'Le livre est intéressant.', tr: 'Kitap ilginç.', bd: [BD('le', 'belirli artikel', 'K', 'Eril tekil isimlerden önce gelir.'), BD('livre', 'kitap', 'O', 'Eril isimdir.')] } }),
    W('w2', 'la table', 'la TABL', 'masa (belirli)',
      { tip: '`la` dişil tekil belirli artikeldir.', ctx: 'Belirli ve dişil isimlerde.',
        ex: { en: 'La table est grande.', tr: 'Masa büyük.', bd: [BD('la', 'belirli artikel', 'K', 'Dişil tekil isimlerden önce gelir.'), BD('table', 'masa', 'O', 'Dişil isimdir.')] } }),
    W('w3', "l'enfant", 'lan-FAN', 'çocuk (belirli)',
      { tip: 'Sesli harfle başlayan isimlerde `l\'` kullanılır.', ctx: 'le/la yerine elizyon yapılır.',
        ex: { en: "L'enfant est content.", tr: 'Çocuk mutlu.', bd: [BD("l'", 'kısaltılmış artikel', 'K', 'le veya la sesli harf önünde düşer.'), BD('enfant', 'çocuk', 'O', 'Sesli harfle başladığı için l\' alır.')] } }),
    W('w4', 'un livre', 'en li-VR', 'bir kitap',
      { tip: '`un` eril tekil belirsiz artikeldir.', ctx: 'İlk kez bahsedilen eril isimlerde.',
        ex: { en: "C'est un livre.", tr: 'Bu bir kitaptır.', bd: [BD('un', 'bir', 'K', 'Eril tekil belirsiz artikel.'), BD('livre', 'kitap', 'O', 'Eril isim.')] } }),
    W('w5', 'une table', 'ün TABL', 'bir masa',
      { tip: '`une` dişil tekil belirsiz artikeldir.', ctx: 'İlk kez bahsedilen dişil isimlerde.',
        ex: { en: "C'est une table.", tr: 'Bu bir masadır.', bd: [BD('une', 'bir', 'K', 'Dişil tekil belirsiz artikel.'), BD('table', 'masa', 'O', 'Dişil isim.')] } }),
    W('w6', 'des livres', 'de li-VR', 'kitaplar / bazı kitaplar',
      { tip: '`des` çoğul belirsiz artikeldir.', ctx: 'Belirsiz çoğullarda kullanılır.',
        ex: { en: 'Ce sont des livres.', tr: 'Bunlar kitaplar.', bd: [BD('des', 'bazı / -lar', 'K', 'Çoğul belirsiz artikel.'), BD('livres', 'kitaplar', 'O', 'livre kelimesinin çoğulu.')] } }),
    W('w7', 'je suis', 'jə sɥi', 'ben ...im',
      { tip: '`être` fiilinin `je` çekimi.', ctx: 'Kimlik, meslek, özellik bildirme.',
        ex: { en: 'Je suis étudiant.', tr: 'Ben öğrenciyim.', bd: [BD('suis', '...im', 'V', '`être` fiilinin 1. tekil çekimi.')] } }),
    W('w8', 'tu es', 'tü e', 'sen ...sin',
      { tip: '`être` fiilinin `tu` çekimi.', ctx: 'Samimi hitapta kullanılır.',
        ex: { en: 'Tu es prêt.', tr: 'Sen hazırsın.', bd: [BD('es', '...sin', 'V', '`tu` öznesiyle kullanılan çekim.')] } }),
    W('w9', 'il/elle est', 'il/el e', 'o ...dır',
      { tip: '`il` erkek, `elle` kadın için üçüncü tekil.', ctx: 'Kişiden bahsederken.',
        ex: { en: 'Elle est professeur.', tr: 'O öğretmendir.', bd: [BD('est', '...dır', 'V', '3. tekil `être` çekimi.')] } }),
    W('w10', 'nous sommes', 'nu som', 'biz ...iz',
      { tip: '`être` fiilinin 1. çoğul çekimi.', ctx: 'Grup kendini tanıtırken.',
        ex: { en: 'Nous sommes amis.', tr: 'Biz arkadaşız.', bd: [BD('sommes', '...iz', 'V', '`nous` ile kullanılır.')] } }),
    W('w11', 'vous êtes', 'vu zet', 'siz ...siniz',
      { tip: 'Resmi tekil ve çoğul için kullanılır.', ctx: 'Nezaket ve çoğul hitap.',
        ex: { en: 'Vous êtes très gentil.', tr: 'Siz çok naziksiniz.', bd: [BD('êtes', '...siniz', 'V', '`vous` çekimi; resmi tekil + çoğul.')] } }),
    W('w12', 'ils/elles sont', 'il/el son', 'onlar ...dır',
      { tip: '`ils` erkek/karışık, `elles` kadın çoğul.', ctx: 'Üçüncü çoğul anlatım.',
        ex: { en: 'Ils sont en classe.', tr: 'Onlar sınıftalar.', bd: [BD('sont', '...dırlar', 'V', '3. çoğul `être` çekimi.')] } })
  ],
  [
    G('g1', 'Belirli artikeller: le / la / l\' / les', 'Definite articles',
      'Fransızcada belirli artikel Türkçedeki “-i belirli nesne” mantığına yakın bir kesinlik taşır, fakat cinsiyet ve sayı bilgisi de verir. `le` eril tekil, `la` dişil tekil, `les` çoğul formdur. İsim sesli harf veya sessiz h ile başlıyorsa `le` ve `la` yerine `l\'` gelir: `l\'enfant`, `l\'ami`, `l\'hôtel`. Bu dönüşüm (elision) telaffuzu kolaylaştırmak için zorunludur. Türkçede artikel olmadığı için en doğru öğrenme yöntemi her ismi artikeliyle ezberlemektir: `le livre`, `la table`, `l\'école`, `les livres`.',
      [
        { pronoun: 'Eril tekil', form: 'le', example: 'le livre', tr: 'kitap' },
        { pronoun: 'Dişil tekil', form: 'la', example: 'la table', tr: 'masa' },
        { pronoun: 'Elision', form: "l'", example: "l'enfant", tr: 'çocuk' },
        { pronoun: 'Çoğul', form: 'les', example: 'les livres', tr: 'kitaplar' }
      ],
      'Öğrenme ipucu: Yeni bir kelimeyi asla tek başına yazma; mutlaka artikeliyle not al. Bu alışkanlık ileride sıfat uyumu ve zamir seçiminde büyük hata payını azaltır.'),
    G('g2', 'Belirsiz artikeller: un / une / des', 'Indefinite articles',
      'Belirsiz artikel bir nesneden ilk kez söz ederken veya “herhangi bir” anlamı verirken kullanılır. `un` eril tekil, `une` dişil tekil, `des` çoğul belirsiz formdur. Türkçedeki “bir” kelimesi cinsiyet ayırmaz; Fransızcada ise cinsiyet zorunlu olarak artikelle birlikte görünür. Örnek: `un livre` (bir kitap), `une table` (bir masa), `des livres` (kitaplar / bazı kitaplar). Olumsuz cümlede çoğu durumda `des` yerine `de` görülür (`Je n\'ai pas de livres`) ama bu ayrıntı başlangıç seviyesinde sadece farkındalık olarak bilinmesi yeterlidir.',
      [
        { pronoun: 'Eril tekil', form: 'un', example: 'un livre', tr: 'bir kitap' },
        { pronoun: 'Dişil tekil', form: 'une', example: 'une table', tr: 'bir masa' },
        { pronoun: 'Çoğul', form: 'des', example: 'des livres', tr: 'kitaplar / bazı kitaplar' },
        { pronoun: 'Yapı', form: "C'est ...", example: "C'est un livre.", tr: 'Bu bir kitap.' }
      ],
      'Başlangıçta hedef: cinsiyeti mükemmel tahmin etmek değil, artikeli atlamamak. Fransızcada artikelsiz isim çoğu zaman eksik ve yapay duyulur.'),
    G('g3', 'être fiili çekimi', 'Conjugation of être',
      '`être` Fransızcanın en temel düzensiz fiilidir ve Türkçedeki ek-fiil işlevlerinin önemli bir kısmını karşılar. Kimlik, meslek, milliyet, durum ve tanımlama cümlelerinde çok sık geçer. Çekimler: `je suis`, `tu es`, `il/elle est`, `nous sommes`, `vous êtes`, `ils/elles sont`. Özellikle `vous êtes` formu hem resmi tekil hem çoğul için kullanıldığı için iletişimde stratejik öneme sahiptir. Soru yaparken tonlama, `est-ce que` veya devrik yapı kullanılabilir; başlangıçta önce doğru çekimi oturtmak en kritik adımdır.',
      [
        { pronoun: 'je', form: 'suis', example: 'Je suis prêt.', tr: 'Ben hazırım.' },
        { pronoun: 'tu', form: 'es', example: 'Tu es étudiant.', tr: 'Sen öğrencisin.' },
        { pronoun: 'il/elle', form: 'est', example: 'Elle est médecin.', tr: 'O doktordur.' },
        { pronoun: 'nous', form: 'sommes', example: 'Nous sommes ici.', tr: 'Biz buradayız.' },
        { pronoun: 'vous', form: 'êtes', example: 'Vous êtes en retard.', tr: 'Siz geç kaldınız.' },
        { pronoun: 'ils/elles', form: 'sont', example: 'Ils sont contents.', tr: 'Onlar mutlular.' }
      ],
      'Hızlı kontrol cümlesi: “Ben...”, “Sen...”, “O...” diye altı cümle kur ve her birine uygun `être` formunu yerleştir. Bu egzersiz akıcılığı hızla artırır.')
  ],
  [
    SP('sp1', 'Le livre est sur la table.', 'Kitap masanın üstünde.', 'Belirli artikellerle cümle kur'),
    SP('sp2', "C'est un livre.", 'Bu bir kitaptır.', 'un artikelini kullan'),
    SP('sp3', "C'est une table.", 'Bu bir masadır.', 'une artikelini kullan'),
    SP('sp4', 'Je suis étudiant.', 'Ben öğrenciyim.', 'je suis yapısını söyle'),
    SP('sp5', 'Nous sommes prêts.', 'Biz hazırız.', 'nous sommes çekimini kullan')
  ],
  [
    DL('d1', 'Sınıfta nesneler', 'Objects in class', [
      LN('A', 'f', "Qu'est-ce que c'est?", 'Bu nedir?', 'Nesne tanımlama sorusu.',
        [BD("Qu'est-ce que c'est?", 'Bu nedir?', 'question', 'Yeni bir nesneyi sorarken çok kullanılır.')]),
      LN('B', 'm', "C'est un livre.", 'Bu bir kitaptır.', '`un` ile belirsiz tanım.',
        [BD('un livre', 'bir kitap', 'O', 'Eril tekil isim + belirsiz artikel.')]),
      LN('A', 'f', 'Et là?', 'Peki ya oradaki?', 'Devam sorusu.',
        [BD('Et là?', 'Peki ya oradaki?', 'question', 'Kısa ve doğal takip sorusu.')]),
      LN('B', 'm', "C'est la table.", 'Bu masadır.', 'Belirli nesneyi gösterir.',
        [BD('la table', 'masa', 'O', 'Dişil tekil + belirli artikel.')]),
      LN('A', 'f', "L'enfant est où?", 'Çocuk nerede?', '`l\'` kullanımı örneği.',
        [BD("L'enfant", 'çocuk', 'O', 'Sesli harfle başladığı için l\' kullanılır.')]),
      LN('B', 'm', "L'enfant est ici.", 'Çocuk burada.', '`être` ile yer bildirimi.',
        [BD('est ici', 'buradadır', 'V', '3. tekil + yer zarfı.')])
    ]),
    DL('d2', 'Kendini tanıtma', 'Self introduction', [
      LN('A', 'm', 'Bonjour, je suis Cem.', 'Merhaba, ben Cem.', '`je suis` ile tanıtım.',
        [BD('je suis', 'ben ...im', 'V', '`être` 1. tekil.')]),
      LN('B', 'f', 'Bonjour, je suis Elif.', 'Merhaba, ben Elif.', 'Paralel yapı.',
        [BD('je suis Elif', 'ben Elifim', 'phrase', 'İsimle doğrudan kullanılabilir.')]),
      LN('A', 'm', 'Vous êtes professeur?', 'Siz öğretmen misiniz?', 'Resmi soru formu.',
        [BD('vous êtes', 'siz ...siniz', 'V', 'Resmi tekil veya çoğul olabilir.')]),
      LN('B', 'f', 'Oui, je suis professeur.', 'Evet, ben öğretmenim.', 'Kısa olumlu cevap.',
        [BD('Oui', 'Evet', 'K', 'Olumlu yanıt kalıbı.')]),
      LN('A', 'm', 'Nous sommes voisins.', 'Biz komşuyuz.', '`nous sommes` örneği.',
        [BD('nous sommes', 'biz ...iz', 'V', '1. çoğul çekim.')])
    ])
  ],
  [
    LI('li1', "C'est un livre. La table est grande. Je suis étudiant. Vous êtes professeur. Ils sont en classe.",
      'Bu bir kitaptır. Masa büyüktür. Ben öğrenciyim. Siz öğretmensiniz. Onlar sınıftalar.',
      [Q('Hangi cümlede dişil belirli artikel var?', ['un livre', 'la table', 'je suis', 'ils sont'], 1, 'Dişil belirli artikel hangisi?'),
       Q('`Vous êtes` ne anlama gelir?', ['ben ...im', 'sen ...sin', 'siz ...siniz', 'onlar ...dır'], 2, '`vous êtes` karşılığı nedir?'),
       Q('Son cümledeki özne nedir?', ['Je', 'Vous', 'Ils', 'Tu'], 2, 'Son cümlenin öznesi hangisi?')])
  ]
);

// --- Lesson 3: Numbers & Money ----------------------------------------------
const FR_NUMBERS = [
  ['un', 'en', 'bir'],
  ['deux', 'dö', 'iki'],
  ['trois', 'trua', 'üç'],
  ['quatre', 'katr', 'dört'],
  ['cinq', 'sank', 'beş'],
  ['six', 'sis', 'altı'],
  ['sept', 'set', 'yedi'],
  ['huit', 'üit', 'sekiz'],
  ['neuf', 'nöf', 'dokuz'],
  ['dix', 'dis', 'on'],
  ['onze', 'onz', 'on bir'],
  ['douze', 'duz', 'on iki'],
  ['treize', 'trez', 'on üç'],
  ['quatorze', 'ka-torz', 'on dört'],
  ['quinze', 'kanz', 'on beş'],
  ['seize', 'sez', 'on altı'],
  ['dix-sept', 'dis-set', 'on yedi'],
  ['dix-huit', 'diz-üit', 'on sekiz'],
  ['dix-neuf', 'diz-nöf', 'on dokuz'],
  ['vingt', 'van', 'yirmi'],
  ['trente', 'trant', 'otuz'],
  ['quarante', 'ka-rant', 'kırk'],
  ['cinquante', 'san-kant', 'elli'],
  ['soixante', 'sua-sant', 'altmış'],
  ['cent', 'san', 'yüz'],
  ['mille', 'mil', 'bin']
];

function frNumWords() {
  return FR_NUMBERS.map(([en, ro, tr], i) => W(`w${i + 1}`, en, ro, tr, i < 4 ? {
    tip: 'Temel sayı kelimesi.',
    ctx: 'Sayma, miktar ve fiyat söylemede kullanılır.',
    ex: {
      en: i === 0 ? 'Un café, s\'il vous plaît.' : i === 1 ? 'Deux euros.' : i === 2 ? 'Trois livres.' : 'Quatre tickets.',
      tr: i === 0 ? 'Bir kahve, lütfen.' : i === 1 ? 'İki euro.' : i === 2 ? 'Üç kitap.' : 'Dört bilet.',
      bd: [BD(en, tr, 'number', `${en} sayısı ${tr} anlamındadır.`)]
    }
  } : {}));
}

const L3 = scenario('Numbers & Money',
  [
    ...frNumWords(),
    W('w27', 'Combien ça coûte?', 'kom-BYAN sa KUT', 'Bu ne kadar tutuyor?',
      { tip: 'Fiyat sormanın en doğal yollarından biridir.', ctx: 'Mağaza, kafe, market.',
        ex: { en: 'Combien ça coûte?', tr: 'Bu ne kadar?', bd: [BD('Combien', 'ne kadar', 'question', 'Miktar/fiyat sorularında temel kelime.'), BD('coûte', 'tutar', 'V', 'coûter fiilinin 3. tekil çekimi.')] } }),
    W('w28', 'euro', 'ö-ro', 'euro',
      { tip: 'Avro para birimi adı.', ctx: 'Avrupa para birimi.',
        ex: { en: 'Ça coûte dix euros.', tr: 'Bu on euro tutuyor.', bd: [BD('euros', 'euro', 'currency', 'Çoğul kullanımda genelde -s yazılır, telaffuz çoğu durumda değişmez.')] } }),
    W('w29', 'centime', 'san-TİM', 'sentim',
      { tip: 'Euro\'nun yüzde biri.', ctx: '1 euro = 100 centime.',
        ex: { en: 'Quatre-vingt-dix-neuf centimes.', tr: 'Doksan dokuz sentim.', bd: [BD('centime', 'sentim', 'currency', 'Kuruş karşılığı küçük para birimi.')] } }),
    W('w30', "l'addition", 'la-di-SYON', 'hesap / adisyon',
      { tip: 'Restoranda hesap isterken kullanılır.', ctx: 'Yemek sonrası ödeme aşaması.',
        ex: { en: "L'addition, s'il vous plaît.", tr: 'Hesap, lütfen.', bd: [BD("L'addition", 'hesap', 'O', 'Restoran bağlamında standart ifadedir.')] } })
  ],
  [
    G('g1', 'Fransızca sayı sistemi', 'French number system',
      'Fransızca sayılar ilk bakışta düzenli görünse de 70, 80, 90 bandında özel bir mantık kullanır. 1-16 arası temel ezber alanıdır (`un`, `deux`, ... `seize`). 17-19 yapısı `dix-` + sayı şeklindedir (`dix-sept`). 20-69 arası görece düzenlidir (`vingt`, `trente`, `quarante`, `cinquante`, `soixante`). Zor bölüm: 70 = `soixante-dix` (60+10), 80 = `quatre-vingts` (4x20), 90 = `quatre-vingt-dix` (4x20+10). Türkçedeki doğrudan onluk sisteminden farklı olduğu için bu bölümü kalıp olarak tekrar etmek gerekir.',
      [
        { pronoun: '1-16', form: 'un ... seize', example: 'un, deux, trois', tr: 'temel sayı kökleri' },
        { pronoun: '17-19', form: 'dix-...', example: 'dix-sept', tr: 'on yedi' },
        { pronoun: '20-69', form: 'vingt, trente...', example: 'trente-deux', tr: 'otuz iki' },
        { pronoun: '70+', form: 'soixante-dix', example: 'soixante-dix-neuf', tr: 'yetmiş dokuz' },
        { pronoun: '80+', form: 'quatre-vingts', example: 'quatre-vingt-un', tr: 'seksen bir' }
      ],
      'Pratik öneri: Önce 1-20 ve onlukları otomatikleştir, sonra 70-99 aralığını ayrı bir mini konu gibi çalış. Bu yöntem ezberi daha kalıcı yapar.'),
    G('g2', 'Para ve fiyat ifadeleri', 'Money expressions',
      'Fransızcada fiyat sormak için en sık kalıp `Combien ça coûte?` veya daha kısa olarak `C\'est combien?` ifadesidir. Cevap verirken `Ça coûte ... euros` yapısı kullanılır. Küsurat için `centime` sözcüğü geçer: `deux euros cinquante` (2,50 €) veya daha açık biçimde `deux euros et cinquante centimes`. Restoranda hesap isterken en doğal ifade `L\'addition, s\'il vous plaît.` cümlesidir. Türkçe düşünürken “kaç para” mantığını doğrudan çevirmek yerine bu sabit kalıpları blok halinde ezberlemek akıcılığı artırır.',
      [
        { pronoun: 'Soru', form: 'Combien ça coûte?', example: 'Combien ça coûte, ce livre?', tr: 'Bu kitap ne kadar?' },
        { pronoun: 'Cevap', form: 'Ça coûte ...', example: 'Ça coûte dix euros.', tr: 'On euro tutuyor.' },
        { pronoun: 'Küsurat', form: '... centimes', example: 'Deux euros cinquante.', tr: 'İki euro elli.' },
        { pronoun: 'Hesap', form: "L'addition, s'il vous plaît.", example: "Monsieur, l'addition, s'il vous plaît.", tr: 'Beyefendi, hesap lütfen.' }
      ],
      'Ödeme anında kısa ve net konuşmak daha doğaldır. Önce soruyu sor (`Combien?`), sonra miktarı tekrar ederek doğrula (`Dix euros?`).')
  ],
  [
    SP('sp1', 'Un café et deux croissants, s\'il vous plaît.', 'Bir kahve ve iki kruvasan, lütfen.', 'Sayı ile sipariş ver'),
    SP('sp2', 'Combien ça coûte?', 'Bu ne kadar tutuyor?', 'Fiyat sor'),
    SP('sp3', 'Ça coûte vingt euros.', 'Yirmi euro tutuyor.', 'Fiyat cevapla'),
    SP('sp4', 'J\'ai cent euros.', 'Yüz eurom var.', 'Para miktarını söyle'),
    SP('sp5', "L'addition, s'il vous plaît.", 'Hesap, lütfen.', 'Hesap iste')
  ],
  [
    DL('d1', 'Kafede ödeme', 'Paying at a café', [
      LN('A', 'm', 'Bonjour, un café et deux croissants, s\'il vous plaît.', 'Merhaba, bir kahve ve iki kruvasan lütfen.', 'Siparişte sayı + ürün.',
        [BD('un / deux', 'bir / iki', 'number', 'Siparişlerde temel sayılar çok sık geçer.')]),
      LN('B', 'f', 'Très bien. Ça fait huit euros.', 'Peki. Toplam sekiz euro ediyor.', '`Ça fait` toplam tutarı belirtir.',
        [BD('Ça fait', 'toplam eder', 'V', 'Kasada sık kullanılan kalıp.')]),
      LN('A', 'm', 'Pardon, combien ça coûte avec de l\'eau?', 'Pardon, suyla birlikte ne kadar tutuyor?', 'Ek ürünle fiyat doğrulama.',
        [BD('Combien ça coûte', 'ne kadar tutuyor', 'question', 'Fiyat netleştirme sorusu.')]),
      LN('B', 'f', 'Dix euros cinquante.', 'On euro elli.', 'Küsuratlı fiyat.',
        [BD('cinquante', 'elli', 'number', 'Ondalık miktarlarda sık kullanılır.')]),
      LN('A', 'm', "D'accord. L'addition, s'il vous plaît.", 'Tamam. Hesap, lütfen.', 'Ödeme adımı.',
        [BD("L'addition", 'hesap', 'O', 'Restoran/kafe kapanış ifadesi.')])
    ])
  ],
  [
    LI('li1', "Au marché: trois pommes coûtent trois euros. Un fromage coûte cinq euros cinquante. L'addition est de huit euros cinquante.",
      'Pazarda: üç elma üç euro tutuyor. Bir peynir beş euro elli tutuyor. Toplam hesap sekiz euro elli.',
      [Q('Elmalar kaç euro?', ['İki euro', 'Üç euro', 'Beş euro', 'Sekiz euro'], 1, 'Elmaların fiyatı nedir?'),
       Q('Peynir kaç euro kaç sentim?', ['5,50', '3,50', '8,50', '10,00'], 0, 'Peynirin fiyatı nedir?'),
       Q('Toplam hesap ne kadar?', ['8,50', '5,50', '3,00', '9,00'], 0, 'Toplam tutar nedir?')])
  ]
);

// --- Helper: compact scenario builder ---------------------------------------
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

const L4 = scenario('Time & Date',
  mkScenarioWords([
    ['w1', 'Quelle heure est-il ?', 'kel eur e-til', 'Saat kaç?'], ['w2', 'Il est trois heures.', 'il e trwa eur', 'Saat üç.'],
    ['w3', 'le matin', 'luh ma-tan', 'sabah'], ['w4', 'l\'après-midi', 'la-pre-mi-di', 'öğleden sonra'],
    ['w5', 'le soir', 'luh swar', 'akşam'], ['w6', 'la nuit', 'la nwee', 'gece'],
    ['w7', 'aujourd\'hui', 'o-jur-dwi', 'bugün'], ['w8', 'demain', 'duh-man', 'yarın'],
    ['w9', 'hier', 'yi-er', 'dün'], ['w10', 'lundi', 'lun-di', 'Pazartesi'],
    ['w11', 'mardi', 'mar-di', 'Salı'], ['w12', 'mercredi', 'mer-kruh-di', 'Çarşamba']
  ]),
  [G('g1', 'Saat ve Tarih', 'Time and Date',
    'Fransızcada saat sormak için "Quelle heure est-il ?" kullanılır. Cevapta "Il est ... heures" kalıbı gelir.',
    [{ pronoun: 'Soru', form: 'Quelle heure est-il ?', example: 'Quelle heure est-il ?', tr: 'Saat kaç?' },
     { pronoun: 'Cevap', form: 'Il est ... heures', example: 'Il est dix heures.', tr: 'Saat on.' },
     { pronoun: 'Randevu', form: 'à ... heures', example: 'À neuf heures.', tr: 'Saat dokuzda.' },
     { pronoun: 'Gün', form: 'lundi, mardi...', example: 'Aujourd\'hui, c\'est lundi.', tr: 'Bugün pazartesi.' }],
    'Saatte à, günde çoğunlukla article olmadan kullanım yaygındır.')],
  [SP('sp1', 'Quelle heure est-il ?', 'Saat kaç?', 'Saat sor'), SP('sp2', 'Il est neuf heures.', 'Saat dokuz.', 'Saat söyle'),
   SP('sp3', 'Aujourd\'hui, c\'est mardi.', 'Bugün salı.', 'Günü söyle'), SP('sp4', 'Demain, je suis libre.', 'Yarın müsaitim.', 'Yarını anlat'),
   SP('sp5', 'À dix heures, s\'il vous plaît.', 'Saat onda, lütfen.', 'Saat belirt')],
  [DL('d1', 'Rendez-vous', 'Appointment', [
    LN('A', 'm', 'Bonjour, vous êtes libre quand ?', 'Merhaba, ne zaman müsaitsiniz?', 'Nezaketli randevu sorusu.', [BD('libre', 'müsait', 'adj', 'Sık kullanılır.')]),
    LN('B', 'f', 'Je suis libre mardi à dix heures.', 'Salı saat onda müsaitim.', 'à + saat kullanımı.', [BD('à dix heures', 'saat onda', 'K', 'Saat ifadesi.')]),
    LN('A', 'm', 'Parfait, à mardi.', 'Harika, salı görüşürüz.', 'Parfait = harika.', [BD('Parfait', 'harika', 'phrase', 'Onay ifadesi.')]),
    LN('B', 'f', 'D\'accord, à mardi !', 'Tamam, salıya kadar!', 'D\'accord = tamam.', [BD('D\'accord', 'tamam', 'phrase', 'Kabul ifadesi.')])
  ])],
  [LI('li1', 'Aujourd\'hui, c\'est mercredi. Le cours commence à neuf heures et finit à onze heures.',
    'Bugün çarşamba. Ders dokuzda başlıyor ve on birde bitiyor.',
    [Q('Quel jour ?', ['lundi', 'mardi', 'mercredi', 'jeudi'], 2, 'Hangi gün?'),
     Q('Le cours commence à...', ['8h', '9h', '10h', '11h'], 1, 'Ders kaçta başlıyor?'),
     Q('Le cours finit à...', ['9h', '10h', '11h', '12h'], 2, 'Ders kaçta bitiyor?')])]
);

const L5 = scenario('Restaurant',
  mkScenarioWords([
    ['w1', 'Une table pour deux, s\'il vous plaît.', 'ün tabl pur dö', 'İki kişilik masa, lütfen.'], ['w2', 'la carte', 'la kart', 'menü'],
    ['w3', 'Je voudrais...', 'juh vu-dre', '... isterim'], ['w4', 'l\'entrée', 'lon-tre', 'başlangıç'],
    ['w5', 'le plat principal', 'luh pla prensipal', 'ana yemek'], ['w6', 'le dessert', 'luh de-ser', 'tatlı'],
    ['w7', 'la boisson', 'la bwa-son', 'içecek'], ['w8', 'de l\'eau', 'dö lo', 'su'],
    ['w9', 'le café', 'luh ka-fe', 'kahve'], ['w10', 'la soupe', 'la sup', 'çorba'],
    ['w11', 'la salade', 'la sa-lad', 'salata'], ['w12', 'la note', 'la not', 'hesap']
  ]),
  [G('g1', 'Restoranda Sipariş', 'Ordering',
    'Nazik istek için Je voudrais... kalıbı çok kullanılır. Hesap isterken La note, s\'il vous plaît denir.',
    [{ pronoun: 'Masa', form: 'Une table pour...', example: 'Une table pour trois.', tr: 'Üç kişilik masa.' },
     { pronoun: 'Sipariş', form: 'Je voudrais...', example: 'Je voudrais une soupe.', tr: 'Bir çorba isterim.' },
     { pronoun: 'Hesap', form: 'La note', example: 'La note, s\'il vous plaît.', tr: 'Hesap, lütfen.' },
     { pronoun: 'Su', form: 'de l\'eau', example: 'De l\'eau, s\'il vous plaît.', tr: 'Su, lütfen.' }],
    'Fransa\'da menü için çoğunlukla la carte kullanılır.')],
  [SP('sp1', 'Une table pour deux, s\'il vous plaît.', 'İki kişilik masa, lütfen.', 'Masa iste'), SP('sp2', 'Je voudrais une soupe.', 'Bir çorba isterim.', 'Sipariş ver'),
   SP('sp3', 'La note, s\'il vous plaît.', 'Hesap, lütfen.', 'Hesap iste'), SP('sp4', 'C\'est délicieux !', 'Çok lezzetli!', 'Yemeği yorumla'),
   SP('sp5', 'De l\'eau, s\'il vous plaît.', 'Su, lütfen.', 'İçecek iste')],
  [DL('d1', 'Au restaurant', 'At the restaurant', [
    LN('A', 'f', 'Bonsoir, vous avez une réservation ?', 'İyi akşamlar, rezervasyonunuz var mı?', 'Karşılama cümlesi.', [BD('réservation', 'rezervasyon', 'O', 'Temel restoran kelimesi.')]),
    LN('B', 'm', 'Oui, au nom d\'Ali.', 'Evet, Ali adına.', 'au nom de = adına.', [BD('au nom de', 'adına', 'K', 'Rezervasyon ifadesi.')]),
    LN('A', 'f', 'Voici la carte.', 'Menü burada.', 'Voici = buyurun.', [BD('Voici', 'buyurun', 'phrase', 'Sunum ifadesi.')]),
    LN('B', 'm', 'Merci, je voudrais une salade.', 'Teşekkürler, bir salata isterim.', 'Je voudrais kullanımı.', [BD('Je voudrais', 'isterim', 'modal', 'Nazik sipariş.')])
  ])],
  [LI('li1', 'Le plat du jour est le poisson à quatorze euros. Le dessert est à cinq euros.',
    'Günün yemeği balık ve 14 euro. Tatlı 5 euro.',
    [Q('Plat du jour ?', ['salade', 'poisson', 'poulet', 'pâtes'], 1, 'Günün yemeği ne?'),
     Q('Prix du plat ?', ['10€', '12€', '14€', '16€'], 2, 'Yemek kaç euro?'),
     Q('Prix du dessert ?', ['3€', '4€', '5€', '6€'], 2, 'Tatlı kaç euro?')])]
);

const L6 = scenario('Shopping',
  mkScenarioWords([
    ['w1', 'Où puis-je trouver... ?', 'u pwi-juh tru-ve', '... nerede bulabilirim?'], ['w2', 'Combien ça coûte ?', 'kon-byan sa kut', 'Bu ne kadar?'],
    ['w3', 'trop cher', 'tro şer', 'çok pahalı'], ['w4', 'bon marché', 'bon mar-şe', 'ucuz'],
    ['w5', 'la réduction', 'la re-dük-syon', 'indirim'], ['w6', 'la taille', 'la tay', 'beden'],
    ['w7', 'la couleur', 'la ku-lör', 'renk'], ['w8', 'essayer', 'e-se-ye', 'denemek'],
    ['w9', 'la cabine', 'la ka-bin', 'deneme kabini'], ['w10', 'ça me va', 'sa muh va', 'bana oluyor'],
    ['w11', 'acheter', 'a-şte', 'satın almak'], ['w12', 'payer', 'pe-ye', 'ödemek']
  ]),
  [G('g1', 'Alışveriş Kalıpları', 'Shopping phrases',
    'Fiyat sormak için Combien ça coûte?, denemek için Je peux essayer? kullanılabilir.',
    [{ pronoun: 'Fiyat', form: 'Combien ça coûte ?', example: 'Combien ça coûte ?', tr: 'Bu ne kadar?' },
     { pronoun: 'Deneme', form: 'Je peux essayer ?', example: 'Je peux essayer ?', tr: 'Deneyebilir miyim?' },
     { pronoun: 'Uygunluk', form: 'Ça me va', example: 'Ça me va bien.', tr: 'Bu bana oluyor.' },
     { pronoun: 'Satın alma', form: 'J\'achète', example: 'J\'achète ça.', tr: 'Bunu alıyorum.' }],
    'bon marché günlük dilde ucuz anlamında çok kullanılır.')],
  [SP('sp1', 'Combien ça coûte ?', 'Bu ne kadar?', 'Fiyat sor'), SP('sp2', 'C\'est trop cher.', 'Bu çok pahalı.', 'Pahalı de'),
   SP('sp3', 'Je peux essayer ?', 'Deneyebilir miyim?', 'Deneme iste'), SP('sp4', 'Ça me va.', 'Bu bana oluyor.', 'Uygunluk söyle'),
   SP('sp5', 'Je prends ça.', 'Bunu alıyorum.', 'Satın al')],
  [DL('d1', 'Au magasin', 'In the shop', [
    LN('A', 'f', 'Bonjour, je peux vous aider ?', 'Merhaba, yardımcı olabilir miyim?', 'Satıcı açılışı.', [BD('aider', 'yardım etmek', 'V', 'Mağaza kalıbı.')]),
    LN('B', 'm', 'Oui, je cherche une veste.', 'Evet, bir ceket arıyorum.', 'Je cherche = arıyorum.', [BD('je cherche', 'arıyorum', 'V', 'Sık kullanılır.')]),
    LN('A', 'f', 'Quelle taille ?', 'Hangi beden?', 'Kısa soru kalıbı.', [BD('taille', 'beden', 'O', 'Giyim alışverişi kelimesi.')]),
    LN('B', 'm', 'Taille M, merci.', 'M beden, teşekkürler.', 'Beden cevabı.', [BD('Taille M', 'M beden', 'phrase', 'Standart cevap.')])
  ])],
  [LI('li1', 'La veste coûte quatre-vingt-dix euros. Aujourd\'hui il y a une réduction de vingt pour cent.',
    'Ceket 90 euro. Bugün yüzde yirmi indirim var.',
    [Q('Prix de la veste ?', ['70€', '80€', '90€', '100€'], 2, 'Ceket fiyatı?'),
     Q('Réduction ?', ['10%', '15%', '20%', '30%'], 2, 'İndirim oranı?'),
     Q('Expression de prix ?', ['Combien ça coûte', 'Où est la gare', 'Je suis malade', 'Bonne nuit'], 0, 'Fiyat ifadesi hangisi?')])]
);

const L7 = scenario('Directions',
  mkScenarioWords([
    ['w1', 'Où est... ?', 'u e', '... nerede?'], ['w2', 'à gauche', 'a goş', 'sol'],
    ['w3', 'à droite', 'a drwat', 'sağ'], ['w4', 'tout droit', 'tu drwa', 'düz'],
    ['w5', 'le coin', 'luh kwan', 'köşe'], ['w6', 'la rue', 'la rü', 'sokak'],
    ['w7', 'la gare', 'la gar', 'istasyon'], ['w8', 'l\'arrêt', 'la-re', 'durak'],
    ['w9', 'le feu', 'luh fö', 'trafik lambası'], ['w10', 'traverser', 'tra-ver-se', 'karşıdan geçmek'],
    ['w11', 'le carrefour', 'luh kar-fur', 'kavşak'], ['w12', 'près de', 'pre dü', 'yakında']
  ]),
  [G('g1', 'Yol Tarifi', 'Directions',
    'Yol tarifi verirken tout droit, à gauche, à droite kalıpları kullanılır. Yer sormada Oû est... ? temel sorudur.',
    [{ pronoun: 'Soru', form: 'Où est... ?', example: 'Où est la gare ?', tr: 'İstasyon nerede?' },
     { pronoun: 'Düz', form: 'tout droit', example: 'Allez tout droit.', tr: 'Dümdüz gidin.' },
     { pronoun: 'Sola', form: 'à gauche', example: 'Tournez à gauche.', tr: 'Sola dönün.' },
     { pronoun: 'Sağa', form: 'à droite', example: 'Tournez à droite.', tr: 'Sağa dönün.' }],
    'Fransızcada kibar kullanım için Excusez-moi ile başlamak iyi olur.')],
  [SP('sp1', 'Où est la gare ?', 'İstasyon nerede?', 'Yer sor'), SP('sp2', 'Allez tout droit.', 'Düz gidin.', 'Yön ver'),
   SP('sp3', 'Tournez à gauche.', 'Sola dönün.', 'Yön ekle'), SP('sp4', 'C\'est près d\'ici.', 'Buraya yakın.', 'Mesafe belirt'),
   SP('sp5', 'Merci pour votre aide.', 'Yardımınız için teşekkürler.', 'Teşekkür et')],
  [DL('d1', 'Demander le chemin', 'Asking the way', [
    LN('A', 'm', 'Excusez-moi, où est la station ?', 'Affedersiniz, istasyon nerede?', 'Nazik başlangıç.', [BD('Excusez-moi', 'affedersiniz', 'courtesy', 'Yabancıya hitap.')]),
    LN('B', 'f', 'Allez tout droit et tournez à droite.', 'Düz gidin ve sağa dönün.', 'Sıralı yön.', [BD('tout droit', 'dümdüz', 'direction', 'İlk adım.')]),
    LN('A', 'm', 'C\'est loin ?', 'Uzak mı?', 'Mesafe sorusu.', [BD('loin', 'uzak', 'adj', 'Mesafe sıfatı.')]),
    LN('B', 'f', 'Non, cinq minutes à pied.', 'Hayır, yürüyerek beş dakika.', 'à pied = yürüyerek.', [BD('à pied', 'yürüyerek', 'K', 'Ulaşım kalıbı.')])
  ])],
  [LI('li1', 'Allez tout droit jusqu\'au carrefour, puis tournez à gauche. La gare est près de la banque.',
    'Kavşağa kadar düz gidin, sonra sola dönün. İstasyon bankanın yakınında.',
    [Q('Première direction ?', ['à gauche', 'à droite', 'tout droit', 'retour'], 2, 'İlk yön ne?'),
     Q('Puis ?', ['à gauche', 'à droite', 'tout droit', 'stop'], 0, 'Sonra ne?'),
     Q('La gare est...', ['loin', 'près de la banque', 'dans le bus', 'fermée'], 1, 'İstasyon nerede?')])]
);

const L8 = scenario('Transport',
  mkScenarioWords([
    ['w1', 'le train', 'luh tren', 'tren'], ['w2', 'le bus', 'luh büs', 'otobüs'], ['w3', 'le métro', 'luh metro', 'metro'],
    ['w4', 'l\'avion', 'la-vyon', 'uçak'], ['w5', 'l\'aéroport', 'la-ero-por', 'havaalanı'], ['w6', 'le billet', 'luh bi-ye', 'bilet'],
    ['w7', 'monter', 'mon-te', 'binmek'], ['w8', 'descendre', 'de-sondr', 'inmek'], ['w9', 'changer', 'şan-je', 'aktarma yapmak'],
    ['w10', 'le quai', 'luh ke', 'peron'], ['w11', 'partir', 'par-tir', 'kalkmak'], ['w12', 'arriver', 'a-ri-ve', 'varmak']
  ]),
  [G('g1', 'Ulaşım Kalıpları', 'Transport phrases',
    'Bilet isterken Un billet pour... kalıbı kullanılır. Aktarma için changer, varış için arriver fiili kullanılır.',
    [{ pronoun: 'Bilet', form: 'Un billet pour...', example: 'Un billet pour Paris.', tr: 'Paris için bir bilet.' },
     { pronoun: 'Peron', form: 'le quai', example: 'Le train part du quai 5.', tr: 'Tren 5. perondan kalkıyor.' },
     { pronoun: 'Aktarma', form: 'changer', example: 'Je change à Lyon.', tr: 'Lyon\'da aktarma yapıyorum.' },
     { pronoun: 'Varış', form: 'arriver', example: 'J\'arrive à 18h.', tr: '18:00\'de varıyorum.' }],
    'Tren anonslarında partir ve arriver fiilleri çok geçer.')],
  [SP('sp1', 'Un billet pour Paris, s\'il vous plaît.', 'Paris için bir bilet, lütfen.', 'Bilet al'), SP('sp2', 'Où dois-je changer ?', 'Nerede aktarma yapmalıyım?', 'Aktarma sor'),
   SP('sp3', 'Le train part du quai 4.', 'Tren 4. perondan kalkıyor.', 'Peron söyle'), SP('sp4', 'Quand arrive le bus ?', 'Otobüs ne zaman geliyor?', 'Saat sor'),
   SP('sp5', 'Je descends ici.', 'Burada iniyorum.', 'İneceğini söyle')],
  [DL('d1', 'À la gare', 'At the station', [
    LN('A', 'm', 'Bonjour, un billet aller-retour pour Lyon.', 'Merhaba, Lyon için gidiş-dönüş bilet.', 'aller-retour = gidiş dönüş.', [BD('aller-retour', 'gidiş-dönüş', 'O', 'Bilet türü.')]),
    LN('B', 'f', 'Très bien, départ à dix heures.', 'Çok iyi, kalkış saat on.', 'départ = kalkış.', [BD('départ', 'kalkış', 'O', 'Anons kelimesi.')]),
    LN('A', 'm', 'Quel quai, s\'il vous plaît ?', 'Hangi peron, lütfen?', 'Quai sorusu.', [BD('quai', 'peron', 'O', 'Tren peronu.')]),
    LN('B', 'f', 'Quai 7. Bon voyage !', '7. peron. İyi yolculuklar!', 'Veda ifadesi.', [BD('Bon voyage', 'iyi yolculuklar', 'farewell', 'Yolcu vedası.')])
  ])],
  [LI('li1', 'Le train pour Paris part à quatorze heures du quai 8. Le voyage dure deux heures.',
    'Paris treni 14:00\'te 8. perondan kalkıyor. Yolculuk iki saat sürüyor.',
    [Q('Destination ?', ['Lyon', 'Paris', 'Nice', 'Lille'], 1, 'Varış yeri?'),
     Q('Quai ?', ['5', '6', '7', '8'], 3, 'Peron?'),
     Q('Durée ?', ['1h', '2h', '3h', '4h'], 1, 'Süre?')])]
);

const L9 = scenario('Hotel',
  mkScenarioWords([
    ['w1', 'l\'hôtel', 'lo-tel', 'otel'], ['w2', 'la réception', 'la re-sep-syon', 'resepsiyon'], ['w3', 'la chambre', 'la şambr', 'oda'],
    ['w4', 'faire le check-in', 'fer luh çek-in', 'giriş yapmak'], ['w5', 'faire le check-out', 'fer luh çek-aut', 'çıkış yapmak'], ['w6', 'la clé', 'la kle', 'anahtar'],
    ['w7', 'chambre simple', 'şambr senpl', 'tek kişilik oda'], ['w8', 'chambre double', 'şambr dubl', 'çift kişilik oda'],
    ['w9', 'le petit-déjeuner', 'luh pəti de-jöne', 'kahvaltı'], ['w10', 'le Wi-Fi', 'luh wi-fi', 'wifi'], ['w11', 'la climatisation', 'la klima-ti-za-syon', 'klima'], ['w12', 'la réservation', 'la re-zer-va-syon', 'rezervasyon']
  ]),
  [G('g1', 'Otel İfadeleri', 'Hotel phrases',
    'Check-in sırasında J\'ai une réservation au nom de... kalıbı yaygındır. Kahvaltı dahil mi sorusu için est inclus? kullanılır.',
    [{ pronoun: 'Rezervasyon', form: 'J\'ai une réservation', example: 'J\'ai une réservation au nom d\'Ali.', tr: 'Ali adına rezervasyonum var.' },
     { pronoun: 'Oda', form: 'chambre simple/double', example: 'Je voudrais une chambre double.', tr: 'Çift kişilik oda isterim.' },
     { pronoun: 'Kahvaltı', form: 'est inclus ?', example: 'Le petit-déjeuner est inclus ?', tr: 'Kahvaltı dahil mi?' },
     { pronoun: 'Çıkış', form: 'check-out', example: 'À quelle heure est le check-out ?', tr: 'Çıkış saat kaçta?' }],
    'Resepsiyonda nazik hitap için Bonjour/Bonsoir tercih edilir.')],
  [SP('sp1', 'J\'ai une réservation.', 'Rezervasyonum var.', 'Check-in yap'), SP('sp2', 'Je voudrais une chambre simple.', 'Tek kişilik oda isterim.', 'Oda iste'),
   SP('sp3', 'Le petit-déjeuner est inclus ?', 'Kahvaltı dahil mi?', 'Kahvaltı sor'), SP('sp4', 'Je fais le check-out.', 'Check-out yapıyorum.', 'Çıkış söyle'),
   SP('sp5', 'La chambre est confortable.', 'Oda konforlu.', 'Odayı değerlendir')],
  [DL('d1', 'À la réception', 'At reception', [
    LN('A', 'f', 'Bonsoir, bienvenue à l\'hôtel.', 'İyi akşamlar, otele hoş geldiniz.', 'Karşılama.', [BD('bienvenue', 'hoş geldiniz', 'greeting', 'Resepsiyon dili.')]),
    LN('B', 'm', 'Bonsoir, j\'ai une réservation.', 'İyi akşamlar, rezervasyonum var.', 'Temel check-in ifadesi.', [BD('réservation', 'rezervasyon', 'O', 'Ana kelime.')]),
    LN('A', 'f', 'Oui, chambre simple pour deux nuits.', 'Evet, iki gecelik tek kişilik oda.', 'Süre belirtme.', [BD('deux nuits', 'iki gece', 'time', 'Konaklama süresi.')]),
    LN('B', 'm', 'Parfait, merci beaucoup.', 'Harika, çok teşekkürler.', 'Kibar kapanış.', [BD('Parfait', 'harika', 'phrase', 'Olumlu cevap.')])
  ])],
  [LI('li1', 'Ali a réservé une chambre simple pour trois nuits. Le petit-déjeuner est de 7h à 10h.',
    'Ali üç gece için tek kişilik oda ayırttı. Kahvaltı 7-10 arası.',
    [Q('Type de chambre ?', ['double', 'simple', 'suite', 'familiale'], 1, 'Oda tipi?'),
     Q('Combien de nuits ?', ['1', '2', '3', '4'], 2, 'Kaç gece?'),
     Q('Petit-déjeuner ?', ['6-9', '7-10', '8-11', '9-12'], 1, 'Kahvaltı saatleri?')])]
);

const L10 = scenario('Work', mkScenarioWords([
  ['w1', 'le travail', 'luh tra-vay', 'iş'], ['w2', 'le métier', 'luh me-tye', 'meslek'], ['w3', 'le collègue', 'luh ko-leg', 'iş arkadaşı'],
  ['w4', 'le patron', 'luh pa-tron', 'patron'], ['w5', 'le bureau', 'luh bü-ro', 'ofis'], ['w6', 'la réunion', 'la re-yün-yon', 'toplantı'],
  ['w7', 'le contrat', 'luh kon-tra', 'sözleşme'], ['w8', 'le salaire', 'luh sa-ler', 'maaş'], ['w9', 'la candidature', 'la kon-di-da-tür', 'başvuru'],
  ['w10', 'l\'entretien', 'lon-tre-tyan', 'görüşme'], ['w11', 'temps plein', 'ton plen', 'tam zamanlı'], ['w12', 'temps partiel', 'ton par-syel', 'yarı zamanlı']
]), [G('g1', 'İş Kalıpları', 'Work phrases', 'Meslek sormak için Quel est votre métier?, meslek söylemek için Je travaille comme... kullanılır.',
  [{ pronoun: 'Meslek', form: 'Quel est votre métier ?', example: 'Quel est votre métier ?', tr: 'Mesleğiniz nedir?' }, { pronoun: 'Cevap', form: 'Je travaille comme...', example: 'Je travaille comme ingénieur.', tr: 'Mühendis olarak çalışıyorum.' }, { pronoun: 'Toplantı', form: 'J\'ai une réunion', example: 'J\'ai une réunion à 15h.', tr: '15:00\'te toplantım var.' }, { pronoun: 'Veda', form: 'Bonne journée', example: 'Bonne journée !', tr: 'İyi günler!' }], 'Resmi ortamda vous formu tercih edilir.')],
  [SP('sp1', 'Quel est votre métier ?', 'Mesleğiniz nedir?', 'Meslek sor'), SP('sp2', 'Je travaille comme développeur.', 'Geliştirici olarak çalışıyorum.', 'Meslek söyle'), SP('sp3', 'J\'ai une réunion à trois heures.', 'Saat üçte toplantım var.', 'Toplantı belirt'), SP('sp4', 'Je travaille à temps plein.', 'Tam zamanlı çalışıyorum.', 'Çalışma türü söyle'), SP('sp5', 'Bonne journée !', 'İyi günler!', 'Veda et')],
  [DL('d1', 'Au bureau', 'At office', [LN('A', 'm', 'Bonjour, vous avez une réunion ?', 'Merhaba, toplantınız var mı?', 'İş yeri sorusu.', [BD('réunion', 'toplantı', 'O', 'Ofis kelimesi.')]), LN('B', 'f', 'Oui, à onze heures.', 'Evet, saat on birde.', 'Saat belirtme.', [BD('à onze heures', 'saat on birde', 'K', 'Saat kalıbı.')]), LN('A', 'm', 'Après, vous êtes disponible ?', 'Sonra müsait misiniz?', 'Müsaitlik sorusu.', [BD('disponible', 'müsait', 'adj', 'Takvim dili.')]), LN('B', 'f', 'Oui, avec plaisir.', 'Evet, memnuniyetle.', 'Pozitif cevap.', [BD('avec plaisir', 'memnuniyetle', 'phrase', 'Nazik onay.')])])],
  [LI('li1', 'Ali travaille comme ingénieur. Il commence à huit heures et a une réunion à dix heures.', 'Ali mühendis olarak çalışıyor. Sekizde başlıyor ve onda toplantısı var.', [Q('Métier ?', ['médecin', 'ingénieur', 'chef', 'serveur'], 1, 'Mesleği?'), Q('Début ?', ['7h', '8h', '9h', '10h'], 1, 'Başlangıç saati?'), Q('Réunion ?', ['9h', '10h', '11h', '12h'], 1, 'Toplantı saati?')])]);

const L11 = scenario('Health', mkScenarioWords([
  ['w1', 'le médecin', 'luh med-sen', 'doktor'], ['w2', 'l\'hôpital', 'lo-pi-tal', 'hastane'], ['w3', 'la pharmacie', 'la far-ma-si', 'eczane'], ['w4', 'malade', 'ma-lad', 'hasta'], ['w5', 'la douleur', 'la du-lör', 'ağrı'], ['w6', 'la fièvre', 'la fyevğ', 'ateş'], ['w7', 'la toux', 'la tu', 'öksürük'], ['w8', 'le rhume', 'luh rüm', 'nezle'], ['w9', 'le médicament', 'luh me-di-ka-mon', 'ilaç'], ['w10', 'le rendez-vous', 'luh ron-de-vu', 'randevu'], ['w11', 'l\'assurance', 'la-sü-rans', 'sigorta'], ['w12', 'Bon rétablissement !', 'bon re-tab-lis-mon', 'Geçmiş olsun!']
]), [G('g1', 'Sağlık Kalıpları', 'Health phrases', 'Ağrı belirtmek için J\'ai mal à..., randevu için Je voudrais un rendez-vous kalıpları kullanılır.', [{ pronoun: 'Ağrı', form: 'J\'ai mal à...', example: 'J\'ai mal à la tête.', tr: 'Başım ağrıyor.' }, { pronoun: 'Hastalık', form: 'Je suis malade', example: 'Je suis malade.', tr: 'Hastayım.' }, { pronoun: 'Randevu', form: 'Je voudrais un rendez-vous', example: 'Je voudrais un rendez-vous.', tr: 'Randevu istiyorum.' }, { pronoun: 'İyi dilek', form: 'Bon rétablissement', example: 'Bon rétablissement !', tr: 'Geçmiş olsun!' }], 'J\'ai + isim yapısı belirtilerde çok kullanılır.')],
  [SP('sp1', 'J\'ai mal à la tête.', 'Başım ağrıyor.', 'Belirti söyle'), SP('sp2', 'Je suis malade.', 'Hastayım.', 'Durum belirt'), SP('sp3', 'Je voudrais un rendez-vous.', 'Randevu istiyorum.', 'Randevu iste'), SP('sp4', 'J\'ai de la fièvre.', 'Ateşim var.', 'Belirti belirt'), SP('sp5', 'Bon rétablissement !', 'Geçmiş olsun!', 'İyi dilek söyle')],
  [DL('d1', 'Chez le médecin', 'At doctor', [LN('A', 'f', 'Bonjour, qu\'est-ce que vous avez ?', 'Merhaba, neyiniz var?', 'Doktor sorusu.', [BD('qu\'est-ce que', 'nedir', 'question', 'Soru kalıbı.')]), LN('B', 'm', 'J\'ai mal à la gorge.', 'Boğazım ağrıyor.', 'Şikayet cümlesi.', [BD('J\'ai mal à', '... ağrıyor', 'V', 'Temel ağrı yapısı.')]), LN('A', 'f', 'Depuis quand ?', 'Ne zamandan beri?', 'Süre sorusu.', [BD('depuis quand', 'ne zamandan beri', 'question', 'Süre ifadesi.')]), LN('B', 'm', 'Depuis hier soir.', 'Dün akşamdan beri.', 'Süre cevabı.', [BD('depuis', '...den beri', 'K', 'Zaman edatı.')])])],
  [LI('li1', 'Ali est malade. Il a de la fièvre et de la toux. Le médecin conseille du repos.', 'Ali hasta. Ateşi ve öksürüğü var. Doktor dinlenme öneriyor.', [Q('Ali est...', ['fatigué', 'malade', 'content', 'occupé'], 1, 'Ali nasıl?'), Q('Symptômes ?', ['fièvre et toux', 'sport', 'faim', 'stress'], 0, 'Belirtiler?'), Q('Conseil ?', ['repos', 'voyage', 'travail', 'cinéma'], 0, 'Öneri?')])]);

const L12 = scenario('Phone', mkScenarioWords([
  ['w1', 'appeler', 'a-pə-le', 'aramak'], ['w2', 'le message', 'luh me-saj', 'mesaj'], ['w3', 'l\'e-mail', 'le-meyl', 'e-posta'], ['w4', 'le numéro de téléphone', 'luh nü-me-ro də te-le-fon', 'telefon numarası'], ['w5', 'Bonjour, c\'est...', 'bon-jur se', 'Merhaba, ... ben'], ['w6', 'Vous pouvez me rappeler ?', 'vu pu-ve mə ra-ple', 'Beni geri arayabilir misiniz?'], ['w7', 'Je ne peux pas parler maintenant.', 'jə nə pø pa parle man-tnan', 'Şimdi konuşamıyorum.'], ['w8', 'la messagerie', 'la me-sa-jə-ri', 'sesli mesaj'], ['w9', 'écrire', 'e-krir', 'yazmak'], ['w10', 'le répondeur', 'luh re-pon-dör', 'telesekreter'], ['w11', 'occupé', 'o-kü-pe', 'meşgul'], ['w12', 'transférer', 'trans-fe-re', 'bağlamak']
]), [G('g1', 'Telefon Konuşması', 'Phone conversation', 'Telefonda tanıtım için Bonjour, c\'est... kalıbı kullanılır. Daha yavaş konuşma isteği için Plus lentement, s\'il vous plaît denebilir.', [{ pronoun: 'Tanıtım', form: 'Bonjour, c\'est...', example: 'Bonjour, c\'est Ali.', tr: 'Merhaba, Ali ben.' }, { pronoun: 'Geri arama', form: 'me rappeler', example: 'Vous pouvez me rappeler ?', tr: 'Beni geri arayabilir misiniz?' }, { pronoun: 'Meşgul', form: 'occupé', example: 'La ligne est occupée.', tr: 'Hat meşgul.' }, { pronoun: 'Kapanış', form: 'Bonne journée', example: 'Merci, bonne journée.', tr: 'Teşekkürler, iyi günler.' }], 'Resmi telefonlarda vous formu kullanılır.')],
  [SP('sp1', 'Bonjour, c\'est Ali.', 'Merhaba, Ali ben.', 'Tanıtım yap'), SP('sp2', 'Pouvez-vous répéter ?', 'Tekrar eder misiniz?', 'Tekrar iste'), SP('sp3', 'Je vous rappelle plus tard.', 'Sizi sonra ararım.', 'Geri arama söyle'), SP('sp4', 'Je ne peux pas parler maintenant.', 'Şimdi konuşamıyorum.', 'Durum belirt'), SP('sp5', 'Merci, bonne journée.', 'Teşekkürler, iyi günler.', 'Kapat')],
  [DL('d1', 'Appel', 'Phone call', [LN('A', 'f', 'Bonjour, société Martin.', 'Merhaba, Martin şirketi.', 'Resmi açılış.', [BD('société', 'şirket', 'O', 'İş telefonu kelimesi.')]), LN('B', 'm', 'Bonjour, c\'est Ali.', 'Merhaba, Ali ben.', 'Kendini tanıtma.', [BD('c\'est', '... ben', 'phrase', 'Telefon kalıbı.')]), LN('A', 'f', 'Un moment, je transfère.', 'Bir dakika, bağlıyorum.', 'Aktarma ifadesi.', [BD('transfère', 'bağlıyorum', 'V', 'Telefon fiili.')]), LN('B', 'm', 'Merci beaucoup.', 'Çok teşekkürler.', 'Kibar kapanış.', [BD('Merci', 'teşekkür', 'courtesy', 'Standart nezaket.')])])],
  [LI('li1', 'Ali appelle le cabinet médical. Pour un rendez-vous, tapez un.', 'Ali sağlık merkezini arıyor. Randevu için bire basın.', [Q('Ali appelle...', ['banque', 'cabinet médical', 'hôtel', 'école'], 1, 'Ali nereyi arıyor?'), Q('Pour rendez-vous ?', ['0', '1', '2', '9'], 1, 'Randevu tuşu?'), Q('Sujet ?', ['voyage', 'santé', 'sport', 'musique'], 1, 'Konu?')])]);

const L13 = scenario('Social Life', mkScenarioWords([
  ['w1', 'l\'ami / l\'amie', 'la-mi', 'arkadaş'], ['w2', 'la fête', 'la fet', 'parti'], ['w3', 'inviter', 'en-vi-te', 'davet etmek'], ['w4', 'l\'invitation', 'len-vi-ta-syon', 'davet'], ['w5', 'fêter', 'fe-te', 'kutlamak'], ['w6', 'l\'anniversaire', 'la-ni-ver-ser', 'doğum günü'], ['w7', 'Joyeux anniversaire !', 'jwa-yö a-ni-ver-ser', 'Doğum günün kutlu olsun!'], ['w8', 'Santé !', 'son-te', 'Şerefe!'], ['w9', 'se retrouver', 'sə ru-tru-ve', 'buluşmak'], ['w10', 'en retard', 'on rə-tar', 'geç'], ['w11', 'à l\'heure', 'a lör', 'zamanında'], ['w12', 'ça te dit ?', 'sa tə di', 'ister misin?']
]), [G('g1', 'Sosyal Davetler', 'Invitations', 'Arkadaş çağırırken Ça te dit...? veya On se voit? kullanılabilir. Kabul için Oui, avec plaisir denir.', [{ pronoun: 'Davet', form: 'Ça te dit... ?', example: 'Ça te dit un café ?', tr: 'Bir kahve ister misin?' }, { pronoun: 'Kabul', form: 'Oui, avec plaisir', example: 'Oui, avec plaisir !', tr: 'Evet, memnuniyetle!' }, { pronoun: 'Red', form: 'Je ne peux pas', example: 'Désolé, je ne peux pas.', tr: 'Üzgünüm, gelemem.' }, { pronoun: 'Kutlama', form: 'Joyeux anniversaire', example: 'Joyeux anniversaire !', tr: 'Doğum günün kutlu olsun!' }], 'Samimi konuşmada tu formu yaygındır.')],
  [SP('sp1', 'Tu es libre samedi ?', 'Cumartesi müsait misin?', 'Teklif et'), SP('sp2', 'Oui, avec plaisir !', 'Evet, memnuniyetle!', 'Kabul et'), SP('sp3', 'Joyeux anniversaire !', 'Doğum günün kutlu olsun!', 'Kutla'), SP('sp4', 'Santé !', 'Şerefe!', 'Kadeh kaldır'), SP('sp5', 'Désolé, je ne peux pas venir.', 'Üzgünüm, gelemem.', 'Reddet')],
  [DL('d1', 'Invitation', 'Invitation', [LN('A', 'f', 'Salut Ali, je fais une fête samedi.', 'Selam Ali, cumartesi parti yapıyorum.', 'Davet açılışı.', [BD('fête', 'parti', 'O', 'Sosyal etkinlik kelimesi.')]), LN('B', 'm', 'Super, à quelle heure ?', 'Harika, saat kaçta?', 'Saat sorusu.', [BD('à quelle heure', 'saat kaçta', 'question', 'Zaman sorusu.')]), LN('A', 'f', 'À vingt heures, chez moi.', 'Saat yirmide, bende.', 'Yer ve zaman.', [BD('chez moi', 'bende', 'K', 'Ev ifadesi.')]), LN('B', 'm', 'Parfait, à samedi !', 'Harika, cumartesi görüşürüz!', 'Kapanış.', [BD('à samedi', 'cumartesiye kadar', 'farewell', 'Veda kalıbı.')])])],
  [LI('li1', 'Lisa fête son anniversaire vendredi. La fête commence à dix-neuf heures.', 'Lisa cuma günü doğum gününü kutluyor. Parti 19:00\'da başlıyor.', [Q('Événement ?', ['mariage', 'anniversaire', 'concert', 'voyage'], 1, 'Etkinlik ne?'), Q('Quand ?', ['18h', '19h', '20h', '21h'], 1, 'Saat kaçta?'), Q('Contexte ?', ['social', 'médical', 'travail', 'transport'], 0, 'Bağlam?')])]);

const L14 = scenario('Home', mkScenarioWords([
  ['w1', 'l\'appartement', 'la-par-te-mon', 'daire'], ['w2', 'la maison', 'la me-zon', 'ev'], ['w3', 'la chambre', 'la şambr', 'oda'], ['w4', 'la cuisine', 'la kwi-zin', 'mutfak'], ['w5', 'la salle de bain', 'la sal də ben', 'banyo'], ['w6', 'le balcon', 'luh bal-kon', 'balkon'], ['w7', 'le loyer', 'luh lwa-ye', 'kira'], ['w8', 'le propriétaire', 'luh pro-prye-ter', 'ev sahibi'], ['w9', 'déménager', 'de-me-na-je', 'taşınmak'], ['w10', 'les voisins', 'le vwa-zan', 'komşular'], ['w11', 'l\'électricité', 'le-lek-tri-si-te', 'elektrik'], ['w12', 'le chauffage', 'luh şo-faj', 'ısıtma']
]), [G('g1', 'Ev Konuşmaları', 'Home phrases', 'Adres belirtmek için J\'habite à..., kira için Le loyer est de... kullanılır.', [{ pronoun: 'Adres', form: 'J\'habite à...', example: 'J\'habite à Paris.', tr: 'Paris\'te yaşıyorum.' }, { pronoun: 'Kira', form: 'Le loyer est de...', example: 'Le loyer est de 800 euros.', tr: 'Kira 800 euro.' }, { pronoun: 'Taşınma', form: 'Je déménage', example: 'Je déménage bientôt.', tr: 'Yakında taşınıyorum.' }, { pronoun: 'Komşu', form: 'les voisins', example: 'Mes voisins sont gentils.', tr: 'Komşularım nazik.' }], 'Konut ilanlarında charges comprises ifadesi sık görünür.')],
  [SP('sp1', 'J\'habite dans un appartement.', 'Bir apartmanda yaşıyorum.', 'Konut söyle'), SP('sp2', 'Il y a trois chambres.', 'Üç oda var.', 'Oda sayısı söyle'), SP('sp3', 'Le loyer est de 700 euros.', 'Kira 700 euro.', 'Kira belirt'), SP('sp4', 'Je déménage le mois prochain.', 'Gelecek ay taşınıyorum.', 'Taşınma söyle'), SP('sp5', 'Mes voisins sont sympas.', 'Komşularım iyi.', 'Komşu anlat')],
  [DL('d1', 'Appartement', 'Apartment', [LN('A', 'm', 'Bonjour, je cherche un appartement.', 'Merhaba, bir daire arıyorum.', 'Arama başlangıcı.', [BD('je cherche', 'arıyorum', 'V', 'Temel fiil.')]), LN('B', 'f', 'Combien de pièces ?', 'Kaç oda?', 'Emlak sorusu.', [BD('pièces', 'oda', 'O', 'İlan dili.')]), LN('A', 'm', 'Deux pièces, s\'il vous plaît.', 'İki oda, lütfen.', 'Talep cümlesi.', [BD('deux pièces', 'iki oda', 'phrase', 'Miktar ifadesi.')]), LN('B', 'f', 'Le loyer est de 750 euros.', 'Kira 750 euro.', 'Fiyat bilgisi.', [BD('loyer', 'kira', 'O', 'Temel kelime.')])])],
  [LI('li1', 'Ali habite dans un appartement de deux pièces. Le loyer est de neuf cents euros.', 'Ali iki odalı bir dairede yaşıyor. Kira 900 euro.', [Q('Type ?', ['maison', 'appartement', 'hôtel', 'bureau'], 1, 'Konut tipi?'), Q('Pièces ?', ['1', '2', '3', '4'], 1, 'Oda sayısı?'), Q('Loyer ?', ['700€', '800€', '900€', '1000€'], 2, 'Kira?')])]);

const L15 = scenario('Education', mkScenarioWords([
  ['w1', 'l\'école', 'le-kol', 'okul'], ['w2', 'l\'université', 'lü-ni-ver-si-te', 'üniversite'], ['w3', 'l\'étudiant', 'le-tu-dyan', 'öğrenci'], ['w4', 'le professeur', 'luh pro-fe-sör', 'öğretmen'], ['w5', 'le cours', 'luh kur', 'ders'], ['w6', 'l\'examen', 'leg-za-mon', 'sınav'], ['w7', 'apprendre', 'a-prondr', 'öğrenmek'], ['w8', 'étudier', 'e-tu-dye', 'çalışmak'], ['w9', 'les devoirs', 'le də-vwar', 'ödevler'], ['w10', 'la classe', 'la klas', 'sınıf'], ['w11', 'l\'emploi du temps', 'lon-plwa dü ton', 'ders programı'], ['w12', 'réussir', 're-u-sir', 'geçmek']
]), [G('g1', 'Eğitim Kalıpları', 'Education phrases', 'Ders ve sınav konuşmalarında J\'étudie..., J\'ai un examen..., J\'ai réussi kalıpları sık kullanılır.', [{ pronoun: 'Okumak', form: 'J\'étudie...', example: 'J\'étudie l\'informatique.', tr: 'Bilişim okuyorum.' }, { pronoun: 'Öğrenmek', form: 'J\'apprends...', example: 'J\'apprends le français.', tr: 'Fransızca öğreniyorum.' }, { pronoun: 'Sınav', form: 'J\'ai un examen', example: 'J\'ai un examen demain.', tr: 'Yarın sınavım var.' }, { pronoun: 'Başarı', form: 'J\'ai réussi', example: 'J\'ai réussi l\'examen.', tr: 'Sınavı geçtim.' }], 'Akademik bağlamda resmi hitap yaygındır.')],
  [SP('sp1', 'J\'apprends le français.', 'Fransızca öğreniyorum.', 'Dil söyle'), SP('sp2', 'J\'étudie à l\'université.', 'Üniversitede okuyorum.', 'Durum söyle'), SP('sp3', 'J\'ai un examen la semaine prochaine.', 'Gelecek hafta sınavım var.', 'Sınavdan bahset'), SP('sp4', 'Le cours commence à neuf heures.', 'Ders dokuzda başlıyor.', 'Saat söyle'), SP('sp5', 'J\'ai réussi !', 'Geçtim!', 'Başarı söyle')],
  [DL('d1', 'À l\'université', 'At university', [LN('A', 'f', 'Tu étudies quoi ?', 'Ne okuyorsun?', 'Samimi soru.', [BD('quoi', 'ne', 'question', 'Soru kelimesi.')]), LN('B', 'm', 'J\'étudie l\'informatique.', 'Bilişim okuyorum.', 'Bölüm cevabı.', [BD('informatique', 'bilişim', 'O', 'Alan adı.')]), LN('A', 'f', 'Moi, j\'étudie la médecine.', 'Ben tıp okuyorum.', 'Karşılaştırma.', [BD('médecine', 'tıp', 'O', 'Bölüm adı.')]), LN('B', 'm', 'Bon courage pour l\'examen !', 'Sınav için başarılar!', 'İyi dilek.', [BD('Bon courage', 'başarılar', 'phrase', 'Sınav ifadesi.')])])],
  [LI('li1', 'Ali suit un cours de français les lundis et mercredis.', 'Ali pazartesi ve çarşamba Fransızca kursuna katılıyor.', [Q('Matière ?', ['maths', 'français', 'sport', 'art'], 1, 'Ders ne?'), Q('Jours ?', ['lundi-mercredi', 'mardi-jeudi', 'mercredi-vendredi', 'samedi-dimanche'], 0, 'Hangi günler?'), Q('Contexte ?', ['éducation', 'voyage', 'santé', 'travail'], 0, 'Bağlam?')])]);

const L16 = scenario('Countries', mkScenarioWords([
  ['w1', 'la France', 'la frans', 'Fransa'], ['w2', 'la Turquie', 'la tur-ki', 'Türkiye'], ['w3', 'l\'Allemagne', 'la-le-many', 'Almanya'], ['w4', 'la Suisse', 'la süis', 'İsviçre'], ['w5', 'français', 'fran-se', 'Fransız'], ['w6', 'turc', 'türk', 'Türk'], ['w7', 'Vous venez d\'où ?', 'vu və-ne du', 'Nerelisiniz?'], ['w8', 'Je viens de...', 'jə vyan də', '...den geliyorum'], ['w9', 'l\'Europe', 'lö-rop', 'Avrupa'], ['w10', 'la langue', 'la long', 'dil'], ['w11', 'anglais', 'on-gle', 'İngilizce'], ['w12', 'la capitale', 'la ka-pi-tal', 'başkent']
]), [G('g1', 'Ülkeler ve Milliyet', 'Countries & nationalities', 'Köken sormak için Vous venez d\'où?, cevap vermek için Je viens de... kullanılır.', [{ pronoun: 'Soru', form: 'Vous venez d\'où ?', example: 'Vous venez d\'où ?', tr: 'Nerelisiniz?' }, { pronoun: 'Cevap', form: 'Je viens de...', example: 'Je viens de Turquie.', tr: 'Türkiye\'den geliyorum.' }, { pronoun: 'Dil', form: 'Je parle...', example: 'Je parle turc et français.', tr: 'Türkçe ve Fransızca konuşuyorum.' }, { pronoun: 'Başkent', form: 'La capitale de ...', example: 'La capitale de la France est Paris.', tr: 'Fransa\'nın başkenti Paris\'tir.' }], 'Ülke isimlerinden önce article kullanımı önemlidir.')],
  [SP('sp1', 'Vous venez d\'où ?', 'Nerelisiniz?', 'Köken sor'), SP('sp2', 'Je viens de Turquie.', 'Türkiye\'den geliyorum.', 'Köken söyle'), SP('sp3', 'Je suis turc.', 'Türküm.', 'Milliyet söyle'), SP('sp4', 'Je parle turc et français.', 'Türkçe ve Fransızca konuşuyorum.', 'Dil söyle'), SP('sp5', 'La capitale est Ankara.', 'Başkent Ankara.', 'Başkent belirt')],
  [DL('d1', 'Origine', 'Origin', [LN('A', 'f', 'Vous venez d\'où ?', 'Nerelisiniz?', 'Resmi soru.', [BD('d\'où', 'nereden', 'question', 'Köken sorar.')]), LN('B', 'm', 'Je viens de Turquie.', 'Türkiye\'den geliyorum.', 'Cevap kalıbı.', [BD('Je viens de', '...den geliyorum', 'V', 'Temel yapı.')]), LN('A', 'f', 'Vous parlez français ?', 'Fransızca konuşuyor musunuz?', 'Dil sorusu.', [BD('parlez', 'konuşuyorsunuz', 'V', 'parler fiili.')]), LN('B', 'm', 'Un peu, j\'apprends encore.', 'Biraz, hâlâ öğreniyorum.', 'Mütevazı cevap.', [BD('Un peu', 'biraz', 'K', 'Miktar ifadesi.')])])],
  [LI('li1', 'Ali vient de Turquie et habite à Paris. Il parle turc, français et un peu anglais.', 'Ali Türkiye\'den geliyor ve Paris\'te yaşıyor. Türkçe, Fransızca ve biraz İngilizce konuşuyor.', [Q('Origine ?', ['France', 'Suisse', 'Turquie', 'Belgique'], 2, 'Nereli?'), Q('Ville actuelle ?', ['Lyon', 'Marseille', 'Paris', 'Nice'], 2, 'Şu an hangi şehirde?'), Q('Langues ?', ['1', '2', '3', '4'], 2, 'Kaç dil?')])]);

const L17 = scenario('Emotions', mkScenarioWords([
  ['w1', 'heureux', 'ö-rö', 'mutlu'], ['w2', 'triste', 'trist', 'üzgün'], ['w3', 'fatigué', 'fa-ti-ge', 'yorgun'], ['w4', 'nerveux', 'ner-vö', 'gergin'], ['w5', 'excité', 'ek-si-te', 'heyecanlı'], ['w6', 'en colère', 'on ko-ler', 'kızgın'], ['w7', 'avoir peur', 'a-vwar pör', 'korkmak'], ['w8', 'se réjouir', 'sə re-jü-ir', 'sevinmek'], ['w9', 's\'ennuyer', 'sa-nü-ye', 'sıkılmak'], ['w10', 'fier', 'fye', 'gururlu'], ['w11', 'surpris', 'sür-pri', 'şaşırmış'], ['w12', 'Je me sens...', 'jə mə son', 'Kendimi ... hissediyorum']
]), [G('g1', 'Duyguları Anlatma', 'Expressing emotions', 'Duygu anlatırken Je suis..., Je me sens... ve J\'ai peur kalıpları kullanılır.', [{ pronoun: 'Mutlu', form: 'Je suis heureux', example: 'Je suis heureux.', tr: 'Mutluyum.' }, { pronoun: 'Üzgün', form: 'Je suis triste', example: 'Je suis triste.', tr: 'Üzgünüm.' }, { pronoun: 'Korku', form: 'J\'ai peur', example: 'J\'ai peur.', tr: 'Korkuyorum.' }, { pronoun: 'Soru', form: 'Comment tu te sens ?', example: 'Comment tu te sens ?', tr: 'Nasıl hissediyorsun?' }], 'Refleksif yapılarda me/te zamirleri önemlidir.')],
  [SP('sp1', 'Je suis heureux.', 'Mutluyum.', 'Duygu söyle'), SP('sp2', 'Je suis fatigué.', 'Yorgunum.', 'Durum söyle'), SP('sp3', 'J\'ai peur.', 'Korkuyorum.', 'Korku söyle'), SP('sp4', 'Comment tu te sens ?', 'Nasıl hissediyorsun?', 'Soru sor'), SP('sp5', 'Je me sens mieux.', 'Kendimi daha iyi hissediyorum.', 'İyileşme söyle')],
  [DL('d1', 'Émotions', 'Emotions', [LN('A', 'f', 'Tu as l\'air triste.', 'Üzgün görünüyorsun.', 'Gözlem cümlesi.', [BD('avoir l\'air', 'gibi görünmek', 'V', 'Duygu betimler.')]), LN('B', 'm', 'Oui, je suis fatigué.', 'Evet, yorgunum.', 'Kısa cevap.', [BD('fatigué', 'yorgun', 'adj', 'Durum sıfatı.')]), LN('A', 'f', 'Repose-toi un peu.', 'Biraz dinlen.', 'Öneri.', [BD('Repose-toi', 'dinlen', 'V', 'Emir yapısı.')]), LN('B', 'm', 'Merci, ça m\'aide.', 'Teşekkürler, bu yardımcı oluyor.', 'Olumlu kapanış.', [BD('ça m\'aide', 'yardımcı oluyor', 'V', 'Yardım ifadesi.')])])],
  [LI('li1', 'Ali est très heureux aujourd\'hui. Il a réussi son examen et il est fier.', 'Ali bugün çok mutlu. Sınavı geçti ve gururlu.', [Q('Ali est...', ['triste', 'heureux', 'fatigué', 'malade'], 1, 'Ali nasıl?'), Q('Pourquoi ?', ['examen réussi', 'voyage', 'retard', 'pluie'], 0, 'Neden?'), Q('Sentiment final ?', ['peur', 'fierté', 'colère', 'ennui'], 1, 'Son duygu?')])]);

const L18 = scenario('Weather', mkScenarioWords([
  ['w1', 'le temps', 'luh ton', 'hava'], ['w2', 'le soleil', 'luh so-ley', 'güneş'], ['w3', 'la pluie', 'la plüi', 'yağmur'], ['w4', 'la neige', 'la nej', 'kar'], ['w5', 'le vent', 'luh von', 'rüzgar'], ['w6', 'chaud', 'şo', 'sıcak'], ['w7', 'froid', 'frwa', 'soğuk'], ['w8', 'Quel temps fait-il ?', 'kel ton fe-til', 'Hava nasıl?'], ['w9', 'Il pleut.', 'il plö', 'Yağmur yağıyor.'], ['w10', 'Il neige.', 'il nej', 'Kar yağıyor.'], ['w11', 'nuageux', 'nüa-jö', 'bulutlu'], ['w12', 'le parapluie', 'luh pa-ra-plüi', 'şemsiye']
]), [G('g1', 'Hava Durumu', 'Weather', 'Hava cümlelerinde Il fait..., Il pleut, Il neige yapıları kullanılır.', [{ pronoun: 'Soru', form: 'Quel temps fait-il ?', example: 'Quel temps fait-il aujourd\'hui ?', tr: 'Bugün hava nasıl?' }, { pronoun: 'Sıcak', form: 'Il fait chaud', example: 'Il fait chaud.', tr: 'Hava sıcak.' }, { pronoun: 'Soğuk', form: 'Il fait froid', example: 'Il fait froid.', tr: 'Hava soğuk.' }, { pronoun: 'Yağmur', form: 'Il pleut', example: 'Il pleut.', tr: 'Yağmur yağıyor.' }], 'Il + fiil yapısı hava durumunda çok temel bir kalıptır.')],
  [SP('sp1', 'Quel temps fait-il ?', 'Hava nasıl?', 'Soru sor'), SP('sp2', 'Il fait chaud et ensoleillé.', 'Hava sıcak ve güneşli.', 'Havayı anlat'), SP('sp3', 'Il pleut, prends un parapluie.', 'Yağmur yağıyor, şemsiye al.', 'Tavsiye ver'), SP('sp4', 'Il fait très froid.', 'Hava çok soğuk.', 'Soğuk söyle'), SP('sp5', 'Demain, il va neiger.', 'Yarın kar yağacak.', 'Tahmin söyle')],
  [DL('d1', 'Météo', 'Weather talk', [LN('A', 'm', 'Quel temps fait-il aujourd\'hui ?', 'Bugün hava nasıl?', 'Klasik soru.', [BD('Quel temps', 'hangi hava', 'question', 'Sohbet açar.')]), LN('B', 'f', 'Il fait froid et nuageux.', 'Hava soğuk ve bulutlu.', 'Sıfat kullanımı.', [BD('nuageux', 'bulutlu', 'adj', 'Hava sıfatı.')]), LN('A', 'm', 'Alors, je prends une veste.', 'O zaman bir ceket alıyorum.', 'Plan cümlesi.', [BD('je prends', 'alıyorum', 'V', 'Karar ifadesi.')]), LN('B', 'f', 'Bonne idée, et un parapluie aussi.', 'İyi fikir, bir de şemsiye.', 'Ek öneri.', [BD('Bonne idée', 'iyi fikir', 'phrase', 'Onay cümlesi.')])])],
  [LI('li1', 'Aujourd\'hui, il fait vingt degrés et il y a du soleil. Demain, il pleut.', 'Bugün 20 derece ve güneş var. Yarın yağmur var.', [Q('Aujourd\'hui ?', ['pluie', 'soleil', 'neige', 'vent'], 1, 'Bugün hava?'), Q('Demain ?', ['soleil', 'pluie', 'neige', 'orage'], 1, 'Yarın hava?'), Q('Température ?', ['10', '15', '20', '25'], 2, 'Sıcaklık kaç?')])]);

const L19 = scenario('Entertainment', mkScenarioWords([
  ['w1', 'le hobby', 'luh ho-bi', 'hobi'], ['w2', 'lire', 'lir', 'okumak'], ['w3', 'écouter de la musique', 'e-ku-te də la mü-zik', 'müzik dinlemek'], ['w4', 'faire du sport', 'fer dü spor', 'spor yapmak'], ['w5', 'cuisiner', 'kwi-zi-ne', 'yemek yapmak'], ['w6', 'voyager', 'vwa-ya-je', 'seyahat etmek'], ['w7', 'le film', 'luh film', 'film'], ['w8', 'le concert', 'luh kon-ser', 'konser'], ['w9', 'le musée', 'luh mü-ze', 'müze'], ['w10', 'jouer', 'jwe', 'oynamak'], ['w11', 'faire de la randonnée', 'fer də la ran-do-ne', 'yürüyüş yapmak'], ['w12', 'photographier', 'fo-to-gra-fye', 'fotoğraf çekmek']
]), [G('g1', 'Hobi Konuşmaları', 'Hobbies', 'Boş zaman konuşmalarında J\'aime..., Je fais..., Ça te dit...? kalıpları kullanılır.', [{ pronoun: 'Hobi', form: 'Mon hobby est...', example: 'Mon hobby est lire.', tr: 'Hobim okumak.' }, { pronoun: 'Sevme', form: 'J\'aime...', example: 'J\'aime voyager.', tr: 'Seyahat etmeyi seviyorum.' }, { pronoun: 'Teklif', form: 'Ça te dit... ?', example: 'Ça te dit un film ?', tr: 'Film ister misin?' }, { pronoun: 'Hafta sonu', form: 'Le week-end...', example: 'Le week-end, je fais du sport.', tr: 'Hafta sonu spor yaparım.' }], 'Fransızcada loisir/hobby bağlamında faire fiili çok geçer.')],
  [SP('sp1', 'Mon hobby est lire.', 'Hobim okumak.', 'Hobini söyle'), SP('sp2', 'J\'aime faire du sport.', 'Spor yapmayı severim.', 'Spor söyle'), SP('sp3', 'Ça te dit un concert ?', 'Konsere var mısın?', 'Etkinlik teklif et'), SP('sp4', 'Je m\'intéresse à la musique.', 'Müzikle ilgileniyorum.', 'İlgi alanı söyle'), SP('sp5', 'Le week-end, je voyage.', 'Hafta sonu seyahat ederim.', 'Plan söyle')],
  [DL('d1', 'Loisirs', 'Free time', [LN('A', 'f', 'Tu fais quoi ce week-end ?', 'Bu hafta sonu ne yapıyorsun?', 'Boş zaman sorusu.', [BD('ce week-end', 'bu hafta sonu', 'time', 'Zaman ifadesi.')]), LN('B', 'm', 'Je vais au musée et je lis.', 'Müzeye gidiyorum ve okuyorum.', 'Plan cevabı.', [BD('musée', 'müze', 'O', 'Kültür etkinliği.')]), LN('A', 'f', 'Super, on va au cinéma après ?', 'Harika, sonra sinemaya gidelim mi?', 'Teklif.', [BD('on va', 'gidelim', 'V', 'Birlikte plan.')]), LN('B', 'm', 'Oui, avec plaisir !', 'Evet, memnuniyetle!', 'Kabul.', [BD('avec plaisir', 'memnuniyetle', 'phrase', 'Pozitif cevap.')])])],
  [LI('li1', 'Samedi, Ali va au musée. Le soir, il écoute de la musique et lit un livre.', 'Cumartesi Ali müzeye gidiyor. Akşam müzik dinliyor ve kitap okuyor.', [Q('Samedi ?', ['musée', 'hôpital', 'gare', 'bureau'], 0, 'Cumartesi nereye?'), Q('Le soir ?', ['sport', 'musique et lecture', 'travail', 'voyage'], 1, 'Akşam ne yapıyor?'), Q('Thème ?', ['hobbies', 'santé', 'finance', 'histoire'], 0, 'Konu ne?')])]);

const L20 = scenario('Daily Conversation',
  mkScenarioWords([
    ['w1', 'Bonjour !', 'bon-jur', 'İyi günler!'], ['w2', 'Comment allez-vous ?', 'ko-mon-ta-le-vu', 'Nasılsınız?'], ['w3', 'Je vais bien.', 'jə ve byan', 'İyiyim.'],
    ['w4', 'Pardon', 'par-don', 'Pardon'], ['w5', 'Pas de problème', 'pa də pro-blem', 'Sorun değil'], ['w6', 'Bien sûr', 'byan sür', 'Tabii ki'],
    ['w7', 'Vous comprenez ?', 'vu kom-prə-ne', 'Anlıyor musunuz?'], ['w8', 'Je ne comprends pas.', 'jə nə kom-pran pa', 'Anlamıyorum.'],
    ['w9', 'Pouvez-vous répéter ?', 'pu-ve-vu re-pe-te', 'Tekrar edebilir misiniz?'], ['w10', 'Lentement, s\'il vous plaît.', 'lon-tə-mon sil vu ple', 'Yavaş, lütfen.'],
    ['w11', 'Un moment, s\'il vous plaît.', 'un mo-mon sil vu ple', 'Bir dakika, lütfen.'], ['w12', 'D\'accord !', 'da-kor', 'Tamam!']
  ]),
  [G('g1', 'Günlük Konuşma', 'Daily conversation',
    'Bu ders günlük hayatta en çok geçen kısa kalıpları bir araya getirir. Anlamadığında tekrar istemek ve kibarca konuşmak hedeflenir.',
    [{ pronoun: 'Selam', form: 'Bonjour', example: 'Bonjour !', tr: 'Merhaba!' },
     { pronoun: 'Anlama', form: 'Je ne comprends pas', example: 'Je ne comprends pas.', tr: 'Anlamıyorum.' },
     { pronoun: 'Tekrar', form: 'Pouvez-vous répéter ?', example: 'Pouvez-vous répéter ?', tr: 'Tekrar eder misiniz?' },
     { pronoun: 'Onay', form: 'D\'accord', example: 'D\'accord, merci.', tr: 'Tamam, teşekkürler.' }],
    'Yavaş konuşma talebi öğrenme sürecinde en kritik kalıplardan biridir.')],
  [SP('sp1', 'Pardon, je ne comprends pas.', 'Pardon, anlamıyorum.', 'Anlamadığını söyle'), SP('sp2', 'Pouvez-vous parler lentement ?', 'Yavaş konuşabilir misiniz?', 'Yavaş konuş iste'),
   SP('sp3', 'D\'accord, merci.', 'Tamam, teşekkürler.', 'Onayla'), SP('sp4', 'Bonne journée !', 'İyi günler!', 'Kibar bitir'),
   SP('sp5', 'Ravi de vous rencontrer.', 'Tanıştığımıza memnun oldum.', 'Tanışma söyle')],
  [DL('d1', 'Situation quotidienne', 'Daily situation', [
    LN('A', 'm', 'Bonjour, comment allez-vous ?', 'Merhaba, nasılsınız?', 'Günlük selam.', [BD('Bonjour', 'merhaba', 'greeting', 'Temel açılış.')]),
    LN('B', 'f', 'Je vais bien, merci. Et vous ?', 'İyiyim, teşekkürler. Ya siz?', 'Standart cevap.', [BD('Je vais bien', 'iyiyim', 'phrase', 'Kısa cevap.')]),
    LN('A', 'm', 'Pardon, pouvez-vous répéter ?', 'Pardon, tekrar eder misiniz?', 'Tekrar isteme.', [BD('répéter', 'tekrar etmek', 'V', 'Öğrenme kalıbı.')]),
    LN('B', 'f', 'Bien sûr, lentement.', 'Tabii ki, yavaşça.', 'Destekleyici cevap.', [BD('Bien sûr', 'tabii ki', 'phrase', 'Nazik onay.')])
  ])],
  [LI('li1', 'Ali apprend le français. Quand il ne comprend pas, il dit: Pardon, pouvez-vous répéter, s\'il vous plaît ?',
    'Ali Fransızca öğreniyor. Anlamadığında: Pardon, tekrar eder misiniz, lütfen? diyor.',
    [Q('Ali apprend...', ['anglais', 'français', 'allemand', 'espagnol'], 1, 'Ali ne öğreniyor?'),
     Q('Quand il ne comprend pas, il dit...', ['merci', 'bonjour', 'pardon, répéter', 'au revoir'], 2, 'Anlamadığında ne diyor?'),
     Q('Objectif ?', ['politesse et communication', 'sport', 'voyage', 'cuisine'], 0, 'Amaç ne?')])]
);

const VOCAB = {
  21: ['Verbes de base', [
    ['être', 'etr', 'olmak'], ['avoir', 'a-vwar', 'sahip olmak'], ['faire', 'fer', 'yapmak'], ['aller', 'a-le', 'gitmek'],
    ['venir', 'və-nir', 'gelmek'], ['voir', 'vwar', 'görmek'], ['savoir', 'sa-vwar', 'bilmek'], ['vouloir', 'vu-lwar', 'istemek'],
    ['pouvoir', 'pu-vwar', '-ebilmek'], ['devoir', 'də-vwar', 'zorunda olmak'], ['prendre', 'prondr', 'almak'], ['donner', 'do-ne', 'vermek']
  ]],
  22: ['Adjectifs', [
    ['grand', 'gron', 'büyük'], ['petit', 'pəti', 'küçük'], ['bon', 'bon', 'iyi'], ['mauvais', 'mo-ve', 'kötü'],
    ['nouveau', 'nu-vo', 'yeni'], ['ancien', 'an-syen', 'eski'], ['rapide', 'ra-pid', 'hızlı'], ['lent', 'lon', 'yavaş'],
    ['facile', 'fa-sil', 'kolay'], ['difficile', 'di-fi-sil', 'zor'], ['important', 'an-por-tan', 'önemli'], ['intéressant', 'an-te-re-san', 'ilginç']
  ]],
  23: ['Personnes', [
    ['l\'homme', 'lom', 'adam'], ['la femme', 'la fam', 'kadın'], ['l\'enfant', 'lan-fan', 'çocuk'], ['le père', 'luh per', 'baba'],
    ['la mère', 'la mer', 'anne'], ['le frère', 'luh frer', 'erkek kardeş'], ['la sœur', 'la sör', 'kız kardeş'], ['l\'ami', 'la-mi', 'arkadaş'],
    ['la famille', 'la fa-miy', 'aile'], ['le voisin', 'luh vwa-zan', 'komşu'], ['le collègue', 'luh ko-leg', 'iş arkadaşı'], ['le professeur', 'luh pro-fe-sör', 'öğretmen']
  ]],
  24: ['Ville', [
    ['la ville', 'la vil', 'şehir'], ['la rue', 'la rü', 'sokak'], ['la place', 'la plas', 'meydan'], ['le marché', 'luh mar-şe', 'pazar'],
    ['la banque', 'la bonk', 'banka'], ['la poste', 'la post', 'postane'], ['l\'hôpital', 'lo-pi-tal', 'hastane'], ['la gare', 'la gar', 'istasyon'],
    ['le parc', 'luh park', 'park'], ['le musée', 'luh mü-ze', 'müze'], ['le restaurant', 'luh res-to-ran', 'restoran'], ['la bibliothèque', 'la bi-bli-yo-tek', 'kütüphane']
  ]],
  25: ['Nourriture', [
    ['le pain', 'luh pan', 'ekmek'], ['le fromage', 'luh fro-maj', 'peynir'], ['la soupe', 'la sup', 'çorba'], ['la salade', 'la sa-lad', 'salata'],
    ['le poisson', 'luh pwa-son', 'balık'], ['le poulet', 'luh pu-le', 'tavuk'], ['la pomme', 'la pom', 'elma'], ['la tomate', 'la to-mat', 'domates'],
    ['le café', 'luh ka-fe', 'kahve'], ['le thé', 'luh te', 'çay'], ['l\'eau', 'lo', 'su'], ['le dessert', 'luh de-ser', 'tatlı']
  ]],
  26: ['Couleurs', [
    ['rouge', 'ruj', 'kırmızı'], ['bleu', 'blö', 'mavi'], ['vert', 'ver', 'yeşil'], ['jaune', 'jon', 'sarı'],
    ['noir', 'nwar', 'siyah'], ['blanc', 'blan', 'beyaz'], ['gris', 'gri', 'gri'], ['marron', 'ma-ron', 'kahverengi'],
    ['orange', 'o-ranj', 'turuncu'], ['rose', 'roz', 'pembe'], ['violet', 'vyo-le', 'mor'], ['clair', 'kler', 'açık renk']
  ]],
  27: ['Temps', [
    ['aujourd\'hui', 'o-jur-dwi', 'bugün'], ['demain', 'duh-man', 'yarın'], ['hier', 'yi-er', 'dün'], ['maintenant', 'man-te-nan', 'şimdi'],
    ['plus tard', 'plü tar', 'sonra'], ['toujours', 'tu-jur', 'her zaman'], ['souvent', 'su-van', 'sık sık'], ['parfois', 'par-fwa', 'bazen'],
    ['jamais', 'ja-me', 'asla'], ['tôt', 'to', 'erken'], ['tard', 'tar', 'geç'], ['bientôt', 'byen-to', 'yakında']
  ]],
  28: ['Sport', [
    ['le sport', 'luh spor', 'spor'], ['le football', 'luh fut-bol', 'futbol'], ['le basket', 'luh bas-ket', 'basketbol'], ['le tennis', 'luh te-nis', 'tenis'],
    ['nager', 'na-je', 'yüzmek'], ['courir', 'ku-rir', 'koşmak'], ['marcher', 'mar-şe', 'yürümek'], ['s\'entraîner', 'san-tre-ne', 'antrenman yapmak'],
    ['gagner', 'ga-nye', 'kazanmak'], ['perdre', 'perdr', 'kaybetmek'], ['l\'équipe', 'le-kip', 'takım'], ['le match', 'luh maç', 'maç']
  ]],
  29: ['Travail', [
    ['le bureau', 'luh bü-ro', 'ofis'], ['la réunion', 'la re-yün-yon', 'toplantı'], ['le salaire', 'luh sa-ler', 'maaş'], ['le contrat', 'luh kon-tra', 'sözleşme'],
    ['travailler', 'tra-va-ye', 'çalışmak'], ['envoyer', 'an-vwa-ye', 'göndermek'], ['répondre', 're-pondr', 'cevaplamak'], ['planifier', 'pla-ni-fye', 'planlamak'],
    ['le projet', 'luh pro-je', 'proje'], ['le client', 'luh kli-yan', 'müşteri'], ['le collègue', 'luh ko-leg', 'iş arkadaşı'], ['l\'entreprise', 'lan-tre-priz', 'şirket']
  ]],
  30: ['Voyage', [
    ['le voyage', 'luh vwa-yaj', 'seyahat'], ['le passeport', 'luh pas-por', 'pasaport'], ['la valise', 'la va-liz', 'bavul'], ['le billet', 'luh bi-ye', 'bilet'],
    ['l\'hôtel', 'lo-tel', 'otel'], ['l\'aéroport', 'la-e-ro-por', 'havaalanı'], ['la frontière', 'la fron-tyer', 'sınır'], ['le guide', 'luh gid', 'rehber'],
    ['la carte', 'la kart', 'harita'], ['la plage', 'la plaj', 'plaj'], ['la montagne', 'la mon-tany', 'dağ'], ['la visite', 'la vi-zit', 'gezi']
  ]],
  31: ['Maison', [
    ['la maison', 'la me-zon', 'ev'], ['l\'appartement', 'la-par-te-mon', 'daire'], ['la cuisine', 'la kwi-zin', 'mutfak'], ['la chambre', 'la şambr', 'oda'],
    ['le salon', 'luh sa-lon', 'oturma odası'], ['la salle de bain', 'la sal də ben', 'banyo'], ['la porte', 'la port', 'kapı'], ['la fenêtre', 'la fe-netr', 'pencere'],
    ['la table', 'la tabl', 'masa'], ['la chaise', 'la şez', 'sandalye'], ['le lit', 'luh li', 'yatak'], ['le jardin', 'luh jar-dan', 'bahçe']
  ]],
  32: ['Vêtements', [
    ['la chemise', 'la şə-miz', 'gömlek'], ['la robe', 'la rob', 'elbise'], ['le pantalon', 'luh pan-ta-lon', 'pantolon'], ['la veste', 'la vest', 'ceket'],
    ['le manteau', 'luh man-to', 'mont'], ['les chaussures', 'le şo-sür', 'ayakkabı'], ['les chaussettes', 'le şo-set', 'çorap'], ['le chapeau', 'luh şa-po', 'şapka'],
    ['le foulard', 'luh fu-lar', 'atkı'], ['le pull', 'luh pül', 'kazak'], ['essayer', 'e-se-ye', 'denemek'], ['porter', 'por-te', 'giymek']
  ]],
  33: ['Nature', [
    ['la nature', 'la na-tür', 'doğa'], ['la forêt', 'la fo-re', 'orman'], ['l\'arbre', 'larbr', 'ağaç'], ['la fleur', 'la flör', 'çiçek'],
    ['la rivière', 'la ri-vyer', 'nehir'], ['la mer', 'la mer', 'deniz'], ['le lac', 'luh lak', 'göl'], ['la pluie', 'la plüi', 'yağmur'],
    ['la neige', 'la nej', 'kar'], ['le vent', 'luh von', 'rüzgar'], ['le ciel', 'luh syel', 'gökyüzü'], ['protéger', 'pro-te-je', 'korumak']
  ]],
  34: ['Argent', [
    ['l\'argent', 'lar-jan', 'para'], ['l\'euro', 'lö-ro', 'euro'], ['le prix', 'luh pri', 'fiyat'], ['payer', 'pe-ye', 'ödemek'],
    ['économiser', 'e-ko-no-mi-ze', 'tasarruf etmek'], ['dépenser', 'de-pan-se', 'harcamak'], ['le compte', 'luh kont', 'hesap'], ['la carte', 'la kart', 'kart'],
    ['la facture', 'la fak-tür', 'fatura'], ['la réduction', 'la re-dük-syon', 'indirim'], ['le salaire', 'luh sa-ler', 'maaş'], ['la dette', 'la det', 'borç']
  ]],
  35: ['Science', [
    ['la science', 'la syans', 'bilim'], ['la recherche', 'la re-şerş', 'araştırma'], ['l\'expérience', 'lek-spe-riyans', 'deney'], ['la théorie', 'la te-o-ri', 'teori'],
    ['la preuve', 'la pröv', 'kanıt'], ['l\'hypothèse', 'li-po-tez', 'hipotez'], ['le laboratoire', 'luh la-bo-ra-twar', 'laboratuvar'], ['la chimie', 'la şi-mi', 'kimya'],
    ['la physique', 'la fi-zik', 'fizik'], ['la biologie', 'la bi-yo-lo-ji', 'biyoloji'], ['analyser', 'a-na-li-ze', 'analiz etmek'], ['découvrir', 'de-ku-vrir', 'keşfetmek']
  ]],
  36: ['Art', [
    ['l\'art', 'lar', 'sanat'], ['la culture', 'la kül-tür', 'kültür'], ['le musée', 'luh mü-ze', 'müze'], ['la galerie', 'la ga-le-ri', 'galeri'],
    ['la peinture', 'la pan-tür', 'resim'], ['la sculpture', 'la skül-tür', 'heykel'], ['l\'artiste', 'lar-tist', 'sanatçı'], ['l\'exposition', 'lek-spo-zi-syon', 'sergi'],
    ['le concert', 'luh kon-ser', 'konser'], ['le théâtre', 'luh te-atr', 'tiyatro'], ['la musique', 'la mü-zik', 'müzik'], ['la littérature', 'la li-te-ra-tür', 'edebiyat']
  ]],
  37: ['Mots interrogatifs', [
    ['qui', 'ki', 'kim'], ['quoi', 'kwa', 'ne'], ['où', 'u', 'nerede'], ['quand', 'kan', 'ne zaman'],
    ['comment', 'ko-man', 'nasıl'], ['pourquoi', 'pur-kwa', 'neden'], ['combien', 'kon-byan', 'ne kadar'], ['lequel', 'lə-kel', 'hangisi'],
    ['d\'où', 'du', 'nereden'], ['à qui', 'a ki', 'kime'], ['de quoi', 'də kwa', 'neden / hangi şeyden'], ['avec quoi', 'a-vek kwa', 'ne ile']
  ]],
  38: ['Métiers', [
    ['le médecin', 'luh med-sen', 'doktor'], ['l\'enseignant', 'lan-se-nyan', 'öğretmen'], ['l\'ingénieur', 'lan-je-nyör', 'mühendis'], ['le cuisinier', 'luh kwi-zi-nye', 'aşçı'],
    ['le serveur', 'luh ser-vör', 'garson'], ['le policier', 'luh po-li-sye', 'polis'], ['l\'avocat', 'la-vo-ka', 'avukat'], ['l\'architecte', 'lar-şi-tekt', 'mimar'],
    ['le mécanicien', 'luh me-ka-ni-syen', 'mekanikçi'], ['l\'électricien', 'le-lek-tri-syen', 'elektrikçi'], ['le développeur', 'luh de-vlo-pör', 'yazılımcı'], ['le pilote', 'luh pi-lot', 'pilot']
  ]],
  39: ['Opinion', [
    ['penser', 'pan-se', 'düşünmek'], ['croire', 'krwar', 'inanmak'], ['trouver', 'tru-ve', 'bulmak / düşünmek'], ['comprendre', 'kom-prondr', 'anlamak'],
    ['être d\'accord', 'etr da-kor', 'katılmak'], ['être contre', 'etr kontr', 'karşı olmak'], ['discuter', 'dis-kü-te', 'tartışmak'], ['argumenter', 'ar-gü-mon-te', 'argüman sunmak'],
    ['convaincre', 'kon-van-kr', 'ikna etmek'], ['l\'opinion', 'lo-pi-nyon', 'görüş'], ['peut-être', 'pö-tetr', 'belki'], ['certainement', 'ser-ten-mon', 'kesinlikle']
  ]],
  40: ['Animaux', [
    ['le chien', 'luh şyan', 'köpek'], ['le chat', 'luh şa', 'kedi'], ['le cheval', 'luh şə-val', 'at'], ['la vache', 'la vaş', 'inek'],
    ['le mouton', 'luh mu-ton', 'koyun'], ['la chèvre', 'la şevr', 'keçi'], ['l\'oiseau', 'lwa-zo', 'kuş'], ['le lion', 'luh li-yon', 'aslan'],
    ['l\'éléphant', 'le-le-fan', 'fil'], ['le poisson', 'luh pwa-son', 'balık'], ['l\'abeille', 'la-bey', 'arı'], ['le lapin', 'luh la-pan', 'tavşan']
  ]],
  41: ['Santé', [
    ['la santé', 'la son-te', 'sağlık'], ['malade', 'ma-lad', 'hasta'], ['en bonne santé', 'on bon son-te', 'sağlıklı'], ['la douleur', 'la du-lör', 'ağrı'],
    ['la fièvre', 'la fyevğ', 'ateş'], ['la toux', 'la tu', 'öksürük'], ['l\'allergie', 'la-ler-ji', 'alerji'], ['le médicament', 'luh me-di-ka-mon', 'ilaç'],
    ['l\'ordonnance', 'lor-do-nans', 'reçete'], ['la pharmacie', 'la far-ma-si', 'eczane'], ['l\'urgence', 'lür-jans', 'acil durum'], ['guérir', 'ge-rir', 'iyileşmek']
  ]],
  42: ['Académique', [
    ['l\'université', 'lü-ni-ver-si-te', 'üniversite'], ['le séminaire', 'luh se-mi-ner', 'seminer'], ['l\'examen', 'leg-za-mon', 'sınav'], ['le devoir', 'luh də-vwar', 'ödev'],
    ['la thèse', 'la tez', 'tez'], ['le professeur', 'luh pro-fe-sör', 'profesör'], ['l\'étudiant', 'le-tu-dyan', 'öğrenci'], ['le semestre', 'luh sə-mestr', 'dönem'],
    ['réussir', 're-u-sir', 'geçmek'], ['échouer', 'e-şu-e', 'kalmak'], ['rechercher', 're-şer-şe', 'araştırmak'], ['résumer', 're-zü-me', 'özetlemek']
  ]],
  43: ['Technologie', [
    ['l\'ordinateur', 'lor-di-na-tör', 'bilgisayar'], ['le smartphone', 'luh smart-fon', 'akıllı telefon'], ['internet', 'en-ter-net', 'internet'], ['le mot de passe', 'luh mo də pas', 'şifre'],
    ['se connecter', 'sə ko-nek-te', 'giriş yapmak'], ['télécharger', 'te-le-şar-je', 'indirmek'], ['installer', 'en-sta-le', 'kurmak'], ['mettre à jour', 'metr a jur', 'güncellemek'],
    ['le fichier', 'luh fi-şye', 'dosya'], ['la base de données', 'la baz də do-ne', 'veritabanı'], ['l\'algorithme', 'lal-go-ritm', 'algoritma'], ['l\'intelligence artificielle', 'lan-te-li-jans ar-ti-fi-syel', 'yapay zeka']
  ]],
  44: ['Expressions sociales', [
    ['Félicitations !', 'fe-li-si-ta-syon', 'Tebrikler!'], ['Bon appétit !', 'bon a-pe-ti', 'Afiyet olsun!'], ['Santé !', 'son-te', 'Şerefe!'], ['Bienvenue !', 'byen-və-nü', 'Hoş geldiniz!'],
    ['Bonne chance !', 'bon şans', 'Başarılar!'], ['Bon voyage !', 'bon vwa-yaj', 'İyi yolculuklar!'], ['Je suis désolé.', 'jə swi de-zo-le', 'Üzgünüm.'], ['Pas de problème.', 'pa də pro-blem', 'Sorun değil.'],
    ['Merci beaucoup.', 'mer-si bo-ku', 'Çok teşekkürler.'], ['Avec plaisir.', 'a-vek ple-zir', 'Memnuniyetle.'], ['À bientôt !', 'a byen-to', 'Yakında görüşürüz!'], ['Bonne journée !', 'bon jur-ne', 'İyi günler!']
  ]],
  45: ['Géographie', [
    ['le monde', 'luh mond', 'dünya'], ['le continent', 'luh kon-ti-non', 'kıta'], ['l\'Europe', 'lö-rop', 'Avrupa'], ['l\'Asie', 'la-zi', 'Asya'],
    ['l\'Afrique', 'la-frik', 'Afrika'], ['l\'océan', 'lo-se-an', 'okyanus'], ['la capitale', 'la ka-pi-tal', 'başkent'], ['la frontière', 'la fron-tyer', 'sınır'],
    ['la carte', 'la kart', 'harita'], ['la planète', 'la pla-net', 'gezegen'], ['la région', 'la re-jyon', 'bölge'], ['le pays', 'luh pe-i', 'ülke']
  ]],
  46: ['Verbes d\'action', [
    ['marcher', 'mar-şe', 'yürümek'], ['courir', 'ku-rir', 'koşmak'], ['sauter', 'so-te', 'zıplamak'], ['grimper', 'gran-pe', 'tırmanmak'],
    ['lancer', 'lan-se', 'atmak'], ['attraper', 'a-tra-pe', 'yakalamak'], ['ouvrir', 'u-vrir', 'açmak'], ['fermer', 'fer-me', 'kapatmak'],
    ['construire', 'kon-strü-ir', 'inşa etmek'], ['réparer', 're-pa-re', 'tamir etmek'], ['couper', 'ku-pe', 'kesmek'], ['mélanger', 'me-lan-je', 'karıştırmak']
  ]],
  47: ['Histoire', [
    ['l\'histoire', 'lis-twar', 'tarih'], ['le passé', 'luh pa-se', 'geçmiş'], ['le présent', 'luh pre-zan', 'şimdi'], ['l\'avenir', 'la-və-nir', 'gelecek'],
    ['la guerre', 'la ger', 'savaş'], ['la paix', 'la pe', 'barış'], ['la révolution', 'la re-vo-lü-syon', 'devrim'], ['la démocratie', 'la de-mo-kra-si', 'demokrasi'],
    ['la liberté', 'la li-ber-te', 'özgürlük'], ['la société', 'la so-sye-te', 'toplum'], ['la tradition', 'la tra-di-syon', 'gelenek'], ['voter', 'vo-te', 'oy vermek']
  ]],
  48: ['Expressions idiomatiques', [
    ['Ça marche.', 'sa marş', 'Tamam / olur.'], ['Ce n\'est pas mon problème.', 'sə ne pa mon pro-blem', 'Bu benim sorunum değil.'], ['Je ne comprends rien.', 'jə nə kom-pran ryan', 'Hiçbir şey anlamıyorum.'], ['C\'est la vie.', 'se la vi', 'Hayat bu.'],
    ['Pas grave.', 'pa grav', 'Sorun değil.'], ['Bon courage !', 'bon ku-raj', 'Kolay gelsin!'], ['On verra.', 'on ve-ra', 'Bakacağız.'], ['Petit à petit.', 'pə-ti ta pə-ti', 'Yavaş yavaş.'],
    ['Ne t\'inquiète pas.', 'nə tan-kiet pa', 'Endişelenme.'], ['Garder son calme.', 'gar-de son kalm', 'Sakin kalmak.'], ['À tout à l\'heure.', 'a tu ta lör', 'Birazdan görüşürüz.'], ['Ça ira.', 'sa i-ra', 'Düzelecek.']
  ]],
  49: ['Révision avancée', [
    ['bien que', 'byen kə', '...e rağmen'], ['pourtant', 'pur-tan', 'yine de'], ['donc', 'donk', 'bu yüzden'], ['cependant', 'sə-pan-dan', 'ancak'],
    ['de plus', 'də plü', 'ayrıca'], ['soit... soit', 'swa... swa', 'ya... ya da'], ['ni... ni', 'ni... ni', 'ne... ne de'], ['dès que', 'de kə', 'olur olmaz'],
    ['avant que', 'a-van kə', '...den önce'], ['après que', 'a-pre kə', '...den sonra'], ['pendant que', 'pan-dan kə', '...iken'], ['malgré', 'mal-gre', '...e rağmen']
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
  2: ['Articles & être', L2],
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

console.log(`\n✓ Generated ${created}/49 French lesson files in ${OUT_DIR}`);
if (errors.length) {
  console.error('\nErrors:');
  errors.forEach(({ n, error }) => console.error(`  ders${n}.js: ${error}`));
} else {
  console.log('No errors.');
}
console.log('\nFiles: ders1.js – ders49.js');

