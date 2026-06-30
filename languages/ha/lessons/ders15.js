// ders15.js — Hausa Lesson 15: Food & Drinks
const L15 = {
  words: [
    {id:'w1', ha:'Tuwo', ro:'tu-wo', tr:'Tuwo (tahıl lapası)',
     tip:"Hausa'nın temel yiyeceği. Mısır, darı veya pirinçten yapılır.",
     ctx:"Hausa mutfağının ana yemeği.",
     examples:[{
       ha:'Tuwo shinkafa da miyan kuka.', ro:'tu-wo shin-ka-fa da mi-yan ku-ka', tr:'Pirinç tuwosi ve baobab çorbası.',
       bd:[{ro:'Tuwo shinkafa',tr:'Pirinç tuwosi',role:'yemek',note:'Tahıl lapası.'},{ro:'da miyan kuka',tr:'ve baobab çorbası',role:'ek',note:'Çorba eşliği.'}]
     }]
    },
    {id:'w2', ha:'Miyan kuka', ro:'mi-yan ku-ka', tr:'Baobab çorbası',
     tip:'Baobab ağacı yapraklarından yapılan geleneksel çorba.',
     ctx:'Geleneksel Hausa yemekleri.',
     examples:[{
       ha:'Miyan kuka ta yi dadi.', ro:'mi-yan ku-ka ta yi da-di', tr:'Baobab çorbası lezzetli.',
       bd:[{ro:'Miyan kuka',tr:'Baobab çorbası',role:'yemek',note:'Geleneksel çorba.'},{ro:'ta yi dadi',tr:'lezzetli',role:'değerlendirme',note:'Lezzet.'}]
     }]
    },
    {id:'w3', ha:'Miyan taushe', ro:'mi-yan tau-she', tr:'Balkabağı çorbası',
     tip:'Balkabağından yapılan besleyici çorba.',
     ctx:'Geleneksel yemekler.',
     examples:[{
       ha:'Miyan taushe da nama da gyaɗa.', ro:'mi-yan tau-she da na-ma da gya-da', tr:'Etli ve fıstıklı balkabağı çorbası.',
       bd:[{ro:'Miyan taushe',tr:'Balkabağı çorbası',role:'yemek',note:'Çorba.'},{ro:'da nama da gyaɗa',tr:'et ve fıstık ile',role:'ek',note:'Malzemeler.'}]
     }]
    },
    {id:'w4', ha:'Suya', ro:'su-ya', tr:'Suya (şişte ızgara et)',
     tip:"Hausa'nın en ünlü sokak yiyeceği. Baharatlı şişte et.",
     ctx:'Sokak yiyeceği ve parti yemeği.',
     examples:[{
       ha:'Biyu suya don Allah.', ro:'bi-yu su-ya don al-lah', tr:'İki suya lütfen.',
       bd:[{ro:'Biyu suya',tr:'İki suya',role:'sipariş',note:'Sipariş.'},{ro:'don Allah',tr:'lütfen',role:'nezaket',note:'Nazik istek.'}]
     }]
    },
    {id:'w5', ha:'Kilishi', ro:'ki-li-shi', tr:'Kilishi (kurutulmuş baharatlı et)',
     tip:'Kurutulmuş, baharatlı dana eti. Hausa snack\'i.',
     ctx:'Atıştırmalık ve uzun yolculuklar.',
     examples:[{
       ha:'Kilishi abinci ne mai ɗaci mai dadi.', ro:'ki-li-shi a-bin-ci ne mai da-ci mai da-di', tr:'Kilishi lezzetli baharatlı bir yiyecektir.',
       bd:[{ro:'Kilishi',tr:'Kilishi',role:'yemek',note:'Kurutulmuş et.'},{ro:'mai ɗaci mai dadi',tr:'baharatlı ve lezzetli',role:'sıfat',note:'Özellikler.'}]
     }]
    },
    {id:'w6', ha:'Danwake', ro:'dan-wa-ke', tr:'Danwake (fasulye topları)',
     tip:'Hausa\'ya özgü fasulye unundan yapılan top şeklinde yemek.',
     ctx:'Geleneksel yemekler.',
     examples:[{
       ha:'Danwake da nono abinci ne mai dadi.', ro:'dan-wa-ke da no-no a-bin-ci ne mai da-di', tr:'Danwake ve nono lezzetli bir yemektir.',
       bd:[{ro:'Danwake da nono',tr:'Danwake ve nono',role:'yemek kombinasyonu',note:'Klasik kombinasyon.'},{ro:'abinci mai dadi',tr:'lezzetli yemek',role:'değerlendirme',note:'Beğeni.'}]
     }]
    },
    {id:'w7', ha:'Koko', ro:'ko-ko', tr:'Koko (sıvı tahıl lapası)',
     tip:'İnce kıvamlı tahıl lapası. Kahvaltı yiyeceği.',
     ctx:'Sabah kahvaltısı.',
     examples:[{
       ha:'Da safiya na sha koko.', ro:'da sa-fi-ya na sha ko-ko', tr:'Sabah koko içtim.',
       bd:[{ro:'Da safiya',tr:'Sabah',role:'zaman',note:'Sabah vakti.'},{ro:'na sha koko',tr:'koko içtim',role:'fiil',note:'İçme.'}]
     }]
    },
    {id:'w8', ha:'Kosai', ro:'ko-sai', tr:'Kosai (fasulye pankek)',
     tip:'Kızartılmış fasulye unu pankeki. Yaygın kahvaltı.',
     ctx:'Kahvaltı ve sokak yiyeceği.',
     examples:[{
       ha:'Kosai da koko abincin safiya ne.', ro:'ko-sai da ko-ko a-bin-cin sa-fi-ya ne', tr:'Kosai ve koko kahvaltı yiyeceği.',
       bd:[{ro:'Kosai da koko',tr:'Kosai ve koko',role:'yemek',note:'Kahvaltı kombinasyonu.'},{ro:'abincin safiya ne',tr:'kahvaltı yiyeceği',role:'tanım',note:'Sabah yiyeceği.'}]
     }]
    },
    {id:'w9', ha:'Gwaza', ro:'gwa-za', tr:'Fıstık çorbası',
     tip:'Yer fıstığından yapılan zengin çorba.',
     ctx:'Akşam yemekleri.',
     examples:[{
       ha:'Gwaza da tuwo — lallai ne mai dadi.', ro:'gwa-za da tu-wo lal-lai ne mai da-di', tr:'Fıstık çorbası ve tuwo — gerçekten lezzetli.',
       bd:[{ro:'Gwaza da tuwo',tr:'Fıstık çorbası ve tuwo',role:'yemek',note:'Klasik kombinasyon.'},{ro:'lallai ne mai dadi',tr:'gerçekten lezzetli',role:'pekiştirme',note:'Kuvvetli beğeni.'}]
     }]
    },
    {id:'w10', ha:'Nono', ro:'no-no', tr:'Nono (taze yoğurt içeceği)',
     tip:'Fulani sığır sütünden yapılan geleneksel yoğurt içeceği.',
     ctx:'Ferahlatıcı içecek.',
     examples:[{
       ha:'Nono mai sanyi ina so.', ro:'no-no mai san-yi i-na so', tr:'Soğuk nono istiyorum.',
       bd:[{ro:'Nono mai sanyi',tr:'Soğuk nono',role:'isim+sıfat',note:'Soğuk içecek.'},{ro:'ina so',tr:'istiyorum',role:'fiil',note:'İstek.'}]
     }]
    },
    {id:'w11', ha:'Shayi', ro:'sha-yi', tr:'Çay',
     tip:'Siyah çay. Hausa kahvaltısında yaygın.',
     ctx:'Kahvaltı ve misafir ikramı.',
     examples:[{
       ha:'Shayi da sukari ina so.', ro:'sha-yi da su-ka-ri i-na so', tr:'Şekerli çay istiyorum.',
       bd:[{ro:'Shayi',tr:'Çay',role:'içecek',note:'Siyah çay.'},{ro:'da sukari',tr:'şekerli',role:'ek',note:'Şeker ile.'}]
     }]
    },
    {id:'w12', ha:'Kofi', ro:'ko-fi', tr:'Kahve',
     tip:'Kahve içeceği. İngilizceden alıntı.',
     ctx:'Kahve içme.',
     examples:[{
       ha:'Kofi babu sukari.', ro:'ko-fi ba-bu su-ka-ri', tr:'Şekersiz kahve.',
       bd:[{ro:'Kofi',tr:'Kahve',role:'içecek',note:'Kahve.'},{ro:'babu sukari',tr:'şekersiz',role:'olumsuz nitelik',note:'Şeker yok.'}]
     }]
    },
    {id:'w13', ha:'Ruwa', ro:'ru-wa', tr:'Su',
     tip:'Hayat kaynağı ve temel içecek.',
     ctx:'İçme ve kullanma suyu.',
     examples:[{
       ha:'Ruwa mai sanyi ina nema.', ro:'ru-wa mai san-yi i-na ne-ma', tr:'Soğuk su arıyorum.',
       bd:[{ro:'Ruwa mai sanyi',tr:'Soğuk su',role:'isim+sıfat',note:'Soğuk su.'},{ro:'ina nema',tr:'arıyorum',role:'fiil',note:'Arama.'}]
     }]
    },
    {id:'w14', ha:'Lemo', ro:'le-mo', tr:'Limonata / Portakal suyu',
     tip:'Turunçgillerden yapılan soğuk içecek.',
     ctx:'Serinletici içecek.',
     examples:[{
       ha:'Lemo mai dadi ina so.', ro:'le-mo mai da-di i-na so', tr:'Lezzetli limonata istiyorum.',
       bd:[{ro:'Lemo mai dadi',tr:'Lezzetli limonata',role:'isim+sıfat',note:'İçecek niteliği.'},{ro:'ina so',tr:'istiyorum',role:'fiil',note:'İstek.'}]
     }]
    },
    {id:'w15', ha:'Giya', ro:'gi-ya', tr:'Bira / Fermente içecek',
     tip:'Alkolsüz veya hafif alkollü geleneksel içecek. "Burukutu" da denir.',
     ctx:'Geleneksel içecekler.',
     examples:[{
       ha:'Giya ta gargajeya ta Hausa.', ro:'gi-ya ta gar-ga-je-ya ta hau-sa', tr:'Geleneksel Hausa içeceği.',
       bd:[{ro:'Giya ta gargajeya',tr:'Geleneksel içecek',role:'tanım',note:'Kültürel referans.'},{ro:'ta Hausa',tr:'Hausa',role:'menşe',note:'Kültürel menşe.'}]
     }]
    },
    {id:'w16', ha:'Mangwaro', ro:'mang-wa-ro', tr:'Mango',
     tip:'Tropikal mango meyvesi. Sezonda bol bulunur.',
     ctx:'Meyve tüketimi.',
     examples:[{
       ha:'Mangwaro rawaya ya nuna ya nuna.', ro:'mang-wa-ro ra-wa-ya ya nu-na ya nu-na', tr:'Sarı mango olgunlaştı.',
       bd:[{ro:'Mangwaro rawaya',tr:'Sarı mango',role:'isim+sıfat',note:'Olgun meyve.'},{ro:'ya nuna ya nuna',role:'durum',tr:'olgunlaştı',note:'Olgunluk ifadesi.'}]
     }]
    },
    {id:'w17', ha:'Ayaba', ro:'a-ya-ba', tr:'Muz',
     tip:'Muz meyvesi. Tropikal.',
     ctx:'Meyve tüketimi.',
     examples:[{
       ha:'Ayaba ta yi rawaya.', ro:'a-ya-ba ta yi ra-wa-ya', tr:'Muz sarardı (olgunlaştı).',
       bd:[{ro:'Ayaba ta yi rawaya',tr:'Muz sarardı',role:'durum',note:'Olgunluk belirtisi.'}]
     }]
    },
    {id:'w18', ha:'Gwanda', ro:'gwan-da', tr:'Papaya',
     tip:'Papaya meyvesi.',
     ctx:'Meyve tüketimi.',
     examples:[{
       ha:'Gwanda mai zaki.', ro:'gwan-da mai za-ki', tr:'Tatlı papaya.',
       bd:[{ro:'Gwanda',tr:'Papaya',role:'isim',note:'Meyve.'},{ro:'mai zaki',tr:'tatlı',role:'sıfat',note:'Tat.'}]
     }]
    },
    {id:'w19', ha:'Lemun tsami', ro:'le-mun tsa-mi', tr:'Limon / Misket limonu',
     tip:'Ekşi limon. Yemek ve içeceklerde kullanılır.',
     ctx:'Limon suyu ve yemek hazırlığı.',
     examples:[{
       ha:'Lemun tsami ya ba abinci ɗanɗano.', ro:'le-mun tsa-mi ya ba a-bin-ci dan-da-no', tr:'Limon yemeğe tat katar.',
       bd:[{ro:'Lemun tsami ya ba abinci',tr:'Limon yemeğe katar',role:'fiil',note:'Ekleme.'},{ro:'ɗanɗano',tr:'tat/lezzet',role:'nesne',note:'Lezzet.'}]
     }]
    },
    {id:'w20', ha:'Kwakwa', ro:'kwa-kwa', tr:'Hindistancevizi',
     tip:'Hindistancevizi. Güneydeki bölgelerde kullanılır.',
     ctx:'Yemek ve içeceklerde.',
     examples:[{
       ha:'Madara ta kwakwa.', ro:'ma-da-ra ta kwa-kwa', tr:'Hindistancevizi sütü.',
       bd:[{ro:'Madara ta kwakwa',tr:'Hindistancevizi sütü',role:'isim',note:'Süt türü.'}]
     }]
    },
    {id:'w21', ha:'Albasa', ro:'al-ba-sa', tr:'Soğan',
     tip:'Soğan. Hausa yemeklerinde temel malzeme.',
     ctx:'Yemek pişirmede.',
     examples:[{
       ha:'Albasa ta zama muhimmi a dafa.', ro:'al-ba-sa ta za-ma mu-him-mi a da-fa', tr:'Soğan pişirmede önemli.',
       bd:[{ro:'Albasa ta zama muhimmi',tr:'Soğan önemli',role:'bilgi',note:'Önemi.'},{ro:'a dafa',tr:'pişirmede',role:'bağlam',note:'Mutfak kullanımı.'}]
     }]
    },
    {id:'w22', ha:'Tattasai', ro:'tat-ta-sai', tr:'Biber / Acı biber',
     tip:'Hem tatlı hem acı biber. Hausa yemeklerinde çok kullanılır.',
     ctx:'Yemek baharatı.',
     examples:[{
       ha:'Tattasai mai zafi ya sa miya ta ɗaci.', ro:'tat-ta-sai mai za-fi ya sa mi-ya ta da-ci', tr:'Acı biber çorbayı baharatlı yapar.',
       bd:[{ro:'Tattasai mai zafi',tr:'Acı biber',role:'malzeme',note:'Baharat.'},{ro:'ya sa miya ta ɗaci',tr:'çorbayı baharatlı yapar',role:'etki',note:'Sonuç.'}]
     }]
    },
    {id:'w23', ha:'Gishiri', ro:'gi-shi-ri', tr:'Tuz',
     tip:'Mutfak tuzu. Pişirmede vazgeçilmez.',
     ctx:'Yemek baharatı.',
     examples:[{
       ha:'Kara gishiri kadan.', ro:'ka-ra gi-shi-ri ka-dan', tr:'Biraz daha tuz ekle.',
       bd:[{ro:'Kara',tr:'Ekle/Artır',role:'emir',note:'Ekleme emri.'},{ro:'gishiri kadan',tr:'biraz tuz',role:'nesne',note:'Az miktarda tuz.'}]
     }]
    },
    {id:'w24', ha:'Mai', ro:'mai', tr:'Yağ / Tereyağı',
     tip:'"Mai" hem yağ hem de "sahip olan" anlamına gelir. Mutfakta yağ.',
     ctx:'Yemek pişirmede.',
     examples:[{
       ha:'Dafa da mai yawa.', ro:'da-fa da mai ya-wa', tr:'Çok yağ ile pişir.',
       bd:[{ro:'Dafa da mai yawa',tr:'Çok yağ ile pişir',role:'emir',note:'Pişirme talimatı.'}]
     }]
    },
    {id:'w25', ha:'Sukari', ro:'su-ka-ri', tr:'Şeker',
     tip:'Tatlandırıcı şeker.',
     ctx:'Tatlı yiyecek ve içeceklerde.',
     examples:[{
       ha:'Sukari da yawa a cikin shayi.', ro:'su-ka-ri da ya-wa a ci-kin sha-yi', tr:'Çayda çok şeker.',
       bd:[{ro:'Sukari da yawa',tr:'Çok şeker',role:'miktar',note:'Fazla şeker.'},{ro:'a cikin shayi',tr:'çayın içinde',role:'yer',note:'Çay içeriği.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:'Yemek Tarifi: Malzemeler', title_en:'Recipe Vocabulary: Ingredients',
     explanation:"'Da' = ile/ve. Yemek malzemelerini birbirine bağlamak için kullanılır.",
     table:[
       {pronoun:'Malzeme bağlama', form:'yemek + da + malzeme', example:'Tuwo da miyan kuka.', tr:'Tuwo ve baobab çorbası.'},
       {pronoun:'Çorba + Et', form:'miya + da + nama', example:'Miyan kuka da nama.', tr:'Baobab çorbası et ile.'},
       {pronoun:'Tatlı', form:'da + sukari', example:'Shayi da sukari.', tr:'Şekerli çay.'},
       {pronoun:'Ekşi', form:'da + lemun tsami', example:'Lemo da lemun tsami.', tr:'Limonlu limonata.'},
     ],
     note:"'Dafa' = pişirmek. 'Dafa abinci' = yemek pişirmek. Hausa mutfağında malzemeler sayısal olarak birleştirilir."
    },
    {id:'g2', title:'Yemek Siparişi: Tam Kalıplar', title_en:'Full Food Ordering Patterns',
     explanation:"Restoranda veya pazarda sipariş verirken tam kalıplar.",
     table:[
       {pronoun:'Sipariş', form:'Ina so + yemek', example:'Ina so suya biyu.', tr:'İki suya istiyorum.'},
       {pronoun:'Reddetme', form:'Ban so + yemek + ba', example:'Ban so tattasai ba.', tr:'Biber istemiyorum.'},
       {pronoun:'Beğeni', form:'Ya/ta yi dadi', example:'Miyan taushe ta yi dadi.', tr:'Balkabağı çorbası lezzetli.'},
       {pronoun:'Daha fazla', form:'Kara + yemek', example:'Kara gishiri kadan.', tr:'Biraz daha tuz ekle.'},
     ],
     note:"'Babu' = yok/olmadan. 'Kofi babu sukari' = şekersiz kahve. Yiyecek özelliklerini reddederken kullanılır."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Ina so tuwo da miyan kuka.', tr:'Tuwo ve baobab çorbası istiyorum.', prompt:'Geleneksel yemek sipariş et'},
    {id:'sp2', ha:'Suya mai dadi sosai!', tr:'Suya çok lezzetli!', prompt:'Yemeği beğen'},
    {id:'sp3', ha:'Shayi da sukari, don Allah.', tr:'Şekerli çay lütfen.', prompt:'Çay sipariş et'},
    {id:'sp4', ha:'Ban so tattasai ba.', tr:'Biber istemiyorum.', prompt:'Malzeme reddet'},
    {id:'sp5', ha:'Mangwaro rawaya — mai dadi ne.', tr:'Sarı mango — lezzetli.', prompt:'Meyveyi tarif et'},
    {id:'sp6', ha:'Kara gishiri kadan, don Allah.', tr:'Biraz daha tuz lütfen.', prompt:'Yemeği düzenle'},
  ],
  dialogues: [
    {id:'d1', title:'Gidan Abinci — Yemek Sohbeti', title_tr:'Yemek Sohbeti',
     lines:[
       {speaker:'A', gender:'f', ha:'Yaya abinci yau? Mun yi dafa?', tr:'Bugün yemek nasıl? Pişirelim mi?',
        gramNote:'Yemek sorusu.',
        bd:[{ro:'Yaya abinci yau',tr:'Bugün yemek nasıl',role:'soru',note:'Yemek sorgusu.'},{ro:'Mun yi dafa',tr:'Pişirelim mi',role:'teklif',note:'Pişirme teklifi.'}]},
       {speaker:'B', gender:'m', ha:'Ina so tuwo da miyan taushe. Kina da nama?', tr:'Tuwo ve balkabağı çorbası istiyorum. Etin var mı?',
        gramNote:'Sipariş ve malzeme sorusu.',
        bd:[{ro:'Ina so tuwo da miyan taushe',tr:'Tuwo ve balkabağı çorbası istiyorum',role:'sipariş',note:'Yemek talebi.'},{ro:'Kina da nama',tr:'Etin var mı',role:'soru',note:'Malzeme sorusu.'}]},
       {speaker:'A', gender:'f', ha:'Eh, akwai nama. Kuma albasa da tattasai da gishiri.', tr:'Evet, et var. Ayrıca soğan, biber ve tuz var.',
        gramNote:'Malzeme listesi.',
        bd:[{ro:'Akwai nama',tr:'Et var',role:'bilgi',note:'Malzeme onayı.'},{ro:'Kuma albasa da tattasai da gishiri',tr:'Ayrıca soğan biber tuz',role:'liste',note:'Diğer malzemeler.'}]},
       {speaker:'B', gender:'m', ha:'Kyau! Zan yi shayi yayinda kike dafa.', tr:'Harika! Pişirirken çay yapacağım.',
        gramNote:'Çalışma bölümü.',
        bd:[{ro:'Zan yi shayi',tr:'Çay yapacağım',role:'plan',note:'Gelecek eylem.'},{ro:'yayinda kike dafa',tr:'pişirirken',role:'zaman',note:'Eş zamanlı eylem.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:'Abincin Hausa ya yi dadi. Tuwo da miya, suya, kilishi, da koko — duk suna da dadi. Miyan kuka mafi dadi ce.',
     tr:'Hausa yemekleri lezzetli. Tuwo ve çorba, suya, kilishi ve koko — hepsi lezzetli. En lezzetlisi baobab çorbasıdır.',
     questions:[
       {q:'Hangi yemekler bahsedildi?', opts:['Tuwo, suya, kilishi ve koko','Tuwo, ekmek ve kahve','Suya, pizza ve kola','Sadece tuwo'], answer:0, tr:'Hangi yemekler bahsedildi?'},
       {q:'En lezzetli yemek hangisi?', opts:['Baobab çorbası','Suya','Kilishi','Koko'], answer:0, tr:'En lezzetli yemek hangisi?'},
     ]
    },
  ],
};
LESSONS[15] = L15;
