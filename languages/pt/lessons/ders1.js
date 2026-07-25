const L1 = {
  title: "Cumprimentos e Apresentações",
  words: [
    { en: "Bom dia!", tr: "Günaydın!", pron: "bõ diya", bd: "sabah selamlama; até ao meio-dia" },
    { en: "Boa tarde!", tr: "İyi günler! (öğleden sonra)", pron: "boa tard", bd: "öğleden sonra; tarde = öğle/akşam arası" },
    { en: "Boa noite!", tr: "İyi akşamlar! / İyi geceler!", pron: "boa noyt", bd: "akşam ve gece; hem selamlama hem veda" },
    { en: "Olá!", tr: "Merhaba!", pron: "olá", bd: "her zaman; en yaygın selamlama" },
    { en: "Tudo bem?", tr: "İyi misiniz? / Nasılsınız?", pron: "tudu bẽy", bd: "'tudo bem?' → 'tudo bem!' yanıt" },
    { en: "Como está?", tr: "Nasılsınız? (resmi)", pron: "komu shtá", bd: "resmi; você/o senhor/a senhora ile" },
    { en: "Como te chamas?", tr: "Adın ne? (tu ile)", pron: "komu t' shamu ş", bd: "informal; EP'de tu çok yaygın" },
    { en: "Chamo-me...", tr: "Adım...", pron: "shamu-mi", bd: "EP: fiil-pronomi sırası; 'Chamo-me Ana'" },
    { en: "Muito prazer!", tr: "Çok memnun oldum!", pron: "muytu prazér", bd: "tanışma; prazer = zevk/memnuniyet" },
    { en: "Igualmente!", tr: "Ben de! / Karşılıklı!", pron: "igualméntı", bd: "Muito prazer'e cevap" },
    { en: "De onde és?", tr: "Nerelisin? (tu ile)", pron: "dı ond ésh", bd: "informal; tu conjugation: tu és" },
    { en: "Sou de...", tr: "...lıyım / ...denim", pron: "sow dı", bd: "SER; Sou de Lisboa / Sou português" },
    { en: "Fala português?", tr: "Portekizce konuşuyor musunuz?", pron: "fala purtuγésh", bd: "você ile; informal: Falas português?" },
    { en: "Um pouco.", tr: "Biraz.", pron: "ũ poku", bd: "dil seviyesi; falo um pouco de português" },
    { en: "Não entendo.", tr: "Anlamıyorum.", pron: "não ẽtẽndu", bd: "entender; não compreendo da kullanılır" },
    { en: "Pode repetir?", tr: "Tekrar edebilir misiniz?", pron: "pod rıpıtír", bd: "poder; nazik istek" },
    { en: "Fale mais devagar.", tr: "Daha yavaş konuşun.", pron: "fal maysh dıvagár", bd: "imperativo; devagar = yavaş" },
    { en: "Até logo!", tr: "Görüşürüz!", pron: "até logu", bd: "kısa veda; até = kadar" },
    { en: "Adeus!", tr: "Hoşça kalın! (kalıcı veda)", pron: "adéush", bd: "kalıcı ayrılış; tchau daha günlük" },
    { en: "Com licença.", tr: "Müsaadenizle / Pardon.", pron: "kõ lisẽnsa", bd: "nezaket; geçerken veya dikkat çekmek için" }
  ],
  grammar: [
    {
      title: "SER — Olmak Fiili (Kimlik ve Köken)",
      explanation: "Portekizce'de SER (olmak) kimliği, milliyeti ve mesleği anlatır. Avrupa Portekizcesi'nde TU (senin) günlük hayatta çok yaygındır: tu és (sensin). Resmi için você é / o senhor é / a senhora é. SER geniş zaman: sou, és, é, somos, sois, são.",
      table: [
        { pronoun: "eu", form: "sou", example: "Sou português.", tr: "Portekizliyim." },
        { pronoun: "tu", form: "és", example: "És de Lisboa?", tr: "Lizbon'dan mısın?" },
        { pronoun: "você / ele / ela", form: "é", example: "Ela é professora.", tr: "O öğretmen." },
        { pronoun: "nós", form: "somos", example: "Somos estudantes.", tr: "Biz öğrenciyiz." },
        { pronoun: "vocês", form: "são", example: "Vocês são ingleses?", tr: "Siz İngiliz misiniz?" },
        { pronoun: "eles / elas", form: "são", example: "Eles são amigos.", tr: "Onlar arkadaş." }
      ],
      note: "EP'de TU çok yaygındır — Brezilya'da você daha yaygın, ama Portekiz'de tu günlük konuşmanın standartıdır. O SENHOR / A SENHORA daha resmi hitap biçimidir."
    },
    {
      title: "Karşılama ve Veda İfadeleri",
      explanation: "Portekizce'de karşılama zamana göre değişir: Bom dia (sabah), Boa tarde (öğleden sonra), Boa noite (akşam/gece). Veda: Até logo (yakında görüşürüz), Até amanhã (yarına kadar), Adeus (hoşça kal — kalıcı). Portekiz'de sosyal karşılaşmada bir veya iki yanak öpüşmesi yaygındır.",
      table: [
        { pronoun: "Sabah", form: "Bom dia!", example: "Bom dia, Sr. Silva!", tr: "Günaydın, Bay Silva!" },
        { pronoun: "Öğleden sonra", form: "Boa tarde!", example: "Boa tarde! Como está?", tr: "İyi günler! Nasılsınız?" },
        { pronoun: "Akşam", form: "Boa noite!", example: "Boa noite! Descanse bem.", tr: "İyi geceler! İyi dinlenmeler." },
        { pronoun: "Kısa veda", form: "Até logo!", example: "Até logo, amanhã!", tr: "Görüşürüz, yarın!" },
        { pronoun: "Kalıcı veda", form: "Adeus!", example: "Adeus! Boa sorte!", tr: "Hoşça kal! İyi şanslar!" },
        { pronoun: "Günlük veda", form: "Tchau / Até já!", example: "Tchau! Até já!", tr: "Bay bay! Birazdan görüşürüz!" }
      ],
      note: "EP'de 'beijinho' (yanak öpüşmesi) yaygın bir selamlama ritüelidir. Lisboa ve çevresinde genellikle iki öpüşme, bazı bölgelerde bir. İş ortamında el sıkışma tercih edilir."
    },
    {
      title: "EP Özelliği: Pronomi Sırası (Enclítico)",
      explanation: "Avrupa Portekizcesi'nin en belirgin özelliği: afirmatif cümlelerde zamir fiilden SONRA gelir. 'Chamo-me João' (Adım João) — 'me chamo' değil! Brezilya'da tam tersi. Olumsuzda ve bağlaçlı yapılarda zamir ÖNCE gelir: 'Não me chamo Pedro.'",
      table: [
        { pronoun: "Afirmatif", form: "fiil-pronomi", example: "Chamo-me Ana.", tr: "Adım Ana." },
        { pronoun: "Olumsuz", form: "pronomi-fiil", example: "Não me chamo Pedro.", tr: "Adım Pedro değil." },
        { pronoun: "Soru", form: "fiil-pronomi", example: "Chama-se João?", tr: "Adı João mu?" },
        { pronoun: "Que/como sonra", form: "pronomi-fiil", example: "Que me diz?", tr: "Ne dersiniz?" },
        { pronoun: "Veda", form: "fiil-pronomi", example: "Vejo-te amanhã!", tr: "Yarın görüşürüz!" },
        { pronoun: "Tanışma", form: "fiil-pronomi", example: "Apresento-me: sou a Maria.", tr: "Tanıştırayım: Maria'yım." }
      ],
      note: "Bu kural EP'yi diğer dillerden ayıran en önemli özelliktir. Brezilya'da 'Me chamo', Portekiz'de 'Chamo-me'. Pratik yapmak gerekir!"
    }
  ],
  speaking: [
    { q: "Kendinizi Portekizce tanıtın.", a: "Olá! Chamo-me [isim]. Sou de [yer]. Tenho [yaş] anos e falo um pouco de português." },
    { q: "'Adın ne?' sorusunu sorun (informal).", a: "Como te chamas? / Qual é o teu nome?" },
    { q: "'Anlamıyorum, daha yavaş konuşun' nasıl?", a: "Não entendo. Pode falar mais devagar, por favor?" },
    { q: "Birini tanıştırın.", a: "Apresento-te o meu amigo João. João, este é o Carlos. Muito prazer!" },
    { q: "Sabah karşılaşma diyaloğu kurun.", a: "Bom dia! Tudo bem? — Tudo bem, obrigado/a. E tu?" }
  ],
  dialogues: [
    {
      title: "Havalimanında Tanışma",
      lines: [
        { speaker: "Ana", text: "Bom dia! Desculpe, é português?", tr: "Günaydın! Pardon, Portekizli misiniz?" },
        { speaker: "Miguel", text: "Sim! Sou do Porto. E a menina?", tr: "Evet! Porto'luyum. Siz?" },
        { speaker: "Ana", text: "Sou turca. Chamo-me Ana. Muito prazer!", tr: "Türküm. Adım Ana. Çok memnun oldum!" },
        { speaker: "Miguel", text: "Igualmente! Falas muito bem português!", tr: "Ben de! Portekizceyi çok iyi konuşuyorsun!" },
        { speaker: "Ana", text: "Obrigada! Ainda estou a aprender.", tr: "Teşekkürler! Hâlâ öğreniyorum." },
        { speaker: "Miguel", text: "Ótimo! Bem-vinda a Portugal!", tr: "Harika! Portekiz'e hoş geldin!" }
      ]
    }
  ],
  listening: {
    text: "Portugal é um país no sudoeste da Europa, na Península Ibérica. Lisboa é a capital e a maior cidade. O português é falado por mais de 250 milhões de pessoas em todo o mundo — em Portugal, Brasil, Angola, Moçambique, Cabo Verde e outros países. O português europeu tem características próprias: pronúncia diferente do Brasil, vocabulário específico e certas estruturas gramaticais únicas, como a colocação dos pronomes depois do verbo. Os portugueses são conhecidos pela sua hospitalidade e pela sua ligação profunda à cultura, à história e ao fado.",
    questions: [
      { q: "Portekiz nerede bulunuyor?", a: "Güneybatı Avrupa'da, İber Yarımadası'nda" },
      { q: "Avrupa Portekizcesi'nin belirgin özelliği nedir?", a: "Farklı telaffuz, özgün sözcük hazinesi ve zamirlerin fiilden sonra gelmesi" },
      { q: "Portekizliler nasıl tanımlanıyor?", a: "Misafirperver, kültür ve tarihe bağlı, fado ile özdeşleşen" }
    ]
  }
};
LESSONS[1] = L1;
