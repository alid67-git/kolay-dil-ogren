// ders11.js — English Lesson 11: Health
const L11 = {
  words: [
    {id:'w1', en:'doctor', ro:'/ˈdɒktər/', tr:'doktor'},
    {id:'w2', en:'hospital', ro:'/ˈhɒspɪtəl/', tr:'hastane'},
    {id:'w3', en:'pharmacy / chemist', ro:'/ˈfɑːrməsi/', tr:'eczane'},
    {id:'w4', en:"I don't feel well.", ro:'/aɪ doʊnt fiːl wɛl/', tr:'İyi hissetmiyorum.',
     tip:'Hastalandığınızda.', ctx:'Doktora veya birine söylemek için.',
     examples:[{en:"I don't feel well. I have a headache.", ro:'/aɪ doʊnt fiːl wɛl aɪ hæv ə ˈhɛdeɪk/', tr:'İyi hissetmiyorum. Baş ağrım var.',
       bd:[{ro:"I don't feel well",tr:'İyi hissetmiyorum',role:'verb'},{ro:'I have a headache',tr:'Baş ağrım var',role:'symptom'}]}]},
    {id:'w5', en:'headache', ro:'/ˈhɛdeɪk/', tr:'baş ağrısı'},
    {id:'w6', en:'stomachache', ro:'/ˈstʌməkeɪk/', tr:'mide ağrısı'},
    {id:'w7', en:'fever', ro:'/ˈfiːvər/', tr:'ateş'},
    {id:'w8', en:'cold', ro:'/koʊld/', tr:'soğuk algınlığı',
     examples:[{en:'I have a cold.', ro:'/aɪ hæv ə koʊld/', tr:'Soğuk algınlığım var.',
       bd:[{ro:'I have',tr:'var',role:'verb'},{ro:'a cold',tr:'soğuk algınlığı',role:'noun'}]}]},
    {id:'w9', en:'cough', ro:'/kɒf/', tr:'öksürük'},
    {id:'w10', en:'sore throat', ro:'/sɔːr θroʊt/', tr:'boğaz ağrısı'},
    {id:'w11', en:'pain', ro:'/peɪn/', tr:'ağrı / acı'},
    {id:'w12', en:'medicine / medication', ro:'/ˈmɛdɪsɪn/', tr:'ilaç'},
    {id:'w13', en:'prescription', ro:'/prɪˈskrɪpʃən/', tr:'reçete'},
    {id:'w14', en:'allergy', ro:'/ˈælərdʒi/', tr:'alerji'},
    {id:'w15', en:'appointment', ro:'/əˈpɔɪntmənt/', tr:'randevu',
     examples:[{en:"I'd like to make an appointment with the doctor.", ro:'/aɪd laɪk tə meɪk ən əˈpɔɪntmənt wɪð ðə ˈdɒktər/', tr:'Doktorla randevu almak istiyorum.',
       bd:[{ro:"I'd like to make",tr:'Almak istiyorum',role:'modal'},{ro:'an appointment',tr:'randevu',role:'noun'},{ro:'with the doctor',tr:'doktorla',role:'phrase'}]}]},
    {id:'w16', en:'emergency', ro:'/ɪˈmɜːrdʒənsi/', tr:'acil durum'},
    {id:'w17', en:'ambulance', ro:'/ˈæmbjʊləns/', tr:'ambulans'},
    {id:'w18', en:'hurt', ro:'/hɜːrt/', tr:'acıyor / ağrıyor',
     examples:[{en:'My leg hurts.', ro:'/maɪ lɛɡ hɜːrts/', tr:'Bacağım ağrıyor.',
       bd:[{ro:'My leg',tr:'Bacağım',role:'subject'},{ro:'hurts',tr:'ağrıyor',role:'verb'}]}]},
    {id:'w19', en:'broken', ro:'/ˈbroʊkən/', tr:'kırık',
     examples:[{en:'I think my arm is broken.', ro:'/aɪ θɪŋk maɪ ɑːrm ɪz ˈbroʊkən/', tr:'Sanırım kolum kırık.',
       bd:[{ro:'I think',tr:'Sanırım',role:'phrase'},{ro:'my arm is broken',tr:'kolum kırık',role:'adjective'}]}]},
    {id:'w20', en:'blood pressure', ro:'/blʌd ˈprɛʃər/', tr:'tansiyon / kan basıncı'}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'Şikayet Bildirme', title_en:'Describing Symptoms',
     explanation:'Sağlık şikayetleri için farklı kalıplar.',
     table:[
       {pronoun:'have', form:'I have + noun', example:'I have a fever.', tr:'Ateşim var.'},
       {pronoun:'feel', form:'I feel + adjective', example:'I feel dizzy.', tr:'Başım dönüyor.'},
       {pronoun:'hurts', form:'My [part] hurts', example:'My back hurts.', tr:'Sırtım ağrıyor.'},
       {pronoun:'since', form:'since / for', example:"I've had a cough for three days.", tr:'Üç gündür öksürüğüm var.'}
     ],
     note:'"for" = süre (for three days); "since" = başlangıç noktası (since Monday)'}
  ],

  speaking: [
    {id:'sp1', en:"I don't feel well. I have a fever and a sore throat.", ro:'/aɪ doʊnt fiːl wɛl aɪ hæv ə ˈfiːvər ænd ə sɔːr θroʊt/', tr:'İyi hissetmiyorum. Ateşim ve boğaz ağrım var.',
     tip:'Semptom anlatma.', prompt:'Semptomlarınızı anlatın'},
    {id:'sp2', en:"I'd like to make an appointment for tomorrow morning.", ro:'/aɪd laɪk tə meɪk ən əˈpɔɪntmənt fər təˈmɒroʊ ˈmɔːrnɪŋ/', tr:'Yarın sabah için randevu almak istiyorum.',
     tip:'Randevu alma.', prompt:'Randevu alın'},
    {id:'sp3', en:"I'm allergic to penicillin.", ro:'/aɪm əˈlɜːrdʒɪk tə ˌpɛnɪˈsɪlɪn/', tr:'Penisiline alerjim var.',
     tip:'Alerji bildirme.', prompt:'Alerjinizi bildirin'}
  ],

  dialogues: [
    {id:'d1', title:'Doktorda', title_en:'At the Doctor\'s',
     lines:[
       {speaker:'A', gender:'f', en:'Good morning. What seems to be the problem?', ro:'/ɡʊd ˈmɔːrnɪŋ wɒt siːmz tə biː ðə ˈprɒbləm/', tr:'Günaydın. Sorun ne gibi görünüyor?'},
       {speaker:'B', gender:'m', en:"I haven't been feeling well for two days. I have a headache and a sore throat.", ro:'/aɪ hævnt biːn ˈfiːlɪŋ wɛl fər tuː deɪz aɪ hæv ə ˈhɛdeɪk ænd ə sɔːr θroʊt/', tr:'İki gündür iyi hissetmiyorum. Baş ağrım ve boğaz ağrım var.'},
       {speaker:'A', gender:'f', en:'Do you have a fever?', ro:'/duː juː hæv ə ˈfiːvər/', tr:'Ateşiniz var mı?'},
       {speaker:'B', gender:'m', en:'Yes, thirty-eight degrees since yesterday.', ro:'/jɛs ˈθɜːrti eɪt dɪˈɡriːz sɪns ˈjɛstərdeɪ/', tr:'Evet, dünden beri otuz sekiz derece.'},
       {speaker:'A', gender:'f', en:"Open your mouth, please. I see. It's a throat infection. I'll prescribe antibiotics.", ro:'/ˈoʊpən jɔːr maʊθ pliːz aɪ siː ɪts ə θroʊt ɪnˈfɛkʃən aɪl prɪˈskraɪb ˌæntɪbaɪˈɒtɪks/', tr:'Ağzınızı açın lütfen. Anlıyorum. Boğaz enfeksiyonu. Antibiyotik yazacağım.'},
       {speaker:'B', gender:'m', en:'Are there any side effects?', ro:'/ɑːr ðɛr ɛni saɪd ɪˈfɛkts/', tr:'Yan etkileri var mı?'},
       {speaker:'A', gender:'f', en:'Mild nausea possibly. Take one tablet three times a day with food. Rest and drink plenty of water.', ro:'/maɪld ˈnɔːzɪə ˈpɒsɪbli teɪk wʌn ˈtæblɪt θriː taɪmz ə deɪ wɪð fuːd rɛst ænd drɪŋk ˈplɛnti əv ˈwɔːtər/', tr:'Hafif mide bulantısı olabilir. Günde üç kez yemekle bir tablet alın. Dinlenin ve bol su için.'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:"The clinic is open Monday to Friday, eight am to six pm, and Saturday nine to one. To make an appointment, call oh-two-oh, seven-seven-seven-four. In an emergency, please go to the nearest hospital or call nine-nine-nine.",
     tr:'Klinik Pazartesi-Cuma 08:00-18:00, Cumartesi 09:00-13:00 açık. Randevu için 020-7774\'ü arayın. Acil durumda en yakın hastaneye gidin veya 999\'u arayın.',
     questions:[
       {q:'What time does the clinic open on Saturday?', opts:['8am','9am','10am','11am'], answer:1, tr:'Cumartesi saat kaçta açılıyor?'},
       {q:'How do you make an appointment?', opts:['walk in','email','call','online'], answer:2, tr:'Nasıl randevu alırsınız?'},
       {q:'What is the emergency number?', opts:['112','911','999','000'], answer:2, tr:'Acil numarası ne?'}
     ]}
  ]
};
LESSONS[11] = L11;
