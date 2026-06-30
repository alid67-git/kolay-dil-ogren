// ders18.js — Hausa Lesson 18: Time & Frequency
const L18 = {
  words: [
    {id:'w1', ha:'Koyaushe', ro:'ko-yau-she', tr:'Her zaman / Daima',
     tip:'"Koyaushe" = her zaman, devamlı.',
     ctx:'Rutin ve sürekli eylemler.',
     examples:[{
       ha:'Koyaushe ina yi sallah.', ro:'ko-yau-she i-na yi sal-lah', tr:'Her zaman namaz kılarım.',
       bd:[{ro:'Koyaushe',tr:'Her zaman',role:'zaman',note:'Süreklilik.'},{ro:'ina yi sallah',tr:'namaz kılarım',role:'rutin',note:'Düzenli ibadet.'}]
     }]
    },
    {id:'w2', ha:'Sau da yawa', ro:'sau da ya-wa', tr:'Çok sık / Sıklıkla',
     tip:'"Sau" kez/defa, "da yawa" çok. Sıklıkla.',
     ctx:'Sık tekrarlanan eylemler.',
     examples:[{
       ha:'Sau da yawa nake je kasuwa.', ro:'sau da ya-wa na-ke je ka-su-wa', tr:'Sık sık pazara gidiyorum.',
       bd:[{ro:'Sau da yawa',tr:'Sık sık',role:'sıklık',note:'Yüksek sıklık.'},{ro:'nake je kasuwa',tr:'pazara gidiyorum',role:'fiil',note:'Rutin eylem.'}]
     }]
    },
    {id:'w3', ha:'Wani lokaci', ro:'wa-ni lo-ka-ci', tr:'Bazen',
     tip:'"Wani lokaci" = bir zaman = bazen.',
     ctx:'Arasıra gerçekleşen eylemler.',
     examples:[{
       ha:'Wani lokaci ina sha kofi.', ro:'wa-ni lo-ka-ci i-na sha ko-fi', tr:'Bazen kahve içiyorum.',
       bd:[{ro:'Wani lokaci',tr:'Bazen',role:'sıklık',note:'Ara sıra.'},{ro:'ina sha kofi',tr:'kahve içiyorum',role:'eylem',note:'Ara sıra içme.'}]
     }]
    },
    {id:'w4', ha:'Ba kowa ba', ro:'ba ko-wa ba', tr:'Nadiren / Pek az',
     tip:'"Ba kowa ba" = kimse olmadan = nadiren/pek az.',
     ctx:'Nadir gerçekleşen eylemler.',
     examples:[{
       ha:'Ba kowa ba nake ci naman alade.', ro:'ba ko-wa ba na-ke ci na-man a-la-de', tr:'Domuz eti nadiren yerim.',
       bd:[{ro:'Ba kowa ba',tr:'Nadiren',role:'sıklık',note:'Düşük sıklık.'},{ro:'nake ci naman alade',tr:'domuz eti yerim',role:'eylem',note:'Nadir yemek.'}]
     }]
    },
    {id:'w5', ha:'Ba taba ba', ro:'ba ta-ba ba', tr:'Hiçbir zaman / Asla',
     tip:'"Taba" = dokunmak/deneymek. "Ba taba ba" = asla.',
     ctx:'Hiç yapılmayan eylemler.',
     examples:[{
       ha:'Ban taba shan giya ba.', ro:'ban ta-ba shan gi-ya ba', tr:'Asla alkol içmedim.',
       bd:[{ro:'Ban taba',tr:'Asla yapmadım',role:'olumsuz-asla',note:'Kesinlikle olumsuz.'},{ro:'shan giya',tr:'alkol içmek',role:'eylem',note:'İçme.'},{ro:'ba',tr:'(olumsuz sonu)',role:'olumsuz ek',note:'Kalıbın sonu.'}]
     }]
    },
    {id:'w6', ha:'Yanzu', ro:'yan-zu', tr:'Şimdi / Hemen şimdi',
     tip:'Anlık zaman.',
     ctx:'Şu an gerçekleşen eylemler.',
     examples:[{
       ha:'Yanzu ina gida.', ro:'yan-zu i-na gi-da', tr:'Şu an evdeyim.',
       bd:[{ro:'Yanzu',tr:'Şimdi',role:'zaman',note:'Anlık.'},{ro:'ina gida',tr:'evdeyim',role:'durum',note:'Konum.'}]
     }]
    },
    {id:'w7', ha:'Nan da nan', ro:'nan da nan', tr:'Hemen / Çok yakında',
     tip:'"Nan da nan" = burada ve burada = hemen.',
     ctx:'Acil eylemler ve kısa süre içinde.',
     examples:[{
       ha:'Zan zo nan da nan.', ro:'zan zo nan da nan', tr:'Hemen geleceğim.',
       bd:[{ro:'Zan zo',tr:'Geleceğim',role:'fiil',note:'Gelecek.'},{ro:'nan da nan',tr:'hemen',role:'zaman',note:'Anlık gelecek.'}]
     }]
    },
    {id:'w8', ha:'Daga baya', ro:'da-ga ba-ya', tr:'Sonra / Daha sonra',
     tip:'"Daga baya" = arkadan = sonra.',
     ctx:'Gelecek eylemler ve planlama.',
     examples:[{
       ha:'Zan yi haka daga baya.', ro:'zan yi ha-ka da-ga ba-ya', tr:'Bunu sonra yapacağım.',
       bd:[{ro:'Zan yi haka',tr:'Bunu yapacağım',role:'fiil',note:'Gelecek plan.'},{ro:'daga baya',tr:'sonra',role:'zaman',note:'Sonraki zaman.'}]
     }]
    },
    {id:'w9', ha:'Kafin', ro:'ka-fin', tr:'Önce / ...den önce',
     tip:'"Kafin" = öncesinde. Zaman sıralaması.',
     ctx:'Önce gerçekleşen eylemler.',
     examples:[{
       ha:'Kafin ci abinci, na yi sallah.', ro:'ka-fin ci a-bin-ci na yi sal-lah', tr:'Yemekten önce namaz kıldım.',
       bd:[{ro:'Kafin ci abinci',tr:'Yemekten önce',role:'zaman',note:'Sıralama.'},{ro:'na yi sallah',tr:'namaz kıldım',role:'fiil',note:'Geçmiş eylem.'}]
     }]
    },
    {id:'w10', ha:'Bayan', ro:'ba-yan', tr:'Sonra / ...den sonra',
     tip:'"Bayan" = arkasından = sonra.',
     ctx:'Sonra gerçekleşen eylemler.',
     examples:[{
       ha:'Bayan aiki, zan dawo gida.', ro:'ba-yan ai-ki zan da-wo gi-da', tr:'İşten sonra eve döneceğim.',
       bd:[{ro:'Bayan aiki',tr:'İşten sonra',role:'zaman',note:'Sıralama.'},{ro:'zan dawo gida',tr:'eve döneceğim',role:'fiil',note:'Dönüş.'}]
     }]
    },
    {id:'w11', ha:'A lokacin', ro:'a lo-ka-cin', tr:'O sırada / O zaman',
     tip:'"A lokacin" = o vakitte = o sırada.',
     ctx:'Eş zamanlı eylemler veya geçmiş zaman.',
     examples:[{
       ha:'A lokacin damina, rana ba ta yi zafi.', ro:'a lo-ka-cin da-mi-na ra-na ba ta yi za-fi', tr:'Yağmur mevsiminde güneş bu kadar sıcak değil.',
       bd:[{ro:'A lokacin damina',tr:'Yağmur mevsiminde',role:'zaman',note:'Mevsim referansı.'},{ro:'rana ba ta yi zafi',tr:'güneş sıcak değil',role:'durum',note:'Mevsimlik durum.'}]
     }]
    },
    {id:'w12', ha:'A kowace rana', ro:'a ko-wa-ce ra-na', tr:'Her gün',
     tip:'"Kowace" her. "A kowace rana" = her günde.',
     ctx:'Günlük rutinler.',
     examples:[{
       ha:'A kowace rana nake karanta jarida.', ro:'a ko-wa-ce ra-na na-ke ka-ran-ta ja-ri-da', tr:'Her gün gazete okuyorum.',
       bd:[{ro:'A kowace rana',tr:'Her gün',role:'sıklık',note:'Günlük.'},{ro:'nake karanta jarida',tr:'gazete okuyorum',role:'rutin',note:'Günlük rutin.'}]
     }]
    },
    {id:'w13', ha:'A mako-mako', ro:'a ma-ko ma-ko', tr:'Her hafta',
     tip:'"Mako-mako" = hafta hafta = her hafta.',
     ctx:'Haftalık rutinler.',
     examples:[{
       ha:'A mako-mako mukan je masallaci.', ro:'a ma-ko ma-ko mu-kan je ma-sal-la-ci', tr:'Her hafta camiye gidiyoruz.',
       bd:[{ro:'A mako-mako',tr:'Her hafta',role:'sıklık',note:'Haftalık.'},{ro:'mukan je masallaci',tr:'camiye gidiyoruz',role:'rutin',note:'Haftalık ibadet.'}]
     }]
    },
    {id:'w14', ha:'A shekara-shekara', ro:'a she-ka-ra she-ka-ra', tr:'Her yıl',
     tip:'"Shekara-shekara" = yıl yıl = her yıl.',
     ctx:'Yıllık rutinler.',
     examples:[{
       ha:'A shekara-shekara mukan yi hutu.', ro:'a she-ka-ra she-ka-ra mu-kan yi hu-tu', tr:'Her yıl tatil yapıyoruz.',
       bd:[{ro:'A shekara-shekara',tr:'Her yıl',role:'sıklık',note:'Yıllık.'},{ro:'mukan yi hutu',tr:'tatil yapıyoruz',role:'rutin',note:'Yıllık tatil.'}]
     }]
    },
    {id:'w15', ha:'Da wuri', ro:'da wu-ri', tr:'Erken',
     tip:'Erken vakit gelme veya yapma.',
     ctx:'Zamanında ve erken gelme.',
     examples:[{
       ha:'Zo da wuri, don Allah.', ro:'zo da wu-ri don al-lah', tr:'Erken gel lütfen.',
       bd:[{ro:'Zo da wuri',tr:'Erken gel',role:'emir',note:'Erken gelme.'},{ro:'don Allah',tr:'lütfen',role:'nezaket',note:'Nazik istek.'}]
     }]
    },
    {id:'w16', ha:'Da latti', ro:'da lat-ti', tr:'Geç',
     tip:'Geç vakit gelme veya yapma.',
     ctx:'Gecikme bildirimi.',
     examples:[{
       ha:'Ban so in zo da latti ba.', ro:'ban so in zo da lat-ti ba', tr:'Geç gelmek istemiyorum.',
       bd:[{ro:'Ban so',tr:'İstemiyorum',role:'olumsuz',note:'Ret.'},{ro:'in zo da latti',tr:'geç gelmek',role:'eylem',note:'Gecikme.'}]
     }]
    },
    {id:'w17', ha:'A karfe ...', ro:'a kar-fe', tr:'Saat ... da',
     tip:'"A karfe" = saat kaçta. Spesifik saat belirtmek için.',
     ctx:'Saat ve randevu.',
     examples:[{
       ha:'Za mu hadu a karfe biyu.', ro:'za mu ha-du a kar-fe bi-yu', tr:'Saat ikide buluşacağız.',
       bd:[{ro:'Za mu hadu',tr:'Buluşacağız',role:'fiil',note:'Toplantı.'},{ro:'a karfe biyu',tr:'saat ikide',role:'zaman',note:'Spesifik saat.'}]
     }]
    },
    {id:'w18', ha:'Tsakar dare', ro:'tsa-kar da-re', tr:'Gece yarısı',
     tip:'"Tsakar" = ortası. "Tsakar dare" = gecenin ortası.',
     ctx:'Geç gece vakti.',
     examples:[{
       ha:'Bacci ya kama ni a tsakar dare.', ro:'bac-ci ya ka-me ni a tsa-kar da-re', tr:'Gece yarısı uyku bastı.',
       bd:[{ro:'Bacci ya kame ni',tr:'Uyku bastı beni',role:'mecaz',note:'Uyku ifadesi.'},{ro:'a tsakar dare',tr:'gece yarısı',role:'zaman',note:'Gece vakti.'}]
     }]
    },
    {id:'w19', ha:'Gari ya waye', ro:'ga-ri ya wa-ye', tr:'Şafak söktu / Gün doğdu',
     tip:'"Gari ya waye" = hava açıldı = şafak söktü.',
     ctx:'Sabahın erken vakitleri.',
     examples:[{
       ha:'Gari ya waye, na tashi.', ro:'ga-ri ya wa-ye na ta-shi', tr:'Gün doğdu, kalktım.',
       bd:[{ro:'Gari ya waye',tr:'Gün doğdu',role:'doğa',note:'Şafak vakti.'},{ro:'na tashi',tr:'kalktım',role:'fiil',note:'Kalkma.'}]
     }]
    },
    {id:'w20', ha:'Faɗuwar rana', ro:'fa-du-war ra-na', tr:'Gün batımı',
     tip:'"Faɗuwar" düşme + "rana" güneş = gün batımı.',
     ctx:'Akşam ve gün sonu.',
     examples:[{
       ha:'Da faɗuwar rana sai dawo gida.', ro:'da fa-du-war ra-na sai da-wo gi-da', tr:'Gün batımında eve döneceğim.',
       bd:[{ro:'Da faɗuwar rana',tr:'Gün batımında',role:'zaman',note:'Akşam vakti.'},{ro:'sai dawo gida',tr:'eve döneceğim',role:'plan',note:'Dönüş planı.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:'Zaman Zarflarıyla Fiil Kullanımı', title_en:'Using Time Adverbs with Verbs',
     explanation:"Hausa'da zaman zarfları cümlenin başında veya sonunda kullanılabilir.",
     table:[
       {pronoun:'Her zaman', form:'Koyaushe + fiil', example:'Koyaushe ina sallah.', tr:'Her zaman namaz kılarım.'},
       {pronoun:'Sık sık', form:'Sau da yawa + fiil', example:'Sau da yawa nake tafi.', tr:'Sık sık gidiyorum.'},
       {pronoun:'Bazen', form:'Wani lokaci + fiil', example:'Wani lokaci ina kuka.', tr:'Bazen ağlıyorum.'},
       {pronoun:'Hiçbir zaman', form:'Ban taba + fiil + ba', example:'Ban taba shan giya ba.', tr:'Asla içki içmedim.'},
       {pronoun:'Her gün', form:'A kowace rana + fiil', example:'A kowace rana nake karanta.', tr:'Her gün okuyorum.'},
     ],
     note:"'Nake' = şimdiki zaman süregelen. 'Na' = geçmiş. 'Zan' = gelecek. Zaman zarfları bu zamanlarla birlikte kullanılır."
    },
    {id:'g2', title:"Kafin / Bayan — Önce / Sonra", title_en:'Kafin / Bayan — Before / After',
     explanation:"'Kafin' (önce) ve 'bayan' (sonra) zaman sıralaması yapar.",
     table:[
       {pronoun:'Önce', form:'Kafin + eylem', example:'Kafin je, saurara.', tr:'Gitmeden önce, dinle.'},
       {pronoun:'Sonra', form:'Bayan + eylem', example:'Bayan aiki, dawo.', tr:'İşten sonra, dön.'},
       {pronoun:'İlk', form:'Da farko', example:'Da farko karanta, sannan rubuta.', tr:'Önce oku, sonra yaz.'},
       {pronoun:'Son olarak', form:'A ƙarshe', example:'A ƙarshe, biya.', tr:'Son olarak, öde.'},
     ],
     note:"'Sannan' = sonra/ardından. 'Da farko' = ilk olarak. 'A ƙarshe' = en sonunda. Sıralama bağlaçları."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Koyaushe ina yi sallah.', tr:'Her zaman namaz kılarım.', prompt:'Rutinini anlat'},
    {id:'sp2', ha:'Sau da yawa nake je kasuwa.', tr:'Sık sık pazara gidiyorum.', prompt:'Sık yaptığın şeyi söyle'},
    {id:'sp3', ha:'Wani lokaci ina sha kofi.', tr:'Bazen kahve içiyorum.', prompt:'Arasıra yaptığın şeyi söyle'},
    {id:'sp4', ha:'Za mu hadu a karfe uku.', tr:'Saat üçte buluşacağız.', prompt:'Randevu ver'},
    {id:'sp5', ha:'Kafin ci abinci, na yi sallah.', tr:'Yemekten önce namaz kıldım.', prompt:'Sıralama anlat'},
    {id:'sp6', ha:'Gari ya waye, na tashi.', tr:'Gün doğdu, kalktım.', prompt:'Sabah rutini anlat'},
  ],
  dialogues: [
    {id:'d1', title:'Günlük Rutin', title_tr:'Günlük Rutin Diyaloğu',
     lines:[
       {speaker:'A', gender:'f', ha:'Yaya ranarku take?', tr:'Günün nasıl geçiyor?',
        gramNote:'Günlük durum sorusu.',
        bd:[{ro:'Yaya ranarku take',tr:'Günün nasıl',role:'soru',note:'Durum sorusu.'}]},
       {speaker:'B', gender:'m', ha:'Da farko gari ya waye, na yi sallah. Bayan haka, na sha kofi da burodin.', tr:'İlk olarak gün doğdu, namaz kıldım. Sonra kahve ve ekmek içtim.',
        gramNote:'Sabah rutini anlatımı.',
        bd:[{ro:'Da farko',tr:'İlk olarak',role:'sıralama',note:'İlk eylem.'},{ro:'gari ya waye',tr:'gün doğdu',role:'zaman',note:'Şafak.'},{ro:'Bayan haka',tr:'Sonra',role:'sıralama',note:'Sıralama bağlacı.'}]},
       {speaker:'A', gender:'f', ha:'A kowace rana kake yi haka?', tr:'Her gün böyle yapıyor musun?',
        gramNote:'Sıklık sorusu.',
        bd:[{ro:'A kowace rana',tr:'Her gün',role:'sıklık',note:'Günlük sıklık.'},{ro:'kake yi haka',tr:'böyle yapıyor musun',role:'soru',note:'Rutin sorusu.'}]},
       {speaker:'B', gender:'m', ha:'Lallai ne! Koyaushe ina yi haka. Ba taba yin bacci latti.', tr:'Elbette! Her zaman böyle yapıyorum. Asla geç uyumuyorum.',
        gramNote:'Onay ve alışkanlık.',
        bd:[{ro:'Koyaushe ina yi haka',tr:'Her zaman böyle yapıyorum',role:'onay',note:'Rutin onayı.'},{ro:'Ba taba yin bacci latti',tr:'Asla geç uyumuyorum',role:'olumsuz-asla',note:'Kesinlik.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:'Da farko na tashi gari ya waye. Na yi sallah kafin cin abincin safe. Bayan haka, na je aiki. Koyaushe nake dawo gida da faɗuwar rana.',
     tr:'İlk olarak şafakta kalktım. Kahvaltıdan önce namaz kıldım. Sonra işe gittim. Her zaman gün batımında eve dönüyorum.',
     questions:[
       {q:'Namaz ne zaman kılındı?', opts:['Kahvaltıdan önce','Kahvaltıdan sonra','İşten önce','Gece'],  answer:0, tr:'Namaz ne zaman kılındı?'},
       {q:'Eve ne zaman dönülüyor?', opts:['Gün batımında','Gün doğumunda','Öğlen','Gece yarısı'], answer:0, tr:'Eve ne zaman dönülüyor?'},
     ]
    },
  ],
};
LESSONS[18] = L18;
