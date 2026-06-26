#!/usr/bin/env node
/**
 * Generates Turkish lesson files ders1.js – ders49.js
 * Run: node tools/gen-turkish-lessons.mjs
 */
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '../languages/tr/lessons');
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

function render(n, title, data, langLabel, tag = 'beginner') {
  return `// ders${n}.js — ${langLabel} Lesson ${n}: ${title} (${tag})\nconst L${n} = ${ser(data, 0)};\nLESSONS[${n}] = L${n};\n`;
}

function mkScenarioWords(list) {
  return list.map(([id, en, ro, tr, o = {}], i) => W(id || `w${i + 1}`, en, ro, tr, o));
}

function buildVocabLesson(title, entries) {
  const words = entries.map(([en, ro, tr], i) => W(`w${i + 1}`, en, ro, tr));
  return vocab(title, words);
}

function mkWords(rows) {
  return rows.map(([en, ro, tr], i) => [null, en, ro, tr, i === 0 ? { tip: 'Temel kelime.', ctx: 'Günlük kullanım.' } : {}]);
}

function mkSimple(title, rows, sampleEn, sampleTr) {
  const words = mkScenarioWords(mkWords(rows));
  const w0 = rows[0][0];
  const t0 = rows[0][2];
  return scenario(
    title,
    words,
    [
      G(
        'g1',
        `${title} — Temel`,
        `${title} — Basics`,
        `Bu derste ${title} alanında sık kullanılan ifadeleri öğreniyorsun. Açıklamalar Türkçe verilir. Ali erkek öğrenci olarak örnek cümleleri kullanır.`,
        [
          { pronoun: 'Örnek 1', form: rows[0][0], example: rows[0][0], tr: rows[0][2] },
          { pronoun: 'Örnek 2', form: rows[1][0], example: rows[1][0], tr: rows[1][2] }
        ],
        'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
      )
    ],
    [
      SP('sp1', rows[0][0], rows[0][2], 'İfade et'),
      SP('sp2', rows[1][0], rows[1][2], 'Kullan'),
      SP('sp3', rows[2][0], rows[2][2], 'Cümle kur'),
      SP('sp4', rows[3][0], rows[3][2], 'Soru sor'),
      SP('sp5', rows[4][0], rows[4][2], 'Konuşma pratiği')
    ],
    [
      DL('d1', title, title, [
        LN('A', 'm', rows[0][0], rows[0][2], 'Ali konuşuyor.', [BD(rows[0][1], rows[0][2], 'phrase', 'Örnek kullanım.')]),
        LN('B', 'f', rows[1][0], rows[1][2], 'Karşılık.', [BD(rows[1][1], rows[1][2], 'phrase', 'Doğal cevap.')]),
        LN('A', 'm', rows[2][0], rows[2][2], null, []),
        LN('B', 'f', rows[3][0], rows[3][2], null, [])
      ])
    ],
    [
      LI('li1', sampleEn, sampleTr, [
        Q('Doğru ifade hangisi?', [rows[0][0], rows[1][0], rows[2][0], rows[3][0]], 0, 'Doğru kelimeyi seç.'),
        Q('İkinci doğru seçenek hangisi?', [rows[1][0], rows[2][0], rows[3][0], rows[4][0]], 1, 'İkinci ifadeyi seç.')
      ])
    ]
  );
}

const LANG_META = { label: 'Turkish', l2: 'Ekler & -de/-da' };

const LEX = {
  hello: { en: 'Merhaba', ro: 'mer-ha-ba', tr: 'hello' },
  goodMorning: { en: 'Günaydın', ro: 'gue-naidun', tr: 'good morning' },
  goodEvening: { en: 'İyi akşamlar', ro: 'ii ak-sham-lar', tr: 'good evening' },
  bye: { en: 'Hoşça kal', ro: 'hosh-cha kal', tr: 'goodbye' },
  thanks: { en: 'Teşekkürler', ro: 'te-shek-kuer-ler', tr: 'thanks' },
  please: { en: 'Lütfen', ro: 'luet-fen', tr: 'please' },
  yes: { en: 'Evet', ro: 'e-vet', tr: 'yes' },
  no: { en: 'Hayır', ro: 'ha-yuhr', tr: 'no' },
  nameQuestion: { en: 'Adın ne?', ro: 'a-duhn ne', tr: 'what is your name?' },
  myNameAli: { en: 'Benim adım Ali.', ro: 'be-nim a-duhm a-li', tr: 'my name is Ali' },
  niceMeet: { en: 'Tanıştığıma memnun oldum.', ro: 'ta-nush-tu-uh-ma mem-nun ol-dum', tr: 'nice to meet you' },
  howAreYou: { en: 'Nasılsın?', ro: 'na-suhl-suhn', tr: 'how are you?' },
  iAmFine: { en: 'İyiyim.', ro: 'ii-yi-yim', tr: 'I am fine' },
  who: { en: 'Kim?', ro: 'kim', tr: 'who?' },
  what: { en: 'Ne?', ro: 'ne', tr: 'what?' },
  where: { en: 'Nerede?', ro: 'ne-re-de', tr: 'where?' },
  when: { en: 'Ne zaman?', ro: 'ne za-man', tr: 'when?' },
  why: { en: 'Neden?', ro: 'ne-den', tr: 'why?' },
  how: { en: 'Nasıl?', ro: 'na-suhl', tr: 'how?' },
  which: { en: 'Hangi?', ro: 'han-gi', tr: 'which?' },
  canYouHelp: { en: 'Yardım eder misiniz?', ro: 'yar-duhm e-der mi-si-niz', tr: 'can you help me?' },
  iDontKnow: { en: 'Bilmiyorum.', ro: 'bil-mi-yo-rum', tr: 'I do not know' },
  ofCourse: { en: 'Tabii ki.', ro: 'ta-bii ki', tr: 'of course' },
  excuseMe: { en: 'Affedersiniz.', ro: 'af-fe-der-si-niz', tr: 'excuse me' },
  seeYou: { en: 'Görüşürüz.', ro: 'goe-ru-shue-ruz', tr: 'see you' },
  congratulations: { en: 'Tebrikler!', ro: 'teb-rik-ler', tr: 'congratulations' },
  goodLuck: { en: 'Bol şans!', ro: 'bol shans', tr: 'good luck' },
  maybe: { en: 'Belki', ro: 'bel-ki', tr: 'maybe' },
  later: { en: 'Sonra', ro: 'son-ra', tr: 'later' },

  house: { en: 'Ev', ro: 'ev', tr: 'house' },
  school: { en: 'Okul', ro: 'o-kul', tr: 'school' },
  office: { en: 'Ofis', ro: 'o-fis', tr: 'office' },
  park: { en: 'Park', ro: 'park', tr: 'park' },
  hotel: { en: 'Otel', ro: 'o-tel', tr: 'hotel' },
  market: { en: 'Market', ro: 'mar-ket', tr: 'market' },
  city: { en: 'Şehir', ro: 'she-hir', tr: 'city' },
  country: { en: 'Ülke', ro: 'uel-ke', tr: 'country' },
  room: { en: 'Oda', ro: 'o-da', tr: 'room' },
  table: { en: 'Masa', ro: 'ma-sa', tr: 'table' },
  door: { en: 'Kapı', ro: 'ka-puh', tr: 'door' },
  window: { en: 'Pencere', ro: 'pen-je-re', tr: 'window' },
  kitchen: { en: 'Mutfak', ro: 'mut-fak', tr: 'kitchen' },
  bathroom: { en: 'Banyo', ro: 'ban-yo', tr: 'bathroom' },
  bed: { en: 'Yatak', ro: 'ya-tak', tr: 'bed' },
  key: { en: 'Anahtar', ro: 'a-nah-tar', tr: 'key' },
  atHome: { en: 'Evde', ro: 'ev-de', tr: 'at home' },
  atSchool: { en: 'Okulda', ro: 'o-kul-da', tr: 'at school' },
  atOffice: { en: 'Ofiste', ro: 'o-fis-te', tr: 'at the office' },
  inPark: { en: 'Parkta', ro: 'park-ta', tr: 'in the park' },
  atHotel: { en: 'Otelde', ro: 'o-tel-de', tr: 'at the hotel' },

  one: { en: 'Bir', ro: 'bir', tr: 'one' },
  two: { en: 'İki', ro: 'i-ki', tr: 'two' },
  three: { en: 'Üç', ro: 'uech', tr: 'three' },
  four: { en: 'Dört', ro: 'doert', tr: 'four' },
  five: { en: 'Beş', ro: 'besh', tr: 'five' },
  six: { en: 'Altı', ro: 'al-tuh', tr: 'six' },
  seven: { en: 'Yedi', ro: 'ye-di', tr: 'seven' },
  eight: { en: 'Sekiz', ro: 'se-kiz', tr: 'eight' },
  nine: { en: 'Dokuz', ro: 'do-kuz', tr: 'nine' },
  ten: { en: 'On', ro: 'on', tr: 'ten' },
  twenty: { en: 'Yirmi', ro: 'yir-mi', tr: 'twenty' },
  fifty: { en: 'Elli', ro: 'el-li', tr: 'fifty' },
  hundred: { en: 'Yüz', ro: 'yuez', tr: 'hundred' },
  thousand: { en: 'Bin', ro: 'bin', tr: 'thousand' },
  money: { en: 'Para', ro: 'pa-ra', tr: 'money' },
  price: { en: 'Fiyat', ro: 'fi-yat', tr: 'price' },
  cheap: { en: 'Ucuz', ro: 'u-juz', tr: 'cheap' },
  expensive: { en: 'Pahalı', ro: 'pa-ha-luh', tr: 'expensive' },
  lira: { en: 'Lira', ro: 'li-ra', tr: 'lira' },
  dollar: { en: 'Dolar', ro: 'do-lar', tr: 'dollar' },
  euro: { en: 'Euro', ro: 'yu-ro', tr: 'euro' },
  cash: { en: 'Nakit', ro: 'na-kit', tr: 'cash' },
  card: { en: 'Kart', ro: 'kart', tr: 'card' },
  pay: { en: 'Ödemek', ro: 'oe-de-mek', tr: 'to pay' },

  hourWhat: { en: 'Saat kaç?', ro: 'sa-at kach', tr: 'what time is it?' },
  today: { en: 'Bugün', ro: 'bu-guen', tr: 'today' },
  tomorrow: { en: 'Yarın', ro: 'ya-ruhn', tr: 'tomorrow' },
  yesterday: { en: 'Dün', ro: 'duen', tr: 'yesterday' },
  monday: { en: 'Pazartesi', ro: 'pa-zar-te-si', tr: 'Monday' },
  tuesday: { en: 'Salı', ro: 'sa-luh', tr: 'Tuesday' },
  wednesday: { en: 'Çarşamba', ro: 'char-sham-ba', tr: 'Wednesday' },
  thursday: { en: 'Perşembe', ro: 'per-shem-be', tr: 'Thursday' },
  friday: { en: 'Cuma', ro: 'ju-ma', tr: 'Friday' },
  saturday: { en: 'Cumartesi', ro: 'ju-mar-te-si', tr: 'Saturday' },
  sunday: { en: 'Pazar', ro: 'pa-zar', tr: 'Sunday' },
  morning: { en: 'Sabah', ro: 'sa-bah', tr: 'morning' },
  evening: { en: 'Akşam', ro: 'ak-sham', tr: 'evening' },
  night: { en: 'Gece', ro: 'ge-je', tr: 'night' },
  date: { en: 'Tarih', ro: 'ta-rih', tr: 'date' },
  calendar: { en: 'Takvim', ro: 'tak-vim', tr: 'calendar' },
  minute: { en: 'Dakika', ro: 'da-ki-ka', tr: 'minute' },
  second: { en: 'Saniye', ro: 'sa-ni-ye', tr: 'second' },

  restaurant: { en: 'Restoran', ro: 'res-to-ran', tr: 'restaurant' },
  menu: { en: 'Menü', ro: 'me-nue', tr: 'menu' },
  water: { en: 'Su', ro: 'su', tr: 'water' },
  tea: { en: 'Çay', ro: 'chai', tr: 'tea' },
  coffee: { en: 'Kahve', ro: 'kah-ve', tr: 'coffee' },
  bread: { en: 'Ekmek', ro: 'ek-mek', tr: 'bread' },
  soup: { en: 'Çorba', ro: 'chor-ba', tr: 'soup' },
  salad: { en: 'Salata', ro: 'sa-la-ta', tr: 'salad' },
  chicken: { en: 'Tavuk', ro: 'ta-vuk', tr: 'chicken' },
  fish: { en: 'Balık', ro: 'ba-luhk', tr: 'fish' },
  rice: { en: 'Pirinç', ro: 'pi-rinch', tr: 'rice' },
  delicious: { en: 'Lezzetli', ro: 'lez-zet-li', tr: 'delicious' },
  bill: { en: 'Hesap', ro: 'he-sap', tr: 'bill' },

  discount: { en: 'İndirim', ro: 'in-di-rim', tr: 'discount' },
  size: { en: 'Beden', ro: 'be-den', tr: 'size' },
  color: { en: 'Renk', ro: 'renk', tr: 'color' },
  tryOn: { en: 'Denemek', ro: 'de-ne-mek', tr: 'to try on' },
  receipt: { en: 'Fiş', ro: 'fish', tr: 'receipt' },
  buy: { en: 'Satın almak', ro: 'sa-tuhrn al-mak', tr: 'to buy' },
  sell: { en: 'Satmak', ro: 'sat-mak', tr: 'to sell' },
  shirt: { en: 'Gömlek', ro: 'goem-lek', tr: 'shirt' },
  pants: { en: 'Pantolon', ro: 'pan-to-lon', tr: 'pants' },
  dress: { en: 'Elbise', ro: 'el-bi-se', tr: 'dress' },
  jacket: { en: 'Ceket', ro: 'je-ket', tr: 'jacket' },
  shoes: { en: 'Ayakkabı', ro: 'a-yak-ka-buh', tr: 'shoes' },
  style: { en: 'Stil', ro: 'stil', tr: 'style' },

  left: { en: 'Sol', ro: 'sol', tr: 'left' },
  right: { en: 'Sağ', ro: 'saa', tr: 'right' },
  straight: { en: 'Dümdüz', ro: 'duem-duez', tr: 'straight' },
  station: { en: 'İstasyon', ro: 'is-tas-yon', tr: 'station' },
  busStop: { en: 'Durak', ro: 'du-rak', tr: 'bus stop' },
  map: { en: 'Harita', ro: 'ha-ri-ta', tr: 'map' },
  near: { en: 'Yakın', ro: 'ya-kuhn', tr: 'near' },
  far: { en: 'Uzak', ro: 'u-zak', tr: 'far' },
  street: { en: 'Cadde', ro: 'jad-de', tr: 'street' },

  train: { en: 'Tren', ro: 'tren', tr: 'train' },
  bus: { en: 'Otobüs', ro: 'o-to-bues', tr: 'bus' },
  metro: { en: 'Metro', ro: 'met-ro', tr: 'metro' },
  airport: { en: 'Havaalanı', ro: 'ha-va-a-la-nuh', tr: 'airport' },
  ticket: { en: 'Bilet', ro: 'bi-let', tr: 'ticket' },
  passport: { en: 'Pasaport', ro: 'pa-sa-port', tr: 'passport' },
  departure: { en: 'Kalkış', ro: 'kal-kuhsh', tr: 'departure' },
  arrival: { en: 'Varış', ro: 'va-ruhsh', tr: 'arrival' },
  taxi: { en: 'Taksi', ro: 'tak-si', tr: 'taxi' },
  bicycle: { en: 'Bisiklet', ro: 'bi-sik-let', tr: 'bicycle' },
  travel: { en: 'Seyahat', ro: 'se-ya-hat', tr: 'travel' },

  work: { en: 'İş', ro: 'ish', tr: 'work' },
  company: { en: 'Şirket', ro: 'shir-ket', tr: 'company' },
  meeting: { en: 'Toplantı', ro: 'top-lan-tuh', tr: 'meeting' },
  contract: { en: 'Sözleşme', ro: 'soez-lesh-me', tr: 'contract' },
  salary: { en: 'Maaş', ro: 'maa-sh', tr: 'salary' },
  computer: { en: 'Bilgisayar', ro: 'bil-gi-sa-yar', tr: 'computer' },
  internet: { en: 'İnternet', ro: 'in-ter-net', tr: 'internet' },
  email: { en: 'E-posta', ro: 'e-pos-ta', tr: 'email' },
  manager: { en: 'Yönetici', ro: 'yoe-ne-ti-ji', tr: 'manager' },
  colleague: { en: 'İş arkadaşı', ro: 'ish ar-ka-da-shuh', tr: 'colleague' },

  doctor: { en: 'Doktor', ro: 'dok-tor', tr: 'doctor' },
  hospital: { en: 'Hastane', ro: 'has-ta-ne', tr: 'hospital' },
  pharmacy: { en: 'Eczane', ro: 'ej-za-ne', tr: 'pharmacy' },
  pain: { en: 'Ağrı', ro: 'aa-ruh', tr: 'pain' },
  fever: { en: 'Ateş', ro: 'a-tesh', tr: 'fever' },
  medicine: { en: 'İlaç', ro: 'i-lach', tr: 'medicine' },
  head: { en: 'Baş', ro: 'bash', tr: 'head' },
  stomach: { en: 'Mide', ro: 'mi-de', tr: 'stomach' },
  tooth: { en: 'Diş', ro: 'dish', tr: 'tooth' },
  hand: { en: 'El', ro: 'el', tr: 'hand' },
  leg: { en: 'Bacak', ro: 'ba-jak', tr: 'leg' },
  rest: { en: 'Dinlenmek', ro: 'din-len-mek', tr: 'to rest' },

  call: { en: 'Aramak', ro: 'a-ra-mak', tr: 'to call' },
  message: { en: 'Mesaj', ro: 'me-saj', tr: 'message' },
  phoneNumber: { en: 'Telefon numarası', ro: 'te-le-fon nu-ma-ra-suh', tr: 'phone number' },
  repeat: { en: 'Tekrar eder misiniz?', ro: 'tek-rar e-der mi-si-niz', tr: 'can you repeat?' },
  party: { en: 'Parti', ro: 'par-ti', tr: 'party' },
  cinema: { en: 'Sinema', ro: 'si-ne-ma', tr: 'cinema' },
  music: { en: 'Müzik', ro: 'mue-zik', tr: 'music' },
  invite: { en: 'Davet etmek', ro: 'da-vet et-mek', tr: 'to invite' },
  celebrate: { en: 'Kutlamak', ro: 'kut-la-mak', tr: 'to celebrate' },
  friend: { en: 'Arkadaş', ro: 'ar-ka-dash', tr: 'friend' },
  family: { en: 'Aile', ro: 'a-i-le', tr: 'family' },

  university: { en: 'Üniversite', ro: 'ue-ni-ver-si-te', tr: 'university' },
  exam: { en: 'Sınav', ro: 'suh-nav', tr: 'exam' },
  lesson: { en: 'Ders', ro: 'ders', tr: 'lesson' },
  question: { en: 'Soru', ro: 'so-ru', tr: 'question' },
  answer: { en: 'Cevap', ro: 'je-vap', tr: 'answer' },
  student: { en: 'Öğrenci', ro: 'oe-ren-ji', tr: 'student' },
  teacher: { en: 'Öğretmen', ro: 'oe-ret-men', tr: 'teacher' },
  language: { en: 'Dil', ro: 'dil', tr: 'language' },
  study: { en: 'Çalışmak', ro: 'cha-lush-mak', tr: 'to study' },
  learn: { en: 'Öğrenmek', ro: 'oe-ren-mek', tr: 'to learn' },
  read: { en: 'Okumak', ro: 'o-ku-mak', tr: 'to read' },
  write: { en: 'Yazmak', ro: 'yaz-mak', tr: 'to write' },
  speak: { en: 'Konuşmak', ro: 'ko-nush-mak', tr: 'to speak' },
  listen: { en: 'Dinlemek', ro: 'din-le-mek', tr: 'to listen' },

  turkey: { en: 'Türkiye', ro: 'tuer-ki-ye', tr: 'Turkey' },
  germany: { en: 'Almanya', ro: 'al-man-ya', tr: 'Germany' },
  france: { en: 'Fransa', ro: 'fran-sa', tr: 'France' },
  happy: { en: 'Mutlu', ro: 'mut-lu', tr: 'happy' },
  sad: { en: 'Üzgün', ro: 'uez-guen', tr: 'sad' },
  tired: { en: 'Yorgun', ro: 'yor-gun', tr: 'tired' },
  angry: { en: 'Kızgın', ro: 'kuz-guhn', tr: 'angry' },
  weather: { en: 'Hava', ro: 'ha-va', tr: 'weather' },
  rain: { en: 'Yağmur', ro: 'yaa-mur', tr: 'rain' },
  snow: { en: 'Kar', ro: 'kar', tr: 'snow' },
  sun: { en: 'Güneş', ro: 'gue-nesh', tr: 'sun' },
  wind: { en: 'Rüzgar', ro: 'ruez-gar', tr: 'wind' },
  hot: { en: 'Sıcak', ro: 'suh-jak', tr: 'hot' },
  cold: { en: 'Soğuk', ro: 'so-uk', tr: 'cold' },
  hobby: { en: 'Hobi', ro: 'ho-bi', tr: 'hobby' },
  game: { en: 'Oyun', ro: 'o-yun', tr: 'game' },
  song: { en: 'Şarkı', ro: 'shar-kuh', tr: 'song' },
  museum: { en: 'Müze', ro: 'mue-ze', tr: 'museum' },
  theater: { en: 'Tiyatro', ro: 'ti-yat-ro', tr: 'theater' },

  open: { en: 'Açmak', ro: 'ach-mak', tr: 'to open' },
  close: { en: 'Kapatmak', ro: 'ka-pat-mak', tr: 'to close' },
  start: { en: 'Başlamak', ro: 'bash-la-mak', tr: 'to start' },
  finish: { en: 'Bitirmek', ro: 'bi-tir-mek', tr: 'to finish' },
  clean: { en: 'Temizlemek', ro: 'te-miz-le-mek', tr: 'to clean' },
  sleep: { en: 'Uyumak', ro: 'u-yu-mak', tr: 'to sleep' },
  eat: { en: 'Yemek yemek', ro: 'ye-mek ye-mek', tr: 'to eat' },
  drink: { en: 'İçmek', ro: 'ich-mek', tr: 'to drink' },
  think: { en: 'Düşünmek', ro: 'due-shuen-mek', tr: 'to think' },
  understand: { en: 'Anlamak', ro: 'an-la-mak', tr: 'to understand' },
  ask: { en: 'Sormak', ro: 'sor-mak', tr: 'to ask' },
  walk: { en: 'Yürümek', ro: 'yue-rue-mek', tr: 'to walk' },
  run: { en: 'Koşmak', ro: 'kosh-mak', tr: 'to run' },

  mountain: { en: 'Dağ', ro: 'daa', tr: 'mountain' },
  river: { en: 'Nehir', ro: 'ne-hir', tr: 'river' },
  sea: { en: 'Deniz', ro: 'de-niz', tr: 'sea' },
  lake: { en: 'Göl', ro: 'goel', tr: 'lake' },
  forest: { en: 'Orman', ro: 'or-man', tr: 'forest' },
  desert: { en: 'Çöl', ro: 'choel', tr: 'desert' },
  island: { en: 'Ada', ro: 'a-da', tr: 'island' },
  continent: { en: 'Kıta', ro: 'kuh-ta', tr: 'continent' },
  north: { en: 'Kuzey', ro: 'ku-zey', tr: 'north' },
  south: { en: 'Güney', ro: 'gue-ney', tr: 'south' },
  east: { en: 'Doğu', ro: 'do-u', tr: 'east' },
  west: { en: 'Batı', ro: 'ba-tuh', tr: 'west' },
  geography: { en: 'Coğrafya', ro: 'jo-raf-ya', tr: 'geography' },
  nature: { en: 'Doğa', ro: 'do-a', tr: 'nature' },

  red: { en: 'Kırmızı', ro: 'kuhr-muh-zuh', tr: 'red' },
  blue: { en: 'Mavi', ro: 'ma-vi', tr: 'blue' },
  green: { en: 'Yeşil', ro: 'ye-shil', tr: 'green' },
  black: { en: 'Siyah', ro: 'si-yah', tr: 'black' },
  white: { en: 'Beyaz', ro: 'be-yaz', tr: 'white' },
  yellow: { en: 'Sarı', ro: 'sa-ruh', tr: 'yellow' },
  orange: { en: 'Turuncu', ro: 'tu-run-ju', tr: 'orange' },
  purple: { en: 'Mor', ro: 'mor', tr: 'purple' },
  gray: { en: 'Gri', ro: 'gri', tr: 'gray' },
  pink: { en: 'Pembe', ro: 'pem-be', tr: 'pink' },
  newWord: { en: 'Yeni', ro: 'ye-ni', tr: 'new' },
  oldWord: { en: 'Eski', ro: 'es-ki', tr: 'old' },
  big: { en: 'Büyük', ro: 'bue-yuek', tr: 'big' },
  small: { en: 'Küçük', ro: 'kue-chuek', tr: 'small' },
  beautiful: { en: 'Güzel', ro: 'gue-zel', tr: 'beautiful' },
  difficult: { en: 'Zor', ro: 'zor', tr: 'difficult' },
  easy: { en: 'Kolay', ro: 'ko-lay', tr: 'easy' },
  fast: { en: 'Hızlı', ro: 'huhz-luh', tr: 'fast' },
  slow: { en: 'Yavaş', ro: 'ya-vash', tr: 'slow' },
  important: { en: 'Önemli', ro: 'oe-nem-li', tr: 'important' },
  possible: { en: 'Mümkün', ro: 'muem-kuen', tr: 'possible' },

  website: { en: 'Web sitesi', ro: 'veb si-te-si', tr: 'website' },
  password: { en: 'Şifre', ro: 'shif-re', tr: 'password' },
  account: { en: 'Hesap', ro: 'he-sap', tr: 'account' },
  app: { en: 'Uygulama', ro: 'uy-gu-la-ma', tr: 'app' },
  download: { en: 'İndirmek', ro: 'in-dir-mek', tr: 'to download' },
  upload: { en: 'Yüklemek', ro: 'yuek-le-mek', tr: 'to upload' },
  click: { en: 'Tıklamak', ro: 'tuk-la-mak', tr: 'to click' },
  socialNetwork: { en: 'Sosyal ağ', ro: 'so-syal aa', tr: 'social network' },
  data: { en: 'Veri', ro: 've-ri', tr: 'data' },
  digital: { en: 'Dijital', ro: 'di-ji-tal', tr: 'digital' },

  engineer: { en: 'Mühendis', ro: 'mue-hen-dis', tr: 'engineer' },
  programmer: { en: 'Yazılımcı', ro: 'ya-zuh-luhm-juh', tr: 'programmer' },
  nurse: { en: 'Hemşire', ro: 'hem-shi-re', tr: 'nurse' },
  lawyer: { en: 'Avukat', ro: 'a-vu-kat', tr: 'lawyer' },
  driver: { en: 'Sürücü', ro: 'sue-rue-jue', tr: 'driver' },
  cook: { en: 'Aşçı', ro: 'ash-chuh', tr: 'cook' },
  worker: { en: 'İşçi', ro: 'ish-chi', tr: 'worker' },
  farmer: { en: 'Çiftçi', ro: 'chift-chi', tr: 'farmer' },
  artist: { en: 'Sanatçı', ro: 'sa-nat-chuh', tr: 'artist' },
  musician: { en: 'Müzisyen', ro: 'mue-zis-yen', tr: 'musician' },
  journalist: { en: 'Gazeteci', ro: 'ga-ze-te-ji', tr: 'journalist' },
  police: { en: 'Polis', ro: 'po-lis', tr: 'police officer' },
  seller: { en: 'Satıcı', ro: 'sa-tuh-juh', tr: 'seller' },
  designer: { en: 'Tasarımcı', ro: 'ta-sa-ruhm-juh', tr: 'designer' },
  pilot: { en: 'Pilot', ro: 'pi-lot', tr: 'pilot' },
  translator: { en: 'Çevirmen', ro: 'che-vir-men', tr: 'translator' },

  science: { en: 'Bilim', ro: 'bi-lim', tr: 'science' },
  physics: { en: 'Fizik', ro: 'fi-zik', tr: 'physics' },
  chemistry: { en: 'Kimya', ro: 'kim-ya', tr: 'chemistry' },
  biology: { en: 'Biyoloji', ro: 'bi-yo-lo-ji', tr: 'biology' },
  experiment: { en: 'Deney', ro: 'de-ney', tr: 'experiment' },
  research: { en: 'Araştırma', ro: 'a-rash-tuhr-ma', tr: 'research' },
  art: { en: 'Sanat', ro: 'sa-nat', tr: 'art' },
  culture: { en: 'Kültür', ro: 'kuel-tuer', tr: 'culture' },
  history: { en: 'Tarih', ro: 'ta-rih', tr: 'history' },
  peace: { en: 'Barış', ro: 'ba-rush', tr: 'peace' },
  war: { en: 'Savaş', ro: 'sa-vash', tr: 'war' },
  revolution: { en: 'Devrim', ro: 'dev-rim', tr: 'revolution' },
  emperor: { en: 'İmparator', ro: 'im-pa-ra-tor', tr: 'emperor' },
  opinion: { en: 'Görüş', ro: 'goe-ruesh', tr: 'opinion' },
  agree: { en: 'Katılıyorum', ro: 'ka-tuhr-luh-yo-rum', tr: 'I agree' },
  disagree: { en: 'Katılmıyorum', ro: 'ka-tuhl-muh-yo-rum', tr: 'I disagree' },

  dog: { en: 'Köpek', ro: 'koe-pek', tr: 'dog' },
  cat: { en: 'Kedi', ro: 'ke-di', tr: 'cat' },
  bird: { en: 'Kuş', ro: 'kush', tr: 'bird' },
  horse: { en: 'At', ro: 'at', tr: 'horse' },
  lion: { en: 'Aslan', ro: 'as-lan', tr: 'lion' }
};

function row(key) {
  const x = LEX[key];
  return [x.en, x.ro, x.tr];
}

function rows(keys) {
  return keys.map(row);
}

function buildL1() {
  const words = mkScenarioWords([
    ['w1', ...row('hello'), { tip: 'En temel selamlaşma ifadesi.' }],
    ['w2', ...row('goodMorning')],
    ['w3', ...row('goodEvening')],
    ['w4', ...row('bye')],
    ['w5', ...row('thanks')],
    ['w6', ...row('please')],
    ['w7', ...row('yes')],
    ['w8', ...row('no')],
    ['w9', ...row('nameQuestion')],
    ['w10', ...row('myNameAli')],
    ['w11', ...row('niceMeet')],
    ['w12', ...row('howAreYou')],
    ['w13', ...row('iAmFine')]
  ]);

  return scenario(
    'Greetings & Introductions',
    words,
    [
      G(
        'g1',
        'Selamlaşma Kalıpları',
        'Greeting Patterns',
        'Türkçede selamlaşma çoğunlukla sabit kalıplarla yapılır. Günün saatine göre Günaydın / İyi akşamlar seçilir; genel selam olarak Merhaba her zaman kullanılabilir. Ali erkek öğrenci olarak ilk konuşmada net ve kısa kalıpları kullanır.',
        [
          { pronoun: 'Genel', form: 'Merhaba', example: 'Merhaba!', tr: 'hello' },
          { pronoun: 'Sabah', form: 'Günaydın', example: 'Günaydın!', tr: 'good morning' },
          { pronoun: 'Akşam', form: 'İyi akşamlar', example: 'İyi akşamlar!', tr: 'good evening' },
          { pronoun: 'Veda', form: 'Hoşça kal', example: 'Hoşça kal.', tr: 'goodbye' }
        ],
        'Aynı kalıpları farklı kişilerle sesli tekrar ederek otomatikleştir.'
      ),
      G(
        'g2',
        'Tanışma ve Nezaket',
        'Introductions and Courtesy',
        'Tanışmada önce isim sorulur, sonra isim söylenir: Adın ne? / Benim adım Ali. Nezaket için Teşekkürler ve Lütfen çok önemlidir. Türkçede özne çoğu zaman düşebilir ama başlangıçta tam cümle ile çalışmak daha güvenlidir.',
        [
          { pronoun: 'Soru', form: 'Adın ne?', example: 'Adın ne?', tr: 'what is your name?' },
          { pronoun: 'Cevap', form: 'Benim adım Ali.', example: 'Benim adım Ali.', tr: 'my name is Ali' },
          { pronoun: 'Nezaket', form: 'Teşekkürler', example: 'Teşekkürler.', tr: 'thanks' }
        ],
        'Ali erkek öğrenci örneklerinde birinci tekil konuşur formu kullanılır.'
      )
    ],
    [
      SP('sp1', 'Merhaba!', 'hello', 'Selam ver'),
      SP('sp2', 'Benim adım Ali.', 'my name is Ali', 'Kendini tanıt'),
      SP('sp3', 'Nasılsın?', 'how are you?', 'Hal hatır sor'),
      SP('sp4', 'İyiyim, teşekkürler.', 'I am fine, thanks', 'Cevap ver'),
      SP('sp5', 'Hoşça kal.', 'goodbye', 'Vedalaş')
    ],
    [
      DL('d1', 'İlk Tanışma', 'First Meeting', [
        LN('A', 'm', 'Merhaba!', 'hello!', 'Ali konuşmayı başlatıyor.', [BD('mer-ha-ba', 'hello', 'greeting', 'Genel selamlaşma.')]),
        LN('B', 'f', 'Günaydın!', 'good morning!', 'Sabah selamı.', [BD('gue-naidun', 'good morning', 'greeting', 'Sabah saatlerinde kullanılır.')]),
        LN('A', 'm', 'Adın ne?', 'what is your name?', null, []),
        LN('B', 'f', 'Benim adım Anna.', 'my name is Anna', null, []),
        LN('A', 'm', 'Tanıştığıma memnun oldum.', 'nice to meet you', null, []),
        LN('B', 'f', 'Ben de memnun oldum.', 'nice to meet you too', null, [])
      ])
    ],
    [
      LI('li1', 'Merhaba! Benim adım Ali. Nasılsın? İyiyim, teşekkürler.',
        'Hello! My name is Ali. How are you? I am fine, thanks.',
        [
          Q('Hangisi selamlaşma ifadesidir?', ['Merhaba', 'Teşekkürler', 'Hayır', 'Lütfen'], 0, 'Giriş selamını seç.'),
          Q('Ali kendini nasıl tanıtıyor?', ['Benim adım Ali.', 'Adın ne?', 'İyi akşamlar', 'Hoşça kal'], 0, 'Tanışma cümlesini seç.'),
          Q('Nasılsın sorusuna uygun cevap hangisi?', ['İyiyim.', 'Adım Ali.', 'Lütfen.', 'Nerede?'], 0, 'Doğru cevabı seç.')
        ])
    ]
  );
}

function buildL2() {
  return scenario(
    LANG_META.l2,
    mkScenarioWords([
      ['w1', ...row('house')],
      ['w2', ...row('school')],
      ['w3', ...row('office')],
      ['w4', ...row('park')],
      ['w5', ...row('hotel')],
      ['w6', ...row('atHome')],
      ['w7', ...row('atSchool')],
      ['w8', ...row('atOffice')],
      ['w9', ...row('inPark')],
      ['w10', ...row('atHotel')],
      ['w11', 'Ben evdeyim.', 'ben ev-de-yim', 'I am at home'],
      ['w12', 'Ali okulda.', 'a-li o-kul-da', 'Ali is at school']
    ]),
    [
      G(
        'g1',
        'Büyük ve Küçük Ünlü Uyumu',
        'Vowel Harmony',
        'Türkçede ekler, kelimenin son ünlüsüne göre uyumlanır. Kalın ünlüler (a, ı, o, u) ve ince ünlüler (e, i, ö, ü) ek seçiminde belirleyicidir. Bu uyum Türkçeyi doğal konuşmanın temelidir.',
        [
          { pronoun: 'Kalın', form: 'a/ı/o/u', example: 'okul-da', tr: 'back vowel harmony' },
          { pronoun: 'İnce', form: 'e/i/ö/ü', example: 'ev-de', tr: 'front vowel harmony' },
          { pronoun: 'Örnek', form: 'ev-de / okul-da', example: 'Ali evde.', tr: 'Ali is at home.' }
        ],
        'Kelimeyi ezberlerken son ünlüyü fark et; doğru ek seçimi otomatikleşir.'
      ),
      G(
        'g2',
        'Bulunma Hali: -de/-da (-te/-ta)',
        'Locative Suffix',
        'Bulunma hali bir şeyin nerede olduğunu söyler. Temel biçim -de/-da şeklindedir. Sert ünsüzden sonra ses uyumu ile -te/-ta görülebilir (ör. parkta). Başlangıçta kalıbı bütün olarak öğrenmek en güvenli yöntemdir.',
        [
          { pronoun: 'İnce', form: '-de', example: 'evde', tr: 'at home' },
          { pronoun: 'Kalın', form: '-da', example: 'okulda', tr: 'at school' },
          { pronoun: 'Sert ünsüz', form: '-te/-ta', example: 'parkta', tr: 'in the park' }
        ],
        'Ali erkek öğrenci örneklerinde konum bildirirken bu eki düzenli kullanır.'
      )
    ],
    [
      SP('sp1', 'Ben evdeyim.', 'I am at home', 'Konum söyle'),
      SP('sp2', 'Ali okulda.', 'Ali is at school', 'Konum bildir'),
      SP('sp3', 'Ofisteyim.', 'I am at the office', 'Kısa cevap ver'),
      SP('sp4', 'Parkta buluşalım.', 'Let us meet in the park', 'Öneri yap'),
      SP('sp5', 'Oteldeyiz.', 'We are at the hotel', 'Çoğul cümle kur')
    ],
    [
      DL('d1', 'Neredesin?', 'Where are you?', [
        LN('A', 'm', 'Neredesin?', 'Where are you?', 'Ali soru soruyor.', [BD('ne-re-de-sin', 'where are you?', 'question', 'Konum sorusu.')]),
        LN('B', 'f', 'Ben evdeyim.', 'I am at home', null, []),
        LN('A', 'm', 'Ben de ofisteyim.', 'I am also at the office', null, []),
        LN('B', 'f', 'Akşam parkta buluşalım.', 'Let us meet in the park in the evening', null, [])
      ])
    ],
    [
      LI('li1', 'Ali okulda. Anna evde. Akşam parkta buluşuyorlar.',
        'Ali is at school. Anna is at home. They meet in the park in the evening.',
        [
          Q('Ali nerede?', ['Okulda', 'Evde', 'Otelde', 'Markette'], 0, 'Doğru konumu seç.'),
          Q('Anna nerede?', ['Ofiste', 'Evde', 'Parkta', 'Trende'], 1, 'Doğru konumu seç.'),
          Q('Buluşma nerede?', ['Otelde', 'Restoranda', 'Parkta', 'Evde'], 2, 'Doğru konumu seç.')
        ])
    ]
  );
}

function buildL3() {
  return scenario(
    'Numbers & Money',
    mkScenarioWords([
      ['w1', ...row('one')],
      ['w2', ...row('two')],
      ['w3', ...row('three')],
      ['w4', ...row('four')],
      ['w5', ...row('five')],
      ['w6', ...row('ten')],
      ['w7', ...row('twenty')],
      ['w8', ...row('fifty')],
      ['w9', ...row('hundred')],
      ['w10', ...row('thousand')],
      ['w11', ...row('money')],
      ['w12', ...row('price')],
      ['w13', ...row('cheap')],
      ['w14', ...row('expensive')],
      ['w15', ...row('lira')],
      ['w16', ...row('dollar')],
      ['w17', ...row('euro')],
      ['w18', ...row('cash')],
      ['w19', ...row('card')]
    ]),
    [
      G(
        'g1',
        'Sayı Sistemi',
        'Number System',
        'Türkçede sayı sistemi düzenlidir: bir, iki, üç ... on, yirmi, yüz, bin. Sayılar isimden önce gelir ve temel kullanımda ek almaz. Para ve miktar söylerken sayı + isim kalıbı kullanılır.',
        [
          { pronoun: '1-5', form: 'bir, iki, üç, dört, beş', example: 'Üç çay', tr: 'three teas' },
          { pronoun: '10+', form: 'on, yirmi, elli', example: 'On lira', tr: 'ten lira' },
          { pronoun: 'Büyük sayı', form: 'yüz, bin', example: 'Yüz lira', tr: 'one hundred lira' }
        ],
        'Sayıları mutlaka sesli söyle; ritim telaffuzu hızlandırır.'
      ),
      G(
        'g2',
        'Fiyat ve Ödeme',
        'Price and Payment',
        'Alışverişte önce fiyat sorulur: Fiyat ne kadar? Sonra para birimi ve ödeme şekli belirtilir: lira, dolar, euro; nakit veya kart. Ali erkek öğrenci olarak kısa kalıplarla iletişim kurar.',
        [
          { pronoun: 'Soru', form: 'Fiyat ne kadar?', example: 'Bu ne kadar?', tr: 'How much is this?' },
          { pronoun: 'Ödeme', form: 'Nakit / Kart', example: 'Kartla ödeyebilirim.', tr: 'I can pay by card.' },
          { pronoun: 'Değerlendirme', form: 'Ucuz / Pahalı', example: 'Bu çok pahalı.', tr: 'This is very expensive.' }
        ],
        'Fiyat + para birimi + ödeme yöntemini tek cümlede birleştir.'
      )
    ],
    [
      SP('sp1', 'Bir, iki, üç, dört, beş.', 'one, two, three, four, five', 'Sayı say'),
      SP('sp2', 'Fiyat ne kadar?', 'how much is the price?', 'Fiyat sor'),
      SP('sp3', 'On lira.', 'ten lira', 'Tutar söyle'),
      SP('sp4', 'Bu ucuz.', 'this is cheap', 'Fiyat yorumla'),
      SP('sp5', 'Kartla ödeyeceğim.', 'I will pay by card', 'Ödeme türü seç')
    ],
    [
      DL('d1', 'Markette', 'At the market', [
        LN('A', 'm', 'Bu ne kadar?', 'How much is this?', 'Ali fiyat soruyor.', [BD('bu ne ka-dar', 'how much is this?', 'question', 'Temel fiyat sorusu.')]),
        LN('B', 'f', 'Yirmi lira.', 'twenty lira', null, []),
        LN('A', 'm', 'Biraz pahalı.', 'a little expensive', null, []),
        LN('B', 'f', 'Kartla ödeyebilirsiniz.', 'you can pay by card', null, [])
      ])
    ],
    [
      LI('li1', 'Bu elma on lira. Ben kartla ödüyorum.',
        'This apple is ten lira. I am paying by card.',
        [
          Q('Fiyat kaç lira?', ['Beş', 'On', 'Yirmi', 'Yüz'], 1, 'Doğru sayıyı seç.'),
          Q('Ödeme yöntemi ne?', ['Nakit', 'Kart', 'Euro', 'Dolar'], 1, 'Doğru seçeneği seç.'),
          Q('Hangisi para birimidir?', ['Lira', 'Ucuz', 'Pahalı', 'Fiyat'], 0, 'Doğru kelimeyi seç.')
        ])
    ]
  );
}

const TOPIC_KEYS = {
  4: { title: 'Time & Date', keys: ['hourWhat', 'today', 'tomorrow', 'yesterday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'morning', 'evening', 'date', 'calendar'], sample: ['Bugün çarşamba. Ders saat dokuzda.', 'Today is Wednesday. The lesson is at nine.'] },
  5: { title: 'Restaurant', keys: ['restaurant', 'menu', 'table', 'water', 'tea', 'coffee', 'bread', 'soup', 'salad', 'chicken', 'fish', 'rice', 'delicious', 'bill', 'price'], sample: ['Menü lütfen. Bir çorba ve çay istiyorum.', 'Menu please. I want a soup and tea.'] },
  6: { title: 'Shopping', keys: ['market', 'price', 'cheap', 'expensive', 'discount', 'size', 'color', 'tryOn', 'receipt', 'buy', 'sell', 'money', 'card', 'cash', 'shirt'], sample: ['Bu gömlek pahalı ama kaliteli.', 'This shirt is expensive but high quality.'] },
  7: { title: 'Directions', keys: ['where', 'street', 'left', 'right', 'straight', 'station', 'busStop', 'map', 'near', 'far', 'city', 'hotel', 'metro', 'bus', 'taxi'], sample: ['Düz gidin, sonra sola dönün.', 'Go straight, then turn left.'] },
  8: { title: 'Transport', keys: ['train', 'bus', 'metro', 'airport', 'ticket', 'passport', 'departure', 'arrival', 'station', 'city', 'country', 'travel', 'hourWhat', 'today', 'tomorrow'], sample: ['Tren yarın sabah kalkıyor.', 'The train departs tomorrow morning.'] },
  9: { title: 'Hotel', keys: ['hotel', 'room', 'key', 'price', 'card', 'passport', 'today', 'tomorrow', 'morning', 'evening', 'please', 'thanks', 'question', 'answer', 'atHotel'], sample: ['Otelde bir oda ayırttım.', 'I booked a room at the hotel.'] },
  10: { title: 'Work', keys: ['work', 'office', 'company', 'meeting', 'contract', 'salary', 'computer', 'internet', 'email', 'manager', 'colleague', 'question', 'answer', 'start', 'finish'], sample: ['Ofiste saat on’da toplantı var.', 'There is a meeting at the office at ten.'] },
  11: { title: 'Health', keys: ['doctor', 'hospital', 'pharmacy', 'pain', 'fever', 'medicine', 'head', 'stomach', 'tooth', 'hand', 'leg', 'help', 'today', 'rest', 'question'], sample: ['Başım ağrıyor, doktora gidiyorum.', 'My head hurts, I am going to the doctor.'] },
  12: { title: 'Phone', keys: ['call', 'message', 'email', 'phoneNumber', 'repeat', 'question', 'answer', 'help', 'internet', 'app', 'download', 'upload', 'click', 'today', 'tomorrow'], sample: ['Lütfen numaranızı tekrar eder misiniz?', 'Could you repeat your number, please?'] },
  13: { title: 'Social', keys: ['friend', 'party', 'cinema', 'music', 'invite', 'celebrate', 'today', 'tomorrow', 'happy', 'question', 'answer', 'seeYou', 'thanks', 'bye', 'family'], sample: ['Yarın arkadaşlarla partiye gidiyoruz.', 'Tomorrow we are going to a party with friends.'] },
  14: { title: 'Home', keys: ['house', 'apartment', 'room', 'kitchen', 'bathroom', 'bed', 'table', 'window', 'door', 'key', 'clean', 'open', 'close', 'family', 'price'], sample: ['Evde mutfak küçük ama çok temiz.', 'At home the kitchen is small but very clean.'] },
  15: { title: 'Education', keys: ['education', 'school', 'university', 'student', 'teacher', 'lesson', 'exam', 'question', 'answer', 'read', 'write', 'learn', 'language', 'study', 'today'], sample: ['Bugün üniversitede Türkçe dersi var.', 'There is a Turkish lesson at the university today.'] },
  16: { title: 'Countries', keys: ['country', 'city', 'turkey', 'germany', 'france', 'language', 'student', 'friend', 'question', 'answer', 'north', 'south', 'east', 'west', 'continent'], sample: ['Ben Türkiye’denim, arkadaşım Almanya’dan.', 'I am from Turkey, my friend is from Germany.'] },
  17: { title: 'Emotions', keys: ['happy', 'sad', 'tired', 'angry', 'howAreYou', 'iAmFine', 'maybe', 'opinion', 'agree', 'disagree', 'thanks', 'goodLuck', 'congratulations', 'seeYou', 'friend'], sample: ['Biraz yorgunum ama mutluyum.', 'I am a little tired but happy.'] },
  18: { title: 'Weather', keys: ['weather', 'rain', 'snow', 'sun', 'wind', 'hot', 'cold', 'today', 'tomorrow', 'morning', 'evening', 'question', 'answer', 'city', 'travel'], sample: ['Bugün hava soğuk ve rüzgarlı.', 'Today the weather is cold and windy.'] },
  19: { title: 'Entertainment', keys: ['hobby', 'read', 'music', 'cinema', 'theater', 'museum', 'party', 'friend', 'invite', 'celebrate', 'song', 'art', 'question', 'answer', 'today'], sample: ['Hafta sonu müzeye ve sinemaya gidiyorum.', 'On the weekend I am going to the museum and the cinema.'] },
  20: { title: 'Daily Conversation', keys: ['hello', 'howAreYou', 'iAmFine', 'thanks', 'please', 'question', 'answer', 'where', 'when', 'why', 'how', 'canYouHelp', 'iDontKnow', 'ofCourse', 'seeYou'], sample: ['Merhaba! Nasılsın? Çok iyiyim.', 'Hello! How are you? I am very well.'] }
};

const VOCAB_THEMES = [
  [21, 'Core Verbs', ['read', 'write', 'speak', 'listen', 'run', 'walk', 'sleep', 'eat', 'drink', 'think', 'understand', 'open', 'close', 'start', 'finish', 'help', 'ask', 'answer', 'learn', 'buy']],
  [22, 'Adjectives', ['newWord', 'oldWord', 'big', 'small', 'beautiful', 'difficult', 'easy', 'fast', 'slow', 'hot', 'cold', 'important', 'possible', 'happy', 'sad', 'tired', 'angry', 'cheap', 'expensive', 'near']],
  [23, 'People & Family', ['student', 'teacher', 'friend', 'family', 'doctor', 'engineer', 'programmer', 'nurse', 'lawyer', 'manager', 'driver', 'cook', 'worker', 'farmer', 'artist', 'musician', 'journalist', 'police', 'seller', 'translator']],
  [24, 'City & Places', ['city', 'street', 'station', 'busStop', 'market', 'restaurant', 'hotel', 'school', 'university', 'hospital', 'pharmacy', 'office', 'airport', 'museum', 'theater', 'house', 'room', 'park', 'country', 'continent']],
  [25, 'Food & Drinks', ['water', 'tea', 'coffee', 'bread', 'soup', 'salad', 'chicken', 'fish', 'rice', 'delicious', 'menu', 'bill', 'table', 'restaurant', 'eat', 'drink', 'price', 'cheap', 'expensive', 'money']],
  [26, 'Colors', ['red', 'blue', 'green', 'black', 'white', 'yellow', 'orange', 'purple', 'gray', 'pink', 'color', 'beautiful', 'newWord', 'oldWord', 'big', 'small', 'light', 'dark', 'hot', 'cold']],
  [27, 'Time Expressions', ['today', 'tomorrow', 'yesterday', 'morning', 'evening', 'night', 'hourWhat', 'minute', 'second', 'date', 'calendar', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'when', 'start']],
  [28, 'Sports', ['run', 'walk', 'game', 'team', 'ball', 'win', 'lose', 'practice', 'coach', 'stadium', 'score', 'fast', 'strong', 'healthy', 'competition', 'jump', 'swim', 'cycle', 'sport', 'train']],
  [29, 'Work & Tech', ['work', 'office', 'company', 'meeting', 'contract', 'salary', 'computer', 'internet', 'email', 'programmer', 'engineer', 'manager', 'app', 'website', 'password', 'account', 'download', 'upload', 'click', 'digital']],
  [30, 'Travel', ['travel', 'train', 'bus', 'metro', 'airport', 'ticket', 'passport', 'departure', 'arrival', 'station', 'hotel', 'map', 'country', 'city', 'north', 'south', 'east', 'west', 'question', 'hourWhat']],
  [31, 'Home', ['house', 'room', 'kitchen', 'bathroom', 'bed', 'table', 'window', 'door', 'family', 'clean', 'open', 'close', 'price', 'money', 'city', 'water', 'key', 'apartment', 'floor', 'electricity']],
  [32, 'Clothing', ['shirt', 'pants', 'dress', 'jacket', 'coat', 'shoes', 'hat', 'bag', 'size', 'color', 'cheap', 'expensive', 'buy', 'sell', 'tryOn', 'market', 'newWord', 'oldWord', 'beautiful', 'style']],
  [33, 'Nature', ['sun', 'rain', 'snow', 'wind', 'mountain', 'river', 'sea', 'lake', 'forest', 'desert', 'island', 'weather', 'hot', 'cold', 'north', 'south', 'east', 'west', 'earth', 'nature']],
  [34, 'Money', ['money', 'price', 'cheap', 'expensive', 'cash', 'card', 'lira', 'dollar', 'euro', 'one', 'ten', 'hundred', 'thousand', 'buy', 'sell', 'salary', 'contract', 'pay', 'bank', 'receipt']],
  [35, 'Science', ['science', 'physics', 'chemistry', 'biology', 'experiment', 'data', 'research', 'university', 'student', 'teacher', 'question', 'answer', 'learn', 'important', 'possible', 'difficult', 'computer', 'history', 'language', 'study']],
  [36, 'Art', ['art', 'music', 'song', 'theater', 'museum', 'history', 'culture', 'beautiful', 'color', 'hobby', 'friend', 'party', 'cinema', 'celebrate', 'read', 'write', 'question', 'answer', 'opinion', 'artist']],
  [37, 'Question Words', ['who', 'what', 'where', 'when', 'why', 'how', 'which', 'question', 'answer', 'repeat', 'canYouHelp', 'iDontKnow', 'ofCourse', 'maybe', 'please', 'thanks', 'hello', 'nameQuestion', 'howAreYou', 'phoneNumber']],
  [38, 'Professions', ['teacher', 'student', 'doctor', 'engineer', 'programmer', 'nurse', 'lawyer', 'manager', 'driver', 'cook', 'worker', 'farmer', 'artist', 'musician', 'journalist', 'police', 'seller', 'designer', 'pilot', 'translator']],
  [39, 'Opinions', ['opinion', 'agree', 'disagree', 'maybe', 'important', 'possible', 'good', 'bad', 'easy', 'difficult', 'beautiful', 'newWord', 'oldWord', 'question', 'answer', 'think', 'understand', 'speak', 'why', 'how']],
  [40, 'Animals', ['dog', 'cat', 'bird', 'horse', 'lion', 'fish', 'animal', 'forest', 'river', 'sea', 'nature', 'small', 'big', 'fast', 'slow', 'color', 'food', 'water', 'house', 'friend']],
  [41, 'Health', ['doctor', 'hospital', 'pharmacy', 'pain', 'fever', 'medicine', 'head', 'stomach', 'tooth', 'hand', 'leg', 'healthy', 'tired', 'sleep', 'eat', 'drink', 'rest', 'question', 'answer', 'help']],
  [42, 'Academic', ['education', 'school', 'university', 'lesson', 'exam', 'student', 'teacher', 'question', 'answer', 'read', 'write', 'learn', 'language', 'research', 'science', 'history', 'data', 'difficult', 'important', 'study']],
  [43, 'Digital', ['digital', 'computer', 'internet', 'website', 'password', 'account', 'app', 'download', 'upload', 'click', 'email', 'message', 'call', 'data', 'socialNetwork', 'question', 'answer', 'help', 'learn', 'work']],
  [44, 'Social', ['hello', 'howAreYou', 'iAmFine', 'thanks', 'please', 'friend', 'party', 'invite', 'celebrate', 'music', 'cinema', 'seeYou', 'bye', 'goodLuck', 'congratulations', 'opinion', 'agree', 'disagree', 'question', 'answer']],
  [45, 'Geography', ['country', 'city', 'mountain', 'river', 'sea', 'lake', 'forest', 'desert', 'island', 'continent', 'north', 'south', 'east', 'west', 'map', 'travel', 'turkey', 'germany', 'france', 'geography']],
  [46, 'Action Verbs', ['open', 'close', 'start', 'finish', 'help', 'ask', 'answer', 'buy', 'sell', 'run', 'walk', 'read', 'write', 'speak', 'listen', 'eat', 'drink', 'clean', 'learn', 'call']],
  [47, 'History', ['history', 'culture', 'language', 'country', 'city', 'emperor', 'revolution', 'war', 'peace', 'museum', 'art', 'science', 'teacher', 'student', 'important', 'question', 'answer', 'past', 'today', 'opinion']],
  [48, 'Useful Expressions', ['hello', 'thanks', 'please', 'excuseMe', 'canYouHelp', 'iDontKnow', 'ofCourse', 'maybe', 'later', 'goodLuck', 'congratulations', 'seeYou', 'bye', 'howAreYou', 'iAmFine', 'nameQuestion', 'myNameAli', 'niceMeet', 'repeat', 'where']],
  [49, 'Advanced Review', ['work', 'study', 'travel', 'money', 'health', 'digital', 'friend', 'opinion', 'question', 'answer', 'history', 'science', 'art', 'nature', 'geography', 'language', 'culture', 'important', 'possible', 'understand']]
];

const EXTRA = {
  education: ['Eğitim', 'e-i-tim', 'education'],
  apartment: ['Daire', 'da-i-re', 'apartment'],
  floor: ['Kat', 'kat', 'floor'],
  electricity: ['Elektrik', 'e-lek-trik', 'electricity'],
  light: ['Açık', 'a-chuhk', 'light'],
  dark: ['Koyu', 'ko-yu', 'dark'],
  sport: ['Spor', 'spor', 'sport'],
  team: ['Takım', 'ta-kuhm', 'team'],
  ball: ['Top', 'top', 'ball'],
  win: ['Kazanmak', 'ka-zan-mak', 'to win'],
  lose: ['Kaybetmek', 'kay-bet-mek', 'to lose'],
  practice: ['Pratik', 'pra-tik', 'practice'],
  coach: ['Antrenör', 'ant-re-noer', 'coach'],
  stadium: ['Stadyum', 'stad-yum', 'stadium'],
  score: ['Skor', 'skohr', 'score'],
  strong: ['Güçlü', 'guech-lue', 'strong'],
  healthy: ['Sağlıklı', 'saa-luhk-luh', 'healthy'],
  competition: ['Yarışma', 'ya-rush-ma', 'competition'],
  jump: ['Zıplamak', 'zuhp-la-mak', 'to jump'],
  swim: ['Yüzmek', 'yuez-mek', 'to swim'],
  cycle: ['Bisiklete binmek', 'bi-sik-le-te bin-mek', 'to cycle'],
  coat: ['Palto', 'pal-to', 'coat'],
  hat: ['Şapka', 'shap-ka', 'hat'],
  bag: ['Çanta', 'chan-ta', 'bag'],
  earth: ['Dünya', 'duen-ya', 'earth'],
  bank: ['Banka', 'ban-ka', 'bank'],
  good: ['İyi', 'ii-yi', 'good'],
  bad: ['Kötü', 'koe-tue', 'bad'],
  animal: ['Hayvan', 'hay-van', 'animal'],
  food: ['Yemek', 'ye-mek', 'food'],
  past: ['Geçmiş', 'gech-mish', 'past'],
  help: ['Yardım etmek', 'yar-duhm et-mek', 'to help'],
  health: ['Sağlık', 'saa-luhk', 'health']
};

function resolveEntry(key) {
  if (LEX[key]) return row(key);
  if (EXTRA[key]) return EXTRA[key];
  throw new Error(`Missing vocab key: ${key}`);
}

function buildScenarioByTopic(n) {
  const t = TOPIC_KEYS[n];
  return mkSimple(t.title, t.keys.map(resolveEntry), t.sample[0], t.sample[1]);
}

function buildVocabForTheme(title, keys) {
  const entries = keys.map(resolveEntry);
  while (entries.length < 20) entries.push(entries[entries.length % keys.length]);
  return buildVocabLesson(title, entries.slice(0, 20));
}

function validateKeys() {
  for (const t of Object.values(TOPIC_KEYS)) {
    for (const k of t.keys) resolveEntry(k);
  }
  for (const [, , keys] of VOCAB_THEMES) {
    for (const k of keys) resolveEntry(k);
  }
}

function buildLessons() {
  const all = {
    1: ['Greetings & Introductions', buildL1()],
    2: [LANG_META.l2, buildL2()],
    3: ['Numbers & Money', buildL3()]
  };
  for (let n = 4; n <= 20; n++) {
    all[n] = [TOPIC_KEYS[n].title, buildScenarioByTopic(n)];
  }
  for (const [n, title, keys] of VOCAB_THEMES) {
    all[n] = [title, buildVocabForTheme(title, keys)];
  }
  return all;
}

validateKeys();
const lessons = buildLessons();

let created = 0;
for (let n = 1; n <= 49; n++) {
  const [title, data] = lessons[n];
  const tag = n <= 20 ? 'beginner' : 'vocabulary';
  writeFileSync(join(OUT_DIR, `ders${n}.js`), render(n, title, data, LANG_META.label, tag), 'utf8');
  created++;
}

console.log(`✓ tr: ${created}/49 lessons → ${OUT_DIR}`);
