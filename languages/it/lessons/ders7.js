// ders7.js — Italian Lesson 7: Directions (Yol Tarifi)
const L7 = {
  words:[
    {
      id:'w1',
      en:'Dov\'è...?',
      ro:'Dov\'è',
      tr:'... nerede?',
      tip:'Yer sormak için temel ifade.',
      ctx:'Her yerde kullanılır.',
      examples:[
        {
          it:'Dov\'è il bagno?',
          tr:'Tuvalet nerede?',
          bd:[{ro:'Dov\'è',tr:'nerede'},{ro:'il bagno',tr:'tuvalet'}]
        },
        {
          it:'Scusi, dov\'è la stazione?',
          tr:'Afedersiniz, istasyon nerede?',
          bd:[{ro:'Scusi',tr:'afedersiniz (resmi)'},{ro:'dov\'è',tr:'nerede'},{ro:'la stazione',tr:'istasyon'}]
        }
      ]
    },
    {
      id:'w2',
      en:'a sinistra',
      ro:'a sinistra',
      tr:'sola / solda',
      examples:[
        {
          it:'Gira a sinistra al semaforo.',
          tr:'Trafik lambasında sola dön.',
          bd:[{ro:'Gira',tr:'dön'},{ro:'a sinistra',tr:'sola'},{ro:'al semaforo',tr:'trafik lambasında'}]
        }
      ]
    },
    {
      id:'w3',
      en:'a destra',
      ro:'a destra',
      tr:'sağa / sağda',
      examples:[
        {
          it:'Prendi la prima a destra.',
          tr:'İlk sağa dön.',
          bd:[{ro:'Prendi',tr:'al/dön'},{ro:'la prima',tr:'birinci'},{ro:'a destra',tr:'sağa'}]
        }
      ]
    },
    {
      id:'w4',
      en:'sempre dritto',
      ro:'sempre dritto',
      tr:'düz / dümdüz gidin',
      examples:[
        {
          it:'Va\' sempre dritto per cento metri.',
          tr:'Yüz metre düz gidin.',
          bd:[{ro:'Va\'',tr:'git'},{ro:'sempre dritto',tr:'dümdüz'},{ro:'per cento metri',tr:'yüz metre boyunca'}]
        }
      ]
    },
    {
      id:'w5',
      en:'l\'angolo',
      ro:'l\'angolo',
      tr:'köşe',
      examples:[
        {
          it:'È all\'angolo della strada.',
          tr:'Caddenin köşesinde.',
          bd:[{ro:'È',tr:'... dir'},{ro:'all\'angolo',tr:'köşede'},{ro:'della strada',tr:'caddenin'}]
        }
      ]
    },
    {
      id:'w6',
      en:'la strada',
      ro:'la strada',
      tr:'cadde / yol',
      examples:[
        {
          it:'Questa strada porta al centro.',
          tr:'Bu cadde merkeze gidiyor.',
          bd:[{ro:'Questa strada',tr:'bu cadde'},{ro:'porta',tr:'götürür'},{ro:'al centro',tr:'merkeze'}]
        }
      ]
    },
    {
      id:'w7',
      en:'la stazione',
      ro:'la stazione',
      tr:'istasyon',
      examples:[
        {
          it:'La stazione è lontana da qui?',
          tr:'İstasyon buradan uzak mı?',
          bd:[{ro:'La stazione',tr:'istasyon'},{ro:'è lontana',tr:'uzakta mı'},{ro:'da qui',tr:'buradan'}]
        }
      ]
    },
    {
      id:'w8',
      en:'la fermata dell\'autobus',
      ro:'la fermata',
      tr:'otobüs durağı',
      examples:[
        {
          it:'La fermata è vicino alla banca.',
          tr:'Durak bankanın yanında.',
          bd:[{ro:'La fermata',tr:'durak'},{ro:'è vicino',tr:'yakın'},{ro:'alla banca',tr:'bankaya'}]
        }
      ]
    },
    {
      id:'w9',
      en:'il semaforo',
      ro:'il semaforo',
      tr:'trafik lambası',
      examples:[
        {
          it:'Al semaforo gira a sinistra.',
          tr:'Trafik lambasında sola dön.',
          bd:[{ro:'Al semaforo',tr:'trafik lambasında'},{ro:'gira',tr:'dön'},{ro:'a sinistra',tr:'sola'}]
        }
      ]
    },
    {
      id:'w10',
      en:'attraversare',
      ro:'attraversare',
      tr:'karşıdan geçmek',
      examples:[
        {
          it:'Devi attraversare il ponte.',
          tr:'Köprüden geçmen gerekiyor.',
          bd:[{ro:'Devi',tr:'gerekiyor'},{ro:'attraversare',tr:'geçmek'},{ro:'il ponte',tr:'köprüyü'}]
        }
      ]
    },
    {
      id:'w11',
      en:'l\'incrocio',
      ro:'l\'incrocio',
      tr:'kavşak',
      examples:[
        {
          it:'All\'incrocio, va\' a destra.',
          tr:'Kavşakta sağa git.',
          bd:[{ro:'All\'incrocio',tr:'kavşakta'},{ro:'va\'',tr:'git'},{ro:'a destra',tr:'sağa'}]
        }
      ]
    },
    {
      id:'w12',
      en:'vicino a',
      ro:'vicino a',
      tr:'yakınında',
      examples:[
        {
          it:'Il supermercato è vicino alla piazza.',
          tr:'Süpermarket meydanın yakınında.',
          bd:[{ro:'Il supermercato',tr:'süpermarket'},{ro:'è vicino a',tr:'yakınında'},{ro:'alla piazza',tr:'meydana'}]
        }
      ]
    },
    {
      id:'w13',
      en:'lontano da',
      ro:'lontano da',
      tr:'uzağında',
      examples:[
        {
          it:'Non è lontano, sono cinque minuti a piedi.',
          tr:'Uzak değil, yürüyerek beş dakika.',
          bd:[{ro:'Non è lontano',tr:'uzak değil'},{ro:'cinque minuti',tr:'beş dakika'},{ro:'a piedi',tr:'yürüyerek'}]
        }
      ]
    },
    {
      id:'w14',
      en:'la mappa / la cartina',
      ro:'la mappa',
      tr:'harita',
      examples:[
        {
          it:'Hai una mappa della città?',
          tr:'Şehrin haritasına sahip misin?',
          bd:[{ro:'Hai',tr:'sahip misin'},{ro:'una mappa',tr:'bir harita'},{ro:'della città',tr:'şehrin'}]
        }
      ]
    },
    {
      id:'w15',
      en:'girare',
      ro:'girare',
      tr:'dönmek',
      examples:[
        {
          it:'Gira a destra dopo la chiesa.',
          tr:'Kilisenin ardından sağa dön.',
          bd:[{ro:'Gira',tr:'dön'},{ro:'a destra',tr:'sağa'},{ro:'dopo la chiesa',tr:'kilisenin ardından'}]
        }
      ]
    },
    {
      id:'w16',
      en:'continuare',
      ro:'continuare',
      tr:'devam etmek',
      examples:[
        {
          it:'Continua dritto fino alla piazza.',
          tr:'Meydana kadar düz devam et.',
          bd:[{ro:'Continua',tr:'devam et'},{ro:'dritto',tr:'düz'},{ro:'fino alla piazza',tr:'meydana kadar'}]
        }
      ]
    },
    {
      id:'w17',
      en:'la piazza',
      ro:'la piazza',
      tr:'meydan',
      examples:[
        {
          it:'Ci vediamo in piazza!',
          tr:'Meydanda görüşürüz!',
          bd:[{ro:'Ci vediamo',tr:'görüşürüz'},{ro:'in piazza',tr:'meydanda'}]
        }
      ]
    },
    {
      id:'w18',
      en:'di fronte a',
      ro:'di fronte a',
      tr:'karşısında',
      examples:[
        {
          it:'La banca è di fronte alla farmacia.',
          tr:'Banka eczanenin karşısında.',
          bd:[{ro:'La banca',tr:'banka'},{ro:'è di fronte a',tr:'karşısında'},{ro:'alla farmacia',tr:'eczaneye'}]
        }
      ]
    },
    {
      id:'w19',
      en:'a piedi / in macchina',
      ro:'a piedi',
      tr:'yürüyerek / arabayla',
      examples:[
        {
          it:'È a dieci minuti a piedi.',
          tr:'Yürüyerek on dakika.',
          bd:[{ro:'È',tr:'... dir'},{ro:'a dieci minuti',tr:'on dakika'},{ro:'a piedi',tr:'yürüyerek'}]
        }
      ]
    },
    {
      id:'w20',
      en:'Come ci arrivo?',
      ro:'Come ci arrivo?',
      tr:'Oraya nasıl giderim?',
      examples:[
        {
          it:'Scusi, come arrivo alla stazione?',
          tr:'Affedersiniz, istasyona nasıl giderim?',
          bd:[{ro:'Scusi',tr:'affedersiniz'},{ro:'come arrivo',tr:'nasıl giderim'},{ro:'alla stazione',tr:'istasyona'}]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Yer Sorma: Dov\'è / Dove si trova?',
      title_en:'Asking for Locations',
      explanation:'İtalyanca\'da yer sormak için "Dov\'è...?" (nerede?) veya daha kibar olan "Dove si trova...?" kullanılır. "Scusi" (affedersiniz) ekleyerek kibarca sorabilirsin.',
      table:[
        {pronoun:'Basit',form:'Dov\'è il museo?',example:'Dov\'è il museo?',tr:'Müze nerede?'},
        {pronoun:'Kibar',form:'Scusi, dov\'è la banca?',example:'Scusi, dov\'è la banca?',tr:'Affedersiniz, banka nerede?'},
        {pronoun:'Resmi',form:'Dove si trova la stazione?',example:'Dove si trova la stazione?',tr:'İstasyon nerede bulunuyor?'},
        {pronoun:'Uzaklık',form:'È lontano?',example:'È lontano? No, è vicino.',tr:'Uzak mı? Hayır, yakın.'}
      ],
      note:'"Dov\'è" = "dove è" kısaltması. Tek yer için "è", çoğul için "sono" kullan: "Dove sono i bagni?" (Tuvaletler nerede?)'
    },
    {
      id:'g2',
      title:'Yön Tarif Etme',
      title_en:'Giving Directions',
      explanation:'Yön tarif ederken emir kipi (imperativo) kullanılır. Yabancıya kibar hitap (Lei) için başka formlar kullanabilirsin ama günlük konuşmada "tu" formu yaygındır.',
      table:[
        {pronoun:'Düz git',form:'Va\' / Vai sempre dritto.',example:'Sempre dritto per duecento metri.',tr:'İki yüz metre düz git.'},
        {pronoun:'Dön',form:'Gira / Volta a destra/sinistra.',example:'Al semaforo gira a sinistra.',tr:'Trafik lambasında sola dön.'},
        {pronoun:'Al',form:'Prendi la prima / seconda...',example:'Prendi la seconda a destra.',tr:'İkinci sağa dön.'},
        {pronoun:'Devam et',form:'Continua / Prosegui fino a...',example:'Continua fino alla piazza.',tr:'Meydana kadar devam et.'}
      ],
      note:'"Prendi la prima/seconda a destra/sinistra" = "birinci/ikinci sağa/sola dön" — çok kullanışlı bir kalıp!'
    },
    {
      id:'g3',
      title:'Konum Bildirme: vicino, lontano, di fronte',
      title_en:'Expressing Position',
      explanation:'Nesnelerin nerede olduğunu belirtmek için çeşitli edat grupları kullanılır. Bunlar "a, in, di fronte a, vicino a, dietro, accanto a" gibi ifadelerdir.',
      table:[
        {pronoun:'Yanında',form:'accanto a / vicino a',example:'Il bar è accanto alla farmacia.',tr:'Bar eczanenin yanında.'},
        {pronoun:'Karşısında',form:'di fronte a',example:'La scuola è di fronte al parco.',tr:'Okul parkın karşısında.'},
        {pronoun:'Arkasında',form:'dietro (a)',example:'Il parcheggio è dietro al supermercato.',tr:'Otopark süpermarketin arkasında.'},
        {pronoun:'Üzerinde',form:'in cima a / sopra',example:'Il castello è in cima alla collina.',tr:'Kale tepenin üstünde.'}
      ],
      note:'"Vicino a" + articolo birleşir: vicino alla (f.), vicino al (m.), vicino all\' (ünlü başlar), vicino ai/alle (çoğul).'
    }
  ],
  speaking:[
    {id:'sp1',en:'Scusi, dov\'è la stazione?',tr:'Affedersiniz, istasyon nerede?',prompt:'Yabancıya yer sor'},
    {id:'sp2',en:'Gira a sinistra al semaforo.',tr:'Trafik lambasında sola dön.',prompt:'Yön tarif et'},
    {id:'sp3',en:'È a cinque minuti a piedi.',tr:'Yürüyerek beş dakika.',prompt:'Mesafe bildir'},
    {id:'sp4',en:'Il museo è di fronte alla piazza.',tr:'Müze meydanın karşısında.',prompt:'Konum bildir'},
    {id:'sp5',en:'Prendi la seconda a destra.',tr:'İkinci sağa dön.',prompt:'Yol tarifi ver'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Yol Tarifi',
      title_en:'Asking for Directions',
      lines:[
        {
          speaker:'A',gender:'m',
          en:'Scusi, dov\'è il Colosseo?',
          tr:'Affedersiniz, Kolezyum nerede?',
          gramNote:'Scusi = kibar hitap (Lei formu)',
          bd:[
            {ro:'Scusi',tr:'affedersiniz',role:'politeness',note:'Lei formu kibar'},
            {ro:'dov\'è',tr:'nerede',role:'question'},
            {ro:'il Colosseo',tr:'Kolezyum',role:'noun'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'È abbastanza vicino. Va\' sempre dritto per due isolati.',
          tr:'Oldukça yakın. İki blok düz git.',
          gramNote:'Va\' = vai\'nin kısaltması (git)',
          bd:[
            {ro:'È abbastanza vicino',tr:'oldukça yakın',role:'adjective'},
            {ro:'Va\'',tr:'git',role:'imperative'},
            {ro:'sempre dritto',tr:'dümdüz',role:'direction'},
            {ro:'per due isolati',tr:'iki blok boyunca',role:'distance'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'E poi?',
          tr:'Sonra?',
          gramNote:'E poi = "ve sonra" — kısa, doğal ifade',
          bd:[{ro:'E poi',tr:'ve sonra',role:'connector'}]
        },
        {
          speaker:'B',gender:'f',
          en:'All\'incrocio gira a destra. Il Colosseo è sulla sinistra.',
          tr:'Kavşakta sağa dön. Kolezyum solda olacak.',
          gramNote:'sulla sinistra = solda (sulla = su + la)',
          bd:[
            {ro:'All\'incrocio',tr:'kavşakta',role:'location'},
            {ro:'gira a destra',tr:'sağa dön',role:'direction'},
            {ro:'è sulla sinistra',tr:'solda',role:'position'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'È lontano a piedi?',
          tr:'Yürüyerek uzak mı?',
          bd:[{ro:'È lontano',tr:'uzak mı'},{ro:'a piedi',tr:'yürüyerek'}]
        },
        {
          speaker:'B',gender:'f',
          en:'No, sono circa dieci minuti. Non puoi sbagliare!',
          tr:'Hayır, yaklaşık on dakika. Yanılmazsın!',
          bd:[
            {ro:'circa',tr:'yaklaşık',role:'adverb'},
            {ro:'dieci minuti',tr:'on dakika',role:'time'},
            {ro:'Non puoi sbagliare',tr:'yanılmazsın',role:'reassurance'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'Grazie mille!',
          tr:'Çok teşekkürler!',
          bd:[{ro:'Grazie mille',tr:'çok teşekkürler',role:'thanks'}]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Scusi, come arrivo alla stazione? Va\' sempre dritto per tre isolati, poi gira a sinistra al semaforo. La stazione è a destra, di fronte alla banca.',
      tr:'Affedersiniz, istasyona nasıl giderim? Üç blok düz gidin, sonra trafik lambasında sola dönün. İstasyon sağda, bankanın karşısında.',
      questions:[
        {
          q:'Kaç blok düz gidilmesi gerekiyor?',
          opts:['İki blok','Üç blok','Dört blok','Bir blok'],
          answer:1,
          tr:'Üç blok (tre isolati)'
        },
        {
          q:'Trafik lambasında hangi yöne dönülüyor?',
          opts:['Sağa','Sola','Düz devam','Geri dön'],
          answer:1,
          tr:'Sola (a sinistra)'
        },
        {
          q:'İstasyon neyin karşısında?',
          opts:['Müzenin','Kilisenin','Bankanın','Postanın'],
          answer:2,
          tr:'Bankanın (della banca)'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[7] = L7;
