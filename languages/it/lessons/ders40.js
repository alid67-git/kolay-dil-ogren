// ders40.js — Italian Lesson 40: Animali (Hayvanlar)
const L40 = {
  words:[
    {id:'w1',en:'il cane',ro:'il cane',tr:'köpek',examples:[{it:'Il mio cane si chiama Fido ed è un golden retriever molto dolce.',tr:'Köpeğimin adı Fido ve çok sevimli bir golden retriever.',bd:[{ro:'Il mio cane si chiama Fido',tr:'köpeğimin adı Fido'},{ro:'un golden retriever molto dolce',tr:'çok sevimli bir golden retriever'}]}]},
    {id:'w2',en:'il gatto',ro:'il gatto',tr:'kedi',examples:[{it:'I gatti sono animali indipendenti: fanno quello che vogliono!',tr:'Kediler bağımsız hayvanlardır: istediklerini yaparlar!',bd:[{ro:'animali indipendenti',tr:'bağımsız hayvanlar'},{ro:'fanno quello che vogliono',tr:'istediklerini yaparlar'}]}]},
    {id:'w3',en:'il cavallo',ro:'il cavallo',tr:'at',examples:[{it:'Il Palio di Siena è una corsa di cavalli storica che si tiene due volte l\'anno.',tr:'Siena Palio\'su yılda iki kez düzenlenen tarihi bir at yarışı.',bd:[{ro:'Il Palio di Siena',tr:'Siena Paliosu'},{ro:'una corsa di cavalli storica',tr:'tarihi bir at yarışı'}]}]},
    {id:'w4',en:'la mucca / il toro',ro:'la mucca',tr:'inek / boğa',examples:[{it:'Le mucche della Valdichiana producono una carne pregiata, la Chianina.',tr:'Valdichiana inekleri değerli bir et üretiyor: Chianina.',bd:[{ro:'Le mucche della Valdichiana',tr:'Valdichiana inekleri'},{ro:'una carne pregiata',tr:'değerli bir et'}]}]},
    {id:'w5',en:'il lupo',ro:'il lupo',tr:'kurt',examples:[{it:'I lupi sono stati reintrodotti sulle Alpi italiane e ora la popolazione cresce.',tr:'Kurtlar İtalya Alplerinde yeniden ortaya çıktı ve artık nüfus büyüyor.',bd:[{ro:'I lupi sono stati reintrodotti',tr:'kurtlar yeniden ortaya çıktı'},{ro:'la popolazione cresce',tr:'nüfus büyüyor'}]}]},
    {id:'w6',en:'l\'aquila / il falco',ro:'l\'aquila',tr:'kartal / şahin',examples:[{it:'L\'aquila reale è il simbolo delle Alpi: vola ad altissima quota.',tr:'Altın kartal Alplerin sembolü: çok yüksek irtifada uçar.',bd:[{ro:'L\'aquila reale',tr:'altın kartal'},{ro:'vola ad altissima quota',tr:'çok yüksek irtifada uçar'}]}]},
    {id:'w7',en:'il pesce / il delfino',ro:'il pesce',tr:'balık / yunus',examples:[{it:'Nel Mediterraneo vivono molte specie di pesci e anche i delfini.',tr:'Akdeniz\'de pek çok balık türü ve yunuslar da yaşıyor.',bd:[{ro:'molte specie di pesci',tr:'pek çok balık türü'},{ro:'anche i delfini',tr:'yunuslar da'}]}]},
    {id:'w8',en:'la farfalla / l\'ape',ro:'la farfalla',tr:'kelebek / arı',examples:[{it:'Le api sono fondamentali per l\'impollinazione e per la produzione del miele.',tr:'Arılar tozlaşma ve bal üretimi için temel öneme sahip.',bd:[{ro:'fondamentali per l\'impollinazione',tr:'tozlaşma için temel'},{ro:'per la produzione del miele',tr:'bal üretimi için'}]}]},
    {id:'w9',en:'il serpente / la lucertola',ro:'il serpente',tr:'yılan / kertenkele',examples:[{it:'In Italia vivono alcune specie di serpenti, ma solo poche sono velenose.',tr:'İtalya\'da bazı yılan türleri yaşıyor ama sadece azı zehirli.',bd:[{ro:'alcune specie di serpenti',tr:'bazı yılan türleri'},{ro:'solo poche sono velenose',tr:'sadece azı zehirli'}]}]},
    {id:'w10',en:'l\'orso / la volpe',ro:'l\'orso',tr:'ayı / tilki',examples:[{it:'L\'orso marsicano è una specie protetta che vive nel Parco Nazionale d\'Abruzzo.',tr:'Marsica ayısı Abruzzo Milli Parkı\'nda yaşayan korunan bir tür.',bd:[{ro:'L\'orso marsicano',tr:'Marsica ayısı'},{ro:'Parco Nazionale d\'Abruzzo',tr:'Abruzzo Milli Parkı'}]}]},
    {id:'w11',en:'il cinghiale',ro:'il cinghiale',tr:'yaban domuzu',examples:[{it:'I cinghiali sono diffusissimi in Toscana e causano problemi all\'agricoltura.',tr:'Yaban domuzları Toskana\'da çok yaygın ve tarıma zarar veriyor.',bd:[{ro:'I cinghiali sono diffusissimi',tr:'yaban domuzları çok yaygın'},{ro:'causano problemi all\'agricoltura',tr:'tarıma zarar veriyor'}]}]},
    {id:'w12',en:'il pappagallo / il canarino',ro:'il pappagallo',tr:'papağan / kanarya',examples:[{it:'Il mio pappagallo sa dire alcune parole in italiano! È brillantissimo.',tr:'Papağanım birkaç İtalyanca kelime söyleyebiliyor! Çok zeki.',bd:[{ro:'sa dire alcune parole in italiano',tr:'birkaç İtalyanca kelime söyleyebiliyor'},{ro:'È brillantissimo',tr:'çok zeki'}]}]},
    {id:'w13',en:'l\'elefante / la giraffa',ro:'l\'elefante',tr:'fil / zürafa',examples:[{it:'Al safari ho visto elefanti e giraffe per la prima volta. Un\'emozione incredibile!',tr:'Safari\'de ilk kez fil ve zürafa gördüm. İnanılmaz bir duygu!',bd:[{ro:'Al safari ho visto',tr:'safari\'de gördüm'},{ro:'per la prima volta',tr:'ilk kez'}]}]},
    {id:'w14',en:'il leone / la tigre',ro:'il leone',tr:'aslan / kaplan',examples:[{it:'Il leone è il simbolo di molte città italiane, tra cui Venezia e Genova.',tr:'Aslan, Venedik ve Cenova da dahil pek çok İtalyan şehrinin sembolü.',bd:[{ro:'Il leone è il simbolo',tr:'aslan sembolü'},{ro:'tra cui Venezia e Genova',tr:'Venedik ve Cenova da dahil'}]}]},
    {id:'w15',en:'la scimmia / il gorilla',ro:'la scimmia',tr:'maymun / goril',examples:[{it:'I gorilla sono i parenti più stretti degli esseri umani, con oltre il 98% del DNA condiviso.',tr:'Goril insanların en yakın akrabası, yüzde 98\'den fazla ortak DNA ile.',bd:[{ro:'i parenti più stretti degli esseri umani',tr:'insanların en yakın akrabası'},{ro:'DNA condiviso',tr:'ortak DNA'}]}]},
    {id:'w16',en:'il coniglio / il topo',ro:'il coniglio',tr:'tavşan / fare',examples:[{it:'Ho adottato un coniglio bianco: è diventato il mio animale preferito.',tr:'Beyaz bir tavşan edindim: en sevdiğim hayvan oldu.',bd:[{ro:'Ho adottato un coniglio bianco',tr:'beyaz bir tavşan edindim'},{ro:'è diventato il mio animale preferito',tr:'en sevdiğim hayvan oldu'}]}]},
    {id:'w17',en:'la pecora / la capra',ro:'la pecora',tr:'koyun / keçi',examples:[{it:'Le capre della Sardegna producono un ottimo formaggio pecorino.',tr:'Sardunya keçileri mükemmel pecorino peyniri üretiyor.',bd:[{ro:'Le capre della Sardegna',tr:'Sardunya keçileri'},{ro:'un ottimo formaggio pecorino',tr:'mükemmel pecorino peyniri'}]}]},
    {id:'w18',en:'l\'anatra / il cigno',ro:'l\'anatra',tr:'ördek / kuğu',examples:[{it:'I cigni del laghetto del parco sono diventati un\'attrazione per i bambini.',tr:'Park gölündeki kuğular çocuklar için bir ilgi odağı oldu.',bd:[{ro:'I cigni del laghetto del parco',tr:'park gölündeki kuğular'},{ro:'un\'attrazione per i bambini',tr:'çocuklar için bir ilgi odağı'}]}]},
    {id:'w19',en:'estinto / in pericolo di estinzione',ro:'estinto',tr:'nesli tükenmiş / nesli tehlike altında',examples:[{it:'Il rinoceronte bianco settentrionale è quasi estinto: ne rimangono solo tre esemplari.',tr:'Kuzey beyaz gergedanı neredeyse nesli tükenmiş: sadece üç birey kaldı.',bd:[{ro:'quasi estinto',tr:'neredeyse nesli tükenmiş'},{ro:'ne rimangono solo tre esemplari',tr:'sadece üç birey kaldı'}]}]},
    {id:'w20',en:'addomesticare / selvatico',ro:'addomesticare',tr:'evcilleştirmek / vahşi',examples:[{it:'I lupi sono stati addomesticati dagli esseri umani migliaia di anni fa, diventando cani.',tr:'Kurtlar binlerce yıl önce insanlar tarafından evcilleştirildi ve köpek oldu.',bd:[{ro:'sono stati addomesticati',tr:'evcilleştirildi'},{ro:'migliaia di anni fa',tr:'binlerce yıl önce'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Verbi degli Animali: Hayvan Fiilleri',
      title_en:'Animal Verbs',
      explanation:'Hayvanları tarif etmek ve hayvanların yaptıklarını anlatmak için fiiller.',
      table:[
        {pronoun:'abbaiare / miagolare',form:'havlamak / miyavlamak',example:'Il cane abbaia di notte, il gatto miagola.',tr:'Köpek gece havlar, kedi miyavlar.'},
        {pronoun:'mordere / graffiare',form:'ısırmak / tırmalamak',example:'Il gatto mi ha graffiato la mano.',tr:'Kedi elimi tırmaladı.'},
        {pronoun:'volare / nuotare',form:'uçmak / yüzmek',example:'Le aquile volano sulle Alpi.',tr:'Kartallar Alplerin üzerinde uçar.'},
        {pronoun:'cacciare / nutrirsi di',form:'avlamak / beslenmek',example:'I lupi cacciano in branco.',tr:'Kurtlar sürü halinde avlar.'}
      ],
      note:'"Fare il verso di" = taklit etmek. "Il verso del cane" = köpek sesi (bau bau!). "Il verso del gatto" = miao! Türkçe\'deki gibi hayvan sesleri farklıdır.'
    },
    {
      id:'g2',
      title:'Possesso e Cura degli Animali: Hayvan Sahipliği',
      title_en:'Pet Ownership and Care',
      explanation:'Evcil hayvan bakımı hakkında konuşmak için gerekli yapılar.',
      table:[
        {pronoun:'avere un animale',form:'hayvanı olmak',example:'Hai un animale domestico?',tr:'Evcil hayvanın var mı?'},
        {pronoun:'prendersi cura di',form:'bakmak',example:'Mi prendo cura del mio gatto ogni giorno.',tr:'Her gün kedime bakıyorum.'},
        {pronoun:'adottare / acquistare',form:'sahiplenmek / satın almak',example:'Ho adottato il mio cane dal canile.',tr:'Köpeğimi barınaktan sahiplendim.'},
        {pronoun:'portare dal veterinario',form:'veterinere götürmek',example:'Porto il mio gatto dal veterinario ogni anno.',tr:'Kedimi her yıl veterinere götürüyorum.'}
      ],
      note:'"Animale domestico" = evcil hayvan. "Animale selvatico" = vahşi hayvan. "Canile" = köpek barınağı. "Gattile" = kedi barınağı. "Veterinario" = veteriner.'
    },
    {
      id:'g3',
      title:'Metafore con Animali: Hayvan Metaforları',
      title_en:'Animal Metaphors and Expressions',
      explanation:'İtalyanca\'da hayvanlarla ilgili yaygın deyimler ve metaforlar.',
      table:[
        {pronoun:'avere una fame da lupo',form:'çok aç olmak',example:'Ho una fame da lupo! Cosa c\'è da mangiare?',tr:'Çok acıktım! Yemek ne var?'},
        {pronoun:'essere come un pesce fuor d\'acqua',form:'ortama uymamak',example:'Mi sentivo come un pesce fuor d\'acqua.',tr:'Ortama uymayan biri gibi hissettim.'},
        {pronoun:'non svegliare il can che dorme',form:'uyuyan yılanın kuyruğuna basma',example:'Lascia perdere, non svegliare il can che dorme!',tr:'Bırak onu, uyuyan yılanın kuyruğuna basma!'},
        {pronoun:'prendere due piccioni con una fava',form:'bir taşla iki kuş vurmak',example:'Prendiamo due piccioni con una fava!',tr:'Bir taşla iki kuş vuralım!'}
      ],
      note:'"In bocca al lupo!" = başarılar! (sınav, iş görüşmesi için). Cevap: "Crepi (il lupo)!" = teşekkürler! Çok yaygın İtalyan ifadesi.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Ho sempre amato gli animali: da bambino avevo un cane, due gatti e un criceto.',tr:'Hayvanları hep sevdim: çocukken bir köpeğim, iki kedim ve bir hamsterim vardı.',prompt:'Hayvanlarla geçmişini anlat'},
    {id:'sp2',en:'Il mio gatto dorme tutta la giornata e poi vuole giocare di notte. Non lo capisco!',tr:'Kedim tüm gün uyuyor ve sonra gece oynamak istiyor. Anlayamıyorum!',prompt:'Evcil hayvan davranışı anlat'},
    {id:'sp3',en:'Penso che proteggere gli animali selvatici sia un dovere dell\'umanità.',tr:'Vahşi hayvanları korumanın insanlığın bir görevi olduğunu düşünüyorum.',prompt:'Hayvan hakları görüşü'},
    {id:'sp4',en:'In bocca al lupo per l\'esame! — Crepi!',tr:'Sınav için başarılar! — Teşekkürler!',prompt:'İtalyan selamlama deyimi'},
    {id:'sp5',en:'Ho visto un cinghiale in campagna! Mi ha spaventato ma era bellissimo.',tr:'Kırsalda bir yaban domuzu gördüm! Beni korkuttu ama çok güzeldi.',prompt:'Vahşi hayvan karşılaşması'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Evcil Hayvan Konuşması',
      title_en:'Talking About Pets',
      lines:[
        {speaker:'A',gender:'f',en:'Hai visto che bel cane! Di che razza è?',tr:'Ne güzel bir köpek gördün mü! Hangi cins?',bd:[{ro:'Che bel cane!',tr:'ne güzel bir köpek!',role:'exclamation'},{ro:'Di che razza è?',tr:'hangi cins?',role:'question'}]},
        {speaker:'B',gender:'m',en:'Grazie! Si chiama Briciola, è una meticcia. L\'ho adottata dal canile tre anni fa.',tr:'Teşekkürler! Adı Briciola, karışık cins. Üç yıl önce barınaktan sahiplendim.',bd:[{ro:'è una meticcia',tr:'karışık cins',role:'breed'},{ro:'L\'ho adottata dal canile',tr:'barınaktan sahiplendim',role:'adoption'}]},
        {speaker:'A',gender:'f',en:'Che bello adottare! Anch\'io ho un gatto preso dal gattile.',tr:'Sahiplenmek ne güzel! Ben de barınaktan bir kedi aldım.',bd:[{ro:'ho un gatto preso dal gattile',tr:'barınaktan bir kedi aldım',role:'own_pet'}]},
        {speaker:'B',gender:'m',en:'I gatti sono più indipendenti dei cani, giusto?',tr:'Kediler köpeklerden daha bağımsız, değil mi?',bd:[{ro:'più indipendenti dei cani',tr:'köpeklerden daha bağımsız',role:'comparison'},{ro:'giusto?',tr:'değil mi?',role:'tag_question'}]},
        {speaker:'A',gender:'f',en:'Assolutamente sì! Il mio gatto fa quello che vuole. Ma ti ama lo stesso, a modo suo.',tr:'Kesinlikle evet! Kedim istediğini yapıyor. Ama seni yine de seviyor, kendi tarzında.',bd:[{ro:'fa quello che vuole',tr:'istediğini yapıyor',role:'independence'},{ro:'a modo suo',tr:'kendi tarzında',role:'expression'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'L\'Italia ha una tradizione lunga nel rapporto con gli animali. Il cane è l\'animale domestico più comune, seguito dal gatto. Molte famiglie italiane trattano i loro animali come membri della famiglia. Allo stesso tempo, l\'Italia ha problemi con il randagismo, soprattutto nel Sud. Le associazioni animaliste lavorano per proteggere gli animali abbandonati. Adottare invece di comprare è sempre più popolare tra gli italiani.',
      tr:'İtalya\'nın hayvanlarla uzun bir geleneği var. Köpek en yaygın evcil hayvan, onu kedi takip ediyor. Pek çok İtalyan aile evcil hayvanlarına aile üyesi gibi davranıyor. Aynı zamanda İtalya\'nın, özellikle Güney\'de, başıboş hayvan sorunu var. Hayvan hakları dernekleri terk edilmiş hayvanları korumak için çalışıyor. Satın almak yerine sahiplenmek İtalyanlar arasında giderek daha popüler.',
      questions:[
        {q:'İtalya\'da en yaygın evcil hayvan hangisi?',opts:['Kedi','Köpek','Kuş','Tavşan'],answer:1,tr:'Köpek (il cane)'},
        {q:'İtalyan aileler evcil hayvanlarına nasıl davranıyor?',opts:['Sadece dışarıda tutuyorlar','Aile üyesi gibi davranıyorlar','Hiç ilgilenmiyorlar','Üretim amaçlı kullanıyorlar'],answer:1,tr:'Aile üyesi gibi davranıyorlar'},
        {q:'Satın almak yerine ne yapma eğilimi artıyor?',opts:['Hayvan kiralama','Sahiplenme (barınaktan)','Üretme','Bağışlama'],answer:1,tr:'Sahiplenme (adottare)'}
      ]
    }
  ],
  tones:[]
};
LESSONS[40] = L40;
