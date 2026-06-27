#!/usr/bin/env node
/** Scan lessons + merge gloss seeds → shared/kdo-gloss.js */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const SEED_TH = {
  hello: 'สวัสดี', 'hello!': 'สวัสดี!', goodbye: 'ลาก่อน', thanks: 'ขอบคุณ', please: 'กรุณา',
  yes: 'ใช่', no: 'ไม่', 'good morning': 'สวัสดีตอนเช้า', 'good morning!': 'สวัสดีตอนเช้า!',
  'good evening': 'สวัสดีตอนเย็น', 'how are you?': 'สบายดีไหม?', 'I am fine': 'สบายดี',
  'I am fine, thanks': 'สบายดี ขอบคุณ', 'what is your name?': 'คุณชื่ออะไร?',
  'my name is Ali': 'ฉันชื่ออาลี', 'my name is Anna': 'ฉันชื่อแอนนา', 'nice to meet you': 'ยินดีที่ได้รู้จัก',
  today: 'วันนี้', tomorrow: 'พรุ่งนี้', yesterday: 'เมื่อวาน', friend: 'เพื่อน', city: 'เมือง',
  price: 'ราคา', room: 'ห้อง', house: 'บ้าน', hotel: 'โรงแรม', hospital: 'โรงพยาบาล',
  doctor: 'หมอ', school: 'โรงเรียน', university: 'มหาวิทยาลัย', student: 'นักเรียน',
  teacher: 'ครู', work: 'งาน', office: 'สำนักงาน', restaurant: 'ร้านอาหาร', market: 'ตลาด',
  street: 'ถนน', water: 'น้ำ', money: 'เงิน', menu: 'เมนู', train: 'รถไฟ', bus: 'รถบัส',
  metro: 'รถไฟใต้ดิน', airport: 'สนามบิน', country: 'ประเทศ', language: 'ภาษา',
  internet: 'อินเทอร์เน็ต', email: 'อีเมล', message: 'ข้อความ', party: 'ปาร์ตี้',
  cinema: 'โรงภาพยนตร์', music: 'ดนตรี', hobby: 'งานอดิเรก', weather: 'สภาพอากาศ',
  rain: 'ฝน', happy: 'มีความสุข', sad: 'เศร้า', tired: 'เหนื่อย', beautiful: 'สวย',
  cheap: 'ถูก', expensive: 'แพง', important: 'สำคัญ', color: 'สี', card: 'บัตร',
  key: 'กุญแจ', table: 'โต๊ะ', apartment: 'อพาร์ตเมนต์', pharmacy: 'ร้านขายยา',
  travel: 'การเดินทาง', education: 'การศึกษา', history: 'ประวัติศาสตร์', opinion: 'ความคิดเห็น',
  'where?': 'ที่ไหน?', 'what time is it?': 'กี่โมงแล้ว?', 'see you': 'แล้วเจอกัน',
  question: 'คำถาม', answer: 'คำตอบ', 'to read': 'อ่าน', 'to write': 'เขียน',
  'to call': 'โทร', 'to help': 'ช่วย', 'to learn': 'เรียน', 'to buy': 'ซื้อ',
  'Doğru kelimeyi seç.': 'เลือกคำที่ถูกต้อง', 'İkinci ifadeyi seç.': 'เลือกประโยคที่สอง',
  Merhaba: 'สวัสดี', 'Merhaba!': 'สวัสดี!', Günaydın: 'สวัสดีตอนเช้า', 'Günaydın!': 'สวัสดีตอนเช้า!',
  'İyi akşamlar': 'สวัสดีตอนเย็น', 'Hoşça kal': 'ลาก่อน', Teşekkürler: 'ขอบคุณ', Lütfen: 'กรุณา',
  Evet: 'ใช่', Hayır: 'ไม่', 'Nasılsın?': 'สบายดีไหม?', 'İyiyim.': 'สบายดี',
  'Benim adım Ali.': 'ฉันชื่ออาลี', 'Tanıştığıma memnun oldum.': 'ยินดีที่ได้รู้จัก',
  'Adın ne?': 'คุณชื่ออะไร?', 'Bu ne kadar?': 'ราคาเท่าไร?', 'Hesap, lütfen.': 'เก็บเงินด้วย',
  Türkiye: 'ตุรกี', 'Guten Morgen': 'สวัสดีตอนเช้า', 'Guten Tag': 'สวัสดี', Hallo: 'สวัสดี',
  'Guten Abend': 'สวัสดีตอนเย็น', 'Auf Wiedersehen': 'ลาก่อน', Danke: 'ขอบคุณ', Bitte: 'กรุณา',
  Ja: 'ใช่', Nein: 'ไม่',   Entschuldigung: 'ขอโทษ',
  'En temel selamlaşma ifadesi.': 'สำนวนทักทายพื้นฐานที่สุด',
  'En yaygın selamlama.': 'การทักทายที่ใช้บ่อยที่สุด',
  'Sabah selamlaması.': 'คำทักทายตอนเช้า',
  Bonjour: 'สวัสดี', Bonsoir: 'สวัสดีตอนเย็น', Salut: 'สวัสดี', 'Au revoir': 'ลาก่อน',
  'Merhaba / Günaydın': 'สวัสดี', Selam: 'สวัสดี', 'Hoşça kalın / Görüşmek üzere': 'ลาก่อน',
  'Hoşça kalın': 'ลาก่อน', 'Görüşmek üzere': 'แล้วเจอกัน', 'İyi günler': 'สวัสดี',
  Merci: 'ขอบคุณ', 'S\'il vous plaît': 'กรุณา', Pardon: 'ขอโทษ', Oui: 'ใช่', Non: 'ไม่',
};

const SEED_ES = {
  hello: 'hola', 'hello!': '¡hola!', goodbye: 'adiós', thanks: 'gracias', please: 'por favor',
  yes: 'sí', no: 'no', 'good morning': 'buenos días', 'good morning!': '¡buenos días!',
  'good evening': 'buenas tardes', 'how are you?': '¿cómo estás?', 'I am fine': 'estoy bien',
  'I am fine, thanks': 'estoy bien, gracias', 'what is your name?': '¿cómo te llamas?',
  'my name is Ali': 'me llamo Ali', 'my name is Anna': 'me llamo Anna', 'nice to meet you': 'encantado de conocerte',
  today: 'hoy', tomorrow: 'mañana', yesterday: 'ayer', friend: 'amigo', city: 'ciudad',
  price: 'precio', room: 'habitación', house: 'casa', hotel: 'hotel', hospital: 'hospital',
  doctor: 'médico', school: 'escuela', university: 'universidad', student: 'estudiante',
  teacher: 'profesor', work: 'trabajo', office: 'oficina', restaurant: 'restaurante', market: 'mercado',
  street: 'calle', water: 'agua', money: 'dinero', menu: 'menú', train: 'tren', bus: 'autobús',
  metro: 'metro', airport: 'aeropuerto', country: 'país', language: 'idioma', internet: 'internet',
  email: 'correo', message: 'mensaje', party: 'fiesta', cinema: 'cine', music: 'música',
  hobby: 'afición', weather: 'tiempo', rain: 'lluvia', happy: 'feliz', sad: 'triste',
  tired: 'cansado', beautiful: 'bonito', cheap: 'barato', expensive: 'caro', important: 'importante',
  color: 'color', card: 'tarjeta', key: 'llave', table: 'mesa', apartment: 'apartamento',
  pharmacy: 'farmacia', travel: 'viaje', education: 'educación', history: 'historia', opinion: 'opinión',
  'where?': '¿dónde?', 'what time is it?': '¿qué hora es?', 'see you': 'hasta luego',
  question: 'pregunta', answer: 'respuesta', 'to read': 'leer', 'to write': 'escribir',
  'to call': 'llamar', 'to help': 'ayudar', 'to learn': 'aprender', 'to buy': 'comprar',
  park: 'parque', bank: 'banco', shop: 'tienda', store: 'tienda', food: 'comida',
  zero: 'cero', one: 'uno', two: 'dos', three: 'tres', four: 'cuatro', five: 'cinco',
  six: 'seis', seven: 'siete', eight: 'ocho', nine: 'nueve', ten: 'diez',
  eleven: 'once', twelve: 'doce', thirteen: 'trece', fourteen: 'catorce', fifteen: 'quince',
  sixteen: 'dieciséis', seventeen: 'diecisiete', eighteen: 'dieciocho', nineteen: 'diecinueve',
  twenty: 'veinte', thirty: 'treinta', forty: 'cuarenta', fifty: 'cincuenta',
  sixty: 'sesenta', seventy: 'setenta', eighty: 'ochenta', ninety: 'noventa',
  hundred: 'cien', thousand: 'mil', 'twenty-one': 'veintiuno', 'thirty-two': 'treinta y dos',
  'one hundred five': 'ciento cinco', 'three hundred fifty': 'trescientos cincuenta',
  'ten thousand': 'diez mil',
  drink: 'bebida', coffee: 'café', tea: 'té', bread: 'pan', milk: 'leche',
  morning: 'mañana', evening: 'tarde', night: 'noche', week: 'semana', month: 'mes',
  year: 'año', time: 'hora', name: 'nombre', age: 'edad', phone: 'teléfono',
  address: 'dirección', door: 'puerta', window: 'ventana', car: 'coche', taxi: 'taxi',
  ticket: 'billete', passport: 'pasaporte', map: 'mapa', help: 'ayuda', problem: 'problema',
  open: 'abierto', closed: 'cerrado', big: 'grande', small: 'pequeño', new: 'nuevo', old: 'viejo',
  good: 'bueno', bad: 'malo', hot: 'caliente', cold: 'frío', fast: 'rápido', slow: 'lento',
  near: 'cerca', far: 'lejos', left: 'izquierda', right: 'derecha', straight: 'recto',
  here: 'aquí', there: 'allí', now: 'ahora', later: 'después', always: 'siempre', never: 'nunca',
  'good afternoon': 'buenas tardes', 'good night': 'buenas noches', sorry: 'lo siento',
  'excuse me': 'disculpe', welcome: 'bienvenido', bathroom: 'baño', kitchen: 'cocina',
  garden: 'jardín', sea: 'mar', beach: 'playa', mountain: 'montaña', island: 'isla',
  north: 'norte', south: 'sur', east: 'este', west: 'oeste', station: 'estación',
  bridge: 'puente', church: 'iglesia', museum: 'museo', library: 'biblioteca',
  police: 'policía', fire: 'fuego', ambulance: 'ambulancia', medicine: 'medicina',
  pain: 'dolor', sick: 'enfermo', healthy: 'sano', family: 'familia', mother: 'madre',
  father: 'padre', brother: 'hermano', sister: 'hermana', child: 'niño', man: 'hombre', woman: 'mujer',
  boy: 'niño', girl: 'niña', husband: 'esposo', wife: 'esposa', neighbour: 'vecino',
  suffix: 'sufijo', vowel: 'vocal', harmony: 'armonía', location: 'ubicación', plural: 'plural',
  'at home': 'en casa', 'at school': 'en la escuela', 'at work': 'en el trabajo',
  'in the park': 'en el parque', 'in the hotel': 'en el hotel', 'in the office': 'en la oficina',
};

const SEED_FR = {
  house: 'maison', school: 'école', office: 'bureau', park: 'parc', hotel: 'hôtel',
  hello: 'bonjour', thanks: 'merci', please: 's\'il vous plaît', yes: 'oui', no: 'non',
  restaurant: 'restaurant', street: 'rue', water: 'eau', money: 'argent', friend: 'ami',
  city: 'ville', price: 'prix', room: 'chambre', work: 'travail', doctor: 'médecin',
  goodbye: 'au revoir', 'good morning': 'bonjour', 'good evening': 'bonsoir',
  'good afternoon': 'bonjour', 'good night': 'bonne nuit', 'how are you?': 'comment allez-vous ?',
  'nice to meet you': 'enchanté', today: 'aujourd\'hui', tomorrow: 'demain', yesterday: 'hier',
  friend: 'ami', city: 'ville', price: 'prix', hospital: 'hôpital', student: 'étudiant',
  teacher: 'professeur', food: 'nourriture', train: 'train', bus: 'bus', airport: 'aéroport',
  Merhaba: 'bonjour', Günaydın: 'bonjour', 'İyi akşamlar': 'bonsoir', Selam: 'salut',
  Teşekkürler: 'merci', 'Teşekkür ederim': 'merci', Lütfen: 's\'il vous plaît',
  Evet: 'oui', Hayır: 'non', 'Hoşça kal': 'au revoir', 'Hoşça kalın': 'au revoir',
  Bonjour: 'bonjour', Bonsoir: 'bonsoir', Salut: 'salut', 'Au revoir': 'au revoir',
};

const SEED_IT = {
  house: 'casa', school: 'scuola', office: 'ufficio', park: 'parco', hotel: 'hotel',
  hello: 'ciao', thanks: 'grazie', please: 'per favore', yes: 'sì', no: 'no',
  goodbye: 'arrivederci', 'good morning': 'buongiorno', 'good evening': 'buonasera',
  'good afternoon': 'buon pomeriggio', 'good night': 'buonanotte', 'how are you?': 'come stai?',
  'nice to meet you': 'piacere', today: 'oggi', tomorrow: 'domani', yesterday: 'ieri',
  friend: 'amico', city: 'città', price: 'prezzo', hospital: 'ospedale', student: 'studente',
  teacher: 'insegnante', food: 'cibo', train: 'treno', bus: 'autobus', airport: 'aeroporto',
  Merhaba: 'ciao', Günaydın: 'buongiorno', 'İyi akşamlar': 'buonasera', Selam: 'ciao',
  Teşekkürler: 'grazie', 'Teşekkür ederim': 'grazie', Lütfen: 'per favore',
  Evet: 'sì', Hayır: 'no', 'Hoşça kal': 'arrivederci', 'Hoşça kalın': 'arrivederci',
};

const SEED_RU = {
  house: 'дом', school: 'школа', office: 'офис', park: 'парк', hotel: 'отель',
  hello: 'привет', thanks: 'спасибо', please: 'пожалуйста', yes: 'да', no: 'нет',
  goodbye: 'до свидания', 'good morning': 'доброе утро', 'good evening': 'добрый вечер',
  'good afternoon': 'добрый день', 'good night': 'спокойной ночи', 'how are you?': 'как дела?',
  'nice to meet you': 'приятно познакомиться', today: 'сегодня', tomorrow: 'завтра', yesterday: 'вчера',
  friend: 'друг', city: 'город', price: 'цена', hospital: 'больница', student: 'студент',
  teacher: 'учитель', food: 'еда', train: 'поезд', bus: 'автобус', airport: 'аэропорт',
  Merhaba: 'привет', Günaydın: 'доброе утро', 'İyi akşamlar': 'добрый вечер', Selam: 'привет',
  Teşekkürler: 'спасибо', 'Teşekkür ederim': 'спасибо', Lütfen: 'пожалуйста',
  Evet: 'да', Hayır: 'нет', 'Hoşça kal': 'до свидания', 'Hoşça kalın': 'до свидания',
};

const SEED_AR = {
  house: 'منزل', school: 'مدرسة', office: 'مكتب', park: 'حديقة', hotel: 'فندق',
  hello: 'مرحبا', thanks: 'شكرا', please: 'من فضلك', yes: 'نعم', no: 'لا',
  goodbye: 'مع السلامة', 'good morning': 'صباح الخير', 'good evening': 'مساء الخير',
  'good afternoon': 'مساء الخير', 'good night': 'تصبح على خير', 'how are you?': 'كيف حالك؟',
  'nice to meet you': 'تشرفت بمعرفتك', today: 'اليوم', tomorrow: 'غدا', yesterday: 'أمس',
  friend: 'صديق', city: 'مدينة', price: 'سعر', hospital: 'مستشفى', student: 'طالب',
  teacher: 'معلم', food: 'طعام', train: 'قطار', bus: 'حافلة', airport: 'مطار',
  Merhaba: 'مرحبا', Günaydın: 'صباح الخير', 'İyi akşamlar': 'مساء الخير', Selam: 'مرحبا',
  Teşekkürler: 'شكرا', 'Teşekkür ederim': 'شكرا', Lütfen: 'من فضلك',
  Evet: 'نعم', Hayır: 'لا', 'Hoşça kal': 'مع السلامة', 'Hoşça kalın': 'مع السلامة',
};

const SEED_ZH = {
  house: '房子', school: '学校', office: '办公室', park: '公园', hotel: '酒店',
  hello: '你好', thanks: '谢谢', please: '请', yes: '是', no: '不',
  goodbye: '再见', 'good morning': '早上好', 'good evening': '晚上好',
  'good afternoon': '下午好', 'good night': '晚安', 'how are you?': '你好吗？',
  'nice to meet you': '很高兴认识你', today: '今天', tomorrow: '明天', yesterday: '昨天',
  friend: '朋友', city: '城市', price: '价格', hospital: '医院', student: '学生',
  teacher: '老师', food: '食物', train: '火车', bus: '公交车', airport: '机场',
  Merhaba: '你好', Günaydın: '早上好', 'İyi akşamlar': '晚上好', Selam: '你好',
  Teşekkürler: '谢谢', 'Teşekkür ederim': '谢谢', Lütfen: '请',
  Evet: '是', Hayır: '不', 'Hoşça kal': '再见', 'Hoşça kalın': '再见',
};

const SEED_DE = {
  hello: 'hallo', goodbye: 'auf Wiedersehen', thanks: 'danke', please: 'bitte',
  yes: 'ja', no: 'nein', 'good morning': 'guten Morgen', 'good evening': 'guten Abend',
  'good afternoon': 'guten Tag', 'good night': 'gute Nacht', 'how are you?': 'wie geht es dir?',
  'nice to meet you': 'freut mich', today: 'heute', tomorrow: 'morgen', yesterday: 'gestern',
  house: 'Haus', school: 'Schule', office: 'Büro', park: 'Park', hotel: 'Hotel',
  friend: 'Freund', city: 'Stadt', price: 'Preis', hospital: 'Krankenhaus', student: 'Student',
  teacher: 'Lehrer', food: 'Essen', train: 'Zug', bus: 'Bus', airport: 'Flughafen',
  Merhaba: 'Hallo', 'Merhaba!': 'Hallo!', Günaydın: 'Guten Morgen', 'Günaydın!': 'Guten Morgen!',
  'İyi akşamlar': 'Guten Abend', 'Hoşça kal': 'Auf Wiedersehen', Teşekkürler: 'Danke',
  'Teşekkür ederim': 'Danke', Lütfen: 'Bitte', Evet: 'Ja', Hayır: 'Nein',
  'Nasılsın?': 'Wie geht es dir?', 'İyiyim.': 'Mir geht es gut',
  'Benim adım Ali.': 'Ich heiße Ali', 'Tanıştığıma memnun oldum.': 'Freut mich',
  'Adın ne?': 'Wie heißt du?', 'Bu ne kadar?': 'Wie viel kostet das?',
  'Hesap, lütfen.': 'Die Rechnung, bitte', İyi: 'Gut', gün: 'Tag', akşam: 'Abend', sabah: 'Morgen',
  Bonjour: 'Guten Tag', Bonsoir: 'Guten Abend', Salut: 'Hallo', 'Au revoir': 'Auf Wiedersehen',
  'Merhaba / Günaydın': 'Guten Tag', Selam: 'Hallo', 'Hoşça kalın / Görüşmek üzere': 'Auf Wiedersehen',
  'Hoşça kalın': 'Auf Wiedersehen', 'Görüşmek üzere': 'Auf Wiedersehen', 'İyi günler': 'Guten Tag',
  'Güle güle': 'Tschüss', 'Benim adım...': 'Ich heiße ...',
};

const LESSON_LANGS = ['tr', 'de', 'en', 'th', 'fr', 'es', 'it', 'ru', 'ar', 'zh'];

function normKey(s) {
  return String(s || '').trim().toLowerCase()
    .replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ş/g, 's')
    .replace(/ç/g, 'c').replace(/ö/g, 'o').replace(/ü/g, 'u')
    .replace(/\.\.\.$/, '').trim();
}

function unescapeJs(s) {
  return s.replace(/\\'/g, "'");
}

function seedGet(seed, key) {
  if (!seed || !key) return '';
  return seed[key] || seed[key.toLowerCase()] || seed[normKey(key)] || '';
}

function resolveTrToPack(trText, pack, seed) {
  if (!trText) return '';
  if (pack[trText]) return pack[trText];
  if (seedGet(seed, trText)) return seedGet(seed, trText);
  const first = trText.split(/\s*\/\s*/)[0].trim();
  if (pack[first]) return pack[first];
  if (seedGet(seed, first)) return seedGet(seed, first);
  const nk = normKey(trText);
  if (pack[nk]) return pack[nk];
  return '';
}

function pivotFromEn(enWord, pack, seed) {
  if (!enWord) return '';
  const variants = [enWord, enWord.replace(/\.\.\.$/, '').trim(), normKey(enWord)];
  for (const v of variants) {
    if (pack[v]) return pack[v];
    const s = seedGet(seed, v);
    if (s) return s;
  }
  return '';
}

function scanLessons() {
  const trStrings = new Set();
  const enTrPairs = [];
  const enLessonPairs = [];
  for (const lang of LESSON_LANGS) {
    const full = path.join(root, 'languages', lang, 'lessons');
    if (!fs.existsSync(full)) continue;
    for (const f of fs.readdirSync(full).filter((x) => x.endsWith('.js'))) {
      const t = fs.readFileSync(path.join(full, f), 'utf8');
      for (const m of t.matchAll(/tr:'((?:\\'|[^']){1,160})'/g)) trStrings.add(unescapeJs(m[1]));
      for (const m of t.matchAll(/(?:en|th):'((?:\\'|[^']){1,160})'[\s\S]{0,600}?tr:'((?:\\'|[^']){1,160})'/g)) {
        const pair = { en: unescapeJs(m[1]), tr: unescapeJs(m[2]), lang };
        enTrPairs.push(pair);
        if (lang === 'en') enLessonPairs.push(pair);
      }
    }
  }
  return { trStrings, enTrPairs, enLessonPairs };
}

function buildTrToEnPivot(enLessonPairs) {
  const map = new Map();
  for (const { en, tr } of enLessonPairs) {
    if (!map.has(tr)) map.set(tr, en);
    const first = tr.split(/\s*\/\s*/)[0].trim();
    if (!map.has(first)) map.set(first, en);
  }
  return map;
}

function addNormAliases(pack) {
  for (const [k, v] of Object.entries({ ...pack })) {
    const nk = normKey(k);
    if (nk && !pack[nk]) pack[nk] = v;
  }
}

function mergeEnglishSeed(target, source) {
  for (const [k, v] of Object.entries(source)) {
    if (/^[a-zA-Z]/.test(k) && !target[k]) target[k] = v;
  }
}

mergeEnglishSeed(SEED_TH, SEED_ES);

const th = { ...SEED_TH };
const de = { ...SEED_DE };
const es = { ...SEED_ES };
const fr = { ...SEED_FR };
const it = { ...SEED_IT };
const ru = { ...SEED_RU };
const ar = { ...SEED_AR };
const zh = { ...SEED_ZH };
const seeds = { th: SEED_TH, de: SEED_DE, es: SEED_ES, fr: SEED_FR, it: SEED_IT, ru: SEED_RU, ar: SEED_AR, zh: SEED_ZH };
const packs = { th, de, es, fr, it, ru, ar, zh };
const { trStrings, enTrPairs, enLessonPairs } = scanLessons();
const trToEn = buildTrToEnPivot(enLessonPairs);

function fillPair(en, tr) {
  const pivotEn = trToEn.get(tr) || trToEn.get(tr.split(/\s*\/\s*/)[0].trim()) || en;
  for (const [code, pack] of Object.entries(packs)) {
    const seed = seeds[code];
    let val = resolveTrToPack(tr, pack, seed) || pivotFromEn(pivotEn, pack, seed) || pivotFromEn(en, pack, seed);
    if (val) {
      if (!pack[tr]) pack[tr] = val;
      if (!pack[en]) pack[en] = val;
      const first = tr.split(/\s*\/\s*/)[0].trim();
      if (first && !pack[first]) pack[first] = val;
    }
  }
}

for (const { en, tr } of enTrPairs) fillPair(en, tr);

for (const s of trStrings) {
  for (const [code, pack] of Object.entries(packs)) {
    const v = resolveTrToPack(s, pack, seeds[code]);
    if (v && !pack[s]) pack[s] = v;
    const pivotEn = trToEn.get(s) || trToEn.get(s.split(/\s*\/\s*/)[0].trim());
    if (pivotEn && !pack[s]) {
      const pv = pivotFromEn(pivotEn, pack, seeds[code]);
      if (pv) pack[s] = pv;
    }
  }
}

for (const [code, pack] of Object.entries(packs)) addNormAliases(pack);

const out = `/** Otomatik: tools/build-gloss.mjs */
(function () {
  'use strict';
  window.KDO_GLOSS = {
    th: ${JSON.stringify(th, null, 2)},
    de: ${JSON.stringify(de, null, 2)},
    es: ${JSON.stringify(es, null, 2)},
    fr: ${JSON.stringify(fr, null, 2)},
    it: ${JSON.stringify(it, null, 2)},
    ru: ${JSON.stringify(ru, null, 2)},
    ar: ${JSON.stringify(ar, null, 2)},
    zh: ${JSON.stringify(zh, null, 2)}
  };
})();
`;

fs.writeFileSync(path.join(root, 'shared', 'kdo-gloss.js'), out);
console.log('shared/kdo-gloss.js — th:', Object.keys(th).length, 'es:', Object.keys(es).length, 'de:', Object.keys(de).length);
