var L24 = {
  words: [
    {en:"bank", tr:"banka", pron:"ˈbɐ̃ku", bd:"banco"},
    {en:"account", tr:"hesap", pron:"ˈkõtɐ", bd:"conta"},
    {en:"current account", tr:"vadesiz hesap", pron:"ˈkõtɐ ˈoɾdiɲɐɾiɐ", bd:"conta à ordem"},
    {en:"savings account", tr:"vadeli hesap", pron:"ˈkõtɐ puˈpɐ̃sɐ", bd:"conta poupança"},
    {en:"ATM/cash machine", tr:"ATM/bankamatik", pron:"multibˈɐ̃ku", bd:"Multibanco"},
    {en:"card", tr:"kart", pron:"ˈkɐɾtɐ̃u̯", bd:"cartão"},
    {en:"debit card", tr:"banka kartı", pron:"ˈkɐɾtɐ̃u̯ dɨ dɨˈbitu", bd:"cartão de débito"},
    {en:"credit card", tr:"kredi kartı", pron:"ˈkɐɾtɐ̃u̯ dɨ ˈkɾɛditu", bd:"cartão de crédito"},
    {en:"transfer", tr:"havale", pron:"tɾɐ̃ˈsfɨɾẽsiɐ", bd:"transferência"},
    {en:"withdrawal", tr:"para çekme", pron:"lɨvɐ̃ˈtɐmẽtu", bd:"levantamento"},
    {en:"deposit", tr:"para yatırma", pron:"dɨˈpozitu", bd:"depósito"},
    {en:"loan", tr:"kredi/borç", pron:"ɨ̃ˈpɾɛʃtimu", bd:"empréstimo"},
    {en:"interest rate", tr:"faiz oranı", pron:"ˈtɐʃɐ dɨ ʒuɾus", bd:"taxa de juros"},
    {en:"invoice", tr:"fatura", pron:"fɐˈtuɾɐ", bd:"fatura"},
    {en:"tax", tr:"vergi", pron:"iˈpuʃtu", bd:"imposto"},
    {en:"VAT", tr:"KDV", pron:"ˈiva", bd:"IVA"},
    {en:"euros", tr:"euro", pron:"ˈɛuɾus", bd:"euros"},
    {en:"budget", tr:"bütçe", pron:"uɾsɐˈmẽtu", bd:"orçamento"},
    {en:"invoice/receipt", tr:"makbuz", pron:"ɾɨˈsibu", bd:"recibo"},
    {en:"homebanking", tr:"İnternet bankacılığı", pron:"ˈoum bˈɐ̃kiŋ", bd:"homebanking"}
  ],
  grammar: [
    {
      title: "O Sistema Bancário Português — Bankacılık Sistemi",
      explanation: "Portekiz'de bankacılık sistemi: Multibanco (ATM ağı), MB Way (mobil ödeme), homebanking. Portekiz Euro bölgesindedir ve bankalar Euribor faiz oranlarına tabidir.",
      table: [
        {pronoun:"Multibanco", form:"ATM/ödeme ağı", example:"Levantei dinheiro no Multibanco.", tr:"ATM'den para çektim."},
        {pronoun:"MB Way", form:"mobil ödeme", example:"Transferi 20 euros via MB Way.", tr:"MB Way ile 20 euro gönderdim."},
        {pronoun:"homebanking", form:"internet bankacılığı", example:"Faço tudo pelo homebanking do meu banco.", tr:"Her şeyi bankanın internet bankacılığıyla yapıyorum."},
        {pronoun:"IVA", form:"KDV", example:"O IVA normal em Portugal é de 23%.", tr:"Portekiz'de normal KDV oranı %23."},
        {pronoun:"Conta à ordem", form:"vadesiz hesap", example:"Tenho conta à ordem no Millennium BCP.", tr:"Millennium BCP'de vadesiz hesabım var."},
        {pronoun:"NIB/IBAN", form:"hesap numarası", example:"Qual é o teu IBAN para a transferência?", tr:"Havale için IBAN'ın nedir?"}
      ],
      note: "Portekiz'de büyük bankalar: Caixa Geral de Depósitos (devlet bankası), Millennium BCP, Novo Banco, Santander Portugal, BPI. Multibanco ağı ATM işlemleri için kullanılır."
    },
    {
      title: "Verbos Bancários — Bankacılık Fiilleri",
      explanation: "Bankacılık işlemlerini ifade eden fiiller.",
      table: [
        {pronoun:"abrir uma conta", form:"hesap açmak", example:"Quero abrir uma conta à ordem.", tr:"Vadesiz hesap açmak istiyorum."},
        {pronoun:"levantar dinheiro", form:"para çekmek", example:"Levantei 200 euros no Multibanco.", tr:"ATM'den 200 euro çektim."},
        {pronoun:"depositar", form:"para yatırmak", example:"Depositei o cheque no balcão.", tr:"Çeki sayaçta yatırdım."},
        {pronoun:"transferir", form:"havale yapmak", example:"Transferi o dinheiro para a tua conta.", tr:"Parayı senin hesabına havale ettim."},
        {pronoun:"pagar a prestações", form:"taksitli ödemek", example:"Pago o carro a prestações mensais.", tr:"Arabayı aylık taksitle ödüyorum."},
        {pronoun:"consultar o saldo", form:"bakiye sorgulamak", example:"Consultei o saldo pelo homebanking.", tr:"İnternet bankacılığıyla bakiyeyi sorguladım."}
      ],
      note: "EP'de 'levantar dinheiro' (para çekmek) kullanılır. BP'de 'sacar dinheiro' denir. 'Multibanco' Portekiz'e özgü ATM ağı adıdır."
    },
    {
      title: "Impostos e Finanças — Vergiler ve Finans",
      explanation: "Portekiz'de vergi sistemi. 'Finanças' (vergi dairesi), 'IRS' (gelir vergisi), 'IRC' (kurumlar vergisi), 'IVA' (KDV), 'IMI' (emlak vergisi).",
      table: [
        {pronoun:"IRS", form:"gelir vergisi", example:"Faço a declaração de IRS em abril.", tr:"Nisan'da gelir vergisi beyanı yapıyorum."},
        {pronoun:"IVA normal", form:"%23 KDV", example:"A maioria dos bens tem IVA de 23%.", tr:"Çoğu malda %23 KDV var."},
        {pronoun:"IVA reduzido", form:"%6 indirimli KDV", example:"Alimentos têm IVA reduzido de 6%.", tr:"Gıda ürünlerinde %6 indirimli KDV var."},
        {pronoun:"NIF", form:"vergi numarası", example:"Preciso do teu NIF para a fatura.", tr:"Fatura için vergi numarana ihtiyacım var."},
        {pronoun:"Portal das Finanças", form:"vergi portalı", example:"Submeti o IRS pelo Portal das Finanças.", tr:"IRS'i Finanças Portalı üzerinden sundum."},
        {pronoun:"reembolso", form:"iade/geri ödeme", example:"Recebi um reembolso do IRS este ano.", tr:"Bu yıl gelir vergisinden iade aldım."}
      ],
      note: "Portekiz'de 'pedir fatura' (fatura istemek) kültürel bir alışkanlıktır. Faturaları e-fatura sistemine bağlı NIF numarasıyla almak, vergi iadesine katkı sağlar."
    }
  ],
  speaking: [
    {q:"Onde fica o Multibanco mais próximo?", a:"Há um Multibanco na esquina, mesmo em frente ao café."},
    {q:"O que é o MB Way?", a:"É uma aplicação de pagamento móvel portuguesa. Com o número de telemóvel transferes dinheiro instantaneamente."},
    {q:"Posso abrir conta num banco português sendo estrangeiro?", a:"Sim, com passaporte e NIF. Muitos bancos permitem abrir conta online também."},
    {q:"Como se paga IVA em Portugal?", a:"O IVA está incluído nos preços ao consumidor. As empresas fazem as declarações trimestralmente."},
    {q:"O que é o NIF?", a:"É o Número de Identificação Fiscal — o número de contribuinte. É necessário para quase todas as transações formais."}
  ],
  dialogues: [
    {
      title: "No Banco",
      lines: [
        {speaker:"Funcionário", text:"Bom dia! Em que posso ajudá-lo?"},
        {speaker:"Cliente", text:"Bom dia! Queria abrir uma conta à ordem. Que documentos preciso?"},
        {speaker:"Funcionário", text:"Precisa do passaporte ou BI, o NIF e um comprovativo de morada."},
        {speaker:"Cliente", text:"Tenho tudo. Também quero ativar o MB Way. Como funciona?"},
        {speaker:"Funcionário", text:"Descarrega a aplicação, associa o cartão e o número de telemóvel. É muito simples."},
        {speaker:"Cliente", text:"E o homebanking também fico com acesso?"},
        {speaker:"Funcionário", text:"Sim, configuramos tudo hoje. Receberá os dados de acesso por SMS."}
      ]
    }
  ],
  listening: [{
    text: "O sistema Multibanco é um dos mais avançados e convenientes da Europa. Criado em 1985, hoje permite além de levantar dinheiro, pagar serviços, recarregar o telemóvel, comprar bilhetes e muito mais — tudo num único terminal. O MB Way, lançado em 2014, revolucionou os pagamentos móveis em Portugal. Portugal tem uma das maiores taxas de utilização de pagamentos eletrónicos da Europa, com o numerário em declínio gradual.",
    questions: [
      {q:"Quando foi criado o Multibanco?", a:"Em 1985."},
      {q:"Quando foi lançado o MB Way?", a:"Em 2014."},
      {q:"O que se pode fazer no Multibanco além de levantar dinheiro?", a:"Pagar serviços, recarregar o telemóvel, comprar bilhetes."}
    ]
  }]
};
LESSONS[24] = L24;
