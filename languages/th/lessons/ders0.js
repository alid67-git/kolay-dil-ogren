// Ders 0 — Tayca Temel Dilbilgisi Rehberi
// Zaman çekimleri, olumsuzluk, soru yapısı, kibar ekler, günlük ifadeler
const L0 = {
  tones:[],

  words:[
    {id:'w1',th:'กำลัง',ro:'gam-lang',tr:'Şu an / -iyor',
     tip:'"Gam-lang" fiilden ÖNCE gelir. Türkçedeki "-iyor" eki gibi düşün.',
     ctx:'Şu an olan eylemlerde kullanılır.',
     examples:[
       {th:'ผมกำลังกินข้าวครับ',ro:'pom gam-lang kin khao khrap',tr:'Şu an yemek yiyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'gam-lang',tr:'şu an',role:'Aspect'},{ro:'kin khao',tr:'yemek ye-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'เขากำลังทำงานครับ',ro:'khao gam-lang tham-ngaan khrap',tr:'O şu an çalışıyor.',bd:[{ro:'khao',tr:'o',role:'S - Ozne'},{ro:'gam-lang',tr:'şu an',role:'Aspect'},{ro:'tham-ngaan',tr:'çalış-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'คุณกำลังทำอะไรครับ',ro:'khun gam-lang tham a-rai khrap',tr:'Şu an ne yapıyorsunuz?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'gam-lang',tr:'şu an',role:'Aspect'},{ro:'tham',tr:'yap-',role:'V - Yuklem'},{ro:'a-rai',tr:'ne',role:'Soru'}]},
     ]},
    {id:'w2',th:'แล้ว',ro:'laeo',tr:'Bitti / Geçti',
     tip:'"Laeo" fiilden SONRA gelir. "Yaptım / oldu" anlamı verir.',
     ctx:'Tamamlanan eylemler ve geçmiş zaman için.',
     examples:[
       {th:'ผมกินข้าวแล้วครับ',ro:'pom kin khao laeo khrap',tr:'Yemeğimi yedim.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'kin khao',tr:'yemek ye-',role:'V - Yuklem'},{ro:'laeo',tr:'bitti',role:'Aspect'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'เขาไปแล้วครับ',ro:'khao pai laeo khrap',tr:'O gitti.',bd:[{ro:'khao',tr:'o',role:'S - Ozne'},{ro:'pai',tr:'git-',role:'V - Yuklem'},{ro:'laeo',tr:'bitti',role:'Aspect'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ผมอยู่ที่นี่มาสามปีแล้วครับ',ro:'pom yuu thii-nii maa saam pii laeo khrap',tr:'Üç yıldır buradayım.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'yuu thii-nii',tr:'burada',role:'V - Yuklem'},{ro:'maa saam pii laeo',tr:'üç yıldır',role:'Aspect'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w3',th:'จะ',ro:'ja',tr:'Yapacak / Gelecek',
     tip:'"Ja" fiilden ÖNCE gelir. Türkçedeki "-ecek/-acak" eki gibi.',
     ctx:'Gelecekte yapılacak eylemler için.',
     examples:[
       {th:'ผมจะไปภูเก็ตครับ',ro:'pom ja pai phu-get khrap',tr:'Phuket\'e gideceğim.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'ja',tr:'gelecek',role:'Aspect'},{ro:'pai phu-get',tr:'Phuket\'e git-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'คุณจะกินอะไรครับ',ro:'khun ja kin a-rai khrap',tr:'Ne yiyeceksiniz?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'ja',tr:'gelecek',role:'Aspect'},{ro:'kin',tr:'ye-',role:'V - Yuklem'},{ro:'a-rai',tr:'ne',role:'Soru'}]},
       {th:'พรุ่งนี้ผมจะทำงานครับ',ro:'phrung-nii pom ja tham-ngaan khrap',tr:'Yarın çalışacağım.',bd:[{ro:'phrung-nii',tr:'yarın',role:'Zaman'},{ro:'pom ja',tr:'ben + gelecek',role:'S - Ozne'},{ro:'tham-ngaan',tr:'çalış-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w4',th:'ไม่',ro:'mai',tr:'Değil / Yok (olumsuz)',
     tip:'"Mai" yüksek tonda söylenir. Fiilin ÖNÜNE gelir. Dikkat: ไม่ (değil) ≠ ไหม (soru eki)!',
     ctx:'Her türlü olumsuzluk için.',
     examples:[
       {th:'ไม่ครับ',ro:'mai khrap',tr:'Hayır.',bd:[{ro:'mai',tr:'değil / hayır',role:'Olumsuz'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ผมไม่เข้าใจครับ',ro:'pom mai khao-jai khrap',tr:'Anlamıyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'mai',tr:'değil',role:'Olumsuz'},{ro:'khao-jai',tr:'anla-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ไม่เป็นไรครับ',ro:'mai pen rai khrap',tr:'Sorun değil.',bd:[{ro:'mai',tr:'yok',role:'Olumsuz'},{ro:'pen rai',tr:'sorun',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w5',th:'ไหม',ro:'mai',tr:'...mı/mi? (soru eki)',
     tip:'Cümlenin SONUNA gelir. Evet/hayır sorusu yapar. ไม่ (değil) ile karıştırma!',
     ctx:'Evet/hayır soruları için cümle sonuna eklenir.',
     examples:[
       {th:'สบายดีไหมครับ',ro:'sa-bai-dee mai khrap',tr:'İyi misiniz?',bd:[{ro:'sa-bai-dee',tr:'iyi',role:'Sifat'},{ro:'mai',tr:'mı?',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'อร่อยไหมครับ',ro:'a-roi mai khrap',tr:'Lezzetli mi?',bd:[{ro:'a-roi',tr:'lezzetli',role:'Sifat'},{ro:'mai',tr:'mı?',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'คุณเป็นคนไทยไหมครับ',ro:'khun pen kon thai mai khrap',tr:'Taylandlı mısınız?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'pen kon thai',tr:'Taylandlısınız',role:'V - Yuklem'},{ro:'mai',tr:'mı?',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w6',th:'อะไร',ro:'a-rai',tr:'Ne?',
     tip:'WH soru kelimesi. Cümlenin SONUNA gelir.',ctx:'',
     examples:[
       {th:'คุณชื่ออะไรครับ',ro:'khun chue a-rai khrap',tr:'Adınız ne?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'chue',tr:'adı',role:'V - Yuklem'},{ro:'a-rai',tr:'ne',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'นี่คืออะไรครับ',ro:'nii khue a-rai khrap',tr:'Bu nedir?',bd:[{ro:'nii',tr:'bu',role:'S - Ozne'},{ro:'khue',tr:'dir',role:'V - Yuklem'},{ro:'a-rai',tr:'ne',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'คุณทำอะไรอยู่ครับ',ro:'khun tham a-rai yuu khrap',tr:'Ne yapıyorsunuz?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'tham',tr:'yap-',role:'V - Yuklem'},{ro:'a-rai',tr:'ne',role:'Soru'},{ro:'yuu',tr:'şu an',role:'Aspect'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w7',th:'ที่ไหน',ro:'thii-nai',tr:'Nerede?',
     tip:'Yer sorularında kullanılır. Cümlenin SONUNA gelir.',ctx:'',
     examples:[
       {th:'ห้องน้ำอยู่ที่ไหนครับ',ro:'hong-naam yuu thii-nai khrap',tr:'Tuvalet nerede?',bd:[{ro:'hong-naam',tr:'tuvalet',role:'S - Ozne'},{ro:'yuu',tr:'bulun-',role:'V - Yuklem'},{ro:'thii-nai',tr:'nerede',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'คุณอยู่ที่ไหนครับ',ro:'khun yuu thii-nai khrap',tr:'Neredesiniz?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'yuu',tr:'bulun-',role:'V - Yuklem'},{ro:'thii-nai',tr:'nerede',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ร้านอาหารอยู่ที่ไหนครับ',ro:'raan-ahan yuu thii-nai khrap',tr:'Restoran nerede?',bd:[{ro:'raan-ahan',tr:'restoran',role:'S - Ozne'},{ro:'yuu',tr:'bulun-',role:'V - Yuklem'},{ro:'thii-nai',tr:'nerede',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w8',th:'ฝันดี',ro:'fan-dii',tr:'İyi geceler / Tatlı rüyalar',
     tip:'"Fan" = rüya, "dii" = iyi. "Na" eklenince daha sıcak olur: fan dii na khrap.',ctx:'',
     examples:[
       {th:'ฝันดีครับ',ro:'fan-dii khrap',tr:'İyi geceler.',bd:[{ro:'fan',tr:'rüya',role:'Kelime'},{ro:'dii',tr:'iyi',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ฝันดีนะครับ',ro:'fan-dii na khrap',tr:'İyi geceler, tatlı rüyalar.',bd:[{ro:'fan-dii',tr:'tatlı rüyalar',role:'Kelime'},{ro:'na',tr:'yumuşatma eki',role:'Vurgu'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ราตรีสวัสดิ์ครับ',ro:'raa-trii sa-wat khrap',tr:'İyi geceler (resmi).',bd:[{ro:'raa-trii sa-wat',tr:'iyi geceler (resmi)',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w9',th:'โชคดี',ro:'chok-dii',tr:'İyi şanslar',
     tip:'"Chok" = şans, "dii" = iyi. Her durumda kullanılabilir.',ctx:'',
     examples:[
       {th:'โชคดีครับ',ro:'chok-dii khrap',tr:'İyi şanslar.',bd:[{ro:'chok',tr:'şans',role:'Kelime'},{ro:'dii',tr:'iyi',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'โชคดีนะครับ',ro:'chok-dii na khrap',tr:'İyi şanslar (samimi).',bd:[{ro:'chok-dii',tr:'iyi şanslar',role:'Kelime'},{ro:'na',tr:'yumuşatma eki',role:'Vurgu'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ขอให้โชคดีครับ',ro:'kho hai chok-dii khrap',tr:'Bol şans dilerim.',bd:[{ro:'kho hai',tr:'dilerim',role:'V - Yuklem'},{ro:'chok-dii',tr:'iyi şans',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w10',th:'สู้ ๆ',ro:'suu-suu',tr:'Kolay gelsin / Devam et',
     tip:'Türkçedeki "kolay gelsin" veya "haydi, devam et!" karşılığı. Cesaretlendirme için.',ctx:'',
     examples:[
       {th:'สู้ ๆ นะครับ',ro:'suu-suu na khrap',tr:'Kolay gelsin!',bd:[{ro:'suu-suu',tr:'mücadele et',role:'V - Yuklem'},{ro:'na',tr:'yumuşatma eki',role:'Vurgu'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'สู้ ๆ ครับ',ro:'suu-suu khrap',tr:'Hadi, devam et!',bd:[{ro:'suu-suu',tr:'haydi devam',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'เดินทางปลอดภัยนะครับ',ro:'doen-thang plot-phai na khrap',tr:'İyi yolculuklar.',bd:[{ro:'doen-thang',tr:'yolculuk',role:'Kelime'},{ro:'plot-phai',tr:'güvenli',role:'Kelime'},{ro:'na khrap',tr:'kibar yumuşatma',role:'Kibar'}]},
     ]},
  ],

  grammar:[
    {
      title:'1. Fiil Çekimi Yok — Zaman Ayrı Sözcüklerle',
      formula:'[Özne] + [Zaman eki] + [Fiil] + [Zaman eki] + [Kibar eki]',
      explain:'Taycada fiiller HİÇ çekilmez. "Gidiyorum", "gidiyor", "gidiyorsunuz" hepsi aynı fiil "pai". Zaman ayrı sözcüklerle belirtilir. Bu Türkçeden çok farklı!',
      tips:[
        'gam-lang (กำลัง) + fiil = şu an yapıyor (fiilden ÖNCE)',
        'fiil + laeo (แล้ว) = bitti / yaptı (fiilden SONRA)',
        'ja (จะ) + fiil = yapacak (fiilden ÖNCE)',
        'koey (เคย) + fiil = daha önce yaptı / deneyim',
        'yang mai (ยังไม่) + fiil = henüz yapmadı',
      ],
      examples:[
        {th:'ผมไปครับ',ro:'pom pai khrap',tr:'Gidiyorum. / Gittim. / Giderim.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'pai',tr:'git-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมกำลังไปครับ',ro:'pom gam-lang pai khrap',tr:'Şu an gidiyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'gam-lang',tr:'şu an',role:'Aspect'},{ro:'pai',tr:'git-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมไปแล้วครับ',ro:'pom pai laeo khrap',tr:'Gittim.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'pai',tr:'git-',role:'V - Yuklem'},{ro:'laeo',tr:'bitti',role:'Aspect'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมจะไปครับ',ro:'pom ja pai khrap',tr:'Gideceğim.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'ja',tr:'gelecek',role:'Aspect'},{ro:'pai',tr:'git-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมเคยไปภูเก็ตครับ',ro:'pom koey pai phu-get khrap',tr:'Daha önce Phuket\'e gittim.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'koey',tr:'daha önce',role:'Aspect'},{ro:'pai phu-get',tr:'Phuket\'e git-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
      ]
    },
    {
      title:'2. Olumsuzluk: ไม่ (mai) — Fiilin Önüne Gelir',
      formula:'ไม่ (mai) + Fiil/Sıfat = Olumsuz',
      explain:'"Mai" yüksek tonda söylenir ve fiilin ÖNÜNE gelir. Dikkat: ไม่ (değil, yüksek ton) ile ไหม (soru eki, yükselen ton) farklı kelimeler! Aynı "mai" sesi ama farklı tonlar.',
      tips:[
        'mai pen rai = sorun değil (en çok kullanılan ifade)',
        'mai dai = yapamam / olamaz',
        'mai ao = istemiyorum',
        'mai khao-jai = anlamıyorum',
        'mai saap = bilmiyorum',
        'yang mai = henüz ... değil',
      ],
      examples:[
        {th:'ไม่ครับ',ro:'mai khrap',tr:'Hayır.',bd:[{ro:'mai',tr:'hayır / değil',role:'Olumsuz'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมไม่เข้าใจครับ',ro:'pom mai khao-jai khrap',tr:'Anlamıyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'mai',tr:'değil',role:'Olumsuz'},{ro:'khao-jai',tr:'anla-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมไม่ทราบครับ',ro:'pom mai saap khrap',tr:'Bilmiyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'mai',tr:'değil',role:'Olumsuz'},{ro:'saap',tr:'bil-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมยังไม่พร้อมครับ',ro:'pom yang mai phrom khrap',tr:'Henüz hazır değilim.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'yang mai',tr:'henüz değil',role:'Olumsuz'},{ro:'phrom',tr:'hazır',role:'Sifat'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
      ]
    },
    {
      title:'3. Soru Yapısı: ไหม (evet/hayır) + WH Soru Sözcükleri',
      formula:'[Cümle] + ไหม? | [Cümle] + [WH sözcük]?',
      explain:'İki türlü soru var: (1) evet/hayır soruları için cümle sonuna ไหม eklenir; (2) WH soruları (ne, nerede, kim...) için soru sözcüğü cümlenin SONUNA gelir. Türkçeden farklı — soru sözcüğü başa değil sona gider!',
      tips:[
        'a-rai (อะไร) = ne',
        'thii-nai (ที่ไหน) = nerede',
        'khrai (ใคร) = kim',
        'meua-rai (เมื่อไร) = ne zaman',
        'tham-mai (ทำไม) = neden',
        'yang-ngai (ยังไง) = nasıl',
        'thao-rai (เท่าไร) = ne kadar / kaç',
      ],
      examples:[
        {th:'สบายดีไหมครับ',ro:'sa-bai-dee mai khrap',tr:'İyi misiniz?',bd:[{ro:'sa-bai-dee',tr:'iyi',role:'Sifat'},{ro:'mai',tr:'mı?',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'คุณชื่ออะไรครับ',ro:'khun chue a-rai khrap',tr:'Adınız ne?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'chue',tr:'adı',role:'V - Yuklem'},{ro:'a-rai',tr:'ne',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ห้องน้ำอยู่ที่ไหนครับ',ro:'hong-naam yuu thii-nai khrap',tr:'Tuvalet nerede?',bd:[{ro:'hong-naam',tr:'tuvalet',role:'S - Ozne'},{ro:'yuu',tr:'bulun-',role:'V - Yuklem'},{ro:'thii-nai',tr:'nerede',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'นี่เท่าไรครับ',ro:'nii thao-rai khrap',tr:'Bu ne kadar?',bd:[{ro:'nii',tr:'bu',role:'S - Ozne'},{ro:'thao-rai',tr:'ne kadar',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ทำไมครับ',ro:'tham-mai khrap',tr:'Neden?',bd:[{ro:'tham-mai',tr:'neden',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
      ]
    },
    {
      title:'4. Kibar Ekler: ครับ (erkek) / ค่ะ–คะ (kadın)',
      formula:'[Herhangi bir cümle] + ครับ (erkek) veya ค่ะ / คะ (kadın)',
      explain:'Tayca\'da her cümlenin sonuna kibar ek gelir. Erkekler hep "khrap", kadınlar hep "kha" (düşen ton) veya "ka" (yükselen ton — soru cümlelerinde) kullanır. Bu ek hem saygı hem de konuşmacının cinsiyetini gösterir.',
      tips:[
        'khrap (ครับ): erkek kibar eki — her cümlede',
        'kha (ค่ะ): kadın kibar eki — kesin ifadeler',
        'ka (คะ): kadın soru eki — soru cümlelerinde',
        'Günlük konuşmada "krap" veya "kap" gibi duyulur',
        'Bu eki atlamak kaba sayılır — her zaman ekle!',
      ],
      examples:[
        {th:'ขอบคุณครับ',ro:'khob-khun khrap',tr:'Teşekkür ederim.',bd:[{ro:'khob-khun',tr:'teşekkür',role:'Kelime'},{ro:'khrap',tr:'erkek kibar',role:'Kibar'}]},
        {th:'ขอบคุณค่ะ',ro:'khob-khun kha',tr:'Teşekkür ederim. (kadın)',bd:[{ro:'khob-khun',tr:'teşekkür',role:'Kelime'},{ro:'kha',tr:'kadın kibar',role:'Kibar'}]},
        {th:'ใช่ครับ',ro:'chai khrap',tr:'Evet, doğru.',bd:[{ro:'chai',tr:'evet / doğru',role:'Onay'},{ro:'khrap',tr:'erkek kibar',role:'Kibar'}]},
        {th:'ได้ครับ',ro:'dai khrap',tr:'Olur. / Yapabilirim.',bd:[{ro:'dai',tr:'olur / yapabilir',role:'Modal'},{ro:'khrap',tr:'erkek kibar',role:'Kibar'}]},
      ]
    },
    {
      title:'5. ดี (dii) ve นะ (na) — İki Küçük Ama Güçlü Kelime',
      formula:'[Kelime] + ดี = iyi... | [Cümle] + นะ = samimi/yumuşak',
      explain:'"Dii" (iyi) birçok bileşik ifadede geçer: fan-dii (iyi geceler), chok-dii (iyi şanslar), sa-bai-dii (iyiyim). "Na" ise cümleyi yumuşatır, daha sıcak ve samimi yapar — Türkçedeki "ya" veya "ha" gibi.',
      tips:[
        'fan dii = iyi geceler (fan=rüya + dii=iyi)',
        'chok dii = iyi şanslar',
        'sa-bai dii = iyiyim / rahatım',
        'dee kwaa = daha iyi (karşılaştırma)',
        'na: cümle yumuşatıcı — fan dii NA khrap = tatlı rüyalar (sıcak)',
      ],
      examples:[
        {th:'สบายดีครับ',ro:'sa-bai-dii khrap',tr:'İyiyim.',bd:[{ro:'sa-bai',tr:'rahat',role:'Sifat'},{ro:'dii',tr:'iyi',role:'Sifat'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ฝันดีนะครับ',ro:'fan-dii na khrap',tr:'İyi geceler, tatlı rüyalar.',bd:[{ro:'fan-dii',tr:'tatlı rüyalar',role:'Kelime'},{ro:'na',tr:'yumuşatma',role:'Vurgu'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'โชคดีนะครับ',ro:'chok-dii na khrap',tr:'İyi şanslar (samimi).',bd:[{ro:'chok-dii',tr:'iyi şanslar',role:'Kelime'},{ro:'na',tr:'yumuşatma',role:'Vurgu'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ระวังด้วยนะครับ',ro:'ra-wang duay na khrap',tr:'Dikkatli ol.',bd:[{ro:'ra-wang duay',tr:'dikkatli ol',role:'V - Yuklem'},{ro:'na',tr:'yumuşatma',role:'Vurgu'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
      ]
    },
  ],

  speaking:[
    {id:'s1',prompt:'Şu an ne yaptığını söyle',th:'ผมกำลัง... ครับ',ro:'pom gam-lang ... khrap',tr:'Şu an ... yapıyorum.'},
    {id:'s2',prompt:'Yemeğini yediğini söyle',th:'ผมกินข้าวแล้วครับ',ro:'pom kin khao laeo khrap',tr:'Yemeğimi yedim.'},
    {id:'s3',prompt:'Yarın bir şey yapacağını söyle',th:'พรุ่งนี้ผมจะ... ครับ',ro:'phrung-nii pom ja ... khrap',tr:'Yarın ... yapacağım.'},
    {id:'s4',prompt:'"Anlamıyorum" de',th:'ไม่เข้าใจครับ',ro:'mai khao-jai khrap',tr:'Anlamıyorum.'},
    {id:'s5',prompt:'"İyi misiniz?" diye sor',th:'สบายดีไหมครับ',ro:'sa-bai-dee mai khrap',tr:'İyi misiniz?'},
    {id:'s6',prompt:'"Tuvalet nerede?" diye sor',th:'ห้องน้ำอยู่ที่ไหนครับ',ro:'hong-naam yuu thii-nai khrap',tr:'Tuvalet nerede?'},
    {id:'s7',prompt:'"İyi geceler" de',th:'ฝันดีนะครับ',ro:'fan-dii na khrap',tr:'İyi geceler, tatlı rüyalar.'},
    {id:'s8',prompt:'"İyi şanslar" de',th:'โชคดีนะครับ',ro:'chok-dii na khrap',tr:'İyi şanslar.'},
  ],

  dialogues:[
    {
      title:'Zaman Çekimi Pratiği',
      desc:'gam-lang / laeo / ja kullanımı',
      lines:[
        {s:'Ali', th:'วันนี้คุณกำลังทำอะไรครับ',ro:'wan-nii khun gam-lang tham a-rai khrap',tr:'Bugün ne yapıyorsunuz?',bd:[{ro:'wan-nii',tr:'bugün',role:'Zaman'},{ro:'khun gam-lang',tr:'siz + şu an',role:'S - Ozne'},{ro:'tham a-rai',tr:'ne yapıyorsunuz',role:'Soru'}]},
        {s:'Nong',th:'ผมกำลังอ่านหนังสือครับ',ro:'pom gam-lang an nang-sue khrap',tr:'Şu an kitap okuyorum.',bd:[{ro:'pom gam-lang',tr:'ben + şu an',role:'S - Ozne'},{ro:'an nang-sue',tr:'kitap oku-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {s:'Ali', th:'กินข้าวยังครับ',ro:'kin khao yang khrap',tr:'Yemeğinizi yediniz mi?',bd:[{ro:'kin khao',tr:'yemek ye-',role:'V - Yuklem'},{ro:'yang',tr:'henüz',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {s:'Nong',th:'กินแล้วครับ ขอบคุณครับ',ro:'kin laeo khrap khob-khun khrap',tr:'Yedim, teşekkürler.',bd:[{ro:'kin laeo',tr:'yedim',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {s:'Ali', th:'พรุ่งนี้คุณจะทำอะไรครับ',ro:'phrung-nii khun ja tham a-rai khrap',tr:'Yarın ne yapacaksınız?',bd:[{ro:'phrung-nii',tr:'yarın',role:'Zaman'},{ro:'khun ja',tr:'siz + gelecek',role:'S - Ozne'},{ro:'tham a-rai',tr:'ne yapacak',role:'Soru'}]},
        {s:'Nong',th:'ผมจะไปทะเลครับ',ro:'pom ja pai tha-lee khrap',tr:'Denize gideceğim.',bd:[{ro:'pom ja',tr:'ben + gelecek',role:'S - Ozne'},{ro:'pai tha-lee',tr:'denize git-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
      ]
    },
    {
      title:'Günün Sonunda Vedalaşma',
      desc:'fan-dii, chok-dii, suu-suu kullanımı',
      lines:[
        {s:'Ali', th:'วันนี้เหนื่อยไหมครับ',ro:'wan-nii neuay mai khrap',tr:'Bugün yoruldunuz mu?',bd:[{ro:'wan-nii',tr:'bugün',role:'Zaman'},{ro:'neuay',tr:'yorgun',role:'Sifat'},{ro:'mai',tr:'mı?',role:'Soru'}]},
        {s:'Nong',th:'เหนื่อยมากครับ แต่สนุกครับ',ro:'neuay maak khrap tae sa-nuk khrap',tr:'Çok yoruldum ama eğlenceliydi.',bd:[{ro:'neuay maak',tr:'çok yoruldum',role:'Sifat'},{ro:'tae sa-nuk',tr:'ama eğlenceliydi',role:'Kelime'}]},
        {s:'Ali', th:'พักผ่อนนะครับ',ro:'phak-phon na khrap',tr:'İyi dinlenmeler.',bd:[{ro:'phak-phon',tr:'din-',role:'V - Yuklem'},{ro:'na',tr:'yumuşatma',role:'Vurgu'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {s:'Nong',th:'ขอบคุณครับ ฝันดีนะครับ',ro:'khob-khun khrap fan-dii na khrap',tr:'Teşekkürler. İyi geceler.',bd:[{ro:'khob-khun',tr:'teşekkürler',role:'Kelime'},{ro:'fan-dii na',tr:'iyi geceler',role:'Kelime'}]},
        {s:'Ali', th:'ฝันดีครับ โชคดีนะครับ',ro:'fan-dii khrap chok-dii na khrap',tr:'İyi geceler. İyi şanslar.',bd:[{ro:'fan-dii',tr:'iyi geceler',role:'Kelime'},{ro:'chok-dii na',tr:'iyi şanslar',role:'Kelime'}]},
      ]
    },
  ],

  listening:[],
  quiz:[],

  notes:[
    {
      title:'Zaman Ekleri — Özet Tablosu',
      body:'Taycada fiil çekilmez. Zaman ayrı sözcüklerle belirtilir:\n\n' +
           'กำลัง (gam-lang) + fiil → Şu an yapıyor\n' +
           'fiil + แล้ว (laeo) → Yaptı / Bitti\n' +
           'จะ (ja) + fiil → Yapacak\n' +
           'เคย (koey) + fiil → Daha önce yaptı\n' +
           'ยังไม่ (yang-mai) + fiil → Henüz yapmadı'
    },
    {
      title:'Soru Sözcükleri — WH Tablosu',
      body:'Tüm WH soru sözcükleri cümlenin SONUNA gelir:\n\n' +
           'อะไร (a-rai) → Ne?\n' +
           'ที่ไหน (thii-nai) → Nerede?\n' +
           'ใคร (khrai) → Kim?\n' +
           'เมื่อไร (meua-rai) → Ne zaman?\n' +
           'ทำไม (tham-mai) → Neden?\n' +
           'ยังไง (yang-ngai) → Nasıl?\n' +
           'เท่าไร (thao-rai) → Ne kadar / Kaç?'
    },
    {
      title:'Günlük Selamlama İfadeleri',
      body:'Taylandlılar günün büyük bölümünde sadece สวัสดีครับ (sa-wat-dii khrap) der.\n\n' +
           'สวัสดีครับ (sa-wat-dii khrap) → Merhaba / Günaydın / İyi akşamlar\n' +
           'อรุณสวัสดิ์ครับ (a-run sa-wat khrap) → Günaydın (resmi)\n' +
           'สวัสดีตอนเย็นครับ (sa-wat-dii ton-yen khrap) → İyi akşamlar\n' +
           'ฝันดีนะครับ (fan-dii na khrap) → İyi geceler / Tatlı rüyalar\n' +
           'ลาก่อนครับ (la-gon khrap) → Hoşça kal\n' +
           'แล้วเจอกันครับ (laeo joe-kan khrap) → Görüşürüz\n' +
           'โชคดีครับ (chok-dii khrap) → İyi şanslar\n' +
           'สู้ ๆ นะครับ (suu-suu na khrap) → Kolay gelsin\n' +
           'เดินทางปลอดภัยนะครับ (doen-thang plot-phai na khrap) → İyi yolculuklar\n' +
           'พักผ่อนนะครับ (phak-phon na khrap) → İyi dinlenmeler\n' +
           'สบาย ๆ (sa-bai sa-bai) → Rahat ol / Acele etme'
    },
    {
      title:'ไม่ vs ไหม — Karıştırılmaması Gereken İkili',
      body:'Görünüşleri farklı, sesleri benzer — dikkat!\n\n' +
           'ไม่ (mai — yüksek ton) = Değil / Yok\n' +
           '→ Fiilin ÖNÜNE gelir\n' +
           '→ Örnek: ไม่เข้าใจ (anlamıyorum)\n\n' +
           'ไหม (mai — yükselen ton) = ...mı/mi? (soru eki)\n' +
           '→ Cümlenin SONUNA gelir\n' +
           '→ Örnek: สบายดีไหม (iyi misiniz?)'
    },
  ],
};
window.L0 = L0;
