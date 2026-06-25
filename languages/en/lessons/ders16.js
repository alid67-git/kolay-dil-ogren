// ders16.js — English Lesson 16: Countries & Nationalities
const L16 = {
  words: [
    {id:'w1', en:'country', ro:'/ˈkʌntri/', tr:'ülke'},
    {id:'w2', en:'nationality', ro:'/ˌnæʃəˈnælɪti/', tr:'uyruk / milliyet'},
    {id:'w3', en:'language', ro:'/ˈlæŋɡwɪdʒ/', tr:'dil'},
    {id:'w4', en:'Turkey — Turkish', ro:'/ˈtɜːrki — ˈtɜːrkɪʃ/', tr:'Türkiye — Türk / Türkçe',
     examples:[{en:"I'm Turkish. I speak Turkish and English.", ro:'/aɪm ˈtɜːrkɪʃ aɪ spiːk ˈtɜːrkɪʃ ænd ˈɪŋɡlɪʃ/', tr:'Ben Türküm. Türkçe ve İngilizce konuşuyorum.',
       bd:[{ro:"I'm Turkish",tr:'Ben Türküm',role:'nationality'},{ro:'I speak',tr:'konuşuyorum',role:'verb'}]}]},
    {id:'w5', en:'England — English', ro:'/ˈɪŋɡlənd — ˈɪŋɡlɪʃ/', tr:'İngiltere — İngiliz / İngilizce'},
    {id:'w6', en:'United States (USA) — American', ro:'/juːˈnaɪtɪd steɪts — əˈmɛrɪkən/', tr:'Amerika Birleşik Devletleri — Amerikalı'},
    {id:'w7', en:'Germany — German', ro:'/ˈdʒɜːrməni — ˈdʒɜːrmən/', tr:'Almanya — Alman'},
    {id:'w8', en:'France — French', ro:'/frɑːns — frɛntʃ/', tr:'Fransa — Fransız'},
    {id:'w9', en:'Spain — Spanish', ro:'/speɪn — ˈspænɪʃ/', tr:'İspanya — İspanyol'},
    {id:'w10', en:'Italy — Italian', ro:'/ˈɪtəli — ɪˈtæliən/', tr:'İtalya — İtalyan'},
    {id:'w11', en:'China — Chinese', ro:'/ˈtʃaɪnə — tʃaɪˈniːz/', tr:'Çin — Çinli'},
    {id:'w12', en:'Japan — Japanese', ro:'/dʒəˈpæn — ˌdʒæpəˈniːz/', tr:'Japonya — Japon'},
    {id:'w13', en:'Russia — Russian', ro:'/ˈrʌʃə — ˈrʌʃən/', tr:'Rusya — Rus'},
    {id:'w14', en:'Brazil — Brazilian', ro:'/brəˈzɪl — brəˈzɪliən/', tr:'Brezilya — Brezilyalı'},
    {id:'w15', en:'Australia — Australian', ro:'/ɒˈstreɪliə — ɒˈstreɪliən/', tr:'Avustralya — Avustralyalı'},
    {id:'w16', en:'capital city', ro:'/ˈkæpɪtəl ˈsɪti/', tr:'başkent'},
    {id:'w17', en:'population', ro:'/ˌpɒpjʊˈleɪʃən/', tr:'nüfus'},
    {id:'w18', en:'continent', ro:'/ˈkɒntɪnənt/', tr:'kıta'},
    {id:'w19', en:'abroad / overseas', ro:'/əˈbrɔːd / ˌoʊvərˈsiːz/', tr:'yurt dışında',
     examples:[{en:'I have lived abroad for two years.', ro:'/aɪ hæv lɪvd əˈbrɔːd fər tuː jɪərz/', tr:'İki yıldır yurt dışında yaşıyorum.',
       bd:[{ro:'I have lived',tr:'yaşıyorum',role:'verb'},{ro:'abroad',tr:'yurt dışında',role:'adverb'},{ro:'for two years',tr:'iki yıldır',role:'time'}]}]},
    {id:'w20', en:'Where are you from?', ro:'/wɛr ɑːr juː frɒm/', tr:'Nerelisiniz?',
     examples:[{en:"I'm from Ankara, in Turkey.", ro:'/aɪm frɒm ˈæŋkərə ɪn ˈtɜːrki/', tr:'Türkiye\'nin Ankara şehrindenim.',
       bd:[{ro:"I'm from",tr:'...\'denim',role:'verb'},{ro:'Ankara',tr:'Ankara',role:'city'},{ro:'in Turkey',tr:'Türkiye\'de',role:'country'}]}]}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'Milliyet Adjectives', title_en:'Nationality Adjectives',
     explanation:'Milliyet sıfatları ülke adından türer; her zaman büyük harfle yazılır.',
     table:[
       {pronoun:'Kişi', form:'I am Turkish.', example:'She is French.', tr:'O Fransız.'},
       {pronoun:'Dil', form:'I speak Turkish.', example:'He speaks German.', tr:'O Almanca konuşuyor.'},
       {pronoun:'Köken', form:'I am from Turkey.', example:'They are from Italy.', tr:'Onlar İtalya\'dan.'},
       {pronoun:'Soru', form:'Where are you from?', example:'What nationality are you?', tr:'Uyruğunuz ne?'}
     ],
     note:'Ülke: Turkey (büyük); milliyet sıfatı: Turkish (büyük, -ish/-an/-ese/-ian eklenir)'}
  ],

  speaking: [
    {id:'sp1', en:"I'm Turkish and I'm from Istanbul.", ro:'/aɪm ˈtɜːrkɪʃ ænd aɪm frɒm ˌɪstænˈbʊl/', tr:'Türküm ve İstanbul\'denim.',
     tip:'Uyruk ve şehir.', prompt:'Uyruğunuzu ve şehrinizi söyleyin'},
    {id:'sp2', en:'The capital of Turkey is Ankara, not Istanbul.', ro:'/ðə ˈkæpɪtəl əv ˈtɜːrki ɪz ˈæŋkərə nɒt ˌɪstænˈbʊl/', tr:'Türkiye\'nin başkenti Ankara, İstanbul değil.',
     tip:'Coğrafi bilgi.', prompt:'Bir ülke hakkında bilgi verin'},
    {id:'sp3', en:'I speak Turkish, English, and a little German.', ro:'/aɪ spiːk ˈtɜːrkɪʃ ˈɪŋɡlɪʃ ænd ə ˈlɪtəl ˈdʒɜːrmən/', tr:'Türkçe, İngilizce ve biraz Almanca konuşuyorum.',
     tip:'Dil bilgisi anlatma.', prompt:'Konuştuğunuz dilleri söyleyin'}
  ],

  dialogues: [
    {id:'d1', title:'Ülkeler Hakkında Konuşma', title_en:'Talking About Countries',
     lines:[
       {speaker:'A', gender:'m', en:"Excuse me, are you Japanese?", ro:'/ɪkˈskjuːz miː ɑːr juː ˌdʒæpəˈniːz/', tr:'Pardon, Japon musunuz?'},
       {speaker:'B', gender:'f', en:"No, I'm Chinese. I'm from Beijing.", ro:'/noʊ aɪm tʃaɪˈniːz aɪm frɒm ˌbeɪˈdʒɪŋ/', tr:'Hayır, Çinliyim. Pekin\'denim.'},
       {speaker:'A', gender:'m', en:"I see! My name is Ali. I'm from Turkey.", ro:'/aɪ siː maɪ neɪm ɪz æli aɪm frɒm ˈtɜːrki/', tr:'Anlıyorum! Benim adım Ali. Türkiye\'denim.'},
       {speaker:'B', gender:'f', en:"Nice to meet you, Ali. I'm Wei. Have you ever been to China?", ro:'/naɪs tə miːt juː æli aɪm weɪ hæv juː ˈɛvər biːn tə ˈtʃaɪnə/', tr:'Tanıştığıma memnun oldum, Ali. Ben Wei. Hiç Çin\'e gittin mi?'},
       {speaker:'A', gender:'m', en:"No, not yet. But it's on my list! Have you been to Turkey?", ro:'/noʊ nɒt jɛt bʌt ɪts ɒn maɪ lɪst hæv juː biːn tə ˈtɜːrki/', tr:'Hayır, henüz gitmedim. Ama listede var! Türkiye\'ye gittin mi hiç?'},
       {speaker:'B', gender:'f', en:"Yes! I visited Istanbul last year. It was amazing!", ro:'/jɛs aɪ ˈvɪzɪtɪd ˌɪstænˈbʊl lɑːst jɪər ɪt wɒz əˈmeɪzɪŋ/', tr:'Evet! Geçen yıl İstanbul\'u ziyaret ettim. Harikaydı!'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:"English is spoken as a first language in countries including the United Kingdom, the United States, Canada, Australia, and New Zealand. It is also used as an official language in over seventy countries worldwide, making it the most widely spoken language in the world.",
     tr:'İngilizce; Birleşik Krallık, Amerika Birleşik Devletleri, Kanada, Avustralya ve Yeni Zelanda dahil birçok ülkede ana dil olarak konuşulmaktadır. Aynı zamanda dünya genelinde yetmişten fazla ülkede resmi dil olarak kullanılmakta olup dünyanın en yaygın dili haline gelmektedir.',
     questions:[
       {q:'In which continent is Australia?', opts:['Asia','Africa','Oceania','South America'], answer:2, tr:'Avustralya hangi kıtadadır?'},
       {q:'Approximately how many countries have English as an official language?', opts:['30','50','70','100'], answer:2, tr:'Yaklaşık kaç ülkede İngilizce resmi dil?'},
       {q:'Which country is NOT mentioned?', opts:['Canada','New Zealand','South Africa','United States'], answer:2, tr:'Hangi ülke bahsedilmedi?'}
     ]}
  ]
};
LESSONS[16] = L16;
