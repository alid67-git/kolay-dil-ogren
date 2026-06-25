// ders19.js — English Lesson 19: Entertainment & Hobbies
const L19 = {
  words: [
    {id:'w1', en:'film / movie', ro:'/fɪlm / ˈmuːvi/', tr:'film',
     examples:[{en:'What kind of films do you like?', ro:'/wɒt kaɪnd əv fɪlmz duː juː laɪk/', tr:'Ne tür filmler seversin?',
       bd:[{ro:'What kind of',tr:'Ne tür',role:'question'},{ro:'films',tr:'filmler',role:'noun'},{ro:'do you like',tr:'seversin',role:'verb'}]}]},
    {id:'w2', en:'music', ro:'/ˈmjuːzɪk/', tr:'müzik'},
    {id:'w3', en:'book', ro:'/bʊk/', tr:'kitap'},
    {id:'w4', en:'sport', ro:'/spɔːrt/', tr:'spor'},
    {id:'w5', en:'game / video game', ro:'/ɡeɪm / ˈvɪdiˌoʊ ɡeɪm/', tr:'oyun / video oyunu'},
    {id:'w6', en:'travel', ro:'/ˈtrævəl/', tr:'seyahat etmek / seyahat'},
    {id:'w7', en:'cooking', ro:'/ˈkʊkɪŋ/', tr:'yemek pişirmek'},
    {id:'w8', en:'photography', ro:'/fəˈtɒɡrəfi/', tr:'fotoğrafçılık'},
    {id:'w9', en:'painting / drawing', ro:'/ˈpeɪntɪŋ / ˈdrɔːɪŋ/', tr:'resim yapmak'},
    {id:'w10', en:'hiking', ro:'/ˈhaɪkɪŋ/', tr:'yürüyüş (doğa)'},
    {id:'w11', en:'swimming', ro:'/ˈswɪmɪŋ/', tr:'yüzme'},
    {id:'w12', en:'cycling', ro:'/ˈsaɪklɪŋ/', tr:'bisiklete binme'},
    {id:'w13', en:'theatre', ro:'/ˈθɪətər/', tr:'tiyatro'},
    {id:'w14', en:'museum', ro:'/mjuːˈziːəm/', tr:'müze'},
    {id:'w15', en:'What do you do in your free time?', ro:'/wɒt duː juː duː ɪn jɔːr friː taɪm/', tr:'Boş zamanında ne yaparsın?',
     examples:[{en:'What do you do in your free time? I enjoy reading.', ro:'/wɒt duː juː duː ɪn jɔːr friː taɪm aɪ ɪnˈdʒɔɪ ˈriːdɪŋ/', tr:'Boş zamanında ne yaparsın? Okumaktan keyif alıyorum.',
       bd:[{ro:'What do you do',tr:'Ne yaparsın',role:'question'},{ro:'in your free time',tr:'boş zamanında',role:'time'},{ro:'I enjoy reading',tr:'okumaktan keyif alıyorum',role:'answer'}]}]},
    {id:'w16', en:'I enjoy / I love / I like', ro:'/aɪ ɪnˈdʒɔɪ / aɪ lʌv / aɪ laɪk/', tr:'Keyif alırım / Severim / Beğenirim',
     tip:'Keyif ifade etme kalıpları.'},
    {id:'w17', en:"I'm into...", ro:"/aɪm ˈɪntuː/", tr:'...a meraklıyım / ilgileniyorum',
     examples:[{en:"I'm really into jazz music.", ro:"/aɪm ˈrɪəli ˈɪntuː dʒæz ˈmjuːzɪk/", tr:'Caz müziğine gerçekten meraklıyım.',
       bd:[{ro:"I'm into",tr:'Meraklıyım',role:'phrase'},{ro:'jazz music',tr:'caz müziği',role:'noun'}]}]},
    {id:'w18', en:"I can't stand...", ro:"/aɪ kɑːnt stænd/", tr:'...ye tahammül edemiyorum',
     examples:[{en:"I can't stand horror films.", ro:"/aɪ kɑːnt stænd ˈhɒrər fɪlmz/", tr:'Korku filmlerine tahammül edemiyorum.',
       bd:[{ro:"I can't stand",tr:'Tahammül edemiyorum',role:'phrase'},{ro:'horror films',tr:'korku filmleri',role:'noun'}]}]},
    {id:'w19', en:'favourite', ro:'/ˈfeɪvərɪt/', tr:'favori / en sevilen'},
    {id:'w20', en:'recommend', ro:'/ˌrɛkəˈmɛnd/', tr:'tavsiye etmek',
     examples:[{en:'Can you recommend a good book?', ro:'/kæn juː ˌrɛkəˈmɛnd ə ɡʊd bʊk/', tr:'İyi bir kitap tavsiye edebilir misin?',
       bd:[{ro:'Can you recommend',tr:'Tavsiye edebilir misin',role:'modal'},{ro:'a good book',tr:'iyi bir kitap',role:'noun'}]}]}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'-ing vs. to + infinitive', title_en:'Gerund vs. Infinitive',
     explanation:'Bazı fiiller -ing alır, bazıları "to + verb" alır.',
     table:[
       {pronoun:'enjoy / love / like', form:'verb + -ing', example:'I enjoy swimming.', tr:'Yüzmekten keyif alıyorum.'},
       {pronoun:'want / would like', form:'verb + to + inf.', example:'I want to travel.', tr:'Seyahat etmek istiyorum.'},
       {pronoun:'like', form:'both forms', example:'I like reading / to read.', tr:'Okumayı seviyorum. (ikisi de olur)'},
       {pronoun:"can't stand / avoid", form:'verb + -ing', example:"I can't stand waiting.", tr:'Beklemekten nefret ederim.'}
     ],
     note:'"I would love to..." = kibar/özel bir istek ifadesi'}
  ],

  speaking: [
    {id:'sp1', en:'In my free time, I enjoy reading and watching films.', ro:'/ɪn maɪ friː taɪm aɪ ɪnˈdʒɔɪ ˈriːdɪŋ ænd ˈwɒtʃɪŋ fɪlmz/', tr:'Boş zamanımda okumaktan ve film izlemekten keyif alıyorum.',
     tip:'Hobileri anlatma.', prompt:'Hobilerinizi anlatın'},
    {id:'sp2', en:"I'm really into Turkish cinema at the moment.", ro:"/aɪm ˈrɪəli ˈɪntuː ˈtɜːrkɪʃ ˈsɪnəmə æt ðə ˈmoʊmənt/", tr:'Şu an Türk sinemasına gerçekten meraklıyım.',
     tip:'Şu anki ilgi alanı.', prompt:'Şu an ilgilendiğiniz bir şey söyleyin'},
    {id:'sp3', en:'I would highly recommend this book. It is fascinating.', ro:'/aɪ wʊd ˈhaɪli ˌrɛkəˈmɛnd ðɪs bʊk ɪt ɪz ˈfæsɪneɪtɪŋ/', tr:'Bu kitabı kesinlikle tavsiye ederim. Büyüleyici.',
     tip:'Tavsiye etme.', prompt:'Bir şey tavsiye edin'}
  ],

  dialogues: [
    {id:'d1', title:'Ortak İlgi Alanları', title_en:'Common Interests',
     lines:[
       {speaker:'A', gender:'f', en:"What do you like to do at the weekend?", ro:"/wɒt duː juː laɪk tə duː æt ðə ˌwiːkˈɛnd/", tr:'Hafta sonu ne yapmayı seviyorsun?'},
       {speaker:'B', gender:'m', en:"I love cycling and hiking. I try to get outside as much as possible. What about you?", ro:"/aɪ lʌv ˈsaɪklɪŋ ænd ˈhaɪkɪŋ aɪ traɪ tə ɡɛt ˈaʊtsaɪd æz mʌtʃ æz ˈpɒsɪbəl wɒt əˈbaʊt juː/", tr:'Bisiklet sürmeyi ve doğa yürüyüşünü seviyorum. Olabildiğince dışarı çıkmaya çalışıyorum. Ya sen?'},
       {speaker:'A', gender:'f', en:"I enjoy cooking and reading. I'm also really into photography.", ro:"/aɪ ɪnˈdʒɔɪ ˈkʊkɪŋ ænd ˈriːdɪŋ aɪm ˈɔːlsoʊ ˈrɪəli ˈɪntuː fəˈtɒɡrəfi/", tr:'Yemek pişirmeyi ve okumayı seviyorum. Ayrıca fotoğrafçılığa gerçekten meraklıyım.'},
       {speaker:'B', gender:'m', en:"Oh, that is great! You should try taking photos while hiking — it combines both hobbies!", ro:"/oʊ ðæt ɪz ɡreɪt juː ʃʊd traɪ ˈteɪkɪŋ ˈfoʊtoʊz waɪl ˈhaɪkɪŋ ɪt kəmˈbaɪnz boʊθ ˈhɒbiz/", tr:'Harika! Yürüyüş yaparken fotoğraf çekmeyi denemelisi — iki hobi bir arada!'},
       {speaker:'A', gender:'f', en:"What a great idea! Is there a good hiking trail near the city?", ro:"/wɒt ə ɡreɪt aɪˈdɪə ɪz ðɛr ə ɡʊd ˈhaɪkɪŋ treɪl nɪər ðə ˈsɪti/", tr:'Ne güzel fikir! Şehrin yakınında iyi bir yürüyüş parkuru var mı?'},
       {speaker:'B', gender:'m', en:"Yes, there are several. I can recommend one — it takes about two hours and the views are stunning.", ro:"/jɛs ðɛr ɑːr ˈsɛvərəl aɪ kæn ˌrɛkəˈmɛnd wʌn ɪt teɪks əˈbaʊt tuː aʊərz ænd ðə vjuːz ɑːr ˈstʌnɪŋ/", tr:'Evet, birkaç tane var. Birini tavsiye edebilirim — yaklaşık iki saat sürer ve manzaralar muhteşem.'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:"Reading is one of the most beneficial hobbies you can have. It improves your vocabulary, your concentration, and your general knowledge. Research shows that people who read regularly tend to be more creative and empathetic. You do not need expensive equipment — just a book and some free time.",
     tr:'Okumak sahip olabileceğiniz en faydalı hobilerden biridir. Kelime dağarcığınızı, konsantrasyonunuzu ve genel bilginizi geliştirir. Araştırmalar, düzenli okuyan insanların daha yaratıcı ve empatik olduğunu göstermektedir. Pahalı ekipmana gerek yok — sadece bir kitap ve biraz boş zaman.',
     questions:[
       {q:'What does reading improve?', opts:['only vocabulary','vocabulary, concentration, knowledge','fitness','social skills'], answer:1, tr:'Okumak neyi geliştirir?'},
       {q:'What do regular readers tend to be?', opts:['more athletic','richer','more creative and empathetic','happier'], answer:2, tr:'Düzenli okuyucular nasıl olmaya meyillidir?'},
       {q:'What equipment do you need?', opts:['a kindle only','nothing at all','just a book and time','a library card'], answer:2, tr:'Ne gibi ekipmana ihtiyacınız var?'}
     ]}
  ]
};
LESSONS[19] = L19;
