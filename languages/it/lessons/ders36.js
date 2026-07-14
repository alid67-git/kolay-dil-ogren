// ders36.js — Italian Lesson 36: Arte e cultura (Sanat ve Kültür)
const L36 = {
  words:[
    {id:'w1',en:'il dipinto / la pittura',ro:'il dipinto',tr:'tablo / resim sanatı',examples:[{it:'I dipinti di Caravaggio si riconoscono per il forte contrasto tra luce e ombra.',tr:'Caravaggio\'nun tabloları güçlü ışık-gölge karşıtlığıyla tanınır.',bd:[{ro:'I dipinti di Caravaggio',tr:'Caravaggio\'nun tabloları'},{ro:'contrasto tra luce e ombra',tr:'ışık-gölge karşıtlığı'}]}]},
    {id:'w2',en:'la scultura / lo scultore',ro:'la scultura',tr:'heykel / heykeltıraş',examples:[{it:'Il David di Michelangelo è la scultura più famosa del Rinascimento.',tr:'Michelangelo\'nun Davut\'u Rönesans\'ın en ünlü heykeli.',bd:[{ro:'Il David di Michelangelo',tr:'Michelangelo\'nun Davut\'u'},{ro:'la scultura più famosa del Rinascimento',tr:'Rönesans\'ın en ünlü heykeli'}]}]},
    {id:'w3',en:'l\'architettura / il palazzo',ro:'l\'architettura',tr:'mimarlık / saray',examples:[{it:'L\'architettura italiana ha influenzato il mondo intero per secoli.',tr:'İtalyan mimarisi yüzyıllarca tüm dünyayı etkiledi.',bd:[{ro:'L\'architettura italiana ha influenzato',tr:'İtalyan mimarisi etkiledi'},{ro:'per secoli',tr:'yüzyıllarca'}]}]},
    {id:'w4',en:'la musica / il compositore',ro:'la musica',tr:'müzik / besteci',examples:[{it:'Verdi, Puccini e Rossini sono i compositori d\'opera italiani più famosi.',tr:'Verdi, Puccini ve Rossini en ünlü İtalyan opera bestecileri.',bd:[{ro:'i compositori d\'opera italiani più famosi',tr:'en ünlü İtalyan opera bestecileri'},{ro:'Verdi, Puccini e Rossini',tr:'Verdi, Puccini ve Rossini'}]}]},
    {id:'w5',en:'il teatro / l\'opera',ro:'il teatro',tr:'tiyatro / opera',examples:[{it:'La Scala di Milano è uno dei teatri d\'opera più prestigiosi al mondo.',tr:'Milano\'nun La Scala\'sı dünyanın en prestijli opera binalarından biri.',bd:[{ro:'La Scala di Milano',tr:'Milano La Scala\'sı'},{ro:'uno dei teatri d\'opera più prestigiosi',tr:'en prestijli opera binalarından biri'}]}]},
    {id:'w6',en:'il cinema / il regista',ro:'il cinema',tr:'sinema / yönetmen',examples:[{it:'Federico Fellini è il regista italiano più conosciuto nel mondo.',tr:'Federico Fellini dünyada en çok tanınan İtalyan yönetmeni.',bd:[{ro:'Federico Fellini è il regista italiano più conosciuto',tr:'Federico Fellini en çok tanınan İtalyan yönetmeni'},{ro:'nel mondo',tr:'dünyada'}]}]},
    {id:'w7',en:'la letteratura / lo scrittore',ro:'la letteratura',tr:'edebiyat / yazar',examples:[{it:'Dante Alighieri ha scritto la Divina Commedia, pilastro della letteratura italiana.',tr:'Dante Alighieri, İtalyan edebiyatının direği olan İlahi Komedya\'yı yazdı.',bd:[{ro:'ha scritto la Divina Commedia',tr:'İlahi Komedya\'yı yazdı'},{ro:'pilastro della letteratura italiana',tr:'İtalyan edebiyatının direği'}]}]},
    {id:'w8',en:'il Rinascimento',ro:'il Rinascimento',tr:'Rönesans',examples:[{it:'Il Rinascimento è nato in Italia nel Quattrocento e ha diffuso idee nuove in tutta Europa.',tr:'Rönesans İtalya\'da 15. yüzyılda doğdu ve Avrupa\'ya yeni fikirler yaydı.',bd:[{ro:'Il Rinascimento è nato in Italia',tr:'Rönesans İtalya\'da doğdu'},{ro:'nel Quattrocento',tr:'15. yüzyılda'}]}]},
    {id:'w9',en:'il patrimonio / l\'UNESCO',ro:'il patrimonio',tr:'miras / UNESCO',examples:[{it:'L\'Italia ha il maggior numero di siti UNESCO al mondo.',tr:'İtalya dünyada en fazla UNESCO alanına sahip ülke.',bd:[{ro:'il maggior numero di siti UNESCO',tr:'en fazla UNESCO alanı'},{ro:'al mondo',tr:'dünyada'}]}]},
    {id:'w10',en:'la galleria / il museo d\'arte',ro:'la galleria',tr:'galeri / sanat müzesi',examples:[{it:'La Galleria degli Uffizi contiene le opere più importanti del Rinascimento.',tr:'Uffizi Galerisi Rönesans\'ın en önemli eserlerini barındırıyor.',bd:[{ro:'La Galleria degli Uffizi',tr:'Uffizi Galerisi'},{ro:'le opere più importanti del Rinascimento',tr:'Rönesans\'ın en önemli eserleri'}]}]},
    {id:'w11',en:'il capolavoro / l\'opera d\'arte',ro:'il capolavoro',tr:'başyapıt / sanat eseri',examples:[{it:'La Gioconda di Leonardo è forse il capolavoro più famoso della storia.',tr:'Leonardo\'nun Mona Lisa\'sı belki tarihin en ünlü başyapıtı.',bd:[{ro:'La Gioconda di Leonardo',tr:'Leonardo\'nun Mona Lisa\'sı'},{ro:'il capolavoro più famoso della storia',tr:'tarihin en ünlü başyapıtı'}]}]},
    {id:'w12',en:'l\'affresco / il mosaico',ro:'l\'affresco',tr:'fresk / mozaik',examples:[{it:'Gli affreschi della Cappella Sistina di Michelangelo sono straordinari.',tr:'Michelangelo\'nun Sistina Şapeli freskleri olağanüstü.',bd:[{ro:'Gli affreschi della Cappella Sistina',tr:'Sistina Şapeli freskleri'},{ro:'di Michelangelo',tr:'Michelangelo\'nun'}]}]},
    {id:'w13',en:'la tradizione / il folklore',ro:'la tradizione',tr:'gelenek / folklor',examples:[{it:'Il Carnevale di Venezia è una tradizione secolare piena di colori e maschere.',tr:'Venedik Karnavalı renk ve maskelerle dolu yüzyıllık bir gelenek.',bd:[{ro:'Il Carnevale di Venezia',tr:'Venedik Karnavalı'},{ro:'tradizione secolare',tr:'yüzyıllık gelenek'}]}]},
    {id:'w14',en:'il festival / la manifestazione',ro:'il festival',tr:'festival / etkinlik',examples:[{it:'Il Festival del Cinema di Venezia è uno dei più antichi e prestigiosi al mondo.',tr:'Venedik Film Festivali dünyanın en eski ve prestijlilerinden biri.',bd:[{ro:'Il Festival del Cinema di Venezia',tr:'Venedik Film Festivali'},{ro:'uno dei più antichi e prestigiosi',tr:'en eski ve prestijlilerinden biri'}]}]},
    {id:'w15',en:'la fotografia / il fotografo',ro:'la fotografia',tr:'fotoğrafçılık / fotoğrafçı',examples:[{it:'La fotografia italiana del Novecento ha documentato importanti momenti storici.',tr:'20. yüzyıl İtalyan fotoğrafçılığı önemli tarihsel anları belgeledi.',bd:[{ro:'La fotografia italiana del Novecento',tr:'20. yüzyıl İtalyan fotoğrafçılığı'},{ro:'ha documentato importanti momenti storici',tr:'önemli tarihsel anları belgeledi'}]}]},
    {id:'w16',en:'la danza / il balletto',ro:'la danza',tr:'dans / bale',examples:[{it:'Il balletto classico italiano ha una tradizione lunga e influente.',tr:'İtalyan klasik balesi uzun ve etkili bir geleneğe sahip.',bd:[{ro:'Il balletto classico italiano',tr:'İtalyan klasik balesi'},{ro:'una tradizione lunga e influente',tr:'uzun ve etkili bir gelenek'}]}]},
    {id:'w17',en:'il restauro / conservare',ro:'il restauro',tr:'restorasyon / korumak',examples:[{it:'Il restauro degli affreschi è un lavoro molto delicato che richiede anni.',tr:'Freskların restorasyonu yıllar gerektiren çok hassas bir iş.',bd:[{ro:'Il restauro degli affreschi',tr:'freskların restorasyonu'},{ro:'molto delicato che richiede anni',tr:'yıllar gerektiren çok hassas'}]}]},
    {id:'w18',en:'l\'artista / l\'artigiano',ro:'l\'artista',tr:'sanatçı / el sanatçısı',examples:[{it:'In Italia la distinzione tra artista e artigiano non è sempre netta.',tr:'İtalya\'da sanatçı ve zanaatkâr arasındaki ayrım her zaman belirgin değil.',bd:[{ro:'la distinzione tra artista e artigiano',tr:'sanatçı ve zanaatkâr arasındaki ayrım'},{ro:'non è sempre netta',tr:'her zaman belirgin değil'}]}]},
    {id:'w19',en:'ispirarsi a / influenzare',ro:'ispirarsi',tr:'esinlenmek / etkilemek',examples:[{it:'Molti artisti moderni si ispirano all\'arte italiana del Rinascimento.',tr:'Pek çok modern sanatçı İtalyan Rönesans sanatından esinleniyor.',bd:[{ro:'si ispirano all\'arte italiana del Rinascimento',tr:'İtalyan Rönesans sanatından esinleniyor'},{ro:'Molti artisti moderni',tr:'pek çok modern sanatçı'}]}]},
    {id:'w20',en:'il colore / la tecnica',ro:'il colore',tr:'renk / teknik (sanat)',examples:[{it:'Leonardo da Vinci ha usato la tecnica dello sfumato per dare profondità ai suoi dipinti.',tr:'Leonardo da Vinci tablolarına derinlik vermek için sfumato tekniğini kullandı.',bd:[{ro:'la tecnica dello sfumato',tr:'sfumato tekniği'},{ro:'per dare profondità',tr:'derinlik vermek için'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Passato Remoto: Tarihsel Anlatı',
      title_en:'Remote Past: Historical Narration',
      explanation:'Tarihsel olayları anlatmak için passato remoto (uzak geçmiş zaman).',
      table:[
        {pronoun:'parlare → parlai',form:'parlai/parlasti/parlò/parlammo/parlaste/parlarono',example:'Dante scrisse la Divina Commedia tra il 1308 e il 1320.',tr:'Dante İlahi Komedya\'yı 1308-1320 arasında yazdı.'},
        {pronoun:'avere → ebbi',form:'ebbi/avesti/ebbe/avemmo/aveste/ebbero',example:'Leonardo ebbe molti talenti: pittore, scienziato, inventore.',tr:'Leonardo\'nun pek çok yeteneği vardı: ressam, bilim insanı, mucit.'},
        {pronoun:'essere → fui',form:'fui/fosti/fu/fummo/foste/furono',example:'Michelangelo fu uno dei più grandi artisti di tutti i tempi.',tr:'Michelangelo tüm zamanların en büyük sanatçılarından biriydi.'},
        {pronoun:'uso',form:'tarihsel metin / biyografi',example:'Raffaello nacque a Urbino nel 1483.',tr:'Raffaello 1483\'te Urbino\'da doğdu.'}
      ],
      note:'Passato remoto = tarihsel, edebi dil için. Kuzey İtalya\'da günlük kullanımda da yaygın. Güney İtalya\'da passato remoto günlük kullanımda da tercih edilir.'
    },
    {
      id:'g2',
      title:'Superlativo Assoluto: Sanat Tanımlamaları',
      title_en:'Absolute Superlative in Art Descriptions',
      explanation:'Sanat eserlerini ve sanatçıları tanımlarken sıklıkla kullanılan en üstün ifadeler.',
      table:[
        {pronoun:'-issimo',form:'en üstünlük eki',example:'La Gioconda è bellissima e misteriosa.',tr:'Mona Lisa çok güzel ve gizemli.'},
        {pronoun:'il più ... di',form:'en üstünlük (karşılaştırmalı)',example:'È il più grande scultore del Rinascimento.',tr:'Rönesans\'ın en büyük heykeltraşı.'},
        {pronoun:'straordinario / eccezionale',form:'olağanüstü',example:'Un\'opera straordinaria della pittura italiana.',tr:'İtalyan resminin olağanüstü bir eseri.'},
        {pronoun:'senza paragoni',form:'eşsiz',example:'Un capolavoro senza paragoni nella storia.',tr:'Tarihte eşsiz bir başyapıt.'}
      ],
      note:'"Inestimabile" = paha biçilemez. "Iconico" = ikonik. "Rivoluzionario" = devrimsel. Sanat eleştirilerinde sık kullanılan kelimeler.'
    },
    {
      id:'g3',
      title:'Espressioni per l\'Arte: Sanat İfadeleri',
      title_en:'Expressions for Talking About Art',
      explanation:'Sanat eseri hakkında fikir belirtmek ve tartışmak için yapılar.',
      table:[
        {pronoun:'a mio parere',form:'bence',example:'A mio parere, Caravaggio è superiore a Raffaello.',tr:'Bence Caravaggio Raffael\'den üstün.'},
        {pronoun:'mi colpisce',form:'beni etkiliyor',example:'Mi colpisce molto il modo in cui usa la luce.',tr:'Işığı kullanma biçimi beni çok etkiliyor.'},
        {pronoun:'rappresenta / simboleggia',form:'temsil ediyor / simgeliyor',example:'Quest\'opera rappresenta la libertà.',tr:'Bu eser özgürlüğü temsil ediyor.'},
        {pronoun:'è caratterizzato da',form:'ile karakterize edilmiş',example:'Il suo stile è caratterizzato da colori vivaci.',tr:'Üslubu canlı renklerle karakterize edilmiş.'}
      ],
      note:'"Mi fa pensare a" (bana ... hatırlatıyor). "Trasmette emozioni" (duygular aktarıyor). Müzede rehber gibi konuşmak için vazgeçilmez ifadeler.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Ogni volta che entro agli Uffizi, mi commuovo. L\'arte italiana è unica.',tr:'Uffizi\'ye her girdiğimde duygulanıyorum. İtalyan sanatı benzersiz.',prompt:'Sanat deneyimi paylaş'},
    {id:'sp2',en:'Il mio artista preferito è Caravaggio: i suoi dipinti sono potentissimi.',tr:'En sevdiğim sanatçı Caravaggio: tabloları çok güçlü.',prompt:'Favori sanatçı'},
    {id:'sp3',en:'La Divina Commedia è un\'opera geniale, ma molto difficile da capire.',tr:'İlahi Komedya dahice bir eser ama anlaması çok zor.',prompt:'İtalyan edebiyatı hakkında'},
    {id:'sp4',en:'Il Carnevale di Venezia è uno spettacolo straordinario che tutti dovrebbero vedere.',tr:'Venedik Karnavalı herkesin görmesi gereken olağanüstü bir gösteri.',prompt:'Festival tavsiye et'},
    {id:'sp5',en:'L\'Italia ha così tanta arte che ci vorrebbe una vita intera per vederla tutta.',tr:'İtalya\'nın o kadar çok sanatı var ki hepsini görmek için bir ömür gerekir.',prompt:'İtalyan sanat mirası'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Müzede',
      title_en:'At the Museum',
      lines:[
        {speaker:'A',gender:'f',en:'Questo dipinto mi affascina. Chi è l\'autore?',tr:'Bu tablo beni büyülüyor. Ressamı kim?',bd:[{ro:'mi affascina',tr:'beni büyülüyor',role:'feeling'},{ro:'Chi è l\'autore?',tr:'ressamı kim?',role:'question'}]},
        {speaker:'B',gender:'m',en:'È di Botticelli. Si chiama "La Nascita di Venere". È del Quattrocento.',tr:'Botticelli\'nin eseri. "Venüs\'ün Doğuşu" adında. 15. yüzyıldan.',bd:[{ro:'La Nascita di Venere',tr:'Venüs\'ün Doğuşu',role:'title'},{ro:'È del Quattrocento',tr:'15. yüzyıldan',role:'period'}]},
        {speaker:'A',gender:'f',en:'Straordinario! La figura di Venere è così delicata. Come riusciva a dipingere così?',tr:'Olağanüstü! Venüs figürü çok narin. Nasıl bu kadar güzel resim yapabiliyordu?',bd:[{ro:'così delicata',tr:'çok narin',role:'adjective'},{ro:'Come riusciva a dipingere così?',tr:'nasıl bu kadar güzel resim yapabiliyordu?',role:'wonder'}]},
        {speaker:'B',gender:'m',en:'Botticelli usava la tecnica del "tempera su tavola". I colori si sono conservati benissimo.',tr:'Botticelli "ahşap üzerine tempera" tekniğini kullanıyordu. Renkler çok iyi korunmuş.',bd:[{ro:'la tecnica del tempera su tavola',tr:'ahşap üzerine tempera tekniği',role:'technique'},{ro:'I colori si sono conservati benissimo',tr:'renkler çok iyi korunmuş',role:'preservation'}]},
        {speaker:'A',gender:'f',en:'Incredibile. Penso che l\'arte italiana sia la più bella del mondo.',tr:'İnanılmaz. İtalyan sanatının dünyanın en güzeli olduğunu düşünüyorum.',bd:[{ro:'Penso che l\'arte italiana sia',tr:'İtalyan sanatının olduğunu düşünüyorum (congiuntivo)',role:'opinion'},{ro:'la più bella del mondo',tr:'dünyanın en güzeli',role:'superlative'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'L\'Italia è il paese con il maggior numero di siti patrimonio dell\'umanità UNESCO. Opere come il Colosseo, gli Uffizi, il Duomo di Milano rappresentano secoli di storia e cultura. Il Rinascimento, nato a Firenze nel Quattrocento, ha cambiato la storia dell\'arte mondiale. Artisti come Botticelli, Leonardo, Michelangelo e Raffaello hanno creato opere che ancora oggi attirano milioni di visitatori. La cultura è parte dell\'identità italiana.',
      tr:'İtalya, UNESCO insanlık mirası sitlerinin en fazla sayısına sahip ülke. Kolezyum, Uffizi, Milano Katedrali gibi eserler yüzyıllarca süren tarih ve kültürü temsil ediyor. Floransa\'da 15. yüzyılda doğan Rönesans, dünya sanat tarihini değiştirdi. Botticelli, Leonardo, Michelangelo ve Raffaello gibi sanatçılar bugün hâlâ milyonlarca ziyaretçi çeken eserler yarattı. Kültür İtalyan kimliğinin parçası.',
      questions:[
        {q:'İtalya\'nın UNESCO alanları bakımından konumu ne?',opts:['Avrupa\'da ikinci','Dünyada en fazla','En az','Orta sıralarda'],answer:1,tr:'Dünyada en fazla (il maggior numero)'},
        {q:'Rönesans nerede ve ne zaman doğdu?',opts:['Roma\'da, 13. yüzyılda','Milano\'da, 16. yüzyılda','Floransa\'da, 15. yüzyılda','Venedik\'te, 14. yüzyılda'],answer:2,tr:'Floransa\'da, 15. yüzyılda (Quattrocento)'},
        {q:'Hangi sanatçılar Rönesans dönemine aittir?',opts:['Caravaggio ve Bernini','Botticelli, Leonardo, Michelangelo ve Raffaello','Verdi ve Puccini','Dante ve Petrarca'],answer:1,tr:'Botticelli, Leonardo, Michelangelo ve Raffaello'}
      ]
    }
  ],
  tones:[]
};
LESSONS[36] = L36;
