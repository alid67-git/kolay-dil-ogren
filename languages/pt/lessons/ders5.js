const L5 = {
  title: "Família e Relações",
  words: [
    { en: "o pai", tr: "baba", pron: "u pay", bd: "eril; o pai = the father; papá = papa (EP)" },
    { en: "a mãe", tr: "anne", pron: "a mã", bd: "dişil; mamã = mama (EP)" },
    { en: "o irmão / a irmã", tr: "erkek kardeş / kız kardeş", pron: "u irmão / a irmã", bd: "cinsiyet uyumu; irmãos = kardeşler" },
    { en: "o avô / a avó", tr: "büyükbaba / büyükanı", pron: "u avô / a avó", bd: "aksan farkı önemli! ô/ó" },
    { en: "o filho / a filha", tr: "oğul / kız çocuk", pron: "u filyu / a filya", bd: "cinsiyet uyumu" },
    { en: "o tio / a tia", tr: "amca/dayı/enişte / teyze/hala/yenge", pron: "u tiyu / a tiya", bd: "cinsiyet uyumu" },
    { en: "o primo / a prima", tr: "erkek kuzen / kız kuzen", pron: "u primu / a prima", bd: "cinsiyet uyumu" },
    { en: "o marido", tr: "koca / eş (erkek)", pron: "u maridu", bd: "eril; cônjuge = cinsiyet nötr eş" },
    { en: "a esposa / a mulher", tr: "karı / eş (kadın)", pron: "a ıshpoza / a mulyer", bd: "dişil; mulher = hem kadın hem eş" },
    { en: "o sogro / a sogra", tr: "kayınpeder / kayınvalide", pron: "u sogru / a sogra", bd: "cinsiyet uyumu" },
    { en: "o genro / a nora", tr: "damat / gelin", pron: "u jẽnru / a nora", bd: "cinsiyet uyumu" },
    { en: "os pais", tr: "anne baba / ebeveynler", pron: "uş paysh", bd: "pai çoğulu; pais = ebeveynler" },
    { en: "o namorado / a namorada", tr: "erkek arkadaş / kız arkadaş", pron: "u namorádu / a namoráda", bd: "sevgili" },
    { en: "casado / casada", tr: "evli", pron: "kazadu / kazada", bd: "SER ile; casamento = düğün/evlilik" },
    { en: "solteiro / solteira", tr: "bekar", pron: "sowteyrü / sowteyrra", bd: "SER ile" },
    { en: "divorciado / divorciada", tr: "boşanmış", pron: "divoşiadu", bd: "SER ile" },
    { en: "viúvo / viúva", tr: "dul (erkek/kadın)", pron: "viuvu / viuva", bd: "SER ile" },
    { en: "o casal", tr: "çift", pron: "u kazal", bd: "eril; casal feliz = mutlu çift" },
    { en: "a família numerosa", tr: "kalabalık aile", pron: "a famílya numoroza", bd: "dişil" },
    { en: "Somos uma família unida.", tr: "Birbirimize bağlı bir aileyiz.", pron: "somuş uma famílya unida", bd: "aile tanımı" }
  ],
  grammar: [
    {
      title: "Sở hữu Zamirleri — Possessivos (EP)",
      explanation: "EP'de possessivos artikoyla kullanılır: o meu pai (benim babam), a minha mãe (benim annem). Tekil: meu/minha (benim), teu/tua (senin — tu ile), seu/sua (onun/sizin). Çoğul: nosso/nossa (bizim), vosso/vossa (sizin — vós ile), seu/sua (onların). Artikoyla kullanımı EP'yi karakterize eder.",
      table: [
        { pronoun: "meu/minha", form: "Benim (eril/dişil)", example: "o meu pai / a minha mãe", tr: "benim babam / benim annem" },
        { pronoun: "teu/tua", form: "Senin (tu)", example: "o teu irmão / a tua irmã", tr: "senin kardeşin" },
        { pronoun: "seu/sua", form: "Onun / Sizin", example: "o seu filho / a sua filha", tr: "onun oğlu/kızı" },
        { pronoun: "nosso/nossa", form: "Bizim", example: "a nossa família", tr: "bizim ailemiz" },
        { pronoun: "vosso/vossa", form: "Sizin (vós)", example: "o vosso avô", tr: "sizin büyükbabanız" },
        { pronoun: "seu/sua (eles)", form: "Onların", example: "os seus filhos", tr: "onların çocukları" }
      ],
      note: "EP'de artikoyla possessivo: 'o meu livro' (BR'de 'meu livro' — artikosuz). EP'de artiko zorunludur. Dikkat: 'seu/sua' hem onun hem sizin hem onların anlamına gelir — bağlamdan anlaşılır."
    },
    {
      title: "Aile Hakkında Konuşma — Yapılar",
      explanation: "Aile tanımı için TER (sahip olmak) ve SER kullanılır. 'Tenho dois irmãos' (İki kardeşim var). 'O meu pai é engenheiro' (Babam mühendis). Yaş için TER: 'O meu avô tem oitenta anos.' Medeni durum için SER: 'Os meus pais são casados há trinta anos.'",
      table: [
        { pronoun: "TER + aile", form: "Sahip olmak", example: "Tenho uma irmã e dois irmãos.", tr: "Bir kız bir erkek iki kardeşim var." },
        { pronoun: "SER + durum", form: "Medeni hal", example: "Os meus pais são casados.", tr: "Annem babam evli." },
        { pronoun: "TER + yaş", form: "Yaş", example: "A minha avó tem setenta anos.", tr: "Büyükannem yetmiş yaşında." },
        { pronoun: "SER + meslek", form: "Meslek", example: "O meu tio é professor.", tr: "Amcam öğretmen." },
        { pronoun: "MORAR + yer", form: "Nerede yaşıyor", example: "A minha família mora no Porto.", tr: "Ailem Porto'da yaşıyor." },
        { pronoun: "CHAMAR-SE", form: "Adı ne", example: "A minha mãe chama-se Maria.", tr: "Annemin adı Maria." }
      ],
      note: "'Morar' = EP'de yaşamak/oturmak (BR: morar da kullanılır). 'Viver' daha genel. 'Habitar' resmi. EP: 'Onde moras?' (nerede oturuyorsun?). Sokak adresi: 'Moro na Rua Augusta, número cinco.'"
    },
    {
      title: "EP Sosyal Yapı — Português Aile Kültürü",
      explanation: "Portekiz kültüründe aile çok önemlidir. Büyük aile toplantıları (almoço de família — aile öğle yemeği) hafta sonları yaygındır. 'O jantar de Natal' (Noel yemeği) kutsal bir gelenek. 'O padrinho / a madrinha' (vaftiz babası/annesi) sosyal ağın önemli parçaları.",
      table: [
        { pronoun: "Padrinho/Madrinha", form: "Vaftiz ebeveyn", example: "O meu padrinho é o meu tio.", tr: "Vaftiz babam amcam." },
        { pronoun: "Cunhado/Cunhada", form: "Kayınbirader/baldız", example: "A minha cunhada é médica.", tr: "Kayınım doktor." },
        { pronoun: "Sobrinho/Sobrinha", form: "Yeğen (erkek/kız)", example: "Tenho três sobrinhos.", tr: "Üç yeğenim var." },
        { pronoun: "Almoço em família", form: "Aile öğle yemeği", example: "Ao domingo, almoçamos em família.", tr: "Pazar günleri ailece öğle yemeği yeriz." },
        { pronoun: "Jantar de Natal", form: "Noel yemeği", example: "O jantar de Natal é sagrado.", tr: "Noel yemeği kutsal bir gelenektir." },
        { pronoun: "Avós (büyükanne/baba)", form: "Torun bakımı", example: "Os avós tomam conta dos netos.", tr: "Büyükanne ve büyükbaba torunlara bakıyor." }
      ],
      note: "Portekiz'de nüfus azalması ve göç nedeniyle aile yapısı değişiyor. Ancak pek çok aile hâlâ büyüklerle yakın yaşıyor. 'Família alargada' = geniş aile — Portekiz'de hâlâ yaygın."
    }
  ],
  speaking: [
    { q: "Ailenizi tanıtın.", a: "A minha família é composta pelo meu pai, a minha mãe e a minha irmã. Moramos em [şehir]." },
    { q: "Büyükannenizi tarif edin.", a: "A minha avó tem [yaş] anos. É muito simpática e cozinha muito bem." },
    { q: "'Kardeşim evli ve iki çocuğu var' nasıl?", a: "O meu irmão é casado e tem dois filhos." },
    { q: "Medeni durumunuzu belirtin.", a: "Sou solteiro/a. / Sou casado/a. / Estou num relacionamento." },
    { q: "Portekizce'de 'aile yemeği' geleneğini anlatın.", a: "Em Portugal, ao domingo, a família reúne-se para o almoço. É uma tradição muito importante." }
  ],
  dialogues: [
    {
      title: "Aile Fotoğrafı",
      lines: [
        { speaker: "Sofia", text: "Quem são estas pessoas na fotografia?", tr: "Fotoğraftaki bu kişiler kim?" },
        { speaker: "André", text: "São os meus pais. O meu pai chama-se António e a minha mãe chama-se Lurdes.", tr: "Benim annem babam. Babamın adı António, annemin adı Lurdes." },
        { speaker: "Sofia", text: "E esta criança? É teu irmão?", tr: "Bu çocuk? Kardeşin mi?" },
        { speaker: "André", text: "Não, é o meu primo João. Tem oito anos. É muito engraçado!", tr: "Hayır, kuzenim João. Sekiz yaşında. Çok komik!" },
        { speaker: "Sofia", text: "A tua avó também está na foto. Que simpática parece!", tr: "Büyükannen de fotoğrafta var. Ne kadar sempatik görünüyor!" },
        { speaker: "André", text: "A minha avó tem setenta e cinco anos e é a melhor cozinheira do mundo!", tr: "Büyükannem yetmiş beş yaşında ve dünyanın en iyi aşçısı!" }
      ]
    }
  ],
  listening: [{
    text: "A família ocupa um lugar central na sociedade portuguesa. Apesar das mudanças sociais das últimas décadas, os laços familiares continuam muito fortes. O domingo é o dia da família por excelência: é comum reunirem-se para o almoço, frequentemente em casa dos avós. Portugal tem uma das taxas de natalidade mais baixas da Europa, o que levou a políticas de apoio às famílias. A emigração também afetou muito as famílias portuguesas — há gerações que cresceram com os pais a trabalhar no estrangeiro, especialmente em França, Alemanha ou no Brasil.",
    questions: [
      { q: "Pazar günleri Portekiz'de aile için ne ifade eder?", a: "Ailenin bir araya geldiği gün, genellikle büyükanne/büyükbaba evinde öğle yemeği" },
      { q: "Portekiz'deki aile yapısını etkileyen nedir?", a: "Düşük doğum oranı ve göç — özellikle Fransa ve Almanya'ya" },
      { q: "Portekizli ailelerde büyükanne/büyükbabanın rolü ne?", a: "Merkezi bir rol — haftalık yemekler, torunlara bakım" }
    ]
  }]
};
LESSONS[5] = L5;
