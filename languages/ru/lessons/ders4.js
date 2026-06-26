// ders4.js — Russian Lesson 4: Time & Date (beginner)
const L4 = {
  words:[
    {
      id:'w1',
      en:'который час?',
      ro:'kotoryy chas',
      tr:'saat kaç?',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'сегодня',
      ro:'segodnya',
      tr:'bugün'
    },
    {
      id:'w3',
      en:'завтра',
      ro:'zavtra',
      tr:'yarın'
    },
    {
      id:'w4',
      en:'вчера',
      ro:'vchera',
      tr:'dün'
    },
    {
      id:'w5',
      en:'понедельник',
      ro:'ponedelnik',
      tr:'pazartesi'
    },
    {
      id:'w6',
      en:'вторник',
      ro:'vtornik',
      tr:'salı'
    },
    {
      id:'w7',
      en:'среда',
      ro:'sreda',
      tr:'çarşamba'
    },
    {
      id:'w8',
      en:'четверг',
      ro:'chetverg',
      tr:'perşembe'
    },
    {
      id:'w9',
      en:'пятница',
      ro:'pyatnitsa',
      tr:'cuma'
    },
    {
      id:'w10',
      en:'суббота',
      ro:'subbota',
      tr:'cumartesi'
    },
    {
      id:'w11',
      en:'воскресенье',
      ro:'voskresenye',
      tr:'pazar'
    },
    {
      id:'w12',
      en:'утро',
      ro:'utro',
      tr:'sabah'
    },
    {
      id:'w13',
      en:'вечер',
      ro:'vecher',
      tr:'akşam'
    },
    {
      id:'w14',
      en:'дата',
      ro:'data',
      tr:'tarih'
    },
    {
      id:'w15',
      en:'календарь',
      ro:'kalendar',
      tr:'takvim'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Time & Date — Temel',
      title_en:'Time & Date — Basics',
      explanation:'Bu derste Time & Date konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'который час?',
          example:'который час?',
          tr:'saat kaç?'
        },
        {
          pronoun:'Pratik',
          form:'сегодня',
          example:'сегодня',
          tr:'bugün'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'который час?',
      tr:'saat kaç?',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'сегодня',
      tr:'bugün',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'завтра',
      tr:'yarın',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'вчера',
      tr:'dün',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'понедельник',
      tr:'pazartesi',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Time & Date',
      title_en:'Time & Date',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'который час?',
          tr:'saat kaç?',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'kotoryy chas',
              tr:'saat kaç?',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'сегодня',
          tr:'bugün',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'segodnya',
              tr:'bugün',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'завтра',
          tr:'yarın',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'вчера',
          tr:'dün',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Сегодня среда. Урок в девять.',
      tr:'Сегодня среда.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'который час?',
            'сегодня',
            'завтра',
            'вчера'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'сегодня',
            'завтра',
            'вчера',
            'понедельник'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[4] = L4;
