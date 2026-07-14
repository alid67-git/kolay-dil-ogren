// ders30.js — Italian Lesson 30: Viaggi e turismo (Seyahat ve Turizm)
const L30 = {
  words:[
    {id:'w1',en:'il passaporto / i documenti',ro:'il passaporto',tr:'pasaport / belgeler',examples:[{it:'Hai il passaporto? La scadenza non è ancora passata?',tr:'Pasaportunuz var mı? Süresi henüz geçmedi mi?',bd:[{ro:'Hai il passaporto?',tr:'pasaportunuz var mı?'},{ro:'La scadenza non è ancora passata?',tr:'süresi henüz geçmedi mi?'}]}]},
    {id:'w2',en:'la valigia / il bagaglio',ro:'la valigia',tr:'valiz / bagaj',examples:[{it:'Ho fatto la valigia tutta la notte, parto domani all\'alba.',tr:'Tüm gece valiz yaptım, yarın şafakta gidiyorum.',bd:[{ro:'Ho fatto la valigia',tr:'valiz yaptım'},{ro:'all\'alba',tr:'şafakta'}]}]},
    {id:'w3',en:'il volo / l\'aereo',ro:'il volo',tr:'uçuş / uçak',examples:[{it:'Il mio volo parte alle sei di mattina, quindi devo svegliarmi alle tre.',tr:'Uçuşum sabah altıda kalkıyor, bu yüzden üçte uyanmam gerekiyor.',bd:[{ro:'Il mio volo parte alle sei',tr:'uçuşum altıda kalkıyor'},{ro:'devo svegliarmi alle tre',tr:'üçte uyanmam gerekiyor'}]}]},
    {id:'w4',en:'prenotare / la prenotazione',ro:'prenotare',tr:'rezervasyon yapmak / rezervasyon',examples:[{it:'Ho prenotato l\'hotel online tre mesi fa a un prezzo ottimo.',tr:'Oteli üç ay önce çevrimiçi mükemmel bir fiyata rezervasyon yaptım.',bd:[{ro:'Ho prenotato l\'hotel online',tr:'oteli çevrimiçi rezervasyon yaptım'},{ro:'tre mesi fa',tr:'üç ay önce'}]}]},
    {id:'w5',en:'il turista / il viaggiatore',ro:'il turista',tr:'turist / gezgin',examples:[{it:'Roma è invasa dai turisti d\'estate. Le file ai musei sono interminabili.',tr:'Roma yazın turistlerle dolup taşıyor. Müzelerdeki kuyruklar bitmez.',bd:[{ro:'è invasa dai turisti',tr:'turistlerle dolup taşıyor'},{ro:'interminabili',tr:'bitmez'}]}]},
    {id:'w6',en:'la guida turistica / la mappa',ro:'la guida turistica',tr:'turist rehberi / harita',examples:[{it:'Abbiamo preso una guida turistica di Venezia alla libreria.',tr:'Kitapçıdan bir Venedik turist rehberi aldık.',bd:[{ro:'abbiamo preso una guida turistica',tr:'bir turist rehberi aldık'},{ro:'alla libreria',tr:'kitapçıdan'}]}]},
    {id:'w7',en:'il biglietto / il ticket',ro:'il biglietto',tr:'bilet',examples:[{it:'I biglietti per il Colosseo si comprano online per evitare le code.',tr:'Kuyruğu önlemek için Kolezyum biletleri çevrimiçi alınıyor.',bd:[{ro:'I biglietti per il Colosseo',tr:'Kolezyum biletleri'},{ro:'per evitare le code',tr:'kuyruğu önlemek için'}]}]},
    {id:'w8',en:'il tour / la visita guidata',ro:'il tour',tr:'tur / rehberli gezi',examples:[{it:'Ho fatto una visita guidata degli Uffizi con una guida esperta.',tr:'Uzman bir rehberle Uffizi\'nin rehberli gezisine katıldım.',bd:[{ro:'una visita guidata degli Uffizi',tr:'Uffizi\'nin rehberli gezisi'},{ro:'con una guida esperta',tr:'uzman bir rehberle'}]}]},
    {id:'w9',en:'il souvenir / il ricordo',ro:'il souvenir',tr:'hatıra eşyası',examples:[{it:'Ho comprato dei souvenir per i colleghi: una bottiglia di vino e dei biscotti tipici.',tr:'Meslektaşlarım için hatıra eşyası aldım: bir şişe şarap ve tipik bisküviler.',bd:[{ro:'Ho comprato dei souvenir',tr:'hatıra eşyası aldım'},{ro:'biscotti tipici',tr:'tipik bisküviler'}]}]},
    {id:'w10',en:'il cambio / la valuta',ro:'il cambio',tr:'döviz kuru / para birimi',examples:[{it:'Qual è il cambio tra euro e dollaro oggi?',tr:'Bugün euro ile dolar arasındaki kur ne?',bd:[{ro:'Qual è il cambio',tr:'kur ne?'},{ro:'tra euro e dollaro',tr:'euro ile dolar arasında'}]}]},
    {id:'w11',en:'l\'albergo / il B&B',ro:'l\'albergo',tr:'otel / pansiyon',examples:[{it:'Preferisco i B&B agli alberghi: sono più accoglienti e spesso meno cari.',tr:'Otellere göre pansiyonları tercih ederim: daha samimi ve genellikle daha ucuz.',bd:[{ro:'Preferisco i B&B agli alberghi',tr:'otellere göre pansiyonları tercih ederim'},{ro:'più accoglienti',tr:'daha samimi'}]}]},
    {id:'w12',en:'il check-in / il check-out',ro:'il check-in',tr:'giriş / çıkış (otel)',examples:[{it:'Il check-in è dalle quattordici, ma possiamo lasciare le valigie prima.',tr:'Giriş saat 14\'ten itibaren, ama valizi daha önce bırakabiliriz.',bd:[{ro:'Il check-in è dalle quattordici',tr:'giriş 14\'ten itibaren'},{ro:'lasciare le valigie prima',tr:'valizi daha önce bırakmak'}]}]},
    {id:'w13',en:'la spiaggia / il mare',ro:'la spiaggia',tr:'plaj / deniz',examples:[{it:'Le spiagge della Sardegna sono tra le più belle del Mediterraneo.',tr:'Sardunya\'nın plajları Akdeniz\'in en güzelleri arasında.',bd:[{ro:'Le spiagge della Sardegna',tr:'Sardunya\'nın plajları'},{ro:'tra le più belle del Mediterraneo',tr:'Akdeniz\'in en güzelleri arasında'}]}]},
    {id:'w14',en:'la montagna / il lago',ro:'la montagna',tr:'dağ / göl',examples:[{it:'Preferisco la montagna al mare: adoro fare escursioni e respirare aria fresca.',tr:'Denize göre dağı tercih ederim: yürüyüş yapmayı ve temiz hava solumayı çok severim.',bd:[{ro:'Preferisco la montagna al mare',tr:'denize göre dağı tercih ederim'},{ro:'fare escursioni',tr:'yürüyüş yapmak'}]}]},
    {id:'w15',en:'il meteo / il clima',ro:'il meteo',tr:'hava durumu / iklim',examples:[{it:'Il meteo dice che durante la nostra vacanza ci sarà bel tempo.',tr:'Hava durumu tatilimiz sırasında güzel hava olacağını söylüyor.',bd:[{ro:'Il meteo dice che',tr:'hava durumu ... diyor'},{ro:'ci sarà bel tempo',tr:'güzel hava olacak'}]}]},
    {id:'w16',en:'la dogana / il controllo passaporti',ro:'la dogana',tr:'gümrük / pasaport kontrolü',examples:[{it:'Alla dogana mi hanno chiesto cosa avevo in valigia.',tr:'Gümrükte bavulumda ne olduğunu sordular.',bd:[{ro:'Alla dogana',tr:'gümrükte'},{ro:'mi hanno chiesto cosa avevo in valigia',tr:'bavulumda ne olduğunu sordular'}]}]},
    {id:'w17',en:'il ritardo / cancellare il volo',ro:'il ritardo',tr:'gecikme / uçuşu iptal etmek',examples:[{it:'Il mio volo ha due ore di ritardo a causa del maltempo.',tr:'Uçuşum kötü hava nedeniyle iki saat gecikmeli.',bd:[{ro:'ha due ore di ritardo',tr:'iki saat gecikmeli'},{ro:'a causa del maltempo',tr:'kötü hava nedeniyle'}]}]},
    {id:'w18',en:'la gita / il viaggio organizzato',ro:'la gita',tr:'gezi / paket tur',examples:[{it:'Abbiamo fatto una gita di un giorno a Pompei: molto interessante!',tr:'Pompei\'ye bir günlük gezi yaptık: çok ilginçti!',bd:[{ro:'una gita di un giorno a Pompei',tr:'Pompei\'ye bir günlük gezi'},{ro:'molto interessante',tr:'çok ilginç'}]}]},
    {id:'w19',en:'la destinazione / la meta',ro:'la destinazione',tr:'destinasyon / hedef',examples:[{it:'La prossima destinazione è il Giappone. Non vedo l\'ora!',tr:'Sonraki destinasyon Japonya. Sabırsızlanıyorum!',bd:[{ro:'La prossima destinazione',tr:'sonraki destinasyon'},{ro:'Non vedo l\'ora!',tr:'sabırsızlanıyorum!'}]}]},
    {id:'w20',en:'il jet lag / l\'adattamento',ro:'il jet lag',tr:'jet lag / uyum',examples:[{it:'Dopo dieci ore di volo ho il jet lag terribile, non riesco a dormire.',tr:'On saatlik uçuştan sonra korkunç jet lag\'im var, uyuyamıyorum.',bd:[{ro:'Dopo dieci ore di volo',tr:'on saatlik uçuştan sonra'},{ro:'non riesco a dormire',tr:'uyuyamıyorum'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Futuro per i Piani di Viaggio: Seyahat Planları',
      title_en:'Future Tense for Travel Plans',
      explanation:'Seyahat planlarını anlatmak için futuro semplice veya presente + avverbio.',
      table:[
        {pronoun:'futuro semplice',form:'kesin plan / tahmin',example:'Partiremo venerdì sera e arriveremo sabato.',tr:'Cuma akşamı gideceğiz ve cumartesi varacağız.'},
        {pronoun:'presente + avverbio',form:'çok kesin plan',example:'Domani parto per la Sicilia.',tr:'Yarın Sicilya\'ya gidiyorum.'},
        {pronoun:'stare per + inf.',form:'az sonra olacak',example:'Sto per imbarcarmi, ci sentiamo dopo!',tr:'Biniş yapmak üzereyim, sonra görüşürüz!'},
        {pronoun:'avere intenzione di',form:'niyetinde olmak',example:'Ho intenzione di visitare Venezia quest\'autunno.',tr:'Bu sonbahar Venedik\'i ziyaret etmeyi düşünüyorum.'}
      ],
      note:'"Andiamo!" = gidelim! Seyahatte yaygın: "Prenotiamo!" (rezervasyon yapalım!), "Partiamo!" (gidelim!)'
    },
    {
      id:'g2',
      title:'Imperfetto: Geçmişteki Tatil Anıları',
      title_en:'Imperfetto: Past Holiday Memories',
      explanation:'Tatil anılarını anlatmak için imperfetto (süregelen geçmiş) ve passato prossimo (tamamlanmış).',
      table:[
        {pronoun:'imperfetto',form:'tatilde nasıldı / alışkanlık',example:'Ogni estate andavamo al mare con i nonni.',tr:'Her yaz büyükannelerle denize giderdik.'},
        {pronoun:'passato prossimo',form:'tek seferlik olay',example:'Abbiamo visitato il Colosseo il secondo giorno.',tr:'İkinci gün Kolezyum\'u ziyaret ettik.'},
        {pronoun:'combinazione',form:'ikisi birlikte',example:'Mentre mangiavamo, è arrivata una telefonata.',tr:'Yemek yerken bir telefon geldi.'},
        {pronoun:'descrizione',form:'tatil anısı anlatmak',example:'Il mare era azzurrissimo e faceva caldo.',tr:'Deniz çok maviydı ve sıcaktı.'}
      ],
      note:'"Com\'era la vacanza?" (tatil nasıldı?) — imperfetto ile cevap. "Cosa avete fatto?" (ne yaptınız?) — passato prossimo ile cevap.'
    },
    {
      id:'g3',
      title:'Frasi Utili in Viaggio: Seyahat Kalıpları',
      title_en:'Useful Travel Phrases',
      explanation:'Seyahatte en çok kullanılan pratik ifadeler.',
      table:[
        {pronoun:'cercare',form:'aramak',example:'Sto cercando l\'uscita / la fermata / il bagno.',tr:'Çıkışı / durağı / tuvaleti arıyorum.'},
        {pronoun:'consigliare',form:'tavsiye etmek',example:'Mi consigliate qualche ristorante tipico?',tr:'Tipik bir restoran tavsiye eder misiniz?'},
        {pronoun:'essere incluso',form:'dahil mi?',example:'La colazione è inclusa nel prezzo?',tr:'Kahvaltı fiyata dahil mi?'},
        {pronoun:'c\'è problema',form:'sorun ifadesi',example:'C\'è un problema con la mia camera.',tr:'Odamda bir sorun var.'}
      ],
      note:'Acil durum: "Aiuto!" (İmdat!), "Chiami un\'ambulanza!" (Ambulans çağırın!), "Dov\'è l\'ambasciata turca?" (Türk büyükelçiliği nerede?)'
    }
  ],
  speaking:[
    {id:'sp1',en:'La mia vacanza preferita è stata in Sicilia — il cibo, il mare, la gente!',tr:'En sevdiğim tatil Sicilya\'daydı — yemek, deniz, insanlar!',prompt:'En iyi tatilini anlat'},
    {id:'sp2',en:'Per le vacanze estive ho intenzione di andare in Sardegna.',tr:'Yaz tatili için Sardunya\'ya gitmeyi düşünüyorum.',prompt:'Yaz planını anlat'},
    {id:'sp3',en:'Il mio volo è in ritardo di tre ore! Che noia!',tr:'Uçuşum üç saat gecikmeli! Ne sıkıcı!',prompt:'Gecikme şikayeti'},
    {id:'sp4',en:'Cosa mi consiglia di visitare a Napoli? È il mio primo viaggio.',tr:'Napoli\'de ne ziyaret etmemi tavsiye edersiniz? İlk seyahatim.',prompt:'Seyahat tavsiyesi iste'},
    {id:'sp5',en:'Viaggio sempre con pochi bagagli, solo uno zaino!',tr:'Her zaman az bagajla seyahat ederim, sadece bir sırt çantasıyla!',prompt:'Seyahat alışkanlığını anlat'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Uçuş Gecikme Sorunu',
      title_en:'Flight Delay Problem',
      lines:[
        {speaker:'A',gender:'f',en:'Scusi, il volo per Roma è ancora in ritardo?',tr:'Affedersiniz, Roma uçuşu hâlâ gecikmeli mi?',bd:[{ro:'è ancora in ritardo?',tr:'hâlâ gecikmeli mi?',role:'question'}]},
        {speaker:'B',gender:'m',en:'Sì, signora. C\'è un problema tecnico. Partiamo con tre ore di ritardo.',tr:'Evet, hanımefendi. Teknik bir sorun var. Üç saat gecikmeli kalkıyoruz.',bd:[{ro:'un problema tecnico',tr:'teknik bir sorun',role:'reason'},{ro:'con tre ore di ritardo',tr:'üç saat gecikmeli',role:'delay'}]},
        {speaker:'A',gender:'f',en:'Tre ore?! Perdo la coincidenza per Catania! Cosa devo fare?',tr:'Üç saat?! Catania bağlantımı kaçırıyorum! Ne yapmalıyım?',bd:[{ro:'Perdo la coincidenza',tr:'bağlantımı kaçırıyorum',role:'problem'},{ro:'Cosa devo fare?',tr:'ne yapmalıyım?',role:'question'}]},
        {speaker:'B',gender:'m',en:'Non si preoccupi. La reimbarchiamo sul prossimo volo disponibile per Catania, senza costi aggiuntivi.',tr:'Endişelenmeyin. Sizi ek ücret olmadan Catania için mevcut bir sonraki uçuşa bindireceğiz.',bd:[{ro:'Non si preoccupi',tr:'endişelenmeyin (kibarca)',role:'reassurance'},{ro:'senza costi aggiuntivi',tr:'ek ücret olmadan',role:'compensation'}]},
        {speaker:'A',gender:'f',en:'E il bagaglio? È già stato imbarcato?',tr:'Ya bagaj? Zaten yüklendi mi?',bd:[{ro:'E il bagaglio?',tr:'ya bagaj?',role:'question'},{ro:'è già stato imbarcato?',tr:'zaten yüklendi mi?',role:'passive'}]},
        {speaker:'B',gender:'m',en:'Sì, provvederemo noi a trasferire il bagaglio sul nuovo volo. Si diriga al gate B12 alle 18.',tr:'Evet, bagajı yeni uçuşa aktarmayı biz hallederiz. Saat 18\'de B12 kapısına gidin.',bd:[{ro:'provvederemo noi',tr:'biz hallederiz',role:'assurance'},{ro:'Si diriga al gate B12',tr:'B12 kapısına gidin (kibarca)',role:'instruction'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'L\'Italia è una delle mete turistiche più visitate al mondo, con oltre sessanta milioni di turisti all\'anno. Le destinazioni più popolari sono Roma, Venezia, Firenze e la Costiera Amalfitana. Il turismo è fondamentale per l\'economia italiana. Tuttavia, in alcune città come Venezia, il sovraffollamento turistico è diventato un problema serio. Venezia ha introdotto misure per limitare i turisti e proteggere la vita dei residenti.',
      tr:'İtalya, yılda altmış milyondan fazla turistiyle dünyanın en çok ziyaret edilen turistik destinasyonlarından biri. En popüler destinasyonlar Roma, Venedik, Floransa ve Amalfi Kıyısı. Turizm İtalya ekonomisi için temel önem taşıyor. Ancak Venedik gibi bazı şehirlerde aşırı turist kalabalığı ciddi bir sorun haline geldi. Venedik turistleri sınırlamak ve sakinlerin yaşamını korumak için tedbirler aldı.',
      questions:[
        {q:'İtalya\'ya yılda kaç turist geliyor?',opts:['30 milyon','60 milyon','100 milyon','10 milyon'],answer:1,tr:'60 milyondan fazla'},
        {q:'Hangi şehir aşırı turist kalabalığı sorunu yaşıyor?',opts:['Roma','Floransa','Venedik','Napoli'],answer:2,tr:'Venedik (Venezia)'},
        {q:'Venedik ne yaptı?',opts:['Turistlere para iadesi yaptı','Tüm turistleri yasakladı','Turist sınırlama tedbirleri aldı','Yeni oteller açtı'],answer:2,tr:'Turist sınırlama tedbirleri aldı'}
      ]
    }
  ],
  tones:[]
};
LESSONS[30] = L30;
