// ders18.js — Turkish Lesson 18: Weather (beginner)
const L18 = {
  words:[
    {
      id:'w1',
      en:'Hava',
      ro:'ha-va',
      tr:'weather',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Yağmur',
      ro:'yaa-mur',
      tr:'rain'
    },
    {
      id:'w3',
      en:'Kar',
      ro:'kar',
      tr:'snow'
    },
    {
      id:'w4',
      en:'Güneş',
      ro:'gue-nesh',
      tr:'sun'
    },
    {
      id:'w5',
      en:'Rüzgar',
      ro:'ruez-gar',
      tr:'wind'
    },
    {
      id:'w6',
      en:'Sıcak',
      ro:'suh-jak',
      tr:'hot'
    },
    {
      id:'w7',
      en:'Soğuk',
      ro:'so-uk',
      tr:'cold'
    },
    {
      id:'w8',
      en:'Bugün',
      ro:'bu-guen',
      tr:'today'
    },
    {
      id:'w9',
      en:'Yarın',
      ro:'ya-ruhn',
      tr:'tomorrow'
    },
    {
      id:'w10',
      en:'Sabah',
      ro:'sa-bah',
      tr:'morning'
    },
    {
      id:'w11',
      en:'Akşam',
      ro:'ak-sham',
      tr:'evening'
    },
    {
      id:'w12',
      en:'Soru',
      ro:'so-ru',
      tr:'question'
    },
    {
      id:'w13',
      en:'Cevap',
      ro:'je-vap',
      tr:'answer'
    },
    {
      id:'w14',
      en:'Şehir',
      ro:'she-hir',
      tr:'city'
    },
    {
      id:'w15',
      en:'Seyahat',
      ro:'se-ya-hat',
      tr:'travel'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Weather — Temel',
      title_en:'Weather — Basics',
      explanation:'Bu derste Weather alanında sık kullanılan ifadeleri öğreniyorsun. Açıklamalar Türkçe verilir. Ali erkek öğrenci olarak örnek cümleleri kullanır.',
      table:[
        {
          pronoun:'Örnek 1',
          form:'Hava',
          example:'Hava',
          tr:'weather'
        },
        {
          pronoun:'Örnek 2',
          form:'Yağmur',
          example:'Yağmur',
          tr:'rain'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Hava',
      tr:'weather',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Yağmur',
      tr:'rain',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'Kar',
      tr:'snow',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Güneş',
      tr:'sun',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Rüzgar',
      tr:'wind',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Weather',
      title_en:'Weather',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Hava',
          tr:'weather',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'ha-va',
              tr:'weather',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Yağmur',
          tr:'rain',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'yaa-mur',
              tr:'rain',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Kar',
          tr:'snow',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Güneş',
          tr:'sun',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Bugün hava soğuk ve rüzgarlı.',
      tr:'Today the weather is cold and windy.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'Hava',
            'Yağmur',
            'Kar',
            'Güneş'
          ],
          answer:0,
          tr:'Doğru kelimeyi seç.'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'Yağmur',
            'Kar',
            'Güneş',
            'Rüzgar'
          ],
          answer:1,
          tr:'İkinci ifadeyi seç.'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[18] = L18;
