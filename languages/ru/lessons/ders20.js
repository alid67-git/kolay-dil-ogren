// ders20.js — Russian Lesson 20: Daily Conversation (beginner)
const L20 = {
  words:[
    {
      id:'w1',
      en:'привет',
      ro:'privet',
      tr:'merhaba',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'как дела?',
      ro:'kak dela',
      tr:'nasılsın?'
    },
    {
      id:'w3',
      en:'я в порядке',
      ro:'ya v poryadke',
      tr:'iyiyim'
    },
    {
      id:'w4',
      en:'спасибо',
      ro:'spasibo',
      tr:'teşekkür ederim'
    },
    {
      id:'w5',
      en:'пожалуйста',
      ro:'pozhaluysta',
      tr:'lütfen'
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
      en:'где?',
      ro:'gde',
      tr:'nerede?'
    },
    {
      id:'w9',
      en:'когда?',
      ro:'kogda',
      tr:'ne zaman?'
    },
    {
      id:'w10',
      en:'почему?',
      ro:'pochemu',
      tr:'neden?'
    },
    {
      id:'w11',
      en:'как?',
      ro:'kak',
      tr:'nasıl?'
    },
    {
      id:'w12',
      en:'вы можете помочь?',
      ro:'vy mozhete pomoch',
      tr:'yardım eder misiniz?'
    },
    {
      id:'w13',
      en:'я не знаю',
      ro:'ya ne znayu',
      tr:'bilmiyorum'
    },
    {
      id:'w14',
      en:'конечно',
      ro:'konechno',
      tr:'tabii ki'
    },
    {
      id:'w15',
      en:'увидимся',
      ro:'uvidimsya',
      tr:'görüşürüz'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Daily Conversation — Temel',
      title_en:'Daily Conversation — Basics',
      explanation:'Bu derste Daily Conversation konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'привет',
          example:'привет',
          tr:'merhaba'
        },
        {
          pronoun:'Pratik',
          form:'как дела?',
          example:'как дела?',
          tr:'nasılsın?'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'привет',
      tr:'merhaba',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'как дела?',
      tr:'nasılsın?',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'я в порядке',
      tr:'iyiyim',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'спасибо',
      tr:'teşekkür ederim',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'пожалуйста',
      tr:'lütfen',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Daily Conversation',
      title_en:'Daily Conversation',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'привет',
          tr:'merhaba',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'privet',
              tr:'merhaba',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'как дела?',
          tr:'nasılsın?',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'kak dela',
              tr:'nasılsın?',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'я в порядке',
          tr:'iyiyim',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'спасибо',
          tr:'teşekkür ederim',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Привет! Как дела? Всё хорошо.',
      tr:'Привет! Как дела? Всё хорошо.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'привет',
            'как дела?',
            'я в порядке',
            'спасибо'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'как дела?',
            'я в порядке',
            'спасибо',
            'пожалуйста'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[20] = L20;
