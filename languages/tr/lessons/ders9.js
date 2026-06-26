// ders9.js — Turkish Lesson 9: Hotel (beginner)
const L9 = {
  words:[
    {
      id:'w1',
      en:'Otel',
      ro:'o-tel',
      tr:'hotel', tr_th:'โรงแรม',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Oda',
      ro:'o-da',
      tr:'room', tr_th:'ห้อง'
    },
    {
      id:'w3',
      en:'Anahtar',
      ro:'a-nah-tar',
      tr:'key', tr_th:'กุญแจ'
    },
    {
      id:'w4',
      en:'Fiyat',
      ro:'fi-yat',
      tr:'price', tr_th:'ราคา'
    },
    {
      id:'w5',
      en:'Kart',
      ro:'kart',
      tr:'card', tr_th:'บัตร'
    },
    {
      id:'w6',
      en:'Pasaport',
      ro:'pa-sa-port',
      tr:'passport'
    },
    {
      id:'w7',
      en:'Bugün',
      ro:'bu-guen',
      tr:'today', tr_th:'วันนี้'
    },
    {
      id:'w8',
      en:'Yarın',
      ro:'ya-ruhn',
      tr:'tomorrow', tr_th:'พรุ่งนี้'
    },
    {
      id:'w9',
      en:'Sabah',
      ro:'sa-bah',
      tr:'morning'
    },
    {
      id:'w10',
      en:'Akşam',
      ro:'ak-sham',
      tr:'evening'
    },
    {
      id:'w11',
      en:'Lütfen',
      ro:'luet-fen',
      tr:'please', tr_th:'กรุณา'
    },
    {
      id:'w12',
      en:'Teşekkürler',
      ro:'te-shek-kuer-ler',
      tr:'thanks', tr_th:'ขอบคุณ'
    },
    {
      id:'w13',
      en:'Soru',
      ro:'so-ru',
      tr:'question', tr_th:'คำถาม'
    },
    {
      id:'w14',
      en:'Cevap',
      ro:'je-vap',
      tr:'answer', tr_th:'คำตอบ'
    },
    {
      id:'w15',
      en:'Otelde',
      ro:'o-tel-de',
      tr:'at the hotel'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Hotel — Temel',
      title_en:'Hotel — Basics',
      explanation:'Bu derste Hotel alanında sık kullanılan ifadeleri öğreniyorsun. Açıklamalar Türkçe verilir. Ali erkek öğrenci olarak örnek cümleleri kullanır.',
      table:[
        {
          pronoun:'Örnek 1',
          form:'Otel',
          example:'Otel',
          tr:'hotel', tr_th:'โรงแรม'
        },
        {
          pronoun:'Örnek 2',
          form:'Oda',
          example:'Oda',
          tr:'room', tr_th:'ห้อง'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Otel',
      tr:'hotel', tr_th:'โรงแรม',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Oda',
      tr:'room', tr_th:'ห้อง',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'Anahtar',
      tr:'key', tr_th:'กุญแจ',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Fiyat',
      tr:'price', tr_th:'ราคา',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Kart',
      tr:'card', tr_th:'บัตร',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Hotel',
      title_en:'Hotel',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Otel',
          tr:'hotel', tr_th:'โรงแรม',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'o-tel',
              tr:'hotel', tr_th:'โรงแรม',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Oda',
          tr:'room', tr_th:'ห้อง',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'o-da',
              tr:'room', tr_th:'ห้อง',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Anahtar',
          tr:'key', tr_th:'กุญแจ',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Fiyat',
          tr:'price', tr_th:'ราคา',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Otelde bir oda ayırttım.',
      tr:'I booked a room at the hotel.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'Otel',
            'Oda',
            'Anahtar',
            'Fiyat'
          ],
          answer:0,
          tr:'Doğru kelimeyi seç.', tr_th:'เลือกคำที่ถูกต้อง'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'Oda',
            'Anahtar',
            'Fiyat',
            'Kart'
          ],
          answer:1,
          tr:'İkinci ifadeyi seç.', tr_th:'เลือกประโยคที่สอง'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[9] = L9;
