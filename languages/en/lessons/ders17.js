// ders17.js — English Lesson 17: Emotions & Feelings
const L17 = {
  words: [
    {id:'w1', en:'happy', ro:'/ˈhæpi/', tr:'mutlu',
     examples:[{en:"I'm so happy today!", ro:'/aɪm soʊ ˈhæpi təˈdeɪ/', tr:'Bugün çok mutluyum!',
       bd:[{ro:"I'm",tr:'Ben',role:'subject'},{ro:'so happy',tr:'çok mutlu',role:'adjective'},{ro:'today',tr:'bugün',role:'time'}]}]},
    {id:'w2', en:'sad', ro:'/sæd/', tr:'üzgün'},
    {id:'w3', en:'angry', ro:'/ˈæŋɡri/', tr:'kızgın / sinirli'},
    {id:'w4', en:'excited', ro:'/ɪkˈsaɪtɪd/', tr:'heyecanlı'},
    {id:'w5', en:'nervous', ro:'/ˈnɜːrvəs/', tr:'gergin / sinirli'},
    {id:'w6', en:'tired', ro:'/ˈtaɪərd/', tr:'yorgun'},
    {id:'w7', en:'bored', ro:'/bɔːrd/', tr:'sıkılmış'},
    {id:'w8', en:'surprised', ro:'/sərˈpraɪzd/', tr:'şaşırmış'},
    {id:'w9', en:'scared / afraid', ro:'/skɛrd / əˈfreɪd/', tr:'korkmuş'},
    {id:'w10', en:'confident', ro:'/ˈkɒnfɪdənt/', tr:'kendinden emin / özgüvenli'},
    {id:'w11', en:'worried', ro:'/ˈwʌrid/', tr:'endişeli',
     examples:[{en:"I'm worried about the exam.", ro:"/aɪm ˈwʌrid əˈbaʊt ðə ɪɡˈzæm/", tr:'Sınav için endişeleniyorum.',
       bd:[{ro:"I'm worried",tr:'Endişeleniyorum',role:'adjective'},{ro:'about the exam',tr:'sınav için',role:'phrase'}]}]},
    {id:'w12', en:'relieved', ro:'/rɪˈliːvd/', tr:'rahatlamış'},
    {id:'w13', en:'proud', ro:'/praʊd/', tr:'gururlu',
     examples:[{en:"I'm proud of you.", ro:'/aɪm praʊd əv juː/', tr:'Seninle gurur duyuyorum.',
       bd:[{ro:"I'm proud",tr:'Gurur duyuyorum',role:'adjective'},{ro:'of you',tr:'seninle',role:'phrase'}]}]},
    {id:'w14', en:'lonely', ro:'/ˈloʊnli/', tr:'yalnız'},
    {id:'w15', en:'embarrassed', ro:'/ɪmˈbærəst/', tr:'utanmış'},
    {id:'w16', en:'feel', ro:'/fiːl/', tr:'hissetmek',
     examples:[{en:'How do you feel today?', ro:'/haʊ duː juː fiːl təˈdeɪ/', tr:'Bugün nasıl hissediyorsun?',
       bd:[{ro:'How do you feel',tr:'Nasıl hissediyorsun',role:'question'},{ro:'today',tr:'bugün',role:'time'}]}]},
    {id:'w17', en:'mood', ro:'/muːd/', tr:'ruh hali',
     examples:[{en:"I'm in a good mood today.", ro:'/aɪm ɪn ə ɡʊd muːd təˈdeɪ/', tr:'Bugün modum yerinde.',
       bd:[{ro:"I'm in a",tr:'...dayım',role:'verb'},{ro:'good mood',tr:'iyi ruh hali',role:'noun'}]}]},
    {id:'w18', en:'stress', ro:'/strɛs/', tr:'stres'},
    {id:'w19', en:'calm down', ro:'/kɑːm daʊn/', tr:'sakinleşmek'},
    {id:'w20', en:'cheer up', ro:'/tʃɪər ʌp/', tr:'neşelenmek / sevinmek'}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'Duygular İçin Sıfatlar', title_en:'Adjectives for Emotions',
     explanation:'"I am + adjective" duygu anlatmak için en temel kalıptır.',
     table:[
       {pronoun:'Anlık duygu', form:'I am + adj.', example:"I'm really excited.", tr:'Gerçekten heyecanlıyım.'},
       {pronoun:'Neden', form:'I am...about/of/with', example:"I'm nervous about the interview.", tr:'Mülakata gerginim.'},
       {pronoun:'Nedenini sorma', form:'Why are you...?', example:"Why are you sad?", tr:'Neden üzgünsün?'},
       {pronoun:'Empati', form:'I understand how you feel.', example:'That must be difficult.', tr:'Bunun zor olduğunu anlıyorum.'}
     ],
     note:'"Feeling" ile de kullanılır: "I\'m feeling tired."'}
  ],

  speaking: [
    {id:'sp1', en:"I'm feeling really excited about my trip to London!", ro:"/aɪm ˈfiːlɪŋ ˈrɪəli ɪkˈsaɪtɪd əˈbaʊt maɪ trɪp tə ˈlʌndən/", tr:'Londra gezisi için gerçekten heyecanlıyım!',
     tip:'Duygu anlatma.', prompt:'Bir duygunuzu anlatın'},
    {id:'sp2', en:"Don't worry! I'm sure it will be fine.", ro:"/doʊnt ˈwʌri aɪm ʃʊər ɪt wɪl biː faɪn/", tr:'Endişelenme! Eminim iyi olacak.',
     tip:'Birisini sakinleştirme.', prompt:'Birini rahatlatın'},
    {id:'sp3', en:"I was so embarrassed when I forgot his name!", ro:"/aɪ wɒz soʊ ɪmˈbærəst wɛn aɪ fərˈɡɒt hɪz neɪm/", tr:'Adını unuttuğumda çok utandım!',
     tip:'Geçmişte duygu anlatma.', prompt:'Geçmişteki bir duygunuzu anlatın'}
  ],

  dialogues: [
    {id:'d1', title:'Nasıl Hissediyorsun?', title_en:'How Are You Feeling?',
     lines:[
       {speaker:'A', gender:'f', en:"Hey, you look worried. Is everything okay?", ro:"/heɪ juː lʊk ˈwʌrid ɪz ˈɛvriθɪŋ oʊˈkeɪ/", tr:'Selam, endişeli görünüyorsun. Her şey yolunda mı?'},
       {speaker:'B', gender:'m', en:"Not really. I have a job interview tomorrow and I'm really nervous.", ro:"/nɒt ˈrɪəli aɪ hæv ə dʒɒb ˈɪntərvjuː təˈmɒroʊ ænd aɪm ˈrɪəli ˈnɜːrvəs/", tr:'Pek değil. Yarın iş mülakatım var ve gerçekten gerginim.'},
       {speaker:'A', gender:'f', en:"I understand! Interviews are stressful. But you are well prepared.", ro:"/aɪ ˌʌndərˈstænd ˈɪntərvjuːz ɑːr ˈstrɛsfəl bʌt juː ɑːr wɛl prɪˈpɛrd/", tr:'Anlıyorum! Mülakatlar stresli. Ama iyi hazırlanmışsın.'},
       {speaker:'B', gender:'m', en:"Thank you. I just feel like I'll forget everything!", ro:"/θæŋk juː aɪ dʒʌst fiːl laɪk aɪl fərˈɡɛt ˈɛvriθɪŋ/", tr:'Teşekkürler. Sadece her şeyi unutacakmış gibi hissediyorum!'},
       {speaker:'A', gender:'f', en:"That's normal. Take a deep breath and be yourself. I'm proud of you!", ro:"/ðæts ˈnɔːrməl teɪk ə diːp brɛθ ænd biː jɔːrsɛlf aɪm praʊd əv juː/", tr:'Bu normal. Derin bir nefes al ve kendin ol. Seninle gurur duyuyorum!'},
       {speaker:'B', gender:'m', en:"That really helps. Thank you, I feel better now!", ro:"/ðæt ˈrɪəli hɛlps θæŋk juː aɪ fiːl ˈbɛtər naʊ/", tr:'Bu gerçekten yardımcı oluyor. Teşekkürler, şimdi daha iyi hissediyorum!'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:"Emotional intelligence is the ability to understand and manage your own emotions, and to recognise the emotions of others. People with high emotional intelligence tend to be happier, more confident, and better at forming relationships. You can improve your emotional intelligence by practising self-awareness and empathy.",
     tr:'Duygusal zeka, kendi duygularınızı anlama ve yönetme ile başkalarının duygularını tanıma becerisidir. Yüksek duygusal zekaya sahip insanlar genellikle daha mutlu, özgüvenli ve ilişki kurmada daha başarılıdır. Öz farkındalık ve empati pratiği yaparak duygusal zekanızı geliştirebilirsiniz.',
     questions:[
       {q:'What is emotional intelligence?', opts:['being smart','understanding emotions','feeling happy','avoiding stress'], answer:1, tr:'Duygusal zeka nedir?'},
       {q:'How do people with high EI tend to be?', opts:['lonelier','angrier','happier and more confident','more stressed'], answer:2, tr:'Yüksek EQ\'lu insanlar genellikle nasıldır?'},
       {q:'How can you improve emotional intelligence?', opts:['by studying harder','through self-awareness and empathy','by avoiding emotions','by working alone'], answer:1, tr:'Duygusal zekayı nasıl geliştirebilirsiniz?'}
     ]}
  ]
};
LESSONS[17] = L17;
