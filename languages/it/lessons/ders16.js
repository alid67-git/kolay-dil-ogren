// ders16.js — Italian Lesson 16: Countries & Nationalities (Ülkeler ve Uyruklar)
const L16 = {
  words:[
    {id:'w1',en:'l\'Italia',ro:'l\'Italia',tr:'İtalya',examples:[{it:'Vengo dall\'Italia.',tr:'İtalya\'dan geliyorum.',bd:[{ro:'Vengo dall\'Italia',tr:'İtalya\'dan geliyorum'}]}]},
    {id:'w2',en:'la Turchia',ro:'la Turchia',tr:'Türkiye',examples:[{it:'Sono turco, vengo dalla Turchia.',tr:'Türküm, Türkiye\'den geliyorum.',bd:[{ro:'Sono turco',tr:'Türküm'},{ro:'vengo dalla Turchia',tr:'Türkiye\'den geliyorum'}]}]},
    {id:'w3',en:'la Francia / la Spagna',ro:'la Francia',tr:'Fransa / İspanya',examples:[{it:'Ho studiato francese in Francia.',tr:'Fransa\'da Fransızca çalıştım.',bd:[{ro:'Ho studiato francese',tr:'Fransızca çalıştım'},{ro:'in Francia',tr:'Fransa\'da'}]}]},
    {id:'w4',en:'la Germania / l\'Austria',ro:'la Germania',tr:'Almanya / Avusturya',examples:[{it:'La Germania è famosa per la birra.',tr:'Almanya bira ile ünlüdür.',bd:[{ro:'La Germania',tr:'Almanya'},{ro:'è famosa per',tr:'ile ünlüdür'}]}]},
    {id:'w5',en:'il Giappone / la Cina',ro:'il Giappone',tr:'Japonya / Çin',examples:[{it:'Voglio visitare il Giappone.',tr:'Japonya\'yı ziyaret etmek istiyorum.',bd:[{ro:'Voglio visitare',tr:'ziyaret etmek istiyorum'},{ro:'il Giappone',tr:'Japonya'}]}]},
    {id:'w6',en:'italiano/a',ro:'italiano',tr:'İtalyan (sıfat)',examples:[{it:'Il gelato italiano è il migliore del mondo.',tr:'İtalyan dondurması dünyanın en iyisi.',bd:[{ro:'Il gelato italiano',tr:'İtalyan dondurması'},{ro:'è il migliore del mondo',tr:'dünyanın en iyisi'}]}]},
    {id:'w7',en:'turco/a',ro:'turco',tr:'Türk (sıfat)',examples:[{it:'Il caffè turco è molto forte.',tr:'Türk kahvesi çok kuvvetli.',bd:[{ro:'Il caffè turco',tr:'Türk kahvesi'},{ro:'è molto forte',tr:'çok kuvvetli'}]}]},
    {id:'w8',en:'la nazionalità',ro:'la nazionalità',tr:'milliyet / uyruk',examples:[{it:'Qual è la tua nazionalità?',tr:'Milliyetin nedir?',bd:[{ro:'Qual è la tua nazionalità?',tr:'milliyetin nedir?'}]}]},
    {id:'w9',en:'la lingua / parlare',ro:'la lingua',tr:'dil / konuşmak',examples:[{it:'Parlo italiano e un po\' di francese.',tr:'İtalyanca ve biraz Fransızca konuşuyorum.',bd:[{ro:'Parlo italiano',tr:'İtalyanca konuşuyorum'},{ro:'un po\' di francese',tr:'biraz Fransızca'}]}]},
    {id:'w10',en:'straniero/a',ro:'straniero',tr:'yabancı',examples:[{it:'Sono straniero qui, non conosco la città.',tr:'Burada yabancıyım, şehri bilmiyorum.',bd:[{ro:'Sono straniero',tr:'yabancıyım'},{ro:'non conosco la città',tr:'şehri bilmiyorum'}]}]},
    {id:'w11',en:'il passaporto / il documento',ro:'il passaporto',tr:'pasaport',examples:[{it:'Hai il passaporto valido?',tr:'Geçerli pasaportunuz var mı?',bd:[{ro:'Hai il passaporto valido?',tr:'geçerli pasaportunuz var mı?'}]}]},
    {id:'w12',en:'Di dove sei?',ro:'Di dove sei?',tr:'Nerelisin? / Nereden geliyorsun?',examples:[{it:'Di dove sei? — Sono di Istanbul.',tr:'Nerelisin? — İstanbul\'danlım.',bd:[{ro:'Di dove sei?',tr:'nerelisin?'},{ro:'Sono di Istanbul',tr:'İstanbul\'danlım'}]}]},
    {id:'w13',en:'Sono di... / Vengo da...',ro:'Sono di',tr:'... danlım / ... dan geliyorum',examples:[{it:'Vengo da Ankara, la capitale della Turchia.',tr:'Türkiye\'nin başkenti Ankara\'dan geliyorum.',bd:[{ro:'Vengo da Ankara',tr:'Ankara\'dan geliyorum'},{ro:'la capitale della Turchia',tr:'Türkiye\'nin başkenti'}]}]},
    {id:'w14',en:'il continente',ro:'il continente',tr:'kıta',examples:[{it:'L\'Europa è un continente ricco di storia.',tr:'Avrupa, tarihi zengin bir kıtadır.',bd:[{ro:'L\'Europa',tr:'Avrupa'},{ro:'è un continente',tr:'bir kıtadır'},{ro:'ricco di storia',tr:'tarihi zengin'}]}]},
    {id:'w15',en:'l\'Europa / l\'Asia',ro:'l\'Europa',tr:'Avrupa / Asya',examples:[{it:'La Turchia è tra l\'Europa e l\'Asia.',tr:'Türkiye Avrupa ile Asya arasında.',bd:[{ro:'La Turchia è tra',tr:'Türkiye arasında'},{ro:'l\'Europa e l\'Asia',tr:'Avrupa ve Asya'}]}]},
    {id:'w16',en:'il Nord / il Sud',ro:'il Nord',tr:'Kuzey / Güney',examples:[{it:'Il nord Italia è più industriale del sud.',tr:'Kuzey İtalya güneyden daha endüstriyel.',bd:[{ro:'Il nord Italia',tr:'Kuzey İtalya'},{ro:'è più industriale del sud',tr:'güneyden daha endüstriyel'}]}]},
    {id:'w17',en:'la capitale',ro:'la capitale',tr:'başkent',examples:[{it:'Roma è la capitale d\'Italia, ma Milano è la capitale della moda.',tr:'Roma İtalya\'nın başkentidir, ama Milano modanın başkentidir.',bd:[{ro:'Roma è la capitale d\'Italia',tr:'Roma İtalya\'nın başkentidir'},{ro:'la capitale della moda',tr:'modanın başkenti'}]}]},
    {id:'w18',en:'emigrare / immigrare',ro:'emigrare',tr:'göç etmek',examples:[{it:'Molti italiani emigrarono in America nel Novecento.',tr:'Pek çok İtalyan yirminci yüzyılda Amerika\'ya göç etti.',bd:[{ro:'emigrarono in America',tr:'Amerika\'ya göç etti'},{ro:'nel Novecento',tr:'yirminci yüzyılda'}]}]},
    {id:'w19',en:'la cultura / le tradizioni',ro:'la cultura',tr:'kültür / gelenekler',examples:[{it:'Amo la cultura italiana: il cibo, la musica, l\'arte.',tr:'İtalyan kültürünü seviyorum: yemek, müzik, sanat.',bd:[{ro:'Amo la cultura italiana',tr:'İtalyan kültürünü seviyorum'},{ro:'il cibo, la musica, l\'arte',tr:'yemek, müzik, sanat'}]}]},
    {id:'w20',en:'Che lingua parli?',ro:'Che lingua parli?',tr:'Hangi dili konuşuyorsun?',examples:[{it:'Che lingue parli? — Parlo turco, inglese e un po\' di italiano.',tr:'Hangi dilleri konuşuyorsun? — Türkçe, İngilizce ve biraz İtalyanca.',bd:[{ro:'Che lingue parli?',tr:'hangi dilleri konuşuyorsun?'},{ro:'Parlo turco, inglese',tr:'Türkçe, İngilizce konuşuyorum'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Nationalità: Erkek ve Dişil Formlar',
      title_en:'Nationalities: Masculine and Feminine',
      explanation:'İtalyanca\'da milliyet sıfatları cinsiyete ve tekil/çoğul duruma göre değişir.',
      table:[
        {pronoun:'Erkek tekil',form:'-o sonu: italiano, tedesco, russo',example:'Sono italiano.',tr:'İtalyanım. (erkek)'},
        {pronoun:'Kadın tekil',form:'-a sonu: italiana, tedesca, russa',example:'Sono italiana.',tr:'İtalyanım. (kadın)'},
        {pronoun:'-e sonu',form:'francese, inglese, cinese',example:'È cinese, parla cinese.',tr:'Çinlidir, Çince konuşur. (aynı form)'},
        {pronoun:'-ano/-ano',form:'turco/turca, americano/americana',example:'Lei è turca e parla turco.',tr:'O Türktür ve Türkçe konuşur.'}
      ],
      note:'"Turco" → turco (m), turca (f), turchi (m.pl), turche (f.pl). Milliyet sıfatları küçük harfle yazılır: "italiano", "turco".'
    },
    {
      id:'g2',
      title:'Kökeni Belirtme: Di dove sei? / Vengo da...',
      title_en:'Stating Origin',
      explanation:'İki temel yapı: "Sono di + şehir" (... danlım) ve "Vengo da + ülke/şehir" (... dan geliyorum).',
      table:[
        {pronoun:'Şehir',form:'Sono di + şehir',example:'Sono di Roma. / Sono di Istanbul.',tr:'Romalıyım. / İstanbulluyum.'},
        {pronoun:'Ülke (f)',form:'Vengo dalla + ülke (f)',example:'Vengo dalla Turchia.',tr:'Türkiye\'den geliyorum.'},
        {pronoun:'Ülke (m)',form:'Vengo dal + ülke (m)',example:'Vengo dal Giappone.',tr:'Japonya\'dan geliyorum.'},
        {pronoun:'Dil',form:'Parlo + dil',example:'Parlo italiano e turco.',tr:'İtalyanca ve Türkçe konuşuyorum.'}
      ],
      note:'"da + la" → dalla (Turchia), "da + il" → dal (Giappone), "da + l\'" → dall\' (Italia). "Da" + saygın ülke adı = köken.'
    },
    {
      id:'g3',
      title:'Avrupa Ülkeleri ve Başkentleri',
      title_en:'European Countries and Capitals',
      explanation:'Yaygın Avrupa ülkeleri, başkentleri ve milliyet sıfatları.',
      table:[
        {pronoun:'İtalya',form:'Italia → Roma → italiano',example:'Roma è la capitale dell\'Italia.',tr:'Roma İtalya\'nın başkentidir.'},
        {pronoun:'Fransa',form:'Francia → Parigi → francese',example:'Parigi è bellissima!',tr:'Paris çok güzel!'},
        {pronoun:'Spagna',form:'Spagna → Madrid → spagnolo',example:'Parlo un po\' di spagnolo.',tr:'Biraz İspanyolca konuşuyorum.'},
        {pronoun:'Germania',form:'Germania → Berlino → tedesco',example:'Studio il tedesco al liceo.',tr:'Lisede Almanca çalışıyorum.'}
      ],
      note:'Türkiye için: "la Turchia → Ankara/Istanbul → turco". Not: başkent Ankara, ama en büyük şehir Istanbul.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Di dove sei? — Sono di Istanbul, in Turchia.',tr:'Nerelisin? — İstanbul\'danlım, Türkiye\'de.',prompt:'Kökenini anlat'},
    {id:'sp2',en:'Parlo turco e sto imparando l\'italiano.',tr:'Türkçe konuşuyorum ve İtalyanca öğreniyorum.',prompt:'Dil bilgini anlat'},
    {id:'sp3',en:'Vengo dalla Turchia, ma vivo in Italia da tre anni.',tr:'Türkiye\'den geliyorum, ama üç yıldır İtalya\'da yaşıyorum.',prompt:'Nerede yaşadığını anlat'},
    {id:'sp4',en:'La capital della Turchia è Ankara, non Istanbul.',tr:'Türkiye\'nin başkenti Ankara, İstanbul değil.',prompt:'Başkenti belirt'},
    {id:'sp5',en:'Sei italiano? Parli bene l\'italiano!',tr:'İtalyan mısın? İtalyancayı çok iyi konuşuyorsun!',prompt:'Birine iltifat et'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Nereden Geliyorsunuz?',
      title_en:'Where Are You From?',
      lines:[
        {speaker:'B',gender:'f',en:'Ciao! Sei nuovo qui? Non ti ho mai visto.',tr:'Merhaba! Yeni misin burada? Seni hiç görmedim.',bd:[{ro:'Sei nuovo qui?',tr:'yeni misin burada?',role:'question'},{ro:'Non ti ho mai visto',tr:'seni hiç görmedim',role:'observation'}]},
        {speaker:'A',gender:'m',en:'Sì, sono arrivato la settimana scorsa. Sono turco, vengo da Istanbul.',tr:'Evet, geçen hafta geldim. Türküm, İstanbul\'dan geliyorum.',bd:[{ro:'sono arrivato la settimana scorsa',tr:'geçen hafta geldim',role:'verb'},{ro:'Sono turco',tr:'Türküm',role:'nationality'},{ro:'vengo da Istanbul',tr:'İstanbul\'dan geliyorum',role:'origin'}]},
        {speaker:'B',gender:'f',en:'Che bello! Sei la prima persona turca che incontro. Parli bene l\'italiano!',tr:'Ne güzel! Tanıştığım ilk Türk kişisin. İtalyancayı çok iyi konuşuyorsun!',bd:[{ro:'la prima persona turca che incontro',tr:'tanıştığım ilk Türk',role:'noun'},{ro:'Parli bene l\'italiano',tr:'İtalyancayı iyi konuşuyorsun',role:'compliment'}]},
        {speaker:'A',gender:'m',en:'Grazie! Studio italiano da un anno. E tu, sei di qui?',tr:'Teşekkürler! Bir yıldır İtalyanca çalışıyorum. Sen? Buralı mısın?',bd:[{ro:'Studio italiano da un anno',tr:'bir yıldır İtalyanca çalışıyorum',role:'verb'},{ro:'sei di qui?',tr:'buralı mısın?',role:'question'}]},
        {speaker:'B',gender:'f',en:'Sì, sono italiana, di Roma. Ma mia madre è spagnola, di Madrid.',tr:'Evet, İtalyanım, Romalıyım. Ama annem İspanyol, Madridli.',bd:[{ro:'sono italiana, di Roma',tr:'İtalyanım, Romalıyım',role:'nationality'},{ro:'mia madre è spagnola',tr:'annem İspanyol',role:'family'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Ciao! Mi presento: mi chiamo Kenji, sono giapponese e vengo da Tokyo. Studio l\'italiano all\'università di Bologna. Parlo giapponese, inglese e ora anche italiano. Amo l\'Italia perché la cultura è bellissima e il cibo è fantastico!',
      tr:'Merhaba! Kendimi tanıtayım: Adım Kenji, Japon\'um ve Tokyo\'dan geliyorum. Bologna Üniversitesi\'nde İtalyanca okuyorum. Japonca, İngilizce ve şimdi İtalyanca da konuşuyorum. İtalya\'yı seviyorum çünkü kültürü çok güzel ve yemekler harika!',
      questions:[
        {q:'Kenji nerelidir?',opts:['Çinli','Koreli','Japon','Taylandlı'],answer:2,tr:'Japon (giapponese)'},
        {q:'Kenji nerede okuyor?',opts:['Roma','Milano','Napoli','Bologna'],answer:3,tr:'Bologna'},
        {q:'Kaç dil konuşuyor?',opts:['Bir','İki','Üç','Dört'],answer:2,tr:'Üç (Japonca, İngilizce, İtalyanca)'}
      ]
    }
  ],
  tones:[]
};
LESSONS[16] = L16;
