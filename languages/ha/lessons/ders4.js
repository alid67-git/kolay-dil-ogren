// ders4.js — Hausa Lesson 4: Restaurant & Food
const L4 = {
  words: [
    {id:'w1', ha:'Abinci', ro:'a-bin-ci', tr:'Yiyecek / Yemek',
     tip:'Genel yiyecek ve yemek kelimesi.',
     ctx:'Her türlü yiyecek için kullanılır.',
     examples:[{
       ha:'Abinci ya yi dadi.', ro:'a-bin-ci ya yi da-di', tr:'Yemek lezzetli.',
       bd:[{ro:'Abinci',tr:'Yemek',role:'isim',note:'Yiyecek.'},{ro:'ya yi dadi',tr:'lezzetli',role:'fiil+sıfat',note:'Lezzet ifadesi.'}]
     }]
    },
    {id:'w2', ha:'Ruwa', ro:'ru-wa', tr:'Su',
     tip:'Su ve sıvı için temel kelime.',
     ctx:'Su ve genel sıvılar için.',
     examples:[{
       ha:'Ina so ruwa, don Allah.', ro:'i-na so ru-wa don al-lah', tr:'Su istiyorum lütfen.',
       bd:[{ro:'Ina so',tr:'İstiyorum',role:'fiil',note:'İstek fiili.'},{ro:'ruwa',tr:'su',role:'isim',note:'Su.'},{ro:'don Allah',tr:'lütfen',role:'nezaket',note:'Nezaket ifadesi.'}]
     }]
    },
    {id:'w3', ha:'Nama', ro:'na-ma', tr:'Et',
     tip:'Genel et kelimesi. Hayvan eti için kullanılır.',
     ctx:'Kırmızı et ve genel et alışverişinde.',
     examples:[{
       ha:'Nama nawa ne?', ro:'na-ma na-wa ne', tr:'Et ne kadar?',
       bd:[{ro:'Nama',tr:'Et',role:'isim',note:'Hayvan eti.'},{ro:'nawa ne',tr:'ne kadar',role:'soru',note:'Fiyat sorusu.'}]
     }]
    },
    {id:'w4', ha:'Kifi', ro:'ki-fi', tr:'Balık',
     tip:'Taze veya kurutulmuş balık.',
     ctx:'Balık yemeği ve alışverişte.',
     examples:[{
       ha:'Ina so miyan kifi.', ro:'i-na so mi-yan ki-fi', tr:'Balık çorbası istiyorum.',
       bd:[{ro:'Ina so',tr:'İstiyorum',role:'fiil',note:'İstek.'},{ro:'miyan kifi',tr:'balık çorbası',role:'isim',note:'Balıklı çorba.'}]
     }]
    },
    {id:'w5', ha:'Kaji', ro:'ka-ji', tr:'Tavuk',
     tip:'Hausa mutfağında sık kullanılan protein kaynağı.',
     ctx:'Tavuk yemeği siparişinde.',
     examples:[{
       ha:'Suyan kaji ya yi dadi sosai!', ro:'su-yan ka-ji ya yi da-di so-sai', tr:'Tavuk suya çok lezzetli!',
       bd:[{ro:'Suyan kaji',tr:'Tavuk suya',role:'isim',note:'Tavuk ızgarası.'},{ro:'ya yi dadi sosai',tr:'çok lezzetli',role:'sıfat',note:'Pekiştirmeli lezzet.'}]
     }]
    },
    {id:'w6', ha:'Tuwo', ro:'tu-wo', tr:'Tuwo (temel tahıl yemeği)',
     tip:"Hausa'nın temel yiyeceği. Mısır, darı veya pirinçten yapılır.",
     ctx:"Hausa mutfağının ana yiyeceği.",
     examples:[{
       ha:'Ina so tuwo da miya.', ro:'i-na so tu-wo da mi-ya', tr:'Tuwo ve çorba istiyorum.',
       bd:[{ro:'Ina so',tr:'İstiyorum',role:'fiil',note:'İstek.'},{ro:'tuwo',tr:'tuwo',role:'isim',note:'Tahıl yemeği.'},{ro:'da miya',tr:'ve çorba',role:'ek',note:'Çorba ile.'}]
     }]
    },
    {id:'w7', ha:'Miyan kuka', ro:'mi-yan ku-ka', tr:'Baobab çorbası',
     tip:'Baobab ağacı yapraklarından yapılan geleneksel çorba.',
     ctx:'Geleneksel Hausa restoranında sipariş.',
     examples:[{
       ha:'Miyan kuka da tuwo — lallai ne!', ro:'mi-yan ku-ka da tu-wo lal-lai ne', tr:'Baobab çorbası ve tuwo — harika!',
       bd:[{ro:'Miyan kuka',tr:'Baobab çorbası',role:'isim',note:'Geleneksel çorba.'},{ro:'lallai ne',tr:'gerçekten harika',role:'onay',note:'Onay ifadesi.'}]
     }]
    },
    {id:'w8', ha:'Miyan taushe', ro:'mi-yan tau-she', tr:'Kabak çorbası',
     tip:'Balkabağından yapılan besleyici çorba.',
     ctx:'Hausa geleneksel mutfağında.',
     examples:[{
       ha:'Miyan taushe da nama ya yi dadi.', ro:'mi-yan tau-she da na-ma ya yi da-di', tr:'Etli kabak çorbası lezzetli.',
       bd:[{ro:'Miyan taushe',tr:'Kabak çorbası',role:'isim',note:'Geleneksel çorba.'},{ro:'da nama',tr:'etli',role:'ek',note:'Etle birlikte.'},{ro:'ya yi dadi',tr:'lezzetli',role:'fiil',note:'Lezzet.'}]
     }]
    },
    {id:'w9', ha:'Suya', ro:'su-ya', tr:'Suya (şişte ızgara et)',
     tip:"Hausa'nın en ünlü sokak yiyeceği. Baharatlı ızgara et.",
     ctx:'Sokak yiyeceği olarak veya restoranda.',
     examples:[{
       ha:'Biyu suya, don Allah.', ro:'bi-yu su-ya don al-lah', tr:'İki tane suya lütfen.',
       bd:[{ro:'Biyu suya',tr:'İki suya',role:'sipariş',note:'Sipariş miktarı.'},{ro:'don Allah',tr:'lütfen',role:'nezaket',note:'Nazik istek.'}]
     }]
    },
    {id:'w10', ha:'Nono', ro:'no-no', tr:'Nono (yoğurt içeceği)',
     tip:'Fulani pastörlerin geleneksel yoğurt içeceği.',
     ctx:'İçecek siparişlerinde.',
     examples:[{
       ha:'Nono mai sanyi ina so.', ro:'no-no mai san-yi i-na so', tr:'Soğuk nono istiyorum.',
       bd:[{ro:'Nono',tr:'Nono (yoğurt)',role:'isim',note:'Geleneksel içecek.'},{ro:'mai sanyi',tr:'soğuk',role:'sıfat',note:'Soğuk olan.'},{ro:'ina so',tr:'istiyorum',role:'fiil',note:'İstek.'}]
     }]
    },
    {id:'w11', ha:'Burodin', ro:'bu-ro-din', tr:'Ekmek',
     tip:'İngilizceden alıntı (bread). Özellikle beyaz ekmek.',
     ctx:'Kahvaltı ve atıştırmalık.',
     examples:[{
       ha:'Burodin da mai shanu.', ro:'bu-ro-din da mai sha-nu', tr:'Ekmek ve tereyağ.',
       bd:[{ro:'Burodin',tr:'Ekmek',role:'isim',note:'Beyaz ekmek.'},{ro:'da mai shanu',tr:'ve tereyağ',role:'ek',note:'Tereyağıyla.'}]
     }]
    },
    {id:'w12', ha:'Shinkafa', ro:'shin-ka-fa', tr:'Pirinç',
     tip:"Hausa mutfağında yaygın olarak kullanılır.",
     ctx:'Pilav ve pirinç yemeklerinde.',
     examples:[{
       ha:'Shinkafa da miya.', ro:'shin-ka-fa da mi-ya', tr:'Pirinç ve çorba.',
       bd:[{ro:'Shinkafa',tr:'Pirinç',role:'isim',note:'Tahıl.'},{ro:'da miya',tr:'ve çorba',role:'ek',note:'Çorba ile.'}]
     }]
    },
    {id:'w13', ha:'Gyaɗa', ro:'gya-da', tr:'Yer fıstığı',
     tip:'Hausa mutfağında çok önemli. Yağ ve soslar için kullanılır.',
     ctx:'Soslar, atıştırmalıklar ve pişirimde.',
     examples:[{
       ha:'Gyaɗa mai dadin gaske.', ro:'gya-da mai da-din gas-ke', tr:'Gerçekten lezzetli fıstık.',
       bd:[{ro:'Gyaɗa',tr:'Yer fıstığı',role:'isim',note:'Fıstık.'},{ro:'mai dadin gaske',tr:'gerçekten lezzetli',role:'sıfat',note:'Çok lezzetli.'}]
     }]
    },
    {id:'w14', ha:'Rogo', ro:'ro-go', tr:'Manyok (cassava)',
     tip:'Batı Afrika mutfağının temel karbonhidrat kaynağı.',
     ctx:'Yemek ve atıştırmalıklarda.',
     examples:[{
       ha:'Rogo na ci da miya.', ro:'ro-go na ci da mi-ya', tr:'Manyoyu çorbayla yedim.',
       bd:[{ro:'Rogo',tr:'Manyok',role:'isim',note:'Bitki kökü.'},{ro:'na ci da miya',tr:'çorbayla yedim',role:'fiil',note:'Yemek.'}]
     }]
    },
    {id:'w15', ha:'Abin sha', ro:'a-bin sha', tr:'İçecek',
     tip:'"Abin sha" = içilecek şey. Genel içecek terimi.',
     ctx:'İçecek siparişinde.',
     examples:[{
       ha:'Wane irin abin sha kuke so?', ro:'wa-ne i-rin a-bin sha ku-ke so', tr:'Ne tür içecek istersiniz?',
       bd:[{ro:'Wane irin',tr:'Ne tür',role:'soru',note:'Tür sorusu.'},{ro:'abin sha',tr:'içecek',role:'isim',note:'İçilecek şey.'},{ro:'kuke so',tr:'istersiniz',role:'fiil',note:'İstemek.'}]
     }]
    },
    {id:'w16', ha:'Nawa ne asusun?', ro:'na-wa ne a-su-sun', tr:'Hesap ne kadar?',
     tip:'Restoranda hesap istemek için.',
     ctx:'Yemek sonrası ödeme zamanı.',
     examples:[{
       ha:'Don Allah, nawa ne asusun?', ro:'don al-lah na-wa ne a-su-sun', tr:'Lütfen, hesap ne kadar?',
       bd:[{ro:'Don Allah',tr:'Lütfen',role:'nezaket',note:'Nazik istek.'},{ro:'nawa ne asusun',tr:'hesap ne kadar',role:'soru',note:'Fatura sorusu.'}]
     }]
    },
    {id:'w17', ha:'Ina so...', ro:'i-na so', tr:'... istiyorum',
     tip:'Sipariş ve istek için temel ifade.',
     ctx:'Sipariş verirken.',
     examples:[{
       ha:'Ina so suya da ruwa.', ro:'i-na so su-ya da ru-wa', tr:'Suya ve su istiyorum.',
       bd:[{ro:'Ina so',tr:'İstiyorum',role:'fiil',note:'İstek fiili.'},{ro:'suya da ruwa',tr:'suya ve su',role:'nesne',note:'Sipariş içeriği.'}]
     }]
    },
    {id:'w18', ha:'Mai dadi', ro:'mai da-di', tr:'Lezzetli / Güzel',
     tip:'"Mai" sahip olan, "dadi" tatlılık/lezzet.',
     ctx:'Yemek beğenisi ifade ederken.',
     examples:[{
       ha:'Wannan abinci mai dadi ne!', ro:'wan-nan a-bin-ci mai da-di ne', tr:'Bu yemek çok lezzetli!',
       bd:[{ro:'Wannan abinci',tr:'Bu yemek',role:'isim',note:'Yiyecek.'},{ro:'mai dadi ne',tr:'lezzetli',role:'sıfat',note:'Lezzet ifadesi.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:'Sipariş Verme: Ina so...', title_en:'Ordering Food: Ina so...',
     explanation:"'Ina so' = İstiyorum. Sipariş verirken 'Ina so + yiyecek/içecek' şeklinde kullanılır. 'Don Allah' (lütfen) eklenirse daha kibar olur.",
     table:[
       {pronoun:'Tekil istek', form:'Ina so + isim', example:'Ina so suya.', tr:'Suya istiyorum.'},
       {pronoun:'Çoğul istek', form:'Ina so + sayı + isim', example:'Ina so biyu suya.', tr:'İki suya istiyorum.'},
       {pronoun:'Kibar istek', form:'Ina so... don Allah', example:'Ina so ruwa, don Allah.', tr:'Su istiyorum, lütfen.'},
       {pronoun:'Reddetme', form:'Ban so... ba', example:'Ban so kifi ba.', tr:'Balık istemiyorum.'},
     ],
     note:"'Don Allah' = lütfen. Hausa'da kibar ricalar için sıklıkla kullanılır."
    },
    {id:'g2', title:'Sayı + Yiyecek', title_en:'Numbers with Food',
     explanation:'Hausa\'da sayılar genellikle yiyecekten önce veya sonra gelir. Sipariş ederken "sayı + yiyecek" veya "yiyecek + sayı" denilebilir.',
     table:[
       {pronoun:'Bir tane', form:'Ɗaya / ɗaya ne', example:'Suya ɗaya ne.', tr:'Bir tane suya.'},
       {pronoun:'İki tane', form:'Biyu', example:'Kifi biyu, don Allah.', tr:'İki balık lütfen.'},
       {pronoun:'Üç tane', form:'Uku', example:'Burodin uku ina so.', tr:'Üç ekmek istiyorum.'},
       {pronoun:'Yarım', form:'Rabi', example:'Rabi kaji.', tr:'Yarım tavuk.'},
     ],
     note:"'Rabi' yarım demektir. Miktarlar da 'ɗan' kelimesiyle azaltılabilir: 'ɗan ruwa' = biraz su."
    },
    {id:'g3', title:'Lezzet ve Beğeni İfadeleri', title_en:'Expressing Taste and Appreciation',
     explanation:"Hausa'da yemek beğenisini ifade etmek için çeşitli ifadeler kullanılır.",
     table:[
       {pronoun:'Lezzetli', form:'Mai dadi', example:'Abinci mai dadi ne.', tr:'Yemek lezzetli.'},
       {pronoun:'Çok lezzetli', form:'Mai dadi sosai', example:'Suya mai dadi sosai!', tr:'Suya çok lezzetli!'},
       {pronoun:'Kötü', form:'Bai yi dadi ba', example:'Bai yi dadi ba.', tr:'Lezzetli değil.'},
       {pronoun:'Tatlı', form:'Mai zaki', example:'Abin sha mai zaki ne.', tr:'İçecek tatlı.'},
       {pronoun:'Baharatlı', form:'Mai zafi', example:'Miya mai zafi ce.', tr:'Çorba baharatlı.'},
     ],
     note:"'Sosai' = çok/gerçekten. Pekiştirme için kullanılır."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Ina so suya da ruwa.', tr:'Suya ve su istiyorum.', prompt:'Sipariş ver'},
    {id:'sp2', ha:'Nawa ne asusun?', tr:'Hesap ne kadar?', prompt:'Hesap iste'},
    {id:'sp3', ha:'Abinci mai dadi ne!', tr:'Yemek lezzetli!', prompt:'Yemeği beğen'},
    {id:'sp4', ha:'Don Allah, biyu suya.', tr:'Lütfen, iki suya.', prompt:'Kibar sipariş ver'},
    {id:'sp5', ha:'Wane irin abin sha kuke so?', tr:'Ne tür içecek istersiniz?', prompt:'İçecek sor'},
    {id:'sp6', ha:'Ban so kifi ba.', tr:'Balık istemiyorum.', prompt:'Bir şeyi reddet'},
    {id:'sp7', ha:'Miyan kuka da tuwo, don Allah.', tr:'Baobab çorbası ve tuwo, lütfen.', prompt:'Geleneksel yemek sipariş et'},
  ],
  dialogues: [
    {id:'d1', title:'Gidan Abinci — Restoran', title_tr:'Restoran Diyaloğu',
     lines:[
       {speaker:'A', gender:'m', ha:'Sannu! Ina so menu, don Allah.', tr:'Merhaba! Menü istiyorum lütfen.',
        gramNote:'Selamlama ve istek.',
        bd:[{ro:'Sannu',tr:'Merhaba',role:'selamlama',note:'Selamlama.'},{ro:'Ina so menu',tr:'Menü istiyorum',role:'istek',note:'Sipariş isteği.'}]},
       {speaker:'B', gender:'f', ha:'Yauwa, ga shi.', tr:'Tamam, buyurun.',
        gramNote:"'Ga shi' = buyurun/işte bu.",
        bd:[{ro:'Yauwa',tr:'Tamam',role:'kabul',note:'Onay.'},{ro:'ga shi',tr:'buyurun',role:'sunum',note:'Verme jesti.'}]},
       {speaker:'A', gender:'m', ha:'Ina so tuwo da miyan kuka da kifi.', tr:'Tuwo, baobab çorbası ve balık istiyorum.',
        gramNote:'Sipariş verme.',
        bd:[{ro:'Ina so',tr:'İstiyorum',role:'fiil',note:'İstek.'},{ro:'tuwo da miyan kuka da kifi',tr:'tuwo, baobab çorbası ve balık',role:'sipariş',note:'Yemek sipariş listesi.'}]},
       {speaker:'B', gender:'f', ha:'Yauwa, abin sha fa?', tr:'Tamam, içecek ne istersiniz?',
        gramNote:"'Fa' = peki ya / ve...",
        bd:[{ro:'Yauwa',tr:'Tamam',role:'kabul',note:'Onay.'},{ro:'abin sha fa',tr:'peki içecek',role:'soru',note:'İçecek sorusu.'}]},
       {speaker:'A', gender:'m', ha:'Nono mai sanyi, nagode.', tr:'Soğuk nono, teşekkürler.',
        gramNote:'İçecek siparişi.',
        bd:[{ro:'Nono mai sanyi',tr:'Soğuk nono',role:'sipariş',note:'İçecek.'},{ro:'nagode',tr:'teşekkürler',role:'nezaket',note:'Teşekkür.'}]},
       {speaker:'A', gender:'m', ha:'Don Allah, nawa ne asusun?', tr:'Lütfen, hesap ne kadar?',
        gramNote:'Hesap sorma.',
        bd:[{ro:'Don Allah',tr:'Lütfen',role:'nezaket',note:'Nazik istek.'},{ro:'nawa ne asusun',tr:'hesap ne kadar',role:'soru',note:'Fatura sorusu.'}]},
       {speaker:'B', gender:'f', ha:'Naira ɗari da sittin ne.', tr:'Yüz altmış Naira.',
        gramNote:'Fatura tutarı.',
        bd:[{ro:'Naira ɗari da sittin',tr:'Yüz altmış Naira',role:'para',note:'160 ₦.'},{ro:'ne',tr:'(bu)',role:'bağlaç',note:'Bağlama.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:'Ina so suya biyu da ruwa. Abinci mai dadi ne. Nawa ne asusun? Naira tamanin.',
     tr:'İki tane suya ve su istiyorum. Yemek lezzetli. Hesap ne kadar? Seksen Naira.',
     questions:[
       {q:'Kaç tane suya sipariş edildi?', opts:['İki','Bir','Üç','Dört'], answer:0, tr:'Kaç tane suya sipariş edildi?'},
       {q:'Hesap ne kadar?', opts:['80 Naira','100 Naira','60 Naira','120 Naira'], answer:0, tr:'Hesap ne kadar?'},
     ]
    },
  ],
};
LESSONS[4] = L4;
