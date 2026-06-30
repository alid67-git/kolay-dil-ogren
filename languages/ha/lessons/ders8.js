// ders8.js — Hausa Lesson 8: Hotel & Accommodation
const L8 = {
  words: [
    {id:'w1', ha:'Otal', ro:'o-tal', tr:'Otel',
     tip:'İngilizceden alıntı (hotel). Konaklama yeri.',
     ctx:'Konaklama ve seyahatte.',
     examples:[{
       ha:'Ina otal mai kyau a nan?', ro:'i-na o-tal mai kya-u a nan', tr:'Burada güzel bir otel nerede?',
       bd:[{ro:'Ina otal',tr:'Otel nerede',role:'soru',note:'Yer sorusu.'},{ro:'mai kyau',tr:'güzel',role:'sıfat',note:'İyi/güzel.'},{ro:'a nan',tr:'burada',role:'yer',note:'Bu konumda.'}]
     }]
    },
    {id:'w2', ha:'Ɗaki', ro:'da-ki', tr:'Oda',
     tip:'Otel odası veya herhangi bir oda.',
     ctx:'Oda rezervasyonu ve otel hizmetleri.',
     examples:[{
       ha:'Ina so ɗaki ɗaya.', ro:'i-na so da-ki da-ya', tr:'Bir oda istiyorum.',
       bd:[{ro:'Ina so',tr:'İstiyorum',role:'fiil',note:'İstek.'},{ro:'ɗaki ɗaya',tr:'bir oda',role:'sipariş',note:'Oda sayısı.'}]
     }]
    },
    {id:'w3', ha:'Gado', ro:'ga-do', tr:'Yatak',
     tip:'Uyku için kullanılan yatak.',
     ctx:'Oda özellikleri ve konfor.',
     examples:[{
       ha:'Ina so ɗaki mai gado biyu.', ro:'i-na so da-ki mai ga-do bi-yu', tr:'Çift yataklı oda istiyorum.',
       bd:[{ro:'Ina so ɗaki',tr:'Oda istiyorum',role:'istek',note:'Oda talebi.'},{ro:'mai gado biyu',tr:'çift yataklı',role:'sıfat',note:'Yatak sayısı.'}]
     }]
    },
    {id:'w4', ha:'Makullin ɗaki', ro:'ma-kul-lin da-ki', tr:'Oda anahtarı',
     tip:'"Makullī" kilit/anahtar, "ɗaki" oda.',
     ctx:'Check-in ve oda erişimi.',
     examples:[{
       ha:'Ga makullin ɗakinka.', ro:'ga ma-kul-lin da-kin-ka', tr:'İşte oda anahtarın.',
       bd:[{ro:'Ga',tr:'İşte/buyur',role:'sunum',note:'Verme ifadesi.'},{ro:'makullin ɗakinka',tr:'oda anahtarın',role:'isim',note:'Kişisel anahtar.'}]
     }]
    },
    {id:'w5', ha:'Ina so dakin', ro:'i-na so da-kin', tr:'Oda istiyorum',
     tip:'Oda rezervasyonu için temel ifade.',
     ctx:'Otel resepsiyonunda.',
     examples:[{
       ha:'Ina so dakin guda ɗaya dare biyu.', ro:'i-na so da-kin gu-da da-ya da-re bi-yu', tr:'İki gecelik tek oda istiyorum.',
       bd:[{ro:'Ina so dakin',tr:'Oda istiyorum',role:'istek',note:'Oda talebi.'},{ro:'guda ɗaya',tr:'bir tane',role:'sayı',note:'Tekil.'},{ro:'dare biyu',tr:'iki gece',role:'süre',note:'Konaklama süresi.'}]
     }]
    },
    {id:'w6', ha:'Dare nawa?', ro:'da-re na-wa', tr:'Kaç gece?',
     tip:'Konaklama süresini sormak için.',
     ctx:'Otel rezervasyonunda.',
     examples:[{
       ha:'Za ku zauna dare nawa?', ro:'za ku za-u-na da-re na-wa', tr:'Kaç gece kalacaksınız?',
       bd:[{ro:'Za ku zauna',tr:'Kalacaksınız',role:'fiil',note:'Gelecek zaman.'},{ro:'dare nawa',tr:'kaç gece',role:'soru',note:'Süre sorusu.'}]
     }]
    },
    {id:'w7', ha:'Wanka', ro:'wan-ka', tr:'Banyo / Duş',
     tip:'Yıkanma yeri ve eylem.',
     ctx:'Otel odasında banyo imkânı.',
     examples:[{
       ha:'Ɗaki mai wanka ina so.', ro:'da-ki mai wan-ka i-na so', tr:'Banyolu oda istiyorum.',
       bd:[{ro:'Ɗaki mai wanka',tr:'Banyolu oda',role:'isim',note:'Oda özelliği.'},{ro:'ina so',tr:'istiyorum',role:'fiil',note:'İstek.'}]
     }]
    },
    {id:'w8', ha:'Wutar lantarki', ro:'wu-tar lan-tar-ki', tr:'Elektrik',
     tip:'"Wuta" = ateş/ışık. "Lantarki" = elektrik.',
     ctx:'Elektrik sorunu veya talebi.',
     examples:[{
       ha:'Wutar lantarki ta ɓace.', ro:'wu-tar lan-tar-ki ta ba-ce', tr:'Elektrik kesildi.',
       bd:[{ro:'Wutar lantarki',tr:'Elektrik',role:'isim',note:'Elektrik enerjisi.'},{ro:'ta ɓace',tr:'kesildi/kayboldu',role:'fiil',note:'Kesilmek.'}]
     }]
    },
    {id:'w9', ha:'Intanet', ro:'in-ta-net', tr:'İnternet',
     tip:'İnternete bağlantı. İngilizceden alıntı.',
     ctx:'Otel WiFi ve internet hizmetleri.',
     examples:[{
       ha:'Kuna da intanet a otal?', ro:'ku-na da in-ta-net a o-tal', tr:'Otelde internet var mı?',
       bd:[{ro:'Kuna da intanet',tr:'İnternetiniz var mı',role:'soru',note:'İnternet sorgusu.'},{ro:'a otal',tr:'otelde',role:'yer',note:'Konum.'}]
     }]
    },
    {id:'w10', ha:'Kuɗin otal', ro:'ku-din o-tal', tr:'Otel ücreti / Fiyatı',
     tip:'Günlük veya gecelik otel fiyatı.',
     ctx:'Rezervasyon ve ödeme.',
     examples:[{
       ha:'Kuɗin otal nawa ne a dare?', ro:'ku-din o-tal na-wa ne a da-re', tr:'Gecelik otel ücreti ne kadar?',
       bd:[{ro:'Kuɗin otal',tr:'Otel ücreti',role:'isim',note:'Konaklama bedeli.'},{ro:'nawa ne a dare',tr:'gecelik ne kadar',role:'soru',note:'Günlük fiyat.'}]
     }]
    },
    {id:'w11', ha:'Na kira', ro:'na ki-ra', tr:'Rezervasyon yaptım / Aradım',
     tip:'"Kira" = aramak/çağırmak. Telefon rezervasyonu.',
     ctx:'Önceden rezervasyon bilgisi.',
     examples:[{
       ha:'Na kira, ina da ɗaki.', ro:'na ki-ra i-na da da-ki', tr:'Rezervasyon yaptım, odam var.',
       bd:[{ro:'Na kira',tr:'Aradım/Rezervasyon yaptım',role:'fiil',note:'Geçmiş zaman.'},{ro:'ina da ɗaki',tr:'odam var',role:'bilgi',note:'Oda bilgisi.'}]
     }]
    },
    {id:'w12', ha:'Fita', ro:'fi-ta', tr:'Çıkış',
     tip:'Çıkış ve ayrılış.',
     ctx:'Check-out ve otel çıkışı.',
     examples:[{
       ha:'Ina son fita yau.', ro:'i-na son fi-ta yau', tr:'Bugün çıkış yapmak istiyorum.',
       bd:[{ro:'Ina son fita',tr:'Çıkış yapmak istiyorum',role:'istek',note:'Check-out talebi.'},{ro:'yau',tr:'bugün',role:'zaman',note:'Güncel.'}]
     }]
    },
    {id:'w13', ha:'Shiga', ro:'shi-ga', tr:'Giriş',
     tip:'Girme ve içeri girme.',
     ctx:'Check-in ve otel girişi.',
     examples:[{
       ha:'Lokacin shiga awa nawa ne?', ro:'lo-ka-cin shi-ga a-wa na-wa ne', tr:'Check-in saati nedir?',
       bd:[{ro:'Lokacin shiga',tr:'Giriş zamanı',role:'isim',note:'Check-in vakti.'},{ro:'awa nawa ne',tr:'saat kaç',role:'soru',note:'Saat sorusu.'}]
     }]
    },
    {id:'w14', ha:'Bincike', ro:'bin-ci-ke', tr:'Check-in / Check-out / Araştırma',
     tip:'Resmi kayıt ve kontrol.',
     ctx:'Otel prosedürleri.',
     examples:[{
       ha:'Lokacin bincike ya zo.', ro:'lo-ka-cin bin-ci-ke ya zo', tr:'Check-out zamanı geldi.',
       bd:[{ro:'Lokacin bincike',tr:'Check-out zamanı',role:'isim',note:'Çıkış prosedürü.'},{ro:'ya zo',tr:'geldi',role:'fiil',note:'Gelmek.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:'Otel Rezervasyonu Yapmak', title_en:'Making Hotel Reservations',
     explanation:"Otel rezervasyonu için temel kalıplar: oda tipi, gece sayısı ve fiyat sorgusu.",
     table:[
       {pronoun:'Oda talebi', form:'Ina so ɗaki...', example:'Ina so ɗaki mai wanka.', tr:'Banyolu oda istiyorum.'},
       {pronoun:'Süre', form:'dare + sayı', example:'Na zauna dare huɗu.', tr:'Dört gece kaldım.'},
       {pronoun:'Fiyat sorusu', form:'Kuɗin otal nawa ne?', example:'Kuɗin dare ɗaya nawa ne?', tr:'Bir gecelik fiyat ne kadar?'},
       {pronoun:'Rezervasyon', form:'Na kira / Na yi ajiye', example:'Na yi ajiye gobe.', tr:'Yarın için rezervasyon yaptım.'},
     ],
     note:"'Ajiye' = ayırmak/saklamak. 'Na yi ajiye' = rezervasyon yaptım (doğrudan anlamda 'ayırdım')."
    },
    {id:'g2', title:'Otel Hizmetleri Talep Etmek', title_en:'Requesting Hotel Services',
     explanation:"Otel personelinden hizmet istemek için 'Ina so + hizmet' veya 'Don Allah + hizmet' kullanılır.",
     table:[
       {pronoun:'Temizlik', form:'Yi mani tsafta', example:'Yi mani tsaftar ɗaki, don Allah.', tr:'Odamı temizleyin lütfen.'},
       {pronoun:'Yiyecek', form:'Kawo abinci', example:'Kawo abinci zuwa ɗakina.', tr:'Odama yemek getirin.'},
       {pronoun:'Havlu', form:'Ina son tawul', example:'Ina son tawul sabbi.', tr:'Temiz havlu istiyorum.'},
       {pronoun:'Şikâyet', form:'Akwai matsala', example:'Akwai matsala da wutar lantarki.', tr:'Elektrikle ilgili sorun var.'},
     ],
     note:"'Tsafta' = temizlik. 'Sabbi' = yeni/taze. 'Akwai matsala' = sorun var."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Ina so ɗaki dare biyu.', tr:'İki gecelik oda istiyorum.', prompt:'Oda rezervasyonu yap'},
    {id:'sp2', ha:'Kuɗin otal nawa ne a dare?', tr:'Gecelik otel ücreti ne kadar?', prompt:'Fiyat sor'},
    {id:'sp3', ha:'Wutar lantarki ta ɓace.', tr:'Elektrik kesildi.', prompt:'Şikâyet et'},
    {id:'sp4', ha:'Kuna da intanet a otal?', tr:'Otelde internet var mı?', prompt:'İnternet sor'},
    {id:'sp5', ha:'Ina son fita yau.', tr:'Bugün çıkış yapmak istiyorum.', prompt:'Check-out bildir'},
    {id:'sp6', ha:'Lokacin shiga awa nawa ne?', tr:'Check-in saati nedir?', prompt:'Check-in saatini sor'},
  ],
  dialogues: [
    {id:'d1', title:'Otal — Otel Resepsiyonu', title_tr:'Otel Check-In Diyaloğu',
     lines:[
       {speaker:'A', gender:'m', ha:'Sannu! Ina so ɗaki guda ɗaya, dare uku.', tr:'Merhaba! Üç gecelik tek oda istiyorum.',
        gramNote:'Oda rezervasyonu.',
        bd:[{ro:'Ina so ɗaki guda ɗaya',tr:'Tek oda istiyorum',role:'istek',note:'Oda talebi.'},{ro:'dare uku',tr:'üç gece',role:'süre',note:'Konaklama süresi.'}]},
       {speaker:'B', gender:'f', ha:'Yauwa. Ɗaki mai gado ɗaya ko biyu?', tr:'Tamam. Tek yataklı mı çift yataklı mı?',
        gramNote:'Oda tipi sorusu.',
        bd:[{ro:'Ɗaki mai gado ɗaya',tr:'Tek yataklı oda',role:'seçenek',note:'Oda tipi.'},{ro:'ko biyu',tr:'yoksa çift',role:'soru',note:'Seçenek.'}]},
       {speaker:'A', gender:'m', ha:'Gado biyu, don Allah. Yana da wanka?', tr:'Çift yataklı lütfen. Banyosu var mı?',
        gramNote:'Oda tercihi ve banyo sorusu.',
        bd:[{ro:'Gado biyu',tr:'Çift yatak',role:'tercih',note:'Yatak tipi.'},{ro:'Yana da wanka',tr:'Banyosu var mı',role:'soru',note:'Tesis sorusu.'}]},
       {speaker:'B', gender:'f', ha:'Eh, yana da wanka da intanet kyauta.', tr:'Evet, banyosu ve ücretsiz interneti var.',
        gramNote:'Otel özellikleri.',
        bd:[{ro:'Eh yana da wanka',tr:'Evet banyosu var',role:'onay',note:'Teyit.'},{ro:'da intanet kyauta',tr:'ücretsiz internet ile',role:'ek',note:'Ekstra hizmet.'}]},
       {speaker:'A', gender:'m', ha:'Kuɗin dare nawa ne?', tr:'Gecelik ücret ne kadar?',
        gramNote:'Fiyat sorusu.',
        bd:[{ro:'Kuɗin dare',tr:'Gecelik ücret',role:'soru',note:'Günlük fiyat.'},{ro:'nawa ne',tr:'ne kadar',role:'soru',note:'Fiyat sorgusu.'}]},
       {speaker:'B', gender:'f', ha:'Naira dubu biyu ne a dare. Ga makullin ɗakinka.', tr:'Gecelik iki bin Naira. İşte oda anahtarın.',
        gramNote:'Fiyat ve anahtar teslimi.',
        bd:[{ro:'Naira dubu biyu',tr:'İki bin Naira',role:'fiyat',note:'2000 ₦.'},{ro:'Ga makullin ɗakinka',tr:'İşte oda anahtarın',role:'teslim',note:'Anahtar verme.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:'Ina so ɗaki dare biyu. Yana da wanka? Eh, yana da wanka da intanet. Kuɗin dare nawa ne? Naira dubu ɗaya da hamsin.',
     tr:'İki gecelik oda istiyorum. Banyosu var mı? Evet, banyosu ve interneti var. Gecelik ücret ne kadar? Bin elli Naira.',
     questions:[
       {q:'Kaç gece konaklama istendi?', opts:['İki','Bir','Üç','Dört'], answer:0, tr:'Kaç gece konaklama istendi?'},
       {q:'Odanın özellikleri neler?', opts:['Banyo ve internet','Sadece banyo','Sadece internet','Hiçbiri'], answer:0, tr:'Odanın özellikleri neler?'},
     ]
    },
  ],
};
LESSONS[8] = L8;
