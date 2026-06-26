/**
 * Türkçe öğretme uygulaması — cümle analizi ve gramer özetleri (tüm arayüz dilleri).
 */
(function () {
  'use strict';

  var TR_PHRASES = [
    'tanıştığımıza memnun oldum', 'tanıştığıma memnun oldum', 'ben de memnun oldum',
    'memnun oldum', 'benim adım', 'adın ne', 'nasılsın', 'iyiyim', 'teşekkürler',
    'teşekkür ederim', 'günaydın', 'iyi akşamlar', 'iyi günler', 'hoşça kal',
    'görüşürüz', 'merhaba', 'lütfen', 'evet', 'hayır'
  ];

  var SUMMARIES = {
    tr: {
      meet: 'Tanışma kalıbı — yeni biriyle tanışınca kullanılır. Tanışmak + -dığım/-dığımıza (buluşma) + memnun (memnun) + oldum (oldum).',
      meet_plural: 'Resmi/çoğul tanışma: «tanıştığımıza memnun oldum» = tanıştığımız için memnunum.',
      meet_reply: 'Karşılık: «Ben de memnun oldum» = Nice to meet you too.',
      greet: 'Selamlama ifadesi — günün saatine veya samimiyete göre seçilir.',
      farewell: 'Veda ifadesi.',
      thanks: 'Teşekkür ifadesi — minnet göstermek için.',
      name: 'Tanışma: isim sorma veya söyleme kalıbı.',
      how: 'Hal hatır sorma: Nasılsın? = How are you?',
      fine: 'Olumlu cevap: İyiyim = I am fine.',
      question: 'Soru cümlesi — Türkçede soru eki veya soru kelimesi kullanılır.',
      parts: 'Cümle parçalara ayrıldı. Her parçanın görevine dikkat et.'
    },
    en: {
      meet: 'Meeting phrase used when you meet someone new. Tanışmak = to meet; -dığıma = that I met; memnun = pleased; oldum = I became (I am).',
      meet_plural: 'Formal/plural form: «tanıştığımıza memnun oldum» = pleased that we met (nice to meet you).',
      meet_reply: 'Reply: «Ben de memnun oldum» = Nice to meet you too.',
      greet: 'Greeting — choose by time of day or formality.',
      farewell: 'Farewell expression.',
      thanks: 'Expression of thanks.',
      name: 'Introduction: asking or giving a name.',
      how: '«Nasılsın?» = How are you?',
      fine: '«İyiyim» = I am fine.',
      question: 'Question sentence.',
      parts: 'Sentence split into parts. Note each part\'s role.'
    },
    de: {
      meet: 'Begrüßungsformel beim Kennenlernen. Tanışmak = kennenlernen; memnun = erfreut; oldum = ich wurde (ich bin).',
      meet_plural: 'Höfliche Form: «tanıştığımıza memnun oldum» = Freut mich, Sie kennenzulernen.',
      meet_reply: 'Antwort: «Ben de memnun oldum» = Mich auch.',
      greet: 'Begrüßung — je nach Tageszeit oder Situation.',
      farewell: 'Verabschiedung.',
      thanks: 'Danksagung.',
      name: 'Vorstellung: Name fragen oder nennen.',
      how: '«Nasılsın?» = Wie geht es dir?',
      fine: '«İyiyim» = Mir geht es gut.',
      question: 'Fragesatz.',
      parts: 'Satz in Teile gegliedert. Achte auf die Rolle jedes Teils.'
    },
    fr: {
      meet: 'Formule de rencontre. Tanışmak = faire connaissance; memnun = content; oldum = je suis devenu.',
      meet_plural: 'Forme polie : «tanıştığımıza memnun oldum» = Enchanté(e) de faire votre connaissance.',
      meet_reply: 'Réponse : «Ben de memnun oldum» = Moi aussi, enchanté(e).',
      greet: 'Salutation selon le moment ou le registre.',
      farewell: 'Formule d\'au revoir.',
      thanks: 'Remerciement.',
      name: 'Présentation : demander ou donner un nom.',
      how: '«Nasılsın?» = Comment vas-tu ?',
      fine: '«İyiyim» = Je vais bien.',
      question: 'Phrase interrogative.',
      parts: 'Phrase divisée en parties. Observe le rôle de chaque partie.'
    },
    es: {
      meet: 'Fórmula al conocer a alguien. Tanışmak = conocer; memnun = contento; oldum = me volví (estoy).',
      meet_plural: 'Forma formal: «tanıştığımıza memnun oldum» = Mucho gusto en conocerle.',
      meet_reply: 'Respuesta: «Ben de memnun oldum» = Igualmente.',
      greet: 'Saludo según la hora o el contexto.',
      farewell: 'Despedida.',
      thanks: 'Agradecimiento.',
      name: 'Presentación: preguntar o decir el nombre.',
      how: '«Nasılsın?» = ¿Cómo estás?',
      fine: '«İyiyim» = Estoy bien.',
      question: 'Oración interrogativa.',
      parts: 'Oración dividida en partes. Observa el papel de cada una.'
    },
    it: {
      meet: 'Formula di conoscenza. Tanışmak = conoscere; memnun = contento; oldum = sono diventato.',
      meet_plural: 'Forma formale: «tanıştığımıza memnun oldum» = Piacere di conoscerLa.',
      meet_reply: 'Risposta: «Ben de memnun oldum» = Altrettanto.',
      greet: 'Saluto in base al momento o al contesto.',
      farewell: 'Congedo.',
      thanks: 'Ringraziamento.',
      name: 'Presentazione: chiedere o dire il nome.',
      how: '«Nasılsın?» = Come stai?',
      fine: '«İyiyim» = Sto bene.',
      question: 'Frase interrogativa.',
      parts: 'Frase suddivisa in parti. Osserva il ruolo di ciascuna.'
    },
    ru: {
      meet: 'Фраза при знакомстве. Tanışmak = знакомиться; memnun = доволен; oldum = я стал.',
      meet_plural: '«tanıştığımıza memnun oldum» = Рад(а) познакомиться с вами.',
      meet_reply: '«Ben de memnun oldum» = Взаимно.',
      greet: 'Приветствие.',
      farewell: 'Прощание.',
      thanks: 'Благодарность.',
      name: 'Знакомство: имя.',
      how: '«Nasılsın?» = Как дела?',
      fine: '«İyiyim» = Хорошо.',
      question: 'Вопросительное предложение.',
      parts: 'Предложение разбито на части.'
    },
    ar: {
      meet: 'عبارة تعارف. Tanışmak = التعارف؛ memnun = سعيد؛ oldum = أصبحت.',
      meet_plural: '«tanıştığımıza memnun oldum» = تشرفت بمعرفتكم.',
      meet_reply: '«Ben de memnun oldum» = وأنا أيضاً.',
      greet: 'تحية.',
      farewell: 'وداع.',
      thanks: 'شكر.',
      name: 'تعارف: الاسم.',
      how: '«Nasılsın?» = كيف حالك؟',
      fine: '«İyiyim» = بخير.',
      question: 'جملة استفهام.',
      parts: 'الجملة مقسمة إلى أجزاء.'
    },
    zh: {
      meet: '见面用语。Tanışmak=认识；memnun=高兴；oldum=我成为。',
      meet_plural: '«tanıştığımıza memnun oldum»=很高兴认识您。',
      meet_reply: '«Ben de memnun oldum»=我也是。',
      greet: '问候语。',
      farewell: '告别。',
      thanks: '感谢。',
      name: '介绍：姓名。',
      how: '«Nasılsın?»=你好吗？',
      fine: '«İyiyim»=我很好。',
      question: '疑问句。',
      parts: '句子已拆分，注意各部分作用。'
    },
    th: {
      meet: 'คำทักทายเมื่อพบกันครั้งแรก Tanışmak=พบ memnun=ยินดี oldum=ฉันเป็น',
      meet_plural: '«tanıştığımıza memnun oldum»=ยินดีที่ได้รู้จัก',
      meet_reply: '«Ben de memnun oldum»=เช่นกัน',
      greet: 'คำทักทาย',
      farewell: 'คำลา',
      thanks: 'คำขอบคุณ',
      name: 'แนะนำตัว',
      how: '«Nasılsın?»=สบายดีไหม',
      fine: '«İyiyim»=สบายดี',
      question: 'ประโยคคำถาม',
      parts: 'แยกประโยคเป็นส่วนๆ'
    }
  };

  function pack(lang) {
    return SUMMARIES[lang] || SUMMARIES.en;
  }

  function norm(s) {
    return (s || '').toLowerCase().replace(/[.!?,…]+$/g, '').replace(/\s+/g, ' ').trim();
  }

  function tokenizeTurkish(text) {
    var s = text.replace(/[.!?,…]+$/g, '').trim();
    if (!s) return [];
    return s.split(/\s+/).filter(Boolean);
  }

  function buildSummary(text, bd, appLang) {
    var low = norm(text);
    var P = pack(appLang);
    if (/tanıştığımıza\s+memnun/.test(low)) return P.meet_plural;
    if (/tanıştığıma\s+memnun|tanıştığımıza\s+memnun/.test(low)) return P.meet;
    if (/ben de memnun/.test(low)) return P.meet_reply;
    if (/^(merhaba|günaydın|iyi akşamlar|iyi günler|selam)/.test(low)) return P.greet;
    if (/^(hoşça kal|görüşürüz|hoşça kalın)/.test(low)) return P.farewell;
    if (/teşekkür/.test(low)) return P.thanks;
    if (/benim adım|adın ne/.test(low)) return P.name;
    if (/nasılsın/.test(low)) return P.how;
    if (/^iyiyim/.test(low)) return P.fine;
    if (/\?$/.test(text)) return P.question;
    if (bd && bd.length > 1) return P.parts;
    return '';
  }

  function defaultBd(text, gloss, appLang) {
    var low = norm(text);
    if (/tanıştığım[aı] memnun oldum/.test(low)) {
      var notes = {
        tr: ['Tanışmak fiilinden: -dığıma = buluştuğum için', 'Sıfat: memnun = memnun', 'Olumlu geçmiş: oldum = oldum'],
        en: ['From tanışmak (to meet) + -dığıma (that I met)', 'Adjective: pleased/glad', 'Past tense of olmak: I became / I am'],
        de: ['Von tanışmak (kennenlernen) + -dığıma', 'Adjektiv: erfreut', 'Vergangenheit von olmak: ich bin']
      };
      var n = notes[appLang] || notes.en;
      return [
        { ro: 'Tanıştığıma', tr: 'to meet you', role: 'phrase', note: n[0], note_en: n[0] },
        { ro: 'memnun', tr: 'pleased', role: 'adj', note: n[1], note_en: n[1] },
        { ro: 'oldum', tr: 'I became', role: 'V', note: n[2], note_en: n[2] }
      ];
    }
    if (/tanıştığımıza memnun oldum/.test(low)) {
      return [
        { ro: 'Tanıştığımıza', tr: 'that we met', role: 'phrase', note_en: 'Plural/formal: -mıza (to our meeting)' },
        { ro: 'memnun', tr: 'pleased', role: 'adj', note_en: 'pleased, glad' },
        { ro: 'oldum', tr: 'I am', role: 'V', note_en: 'olmak past: I became' }
      ];
    }
    var tokens = tokenizeTurkish(text);
    if (!tokens.length) return [];
    var parts = (gloss || '').split(/\s+/);
    return tokens.map(function (ro, i) {
      return { ro: ro, tr: parts[i] || '—', role: i === tokens.length - 1 ? 'V' : 'phrase', note: '', note_en: '' };
    });
  }

  function prepareTurkishBreakdown(text, gloss, rawBd, gramNote, appLang) {
    text = (text || '').trim();
    if (!text) return { bd: [], summary: '' };
    var bd = Array.isArray(rawBd) && rawBd.length ? rawBd.map(function (p) { return Object.assign({}, p); }) : defaultBd(text, gloss, appLang);
    if (!bd.length) bd = defaultBd(text, gloss, appLang);
    var LfNote = window.KDO_LfNote || function (p) { return p.note || ''; };
    bd = bd.map(function (p, i, arr) {
      return {
        ro: p.ro,
        tr: p.tr || '—',
        role: p.role || 'phrase',
        note: LfNote(p, appLang)
      };
    });
    var summary = '';
    if (gramNote && appLang === 'tr') summary = gramNote;
    else if (typeof gramNote === 'object' && gramNote) {
      summary = window.KDO_Lf ? window.KDO_Lf(gramNote, 'text', appLang) : (gramNote.en || gramNote.tr || '');
    } else if (appLang !== 'tr' && typeof gramNote === 'string' && arguments[5]) {
      summary = arguments[5];
    } else if (appLang !== 'tr' && typeof gramNote === 'string') {
      summary = buildSummary(text, bd, appLang);
    } else {
      summary = gramNote || buildSummary(text, bd, appLang);
    }
    if (!summary) summary = buildSummary(text, bd, appLang);
    return { bd: bd, summary: summary };
  }

  window.KDO_prepareTurkishBreakdown = prepareTurkishBreakdown;
  window.KDO_buildTurkishSummary = buildSummary;
})();
