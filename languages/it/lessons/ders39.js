// ders39.js — Italian Lesson 39: Pensiero e opinione (Düşünce ve Görüş)
const L39 = {
  words:[
    {id:'w1',en:'pensare / ritenere',ro:'pensare',tr:'düşünmek / saymak',examples:[{it:'Penso che la situazione sia migliorata rispetto all\'anno scorso.',tr:'Durumun geçen yıla göre iyileştiğini düşünüyorum.',bd:[{ro:'Penso che la situazione sia migliorata',tr:'durumun iyileştiğini düşünüyorum (congiuntivo)'},{ro:'rispetto all\'anno scorso',tr:'geçen yıla göre'}]}]},
    {id:'w2',en:'credere / avere la convinzione',ro:'credere',tr:'inanmak / kanaat etmek',examples:[{it:'Credo fermamente che l\'istruzione sia il fondamento della società.',tr:'Eğitimin toplumun temeli olduğuna kesinlikle inanıyorum.',bd:[{ro:'Credo fermamente',tr:'kesinlikle inanıyorum'},{ro:'l\'istruzione sia il fondamento',tr:'eğitimin temel olduğuna (congiuntivo)'}]}]},
    {id:'w3',en:'secondo me / a mio parere',ro:'secondo me',tr:'bence / benim görüşüme göre',examples:[{it:'Secondo me abbiamo preso la decisione giusta, anche se è stata difficile.',tr:'Zor olsa da doğru kararı aldığımızı düşünüyorum.',bd:[{ro:'Secondo me',tr:'bence'},{ro:'anche se è stata difficile',tr:'zor olsa da'}]}]},
    {id:'w4',en:'essere d\'accordo / dissentire',ro:'essere d\'accordo',tr:'aynı fikirde olmak / katılmamak',examples:[{it:'Non sono d\'accordo con quello che dici. Vediamo le cose diversamente.',tr:'Söylediklerinle aynı fikirde değilim. Olaylara farklı bakıyoruz.',bd:[{ro:'Non sono d\'accordo',tr:'aynı fikirde değilim'},{ro:'Vediamo le cose diversamente',tr:'olaylara farklı bakıyoruz'}]}]},
    {id:'w5',en:'avere ragione / avere torto',ro:'avere ragione',tr:'haklı olmak / haksız olmak',examples:[{it:'Ammetto che avevi ragione: avrei dovuto ascoltarti prima.',tr:'Haklı olduğunu kabul ediyorum: seni daha önce dinlemeliydim.',bd:[{ro:'Ammetto che avevi ragione',tr:'haklı olduğunu kabul ediyorum'},{ro:'avrei dovuto ascoltarti prima',tr:'seni daha önce dinlemeliydim'}]}]},
    {id:'w6',en:'l\'opinione / il punto di vista',ro:'l\'opinione',tr:'görüş / bakış açısı',examples:[{it:'Ognuno ha la propria opinione e dobbiamo rispettarla.',tr:'Herkesin kendi görüşü var ve buna saygı duymamız lazım.',bd:[{ro:'Ognuno ha la propria opinione',tr:'herkesin kendi görüşü var'},{ro:'dobbiamo rispettarla',tr:'buna saygı duymamız lazım'}]}]},
    {id:'w7',en:'la critica / criticare',ro:'la critica',tr:'eleştiri / eleştirmek',examples:[{it:'Accetto le critiche costruttive, ma non quelle fatte solo per fare male.',tr:'Yapıcı eleştirileri kabul ederim ama yalnızca zarar vermek için yapılanları değil.',bd:[{ro:'critiche costruttive',tr:'yapıcı eleştiriler'},{ro:'fatte solo per fare male',tr:'yalnızca zarar vermek için yapılan'}]}]},
    {id:'w8',en:'il dubbio / la certezza',ro:'il dubbio',tr:'şüphe / kesinlik',examples:[{it:'Ho qualche dubbio su questa teoria: mancano le prove.',tr:'Bu teori konusunda bazı şüphelerim var: kanıtlar eksik.',bd:[{ro:'Ho qualche dubbio',tr:'bazı şüphelerim var'},{ro:'mancano le prove',tr:'kanıtlar eksik'}]}]},
    {id:'w9',en:'sostenere / difendere',ro:'sostenere',tr:'desteklemek / savunmak',examples:[{it:'Sostengo sempre le idee innovative, anche se sono controverse.',tr:'Tartışmalı da olsa her zaman yenilikçi fikirleri desteklerim.',bd:[{ro:'Sostengo sempre le idee innovative',tr:'her zaman yenilikçi fikirleri desteklerim'},{ro:'anche se sono controverse',tr:'tartışmalı da olsa'}]}]},
    {id:'w10',en:'il dibattito / la discussione',ro:'il dibattito',tr:'tartışma / münazara',examples:[{it:'Il dibattito sulla parità salariale è ancora molto acceso in Italia.',tr:'İtalya\'da ücret eşitliği tartışması hâlâ çok ateşli.',bd:[{ro:'Il dibattito sulla parità salariale',tr:'ücret eşitliği tartışması'},{ro:'è ancora molto acceso',tr:'hâlâ çok ateşli'}]}]},
    {id:'w11',en:'argomentare / giustificare',ro:'argomentare',tr:'gerekçelendirmek / haklı kılmak',examples:[{it:'Prima di criticare, bisogna argomentare bene le proprie posizioni.',tr:'Eleştirmeden önce kendi tutumlarını iyi gerekçelendirmek gerekir.',bd:[{ro:'Prima di criticare',tr:'eleştirmeden önce'},{ro:'argomentare bene le proprie posizioni',tr:'kendi tutumlarını iyi gerekçelendirmek'}]}]},
    {id:'w12',en:'l\'esempio / citare',ro:'l\'esempio',tr:'örnek / alıntı yapmak',examples:[{it:'Per esempio, in Finlandia il sistema educativo è considerato il migliore al mondo.',tr:'Örneğin Finlandiya\'da eğitim sistemi dünyanın en iyisi olarak kabul ediliyor.',bd:[{ro:'Per esempio',tr:'örneğin'},{ro:'è considerato il migliore al mondo',tr:'dünyanın en iyisi olarak kabul ediliyor'}]}]},
    {id:'w13',en:'la proposta / suggerire',ro:'la proposta',tr:'öneri / önermek',examples:[{it:'Ho una proposta: invece di litigare, cerchiamo una soluzione insieme.',tr:'Bir önerim var: tartışmak yerine birlikte çözüm arayalım.',bd:[{ro:'Ho una proposta',tr:'bir önerim var'},{ro:'cerchiamo una soluzione insieme',tr:'birlikte çözüm arayalım'}]}]},
    {id:'w14',en:'la conclusione / concludere',ro:'la conclusione',tr:'sonuç / sonuçlamak',examples:[{it:'In conclusione, possiamo affermare che il progetto è stato un successo.',tr:'Sonuç olarak projenin başarılı olduğunu söyleyebiliriz.',bd:[{ro:'In conclusione',tr:'sonuç olarak'},{ro:'il progetto è stato un successo',tr:'proje başarılı oldu'}]}]},
    {id:'w15',en:'l\'impressione / avere l\'impressione che',ro:'l\'impressione',tr:'izlenim / izlenimi olmak',examples:[{it:'Ho l\'impressione che lui non sia del tutto onesto con noi.',tr:'Onun bizimle tam olarak dürüst olmadığı izlenimim var.',bd:[{ro:'Ho l\'impressione che',tr:'izlenimim var ki'},{ro:'non sia del tutto onesto',tr:'tam olarak dürüst olmadığı'}]}]},
    {id:'w16',en:'dimostrare / provare',ro:'dimostrare',tr:'kanıtlamak / ispat etmek',examples:[{it:'Hai dimostrato la tua tesi con prove concrete — ottimo!',tr:'Tezini somut kanıtlarla ispatladın — mükemmel!',bd:[{ro:'Hai dimostrato la tua tesi',tr:'tezini ispatladın'},{ro:'con prove concrete',tr:'somut kanıtlarla'}]}]},
    {id:'w17',en:'ammettere / riconoscere',ro:'ammettere',tr:'kabul etmek / tanımak',examples:[{it:'Devo ammettere che ho sbagliato: me ne scuso.',tr:'Hata yaptığımı kabul etmeliyim: özür dilerim.',bd:[{ro:'Devo ammettere che ho sbagliato',tr:'hata yaptığımı kabul etmeliyim'},{ro:'me ne scuso',tr:'özür dilerim'}]}]},
    {id:'w18',en:'la comprensione / capire il punto di vista',ro:'la comprensione',tr:'anlayış / bakış açısını anlamak',examples:[{it:'Capisco il tuo punto di vista, anche se non sono completamente d\'accordo.',tr:'Bakış açını anlıyorum, tamamen katılmasam da.',bd:[{ro:'Capisco il tuo punto di vista',tr:'bakış açını anlıyorum'},{ro:'anche se non sono completamente d\'accordo',tr:'tamamen katılmasam da'}]}]},
    {id:'w19',en:'il pregiudizio / lo stereotipo',ro:'il pregiudizio',tr:'önyargı / stereotip',examples:[{it:'I pregiudizi bloccano la comprensione reciproca tra culture diverse.',tr:'Önyargılar farklı kültürler arasındaki karşılıklı anlayışı engeller.',bd:[{ro:'I pregiudizi bloccano',tr:'önyargılar engeller'},{ro:'la comprensione reciproca tra culture diverse',tr:'farklı kültürler arasındaki karşılıklı anlayışı'}]}]},
    {id:'w20',en:'la tolleranza / il rispetto',ro:'la tolleranza',tr:'hoşgörü / saygı',examples:[{it:'La tolleranza e il rispetto reciproco sono i pilastri di una società giusta.',tr:'Karşılıklı hoşgörü ve saygı adil bir toplumun direkleri.',bd:[{ro:'La tolleranza e il rispetto reciproco',tr:'karşılıklı hoşgörü ve saygı'},{ro:'pilastri di una società giusta',tr:'adil bir toplumun direkleri'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Congiuntivo Presente: Görüş Belirtmek',
      title_en:'Present Subjunctive: Expressing Opinions',
      explanation:'"Penso che", "credo che", "spero che" gibi ifadelerden sonra congiuntivo gelir.',
      table:[
        {pronoun:'Penso/Credo che + congiuntivo',form:'kanı belirtmek',example:'Penso che tu abbia ragione.',tr:'Haklı olduğunu düşünüyorum.'},
        {pronoun:'È importante che + congiuntivo',form:'önem belirtmek',example:'È importante che tutti partecipino.',tr:'Herkesin katılması önemli.'},
        {pronoun:'Spero che + congiuntivo',form:'umut belirtmek',example:'Spero che tutto vada bene.',tr:'Her şeyin iyi gideceğini umuyorum.'},
        {pronoun:'Benché + congiuntivo',form:'her ne kadar... olsa da',example:'Benché sia difficile, ci proviamo.',tr:'Zor olsa da deniyoruz.'}
      ],
      note:'Congiuntivo presente kuralı: Özne değişirse congiuntivo. Aynı özne: "Penso di avere ragione" (haklı olduğumu düşünüyorum — infinito).'
    },
    {
      id:'g2',
      title:'Connettivi per Argomentare: Bağlaçlar',
      title_en:'Connectors for Arguing',
      explanation:'Mantıklı argüman sunmak ve fikirleri bağlamak için bağlaçlar.',
      table:[
        {pronoun:'Innanzitutto / Prima di tutto',form:'öncelikle / her şeyden önce',example:'Innanzitutto, voglio chiarire la situazione.',tr:'Öncelikle, durumu açıklamak istiyorum.'},
        {pronoun:'Inoltre / Inoltre a ciò',form:'ayrıca / bunun yanı sıra',example:'Inoltre, i dati confermano questa tesi.',tr:'Ayrıca veriler bu tezi doğruluyor.'},
        {pronoun:'Tuttavia / Però',form:'ancak / yine de',example:'Tuttavia, ci sono delle eccezioni.',tr:'Ancak bazı istisnalar var.'},
        {pronoun:'In conclusione / Quindi',form:'sonuç olarak / dolayısıyla',example:'Quindi, la mia opinione è chiara.',tr:'Dolayısıyla görüşüm açık.'}
      ],
      note:'"D\'altra parte" = öte yandan. "In effetti" = gerçekten / aslında. "Nonostante ciò" = buna rağmen. Bunlar resmi tartışmalarda çok kullanılır.'
    },
    {
      id:'g3',
      title:'Espressioni di Accordo e Disaccordo',
      title_en:'Expressions of Agreement and Disagreement',
      explanation:'Bir fikre katılmak veya karşı çıkmak için kullanılan yapılar.',
      table:[
        {pronoun:'Sono d\'accordo',form:'katılıyorum',example:'Sono completamente d\'accordo con te.',tr:'Seninle tamamen aynı fikirdeyim.'},
        {pronoun:'Hai ragione',form:'haklısın',example:'Hai assolutamente ragione su questo.',tr:'Bu konuda kesinlikle haklısın.'},
        {pronoun:'Non sono convinto',form:'ikna olmadım',example:'Non sono convinto che sia la soluzione migliore.',tr:'Bunun en iyi çözüm olduğuna ikna olmadım.'},
        {pronoun:'Capisco ma...',form:'anlıyorum ama...',example:'Capisco il tuo punto di vista ma...',tr:'Bakış açını anlıyorum ama...'}
      ],
      note:'"Per me invece" = bence ise / benim için. "Dal mio punto di vista" = benim bakış açımdan. "Ho un\'opinione diversa" = farklı bir görüşüm var.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Secondo me, imparare le lingue straniere è uno dei migliori investimenti.',tr:'Bence yabancı dil öğrenmek en iyi yatırımlardan biri.',prompt:'Görüşünü belirt'},
    {id:'sp2',en:'Non sono d\'accordo con questa decisione, ma la rispetto.',tr:'Bu kararla aynı fikirde değilim ama saygı duyuyorum.',prompt:'Saygılı itiraz'},
    {id:'sp3',en:'Ammetto che avevo torto: hai avuto un\'idea migliore della mia.',tr:'Hatalı olduğumu kabul ediyorum: benden daha iyi bir fikrin vardı.',prompt:'Hatayı kabul et'},
    {id:'sp4',en:'Il dibattito sull\'intelligenza artificiale è affascinante ma preoccupante.',tr:'Yapay zeka tartışması büyüleyici ama endişe verici.',prompt:'Tartışmalı bir konu hakkında'},
    {id:'sp5',en:'Credo che la diversità culturale arricchisca la società.',tr:'Kültürel çeşitliliğin toplumu zenginleştirdiğine inanıyorum.',prompt:'İnanç belirt'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Görüş Tartışması',
      title_en:'Debating Opinions',
      lines:[
        {speaker:'A',gender:'m',en:'Penso che i social media facciano più danni che benefici alla società.',tr:'Sosyal medyanın topluma faydasından çok zarar verdiğini düşünüyorum.',bd:[{ro:'Penso che i social media facciano più danni',tr:'sosyal medyanın daha fazla zarar verdiğini düşünüyorum (congiuntivo)',role:'opinion'},{ro:'che benefici',tr:'faydasından',role:'comparison'}]},
        {speaker:'B',gender:'f',en:'Non sono completamente d\'accordo. I social media connettono persone in tutto il mondo.',tr:'Tamamen aynı fikirde değilim. Sosyal medya dünya genelinde insanları birbirine bağlıyor.',bd:[{ro:'Non sono completamente d\'accordo',tr:'tamamen aynı fikirde değilim',role:'disagreement'},{ro:'connettono persone in tutto il mondo',tr:'dünya genelinde insanları birbirine bağlıyor',role:'counterargument'}]},
        {speaker:'A',gender:'m',en:'Capisco il tuo punto di vista, tuttavia penso che la dipendenza dai social sia un problema reale.',tr:'Bakış açını anlıyorum, ancak sosyal medyaya bağımlılığın gerçek bir sorun olduğunu düşünüyorum.',bd:[{ro:'Capisco il tuo punto di vista',tr:'bakış açını anlıyorum',role:'acknowledgement'},{ro:'tuttavia',tr:'ancak',role:'connector'}]},
        {speaker:'B',gender:'f',en:'Hai ragione su questo. La dipendenza è un problema. Ma la colpa non è della tecnologia, è dell\'uso che ne facciamo.',tr:'Bu konuda haklısın. Bağımlılık bir sorun. Ama suç teknolojinin değil, onu kullanma şeklimizin.',bd:[{ro:'Hai ragione su questo',tr:'bu konuda haklısın',role:'partial_agreement'},{ro:'La colpa non è della tecnologia',tr:'suç teknolojinin değil',role:'argument'}]},
        {speaker:'A',gender:'m',en:'Giusto. Forse il problema è nell\'educazione digitale, non nei social in sé.',tr:'Doğru. Belki sorun sosyal medyanın kendisinde değil, dijital eğitimde.',bd:[{ro:'Forse il problema è nell\'educazione digitale',tr:'belki sorun dijital eğitimde',role:'conclusion'},{ro:'non nei social in sé',tr:'sosyal medyanın kendisinde değil',role:'nuance'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Saper esprimere la propria opinione in modo chiaro e rispettoso è una competenza fondamentale. In italiano, ci sono molti modi per farlo. Puoi iniziare con "secondo me" o "a mio parere". Quando non sei d\'accordo, puoi dire "non sono del tutto d\'accordo" oppure "vedo le cose diversamente". È importante argomentare le proprie posizioni con esempi concreti. Ricorda che un buon dibattito significa ascoltare anche il punto di vista degli altri.',
      tr:'Kendi görüşünü açık ve saygılı bir şekilde ifade edebilmek temel bir yetkinlik. İtalyanca\'da bunu yapmanın pek çok yolu var. "Bence" veya "kanaatimce" ile başlayabilirsin. Katılmadığında "tamamen aynı fikirde değilim" ya da "olaylara farklı bakıyorum" diyebilirsin. Kendi tutumlarını somut örneklerle gerekçelendirmek önemli. Unutma ki iyi bir tartışma, başkalarının bakış açısını da dinlemek anlamına gelir.',
      questions:[
        {q:'Görüş belirtmek için hangi ifadeler kullanılabilir?',opts:['"Ciao!" ve "Grazie!"','"Secondo me" veya "a mio parere"','"Quanto costa?" ve "dove?"','"Buongiorno" ve "arrivederci"'],answer:1,tr:'"Secondo me" veya "a mio parere"'},
        {q:'Katılmadığında ne denilebilir?',opts:['"Sono d\'accordo!"','"Non sono del tutto d\'accordo"','"Grazie mille!"','"Come stai?"'],answer:1,tr:'"Non sono del tutto d\'accordo" (tamamen aynı fikirde değilim)'},
        {q:'İyi bir tartışma ne anlama gelir?',opts:['Hep kazanmak','Başkalarının bakış açısını da dinlemek','Sadece kendi fikrini savunmak','Hiç konuşmamak'],answer:1,tr:'Başkalarının bakış açısını da dinlemek'}
      ]
    }
  ],
  tones:[]
};
LESSONS[39] = L39;
