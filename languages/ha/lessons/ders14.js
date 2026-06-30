// ders14.js — Hausa Lesson 14: City & Places
const L14 = {
  words: [
    {id:'w1', ha:'Gari', ro:'ga-ri', tr:'Şehir / Kasaba / Toprak',
     tip:'Hem şehir hem de yerleşim yeri anlamına gelir.',
     ctx:'Yaşanılan şehir veya kasabadan bahsederken.',
     examples:[{
       ha:'Ina zauna a babban gari.', ro:'i-na za-u-na a bab-ban ga-ri', tr:'Büyük bir şehirde yaşıyorum.',
       bd:[{ro:'Ina zauna',tr:'Yaşıyorum',role:'fiil',note:'İkamet.'},{ro:'a babban gari',tr:'büyük şehirde',role:'yer',note:'Konum.'}]
     }]
    },
    {id:'w2', ha:'Ƙauye', ro:'kau-ye', tr:'Köy',
     tip:'Küçük yerleşim yeri. Kırsal alan.',
     ctx:'Köy hayatı ve kırsal alandan bahsederken.',
     examples:[{
       ha:'Na fito daga ƙauye.', ro:'na fi-to da-ga kau-ye', tr:'Köyden geldim.',
       bd:[{ro:'Na fito daga',tr:'Geldim (geldim)',role:'fiil',note:'Çıkış ifadesi.'},{ro:'ƙauye',tr:'köy',role:'yer',note:'Menşe.'}]
     }]
    },
    {id:'w3', ha:'Titi', ro:'ti-ti', tr:'Yol / Cadde / Sokak',
     tip:'Genel yol ve cadde kelimesi.',
     ctx:'Adres ve yol tarifinde.',
     examples:[{
       ha:'Ina zauna a titi na biyar.', ro:'i-na za-u-na a ti-ti na bi-yar', tr:'Beşinci caddede yaşıyorum.',
       bd:[{ro:'Ina zauna a titi',tr:'Caddede yaşıyorum',role:'yer',note:'Adres.'},{ro:'na biyar',tr:'beşinci',role:'sıra',note:'Cadde numarası.'}]
     }]
    },
    {id:'w4', ha:'Gida', ro:'gi-da', tr:'Ev / Yuva',
     tip:'Yaşanılan ev ve yuva.',
     ctx:'Ev hayatı ve ev sahipliği.',
     examples:[{
       ha:'Gidanmu babba ne.', ro:'gi-dan-mu bab-ba ne', tr:'Evimiz büyük.',
       bd:[{ro:'Gidanmu',tr:'Evimiz',role:'isim+iyelik',note:'Bizim evimiz.'},{ro:'babba ne',tr:'büyük',role:'sıfat',note:'Boyut.'}]
     }]
    },
    {id:'w5', ha:'Makaranta', ro:'ma-ka-ran-ta', tr:'Okul',
     tip:'Her seviyede eğitim kurumu.',
     ctx:'Eğitim ve öğretimden bahsederken.',
     examples:[{
       ha:'Yara suna makaranta.', ro:'ya-ra su-na ma-ka-ran-ta', tr:'Çocuklar okuldalar.',
       bd:[{ro:'Yara suna',tr:'Çocuklar var',role:'özne',note:'Çoğul.'},{ro:'makaranta',tr:'okulda',role:'yer',note:'Eğitim kurumu.'}]
     }]
    },
    {id:'w6', ha:'Asibiti', ro:'a-si-bi-ti', tr:'Hastane',
     tip:'Sağlık hizmeti veren kurum.',
     ctx:'Sağlık ve tıbbi hizmetler.',
     examples:[{
       ha:'Asibitin ya nesa daga nan.', ro:'a-si-bi-tin ya ne-sa da-ga nan', tr:'Hastane buradan uzak.',
       bd:[{ro:'Asibitin ya nesa',tr:'Hastane uzak',role:'bilgi',note:'Mesafe.'},{ro:'daga nan',tr:'buradan',role:'başlangıç',note:'Başlangıç noktası.'}]
     }]
    },
    {id:'w7', ha:'Masallaci', ro:'ma-sal-la-ci', tr:'Cami',
     tip:"Müslüman ibadet yeri. Hausa toplumunun merkezi.",
     ctx:'Ibadet ve toplumsal buluşmalar.',
     examples:[{
       ha:"Masallaci kusa da kasuwa yake.", ro:'ma-sal-la-ci ku-sa da ka-su-wa ya-ke', tr:'Cami pazara yakın.',
       bd:[{ro:'Masallaci',tr:'Cami',role:'isim',note:'İbadet yeri.'},{ro:'kusa da kasuwa',tr:'pazara yakın',role:'mesafe',note:'Konumsal ilişki.'}]
     }]
    },
    {id:'w8', ha:'Kantin siyarwa', ro:'kan-tin si-yar-wa', tr:'Dükkan / Mağaza',
     tip:'"Kantin" dükkan, "siyarwa" satış. Küçük dükkân.',
     ctx:'Alışveriş ve satış yerleri.',
     examples:[{
       ha:'Na je kantin siyarwa don saye burodin.', ro:'na je kan-tin si-yar-wa don sa-ye bu-ro-din', tr:'Ekmek almak için dükkâna gittim.',
       bd:[{ro:'Na je kantin siyarwa',tr:'Dükkâna gittim',role:'fiil',note:'Hareket.'},{ro:'don saye burodin',tr:'ekmek almak için',role:'amaç',note:'Satın alma amacı.'}]
     }]
    },
    {id:'w9', ha:'Kasuwa', ro:'ka-su-wa', tr:'Pazar / Çarşı',
     tip:"Açık hava pazarı. Hausa ekonomisinin kalbi.",
     ctx:'Alışveriş ve sosyal buluşmalar.',
     examples:[{
       ha:'Kasuwa a nan take kowace Asabar.', ro:'ka-su-wa a nan ta-ke ko-wa-ce a-sa-bar', tr:'Pazar her Cumartesi burada kurulur.',
       bd:[{ro:'Kasuwa a nan take',tr:'Pazar burada',role:'bilgi',note:'Pazar konumu.'},{ro:'kowace Asabar',tr:'her Cumartesi',role:'zaman',note:'Periyodik zaman.'}]
     }]
    },
    {id:'w10', ha:'Gidan abinci', ro:'gi-dan a-bin-ci', tr:'Restoran / Yemek evi',
     tip:'"Gidan abinci" = yemek evi. Restoran.',
     ctx:'Yemek yeme yerleri.',
     examples:[{
       ha:'Mun je gidan abinci da maraice.', ro:'mun je gi-dan a-bin-ci da ma-rai-ce', tr:'Akşam restorana gittik.',
       bd:[{ro:'Mun je gidan abinci',tr:'Restorana gittik',role:'fiil',note:'Gitme.'},{ro:'da maraice',tr:'akşam',role:'zaman',note:'Zaman.'}]
     }]
    },
    {id:'w11', ha:'Banki', ro:'ban-ki', tr:'Banka',
     tip:'Mali hizmetler kurumu.',
     ctx:'Para işlemleri ve bankacılık.',
     examples:[{
       ha:'Ina so je banki don cire kuɗi.', ro:'i-na so je ban-ki don ci-re ku-di', tr:'Para çekmek için bankaya gitmek istiyorum.',
       bd:[{ro:'Ina so je banki',tr:'Bankaya gitmek istiyorum',role:'istek',note:'Gitme isteği.'},{ro:'don cire kuɗi',tr:'para çekmek için',role:'amaç',note:'Finansal işlem.'}]
     }]
    },
    {id:'w12', ha:'Ofis', ro:'o-fis', tr:'Ofis / Büro',
     tip:'İş yeri ve büro. İngilizceden alıntı.',
     ctx:'İş ve çalışma ortamı.',
     examples:[{
       ha:'Ubana yana ofis.', ro:'u-ba-na ya-na o-fis', tr:'Babam ofiste.',
       bd:[{ro:'Ubana yana',tr:'Babam (orada)',role:'özne+fiil',note:'Konum bilgisi.'},{ro:'ofis',tr:'ofis',role:'yer',note:'Çalışma yeri.'}]
     }]
    },
    {id:'w13', ha:'Otal', ro:'o-tal', tr:'Otel',
     tip:'Konaklama tesisi.',
     ctx:'Seyahat ve konaklama.',
     examples:[{
       ha:'Otal mafi kyau a gari.', ro:'o-tal ma-fi kya-u a ga-ri', tr:'Şehirdeki en iyi otel.',
       bd:[{ro:'Otal mafi kyau',tr:'En iyi otel',role:'isim+sıfat',note:'Üstünlük.'},{ro:'a gari',tr:'şehirde',role:'yer',note:'Konum.'}]
     }]
    },
    {id:'w14', ha:'Filin jirgi sama', ro:'fi-lin jir-gi sa-ma', tr:'Havalimanı',
     tip:'"Filin" alan, "jirgi sama" uçak. Havalimanı.',
     ctx:'Hava seyahati.',
     examples:[{
       ha:'Filin jirgi sama yana nesa.', ro:'fi-lin jir-gi sa-ma ya-na ne-sa', tr:'Havalimanı uzakta.',
       bd:[{ro:'Filin jirgi sama',tr:'Havalimanı',role:'isim',note:'Hava ulaşım noktası.'},{ro:'yana nesa',tr:'uzakta',role:'mesafe',note:'Uzaklık.'}]
     }]
    },
    {id:'w15', ha:'Tasha', ro:'ta-sha', tr:'Otobüs terminali / Durak',
     tip:'Taşıt durağı ve terminal.',
     ctx:'Şehirlerarası ulaşım.',
     examples:[{
       ha:'Tasha ta ke a tsakiyar gari.', ro:'ta-sha ta ke a tsa-ki-yar ga-ri', tr:'Terminal şehir merkezinde.',
       bd:[{ro:'Tasha ta ke',tr:'Terminal bulunuyor',role:'yer bilgisi',note:'Konum.'},{ro:'a tsakiyar gari',tr:'şehir merkezinde',role:'yer',note:'Merkez.'}]
     }]
    },
    {id:'w16', ha:'Gidan yari', ro:'gi-dan ya-ri', tr:'Hapishane / Cezaevi',
     tip:'"Gidan yari" = tutuklu evi. Cezaevi.',
     ctx:'Hukuki konular.',
     examples:[{
       ha:'An kai shi gidan yari.', ro:'an kai shi gi-dan ya-ri', tr:'Onu cezaevine götürdüler.',
       bd:[{ro:'An kai shi',tr:'Götürüldü',role:'edilgen',note:'Pasif fiil.'},{ro:'gidan yari',tr:'cezaevi',role:'yer',note:'Hapis yeri.'}]
     }]
    },
    {id:'w17', ha:'Fada', ro:'fa-da', tr:'Saray / Hükümdar sarayı',
     tip:"Geleneksel hükümdar (Emir/Sarki) sarayı.",
     ctx:'Geleneksel yönetim.',
     examples:[{
       ha:'Fadan sarki na nan.', ro:'fa-dan sar-ki na nan', tr:'Hükümdar sarayı burada.',
       bd:[{ro:'Fadan sarki',tr:'Hükümdar sarayı',role:'isim',note:'Saray.'},{ro:'na nan',tr:'burada',role:'yer',note:'Konum.'}]
     }]
    },
    {id:'w18', ha:'Filin wasa', ro:'fi-lin wa-sa', tr:'Oyun alanı / Stadyum',
     tip:'"Filin wasa" = oyun alanı. Spor sahası veya çocuk parkı.',
     ctx:'Spor ve oyun.',
     examples:[{
       ha:'Yara suna wasa a filin wasa.', ro:'ya-ra su-na wa-sa a fi-lin wa-sa', tr:'Çocuklar oyun alanında oynuyor.',
       bd:[{ro:'Yara suna wasa',tr:'Çocuklar oynuyor',role:'fiil',note:'Oyun eylemi.'},{ro:'a filin wasa',tr:'oyun alanında',role:'yer',note:'Oyun yeri.'}]
     }]
    },
    {id:'w19', ha:'Mashaya', ro:'ma-sha-ya', tr:'Su kuyusu / Çeşme',
     tip:'"Mashaya" = içilen yer. Su kuyusu veya çeşme.',
     ctx:'Su temininde.',
     examples:[{
       ha:'Mata suna ɗebo ruwa a mashaya.', ro:'ma-ta su-na de-bo ru-wa a ma-sha-ya', tr:'Kadınlar çeşmeden su alıyor.',
       bd:[{ro:'Mata suna ɗebo ruwa',tr:'Kadınlar su alıyor',role:'fiil',note:'Su alma.'},{ro:'a mashaya',tr:'çeşmeden',role:'yer',note:'Su kaynağı.'}]
     }]
    },
    {id:'w20', ha:'Gonar', ro:'go-nar', tr:'Tarla / Çiftlik',
     tip:'Tarım arazisi ve çiftlik.',
     ctx:'Tarım ve çiftçilik.',
     examples:[{
       ha:'Ubana yana aiki a gonar.', ro:'u-ba-na ya-na ai-ki a go-nar', tr:'Babam tarlada çalışıyor.',
       bd:[{ro:'Ubana yana aiki',tr:'Babam çalışıyor',role:'fiil',note:'Çalışma.'},{ro:'a gonar',tr:'tarlada',role:'yer',note:'Tarım alanı.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:"Hausa'da Yer Belirteçleri", title_en:'Location Markers in Hausa',
     explanation:"'A' = -de/-da (yer belirteci). 'Daga' = -den/-dan. 'Zuwa' = -e/-a. Yer ifadelerinde bu edatlar kullanılır.",
     table:[
       {pronoun:'-de/-da (içinde)', form:'a + yer', example:'Na zauna a gari.', tr:'Şehirde yaşıyorum.'},
       {pronoun:'-den/-dan (uzaktan)', form:'daga + yer', example:'Na fito daga ƙauye.', tr:'Köyden geldim.'},
       {pronoun:'-e/-a (yöne)', form:'zuwa + yer', example:'Na je zuwa kasuwa.', tr:'Pazara gittim.'},
       {pronoun:'Nerede (soru)', form:'Ina + isim?', example:'Ina masallaci?', tr:'Cami nerede?'},
       {pronoun:'Yanında', form:'kusa da', example:'Kusa da tasha.', tr:'Terminale yakın.'},
     ],
     note:"'A' edat olarak çok kullanılır: 'a gida' evde, 'a kasuwa' pazarda, 'a titi' yolda."
    },
    {id:'g2', title:"'Mafi' Üstünlük Sıfatı", title_en:'Superlative with Mafi',
     explanation:"'Mafi' = en. 'Mafi kyau' = en güzel. Üstünlük ifadesi için kullanılır.",
     table:[
       {pronoun:'En iyi', form:'mafi kyau', example:'Otal mafi kyau.', tr:'En iyi otel.'},
       {pronoun:'En büyük', form:'mafi girma', example:'Gidan mafi girma.', tr:'En büyük ev.'},
       {pronoun:'En ucuz', form:'mafi arha', example:'Mota mafi arha.', tr:'En ucuz araba.'},
       {pronoun:'En uzak', form:'mafi nesa', example:'Ƙauye mafi nesa.', tr:'En uzak köy.'},
     ],
     note:"'Mafi' her sıfattan önce gelerek üstünlük derecesi oluşturur: mafi kyau (en güzel), mafi tsada (en pahalı)."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Ina zauna a babban gari.', tr:'Büyük bir şehirde yaşıyorum.', prompt:'Yaşadığın yeri söyle'},
    {id:'sp2', ha:'Masallaci kusa da kasuwa yake.', tr:'Cami pazara yakın.', prompt:'Konumsal ilişkiyi anlat'},
    {id:'sp3', ha:'Na je banki don cire kuɗi.', tr:'Para çekmek için bankaya gittim.', prompt:'Bankaya gitmeyi anlat'},
    {id:'sp4', ha:'Filin jirgi sama yana nesa.', tr:'Havalimanı uzakta.', prompt:'Mesafeyi belirt'},
    {id:'sp5', ha:'Yara suna wasa a filin wasa.', tr:'Çocuklar oyun alanında oynuyor.', prompt:'Oyun sahnesini anlat'},
    {id:'sp6', ha:'Otal mafi kyau a gari wane ne?', tr:'Şehirdeki en iyi otel hangisi?', prompt:'En iyi oteli sor'},
  ],
  dialogues: [
    {id:'d1', title:'Gari — Şehir Turisti', title_tr:'Şehir Gezisi Diyaloğu',
     lines:[
       {speaker:'A', gender:'m', ha:'Sannu! Ina bako ne. Ina masallaci?', tr:'Merhaba! Ben misafirim. Cami nerede?',
        gramNote:'Bako = misafir/yabancı.',
        bd:[{ro:'Ina bako ne',tr:'Ben misafirim',role:'tanıtma',note:'Yabancı.'},{ro:'Ina masallaci',tr:'Cami nerede',role:'soru',note:'Yer sorusu.'}]},
       {speaker:'B', gender:'f', ha:'Masallaci kusa yake. Je gaba, sannan juya hagu.', tr:'Cami yakın. İleri git, sonra sola dön.',
        gramNote:'Yol tarifi.',
        bd:[{ro:'Masallaci kusa yake',tr:'Cami yakın',role:'bilgi',note:'Mesafe.'},{ro:'Je gaba sannan juya hagu',tr:'İleri git sonra sola dön',role:'tarif',note:'Yol.'}]},
       {speaker:'A', gender:'m', ha:'Nagode! Kuma, ina gidan abinci mai kyau a nan?', tr:'Teşekkürler! Ayrıca, burada iyi bir restoran nerede?',
        gramNote:'Ek soru.',
        bd:[{ro:'Kuma',tr:'Ayrıca',role:'bağlaç',note:'Ek soru.'},{ro:'gidan abinci mai kyau',tr:'iyi restoran',role:'soru',note:'Nitelikli yer sorusu.'}]},
       {speaker:'B', gender:'f', ha:'Gidan abinci mai kyau yana a tsakiyar gari, kusa da banki.', tr:'İyi restoran şehir merkezinde, bankaya yakın.',
        gramNote:'Yer ve yakınlık ifadesi.',
        bd:[{ro:'yana a tsakiyar gari',tr:'şehir merkezinde',role:'yer',note:'Merkez.'},{ro:'kusa da banki',tr:'bankaya yakın',role:'konum',note:'Yakın referans.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:'Gari babba ne kuma mai kyau. Akwai masallaci, kasuwa, da makaranta. Banki yana a tsakiyar gari. Tasha tana kusa da filin jirgi sama.',
     tr:'Şehir büyük ve güzel. Cami, pazar ve okul var. Banka şehir merkezinde. Terminal havalimanına yakın.',
     questions:[
       {q:'Şehrin nasıl tarif edildiği?', opts:['Büyük ve güzel','Küçük ve sessiz','Büyük ve kalabalık','Küçük ve güzel'], answer:0, tr:'Şehir nasıl tarif ediliyor?'},
       {q:'Banka nerede?', opts:['Şehir merkezinde','Terminalde','Havalimanında','Pazarda'], answer:0, tr:'Banka nerede?'},
     ]
    },
  ],
};
LESSONS[14] = L14;
