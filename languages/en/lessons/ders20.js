// ders20.js — English Lesson 20: Daily Conversation Practice
const L20 = {
  words: [
    {id:'w1', en:'small talk', ro:'/smɔːl tɔːk/', tr:'sohbet / gündelik konuşma',
     tip:'İngilizce\'de sosyal bağ kurmanın önemli yolu.'},
    {id:'w2', en:'By the way...', ro:'/baɪ ðə weɪ/', tr:'Bu arada...',
     examples:[{en:'By the way, did you hear the news?', ro:'/baɪ ðə weɪ dɪd juː hɪər ðə njuːz/', tr:'Bu arada, haberleri duydun mu?',
       bd:[{ro:'By the way',tr:'Bu arada',role:'connector'},{ro:'did you hear',tr:'duydun mu',role:'question'},{ro:'the news',tr:'haberler',role:'noun'}]}]},
    {id:'w3', en:'Actually...', ro:'/ˈæktʃuəli/', tr:'Aslında...',
     examples:[{en:"Actually, I changed my mind.", ro:"/ˈæktʃuəli aɪ tʃeɪndʒd maɪ maɪnd/", tr:'Aslında, fikrimi değiştirdim.',
       bd:[{ro:'Actually',tr:'Aslında',role:'connector'},{ro:'I changed my mind',tr:'fikrimi değiştirdim',role:'phrase'}]}]},
    {id:'w4', en:'To be honest...', ro:'/tə biː ˈɒnɪst/', tr:'Açıkçası...'},
    {id:'w5', en:"You know what I mean?", ro:"/juː noʊ wɒt aɪ miːn/", tr:'Ne demek istediğimi anlıyor musun?'},
    {id:'w6', en:'I see what you mean.', ro:'/aɪ siː wɒt juː miːn/', tr:'Ne demek istediğini anlıyorum.'},
    {id:'w7', en:"That's interesting!", ro:"/ðæts ˈɪntrɪstɪŋ/", tr:'Bu ilginç!'},
    {id:'w8', en:"Really? Tell me more.", ro:"/ˈrɪəli tɛl miː mɔːr/", tr:'Gerçekten mi? Daha fazla anlat.'},
    {id:'w9', en:'I agree / I disagree.', ro:'/aɪ əˈɡriː / aɪ ˌdɪsəˈɡriː/', tr:'Katılıyorum / Katılmıyorum.',
     examples:[{en:"I completely agree with you.", ro:"/aɪ kəmˈpliːtli əˈɡriː wɪð juː/", tr:'Seninle tamamen aynı fikirdeyim.',
       bd:[{ro:'I completely agree',tr:'Tamamen katılıyorum',role:'verb'},{ro:'with you',tr:'seninle',role:'phrase'}]}]},
    {id:'w10', en:'Anyway...', ro:'/ˈɛniweɪ/', tr:'Her neyse... / Neyse...'},
    {id:'w11', en:'So...', ro:'/soʊ/', tr:'Yani... / Öyleyse...'},
    {id:'w12', en:"Well...", ro:'/wɛl/', tr:'Şey... / Ee...'},
    {id:'w13', en:'Could you say that again?', ro:'/kʊd juː seɪ ðæt əˈɡɛn/', tr:'Tekrar söyleyebilir misiniz?'},
    {id:'w14', en:'Could you speak more slowly?', ro:'/kʊd juː spiːk mɔːr ˈsloʊli/', tr:'Daha yavaş konuşabilir misiniz?'},
    {id:'w15', en:"How do you spell that?", ro:"/haʊ duː juː spɛl ðæt/", tr:'Bunu nasıl yazıyorsunuz? / Nasıl heceleniyor?'},
    {id:'w16', en:"What does ... mean?", ro:"/wɒt dəz ... miːn/", tr:'... ne anlama geliyor?',
     examples:[{en:"What does 'fluent' mean?", ro:"/wɒt dəz ˈfluːənt miːn/", tr:'"Fluent" ne anlama geliyor?',
       bd:[{ro:'What does',tr:'Ne anlama geliyor',role:'question'},{ro:'fluent',tr:'(kelime)',role:'noun'}]}]},
    {id:'w17', en:'In other words...', ro:'/ɪn ˈʌðər wɜːrdz/', tr:'Başka bir deyişle...'},
    {id:'w18', en:"Let me think...", ro:"/lɛt miː θɪŋk/", tr:'Bir düşüneyim...'},
    {id:'w19', en:"That reminds me...", ro:"/ðæt rɪˈmaɪndz miː/", tr:'Bu bana şunu hatırlattı...'},
    {id:'w20', en:"Nice talking to you!", ro:"/naɪs ˈtɔːkɪŋ tə juː/", tr:'Seninle konuşmak güzeldi!'}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'Konuşmayı Yönetme', title_en:'Discourse Markers',
     explanation:'Konuşmayı akıcı yapmak için bağlayıcı ifadeler.',
     table:[
       {pronoun:'Konu eklemek', form:'Also / Moreover / In addition', example:'Also, I should mention...', tr:'Ayrıca belirtmeliyim ki...'},
       {pronoun:'Konuya dönmek', form:'Anyway / As I was saying', example:'Anyway, back to my point...', tr:'Her neyse, konuya dönersek...'},
       {pronoun:'Açıklamak', form:'I mean / In other words', example:'I mean, it was difficult.', tr:'Yani, zordu.'},
       {pronoun:'Özetlemek', form:'In short / To sum up', example:'To sum up, it was great.', tr:'Özetle, harikaydı.'}
     ],
     note:'Bu ifadeler konuşmayı doğal ve akıcı yapar — sık kullanın!'}
  ],

  speaking: [
    {id:'sp1', en:"So, how long have you been learning English?", ro:"/soʊ haʊ lɒŋ hæv juː biːn ˈlɜːrnɪŋ ˈɪŋɡlɪʃ/", tr:'Peki, ne zamandır İngilizce öğreniyorsun?',
     tip:'Sohbet açma sorusu.', prompt:'Dil öğrenimi hakkında sohbet başlatın'},
    {id:'sp2', en:"Actually, I started six months ago. I find listening the most challenging.", ro:"/ˈæktʃuəli aɪ ˈstɑːrtɪd sɪks mʌnθs əˈɡoʊ aɪ faɪnd ˈlɪsənɪŋ ðə moʊst ˈtʃælɪndʒɪŋ/", tr:'Aslında, altı ay önce başladım. Dinlemeyi en zorlu buluyorum.',
     tip:'Dürüst cevap verme.', prompt:'Dürüstçe cevaplayın'},
    {id:'sp3', en:"Could you speak more slowly, please? I'm still learning.", ro:"/kʊd juː spiːk mɔːr ˈsloʊli pliːz aɪm stɪl ˈlɜːrnɪŋ/", tr:'Daha yavaş konuşabilir misiniz, lütfen? Hâlâ öğreniyorum.',
     tip:'Anlayışla karşılanan kibarlık.', prompt:'Yavaş konuşmasını isteyin'}
  ],

  dialogues: [
    {id:'d1', title:'Sınıfta Genel Sohbet', title_en:'General Conversation Practice',
     lines:[
       {speaker:'A', gender:'f', en:"Hi! I haven't seen you for ages. How have you been?", ro:"/haɪ aɪ hævnt siːn juː fər eɪdʒɪz haʊ hæv juː biːn/", tr:'Merhaba! Uzun zamandır görüşmedik. Nasılsın?'},
       {speaker:'B', gender:'m', en:"Really well, thanks! I've been really busy lately. You?", ro:"/ˈrɪəli wɛl θæŋks aɪv biːn ˈrɪəli ˈbɪzi ˈleɪtli juː/", tr:'Gerçekten iyi, teşekkürler! Son zamanlarda çok meşgulüm. Sen?'},
       {speaker:'A', gender:'f', en:"Not bad. By the way, did you hear about the new English course starting next month?", ro:"/nɒt bæd baɪ ðə weɪ dɪd juː hɪər əˈbaʊt ðə njuː ˈɪŋɡlɪʃ kɔːrs ˈstɑːrtɪŋ nɛkst mʌnθ/", tr:'Fena değil. Bu arada, gelecek ay başlayacak yeni İngilizce kursu duydun mu?'},
       {speaker:'B', gender:'m', en:"Actually, yes! I was thinking about signing up. Is it any good?", ro:"/ˈæktʃuəli jɛs aɪ wɒz ˈθɪŋkɪŋ əˈbaʊt ˈsaɪnɪŋ ʌp ɪz ɪt ˈɛni ɡʊd/", tr:'Aslında, evet! Kaydolmayı düşünüyordum. İyi mi?'},
       {speaker:'A', gender:'f', en:"I've heard great things. To be honest, I think it is worth trying.", ro:"/aɪv hɜːrd ɡreɪt θɪŋz tə biː ˈɒnɪst aɪ θɪŋk ɪt ɪz wɜːrθ ˈtraɪɪŋ/", tr:'Çok iyi şeyler duydum. Açıkçası, denemeye değer diye düşünüyorum.'},
       {speaker:'B', gender:'m', en:"Great! Well, I should get going. Nice talking to you!", ro:"/ɡreɪt wɛl aɪ ʃʊd ɡɛt ˈɡoʊɪŋ naɪs ˈtɔːkɪŋ tə juː/", tr:'Harika! Neyse, gitmeliyim. Seninle konuşmak güzeldi!'},
       {speaker:'A', gender:'f', en:"You too! Take care. See you soon!", ro:"/juː tuː teɪk kɛr siː juː suːn/", tr:'Sana da! Kendine iyi bak. Yakında görüşürüz!'}
     ]},
    {id:'d2', title:'Dil Öğrencisi Konuşması', title_en:'Language Learner Conversation',
     lines:[
       {speaker:'A', gender:'m', en:"Excuse me, I couldn't help overhearing — are you learning English too?", ro:"/ɪkˈskjuːz miː aɪ kʊdnt hɛlp ˌoʊvərˈhɪərɪŋ ɑːr juː ˈlɜːrnɪŋ ˈɪŋɡlɪʃ tuː/", tr:'Pardon, duymamaya çalışamadım — siz de İngilizce mi öğreniyorsunuz?'},
       {speaker:'B', gender:'f', en:"Yes! I'm from Turkey. I've been studying for about a year. And you?", ro:"/jɛs aɪm frɒm ˈtɜːrki aɪv biːn ˈstʌdiɪŋ fər əˈbaʊt ə jɪər ænd juː/", tr:'Evet! Türkiye\'denim. Yaklaşık bir yıldır çalışıyorum. Ya siz?'},
       {speaker:'A', gender:'m', en:"Same! I'm from Spain. My English is still not perfect, I'm afraid.", ro:"/seɪm aɪm frɒm speɪn maɪ ˈɪŋɡlɪʃ ɪz stɪl nɒt ˈpɜːrfɪkt aɪm əˈfreɪd/", tr:'Aynı! İspanya\'denim. Korkarım İngilizcesi hâlâ mükemmel değil.'},
       {speaker:'B', gender:'f', en:"Mine either! But I think the best way to improve is to speak with people.", ro:"/maɪn ˈiːðər bʌt aɪ θɪŋk ðə bɛst weɪ tə ɪmˈpruːv ɪz tə spiːk wɪð ˈpiːpəl/", tr:'Benimki de değil! Ama bence gelişmenin en iyi yolu insanlarla konuşmak.'},
       {speaker:'A', gender:'m', en:"I completely agree. What does 'improve' mean exactly? Something like 'get better'?", ro:"/aɪ kəmˈpliːtli əˈɡriː wɒt dəz ɪmˈpruːv miːn ɪɡˈzæktli ˈsʌmθɪŋ laɪk ɡɛt ˈbɛtər/", tr:'Tamamen katılıyorum. \'Improve\' tam olarak ne anlama geliyor? \'Daha iyi olmak\' gibi bir şey mi?'},
       {speaker:'B', gender:'f', en:"Yes, exactly! In other words, to become better at something. Shall we practise together?", ro:"/jɛs ɪɡˈzæktli ɪn ˈʌðər wɜːrdz tə bɪˈkʌm ˈbɛtər æt ˈsʌmθɪŋ ʃæl wiː ˈpræktɪs təˈɡɛðər/", tr:'Evet, kesinlikle! Başka bir deyişle, bir şeyde daha iyi olmak. Birlikte pratik yapalım mı?'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:"One of the best ways to practise your English is to find a language partner — someone who is a native English speaker and wants to learn your language. You can meet online or in person. Try to meet regularly, at least once a week. Speak English for half the time and your native language for the other half. This way, you both benefit.",
     tr:'İngilizce pratiği yapmanın en iyi yollarından biri bir dil arkadaşı bulmaktır — İngilizce ana dil konuşmacısı olan ve sizin dilinizi öğrenmek isteyen biri. Çevrimiçi veya yüz yüze buluşabilirsiniz. Düzenli buluşmaya çalışın, en az haftada bir. Zamanın yarısında İngilizce, diğer yarısında ana dilinizde konuşun. Böylece ikiniz de fayda görürsünüz.',
     questions:[
       {q:'What is a language partner?', opts:['a teacher','a native speaker who wants to learn your language','a classmate','an app'], answer:1, tr:'Dil arkadaşı nedir?'},
       {q:'How often should you meet?', opts:['every day','once a month','at least once a week','twice a year'], answer:2, tr:'Ne sıklıkta buluşmalısınız?'},
       {q:'How should you divide the time?', opts:['all in English','half English, half your language','all in your language','depends on the day'], answer:1, tr:'Zamanı nasıl paylaştırmalısınız?'}
     ]}
  ]
};
LESSONS[20] = L20;
