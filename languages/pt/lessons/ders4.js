const L4 = {
  title: "Cores e Adjetivos",
  words: [
    { en: "vermelho / vermelha", tr: "kırmızı (e/d)", pron: "vermelyu / vermelya", bd: "cinsiyet uyumu var" },
    { en: "azul", tr: "mavi", pron: "azul", bd: "tek form — her iki cins" },
    { en: "verde", tr: "yeşil", pron: "vérdi", bd: "tek form — her iki cins" },
    { en: "amarelo / amarela", tr: "sarı", pron: "amarélu / amaréla", bd: "cinsiyet uyumu" },
    { en: "branco / branca", tr: "beyaz", pron: "brãnku / brãnka", bd: "cinsiyet uyumu" },
    { en: "preto / preta", tr: "siyah", pron: "prétu / préta", bd: "cinsiyet uyumu" },
    { en: "laranja", tr: "turuncu", pron: "larãnja", bd: "değişmez — tek form" },
    { en: "roxo / roxa", tr: "mor", pron: "hoshu / hosha", bd: "cinsiyet uyumu" },
    { en: "cinza", tr: "gri", pron: "sĩnza", bd: "değişmez form" },
    { en: "rosa", tr: "pembe / gül rengi", pron: "hoza", bd: "değişmez form" },
    { en: "grande", tr: "büyük", pron: "grãndshi", bd: "tek form" },
    { en: "pequeno / pequena", tr: "küçük", pron: "pekénu / pekéna", bd: "cinsiyet uyumu" },
    { en: "bonito / bonita", tr: "güzel (şey)", pron: "bonitu / bonita", bd: "cinsiyet uyumu" },
    { en: "feio / feia", tr: "çirkin", pron: "féyu / féya", bd: "cinsiyet uyumu" },
    { en: "novo / nova", tr: "yeni / genç", pron: "novu / nova", bd: "bağlama göre anlam değişir" },
    { en: "velho / velha", tr: "eski / yaşlı", pron: "vélyu / vélya", bd: "bağlama göre anlam" },
    { en: "barato / barata", tr: "ucuz", pron: "baratu / barata", bd: "cinsiyet uyumu" },
    { en: "caro / cara", tr: "pahalı", pron: "karu / kara", bd: "cinsiyet uyumu" },
    { en: "muito", tr: "çok", pron: "muyntu", bd: "değişmez zarf olarak; sıfat olarak uyum" },
    { en: "pouco / pouca", tr: "az / biraz", pron: "poku / poka", bd: "sıfat olarak uyum gerekir" }
  ],
  grammar: [
    {
      title: "Sıfatların Cinsiyeti ve Çoğulu",
      explanation: "Portekizcede sıfatlar isimlerin cinsiyetine ve sayısına göre değişir. -o ile biten sıfatlar dişil için -a alır. -e ile bitenler veya ünsüzle bitenler (azul, feliz) çoğu kez değişmez. Çoğul için genellikle -s eklenir.",
      table: [
        { pronoun: "Eril Tekil", form: "-o sonu", example: "o carro vermelho", tr: "kırmızı araba" },
        { pronoun: "Dişil Tekil", form: "-a sonu", example: "a flor vermelha", tr: "kırmızı çiçek" },
        { pronoun: "Eril Çoğul", form: "-os", example: "os carros vermelhos", tr: "kırmızı arabalar" },
        { pronoun: "Dişil Çoğul", form: "-as", example: "as flores vermelhas", tr: "kırmızı çiçekler" },
        { pronoun: "Değişmez", form: "tek form", example: "o/a carro/moto azul", tr: "mavi araba/motosiklet" },
        { pronoun: "Çoğul değişmez", form: "-s ekle", example: "os/as carros/motos azuis", tr: "mavi arabalar/motosikletler (azul→azuis)" }
      ],
      note: "Azul → Azuis (çoğulda): -l ile biten sıfatlar çoğulda -is veya -eis olur. Laranja, rosa, cinza tamamen değişmez!"
    },
    {
      title: "Sıfatın İsimden Sonra Gelmesi",
      explanation: "Portekizcede sıfatlar genellikle isimden SONRA gelir (İspanyolcaya benzer şekilde). Bu İngilizce ve Türkçeden farklıdır. Ancak bazı sıfatlar isimden önce de gelebilir ve bu durumda anlam değişebilir.",
      table: [
        { pronoun: "Normal sıra", form: "isim + sıfat", example: "um carro grande", tr: "büyük bir araba" },
        { pronoun: "Normal sıra", form: "isim + sıfat", example: "uma casa bonita", tr: "güzel bir ev" },
        { pronoun: "Önceden gelince", form: "sıfat + isim", example: "um grande homem", tr: "büyük (önemli) bir adam" },
        { pronoun: "Sonradan gelince", form: "isim + sıfat", example: "um homem grande", tr: "iri yarı bir adam (fizik)" },
        { pronoun: "Novo önce", form: "novo + isim", example: "meu novo carro", tr: "yeni arabam (sahip olduğum)" },
        { pronoun: "Novo sonra", form: "isim + novo", example: "um carro novo", tr: "sıfır araba (marka yeni)" }
      ],
      note: "En sık kullanılan sıfatlar isimden SONRA: colors, size, shape, nationality."
    },
    {
      title: "Karşılaştırma: mais... do que (daha... -dan)",
      explanation: "Portekizcede karşılaştırma yapmak için 'mais' (daha) ve 'do que' (den/dan) kullanılır. Üstünlük için 'o mais / a mais' (en) yapısı kullanılır. Bazı düzensiz karşılaştırmalar da vardır.",
      table: [
        { pronoun: "Daha... -dan", form: "mais + sıfat + do que", example: "mais grande do que", tr: "daha büyük -dan" },
        { pronoun: "Daha az... -dan", form: "menos + sıfat + do que", example: "menos caro do que", tr: "daha az pahalı -dan" },
        { pronoun: "En...", form: "o/a mais + sıfat", example: "o mais bonito", tr: "en güzel (eril)" },
        { pronoun: "Eşit", form: "tão + sıfat + como", example: "tão grande como", tr: "o kadar büyük gibi" },
        { pronoun: "bom → melhor", form: "düzensiz", example: "melhor do que", tr: "daha iyi -dan" },
        { pronoun: "ruim → pior", form: "düzensiz", example: "pior do que", tr: "daha kötü -dan" }
      ],
      note: "Üstünlük: 'o melhor do mundo' = dünyanın en iyisi. 'o maior do Brasil' = Brezilya'nın en büyüğü."
    }
  ],
  speaking: [
    { q: "Como se diz 'kırmızı araba'?", a: "Um carro vermelho. (eril: vermelho)" },
    { q: "Como se diz 'güzel ev' (dişil)?", a: "Uma casa bonita. (dişil: bonita)" },
    { q: "Como comparamos? 'Bu daha büyük o'dan.'", a: "Este é maior do que aquele." },
    { q: "'En güzel şehir' nasıl?", a: "A cidade mais bonita." },
    { q: "Azul'un çoğulu nedir?", a: "Azuis. (-l → -is)" }
  ],
  dialogues: [
    {
      title: "Kıyafet Alışverişi",
      lines: [
        { speaker: "Cliente", text: "Boa tarde! Estou procurando uma blusa.", tr: "İyi günler! Bir bluz arıyorum." },
        { speaker: "Vendedora", text: "Que cor prefere? Temos azul, verde e vermelha.", tr: "Hangi rengi tercih edersiniz? Mavi, yeşil ve kırmızı var." },
        { speaker: "Cliente", text: "Gosto de azul. Tem alguma grande?", tr: "Maviyi seviyorum. Büyük var mı?" },
        { speaker: "Vendedora", text: "Sim! Esta azul é grande e muito bonita.", tr: "Evet! Bu mavi hem büyük hem çok güzel." },
        { speaker: "Cliente", text: "É cara? Quero algo mais barato.", tr: "Pahalı mı? Daha ucuz bir şey istiyorum." },
        { speaker: "Vendedora", text: "Esta aqui é mais barata e igualmente bonita!", tr: "Şuradaki daha ucuz ve aynı derecede güzel!" }
      ]
    }
  ],
  listening: {
    text: "Minha casa nova é muito bonita. Tem paredes brancas e janelas grandes. O sofá é cinza e as almofadas são azuis e amarelas. Tenho uma mesa pequena de madeira marrom na sala. O jardim tem flores vermelhas, rosas e roxas.",
    questions: [
      { q: "Duvarların rengi?", a: "Beyaz" },
      { q: "Koltuk ve yastıkların renkleri?", a: "Koltuk gri, yastıklar mavi ve sarı" },
      { q: "Bahçede hangi renkler var?", a: "Kırmızı, pembe, mor" }
    ]
  }
};
LESSONS[4] = L4;
