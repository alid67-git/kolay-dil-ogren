// ders1.js — German Lesson 1: Greetings & Introductions (beginner)
const L1 = {
  words:[
    {
      id:'w1',
      en:'Hallo',
      ro:'HA-lo',
      tr:'Merhaba',
      tip:'En yaygın selamlama.',
      ctx:'Resmi ve gayri resmi her ortamda.',
      examples:[
        {
          en:'Hallo!',
          tr:'Merhaba!',
          bd:[
            {
              ro:'Hallo',
              tr:'Merhaba',
              role:'greeting',
              note:'Almancada en sık kullanılan selam. Günün her saatinde geçerlidir.'
            }
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'Guten Morgen',
      ro:'GU-ten MOR-gen',
      tr:'Günaydın',
      tip:'Sabah selamlaması.',
      ctx:'Sabah ~11:00\'a kadar.',
      examples:[
        {
          en:'Guten Morgen!',
          tr:'Günaydın!',
          bd:[
            {
              ro:'Guten',
              tr:'İyi',
              role:'K',
              note:'Gut sıfatının çekimli hali — Morgen\'i nitelendirir.'
            },
            {
              ro:'Morgen',
              tr:'sabah',
              role:'O',
              note:'Sabah selamlaması öğlene kadar söylenir.'
            }
          ]
        }
      ]
    },
    {
      id:'w3',
      en:'Guten Tag',
      ro:'GU-ten TAK',
      tr:'İyi günler',
      tip:'Gündüz selamlaması.',
      ctx:'Öğleden akşama kadar.',
      examples:[
        {
          en:'Guten Tag!',
          tr:'İyi günler!',
          bd:[
            {
              ro:'Guten Tag',
              tr:'İyi günler',
              role:'greeting',
              note:'Resmi ortamlarda (banka, ofis) çok kullanılır. Tag = gün.'
            }
          ]
        }
      ]
    },
    {
      id:'w4',
      en:'Guten Abend',
      ro:'GU-ten A-bent',
      tr:'İyi akşamlar',
      tip:'Akşam selamlaması.',
      ctx:'Akşam saatlerinde.',
      examples:[
        {
          en:'Guten Abend!',
          tr:'İyi akşamlar!',
          bd:[
            {
              ro:'Abend',
              tr:'akşam',
              role:'O',
              note:'Genellikle 18:00\'den sonra kullanılır.'
            }
          ]
        }
      ]
    },
    {
      id:'w5',
      en:'Auf Wiedersehen',
      ro:'auf VEE-der-ze-en',
      tr:'Hoşça kalın / Görüşürüz',
      tip:'Resmi veda.',
      ctx:'Resmi ortamlarda.',
      examples:[
        {
          en:'Auf Wiedersehen!',
          tr:'Hoşça kalın!',
          bd:[
            {
              ro:'Auf Wiedersehen',
              tr:'Görüşmek üzere',
              role:'farewell',
              note:'Resmi veda — müşteri, iş ortamı, tanımadığınız kişilerle.'
            }
          ]
        }
      ]
    },
    {
      id:'w6',
      en:'Tschüss',
      ro:'tshüs',
      tr:'Hoşça kal / Güle güle',
      tip:'Samimi veda.',
      ctx:'Arkadaşlar, aile arasında.',
      examples:[
        {
          en:'Tschüss!',
          tr:'Hoşça kal!',
          bd:[
            {
              ro:'Tschüss',
              tr:'Hoşça kal',
              role:'farewell',
              note:'Günlük konuşmada en sık veda. Auf Wiedersehen\'den daha samimi.'
            }
          ]
        }
      ]
    },
    {
      id:'w7',
      en:'Danke',
      ro:'DAN-ke',
      tr:'Teşekkür ederim',
      tip:'Minnet ifadesi.',
      ctx:'Her yerde.',
      examples:[
        {
          en:'Danke schön!',
          tr:'Çok teşekkür ederim!',
          bd:[
            {
              ro:'Danke',
              tr:'Teşekkür',
              role:'V',
              note:'Tek başına yeterli. schön = güzel → "güzel teşekkürler".'
            }
          ]
        }
      ]
    },
    {
      id:'w8',
      en:'Bitte',
      ro:'BIT-te',
      tr:'Lütfen / Rica ederim',
      tip:'Nezaket kelimesi.',
      ctx:'İstek veya teşekküre cevap.',
      examples:[
        {
          en:'Bitte schön.',
          tr:'Buyurun / Rica ederim.',
          bd:[
            {
              ro:'Bitte',
              tr:'Lütfen',
              role:'courtesy',
              note:'İstek yaparken veya "danke"ye cevap olarak kullanılır.'
            }
          ]
        }
      ]
    },
    {
      id:'w9',
      en:'Ja',
      ro:'ya',
      tr:'Evet',
      examples:[
        {
          en:'Ja, natürlich.',
          tr:'Evet, tabii ki.',
          bd:[
            {
              ro:'Ja',
              tr:'Evet',
              role:'phrase',
              note:'Onay cevabı.'
            }
          ]
        }
      ]
    },
    {
      id:'w10',
      en:'Nein',
      ro:'nayn',
      tr:'Hayır',
      examples:[
        {
          en:'Nein, danke.',
          tr:'Hayır, teşekkürler.',
          bd:[
            {
              ro:'Nein',
              tr:'Hayır',
              role:'phrase',
              note:'Red cevabı. danke ile birlikte kibar red: "Hayır, teşekkürler".'
            }
          ]
        }
      ]
    },
    {
      id:'w11',
      en:'Ich heiße ...',
      ro:'ikh HAI-se',
      tr:'Benim adım ... / Adım ...',
      tip:'Kendini tanıtma.',
      ctx:'İlk tanışmada.',
      examples:[
        {
          en:'Ich heiße Ali.',
          tr:'Benim adım Ali.',
          bd:[
            {
              ro:'Ich',
              tr:'Ben',
              role:'S',
              note:'1. tekil özne.'
            },
            {
              ro:'heiße',
              tr:'adım ... / ... denirim',
              role:'V',
              note:'heißen fiili — isim söylemek için. ich → heiße (özel çekim).'
            },
            {
              ro:'Ali',
              tr:'Ali',
              role:'name',
              note:'Özel isim — büyük harfle.'
            }
          ]
        }
      ]
    },
    {
      id:'w12',
      en:'Freut mich',
      ro:'froyt mikh',
      tr:'Tanıştığıma memnun oldum',
      tip:'Tanışma ifadesi.',
      ctx:'Yeni biriyle tanışınca.',
      examples:[
        {
          en:'Freut mich!',
          tr:'Memnun oldum!',
          bd:[
            {
              ro:'Freut mich',
              tr:'Beni sevindirdi',
              role:'phrase',
              note:'Kısaltma: Es freut mich, Sie kennenzulernen. Günlük konuşmada sadece "Freut mich" yeterli.'
            }
          ]
        }
      ]
    },
    {
      id:'w13',
      en:'Wie geht es Ihnen?',
      ro:'vee GAYT es EE-nen',
      tr:'Nasılsınız? (resmi)',
      tip:'Resmi hal hatır sorusu.',
      ctx:'Sie ile hitap ederken.',
      examples:[
        {
          en:'Wie geht es Ihnen?',
          tr:'Nasılsınız?',
          bd:[
            {
              ro:'Wie',
              tr:'Nasıl',
              role:'question',
              note:'Soru kelimesi.'
            },
            {
              ro:'geht es',
              tr:'gidiyor mu',
              role:'V',
              note:'gehen fiili — "es geht" = gidiyor, oluyor.'
            },
            {
              ro:'Ihnen',
              tr:'size',
              role:'O',
              note:'Resmi hitap — Sie\'nin dativ hali.'
            }
          ]
        }
      ]
    },
    {
      id:'w14',
      en:'Mir geht es gut',
      ro:'meer GAYT es gut',
      tr:'İyiyim',
      tip:'Standart cevap.',
      ctx:'Wie geht es? sorusuna.',
      examples:[
        {
          en:'Mir geht es gut, danke.',
          tr:'İyiyim, teşekkürler.',
          bd:[
            {
              ro:'Mir',
              tr:'Bana',
              role:'O',
              note:'Dativ — "bana" anlamında.'
            },
            {
              ro:'geht es gut',
              tr:'iyi gidiyor',
              role:'V',
              note:'Es geht gut = iyiyim. Almancada durum dativ ile ifade edilir.'
            }
          ]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Selamlaşma — Guten + Zaman',
      title_en:'Greetings by Time of Day',
      explanation:'Almancada selam, günün saatine göre değişir. "Guten" = iyi; ardından zaman kelimesi gelir. Sabah: Guten Morgen. Gündüz: Guten Tag. Akşam: Guten Abend. Gece: Gute Nacht (sadece yatarken).',
      table:[
        {
          pronoun:'Sabah',
          form:'Guten Morgen',
          example:'Guten Morgen!',
          tr:'Günaydın!'
        },
        {
          pronoun:'Gündüz',
          form:'Guten Tag',
          example:'Guten Tag!',
          tr:'İyi günler!'
        },
        {
          pronoun:'Akşam',
          form:'Guten Abend',
          example:'Guten Abend!',
          tr:'İyi akşamlar!'
        },
        {
          pronoun:'Her zaman',
          form:'Hallo',
          example:'Hallo!',
          tr:'Merhaba!'
        }
      ],
      note:'Türkçede tek "Merhaba" yeter; Almancada saat fark eder. Resmi ortamda Guten Tag tercih edilir.'
    },
    {
      id:'g2',
      title:'Sie vs du — Resmi ve Samimi Hitap',
      title_en:'Formal vs Informal Address',
      explanation:'Almancada iki hitap var: du (sen) — arkadaş, aile, yaşıt. Sie (Siz) — tanımadığınız, yaşlı, resmi ortam. Sie BÜYÜK harfle yazılır. Ali erkek öğrenci olarak yeni tanışmalarda Sie kullanır; karşı taraf "Wir können du sagen" derse du\'ya geçilir.',
      table:[
        {
          pronoun:'Samimi',
          form:'du / dich / dir',
          example:'Wie heißt du?',
          tr:'Adın ne?'
        },
        {
          pronoun:'Resmi',
          form:'Sie / Ihnen',
          example:'Wie heißen Sie?',
          tr:'Adınız ne?'
        },
        {
          pronoun:'Tanışma',
          form:'Freut mich',
          example:'Freut mich!',
          tr:'Memnun oldum.'
        },
        {
          pronoun:'Veda',
          form:'Tschüss / Auf Wiedersehen',
          example:'Auf Wiedersehen!',
          tr:'Hoşça kalın.'
        }
      ],
      note:'İş görüşmesi, doktor, mağaza çalışanı → Sie. Arkadaş, sınıf arkadaşı → du. Kararsız kalırsan Sie ile başla.'
    },
    {
      id:'g3',
      title:'Heißen — İsim Söyleme Fiili',
      title_en:'Heißen — The Name Verb',
      explanation:'"Heißen" = adı olmak. Almancada kendini tanıtmak için "Ich heiße ..." veya "Mein Name ist ..." kalıpları kullanılır. Heißen düzensiz bir fiil değildir — ancak 2. tekil şahısta (du) "-t" yerine sadece "-t" alır: du heißt (heißest değil). "Wie heißen Sie?" = resmi isim sorusu. "Wie heißt du?" = samimi.',
      table:[
        {pronoun:'ich (ben)', form:'heiße', example:'Ich heiße Ali.', tr:'Benim adım Ali.'},
        {pronoun:'du (sen)', form:'heißt', example:'Wie heißt du?', tr:'Adın ne?'},
        {pronoun:'er/sie/es (o)', form:'heißt', example:'Sie heißt Sara.', tr:'Onun adı Sara.'},
        {pronoun:'wir (biz)', form:'heißen', example:'Wir heißen Marco und Sara.', tr:'Bizim adımız Marco ve Sara.'},
        {pronoun:'ihr (siz — arkadaş)', form:'heißt', example:'Wie heißt ihr?', tr:'Adlarınız ne?'},
        {pronoun:'Sie / sie (siz — resmi / onlar)', form:'heißen', example:'Wie heißen Sie?', tr:'Adınız ne? (resmi)'}
      ],
      note:'"Ich heiße" ve "Mein Name ist" eşdeğerdir — "Ich heiße" daha konuşma dili, "Mein Name ist" biraz daha resmi. ß harfine dikkat: "heiße" ve "heißt".'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Hallo!',
      tr:'Merhaba!',
      prompt:'Selamla'
    },
    {
      id:'sp2',
      en:'Guten Morgen!',
      tr:'Günaydın!',
      prompt:'Sabah selamı söyle'
    },
    {
      id:'sp3',
      en:'Ich heiße Ali.',
      tr:'Benim adım Ali.',
      prompt:'Adını söyle'
    },
    {
      id:'sp4',
      en:'Freut mich!',
      tr:'Tanıştığıma memnun oldum.',
      prompt:'Tanışma ifadesi',
      gramNote:'Tanışma kalıbı — yeni biriyle tanışınca. Es freut mich kısaltması.'
    },
    {
      id:'sp5',
      en:'Danke. Auf Wiedersehen!',
      tr:'Teşekkürler. Hoşça kalın!',
      prompt:'Teşekkür et ve vedalaş'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'İlk Tanışma',
      title_en:'First Meeting',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Hallo!',
          tr:'Merhaba!',
          gramNote:'En yaygın selamlama. Her ortamda kullanılır.',
          bd:[
            {
              ro:'Hallo',
              tr:'Merhaba',
              role:'greeting',
              note:'Resmi ve gayri resmi — günün her saati.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Guten Tag!',
          tr:'İyi günler!',
          gramNote:'Gündüz resmi selamlama. Tag = gün.',
          bd:[
            {
              ro:'Guten Tag',
              tr:'İyi günler',
              role:'greeting',
              note:'Ofis, mağaza gibi resmi ortamlarda tercih edilir.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Ich heiße Ali. Und Sie?',
          tr:'Benim adım Ali. Ya siz?',
          gramNote:'Kendini tanıtma + karşı tarafa sorma. Und = ve, ya. Sie = resmi "siz".',
          bd:[
            {
              ro:'Ich heiße',
              tr:'Adım',
              role:'V',
              note:'heißen = adlandırılmak. ich → heiße.'
            },
            {
              ro:'Ali',
              tr:'Ali',
              role:'name',
              note:'Özel isim.'
            },
            {
              ro:'Und Sie',
              tr:'Ya siz',
              role:'question',
              note:'Resmi hitapla isim sorma.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Ich heiße Anna. Freut mich!',
          tr:'Benim adım Anna. Memnun oldum!',
          gramNote:'İsim + tanışma ifadesi. Freut mich = tanıştığıma sevindim.',
          bd:[
            {
              ro:'Ich heiße Anna',
              tr:'Adım Anna',
              role:'V',
              note:'Kendini tanıtma.'
            },
            {
              ro:'Freut mich',
              tr:'Memnun oldum',
              role:'phrase',
              note:'Es freut mich kısaltması.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Freut mich auch. Auf Wiedersehen!',
          tr:'Ben de memnun oldum. Hoşça kalın!',
          gramNote:'auch = de/da. Resmi veda.',
          bd:[
            {
              ro:'auch',
              tr:'de / da',
              role:'K',
              note:'Karşı tarafa katılma.'
            },
            {
              ro:'Auf Wiedersehen',
              tr:'Hoşça kalın',
              role:'farewell',
              note:'Resmi veda.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Tschüss!',
          tr:'Hoşça kal!',
          gramNote:'Samimi veda — tanışma sonrası du\'ya geçilmiş olabilir.',
          bd:[
            {
              ro:'Tschüss',
              tr:'Hoşça kal',
              role:'farewell',
              note:'Günlük konuşmada en sık veda.'
            }
          ]
        }
      ]
    },
    {
      id:'d2',
      title:'Hal Hatır',
      title_en:'How Are You',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Guten Morgen!',
          tr:'Günaydın!',
          gramNote:'Sabah selamlaması.',
          bd:[
            {
              ro:'Guten Morgen',
              tr:'Günaydın',
              role:'greeting',
              note:'Öğlene kadar kullanılır.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Guten Morgen!',
          tr:'Günaydın!',
          gramNote:'Aynı selamlamaya karşılık.',
          bd:[
            {
              ro:'Guten Morgen',
              tr:'Günaydın',
              role:'greeting',
              note:'Karşılıklı selam.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Wie geht es Ihnen?',
          tr:'Nasılsınız?',
          gramNote:'Resmi hal hatır. es geht = gidiyor (durum).',
          bd:[
            {
              ro:'Wie geht es Ihnen',
              tr:'Nasılsınız',
              role:'question',
              note:'Ihnen = size (dativ). Resmi form.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Mir geht es gut, danke. Und Ihnen?',
          tr:'İyiyim, teşekkürler. Ya size?',
          gramNote:'Standart cevap. Mir = bana (dativ).',
          bd:[
            {
              ro:'Mir geht es gut',
              tr:'İyiyim',
              role:'V',
              note:'Dativ yapı — Türkçede yok.'
            },
            {
              ro:'danke',
              tr:'teşekkürler',
              role:'courtesy',
              note:'Nezaket.'
            },
            {
              ro:'Und Ihnen',
              tr:'Ya size',
              role:'question',
              note:'Karşılık sorma.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Mir geht es auch gut. Auf Wiedersehen!',
          tr:'Ben de iyiyim. Hoşça kalın!',
          gramNote:'Olumlu cevap + veda.',
          bd:[
            {
              ro:'auch gut',
              tr:'ben de iyi',
              role:'V',
              note:'auch = de/da.'
            },
            {
              ro:'Auf Wiedersehen',
              tr:'Hoşça kalın',
              role:'farewell',
              note:'Resmi ayrılık.'
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
      transcript:'Hallo! Ich heiße Emma. Freut mich!',
      tr:'Merhaba! Benim adım Emma. Memnun oldum!',
      questions:[
        {
          q:'Wie heißt sie?',
          opts:[
            'Emma',
            'Ali',
            'Anna',
            'Tom'
          ],
          answer:0,
          tr:'Adı ne?'
        },
        {
          q:'Welche Begrüßung benutzt sie?',
          opts:[
            'Auf Wiedersehen',
            'Hallo',
            'Gute Nacht',
            'Tschüss'
          ],
          answer:1,
          tr:'Hangi selamı kullanıyor?'
        },
        {
          q:'Was sagt sie nach dem Namen?',
          opts:[
            'Danke',
            'Freut mich',
            'Bitte',
            'Nein'
          ],
          answer:1,
          tr:'İsminden sonra ne diyor?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[1] = L1;
