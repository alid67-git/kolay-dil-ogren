// ders4.js — Turkish Lesson 4: Time & Date (beginner)
const L4 = {
  words:[
    {
      id:'w1',
      en:'Saat kaç?',
      ro:'sa-at kach',
      tr:'what time is it?', tr_th:'กี่โมงแล้ว?',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Bugün',
      ro:'bu-guen',
      tr:'today', tr_th:'วันนี้'
    },
    {
      id:'w3',
      en:'Yarın',
      ro:'ya-ruhn',
      tr:'tomorrow', tr_th:'พรุ่งนี้'
    },
    {
      id:'w4',
      en:'Dün',
      ro:'duen',
      tr:'yesterday', tr_th:'เมื่อวาน'
    },
    {
      id:'w5',
      en:'Pazartesi',
      ro:'pa-zar-te-si',
      tr:'Monday'
    },
    {
      id:'w6',
      en:'Salı',
      ro:'sa-luh',
      tr:'Tuesday'
    },
    {
      id:'w7',
      en:'Çarşamba',
      ro:'char-sham-ba',
      tr:'Wednesday'
    },
    {
      id:'w8',
      en:'Perşembe',
      ro:'per-shem-be',
      tr:'Thursday'
    },
    {
      id:'w9',
      en:'Cuma',
      ro:'ju-ma',
      tr:'Friday'
    },
    {
      id:'w10',
      en:'Cumartesi',
      ro:'ju-mar-te-si',
      tr:'Saturday'
    },
    {
      id:'w11',
      en:'Pazar',
      ro:'pa-zar',
      tr:'Sunday'
    },
    {
      id:'w12',
      en:'Sabah',
      ro:'sa-bah',
      tr:'morning'
    },
    {
      id:'w13',
      en:'Akşam',
      ro:'ak-sham',
      tr:'evening'
    },
    {
      id:'w14',
      en:'Tarih',
      ro:'ta-rih',
      tr:'date'
    },
    {
      id:'w15',
      en:'Takvim',
      ro:'tak-vim',
      tr:'calendar'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Time & Date — Temel',
      title_en:'Time & Date — Basics',
      explanation:'Bu derste Time & Date alanında sık kullanılan ifadeleri öğreniyorsun. Açıklamalar Türkçe verilir. Ali erkek öğrenci olarak örnek cümleleri kullanır.',
      table:[
        {
          pronoun:'Örnek 1',
          form:'Saat kaç?',
          example:'Saat kaç?',
          tr:'what time is it?', tr_th:'กี่โมงแล้ว?'
        },
        {
          pronoun:'Örnek 2',
          form:'Bugün',
          example:'Bugün',
          tr:'today', tr_th:'วันนี้'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Saat kaç?',
      tr:'what time is it?', tr_th:'กี่โมงแล้ว?',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Bugün',
      tr:'today', tr_th:'วันนี้',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'Yarın',
      tr:'tomorrow', tr_th:'พรุ่งนี้',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Dün',
      tr:'yesterday', tr_th:'เมื่อวาน',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Pazartesi',
      tr:'Monday',
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
          en:'Saat kaç?',
          tr:'what time is it?', tr_th:'กี่โมงแล้ว?',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'sa-at kach',
              tr:'what time is it?', tr_th:'กี่โมงแล้ว?',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Bugün',
          tr:'today', tr_th:'วันนี้',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'bu-guen',
              tr:'today', tr_th:'วันนี้',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Yarın',
          tr:'tomorrow', tr_th:'พรุ่งนี้',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Dün',
          tr:'yesterday', tr_th:'เมื่อวาน',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Bugün çarşamba. Ders saat dokuzda.',
      tr:'Today is Wednesday. The lesson is at nine.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'Saat kaç?',
            'Bugün',
            'Yarın',
            'Dün'
          ],
          answer:0,
          tr:'Doğru kelimeyi seç.', tr_th:'เลือกคำที่ถูกต้อง'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'Bugün',
            'Yarın',
            'Dün',
            'Pazartesi'
          ],
          answer:1,
          tr:'İkinci ifadeyi seç.', tr_th:'เลือกประโยคที่สอง'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[4] = L4;
