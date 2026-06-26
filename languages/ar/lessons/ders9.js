// ders9.js — Arabic Lesson 9: Hotel (beginner)
const L9 = {
  words:[
    {
      id:'w1',
      en:'الفندق',
      ro:'al-funduq',
      tr:'otel',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'الاستقبال',
      ro:'al-istiqbāl',
      tr:'resepsiyon'
    },
    {
      id:'w3',
      en:'الحجز',
      ro:'al-ḥajz',
      tr:'rezervasyon'
    },
    {
      id:'w4',
      en:'الغرفة',
      ro:'al-ghurfa',
      tr:'oda'
    },
    {
      id:'w5',
      en:'المفتاح',
      ro:'al-miftāḥ',
      tr:'anahtar'
    },
    {
      id:'w6',
      en:'الإفطار',
      ro:'al-ifṭār',
      tr:'kahvaltı'
    },
    {
      id:'w7',
      en:'واي فاي',
      ro:'wāy fāy',
      tr:'wifi'
    },
    {
      id:'w8',
      en:'السعر',
      ro:'as-siʿr',
      tr:'fiyat'
    },
    {
      id:'w9',
      en:'البطاقة',
      ro:'al-biṭāqa',
      tr:'kart'
    },
    {
      id:'w10',
      en:'جواز السفر',
      ro:'jawāz as-safar',
      tr:'pasaport'
    },
    {
      id:'w11',
      en:'السؤال',
      ro:'as-suʾāl',
      tr:'soru'
    },
    {
      id:'w12',
      en:'شكراً',
      ro:'shukran',
      tr:'teşekkür ederim'
    },
    {
      id:'w13',
      en:'إلى اللقاء',
      ro:'ilā al-liqāʾ',
      tr:'hoşça kal'
    },
    {
      id:'w14',
      en:'اليوم',
      ro:'al-yawm',
      tr:'bugün'
    },
    {
      id:'w15',
      en:'غداً',
      ro:'ghadan',
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
          form:'الفندق',
          example:'الفندق',
          tr:'otel'
        },
        {
          pronoun:'Pratik',
          form:'الاستقبال',
          example:'الاستقبال',
          tr:'resepsiyon'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'الفندق',
      tr:'otel',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'الاستقبال',
      tr:'resepsiyon',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'الحجز',
      tr:'rezervasyon',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'الغرفة',
      tr:'oda',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'المفتاح',
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
          en:'الفندق',
          tr:'otel',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'al-funduq',
              tr:'otel',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'الاستقبال',
          tr:'resepsiyon',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'al-istiqbāl',
              tr:'resepsiyon',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'الحجز',
          tr:'rezervasyon',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'الغرفة',
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
      transcript:'لدي حجز لليلة واحدة.',
      tr:'لدي حجز لليلة واحدة.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'الفندق',
            'الاستقبال',
            'الحجز',
            'الغرفة'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'الاستقبال',
            'الحجز',
            'الغرفة',
            'المفتاح'
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
