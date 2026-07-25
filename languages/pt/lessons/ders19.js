const L19 = {
  title: "Trabalho e Profissões",
  words: [
    { en: "o trabalho", tr: "iş / çalışma", pron: "u trabalyu", bd: "eril; trabalhar = çalışmak" },
    { en: "a profissão", tr: "meslek", pron: "a profisão", bd: "dişil; Qual é sua profissão?" },
    { en: "o médico / a médica", tr: "doktor", pron: "u médzhiku / a médzhika", bd: "cinsiyet uyumu" },
    { en: "o engenheiro / a engenheira", tr: "mühendis", pron: "u ẽnjeyneyru / a ẽnjeyneyra", bd: "cinsiyet uyumu" },
    { en: "o professor / a professora", tr: "öğretmen", pron: "u profesór / a profesóra", bd: "cinsiyet uyumu" },
    { en: "o advogado / a advogada", tr: "avukat", pron: "u advogadu / a advogada", bd: "cinsiyet uyumu" },
    { en: "o empresário / a empresária", tr: "iş insanı / girişimci", pron: "u ẽmprezáryu / a ẽmprezárya", bd: "cinsiyet uyumu" },
    { en: "o programador / a programadora", tr: "programcı / yazılımcı", pron: "u programador / a programadora", bd: "cinsiyet uyumu" },
    { en: "o cozinheiro / a cozinheira", tr: "aşçı / şef", pron: "u kozĩneyru / a kozĩneyra", bd: "cinsiyet uyumu" },
    { en: "o jornalista / a jornalista", tr: "gazeteci", pron: "u jornalishta / a jornalishta", bd: "tek form — cinsiyet değişmez" },
    { en: "o artista / a artista", tr: "sanatçı", pron: "u artishta / a artishta", bd: "tek form" },
    { en: "o funcionário / a funcionária", tr: "memur / çalışan", pron: "u funsionáryu / a funsionárya", bd: "cinsiyet uyumu" },
    { en: "o chefe / a chefe", tr: "patron / şef / amir", pron: "u shefi / a shefi", bd: "tek form" },
    { en: "o salário", tr: "maaş", pron: "u saláryu", bd: "eril" },
    { en: "a empresa", tr: "şirket", pron: "a ẽmpreza", bd: "dişil" },
    { en: "o escritório", tr: "ofis / büro", pron: "u ıshkritóryu", bd: "eril" },
    { en: "a reunião", tr: "toplantı", pron: "a heuniaw", bd: "dişil; çoğul: reuniões" },
    { en: "trabalhar em home office", tr: "evden çalışmak", pron: "trabalyár ẽy om ofishi", bd: "BP'de çok yaygın ifade" },
    { en: "o prazo", tr: "son tarih / teslim tarihi", pron: "u prazu", bd: "eril; prazo final = kesin son tarih" },
    { en: "Estou desempregado/a.", tr: "İşsizim.", pron: "ıshto dezemprıgadu/a", bd: "desemprego = işsizlik" }
  ],
  grammar: [
    {
      title: "Meslek Bildirme — SER + Meslek (Artikelsiz!)",
      explanation: "Mesleği belirtirken 'Sou médico' (ben doktorum) gibi SER kullanılır. ÖNEMLİ: Portekizcede meslek bildirirken belirsiz artikel (um/uma) KULLANILMAZ — İngilizce'deki 'I am A doctor'dan farklıdır. İstisnalar: ünleme veya değiştirici varsa kullanılır.",
      table: [
        { pronoun: "Meslek", form: "Sou + meslek (artikelsiz)", example: "Sou professora.", tr: "Öğretmenim." },
        { pronoun: "Soru", form: "O que você é? / Qual é sua profissão?", example: "O que você faz?", tr: "Ne iş yaparsınız?" },
        { pronoun: "Nerede", form: "trabalhar em/na/no", example: "Trabalho numa escola.", tr: "Bir okulda çalışıyorum." },
        { pronoun: "Değiştirici ile", form: "Sou um bom médico.", example: "Ela é uma ótima engenheira.", tr: "O harika bir mühendis. (sıfat var!)" },
        { pronoun: "Geçmiş meslek", form: "Trabalhei como...", example: "Trabalhei como garçom.", tr: "Garson olarak çalıştım." },
        { pronoun: "İstihdam durumu", form: "estar empregado/desempregado", example: "Estou empregada.", tr: "Çalışıyorum. (istihdam var)" }
      ],
      note: "Sıfat yoksa meslek artikelsiz: 'Sou médico.' Sıfat varsa artikel gelir: 'Sou um médico experiente.'"
    },
    {
      title: "TRABALHAR — Çalışma Fiili ve İş Hayatı",
      explanation: "TRABALHAR (çalışmak) düzenli -AR fiildir. Nerede çalıştığınızı, ne kadar çalıştığınızı ve nasıl çalıştığınızı belirtmek için çeşitli preposisyonlar kullanılır.",
      table: [
        { pronoun: "Eu trabalho", form: "çalışıyorum", example: "Trabalho oito horas por dia.", tr: "Günde sekiz saat çalışıyorum." },
        { pronoun: "trabalhar em", form: "bir yerde", example: "Trabalho em São Paulo.", tr: "São Paulo'da çalışıyorum." },
        { pronoun: "trabalhar como", form: "bir pozisyonda", example: "Trabalho como gerente.", tr: "Müdür olarak çalışıyorum." },
        { pronoun: "trabalhar para", form: "bir şirkette", example: "Trabalho para a Petrobras.", tr: "Petrobras için çalışıyorum." },
        { pronoun: "Freelancer", form: "trabalhar por conta própria", example: "Sou freelancer.", tr: "Serbest çalışıyorum." },
        { pronoun: "Home office", form: "trabalhar de casa", example: "Trabalho de casa desde 2020.", tr: "2020'den beri evden çalışıyorum." }
      ],
      note: "CLT = Türkiye'deki iş kanununa benzer Brezilya çalışma mevzuatı. Muitos brasileiros têm carteira assinada (kayıtlı işçi)."
    },
    {
      title: "Gelecek Zaman — IR + Infinitivo (Yakın Gelecek)",
      explanation: "Portekizcede en yaygın gelecek zaman ifadesi IR + infinitivo yapısıdır: 'Vou viajar' = Seyahat edeceğim. Bu yapı İngilizce 'going to' yapısına benzer. Kesin gelecek için 'futuro simples' (-rei/-rá) da kullanılır.",
      table: [
        { pronoun: "Eu vou + mastar", form: "yapacağım", example: "Vou entregar o relatório.", tr: "Raporu teslim edeceğim." },
        { pronoun: "Você vai + mastar", form: "yapacaksınız", example: "Vai participar da reunião?", tr: "Toplantıya katılacak mısınız?" },
        { pronoun: "Nós vamos + mastar", form: "yapacağız", example: "Vamos assinar o contrato.", tr: "Sözleşmeyi imzalayacağız." },
        { pronoun: "Eles vão + mastar", form: "yapacaklar", example: "Vão apresentar o projeto.", tr: "Projeyi sunacaklar." },
        { pronoun: "Futuro simples -AR", form: "falar → falarei", example: "Falarei com o chefe.", tr: "Patronla konuşacağım. (resmi)" },
        { pronoun: "Futuro simples -ER", form: "fazer → farei", example: "Farei o relatório.", tr: "Raporu hazırlayacağım. (resmi)" }
      ],
      note: "BP konuşmada 'vou fazer' tercih edilir. 'Farei' = yazılı/resmi. Her ikisi de doğrudur ama register farklıdır."
    }
  ],
  speaking: [
    { q: "Mesleğinizi söyleyin.", a: "Sou [meslek]. Trabalho em/na/no [yer]." },
    { q: "'Evden çalışıyorum' nasıl?", a: "Trabalho em home office / de casa." },
    { q: "'Yarın toplantıya katılacağım' nasıl?", a: "Vou participar da reunião amanhã." },
    { q: "Birine mesleğini nasıl sorarsınız?", a: "O que você faz? / Qual é sua profissão?" },
    { q: "'Serbest çalışıyorum' nasıl?", a: "Trabalho por conta própria. / Sou freelancer." }
  ],
  dialogues: [
    {
      title: "İş Görüşmesi",
      lines: [
        { speaker: "Entrevistador", text: "Bom dia! Fale um pouco sobre você.", tr: "Günaydın! Kendinizden biraz bahsedin." },
        { speaker: "Candidato", text: "Bom dia! Me chamo André, sou engenheiro de software com cinco anos de experiência.", tr: "Günaydın! Adım André, beş yıl deneyimli yazılım mühendisiyim." },
        { speaker: "Entrevistador", text: "Por que quer trabalhar aqui?", tr: "Neden burada çalışmak istiyorsunuz?" },
        { speaker: "Candidato", text: "Admiro muito os produtos da empresa e quero contribuir com minha experiência em inteligência artificial.", tr: "Şirketin ürünlerine çok hayranım ve yapay zeka deneyimimle katkıda bulunmak istiyorum." },
        { speaker: "Entrevistador", text: "Qual é sua expectativa salarial?", tr: "Maaş beklentiniz nedir?" },
        { speaker: "Candidato", text: "Estou aberto a negociar. Minha expectativa é em torno de doze mil reais mensais.", tr: "Müzakereye açığım. Beklentim aylık yaklaşık on iki bin real." }
      ]
    }
  ],
  listening: {
    text: "O mercado de trabalho no Brasil passou por grandes mudanças nos últimos anos. Com a pandemia, o trabalho remoto se popularizou muito, especialmente na área de tecnologia. Hoje, muitas empresas brasileiras oferecem modelos híbridos — parte presencial e parte home office. Os setores que mais contratam são tecnologia da informação, saúde e agronegócio. O salário mínimo nacional é definido anualmente pelo governo federal.",
    questions: [
      { q: "Pandemi sonrası ne yaygınlaştı?", a: "Uzaktan çalışma (home office)" },
      { q: "Hangi sektörler en fazla istihdam yaratıyor?", a: "Bilgi teknolojisi, sağlık, tarım-gıda" },
      { q: "Asgari ücret kim tarafından belirleniyor?", a: "Federal hükümet, yıllık olarak" }
    ]
  }
};
LESSONS[19] = L19;
