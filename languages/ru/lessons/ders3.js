// ders3.js — Russian Lesson 3: Numbers & Money (beginner)
const L3 = {
  words:[
    {
      id:'w1',
      en:'один',
      ro:'odin',
      tr:'bir'
    },
    {
      id:'w2',
      en:'два',
      ro:'dva',
      tr:'iki'
    },
    {
      id:'w3',
      en:'три',
      ro:'tri',
      tr:'üç'
    },
    {
      id:'w4',
      en:'четыре',
      ro:'chetyre',
      tr:'dört'
    },
    {
      id:'w5',
      en:'пять',
      ro:'pyat',
      tr:'beş'
    },
    {
      id:'w6',
      en:'десять',
      ro:'desyat',
      tr:'on'
    },
    {
      id:'w7',
      en:'сто',
      ro:'sto',
      tr:'yüz'
    },
    {
      id:'w8',
      en:'тысяча',
      ro:'tysyacha',
      tr:'bin'
    },
    {
      id:'w9',
      en:'деньги',
      ro:'dengi',
      tr:'para'
    },
    {
      id:'w10',
      en:'цена',
      ro:'tsena',
      tr:'fiyat'
    },
    {
      id:'w11',
      en:'дёшево',
      ro:'dyoshevo',
      tr:'ucuz'
    },
    {
      id:'w12',
      en:'дорого',
      ro:'dorogo',
      tr:'pahalı'
    },
    {
      id:'w13',
      en:'рубль',
      ro:'rubl',
      tr:'ruble'
    },
    {
      id:'w14',
      en:'юань',
      ro:'yuan',
      tr:'yuan'
    },
    {
      id:'w15',
      en:'доллар',
      ro:'dollar',
      tr:'dolar'
    },
    {
      id:'w16',
      en:'евро',
      ro:'evro',
      tr:'euro'
    },
    {
      id:'w17',
      en:'наличные',
      ro:'nalichnyye',
      tr:'nakit'
    },
    {
      id:'w18',
      en:'карта',
      ro:'karta',
      tr:'kart'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Sayı Sistemi',
      title_en:'Number System',
      explanation:'Rusçada sayılar cinsiyet ve hal etkileyebilir. Ancak temel alışverişte yalın sayı kalıplarıyla başlamak yeterlidir.',
      table:[
        {
          pronoun:'1-5',
          form:'один ... пять',
          example:'один, два, три',
          tr:'Bir, iki, üç'
        },
        {
          pronoun:'10-1000',
          form:'десять / сто / тысяча',
          example:'сто',
          tr:'Yüz'
        }
      ],
      note:'Sayıları para ve saat cümleleriyle tekrar et.'
    },
    {
      id:'g2',
      title:'Fiyat Sorma',
      title_en:'Asking Price',
      explanation:'Alışverişte önce fiyat sorulur, sonra ödeme yöntemi belirtilir. Ali erkek öğrenci olarak kısa ve net kalıp kullanır.',
      table:[
        {
          pronoun:'Fiyat',
          form:'цена',
          example:'который час? / цена',
          tr:'Fiyat nedir?'
        },
        {
          pronoun:'Nakit',
          form:'наличные',
          example:'наличные',
          tr:'Nakit'
        },
        {
          pronoun:'Kart',
          form:'карта',
          example:'карта',
          tr:'Kart'
        }
      ],
      note:'Fiyat + para birimi + ödeme yöntemi üçlüsünü birlikte çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'один, два, три',
      tr:'Bir, iki, üç',
      prompt:'Sayıları söyle'
    },
    {
      id:'sp2',
      en:'цена',
      tr:'Fiyat',
      prompt:'Fiyat sor'
    },
    {
      id:'sp3',
      en:'десять доллар',
      tr:'On dolar',
      prompt:'Tutar söyle'
    },
    {
      id:'sp4',
      en:'дёшево',
      tr:'Ucuz',
      prompt:'Fiyat değerlendir'
    },
    {
      id:'sp5',
      en:'наличные / карта',
      tr:'Nakit / Kart',
      prompt:'Ödeme yöntemi söyle'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Alışverişte',
      title_en:'At Shop',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'цена',
          tr:'Bu ne kadar?',
          gramNote:'Ali fiyat soruyor.',
          bd:[
            {
              ro:'tsena',
              tr:'Fiyat',
              role:'question',
              note:'Temel fiyat sorusu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'десять доллар.',
          tr:'On dolar.',
          bd:[]
        },
        {
          speaker:'A',
          gender:'m',
          en:'дорого',
          tr:'Pahalı.',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'дёшево',
          tr:'Ucuz.',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'один, два, три. цена. десять доллар.',
      tr:'Bir, iki, üç. Fiyat nedir? On dolar.',
      questions:[
        {
          q:'Sayı olmayan seçenek hangisi?',
          opts:[
            'один',
            'два',
            'цена',
            'три'
          ],
          answer:2,
          tr:'Sayı dışı kelime'
        },
        {
          q:'Para birimi hangisi?',
          opts:[
            'карта',
            'доллар',
            'наличные',
            'дёшево'
          ],
          answer:1,
          tr:'Para birimi seç'
        },
        {
          q:'Fiyatla ilgili sıfat hangisi?',
          opts:[
            'дёшево',
            'друг',
            'учитель',
            'станция'
          ],
          answer:0,
          tr:'Doğru sıfat'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[3] = L3;
