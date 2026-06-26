// ders7.js — Italian Lesson 7: Directions (beginner)
const L7 = {
  words:[
    {
      id:'w1',
      en:'Dov\'è...?',
      ro:'Dov\'è.',
      tr:'... nerede?',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'a sinistra',
      ro:'a sini',
      tr:'sol'
    },
    {
      id:'w3',
      en:'a destra',
      ro:'a dest',
      tr:'sağ'
    },
    {
      id:'w4',
      en:'dritto',
      ro:'dritto',
      tr:'düz'
    },
    {
      id:'w5',
      en:'l\'angolo',
      ro:'l\'ango',
      tr:'köşe'
    },
    {
      id:'w6',
      en:'la strada',
      ro:'la str',
      tr:'cadde'
    },
    {
      id:'w7',
      en:'la stazione',
      ro:'la sta',
      tr:'istasyon'
    },
    {
      id:'w8',
      en:'la fermata',
      ro:'la fer',
      tr:'durak'
    },
    {
      id:'w9',
      en:'il semaforo',
      ro:'il sem',
      tr:'trafik lambası'
    },
    {
      id:'w10',
      en:'attraversare',
      ro:'attrav',
      tr:'karşıdan geçmek'
    },
    {
      id:'w11',
      en:'l\'incrocio',
      ro:'l\'incr',
      tr:'kavşak'
    },
    {
      id:'w12',
      en:'vicino',
      ro:'vicino',
      tr:'yakında'
    },
    {
      id:'w13',
      en:'lontano',
      ro:'lontan',
      tr:'uzakta'
    },
    {
      id:'w14',
      en:'la mappa',
      ro:'la map',
      tr:'harita'
    },
    {
      id:'w15',
      en:'la direzione',
      ro:'la dir',
      tr:'yön'
    },
    {
      id:'w16',
      en:'seguire',
      ro:'seguir',
      tr:'takip etmek'
    },
    {
      id:'w17',
      en:'girare',
      ro:'girare',
      tr:'dönmek'
    },
    {
      id:'w18',
      en:'la piazza',
      ro:'la pia',
      tr:'meydan'
    },
    {
      id:'w19',
      en:'la banca',
      ro:'la ban',
      tr:'banka'
    },
    {
      id:'w20',
      en:'Come arrivo a...?',
      ro:'Come a',
      tr:'... nasıl giderim?'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Directions — Temel',
      title_en:'Directions — Basics',
      explanation:'Bu derste Directions konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'Dov\\\'è...?',
          example:'Dov\\\'è...?',
          tr:'... nerede?'
        },
        {
          pronoun:'Pratik',
          form:'a sinistra',
          example:'a sinistra',
          tr:'sol'
        }
      ],
      note:'Kelime + artikel (varsa) birlikte ezberle.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Dov\\\'è...?',
      tr:'... nerede?',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'a sinistra',
      tr:'sol',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'a destra',
      tr:'sağ',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'dritto',
      tr:'düz',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'l\'angolo',
      tr:'köşe',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Directions',
      title_en:'Directions',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Dov\'è...?',
          tr:'... nerede?',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'Dov\'è...?',
              tr:'... nerede?',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'a sinistra',
          tr:'sol',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'a sinistra',
              tr:'sol',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'a destra',
          tr:'sağ',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'dritto',
          tr:'düz',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Dov\'è...?.',
      tr:'Dov\'è.',
      questions:[
        {
          q:'?',
          opts:[
            'Dov\'è...?',
            'a sinistra',
            'a destra',
            'dritto'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'??',
          opts:[
            'a sinistra',
            'a destra',
            'dritto',
            'l\'angolo'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[7] = L7;
