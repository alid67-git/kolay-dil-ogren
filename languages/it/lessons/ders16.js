// ders16.js — Italian Lesson 16: Countries & Nationalities (beginner)
const L16 = {
  words:[
    {
      id:'w1',
      en:'il paese',
      ro:'il pae',
      tr:'ülke',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'la città',
      ro:'la cit',
      tr:'şehir'
    },
    {
      id:'w3',
      en:'Spagna',
      ro:'Spagna',
      tr:'İspanya'
    },
    {
      id:'w4',
      en:'Italia',
      ro:'Italia',
      tr:'İtalya'
    },
    {
      id:'w5',
      en:'Francia',
      ro:'Franci',
      tr:'Fransa'
    },
    {
      id:'w6',
      en:'Turchia',
      ro:'Turchi',
      tr:'Türkiye'
    },
    {
      id:'w7',
      en:'spagnolo',
      ro:'spagno',
      tr:'İspanyol'
    },
    {
      id:'w8',
      en:'italiano',
      ro:'italia',
      tr:'İtalyan'
    },
    {
      id:'w9',
      en:'francese',
      ro:'france',
      tr:'Fransız'
    },
    {
      id:'w10',
      en:'turco',
      ro:'turco',
      tr:'Türk'
    },
    {
      id:'w11',
      en:'europeo',
      ro:'europe',
      tr:'Avrupalı'
    },
    {
      id:'w12',
      en:'Di dove sei?',
      ro:'Di dov',
      tr:'Nerelisin?'
    },
    {
      id:'w13',
      en:'Sono di...',
      ro:'Sono d',
      tr:'...liyim'
    },
    {
      id:'w14',
      en:'vivere',
      ro:'vivere',
      tr:'yaşamak'
    },
    {
      id:'w15',
      en:'nascere',
      ro:'nascer',
      tr:'doğmak'
    },
    {
      id:'w16',
      en:'la capitale',
      ro:'la cap',
      tr:'başkent'
    },
    {
      id:'w17',
      en:'l\'estero',
      ro:'l\'este',
      tr:'yurt dışı'
    },
    {
      id:'w18',
      en:'la lingua',
      ro:'la lin',
      tr:'dil'
    },
    {
      id:'w19',
      en:'parlare',
      ro:'parlar',
      tr:'konuşmak'
    },
    {
      id:'w20',
      en:'la cultura',
      ro:'la cul',
      tr:'kültür'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Countries & Nationalities — Temel',
      title_en:'Countries & Nationalities — Basics',
      explanation:'Bu derste Countries & Nationalities konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'il paese',
          example:'il paese',
          tr:'ülke'
        },
        {
          pronoun:'Pratik',
          form:'la città',
          example:'la città',
          tr:'şehir'
        }
      ],
      note:'Kelime + artikel (varsa) birlikte ezberle.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'il paese',
      tr:'ülke',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'la città',
      tr:'şehir',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'Spagna',
      tr:'İspanya',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Italia',
      tr:'İtalya',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Francia',
      tr:'Fransa',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Countries & Nationalities',
      title_en:'Countries & Nationalities',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'il paese',
          tr:'ülke',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'il paese',
              tr:'ülke',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'la città',
          tr:'şehir',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'la città',
              tr:'şehir',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Spagna',
          tr:'İspanya',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Italia',
          tr:'İtalya',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'il paese.',
      tr:'il paese.',
      questions:[
        {
          q:'?',
          opts:[
            'il paese',
            'la città',
            'Spagna',
            'Italia'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'??',
          opts:[
            'la città',
            'Spagna',
            'Italia',
            'Francia'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[16] = L16;
