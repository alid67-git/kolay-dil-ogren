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
};

const SEED_IT = {
  house: 'casa', school: 'scuola', office: 'ufficio', park: 'parco', hotel: 'hotel',
  hello: 'ciao', thanks: 'grazie', please: 'per favore', yes: 'sì', no: 'no',
};

const SEED_RU = {
  house: 'дом', school: 'школа', office: 'офис', park: 'парк', hotel: 'отель',
  hello: 'привет', thanks: 'спасибо', please: 'пожалуйста', yes: 'да', no: 'нет',
};

const SEED_AR = {
  house: 'منزل', school: 'مدرسة', office: 'مكتب', park: 'حديقة', hotel: 'فندق',
  hello: 'مرحبا', thanks: 'شكرا', please: 'من فضلك', yes: 'نعم', no: 'لا',
};

const SEED_ZH = {
  house: '房子', school: '学校', office: '办公室', park: '公园', hotel: '酒店',
  hello: '你好', thanks: '谢谢', please: '请', yes: '是', no: '不',
};

const SEED_DE = {
  hello: 'hallo', house: 'Haus', school: 'Schule', office: 'Büro', park: 'Park', hotel: 'Hotel',
  Merhaba: 'Hallo', 'Merhaba!': 'Hallo!', Günaydın: 'Guten Morgen', 'Günaydın!': 'Guten Morgen!',
  'İyi akşamlar': 'Guten Abend', 'Hoşça kal': 'Auf Wiedersehen', Teşekkürler: 'Danke',
  Lütfen: 'Bitte', Evet: 'Ja', Hayır: 'Nein', 'Nasılsın?': 'Wie geht es dir?',
  'İyiyim.': 'Mir geht es gut', 'Benim adım Ali.': 'Ich heiße Ali',
  'Tanıştığıma memnun oldum.': 'Freut mich', 'Adın ne?': 'Wie heißt du?',
  'Bu ne kadar?': 'Wie viel kostet das?', 'Hesap, lütfen.': 'Die Rechnung, bitte',
  İyi: 'Gut', gün: 'Tag', akşam: 'Abend', sabah: 'Morgen',
  Bonjour: 'Guten Tag', Bonsoir: 'Guten Abend', Salut: 'Hallo', 'Au revoir': 'Auf Wiedersehen',
  'Merhaba / Günaydın': 'Guten Tag', Selam: 'Hallo', 'Hoşça kalın / Görüşmek üzere': 'Auf Wiedersehen',
};

const LESSON_LANGS = ['tr', 'de', 'en', 'th', 'fr', 'es', 'it', 'ru', 'ar', 'zh'];

function unescapeJs(s) {
  return s.replace(/\\'/g, "'");
}

function resolveTrToPack(trText, pack, seed) {
  if (!trText) return '';
  if (pack[trText]) return pack[trText];
  if (seed && seed[trText]) return seed[trText];
  const first = trText.split(/\s*\/\s*/)[0].trim();
  if (pack[first] || (seed && seed[first])) return pack[first] || seed[first];
  return '';
}

function scanLessons() {
  const trStrings = new Set();
  const enTrPairs = [];
  for (const lang of LESSON_LANGS) {
    const full = path.join(root, 'languages', lang, 'lessons');
    if (!fs.existsSync(full)) continue;
    for (const f of fs.readdirSync(full).filter((x) => x.endsWith('.js'))) {
      const t = fs.readFileSync(path.join(full, f), 'utf8');
      for (const m of t.matchAll(/tr:'((?:\\'|[^']){1,120})'/g)) trStrings.add(unescapeJs(m[1]));
      for (const m of t.matchAll(/en:'((?:\\'|[^']){1,120})'[\s\S]{0,500}?tr:'((?:\\'|[^']){1,120})'/g)) {
        enTrPairs.push({ en: unescapeJs(m[1]), tr: unescapeJs(m[2]) });
      }
    }
  }
  return { trStrings, enTrPairs };
}

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
const { trStrings, enTrPairs } = scanLessons();

for (const s of trStrings) {
  for (const [code, pack] of Object.entries(packs)) {
    const v = resolveTrToPack(s, pack, seeds[code]);
    if (v && !pack[s]) pack[s] = v;
  }
}
for (const { en, tr } of enTrPairs) {
  for (const [code, pack] of Object.entries(packs)) {
    if (!pack[en]) {
      const v = resolveTrToPack(tr, pack, seeds[code]) || pack[tr];
      if (v) pack[en] = v;
    }
  }
}
for (const s of trStrings) {
  const low = s.toLowerCase();
  for (const [code, pack] of Object.entries(packs)) {
    const seed = seeds[code];
    if (!pack[s] && seed && seed[low]) pack[s] = seed[low];
    if (!pack[s] && seed && seed[s]) pack[s] = seed[s];
  }
}

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
