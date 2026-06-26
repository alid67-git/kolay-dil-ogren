// ders1.js — Turkish Lesson 1: Greetings & Introductions (beginner)
const L1 = {
  words:[
    {
      id:'w1',
      en:'Merhaba',
      ro:'mer-ha-ba',
      tr:'hello',
      tip:'En temel selamlaşma ifadesi.'
    },
    {
      id:'w2',
      en:'Günaydın',
      ro:'gue-naidun',
      tr:'good morning'
    },
    {
      id:'w3',
      en:'İyi akşamlar',
      ro:'ii ak-sham-lar',
      tr:'good evening'
    },
    {
      id:'w4',
      en:'Hoşça kal',
      ro:'hosh-cha kal',
      tr:'goodbye'
    },
    {
      id:'w5',
      en:'Teşekkürler',
      ro:'te-shek-kuer-ler',
      tr:'thanks'
    },
    {
      id:'w6',
      en:'Lütfen',
      ro:'luet-fen',
      tr:'please'
    },
    {
      id:'w7',
      en:'Evet',
      ro:'e-vet',
      tr:'yes'
    },
    {
      id:'w8',
      en:'Hayır',
      ro:'ha-yuhr',
      tr:'no'
    },
    {
      id:'w9',
      en:'Adın ne?',
      ro:'a-duhn ne',
      tr:'what is your name?'
    },
    {
      id:'w10',
      en:'Benim adım Ali.',
      ro:'be-nim a-duhm a-li',
      tr:'my name is Ali'
    },
    {
      id:'w11',
      en:'Tanıştığıma memnun oldum.',
      ro:'ta-nush-tu-uh-ma mem-nun ol-dum',
      tr:'nice to meet you'
    },
    {
      id:'w12',
      en:'Nasılsın?',
      ro:'na-suhl-suhn',
      tr:'how are you?'
    },
    {
      id:'w13',
      en:'İyiyim.',
      ro:'ii-yi-yim',
      tr:'I am fine'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Selamlaşma Kalıpları',
      title_en:'Greeting Patterns',
      explanation:'Türkçede selamlaşma çoğunlukla sabit kalıplarla yapılır. Günün saatine göre Günaydın / İyi akşamlar seçilir; genel selam olarak Merhaba her zaman kullanılabilir. Ali erkek öğrenci olarak ilk konuşmada net ve kısa kalıpları kullanır.',
      table:[
        {
          pronoun:'Genel',
          form:'Merhaba',
          example:'Merhaba!',
          tr:'hello'
        },
        {
          pronoun:'Sabah',
          form:'Günaydın',
          example:'Günaydın!',
          tr:'good morning'
        },
        {
          pronoun:'Akşam',
          form:'İyi akşamlar',
          example:'İyi akşamlar!',
          tr:'good evening'
        },
        {
          pronoun:'Veda',
          form:'Hoşça kal',
          example:'Hoşça kal.',
          tr:'goodbye'
        }
      ],
      note:'Aynı kalıpları farklı kişilerle sesli tekrar ederek otomatikleştir.'
    },
    {
      id:'g2',
      title:'Tanışma ve Nezaket',
      title_en:'Introductions and Courtesy',
      explanation:'Tanışmada önce isim sorulur, sonra isim söylenir: Adın ne? / Benim adım Ali. Nezaket için Teşekkürler ve Lütfen çok önemlidir. Türkçede özne çoğu zaman düşebilir ama başlangıçta tam cümle ile çalışmak daha güvenlidir.',
      table:[
        {
          pronoun:'Soru',
          form:'Adın ne?',
          example:'Adın ne?',
          tr:'what is your name?'
        },
        {
          pronoun:'Cevap',
          form:'Benim adım Ali.',
          example:'Benim adım Ali.',
          tr:'my name is Ali'
        },
        {
          pronoun:'Nezaket',
          form:'Teşekkürler',
          example:'Teşekkürler.',
          tr:'thanks'
        }
      ],
      note:'Ali erkek öğrenci örneklerinde birinci tekil konuşur formu kullanılır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Merhaba!',
      tr:'hello',
      prompt:'Selam ver'
    },
    {
      id:'sp2',
      en:'Benim adım Ali.',
      tr:'my name is Ali',
      prompt:'Kendini tanıt'
    },
    {
      id:'sp3',
      en:'Nasılsın?',
      tr:'how are you?',
      prompt:'Hal hatır sor'
    },
    {
      id:'sp4',
      en:'İyiyim, teşekkürler.',
      tr:'I am fine, thanks',
      prompt:'Cevap ver'
    },
    {
      id:'sp5',
      en:'Hoşça kal.',
      tr:'goodbye',
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
          en:'Merhaba!',
          tr:'hello!',
          gramNote:'Ali konuşmayı başlatıyor.',
          bd:[
            {
              ro:'mer-ha-ba',
              tr:'hello',
              role:'greeting',
              note:'Genel selamlaşma.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Günaydın!',
          tr:'good morning!',
          gramNote:'Sabah selamı.',
          bd:[
            {
              ro:'gue-naidun',
              tr:'good morning',
              role:'greeting',
              note:'Sabah saatlerinde kullanılır.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Adın ne?',
          tr:'what is your name?',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Benim adım Anna.',
          tr:'my name is Anna',
          bd:[]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Tanıştığıma memnun oldum.',
          tr:'nice to meet you',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Ben de memnun oldum.',
          tr:'nice to meet you too',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Merhaba! Benim adım Ali. Nasılsın? İyiyim, teşekkürler.',
      tr:'Hello! My name is Ali. How are you? I am fine, thanks.',
      questions:[
        {
          q:'Hangisi selamlaşma ifadesidir?',
          opts:[
            'Merhaba',
            'Teşekkürler',
            'Hayır',
            'Lütfen'
          ],
          answer:0,
          tr:'Giriş selamını seç.'
        },
        {
          q:'Ali kendini nasıl tanıtıyor?',
          opts:[
            'Benim adım Ali.',
            'Adın ne?',
            'İyi akşamlar',
            'Hoşça kal'
          ],
          answer:0,
          tr:'Tanışma cümlesini seç.'
        },
        {
          q:'Nasılsın sorusuna uygun cevap hangisi?',
          opts:[
            'İyiyim.',
            'Adım Ali.',
            'Lütfen.',
            'Nerede?'
          ],
          answer:0,
          tr:'Doğru cevabı seç.'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[1] = L1;
