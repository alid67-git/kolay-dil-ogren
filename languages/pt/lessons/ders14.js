const L14 = {
  title: "Dias, Meses e Datas",
  words: [
    { en: "segunda-feira", tr: "Pazartesi", pron: "segũnda feyra", bd: "2. pazar günü anlamında" },
    { en: "terça-feira", tr: "Salı", pron: "tersa feyra", bd: "3. pazar günü" },
    { en: "quarta-feira", tr: "Çarşamba", pron: "kuarta feyra", bd: "4. pazar günü" },
    { en: "quinta-feira", tr: "Perşembe", pron: "kĩnta feyra", bd: "5. pazar günü" },
    { en: "sexta-feira", tr: "Cuma", pron: "seshta feyra", bd: "6. pazar günü" },
    { en: "sábado", tr: "Cumartesi", pron: "sábadu", bd: "eril; feira yok" },
    { en: "domingo", tr: "Pazar", pron: "domĩngu", bd: "eril; feira yok; 1. gün" },
    { en: "janeiro", tr: "Ocak", pron: "janeyru", bd: "eril; küçük harf!" },
    { en: "fevereiro", tr: "Şubat", pron: "fevereiru", bd: "eril; Karnaval ayı" },
    { en: "março", tr: "Mart", pron: "marsu", bd: "eril" },
    { en: "abril", tr: "Nisan", pron: "abril", bd: "eril" },
    { en: "maio", tr: "Mayıs", pron: "mayu", bd: "eril" },
    { en: "junho", tr: "Haziran", pron: "junyu", bd: "eril; festa junina ayı" },
    { en: "julho", tr: "Temmuz", pron: "julyu", bd: "eril; Brezilya kışının ortası" },
    { en: "agosto", tr: "Ağustos", pron: "agoshtu", bd: "eril" },
    { en: "setembro", tr: "Eylül", pron: "setẽmbru", bd: "eril; bağımsızlık: 7 Eylül" },
    { en: "outubro", tr: "Ekim", pron: "owtubru", bd: "eril" },
    { en: "novembro", tr: "Kasım", pron: "novẽmbru", bd: "eril" },
    { en: "dezembro", tr: "Aralık", pron: "dezẽmbru", bd: "eril; Noel + yaz = Brezilya" },
    { en: "Que dia é hoje?", tr: "Bugün günlerden ne?", pron: "ke dzhia é oji", bd: "tarih sorusu" }
  ],
  grammar: [
    {
      title: "Günler ve Tarih Söyleme",
      explanation: "Portekizcede günler 'feira' (Pazar günü) sistemine dayanır: segunda-feira = ikinci gün (Pazartesi), terça=3., quarta=4., quinta=5., sexta=6. Hafta sonu günleri (sábado ve domingo) bu sisteme dahil değildir. Günler küçük harfle yazılır.",
      table: [
        { pronoun: "Bugün", form: "Hoje é + gün", example: "Hoje é segunda-feira.", tr: "Bugün Pazartesi." },
        { pronoun: "Yarın", form: "Amanhã é + gün", example: "Amanhã é terça.", tr: "Yarın Salı." },
        { pronoun: "Dün", form: "Ontem foi + gün", example: "Ontem foi domingo.", tr: "Dün Pazar'dı." },
        { pronoun: "Belirli gün", form: "na + gün (dişil)", example: "na segunda-feira", tr: "Pazartesi günü" },
        { pronoun: "Hafta sonu", form: "no sábado/domingo", example: "no sábado", tr: "Cumartesi günü" },
        { pronoun: "Her X günü", form: "todo + gün", example: "todo domingo", tr: "Her Pazar" }
      ],
      note: "Dikkat: 'na segunda' (Pazartesi günü) — dişil artikel kullanılır çünkü 'feira' dişildir. 'no sábado' — eril."
    },
    {
      title: "Ay ve Tarih Formatı",
      explanation: "Tarihler Portekizcede gün/ay/yıl formatında söylenir. 'Estamos em + ay' = Şimdi [ay]dayız. Ay isimleri küçük harfle yazılır ve erildir. Tarih için 'o dia + sayı + de + ay' yapısı kullanılır.",
      table: [
        { pronoun: "Tarih sorusu", form: "Qual é a data de hoje?", example: "Qual é a data de hoje?", tr: "Bugünün tarihi nedir?" },
        { pronoun: "Tarih cevabı", form: "É o dia + sayı + de + ay", example: "É o dia vinte e dois de março.", tr: "22 Mart." },
        { pronoun: "Ay sorusu", form: "Em que mês estamos?", example: "Estamos em julho.", tr: "Temmuz'dayız." },
        { pronoun: "Yıl", form: "ano de + yıl", example: "em dois mil e vinte e cinco", tr: "2025'te" },
        { pronoun: "Doğum günü", form: "Quando é seu aniversário?", example: "É em março.", tr: "Martta." },
        { pronoun: "1. gün", form: "o primeiro", example: "primeiro de janeiro", tr: "1 Ocak (birinci)" }
      ],
      note: "Sadece 1. gün için 'primeiro' (sıra sayısı) kullanılır. Diğer günler için cardinal sayılar: dois, três, quatro..."
    },
    {
      title: "Zamansal İfadeler — Geçmiş, Şimdi, Gelecek",
      explanation: "Zaman zarfları cümlelere bağlam katar. Portekizcede zaman belirteçleri cümlenin başında veya sonunda kullanılabilir. 'Hoje' (bugün), 'ontem' (dün), 'amanhã' (yarın) en temel olanlarıdır.",
      table: [
        { pronoun: "Geçmiş", form: "ontem, semana passada, mês passado", example: "Ontem choveu.", tr: "Dün yağmur yağdı." },
        { pronoun: "Şimdi", form: "hoje, agora, atualmente", example: "Hoje estou ocupado.", tr: "Bugün meşgulüm." },
        { pronoun: "Gelecek", form: "amanhã, semana que vem, próximo", example: "Amanhã vou viajar.", tr: "Yarın seyahat edeceğim." },
        { pronoun: "Sıklık", form: "sempre, às vezes, nunca", example: "Às vezes chove à tarde.", tr: "Bazen öğleden sonra yağmur yağar." },
        { pronoun: "Önce/Sonra", form: "antes de / depois de", example: "antes do almoço", tr: "öğle yemeğinden önce" },
        { pronoun: "Ne zaman", form: "quando?", example: "Quando você chega?", tr: "Ne zaman geliyorsunuz?" }
      ],
      note: "Que vem (gelecek): semana que vem = gelecek hafta. Passado/a (geçmiş): semana passada = geçen hafta."
    }
  ],
  speaking: [
    { q: "Bugün günlerden ne?", a: "Hoje é [gün]-feira. / Hoje é sábado/domingo." },
    { q: "'15 Ağustos' nasıl söylenir?", a: "O dia quinze de agosto." },
    { q: "Doğum gününüz ne zaman?", a: "Meu aniversário é em [ay], dia [sayı]." },
    { q: "'Her Çarşamba' nasıl?", a: "Toda quarta-feira." },
    { q: "'Geçen hafta' ve 'gelecek hafta' nasıl?", a: "Semana passada / Semana que vem." }
  ],
  dialogues: [
    {
      title: "Randevu Alma",
      lines: [
        { speaker: "Recepcionista", text: "Bom dia! Clínica São Lucas, em que posso ajudar?", tr: "Günaydın! São Lucas Kliniği, nasıl yardımcı olabilirim?" },
        { speaker: "Paciente", text: "Gostaria de marcar uma consulta com o Dr. Rodrigues.", tr: "Dr. Rodrigues ile bir randevu almak istiyorum." },
        { speaker: "Recepcionista", text: "Claro! Qual seria o melhor dia para você?", tr: "Tabii! Hangi gün size en uygun?" },
        { speaker: "Paciente", text: "Prefiro no final da semana — quinta ou sexta.", tr: "Haftanın sonunu tercih ederim — Perşembe veya Cuma." },
        { speaker: "Recepcionista", text: "Temos sexta-feira, dia doze, às quatorze horas.", tr: "Cuma günü 12'si var, saat 14:00." },
        { speaker: "Paciente", text: "Perfeito! Pode confirmar meu nome: Carlos Mendes.", tr: "Mükemmel! Adımı kaydeder misiniz: Carlos Mendes." }
      ]
    }
  ],
  listening: {
    text: "O Brasil tem muitas datas comemorativas importantes. O Carnaval acontece em fevereiro ou março, antes da Quaresma. O Dia da Independência é celebrado no dia sete de setembro. O Natal é comemorado no dia vinte e cinco de dezembro, mas no verão brasileiro — o que é muito diferente para os europeus! A Festa Junina acontece em junho e julho, com danças típicas e comidas tradicionais.",
    questions: [
      { q: "Bağımsızlık Günü tarihi?", a: "7 Eylül" },
      { q: "Noel hangi mevsimde?", a: "Brezilya yazında" },
      { q: "Festa Junina hangi aylarda?", a: "Haziran ve Temmuz" }
    ]
  }
};
LESSONS[14] = L14;
