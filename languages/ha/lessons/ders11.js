// ders11.js — Hausa Lesson 11: Essential Verbs
const L11 = {
  words: [
    {id:'w1', ha:'Je', ro:'je', tr:'Gitmek',
     tip:'Hareket fiili. En çok kullanılan fiillerden.',
     ctx:'Her türlü gitme eylemi.',
     examples:[{
       ha:'Zan je kasuwa.', ro:'zan je ka-su-wa', tr:'Pazara gideceğim.',
       bd:[{ro:'Zan je',tr:'Gideceğim',role:'fiil',note:'Gelecek zaman.'},{ro:'kasuwa',tr:'pazar',role:'yer',note:'Hedef.'}]
     }]
    },
    {id:'w2', ha:'Zo', ro:'zo', tr:'Gelmek',
     tip:'Yaklaşma fiili. "Je"nin zıttı.',
     ctx:'Gelmek ve yaklaşmak için.',
     examples:[{
       ha:'Zo nan yanzu.', ro:'zo nan yan-zu', tr:'Şimdi buraya gel.',
       bd:[{ro:'Zo nan',tr:'Buraya gel',role:'emir',note:'Gelmek.'},{ro:'yanzu',tr:'şimdi',role:'zaman',note:'Anlık.'}]
     }]
    },
    {id:'w3', ha:'Ci', ro:'ci', tr:'Yemek (fiil)',
     tip:'Yeme eylemi. "Ci abinci" = yemek yemek.',
     ctx:'Yeme ve tüketme için.',
     examples:[{
       ha:'Mun ci tuwo da miyan kuka.', ro:'mun ci tu-wo da mi-yan ku-ka', tr:'Baobab çorbalı tuwo yedik.',
       bd:[{ro:'Mun ci',tr:'Yedik',role:'fiil',note:'Çoğul geçmiş.'},{ro:'tuwo da miyan kuka',tr:'tuwo ve baobab çorbası',role:'nesne',note:'Yemek.'}]
     }]
    },
    {id:'w4', ha:'Sha', ro:'sha', tr:'İçmek',
     tip:'İçme eylemi. "Sha ruwa" = su içmek.',
     ctx:'İçecekler ve içme için.',
     examples:[{
       ha:'Sha ruwa mai sanyi.', ro:'sha ru-wa mai san-yi', tr:'Soğuk su iç.',
       bd:[{ro:'Sha ruwa',tr:'Su iç',role:'emir',note:'İçmek.'},{ro:'mai sanyi',tr:'soğuk',role:'sıfat',note:'Sıcaklık.'}]
     }]
    },
    {id:'w5', ha:'Yi', ro:'yi', tr:'Yapmak / Etmek',
     tip:'En çok kullanılan fiil. Birçok ifadede kullanılır.',
     ctx:'Her türlü eylem için.',
     examples:[{
       ha:'Yi aiki da kyau.', ro:'yi ai-ki da kya-u', tr:'İyi çalış.',
       bd:[{ro:'Yi aiki',tr:'Çalış',role:'emir',note:'Çalışma emri.'},{ro:'da kyau',tr:'iyi şekilde',role:'zarfımsı',note:'Kalite.'}]
     }]
    },
    {id:'w6', ha:'Ce', ro:'ce', tr:'Demek / Söylemek',
     tip:'"Ce" kadın, "ka" erkek için. Söyleme fiili.',
     ctx:'Konuşma ve ifade etme için.',
     examples:[{
       ha:'Ta ce sannu.', ro:'ta ce san-nu', tr:'O (kadın) merhaba dedi.',
       bd:[{ro:'Ta ce',tr:'O dedi (kadın)',role:'fiil',note:'Geçmiş söyleme.'},{ro:'sannu',tr:'merhaba',role:'söz',note:'Söylenen şey.'}]
     }]
    },
    {id:'w7', ha:'Ji', ro:'ji', tr:'Duymak / Hissetmek',
     tip:'Hem duymak hem de hissetmek anlamına gelir.',
     ctx:'Ses duymak ve his ifade etmek.',
     examples:[{
       ha:'Na ji sauti.', ro:'na ji sau-ti', tr:'Bir ses duydum.',
       bd:[{ro:'Na ji',tr:'Duydum',role:'fiil',note:'Geçmiş duyma.'},{ro:'sauti',tr:'ses',role:'nesne',note:'Duyulan şey.'}]
     }]
    },
    {id:'w8', ha:'Gani', ro:'ga-ni', tr:'Görmek',
     tip:'Görme fiili.',
     ctx:'Gözle görmek için.',
     examples:[{
       ha:'Na gani shi a kasuwa.', ro:'na ga-ni shi a ka-su-wa', tr:'Onu pazarda gördüm.',
       bd:[{ro:'Na gani',tr:'Gördüm',role:'fiil',note:'Geçmiş görme.'},{ro:'shi a kasuwa',tr:'onu pazarda',role:'nesne+yer',note:'Görülen kişi ve yer.'}]
     }]
    },
    {id:'w9', ha:'Sani', ro:'sa-ni', tr:'Bilmek / Tanımak',
     tip:'Bilgi ve tanıma fiili.',
     ctx:'Bilgi ve tanışıklık için.',
     examples:[{
       ha:'Ina sani shi.', ro:'i-na sa-ni shi', tr:'Onu tanıyorum.',
       bd:[{ro:'Ina sani',tr:'Tanıyorum/Biliyorum',role:'fiil',note:'Bilme.'},{ro:'shi',tr:'onu (erkek)',role:'zamir',note:'3. tekil erkek.'}]
     }]
    },
    {id:'w10', ha:'So', ro:'so', tr:'İstemek / Sevmek',
     tip:'Hem istek hem sevgi bildirir.',
     ctx:'İstek, sevgi ve tercih.',
     examples:[{
       ha:'Ina so wannan.', ro:'i-na so wan-nan', tr:'Bunu istiyorum/seviyorum.',
       bd:[{ro:'Ina so',tr:'İstiyorum/Seviyorum',role:'fiil',note:'İstek ve sevgi.'},{ro:'wannan',tr:'bunu',role:'nesne',note:'İşaret zamiri.'}]
     }]
    },
    {id:'w11', ha:'Tafi', ro:'ta-fi', tr:'Gitmek / Uzaklaşmak',
     tip:'"Tafi" uzaklaşmayı vurgular.',
     ctx:'Ayrılmak ve uzaklaşmak için.',
     examples:[{
       ha:'Ya tafi gida.', ro:'ya ta-fi gi-da', tr:'Eve gitti.',
       bd:[{ro:'Ya tafi',tr:'Gitti',role:'fiil',note:'Geçmiş zaman.'},{ro:'gida',tr:'eve',role:'yer',note:'Hedef.'}]
     }]
    },
    {id:'w12', ha:'Zauna', ro:'za-u-na', tr:'Oturmak / Kalmak / Yaşamak',
     tip:'Oturma, ikamet ve kalma.',
     ctx:'Oturma ve ikamet için.',
     examples:[{
       ha:'Ina zauna a Kano.', ro:'i-na za-u-na a ka-no', tr:"Kano'da yaşıyorum.",
       bd:[{ro:'Ina zauna',tr:'Yaşıyorum/Oturuyorum',role:'fiil',note:'İkamet.'},{ro:'a Kano',tr:"Kano'da",role:'yer',note:'Şehir.'}]
     }]
    },
    {id:'w13', ha:'Tashi', ro:'ta-shi', tr:'Kalkmak / Havalanmak / Ayrılmak',
     tip:'Harekete geçmek ve yukarı kalkmak.',
     ctx:'Kalkmak, uçmak veya ayrılmak için.',
     examples:[{
       ha:'Na tashi da safiya.', ro:'na ta-shi da sa-fi-ya', tr:'Sabah kalktım.',
       bd:[{ro:'Na tashi',tr:'Kalktım',role:'fiil',note:'Geçmiş kalkma.'},{ro:'da safiya',tr:'sabah',role:'zaman',note:'Zaman.'}]
     }]
    },
    {id:'w14', ha:'Biya', ro:'bi-ya', tr:'Ödemek',
     tip:'Para ödeme fiili.',
     ctx:'Ödeme yaparken.',
     examples:[{
       ha:'Na biya Naira ɗari.', ro:'na bi-ya nai-ra da-ri', tr:'Yüz Naira ödedim.',
       bd:[{ro:'Na biya',tr:'Ödedim',role:'fiil',note:'Ödeme.'},{ro:'Naira ɗari',tr:'Yüz Naira',role:'miktar',note:'Para miktarı.'}]
     }]
    },
    {id:'w15', ha:'Saye', ro:'sa-ye', tr:'Satın almak',
     tip:'Alışveriş fiili.',
     ctx:'Satın alma için.',
     examples:[{
       ha:'Na saye riga a kasuwa.', ro:'na sa-ye ri-ga a ka-su-wa', tr:'Pazardan kaftan aldım.',
       bd:[{ro:'Na saye',tr:'Satın aldım',role:'fiil',note:'Satın alma.'},{ro:'riga a kasuwa',tr:'kaftan pazardan',role:'nesne+yer',note:'Alınan şey ve yer.'}]
     }]
    },
    {id:'w16', ha:'Sayar', ro:'sa-yar', tr:'Satmak',
     tip:'"Saye" almak, "sayar" satmak.',
     ctx:'Satıcı rolünde.',
     examples:[{
       ha:'Ina sayar da nama.', ro:'i-na sa-yar da na-ma', tr:'Et satıyorum.',
       bd:[{ro:'Ina sayar da',tr:'Satıyorum',role:'fiil',note:'Satma.'},{ro:'nama',tr:'et',role:'nesne',note:'Satılan şey.'}]
     }]
    },
    {id:'w17', ha:'Karanta', ro:'ka-ran-ta', tr:'Okumak',
     tip:'Metin okuma fiili.',
     ctx:'Okuma ve eğitim için.',
     examples:[{
       ha:'Tana karanta littafi.', ro:'ta-na ka-ran-ta lit-ta-fi', tr:'Kitap okuyor (kadın).',
       bd:[{ro:'Tana karanta',tr:'Okuyor (kadın)',role:'fiil',note:'Şimdiki zaman.'},{ro:'littafi',tr:'kitap',role:'nesne',note:'Okunulan şey.'}]
     }]
    },
    {id:'w18', ha:'Rubuta', ro:'ru-bu-ta', tr:'Yazmak',
     tip:'Yazma fiili.',
     ctx:'Yazı yazma için.',
     examples:[{
       ha:'Na rubuta wasika.', ro:'na ru-bu-ta wa-si-ka', tr:'Mektup yazdım.',
       bd:[{ro:'Na rubuta',tr:'Yazdım',role:'fiil',note:'Geçmiş yazma.'},{ro:'wasika',tr:'mektup',role:'nesne',note:'Yazılan şey.'}]
     }]
    },
    {id:'w19', ha:'Yi magana', ro:'yi ma-ga-na', tr:'Konuşmak',
     tip:'"Yi magana" = konuşma yapmak.',
     ctx:'Konuşma ve diyalog.',
     examples:[{
       ha:'Mun yi magana mai yawa.', ro:'mun yi ma-ga-na mai ya-wa', tr:'Çok konuştuk.',
       bd:[{ro:'Mun yi magana',tr:'Konuştuk',role:'fiil',note:'Çoğul geçmiş.'},{ro:'mai yawa',tr:'çok',role:'pekiştirme',note:'Miktar.'}]
     }]
    },
    {id:'w20', ha:'Saurara', ro:'sau-ra-ra', tr:'Dinlemek',
     tip:'Dikkatli dinleme fiili.',
     ctx:'Dikkat ve anlama için.',
     examples:[{
       ha:'Saurara da kyau.', ro:'sau-ra-ra da kya-u', tr:'İyi dinle.',
       bd:[{ro:'Saurara',tr:'Dinle',role:'emir',note:'Dinleme emri.'},{ro:'da kyau',tr:'dikkatli/iyi',role:'zarfımsı',note:'Nitelik.'}]
     }]
    },
    {id:'w21', ha:'Kalli', ro:'kal-li', tr:'Bakmak / Seyretmek',
     tip:'Dikkatle bakma fiili.',
     ctx:'İzleme ve bakma için.',
     examples:[{
       ha:'Kalli telebijin.', ro:'kal-li te-le-bi-jin', tr:'Televizyon izle.',
       bd:[{ro:'Kalli',tr:'İzle/Bak',role:'emir',note:'Bakma emri.'},{ro:'telebijin',tr:'televizyon',role:'nesne',note:'İzlenen şey.'}]
     }]
    },
    {id:'w22', ha:'Buɗe', ro:'bu-de', tr:'Açmak',
     tip:'Kapı, pencere veya bir şeyi açma.',
     ctx:'Açma eylemi için.',
     examples:[{
       ha:'Buɗe ƙofar, don Allah.', ro:'bu-de ko-far don al-lah', tr:'Kapıyı aç lütfen.',
       bd:[{ro:'Buɗe',tr:'Aç',role:'emir',note:'Açma emri.'},{ro:'ƙofar',tr:'kapıyı',role:'nesne',note:'Açılan şey.'}]
     }]
    },
    {id:'w23', ha:'Rufe', ro:'ru-fe', tr:'Kapatmak',
     tip:'"Buɗe" açmak, "rufe" kapatmak.',
     ctx:'Kapatma eylemi için.',
     examples:[{
       ha:'Rufe tagar, iska ta zo.', ro:'ru-fe ta-gar is-ka ta zo', tr:'Pencereyi kapat, rüzgar geliyor.',
       bd:[{ro:'Rufe tagar',tr:'Pencereyi kapat',role:'emir',note:'Kapatma emri.'},{ro:'iska ta zo',tr:'rüzgar geliyor',role:'neden',note:'Kapatma nedeni.'}]
     }]
    },
    {id:'w24', ha:'Dawo', ro:'da-wo', tr:'Geri dönmek',
     tip:'Başlangıç noktasına dönmek.',
     ctx:'Geri dönüş için.',
     examples:[{
       ha:'Zan dawo gida da maraice.', ro:'zan da-wo gi-da da ma-rai-ce', tr:'Akşam eve döneceğim.',
       bd:[{ro:'Zan dawo',tr:'Döneceğim',role:'fiil',note:'Gelecek dönüş.'},{ro:'gida da maraice',tr:'eve akşam',role:'yer+zaman',note:'Dönüş yeri ve zamanı.'}]
     }]
    },
    {id:'w25', ha:'Nemi', ro:'ne-mi', tr:'Aramak / İstemek',
     tip:'Arama ve talep fiili.',
     ctx:'Bir şeyi aramak veya talep etmek.',
     examples:[{
       ha:'Ina neman aiki.', ro:'i-na ne-man ai-ki', tr:'İş arıyorum.',
       bd:[{ro:'Ina neman',tr:'Arıyorum',role:'fiil',note:'Arama eylemi.'},{ro:'aiki',tr:'iş',role:'nesne',note:'Aranan şey.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:"Hausa'da Temel Fiil Zamanları", title_en:'Basic Verb Tenses in Hausa',
     explanation:"Hausa'da zaman belirleyiciler zamirlerle birleşir. 'Na' (ben - geçmiş), 'Zan' (ben - gelecek), 'Ina' (ben - şimdiki).",
     table:[
       {pronoun:'Geçmiş (1. tekil)', form:'Na + fiil', example:'Na je kasuwa.', tr:'Pazara gittim.'},
       {pronoun:'Şimdiki (1. tekil)', form:'Ina + fiil', example:'Ina je kasuwa.', tr:'Pazara gidiyorum.'},
       {pronoun:'Gelecek (1. tekil)', form:'Zan + fiil', example:'Zan je kasuwa.', tr:'Pazara gideceğim.'},
       {pronoun:'Geçmiş (3. tekil erkek)', form:'Ya + fiil', example:'Ya je kasuwa.', tr:'Pazara gitti.'},
       {pronoun:'Geçmiş (3. tekil kadın)', form:'Ta + fiil', example:'Ta je kasuwa.', tr:'Pazara gitti (kadın).'},
     ],
     note:"Fiil zamanları zamirle bağlantılıdır. Pratik yapmak için her fiili farklı zamanlarda conjugate edin."
    },
    {id:'g2', title:'Çok Kullanılan Fiil + Nesne Kalıpları', title_en:'Common Verb + Object Patterns',
     explanation:"'Yi magana', 'ci abinci', 'sha ruwa' gibi kalıplar Hausa'da çok sık kullanılır.",
     table:[
       {pronoun:'Yi + isim', form:'yi aiki / yi magana', example:'Ina yi aiki.', tr:'Çalışıyorum.'},
       {pronoun:'Ci + yiyecek', form:'ci abinci / ci tuwo', example:'Mun ci abinci.', tr:'Yemek yedik.'},
       {pronoun:'Sha + içecek', form:'sha ruwa / sha shayi', example:'Na sha ruwa.', tr:'Su içtim.'},
       {pronoun:'Je + yer', form:'je kasuwa / je gida', example:'Zan je gida.', tr:'Eve gideceğim.'},
     ],
     note:"'Yi' fiili özellikle geniş bir kullanım alanına sahiptir: yi sallah (namaz kıl), yi dariya (gül), yi kuka (ağla)."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Ina je kasuwa.', tr:'Pazara gidiyorum.', prompt:"'Je' fiilini kullan"},
    {id:'sp2', ha:'Na ci abinci.', tr:'Yemek yedim.', prompt:"'Ci' fiilini geçmişte kullan"},
    {id:'sp3', ha:'Zan rubuta wasika.', tr:'Mektup yazacağım.', prompt:"'Rubuta' fiilini gelecekte kullan"},
    {id:'sp4', ha:'Tana karanta littafi.', tr:'Kitap okuyor (kadın).', prompt:"'Karanta' fiilini kullan"},
    {id:'sp5', ha:'Ina neman aiki.', tr:'İş arıyorum.', prompt:"'Nemi' fiilini kullan"},
    {id:'sp6', ha:'Ya dawo gida.', tr:'Eve döndü.', prompt:"'Dawo' fiilini kullan"},
  ],
  dialogues: [
    {id:'d1', title:'Ne Yapıyorsunuz?', title_tr:'Günlük Fiiller Diyaloğu',
     lines:[
       {speaker:'A', gender:'f', ha:'Ina yi aiki a gida yau.', tr:'Bugün evde çalışıyorum.',
        gramNote:"'Yi aiki' = çalışmak.",
        bd:[{ro:'Ina yi aiki',tr:'Çalışıyorum',role:'fiil',note:'Çalışma.'},{ro:'a gida yau',tr:'evde bugün',role:'yer+zaman',note:'Konum ve zaman.'}]},
       {speaker:'B', gender:'m', ha:'Ni ma, ina karanta littafi.', tr:'Ben de kitap okuyorum.',
        gramNote:"'Ni ma' = ben de.",
        bd:[{ro:'Ni ma',tr:'Ben de',role:'ek',note:'Ek iyelik.'},{ro:'ina karanta littafi',tr:'kitap okuyorum',role:'fiil',note:'Okuma.'}]},
       {speaker:'A', gender:'f', ha:'Gobe zan je kasuwa, za ka zo?', tr:'Yarın pazara gidiyorum, gelir misin?',
        gramNote:"Davet ve 'za ka zo' = gelecek misin?",
        bd:[{ro:'Gobe zan je kasuwa',tr:'Yarın pazara gidiyorum',role:'plan',note:'Gelecek plan.'},{ro:'za ka zo',tr:'gelecek misin',role:'davet',note:'Katılım sorusu.'}]},
       {speaker:'B', gender:'m', ha:'Lallai ne! Zan zo. Zan saye tufafi.', tr:'Elbette! Geleceğim. Kıyafet alacağım.',
        gramNote:'Onay ve plan.',
        bd:[{ro:'Lallai ne',tr:'Elbette',role:'onay',note:'Kesin kabul.'},{ro:'Zan zo Zan saye tufafi',tr:'Geleceğim ve kıyafet alacağım',role:'plan',note:'İki gelecek eylem.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:'Yau ina yi aiki. Na karanta littafi da safiya. Zan je kasuwa da yamma. Zan saye abinci.',
     tr:'Bugün çalışıyorum. Sabah kitap okudum. Öğleden sonra pazara gideceğim. Yiyecek alacağım.',
     questions:[
       {q:'Sabah ne yapıldı?', opts:['Kitap okuma','Çalışma','Pazara gitme','Yemek yeme'], answer:0, tr:'Sabah ne yapıldı?'},
       {q:'Öğleden sonra nereye gidilecek?', opts:['Pazara','Eve','Okula','Hastaneye'], answer:0, tr:'Öğleden sonra nereye gidilecek?'},
     ]
    },
  ],
};
LESSONS[11] = L11;
