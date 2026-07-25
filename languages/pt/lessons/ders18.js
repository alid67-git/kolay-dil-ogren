const L18 = {
  title: "Hotel e Hospedagem",
  words: [
    { en: "o hotel", tr: "otel", pron: "u otél", bd: "eril" },
    { en: "a pousada", tr: "pansiyon / butik otel", pron: "a pozada", bd: "dişil; BP'ye özgü, çoğu kez kırsal alanda" },
    { en: "o hostel", tr: "hostel / yurt", pron: "u ostél", bd: "eril; mochileiros için" },
    { en: "a recepção", tr: "resepsiyon / giriş", pron: "a hesepsão", bd: "dişil; recepcionist = resepsiyonist" },
    { en: "o quarto", tr: "oda", pron: "u kuartu", bd: "eril; quarto duplo = çift kişilik" },
    { en: "a reserva", tr: "rezervasyon / ayırma", pron: "a hezérva", bd: "dişil; fazer reserva = rezervasyon yaptırmak" },
    { en: "o check-in / check-out", tr: "giriş / çıkış", pron: "u shekĩn / shekawt", bd: "eril; horas de check-in" },
    { en: "a diária", tr: "gecelik ücret", pron: "a diárya", bd: "dişil; Qual é a diária? = Gecelik ne kadar?" },
    { en: "o café da manhã", tr: "kahvaltı", pron: "u kafé da manyã", bd: "eril; inclui café? = Kahvaltı dahil mi?" },
    { en: "o frigobar", tr: "minibar", pron: "u frigobár", bd: "eril" },
    { en: "o ar-condicionado", tr: "klima", pron: "u ar kõdisionadu", bd: "eril; tem ar? = Klima var mı?" },
    { en: "a piscina", tr: "yüzme havuzu", pron: "a pisĩna", bd: "dişil" },
    { en: "o estacionamento", tr: "otopark", pron: "u ıshtasionamẽntu", bd: "eril" },
    { en: "o andar", tr: "kat", pron: "u ãndár", bd: "eril; segundo andar = ikinci kat (EP); 2.º = 2. kat" },
    { en: "o elevador", tr: "asansör", pron: "u ılevador", bd: "eril; escada = merdiven" },
    { en: "a toalha", tr: "havlu", pron: "a twalya", bd: "dişil; toalha de banho = banyo havlusu" },
    { en: "o travesseiro", tr: "yastık", pron: "u traveseyru", bd: "eril; EP: almofada" },
    { en: "Tem vaga?", tr: "Boş oda var mı?", pron: "tẽy vaga", bd: "vaga = boşluk, yer" },
    { en: "Posso ver o quarto?", tr: "Odayı görebilir miyim?", pron: "posu ver u kuartu", bd: "check-in öncesi" },
    { en: "Vou me hospedar por três noites.", tr: "Üç gece kalacağım.", pron: "vo mi ospedár pur tresh noytshi", bd: "hospedar-se = konakmak" }
  ],
  grammar: [
    {
      title: "FICAR / HOSPEDAR-SE — Konaklama Fiilleri",
      explanation: "Bir yerde gecelemek veya kalmak için FICAR, HOSPEDAR-SE veya PERNOITAR kullanılır. 'Fico no hotel' = Otelde kalıyorum. 'Vou me hospedar na pousada' = Pansiyonda konaklamak istiyorum. Süre için 'por + süre' kullanılır.",
      table: [
        { pronoun: "Ficar em", form: "kalmak, konaklamak", example: "Fico no hotel por dois dias.", tr: "İki gün otelde kalıyorum." },
        { pronoun: "Hospedar-se", form: "konaklamak (resmi)", example: "Me hospedei na pousada.", tr: "Pansiyonda kaldım." },
        { pronoun: "Pernoitar", form: "gecelemek", example: "Vamos pernoitar aqui.", tr: "Burada geceleyeceğiz." },
        { pronoun: "Por + süre", form: "süre: kaç gece", example: "Por três noites.", tr: "Üç gece için." },
        { pronoun: "Ayrılmak", form: "sair do hotel", example: "Saio amanhã às dez.", tr: "Yarın saat 10'da ayrılıyorum." },
        { pronoun: "Uzatmak", form: "estender a estadia", example: "Posso estender por mais uma noite?", tr: "Bir gece daha uzatabilir miyim?" }
      ],
      note: "Estadia = konaklama süresi. Noite = gece. 'Uma diária' = bir gecelik ücret. 'Meia diária' = yarım gün ücreti."
    },
    {
      title: "Otelde Talep ve Rica İfadeleri",
      explanation: "Otelde servis veya ek taleplerde nazik ifadeler kullanmak önemlidir. 'Poderia me trazer...' = 'Getirebilir misiniz...?' çok kibar bir istektir. 'Preciso de...' = 'İhtiyacım var...' daha doğrudan.",
      table: [
        { pronoun: "Rica", form: "Poderia me trazer...?", example: "Poderia me trazer mais toalhas?", tr: "Daha fazla havlu getirebilir misiniz?" },
        { pronoun: "Rica 2", form: "Gostaria de...", example: "Gostaria de fazer o check-out.", tr: "Çıkış yapmak istiyorum." },
        { pronoun: "Şikayet", form: "Há um problema com...", example: "Há um problema com o ar-condicionado.", tr: "Klimada sorun var." },
        { pronoun: "İstek", form: "Preciso de...", example: "Preciso de um adaptador de tomada.", tr: "Priz adaptörüne ihtiyacım var." },
        { pronoun: "Oda değişimi", form: "Posso trocar de quarto?", example: "O quarto está com barulho.", tr: "Oda değiştirebilir miyim? Oda gürültülü." },
        { pronoun: "Erken çıkış", form: "Vou sair mais cedo.", example: "Posso fazer o check-out às oito?", tr: "Saat sekizde çıkış yapabilir miyim?" }
      ],
      note: "'Barulho' = gürültü. 'Silêncio' = sessizlik. 'O quarto está frio/quente/barulhento.' = Oda soğuk/sıcak/gürültülü."
    },
    {
      title: "Rezervasyon Yapma — Telefon ve Online",
      explanation: "Rezervasyon yaparken tarih, oda tipi ve kişi sayısını belirtmek gerekir. 'Quero reservar um quarto' = Bir oda rezerve etmek istiyorum. Çıkış tarihi için 'saída' (çıkış), giriş için 'chegada' (varış) kullanılır.",
      table: [
        { pronoun: "Rezervasyon", form: "Quero fazer uma reserva.", example: "Para duas pessoas.", tr: "İki kişi için rezervasyon yapmak istiyorum." },
        { pronoun: "Tarih", form: "de + giriş + até + çıkış", example: "De quinta até domingo.", tr: "Perşembeden Pazara." },
        { pronoun: "Oda tipi", form: "quarto simples/duplo/triplo", example: "Um quarto duplo com cama de casal.", tr: "Çift kişilik yataklı oda." },
        { pronoun: "Dahil servisler", form: "inclui café da manhã?", example: "O café da manhã está incluído?", tr: "Kahvaltı dahil mi?" },
        { pronoun: "İptal", form: "Posso cancelar a reserva?", example: "Qual é a política de cancelamento?", tr: "İptal koşulları nedir?" },
        { pronoun: "Onay", form: "Confirme minha reserva.", example: "Pode me enviar a confirmação?", tr: "Onayı bana gönderebilir misiniz?" }
      ],
      note: "Cama de casal = çift kişilik yatak. Camas separadas = ayrı yataklar. Suíte = süit oda."
    }
  ],
  speaking: [
    { q: "'Üç gece tek kişilik oda' rezervasyonu nasıl yaparsınız?", a: "Quero reservar um quarto simples por três noites." },
    { q: "'Kahvaltı dahil mi?' nasıl sorarsınız?", a: "O café da manhã está incluído na diária?" },
    { q: "Klimanız çalışmıyor — ne söylersiniz?", a: "Há um problema com o ar-condicionado. Pode resolver?" },
    { q: "'Saat 10'da check-out yapacağım' nasıl?", a: "Vou fazer o check-out às dez." },
    { q: "Bir gece daha kalmak istiyorsunuz — nasıl sorarsınız?", a: "Posso estender a estadia por mais uma noite?" }
  ],
  dialogues: [
    {
      title: "Otel Girişi",
      lines: [
        { speaker: "Recepcionista", text: "Boa noite! Bem-vindo! Tem reserva?", tr: "İyi akşamlar! Hoş geldiniz! Rezervasyonunuz var mı?" },
        { speaker: "Hóspede", text: "Sim, tenho uma reserva no nome de Costa.", tr: "Evet, Costa adına rezervasyonum var." },
        { speaker: "Recepcionista", text: "Encontrei! Um quarto duplo por três noites, correto?", tr: "Buldum! Üç gece çift kişilik oda, doğru mu?" },
        { speaker: "Hóspede", text: "Isso! O café da manhã está incluído?", tr: "Evet! Kahvaltı dahil mi?" },
        { speaker: "Recepcionista", text: "Está sim! Das seis às dez da manhã no restaurante do térreo.", tr: "Dahil! Zemin kattaki restoranda sabah altıdan ona kadar." },
        { speaker: "Hóspede", text: "Ótimo! Posso pedir uma almofada extra?", tr: "Harika! Ekstra yastık isteyebilir miyim?" }
      ]
    }
  ],
  listening: {
    text: "O Brasil oferece uma grande variedade de acomodações. Nas grandes cidades como São Paulo e Rio, há hotéis de luxo internacionais e também opções mais econômicas. Nas regiões turísticas como Búzios, Trancoso e a Chapada Diamantina, as pousadas são muito populares — elas oferecem uma experiência mais íntima e autêntica. Para mochileiros, os hostels nas capitais são ótimas opções com preços acessíveis.",
    questions: [
      { q: "Brezilya'da ne tür konaklama seçenekleri var?", a: "Lüks oteller, ekonomik oteller, pousada'lar, hosteller" },
      { q: "Pousada'ların özelliği ne?", a: "Daha samimi ve otantik deneyim" },
      { q: "Hostel kimler için uygun?", a: "Sırt çantalı gezginler / mochileiros" }
    ]
  }
};
LESSONS[18] = L18;
