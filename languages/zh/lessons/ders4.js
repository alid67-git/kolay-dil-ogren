// ders4.js — Chinese Lesson 4: Time & Date (beginner)
const L4 = {
  words:[
    {
      id:'w1',
      en:'几点了？',
      ro:'jǐ diǎn le?',
      tr:'saat kaç?',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'今天',
      ro:'jīntiān',
      tr:'bugün'
    },
    {
      id:'w3',
      en:'明天',
      ro:'míngtiān',
      tr:'yarın'
    },
    {
      id:'w4',
      en:'昨天',
      ro:'zuótiān',
      tr:'dün'
    },
    {
      id:'w5',
      en:'星期一',
      ro:'xīngqīyī',
      tr:'pazartesi'
    },
    {
      id:'w6',
      en:'星期二',
      ro:'xīngqī\'èr',
      tr:'salı'
    },
    {
      id:'w7',
      en:'星期三',
      ro:'xīngqīsān',
      tr:'çarşamba'
    },
    {
      id:'w8',
      en:'星期四',
      ro:'xīngqīsì',
      tr:'perşembe'
    },
    {
      id:'w9',
      en:'星期五',
      ro:'xīngqīwǔ',
      tr:'cuma'
    },
    {
      id:'w10',
      en:'星期六',
      ro:'xīngqīliù',
      tr:'cumartesi'
    },
    {
      id:'w11',
      en:'星期日',
      ro:'xīngqīrì',
      tr:'pazar'
    },
    {
      id:'w12',
      en:'早上',
      ro:'zǎoshang',
      tr:'sabah'
    },
    {
      id:'w13',
      en:'晚上',
      ro:'wǎnshang',
      tr:'akşam'
    },
    {
      id:'w14',
      en:'日期',
      ro:'rìqī',
      tr:'tarih'
    },
    {
      id:'w15',
      en:'日历',
      ro:'rìlì',
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
          form:'几点了？',
          example:'几点了？',
          tr:'saat kaç?'
        },
        {
          pronoun:'Pratik',
          form:'今天',
          example:'今天',
          tr:'bugün'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'几点了？',
      tr:'saat kaç?',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'今天',
      tr:'bugün',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'明天',
      tr:'yarın',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'昨天',
      tr:'dün',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'星期一',
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
          en:'几点了？',
          tr:'saat kaç?',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'jǐ diǎn le?',
              tr:'saat kaç?',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'今天',
          tr:'bugün',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'jīntiān',
              tr:'bugün',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'明天',
          tr:'yarın',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'昨天',
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
      transcript:'今天星期三，课在九点。',
      tr:'今天星期三，课在九点.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            '几点了？',
            '今天',
            '明天',
            '昨天'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            '今天',
            '明天',
            '昨天',
            '星期一'
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
