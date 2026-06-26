// ders9.js — Russian Lesson 9: Hotel (beginner)
const L9 = {
  words:[
    {
      id:'w1',
      en:'отель',
      ro:'otel',
      tr:'otel',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'ресепшн',
      ro:'resepshn',
      tr:'resepsiyon'
    },
    {
      id:'w3',
      en:'бронь',
      ro:'bron',
      tr:'rezervasyon'
    },
    {
      id:'w4',
      en:'комната',
      ro:'komnata',
      tr:'oda'
    },
    {
      id:'w5',
      en:'ключ',
      ro:'klyuch',
      tr:'anahtar'
    },
    {
      id:'w6',
      en:'завтрак',
      ro:'zavtrak',
      tr:'kahvaltı'
    },
    {
      id:'w7',
      en:'вайфай',
      ro:'vayfay',
      tr:'wifi'
    },
    {
      id:'w8',
      en:'цена',
      ro:'tsena',
      tr:'fiyat'
    },
    {
      id:'w9',
      en:'карта',
      ro:'karta',
      tr:'kart'
    },
    {
      id:'w10',
      en:'паспорт',
      ro:'pasport',
      tr:'pasaport'
    },
    {
      id:'w11',
      en:'вопрос',
      ro:'vopros',
      tr:'soru'
    },
    {
      id:'w12',
      en:'спасибо',
      ro:'spasibo',
      tr:'teşekkür ederim'
    },
    {
      id:'w13',
      en:'до свидания',
      ro:'do svidaniya',
      tr:'hoşça kal'
    },
    {
      id:'w14',
      en:'сегодня',
      ro:'segodnya',
      tr:'bugün'
    },
    {
      id:'w15',
      en:'завтра',
      ro:'zavtra',
      tr:'yarın'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Hotel — Temel',
      title_en:'Hotel — Basics',
      explanation:'Bu derste Hotel konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'отель',
          example:'отель',
          tr:'otel'
        },
        {
          pronoun:'Pratik',
          form:'ресепшн',
          example:'ресепшн',
          tr:'resepsiyon'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'отель',
      tr:'otel',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'ресепшн',
      tr:'resepsiyon',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'бронь',
      tr:'rezervasyon',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'комната',
      tr:'oda',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'ключ',
      tr:'anahtar',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Hotel',
      title_en:'Hotel',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'отель',
          tr:'otel',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'otel',
              tr:'otel',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'ресепшн',
          tr:'resepsiyon',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'resepshn',
              tr:'resepsiyon',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'бронь',
          tr:'rezervasyon',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'комната',
          tr:'oda',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'У меня бронь на одну ночь.',
      tr:'У меня бронь на одну ночь.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'отель',
            'ресепшн',
            'бронь',
            'комната'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'ресепшн',
            'бронь',
            'комната',
            'ключ'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[9] = L9;
