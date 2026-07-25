const L28 = {
  title: "Descrevendo Pessoas",
  words: [
    { en: "alto / alta", tr: "uzun boylu", pron: "awtu / awta", bd: "cinsiyet uyumu" },
    { en: "baixo / baixa", tr: "kısa boylu", pron: "bayshu / baysha", bd: "cinsiyet uyumu" },
    { en: "magro / magra", tr: "ince yapılı", pron: "magru / magra", bd: "cinsiyet uyumu" },
    { en: "gordo / gorda", tr: "kilolu", pron: "gordu / gorda", bd: "cinsiyet uyumu; gordinho = tombul (sevecen)" },
    { en: "jovem", tr: "genç", pron: "jovẽy", bd: "tek form; oposto: idoso/idosa" },
    { en: "idoso / idosa", tr: "yaşlı", pron: "idozu / idoza", bd: "daha saygılı; velho = eski/yaşlı" },
    { en: "bonito / bonita", tr: "güzel / yakışıklı", pron: "bonitu / bonita", bd: "cinsiyet uyumu" },
    { en: "feio / feia", tr: "çirkin", pron: "féyu / féya", bd: "cinsiyet uyumu" },
    { en: "simpático / simpática", tr: "sempatik / cana yakın", pron: "sĩmpátiku / sĩmpátika", bd: "cinsiyet uyumu" },
    { en: "antipático / antipática", tr: "antipatik / soğuk", pron: "ãntipátiku", bd: "cinsiyet uyumu" },
    { en: "inteligente", tr: "zeki / akıllı", pron: "ĩtelijẽntshi", bd: "tek form" },
    { en: "engraçado / engraçada", tr: "komik / eğlenceli", pron: "ẽngraçadu / ẽngraçada", bd: "cinsiyet uyumu" },
    { en: "tímido / tímida", tr: "utangaç / çekingen", pron: "tímidu / tímida", bd: "cinsiyet uyumu" },
    { en: "extrovertido / extrovertida", tr: "dışa dönük", pron: "ıshtroverchidu", bd: "cinsiyet uyumu" },
    { en: "confiável", tr: "güvenilir", pron: "kõfjável", bd: "tek form; çoğul: confiáveis" },
    { en: "teimoso / teimosa", tr: "inatçı", pron: "teymózu / teymóza", bd: "cinsiyet uyumu" },
    { en: "generoso / generosa", tr: "cömert", pron: "jenerózu / jeneróza", bd: "cinsiyet uyumu" },
    { en: "Ele tem os olhos castanhos.", tr: "Kahverengi gözleri var.", pron: "eli tẽy us olyyush kashtãnyush", bd: "fiziksel tanım" },
    { en: "Ela é loira e tem cabelo liso.", tr: "Sarışın ve düz saçlı.", pron: "ela é loyra", bd: "loira = sarışın kadın" },
    { en: "Na minha opinião...", tr: "Benim görüşüme göre...", pron: "na mĩnya opĩnião", bd: "fikir belirtme" }
  ],
  grammar: [
    {
      title: "Fiziksel Tanımlama — SER ve TER",
      explanation: "Birinin fiziksel özelliklerini tanımlamak için SER (genel, kalıcı özellikler) ve TER (sahiplik) kullanılır. 'Ela é loira' (Sarışındır) SER ile. 'Ela tem olhos azuis' (Mavi gözleri var) TER ile. Her ikisi de doğrudur.",
      table: [
        { pronoun: "Boy", form: "ser + sıfat", example: "Ele é muito alto.", tr: "Çok uzun boylu." },
        { pronoun: "Vücut yapısı", form: "ser magro/gordo", example: "Ela é bem magrinha.", tr: "Oldukça ince yapılı." },
        { pronoun: "Saç rengi", form: "ser loiro/moreno/ruivo", example: "Sou moreno de olhos escuros.", tr: "Esmer, koyu gözlüyüm." },
        { pronoun: "Saç tipi", form: "ter cabelo + tip", example: "Tem cabelo cacheado e comprido.", tr: "Uzun, kıvırcık saçları var." },
        { pronoun: "Göz rengi", form: "ter olhos + renk", example: "Tem olhos verdes lindíssimos.", tr: "Çok güzel yeşil gözleri var." },
        { pronoun: "Yaş", form: "parecer + yaş", example: "Parece ter uns trinta anos.", tr: "Otuz yaşlarında görünüyor." }
      ],
      note: "Saç rengi: loiro/loira (sarı), castanho (kahve), preto (siyah), ruivo/ruiva (kızıl), grisalho (gri/ak)."
    },
    {
      title: "Kişilik Tanımları — Karakter Sıfatları",
      explanation: "Birinin karakterini tanımlarken SER (kalıcı kişilik) veya ESTAR (geçici ruh hali) kullanılır. 'Ele é sério' = Ciddi biri (karakter). 'Ele está sério hoje' = Bugün ciddi (geçici).",
      table: [
        { pronoun: "Pozitif özellikler", form: "ser + sıfat", example: "É uma pessoa muito generosa.", tr: "Çok cömert biri." },
        { pronoun: "Negatif özellikler", form: "ser + sıfat", example: "Infelizmente é muito teimoso.", tr: "Maalesef çok inatçı." },
        { pronoun: "Geçici durum", form: "estar + sıfat", example: "Ele está estressado hoje.", tr: "Bugün stresli." },
        { pronoun: "Görünüş", form: "parecer + sıfat", example: "Parece ser uma boa pessoa.", tr: "İyi biri gibi görünüyor." },
        { pronoun: "Benzerlik", form: "parecido com / igual a", example: "É parecido com o pai.", tr: "Babasına benziyor." },
        { pronoun: "Karakter zıtlığı", form: "por fora... por dentro", example: "É tímido por fora mas animado por dentro.", tr: "Dışarıdan çekingen ama içeriden coşkulu." }
      ],
      note: "Birini nazikçe tanımlamak: 'É uma pessoa muito especial.' = Çok özel biri. Sert tanımlardan kaçının!"
    },
    {
      title: "Karşılaştırma ve Zıtlık — Mais... do que / Tão... como",
      explanation: "İki kişiyi karşılaştırırken 'mais... do que' (daha... -dan) veya 'tão... como' (o kadar... gibi) kullanılır. 'Mais alto do que' = daha uzun. 'Tão simpático quanto/como' = o kadar sempatik.",
      table: [
        { pronoun: "Daha... -dan", form: "mais + sıfat + do que", example: "Ela é mais alta do que eu.", tr: "O benden daha uzun." },
        { pronoun: "O kadar... gibi", form: "tão + sıfat + como", example: "É tão inteligente como você.", tr: "Senin kadar zeki." },
        { pronoun: "Daha az", form: "menos + sıfat + do que", example: "Sou menos extrovertido.", tr: "Daha az dışa dönüğüm." },
        { pronoun: "En... (üstünlük)", form: "o/a mais + sıfat", example: "É o mais engraçado da turma.", tr: "Sınıfın en komik." },
        { pronoun: "bom→melhor", form: "melhor do que", example: "Ela canta melhor do que eu.", tr: "O benden daha iyi şarkı söylüyor." },
        { pronoun: "ruim→pior", form: "pior do que", example: "Minha caligrafia é pior.", tr: "El yazım daha kötü." }
      ],
      note: "BP'de 'tão... quanto' da kullanılır: 'Tão bonita quanto você.' = Senin kadar güzel. Quanto ve Como eşdeğer burada."
    }
  ],
  speaking: [
    { q: "Kendinizi fiziksel olarak tanımlayın.", a: "Sou [boy], tenho cabelo [renk/tip] e olhos [renk]." },
    { q: "En iyi arkadaşınızın karakterini anlatın.", a: "É muito [sıfat] e [sıfat]. É uma pessoa [sıfat]." },
    { q: "'O benden daha uzun' nasıl?", a: "Ele/ela é mais alto/a do que eu." },
    { q: "'Bu sınıfın en zekisi' nasıl?", a: "É o/a mais inteligente da turma." },
    { q: "'Saçları sarı ve gözleri mavi' nasıl?", a: "Tem cabelo loiro e olhos azuis." }
  ],
  dialogues: [
    {
      title: "Birini Tanıtma",
      lines: [
        { speaker: "Pedro", text: "Oi Carla! Deixa eu te apresentar meu amigo Lucas.", tr: "Merhaba Carla! Arkadaşım Lucas'ı sana tanıtayım." },
        { speaker: "Carla", text: "Olá Lucas! É um prazer!", tr: "Merhaba Lucas! Tanışmak bir zevk!" },
        { speaker: "Lucas", text: "Igualmente! Pedro me falou muito bem de você.", tr: "Benim de! Pedro sizden çok iyi bahsetti." },
        { speaker: "Carla", text: "Que simpático você é! Você dois são muito parecidos!", tr: "Ne sempatiksiniz! İkiniz çok benziyorsunuz!" },
        { speaker: "Pedro", text: "Ah é? Todo mundo fala isso! Somos amigos há dez anos.", tr: "Öyle mi? Herkes bunu söylüyor! On yıldır arkadaşız." },
        { speaker: "Lucas", text: "É verdade! Mas eu sou mais alto e mais bonito!", tr: "Doğru! Ama ben daha uzun ve daha yakışıklıyım!" }
      ]
    }
  ],
  listening: {
    text: "Os brasileiros são conhecidos por serem muito expressivos e calorosos na comunicação. Não é raro que dois amigos se encontrem e demorem uma hora conversando sobre a vida. A hospitalidade é uma característica marcante — um brasileiro raramente deixará um visitante sem oferecer café, comida ou ajuda. A diversidade étnica do Brasil também se reflete nas pessoas: há brasileiros com traços europeus, africanos, indígenas e asiáticos — uma mistura única no mundo.",
    questions: [
      { q: "Brezilyalıların iletişim tarzı nasıl?", a: "Çok ifadeli ve sıcakkanlı" },
      { q: "Brezilyalı misafirperverliğinin özelliği ne?", a: "Kahve, yemek veya yardım sunmadan geçiştirmek nadirdir" },
      { q: "Brezilya halkının etnik çeşitliliğini açıklayın.", a: "Avrupalı, Afrikalı, Yerli ve Asyalı kökenli karışımı" }
    ]
  }
};
LESSONS[28] = L28;
