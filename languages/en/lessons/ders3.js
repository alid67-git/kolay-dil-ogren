// ders3.js — English Lesson 3: Numbers & Money
const L3 = {
  words: [
    {id:'w1', en:'one', ro:'/wʌn/', tr:'bir', tip:'Temel sayı.', ctx:'Sayma ve miktar.',
     examples:[{en:'I have one book.', ro:'/aɪ hæv wʌn bʊk/', tr:'Bir kitabım var.',
       bd:[{ro:'I have',tr:'var',role:'verb'},{ro:'one',tr:'bir',role:'number'},{ro:'book',tr:'kitap',role:'noun'}]}]},
    {id:'w2', en:'two', ro:'/tuː/', tr:'iki',
     examples:[{en:'Two coffees, please.', ro:'/tuː ˈkɒfiz pliːz/', tr:'İki kahve, lütfen.',
       bd:[{ro:'Two',tr:'İki',role:'number'},{ro:'coffees',tr:'kahve',role:'noun'},{ro:'please',tr:'lütfen',role:'courtesy'}]}]},
    {id:'w3', en:'three', ro:'/θriː/', tr:'üç',
     examples:[{en:'There are three cats.', ro:'/ðɛr ɑːr θriː kæts/', tr:'Üç kedi var.',
       bd:[{ro:'There are',tr:'var',role:'verb'},{ro:'three',tr:'üç',role:'number'},{ro:'cats',tr:'kediler',role:'noun'}]}]},
    {id:'w4', en:'four', ro:'/fɔːr/', tr:'dört'},
    {id:'w5', en:'five', ro:'/faɪv/', tr:'beş'},
    {id:'w6', en:'six', ro:'/sɪks/', tr:'altı'},
    {id:'w7', en:'seven', ro:'/ˈsɛvən/', tr:'yedi'},
    {id:'w8', en:'eight', ro:'/eɪt/', tr:'sekiz'},
    {id:'w9', en:'nine', ro:'/naɪn/', tr:'dokuz'},
    {id:'w10', en:'ten', ro:'/tɛn/', tr:'on'},
    {id:'w11', en:'eleven', ro:'/ɪˈlɛvən/', tr:'on bir'},
    {id:'w12', en:'twelve', ro:'/twɛlv/', tr:'on iki'},
    {id:'w13', en:'twenty', ro:'/ˈtwɛnti/', tr:'yirmi'},
    {id:'w14', en:'thirty', ro:'/ˈθɜːrti/', tr:'otuz'},
    {id:'w15', en:'hundred', ro:'/ˈhʌndrəd/', tr:'yüz',
     examples:[{en:'One hundred dollars.', ro:'/wʌn ˈhʌndrəd ˈdɒlərz/', tr:'Yüz dolar.',
       bd:[{ro:'One hundred',tr:'Yüz',role:'number'},{ro:'dollars',tr:'dolar',role:'currency'}]}]},
    {id:'w16', en:'thousand', ro:'/ˈθaʊzənd/', tr:'bin'},
    {id:'w17', en:'How much?', ro:'/haʊ mʌtʃ/', tr:'Ne kadar?',
     tip:'Fiyat sormak için.', ctx:'Alışverişte.',
     examples:[{en:'How much is this?', ro:'/haʊ mʌtʃ ɪz ðɪs/', tr:'Bu ne kadar?',
       bd:[{ro:'How much',tr:'Ne kadar',role:'question'},{ro:'is this',tr:'bu',role:'verb'}]}]},
    {id:'w18', en:'dollar', ro:'/ˈdɒlər/', tr:'dolar'},
    {id:'w19', en:'pound', ro:'/paʊnd/', tr:'sterlin / pound'},
    {id:'w20', en:'euro', ro:'/ˈjʊərəʊ/', tr:'euro'},
    {id:'w21', en:'cheap', ro:'/tʃiːp/', tr:'ucuz',
     examples:[{en:'This is very cheap.', ro:'/ðɪs ɪz ˈvɛri tʃiːp/', tr:'Bu çok ucuz.',
       bd:[{ro:'This is',tr:'Bu',role:'subject'},{ro:'very cheap',tr:'çok ucuz',role:'adjective'}]}]},
    {id:'w22', en:'expensive', ro:'/ɪkˈspɛnsɪv/', tr:'pahalı',
     examples:[{en:'That car is too expensive.', ro:'/ðæt kɑːr ɪz tuː ɪkˈspɛnsɪv/', tr:'O araba çok pahalı.',
       bd:[{ro:'That car',tr:'O araba',role:'subject'},{ro:'is too expensive',tr:'çok pahalı',role:'adjective'}]}]},
    {id:'w23', en:'free', ro:'/friː/', tr:'bedava / ücretsiz'},
    {id:'w24', en:'change', ro:'/tʃeɪndʒ/', tr:'bozuk para / üstü'},
    {id:'w25', en:'bill / check', ro:'/bɪl / tʃɛk/', tr:'hesap / fatura',
     examples:[{en:'Can I have the bill, please?', ro:'/kæn aɪ hæv ðə bɪl pliːz/', tr:'Hesabı alabilir miyim, lütfen?',
       bd:[{ro:'Can I have',tr:'Alabilir miyim',role:'modal'},{ro:'the bill',tr:'hesabı',role:'noun'},{ro:'please',tr:'lütfen',role:'courtesy'}]}]}
  ],

  numbers: [
    {n:0, word:'zero', tr:'sıfır'},
    {n:1, word:'one', tr:'bir'},
    {n:2, word:'two', tr:'iki'},
    {n:3, word:'three', tr:'üç'},
    {n:4, word:'four', tr:'dört'},
    {n:5, word:'five', tr:'beş'},
    {n:6, word:'six', tr:'altı'},
    {n:7, word:'seven', tr:'yedi'},
    {n:8, word:'eight', tr:'sekiz'},
    {n:9, word:'nine', tr:'dokuz'},
    {n:10, word:'ten', tr:'on'},
    {n:11, word:'eleven', tr:'on bir'},
    {n:12, word:'twelve', tr:'on iki'},
    {n:13, word:'thirteen', tr:'on üç'},
    {n:14, word:'fourteen', tr:'on dört'},
    {n:15, word:'fifteen', tr:'on beş'},
    {n:16, word:'sixteen', tr:'on altı'},
    {n:17, word:'seventeen', tr:'on yedi'},
    {n:18, word:'eighteen', tr:'on sekiz'},
    {n:19, word:'nineteen', tr:'on dokuz'},
    {n:20, word:'twenty', tr:'yirmi'},
    {n:30, word:'thirty', tr:'otuz'},
    {n:40, word:'forty', tr:'kırk'},
    {n:50, word:'fifty', tr:'elli'},
    {n:60, word:'sixty', tr:'altmış'},
    {n:70, word:'seventy', tr:'yetmiş'},
    {n:80, word:'eighty', tr:'seksen'},
    {n:90, word:'ninety', tr:'doksan'},
    {n:100, word:'one hundred', tr:'yüz'},
    {n:1000, word:'one thousand', tr:'bin'}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'Sayılarla Cümle Kurma', title_en:'Sentences with Numbers',
     explanation:'İngilizce\'de sayılar isimden önce gelir ve isim çoğul yapılır (2+).',
     table:[
       {pronoun:'1 item', form:'singular', example:'one apple', tr:'bir elma'},
       {pronoun:'2+ items', form:'plural (+s)', example:'two apples', tr:'iki elma'},
       {pronoun:'Soru', form:'How many?', example:'How many apples?', tr:'Kaç elma?'},
       {pronoun:'Miktar', form:'How much?', example:'How much water?', tr:'Ne kadar su?'}
     ],
     note:'How many? → sayılabilir (apple, book); How much? → sayılamaz (water, money)'}
  ],

  speaking: [
    {id:'sp1', en:'How much is this, please?', ro:'/haʊ mʌtʃ ɪz ðɪs pliːz/', tr:'Bu ne kadar, lütfen?',
     tip:'Fiyat sorma.', prompt:'Fiyat sorun'},
    {id:'sp2', en:"It's ten dollars.", ro:'/ɪts tɛn ˈdɒlərz/', tr:'On dolar.',
     tip:'Fiyat söyleme.', prompt:'Fiyat söyleyin'},
    {id:'sp3', en:'Can I have the bill, please?', ro:'/kæn aɪ hæv ðə bɪl pliːz/', tr:'Hesabı alabilir miyim, lütfen?',
     tip:'Hesap isteme.', prompt:'Hesap isteyin'}
  ],

  dialogues: [
    {id:'d1', title:'Alışveriş Konuşması', title_en:'Shopping Conversation',
     lines:[
       {speaker:'A', gender:'f', en:'Excuse me, how much is this bag?', ro:'/ɪkˈskjuːz miː haʊ mʌtʃ ɪz ðɪs bæɡ/', tr:'Pardon, bu çanta ne kadar?'},
       {speaker:'B', gender:'m', en:"It's fifty dollars.", ro:'/ɪts ˈfɪfti ˈdɒlərz/', tr:'Elli dolar.'},
       {speaker:'A', gender:'f', en:'That is expensive. Do you have a cheaper one?', ro:'/ðæt ɪz ɪkˈspɛnsɪv duː juː hæv ə ˈtʃiːpər wʌn/', tr:'Bu pahalı. Daha ucuzu var mı?'},
       {speaker:'B', gender:'m', en:'Yes, this one is thirty dollars.', ro:'/jɛs ðɪs wʌn ɪz ˈθɜːrti ˈdɒlərz/', tr:'Evet, bu otuz dolar.'},
       {speaker:'A', gender:'f', en:"I'll take it. Here's forty dollars.", ro:'/aɪl teɪk ɪt hɪərz ˈfɔːrti ˈdɒlərz/', tr:'Onu alıyorum. İşte kırk dolar.'},
       {speaker:'B', gender:'m', en:'Here is your change — ten dollars.', ro:'/hɪr ɪz jɔːr tʃeɪndʒ tɛn ˈdɒlərz/', tr:'İşte üstünüz — on dolar.'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:'Hello, the total is twenty-five dollars and fifty cents. Do you have exact change?',
     tr:'Merhaba, toplam yirmi beş dolar elli sent. Bozuk paranız var mı?',
     questions:[
       {q:'What is the total?', opts:['$15.50','$25.50','$25.00','$52.00'], answer:1, tr:'Toplam ne kadar?'},
       {q:'What does the cashier ask about?', opts:['credit card','discount','exact change','receipt'], answer:2, tr:'Kasiyer ne soruyor?'}
     ]}
  ]
};
LESSONS[3] = L3;
