// ders11.js — Italian Lesson 11: Health (beginner)
const L11 = {
  words:[
    {
      id:'w1',
      en:'il medico',
      ro:'il med',
      tr:'doktor',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'l\'ospedale',
      ro:'l\'ospe',
      tr:'hastane'
    },
    {
      id:'w3',
      en:'la farmacia',
      ro:'la far',
      tr:'eczane'
    },
    {
      id:'w4',
      en:'malato',
      ro:'malato',
      tr:'hasta'
    },
    {
      id:'w5',
      en:'il dolore',
      ro:'il dol',
      tr:'ağrı'
    },
    {
      id:'w6',
      en:'la febbre',
      ro:'la feb',
      tr:'ateş'
    },
    {
      id:'w7',
      en:'la tosse',
      ro:'la tos',
      tr:'öksürük'
    },
    {
      id:'w8',
      en:'il raffreddore',
      ro:'il raf',
      tr:'soğuk algınlığı'
    },
    {
      id:'w9',
      en:'il medicinale',
      ro:'il med',
      tr:'ilaç'
    },
    {
      id:'w10',
      en:'l\'appuntamento',
      ro:'l\'appu',
      tr:'randevu'
    },
    {
      id:'w11',
      en:'l\'assicurazione',
      ro:'l\'assi',
      tr:'sigorta'
    },
    {
      id:'w12',
      en:'Guarisci presto!',
      ro:'Guaris',
      tr:'Geçmiş olsun!'
    },
    {
      id:'w13',
      en:'la ricetta',
      ro:'la ric',
      tr:'reçete'
    },
    {
      id:'w14',
      en:'l\'emergenza',
      ro:'l\'emer',
      tr:'acil'
    },
    {
      id:'w15',
      en:'l\'allergia',
      ro:'l\'alle',
      tr:'alerji'
    },
    {
      id:'w16',
      en:'stordito',
      ro:'stordi',
      tr:'baş dönmesi'
    },
    {
      id:'w17',
      en:'la ferita',
      ro:'la fer',
      tr:'yara'
    },
    {
      id:'w18',
      en:'riposare',
      ro:'riposa',
      tr:'dinlenmek'
    },
    {
      id:'w19',
      en:'Ho bisogno di un medico',
      ro:'Ho bis',
      tr:'Doktora ihtiyacım var'
    },
    {
      id:'w20',
      en:'Mi fa male...',
      ro:'Mi fa ',
      tr:'... ağrıyor'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Health — Temel',
      title_en:'Health — Basics',
      explanation:'Bu derste Health konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'il medico',
          example:'il medico',
          tr:'doktor'
        },
        {
          pronoun:'Pratik',
          form:'l\'ospedale',
          example:'l\'ospedale',
          tr:'hastane'
        }
      ],
      note:'Kelime + artikel (varsa) birlikte ezberle.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'il medico',
      tr:'doktor',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'l\'ospedale',
      tr:'hastane',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'la farmacia',
      tr:'eczane',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'malato',
      tr:'hasta',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'il dolore',
      tr:'ağrı',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Health',
      title_en:'Health',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'il medico',
          tr:'doktor',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'il medico',
              tr:'doktor',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'l\'ospedale',
          tr:'hastane',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'l\'ospedale',
              tr:'hastane',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'la farmacia',
          tr:'eczane',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'malato',
          tr:'hasta',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'il medico.',
      tr:'il medico.',
      questions:[
        {
          q:'?',
          opts:[
            'il medico',
            'l\'ospedale',
            'la farmacia',
            'malato'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'??',
          opts:[
            'l\'ospedale',
            'la farmacia',
            'malato',
            'il dolore'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[11] = L11;
