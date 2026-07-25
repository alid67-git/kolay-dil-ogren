var L6 = {
  words: [
    {en:"house/home", tr:"ev", pron:"ˈkazɐ", bd:"casa"},
    {en:"flat/apartment", tr:"daire", pron:"ɐpɐɾˈtamẽtu", bd:"apartamento"},
    {en:"room", tr:"oda", pron:"ˈkwɐɾtu", bd:"quarto"},
    {en:"living room", tr:"oturma odası", pron:"ˈsalɐ dɨ ɨʃˈtaɾ", bd:"sala de estar"},
    {en:"kitchen", tr:"mutfak", pron:"kuˈziɲɐ", bd:"cozinha"},
    {en:"bathroom", tr:"banyo", pron:"ˈkazɐ dɨ ˈbɐɲu", bd:"casa de banho"},
    {en:"fridge", tr:"buzdolabı", pron:"fɾiɡuˈɾifiku", bd:"frigorífico"},
    {en:"table", tr:"masa", pron:"ˈmezɐ", bd:"mesa"},
    {en:"chair", tr:"sandalye", pron:"ˈkadɐɾɐ", bd:"cadeira"},
    {en:"sofa", tr:"kanepe", pron:"ˈsofɐ", bd:"sofá"},
    {en:"bed", tr:"yatak", pron:"ˈkɐmɐ", bd:"cama"},
    {en:"wardrobe", tr:"dolap", pron:"ɡuɐɾˈdɐɾupɐ", bd:"guarda-roupa"},
    {en:"window", tr:"pencere", pron:"ˈʒɐnɨlɐ", bd:"janela"},
    {en:"door", tr:"kapı", pron:"ˈpoɾtɐ", bd:"porta"},
    {en:"floor", tr:"zemin/kat", pron:"ˈʃɐɨ̯u", bd:"chão"},
    {en:"ceiling", tr:"tavan", pron:"ˈtɨtu", bd:"teto"},
    {en:"stairs", tr:"merdiven", pron:"ɨʃˈkɐdɐʃ", bd:"escadas"},
    {en:"garden", tr:"bahçe", pron:"ˈʒɐɾdĩ", bd:"jardim"},
    {en:"garage", tr:"garaj", pron:"ɡɐˈɾɐʒɨ", bd:"garagem"},
    {en:"lift/elevator", tr:"asansör", pron:"ɨliˈvɐduɾ", bd:"elevador"}
  ],
  grammar: [
    {
      title: "Há / Existe — Var/Yok",
      explanation: "Portekizce'de 'há' ve 'existe/existem' ifadeleri Türkçe 'var/yok' anlamına gelir. 'Há' değişmez; 'existe' tekil, 'existem' çoğul nesneler için kullanılır. Avrupa Portekizcesi'nde olumsuz için 'não há' kullanılır.",
      table: [
        {pronoun:"Olumlu (tek)", form:"Há um quarto.", example:"Há uma casa de banho grande.", tr:"Büyük bir banyo var."},
        {pronoun:"Olumlu (çoğul)", form:"Há dois quartos.", example:"Há três janelas na sala.", tr:"Oturma odasında üç pencere var."},
        {pronoun:"Olumsuz (tek)", form:"Não há elevador.", example:"Não há garagem.", tr:"Garaj yok."},
        {pronoun:"Olumsuz (çoğul)", form:"Não há escadas.", example:"Não há móveis novos.", tr:"Yeni mobilya yok."},
        {pronoun:"Soru", form:"Há...?", example:"Há frigorífico na cozinha?", tr:"Mutfakta buzdolabı var mı?"},
        {pronoun:"Existe/Existem", form:"Existe um jardim.", example:"Existem muitos apartamentos.", tr:"Çok sayıda daire var."}
      ],
      note: "EP'de 'frigorífico' Brezilya Portekizcesi'ndeki 'geladeira'nın karşılığıdır. 'Casa de banho' ise BP'deki 'banheiro'nun karşılığıdır."
    },
    {
      title: "Preposições de Lugar — Yer Edatları",
      explanation: "Yer belirtmek için kullanılan temel edatlar: em (içinde/üzerinde), em cima de (üstünde), em baixo de (altında), ao lado de (yanında), à frente de (önünde), atrás de (arkasında), entre (arasında).",
      table: [
        {pronoun:"em + o = no", form:"no quarto", example:"A cama está no quarto.", tr:"Yatak odada."},
        {pronoun:"em + a = na", form:"na cozinha", example:"O frigorífico fica na cozinha.", tr:"Buzdolabı mutfakta."},
        {pronoun:"em cima de", form:"sobre/em cima", example:"O livro está em cima da mesa.", tr:"Kitap masanın üstünde."},
        {pronoun:"em baixo de", form:"debaixo de", example:"O gato está debaixo da cadeira.", tr:"Kedi sandalyenin altında."},
        {pronoun:"ao lado de", form:"ao lado", example:"O sofá fica ao lado da janela.", tr:"Kanepe pencerenin yanında."},
        {pronoun:"entre", form:"entre X e Y", example:"A mesa fica entre a cozinha e a sala.", tr:"Masa mutfak ile salon arasında."}
      ],
      note: "EP'de 'em cima de' ve 'debaixo de' günlük konuşmada yaygın kullanılır. 'Sobre' daha resmi bağlamlarda tercih edilir."
    },
    {
      title: "Verbo TER — Sahip Olmak (Ev Bağlamında)",
      explanation: "Avrupa Portekizcesi'nde 'ter' fiili sahip olmak anlamında kullanılır. Tu (sen) için 'tens', ele/ela için 'tem', nós için 'temos', vós için 'tendes', eles için 'têm'.",
      table: [
        {pronoun:"eu", form:"tenho", example:"Eu tenho um apartamento em Lisboa.", tr:"Lizbon'da bir dairem var."},
        {pronoun:"tu", form:"tens", example:"Tu tens uma casa de banho grande?", tr:"Büyük bir banyonuz var mı?"},
        {pronoun:"ele/ela", form:"tem", example:"Ela tem um jardim bonito.", tr:"Onun güzel bir bahçesi var."},
        {pronoun:"nós", form:"temos", example:"Nós temos dois quartos.", tr:"İki odamız var."},
        {pronoun:"vós", form:"tendes", example:"Vós tendes garagem?", tr:"Garajınız var mı?"},
        {pronoun:"eles/elas", form:"têm", example:"Eles têm um apartamento com elevador.", tr:"Asansörlü bir daireleri var."}
      ],
      note: "Avrupa Portekizcesi'nde 'tu' (sen) günlük kullanımda çok yaygındır. 'Você' daha resmi ya da Brezilya Portekizcesi'ne özgüdür."
    }
  ],
  speaking: [
    {q:"Onde fica a casa de banho?", a:"A casa de banho fica no fim do corredor."},
    {q:"A tua casa tem jardim?", a:"Sim, temos um jardim pequeno com flores."},
    {q:"Quantos quartos tem o apartamento?", a:"O apartamento tem três quartos e duas casas de banho."},
    {q:"Há elevador no prédio?", a:"Não, não há elevador. Há apenas escadas."},
    {q:"O frigorífico está na cozinha?", a:"Sim, o frigorífico fica junto ao fogão."}
  ],
  dialogues: [
    {
      title: "Apartamento para Arrendar",
      lines: [
        {speaker:"Senhor Costa", text:"Bom dia! Venho ver o apartamento para arrendar."},
        {speaker:"Senhoria", text:"Bom dia! Entre, por favor. O apartamento tem três assoalhadas."},
        {speaker:"Senhor Costa", text:"Há casa de banho com banheira ou duche?"},
        {speaker:"Senhoria", text:"Tem duche. A casa de banho fica ao lado do quarto principal."},
        {speaker:"Senhor Costa", text:"A cozinha tem frigorífico e fogão incluídos?"},
        {speaker:"Senhoria", text:"Sim, tem frigorífico, fogão e máquina de lavar. Tudo incluído."}
      ]
    }
  ],
  listening: {
    text: "O apartamento fica no quinto andar de um prédio com elevador, no centro de Lisboa. Tem três quartos, uma sala de estar ampla e duas casas de banho. A cozinha está equipada com frigorífico, fogão e máquina de lavar loiça. Há ainda uma varanda com vista para o Tejo. O condomínio tem garagem e jardim comum.",
    questions: [
      {q:"Em que andar fica o apartamento?", a:"No quinto andar."},
      {q:"Quantas casas de banho tem?", a:"Duas casas de banho."},
      {q:"O que se vê da varanda?", a:"O rio Tejo."}
    ]
  }
};
LESSONS[6] = L6;
