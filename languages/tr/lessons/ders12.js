// ders12.js — Turkish Lesson 12: Phone (beginner)
const L12 = {
  words:[
    {
      id:'w1',
      en:'Aramak',
      ro:'a-ra-mak',
      tr:'to call',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Mesaj',
      ro:'me-saj',
      tr:'message'
    },
    {
      id:'w3',
      en:'E-posta',
      ro:'e-pos-ta',
      tr:'email'
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
      tr:'question'
    },
    {
      id:'w7',
      en:'Cevap',
      ro:'je-vap',
      tr:'answer'
    },
    {
      id:'w8',
      en:'Yardım etmek',
      ro:'yar-duhm et-mek',
      tr:'to help'
    },
    {
      id:'w9',
      en:'İnternet',
      ro:'in-ter-net',
      tr:'internet'
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
      tr:'today'
    },
    {
      id:'w15',
      en:'Yarın',
      ro:'ya-ruhn',
      tr:'tomorrow'
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
          tr:'to call'
        },
        {
          pronoun:'Örnek 2',
          form:'Mesaj',
          example:'Mesaj',
          tr:'message'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Aramak',
      tr:'to call',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Mesaj',
      tr:'message',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'E-posta',
      tr:'email',
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
          tr:'to call',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'a-ra-mak',
              tr:'to call',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Mesaj',
          tr:'message',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'me-saj',
              tr:'message',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'E-posta',
          tr:'email',
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
          tr:'Doğru kelimeyi seç.'
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
          tr:'İkinci ifadeyi seç.'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[12] = L12;
