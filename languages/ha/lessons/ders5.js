// ders5.js — Hausa Lesson 5: Market & Shopping
const L5 = {
  words: [
    {id:'w1', ha:'Kasuwa', ro:'ka-su-wa', tr:'Pazar / Çarşı',
     tip:"Hausa kültüründe sosyal ve ekonomik yaşamın merkezi.",
     ctx:'Alışveriş ve sosyal buluşmalar için.',
     examples:[{
       ha:'Zan tafi kasuwa da safiya.', ro:'zan ta-fi ka-su-wa da sa-fi-ya', tr:'Sabah pazara gideceğim.',
       bd:[{ro:'Zan tafi',tr:'Gideceğim',role:'fiil',note:'Gelecek zaman.'},{ro:'kasuwa',tr:'pazar',role:'yer',note:'Alışveriş yeri.'},{ro:'da safiya',tr:'sabah',role:'zaman',note:'Sabah vakti.'}]
     }]
    },
    {id:'w2', ha:'Saye', ro:'sa-ye', tr:'Satın almak / Almak',
     tip:'Alışveriş eylemi.',
     ctx:'Bir şey satın alırken.',
     examples:[{
       ha:'Na saye tufafi a kasuwa.', ro:'na sa-ye tu-fa-fi a ka-su-wa', tr:'Pazardan kıyafet aldım.',
       bd:[{ro:'Na saye',tr:'Satın aldım',role:'fiil',note:'Satın alma.'},{ro:'tufafi',tr:'kıyafetler',role:'nesne',note:'Giysi.'},{ro:'a kasuwa',tr:'pazardan',role:'yer',note:'Pazar.'}]
     }]
    },
    {id:'w3', ha:'Sayarwa', ro:'sa-yar-wa', tr:'Satmak / Satış',
     tip:'"Saye" almak, "sayarwa" satmak.',
     ctx:'Satıcı rolündeyken.',
     examples:[{
       ha:'Ina sayarwa a kasuwa.', ro:'i-na sa-yar-wa a ka-su-wa', tr:'Pazarda satıyorum.',
       bd:[{ro:'Ina sayarwa',tr:'Satıyorum',role:'fiil',note:'Satış eylemi.'},{ro:'a kasuwa',tr:'pazarda',role:'yer',note:'Pazar.'}]
     }]
    },
    {id:'w4', ha:'Tufafi', ro:'tu-fa-fi', tr:'Kıyafetler / Giysiler',
     tip:'Genel giysi kelimesi.',
     ctx:'Kıyafet alışverişinde.',
     examples:[{
       ha:'Tufafi masu kyau ina so.', ro:'tu-fa-fi ma-su kya-u i-na so', tr:'Güzel kıyafetler istiyorum.',
       bd:[{ro:'Tufafi',tr:'Kıyafetler',role:'isim',note:'Giysiler.'},{ro:'masu kyau',tr:'güzel',role:'sıfat',note:'İyi olan.'},{ro:'ina so',tr:'istiyorum',role:'fiil',note:'İstek.'}]
     }]
    },
    {id:'w5', ha:'Takalmi', ro:'ta-kal-mi', tr:'Ayakkabı',
     tip:'Tek veya çift ayakkabı için kullanılır.',
     ctx:'Ayakkabı alışverişinde.',
     examples:[{
       ha:'Takalmi masu launi ja.', ro:'ta-kal-mi ma-su lau-ni ja', tr:'Kırmızı ayakkabılar.',
       bd:[{ro:'Takalmi',tr:'Ayakkabı',role:'isim',note:'Ayak giyeceği.'},{ro:'masu launi ja',tr:'kırmızı renkli',role:'sıfat',note:'Renk sıfatı.'}]
     }]
    },
    {id:'w6', ha:'Gyale', ro:'gya-le', tr:'Örtü / Şal (kadın)',
     tip:'Hausa kadınlarının baş ve omuz örtüsü.',
     ctx:'Geleneksel kadın giyeceği.',
     examples:[{
       ha:'Gyale mai kyau ina so.', ro:'gya-le mai kya-u i-na so', tr:'Güzel bir şal istiyorum.',
       bd:[{ro:'Gyale',tr:'Şal/örtü',role:'isim',note:'Giysi.'},{ro:'mai kyau',tr:'güzel',role:'sıfat',note:'İyi/güzel olan.'},{ro:'ina so',tr:'istiyorum',role:'fiil',note:'İstek.'}]
     }]
    },
    {id:'w7', ha:'Wando', ro:'wan-do', tr:'Pantolon',
     tip:'Erkek pantolonu için kullanılır.',
     ctx:'Erkek giyeceği alışverişinde.',
     examples:[{
       ha:'Wando fari ina so.', ro:'wan-do fa-ri i-na so', tr:'Beyaz pantolon istiyorum.',
       bd:[{ro:'Wando',tr:'Pantolon',role:'isim',note:'Alt giysi.'},{ro:'fari',tr:'beyaz',role:'sıfat',note:'Renk.'},{ro:'ina so',tr:'istiyorum',role:'fiil',note:'İstek.'}]
     }]
    },
    {id:'w8', ha:'Riga', ro:'ri-ga', tr:'Gown / Kaftan (geleneksel elbise)',
     tip:'Geleneksel uzun Hausa elbisesi. Erkek ve kadın giyer.',
     ctx:'Geleneksel giyim alışverişinde.',
     examples:[{
       ha:'Riga babba ina so.', ro:'ri-ga bab-ba i-na so', tr:'Büyük beden kaftan istiyorum.',
       bd:[{ro:'Riga',tr:'Kaftan',role:'isim',note:'Geleneksel elbise.'},{ro:'babba',tr:'büyük',role:'sıfat',note:'Boyut.'},{ro:'ina so',tr:'istiyorum',role:'fiil',note:'İstek.'}]
     }]
    },
    {id:'w9', ha:'Nawa ne?', ro:'na-wa ne', tr:'Ne kadar? / Fiyatı nedir?',
     tip:'Alışverişte en önemli ifade.',
     ctx:'Fiyat sormak için her ortamda.',
     examples:[{
       ha:'Wannan riga, nawa ne?', ro:'wan-nan ri-ga na-wa ne', tr:'Bu kaftan ne kadar?',
       bd:[{ro:'Wannan riga',tr:'Bu kaftan',role:'özne',note:'İşaret zamiri.'},{ro:'nawa ne',tr:'ne kadar',role:'soru',note:'Fiyat sorusu.'}]
     }]
    },
    {id:'w10', ha:'Rago', ro:'ra-go', tr:'İndirim / Ucuz fiyat',
     tip:'"Rago" hem koç hem de ucuz/indirim anlamına gelir.',
     ctx:'İndirim istemek veya ucuz bulmak için.',
     examples:[{
       ha:'Yi mani rago, don Allah.', ro:'yi ma-ni ra-go don al-lah', tr:'Bana indirim yap lütfen.',
       bd:[{ro:'Yi mani rago',tr:'Bana indirim yap',role:'istek',note:'Fiyat indirimi.'},{ro:'don Allah',tr:'lütfen',role:'nezaket',note:'Nazik istek.'}]
     }]
    },
    {id:'w11', ha:'Tsada ne', ro:'tsa-da ne', tr:'Pahalı',
     tip:'Fiyatın çok yüksek olduğunu belirtmek için.',
     ctx:'Fiyattan şikayet ederken.',
     examples:[{
       ha:'Tsada ne sosai! Ba zan biya ba.', ro:'tsa-da ne so-sai ba zan bi-ya ba', tr:'Çok pahalı! Ödemeyeceğim.',
       bd:[{ro:'Tsada ne sosai',tr:'Çok pahalı',role:'şikayet',note:'Fiyat eleştirisi.'},{ro:'Ba zan biya ba',tr:'Ödemeyeceğim',role:'ret',note:'Olumsuz.'}]
     }]
    },
    {id:'w12', ha:'Ya yi arha', ro:'ya yi ar-ha', tr:'Ucuz / Uygun fiyat',
     tip:'Fiyatı beğendiğinizi belirtmek için.',
     ctx:'Fiyat memnuniyeti.',
     examples:[{
       ha:'Ya yi arha! Na biya nan da nan.', ro:'ya yi ar-ha na bi-ya nan da nan', tr:'Ucuz! Hemen ödüyorum.',
       bd:[{ro:'Ya yi arha',tr:'Ucuz/Uygun',role:'değerlendirme',note:'Fiyat beğenisi.'},{ro:'Na biya nan da nan',tr:'Hemen ödüyorum',role:'fiil',note:'Anlık ödeme.'}]
     }]
    },
    {id:'w13', ha:'Kati', ro:'ka-ti', tr:'Kart / Kağıt',
     tip:'Ödeme kartı veya kağıt.',
     ctx:'Kart ile ödeme.',
     examples:[{
       ha:'Zan biya da kati.', ro:'zan bi-ya da ka-ti', tr:'Kartla ödeyeceğim.',
       bd:[{ro:'Zan biya',tr:'Ödeyeceğim',role:'fiil',note:'Gelecek zaman.'},{ro:'da kati',tr:'kartla',role:'alet',note:'Ödeme aracı.'}]
     }]
    },
    {id:'w14', ha:'Kuɗi', ro:'ku-di', tr:'Para / Nakit',
     tip:'Genel para kelimesi.',
     ctx:'Nakit ödeme ve para işlemlerinde.',
     examples:[{
       ha:'Kuɗi nawa kuke da shi?', ro:'ku-di na-wa ku-ke da shi', tr:'Ne kadar paranız var?',
       bd:[{ro:'Kuɗi nawa',tr:'Ne kadar para',role:'soru',note:'Para miktarı sorusu.'},{ro:'kuke da shi',tr:'sahipsiniz',role:'fiil',note:'Sahip olmak.'}]
     }]
    },
    {id:'w15', ha:'Canji', ro:'can-ji', tr:'Para üstü / Bozuk para',
     tip:'"Canji" değişim ve para üstü anlamına gelir.',
     ctx:'Para üstü alırken veya bozuk para isterken.',
     examples:[{
       ha:'Kana da canji?', ro:'ka-na da can-ji', tr:'Para üstün var mı?',
       bd:[{ro:'Kana da canji',tr:'Para üstün var mı',role:'soru',note:'Bozuk para sorusu.'}]
     }]
    },
    {id:'w16', ha:'Jarida', ro:'ja-ri-da', tr:'Gazete',
     tip:'Haber gazetesi.',
     ctx:'Gazete satın alırken.',
     examples:[{
       ha:'Jarida ta yau nawa ne?', ro:'ja-ri-da ta yau na-wa ne', tr:'Bugünkü gazete ne kadar?',
       bd:[{ro:'Jarida ta yau',tr:'Bugünkü gazete',role:'isim',note:'Günlük gazete.'},{ro:'nawa ne',tr:'ne kadar',role:'soru',note:'Fiyat sorusu.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:'Alışverişte Temel İfadeler', title_en:'Essential Shopping Phrases',
     explanation:"Hausa'da alışveriş için temel kalıplar: fiyat sormak, pazarlık, ödeme.",
     table:[
       {pronoun:'Fiyat sormak', form:'Nawa ne?', example:'Wannan tufafi, nawa ne?', tr:'Bu giysi ne kadar?'},
       {pronoun:'Almak', form:'Ina so / Na saye', example:'Ina so wando fari.', tr:'Beyaz pantolon istiyorum.'},
       {pronoun:'Ucuz bulmak', form:'Ya yi arha', example:'Ya yi arha, saye.', tr:'Ucuz, alıyorum.'},
       {pronoun:'Pahalı bulmak', form:'Tsada ne', example:'Tsada ne, rage.', tr:'Pahalı, indir.'},
       {pronoun:'Ödeme', form:'Na biya', example:'Na biya Naira ɗari.', tr:'Yüz Naira ödedim.'},
     ],
     note:"'Rage' = indir/azalt. 'Rage kadan' = biraz indir. Pazarlıkta çok kullanılır."
    },
    {id:'g2', title:"Hausa'da Renk Sıfatları", title_en:'Color Adjectives in Hausa',
     explanation:"Hausa'da renk sıfatları ismin arkasına gelir. 'Mai launi + renk' de kullanılabilir.",
     table:[
       {pronoun:'Beyaz', form:'fari', example:'Wando fari.', tr:'Beyaz pantolon.'},
       {pronoun:'Siyah', form:'baki', example:'Takalmi baki.', tr:'Siyah ayakkabı.'},
       {pronoun:'Kırmızı', form:'ja', example:'Riga ja.', tr:'Kırmızı kaftan.'},
       {pronoun:'Mavi', form:'shudi', example:'Wando shudi.', tr:'Mavi pantolon.'},
       {pronoun:'Yeşil', form:'kore', example:'Tufafi kore.', tr:'Yeşil giysi.'},
       {pronoun:'Sarı', form:'rawaya', example:'Gyale rawaya.', tr:'Sarı şal.'},
     ],
     note:"Sıfatlar ismin ardından gelir: 'Riga ja' = kırmızı kaftan (kaftan kırmızı). Türkçeden farklı sıra."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Wannan tufafi nawa ne?', tr:'Bu giysi ne kadar?', prompt:'Fiyat sor'},
    {id:'sp2', ha:'Tsada ne, rage kadan.', tr:'Pahalı, biraz indir.', prompt:'Pazarlık yap'},
    {id:'sp3', ha:'Na saye riga baki.', tr:'Siyah kaftan aldım.', prompt:'Satın aldığını söyle'},
    {id:'sp4', ha:'Ina so takalmi fari.', tr:'Beyaz ayakkabı istiyorum.', prompt:'Sipariş ver'},
    {id:'sp5', ha:'Yi mani rago, don Allah.', tr:'Lütfen bana indirim yap.', prompt:'Kibar pazarlık'},
    {id:'sp6', ha:'Kana da canji?', tr:'Para üstün var mı?', prompt:'Para üstü sor'},
    {id:'sp7', ha:'Zan biya da kati.', tr:'Kartla ödeyeceğim.', prompt:'Kartla ödeme söyle'},
  ],
  dialogues: [
    {id:'d1', title:'Kasuwa — Kıyafet Alışverişi', title_tr:'Kıyafet Alışveriş Diyaloğu',
     lines:[
       {speaker:'A', gender:'f', ha:'Sannu! Wannan riga, nawa ne?', tr:'Merhaba! Bu kaftan ne kadar?',
        gramNote:'Fiyat sorusu.',
        bd:[{ro:'Sannu',tr:'Merhaba',role:'selamlama',note:'Selamlama.'},{ro:'Wannan riga nawa ne',tr:'Bu kaftan ne kadar',role:'soru',note:'Fiyat sorusu.'}]},
       {speaker:'B', gender:'m', ha:'Naira ɗari biyu da hamsin ne.', tr:'İki yüz elli Naira.',
        gramNote:'Fiyat cevabı.',
        bd:[{ro:'Naira ɗari biyu da hamsin',tr:'250 Naira',role:'fiyat',note:'Para miktarı.'},{ro:'ne',tr:'(bu)',role:'bağlaç',note:'Bağlama.'}]},
       {speaker:'A', gender:'f', ha:'Tsada ne! Yi mani rago, don Allah.', tr:'Pahalı! Bana indirim yap lütfen.',
        gramNote:'Pazarlık.',
        bd:[{ro:'Tsada ne',tr:'Pahalı',role:'şikayet',note:'Fiyat eleştirisi.'},{ro:'Yi mani rago',tr:'İndirim yap',role:'istek',note:'İndirim talebi.'}]},
       {speaker:'B', gender:'m', ha:'To, Naira ɗari da ashirin.', tr:'Peki, yüz yirmi Naira.',
        gramNote:'Yeni fiyat.',
        bd:[{ro:'To',tr:'Peki',role:'kabul',note:'Anlaşma.'},{ro:'Naira ɗari da ashirin',tr:'120 Naira',role:'fiyat',note:'Yeni fiyat.'}]},
       {speaker:'A', gender:'f', ha:'Yauwa! Na biya. Nagode!', tr:'Tamam! Ödüyorum. Teşekkürler!',
        gramNote:'Satın alma ve teşekkür.',
        bd:[{ro:'Yauwa',tr:'Tamam',role:'kabul',note:'Onay.'},{ro:'Na biya',tr:'Ödüyorum',role:'fiil',note:'Ödeme.'},{ro:'Nagode',tr:'Teşekkürler',role:'nezaket',note:'Teşekkür.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:'Ina so riga ja. Nawa ne? Naira ɗari uku ne. Tsada ne! Yi mani rago. To, Naira ɗari biyu.',
     tr:'Kırmızı kaftan istiyorum. Ne kadar? Üç yüz Naira. Pahalı! Bana indirim yap. Peki, iki yüz Naira.',
     questions:[
       {q:'Hangi renk kaftan istendi?', opts:['Kırmızı','Mavi','Siyah','Beyaz'], answer:0, tr:'Hangi renk kaftan istendi?'},
       {q:'Son fiyat ne oldu?', opts:['200 Naira','300 Naira','150 Naira','250 Naira'], answer:0, tr:'Son fiyat ne oldu?'},
     ]
    },
  ],
};
LESSONS[5] = L5;
