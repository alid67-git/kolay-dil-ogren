// ders35.js — Italian Lesson 35: Scienza e ricerca (Bilim ve Araştırma)
const L35 = {
  words:[
    {id:'w1',en:'la scienza / lo scienziato',ro:'la scienza',tr:'bilim / bilim insanı',examples:[{it:'La scienza ha trasformato la vita umana negli ultimi duecento anni.',tr:'Bilim son iki yüz yılda insan hayatını dönüştürdü.',bd:[{ro:'La scienza ha trasformato',tr:'bilim dönüştürdü'},{ro:'negli ultimi duecento anni',tr:'son iki yüz yılda'}]}]},
    {id:'w2',en:'la ricerca / il ricercatore',ro:'la ricerca',tr:'araştırma / araştırmacı',examples:[{it:'La ricerca scientifica italiana è rinomata in tutto il mondo.',tr:'İtalyan bilimsel araştırması tüm dünyada tanınmıştır.',bd:[{ro:'La ricerca scientifica italiana',tr:'İtalyan bilimsel araştırması'},{ro:'rinomata in tutto il mondo',tr:'tüm dünyada tanınmış'}]}]},
    {id:'w3',en:'il laboratorio / l\'esperimento',ro:'il laboratorio',tr:'laboratuvar / deney',examples:[{it:'Ho passato tre anni in laboratorio a fare esperimenti sui batteri.',tr:'Laboratuvarda bakteriler üzerinde deney yaparak üç yıl geçirdim.',bd:[{ro:'in laboratorio',tr:'laboratuvarda'},{ro:'a fare esperimenti sui batteri',tr:'bakteriler üzerinde deney yaparak'}]}]},
    {id:'w4',en:'la fisica / la chimica',ro:'la fisica',tr:'fizik / kimya',examples:[{it:'Enrico Fermi, fisico italiano, ha contribuito allo sviluppo della fisica nucleare.',tr:'İtalyan fizikçi Enrico Fermi, nükleer fiziğin gelişimine katkıda bulundu.',bd:[{ro:'Enrico Fermi, fisico italiano',tr:'İtalyan fizikçi Enrico Fermi'},{ro:'fisica nucleare',tr:'nükleer fizik'}]}]},
    {id:'w5',en:'la biologia / la medicina',ro:'la biologia',tr:'biyoloji / tıp',examples:[{it:'La biologia molecolare ha rivoluzionato la medicina moderna.',tr:'Moleküler biyoloji modern tıbbı devrimleştirdi.',bd:[{ro:'La biologia molecolare',tr:'moleküler biyoloji'},{ro:'ha rivoluzionato la medicina moderna',tr:'modern tıbbı devrimleştirdi'}]}]},
    {id:'w6',en:'la matematica / la statistica',ro:'la matematica',tr:'matematik / istatistik',examples:[{it:'La matematica è il linguaggio con cui Dio ha scritto l\'universo — Galileo.',tr:'"Matematik Tanrı\'nın evreni yazdığı dil." — Galileo.',bd:[{ro:'La matematica è il linguaggio',tr:'matematik dildir'},{ro:'con cui Dio ha scritto l\'universo',tr:'Tanrı\'nın evreni yazdığı'}]}]},
    {id:'w7',en:'la scoperta / l\'invenzione',ro:'la scoperta',tr:'keşif / icat',examples:[{it:'La scoperta della penicillina ha salvato milioni di vite.',tr:'Penisilin keşfi milyonlarca can kurtardı.',bd:[{ro:'La scoperta della penicillina',tr:'penisilin keşfi'},{ro:'ha salvato milioni di vite',tr:'milyonlarca can kurtardı'}]}]},
    {id:'w8',en:'la teoria / l\'ipotesi',ro:'la teoria',tr:'teori / hipotez',examples:[{it:'La teoria della relatività di Einstein ha cambiato la fisica classica.',tr:'Einstein\'ın izafiyet teorisi klasik fiziği değiştirdi.',bd:[{ro:'La teoria della relatività di Einstein',tr:'Einstein\'ın izafiyet teorisi'},{ro:'ha cambiato la fisica classica',tr:'klasik fiziği değiştirdi'}]}]},
    {id:'w9',en:'l\'astronome / l\'astronomia',ro:'l\'astronomia',tr:'astronomi / astronom',examples:[{it:'Galileo Galilei fu un grande astronomo italiano del Seicento.',tr:'Galileo Galilei 17. yüzyılın büyük bir İtalyan astronomuydu.',bd:[{ro:'Galileo Galilei fu un grande astronomo',tr:'Galileo Galilei büyük bir astronomdu'},{ro:'del Seicento',tr:'17. yüzyılın'}]}]},
    {id:'w10',en:'l\'ingegneria / il progetto',ro:'l\'ingegneria',tr:'mühendislik / proje',examples:[{it:'Il progetto del Ponte Morandi a Genova era un capolavoro di ingegneria.',tr:'Cenova\'daki Morandi Köprüsü projesi bir mühendislik başeseriydi.',bd:[{ro:'Il progetto del Ponte Morandi',tr:'Morandi Köprüsü projesi'},{ro:'un capolavoro di ingegneria',tr:'bir mühendislik başeseri'}]}]},
    {id:'w11',en:'l\'ambiente / l\'ecologia',ro:'l\'ambiente',tr:'çevre / ekoloji',examples:[{it:'Gli scienziati ambientali studiano l\'impatto delle attività umane sul pianeta.',tr:'Çevre bilimciler insan faaliyetlerinin gezegen üzerindeki etkisini inceliyor.',bd:[{ro:'Gli scienziati ambientali',tr:'çevre bilimciler'},{ro:'l\'impatto delle attività umane',tr:'insan faaliyetlerinin etkisi'}]}]},
    {id:'w12',en:'il DNA / la genetica',ro:'il DNA',tr:'DNA / genetik',examples:[{it:'La mappatura del genoma umano è stata una delle scoperte più importanti del XX secolo.',tr:'İnsan genomu haritalaması 20. yüzyılın en önemli keşiflerinden biriydi.',bd:[{ro:'La mappatura del genoma umano',tr:'insan genomu haritalaması'},{ro:'del XX secolo',tr:'20. yüzyılın'}]}]},
    {id:'w13',en:'il vaccino / la cura',ro:'il vaccino',tr:'aşı / tedavi',examples:[{it:'I vaccini hanno eliminato malattie come il vaiolo e ridotto altre.',tr:'Aşılar çiçek hastalığı gibi hastalıkları ortadan kaldırdı ve diğerlerini azalttı.',bd:[{ro:'I vaccini hanno eliminato malattie',tr:'aşılar hastalıkları ortadan kaldırdı'},{ro:'come il vaiolo',tr:'çiçek hastalığı gibi'}]}]},
    {id:'w14',en:'la tecnologia / l\'innovazione',ro:'la tecnologia',tr:'teknoloji / inovasyon',examples:[{it:'L\'innovazione tecnologica avanza così velocemente che è difficile stare al passo.',tr:'Teknolojik inovasyon o kadar hızlı ilerliyor ki ayak uydurmak zor.',bd:[{ro:'L\'innovazione tecnologica avanza velocemente',tr:'teknolojik inovasyon hızla ilerliyor'},{ro:'difficile stare al passo',tr:'ayak uydurmak zor'}]}]},
    {id:'w15',en:'il microscopio / il telescopio',ro:'il microscopio',tr:'mikroskop / teleskop',examples:[{it:'Galileo ha migliorato il telescopio e lo ha usato per osservare le stelle.',tr:'Galileo teleskopu geliştirdi ve yıldızları gözlemlemek için kullandı.',bd:[{ro:'ha migliorato il telescopio',tr:'teleskopu geliştirdi'},{ro:'per osservare le stelle',tr:'yıldızları gözlemlemek için'}]}]},
    {id:'w16',en:'l\'università / il dottorato',ro:'l\'università',tr:'üniversite / doktora',examples:[{it:'Ho fatto il dottorato in biologia all\'Università di Bologna per tre anni.',tr:'Bologna Üniversitesi\'nde üç yıl biyoloji doktorası yaptım.',bd:[{ro:'Ho fatto il dottorato in biologia',tr:'biyoloji doktorası yaptım'},{ro:'all\'Università di Bologna',tr:'Bologna Üniversitesi\'nde'}]}]},
    {id:'w17',en:'il premio / il riconoscimento',ro:'il premio',tr:'ödül / tanınma',examples:[{it:'L\'Italia ha prodotto molti vincitori del Premio Nobel in fisica e letteratura.',tr:'İtalya fizik ve edebiyatta pek çok Nobel ödüllü yetiştirdi.',bd:[{ro:'vincitori del Premio Nobel',tr:'Nobel ödüllüleri'},{ro:'in fisica e letteratura',tr:'fizik ve edebiyatta'}]}]},
    {id:'w18',en:'dimostrare / provare',ro:'dimostrare',tr:'kanıtlamak / ispatlamak',examples:[{it:'Gli scienziati devono dimostrare le loro teorie con esperimenti ripetibili.',tr:'Bilim insanları teorilerini tekrarlanabilir deneylerle kanıtlamalıdır.',bd:[{ro:'dimostrare le loro teorie',tr:'teorilerini kanıtlamak'},{ro:'esperimenti ripetibili',tr:'tekrarlanabilir deneyler'}]}]},
    {id:'w19',en:'analizzare / osservare',ro:'analizzare',tr:'analiz etmek / gözlemlemek',examples:[{it:'Analizziamo i dati per capire i fenomeni climatici.',tr:'İklim fenomenlerini anlamak için verileri analiz ediyoruz.',bd:[{ro:'Analizziamo i dati',tr:'verileri analiz ediyoruz'},{ro:'per capire i fenomeni climatici',tr:'iklim fenomenlerini anlamak için'}]}]},
    {id:'w20',en:'pubblicare / la rivista scientifica',ro:'pubblicare',tr:'yayınlamak / bilimsel dergi',examples:[{it:'Ho pubblicato il mio primo articolo su una rivista scientifica internazionale.',tr:'Uluslararası bir bilimsel dergide ilk makalemi yayınladım.',bd:[{ro:'il mio primo articolo',tr:'ilk makalem'},{ro:'su una rivista scientifica internazionale',tr:'uluslararası bilimsel dergide'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Passivo con "Venire" e "Essere": Bilimsel Dil',
      title_en:'Passive with "Venire" and "Essere": Scientific Language',
      explanation:'Bilimsel yazıda ve raporlarda sık kullanılan edilgen çatı yapıları.',
      table:[
        {pronoun:'viene + participio',form:'süregelen eylem',example:'Il campione viene analizzato in laboratorio.',tr:'Örnek laboratuvarda analiz ediliyor.'},
        {pronoun:'è stato + participio',form:'geçmiş edilgen',example:'La teoria è stata dimostrata nel 1905.',tr:'Teori 1905\'te kanıtlandı.'},
        {pronoun:'si + verbo',form:'impersonale',example:'Si osserva un aumento della temperatura.',tr:'Sıcaklıkta bir artış gözlemleniyor.'},
        {pronoun:'è possibile che',form:'+ congiuntivo',example:'È possibile che i risultati cambino.',tr:'Sonuçların değişmesi mümkün.'}
      ],
      note:'Bilimsel yazıda birinci şahıs az kullanılır: "Noi abbiamo scoperto" → "È stato scoperto" daha yaygın.'
    },
    {
      id:'g2',
      title:'Discorso Indiretto: Dolaylı Anlatı',
      title_en:'Indirect Speech: Reporting What Was Said',
      explanation:'Başka birinin söylediğini aktarmak için discorso indiretto.',
      table:[
        {pronoun:'dice che',form:'diyor ki (presente)',example:'Lo scienziato dice che i dati sono chiari.',tr:'Bilim insanı verilerin açık olduğunu söylüyor.'},
        {pronoun:'ha detto che',form:'dedi ki (geçmiş)',example:'Ha detto che l\'esperimento era riuscito.',tr:'Deneyin başarılı olduğunu söyledi.'},
        {pronoun:'spiega che',form:'açıklıyor ki',example:'Spiega che il fenomeno è complesso.',tr:'Fenomenin karmaşık olduğunu açıklıyor.'},
        {pronoun:'secondo + persona',form:'göre',example:'Secondo gli esperti, il rischio è basso.',tr:'Uzmanlara göre risk düşük.'}
      ],
      note:'"Secondo" = göre (kaynak belirtmek için). "D\'accordo con" = ile uyumlu. Bilimsel tartışmalarda sık kullanılır.'
    },
    {
      id:'g3',
      title:'Nomi Composti: Bilim Bileşik İsimleri',
      title_en:'Compound Nouns in Science',
      explanation:'Bilimsel terminolojide sık kullanılan Latince ve Yunanca kökenli kelime yapıları.',
      table:[
        {pronoun:'bio-',form:'yaşam',example:'biologia, biotecnologia, biochimico',tr:'biyoloji, biyoteknoloji, biokimyacı'},
        {pronoun:'geo-',form:'dünya/toprak',example:'geologia, geofisica, geografo',tr:'jeoloji, jeofizik, coğrafyacı'},
        {pronoun:'-logia / -nomia',form:'bilim dalı',example:'ecologia, astronomia, gastronomioa',tr:'ekoloji, astronomi, gastronomi'},
        {pronoun:'micro- / macro-',form:'küçük / büyük',example:'microscopio, macroeconomia',tr:'mikroskop, makroekonomi'}
      ],
      note:'İtalyanca bilim terimleri çoğu zaman Latince kökenlidir — Türkçe ve İngilizce ile benzerlikler vardır: "biologia" = biyoloji, "chimica" = kimya.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Galileo Galilei è stato uno dei più grandi scienziati della storia.',tr:'Galileo Galilei tarihin en büyük bilim insanlarından biri.',prompt:'İtalyan bilim insanı'},
    {id:'sp2',en:'Penso che la ricerca scientifica sia fondamentale per il progresso dell\'umanità.',tr:'Bilimsel araştırmanın insanlığın ilerlemesi için temel olduğunu düşünüyorum.',prompt:'Bilimin önemi'},
    {id:'sp3',en:'I vaccini hanno salvato milioni di vite — la scienza funziona!',tr:'Aşılar milyonlarca can kurtardı — bilim işe yarıyor!',prompt:'Bilimsel başarı'},
    {id:'sp4',en:'L\'intelligenza artificiale sta rivoluzionando anche la ricerca scientifica.',tr:'Yapay zeka bilimsel araştırmayı da devrimleştiriyor.',prompt:'AI ve bilim'},
    {id:'sp5',en:'Da piccolo volevo fare l\'astronauta. Ancora un sogno!',tr:'Küçükken astronot olmak istiyordum. Hâlâ bir rüya!',prompt:'Çocukluk hayali'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Bilim Hakkında Tartışma',
      title_en:'Discussing Science',
      lines:[
        {speaker:'A',gender:'f',en:'Hai sentito? Hanno scoperto un nuovo pianeta simile alla Terra!',tr:'Duydun mu? Dünya\'ya benzer yeni bir gezegen keşfettiler!',bd:[{ro:'Hanno scoperto un nuovo pianeta',tr:'yeni bir gezegen keşfettiler',role:'news'},{ro:'simile alla Terra',tr:'Dünya\'ya benzer',role:'description'}]},
        {speaker:'B',gender:'m',en:'Sì, l\'ho letto! Si chiama Kepler-452b. È a 1400 anni luce da noi però.',tr:'Evet, okudum! Kepler-452b adında. Ama bizden 1400 ışık yılı uzakta.',bd:[{ro:'Si chiama Kepler-452b',tr:'Kepler-452b adında',role:'name'},{ro:'a 1400 anni luce da noi',tr:'bizden 1400 ışık yılı',role:'distance'}]},
        {speaker:'A',gender:'f',en:'Penso che potrebbe esserci vita lì. Non ti sembra possibile?',tr:'Orada yaşam olabileceğini düşünüyorum. Sence mümkün değil mi?',bd:[{ro:'Penso che potrebbe esserci vita',tr:'orada yaşam olabileceğini düşünüyorum',role:'opinion'},{ro:'Non ti sembra possibile?',tr:'sence mümkün değil mi?',role:'question'}]},
        {speaker:'B',gender:'m',en:'È possibile, ma per arrivarci ci vorrebbero migliaia di anni. La tecnologia attuale non basta.',tr:'Mümkün ama oraya ulaşmak binlerce yıl sürer. Mevcut teknoloji yeterli değil.',bd:[{ro:'ci vorrebbero migliaia di anni',tr:'binlerce yıl sürer',role:'time'},{ro:'La tecnologia attuale non basta',tr:'mevcut teknoloji yeterli değil',role:'limitation'}]},
        {speaker:'A',gender:'f',en:'Chissà cosa scopriranno nei prossimi cento anni! La scienza mi affascina.',tr:'Kim bilir önümüzdeki yüz yılda ne keşfedecekler! Bilim beni büyülüyor.',bd:[{ro:'Chissà cosa scopriranno',tr:'kim bilir ne keşfedecekler',role:'wonder'},{ro:'La scienza mi affascina',tr:'bilim beni büyülüyor',role:'feeling'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'L\'Italia ha una lunga tradizione scientifica. Galileo Galilei, padre della scienza moderna, è italiano. Alessandro Volta ha inventato la pila elettrica. Enrico Fermi ha contribuito alla fisica nucleare. Più recentemente, l\'Italia ha prodotto importanti ricercatori in medicina, fisica e ingegneria. Tuttavia, molti giovani ricercatori italiani emigrano all\'estero perché in Italia i fondi per la ricerca sono insufficienti.',
      tr:'İtalya\'nın uzun bir bilimsel geleneği var. Modern bilimin babası Galileo Galilei İtalyandır. Alessandro Volta elektrik pilini icat etti. Enrico Fermi nükleer fiziğe katkıda bulundu. Daha yakın zamanlarda İtalya tıp, fizik ve mühendislikte önemli araştırmacılar yetiştirdi. Ancak İtalya\'da araştırma fonları yetersiz olduğundan pek çok genç İtalyan araştırmacı yurtdışına gidiyor.',
      questions:[
        {q:'Galileo Galilei olarak tanınan ne?',opts:['Ressam','Modern bilimin babası','Müzisyen','Şair'],answer:1,tr:'Modern bilimin babası'},
        {q:'Alessandro Volta ne icat etti?',opts:['Telefon','Radyo','Elektrik pili','Buharlı motor'],answer:2,tr:'Elektrik pili (la pila elettrica)'},
        {q:'Genç İtalyan araştırmacılar neden yurtdışına gidiyor?',opts:['Dil öğrenmek için','Araştırma fonları yetersiz olduğu için','Hava nedeniyle','Üniversiteler kapalı olduğu için'],answer:1,tr:'Araştırma fonları yetersiz olduğu için (fondi insufficienti)'}
      ]
    }
  ],
  tones:[]
};
LESSONS[35] = L35;
