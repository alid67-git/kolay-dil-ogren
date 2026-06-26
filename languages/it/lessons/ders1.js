// ders1.js — Italian Lesson 1: Greetings & Introductions (beginner)
const L1 = {
  words:[
    {
      id:'w1',
      en:'Ciao',
      ro:'CHAO',
      tr:'Merhaba / Selam',
      tip:'En yaygın selamlama.',
      ctx:'Samimi — arkadaş, aile, gençler arası.',
      examples:[
        {
          en:'Ciao!',
          tr:'Selam!',
          bd:[
            {
              ro:'Ciao',
              tr:'Merhaba',
              role:'greeting',
              note:'İtalyancada en sık selam. Günün her saatinde samimi ortamda.'
            }
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'Buongiorno',
      ro:'buan-JOR-no',
      tr:'Günaydın / İyi günler',
      tip:'Sabah ve gündüz selamı.',
      ctx:'Resmi ve yarı resmi ortamlarda.',
      examples:[
        {
          en:'Buongiorno!',
          tr:'Günaydın!',
          bd:[
            {
              ro:'Buon',
              tr:'İyi',
              role:'K',
              note:'Buono sıfatının kısaltması — iyi.'
            },
            {
              ro:'giorno',
              tr:'gün',
              role:'O',
              note:'Sabah ~öğlene kadar veya resmi gündüz selamı.'
            }
          ]
        }
      ]
    },
    {
      id:'w3',
      en:'Buonasera',
      ro:'bua-na-SE-ra',
      tr:'İyi akşamlar',
      tip:'Akşam selamlaması.',
      ctx:'Genellikle 17:00\'den sonra.',
      examples:[
        {
          en:'Buonasera!',
          tr:'İyi akşamlar!',
          bd:[
            {
              ro:'Buonasera',
              tr:'İyi akşamlar',
              role:'greeting',
              note:'sera = akşam. Restoran, tiyatro gibi akşam ortamlarında.'
            }
          ]
        }
      ]
    },
    {
      id:'w4',
      en:'Arrivederci',
      ro:'a-ri-ve-DER-chi',
      tr:'Hoşça kalın / Görüşürüz',
      tip:'Resmi ve nötr veda.',
      ctx:'Her ortamda güvenle kullanılır.',
      examples:[
        {
          en:'Arrivederci!',
          tr:'Hoşça kalın!',
          bd:[
            {
              ro:'Arrivederci',
              tr:'Görüşmek üzere',
              role:'farewell',
              note:'a + rivederci (tekrar görmek). Kibar veda.'
            }
          ]
        }
      ]
    },
    {
      id:'w5',
      en:'Come ti chiami?',
      ro:'KO-me ti KYA-mi',
      tr:'Adın ne? (samimi)',
      tip:'İsim sorma — tu formu.',
      ctx:'Arkadaşça tanışmada.',
      examples:[
        {
          en:'Ciao, come ti chiami?',
          tr:'Selam, adın ne?',
          bd:[
            {
              ro:'Come',
              tr:'Nasıl / ne',
              role:'question',
              note:'Soru kelimesi.'
            },
            {
              ro:'ti chiami',
              tr:'adın ...',
              role:'V',
              note:'chiamarsi = adlandırılmak. ti = sana (reflexive).'
            }
          ]
        }
      ]
    },
    {
      id:'w6',
      en:'Mi chiamo ...',
      ro:'mi KYA-mo',
      tr:'Benim adım ... / Adım ...',
      tip:'Kendini tanıtma.',
      ctx:'İlk tanışmada.',
      examples:[
        {
          en:'Mi chiamo Ali.',
          tr:'Benim adım Ali.',
          bd:[
            {
              ro:'Mi',
              tr:'Beni / benim',
              role:'S',
              note:'Reflexive — kendinden bahsederken.'
            },
            {
              ro:'chiamo',
              tr:'adım ...',
              role:'V',
              note:'chiamarsi: mi chiamo = adım ... (erkek Ali).'
            }
          ]
        }
      ]
    },
    {
      id:'w7',
      en:'Piacere',
      ro:'pya-CHE-re',
      tr:'Memnun oldum',
      tip:'Tanışma ifadesi.',
      ctx:'Yeni biriyle tanışınca.',
      examples:[
        {
          en:'Piacere!',
          tr:'Memnun oldum!',
          bd:[
            {
              ro:'Piacere',
              tr:'Zevk / memnuniyet',
              role:'phrase',
              note:'Kısaltma: Piacere di conoscerti. Günlükte sadece Piacere yeterli.'
            }
          ]
        }
      ]
    },
    {
      id:'w8',
      en:'Per favore',
      ro:'per fa-VO-re',
      tr:'Lütfen',
      tip:'Nezaket kelimesi.',
      ctx:'İstek yaparken.',
      examples:[
        {
          en:'Un caffè, per favore.',
          tr:'Bir kahve, lütfen.',
          bd:[
            {
              ro:'Per favore',
              tr:'Lütfen',
              role:'courtesy',
              note:'İstek cümlelerinde veya siparişte.'
            }
          ]
        }
      ]
    },
    {
      id:'w9',
      en:'Grazie',
      ro:'GRA-tsye',
      tr:'Teşekkür ederim',
      tip:'Minnet ifadesi.',
      ctx:'Her yerde.',
      examples:[
        {
          en:'Grazie mille!',
          tr:'Çok teşekkürler!',
          bd:[
            {
              ro:'Grazie',
              tr:'Teşekkürler',
              role:'courtesy',
              note:'Tek başına yeterli. mille = bin → çok teşekkürler.'
            }
          ]
        }
      ]
    },
    {
      id:'w10',
      en:'Prego',
      ro:'PRE-go',
      tr:'Rica ederim / Buyurun',
      tip:'Teşekküre veya ricaya cevap.',
      ctx:'Mağaza, restoran, günlük konuşma.',
      examples:[
        {
          en:'Grazie! — Prego!',
          tr:'Teşekkürler! — Rica ederim!',
          bd:[
            {
              ro:'Prego',
              tr:'Rica ederim',
              role:'courtesy',
              note:'grazie\'ye cevap. Ayrıca "buyurun" anlamında.'
            }
          ]
        }
      ]
    },
    {
      id:'w11',
      en:'Scusi',
      ro:'SKU-zi',
      tr:'Affedersiniz / Pardon',
      tip:'Resmi özür / dikkat çekme.',
      ctx:'Yabancıya, yaşlıya, resmi ortamda.',
      examples:[
        {
          en:'Scusi, dov\'è la stazione?',
          tr:'Affedersiniz, istasyon nerede?',
          bd:[
            {
              ro:'Scusi',
              tr:'Affedersiniz',
              role:'courtesy',
              note:'Lei formu (resmi). Samimide scusa kullanılır.'
            }
          ]
        }
      ]
    },
    {
      id:'w12',
      en:'Come sta?',
      ro:'KO-me STA',
      tr:'Nasılsınız? (resmi)',
      tip:'Resmi hal hatır sorusu.',
      ctx:'Lei ile hitap ederken.',
      examples:[
        {
          en:'Buongiorno, come sta?',
          tr:'İyi günler, nasılsınız?',
          bd:[
            {
              ro:'Come sta',
              tr:'Nasılsınız',
              role:'question',
              note:'sta = stare (durum). Lei formu — resmi.'
            }
          ]
        }
      ]
    },
    {
      id:'w13',
      en:'Sto bene',
      ro:'sto BE-ne',
      tr:'İyiyim',
      tip:'Standart cevap.',
      ctx:'Come sta? sorusuna.',
      examples:[
        {
          en:'Sto bene, grazie. E Lei?',
          tr:'İyiyim, teşekkürler. Ya siz?',
          bd:[
            {
              ro:'Sto bene',
              tr:'İyiyim',
              role:'V',
              note:'stare + bene. Türkçede "iyiyim".'
            },
            {
              ro:'E Lei',
              tr:'Ya siz',
              role:'question',
              note:'Lei büyük harfle — saygı.'
            }
          ]
        }
      ]
    },
    {
      id:'w14',
      en:'Sì / No',
      ro:'see / no',
      tr:'Evet / Hayır',
      examples:[
        {
          en:'Sì, grazie. / No, grazie.',
          tr:'Evet, teşekkürler. / Hayır, teşekkürler.',
          bd:[
            {
              ro:'Sì',
              tr:'Evet',
              role:'phrase',
              note:'Onay.'
            },
            {
              ro:'No',
              tr:'Hayır',
              role:'phrase',
              note:'grazie ile kibar red.'
            }
          ]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Selamlaşma — Saate Göre',
      title_en:'Greetings by Time of Day',
      explanation:'İtalyancada selam saate göre değişir. Ciao her zaman samimi ortamda geçer. Sabah ve gündüz: Buongiorno. Akşam: Buonasera. Gece yatarken: Buonanotte. Resmi ortamda Buongiorno/Buonasera tercih edilir; Ciao çok samimi kalır.',
      table:[
        {
          pronoun:'Sabah/gündüz',
          form:'Buongiorno',
          example:'Buongiorno!',
          tr:'Günaydın / İyi günler!'
        },
        {
          pronoun:'Akşam',
          form:'Buonasera',
          example:'Buonasera!',
          tr:'İyi akşamlar!'
        },
        {
          pronoun:'Samimi',
          form:'Ciao',
          example:'Ciao!',
          tr:'Selam!'
        },
        {
          pronoun:'Veda',
          form:'Arrivederci / Ciao',
          example:'Arrivederci!',
          tr:'Hoşça kalın!'
        }
      ],
      note:'Türkçede tek "Merhaba" yeter; İtalyancada saat ve samimiyet fark eder.'
    },
    {
      id:'g2',
      title:'tu vs Lei — Samimi ve Resmi Hitap',
      title_en:'Informal tu vs Formal Lei',
      explanation:'İtalyancada iki hitap vardır: tu (sen) — arkadaş, aile, yaşıt. Lei (Siz) — tanımadığınız, yaşlı, resmi ortam. Lei aslında 3. tekil şahıs fiili kullanır (come sta?, non capisco). Ali erkek öğrenci olarak yeni tanışmalarda Lei kullanır; karşı taraf "Diamo del tu" derse tu\'ya geçilir. Scusi = resmi, scusa = samimi.',
      table:[
        {
          pronoun:'Samimi',
          form:'tu / ti / te',
          example:'Come ti chiami?',
          tr:'Adın ne?'
        },
        {
          pronoun:'Resmi',
          form:'Lei',
          example:'Come si chiama?',
          tr:'Adınız ne?'
        },
        {
          pronoun:'Tanışma',
          form:'Piacere',
          example:'Piacere!',
          tr:'Memnun oldum.'
        },
        {
          pronoun:'Nezaket',
          form:'Per favore / Grazie / Prego',
          example:'Grazie! — Prego!',
          tr:'Teşekkürler! — Rica ederim.'
        }
      ],
      note:'Mağaza, doktor, iş görüşmesi → Lei. Arkadaş, sınıf arkadaşı → tu. Kararsız kalırsan Lei ile başla.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Ciao!',
      tr:'Selam!',
      prompt:'Samimi selamla'
    },
    {
      id:'sp2',
      en:'Buongiorno!',
      tr:'Günaydın!',
      prompt:'Sabah selamı söyle'
    },
    {
      id:'sp3',
      en:'Mi chiamo Ali.',
      tr:'Benim adım Ali.',
      prompt:'Adını söyle'
    },
    {
      id:'sp4',
      en:'Piacere!',
      tr:'Memnun oldum.',
      prompt:'Tanışma ifadesi',
      gramNote:'Tanışma kalıbı — yeni biriyle tanışınca.'
    },
    {
      id:'sp5',
      en:'Grazie. Arrivederci!',
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
          en:'Ciao!',
          tr:'Selam!',
          gramNote:'Samimi selamlama.',
          bd:[
            {
              ro:'Ciao',
              tr:'Selam',
              role:'greeting',
              note:'Günlük ortamda en sık selam.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Buongiorno!',
          tr:'Günaydın!',
          gramNote:'Resmi selamlama — gündüz.',
          bd:[
            {
              ro:'Buongiorno',
              tr:'İyi günler',
              role:'greeting',
              note:'Ofis, ders gibi ortamlarda.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Mi chiamo Ali. E tu?',
          tr:'Benim adım Ali. Ya sen?',
          gramNote:'Kendini tanıtma + karşı tarafa sorma. E = ve, ya.',
          bd:[
            {
              ro:'Mi chiamo',
              tr:'Adım',
              role:'V',
              note:'chiamarsi — mi chiamo.'
            },
            {
              ro:'Ali',
              tr:'Ali',
              role:'name',
              note:'Özel isim.'
            },
            {
              ro:'E tu',
              tr:'Ya sen',
              role:'question',
              note:'Samimi isim sorma.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Mi chiamo Anna. Piacere!',
          tr:'Benim adım Anna. Memnun oldum!',
          gramNote:'İsim + tanışma ifadesi.',
          bd:[
            {
              ro:'Mi chiamo Anna',
              tr:'Adım Anna',
              role:'V',
              note:'Kendini tanıtma.'
            },
            {
              ro:'Piacere',
              tr:'Memnun oldum',
              role:'phrase',
              note:'Tanışma ifadesi.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Piacere anche a me. Arrivederci!',
          tr:'Ben de memnun oldum. Hoşça kalın!',
          gramNote:'anche a me = bana da. Resmi veda.',
          bd:[
            {
              ro:'anche a me',
              tr:'bana da',
              role:'K',
              note:'Karşılıklı memnuniyet.'
            },
            {
              ro:'Arrivederci',
              tr:'Hoşça kalın',
              role:'farewell',
              note:'Kibar veda.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Ciao!',
          tr:'Hoşça kal!',
          gramNote:'Samimi veda.',
          bd:[
            {
              ro:'Ciao',
              tr:'Hoşça kal',
              role:'farewell',
              note:'Samimi ortamda veda.'
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
          en:'Buongiorno!',
          tr:'Günaydın!',
          gramNote:'Sabah selamlaması.',
          bd:[
            {
              ro:'Buongiorno',
              tr:'Günaydın',
              role:'greeting',
              note:'Öğlene kadar veya resmi gündüz.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Buongiorno!',
          tr:'Günaydın!',
          gramNote:'Karşılıklı selam.',
          bd:[
            {
              ro:'Buongiorno',
              tr:'Günaydın',
              role:'greeting',
              note:'Aynı selamla karşılık.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Come sta?',
          tr:'Nasılsınız?',
          gramNote:'Resmi hal hatır — Lei formu.',
          bd:[
            {
              ro:'Come sta',
              tr:'Nasılsınız',
              role:'question',
              note:'stare fiili — Lei (resmi).'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Sto bene, grazie. E Lei?',
          tr:'İyiyim, teşekkürler. Ya siz?',
          gramNote:'Standart cevap. Lei büyük harfle yazılır.',
          bd:[
            {
              ro:'Sto bene',
              tr:'İyiyim',
              role:'V',
              note:'stare + bene.'
            },
            {
              ro:'grazie',
              tr:'teşekkürler',
              role:'courtesy',
              note:'Nezaket.'
            },
            {
              ro:'E Lei',
              tr:'Ya siz',
              role:'question',
              note:'Resmi karşılık sorma.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Bene anche io, grazie. Arrivederci!',
          tr:'Ben de iyiyim, teşekkürler. Hoşça kalın!',
          gramNote:'anche io = ben de. Olumlu cevap + veda.',
          bd:[
            {
              ro:'anche io',
              tr:'ben de',
              role:'K',
              note:'Karşılık.'
            },
            {
              ro:'Arrivederci',
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
      transcript:'Ciao! Mi chiamo Emma. Piacere!',
      tr:'Selam! Benim adım Emma. Memnun oldum!',
      questions:[
        {
          q:'Come si chiama?',
          opts:[
            'Emma',
            'Ali',
            'Anna',
            'Marco'
          ],
          answer:0,
          tr:'Adı ne?'
        },
        {
          q:'Quale saluto usa?',
          opts:[
            'Arrivederci',
            'Ciao',
            'Buonanotte',
            'Grazie'
          ],
          answer:1,
          tr:'Hangi selamı kullanıyor?'
        },
        {
          q:'Cosa dice dopo il nome?',
          opts:[
            'Grazie',
            'Piacere',
            'Prego',
            'No'
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
