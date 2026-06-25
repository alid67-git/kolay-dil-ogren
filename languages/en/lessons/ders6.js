// ders6.js — English Lesson 6: Shopping
const L6 = {
  words: [
    {id:'w1', en:'shop / store', ro:'/ʃɒp / stɔːr/', tr:'dükkan / mağaza'},
    {id:'w2', en:'supermarket', ro:'/ˈsuːpərˌmɑːrkɪt/', tr:'süpermarket'},
    {id:'w3', en:'mall', ro:'/mɔːl/', tr:'alışveriş merkezi'},
    {id:'w4', en:'Can I help you?', ro:'/kæn aɪ hɛlp juː/', tr:'Yardımcı olabilir miyim?',
     tip:'Tezgahtar tarafından söylenir.', ctx:'Mağazada.',
     examples:[{en:"Can I help you? I'm looking for shoes.", ro:'/kæn aɪ hɛlp juː aɪm ˈlʊkɪŋ fər ʃuːz/', tr:'Yardımcı olabilir miyim? Ayakkabı arıyorum.',
       bd:[{ro:'Can I help you',tr:'Yardımcı olabilir miyim',role:'question'},{ro:"I'm looking for",tr:'Arıyorum',role:'verb'},{ro:'shoes',tr:'ayakkabı',role:'noun'}]}]},
    {id:'w5', en:"I'm just looking.", ro:'/aɪm dʒʌst ˈlʊkɪŋ/', tr:'Sadece bakıyorum.',
     tip:'Yardım istemiyorsanız.', ctx:'Mağazada.'},
    {id:'w6', en:'size', ro:'/saɪz/', tr:'beden / numara',
     examples:[{en:'What size do you need?', ro:'/wɒt saɪz duː juː niːd/', tr:'Hangi beden lazım?',
       bd:[{ro:'What size',tr:'Hangi beden',role:'question'},{ro:'do you need',tr:'lazım',role:'verb'}]}]},
    {id:'w7', en:'color / colour', ro:'/ˈkʌlər/', tr:'renk',
     examples:[{en:'Do you have this in blue?', ro:'/duː juː hæv ðɪs ɪn bluː/', tr:'Bunu mavide var mı?',
       bd:[{ro:'Do you have',tr:'Var mı',role:'question'},{ro:'this in blue',tr:'bunun mavisi',role:'noun'}]}]},
    {id:'w8', en:'try on', ro:'/traɪ ɒn/', tr:'denemek (giysi)',
     examples:[{en:'Can I try this on?', ro:'/kæn aɪ traɪ ðɪs ɒn/', tr:'Bunu deneyebilir miyim?',
       bd:[{ro:'Can I try',tr:'Deneyebilir miyim',role:'modal'},{ro:'this on',tr:'bunu',role:'noun'}]}]},
    {id:'w9', en:'fitting room', ro:'/ˈfɪtɪŋ ruːm/', tr:'soyunma odası'},
    {id:'w10', en:'receipt', ro:'/rɪˈsiːt/', tr:'fiş / makbuz'},
    {id:'w11', en:'refund', ro:'/ˈriːfʌnd/', tr:'para iadesi'},
    {id:'w12', en:'sale / discount', ro:'/seɪl / ˈdɪskaʊnt/', tr:'indirim',
     examples:[{en:'Is there a sale today?', ro:'/ɪz ðɛr ə seɪl təˈdeɪ/', tr:'Bugün indirim var mı?',
       bd:[{ro:'Is there a sale',tr:'İndirim var mı',role:'question'},{ro:'today',tr:'bugün',role:'time'}]}]},
    {id:'w13', en:'pay', ro:'/peɪ/', tr:'ödemek',
     examples:[{en:'How would you like to pay?', ro:'/haʊ wʊd juː laɪk tə peɪ/', tr:'Nasıl ödemek istersiniz?',
       bd:[{ro:'How would you like',tr:'Nasıl istersiniz',role:'question'},{ro:'to pay',tr:'ödemek',role:'verb'}]}]},
    {id:'w14', en:'cash', ro:'/kæʃ/', tr:'nakit'},
    {id:'w15', en:'credit card', ro:'/ˈkrɛdɪt kɑːrd/', tr:'kredi kartı'},
    {id:'w16', en:'bag', ro:'/bæɡ/', tr:'çanta / torba'},
    {id:'w17', en:'clothes', ro:'/kloʊðz/', tr:'kıyafetler'},
    {id:'w18', en:'shoes', ro:'/ʃuːz/', tr:'ayakkabılar'},
    {id:'w19', en:'shirt', ro:'/ʃɜːrt/', tr:'gömlek'},
    {id:'w20', en:'trousers / pants', ro:'/ˈtraʊzərz / pænts/', tr:'pantolon'},
    {id:'w21', en:'dress', ro:'/drɛs/', tr:'elbise'},
    {id:'w22', en:'jacket', ro:'/ˈdʒækɪt/', tr:'ceket'},
    {id:'w23', en:'too big / too small', ro:'/tuː bɪɡ / tuː smɔːl/', tr:'çok büyük / çok küçük',
     examples:[{en:"This is too big. Do you have a smaller one?", ro:'/ðɪs ɪz tuː bɪɡ duː juː hæv ə ˈsmɔːlər wʌn/', tr:'Bu çok büyük. Daha küçüğü var mı?',
       bd:[{ro:'This is too big',tr:'Çok büyük',role:'adjective'},{ro:'a smaller one',tr:'daha küçüğü',role:'noun'}]}]},
    {id:'w24', en:'exchange', ro:'/ɪksˈtʃeɪndʒ/', tr:'değiştirmek',
     examples:[{en:'I would like to exchange this shirt.', ro:'/aɪ wʊd laɪk tə ɪksˈtʃeɪndʒ ðɪs ʃɜːrt/', tr:'Bu gömleği değiştirmek istiyorum.',
       bd:[{ro:'I would like to exchange',tr:'Değiştirmek istiyorum',role:'modal'},{ro:'this shirt',tr:'bu gömleği',role:'noun'}]}]},
    {id:'w25', en:'open / closed', ro:'/ˈoʊpən / kloʊzd/', tr:'açık / kapalı'}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'Alışveriş Soruları', title_en:'Shopping Questions',
     explanation:'Alışverişte sık kullanılan soru kalıpları.',
     table:[
       {pronoun:'Fiyat', form:'How much is...?', example:'How much is this shirt?', tr:'Bu gömlek ne kadar?'},
       {pronoun:'Miktar', form:'How many...?', example:'How many do you have?', tr:'Kaç tane var?'},
       {pronoun:'Beden', form:'Do you have...in...?', example:'Do you have this in large?', tr:'Büyük bedeni var mı?'},
       {pronoun:'Mekan', form:'Where is...?', example:'Where is the fitting room?', tr:'Soyunma odası nerede?'}
     ],
     note:'"This" = yakındaki; "That" = uzaktaki nesne'}
  ],

  speaking: [
    {id:'sp1', en:"I'm looking for a blue jacket.", ro:'/aɪm ˈlʊkɪŋ fər ə bluː ˈdʒækɪt/', tr:'Mavi bir ceket arıyorum.',
     tip:'Ne aradığını söyleme.', prompt:'Ne aradığınızı söyleyin'},
    {id:'sp2', en:'Can I try this on, please?', ro:'/kæn aɪ traɪ ðɪs ɒn pliːz/', tr:'Bunu deneyebilir miyim, lütfen?',
     tip:'Kıyafet deneme isteği.', prompt:'Deneme isteyin'},
    {id:'sp3', en:"It's too small. Do you have a larger size?", ro:'/ɪts tuː smɔːl duː juː hæv ə ˈlɑːrdʒər saɪz/', tr:'Çok küçük. Daha büyük beden var mı?',
     tip:'Beden değiştirme.', prompt:'Beden değiştirin'},
    {id:'sp4', en:"I'll pay by credit card.", ro:'/aɪl peɪ baɪ ˈkrɛdɪt kɑːrd/', tr:'Kredi kartıyla ödeyeceğim.',
     tip:'Ödeme yöntemi belirtme.', prompt:'Ödeme yönteminizi söyleyin'}
  ],

  dialogues: [
    {id:'d1', title:'Mağazada Alışveriş', title_en:'Shopping in a Store',
     lines:[
       {speaker:'A', gender:'f', en:'Good afternoon! Can I help you?', ro:'/ɡʊd ˌæftərˈnuːn kæn aɪ hɛlp juː/', tr:'İyi günler! Yardımcı olabilir miyim?'},
       {speaker:'B', gender:'m', en:"Yes, please. I'm looking for a shirt for work.", ro:'/jɛs pliːz aɪm ˈlʊkɪŋ fər ə ʃɜːrt fər wɜːrk/', tr:'Evet, lütfen. İş için gömlek arıyorum.'},
       {speaker:'A', gender:'f', en:'What size are you?', ro:'/wɒt saɪz ɑːr juː/', tr:'Kaç bedensiniz?'},
       {speaker:'B', gender:'m', en:'I am a medium.', ro:'/aɪ æm ə ˈmiːdiəm/', tr:'Orta beden.'},
       {speaker:'A', gender:'f', en:'How about this white shirt? It is on sale — thirty percent off.', ro:'/haʊ əˈbaʊt ðɪs waɪt ʃɜːrt ɪt ɪz ɒn seɪl ˈθɜːrti pəˈsɛnt ɒf/', tr:'Bu beyaz gömleğe ne dersiniz? İndirimde — yüzde otuz indirimli.'},
       {speaker:'B', gender:'m', en:'Nice! Can I try it on?', ro:'/naɪs kæn aɪ traɪ ɪt ɒn/', tr:'Güzel! Deneyebilir miyim?'},
       {speaker:'A', gender:'f', en:'Of course. The fitting room is over there.', ro:'/əv kɔːrs ðə ˈfɪtɪŋ ruːm ɪz ˈoʊvər ðɛr/', tr:'Tabii. Soyunma odası orada.'},
       {speaker:'B', gender:'m', en:"It fits perfectly. I'll take it. Do you accept credit cards?", ro:'/ɪt fɪts ˈpɜːrfɪktli aɪl teɪk ɪt duː juː əkˈsɛpt ˈkrɛdɪt kɑːrdz/', tr:'Tam oturdu. Alıyorum. Kredi kartı kabul ediyor musunuz?'},
       {speaker:'A', gender:'f', en:'Yes, we do. The total is twenty-one pounds.', ro:'/jɛs wiː duː ðə ˈtoʊtəl ɪz ˈtwɛnti wʌn paʊndz/', tr:'Evet. Toplam yirmi bir sterlin.'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:'Welcome to City Mall. We are open Monday to Saturday, nine am to nine pm, and Sunday ten to six. Today we have special discounts in all clothing stores — up to fifty percent off!',
     tr:'City Mall\'a hoş geldiniz. Pazartesi-Cumartesi 09:00-21:00, Pazar 10:00-18:00 açığız. Bugün tüm giyim mağazalarında yüzde elliye kadar indirim var!',
     questions:[
       {q:'What time does the mall close on Saturday?', opts:['6 pm','7 pm','8 pm','9 pm'], answer:3, tr:'Cumartesi saat kaçta kapanıyor?'},
       {q:'What is the maximum discount today?', opts:['20%','30%','40%','50%'], answer:3, tr:'Bugünkü maksimum indirim?'},
       {q:'What type of stores have discounts?', opts:['electronics','clothing','food','all stores'], answer:1, tr:'Hangi mağazalar indirimli?'}
     ]}
  ]
};
LESSONS[6] = L6;
