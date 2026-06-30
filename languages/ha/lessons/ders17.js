// ders17.js — Hausa Lesson 17: Professions & Work
const L17 = {
  words: [
    {id:'w1', ha:'Likita', ro:'li-ki-ta', tr:'Doktor',
     tip:'Tıp doktoru.',
     ctx:'Sağlık ve tıp alanında.',
     examples:[{
       ha:'Sunana Amina, likita ce.', ro:'su-na-na a-mi-na li-ki-ta ce', tr:'Adım Amina, doktorum.',
       bd:[{ro:'Sunana Amina',tr:'Adım Amina',role:'tanıtma',note:'İsim tanıtımı.'},{ro:'likita ce',tr:'doktorum',role:'meslek',note:'Meslek bildirimi.'}]
     }]
    },
    {id:'w2', ha:'Malami', ro:'ma-la-mi', tr:'Öğretmen / Hoca',
     tip:'"Malami" erkek öğretmen, "malama" kadın öğretmen.',
     ctx:'Eğitim ve öğretim.',
     examples:[{
       ha:'Malamar makaranta ta zo.', ro:'ma-la-mar ma-ka-ran-ta ta zo', tr:'Okul öğretmeni geldi.',
       bd:[{ro:'Malamar makaranta',tr:'Okul öğretmeni (kadın)',role:'isim',note:'Kadın öğretmen.'},{ro:'ta zo',tr:'geldi',role:'fiil',note:'Geliş.'}]
     }]
    },
    {id:'w3', ha:'Ɗan sanda', ro:'dan san-da', tr:'Polis memuru',
     tip:'"Ɗan sanda" = sopa çocuğu. Polis.',
     ctx:'Güvenlik ve kamu düzeni.',
     examples:[{
       ha:"'Yan sanda suna tsaron gari.", ro:'yan san-da su-na tsa-ron ga-ri', tr:'Polisler şehri koruyor.',
       bd:[{ro:"'Yan sanda",tr:'Polisler',role:'isim',note:'Polis çoğulu.'},{ro:'suna tsaron gari',tr:'şehri koruyor',role:'fiil',note:'Koruma görevi.'}]
     }]
    },
    {id:'w4', ha:'Soja', ro:'so-ja', tr:'Asker',
     tip:'Ordu mensubu.',
     ctx:'Askeri hizmet.',
     examples:[{
       ha:'Soja yana aiki da ƙarfi.', ro:'so-ja ya-na ai-ki da kar-fi', tr:'Asker güçlü çalışıyor.',
       bd:[{ro:'Soja',tr:'Asker',role:'isim',note:'Askeri kişi.'},{ro:'yana aiki da ƙarfi',tr:'güçlü çalışıyor',role:'fiil+sıfat',note:'Çalışma niteliği.'}]
     }]
    },
    {id:'w5', ha:'Mai gida', ro:'mai gi-da', tr:'Çiftçi / Ev sahibi',
     tip:'"Mai gida" ev sahibi veya çiftçi anlamına gelir.',
     ctx:'Tarım ve ev yönetimi.',
     examples:[{
       ha:'Mai gida yana gonar kowace safiya.', ro:'mai gi-da ya-na go-nar ko-wa-ce sa-fi-ya', tr:'Çiftçi her sabah tarlada.',
       bd:[{ro:'Mai gida',tr:'Çiftçi/Ev sahibi',role:'isim',note:'Meslek.'},{ro:'yana gonar kowace safiya',tr:'her sabah tarlada',role:'rutin',note:'Günlük rutin.'}]
     }]
    },
    {id:'w6', ha:'Falla', ro:'fal-la', tr:'Kasap',
     tip:'Et kesen ve satan kişi.',
     ctx:'Et alışverişi ve kasaplık.',
     examples:[{
       ha:'Na saye nama daga falla.', ro:'na sa-ye na-ma da-ga fal-la', tr:'Kasaptan et aldım.',
       bd:[{ro:'Na saye nama',tr:'Et aldım',role:'fiil',note:'Satın alma.'},{ro:'daga falla',tr:'kasaptan',role:'kaynak',note:'Satıcı.'}]
     }]
    },
    {id:'w7', ha:'Ɗankasuwa', ro:'dan-ka-su-wa', tr:'Tüccar / Esnaf',
     tip:'"Ɗankasuwa" = pazar kişisi. Tüccar.',
     ctx:'Ticaret ve alışveriş.',
     examples:[{
       ha:'Ɗankasuwa mai hankali ya samu kuɗi.', ro:'dan-ka-su-wa mai han-ka-li ya sa-mu ku-di', tr:'Akıllı tüccar para kazandı.',
       bd:[{ro:'Ɗankasuwa mai hankali',tr:'Akıllı tüccar',role:'isim+sıfat',note:'Tüccar niteliği.'},{ro:'ya samu kuɗi',tr:'para kazandı',role:'fiil',note:'Kazanç.'}]
     }]
    },
    {id:'w8', ha:'Mai saƙa', ro:'mai sa-ka', tr:'Dokumacı',
     tip:'Kumaş ve bez dokuyan kişi. Hausa geleneğinde önemli meslek.',
     ctx:'Geleneksel dokumacılık.',
     examples:[{
       ha:'Mai saƙa ya yi riga mai kyau.', ro:'mai sa-ka ya yi ri-ga mai kya-u', tr:'Dokumacı güzel kaftan yaptı.',
       bd:[{ro:'Mai saƙa',tr:'Dokumacı',role:'isim',note:'Meslek.'},{ro:'ya yi riga mai kyau',tr:'güzel kaftan yaptı',role:'fiil',note:'Üretim.'}]
     }]
    },
    {id:'w9', ha:'Mai ƙira', ro:'mai ki-ra', tr:'Demirci',
     tip:'Metal işleyen ve alet yapan kişi.',
     ctx:'Geleneksel zanaatkârlık.',
     examples:[{
       ha:'Mai ƙira ya ƙera makamai.', ro:'mai ki-ra ya ke-ra ma-ka-mai', tr:'Demirci silah yaptı.',
       bd:[{ro:'Mai ƙira',tr:'Demirci',role:'isim',note:'Meslek.'},{ro:'ya ƙera makamai',tr:'silah yaptı',role:'fiil',note:'Üretim.'}]
     }]
    },
    {id:'w10', ha:'Matatse', ro:'ma-tat-se', tr:'Terzi',
     tip:'Kıyafet diken ve tamir eden kişi.',
     ctx:'Giyim ve terzilik.',
     examples:[{
       ha:'Matatse ya dinka rigar.', ro:'ma-tat-se ya din-ka ri-gar', tr:'Terzi kaftanı dikti.',
       bd:[{ro:'Matatse',tr:'Terzi',role:'isim',note:'Meslek.'},{ro:'ya dinka rigar',tr:'kaftanı dikti',role:'fiil',note:'Dikiş eylemi.'}]
     }]
    },
    {id:'w11', ha:'Ɗan jarida', ro:'dan ja-ri-da', tr:'Gazeteci',
     tip:'"Ɗan jarida" = gazete kişisi. Gazeteci/muhabir.',
     ctx:'Medya ve habercilik.',
     examples:[{
       ha:'Ɗan jarida ya rubuta labari.', ro:'dan ja-ri-da ya ru-bu-ta la-ba-ri', tr:'Gazeteci haber yazdı.',
       bd:[{ro:'Ɗan jarida',tr:'Gazeteci',role:'isim',note:'Meslek.'},{ro:'ya rubuta labari',tr:'haber yazdı',role:'fiil',note:'Gazetecilik eylemi.'}]
     }]
    },
    {id:'w12', ha:'Lauya', ro:'lau-ya', tr:'Avukat',
     tip:'Hukuk uzmanı.',
     ctx:'Hukuki hizmetler.',
     examples:[{
       ha:'Lauya ya taimake shi a kotu.', ro:'lau-ya ya tai-ma-ke shi a ko-tu', tr:'Avukat onu mahkemede savundu.',
       bd:[{ro:'Lauya',tr:'Avukat',role:'isim',note:'Meslek.'},{ro:'ya taimake shi a kotu',tr:'mahkemede savundu',role:'fiil',note:'Hukuki yardım.'}]
     }]
    },
    {id:'w13', ha:'Akawu', ro:'a-ka-wu', tr:'Muhasebeci',
     tip:'Hesap ve muhasebe uzmanı.',
     ctx:'Mali işlemler.',
     examples:[{
       ha:'Akawu na banki ya yi aiki.', ro:'a-ka-wu na ban-ki ya yi ai-ki', tr:'Bankanın muhasebecisi çalışıyor.',
       bd:[{ro:'Akawu na banki',tr:'Bankanın muhasebecisi',role:'isim',note:'Meslek ve işyeri.'},{ro:'ya yi aiki',tr:'çalışıyor',role:'fiil',note:'Çalışma.'}]
     }]
    },
    {id:'w14', ha:'Direba', ro:'di-re-ba', tr:'Sürücü',
     tip:'Araç sürücüsü. İngilizceden alıntı.',
     ctx:'Ulaşım ve taşıma.',
     examples:[{
       ha:'Direba ya kai mu tasha.', ro:'di-re-ba ya kai mu ta-sha', tr:'Sürücü bizi terminale götürdü.',
       bd:[{ro:'Direba',tr:'Sürücü',role:'isim',note:'Meslek.'},{ro:'ya kai mu tasha',tr:'bizi terminale götürdü',role:'fiil',note:'Taşıma.'}]
     }]
    },
    {id:'w15', ha:'Injiniya', ro:'in-ji-ni-ya', tr:'Mühendis',
     tip:'Mühendislik uzmanı.',
     ctx:'Teknik ve inşaat alanında.',
     examples:[{
       ha:'Injiniya ta gina gadoji.', ro:'in-ji-ni-ya ta gi-na ga-do-ji', tr:'Mühendis (kadın) köprüler inşa etti.',
       bd:[{ro:'Injiniya ta gina',tr:'Mühendis inşa etti',role:'fiil',note:'İnşaat eylemi.'},{ro:'gadoji',tr:'köprüler',role:'nesne',note:'İnşa edilen.'}]
     }]
    },
    {id:'w16', ha:"Ma'aikaci", ro:'ma-ai-ka-ci', tr:'Çalışan / İşçi',
     tip:'Genel çalışan ve işçi kelimesi.',
     ctx:'Genel iş ortamı.',
     examples:[{
       ha:"Ma'aikata suna zuwa aiki da safe.", ro:"ma-ai-ka-ta su-na zu-wa ai-ki da sa-fi-ya", tr:'İşçiler sabah işe geliyor.',
       bd:[{ro:"Ma'aikata",tr:'İşçiler (çoğul)',role:'isim',note:'İşçi çoğulu.'},{ro:'suna zuwa aiki da safe',tr:'sabah işe geliyor',role:'rutin',note:'Günlük rutin.'}]
     }]
    },
    {id:'w17', ha:'Ƙanzo', ro:'kan-zo', tr:'Berber',
     tip:'Saç kesen berber.',
     ctx:'Kişisel bakım hizmetleri.',
     examples:[{
       ha:'Na je wurin ƙanzo.', ro:'na je wu-rin kan-zo', tr:'Berbere gittim.',
       bd:[{ro:'Na je wurin ƙanzo',tr:'Berbere gittim',role:'fiil+yer',note:'Gitme.'}]
     }]
    },
    {id:'w18', ha:'Mai dafa', ro:'mai da-fa', tr:'Aşçı / Şef',
     tip:'"Mai dafa" = pişiren kişi. Aşçı.',
     ctx:'Yemek pişirme ve mutfak.',
     examples:[{
       ha:'Mai dafa na otal ya dafa abinci mai dadi.', ro:'mai da-fa na o-tal ya da-fa a-bin-ci mai da-di', tr:'Otel aşçısı lezzetli yemek pişirdi.',
       bd:[{ro:'Mai dafa na otal',tr:'Otel aşçısı',role:'isim',note:'Meslek ve işyeri.'},{ro:'ya dafa abinci mai dadi',tr:'lezzetli yemek pişirdi',role:'fiil',note:'Pişirme.'}]
     }]
    },
    {id:'w19', ha:'Mai kula', ro:'mai ku-la', tr:'Bakıcı / Sorumlu',
     tip:'"Mai kula" = gözeten kişi. Bakıcı veya sorumlu.',
     ctx:'Bakım ve gözetim.',
     examples:[{
       ha:'Mai kula na yara yana aiki.', ro:'mai ku-la na ya-ra ya-na ai-ki', tr:'Çocuk bakıcısı çalışıyor.',
       bd:[{ro:'Mai kula na yara',tr:'Çocuk bakıcısı',role:'isim',note:'Bakım mesleği.'},{ro:'yana aiki',tr:'çalışıyor',role:'fiil',note:'Aktif çalışma.'}]
     }]
    },
    {id:'w20', ha:'Mai titaf', ro:'mai ti-taf', tr:'Yol işçisi / Süpürgeci',
     tip:'"Mai titi" cadde çalışanı. Temizlik ve bakım işçisi.',
     ctx:'Kamu hizmetleri.',
     examples:[{
       ha:'Mai titi yana tsaftace gari.', ro:'mai ti-ti ya-na tsaf-ta-ce ga-ri', tr:'Temizlik işçisi şehri temizliyor.',
       bd:[{ro:'Mai titi',tr:'Temizlik işçisi',role:'isim',note:'Meslek.'},{ro:'yana tsaftace gari',tr:'şehri temizliyor',role:'fiil',note:'Temizlik görevi.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:'Meslek Cümleleri: Ne + Meslek', title_en:'Profession Sentences: He/She is a...',
     explanation:"Meslek bildirirken 'ne/ce' (erkek/kadın) kullanılır: 'Likita ne' = doktor (erkek). 'Likita ce' = doktor (kadın).",
     table:[
       {pronoun:'Erkek meslek', form:'isim + ne', example:'Malami ne.', tr:'Öğretmendir (erkek).'},
       {pronoun:'Kadın meslek', form:'isim + ce', example:'Malama ce.', tr:'Öğretmendir (kadın).'},
       {pronoun:'Ben (erkek)', form:'Ni + meslek + ne', example:'Ni likita ne.', tr:'Ben doktorum (erkek).'},
       {pronoun:'Ben (kadın)', form:'Ni + meslek + ce', example:'Ni malamar makaranta ce.', tr:'Ben okul öğretmeniyim.'},
       {pronoun:'Soru', form:'Wane aiki kake yi?', example:'Wane aiki kake yi?', tr:'Ne iş yapıyorsun?'},
     ],
     note:"'Wane aiki kake yi?' = Ne iş yapıyorsun? (erkeğe). Kadına: 'Wane aiki kike yi?'"
    },
    {id:'g2', title:"'Mai' ile Meslek Oluşturma", title_en:"Forming Professions with 'Mai'",
     explanation:"'Mai' = sahip olan. 'Mai + eylem/nesne' şeklinde meslek oluşturulur: 'Mai dafa' = pişiren = aşçı.",
     table:[
       {pronoun:'Pişirici', form:'mai dafa', example:'Mai dafa na otal.', tr:'Otel aşçısı.'},
       {pronoun:'Satıcı', form:'mai sayarwa', example:'Mai sayarwa a kasuwa.', tr:'Pazardaki satıcı.'},
       {pronoun:'Sürücü', form:'mai tuki', example:'Mai tuki mota.', tr:'Araba sürücüsü.'},
       {pronoun:'Bakıcı', form:'mai kula', example:'Mai kula na gida.', tr:'Ev bakıcısı.'},
     ],
     note:"'Mai' yapısı çok üretkendir. Neredeyse her fiil veya isme 'mai' eklenerek meslek türetilebilir."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Ni malami ne.', tr:'Ben öğretmenim.', prompt:'Mesleğini tanıt (erkek)'},
    {id:'sp2', ha:'Wane aiki kike yi?', tr:'Ne iş yapıyorsun? (kadına)', prompt:'Meslek sor'},
    {id:'sp3', ha:"Ubana likita ne, uwata malama ce.", tr:'Babam doktor, annem öğretmen.', prompt:'Aile mesleklerini söyle'},
    {id:'sp4', ha:'Direba ya kai mu tasha.', tr:'Sürücü bizi terminale götürdü.', prompt:'Sürücü hakkında anlat'},
    {id:'sp5', ha:'Na je wurin ƙanzo.', tr:'Berbere gittim.', prompt:'Berber ziyareti anlat'},
    {id:'sp6', ha:"Ma'aikata suna zuwa aiki da safe.", tr:'İşçiler sabah işe geliyor.', prompt:'İşçileri anlat'},
  ],
  dialogues: [
    {id:'d1', title:'Tanışma: Meslekler', title_tr:'Meslek Tanışma Diyaloğu',
     lines:[
       {speaker:'A', gender:'m', ha:'Sunana Musa. Ni malami ne a makaranta. Kuma kai?', tr:'Adım Musa. Ben okulda öğretmenim. Ya sen?',
        gramNote:'Kendini tanıtma ve soru.',
        bd:[{ro:'Ni malami ne',tr:'Ben öğretmenim',role:'meslek',note:'Meslek bildirimi.'},{ro:'a makaranta',tr:'okulda',role:'yer',note:'İşyeri.'},{ro:'Kuma kai',tr:'Ya sen',role:'soru',note:'Karşılıklı soru.'}]},
       {speaker:'B', gender:'f', ha:'Sunana Halima. Ni likita ce a asibiti.', tr:'Adım Halima. Ben hastanede doktorum.',
        gramNote:'Kadın meslek bildirimi.',
        bd:[{ro:'Ni likita ce',tr:'Ben doktorum (kadın)',role:'meslek',note:'Kadın mesleği.'},{ro:'a asibiti',tr:'hastanede',role:'yer',note:'İşyeri.'}]},
       {speaker:'A', gender:'m', ha:'Mashahuri! Wane irin likita ce?', tr:'Harika! Ne tür doktorsunuz?',
        gramNote:'Uzmanlık sorusu.',
        bd:[{ro:'Mashahuri',tr:'Harika/Ünlü',role:'beğeni',note:'Olumlu tepki.'},{ro:'Wane irin likita ce',tr:'Ne tür doktor',role:'soru',note:'Uzmanlık.'}]},
       {speaker:'B', gender:'f', ha:'Likitar yara ce ni. Ina so taimaka wa yara.', tr:'Çocuk doktoruyum. Çocuklara yardım etmeyi seviyorum.',
        gramNote:'Uzmanlık ve motivasyon.',
        bd:[{ro:'Likitar yara ce ni',tr:'Çocuk doktoruyum',role:'uzmanlık',note:'Branş.'},{ro:'Ina so taimaka wa yara',tr:'Çocuklara yardım etmeyi seviyorum',role:'motivasyon',note:'Meslek sebebi.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:"Sunana Ibrahim. Ni direba ne, ina kai fasinja a gari. Uwata malama ce. Ubana ɗankasuwa ne a kasuwa.",
     tr:"Adım İbrahim. Ben şehirde yolcu taşıyan bir sürücüyüm. Annem öğretmen. Babam pazarda tüccar.",
     questions:[
       {q:"İbrahim'in mesleği ne?", opts:['Sürücü','Öğretmen','Tüccar','Doktor'], answer:0, tr:"İbrahim'in mesleği ne?"},
       {q:'Annesinin mesleği ne?', opts:['Öğretmen','Doktor','Tüccar','Hemşire'], answer:0, tr:'Annesinin mesleği ne?'},
     ]
    },
  ],
};
LESSONS[17] = L17;
