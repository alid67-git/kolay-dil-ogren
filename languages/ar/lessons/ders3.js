// ders3.js — Arabic Lesson 3: Numbers & Money (beginner)
const L3 = {
  words:[
    {
      id:'w1',
      en:'واحد',
      ro:'wāḥid',
      tr:'bir'
    },
    {
      id:'w2',
      en:'اثنان',
      ro:'ithnān',
      tr:'iki'
    },
    {
      id:'w3',
      en:'ثلاثة',
      ro:'thalātha',
      tr:'üç'
    },
    {
      id:'w4',
      en:'أربعة',
      ro:'arbaʿa',
      tr:'dört'
    },
    {
      id:'w5',
      en:'خمسة',
      ro:'khamsa',
      tr:'beş'
    },
    {
      id:'w6',
      en:'عشرة',
      ro:'ʿashara',
      tr:'on'
    },
    {
      id:'w7',
      en:'مئة',
      ro:'miʾa',
      tr:'yüz'
    },
    {
      id:'w8',
      en:'ألف',
      ro:'alf',
      tr:'bin'
    },
    {
      id:'w9',
      en:'المال',
      ro:'al-māl',
      tr:'para'
    },
    {
      id:'w10',
      en:'السعر',
      ro:'as-siʿr',
      tr:'fiyat'
    },
    {
      id:'w11',
      en:'رخيص',
      ro:'rakhīṣ',
      tr:'ucuz'
    },
    {
      id:'w12',
      en:'غالي',
      ro:'ghālī',
      tr:'pahalı'
    },
    {
      id:'w13',
      en:'روبل',
      ro:'rūbil',
      tr:'ruble'
    },
    {
      id:'w14',
      en:'يوان',
      ro:'yuān',
      tr:'yuan'
    },
    {
      id:'w15',
      en:'دولار',
      ro:'dūlār',
      tr:'dolar'
    },
    {
      id:'w16',
      en:'يورو',
      ro:'yūrū',
      tr:'euro'
    },
    {
      id:'w17',
      en:'نقد',
      ro:'naqd',
      tr:'nakit'
    },
    {
      id:'w18',
      en:'البطاقة',
      ro:'al-biṭāqa',
      tr:'kart'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Sayı Sistemi',
      title_en:'Number System',
      explanation:'Arapçada sayılar isimle cinsiyet uyumu gösterebilir. Başlangıçta temel sayı + isim kalıbını ezberle.',
      table:[
        {
          pronoun:'1-5',
          form:'واحد ... خمسة',
          example:'واحد, اثنان, ثلاثة',
          tr:'Bir, iki, üç'
        },
        {
          pronoun:'10-1000',
          form:'عشرة / مئة / ألف',
          example:'مئة',
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
          form:'السعر',
          example:'كم الساعة؟ / السعر',
          tr:'Fiyat nedir?'
        },
        {
          pronoun:'Nakit',
          form:'نقد',
          example:'نقد',
          tr:'Nakit'
        },
        {
          pronoun:'Kart',
          form:'البطاقة',
          example:'البطاقة',
          tr:'Kart'
        }
      ],
      note:'Fiyat + para birimi + ödeme yöntemi üçlüsünü birlikte çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'واحد, اثنان, ثلاثة',
      tr:'Bir, iki, üç',
      prompt:'Sayıları söyle'
    },
    {
      id:'sp2',
      en:'السعر',
      tr:'Fiyat',
      prompt:'Fiyat sor'
    },
    {
      id:'sp3',
      en:'عشرة دولار',
      tr:'On dolar',
      prompt:'Tutar söyle'
    },
    {
      id:'sp4',
      en:'رخيص',
      tr:'Ucuz',
      prompt:'Fiyat değerlendir'
    },
    {
      id:'sp5',
      en:'نقد / البطاقة',
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
          en:'السعر',
          tr:'Bu ne kadar?',
          gramNote:'Ali fiyat soruyor.',
          bd:[
            {
              ro:'as-siʿr',
              tr:'Fiyat',
              role:'question',
              note:'Temel fiyat sorusu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'عشرة دولار.',
          tr:'On dolar.',
          bd:[]
        },
        {
          speaker:'A',
          gender:'m',
          en:'غالي',
          tr:'Pahalı.',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'رخيص',
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
      transcript:'واحد, اثنان, ثلاثة. السعر. عشرة دولار.',
      tr:'Bir, iki, üç. Fiyat nedir? On dolar.',
      questions:[
        {
          q:'Sayı olmayan seçenek hangisi?',
          opts:[
            'واحد',
            'اثنان',
            'السعر',
            'ثلاثة'
          ],
          answer:2,
          tr:'Sayı dışı kelime'
        },
        {
          q:'Para birimi hangisi?',
          opts:[
            'البطاقة',
            'دولار',
            'نقد',
            'رخيص'
          ],
          answer:1,
          tr:'Para birimi seç'
        },
        {
          q:'Fiyatla ilgili sıfat hangisi?',
          opts:[
            'رخيص',
            'الصديق',
            'المعلم',
            'المحطة'
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
