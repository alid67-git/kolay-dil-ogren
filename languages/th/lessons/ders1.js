// Ders 1 verisi — tayca-v3
// =================== VERİ: DERS 1 (L1+L2 birleşik) ===================
const L1 = {
  words:[
    {id:'w1',th:'สวัสดีครับ',ro:'sa-wat-dee-khrap',tr:'Merhaba',
     tip:'Sondaki -p sesi agizda yutulur, disar cikmiyor.',
     ctx:'Erkek olarak sen hep bu formu kullan. Her durumda gecerli.',
     examples:[
      {th:'ผมชื่อทอม',ro:'pom-chue-Tom',tr:'benim adim Tom.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'chue',tr:'adi',role:'V - Yuklem'},{ro:'Tom',tr:'Tom',role:'O - Nesne'}]},
      {th:'คุณชื่ออะไร',ro:'khun-chue-a-rai',tr:'adin ne?',bd:[{ro:'khun',tr:'sen',role:'S - Ozne'},{ro:'chue',tr:'adi',role:'V - Yuklem'},{ro:'a-rai',tr:'ne',role:'Soru'}]},
      {th:'ยินดีที่ได้รู้จัก',ro:'yin-dee-tii-dai-ruu-jak',tr:'tanistigima memnun.',bd:[{ro:'yin-dee',tr:'hoslanmak',role:'V - Yuklem'},{ro:'tii',tr:'sebebi gosteren',role:'Edat'},{ro:'dai',tr:'basarili/tamamlanan',role:'Aspect'},{ro:'ruu-jak',tr:'tanismak',role:'O - Nesne'}]},
     ]},
    {id:'w3',th:'ขอบคุณ',ro:'khob-khun',tr:'Teşekkür ederim',
     tip:'KHOBp kisaltilir; KHUN uzun ve yumusak.',
     ctx:'Tek basina kisa. Hep krap/kha ekle. Guclendir: khob-khun-MAAK.',
     examples:[
      {th:'ขอบคุณครับ',ro:'khob-khun-khrap',tr:'Tesekkur ederim.',bd:[{ro:'khob-khun',tr:'tesekkur et',role:'V - Yuklem'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
      {th:'ขอบคุณมากครับ',ro:'khob-khun-maak-khrap',tr:'Cok tesekkur ederim.',bd:[{ro:'khob-khun',tr:'tesekkur et',role:'V - Yuklem'},{ro:'maak',tr:'cok',role:'Kelime'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
      {th:'ขอบคุณที่ช่วยครับ',ro:'khob-khun-tii-chuay-khrap',tr:'Yardimin icin tesekkurler.',bd:[{ro:'khob-khun',tr:'tesekkur et',role:'V - Yuklem'},{ro:'tii',tr:'sebebi gosteren edat',role:'Edat'},{ro:'chuay',tr:'yardim et',role:'Fiil'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
     ]},
    {id:'w4',th:'ยินดีที่ได้รู้จัก',ro:'yin-dee-tii-dai-ruu-jak',tr:'Tanıştığıma memnun',
     tip:'YIN yuksek ton; DEE orta; ruu-jak hizli soylenecek.',
     ctx:'Selamlasmadan hemen sonra ilk tanismada soylenir.',
     examples:[
      {th:'ยินดีที่ได้รู้จักครับ',ro:'yin-dee-tii-dai-ruu-jak-khrap',tr:'Tanistigima memnun.',bd:[{ro:'yin-dee',tr:'hoslanmak',role:'V - Yuklem'},{ro:'tii',tr:'sebebi gosteren',role:'Edat'},{ro:'dai',tr:'basarili/tamamlanan',role:'Aspect'},{ro:'ruu-jak',tr:'tanismak',role:'O - Nesne'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
      {th:'ยินดีที่ได้รู้จักเช่นกันครับ',ro:'yin-dee-tii-dai-ruu-jak-chen-kan-khrap',tr:'Ben de memnun oldum.',bd:[{ro:'yin-dee',tr:'hoslanmak',role:'V - Yuklem'},{ro:'tii',tr:'sebebi gosteren',role:'Edat'},{ro:'dai',tr:'basarili/tamamlanan',role:'Aspect'},{ro:'ruu-jak',tr:'tanismak',role:'O - Nesne'},{ro:'chen-kan',tr:'ayni sekilde',role:'Vurgu'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
      {th:'ผมชื่อทอม ยินดีที่ได้รู้จักครับ',ro:'pom-chue-Tom yin-dee-tii-dai-ruu-jak-khrap',tr:'Adim Tom, memnun oldum.',bd:[{ro:'pom chue Tom',tr:'adim Tom',role:'S - Ozne'},{ro:'yin-dee-tii-dai-ruu-jak',tr:'tanistigima memnun',role:'V - Yuklem'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
     ]},
    {id:'w5',th:'ไม่เป็นไร',ro:'mai-pen-rai',tr:'Sorun değil',
     tip:'MAI yuksek ton; PEN orta; RAI yuksek. Uc farkli ton birada!',
     ctx:'Ozur dilenince veya sikinti olunca. No worries gibi rahatca kullanilir.',
     examples:[
      {th:'ไม่เป็นไรครับ',ro:'mai-pen-rai-khrap',tr:'Sorun degil.',bd:[{ro:'mai',tr:'yok/degil',role:'Olumsuz'},{ro:'pen-rai',tr:'bir sey',role:'O - Nesne'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
      {th:'ไม่เป็นไร ไม่ต้องเป็นห่วงครับ',ro:'mai-pen-rai mai-tong-pen-huang-khrap',tr:'Sorun degil, endiselenme.',bd:[{ro:'mai-pen-rai',tr:'sorun degil',role:'Kelime'},{ro:'mai-tong-pen-huang',tr:'endiselenme',role:'Kelime'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
      {th:'โอเคครับ ไม่เป็นไร',ro:'o-kee-khrap mai-pen-rai',tr:'Tamam, bir sey degil.',bd:[{ro:'o-kee',tr:'tamam',role:'Onay'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'},{ro:'mai-pen-rai',tr:'sorun degil',role:'Kelime'}]},
     ]},
    // --- L2 kelimeleri ---
    {id:'w10',th:'ชื่อ',ro:'chue',tr:'Ad / İsim',
     tip:'"Pom chue..." = "Benim adim..."',
     ctx:'Tanitirken ilk ogrenecegin kalip.',
     examples:[
       {th:'ผมชื่อทอมครับ',ro:'pom chue Tom khrap',tr:'Benim adim Tom.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'chue',tr:'adi',role:'V - Yuklem'},{ro:'Tom',tr:'Tom',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'คุณชื่ออะไรครับ',ro:'khun chue a-rai khrap',tr:'Adiniz ne?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'chue',tr:'adiniz',role:'V - Yuklem'},{ro:'a-rai',tr:'ne',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'เขาชื่อลูซี่ค่ะ',ro:'khao chue Lucy kha',tr:'Onun adi Lucy.',bd:[{ro:'khao',tr:'o',role:'S - Ozne'},{ro:'chue',tr:'adi',role:'V - Yuklem'},{ro:'Lucy',tr:'Lucy',role:'O - Nesne'},{ro:'kha',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w11',th:'มาจาก',ro:'maa jaak',tr:'Gelmek / -den gelmek',
     tip:'"Maa" = gelmek, "jaak" = den. Beraber kullanilir.',
     ctx:'Nereli oldugunu sorarken veya soylerken kullanilir.',
     examples:[
       {th:'ผมมาจากตุรกีครับ',ro:'pom maa jaak Tuerkiye khrap',tr:'Turkiyeden geliyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'maa jaak',tr:'geliyorum',role:'V - Yuklem'},{ro:'Tuerkiye',tr:'Turkiye',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'คุณมาจากไหนครับ',ro:'khun maa jaak nai khrap',tr:'Nereden geliyorsunuz?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'maa jaak',tr:'geliyorsunuz',role:'V - Yuklem'},{ro:'nai',tr:'nereden',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'เขามาจากเชียงใหม่ค่ะ',ro:'khao maa jaak Chiang Mai kha',tr:'O Chiang Mai den geliyor.',bd:[{ro:'khao',tr:'o',role:'S - Ozne'},{ro:'maa jaak',tr:'geliyor',role:'V - Yuklem'},{ro:'Chiang Mai',tr:'Chiang Mai',role:'O - Nesne'},{ro:'kha',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w12',th:'ทำงาน',ro:'tham ngaan',tr:'Çalışmak / İş yapmak',
     tip:'"Tham" = yapmak, "ngaan" = is. Meslek sorarken.',
     ctx:'Phuket te en sik sorulan sorulardan biri.',
     examples:[
       {th:'คุณทำงานอะไรครับ',ro:'khun tham ngaan a-rai khrap',tr:'Ne is yapiyorsunuz?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'tham ngaan',tr:'is yapiyorsunuz',role:'V - Yuklem'},{ro:'a-rai',tr:'ne',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ผมทำงานที่โรงแรมครับ',ro:'pom tham ngaan thii hotel khrap',tr:'Otelde calisiyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'tham ngaan',tr:'calisiyorum',role:'V - Yuklem'},{ro:'thii hotel',tr:'otelde',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ผมไม่ทำงานวันนี้ครับ',ro:'pom mai tham ngaan wan nii khrap',tr:'Bugün calismiyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'mai tham ngaan',tr:'calismiyorum',role:'V - Yuklem'},{ro:'wan nii',tr:'bugün',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w13',th:'อยู่',ro:'yuu',tr:'Olmak / Yaşamak (yer)',
     tip:'Yer belirtirken kullanilir. "Ben buradayim" = "pom yuu thii nii"',
     ctx:'Adres ve konum sorarken cok kullanilir.',
     examples:[
       {th:'ผมอยู่ภูเก็ตครับ',ro:'pom yuu Phuket khrap',tr:'Phuket te yasiyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'yuu',tr:'yasiyorum',role:'V - Yuklem'},{ro:'Phuket',tr:'Phuket',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'คุณอยู่ที่ไหนครับ',ro:'khun yuu thii nai khrap',tr:'Nerede yasiyorsunuz?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'yuu',tr:'yasiyorsunuz',role:'V - Yuklem'},{ro:'thii nai',tr:'nerede',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ผมอยู่ที่นี่มาสามปีแล้วครับ',ro:'pom yuu thii nii maa saam pii laeo khrap',tr:'Uc yildir buradayim.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'yuu',tr:'yasiyorum',role:'V - Yuklem'},{ro:'thii nii',tr:'burada',role:'O - Nesne'},{ro:'maa saam pii laeo',tr:'uc yildir',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w14',th:'อายุ',ro:'ayu',tr:'Yaş',
     tip:'"Pom ayu [sayi] pii" = "Ben [sayi] yasindayim"',
     ctx:'"Pii" = yil. Yas sorarken "thao-rai" = ne kadar.',
     examples:[
       {th:'คุณอายุเท่าไรครับ',ro:'khun ayu thao-rai khrap',tr:'Kac yasindasiniz?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'ayu',tr:'yasindasiniz',role:'V - Yuklem'},{ro:'thao-rai',tr:'kac',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ผมอายุ 35 ปีครับ',ro:'pom ayu 35 pii khrap',tr:'35 yasindayim.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'ayu',tr:'yasinda',role:'V - Yuklem'},{ro:'35 pii',tr:'35 yas',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ผมอายุสามสิบห้าปีครับ',ro:'pom ayu saam-sip-haa pii khrap',tr:'35 yasindayim (Tay yazimiyla).',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'ayu',tr:'yasinda',role:'V - Yuklem'},{ro:'saam-sip-haa pii',tr:'35 yas',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
  ],

  tones:[
    {name:'กา — Orta Ton',symbol:'(isaret yok)',color:'#6b7280',
     desc:'Duz ve dogal ses. Ne yuksek ne alcak. Hic isaretlenmemis harfler bu tondadir.',
     words:[{th:'กา',ro:'gaa',tr:'Karga'},{th:'มา',ro:'maa',tr:'Gel'},{th:'ปลา',ro:'plaa',tr:'Balik'},{th:'ดี',ro:'dee',tr:'Iyi'},{th:'นา',ro:'naa',tr:'Tarla'}]},
    {name:'ข่า — Alcak Ton',symbol:'◌่',color:'#3b82f6',
     desc:'Normalden daha alcak ve duz. Sanki biraz uzgun veya sakin soylenir.',
     words:[{th:'ข่า',ro:'khaa',tr:'Galangal'},{th:'ป่า',ro:'paa',tr:'Orman'},{th:'ข่าว',ro:'khaaw',tr:'Haber'},{th:'ยาก',ro:'yaak',tr:'Zor'},{th:'ล่าง',ro:'laang',tr:'Asagi'}]},
    {name:'น้ำ — Dusen Ton',symbol:'◌้',color:'#ef4444',
     desc:'Yuksekten baslar, asagiya duser. Kesin ve karali bir soylenis.',
     words:[{th:'น้ำ',ro:'naam',tr:'Su'},{th:'ข้าว',ro:'khaaw',tr:'Pirinc'},{th:'ค่ะ',ro:'kha',tr:'Kibar eki (kadin)'},{th:'น้อย',ro:'noi',tr:'Az'},{th:'ฟ้า',ro:'faa',tr:'Gok'}]},
    {name:'ขา — Yuksek Ton',symbol:'◌ (bazi harflerle)',color:'#f59e0b',
     desc:'Normalden daha yuksek ve biraz kisa. Dikkat cekici, baskili soylenis.',
     words:[{th:'ขา',ro:'khaa',tr:'Bacak'},{th:'ไม่',ro:'mai',tr:'Yok / Degil'},{th:'ใหม่',ro:'mai',tr:'Yeni'},{th:'หมา',ro:'maa',tr:'Kopek'},{th:'นา',ro:'naa',tr:'Yuz (on)'}]},
    {name:'ม้า — Yukselen Ton',symbol:'◌้',color:'#10b981',
     desc:'Alcaktan baslar, yukari cikar. Turkce soru tonuna benzer soylenis.',
     words:[{th:'ม้า',ro:'maa',tr:'At'},{th:'หน้า',ro:'naa',tr:'Yuz / Ileri'},{th:'ป๊า',ro:'paa',tr:'Baba (argo)'},{th:'ฝา',ro:'faa',tr:'Kapak'},{th:'ข้า',ro:'khaa',tr:'Kole (eski)'}]},
  ],

  grammar:[
    {
      title:'1. Kendini Tanıtma: pom chue... pen kon...',
      formula:'POM + CHUE + [AD] + KHRAP | POM + PEN + [MİLLİYET/MESLEK]',
      explain:'Erkek tanitma kalibinin temeli. "Pom" ozne, "chue" fiil (adim olmak). "Pen" = olmak — milliyet, meslek veya kimlik belirtmek icin kullanilir.',
      tips:['Hep pom ile basla — bu seni kadin sesten ayirir','Kadin versiyonu: chan chue [ad] kha','pen kon... = ...milletindenim','Olumsuz: mai pen = degilim'],
      examples:[
        {th:'ผมชื่อทอมครับ',ro:'pom chue Tom khrap',tr:'Benim adim Tom.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'chue',tr:'adi',role:'V - Yuklem'},{ro:'Tom',tr:'Tom',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมเป็นคนตุรกีครับ',ro:'pom pen kon Tuerk khrap',tr:'Ben Turk um.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'pen kon',tr:'um',role:'V - Yuklem'},{ro:'Tuerk',tr:'Turk',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมมาจากอิสตันบูลครับ',ro:'pom maa jaak Istanbul khrap',tr:'Istanbul dan geliyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'maa jaak',tr:'geliyorum',role:'V - Yuklem'},{ro:'Istanbul',tr:'Istanbul',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมอยู่ภูเก็ตมาสี่ปีแล้วครับ',ro:'pom yuu Phuket maa sii pii laeo khrap',tr:'Dort yildir Phuket teyim.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'yuu Phuket',tr:'Phuket teyim',role:'V - Yuklem'},{ro:'maa sii pii laeo',tr:'dort yildir',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมอายุ 35 ปีครับ',ro:'pom ayu saam-sip-haa pii khrap',tr:'35 yasindayim.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'ayu',tr:'yasinda',role:'V - Yuklem'},{ro:'saam-sip-haa pii',tr:'35 yas',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
      ]
    },
  ],

  speaking:[
    {task:'Selamlas', th:'สวัสดีครับ', ro:'sa-wat-dee-khrap', tr:'Merhaba.',bd:[{ro:'sa-wat-dee',tr:'selam',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
    {task:'Kendini tanitir (adi)', th:'ผมชื่อทอมครับ', ro:'pom chue Tom khrap', tr:'Benim adim Tom.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'chue',tr:'adi',role:'V - Yuklem'},{ro:'Tom',tr:'Tom',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
    {task:'Tanis', th:'ยินดีที่ได้รู้จักครับ', ro:'yin-dee-tii-dai-ruu-jak-khrap', tr:'Tanistigima memnun.',bd:[{ro:'yin-dee',tr:'mutlu',role:'V - Yuklem'},{ro:'tii-dai-ruu-jak',tr:'tanismak',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
    {task:'Nerelisin soyle', th:'ผมมาจากตุรกีครับ', ro:'pom maa jaak Tuerkiye khrap', tr:'Turkiyeden geliyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'maa jaak',tr:'geliyorum',role:'V - Yuklem'},{ro:'Tuerkiye',tr:'Turkiye',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
    {task:'Nerede yasadigini soyle', th:'ผมอยู่ภูเก็ตครับ', ro:'pom yuu Phuket khrap', tr:'Phuket te yasiyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'yuu',tr:'yasiyorum',role:'V - Yuklem'},{ro:'Phuket',tr:'Phuket',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
    {task:'Meslegini soyle', th:'ผมทำงานที่โรงแรมครับ', ro:'pom tham ngaan thii hotel khrap', tr:'Otelde calisiyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'tham ngaan',tr:'calisiyorum',role:'V - Yuklem'},{ro:'thii hotel',tr:'otelde',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
    {task:'Yasini soyle', th:'ผมอายุ 35 ปีครับ', ro:'pom ayu saam-sip-haa pii khrap', tr:'35 yasindayim.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'ayu',tr:'yasinda',role:'V - Yuklem'},{ro:'saam-sip-haa pii',tr:'35 yas',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
    {task:'Tesekkur et', th:'ขอบคุณครับ', ro:'khob-khun-khrap', tr:'Tesekkur ederim.',bd:[{ro:'khob-khun',tr:'tesekkur',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
    {task:'Cok tesekkur', th:'ขอบคุณมากครับ', ro:'khob-khun-maak-khrap', tr:'Cok tesekkur ederim.',bd:[{ro:'khob-khun',tr:'tesekkur',role:'V - Yuklem'},{ro:'maak',tr:'cok',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
    {task:'Yardim icin tesekkur', th:'ขอบคุณที่ช่วยครับ', ro:'khob-khun-tii-chuay-khrap', tr:'Yardiminiz icin tesekkurler.',bd:[{ro:'khob-khun',tr:'tesekkur',role:'V - Yuklem'},{ro:'tii-chuay',tr:'yardim icin',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
    {task:'Ozur dile', th:'ขอโทษครับ', ro:'khor-thot-khrap', tr:'Ozur dilerim.',bd:[{ro:'khor-thot',tr:'ozur dilerim',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
    {task:'Sorun degil de', th:'ไม่เป็นไรครับ', ro:'mai-pen-rai-khrap', tr:'Sorun degil.',bd:[{ro:'mai',tr:'degil',role:'Olumsuz'},{ro:'pen-rai',tr:'sorun',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
  ],

  dialogues:[
    {title:'💬 Tanisma Sobbeti',
     lines:[
       {s:'Tom', th:'สบายดีไหมครับ',ro:'sa-bai-dee-mai-khrap',tr:'Nasilsiniz?',bd:[{ro:'sa-bai-dee',tr:'iyi/rahat',role:'V - Yuklem'},{ro:'mai',tr:'soru eki',role:'Soru'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
       {s:'Lucy',th:'สบายดีค่ะ ขอบคุณค่ะ',ro:'sa-bai-dee-kha khob-khun-kha',tr:'Iyiyim, tesekkurler.',bd:[{ro:'sa-bai-dee',tr:'iyiyim',role:'V - Yuklem'},{ro:'kha',tr:'kadin kibar eki',role:'Kibar'},{ro:'khob-khun',tr:'tesekkurler',role:'Kelime'}]},
       {s:'Lucy',th:'คุณมาจากไหนคะ',ro:'khun-maa-jaak-nai-kha',tr:'Nerelisiniz?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'maa-jaak-nai',tr:'nerelisiniz',role:'V - Yuklem'},{ro:'kha',tr:'kadin kibar eki',role:'Kibar'}]},
       {s:'Tom', th:'ผมมาจากตุรกีครับ',ro:'pom-maa-jaak-tur-gii-khrap',tr:'Turkiyeden geliyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'maa-jaak',tr:'geliyorum',role:'V - Yuklem'},{ro:'tur-gii',tr:'Turkiye',role:'O - Nesne'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
       {s:'Lucy',th:'คุณอยู่ที่ไหนคะ',ro:'khun-yuu-thii-nai-kha',tr:'Nerede oturuyorsunuz?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'yuu-thii-nai',tr:'nerede oturuyorsunuz',role:'V - Yuklem'},{ro:'kha',tr:'kadin kibar eki',role:'Kibar'}]},
       {s:'Tom', th:'ผมอยู่ภูเก็ตครับ',ro:'pom-yuu-phu-get-khrap',tr:'Phuket te oturuyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'yuu',tr:'oturuyorum',role:'V - Yuklem'},{ro:'phu-get',tr:'Phuket',role:'O - Nesne'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
     ]},
    {title:'🏪 Markette Karsilasma',
     lines:[
       {s:'Tom', th:'สวัสดีครับ',ro:'sa-wat-dee-khrap',tr:'Merhaba.',bd:[{ro:'sa-wat-dee',tr:'merhaba',role:'Kelime'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
       {s:'Lucy',th:'สวัสดีค่ะ',ro:'sa-wat-dee-kha',tr:'Merhaba.',bd:[{ro:'sa-wat-dee',tr:'merhaba',role:'Kelime'},{ro:'kha',tr:'kadin kibar eki',role:'Kibar'}]},
       {s:'Tom', th:'ผมชื่อทอมครับ',ro:'pom-chue-Tom-khrap',tr:'Benim adim Tom.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'chue Tom',tr:'adim Tom',role:'V - Yuklem'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
       {s:'Lucy',th:'ฉันชื่อลูซี่ค่ะ',ro:'chan-chue-Lucy-kha',tr:'Benim adim Lucy.',bd:[{ro:'chan',tr:'ben (kadin)',role:'S - Ozne'},{ro:'chue Lucy',tr:'adim Lucy',role:'V - Yuklem'},{ro:'kha',tr:'kadin kibar eki',role:'Kibar'}]},
       {s:'Tom', th:'ยินดีที่ได้รู้จักครับ',ro:'yin-dee-tii-dai-ruu-jak-khrap',tr:'Tanistigima memnun.',bd:[{ro:'yin-dee',tr:'hoslanmak',role:'V - Yuklem'},{ro:'tii-dai-ruu-jak',tr:'tanistigima',role:'O - Nesne'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
       {s:'Lucy',th:'ยินดีที่ได้รู้จักเช่นกันค่ะ',ro:'yin-dee-tii-dai-ruu-jak-chen-kan-kha',tr:'Ben de memnun oldum.',bd:[{ro:'yin-dee',tr:'hoslanmak',role:'V - Yuklem'},{ro:'tii-dai-ruu-jak',tr:'tanistigima',role:'O - Nesne'},{ro:'chen-kan',tr:'ayni sekilde',role:'Vurgu'},{ro:'kha',tr:'kadin kibar eki',role:'Kibar'}]},
     ]},
    {title:'🙏 Tesekkur Alisverisi',
     lines:[
       {s:'Tom', th:'ขอบคุณมากครับ',ro:'khob-khun-maak-khrap',tr:'Cok tesekkur ederim.',bd:[{ro:'khob-khun',tr:'tesekkur et',role:'V - Yuklem'},{ro:'maak',tr:'cok',role:'Kelime'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
       {s:'Lucy',th:'ไม่เป็นไรค่ะ',ro:'mai-pen-rai-kha',tr:'Sorun degil.',bd:[{ro:'mai-pen-rai',tr:'sorun degil',role:'Kelime'},{ro:'kha',tr:'kadin kibar eki',role:'Kibar'}]},
       {s:'Tom', th:'คุณใจดีมากครับ',ro:'khun-jai-dee-maak-khrap',tr:'Cok iyi kalplisiniz.',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'jai-dee-maak',tr:'cok iyi kalpli',role:'V - Yuklem'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
       {s:'Lucy',th:'ขอบคุณค่ะ',ro:'khob-khun-kha',tr:'Tesekkurler.',bd:[{ro:'khob-khun',tr:'tesekkur et',role:'V - Yuklem'},{ro:'kha',tr:'kadin kibar eki',role:'Kibar'}]},
     ]},
    {title:'😅 Kazara Carpma',
     lines:[
       {s:'Tom', th:'ขอโทษครับ',ro:'khor-thot-khrap',tr:'Ozur dilerim.',bd:[{ro:'khor-thot',tr:'ozur dile',role:'V - Yuklem'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
       {s:'Lucy',th:'ไม่เป็นไรค่ะ',ro:'mai-pen-rai-kha',tr:'Sorun degil.',bd:[{ro:'mai-pen-rai',tr:'sorun degil',role:'Kelime'},{ro:'kha',tr:'kadin kibar eki',role:'Kibar'}]},
       {s:'Tom', th:'ขอบคุณครับ',ro:'khob-khun-khrap',tr:'Tesekkurler.',bd:[{ro:'khob-khun',tr:'tesekkur et',role:'V - Yuklem'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
       {s:'Lucy',th:'สบายดีไหมคะ',ro:'sa-bai-dee-mai-kha',tr:'Iyi misiniz?',bd:[{ro:'sa-bai-dee',tr:'iyi',role:'V - Yuklem'},{ro:'mai',tr:'soru eki',role:'Soru'},{ro:'kha',tr:'kadin kibar eki',role:'Kibar'}]},
       {s:'Tom', th:'สบายดีครับ ขอบคุณ',ro:'sa-bai-dee-khrap khob-khun',tr:'Iyiyim, tesekkurler.',bd:[{ro:'sa-bai-dee',tr:'iyiyim',role:'V - Yuklem'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'},{ro:'khob-khun',tr:'tesekkurler',role:'Kelime'}]},
     ]},
    {title:'🤝 Is Yerinde Tanisma',
     lines:[
       {s:'Tom', th:'สวัสดีครับ ผมชื่อทอมครับ',ro:'sa-wat-dee-khrap pom-chue-Tom-khrap',tr:'Merhaba, benim adim Tom.',bd:[{ro:'sa-wat-dee',tr:'merhaba',role:'Kelime'},{ro:'pom chue Tom',tr:'adim Tom',role:'S - Ozne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {s:'Lucy',th:'สวัสดีค่ะ ฉันชื่อลูซี่ค่ะ',ro:'sa-wat-dee-kha chan-chue-Lucy-kha',tr:'Merhaba, benim adim Lucy.',bd:[{ro:'sa-wat-dee',tr:'merhaba',role:'Kelime'},{ro:'chan chue Lucy',tr:'adim Lucy',role:'S - Ozne'},{ro:'kha',tr:'kibar eki',role:'Kibar'}]},
       {s:'Tom', th:'ยินดีที่ได้รู้จักเช่นกันครับ',ro:'yin-dee-tii-dai-ruu-jak-chen-kan-khrap',tr:'Ben de memnun oldum.',bd:[{ro:'yin-dee',tr:'hoslanmak',role:'V - Yuklem'},{ro:'tii-dai-ruu-jak',tr:'tanistigima',role:'O - Nesne'},{ro:'chen-kan',tr:'ayni sekilde',role:'Vurgu'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
       {s:'Lucy',th:'คุณมาจากไหนคะ',ro:'khun-maa-jaak-nai-kha',tr:'Nerelisiniz?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'maa-jaak-nai',tr:'nerelisiniz',role:'V - Yuklem'},{ro:'kha',tr:'kadin kibar eki',role:'Kibar'}]},
       {s:'Tom', th:'ผมมาจากตุรกีครับ อยู่ภูเก็ต',ro:'pom-maa-jaak-tur-gii-khrap yuu-phu-get',tr:'Turkiyeden geliyorum, Phuket te yasiyorum.',bd:[{ro:'pom maa jaak tur-gii',tr:'Turkiyeden geliyorum',role:'S - Ozne'},{ro:'yuu phu-get',tr:'Phuket te yasiyorum',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {title:'🌅 Sabah Selamlasmasi',
     lines:[
       {s:'Tom', th:'สบายดีไหมครับ',ro:'sa-bai-dee-mai-khrap',tr:'Nasilsiniz?',bd:[{ro:'sa-bai-dee',tr:'iyi',role:'V - Yuklem'},{ro:'mai',tr:'soru eki',role:'Soru'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
       {s:'Lucy',th:'สบายดีค่ะ ขอบคุณค่ะ',ro:'sa-bai-dee-kha khob-khun-kha',tr:'Iyiyim, tesekkurler.',bd:[{ro:'sa-bai-dee',tr:'iyiyim',role:'V - Yuklem'},{ro:'kha',tr:'kadin kibar eki',role:'Kibar'},{ro:'khob-khun',tr:'tesekkurler',role:'Kelime'}]},
       {s:'Tom', th:'วันนี้อากาศดีมากครับ',ro:'wan-nii-a-gat-dee-maak-khrap',tr:'Bugun hava cok guzel.',bd:[{ro:'wan-nii',tr:'bugun',role:'S - Ozne'},{ro:'a-gat',tr:'hava',role:'O - Nesne'},{ro:'dee-maak',tr:'cok guzel',role:'V - Yuklem'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
       {s:'Lucy',th:'ใช่ค่ะ สวยมากค่ะ',ro:'chai-kha suay-maak-kha',tr:'Evet, cok guzel.',bd:[{ro:'chai',tr:'evet',role:'Kelime'},{ro:'suay-maak',tr:'cok guzel',role:'V - Yuklem'},{ro:'kha',tr:'kadin kibar eki',role:'Kibar'}]},
       {s:'Tom', th:'แล้วเจอกันครับ',ro:'laeo-joe-kan-khrap',tr:'Gorusuruuz.',bd:[{ro:'laeo',tr:'sonra',role:'Zaman'},{ro:'joe-kan',tr:'gorusuruuz',role:'V - Yuklem'},{ro:'khrap',tr:'erkek kibar eki',role:'Kibar'}]},
       {s:'Lucy',th:'แล้วเจอกันค่ะ',ro:'laeo-joe-kan-kha',tr:'Gorusuruuz.',bd:[{ro:'laeo',tr:'sonra',role:'Zaman'},{ro:'joe-kan',tr:'gorusuruuz',role:'V - Yuklem'},{ro:'kha',tr:'kadin kibar eki',role:'Kibar'}]},
     ]},
  ],

  listening:[
    {diff:'easy',  th:'สวัสดีครับ',        q:'Ne duydu?', opts:['Selam','Tesekkur','Sorun degil'], c:0},
    {diff:'easy',  th:'ขอบคุณค่ะ',         q:'Ne duydu?', opts:['Tesekkur ederim','Tanistigima memnun','Sorun degil'], c:0},
    {diff:'easy',  th:'ยินดีที่ได้รู้จักครับ', q:'Ne duydu?', opts:['Tesekkur','Tanistigima memnun','Sorun degil'], c:1},
    {diff:'medium',th:'ขอโทษครับ',          q:'Ne duydu?', opts:['Tesekkur','Ozur dilerim','Sorun degil'], c:1},
    {diff:'medium',th:'สวัสดีครับ',         q:'Erkek mi kadin mi?', opts:['Erkek','Kadin','Belirtilmiyor'], c:0},
    {diff:'medium',th:'สวัสดีค่ะ',          q:'Erkek mi kadin mi?', opts:['Erkek','Kadin','Belirtilmiyor'], c:1},
    {diff:'medium',th:'ขอบคุณมากครับ',      q:'Ne duydu?', opts:['Tesekkur','Cok tesekkur','Sorun degil'], c:1},
    {diff:'hard',  th:'ไม่เป็นไรค่ะ',       q:'"Ozur dilerim"e cevap?', opts:['Sorun degil','Tesekkur','Evet'], c:0},
    {diff:'hard',  th:'ยินดีที่ได้รู้จักครับ',  q:'Selamlasmada sonraki adim?', opts:['Ozur dile','Hoscakal','Tanis cumlesi','Yemek ismarla'], c:2},
    {diff:'hard',  th:'ขอบคุณที่ช่วยครับ',   q:'Ne demek?', opts:['Tesekkur yok','Yardim icin tesekkurler','Ozur dilerim','Sorun degil'], c:1},
  ],

  quiz:[
    {q:'"pom yuu thii phu-ket khrap" ne demek?',opts:['Phuket nerede?','Phuket e gidiyorum','Ben Phuket te yasiyorum','Phuket i seviyorum'],c:2},
    {q:'"khun maa jaak nai" ne demek?',opts:['Adin ne?','Nerelisin?','Nereye gidiyorsun?','Ne yapiyorsun?'],c:1},
    {q:'สวัสดีครับ ne demek?',opts:['Tesekkurler','Merhaba','Hoscakal','Ozur dilerim'],c:1},
    {q:'ขอบคุณมากครับ ne demek?',opts:['Merhaba','Cok tesekkur ederim','Hoscakal','Sorun degil'],c:1},
    {q:'ไม่เป็นไร ne demek?',opts:['Tesekkurler','Anliyorum','Sorun degil','Ozur dilerim'],c:2},
    {q:'ยินดีที่ได้รู้จักครับ ne demek?',opts:['Nasilsin?','Merhaba','Tanistigima memnun','Ozur dilerim'],c:2},
    {q:'"pom chue a-rai" cumlesinde "chue" ne demek?',opts:['Yasinda','Adi','Nereli','Nerede'],c:1},
    {q:'Thai ton sistemi kac ton icerir?',opts:['3','4','5','6'],c:2},
  ],
};

L1.notes = [
  {
    icon:'⚠️',
    title:'Mai Kelimesinin 4 Farklı Anlamı',
    body:'Taycada ses tonu anlam belirler. Aynı harf kombinasyonu farklı tonlarla tamamen başka anlam taşıyabilir. "Mai" bunun en çarpıcı örneğidir.',
    items:[
      {th:'ไม่',ro:'mâi (inen ton)',tr:'Hayır / Olumsuzluk',example:'Mai pai = Gitmiyorum.'},
      {th:'ไหม',ro:'mǎi (yükselen ton)',tr:'Mı / Mi? (soru eki)',example:'Pai mai? = Gidiyor musun?'},
      {th:'ใหม่',ro:'mài (alçalan ton)',tr:'Yeni',example:'Mai = Yeni'},
      {th:'ไม้',ro:'mái (yüksek ton)',tr:'Ağaç / Tahta',example:''},
    ],
    tip:'Mai fiilden ÖNCE gelirse olumsuzluk; cümle SONUNDA gelirse soru. "Mai pai" = Gitmiyorum. | "Pai mai?" = Gidiyor musun?'
  },
  {
    icon:'💬',
    title:'Günlük Hayatta İşe Yarayacak Kalıplar',
    body:'Özellikle Phuket\'te restoranda, alışverişte ve ulaşımda sık kullanılan ifadeler:',
    table:{
      cols:['Tayca Okunuşu','Türkçe'],
      rows:[
        ['Hong nam yu nai?','Tuvalet nerede?'],
        ['Pai nai?','Nereye gidiyorsun?'],
        ['Tham arai?','Ne yapıyorsun?'],
        ['Chue arai?','Adın ne?'],
        ['Thao rai?','Ne kadar?'],
        ['Lot dai mai?','İndirim yapabilir misin?'],
        ['Mi mai?','Var mı?'],
        ['Dai mai?','Olur mu?'],
        ['Aroi mai?','Lezzetli mi?'],
        ['Thammai?','Neden?'],
        ['Yang ngai?','Nasıl?'],
      ]
    }
  },
];

LESSONS[1] = L1;

// words, speaking, dialogues: th degerleri yukarida dogrudan tanimli
// listening/tones/grammar icin HTML'deki thai-data JSON'undan al
(function(){
  const thaiDataEl = document.getElementById('thai-data');
  if(!thaiDataEl) return;
  const THAI = JSON.parse(thaiDataEl.textContent);
  (THAI.listening||[]).forEach((th,i)=>{ if(L1.listening[i]) L1.listening[i].th = th; });
  (THAI.tones||[]).forEach((t,ti)=>{ (t.words||[]).forEach((th,wi)=>{ if(L1.tones[ti]&&L1.tones[ti].words[wi]) L1.tones[ti].words[wi].th = th; }); });
  (THAI.grammar||[]).forEach((g,gi)=>{ if(L1.grammar[gi]) (g.examples||[]).forEach((th,ei)=>{ if(L1.grammar[gi].examples[ei]) L1.grammar[gi].examples[ei].th = th; }); });
})();
