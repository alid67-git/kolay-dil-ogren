const L3 = {
  title: "Números e Contagem",
  words: [
    { en: "zero", tr: "sıfır", pron: "zéru", bd: "eril; zero graus = sıfır derece" },
    { en: "um / uma", tr: "bir", pron: "ũ / uma", bd: "cinsiyet uyumu; um livro / uma cadeira" },
    { en: "dois / duas", tr: "iki", pron: "doysh / duas", bd: "cinsiyet uyumu; dois homens / duas mulheres" },
    { en: "três", tr: "üç", pron: "trésh", bd: "değişmez" },
    { en: "quatro", tr: "dört", pron: "kwatru", bd: "değişmez" },
    { en: "cinco", tr: "beş", pron: "sĩku", bd: "değişmez" },
    { en: "seis", tr: "altı", pron: "seysh", bd: "değişmez" },
    { en: "sete", tr: "yedi", pron: "sét", bd: "EP: son 'e' çok kısalır veya düşer" },
    { en: "oito", tr: "sekiz", pron: "oytu", bd: "değişmez" },
    { en: "nove", tr: "dokuz", pron: "nov", bd: "EP: son 'e' düşer" },
    { en: "dez", tr: "on", pron: "désh", bd: "değişmez" },
    { en: "vinte", tr: "yirmi", pron: "vĩt", bd: "EP: son 'e' düşer" },
    { en: "trinta", tr: "otuz", pron: "trĩta", bd: "değişmez" },
    { en: "cem", tr: "yüz", pron: "sẽy", bd: "tam 100; cento e um = 101 (birleşimde cento)" },
    { en: "mil", tr: "bin", pron: "mil", bd: "değişmez; dois mil = iki bin" },
    { en: "primeiro / primeira", tr: "birinci", pron: "primeyru / primeyra", bd: "cinsiyet uyumu; sıra sayısı" },
    { en: "segundo / segunda", tr: "ikinci", pron: "sıgũdu / sıgũda", bd: "cinsiyet uyumu" },
    { en: "Que horas são?", tr: "Saat kaç?", pron: "kı ôrash são", bd: "saat sorma; EP'de çok kullanılır" },
    { en: "Tenho X anos.", tr: "X yaşındayım.", pron: "tẽnyu X anuş", bd: "TER fiili yaş için" },
    { en: "Quanto custa?", tr: "Ne kadar? / Fiyatı ne?", pron: "kwãtu kushta", bd: "alışverişte temel soru" }
  ],
  grammar: [
    {
      title: "Sayılar 1–20 ve Kombinasyonlar",
      explanation: "Portekizce sayılar: 1 (um/uma), 2 (dois/duas), 3 (três), 4 (quatro), 5 (cinco), 6 (seis), 7 (sete), 8 (oito), 9 (nove), 10 (dez), 11 (onze), 12 (doze), 13 (treze), 14 (catorze), 15 (quinze), 16 (dezasseis — EP), 17 (dezassete), 18 (dezoito), 19 (dezanove), 20 (vinte). NOT: EP'de 16=dezasseis (BR'de dezesseis).",
      table: [
        { pronoun: "11-15", form: "onze a quinze", example: "onze, doze, treze, catorze, quinze", tr: "11, 12, 13, 14, 15" },
        { pronoun: "16-19 (EP)", form: "dezasseis...", example: "dezasseis, dezassete, dezoito, dezanove", tr: "16, 17, 18, 19 (EP formu)" },
        { pronoun: "Onluklar", form: "vinte, trinta...", example: "vinte, trinta, quarenta, cinquenta", tr: "20, 30, 40, 50" },
        { pronoun: "60-90", form: "sessenta...", example: "sessenta, setenta, oitenta, noventa", tr: "60, 70, 80, 90" },
        { pronoun: "Bileşik", form: "e ile", example: "vinte e um, trinta e dois", tr: "21, 32 — 'e' bağlacı ile" },
        { pronoun: "100+", form: "cem / cento", example: "cem; cento e cinco", tr: "100; 105 — birleşimde cento" }
      ],
      note: "EP'de 16=dezasseis (not dezesseis), 17=dezassete (not dezessete). Bu BR ile fark. YÜZ: tam 100 = cem; 100'den büyük = cento (cento e um = 101)."
    },
    {
      title: "TER — Yaş ve Sahiplik",
      explanation: "Portekizce'de yaş TER (sahip olmak) fiili ile söylenir: 'Tenho vinte anos' (Yirmi yaşındayım — lit: yirmi yılım var). TER geniş zaman: tenho, tens, tem, temos, tendes, têm. Sahiplik: Tenho um carro (arabam var). Aile: Tenho um irmão (erkek kardeşim var).",
      table: [
        { pronoun: "eu", form: "tenho", example: "Tenho vinte e cinco anos.", tr: "Yirmi beş yaşındayım." },
        { pronoun: "tu", form: "tens", example: "Quantos anos tens?", tr: "Kaç yaşındasın?" },
        { pronoun: "você/ele/ela", form: "tem", example: "Ela tem trinta anos.", tr: "Otuz yaşında." },
        { pronoun: "nós", form: "temos", example: "Temos um cão.", tr: "Bir köpeğimiz var." },
        { pronoun: "vocês", form: "têm", example: "Vocês têm filhos?", tr: "Çocuğunuz var mı?" },
        { pronoun: "eles/elas", form: "têm", example: "Eles têm dois carros.", tr: "İki arabaları var." }
      ],
      note: "TER EP çok önemli: tenho, tens, tem — dikkat: vocês têm (şapkalı!) vs. você tem. 'Tens razão!' = Haklısın! — EP'de çok yaygın."
    },
    {
      title: "Fiyat ve Para — Euro Sistemi",
      explanation: "Portekiz Euro kullanır. Fiyat sormak: Quanto custa? (Ne kadar?), Quanto é? (Kaça?). Yanıt: Custa dois euros (İki Euro'ya mal olur). Custa caro (Pahalı). Custa barato (Ucuz). Para birimi: euro (€), cêntimo (kuruş).",
      table: [
        { pronoun: "Soru", form: "Quanto custa?", example: "Quanto custa este livro?", tr: "Bu kitap ne kadar?" },
        { pronoun: "Yanıt", form: "Custa X euros.", example: "Custa cinco euros.", tr: "Beş Euro'ya mal olur." },
        { pronoun: "Pahalı", form: "É caro.", example: "Está caro! Tem mais barato?", tr: "Pahalı! Daha ucuzu var mı?" },
        { pronoun: "Ucuz", form: "É barato.", example: "Que barato! Levo dois.", tr: "Ne ucuz! İki tane alıyorum." },
        { pronoun: "Toplam", form: "Ao todo / No total", example: "Ao todo são dez euros.", tr: "Toplam on Euro." },
        { pronoun: "Ödeme", form: "Pago com cartão.", example: "Posso pagar com Multibanco?", tr: "Multibanco ile ödeyebilir miyim?" }
      ],
      note: "Multibanco = Portekiz'e özgü ATM/ödeme sistemi. MB Way = mobil ödeme uygulaması. Portekiz'de çok yaygın. 'Levantei dinheiro no Multibanco' = ATM'den para çektim."
    }
  ],
  speaking: [
    { q: "Telefon numaranızı söyleyin.", a: "O meu número é: dois, dois, um, cinco, três, sete, oito, nove." },
    { q: "Yaşınızı sorun ve söyleyin.", a: "Quantos anos tens? — Tenho [yaş] anos." },
    { q: "'Bu kitap kaç euro?' sorup yanıtlayın.", a: "Quanto custa este livro? — Custa oito euros e cinquenta." },
    { q: "Sıra sayısı kullanın.", a: "Moro no segundo andar, porta número três." },
    { q: "'İki bilet lütfen' nasıl?", a: "Dois bilhetes, por favor. Quanto é ao todo?" }
  ],
  dialogues: [
    {
      title: "Dükkânda",
      lines: [
        { speaker: "Cliente", text: "Bom dia! Quanto custa esta camisola?", tr: "Günaydın! Bu kazak ne kadar?" },
        { speaker: "Vendedor", text: "Bom dia! Custa vinte e cinco euros.", tr: "Günaydın! Yirmi beş Euro'ya mal olur." },
        { speaker: "Cliente", text: "Está um pouco caro. Tem desconto?", tr: "Biraz pahalı. İndirim var mı?" },
        { speaker: "Vendedor", text: "Temos vinte por cento de desconto esta semana!", tr: "Bu hafta yüzde yirmi indirimiz var!" },
        { speaker: "Cliente", text: "Ótimo! Então fica em vinte euros. Levo!", tr: "Harika! O zaman yirmi Euro oluyor. Alıyorum!" },
        { speaker: "Vendedor", text: "Perfeito! Paga em dinheiro ou com cartão?", tr: "Mükemmel! Nakit mi kart ile mi ödüyorsunuz?" }
      ]
    }
  ],
  listening: {
    text: "Os números são fundamentais em qualquer língua. Em Portugal, usamos o sistema decimal como na maioria dos países europeus. A moeda é o euro, dividido em cêntimos. Uma particularidade do português europeu é que os números dezasseis, dezassete e dezanove são diferentes do português brasileiro, que diz dezesseis, dezessete e dezenove. Para os preços, dizemos 'custa' ou 'são' — por exemplo, 'são cinco euros' ou 'custa três euros e cinquenta cêntimos'. O Multibanco é o sistema de pagamento eletrónico mais usado em Portugal.",
    questions: [
      { q: "EP ile BR arasında sayı farkı olan örnekler?", a: "16: dezasseis (EP) / dezesseis (BR); 17: dezassete (EP) / dezessete (BR)" },
      { q: "Portekiz'de kullanılan para birimi ne?", a: "Euro (€), cêntimo (kuruş)" },
      { q: "Portekiz'de en yaygın ödeme sistemi ne?", a: "Multibanco — elektronik ödeme sistemi" }
    ]
  }
};
LESSONS[3] = L3;
