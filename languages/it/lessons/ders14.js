// ders14.js — Italian Lesson 14: Home & Living (beginner)
const L14 = {
  words:[
    {
      id:'w1',
      en:'la casa',
      ro:'la cas',
      tr:'ev',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'l\'appartamento',
      ro:'l\'appa',
      tr:'daire'
    },
    {
      id:'w3',
      en:'l\'affitto',
      ro:'l\'affi',
      tr:'kira'
    },
    {
      id:'w4',
      en:'la cucina',
      ro:'la cuc',
      tr:'mutfak'
    },
    {
      id:'w5',
      en:'il bagno',
      ro:'il bag',
      tr:'banyo'
    },
    {
      id:'w6',
      en:'la camera',
      ro:'la cam',
      tr:'yatak odası'
    },
    {
      id:'w7',
      en:'il soggiorno',
      ro:'il sog',
      tr:'oturma odası'
    },
    {
      id:'w8',
      en:'la porta',
      ro:'la por',
      tr:'kapı'
    },
    {
      id:'w9',
      en:'la finestra',
      ro:'la fin',
      tr:'pencere'
    },
    {
      id:'w10',
      en:'i mobili',
      ro:'i mobi',
      tr:'mobilya'
    },
    {
      id:'w11',
      en:'il letto',
      ro:'il let',
      tr:'yatak'
    },
    {
      id:'w12',
      en:'il tavolo',
      ro:'il tav',
      tr:'masa'
    },
    {
      id:'w13',
      en:'la sedia',
      ro:'la sed',
      tr:'sandalye'
    },
    {
      id:'w14',
      en:'il divano',
      ro:'il div',
      tr:'kanepe'
    },
    {
      id:'w15',
      en:'l\'armadio',
      ro:'l\'arma',
      tr:'dolap'
    },
    {
      id:'w16',
      en:'il frigorifero',
      ro:'il fri',
      tr:'buzdolabı'
    },
    {
      id:'w17',
      en:'la lavatrice',
      ro:'la lav',
      tr:'çamaşır makinesi'
    },
    {
      id:'w18',
      en:'il balcone',
      ro:'il bal',
      tr:'balkon'
    },
    {
      id:'w19',
      en:'il giardino',
      ro:'il gia',
      tr:'bahçe'
    },
    {
      id:'w20',
      en:'vivere',
      ro:'vivere',
      tr:'yaşamak'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Home & Living — Temel',
      title_en:'Home & Living — Basics',
      explanation:'Bu derste Home & Living konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'la casa',
          example:'la casa',
          tr:'ev'
        },
        {
          pronoun:'Pratik',
          form:'l\'appartamento',
          example:'l\'appartamento',
          tr:'daire'
        }
      ],
      note:'Kelime + artikel (varsa) birlikte ezberle.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'la casa',
      tr:'ev',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'l\'appartamento',
      tr:'daire',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'l\'affitto',
      tr:'kira',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'la cucina',
      tr:'mutfak',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'il bagno',
      tr:'banyo',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Home & Living',
      title_en:'Home & Living',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'la casa',
          tr:'ev',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'la casa',
              tr:'ev',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'l\'appartamento',
          tr:'daire',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'l\'appartamento',
              tr:'daire',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'l\'affitto',
          tr:'kira',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'la cucina',
          tr:'mutfak',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'la casa.',
      tr:'la casa.',
      questions:[
        {
          q:'?',
          opts:[
            'la casa',
            'l\'appartamento',
            'l\'affitto',
            'la cucina'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'??',
          opts:[
            'l\'appartamento',
            'l\'affitto',
            'la cucina',
            'il bagno'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[14] = L14;
