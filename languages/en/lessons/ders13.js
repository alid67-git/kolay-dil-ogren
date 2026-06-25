// ders13.js — English Lesson 13: Social Life
const L13 = {
  words: [
    {id:'w1', en:'friend', ro:'/frɛnd/', tr:'arkadaş'},
    {id:'w2', en:'family', ro:'/ˈfæməli/', tr:'aile'},
    {id:'w3', en:'party', ro:'/ˈpɑːrti/', tr:'parti'},
    {id:'w4', en:'invite', ro:'/ɪnˈvaɪt/', tr:'davet etmek',
     examples:[{en:"I'd like to invite you to my birthday party.", ro:'/aɪd laɪk tə ɪnˈvaɪt juː tə maɪ ˈbɜːrθdeɪ ˈpɑːrti/', tr:'Sizi doğum günü partim için davet etmek istiyorum.',
       bd:[{ro:"I'd like to invite",tr:'Davet etmek istiyorum',role:'verb'},{ro:'you to my party',tr:'sizi partim için',role:'phrase'}]}]},
    {id:'w5', en:'Would you like to...?', ro:'/wʊd juː laɪk tə/', tr:'...ister misiniz?',
     tip:'Kibar davet/teklif.', ctx:'Sosyal davetlerde.',
     examples:[{en:'Would you like to join us for dinner?', ro:'/wʊd juː laɪk tə dʒɔɪn ʌs fər ˈdɪnər/', tr:'Akşam yemeğine bize katılmak ister misiniz?',
       bd:[{ro:'Would you like to join',tr:'Katılmak ister misiniz',role:'modal'},{ro:'us for dinner',tr:'akşam yemeğimize',role:'noun'}]}]},
    {id:'w6', en:'Sure! / Of course!', ro:'/ʃʊər / əv kɔːrs/', tr:'Tabii! / Elbette!'},
    {id:'w7', en:"I'm afraid I can't.", ro:'/aɪm əˈfreɪd aɪ kɑːnt/', tr:'Korkarım katılamam.',
     tip:'Nazikçe reddetme.'},
    {id:'w8', en:'fun', ro:'/fʌn/', tr:'eğlenceli / eğlence'},
    {id:'w9', en:'enjoy', ro:'/ɪnˈdʒɔɪ/', tr:'tadını çıkarmak / keyif almak'},
    {id:'w10', en:'hobby', ro:'/ˈhɒbi/', tr:'hobi',
     examples:[{en:'What are your hobbies?', ro:'/wɒt ɑːr jɔːr ˈhɒbiz/', tr:'Hobileriniz neler?',
       bd:[{ro:'What are',tr:'Neler',role:'question'},{ro:'your hobbies',tr:'hobileriniz',role:'noun'}]}]},
    {id:'w11', en:'go out', ro:'/ɡoʊ aʊt/', tr:'dışarı çıkmak'},
    {id:'w12', en:'stay in', ro:'/steɪ ɪn/', tr:'evde kalmak'},
    {id:'w13', en:'concert', ro:'/ˈkɒnsərt/', tr:'konser'},
    {id:'w14', en:'cinema / movies', ro:'/ˈsɪnəmə / ˈmuːviz/', tr:'sinema'},
    {id:'w15', en:'restaurant', ro:'/ˈrɛstərɒnt/', tr:'restoran'},
    {id:'w16', en:'bar / pub', ro:'/bɑːr / pʌb/', tr:'bar / pub'},
    {id:'w17', en:'weekend', ro:'/ˌwiːkˈɛnd/', tr:'hafta sonu'},
    {id:'w18', en:'plan', ro:'/plæn/', tr:'plan',
     examples:[{en:'What are your plans for the weekend?', ro:'/wɒt ɑːr jɔːr plænz fər ðə ˌwiːkˈɛnd/', tr:'Hafta sonu planlarınız ne?',
       bd:[{ro:'What are your plans',tr:'Planlarınız ne',role:'question'},{ro:'for the weekend',tr:'hafta sonu için',role:'time'}]}]},
    {id:'w19', en:'meet up', ro:'/miːt ʌp/', tr:'buluşmak'},
    {id:'w20', en:"Let's...!", ro:'/lɛts/', tr:'Hadi...!',
     tip:'Öneri yapma kalıbı.',
     examples:[{en:"Let's go to the cinema tonight!", ro:'/lɛts ɡoʊ tə ðə ˈsɪnəmə təˈnaɪt/', tr:'Bu gece sinemaya gidelim!',
       bd:[{ro:"Let's go",tr:'Gidelim',role:'suggestion'},{ro:'to the cinema',tr:'sinemaya',role:'noun'},{ro:'tonight',tr:'bu gece',role:'time'}]}]}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'Teklif ve Davet', title_en:'Making Suggestions & Invitations',
     explanation:'Sosyal ortamlarda kullanılan teklif ve davet kalıpları.',
     table:[
       {pronoun:'Teklif', form:"Let's + verb", example:"Let's go for a walk.", tr:'Yürüyüşe çıkalım.'},
       {pronoun:'Davet', form:'Would you like to...?', example:'Would you like to come?', tr:'Gelmek ister misiniz?'},
       {pronoun:'Kabul', form:'Sure! / I would love to!', example:"I'd love to!", tr:'Çok isterim!'},
       {pronoun:'Red', form:"I'm afraid I can't.", example:"Sorry, I can't make it.", tr:'Üzgünüm, gelemeyeceğim.'}
     ],
     note:'"How about...?" ve "What about...?" da öneri yapmak için kullanılır'}
  ],

  speaking: [
    {id:'sp1', en:'Would you like to go to the cinema on Saturday?', ro:'/wʊd juː laɪk tə ɡoʊ tə ðə ˈsɪnəmə ɒn ˈsætərdeɪ/', tr:'Cumartesi sinemaya gitmek ister misiniz?',
     tip:'Davet etme.', prompt:'Birini bir etkinliğe davet edin'},
    {id:'sp2', en:"I'd love to! What time?", ro:'/aɪd lʌv tuː wɒt taɪm/', tr:'Çok isterim! Saat kaçta?',
     tip:'Daveti kabul etme.', prompt:'Bir daveti kabul edin'},
    {id:'sp3', en:"I'm sorry, I can't. I have other plans.", ro:'/aɪm ˈsɒri aɪ kɑːnt aɪ hæv ˈʌðər plænz/', tr:'Üzgünüm, katılamam. Başka planlarım var.',
     tip:'Nazikçe reddetme.', prompt:'Bir daveti nazikçe reddedin'}
  ],

  dialogues: [
    {id:'d1', title:'Hafta Sonu Planları', title_en:'Weekend Plans',
     lines:[
       {speaker:'A', gender:'m', en:"Hey! Do you have any plans this weekend?", ro:'/heɪ duː juː hæv ɛni plænz ðɪs ˌwiːkˈɛnd/', tr:'Selam! Bu hafta sonu bir planın var mı?'},
       {speaker:'B', gender:'f', en:"Not really. Why?", ro:'/nɒt ˈrɪəli waɪ/', tr:'Pek yok. Neden?'},
       {speaker:'A', gender:'m', en:"Some friends and I are going to a concert on Saturday. Would you like to come?", ro:'/sʌm frɛndz ænd aɪ ɑːr ˈɡoʊɪŋ tə ə ˈkɒnsərt ɒn ˈsætərdeɪ wʊd juː laɪk tə kʌm/', tr:'Bazı arkadaşlarımla Cumartesi konsere gidiyoruz. Gelmek ister misin?'},
       {speaker:'B', gender:'f', en:"That sounds fun! What kind of music?", ro:'/ðæt saʊndz fʌn wɒt kaɪnd əv ˈmjuːzɪk/', tr:'Kulağa eğlenceli geliyor! Ne tür müzik?'},
       {speaker:'A', gender:'m', en:"Jazz. The concert starts at eight. We are meeting for dinner first at six.", ro:'/dʒæz ðə ˈkɒnsərt stɑːrts æt eɪt wiː ɑːr ˈmiːtɪŋ fər ˈdɪnər fɜːrst æt sɪks/', tr:'Caz. Konser saat sekizde başlıyor. Önce saat altıda yemek için buluşuyoruz.'},
       {speaker:'B', gender:'f', en:"I'd love to join you! Where are we meeting?", ro:'/aɪd lʌv tə dʒɔɪn juː wɛr ɑːr wiː ˈmiːtɪŋ/', tr:'Sizinle gelmek isterim! Nerede buluşuyoruz?'},
       {speaker:'A', gender:'m', en:"At the Italian restaurant on King Street. See you Saturday!", ro:'/æt ðə ɪˈtæliən ˈrɛstərɒnt ɒn kɪŋ striːt siː juː ˈsætərdeɪ/', tr:'King Sokak\'taki İtalyan restoranında. Cumartesi görüşürüz!'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:"Hi everyone! I am having a birthday party next Saturday, the thirtieth. It starts at seven in the evening. Please bring something to eat or drink. My address is twelve Park Road. Hope to see you all there!",
     tr:'Herkese merhaba! Gelecek Cumartesi, otuzunda doğum günü partim var. Saat yedide başlıyor. Lütfen bir şeyler yiyecek veya içecek getirin. Adresim: 12 Park Sokak. Hepinizi görmek isterim!',
     questions:[
       {q:'When is the party?', opts:['Friday the 29th','Saturday the 30th','Sunday the 31st','Saturday the 20th'], answer:1, tr:'Parti ne zaman?'},
       {q:'What time does it start?', opts:['6pm','7pm','8pm','9pm'], answer:1, tr:'Saat kaçta başlıyor?'},
       {q:'What should guests bring?', opts:['a gift','nothing','food or drink','flowers'], answer:2, tr:'Misafirler ne getirmeli?'}
     ]}
  ]
};
LESSONS[13] = L13;
