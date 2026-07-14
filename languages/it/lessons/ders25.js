// ders25.js — Italian Lesson 25: Cibo e bevande (Yiyecekler ve İçecekler)
const L25 = {
  words:[
    {id:'w1',en:'la pasta',ro:'la pasta',tr:'makarna',examples:[{it:'La pasta al dente è fondamentale nella cucina italiana.',tr:'Al dente makarna İtalyan mutfağında temel.',bd:[{ro:'La pasta al dente',tr:'al dente makarna'},{ro:'fondamentale',tr:'temel/vazgeçilmez'}]}]},
    {id:'w2',en:'la pizza',ro:'la pizza',tr:'pizza',examples:[{it:'La vera pizza napoletana si cuoce in un forno a legna.',tr:'Gerçek Napoliten pizza odun ateşli fırında pişirilir.',bd:[{ro:'La vera pizza napoletana',tr:'gerçek Napoliten pizza'},{ro:'un forno a legna',tr:'odun ateşli fırın'}]}]},
    {id:'w3',en:'il risotto',ro:'il risotto',tr:'risotto (İtalyan pirinç yemeği)',examples:[{it:'Il risotto alla milanese ha lo zafferano ed è di colore giallo.',tr:'Milano usulü risotto safran içerir ve sarı renklidir.',bd:[{ro:'Il risotto alla milanese',tr:'Milano usulü risotto'},{ro:'lo zafferano',tr:'safran'}]}]},
    {id:'w4',en:'la carne / il pesce',ro:'la carne',tr:'et / balık',examples:[{it:'Preferisci la carne o il pesce? — Preferisco il pesce.',tr:'Eti mi yoksa balığı mı tercih edersin? — Balığı tercih ederim.',bd:[{ro:'Preferisci la carne o il pesce?',tr:'et mi balık mı tercih edersin?'},{ro:'Preferisco il pesce',tr:'balığı tercih ederim'}]}]},
    {id:'w5',en:'la verdura / la frutta',ro:'la verdura',tr:'sebze / meyve',examples:[{it:'Mangio molta frutta e verdura fresca ogni giorno.',tr:'Her gün çok taze meyve ve sebze yerim.',bd:[{ro:'molta frutta e verdura fresca',tr:'çok taze meyve ve sebze'},{ro:'ogni giorno',tr:'her gün'}]}]},
    {id:'w6',en:'il formaggio',ro:'il formaggio',tr:'peynir',examples:[{it:'Il parmigiano reggiano è il formaggio più famoso d\'Italia.',tr:'Parmigiano reggiano İtalya\'nın en ünlü peyniri.',bd:[{ro:'Il parmigiano reggiano',tr:'parmesan peyniri'},{ro:'il formaggio più famoso d\'Italia',tr:'İtalya\'nın en ünlü peyniri'}]}]},
    {id:'w7',en:'il pane',ro:'il pane',tr:'ekmek',examples:[{it:'In Italia il pane fresco si compra ogni mattina dal fornaio.',tr:'İtalya\'da taze ekmek her sabah fırıncıdan alınır.',bd:[{ro:'il pane fresco',tr:'taze ekmek'},{ro:'dal fornaio',tr:'fırıncıdan'}]}]},
    {id:'w8',en:'il dolce / il dessert',ro:'il dolce',tr:'tatlı / desert',examples:[{it:'Per dessert prendo il tiramisù, è il dolce italiano più famoso.',tr:'Tatlı olarak tiramisù alıyorum, en ünlü İtalyan tatlısı.',bd:[{ro:'Per dessert',tr:'tatlı olarak'},{ro:'il dolce italiano più famoso',tr:'en ünlü İtalyan tatlısı'}]}]},
    {id:'w9',en:'il caffè / l\'espresso',ro:'il caffè',tr:'kahve / espresso',examples:[{it:'Gli italiani bevono l\'espresso al banco, in piedi.',tr:'İtalyanlar espressoyu tezgahta ayakta içer.',bd:[{ro:'bevono l\'espresso al banco',tr:'espressoyu tezgahta içer'},{ro:'in piedi',tr:'ayakta'}]}]},
    {id:'w10',en:'il vino',ro:'il vino',tr:'şarap',examples:[{it:'Il Chianti è un vino rosso toscano molto apprezzato nel mondo.',tr:'Chianti dünyada çok beğenilen bir Toskana kırmızı şarabı.',bd:[{ro:'Il Chianti',tr:'Chianti şarabı'},{ro:'un vino rosso toscano',tr:'bir Toskana kırmızı şarabı'}]}]},
    {id:'w11',en:'l\'acqua minerale',ro:'l\'acqua minerale',tr:'maden suyu',examples:[{it:'Vuole l\'acqua naturale o frizzante?',tr:'Doğal mı yoksa gazlı maden suyu mu ister?',bd:[{ro:'l\'acqua naturale',tr:'doğal maden suyu'},{ro:'frizzante',tr:'gazlı'}]}]},
    {id:'w12',en:'l\'antipasto',ro:'l\'antipasto',tr:'başlangıç yemeği / meze',examples:[{it:'Come antipasto abbiamo i salumi e le olive.',tr:'Başlangıç olarak salam ve zeytin var.',bd:[{ro:'Come antipasto',tr:'başlangıç olarak'},{ro:'i salumi e le olive',tr:'salam ve zeytin'}]}]},
    {id:'w13',en:'il primo piatto',ro:'il primo piatto',tr:'birinci yemek (pasta/risotto)',examples:[{it:'Come primo, prendo le tagliatelle al ragù.',tr:'Birinci yemek olarak ragù soslu tagliatelle alıyorum.',bd:[{ro:'Come primo',tr:'birinci yemek olarak'},{ro:'le tagliatelle al ragù',tr:'ragù soslu tagliatelle'}]}]},
    {id:'w14',en:'il secondo piatto',ro:'il secondo piatto',tr:'ikinci yemek (et/balık)',examples:[{it:'Come secondo prendo il branzino alla griglia con verdure.',tr:'İkinci yemek olarak ızgara levrek ve sebze alıyorum.',bd:[{ro:'Come secondo',tr:'ikinci yemek olarak'},{ro:'il branzino alla griglia',tr:'ızgara levrek'}]}]},
    {id:'w15',en:'il contorno',ro:'il contorno',tr:'garnitür / yan yemek',examples:[{it:'Come contorno prendo le patate arrosto e l\'insalata mista.',tr:'Garnitür olarak fırın patates ve karışık salata alıyorum.',bd:[{ro:'Come contorno',tr:'garnitür olarak'},{ro:'le patate arrosto',tr:'fırın patates'}]}]},
    {id:'w16',en:'la salsa / il sugo',ro:'la salsa',tr:'sos',examples:[{it:'La salsa di pomodoro è la base di molti piatti italiani.',tr:'Domates sosu pek çok İtalyan yemeğinin temelidir.',bd:[{ro:'La salsa di pomodoro',tr:'domates sosu'},{ro:'la base di molti piatti italiani',tr:'pek çok İtalyan yemeğinin temeli'}]}]},
    {id:'w17',en:'l\'olio d\'oliva',ro:'l\'olio d\'oliva',tr:'zeytinyağı',examples:[{it:'L\'olio d\'oliva extravergine è fondamentale nella dieta mediterranea.',tr:'Sızma zeytinyağı Akdeniz diyetinin temelidir.',bd:[{ro:'L\'olio d\'oliva extravergine',tr:'sızma zeytinyağı'},{ro:'la dieta mediterranea',tr:'Akdeniz diyeti'}]}]},
    {id:'w18',en:'il gelato',ro:'il gelato',tr:'dondurma',examples:[{it:'Il gelato artigianale italiano è diverso dal normale ice cream.',tr:'İtalyan el yapımı dondurması normal dondurmayla farklı.',bd:[{ro:'Il gelato artigianale',tr:'el yapımı dondurma'},{ro:'diverso dal normale ice cream',tr:'normal dondurmayla farklı'}]}]},
    {id:'w19',en:'la colazione',ro:'la colazione',tr:'kahvaltı',examples:[{it:'La colazione italiana è dolce: cappuccino e brioche.',tr:'İtalyan kahvaltısı tatlıdır: kapuçino ve brioche.',bd:[{ro:'La colazione italiana è dolce',tr:'İtalyan kahvaltısı tatlı'},{ro:'cappuccino e brioche',tr:'kapuçino ve brioche'}]}]},
    {id:'w20',en:'il conto / il menu',ro:'il conto',tr:'hesap / menü',examples:[{it:'Possiamo avere il conto, per favore? Paghiamo separati.',tr:'Hesabı alabilir miyiz, lütfen? Ayrı ayrı ödeyeceğiz.',bd:[{ro:'Possiamo avere il conto?',tr:'hesabı alabilir miyiz?'},{ro:'Paghiamo separati',tr:'ayrı ayrı ödüyoruz'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Restoranda Sipariş Verme',
      title_en:'Ordering at a Restaurant',
      explanation:'İtalyan restoranında sipariş için kullanılan temel yapılar.',
      table:[
        {pronoun:'Vorrei',form:'istiyorum (kibarca)',example:'Vorrei la pasta carbonara, per favore.',tr:'Makarna carbonara istiyorum, lütfen.'},
        {pronoun:'Prendo',form:'alıyorum',example:'Come primo prendo le penne all\'arrabbiata.',tr:'Birinci yemek olarak penne arrabbiata alıyorum.'},
        {pronoun:'Mi porta',form:'getirir misiniz?',example:'Mi porta il menu dei vini?',tr:'Şarap listesini getirir misiniz?'},
        {pronoun:'Cosa consiglia?',form:'ne tavsiye edersiniz?',example:'Cosa consiglia come secondo piatto?',tr:'İkinci yemek olarak ne tavsiye edersiniz?'}
      ],
      note:'İtalyan restoranında tam akış: antipasto → primo → secondo + contorno → dolce → caffè. "Il coperto" = masa ücreti (genelde 1-3€).'
    },
    {
      id:'g2',
      title:'Beğeni ve Hoşlanma: Mi Piace / Non Mi Piace',
      title_en:'Likes and Dislikes: Mi Piace / Non Mi Piace',
      explanation:'"Mi piace" = beğeniyorum/seviyorum (tekil), "Mi piacciono" = beğeniyorum (çoğul).',
      table:[
        {pronoun:'mi piace',form:'tekil şey sevmek',example:'Mi piace molto la pizza margherita.',tr:'Margherita pizzayı çok seviyorum.'},
        {pronoun:'mi piacciono',form:'çoğul şey sevmek',example:'Mi piacciono i dolci italiani.',tr:'İtalyan tatlılarını seviyorum.'},
        {pronoun:'non mi piace',form:'sevmemek',example:'Non mi piace il pesce crudo.',tr:'Çiğ balık sevmiyorum.'},
        {pronoun:'adoro / odio',form:'çok sevmek / nefret etmek',example:'Adoro il tiramisù! Odio il fegato.',tr:'Tiramisù\'yu çok seviyorum! Ciğerden nefret ederim.'}
      ],
      note:'"Ti piace...?" (sever misin?) / "Le piace...?" (kibarca: sever misiniz?) — soru formu.'
    },
    {
      id:'g3',
      title:'Miktar ve Porsiyonlar',
      title_en:'Quantities and Portions',
      explanation:'Yiyecek alırken miktar ifade etmek için kullanılan yapılar.',
      table:[
        {pronoun:'un po\' di',form:'biraz',example:'Vorrei un po\' di parmigiano grattugiato.',tr:'Biraz rendelenmiş parmesan istiyorum.'},
        {pronoun:'un chilo di',form:'bir kilo',example:'Un chilo di pomodori freschi, per favore.',tr:'Bir kilo taze domates, lütfen.'},
        {pronoun:'una porzione di',form:'bir porsiyon',example:'Una porzione di lasagne e un\'insalata.',tr:'Bir porsiyon lazanya ve bir salata.'},
        {pronoun:'mezzo / mezza',form:'yarım',example:'Mezzo litro di vino della casa.',tr:'Yarım litre ev şarabı.'}
      ],
      note:'"Senza" = olmadan (allergiler için): "Senza glutine" (glütensiz), "senza lattosio" (laktozsuz), "vegetariano/vegano" (vejetaryen/vegan).'
    }
  ],
  speaking:[
    {id:'sp1',en:'Cosa mi consiglia? È la prima volta che vengo qui.',tr:'Ne tavsiye edersiniz? Buraya ilk kez geliyorum.',prompt:'Öneri iste'},
    {id:'sp2',en:'Sono allergico alle noci. C\'è qualcosa senza noci?',tr:'Cevize alerjim var. Ceviz olmadan bir şey var mı?',prompt:'Alerji belirt'},
    {id:'sp3',en:'La pasta è cotta al dente? Preferisco così.',tr:'Makarna al dente mi pişiyor? Böyle tercih ediyorum.',prompt:'Tercihini belirt'},
    {id:'sp4',en:'Il gelato di pistacchio è il mio preferito!',tr:'Antep fıstıklı dondurma favorim!',prompt:'Favorin söyle'},
    {id:'sp5',en:'Il conto separato, per favore. Pago io la pizza e lei paga il risotto.',tr:'Ayrı hesap lütfen. Ben pizzayı ödüyorum, o risottonu ödüyor.',prompt:'Hesap iste'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Restoranda',
      title_en:'At the Restaurant',
      lines:[
        {speaker:'C',gender:'m',en:'Buona sera! Avete prenotato?',tr:'İyi akşamlar! Rezervasyonunuz var mı?',bd:[{ro:'Avete prenotato?',tr:'rezervasyonunuz var mı?',role:'question'}]},
        {speaker:'A',gender:'f',en:'Sì, ho prenotato a nome Rossi, due persone.',tr:'Evet, Rossi adına iki kişilik rezervasyon yaptım.',bd:[{ro:'a nome Rossi',tr:'Rossi adına',role:'reservation'},{ro:'due persone',tr:'iki kişi',role:'number'}]},
        {speaker:'C',gender:'m',en:'Prego, si accomodino. Ecco il menu. Posso portarvi qualcosa da bere intanto?',tr:'Buyurun, oturun. Menü burada. Bu arada bir şey içmek ister misiniz?',bd:[{ro:'si accomodino',tr:'oturun (kibarca)',role:'welcome'},{ro:'intanto',tr:'bu arada',role:'time'}]},
        {speaker:'A',gender:'f',en:'Sì, una bottiglia d\'acqua frizzante e due bicchieri di vino rosso della casa.',tr:'Evet, bir şişe gazlı su ve iki bardak ev kırmızı şarabı.',bd:[{ro:'una bottiglia d\'acqua frizzante',tr:'bir şişe gazlı su',role:'order'},{ro:'vino rosso della casa',tr:'ev kırmızı şarabı',role:'order'}]},
        {speaker:'B',gender:'m',en:'Io prendo le tagliatelle al ragù come primo e poi l\'ossobuco come secondo.',tr:'Ben birinci yemek olarak ragù soslu tagliatelle, sonra ossobuco alıyorum.',bd:[{ro:'le tagliatelle al ragù come primo',tr:'ragù soslu tagliatelle birinci yemek olarak',role:'order'},{ro:'l\'ossobuco come secondo',tr:'ossobuco ikinci yemek olarak',role:'order'}]},
        {speaker:'A',gender:'f',en:'Io invece prendo la minestra di verdure come primo e il branzino alla griglia. E per finire, il tiramisù!',tr:'Ben ise birinci yemek olarak sebze çorbası ve ızgara levrek alıyorum. Sonunda tiramisù!',bd:[{ro:'la minestra di verdure',tr:'sebze çorbası',role:'order'},{ro:'il branzino alla griglia',tr:'ızgara levrek',role:'order'},{ro:'per finire',tr:'sonunda/tatlı olarak',role:'dessert'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'La cucina italiana è una delle più amate al mondo. Ogni regione ha i suoi piatti tipici. In Emilia-Romagna trovate tagliatelle, tortellini e parmigiano. In Sicilia la pasta alla norma con le melanzane e la granita al limone. A Napoli naturalmente la pizza e il caffè. Uno degli elementi più importanti è la qualità degli ingredienti: olio d\'oliva extravergine, pomodori san marzano, mozzarella di bufala.',
      tr:'İtalyan mutfağı dünyanın en çok sevilen mutfaklarından biri. Her bölgenin kendine özgü yemekleri var. Emilia-Romagna\'da tagliatelle, tortellini ve parmesan bulursunuz. Sicilya\'da patlıcanlı pasta alla norma ve limonlu granita. Napoli\'de tabii ki pizza ve kahve. En önemli unsurlardan biri malzeme kalitesi: sızma zeytinyağı, san marzano domatesleri, buffalo mozzarella.',
      questions:[
        {q:'Tortellini hangi bölgeye ait?',opts:['Sicilya','Emilia-Romagna','Napoli','Toscana'],answer:1,tr:'Emilia-Romagna'},
        {q:'Pasta alla norma\'nın malzemesi ne?',opts:['Domates','Patates','Patlıcan','Enginar'],answer:2,tr:'Patlıcan (le melanzane)'},
        {q:'Napoli\'nin meşhur ürünleri neler?',opts:['Tiramisù ve vino','Pizza ve caffè','Risotto ve formaggio','Pasta ve gelato'],answer:1,tr:'Pizza ve caffè'}
      ]
    }
  ],
  tones:[]
};
LESSONS[25] = L25;
