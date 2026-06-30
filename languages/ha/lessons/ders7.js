// ders7.js — Hausa Lesson 7: Transport & Travel
const L7 = {
  words: [
    {id:'w1', ha:'Mota', ro:'mo-ta', tr:'Araba / Otomobil',
     tip:'Her tür motorlu araç için kullanılabilir.',
     ctx:'Ulaşım ve araç kiralama.',
     examples:[{
       ha:'Ina so hayan mota.', ro:'i-na so ha-yan mo-ta', tr:'Araba kiralamak istiyorum.',
       bd:[{ro:'Ina so',tr:'İstiyorum',role:'fiil',note:'İstek.'},{ro:'hayan mota',tr:'araba kiralama',role:'isim',note:'Kiralık araç.'}]
     }]
    },
    {id:'w2', ha:'Keke', ro:'ke-ke', tr:'Bisiklet',
     tip:'Pedallı bisiklet.',
     ctx:'Kısa mesafe ulaşımı.',
     examples:[{
       ha:'Na tafi makaranta da keke.', ro:'na ta-fi ma-ka-ran-ta da ke-ke', tr:'Bisikletle okula gittim.',
       bd:[{ro:'Na tafi makaranta',tr:'Okula gittim',role:'fiil',note:'Gitmek.'},{ro:'da keke',tr:'bisikletle',role:'araç',note:'Ulaşım aracı.'}]
     }]
    },
    {id:'w3', ha:'Babur', ro:'ba-bur', tr:'Motosiklet',
     tip:'"Babur" İngilizceden alıntı. Şehir içi yaygın ulaşım.',
     ctx:'Şehir içi ulaşım ve teslimat.',
     examples:[{
       ha:'Babur da sauri yake.', ro:'ba-bur da sau-ri ya-ke', tr:'Motosiklet hızlı.',
       bd:[{ro:'Babur',tr:'Motosiklet',role:'isim',note:'İki tekerlekli araç.'},{ro:'da sauri yake',tr:'hızlı',role:'sıfat',note:'Hız ifadesi.'}]
     }]
    },
    {id:'w4', ha:'Jirgi', ro:'jir-gi', tr:'Tren / Uçak (genel)',
     tip:'"Jirgi" hem tren hem de uçak için kullanılabilir.',
     ctx:'Uzun mesafe seyahati.',
     examples:[{
       ha:'Jirgi ya wuce.', ro:'jir-gi ya wu-ce', tr:'Tren geçti.',
       bd:[{ro:'Jirgi',tr:'Tren/Araç',role:'isim',note:'Büyük araç.'},{ro:'ya wuce',tr:'geçti',role:'fiil',note:'Geçmek.'}]
     }]
    },
    {id:'w5', ha:'Jirgin ruwa', ro:'jir-gin ru-wa', tr:'Gemi / Tekne',
     tip:'"Jirgin ruwa" = su uçağı, yani gemi/tekne.',
     ctx:'Su yolu ulaşımı.',
     examples:[{
       ha:'Jirgin ruwa a kogi yake.', ro:'jir-gin ru-wa a ko-gi ya-ke', tr:'Gemi nehirde.',
       bd:[{ro:'Jirgin ruwa',tr:'Gemi',role:'isim',note:'Su taşıtı.'},{ro:'a kogi yake',tr:'nehirde',role:'yer',note:'Konum.'}]
     }]
    },
    {id:'w6', ha:'Jirgin sama', ro:'jir-gin sa-ma', tr:'Uçak',
     tip:'"Jirgin sama" = gökyüzü aracı. Uçak.',
     ctx:'Havayolu seyahati.',
     examples:[{
       ha:'Jirgin sama ya tashi.', ro:'jir-gin sa-ma ya ta-shi', tr:'Uçak kalktı.',
       bd:[{ro:'Jirgin sama',tr:'Uçak',role:'isim',note:'Hava taşıtı.'},{ro:'ya tashi',tr:'kalktı',role:'fiil',note:'Havalanmak.'}]
     }]
    },
    {id:'w7', ha:'Tasha', ro:'ta-sha', tr:'İstasyon / Durak',
     tip:'Otobüs, tren veya taksi durağı.',
     ctx:'Ulaşım noktaları.',
     examples:[{
       ha:'Ina tasha?', ro:'i-na ta-sha', tr:'İstasyon nerede?',
       bd:[{ro:'Ina',tr:'Nerede',role:'soru',note:'Yer sorusu.'},{ro:'tasha',tr:'istasyon/durak',role:'yer',note:'Durak yeri.'}]
     }]
    },
    {id:'w8', ha:'Tafiya', ro:'ta-fi-ya', tr:'Yolculuk / Seyahat',
     tip:'Seyahat ve yolculuk için genel kelime.',
     ctx:'Seyahat planlarından bahsederken.',
     examples:[{
       ha:'Tafiya ta yi nesa.', ro:'ta-fi-ya ta yi ne-sa', tr:'Yolculuk uzun.',
       bd:[{ro:'Tafiya',tr:'Yolculuk',role:'isim',note:'Seyahat.'},{ro:'ta yi nesa',tr:'uzun',role:'fiil',note:'Uzak olma.'}]
     }]
    },
    {id:'w9', ha:'Tikitin', ro:'ti-ki-tin', tr:'Bilet',
     tip:'Yolculuk bileti. İngilizceden alıntı.',
     ctx:'Bilet satın alırken.',
     examples:[{
       ha:'Ina so tikitin zuwa Kano.', ro:'i-na so ti-ki-tin zu-wa ka-no', tr:"Kano'ya bilet istiyorum.",
       bd:[{ro:'Ina so tikitin',tr:'Bilet istiyorum',role:'istek',note:'Bilet alma.'},{ro:'zuwa Kano',tr:"Kano'ya",role:'hedef',note:'Varış yeri.'}]
     }]
    },
    {id:'w10', ha:'Nawa ne kuɗin?', ro:'na-wa ne ku-din', tr:'Ücret ne kadar?',
     tip:'Ulaşım ücreti sormak için.',
     ctx:'Taksi, otobüs veya tren bilet fiyatı.',
     examples:[{
       ha:'Nawa ne kuɗin zuwa Abuja?', ro:'na-wa ne ku-din zu-wa a-bu-ja', tr:"Abuja'ya ücret ne kadar?",
       bd:[{ro:'Nawa ne kuɗin',tr:'Ücret ne kadar',role:'soru',note:'Fiyat sorusu.'},{ro:'zuwa Abuja',tr:"Abuja'ya",role:'hedef',note:'Varış noktası.'}]
     }]
    },
    {id:'w11', ha:'Na iso', ro:'na i-so', tr:'Geldim / Vardım',
     tip:'Varışı bildirmek için.',
     ctx:'Hedefe ulaştıktan sonra.',
     examples:[{
       ha:'Na iso lafiya.', ro:'na i-so la-fi-ya', tr:'Sağ salim geldim.',
       bd:[{ro:'Na iso',tr:'Geldim/Vardım',role:'fiil',note:'Varış bildirimi.'},{ro:'lafiya',tr:'sağ salim',role:'durum',note:'Güvenli varış.'}]
     }]
    },
    {id:'w12', ha:'Za ni tafi', ro:'za ni ta-fi', tr:'Gideceğim',
     tip:'Gelecekte gitmeyi ifade eder.',
     ctx:'Seyahat planlarından bahsederken.',
     examples:[{
       ha:'Za ni tafi Legas gobe.', ro:'za ni ta-fi le-gas go-be', tr:'Yarın Legas\'a gideceğim.',
       bd:[{ro:'Za ni tafi',tr:'Gideceğim',role:'fiil',note:'Gelecek zaman.'},{ro:'Legas gobe',tr:"Legas'a yarın",role:'hedef+zaman',note:'Varış ve zaman.'}]
     }]
    },
    {id:'w13', ha:'Fasinja', ro:'fa-sin-ja', tr:'Yolcu',
     tip:'Taşıt yolcusu.',
     ctx:'Yolcu listeleri ve ulaşım konuşmaları.',
     examples:[{
       ha:'Fasinja nawa a cikin mota?', ro:'fa-sin-ja na-wa a ci-kin mo-ta', tr:'Arabada kaç yolcu var?',
       bd:[{ro:'Fasinja nawa',tr:'Kaç yolcu',role:'soru',note:'Yolcu sayısı.'},{ro:'a cikin mota',tr:'arabada',role:'yer',note:'İçinde.'}]
     }]
    },
    {id:'w14', ha:'Akwati', ro:'ak-wa-ti', tr:'Bavul / Çanta / Bagaj',
     tip:'Seyahat bavulu ve bagaj.',
     ctx:'Havalimanı ve seyahat.',
     examples:[{
       ha:'Akwati na ya yi nauyi.', ro:'ak-wa-ti na ya yi nau-yi', tr:'Bavulum ağır.',
       bd:[{ro:'Akwati na',tr:'Benim bavulum',role:'isim',note:'İyelik.'},{ro:'ya yi nauyi',tr:'ağır',role:'sıfat',note:'Ağır olma.'}]
     }]
    },
    {id:'w15', ha:'Fasfo', ro:'fas-fo', tr:'Pasaport',
     tip:'Seyahat belgesi. İngilizceden alıntı.',
     ctx:'Uluslararası seyahat.',
     examples:[{
       ha:'Fasfo na ya ɓace.', ro:'fas-fo na ya ba-ce', tr:'Pasaportum kayboldu.',
       bd:[{ro:'Fasfo na',tr:'Benim pasaportum',role:'isim',note:'İyelik.'},{ro:'ya ɓace',tr:'kayboldu',role:'fiil',note:'Kayboluş.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:'Ulaşım Araçları ile Gitme: Da + Araç', title_en:'Traveling with a Vehicle: Da + Transport',
     explanation:"'Da + araç' = araçla. 'Da mota' = arabayla, 'da keke' = bisikletle.",
     table:[
       {pronoun:'Arabayla', form:'da mota', example:'Na tafi da mota.', tr:'Arabayla gittim.'},
       {pronoun:'Bisikletle', form:'da keke', example:'Na zo da keke.', tr:'Bisikletle geldim.'},
       {pronoun:'Motosikletle', form:'da babur', example:'Zan tafi da babur.', tr:'Motosikletle gideceğim.'},
       {pronoun:'Uçakla', form:'da jirgin sama', example:'Mun tafi da jirgin sama.', tr:'Uçakla gittik.'},
       {pronoun:'Yürüyerek', form:'da ƙafa', example:'Na zo da ƙafa.', tr:'Yürüyerek geldim.'},
     ],
     note:"'Da ƙafa' = ayakla/yürüyerek. 'Ƙafa' = ayak."
    },
    {id:'g2', title:'Bilet Alma ve Ücret Sormak', title_en:'Buying Tickets and Asking Fares',
     explanation:"Bilet alırken 'Ina so tikitin zuwa + yer' ve ücret sormak için 'Nawa ne kuɗin zuwa + yer?' kullanılır.",
     table:[
       {pronoun:'Bilet isteme', form:'Ina so tikitin zuwa...', example:'Ina so tikitin zuwa Kano.', tr:"Kano'ya bilet istiyorum."},
       {pronoun:'Ücret sorma', form:'Nawa ne kuɗin zuwa...?', example:'Nawa ne kuɗin zuwa Abuja?', tr:"Abuja'ya ücret ne kadar?"},
       {pronoun:'Kalkış saati', form:'Awa nawa za...?', example:'Awa nawa za jirgi ya tashi?', tr:'Tren saat kaçta kalkıyor?'},
       {pronoun:'Varış', form:'Na iso / Mun iso', example:'Mun iso lafiya.', tr:'Sağ salim geldik.'},
     ],
     note:"'Zuwa' = gitmek/doğru/-e. 'Daga' = -den/gelmek. 'Zuwa Kano' = Kano'ya, 'Daga Kano' = Kano'dan."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Ina so tikitin zuwa Kano.', tr:"Kano'ya bilet istiyorum.", prompt:'Bilet al'},
    {id:'sp2', ha:'Nawa ne kuɗin zuwa Abuja?', tr:"Abuja'ya ücret ne kadar?", prompt:'Ücret sor'},
    {id:'sp3', ha:'Jirgin sama ya tashi awa nawa?', tr:'Uçak saat kaçta kalkıyor?', prompt:'Kalkış saatini sor'},
    {id:'sp4', ha:'Fasfo na ina ne?', tr:'Pasaportum nerede?', prompt:'Pasaportunun yerini sor'},
    {id:'sp5', ha:'Na iso lafiya.', tr:'Sağ salim geldim.', prompt:'Varışını bildir'},
    {id:'sp6', ha:'Akwati nawa kake da shi?', tr:'Kaç tane bavulun var?', prompt:'Bavul sayısını sor'},
    {id:'sp7', ha:'Za ni tafi Legas da jirgin sama.', tr:"Uçakla Legas'a gideceğim.", prompt:'Seyahat planını söyle'},
  ],
  dialogues: [
    {id:'d1', title:'Bilet Alma', title_tr:'Bilet Satın Alma Diyaloğu',
     lines:[
       {speaker:'A', gender:'m', ha:'Sannu! Ina so tikitin zuwa Kano, don Allah.', tr:"Merhaba! Kano'ya bilet istiyorum lütfen.",
        gramNote:'Bilet talebi.',
        bd:[{ro:'Ina so tikitin',tr:'Bilet istiyorum',role:'istek',note:'Bilet alma.'},{ro:'zuwa Kano',tr:"Kano'ya",role:'hedef',note:'Varış yeri.'}]},
       {speaker:'B', gender:'f', ha:'Guda ɗaya ko fiye?', tr:'Bir tane mi yoksa daha fazla?',
        gramNote:'Miktar sorusu.',
        bd:[{ro:'Guda ɗaya',tr:'Bir tane',role:'sayı',note:'Tekil.'},{ro:'ko fiye',tr:'yoksa daha fazla',role:'soru',note:'Çoğul seçenek.'}]},
       {speaker:'A', gender:'m', ha:'Guda biyu — nawa ne kuɗin?', tr:'İki tane — ücret ne kadar?',
        gramNote:'Sayı ve ücret sorusu.',
        bd:[{ro:'Guda biyu',tr:'İki tane',role:'sayı',note:'Çift bilet.'},{ro:'nawa ne kuɗin',tr:'ücret ne kadar',role:'soru',note:'Fiyat sorusu.'}]},
       {speaker:'B', gender:'f', ha:'Kowane Naira ɗari biyar. Jirgi ya tashi awa huɗu da safe.', tr:'Her biri beş yüz Naira. Tren sabah dörtte kalkıyor.',
        gramNote:'Fiyat ve kalkış saati.',
        bd:[{ro:'Kowane',tr:'Her biri',role:'belirleyici',note:'Her.'},{ro:'Naira ɗari biyar',tr:'500 Naira',role:'fiyat',note:'Para.'},{ro:'Jirgi ya tashi awa huɗu',tr:'Tren saat dörtte kalkıyor',role:'bilgi',note:'Kalkış zamanı.'}]},
       {speaker:'A', gender:'m', ha:'Yauwa. Na biya Naira dubu ɗaya.', tr:'Tamam. Bin Naira ödüyorum.',
        gramNote:'Ödeme.',
        bd:[{ro:'Yauwa',tr:'Tamam',role:'kabul',note:'Onay.'},{ro:'Na biya Naira dubu ɗaya',tr:'Bin Naira ödüyorum',role:'fiil',note:'Ödeme.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:'Ina so tikitin zuwa Legas. Nawa ne kuɗin? Naira ɗari biyar. Jirgin sama ya tashi awa shida da safe.',
     tr:"Legas'a bilet istiyorum. Ücret ne kadar? Beş yüz Naira. Uçak sabah altıda kalkıyor.",
     questions:[
       {q:'Seyahat nereye?', opts:["Legas'a",'Kano\'ya','Abuja\'ya','Lagos\'a'], answer:0, tr:'Seyahat nereye?'},
       {q:'Bilet fiyatı ne kadar?', opts:['500 Naira','300 Naira','1000 Naira','700 Naira'], answer:0, tr:'Bilet fiyatı ne kadar?'},
     ]
    },
  ],
};
LESSONS[7] = L7;
