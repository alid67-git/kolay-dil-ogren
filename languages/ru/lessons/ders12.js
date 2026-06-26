// ders12.js — Russian Lesson 12: Phone (beginner)
const L12 = {
  words:[
    {
      id:'w1',
      en:'звонить',
      ro:'zvonit',
      tr:'aramak',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'сообщение',
      ro:'soobshcheniye',
      tr:'mesaj'
    },
    {
      id:'w3',
      en:'электронная почта',
      ro:'elektronnaya pochta',
      tr:'e-posta'
    },
    {
      id:'w4',
      en:'номер телефона',
      ro:'nomer telefona',
      tr:'telefon numarası'
    },
    {
      id:'w5',
      en:'повторите, пожалуйста',
      ro:'povtorite pozhaluysta',
      tr:'tekrar eder misiniz?'
    },
    {
      id:'w6',
      en:'вопрос',
      ro:'vopros',
      tr:'soru'
    },
    {
      id:'w7',
      en:'ответ',
      ro:'otvet',
      tr:'cevap'
    },
    {
      id:'w8',
      en:'помогать',
      ro:'pomogat',
      tr:'yardım etmek'
    },
    {
      id:'w9',
      en:'сегодня',
      ro:'segodnya',
      tr:'bugün'
    },
    {
      id:'w10',
      en:'завтра',
      ro:'zavtra',
      tr:'yarın'
    },
    {
      id:'w11',
      en:'интернет',
      ro:'internet',
      tr:'internet'
    },
    {
      id:'w12',
      en:'приложение',
      ro:'prilozheniye',
      tr:'uygulama'
    },
    {
      id:'w13',
      en:'скачивать',
      ro:'skachivat',
      tr:'indirmek'
    },
    {
      id:'w14',
      en:'загружать',
      ro:'zagruzhat',
      tr:'yüklemek'
    },
    {
      id:'w15',
      en:'нажимать',
      ro:'nazhimat',
      tr:'tıklamak'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Phone — Temel',
      title_en:'Phone — Basics',
      explanation:'Bu derste Phone konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'звонить',
          example:'звонить',
          tr:'aramak'
        },
        {
          pronoun:'Pratik',
          form:'сообщение',
          example:'сообщение',
          tr:'mesaj'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'звонить',
      tr:'aramak',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'сообщение',
      tr:'mesaj',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'электронная почта',
      tr:'e-posta',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'номер телефона',
      tr:'telefon numarası',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'повторите, пожалуйста',
      tr:'tekrar eder misiniz?',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Phone',
      title_en:'Phone',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'звонить',
          tr:'aramak',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'zvonit',
              tr:'aramak',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'сообщение',
          tr:'mesaj',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'soobshcheniye',
              tr:'mesaj',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'электронная почта',
          tr:'e-posta',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'номер телефона',
          tr:'telefon numarası',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Позвони мне вечером.',
      tr:'Позвони мне вечером.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'звонить',
            'сообщение',
            'электронная почта',
            'номер телефона'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'сообщение',
            'электронная почта',
            'номер телефона',
            'повторите, пожалуйста'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[12] = L12;
