const L2 = {
  title: "Artigos e Ser/Estar",
  words: [
    { en: "o livro", tr: "kitap (erkek)", pron: "u livru", bd: "o=eril tekil belirli artikel" },
    { en: "a casa", tr: "ev (dişil)", pron: "a kaza", bd: "a=dişil tekil belirli artikel" },
    { en: "um homem", tr: "bir adam", pron: "ũ omẽy", bd: "um=eril tekil belirsiz artikel" },
    { en: "uma mulher", tr: "bir kadın", pron: "uma mulyér", bd: "uma=dişil tekil belirsiz artikel" },
    { en: "os livros", tr: "kitaplar", pron: "us livrus", bd: "os=eril çoğul artikel" },
    { en: "as casas", tr: "evler", pron: "as kazas", bd: "as=dişil çoğul artikel" },
    { en: "Eu sou brasileiro", tr: "Ben Brezilyalıyım", pron: "ew so brazilêyru", bd: "sou=ser fiilinin ben çekimi" },
    { en: "Ela é bonita", tr: "O (kadın) güzel", pron: "ela é bonita", bd: "é=ser fiilinin o/siz çekimi" },
    { en: "Eu estou bem", tr: "İyiyim (şu an)", pron: "ew ısto bẽy", bd: "estou=estar fiilinin ben çekimi" },
    { en: "Você está cansado", tr: "Siz yorgunsunuz (şu an)", pron: "vosê ıshta kãzadu", bd: "está=estar fiilinin siz çekimi" },
    { en: "O carro é vermelho", tr: "Araba kırmızıdır", pron: "u kahu é vermelyu", bd: "ser: kalıcı özellik" },
    { en: "A comida está quente", tr: "Yemek sıcak (şu an)", pron: "a komida ıshta kẽntshi", bd: "estar: geçici durum" },
    { en: "Nós somos amigos", tr: "Biz arkadaşız", pron: "nos somus amigus", bd: "somos=ser/biz" },
    { en: "Eles estão em casa", tr: "Onlar evdeler (şu an)", pron: "elis ıshtão ẽy kaza", bd: "estão=estar/onlar" },
    { en: "Ela é médica", tr: "O doktordur (meslek)", pron: "ela é médzhika", bd: "ser: meslek → artikel yok" },
    { en: "Você é de onde?", tr: "Siz nerelisiniz?", pron: "vosê é dshi ôndshi", bd: "ser: köken/menşe" },
    { en: "Eu sou de Ankara", tr: "Ben Ankaralıyım", pron: "ew so dshi Ankara", bd: "ser+de: şehir/ülke köken" },
    { en: "O tempo está frio", tr: "Hava soğuk (şu an)", pron: "u tẽmpu ıshta friu", bd: "estar: hava durumu" },
    { en: "Ela está feliz", tr: "O mutlu (şu an)", pron: "ela ıshta felis", bd: "estar: geçici duygu" },
    { en: "Tudo bem?", tr: "Her şey yolunda mı?", pron: "tudu bẽy", bd: "tudo=her şey; bem=iyi" }
  ],
  grammar: [
    {
      title: "Portekizce Artikleri: o/a/os/as & um/uma",
      explanation: "Portekizcede her ismin bir cinsiyeti vardır (eril veya dişil). Belirli artikleri 'the' gibi çalışır. Belirsiz artikleri 'a/an' gibi çalışır. İsimlerin büyük çoğunluğu -o ile bitiyorsa eril, -a ile bitiyorsa dişildir.",
      table: [
        { pronoun: "Tekil Eril", form: "o / um", example: "o livro / um livro", tr: "kitap / bir kitap" },
        { pronoun: "Tekil Dişil", form: "a / uma", example: "a casa / uma casa", tr: "ev / bir ev" },
        { pronoun: "Çoğul Eril", form: "os / uns", example: "os livros / uns livros", tr: "kitaplar / birkaç kitap" },
        { pronoun: "Çoğul Dişil", form: "as / umas", example: "as casas / umas casas", tr: "evler / birkaç ev" },
        { pronoun: "İstisna -a eril", form: "o / um", example: "o dia / o mapa", tr: "gün / harita (eril!)" },
        { pronoun: "İstisna -o dişil", form: "a / uma", example: "a mão / a foto", tr: "el / fotoğraf (dişil!)" }
      ],
      note: "Kural: -ade, -agem, -ção, -são ile biten isimler genellikle dişildir. -ema, -ista ile bitenler genellikle erildir."
    },
    {
      title: "SER Fiili — Kalıcı Özellikler",
      explanation: "SER fiili Türkçedeki 'olmak' fiiline karşılık gelir ve kalıcı özellikleri, kimliği, kökeni, mesleği, dini ve zamanı belirtmek için kullanılır. Yani değişmeyen gerçekler için SER kullanılır.",
      table: [
        { pronoun: "Eu", form: "sou", example: "Eu sou professor.", tr: "Ben öğretmenim." },
        { pronoun: "Você / Ele / Ela", form: "é", example: "Ela é brasileira.", tr: "O Brezilyalıdır." },
        { pronoun: "Nós", form: "somos", example: "Nós somos amigos.", tr: "Biz arkadaşız." },
        { pronoun: "Vocês / Eles / Elas", form: "são", example: "Eles são médicos.", tr: "Onlar doktordur." },
        { pronoun: "Meslek (artikel yok)", form: "ser + meslek", example: "Sou médico. (um yok!)", tr: "Doktorum. (bir değil!)" },
        { pronoun: "Köken", form: "ser + de", example: "Sou de Türkiye.", tr: "Türkiye'denim." }
      ],
      note: "SER kullanım alanları: KİMLİK (isim, uyruk), KÖKENİ (nereli), MESLEK, KALİTE (renk, boyut, malzeme), ZAMAN (saat, tarih)."
    },
    {
      title: "ESTAR Fiili — Geçici Durumlar",
      explanation: "ESTAR fiili de 'olmak' anlamına gelir ancak geçici durum, konum, ruh hali ve şu andaki koşullar için kullanılır. SER ile ESTAR arasındaki fark Portekizce öğrenmenin en kritik konusudur!",
      table: [
        { pronoun: "Eu", form: "estou", example: "Estou cansado hoje.", tr: "Bugün yorgunum (geçici)." },
        { pronoun: "Você / Ele / Ela", form: "está", example: "Ela está feliz agora.", tr: "O şu an mutlu." },
        { pronoun: "Nós", form: "estamos", example: "Estamos em casa.", tr: "Evdeyiz (konum)." },
        { pronoun: "Vocês / Eles / Elas", form: "estão", example: "Estão com fome.", tr: "Onlar aç (şu an)." },
        { pronoun: "Konum için", form: "estar + em", example: "O banco está ali.", tr: "Banka şurada (konum)." },
        { pronoun: "Süreç için", form: "estar + gerúndio", example: "Estou estudando.", tr: "Çalışıyorum (şu an)." }
      ],
      note: "Önemli fark: 'Ele é nervoso' (kişiliği gergin) vs 'Ele está nervoso' (şu an gergin). SER=doğa, ESTAR=durum."
    }
  ],
  speaking: [
    { q: "Qual é o artigo de 'livro'?", a: "O artigo é 'o' — o livro." },
    { q: "Como se diz 'Ben doktorum' com SER?", a: "Eu sou médico. (Meslek için artikel yok!)" },
    { q: "Como se diz 'Şu an yorgunum' com ESTAR?", a: "Eu estou cansado agora." },
    { q: "SER ou ESTAR: 'Ela é bonita'?", a: "SER — kalıcı özellik (güzel kişiliği)." },
    { q: "SER ou ESTAR: 'A sopa está quente'?", a: "ESTAR — geçici durum (şu an sıcak)." }
  ],
  dialogues: [
    {
      title: "Bir Tanışmada",
      lines: [
        { speaker: "Ana", text: "Olá! Você é daqui?", tr: "Merhaba! Siz buradan mısınız?" },
        { speaker: "Pedro", text: "Não, eu sou de São Paulo. E você?", tr: "Hayır, ben São Paulo'danum. Ya siz?" },
        { speaker: "Ana", text: "Sou de Lisboa, mas estou aqui a trabalho.", tr: "Lizbon'danum ama iş için buradayım." },
        { speaker: "Pedro", text: "Ah, que interessante! Você é jornalista?", tr: "Ah, ne ilginç! Gazeteci misiniz?" },
        { speaker: "Ana", text: "Não, sou professora. E você, o que é?", tr: "Hayır, öğretmenim. Siz ne iş yaparsınız?" },
        { speaker: "Pedro", text: "Sou engenheiro. Estou muito cansado hoje!", tr: "Mühendisim. Bugün çok yorgunum!" }
      ]
    }
  ],
  listening: {
    text: "Eu me chamo Carlos. Sou brasileiro e sou de Recife. Sou médico e trabalho num hospital grande. Agora estou em São Paulo porque estou num congresso médico. Estou muito contente por estar aqui!",
    questions: [
      { q: "Carlos nereli?", a: "Recife'li / Brezilyalı" },
      { q: "Carlos'un mesleği ne?", a: "Doktor" },
      { q: "Şu an nerede?", a: "São Paulo'da" }
    ]
  }
};
LESSONS[2] = L2;
