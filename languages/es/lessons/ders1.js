// ders1.js � Spanish Lesson 1: Greetings & Introductions (beginner)
const L1 = {
  words:[
    {
      id:'w1',
      en:'Hola',
      ro:'O-la',
      tr:'Merhaba',
      tip:'En yaygın selamlama.',
      ctx:'Resmi ve gayri resmi her ortamda.',
      examples:[
        {
          en:'¡Hola!',
          tr:'Merhaba!',
          bd:[
            {
              ro:'Hola',
              tr:'Merhaba',
              role:'greeting',
              note:'İspanyolcada en sık kullanılan selam. Günün her saatinde geçerlidir.'
            }
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'Buenos días',
      ro:'BWE-nos DEE-as',
      tr:'Günaydın',
      tip:'Sabah selamlaması.',
      ctx:'Sabah ~14:00\'a kadar.',
      examples:[
        {
          en:'¡Buenos días!',
          tr:'Günaydın!',
          bd:[
            {
              ro:'Buenos',
              tr:'İyi',
              role:'K',
              note:'Bueno sıfatının ço�xul eril hali � günleri nitelendirir.'
            },
            {
              ro:'días',
              tr:'günler',
              role:'O',
              note:'Día kelimesinin ço�xulu. Sabah selamı ö�xlene kadar söylenir.'
            }
          ]
        }
      ]
    },
    {
      id:'w3',
      en:'Buenas tardes',
      ro:'BWE-nas TAR-des',
      tr:'İyi günler / İyi ö�xleden sonralar',
      tip:'��xleden sonra selamlaması.',
      ctx:'��xleden ak�xama kadar.',
      examples:[
        {
          en:'¡Buenas tardes!',
          tr:'İyi günler!',
          bd:[
            {
              ro:'Buenas tardes',
              tr:'İyi günler',
              role:'greeting',
              note:'Resmi ortamlarda (banka, ofis) çok kullanılır. Tarde = ö�xleden sonra.'
            }
          ]
        }
      ]
    },
    {
      id:'w4',
      en:'Buenas noches',
      ro:'BWE-nas NO-ches',
      tr:'İyi ak�xamlar / İyi geceler',
      tip:'Ak�xam selamlaması veya vedası.',
      ctx:'Ak�xam saatlerinde veya yatarken.',
      examples:[
        {
          en:'¡Buenas noches!',
          tr:'İyi ak�xamlar!',
          bd:[
            {
              ro:'noches',
              tr:'geceler',
              role:'O',
              note:'Gece selamı � ak�xam vedası veya yatmadan önce.'
            }
          ]
        }
      ]
    },
    {
      id:'w5',
      en:'Adiós',
      ro:'a-DYOS',
      tr:'Ho�xça kal / Güle güle',
      tip:'Veda.',
      ctx:'Her ortamda.',
      examples:[
        {
          en:'¡Adiós!',
          tr:'Ho�xça kal!',
          bd:[
            {
              ro:'Adiós',
              tr:'Ho�xça kal',
              role:'farewell',
              note:'Genel veda � resmi ve samimi ortamlarda kullanılır.'
            }
          ]
        }
      ]
    },
    {
      id:'w6',
      en:'¿Cómo te llamas?',
      ro:'KO-mo te YA-mas',
      tr:'Adın ne? (samimi)',
      tip:'İsim sorma � tú formu.',
      ctx:'Arkada�xlar, ya�xıtlar arasında.',
      examples:[
        {
          en:'¿Cómo te llamas?',
          tr:'Adın ne?',
          bd:[
            {
              ro:'Cómo',
              tr:'Nasıl',
              role:'question',
              note:'Soru kelimesi.'
            },
            {
              ro:'te llamas',
              tr:'adın ...',
              role:'V',
              note:'llamarse = adlandırılmak. te = sana (reflexive).'
            }
          ]
        }
      ]
    },
    {
      id:'w7',
      en:'Me llamo...',
      ro:'me YA-mo',
      tr:'Benim adım ... / Adım ...',
      tip:'Kendini tanıtma.',
      ctx:'İlk tanı�xmada.',
      examples:[
        {
          en:'Me llamo Ali.',
          tr:'Benim adım Ali.',
          bd:[
            {
              ro:'Me llamo',
              tr:'Adım',
              role:'V',
              note:'llamarse fiili � isim söylemek için. me = ben (reflexive).'
            },
            {
              ro:'Ali',
              tr:'Ali',
              role:'name',
              note:'�zel isim � büyük harfle.'
            }
          ]
        }
      ]
    },
    {
      id:'w8',
      en:'Mucho gusto',
      ro:'MU-cho GUS-to',
      tr:'Tanı�xtı�xıma memnun oldum',
      tip:'Tanı�xma ifadesi.',
      ctx:'Yeni biriyle tanı�xınca.',
      examples:[
        {
          en:'¡Mucho gusto!',
          tr:'Memnun oldum!',
          bd:[
            {
              ro:'Mucho gusto',
              tr:'�!ok memnun oldum',
              role:'phrase',
              note:'Kısaltma: Mucho gusto en conocerte. Günlük konu�xmada sadece "Mucho gusto" yeterli.'
            }
          ]
        }
      ]
    },
    {
      id:'w9',
      en:'Por favor',
      ro:'por fa-VOR',
      tr:'Lütfen',
      tip:'Nezaket kelimesi.',
      ctx:'İstek yaparken.',
      examples:[
        {
          en:'Un café, por favor.',
          tr:'Bir kahve, lütfen.',
          bd:[
            {
              ro:'Por favor',
              tr:'Lütfen',
              role:'courtesy',
              note:'İstek yaparken kullanılır.'
            }
          ]
        }
      ]
    },
    {
      id:'w10',
      en:'Gracias',
      ro:'GRA-syas',
      tr:'Te�xekkür ederim',
      tip:'Minnet ifadesi.',
      ctx:'Her yerde.',
      examples:[
        {
          en:'Muchas gracias.',
          tr:'�!ok te�xekkür ederim!',
          bd:[
            {
              ro:'Gracias',
              tr:'Te�xekkürler',
              role:'courtesy',
              note:'Tek ba�xına yeterli. Muchas = çok �  "çok te�xekkürler".'
            }
          ]
        }
      ]
    },
    {
      id:'w11',
      en:'De nada',
      ro:'de NA-da',
      tr:'Rica ederim / Bir �xey de�xil',
      tip:'Te�xekküre cevap.',
      ctx:'"Gracias"a kar�xılık.',
      examples:[
        {
          en:'De nada.',
          tr:'Rica ederim.',
          bd:[
            {
              ro:'De nada',
              tr:'Rica ederim',
              role:'courtesy',
              note:'"Gracias"a standart cevap. Nada = hiçbir �xey.'
            }
          ]
        }
      ]
    },
    {
      id:'w12',
      en:'Perdón',
      ro:'per-DON',
      tr:'Pardon / Affedersiniz',
      tip:'�zür / dikkat çekme.',
      ctx:'Yanlı�xlıkla çarpmak, yol sormak.',
      examples:[
        {
          en:'Perdón, ¿dónde está el baño?',
          tr:'Pardon, tuvalet nerede?',
          bd:[
            {
              ro:'Perdón',
              tr:'Pardon',
              role:'courtesy',
              note:'Hafif özür veya dikkat çekmek için. Disculpe daha resmi.'
            }
          ]
        }
      ]
    },
    {
      id:'w13',
      en:'¿Cómo se llama usted?',
      ro:'KO-mo se YA-ma us-TED',
      tr:'Adınız ne? (resmi)',
      tip:'Resmi isim sorma.',
      ctx:'Usted ile hitap ederken.',
      examples:[
        {
          en:'¿Cómo se llama usted?',
          tr:'Adınız ne?',
          bd:[
            {
              ro:'se llama',
              tr:'adınız ...',
              role:'V',
              note:'llamarse � usted formu. se = kendisi.'
            },
            {
              ro:'usted',
              tr:'siz (resmi)',
              role:'O',
              note:'Resmi hitap � tanımadı�xınız, ya�xlı, resmi ortam.'
            }
          ]
        }
      ]
    },
    {
      id:'w14',
      en:'Encantado / Encantada',
      ro:'en-kan-TA-do / en-kan-TA-da',
      tr:'Memnun oldum (cinsiyete göre)',
      tip:'Resmi tanı�xma.',
      ctx:'Erkek: encantado. Kadın: encantada.',
      examples:[
        {
          en:'Encantado.',
          tr:'Memnun oldum.',
          bd:[
            {
              ro:'Encantado',
              tr:'Memnun oldum',
              role:'phrase',
              note:'Erkek konu�xmacı kullanır. Kadın: Encantada. Resmi tanı�xmada Mucho gusto ile e�xde�xer.'
            }
          ]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Selamla�xma � Günün Saatine Göre',
      title_en:'Greetings by Time of Day',
      explanation:'İspanyolcada selam, günün saatine göre de�xi�xir. "Buenos/Buenas" = iyi; ardından zaman kelimesi gelir. Sabah: Buenos días. ��xleden sonra: Buenas tardes. Ak�xam/gece: Buenas noches. Her zaman: Hola.',
      table:[
        {
          pronoun:'Sabah',
          form:'Buenos días',
          example:'¡Buenos días!',
          tr:'Günaydın!'
        },
        {
          pronoun:'��xleden sonra',
          form:'Buenas tardes',
          example:'¡Buenas tardes!',
          tr:'İyi günler!'
        },
        {
          pronoun:'Ak�xam/gece',
          form:'Buenas noches',
          example:'¡Buenas noches!',
          tr:'İyi ak�xamlar!'
        },
        {
          pronoun:'Her zaman',
          form:'Hola',
          example:'¡Hola!',
          tr:'Merhaba!'
        }
      ],
      note:'Türkçede tek "Merhaba" yeter; İspanyolcada saat fark eder. Resmi ortamda Buenas tardes tercih edilir.'
    },
    {
      id:'g2',
      title:'Tú vs Usted � Samimi ve Resmi Hitap',
      title_en:'Informal vs Formal Address',
      explanation:'İspanyolcada iki hitap var: tú (sen) � arkada�x, aile, ya�xıt. usted (Siz) � tanımadı�xınız, ya�xlı, resmi ortam. Usted fiil 3. tekil çekim alır: ¿Cómo se llama usted? (se llama, not te llamas). Ali erkek ö�xrenci olarak yeni tanı�xmalarda usted kullanır; kar�xı taraf "Puedes tutearme" (sen diyebilirsin) derse tú\'ya geçilir.',
      table:[
        {
          pronoun:'Samimi',
          form:'tú / te / ti',
          example:'¿Cómo te llamas?',
          tr:'Adın ne?'
        },
        {
          pronoun:'Resmi',
          form:'usted / le',
          example:'¿Cómo se llama usted?',
          tr:'Adınız ne?'
        },
        {
          pronoun:'Tanı�xma',
          form:'Mucho gusto',
          example:'¡Mucho gusto!',
          tr:'Memnun oldum.'
        },
        {
          pronoun:'Veda',
          form:'Adiós / Hasta luego',
          example:'¡Adiós!',
          tr:'Ho�xça kal.'
        }
      ],
      note:'İ�x görü�xmesi, doktor, ma�xaza çalı�xanı �  usted. Arkada�x, sınıf arkada�xı �  tú. Kararsız kalırsan usted ile ba�xla.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'¡Hola!',
      tr:'Merhaba!',
      prompt:'Selamla'
    },
    {
      id:'sp2',
      en:'¡Buenos días!',
      tr:'Günaydın!',
      prompt:'Sabah selamı söyle'
    },
    {
      id:'sp3',
      en:'Me llamo Ali.',
      tr:'Benim adım Ali.',
      prompt:'Adını söyle'
    },
    {
      id:'sp4',
      en:'¡Mucho gusto!',
      tr:'Tanı�xtı�xıma memnun oldum.',
      prompt:'Tanı�xma ifadesi',
      gramNote:'Tanı�xma kalıbı � yeni biriyle tanı�xınca.'
    },
    {
      id:'sp5',
      en:'Gracias. ¡Adiós!',
      tr:'Te�xekkürler. Ho�xça kal!',
      prompt:'Te�xekkür et ve vedala�x'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'İlk Tanı�xma',
      title_en:'First Meeting',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'¡Hola!',
          tr:'Merhaba!',
          gramNote:'En yaygın selamlama. Her ortamda kullanılır.',
          bd:[
            {
              ro:'Hola',
              tr:'Merhaba',
              role:'greeting',
              note:'Resmi ve gayri resmi � günün her saati.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'¡Buenas tardes!',
          tr:'İyi günler!',
          gramNote:'��xleden sonra selamlama.',
          bd:[
            {
              ro:'Buenas tardes',
              tr:'İyi günler',
              role:'greeting',
              note:'Ofis, ma�xaza gibi resmi ortamlarda tercih edilir.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Me llamo Ali. ¿Y usted?',
          tr:'Benim adım Ali. Ya siz?',
          gramNote:'Kendini tanıtma + kar�xı tarafa sorma. Y = ve, ya. usted = resmi "siz".',
          bd:[
            {
              ro:'Me llamo',
              tr:'Adım',
              role:'V',
              note:'llamarse = adlandırılmak.'
            },
            {
              ro:'Ali',
              tr:'Ali',
              role:'name',
              note:'�zel isim.'
            },
            {
              ro:'¿Y usted?',
              tr:'Ya siz',
              role:'question',
              note:'Resmi hitapla isim sorma.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Me llamo Ana. ¡Mucho gusto!',
          tr:'Benim adım Ana. Memnun oldum!',
          gramNote:'İsim + tanı�xma ifadesi.',
          bd:[
            {
              ro:'Me llamo Ana',
              tr:'Adım Ana',
              role:'V',
              note:'Kendini tanıtma.'
            },
            {
              ro:'Mucho gusto',
              tr:'Memnun oldum',
              role:'phrase',
              note:'Standart tanı�xma ifadesi.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'El gusto es mío. ¡Adiós!',
          tr:'Benim de memnuniyetim. Ho�xça kalın!',
          gramNote:'El gusto es mío = ben de memnun oldum.',
          bd:[
            {
              ro:'El gusto es mío',
              tr:'Benim de memnuniyetim',
              role:'phrase',
              note:'Kar�xılıklı nezaket.'
            },
            {
              ro:'Adiós',
              tr:'Ho�xça kal',
              role:'farewell',
              note:'Veda.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'¡Hasta luego!',
          tr:'Görü�xürüz!',
          gramNote:'Samimi veda.',
          bd:[
            {
              ro:'Hasta luego',
              tr:'Görü�xürüz',
              role:'farewell',
              note:'Günlük konu�xmada sık veda.'
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
          en:'¡Buenos días!',
          tr:'Günaydın!',
          gramNote:'Sabah selamlaması.',
          bd:[
            {
              ro:'Buenos días',
              tr:'Günaydın',
              role:'greeting',
              note:'��xlene kadar kullanılır.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'¡Buenos días!',
          tr:'Günaydın!',
          gramNote:'Aynı selamlamaya kar�xılık.',
          bd:[
            {
              ro:'Buenos días',
              tr:'Günaydın',
              role:'greeting',
              note:'Kar�xılıklı selam.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'¿Cómo está usted?',
          tr:'Nasılsınız?',
          gramNote:'Resmi hal hatır. estar = durum/bulunmak.',
          bd:[
            {
              ro:'¿Cómo está usted?',
              tr:'Nasılsınız',
              role:'question',
              note:'Usted �  3. tekil fiil (está). Resmi form.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Muy bien, gracias. ¿Y usted?',
          tr:'�!ok iyiyim, te�xekkürler. Ya siz?',
          gramNote:'Standart cevap. Muy = çok.',
          bd:[
            {
              ro:'Muy bien',
              tr:'�!ok iyi',
              role:'V',
              note:'Standart olumlu cevap.'
            },
            {
              ro:'gracias',
              tr:'te�xekkürler',
              role:'courtesy',
              note:'Nezaket.'
            },
            {
              ro:'¿Y usted?',
              tr:'Ya siz',
              role:'question',
              note:'Kar�xılık sorma.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'También muy bien. ¡Adiós!',
          tr:'Ben de çok iyiyim. Ho�xça kalın!',
          gramNote:'También = de/da. Veda.',
          bd:[
            {
              ro:'También',
              tr:'de / da',
              role:'K',
              note:'Kar�xı tarafa katılma.'
            },
            {
              ro:'Adiós',
              tr:'Ho�xça kalın',
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
      transcript:'¡Hola! Me llamo Emma. ¡Mucho gusto!',
      tr:'Merhaba! Benim adım Emma. Memnun oldum!',
      questions:[
        {
          q:'¿Cómo se llama ella?',
          opts:[
            'Emma',
            'Ali',
            'Ana',
            'Tom'
          ],
          answer:0,
          tr:'Adı ne?'
        },
        {
          q:'¿Qué saludo usa?',
          opts:[
            'Adiós',
            'Hola',
            'Buenas noches',
            'Perdón'
          ],
          answer:1,
          tr:'Hangi selamı kullanıyor?'
        },
        {
          q:'¿Qué dice después del nombre?',
          opts:[
            'Gracias',
            'Mucho gusto',
            'Por favor',
            'De nada'
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
