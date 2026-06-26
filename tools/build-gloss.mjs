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
};

const SEED_DE = {
  Merhaba: 'Hallo', 'Merhaba!': 'Hallo!', Günaydın: 'Guten Morgen', 'Günaydın!': 'Guten Morgen!',
  'İyi akşamlar': 'Guten Abend', 'Hoşça kal': 'Auf Wiedersehen', Teşekkürler: 'Danke',
  Lütfen: 'Bitte', Evet: 'Ja', Hayır: 'Nein', 'Nasılsın?': 'Wie geht es dir?',
  'İyiyim.': 'Mir geht es gut', 'Benim adım Ali.': 'Ich heiße Ali',
  'Tanıştığıma memnun oldum.': 'Freut mich', 'Adın ne?': 'Wie heißt du?',
  'Bu ne kadar?': 'Wie viel kostet das?', 'Hesap, lütfen.': 'Die Rechnung, bitte',
  İyi: 'Gut', gün: 'Tag', akşam: 'Abend', sabah: 'Morgen',
};

function scanLessonStrings() {
  const found = new Set();
  for (const dir of ['languages/tr/lessons', 'languages/de/lessons', 'languages/en/lessons']) {
    const full = path.join(root, dir);
    if (!fs.existsSync(full)) continue;
    for (const f of fs.readdirSync(full).filter((x) => x.endsWith('.js'))) {
      const t = fs.readFileSync(path.join(full, f), 'utf8');
      for (const m of t.matchAll(/tr:'([^']{1,100})'/g)) found.add(m[1]);
    }
  }
  return found;
}

const th = { ...SEED_TH };
const de = { ...SEED_DE };
for (const s of scanLessonStrings()) {
  const low = s.toLowerCase();
  if (!th[s] && SEED_TH[low]) th[s] = SEED_TH[low];
}

const out = `/** Otomatik: tools/build-gloss.mjs */
(function () {
  'use strict';
  window.KDO_GLOSS = {
    th: ${JSON.stringify(th, null, 2)},
    de: ${JSON.stringify(de, null, 2)}
  };
})();
`;

fs.writeFileSync(path.join(root, 'shared', 'kdo-gloss.js'), out);
console.log('shared/kdo-gloss.js — th:', Object.keys(th).length, 'de:', Object.keys(de).length);
