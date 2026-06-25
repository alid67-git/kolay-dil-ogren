// ders18.js — English Lesson 18: Weather
const L18 = {
  words: [
    {id:'w1', en:"What's the weather like?", ro:"/wɒts ðə ˈwɛðər laɪk/", tr:'Hava nasıl?',
     tip:'Hava durumunu sormak için.', ctx:'Günlük konuşma.',
     examples:[{en:"What's the weather like in London in winter?", ro:"/wɒts ðə ˈwɛðər laɪk ɪn ˈlʌndən ɪn ˈwɪntər/", tr:'Londra\'da kışın hava nasıl?',
       bd:[{ro:"What's the weather like",tr:'Hava nasıl',role:'question'},{ro:'in London in winter',tr:'Londra\'da kışın',role:'time'}]}]},
    {id:'w2', en:"It's sunny.", ro:"/ɪts ˈsʌni/", tr:'Güneşli.',
     examples:[{en:"It's sunny and warm today.", ro:"/ɪts ˈsʌni ænd wɔːrm təˈdeɪ/", tr:'Bugün güneşli ve sıcak.',
       bd:[{ro:"It's sunny",tr:'Güneşli',role:'adjective'},{ro:'and warm',tr:'ve sıcak',role:'adjective'}]}]},
    {id:'w3', en:"It's raining.", ro:"/ɪts ˈreɪnɪŋ/", tr:'Yağmur yağıyor.'},
    {id:'w4', en:"It's snowing.", ro:"/ɪts ˈsnoʊɪŋ/", tr:'Kar yağıyor.'},
    {id:'w5', en:"It's cloudy.", ro:"/ɪts ˈklaʊdi/", tr:'Bulutlu.'},
    {id:'w6', en:"It's windy.", ro:"/ɪts ˈwɪndi/", tr:'Rüzgarlı.'},
    {id:'w7', en:"It's foggy.", ro:"/ɪts ˈfɒɡi/", tr:'Sisli.'},
    {id:'w8', en:'hot', ro:'/hɒt/', tr:'sıcak (hava)'},
    {id:'w9', en:'cold', ro:'/koʊld/', tr:'soğuk (hava)'},
    {id:'w10', en:'warm', ro:'/wɔːrm/', tr:'ılık'},
    {id:'w11', en:'cool', ro:'/kuːl/', tr:'serin'},
    {id:'w12', en:'degrees', ro:'/dɪˈɡriːz/', tr:'derece',
     examples:[{en:"It's twenty-five degrees Celsius.", ro:"/ɪts ˈtwɛnti faɪv dɪˈɡriːz ˈsɛlsiəs/", tr:'Sıcaklık yirmi beş santigrat derece.',
       bd:[{ro:"It's",tr:'(sıcaklık)',role:'verb'},{ro:'twenty-five degrees',tr:'yirmi beş derece',role:'temperature'},{ro:'Celsius',tr:'santigrat',role:'unit'}]}]},
    {id:'w13', en:'forecast', ro:'/ˈfɔːrkæst/', tr:'hava tahmini'},
    {id:'w14', en:'umbrella', ro:'/ʌmˈbrɛlə/', tr:'şemsiye'},
    {id:'w15', en:'coat', ro:'/koʊt/', tr:'palto / mont'},
    {id:'w16', en:'spring', ro:'/sprɪŋ/', tr:'ilkbahar'},
    {id:'w17', en:'summer', ro:'/ˈsʌmər/', tr:'yaz'},
    {id:'w18', en:'autumn / fall', ro:'/ˈɔːtəm / fɔːl/', tr:'sonbahar'},
    {id:'w19', en:'winter', ro:'/ˈwɪntər/', tr:'kış'},
    {id:'w20', en:'flood', ro:'/flʌd/', tr:'sel'},
    {id:'w21', en:'storm', ro:'/stɔːrm/', tr:'fırtına'},
    {id:'w22', en:'rainbow', ro:'/ˈreɪnboʊ/', tr:'gökkuşağı'}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'Hava Durumu İfadeleri', title_en:'Weather Expressions',
     explanation:'İngilizce\'de hava durumu genellikle "It\'s" ile başlar.',
     table:[
       {pronoun:'Güneş', form:"It's sunny / It's hot", example:"It's very hot in July.", tr:'Temmuz\'da çok sıcak.'},
       {pronoun:'Yağmur', form:"It's raining / It's wet", example:"Take an umbrella — it's raining.", tr:'Şemsiye al — yağmur yağıyor.'},
       {pronoun:'Kar', form:"It's snowing / It's freezing", example:"It's freezing cold today.", tr:'Bugün dondurucu soğuk.'},
       {pronoun:'Gelecek', form:'It will be...', example:"It'll be sunny tomorrow.", tr:'Yarın güneşli olacak.'}
     ],
     note:'"The weather is nice/terrible/awful" de kullanılır'}
  ],

  speaking: [
    {id:'sp1', en:"What's the weather like today? It's cold and cloudy.", ro:"/wɒts ðə ˈwɛðər laɪk təˈdeɪ ɪts koʊld ænd ˈklaʊdi/", tr:'Bugün hava nasıl? Soğuk ve bulutlu.',
     tip:'Hava durumu hakkında konuşma.', prompt:'Hava durumunu anlatın'},
    {id:'sp2', en:"I prefer summer. I love hot and sunny weather.", ro:"/aɪ prɪˈfɜːr ˈsʌmər aɪ lʌv hɒt ænd ˈsʌni ˈwɛðər/", tr:'Yazı tercih ederim. Sıcak ve güneşli havayı seviyorum.',
     tip:'Hava tercihi anlatma.', prompt:'Tercih ettiğiniz havayı söyleyin'},
    {id:'sp3', en:"According to the forecast, it will rain all week.", ro:"/əˈkɔːrdɪŋ tə ðə ˈfɔːrkæst ɪt wɪl reɪn ɔːl wiːk/", tr:'Hava tahminine göre tüm hafta yağmur yağacak.',
     tip:'Tahmin anlatma.', prompt:'Bir hava tahminini anlatın'}
  ],

  dialogues: [
    {id:'d1', title:'Hava Hakkında Konuşma', title_en:'Talking About the Weather',
     lines:[
       {speaker:'A', gender:'m', en:"Terrible weather today, isn't it?", ro:"/ˈtɛrɪbəl ˈwɛðər təˈdeɪ ɪznt ɪt/", tr:'Bugün berbat bir hava, değil mi?'},
       {speaker:'B', gender:'f', en:"Awful! It has been raining all week. I'm so tired of it.", ro:"/ˈɔːfəl ɪt hæz biːn ˈreɪnɪŋ ɔːl wiːk aɪm soʊ ˈtaɪərd əv ɪt/", tr:'Berbat! Tüm hafta yağmur yağıyor. Çok sıkıldım.'},
       {speaker:'A', gender:'m', en:"Did you see the forecast? It should clear up by the weekend.", ro:"/dɪd juː siː ðə ˈfɔːrkæst ɪt ʃʊd klɪər ʌp baɪ ðə ˌwiːkˈɛnd/", tr:'Hava tahminini gördün mü? Hafta sonuna kadar açılması lazım.'},
       {speaker:'B', gender:'f', en:"I hope so. I would love some sunshine. What do you prefer — hot or cold weather?", ro:"/aɪ hoʊp soʊ aɪ wʊd lʌv sʌm ˈsʌnʃaɪn wɒt duː juː prɪˈfɜːr hɒt ɔːr koʊld ˈwɛðər/", tr:'Umarım. Biraz güneş görmek isterim. Sen ne tercih edersin — sıcak mı soğuk mu hava?'},
       {speaker:'A', gender:'m', en:"Definitely warm and sunny. I love spring — not too hot, not too cold.", ro:"/ˈdɛfɪnɪtli wɔːrm ænd ˈsʌni aɪ lʌv sprɪŋ nɒt tuː hɒt nɒt tuː koʊld/", tr:'Kesinlikle ılık ve güneşli. İlkbaharı seviyorum — çok sıcak değil, çok soğuk değil.'},
       {speaker:'B', gender:'f', en:"Same! Right, I must run — I forgot my umbrella!", ro:"/seɪm raɪt aɪ mʌst rʌn aɪ fərˈɡɒt maɪ ʌmˈbrɛlə/", tr:'Aynı fikirdeyim! Peki, koşmalıyım — şemsiyemi unuttum!'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:"And now the weather forecast for the UK. This weekend will be mostly cloudy with rain in the north. The south will see some sunshine on Saturday, with temperatures reaching eighteen degrees. Sunday will be cooler with strong winds. Next week looks brighter overall.",
     tr:'Ve şimdi Birleşik Krallık hava tahmini. Bu hafta sonu kuzey bölgelerinde çoğunlukla bulutlu ve yağmurlu olacak. Güneyde Cumartesi günü güneş görülecek, sıcaklıklar on sekiz dereceye ulaşacak. Pazar daha serin ve rüzgarlı geçecek. Gelecek hafta genel olarak daha aydınlık görünüyor.',
     questions:[
       {q:'What will the weather be like in the north this weekend?', opts:['sunny','windy','rainy and cloudy','snowy'], answer:2, tr:'Kuzey bu hafta sonu nasıl olacak?'},
       {q:'What temperature will the south reach on Saturday?', opts:['15°C','16°C','18°C','20°C'], answer:2, tr:'Güney Cumartesi kaç dereceye ulaşacak?'},
       {q:'What does next week look like?', opts:['rainy','stormy','brighter','cold'], answer:2, tr:'Gelecek hafta nasıl görünüyor?'}
     ]}
  ]
};
LESSONS[18] = L18;
