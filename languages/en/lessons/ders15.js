// ders15.js — English Lesson 15: Education
const L15 = {
  words: [
    {id:'w1', en:'school', ro:'/skuːl/', tr:'okul'},
    {id:'w2', en:'university / college', ro:'/ˌjuːnɪˈvɜːrsɪti / ˈkɒlɪdʒ/', tr:'üniversite'},
    {id:'w3', en:'student', ro:'/ˈstjuːdənt/', tr:'öğrenci'},
    {id:'w4', en:'teacher / professor', ro:'/ˈtiːtʃər / prəˈfɛsər/', tr:'öğretmen / profesör'},
    {id:'w5', en:'class / lesson', ro:'/klɑːs / ˈlɛsən/', tr:'ders / sınıf'},
    {id:'w6', en:'homework', ro:'/ˈhoʊmwɜːrk/', tr:'ev ödevi',
     examples:[{en:'Have you done your homework?', ro:'/hæv juː dʌn jɔːr ˈhoʊmwɜːrk/', tr:'Ödevinizi yaptınız mı?',
       bd:[{ro:'Have you done',tr:'Yaptınız mı',role:'question'},{ro:'your homework',tr:'ödevinizi',role:'noun'}]}]},
    {id:'w7', en:'exam / test', ro:'/ɪɡˈzæm / tɛst/', tr:'sınav',
     examples:[{en:'The exam is on Monday.', ro:'/ðə ɪɡˈzæm ɪz ɒn ˈmʌndeɪ/', tr:'Sınav Pazartesi.',
       bd:[{ro:'The exam',tr:'Sınav',role:'noun'},{ro:'is on Monday',tr:'Pazartesi',role:'time'}]}]},
    {id:'w8', en:'pass / fail', ro:'/pɑːs / feɪl/', tr:'geçmek / kalmak (sınav)'},
    {id:'w9', en:'grade / mark', ro:'/ɡreɪd / mɑːrk/', tr:'not / puan'},
    {id:'w10', en:'essay', ro:'/ˈɛseɪ/', tr:'deneme / makale'},
    {id:'w11', en:'library', ro:'/ˈlaɪbrɛri/', tr:'kütüphane'},
    {id:'w12', en:'degree', ro:'/dɪˈɡriː/', tr:'derece / diploma'},
    {id:'w13', en:'subject', ro:'/ˈsʌbdʒɪkt/', tr:'ders / konu (akademik)'},
    {id:'w14', en:'scholarship', ro:'/ˈskɒlərʃɪp/', tr:'burs'},
    {id:'w15', en:'study', ro:'/ˈstʌdi/', tr:'çalışmak / okumak',
     examples:[{en:'I study English every day.', ro:'/aɪ ˈstʌdi ˈɪŋɡlɪʃ ˈɛvri deɪ/', tr:'Her gün İngilizce çalışıyorum.',
       bd:[{ro:'I study',tr:'Çalışıyorum',role:'verb'},{ro:'English',tr:'İngilizce',role:'noun'},{ro:'every day',tr:'her gün',role:'time'}]}]},
    {id:'w16', en:'learn', ro:'/lɜːrn/', tr:'öğrenmek'},
    {id:'w17', en:'understand', ro:'/ˌʌndərˈstænd/', tr:'anlamak'},
    {id:'w18', en:'practise', ro:'/ˈpræktɪs/', tr:'pratik yapmak'},
    {id:'w19', en:'fluent', ro:'/ˈfluːənt/', tr:'akıcı (dil)',
     examples:[{en:'My goal is to become fluent in English.', ro:'/maɪ ɡoʊl ɪz tə bɪˈkʌm ˈfluːənt ɪn ˈɪŋɡlɪʃ/', tr:'Hedefim İngilizce\'de akıcı olmak.',
       bd:[{ro:'My goal is',tr:'Hedefim',role:'noun'},{ro:'to become fluent',tr:'akıcı olmak',role:'verb'},{ro:'in English',tr:'İngilizce\'de',role:'noun'}]}]},
    {id:'w20', en:'mistake', ro:'/mɪˈsteɪk/', tr:'hata',
     examples:[{en:"Don't worry about making mistakes.", ro:"/doʊnt ˈwʌri əˈbaʊt ˈmeɪkɪŋ mɪˈsteɪks/", tr:'Hata yapmaktan endişelenme.',
       bd:[{ro:"Don't worry",tr:'Endişelenme',role:'verb'},{ro:'about making mistakes',tr:'hata yapmak',role:'phrase'}]}]}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'Present Perfect — have/has + done', title_en:'Present Perfect',
     explanation:'Present Perfect geçmişte olmuş ama şimdiye etkisi olan olayları anlatır.',
     table:[
       {pronoun:'I/You/We/They', form:'have + past participle', example:'I have studied English for two years.', tr:'İki yıldır İngilizce çalışıyorum.'},
       {pronoun:'He/She/It', form:'has + past participle', example:'She has passed the exam.', tr:'Sınavı geçti.'},
       {pronoun:'Olumsuz', form:"haven't / hasn't", example:"I haven't done my homework.", tr:'Ödevimi yapmadım.'},
       {pronoun:'Soru', form:'Have...? / Has...?', example:'Have you studied today?', tr:'Bugün çalıştın mı?'}
     ],
     note:'Ever/never: "Have you ever been to London?" — hayatında hiç'}
  ],

  speaking: [
    {id:'sp1', en:'I study English at a language school three times a week.', ro:'/aɪ ˈstʌdi ˈɪŋɡlɪʃ æt ə ˈlæŋɡwɪdʒ skuːl θriː taɪmz ə wiːk/', tr:'Haftada üç kez dil okulunda İngilizce çalışıyorum.',
     tip:'Eğitim bilgisi verme.', prompt:'Eğitiminizden bahsedin'},
    {id:'sp2', en:'My favourite subject was history.', ro:'/maɪ ˈfeɪvərɪt ˈsʌbdʒɪkt wɒz ˈhɪstəri/', tr:'En sevdiğim ders tarihti.',
     tip:'Favori ders anlatma.', prompt:'Favori dersinizi anlatın'},
    {id:'sp3', en:"I've been learning English for six months and I've improved a lot.", ro:'/aɪv biːn ˈlɜːrnɪŋ ˈɪŋɡlɪʃ fər sɪks mʌnθs ænd aɪv ɪmˈpruːvd ə lɒt/', tr:'Altı aydır İngilizce öğreniyorum ve çok ilerleme kaydettim.',
     tip:'İlerleme anlatma.', prompt:'İlerlemenizden bahsedin'}
  ],

  dialogues: [
    {id:'d1', title:'Dil Okulu Kaydı', title_en:'Enrolling in Language School',
     lines:[
       {speaker:'A', gender:'f', en:"Good morning! I'd like to enrol in an English course.", ro:'/ɡʊd ˈmɔːrnɪŋ aɪd laɪk tə ɪnˈroʊl ɪn ən ˈɪŋɡlɪʃ kɔːrs/', tr:'Günaydın! Bir İngilizce kursuna kaydolmak istiyorum.'},
       {speaker:'B', gender:'m', en:"Welcome! What is your current level?", ro:'/ˈwɛlkəm wɒt ɪz jɔːr ˈkʌrənt ˈlɛvəl/', tr:'Hoş geldiniz! Mevcut seviyeniz nedir?'},
       {speaker:'A', gender:'f', en:"I'm a beginner. I've only studied for a few weeks.", ro:'/aɪm ə bɪˈɡɪnər aɪv ˈoʊnli ˈstʌdid fər ə fjuː wiːks/', tr:'Yeni başlayandayım. Sadece birkaç haftadır çalışıyorum.'},
       {speaker:'B', gender:'m', en:"We have a beginner's class on Monday, Wednesday, and Friday at six pm.", ro:'/wiː hæv ə bɪˈɡɪnərz klɑːs ɒn ˈmʌndeɪ ˈwɛnzdeɪ ænd ˈfraɪdeɪ æt sɪks piːɛm/', tr:'Pazartesi, Çarşamba ve Cuma saat 18:00\'de başlangıç sınıfımız var.'},
       {speaker:'A', gender:'f', en:"That's perfect for me. How much is the course?", ro:'/ðæts ˈpɜːrfɪkt fər miː haʊ mʌtʃ ɪz ðə kɔːrs/', tr:'Bu benim için mükemmel. Kurs ne kadar?'},
       {speaker:'B', gender:'m', en:"Two hundred pounds for ten weeks, including all materials.", ro:'/tuː ˈhʌndrəd paʊndz fər tɛn wiːks ɪnˈkluːdɪŋ ɔːl məˈtɪərɪəlz/', tr:'Tüm materyaller dahil, on hafta için iki yüz sterlin.'},
       {speaker:'A', gender:'f', en:'I\'ll take it! Can I start next Monday?', ro:'/aɪl teɪk ɪt kæn aɪ stɑːrt nɛkst ˈmʌndeɪ/', tr:'Alıyorum! Gelecek Pazartesi başlayabilir miyim?'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:"To improve your English, you should practise every day. Reading, writing, listening, and speaking are all important skills. Try to watch films and TV series in English. Use subtitles at first, then try without them. Most importantly, do not be afraid of making mistakes.",
     tr:'İngilizce\'nizi geliştirmek için her gün pratik yapmalısınız. Okuma, yazma, dinleme ve konuşma önemli becerilerdir. İngilizce film ve dizi izlemeyi deneyin. Önce altyazıyla, sonra altyazısız deneyin. En önemlisi, hata yapmaktan korkmayın.',
     questions:[
       {q:'What should you do every day?', opts:['take a test','practise','write essays','take notes'], answer:1, tr:'Her gün ne yapmalısınız?'},
       {q:'What is recommended for listening practice?', opts:['radio news','podcasts','films and TV','audiobooks'], answer:2, tr:'Dinleme pratiği için ne tavsiye ediliyor?'},
       {q:'What should you NOT be afraid of?', opts:['speaking','exams','making mistakes','teachers'], answer:2, tr:'Neden korkmamak gerekiyor?'}
     ]}
  ]
};
LESSONS[15] = L15;
