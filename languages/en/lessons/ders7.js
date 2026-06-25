// ders7.js — English Lesson 7: Directions
const L7 = {
  words: [
    {id:'w1', en:'Where is...?', ro:'/wɛr ɪz/', tr:'...nerede?',
     tip:'Yer sormak için temel kalıp.', ctx:'Yol tarifi.',
     examples:[{en:'Excuse me, where is the train station?', ro:'/ɪkˈskjuːz miː wɛr ɪz ðə treɪn ˈsteɪʃən/', tr:'Pardon, tren istasyonu nerede?',
       bd:[{ro:'Excuse me',tr:'Pardon',role:'courtesy'},{ro:'where is',tr:'nerede',role:'question'},{ro:'the train station',tr:'tren istasyonu',role:'noun'}]}]},
    {id:'w2', en:'turn left', ro:'/tɜːrn lɛft/', tr:'sola dön',
     examples:[{en:'Turn left at the traffic lights.', ro:'/tɜːrn lɛft æt ðə ˈtræfɪk laɪts/', tr:'Trafik ışıklarında sola dön.',
       bd:[{ro:'Turn left',tr:'Sola dön',role:'direction'},{ro:'at the traffic lights',tr:'trafik ışıklarında',role:'location'}]}]},
    {id:'w3', en:'turn right', ro:'/tɜːrn raɪt/', tr:'sağa dön'},
    {id:'w4', en:'go straight', ro:'/ɡoʊ streɪt/', tr:'düz git'},
    {id:'w5', en:'go back', ro:'/ɡoʊ bæk/', tr:'geri dön'},
    {id:'w6', en:'on the left', ro:'/ɒn ðə lɛft/', tr:'solda',
     examples:[{en:'The bank is on the left.', ro:'/ðə bæŋk ɪz ɒn ðə lɛft/', tr:'Banka solda.',
       bd:[{ro:'The bank',tr:'Banka',role:'noun'},{ro:'is on the left',tr:'solda',role:'location'}]}]},
    {id:'w7', en:'on the right', ro:'/ɒn ðə raɪt/', tr:'sağda'},
    {id:'w8', en:'next to', ro:'/nɛkst tuː/', tr:'yanında'},
    {id:'w9', en:'opposite', ro:'/ˈɒpəzɪt/', tr:'karşısında'},
    {id:'w10', en:'near / far', ro:'/nɪər / fɑːr/', tr:'yakın / uzak'},
    {id:'w11', en:'street', ro:'/striːt/', tr:'sokak / cadde'},
    {id:'w12', en:'road', ro:'/roʊd/', tr:'yol'},
    {id:'w13', en:'corner', ro:'/ˈkɔːrnər/', tr:'köşe',
     examples:[{en:'Turn left at the corner.', ro:'/tɜːrn lɛft æt ðə ˈkɔːrnər/', tr:'Köşede sola dön.',
       bd:[{ro:'Turn left',tr:'Sola dön',role:'direction'},{ro:'at the corner',tr:'köşede',role:'location'}]}]},
    {id:'w14', en:'traffic lights', ro:'/ˈtræfɪk laɪts/', tr:'trafik ışıkları'},
    {id:'w15', en:'crossroads / intersection', ro:'/ˈkrɒsroʊdz/', tr:'kavşak'},
    {id:'w16', en:'bridge', ro:'/brɪdʒ/', tr:'köprü'},
    {id:'w17', en:'park', ro:'/pɑːrk/', tr:'park'},
    {id:'w18', en:'hospital', ro:'/ˈhɒspɪtəl/', tr:'hastane'},
    {id:'w19', en:'police station', ro:'/pəˈliːs ˈsteɪʃən/', tr:'polis karakolu'},
    {id:'w20', en:'How far is it?', ro:'/haʊ fɑːr ɪz ɪt/', tr:'Ne kadar uzak?',
     examples:[{en:'How far is it to the airport?', ro:'/haʊ fɑːr ɪz ɪt tə ðə ˈɛərpɔːrt/', tr:'Havalimanına ne kadar uzak?',
       bd:[{ro:'How far',tr:'Ne kadar uzak',role:'question'},{ro:'is it to',tr:'(uzaklık)',role:'verb'},{ro:'the airport',tr:'havalimanı',role:'noun'}]}]},
    {id:'w21', en:'minute walk', ro:'/ˈmɪnɪt wɔːk/', tr:'dakika yürüme mesafesi',
     examples:[{en:"It's five minutes' walk.", ro:'/ɪts faɪv ˈmɪnɪts wɔːk/', tr:'Beş dakika yürüme mesafesinde.',
       bd:[{ro:"It's",tr:'(mesafe)',role:'verb'},{ro:'five minutes',tr:'beş dakika',role:'time'},{ro:'walk',tr:'yürüme',role:'noun'}]}]}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'Yön Bildiren İfadeler', title_en:'Giving Directions',
     explanation:'İngilizce\'de yön tarifi için emir kipi kullanılır.',
     table:[
       {pronoun:'Düz git', form:'Go straight on', example:'Go straight on for 200 metres.', tr:'200 metre düz git.'},
       {pronoun:'Dön', form:'Turn left/right', example:'Turn right at the lights.', tr:'Işıklarda sağa dön.'},
       {pronoun:'Geç', form:'Go past', example:'Go past the church.', tr:'Kiliseyi geç.'},
       {pronoun:'Al', form:'Take', example:'Take the second left.', tr:'İkinci soldan dön.'}
     ],
     note:'"It\'s on your left/right" — varınca sana göre sol/sağda demek'}
  ],

  speaking: [
    {id:'sp1', en:'Excuse me, how do I get to the hospital?', ro:'/ɪkˈskjuːz miː haʊ duː aɪ ɡɛt tə ðə ˈhɒspɪtəl/', tr:'Pardon, hastaneye nasıl gidebilirim?',
     tip:'Yol tarifi isteme.', prompt:'Yol tarifi isteyin'},
    {id:'sp2', en:'Go straight on, then turn left at the traffic lights.', ro:'/ɡoʊ streɪt ɒn ðɛn tɜːrn lɛft æt ðə ˈtræfɪk laɪts/', tr:'Düz gidin, sonra trafik ışıklarında sola dönün.',
     tip:'Yol tarifi verme.', prompt:'Yol tarifi verin'},
    {id:'sp3', en:"Sorry, I don't know. I'm not from here.", ro:'/ˈsɒri aɪ doʊnt noʊ aɪm nɒt frɒm hɪər/', tr:'Üzgünüm, bilmiyorum. Ben buradan değilim.',
     tip:'Bilmediğinizde.', prompt:'Bilmediğinizi belirtin'}
  ],

  dialogues: [
    {id:'d1', title:'Yol Tarifi', title_en:'Asking for Directions',
     lines:[
       {speaker:'A', gender:'m', en:'Excuse me! I am looking for the city centre. Am I going the right way?', ro:'/ɪkˈskjuːz miː aɪ æm ˈlʊkɪŋ fər ðə ˈsɪti ˈsɛntər æm aɪ ˈɡoʊɪŋ ðə raɪt weɪ/', tr:'Pardon! Şehir merkezini arıyorum. Doğru yolda mıyım?'},
       {speaker:'B', gender:'f', en:"No, I'm afraid not. You need to go back.", ro:'/noʊ aɪm əˈfreɪd nɒt juː niːd tə ɡoʊ bæk/', tr:'Hayır, korkarım değilsiniz. Geri dönmeniz gerekiyor.'},
       {speaker:'A', gender:'m', en:'Oh! Which way should I go?', ro:'/oʊ wɪtʃ weɪ ʃʊd aɪ ɡoʊ/', tr:'Aman! Hangi tarafa gitmeliyim?'},
       {speaker:'B', gender:'f', en:'Go back to the traffic lights, then turn left. Go straight on for about five minutes.', ro:'/ɡoʊ bæk tə ðə ˈtræfɪk laɪts ðɛn tɜːrn lɛft ɡoʊ streɪt ɒn fər əˈbaʊt faɪv ˈmɪnɪts/', tr:'Trafik ışıklarına geri dönün, sonra sola dönün. Yaklaşık beş dakika düz gidin.'},
       {speaker:'A', gender:'m', en:'Is it near the park?', ro:'/ɪz ɪt nɪər ðə pɑːrk/', tr:'Parkın yakınında mı?'},
       {speaker:'B', gender:'f', en:'Yes! The city centre is opposite the park.', ro:'/jɛs ðə ˈsɪti ˈsɛntər ɪz ˈɒpəzɪt ðə pɑːrk/', tr:'Evet! Şehir merkezi parkın karşısında.'},
       {speaker:'A', gender:'m', en:'Thank you so much!', ro:'/θæŋk juː soʊ mʌtʃ/', tr:'Çok teşekkür ederim!'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:"To get to the museum: go straight on Main Street, take the second turning on the right, go past the supermarket, and the museum is on your left, next to the park.",
     tr:'Müzeye gitmek için: Ana Cadde\'de düz gidin, ikinci sağdan dönün, süpermarketi geçin, müze solunuzda, parkın yanında.',
     questions:[
       {q:'Which turning do you take?', opts:['first right','second right','first left','second left'], answer:1, tr:'Kaçıncı sağdan dönüyorsunuz?'},
       {q:'What do you go past?', opts:['a school','a park','a supermarket','a hospital'], answer:2, tr:'Neyin yanından geçiyorsunuz?'},
       {q:'Where is the museum?', opts:['on the right','opposite the park','next to the park','on the corner'], answer:2, tr:'Müze nerede?'}
     ]}
  ]
};
LESSONS[7] = L7;
