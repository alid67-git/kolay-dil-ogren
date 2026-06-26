// ders8.js — Russian Lesson 8: Transport (beginner)
const L8 = {
  words:[
    {
      id:'w1',
      en:'поезд',
      ro:'poyezd',
      tr:'tren',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'автобус',
      ro:'avtobus',
      tr:'otobüs'
    },
    {
      id:'w3',
      en:'метро',
      ro:'metro',
      tr:'metro'
    },
    {
      id:'w4',
      en:'аэропорт',
      ro:'aeroport',
      tr:'havaalanı'
    },
    {
      id:'w5',
      en:'билет',
      ro:'bilet',
      tr:'bilet'
    },
    {
      id:'w6',
      en:'паспорт',
      ro:'pasport',
      tr:'pasaport'
    },
    {
      id:'w7',
      en:'отправление',
      ro:'otpravleniye',
      tr:'kalkış'
    },
    {
      id:'w8',
      en:'прибытие',
      ro:'pribytiye',
      tr:'varış'
    },
    {
      id:'w9',
      en:'станция',
      ro:'stantsiya',
      tr:'istasyon'
    },
    {
      id:'w10',
      en:'остановка',
      ro:'ostanovka',
      tr:'durak'
    },
    {
      id:'w11',
      en:'город',
      ro:'gorod',
      tr:'şehir'
    },
    {
      id:'w12',
      en:'страна',
      ro:'strana',
      tr:'ülke'
    },
    {
      id:'w13',
      en:'путешествие',
      ro:'puteshestviye',
      tr:'seyahat'
    },
    {
      id:'w14',
      en:'вопрос',
      ro:'vopros',
      tr:'soru'
    },
    {
      id:'w15',
      en:'который час?',
      ro:'kotoryy chas',
      tr:'saat kaç?'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Transport — Temel',
      title_en:'Transport — Basics',
      explanation:'Bu derste Transport konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'поезд',
          example:'поезд',
          tr:'tren'
        },
        {
          pronoun:'Pratik',
          form:'автобус',
          example:'автобус',
          tr:'otobüs'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'поезд',
      tr:'tren',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'автобус',
      tr:'otobüs',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'метро',
      tr:'metro',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'аэропорт',
      tr:'havaalanı',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'билет',
      tr:'bilet',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Transport',
      title_en:'Transport',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'поезд',
          tr:'tren',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'poyezd',
              tr:'tren',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'автобус',
          tr:'otobüs',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'avtobus',
              tr:'otobüs',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'метро',
          tr:'metro',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'аэропорт',
          tr:'havaalanı',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Поезд отправляется в десять.',
      tr:'Поезд отправляется в десять.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'поезд',
            'автобус',
            'метро',
            'аэропорт'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'автобус',
            'метро',
            'аэропорт',
            'билет'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[8] = L8;
