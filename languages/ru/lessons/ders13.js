// ders13.js — Russian Lesson 13: Social (beginner)
const L13 = {
  words:[
    {
      id:'w1',
      en:'социальный',
      ro:'sotsialnyy',
      tr:'sosyal',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'друг',
      ro:'drug',
      tr:'arkadaş'
    },
    {
      id:'w3',
      en:'вечеринка',
      ro:'vecherinka',
      tr:'parti'
    },
    {
      id:'w4',
      en:'кино',
      ro:'kino',
      tr:'sinema'
    },
    {
      id:'w5',
      en:'музыка',
      ro:'muzyka',
      tr:'müzik'
    },
    {
      id:'w6',
      en:'приглашать',
      ro:'priglashat',
      tr:'davet etmek'
    },
    {
      id:'w7',
      en:'праздновать',
      ro:'prazdnovat',
      tr:'kutlamak'
    },
    {
      id:'w8',
      en:'сегодня',
      ro:'segodnya',
      tr:'bugün'
    },
    {
      id:'w9',
      en:'завтра',
      ro:'zavtra',
      tr:'yarın'
    },
    {
      id:'w10',
      en:'счастливый',
      ro:'schastlivyy',
      tr:'mutlu'
    },
    {
      id:'w11',
      en:'вопрос',
      ro:'vopros',
      tr:'soru'
    },
    {
      id:'w12',
      en:'ответ',
      ro:'otvet',
      tr:'cevap'
    },
    {
      id:'w13',
      en:'увидимся',
      ro:'uvidimsya',
      tr:'görüşürüz'
    },
    {
      id:'w14',
      en:'спасибо',
      ro:'spasibo',
      tr:'teşekkür ederim'
    },
    {
      id:'w15',
      en:'до свидания',
      ro:'do svidaniya',
      tr:'hoşça kal'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Social — Temel',
      title_en:'Social — Basics',
      explanation:'Bu derste Social konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'социальный',
          example:'социальный',
          tr:'sosyal'
        },
        {
          pronoun:'Pratik',
          form:'друг',
          example:'друг',
          tr:'arkadaş'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'социальный',
      tr:'sosyal',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'друг',
      tr:'arkadaş',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'вечеринка',
      tr:'parti',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'кино',
      tr:'sinema',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'музыка',
      tr:'müzik',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Social',
      title_en:'Social',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'социальный',
          tr:'sosyal',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'sotsialnyy',
              tr:'sosyal',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'друг',
          tr:'arkadaş',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'drug',
              tr:'arkadaş',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'вечеринка',
          tr:'parti',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'кино',
          tr:'sinema',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Завтра у нас вечеринка.',
      tr:'Завтра у нас вечеринка.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'социальный',
            'друг',
            'вечеринка',
            'кино'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'друг',
            'вечеринка',
            'кино',
            'музыка'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[13] = L13;
