// ders18.js - French Lesson 18: Weather (beginner)
const L18 = {
  words:[
    {
      id:'w1',
      en:'le temps',
      ro:'luh ton',
      tr:'hava'
    },
    {
      id:'w2',
      en:'le soleil',
      ro:'luh so-ley',
      tr:'güneş'
    },
    {
      id:'w3',
      en:'la pluie',
      ro:'la plüi',
      tr:'yağmur'
    },
    {
      id:'w4',
      en:'la neige',
      ro:'la nej',
      tr:'kar'
    },
    {
      id:'w5',
      en:'le vent',
      ro:'luh von',
      tr:'rüzgar'
    },
    {
      id:'w6',
      en:'chaud',
      ro:'şo',
      tr:'sıcak'
    },
    {
      id:'w7',
      en:'froid',
      ro:'frwa',
      tr:'soğuk'
    },
    {
      id:'w8',
      en:'Quel temps fait-il ?',
      ro:'kel ton fe-til',
      tr:'Hava nasıl?'
    },
    {
      id:'w9',
      en:'Il pleut.',
      ro:'il plö',
      tr:'Yağmur yağıyor.'
    },
    {
      id:'w10',
      en:'Il neige.',
      ro:'il nej',
      tr:'Kar yağıyor.'
    },
    {
      id:'w11',
      en:'nuageux',
      ro:'nüa-jö',
      tr:'bulutlu'
    },
    {
      id:'w12',
      en:'le parapluie',
      ro:'luh pa-ra-plüi',
      tr:'şemsiye'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Hava Durumu',
      title_en:'Weather',
      explanation:'Hava cümlelerinde Il fait..., Il pleut, Il neige yapıları kullanılır.',
      table:[
        {
          pronoun:'Soru',
          form:'Quel temps fait-il ?',
          example:'Quel temps fait-il aujourd\'hui ?',
          tr:'Bugün hava nasıl?'
        },
        {
          pronoun:'Sıcak',
          form:'Il fait chaud',
          example:'Il fait chaud.',
          tr:'Hava sıcak.'
        },
        {
          pronoun:'Soğuk',
          form:'Il fait froid',
          example:'Il fait froid.',
          tr:'Hava soğuk.'
        },
        {
          pronoun:'Yağmur',
          form:'Il pleut',
          example:'Il pleut.',
          tr:'Yağmur yağıyor.'
        }
      ],
      note:'Il + fiil yapısı hava durumunda çok temel bir kalıptır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Quel temps fait-il ?',
      tr:'Hava nasıl?',
      prompt:'Soru sor'
    },
    {
      id:'sp2',
      en:'Il fait chaud et ensoleillé.',
      tr:'Hava sıcak ve güneşli.',
      prompt:'Havayı anlat'
    },
    {
      id:'sp3',
      en:'Il pleut, prends un parapluie.',
      tr:'Yağmur yağıyor, şemsiye al.',
      prompt:'Tavsiye ver'
    },
    {
      id:'sp4',
      en:'Il fait très froid.',
      tr:'Hava çok soğuk.',
      prompt:'Soğuk söyle'
    },
    {
      id:'sp5',
      en:'Demain, il va neiger.',
      tr:'Yarın kar yağacak.',
      prompt:'Tahmin söyle'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Météo',
      title_en:'Weather talk',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Quel temps fait-il aujourd\'hui ?',
          tr:'Bugün hava nasıl?',
          gramNote:'Klasik soru.',
          bd:[
            {
              ro:'Quel temps',
              tr:'hangi hava',
              role:'question',
              note:'Sohbet açar.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Il fait froid et nuageux.',
          tr:'Hava soğuk ve bulutlu.',
          gramNote:'Sıfat kullanımı.',
          bd:[
            {
              ro:'nuageux',
              tr:'bulutlu',
              role:'adj',
              note:'Hava sıfatı.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Alors, je prends une veste.',
          tr:'O zaman bir ceket alıyorum.',
          gramNote:'Plan cümlesi.',
          bd:[
            {
              ro:'je prends',
              tr:'alıyorum',
              role:'V',
              note:'Karar ifadesi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Bonne idée, et un parapluie aussi.',
          tr:'İyi fikir, bir de şemsiye.',
          gramNote:'Ek öneri.',
          bd:[
            {
              ro:'Bonne idée',
              tr:'iyi fikir',
              role:'phrase',
              note:'Onay cümlesi.'
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
      transcript:'Aujourd\'hui, il fait vingt degrés et il y a du soleil. Demain, il pleut.',
      tr:'Bugün 20 derece ve güneş var. Yarın yağmur var.',
      questions:[
        {
          q:'Aujourd\'hui ?',
          opts:[
            'pluie',
            'soleil',
            'neige',
            'vent'
          ],
          answer:1,
          tr:'Bugün hava?'
        },
        {
          q:'Demain ?',
          opts:[
            'soleil',
            'pluie',
            'neige',
            'orage'
          ],
          answer:1,
          tr:'Yarın hava?'
        },
        {
          q:'Température ?',
          opts:[
            '10',
            '15',
            '20',
            '25'
          ],
          answer:2,
          tr:'Sıcaklık kaç?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[18] = L18;
