var L8 = {
  words: [
    {en:"restaurant", tr:"restoran", pron:"ʁɨʃtɔˈɾɐ̃tu", bd:"restaurante"},
    {en:"waiter (m)", tr:"erkek garson", pron:"ɨ̃pɾɨˈɡadu dɨ ˈmezɐ", bd:"empregado de mesa"},
    {en:"waitress (f)", tr:"kadın garson", pron:"ɨ̃pɾɨˈɡadɐ dɨ ˈmezɐ", bd:"empregada de mesa"},
    {en:"menu", tr:"menü/yemek listesi", pron:"ˈɛmɨntɐ", bd:"ementa"},
    {en:"starter", tr:"başlangıç", pron:"ɨ̃ˈtɾadɐ", bd:"entrada"},
    {en:"main course", tr:"ana yemek", pron:"ˈpɾatu pɾĩˈsipɐl", bd:"prato principal"},
    {en:"dessert", tr:"tatlı", pron:"suˈbɾɨmɨzɐ", bd:"sobremesa"},
    {en:"bill/check", tr:"hesap", pron:"ˈkɔntɐ", bd:"conta"},
    {en:"tip", tr:"bahşiş", pron:"goˈɾʒɨtɐ", bd:"gorjeta"},
    {en:"reservation", tr:"rezervasyon", pron:"ɾɨzɨɾˈvɐ", bd:"reserva"},
    {en:"table", tr:"masa", pron:"ˈmezɐ", bd:"mesa"},
    {en:"knife", tr:"bıçak", pron:"ˈfɐkɐ", bd:"faca"},
    {en:"fork", tr:"çatal", pron:"ˈɡɐɾfu", bd:"garfo"},
    {en:"spoon", tr:"kaşık", pron:"ˈkolɛɾ", bd:"colher"},
    {en:"plate", tr:"tabak", pron:"ˈpɾatu", bd:"prato"},
    {en:"glass", tr:"bardak", pron:"ˈkɔpu", bd:"copo"},
    {en:"napkin", tr:"peçete", pron:"ɡɐɾˈdɐnɐ̃pu", bd:"guardanapo"},
    {en:"half portion", tr:"yarım porsiyon", pron:"ˈmɐɨ̯u dɨ ˈdozɨ", bd:"meia dose"},
    {en:"full portion", tr:"tam porsiyon", pron:"ˈdozɨ ʃɨtu", bd:"dose (certa)"},
    {en:"house wine", tr:"ev şarabı", pron:"ˈviɲu dɐ ˈkazɐ", bd:"vinho da casa"}
  ],
  grammar: [
    {
      title: "Pedir — İstemek/Sipariş Vermek",
      explanation: "Restoranda sipariş verirken 'querer' (istemek) veya 'pedir' (sipariş vermek/istemek) fiilleri kullanılır. Kibar istek için 'queria' (şimdiki zaman yerine geçmiş şekli, nazik anlamda) tercih edilir.",
      table: [
        {pronoun:"Kibar istek", form:"Queria...", example:"Queria uma meia dose de bacalhau.", tr:"Yarım porsiyon morina balığı istiyorum."},
        {pronoun:"Doğrudan istek", form:"Quero...", example:"Quero a conta, por favor.", tr:"Hesabı istiyorum, lütfen."},
        {pronoun:"Sipariş", form:"Traga-me...", example:"Traga-me um copo de vinho tinto.", tr:"Bana bir bardak kırmızı şarap getirin."},
        {pronoun:"Soru", form:"Pode trazer...?", example:"Pode trazer a ementa, por favor?", tr:"Menüyü getirebilir misiniz?"},
        {pronoun:"Tavsiye", form:"O que recomenda?", example:"O que recomenda hoje?", tr:"Bugün ne tavsiye edersiniz?"},
        {pronoun:"Kontrol", form:"Está incluído...?", example:"O serviço está incluído na conta?", tr:"Servis ücreti hesaba dahil mi?"}
      ],
      note: "EP'de 'empregado/a de mesa' kullanılır, Brezilya Portekizcesi'ndeki 'garçom/garçonete' değil. 'Ementa' ise BP'deki 'cardápio'nun karşılığıdır."
    },
    {
      title: "Pronomes Pessoais Oblíquos — Nesne Zamirleri (EP Kuralı)",
      explanation: "Avrupa Portekizcesi'nin en önemli özelliklerinden biri zamirlerin fiilden SONRA gelmesidir (ênclise). Olumlu cümlelerde 'me, te, lhe, nos, vos, lhes' fiil + '-' ile bağlanır.",
      table: [
        {pronoun:"me (beni/bana)", form:"verbo-me", example:"Traga-me a conta.", tr:"Hesabı getirin (bana)."},
        {pronoun:"te (seni/sana)", form:"verbo-te", example:"Dou-te o menu.", tr:"Sana menüyü veriyorum."},
        {pronoun:"lhe (ona)", form:"verbo-lhe", example:"Sirvo-lhe o vinho.", tr:"Ona şarabı servis ediyorum."},
        {pronoun:"nos (bize)", form:"verbo-nos", example:"Traz-nos dois copos.", tr:"Bize iki bardak getir."},
        {pronoun:"Olumsuzda önce", form:"não me + verbo", example:"Não me traga sobremesa.", tr:"Bana tatlı getirme."},
        {pronoun:"Soru + enclise", form:"verbo-me?", example:"Pode servir-me mais pão?", tr:"Bana daha fazla ekmek getirebilir misiniz?"}
      ],
      note: "BP'de 'Me traz a conta' denilirken EP'de 'Traga-me a conta' denir. Bu EP'nin en belirgin özelliklerinden biridir!"
    },
    {
      title: "Modo Imperativo — Emir Kipi",
      explanation: "Restoranda emir/rica kipi sık kullanılır. Emir kipi olumlu için: tu (sen) için -a/-e ekini çıkar; você/formal için subjuntivo kullan.",
      table: [
        {pronoun:"tu — falar", form:"fala!", example:"Fala mais devagar, por favor.", tr:"Daha yavaş konuş, lütfen."},
        {pronoun:"tu — trazer", form:"traz!", example:"Traz-me o sal, por favor.", tr:"Bana tuzu getir, lütfen."},
        {pronoun:"você — trazer", form:"traga!", example:"Traga a ementa, se faz favor.", tr:"Menüyü getirin, lütfen."},
        {pronoun:"você — sentar", form:"sente-se!", example:"Sente-se aqui, por favor.", tr:"Buraya oturun, lütfen."},
        {pronoun:"você — esperar", form:"espere!", example:"Espere um momento, por favor.", tr:"Bir dakika bekleyin, lütfen."},
        {pronoun:"Olumsuz (não)", form:"não + subj.", example:"Não se preocupe com a gorjeta.", tr:"Bahşiş konusunda endişelenmeyin."}
      ],
      note: "Portekiz'de bahşiş zorunlu değildir ancak iyi servis için %5-10 bırakmak nazikçe kabul edilir."
    }
  ],
  speaking: [
    {q:"Tem mesa para dois, para esta noite?", a:"Sim, temos. Tem reserva ou vem sem reserva?"},
    {q:"O que é o prato do dia?", a:"O prato do dia é bacalhau à Brás com salada verde."},
    {q:"Posso pedir meia dose?", a:"Claro! As meias doses estão disponíveis para todos os pratos."},
    {q:"A conta, se faz favor?", a:"Já trago. Pagam em conjunto ou separado?"},
    {q:"Aceita cartão Multibanco?", a:"Sim, aceitamos MB, Visa e Mastercard."}
  ],
  dialogues: [
    {
      title: "Jantar no Restaurante",
      lines: [
        {speaker:"Empregado", text:"Boa noite! Bem-vindos. Têm reserva?"},
        {speaker:"Ana", text:"Boa noite! Temos reserva para dois. Nome: Ana Ferreira."},
        {speaker:"Empregado", text:"Encontrei. Por favor, sigam-me. Aqui está a ementa."},
        {speaker:"Rui", text:"Obrigado. O que nos recomenda hoje?"},
        {speaker:"Empregado", text:"O bacalhau à Gomes de Sá está excelente. Para beber, o vinho verde da casa é uma boa escolha."},
        {speaker:"Ana", text:"Ótimo! Queria o bacalhau. E traga-nos uma garrafa do vinho da casa."}
      ]
    }
  ],
  listening: [{
    text: "Em Portugal, almoçar e jantar fora é um hábito muito comum. Os restaurantes normalmente servem uma ementa de almoço com prato do dia, bebida e sobremesa a um preço fixo acessível. Ao jantar, é habitual começar com uma entrada, depois o prato principal e terminar com sobremesa ou café. A gorjeta não é obrigatória, mas deixar alguns euros para o empregado é sinal de satisfação. O pagamento com Multibanco é aceite em quase todos os restaurantes.",
    questions: [
      {q:"O que inclui o menu de almoço?", a:"Prato do dia, bebida e sobremesa."},
      {q:"Como se chama o serviço de pagamento típico português?", a:"Multibanco."},
      {q:"A gorjeta é obrigatória em Portugal?", a:"Não, não é obrigatória."}
    ]
  }]
};
LESSONS[8] = L8;
