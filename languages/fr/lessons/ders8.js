// ders8.js - French Lesson 8: Transport & Travel (beginner)
const L8 = {
  words:[
    {
      id:'w1',
      en:'le train',
      ro:'luh tren',
      tr:'tren'
    },
    {
      id:'w2',
      en:'le bus',
      ro:'luh büs',
      tr:'otobüs'
    },
    {
      id:'w3',
      en:'le métro',
      ro:'luh metro',
      tr:'metro'
    },
    {
      id:'w4',
      en:'l\'avion',
      ro:'la-vyon',
      tr:'uçak'
    },
    {
      id:'w5',
      en:'l\'aéroport',
      ro:'la-ero-por',
      tr:'havaalanı'
    },
    {
      id:'w6',
      en:'le billet',
      ro:'luh bi-ye',
      tr:'bilet'
    },
    {
      id:'w7',
      en:'monter',
      ro:'mon-te',
      tr:'binmek'
    },
    {
      id:'w8',
      en:'descendre',
      ro:'de-sondr',
      tr:'inmek'
    },
    {
      id:'w9',
      en:'changer',
      ro:'şan-je',
      tr:'aktarma yapmak'
    },
    {
      id:'w10',
      en:'le quai',
      ro:'luh ke',
      tr:'peron'
    },
    {
      id:'w11',
      en:'partir',
      ro:'par-tir',
      tr:'kalkmak'
    },
    {
      id:'w12',
      en:'arriver',
      ro:'a-ri-ve',
      tr:'varmak'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Ulaşım Kalıpları',
      title_en:'Transport phrases',
      explanation:'Bilet isterken Un billet pour... kalıbı kullanılır. Aktarma için changer, varış için arriver fiili kullanılır.',
      table:[
        {
          pronoun:'Bilet',
          form:'Un billet pour...',
          example:'Un billet pour Paris.',
          tr:'Paris için bir bilet.'
        },
        {
          pronoun:'Peron',
          form:'le quai',
          example:'Le train part du quai 5.',
          tr:'Tren 5. perondan kalkıyor.'
        },
        {
          pronoun:'Aktarma',
          form:'changer',
          example:'Je change à Lyon.',
          tr:'Lyon\'da aktarma yapıyorum.'
        },
        {
          pronoun:'Varış',
          form:'arriver',
          example:'J\'arrive à 18h.',
          tr:'18:00\'de varıyorum.'
        }
      ],
      note:'Tren anonslarında partir ve arriver fiilleri çok geçer.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Un billet pour Paris, s\'il vous plaît.',
      tr:'Paris için bir bilet, lütfen.',
      prompt:'Bilet al'
    },
    {
      id:'sp2',
      en:'Où dois-je changer ?',
      tr:'Nerede aktarma yapmalıyım?',
      prompt:'Aktarma sor'
    },
    {
      id:'sp3',
      en:'Le train part du quai 4.',
      tr:'Tren 4. perondan kalkıyor.',
      prompt:'Peron söyle'
    },
    {
      id:'sp4',
      en:'Quand arrive le bus ?',
      tr:'Otobüs ne zaman geliyor?',
      prompt:'Saat sor'
    },
    {
      id:'sp5',
      en:'Je descends ici.',
      tr:'Burada iniyorum.',
      prompt:'İneceğini söyle'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'À la gare',
      title_en:'At the station',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Bonjour, un billet aller-retour pour Lyon.',
          tr:'Merhaba, Lyon için gidiş-dönüş bilet.',
          gramNote:'aller-retour = gidiş dönüş.',
          bd:[
            {
              ro:'aller-retour',
              tr:'gidiş-dönüş',
              role:'O',
              note:'Bilet türü.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Très bien, départ à dix heures.',
          tr:'Çok iyi, kalkış saat on.',
          gramNote:'départ = kalkış.',
          bd:[
            {
              ro:'départ',
              tr:'kalkış',
              role:'O',
              note:'Anons kelimesi.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Quel quai, s\'il vous plaît ?',
          tr:'Hangi peron, lütfen?',
          gramNote:'Quai sorusu.',
          bd:[
            {
              ro:'quai',
              tr:'peron',
              role:'O',
              note:'Tren peronu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Quai 7. Bon voyage !',
          tr:'7. peron. İyi yolculuklar!',
          gramNote:'Veda ifadesi.',
          bd:[
            {
              ro:'Bon voyage',
              tr:'iyi yolculuklar',
              role:'farewell',
              note:'Yolcu vedası.'
            }
          ]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Le train pour Paris part à quatorze heures du quai 8. Le voyage dure deux heures.',
      tr:'Paris treni 14:00\'te 8. perondan kalkıyor. Yolculuk iki saat sürüyor.',
      questions:[
        {
          q:'Destination ?',
          opts:[
            'Lyon',
            'Paris',
            'Nice',
            'Lille'
          ],
          answer:1,
          tr:'Varış yeri?'
        },
        {
          q:'Quai ?',
          opts:[
            '5',
            '6',
            '7',
            '8'
          ],
          answer:3,
          tr:'Peron?'
        },
        {
          q:'Durée ?',
          opts:[
            '1h',
            '2h',
            '3h',
            '4h'
          ],
          answer:1,
          tr:'Süre?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[8] = L8;
