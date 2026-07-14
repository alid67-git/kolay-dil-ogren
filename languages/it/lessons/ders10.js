// ders10.js — Italian Lesson 10: Work & Business (İş ve Kariyer)
const L10 = {
  words:[
    {
      id:'w1',
      en:'il lavoro / il mestiere',
      ro:'il lavoro',
      tr:'iş / meslek',
      tip:'"Lavoro" = iş genel; "mestiere" = zanaat/meslek.',
      ctx:'Kendini tanıtırken kullanılır.',
      examples:[
        {
          it:'Che lavoro fai?',
          tr:'Ne iş yapıyorsun?',
          bd:[{ro:'Che lavoro',tr:'ne iş'},{ro:'fai',tr:'yapıyorsun'}]
        }
      ]
    },
    {
      id:'w2',
      en:'l\'ufficio',
      ro:'l\'ufficio',
      tr:'ofis',
      examples:[
        {
          it:'Lavoro in ufficio dalle nove alle diciassette.',
          tr:'Dokuzdan on yediye kadar ofiste çalışıyorum.',
          bd:[{ro:'Lavoro in ufficio',tr:'ofiste çalışıyorum'},{ro:'dalle nove alle diciassette',tr:'dokuzdan on yediye'}]
        }
      ]
    },
    {
      id:'w3',
      en:'il collega / la collega',
      ro:'il collega',
      tr:'iş arkadaşı',
      examples:[
        {
          it:'I miei colleghi sono molto simpatici.',
          tr:'İş arkadaşlarım çok sempatik.',
          bd:[{ro:'I miei colleghi',tr:'iş arkadaşlarım'},{ro:'sono',tr:'var/dir'},{ro:'molto simpatici',tr:'çok sempatik'}]
        }
      ]
    },
    {
      id:'w4',
      en:'il capo / il direttore',
      ro:'il capo',
      tr:'patron / müdür',
      examples:[
        {
          it:'Il mio capo è esigente ma giusto.',
          tr:'Patronum talepkâr ama adil.',
          bd:[{ro:'Il mio capo',tr:'patronum'},{ro:'è esigente',tr:'talepkâr'},{ro:'ma giusto',tr:'ama adil'}]
        }
      ]
    },
    {
      id:'w5',
      en:'la riunione',
      ro:'la riunione',
      tr:'toplantı',
      examples:[
        {
          it:'Ho una riunione importante oggi pomeriggio.',
          tr:'Bu öğleden sonra önemli bir toplantım var.',
          bd:[{ro:'Ho una riunione',tr:'toplantım var'},{ro:'importante',tr:'önemli'},{ro:'oggi pomeriggio',tr:'bu öğleden sonra'}]
        }
      ]
    },
    {
      id:'w6',
      en:'lo stipendio',
      ro:'lo stipendio',
      tr:'maaş',
      examples:[
        {
          it:'Lo stipendio viene pagato il primo del mese.',
          tr:'Maaş ayın birinde ödeniyor.',
          bd:[{ro:'Lo stipendio',tr:'maaş'},{ro:'viene pagato',tr:'ödeniyor'},{ro:'il primo del mese',tr:'ayın birinde'}]
        }
      ]
    },
    {
      id:'w7',
      en:'il contratto di lavoro',
      ro:'il contratto',
      tr:'iş sözleşmesi',
      examples:[
        {
          it:'Ho firmato il contratto di lavoro stamattina.',
          tr:'Bu sabah iş sözleşmesini imzaladım.',
          bd:[{ro:'Ho firmato',tr:'imzaladım'},{ro:'il contratto di lavoro',tr:'iş sözleşmesini'},{ro:'stamattina',tr:'bu sabah'}]
        }
      ]
    },
    {
      id:'w8',
      en:'il colloquio di lavoro',
      ro:'il colloquio',
      tr:'iş görüşmesi',
      examples:[
        {
          it:'Ho un colloquio di lavoro domani.',
          tr:'Yarın iş görüşmem var.',
          bd:[{ro:'Ho un colloquio di lavoro',tr:'iş görüşmem var'},{ro:'domani',tr:'yarın'}]
        }
      ]
    },
    {
      id:'w9',
      en:'l\'esperienza lavorativa',
      ro:'l\'esperienza',
      tr:'iş deneyimi',
      examples:[
        {
          it:'Ho cinque anni di esperienza nel settore.',
          tr:'Sektörde beş yıllık deneyimim var.',
          bd:[{ro:'Ho cinque anni di esperienza',tr:'beş yıllık deneyimim var'},{ro:'nel settore',tr:'sektörde'}]
        }
      ]
    },
    {
      id:'w10',
      en:'l\'azienda / la società',
      ro:'l\'azienda',
      tr:'şirket / firma',
      examples:[
        {
          it:'Lavoro per un\'azienda internazionale.',
          tr:'Uluslararası bir şirket için çalışıyorum.',
          bd:[{ro:'Lavoro per',tr:'çalışıyorum'},{ro:'un\'azienda internazionale',tr:'uluslararası bir şirket'}]
        }
      ]
    },
    {
      id:'w11',
      en:'il progetto',
      ro:'il progetto',
      tr:'proje',
      examples:[
        {
          it:'Stiamo lavorando a un nuovo progetto.',
          tr:'Yeni bir proje üzerinde çalışıyoruz.',
          bd:[{ro:'Stiamo lavorando a',tr:'üzerinde çalışıyoruz'},{ro:'un nuovo progetto',tr:'yeni bir proje'}]
        }
      ]
    },
    {
      id:'w12',
      en:'la scadenza / la deadline',
      ro:'la scadenza',
      tr:'son teslim tarihi',
      examples:[
        {
          it:'La scadenza è venerdì prossimo.',
          tr:'Son teslim tarihi önümüzdeki cuma.',
          bd:[{ro:'La scadenza',tr:'son tarih'},{ro:'è venerdì prossimo',tr:'önümüzdeki cuma'}]
        }
      ]
    },
    {
      id:'w13',
      en:'a tempo pieno / a part time',
      ro:'tempo pieno',
      tr:'tam zamanlı / yarı zamanlı',
      examples:[
        {
          it:'Lavoro a tempo pieno, quaranta ore a settimana.',
          tr:'Haftada kırk saat tam zamanlı çalışıyorum.',
          bd:[{ro:'a tempo pieno',tr:'tam zamanlı'},{ro:'quaranta ore a settimana',tr:'haftada kırk saat'}]
        }
      ]
    },
    {
      id:'w14',
      en:'lavorare da casa / in smart working',
      ro:'da casa',
      tr:'evden çalışmak',
      examples:[
        {
          it:'Tre giorni a settimana lavoro da casa.',
          tr:'Haftada üç gün evden çalışıyorum.',
          bd:[{ro:'Tre giorni a settimana',tr:'haftada üç gün'},{ro:'lavoro da casa',tr:'evden çalışıyorum'}]
        }
      ]
    },
    {
      id:'w15',
      en:'il cliente / la cliente',
      ro:'il cliente',
      tr:'müşteri',
      examples:[
        {
          it:'Domani ho una presentazione per un cliente importante.',
          tr:'Yarın önemli bir müşteriye sunum var.',
          bd:[{ro:'ho una presentazione',tr:'sunumum var'},{ro:'per un cliente importante',tr:'önemli bir müşteriye'}]
        }
      ]
    },
    {
      id:'w16',
      en:'fare una pausa',
      ro:'fare una pausa',
      tr:'mola vermek',
      examples:[
        {
          it:'Facciamo una pausa caffè?',
          tr:'Kahve molası verelim mi?',
          bd:[{ro:'Facciamo una pausa',tr:'mola verelim mi'},{ro:'caffè',tr:'kahve'}]
        }
      ]
    },
    {
      id:'w17',
      en:'mandare un\'email',
      ro:'mandare un\'email',
      tr:'e-posta göndermek',
      examples:[
        {
          it:'Ti mando un\'email con tutti i dettagli.',
          tr:'Sana tüm ayrıntılarla bir e-posta gönderiyorum.',
          bd:[{ro:'Ti mando',tr:'sana gönderiyorum'},{ro:'un\'email',tr:'bir e-posta'},{ro:'con tutti i dettagli',tr:'tüm ayrıntılarla'}]
        }
      ]
    },
    {
      id:'w18',
      en:'Sono impiegato/a come...',
      ro:'Sono impiegato',
      tr:'... olarak çalışıyorum',
      examples:[
        {
          it:'Sono impiegato come ingegnere informatico.',
          tr:'Bilgisayar mühendisi olarak çalışıyorum.',
          bd:[{ro:'Sono impiegato come',tr:'olarak çalışıyorum'},{ro:'ingegnere informatico',tr:'bilgisayar mühendisi'}]
        }
      ]
    },
    {
      id:'w19',
      en:'Lavoro nel settore...',
      ro:'nel settore',
      tr:'... sektöründe çalışıyorum',
      examples:[
        {
          it:'Lavoro nel settore finanziario.',
          tr:'Finans sektöründe çalışıyorum.',
          bd:[{ro:'Lavoro nel settore',tr:'sektöründe çalışıyorum'},{ro:'finanziario',tr:'finans'}]
        }
      ]
    },
    {
      id:'w20',
      en:'In bocca al lupo! / Crepi!',
      ro:'In bocca al lupo',
      tr:'İyi şanslar! (İtalyan deyimi)',
      examples:[
        {
          it:'— In bocca al lupo per il colloquio! — Crepi, grazie!',
          tr:'— Görüşmen için iyi şanslar! — Sağ ol, teşekkürler!',
          bd:[{ro:'In bocca al lupo',tr:'iyi şanslar (lit: kurdun ağzına)',role:'idiom'},{ro:'Crepi',tr:'teşekkürler (geleneksel yanıt)',role:'response'}]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Meslek Söyleme: "Sono" + meslek',
      title_en:'Stating Your Profession',
      explanation:'İtalyanca\'da mesleğini söylerken İngilizce\'den farklı olarak article (a/an, bir) kullanılmaz! "Sono un medico" YANLIŞ; "Sono medico" DOĞRU.',
      table:[
        {pronoun:'erkek',form:'Sono + meslek (m.)',example:'Sono avvocato. / Sono insegnante.',tr:'Avukatım. / Öğretmenim.'},
        {pronoun:'kadın',form:'Sono + meslek (f.)',example:'Sono avvocatessa. / Sono infermiera.',tr:'Avukatım (k). / Hemşireyim.'},
        {pronoun:'soru',form:'Che lavoro fai? / Che cosa fa?',example:'Che lavoro fai? — Sono programmatore.',tr:'Ne iş yapıyorsun? — Programcıyım.'},
        {pronoun:'sektör',form:'Lavoro nel settore...',example:'Lavoro nel settore turistico.',tr:'Turizm sektöründe çalışıyorum.'}
      ],
      note:'Yaygın meslekler: medico (doktor), avvocato (avukat), ingegnere (mühendis), insegnante (öğretmen), cuoco (aşçı), commerciante (esnaf), programmatore (programcı).'
    },
    {
      id:'g2',
      title:'İş Fiilleri: lavorare, fare, avere',
      title_en:'Work Verbs',
      explanation:'İş hayatında en çok kullanılan fiiller ve yaygın kalıpları.',
      table:[
        {pronoun:'lavorare',form:'Lavoro + in/per/a...',example:'Lavoro per una startup. / Lavoro a Roma.',tr:'Bir startup\'ta çalışıyorum. / Roma\'da çalışıyorum.'},
        {pronoun:'fare',form:'Faccio il/la...',example:'Faccio il medico. / Faccio la segretaria.',tr:'Doktorluk yapıyorum. / Sekreterlik yapıyorum.'},
        {pronoun:'avere',form:'Ho + un colloquio/una riunione...',example:'Ho una riunione alle tre.',tr:'Saat üçte toplantım var.'},
        {pronoun:'essere',form:'Sono + lavoratore/dipendente...',example:'Sono dipendente statale.',tr:'Devlet memuruyum.'}
      ],
      note:'"Fare il medico" ve "Sono medico" ikisi de doğru; "Fare il..." biraz daha yaygın konuşma dili.'
    },
    {
      id:'g3',
      title:'İş Görüşmesinde: Sık Kullanılan Kalıplar',
      title_en:'Job Interview Phrases',
      explanation:'İş görüşmelerinde kullanılan temel cümleler ve kalıplar.',
      table:[
        {pronoun:'Deneyim',form:'Ho ... anni di esperienza in...',example:'Ho tre anni di esperienza nel marketing.',tr:'Pazarlamada üç yıllık deneyimim var.'},
        {pronoun:'Güç yönü',form:'I miei punti di forza sono...',example:'Sono creativo e lavoro bene in team.',tr:'Yaratıcıyım ve takım çalışmasında iyiyim.'},
        {pronoun:'Hedef',form:'Vorrei crescere professionalmente in...',example:'Vorrei crescere in questo settore.',tr:'Bu sektörde mesleki olarak gelişmek istiyorum.'},
        {pronoun:'Maaş',form:'Qual è la retribuzione prevista?',example:'Può dirmi lo stipendio offerto?',tr:'Teklif edilen maaş nedir?'}
      ],
      note:'İtalyanca\'da "curriculum vitae" (CV) standart terimdir. "Sono disponibile a partire dal..." = ... tarihinden itibaren müsaitim.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Sono ingegnere. Lavoro per un\'azienda italiana.',tr:'Mühendisim. Bir İtalyan şirketi için çalışıyorum.',prompt:'Mesleğini tanıt'},
    {id:'sp2',en:'Ho un colloquio di lavoro domani.',tr:'Yarın iş görüşmem var.',prompt:'İş görüşmesinden bahset'},
    {id:'sp3',en:'Facciamo una pausa caffè?',tr:'Kahve molası verelim mi?',prompt:'Mola teklif et'},
    {id:'sp4',en:'La scadenza è venerdì. Devo finire il progetto.',tr:'Son tarih cuma. Projeyi bitirmeliyim.',prompt:'İş durumunu anlat'},
    {id:'sp5',en:'In bocca al lupo per il colloquio!',tr:'Görüşmen için iyi şanslar!',prompt:'Birini teşvik et'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'İş Görüşmesi',
      title_en:'Job Interview',
      lines:[
        {
          speaker:'B',gender:'f',
          en:'Buongiorno, si accomodi. Può presentarsi?',
          tr:'Günaydın, buyurun oturun. Kendinizi tanıtabilir misiniz?',
          gramNote:'si accomodi = oturun (kibar emir)',
          bd:[
            {ro:'si accomodi',tr:'oturun (kibar)',role:'politeness'},
            {ro:'Può presentarsi?',tr:'kendinizi tanıtabilir misiniz?',role:'question'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'Certo. Sono Ali, ho ventotto anni e sono programmatore.',
          tr:'Tabii. Ben Ali, yirmi sekiz yaşındayım ve programcıyım.',
          gramNote:'Meslek söylerken artikel kullanılmaz',
          bd:[
            {ro:'Sono Ali',tr:'Ben Ali\'yim',role:'name'},
            {ro:'ho ventotto anni',tr:'yirmi sekiz yaşındayım',role:'age'},
            {ro:'sono programmatore',tr:'programcıyım',role:'profession',note:'artikel yok'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'Quanti anni di esperienza ha nel settore?',
          tr:'Sektörde kaç yıllık deneyiminiz var?',
          bd:[
            {ro:'Quanti anni di esperienza',tr:'kaç yıllık deneyim',role:'question'},
            {ro:'ha nel settore',tr:'sektörde var mı (Lei)',role:'verb'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'Ho quattro anni di esperienza. Ho lavorato principalmente con applicazioni web.',
          tr:'Dört yıllık deneyimim var. Ağırlıklı olarak web uygulamaları üzerinde çalıştım.',
          bd:[
            {ro:'Ho quattro anni di esperienza',tr:'dört yıllık deneyimim var',role:'experience'},
            {ro:'Ho lavorato principalmente con',tr:'ağırlıklı olarak çalıştım',role:'verb'},
            {ro:'applicazioni web',tr:'web uygulamaları',role:'noun'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'Perché vuole lavorare con noi?',
          tr:'Neden bizimle çalışmak istiyorsunuz?',
          bd:[{ro:'Perché vuole lavorare con noi',tr:'neden bizimle çalışmak istiyorsunuz',role:'question'}]
        },
        {
          speaker:'A',gender:'m',
          en:'La vostra azienda ha una grande reputazione nel settore tech. Vorrei crescere professionalmente qui.',
          tr:'Şirketinizin teknoloji sektöründe büyük bir itibarı var. Burada mesleki olarak gelişmek istiyorum.',
          bd:[
            {ro:'La vostra azienda',tr:'şirketiniz',role:'noun'},
            {ro:'ha una grande reputazione',tr:'büyük itibarı var',role:'verb'},
            {ro:'Vorrei crescere professionalmente',tr:'mesleki gelişmek istiyorum',role:'goal'}
          ]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Ciao a tutti! Sono Marco, il nuovo collega. Lavoro nel reparto marketing. Ho cinque anni di esperienza nel settore digitale. Prima lavoravo per un\'agenzia pubblicitaria a Milano. Sono molto contento di far parte di questo team!',
      tr:'Herkese merhaba! Ben Marco, yeni iş arkadaşınızım. Pazarlama departmanında çalışıyorum. Dijital sektörde beş yıllık deneyimim var. Daha önce Milano\'da bir reklam ajansında çalışıyordum. Bu ekibin parçası olmaktan çok memnunum!',
      questions:[
        {
          q:'Marco hangi departmanda çalışıyor?',
          opts:['Satış','İnsan Kaynakları','Pazarlama','Muhasebe'],
          answer:2,
          tr:'Pazarlama (marketing)'
        },
        {
          q:'Kaç yıllık deneyimi var?',
          opts:['İki yıl','Üç yıl','Dört yıl','Beş yıl'],
          answer:3,
          tr:'Beş yıl (cinque anni)'
        },
        {
          q:'Daha önce nerede çalışıyordu?',
          opts:['Roma\'da bir otel','Floransa\'da bir okul','Milano\'da bir reklam ajansı','Napoli\'de bir fabrika'],
          answer:2,
          tr:'Milano\'da bir reklam ajansı (agenzia pubblicitaria a Milano)'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[10] = L10;
