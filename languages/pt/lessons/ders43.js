var L43 = {
  words: [
    {en:"economy", tr:"ekonomi", pron:"ikunuˈmiɐ", bd:"a economia"},
    {en:"market", tr:"pazar / piyasa", pron:"mɨɾˈkɐdu", bd:"o mercado"},
    {en:"company / firm", tr:"şirket", pron:"ẽpɾeˈzɐ", bd:"a empresa"},
    {en:"profit", tr:"kâr", pron:"ˈluʃɾu", bd:"o lucro"},
    {en:"loss", tr:"zarar", pron:"pɾeˈʒuizu", bd:"o prejuízo"},
    {en:"investment", tr:"yatırım", pron:"ĩveʃtiˈmẽtu", bd:"o investimento"},
    {en:"tax", tr:"vergi", pron:"ĩˈpuʃtu", bd:"o imposto"},
    {en:"VAT", tr:"KDV", pron:"ivɐ", bd:"o IVA"},
    {en:"interest rate", tr:"faiz oranı", pron:"ˈtɐʃɐ dɨ ʒuɾu", bd:"a taxa de juro"},
    {en:"unemployment", tr:"işsizlik", pron:"deˈzẽpɾeɡu", bd:"o desemprego"},
    {en:"salary / wage", tr:"maaş", pron:"sɐˈlaɾiu", bd:"o salário"},
    {en:"minimum wage", tr:"asgari ücret", pron:"sɐˈlaɾiu miˈnimu", bd:"o salário mínimo"},
    {en:"inflation", tr:"enflasyon", pron:"ĩflɐˈsãw", bd:"a inflação"},
    {en:"export", tr:"ihracat", pron:"iʃpuɾˈtɐsãw", bd:"a exportação"},
    {en:"import", tr:"ithalat", pron:"impuɾˈtɐsãw", bd:"a importação"},
    {en:"budget", tr:"bütçe", pron:"uɾˈsɐmẽtu", bd:"o orçamento"},
    {en:"revenue / income", tr:"gelir", pron:"ɾɨˈditu", bd:"o rendimento"},
    {en:"invoice", tr:"fatura", pron:"ˈfɐtuɾɐ", bd:"a fatura"},
    {en:"shareholder", tr:"hissedar", pron:"ɐsiuˈniʃtɐ", bd:"o/a acionista"},
    {en:"stock exchange", tr:"borsa", pron:"ˈbuɾsɐ", bd:"a bolsa"}
  ],
  grammar: [
    {
      title: "Futuro do Conjuntivo (Gelecek Zaman Dilek Kipi)",
      explanation: "Bu kip Portekizcenin kendine özgü özelliğidir ve BP'de de kullanılır. 'Quando', 'se', 'enquanto', 'assim que', 'logo que' gibi zaman ve koşul bağlaçlarıyla kullanılır.",
      table: [
        {pronoun:"eu", form:"falar / vender / partir", example:"Quando falar com o diretor, aviso-te.", tr:"Müdürle konuştuğumda sana haber veririm."},
        {pronoun:"tu", form:"falares / venderes / partires", example:"Se venderes a empresa, ganhas muito.", tr:"Şirketi satarsan çok kazanırsın."},
        {pronoun:"ele/ela", form:"falar / vender / partir", example:"Assim que ele chegar, começamos.", tr:"O gelir gelmez, başlarız."},
        {pronoun:"nós", form:"falarmos / vendermos / partirmos", example:"Logo que investirmos, crescemos.", tr:"Yatırım yapar yapmaz büyürüz."},
        {pronoun:"eles/elas", form:"falarem / venderem / partirem", example:"Enquanto trabalharem, receberão.", tr:"Çalıştıkları sürece alacaklar."},
        {pronoun:"irregular: ser/ir", form:"for / fores / for", example:"Se for possível, faça-o hoje.", tr:"Mümkünse bugün yapın."}
      ],
      note: "Futuro do conjuntivo, İngilizce veya Türkçede karşılığı olmayan bir kiptir. 'Quando vier' (geldiğinde, geleceğinde), 'se vier' (gelirse) gibi kullanılır. Present tense yerine kullanmak hata verir."
    },
    {
      title: "Discurso Indirecto (Dolaylı Anlatım)",
      explanation: "Dolaylı anlatımda zaman uyumu (consecutio temporum) önemlidir. Avrupa Portekizcesinde bu kurallar titizlikle uygulanır.",
      table: [
        {pronoun:"presente → imperfeito", form:"diz que → disse que", example:"Ele diz que vem. → Ele disse que vinha.", tr:"Geliyor diyor. → Geliyordu dedi."},
        {pronoun:"futuro → condicional", form:"dirá → disse que", example:"Ela dirá sim. → Ela disse que diria sim.", tr:"Evet diyecek. → Evet diyeceğini söyledi."},
        {pronoun:"imperativo → infinitivo", form:"Vem! → pediu-lhe que", example:"'Vem!' → Pediu-lhe que viesse.", tr:"'Gel!' → Ondan gelmesini istedi."},
        {pronoun:"agora → naquele momento", form:"agora → então", example:"'Agora estou ocupado.' → Disse que então estava ocupado.", tr:"'Şimdi meşgulüm.' → O an meşgul olduğunu söyledi."},
        {pronoun:"hoje → naquele dia", form:"hoje → naquele dia", example:"'Hoje assino.' → Disse que naquele dia assinava.", tr:"'Bugün imzalıyorum.' → O gün imzalayacağını söyledi."},
        {pronoun:"aqui → ali/lá", form:"aqui → ali", example:"'Trabalho aqui.' → Disse que trabalhava ali.", tr:"'Burada çalışıyorum.' → Orada çalıştığını söyledi."}
      ],
      note: "Dolaylı anlatımda yer ve zaman zarfları da değişir: aqui→ali/lá, agora→então/naquele momento, hoje→naquele dia, amanhã→no dia seguinte."
    },
    {
      title: "Números Grandes e Percentagens (Büyük Sayılar ve Yüzdeler)",
      explanation: "Ekonomi konuşmalarında büyük sayılar ve yüzdeler çok kullanılır. EP ve BP'de bazı sayı ifadeleri farklıdır.",
      table: [
        {pronoun:"mil", form:"1.000", example:"O salário mínimo é de mil euros.", tr:"Asgari ücret bin eurodur."},
        {pronoun:"dez mil", form:"10.000", example:"A empresa tem dez mil funcionários.", tr:"Şirketin on bin çalışanı var."},
        {pronoun:"cem mil", form:"100.000", example:"O apartamento custa cem mil euros.", tr:"Daire yüz bin euroya mal olur."},
        {pronoun:"um milhão", form:"1.000.000", example:"O lucro foi de um milhão de euros.", tr:"Kâr bir milyon euro oldu."},
        {pronoun:"percentagem", form:"por cento (%)", example:"O IVA é de vinte e três por cento.", tr:"KDV yüzde yirmi üçtür."},
        {pronoun:"vírgula (décimal)", form:",", example:"A taxa é de dois vírgula cinco por cento.", tr:"Oran yüzde iki virgül beştir."}
      ],
      note: "EP'de ondalık ayırıcı virgüldür (,) nokta değil: 2,5% = dois vírgula cinco por cento. Binler için nokta kullanılır: 1.000 = mil. BP aynı kuralı kullanır."
    }
  ],
  speaking: [
    {q:"Qual é o salário mínimo em Portugal atualmente?", a:"O salário mínimo nacional em Portugal tem vindo a aumentar progressivamente, atingindo os 870 euros mensais em 2024."},
    {q:"O que é o IVA e qual é a taxa normal?", a:"O IVA é o Imposto sobre o Valor Acrescentado. A taxa normal é de 23%, mas há taxas reduzidas de 13% e 6% para certos produtos."},
    {q:"Portugal é um país desenvolvido economicamente?", a:"Portugal é um país de rendimento alto, membro da zona euro desde 2002, embora tenha sofrido uma crise económica grave entre 2010 e 2014."},
    {q:"Quais são as principais exportações portuguesas?", a:"Portugal exporta principalmente automóveis e componentes, máquinas, cortiça, vinho, calçado, têxteis e produtos alimentares."},
    {q:"O que é necessário para criar uma empresa em Portugal?", a:"É necessário ter um NIF, escolher a forma jurídica, registar na Conservatória do Registo Comercial e, se aplicável, inscrever-se na Segurança Social."}
  ],
  dialogues: [
    {
      title: "Reunião de Negócios",
      lines: [
        {speaker:"Diretor/a", text:"Bom dia a todos. Vamos analisar os resultados do último trimestre."},
        {speaker:"Contabilista", text:"As receitas cresceram 12% face ao mesmo período do ano anterior. O lucro líquido aumentou 8%."},
        {speaker:"Diretor/a", text:"Muito bem. E quanto às despesas? Conseguimos reduzi-las?"},
        {speaker:"Gestor/a", text:"Reduzimos os custos operacionais em 5%, principalmente através da digitalização de processos."},
        {speaker:"Diretor/a", text:"Excelente. Qual é a proposta para o investimento no próximo trimestre?"},
        {speaker:"Contabilista", text:"Propomos investir 15% das receitas em tecnologia e 10% em formação de pessoal."}
      ]
    },
    {
      title: "No Balcão do Banco",
      lines: [
        {speaker:"Cliente", text:"Boa tarde. Queria obter informações sobre um crédito para o meu negócio."},
        {speaker:"Bancário/a", text:"Com certeza. Que tipo de negócio tem e de que montante necessita?"},
        {speaker:"Cliente", text:"Tenho uma pequena empresa de construção e preciso de 50.000 euros para equipamento."},
        {speaker:"Bancário/a", text:"Temos várias linhas de crédito para PME. A taxa de juro atual está entre 4% e 6% ao ano."},
        {speaker:"Cliente", text:"E quais são os documentos necessários?"},
        {speaker:"Bancário/a", text:"Precisa da declaração de IRS dos últimos dois anos, os balancetes da empresa e o plano de negócios."}
      ]
    }
  ],
  listening: [{
    text: "A economia portuguesa passou por grandes transformações nas últimas décadas. Após a crise financeira de 2010 a 2014, Portugal implementou um programa de ajustamento económico que resultou numa recuperação notável. O turismo tornou-se um dos pilares da economia, representando uma parte significativa do PIB. O setor tecnológico tem crescido rapidamente, com Lisboa a tornar-se um polo de startups europeias — o Web Summit, o maior evento de tecnologia do mundo, realiza-se em Lisboa desde 2016. As principais empresas exportadoras incluem a Autoeuropa, que produz automóveis Volkswagen em Palmela, e várias empresas do setor corticeiro, já que Portugal produz mais de metade da cortiça mundial.",
    questions: [
      {q:"Quando ocorreu a crise financeira em Portugal?", a:"A crise financeira ocorreu entre 2010 e 2014."},
      {q:"Desde quando se realiza o Web Summit em Lisboa?", a:"O Web Summit realiza-se em Lisboa desde 2016."},
      {q:"O que produz a Autoeuropa em Palmela?", a:"A Autoeuropa produz automóveis Volkswagen em Palmela."}
    ]
  }]
};
LESSONS[43] = L43;
