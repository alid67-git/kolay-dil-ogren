// ders13.js — Arabic Lesson 13: Social (beginner)
const L13 = {
  words:[
    {
      id:'w1',
      en:'اجتماعي',
      ro:'ijtimāʿī',
      tr:'sosyal',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'الصديق',
      ro:'aṣ-ṣadīq',
      tr:'arkadaş'
    },
    {
      id:'w3',
      en:'الحفلة',
      ro:'al-ḥafla',
      tr:'parti'
    },
    {
      id:'w4',
      en:'السينما',
      ro:'as-sīnimā',
      tr:'sinema'
    },
    {
      id:'w5',
      en:'الموسيقى',
      ro:'al-mūsīqā',
      tr:'müzik'
    },
    {
      id:'w6',
      en:'يدعو',
      ro:'yadʿū',
      tr:'davet etmek'
    },
    {
      id:'w7',
      en:'يحتفل',
      ro:'yaḥtafil',
      tr:'kutlamak'
    },
    {
      id:'w8',
      en:'اليوم',
      ro:'al-yawm',
      tr:'bugün'
    },
    {
      id:'w9',
      en:'غداً',
      ro:'ghadan',
      tr:'yarın'
    },
    {
      id:'w10',
      en:'سعيد',
      ro:'saʿīd',
      tr:'mutlu'
    },
    {
      id:'w11',
      en:'السؤال',
      ro:'as-suʾāl',
      tr:'soru'
    },
    {
      id:'w12',
      en:'الجواب',
      ro:'al-jawāb',
      tr:'cevap'
    },
    {
      id:'w13',
      en:'أراك لاحقاً',
      ro:'arāka lāḥiqan',
      tr:'görüşürüz'
    },
    {
      id:'w14',
      en:'شكراً',
      ro:'shukran',
      tr:'teşekkür ederim'
    },
    {
      id:'w15',
      en:'إلى اللقاء',
      ro:'ilā al-liqāʾ',
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
          form:'اجتماعي',
          example:'اجتماعي',
          tr:'sosyal'
        },
        {
          pronoun:'Pratik',
          form:'الصديق',
          example:'الصديق',
          tr:'arkadaş'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'اجتماعي',
      tr:'sosyal',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'الصديق',
      tr:'arkadaş',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'الحفلة',
      tr:'parti',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'السينما',
      tr:'sinema',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'الموسيقى',
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
          en:'اجتماعي',
          tr:'sosyal',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'ijtimāʿī',
              tr:'sosyal',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'الصديق',
          tr:'arkadaş',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'aṣ-ṣadīq',
              tr:'arkadaş',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'الحفلة',
          tr:'parti',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'السينما',
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
      transcript:'غداً لدينا حفلة.',
      tr:'غداً لدينا حفلة.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'اجتماعي',
            'الصديق',
            'الحفلة',
            'السينما'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'الصديق',
            'الحفلة',
            'السينما',
            'الموسيقى'
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
