// ders4.js — Arabic Lesson 4: Time & Date (beginner)
const L4 = {
  words:[
    {
      id:'w1',
      en:'كم الساعة؟',
      ro:'kam as-sāʿa?',
      tr:'saat kaç?',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'اليوم',
      ro:'al-yawm',
      tr:'bugün'
    },
    {
      id:'w3',
      en:'غداً',
      ro:'ghadan',
      tr:'yarın'
    },
    {
      id:'w4',
      en:'أمس',
      ro:'ams',
      tr:'dün'
    },
    {
      id:'w5',
      en:'الاثنين',
      ro:'al-ithnayn',
      tr:'pazartesi'
    },
    {
      id:'w6',
      en:'الثلاثاء',
      ro:'ath-thulāthāʾ',
      tr:'salı'
    },
    {
      id:'w7',
      en:'الأربعاء',
      ro:'al-arbiʿāʾ',
      tr:'çarşamba'
    },
    {
      id:'w8',
      en:'الخميس',
      ro:'al-khamīs',
      tr:'perşembe'
    },
    {
      id:'w9',
      en:'الجمعة',
      ro:'al-jumʿa',
      tr:'cuma'
    },
    {
      id:'w10',
      en:'السبت',
      ro:'as-sabt',
      tr:'cumartesi'
    },
    {
      id:'w11',
      en:'الأحد',
      ro:'al-aḥad',
      tr:'pazar'
    },
    {
      id:'w12',
      en:'الصباح',
      ro:'aṣ-ṣabāḥ',
      tr:'sabah'
    },
    {
      id:'w13',
      en:'المساء',
      ro:'al-masāʾ',
      tr:'akşam'
    },
    {
      id:'w14',
      en:'التاريخ',
      ro:'at-tārīkh',
      tr:'tarih'
    },
    {
      id:'w15',
      en:'التقويم',
      ro:'at-taqwīm',
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
          form:'كم الساعة؟',
          example:'كم الساعة؟',
          tr:'saat kaç?'
        },
        {
          pronoun:'Pratik',
          form:'اليوم',
          example:'اليوم',
          tr:'bugün'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'كم الساعة؟',
      tr:'saat kaç?',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'اليوم',
      tr:'bugün',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'غداً',
      tr:'yarın',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'أمس',
      tr:'dün',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'الاثنين',
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
          en:'كم الساعة؟',
          tr:'saat kaç?',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'kam as-sāʿa?',
              tr:'saat kaç?',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'اليوم',
          tr:'bugün',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'al-yawm',
              tr:'bugün',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'غداً',
          tr:'yarın',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'أمس',
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
      transcript:'اليوم الأربعاء. الدرس في التاسعة.',
      tr:'اليوم الأربعاء.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'كم الساعة؟',
            'اليوم',
            'غداً',
            'أمس'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'اليوم',
            'غداً',
            'أمس',
            'الاثنين'
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
