// ders3.js — Hausa Lesson 3: Time & Date
const L3 = {
  words: [
    {id:'w1', ha:'Awa nawa ce?', ro:'a-wa na-wa ce', tr:'Saat kaç?',
     tip:'"Awa" saat demektir. "Nawa" ne kadar/kaç.',
     ctx:'Saat sormak için kullanılır.',
     examples:[{
       ha:'Awa nawa ce yanzu?', ro:'a-wa na-wa ce yan-zu', tr:'Şu an saat kaç?',
       bd:[{ro:'Awa',tr:'Saat',role:'isim',note:'Zaman birimi.'},{ro:'nawa ce',tr:'kaç (kadın)',role:'soru',note:'Soru formu.'},{ro:'yanzu',tr:'şimdi',role:'zaman',note:'Zaman zarfı.'}]
     }]
    },
    {id:'w2', ha:'Safiya', ro:'sa-fi-ya', tr:'Sabah',
     tip:'Güneşin doğuşundan öğlene kadar.',
     ctx:'Sabah selamı ve zaman belirtiminde.',
     examples:[{
       ha:'Da safiya na tashi.', ro:'da sa-fi-ya na ta-shi', tr:'Sabah erken kalktım.',
       bd:[{ro:'Da safiya',tr:'Sabahın erkeninde',role:'zaman',note:'Sabah vakti.'},{ro:'na tashi',tr:'kalktım',role:'fiil',note:'Kalkmak.'}]
     }]
    },
    {id:'w3', ha:'Rana / Yamma', ro:'ra-na / yam-ma', tr:'Gündüz / Öğleden sonra',
     tip:'"Rana" gün ve öğle, "Yamma" öğle sonrası.',
     ctx:'Gün ortası ve öğleden sonra zaman bildirimi.',
     examples:[{
       ha:'Da rana muke ci abinci.', ro:'da ra-na mu-ke ci a-bin-ci', tr:'Öğle yemeğini gündüz yiyoruz.',
       bd:[{ro:'Da rana',tr:'Gündüz',role:'zaman',note:'Öğle vakti.'},{ro:'muke ci abinci',tr:'yemek yiyoruz',role:'fiil',note:'Yemek yemek.'}]
     }]
    },
    {id:'w4', ha:'Maraice', ro:'ma-rai-ce', tr:'Akşam',
     tip:'Güneş batımından sonra gece olmadan öncesi.',
     ctx:'Akşam selamı ve zaman belirtiminde.',
     examples:[{
       ha:'Da maraice sai mun hadu.', ro:'da ma-rai-ce sai mun ha-du', tr:'Akşam buluşacağız.',
       bd:[{ro:'Da maraice',tr:'Akşam',role:'zaman',note:'Akşam vakti.'},{ro:'mun hadu',tr:'buluşacağız',role:'fiil',note:'Buluşmak.'}]
     }]
    },
    {id:'w5', ha:'Dare', ro:'da-re', tr:'Gece',
     tip:'Karanlık saatler, gece vakti.',
     ctx:'Gece aktiviteleri ve uyku zamanı.',
     examples:[{
       ha:'Da dare nake kwana.', ro:'da da-re na-ke kwa-na', tr:'Geceleri uyurum.',
       bd:[{ro:'Da dare',tr:'Gece',role:'zaman',note:'Gece vakti.'},{ro:'nake kwana',tr:'uyurum',role:'fiil',note:'Uyumak.'}]
     }]
    },
    {id:'w6', ha:'Yau', ro:'yau', tr:'Bugün',
     tip:'Şimdiki günü ifade eder.',
     ctx:'Bugünkü olayları anlatırken.',
     examples:[{
       ha:'Yau rana Litinin ce.', ro:'yau ra-na li-ti-nin ce', tr:'Bugün Pazartesi.',
       bd:[{ro:'Yau',tr:'Bugün',role:'zaman',note:'Şimdiki gün.'},{ro:'rana Litinin ce',tr:'Pazartesi günü',role:'açıklama',note:'Gün adı.'}]
     }]
    },
    {id:'w7', ha:'Gobe', ro:'go-be', tr:'Yarın',
     tip:'Bir sonraki günü ifade eder.',
     ctx:'Gelecek planlarından bahsederken.',
     examples:[{
       ha:'Gobe zan tafi kasuwa.', ro:'go-be zan ta-fi ka-su-wa', tr:'Yarın pazara gideceğim.',
       bd:[{ro:'Gobe',tr:'Yarın',role:'zaman',note:'Gelecek gün.'},{ro:'zan tafi kasuwa',tr:'pazara gideceğim',role:'fiil',note:'Gitmek.'}]
     }]
    },
    {id:'w8', ha:'Jiya', ro:'ji-ya', tr:'Dün',
     tip:'Geçmiş günü ifade eder.',
     ctx:'Geçmiş olaylardan bahsederken.',
     examples:[{
       ha:'Jiya na je asibitin.', ro:'ji-ya na je a-si-bi-tin', tr:'Dün hastaneye gittim.',
       bd:[{ro:'Jiya',tr:'Dün',role:'zaman',note:'Geçmiş gün.'},{ro:'na je asibitin',tr:'hastaneye gittim',role:'fiil',note:'Gitmek.'}]
     }]
    },
    {id:'w9', ha:'Mako', ro:'ma-ko', tr:'Hafta',
     tip:'Yedi günlük zaman birimi.',
     ctx:'Haftalık planlar ve zaman belirleme.',
     examples:[{
       ha:'Mako guda ya wuce.', ro:'ma-ko gu-da ya wu-ce', tr:'Bir hafta geçti.',
       bd:[{ro:'Mako guda',tr:'Bir hafta',role:'zaman',note:'Haftalık birim.'},{ro:'ya wuce',tr:'geçti',role:'fiil',note:'Geçmek.'}]
     }]
    },
    {id:'w10', ha:'Wata', ro:'wa-ta', tr:'Ay (zaman birimi) / Ay (gökyüzü)',
     tip:'"Wata" hem ay (zaman) hem de Ay (gökyüzündeki) anlamına gelir.',
     ctx:'Aylık planlar ve tarih belirleme.',
     examples:[{
       ha:'Wata uku ya wuce.', ro:'wa-ta u-ku ya wu-ce', tr:'Üç ay geçti.',
       bd:[{ro:'Wata uku',tr:'Üç ay',role:'zaman',note:'Aylık birim.'},{ro:'ya wuce',tr:'geçti',role:'fiil',note:'Geçmek.'}]
     }]
    },
    {id:'w11', ha:'Shekara', ro:'she-ka-ra', tr:'Yıl',
     tip:'On iki aylık zaman birimi.',
     ctx:'Yıllık tarihler ve yaş ifadesi.',
     examples:[{
       ha:'Shekarana ashirin da biyar.', ro:'she-ka-ra-na a-shi-rin da bi-yar', tr:'Yirmi beş yaşındayım.',
       bd:[{ro:'Shekarana',tr:'Yaşım',role:'isim',note:'Yıl - benim.'},{ro:'ashirin da biyar',tr:'yirmi beş',role:'sayı',note:'25.'}]
     }]
    },
    {id:'w12', ha:'Lahadi', ro:'la-ha-di', tr:'Pazar (gün)',
     tip:'Haftanın ilk günü.',
     ctx:'Haftalık program yaparken.',
     examples:[{
       ha:'Lahadi hutu ne.', ro:'la-ha-di hu-tu ne', tr:'Pazar tatil günüdür.',
       bd:[{ro:'Lahadi',tr:'Pazar',role:'isim',note:'Haftanın günü.'},{ro:'hutu ne',tr:'tatil',role:'açıklama',note:'İstirahat günü.'}]
     }]
    },
    {id:'w13', ha:'Litinin', ro:'li-ti-nin', tr:'Pazartesi',
     ctx:'Haftalık programda kullanılır.',
     examples:[{
       ha:'Rana Litinin muke aiki.', ro:'ra-na li-ti-nin mu-ke ai-ki', tr:'Pazartesi çalışıyoruz.',
       bd:[{ro:'Rana Litinin',tr:'Pazartesi günü',role:'zaman',note:'Gün adı.'},{ro:'muke aiki',tr:'çalışıyoruz',role:'fiil',note:'Çalışmak.'}]
     }]
    },
    {id:'w14', ha:'Talata', ro:'ta-la-ta', tr:'Salı',
     ctx:'Haftalık programda kullanılır.',
     examples:[{
       ha:'Talata ce yau.', ro:'ta-la-ta ce yau', tr:'Bugün Salı.',
       bd:[{ro:'Talata',tr:'Salı',role:'isim',note:'Gün adı.'},{ro:'ce yau',tr:'bugün',role:'zaman',note:'Şimdiki gün.'}]
     }]
    },
    {id:'w15', ha:'Laraba', ro:'la-ra-ba', tr:'Çarşamba',
     ctx:'Haftalık programda kullanılır.',
     examples:[{
       ha:'Laraba zan je kasuwa.', ro:'la-ra-ba zan je ka-su-wa', tr:'Çarşamba pazara gideceğim.',
       bd:[{ro:'Laraba',tr:'Çarşamba',role:'zaman',note:'Gün adı.'},{ro:'zan je kasuwa',tr:'pazara gideceğim',role:'fiil',note:'Gitmek.'}]
     }]
    },
    {id:'w16', ha:'Alhamis', ro:'al-ha-mis', tr:'Perşembe',
     ctx:'Haftalık programda kullanılır.',
     examples:[{
       ha:'Alhamis gobe ne.', ro:'al-ha-mis go-be ne', tr:'Yarın Perşembe.',
       bd:[{ro:'Alhamis',tr:'Perşembe',role:'isim',note:'Gün adı.'},{ro:'gobe ne',tr:'yarın',role:'zaman',note:'Gelecek gün.'}]
     }]
    },
    {id:'w17', ha:"Juma'a", ro:'ju-ma-a', tr:'Cuma',
     tip:"Müslüman çoğunluğun haftalık ibadet günü. 'Juma'a' Arapçadan gelir.",
     ctx:'Cuma namazı ve haftalık ibadet.',
     examples:[{
       ha:"Juma'a mukan yi sallah.", ro:'ju-ma-a mu-kan yi sal-lah', tr:'Cuma namazı kılarız.',
       bd:[{ro:"Juma'a",tr:'Cuma',role:'isim',note:'Gün adı.'},{ro:'mukan yi sallah',tr:'namaz kılarız',role:'fiil',note:'İbadet etmek.'}]
     }]
    },
    {id:'w18', ha:'Asabar', ro:'a-sa-bar', tr:'Cumartesi',
     ctx:'Haftalık programda kullanılır.',
     examples:[{
       ha:'Asabar rana hutun yara ne.', ro:'a-sa-bar ra-na hu-tun ya-ra ne', tr:'Cumartesi çocukların tatil günü.',
       bd:[{ro:'Asabar',tr:'Cumartesi',role:'isim',note:'Gün adı.'},{ro:'rana hutun yara',tr:'çocukların tatil günü',role:'açıklama',note:'İstirahat.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:'Saat Sorma ve Söyleme', title_en:'Asking and Telling Time',
     explanation:"'Awa nawa ce?' saat sorusudur. Yanıt 'Awa + sayı + ce/ne' şeklinde verilir. Sabah/öğle/akşam eklenerek tam zaman ifade edilir.",
     table:[
       {pronoun:'Soru', form:'Awa nawa ce?', example:'Awa nawa ce yanzu?', tr:'Şu an saat kaç?'},
       {pronoun:'Saat 1', form:"Awa ɗaya ce.", example:'Awa ɗaya ce da safe.', tr:'Sabahın biri.'},
       {pronoun:'Saat 3', form:'Awa uku ce.', example:'Awa uku ce da yamma.', tr:'Öğleden sonra üç.'},
       {pronoun:'Saat 6', form:'Awa shida ce.', example:'Awa shida ce da dare.', tr:'Gece altı.'},
       {pronoun:'Saat 12', form:'Awa goma sha biyu ce.', example:'Awa goma sha biyu ce tsakar rana.', tr:'Öğle on ikisi.'},
     ],
     note:"'Da safe' sabah, 'da yamma' öğleden sonra, 'da maraice' akşam, 'da dare' gece demektir."
    },
    {id:'g2', title:"Hausa'da Günler", title_en:'Days of the Week in Hausa',
     explanation:"Hausa'da haftalık günler çoğunlukla Arapça kökenlidir. 'Rana' (gün) kelimesi günün adından önce gelebilir.",
     table:[
       {pronoun:'Pazar', form:'Lahadi', example:'Yau Lahadi ne.', tr:'Bugün Pazar.'},
       {pronoun:'Pazartesi', form:'Litinin', example:'Gobe Litinin ne.', tr:'Yarın Pazartesi.'},
       {pronoun:'Salı', form:'Talata', example:'Jiya Talata ce.', tr:'Dün Salıydı.'},
       {pronoun:'Çarşamba', form:'Laraba', example:'Laraba zan zo.', tr:'Çarşamba geleceğim.'},
       {pronoun:'Perşembe', form:'Alhamis', example:'Alhamis muke hadu.', tr:'Perşembe buluşacağız.'},
       {pronoun:'Cuma', form:"Juma'a", example:"Juma'a sallah ne.", tr:'Cuma namaz günüdür.'},
       {pronoun:'Cumartesi', form:'Asabar', example:'Asabar bazara ne.', tr:'Cumartesi pazar günüdür.'},
     ],
     note:"'Yau' bugün, 'gobe' yarın, 'jiya' dün demektir. Günleri bu kelimelerle birleştirerek zaman ifadesi oluşturabilirsiniz."
    },
    {id:'g3', title:'Zaman İfadeleri', title_en:'Time Expressions',
     explanation:"Hausa'da geçmiş, şimdi ve gelecek için farklı zaman zarfları kullanılır.",
     table:[
       {pronoun:'Geçmiş', form:'Jiya / Da wuri', example:'Jiya na ci abinci.', tr:'Dün yemek yedim.'},
       {pronoun:'Şimdi', form:'Yanzu / A yanzu', example:'Yanzu ina nan.', tr:'Şimdi buradayım.'},
       {pronoun:'Yakında', form:'Nan da nan', example:'Nan da nan zan zo.', tr:'Hemen geleceğim.'},
       {pronoun:'Gelecek', form:'Gobe / Daga baya', example:'Gobe zan tafi.', tr:'Yarın gideceğim.'},
     ],
     note:"'Yanzu' şimdi, 'nan da nan' hemen/kısa süre içinde, 'daga baya' daha sonra anlamlarına gelir."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Awa nawa ce?', tr:'Saat kaç?', prompt:'Saati sor'},
    {id:'sp2', ha:'Awa uku ce da safe.', tr:'Sabahın üçü.', prompt:'Sabahın üçü de'},
    {id:'sp3', ha:'Yau rana Litinin ce.', tr:'Bugün Pazartesi.', prompt:"Bugün Pazartesi de"},
    {id:'sp4', ha:'Gobe zan tafi kasuwa.', tr:'Yarın pazara gideceğim.', prompt:'Yarınki planını söyle'},
    {id:'sp5', ha:'Jiya na je makaranta.', tr:'Dün okula gittim.', prompt:'Dünkü yaptıklarını söyle'},
    {id:'sp6', ha:"Juma'a zan yi sallah.", tr:'Cuma namaz kılacağım.', prompt:'Cuma planını söyle'},
    {id:'sp7', ha:'Dare ne, zan kwana.', tr:'Gece oldu, yatacağım.', prompt:'Gece uyuyacağını söyle'},
    {id:'sp8', ha:'Shekarana talatin ne.', tr:'Otuz yaşındayım.', prompt:'Yaşını söyle (30)'},
  ],
  dialogues: [
    {id:'d1', title:'Saat Sorma', title_tr:'Saat Sormak',
     lines:[
       {speaker:'A', gender:'f', ha:'Sannu! Awa nawa ce?', tr:'Merhaba! Saat kaç?',
        gramNote:'Selamlama ve saat sorusu.',
        bd:[{ro:'Sannu',tr:'Merhaba',role:'selamlama',note:'Selamlama.'},{ro:'Awa nawa ce',tr:'Saat kaç',role:'soru',note:'Saat sorusu.'}]},
       {speaker:'B', gender:'m', ha:'Awa biyar ce da yamma.', tr:'Öğleden sonra beş.',
        gramNote:'Saat cevabı.',
        bd:[{ro:'Awa biyar ce',tr:'Saat beş',role:'yanıt',note:'Saat.'},{ro:'da yamma',tr:'öğleden sonra',role:'zaman',note:'Günün bölümü.'}]},
       {speaker:'A', gender:'f', ha:'Nagode. Gobe rana Litinin ce?', tr:'Teşekkürler. Yarın Pazartesi mi?',
        gramNote:'Gün sorusu.',
        bd:[{ro:'Nagode',tr:'Teşekkürler',role:'nezaket',note:'Teşekkür.'},{ro:'Gobe rana Litinin ce',tr:'Yarın Pazartesi mi',role:'soru',note:'Gün sorusu.'}]},
       {speaker:'B', gender:'m', ha:"A'a, gobe Talata ce.", tr:'Hayır, yarın Salı.',
        gramNote:'Düzeltme.',
        bd:[{ro:"A'a",tr:'Hayır',role:'ret',note:'Olumsuz yanıt.'},{ro:'gobe Talata ce',tr:'yarın Salı',role:'yanıt',note:'Doğru gün.'}]},
       {speaker:'A', gender:'f', ha:'Oh, yauwa. Nagode!', tr:'Oh, tamam. Teşekkürler!',
        gramNote:'Teşekkür ve kapanış.',
        bd:[{ro:'Oh yauwa',tr:'Oh tamam',role:'kabul',note:'Anladım.'},{ro:'Nagode',tr:'Teşekkürler',role:'nezaket',note:'Teşekkür.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:"Yau rana Laraba ce. Awa shida ce da safe. Gobe Alhamis ne. Juma'a mukan yi sallah.",
     tr:"Bugün Çarşamba. Sabahın altısı. Yarın Perşembe. Cuma namazı kılarız.",
     questions:[
       {q:'Bugün hangi gün?', opts:['Çarşamba','Perşembe','Salı','Cuma'], answer:0, tr:'Bugün hangi gün?'},
       {q:'Saat kaç?', opts:['Sabahın altısı','Öğleden sonra altı','Gece altı','Akşam altı'], answer:0, tr:'Saat kaç?'},
     ]
    },
  ],
};
LESSONS[3] = L3;
