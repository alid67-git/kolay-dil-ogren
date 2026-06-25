// ders12.js — English Lesson 12: Phone & Communication
const L12 = {
  words: [
    {id:'w1', en:'phone / mobile', ro:'/foʊn / ˈmoʊbaɪl/', tr:'telefon / cep telefonu'},
    {id:'w2', en:'call', ro:'/kɔːl/', tr:'aramak / çağrı',
     examples:[{en:'Can I call you later?', ro:'/kæn aɪ kɔːl juː ˈleɪtər/', tr:'Sizi daha sonra arayabilir miyim?',
       bd:[{ro:'Can I call',tr:'Arayabilir miyim',role:'modal'},{ro:'you later',tr:'sizi daha sonra',role:'time'}]}]},
    {id:'w3', en:'text / message', ro:'/tɛkst / ˈmɛsɪdʒ/', tr:'mesaj atmak / mesaj',
     examples:[{en:'I will send you a text message.', ro:'/aɪ wɪl sɛnd juː ə tɛkst ˈmɛsɪdʒ/', tr:'Size bir mesaj göndereceğim.',
       bd:[{ro:'I will send',tr:'Göndereceğim',role:'verb'},{ro:'you a text message',tr:'size mesaj',role:'object'}]}]},
    {id:'w4', en:'Hello? Is that...?', ro:'/həˈloʊ ɪz ðæt/', tr:'Alo? ...mısınız?',
     tip:'Telefonu açarken.', ctx:'Telefon konuşması başlangıcı.'},
    {id:'w5', en:'Speaking.', ro:'/ˈspiːkɪŋ/', tr:'Benim. / Evet, o benim.',
     tip:'Telefonda kendinizi onaylamak için.',
     examples:[{en:'Can I speak to Ali? — Speaking.', ro:'/kæn aɪ spiːk tə æli ˈspiːkɪŋ/', tr:'Ali\'yle görüşebilir miyim? — Benim.',
       bd:[{ro:'Can I speak to',tr:'Görüşebilir miyim',role:'modal'},{ro:'Speaking',tr:'Benim',role:'response'}]}]},
    {id:'w6', en:'Hold on / One moment', ro:'/hoʊld ɒn / wʌn ˈmoʊmənt/', tr:'Bir saniye / Bir dakika'},
    {id:'w7', en:'I will put you through.', ro:'/aɪ wɪl pʊt juː θruː/', tr:'Sizi bağlıyorum.',
     examples:[{en:'Please hold on. I will put you through to the manager.', ro:'/pliːz hoʊld ɒn aɪ wɪl pʊt juː θruː tə ðə ˈmænɪdʒər/', tr:'Lütfen bekleyin. Sizi müdüre bağlıyorum.',
       bd:[{ro:'Hold on',tr:'Bekleyin',role:'verb'},{ro:'I will put you through',tr:'Bağlıyorum',role:'verb'},{ro:'to the manager',tr:'müdüre',role:'noun'}]}]},
    {id:'w8', en:'leave a message', ro:'/liːv ə ˈmɛsɪdʒ/', tr:'mesaj bırakmak',
     examples:[{en:'Can I leave a message?', ro:'/kæn aɪ liːv ə ˈmɛsɪdʒ/', tr:'Mesaj bırakabilir miyim?',
       bd:[{ro:'Can I leave',tr:'Bırakabilir miyim',role:'modal'},{ro:'a message',tr:'mesaj',role:'noun'}]}]},
    {id:'w9', en:'voicemail', ro:'/ˈvɔɪsmeɪl/', tr:'sesli mesaj'},
    {id:'w10', en:'busy', ro:'/ˈbɪzi/', tr:'meşgul (hat)'},
    {id:'w11', en:'signal', ro:'/ˈsɪɡnəl/', tr:'sinyal / çekim'},
    {id:'w12', en:"I can't hear you.", ro:'/aɪ kɑːnt hɪər juː/', tr:'Sizi duyamıyorum.'},
    {id:'w13', en:'Could you repeat that?', ro:'/kʊd juː rɪˈpiːt ðæt/', tr:'Tekrar edebilir misiniz?'},
    {id:'w14', en:'Sorry, wrong number.', ro:'/ˈsɒri rɒŋ ˈnʌmbər/', tr:'Özür dilerim, yanlış numara.',
     examples:[{en:"Sorry, I think you have the wrong number.", ro:'/ˈsɒri aɪ θɪŋk juː hæv ðə rɒŋ ˈnʌmbər/', tr:'Özür dilerim, sanırım yanlış numarayı çevirdiniz.',
       bd:[{ro:'Sorry',tr:'Özür dilerim',role:'courtesy'},{ro:'wrong number',tr:'yanlış numara',role:'noun'}]}]},
    {id:'w15', en:'missed call', ro:'/mɪst kɔːl/', tr:'cevapsız çağrı'},
    {id:'w16', en:'call back', ro:'/kɔːl bæk/', tr:'geri aramak'},
    {id:'w17', en:'internet / Wi-Fi', ro:'/ˈɪntərˌnɛt / ˈwaɪfaɪ/', tr:'internet / Wi-Fi'},
    {id:'w18', en:'social media', ro:'/ˈsoʊʃəl ˈmiːdiə/', tr:'sosyal medya'},
    {id:'w19', en:'video call', ro:'/ˈvɪdiˌoʊ kɔːl/', tr:'görüntülü arama'},
    {id:'w20', en:'password', ro:'/ˈpæswɜːrd/', tr:'şifre / parola'}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'Telefon Kalıpları', title_en:'Phone Expressions',
     explanation:'Telefon konuşmalarında kullanılan standart ifadeler.',
     table:[
       {pronoun:'Açış', form:'Hello, [name] speaking.', example:'Hello, Ali speaking.', tr:'Alo, Ali konuşuyor.'},
       {pronoun:'Bağlanma', form:'Could I speak to...?', example:'Could I speak to the manager?', tr:'Müdürle görüşebilir miyim?'},
       {pronoun:'Bekleme', form:'Hold on / Just a moment', example:'Just a moment, please.', tr:'Bir dakika, lütfen.'},
       {pronoun:'Mesaj', form:'Can I take a message?', example:'Can I take a message?', tr:'Mesaj alabilir miyim?'}
     ],
     note:'Resmi telefon: "Good morning, [Company], how may I help you?"'}
  ],

  speaking: [
    {id:'sp1', en:'Hello, this is Ali. Could I speak to Sarah, please?', ro:'/həˈloʊ ðɪs ɪz æli kʊd aɪ spiːk tə ˈsɛrə pliːz/', tr:'Alo, ben Ali. Sarah\'yla görüşebilir miyim, lütfen?',
     tip:'Arama başlatma.', prompt:'Birini arayın'},
    {id:'sp2', en:"I'm sorry, she's not available. Can I take a message?", ro:'/aɪm ˈsɒri ʃiːz nɒt əˈveɪləbəl kæn aɪ teɪk ə ˈmɛsɪdʒ/', tr:'Üzgünüm, müsait değil. Mesaj alabilir miyim?',
     tip:'Telefon yönlendirme.', prompt:'Mesaj alın'},
    {id:'sp3', en:'Could you ask her to call me back? My number is...', ro:'/kʊd juː æsk hɜːr tə kɔːl miː bæk maɪ ˈnʌmbər ɪz/', tr:'Beni geri aramasını söyler misiniz? Numaram...',
     tip:'Geri arama isteği.', prompt:'Geri arama isteyin'}
  ],

  dialogues: [
    {id:'d1', title:'İş Telefonu', title_en:'Business Phone Call',
     lines:[
       {speaker:'A', gender:'f', en:'Good afternoon, ABC Company, how may I help you?', ro:'/ɡʊd ˌæftərˈnuːn eɪbiːsiː ˈkʌmpəni haʊ meɪ aɪ hɛlp juː/', tr:'İyi günler, ABC Şirketi, nasıl yardımcı olabilirim?'},
       {speaker:'B', gender:'m', en:'Hello. Could I speak to Mr Brown, please?', ro:'/həˈloʊ kʊd aɪ spiːk tə mɪstər braʊn pliːz/', tr:'Merhaba. Bay Brown ile görüşebilir miyim, lütfen?'},
       {speaker:'A', gender:'f', en:"I'm sorry, Mr Brown is in a meeting. Can I take a message?", ro:'/aɪm ˈsɒri mɪstər braʊn ɪz ɪn ə ˈmiːtɪŋ kæn aɪ teɪk ə ˈmɛsɪdʒ/', tr:'Üzgünüm, Bay Brown toplantıda. Mesaj alabilir miyim?'},
       {speaker:'B', gender:'m', en:"Yes, please. Could you tell him that Ali called? I'll call back after three.", ro:'/jɛs pliːz kʊd juː tɛl hɪm ðæt æli kɔːld aɪl kɔːl bæk ˈɑːftər θriː/', tr:'Evet, lütfen. Ali\'nin aradığını söyler misiniz? Üçten sonra geri arayacağım.'},
       {speaker:'A', gender:'f', en:"Of course. I'll let him know. Does he have your number?", ro:'/əv kɔːrs aɪl lɛt hɪm noʊ dəz hiː hæv jɔːr ˈnʌmbər/', tr:'Tabii. Haber vereceğim. Numaranız onda var mı?'},
       {speaker:'B', gender:'m', en:"I'm not sure. It's oh-seven-nine, double-four-five, three-two-one.", ro:"/aɪm nɒt ʃʊər ɪts oʊ sevən naɪn ˈdʌbəl fɔːr faɪv θriː tuː wʌn/", tr:'Emin değilim. 079-4453-21.'},
       {speaker:'A', gender:'f', en:"I'll pass that on. Thank you for calling.", ro:'/aɪl pɑːs ðæt ɒn θæŋk juː fər ˈkɔːlɪŋ/', tr:'İletirim. Aradığınız için teşekkürler.'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:"You have reached the voicemail of John Smith. I am unavailable at the moment. Please leave your name, number, and a brief message after the beep, and I will return your call as soon as possible.",
     tr:'John Smith\'in sesli mesajına ulaştınız. Şu an müsait değilim. Bip sesinden sonra adınızı, numaranızı ve kısa bir mesaj bırakın, en kısa sürede geri arayacağım.',
     questions:[
       {q:'Whose voicemail is this?', opts:['Ali Smith','John Brown','John Smith','Jim Stone'], answer:2, tr:'Bu kimin sesli mesajı?'},
       {q:'What should you leave after the beep?', opts:['only your name','name and number','name, number and message','just a number'], answer:2, tr:'Bip sesinden sonra ne bırakmalısınız?'}
     ]}
  ]
};
LESSONS[12] = L12;
