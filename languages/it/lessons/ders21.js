// ders21.js — Italian Lesson 21: Verbi fondamentali (Temel Fiiller)
const L21 = {
  words:[
    {id:'w1',en:'essere (sono/sei/è)',ro:'essere',tr:'olmak',examples:[{it:'Sono studente. Lei è italiana.',tr:'Öğrenciyim. O İtalyandır.',bd:[{ro:'Sono studente',tr:'öğrenciyim'},{ro:'Lei è italiana',tr:'o İtalyandır'}]}]},
    {id:'w2',en:'avere (ho/hai/ha)',ro:'avere',tr:'sahip olmak',examples:[{it:'Ho una sorella e due fratelli.',tr:'Bir kız kardeşim ve iki erkek kardeşim var.',bd:[{ro:'Ho una sorella',tr:'bir kız kardeşim var'},{ro:'due fratelli',tr:'iki erkek kardeş'}]}]},
    {id:'w3',en:'fare (faccio/fai/fa)',ro:'fare',tr:'yapmak',examples:[{it:'Cosa fai nel tempo libero?',tr:'Boş zamanında ne yapıyorsun?',bd:[{ro:'Cosa fai',tr:'ne yapıyorsun'},{ro:'nel tempo libero',tr:'boş zamanında'}]}]},
    {id:'w4',en:'andare (vado/vai/va)',ro:'andare',tr:'gitmek',examples:[{it:'Vado a scuola ogni giorno.',tr:'Her gün okula gidiyorum.',bd:[{ro:'Vado a scuola',tr:'okula gidiyorum'},{ro:'ogni giorno',tr:'her gün'}]}]},
    {id:'w5',en:'venire (vengo/vieni/viene)',ro:'venire',tr:'gelmek',examples:[{it:'Vieni a casa mia stasera?',tr:'Bu akşam evime geliyor musun?',bd:[{ro:'Vieni a casa mia',tr:'evime geliyor musun'},{ro:'stasera',tr:'bu akşam'}]}]},
    {id:'w6',en:'potere (posso/puoi/può)',ro:'potere',tr:'yapabilmek',examples:[{it:'Posso aiutarti con i compiti.',tr:'Ödevlerinle sana yardımcı olabilirim.',bd:[{ro:'Posso aiutarti',tr:'yardımcı olabilirim'},{ro:'con i compiti',tr:'ödevlerinle'}]}]},
    {id:'w7',en:'volere (voglio/vuoi/vuole)',ro:'volere',tr:'istemek',examples:[{it:'Voglio imparare l\'italiano bene.',tr:'İtalyancayı iyi öğrenmek istiyorum.',bd:[{ro:'Voglio imparare',tr:'öğrenmek istiyorum'},{ro:'l\'italiano bene',tr:'İtalyancayı iyi'}]}]},
    {id:'w8',en:'dovere (devo/devi/deve)',ro:'dovere',tr:'zorunda olmak / gereklilik',examples:[{it:'Devo studiare per l\'esame.',tr:'Sınav için çalışmam gerekiyor.',bd:[{ro:'Devo studiare',tr:'çalışmam gerekiyor'},{ro:'per l\'esame',tr:'sınav için'}]}]},
    {id:'w9',en:'sapere (so/sai/sa)',ro:'sapere',tr:'bilmek (bir şeyi)',examples:[{it:'So parlare italiano e turco.',tr:'İtalyanca ve Türkçe konuşmasını biliyorum.',bd:[{ro:'So parlare',tr:'konuşmasını biliyorum'},{ro:'italiano e turco',tr:'İtalyanca ve Türkçe'}]}]},
    {id:'w10',en:'conoscere (conosco/conosci/conosce)',ro:'conoscere',tr:'tanımak / bilmek (birini/bir yeri)',examples:[{it:'Conosco Roma bene, ci ho vissuto cinque anni.',tr:'Roma\'yı iyi tanıyorum, orada beş yıl yaşadım.',bd:[{ro:'Conosco Roma bene',tr:'Roma\'yı iyi tanıyorum'},{ro:'ci ho vissuto cinque anni',tr:'orada beş yıl yaşadım'}]}]},
    {id:'w11',en:'parlare / dire / raccontare',ro:'parlare',tr:'konuşmak / söylemek / anlatmak',examples:[{it:'Parla lentamente, per favore. Non riesco a capire.',tr:'Lütfen yavaş konuş, anlayamıyorum.',bd:[{ro:'Parla lentamente',tr:'yavaş konuş'},{ro:'Non riesco a capire',tr:'anlayamıyorum'}]}]},
    {id:'w12',en:'capire / capisco',ro:'capire',tr:'anlamak',examples:[{it:'Non capisco questa regola grammaticale.',tr:'Bu dilbilgisi kuralını anlamıyorum.',bd:[{ro:'Non capisco',tr:'anlamıyorum'},{ro:'questa regola grammaticale',tr:'bu dilbilgisi kuralını'}]}]},
    {id:'w13',en:'vedere / guardare',ro:'vedere',tr:'görmek / bakmak',examples:[{it:'Vedo male senza occhiali.',tr:'Gözlüksüz iyi göremiyorum.',bd:[{ro:'Vedo male',tr:'iyi göremiyorum'},{ro:'senza occhiali',tr:'gözlüksüz'}]}]},
    {id:'w14',en:'sentire / ascoltare',ro:'sentire',tr:'duymak / dinlemek',examples:[{it:'Sento un rumore strano fuori.',tr:'Dışarıda garip bir ses duyuyorum.',bd:[{ro:'Sento un rumore strano',tr:'garip ses duyuyorum'},{ro:'fuori',tr:'dışarıda'}]}]},
    {id:'w15',en:'mangiare / bere',ro:'mangiare',tr:'yemek yemek / içmek',examples:[{it:'Mangio pasta ogni giorno e bevo molto caffè.',tr:'Her gün makarna yerim ve çok kahve içerim.',bd:[{ro:'Mangio pasta ogni giorno',tr:'her gün makarna yerim'},{ro:'bevo molto caffè',tr:'çok kahve içerim'}]}]},
    {id:'w16',en:'lavorare / studiare',ro:'lavorare',tr:'çalışmak / ders çalışmak',examples:[{it:'Lavoro di giorno e studio di notte.',tr:'Gündüz çalışırım, gece ders çalışırım.',bd:[{ro:'Lavoro di giorno',tr:'gündüz çalışırım'},{ro:'studio di notte',tr:'gece ders çalışırım'}]}]},
    {id:'w17',en:'pensare / credere',ro:'pensare',tr:'düşünmek / inanmak',examples:[{it:'Penso che l\'italiano sia una lingua bellissima.',tr:'İtalyancanın çok güzel bir dil olduğunu düşünüyorum.',bd:[{ro:'Penso che',tr:'düşünüyorum ki'},{ro:'l\'italiano sia una lingua bellissima',tr:'İtalyanca çok güzel bir dil'}]}]},
    {id:'w18',en:'comprare / vendere / pagare',ro:'comprare',tr:'satın almak / satmak / ödemek',examples:[{it:'Ho comprato un libro di grammatica italiana.',tr:'Bir İtalyan dilbilgisi kitabı satın aldım.',bd:[{ro:'Ho comprato',tr:'satın aldım'},{ro:'un libro di grammatica italiana',tr:'İtalyan dilbilgisi kitabı'}]}]},
    {id:'w19',en:'piacere / amare / odiare',ro:'piacere',tr:'beğenmek / sevmek / nefret etmek',examples:[{it:'Amo la pizza ma odio le acciughe!',tr:'Pizzayı seviyorum ama hamsi nefret!',bd:[{ro:'Amo la pizza',tr:'pizzayı seviyorum'},{ro:'odio le acciughe',tr:'hamsiden nefret ederim'}]}]},
    {id:'w20',en:'aiutare / imparare / insegnare',ro:'aiutare',tr:'yardım etmek / öğrenmek / öğretmek',examples:[{it:'Vuoi che ti insegni qualche parola in turco?',tr:'Sana biraz Türkçe öğreteyim mi?',bd:[{ro:'Vuoi che ti insegni',tr:'öğreteyim mi'},{ro:'qualche parola in turco',tr:'biraz Türkçe'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Modal Fiiller: Potere, Volere, Dovere',
      title_en:'Modal Verbs: Potere, Volere, Dovere',
      explanation:'Modal fiiller + infinitive: "posso fare" (yapabilirim), "voglio fare" (yapmak istiyorum), "devo fare" (yapmalıyım).',
      table:[
        {pronoun:'potere',form:'posso/puoi/può/possiamo/potete/possono',example:'Posso venire domani? — Sì, puoi.',tr:'Yarın gelebilir miyim? — Evet, gelebilirsin.'},
        {pronoun:'volere',form:'voglio/vuoi/vuole/vogliamo/volete/vogliono',example:'Voglio imparare a cucinare.',tr:'Yemek yapmayı öğrenmek istiyorum.'},
        {pronoun:'dovere',form:'devo/devi/deve/dobbiamo/dovete/devono',example:'Devi studiare di più!',tr:'Daha fazla çalışman gerekiyor!'},
        {pronoun:'sapere',form:'so/sai/sa/sappiamo/sapete/sanno',example:'Sa parlare tre lingue.',tr:'Üç dil konuşmasını biliyor.'}
      ],
      note:'"Sapere + infinitive" = bir beceriye sahip olmak. "Sapere" vs "conoscere": sapere = bir şeyi bilmek, conoscere = birini/bir yeri tanımak.'
    },
    {
      id:'g2',
      title:'Essere vs Avere: Yardımcı Fiil Seçimi',
      title_en:'Essere vs Avere as Auxiliary Verbs',
      explanation:'Geçmiş zaman (passato prossimo) için hangi yardımcı fiilin kullanılacağı kritik. Hareket ve değişme fiilleri "essere", diğerleri "avere".',
      table:[
        {pronoun:'avere ile',form:'Ho + participio',example:'Ho mangiato. / Ho studiato. / Ho lavorato.',tr:'Yedim. / Çalıştım. / İş yaptım.'},
        {pronoun:'essere ile',form:'Sono + participio (uyumlu)',example:'Sono andato/andata. / Sono venuto/venuta.',tr:'Gittim. / Geldim.'},
        {pronoun:'essere (dönüşlü)',form:'Mi sono + participio',example:'Mi sono svegliato alle sei.',tr:'Saat altıda uyandım.'},
        {pronoun:'Fark',form:'avere = geçişli, essere = geçişsiz/hareket',example:'Ho comprato il pane. / Sono andato al forno.',tr:'Ekmek aldım. / Fırına gittim.'}
      ],
      note:'"Essere" ile kullanılan fiiller: andare, venire, partire, arrivare, nascere, morire, restare, diventare, essere, stare...'
    },
    {
      id:'g3',
      title:'Düzensiz Fiiller: En Önemlileri',
      title_en:'Irregular Verbs: The Most Important Ones',
      explanation:'İtalyanca\'da en sık kullanılan düzensiz fiiller.',
      table:[
        {pronoun:'fare',form:'faccio, fai, fa, facciamo, fate, fanno',example:'Che cosa fai? — Faccio yoga.',tr:'Ne yapıyorsun? — Yoga yapıyorum.'},
        {pronoun:'andare',form:'vado, vai, va, andiamo, andate, vanno',example:'Dove vai? — Vado al lavoro.',tr:'Nereye gidiyorsun? — İşe gidiyorum.'},
        {pronoun:'venire',form:'vengo, vieni, viene, veniamo, venite, vengono',example:'Vieni con noi?',tr:'Bizimle gelir misin?'},
        {pronoun:'dire',form:'dico, dici, dice, diciamo, dite, dicono',example:'Cosa dice? Non capisco.',tr:'Ne diyor? Anlamıyorum.'}
      ],
      note:'"Stare + gerundio" = şu anda ... yapıyor: "Sto mangiando" (yiyorum), "Sta dormendo" (uyuyor). Süregelen eylem için.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Posso fare una domanda?',tr:'Bir soru sorabilir miyim?',prompt:'İzin iste'},
    {id:'sp2',en:'Devo andare, ci vediamo dopo!',tr:'Gitmem gerekiyor, sonra görüşürüz!',prompt:'Acele ayrılış'},
    {id:'sp3',en:'Non capisco, puoi ripetere più lentamente?',tr:'Anlamıyorum, daha yavaş tekrar edebilir misin?',prompt:'Anlamadığını belirt'},
    {id:'sp4',en:'Voglio imparare a cucinare la pasta.',tr:'Makarna yapmayı öğrenmek istiyorum.',prompt:'Arzu et'},
    {id:'sp5',en:'So parlare italiano, ma devo ancora migliorare.',tr:'İtalyanca konuşmasını biliyorum ama hâlâ geliştirmem lazım.',prompt:'Dil seviyeni anlat'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Modal Fiiller ile Konuşma',
      title_en:'Conversation with Modal Verbs',
      lines:[
        {speaker:'B',gender:'f',en:'Puoi aiutarmi con questo esercizio? Non capisco.',tr:'Bu egzersizde yardımcı olabilir misin? Anlamıyorum.',bd:[{ro:'Puoi aiutarmi?',tr:'yardımcı olabilir misin?',role:'request'},{ro:'Non capisco',tr:'anlamıyorum',role:'problem'}]},
        {speaker:'A',gender:'m',en:'Certo! Devi fare così: prima leggi la domanda, poi scrivi la risposta.',tr:'Tabii! Şöyle yapman gerekiyor: önce soruyu oku, sonra cevabı yaz.',bd:[{ro:'Devi fare così',tr:'şöyle yapman gerekiyor',role:'instruction'},{ro:'prima leggi la domanda',tr:'önce soruyu oku',role:'step'}]},
        {speaker:'B',gender:'f',en:'Ah, capisco! Grazie! Sai anche il futuro?',tr:'Ah, anladım! Teşekkürler! Geleceği de biliyor musun?',bd:[{ro:'Ah, capisco!',tr:'anladım!',role:'understanding'},{ro:'Sai anche il futuro?',tr:'geleceği de biliyor musun?',role:'question'}]},
        {speaker:'A',gender:'m',en:'Sì, so fare il futuro semplice. Vuoi che te lo spieghi?',tr:'Evet, basit geleceği yapmasını biliyorum. Açıklamamı ister misin?',bd:[{ro:'So fare il futuro semplice',tr:'basit geleceği yapabiliyorum',role:'skill'},{ro:'Vuoi che te lo spieghi?',tr:'açıklamamı ister misin?',role:'offer'}]},
        {speaker:'B',gender:'f',en:'Sì, per favore! Devo impararlo per la settimana prossima.',tr:'Evet, lütfen! Önümüzdeki hafta öğrenmem gerekiyor.',bd:[{ro:'Devo impararlo',tr:'onu öğrenmem gerekiyor',role:'obligation'},{ro:'per la settimana prossima',tr:'önümüzdeki hafta için',role:'deadline'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Ciao! Voglio presentarmi. Mi chiamo Luca. So parlare tre lingue: italiano, inglese e un po\' di spagnolo. Devo ancora migliorare lo spagnolo, però. Nel tempo libero, amo leggere e fare sport. Non posso vivere senza caffè!',
      tr:'Merhaba! Kendimi tanıtmak istiyorum. Adım Luca. Üç dil konuşmasını biliyorum: İtalyanca, İngilizce ve biraz İspanyolca. Ama İspanyolcayı hâlâ geliştirmem gerekiyor. Boş zamanımda okumayı ve spor yapmayı seviyorum. Kahvesiz yaşayamam!',
      questions:[
        {q:'Luca kaç dil biliyor?',opts:['İki','Üç','Dört','Beş'],answer:1,tr:'Üç dil'},
        {q:'Hangi dili geliştirmesi gerekiyor?',opts:['İngilizce','Fransızca','İspanyolca','Almanca'],answer:2,tr:'İspanyolca (spagnolo)'},
        {q:'Neyi sevmez?',opts:['Kahveyi','Sporu','Okumayı','Kahvesiz kalmayı'],answer:3,tr:'Kahvesiz kalmayı (Non posso vivere senza caffè)'}
      ]
    }
  ],
  tones:[]
};
LESSONS[21] = L21;
