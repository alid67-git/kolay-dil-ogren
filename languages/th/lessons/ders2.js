// Ders 2 verisi — tayca-v3
// =================== VERİ: DERS 2 (eski L3 — Sayılar) ===================
const L2 = {
  tones:[], // Tonlar L1'de işlendi, burada yok
  words:[
    {id:'w1',th:'ศูนย์',ro:'suun',tr:'Sıfır (0)',
     tip:'"Suun" = 0. Telefon numarasi, oda numarasi sayarken.',
     ctx:'Telefon numarası, room number vs sayarken "suun" denir.',
     examples:[
       {th:'ศูนย์ครับ',ro:'suun khrap',tr:'Sıfır.',bd:[{ro:'suun',tr:'0',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ห้องหนึ่งศูนย์หนึ่งครับ',ro:'hong nueng roi et khrap',tr:'101 nolu oda.',bd:[{ro:'hong',tr:'oda',role:'S - Ozne'},{ro:'nueng-roi-et',tr:'yüz bir (101)',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w2',th:'หนึ่ง',ro:'nueng',tr:'Bir (1)',
     tip:'Orta ton. "Nueng" kelimelerle beraber adedi belirtir.',
     ctx:'Sayarken hep "nueng song saam sii haa" diye gider.',
     examples:[
       {th:'หนึ่งครับ',ro:'nueng khrap',tr:'Bir.',bd:[{ro:'nueng',tr:'1',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'หนึ่งโมง',ro:'nueng mong',tr:'Saat bir.',bd:[{ro:'nueng mong',tr:'saat 1',role:'Kelime'}]},
       {th:'หนึ่งบาทครับ',ro:'nueng baht khrap',tr:'Bir Baht.',bd:[{ro:'nueng',tr:'bir',role:'Kelime'},{ro:'baht',tr:'Baht',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w3',th:'สอง',ro:'song',tr:'İki (2)',
     tip:'Orta ton. Ama "20" soeylenirken "yii-sip" denilir.',
     ctx:'2-9 arasi hepsi basit, ama 20+ sayilar ozel.',
     examples:[
       {th:'สองครับ',ro:'song khrap',tr:'İki.',bd:[{ro:'song',tr:'2',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'สองร้อยบาทครับ',ro:'song roi baht khrap',tr:'200 Baht.',bd:[{ro:'song roi',tr:'200',role:'Kelime'},{ro:'baht',tr:'Baht',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'สองคนครับ',ro:'song khon khrap',tr:'Iki kisi.',bd:[{ro:'song khon',tr:'2 kisi',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w4',th:'สิบ',ro:'sip',tr:'On (10)',
     tip:'"Sip" = 10. 11-19 arasi "sip + sayi".',
     ctx:'Sip-et = 11, sip-song = 12, sip-saam = 13...',
     examples:[
       {th:'สิบครับ',ro:'sip khrap',tr:'On.',bd:[{ro:'sip',tr:'10',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'สิบเอ็ดครับ',ro:'sip-et khrap',tr:'On bir.',bd:[{ro:'sip-et',tr:'11',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'สิบบาทครับ',ro:'sip baht khrap',tr:'10 Baht.',bd:[{ro:'sip',tr:'10',role:'Kelime'},{ro:'baht',tr:'Baht',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w5',th:'ยี่สิบ',ro:'yii-sip',tr:'Yirmi (20)',
     tip:'"Yii-sip" 20. Song-sip YANLIS! Hep yii-sip.',
     ctx:'20 sayisi ozel — song-sip degil, yii-sip.',
     examples:[
       {th:'ยี่สิบครับ',ro:'yii-sip khrap',tr:'Yirmi.',bd:[{ro:'yii-sip',tr:'20',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ยี่สิบบาทครับ',ro:'yii-sip baht khrap',tr:'20 Baht.',bd:[{ro:'yii-sip',tr:'20',role:'Kelime'},{ro:'baht',tr:'Baht',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ยี่สิบเอ็ดครับ',ro:'yii-sip-et khrap',tr:'Yirmi bir.',bd:[{ro:'yii-sip-et',tr:'21',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w6',th:'ร้อย',ro:'roi',tr:'Yüz (100)',
     tip:'"Roi" = 100. "Song roi" = 200, "saam roi" = 300.',
     ctx:'Para konusmalarinda en cok kullanilan sayi.',
     examples:[
       {th:'ร้อยบาทครับ',ro:'roi baht khrap',tr:'100 Baht.',bd:[{ro:'roi',tr:'100',role:'Kelime'},{ro:'baht',tr:'Baht',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'สามร้อยห้าสิบบาทครับ',ro:'saam-roi-haa-sip baht khrap',tr:'350 Baht.',bd:[{ro:'saam roi haa sip',tr:'350',role:'Kelime'},{ro:'baht',tr:'Baht',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'นี่เท่าไรครับ',ro:'nii thao-rai khrap',tr:'Bu kac para?',bd:[{ro:'nii',tr:'bu',role:'Kelime'},{ro:'thao-rai',tr:'kac/ne kadar',role:'Soru/Olumsuz'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w7',th:'บาท',ro:'baht',tr:'Baht (Para Birimi)',
     tip:'"Baht" = Thai parasi. 1 Baht = 100 satang.',
     ctx:'Phuket\'te tum fiyatlar "baht" ile ifade edilir.',
     examples:[
       {th:'ห้าสิบบาทครับ',ro:'haa-sip baht khrap',tr:'50 Baht.',bd:[{ro:'haa-sip',tr:'50',role:'Kelime'},{ro:'baht',tr:'Baht',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'นี่เท่าไรครับ',ro:'nii thao-rai khrap',tr:'Bu kac Baht?',bd:[{ro:'nii',tr:'bu',role:'Kelime'},{ro:'thao-rai',tr:'ne kadar',role:'Soru/Olumsuz'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ราคาเท่าไรครับ',ro:'raa-khaa thao-rai khrap',tr:'Fiyati ne kadar?',bd:[{ro:'raa-khaa',tr:'fiyat',role:'Kelime'},{ro:'thao-rai',tr:'ne kadar',role:'Soru/Olumsuz'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ลดราคาได้ไหมครับ',ro:'lot raa-khaa dai mai khrap',tr:'Indirim yapabilir misiniz?',bd:[{ro:'lot raa-khaa',tr:'indirim yap-',role:'Kelime'},{ro:'dai mai',tr:'yapabilir mi',role:'Soru/Olumsuz'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
  ],

  grammar:[
    {
      title:'1. Sayıların Yapısı: 1-10 & 20-99',
      formula:'1-10: direkt | 11-19: sip+[1-9] | 20: yii-sip | 21+: yii-sip+[1-9]',
      explain:'Thai sayi sistemi basit: 1-10 ezberle, 11-19 = 10+sayi, 20+ = 2*10 + sayi. Ton her sayida sabittir.',
      tips:['11-19: "sip-et" (11), "sip-song" (12), "sip-saam" (13)','20 sayisi ozel: yii-sip (song-sip degil!)','100 = roi, 1000 = phan. 125 = roi yii-sip haa'],
      examples:[
        {th:'ศูนย์ หนึ่ง สอง สาม สี่ ห้า ครับ',ro:'suun nueng song saam sii haa khrap',tr:'0 1 2 3 4 5 sayıla.',bd:[{ro:'suun nueng song saam sii haa',tr:'0-5',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'หก เจ็ด แปด เก้า สิบ ครับ',ro:'hok jet paet kao sip khrap',tr:'6 7 8 9 10.',bd:[{ro:'hok jet paet kao sip',tr:'6-10',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'สิบเอ็ด สิบสอง สิบสาม สิบสี่ สิบห้า ครับ',ro:'sip-et sip-song sip-saam sip-sii sip-haa khrap',tr:'11 12 13 14 15.',bd:[{ro:'sip-et sip-song sip-saam sip-sii sip-haa',tr:'11-15',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ยี่สิบ ยี่สิบเอ็ด ยี่สิบสอง ครับ',ro:'yii-sip yii-sip-et yii-sip-song khrap',tr:'20 21 22.',bd:[{ro:'yii-sip yii-sip-et yii-sip-song',tr:'20-22',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ร้อย สามร้อย พัน ครับ',ro:'roi saam-roi phan khrap',tr:'100 300 1000.',bd:[{ro:'roi saam-roi phan',tr:'100 300 1000',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
      ]
    },
    {
      title:'2. Siniflandirici (Classifier): Sayi + Nesne',
      formula:'SAYI + SINIFLANDIRICI + ISIM',
      explain:'Thaide sayilar ismin onune degil, ozel bir siniflandirici sozcukle birlikte kullanilir. Her nesne grubunun kendi siniflandirici sozcugu vardir.',
      tips:['khon = kisi sayisi icin','tua = hayvan sayisi icin','bai = yuvarlak nesne (meyve, tabak)','lem = kitap, defter','khan = araba, bicak gibi'],
      examples:[
        {th:'สองคนครับ',ro:'song khon khrap',tr:'Iki kisi.',bd:[{ro:'song',tr:'iki',role:'Kelime'},{ro:'khon',tr:'kisi (sinif.)',role:'Kelime'},{ro:'khrap',tr:'khrap',role:'Kibar'}]},
        {th:'สามตัวครับ',ro:'sam tua khrap',tr:'Uc hayvan.',bd:[{ro:'sam',tr:'uc',role:'Kelime'},{ro:'tua',tr:'hayvan (sinif.)',role:'Kelime'},{ro:'khrap',tr:'khrap',role:'Kibar'}]},
        {th:'หนึ่งใบครับ',ro:'nueng bai khrap',tr:'Bir tane (yuvarlak nesne).',bd:[{ro:'nueng',tr:'bir',role:'Kelime'},{ro:'bai',tr:'yuvarlak nesne (sinif.)',role:'Kelime'},{ro:'khrap',tr:'khrap',role:'Kibar'}]},
        {th:'ร้อยบาทครับ',ro:'roi baht khrap',tr:'100 Baht.',bd:[{ro:'roi',tr:'100',role:'Kelime'},{ro:'baht',tr:'Baht',role:'Kelime'},{ro:'khrap',tr:'khrap',role:'Kibar'}]},
        {th:'ผมมีแฟนหนึ่งคนครับ',ro:'pom mi faen nueng khon khrap',tr:'Bir kiz arkadasim var.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'mi',tr:'var',role:'V - Yuklem'},{ro:'faen',tr:'sevgili',role:'O - Nesne'},{ro:'nueng khon',tr:'bir kisi',role:'Kelime'},{ro:'khrap',tr:'khrap',role:'Kibar'}]},
      ]
    },
  ],

  speaking:[
    {task:'0 den 5 e sayla',th:'ศูนย์ หนึ่ง สอง สาม สี่ ห้า ครับ',ro:'suun nueng song saam sii haa khrap',tr:'0 1 2 3 4 5.',bd:[{ro:'suun nueng song saam sii haa',tr:'0-5',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
    {task:'6 dan 10 a sayla',th:'หก เจ็ด แปด เก้า สิบ ครับ',ro:'hok jet paet kao sip khrap',tr:'6 7 8 9 10.',bd:[{ro:'hok jet paet kao sip',tr:'6-10',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
    {task:'11 den 15 e sayla',th:'สิบเอ็ด สิบสอง สิบสาม สิบสี่ สิบห้า ครับ',ro:'sip-et sip-song sip-saam sip-sii sip-haa khrap',tr:'11 12 13 14 15.',bd:[{ro:'sip-et sip-song sip-saam sip-sii sip-haa',tr:'11-15',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
    {task:'20 ile 25 arasi sayla',th:'ยี่สิบ ยี่สิบเอ็ด ยี่สิบสอง ยี่สิบสาม ยี่สิบสี่ ยี่สิบห้า ครับ',ro:'yii-sip yii-sip-et yii-sip-song yii-sip-saam yii-sip-sii yii-sip-haa khrap',tr:'20 21 22 23 24 25.',bd:[{ro:'yii-sip ... yii-sip-haa',tr:'20-25',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
    {task:'Fiyat sor',th:'นี่เท่าไรครับ',ro:'nii thao-rai khrap',tr:'Bu kac para?',bd:[{ro:'nii',tr:'bu',role:'Kelime'},{ro:'thao-rai',tr:'ne kadar',role:'Soru/Olumsuz'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
    {task:'100 Baht soyle',th:'ร้อยบาทครับ',ro:'roi baht khrap',tr:'100 Baht.',bd:[{ro:'roi',tr:'100',role:'Kelime'},{ro:'baht',tr:'Baht',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
    {task:'350 Baht soyle',th:'สามร้อยห้าสิบบาทครับ',ro:'saam-roi-haa-sip baht khrap',tr:'350 Baht.',bd:[{ro:'saam roi haa sip',tr:'350',role:'Kelime'},{ro:'baht',tr:'Baht',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
    {task:'Indirim iste',th:'ลดราคาได้ไหมครับ',ro:'lot raa-khaa dai mai khrap',tr:'Indirim yapabilir misiniz?',bd:[{ro:'lot raa-khaa',tr:'indirim',role:'Kelime'},{ro:'dai mai',tr:'yapabilir mi',role:'Soru/Olumsuz'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
  ],

  dialogues:[
    {title:'🛒 Markette Fiyat Sorma',
     lines:[
       {s:'Ali',th:'นี่เท่าไรครับ',ro:'nii thao-rai khrap',tr:'Bu kac para?',bd:[{ro:'nii thao-rai khrap',tr:'Bu ne kadar?',role:'Kelime'}]},
       {s:'Ali',th:'ลดราคาได้ไหมครับ',ro:'lot raa-khaa dai mai khrap',tr:'Indirim yapabilir misiniz?',bd:[{ro:'lot raa-khaa dai mai khrap',tr:'Indirim var mi?',role:'Kelime'}]},
       {s:'Nada',th:'ได้ค่ะ แปดสิบบาทค่ะ',ro:'dai kha paet-sip baht kha',tr:'Olur, 80 Baht.',bd:[{ro:'dai',tr:'olur',role:'Kelime'},{ro:'paet-sip baht',tr:'80 Baht',role:'Kelime'},{ro:'kha',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {title:'🏍️ Grab\'de Sayi Kullanimi',
     lines:[
       {s:'Nada',th:'คุณอยู่ที่ไหนครับ',ro:'khun yuu thii nai khrap',tr:'Neredesiniz?',bd:[{ro:'khun yuu thii nai khrap',tr:'Neredesiniz?',role:'Kelime'}]},
       {s:'Ali',th:'ผมอยู่ถนนสายหนึ่งครับ',ro:'pom yuu tha-non sai nueng khrap',tr:'Bir numarali cadde deyim.',bd:[{ro:'pom yuu',tr:'benim yerim',role:'Kelime'},{ro:'tha-non sai nueng',tr:'1 numarali cadde',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {s:'Nada',th:'ราคาสองร้อยบาทค่ะ',ro:'raa-khaa song-roi baht kha',tr:'200 Baht.',bd:[{ro:'raa-khaa',tr:'fiyat',role:'Kelime'},{ro:'song-roi baht',tr:'200 Baht',role:'Kelime'},{ro:'kha',tr:'kibar eki',role:'Kibar'}]},
       {s:'Ali',th:'โอเคครับ',ro:'o-kee khrap',tr:'Tamam.',bd:[{ro:'o-kee khrap',tr:'Tamam',role:'Kelime'}]},
     ]},
  ],

  listening:[
    {diff:'easy',th:'สองครับ',q:'Kac?',opts:['1','2','3'],c:1},
    {diff:'easy',th:'ร้อยบาทครับ',q:'Kac Baht?',opts:['10 Baht','50 Baht','100 Baht'],c:2},
    {diff:'easy',th:'สิบเอ็ดครับ',q:'Hangi sayi?',opts:['10','11','12'],c:1},
    {diff:'medium',th:'ยี่สิบบาทครับ',q:'Kac Baht?',opts:['10','20','30'],c:1},
    {diff:'medium',th:'สามร้อยห้าสิบบาทครับ',q:'Kac Baht?',opts:['350','300','500'],c:0},
    {diff:'medium',th:'สองคนครับ',q:'Kac kisi?',opts:['1 kisi','2 kisi','3 kisi'],c:1},
    {diff:'hard',th:'ลดราคาได้ไหมครับ',q:'Ne soruluyor?',opts:['Fiyati ne kadar?','Indirim var mi?','Kac tane?'],c:1},
    {diff:'hard',th:'แปดสิบบาทค่ะ',q:'Kac Baht?',opts:['18','80','800'],c:1},
    {diff:'hard',th:'ยี่สิบเอ็ดครับ',q:'Hangi sayi?',opts:['20','21','22'],c:1},
    {diff:'hard',th:'ราคาเท่าไรครับ',q:'Ne soruluyor?',opts:['Adresiniz ne?','Fiyat ne kadar?','Kac kisi?'],c:1},
  ],

  quiz:[
    {q:'Thai de 20 nasil soylenur?',opts:['song-sip','yii-sip','yii-song','sip-song'],c:1},
    {q:'11 Thai de?',opts:['sip','sip-et','sip-song','et-nueng'],c:1},
    {q:'"Baht" ne?',opts:['Sayi','Para birimi','Siniflandirici','Kibar ek'],c:1},
    {q:'"thao-rai" ne demek?',opts:['Hangi gun','Ne kadar/Kac','Ne yapiyorsun','Nerede'],c:1},
    {q:'0 Thai de?',opts:['nueng','song','sii','suun'],c:3},
    {q:'"lot raa-khaa" ne demek?',opts:['Fiyat sor','Indirim yap-','Odeme yap-','Geri ver-'],c:1},
    {q:'Kisi sayisi siniflandirici?',opts:['tua','bai','khon','lem'],c:2},
    {q:'"roi" ne demek?',opts:['10','100','1000','10000'],c:1},
    {q:'1000 Thai de?',opts:['roi','phan','muen','saen'],c:1},
    {q:'"nii thao-rai khrap" ne demek?',opts:['Bu kimin?','Bu nedir?','Bu kac para?','Bunu ister misin?'],c:2},
  ],

  // ── SAYI FLASH + HESAPLAYICI VERİSİ ──
  numbers:[
    {n:0,  thai:'๐',    word:'ศูนย์',  roman:'sǔun',       tr:'sıfır'},
    {n:1,  thai:'๑',    word:'หนึ่ง',  roman:'nùeng',      tr:'bir'},
    {n:2,  thai:'๒',    word:'สอง',    roman:'sɔ̌ɔng',      tr:'iki'},
    {n:3,  thai:'๓',    word:'สาม',    roman:'sǎam',       tr:'üç'},
    {n:4,  thai:'๔',    word:'สี่',    roman:'sìi',        tr:'dört'},
    {n:5,  thai:'๕',    word:'ห้า',    roman:'hâa',        tr:'beş'},
    {n:6,  thai:'๖',    word:'หก',     roman:'hòk',        tr:'altı'},
    {n:7,  thai:'๗',    word:'เจ็ด',   roman:'cèt',        tr:'yedi'},
    {n:8,  thai:'๘',    word:'แปด',    roman:'pɛ̀ɛt',       tr:'sekiz'},
    {n:9,  thai:'๙',    word:'เก้า',   roman:'kâo',        tr:'dokuz'},
    {n:10, thai:'๑๐',   word:'สิบ',    roman:'sìp',        tr:'on'},
    {n:11, thai:'๑๑',   word:'สิบเอ็ด',roman:'sìp-èt',     tr:'on bir'},
    {n:20, thai:'๒๐',   word:'ยี่สิบ', roman:'yîi-sìp',    tr:'yirmi'},
    {n:21, thai:'๒๑',   word:'ยี่สิบเอ็ด',roman:'yîi-sìp-èt',tr:'yirmi bir'},
    {n:30, thai:'๓๐',   word:'สามสิบ', roman:'sǎam-sìp',   tr:'otuz'},
    {n:50, thai:'๕๐',   word:'ห้าสิบ', roman:'hâa-sìp',    tr:'elli'},
    {n:100,thai:'๑๐๐',  word:'หนึ่งร้อย',roman:'nùeng-rɔ́ɔi',tr:'yüz'},
    {n:1000,thai:'๑,๐๐๐',word:'หนึ่งพัน',roman:'nùeng-pan', tr:'bin'},
    {n:10000,thai:'๑๐,๐๐๐',word:'หนึ่งหมื่น',roman:'nùeng-mùen',tr:'on bin'},
    {n:100000,thai:'๑๐๐,๐๐๐',word:'หนึ่งแสน',roman:'nùeng-sǣn',tr:'yüz bin'},
    {n:1000000,thai:'๑,๐๐๐,๐๐๐',word:'หนึ่งล้าน',roman:'nùeng-láan',tr:'bir milyon'},
  ],

  compounds:[
    {n:145,    thai:'หนึ่งร้อยสี่สิบห้า',        roman:'nùeng-rɔ́ɔi sìi-sìp hâa',       tr:'yüz kırk beş',
     breakdown:[{val:'100',th:'หนึ่งร้อย',rm:'nùeng-rɔ́ɔi'},{val:'40',th:'สี่สิบ',rm:'sìi-sìp'},{val:'5',th:'ห้า',rm:'hâa'}]},
    {n:350,    thai:'สามร้อยห้าสิบ',             roman:'sǎam-rɔ́ɔi hâa-sìp',            tr:'üç yüz elli',
     breakdown:[{val:'300',th:'สามร้อย',rm:'sǎam-rɔ́ɔi'},{val:'50',th:'ห้าสิบ',rm:'hâa-sìp'}]},
    {n:1500,   thai:'หนึ่งพันห้าร้อย',           roman:'nùeng-pan hâa-rɔ́ɔi',           tr:'bin beş yüz',
     breakdown:[{val:'1.000',th:'หนึ่งพัน',rm:'nùeng-pan'},{val:'500',th:'ห้าร้อย',rm:'hâa-rɔ́ɔi'}]},
    {n:3550,   thai:'สามพันห้าร้อยห้าสิบ',       roman:'sǎam-pan hâa-rɔ́ɔi hâa-sìp',   tr:'üç bin beş yüz elli',
     breakdown:[{val:'3.000',th:'สามพัน',rm:'sǎam-pan'},{val:'500',th:'ห้าร้อย',rm:'hâa-rɔ́ɔi'},{val:'50',th:'ห้าสิบ',rm:'hâa-sìp'}]},
    {n:183500, thai:'หนึ่งแสนแปดหมื่นสามพันห้าร้อย',roman:'nùeng-sǣn pɛ̀ɛt-mùen sǎam-pan hâa-rɔ́ɔi',tr:'yüz seksen üç bin beş yüz',
     breakdown:[{val:'100.000',th:'หนึ่งแสน',rm:'nùeng-sǣn'},{val:'80.000',th:'แปดหมื่น',rm:'pɛ̀ɛt-mùen'},{val:'3.000',th:'สามพัน',rm:'sǎam-pan'},{val:'500',th:'ห้าร้อย',rm:'hâa-rɔ́ɔi'}]},
  ],
};

LESSONS[2] = L2;
