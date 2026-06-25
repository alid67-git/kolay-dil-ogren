// ders9.js — English Lesson 9: Hotel & Accommodation
const L9 = {
  words: [
    {id:'w1', en:'hotel', ro:'/hoʊˈtɛl/', tr:'otel'},
    {id:'w2', en:'hostel', ro:'/ˈhɒstəl/', tr:'hostel / ucuz pansiyon'},
    {id:'w3', en:'check in', ro:'/tʃɛk ɪn/', tr:'giriş yapmak (check-in)',
     examples:[{en:'I would like to check in, please.', ro:'/aɪ wʊd laɪk tə tʃɛk ɪn pliːz/', tr:'Check-in yapmak istiyorum, lütfen.',
       bd:[{ro:'I would like to',tr:'İstiyorum',role:'modal'},{ro:'check in',tr:'giriş yapmak',role:'verb'}]}]},
    {id:'w4', en:'check out', ro:'/tʃɛk aʊt/', tr:'çıkış yapmak (check-out)'},
    {id:'w5', en:'reservation / booking', ro:'/ˌrɛzərˈveɪʃən/', tr:'rezervasyon',
     examples:[{en:'I have a reservation under the name Ali.', ro:'/aɪ hæv ə ˌrɛzərˈveɪʃən ˈʌndər ðə neɪm æli/', tr:'Ali adına rezervasyonum var.',
       bd:[{ro:'I have a reservation',tr:'Rezervasyonum var',role:'noun'},{ro:'under the name',tr:'adına',role:'phrase'}]}]},
    {id:'w6', en:'room', ro:'/ruːm/', tr:'oda'},
    {id:'w7', en:'single room', ro:'/ˈsɪŋɡəl ruːm/', tr:'tek kişilik oda'},
    {id:'w8', en:'double room', ro:'/ˈdʌbəl ruːm/', tr:'çift kişilik oda'},
    {id:'w9', en:'twin room', ro:'/twɪn ruːm/', tr:'iki ayrı yataklı oda'},
    {id:'w10', en:'floor / storey', ro:'/flɔːr/', tr:'kat'},
    {id:'w11', en:'lift / elevator', ro:'/lɪft / ˈɛlɪveɪtər/', tr:'asansör'},
    {id:'w12', en:'key', ro:'/kiː/', tr:'anahtar'},
    {id:'w13', en:'key card', ro:'/kiː kɑːrd/', tr:'anahtar kartı'},
    {id:'w14', en:'breakfast included', ro:'/ˈbrɛkfəst ɪnˈkluːdɪd/', tr:'kahvaltı dahil',
     examples:[{en:'Is breakfast included?', ro:'/ɪz ˈbrɛkfəst ɪnˈkluːdɪd/', tr:'Kahvaltı dahil mi?',
       bd:[{ro:'Is breakfast',tr:'Kahvaltı',role:'noun'},{ro:'included',tr:'dahil mi',role:'adjective'}]}]},
    {id:'w15', en:'Wi-Fi', ro:'/ˈwaɪfaɪ/', tr:'Wi-Fi / kablosuz internet'},
    {id:'w16', en:'air conditioning', ro:'/ɛr kənˈdɪʃənɪŋ/', tr:'klima'},
    {id:'w17', en:'noisy / quiet', ro:'/ˈnɔɪzi / ˈkwaɪət/', tr:'gürültülü / sessiz'},
    {id:'w18', en:'complaint', ro:'/kəmˈpleɪnt/', tr:'şikayet',
     examples:[{en:'I have a complaint about the room.', ro:'/aɪ hæv ə kəmˈpleɪnt əˈbaʊt ðə ruːm/', tr:'Oda hakkında şikayetim var.',
       bd:[{ro:'I have a complaint',tr:'Şikayetim var',role:'noun'},{ro:'about the room',tr:'oda hakkında',role:'phrase'}]}]},
    {id:'w19', en:'towel', ro:'/ˈtaʊəl/', tr:'havlu'},
    {id:'w20', en:'room service', ro:'/ruːm ˈsɜːrvɪs/', tr:'oda servisi'},
    {id:'w21', en:'wake-up call', ro:'/weɪk ʌp kɔːl/', tr:'uyandırma servisi'},
    {id:'w22', en:'per night', ro:'/pər naɪt/', tr:'gecelik',
     examples:[{en:'How much is it per night?', ro:'/haʊ mʌtʃ ɪz ɪt pər naɪt/', tr:'Geceliği ne kadar?',
       bd:[{ro:'How much',tr:'Ne kadar',role:'question'},{ro:'per night',tr:'geceliği',role:'time'}]}]}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'Otelde Konuşma Kalıpları', title_en:'Hotel Phrases',
     explanation:'Otelde check-in, istek ve şikayet için kalıplar.',
     table:[
       {pronoun:'Check-in', form:'I have a reservation...', example:'I have a reservation for two nights.', tr:'İki gecelik rezervasyonum var.'},
       {pronoun:'İstek', form:'Could I have...?', example:'Could I have a quiet room?', tr:'Sessiz bir oda alabilir miyim?'},
       {pronoun:'Sorun', form:"There's a problem with...", example:"There's a problem with the shower.", tr:'Duşta bir sorun var.'},
       {pronoun:'Soru', form:'What time is...?', example:'What time is breakfast?', tr:'Kahvaltı saat kaçta?'}
     ],
     note:'"Could I..." = "Can I..."\'den daha kibar bir istek biçimi'}
  ],

  speaking: [
    {id:'sp1', en:"I'd like to check in. I have a reservation.", ro:'/aɪd laɪk tə tʃɛk ɪn aɪ hæv ə ˌrɛzərˈveɪʃən/', tr:'Check-in yapmak istiyorum. Rezervasyonum var.',
     tip:'Otele giriş.', prompt:'Otele giriş yapın'},
    {id:'sp2', en:'Could I have a non-smoking room on a high floor?', ro:'/kʊd aɪ hæv ə nɒn ˈsmoʊkɪŋ ruːm ɒn ə haɪ flɔːr/', tr:'Üst kattan sigara içilmeyen oda alabilir miyim?',
     tip:'Oda tercihi.', prompt:'Oda tercihinizi belirtin'},
    {id:'sp3', en:"There's no hot water in my room.", ro:'/ðɛrz noʊ hɒt ˈwɔːtər ɪn maɪ ruːm/', tr:'Odamda sıcak su yok.',
     tip:'Sorun bildirme.', prompt:'Bir sorun bildirin'},
    {id:'sp4', en:"I'd like to check out, please. Can I have the bill?", ro:'/aɪd laɪk tə tʃɛk aʊt pliːz kæn aɪ hæv ðə bɪl/', tr:'Check-out yapmak istiyorum, lütfen. Faturayı alabilir miyim?',
     tip:'Otel çıkışı.', prompt:'Check-out yapın'}
  ],

  dialogues: [
    {id:'d1', title:'Otel Check-in', title_en:'Hotel Check-in',
     lines:[
       {speaker:'A', gender:'f', en:'Good evening! Welcome. How can I help you?', ro:'/ɡʊd ˈiːvnɪŋ ˈwɛlkəm haʊ kæn aɪ hɛlp juː/', tr:'İyi akşamlar! Hoş geldiniz. Nasıl yardımcı olabilirim?'},
       {speaker:'B', gender:'m', en:"I'd like to check in. I have a reservation. My name is Johnson.", ro:'/aɪd laɪk tə tʃɛk ɪn aɪ hæv ə ˌrɛzərˈveɪʃən maɪ neɪm ɪz ˈdʒɒnsən/', tr:'Check-in yapmak istiyorum. Rezervasyonum var. Adım Johnson.'},
       {speaker:'A', gender:'f', en:'Yes, Mr Johnson. A double room for three nights. Is that correct?', ro:'/jɛs mɪstər ˈdʒɒnsən ə ˈdʌbəl ruːm fər θriː naɪts ɪz ðæt kəˈrɛkt/', tr:'Evet, Bay Johnson. Üç gecelik çift kişilik oda. Doğru mu?'},
       {speaker:'B', gender:'m', en:'Yes, that is correct. Is breakfast included?', ro:'/jɛs ðæt ɪz kəˈrɛkt ɪz ˈbrɛkfəst ɪnˈkluːdɪd/', tr:'Evet, doğru. Kahvaltı dahil mi?'},
       {speaker:'A', gender:'f', en:'Yes, breakfast is served from seven to ten. Here is your key card. Room two hundred and four, on the second floor.', ro:'/jɛs ˈbrɛkfəst ɪz sɜːrvd frɒm ˈsɛvən tə tɛn hɪr ɪz jɔːr kiː kɑːrd ruːm tuː ˈhʌndrəd ænd fɔːr ɒn ðə ˈsɛkənd flɔːr/', tr:'Evet, kahvaltı yediden ona kadar servis ediliyor. İşte anahtar kartınız. İkinci kattaki 204 numaralı oda.'},
       {speaker:'B', gender:'m', en:'Thank you. Is there Wi-Fi in the rooms?', ro:'/θæŋk juː ɪz ðɛr ˈwaɪfaɪ ɪn ðə ruːmz/', tr:'Teşekkür ederim. Odalarda Wi-Fi var mı?'},
       {speaker:'A', gender:'f', en:'Yes, free Wi-Fi throughout. The password is on the card. Enjoy your stay!', ro:'/jɛs friː ˈwaɪfaɪ θruːˈaʊt ðə ˈpæswɜːrd ɪz ɒn ðə kɑːrd ɪnˈdʒɔɪ jɔːr steɪ/', tr:'Evet, her yerde ücretsiz Wi-Fi. Şifre kartta. Konaklamanızın tadını çıkarın!'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:"Welcome to the Grand Hotel. Check-in is from two pm and check-out is by eleven am. Breakfast is served in the restaurant on the ground floor from six thirty to ten thirty. Room service is available twenty-four hours.",
     tr:'Grand Hotel\'e hoş geldiniz. Check-in saat 14:00\'den itibaren, check-out 11:00\'e kadar. Kahvaltı zemin kattaki restoranda 06:30-10:30 arası. Oda servisi 24 saat.',
     questions:[
       {q:'What time is check-in?', opts:['12pm','1pm','2pm','3pm'], answer:2, tr:'Check-in saat kaçta?'},
       {q:'Where is breakfast served?', opts:['room service','rooftop','ground floor','second floor'], answer:2, tr:'Kahvaltı nerede servis ediliyor?'},
       {q:'Is room service available at midnight?', opts:['yes','no','weekends only','on request'], answer:0, tr:'Oda servisi gece yarısı da var mı?'}
     ]}
  ]
};
LESSONS[9] = L9;
