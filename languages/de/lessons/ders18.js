// ders18.js — German Lesson 18: Weather (beginner)
const L18 = {
  words:[
    {
      id:'w1',
      en:'das Wetter',
      ro:'das VET-er',
      tr:'hava'
    },
    {
      id:'w2',
      en:'die Sonne',
      ro:'dee ZO-ne',
      tr:'güneş'
    },
    {
      id:'w3',
      en:'der Regen',
      ro:'der RAY-gen',
      tr:'yağmur'
    },
    {
      id:'w4',
      en:'der Schnee',
      ro:'der shnay',
      tr:'kar'
    },
    {
      id:'w5',
      en:'der Wind',
      ro:'der vint',
      tr:'rüzgar'
    },
    {
      id:'w6',
      en:'warm',
      ro:'varm',
      tr:'sıcak'
    },
    {
      id:'w7',
      en:'kalt',
      ro:'kalt',
      tr:'soğuk'
    },
    {
      id:'w8',
      en:'Wie ist das Wetter?',
      ro:'vee ist das VET-er',
      tr:'Hava nasıl?'
    },
    {
      id:'w9',
      en:'Es regnet.',
      ro:'es RAY-net',
      tr:'Yağmur yağıyor.'
    },
    {
      id:'w10',
      en:'Es schneit.',
      ro:'es shnayt',
      tr:'Kar yağıyor.'
    },
    {
      id:'w11',
      en:'bewölkt',
      ro:'be-VÖLKT',
      tr:'bulutlu'
    },
    {
      id:'w12',
      en:'der Regenschirm',
      ro:'der RAY-gen-shirm',
      tr:'şemsiye'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Hava Durumu',
      title_en:'Weather',
      explanation:'Almancada hava es (it) ile: Es ist warm/kalt. Es regnet = yağmur yağıyor. Es scheint die Sonne = güneş parlıyor. Wie ist das Wetter heute? = Bugün hava nasıl?',
      table:[
        {
          pronoun:'Soru',
          form:'Wie ist das Wetter?',
          example:'Wie ist das Wetter heute?',
          tr:'Bugün hava nasıl?'
        },
        {
          pronoun:'Sıcaklık',
          form:'Es ist ... Grad',
          example:'Es ist zwanzig Grad.',
          tr:'Hava yirmi derece.'
        },
        {
          pronoun:'Yağış',
          form:'Es regnet / schneit',
          example:'Es regnet heute.',
          tr:'Bugün yağmur yağıyor.'
        },
        {
          pronoun:'Tavsiye',
          form:'Nimm einen Regenschirm!',
          example:'Es wird regnen.',
          tr:'Yağmur yağacak.'
        }
      ],
      note:'Almanya\'da hava değişken — her zaman şemsiye taşı!'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Wie ist das Wetter heute?',
      tr:'Bugün hava nasıl?',
      prompt:'Hava sor'
    },
    {
      id:'sp2',
      en:'Es ist warm und sonnig.',
      tr:'Hava sıcak ve güneşli.',
      prompt:'Hava durumu söyle'
    },
    {
      id:'sp3',
      en:'Es regnet. Ich brauche einen Regenschirm.',
      tr:'Yağmur yağıyor. Şemsiyeye ihtiyacım var.',
      prompt:'Yağmurdan bahset'
    },
    {
      id:'sp4',
      en:'Es ist sehr kalt!',
      tr:'Hava çok soğuk!',
      prompt:'Soğuktan bahset'
    },
    {
      id:'sp5',
      en:'Morgen wird es schneien.',
      tr:'Yarın kar yağacak.',
      prompt:'Tahmin söyle'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Wettergespräch',
      title_en:'Weather Talk',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Wie ist das Wetter heute?',
          tr:'Bugün hava nasıl?',
          gramNote:'Klasik sohbet açılışı — Almanya\'da çok yaygın.',
          bd:[
            {
              ro:'Wetter',
              tr:'hava',
              role:'O',
              note:'Neutrum → das.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Es ist kalt und bewölkt. Minus zwei Grad.',
          tr:'Soğuk ve bulutlu. Eksi iki derece.',
          gramNote:[
            {
              ro:'bewölkt',
              tr:'bulutlu',
              role:'adj',
              note:'Wetter sıfatı.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Oh! Dann brauche ich eine warme Jacke.',
          tr:'Oh! O zaman sıcak bir cekete ihtiyacım var.',
          gramNote:[
            {
              ro:'eine warme Jacke',
              tr:'sıcak ceket',
              role:'O',
              note:'Adjektiv vor Nomen — sıfat çekimi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Ja, und vielleicht einen Schal. Es wird windig.',
          tr:'Evet, belki bir atkı. Rüzgarlı olacak.',
          gramNote:[
            {
              ro:'windig',
              tr:'rüzgarlı',
              role:'adj',
              note:'Es wird = olacak (gelecek).'
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
      transcript:'Heute ist es sonnig und warm, zwanzig Grad. Morgen wird es regnen. Am Wochenende schneit es vielleicht.',
      tr:'Bugün güneşli ve sıcak, yirmi derece. Yarın yağmur yağacak. Hafta sonu belki kar yağar.',
      questions:[
        {
          q:'Wie ist das Wetter heute?',
          opts:[
            'regnerisch',
            'sonnig und warm',
            'schnee',
            'windig'
          ],
          answer:1,
          tr:'Bugün hava nasıl?'
        },
        {
          q:'Was passiert morgen?',
          opts:[
            'Sonne',
            'Regen',
            'Schnee',
            'Wind'
          ],
          answer:1,
          tr:'Yarın ne oluyor?'
        },
        {
          q:'Was passiert am Wochenende?',
          opts:[
            'Regen',
            'Sonne',
            'Schnee vielleicht',
            'Sturm'
          ],
          answer:2,
          tr:'Hafta sonu ne oluyor?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[18] = L18;
