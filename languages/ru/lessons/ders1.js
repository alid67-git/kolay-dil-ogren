// ders1.js — Russian Lesson 1: Greetings & Introductions (beginner)
const L1 = {
  words:[
    {
      id:'w1',
      en:'привет',
      ro:'privet',
      tr:'merhaba',
      tip:'En yaygın selamlama.'
    },
    {
      id:'w2',
      en:'доброе утро',
      ro:'dobroye utro',
      tr:'günaydın'
    },
    {
      id:'w3',
      en:'добрый вечер',
      ro:'dobryy vecher',
      tr:'iyi akşamlar'
    },
    {
      id:'w4',
      en:'до свидания',
      ro:'do svidaniya',
      tr:'hoşça kal'
    },
    {
      id:'w5',
      en:'спасибо',
      ro:'spasibo',
      tr:'teşekkür ederim'
    },
    {
      id:'w6',
      en:'пожалуйста',
      ro:'pozhaluysta',
      tr:'lütfen'
    },
    {
      id:'w7',
      en:'да',
      ro:'da',
      tr:'evet'
    },
    {
      id:'w8',
      en:'нет',
      ro:'net',
      tr:'hayır'
    },
    {
      id:'w9',
      en:'как тебя зовут?',
      ro:'kak tebya zovut',
      tr:'adın ne?'
    },
    {
      id:'w10',
      en:'меня зовут Али',
      ro:'menya zovut Ali',
      tr:'benim adım Ali'
    },
    {
      id:'w11',
      en:'приятно познакомиться',
      ro:'priyatno poznakomitsya',
      tr:'tanıştığıma memnun oldum'
    },
    {
      id:'w12',
      en:'как дела?',
      ro:'kak dela',
      tr:'nasılsın?'
    },
    {
      id:'w13',
      en:'я в порядке',
      ro:'ya v poryadke',
      tr:'iyiyim'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Selamlaşma Kalıpları',
      title_en:'Greeting Patterns',
      explanation:'Rusçada selamlaşmada samimi ve resmi kullanım ayrılır. Привет samimi, Здравствуйте daha resmidir. Ali erkek öğrenci olarak yeni tanışmada daha kibar kalıpları seçer.',
      table:[
        {
          pronoun:'Merhaba',
          form:'привет',
          example:'привет',
          tr:'Merhaba'
        },
        {
          pronoun:'Sabah',
          form:'доброе утро',
          example:'доброе утро',
          tr:'Günaydın'
        },
        {
          pronoun:'Akşam',
          form:'добрый вечер',
          example:'добрый вечер',
          tr:'İyi akşamlar'
        },
        {
          pronoun:'Veda',
          form:'до свидания',
          example:'до свидания',
          tr:'Hoşça kal'
        }
      ],
      note:'Nezaket kalıplarını tek tek değil kısa diyalog içinde ezberle.'
    },
    {
      id:'g2',
      title:'Kendini Tanıtma',
      title_en:'Introducing Yourself',
      explanation:'Tanışmada Меня зовут ... kalıbı çok yaygındır. Bu kalıp doğrudan "Beni ... diye çağırırlar" anlamı taşır.',
      table:[
        {
          pronoun:'Soru',
          form:'как тебя зовут?',
          example:'как тебя зовут?',
          tr:'Adın ne?'
        },
        {
          pronoun:'Cevap',
          form:'меня зовут Али',
          example:'меня зовут Али',
          tr:'Benim adım Ali'
        },
        {
          pronoun:'Nezaket',
          form:'приятно познакомиться',
          example:'приятно познакомиться',
          tr:'Tanıştığıma memnun oldum'
        }
      ],
      note:'Ali erkek öğrenci örneklerinde erkek konuşur formu esas alınır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'привет',
      tr:'Merhaba',
      prompt:'Selam ver'
    },
    {
      id:'sp2',
      en:'меня зовут Али',
      tr:'Benim adım Ali',
      prompt:'Kendini tanıt'
    },
    {
      id:'sp3',
      en:'как дела?',
      tr:'Nasılsın?',
      prompt:'Hal hatır sor'
    },
    {
      id:'sp4',
      en:'я в порядке',
      tr:'İyiyim',
      prompt:'Cevap ver'
    },
    {
      id:'sp5',
      en:'спасибо до свидания',
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
          en:'привет',
          tr:'Merhaba',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'privet',
              tr:'Merhaba',
              role:'greeting',
              note:'Açılış selamı.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'доброе утро',
          tr:'Günaydın',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'dobroye utro',
              tr:'Günaydın',
              role:'greeting',
              note:'Sabah selamı.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'как тебя зовут?',
          tr:'Adın ne?',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'меня зовут Али',
          tr:'Benim adım Anna',
          bd:[]
        },
        {
          speaker:'A',
          gender:'m',
          en:'приятно познакомиться',
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
      transcript:'привет. меня зовут Али. приятно познакомиться.',
      tr:'Merhaba. Benim adım Ali. Memnun oldum.',
      questions:[
        {
          q:'Hangi ifade selamdır?',
          opts:[
            'привет',
            'спасибо',
            'до свидания',
            'да'
          ],
          answer:0,
          tr:'Selam ifadesini seç'
        },
        {
          q:'Ali adını nasıl söylüyor?',
          opts:[
            'меня зовут Али',
            'как тебя зовут?',
            'как дела?',
            'я в порядке'
          ],
          answer:0,
          tr:'Kendini tanıtma'
        },
        {
          q:'Tanışma ifadesi hangisi?',
          opts:[
            'приятно познакомиться',
            'пожалуйста',
            'нет',
            'доброе утро'
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
