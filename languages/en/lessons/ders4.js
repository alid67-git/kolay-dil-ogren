// ders4.js — English Lesson 4: Time & Date
const L4 = {
  words: [
    {id:'w1', en:'What time is it?', ro:'/wɒt taɪm ɪz ɪt/', tr:'Saat kaç?',
     tip:'Saat sormak için.', ctx:'Günlük konuşma.',
     examples:[{en:'Excuse me, what time is it?', ro:'/ɪkˈskjuːz miː wɒt taɪm ɪz ɪt/', tr:'Pardon, saat kaç?',
       bd:[{ro:'Excuse me',tr:'Pardon',role:'courtesy'},{ro:'what time is it',tr:'saat kaç',role:'question'}]}]},
    {id:'w2', en:"It's three o'clock.", ro:'/ɪts θriː əˈklɒk/', tr:'Saat üç.',
     examples:[{en:"It's three o'clock in the afternoon.", ro:'/ɪts θriː əˈklɒk ɪn ðə ˌæftəˈnuːn/', tr:'Öğleden sonra saat üç.',
       bd:[{ro:"It's three o'clock",tr:'Saat üç',role:'time'},{ro:'in the afternoon',tr:'öğleden sonra',role:'time'}]}]},
    {id:'w3', en:'morning', ro:'/ˈmɔːrnɪŋ/', tr:'sabah'},
    {id:'w4', en:'afternoon', ro:'/ˌæftərˈnuːn/', tr:'öğleden sonra'},
    {id:'w5', en:'evening', ro:'/ˈiːvnɪŋ/', tr:'akşam'},
    {id:'w6', en:'night', ro:'/naɪt/', tr:'gece'},
    {id:'w7', en:'today', ro:'/təˈdeɪ/', tr:'bugün',
     examples:[{en:'What day is today?', ro:'/wɒt deɪ ɪz təˈdeɪ/', tr:'Bugün hangi gün?',
       bd:[{ro:'What day',tr:'Hangi gün',role:'question'},{ro:'is today',tr:'bugün',role:'verb'}]}]},
    {id:'w8', en:'tomorrow', ro:'/təˈmɒroʊ/', tr:'yarın'},
    {id:'w9', en:'yesterday', ro:'/ˈjɛstərdeɪ/', tr:'dün'},
    {id:'w10', en:'Monday', ro:'/ˈmʌndeɪ/', tr:'Pazartesi'},
    {id:'w11', en:'Tuesday', ro:'/ˈtjuːzdeɪ/', tr:'Salı'},
    {id:'w12', en:'Wednesday', ro:'/ˈwɛnzdeɪ/', tr:'Çarşamba'},
    {id:'w13', en:'Thursday', ro:'/ˈθɜːrzdeɪ/', tr:'Perşembe'},
    {id:'w14', en:'Friday', ro:'/ˈfraɪdeɪ/', tr:'Cuma'},
    {id:'w15', en:'Saturday', ro:'/ˈsætərdeɪ/', tr:'Cumartesi'},
    {id:'w16', en:'Sunday', ro:'/ˈsʌndeɪ/', tr:'Pazar'},
    {id:'w17', en:'January', ro:'/ˈdʒænjuɛri/', tr:'Ocak'},
    {id:'w18', en:'February', ro:'/ˈfɛbruɛri/', tr:'Şubat'},
    {id:'w19', en:'March', ro:'/mɑːrtʃ/', tr:'Mart'},
    {id:'w20', en:'April', ro:'/ˈeɪprəl/', tr:'Nisan'},
    {id:'w21', en:'May', ro:'/meɪ/', tr:'Mayıs'},
    {id:'w22', en:'June', ro:'/dʒuːn/', tr:'Haziran'},
    {id:'w23', en:'July', ro:'/dʒʊˈlaɪ/', tr:'Temmuz'},
    {id:'w24', en:'August', ro:'/ˈɔːɡəst/', tr:'Ağustos'},
    {id:'w25', en:'September', ro:'/sɛpˈtɛmbər/', tr:'Eylül'},
    {id:'w26', en:'October', ro:'/ɒkˈtoʊbər/', tr:'Ekim'},
    {id:'w27', en:'November', ro:'/noʊˈvɛmbər/', tr:'Kasım'},
    {id:'w28', en:'December', ro:'/dɪˈsɛmbər/', tr:'Aralık'},
    {id:'w29', en:'year', ro:'/jɪər/', tr:'yıl'},
    {id:'w30', en:'month', ro:'/mʌnθ/', tr:'ay'},
    {id:'w31', en:'week', ro:'/wiːk/', tr:'hafta'},
    {id:'w32', en:'day', ro:'/deɪ/', tr:'gün'},
    {id:'w33', en:'hour', ro:'/aʊər/', tr:'saat (birim)'},
    {id:'w34', en:'minute', ro:'/ˈmɪnɪt/', tr:'dakika'},
    {id:'w35', en:'now', ro:'/naʊ/', tr:'şimdi'},
    {id:'w36', en:'later', ro:'/ˈleɪtər/', tr:'sonra'},
    {id:'w37', en:'early', ro:'/ˈɜːrli/', tr:'erken'},
    {id:'w38', en:'late', ro:'/leɪt/', tr:'geç',
     examples:[{en:'Sorry, I am late.', ro:'/ˈsɒri aɪ æm leɪt/', tr:'Özür dilerim, geç kaldım.',
       bd:[{ro:'Sorry',tr:'Özür dilerim',role:'courtesy'},{ro:'I am late',tr:'geç kaldım',role:'verb'}]}]}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'Saat İfade Etme', title_en:'Telling the Time',
     explanation:'İngilizce\'de saat ifade etmenin iki yolu vardır.',
     table:[
       {pronoun:'Tam saat', form:"o'clock", example:"It's five o'clock.", tr:'Saat beş.'},
       {pronoun:'Geçiyor', form:'past', example:"It's ten past three.", tr:'Üçü on geçiyor.'},
       {pronoun:'Var', form:'to', example:"It's ten to four.", tr:'Dörde on var.'},
       {pronoun:'Buçuk', form:'half past', example:"It's half past two.", tr:'İki buçuk.'},
       {pronoun:'Çeyrek', form:'quarter', example:"It's quarter past one.", tr:'Biri çeyrek geçiyor.'}
     ],
     note:'AM = gece yarısından öğlene; PM = öğleden gece yarısına'},
    {id:'g2', title:'Tarih Söyleme', title_en:'Saying Dates',
     explanation:'Amerikan İngilizcesi: month/day/year. İngiliz İngilizcesi: day/month/year.',
     table:[
       {pronoun:'ABD', form:'Month Day, Year', example:'June 25, 2026', tr:'25 Haziran 2026'},
       {pronoun:'İngiltere', form:'Day Month Year', example:'25 June 2026', tr:'25 Haziran 2026'},
       {pronoun:'Soru', form:'What date?', example:'What is the date today?', tr:'Bugün tarihi ne?'}
     ],
     note:'Günler sıra sayısı olarak okunur: 1st, 2nd, 3rd, 4th...'}
  ],

  speaking: [
    {id:'sp1', en:'What time is it, please?', ro:'/wɒt taɪm ɪz ɪt pliːz/', tr:'Saat kaç, lütfen?',
     tip:'Saat sorma.', prompt:'Saat sorun'},
    {id:'sp2', en:"It's half past seven in the morning.", ro:'/ɪts hɑːf pɑːst ˈsɛvən ɪn ðə ˈmɔːrnɪŋ/', tr:'Sabah yedi buçuk.',
     tip:'Saat ifade etme.', prompt:'Saat söyleyin'},
    {id:'sp3', en:'What day is it today?', ro:'/wɒt deɪ ɪz ɪt təˈdeɪ/', tr:'Bugün ne günü?',
     tip:'Gün sorma.', prompt:'Günü sorun'},
    {id:'sp4', en:'My birthday is on the fifteenth of March.', ro:'/maɪ ˈbɜːrθdeɪ ɪz ɒn ðə ˈfɪftiːnθ əv mɑːrtʃ/', tr:'Doğum günüm 15 Mart\'ta.',
     tip:'Tarih ifade etme.', prompt:'Tarih söyleyin'}
  ],

  dialogues: [
    {id:'d1', title:'Saat Sorma', title_en:'Asking for the Time',
     lines:[
       {speaker:'A', gender:'m', en:'Excuse me! Do you have the time?', ro:'/ɪkˈskjuːz miː duː juː hæv ðə taɪm/', tr:'Pardon! Saatiniz var mı?'},
       {speaker:'B', gender:'f', en:"Yes, it's quarter past two.", ro:'/jɛs ɪts ˈkwɔːrtər pɑːst tuː/', tr:'Evet, ikiyi çeyrek geçiyor.'},
       {speaker:'A', gender:'m', en:'Thank you! Am I late for the meeting?', ro:'/θæŋk juː æm aɪ leɪt fər ðə ˈmiːtɪŋ/', tr:'Teşekkür ederim! Toplantıya geç mi kaldım?'},
       {speaker:'B', gender:'f', en:'The meeting is at three. You have forty-five minutes.', ro:'/ðə ˈmiːtɪŋ ɪz æt θriː juː hæv ˈfɔːrti faɪv ˈmɪnɪts/', tr:'Toplantı saat üçte. Kırk beş dakikan var.'},
       {speaker:'A', gender:'m', en:"Great, I'm not late. Thank you!", ro:'/ɡreɪt aɪm nɒt leɪt θæŋk juː/', tr:'Harika, geç kalmadım. Teşekkürler!'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:"The train to London departs at nine forty-five. That's platform three. Next departure is Monday, the twenty-second of June.",
     tr:'Londra treni dokuz kırk beşte kalkıyor. Platform üç. Bir sonraki sefer 22 Haziran Pazartesi.',
     questions:[
       {q:'What time does the train depart?', opts:['9:15','9:45','10:45','9:05'], answer:1, tr:'Tren saat kaçta kalkıyor?'},
       {q:'Which platform?', opts:['1','2','3','4'], answer:2, tr:'Kaçıncı platform?'},
       {q:'What day is the next departure?', opts:['Sunday','Saturday','Tuesday','Monday'], answer:3, tr:'Sonraki sefer hangi gün?'}
     ]}
  ]
};
LESSONS[4] = L4;
