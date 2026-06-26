#!/usr/bin/env node
/** Ders başlıkları — tüm arayüz dilleri (th, es, de, fr, it, ru, ar, zh) */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const EN = {
  1: ['Greetings & Introductions'],
  2: ['Suffixes & -de/-da', 'vowel harmony — step by step'],
  3: ['Numbers & Money'],
  4: ['Time & Dates'],
  5: ['Restaurant & Food'],
  6: ['Shopping'],
  7: ['Directions & Places'],
  8: ['Transport & Travel'],
  9: ['Hotel & Accommodation'],
  10: ['Work & Meetings'],
  11: ['Health & Emergencies'],
  12: ['Phone & Technology'],
  13: ['Social Life & Invitations'],
  14: ['Home & Daily Life'],
  15: ['Education & School'],
  16: ['Countries & Cultures'],
  17: ['Feelings & Personality'],
  18: ['Weather & Nature'],
  19: ['Entertainment & Hobbies'],
  20: ['Daily Conversation Simulation'],
  21: ['Vocab 1 — Essential Verbs'],
  22: ['Vocab 2 — Adjectives & Opposites'],
  23: ['Vocab 3 — People & Relationships'],
  24: ['Vocab 4 — City & Places'],
  25: ['Vocab 5 — Food & Drinks'],
  26: ['Vocab 6 — Colors, Shapes & Sizes'],
  27: ['Vocab 7 — Time & Frequency'],
  28: ['Vocab 8 — Sports & Health'],
  29: ['Vocab 9 — Business & Technology'],
  30: ['Vocab 10 — Travel & Holidays'],
  31: ['Vocab 11 — Home & Furniture'],
  32: ['Vocab 12 — Clothing & Fashion'],
  33: ['Vocab 13 — Nature & Environment'],
  34: ['Vocab 14 — Money & Economy'],
  35: ['Vocab 15 — Science & Research'],
  36: ['Vocab 16 — Arts & Media'],
  37: ['Vocab 17 — Question Words & Connectors'],
  38: ['Vocab 18 — Professions & Tools'],
  39: ['Vocab 19 — Thinking & Communication'],
  40: ['Vocab 20 — Animals & Nature'],
  41: ['Vocab 21 — Health & Body'],
  42: ['Vocab 22 — Academic Language'],
  43: ['Vocab 23 — Technology & Digital'],
  44: ['Vocab 24 — Social Expressions'],
  45: ['Vocab 25 — Geography & Countries'],
  46: ['Vocab 26 — Actions & Activities'],
  47: ['Vocab 27 — History & Politics'],
  48: ['Vocab 28 — Idioms & Expressions'],
  49: ['Vocab 29 — Mixed Vocabulary'],
};

const LANG = {
  th: {
    1: ['ทักทายและการแนะนำตัว'],
    2: ['คำนำหน้านามและ sein', 'การสอดคล้องสระ — ทีละขั้น'],
    3: ['ตัวเลขและเงิน'],
    4: ['เวลาและวันที่'],
    5: ['ร้านอาหารและอาหาร'],
    6: ['ช้อปปิ้ง'],
    7: ['ทิศทางและสถานที่'],
    8: ['การขนส่งและการเดินทาง'],
    9: ['โรงแรมและที่พัก'],
    10: ['งานและการประชุม'],
    11: ['สุขภาพและเหตุฉุกเฉิน'],
    12: ['โทรศัพท์และเทคโนโลยี'],
    13: ['ชีวิตสังคมและคำเชิญ'],
    14: ['บ้านและชีวิตประจำวัน'],
    15: ['การศึกษาและโรงเรียน'],
    16: ['ประเทศและวัฒนธรรม'],
    17: ['อารมณ์และบุคลิก'],
    18: ['สภาพอากาศและธรรมชาติ'],
    19: ['ความบันเทิงและงานอดิเรก'],
    20: ['จำลองบทสนทนาประจำวัน'],
    vocab: (n, t) => `คำศัพท์ ${n} — ${t}`,
    topics: ['คำกริยาสำคัญ', 'คำคุณศัพท์และคำตรงข้าม', 'ผู้คนและความสัมพันธ์', 'เมืองและสถานที่', 'อาหารและเครื่องดื่ม', 'สี รูปทรงและขนาด', 'เวลาและความถี่', 'กีฬาและสุขภาพ', 'ธุรกิจและเทคโนโลยี', 'การเดินทางและวันหยุด', 'บ้านและเฟอร์นิเจอร์', 'เสื้อผ้าและแฟชั่น', 'ธรรมชาติและสิ่งแวดล้อม', 'เงินและเศรษฐกิจ', 'วิทยาศาสตร์และการวิจัย', 'ศิลปะและสื่อ', 'คำถามและคำเชื่อม', 'อาชีพและเครื่องมือ', 'การคิดและการสื่อสาร', 'สัตว์และธรรมชาติ', 'สุขภาพและร่างกาย', 'ภาษาวิชาการ', 'เทคโนโลยีและดิจิทัล', 'สำนวนทางสังคม', 'ภูมิศาสตร์และประเทศ', 'การกระทำและกิจกรรม', 'ประวัติศาสตร์และการเมือง', 'สำนวนและนิพจน์', 'คำศัพท์ผสม'],
  },
  es: {
    1: ['Saludos y presentaciones'],
    2: ['Sufijos y -de/-da', 'armonía vocálica — paso a paso'],
    3: ['Números y dinero'],
    4: ['Tiempo y fechas'],
    5: ['Restaurante y comida'],
    6: ['Compras'],
    7: ['Direcciones y lugares'],
    8: ['Transporte y viajes'],
    9: ['Hotel y alojamiento'],
    10: ['Trabajo y reuniones'],
    11: ['Salud y emergencias'],
    12: ['Teléfono y tecnología'],
    13: ['Vida social e invitaciones'],
    14: ['Hogar y vida diaria'],
    15: ['Educación y escuela'],
    16: ['Países y culturas'],
    17: ['Emociones y personalidad'],
    18: ['Tiempo y naturaleza'],
    19: ['Entretenimiento y aficiones'],
    20: ['Simulación de conversación diaria'],
    vocab: (n, t) => `Vocabulario ${n} — ${t}`,
    topics: ['Verbos esenciales', 'Adjetivos y opuestos', 'Personas y relaciones', 'Ciudad y lugares', 'Comida y bebidas', 'Colores, formas y tamaños', 'Tiempo y frecuencia', 'Deporte y salud', 'Negocios y tecnología', 'Viajes y vacaciones', 'Hogar y muebles', 'Ropa y moda', 'Naturaleza y medio ambiente', 'Dinero y economía', 'Ciencia e investigación', 'Arte y medios', 'Palabras interrogativas y conectores', 'Profesiones y herramientas', 'Pensamiento y comunicación', 'Animales y naturaleza', 'Salud y cuerpo', 'Lenguaje académico', 'Tecnología y digital', 'Expresiones sociales', 'Geografía y países', 'Acciones y actividades', 'Historia y política', 'Modismos y expresiones', 'Vocabulario mixto'],
  },
  de: {
    1: ['Begrüßung und Vorstellung'],
    2: ['Suffixe & -de/-da', 'Vokalharmonie — Schritt für Schritt'],
    3: ['Zahlen und Geld'],
    4: ['Zeit und Datum'],
    5: ['Restaurant und Essen'],
    6: ['Einkaufen'],
    7: ['Wegbeschreibung und Orte'],
    8: ['Transport und Reisen'],
    9: ['Hotel und Unterkunft'],
    10: ['Arbeit und Meetings'],
    11: ['Gesundheit und Notfälle'],
    12: ['Telefon und Technologie'],
    13: ['Sozialleben und Einladungen'],
    14: ['Zuhause und Alltag'],
    15: ['Bildung und Schule'],
    16: ['Länder und Kulturen'],
    17: ['Gefühle und Persönlichkeit'],
    18: ['Wetter und Natur'],
    19: ['Unterhaltung und Hobbys'],
    20: ['Alltagsgespräch-Simulation'],
    vocab: (n, t) => `Wortschatz ${n} — ${t}`,
    topics: ['Wichtige Verben', 'Adjektive & Gegensätze', 'Menschen & Beziehungen', 'Stadt & Orte', 'Essen & Getränke', 'Farben, Formen & Größen', 'Zeit & Häufigkeit', 'Sport & Gesundheit', 'Business & Technologie', 'Reisen & Ferien', 'Zuhause & Möbel', 'Kleidung & Mode', 'Natur & Umwelt', 'Geld & Wirtschaft', 'Wissenschaft & Forschung', 'Kunst & Medien', 'Fragewörter & Konnektoren', 'Berufe & Werkzeuge', 'Denken & Kommunikation', 'Tiere & Natur', 'Gesundheit & Körper', 'Akademische Sprache', 'Technologie & Digital', 'Soziale Ausdrücke', 'Geografie & Länder', 'Handlungen & Aktivitäten', 'Geschichte & Politik', 'Redewendungen', 'Gemischter Wortschatz'],
  },
  fr: {
    1: ['Salutations et présentations'],
    2: ['Suffixes et -de/-da', 'harmonie vocalique — étape par étape'],
    3: ['Nombres et argent'],
    4: ['Heure et dates'],
    5: ['Restaurant et nourriture'],
    6: ['Shopping'],
    7: ['Directions et lieux'],
    8: ['Transport et voyage'],
    9: ['Hôtel et hébergement'],
    10: ['Travail et réunions'],
    11: ['Santé et urgences'],
    12: ['Téléphone et technologie'],
    13: ['Vie sociale et invitations'],
    14: ['Maison et vie quotidienne'],
    15: ['Éducation et école'],
    16: ['Pays et cultures'],
    17: ['Émotions et personnalité'],
    18: ['Météo et nature'],
    19: ['Divertissement et loisirs'],
    20: ['Simulation de conversation quotidienne'],
    vocab: (n, t) => `Vocabulaire ${n} — ${t}`,
    topics: ['Verbes essentiels', 'Adjectifs et contraires', 'Personnes et relations', 'Ville et lieux', 'Nourriture et boissons', 'Couleurs, formes et tailles', 'Temps et fréquence', 'Sport et santé', 'Affaires et technologie', 'Voyage et vacances', 'Maison et meubles', 'Vêtements et mode', 'Nature et environnement', 'Argent et économie', 'Science et recherche', 'Arts et médias', 'Mots interrogatifs et connecteurs', 'Professions et outils', 'Pensée et communication', 'Animaux et nature', 'Santé et corps', 'Langage académique', 'Technologie et numérique', 'Expressions sociales', 'Géographie et pays', 'Actions et activités', 'Histoire et politique', 'Expressions idiomatiques', 'Vocabulaire mixte'],
  },
  it: {
    1: ['Saluti e presentazioni'],
    2: ['Suffissi e -de/-da', 'armonia vocalica — passo dopo passo'],
    3: ['Numeri e denaro'],
    4: ['Tempo e date'],
    5: ['Ristorante e cibo'],
    6: ['Shopping'],
    7: ['Indicazioni e luoghi'],
    8: ['Trasporti e viaggi'],
    9: ['Hotel e alloggio'],
    10: ['Lavoro e riunioni'],
    11: ['Salute ed emergenze'],
    12: ['Telefono e tecnologia'],
    13: ['Vita sociale e inviti'],
    14: ['Casa e vita quotidiana'],
    15: ['Istruzione e scuola'],
    16: ['Paesi e culture'],
    17: ['Emozioni e personalità'],
    18: ['Meteo e natura'],
    19: ['Intrattenimento e hobby'],
    20: ['Simulazione di conversazione quotidiana'],
    vocab: (n, t) => `Vocabolario ${n} — ${t}`,
    topics: ['Verbi essenziali', 'Aggettivi e contrari', 'Persone e relazioni', 'Città e luoghi', 'Cibo e bevande', 'Colori, forme e dimensioni', 'Tempo e frequenza', 'Sport e salute', 'Business e tecnologia', 'Viaggi e vacanze', 'Casa e mobili', 'Abbigliamento e moda', 'Natura e ambiente', 'Denaro ed economia', 'Scienza e ricerca', 'Arte e media', 'Parole interrogative e connettori', 'Professioni e strumenti', 'Pensiero e comunicazione', 'Animali e natura', 'Salute e corpo', 'Linguaggio accademico', 'Tecnologia e digitale', 'Espressioni sociali', 'Geografia e paesi', 'Azioni e attività', 'Storia e politica', 'Modi di dire', 'Vocabolario misto'],
  },
  ru: {
    1: ['Приветствия и знакомство'],
    2: ['Суффиксы и -de/-da', 'гармония гласных — шаг за шагом'],
    3: ['Числа и деньги'],
    4: ['Время и даты'],
    5: ['Ресторан и еда'],
    6: ['Покупки'],
    7: ['Направления и места'],
    8: ['Транспорт и путешествия'],
    9: ['Отель и проживание'],
    10: ['Работа и встречи'],
    11: ['Здоровье и экстренные случаи'],
    12: ['Телефон и технологии'],
    13: ['Общение и приглашения'],
    14: ['Дом и быт'],
    15: ['Образование и школа'],
    16: ['Страны и культуры'],
    17: ['Эмоции и личность'],
    18: ['Погода и природа'],
    19: ['Развлечения и хобби'],
    20: ['Симуляция ежедневного разговора'],
    vocab: (n, t) => `Словарь ${n} — ${t}`,
    topics: ['Основные глаголы', 'Прилагательные и противоположности', 'Люди и отношения', 'Город и места', 'Еда и напитки', 'Цвета, формы и размеры', 'Время и частота', 'Спорт и здоровье', 'Бизнес и технологии', 'Путешествия и отдых', 'Дом и мебель', 'Одежда и мода', 'Природа и экология', 'Деньги и экономика', 'Наука и исследования', 'Искусство и медиа', 'Вопросительные слова и союзы', 'Профессии и инструменты', 'Мышление и общение', 'Животные и природа', 'Здоровье и тело', 'Академический язык', 'Технологии и цифровое', 'Социальные выражения', 'География и страны', 'Действия и активности', 'История и политика', 'Идиомы и выражения', 'Смешанный словарь'],
  },
  ar: {
    1: ['التحيات والتعارف'],
    2: ['اللواحق و -de/-da', 'انسجام الحركات — خطوة بخطوة'],
    3: ['الأرقام والمال'],
    4: ['الوقت والتواريخ'],
    5: ['المطعم والطعام'],
    6: ['التسوق'],
    7: ['الاتجاهات والأماكن'],
    8: ['النقل والسفر'],
    9: ['الفندق والإقامة'],
    10: ['العمل والاجتماعات'],
    11: ['الصحة والطوارئ'],
    12: ['الهاتف والتكنولوجيا'],
    13: ['الحياة الاجتماعية والدعوات'],
    14: ['المنزل والحياة اليومية'],
    15: ['التعليم والمدرسة'],
    16: ['البلدان والثقافات'],
    17: ['المشاعر والشخصية'],
    18: ['الطقس والطبيعة'],
    19: ['الترفيه والهوايات'],
    20: ['محاكاة المحادثة اليومية'],
    vocab: (n, t) => `مفردات ${n} — ${t}`,
    topics: ['أفعال أساسية', 'صفات وأضداد', 'أشخاص وعلاقات', 'مدينة وأماكن', 'طعام ومشروبات', 'ألوان وأشكال وأحجام', 'وقت وتكرار', 'رياضة وصحة', 'أعمال وتكنولوجيا', 'سفر وعطل', 'منزل وأثاث', 'ملابس وأزياء', 'طبيعة وبيئة', 'مال واقتصاد', 'علوم وأبحاث', 'فنون وإعلام', 'كلمات استفهام وروابط', 'مهن وأدوات', 'تفكير وتواصل', 'حيوانات وطبيعة', 'صحة وجسم', 'لغة أكاديمية', 'تكنولوجيا ورقمية', 'تعابير اجتماعية', 'جغرافيا وبلدان', 'أفعال وأنشطة', 'تاريخ وسياسة', 'تعابير اصطلاحية', 'مفردات مختلطة'],
  },
  zh: {
    1: ['问候与介绍'],
    2: ['后缀与 -de/-da', '元音和谐 — 循序渐进'],
    3: ['数字与金钱'],
    4: ['时间与日期'],
    5: ['餐厅与食物'],
    6: ['购物'],
    7: ['方向与地点'],
    8: ['交通与旅行'],
    9: ['酒店与住宿'],
    10: ['工作与会议'],
    11: ['健康与紧急情况'],
    12: ['电话与技术'],
    13: ['社交与邀请'],
    14: ['家居与日常生活'],
    15: ['教育与学校'],
    16: ['国家与文化'],
    17: ['情感与性格'],
    18: ['天气与自然'],
    19: ['娱乐与爱好'],
    20: ['日常对话模拟'],
    vocab: (n, t) => `词汇 ${n} — ${t}`,
    topics: ['核心动词', '形容词与反义词', '人与关系', '城市与地点', '食物与饮料', '颜色、形状与大小', '时间与频率', '运动与健康', '商业与技术', '旅行与假期', '家居与家具', '服装与时尚', '自然与环境', '金钱与经济', '科学与研究', '艺术与媒体', '疑问词与连接词', '职业与工具', '思维与交流', '动物与自然', '健康与身体', '学术语言', '技术与数字', '社交表达', '地理与国家', '动作与活动', '历史与政治', '习语与表达', '混合词汇'],
  },
};

function buildPack(langDef) {
  const pack = {};
  for (let n = 1; n <= 20; n++) {
    const e = langDef[n];
    if (!e) continue;
    pack[n] = { title: e[0] };
    if (e[1]) pack[n].subtitle = e[1];
  }
  for (let n = 21; n <= 49; n++) {
    const idx = n - 21;
    pack[n] = { title: langDef.vocab(n - 20, langDef.topics[idx]) };
  }
  return pack;
}

const out = {};
for (const code of ['th', 'es', 'de', 'fr', 'it', 'ru', 'ar', 'zh']) {
  out[code] = buildPack(LANG[code]);
}

const body = `/** Ders başlığı çevirileri — tools/gen-lesson-i18n.mjs */
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
console.log('shared/kdo-lesson-i18n.js — langs:', Object.keys(out).join(', '));
