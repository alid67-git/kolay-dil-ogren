// ders8.js — Turkish Lesson 8: Transport (beginner)
const L8 = {
  words:[
    {
      id:'w1',
      en:'Tren',
      ro:'tren',
      tr:'train', tr_th:'รถไฟ',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Otobüs',
      ro:'o-to-bues',
      tr:'bus', tr_th:'รถบัส'
    },
    {
      id:'w3',
      en:'Metro',
      ro:'met-ro',
      tr:'metro', tr_th:'รถไฟใต้ดิน'
    },
    {
      id:'w4',
      en:'Havaalanı',
      ro:'ha-va-a-la-nuh',
      tr:'airport', tr_th:'สนามบิน'
    },
    {
      id:'w5',
      en:'Bilet',
      ro:'bi-let',
      tr:'ticket'
    },
    {
      id:'w6',
      en:'Pasaport',
      ro:'pa-sa-port',
      tr:'passport'
    },
    {
      id:'w7',
      en:'Kalkış',
      ro:'kal-kuhsh',
      tr:'departure'
    },
    {
      id:'w8',
      en:'Varış',
      ro:'va-ruhsh',
      tr:'arrival'
    },
    {
      id:'w9',
      en:'İstasyon',
      ro:'is-tas-yon',
      tr:'station'
    },
    {
      id:'w10',
      en:'Şehir',
      ro:'she-hir',
      tr:'city', tr_th:'เมือง'
    },
    {
      id:'w11',
      en:'Ülke',
      ro:'uel-ke',
      tr:'country', tr_th:'ประเทศ'
    },
    {
      id:'w12',
      en:'Seyahat',
      ro:'se-ya-hat',
      tr:'travel', tr_th:'การเดินทาง'
    },
    {
      id:'w13',
      en:'Saat kaç?',
      ro:'sa-at kach',
      tr:'what time is it?', tr_th:'กี่โมงแล้ว?'
    },
    {
      id:'w14',
      en:'Bugün',
      ro:'bu-guen',
      tr:'today', tr_th:'วันนี้'
    },
    {
      id:'w15',
      en:'Yarın',
      ro:'ya-ruhn',
      tr:'tomorrow', tr_th:'พรุ่งนี้'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Transport — Temel',
      title_en:'Transport — Basics',
      explanation:'Bu derste Transport alanında sık kullanılan ifadeleri öğreniyorsun. Açıklamalar Türkçe verilir. Ali erkek öğrenci olarak örnek cümleleri kullanır.',
      table:[
        {
          pronoun:'Örnek 1',
          form:'Tren',
          example:'Tren',
          tr:'train', tr_th:'รถไฟ'
        },
        {
          pronoun:'Örnek 2',
          form:'Otobüs',
          example:'Otobüs',
          tr:'bus', tr_th:'รถบัส'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Tren',
      tr:'train', tr_th:'รถไฟ',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Otobüs',
      tr:'bus', tr_th:'รถบัส',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'Metro',
      tr:'metro', tr_th:'รถไฟใต้ดิน',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Havaalanı',
      tr:'airport', tr_th:'สนามบิน',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Bilet',
      tr:'ticket',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Transport',
      title_en:'Transport',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Tren',
          tr:'train', tr_th:'รถไฟ',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'tren',
              tr:'train', tr_th:'รถไฟ',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Otobüs',
          tr:'bus', tr_th:'รถบัส',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'o-to-bues',
              tr:'bus', tr_th:'รถบัส',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Metro',
          tr:'metro', tr_th:'รถไฟใต้ดิน',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Havaalanı',
          tr:'airport', tr_th:'สนามบิน',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Tren yarın sabah kalkıyor.',
      tr:'The train departs tomorrow morning.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'Tren',
            'Otobüs',
            'Metro',
            'Havaalanı'
          ],
          answer:0,
          tr:'Doğru kelimeyi seç.', tr_th:'เลือกคำที่ถูกต้อง'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'Otobüs',
            'Metro',
            'Havaalanı',
            'Bilet'
          ],
          answer:1,
          tr:'İkinci ifadeyi seç.', tr_th:'เลือกประโยคที่สอง'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[8] = L8;
