const L15 = {
  title: "Horas e Rotina Diária",
  words: [
    { en: "Que horas são?", tr: "Saat kaç?", pron: "ke oras são", bd: "saat soran temel ifade" },
    { en: "São duas horas.", tr: "Saat iki.", pron: "são duas oras", bd: "são = çoğul (saat 1 dışında)" },
    { en: "É uma hora.", tr: "Saat bir.", pron: "é uma ora", bd: "é = tekil (sadece saat 1 için)" },
    { en: "e meia", tr: "buçuk (ve yarım)", pron: "i meya", bd: "São três e meia. = Saat üç buçuk." },
    { en: "e quinze / e um quarto", tr: "çeyrek geçiyor", pron: "i kĩnzi / i ũ kuartu", bd: "15 dakika geçiyor" },
    { en: "menos quinze / menos um quarto", tr: "çeyrek kala", pron: "ménush kĩnzi", bd: "15 dakika kala" },
    { en: "da manhã", tr: "sabah / ÖÖ", pron: "da manyã", bd: "às 8 da manhã = sabah 8'de" },
    { en: "da tarde", tr: "öğleden sonra", pron: "da tardi", bd: "às 3 da tarde = öğleden sonra 3'te" },
    { en: "da noite", tr: "akşam / gece", pron: "da noyti", bd: "às 9 da noite = gece 9'da" },
    { en: "acordar", tr: "uyanmak", pron: "akurdar", bd: "düzenli -AR fiili" },
    { en: "tomar banho", tr: "duş almak / yıkanmak", pron: "tomar bãnyu", bd: "BP; EP: tomar duche" },
    { en: "se vestir", tr: "giyinmek", pron: "si veshtir", bd: "dönüşlü: me visto, se veste" },
    { en: "tomar café da manhã", tr: "kahvaltı yapmak", pron: "tomar kafé da manyã", bd: "tomar = almak/içmek (yemek için de)" },
    { en: "ir ao trabalho", tr: "işe gitmek", pron: "ir aw trabalyu", bd: "ir = gitmek (düzensiz)" },
    { en: "almoçar", tr: "öğle yemeği yemek", pron: "almosár", bd: "düzenli -AR; almoço = öğle yemeği" },
    { en: "jantar", tr: "akşam yemeği yemek", pron: "jantár", bd: "düzenli -AR; jantar = akşam yemeği" },
    { en: "descansar", tr: "dinlenmek", pron: "deshkãnsár", bd: "düzenli -AR" },
    { en: "dormir", tr: "uyumak", pron: "dormír", bd: "düzensiz -IR; durmo, dorme, dormimos" },
    { en: "o horário", tr: "zaman çizelgesi / saat programı", pron: "u oráryu", bd: "eril" },
    { en: "pontual", tr: "dakik / zamanında", pron: "põntuall", bd: "pontualidade = dakiklik" }
  ],
  grammar: [
    {
      title: "Saat Söyleme — Que horas são?",
      explanation: "Portekizcede saat söylenirken saat 1 için 'É uma hora' (tekil), diğer saatler için 'São + sayı + horas' (çoğul) kullanılır. Dakikalar 'e' (ve) veya 'menos' (eksi) ile eklenir. Günün dilimini belirtmek için 'da manhã/tarde/noite' eklenir.",
      table: [
        { pronoun: "Saat 1", form: "É uma hora.", example: "É uma hora da tarde.", tr: "Öğleden sonra 1." },
        { pronoun: "Saat 2+", form: "São + sayı + horas.", example: "São oito horas da manhã.", tr: "Sabah sekiz." },
        { pronoun: "Buçuk", form: "São X e meia.", example: "São seis e meia.", tr: "Altı buçuk." },
        { pronoun: "15 geçiyor", form: "São X e quinze.", example: "São dez e quinze.", tr: "On on beş." },
        { pronoun: "15 kala", form: "São X menos quinze.", example: "São três menos quinze.", tr: "Üçe çeyrek kala." },
        { pronoun: "Tam", form: "São X em ponto.", example: "São nove em ponto.", tr: "Tam dokuz." }
      ],
      note: "24 saat formatı (resmi): 'Às quatorze horas' = Saat 14:00. Günlük: 'Às duas da tarde.' Tren/otobüs çizelgesi 24 saat kullanır."
    },
    {
      title: "Günlük Rutin — Dönüşlü Fiiller",
      explanation: "Günlük rutini anlatırken birçok dönüşlü fiil (verbos reflexivos) kullanılır: acordar-se, levantar-se, vestir-se, deitar-se. BP'de dönüşlü zamir çoğu zaman fiilin ÖNÜNE alınır: 'Me acordo' (BP) vs 'Acordo-me' (EP).",
      table: [
        { pronoun: "Acordar-se", form: "uyanmak", example: "Me acordo às sete.", tr: "Saat yedide uyanıyorum." },
        { pronoun: "Levantar-se", form: "kalkmak", example: "Me levanto logo depois.", tr: "Hemen ardından kalkıyorum." },
        { pronoun: "Vestir-se", form: "giyinmek", example: "Me visto rapidamente.", tr: "Hızlıca giyiniyorum." },
        { pronoun: "Deitar-se", form: "yatmak", example: "Me deito às onze.", tr: "Saat on birde yatıyorum." },
        { pronoun: "Banhar-se", form: "banyo/duş almak", example: "Me banho de manhã.", tr: "Sabahları duş alıyorum." },
        { pronoun: "Preparar-se", form: "hazırlanmak", example: "Me preparo para o trabalho.", tr: "İşe hazırlanıyorum." }
      ],
      note: "BP konuşma dilinde reflexivo zarfı genellikle başa gelir: 'Eu me acordo' = uyanıyorum. 'Você se levanta?' = Kalkıyor musunuz?"
    },
    {
      title: "Zaman Belirteçleri — Sabah'tan Geceye",
      explanation: "Günlük rutini aktarırken 'de manhã cedo' (sabah erken), 'ao meio-dia' (öğlen), 'de tarde' (öğleden sonra), 'à noite' (akşam/gece) gibi ifadeler sıklıkla kullanılır. Bunlar zaman zarfı görevindedir.",
      table: [
        { pronoun: "Sabah erken", form: "de madrugada / de manhã cedo", example: "Acordo de manhã cedo.", tr: "Sabah erken uyanıyorum." },
        { pronoun: "Öğlen", form: "ao meio-dia", example: "Almoço ao meio-dia.", tr: "Öğlen öğle yemeği yiyorum." },
        { pronoun: "Öğleden sonra", form: "à tarde / de tarde", example: "Trabalho até as seis da tarde.", tr: "Öğleden sonra altıya kadar çalışıyorum." },
        { pronoun: "Akşam", form: "à noite / de noite", example: "Janto às oito da noite.", tr: "Gece sekizde akşam yemeği yiyorum." },
        { pronoun: "Sıklık", form: "sempre, geralmente, às vezes", example: "Geralmente acordo às sete.", tr: "Genellikle saat yedide uyanırım." },
        { pronoun: "Önce/Sonra", form: "antes/depois de + infinitivo", example: "Antes de dormir, leio.", tr: "Uyumadan önce okuyorum." }
      ],
      note: "De madrugada = sabahın körü (gece 1-5 arası). Anoitecer = alacakaranlık. Amanhecer = şafak vakti."
    }
  ],
  speaking: [
    { q: "Saat kaç? (Saat 3:30 cevabı)", a: "São três e meia da tarde." },
    { q: "Kaçta uyanırsınız?", a: "Me acordo às [saat] da manhã." },
    { q: "'Sabah sekizde kahvaltı yapıyorum' nasıl?", a: "Tomo café da manhã às oito horas." },
    { q: "'Yatmadan önce diş fırçalıyorum' nasıl?", a: "Antes de dormir, escovo os dentes." },
    { q: "Gece 10'u 'da noite' ile söyleyin.", a: "São dez da noite. / Às dez da noite." }
  ],
  dialogues: [
    {
      title: "Sabah Rutini",
      lines: [
        { speaker: "Mãe", text: "Lucas, acorda! São sete e meia!", tr: "Lucas, uyan! Yedi buçuk!" },
        { speaker: "Lucas", text: "Já? Mais cinco minutinhos...", tr: "Şimdiden mi? Beş dakika daha..." },
        { speaker: "Mãe", text: "Não! Você tem que estar na escola às oito!", tr: "Hayır! Sekizde okulda olman lazım!" },
        { speaker: "Lucas", text: "Tudo bem, tudo bem. Vou me levantar agora.", tr: "Tamam, tamam. Şimdi kalkıyorum." },
        { speaker: "Mãe", text: "Toma banho rápido e desce para o café da manhã.", tr: "Hızlıca duş al ve kahvaltıya in." },
        { speaker: "Lucas", text: "Ok mãe! Que horas o ônibus passa?", tr: "Tamam anne! Otobüs kaçta geçiyor?" }
      ]
    }
  ],
  listening: {
    text: "Minha rotina diária começa às seis e meia da manhã. Primeiro, me levanto e tomo um banho quente. Depois, tomo café da manhã: café com leite, pão de queijo e fruta. Saio de casa às sete e quarenta e pego o metrô para o trabalho. Trabalho das nove ao meio-dia, almoço, e volto às duas da tarde. Às seis termino o trabalho e chego em casa às sete. Janto, assisto uma série e me deito às onze da noite.",
    questions: [
      { q: "Kaçta uyanıyor?", a: "Saat altı buçukta" },
      { q: "İşe nasıl gidiyor?", a: "Metro ile" },
      { q: "Kaçta yatıyor?", a: "Gece on birde" }
    ]
  }
};
LESSONS[15] = L15;
