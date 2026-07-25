const L9 = {
  title: "Fazer Compras",
  words: [
    { en: "a loja", tr: "dükkan / mağaza", pron: "a loja", bd: "dişil; genel" },
    { en: "o supermercado", tr: "süpermarket", pron: "u supermerkadu", bd: "eril" },
    { en: "o shopping", tr: "alışveriş merkezi", pron: "u shopĩng", bd: "eril; İngilizce'den alıntı" },
    { en: "o vendedor / a vendedora", tr: "satıcı (e/d)", pron: "u vendedor / a vendedora", bd: "cinsiyet uyumu" },
    { en: "o preço", tr: "fiyat", pron: "u présu", bd: "eril" },
    { en: "o desconto", tr: "indirim", pron: "u deskõntu", bd: "eril; Tem desconto? = İndirim var mı?" },
    { en: "a promoção", tr: "kampanya / promosyon", pron: "a promosão", bd: "dişil; çoğul: promoções" },
    { en: "a vitrine", tr: "vitrin", pron: "a vitrĩni", bd: "dişil" },
    { en: "o provador", tr: "soyunma odası", pron: "u provador", bd: "eril; BP: provador" },
    { en: "o número / o tamanho", tr: "numara / beden", pron: "u número / u tamãnyu", bd: "ayakkabı/kıyafet için" },
    { en: "Cabe bem.", tr: "İyi oturuyor / Uyuyor.", pron: "kabi bẽy", bd: "caber = uymak, sığmak" },
    { en: "Está apertado.", tr: "Dar geliyor.", pron: "ıshta apertadu", bd: "apertado = dar, sıkı" },
    { en: "Está folgado.", tr: "Bol geliyor.", pron: "ıshta folgadu", bd: "folgado = bol, gevşek" },
    { en: "o troco", tr: "para üstü", pron: "u troku", bd: "eril; Tem troco? = Bozuk paranız var mı?" },
    { en: "a nota", tr: "banknot / kağıt para", pron: "a nota", bd: "dişil; nota de cem = yüzlük" },
    { en: "a moeda", tr: "bozuk para / madeni para", pron: "a moeda", bd: "dişil; moeda = para birimi de" },
    { en: "Vou levar.", tr: "Alıyorum. (Götürüyorum.)", pron: "vo levar", bd: "satın alma kararı" },
    { en: "Só estou olhando.", tr: "Sadece bakıyorum.", pron: "só ıshto olyãndu", bd: "satıcıyı atlatma cümlesi" },
    { en: "Tem em outro tamanho?", tr: "Başka bedeni var mı?", pron: "tẽy ẽy outru tamãnyu", bd: "ölçü sorma" },
    { en: "Tem em outra cor?", tr: "Başka rengi var mı?", pron: "tẽy ẽy outra kor", bd: "renk sorma" }
  ],
  grammar: [
    {
      title: "IR Fiili — Gitmek (Düzensiz)",
      explanation: "IR (gitmek) en sık kullanılan düzensiz fiillerden biridir. Hem hareket hem de gelecek zaman (vou + mastar) için kullanılır. 'Vou ao mercado' = Markete gidiyorum. 'Vou comprar' = Satın alacağım (yakın gelecek).",
      table: [
        { pronoun: "Eu", form: "vou", example: "Vou ao shopping amanhã.", tr: "Yarın alışveriş merkezine gidiyorum." },
        { pronoun: "Você / Ele / Ela", form: "vai", example: "Ela vai à loja.", tr: "Mağazaya gidiyor." },
        { pronoun: "Nós", form: "vamos", example: "Vamos ao supermercado?", tr: "Süpermarkete gidelim mi?" },
        { pronoun: "Vocês / Eles", form: "vão", example: "Vão comprar roupas.", tr: "Kıyafet satın alacaklar." },
        { pronoun: "IR + mastar = gelecek", form: "vou + infinitivo", example: "Vou pagar com dinheiro.", tr: "Nakit ödeyeceğim." },
        { pronoun: "a = preposição + artigo", form: "a + a = à", example: "Vou à farmácia.", tr: "Eczaneye gidiyorum." }
      ],
      note: "'a + a = à' (dişil) ve 'a + o = ao' (eril). Örnek: 'Vou ao banco / Vou à loja.' — Birleşim zorunludur!"
    },
    {
      title: "COMPRAR, PAGAR, VENDER — Alışveriş Fiilleri",
      explanation: "Alışverişte temel fiiller: COMPRAR (satın almak), PAGAR (ödemek), VENDER (satmak), TROCAR (değiştirmek), DEVOLVER (iade etmek). Hepsi düzenli -AR fiilleridir.",
      table: [
        { pronoun: "Eu compro", form: "satın alıyorum", example: "Compro um presente para ela.", tr: "Ona hediye alıyorum." },
        { pronoun: "Você paga", form: "ödüyorsunuz", example: "Como vai pagar?", tr: "Nasıl ödeyeceksiniz?" },
        { pronoun: "Ele vende", form: "satıyor", example: "Ele vende frutas.", tr: "Meyve satıyor." },
        { pronoun: "Trocar", form: "değiştirmek", example: "Posso trocar este produto?", tr: "Bu ürünü değiştirebilir miyim?" },
        { pronoun: "Devolver", form: "iade etmek", example: "Quero devolver essa blusa.", tr: "Bu bluzu iade etmek istiyorum." },
        { pronoun: "Economizar", form: "tasarruf etmek", example: "Preciso economizar dinheiro.", tr: "Para biriktirmem gerekiyor." }
      ],
      note: "-AR fiil çekimi: -o, -a, -amos, -am. COMPRAR: compro, compra, compramos, compram."
    },
    {
      title: "PRECISAR DE — İhtiyaç Duymak",
      explanation: "PRECISAR DE 'ihtiyaç duymak' anlamına gelir ve mutlaka DE preposisyonuyla kullanılır. Hem isim hem de fiil mastarıyla kullanılabilir. Bu alışverişte çok işe yarar bir kalıptır.",
      table: [
        { pronoun: "Eu preciso de", form: "ihtiyacım var", example: "Preciso de um presente.", tr: "Bir hediyeye ihtiyacım var." },
        { pronoun: "Você precisa de", form: "ihtiyacınız var", example: "Precisa de ajuda?", tr: "Yardıma ihtiyacınız var mı?" },
        { pronoun: "Nós precisamos de", form: "ihtiyacımız var", example: "Precisamos de mais tempo.", tr: "Daha fazla zamana ihtiyacımız var." },
        { pronoun: "Eles precisam de", form: "ihtiyaçları var", example: "Precisam de dinheiro.", tr: "Paraya ihtiyaçları var." },
        { pronoun: "preciso + infinitivo", form: "yapmam gerekiyor", example: "Preciso comprar um presente.", tr: "Hediye almam gerekiyor." },
        { pronoun: "Soru soru", form: "De que precisa?", example: "De que você precisa?", tr: "Neye ihtiyacınız var?" }
      ],
      note: "'Preciso de ajuda' = 'Yardıma ihtiyacım var.' PRECISAR + mastar (DE olmadan): 'Preciso ir.' = Gitmeliyim."
    }
  ],
  speaking: [
    { q: "Mağazaya girmek istemiyorsunuz. Satıcıya ne dersiniz?", a: "Só estou olhando, obrigado/a!" },
    { q: "Kıyafetin başka rengi var mı?", a: "Tem em outra cor?" },
    { q: "'Yarın alışveriş merkezine gideceğim' nasıl?", a: "Vou ao shopping amanhã." },
    { q: "Ödeme sorusu: 'Kartla ödeyebilir miyim?'", a: "Posso pagar com cartão?" },
    { q: "İndirim var mı?", a: "Tem desconto? / Tem alguma promoção?" }
  ],
  dialogues: [
    {
      title: "Kıyafet Mağazasında",
      lines: [
        { speaker: "Vendedora", text: "Boa tarde! Posso ajudar?", tr: "İyi günler! Yardımcı olabilir miyim?" },
        { speaker: "Cliente", text: "Sim! Estou procurando uma calça jeans.", tr: "Evet! Bir kot pantolon arıyorum." },
        { speaker: "Vendedora", text: "Que número você usa?", tr: "Kaç beden kullanırsınız?" },
        { speaker: "Cliente", text: "Uso quarenta e dois. Tem em azul escuro?", a: "Kırk iki kullanıyorum. Koyu mavide var mı?" },
        { speaker: "Vendedora", text: "Temos sim! Quer experimentar no provador?", tr: "Var! Soyunma odasında denemek ister misiniz?" },
        { speaker: "Cliente", text: "Sim, por favor. Quanto custa?", tr: "Evet, lütfen. Ne kadar?" }
      ]
    }
  ],
  listening: {
    text: "Hoje fui às compras com minha amiga. Fomos ao shopping do centro da cidade. Ela precisava de um presente para o aniversário da mãe dela. Vimos várias lojas mas nada estava bom. Finalmente, encontramos uma loja de joias onde compramos um colar lindo por cento e cinquenta reais. Estava em promoção — cinquenta por cento de desconto!",
    questions: [
      { q: "Ne satın aldılar?", a: "Güzel bir kolye" },
      { q: "Neden o dükkânı seçtiler?", a: "Promosyonda — yüzde elli indirim" },
      { q: "Orijinal fiyat ne kadardı?", a: "300 real (150 = %50 indirimli)" }
    ]
  }
};
LESSONS[9] = L9;
