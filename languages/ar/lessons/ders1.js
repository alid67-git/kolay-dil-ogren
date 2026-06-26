// ders1.js — Arabic Lesson 1: Greetings & Introductions (beginner)
const L1 = {
  words:[
    {
      id:'w1',
      en:'مرحباً',
      ro:'marhaban',
      tr:'merhaba',
      tip:'En yaygın selamlama.'
    },
    {
      id:'w2',
      en:'صباح الخير',
      ro:'ṣabāḥ al-khayr',
      tr:'günaydın'
    },
    {
      id:'w3',
      en:'مساء الخير',
      ro:'masāʾ al-khayr',
      tr:'iyi akşamlar'
    },
    {
      id:'w4',
      en:'إلى اللقاء',
      ro:'ilā al-liqāʾ',
      tr:'hoşça kal'
    },
    {
      id:'w5',
      en:'شكراً',
      ro:'shukran',
      tr:'teşekkür ederim'
    },
    {
      id:'w6',
      en:'من فضلك',
      ro:'min faḍlik',
      tr:'lütfen'
    },
    {
      id:'w7',
      en:'نعم',
      ro:'naʿam',
      tr:'evet'
    },
    {
      id:'w8',
      en:'لا',
      ro:'lā',
      tr:'hayır'
    },
    {
      id:'w9',
      en:'ما اسمك؟',
      ro:'mā ismuka?',
      tr:'adın ne?'
    },
    {
      id:'w10',
      en:'اسمي علي',
      ro:'ismī ʿAlī',
      tr:'benim adım Ali'
    },
    {
      id:'w11',
      en:'تشرفت بلقائك',
      ro:'tasharraftu biliqāʾik',
      tr:'tanıştığıma memnun oldum'
    },
    {
      id:'w12',
      en:'كيف حالك؟',
      ro:'kayfa ḥāluka?',
      tr:'nasılsın?'
    },
    {
      id:'w13',
      en:'أنا بخير',
      ro:'anā bikhayr',
      tr:'iyiyim'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Selamlaşma Kalıpları',
      title_en:'Greeting Patterns',
      explanation:'Arapçada selamlaşmada klasik kalıp السلام عليكم çok yaygındır. Günlük kullanımda مرحباً da olur. Cinsiyet uyumuna dikkat edilir; Ali erkek olduğu için erkek çekimi kullanır.',
      table:[
        {
          pronoun:'Merhaba',
          form:'مرحباً',
          example:'مرحباً',
          tr:'Merhaba'
        },
        {
          pronoun:'Sabah',
          form:'صباح الخير',
          example:'صباح الخير',
          tr:'Günaydın'
        },
        {
          pronoun:'Akşam',
          form:'مساء الخير',
          example:'مساء الخير',
          tr:'İyi akşamlar'
        },
        {
          pronoun:'Veda',
          form:'إلى اللقاء',
          example:'إلى اللقاء',
          tr:'Hoşça kal'
        }
      ],
      note:'Nezaket kalıplarını tek tek değil kısa diyalog içinde ezberle.'
    },
    {
      id:'g2',
      title:'Kendini Tanıtma',
      title_en:'Introducing Yourself',
      explanation:'Tanışmada اسمي ... (Benim adım ...) ve تشرفت بلقائك (Memnun oldum) kalıpları kullanılır.',
      table:[
        {
          pronoun:'Soru',
          form:'ما اسمك؟',
          example:'ما اسمك؟',
          tr:'Adın ne?'
        },
        {
          pronoun:'Cevap',
          form:'اسمي علي',
          example:'اسمي علي',
          tr:'Benim adım Ali'
        },
        {
          pronoun:'Nezaket',
          form:'تشرفت بلقائك',
          example:'تشرفت بلقائك',
          tr:'Tanıştığıma memnun oldum'
        }
      ],
      note:'Ali erkek öğrenci örneklerinde erkek konuşur formu esas alınır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'مرحباً',
      tr:'Merhaba',
      prompt:'Selam ver'
    },
    {
      id:'sp2',
      en:'اسمي علي',
      tr:'Benim adım Ali',
      prompt:'Kendini tanıt'
    },
    {
      id:'sp3',
      en:'كيف حالك؟',
      tr:'Nasılsın?',
      prompt:'Hal hatır sor'
    },
    {
      id:'sp4',
      en:'أنا بخير',
      tr:'İyiyim',
      prompt:'Cevap ver'
    },
    {
      id:'sp5',
      en:'شكراً إلى اللقاء',
      tr:'Teşekkürler, hoşça kal',
      prompt:'Vedalaş'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'İlk Tanışma',
      title_en:'First Meeting',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'مرحباً',
          tr:'Merhaba',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'marhaban',
              tr:'Merhaba',
              role:'greeting',
              note:'Açılış selamı.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'صباح الخير',
          tr:'Günaydın',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'ṣabāḥ al-khayr',
              tr:'Günaydın',
              role:'greeting',
              note:'Sabah selamı.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'ما اسمك؟',
          tr:'Adın ne?',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'اسمي آنا',
          tr:'Benim adım Anna',
          bd:[]
        },
        {
          speaker:'A',
          gender:'m',
          en:'تشرفت بلقائك',
          tr:'Memnun oldum',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'مرحباً. اسمي علي. تشرفت بلقائك.',
      tr:'Merhaba. Benim adım Ali. Memnun oldum.',
      questions:[
        {
          q:'Hangi ifade selamdır?',
          opts:[
            'مرحباً',
            'شكراً',
            'إلى اللقاء',
            'نعم'
          ],
          answer:0,
          tr:'Selam ifadesini seç'
        },
        {
          q:'Ali adını nasıl söylüyor?',
          opts:[
            'اسمي علي',
            'ما اسمك؟',
            'كيف حالك؟',
            'أنا بخير'
          ],
          answer:0,
          tr:'Kendini tanıtma'
        },
        {
          q:'Tanışma ifadesi hangisi?',
          opts:[
            'تشرفت بلقائك',
            'من فضلك',
            'لا',
            'صباح الخير'
          ],
          answer:0,
          tr:'Doğru kalıp'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[1] = L1;
