// ders3.js — Turkish Lesson 3: Numbers & Money (beginner)
const L3 = {
  words:[
    {
      id:'w1',
      en:'Bir',
      ro:'bir',
      tr:'one'
    },
    {
      id:'w2',
      en:'İki',
      ro:'i-ki',
      tr:'two'
    },
    {
      id:'w3',
      en:'Üç',
      ro:'uech',
      tr:'three'
    },
    {
      id:'w4',
      en:'Dört',
      ro:'doert',
      tr:'four'
    },
    {
      id:'w5',
      en:'Beş',
      ro:'besh',
      tr:'five'
    },
    {
      id:'w6',
      en:'On',
      ro:'on',
      tr:'ten'
    },
    {
      id:'w7',
      en:'Yirmi',
      ro:'yir-mi',
      tr:'twenty'
    },
    {
      id:'w8',
      en:'Elli',
      ro:'el-li',
      tr:'fifty'
    },
    {
      id:'w9',
      en:'Yüz',
      ro:'yuez',
      tr:'hundred'
    },
    {
      id:'w10',
      en:'Bin',
      ro:'bin',
      tr:'thousand'
    },
    {
      id:'w11',
      en:'Para',
      ro:'pa-ra',
      tr:'money', tr_th:'เงิน'
    },
    {
      id:'w12',
      en:'Fiyat',
      ro:'fi-yat',
      tr:'price', tr_th:'ราคา'
    },
    {
      id:'w13',
      en:'Ucuz',
      ro:'u-juz',
      tr:'cheap', tr_th:'ถูก'
    },
    {
      id:'w14',
      en:'Pahalı',
      ro:'pa-ha-luh',
      tr:'expensive', tr_th:'แพง'
    },
    {
      id:'w15',
      en:'Lira',
      ro:'li-ra',
      tr:'lira'
    },
    {
      id:'w16',
      en:'Dolar',
      ro:'do-lar',
      tr:'dollar'
    },
    {
      id:'w17',
      en:'Euro',
      ro:'yu-ro',
      tr:'euro'
    },
    {
      id:'w18',
      en:'Nakit',
      ro:'na-kit',
      tr:'cash'
    },
    {
      id:'w19',
      en:'Kart',
      ro:'kart',
      tr:'card', tr_th:'บัตร'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Sayı Sistemi',
      title_en:'Number System',
      explanation:'Türkçede sayı sistemi düzenlidir: bir, iki, üç ... on, yirmi, yüz, bin. Sayılar isimden önce gelir ve temel kullanımda ek almaz. Para ve miktar söylerken sayı + isim kalıbı kullanılır.',
      table:[
        {
          pronoun:'1-5',
          form:'bir, iki, üç, dört, beş',
          example:'Üç çay',
          tr:'three teas'
        },
        {
          pronoun:'10+',
          form:'on, yirmi, elli',
          example:'On lira',
          tr:'ten lira'
        },
        {
          pronoun:'Büyük sayı',
          form:'yüz, bin',
          example:'Yüz lira',
          tr:'one hundred lira'
        }
      ],
      note:'Sayıları mutlaka sesli söyle; ritim telaffuzu hızlandırır.'
    },
    {
      id:'g2',
      title:'Fiyat ve Ödeme',
      title_en:'Price and Payment',
      explanation:'Alışverişte önce fiyat sorulur: Fiyat ne kadar? Sonra para birimi ve ödeme şekli belirtilir: lira, dolar, euro; nakit veya kart. Ali erkek öğrenci olarak kısa kalıplarla iletişim kurar.',
      table:[
        {
          pronoun:'Soru',
          form:'Fiyat ne kadar?',
          example:'Bu ne kadar?',
          tr:'How much is this?'
        },
        {
          pronoun:'Ödeme',
          form:'Nakit / Kart',
          example:'Kartla ödeyebilirim.',
          tr:'I can pay by card.'
        },
        {
          pronoun:'Değerlendirme',
          form:'Ucuz / Pahalı',
          example:'Bu çok pahalı.',
          tr:'This is very expensive.'
        }
      ],
      note:'Fiyat + para birimi + ödeme yöntemini tek cümlede birleştir.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Bir, iki, üç, dört, beş.',
      tr:'one, two, three, four, five',
      prompt:'Sayı say'
    },
    {
      id:'sp2',
      en:'Fiyat ne kadar?',
      tr:'how much is the price?',
      prompt:'Fiyat sor'
    },
    {
      id:'sp3',
      en:'On lira.',
      tr:'ten lira',
      prompt:'Tutar söyle'
    },
    {
      id:'sp4',
      en:'Bu ucuz.',
      tr:'this is cheap',
      prompt:'Fiyat yorumla'
    },
    {
      id:'sp5',
      en:'Kartla ödeyeceğim.',
      tr:'I will pay by card',
      prompt:'Ödeme türü seç'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Markette',
      title_en:'At the market',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Bu ne kadar?',
          tr:'How much is this?',
          gramNote:'Ali fiyat soruyor.',
          bd:[
            {
              ro:'bu ne ka-dar',
              tr:'how much is this?',
              role:'question',
              note:'Temel fiyat sorusu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Yirmi lira.',
          tr:'twenty lira',
          bd:[]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Biraz pahalı.',
          tr:'a little expensive',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Kartla ödeyebilirsiniz.',
          tr:'you can pay by card',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Bu elma on lira. Ben kartla ödüyorum.',
      tr:'This apple is ten lira. I am paying by card.',
      questions:[
        {
          q:'Fiyat kaç lira?',
          opts:[
            'Beş',
            'On',
            'Yirmi',
            'Yüz'
          ],
          answer:1,
          tr:'Doğru sayıyı seç.'
        },
        {
          q:'Ödeme yöntemi ne?',
          opts:[
            'Nakit',
            'Kart',
            'Euro',
            'Dolar'
          ],
          answer:1,
          tr:'Doğru seçeneği seç.'
        },
        {
          q:'Hangisi para birimidir?',
          opts:[
            'Lira',
            'Ucuz',
            'Pahalı',
            'Fiyat'
          ],
          answer:0,
          tr:'Doğru kelimeyi seç.', tr_th:'เลือกคำที่ถูกต้อง'
        }
      ]
    }
  ],

  numbers: [
    {n:0, word:'sıfır', tr:'zero'},
    {n:1, word:'bir', tr:'one'},
    {n:2, word:'iki', tr:'two'},
    {n:3, word:'üç', tr:'three'},
    {n:4, word:'dört', tr:'four'},
    {n:5, word:'beş', tr:'five'},
    {n:6, word:'altı', tr:'six'},
    {n:7, word:'yedi', tr:'seven'},
    {n:8, word:'sekiz', tr:'eight'},
    {n:9, word:'dokuz', tr:'nine'},
    {n:10, word:'on', tr:'ten'},
    {n:11, word:'on bir', tr:'eleven'},
    {n:12, word:'on iki', tr:'twelve'},
    {n:13, word:'on üç', tr:'thirteen'},
    {n:14, word:'on dört', tr:'fourteen'},
    {n:15, word:'on beş', tr:'fifteen'},
    {n:16, word:'on altı', tr:'sixteen'},
    {n:17, word:'on yedi', tr:'seventeen'},
    {n:18, word:'on sekiz', tr:'eighteen'},
    {n:19, word:'on dokuz', tr:'nineteen'},
    {n:20, word:'yirmi', tr:'twenty'},
    {n:30, word:'otuz', tr:'thirty'},
    {n:40, word:'kırk', tr:'forty'},
    {n:50, word:'elli', tr:'fifty'},
    {n:60, word:'altmış', tr:'sixty'},
    {n:70, word:'yetmiş', tr:'seventy'},
    {n:80, word:'seksen', tr:'eighty'},
    {n:90, word:'doksan', tr:'ninety'},
    {n:100, word:'yüz', tr:'hundred'},
    {n:1000, word:'bin', tr:'thousand'}
  ],

  compounds: [
    {n:21, word:'yirmi bir', tr:'twenty-one'},
    {n:32, word:'otuz iki', tr:'thirty-two'},
    {n:105, word:'yüz beş', tr:'one hundred five'},
    {n:350, word:'üç yüz elli', tr:'three hundred fifty'},
    {n:1835, word:'bin sekiz yüz otuz beş', tr:'one thousand eight hundred thirty-five'},
    {n:10000, word:'on bin', tr:'ten thousand'}
  ],

  tones:[]
};
LESSONS[3] = L3;
