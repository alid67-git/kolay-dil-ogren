// ders9.js — Italian Lesson 9: Hotel & Accommodation (Otel ve Konaklama)
const L9 = {
  words:[
    {
      id:'w1',
      en:'l\'hotel / l\'albergo',
      ro:'l\'hotel',
      tr:'otel',
      tip:'"Albergo" İtalyanca asıl kelime; "hotel" de yaygın.',
      ctx:'Konaklama arayışında kullanılır.',
      examples:[
        {
          it:'Ho prenotato una camera in questo hotel.',
          tr:'Bu otelde oda rezervasyonu yaptım.',
          bd:[{ro:'Ho prenotato',tr:'rezervasyon yaptım'},{ro:'una camera',tr:'bir oda'},{ro:'in questo hotel',tr:'bu otelde'}]
        }
      ]
    },
    {
      id:'w2',
      en:'la reception / il ricevimento',
      ro:'la reception',
      tr:'resepsiyon',
      examples:[
        {
          it:'Mi rivolgo alla reception per la chiave.',
          tr:'Anahtar için resepsiyona başvuruyorum.',
          bd:[{ro:'Mi rivolgo a',tr:'başvuruyorum'},{ro:'alla reception',tr:'resepsiyona'},{ro:'per la chiave',tr:'anahtar için'}]
        }
      ]
    },
    {
      id:'w3',
      en:'la camera',
      ro:'la camera',
      tr:'oda',
      examples:[
        {
          it:'La camera ha una vista bellissima.',
          tr:'Odanın çok güzel bir manzarası var.',
          bd:[{ro:'La camera',tr:'oda'},{ro:'ha una vista',tr:'manzarası var'},{ro:'bellissima',tr:'çok güzel'}]
        }
      ]
    },
    {
      id:'w4',
      en:'la camera singola',
      ro:'singola',
      tr:'tek kişilik oda',
      examples:[
        {
          it:'Vorrei una camera singola per tre notti.',
          tr:'Üç gece için tek kişilik oda istiyorum.',
          bd:[{ro:'Vorrei',tr:'istiyorum'},{ro:'una camera singola',tr:'tek kişilik oda'},{ro:'per tre notti',tr:'üç gece için'}]
        }
      ]
    },
    {
      id:'w5',
      en:'la camera doppia',
      ro:'doppia',
      tr:'çift kişilik oda',
      examples:[
        {
          it:'Una camera doppia con letto matrimoniale.',
          tr:'Çift kişilik yataklı bir oda.',
          bd:[{ro:'Una camera doppia',tr:'çift kişilik oda'},{ro:'con letto matrimoniale',tr:'çift kişilik yataklı'}]
        }
      ]
    },
    {
      id:'w6',
      en:'fare il check-in / il check-out',
      ro:'check-in',
      tr:'giriş / çıkış yapmak',
      examples:[
        {
          it:'A che ora posso fare il check-in?',
          tr:'Saat kaçta giriş yapabilirim?',
          bd:[{ro:'A che ora',tr:'saat kaçta'},{ro:'posso fare il check-in',tr:'giriş yapabilirim'}]
        }
      ]
    },
    {
      id:'w7',
      en:'la chiave / la scheda',
      ro:'la chiave',
      tr:'anahtar / kart',
      examples:[
        {
          it:'Ecco la chiave della sua camera, numero 214.',
          tr:'İşte odanızın anahtarı, 214 numara.',
          bd:[{ro:'Ecco',tr:'işte'},{ro:'la chiave della sua camera',tr:'odanızın anahtarı'},{ro:'numero 214',tr:'214 numara'}]
        }
      ]
    },
    {
      id:'w8',
      en:'la colazione',
      ro:'la colazione',
      tr:'kahvaltı',
      examples:[
        {
          it:'La colazione è inclusa nel prezzo.',
          tr:'Kahvaltı fiyata dahil.',
          bd:[{ro:'La colazione',tr:'kahvaltı'},{ro:'è inclusa',tr:'dahil'},{ro:'nel prezzo',tr:'fiyata'}]
        }
      ]
    },
    {
      id:'w9',
      en:'il wifi gratuito',
      ro:'il wifi',
      tr:'ücretsiz wifi',
      examples:[
        {
          it:'C\'è il wifi gratuito in camera?',
          tr:'Odada ücretsiz wifi var mı?',
          bd:[{ro:'C\'è',tr:'var mı'},{ro:'il wifi gratuito',tr:'ücretsiz wifi'},{ro:'in camera',tr:'odada'}]
        }
      ]
    },
    {
      id:'w10',
      en:'l\'aria condizionata',
      ro:'l\'aria condizionata',
      tr:'klima',
      examples:[
        {
          it:'Fa caldo, posso accendere l\'aria condizionata?',
          tr:'Çok sıcak, klimayı açabilir miyim?',
          bd:[{ro:'Fa caldo',tr:'çok sıcak'},{ro:'posso accendere',tr:'açabilir miyim'},{ro:'l\'aria condizionata',tr:'klimayı'}]
        }
      ]
    },
    {
      id:'w11',
      en:'il bagno / la doccia',
      ro:'il bagno',
      tr:'banyo / duş',
      examples:[
        {
          it:'La camera ha bagno privato con doccia.',
          tr:'Odanın özel banyosu ve duşu var.',
          bd:[{ro:'La camera ha',tr:'odanın var'},{ro:'bagno privato',tr:'özel banyo'},{ro:'con doccia',tr:'duş ile'}]
        }
      ]
    },
    {
      id:'w12',
      en:'l\'asciugamano',
      ro:'l\'asciugamano',
      tr:'havlu',
      examples:[
        {
          it:'Potrei avere asciugamani puliti, per favore?',
          tr:'Temiz havlu alabilir miyim, lütfen?',
          bd:[{ro:'Potrei avere',tr:'alabilir miyim'},{ro:'asciugamani puliti',tr:'temiz havlular'},{ro:'per favore',tr:'lütfen'}]
        }
      ]
    },
    {
      id:'w13',
      en:'la prenotazione',
      ro:'la prenotazione',
      tr:'rezervasyon',
      examples:[
        {
          it:'Ho una prenotazione per due notti a nome Bianchi.',
          tr:'Bianchi adına iki gecelik rezervasyonum var.',
          bd:[{ro:'Ho una prenotazione',tr:'rezervasyonum var'},{ro:'per due notti',tr:'iki gecelik'},{ro:'a nome Bianchi',tr:'Bianchi adına'}]
        }
      ]
    },
    {
      id:'w14',
      en:'il parcheggio',
      ro:'il parcheggio',
      tr:'otopark',
      examples:[
        {
          it:'L\'hotel ha il parcheggio gratuito?',
          tr:'Otelin ücretsiz otoparkı var mı?',
          bd:[{ro:'L\'hotel ha',tr:'otelin var mı'},{ro:'il parcheggio gratuito',tr:'ücretsiz otopark'}]
        }
      ]
    },
    {
      id:'w15',
      en:'la piscina',
      ro:'la piscina',
      tr:'yüzme havuzu',
      examples:[
        {
          it:'La piscina è aperta dalle otto alle venti.',
          tr:'Havuz saat sekizden yirmiye kadar açık.',
          bd:[{ro:'La piscina è aperta',tr:'havuz açık'},{ro:'dalle otto alle venti',tr:'sekizden yirmiye'}]
        }
      ]
    },
    {
      id:'w16',
      en:'il ristorante dell\'hotel',
      ro:'il ristorante',
      tr:'otel restoranı',
      examples:[
        {
          it:'Il ristorante dell\'hotel è al piano terra.',
          tr:'Otel restoranı zemin katta.',
          bd:[{ro:'Il ristorante dell\'hotel',tr:'otel restoranı'},{ro:'è al piano terra',tr:'zemin katta'}]
        }
      ]
    },
    {
      id:'w17',
      en:'il piano',
      ro:'il piano',
      tr:'kat',
      examples:[
        {
          it:'La mia camera è al quarto piano.',
          tr:'Odam dördüncü katta.',
          bd:[{ro:'La mia camera è',tr:'odam'},{ro:'al quarto piano',tr:'dördüncü katta'}]
        }
      ]
    },
    {
      id:'w18',
      en:'la vista sul mare / sulla città',
      ro:'la vista',
      tr:'deniz / şehir manzarası',
      examples:[
        {
          it:'Vorrei una camera con vista sul mare.',
          tr:'Deniz manzaralı oda istiyorum.',
          bd:[{ro:'Vorrei',tr:'istiyorum'},{ro:'una camera con vista',tr:'manzaralı oda'},{ro:'sul mare',tr:'denize bakıyor'}]
        }
      ]
    },
    {
      id:'w19',
      en:'C\'è un problema con la camera.',
      ro:'C\'è un problema',
      tr:'Odada bir sorun var.',
      examples:[
        {
          it:'C\'è un problema: la doccia non funziona.',
          tr:'Bir sorun var: duş çalışmıyor.',
          bd:[{ro:'C\'è un problema',tr:'bir sorun var'},{ro:'la doccia non funziona',tr:'duş çalışmıyor'}]
        }
      ]
    },
    {
      id:'w20',
      en:'Può portare...? / Ho bisogno di...',
      ro:'Ho bisogno di',
      tr:'... getirebilir misiniz? / ... gerekiyor',
      examples:[
        {
          it:'Ho bisogno di un cuscino in più.',
          tr:'Bir yastık daha lazım.',
          bd:[{ro:'Ho bisogno di',tr:'lazım / gerekiyor'},{ro:'un cuscino in più',tr:'bir yastık daha'}]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Otel Resepsiyonunda: Oda Ayırtma',
      title_en:'At the Reception: Reservations',
      explanation:'Otelde check-in yaparken veya oda rezervasyonu sırasında kullanılacak kalıplar. "Vorrei" (istiyorum), "Ho una prenotazione" (rezervasyonum var) ve "a nome..." (... adına) ifadelerini öğren.',
      table:[
        {pronoun:'Rezervasyon',form:'Ho una prenotazione a nome...',example:'Ho una prenotazione a nome Ali.',tr:'Ali adına rezervasyonum var.'},
        {pronoun:'Oda tipi',form:'Vorrei una camera singola/doppia...',example:'Vorrei una camera doppia con doccia.',tr:'Duşlu çift kişilik oda istiyorum.'},
        {pronoun:'Süre',form:'per ... notti',example:'per due notti / per una settimana',tr:'iki gece için / bir haftalık'},
        {pronoun:'Fiyat',form:'Quanto costa a notte?',example:'Quanto costa a notte per persona?',tr:'Kişi başı gecelik ne kadar?'}
      ],
      note:'"Mezza pensione" = yarım pansiyon (kahvaltı+akşam yemeği), "pensione completa" = tam pansiyon, "solo pernottamento" = sadece geceleme.'
    },
    {
      id:'g2',
      title:'Talep ve Şikayet: Ho bisogno di / C\'è un problema',
      title_en:'Requests and Complaints',
      explanation:'Otelde bir şey talep etmek veya sorun bildirmek için kullanılan yapılar.',
      table:[
        {pronoun:'Talep',form:'Ho bisogno di...',example:'Ho bisogno di asciugamani puliti.',tr:'Temiz havlu lazım.'},
        {pronoun:'Kibar talep',form:'Potrebbe portare / Può portare...?',example:'Può portare un cuscino extra?',tr:'Ekstra yastık getirebilir misiniz?'},
        {pronoun:'Şikayet',form:'C\'è un problema con...',example:'C\'è un problema con il riscaldamento.',tr:'Isıtmayla ilgili bir sorun var.'},
        {pronoun:'Arıza',form:'... non funziona',example:'L\'aria condizionata non funziona.',tr:'Klima çalışmıyor.'}
      ],
      note:'"Potrebbe" = "could you" (çok kibar), "Può" = "can you" (kibarca), "Voglio" = istiyorum (doğrudan). Otelde "Potrebbe" veya "Può" tercih et.'
    },
    {
      id:'g3',
      title:'Otel Saatleri: Check-in, Check-out, Colazione',
      title_en:'Hotel Times',
      explanation:'Otel konuşmalarında sıkça sorulan saat ve zaman ifadeleri.',
      table:[
        {pronoun:'Check-in',form:'A che ora posso fare il check-in?',example:'Il check-in è dalle quattordici.',tr:'Check-in saat on dörtten itibaren.'},
        {pronoun:'Check-out',form:'A che ora è il check-out?',example:'Il check-out è entro le dodici.',tr:'Check-out öğlene kadar.'},
        {pronoun:'Kahvaltı',form:'A che ora è la colazione?',example:'La colazione è dalle sette alle dieci.',tr:'Kahvaltı yediden ona kadar.'},
        {pronoun:'Uzatma',form:'Posso restare un\'altra notte?',example:'Posso prolungare di una notte?',tr:'Bir gece daha uzatabilir miyim?'}
      ],
      note:'"Dalle ... alle ..." = ... dan ... a kadar (saat aralığı). Örnek: "dalle otto alle dieci" = sekizden ona kadar.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Ho una prenotazione a nome mio.',tr:'Adıma rezervasyonum var.',prompt:'Resepsiyona başvur'},
    {id:'sp2',en:'Vorrei una camera con vista sul mare.',tr:'Deniz manzaralı oda istiyorum.',prompt:'Oda isteği belirt'},
    {id:'sp3',en:'A che ora è la colazione?',tr:'Kahvaltı ne zaman?',prompt:'Saat sor'},
    {id:'sp4',en:'La doccia non funziona.',tr:'Duş çalışmıyor.',prompt:'Arıza bildir'},
    {id:'sp5',en:'Ho bisogno di asciugamani puliti.',tr:'Temiz havlu lazım.',prompt:'Talep yap'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Otele Check-in',
      title_en:'Hotel Check-in',
      lines:[
        {
          speaker:'A',gender:'m',
          en:'Buonasera. Ho una prenotazione a nome Ali.',
          tr:'İyi akşamlar. Ali adına rezervasyonum var.',
          gramNote:'Buonasera = iyi akşamlar (öğleden sonra/akşam)',
          bd:[
            {ro:'Buonasera',tr:'iyi akşamlar',role:'greeting'},
            {ro:'Ho una prenotazione',tr:'rezervasyonum var',role:'verb'},
            {ro:'a nome Ali',tr:'Ali adına',role:'name'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'Sì, signor Ali. Una camera singola per due notti, giusto?',
          tr:'Evet, Bay Ali. İki gecelik tek kişilik oda, doğru mu?',
          gramNote:'signor = Bay (erkek hitabı)',
          bd:[
            {ro:'Sì',tr:'evet',role:'affirmative'},
            {ro:'signor Ali',tr:'Bay Ali',role:'title'},
            {ro:'una camera singola',tr:'tek kişilik oda',role:'noun'},
            {ro:'per due notti',tr:'iki gecelik',role:'duration'},
            {ro:'giusto?',tr:'doğru mu?',role:'confirmation'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'Sì, esatto. La colazione è inclusa?',
          tr:'Evet, doğru. Kahvaltı dahil mi?',
          bd:[
            {ro:'esatto',tr:'tam olarak / doğru',role:'confirmation'},
            {ro:'La colazione è inclusa?',tr:'kahvaltı dahil mi?',role:'question'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'Sì, la colazione è servita dalle sette e mezza alle dieci in punto.',
          tr:'Evet, kahvaltı yedi buçuktan tam ona kadar servis ediliyor.',
          bd:[
            {ro:'è servita',tr:'servis ediliyor',role:'verb'},
            {ro:'dalle sette e mezza',tr:'yedi buçuktan',role:'time'},
            {ro:'alle dieci in punto',tr:'tam ona kadar',role:'time'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'Perfetto. C\'è il parcheggio in hotel?',
          tr:'Mükemmel. Otelde otopark var mı?',
          bd:[
            {ro:'Perfetto',tr:'mükemmel',role:'exclamation'},
            {ro:'C\'è il parcheggio',tr:'otopark var mı',role:'question'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'Sì, il parcheggio è gratuito per gli ospiti. Ecco la sua chiave, camera 312 al terzo piano.',
          tr:'Evet, otopark misafirler için ücretsiz. İşte anahtarınız, üçüncü kattaki 312 numaralı oda.',
          bd:[
            {ro:'gratuito per gli ospiti',tr:'misafirler için ücretsiz',role:'price'},
            {ro:'Ecco la sua chiave',tr:'işte anahtarınız',role:'handover'},
            {ro:'al terzo piano',tr:'üçüncü katta',role:'floor'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'Grazie mille. Arrivederci!',
          tr:'Çok teşekkürler. Görüşürüz!',
          bd:[{ro:'Grazie mille',tr:'çok teşekkürler',role:'thanks'}]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Benvenuti all\'Hotel Venezia. Il check-in è dalle quattordici. La colazione è servita nella sala al piano terra dalle sette alle dieci. Il wifi è gratuito in tutta la struttura. Per qualsiasi problema, contattate la reception al numero interno zero.',
      tr:'Hotel Venezia\'ya hoş geldiniz. Check-in saat on dörtten itibaren. Kahvaltı, zemin kattaki salonda yediden ona kadar servis edilmektedir. Wifi, tüm tesiste ücretsizdir. Herhangi bir sorun için dahili sıfır numarasından resepsiyonla iletişime geçin.',
      questions:[
        {
          q:'Check-in saat kaçta başlıyor?',
          opts:['Saat on ikide','Saat on üçte','Saat on dörtte','Saat on beşte'],
          answer:2,
          tr:'Saat on dörtte (dalle quattordici)'
        },
        {
          q:'Kahvaltı nerede servis ediliyor?',
          opts:['Birinci katta','Zemin katta','İkinci katta','Odada'],
          answer:1,
          tr:'Zemin katta (piano terra)'
        },
        {
          q:'Wifi ücretli mi?',
          opts:['Evet, ücretli','Sadece odada ücretsiz','Tüm tesiste ücretsiz','Sadece restoranda ücretsiz'],
          answer:2,
          tr:'Tüm tesiste ücretsiz (gratuito in tutta la struttura)'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[9] = L9;
