// ders1.js — Chinese Lesson 1: Greetings & Introductions (beginner)
const L1 = {
  words:[
    {
      id:'w1',
      en:'你好',
      ro:'nǐ hǎo',
      tr:'merhaba',
      tip:'En yaygın selamlama.'
    },
    {
      id:'w2',
      en:'早上好',
      ro:'zǎoshang hǎo',
      tr:'günaydın'
    },
    {
      id:'w3',
      en:'晚上好',
      ro:'wǎnshang hǎo',
      tr:'iyi akşamlar'
    },
    {
      id:'w4',
      en:'再见',
      ro:'zàijiàn',
      tr:'hoşça kal'
    },
    {
      id:'w5',
      en:'谢谢',
      ro:'xièxie',
      tr:'teşekkür ederim'
    },
    {
      id:'w6',
      en:'请',
      ro:'qǐng',
      tr:'lütfen'
    },
    {
      id:'w7',
      en:'是',
      ro:'shì',
      tr:'evet'
    },
    {
      id:'w8',
      en:'不',
      ro:'bù',
      tr:'hayır'
    },
    {
      id:'w9',
      en:'你叫什么名字？',
      ro:'nǐ jiào shénme míngzi?',
      tr:'adın ne?'
    },
    {
      id:'w10',
      en:'我叫阿里',
      ro:'wǒ jiào Ālǐ',
      tr:'benim adım Ali'
    },
    {
      id:'w11',
      en:'很高兴认识你',
      ro:'hěn gāoxìng rènshi nǐ',
      tr:'tanıştığıma memnun oldum'
    },
    {
      id:'w12',
      en:'你好吗？',
      ro:'nǐ hǎo ma?',
      tr:'nasılsın?'
    },
    {
      id:'w13',
      en:'我很好',
      ro:'wǒ hěn hǎo',
      tr:'iyiyim'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Selamlaşma Kalıpları',
      title_en:'Greeting Patterns',
      explanation:'Çincenin selamlaşma kalıpları kısa ve sabittir: 你好, 早上好, 晚上好. Cümle sonunda genelde gereksiz zamir tekrar edilmez. Ali erkek öğrenci olarak doğal kısa kalıpları kullanır.',
      table:[
        {
          pronoun:'Merhaba',
          form:'你好',
          example:'你好',
          tr:'Merhaba'
        },
        {
          pronoun:'Sabah',
          form:'早上好',
          example:'早上好',
          tr:'Günaydın'
        },
        {
          pronoun:'Akşam',
          form:'晚上好',
          example:'晚上好',
          tr:'İyi akşamlar'
        },
        {
          pronoun:'Veda',
          form:'再见',
          example:'再见',
          tr:'Hoşça kal'
        }
      ],
      note:'Nezaket kalıplarını tek tek değil kısa diyalog içinde ezberle.'
    },
    {
      id:'g2',
      title:'Kendini Tanıtma',
      title_en:'Introducing Yourself',
      explanation:'Tanışmada 我叫... kalıbı en doğal ifadedir. 很高兴认识你 ifadesi "Tanıştığıma memnun oldum" anlamına gelir.',
      table:[
        {
          pronoun:'Soru',
          form:'你叫什么名字？',
          example:'你叫什么名字？',
          tr:'Adın ne?'
        },
        {
          pronoun:'Cevap',
          form:'我叫阿里',
          example:'我叫阿里',
          tr:'Benim adım Ali'
        },
        {
          pronoun:'Nezaket',
          form:'很高兴认识你',
          example:'很高兴认识你',
          tr:'Tanıştığıma memnun oldum'
        }
      ],
      note:'Ali erkek öğrenci örneklerinde erkek konuşur formu esas alınır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'你好',
      tr:'Merhaba',
      prompt:'Selam ver'
    },
    {
      id:'sp2',
      en:'我叫阿里',
      tr:'Benim adım Ali',
      prompt:'Kendini tanıt'
    },
    {
      id:'sp3',
      en:'你好吗？',
      tr:'Nasılsın?',
      prompt:'Hal hatır sor'
    },
    {
      id:'sp4',
      en:'我很好',
      tr:'İyiyim',
      prompt:'Cevap ver'
    },
    {
      id:'sp5',
      en:'谢谢 再见',
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
          en:'你好',
          tr:'Merhaba',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'nǐ hǎo',
              tr:'Merhaba',
              role:'greeting',
              note:'Açılış selamı.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'早上好',
          tr:'Günaydın',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'zǎoshang hǎo',
              tr:'Günaydın',
              role:'greeting',
              note:'Sabah selamı.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'你叫什么名字？',
          tr:'Adın ne?',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'我叫阿里',
          tr:'Benim adım Anna',
          bd:[]
        },
        {
          speaker:'A',
          gender:'m',
          en:'很高兴认识你',
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
      transcript:'你好. 我叫阿里. 很高兴认识你.',
      tr:'Merhaba. Benim adım Ali. Memnun oldum.',
      questions:[
        {
          q:'Hangi ifade selamdır?',
          opts:[
            '你好',
            '谢谢',
            '再见',
            '是'
          ],
          answer:0,
          tr:'Selam ifadesini seç'
        },
        {
          q:'Ali adını nasıl söylüyor?',
          opts:[
            '我叫阿里',
            '你叫什么名字？',
            '你好吗？',
            '我很好'
          ],
          answer:0,
          tr:'Kendini tanıtma'
        },
        {
          q:'Tanışma ifadesi hangisi?',
          opts:[
            '很高兴认识你',
            '请',
            '不',
            '早上好'
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
