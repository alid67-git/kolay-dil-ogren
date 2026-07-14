// ders34.js — Italian Lesson 34: Denaro e finanze (Para ve Finans)
const L34 = {
  words:[
    {id:'w1',en:'i soldi / il denaro',ro:'i soldi',tr:'para',examples:[{it:'I soldi non fanno la felicità, ma aiutano.',tr:'Para mutluluğu getirmez ama yardımcı olur.',bd:[{ro:'I soldi non fanno la felicità',tr:'para mutluluğu getirmez'},{ro:'ma aiutano',tr:'ama yardımcı olur'}]}]},
    {id:'w2',en:'la banca / il conto corrente',ro:'la banca',tr:'banka / cari hesap',examples:[{it:'Ho aperto un conto corrente in una banca online, più comoda.',tr:'Daha pratik bir çevrimiçi bankada cari hesap açtım.',bd:[{ro:'Ho aperto un conto corrente',tr:'cari hesap açtım'},{ro:'una banca online',tr:'çevrimiçi banka'}]}]},
    {id:'w3',en:'il bancomat / il prelievo',ro:'il bancomat',tr:'ATM / para çekme',examples:[{it:'Ho bisogno di fare un prelievo al bancomat, ho finito i contanti.',tr:'ATM\'den para çekmem lazım, nakit bitti.',bd:[{ro:'fare un prelievo al bancomat',tr:'ATM\'den para çekmek'},{ro:'ho finito i contanti',tr:'nakit bitti'}]}]},
    {id:'w4',en:'la carta di credito / il pagamento',ro:'la carta di credito',tr:'kredi kartı / ödeme',examples:[{it:'Accettate la carta di credito o solo contanti?',tr:'Kredi kartı kabul ediyor musunuz yoksa sadece nakit mi?',bd:[{ro:'Accettate la carta di credito?',tr:'kredi kartı kabul ediyor musunuz?'},{ro:'solo contanti',tr:'sadece nakit'}]}]},
    {id:'w5',en:'il costo / il prezzo',ro:'il costo',tr:'maliyet / fiyat',examples:[{it:'Il costo della vita a Milano è molto più alto rispetto ad altre città italiane.',tr:'Milano\'daki yaşam maliyeti diğer İtalyan şehirlerine göre çok daha yüksek.',bd:[{ro:'Il costo della vita',tr:'yaşam maliyeti'},{ro:'molto più alto rispetto ad altre città',tr:'diğer şehirlere göre çok daha yüksek'}]}]},
    {id:'w6',en:'il budget / il bilancio',ro:'il budget',tr:'bütçe',examples:[{it:'Devo fare un budget mensile per non spendere troppo.',tr:'Çok fazla harcamamak için aylık bütçe yapmam lazım.',bd:[{ro:'fare un budget mensile',tr:'aylık bütçe yapmak'},{ro:'per non spendere troppo',tr:'çok fazla harcamamak için'}]}]},
    {id:'w7',en:'lo stipendio / il salario',ro:'lo stipendio',tr:'maaş / ücret',examples:[{it:'Ho ricevuto un aumento di stipendio del dieci percento!',tr:'Yüzde on maaş zammı aldım!',bd:[{ro:'Ho ricevuto un aumento di stipendio',tr:'maaş zammı aldım'},{ro:'del dieci percento',tr:'yüzde on'}]}]},
    {id:'w8',en:'il risparmio / risparmiare',ro:'il risparmio',tr:'birikim / biriktirmek/tasarruf',examples:[{it:'Risparmio duecento euro al mese per comprare una macchina.',tr:'Araba almak için aylık iki yüz euro biriktiriyorum.',bd:[{ro:'Risparmio duecento euro al mese',tr:'aylık iki yüz euro biriktiriyorum'},{ro:'per comprare una macchina',tr:'araba almak için'}]}]},
    {id:'w9',en:'il debito / il prestito',ro:'il debito',tr:'borç / kredi',examples:[{it:'Ho un debito con la banca per il mutuo della casa.',tr:'Ev ipoteği için bankaya borcum var.',bd:[{ro:'Ho un debito con la banca',tr:'bankaya borcum var'},{ro:'per il mutuo della casa',tr:'ev ipoteği için'}]}]},
    {id:'w10',en:'investire / l\'investimento',ro:'investire',tr:'yatırım yapmak / yatırım',examples:[{it:'Ho investito parte dei miei risparmi in fondi pensione.',tr:'Birikimlerimin bir kısmını emeklilik fonlarına yatırdım.',bd:[{ro:'Ho investito parte dei miei risparmi',tr:'birikimlerimin bir kısmını yatırdım'},{ro:'fondi pensione',tr:'emeklilik fonları'}]}]},
    {id:'w11',en:'la tassa / l\'imposta',ro:'la tassa',tr:'vergi',examples:[{it:'In Italia le tasse sono abbastanza alte rispetto ad altri paesi europei.',tr:'İtalya\'da vergiler diğer Avrupa ülkelerine göre oldukça yüksek.',bd:[{ro:'le tasse sono abbastanza alte',tr:'vergiler oldukça yüksek'},{ro:'rispetto ad altri paesi europei',tr:'diğer Avrupa ülkelerine göre'}]}]},
    {id:'w12',en:'la fattura / la ricevuta',ro:'la fattura',tr:'fatura / fiş',examples:[{it:'Ho bisogno della fattura per la dichiarazione dei redditi.',tr:'Vergi beyannamesi için faturaya ihtiyacım var.',bd:[{ro:'Ho bisogno della fattura',tr:'faturaya ihtiyacım var'},{ro:'la dichiarazione dei redditi',tr:'vergi beyannamesi'}]}]},
    {id:'w13',en:'la borsa valori / le azioni',ro:'la borsa',tr:'borsa / hisseler',examples:[{it:'La borsa di Milano ha chiuso in rialzo oggi grazie ai dati economici positivi.',tr:'Bugün olumlu ekonomik veriler sayesinde Milano borsası artışla kapandı.',bd:[{ro:'ha chiuso in rialzo',tr:'artışla kapandı'},{ro:'grazie ai dati economici positivi',tr:'olumlu ekonomik veriler sayesinde'}]}]},
    {id:'w14',en:'la pensione / andare in pensione',ro:'la pensione',tr:'emeklilik / emekli olmak',examples:[{it:'Mio padre è andato in pensione a sessantadue anni dopo quarant\'anni di lavoro.',tr:'Babam kırk yıl çalışmasının ardından altmış iki yaşında emekli oldu.',bd:[{ro:'è andato in pensione',tr:'emekli oldu'},{ro:'dopo quarant\'anni di lavoro',tr:'kırk yıl çalışmasının ardından'}]}]},
    {id:'w15',en:'lo sconto / la promozione',ro:'lo sconto',tr:'indirim / promosyon',examples:[{it:'Con questa carta fedeltà ricevo sempre uno sconto del cinque percento.',tr:'Bu sadakat kartıyla her zaman yüzde beş indirim alıyorum.',bd:[{ro:'Con questa carta fedeltà',tr:'bu sadakat kartıyla'},{ro:'uno sconto del cinque percento',tr:'yüzde beş indirim'}]}]},
    {id:'w16',en:'l\'inflazione / il potere d\'acquisto',ro:'l\'inflazione',tr:'enflasyon / satın alma gücü',examples:[{it:'L\'inflazione ha ridotto il potere d\'acquisto delle famiglie italiane.',tr:'Enflasyon İtalyan ailelerinin satın alma gücünü düşürdü.',bd:[{ro:'L\'inflazione ha ridotto',tr:'enflasyon düşürdü'},{ro:'il potere d\'acquisto',tr:'satın alma gücü'}]}]},
    {id:'w17',en:'il mutuo / il finanziamento',ro:'il mutuo',tr:'konut kredisi / finansman',examples:[{it:'Ho richiesto un mutuo trentennale per comprare la casa.',tr:'Ev almak için otuz yıllık konut kredisi talep ettim.',bd:[{ro:'un mutuo trentennale',tr:'otuz yıllık konut kredisi'},{ro:'per comprare la casa',tr:'ev almak için'}]}]},
    {id:'w18',en:'fare la spesa / fare shopping',ro:'fare la spesa',tr:'market alışverişi yapmak / alışveriş yapmak',examples:[{it:'Faccio la spesa il sabato e compro per tutta la settimana.',tr:'Cumartesi alışveriş yapıyorum ve tüm hafta için alıyorum.',bd:[{ro:'Faccio la spesa il sabato',tr:'cumartesi alışveriş yapıyorum'},{ro:'per tutta la settimana',tr:'tüm hafta için'}]}]},
    {id:'w19',en:'pagare a rate / in contanti',ro:'pagare a rate',tr:'taksitle / peşin ödemek',examples:[{it:'Ho pagato il televisore a rate, dodici mesi senza interessi.',tr:'Televizyonu on iki ay faizsiz taksitle ödedim.',bd:[{ro:'Ho pagato a rate',tr:'taksitle ödedim'},{ro:'dodici mesi senza interessi',tr:'on iki ay faizsiz'}]}]},
    {id:'w20',en:'guadagnare / spendere',ro:'guadagnare',tr:'kazanmak / harcamak',examples:[{it:'Guadagno abbastanza ma spendo troppo: devo cambiare le mie abitudini.',tr:'Yeterince kazanıyorum ama çok fazla harcıyorum: alışkanlıklarımı değiştirmem lazım.',bd:[{ro:'Guadagno abbastanza',tr:'yeterince kazanıyorum'},{ro:'spendo troppo',tr:'çok fazla harcıyorum'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Condizionale Passato: Pişmanlık ve Olasılık',
      title_en:'Conditional Past: Regrets and Hypotheticals',
      explanation:'"Avrei dovuto" = yapmalıydım. "Avrei potuto" = yapabilirdim. Geçmişteki olasılıklar.',
      table:[
        {pronoun:'avrei dovuto',form:'yapmalıydım',example:'Avrei dovuto risparmiare di più.',tr:'Daha fazla biriktirmeliydim.'},
        {pronoun:'avrei potuto',form:'yapabilirdim',example:'Avrei potuto investire prima.',tr:'Daha önce yatırım yapabilirdim.'},
        {pronoun:'sarebbe stato meglio',form:'daha iyi olurdu',example:'Sarebbe stato meglio non comprare quella macchina.',tr:'O arabayı almamak daha iyi olurdu.'},
        {pronoun:'se avessi + cong.',form:'koşul geçmiş',example:'Se avessi saputo, non avrei speso tutto.',tr:'Bilseydim hepsini harcamazdım.'}
      ],
      note:'Condizionale passato = avrei/avresti/avrebbe + participio. Pişmanlık ifadelerinde çok yaygın.'
    },
    {
      id:'g2',
      title:'Espressioni di Prezzo: Fiyat İfadeleri',
      title_en:'Price Expressions',
      explanation:'Fiyat sormak, pazarlık yapmak ve bütçeyi ifade etmek için yapılar.',
      table:[
        {pronoun:'Quanto costa?',form:'ne kadar? (tekil)',example:'Quanto costa questo appartamento?',tr:'Bu daire ne kadar?'},
        {pronoun:'Quanto costano?',form:'ne kadar? (çoğul)',example:'Quanto costano le scarpe in vetrina?',tr:'Vitrindeki ayakkabılar ne kadar?'},
        {pronoun:'costa troppo',form:'çok pahalı',example:'Costa troppo per le mie possibilità.',tr:'İmkânlarım için çok pahalı.'},
        {pronoun:'è un affare!',form:'çok ucuz / kazandım!',example:'Questo appartamento è un vero affare!',tr:'Bu daire gerçekten bir fırsat!'}
      ],
      note:'"Fare uno sconto" = indirim yapmak. "Trattabile" = pazarlık yapılabilir. "Prezzo fisso" = sabit fiyat.'
    },
    {
      id:'g3',
      title:'Verbi Finanziari: Para Fiilleri',
      title_en:'Financial Verbs',
      explanation:'Finans ve para konularında kullanılan temel fiiller.',
      table:[
        {pronoun:'guadagnare / incassare',form:'kazanmak / tahsil etmek',example:'Guadagno duemila euro al mese netti.',tr:'Ayda net iki bin euro kazanıyorum.'},
        {pronoun:'spendere / sprecare',form:'harcamak / israf etmek',example:'Non sprecare i soldi in cose inutili!',tr:'Gereksiz şeylere para israf etme!'},
        {pronoun:'risparmiare / mettere da parte',form:'biriktirmek / bir kenara koymak',example:'Metto da parte il dieci percento dello stipendio.',tr:'Maaşımın yüzde onunu bir kenara koyuyorum.'},
        {pronoun:'dover pagare',form:'ödemek zorunda olmak',example:'Devo pagare le tasse entro maggio.',tr:'Mayıs sonuna kadar vergileri ödemem lazım.'}
      ],
      note:'"Fare economia" = tasarruf yapmak. "Andare in rosso" = hesabı eksi çıkmak, borçlu olmak. "Fare quadrare i conti" = hesapları dengelemek.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Lo stipendio medio in Italia non è alto: molti giovani fanno fatica ad arrivare a fine mese.',tr:'İtalya\'da ortalama maaş yüksek değil: pek çok genç ay sonu geçindirmeye çalışıyor.',prompt:'İtalyan ekonomisi hakkında'},
    {id:'sp2',en:'Risparmio ogni mese per fare un viaggio speciale in Giappone.',tr:'Japonya\'ya özel bir seyahat yapmak için her ay biriktiriyorum.',prompt:'Tasarruf hedefi anlat'},
    {id:'sp3',en:'Ho finalmente pagato tutti i debiti! Mi sento libero!',tr:'Sonunda tüm borçlarımı ödedim! Özgür hissediyorum!',prompt:'Borç bitirmek'},
    {id:'sp4',en:'Conviene comprare o affittare casa? Dipende dalla città.',tr:'Ev almak mı kiraya vermek mi daha mantıklı? Şehre göre değişir.',prompt:'Ev kararı tartış'},
    {id:'sp5',en:'Per risparmiare, cucino a casa ogni giorno e non mangio mai fuori.',tr:'Tasarruf etmek için her gün evde yemek pişiriyor ve dışarıda hiç yemiyorum.',prompt:'Tasarruf stratejisi anlat'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Bankada Hesap Açmak',
      title_en:'Opening a Bank Account',
      lines:[
        {speaker:'A',gender:'m',en:'Buongiorno, vorrei aprire un conto corrente.',tr:'Günaydın, cari hesap açmak istiyorum.',bd:[{ro:'vorrei aprire un conto corrente',tr:'cari hesap açmak istiyorum',role:'request'}]},
        {speaker:'B',gender:'f',en:'Certo. Può mostrarmi il documento d\'identità e il codice fiscale?',tr:'Tabii. Kimlik belgenizi ve vergi numaranızı gösterebilir misiniz?',bd:[{ro:'documento d\'identità',tr:'kimlik belgesi',role:'document'},{ro:'il codice fiscale',tr:'vergi numarası',role:'document'}]},
        {speaker:'A',gender:'m',en:'Sì, eccoli. Che tipi di conti avete?',tr:'Evet, buyurun. Hangi tür hesaplarınız var?',bd:[{ro:'Sì, eccoli',tr:'evet, buyurun',role:'handover'},{ro:'Che tipi di conti avete?',tr:'hangi tür hesaplar var?',role:'question'}]},
        {speaker:'B',gender:'f',en:'Abbiamo il conto base a zero spese mensili, oppure il conto premium con servizi aggiuntivi.',tr:'Aylık sıfır masraflı temel hesap ya da ek hizmetli premium hesap var.',bd:[{ro:'a zero spese mensili',tr:'aylık sıfır masraflı',role:'feature'},{ro:'servizi aggiuntivi',tr:'ek hizmetler',role:'feature'}]},
        {speaker:'A',gender:'m',en:'Preferisco il conto base per ora. Ho bisogno anche del bancomat.',tr:'Şimdilik temel hesabı tercih ederim. Banka kartına da ihtiyacım var.',bd:[{ro:'Preferisco il conto base per ora',tr:'şimdilik temel hesabı tercih ederim',role:'choice'},{ro:'Ho bisogno anche del bancomat',tr:'banka kartına da ihtiyacım var',role:'request'}]},
        {speaker:'B',gender:'f',en:'Benissimo. Il bancomat arriva in sette giorni lavorativi. Intanto le do le credenziali per l\'online banking.',tr:'Çok iyi. Banka kartı yedi iş günü içinde gelir. Bu arada çevrimiçi bankacılık için bilgilerinizi veriyorum.',bd:[{ro:'sette giorni lavorativi',tr:'yedi iş günü',role:'time'},{ro:'credenziali per l\'online banking',tr:'çevrimiçi bankacılık bilgileri',role:'info'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Il costo della vita in Italia varia molto da città a città. Milano è la città più cara: l\'affitto di un bilocale in centro può costare duemila euro al mese. Al Sud invece i prezzi sono molto più bassi. Lo stipendio medio lordo in Italia è di circa ventisette mila euro l\'anno, ma al netto le buste paga sono molto più basse a causa delle tasse. Molti giovani italiani emigrano all\'estero per cercare stipendi migliori.',
      tr:'İtalya\'da yaşam maliyeti şehirden şehre çok farklı. Milano en pahalı şehir: merkezde iki odalı dairenin kirası aylık iki bin euro olabilir. Güneyde ise fiyatlar çok daha düşük. İtalya\'da ortalama brüt maaş yılda yaklaşık yirmi yedi bin euro, ancak net maaşlar vergiler nedeniyle çok daha düşük. Pek çok İtalyan genç daha iyi maaş aramak için yurtdışına göç ediyor.',
      questions:[
        {q:'Milano\'da merkezdeki iki odalı daire kaça kiralanıyor?',opts:['500 euro','1000 euro','2000 euro','3500 euro'],answer:2,tr:'Yaklaşık 2000 euro'},
        {q:'İtalyan gençler neden yurtdışına göç ediyor?',opts:['Kültür için','Daha iyi maaş için','Eğitim için','Seyahat için'],answer:1,tr:'Daha iyi maaş için (stipendi migliori)'},
        {q:'Yaşam maliyeti İtalya\'da nasıl?',opts:['Her yerde aynı','Kuzey daha ucuz','Şehirden şehre çok farklı','Güney daha pahalı'],answer:2,tr:'Şehirden şehre çok farklı (varia molto da città a città)'}
      ]
    }
  ],
  tones:[]
};
LESSONS[34] = L34;
