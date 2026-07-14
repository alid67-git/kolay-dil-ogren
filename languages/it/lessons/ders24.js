// ders24.js — Italian Lesson 24: Città e luoghi (Şehir ve Mekanlar)
const L24 = {
  words:[
    {id:'w1',en:'il centro storico',ro:'il centro storico',tr:'tarihi merkez',examples:[{it:'Il centro storico di Firenze è patrimonio UNESCO.',tr:'Floransa\'nın tarihi merkezi UNESCO mirası.',bd:[{ro:'Il centro storico',tr:'tarihi merkez'},{ro:'patrimonio UNESCO',tr:'UNESCO mirası'}]}]},
    {id:'w2',en:'la piazza',ro:'la piazza',tr:'meydan',examples:[{it:'Ci troviamo in piazza alle tre del pomeriggio.',tr:'Öğleden sonra saat üçte meydanda buluşuyoruz.',bd:[{ro:'Ci troviamo',tr:'buluşuyoruz'},{ro:'in piazza',tr:'meydanda'}]}]},
    {id:'w3',en:'il municipio / il comune',ro:'il municipio',tr:'belediye binası',examples:[{it:'Devo andare al municipio per rinnovare la carta d\'identità.',tr:'Kimlik kartımı yenilemek için belediyeye gitmeliyim.',bd:[{ro:'Devo andare al municipio',tr:'belediyeye gitmeliyim'},{ro:'rinnovare la carta d\'identità',tr:'kimlik kartı yenilemek'}]}]},
    {id:'w4',en:'la chiesa / la cattedrale',ro:'la chiesa',tr:'kilise / katedral',examples:[{it:'La cattedrale di Milano è una delle più grandi d\'Europa.',tr:'Milano katedrali Avrupa\'nın en büyüklerinden biri.',bd:[{ro:'La cattedrale di Milano',tr:'Milano katedrali'},{ro:'una delle più grandi d\'Europa',tr:'Avrupa\'nın en büyüklerinden biri'}]}]},
    {id:'w5',en:'il museo',ro:'il museo',tr:'müze',examples:[{it:'Siamo stati al museo degli Uffizi tutta la mattina.',tr:'Tüm sabah Uffizi müzesinde kaldık.',bd:[{ro:'Siamo stati al museo',tr:'müzedeydik'},{ro:'tutta la mattina',tr:'tüm sabah'}]}]},
    {id:'w6',en:'il mercato',ro:'il mercato',tr:'pazar / çarşı',examples:[{it:'Il sabato mattina vado al mercato a comprare frutta e verdura.',tr:'Cumartesi sabahları meyve sebze almak için pazara gidiyorum.',bd:[{ro:'Il sabato mattina',tr:'cumartesi sabahları'},{ro:'a comprare frutta e verdura',tr:'meyve sebze almak için'}]}]},
    {id:'w7',en:'la stazione',ro:'la stazione',tr:'istasyon / gar',examples:[{it:'La stazione di Roma Termini è la più grande d\'Italia.',tr:'Roma Termini istasyonu İtalya\'nın en büyüğü.',bd:[{ro:'La stazione di Roma Termini',tr:'Roma Termini istasyonu'},{ro:'la più grande d\'Italia',tr:'İtalya\'nın en büyüğü'}]}]},
    {id:'w8',en:'l\'aeroporto',ro:'l\'aeroporto',tr:'havalimanı',examples:[{it:'L\'aeroporto di Malpensa è lontano dal centro di Milano.',tr:'Malpensa havalimanı Milano merkezinden uzakta.',bd:[{ro:'L\'aeroporto di Malpensa',tr:'Malpensa havalimanı'},{ro:'lontano dal centro',tr:'merkezden uzakta'}]}]},
    {id:'w9',en:'il porto',ro:'il porto',tr:'liman',examples:[{it:'Genova ha uno dei porti più trafficati del Mediterraneo.',tr:'Cenova Akdeniz\'in en işlek limanlarından birine sahip.',bd:[{ro:'uno dei porti più trafficati',tr:'en işlek limanlardan biri'},{ro:'del Mediterraneo',tr:'Akdeniz\'in'}]}]},
    {id:'w10',en:'il quartiere',ro:'il quartiere',tr:'mahalle / semt',examples:[{it:'Abito in un quartiere tranquillo vicino al parco.',tr:'Parka yakın sakin bir mahallede oturuyorum.',bd:[{ro:'un quartiere tranquillo',tr:'sakin bir mahalle'},{ro:'vicino al parco',tr:'parka yakın'}]}]},
    {id:'w11',en:'il viale / il corso',ro:'il viale',tr:'bulvar / cadde',examples:[{it:'Il corso principale è pieno di negozi e caffè.',tr:'Ana cadde dükkân ve kafelerle dolu.',bd:[{ro:'Il corso principale',tr:'ana cadde'},{ro:'pieno di negozi e caffè',tr:'dükkan ve kafelerle dolu'}]}]},
    {id:'w12',en:'il vicolo / la via',ro:'il vicolo',tr:'sokak / dar sokak',examples:[{it:'Mi sono perso nei vicoli del centro storico.',tr:'Tarihi merkezdeki dar sokaklarda kayboldum.',bd:[{ro:'Mi sono perso',tr:'kayboldum'},{ro:'nei vicoli del centro storico',tr:'tarihi merkezdeki dar sokaklarda'}]}]},
    {id:'w13',en:'il parco / il giardino',ro:'il parco',tr:'park / bahçe',examples:[{it:'La domenica i romani vanno a passeggiare ai giardini.',tr:'Pazar günleri Romalılar bahçelerde yürüyüş yapar.',bd:[{ro:'La domenica',tr:'pazar günleri'},{ro:'a passeggiare ai giardini',tr:'bahçelerde yürüyüş yapmak için'}]}]},
    {id:'w14',en:'la fontana',ro:'la fontana',tr:'çeşme / fıskiye',examples:[{it:'La Fontana di Trevi è il simbolo di Roma per i turisti.',tr:'Trevi Çeşmesi turistler için Roma\'nın sembolü.',bd:[{ro:'La Fontana di Trevi',tr:'Trevi Çeşmesi'},{ro:'il simbolo di Roma',tr:'Roma\'nın sembolü'}]}]},
    {id:'w15',en:'il ponte',ro:'il ponte',tr:'köprü',examples:[{it:'Il Ponte Vecchio di Firenze ha negozi di gioielli sopra.',tr:'Floransa\'daki Ponte Vecchio\'nun üstünde kuyumcu dükkanları var.',bd:[{ro:'Il Ponte Vecchio',tr:'Ponte Vecchio (eski köprü)'},{ro:'negozi di gioielli sopra',tr:'üstünde kuyumcu dükkanları'}]}]},
    {id:'w16',en:'la biblioteca',ro:'la biblioteca',tr:'kütüphane',examples:[{it:'Vado in biblioteca a studiare ogni pomeriggio.',tr:'Her öğleden sonra çalışmak için kütüphaneye gidiyorum.',bd:[{ro:'Vado in biblioteca',tr:'kütüphaneye gidiyorum'},{ro:'a studiare',tr:'çalışmak için'}]}]},
    {id:'w17',en:'l\'ospedale',ro:'l\'ospedale',tr:'hastane',examples:[{it:'L\'ospedale più vicino è a dieci minuti a piedi.',tr:'En yakın hastane on dakika yürüme mesafesinde.',bd:[{ro:'L\'ospedale più vicino',tr:'en yakın hastane'},{ro:'a dieci minuti a piedi',tr:'on dakika yürüme mesafesinde'}]}]},
    {id:'w18',en:'la farmacia',ro:'la farmacia',tr:'eczane',examples:[{it:'In Italia le farmacie hanno una croce verde all\'esterno.',tr:'İtalya\'da eczanelerin dışında yeşil bir haç bulunur.',bd:[{ro:'le farmacie',tr:'eczaneler'},{ro:'una croce verde all\'esterno',tr:'dışarıda yeşil bir haç'}]}]},
    {id:'w19',en:'il palazzo',ro:'il palazzo',tr:'saray / büyük bina',examples:[{it:'Abitiamo in un palazzo antico del Settecento.',tr:'On sekizinci yüzyıldan kalma eski bir binada oturuyoruz.',bd:[{ro:'in un palazzo antico',tr:'eski bir binada'},{ro:'del Settecento',tr:'18. yüzyıldan'}]}]},
    {id:'w20',en:'il monumento / la statua',ro:'il monumento',tr:'anıt / heykel',examples:[{it:'Ogni angolo di Roma è pieno di monumenti antichi.',tr:'Roma\'nın her köşesi antik anıtlarla dolu.',bd:[{ro:'Ogni angolo di Roma',tr:'Roma\'nın her köşesi'},{ro:'pieno di monumenti antichi',tr:'antik anıtlarla dolu'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Yer Belirtme: In / A / Al / Alla',
      title_en:'Expressing Location: In / A / Al / Alla',
      explanation:'İtalyanca\'da mekânları belirtirken doğru edat kullanımı çok önemlidir.',
      table:[
        {pronoun:'a + şehir',form:'Vado a Roma / a Milano / a Napoli',example:'Vado a Venezia questo weekend.',tr:'Bu hafta sonu Venedik\'e gidiyorum.'},
        {pronoun:'in + ülke/bölge',form:'Abito in Italia / in Toscana / in centro',example:'Vivo in centro da tre anni.',tr:'Üç yıldır merkezde yaşıyorum.'},
        {pronoun:'al / alla + mekan',form:'al museo / alla stazione / al parco',example:'Ci vediamo alla stazione.',tr:'İstasyonda görüşürüz.'},
        {pronoun:'nel / nella + mekan',form:'nel quartiere / nella piazza',example:'Nel quartiere c\'è un bel mercato.',tr:'Mahallede güzel bir pazar var.'}
      ],
      note:'"In piazza" (meydanda), "in centro" (merkezde), "in periferia" (kenar mahallede) — articolo almaz. Ma: "al centro commerciale" (alışveriş merkezinde) — articolo alır.'
    },
    {
      id:'g2',
      title:'Yön ve Konum İfadeleri',
      title_en:'Direction and Position Expressions',
      explanation:'Şehirde bir yeri tarif ederken kullanılan temel ifadeler.',
      table:[
        {pronoun:'di fronte a',form:'karşısında',example:'La farmacia è di fronte alla chiesa.',tr:'Eczane kilisenin karşısında.'},
        {pronoun:'accanto a / vicino a',form:'yanında / yakınında',example:'La biblioteca è accanto al municipio.',tr:'Kütüphane belediyenin yanında.'},
        {pronoun:'dietro a / davanti a',form:'arkasında / önünde',example:'Il parcheggio è dietro al museo.',tr:'Otopark müzenin arkasında.'},
        {pronoun:'all\'angolo di',form:'köşesinde',example:'C\'è un bar all\'angolo della piazza.',tr:'Meydanın köşesinde bir bar var.'}
      ],
      note:'"A sinistra" (solda), "a destra" (sağda), "dritto/sempre dritto" (düz/doğru) — yol tarifi için temel ifadeler.'
    },
    {
      id:'g3',
      title:'C\'è / Ci Sono: Var/Yok İfadesi',
      title_en:'C\'è / Ci Sono: There Is / There Are',
      explanation:'"C\'è" (var — tekil), "ci sono" (var — çoğul), "non c\'è" (yok), "non ci sono" (yok — çoğul).',
      table:[
        {pronoun:'c\'è',form:'tekil var',example:'C\'è una farmacia qui vicino?',tr:'Yakında eczane var mı?'},
        {pronoun:'ci sono',form:'çoğul var',example:'Ci sono molti ristoranti in questa via.',tr:'Bu sokakta çok restoran var.'},
        {pronoun:'non c\'è',form:'tekil yok',example:'Non c\'è un bancomat in questo quartiere.',tr:'Bu mahallede ATM yok.'},
        {pronoun:'Quanto c\'è?',form:'ne kadar uzak?',example:'Quanto c\'è da qui al centro?',tr:'Buradan merkeze ne kadar?'}
      ],
      note:'"C\'è" = "ci + è" kısaltması. Sorularda: "C\'è qualcosa da vedere qui?" (Burada görülecek bir şey var mı?)'
    }
  ],
  speaking:[
    {id:'sp1',en:'Scusi, dov\'è la stazione più vicina?',tr:'Affedersiniz, en yakın istasyon nerede?',prompt:'Yol sor'},
    {id:'sp2',en:'Il centro storico è a due chilometri da qui.',tr:'Tarihi merkez buradan iki kilometre uzakta.',prompt:'Mesafe belirt'},
    {id:'sp3',en:'C\'è un buon ristorante in questo quartiere?',tr:'Bu mahallede iyi bir restoran var mı?',prompt:'Öneri iste'},
    {id:'sp4',en:'Il museo è chiuso il lunedì, quindi andiamo martedì.',tr:'Müze pazartesi kapalı, bu yüzden salı gideceğiz.',prompt:'Plan değiştir'},
    {id:'sp5',en:'Mi sono perso, puoi aiutarmi? Cerco il Ponte Vecchio.',tr:'Kayboldum, yardımcı olabilir misin? Ponte Vecchio\'yu arıyorum.',prompt:'Yardım iste'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Şehirde Kaybolmak',
      title_en:'Getting Lost in the City',
      lines:[
        {speaker:'A',gender:'m',en:'Scusi, mi sono perso. Sto cercando Piazza Navona.',tr:'Affedersiniz, kayboldum. Piazza Navona\'yı arıyorum.',bd:[{ro:'mi sono perso',tr:'kayboldum',role:'expression'},{ro:'Sto cercando',tr:'arıyorum',role:'verb'}]},
        {speaker:'B',gender:'f',en:'Piazza Navona! Sì, non è lontana. Deve andare dritto per questa via fino al semaforo.',tr:'Piazza Navona! Evet, uzak değil. Bu yoldan trafik ışığına kadar düz gitmeniz lazım.',bd:[{ro:'non è lontana',tr:'uzak değil',role:'distance'},{ro:'dritto per questa via',tr:'bu yoldan düz',role:'direction'}]},
        {speaker:'A',gender:'m',en:'Al semaforo, cosa faccio?',tr:'Trafik ışığında ne yapayım?',bd:[{ro:'Al semaforo',tr:'trafik ışığında',role:'landmark'},{ro:'cosa faccio?',tr:'ne yapayım?',role:'question'}]},
        {speaker:'B',gender:'f',en:'Al semaforo gira a sinistra, poi vai dritto ancora duecento metri. La piazza è sulla destra, non puoi sbagliarti.',tr:'Trafik ışığında sola dön, sonra iki yüz metre daha düz git. Meydan sağda, yanlış yapamazsın.',bd:[{ro:'gira a sinistra',tr:'sola dön',role:'direction'},{ro:'sulla destra',tr:'sağda',role:'position'},{ro:'non puoi sbagliarti',tr:'yanlış yapamazsın',role:'assurance'}]},
        {speaker:'A',gender:'m',en:'Grazie mille! E c\'è un bar vicino alla piazza? Voglio bere qualcosa.',tr:'Çok teşekkürler! Meydanın yakınında bir bar var mı? Bir şeyler içmek istiyorum.',bd:[{ro:'c\'è un bar vicino alla piazza?',tr:'meydana yakın bar var mı?',role:'question'},{ro:'Voglio bere qualcosa',tr:'bir şeyler içmek istiyorum',role:'desire'}]},
        {speaker:'B',gender:'f',en:'Certo! Ci sono molti bar intorno alla piazza. È molto turistica, trovi tutto lì.',tr:'Tabii! Meydanın etrafında çok bar var. Çok turistik bir yer, her şeyi orada bulursun.',bd:[{ro:'Ci sono molti bar intorno alla piazza',tr:'meydanın etrafında çok bar var',role:'info'},{ro:'trovi tutto lì',tr:'her şeyi orada bulursun',role:'assurance'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Benvenuti a Siena! Siena è una città medievale bellissima in Toscana. Il punto principale è Piazza del Campo, una delle piazze più belle del mondo. Intorno alla piazza ci sono palazzi storici e il famoso Palazzo Pubblico con la sua torre. Il centro storico è tutto pedonale, quindi potete passeggiare liberamente. Non dimenticate di visitare il Duomo di Siena, capolavoro del gotico italiano.',
      tr:'Siena\'ya hoş geldiniz! Siena, Toskana\'da çok güzel bir ortaçağ şehri. Ana nokta, dünyanın en güzel meydanlarından biri olan Piazza del Campo. Meydanın etrafında tarihi binalar ve kule ile ünlü Palazzo Pubblico var. Tarihi merkez tamamen yayaya ait, bu yüzden özgürce gezebilirsiniz. İtalyan Gotik\'in şaheseri olan Siena Katedrali\'ni ziyaret etmeyi unutmayın.',
      questions:[
        {q:'Siena hangi bölgede?',opts:['Lazio','Lombardia','Toscana','Veneto'],answer:2,tr:'Toscana'},
        {q:'Piazza del Campo ne ile çevrili?',opts:['Bahçeler ve parklar','Tarihi binalar ve Palazzo Pubblico','Sadece kiliseler','Modern binalar'],answer:1,tr:'Tarihi binalar ve Palazzo Pubblico'},
        {q:'Tarihi merkez nasıl?',opts:['Araç trafiğine açık','Sadece bisikletlere açık','Tamamen yayaya ait','Trafik ışıklı'],answer:2,tr:'Tamamen yayaya ait (pedonale)'}
      ]
    }
  ],
  tones:[]
};
LESSONS[24] = L24;
