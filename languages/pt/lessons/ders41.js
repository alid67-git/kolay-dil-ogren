const L41 = {
  title: "Português Acadêmico",
  words: [
    { en: "a pesquisa", tr: "araştırma", pron: "a peshkiza", bd: "dişil; pesquisador = araştırmacı" },
    { en: "o artigo", tr: "makale / madde", pron: "u artígu", bd: "eril; artigo científico = bilimsel makale" },
    { en: "a tese", tr: "tez", pron: "a tezi", bd: "dişil; tese de doutorado = doktora tezi" },
    { en: "a dissertação", tr: "yüksek lisans tezi", pron: "a dishertasão", bd: "dişil; dissertação de mestrado" },
    { en: "a hipótese", tr: "hipotez", pron: "a ipótezi", bd: "dişil; levantar hipótese = hipotez kurmak" },
    { en: "a metodologia", tr: "metodoloji", pron: "a metodolojiya", bd: "dişil; metodologia de pesquisa" },
    { en: "os dados", tr: "veriler", pron: "us dadu ş", bd: "eril çoğul; analisar os dados = verileri analiz etmek" },
    { en: "a conclusão", tr: "sonuç / sonuçlama", pron: "a kõklusão", bd: "dişil; concluir = sonuçlandırmak" },
    { en: "a referência", tr: "kaynak / referans", pron: "a referẽnsya", bd: "dişil; lista de referências = kaynakça" },
    { en: "a citação", tr: "alıntı", pron: "a sitasão", bd: "dişil; citar = alıntı yapmak" },
    { en: "o seminário", tr: "seminer", pron: "u seminaryu", bd: "eril; apresentar no seminário = seminerde sunum yapmak" },
    { en: "o orientador", tr: "danışman (akademik)", pron: "u oriyẽntador", bd: "eril; professora orientadora = dişil" },
    { en: "analisar", tr: "analiz etmek", pron: "analizár", bd: "düzenli -AR; análise = analiz" },
    { en: "demonstrar", tr: "göstermek / kanıtlamak", pron: "dẽmonstrár", bd: "düzenli -AR; demonstração = kanıt/gösteri" },
    { en: "desenvolver", tr: "geliştirmek", pron: "dẽzenvolvér", bd: "düzensiz -ER; desenvolvimento = gelişme" },
    { en: "embasar", tr: "temellendirmek", pron: "ẽmazár", bd: "düzenli -AR; embasado em = ...temelli" },
    { en: "confrontar", tr: "karşılaştırmak / yüzleşmek", pron: "kõfrõntár", bd: "düzenli -AR; confrontar dados = verileri kıyaslamak" },
    { en: "Conforme X argumenta", tr: "X'in savunduğu gibi", pron: "kõfórmi argumenta", bd: "akademik atıf ifadesi" },
    { en: "Conclui-se que", tr: "Sonuç olarak şu çıkar:", pron: "kõklu-si ki", bd: "akademik sonuç" },
    { en: "À luz dos dados", tr: "Veriler ışığında", pron: "a lúsh duş daduş", bd: "akademik ifade" }
  ],
  grammar: [
    {
      title: "Akademik Yazı — Resmi Dil ve Yapılar",
      explanation: "Akademik Portekizce'de belirli yapılar kullanılır: CONFORME (göre), SEGUNDO (göre), TENDO EM VISTA QUE (göz önünde bulundurularak), VALE RESSALTAR QUE (belirtmek gerekir ki), CABE MENCIONAR (bahsetmek yerinde olur). Bu yapılar yazıyı resmi ve güvenilir kılar.",
      table: [
        { pronoun: "Conforme + isim", form: "...göre", example: "Conforme Silva (2020), isso é comprovado.", tr: "Silva'ya (2020) göre bu kanıtlanmıştır." },
        { pronoun: "Segundo + isim", form: "...göre", example: "Segundo os dados coletados,", tr: "Toplanan verilere göre," },
        { pronoun: "Vale ressaltar", form: "Belirtmek gerekir", example: "Vale ressaltar que há limitações.", tr: "Kısıtlamalar olduğunu belirtmek gerekir." },
        { pronoun: "Cabe mencionar", form: "Bahsetmek yerinde", example: "Cabe mencionar o contexto histórico.", tr: "Tarihi bağlamdan bahsetmek yerinde olur." },
        { pronoun: "Tendo em vista", form: "Göz önünde bulundurularak", example: "Tendo em vista os resultados,", tr: "Sonuçlar göz önünde bulundurulduğunda," },
        { pronoun: "Ademais", form: "Bunun yanı sıra", example: "Ademais, outros fatores contribuem.", tr: "Bunun yanı sıra, diğer faktörler de katkıda bulunur." }
      ],
      note: "Akademik Portekizce'de 1. tekil şahıs 'eu' kullanımı azaltılır, pasif yapı tercih edilir: 'Foi observado que' (Gözlemlendi ki) yerine 'Observei que' (Gözlemledim ki) daha az tercih edilir."
    },
    {
      title: "Edilgen Yapı (Voz Passiva) — Akademik Kullanım",
      explanation: "Akademik metinlerde edilgen yapı çok yaygındır: 'Os dados foram coletados' (Veriler toplandı), 'A hipótese foi confirmada' (Hipotez doğrulandı). SER+particípio yapısı. Ayrıca SE edilgen: 'Observou-se que...' (Gözlemlendi ki...).",
      table: [
        { pronoun: "SER + particípio", form: "Edilgen", example: "Os dados foram analisados.", tr: "Veriler analiz edildi." },
        { pronoun: "SE + fiil", form: "Edilgen (SE)", example: "Observou-se uma melhora.", tr: "Bir iyileşme gözlemlendi." },
        { pronoun: "Geçmiş edilgen", form: "foi/foram + part.", example: "A tese foi defendida com sucesso.", tr: "Tez başarıyla savunuldu." },
        { pronoun: "Şimdiki edilgen", form: "é/são + part.", example: "O método é amplamente utilizado.", tr: "Yöntem yaygın olarak kullanılmaktadır." },
        { pronoun: "Por quem", form: "Kim tarafından", example: "Desenvolvido por pesquisadores.", tr: "Araştırmacılar tarafından geliştirilmiş." },
        { pronoun: "Sem agente", form: "Ajan belirtmeden", example: "Foram identificadas três categorias.", tr: "Üç kategori belirlendi." }
      ],
      note: "SE edilgen (voz passiva sintética) akademik metinde çok yaygın. 'Verificou-se que' = İngilizce 'It was verified that' — çok doğal görünür."
    },
    {
      title: "Bağlaçlar ve Geçiş İfadeleri",
      explanation: "Akademik yazıda paragraflar arası akışı sağlamak için bağlaçlar (conjunções) kritiktir. Ekleme: além disso, ademais, outrossim. Karşıtlık: entretanto, contudo, porém, todavia. Sonuç: portanto, logo, assim sendo. Açıklama: ou seja, isto é, a saber.",
      table: [
        { pronoun: "Além disso", form: "Bunun yanı sıra", example: "Além disso, outros fatores existem.", tr: "Bunun yanı sıra, diğer faktörler de var." },
        { pronoun: "Entretanto", form: "Bununla birlikte", example: "Entretanto, há limitações.", tr: "Bununla birlikte, kısıtlamalar var." },
        { pronoun: "Portanto", form: "Dolayısıyla", example: "Portanto, conclui-se que...", tr: "Dolayısıyla şu sonuca varılır:" },
        { pronoun: "Ou seja", form: "Yani / Başka bir deyişle", example: "Ou seja, os dados confirmam.", tr: "Yani veriler doğruluyor." },
        { pronoun: "Todavia", form: "Oysa ki / Ancak", example: "Todavia, o resultado divergiu.", tr: "Oysa ki sonuç farklılaştı." },
        { pronoun: "Assim sendo", form: "Bu durumda / Böylece", example: "Assim sendo, a hipótese se confirma.", tr: "Bu durumda hipotez doğrulanmaktadır." }
      ],
      note: "'Porém' ve 'contudo' = ancak/bununla birlikte. 'Todavia' daha resmi. BP informal konuşmada 'mas' yeterli, akademikte bunlar gerekli."
    }
  ],
  speaking: [
    { q: "Araştırmanızı kısaca tanıtın.", a: "Esta pesquisa tem como objetivo analisar... A metodologia utilizada foi... Os dados foram coletados por meio de..." },
    { q: "'Veriler hipotezi doğrulayamadı' nasıl?", a: "Os dados não puderam confirmar a hipótese inicial. Foram identificadas outras variáveis." },
    { q: "Bir kaynağa atıf yapın.", a: "Conforme Silva e Costa (2022) argumentam, o fenômeno tem múltiplas causas." },
    { q: "Sonuç bölümü için bir cümle yazın.", a: "Conclui-se que a educação é o fator mais relevante neste contexto." },
    { q: "'Araştırmanın sınırlılıkları şunlardır' nasıl?", a: "Vale ressaltar que esta pesquisa apresenta limitações, como o tamanho da amostra." }
  ],
  dialogues: [
    {
      title: "Tez Savunması Hazırlığı",
      lines: [
        { speaker: "Orientadora", text: "Sua dissertação está quase pronta. Precisamos revisar a conclusão.", tr: "Teziniz neredeyse hazır. Sonuç bölümünü gözden geçirmemiz gerekiyor." },
        { speaker: "Mestranda", text: "Sim. Acho que a argumentação está coerente, mas a conclusão pode ser mais forte.", tr: "Evet. Argümantasyonun tutarlı olduğunu düşünüyorum, ama sonuç daha güçlü olabilir." },
        { speaker: "Orientadora", text: "Exatamente! Use 'portanto' e 'assim sendo' para conectar melhor as ideias.", tr: "Tam olarak! Fikirleri daha iyi bağlamak için 'dolayısıyla' ve 'bu durumda' kullanın." },
        { speaker: "Mestranda", text: "Entendido. E as referências? Seguem a ABNT?", tr: "Anladım. Kaynaklar? ABNT'yi takip ediyor mu?" },
        { speaker: "Orientadora", text: "A maioria sim, mas há duas citações que precisam de ajuste.", tr: "Çoğunluğu evet, ama iki alıntının düzeltilmesi gerekiyor." },
        { speaker: "Mestranda", text: "Corrijo amanhã cedo. Estou animada com a defesa!", tr: "Yarın sabah düzeltirim. Savunma için heyecanlıyım!" }
      ]
    }
  ],
  listening: {
    text: "O Brasil investe significativamente em pesquisa científica, com instituições como FAPESP, CNPq e CAPES financiando projetos em todo o país. A USP — Universidade de São Paulo — é a melhor universidade da América Latina segundo vários rankings internacionais. O sistema de pós-graduação brasileiro é um dos mais desenvolvidos do mundo em desenvolvimento. Áreas como biotecnologia tropical, medicina veterinária e agricultura sustentável são destaques internacionais. A Embrapa, empresa de pesquisa agropecuária, revolucionou a agricultura brasileira e é referência mundial.",
    questions: [
      { q: "Brezilya'da araştırmayı finanse eden kurumlar hangileri?", a: "FAPESP, CNPq ve CAPES" },
      { q: "USP hangi alanda öne çıkıyor?", a: "Latin Amerika'nın en iyi üniversitesi olarak uluslararası sıralamalarda" },
      { q: "Embrapa ne yapıyor?", a: "Brezilya tarımını devrimi ve dünya referansı olan tarım araştırmaları" }
    ]
  }
};
LESSONS[41] = L41;
