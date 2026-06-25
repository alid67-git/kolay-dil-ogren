// ders14.js — English Lesson 14: Home & Living
const L14 = {
  words: [
    {id:'w1', en:'house / flat / apartment', ro:'/haʊs / flæt / əˈpɑːrtmənt/', tr:'ev / daire'},
    {id:'w2', en:'living room', ro:'/ˈlɪvɪŋ ruːm/', tr:'oturma odası'},
    {id:'w3', en:'bedroom', ro:'/ˈbɛdruːm/', tr:'yatak odası'},
    {id:'w4', en:'bathroom', ro:'/ˈbæθruːm/', tr:'banyo'},
    {id:'w5', en:'kitchen', ro:'/ˈkɪtʃɪn/', tr:'mutfak'},
    {id:'w6', en:'garden / yard', ro:'/ˈɡɑːrdən / jɑːrd/', tr:'bahçe'},
    {id:'w7', en:'neighbour', ro:'/ˈneɪbər/', tr:'komşu'},
    {id:'w8', en:'rent', ro:'/rɛnt/', tr:'kira / kiralamak',
     examples:[{en:'How much is the rent per month?', ro:'/haʊ mʌtʃ ɪz ðə rɛnt pər mʌnθ/', tr:'Aylık kira ne kadar?',
       bd:[{ro:'How much',tr:'Ne kadar',role:'question'},{ro:'is the rent',tr:'kira',role:'noun'},{ro:'per month',tr:'aylık',role:'time'}]}]},
    {id:'w9', en:'furniture', ro:'/ˈfɜːrnɪtʃər/', tr:'mobilya'},
    {id:'w10', en:'sofa / couch', ro:'/ˈsoʊfə / kaʊtʃ/', tr:'kanepe'},
    {id:'w11', en:'table', ro:'/ˈteɪbəl/', tr:'masa'},
    {id:'w12', en:'chair', ro:'/tʃɛr/', tr:'sandalye'},
    {id:'w13', en:'bed', ro:'/bɛd/', tr:'yatak'},
    {id:'w14', en:'window', ro:'/ˈwɪndoʊ/', tr:'pencere'},
    {id:'w15', en:'door', ro:'/dɔːr/', tr:'kapı'},
    {id:'w16', en:'stairs', ro:'/stɛrz/', tr:'merdiven'},
    {id:'w17', en:'washing machine', ro:'/ˈwɒʃɪŋ məˈʃiːn/', tr:'çamaşır makinesi'},
    {id:'w18', en:'fridge', ro:'/frɪdʒ/', tr:'buzdolabı'},
    {id:'w19', en:'clean', ro:'/kliːn/', tr:'temizlemek / temiz'},
    {id:'w20', en:'messy', ro:'/ˈmɛsi/', tr:'dağınık'},
    {id:'w21', en:'move in / move out', ro:'/muːv ɪn / muːv aʊt/', tr:'taşınmak (içeri/dışarı)',
     examples:[{en:'We are moving in next week.', ro:'/wiː ɑːr ˈmuːvɪŋ ɪn nɛkst wiːk/', tr:'Gelecek hafta taşınıyoruz.',
       bd:[{ro:'We are moving in',tr:'Taşınıyoruz',role:'verb'},{ro:'next week',tr:'gelecek hafta',role:'time'}]}]},
    {id:'w22', en:'bills', ro:'/bɪlz/', tr:'faturalar (su, elektrik, gaz)'}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'There is / There are', title_en:'There is / There are',
     explanation:'"There is" tekil ve sayılamaz isimler için; "There are" çoğul isimler için.',
     table:[
       {pronoun:'Tekil', form:'There is a...', example:'There is a sofa in the living room.', tr:'Oturma odasında bir kanepe var.'},
       {pronoun:'Çoğul', form:'There are...', example:'There are three bedrooms.', tr:'Üç yatak odası var.'},
       {pronoun:'Olumsuz', form:"There isn't / There aren't", example:"There isn't a garage.", tr:'Garaj yok.'},
       {pronoun:'Soru', form:'Is there...? / Are there...?', example:'Is there a garden?', tr:'Bahçe var mı?'}
     ],
     note:'"Is there a...?" → "Yes, there is." / "No, there isn\'t."'}
  ],

  speaking: [
    {id:'sp1', en:'I live in a two-bedroom flat in the city centre.', ro:'/aɪ lɪv ɪn ə tuː ˈbɛdruːm flæt ɪn ðə ˈsɪti ˈsɛntər/', tr:'Şehir merkezinde iki yatak odalı bir dairede yaşıyorum.',
     tip:'Evinizi tanıtma.', prompt:'Evinizi tanıtın'},
    {id:'sp2', en:'Is there a washing machine in the flat?', ro:'/ɪz ðɛr ə ˈwɒʃɪŋ məˈʃiːn ɪn ðə flæt/', tr:'Dairede çamaşır makinesi var mı?',
     tip:'Ev özellikleri sorma.', prompt:'Ev özelliği sorun'},
    {id:'sp3', en:"The rent is eight hundred pounds a month, bills included.", ro:'/ðə rɛnt ɪz eɪt ˈhʌndrəd paʊndz ə mʌnθ bɪlz ɪnˈkluːdɪd/', tr:'Kira aylık sekiz yüz sterlin, faturalar dahil.',
     tip:'Kira bilgisi verme.', prompt:'Kira bilgisi verin'}
  ],

  dialogues: [
    {id:'d1', title:'Ev Kiralama', title_en:'Renting a Flat',
     lines:[
       {speaker:'A', gender:'m', en:"Hello! I'm calling about the flat for rent. Is it still available?", ro:'/həˈloʊ aɪm ˈkɔːlɪŋ əˈbaʊt ðə flæt fər rɛnt ɪz ɪt stɪl əˈveɪləbəl/', tr:'Merhaba! Kiralık daire için arıyorum. Hâlâ müsait mi?'},
       {speaker:'B', gender:'f', en:"Yes, it is. It's a two-bedroom flat on the third floor.", ro:'/jɛs ɪt ɪz ɪts ə tuː ˈbɛdruːm flæt ɒn ðə θɜːrd flɔːr/', tr:'Evet, müsait. Üçüncü katta iki yatak odalı bir daire.'},
       {speaker:'A', gender:'m', en:'How much is the rent?', ro:'/haʊ mʌtʃ ɪz ðə rɛnt/', tr:'Kira ne kadar?'},
       {speaker:'B', gender:'f', en:"Nine hundred a month. Bills are not included.", ro:'/naɪn ˈhʌndrəd ə mʌnθ bɪlz ɑːr nɒt ɪnˈkluːdɪd/', tr:'Ayda dokuz yüz. Faturalar dahil değil.'},
       {speaker:'A', gender:'m', en:'Is there parking?', ro:'/ɪz ðɛr ˈpɑːrkɪŋ/', tr:'Otopark var mı?'},
       {speaker:'B', gender:'f', en:"Yes, there is one parking space. Would you like to view it?", ro:'/jɛs ðɛr ɪz wʌn ˈpɑːrkɪŋ speɪs wʊd juː laɪk tə vjuː ɪt/', tr:'Evet, bir park yeri var. Görmeye gelmek ister misiniz?'},
       {speaker:'A', gender:'m', en:"Yes, please. Can I come tomorrow afternoon?", ro:'/jɛs pliːz kæn aɪ kʌm təˈmɒroʊ ˌæftərˈnuːn/', tr:'Evet, lütfen. Yarın öğleden sonra gelebilir miyim?'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:"The flat has two bedrooms, a large living room, and a modern kitchen. There is a bathroom and a separate toilet. The flat is on the second floor and there is a lift. The monthly rent is one thousand pounds, bills not included. Available from the first of next month.",
     tr:'Dairede iki yatak odası, geniş bir oturma odası ve modern bir mutfak var. Banyo ve ayrı tuvalet mevcut. Daire ikinci katta ve asansör var. Aylık kira bin sterlin, faturalar hariç. Gelecek ayın birinden itibaren müsait.',
     questions:[
       {q:'How many bedrooms?', opts:['1','2','3','4'], answer:1, tr:'Kaç yatak odası var?'},
       {q:'What floor is it on?', opts:['1st','2nd','3rd','ground'], answer:1, tr:'Kaçıncı katta?'},
       {q:'Are bills included?', opts:['yes','no','partially','weekends only'], answer:1, tr:'Faturalar dahil mi?'}
     ]}
  ]
};
LESSONS[14] = L14;
