// ders8.js — Italian Lesson 8: Transport & Travel (Ulaşım ve Seyahat)
const L8 = {
  words:[
    {
      id:'w1',
      en:'il treno',
      ro:'il treno',
      tr:'tren',
      tip:'Şehirlerarası seyahatte en yaygın ulaşım.',
      ctx:'Stasyonda kullanılır.',
      examples:[
        {
          it:'Il treno per Roma parte alle nove.',
          tr:'Roma treni saat dokuzda kalkıyor.',
          bd:[{ro:'Il treno per Roma',tr:'Roma treni'},{ro:'parte',tr:'kalkıyor'},{ro:'alle nove',tr:'saat dokuzda'}]
        }
      ]
    },
    {
      id:'w2',
      en:'l\'autobus',
      ro:'l\'autobus',
      tr:'otobüs',
      examples:[
        {
          it:'Quale autobus va in centro?',
          tr:'Hangi otobüs merkeze gidiyor?',
          bd:[{ro:'Quale autobus',tr:'hangi otobüs'},{ro:'va in centro',tr:'merkeze gidiyor'}]
        }
      ]
    },
    {
      id:'w3',
      en:'la metropolitana / la metro',
      ro:'la metro',
      tr:'metro',
      examples:[
        {
          it:'Prendo la metro linea A.',
          tr:'A hattı metrosuna biniyorum.',
          bd:[{ro:'Prendo',tr:'biniyorum'},{ro:'la metro',tr:'metro'},{ro:'linea A',tr:'A hattı'}]
        }
      ]
    },
    {
      id:'w4',
      en:'l\'aereo',
      ro:'l\'aereo',
      tr:'uçak',
      examples:[
        {
          it:'L\'aereo decolla in ritardo.',
          tr:'Uçak gecikmeli kalkıyor.',
          bd:[{ro:'L\'aereo',tr:'uçak'},{ro:'decolla',tr:'kalkıyor (hava)'},{ro:'in ritardo',tr:'gecikmeli'}]
        }
      ]
    },
    {
      id:'w5',
      en:'il biglietto',
      ro:'il biglietto',
      tr:'bilet',
      examples:[
        {
          it:'Vorrei un biglietto per Milano, andata e ritorno.',
          tr:'Milano için gidiş-dönüş bilet istiyorum.',
          bd:[{ro:'Vorrei',tr:'istiyorum'},{ro:'un biglietto',tr:'bir bilet'},{ro:'andata e ritorno',tr:'gidiş-dönüş'}]
        }
      ]
    },
    {
      id:'w6',
      en:'il binario',
      ro:'il binario',
      tr:'peron / hat',
      examples:[
        {
          it:'Il treno parte dal binario tre.',
          tr:'Tren üç numaralı perondan kalkıyor.',
          bd:[{ro:'parte',tr:'kalkıyor'},{ro:'dal binario tre',tr:'üç numaralı perondna'}]
        }
      ]
    },
    {
      id:'w7',
      en:'partire / la partenza',
      ro:'partire',
      tr:'kalkmak / kalkış',
      examples:[
        {
          it:'A che ora parte il treno?',
          tr:'Tren saat kaçta kalkıyor?',
          bd:[{ro:'A che ora',tr:'saat kaçta'},{ro:'parte',tr:'kalkıyor'},{ro:'il treno',tr:'tren'}]
        }
      ]
    },
    {
      id:'w8',
      en:'arrivare / l\'arrivo',
      ro:'arrivare',
      tr:'varmak / varış',
      examples:[
        {
          it:'Arriviamo a Venezia alle undici.',
          tr:'Venedik\'e saat on birde varıyoruz.',
          bd:[{ro:'Arriviamo',tr:'varıyoruz'},{ro:'a Venezia',tr:'Venedik\'e'},{ro:'alle undici',tr:'saat on birde'}]
        }
      ]
    },
    {
      id:'w9',
      en:'fare cambio / l\'interscambio',
      ro:'fare cambio',
      tr:'aktarma yapmak',
      examples:[
        {
          it:'Devo fare cambio a Bologna.',
          tr:'Bologna\'da aktarma yapmam gerekiyor.',
          bd:[{ro:'Devo',tr:'gerekiyor'},{ro:'fare cambio',tr:'aktarma yapmak'},{ro:'a Bologna',tr:'Bologna\'da'}]
        }
      ]
    },
    {
      id:'w10',
      en:'il bagaglio / i bagagli',
      ro:'il bagaglio',
      tr:'bagaj / bavul',
      examples:[
        {
          it:'Ho solo un bagaglio a mano.',
          tr:'Sadece el bagajım var.',
          bd:[{ro:'Ho solo',tr:'yalnızca var'},{ro:'un bagaglio a mano',tr:'el bagajı'}]
        }
      ]
    },
    {
      id:'w11',
      en:'il passaporto',
      ro:'il passaporto',
      tr:'pasaport',
      examples:[
        {
          it:'Devo mostrare il passaporto?',
          tr:'Pasaportumu göstermem gerekiyor mu?',
          bd:[{ro:'Devo mostrare',tr:'göstermem gerekiyor'},{ro:'il passaporto',tr:'pasaportumu'}]
        }
      ]
    },
    {
      id:'w12',
      en:'in ritardo / puntuale',
      ro:'in ritardo',
      tr:'gecikmeli / zamanında',
      examples:[
        {
          it:'Il treno è in ritardo di venti minuti.',
          tr:'Tren yirmi dakika gecikmeli.',
          bd:[{ro:'è in ritardo',tr:'gecikmeli'},{ro:'di venti minuti',tr:'yirmi dakika'}]
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
          it:'Ho una prenotazione a nome Rossi.',
          tr:'Rossi adına rezervasyonum var.',
          bd:[{ro:'Ho una prenotazione',tr:'rezervasyonum var'},{ro:'a nome Rossi',tr:'Rossi adına'}]
        }
      ]
    },
    {
      id:'w14',
      en:'il posto / il sedile',
      ro:'il posto',
      tr:'koltuk / yer',
      examples:[
        {
          it:'È libero questo posto?',
          tr:'Bu yer boş mu?',
          bd:[{ro:'È libero',tr:'boş mu'},{ro:'questo posto',tr:'bu yer'}]
        }
      ]
    },
    {
      id:'w15',
      en:'l\'andata e ritorno',
      ro:'andata e ritorno',
      tr:'gidiş-dönüş',
      examples:[
        {
          it:'Un biglietto di andata e ritorno, per favore.',
          tr:'Bir gidiş-dönüş bileti lütfen.',
          bd:[{ro:'Un biglietto',tr:'bir bilet'},{ro:'andata e ritorno',tr:'gidiş-dönüş'},{ro:'per favore',tr:'lütfen'}]
        }
      ]
    },
    {
      id:'w16',
      en:'la stazione ferroviaria',
      ro:'la stazione',
      tr:'tren istasyonu',
      examples:[
        {
          it:'La stazione centrale è in centro città.',
          tr:'Merkez istasyon şehir merkezinde.',
          bd:[{ro:'La stazione centrale',tr:'merkez istasyon'},{ro:'in centro città',tr:'şehir merkezinde'}]
        }
      ]
    },
    {
      id:'w17',
      en:'l\'aeroporto',
      ro:'l\'aeroporto',
      tr:'havaalanı',
      examples:[
        {
          it:'Come arrivo all\'aeroporto?',
          tr:'Havaalanına nasıl giderim?',
          bd:[{ro:'Come arrivo',tr:'nasıl giderim'},{ro:'all\'aeroporto',tr:'havaalanına'}]
        }
      ]
    },
    {
      id:'w18',
      en:'il taxi / il taksi',
      ro:'il taxi',
      tr:'taksi',
      examples:[
        {
          it:'Posso prendere un taxi da qui?',
          tr:'Buradan taksi alabilir miyim?',
          bd:[{ro:'Posso prendere',tr:'alabilir miyim'},{ro:'un taxi',tr:'bir taksi'},{ro:'da qui',tr:'buradan'}]
        }
      ]
    },
    {
      id:'w19',
      en:'noleggiare una macchina',
      ro:'noleggiare',
      tr:'araba kiralamak',
      examples:[
        {
          it:'Vorrei noleggiare una macchina per tre giorni.',
          tr:'Üç günlüğüne araba kiralamak istiyorum.',
          bd:[{ro:'Vorrei noleggiare',tr:'kiralamak istiyorum'},{ro:'una macchina',tr:'bir araba'},{ro:'per tre giorni',tr:'üç günlüğüne'}]
        }
      ]
    },
    {
      id:'w20',
      en:'Buon viaggio!',
      ro:'Buon viaggio',
      tr:'İyi yolculuklar!',
      examples:[
        {
          it:'Ci vediamo a Roma! Buon viaggio!',
          tr:'Roma\'da görüşürüz! İyi yolculuklar!',
          bd:[{ro:'Ci vediamo',tr:'görüşürüz'},{ro:'a Roma',tr:'Roma\'da'},{ro:'Buon viaggio',tr:'iyi yolculuklar'}]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Bilet Alma: Vorrei un biglietto...',
      title_en:'Buying Tickets',
      explanation:'"Vorrei" (istiyorum) kullanarak bilet alabilirsin. Bilet türleri: solo andata (tek yön), andata e ritorno (gidiş-dönüş). Sınıf: prima classe (1. sınıf), seconda classe (2. sınıf).',
      table:[
        {pronoun:'Tek yön',form:'Un biglietto solo andata per...',example:'Un biglietto solo andata per Firenze.',tr:'Floransa için tek yön bilet.'},
        {pronoun:'Gidiş-dönüş',form:'Un biglietto andata e ritorno per...',example:'Andata e ritorno per Napoli.',tr:'Napoli için gidiş-dönüş.'},
        {pronoun:'Kalkış',form:'A che ora parte?',example:'A che ora parte il prossimo treno?',tr:'Bir sonraki tren saat kaçta kalkıyor?'},
        {pronoun:'Varış',form:'Quando arriva a...?',example:'Quando arriva a Milano?',tr:'Milano\'ya ne zaman varıyor?'}
      ],
      note:'"Vorrei" = istiyorum (kibarca). "Voglio" daha doğrudan ama kaba gelebilir. Bilet gişesinde "Vorrei" tercih et.'
    },
    {
      id:'g2',
      title:'Ulaşım Araçları: "In" ve "a" kullanımı',
      title_en:'Transport Prepositions',
      explanation:'İtalyanca\'da ulaşım araçlarıyla "in" veya "a" edatı kullanılır. Genel kural: daha büyük araçlar → "in"; küçük araçlar → "a".',
      table:[
        {pronoun:'in',form:'in treno / in aereo / in macchina',example:'Andiamo a Napoli in treno.',tr:'Napoli\'ye trenle gidiyoruz.'},
        {pronoun:'in',form:'in autobus / in metro / in taxi',example:'Vado in ufficio in metro.',tr:'Ofise metroyla gidiyorum.'},
        {pronoun:'a',form:'a piedi / a cavallo',example:'Preferisco andare a piedi.',tr:'Yürüyerek gitmeyi tercih ederim.'},
        {pronoun:'con',form:'con il treno / con l\'aereo',example:'Sono venuto con l\'aereo.',tr:'Uçakla geldim.'}
      ],
      note:'"In macchina" ama "con la mia macchina" (benim arabamla). "Con" + articolo → daha spesifik anlatım.'
    },
    {
      id:'g3',
      title:'Seyahat Fiilleri: partire, arrivare, prendere',
      title_en:'Travel Verbs',
      explanation:'Seyahat sırasında en çok kullanılan fiiller: partire (kalkmak), arrivare (varmak), prendere (binmek/almak), cambiare (değiştirmek/aktarma yapmak).',
      table:[
        {pronoun:'partire (kalkmak)',form:'Il treno parte alle...',example:'Il treno parte alle otto e mezza.',tr:'Tren sekiz buçukta kalkıyor.'},
        {pronoun:'arrivare (varmak)',form:'Arriva a ... alle...',example:'Arriva a Roma alle undici.',tr:'Roma\'ya saat on birde varıyor.'},
        {pronoun:'prendere (binmek)',form:'Prendo il/la...',example:'Prendo l\'autobus numero 40.',tr:'40 numaralı otobüse biniyorum.'},
        {pronoun:'cambiare (aktarma)',form:'Cambio a...',example:'Cambio a Bologna.',tr:'Bologna\'da aktarma yapıyorum.'}
      ],
      note:'"Prendere" = almak/binmek. Bilet için de kullanılır: "Prendo un biglietto" (bilet alıyorum).'
    }
  ],
  speaking:[
    {id:'sp1',en:'Un biglietto per Roma, per favore.',tr:'Roma için bir bilet lütfen.',prompt:'Bilet satın al'},
    {id:'sp2',en:'A che ora parte il prossimo treno?',tr:'Bir sonraki tren ne zaman kalkıyor?',prompt:'Kalkış saatini sor'},
    {id:'sp3',en:'È libero questo posto?',tr:'Bu yer boş mu?',prompt:'Trende yer sor'},
    {id:'sp4',en:'Devo fare cambio?',tr:'Aktarma yapmam gerekiyor mu?',prompt:'Aktarma durumunu sor'},
    {id:'sp5',en:'Il treno è in ritardo.',tr:'Tren gecikmeli.',prompt:'Gecikme bildir'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Tren İstasyonunda Bilet Alma',
      title_en:'Buying a Train Ticket',
      lines:[
        {
          speaker:'A',gender:'m',
          en:'Buongiorno, vorrei un biglietto per Firenze.',
          tr:'Günaydın, Floransa için bir bilet istiyorum.',
          gramNote:'Vorrei = istiyorum (kibar)',
          bd:[
            {ro:'Buongiorno',tr:'günaydın',role:'greeting'},
            {ro:'vorrei',tr:'istiyorum',role:'verb',note:'kibar istek formu'},
            {ro:'un biglietto per Firenze',tr:'Floransa için bir bilet',role:'noun'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'Solo andata o andata e ritorno?',
          tr:'Tek yön mü yoksa gidiş-dönüş mü?',
          gramNote:'Gişe görevlisi seçenek soruyor',
          bd:[
            {ro:'Solo andata',tr:'tek yön',role:'option'},
            {ro:'andata e ritorno',tr:'gidiş-dönüş',role:'option'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'Andata e ritorno, per favore. Seconda classe.',
          tr:'Gidiş-dönüş lütfen. İkinci sınıf.',
          bd:[
            {ro:'Andata e ritorno',tr:'gidiş-dönüş',role:'choice'},
            {ro:'Seconda classe',tr:'ikinci sınıf',role:'class'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'Per quando vuole andare?',
          tr:'Ne zaman gitmek istiyorsunuz?',
          gramNote:'Per quando = ne zamana / ne zaman için',
          bd:[
            {ro:'Per quando',tr:'ne zaman için',role:'question'},
            {ro:'vuole andare',tr:'gitmek istiyor musunuz (Lei)',role:'verb'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'Domani mattina, il primo treno disponibile.',
          tr:'Yarın sabah, mevcut ilk tren.',
          bd:[
            {ro:'Domani mattina',tr:'yarın sabah',role:'time'},
            {ro:'il primo treno disponibile',tr:'mevcut ilk tren',role:'noun'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'C\'è un treno alle sette e venti dal binario quattro. Costa quarantadue euro.',
          tr:'Dört numaralı perondan yedi yirmi treni var. Kırk iki euro.',
          bd:[
            {ro:'C\'è un treno',tr:'bir tren var',role:'existence'},
            {ro:'alle sette e venti',tr:'saat yedi yirmide',role:'time'},
            {ro:'dal binario quattro',tr:'dört numaralı perondan',role:'location'},
            {ro:'Costa',tr:'tutarı',role:'price'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'Perfetto! Lo prendo. Pago con carta.',
          tr:'Mükemmel! Onu alıyorum. Kartla ödüyorum.',
          bd:[
            {ro:'Perfetto',tr:'mükemmel',role:'exclamation'},
            {ro:'Lo prendo',tr:'onu alıyorum',role:'verb',note:'Lo = il biglietto'},
            {ro:'Pago con carta',tr:'kartla ödüyorum',role:'payment'}
          ]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Attenzione! Il treno Intercity 524 per Roma Termini partirà dal binario sei con un ritardo di quindici minuti. Ci scusiamo per il disagio.',
      tr:'Dikkat! Roma Termini\'ye giden Intercity 524 treni on beş dakika gecikmeyle altı numaralı perondan kalkacaktır. Rahatsızlık için özür dileriz.',
      questions:[
        {
          q:'Hangi tren hakkında anons yapılıyor?',
          opts:['Intercity 342','Intercity 524','Frecciarossa 88','Regionale 120'],
          answer:1,
          tr:'Intercity 524'
        },
        {
          q:'Tren kaç dakika gecikmeli?',
          opts:['Beş dakika','On dakika','On beş dakika','Yirmi dakika'],
          answer:2,
          tr:'On beş dakika (quindici minuti)'
        },
        {
          q:'Tren hangi perondan kalkıyor?',
          opts:['Dört','Beş','Altı','Yedi'],
          answer:2,
          tr:'Altı (binario sei)'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[8] = L8;
