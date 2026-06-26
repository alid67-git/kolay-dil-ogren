// ders18.js — Italian Lesson 18: Weather (beginner)
const L18 = {
  words:[
    {
      id:'w1',
      en:'il tempo',
      ro:'il tem',
      tr:'hava',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'il sole',
      ro:'il sol',
      tr:'güneş'
    },
    {
      id:'w3',
      en:'la pioggia',
      ro:'la pio',
      tr:'yağmur'
    },
    {
      id:'w4',
      en:'la neve',
      ro:'la nev',
      tr:'kar'
    },
    {
      id:'w5',
      en:'il vento',
      ro:'il ven',
      tr:'rüzgar'
    },
    {
      id:'w6',
      en:'la nuvola',
      ro:'la nuv',
      tr:'bulut'
    },
    {
      id:'w7',
      en:'fa caldo',
      ro:'fa cal',
      tr:'sıcak'
    },
    {
      id:'w8',
      en:'fa freddo',
      ro:'fa fre',
      tr:'soğuk'
    },
    {
      id:'w9',
      en:'c\'è il sole',
      ro:'c\'è il',
      tr:'güneşli'
    },
    {
      id:'w10',
      en:'piove',
      ro:'piove',
      tr:'yağmurlu'
    },
    {
      id:'w11',
      en:'nevica',
      ro:'nevica',
      tr:'karlı'
    },
    {
      id:'w12',
      en:'Che tempo fa?',
      ro:'Che te',
      tr:'Hava nasıl?'
    },
    {
      id:'w13',
      en:'il temporale',
      ro:'il tem',
      tr:'fırtına'
    },
    {
      id:'w14',
      en:'umido',
      ro:'umido',
      tr:'nemli'
    },
    {
      id:'w15',
      en:'secco',
      ro:'secco',
      tr:'kuru'
    },
    {
      id:'w16',
      en:'la temperatura',
      ro:'la tem',
      tr:'sıcaklık'
    },
    {
      id:'w17',
      en:'le previsioni',
      ro:'le pre',
      tr:'hava tahmini'
    },
    {
      id:'w18',
      en:'la primavera',
      ro:'la pri',
      tr:'ilkbahar'
    },
    {
      id:'w19',
      en:'l\'estate',
      ro:'l\'esta',
      tr:'yaz'
    },
    {
      id:'w20',
      en:'l\'inverno',
      ro:'l\'inve',
      tr:'kış'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Weather — Temel',
      title_en:'Weather — Basics',
      explanation:'Bu derste Weather konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'il tempo',
          example:'il tempo',
          tr:'hava'
        },
        {
          pronoun:'Pratik',
          form:'il sole',
          example:'il sole',
          tr:'güneş'
        }
      ],
      note:'Kelime + artikel (varsa) birlikte ezberle.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'il tempo',
      tr:'hava',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'il sole',
      tr:'güneş',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'la pioggia',
      tr:'yağmur',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'la neve',
      tr:'kar',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'il vento',
      tr:'rüzgar',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Weather',
      title_en:'Weather',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'il tempo',
          tr:'hava',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'il tempo',
              tr:'hava',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'il sole',
          tr:'güneş',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'il sole',
              tr:'güneş',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'la pioggia',
          tr:'yağmur',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'la neve',
          tr:'kar',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'il tempo.',
      tr:'il tempo.',
      questions:[
        {
          q:'?',
          opts:[
            'il tempo',
            'il sole',
            'la pioggia',
            'la neve'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'??',
          opts:[
            'il sole',
            'la pioggia',
            'la neve',
            'il vento'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[18] = L18;
