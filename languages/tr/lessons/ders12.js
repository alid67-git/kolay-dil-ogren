// ders12.js — Turkish Lesson 12: Phone (beginner)
const L12 = {
  words:[
    {
      id:'w1',
      en:'Aramak',
      ro:'a-ra-mak',
      tr:'to call', tr_th:'โทร',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Mesaj',
      ro:'me-saj',
      tr:'message', tr_th:'ข้อความ'
    },
    {
      id:'w3',
      en:'E-posta',
      ro:'e-pos-ta',
      tr:'email', tr_th:'อีเมล'
    },
    {
      id:'w4',
      en:'Telefon numarası',
      ro:'te-le-fon nu-ma-ra-suh',
      tr:'phone number'
    },
    {
      id:'w5',
      en:'Tekrar eder misiniz?',
      ro:'tek-rar e-der mi-si-niz',
      tr:'can you repeat?'
    },
    {
      id:'w6',
      en:'Soru',
      ro:'so-ru',
      tr:'question', tr_th:'คำถาม'
    },
    {
      id:'w7',
      en:'Cevap',
      ro:'je-vap',
      tr:'answer', tr_th:'คำตอบ'
    },
    {
      id:'w8',
      en:'Yardım etmek',
      ro:'yar-duhm et-mek',
      tr:'to help', tr_th:'ช่วย'
    },
    {
      id:'w9',
      en:'İnternet',
      ro:'in-ter-net',
      tr:'internet', tr_th:'อินเทอร์เน็ต'
    },
    {
      id:'w10',
      en:'Uygulama',
      ro:'uy-gu-la-ma',
      tr:'app'
    },
    {
      id:'w11',
      en:'İndirmek',
      ro:'in-dir-mek',
      tr:'to download'
    },
    {
      id:'w12',
      en:'Yüklemek',
      ro:'yuek-le-mek',
      tr:'to upload'
    },
    {
      id:'w13',
      en:'Tıklamak',
      ro:'tuk-la-mak',
      tr:'to click'
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
      title:'Phone — Temel',
      title_en:'Phone — Basics',
      explanation:'Bu derste Phone alanında sık kullanılan ifadeleri öğreniyorsun. Açıklamalar Türkçe verilir. Ali erkek öğrenci olarak örnek cümleleri kullanır.',
      table:[
        {
          pronoun:'Örnek 1',
          form:'Aramak',
          example:'Aramak',
          tr:'to call', tr_th:'โทร'
        },
        {
          pronoun:'Örnek 2',
          form:'Mesaj',
          example:'Mesaj',
          tr:'message', tr_th:'ข้อความ'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Aramak',
      tr:'to call', tr_th:'โทร',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Mesaj',
      tr:'message', tr_th:'ข้อความ',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'E-posta',
      tr:'email', tr_th:'อีเมล',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Telefon numarası',
      tr:'phone number',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Tekrar eder misiniz?',
      tr:'can you repeat?',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Phone',
      title_en:'Phone',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Aramak',
          tr:'to call', tr_th:'โทร',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'a-ra-mak',
              tr:'to call', tr_th:'โทร',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Mesaj',
          tr:'message', tr_th:'ข้อความ',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'me-saj',
              tr:'message', tr_th:'ข้อความ',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'E-posta',
          tr:'email', tr_th:'อีเมล',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Telefon numarası',
          tr:'phone number',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Lütfen numaranızı tekrar eder misiniz?',
      tr:'Could you repeat your number, please?',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'Aramak',
            'Mesaj',
            'E-posta',
            'Telefon numarası'
          ],
          answer:0,
          tr:'Doğru kelimeyi seç.', tr_th:'เลือกคำที่ถูกต้อง'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'Mesaj',
            'E-posta',
            'Telefon numarası',
            'Tekrar eder misiniz?'
          ],
          answer:1,
          tr:'İkinci ifadeyi seç.', tr_th:'เลือกประโยคที่สอง'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[12] = L12;
