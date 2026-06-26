// ders3.js — Chinese Lesson 3: Numbers & Money (beginner)
const L3 = {
  words:[
    {
      id:'w1',
      en:'一',
      ro:'yī',
      tr:'bir'
    },
    {
      id:'w2',
      en:'二',
      ro:'èr',
      tr:'iki'
    },
    {
      id:'w3',
      en:'三',
      ro:'sān',
      tr:'üç'
    },
    {
      id:'w4',
      en:'四',
      ro:'sì',
      tr:'dört'
    },
    {
      id:'w5',
      en:'五',
      ro:'wǔ',
      tr:'beş'
    },
    {
      id:'w6',
      en:'十',
      ro:'shí',
      tr:'on'
    },
    {
      id:'w7',
      en:'一百',
      ro:'yì bǎi',
      tr:'yüz'
    },
    {
      id:'w8',
      en:'一千',
      ro:'yì qiān',
      tr:'bin'
    },
    {
      id:'w9',
      en:'钱',
      ro:'qián',
      tr:'para'
    },
    {
      id:'w10',
      en:'价格',
      ro:'jiàgé',
      tr:'fiyat'
    },
    {
      id:'w11',
      en:'便宜',
      ro:'piányi',
      tr:'ucuz'
    },
    {
      id:'w12',
      en:'贵',
      ro:'guì',
      tr:'pahalı'
    },
    {
      id:'w13',
      en:'卢布',
      ro:'lúbù',
      tr:'ruble'
    },
    {
      id:'w14',
      en:'元',
      ro:'yuán',
      tr:'yuan'
    },
    {
      id:'w15',
      en:'美元',
      ro:'měiyuán',
      tr:'dolar'
    },
    {
      id:'w16',
      en:'欧元',
      ro:'ōuyuán',
      tr:'euro'
    },
    {
      id:'w17',
      en:'现金',
      ro:'xiànjīn',
      tr:'nakit'
    },
    {
      id:'w18',
      en:'卡',
      ro:'kǎ',
      tr:'kart'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Sayı Sistemi',
      title_en:'Number System',
      explanation:'Çincenin sayı sistemi oldukça düzenlidir: 十, 百, 千. Para söylemede sayı + para birimi kalıbı kullanılır.',
      table:[
        {
          pronoun:'1-5',
          form:'一 ... 五',
          example:'一, 二, 三',
          tr:'Bir, iki, üç'
        },
        {
          pronoun:'10-1000',
          form:'十 / 一百 / 一千',
          example:'一百',
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
          form:'价格',
          example:'几点了？ / 价格',
          tr:'Fiyat nedir?'
        },
        {
          pronoun:'Nakit',
          form:'现金',
          example:'现金',
          tr:'Nakit'
        },
        {
          pronoun:'Kart',
          form:'卡',
          example:'卡',
          tr:'Kart'
        }
      ],
      note:'Fiyat + para birimi + ödeme yöntemi üçlüsünü birlikte çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'一, 二, 三',
      tr:'Bir, iki, üç',
      prompt:'Sayıları söyle'
    },
    {
      id:'sp2',
      en:'价格',
      tr:'Fiyat',
      prompt:'Fiyat sor'
    },
    {
      id:'sp3',
      en:'十 美元',
      tr:'On dolar',
      prompt:'Tutar söyle'
    },
    {
      id:'sp4',
      en:'便宜',
      tr:'Ucuz',
      prompt:'Fiyat değerlendir'
    },
    {
      id:'sp5',
      en:'现金 / 卡',
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
          en:'价格',
          tr:'Bu ne kadar?',
          gramNote:'Ali fiyat soruyor.',
          bd:[
            {
              ro:'jiàgé',
              tr:'Fiyat',
              role:'question',
              note:'Temel fiyat sorusu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'十 美元.',
          tr:'On dolar.',
          bd:[]
        },
        {
          speaker:'A',
          gender:'m',
          en:'贵',
          tr:'Pahalı.',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'便宜',
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
      transcript:'一, 二, 三. 价格. 十 美元.',
      tr:'Bir, iki, üç. Fiyat nedir? On dolar.',
      questions:[
        {
          q:'Sayı olmayan seçenek hangisi?',
          opts:[
            '一',
            '二',
            '价格',
            '三'
          ],
          answer:2,
          tr:'Sayı dışı kelime'
        },
        {
          q:'Para birimi hangisi?',
          opts:[
            '卡',
            '美元',
            '现金',
            '便宜'
          ],
          answer:1,
          tr:'Para birimi seç'
        },
        {
          q:'Fiyatla ilgili sıfat hangisi?',
          opts:[
            '便宜',
            '朋友',
            '老师',
            '车站'
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
