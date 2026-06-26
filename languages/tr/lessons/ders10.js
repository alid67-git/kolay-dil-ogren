// ders10.js — Turkish Lesson 10: Work (beginner)
const L10 = {
  words:[
    {
      id:'w1',
      en:'İş',
      ro:'ish',
      tr:'work',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Ofis',
      ro:'o-fis',
      tr:'office'
    },
    {
      id:'w3',
      en:'Şirket',
      ro:'shir-ket',
      tr:'company'
    },
    {
      id:'w4',
      en:'Toplantı',
      ro:'top-lan-tuh',
      tr:'meeting'
    },
    {
      id:'w5',
      en:'Sözleşme',
      ro:'soez-lesh-me',
      tr:'contract'
    },
    {
      id:'w6',
      en:'Maaş',
      ro:'maa-sh',
      tr:'salary'
    },
    {
      id:'w7',
      en:'Bilgisayar',
      ro:'bil-gi-sa-yar',
      tr:'computer'
    },
    {
      id:'w8',
      en:'İnternet',
      ro:'in-ter-net',
      tr:'internet'
    },
    {
      id:'w9',
      en:'E-posta',
      ro:'e-pos-ta',
      tr:'email'
    },
    {
      id:'w10',
      en:'Yönetici',
      ro:'yoe-ne-ti-ji',
      tr:'manager'
    },
    {
      id:'w11',
      en:'İş arkadaşı',
      ro:'ish ar-ka-da-shuh',
      tr:'colleague'
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
      en:'Başlamak',
      ro:'bash-la-mak',
      tr:'to start'
    },
    {
      id:'w15',
      en:'Bitirmek',
      ro:'bi-tir-mek',
      tr:'to finish'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Work — Temel',
      title_en:'Work — Basics',
      explanation:'Bu derste Work alanında sık kullanılan ifadeleri öğreniyorsun. Açıklamalar Türkçe verilir. Ali erkek öğrenci olarak örnek cümleleri kullanır.',
      table:[
        {
          pronoun:'Örnek 1',
          form:'İş',
          example:'İş',
          tr:'work'
        },
        {
          pronoun:'Örnek 2',
          form:'Ofis',
          example:'Ofis',
          tr:'office'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'İş',
      tr:'work',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Ofis',
      tr:'office',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'Şirket',
      tr:'company',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Toplantı',
      tr:'meeting',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Sözleşme',
      tr:'contract',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Work',
      title_en:'Work',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'İş',
          tr:'work',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'ish',
              tr:'work',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Ofis',
          tr:'office',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'o-fis',
              tr:'office',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Şirket',
          tr:'company',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Toplantı',
          tr:'meeting',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Ofiste saat on’da toplantı var.',
      tr:'There is a meeting at the office at ten.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'İş',
            'Ofis',
            'Şirket',
            'Toplantı'
          ],
          answer:0,
          tr:'Doğru kelimeyi seç.'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'Ofis',
            'Şirket',
            'Toplantı',
            'Sözleşme'
          ],
          answer:1,
          tr:'İkinci ifadeyi seç.'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[10] = L10;
