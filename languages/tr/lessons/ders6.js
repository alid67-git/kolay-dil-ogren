// ders6.js — Turkish Lesson 6: Shopping (beginner)
const L6 = {
  words:[
    {
      id:'w1',
      en:'Market',
      ro:'mar-ket',
      tr:'market', tr_th:'ตลาด',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Fiyat',
      ro:'fi-yat',
      tr:'price', tr_th:'ราคา'
    },
    {
      id:'w3',
      en:'Ucuz',
      ro:'u-juz',
      tr:'cheap', tr_th:'ถูก'
    },
    {
      id:'w4',
      en:'Pahalı',
      ro:'pa-ha-luh',
      tr:'expensive', tr_th:'แพง'
    },
    {
      id:'w5',
      en:'İndirim',
      ro:'in-di-rim',
      tr:'discount'
    },
    {
      id:'w6',
      en:'Beden',
      ro:'be-den',
      tr:'size'
    },
    {
      id:'w7',
      en:'Renk',
      ro:'renk',
      tr:'color', tr_th:'สี'
    },
    {
      id:'w8',
      en:'Denemek',
      ro:'de-ne-mek',
      tr:'to try on'
    },
    {
      id:'w9',
      en:'Fiş',
      ro:'fish',
      tr:'receipt'
    },
    {
      id:'w10',
      en:'Satın almak',
      ro:'sa-tuhrn al-mak',
      tr:'to buy', tr_th:'ซื้อ'
    },
    {
      id:'w11',
      en:'Satmak',
      ro:'sat-mak',
      tr:'to sell'
    },
    {
      id:'w12',
      en:'Para',
      ro:'pa-ra',
      tr:'money', tr_th:'เงิน'
    },
    {
      id:'w13',
      en:'Kart',
      ro:'kart',
      tr:'card', tr_th:'บัตร'
    },
    {
      id:'w14',
      en:'Nakit',
      ro:'na-kit',
      tr:'cash'
    },
    {
      id:'w15',
      en:'Gömlek',
      ro:'goem-lek',
      tr:'shirt'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Shopping — Temel',
      title_en:'Shopping — Basics',
      explanation:'Bu derste Shopping alanında sık kullanılan ifadeleri öğreniyorsun. Açıklamalar Türkçe verilir. Ali erkek öğrenci olarak örnek cümleleri kullanır.',
      table:[
        {
          pronoun:'Örnek 1',
          form:'Market',
          example:'Market',
          tr:'market', tr_th:'ตลาด'
        },
        {
          pronoun:'Örnek 2',
          form:'Fiyat',
          example:'Fiyat',
          tr:'price', tr_th:'ราคา'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Market',
      tr:'market', tr_th:'ตลาด',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Fiyat',
      tr:'price', tr_th:'ราคา',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'Ucuz',
      tr:'cheap', tr_th:'ถูก',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Pahalı',
      tr:'expensive', tr_th:'แพง',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'İndirim',
      tr:'discount',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Shopping',
      title_en:'Shopping',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Market',
          tr:'market', tr_th:'ตลาด',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'mar-ket',
              tr:'market', tr_th:'ตลาด',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Fiyat',
          tr:'price', tr_th:'ราคา',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'fi-yat',
              tr:'price', tr_th:'ราคา',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Ucuz',
          tr:'cheap', tr_th:'ถูก',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Pahalı',
          tr:'expensive', tr_th:'แพง',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Bu gömlek pahalı ama kaliteli.',
      tr:'This shirt is expensive but high quality.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'Market',
            'Fiyat',
            'Ucuz',
            'Pahalı'
          ],
          answer:0,
          tr:'Doğru kelimeyi seç.', tr_th:'เลือกคำที่ถูกต้อง'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'Fiyat',
            'Ucuz',
            'Pahalı',
            'İndirim'
          ],
          answer:1,
          tr:'İkinci ifadeyi seç.', tr_th:'เลือกประโยคที่สอง'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[6] = L6;
