const L7 = {
  title: "Comida e Bebidas",
  words: [
    { en: "o arroz", tr: "pirinç / pilav", pron: "u ahosh", bd: "eril; Brezilya'nın temel gıdası" },
    { en: "o feijão", tr: "fasulye", pron: "u feyjão", bd: "eril; arroz com feijão = milli yemek" },
    { en: "a carne", tr: "et", pron: "a karni", bd: "dişil; genel et" },
    { en: "o frango", tr: "tavuk", pron: "u frãngu", bd: "eril" },
    { en: "o peixe", tr: "balık", pron: "u peyshi", bd: "eril" },
    { en: "o pão", tr: "ekmek", pron: "u pão", bd: "eril; çoğul: pães" },
    { en: "o queijo", tr: "peynir", pron: "u keyju", bd: "eril" },
    { en: "o ovo", tr: "yumurta", pron: "u ovu", bd: "eril; çoğul: ovos" },
    { en: "a fruta", tr: "meyve", pron: "a fruta", bd: "dişil; genel" },
    { en: "o legume / a verdura", tr: "sebze", pron: "u legumi / a verdura", bd: "genel sebze" },
    { en: "a água", tr: "su", pron: "a agua", bd: "dişil; a água (artikel şart)" },
    { en: "o suco", tr: "meyve suyu", pron: "u suku", bd: "BP: suco; EP: sumo" },
    { en: "o café", tr: "kahve", pron: "u kafé", bd: "eril; café com leite = sütlü kahve" },
    { en: "o leite", tr: "süt", pron: "u leyti", bd: "eril" },
    { en: "a cerveja", tr: "bira", pron: "a serveja", bd: "dişil" },
    { en: "o vinho", tr: "şarap", pron: "u vinyu", bd: "eril; vinho tinto=kırmızı, branco=beyaz" },
    { en: "Eu tenho fome.", tr: "Açım. (açlığım var)", pron: "ew tẽnyu fomi", bd: "ter fome = aç olmak" },
    { en: "Eu tenho sede.", tr: "Susadım. (susuzluğum var)", pron: "ew tẽnyu sédshi", bd: "ter sede = susamak" },
    { en: "Está delicioso!", tr: "Çok lezzetli!", pron: "ıshta deliziozu", bd: "estar: geçici durum" },
    { en: "Bom apetite!", tr: "Afiyet olsun!", pron: "bõ apetítshi", bd: "yemek başlarken söylenir" }
  ],
  grammar: [
    {
      title: "GOSTAR DE — Sevmek (yiyecekler ve içecekler)",
      explanation: "Portekizcede 'sevmek' için GOSTAR kullanılır, ancak mutlaka 'de' preposisyonuyla gelir: 'Gosto de pizza' (Pizza severim). Bu AMAR'dan farklıdır (amar = derin aşk sevgisi). Yiyecek tercihlerini ifade etmek için GOSTAR DE en yaygın kullanımdır.",
      table: [
        { pronoun: "Eu", form: "gosto de", example: "Gosto de arroz com feijão.", tr: "Pirinç pilakisi severim." },
        { pronoun: "Você / Ele / Ela", form: "gosta de", example: "Ela gosta de frango.", tr: "Tavuğu sever." },
        { pronoun: "Nós", form: "gostamos de", example: "Gostamos de fruta.", tr: "Meyve severiz." },
        { pronoun: "Vocês / Eles", form: "gostam de", example: "Gostam de café?", tr: "Kahve sever misiniz?" },
        { pronoun: "Olumsuz", form: "não gosto de", example: "Não gosto de cebola.", tr: "Soğan sevmem." },
        { pronoun: "Çok sevmek", form: "adoro", example: "Adoro chocolate!", tr: "Çikolataya bayılıyorum!" }
      ],
      note: "'Gostar de' + fiil mastar: 'Gosto de comer.' = Yemeyi severim. 'Gosta de cozinhar?' = Yemek yapmayı sever misiniz?"
    },
    {
      title: "QUERER ve PEDIR — İstemek ve Sipariş Vermek",
      explanation: "Restoran veya kafeteryada sipariş verirken QUERER (istemek) veya PEDIR (istemek/sipariş vermek) kullanılır. Kibarca istemek için 'Eu queria...' (isterdim — koşullu) daha nazik bir ifadedir. 'Por favor' her zaman kullanılabilir.",
      table: [
        { pronoun: "Eu quero", form: "istiyorum", example: "Quero um suco de laranja.", tr: "Portakal suyu istiyorum." },
        { pronoun: "Eu queria", form: "isterim/isterdim (kibarca)", example: "Queria um café, por favor.", tr: "Bir kahve isterim, lütfen." },
        { pronoun: "Eu gostaria de", form: "çok kibar", example: "Gostaria de ver o cardápio.", tr: "Menüye bakmak isterim." },
        { pronoun: "Pedir", form: "sipariş vermek", example: "Vou pedir o prato do dia.", tr: "Günün yemeğini sipariş edeceğim." },
        { pronoun: "Para mim", form: "benim için", example: "Para mim, uma água.", tr: "Benim için bir su." },
        { pronoun: "Está incluído?", form: "dahil mi?", example: "O serviço está incluído?", tr: "Servis dahil mi?" }
      ],
      note: "'Me traz...' = 'Getirir misiniz...' (BP'de çok yaygın garson çağırma ifadesi)."
    },
    {
      title: "TER FOME/SEDE — Açlık ve Susuzluk",
      explanation: "Açlık ve susuzluk Portekizcede 'sahip olmak (ter)' fiiliyle ifade edilir — tıpkı Türkçedeki 'açlığım var' gibi. Aynı yapı sıcaklık (ter calor/frio) ve uyku (ter sono) için de geçerlidir.",
      table: [
        { pronoun: "ter fome", form: "aç olmak", example: "Estou com fome! / Tenho fome!", tr: "Açım! (BP'de 'estar com fome' daha yaygın)" },
        { pronoun: "ter sede", form: "susamak", example: "Estou com sede.", tr: "Susadım." },
        { pronoun: "ter calor", form: "sıcak olmak", example: "Tenho muito calor.", tr: "Çok sıcak." },
        { pronoun: "ter frio", form: "üşümek", example: "Estou com frio.", tr: "Üşüyorum." },
        { pronoun: "ter sono", form: "uykulu olmak", example: "Estou com sono.", tr: "Uykum var." },
        { pronoun: "BP farkı", form: "estar com vs ter", example: "Estou com fome (BP yaygın)", tr: "'com' BP'de tercih edilir" }
      ],
      note: "BP'de 'Estou com fome' daha doğal, 'Tenho fome' daha resmi/Avrupa etkisi. İkisi de doğrudur."
    }
  ],
  speaking: [
    { q: "Do que você gosta para o café da manhã?", a: "Gosto de pão com queijo e um café com leite." },
    { q: "Como pede água no restaurante?", a: "Me traz uma água, por favor! / Queria uma água." },
    { q: "'Çikolataya bayılıyorum' nasıl?", a: "Adoro chocolate!" },
    { q: "Açsanız nasıl dersiniz?", a: "Estou com fome! / Tenho fome!" },
    { q: "'Meyve suyu istemiyorum' nasıl?", a: "Não quero suco." }
  ],
  dialogues: [
    {
      title: "Restoran Siparişi",
      lines: [
        { speaker: "Garçom", text: "Boa noite! O que vão querer?", tr: "İyi akşamlar! Ne istersiniz?" },
        { speaker: "Cliente 1", text: "Para mim, o arroz com feijão e frango, por favor.", tr: "Benim için pirinç, fasulye ve tavuk lütfen." },
        { speaker: "Cliente 2", text: "Eu queria o peixe grelhado. Está fresco hoje?", tr: "Izgara balık isterim. Bugün taze mi?" },
        { speaker: "Garçom", text: "Fresquíssimo! Chegou hoje de manhã.", tr: "Çok taze! Bu sabah geldi." },
        { speaker: "Cliente 1", text: "Para beber, dois sucos de maracujá.", tr: "İçecek olarak iki maracuja suyu." },
        { speaker: "Garçom", text: "Ótimo! Bom apetite para vocês!", tr: "Harika! Afiyet olsun!" }
      ]
    }
  ],
  listening: {
    text: "O café da manhã brasileiro é muito gostoso! Geralmente tem pão de queijo, fruta fresca, ovos mexidos e claro, muito café! Eu adoro pão de queijo com manteiga. No almoço, a maioria dos brasileiros come arroz com feijão, carne ou frango e salada. É simples mas muito nutritivo. No jantar, comemos mais leve: uma sopa ou salada.",
    questions: [
      { q: "Tipik Brezilya kahvaltısında ne var?", a: "Peynirli ekmek, taze meyve, karışık yumurta ve kahve" },
      { q: "Öğle yemeğinin temel yemeği ne?", a: "Pirinç ve fasulye (arroz com feijão)" },
      { q: "Akşam yemeğinde ne yenilir?", a: "Çorba veya salata (daha hafif)" }
    ]
  }
};
LESSONS[7] = L7;
