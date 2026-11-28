// Ders 0 — Tayca Temel Dilbilgisi Rehberi (Basitten Zoraya)
// Cümle yapısı, kibar ekler, zamirler, olumsuzluk, soru, zaman, sahiplik, karşılaştırma
const L0 = {
  tones:[],

  words:[
    // --- 1. EN TEMEL: Kibar eki ---
    {id:'w1',th:'ครับ / ค่ะ',ro:'khrap / kha',tr:'Kibar eki (erkek / kadın)',
     tip:'Her cümlenin sonuna gelir. Erkekler hep "khrap", kadınlar hep "kha". Bu eki atlamak kaba sayılır!',
     ctx:'Tayland\'da kibar konuşmak çok önemlidir. Bu ek hem saygı hem de konuşmacının cinsiyetini gösterir.',
     examples:[
       {th:'ขอบคุณครับ',ro:'khob-khun khrap',tr:'Teşekkür ederim. (erkek)',bd:[{ro:'khob-khun',tr:'teşekkür',role:'V - Yuklem'},{ro:'khrap',tr:'erkek kibar',role:'Kibar'}]},
       {th:'ขอบคุณค่ะ',ro:'khob-khun kha',tr:'Teşekkür ederim. (kadın)',bd:[{ro:'khob-khun',tr:'teşekkür',role:'V - Yuklem'},{ro:'kha',tr:'kadın kibar',role:'Kibar'}]},
       {th:'ใช่ครับ',ro:'chai khrap',tr:'Evet, doğru.',bd:[{ro:'chai',tr:'evet',role:'Onay'},{ro:'khrap',tr:'erkek kibar',role:'Kibar'}]},
     ]},
    // --- 2. Zamirler ---
    {id:'w2',th:'ผม',ro:'pom',tr:'Ben (erkek)',
     tip:'Erkek zamiri. Kadın için "chan" kullanılır. Her cümleye pom ile başlamayı alışkanlık yap.',
     ctx:'Türkçede olduğu gibi özne — ama Taycada çoğu zaman bağlamdan anlaşılınca atlanabilir.',
     examples:[
       {th:'ผมชื่อทอมครับ',ro:'pom chue Tom khrap',tr:'Benim adım Tom.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'chue',tr:'adım',role:'V - Yuklem'},{ro:'Tom',tr:'Tom',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ผมมาจากตุรกีครับ',ro:'pom maa jaak Tuerkiye khrap',tr:'Türkiye\'den geliyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'maa jaak',tr:'geliyorum',role:'V - Yuklem'},{ro:'Tuerkiye',tr:'Türkiye',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ผมอยู่ภูเก็ตครับ',ro:'pom yuu Phuket khrap',tr:'Phuket\'te yaşıyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'yuu',tr:'yaşıyorum',role:'V - Yuklem'},{ro:'Phuket',tr:'Phuket',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w3',th:'คุณ',ro:'khun',tr:'Sen / Siz (kibar)',
     tip:'"Khun" hem "sen" hem "Bay/Bayan" anlamına gelir. Yabancılara hep "khun" kullan — her zaman kibar.',
     ctx:'',
     examples:[
       {th:'คุณชื่ออะไรครับ',ro:'khun chue a-rai khrap',tr:'Adınız ne?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'chue',tr:'adınız',role:'V - Yuklem'},{ro:'a-rai',tr:'ne',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'คุณมาจากไหนครับ',ro:'khun maa jaak nai khrap',tr:'Nereden geliyorsunuz?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'maa jaak',tr:'geliyorsunuz',role:'V - Yuklem'},{ro:'nai',tr:'nereden',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'คุณสบายดีไหมครับ',ro:'khun sa-bai-dee mai khrap',tr:'İyi misiniz?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'sa-bai-dee',tr:'iyi',role:'Sifat'},{ro:'mai',tr:'mı?',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w4',th:'เขา',ro:'khao',tr:'O (erkek veya kadın)',
     tip:'Taycada cinsiyet ayrımı yok — "khao" hem erkek hem kadın için kullanılır.',
     ctx:'Türkçedeki "o" zamiri gibi, ama tek kelime her iki cinsiyet için de geçerli.',
     examples:[
       {th:'เขาชื่ออะไรครับ',ro:'khao chue a-rai khrap',tr:'Onun adı ne?',bd:[{ro:'khao',tr:'o',role:'S - Ozne'},{ro:'chue',tr:'adı',role:'V - Yuklem'},{ro:'a-rai',tr:'ne',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'เขามาจากไหนครับ',ro:'khao maa jaak nai khrap',tr:'O nereden geliyor?',bd:[{ro:'khao',tr:'o',role:'S - Ozne'},{ro:'maa jaak',tr:'geliyor',role:'V - Yuklem'},{ro:'nai',tr:'nereden',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'เขาพูดภาษาไทยได้ครับ',ro:'khao phut pha-saa-thai dai khrap',tr:'O Tayca konuşabiliyor.',bd:[{ro:'khao',tr:'o',role:'S - Ozne'},{ro:'phut pha-saa-thai',tr:'Tayca konuşmak',role:'V - Yuklem'},{ro:'dai',tr:'yapabiliyor',role:'Aspect'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    // --- 3. Olumsuzluk ---
    {id:'w5',th:'ไม่',ro:'mai',tr:'Değil / Yok (olumsuz)',
     tip:'"Mai" yüksek tonda söylenir. Fiilin ÖNÜNE gelir. Dikkat: ไม่ (değil, yüksek ton) ≠ ไหม (soru eki, yükselen ton)!',
     ctx:'Her türlü olumsuzluk için. En çok kullanılan: mai pen rai (sorun değil), mai khao-jai (anlamıyorum).',
     examples:[
       {th:'ไม่ครับ',ro:'mai khrap',tr:'Hayır.',bd:[{ro:'mai',tr:'değil / hayır',role:'Olumsuz'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ผมไม่เข้าใจครับ',ro:'pom mai khao-jai khrap',tr:'Anlamıyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'mai',tr:'değil',role:'Olumsuz'},{ro:'khao-jai',tr:'anla-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ไม่เป็นไรครับ',ro:'mai pen rai khrap',tr:'Sorun değil.',bd:[{ro:'mai',tr:'yok',role:'Olumsuz'},{ro:'pen rai',tr:'sorun',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    // --- 4. Soru eki ---
    {id:'w6',th:'ไหม',ro:'mai',tr:'...mı/mi? (soru eki)',
     tip:'Cümlenin SONUNA gelir. Evet/hayır sorusu yapar. ไม่ (değil, yüksek ton) ile karıştırma!',
     ctx:'Evet/hayır soruları için cümle sonuna eklenir.',
     examples:[
       {th:'สบายดีไหมครับ',ro:'sa-bai-dee mai khrap',tr:'İyi misiniz?',bd:[{ro:'sa-bai-dee',tr:'iyi',role:'Sifat'},{ro:'mai',tr:'mı?',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'อร่อยไหมครับ',ro:'a-roi mai khrap',tr:'Lezzetli mi?',bd:[{ro:'a-roi',tr:'lezzetli',role:'Sifat'},{ro:'mai',tr:'mı?',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'คุณเป็นคนไทยไหมครับ',ro:'khun pen kon thai mai khrap',tr:'Taylandlı mısınız?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'pen kon thai',tr:'Taylandlısınız',role:'V - Yuklem'},{ro:'mai',tr:'mı?',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    // --- 5. WH Sorular ---
    {id:'w7',th:'อะไร',ro:'a-rai',tr:'Ne?',
     tip:'WH soru kelimesi. Cümlenin SONUNA gelir — Türkçenin aksine başa değil!',
     ctx:'',
     examples:[
       {th:'คุณชื่ออะไรครับ',ro:'khun chue a-rai khrap',tr:'Adınız ne?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'chue',tr:'adı',role:'V - Yuklem'},{ro:'a-rai',tr:'ne',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'นี่คืออะไรครับ',ro:'nii khue a-rai khrap',tr:'Bu nedir?',bd:[{ro:'nii',tr:'bu',role:'S - Ozne'},{ro:'khue',tr:'dir',role:'V - Yuklem'},{ro:'a-rai',tr:'ne',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'คุณทำอะไรอยู่ครับ',ro:'khun tham a-rai yuu khrap',tr:'Ne yapıyorsunuz?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'tham',tr:'yap-',role:'V - Yuklem'},{ro:'a-rai',tr:'ne',role:'Soru'},{ro:'yuu',tr:'şu an',role:'Aspect'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w8',th:'ที่ไหน',ro:'thii-nai',tr:'Nerede?',
     tip:'Yer sorularında kullanılır. Cümlenin SONUNA gelir.',
     ctx:'',
     examples:[
       {th:'ห้องน้ำอยู่ที่ไหนครับ',ro:'hong-naam yuu thii-nai khrap',tr:'Tuvalet nerede?',bd:[{ro:'hong-naam',tr:'tuvalet',role:'S - Ozne'},{ro:'yuu',tr:'bulun-',role:'V - Yuklem'},{ro:'thii-nai',tr:'nerede',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'คุณอยู่ที่ไหนครับ',ro:'khun yuu thii-nai khrap',tr:'Neredesiniz?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'yuu',tr:'bulun-',role:'V - Yuklem'},{ro:'thii-nai',tr:'nerede',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ร้านอาหารอยู่ที่ไหนครับ',ro:'raan-ahan yuu thii-nai khrap',tr:'Restoran nerede?',bd:[{ro:'raan-ahan',tr:'restoran',role:'S - Ozne'},{ro:'yuu',tr:'bulun-',role:'V - Yuklem'},{ro:'thii-nai',tr:'nerede',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    // --- 6. Zaman ekleri ---
    {id:'w9',th:'กำลัง',ro:'gam-lang',tr:'Şu an / -iyor',
     tip:'"Gam-lang" fiilden ÖNCE gelir. Türkçedeki "-iyor" eki gibi düşün.',
     ctx:'Şu an olan eylemlerde kullanılır.',
     examples:[
       {th:'ผมกำลังกินข้าวครับ',ro:'pom gam-lang kin khao khrap',tr:'Şu an yemek yiyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'gam-lang',tr:'şu an',role:'Aspect'},{ro:'kin khao',tr:'yemek ye-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'เขากำลังทำงานครับ',ro:'khao gam-lang tham-ngaan khrap',tr:'O şu an çalışıyor.',bd:[{ro:'khao',tr:'o',role:'S - Ozne'},{ro:'gam-lang',tr:'şu an',role:'Aspect'},{ro:'tham-ngaan',tr:'çalış-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'คุณกำลังทำอะไรครับ',ro:'khun gam-lang tham a-rai khrap',tr:'Şu an ne yapıyorsunuz?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'gam-lang',tr:'şu an',role:'Aspect'},{ro:'tham',tr:'yap-',role:'V - Yuklem'},{ro:'a-rai',tr:'ne',role:'Soru'}]},
     ]},
    {id:'w10',th:'แล้ว',ro:'laeo',tr:'Bitti / Geçti',
     tip:'"Laeo" fiilden SONRA gelir. "Yaptım / oldu" anlamı verir.',
     ctx:'Tamamlanan eylemler ve geçmiş zaman için.',
     examples:[
       {th:'ผมกินข้าวแล้วครับ',ro:'pom kin khao laeo khrap',tr:'Yemeğimi yedim.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'kin khao',tr:'yemek ye-',role:'V - Yuklem'},{ro:'laeo',tr:'bitti',role:'Aspect'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'เขาไปแล้วครับ',ro:'khao pai laeo khrap',tr:'O gitti.',bd:[{ro:'khao',tr:'o',role:'S - Ozne'},{ro:'pai',tr:'git-',role:'V - Yuklem'},{ro:'laeo',tr:'bitti',role:'Aspect'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ผมอยู่ที่นี่มาสามปีแล้วครับ',ro:'pom yuu thii-nii maa saam pii laeo khrap',tr:'Üç yıldır buradayım.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'yuu thii-nii',tr:'burada',role:'V - Yuklem'},{ro:'maa saam pii laeo',tr:'üç yıldır',role:'Aspect'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w11',th:'จะ',ro:'ja',tr:'Yapacak / Gelecek',
     tip:'"Ja" fiilden ÖNCE gelir. Türkçedeki "-ecek/-acak" eki gibi.',
     ctx:'Gelecekte yapılacak eylemler için.',
     examples:[
       {th:'ผมจะไปภูเก็ตครับ',ro:'pom ja pai phu-get khrap',tr:'Phuket\'e gideceğim.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'ja',tr:'gelecek',role:'Aspect'},{ro:'pai phu-get',tr:'Phuket\'e git-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'คุณจะกินอะไรครับ',ro:'khun ja kin a-rai khrap',tr:'Ne yiyeceksiniz?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'ja',tr:'gelecek',role:'Aspect'},{ro:'kin',tr:'ye-',role:'V - Yuklem'},{ro:'a-rai',tr:'ne',role:'Soru'}]},
       {th:'พรุ่งนี้ผมจะทำงานครับ',ro:'phrung-nii pom ja tham-ngaan khrap',tr:'Yarın çalışacağım.',bd:[{ro:'phrung-nii',tr:'yarın',role:'Zaman'},{ro:'pom ja',tr:'ben + gelecek',role:'S - Ozne'},{ro:'tham-ngaan',tr:'çalış-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    // --- 7. Sosyal ifadeler ---
    {id:'w12',th:'ฝันดี',ro:'fan-dii',tr:'İyi geceler / Tatlı rüyalar',
     tip:'"Fan" = rüya, "dii" = iyi. "Na" eklenince daha sıcak olur: fan dii na khrap.',
     ctx:'',
     examples:[
       {th:'ฝันดีครับ',ro:'fan-dii khrap',tr:'İyi geceler.',bd:[{ro:'fan',tr:'rüya',role:'Kelime'},{ro:'dii',tr:'iyi',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ฝันดีนะครับ',ro:'fan-dii na khrap',tr:'İyi geceler, tatlı rüyalar.',bd:[{ro:'fan-dii',tr:'tatlı rüyalar',role:'Kelime'},{ro:'na',tr:'yumuşatma eki',role:'Vurgu'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ราตรีสวัสดิ์ครับ',ro:'raa-trii sa-wat khrap',tr:'İyi geceler (resmi).',bd:[{ro:'raa-trii sa-wat',tr:'iyi geceler (resmi)',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w13',th:'โชคดี',ro:'chok-dii',tr:'İyi şanslar',
     tip:'"Chok" = şans, "dii" = iyi. Her durumda kullanılabilir.',
     ctx:'',
     examples:[
       {th:'โชคดีครับ',ro:'chok-dii khrap',tr:'İyi şanslar.',bd:[{ro:'chok',tr:'şans',role:'Kelime'},{ro:'dii',tr:'iyi',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'โชคดีนะครับ',ro:'chok-dii na khrap',tr:'İyi şanslar (samimi).',bd:[{ro:'chok-dii',tr:'iyi şanslar',role:'Kelime'},{ro:'na',tr:'yumuşatma eki',role:'Vurgu'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'ขอให้โชคดีครับ',ro:'kho hai chok-dii khrap',tr:'Bol şans dilerim.',bd:[{ro:'kho hai',tr:'dilerim',role:'V - Yuklem'},{ro:'chok-dii',tr:'iyi şans',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
     ]},
    {id:'w14',th:'สู้ ๆ',ro:'suu-suu',tr:'Kolay gelsin / Devam et',
     tip:'Türkçedeki "kolay gelsin" veya "haydi, devam et!" karşılığı. Cesaretlendirme için.',
     ctx:'',
     examples:[
       {th:'สู้ ๆ นะครับ',ro:'suu-suu na khrap',tr:'Kolay gelsin!',bd:[{ro:'suu-suu',tr:'mücadele et',role:'V - Yuklem'},{ro:'na',tr:'yumuşatma eki',role:'Vurgu'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'สู้ ๆ ครับ',ro:'suu-suu khrap',tr:'Hadi, devam et!',bd:[{ro:'suu-suu',tr:'haydi devam',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
       {th:'เดินทางปลอดภัยนะครับ',ro:'doen-thang plot-phai na khrap',tr:'İyi yolculuklar.',bd:[{ro:'doen-thang',tr:'yolculuk',role:'Kelime'},{ro:'plot-phai',tr:'güvenli',role:'Kelime'},{ro:'na khrap',tr:'kibar yumuşatma',role:'Kibar'}]},
     ]},
  ],

  grammar:[
    // =================== 1. EN TEMEL ===================
    {
      title:'1. Tayca Cümle Yapısı: Özne + Fiil + Nesne (SVO)',
      formula:'ÖZNE + FİİL + NESNE + KİBAR EKİ',
      explain:'Tayca, Türkçe gibi değil — İngilizce gibi Özne + Fiil + Nesne sıralamasını kullanır. En önemli 3 fark: (1) Fiiller ASLA çekilmez — "gidiyorum", "gidiyor", "gidiyorsunuz" hepsi aynı fiil "pai". (2) Soru sözcükleri cümlenin SONUNA gelir. (3) Her cümlenin sonuna kibar ek gelir.',
      tips:[
        'Fiil çekimi yok: "pai" = gidiyorum da, gidiyor da, gidiyorsunuz da',
        'Soru sözcüğü SONDA: "Adın ne?" → "khun chue A-RAI?" (a-rai sonda)',
        'Zaman ayrı sözcüklerle belirtilir: gam-lang (şu an), laeo (geçmiş), ja (gelecek)',
        'Kibar ek HER cümlenin sonuna gelir: ...khrap (erkek) veya ...kha (kadın)',
      ],
      examples:[
        {th:'ผมกินข้าวครับ',ro:'pom kin khao khrap',tr:'Yemek yiyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'kin',tr:'ye-',role:'V - Yuklem'},{ro:'khao',tr:'pirinç/yemek',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมชื่อทอมครับ',ro:'pom chue Tom khrap',tr:'Benim adım Tom.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'chue',tr:'adım',role:'V - Yuklem'},{ro:'Tom',tr:'Tom',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมมาจากตุรกีครับ',ro:'pom maa jaak tur-gii khrap',tr:'Türkiye\'den geliyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'maa',tr:'gel-',role:'V - Yuklem'},{ro:'jaak tur-gii',tr:'Türkiye\'den',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'คุณชื่ออะไรครับ',ro:'khun chue a-rai khrap',tr:'Adınız ne? (soru sözcüğü sonda!)',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'chue',tr:'adı',role:'V - Yuklem'},{ro:'a-rai',tr:'ne (SONDA)',role:'Soru'}]},
      ]
    },
    // =================== 2. KİBAR EKLER ===================
    {
      title:'2. Kibar Ekler: ครับ (erkek) / ค่ะ–คะ (kadın)',
      formula:'[Herhangi bir cümle] + ครับ (erkek) veya ค่ะ / คะ (kadın)',
      explain:'Her cümlenin sonuna kibar ek gelir. Erkekler hep "khrap", kadınlar hep "kha" (düşen ton — kesin ifadeler) veya "ka" (yükselen ton — soru cümlelerinde). Bu ek hem saygı hem de konuşmacının cinsiyetini gösterir. Günlük konuşmada "krap" veya "kap" gibi duyulur.',
      tips:[
        'khrap (ครับ): erkek kibar eki — HER cümlede kullan',
        'kha (ค่ะ): kadın kibar eki — kesin ifadeler için',
        'ka (คะ): kadın soru eki — soru cümlelerinde',
        'Bu eki atlamak kaba sayılır — Phuket\'te yabancılar bile kullanır',
        'Hızlı konuşmada "krap" veya "kap" gibi duyulabilir',
      ],
      examples:[
        {th:'ขอบคุณครับ',ro:'khob-khun khrap',tr:'Teşekkür ederim. (erkek)',bd:[{ro:'khob-khun',tr:'teşekkür',role:'V - Yuklem'},{ro:'khrap',tr:'erkek kibar',role:'Kibar'}]},
        {th:'ขอบคุณค่ะ',ro:'khob-khun kha',tr:'Teşekkür ederim. (kadın, kesin)',bd:[{ro:'khob-khun',tr:'teşekkür',role:'V - Yuklem'},{ro:'kha',tr:'kadın kibar',role:'Kibar'}]},
        {th:'สบายดีไหมคะ',ro:'sa-bai-dee mai kha',tr:'İyi misiniz? (kadın soru)',bd:[{ro:'sa-bai-dee',tr:'iyi',role:'Sifat'},{ro:'mai',tr:'mı?',role:'Soru'},{ro:'kha',tr:'kadın soru kibar',role:'Kibar'}]},
        {th:'ได้ครับ',ro:'dai khrap',tr:'Olur. / Yapabilirim.',bd:[{ro:'dai',tr:'olur / yapabilir',role:'Modal'},{ro:'khrap',tr:'erkek kibar',role:'Kibar'}]},
      ]
    },
    // =================== 3. KİŞİ ZAMİRLERİ ===================
    {
      title:'3. Kişi Zamirleri: Ben / Sen / O / Biz / Siz / Onlar',
      formula:'[Özne] + [Fiil] + [Nesne] + [Kibar Eki]',
      explain:'Tayca zamirlerinde cinsiyet ayrımı yoktur — "o" hem erkek hem kadın için aynı kelimedir. Konuşmacının cinsiyeti kibar ekten belli olur (erkek khrap, kadın kha). Özne bağlamdan anlaşılınca çoğu zaman atlanabilir.',
      tips:[
        'Erkek: pom (ผม) | Kadın: chan (ฉัน) — ben',
        'Khun (คุณ) = sen/siz — kibar, yabancılara ve büyüklere',
        'Khao (เขา) = o — hem erkek hem kadın, cinsiyet farkı yok!',
        'Rao (เรา) = biz — ayrıca samimi ortamda tek başına "ben" yerine',
        'Phuak-khao (พวกเขา) = onlar | Phuak-khun (พวกคุณ) = siz (çoğul)',
        'Özne bağlamdan anlaşılınca atlanır: "Pai" = (Ben) gidiyorum',
      ],
      examples:[
        {th:'ผมมาจากตุรกีครับ',ro:'pom maa jaak tur-gii khrap',tr:'Ben Türkiye\'den geliyorum.',bd:[{ro:'pom',tr:'ben (erkek)',role:'S - Ozne'},{ro:'maa jaak',tr:'geliyorum',role:'V - Yuklem'},{ro:'tur-gii',tr:'Türkiye',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ฉันทำงานที่นี่ค่ะ',ro:'chan tham-ngaan thii-nii kha',tr:'Ben burada çalışıyorum. (kadın)',bd:[{ro:'chan',tr:'ben (kadın)',role:'S - Ozne'},{ro:'tham-ngaan',tr:'çalışmak',role:'V - Yuklem'},{ro:'thii-nii',tr:'burada',role:'O - Nesne'},{ro:'kha',tr:'kibar eki',role:'Kibar'}]},
        {th:'เขาชื่ออะไรครับ',ro:'khao chue a-rai khrap',tr:'Onun adı ne?',bd:[{ro:'khao',tr:'o',role:'S - Ozne'},{ro:'chue',tr:'adı',role:'V - Yuklem'},{ro:'a-rai',tr:'ne',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'เราไปด้วยกันครับ',ro:'rao pai duay-kan khrap',tr:'Birlikte gidelim.',bd:[{ro:'rao',tr:'biz',role:'S - Ozne'},{ro:'pai',tr:'gitmek',role:'V - Yuklem'},{ro:'duay-kan',tr:'birlikte',role:'Vurgu'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'พวกเขาทำงานที่ภูเก็ตครับ',ro:'phuak-khao tham-ngaan thii phu-get khrap',tr:'Onlar Phuket\'te çalışıyor.',bd:[{ro:'phuak-khao',tr:'onlar',role:'S - Ozne'},{ro:'tham-ngaan',tr:'çalışmak',role:'V - Yuklem'},{ro:'thii phu-get',tr:'Phuket\'te',role:'O - Nesne'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
      ]
    },
    // =================== 4. OLUMSUZLUK ===================
    {
      title:'4. Olumsuzluk: ไม่ (mai) — Fiilin Önüne Gelir',
      formula:'ไม่ (mai) + Fiil/Sıfat = Olumsuz',
      explain:'"Mai" yüksek tonda söylenir ve fiilin ÖNÜNE gelir. Dikkat: ไม่ (değil, yüksek ton) ile ไหม (soru eki, yükselen ton) farklı kelimeler — aynı "mai" sesi ama farklı tonlar! Türkçedeki "değil" veya "yok" gibi.',
      tips:[
        'mai pen rai = sorun değil (en çok kullanılan ifade)',
        'mai dai = yapamam / olamaz',
        'mai ao = istemiyorum',
        'mai khao-jai = anlamıyorum (kafa girmedi = anlamadı)',
        'mai saap = bilmiyorum',
        'yang mai = henüz ... değil',
      ],
      examples:[
        {th:'ไม่ครับ',ro:'mai khrap',tr:'Hayır.',bd:[{ro:'mai',tr:'hayır / değil',role:'Olumsuz'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมไม่เข้าใจครับ',ro:'pom mai khao-jai khrap',tr:'Anlamıyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'mai',tr:'değil',role:'Olumsuz'},{ro:'khao-jai',tr:'anla-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ไม่เป็นไรครับ',ro:'mai pen rai khrap',tr:'Sorun değil.',bd:[{ro:'mai',tr:'yok',role:'Olumsuz'},{ro:'pen rai',tr:'sorun',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมยังไม่พร้อมครับ',ro:'pom yang mai phrom khrap',tr:'Henüz hazır değilim.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'yang mai',tr:'henüz değil',role:'Olumsuz'},{ro:'phrom',tr:'hazır',role:'Sifat'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ไม่ได้ครับ',ro:'mai dai khrap',tr:'Yapamam / Olamaz.',bd:[{ro:'mai',tr:'değil',role:'Olumsuz'},{ro:'dai',tr:'olur/yapabilir',role:'Modal'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ไม่เอาครับ',ro:'mai ao khrap',tr:'İstemiyorum.',bd:[{ro:'mai',tr:'değil',role:'Olumsuz'},{ro:'ao',tr:'al-/iste-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
      ]
    },
    // =================== 5. SORU YAPISI ===================
    {
      title:'5. Soru Yapısı: ไหม (evet/hayır) + WH Soru Sözcükleri',
      formula:'[Cümle] + ไหม? | [Cümle] + [WH sözcük]?',
      explain:'İki türlü soru var: (1) Evet/hayır soruları için cümle sonuna ไหม eklenir. (2) WH soruları (ne, nerede, kim...) için soru sözcüğü cümlenin SONUNA gelir. Türkçeden farklı — soru sözcüğü başa değil sona gider!',
      tips:[
        'a-rai (อะไร) = ne',
        'thii-nai (ที่ไหน) = nerede',
        'khrai (ใคร) = kim',
        'meua-rai (เมื่อไร) = ne zaman',
        'tham-mai (ทำไม) = neden',
        'yang-ngai (ยังไง) = nasıl',
        'thao-rai (เท่าไร) = ne kadar / kaç',
        'jaak-nai (จากไหน) = nereden',
      ],
      examples:[
        {th:'สบายดีไหมครับ',ro:'sa-bai-dee mai khrap',tr:'İyi misiniz?',bd:[{ro:'sa-bai-dee',tr:'iyi',role:'Sifat'},{ro:'mai',tr:'mı?',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'คุณชื่ออะไรครับ',ro:'khun chue a-rai khrap',tr:'Adınız ne?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'chue',tr:'adı',role:'V - Yuklem'},{ro:'a-rai',tr:'ne (SONDA)',role:'Soru'}]},
        {th:'ห้องน้ำอยู่ที่ไหนครับ',ro:'hong-naam yuu thii-nai khrap',tr:'Tuvalet nerede?',bd:[{ro:'hong-naam',tr:'tuvalet',role:'S - Ozne'},{ro:'yuu',tr:'bulun-',role:'V - Yuklem'},{ro:'thii-nai',tr:'nerede (SONDA)',role:'Soru'}]},
        {th:'นี่เท่าไรครับ',ro:'nii thao-rai khrap',tr:'Bu ne kadar?',bd:[{ro:'nii',tr:'bu',role:'S - Ozne'},{ro:'thao-rai',tr:'ne kadar',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ทำไมครับ',ro:'tham-mai khrap',tr:'Neden?',bd:[{ro:'tham-mai',tr:'neden',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
      ]
    },
    // =================== 6. SAHİPLİK ===================
    {
      title:'6. Sahiplik: ของ (khong) — "...nin" anlamında',
      formula:'İSİM + ของ (khong) + SAHİP',
      explain:'"Khong" = ait, ...nin. Türkçedeki iyelik eki gibi ama ayrı bir sözcük olarak kullanılır. Türkçede "benim araba" derken Taycada "araba + khong + ben" dersiniz.',
      tips:[
        'khong pom = benim (erkek)',
        'khong chan = benim (kadın)',
        'khong khun = senin',
        'khong khao = onun',
        'khong rao = bizim',
        'nii khong khun mai? = Bu senin mi?',
      ],
      examples:[
        {th:'นั่นของผมครับ',ro:'nan khong pom khrap',tr:'O benimdir.',bd:[{ro:'nan',tr:'o',role:'Kelime'},{ro:'khong',tr:'ait',role:'Edat'},{ro:'pom',tr:'ben',role:'Kelime'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'รถของคุณอยู่ที่ไหนครับ',ro:'rot khong khun yuu thii-nai khrap',tr:'Arabanız nerede?',bd:[{ro:'rot',tr:'araba',role:'S - Ozne'},{ro:'khong khun',tr:'senin',role:'Edat'},{ro:'yuu thii-nai',tr:'nerede',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'นี่ของคุณไหมครับ',ro:'nii khong khun mai khrap',tr:'Bu senin mi?',bd:[{ro:'nii',tr:'bu',role:'Kelime'},{ro:'khong khun',tr:'senin',role:'Edat'},{ro:'mai',tr:'mı?',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'บ้านของผมอยู่ภูเก็ตครับ',ro:'baan khong pom yuu phu-get khrap',tr:'Benim evim Phuket\'te.',bd:[{ro:'baan khong pom',tr:'benim evim',role:'S - Ozne'},{ro:'yuu phu-get',tr:'Phuket\'te',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
      ]
    },
    // =================== 7. ZAMAN İFADELERİ ===================
    {
      title:'7. Zaman: Fiil Çekimi Yok — Zaman Ayrı Sözcüklerle',
      formula:'[Özne] + [gam-lang] + [Fiil] | [Fiil] + [laeo] | [ja] + [Fiil]',
      explain:'Taycada fiiller HİÇ çekilmez. "Gidiyorum", "gidiyor", "gidiyorsunuz" hepsi aynı fiil "pai". Zaman ayrı sözcüklerle belirtilir. Bu Türkçeden çok farklı — "ben" veya "o" desen bile fiil değişmez!',
      tips:[
        'gam-lang (กำลัง) + fiil = şu an yapıyor (fiilden ÖNCE)',
        'fiil + laeo (แล้ว) = bitti / yaptı (fiilden SONRA)',
        'ja (จะ) + fiil = yapacak (fiilden ÖNCE)',
        'koey (เคย) + fiil = daha önce yaptı / deneyim',
        'yang mai (ยังไม่) + fiil = henüz yapmadı',
      ],
      examples:[
        {th:'ผมไปครับ',ro:'pom pai khrap',tr:'Gidiyorum. / Gittim. / Giderim. (zaman belli değil)',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'pai',tr:'git-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมกำลังไปครับ',ro:'pom gam-lang pai khrap',tr:'Şu an gidiyorum.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'gam-lang',tr:'şu an',role:'Aspect'},{ro:'pai',tr:'git-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมไปแล้วครับ',ro:'pom pai laeo khrap',tr:'Gittim.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'pai',tr:'git-',role:'V - Yuklem'},{ro:'laeo',tr:'bitti',role:'Aspect'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมจะไปครับ',ro:'pom ja pai khrap',tr:'Gideceğim.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'ja',tr:'gelecek',role:'Aspect'},{ro:'pai',tr:'git-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมเคยไปภูเก็ตครับ',ro:'pom koey pai phu-get khrap',tr:'Daha önce Phuket\'e gittim.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'koey',tr:'daha önce',role:'Aspect'},{ro:'pai phu-get',tr:'Phuket\'e git-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ผมยังไม่ไปครับ',ro:'pom yang mai pai khrap',tr:'Henüz gitmedim.',bd:[{ro:'pom',tr:'ben',role:'S - Ozne'},{ro:'yang mai',tr:'henüz değil',role:'Olumsuz'},{ro:'pai',tr:'git-',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
      ]
    },
    // =================== 8. KARŞILAŞTIRMA ===================
    {
      title:'8. Karşılaştırma: กว่า (kwaa = daha) ve ที่สุด (tii-sut = en)',
      formula:'SIFAT + กว่า = daha... | SIFAT + ที่สุด = en...',
      explain:'Karşılaştırmada sıfatın SONUNA kwaa (daha) veya tii-sut (en) eklenir. Türkçedeki "daha" ve "en" gibi — ama Taycada sıfattan sonra gelir! Türkçe: "daha iyi" → Tayca: "iyi daha" (dee kwaa).',
      tips:[
        'dee = iyi | dee kwaa = daha iyi | dee tii-sut = en iyi',
        'phaeng = pahalı | phaeng kwaa = daha pahalı',
        'yen = soğuk | yen kwaa = daha soğuk',
        'ron = sıcak | ron kwaa = daha sıcak | ron tii-sut = en sıcak',
        'suay = güzel | suay kwaa = daha güzel | suay tii-sut = en güzel',
      ],
      examples:[
        {th:'อาหารไทยดีกว่าครับ',ro:'ahan thai dee kwaa khrap',tr:'Thai yemeği daha iyi.',bd:[{ro:'ahan thai',tr:'Thai yemeği',role:'S - Ozne'},{ro:'dee kwaa',tr:'daha iyi',role:'Sifat'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'ภูเก็ตดีที่สุดครับ',ro:'phu-get dee tii-sut khrap',tr:'Phuket en güzel.',bd:[{ro:'phu-get',tr:'Phuket',role:'S - Ozne'},{ro:'dee tii-sut',tr:'en iyi',role:'Sifat'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'นี่แพงกว่าครับ',ro:'nii phaeng kwaa khrap',tr:'Bu daha pahalı.',bd:[{ro:'nii',tr:'bu',role:'S - Ozne'},{ro:'phaeng kwaa',tr:'daha pahalı',role:'Sifat'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {th:'วันนี้ร้อนกว่าเมื่อวานครับ',ro:'wan-nii ron kwaa meua-waan khrap',tr:'Bugün dünden daha sıcak.',bd:[{ro:'wan-nii',tr:'bugün',role:'Zaman'},{ro:'ron kwaa',tr:'daha sıcak',role:'Sifat'},{ro:'meua-waan',tr:'dün',role:'Zaman'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
      ]
    },
    // =================== 9. Dİİ ve NA ===================
    {
      title:'9. ดี (dii) ve นะ (na) — İki Küçük Ama Güçlü Kelime',
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
    {id:'s1',prompt:'"Merhaba" de (erkek kibar ile)',th:'สวัสดีครับ',ro:'sa-wat-dee khrap',tr:'Merhaba.'},
    {id:'s2',prompt:'Adını söyle',th:'ผมชื่อ... ครับ',ro:'pom chue ... khrap',tr:'Benim adım ...'},
    {id:'s3',prompt:'"Anlamıyorum" de',th:'ไม่เข้าใจครับ',ro:'mai khao-jai khrap',tr:'Anlamıyorum.'},
    {id:'s4',prompt:'"İyi misiniz?" diye sor',th:'สบายดีไหมครับ',ro:'sa-bai-dee mai khrap',tr:'İyi misiniz?'},
    {id:'s5',prompt:'Tuvaletin nerede olduğunu sor',th:'ห้องน้ำอยู่ที่ไหนครับ',ro:'hong-naam yuu thii-nai khrap',tr:'Tuvalet nerede?'},
    {id:'s6',prompt:'Şu an ne yaptığını söyle',th:'ผมกำลัง... ครับ',ro:'pom gam-lang ... khrap',tr:'Şu an ... yapıyorum.'},
    {id:'s7',prompt:'Yemeğini yediğini söyle',th:'ผมกินข้าวแล้วครับ',ro:'pom kin khao laeo khrap',tr:'Yemeğimi yedim.'},
    {id:'s8',prompt:'Yarın bir şey yapacağını söyle',th:'พรุ่งนี้ผมจะ... ครับ',ro:'phrung-nii pom ja ... khrap',tr:'Yarın ... yapacağım.'},
    {id:'s9',prompt:'"İyi geceler" de (sıcak ifadeyle)',th:'ฝันดีนะครับ',ro:'fan-dii na khrap',tr:'İyi geceler, tatlı rüyalar.'},
    {id:'s10',prompt:'"İyi şanslar" de',th:'โชคดีนะครับ',ro:'chok-dii na khrap',tr:'İyi şanslar.'},
  ],

  dialogues:[
    {
      title:'Temel Cümle Yapısı Pratiği',
      desc:'SVO sırası ve kibar ek kullanımı',
      lines:[
        {s:'Ali', th:'สวัสดีครับ คุณชื่ออะไรครับ',ro:'sa-wat-dee khrap khun chue a-rai khrap',tr:'Merhaba. Adınız ne?',bd:[{ro:'sa-wat-dee',tr:'merhaba',role:'Kelime'},{ro:'khun chue',tr:'sizin adınız',role:'S - Ozne'},{ro:'a-rai',tr:'ne (SONDA)',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {s:'Nong',th:'ผมชื่อนงครับ ยินดีที่ได้รู้จักครับ',ro:'pom chue Nong khrap yin-dee thii dai ruu-jak khrap',tr:'Adım Nong. Tanıştığıma memnunum.',bd:[{ro:'pom chue Nong',tr:'adım Nong',role:'S - Ozne'},{ro:'yin-dee thii dai ruu-jak',tr:'tanıştığıma memnun',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {s:'Ali', th:'คุณมาจากไหนครับ',ro:'khun maa jaak nai khrap',tr:'Nereden geliyorsunuz?',bd:[{ro:'khun',tr:'siz',role:'S - Ozne'},{ro:'maa jaak',tr:'geliyorsunuz',role:'V - Yuklem'},{ro:'nai',tr:'nereden (SONDA)',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {s:'Nong',th:'ผมมาจากเชียงใหม่ครับ คุณล่ะครับ',ro:'pom maa jaak Chiang-Mai khrap khun la khrap',tr:'Chiang Mai\'den. Ya siz?',bd:[{ro:'pom maa jaak Chiang-Mai',tr:'Chiang Mai\'den',role:'S - Ozne'},{ro:'khun la',tr:'ya siz',role:'Soru'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
        {s:'Ali', th:'ผมมาจากตุรกีครับ อยู่ภูเก็ต',ro:'pom maa jaak tur-gii khrap yuu phu-get',tr:'Türkiye\'den. Phuket\'te yaşıyorum.',bd:[{ro:'pom maa jaak tur-gii',tr:'Türkiye\'den',role:'S - Ozne'},{ro:'yuu phu-get',tr:'Phuket\'te yaşıyorum',role:'V - Yuklem'},{ro:'khrap',tr:'kibar eki',role:'Kibar'}]},
      ]
    },
    {
      title:'Zaman İfadeleri Pratiği',
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
      desc:'fan-dii, chok-dii, suu-suu, na kullanımı',
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
      icon:'⏱️',
      title:'Zaman Ekleri — Özet Tablosu',
      body:'Taycada fiil çekilmez. Zaman, fiilin yanına konan ayrı sözcüklerle belirtilir.',
      table:{
        cols:['Sözcük','Okunuş','Yeri','Anlamı'],
        rows:[
          ['กำลัง','gam-lang','fiilden ÖNCE','Şu an yapıyor'],
          ['แล้ว','laeo','fiilden SONRA','Yaptı / Bitti'],
          ['จะ','ja','fiilden ÖNCE','Yapacak'],
          ['เคย','koey','fiilden ÖNCE','Daha önce yaptı'],
          ['ยังไม่','yang-mai','fiilden ÖNCE','Henüz yapmadı'],
        ]
      },
      tip:'Zaman belli ise (dün, yarın, bugün) zaman eki zorunlu değildir; zaman sözcüğü yeterlidir.'
    },
    {
      icon:'❓',
      title:'Soru Sözcükleri — WH Tablosu',
      body:'Tüm WH soru sözcükleri cümlenin SONUNA gelir (Türkçedeki gibi başa değil).',
      table:{
        cols:['Tayca','Okunuş','Anlamı'],
        rows:[
          ['อะไร','a-rai','Ne?'],
          ['ที่ไหน','thii-nai','Nerede?'],
          ['ใคร','khrai','Kim?'],
          ['เมื่อไร','meua-rai','Ne zaman?'],
          ['ทำไม','tham-mai','Neden?'],
          ['ยังไง','yang-ngai','Nasıl?'],
          ['เท่าไร','thao-rai','Ne kadar / Kaç?'],
        ]
      }
    },
    {
      icon:'👋',
      title:'Günlük Selamlama ve Veda İfadeleri',
      body:'Taylandlılar günün büyük bölümünde sadece สวัสดีครับ / ค่ะ der. Aşağıdakiler duruma göre kullanılır.',
      table:{
        cols:['Tayca','Okunuş','Anlamı'],
        rows:[
          ['สวัสดีครับ','sa-wat-dii khrap','Merhaba / Günaydın / İyi akşamlar'],
          ['อรุณสวัสดิ์ครับ','a-run sa-wat khrap','Günaydın (resmi)'],
          ['ฝันดีนะครับ','fan-dii na khrap','İyi geceler / Tatlı rüyalar'],
          ['ลาก่อนครับ','la-gon khrap','Hoşça kal'],
          ['แล้วเจอกันครับ','laeo joe-kan khrap','Görüşürüz'],
          ['โชคดีครับ','chok-dii khrap','İyi şanslar'],
          ['สู้ ๆ นะครับ','suu-suu na khrap','Kolay gelsin'],
          ['พักผ่อนนะครับ','phak-phon na khrap','İyi dinlenmeler'],
        ]
      }
    },
    {
      icon:'⚠️',
      title:'ไม่ ve ไหม — Karıştırılmaması Gereken İkili',
      body:'Yazılışları farklı, okunuşları benzer (mai). Yerleri ve görevleri tamamen farklıdır.',
      table:{
        cols:['Sözcük','Görevi','Yeri','Örnek'],
        rows:[
          ['ไม่ (mai, düşen ton)','Değil / Yok (olumsuzluk)','fiilin ÖNÜNE','ไม่เข้าใจ — anlamıyorum'],
          ['ไหม (mai, yükselen ton)','...mı/mi? (soru eki)','cümlenin SONUNA','สบายดีไหม — iyi misiniz?'],
        ]
      },
      tip:'Fiilin önünde mai görürsen olumsuzluk, cümle sonunda görürsen sorudur.'
    },
  ],

};
LESSONS[0] = L0;

L0.notes = [
  {
    icon:'🙋',
    title:'Kişi Zamirleri — Hızlı Referans',
    body:'Tayca zamirlerinde cinsiyet ayrımı yoktur — "o" hem erkek hem kadın için aynı kelimedir. Konuşmacının cinsiyeti kibar ekten belli olur (erkek khrap, kadın kha).',
    table:{
      cols:['Kişi','Thai','Okunuş','Not'],
      rows:[
        ['Ben (E)','ผม','pom','Erkek'],
        ['Ben (K)','ฉัน','chan','Kadın'],
        ['Sen/Siz','คุณ','khun','Kibar, herkese'],
        ['O','เขา','khao','E+K aynı kelime'],
        ['Biz','เรา','rao','+ samimi "ben"'],
        ['Siz(çoğul)','พวกคุณ','phuak-khun','Grup hitabı'],
        ['Onlar','พวกเขา','phuak-khao','phuak=grup'],
      ]
    },
    tip:'💡 Detaylı örnekler → Gramer sekmesi → Kural 3'
  },
  {
    icon:'📐',
    title:'Cümle Yapısı: Özne + Fiil + Nesne (SVO)',
    body:'Tayca cümle sırası Türkçeden çok farklıdır. Fiiller kişiye göre DEĞİŞMEZ — "gidiyorum", "gidiyor", "gidiyorsunuz" hepsi aynı fiil "pai". Soru sözcükleri cümlenin SONUNA gelir.',
    table:{
      cols:['Türkçe','Tayca Okunuşu'],
      rows:[
        ['Ben gidiyorum.','Pom pai khrap.'],
        ['O yemek yiyor.','Khao kin khao khrap.'],
        ['Adınız ne? (ne SONDA!)','Khun chue a-rai?'],
        ['Nereye gidiyorsunuz?','Khun pai nai khrap?'],
      ]
    },
    tip:'💡 Detaylı örnekler → Gramer sekmesi → Kural 1'
  },
  {
    icon:'⏱️',
    title:'Zaman İfadeleri: gam-lang / laeo / ja',
    body:'Taycada fiil asla çekilmez. Zaman ayrı kelimelerle belirtilir. Türkçedeki "-iyor", "-di", "-ecek" ekleri yerine ayrı sözcükler kullanılır.',
    table:{
      cols:['Tayca Okunuşu','Anlamı','Konumu'],
      rows:[
        ['กำลัง  gam-lang','Şu an / -iyor','Fiilden ÖNCE'],
        ['แล้ว  laeo','Bitti / geçti','Fiilden SONRA'],
        ['จะ  ja','Yapacak / gelecek','Fiilden ÖNCE'],
        ['เคย  koey','Daha önce yaptı','Fiilden ÖNCE'],
        ['ยังไม่  yang mai','Henüz ... değil','Fiilden ÖNCE'],
      ]
    },
    glossary:[
      {ro:'Pom gam-lang pai',tr:'Ben şu an gidiyorum.'},
      {ro:'Pom pai laeo',tr:'Ben gittim.'},
      {ro:'Pom ja pai',tr:'Ben gideceğim.'},
      {ro:'Pom koey pai',tr:'Ben daha önce gittim.'},
      {ro:'Pom yang mai pai',tr:'Ben henüz gitmedim.'},
    ],
    tip:'💡 Detaylı örnekler → Gramer sekmesi → Kural 7'
  },
  {
    icon:'❓',
    title:'Soru Sözcükleri — Hızlı Referans',
    body:'Tayca soru sözcükleri cümlenin SONUNA gelir — Türkçenin aksine başa değil! "Adın ne?" → "Khun chue A-RAI?" (a-rai sonda)',
    table:{
      cols:['Tayca','Okunuş','Türkçe','Örnek'],
      rows:[
        ['อะไร','a-rai','Ne?','Chue a-rai? — Adın ne?'],
        ['ที่ไหน','thii-nai','Nerede?','Yu thii-nai? — Neredesin?'],
        ['ใคร','khrai','Kim?','Khrai? — Kim?'],
        ['เมื่อไร','meua-rai','Ne zaman?','Maa meua-rai? — Ne zaman geldi?'],
        ['ทำไม','tham-mai','Neden?','Tham-mai? — Neden?'],
        ['ยังไง','yang-ngai','Nasıl?','Yang-ngai? — Nasıl?'],
        ['เท่าไร','thao-rai','Ne kadar?','Thao-rai? — Ne kadar?'],
        ['ไหม','mai','Mı/Mi?','Aroi mai? — Lezzetli mi?'],
      ]
    },
    tip:'💡 Detaylı örnekler → Gramer sekmesi → Kural 5'
  },
  {
    icon:'🙏',
    title:'Kibar Ekler: ครับ Khrap (Erkek) / ค่ะ Kha (Kadın)',
    body:'Taylandlılar her cümlenin sonuna kibar ek koyar. Phuket\'te bu eki kullanmayan yabancı kaba görünür. Hızlı konuşmada "krap" veya "kap" gibi duyulur.',
    table:{
      cols:['Kelime','Kullanımı','Örnek'],
      rows:[
        ['ครับ  khrap','Erkekler her cümlede','Sawatdee khrap — Merhaba'],
        ['ค่ะ  kha','Kadınlar kesin ifadelerde','Khob khun kha — Teşekkürler'],
        ['คะ  ka','Kadınlar soru cümlelerinde','Sabai dee mai ka? — İyi misiniz?'],
      ]
    },
    tip:'💡 Detaylı örnekler → Gramer sekmesi → Kural 2'
  },
];
