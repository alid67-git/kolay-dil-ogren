// ders6.js — Hausa Lesson 6: Directions & Places
const L6 = {
  words: [
    {id:'w1', ha:'Ina ...?', ro:'i-na', tr:'... nerede?',
     tip:'"Ina" = nerede. Yer sormak için temel kelime.',
     ctx:'Bir yerin yerini sormak için.',
     examples:[{
       ha:'Ina kasuwa?', ro:'i-na ka-su-wa', tr:'Pazar nerede?',
       bd:[{ro:'Ina',tr:'Nerede',role:'soru',note:'Yer sorusu.'},{ro:'kasuwa',tr:'pazar',role:'yer',note:'Hedef yer.'}]
     }]
    },
    {id:'w2', ha:'Hagu', ro:'ha-gu', tr:'Sol',
     tip:'Sol taraf yön ifadesi.',
     ctx:'Yol tarifi verirken veya alırken.',
     examples:[{
       ha:'Je hagu, sannan gaba.', ro:'je ha-gu san-nan ga-ba', tr:'Sola dön, sonra ileri git.',
       bd:[{ro:'Je hagu',tr:'Sola git',role:'yön',note:'Sol yön.'},{ro:'sannan gaba',tr:'sonra ileri',role:'sıra',note:'Sıralama.'}]
     }]
    },
    {id:'w3', ha:'Dama', ro:'da-ma', tr:'Sağ',
     tip:'Sağ taraf yön ifadesi.',
     ctx:'Yol tarifi verirken.',
     examples:[{
       ha:'Juya dama a titi.', ro:'ju-ya da-ma a ti-ti', tr:'Yolda sağa dön.',
       bd:[{ro:'Juya dama',tr:'Sağa dön',role:'yön',note:'Sağ yön.'},{ro:'a titi',tr:'yolda',role:'yer',note:'Cadde üzerinde.'}]
     }]
    },
    {id:'w4', ha:'Gaba', ro:'ga-ba', tr:'İleri / Öne / Karşı',
     tip:'"Gaba" ileri ve ön anlamına gelir.',
     ctx:'Yol tarifinde ilerlemeyi belirtmek için.',
     examples:[{
       ha:'Je kai tsaye gaba.', ro:'je kai tsa-ye ga-ba', tr:'Düz devam et.',
       bd:[{ro:'Je kai tsaye',tr:'Düz git',role:'yön',note:'Düz devam.'},{ro:'gaba',tr:'ileri/öne',role:'yön',note:'Ön yön.'}]
     }]
    },
    {id:'w5', ha:'Baya', ro:'ba-ya', tr:'Geri / Arka',
     tip:'"Baya" geri ve arka anlamına gelir.',
     ctx:'Geri dönme veya arka tarafı belirtmek için.',
     examples:[{
       ha:'Dawo baya kadan.', ro:'da-wo ba-ya ka-dan', tr:'Biraz geri dön.',
       bd:[{ro:'Dawo baya',tr:'Geri gel/dön',role:'yön',note:'Geri yön.'},{ro:'kadan',tr:'biraz',role:'miktar',note:'Az miktarda.'}]
     }]
    },
    {id:'w6', ha:'Kusa', ro:'ku-sa', tr:'Yakın',
     tip:'Mesafenin kısa olduğunu belirtir.',
     ctx:'Bir yerin yakın olduğunu söylerken.',
     examples:[{
       ha:'Masallaci kusa yake.', ro:'ma-sal-la-ci ku-sa ya-ke', tr:'Cami yakında.',
       bd:[{ro:'Masallaci',tr:'Cami',role:'isim',note:'İbadet yeri.'},{ro:'kusa yake',tr:'yakında',role:'yer',note:'Yakın mesafe.'}]
     }]
    },
    {id:'w7', ha:'Nesa', ro:'ne-sa', tr:'Uzak',
     tip:'Mesafenin uzun olduğunu belirtir.',
     ctx:'Bir yerin uzak olduğunu söylerken.',
     examples:[{
       ha:'Asibiti nesa yake.', ro:'a-si-bi-ti ne-sa ya-ke', tr:'Hastane uzakta.',
       bd:[{ro:'Asibiti',tr:'Hastane',role:'isim',note:'Sağlık tesisi.'},{ro:'nesa yake',tr:'uzakta',role:'yer',note:'Uzak mesafe.'}]
     }]
    },
    {id:'w8', ha:'Titi', ro:'ti-ti', tr:'Yol / Cadde / Sokak',
     tip:'Genel yol ve cadde kelimesi.',
     ctx:'Adres ve yol tarifinde.',
     examples:[{
       ha:'Titi na biyu, je dama.', ro:'ti-ti na bi-yu je da-ma', tr:'İkinci sokakta sağa dön.',
       bd:[{ro:'Titi na biyu',tr:'İkinci sokak',role:'yer',note:'Cadde numarası.'},{ro:'je dama',tr:'sağa git',role:'yön',note:'Sağ yön.'}]
     }]
    },
    {id:'w9', ha:'Gari', ro:'ga-ri', tr:'Şehir / Kasaba',
     tip:'Yerleşim yeri için genel kelime.',
     ctx:'Şehir ve kasabaları belirtmek için.',
     examples:[{
       ha:'Kano babban gari ne.', ro:'ka-no bab-ban ga-ri ne', tr:'Kano büyük bir şehirdir.',
       bd:[{ro:'Kano',tr:'Kano (şehir)',role:'özel isim',note:'Kuzey Nijerya şehri.'},{ro:'babban gari ne',tr:'büyük şehir',role:'tanım',note:'Şehir tanımı.'}]
     }]
    },
    {id:'w10', ha:'Kasuwa', ro:'ka-su-wa', tr:'Pazar / Çarşı',
     tip:'Pazar ve alışveriş merkezi.',
     ctx:'Yol tarifinde hedef yer olarak.',
     examples:[{
       ha:'Ina kasuwa? Kusa yake, gaba.', ro:'i-na ka-su-wa ku-sa ya-ke ga-ba', tr:'Pazar nerede? Yakında, ileride.',
       bd:[{ro:'Ina kasuwa',tr:'Pazar nerede',role:'soru',note:'Yer sorusu.'},{ro:'Kusa yake gaba',tr:'Yakın, ileride',role:'yanıt',note:'Yön ve mesafe.'}]
     }]
    },
    {id:'w11', ha:'Makaranta', ro:'ma-ka-ran-ta', tr:'Okul',
     tip:'Her seviyede eğitim kurumu.',
     ctx:'Okula yol tarifi verirken.',
     examples:[{
       ha:'Makaranta tana dama.', ro:'ma-ka-ran-ta ta-na da-ma', tr:'Okul sağ tarafta.',
       bd:[{ro:'Makaranta',tr:'Okul',role:'isim',note:'Eğitim kurumu.'},{ro:'tana dama',tr:'sağda',role:'yer',note:'Sağ taraf.'}]
     }]
    },
    {id:'w12', ha:'Asibitin', ro:'a-si-bi-tin', tr:'Hastane',
     tip:'Sağlık hizmeti veren kurum.',
     ctx:'Hastaneye yol sormak için.',
     examples:[{
       ha:'Ina asibitin, don Allah?', ro:'i-na a-si-bi-tin don al-lah', tr:'Hastane nerede lütfen?',
       bd:[{ro:'Ina asibitin',tr:'Hastane nerede',role:'soru',note:'Yer sorusu.'},{ro:'don Allah',tr:'lütfen',role:'nezaket',note:'Nazik istek.'}]
     }]
    },
    {id:'w13', ha:'Masallaci', ro:'ma-sal-la-ci', tr:'Cami',
     tip:"Müslüman ibadet yeri. Hausa toplumunun merkezinde.",
     ctx:'Camiye yol tarifi.',
     examples:[{
       ha:'Masallaci a hagu ne.', ro:'ma-sal-la-ci a ha-gu ne', tr:'Cami sol tarafta.',
       bd:[{ro:'Masallaci',tr:'Cami',role:'isim',note:'İbadet yeri.'},{ro:'a hagu ne',tr:'sol tarafta',role:'yer',note:'Sol konum.'}]
     }]
    },
    {id:'w14', ha:'Gidan wuta', ro:'gi-dan wu-ta', tr:'İtfaiye',
     tip:'"Gidan wuta" ateş evi anlamına gelir. İtfaiye istasyonu.',
     ctx:'Acil durumlarda yol tarifi.',
     examples:[{
       ha:'Gidan wuta nesa yake.', ro:'gi-dan wu-ta ne-sa ya-ke', tr:'İtfaiye uzakta.',
       bd:[{ro:'Gidan wuta',tr:'İtfaiye',role:'isim',note:'Acil servis.'},{ro:'nesa yake',tr:'uzakta',role:'mesafe',note:'Uzak.'}]
     }]
    },
    {id:'w15', ha:'Daga nan', ro:'da-ga nan', tr:'Buradan',
     tip:'"Daga" = dan itibaren/den. "Nan" = burada.',
     ctx:'Başlangıç noktasını belirtmek için.',
     examples:[{
       ha:'Daga nan je gaba, sannan hagu.', ro:'da-ga nan je ga-ba san-nan ha-gu', tr:'Buradan ileri git, sonra sola.',
       bd:[{ro:'Daga nan',tr:'Buradan',role:'başlangıç',note:'Başlangıç noktası.'},{ro:'je gaba',tr:'ileri git',role:'yön',note:'İlerleme.'},{ro:'sannan hagu',tr:'sonra sola',role:'sıra',note:'Sıralı yön.'}]
     }]
    },
    {id:'w16', ha:'Je kai tsaye', ro:'je kai tsa-ye', tr:'Düz git / Doğru devam et',
     tip:'Dosdoğru gitmeyi emreden ifade.',
     ctx:'Yol tarifinin en sık kullanılan ifadesi.',
     examples:[{
       ha:'Je kai tsaye, sannan juya dama.', ro:'je kai tsa-ye san-nan ju-ya da-ma', tr:'Düz git, sonra sağa dön.',
       bd:[{ro:'Je kai tsaye',tr:'Düz git',role:'yön',note:'Düz devam.'},{ro:'sannan juya dama',tr:'sonra sağa dön',role:'sıra',note:'Sıralı yön.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:'Yer Sorma: Ina...?', title_en:'Asking for Locations: Where is...?',
     explanation:"'Ina' = nerede. 'Ina + yer adı?' şeklinde yer sorulur. Yanıtta 'tana/yana' (orada) ve yön belirtilir.",
     table:[
       {pronoun:'Sormak', form:'Ina + yer?', example:'Ina kasuwa?', tr:'Pazar nerede?'},
       {pronoun:'Yakın yanıt', form:'Kusa yake/take.', example:'Masallaci kusa yake.', tr:'Cami yakında.'},
       {pronoun:'Uzak yanıt', form:'Nesa yake/take.', example:'Asibiti nesa yake.', tr:'Hastane uzakta.'},
       {pronoun:'Yönle yanıt', form:'Yana/tana + yön', example:'Makaranta tana dama.', tr:'Okul sağda.'},
     ],
     note:"'Yake' erkek/eril yerler için, 'take' dişil yerler için kullanılır. Pratik olarak 'yake' genel kullanımda tercih edilir."
    },
    {id:'g2', title:'Yol Tarifi İfadeleri', title_en:'Giving Directions',
     explanation:"Yol tarifi verirken temel yön kelimeleri ve fiiller kullanılır.",
     table:[
       {pronoun:'Düz git', form:'Je kai tsaye', example:'Je kai tsaye gaba.', tr:'Düz devam et.'},
       {pronoun:'Sola dön', form:'Juya hagu', example:'A titi, juya hagu.', tr:'Sokakta sola dön.'},
       {pronoun:'Sağa dön', form:'Juya dama', example:'Juya dama bayan masallaci.', tr:'Camiden sonra sağa dön.'},
       {pronoun:'Dur', form:'Tsaya', example:'Tsaya a gaban makaranta.', tr:'Okulun önünde dur.'},
       {pronoun:'Devam et', form:'Ci gaba', example:'Ci gaba gaba.', tr:'İleriye devam et.'},
     ],
     note:"'Sannan' = sonra. Ardışık yön talimatlarını bağlamak için kullanılır: 'Je gaba, sannan juya hagu' = İleri git, sonra sola dön."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Ina masallaci, don Allah?', tr:'Cami nerede lütfen?', prompt:'Cami nerede sor'},
    {id:'sp2', ha:'Je kai tsaye, sannan juya dama.', tr:'Düz git, sonra sağa dön.', prompt:'Yol tarifi ver'},
    {id:'sp3', ha:'Makaranta kusa yake ne?', tr:'Okul yakın mı?', prompt:'Yakınlık sor'},
    {id:'sp4', ha:'Asibiti nesa yake.', tr:'Hastane uzakta.', prompt:'Uzaklık belirt'},
    {id:'sp5', ha:'Daga nan, je hagu.', tr:'Buradan sola git.', prompt:'Buradan yön ver'},
    {id:'sp6', ha:'Titi na uku ne a dama.', tr:'Üçüncü sokak sağda.', prompt:'Sokak tarifi ver'},
    {id:'sp7', ha:'Tsaya a gaban gida.', tr:'Evin önünde dur.', prompt:'Durma noktası söyle'},
  ],
  dialogues: [
    {id:'d1', title:'Ina Kasuwa? — Pazar Nerede?', title_tr:'Yol Tarifi Diyaloğu',
     lines:[
       {speaker:'A', gender:'m', ha:'Sannu! Ina kasuwa, don Allah?', tr:'Merhaba! Pazar nerede lütfen?',
        gramNote:'Selamlama ve yer sorusu.',
        bd:[{ro:'Sannu',tr:'Merhaba',role:'selamlama',note:'Selamlama.'},{ro:'Ina kasuwa',tr:'Pazar nerede',role:'soru',note:'Yer sorusu.'}]},
       {speaker:'B', gender:'f', ha:'Je kai tsaye, sannan juya hagu a titi na biyu.', tr:'Düz git, sonra ikinci sokakta sola dön.',
        gramNote:'Yol tarifi.',
        bd:[{ro:'Je kai tsaye',tr:'Düz git',role:'yön',note:'İlerleme.'},{ro:'sannan juya hagu',tr:'sonra sola dön',role:'sıra',note:'Sıralı yön.'},{ro:'a titi na biyu',tr:'ikinci sokakta',role:'yer',note:'Konumsal.'}]},
       {speaker:'A', gender:'m', ha:'Kusa ne ko nesa?', tr:'Yakın mı yoksa uzak mı?',
        gramNote:'Mesafe sorusu.',
        bd:[{ro:'Kusa ne',tr:'Yakın mı',role:'soru',note:'Yakınlık.'},{ro:'ko',tr:'yoksa',role:'bağlaç',note:'Seçenek.'},{ro:'nesa',tr:'uzak',role:'soru',note:'Uzaklık.'}]},
       {speaker:'B', gender:'f', ha:'Kusa yake, mintoci biyar tafiya ne.', tr:'Yakın, yürüyerek beş dakika.',
        gramNote:'Mesafe ve süre.',
        bd:[{ro:'Kusa yake',tr:'Yakında',role:'mesafe',note:'Yakın.'},{ro:'mintoci biyar',tr:'beş dakika',role:'süre',note:'Zaman ifadesi.'},{ro:'tafiya ne',tr:'yürüyüş',role:'açıklama',note:'Yürüme.'}]},
       {speaker:'A', gender:'m', ha:'Nagode sosai!', tr:'Çok teşekkür ederim!',
        gramNote:'Teşekkür.',
        bd:[{ro:'Nagode sosai',tr:'Çok teşekkürler',role:'nezaket',note:'Minnet ifadesi.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:'Ina asibitin? Je kai tsaye gaba, sannan juya dama. Kusa ne, mita ɗari ne kawai.',
     tr:'Hastane nerede? Düz git, sonra sağa dön. Yakın, sadece yüz metre.',
     questions:[
       {q:'Nereye gidiliyor?', opts:['Hastane','Okul','Cami','Pazar'], answer:0, tr:'Nereye gidiliyor?'},
       {q:'İkinci yön talimatı ne?', opts:['Sağa dön','Sola dön','Düz git','Geri dön'], answer:0, tr:'İkinci yön talimatı ne?'},
     ]
    },
  ],
};
LESSONS[6] = L6;
