// ders1.js — Hausa Lesson 1: Greetings & Introductions
const L1 = {
  words: [
    {id:'w1', ha:'Sannu', ro:'san-nu', tr:'Merhaba',
     tip:'En yaygın günlük selamlama.',
     ctx:'Her ortamda, her yaşta kullanılır.',
     examples:[{
       ha:'Sannu dai!', ro:'san-nu dai', tr:'Selam işte!',
       bd:[{ro:'Sannu',tr:'Merhaba',role:'selamlama',note:'Temel selamlama kelimesi.'},{ro:'dai',tr:'işte/sadece',role:'pekiştirme',note:'Konuşmayı yumuşatan parçacık.'}]
     }]
    },
    {id:'w2', ha:'Ina kwana?', ro:'i-na kwa-na', tr:'Günaydın / İyi geceler geçirdin mi?',
     tip:'Sabah yapılan selamlama. Kelime anlamı "Nasıl geçirdin (geceyi)?"',
     ctx:'Sabah erkenden birini gördüğünde kullanılır.',
     examples:[{
       ha:'Ina kwana? — Lafiya lau.', ro:'i-na kwa-na la-fi-ya lau', tr:'Günaydın — Teşekkürler, iyiyim.',
       bd:[{ro:'Ina kwana',tr:'Günaydın',role:'selamlama',note:'Sabah selamı.'},{ro:'Lafiya lau',tr:'İyiyim/Sağlıklıyım',role:'yanıt',note:'Standart olumlu yanıt.'}]
     }]
    },
    {id:'w3', ha:'Ina wuni?', ro:'i-na wu-ni', tr:'İyi günler / Öğleden sonra selamı',
     tip:'Öğleden sonra kullanılan selamlama.',
     ctx:'Gündüz, öğle üzeri söylenir.',
     examples:[{
       ha:'Ina wuni? — Lafiya.', ro:'i-na wu-ni la-fi-ya', tr:'İyi günler — İyiyim.',
       bd:[{ro:'Ina wuni',tr:'İyi günler',role:'selamlama',note:'Öğleden sonra selamı.'},{ro:'Lafiya',tr:'İyiyim',role:'yanıt',note:'Kısa olumlu yanıt.'}]
     }]
    },
    {id:'w4', ha:'Ina yini?', ro:'i-na yi-ni', tr:'İyi akşamlar',
     tip:'Akşam selamlaması.',
     ctx:'Güneş batmadan önce akşam kullanılır.',
     examples:[{
       ha:'Ina yini? — Lafiya lau.', ro:'i-na yi-ni la-fi-ya lau', tr:'İyi akşamlar — İyiyim, teşekkürler.',
       bd:[{ro:'Ina yini',tr:'İyi akşamlar',role:'selamlama',note:'Akşam selamı.'},{ro:'Lafiya lau',tr:'İyiyim teşekkürler',role:'yanıt',note:'Standart yanıt.'}]
     }]
    },
    {id:'w5', ha:'Lafiya lau', ro:'la-fi-ya lau', tr:'İyiyim / Sağlıklıyım (teşekkürler)',
     tip:'"Lau" pekiştirme ekleri; "çok iyiyim" anlamı katar.',
     ctx:'Selamlama sorularına karşılık verilir.',
     examples:[{
       ha:'Yaya lafiya? — Lafiya lau, godiya.', ro:'ya-ya la-fi-ya la-fi-ya lau go-di-ya', tr:'Nasılsın? — İyiyim, teşekkür ederim.',
       bd:[{ro:'Yaya lafiya',tr:'Nasılsın',role:'soru',note:'Hal soran ifade.'},{ro:'Lafiya lau',tr:'İyiyim',role:'yanıt',note:'Standart yanıt.'},{ro:'godiya',tr:'teşekkürler',role:'nezaket',note:'Minnettarlık ifadesi.'}]
     }]
    },
    {id:'w6', ha:'Yaya lafiya?', ro:'ya-ya la-fi-ya', tr:'Nasılsın? (genel)',
     tip:'Cinsiyetten bağımsız hal soran ifade.',
     ctx:'Herkese sorulabilir.',
     examples:[{
       ha:'Yaya lafiya? Kina lafiya?', ro:'ya-ya la-fi-ya ki-na la-fi-ya', tr:'Nasılsın? İyi misin?',
       bd:[{ro:'Yaya',tr:'Nasıl',role:'soru',note:'Durum soran kelime.'},{ro:'lafiya',tr:'sağlık/iyilik',role:'isim',note:'Sağlık ve iyilik.'}]
     }]
    },
    {id:'w7', ha:'Yaya kake?', ro:'ya-ya ka-ke', tr:'Nasılsın? (erkeğe)',
     tip:'"Kake" erkeğe hitap eder. Kadına "kike" kullanılır.',
     ctx:'Erkek bir arkadaşa veya tanıdığa sorulur.',
     examples:[{
       ha:'Yaya kake, Musa?', ro:'ya-ya ka-ke mu-sa', tr:'Nasılsın, Musa?',
       bd:[{ro:'Yaya',tr:'Nasıl',role:'soru',note:'Durum sorusu.'},{ro:'kake',tr:'(sen - erkek)',role:'fiil',note:'Erkek için "nasılsın" fiili.'},{ro:'Musa',tr:'Musa (erkek adı)',role:'hitap',note:'Kişi adı.'}]
     }]
    },
    {id:'w8', ha:'Yaya kike?', ro:'ya-ya ki-ke', tr:'Nasılsın? (kadına)',
     tip:'"Kike" kadına hitap eder.',
     ctx:'Kadın bir arkadaşa veya tanıdığa sorulur.',
     examples:[{
       ha:'Yaya kike, Amina?', ro:'ya-ya ki-ke a-mi-na', tr:'Nasılsın, Amina?',
       bd:[{ro:'Yaya',tr:'Nasıl',role:'soru',note:'Durum sorusu.'},{ro:'kike',tr:'(sen - kadın)',role:'fiil',note:'Kadın için "nasılsın" fiili.'},{ro:'Amina',tr:'Amina (kadın adı)',role:'hitap',note:'Kişi adı.'}]
     }]
    },
    {id:'w9', ha:'Sunana...', ro:'su-na-na', tr:'Benim adım...',
     tip:'"Suna" = isim, "-na" = benim. Sunana + isim.',
     ctx:'Kendini tanıtırken kullanılır.',
     examples:[{
       ha:'Sunana Amina.', ro:'su-na-na a-mi-na', tr:'Benim adım Amina.',
       bd:[{ro:'Sunana',tr:'Benim adım',role:'özne+iyelik',note:'İsim + benim eki.'},{ro:'Amina',tr:'Amina',role:'isim',note:'Kişi adı.'}]
     }]
    },
    {id:'w10', ha:'Sunanki?', ro:'su-nan-ki', tr:'Senin adın ne? (kadına)',
     tip:'Kadına isim soran ifade. Erkeğe "Sunanku?".',
     ctx:'Yeni tanışılan bir kadına sorulur.',
     examples:[{
       ha:'Sunanki? Sunana Fatima.', ro:'su-nan-ki su-na-na fa-ti-ma', tr:'Adın ne? Adım Fatima.',
       bd:[{ro:'Sunanki',tr:'Senin adın (kadın)',role:'soru',note:'Kadına yönelik isim sorusu.'},{ro:'Sunana Fatima',tr:'Adım Fatima',role:'yanıt',note:'İsim cevabı.'}]
     }]
    },
    {id:'w11', ha:'Sunanku?', ro:'su-nan-ku', tr:'Senin adın ne? (erkeğe / çoğul saygı)',
     tip:'Erkeğe veya saygıyla birden fazlasına sorulur.',
     ctx:'Erkek veya saygı duyulan kişiye sorulur.',
     examples:[{
       ha:'Sunanku? Sunana Ibrahim.', ro:'su-nan-ku su-na-na ib-ra-him', tr:'Adınız ne? Adım İbrahim.',
       bd:[{ro:'Sunanku',tr:'Senin/Sizin adınız',role:'soru',note:'Erkek veya çoğul.'},{ro:'Sunana Ibrahim',tr:'Adım İbrahim',role:'yanıt',note:'İsim cevabı.'}]
     }]
    },
    {id:'w12', ha:'Nagode', ro:'na-go-de', tr:'Teşekkür ederim',
     tip:'En yaygın teşekkür ifadesi.',
     ctx:'Her durumda kullanılır.',
     examples:[{
       ha:'Nagode sosai!', ro:'na-go-de so-sai', tr:'Çok teşekkür ederim!',
       bd:[{ro:'Nagode',tr:'Teşekkürler',role:'nezaket',note:'Teşekkür ifadesi.'},{ro:'sosai',tr:'çok/gerçekten',role:'pekiştirme',note:'Pekiştirme kelimesi.'}]
     }]
    },
    {id:'w13', ha:'Yauwa', ro:'yau-wa', tr:'Evet / Tamam / Peki',
     tip:'Onay ve kabul için kullanılır.',
     ctx:'Birinin teklifini veya sorusunu kabul ederken.',
     examples:[{
       ha:'Yauwa, zan zo.', ro:'yau-wa zan zo', tr:'Tamam, geleceğim.',
       bd:[{ro:'Yauwa',tr:'Tamam',role:'onay',note:'Kabul ifadesi.'},{ro:'zan zo',tr:'geleceğim',role:'fiil',note:'Gelecek zaman.'}]
     }]
    },
    {id:'w14', ha:"A'a", ro:'a-a', tr:'Hayır',
     tip:'Reddetme veya olumsuz yanıt.',
     ctx:'Bir şeyi reddederken kullanılır.',
     examples:[{
       ha:"A'a, ban zo ba.", ro:'a-a ban zo ba', tr:'Hayır, gelmeyeceğim.',
       bd:[{ro:"A'a",tr:'Hayır',role:'ret',note:'Olumsuz yanıt.'},{ro:'ban zo ba',tr:'gelmeyeceğim',role:'fiil',note:'Olumsuz gelecek zaman.'}]
     }]
    },
    {id:'w15', ha:'Sai an jima', ro:'sai an ji-ma', tr:'Görüşürüz / Hoşça kal',
     tip:'Ayrılışta kullanılan yaygın ifade.',
     ctx:'Vedalaşırken söylenir.',
     examples:[{
       ha:'Sai an jima! Nagode.', ro:'sai an ji-ma na-go-de', tr:'Görüşürüz! Teşekkürler.',
       bd:[{ro:'Sai an jima',tr:'Görüşürüz',role:'veda',note:'Veda ifadesi.'},{ro:'Nagode',tr:'Teşekkürler',role:'nezaket',note:'Teşekkür.'}]
     }]
    },
    {id:'w16', ha:'Barka', ro:'bar-ka', tr:'Tebrikler / Kutlamalar / Bereket',
     tip:'Tebrik ve kutlama için kullanılır. "Barka da..." şeklinde de kullanılır.',
     ctx:'Bayramlarda, doğum günlerinde, özel günlerde.',
     examples:[{
       ha:'Barka da sallah!', ro:'bar-ka da sal-lah', tr:'Bayramınız kutlu olsun!',
       bd:[{ro:'Barka',tr:'Tebrikler/Kutlu olsun',role:'tebrik',note:'Tebrik ifadesi.'},{ro:'da sallah',tr:'bayram için',role:'ön ek grubu',note:'Bayram vesilesiyle.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:"Hausa'da Zamana Göre Selamlama", title_en:'Time-Based Greetings in Hausa',
     explanation:"Hausa'da günün saatine göre farklı selamlamalar kullanılır. Her selamlama bir sorudur ve 'Lafiya lau' veya 'Lafiya' ile yanıtlanır.",
     table:[
       {pronoun:'Sabah', form:'Ina kwana?', example:'Ina kwana? — Lafiya lau.', tr:'Günaydın — İyiyim.'},
       {pronoun:'Öğlen/Öğleden sonra', form:'Ina wuni?', example:'Ina wuni? — Lafiya.', tr:'İyi günler — İyiyim.'},
       {pronoun:'Akşam', form:'Ina yini?', example:'Ina yini? — Lafiya lau.', tr:'İyi akşamlar — İyiyim.'},
       {pronoun:'Her zaman', form:'Sannu', example:'Sannu! — Sannu da zuwa.', tr:'Merhaba! — Hoş geldin.'},
     ],
     note:"Cevap her zaman 'Lafiya lau' (çok iyiyim) veya 'Lafiya' (iyiyim) olur. Bu selamlaşmalar soru formunda olsa da yanıt olumlu olmak zorundadır."
    },
    {id:'g2', title:"Cinsiyete Göre Hitap", title_en:'Gender Agreement in Address',
     explanation:"Hausa'da erkek ve kadına farklı şekillerde hitap edilir. Fiil ve zamirler cinsiyete göre değişir.",
     table:[
       {pronoun:'Erkeğe (m)', form:'Yaya kake?', example:'Yaya kake, Musa?', tr:'Nasılsın, Musa?'},
       {pronoun:'Kadına (f)', form:'Yaya kike?', example:'Yaya kike, Amina?', tr:'Nasılsın, Amina?'},
       {pronoun:'İsim sormak (erkeğe)', form:'Sunanku?', example:'Sunanku? — Sunana Musa.', tr:'Adın ne? — Adım Musa.'},
       {pronoun:'İsim sormak (kadına)', form:'Sunanki?', example:'Sunanki? — Sunana Fatima.', tr:'Adın ne? — Adım Fatima.'},
     ],
     note:"Hausa dilinde cinsiyet ayrımı çok önemlidir. Fiil sonları ve zamirler cinsiyete göre değişir: -ku erkek, -ki kadın."
    },
    {id:'g3', title:"Sunana — Kendini Tanıtma", title_en:'Introducing Yourself with Sunana',
     explanation:"'Suna' isim demektir. '-na' benim iyelik ekidir. Sunana + isim = Benim adım + isim.",
     table:[
       {pronoun:'Ben', form:'Sunana...', example:'Sunana Ibrahim.', tr:'Adım İbrahim.'},
       {pronoun:'Sen (erkek)', form:'Sunanku?', example:'Sunanku? — Sunana Musa.', tr:'Adın ne? — Adım Musa.'},
       {pronoun:'Sen (kadın)', form:'Sunanki?', example:'Sunanki? — Sunana Fatima.', tr:'Adın ne? — Adım Fatima.'},
       {pronoun:'O (erkek)', form:'Sunansu...', example:'Sunansu Ahmadu.', tr:'Onun adı Ahmadu.'},
     ],
     note:"'Suna' kelimesi hem 'isim' hem de 'ad' anlamına gelir. Tanışma sırasında en çok kullanılan ifadedir."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Sannu!', tr:'Merhaba!', prompt:'Birisini selamla'},
    {id:'sp2', ha:'Ina kwana?', tr:'Günaydın?', prompt:'Sabah selamı ver'},
    {id:'sp3', ha:'Sunana Amina.', tr:'Benim adım Amina.', prompt:'Kendini tanıt (Amina adıyla)'},
    {id:'sp4', ha:'Yaya kake?', tr:'Nasılsın? (erkeğe)', prompt:'Erkek arkadaşına nasılsın diye sor'},
    {id:'sp5', ha:'Nagode sosai!', tr:'Çok teşekkür ederim!', prompt:'Teşekkür et'},
    {id:'sp6', ha:'Sai an jima!', tr:'Görüşürüz!', prompt:'Vedalaş'},
    {id:'sp7', ha:'Lafiya lau.', tr:'İyiyim, teşekkürler.', prompt:'Nasılsın sorusuna yanıt ver'},
  ],
  dialogues: [
    {id:'d1', title:'Tanışma', title_tr:'Tanışma Diyaloğu',
     lines:[
       {speaker:'A', gender:'m', ha:'Sannu!', tr:'Merhaba!',
        gramNote:'Temel selamlama.',
        bd:[{ro:'Sannu',tr:'Merhaba',role:'selamlama',note:'Günlük selamlama.'}]},
       {speaker:'B', gender:'f', ha:'Sannu da zuwa!', tr:'Hoş geldin!',
        gramNote:'Karşılama ifadesi.',
        bd:[{ro:'Sannu',tr:'Merhaba',role:'selamlama',note:'Selamlama.'},{ro:'da zuwa',tr:'gelişine',role:'ek',note:'Geliş ifadesi.'}]},
       {speaker:'A', gender:'m', ha:'Sunana Musa. Sunanki?', tr:'Adım Musa. Adın ne?',
        gramNote:'Kendini tanıtma ve isim sorma.',
        bd:[{ro:'Sunana',tr:'Adım',role:'tanıtma',note:'Benim adım.'},{ro:'Musa',tr:'Musa',role:'isim',note:'Erkek adı.'},{ro:'Sunanki',tr:'Senin adın (kadın)',role:'soru',note:'Kadına yönelik isim sorusu.'}]},
       {speaker:'B', gender:'f', ha:'Sunana Amina. Ina farin ciki!', tr:'Adım Amina. Memnun oldum!',
        gramNote:"'Ina farin ciki' = sevinçliyim/memnun oldum.",
        bd:[{ro:'Sunana Amina',tr:'Adım Amina',role:'tanıtma',note:'Kişi adı.'},{ro:'Ina farin ciki',tr:'Memnun oldum',role:'duygu',note:'Sevinç ifadesi.'}]},
       {speaker:'A', gender:'m', ha:'Nagode. Sai an jima!', tr:'Teşekkürler. Görüşürüz!',
        gramNote:'Vedalaşma.',
        bd:[{ro:'Nagode',tr:'Teşekkürler',role:'nezaket',note:'Teşekkür.'},{ro:'Sai an jima',tr:'Görüşürüz',role:'veda',note:'Veda ifadesi.'}]},
       {speaker:'B', gender:'f', ha:'Sai an jima!', tr:'Görüşürüz!',
        gramNote:'Vedalaşma tekrarı.',
        bd:[{ro:'Sai an jima',tr:'Görüşürüz',role:'veda',note:'Veda.'}]},
     ]
    },
    {id:'d2', title:'Hal Hatır Sorma', title_tr:'Hal Hatır Diyaloğu',
     lines:[
       {speaker:'A', gender:'f', ha:'Ina kwana?', tr:'Günaydın, nasıl geçirdin?',
        gramNote:'Sabah selamı.',
        bd:[{ro:'Ina kwana',tr:'Günaydın',role:'selamlama',note:'Sabah selamı.'}]},
       {speaker:'B', gender:'m', ha:'Lafiya lau. Yaya kike?', tr:'İyiyim. Sen nasılsın?',
        gramNote:"'Yaya kike?' kadına yöneltilir.",
        bd:[{ro:'Lafiya lau',tr:'İyiyim',role:'yanıt',note:'Standart yanıt.'},{ro:'Yaya kike',tr:'Sen nasılsın (kadın)',role:'soru',note:'Kadına yönelik soru.'}]},
       {speaker:'A', gender:'f', ha:'Lafiya, nagode. Yaya iyali?', tr:'İyiyim, teşekkürler. Aile nasıl?',
        gramNote:"'Iyali' = aile.",
        bd:[{ro:'Lafiya',tr:'İyiyim',role:'yanıt',note:'Olumlu yanıt.'},{ro:'nagode',tr:'teşekkürler',role:'nezaket',note:'Teşekkür.'},{ro:'Yaya iyali',tr:'Aile nasıl',role:'soru',note:'Aile hal sorusu.'}]},
       {speaker:'B', gender:'m', ha:'Lafiya lau, godiya.', tr:'Hepsi iyi, teşekkür ederim.',
        gramNote:'Olumlu yanıt.',
        bd:[{ro:'Lafiya lau',tr:'Hepsi iyi',role:'yanıt',note:'Standart olumlu yanıt.'},{ro:'godiya',tr:'teşekkürler',role:'nezaket',note:'Minnettarlık.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:'Sannu! Sunana Amina. Ina farin ciki da saduwa da kai.',
     tr:'Merhaba! Benim adım Amina. Seninle tanışmaktan memnun oldum.',
     questions:[
       {q:'Konuşanın adı ne?', opts:['Amina','Fatima','Ibrahim','Musa'], answer:0, tr:'Konuşanın adı ne?'},
       {q:"'Ina farin ciki' ne anlama gelir?", opts:['Memnun oldum','Günaydın','Teşekkürler','Görüşürüz'], answer:0, tr:"'Ina farin ciki' ne anlama gelir?"},
     ]
    },
  ],
};
LESSONS[1] = L1;
