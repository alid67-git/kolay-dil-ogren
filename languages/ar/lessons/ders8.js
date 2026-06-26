// ders8.js — Arabic Lesson 8: Transport (beginner)
const L8 = {
  words:[
    {
      id:'w1',
      en:'القطار',
      ro:'al-qiṭār',
      tr:'tren',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'الحافلة',
      ro:'al-ḥāfila',
      tr:'otobüs'
    },
    {
      id:'w3',
      en:'المترو',
      ro:'al-mītrū',
      tr:'metro'
    },
    {
      id:'w4',
      en:'المطار',
      ro:'al-maṭār',
      tr:'havaalanı'
    },
    {
      id:'w5',
      en:'التذكرة',
      ro:'at-tadhkira',
      tr:'bilet'
    },
    {
      id:'w6',
      en:'جواز السفر',
      ro:'jawāz as-safar',
      tr:'pasaport'
    },
    {
      id:'w7',
      en:'المغادرة',
      ro:'al-mughādara',
      tr:'kalkış'
    },
    {
      id:'w8',
      en:'الوصول',
      ro:'al-wuṣūl',
      tr:'varış'
    },
    {
      id:'w9',
      en:'المحطة',
      ro:'al-maḥaṭṭa',
      tr:'istasyon'
    },
    {
      id:'w10',
      en:'الموقف',
      ro:'al-mawqif',
      tr:'durak'
    },
    {
      id:'w11',
      en:'المدينة',
      ro:'al-madīna',
      tr:'şehir'
    },
    {
      id:'w12',
      en:'الدولة',
      ro:'ad-dawla',
      tr:'ülke'
    },
    {
      id:'w13',
      en:'السفر',
      ro:'as-safar',
      tr:'seyahat'
    },
    {
      id:'w14',
      en:'السؤال',
      ro:'as-suʾāl',
      tr:'soru'
    },
    {
      id:'w15',
      en:'كم الساعة؟',
      ro:'kam as-sāʿa?',
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
          form:'القطار',
          example:'القطار',
          tr:'tren'
        },
        {
          pronoun:'Pratik',
          form:'الحافلة',
          example:'الحافلة',
          tr:'otobüs'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'القطار',
      tr:'tren',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'الحافلة',
      tr:'otobüs',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'المترو',
      tr:'metro',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'المطار',
      tr:'havaalanı',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'التذكرة',
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
          en:'القطار',
          tr:'tren',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'al-qiṭār',
              tr:'tren',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'الحافلة',
          tr:'otobüs',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'al-ḥāfila',
              tr:'otobüs',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'المترو',
          tr:'metro',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'المطار',
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
      transcript:'القطار يغادر الساعة العاشرة.',
      tr:'القطار يغادر الساعة العاشرة.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'القطار',
            'الحافلة',
            'المترو',
            'المطار'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'الحافلة',
            'المترو',
            'المطار',
            'التذكرة'
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
