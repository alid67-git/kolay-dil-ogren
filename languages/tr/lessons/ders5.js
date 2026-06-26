// ders5.js — Turkish Lesson 5: Restaurant (beginner)
const L5 = {
  words:[
    {
      id:'w1',
      en:'Restoran',
      ro:'res-to-ran',
      tr:'restaurant',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Menü',
      ro:'me-nue',
      tr:'menu'
    },
    {
      id:'w3',
      en:'Masa',
      ro:'ma-sa',
      tr:'table'
    },
    {
      id:'w4',
      en:'Su',
      ro:'su',
      tr:'water'
    },
    {
      id:'w5',
      en:'Çay',
      ro:'chai',
      tr:'tea'
    },
    {
      id:'w6',
      en:'Kahve',
      ro:'kah-ve',
      tr:'coffee'
    },
    {
      id:'w7',
      en:'Ekmek',
      ro:'ek-mek',
      tr:'bread'
    },
    {
      id:'w8',
      en:'Çorba',
      ro:'chor-ba',
      tr:'soup'
    },
    {
      id:'w9',
      en:'Salata',
      ro:'sa-la-ta',
      tr:'salad'
    },
    {
      id:'w10',
      en:'Tavuk',
      ro:'ta-vuk',
      tr:'chicken'
    },
    {
      id:'w11',
      en:'Balık',
      ro:'ba-luhk',
      tr:'fish'
    },
    {
      id:'w12',
      en:'Pirinç',
      ro:'pi-rinch',
      tr:'rice'
    },
    {
      id:'w13',
      en:'Lezzetli',
      ro:'lez-zet-li',
      tr:'delicious'
    },
    {
      id:'w14',
      en:'Hesap',
      ro:'he-sap',
      tr:'bill'
    },
    {
      id:'w15',
      en:'Fiyat',
      ro:'fi-yat',
      tr:'price'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Restaurant — Temel',
      title_en:'Restaurant — Basics',
      explanation:'Bu derste Restaurant alanında sık kullanılan ifadeleri öğreniyorsun. Açıklamalar Türkçe verilir. Ali erkek öğrenci olarak örnek cümleleri kullanır.',
      table:[
        {
          pronoun:'Örnek 1',
          form:'Restoran',
          example:'Restoran',
          tr:'restaurant'
        },
        {
          pronoun:'Örnek 2',
          form:'Menü',
          example:'Menü',
          tr:'menu'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Restoran',
      tr:'restaurant',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Menü',
      tr:'menu',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'Masa',
      tr:'table',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Su',
      tr:'water',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Çay',
      tr:'tea',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Restaurant',
      title_en:'Restaurant',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Restoran',
          tr:'restaurant',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'res-to-ran',
              tr:'restaurant',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Menü',
          tr:'menu',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'me-nue',
              tr:'menu',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Masa',
          tr:'table',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Su',
          tr:'water',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Menü lütfen. Bir çorba ve çay istiyorum.',
      tr:'Menu please. I want a soup and tea.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'Restoran',
            'Menü',
            'Masa',
            'Su'
          ],
          answer:0,
          tr:'Doğru kelimeyi seç.'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'Menü',
            'Masa',
            'Su',
            'Çay'
          ],
          answer:1,
          tr:'İkinci ifadeyi seç.'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[5] = L5;
