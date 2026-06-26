#!/usr/bin/env node
/**
 * Generates Russian, Arabic, Chinese lesson files ders1.js – ders49.js
 * Run: node tools/gen-eastern-lessons.mjs ru|ar|zh|all
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
      'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.')],
    [SP('sp1', w0, t0, 'İfade et'),
     SP('sp2', rows[1][0], rows[1][2], 'Kelime kullan'),
     SP('sp3', rows[2][0], rows[2][2], 'Cümle kur'),
     SP('sp4', rows[3][0], rows[3][2], 'Soru sor'),
     SP('sp5', rows[4][0], rows[4][2], 'Konuşma pratiği')],
    [DL('d1', title, title, [
      LN('A', 'm', rows[0][0], rows[0][2], 'Ali konuşuyor.', [BD(rows[0][1], rows[0][2], 'phrase', 'Örnek.')]),
      LN('B', 'f', rows[1][0], rows[1][2], 'Karşılık.', [BD(rows[1][1], rows[1][2], 'phrase', 'Cevap.')]),
      LN('A', 'm', rows[2][0], rows[2][2], null, []),
      LN('B', 'f', rows[3][0], rows[3][2], null, [])
    ])],
    [LI('li1', sampleLine, sampleLine.split('。')[0].split('.')[0] + '.',
      [Q('Doğru ifade hangisi?', [rows[0][0], rows[1][0], rows[2][0], rows[3][0]], 0, 'Doğru kelime?'),
       Q('İkinci doğru seçenek hangisi?', [rows[1][0], rows[2][0], rows[3][0], rows[4][0]], 1, 'İkinci soru?')])]
  );
}

const LANG_META = {
  ru: { label: 'Russian', l2: 'Падежи & быть' },
  ar: { label: 'Arabic', l2: 'أدوات التعريف' },
  zh: { label: 'Chinese', l2: '量词 & 是' }
};

const LEX = {
  hello: { tr: 'merhaba', ru: ['привет', 'privet'], ar: ['مرحباً', 'marhaban'], zh: ['你好', 'nǐ hǎo'] },
  goodMorning: { tr: 'günaydın', ru: ['доброе утро', 'dobroye utro'], ar: ['صباح الخير', 'ṣabāḥ al-khayr'], zh: ['早上好', 'zǎoshang hǎo'] },
  goodEvening: { tr: 'iyi akşamlar', ru: ['добрый вечер', 'dobryy vecher'], ar: ['مساء الخير', 'masāʾ al-khayr'], zh: ['晚上好', 'wǎnshang hǎo'] },
  bye: { tr: 'hoşça kal', ru: ['до свидания', 'do svidaniya'], ar: ['إلى اللقاء', 'ilā al-liqāʾ'], zh: ['再见', 'zàijiàn'] },
  thanks: { tr: 'teşekkür ederim', ru: ['спасибо', 'spasibo'], ar: ['شكراً', 'shukran'], zh: ['谢谢', 'xièxie'] },
  please: { tr: 'lütfen', ru: ['пожалуйста', 'pozhaluysta'], ar: ['من فضلك', 'min faḍlik'], zh: ['请', 'qǐng'] },
  yes: { tr: 'evet', ru: ['да', 'da'], ar: ['نعم', 'naʿam'], zh: ['是', 'shì'] },
  no: { tr: 'hayır', ru: ['нет', 'net'], ar: ['لا', 'lā'], zh: ['不', 'bù'] },
  nameQuestion: { tr: 'adın ne?', ru: ['как тебя зовут?', 'kak tebya zovut'], ar: ['ما اسمك؟', 'mā ismuka?'], zh: ['你叫什么名字？', 'nǐ jiào shénme míngzi?'] },
  myNameAli: { tr: 'benim adım Ali', ru: ['меня зовут Али', 'menya zovut Ali'], ar: ['اسمي علي', 'ismī ʿAlī'], zh: ['我叫阿里', 'wǒ jiào Ālǐ'] },
  niceMeet: { tr: 'tanıştığıma memnun oldum', ru: ['приятно познакомиться', 'priyatno poznakomitsya'], ar: ['تشرفت بلقائك', 'tasharraftu biliqāʾik'], zh: ['很高兴认识你', 'hěn gāoxìng rènshi nǐ'] },
  howAreYou: { tr: 'nasılsın?', ru: ['как дела?', 'kak dela'], ar: ['كيف حالك؟', 'kayfa ḥāluka?'], zh: ['你好吗？', 'nǐ hǎo ma?'] },
  iAmFine: { tr: 'iyiyim', ru: ['я в порядке', 'ya v poryadke'], ar: ['أنا بخير', 'anā bikhayr'], zh: ['我很好', 'wǒ hěn hǎo'] },
  student: { tr: 'öğrenci', ru: ['студент', 'student'], ar: ['طالب', 'ṭālib'], zh: ['学生', 'xuéshēng'] },
  teacher: { tr: 'öğretmen', ru: ['учитель', 'uchitel'], ar: ['المعلم', 'al-muʿallim'], zh: ['老师', 'lǎoshī'] },
  friend: { tr: 'arkadaş', ru: ['друг', 'drug'], ar: ['الصديق', 'aṣ-ṣadīq'], zh: ['朋友', 'péngyou'] },
  family: { tr: 'aile', ru: ['семья', 'semya'], ar: ['العائلة', 'al-ʿāʾila'], zh: ['家庭', 'jiātíng'] },
  city: { tr: 'şehir', ru: ['город', 'gorod'], ar: ['المدينة', 'al-madīna'], zh: ['城市', 'chéngshì'] },
  country: { tr: 'ülke', ru: ['страна', 'strana'], ar: ['الدولة', 'ad-dawla'], zh: ['国家', 'guójiā'] },
  work: { tr: 'iş', ru: ['работа', 'rabota'], ar: ['العمل', 'al-ʿamal'], zh: ['工作', 'gōngzuò'] },
  school: { tr: 'okul', ru: ['школа', 'shkola'], ar: ['المدرسة', 'al-madrasa'], zh: ['学校', 'xuéxiào'] },
  home: { tr: 'ev', ru: ['дом', 'dom'], ar: ['البيت', 'al-bayt'], zh: ['家', 'jiā'] },
  room: { tr: 'oda', ru: ['комната', 'komnata'], ar: ['الغرفة', 'al-ghurfa'], zh: ['房间', 'fángjiān'] },
  money: { tr: 'para', ru: ['деньги', 'dengi'], ar: ['المال', 'al-māl'], zh: ['钱', 'qián'] },
  price: { tr: 'fiyat', ru: ['цена', 'tsena'], ar: ['السعر', 'as-siʿr'], zh: ['价格', 'jiàgé'] },
  cheap: { tr: 'ucuz', ru: ['дёшево', 'dyoshevo'], ar: ['رخيص', 'rakhīṣ'], zh: ['便宜', 'piányi'] },
  expensive: { tr: 'pahalı', ru: ['дорого', 'dorogo'], ar: ['غالي', 'ghālī'], zh: ['贵', 'guì'] },
  buy: { tr: 'satın almak', ru: ['покупать', 'pokupat'], ar: ['يشتري', 'yashtarī'], zh: ['买', 'mǎi'] },
  sell: { tr: 'satmak', ru: ['продавать', 'prodavat'], ar: ['يبيع', 'yabīʿ'], zh: ['卖', 'mài'] },
  hourWhat: { tr: 'saat kaç?', ru: ['который час?', 'kotoryy chas'], ar: ['كم الساعة؟', 'kam as-sāʿa?'], zh: ['几点了？', 'jǐ diǎn le?'] },
  today: { tr: 'bugün', ru: ['сегодня', 'segodnya'], ar: ['اليوم', 'al-yawm'], zh: ['今天', 'jīntiān'] },
  tomorrow: { tr: 'yarın', ru: ['завтра', 'zavtra'], ar: ['غداً', 'ghadan'], zh: ['明天', 'míngtiān'] },
  yesterday: { tr: 'dün', ru: ['вчера', 'vchera'], ar: ['أمس', 'ams'], zh: ['昨天', 'zuótiān'] },
  monday: { tr: 'pazartesi', ru: ['понедельник', 'ponedelnik'], ar: ['الاثنين', 'al-ithnayn'], zh: ['星期一', 'xīngqīyī'] },
  tuesday: { tr: 'salı', ru: ['вторник', 'vtornik'], ar: ['الثلاثاء', 'ath-thulāthāʾ'], zh: ['星期二', 'xīngqī\'èr'] },
  wednesday: { tr: 'çarşamba', ru: ['среда', 'sreda'], ar: ['الأربعاء', 'al-arbiʿāʾ'], zh: ['星期三', 'xīngqīsān'] },
  thursday: { tr: 'perşembe', ru: ['четверг', 'chetverg'], ar: ['الخميس', 'al-khamīs'], zh: ['星期四', 'xīngqīsì'] },
  friday: { tr: 'cuma', ru: ['пятница', 'pyatnitsa'], ar: ['الجمعة', 'al-jumʿa'], zh: ['星期五', 'xīngqīwǔ'] },
  saturday: { tr: 'cumartesi', ru: ['суббота', 'subbota'], ar: ['السبت', 'as-sabt'], zh: ['星期六', 'xīngqīliù'] },
  sunday: { tr: 'pazar', ru: ['воскресенье', 'voskresenye'], ar: ['الأحد', 'al-aḥad'], zh: ['星期日', 'xīngqīrì'] },
  morning: { tr: 'sabah', ru: ['утро', 'utro'], ar: ['الصباح', 'aṣ-ṣabāḥ'], zh: ['早上', 'zǎoshang'] },
  evening: { tr: 'akşam', ru: ['вечер', 'vecher'], ar: ['المساء', 'al-masāʾ'], zh: ['晚上', 'wǎnshang'] },
  night: { tr: 'gece', ru: ['ночь', 'noch'], ar: ['الليل', 'al-layl'], zh: ['晚上', 'wǎnshang'] },
  date: { tr: 'tarih', ru: ['дата', 'data'], ar: ['التاريخ', 'at-tārīkh'], zh: ['日期', 'rìqī'] },
  calendar: { tr: 'takvim', ru: ['календарь', 'kalendar'], ar: ['التقويم', 'at-taqwīm'], zh: ['日历', 'rìlì'] },
  minute: { tr: 'dakika', ru: ['минута', 'minuta'], ar: ['الدقيقة', 'ad-daqīqa'], zh: ['分钟', 'fēnzhōng'] },
  second: { tr: 'saniye', ru: ['секунда', 'sekunda'], ar: ['الثانية', 'ath-thāniya'], zh: ['秒', 'miǎo'] },
  menu: { tr: 'menü', ru: ['меню', 'menyu'], ar: ['القائمة', 'al-qāʾima'], zh: ['菜单', 'càidān'] },
  water: { tr: 'su', ru: ['вода', 'voda'], ar: ['الماء', 'al-māʾ'], zh: ['水', 'shuǐ'] },
  tea: { tr: 'çay', ru: ['чай', 'chay'], ar: ['الشاي', 'ash-shāy'], zh: ['茶', 'chá'] },
  coffee: { tr: 'kahve', ru: ['кофе', 'kofe'], ar: ['القهوة', 'al-qahwa'], zh: ['咖啡', 'kāfēi'] },
  bread: { tr: 'ekmek', ru: ['хлеб', 'khleb'], ar: ['الخبز', 'al-khubz'], zh: ['面包', 'miànbāo'] },
  soup: { tr: 'çorba', ru: ['суп', 'sup'], ar: ['الحساء', 'al-ḥasāʾ'], zh: ['汤', 'tāng'] },
  salad: { tr: 'salata', ru: ['салат', 'salat'], ar: ['السلطة', 'as-salaṭa'], zh: ['沙拉', 'shālā'] },
  chicken: { tr: 'tavuk', ru: ['курица', 'kuritsa'], ar: ['الدجاج', 'ad-dajāj'], zh: ['鸡肉', 'jīròu'] },
  fish: { tr: 'balık', ru: ['рыба', 'ryba'], ar: ['السمك', 'as-samak'], zh: ['鱼', 'yú'] },
  rice: { tr: 'pirinç', ru: ['рис', 'ris'], ar: ['الأرز', 'al-aruzz'], zh: ['米饭', 'mǐfàn'] },
  delicious: { tr: 'lezzetli', ru: ['вкусный', 'vkusnyy'], ar: ['لذيذ', 'ladhīdh'], zh: ['好吃', 'hǎochī'] },
  bill: { tr: 'hesap', ru: ['счёт', 'schyot'], ar: ['الفاتورة', 'al-fātūra'], zh: ['账单', 'zhàngdān'] },
  restaurant: { tr: 'restoran', ru: ['ресторан', 'restoran'], ar: ['المطعم', 'al-maṭʿam'], zh: ['餐馆', 'cānguǎn'] },
  table: { tr: 'masa', ru: ['стол', 'stol'], ar: ['الطاولة', 'aṭ-ṭāwila'], zh: ['桌子', 'zhuōzi'] },
  seat: { tr: 'koltuk / yer', ru: ['место', 'mesto'], ar: ['المقعد', 'al-maqʿad'], zh: ['座位', 'zuòwèi'] },
  market: { tr: 'market', ru: ['магазин', 'magazin'], ar: ['المتجر', 'al-matjar'], zh: ['商店', 'shāngdiàn'] },
  discount: { tr: 'indirim', ru: ['скидка', 'skidka'], ar: ['الخصم', 'al-khaṣm'], zh: ['折扣', 'zhékòu'] },
  size: { tr: 'beden', ru: ['размер', 'razmer'], ar: ['المقاس', 'al-miqās'], zh: ['尺码', 'chǐmǎ'] },
  color: { tr: 'renk', ru: ['цвет', 'tsvet'], ar: ['اللون', 'al-lawn'], zh: ['颜色', 'yánsè'] },
  tryOn: { tr: 'denemek', ru: ['примерить', 'primerit'], ar: ['يقيس', 'yaqīs'], zh: ['试穿', 'shìchuān'] },
  receipt: { tr: 'fiş', ru: ['чек', 'chek'], ar: ['الإيصال', 'al-īṣāl'], zh: ['收据', 'shōujù'] },
  street: { tr: 'cadde', ru: ['улица', 'ulitsa'], ar: ['الشارع', 'ash-shāriʿ'], zh: ['街道', 'jiēdào'] },
  left: { tr: 'sol', ru: ['налево', 'nalevo'], ar: ['يسار', 'yasār'], zh: ['左边', 'zuǒbiān'] },
  right: { tr: 'sağ', ru: ['направо', 'napravo'], ar: ['يمين', 'yamīn'], zh: ['右边', 'yòubiān'] },
  straight: { tr: 'dümdüz', ru: ['прямо', 'pryamo'], ar: ['مباشرة', 'mubāshara'], zh: ['直走', 'zhízǒu'] },
  station: { tr: 'istasyon', ru: ['станция', 'stantsiya'], ar: ['المحطة', 'al-maḥaṭṭa'], zh: ['车站', 'chēzhàn'] },
  busStop: { tr: 'durak', ru: ['остановка', 'ostanovka'], ar: ['الموقف', 'al-mawqif'], zh: ['站点', 'zhàndiǎn'] },
  map: { tr: 'harita', ru: ['карта', 'karta'], ar: ['الخريطة', 'al-kharīṭa'], zh: ['地图', 'dìtú'] },
  where: { tr: 'nerede?', ru: ['где?', 'gde'], ar: ['أين؟', 'ayna?'], zh: ['在哪里？', 'zài nǎlǐ?'] },
  train: { tr: 'tren', ru: ['поезд', 'poyezd'], ar: ['القطار', 'al-qiṭār'], zh: ['火车', 'huǒchē'] },
  bus: { tr: 'otobüs', ru: ['автобус', 'avtobus'], ar: ['الحافلة', 'al-ḥāfila'], zh: ['公交车', 'gōngjiāochē'] },
  metro: { tr: 'metro', ru: ['метро', 'metro'], ar: ['المترو', 'al-mītrū'], zh: ['地铁', 'dìtiě'] },
  airport: { tr: 'havaalanı', ru: ['аэропорт', 'aeroport'], ar: ['المطار', 'al-maṭār'], zh: ['机场', 'jīchǎng'] },
  ticket: { tr: 'bilet', ru: ['билет', 'bilet'], ar: ['التذكرة', 'at-tadhkira'], zh: ['票', 'piào'] },
  passport: { tr: 'pasaport', ru: ['паспорт', 'pasport'], ar: ['جواز السفر', 'jawāz as-safar'], zh: ['护照', 'hùzhào'] },
  departure: { tr: 'kalkış', ru: ['отправление', 'otpravleniye'], ar: ['المغادرة', 'al-mughādara'], zh: ['出发', 'chūfā'] },
  arrival: { tr: 'varış', ru: ['прибытие', 'pribytiye'], ar: ['الوصول', 'al-wuṣūl'], zh: ['到达', 'dàodá'] },
  hotel: { tr: 'otel', ru: ['отель', 'otel'], ar: ['الفندق', 'al-funduq'], zh: ['酒店', 'jiǔdiàn'] },
  reception: { tr: 'resepsiyon', ru: ['ресепшн', 'resepshn'], ar: ['الاستقبال', 'al-istiqbāl'], zh: ['前台', 'qiántái'] },
  reservation: { tr: 'rezervasyon', ru: ['бронь', 'bron'], ar: ['الحجز', 'al-ḥajz'], zh: ['预订', 'yùdìng'] },
  key: { tr: 'anahtar', ru: ['ключ', 'klyuch'], ar: ['المفتاح', 'al-miftāḥ'], zh: ['钥匙', 'yàoshi'] },
  breakfast: { tr: 'kahvaltı', ru: ['завтрак', 'zavtrak'], ar: ['الإفطار', 'al-ifṭār'], zh: ['早餐', 'zǎocān'] },
  wifi: { tr: 'wifi', ru: ['вайфай', 'vayfay'], ar: ['واي فاي', 'wāy fāy'], zh: ['无线网', 'wúxiànwǎng'] },
  office: { tr: 'ofis', ru: ['офис', 'ofis'], ar: ['المكتب', 'al-maktab'], zh: ['办公室', 'bàngōngshì'] },
  company: { tr: 'şirket', ru: ['компания', 'kompaniya'], ar: ['الشركة', 'ash-sharika'], zh: ['公司', 'gōngsī'] },
  meeting: { tr: 'toplantı', ru: ['встреча', 'vstrecha'], ar: ['الاجتماع', 'al-ijtimāʿ'], zh: ['会议', 'huìyì'] },
  contract: { tr: 'sözleşme', ru: ['контракт', 'kontrakt'], ar: ['العقد', 'al-ʿaqd'], zh: ['合同', 'hétóng'] },
  salary: { tr: 'maaş', ru: ['зарплата', 'zarplata'], ar: ['الراتب', 'ar-rātib'], zh: ['工资', 'gōngzī'] },
  computer: { tr: 'bilgisayar', ru: ['компьютер', 'kompyuter'], ar: ['الحاسوب', 'al-ḥāsūb'], zh: ['电脑', 'diànnǎo'] },
  internet: { tr: 'internet', ru: ['интернет', 'internet'], ar: ['الإنترنت', 'al-internet'], zh: ['互联网', 'hùliánwǎng'] },
  doctor: { tr: 'doktor', ru: ['врач', 'vrach'], ar: ['الطبيب', 'aṭ-ṭabīb'], zh: ['医生', 'yīshēng'] },
  hospital: { tr: 'hastane', ru: ['больница', 'bolnitsa'], ar: ['المستشفى', 'al-mustashfā'], zh: ['医院', 'yīyuàn'] },
  pharmacy: { tr: 'eczane', ru: ['аптека', 'apteka'], ar: ['الصيدلية', 'aṣ-ṣaydaliya'], zh: ['药店', 'yàodiàn'] },
  pain: { tr: 'ağrı', ru: ['боль', 'bol'], ar: ['الألم', 'al-alam'], zh: ['疼痛', 'téngtòng'] },
  fever: { tr: 'ateş', ru: ['температура', 'temperatura'], ar: ['الحمى', 'al-ḥummā'], zh: ['发烧', 'fāshāo'] },
  medicine: { tr: 'ilaç', ru: ['лекарство', 'lekarstvo'], ar: ['الدواء', 'ad-dawāʾ'], zh: ['药', 'yào'] },
  call: { tr: 'aramak', ru: ['звонить', 'zvonit'], ar: ['يتصل', 'yattaṣil'], zh: ['打电话', 'dǎ diànhuà'] },
  message: { tr: 'mesaj', ru: ['сообщение', 'soobshcheniye'], ar: ['الرسالة', 'ar-risāla'], zh: ['消息', 'xiāoxi'] },
  email: { tr: 'e-posta', ru: ['электронная почта', 'elektronnaya pochta'], ar: ['البريد الإلكتروني', 'al-barīd al-iliktrūnī'], zh: ['电子邮件', 'diànzǐ yóujiàn'] },
  numberPhone: { tr: 'telefon numarası', ru: ['номер телефона', 'nomer telefona'], ar: ['رقم الهاتف', 'raqm al-hātif'], zh: ['电话号码', 'diànhuà hàomǎ'] },
  repeat: { tr: 'tekrar eder misiniz?', ru: ['повторите, пожалуйста', 'povtorite pozhaluysta'], ar: ['هل يمكنك التكرار؟', 'hal yumkinuka at-tikrār?'], zh: ['请再说一遍', 'qǐng zài shuō yí biàn'] },
  social: { tr: 'sosyal', ru: ['социальный', 'sotsialnyy'], ar: ['اجتماعي', 'ijtimāʿī'], zh: ['社交', 'shèjiāo'] },
  party: { tr: 'parti', ru: ['вечеринка', 'vecherinka'], ar: ['الحفلة', 'al-ḥafla'], zh: ['聚会', 'jùhuì'] },
  cinema: { tr: 'sinema', ru: ['кино', 'kino'], ar: ['السينما', 'as-sīnimā'], zh: ['电影', 'diànyǐng'] },
  music: { tr: 'müzik', ru: ['музыка', 'muzyka'], ar: ['الموسيقى', 'al-mūsīqā'], zh: ['音乐', 'yīnyuè'] },
  invite: { tr: 'davet etmek', ru: ['приглашать', 'priglashat'], ar: ['يدعو', 'yadʿū'], zh: ['邀请', 'yāoqǐng'] },
  celebrate: { tr: 'kutlamak', ru: ['праздновать', 'prazdnovat'], ar: ['يحتفل', 'yaḥtafil'], zh: ['庆祝', 'qìngzhù'] },
  apartment: { tr: 'daire', ru: ['квартира', 'kvartira'], ar: ['الشقة', 'ash-shuqqa'], zh: ['公寓', 'gōngyù'] },
  kitchen: { tr: 'mutfak', ru: ['кухня', 'kukhnya'], ar: ['المطبخ', 'al-maṭbakh'], zh: ['厨房', 'chúfáng'] },
  bathroom: { tr: 'banyo', ru: ['ванная', 'vannaya'], ar: ['الحمام', 'al-ḥammām'], zh: ['浴室', 'yùshì'] },
  bed: { tr: 'yatak', ru: ['кровать', 'krovat'], ar: ['السرير', 'as-sarīr'], zh: ['床', 'chuáng'] },
  window: { tr: 'pencere', ru: ['окно', 'okno'], ar: ['النافذة', 'an-nāfidha'], zh: ['窗户', 'chuānghu'] },
  education: { tr: 'eğitim', ru: ['образование', 'obrazovaniye'], ar: ['التعليم', 'at-taʿlīm'], zh: ['教育', 'jiàoyù'] },
  university: { tr: 'üniversite', ru: ['университет', 'universitet'], ar: ['الجامعة', 'al-jāmiʿa'], zh: ['大学', 'dàxué'] },
  exam: { tr: 'sınav', ru: ['экзамен', 'ekzamen'], ar: ['الامتحان', 'al-imtiḥān'], zh: ['考试', 'kǎoshì'] },
  lesson: { tr: 'ders', ru: ['урок', 'urok'], ar: ['الدرس', 'ad-dars'], zh: ['课', 'kè'] },
  question: { tr: 'soru', ru: ['вопрос', 'vopros'], ar: ['السؤال', 'as-suʾāl'], zh: ['问题', 'wèntí'] },
  answer: { tr: 'cevap', ru: ['ответ', 'otvet'], ar: ['الجواب', 'al-jawāb'], zh: ['回答', 'huídá'] },
  russia: { tr: 'Rusya', ru: ['Россия', 'Rossiya'], ar: ['روسيا', 'Rūsiyā'], zh: ['俄罗斯', 'Éluósī'] },
  china: { tr: 'Çin', ru: ['Китай', 'Kitay'], ar: ['الصين', 'aṣ-Ṣīn'], zh: ['中国', 'Zhōngguó'] },
  turkey: { tr: 'Türkiye', ru: ['Турция', 'Turtsiya'], ar: ['تركيا', 'Turkiyā'], zh: ['土耳其', 'Tǔ\'ěrqí'] },
  happy: { tr: 'mutlu', ru: ['счастливый', 'schastlivyy'], ar: ['سعيد', 'saʿīd'], zh: ['高兴', 'gāoxìng'] },
  sad: { tr: 'üzgün', ru: ['грустный', 'grustnyy'], ar: ['حزين', 'ḥazīn'], zh: ['难过', 'nánguò'] },
  tired: { tr: 'yorgun', ru: ['уставший', 'ustavshiy'], ar: ['متعب', 'mutaʿab'], zh: ['累', 'lèi'] },
  angry: { tr: 'kızgın', ru: ['злой', 'zloy'], ar: ['غاضب', 'ghāḍib'], zh: ['生气', 'shēngqì'] },
  weather: { tr: 'hava', ru: ['погода', 'pogoda'], ar: ['الطقس', 'aṭ-ṭaqs'], zh: ['天气', 'tiānqì'] },
  rain: { tr: 'yağmur', ru: ['дождь', 'dozhd'], ar: ['المطر', 'al-maṭar'], zh: ['雨', 'yǔ'] },
  snow: { tr: 'kar', ru: ['снег', 'sneg'], ar: ['الثلج', 'ath-thalj'], zh: ['雪', 'xuě'] },
  sun: { tr: 'güneş', ru: ['солнце', 'solntse'], ar: ['الشمس', 'ash-shams'], zh: ['太阳', 'tàiyáng'] },
  wind: { tr: 'rüzgar', ru: ['ветер', 'veter'], ar: ['الرياح', 'ar-riyāḥ'], zh: ['风', 'fēng'] },
  hobby: { tr: 'hobi', ru: ['хобби', 'khobbi'], ar: ['الهواية', 'al-hiwāya'], zh: ['爱好', 'àihào'] },
  read: { tr: 'okumak', ru: ['читать', 'chitat'], ar: ['يقرأ', 'yaqraʾ'], zh: ['读', 'dú'] },
  write: { tr: 'yazmak', ru: ['писать', 'pisat'], ar: ['يكتب', 'yaktub'], zh: ['写', 'xiě'] },
  speak: { tr: 'konuşmak', ru: ['говорить', 'govorit'], ar: ['يتكلم', 'yatakallam'], zh: ['说', 'shuō'] },
  listen: { tr: 'dinlemek', ru: ['слушать', 'slushat'], ar: ['يستمع', 'yastamiʿ'], zh: ['听', 'tīng'] },
  run: { tr: 'koşmak', ru: ['бегать', 'begat'], ar: ['يركض', 'yarkuḍ'], zh: ['跑', 'pǎo'] },
  walk: { tr: 'yürümek', ru: ['ходить', 'khodit'], ar: ['يمشي', 'yamshī'], zh: ['走', 'zǒu'] },
  sleep: { tr: 'uyumak', ru: ['спать', 'spat'], ar: ['ينام', 'yanām'], zh: ['睡觉', 'shuìjiào'] },
  eat: { tr: 'yemek yemek', ru: ['есть', 'yest'], ar: ['يأكل', 'yaʾkul'], zh: ['吃', 'chī'] },
  drink: { tr: 'içmek', ru: ['пить', 'pit'], ar: ['يشرب', 'yashrab'], zh: ['喝', 'hē'] },
  think: { tr: 'düşünmek', ru: ['думать', 'dumat'], ar: ['يفكر', 'yufakkir'], zh: ['想', 'xiǎng'] },
  understand: { tr: 'anlamak', ru: ['понимать', 'ponimat'], ar: ['يفهم', 'yafham'], zh: ['懂', 'dǒng'] },
  open: { tr: 'açmak', ru: ['открывать', 'otkryvat'], ar: ['يفتح', 'yaftaḥ'], zh: ['打开', 'dǎkāi'] },
  close: { tr: 'kapatmak', ru: ['закрывать', 'zakryvat'], ar: ['يغلق', 'yughliq'], zh: ['关闭', 'guānbì'] },
  start: { tr: 'başlamak', ru: ['начинать', 'nachinat'], ar: ['يبدأ', 'yabdaʾ'], zh: ['开始', 'kāishǐ'] },
  finish: { tr: 'bitirmek', ru: ['заканчивать', 'zakanchivat'], ar: ['ينهي', 'yunhī'], zh: ['结束', 'jiéshù'] },
  help: { tr: 'yardım etmek', ru: ['помогать', 'pomogat'], ar: ['يساعد', 'yusāʿid'], zh: ['帮助', 'bāngzhù'] },
  ask: { tr: 'sormak', ru: ['спрашивать', 'sprashivat'], ar: ['يسأل', 'yasʾal'], zh: ['问', 'wèn'] },
  answerVerb: { tr: 'cevap vermek', ru: ['отвечать', 'otvechat'], ar: ['يجيب', 'yujīb'], zh: ['回答', 'huídá'] },
  clean: { tr: 'temizlemek', ru: ['чистить', 'chistit'], ar: ['ينظف', 'yunazzif'], zh: ['清理', 'qīnglǐ'] },
  learn: { tr: 'öğrenmek', ru: ['изучать', 'izuchat'], ar: ['يتعلم', 'yataʿallam'], zh: ['学习', 'xuéxí'] },
  new: { tr: 'yeni', ru: ['новый', 'novyy'], ar: ['جديد', 'jadīd'], zh: ['新的', 'xīn de'] },
  old: { tr: 'eski', ru: ['старый', 'staryy'], ar: ['قديم', 'qadīm'], zh: ['旧的', 'jiù de'] },
  big: { tr: 'büyük', ru: ['большой', 'bolshoy'], ar: ['كبير', 'kabīr'], zh: ['大的', 'dà de'] },
  small: { tr: 'küçük', ru: ['маленький', 'malenkiy'], ar: ['صغير', 'ṣaghīr'], zh: ['小的', 'xiǎo de'] },
  beautiful: { tr: 'güzel', ru: ['красивый', 'krasivyy'], ar: ['جميل', 'jamīl'], zh: ['漂亮', 'piàoliang'] },
  difficult: { tr: 'zor', ru: ['трудный', 'trudnyy'], ar: ['صعب', 'ṣaʿb'], zh: ['难', 'nán'] },
  easy: { tr: 'kolay', ru: ['лёгкий', 'lyogkiy'], ar: ['سهل', 'sahl'], zh: ['容易', 'róngyì'] },
  fast: { tr: 'hızlı', ru: ['быстрый', 'bystryy'], ar: ['سريع', 'sarīʿ'], zh: ['快', 'kuài'] },
  slow: { tr: 'yavaş', ru: ['медленный', 'medlennyy'], ar: ['بطيء', 'baṭīʾ'], zh: ['慢', 'màn'] },
  hot: { tr: 'sıcak', ru: ['горячий', 'goryachiy'], ar: ['حار', 'ḥārr'], zh: ['热', 'rè'] },
  cold: { tr: 'soğuk', ru: ['холодный', 'kholodnyy'], ar: ['بارد', 'bārid'], zh: ['冷', 'lěng'] },
  important: { tr: 'önemli', ru: ['важный', 'vazhnyy'], ar: ['مهم', 'muhimm'], zh: ['重要', 'zhòngyào'] },
  possible: { tr: 'mümkün', ru: ['возможно', 'vozmozhno'], ar: ['ممكن', 'mumkin'], zh: ['可能', 'kěnéng'] },
  red: { tr: 'kırmızı', ru: ['красный', 'krasnyy'], ar: ['أحمر', 'aḥmar'], zh: ['红色', 'hóngsè'] },
  blue: { tr: 'mavi', ru: ['синий', 'siniy'], ar: ['أزرق', 'azraq'], zh: ['蓝色', 'lánsè'] },
  green: { tr: 'yeşil', ru: ['зелёный', 'zelyonyy'], ar: ['أخضر', 'akhḍar'], zh: ['绿色', 'lǜsè'] },
  black: { tr: 'siyah', ru: ['чёрный', 'chyornyy'], ar: ['أسود', 'aswad'], zh: ['黑色', 'hēisè'] },
  white: { tr: 'beyaz', ru: ['белый', 'belyy'], ar: ['أبيض', 'abyaḍ'], zh: ['白色', 'báisè'] },
  yellow: { tr: 'sarı', ru: ['жёлтый', 'zhyoltyy'], ar: ['أصفر', 'aṣfar'], zh: ['黄色', 'huángsè'] },
  orange: { tr: 'turuncu', ru: ['оранжевый', 'oranzhevyy'], ar: ['برتقالي', 'burtuqālī'], zh: ['橙色', 'chéngsè'] },
  purple: { tr: 'mor', ru: ['фиолетовый', 'fioletovyy'], ar: ['بنفسجي', 'banafsajī'], zh: ['紫色', 'zǐsè'] },
  gray: { tr: 'gri', ru: ['серый', 'seryy'], ar: ['رمادي', 'ramādī'], zh: ['灰色', 'huīsè'] },
  pink: { tr: 'pembe', ru: ['розовый', 'rozovyy'], ar: ['وردي', 'wardī'], zh: ['粉色', 'fěnsè'] },
  one: { tr: 'bir', ru: ['один', 'odin'], ar: ['واحد', 'wāḥid'], zh: ['一', 'yī'] },
  two: { tr: 'iki', ru: ['два', 'dva'], ar: ['اثنان', 'ithnān'], zh: ['二', 'èr'] },
  three: { tr: 'üç', ru: ['три', 'tri'], ar: ['ثلاثة', 'thalātha'], zh: ['三', 'sān'] },
  four: { tr: 'dört', ru: ['четыре', 'chetyre'], ar: ['أربعة', 'arbaʿa'], zh: ['四', 'sì'] },
  five: { tr: 'beş', ru: ['пять', 'pyat'], ar: ['خمسة', 'khamsa'], zh: ['五', 'wǔ'] },
  ten: { tr: 'on', ru: ['десять', 'desyat'], ar: ['عشرة', 'ʿashara'], zh: ['十', 'shí'] },
  hundred: { tr: 'yüz', ru: ['сто', 'sto'], ar: ['مئة', 'miʾa'], zh: ['一百', 'yì bǎi'] },
  thousand: { tr: 'bin', ru: ['тысяча', 'tysyacha'], ar: ['ألف', 'alf'], zh: ['一千', 'yì qiān'] },
  yuan: { tr: 'yuan', ru: ['юань', 'yuan'], ar: ['يوان', 'yuān'], zh: ['元', 'yuán'] },
  ruble: { tr: 'ruble', ru: ['рубль', 'rubl'], ar: ['روبل', 'rūbil'], zh: ['卢布', 'lúbù'] },
  dollar: { tr: 'dolar', ru: ['доллар', 'dollar'], ar: ['دولار', 'dūlār'], zh: ['美元', 'měiyuán'] },
  euro: { tr: 'euro', ru: ['евро', 'evro'], ar: ['يورو', 'yūrū'], zh: ['欧元', 'ōuyuán'] },
  bank: { tr: 'banka', ru: ['банк', 'bank'], ar: ['البنك', 'al-bank'], zh: ['银行', 'yínháng'] },
  card: { tr: 'kart', ru: ['карта', 'karta'], ar: ['البطاقة', 'al-biṭāqa'], zh: ['卡', 'kǎ'] },
  cash: { tr: 'nakit', ru: ['наличные', 'nalichnyye'], ar: ['نقد', 'naqd'], zh: ['现金', 'xiànjīn'] },
  transfer: { tr: 'transfer', ru: ['перевод', 'perevod'], ar: ['تحويل', 'taḥwīl'], zh: ['转账', 'zhuǎnzhàng'] },
  science: { tr: 'bilim', ru: ['наука', 'nauka'], ar: ['العلم', 'al-ʿilm'], zh: ['科学', 'kēxué'] },
  physics: { tr: 'fizik', ru: ['физика', 'fizika'], ar: ['الفيزياء', 'al-fīziyāʾ'], zh: ['物理', 'wùlǐ'] },
  chemistry: { tr: 'kimya', ru: ['химия', 'khimiya'], ar: ['الكيمياء', 'al-kīmiyāʾ'], zh: ['化学', 'huàxué'] },
  biology: { tr: 'biyoloji', ru: ['биология', 'biologiya'], ar: ['الأحياء', 'al-aḥyāʾ'], zh: ['生物', 'shēngwù'] },
  experiment: { tr: 'deney', ru: ['эксперимент', 'eksperiment'], ar: ['التجربة', 'at-tajriba'], zh: ['实验', 'shíyàn'] },
  data: { tr: 'veri', ru: ['данные', 'dannyye'], ar: ['البيانات', 'al-bayānāt'], zh: ['数据', 'shùjù'] },
  research: { tr: 'araştırma', ru: ['исследование', 'issledovaniye'], ar: ['البحث', 'al-baḥth'], zh: ['研究', 'yánjiū'] },
  art: { tr: 'sanat', ru: ['искусство', 'iskusstvo'], ar: ['الفن', 'al-fann'], zh: ['艺术', 'yìshù'] },
  painting: { tr: 'resim', ru: ['живопись', 'zhivopis'], ar: ['الرسم', 'ar-rasm'], zh: ['绘画', 'huìhuà'] },
  song: { tr: 'şarkı', ru: ['песня', 'pesnya'], ar: ['الأغنية', 'al-ughniya'], zh: ['歌曲', 'gēqǔ'] },
  theater: { tr: 'tiyatro', ru: ['театр', 'teatr'], ar: ['المسرح', 'al-masraḥ'], zh: ['剧院', 'jùyuàn'] },
  museum: { tr: 'müze', ru: ['музей', 'muzey'], ar: ['المتحف', 'al-matḥaf'], zh: ['博物馆', 'bówùguǎn'] },
  history: { tr: 'tarih', ru: ['история', 'istoriya'], ar: ['التاريخ', 'at-tārīkh'], zh: ['历史', 'lìshǐ'] },
  why: { tr: 'neden?', ru: ['почему?', 'pochemu'], ar: ['لماذا؟', 'limādhā?'], zh: ['为什么？', 'wèishénme?'] },
  when: { tr: 'ne zaman?', ru: ['когда?', 'kogda'], ar: ['متى؟', 'matā?'], zh: ['什么时候？', 'shénme shíhou?'] },
  who: { tr: 'kim?', ru: ['кто?', 'kto'], ar: ['من؟', 'man?'], zh: ['谁？', 'shéi?'] },
  which: { tr: 'hangi?', ru: ['какой?', 'kakoy'], ar: ['أي؟', 'ayy?'], zh: ['哪个？', 'nǎge?'] },
  how: { tr: 'nasıl?', ru: ['как?', 'kak'], ar: ['كيف؟', 'kayfa?'], zh: ['怎么？', 'zěnme?'] },
  engineer: { tr: 'mühendis', ru: ['инженер', 'inzhener'], ar: ['مهندس', 'muhandis'], zh: ['工程师', 'gōngchéngshī'] },
  programmer: { tr: 'yazılımcı', ru: ['программист', 'programmist'], ar: ['مبرمج', 'mubarmij'], zh: ['程序员', 'chéngxùyuán'] },
  nurse: { tr: 'hemşire', ru: ['медсестра', 'medsestra'], ar: ['ممرض', 'mumarriḍ'], zh: ['护士', 'hùshi'] },
  lawyer: { tr: 'avukat', ru: ['юрист', 'yurist'], ar: ['محام', 'muḥāmī'], zh: ['律师', 'lǜshī'] },
  manager: { tr: 'yönetici', ru: ['менеджер', 'menedzher'], ar: ['مدير', 'mudīr'], zh: ['经理', 'jīnglǐ'] },
  opinion: { tr: 'görüş', ru: ['мнение', 'mneniye'], ar: ['الرأي', 'ar-raʾy'], zh: ['意见', 'yìjiàn'] },
  agree: { tr: 'katılmak', ru: ['согласен', 'soglasen'], ar: ['أوافق', 'uwāfiq'], zh: ['同意', 'tóngyì'] },
  disagree: { tr: 'katılmamak', ru: ['не согласен', 'ne soglasen'], ar: ['لا أوافق', 'lā uwāfiq'], zh: ['不同意', 'bù tóngyì'] },
  maybe: { tr: 'belki', ru: ['может быть', 'mozhet byt'], ar: ['ربما', 'rubbamā'], zh: ['也许', 'yěxǔ'] },
  sure: { tr: 'emin', ru: ['уверен', 'uveren'], ar: ['متأكد', 'mutaʾakkid'], zh: ['确定', 'quèdìng'] },
  dog: { tr: 'köpek', ru: ['собака', 'sobaka'], ar: ['الكلب', 'al-kalb'], zh: ['狗', 'gǒu'] },
  cat: { tr: 'kedi', ru: ['кошка', 'koshka'], ar: ['القطة', 'al-qiṭṭa'], zh: ['猫', 'māo'] },
  bird: { tr: 'kuş', ru: ['птица', 'ptitsa'], ar: ['الطائر', 'aṭ-ṭāʾir'], zh: ['鸟', 'niǎo'] },
  horse: { tr: 'at', ru: ['лошадь', 'loshad'], ar: ['الحصان', 'al-ḥiṣān'], zh: ['马', 'mǎ'] },
  lion: { tr: 'aslan', ru: ['лев', 'lev'], ar: ['الأسد', 'al-asad'], zh: ['狮子', 'shīzi'] },
  stomach: { tr: 'mide', ru: ['желудок', 'zheludok'], ar: ['المعدة', 'al-miʿda'], zh: ['胃', 'wèi'] },
  head: { tr: 'baş', ru: ['голова', 'golova'], ar: ['الرأس', 'ar-raʾs'], zh: ['头', 'tóu'] },
  tooth: { tr: 'diş', ru: ['зуб', 'zub'], ar: ['السن', 'as-sinn'], zh: ['牙齿', 'yáchǐ'] },
  hand: { tr: 'el', ru: ['рука', 'ruka'], ar: ['اليد', 'al-yad'], zh: ['手', 'shǒu'] },
  leg: { tr: 'bacak', ru: ['нога', 'noga'], ar: ['الساق', 'as-sāq'], zh: ['腿', 'tuǐ'] },
  digital: { tr: 'dijital', ru: ['цифровой', 'tsifrovoy'], ar: ['رقمي', 'raqamī'], zh: ['数字化', 'shùzìhuà'] },
  website: { tr: 'web sitesi', ru: ['сайт', 'sayt'], ar: ['الموقع', 'al-mawqiʿ'], zh: ['网站', 'wǎngzhàn'] },
  password: { tr: 'şifre', ru: ['пароль', 'parol'], ar: ['كلمة المرور', 'kalimat al-murūr'], zh: ['密码', 'mìmǎ'] },
  account: { tr: 'hesap', ru: ['аккаунт', 'akkaunt'], ar: ['الحساب', 'al-ḥisāb'], zh: ['账户', 'zhànghù'] },
  app: { tr: 'uygulama', ru: ['приложение', 'prilozheniye'], ar: ['التطبيق', 'at-taṭbīq'], zh: ['应用', 'yìngyòng'] },
  download: { tr: 'indirmek', ru: ['скачивать', 'skachivat'], ar: ['يحمل', 'yuḥammil'], zh: ['下载', 'xiàzài'] },
  upload: { tr: 'yüklemek', ru: ['загружать', 'zagruzhat'], ar: ['يرفع', 'yarfaʿ'], zh: ['上传', 'shàngchuán'] },
  click: { tr: 'tıklamak', ru: ['нажимать', 'nazhimat'], ar: ['ينقر', 'yanqur'], zh: ['点击', 'diǎnjī'] },
  socialNetwork: { tr: 'sosyal ağ', ru: ['соцсеть', 'sotset'], ar: ['الشبكة الاجتماعية', 'ash-shabaka al-ijtimāʿiyya'], zh: ['社交网络', 'shèjiāo wǎngluò'] },
  mountain: { tr: 'dağ', ru: ['гора', 'gora'], ar: ['الجبل', 'al-jabal'], zh: ['山', 'shān'] },
  river: { tr: 'nehir', ru: ['река', 'reka'], ar: ['النهر', 'an-nahr'], zh: ['河', 'hé'] },
  sea: { tr: 'deniz', ru: ['море', 'more'], ar: ['البحر', 'al-baḥr'], zh: ['海', 'hǎi'] },
  lake: { tr: 'göl', ru: ['озеро', 'ozero'], ar: ['البحيرة', 'al-buḥayra'], zh: ['湖', 'hú'] },
  forest: { tr: 'orman', ru: ['лес', 'les'], ar: ['الغابة', 'al-ghāba'], zh: ['森林', 'sēnlín'] },
  desert: { tr: 'çöl', ru: ['пустыня', 'pustynya'], ar: ['الصحراء', 'aṣ-ṣaḥrāʾ'], zh: ['沙漠', 'shāmò'] },
  island: { tr: 'ada', ru: ['остров', 'ostrov'], ar: ['الجزيرة', 'al-jazīra'], zh: ['岛', 'dǎo'] },
  continent: { tr: 'kıta', ru: ['континент', 'kontinent'], ar: ['القارة', 'al-qāra'], zh: ['洲', 'zhōu'] },
  north: { tr: 'kuzey', ru: ['север', 'sever'], ar: ['الشمال', 'ash-shamāl'], zh: ['北方', 'běifāng'] },
  south: { tr: 'güney', ru: ['юг', 'yug'], ar: ['الجنوب', 'al-janūb'], zh: ['南方', 'nánfāng'] },
  east: { tr: 'doğu', ru: ['восток', 'vostok'], ar: ['الشرق', 'ash-sharq'], zh: ['东方', 'dōngfāng'] },
  west: { tr: 'batı', ru: ['запад', 'zapad'], ar: ['الغرب', 'al-gharb'], zh: ['西方', 'xīfāng'] },
  emperor: { tr: 'imparator', ru: ['император', 'imperator'], ar: ['الإمبراطور', 'al-imbrāṭūr'], zh: ['皇帝', 'huángdì'] },
  revolution: { tr: 'devrim', ru: ['революция', 'revolyutsiya'], ar: ['الثورة', 'ath-thawra'], zh: ['革命', 'gémìng'] },
  war: { tr: 'savaş', ru: ['война', 'voyna'], ar: ['الحرب', 'al-ḥarb'], zh: ['战争', 'zhànzhēng'] },
  peace: { tr: 'barış', ru: ['мир', 'mir'], ar: ['السلام', 'as-salām'], zh: ['和平', 'hépíng'] },
  culture: { tr: 'kültür', ru: ['культура', 'kultura'], ar: ['الثقافة', 'ath-thaqāfa'], zh: ['文化', 'wénhuà'] },
  language: { tr: 'dil', ru: ['язык', 'yazyk'], ar: ['اللغة', 'al-lugha'], zh: ['语言', 'yǔyán'] },
  useful: { tr: 'faydalı', ru: ['полезный', 'poleznyy'], ar: ['مفيد', 'mufīd'], zh: ['有用', 'yǒuyòng'] },
  impossible: { tr: 'imkansız', ru: ['невозможно', 'nevozmozhno'], ar: ['مستحيل', 'mustaḥīl'], zh: ['不可能', 'bù kěnéng'] },
  ofCourse: { tr: 'tabii ki', ru: ['конечно', 'konechno'], ar: ['بالطبع', 'biṭ-ṭabʿ'], zh: ['当然', 'dāngrán'] },
  maybeLater: { tr: 'belki sonra', ru: ['может позже', 'mozhet pozzhe'], ar: ['ربما لاحقاً', 'rubbamā lāḥiqan'], zh: ['也许以后', 'yěxǔ yǐhòu'] },
  iDontKnow: { tr: 'bilmiyorum', ru: ['я не знаю', 'ya ne znayu'], ar: ['لا أعرف', 'lā aʿrif'], zh: ['我不知道', 'wǒ bù zhīdào'] },
  canYouHelp: { tr: 'yardım eder misiniz?', ru: ['вы можете помочь?', 'vy mozhete pomoch'], ar: ['هل يمكنك المساعدة؟', 'hal yumkinuka al-musāʿada?'], zh: ['你能帮我吗？', 'nǐ néng bāng wǒ ma?'] },
  excuseMe: { tr: 'affedersiniz', ru: ['извините', 'izvinite'], ar: ['عفواً', 'ʿafwan'], zh: ['不好意思', 'bù hǎoyìsi'] },
  goodLuck: { tr: 'başarılar', ru: ['удачи', 'udachi'], ar: ['بالتوفيق', 'bit-tawfīq'], zh: ['祝你好运', 'zhù nǐ hǎoyùn'] },
  congratulations: { tr: 'tebrikler', ru: ['поздравляю', 'pozdravlyayu'], ar: ['مبروك', 'mabrūk'], zh: ['恭喜', 'gōngxǐ'] },
  seeYou: { tr: 'görüşürüz', ru: ['увидимся', 'uvidimsya'], ar: ['أراك لاحقاً', 'arāka lāḥiqan'], zh: ['回头见', 'huítóu jiàn'] }
};

function row(code, key) {
  const x = LEX[key];
  return [x[code][0], x[code][1], x.tr];
}

function rows(code, keys) {
  return keys.map(k => row(code, k));
}

function vocabRows(code, keys) {
  return keys.map(k => {
    const x = LEX[k];
    return [x[code][0], x[code][1], x.tr];
  });
}

function buildL1(code) {
  const words = mkScenarioWords([
    ['w1', ...row(code, 'hello'), { tip: 'En yaygın selamlama.' }],
    ['w2', ...row(code, 'goodMorning')],
    ['w3', ...row(code, 'goodEvening')],
    ['w4', ...row(code, 'bye')],
    ['w5', ...row(code, 'thanks')],
    ['w6', ...row(code, 'please')],
    ['w7', ...row(code, 'yes')],
    ['w8', ...row(code, 'no')],
    ['w9', ...row(code, 'nameQuestion')],
    ['w10', ...row(code, 'myNameAli')],
    ['w11', ...row(code, 'niceMeet')],
    ['w12', ...row(code, 'howAreYou')],
    ['w13', ...row(code, 'iAmFine')]
  ]);

  const greetExpl = code === 'ru'
    ? 'Rusçada selamlaşmada samimi ve resmi kullanım ayrılır. Привет samimi, Здравствуйте daha resmidir. Ali erkek öğrenci olarak yeni tanışmada daha kibar kalıpları seçer.'
    : code === 'ar'
      ? 'Arapçada selamlaşmada klasik kalıp السلام عليكم çok yaygındır. Günlük kullanımda مرحباً da olur. Cinsiyet uyumuna dikkat edilir; Ali erkek olduğu için erkek çekimi kullanır.'
      : 'Çincenin selamlaşma kalıpları kısa ve sabittir: 你好, 早上好, 晚上好. Cümle sonunda genelde gereksiz zamir tekrar edilmez. Ali erkek öğrenci olarak doğal kısa kalıpları kullanır.';

  const introExpl = code === 'ru'
    ? 'Tanışmada Меня зовут ... kalıbı çok yaygındır. Bu kalıp doğrudan "Beni ... diye çağırırlar" anlamı taşır.'
    : code === 'ar'
      ? 'Tanışmada اسمي ... (Benim adım ...) ve تشرفت بلقائك (Memnun oldum) kalıpları kullanılır.'
      : 'Tanışmada 我叫... kalıbı en doğal ifadedir. 很高兴认识你 ifadesi "Tanıştığıma memnun oldum" anlamına gelir.';

  return scenario('Greetings & Introductions',
    words,
    [
      G('g1', 'Selamlaşma Kalıpları', 'Greeting Patterns', greetExpl,
        [
          { pronoun: 'Merhaba', form: row(code, 'hello')[0], example: row(code, 'hello')[0], tr: 'Merhaba' },
          { pronoun: 'Sabah', form: row(code, 'goodMorning')[0], example: row(code, 'goodMorning')[0], tr: 'Günaydın' },
          { pronoun: 'Akşam', form: row(code, 'goodEvening')[0], example: row(code, 'goodEvening')[0], tr: 'İyi akşamlar' },
          { pronoun: 'Veda', form: row(code, 'bye')[0], example: row(code, 'bye')[0], tr: 'Hoşça kal' }
        ],
        'Nezaket kalıplarını tek tek değil kısa diyalog içinde ezberle.'),
      G('g2', 'Kendini Tanıtma', 'Introducing Yourself', introExpl,
        [
          { pronoun: 'Soru', form: row(code, 'nameQuestion')[0], example: row(code, 'nameQuestion')[0], tr: 'Adın ne?' },
          { pronoun: 'Cevap', form: row(code, 'myNameAli')[0], example: row(code, 'myNameAli')[0], tr: 'Benim adım Ali' },
          { pronoun: 'Nezaket', form: row(code, 'niceMeet')[0], example: row(code, 'niceMeet')[0], tr: 'Tanıştığıma memnun oldum' }
        ],
        'Ali erkek öğrenci örneklerinde erkek konuşur formu esas alınır.')
    ],
    [
      SP('sp1', row(code, 'hello')[0], 'Merhaba', 'Selam ver'),
      SP('sp2', row(code, 'myNameAli')[0], 'Benim adım Ali', 'Kendini tanıt'),
      SP('sp3', row(code, 'howAreYou')[0], 'Nasılsın?', 'Hal hatır sor'),
      SP('sp4', row(code, 'iAmFine')[0], 'İyiyim', 'Cevap ver'),
      SP('sp5', `${row(code, 'thanks')[0]} ${row(code, 'bye')[0]}`, 'Teşekkürler, hoşça kal', 'Vedalaş')
    ],
    [
      DL('d1', 'İlk Tanışma', 'First Meeting', [
        LN('A', 'm', row(code, 'hello')[0], 'Merhaba', 'Ali konuşuyor.', [BD(row(code, 'hello')[1], 'Merhaba', 'greeting', 'Açılış selamı.')]),
        LN('B', 'f', row(code, 'goodMorning')[0], 'Günaydın', 'Karşılık.', [BD(row(code, 'goodMorning')[1], 'Günaydın', 'greeting', 'Sabah selamı.')]),
        LN('A', 'm', row(code, 'nameQuestion')[0], 'Adın ne?', null, []),
        LN('B', 'f', row(code, 'myNameAli')[0].replace('Ali', code === 'zh' ? '安娜' : 'Анна').replace('علي', 'آنا'), 'Benim adım Anna', null, []),
        LN('A', 'm', row(code, 'niceMeet')[0], 'Memnun oldum', null, [])
      ])
    ],
    [
      LI('li1', `${row(code, 'hello')[0]}. ${row(code, 'myNameAli')[0]}. ${row(code, 'niceMeet')[0]}.`,
        'Merhaba. Benim adım Ali. Memnun oldum.',
        [
          Q('Hangi ifade selamdır?', [row(code, 'hello')[0], row(code, 'thanks')[0], row(code, 'bye')[0], row(code, 'yes')[0]], 0, 'Selam ifadesini seç'),
          Q('Ali adını nasıl söylüyor?', [row(code, 'myNameAli')[0], row(code, 'nameQuestion')[0], row(code, 'howAreYou')[0], row(code, 'iAmFine')[0]], 0, 'Kendini tanıtma'),
          Q('Tanışma ifadesi hangisi?', [row(code, 'niceMeet')[0], row(code, 'please')[0], row(code, 'no')[0], row(code, 'goodMorning')[0]], 0, 'Doğru kalıp')
        ])
    ]
  );
}

function buildL2(code) {
  if (code === 'ru') {
    return scenario('Падежи & быть',
      mkScenarioWords([
        ['w1', 'я', 'ya', 'ben'],
        ['w2', 'ты', 'ty', 'sen'],
        ['w3', 'он', 'on', 'o (erkek)'],
        ['w4', 'она', 'ona', 'o (kadın)'],
        ['w5', 'это', 'eto', 'bu'],
        ['w6', 'студент', 'student', 'öğrenci (erkek)'],
        ['w7', 'студентка', 'studentka', 'öğrenci (kadın)'],
        ['w8', 'учитель', 'uchitel', 'öğretmen'],
        ['w9', 'книга', 'kniga', 'kitap'],
        ['w10', 'город', 'gorod', 'şehir'],
        ['w11', 'быть', 'byt', 'olmak'],
        ['w12', 'есть', 'yest', 'var / olmak (yardımcı)']
      ]),
      [
        G('g1', 'Nominatif ve Cinsiyet', 'Nominative and Gender',
          'Rusçada temel özne hali nominatiftir. Erkek-kadın biçimleri isimde değişebilir: студент / студентка. Sıfat ve zamir eşleşmesine dikkat et.',
          [
            { pronoun: 'Ben', form: 'я студент', example: 'Я студент.', tr: 'Ben öğrenciyim (erkek).' },
            { pronoun: 'Kadın', form: 'она студентка', example: 'Она студентка.', tr: 'O öğrencidir (kadın).' }
          ],
          'Ali erkek olduğu için öğrenci cümlelerinde студент formunu kullanır.'),
        G('g2', 'быть fiili ve sıfır bağlaç', 'быть and zero copula',
          'Rusçada şimdiki zamanda "olmak" fiili çoğu zaman düşer: Я студент. Geçmiş/gelecekte быть çekimi kullanılır.',
          [
            { pronoun: 'Şimdiki', form: 'Я студент.', example: 'Я студент.', tr: 'Ben öğrenciyim.' },
            { pronoun: 'Varlık', form: 'У меня есть книга.', example: 'У меня есть книга.', tr: 'Bende bir kitap var.' }
          ],
          'есть çoğu zaman "var" anlamı için kullanılır.')
      ],
      [
        SP('sp1', 'Я студент.', 'Ben öğrenciyim.', 'Kimliğini söyle'),
        SP('sp2', 'Это книга.', 'Bu bir kitap.', 'Nesne tanıt'),
        SP('sp3', 'Это мой город.', 'Bu benim şehrim.', 'Sahiplik kur'),
        SP('sp4', 'У меня есть вопрос.', 'Benim bir sorum var.', 'есть kullan'),
        SP('sp5', 'Она учитель.', 'O öğretmen.', '3. tekil kur')
      ],
      [
        DL('d1', 'Sınıfta Tanışma', 'In Class', [
          LN('A', 'm', 'Я студент. Меня зовут Али.', 'Ben öğrenciyim. Benim adım Ali.', null, [BD('ya student', 'Ben öğrenciyim', 'V', 'Şimdiki zamanda быть düşer.')]),
          LN('B', 'f', 'Я учитель. Это книга.', 'Ben öğretmenim. Bu kitap.', null, []),
          LN('A', 'm', 'У меня есть вопрос.', 'Bir sorum var.', null, []),
          LN('B', 'f', 'Хорошо, спрашивайте.', 'Tamam, sorun.', null, [])
        ])
      ],
      [
        LI('li1', 'Я студент. Это моя книга. У меня есть тетрадь.',
          'Ben öğrenciyim. Bu benim kitabım. Bende bir defter var.',
          [
            Q('Konuşan kişi kim?', ['учитель', 'студент', 'врач', 'инженер'], 1, 'Kim konuşuyor?'),
            Q('Ne var?', ['машина', 'тетрадь', 'стол', 'чай'], 1, 'Hangi nesne var?'),
            Q('Hangi yapı varlık bildiriyor?', ['есть', 'нет', 'буду', 'был'], 0, 'Varlık fiili')
          ])
      ]
    );
  }
  if (code === 'ar') {
    return scenario('أدوات التعريف',
      mkScenarioWords([
        ['w1', 'الكتاب', 'al-kitāb', 'kitap (belirli)'],
        ['w2', 'البيت', 'al-bayt', 'ev (belirli)'],
        ['w3', 'المدرسة', 'al-madrasa', 'okul'],
        ['w4', 'القمر', 'al-qamar', 'ay'],
        ['w5', 'الشمس', 'ash-shams', 'güneş'],
        ['w6', 'الرجل', 'ar-rajul', 'adam'],
        ['w7', 'المرأة', 'al-marʾa', 'kadın'],
        ['w8', 'طالب', 'ṭālib', 'öğrenci (erkek)'],
        ['w9', 'معلم', 'muʿallim', 'öğretmen'],
        ['w10', 'هذا', 'hādhā', 'bu (eril)'],
        ['w11', 'هذه', 'hādhihi', 'bu (dişil)'],
        ['w12', 'هو', 'huwa', 'o (erkek)']
      ]),
      [
        G('g1', 'ال Takısı', 'Definite Article al-',
          'Arapçada belirli isimler çoğunlukla ال ile başlar: الكتاب, البيت. Türkçedeki "o/şu belirli nesne" hissi verir.',
          [
            { pronoun: 'Belirli', form: 'الكتاب', example: 'هذا الكتاب جديد', tr: 'Bu kitap yeni.' },
            { pronoun: 'Belirsiz', form: 'كتاب', example: 'هذا كتاب', tr: 'Bu bir kitap.' }
          ],
          'İsimle birlikte ezberle: kelime + ال.'),
        G('g2', 'Güneş / Ay harfleri', 'Sun and Moon Letters',
          'ال takısı sonrası bazı harflerde l sesi asimile olur: الشمس (ash-shams). Bazılarında korunur: القمر (al-qamar).',
          [
            { pronoun: 'Sun letter', form: 'الشمس', example: 'ash-shams', tr: 'Güneş (l sesi erir).' },
            { pronoun: 'Moon letter', form: 'القمر', example: 'al-qamar', tr: 'Ay (l sesi korunur).' }
          ],
          'Telaffuzda asimilasyon önemli, yazımda ال aynen kalır.')
      ],
      [
        SP('sp1', 'هذا الطالب علي.', 'Bu öğrenci Ali.', 'Tanıtım yap'),
        SP('sp2', 'هذه المدرسة كبيرة.', 'Bu okul büyük.', 'Dişil örnek ver'),
        SP('sp3', 'البيت قريب.', 'Ev yakın.', 'ال takısı kullan'),
        SP('sp4', 'الشمس حارة اليوم.', 'Güneş bugün sıcak.', 'Sun letter telaffuz et'),
        SP('sp5', 'القمر جميل.', 'Ay güzel.', 'Moon letter telaffuz et')
      ],
      [
        DL('d1', 'Sınıf Konuşması', 'Class Talk', [
          LN('A', 'm', 'أنا طالب. اسمي علي.', 'Ben öğrenciyim. Adım Ali.', null, [BD('ṭālib', 'öğrenci', 'O', 'Erkek form.')]),
          LN('B', 'f', 'مرحباً يا علي. هذا الكتاب جديد.', 'Merhaba Ali. Bu kitap yeni.', null, []),
          LN('A', 'm', 'نعم، والكتاب على الطاولة.', 'Evet, kitap masanın üstünde.', null, []),
          LN('B', 'f', 'ممتاز.', 'Harika.', null, [])
        ])
      ],
      [
        LI('li1', 'هذا الطالب في المدرسة. الكتاب على الطاولة والشمس ساطعة.',
          'Bu öğrenci okulda. Kitap masanın üstünde ve güneş parlak.',
          [
            Q('Öğrenci nerede?', ['البيت', 'المدرسة', 'المطار', 'المطعم'], 1, 'Öğrenci nerede?'),
            Q('Hangi kelime sun letter örneği?', ['القمر', 'الكتاب', 'الشمس', 'البيت'], 2, 'Sun letter seç'),
            Q('Metinde hangi nesne var?', ['سيارة', 'قلم', 'كتاب', 'قطار'], 2, 'Nesne seç')
          ])
      ]
    );
  }
  return scenario('量词 & 是',
    mkScenarioWords([
      ['w1', '是', 'shì', 'olmak'],
      ['w2', '一个', 'yí gè', 'bir tane (genel)'],
      ['w3', '一位', 'yí wèi', 'bir kişi (saygılı)'],
      ['w4', '学生', 'xuéshēng', 'öğrenci'],
      ['w5', '老师', 'lǎoshī', 'öğretmen'],
      ['w6', '朋友', 'péngyou', 'arkadaş'],
      ['w7', '这是', 'zhè shì', 'bu ... dır'],
      ['w8', '那是', 'nà shì', 'şu ... dır'],
      ['w9', '一本书', 'yì běn shū', 'bir kitap'],
      ['w10', '一张桌子', 'yì zhāng zhuōzi', 'bir masa'],
      ['w11', '一个问题', 'yí gè wèntí', 'bir soru'],
      ['w12', '我不是老师', 'wǒ bú shì lǎoshī', 'ben öğretmen değilim']
    ]),
    [
      G('g1', '是 Kullanımı', 'Using 是',
        'Çincede 是 isimleri eşitlemek için kullanılır: 我是学生. Sıfat cümlelerinde çoğu zaman 是 kullanılmaz.',
        [
          { pronoun: 'Olumlu', form: '我是学生', example: '我是学生。', tr: 'Ben öğrenciyim.' },
          { pronoun: 'Olumsuz', form: '我不是老师', example: '我不是老师。', tr: 'Ben öğretmen değilim.' }
        ],
        'Ali erkek öğrenci olduğu için örnek: 我是学生。'),
      G('g2', '量词 (Ölçü Sözcükleri)', 'Measure Words',
        'Çince sayılabilir isimlerde sayı + ölçü sözcüğü + isim kullanılır: 一个学生, 一位老师, 一本书.',
        [
          { pronoun: 'Genel', form: '个', example: '一个朋友', tr: 'bir arkadaş' },
          { pronoun: 'Kişi (saygılı)', form: '位', example: '一位老师', tr: 'bir öğretmen' },
          { pronoun: 'Kitap', form: '本', example: '一本书', tr: 'bir kitap' }
        ],
        'Her isim için uygun ölçü sözcüğünü birlikte ezberle.')
    ],
    [
      SP('sp1', '我是学生。', 'Ben öğrenciyim.', 'Kimliğini söyle'),
      SP('sp2', '这是一位老师。', 'Bu bir öğretmen.', '量词 kullan'),
      SP('sp3', '那是一个朋友。', 'Şu bir arkadaş.', 'Gösterme yap'),
      SP('sp4', '这是一本书。', 'Bu bir kitap.', 'Nesne tanıt'),
      SP('sp5', '我不是老师。', 'Ben öğretmen değilim.', 'Olumsuz cümle kur')
    ],
    [
      DL('d1', 'Sınıf Tanışması', 'Class Intro', [
        LN('A', 'm', '你好，我是阿里。', 'Merhaba, ben Ali.', null, [BD('wǒ shì', 'ben ...im', 'V', '是 eşitleme fiili.')]),
        LN('B', 'f', '你好，这是王老师。', 'Merhaba, bu Öğretmen Wang.', null, []),
        LN('A', 'm', '王老师好！我是学生。', 'Merhaba Öğretmen Wang! Ben öğrenciyim.', null, []),
        LN('B', 'f', '很好。', 'Çok iyi.', null, [])
      ])
    ],
    [
      LI('li1', '我是学生。这是一位老师。那是一个朋友。',
        'Ben öğrenciyim. Bu bir öğretmen. Şu bir arkadaş.',
        [
          Q('Öğretmen için hangi ölçü sözcüğü doğru?', ['个', '位', '本', '张'], 1, 'Doğru ölçü sözcüğü'),
          Q('Olumsuz biçim hangisi?', ['我是老师', '我不是老师', '你是老师', '他是老师'], 1, 'Olumsuz cümle'),
          Q('Bu ... dır kalıbı hangisi?', ['那是', '这是', '不是', '好吗'], 1, 'Gösterme kalıbı')
        ])
    ]
  );
}

function buildL3(code) {
  const numKeys = ['one', 'two', 'three', 'four', 'five', 'ten', 'hundred', 'thousand', 'money', 'price', 'cheap', 'expensive'];
  return scenario('Numbers & Money',
    mkScenarioWords([
      ...numKeys.map((k, i) => [`w${i + 1}`, ...row(code, k)]),
      ['w13', ...row(code, 'ruble')],
      ['w14', ...row(code, 'yuan')],
      ['w15', ...row(code, 'dollar')],
      ['w16', ...row(code, 'euro')],
      ['w17', ...row(code, 'cash')],
      ['w18', ...row(code, 'card')]
    ]),
    [
      G('g1', 'Sayı Sistemi', 'Number System',
        code === 'ru'
          ? 'Rusçada sayılar cinsiyet ve hal etkileyebilir. Ancak temel alışverişte yalın sayı kalıplarıyla başlamak yeterlidir.'
          : code === 'ar'
            ? 'Arapçada sayılar isimle cinsiyet uyumu gösterebilir. Başlangıçta temel sayı + isim kalıbını ezberle.'
            : 'Çincenin sayı sistemi oldukça düzenlidir: 十, 百, 千. Para söylemede sayı + para birimi kalıbı kullanılır.',
        [
          { pronoun: '1-5', form: `${row(code, 'one')[0]} ... ${row(code, 'five')[0]}`, example: `${row(code, 'one')[0]}, ${row(code, 'two')[0]}, ${row(code, 'three')[0]}`, tr: 'Bir, iki, üç' },
          { pronoun: '10-1000', form: `${row(code, 'ten')[0]} / ${row(code, 'hundred')[0]} / ${row(code, 'thousand')[0]}`, example: row(code, 'hundred')[0], tr: 'Yüz' }
        ],
        'Sayıları para ve saat cümleleriyle tekrar et.'),
      G('g2', 'Fiyat Sorma', 'Asking Price',
        'Alışverişte önce fiyat sorulur, sonra ödeme yöntemi belirtilir. Ali erkek öğrenci olarak kısa ve net kalıp kullanır.',
        [
          { pronoun: 'Fiyat', form: row(code, 'price')[0], example: `${row(code, 'hourWhat')[0]} / ${row(code, 'price')[0]}`, tr: 'Fiyat nedir?' },
          { pronoun: 'Nakit', form: row(code, 'cash')[0], example: row(code, 'cash')[0], tr: 'Nakit' },
          { pronoun: 'Kart', form: row(code, 'card')[0], example: row(code, 'card')[0], tr: 'Kart' }
        ],
        'Fiyat + para birimi + ödeme yöntemi üçlüsünü birlikte çalış.')
    ],
    [
      SP('sp1', `${row(code, 'one')[0]}, ${row(code, 'two')[0]}, ${row(code, 'three')[0]}`, 'Bir, iki, üç', 'Sayıları söyle'),
      SP('sp2', row(code, 'price')[0], 'Fiyat', 'Fiyat sor'),
      SP('sp3', `${row(code, 'ten')[0]} ${row(code, 'dollar')[0]}`, 'On dolar', 'Tutar söyle'),
      SP('sp4', row(code, 'cheap')[0], 'Ucuz', 'Fiyat değerlendir'),
      SP('sp5', `${row(code, 'cash')[0]} / ${row(code, 'card')[0]}`, 'Nakit / Kart', 'Ödeme yöntemi söyle')
    ],
    [
      DL('d1', 'Alışverişte', 'At Shop', [
        LN('A', 'm', row(code, 'price')[0], 'Bu ne kadar?', 'Ali fiyat soruyor.', [BD(row(code, 'price')[1], 'Fiyat', 'question', 'Temel fiyat sorusu.')]),
        LN('B', 'f', `${row(code, 'ten')[0]} ${row(code, 'dollar')[0]}.`, 'On dolar.', null, []),
        LN('A', 'm', row(code, 'expensive')[0], 'Pahalı.', null, []),
        LN('B', 'f', row(code, 'cheap')[0], 'Ucuz.', null, [])
      ])
    ],
    [
      LI('li1', `${row(code, 'one')[0]}, ${row(code, 'two')[0]}, ${row(code, 'three')[0]}. ${row(code, 'price')[0]}. ${row(code, 'ten')[0]} ${row(code, 'dollar')[0]}.`,
        'Bir, iki, üç. Fiyat nedir? On dolar.',
        [
          Q('Sayı olmayan seçenek hangisi?', [row(code, 'one')[0], row(code, 'two')[0], row(code, 'price')[0], row(code, 'three')[0]], 2, 'Sayı dışı kelime'),
          Q('Para birimi hangisi?', [row(code, 'card')[0], row(code, 'dollar')[0], row(code, 'cash')[0], row(code, 'cheap')[0]], 1, 'Para birimi seç'),
          Q('Fiyatla ilgili sıfat hangisi?', [row(code, 'cheap')[0], row(code, 'friend')[0], row(code, 'teacher')[0], row(code, 'station')[0]], 0, 'Doğru sıfat')
        ])
    ]
  );
}

const TOPIC_KEYS = {
  4: { title: 'Time & Date', keys: ['hourWhat', 'today', 'tomorrow', 'yesterday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'morning', 'evening', 'date', 'calendar'], sample: { ru: 'Сегодня среда. Урок в девять.', ar: 'اليوم الأربعاء. الدرس في التاسعة.', zh: '今天星期三，课在九点。' } },
  5: { title: 'Restaurant & Food', keys: ['restaurant', 'menu', 'table', 'water', 'tea', 'coffee', 'bread', 'soup', 'salad', 'chicken', 'fish', 'rice', 'delicious', 'bill', 'price'], sample: { ru: 'Я хочу суп и чай, пожалуйста.', ar: 'أريد الحساء والشاي من فضلك.', zh: '我想要汤和茶。' } },
  6: { title: 'Shopping', keys: ['market', 'price', 'cheap', 'expensive', 'discount', 'size', 'color', 'tryOn', 'receipt', 'buy', 'sell', 'money', 'card', 'cash', 'question'], sample: { ru: 'Сколько стоит эта рубашка?', ar: 'كم سعر هذا القميص؟', zh: '这件衬衫多少钱？' } },
  7: { title: 'Directions', keys: ['where', 'street', 'left', 'right', 'straight', 'station', 'busStop', 'map', 'city', 'school', 'bank', 'restaurant', 'hotel', 'metro', 'bus'], sample: { ru: 'Идите прямо, потом налево.', ar: 'اذهب مباشرة ثم يساراً.', zh: '一直走，然后左转。' } },
  8: { title: 'Transport', keys: ['train', 'bus', 'metro', 'airport', 'ticket', 'passport', 'departure', 'arrival', 'station', 'busStop', 'city', 'country', 'travel', 'question', 'hourWhat'], sample: { ru: 'Поезд отправляется в десять.', ar: 'القطار يغادر الساعة العاشرة.', zh: '火车十点出发。' } },
  9: { title: 'Hotel', keys: ['hotel', 'reception', 'reservation', 'room', 'key', 'breakfast', 'wifi', 'price', 'card', 'passport', 'question', 'thankYou', 'bye', 'today', 'tomorrow'], sample: { ru: 'У меня бронь на одну ночь.', ar: 'لدي حجز لليلة واحدة.', zh: '我预订了一晚。' } },
  10: { title: 'Work', keys: ['work', 'office', 'company', 'meeting', 'contract', 'salary', 'computer', 'internet', 'email', 'question', 'answer', 'start', 'finish', 'help', 'manager'], sample: { ru: 'У нас встреча в офисе.', ar: 'لدينا اجتماع في المكتب.', zh: '我们在办公室开会。' } },
  11: { title: 'Health', keys: ['doctor', 'hospital', 'pharmacy', 'pain', 'fever', 'medicine', 'head', 'stomach', 'tooth', 'hand', 'leg', 'question', 'help', 'today', 'rest'], sample: { ru: 'У меня болит голова.', ar: 'رأسي يؤلمني.', zh: '我头疼。' } },
  12: { title: 'Phone', keys: ['call', 'message', 'email', 'numberPhone', 'repeat', 'question', 'answer', 'help', 'today', 'tomorrow', 'internet', 'app', 'download', 'upload', 'click'], sample: { ru: 'Позвони мне вечером.', ar: 'اتصل بي مساءً.', zh: '晚上给我打电话。' } },
  13: { title: 'Social', keys: ['social', 'friend', 'party', 'cinema', 'music', 'invite', 'celebrate', 'today', 'tomorrow', 'happy', 'question', 'answer', 'seeYou', 'thanks', 'bye'], sample: { ru: 'Завтра у нас вечеринка.', ar: 'غداً لدينا حفلة.', zh: '明天我们有聚会。' } },
  14: { title: 'Home', keys: ['home', 'apartment', 'room', 'kitchen', 'bathroom', 'bed', 'table', 'window', 'price', 'city', 'family', 'clean', 'open', 'close', 'question'], sample: { ru: 'Моя квартира маленькая, но удобная.', ar: 'شقتي صغيرة لكنها مريحة.', zh: '我的公寓很小但很舒服。' } },
  15: { title: 'Education', keys: ['education', 'school', 'university', 'student', 'teacher', 'lesson', 'exam', 'question', 'answer', 'read', 'write', 'learn', 'language', 'book', 'today'], sample: { ru: 'Сегодня у нас экзамен.', ar: 'لدينا امتحان اليوم.', zh: '我们今天有考试。' } },
  16: { title: 'Countries', keys: ['country', 'city', 'russia', 'china', 'turkey', 'language', 'student', 'friend', 'question', 'answer', 'north', 'south', 'east', 'west', 'continent'], sample: { ru: 'Я из Турции, живу в России.', ar: 'أنا من تركيا وأعيش في روسيا.', zh: '我来自土耳其，住在俄罗斯。' } },
  17: { title: 'Emotions', keys: ['happy', 'sad', 'tired', 'angry', 'howAreYou', 'iAmFine', 'maybe', 'sure', 'opinion', 'agree', 'disagree', 'thanks', 'goodLuck', 'congratulations', 'seeYou'], sample: { ru: 'Я устал, но счастлив.', ar: 'أنا متعب لكن سعيد.', zh: '我累了，但很高兴。' } },
  18: { title: 'Weather', keys: ['weather', 'rain', 'snow', 'sun', 'wind', 'hot', 'cold', 'today', 'tomorrow', 'morning', 'evening', 'question', 'answer', 'city', 'travel'], sample: { ru: 'Сегодня холодно и ветрено.', ar: 'اليوم بارد وعاصف.', zh: '今天天气冷而且有风。' } },
  19: { title: 'Entertainment', keys: ['hobby', 'read', 'music', 'cinema', 'theater', 'museum', 'party', 'friend', 'invite', 'celebrate', 'song', 'art', 'question', 'answer', 'today'], sample: { ru: 'В выходные я иду в кино.', ar: 'في عطلة نهاية الأسبوع أذهب إلى السينما.', zh: '周末我去看电影。' } },
  20: { title: 'Daily Conversation', keys: ['hello', 'howAreYou', 'iAmFine', 'thanks', 'please', 'question', 'answer', 'where', 'when', 'why', 'how', 'canYouHelp', 'iDontKnow', 'ofCourse', 'seeYou'], sample: { ru: 'Привет! Как дела? Всё хорошо.', ar: 'مرحباً! كيف حالك؟ كل شيء بخير.', zh: '你好！你好吗？都很好。' } }
};

function ensureKey(key) {
  if (key === 'travel') return true;
  if (key === 'thankYou') return true;
  if (key === 'rest') return true;
  if (key === 'book') return true;
  if (key === 'bank') return true;
  return !!LEX[key];
}

for (const topic of Object.values(TOPIC_KEYS)) {
  for (const k of topic.keys) {
    if (!ensureKey(k)) {
      throw new Error(`Missing key in LEX: ${k}`);
    }
  }
}

function topicRow(code, key) {
  if (key === 'travel') return [code === 'ru' ? 'путешествие' : code === 'ar' ? 'السفر' : '旅行', code === 'ru' ? 'puteshestviye' : code === 'ar' ? 'as-safar' : 'lǚxíng', 'seyahat'];
  if (key === 'thankYou') return row(code, 'thanks');
  if (key === 'rest') return [code === 'ru' ? 'отдыхать' : code === 'ar' ? 'يرتاح' : '休息', code === 'ru' ? 'otdykhat' : code === 'ar' ? 'yartāḥ' : 'xiūxi', 'dinlenmek'];
  if (key === 'book') return [code === 'ru' ? 'книга' : code === 'ar' ? 'الكتاب' : '书', code === 'ru' ? 'kniga' : code === 'ar' ? 'al-kitāb' : 'shū', 'kitap'];
  return row(code, key);
}

function buildScenarioByTopic(code, n) {
  const t = TOPIC_KEYS[n];
  return mkSimple(code, t.title, t.keys.map(k => topicRow(code, k)), t.sample[code]);
}

const VOCAB_THEMES = [
  [21, 'Core Verbs', ['read', 'write', 'speak', 'listen', 'run', 'walk', 'sleep', 'eat', 'drink', 'think', 'understand', 'open', 'close', 'start', 'finish', 'help', 'ask', 'answerVerb', 'learn', 'buy']],
  [22, 'Adjectives', ['new', 'old', 'big', 'small', 'beautiful', 'difficult', 'easy', 'fast', 'slow', 'hot', 'cold', 'important', 'possible', 'happy', 'sad', 'tired', 'angry', 'cheap', 'expensive', 'useful']],
  [23, 'People & Family', ['student', 'teacher', 'friend', 'family', 'doctor', 'engineer', 'programmer', 'nurse', 'lawyer', 'manager', 'man', 'woman', 'child', 'parent', 'brother', 'sister', 'mother', 'father', 'guest', 'neighbor']],
  [24, 'City & Places', ['city', 'street', 'station', 'busStop', 'market', 'restaurant', 'hotel', 'school', 'university', 'hospital', 'pharmacy', 'bank', 'office', 'airport', 'museum', 'theater', 'home', 'apartment', 'room', 'company']],
  [25, 'Food & Drinks', ['water', 'tea', 'coffee', 'bread', 'soup', 'salad', 'chicken', 'fish', 'rice', 'delicious', 'menu', 'bill', 'table', 'restaurant', 'breakfast', 'eat', 'drink', 'price', 'cheap', 'expensive']],
  [26, 'Colors', ['red', 'blue', 'green', 'black', 'white', 'yellow', 'orange', 'purple', 'gray', 'pink', 'color', 'beautiful', 'new', 'old', 'big', 'small', 'hot', 'cold', 'light', 'dark']],
  [27, 'Time Expressions', ['today', 'tomorrow', 'yesterday', 'morning', 'evening', 'night', 'hourWhat', 'minute', 'second', 'date', 'calendar', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'when', 'start']],
  [28, 'Sports', ['run', 'walk', 'sport', 'team', 'game', 'ball', 'win', 'lose', 'trainVerb', 'coach', 'stadium', 'score', 'fast', 'strong', 'healthy', 'practice', 'competition', 'jump', 'swim', 'cycle']],
  [29, 'Work & Tech', ['work', 'office', 'company', 'meeting', 'contract', 'salary', 'computer', 'internet', 'email', 'programmer', 'engineer', 'manager', 'app', 'website', 'password', 'account', 'download', 'upload', 'click', 'digital']],
  [30, 'Travel', ['travel', 'train', 'bus', 'metro', 'airport', 'ticket', 'passport', 'departure', 'arrival', 'station', 'hotel', 'reservation', 'map', 'country', 'city', 'north', 'south', 'east', 'west', 'question']],
  [31, 'Home', ['home', 'apartment', 'room', 'kitchen', 'bathroom', 'bed', 'table', 'window', 'family', 'clean', 'open', 'close', 'price', 'money', 'city', 'water', 'electricity', 'key', 'door', 'floor']],
  [32, 'Clothing', ['shirt', 'pants', 'dress', 'jacket', 'coat', 'shoes', 'hat', 'bag', 'size', 'color', 'cheap', 'expensive', 'buy', 'sell', 'tryOn', 'market', 'new', 'old', 'beautiful', 'style']],
  [33, 'Nature', ['sun', 'rain', 'snow', 'wind', 'mountain', 'river', 'sea', 'lake', 'forest', 'desert', 'island', 'weather', 'hot', 'cold', 'north', 'south', 'east', 'west', 'earth', 'nature']],
  [34, 'Money', ['money', 'price', 'cheap', 'expensive', 'cash', 'card', 'bank', 'dollar', 'euro', 'ruble', 'yuan', 'one', 'ten', 'hundred', 'thousand', 'buy', 'sell', 'salary', 'contract', 'transfer']],
  [35, 'Science', ['science', 'physics', 'chemistry', 'biology', 'experiment', 'data', 'research', 'university', 'student', 'teacher', 'question', 'answer', 'learn', 'important', 'possible', 'difficult', 'book', 'computer', 'history', 'language']],
  [36, 'Art', ['art', 'painting', 'music', 'song', 'theater', 'museum', 'history', 'culture', 'beautiful', 'color', 'hobby', 'friend', 'party', 'cinema', 'celebrate', 'read', 'write', 'question', 'answer', 'opinion']],
  [37, 'Question Words', ['who', 'what', 'where', 'when', 'why', 'how', 'which', 'question', 'answer', 'repeat', 'canYouHelp', 'iDontKnow', 'ofCourse', 'maybe', 'sure', 'please', 'thanks', 'hello', 'nameQuestion', 'howAreYou']],
  [38, 'Professions', ['teacher', 'student', 'doctor', 'engineer', 'programmer', 'nurse', 'lawyer', 'manager', 'driver', 'cook', 'worker', 'farmer', 'artist', 'musician', 'journalist', 'police', 'seller', 'designer', 'pilot', 'translator']],
  [39, 'Opinions', ['opinion', 'agree', 'disagree', 'maybe', 'sure', 'important', 'possible', 'impossible', 'good', 'bad', 'easy', 'difficult', 'beautiful', 'new', 'old', 'question', 'answer', 'think', 'understand', 'speak']],
  [40, 'Animals', ['dog', 'cat', 'bird', 'horse', 'lion', 'fish', 'animal', 'forest', 'river', 'sea', 'nature', 'small', 'big', 'fast', 'slow', 'color', 'food', 'water', 'home', 'friend']],
  [41, 'Health', ['doctor', 'hospital', 'pharmacy', 'pain', 'fever', 'medicine', 'head', 'stomach', 'tooth', 'hand', 'leg', 'healthy', 'tired', 'sleep', 'eat', 'drink', 'rest', 'question', 'answer', 'help']],
  [42, 'Academic', ['education', 'school', 'university', 'lesson', 'exam', 'student', 'teacher', 'question', 'answer', 'read', 'write', 'learn', 'book', 'research', 'science', 'history', 'language', 'data', 'difficult', 'important']],
  [43, 'Digital', ['digital', 'computer', 'internet', 'website', 'password', 'account', 'app', 'download', 'upload', 'click', 'email', 'message', 'call', 'data', 'socialNetwork', 'question', 'answer', 'help', 'learn', 'work']],
  [44, 'Social', ['hello', 'howAreYou', 'iAmFine', 'thanks', 'please', 'friend', 'party', 'invite', 'celebrate', 'music', 'cinema', 'seeYou', 'bye', 'goodLuck', 'congratulations', 'opinion', 'agree', 'disagree', 'question', 'answer']],
  [45, 'Geography', ['country', 'city', 'mountain', 'river', 'sea', 'lake', 'forest', 'desert', 'island', 'continent', 'north', 'south', 'east', 'west', 'map', 'travel', 'russia', 'china', 'turkey', 'language']],
  [46, 'Action Verbs', ['open', 'close', 'start', 'finish', 'help', 'ask', 'answerVerb', 'buy', 'sell', 'run', 'walk', 'read', 'write', 'speak', 'listen', 'eat', 'drink', 'clean', 'learn', 'call']],
  [47, 'History', ['history', 'culture', 'language', 'country', 'city', 'emperor', 'revolution', 'war', 'peace', 'museum', 'art', 'science', 'book', 'teacher', 'student', 'important', 'question', 'answer', 'past', 'today']],
  [48, 'Useful Expressions', ['hello', 'thanks', 'please', 'excuseMe', 'canYouHelp', 'iDontKnow', 'ofCourse', 'maybeLater', 'goodLuck', 'congratulations', 'seeYou', 'bye', 'howAreYou', 'iAmFine', 'nameQuestion', 'myNameAli', 'niceMeet', 'repeat', 'where', 'when']],
  [49, 'Advanced Review', ['work', 'study', 'travel', 'money', 'health', 'digital', 'social', 'opinion', 'question', 'answer', 'history', 'science', 'art', 'nature', 'geography', 'action', 'language', 'culture', 'important', 'possible']]
];

const EXTRA = {
  ru: {
    man: ['мужчина', 'muzhchina'], woman: ['женщина', 'zhenshchina'], child: ['ребёнок', 'rebyonok'], parent: ['родитель', 'roditel'], brother: ['брат', 'brat'], sister: ['сестра', 'sestra'], mother: ['мать', 'mat'], father: ['отец', 'otets'], guest: ['гость', 'gost'], neighbor: ['сосед', 'sosed'],
    light: ['светлый', 'svetlyy'], dark: ['тёмный', 'tyomnyy'], sport: ['спорт', 'sport'], team: ['команда', 'komanda'], game: ['игра', 'igra'], ball: ['мяч', 'myach'], win: ['побеждать', 'pobezhdat'], lose: ['проигрывать', 'proigryvat'], trainVerb: ['тренироваться', 'trenirovatsya'], coach: ['тренер', 'trener'], stadium: ['стадион', 'stadion'], score: ['счёт', 'schyot'], strong: ['сильный', 'silnyy'], healthy: ['здоровый', 'zdorovyy'], practice: ['практика', 'praktika'], competition: ['соревнование', 'sorevnovaniye'], jump: ['прыгать', 'prygat'], swim: ['плавать', 'plavat'], cycle: ['ехать на велосипеде', 'yekhat na velosipede'],
    electricity: ['электричество', 'elektrichestvo'], door: ['дверь', 'dver'], floor: ['пол', 'pol'], shirt: ['рубашка', 'rubashka'], pants: ['брюки', 'bryuki'], dress: ['платье', 'platye'], jacket: ['куртка', 'kurtka'], coat: ['пальто', 'palto'], shoes: ['обувь', 'obuv'], hat: ['шляпа', 'shlyapa'], bag: ['сумка', 'sumka'], style: ['стиль', 'stil'],
    earth: ['земля', 'zemlya'], nature: ['природа', 'priroda'], animal: ['животное', 'zhivotnoye'], driver: ['водитель', 'voditel'], cook: ['повар', 'povar'], worker: ['рабочий', 'rabochiy'], farmer: ['фермер', 'fermer'], artist: ['художник', 'khudozhnik'], musician: ['музыкант', 'muzykant'], journalist: ['журналист', 'zhurnalist'], police: ['полиция', 'politsiya'], seller: ['продавец', 'prodavets'], designer: ['дизайнер', 'dizayner'], pilot: ['пилот', 'pilot'], translator: ['переводчик', 'perevodchik'],
    good: ['хороший', 'khoroshiy'], bad: ['плохой', 'plokhoy'], animalWord: ['животное', 'zhivotnoye'], rest: ['отдыхать', 'otdykhat'], past: ['прошлое', 'proshloye'], study: ['учёба', 'uchyoba'], health: ['здоровье', 'zdorovye'], digital: ['цифровой', 'tsifrovoy'], action: ['действие', 'deystviye']
  },
  ar: {
    man: ['الرجل', 'ar-rajul'], woman: ['المرأة', 'al-marʾa'], child: ['الطفل', 'aṭ-ṭifl'], parent: ['الوالد', 'al-wālid'], brother: ['الأخ', 'al-akh'], sister: ['الأخت', 'al-ukht'], mother: ['الأم', 'al-umm'], father: ['الأب', 'al-ab'], guest: ['الضيف', 'aḍ-ḍayf'], neighbor: ['الجار', 'al-jār'],
    light: ['فاتح', 'fātiḥ'], dark: ['داكن', 'dākin'], sport: ['الرياضة', 'ar-riyāḍa'], team: ['الفريق', 'al-farīq'], game: ['اللعبة', 'al-luʿba'], ball: ['الكرة', 'al-kura'], win: ['يفوز', 'yafūz'], lose: ['يخسر', 'yakhsar'], trainVerb: ['يتدرب', 'yatadarrab'], coach: ['المدرب', 'al-mudarrib'], stadium: ['الملعب', 'al-malʿab'], score: ['النتيجة', 'an-natīja'], strong: ['قوي', 'qawī'], healthy: ['صحي', 'ṣiḥḥī'], practice: ['ممارسة', 'mumārasa'], competition: ['المنافسة', 'al-munāfasa'], jump: ['يقفز', 'yaqfiz'], swim: ['يسبح', 'yasbaḥ'], cycle: ['يركب الدراجة', 'yarkab ad-darrāja'],
    electricity: ['الكهرباء', 'al-kahrabāʾ'], door: ['الباب', 'al-bāb'], floor: ['الأرضية', 'al-arḍiyya'], shirt: ['القميص', 'al-qamīṣ'], pants: ['البنطال', 'al-binṭāl'], dress: ['الفستان', 'al-fustān'], jacket: ['السترة', 'as-sitra'], coat: ['المعطف', 'al-miʿṭaf'], shoes: ['الأحذية', 'al-aḥdhiya'], hat: ['القبعة', 'al-qubbaʿa'], bag: ['الحقيبة', 'al-ḥaqība'], style: ['الأسلوب', 'al-uslūb'],
    earth: ['الأرض', 'al-arḍ'], nature: ['الطبيعة', 'aṭ-ṭabīʿa'], animal: ['الحيوان', 'al-ḥayawān'], driver: ['السائق', 'as-sāʾiq'], cook: ['الطباخ', 'aṭ-ṭabbākh'], worker: ['العامل', 'al-ʿāmil'], farmer: ['المزارع', 'al-muzāriʿ'], artist: ['الفنان', 'al-fannān'], musician: ['الموسيقي', 'al-mūsīqī'], journalist: ['الصحفي', 'aṣ-ṣaḥafī'], police: ['الشرطة', 'ash-shurṭa'], seller: ['البائع', 'al-bāʾiʿ'], designer: ['المصمم', 'al-muṣammim'], pilot: ['الطيار', 'aṭ-ṭayyār'], translator: ['المترجم', 'al-mutarjim'],
    good: ['جيد', 'jayyid'], bad: ['سيء', 'sayyiʾ'], animalWord: ['الحيوان', 'al-ḥayawān'], rest: ['يرتاح', 'yartāḥ'], past: ['الماضي', 'al-māḍī'], study: ['الدراسة', 'ad-dirāsa'], health: ['الصحة', 'aṣ-ṣiḥḥa'], digital: ['رقمي', 'raqamī'], action: ['العمل', 'al-ʿamal']
  },
  zh: {
    man: ['男人', 'nánrén'], woman: ['女人', 'nǚrén'], child: ['孩子', 'háizi'], parent: ['父母', 'fùmǔ'], brother: ['哥哥', 'gēge'], sister: ['姐姐', 'jiějie'], mother: ['妈妈', 'māma'], father: ['爸爸', 'bàba'], guest: ['客人', 'kèrén'], neighbor: ['邻居', 'línjū'],
    light: ['浅色', 'qiǎnsè'], dark: ['深色', 'shēnsè'], sport: ['运动', 'yùndòng'], team: ['队', 'duì'], game: ['比赛', 'bǐsài'], ball: ['球', 'qiú'], win: ['赢', 'yíng'], lose: ['输', 'shū'], trainVerb: ['训练', 'xùnliàn'], coach: ['教练', 'jiàoliàn'], stadium: ['体育场', 'tǐyùchǎng'], score: ['比分', 'bǐfēn'], strong: ['强壮', 'qiángzhuàng'], healthy: ['健康', 'jiànkāng'], practice: ['练习', 'liànxí'], competition: ['竞赛', 'jìngsài'], jump: ['跳', 'tiào'], swim: ['游泳', 'yóuyǒng'], cycle: ['骑自行车', 'qí zìxíngchē'],
    electricity: ['电', 'diàn'], door: ['门', 'mén'], floor: ['地板', 'dìbǎn'], shirt: ['衬衫', 'chènshān'], pants: ['裤子', 'kùzi'], dress: ['连衣裙', 'liányīqún'], jacket: ['夹克', 'jiākè'], coat: ['外套', 'wàitào'], shoes: ['鞋', 'xié'], hat: ['帽子', 'màozi'], bag: ['包', 'bāo'], style: ['风格', 'fēnggé'],
    earth: ['地球', 'dìqiú'], nature: ['自然', 'zìrán'], animal: ['动物', 'dòngwù'], driver: ['司机', 'sījī'], cook: ['厨师', 'chúshī'], worker: ['工人', 'gōngrén'], farmer: ['农民', 'nóngmín'], artist: ['艺术家', 'yìshùjiā'], musician: ['音乐家', 'yīnyuèjiā'], journalist: ['记者', 'jìzhě'], police: ['警察', 'jǐngchá'], seller: ['销售员', 'xiāoshòuyuán'], designer: ['设计师', 'shèjìshī'], pilot: ['飞行员', 'fēixíngyuán'], translator: ['翻译', 'fānyì'],
    good: ['好', 'hǎo'], bad: ['坏', 'huài'], animalWord: ['动物', 'dòngwù'], rest: ['休息', 'xiūxi'], past: ['过去', 'guòqù'], study: ['学习', 'xuéxí'], health: ['健康', 'jiànkāng'], digital: ['数字化', 'shùzìhuà'], action: ['行动', 'xíngdòng']
  }
};

const TR_FALLBACK = {
  man: 'adam', woman: 'kadın', child: 'çocuk', parent: 'ebeveyn', brother: 'erkek kardeş', sister: 'kız kardeş', mother: 'anne', father: 'baba', guest: 'misafir', neighbor: 'komşu',
  light: 'açık renk', dark: 'koyu renk', sport: 'spor', team: 'takım', game: 'oyun', ball: 'top', win: 'kazanmak', lose: 'kaybetmek', trainVerb: 'antrenman yapmak',
  coach: 'antrenör', stadium: 'stadyum', score: 'skor', strong: 'güçlü', healthy: 'sağlıklı', practice: 'pratik', competition: 'yarışma', jump: 'zıplamak', swim: 'yüzmek', cycle: 'bisiklete binmek',
  electricity: 'elektrik', door: 'kapı', floor: 'zemin', shirt: 'gömlek', pants: 'pantolon', dress: 'elbise', jacket: 'ceket', coat: 'palto', shoes: 'ayakkabı', hat: 'şapka', bag: 'çanta', style: 'stil',
  earth: 'dünya', nature: 'doğa', animal: 'hayvan', driver: 'sürücü', cook: 'aşçı', worker: 'işçi', farmer: 'çiftçi', artist: 'sanatçı', musician: 'müzisyen', journalist: 'gazeteci', police: 'polis', seller: 'satıcı', designer: 'tasarımcı', pilot: 'pilot', translator: 'çevirmen',
  good: 'iyi', bad: 'kötü', rest: 'dinlenmek', past: 'geçmiş', study: 'çalışma / eğitim', health: 'sağlık', action: 'eylem',
  travel: 'seyahat', what: 'ne?', book: 'kitap', food: 'yemek', geography: 'coğrafya'
};

function resolveEntry(code, key) {
  if (key === 'travel') return [code === 'ru' ? 'путешествие' : code === 'ar' ? 'السفر' : '旅行', code === 'ru' ? 'puteshestviye' : code === 'ar' ? 'as-safar' : 'lǚxíng', 'seyahat'];
  if (key === 'what') return [code === 'ru' ? 'что?' : code === 'ar' ? 'ماذا؟' : '什么？', code === 'ru' ? 'chto?' : code === 'ar' ? 'mādhā?' : 'shénme?', 'ne?'];
  if (key === 'book') return [code === 'ru' ? 'книга' : code === 'ar' ? 'الكتاب' : '书', code === 'ru' ? 'kniga' : code === 'ar' ? 'al-kitāb' : 'shū', 'kitap'];
  if (key === 'food') return [code === 'ru' ? 'еда' : code === 'ar' ? 'الطعام' : '食物', code === 'ru' ? 'yeda' : code === 'ar' ? 'aṭ-ṭaʿām' : 'shíwù', 'yemek'];
  if (key === 'geography') return [code === 'ru' ? 'география' : code === 'ar' ? 'الجغرافيا' : '地理', code === 'ru' ? 'geografiya' : code === 'ar' ? 'al-jughrāfiyā' : 'dìlǐ', 'coğrafya'];
  if (LEX[key]) return [LEX[key][code][0], LEX[key][code][1], LEX[key].tr];
  const extra = EXTRA[code][key];
  if (extra) return [extra[0], extra[1], TR_FALLBACK[key] || key];
  throw new Error(`Missing vocab key: ${key} for ${code}`);
}

function buildVocabForTheme(code, title, keys) {
  const entries = keys.map(k => resolveEntry(code, k));
  while (entries.length < 20) entries.push(entries[entries.length % keys.length]);
  return buildVocabLesson(title, entries.slice(0, 20));
}

function buildLessonsForLang(code) {
  const all = {
    1: ['Greetings & Introductions', buildL1(code)],
    2: [LANG_META[code].l2, buildL2(code)],
    3: ['Numbers & Money', buildL3(code)]
  };
  for (let n = 4; n <= 20; n++) {
    all[n] = [TOPIC_KEYS[n].title, buildScenarioByTopic(code, n)];
  }
  for (const [n, title, keys] of VOCAB_THEMES) {
    all[n] = [title, buildVocabForTheme(code, title, keys)];
  }
  return all;
}

const arg = (process.argv[2] || 'all').toLowerCase();
const codes = arg === 'all' ? ['ru', 'ar', 'zh'] : [arg];
if (!codes.every(c => LANG_META[c])) {
  console.error('Usage: node tools/gen-eastern-lessons.mjs ru|ar|zh|all');
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
