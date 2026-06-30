// ders9.js — Hausa Lesson 9: Health & Emergencies
const L9 = {
  words: [
    {id:'w1', ha:'Asibiti', ro:'a-si-bi-ti', tr:'Hastane',
     tip:'Sağlık hizmeti veren kurum.',
     ctx:'Hastalık ve acil durumlar.',
     examples:[{
       ha:'Kai ni asibiti, don Allah!', ro:'kai ni a-si-bi-ti don al-lah', tr:'Beni hastaneye götür lütfen!',
       bd:[{ro:'Kai ni',tr:'Götür beni',role:'fiil',note:'Taşıma isteği.'},{ro:'asibiti',tr:'hastane',role:'yer',note:'Sağlık yeri.'},{ro:'don Allah',tr:'lütfen',role:'nezaket',note:'Acil istek.'}]
     }]
    },
    {id:'w2', ha:'Likita', ro:'li-ki-ta', tr:'Doktor',
     tip:'Tıp doktoru.',
     ctx:'Sağlık ziyaretleri ve acil durumlar.',
     examples:[{
       ha:'Ina so ganin likita.', ro:'i-na so ga-nin li-ki-ta', tr:'Doktoru görmek istiyorum.',
       bd:[{ro:'Ina so ganin',tr:'Görmek istiyorum',role:'fiil',note:'İstek.'},{ro:'likita',tr:'doktor',role:'kişi',note:'Sağlık uzmanı.'}]
     }]
    },
    {id:'w3', ha:'Jinya', ro:'jin-ya', tr:'Hemşire',
     tip:'Tıp hemşiresi.',
     ctx:'Hastane personeli.',
     examples:[{
       ha:'Jinya ta zo yanzu.', ro:'jin-ya ta zo yan-zu', tr:'Hemşire şimdi geldi.',
       bd:[{ro:'Jinya',tr:'Hemşire',role:'kişi',note:'Sağlık personeli.'},{ro:'ta zo yanzu',tr:'şimdi geldi',role:'fiil',note:'Geliş.'}]
     }]
    },
    {id:'w4', ha:'Magani', ro:'ma-ga-ni', tr:'İlaç / Tedavi',
     tip:'Hastalık için ilaç ve tedavi.',
     ctx:'Eczane ve tedavi.',
     examples:[{
       ha:'Ina so magani ga ciwon kai.', ro:'i-na so ma-ga-ni ga ci-won kai', tr:'Baş ağrısı için ilaç istiyorum.',
       bd:[{ro:'Ina so magani',tr:'İlaç istiyorum',role:'istek',note:'İlaç talebi.'},{ro:'ga ciwon kai',tr:'baş ağrısı için',role:'neden',note:'Hastalık nedeni.'}]
     }]
    },
    {id:'w5', ha:'Ciwon kai', ro:'ci-won kai', tr:'Baş ağrısı',
     tip:'"Ciwo" = ağrı/hastalık. "Kai" = baş.',
     ctx:'Semptom bildirimi.',
     examples:[{
       ha:'Ina jin ciwon kai.', ro:'i-na jin ci-won kai', tr:'Başım ağrıyor.',
       bd:[{ro:'Ina jin',tr:'Hissediyorum',role:'fiil',note:'Duygu/his.'},{ro:'ciwon kai',tr:'baş ağrısı',role:'semptom',note:'Ağrı yeri.'}]
     }]
    },
    {id:'w6', ha:'Ciwon ciki', ro:'ci-won ci-ki', tr:'Karın ağrısı',
     tip:'"Ciki" = karın/içi.',
     ctx:'Mide ve karın şikâyetleri.',
     examples:[{
       ha:'Ina jin ciwon ciki sosai.', ro:'i-na jin ci-won ci-ki so-sai', tr:'Karnım çok ağrıyor.',
       bd:[{ro:'Ina jin ciwon ciki',tr:'Karnım ağrıyor',role:'semptom',note:'Karın ağrısı.'},{ro:'sosai',tr:'çok',role:'pekiştirme',note:'Şiddet.'}]
     }]
    },
    {id:'w7', ha:'Zazzaɓi', ro:'zaz-za-bi', tr:'Ateş (hastalık)',
     tip:'Vücut sıcaklığının yükselmesi.',
     ctx:'Ateş semptomu bildirimi.',
     examples:[{
       ha:'Ina da zazzaɓi.', ro:'i-na da zaz-za-bi', tr:'Ateşim var.',
       bd:[{ro:'Ina da',tr:'Var / Sahip',role:'fiil',note:'Sahip olmak.'},{ro:'zazzaɓi',tr:'ateş',role:'semptom',note:'Yüksek sıcaklık.'}]
     }]
    },
    {id:'w8', ha:'Jini', ro:'ji-ni', tr:'Kan',
     tip:'Kan ve kanama.',
     ctx:'Yaralanma ve acil durumlar.',
     examples:[{
       ha:'Yana zubar da jini.', ro:'ya-na zu-bar da ji-ni', tr:'Kan akıyor.',
       bd:[{ro:'Yana zubar da jini',tr:'Kan akıyor',role:'fiil',note:'Kanama.'}]
     }]
    },
    {id:'w9', ha:'Rauni', ro:'rau-ni', tr:'Yara / Bere',
     tip:'Beden yaralanması.',
     ctx:'Yaralanma durumları.',
     examples:[{
       ha:'Ina da rauni a kafar.', ro:'i-na da rau-ni a ka-far', tr:'Bacağımda yara var.',
       bd:[{ro:'Ina da rauni',tr:'Yaramız var',role:'bilgi',note:'Yaralanma.'},{ro:'a kafar',tr:'bacağımda',role:'yer',note:'Vücut bölümü.'}]
     }]
    },
    {id:'w10', ha:'Ina ciwo', ro:'i-na ci-wo', tr:'Hastayım / Ağrım var',
     tip:'Genel hastalık bildirimi.',
     ctx:'Doktora şikâyet bildirirken.',
     examples:[{
       ha:'Ina ciwo sosai, don Allah taimaka.', ro:'i-na ci-wo so-sai don al-lah tai-ma-ka', tr:'Çok hastayım, lütfen yardım et.',
       bd:[{ro:'Ina ciwo sosai',tr:'Çok hastayım',role:'bilgi',note:'Hastalık bildirimi.'},{ro:'don Allah taimaka',tr:'lütfen yardım et',role:'istek',note:'Acil yardım.'}]
     }]
    },
    {id:'w11', ha:'Taimaka mini!', ro:'tai-ma-ka mi-ni', tr:'Bana yardım et! / İmdat!',
     tip:'Acil yardım çağrısı.',
     ctx:'Acil ve tehlikeli durumlarda.',
     examples:[{
       ha:'Taimaka mini! Na fado!', ro:'tai-ma-ka mi-ni na fa-do', tr:'Yardım et! Düştüm!',
       bd:[{ro:'Taimaka mini',tr:'Yardım et bana',role:'acil',note:'İmdat çağrısı.'},{ro:'Na fado',tr:'Düştüm',role:'fiil',note:'Düşme.'}]
     }]
    },
    {id:'w12', ha:'Kira likita', ro:'ki-ra li-ki-ta', tr:'Doktoru ara',
     tip:'Acil durumda doktor çağrısı.',
     ctx:'Yardım koordinasyonu.',
     examples:[{
       ha:'Kira likita nan da nan!', ro:'ki-ra li-ki-ta nan da nan', tr:'Hemen doktoru ara!',
       bd:[{ro:'Kira likita',tr:'Doktoru ara',role:'emir',note:'Acil çağrı.'},{ro:'nan da nan',tr:'hemen',role:'zaman',note:'Anlık.'}]
     }]
    },
    {id:'w13', ha:"'Yan sanda", ro:'yan san-da', tr:'Polis',
     tip:"Güvenlik güçleri. 'Yan sanda' = sopacı çocukları.",
     ctx:'Güvenlik sorunları ve acil durumlar.',
     examples:[{
       ha:"Kira 'yan sanda!", ro:"ki-ra yan san-da", tr:'Polisi ara!',
       bd:[{ro:"Kira 'yan sanda",tr:'Polisi ara',role:'emir',note:'Güvenlik çağrısı.'}]
     }]
    },
    {id:'w14', ha:'Gobara', ro:'go-ba-ra', tr:'Yangın',
     tip:'Ateş yangını ve yangın durumu.',
     ctx:'Yangın acil durumu.',
     examples:[{
       ha:'Gobara! Ku gudu!', ro:'go-ba-ra ku gu-du', tr:'Yangın var! Kaçın!',
       bd:[{ro:'Gobara',tr:'Yangın',role:'uyarı',note:'Acil uyarı.'},{ro:'Ku gudu',tr:'Kaçın',role:'emir',note:'Güvenlik emri.'}]
     }]
    },
    {id:'w15', ha:'Ambalans', ro:'am-ba-lans', tr:'Ambulans',
     tip:'Acil tıbbi taşıma aracı.',
     ctx:'Tıbbi acil durumlar.',
     examples:[{
       ha:'Kira ambalans nan da nan!', ro:'ki-ra am-ba-lans nan da nan', tr:'Hemen ambulans çağır!',
       bd:[{ro:'Kira ambalans',tr:'Ambulans çağır',role:'emir',note:'Acil servis.'},{ro:'nan da nan',tr:'hemen',role:'zaman',note:'Anlık aciliyet.'}]
     }]
    },
    {id:'w16', ha:'Na fado', ro:'na fa-do', tr:'Düştüm',
     tip:'Yere düşme bildirimi.',
     ctx:'Yaralanma ve acil durumlar.',
     examples:[{
       ha:'Na fado a bisa matakai.', ro:'na fa-do a bi-sa ma-ta-kai', tr:'Merdivenden düştüm.',
       bd:[{ro:'Na fado',tr:'Düştüm',role:'fiil',note:'Düşme bildirimi.'},{ro:'a bisa matakai',tr:'merdivenden',role:'yer',note:'Düşme yeri.'}]
     }]
    },
    {id:'w17', ha:'Ina jin zafi', ro:'i-na jin za-fi', tr:'Ağrı hissediyorum',
     tip:'"Zafi" = sıcaklık ve ağrı. Ağrı bildirimi.',
     ctx:'Doktora semptom anlatımı.',
     examples:[{
       ha:'Ina jin zafi a bayan.', ro:'i-na jin za-fi a ba-yan', tr:'Sırtımda ağrı hissediyorum.',
       bd:[{ro:'Ina jin zafi',tr:'Ağrı hissediyorum',role:'semptom',note:'Ağrı bildirimi.'},{ro:'a bayan',tr:'sırtımda',role:'yer',note:'Vücut bölümü.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:"Hausa'da Hastalık Bildirimi", title_en:'Reporting Illness in Hausa',
     explanation:"'Ina jin ciwo' = ağrı hissediyorum. 'Ina da + hastalık' = sahip olmak (ateş var). Semptomları bildirmek için bu kalıplar kullanılır.",
     table:[
       {pronoun:'Genel hastalık', form:'Ina ciwo', example:'Ina ciwo yau.', tr:'Bugün hastayım.'},
       {pronoun:'Ağrı', form:'Ina jin ciwo + yer', example:'Ina jin ciwon kai.', tr:'Başım ağrıyor.'},
       {pronoun:'Ateş', form:'Ina da zazzaɓi', example:'Ina da zazzaɓi da rana.', tr:'Öğleden beri ateşim var.'},
       {pronoun:'Yara', form:'Ina da rauni + yer', example:'Ina da rauni a hannu.', tr:'Elimde yara var.'},
       {pronoun:'Kanama', form:'Yana/tana zubar jini', example:'Yana zubar da jini.', tr:'Kan akıyor.'},
     ],
     note:"'Ina jin' = hissediyorum. 'Ina da' = var/sahip. Bu iki kalıp arasındaki farkı iyi öğrenin."
    },
    {id:'g2', title:'Acil Durum İfadeleri', title_en:'Emergency Phrases',
     explanation:"Acil durumlarda kullanılan temel ifadeler. Kısa, net ve anlaşılır olmak önemlidir.",
     table:[
       {pronoun:'İmdat', form:'Taimaka!', example:'Taimaka mini!', tr:'Bana yardım et!'},
       {pronoun:'Doktor', form:'Kira likita', example:'Kira likita nan da nan!', tr:'Hemen doktoru ara!'},
       {pronoun:'Polis', form:"Kira 'yan sanda", example:"Kira 'yan sanda!", tr:'Polisi ara!'},
       {pronoun:'Ambulans', form:'Kira ambalans', example:'Kira ambalans!', tr:'Ambulans çağır!'},
       {pronoun:'Yangın', form:'Gobara!', example:'Gobara! Ku gudu!', tr:'Yangın! Kaçın!'},
     ],
     note:"Acil durumlarda 'nan da nan' (hemen) kelimesi aciliyeti vurgular. Her zaman açık ve net konuşun."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Ina ciwo, ina so ganin likita.', tr:'Hastayım, doktor görmek istiyorum.', prompt:'Doktora git'},
    {id:'sp2', ha:'Ina jin ciwon kai sosai.', tr:'Başım çok ağrıyor.', prompt:'Semptom bildir'},
    {id:'sp3', ha:'Ina da zazzaɓi.', tr:'Ateşim var.', prompt:'Ateş bildir'},
    {id:'sp4', ha:'Taimaka mini! Na fado!', tr:'Yardım et! Düştüm!', prompt:'Acil yardım çağır'},
    {id:'sp5', ha:'Kira ambalans nan da nan!', tr:'Hemen ambulans çağır!', prompt:'Ambulans iste'},
    {id:'sp6', ha:'Ina so magani ga ciwon ciki.', tr:'Karın ağrısı için ilaç istiyorum.', prompt:'İlaç iste'},
    {id:'sp7', ha:'Ina da rauni a kafar.', tr:'Bacağımda yara var.', prompt:'Yarayı bildir'},
  ],
  dialogues: [
    {id:'d1', title:'Asibiti — Hastane Ziyareti', title_tr:'Doktor Ziyareti Diyaloğu',
     lines:[
       {speaker:'A', gender:'m', ha:'Ina ciwo. Ina so ganin likita.', tr:'Hastayım. Doktoru görmek istiyorum.',
        gramNote:'Hastalık bildirimi.',
        bd:[{ro:'Ina ciwo',tr:'Hastayım',role:'bilgi',note:'Hastalık.'},{ro:'Ina so ganin likita',tr:'Doktor görmek istiyorum',role:'istek',note:'Tıbbi yardım.'}]},
       {speaker:'B', gender:'f', ha:'Me yake damunka?', tr:'Seni ne rahatsız ediyor?',
        gramNote:'Semptom sorusu.',
        bd:[{ro:'Me yake',tr:'Ne oluyor',role:'soru',note:'Neden sorusu.'},{ro:'damunka',tr:'seni rahatsız ediyor',role:'fiil',note:'Rahatsızlık.'}]},
       {speaker:'A', gender:'m', ha:'Ina jin ciwon kai da zazzaɓi. Na fara jin haka jiya.', tr:'Baş ağrım ve ateşim var. Dün başladım hissetmeye.',
        gramNote:'Semptom ve başlangıç zamanı.',
        bd:[{ro:'Ina jin ciwon kai',tr:'Baş ağrım var',role:'semptom',note:'Ağrı.'},{ro:'da zazzaɓi',tr:'ve ateş',role:'ek semptom',note:'Ateş.'},{ro:'Na fara jin haka jiya',tr:'Dün başladım',role:'zaman',note:'Başlangıç.'}]},
       {speaker:'B', gender:'f', ha:'To, zan baka magani. Sha ruwa mai yawa.', tr:'Peki, sana ilaç vereceğim. Çok su iç.',
        gramNote:'Tedavi önerisi.',
        bd:[{ro:'Zan baka magani',tr:'Sana ilaç vereceğim',role:'tedavi',note:'İlaç verilmesi.'},{ro:'Sha ruwa mai yawa',tr:'Çok su iç',role:'tavsiye',note:'Hidrasyon.'}]},
       {speaker:'A', gender:'m', ha:'Nagode, likita.', tr:'Teşekkür ederim, doktor.',
        gramNote:'Teşekkür.',
        bd:[{ro:'Nagode',tr:'Teşekkürler',role:'nezaket',note:'Minnet.'},{ro:'likita',tr:'doktor',role:'hitap',note:'Meslek adıyla hitap.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:'Ina ciwo. Ina jin ciwon ciki da zazzaɓi. Ina da rauni a hannu. Taimaka mini, don Allah.',
     tr:'Hastayım. Karın ağrım ve ateşim var. Elimde yara var. Lütfen bana yardım et.',
     questions:[
       {q:'Hangi semptomlar var?', opts:['Karın ağrısı ve ateş','Baş ağrısı ve ateş','Karın ağrısı ve baş ağrısı','Sadece ateş'], answer:0, tr:'Hangi semptomlar var?'},
       {q:'Ek olarak ne var?', opts:['Elde yara','Bacakta yara','Sırt ağrısı','Kan'], answer:0, tr:'Ek olarak ne var?'},
     ]
    },
  ],
};
LESSONS[9] = L9;
