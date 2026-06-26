#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const thTitles = {
  1: 'ทักทายและการแนะนำตัว', 2: 'คำนำหน้านามและ sein', 3: 'ตัวเลขและเงิน', 4: 'เวลาและวันที่',
  5: 'ร้านอาหารและอาหาร', 6: 'ช้อปปิ้ง', 7: 'ทิศทางและสถานที่', 8: 'การขนส่งและการเดินทาง',
  9: 'โรงแรมและที่พัก', 10: 'งานและการประชุม', 11: 'สุขภาพและเหตุฉุกเฉิน', 12: 'โทรศัพท์และเทคโนโลยี',
  13: 'ชีวิตสังคมและคำเชิญ', 14: 'บ้านและชีวิตประจำวัน', 15: 'การศึกษาและโรงเรียน', 16: 'ประเทศและวัฒนธรรม',
  17: 'อารมณ์และบุคลิก', 18: 'สภาพอากาศและธรรมชาติ', 19: 'ความบันเทิงและงานอดิเรก', 20: 'จำลองบทสนทนาประจำวัน',
  21: 'คำศัพท์ 1 — คำกริยาสำคัญ', 22: 'คำศัพท์ 2 — คำคุณศัพท์และคำตรงข้าม', 23: 'คำศัพท์ 3 — ผู้คนและความสัมพันธ์',
  24: 'คำศัพท์ 4 — เมืองและสถานที่', 25: 'คำศัพท์ 5 — อาหารและเครื่องดื่ม', 26: 'คำศัพท์ 6 — สี รูปทรงและขนาด',
  27: 'คำศัพท์ 7 — เวลาและความถี่', 28: 'คำศัพท์ 8 — กีฬาและสุขภาพ', 29: 'คำศัพท์ 9 — ธุรกิจและเทคโนโลยี',
  30: 'คำศัพท์ 10 — การเดินทางและวันหยุด', 31: 'คำศัพท์ 11 — บ้านและเฟอร์นิเจอร์', 32: 'คำศัพท์ 12 — เสื้อผ้าและแฟชั่น',
  33: 'คำศัพท์ 13 — ธรรมชาติและสิ่งแวดล้อม', 34: 'คำศัพท์ 14 — เงินและเศรษฐกิจ', 35: 'คำศัพท์ 15 — วิทยาศาสตร์และการวิจัย',
  36: 'คำศัพท์ 16 — ศิลปะและสื่อ', 37: 'คำศัพท์ 17 — คำถามและคำเชื่อม', 38: 'คำศัพท์ 18 — อาชีพและเครื่องมือ',
  39: 'คำศัพท์ 19 — การคิดและการสื่อสาร', 40: 'คำศัพท์ 20 — สัตว์และธรรมชาติ', 41: 'คำศัพท์ 21 — สุขภาพและร่างกาย',
  42: 'คำศัพท์ 22 — ภาษาวิชาการ', 43: 'คำศัพท์ 23 — เทคโนโลยีและดิจิทัล', 44: 'คำศัพท์ 24 — สำนวนทางสังคม',
  45: 'คำศัพท์ 25 — ภูมิศาสตร์และประเทศ', 46: 'คำศัพท์ 26 — การกระทำและกิจกรรม', 47: 'คำศัพท์ 27 — ประวัติศาสตร์และการเมือง',
  48: 'คำศัพท์ 28 — สำนวนและนิพจน์', 49: 'คำศัพท์ 29 — คำศัพท์ผสม',
};

const thSub = {
  2: 'การสอดคล้องสระ — ทีละขั้น',
};

const deTitles = {};
const frTitles = {};
for (let n = 1; n <= 49; n++) {
  deTitles[n] = { title: thTitles[n] ? undefined : undefined };
}

const out = { th: {} };
for (const [num, title] of Object.entries(thTitles)) {
  const n = +num;
  const entry = { title };
  if (thSub[n]) entry.subtitle = thSub[n];
  out.th[n] = entry;
}

const body = `/** Ders başlığı çevirileri — arayüz dili ≠ tr/en */
(function () {
  'use strict';
  window.KDO_LESSON_I18N = ${JSON.stringify(out, null, 2)};

  window.KDO_Lmeta = function (meta, field, lang) {
    if (!meta) return '';
    lang = lang || 'tr';
    var pack = window.KDO_LESSON_I18N && window.KDO_LESSON_I18N[lang];
    if (pack && pack[meta.num] && pack[meta.num][field]) return pack[meta.num][field];
    if (typeof KDO_Lf === 'function') return KDO_Lf(meta, field, lang);
    return meta[field] || '';
  };
})();
`;

fs.writeFileSync(path.join(root, 'shared', 'kdo-lesson-i18n.js'), body);
console.log('shared/kdo-lesson-i18n.js —', Object.keys(out.th).length, 'Thai lesson titles');
