var L14 = {
  words: [
    {en:"Monday", tr:"Pazartesi", pron:"ˈsɨɡũdɐ ˈfɐɪ̯ɾɐ", bd:"segunda-feira"},
    {en:"Tuesday", tr:"Salı", pron:"ˈtɛɾsɐ ˈfɐɪ̯ɾɐ", bd:"terça-feira"},
    {en:"Wednesday", tr:"Çarşamba", pron:"ˈkwɐɾtɐ ˈfɐɪ̯ɾɐ", bd:"quarta-feira"},
    {en:"Thursday", tr:"Perşembe", pron:"ˈkĩ̃tɐ ˈfɐɪ̯ɾɐ", bd:"quinta-feira"},
    {en:"Friday", tr:"Cuma", pron:"ˈsɛʃtɐ ˈfɐɪ̯ɾɐ", bd:"sexta-feira"},
    {en:"Saturday", tr:"Cumartesi", pron:"ˈsɐbɐdu", bd:"sábado"},
    {en:"Sunday", tr:"Pazar", pron:"ˈdumĩɡu", bd:"domingo"},
    {en:"January", tr:"Ocak", pron:"ʒɐˈnɐɪ̯ɾu", bd:"janeiro"},
    {en:"February", tr:"Şubat", pron:"fɨˈvɾɐɪ̯ɾu", bd:"fevereiro"},
    {en:"March", tr:"Mart", pron:"ˈmɐɾsu", bd:"março"},
    {en:"April", tr:"Nisan", pron:"ɐˈbɾil", bd:"abril"},
    {en:"May", tr:"Mayıs", pron:"ˈmɐiu̯", bd:"maio"},
    {en:"June", tr:"Haziran", pron:"ˈʒuɲu", bd:"junho"},
    {en:"July", tr:"Temmuz", pron:"ˈʒuʎu", bd:"julho"},
    {en:"August", tr:"Ağustos", pron:"ˈɐɡuʃtu", bd:"agosto"},
    {en:"September", tr:"Eylül", pron:"sɨˈtẽbɾu", bd:"setembro"},
    {en:"October", tr:"Ekim", pron:"uˈtubɾu", bd:"outubro"},
    {en:"November", tr:"Kasım", pron:"nuˈvẽbɾu", bd:"novembro"},
    {en:"December", tr:"Aralık", pron:"dɨˈzẽbɾu", bd:"dezembro"},
    {en:"year", tr:"yıl", pron:"ˈɐnu", bd:"ano"}
  ],
  grammar: [
    {
      title: "Datas em Português Europeu — Tarih Söyleme",
      explanation: "EP'de tarih söylenişi: gün + 'de' + ay + 'de' + yıl. Ay isimleri küçük harfle yazılır. Gün için sıra sayısı sadece 1. gün için kullanılır ('primeiro').",
      table: [
        {pronoun:"1. gün", form:"primeiro de...", example:"Hoje é o primeiro de março.", tr:"Bugün 1 Mart."},
        {pronoun:"Diğer günler", form:"número cardinal", example:"O meu aniversário é a 15 de junho.", tr:"Doğum günüm 15 Haziran."},
        {pronoun:"Yıl ile", form:"gün/mês/ano", example:"Nasceu a 3 de abril de 1990.", tr:"3 Nisan 1990'da doğdu."},
        {pronoun:"Soru", form:"Que dia é hoje?", example:"Hoje é quarta-feira, 7 de fevereiro.", tr:"Bugün Çarşamba, 7 Şubat."},
        {pronoun:"Em + mês", form:"ayda olmak", example:"Em dezembro celebramos o Natal.", tr:"Aralık'ta Noel'i kutlarız."},
        {pronoun:"No ano de", form:"yılda olmak", example:"No ano de 2024 houve eleições.", tr:"2024 yılında seçimler oldu."}
      ],
      note: "EP'de tarih yazımı: 7/2/2024 = 7 de fevereiro de 2024. Portekizce'de aylar küçük harfle yazılır. Türkçe'nin aksine, haftanın günleri de küçük harfle yazılır."
    },
    {
      title: "Dias da Semana — Haftanın Günleri",
      explanation: "Portekizce günlerin isimleri Latince'den gelir ve sayısal sıralamayı takip eder. Pazar (domingo) 1. gün değil tatil günüdür. Hafta içi günleri için 'dias úteis', hafta sonu için 'fim de semana' kullanılır.",
      table: [
        {pronoun:"na segunda-feira", form:"Pazartesi'de", example:"Na segunda-feira tenho reunião.", tr:"Pazartesi toplantım var."},
        {pronoun:"às terças-feiras", form:"her Salı", example:"Às terças-feiras vou ao ginásio.", tr:"Her Salı spor salonuna giderim."},
        {pronoun:"ao fim de semana", form:"hafta sonu", example:"Ao fim de semana descansamos.", tr:"Hafta sonu dinleniriz."},
        {pronoun:"durante a semana", form:"hafta içi", example:"Durante a semana trabalho das 9 às 18.", tr:"Hafta içi 9'dan 18'e çalışırım."},
        {pronoun:"ontem/hoje/amanhã", form:"dün/bugün/yarın", example:"Ontem foi domingo. Hoje é segunda.", tr:"Dün Pazar'dı. Bugün Pazartesi."},
        {pronoun:"próximo/último", form:"gelecek/geçen", example:"Na próxima sexta-feira há feriado.", tr:"Gelecek Cuma tatil var."}
      ],
      note: "Portekizce'de haftanın günleri aslında sayılara dayanır: segunda (ikinci), terça (üçüncü)... feria Latince'de 'bayram günü' anlamına geliyordu."
    },
    {
      title: "Preposições de Tempo — Zaman Edatları",
      explanation: "Zamanı belirtmek için kullanılan edatlar: em (ay/yıl için), a (gün/tarih için), de...a (bir dönem için), há (önce/geçmişten beri).",
      table: [
        {pronoun:"em + mês/ano", form:"ayda/yılda", example:"Em outubro vai de férias.", tr:"Ekim'de tatile gidiyor."},
        {pronoun:"a + dia/data", form:"tarihte", example:"A reunião é a 15 de setembro.", tr:"Toplantı 15 Eylül'de."},
        {pronoun:"de...a", form:"...den...a", example:"Trabalho de segunda a sexta.", tr:"Pazartesiden Cumaya çalışırım."},
        {pronoun:"há + tempo", form:"önce", example:"Há três dias não comi.", tr:"Üç gündür yemedim."},
        {pronoun:"daqui a + tempo", form:"sonra/içinde", example:"Daqui a duas semanas é Natal.", tr:"İki hafta sonra Noel."},
        {pronoun:"desde + data", form:"beri", example:"Vivo em Lisboa desde 2010.", tr:"2010'dan beri Lizbon'da yaşıyorum."}
      ],
      note: "EP'de 'há' çok kullanışlıdır: 'Há dois dias' = 'iki gün önce' veya 'iki gündür'. Fark bağlamdan anlaşılır."
    }
  ],
  speaking: [
    {q:"Que dia da semana é hoje?", a:"Hoje é quinta-feira, 24 de outubro."},
    {q:"Quando é o teu aniversário?", a:"O meu aniversário é a 8 de março. É no mesmo dia que o Dia da Mulher!"},
    {q:"Em que mês costumas ir de férias?", a:"Costumo ir de férias em agosto porque o tempo é melhor."},
    {q:"Qual é o feriado favorito dos portugueses?", a:"O Natal e o 25 de Abril são os feriados mais importantes para os portugueses."},
    {q:"Há quanto tempo estudas português?", a:"Estudo português há seis meses. Ainda tenho muito para aprender!"}
  ],
  dialogues: [
    {
      title: "Marcar um Encontro",
      lines: [
        {speaker:"Beatriz", text:"Olá Filipe! Quando é que podes encontrar-te comigo?"},
        {speaker:"Filipe", text:"Esta semana estou muito ocupado. Que tal na próxima semana?"},
        {speaker:"Beatriz", text:"Na quarta-feira de manhã tenho tempo livre."},
        {speaker:"Filipe", text:"Quarta é difícil. Preferes quinta ou sexta à tarde?"},
        {speaker:"Beatriz", text:"Quinta à tarde está bem! A que horas?"},
        {speaker:"Filipe", text:"Às 15h no café da Baixa. Combinado?"}
      ]
    }
  ],
  listening: {
    text: "Portugal tem vários feriados nacionais ao longo do ano. O 25 de Abril celebra a Revolução dos Cravos de 1974, que restaurou a democracia após 48 anos de ditadura. O 10 de Junho é o Dia de Portugal, coincidindo com a morte de Camões, o maior poeta português. O Natal é celebrado a 25 de dezembro e o Carnaval ocorre geralmente em fevereiro ou março, dependendo da Páscoa.",
    questions: [
      {q:"O que se celebra a 25 de Abril?", a:"A Revolução dos Cravos de 1974."},
      {q:"Qual é o feriado do 10 de Junho?", a:"O Dia de Portugal."},
      {q:"Quando ocorre o Carnaval?", a:"Em fevereiro ou março."}
    ]
  }
};
LESSONS[14] = L14;
