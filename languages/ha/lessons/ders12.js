// ders12.js — Hausa Lesson 12: Adjectives & Feelings
const L12 = {
  words: [
    {id:'w1', ha:'Kyau', ro:'kya-u', tr:'İyi / Güzel',
     tip:'Hem iyi hem de güzel anlamına gelir. Çok yönlü sıfat.',
     ctx:'Beğeni, kalite ve güzellik ifadesi.',
     examples:[{
       ha:'Wannan ya yi kyau!', ro:'wan-nan ya yi kya-u', tr:'Bu çok güzel!',
       bd:[{ro:'Wannan',tr:'Bu',role:'özne',note:'İşaret zamiri.'},{ro:'ya yi kyau',tr:'çok güzel',role:'sıfat',note:'Güzellik ifadesi.'}]
     }]
    },
    {id:'w2', ha:'Mugu', ro:'mu-gu', tr:'Kötü / Şerli / Zararlı',
     tip:'"Mugu" ahlaki kötülük ve kötü kalite için.',
     ctx:'Olumsuz değerlendirme için.',
     examples:[{
       ha:'Mutum mugu ne.', ro:'mu-tum mu-gu ne', tr:'Kötü bir adam.',
       bd:[{ro:'Mutum',tr:'Adam/Kişi',role:'isim',note:'İnsan.'},{ro:'mugu ne',tr:'kötü',role:'sıfat',note:'Ahlaki kötülük.'}]
     }]
    },
    {id:'w3', ha:'Babba', ro:'bab-ba', tr:'Büyük / Yaşlı / Önemli',
     tip:'"Babba" boyut, yaş ve önem için kullanılır.',
     ctx:'Boyut ve yaş ifadesi.',
     examples:[{
       ha:'Babban gida ne.', ro:'bab-ban gi-da ne', tr:'Büyük ev.',
       bd:[{ro:'Babban',tr:'Büyük',role:'sıfat',note:'Boyut.'},{ro:'gida ne',tr:'ev',role:'isim',note:'Yapı.'}]
     }]
    },
    {id:'w4', ha:'Ƙarami', ro:'ka-ra-mi', tr:'Küçük',
     tip:'"Babba"nın zıttı.',
     ctx:'Küçük boyut ve yaş için.',
     examples:[{
       ha:'Yaro ƙarami ne.', ro:'ya-ro ka-ra-mi ne', tr:'Küçük çocuk.',
       bd:[{ro:'Yaro',tr:'Çocuk/Oğlan',role:'isim',note:'Genç erkek.'},{ro:'ƙarami ne',tr:'küçük',role:'sıfat',note:'Boyut.'}]
     }]
    },
    {id:'w5', ha:'Tsawo', ro:'tsa-wo', tr:'Uzun / Tall',
     tip:'Boy ve uzunluk için kullanılır.',
     ctx:'Kişi veya nesnenin boyunu tarif ederken.',
     examples:[{
       ha:'Yana da tsawo.', ro:'ya-na da tsa-wo', tr:'Uzun boylu.',
       bd:[{ro:'Yana da tsawo',tr:'Uzun boylu',role:'sıfat',note:'Boy ifadesi.'}]
     }]
    },
    {id:'w6', ha:'Gajere', ro:'ga-je-re', tr:'Kısa / Alçak',
     tip:'"Tsawo"nun zıttı.',
     ctx:'Kısa boylu kişi veya nesne.',
     examples:[{
       ha:'Gidan nan gajere ne.', ro:'gi-dan nan ga-je-re ne', tr:'Bu ev alçak.',
       bd:[{ro:'Gidan nan',tr:'Bu ev',role:'isim',note:'Yapı.'},{ro:'gajere ne',tr:'alçak/kısa',role:'sıfat',note:'Yükseklik.'}]
     }]
    },
    {id:'w7', ha:'Fari', ro:'fa-ri', tr:'Beyaz / Açık renk',
     tip:'Beyaz renk ve açık tona işaret eder.',
     ctx:'Renk tarifi için.',
     examples:[{
       ha:'Riga fari ta yi kyau.', ro:'ri-ga fa-ri ta yi kya-u', tr:'Beyaz kaftan güzel.',
       bd:[{ro:'Riga fari',tr:'Beyaz kaftan',role:'isim+sıfat',note:'Renkli nesne.'},{ro:'ta yi kyau',tr:'güzel',role:'değerlendirme',note:'Güzellik.'}]
     }]
    },
    {id:'w8', ha:'Baki', ro:'ba-ki', tr:'Siyah / Koyu renk',
     tip:'Siyah renk ve koyu ton.',
     ctx:'Renk tarifi için.',
     examples:[{
       ha:'Takalmi baki nawa ne?', ro:'ta-kal-mi ba-ki na-wa ne', tr:'Siyah ayakkabı ne kadar?',
       bd:[{ro:'Takalmi baki',tr:'Siyah ayakkabı',role:'isim+sıfat',note:'Renkli nesne.'},{ro:'nawa ne',tr:'ne kadar',role:'soru',note:'Fiyat sorusu.'}]
     }]
    },
    {id:'w9', ha:'Ja', ro:'ja', tr:'Kırmızı',
     tip:"Kırmızı renk. 'Ja' İngilizce 'red'den değil, Hausa kökenlidir.",
     ctx:'Kırmızı renkli nesneler için.',
     examples:[{
       ha:'Riga ja ta ja hankali.', ro:'ri-ga ja ta ja han-ka-li', tr:'Kırmızı kaftan dikkat çekiyor.',
       bd:[{ro:'Riga ja',tr:'Kırmızı kaftan',role:'isim+sıfat',note:'Renkli nesne.'},{ro:'ta ja hankali',tr:'dikkat çekiyor',role:'fiil',note:'Dikkat çekmek.'}]
     }]
    },
    {id:'w10', ha:'Shudi', ro:'shu-di', tr:'Mavi',
     tip:'Mavi renk.',
     ctx:'Mavi renkli nesneler için.',
     examples:[{
       ha:'Sama shudi ce.', ro:'sa-ma shu-di ce', tr:'Gökyüzü mavi.',
       bd:[{ro:'Sama',tr:'Gökyüzü',role:'isim',note:'Doğa.'},{ro:'shudi ce',tr:'mavi',role:'sıfat',note:'Renk.'}]
     }]
    },
    {id:'w11', ha:'Kore', ro:'ko-re', tr:'Yeşil',
     tip:'Yeşil renk. Doğa ve bitkiler için.',
     ctx:'Yeşil renk ve doğa için.',
     examples:[{
       ha:'Ciyawa kore ce.', ro:'ci-ya-wa ko-re ce', tr:'Çimen yeşil.',
       bd:[{ro:'Ciyawa',tr:'Çimen/Ot',role:'isim',note:'Bitki.'},{ro:'kore ce',tr:'yeşil',role:'sıfat',note:'Renk.'}]
     }]
    },
    {id:'w12', ha:'Rawaya', ro:'ra-wa-ya', tr:'Sarı',
     tip:'Sarı renk.',
     ctx:'Sarı renkli nesneler için.',
     examples:[{
       ha:'Mangwaro rawaya ta yi dadi.', ro:'mang-wa-ro ra-wa-ya ta yi da-di', tr:'Sarı mango lezzetli.',
       bd:[{ro:'Mangwaro rawaya',tr:'Sarı mango',role:'isim+sıfat',note:'Renkli meyve.'},{ro:'ta yi dadi',tr:'lezzetli',role:'değerlendirme',note:'Lezzet.'}]
     }]
    },
    {id:'w13', ha:'Farin ciki', ro:'fa-rin ci-ki', tr:'Mutluluk / Sevinç',
     tip:'"Farin ciki" = beyaz kalp = mutluluk.',
     ctx:'Mutluluk ve sevinç ifadesi.',
     examples:[{
       ha:'Ina jin farin ciki.', ro:'i-na jin fa-rin ci-ki', tr:'Mutluluk hissediyorum.',
       bd:[{ro:'Ina jin',tr:'Hissediyorum',role:'fiil',note:'Duygu.'},{ro:'farin ciki',tr:'mutluluk',role:'duygu',note:'İyi duygu.'}]
     }]
    },
    {id:'w14', ha:'Bakin ciki', ro:'ba-kin ci-ki', tr:'Üzüntü / Keder',
     tip:'"Bakin ciki" = siyah kalp = üzüntü.',
     ctx:'Üzüntü ve keder ifadesi.',
     examples:[{
       ha:'Yana cikin bakin ciki.', ro:'ya-na ci-kin ba-kin ci-ki', tr:'Üzgün (keder içinde).',
       bd:[{ro:'Yana cikin',tr:'İçinde (duygu)',role:'durum',note:'Duygu durumu.'},{ro:'bakin ciki',tr:'üzüntü',role:'duygu',note:'Keder.'}]
     }]
    },
    {id:'w15', ha:'Tsoro', ro:'tso-ro', tr:'Korku',
     tip:'Korku ve endişe için.',
     ctx:'Tehlike ve korku durumları.',
     examples:[{
       ha:'Ina jin tsoro.', ro:'i-na jin tso-ro', tr:'Korkuyorum.',
       bd:[{ro:'Ina jin tsoro',tr:'Korkuyorum',role:'duygu',note:'Korku hissi.'}]
     }]
    },
    {id:'w16', ha:'Fushi', ro:'fu-shi', tr:'Öfke / Kızgınlık',
     tip:'Öfke ve sinirlenme.',
     ctx:'Kızgınlık ifadesi.',
     examples:[{
       ha:'Ya na cikin fushi.', ro:'ya-na ci-kin fu-shi', tr:'Öfkeli (kızgın).',
       bd:[{ro:'Yana cikin fushi',tr:'Öfkeli',role:'duygu',note:'Öfke durumu.'}]
     }]
    },
    {id:'w17', ha:'Mamakin', ro:'ma-ma-kin', tr:'Şaşkınlık / Hayret',
     tip:'Sürpriz ve şaşkınlık.',
     ctx:'Beklenmedik durumlar.',
     examples:[{
       ha:'Na yi mamaki!', ro:'na yi ma-ma-ki', tr:'Şaşırdım!',
       bd:[{ro:'Na yi mamaki',tr:'Şaşırdım',role:'duygu',note:'Şaşkınlık fiili.'}]
     }]
    },
    {id:'w18', ha:'Ƙauna', ro:'kau-na', tr:'Aşk / Sevgi',
     tip:'Romantik aşk ve derin sevgi.',
     ctx:'Romantik ilişkiler ve sevgi ifadesi.',
     examples:[{
       ha:'Ina ƙaunarka.', ro:'i-na kau-nar-ka', tr:'Seni seviyorum.',
       bd:[{ro:'Ina ƙaunarka',tr:'Seni seviyorum',role:'duygu',note:'Aşk ifadesi.'}]
     }]
    },
    {id:'w19', ha:'Ƙiyayya', ro:'ki-yay-ya', tr:'Nefret',
     tip:'Nefret ve kin duygusu.',
     ctx:'Güçlü hoşlanmama.',
     examples:[{
       ha:'Ina ƙiyayya da ƙarya.', ro:'i-na ki-yay-ya da kar-ya', tr:'Yalanı nefret ediyorum.',
       bd:[{ro:'Ina ƙiyayya da',tr:'Nefret ediyorum',role:'duygu',note:'Nefret ifadesi.'},{ro:'ƙarya',tr:'yalan',role:'nesne',note:'Nefret edilen şey.'}]
     }]
    },
    {id:'w20', ha:'Gajiya', ro:'ga-ji-ya', tr:'Yorgunluk',
     tip:'Fiziksel ve zihinsel yorgunluk.',
     ctx:'Yorgunluk ve dinlenme ihtiyacı.',
     examples:[{
       ha:'Gajiya ta kame ni.', ro:'ga-ji-ya ta ka-me ni', tr:'Yorgunluk beni yakaladı.',
       bd:[{ro:'Gajiya ta kame ni',tr:'Yorgunluk yakaladı beni',role:'mecaz',note:'Yorgunluk ifadesi.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:"Hausa'da Sıfat Kullanımı", title_en:'Using Adjectives in Hausa',
     explanation:"Hausa'da sıfatlar genellikle ismin arkasına gelir. 'Gida babba' = büyük ev (ev büyük).",
     table:[
       {pronoun:'İsim + Sıfat', form:'isim + sıfat', example:'Riga ja.', tr:'Kırmızı kaftan.'},
       {pronoun:'Belirli', form:'Mai + özellik', example:'Mutum mai kyau.', tr:'Güzel adam.'},
       {pronoun:'Renk', form:'Launi + renk', example:'Launi fari.', tr:'Beyaz renk.'},
       {pronoun:'Nitelik cümlesi', form:'Ya/ta yi + sıfat', example:'Ya yi tsawo.', tr:'Uzun boylu.'},
     ],
     note:"'Ya yi kyau' = güzel oldu/güzel. 'Ta yi kyau' = güzel oldu/güzel (kadın özne). Sıfat cümlelerinde 'yi' fiili kullanılır."
    },
    {id:'g2', title:'Duygu İfadeleri', title_en:'Expressing Emotions',
     explanation:"Duygular 'Ina jin + duygu' veya 'Ina da + duygu' kalıbıyla ifade edilir.",
     table:[
       {pronoun:'Mutlu', form:'Ina farin ciki', example:'Ina farin ciki yau.', tr:'Bugün mutluyum.'},
       {pronoun:'Üzgün', form:'Ina bakin ciki', example:'Ina bakin ciki.', tr:'Üzgünüm.'},
       {pronoun:'Korkmuş', form:'Ina jin tsoro', example:'Ina jin tsoro.', tr:'Korkuyorum.'},
       {pronoun:'Öfkeli', form:'Ina fushi', example:'Ina cikin fushi.', tr:'Öfkeliyim.'},
       {pronoun:'Şaşırmış', form:'Na yi mamaki', example:'Na yi mamaki!', tr:'Şaşırdım!'},
     ],
     note:"'Ina cikin' = içindeyim. 'Ina cikin farin ciki' = mutluluk içindeyim (çok mutluyum)."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Wannan ya yi kyau sosai!', tr:'Bu çok güzel!', prompt:'Bir şeyi beğen'},
    {id:'sp2', ha:'Ina farin ciki da saduwa da ku.', tr:'Sizinle tanışmaktan mutluyum.', prompt:'Memnuniyeti ifade et'},
    {id:'sp3', ha:'Sama shudi ce, ciyawa kore ce.', tr:'Gökyüzü mavi, çimen yeşil.', prompt:'Renkli tasvir yap'},
    {id:'sp4', ha:'Ina ƙaunarka.', tr:'Seni seviyorum.', prompt:'Sevgini ifade et'},
    {id:'sp5', ha:'Ina jin tsoro.', tr:'Korkuyorum.', prompt:'Korku ifade et'},
    {id:'sp6', ha:'Gajiya ta kame ni.', tr:'Yorgunluk beni yakaladı.', prompt:'Yorgunluğunu mecazla ifade et'},
  ],
  dialogues: [
    {id:'d1', title:'Renkler ve Duygular', title_tr:'Renkler ve Duygular Diyaloğu',
     lines:[
       {speaker:'A', gender:'f', ha:'Yaya kike yau?', tr:'Bugün nasılsın?',
        gramNote:'Hal sorusu kadına.',
        bd:[{ro:'Yaya kike',tr:'Nasılsın (kadın)',role:'soru',note:'Kadına yönelik.'}]},
       {speaker:'B', gender:'f', ha:'Ina farin ciki! Na saye riga ja mai kyau.', tr:'Mutluyum! Güzel bir kırmızı kaftan aldım.',
        gramNote:'Duygu ve alışveriş.',
        bd:[{ro:'Ina farin ciki',tr:'Mutluyum',role:'duygu',note:'Mutluluk.'},{ro:'Na saye riga ja mai kyau',tr:'Güzel kırmızı kaftan aldım',role:'bilgi',note:'Satın alma.'}]},
       {speaker:'A', gender:'f', ha:'Abin mamaki! Ina son gani.', tr:'İnanılmaz! Görmek istiyorum.',
        gramNote:'Şaşkınlık ve istek.',
        bd:[{ro:'Abin mamaki',tr:'İnanılmaz',role:'duygu',note:'Şaşkınlık.'},{ro:'Ina son gani',tr:'Görmek istiyorum',role:'istek',note:'Görme isteği.'}]},
       {speaker:'B', gender:'f', ha:'Ga shi! Babba ne, mai launi ja sosai.', tr:'İşte! Büyük, çok kırmızı renkli.',
        gramNote:'Gösterme ve tasvir.',
        bd:[{ro:'Ga shi',tr:'İşte/Buyur',role:'gösterme',note:'Sunma.'},{ro:'Babba mai launi ja sosai',tr:'Büyük çok kırmızı',role:'tasvir',note:'Özellikler.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:'Sama shudi ce da kyau. Ciyawa kore ce. Rana rawaya ce da dare. Ina farin ciki da yanayin yau.',
     tr:'Gökyüzü güzel mavi. Çimen yeşil. Güneş gece sarı. Bugünkü hava nedeniyle mutluyum.',
     questions:[
       {q:'Gökyüzünün rengi ne?', opts:['Mavi','Yeşil','Sarı','Kırmızı'], answer:0, tr:'Gökyüzünün rengi ne?'},
       {q:'Konuşanın ruh hali nasıl?', opts:['Mutlu','Üzgün','Öfkeli','Korkmuş'], answer:0, tr:'Konuşanın ruh hali nasıl?'},
     ]
    },
  ],
};
LESSONS[12] = L12;
