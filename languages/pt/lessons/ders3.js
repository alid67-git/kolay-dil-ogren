const L3 = {
  title: "Números 1-50 e Contagem",
  words: [
    { en: "um / uma", tr: "bir (eril/dişil)", pron: "ũ / uma", bd: "1 — cinsiyet uyumu var" },
    { en: "dois / duas", tr: "iki (eril/dişil)", pron: "doysh / duas", bd: "2 — cinsiyet uyumu var" },
    { en: "três", tr: "üç", pron: "tresh", bd: "3" },
    { en: "quatro", tr: "dört", pron: "kuatru", bd: "4" },
    { en: "cinco", tr: "beş", pron: "sĩnku", bd: "5" },
    { en: "seis", tr: "altı", pron: "seysh", bd: "6" },
    { en: "sete", tr: "yedi", pron: "sétshi", bd: "7" },
    { en: "oito", tr: "sekiz", pron: "oytu", bd: "8" },
    { en: "nove", tr: "dokuz", pron: "nóvi", bd: "9" },
    { en: "dez", tr: "on", pron: "desh", bd: "10" },
    { en: "vinte", tr: "yirmi", pron: "vĩntshi", bd: "20" },
    { en: "trinta", tr: "otuz", pron: "trĩnta", bd: "30" },
    { en: "quarenta", tr: "kırk", bd: "40", pron: "kuarẽnta" },
    { en: "cinquenta", tr: "elli", pron: "sĩkuẽnta", bd: "50" },
    { en: "cem", tr: "yüz", pron: "sẽy", bd: "100 — tam yüz için cem" },
    { en: "primeiro / primeira", tr: "birinci (eril/dişil)", pron: "primeyru / primeyra", bd: "sıra sayısı" },
    { en: "segundo / segunda", tr: "ikinci", pron: "segũndu / segũnda", bd: "sıra sayısı" },
    { en: "Quantos anos você tem?", tr: "Kaç yaşındasınız?", pron: "kuãntus ãnus vosê tẽy", bd: "ter = sahip olmak (yaş için)" },
    { en: "Tenho vinte e cinco anos.", tr: "Yirmi beş yaşındayım.", pron: "tẽnyu vĩntshi i sĩnku ãnus", bd: "tenho=ter/ben" },
    { en: "Quanto custa?", tr: "Kaça tutar? / Fiyatı nedir?", pron: "kuãntu kushta", bd: "alışveriş ifadesi" }
  ],
  grammar: [
    {
      title: "1'den 20'ye Temel Sayılar",
      explanation: "Portekizcede sayılar genel olarak düzenlidir ancak 1, 2 ve 21 gibi bileşik sayılarda cinsiyet uyumu gereklidir. 11-15 arası sayılar özel isimler alır (onze, doze, treze, catorze, quinze). 16-19 arası: 'dez e seis' yerine 'dezasseis' gibi birleşik formlar kullanılır (BP: dezesseis).",
      table: [
        { pronoun: "1–5", form: "um, dois, três, quatro, cinco", example: "um livro, duas casas", tr: "bir kitap, iki ev (uyum!)" },
        { pronoun: "6–10", form: "seis, sete, oito, nove, dez", example: "seis alunos, dez reais", tr: "altı öğrenci, on real" },
        { pronoun: "11–15", form: "onze, doze, treze, catorze, quinze", example: "onze pessoas", tr: "on bir kişi" },
        { pronoun: "16–20", form: "dezesseis, dezessete, dezoito, dezenove, vinte", example: "dezoito anos", tr: "on sekiz yaş" },
        { pronoun: "Cinsiyet uyumu", form: "um/uma, dois/duas, vinte e um/uma", example: "vinte e uma pessoas", tr: "yirmi bir kişi (dişil)" },
        { pronoun: "Sıra sayısı", form: "primeiro, segundo, terceiro...", example: "o primeiro dia", tr: "birinci gün" }
      ],
      note: "Brezilya Portekizcesinde 16=dezesseis, Avrupa Portekizcesinde 16=dezasseis. Bu derste BP kullanıyoruz."
    },
    {
      title: "20'den 100'e Onluklar ve Bileşik Sayılar",
      explanation: "Onluklar (20, 30, 40...) düzenli bir yapıya sahiptir. Bileşik sayılar 'e' (ve) bağlacıyla oluşturulur: vinte e três (23). 100 için 'cem' kullanılır; ancak 101, 102... için 'cento' kullanılır: cento e um.",
      table: [
        { pronoun: "20", form: "vinte", example: "vinte reais", tr: "yirmi real" },
        { pronoun: "30", form: "trinta", example: "trinta dias", tr: "otuz gün" },
        { pronoun: "40", form: "quarenta", example: "quarenta anos", tr: "kırk yaş" },
        { pronoun: "50", form: "cinquenta", example: "cinquenta pessoas", tr: "elli kişi" },
        { pronoun: "Bileşik", form: "vinte e [sayı]", example: "vinte e três = 23", tr: "yirmi üç" },
        { pronoun: "100 / 101+", form: "cem / cento e...", example: "cem reais / cento e um", tr: "yüz real / yüz bir" }
      ],
      note: "Para birimi: R$ = Real (Brezilya). 'Quanto custa?' = Kaç para? Fiyat sorarken kullanılır."
    },
    {
      title: "TER Fiili ile Yaş Söyleme (Kaç Yaşında?)",
      explanation: "Portekizcede yaş 'ter' (sahip olmak) fiiliyle ifade edilir: 'Tenho 25 anos' = '25 yaşlarım' (25 yaşım var). Türkçe gibi yaş 'var' ile söylenir. TER aynı zamanda sahipliği de ifade eder.",
      table: [
        { pronoun: "Eu", form: "tenho", example: "Tenho trinta anos.", tr: "Otuz yaşındayım." },
        { pronoun: "Você / Ele / Ela", form: "tem", example: "Ela tem vinte e dois anos.", tr: "O yirmi iki yaşında." },
        { pronoun: "Nós", form: "temos", example: "Temos dois filhos.", tr: "İki çocuğumuz var." },
        { pronoun: "Vocês / Eles / Elas", form: "têm", example: "Eles têm um carro.", tr: "Onların bir arabası var." },
        { pronoun: "Soru", form: "Quantos anos...?", example: "Quantos anos você tem?", tr: "Kaç yaşındasınız?" },
        { pronoun: "Sahiplik", form: "ter + isim", example: "Tenho um irmão.", tr: "Bir erkek kardeşim var." }
      ],
      note: "têm (vocês/eles) aksan işareti alır, tem (ele/você) almaz. Telaffuz farkı: têm=[tẽy], tem=[tẽy] — aynı sesletilir!"
    }
  ],
  speaking: [
    { q: "Quantos anos você tem?", a: "Tenho [yaşınız] anos. (örn: Tenho trinta anos.)" },
    { q: "'23' nasıl söylenir Portekizcede?", a: "Vinte e três." },
    { q: "Quanto custa este livro? — R$ 45 yanıt ver.", a: "Custa quarenta e cinco reais." },
    { q: "'İki kitap' nasıl söylenir?", a: "Dois livros. (eril)" },
    { q: "'Yirmi bir kadın' nasıl söylenir?", a: "Vinte e uma mulheres. (dişil uyumu!)" }
  ],
  dialogues: [
    {
      title: "Yaş ve Fiyat",
      lines: [
        { speaker: "Loja", text: "Boa tarde! Posso ajudar?", tr: "İyi günler! Yardımcı olabilir miyim?" },
        { speaker: "Cliente", text: "Quanto custa esta camiseta?", tr: "Bu tişört ne kadar?" },
        { speaker: "Loja", text: "Custa cinquenta e cinco reais.", tr: "Elli beş real." },
        { speaker: "Cliente", text: "E aquela ali?", tr: "Peki şuradaki?" },
        { speaker: "Loja", text: "Aquela custa quarenta reais.", tr: "O kırk real." },
        { speaker: "Cliente", text: "Vou levar as duas! Tenho um desconto?", tr: "İkisini de alıyorum! İndirimim var mı?" }
      ]
    }
  ],
  listening: {
    text: "Minha família é grande! Tenho três irmãos e duas irmãs. Meu pai tem cinquenta e dois anos e minha mãe tem quarenta e oito. Temos um apartamento com quatro quartos. Moro aqui há vinte anos.",
    questions: [
      { q: "Kaç kardeşi var?", a: "Beş: üç erkek, iki kız" },
      { q: "Babasının yaşı?", a: "Elli iki" },
      { q: "Dairede kaç oda var?", a: "Dört" }
    ]
  }
};
LESSONS[3] = L3;
