// ders3.js - French Lesson 3: Numbers & Money (beginner)
const L3 = {
  words:[
    {
      id:'w1',
      en:'un',
      ro:'en',
      tr:'bir',
      tip:'Temel sayı kelimesi.',
      ctx:'Sayma, miktar ve fiyat söylemede kullanılır.',
      examples:[
        {
          en:'Un café, s\'il vous plaît.',
          tr:'Bir kahve, lütfen.',
          bd:[
            {
              ro:'un',
              tr:'bir',
              role:'number',
              note:'un sayısı bir anlamındadır.'
            }
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'deux',
      ro:'dö',
      tr:'iki',
      tip:'Temel sayı kelimesi.',
      ctx:'Sayma, miktar ve fiyat söylemede kullanılır.',
      examples:[
        {
          en:'Deux euros.',
          tr:'İki euro.',
          bd:[
            {
              ro:'deux',
              tr:'iki',
              role:'number',
              note:'deux sayısı iki anlamındadır.'
            }
          ]
        }
      ]
    },
    {
      id:'w3',
      en:'trois',
      ro:'trua',
      tr:'üç',
      tip:'Temel sayı kelimesi.',
      ctx:'Sayma, miktar ve fiyat söylemede kullanılır.',
      examples:[
        {
          en:'Trois livres.',
          tr:'Üç kitap.',
          bd:[
            {
              ro:'trois',
              tr:'üç',
              role:'number',
              note:'trois sayısı üç anlamındadır.'
            }
          ]
        }
      ]
    },
    {
      id:'w4',
      en:'quatre',
      ro:'katr',
      tr:'dört',
      tip:'Temel sayı kelimesi.',
      ctx:'Sayma, miktar ve fiyat söylemede kullanılır.',
      examples:[
        {
          en:'Quatre tickets.',
          tr:'Dört bilet.',
          bd:[
            {
              ro:'quatre',
              tr:'dört',
              role:'number',
              note:'quatre sayısı dört anlamındadır.'
            }
          ]
        }
      ]
    },
    {
      id:'w5',
      en:'cinq',
      ro:'sank',
      tr:'beş'
    },
    {
      id:'w6',
      en:'six',
      ro:'sis',
      tr:'altı'
    },
    {
      id:'w7',
      en:'sept',
      ro:'set',
      tr:'yedi'
    },
    {
      id:'w8',
      en:'huit',
      ro:'üit',
      tr:'sekiz'
    },
    {
      id:'w9',
      en:'neuf',
      ro:'nöf',
      tr:'dokuz'
    },
    {
      id:'w10',
      en:'dix',
      ro:'dis',
      tr:'on'
    },
    {
      id:'w11',
      en:'onze',
      ro:'onz',
      tr:'on bir'
    },
    {
      id:'w12',
      en:'douze',
      ro:'duz',
      tr:'on iki'
    },
    {
      id:'w13',
      en:'treize',
      ro:'trez',
      tr:'on üç'
    },
    {
      id:'w14',
      en:'quatorze',
      ro:'ka-torz',
      tr:'on dört'
    },
    {
      id:'w15',
      en:'quinze',
      ro:'kanz',
      tr:'on beş'
    },
    {
      id:'w16',
      en:'seize',
      ro:'sez',
      tr:'on altı'
    },
    {
      id:'w17',
      en:'dix-sept',
      ro:'dis-set',
      tr:'on yedi'
    },
    {
      id:'w18',
      en:'dix-huit',
      ro:'diz-üit',
      tr:'on sekiz'
    },
    {
      id:'w19',
      en:'dix-neuf',
      ro:'diz-nöf',
      tr:'on dokuz'
    },
    {
      id:'w20',
      en:'vingt',
      ro:'van',
      tr:'yirmi'
    },
    {
      id:'w21',
      en:'trente',
      ro:'trant',
      tr:'otuz'
    },
    {
      id:'w22',
      en:'quarante',
      ro:'ka-rant',
      tr:'kırk'
    },
    {
      id:'w23',
      en:'cinquante',
      ro:'san-kant',
      tr:'elli'
    },
    {
      id:'w24',
      en:'soixante',
      ro:'sua-sant',
      tr:'altmış'
    },
    {
      id:'w25',
      en:'cent',
      ro:'san',
      tr:'yüz'
    },
    {
      id:'w26',
      en:'mille',
      ro:'mil',
      tr:'bin'
    },
    {
      id:'w27',
      en:'Combien ça coûte?',
      ro:'kom-BYAN sa KUT',
      tr:'Bu ne kadar tutuyor?',
      tip:'Fiyat sormanın en doğal yollarından biridir.',
      ctx:'Mağaza, kafe, market.',
      examples:[
        {
          en:'Combien ça coûte?',
          tr:'Bu ne kadar?',
          bd:[
            {
              ro:'Combien',
              tr:'ne kadar',
              role:'question',
              note:'Miktar/fiyat sorularında temel kelime.'
            },
            {
              ro:'coûte',
              tr:'tutar',
              role:'V',
              note:'coûter fiilinin 3. tekil çekimi.'
            }
          ]
        }
      ]
    },
    {
      id:'w28',
      en:'euro',
      ro:'ö-ro',
      tr:'euro',
      tip:'Avro para birimi adı.',
      ctx:'Avrupa para birimi.',
      examples:[
        {
          en:'Ça coûte dix euros.',
          tr:'Bu on euro tutuyor.',
          bd:[
            {
              ro:'euros',
              tr:'euro',
              role:'currency',
              note:'Çoğul kullanımda genelde -s yazılır, telaffuz çoğu durumda değişmez.'
            }
          ]
        }
      ]
    },
    {
      id:'w29',
      en:'centime',
      ro:'san-TİM',
      tr:'sentim',
      tip:'Euro\'nun yüzde biri.',
      ctx:'1 euro = 100 centime.',
      examples:[
        {
          en:'Quatre-vingt-dix-neuf centimes.',
          tr:'Doksan dokuz sentim.',
          bd:[
            {
              ro:'centime',
              tr:'sentim',
              role:'currency',
              note:'Kuruş karşılığı küçük para birimi.'
            }
          ]
        }
      ]
    },
    {
      id:'w30',
      en:'l\'addition',
      ro:'la-di-SYON',
      tr:'hesap / adisyon',
      tip:'Restoranda hesap isterken kullanılır.',
      ctx:'Yemek sonrası ödeme aşaması.',
      examples:[
        {
          en:'L\'addition, s\'il vous plaît.',
          tr:'Hesap, lütfen.',
          bd:[
            {
              ro:'L\'addition',
              tr:'hesap',
              role:'O',
              note:'Restoran bağlamında standart ifadedir.'
            }
          ]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Fransızca sayı sistemi',
      title_en:'French number system',
      explanation:'Fransızca sayılar ilk bakışta düzenli görünse de 70, 80, 90 bandında özel bir mantık kullanır. 1-16 arası temel ezber alanıdır (`un`, `deux`, ... `seize`). 17-19 yapısı `dix-` + sayı şeklindedir (`dix-sept`). 20-69 arası görece düzenlidir (`vingt`, `trente`, `quarante`, `cinquante`, `soixante`). Zor bölüm: 70 = `soixante-dix` (60+10), 80 = `quatre-vingts` (4x20), 90 = `quatre-vingt-dix` (4x20+10). Türkçedeki doğrudan onluk sisteminden farklı olduğu için bu bölümü kalıp olarak tekrar etmek gerekir.',
      table:[
        {
          pronoun:'1-16',
          form:'un ... seize',
          example:'un, deux, trois',
          tr:'temel sayı kökleri'
        },
        {
          pronoun:'17-19',
          form:'dix-...',
          example:'dix-sept',
          tr:'on yedi'
        },
        {
          pronoun:'20-69',
          form:'vingt, trente...',
          example:'trente-deux',
          tr:'otuz iki'
        },
        {
          pronoun:'70+',
          form:'soixante-dix',
          example:'soixante-dix-neuf',
          tr:'yetmiş dokuz'
        },
        {
          pronoun:'80+',
          form:'quatre-vingts',
          example:'quatre-vingt-un',
          tr:'seksen bir'
        }
      ],
      note:'Pratik öneri: Önce 1-20 ve onlukları otomatikleştir, sonra 70-99 aralığını ayrı bir mini konu gibi çalış. Bu yöntem ezberi daha kalıcı yapar.'
    },
    {
      id:'g2',
      title:'Para ve fiyat ifadeleri',
      title_en:'Money expressions',
      explanation:'Fransızcada fiyat sormak için en sık kalıp `Combien ça coûte?` veya daha kısa olarak `C\'est combien?` ifadesidir. Cevap verirken `Ça coûte ... euros` yapısı kullanılır. Küsurat için `centime` sözcüğü geçer: `deux euros cinquante` (2,50 €) veya daha açık biçimde `deux euros et cinquante centimes`. Restoranda hesap isterken en doğal ifade `L\'addition, s\'il vous plaît.` cümlesidir. Türkçe düşünürken “kaç para” mantığını doğrudan çevirmek yerine bu sabit kalıpları blok halinde ezberlemek akıcılığı artırır.',
      table:[
        {
          pronoun:'Soru',
          form:'Combien ça coûte?',
          example:'Combien ça coûte, ce livre?',
          tr:'Bu kitap ne kadar?'
        },
        {
          pronoun:'Cevap',
          form:'Ça coûte ...',
          example:'Ça coûte dix euros.',
          tr:'On euro tutuyor.'
        },
        {
          pronoun:'Küsurat',
          form:'... centimes',
          example:'Deux euros cinquante.',
          tr:'İki euro elli.'
        },
        {
          pronoun:'Hesap',
          form:'L\'addition, s\'il vous plaît.',
          example:'Monsieur, l\'addition, s\'il vous plaît.',
          tr:'Beyefendi, hesap lütfen.'
        }
      ],
      note:'Ödeme anında kısa ve net konuşmak daha doğaldır. Önce soruyu sor (`Combien?`), sonra miktarı tekrar ederek doğrula (`Dix euros?`).'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Un café et deux croissants, s\'il vous plaît.',
      tr:'Bir kahve ve iki kruvasan, lütfen.',
      prompt:'Sayı ile sipariş ver'
    },
    {
      id:'sp2',
      en:'Combien ça coûte?',
      tr:'Bu ne kadar tutuyor?',
      prompt:'Fiyat sor'
    },
    {
      id:'sp3',
      en:'Ça coûte vingt euros.',
      tr:'Yirmi euro tutuyor.',
      prompt:'Fiyat cevapla'
    },
    {
      id:'sp4',
      en:'J\'ai cent euros.',
      tr:'Yüz eurom var.',
      prompt:'Para miktarını söyle'
    },
    {
      id:'sp5',
      en:'L\'addition, s\'il vous plaît.',
      tr:'Hesap, lütfen.',
      prompt:'Hesap iste'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Kafede ödeme',
      title_en:'Paying at a café',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Bonjour, un café et deux croissants, s\'il vous plaît.',
          tr:'Merhaba, bir kahve ve iki kruvasan lütfen.',
          gramNote:'Siparişte sayı + ürün.',
          bd:[
            {
              ro:'un / deux',
              tr:'bir / iki',
              role:'number',
              note:'Siparişlerde temel sayılar çok sık geçer.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Très bien. Ça fait huit euros.',
          tr:'Peki. Toplam sekiz euro ediyor.',
          gramNote:'`Ça fait` toplam tutarı belirtir.',
          bd:[
            {
              ro:'Ça fait',
              tr:'toplam eder',
              role:'V',
              note:'Kasada sık kullanılan kalıp.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Pardon, combien ça coûte avec de l\'eau?',
          tr:'Pardon, suyla birlikte ne kadar tutuyor?',
          gramNote:'Ek ürünle fiyat doğrulama.',
          bd:[
            {
              ro:'Combien ça coûte',
              tr:'ne kadar tutuyor',
              role:'question',
              note:'Fiyat netleştirme sorusu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Dix euros cinquante.',
          tr:'On euro elli.',
          gramNote:'Küsuratlı fiyat.',
          bd:[
            {
              ro:'cinquante',
              tr:'elli',
              role:'number',
              note:'Ondalık miktarlarda sık kullanılır.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'D\'accord. L\'addition, s\'il vous plaît.',
          tr:'Tamam. Hesap, lütfen.',
          gramNote:'Ödeme adımı.',
          bd:[
            {
              ro:'L\'addition',
              tr:'hesap',
              role:'O',
              note:'Restoran/kafe kapanış ifadesi.'
            }
          ]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Au marché: trois pommes coûtent trois euros. Un fromage coûte cinq euros cinquante. L\'addition est de huit euros cinquante.',
      tr:'Pazarda: üç elma üç euro tutuyor. Bir peynir beş euro elli tutuyor. Toplam hesap sekiz euro elli.',
      questions:[
        {
          q:'Elmalar kaç euro?',
          opts:[
            'İki euro',
            'Üç euro',
            'Beş euro',
            'Sekiz euro'
          ],
          answer:1,
          tr:'Elmaların fiyatı nedir?'
        },
        {
          q:'Peynir kaç euro kaç sentim?',
          opts:[
            '5,50',
            '3,50',
            '8,50',
            '10,00'
          ],
          answer:0,
          tr:'Peynirin fiyatı nedir?'
        },
        {
          q:'Toplam hesap ne kadar?',
          opts:[
            '8,50',
            '5,50',
            '3,00',
            '9,00'
          ],
          answer:0,
          tr:'Toplam tutar nedir?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[3] = L3;
