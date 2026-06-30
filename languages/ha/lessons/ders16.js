// ders16.js — Hausa Lesson 16: Nature & Environment
const L16 = {
  words: [
    {id:'w1', ha:'Rana', ro:'ra-na', tr:'Güneş / Gün',
     tip:'"Rana" hem güneş hem de gün anlamına gelir.',
     ctx:'Hava durumu ve günlük konuşmalar.',
     examples:[{
       ha:'Rana ta yi zafi yau.', ro:'ra-na ta yi za-fi yau', tr:'Bugün güneş sıcak.',
       bd:[{ro:'Rana ta yi zafi',tr:'Güneş sıcak',role:'durum',note:'Hava durumu.'},{ro:'yau',tr:'bugün',role:'zaman',note:'Zaman.'}]
     }]
    },
    {id:'w2', ha:'Wata', ro:'wa-ta', tr:'Ay (gökyüzü) / Ay (zaman)',
     tip:'"Wata" hem gökyüzündeki Ay hem de zaman birimi ay.',
     ctx:'Gece gökyüzü ve takvim.',
     examples:[{
       ha:'Wata ya haska dare.', ro:'wa-ta ya has-ka da-re', tr:'Ay geceyi aydınlatıyor.',
       bd:[{ro:'Wata ya haska',tr:'Ay aydınlatıyor',role:'fiil',note:'Işık vermek.'},{ro:'dare',tr:'gece',role:'nesne',note:'Aydınlatılan.'}]
     }]
    },
    {id:'w3', ha:'Tauraro', ro:'tau-ra-ro', tr:'Yıldız',
     tip:'Gece gökyüzündeki yıldızlar.',
     ctx:'Gece gökyüzü ve şiirsel ifadeler.',
     examples:[{
       ha:'Taurari sun haska dare.', ro:'tau-ra-ri sun has-ka da-re', tr:'Yıldızlar geceyi aydınlatıyor.',
       bd:[{ro:'Taurari',tr:'Yıldızlar (çoğul)',role:'isim',note:'Yıldız çoğulu.'},{ro:'sun haska dare',tr:'geceyi aydınlatıyor',role:'fiil',note:'Işık.'}]
     }]
    },
    {id:'w4', ha:'Sama', ro:'sa-ma', tr:'Gökyüzü / Yukarı',
     tip:'"Sama" hem gökyüzü hem de yukarı yön.',
     ctx:'Gökyüzü ve yön ifadesi.',
     examples:[{
       ha:'Sama shudi ce yau.', ro:'sa-ma shu-di ce yau', tr:'Gökyüzü bugün mavi.',
       bd:[{ro:'Sama shudi ce',tr:'Gökyüzü mavi',role:'durum',note:'Renk tasviri.'},{ro:'yau',tr:'bugün',role:'zaman',note:'Zaman.'}]
     }]
    },
    {id:'w5', ha:'Ƙasa', ro:'ka-sa', tr:'Toprak / Yer / Ülke',
     tip:'"Ƙasa" hem toprak hem de ülke anlamına gelir.',
     ctx:'Coğrafya ve tarım.',
     examples:[{
       ha:'Ƙasar Nijeriya babba ce.', ro:'ka-sar ni-je-ri-ya bab-ba ce', tr:'Nijerya büyük bir ülke.',
       bd:[{ro:'Ƙasar Nijeriya',tr:'Nijerya ülkesi',role:'isim',note:'Ülke.'},{ro:'babba ce',tr:'büyük',role:'sıfat',note:'Boyut.'}]
     }]
    },
    {id:'w6', ha:'Ruwa', ro:'ru-wa', tr:'Su / Sıvı',
     tip:'Su ve genel sıvı. Doğada su kaynakları için de kullanılır.',
     ctx:'Su kaynakları ve doğal alanlar.',
     examples:[{
       ha:'Ruwan kogi ya yi sanyi.', ro:'ru-wan ko-gi ya yi san-yi', tr:'Nehir suyu soğuk.',
       bd:[{ro:'Ruwan kogi',tr:'Nehir suyu',role:'isim',note:'Su kaynağı.'},{ro:'ya yi sanyi',tr:'soğuk',role:'sıfat',note:'Sıcaklık.'}]
     }]
    },
    {id:'w7', ha:'Wuta', ro:'wu-ta', tr:'Ateş / Alev',
     tip:'Ateş, alev ve ışık kaynağı.',
     ctx:'Ateş ve pişirme.',
     examples:[{
       ha:'Wuta ta yi zafi sosai.', ro:'wu-ta ta yi za-fi so-sai', tr:'Ateş çok sıcak.',
       bd:[{ro:'Wuta ta yi zafi',tr:'Ateş çok sıcak',role:'durum',note:'Isı tasviri.'},{ro:'sosai',tr:'çok',role:'pekiştirme',note:'Şiddet.'}]
     }]
    },
    {id:'w8', ha:'Iska', ro:'is-ka', tr:'Rüzgâr / Hava',
     tip:'"Iska" hem rüzgâr hem de hava anlamına gelir.',
     ctx:'Hava durumu.',
     examples:[{
       ha:'Iska ta yi sanyi a yau.', ro:'is-ka ta yi san-yi a yau', tr:'Bugün rüzgâr soğuk.',
       bd:[{ro:'Iska ta yi sanyi',tr:'Rüzgâr soğuk',role:'hava',note:'Hava durumu.'},{ro:'a yau',tr:'bugün',role:'zaman',note:'Zaman.'}]
     }]
    },
    {id:'w9', ha:'Duwatsu', ro:'du-wat-su', tr:'Dağlar / Kayalar',
     tip:'"Dutse" tekil, "duwatsu" çoğul. Kaya ve dağ.',
     ctx:'Coğrafya ve doğa gezisi.',
     examples:[{
       ha:'Duwatsun Jos suna da kyau.', ro:'du-wat-sun jos su-na da kya-u', tr:'Jos dağları güzel.',
       bd:[{ro:'Duwatsun Jos',tr:'Jos dağları',role:'coğrafya',note:'Özel coğrafya.'},{ro:'suna da kyau',tr:'güzel',role:'sıfat',note:'Doğal güzellik.'}]
     }]
    },
    {id:'w10', ha:'Kogi', ro:'ko-gi', tr:'Nehir',
     tip:'Akan nehir ve su yolu.',
     ctx:'Nehir ve su kaynakları.',
     examples:[{
       ha:'Kogin Nijar babba ne.', ro:'ko-gin ni-jar bab-ba ne', tr:'Nijer Nehri büyük.',
       bd:[{ro:'Kogin Nijar',tr:'Nijer Nehri',role:'coğrafya',note:'Büyük nehir.'},{ro:'babba ne',tr:'büyük',role:'sıfat',note:'Boyut.'}]
     }]
    },
    {id:'w11', ha:'Tafki', ro:'taf-ki', tr:'Göl',
     tip:'Durgun su birikintisi.',
     ctx:'Coğrafya ve balıkçılık.',
     examples:[{
       ha:'Tafkin Chadi ya yi nesa.', ro:'taf-kin cha-di ya yi ne-sa', tr:'Çad Gölü uzak.',
       bd:[{ro:'Tafkin Chadi',tr:'Çad Gölü',role:'coğrafya',note:'Özel coğrafya.'},{ro:'ya yi nesa',tr:'uzak',role:'mesafe',note:'Uzaklık.'}]
     }]
    },
    {id:'w12', ha:'Kurmi', ro:'kur-mi', tr:'Orman / Çalılık',
     tip:'Orman ve ağaçlık alan.',
     ctx:'Orman ve doğa.',
     examples:[{
       ha:'Kurmi mai tsawo yana cikin ƙasa.', ro:'kur-mi mai tsa-wo ya-na ci-kin ka-sa', tr:'Uzun orman toprakların içinde.',
       bd:[{ro:'Kurmi mai tsawo',tr:'Uzun orman',role:'isim+sıfat',note:'Yoğun orman.'},{ro:'yana cikin ƙasa',tr:'toprakların içinde',role:'yer',note:'Coğrafi konum.'}]
     }]
    },
    {id:'w13', ha:'Hamadar', ro:'ha-ma-dar', tr:'Çöl',
     tip:'Kum çölü. Sahra ve yarı kurak bölgeler.',
     ctx:'Çöl coğrafyası.',
     examples:[{
       ha:'Hamadar ta yi zafi sosai.', ro:'ha-ma-dar ta yi za-fi so-sai', tr:'Çöl çok sıcak.',
       bd:[{ro:'Hamadar ta yi zafi',tr:'Çöl çok sıcak',role:'hava',note:'Hava durumu.'},{ro:'sosai',tr:'çok',role:'pekiştirme',note:'Şiddet.'}]
     }]
    },
    {id:'w14', ha:'Gonar', ro:'go-nar', tr:'Tarla / Çiftlik',
     tip:'Tarım arazisi.',
     ctx:'Tarım ve çiftçilik.',
     examples:[{
       ha:'Manoman suna aikin gonar.', ro:'ma-no-man su-na ai-kin go-nar', tr:'Çiftçiler tarlada çalışıyor.',
       bd:[{ro:'Manoman',tr:'Çiftçiler',role:'isim',note:'Tarım işçileri.'},{ro:'suna aikin gonar',tr:'tarlada çalışıyor',role:'fiil',note:'Çalışma.'}]
     }]
    },
    {id:'w15', ha:'Bishiya', ro:'bi-shi-ya', tr:'Ağaç',
     tip:'Her türlü ağaç.',
     ctx:'Doğa ve tarım.',
     examples:[{
       ha:'Bishiya tana inuwa.', ro:'bi-shi-ya ta-na i-nu-wa', tr:'Ağaç gölge yapıyor.',
       bd:[{ro:'Bishiya tana',tr:'Ağaç yapıyor',role:'isim+fiil',note:'Ağaç eylemi.'},{ro:'inuwa',tr:'gölge',role:'nesne',note:'Gölge.'}]
     }]
    },
    {id:'w16', ha:'Fure', ro:'fu-re', tr:'Çiçek',
     tip:'Her türlü çiçek.',
     ctx:'Doğa ve güzellik.',
     examples:[{
       ha:'Furanni masu launi daban-daban.', ro:'fu-ran-ni ma-su lau-ni da-ban-da-ban', tr:'Farklı renkte çiçekler.',
       bd:[{ro:'Furanni',tr:'Çiçekler (çoğul)',role:'isim',note:'Çiçek çoğulu.'},{ro:'masu launi daban-daban',tr:'farklı renkli',role:'sıfat',note:'Renk çeşitliliği.'}]
     }]
    },
    {id:'w17', ha:'Ciyawa', ro:'ci-ya-wa', tr:'Çimen / Ot',
     tip:'Yeşil çimen ve ot.',
     ctx:'Doğa ve çevre.',
     examples:[{
       ha:'Ciyawa kore ta rufe ƙasa.', ro:'ci-ya-wa ko-re ta ru-fe ka-sa', tr:'Yeşil çimen toprağı kaplıyor.',
       bd:[{ro:'Ciyawa kore',tr:'Yeşil çimen',role:'isim+sıfat',note:'Yeşil bitki.'},{ro:'ta rufe ƙasa',tr:'toprağı kaplıyor',role:'fiil',note:'Kaplama.'}]
     }]
    },
    {id:'w18', ha:'Gari', ro:'ga-ri', tr:'Toprak / Kum / Toz',
     tip:'"Gari" hem şehir hem de kum/toz anlamına gelir.',
     ctx:'Toprak ve çevre.',
     examples:[{
       ha:'Iska ta kawo gari.', ro:'is-ka ta ka-wo ga-ri', tr:'Rüzgâr toz getirdi.',
       bd:[{ro:'Iska ta kawo',tr:'Rüzgâr getirdi',role:'fiil',note:'Taşıma.'},{ro:'gari',tr:'toz/kum',role:'nesne',note:'Taşınan madde.'}]
     }]
    },
    {id:'w19', ha:'Damina', ro:'da-mi-na', tr:'Yağmur mevsimi',
     tip:"Batı Afrika'nın yağmurlu mevsimi. Nisan-Ekim.",
     ctx:'Mevsim takvimi.',
     examples:[{
       ha:'Damina ta zo, noma ya fara.', ro:'da-mi-na ta zo no-ma ya fa-ra', tr:'Yağmur mevsimi geldi, çiftçilik başladı.',
       bd:[{ro:'Damina ta zo',tr:'Yağmur mevsimi geldi',role:'haber',note:'Mevsim bildirimi.'},{ro:'noma ya fara',tr:'çiftçilik başladı',role:'sonuç',note:'Tarım aktivitesi.'}]
     }]
    },
    {id:'w20', ha:'Rani', ro:'ra-ni', tr:'Kuru mevsim',
     tip:"Batı Afrika'nın kuru mevsimi. Kasım-Mart.",
     ctx:'Mevsim takvimi.',
     examples:[{
       ha:'Rani yana da zafi.', ro:'ra-ni ya-na da za-fi', tr:'Kuru mevsim sıcak.',
       bd:[{ro:'Rani yana da zafi',tr:'Kuru mevsim sıcak',role:'hava',note:'Mevsim özelliği.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:"Hausa'da Hava Durumu İfadeleri", title_en:'Weather Expressions in Hausa',
     explanation:"'Ya/ta yi + sıfat' kalıbıyla hava durumu ifade edilir. 'Yi' fiili sıfatla birleşerek durum anlatır.",
     table:[
       {pronoun:'Sıcak', form:'Ya yi zafi', example:'Yau ya yi zafi.', tr:'Bugün sıcak.'},
       {pronoun:'Soğuk', form:'Ya yi sanyi', example:'Iska ta yi sanyi.', tr:'Rüzgâr soğuk.'},
       {pronoun:'Rüzgârlı', form:'Iska tana', example:'Iska tana da ƙarfi.', tr:'Rüzgâr güçlü.'},
       {pronoun:'Yağmurlu', form:'Ruwan sama', example:'Ruwan sama ya sauko.', tr:'Yağmur yağdı.'},
       {pronoun:'Güneşli', form:'Rana tana', example:'Rana tana haskawa.', tr:'Güneş parlıyor.'},
     ],
     note:"'Ruwan sama' = gökyüzü suyu = yağmur. 'Sauko' = aşağı inmek = yağmak."
    },
    {id:'g2', title:'Mevsimler ve Doğa Döngüsü', title_en:'Seasons and Nature Cycle',
     explanation:"Hausa'da iki temel mevsim vardır: damina (yağmur mevsimi) ve rani (kuru mevsim).",
     table:[
       {pronoun:'Yağmur mevsimi', form:'Damina', example:'Damina ce yanzu.', tr:'Şu an yağmur mevsimi.'},
       {pronoun:'Kuru mevsim', form:'Rani', example:'Rani ya zo.', tr:'Kuru mevsim geldi.'},
       {pronoun:'Tarım', form:'Noma', example:'A damina ake noma.', tr:'Yağmur mevsiminde çiftçilik yapılır.'},
       {pronoun:'Hasat', form:'Girbi', example:'A rani ake girbi.', tr:'Kuru mevsimde hasat yapılır.'},
     ],
     note:"'Noma' = çiftçilik/tarım. 'Girbi' = hasat. Hausa geçiminin büyük bölümü tarıma dayanır."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Sama shudi ce yau.', tr:'Gökyüzü bugün mavi.', prompt:'Gökyüzünü tarif et'},
    {id:'sp2', ha:'Rana ta yi zafi sosai.', tr:'Güneş çok sıcak.', prompt:'Sıcaklığı ifade et'},
    {id:'sp3', ha:'Damina ta zo.', tr:'Yağmur mevsimi geldi.', prompt:'Mevsimi bildir'},
    {id:'sp4', ha:'Bishiya tana inuwa.', tr:'Ağaç gölge yapıyor.', prompt:'Ağacı tarif et'},
    {id:'sp5', ha:'Kogin Nijar babba ne.', tr:'Nijer Nehri büyük.', prompt:'Nehri tanımla'},
    {id:'sp6', ha:'Iska ta yi sanyi yau.', tr:'Bugün rüzgâr soğuk.', prompt:'Hava durumunu söyle'},
  ],
  dialogues: [
    {id:'d1', title:'Yanayi — Hava Sohbeti', title_tr:'Hava Durumu Diyaloğu',
     lines:[
       {speaker:'A', gender:'m', ha:'Yaya yanayi yau?', tr:'Bugün hava nasıl?',
        gramNote:'Hava durumu sorusu.',
        bd:[{ro:'Yaya yanayi yau',tr:'Bugün hava nasıl',role:'soru',note:'Hava sorusu.'}]},
       {speaker:'B', gender:'f', ha:'Rana ta yi zafi sosai. Iska babu.', tr:'Güneş çok sıcak. Rüzgâr yok.',
        gramNote:'Hava durumu tasviri.',
        bd:[{ro:'Rana ta yi zafi sosai',tr:'Güneş çok sıcak',role:'hava',note:'Sıcaklık.'},{ro:'Iska babu',tr:'Rüzgâr yok',role:'eksiklik',note:'Yokluk.'}]},
       {speaker:'A', gender:'m', ha:'Damina ya zo ko? Ina ruwan sama.', tr:'Yağmur mevsimi geldi mi? Yağmur nerede.',
        gramNote:'Mevsim sorusu.',
        bd:[{ro:'Damina ya zo ko',tr:'Yağmur mevsimi geldi mi',role:'soru',note:'Mevsim.'},{ro:'Ina ruwan sama',tr:'Yağmur nerede',role:'beklenti',note:'Yağmur beklentisi.'}]},
       {speaker:'B', gender:'f', ha:'Kadan kadan. Wata biyu sai damina ta cika.', tr:'Yavaş yavaş. İki ay sonra yağmur mevsimi dolar.',
        gramNote:'Takvim bilgisi.',
        bd:[{ro:'Kadan kadan',tr:'Yavaş yavaş',role:'miktar',note:'Kademe kademe.'},{ro:'Wata biyu sai damina ta cika',tr:'İki ay sonra yağmur mevsimi dolar',role:'bilgi',note:'Mevsim takvimi.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:'Yanayin yau mai kyau ne. Sama shudi ce. Rana tana haskawa. Iska tana da sanyi. Ciyawa kore ce, furanni suna fure.',
     tr:'Bugün hava güzel. Gökyüzü mavi. Güneş parlıyor. Rüzgâr soğuk. Çimen yeşil, çiçekler açıyor.',
     questions:[
       {q:'Gökyüzünün rengi ne?', opts:['Mavi','Kırmızı','Sarı','Gri'], answer:0, tr:'Gökyüzünün rengi ne?'},
       {q:'Rüzgâr nasıl?', opts:['Soğuk','Sıcak','Yok','Güçlü'], answer:0, tr:'Rüzgâr nasıl?'},
     ]
    },
  ],
};
LESSONS[16] = L16;
