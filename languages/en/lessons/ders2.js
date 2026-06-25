// ders2.js — English Lesson 2: Verb Tenses (beginner, 6 tenses)
const L2 = {
  words: [
    // 1 — Present Simple
    {id:'w1', en:'every day', tr:'her gün',
     tip:'Geniş zaman işareti.', ctx:'Present Simple — alışkanlık ve rutin.',
     examples:[{en:'I drink tea every day.', tr:'Her gün çay içerim.',
       gramNote:'Present Simple: alışkanlık. I + fiil (drink).',
       bd:[{ro:'I',tr:'Ben',role:'S',note:'1. tekil özne.'},
           {ro:'drink',tr:'içerim',role:'V',note:'Geniş zaman — fiil yalın hali.'},
           {ro:'every day',tr:'her gün',role:'K',note:'Sıklık ifadesi — rutin gösterir.'}]}]},
    {id:'w2', en:'usually', tr:'genellikle',
     tip:'Sıklık zarfı.', ctx:'Present Simple ile kullanılır.',
     examples:[{en:'She usually walks to work.', tr:'Genellikle işe yürür.',
       gramNote:'He/She/It ile fiile -s eklenir: walks.'}]},

    // 2 — Present Continuous
    {id:'w3', en:'now', tr:'şimdi',
     tip:'Şimdiki zaman işareti.', ctx:'Present Continuous — şu an devam eden eylem.',
     examples:[{en:'I am studying now.', tr:'Şimdi ders çalışıyorum.',
       gramNote:'Present Continuous: am/is/are + fiil-ing.',
       bd:[{ro:'I',tr:'Ben',role:'S',note:'Özne.'},
           {ro:'am studying',tr:'çalışıyorum',role:'V',note:'am + fiil-ing = şu an devam ediyor.'},
           {ro:'now',tr:'şimdi',role:'K',note:'Zaman zarfı — şu an.'}]}]},
    {id:'w4', en:'at the moment', tr:'şu anda',
     tip:'Şimdiki zaman işareti.', ctx:'now ile aynı anlam.',
     examples:[{en:'He is cooking at the moment.', tr:'Şu anda yemek yapıyor.'}]},

    // 3 — Past Simple
    {id:'w5', en:'yesterday', tr:'dün',
     tip:'Geçmiş zaman işareti.', ctx:'Past Simple — bitmiş geçmiş eylem.',
     examples:[{en:'We met yesterday.', tr:'Dün buluştuk.',
       gramNote:'Past Simple: fiilin 2. hali (met = meet\'in geçmişi).',
       bd:[{ro:'We',tr:'Biz',role:'S',note:'Çoğul özne.'},
           {ro:'met',tr:'buluştuk',role:'V',note:'meet → met (düzensiz geçmiş zaman).'},
           {ro:'yesterday',tr:'dün',role:'K',note:'Geçmiş zaman işareti.'}]}]},
    {id:'w6', en:'last week', tr:'geçen hafta',
     tip:'Geçmiş zaman ifadesi.', ctx:'Past Simple ile kullanılır.',
     examples:[{en:'I visited London last week.', tr:'Geçen hafta Londra\'yı gezdim.'}]},

    // 4 — Past Continuous
    {id:'w7', en:'while', tr:'... iken',
     tip:'Past Continuous bağlacı.', ctx:'Uzun süren geçmiş eylem devam ederken.',
     examples:[{en:'I was reading while he was cooking.', tr:'O yemek yaparken ben okuyordum.',
       gramNote:'Past Continuous: was/were + fiil-ing. while = ...iken.',
       bd:[{ro:'I was reading',tr:'okuyordum',role:'V',note:'was + fiil-ing — devam eden eylem.'},
           {ro:'while',tr:'... iken',role:'K',note:'İki eylem aynı anda.'},
           {ro:'he was cooking',tr:'yemek yapıyordu',role:'V',note:'was + fiil-ing.'}]}]},
    {id:'w8', en:'was / were', tr:'idi / idiler',
     tip:'Past Continuous yardımcı fiili.', ctx:'I/he/she/it → was; you/we/they → were.',
     examples:[{en:'They were at home last night.', tr:'Dün gece evde idiler.'}]},

    // 5 — Present Perfect
    {id:'w9', en:'already', tr:'çoktan / zaten',
     tip:'Present Perfect işareti.', ctx:'Olumlu cümlelerde fiilden önce.',
     examples:[{en:'I have already finished.', tr:'Çoktan bitirdim.',
       gramNote:'Present Perfect: have/has + fiil 3. hali (V3).',
       bd:[{ro:'I',tr:'Ben',role:'S',note:'Özne.'},
           {ro:'have already finished',tr:'çoktan bitirdim',role:'V',note:'have + already + V3 (finished).'}]}]},
    {id:'w10', en:'since', tr:'-den beri',
     tip:'Present Perfect süresi.', ctx:'Başlangıç noktası: since 2020, since Monday.',
     examples:[{en:'I have lived here since 2019.', tr:'2019\'dan beri burada yaşıyorum.'}]},

    // 6 — Future
    {id:'w11', en:'will', tr:'-ecek / -acak',
     tip:'Gelecek zaman.', ctx:'Anlık karar veya tahmin: will + fiil.',
     examples:[{en:'I will help you tomorrow.', tr:'Yarın sana yardım edeceğim.',
       gramNote:'Future with will: will + fiilin yalın hali.',
       bd:[{ro:'I',tr:'Ben',role:'S',note:'Özne.'},
           {ro:'will help',tr:'yardım edeceğim',role:'V',note:'will + fiil — gelecek.'},
           {ro:'tomorrow',tr:'yarın',role:'K',note:'Gelecek zaman işareti.'}]}]},
    {id:'w12', en:'going to', tr:'-ecek (planlı)',
     tip:'Planlı gelecek.', ctx:'am/is/are going to + fiil.',
     examples:[{en:'We are going to travel next month.', tr:'Gelecek ay seyahat edeceğiz.'}]}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'1. Geniş Zaman — Present Simple', title_en:'1. Present Simple',
     explanation:'Alışkanlık, rutin ve genel gerçekler için. Fiil: I/you/we/they → yalın; he/she/it → fiil + s.',
     table:[
       {pronoun:'Olumlu', form:'I work / She works', example:'I drink tea every day.', tr:'Her gün çay içerim.'},
       {pronoun:'Olumsuz', form:"don't / doesn't", example:"He doesn't smoke.", tr:'Sigara içmez.'},
       {pronoun:'Soru', form:'Do/Does + V?', example:'Do you speak English?', tr:'İngilizce konuşur musun?'},
       {pronoun:'Ne zaman?', form:'always, usually, every day', example:'She usually gets up at seven.', tr:'Genellikle yedide kalkar.'}
     ],
     note:'3. tekil: go→goes, watch→watches, study→studies'},
    {id:'g2', title:'2. Şimdiki Zaman — Present Continuous', title_en:'2. Present Continuous',
     explanation:'Şu anda devam eden eylem. Kalıp: am / is / are + fiil-ing.',
     table:[
       {pronoun:'Olumlu', form:'am/is/are + V-ing', example:'I am studying now.', tr:'Şimdi ders çalışıyorum.'},
       {pronoun:'Olumsuz', form:"isn't / aren't", example:"She isn't listening.", tr:'Dinlemiyor.'},
       {pronoun:'Soru', form:'Am/Is/Are + V-ing?', example:'Are you waiting?', tr:'Bekliyor musun?'},
       {pronoun:'Ne zaman?', form:'now, at the moment', example:'Look! It is raining.', tr:'Bak! Yağmur yağıyor.'}
     ],
     note:'write→writing, run→running'},
    {id:'g3', title:'3. Geçmiş Zaman — Past Simple', title_en:'3. Past Simple',
     explanation:'Geçmişte bitmiş eylem. Düzenli fiiller: -ed; düzensiz: 2. hal (went, saw, met).',
     table:[
       {pronoun:'Olumlu', form:'V2 / V-ed', example:'I visited my friend yesterday.', tr:'Dün arkadaşımı ziyaret ettim.'},
       {pronoun:'Olumsuz', form:"didn't + V", example:"He didn't call.", tr:'Aramadı.'},
       {pronoun:'Soru', form:'Did + V?', example:'Did you enjoy it?', tr:'Beğendin mi?'},
       {pronoun:'Ne zaman?', form:'yesterday, last week, ...ago', example:'She left two hours ago.', tr:'İki saat önce gitti.'}
     ],
     note:'Did kullanıldığında fiil yalın kalır: Did you go? (Did you went? ✗)'},
    {id:'g4', title:'4. Geçmişte Devam — Past Continuous', title_en:'4. Past Continuous',
     explanation:'Geçmişte devam eden eylem. Kalıp: was / were + fiil-ing.',
     table:[
       {pronoun:'Olumlu', form:'was/were + V-ing', example:'I was sleeping at midnight.', tr:'Gece yarısı uyuyordum.'},
       {pronoun:'Olumsuz', form:"wasn't / weren't", example:"They weren't working.", tr:'Çalışmıyorlardı.'},
       {pronoun:'Soru', form:'Was/Were + V-ing?', example:'Were you watching TV?', tr:'TV izliyor muydun?'},
       {pronoun:'Birlikte', form:'while / when', example:'I was cooking when he arrived.', tr:'O geldiğinde yemek yapıyordum.'}
     ],
     note:'Uzun eylem: Past Continuous; kısa kesen: Past Simple'},
    {id:'g5', title:'5. Yakın Geçmiş — Present Perfect', title_en:'5. Present Perfect',
     explanation:'Geçmişte başlayıp şimdiye bağlı eylem. Kalıp: have / has + fiil 3. hali (V3).',
     table:[
       {pronoun:'Olumlu', form:'have/has + V3', example:'I have finished the report.', tr:'Raporu bitirdim.'},
       {pronoun:'Olumsuz', form:"haven't / hasn't", example:"She hasn't arrived yet.", tr:'Henüz gelmedi.'},
       {pronoun:'Soru', form:'Have/Has + V3?', example:'Have you ever tried sushi?', tr:'Hiç suşi denedin mi?'},
       {pronoun:'Süre', form:'since + nokta / for + süre', example:'I have lived here for three years.', tr:'Üç yıldır burada yaşıyorum.'}
     ],
     note:'go→went→gone, see→saw→seen — 3. hali ezberle'},
    {id:'g6', title:'6. Gelecek Zaman — Future', title_en:'6. Future (will / going to)',
     explanation:'will: anlık karar, söz, tahmin. going to: önceden plan.',
     table:[
       {pronoun:'will', form:'will + V', example:"I'll call you later.", tr:'Seni sonra ararım.'},
       {pronoun:'going to', form:'am/is/are going to + V', example:'We are going to move.', tr:'Taşınacağız.'},
       {pronoun:'Olumsuz', form:"won't / not going to", example:"It won't take long.", tr:'Uzun sürmez.'},
       {pronoun:'Ne zaman?', form:'tomorrow, next week', example:'I will help you tomorrow.', tr:'Yarın yardım edeceğim.'}
     ],
     note:'Plan için going to; anlık karar için will'}
  ],

  speaking: [
    {id:'sp1', en:'I drink coffee every morning.', tr:'Her sabah kahve içerim.',
     prompt:'Present Simple — bir alışkanlığını söyle', gramNote:'Present Simple: rutin eylem.'},
    {id:'sp2', en:'I am learning English now.', tr:'Şimdi İngilizce öğreniyorum.',
     prompt:'Present Continuous — şu an ne yapıyorsun?', gramNote:'Present Continuous: şu an devam eden.'},
    {id:'sp3', en:'I visited my grandmother yesterday.', tr:'Dün büyükannemi ziyaret ettim.',
     prompt:'Past Simple — dün ne yaptın?', gramNote:'Past Simple: bitmiş geçmiş.'},
    {id:'sp4', en:'I was reading when you called.', tr:'Aradığında okuyordum.',
     prompt:'Past Continuous — geçmişte devam eden eylem', gramNote:'was/were + fiil-ing.'},
    {id:'sp5', en:'I have already eaten lunch.', tr:'Öğle yemeğini çoktan yedim.',
     prompt:'Present Perfect — bugün yaptığın bir şey', gramNote:'have/has + V3 + already.'},
    {id:'sp6', en:'I will call you tomorrow.', tr:'Yarın seni arayacağım.',
     prompt:'Future — yarın ne yapacaksın?', gramNote:'will + fiil — gelecek.'}
  ],

  dialogues: [
    {id:'d1', title:'Rutin ve Şimdi', title_en:'Routine vs Now',
     lines:[
       {speaker:'A', gender:'f', en:'What do you usually do in the morning?', tr:'Sabahları genellikle ne yaparsın?',
        gramNote:'Present Simple soru: Do + özne + fiil?',
        bd:[{ro:'What',tr:'Ne',role:'question',note:'Soru kelimesi.'},
            {ro:'do you usually do',tr:'genellikle yaparsın',role:'V',note:'Present Simple soru.'},
            {ro:'in the morning',tr:'sabahları',role:'K',note:'Zaman ifadesi.'}]},
       {speaker:'B', gender:'m', en:'I usually drink tea and read the news.', tr:'Genellikle çay içerim ve haber okurum.',
        gramNote:'Present Simple: alışkanlık. I + fiil yalın.',
        bd:[{ro:'I usually drink tea',tr:'genellikle çay içerim',role:'V',note:'Present Simple rutin.'},
            {ro:'and read the news',tr:'ve haber okurum',role:'V',note:'and ile iki eylem.'}]},
       {speaker:'A', gender:'f', en:'What are you doing right now?', tr:'Şu an ne yapıyorsun?',
        gramNote:'Present Continuous soru: Are + özne + fiil-ing?',
        bd:[{ro:'What',tr:'Ne',role:'question',note:'Soru kelimesi.'},
            {ro:'are you doing',tr:'yapıyorsun',role:'V',note:'are + fiil-ing — şu an.'},
            {ro:'right now',tr:'şu an',role:'K',note:'Zaman zarfı.'}]},
       {speaker:'B', gender:'m', en:'I am preparing breakfast at the moment.', tr:'Şu anda kahvaltı hazırlıyorum.',
        gramNote:'Present Continuous: am + fiil-ing.',
        bd:[{ro:'I',tr:'Ben',role:'S',note:'Özne.'},
            {ro:'am preparing',tr:'hazırlıyorum',role:'V',note:'am + fiil-ing.'},
            {ro:'breakfast',tr:'kahvaltı',role:'O',note:'Nesne.'},
            {ro:'at the moment',tr:'şu anda',role:'K',note:'Present Continuous işareti.'}]}
     ]},
    {id:'d2', title:'Dün ve Yarın', title_en:'Yesterday and Tomorrow',
     lines:[
       {speaker:'A', gender:'f', en:'What did you do yesterday?', tr:'Dün ne yaptın?',
        gramNote:'Past Simple soru: Did + özne + fiil yalın?',
        bd:[{ro:'What',tr:'Ne',role:'question',note:'Soru kelimesi.'},
            {ro:'did you do',tr:'yaptın',role:'V',note:'Did + fiil yalın — geçmiş.'},
            {ro:'yesterday',tr:'dün',role:'K',note:'Past Simple işareti.'}]},
       {speaker:'B', gender:'m', en:'I worked all day. I was very tired.', tr:'Bütün gün çalıştım. Çok yorgundum.',
        gramNote:'Past Simple (worked) + Past Simple (was — to be geçmişi).',
        bd:[{ro:'I worked all day',tr:'bütün gün çalıştım',role:'V',note:'Past Simple — bitmiş eylem.'},
            {ro:'I was very tired',tr:'çok yorgundum',role:'V',note:'was = to be geçmişi.'}]},
       {speaker:'A', gender:'f', en:'Have you finished your project yet?', tr:'Projeni henüz bitirdin mi?',
        gramNote:'Present Perfect soru: Have + özne + V3 + yet?',
        bd:[{ro:'Have you finished',tr:'bitirdin mi',role:'V',note:'Have + V3 — Present Perfect.'},
            {ro:'yet',tr:'henüz',role:'K',note:'Sorularda cümle sonunda.'}]},
       {speaker:'B', gender:'m', en:'Yes, I have already finished it.', tr:'Evet, çoktan bitirdim.',
        gramNote:'Present Perfect olumlu: have + already + V3.',
        bd:[{ro:'I have already finished',tr:'çoktan bitirdim',role:'V',note:'have + already + V3.'},
            {ro:'it',tr:'onu',role:'O',note:'Nesne — projeyi.'}]},
       {speaker:'A', gender:'f', en:'Great! Will you rest tomorrow?', tr:'Harika! Yarın dinlenecek misin?',
        gramNote:'Future soru: Will + özne + fiil?',
        bd:[{ro:'Will you rest',tr:'dinlenecek misin',role:'V',note:'Will + fiil — gelecek soru.'},
            {ro:'tomorrow',tr:'yarın',role:'K',note:'Gelecek zaman işareti.'}]},
       {speaker:'B', gender:'m', en:'Yes, I am going to sleep late.', tr:'Evet, geç yatacağım.',
        gramNote:'going to: planlı gelecek.',
        bd:[{ro:'I am going to sleep',tr:'yatacağım',role:'V',note:'am going to + fiil — plan.'},
            {ro:'late',tr:'geç',role:'K',note:'Zarf — ne zaman.'}]}
     ]}
  ],

  listening: [
    {id:'li1', audio:'',
     transcript:'Every day I get up at seven. Right now I am on the bus. Yesterday I was late. I have lived here for two years. Tomorrow I will start a new course.',
     tr:'Her gün yedide kalkarım. Şu an otobüsteyim. Dün geç kaldım. İki yıldır burada yaşıyorum. Yarın yeni bir kursa başlayacağım.',
     questions:[
       {q:'What time does he get up every day?', opts:['6:00','7:00','8:00','9:00'], answer:1, tr:'Her gün saat kaçta kalkar?'},
       {q:'Where is he right now?', opts:['at home','on the bus','at work','at school'], answer:1, tr:'Şu an nerede?'},
       {q:'Which tense: "I have lived here for two years"?', opts:['Past Simple','Present Perfect','Future','Present Continuous'], answer:1, tr:'Hangi zaman?'}
     ]}
  ]
};
LESSONS[2] = L2;
