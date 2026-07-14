// ders29.js — Italian Lesson 29: Lavoro e tecnologia (İş ve Teknoloji)
const L29 = {
  words:[
    {id:'w1',en:'il computer / il laptop',ro:'il computer',tr:'bilgisayar / dizüstü bilgisayar',examples:[{it:'Il mio laptop è lento, devo comprarne uno nuovo.',tr:'Dizüstü bilgisayarım yavaş, yeni bir tane almam lazım.',bd:[{ro:'Il mio laptop è lento',tr:'dizüstü bilgisayarım yavaş'},{ro:'devo comprarne uno nuovo',tr:'yeni bir tane almam lazım'}]}]},
    {id:'w2',en:'lo smartphone / il cellulare',ro:'lo smartphone',tr:'akıllı telefon / cep telefonu',examples:[{it:'Non riesco a immaginare la mia vita senza smartphone.',tr:'Akıllı telefon olmadan hayatımı hayal edemiyorum.',bd:[{ro:'Non riesco a immaginare',tr:'hayal edemiyorum'},{ro:'senza smartphone',tr:'akıllı telefon olmadan'}]}]},
    {id:'w3',en:'internet / la connessione',ro:'internet',tr:'internet / bağlantı',examples:[{it:'La connessione internet qui è pessima, non riesco a lavorare.',tr:'Buradaki internet bağlantısı çok kötü, çalışamıyorum.',bd:[{ro:'La connessione internet',tr:'internet bağlantısı'},{ro:'non riesco a lavorare',tr:'çalışamıyorum'}]}]},
    {id:'w4',en:'il software / l\'applicazione',ro:'il software',tr:'yazılım / uygulama',examples:[{it:'Ho scaricato un\'applicazione per imparare l\'italiano.',tr:'İtalyanca öğrenmek için bir uygulama indirdim.',bd:[{ro:'Ho scaricato un\'applicazione',tr:'bir uygulama indirdim'},{ro:'per imparare l\'italiano',tr:'İtalyanca öğrenmek için'}]}]},
    {id:'w5',en:'l\'email / la posta elettronica',ro:'l\'email',tr:'e-posta / elektronik posta',examples:[{it:'Ti mando il documento via email entro questa sera.',tr:'Belgeyi bu akşama kadar e-postayla gönderiyorum.',bd:[{ro:'Ti mando il documento via email',tr:'belgeyi e-postayla gönderiyorum'},{ro:'entro questa sera',tr:'bu akşama kadar'}]}]},
    {id:'w6',en:'il sito web / il sito internet',ro:'il sito web',tr:'web sitesi',examples:[{it:'L\'azienda ha un ottimo sito web con tutte le informazioni.',tr:'Şirketin tüm bilgileri içeren mükemmel bir web sitesi var.',bd:[{ro:'L\'azienda ha un ottimo sito web',tr:'şirketin mükemmel bir web sitesi var'},{ro:'con tutte le informazioni',tr:'tüm bilgileri içeren'}]}]},
    {id:'w7',en:'i social media / i social network',ro:'i social media',tr:'sosyal medya',examples:[{it:'Passo troppo tempo sui social media, devo ridurlo.',tr:'Sosyal medyada çok fazla zaman geçiriyorum, azaltmam lazım.',bd:[{ro:'Passo troppo tempo sui social media',tr:'sosyal medyada çok fazla zaman geçiriyorum'},{ro:'devo ridurlo',tr:'azaltmam lazım'}]}]},
    {id:'w8',en:'la videochiamata / lo smart working',ro:'la videochiamata',tr:'görüntülü arama / uzaktan çalışma',examples:[{it:'Da quando faccio smart working ho meno tempo perso in viaggio.',tr:'Uzaktan çalışmaya başladığımdan beri yolculukta daha az zaman harcıyorum.',bd:[{ro:'faccio smart working',tr:'uzaktan çalışıyorum'},{ro:'meno tempo perso in viaggio',tr:'yolculukta daha az zaman harcıyorum'}]}]},
    {id:'w9',en:'la riunione / il meeting',ro:'la riunione',tr:'toplantı',examples:[{it:'Ho tre riunioni oggi, la giornata sarà lunga.',tr:'Bugün üç toplantım var, gün uzun olacak.',bd:[{ro:'Ho tre riunioni oggi',tr:'bugün üç toplantım var'},{ro:'la giornata sarà lunga',tr:'gün uzun olacak'}]}]},
    {id:'w10',en:'il collega / la collega',ro:'il collega',tr:'meslektaş',examples:[{it:'I miei colleghi sono molto simpatici, mi trovo bene con loro.',tr:'Meslektaşlarım çok sempatik, onlarla iyi geçiniyorum.',bd:[{ro:'i miei colleghi',tr:'meslektaşlarım'},{ro:'mi trovo bene con loro',tr:'onlarla iyi geçiniyorum'}]}]},
    {id:'w11',en:'il capo / il responsabile',ro:'il capo',tr:'patron / müdür / sorumlu',examples:[{it:'Il mio capo è esigente ma giusto, rispetta il lavoro di tutti.',tr:'Patronum talepkâr ama adil, herkesin çalışmasına saygı duyuyor.',bd:[{ro:'Il mio capo è esigente ma giusto',tr:'patronum talepkâr ama adil'},{ro:'rispetta il lavoro di tutti',tr:'herkesin çalışmasına saygı duyuyor'}]}]},
    {id:'w12',en:'il contratto / lo stipendio',ro:'il contratto',tr:'sözleşme / maaş',examples:[{it:'Ho firmato il contratto ieri, inizio il nuovo lavoro lunedì.',tr:'Dün sözleşmeyi imzaladım, pazartesi yeni işe başlıyorum.',bd:[{ro:'Ho firmato il contratto',tr:'sözleşmeyi imzaladım'},{ro:'inizio il nuovo lavoro lunedì',tr:'pazartesi yeni işe başlıyorum'}]}]},
    {id:'w13',en:'il progetto / la scadenza',ro:'il progetto',tr:'proje / son teslim tarihi',examples:[{it:'La scadenza del progetto è venerdì, devo sbrigarmi.',tr:'Projenin son teslim tarihi cuma, acele etmem lazım.',bd:[{ro:'La scadenza del progetto è venerdì',tr:'projenin son teslim tarihi cuma'},{ro:'devo sbrigarmi',tr:'acele etmem lazım'}]}]},
    {id:'w14',en:'fare una domanda di lavoro / candidarsi',ro:'candidarsi',tr:'iş başvurusu yapmak / adaylığını koymak',examples:[{it:'Mi sono candidato per una posizione in una startup tecnologica.',tr:'Bir teknoloji girişiminde bir pozisyon için başvurdum.',bd:[{ro:'Mi sono candidato',tr:'başvurdum'},{ro:'una startup tecnologica',tr:'bir teknoloji girişimi'}]}]},
    {id:'w15',en:'l\'ufficio / lo spazio di lavoro',ro:'l\'ufficio',tr:'ofis / çalışma alanı',examples:[{it:'Il nostro ufficio è in un palazzo moderno vicino alla stazione.',tr:'Ofisimiz istasyonun yakınında modern bir binada.',bd:[{ro:'Il nostro ufficio',tr:'ofisimiz'},{ro:'un palazzo moderno vicino alla stazione',tr:'istasyona yakın modern bir bina'}]}]},
    {id:'w16',en:'la stampante / lo scanner',ro:'la stampante',tr:'yazıcı / tarayıcı',examples:[{it:'La stampante non funziona, devo chiamare il tecnico.',tr:'Yazıcı çalışmıyor, teknisyeni aramam lazım.',bd:[{ro:'La stampante non funziona',tr:'yazıcı çalışmıyor'},{ro:'devo chiamare il tecnico',tr:'teknisyeni aramam lazım'}]}]},
    {id:'w17',en:'la password / il codice',ro:'la password',tr:'şifre / kod',examples:[{it:'Ho dimenticato la password del sistema, devo fare il reset.',tr:'Sistemin şifresini unuttum, sıfırlamam lazım.',bd:[{ro:'Ho dimenticato la password',tr:'şifreyi unuttum'},{ro:'devo fare il reset',tr:'sıfırlamam lazım'}]}]},
    {id:'w18',en:'il backup / il salvataggio',ro:'il backup',tr:'yedek / yedekleme',examples:[{it:'Fai sempre il backup dei tuoi file importanti, non fidarti troppo del computer.',tr:'Önemli dosyalarını her zaman yedekle, bilgisayara fazla güvenme.',bd:[{ro:'Fai sempre il backup',tr:'her zaman yedekle'},{ro:'non fidarti troppo',tr:'fazla güvenme'}]}]},
    {id:'w19',en:'l\'intelligenza artificiale',ro:'l\'IA',tr:'yapay zeka',examples:[{it:'L\'intelligenza artificiale sta cambiando il mondo del lavoro molto rapidamente.',tr:'Yapay zeka iş dünyasını çok hızlı değiştiriyor.',bd:[{ro:'L\'intelligenza artificiale',tr:'yapay zeka'},{ro:'sta cambiando',tr:'değiştiriyor (şu an)'}]}]},
    {id:'w20',en:'la cybersicurezza / i dati',ro:'la cybersicurezza',tr:'siber güvenlik / veriler',examples:[{it:'La protezione dei dati personali è fondamentale nell\'era digitale.',tr:'Kişisel verilerin korunması dijital çağda temel öneme sahip.',bd:[{ro:'La protezione dei dati personali',tr:'kişisel verilerin korunması'},{ro:'fondamentale nell\'era digitale',tr:'dijital çağda temel'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Futuro Semplice: Planları ve Tahminleri İfade Etmek',
      title_en:'Simple Future: Plans and Predictions',
      explanation:'Teknoloji ve iş dünyasında geleceği anlatmak için futuro semplice.',
      table:[
        {pronoun:'-are → -erò/-erai',form:'lavorare: lavorerò/lavorerai/lavorerà',example:'Domani lavorerò da casa.',tr:'Yarın evden çalışacağım.'},
        {pronoun:'-ere → -erò/-erai',form:'vedere: vedrò/vedrai/vedrà',example:'Vedrò il capo domani mattina.',tr:'Yarın sabah patronu göreceğim.'},
        {pronoun:'-ire → -irò/-irai',form:'finire: finirò/finirai/finirà',example:'Finirò il progetto venerdì.',tr:'Projeyi cuma bitireciğim.'},
        {pronoun:'düzensiz',form:'essere→sarò, avere→avrò, fare→farò',example:'Farò una videochiamata alle tre.',tr:'Saat üçte görüntülü arama yapacağım.'}
      ],
      note:'"Stare + gerundio" = şu anda yapmakta olmak: "Sto lavorando" (çalışıyorum). İtalyan iş dünyasında yaygın: "Sto inviando il file" (dosyayı gönderiyorum).'
    },
    {
      id:'g2',
      title:'Condizionale: Rica / Öneri / Kibarlık',
      title_en:'Conditional: Requests / Suggestions / Politeness',
      explanation:'İş ortamında kibarca talepte bulunmak için condizionale presente.',
      table:[
        {pronoun:'Vorrei',form:'istiyorum (kibarca)',example:'Vorrei fissare un appuntamento.',tr:'Bir randevu almak istiyorum.'},
        {pronoun:'Potrebbe',form:'yapabilir misiniz?',example:'Potrebbe inviarmi il documento?',tr:'Belgeyi bana gönderebilir misiniz?'},
        {pronoun:'Sarebbe possibile',form:'mümkün olur muydu?',example:'Sarebbe possibile cambiare la riunione?',tr:'Toplantıyı değiştirmek mümkün olur muydu?'},
        {pronoun:'Mi piacerebbe',form:'hoşuma giderdi',example:'Mi piacerebbe lavorare in questa azienda.',tr:'Bu şirkette çalışmak hoşuma giderdi.'}
      ],
      note:'Condizionale presente: vorrei, faresti, sarebbe, potremmo, lavorereste, andrebbero. İş e-postalarında çok yaygın.'
    },
    {
      id:'g3',
      title:'Verbi Tecnici: Teknoloji Fiilleri',
      title_en:'Technical Verbs: Technology Actions',
      explanation:'Teknoloji ve dijital ortamda kullanılan temel fiiller.',
      table:[
        {pronoun:'scaricare / caricare',form:'indirmek / yüklemek',example:'Ho scaricato l\'app. Ho caricato il file.',tr:'Uygulamayı indirdim. Dosyayı yükledim.'},
        {pronoun:'cliccare / premere',form:'tıklamak / basmak',example:'Clicca su "invia" per mandare l\'email.',tr:'"Gönder"e tıkla e-postayı göndermek için.'},
        {pronoun:'collegarsi / disconnettersi',form:'bağlanmak / bağlantıyı kesmek',example:'Mi sono collegato alla VPN aziendale.',tr:'Şirketin VPN\'ine bağlandım.'},
        {pronoun:'aggiornare / installare',form:'güncellemek / yüklemek',example:'Devi aggiornare il tuo software.',tr:'Yazılımını güncellemelisin.'}
      ],
      note:'"Mandare in crash" = çökmek. "Andare offline" = çevrimdışına düşmek. "Essere in manutenzione" = bakımda olmak (web siteleri için).'
    }
  ],
  speaking:[
    {id:'sp1',en:'Ho una riunione online alle dieci, poi sono libero per il pranzo.',tr:'Saat onda çevrimiçi toplantım var, sonra öğle yemeği için boşum.',prompt:'Günlük programı anlat'},
    {id:'sp2',en:'Potresti inviarmi quel documento per email? Ho bisogno di firmarlo.',tr:'O belgeyi e-postayla bana gönderebilir misiniz? İmzalamam lazım.',prompt:'Kibarca bir şey iste'},
    {id:'sp3',en:'L\'intelligenza artificiale mi spaventa un po\', ma sono anche curioso.',tr:'Yapay zeka beni biraz korkutuyor, ama merak da ediyorum.',prompt:'Teknoloji hakkında fikrin'},
    {id:'sp4',en:'Ho perso tre ore di lavoro perché il computer si è bloccato!',tr:'Bilgisayar donduğu için üç saatlik çalışmamı kaybettim!',prompt:'Teknik sorun anlat'},
    {id:'sp5',en:'La mia azienda ha deciso di passare allo smart working permanente.',tr:'Şirketim kalıcı uzaktan çalışmaya geçmeye karar verdi.',prompt:'Şirket kararı hakkında konuş'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'İş Görüşmesi',
      title_en:'Job Interview',
      lines:[
        {speaker:'B',gender:'f',en:'Buongiorno, si accomodi. Lei è il dottor Ferretti?',tr:'Günaydın, buyurun oturun. Siz Bay Ferretti misiniz?',bd:[{ro:'si accomodi',tr:'buyurun oturun (kibarca)',role:'greeting'},{ro:'il dottor Ferretti',tr:'Bay Ferretti (unvan ile)',role:'title'}]},
        {speaker:'A',gender:'m',en:'Sì, sono io. Piacere di conoscerla.',tr:'Evet, benim. Tanıştığıma memnun oldum.',bd:[{ro:'Piacere di conoscerla',tr:'tanıştığıma memnun oldum (kibarca)',role:'greeting'}]},
        {speaker:'B',gender:'f',en:'Può raccontarmi brevemente la sua esperienza professionale?',tr:'Bize kısaca profesyonel deneyiminizden bahseder misiniz?',bd:[{ro:'può raccontarmi brevemente',tr:'kısaca anlatabilir misiniz?',role:'question'},{ro:'esperienza professionale',tr:'profesyonel deneyim',role:'topic'}]},
        {speaker:'A',gender:'m',en:'Certo. Ho lavorato cinque anni come sviluppatore software in una società informatica. Ho competenze in Python e cloud computing.',tr:'Tabii. Bir bilişim şirketinde beş yıl yazılım geliştirici olarak çalıştım. Python ve bulut bilişim konusunda yetkinliğim var.',bd:[{ro:'sviluppatore software',tr:'yazılım geliştirici',role:'profession'},{ro:'competenze in Python e cloud computing',tr:'Python ve bulut bilişim yetkinliği',role:'skills'}]},
        {speaker:'B',gender:'f',en:'Ottimo. E perché vuole lavorare nella nostra azienda?',tr:'Harika. Peki neden şirketimizde çalışmak istiyorsunuz?',bd:[{ro:'Ottimo',tr:'harika',role:'positive'},{ro:'perché vuole lavorare?',tr:'neden çalışmak istiyorsunuz?',role:'question'}]},
        {speaker:'A',gender:'m',en:'La vostra azienda ha una reputazione eccellente nell\'innovazione tecnologica. Vorrei contribuire con le mie competenze.',tr:'Şirketiniz teknolojik inovasyon konusunda mükemmel bir üne sahip. Yetkinliklerimle katkıda bulunmak isterim.',bd:[{ro:'reputazione eccellente nell\'innovazione',tr:'inovasyon konusunda mükemmel üne sahip',role:'praise'},{ro:'Vorrei contribuire',tr:'katkıda bulunmak isterim',role:'desire'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Il lavoro in Italia sta cambiando rapidamente. Sempre più aziende adottano lo smart working, soprattutto dopo la pandemia. Il settore tecnologico è in forte crescita: Milano è diventata un hub per le startup e le aziende tech. Le competenze digitali sono ormai fondamentali: saper usare i software di gestione, comunicare via video, gestire i dati. Allo stesso tempo, le soft skills come la capacità di comunicare e lavorare in team rimangono importantissime.',
      tr:'İtalya\'da çalışma ortamı hızla değişiyor. Özellikle pandemi sonrasında giderek daha fazla şirket uzaktan çalışmayı benimsedi. Teknoloji sektörü güçlü büyüme gösteriyor: Milano girişimler ve teknoloji şirketleri için bir merkez haline geldi. Dijital yetkinlikler artık temel: yönetim yazılımlarını kullanabilmek, video aracılığıyla iletişim kurmak, verileri yönetmek. Aynı zamanda iletişim kurabilmek ve takım halinde çalışmak gibi yumuşak beceriler de son derece önemli kalmaya devam ediyor.',
      questions:[
        {q:'Pandemi sonrası ne yaygınlaştı?',opts:['Uzaktan çalışma','Daha uzun çalışma saatleri','Sadece ofis çalışması','Part-time çalışma'],answer:0,tr:'Uzaktan çalışma (smart working)'},
        {q:'Milano hangi alanda merkez oldu?',opts:['Turizm','Tarım','Teknoloji şirketleri ve girişimler','Geleneksel sanayi'],answer:2,tr:'Teknoloji şirketleri ve girişimler'},
        {q:'Yumuşak beceriler (soft skills) neden önemli?',opts:['Artık gerekli değil','İletişim ve takım çalışması için','Sadece yöneticiler için','Teknik becerilerden daha az önemli'],answer:1,tr:'İletişim ve takım halinde çalışabilmek için'}
      ]
    }
  ],
  tones:[]
};
LESSONS[29] = L29;
