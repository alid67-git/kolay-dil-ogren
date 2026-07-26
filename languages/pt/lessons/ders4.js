const L4 = {
  title: "Cores e Adjetivos",
  words: [
    { en: "vermelho / vermelha", tr: "kırmızı", pron: "vırmelyu / vırmelya", bd: "cinsiyet uyumu; vinho = koyu kırmızı" },
    { en: "azul", tr: "mavi", pron: "azúl", bd: "tek form (e/k aynı); azuis çoğul" },
    { en: "verde", tr: "yeşil", pron: "vérd", bd: "tek form; EP: son 'e' düşer" },
    { en: "amarelo / amarela", tr: "sarı", pron: "amarélu / amaréla", bd: "cinsiyet uyumu" },
    { en: "preto / preta", tr: "siyah", pron: "prétu / préta", bd: "cinsiyet uyumu; negro da kullanılır" },
    { en: "branco / branca", tr: "beyaz", pron: "brãku / brãka", bd: "cinsiyet uyumu" },
    { en: "cinzento / cinzenta", tr: "gri", pron: "sĩzẽntu / sĩzẽnta", bd: "EP; BR'de cinza" },
    { en: "castanho / castanha", tr: "kahverengi / kestane rengi", pron: "kashtãnyu", bd: "EP; BR'de marrom; saç için de kullanılır" },
    { en: "cor-de-laranja", tr: "turuncu", pron: "kor dı larãja", bd: "değişmez; lit: portakal rengi" },
    { en: "rosa", tr: "pembe", pron: "roza", bd: "değişmez ya da rosa/rosado" },
    { en: "grande", tr: "büyük", pron: "grãd", bd: "tek form; EP: son 'e' düşer; grande/grandes" },
    { en: "pequeno / pequena", tr: "küçük", pron: "pıkénu / pıkéna", bd: "cinsiyet uyumu" },
    { en: "novo / nova", tr: "yeni", pron: "novu / nova", bd: "cinsiyet uyumu; novo = yeni ve genç" },
    { en: "velho / velha", tr: "eski / yaşlı", pron: "vélyu / vélya", bd: "cinsiyet uyumu; idoso daha nazik" },
    { en: "bom / boa", tr: "iyi", pron: "bõ / boa", bd: "düzensiz; bons/boas çoğul" },
    { en: "mau / má", tr: "kötü", pron: "mau / má", bd: "düzensiz; maus/más çoğul" },
    { en: "alto / alta", tr: "uzun boylu / yüksek", pron: "awtu / awta", bd: "cinsiyet uyumu" },
    { en: "baixo / baixa", tr: "kısa boylu / alçak", pron: "bayshu / baysha", bd: "cinsiyet uyumu" },
    { en: "Que cor é?", tr: "Ne renk?", pron: "kı kor é", bd: "renk sorma" },
    { en: "É da cor de...", tr: "Rengi...gibi", pron: "é da kor dı", bd: "renk tarif etme" }
  ],
  grammar: [
    {
      title: "Sıfat Uyumu — Género e Número",
      explanation: "Portekizce'de sıfatlar bağlı oldukları isimle cinsiyet ve sayı bakımından uyum sağlar. Çoğu sıfat: -o/-a (eril/dişil), -os/-as (çoğul). Bazı sıfatlar tek form: feliz, grande, verde, azul. Sıfat genellikle isimden SONRA gelir: 'uma casa grande', 'um livro azul'.",
      table: [
        { pronoun: "Eril tekil", form: "-o", example: "um carro vermelho", tr: "kırmızı bir araba" },
        { pronoun: "Dişil tekil", form: "-a", example: "uma casa vermelha", tr: "kırmızı bir ev" },
        { pronoun: "Eril çoğul", form: "-os", example: "carros vermelhos", tr: "kırmızı arabalar" },
        { pronoun: "Dişil çoğul", form: "-as", example: "casas vermelhas", tr: "kırmızı evler" },
        { pronoun: "Tek form", form: "-e (e/k)", example: "um/uma carro/casa grande", tr: "büyük araba/ev" },
        { pronoun: "-l sıfat", form: "-is çoğul", example: "azul → azuis", tr: "mavi → maviler" }
      ],
      note: "Sıfat sırası: isimden sonra (genel kural). Ama bazı sıfatlar önce gelebilir: 'um bom amigo' (iyi bir arkadaş), 'uma grande cidade' (büyük bir şehir). Önce gelmek genellikle duygusal/subjektif anlam katar."
    },
    {
      title: "Karşılaştırma — Mais, Menos, Tão",
      explanation: "Portekizce'de karşılaştırma: mais... do que (daha... -dan), menos... do que (daha az... -dan), tão... como (o kadar... gibi). Üstünlük: o/a mais + sıfat (en...). Düzensizler: bom → melhor (daha iyi), mau → pior (daha kötü), grande → maior (daha büyük).",
      table: [
        { pronoun: "Daha... -dan", form: "mais + adj + do que", example: "Lisboa é maior do que o Porto.", tr: "Lizbon Porto'dan daha büyük." },
        { pronoun: "Daha az", form: "menos + adj + do que", example: "É menos caro do que pensei.", tr: "Düşündüğümden daha az pahalı." },
        { pronoun: "O kadar... gibi", form: "tão + adj + como", example: "É tão bonito como na fotografia.", tr: "Fotoğraftaki kadar güzel." },
        { pronoun: "En...", form: "o/a mais + adj", example: "É o mais alto da turma.", tr: "Sınıfın en uzun boylus." },
        { pronoun: "bom → melhor", form: "Düzensiz", example: "Este vinho é melhor.", tr: "Bu şarap daha iyi." },
        { pronoun: "mau → pior", form: "Düzensiz", example: "O tempo está pior hoje.", tr: "Hava bugün daha kötü." }
      ],
      note: "grande → maior (büyük → daha büyük), pequeno → menor (küçük → daha küçük). Bunlar düzensiz karşılaştırma biçimleridir. 'Mais grande' da söylenir ama 'maior' daha doğru."
    },
    {
      title: "Renk ve Sıfat — EP'ye Özgü Kelimeler",
      explanation: "EP ve BR arasında renk/sıfat farkları: EP 'cinzento' (BR 'cinza'), EP 'castanho' (BR 'marrom'), EP 'cor-de-laranja' (BR 'laranja'). Bunun dışında EP'de 'giro' = güzel/şık (BR'de farklı anlam!), 'fixe' = harika/şık (yalnızca EP).",
      table: [
        { pronoun: "cinzento/a (EP)", form: "gri", example: "um casaco cinzento", tr: "gri bir ceket" },
        { pronoun: "castanho/a (EP)", form: "kahverengi", example: "olhos castanhos", tr: "kahverengi gözler" },
        { pronoun: "cor-de-laranja", form: "turuncu", example: "uma t-shirt cor-de-laranja", tr: "turuncu bir t-shirt" },
        { pronoun: "giro / gira (EP)", form: "güzel / şık", example: "Que giro! Fica-te bem.", tr: "Ne güzel! Sana çok yakışıyor." },
        { pronoun: "fixe (EP)", form: "harika / süper", example: "Que fixe! Adoro!", tr: "Harika! Bayıldım!" },
        { pronoun: "às riscas (EP)", form: "çizgili", example: "uma camisa às riscas", tr: "çizgili bir gömlek" }
      ],
      note: "'Giro/a' EP'de çok yaygın: 'Que giro!' (Ne şirin!). BR'de 'giro' farklı anlam taşır. 'Fixe' yalnızca EP'ye özgü: 'Que fixe!' = 'Que fixe!' (harika!). Bu iki kelime sizi Portekizli gibi gösterir!"
    }
  ],
  speaking: [
    { q: "Portekiz bayrağının renklerini söyleyin.", a: "A bandeira de Portugal é verde e vermelha, com um escudo dourado ao centro." },
    { q: "Favori renginizi söyleyin ve neden.", a: "A minha cor favorita é o azul porque me lembra o mar de Portugal." },
    { q: "'Bu çanta büyük ve kahverengi' nasıl?", a: "Esta mala é grande e castanha." },
    { q: "İki şehri karşılaştırın.", a: "Lisboa é maior do que o Porto, mas o Porto é mais industrial." },
    { q: "Bir şeyi 'harika' olarak nitelendirin (EP).", a: "Que fixe! / Que giro! Adoro esta cor!" }
  ],
  dialogues: [
    {
      title: "Kıyafet Alışverişi",
      lines: [
        { speaker: "Catarina", text: "O que achas desta camisola azul?", tr: "Bu mavi kazağı nasıl buluyorsun?" },
        { speaker: "Rui", text: "É bonita! Mas prefiro a verde. Fica-te melhor.", tr: "Güzel! Ama yeşili tercih ederim. Sana daha çok yakışıyor." },
        { speaker: "Catarina", text: "Achas? A verde é mais cara do que a azul.", tr: "Öyle mi? Yeşil maviden daha pahalı." },
        { speaker: "Rui", text: "Mas é mais gira! E a qualidade é melhor.", tr: "Ama daha şık! Ve kalite daha iyi." },
        { speaker: "Catarina", text: "Tens razão. E tenho este casaco cinzento que combina.", tr: "Haklısın. Ve uyan bu gri ceketim var." },
        { speaker: "Rui", text: "Perfeito! Que fixe, vai ficar ótimo!", tr: "Mükemmel! Harika, çok iyi olacak!" }
      ]
    }
  ],
  listening: [{
    text: "As cores têm um papel muito importante na cultura portuguesa. A bandeira nacional tem verde e vermelho, com o azul e branco do escudo. O azul e branco também dominam os azulejos — os famosos painéis de cerâmica que decoram igrejas, estações e fachadas de edifícios em todo o país. O preto é a cor do fado, a música da alma portuguesa. Os trajes tradicionais, como os de Viana do Castelo, são ricos em bordados coloridos. Em Portugal, o cinzento é uma cor muito comum nas cidades históricas — as calçadas portuguesas em preto e branco são um símbolo nacional.",
    questions: [
      { q: "Portekiz bayrağının renkleri neler?", a: "Yeşil ve kırmızı, altın renkli armadisizin üstünde" },
      { q: "Azulejos nedir?", a: "Kilise, istasyon ve bina cephelerini süsleyen ünlü seramik paneller (mavi-beyaz)" },
      { q: "Fado'nun rengi ne ve neden?", a: "Siyah — Portekiz ruhunun müziği fado'nun rengi" }
    ]
  }]
};
LESSONS[4] = L4;
