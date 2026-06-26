// ders7.js � Spanish Lesson 7: Directions (beginner)
const L7 = {
  words:[
    {
      id:'w1',
      en:'¿Dónde está...?',
      ro:'DON-de es-TA',
      tr:'... nerede?'
    },
    {
      id:'w2',
      en:'a la izquierda',
      ro:'a la is-KYEY-dra',
      tr:'sola'
    },
    {
      id:'w3',
      en:'a la derecha',
      ro:'a la de-RE-cha',
      tr:'sa�xa'
    },
    {
      id:'w4',
      en:'todo recto',
      ro:'TO-do REK-to',
      tr:'düz / ileri'
    },
    {
      id:'w5',
      en:'la esquina',
      ro:'la es-KI-na',
      tr:'kö�xe'
    },
    {
      id:'w6',
      en:'la calle',
      ro:'la KA-ye',
      tr:'cadde / sokak'
    },
    {
      id:'w7',
      en:'la estación de tren',
      ro:'la es-ta-THYON de tren',
      tr:'tren istasyonu'
    },
    {
      id:'w8',
      en:'la parada',
      ro:'la pa-RA-da',
      tr:'durak'
    },
    {
      id:'w9',
      en:'el semáforo',
      ro:'el se-ma-FO-ro',
      tr:'trafik lambası'
    },
    {
      id:'w10',
      en:'cruzar',
      ro:'kru-SAR',
      tr:'kar�xıdan kar�xıya geçmek'
    },
    {
      id:'w11',
      en:'el cruce',
      ro:'el KRU-se',
      tr:'kav�xak'
    },
    {
      id:'w12',
      en:'cerca',
      ro:'SER-ka',
      tr:'yakında'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Yön Tarifi Verme',
      title_en:'Giving Directions',
      explanation:'Temel yönler: a la izquierda (sol), a la derecha (sa�x), todo recto (düz). Siga... = ... gidin (resmi emir). En la esquina = kö�xede.',
      table:[
        {
          pronoun:'Yönler',
          form:'izquierda / derecha / recto',
          example:'Siga todo recto.',
          tr:'Düz gidin.'
        },
        {
          pronoun:'Konum',
          form:'cerca / lejos',
          example:'Está cerca.',
          tr:'Yakında.'
        },
        {
          pronoun:'Soru',
          form:'¿Dónde está...? / ¿Cómo llego a...?',
          example:'¿Dónde está la estación?',
          tr:'Tren istasyonu nerede?'
        },
        {
          pronoun:'Mesafe',
          form:'aprox. / unos',
          example:'Está a unos cinco minutos.',
          tr:'Yakla�xık be�x dakika.'
        }
      ],
      note:'İspanya\'da yaya geçitlerine dikkat � kırmızıda geçme!'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'¿Dónde está la estación de tren?',
      tr:'Tren istasyonu nerede?',
      prompt:'Yer sor'
    },
    {
      id:'sp2',
      en:'Siga todo recto.',
      tr:'Düz gidin.',
      prompt:'Yön tarif et'
    },
    {
      id:'sp3',
      en:'Luego a la izquierda.',
      tr:'Sonra sola.',
      prompt:'Yön ekle'
    },
    {
      id:'sp4',
      en:'Está cerca.',
      tr:'Yakında.',
      prompt:'Mesafe belirt'
    },
    {
      id:'sp5',
      en:'¡Gracias por la ayuda!',
      tr:'Yardım için te�xekkürler!',
      prompt:'Te�xekkür et'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Pedir direcciones',
      title_en:'Asking for Directions',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Perdón, ¿dónde está la estación de tren?',
          tr:'Pardon, tren istasyonu nerede?',
          gramNote:'Yol sorma � Perdón ile ba�xla.',
          bd:[
            {
              ro:'Perdón',
              tr:'Pardon',
              role:'courtesy',
              note:'Yabancıya yakla�xırken.'
            },
            {
              ro:'¿dónde está',
              tr:'nerede',
              role:'question',
              note:'Dónde + está + isim.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Siga todo recto, luego a la izquierda.',
          tr:'Düz gidin, sonra sola.',
          gramNote:'luego = sonra.',
          bd:[
            {
              ro:'todo recto',
              tr:'düz',
              role:'direction',
              note:'İleri git.'
            },
            {
              ro:'luego a la izquierda',
              tr:'sonra sol',
              role:'direction',
              note:'Sıralı yön.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'¿En el semáforo?',
          tr:'Trafik lambasında mı?',
          gramNote:'Onay sorma.',
          bd:[
            {
              ro:'En el semáforo',
              tr:'Trafik lambasında',
              role:'K',
              note:'en + isim � ...de/-da.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Sí, en el semáforo a la derecha. Luego verá la estación.',
          tr:'Evet, trafik lambasında sa�xa. Sonra istasyonu görürsünüz.',
          gramNote:[
            {
              ro:'verá',
              tr:'görürsünüz',
              role:'V',
              note:'Resmi emir / tavsiye (futuro de cortesía).'
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
      transcript:'Siga todo recto hasta el cruce. Luego a la izquierda. La estación está a cinco minutos a pie.',
      tr:'Kav�xa�xa kadar düz gidin. Sonra sola. Tren istasyonu yürüyerek be�x dakika.',
      questions:[
        {
          q:'¿Qué se hace en el cruce?',
          opts:[
            'derecha',
            'izquierda',
            'volver',
            'parar'
          ],
          answer:1,
          tr:'Kav�xakta ne yapılır?'
        },
        {
          q:'¿Cuánto se tarda a pie?',
          opts:[
            '3 min.',
            '5 min.',
            '10 min.',
            '15 min.'
          ],
          answer:1,
          tr:'Yürüyerek ne kadar sürer?'
        },
        {
          q:'¿Hacia dónde se va primero?',
          opts:[
            'izquierda',
            'derecha',
            'recto',
            'atrás'
          ],
          answer:2,
          tr:'�nce nereye gidilir?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[7] = L7;
