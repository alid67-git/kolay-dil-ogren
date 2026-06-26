// ders18.js � Spanish Lesson 18: Weather (beginner)
const L18 = {
  words:[
    {
      id:'w1',
      en:'el tiempo',
      ro:'el TYEM-po',
      tr:'hava'
    },
    {
      id:'w2',
      en:'el sol',
      ro:'el sol',
      tr:'güne�x'
    },
    {
      id:'w3',
      en:'la lluvia',
      ro:'la YU-vya',
      tr:'ya�xmur'
    },
    {
      id:'w4',
      en:'la nieve',
      ro:'la NYE-ve',
      tr:'kar'
    },
    {
      id:'w5',
      en:'el viento',
      ro:'el BYEN-to',
      tr:'rüzgar'
    },
    {
      id:'w6',
      en:'caluroso',
      ro:'ka-lu-RO-so',
      tr:'sıcak'
    },
    {
      id:'w7',
      en:'frío',
      ro:'FRI-o',
      tr:'so�xuk'
    },
    {
      id:'w8',
      en:'¿Qué tiempo hace?',
      ro:'ke TYEM-po A-se',
      tr:'Hava nasıl?'
    },
    {
      id:'w9',
      en:'Está lloviendo.',
      ro:'es-TA yo-BYEN-do',
      tr:'Ya�xmur ya�xıyor.'
    },
    {
      id:'w10',
      en:'Está nevando.',
      ro:'es-TA ne-VAN-do',
      tr:'Kar ya�xıyor.'
    },
    {
      id:'w11',
      en:'nublado',
      ro:'nu-BLA-do',
      tr:'bulutlu'
    },
    {
      id:'w12',
      en:'el paraguas',
      ro:'el pa-ra-GWAS',
      tr:'�xemsiye'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Hava Durumu',
      title_en:'Weather',
      explanation:'İspanyolcada hava hacer ile: Hace calor/frío. Está lloviendo = ya�xmur ya�xıyor. Hace sol = güne�x parlıyor. ¿Qué tiempo hace hoy? = Bugün hava nasıl?',
      table:[
        {
          pronoun:'Soru',
          form:'¿Qué tiempo hace?',
          example:'¿Qué tiempo hace hoy?',
          tr:'Bugün hava nasıl?'
        },
        {
          pronoun:'Sıcaklık',
          form:'Hace ... grados',
          example:'Hace veinte grados.',
          tr:'Hava yirmi derece.'
        },
        {
          pronoun:'Ya�xı�x',
          form:'Está lloviendo / nevando',
          example:'Hoy está lloviendo.',
          tr:'Bugün ya�xmur ya�xıyor.'
        },
        {
          pronoun:'Tavsiye',
          form:'¡Lleva un paraguas!',
          example:'Va a llover.',
          tr:'Ya�xmur ya�xacak.'
        }
      ],
      note:'İspanya\'da güney sıcak, kuzey ya�xı�xlı � �xemsiye ta�xı!'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'¿Qué tiempo hace hoy?',
      tr:'Bugün hava nasıl?',
      prompt:'Hava sor'
    },
    {
      id:'sp2',
      en:'Hace calor y hay sol.',
      tr:'Hava sıcak ve güne�xli.',
      prompt:'Hava durumu söyle'
    },
    {
      id:'sp3',
      en:'Está lloviendo. Necesito un paraguas.',
      tr:'Ya�xmur ya�xıyor. Şemsiyeye ihtiyacım var.',
      prompt:'Ya�xmurdan bahset'
    },
    {
      id:'sp4',
      en:'¡Hace mucho frío!',
      tr:'Hava çok so�xuk!',
      prompt:'So�xuktan bahset'
    },
    {
      id:'sp5',
      en:'Mañana va a nevar.',
      tr:'Yarın kar ya�xacak.',
      prompt:'Tahmin söyle'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Hablar del tiempo',
      title_en:'Weather Talk',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'¿Qué tiempo hace hoy?',
          tr:'Bugün hava nasıl?',
          gramNote:'Klasik sohbet açılı�xı.',
          bd:[
            {
              ro:'tiempo',
              tr:'hava',
              role:'O',
              note:'El tiempo = hava durumu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Hace frío y está nublado. Dos grados bajo cero.',
          tr:'So�xuk ve bulutlu. Eksi iki derece.',
          gramNote:[
            {
              ro:'nublado',
              tr:'bulutlu',
              role:'adj',
              note:'Hava sıfatı.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'¡Vaya! Entonces necesito un abrigo.',
          tr:'Oh! O zaman sıcak bir monta ihtiyacım var.',
          gramNote:[
            {
              ro:'un abrigo',
              tr:'mont / palto',
              role:'O',
              note:'Eril �  un.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Sí, y quizás una bufanda. Va a hacer viento.',
          tr:'Evet, belki bir atkı. Rüzgarlı olacak.',
          gramNote:[
            {
              ro:'viento',
              tr:'rüzgar',
              role:'O',
              note:'Va a hacer = olacak (gelecek).'
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
      transcript:'Hoy hace sol y calor, veinte grados. Mañana va a llover. El fin de semana quizás nieva.',
      tr:'Bugün güne�xli ve sıcak, yirmi derece. Yarın ya�xmur ya�xacak. Hafta sonu belki kar ya�xar.',
      questions:[
        {
          q:'¿Qué tiempo hace hoy?',
          opts:[
            'lluvioso',
            'soleado y caluroso',
            'nieve',
            'ventoso'
          ],
          answer:1,
          tr:'Bugün hava nasıl?'
        },
        {
          q:'¿Qué pasa mañana?',
          opts:[
            'sol',
            'lluvia',
            'nieve',
            'viento'
          ],
          answer:1,
          tr:'Yarın ne oluyor?'
        },
        {
          q:'¿Qué pasa el fin de semana?',
          opts:[
            'lluvia',
            'sol',
            'nieve quizás',
            'tormenta'
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
