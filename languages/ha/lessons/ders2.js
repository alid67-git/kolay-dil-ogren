// ders2.js — Hausa Lesson 2: Numbers & Money
const L2 = {
  words: [
    {id:'w1', ha:'ɗaya', ro:'da-ya', tr:'Bir (1)',
     tip:'Tekil sayı. Hausa özel harfi ɗ kullanılır.',
     ctx:'Sayarken ve miktarları ifade ederken.',
     examples:[{
       ha:'Ɗaya ne.', ro:'da-ya ne', tr:'Bu bir tane.',
       bd:[{ro:'Ɗaya',tr:'Bir',role:'sayı',note:'1 sayısı.'},{ro:'ne',tr:'(bu/oluş)',role:'bağlaç',note:"Hausa'da bağlama fiili."}]
     }]
    },
    {id:'w2', ha:'biyu', ro:'bi-yu', tr:'İki (2)',
     tip:'Çift anlamı taşır.',
     ctx:'İki nesne sayarken.',
     examples:[{
       ha:'Mota biyu.', ro:'mo-ta bi-yu', tr:'İki araba.',
       bd:[{ro:'Mota',tr:'Araba',role:'isim',note:'Araç.'},{ro:'biyu',tr:'iki',role:'sayı',note:'2 sayısı.'}]
     }]
    },
    {id:'w3', ha:'uku', ro:'u-ku', tr:'Üç (3)',
     tip:'Üç nesne için.',
     ctx:'Sayma ve miktar belirtme.',
     examples:[{
       ha:'Yara uku.', ro:'ya-ra u-ku', tr:'Üç çocuk.',
       bd:[{ro:'Yara',tr:'Çocuklar',role:'isim',note:'Çocuklar.'},{ro:'uku',tr:'üç',role:'sayı',note:'3.'}]
     }]
    },
    {id:'w4', ha:'huɗu', ro:'hu-du', tr:'Dört (4)',
     tip:'Özel harf ɗ içerir.',
     ctx:'Dört nesne sayarken.',
     examples:[{
       ha:'Kwana huɗu.', ro:'kwa-na hu-du', tr:'Dört gece.',
       bd:[{ro:'Kwana',tr:'Gece',role:'isim',note:'Geceleme.'},{ro:'huɗu',tr:'dört',role:'sayı',note:'4.'}]
     }]
    },
    {id:'w5', ha:'biyar', ro:'bi-yar', tr:'Beş (5)',
     tip:'Parmak sayısına denk gelir.',
     ctx:'Beş nesne için.',
     examples:[{
       ha:'Naira biyar.', ro:'nai-ra bi-yar', tr:'Beş Naira.',
       bd:[{ro:'Naira',tr:'Naira (para birimi)',role:'para',note:'Nijeryalı para birimi.'},{ro:'biyar',tr:'beş',role:'sayı',note:'5.'}]
     }]
    },
    {id:'w6', ha:'shida', ro:'shi-da', tr:'Altı (6)',
     ctx:'Altı nesne sayarken.',
     examples:[{
       ha:'Awaki shida.', ro:'a-wa-ki shi-da', tr:'Altı keçi.',
       bd:[{ro:'Awaki',tr:'Keçiler',role:'isim',note:'Çoğul.'},{ro:'shida',tr:'altı',role:'sayı',note:'6.'}]
     }]
    },
    {id:'w7', ha:'bakwai', ro:'bak-wai', tr:'Yedi (7)',
     ctx:'Yedi nesne için.',
     examples:[{
       ha:'Kwana bakwai a mako.', ro:'kwa-na bak-wai a ma-ko', tr:'Haftada yedi gün.',
       bd:[{ro:'Kwana bakwai',tr:'Yedi gün',role:'miktar',note:'Zaman ifadesi.'},{ro:'a mako',tr:'haftada',role:'yer/zaman',note:'Haftalık.'}]
     }]
    },
    {id:'w8', ha:'takwas', ro:'tak-was', tr:'Sekiz (8)',
     ctx:'Sekiz nesne sayarken.',
     examples:[{
       ha:'Awa takwas.', ro:'a-wa tak-was', tr:'Sekiz saat.',
       bd:[{ro:'Awa',tr:'Saat',role:'isim',note:'Zaman birimi.'},{ro:'takwas',tr:'sekiz',role:'sayı',note:'8.'}]
     }]
    },
    {id:'w9', ha:'tara', ro:'ta-ra', tr:'Dokuz (9)',
     ctx:'Dokuz nesne için.',
     examples:[{
       ha:'Shekara tara.', ro:'she-ka-ra ta-ra', tr:'Dokuz yıl.',
       bd:[{ro:'Shekara',tr:'Yıl',role:'isim',note:'Zaman birimi.'},{ro:'tara',tr:'dokuz',role:'sayı',note:'9.'}]
     }]
    },
    {id:'w10', ha:'goma', ro:'go-ma', tr:'On (10)',
     tip:'Temel on sayısı. Büyük sayılar için temel.',
     ctx:'On nesne ve büyük sayılarda temel.',
     examples:[{
       ha:'Naira goma.', ro:'nai-ra go-ma', tr:'On Naira.',
       bd:[{ro:'Naira goma',tr:'On Naira',role:'para',note:'Para miktarı.'}]
     }]
    },
    {id:'w11', ha:'sha ɗaya', ro:'sha da-ya', tr:'On bir (11)',
     tip:'"Sha" = artı/ve (sayılarda). Sha + sayı = 10 + sayı.',
     ctx:'11-19 arası sayılar "sha" ile oluşturulur.',
     examples:[{
       ha:'Shekara sha ɗaya.', ro:'she-ka-ra sha da-ya', tr:'On bir yıl.',
       bd:[{ro:'sha',tr:'artı (sayıda)',role:'ön ek',note:'On artı anlamında.'},{ro:'ɗaya',tr:'bir',role:'sayı',note:'1.'}]
     }]
    },
    {id:'w12', ha:'ashirin', ro:'a-shi-rin', tr:'Yirmi (20)',
     tip:'Onlar basamağı için temel kelime.',
     ctx:'20 ve katları için.',
     examples:[{
       ha:'Naira ashirin.', ro:'nai-ra a-shi-rin', tr:'Yirmi Naira.',
       bd:[{ro:'Naira ashirin',tr:'Yirmi Naira',role:'para',note:'Para miktarı.'}]
     }]
    },
    {id:'w13', ha:'talatin', ro:'ta-la-tin', tr:'Otuz (30)',
     ctx:'30 sayısı için.',
     examples:[{
       ha:'Shekaransa talatin.', ro:'she-ka-ran-sa ta-la-tin', tr:'O otuz yaşında.',
       bd:[{ro:'Shekaransa',tr:'Yaşı',role:'isim',note:'Yaş ifadesi.'},{ro:'talatin',tr:'otuz',role:'sayı',note:'30.'}]
     }]
    },
    {id:"w14", ha:"arba'in", ro:'ar-ba-in', tr:'Kırk (40)',
     ctx:'40 sayısı için.',
     examples:[{
       ha:"Naira arba'in.", ro:"nai-ra ar-ba-in", tr:'Kırk Naira.',
       bd:[{ro:"Naira arba'in",tr:'Kırk Naira',role:'para',note:'Para miktarı.'}]
     }]
    },
    {id:'w15', ha:'hamsin', ro:'ham-sin', tr:'Elli (50)',
     ctx:'50 sayısı için.',
     examples:[{
       ha:'Naira hamsin.', ro:'nai-ra ham-sin', tr:'Elli Naira.',
       bd:[{ro:'Naira hamsin',tr:'Elli Naira',role:'para',note:'Para miktarı.'}]
     }]
    },
    {id:'w16', ha:'sittin', ro:'sit-tin', tr:'Altmış (60)',
     ctx:'60 sayısı.',
     examples:[{
       ha:'Sittin da biyu — sittin biyu.', ro:'sit-tin da bi-yu', tr:'Altmış iki (62).',
       bd:[{ro:'sittin',tr:'altmış',role:'sayı',note:'60.'},{ro:'da biyu',tr:'ve iki',role:'ekleme',note:'Ekleme ifadesi.'}]
     }]
    },
    {id:"w17", ha:"saba'in", ro:'sa-ba-in', tr:'Yetmiş (70)',
     ctx:'70 sayısı.',
     examples:[{
       ha:"Naira saba'in.", ro:'nai-ra sa-ba-in', tr:'Yetmiş Naira.',
       bd:[{ro:"Naira saba'in",tr:'Yetmiş Naira',role:'para',note:'Para.'}]
     }]
    },
    {id:'w18', ha:'tamanin', ro:'ta-ma-nin', tr:'Seksen (80)',
     ctx:'80 sayısı.',
     examples:[{
       ha:'Tamanin da biyar ne.', ro:'ta-ma-nin da bi-yar ne', tr:'Seksen beş.',
       bd:[{ro:'Tamanin',tr:'Seksen',role:'sayı',note:'80.'},{ro:'da biyar',tr:'ve beş',role:'ekleme',note:'Artı beş.'}]
     }]
    },
    {id:"w19", ha:"casa'in", ro:'ka-sa-in', tr:'Doksan (90)',
     ctx:'90 sayısı.',
     examples:[{
       ha:"Casa'in da goma.", ro:"ka-sa-in da go-ma", tr:'Yüz (90+10).',
       bd:[{ro:"Casa'in",tr:'Doksan',role:'sayı',note:'90.'},{ro:'da goma',tr:'ve on',role:'ekleme',note:'Artı on.'}]
     }]
    },
    {id:'w20', ha:'ɗari', ro:'da-ri', tr:'Yüz (100)',
     tip:'Temel yüz sayısı.',
     ctx:'100 ve katları için.',
     examples:[{
       ha:'Naira ɗari.', ro:'nai-ra da-ri', tr:'Yüz Naira.',
       bd:[{ro:'Naira ɗari',tr:'Yüz Naira',role:'para',note:'Para.'}]
     }]
    },
    {id:'w21', ha:'dubu', ro:'du-bu', tr:'Bin (1000)',
     tip:'Büyük sayılar için temel.',
     ctx:'Bin ve üzeri miktarlar.',
     examples:[{
       ha:'Naira dubu biyar.', ro:'nai-ra du-bu bi-yar', tr:'Beş bin Naira.',
       bd:[{ro:'Naira',tr:'Para birimi',role:'para',note:'Nijerya parası.'},{ro:'dubu biyar',tr:'beş bin',role:'sayı',note:'5000.'}]
     }]
    },
    {id:'w22', ha:'Nawa ne?', ro:'na-wa ne', tr:'Ne kadar? / Fiyatı ne kadar?',
     tip:'Fiyat sormak için en temel ifade.',
     ctx:'Alışveriş sırasında fiyat sormak için.',
     examples:[{
       ha:'Wannan nawa ne?', ro:'wan-nan na-wa ne', tr:'Bu ne kadar?',
       bd:[{ro:'Wannan',tr:'Bu',role:'işaret zamiri',note:'Bu nesne.'},{ro:'nawa ne',tr:'ne kadar',role:'soru',note:'Fiyat sorusu.'}]
     }]
    },
    {id:'w23', ha:'Arha', ro:'ar-ha', tr:'Ucuz',
     tip:'Fiyatın düşük olduğunu ifade eder.',
     ctx:'Alışverişte beğeni belirtmek için.',
     examples:[{
       ha:'Ya yi arha.', ro:'ya yi ar-ha', tr:'Ucuz.',
       bd:[{ro:'Ya yi',tr:'Oldu/Olmuş',role:'fiil',note:'Durum fiili.'},{ro:'arha',tr:'ucuz',role:'sıfat',note:'Ucuz.'}]
     }]
    },
    {id:'w24', ha:'Tsada', ro:'tsa-da', tr:'Pahalı',
     tip:'Fiyatın yüksek olduğunu ifade eder.',
     ctx:'Fiyat şikayeti veya pazarlık.',
     examples:[{
       ha:'Tsada ne! Rage kadan.', ro:'tsa-da ne ra-ge ka-dan', tr:'Çok pahalı! Biraz indir.',
       bd:[{ro:'Tsada ne',tr:'Pahalı',role:'sıfat',note:'Yüksek fiyat.'},{ro:'Rage kadan',tr:'Biraz indir',role:'istek',note:'Pazarlık ifadesi.'}]
     }]
    },
    {id:'w25', ha:'Naira', ro:'nai-ra', tr:'Naira (para birimi)',
     tip:"Nijerya'nın resmi para birimi.",
     ctx:'Fiyat ve para konuşmalarında.',
     examples:[{
       ha:'Naira ɗari biyu ne.', ro:'nai-ra da-ri bi-yu ne', tr:'İki yüz Naira.',
       bd:[{ro:'Naira',tr:'Naira',role:'para birimi',note:'Nijerya parası.'},{ro:'ɗari biyu',tr:'iki yüz',role:'sayı',note:'200.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:"Hausa'da Sayı Sistemi", title_en:'Hausa Number System',
     explanation:"Hausa sayı sistemi 1-10 temel sayılardan oluşur. 11-19 arası 'sha' eklenerek, onluklar ise Arapça kökenli kelimelerle ifade edilir.",
     table:[
       {pronoun:'1-10', form:'ɗaya, biyu, uku, huɗu, biyar, shida, bakwai, takwas, tara, goma', example:'Naira goma.', tr:'On Naira.'},
       {pronoun:'11-19', form:'sha + sayı', example:'sha ɗaya (11), sha biyu (12)', tr:'On bir, On iki...'},
       {pronoun:'20, 30...', form:'ashirin, talatin, arba\'in...', example:'Ashirin da biyar (25)', tr:'Yirmi beş.'},
       {pronoun:'100, 1000', form:'ɗari, dubu', example:'Naira ɗari ɗaya (100 ₦)', tr:'Yüz Naira.'},
     ],
     note:"'Da' bağlacı iki sayıyı birbirine bağlar. Örn: ashirin da biyar = yirmi beş."
    },
    {id:'g2', title:'Alışverişte Fiyat Sorma', title_en:'Asking Prices While Shopping',
     explanation:"'Nawa ne?' temel fiyat sorusudur. Yanıt sayı + Naira şeklinde gelir.",
     table:[
       {pronoun:'Fiyat sormak', form:'Nawa ne?', example:'Wannan nawa ne?', tr:'Bu ne kadar?'},
       {pronoun:'Ucuz söylemek', form:'Ya yi arha.', example:'Wannan ya yi arha.', tr:'Bu ucuz.'},
       {pronoun:'Pahalı söylemek', form:'Tsada ne.', example:'Tsada ne sosai!', tr:'Çok pahalı!'},
       {pronoun:'İndirim istemek', form:'Rage kadan.', example:'Rage kadan, don Allah.', tr:'Biraz indir lütfen.'},
       {pronoun:'Ödeme yapmak', form:'Na biya.', example:'Na biya Naira ɗari.', tr:'Yüz Naira ödedim.'},
     ],
     note:"'Don Allah' = lütfen. Pazarlıkta sıkça kullanılır."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Ɗaya, biyu, uku, huɗu, biyar.', tr:'Bir, iki, üç, dört, beş.', prompt:'1-5 arası say'},
    {id:'sp2', ha:'Shida, bakwai, takwas, tara, goma.', tr:'Altı, yedi, sekiz, dokuz, on.', prompt:'6-10 arası say'},
    {id:'sp3', ha:'Nawa ne?', tr:'Ne kadar?', prompt:'Fiyat sor'},
    {id:'sp4', ha:'Naira ashirin.', tr:'Yirmi Naira.', prompt:'Yirmi Naira söyle'},
    {id:'sp5', ha:'Tsada ne! Rage kadan.', tr:'Çok pahalı! Biraz indir.', prompt:'Pazarlık yap'},
    {id:'sp6', ha:'Na biya Naira ɗari.', tr:'Yüz Naira ödedim.', prompt:'Ödeme yaptığını söyle'},
  ],
  dialogues: [
    {id:'d1', title:'Kasuwa — Pazar Alışverişi', title_tr:'Pazar Alışveriş Diyaloğu',
     lines:[
       {speaker:'A', gender:'m', ha:'Sannu! Wannan nawa ne?', tr:'Merhaba! Bu ne kadar?',
        gramNote:'Selamlama ve fiyat sorusu.',
        bd:[{ro:'Sannu',tr:'Merhaba',role:'selamlama',note:'Selamlama.'},{ro:'Wannan nawa ne',tr:'Bu ne kadar',role:'soru',note:'Fiyat sorusu.'}]},
       {speaker:'B', gender:'f', ha:'Naira ɗari biyu ne.', tr:'İki yüz Naira.',
        gramNote:'Fiyat cevabı.',
        bd:[{ro:'Naira ɗari biyu',tr:'İki yüz Naira',role:'para',note:'200 ₦.'},{ro:'ne',tr:'(bu/oluş)',role:'bağlaç',note:'Bağlama fiili.'}]},
       {speaker:'A', gender:'m', ha:'Tsada ne! Rage kadan.', tr:'Çok pahalı! Biraz indir.',
        gramNote:'Pazarlık.',
        bd:[{ro:'Tsada ne',tr:'Çok pahalı',role:'şikayet',note:'Fiyat eleştirisi.'},{ro:'Rage kadan',tr:'Biraz indir',role:'istek',note:'Pazarlık.'}]},
       {speaker:'B', gender:'f', ha:'To, Naira ɗari da hamsin.', tr:'Peki, yüz elli Naira.',
        gramNote:'Yeni fiyat teklifi.',
        bd:[{ro:'To',tr:'Peki/Tamam',role:'kabul',note:'Anlaşma.'},{ro:'Naira ɗari da hamsin',tr:'Yüz elli Naira',role:'para',note:'150 ₦.'}]},
       {speaker:'A', gender:'m', ha:'Yauwa! Na biya.', tr:'Tamam! Ödüyorum.',
        gramNote:'Kabul ve ödeme.',
        bd:[{ro:'Yauwa',tr:'Tamam',role:'kabul',note:'Onay.'},{ro:'Na biya',tr:'Ödüyorum',role:'fiil',note:'Ödeme eylemi.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:'Wannan suya nawa ne? Naira ɗari da ashirin. Tsada ne! Rage kadan. To, Naira ɗari.',
     tr:'Bu suya (ızgara et) ne kadar? Yüz yirmi Naira. Pahalı! Biraz indir. Peki, yüz Naira.',
     questions:[
       {q:'İlk fiyat ne kadar?', opts:['Naira 120','Naira 100','Naira 200','Naira 150'], answer:0, tr:'İlk fiyat ne kadar?'},
       {q:'Son fiyat ne kadar?', opts:['Naira 100','Naira 120','Naira 150','Naira 200'], answer:0, tr:'Son fiyat ne kadar?'},
     ]
    },
  ],
};
LESSONS[2] = L2;
