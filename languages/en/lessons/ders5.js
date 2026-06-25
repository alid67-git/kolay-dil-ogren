// ders5.js — English Lesson 5: Restaurant & Food
const L5 = {
  words: [
    {id:'w1', en:'A table for two, please.', ro:'/ə ˈteɪbəl fər tuː pliːz/', tr:'İki kişilik masa, lütfen.',
     tip:'Restoranda masa istemek.', ctx:'Restorana girişte.',
     examples:[{en:'Good evening. A table for two, please.', ro:'/ɡʊd ˈiːvnɪŋ ə ˈteɪbəl fər tuː pliːz/', tr:'İyi akşamlar. İki kişilik masa, lütfen.',
       bd:[{ro:'A table for two',tr:'iki kişilik masa',role:'noun'},{ro:'please',tr:'lütfen',role:'courtesy'}]}]},
    {id:'w2', en:'menu', ro:'/ˈmɛnjuː/', tr:'menü',
     examples:[{en:'Can I see the menu, please?', ro:'/kæn aɪ siː ðə ˈmɛnjuː pliːz/', tr:'Menüyü görebilir miyim, lütfen?',
       bd:[{ro:'Can I see',tr:'Görebilir miyim',role:'modal'},{ro:'the menu',tr:'menüyü',role:'noun'}]}]},
    {id:'w3', en:'order', ro:'/ˈɔːrdər/', tr:'sipariş (vermek)',
     examples:[{en:'Are you ready to order?', ro:'/ɑːr juː ˈrɛdi tə ˈɔːrdər/', tr:'Sipariş vermeye hazır mısınız?',
       bd:[{ro:'Are you ready',tr:'Hazır mısınız',role:'question'},{ro:'to order',tr:'sipariş vermek',role:'verb'}]}]},
    {id:'w4', en:"I'd like...", ro:'/aɪd laɪk/', tr:'...istiyorum / ...alabilir miyim',
     tip:'Sipariş verirken nazik ifade.', ctx:'Restoran, kafe, dükkan.',
     examples:[{en:"I'd like a coffee, please.", ro:'/aɪd laɪk ə ˈkɒfi pliːz/', tr:'Bir kahve istiyorum, lütfen.',
       bd:[{ro:"I'd like",tr:'İstiyorum',role:'modal'},{ro:'a coffee',tr:'bir kahve',role:'noun'}]}]},
    {id:'w5', en:'starter / appetizer', ro:'/ˈstɑːrtər / ˈæpɪtaɪzər/', tr:'başlangıç yemeği'},
    {id:'w6', en:'main course', ro:'/meɪn kɔːrs/', tr:'ana yemek'},
    {id:'w7', en:'dessert', ro:'/dɪˈzɜːrt/', tr:'tatlı'},
    {id:'w8', en:'drink', ro:'/drɪŋk/', tr:'içecek'},
    {id:'w9', en:'water', ro:'/ˈwɔːtər/', tr:'su'},
    {id:'w10', en:'coffee', ro:'/ˈkɒfi/', tr:'kahve'},
    {id:'w11', en:'tea', ro:'/tiː/', tr:'çay'},
    {id:'w12', en:'juice', ro:'/dʒuːs/', tr:'meyve suyu'},
    {id:'w13', en:'bread', ro:'/brɛd/', tr:'ekmek'},
    {id:'w14', en:'soup', ro:'/suːp/', tr:'çorba'},
    {id:'w15', en:'salad', ro:'/ˈsæləd/', tr:'salata'},
    {id:'w16', en:'chicken', ro:'/ˈtʃɪkɪn/', tr:'tavuk'},
    {id:'w17', en:'beef', ro:'/biːf/', tr:'sığır eti'},
    {id:'w18', en:'fish', ro:'/fɪʃ/', tr:'balık'},
    {id:'w19', en:'vegetarian', ro:'/ˌvɛdʒɪˈtɛərɪən/', tr:'vejetaryen',
     examples:[{en:'Do you have vegetarian options?', ro:'/duː juː hæv ˌvɛdʒɪˈtɛərɪən ˈɒpʃənz/', tr:'Vejetaryen seçeneğiniz var mı?',
       bd:[{ro:'Do you have',tr:'Var mı',role:'question'},{ro:'vegetarian options',tr:'vejetaryen seçenek',role:'noun'}]}]},
    {id:'w20', en:'delicious', ro:'/dɪˈlɪʃəs/', tr:'lezzetli / nefis'},
    {id:'w21', en:'bill', ro:'/bɪl/', tr:'hesap'},
    {id:'w22', en:'tip', ro:'/tɪp/', tr:'bahşiş'},
    {id:'w23', en:'reservation', ro:'/ˌrɛzərˈveɪʃən/', tr:'rezervasyon',
     examples:[{en:'I have a reservation for two.', ro:'/aɪ hæv ə ˌrɛzərˈveɪʃən fər tuː/', tr:'İki kişilik rezervasyonum var.',
       bd:[{ro:'I have',tr:'var',role:'verb'},{ro:'a reservation',tr:'rezervasyon',role:'noun'},{ro:'for two',tr:'iki kişilik',role:'quantity'}]}]},
    {id:'w24', en:'allergic', ro:'/əˈlɜːrdʒɪk/', tr:'alerjik',
     examples:[{en:'I am allergic to nuts.', ro:'/aɪ æm əˈlɜːrdʒɪk tə nʌts/', tr:'Kuruyemişe alerjim var.',
       bd:[{ro:'I am allergic',tr:'Alerjim var',role:'adjective'},{ro:'to nuts',tr:'kuruyemişe',role:'noun'}]}]},
    {id:'w25', en:'enjoy your meal', ro:'/ɪnˈdʒɔɪ jɔːr miːl/', tr:'Afiyet olsun'}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'Sipariş Verme Kalıpları', title_en:'Ordering Phrases',
     explanation:'Restoranda sipariş verirken kullanılan nazik kalıplar.',
     table:[
       {pronoun:'Nazik istek', form:"I'd like / I'll have", example:"I'd like the soup.", tr:'Çorba istiyorum.'},
       {pronoun:'Soru', form:'Can I have...?', example:'Can I have the menu?', tr:'Menüyü alabilir miyim?'},
       {pronoun:'Seçim', form:"I'll take...", example:"I'll take the fish.", tr:'Balığı alıyorum.'},
       {pronoun:'Tavsiye', form:'What do you recommend?', example:'What do you recommend?', tr:'Ne tavsiye edersiniz?'}
     ],
     note:'"Would you like..." = Arz etmek; "I would like..." = İstemek'}
  ],

  speaking: [
    {id:'sp1', en:'A table for three, please.', ro:'/ə ˈteɪbəl fər θriː pliːz/', tr:'Üç kişilik masa, lütfen.',
     tip:'Masa isteme.', prompt:'Masa isteyin'},
    {id:'sp2', en:"I'd like the chicken soup, please.", ro:'/aɪd laɪk ðə ˈtʃɪkɪn suːp pliːz/', tr:'Tavuk çorbası istiyorum, lütfen.',
     tip:'Yemek sipariş etme.', prompt:'Yemek sipariş edin'},
    {id:'sp3', en:'Can I have the bill, please?', ro:'/kæn aɪ hæv ðə bɪl pliːz/', tr:'Hesabı alabilir miyim, lütfen?',
     tip:'Hesap isteme.', prompt:'Hesap isteyin'},
    {id:'sp4', en:'This is delicious! Compliments to the chef.', ro:'/ðɪs ɪz dɪˈlɪʃəs ˈkɒmplɪmənts tə ðə ʃɛf/', tr:'Bu çok lezzetli! Aşçıya saygılar.',
     tip:'Yemeği övme.', prompt:'Yemeği övün'}
  ],

  dialogues: [
    {id:'d1', title:'Restoran Konuşması', title_en:'At the Restaurant',
     lines:[
       {speaker:'A', gender:'f', en:'Good evening! Do you have a reservation?', ro:'/ɡʊd ˈiːvnɪŋ duː juː hæv ə ˌrɛzərˈveɪʃən/', tr:'İyi akşamlar! Rezervasyonunuz var mı?'},
       {speaker:'B', gender:'m', en:'Yes, I have a reservation for two. The name is Smith.', ro:'/jɛs aɪ hæv ə ˌrɛzərˈveɪʃən fər tuː ðə neɪm ɪz smɪθ/', tr:'Evet, iki kişilik rezervasyonum var. İsim Smith.'},
       {speaker:'A', gender:'f', en:'Of course. Please follow me. Here is your table.', ro:'/əv kɔːrs pliːz ˈfɒloʊ miː hɪər ɪz jɔːr ˈteɪbəl/', tr:'Tabii ki. Lütfen beni takip edin. İşte masanız.'},
       {speaker:'B', gender:'m', en:'Thank you. Can I see the menu?', ro:'/θæŋk juː kæn aɪ siː ðə ˈmɛnjuː/', tr:'Teşekkür ederim. Menüyü görebilir miyim?'},
       {speaker:'A', gender:'f', en:'Of course! What would you like to drink?', ro:'/əv kɔːrs wɒt wʊd juː laɪk tə drɪŋk/', tr:'Tabii! Ne içmek istersiniz?'},
       {speaker:'B', gender:'m', en:"I'd like water and a coffee, please.", ro:'/aɪd laɪk ˈwɔːtər ænd ə ˈkɒfi pliːz/', tr:'Su ve kahve istiyorum, lütfen.'},
       {speaker:'A', gender:'f', en:'Are you ready to order?', ro:'/ɑːr juː ˈrɛdi tə ˈɔːrdər/', tr:'Sipariş vermeye hazır mısınız?'},
       {speaker:'B', gender:'m', en:"Yes. I'd like the chicken and salad, please.", ro:'/jɛs aɪd laɪk ðə ˈtʃɪkɪn ænd ˈsæləd pliːz/', tr:'Evet. Tavuk ve salata istiyorum, lütfen.'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:"Today's specials are grilled salmon with vegetables for fourteen pounds, and a vegetarian pasta for ten pounds. Dessert is chocolate cake for five pounds.",
     tr:'Bugünün özel yemekleri: sebzeli ızgara somon on dört sterlin, vejetaryen makarna on sterlin. Tatlı: çikolatalı kek beş sterlin.',
     questions:[
       {q:'How much is the salmon?', opts:['£10','£12','£14','£16'], answer:2, tr:'Somon ne kadar?'},
       {q:'What vegetarian option is available?', opts:['soup','salad','pasta','pizza'], answer:2, tr:'Hangi vejetaryen seçenek var?'},
       {q:'What is the dessert?', opts:['ice cream','cheesecake','apple pie','chocolate cake'], answer:3, tr:'Tatlı ne?'}
     ]}
  ]
};
LESSONS[5] = L5;
