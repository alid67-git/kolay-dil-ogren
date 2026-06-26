// ders7.js — Turkish Lesson 7: Directions (beginner)
const L7 = {
  words:[
    {
      id:'w1',
      en:'Nerede?',
      ro:'ne-re-de',
      tr:'where?',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Cadde',
      ro:'jad-de',
      tr:'street'
    },
    {
      id:'w3',
      en:'Sol',
      ro:'sol',
      tr:'left'
    },
    {
      id:'w4',
      en:'Sağ',
      ro:'saa',
      tr:'right'
    },
    {
      id:'w5',
      en:'Dümdüz',
      ro:'duem-duez',
      tr:'straight'
    },
    {
      id:'w6',
      en:'İstasyon',
      ro:'is-tas-yon',
      tr:'station'
    },
    {
      id:'w7',
      en:'Durak',
      ro:'du-rak',
      tr:'bus stop'
    },
    {
      id:'w8',
      en:'Harita',
      ro:'ha-ri-ta',
      tr:'map'
    },
    {
      id:'w9',
      en:'Yakın',
      ro:'ya-kuhn',
      tr:'near'
    },
    {
      id:'w10',
      en:'Uzak',
      ro:'u-zak',
      tr:'far'
    },
    {
      id:'w11',
      en:'Şehir',
      ro:'she-hir',
      tr:'city'
    },
    {
      id:'w12',
      en:'Otel',
      ro:'o-tel',
      tr:'hotel'
    },
    {
      id:'w13',
      en:'Metro',
      ro:'met-ro',
      tr:'metro'
    },
    {
      id:'w14',
      en:'Otobüs',
      ro:'o-to-bues',
      tr:'bus'
    },
    {
      id:'w15',
      en:'Taksi',
      ro:'tak-si',
      tr:'taxi'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Directions — Temel',
      title_en:'Directions — Basics',
      explanation:'Bu derste Directions alanında sık kullanılan ifadeleri öğreniyorsun. Açıklamalar Türkçe verilir. Ali erkek öğrenci olarak örnek cümleleri kullanır.',
      table:[
        {
          pronoun:'Örnek 1',
          form:'Nerede?',
          example:'Nerede?',
          tr:'where?'
        },
        {
          pronoun:'Örnek 2',
          form:'Cadde',
          example:'Cadde',
          tr:'street'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Nerede?',
      tr:'where?',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Cadde',
      tr:'street',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'Sol',
      tr:'left',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Sağ',
      tr:'right',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Dümdüz',
      tr:'straight',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Directions',
      title_en:'Directions',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Nerede?',
          tr:'where?',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'ne-re-de',
              tr:'where?',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Cadde',
          tr:'street',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'jad-de',
              tr:'street',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Sol',
          tr:'left',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Sağ',
          tr:'right',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Düz gidin, sonra sola dönün.',
      tr:'Go straight, then turn left.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'Nerede?',
            'Cadde',
            'Sol',
            'Sağ'
          ],
          answer:0,
          tr:'Doğru kelimeyi seç.'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'Cadde',
            'Sol',
            'Sağ',
            'Dümdüz'
          ],
          answer:1,
          tr:'İkinci ifadeyi seç.'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[7] = L7;
