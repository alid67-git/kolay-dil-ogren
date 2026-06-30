// ders19.js — Hausa Lesson 19: Actions & Activities
const L19 = {
  words: [
    {id:'w1', ha:'Gudu', ro:'gu-du', tr:'Koşmak',
     tip:'Hızlı koşma eylemi.',
     ctx:'Spor ve acil durumlar.',
     examples:[{
       ha:'Na gudu zuwa tasha.', ro:'na gu-du zu-wa ta-sha', tr:'Terminale koştum.',
       bd:[{ro:'Na gudu',tr:'Koştum',role:'fiil',note:'Hızlı hareket.'},{ro:'zuwa tasha',tr:'terminale',role:'hedef',note:'Varış noktası.'}]
     }]
    },
    {id:'w2', ha:'Tafi', ro:'ta-fi', tr:'Yürümek / Gitmek',
     tip:'Normal yürüme ve gitme.',
     ctx:'Günlük hareket ve yürüme.',
     examples:[{
       ha:'Ina tafi da ƙafa.', ro:'i-na ta-fi da ka-fa', tr:'Yürüyerek gidiyorum.',
       bd:[{ro:'Ina tafi',tr:'Gidiyorum',role:'fiil',note:'Hareket.'},{ro:'da ƙafa',tr:'yürüyerek',role:'araç',note:'Yürüme aracı.'}]
     }]
    },
    {id:'w3', ha:'Tsaya', ro:'tsa-ya', tr:'Durmak / Ayakta durmak',
     tip:'Hareketi durdurmak ve beklemek.',
     ctx:'Durma ve bekleme.',
     examples:[{
       ha:'Tsaya nan, zan dawo.', ro:'tsa-ya nan zan da-wo', tr:'Burada dur, döneceğim.',
       bd:[{ro:'Tsaya nan',tr:'Burada dur',role:'emir',note:'Durma emri.'},{ro:'zan dawo',tr:'döneceğim',role:'söz',note:'Dönüş vaadi.'}]
     }]
    },
    {id:'w4', ha:'Tashi', ro:'ta-shi', tr:'Kalkmak / Havalanmak',
     tip:'Yerden kalkmak veya uçmak.',
     ctx:'Uyanma, kalkma ve havalanma.',
     examples:[{
       ha:'Tashi da wuri yau.', ro:'ta-shi da wu-ri yau', tr:'Bugün erken kalk.',
       bd:[{ro:'Tashi da wuri',tr:'Erken kalk',role:'emir',note:'Kalkma emri.'},{ro:'yau',tr:'bugün',role:'zaman',note:'Zaman.'}]
     }]
    },
    {id:'w5', ha:'Fado', ro:'fa-do', tr:'Düşmek',
     tip:'Yerden düşme ve kapanma.',
     ctx:'Yaralanma ve kaza.',
     examples:[{
       ha:'Na fado daga keke.', ro:'na fa-do da-ga ke-ke', tr:'Bisikletten düştüm.',
       bd:[{ro:'Na fado',tr:'Düştüm',role:'fiil',note:'Düşme.'},{ro:'daga keke',tr:'bisikletten',role:'kaynak',note:'Düşülen yer.'}]
     }]
    },
    {id:'w6', ha:'Buɗe', ro:'bu-de', tr:'Açmak',
     tip:'Kapı, kutu veya şişeyi açmak.',
     ctx:'Açma eylemi.',
     examples:[{
       ha:'Buɗe littafin, don Allah.', ro:'bu-de lit-ta-fin don al-lah', tr:'Kitabı aç lütfen.',
       bd:[{ro:'Buɗe littafin',tr:'Kitabı aç',role:'emir',note:'Açma emri.'},{ro:'don Allah',tr:'lütfen',role:'nezaket',note:'Nezaket.'}]
     }]
    },
    {id:'w7', ha:'Rufe', ro:'ru-fe', tr:'Kapatmak',
     tip:'Kapı, pencere veya kutuyu kapatmak.',
     ctx:'Kapatma eylemi.',
     examples:[{
       ha:'Rufe ƙofar da daddare.', ro:'ru-fe ko-far da dad-da-re', tr:'Geceleri kapıyı kapat.',
       bd:[{ro:'Rufe ƙofar',tr:'Kapıyı kapat',role:'emir',note:'Kapatma emri.'},{ro:'da daddare',tr:'geceleri',role:'zaman',note:'Gece vakti.'}]
     }]
    },
    {id:'w8', ha:'Zage', ro:'za-ge', tr:'Sövmek / Küfretmek',
     tip:'Birisine kötü söz söylemek.',
     ctx:'Olumsuz sosyal davranış.',
     examples:[{
       ha:'Kada ka zagi mutum.', ro:'ka-da ka za-gi mu-tum', tr:'İnsana sövme.',
       bd:[{ro:'Kada ka zagi',tr:'Sövme',role:'yasak',note:'Yasak emri.'},{ro:'mutum',tr:'insana',role:'nesne',note:'Kişi.'}]
     }]
    },
    {id:'w9', ha:'Yi wasa', ro:'yi wa-sa', tr:'Oynamak',
     tip:'"Yi wasa" = oyun yapmak = oynamak.',
     ctx:'Çocuk oyunları ve spor.',
     examples:[{
       ha:'Yara suna wasa a filin.', ro:'ya-ra su-na wa-sa a fi-lin', tr:'Çocuklar alanda oynuyor.',
       bd:[{ro:'Yara suna wasa',tr:'Çocuklar oynuyor',role:'fiil',note:'Oyun.'},{ro:'a filin',tr:'alanda',role:'yer',note:'Oyun yeri.'}]
     }]
    },
    {id:'w10', ha:'Yi dariya', ro:'yi da-ri-ya', tr:'Gülmek',
     tip:'"Yi dariya" = gülüş yapmak.',
     ctx:'Mutluluk ve komedi.',
     examples:[{
       ha:'Mun yi dariya tare.', ro:'mun yi da-ri-ya ta-re', tr:'Birlikte güldük.',
       bd:[{ro:'Mun yi dariya',tr:'Güldük',role:'fiil',note:'Çoğul geçmiş gülme.'},{ro:'tare',tr:'birlikte',role:'birliktelik',note:'Birlikte.'}]
     }]
    },
    {id:'w11', ha:'Yi kuka', ro:'yi ku-ka', tr:'Ağlamak',
     tip:'"Yi kuka" = ağlama yapmak.',
     ctx:'Üzüntü ve keder.',
     examples:[{
       ha:'Yarinya tana kuka.', ro:'ya-rin-ya ta-na ku-ka', tr:'Kız ağlıyor.',
       bd:[{ro:'Yarinya tana kuka',tr:'Kız ağlıyor',role:'fiil',note:'Şimdiki zaman ağlama.'}]
     }]
    },
    {id:'w12', ha:'Bacci', ro:'bac-ci', tr:'Uyumak',
     tip:'Uyku ve istirahat.',
     ctx:'Gece uyuması ve istirahat.',
     examples:[{
       ha:'Ina son bacci.', ro:'i-na son bac-ci', tr:'Uyumak istiyorum.',
       bd:[{ro:'Ina son bacci',tr:'Uyumak istiyorum',role:'istek',note:'Uyku isteği.'}]
     }]
    },
    {id:'w13', ha:'Farka', ro:'far-ka', tr:'Uyanmak',
     tip:'Uykudan uyanma.',
     ctx:'Sabah uyanışı.',
     examples:[{
       ha:'Na farka da safiya.', ro:'na far-ka da sa-fi-ya', tr:'Sabah uyandım.',
       bd:[{ro:'Na farka',tr:'Uyandım',role:'fiil',note:'Geçmiş uyanış.'},{ro:'da safiya',tr:'sabah',role:'zaman',note:'Sabah vakti.'}]
     }]
    },
    {id:'w14', ha:'Ci abinci', ro:'ci a-bin-ci', tr:'Yemek yemek',
     tip:'"Ci" yemek, "abinci" yiyecek.',
     ctx:'Yemek zamanları.',
     examples:[{
       ha:'Lokacin ci abinci ya zo.', ro:'lo-ka-cin ci a-bin-ci ya zo', tr:'Yemek vakti geldi.',
       bd:[{ro:'Lokacin ci abinci',tr:'Yemek vakti',role:'zaman',note:'Zaman bildirimi.'},{ro:'ya zo',tr:'geldi',role:'fiil',note:'Gelmek.'}]
     }]
    },
    {id:'w15', ha:'Sha ruwa', ro:'sha ru-wa', tr:'Su içmek',
     tip:'"Sha" içmek, "ruwa" su.',
     ctx:'İçme eylemi.',
     examples:[{
       ha:'Sha ruwa da yawa yau.', ro:'sha ru-wa da ya-wa yau', tr:'Bugün çok su iç.',
       bd:[{ro:'Sha ruwa da yawa',tr:'Çok su iç',role:'emir',note:'Su içme tavsiyesi.'},{ro:'yau',tr:'bugün',role:'zaman',note:'Zaman.'}]
     }]
    },
    {id:'w16', ha:'Karanta littafi', ro:'ka-ran-ta lit-ta-fi', tr:'Kitap okumak',
     tip:'"Karanta" okumak, "littafi" kitap.',
     ctx:'Eğitim ve okuma.',
     examples:[{
       ha:'Tana karanta littafi a kowane lokaci.', ro:'ta-na ka-ran-ta lit-ta-fi a ko-wa-ne lo-ka-ci', tr:'Her zaman kitap okuyor.',
       bd:[{ro:'Tana karanta littafi',tr:'Kitap okuyor',role:'fiil',note:'Okuma.'},{ro:'a kowane lokaci',tr:'her zaman',role:'sıklık',note:'Süreklilik.'}]
     }]
    },
    {id:'w17', ha:'Rubuta wasika', ro:'ru-bu-ta wa-si-ka', tr:'Mektup yazmak',
     tip:'"Rubuta" yazmak, "wasika" mektup.',
     ctx:'İletişim ve yazışma.',
     examples:[{
       ha:'Na rubuta wasika ga abokina.', ro:'na ru-bu-ta wa-si-ka ga a-bo-ki-na', tr:'Arkadaşıma mektup yazdım.',
       bd:[{ro:'Na rubuta wasika',tr:'Mektup yazdım',role:'fiil',note:'Yazı eylemi.'},{ro:'ga abokina',tr:'arkadaşıma',role:'alıcı',note:'Hedef kişi.'}]
     }]
    },
    {id:'w18', ha:'Yi magana', ro:'yi ma-ga-na', tr:'Konuşmak',
     tip:'"Yi magana" = konuşma yapmak.',
     ctx:'Sözlü iletişim.',
     examples:[{
       ha:'Mun yi magana na tsawon awa.', ro:'mun yi ma-ga-na na tsa-won a-wa', tr:'Saatlerce konuştuk.',
       bd:[{ro:'Mun yi magana',tr:'Konuştuk',role:'fiil',note:'Konuşma.'},{ro:'na tsawon awa',tr:'saatlerce',role:'süre',note:'Uzun süre.'}]
     }]
    },
    {id:'w19', ha:'Yi sallah', ro:'yi sal-lah', tr:'Namaz kılmak',
     tip:'İslami namaz ibadeti.',
     ctx:'İslami ibadet.',
     examples:[{
       ha:'Ina yi sallah biyar a rana.', ro:'i-na yi sal-lah bi-yar a ra-na', tr:'Günde beş vakit namaz kılıyorum.',
       bd:[{ro:'Ina yi sallah',tr:'Namaz kılıyorum',role:'fiil',note:'İbadet.'},{ro:'biyar a rana',tr:'günde beş vakit',role:'sıklık',note:'Vakit sayısı.'}]
     }]
    },
    {id:'w20', ha:'Aiki', ro:'ai-ki', tr:'Çalışmak / İş',
     tip:'"Aiki" hem iş hem de çalışma eylemi.',
     ctx:'İş ve çalışma.',
     examples:[{
       ha:'Ina yi aiki tukuru.', ro:'i-na yi ai-ki tu-ku-ru', tr:'Çok çalışıyorum.',
       bd:[{ro:'Ina yi aiki',tr:'Çalışıyorum',role:'fiil',note:'Çalışma.'},{ro:'tukuru',tr:'çok/oldukça',role:'pekiştirme',note:'Yoğun çalışma.'}]
     }]
    },
    {id:'w21', ha:'Koyarwa', ro:'ko-yar-wa', tr:'Öğretmek',
     tip:'"Koyarwa" öğretme eylemi.',
     ctx:'Eğitim ve öğretim.',
     examples:[{
       ha:'Tana koyarwa a makaranta.', ro:'ta-na ko-yar-wa a ma-ka-ran-ta', tr:'Okulda öğretmenlik yapıyor.',
       bd:[{ro:'Tana koyarwa',tr:'Öğretmenlik yapıyor',role:'fiil',note:'Öğretme.'},{ro:'a makaranta',tr:'okulda',role:'yer',note:'Okul.'}]
     }]
    },
    {id:'w22', ha:'Koyo', ro:'ko-yo', tr:'Öğrenmek',
     tip:'"Koyarwa" öğretmek, "koyo" öğrenmek.',
     ctx:'Eğitim ve bilgi edinme.',
     examples:[{
       ha:'Ina koyon Hausa.', ro:'i-na ko-yon hau-sa', tr:'Hausa öğreniyorum.',
       bd:[{ro:'Ina koyon',tr:'Öğreniyorum',role:'fiil',note:'Öğrenme.'},{ro:'Hausa',tr:'Hausa dili',role:'nesne',note:'Öğrenilen dil.'}]
     }]
    },
    {id:'w23', ha:'Taimako', ro:'tai-ma-ko', tr:'Yardım etmek',
     tip:'"Taimako" yardım ve yardım etme.',
     ctx:'Sosyal yardım ve destek.',
     examples:[{
       ha:'Zan taimake ka a wannan.', ro:'zan tai-ma-ke ka a wan-nan', tr:'Bunda sana yardım edeceğim.',
       bd:[{ro:'Zan taimake ka',tr:'Sana yardım edeceğim',role:'fiil',note:'Yardım vaadi.'},{ro:'a wannan',tr:'bunda',role:'konu',note:'Yardım konusu.'}]
     }]
    },
    {id:'w24', ha:'Nemi', ro:'ne-mi', tr:'Aramak / İstemek',
     tip:'Arama ve talep etme.',
     ctx:'Bir şeyi aramak.',
     examples:[{
       ha:'Ina neman makulli na.', ro:'i-na ne-man ma-kul-li na', tr:'Anahtarımı arıyorum.',
       bd:[{ro:'Ina neman',tr:'Arıyorum',role:'fiil',note:'Arama eylemi.'},{ro:'makulli na',tr:'anahtarım',role:'nesne',note:'Aranan şey.'}]
     }]
    },
    {id:'w25', ha:'Gina', ro:'gi-na', tr:'İnşa etmek / Yapmak',
     tip:'Yapı inşa etme ve yapma.',
     ctx:'İnşaat ve üretim.',
     examples:[{
       ha:'Suna gina gida sabbi.', ro:'su-na gi-na gi-da sab-bi', tr:'Yeni ev inşa ediyorlar.',
       bd:[{ro:'Suna gina',tr:'İnşa ediyorlar',role:'fiil',note:'Çoğul inşaat.'},{ro:'gida sabbi',tr:'yeni ev',role:'nesne',note:'İnşa edilen.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:"Hausa'da Emir Kipi", title_en:'Imperative Mood in Hausa',
     explanation:"Hausa'da emir kipi (imperativ) fiil kökü kullanılarak oluşturulur. Yasaklama için 'kada' kullanılır.",
     table:[
       {pronoun:'Olumlu emir (tek)', form:'Fiil kökü', example:'Zo! Gudu! Tsaya!', tr:'Gel! Koş! Dur!'},
       {pronoun:'Olumlu emir (çoğul)', form:'Ku + fiil', example:'Ku zo! Ku gudu!', tr:'Gelin! Koşun!'},
       {pronoun:'Yasak (tek)', form:'Kada ka/ki + fiil', example:'Kada ka fado!', tr:'Düşme!'},
       {pronoun:'Yasak (çoğul)', form:'Kada ku + fiil', example:'Kada ku gudu!', tr:'Koşmayın!'},
     ],
     note:"'Ku' çoğul emir ön eki. 'Kada' yasak ifadesi. 'Kada ka' erkek için, 'Kada ki' kadın için."
    },
    {id:'g2', title:"Şimdiki Zaman: Ina vs Nake", title_en:'Present Tense: Ina vs Nake',
     explanation:"'Ina' basit şimdiki zaman, 'Nake' süregelen şimdiki zaman. İkisi de yaygın kullanılır.",
     table:[
       {pronoun:'Ben - basit', form:'Ina + fiil', example:'Ina karanta.', tr:'Okuyorum.'},
       {pronoun:'Ben - süregelen', form:'Nake + fiil', example:'Nake karanta.', tr:'Şu an okuyorum.'},
       {pronoun:'O (erkek) - basit', form:'Yana + fiil', example:'Yana gudu.', tr:'Koşuyor.'},
       {pronoun:'O (kadın) - basit', form:'Tana + fiil', example:'Tana kuka.', tr:'Ağlıyor.'},
       {pronoun:'Biz - basit', form:'Muna + fiil', example:'Muna yi wasa.', tr:'Oynuyoruz.'},
     ],
     note:"'Ina/Nake' (ben), 'Kana/Kake' (sen - erkek), 'Kina/Kike' (sen - kadın), 'Yana/Yake' (o - erkek), 'Tana/Take' (o - kadın), 'Muna/Muke' (biz)."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Ina koyon Hausa.', tr:'Hausa öğreniyorum.', prompt:'Öğrenme aktiviteni anlat'},
    {id:'sp2', ha:'Yara suna wasa a filin.', tr:'Çocuklar alanda oynuyor.', prompt:'Oyun sahnesini anlat'},
    {id:'sp3', ha:'Tsaya nan, zan dawo!', tr:'Burada dur, döneceğim!', prompt:'Birini durdurmak için konuş'},
    {id:'sp4', ha:'Na farka da safiya da wuri.', tr:'Sabah erken uyandım.', prompt:'Uyanış zamanını anlat'},
    {id:'sp5', ha:'Zan taimake ka a wannan.', tr:'Bunda sana yardım edeceğim.', prompt:'Yardım teklif et'},
    {id:'sp6', ha:'Suna gina gida sabbi.', tr:'Yeni ev inşa ediyorlar.', prompt:'İnşaat aktivitesini anlat'},
    {id:'sp7', ha:'Mun yi dariya tare.', tr:'Birlikte güldük.', prompt:'Beraber gülme anını anlat'},
  ],
  dialogues: [
    {id:'d1', title:'Günlük Aktiviteler', title_tr:'Günlük Eylemler Diyaloğu',
     lines:[
       {speaker:'A', gender:'m', ha:'Yau me kuke yi?', tr:'Bugün ne yapıyorsunuz?',
        gramNote:'Çoğul aktivite sorusu.',
        bd:[{ro:'Yau me kuke yi',tr:'Bugün ne yapıyorsunuz',role:'soru',note:'Aktivite sorusu.'}]},
       {speaker:'B', gender:'f', ha:'Da safiya mun yi sallah. Yanzu muna ci abinci. Daga baya zan je kasuwa.', tr:'Sabah namaz kıldık. Şimdi yemek yiyoruz. Sonra pazara gideceğim.',
        gramNote:'Zamanlı aktivite listesi.',
        bd:[{ro:'Da safiya mun yi sallah',tr:'Sabah namaz kıldık',role:'geçmiş',note:'Sabah aktivitesi.'},{ro:'Yanzu muna ci abinci',tr:'Şimdi yemek yiyoruz',role:'şimdiki',note:'Anlık.'},{ro:'Daga baya zan je kasuwa',tr:'Sonra pazara gideceğim',role:'gelecek',note:'Gelecek plan.'}]},
       {speaker:'A', gender:'m', ha:'Zan zo da ke. Ina so koyon saye a kasuwa.', tr:'Seninle geleceğim. Pazarda nasıl alışveriş yapılacağını öğrenmek istiyorum.',
        gramNote:'Davet ve öğrenme isteği.',
        bd:[{ro:'Zan zo da ke',tr:'Seninle geleceğim',role:'plan',note:'Birliktelik.'},{ro:'Ina so koyon saye',tr:'Alışveriş öğrenmek istiyorum',role:'istek',note:'Öğrenme isteği.'}]},
       {speaker:'B', gender:'f', ha:'Lallai ne! Zan koyar da kai.', tr:'Elbette! Sana öğreteceğim.',
        gramNote:'Öğretme vaadi.',
        bd:[{ro:'Lallai ne',tr:'Elbette',role:'onay',note:'Kabul.'},{ro:'Zan koyar da kai',tr:'Sana öğreteceğim',role:'söz',note:'Öğretme vaadi.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:'Yau na farka da wuri. Na yi sallah da gari ya waye. Bayan haka na ci abincin safe da shan shayi. Yanzu ina koyon Hausa.',
     tr:'Bugün erken uyandım. Şafakta namaz kıldım. Sonra kahvaltı ettim ve çay içtim. Şimdi Hausa öğreniyorum.',
     questions:[
       {q:'Namaz ne zaman kılındı?', opts:['Şafakta','Öğleden sonra','Akşam','Gece yarısı'], answer:0, tr:'Namaz ne zaman kılındı?'},
       {q:'Şu an ne yapılıyor?', opts:['Hausa öğrenme','Yemek yeme','Uyuma','Alışveriş'], answer:0, tr:'Şu an ne yapılıyor?'},
     ]
    },
  ],
};
LESSONS[19] = L19;
