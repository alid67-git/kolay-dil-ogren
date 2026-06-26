// ders16.js — Turkish Lesson 16: Countries (beginner)
const L16 = {
  words:[
    {
      id:'w1',
      en:'Ülke',
      ro:'uel-ke',
      tr:'country',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Şehir',
      ro:'she-hir',
      tr:'city'
    },
    {
      id:'w3',
      en:'Türkiye',
      ro:'tuer-ki-ye',
      tr:'Turkey'
    },
    {
      id:'w4',
      en:'Almanya',
      ro:'al-man-ya',
      tr:'Germany'
    },
    {
      id:'w5',
      en:'Fransa',
      ro:'fran-sa',
      tr:'France'
    },
    {
      id:'w6',
      en:'Dil',
      ro:'dil',
      tr:'language'
    },
    {
      id:'w7',
      en:'Öğrenci',
      ro:'oe-ren-ji',
      tr:'student'
    },
    {
      id:'w8',
      en:'Arkadaş',
      ro:'ar-ka-dash',
      tr:'friend'
    },
    {
      id:'w9',
      en:'Soru',
      ro:'so-ru',
      tr:'question'
    },
    {
      id:'w10',
      en:'Cevap',
      ro:'je-vap',
      tr:'answer'
    },
    {
      id:'w11',
      en:'Kuzey',
      ro:'ku-zey',
      tr:'north'
    },
    {
      id:'w12',
      en:'Güney',
      ro:'gue-ney',
      tr:'south'
    },
    {
      id:'w13',
      en:'Doğu',
      ro:'do-u',
      tr:'east'
    },
    {
      id:'w14',
      en:'Batı',
      ro:'ba-tuh',
      tr:'west'
    },
    {
      id:'w15',
      en:'Kıta',
      ro:'kuh-ta',
      tr:'continent'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Countries — Temel',
      title_en:'Countries — Basics',
      explanation:'Bu derste Countries alanında sık kullanılan ifadeleri öğreniyorsun. Açıklamalar Türkçe verilir. Ali erkek öğrenci olarak örnek cümleleri kullanır.',
      table:[
        {
          pronoun:'Örnek 1',
          form:'Ülke',
          example:'Ülke',
          tr:'country'
        },
        {
          pronoun:'Örnek 2',
          form:'Şehir',
          example:'Şehir',
          tr:'city'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Ülke',
      tr:'country',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Şehir',
      tr:'city',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'Türkiye',
      tr:'Turkey',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Almanya',
      tr:'Germany',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Fransa',
      tr:'France',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Countries',
      title_en:'Countries',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Ülke',
          tr:'country',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'uel-ke',
              tr:'country',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Şehir',
          tr:'city',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'she-hir',
              tr:'city',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Türkiye',
          tr:'Turkey',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Almanya',
          tr:'Germany',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Ben Türkiye’denim, arkadaşım Almanya’dan.',
      tr:'I am from Turkey, my friend is from Germany.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'Ülke',
            'Şehir',
            'Türkiye',
            'Almanya'
          ],
          answer:0,
          tr:'Doğru kelimeyi seç.'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'Şehir',
            'Türkiye',
            'Almanya',
            'Fransa'
          ],
          answer:1,
          tr:'İkinci ifadeyi seç.'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[16] = L16;
