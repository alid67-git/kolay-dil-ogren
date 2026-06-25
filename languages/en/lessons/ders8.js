// ders8.js — English Lesson 8: Transport
const L8 = {
  words: [
    {id:'w1', en:'bus', ro:'/bʌs/', tr:'otobüs',
     examples:[{en:'Which bus goes to the airport?', ro:'/wɪtʃ bʌs ɡoʊz tə ðə ˈɛərpɔːrt/', tr:'Hangi otobüs havalimanına gidiyor?',
       bd:[{ro:'Which bus',tr:'Hangi otobüs',role:'question'},{ro:'goes to',tr:'gidiyor',role:'verb'},{ro:'the airport',tr:'havalimanı',role:'noun'}]}]},
    {id:'w2', en:'train', ro:'/treɪn/', tr:'tren'},
    {id:'w3', en:'underground / subway / tube', ro:'/ˈʌndərɡraʊnd/', tr:'metro'},
    {id:'w4', en:'taxi / cab', ro:'/ˈtæksi / kæb/', tr:'taksi'},
    {id:'w5', en:'plane', ro:'/pleɪn/', tr:'uçak'},
    {id:'w6', en:'ferry', ro:'/ˈfɛri/', tr:'feribot / vapur'},
    {id:'w7', en:'ticket', ro:'/ˈtɪkɪt/', tr:'bilet',
     examples:[{en:'A single ticket to London, please.', ro:'/ə ˈsɪŋɡəl ˈtɪkɪt tə ˈlʌndən pliːz/', tr:'Londra\'ya tek gidiş bilet, lütfen.',
       bd:[{ro:'A single ticket',tr:'Tek gidiş bilet',role:'noun'},{ro:'to London',tr:'Londra\'ya',role:'destination'}]}]},
    {id:'w8', en:'single / one-way', ro:'/ˈsɪŋɡəl / wʌn weɪ/', tr:'tek gidiş'},
    {id:'w9', en:'return / round-trip', ro:'/rɪˈtɜːrn/', tr:'gidiş-dönüş'},
    {id:'w10', en:'platform', ro:'/ˈplætfɔːrm/', tr:'peron'},
    {id:'w11', en:'departure', ro:'/dɪˈpɑːrtʃər/', tr:'kalkış'},
    {id:'w12', en:'arrival', ro:'/əˈraɪvəl/', tr:'varış'},
    {id:'w13', en:'delay', ro:'/dɪˈleɪ/', tr:'gecikme',
     examples:[{en:"The train is delayed by 20 minutes.", ro:'/ðə treɪn ɪz dɪˈleɪd baɪ ˈtwɛnti ˈmɪnɪts/', tr:'Tren 20 dakika gecikmeli.',
       bd:[{ro:'The train is delayed',tr:'Tren gecikmeli',role:'verb'},{ro:'by 20 minutes',tr:'20 dakika',role:'time'}]}]},
    {id:'w14', en:'on time', ro:'/ɒn taɪm/', tr:'zamanında'},
    {id:'w15', en:'station', ro:'/ˈsteɪʃən/', tr:'istasyon'},
    {id:'w16', en:'airport', ro:'/ˈɛərpɔːrt/', tr:'havalimanı'},
    {id:'w17', en:'bus stop', ro:'/bʌs stɒp/', tr:'otobüs durağı'},
    {id:'w18', en:'get on / get off', ro:'/ɡɛt ɒn / ɡɛt ɒf/', tr:'binmek / inmek',
     examples:[{en:'Get off at the next stop.', ro:'/ɡɛt ɒf æt ðə nɛkst stɒp/', tr:'Bir sonraki durakta inin.',
       bd:[{ro:'Get off',tr:'İnin',role:'verb'},{ro:'at the next stop',tr:'bir sonraki durağa',role:'location'}]}]},
    {id:'w19', en:'change (trains)', ro:'/tʃeɪndʒ/', tr:'aktarma yapmak',
     examples:[{en:'You need to change at Victoria.', ro:'/juː niːd tə tʃeɪndʒ æt vɪkˈtɔːrɪə/', tr:'Victoria\'da aktarma yapmanız gerekiyor.',
       bd:[{ro:'You need to change',tr:'Aktarma yapmanız gerekiyor',role:'verb'},{ro:'at Victoria',tr:'Victoria\'da',role:'location'}]}]},
    {id:'w20', en:'How long does it take?', ro:'/haʊ lɒŋ dəz ɪt teɪk/', tr:'Ne kadar sürer?',
     examples:[{en:'How long does the journey take?', ro:'/haʊ lɒŋ dəz ðə ˈdʒɜːrni teɪk/', tr:'Yolculuk ne kadar sürer?',
       bd:[{ro:'How long',tr:'Ne kadar',role:'question'},{ro:'does it take',tr:'sürer',role:'verb'}]}]}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'Ulaşım Sorguları', title_en:'Transport Questions',
     explanation:'Ulaşım konusunda sık kullanılan soru kalıpları.',
     table:[
       {pronoun:'Gidiş', form:'How do I get to...?', example:'How do I get to Oxford?', tr:'Oxford\'a nasıl gidebilirim?'},
       {pronoun:'Süre', form:'How long does it take?', example:'How long does it take by train?', tr:'Trenle ne kadar sürer?'},
       {pronoun:'Sıklık', form:'How often does...run?', example:'How often does the bus run?', tr:'Otobüs ne sıklıkla çalışır?'},
       {pronoun:'Ücret', form:'How much is a ticket?', example:'How much is a ticket to Bath?', tr:'Bath\'a bilet ne kadar?'}
     ],
     note:'"By bus/train/car/plane" — ulaşım araçlarından önce "by" kullanılır, "on foot" hariç'}
  ],

  speaking: [
    {id:'sp1', en:'A return ticket to Edinburgh, please.', ro:'/ə rɪˈtɜːrn ˈtɪkɪt tə ˈɛdɪnbrə pliːz/', tr:'Edinburgh\'a gidiş-dönüş bilet, lütfen.',
     tip:'Bilet satın alma.', prompt:'Bilet isteyin'},
    {id:'sp2', en:'Which platform does the Manchester train leave from?', ro:'/wɪtʃ ˈplætfɔːrm dəz ðə ˈmæntʃɪstər treɪn liːv frɒm/', tr:'Manchester treni hangi perondan kalkıyor?',
     tip:'Peron sormak.', prompt:'Peron sorun'},
    {id:'sp3', en:'Is this the bus to the city centre?', ro:'/ɪz ðɪs ðə bʌs tə ðə ˈsɪti ˈsɛntər/', tr:'Bu otobüs şehir merkezine gidiyor mu?',
     tip:'Doğru araç kontrolü.', prompt:'Doğru aracı kontrol edin'},
    {id:'sp4', en:'Excuse me, do I need to change trains?', ro:'/ɪkˈskjuːz miː duː aɪ niːd tə tʃeɪndʒ treɪnz/', tr:'Pardon, aktarma yapmam gerekiyor mu?',
     tip:'Aktarma sorma.', prompt:'Aktarma sorun'}
  ],

  dialogues: [
    {id:'d1', title:'Bilet Gişesinde', title_en:'At the Ticket Office',
     lines:[
       {speaker:'A', gender:'m', en:'Good morning! Can I help you?', ro:'/ɡʊd ˈmɔːrnɪŋ kæn aɪ hɛlp juː/', tr:'Günaydın! Yardımcı olabilir miyim?'},
       {speaker:'B', gender:'f', en:"Yes, please. I'd like two return tickets to Cambridge.", ro:'/jɛs pliːz aɪd laɪk tuː rɪˈtɜːrn ˈtɪkɪts tə ˈkeɪmbrɪdʒ/', tr:'Evet, lütfen. Cambridge\'e iki gidiş-dönüş bilet istiyorum.'},
       {speaker:'A', gender:'m', en:'When are you travelling?', ro:'/wɛn ɑːr juː ˈtrævəlɪŋ/', tr:'Ne zaman seyahat ediyorsunuz?'},
       {speaker:'B', gender:'f', en:'This Saturday, returning Sunday evening.', ro:'/ðɪs ˈsætərdeɪ rɪˈtɜːrnɪŋ ˈsʌndeɪ ˈiːvnɪŋ/', tr:'Bu Cumartesi, Pazar akşamı dönüşlü.'},
       {speaker:'A', gender:'m', en:"That'll be fifty-four pounds. Which platform? Platform six, departing at nine fifteen.", ro:'/ðætl biː ˈfɪfti fɔːr paʊndz wɪtʃ ˈplætfɔːrm ˈplætfɔːrm sɪks dɪˈpɑːrtɪŋ æt naɪn ˈfɪftiːn/', tr:'Elli dört sterlin olacak. Hangi peron? Altıncı peron, dokuz on beşte kalkıyor.'},
       {speaker:'B', gender:'f', en:'Perfect. Here is my card.', ro:'/ˈpɜːrfɪkt hɪr ɪz maɪ kɑːrd/', tr:'Mükemmel. İşte kartım.'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:"This is a platform announcement. The nine forty-five train to Bristol will depart from platform three. This train is running approximately ten minutes late. We apologise for any inconvenience.",
     tr:'Platform duyurusu. Bristol\'a giden dokuz kırk beşlik tren üçüncü peronda hareket edecek. Bu tren yaklaşık on dakika gecikmeli. Rahatsızlık için özür dileriz.',
     questions:[
       {q:'Where is the train going?', opts:['London','Manchester','Bristol','Oxford'], answer:2, tr:'Tren nereye gidiyor?'},
       {q:'What platform?', opts:['1','2','3','4'], answer:2, tr:'Kaçıncı peron?'},
       {q:'How late is it?', opts:['5 minutes','10 minutes','15 minutes','20 minutes'], answer:1, tr:'Ne kadar gecikmeli?'}
     ]}
  ]
};
LESSONS[8] = L8;
