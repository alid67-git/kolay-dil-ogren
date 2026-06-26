// ders17.js — Italian Lesson 17: Emotions & Feelings (beginner)
const L17 = {
  words:[
    {
      id:'w1',
      en:'felice',
      ro:'felice',
      tr:'mutlu',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'triste',
      ro:'triste',
      tr:'üzgün'
    },
    {
      id:'w3',
      en:'arrabbiato',
      ro:'arrabb',
      tr:'kızgın'
    },
    {
      id:'w4',
      en:'nervoso',
      ro:'nervos',
      tr:'gergin'
    },
    {
      id:'w5',
      en:'stanco',
      ro:'stanco',
      tr:'yorgun'
    },
    {
      id:'w6',
      en:'emozionato',
      ro:'emozio',
      tr:'heyecanlı'
    },
    {
      id:'w7',
      en:'preoccupato',
      ro:'preocc',
      tr:'endişeli'
    },
    {
      id:'w8',
      en:'sorpreso',
      ro:'sorpre',
      tr:'şaşkın'
    },
    {
      id:'w9',
      en:'spaventato',
      ro:'spaven',
      tr:'korkmuş'
    },
    {
      id:'w10',
      en:'orgoglioso',
      ro:'orgogl',
      tr:'gururlu'
    },
    {
      id:'w11',
      en:'imbarazzato',
      ro:'imbara',
      tr:'utanmış'
    },
    {
      id:'w12',
      en:'Mi sento...',
      ro:'Mi sen',
      tr:'Kendimi ... hissediyorum'
    },
    {
      id:'w13',
      en:'contento',
      ro:'conten',
      tr:'memnun'
    },
    {
      id:'w14',
      en:'ansioso',
      ro:'ansios',
      tr:'kaygılı'
    },
    {
      id:'w15',
      en:'rilassato',
      ro:'rilass',
      tr:'rahat'
    },
    {
      id:'w16',
      en:'confuso',
      ro:'confus',
      tr:'kafası karışık'
    },
    {
      id:'w17',
      en:'solo',
      ro:'solo',
      tr:'yalnız'
    },
    {
      id:'w18',
      en:'innamorato',
      ro:'innamo',
      tr:'aşık'
    },
    {
      id:'w19',
      en:'Sono felice',
      ro:'Sono f',
      tr:'Mutluyum'
    },
    {
      id:'w20',
      en:'Sono triste',
      ro:'Sono t',
      tr:'Üzgünüm'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Emotions & Feelings — Temel',
      title_en:'Emotions & Feelings — Basics',
      explanation:'Bu derste Emotions & Feelings konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'felice',
          example:'felice',
          tr:'mutlu'
        },
        {
          pronoun:'Pratik',
          form:'triste',
          example:'triste',
          tr:'üzgün'
        }
      ],
      note:'Kelime + artikel (varsa) birlikte ezberle.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'felice',
      tr:'mutlu',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'triste',
      tr:'üzgün',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'arrabbiato',
      tr:'kızgın',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'nervoso',
      tr:'gergin',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'stanco',
      tr:'yorgun',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Emotions & Feelings',
      title_en:'Emotions & Feelings',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'felice',
          tr:'mutlu',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'felice',
              tr:'mutlu',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'triste',
          tr:'üzgün',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'triste',
              tr:'üzgün',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'arrabbiato',
          tr:'kızgın',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'nervoso',
          tr:'gergin',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'felice.',
      tr:'felice.',
      questions:[
        {
          q:'?',
          opts:[
            'felice',
            'triste',
            'arrabbiato',
            'nervoso'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'??',
          opts:[
            'triste',
            'arrabbiato',
            'nervoso',
            'stanco'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[17] = L17;
