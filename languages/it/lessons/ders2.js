// ders2.js — Italian Lesson 2: Articoli & essere (beginner)
const L2 = {
  words:[
    {
      id:'w1',
      en:'l\'uomo',
      ro:'LU-o-mo',
      tr:'adam (eril)',
      tip:'l\' — ünlü ile başlayan eril isimlerde.',
      ctx:'uomo eril; ünlü ile başlar → l\'uomo.',
      examples:[
        {
          en:'L\'uomo è alto.',
          tr:'Adam uzun boylu.',
          bd:[
            {
              ro:'l\'',
              tr:'Belirli eril artikel (ünlü)',
              role:'K',
              note:'il → l\' (ünlü öncesi). uomo maskulin → l\'uomo.'
            },
            {
              ro:'uomo',
              tr:'adam',
              role:'O',
              note:'Eril isim.'
            },
            {
              ro:'è alto',
              tr:'uzun boylu',
              role:'V',
              note:'essere + sıfat.'
            }
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'lo studente',
      ro:'lo stu-DEN-te',
      tr:'öğrenci (erkek)',
      tip:'lo: s+ünsüz veya z, gn, ps, x ile başlayan eril.',
      ctx:'Özel eril kuralı.',
      examples:[
        {
          en:'Lo studente è italiano.',
          tr:'Öğrenci İtalyan.',
          bd:[
            {
              ro:'Lo',
              tr:'Belirli eril (özel)',
              role:'K',
              note:'s+consonant → lo.'
            },
            {
              ro:'studente',
              tr:'öğrenci',
              role:'O',
              note:'Eril.'
            }
          ]
        }
      ]
    },
    {
      id:'w3',
      en:'la donna',
      ro:'la DON-na',
      tr:'kadın (dişil)',
      tip:'Belirli dişil artikel: la.',
      ctx:'Dişil isimler la alır.',
      examples:[
        {
          en:'La donna è gentile.',
          tr:'Kadın nazik.',
          bd:[
            {
              ro:'La',
              tr:'Belirli dişil artikel',
              role:'K',
              note:'la = the (dişil).'
            },
            {
              ro:'donna',
              tr:'kadın',
              role:'O',
              note:'Dişil isim.'
            }
          ]
        }
      ]
    },
    {
      id:'w4',
      en:'l\'amico',
      ro:'la-MI-ko',
      tr:'arkadaş (erkek)',
      tip:'l\' — ünlü ile başlayan isimlerde.',
      ctx:'il/lo/la yerine l\'.',
      examples:[
        {
          en:'L\'amico è simpatico.',
          tr:'Arkadaş sevimli.',
          bd:[
            {
              ro:'l\'',
              tr:'belirli artikel (ünlü)',
              role:'K',
              note:'Ünlü öncesi kısaltma.'
            },
            {
              ro:'amico',
              tr:'arkadaş (erkek)',
              role:'O',
              note:'Eril.'
            }
          ]
        }
      ]
    },
    {
      id:'w5',
      en:'un libro',
      ro:'un LI-bro',
      tr:'bir kitap',
      tip:'Belirsiz eril: un.',
      ctx:'Sayılmayan tekil eril.',
      examples:[
        {
          en:'È un libro.',
          tr:'Bu bir kitap.',
          bd:[
            {
              ro:'un',
              tr:'bir (eril)',
              role:'K',
              note:'Belirsiz artikel — eril.'
            },
            {
              ro:'libro',
              tr:'kitap',
              role:'O',
              note:'Eril.'
            }
          ]
        }
      ]
    },
    {
      id:'w6',
      en:'uno studente',
      ro:'U-no stu-DEN-te',
      tr:'bir öğrenci',
      tip:'uno: z, gn, ps, s+ünsüz ile başlayan eril.',
      ctx:'Özel belirsiz eril.',
      examples:[
        {
          en:'È uno studente.',
          tr:'O bir öğrenci.',
          bd:[
            {
              ro:'uno',
              tr:'bir (özel eril)',
              role:'K',
              note:'lo ile aynı kural.'
            },
            {
              ro:'studente',
              tr:'öğrenci',
              role:'O',
              note:'Eril.'
            }
          ]
        }
      ]
    },
    {
      id:'w7',
      en:'una donna',
      ro:'U-na DON-na',
      tr:'bir kadın',
      tip:'Belirsiz dişil: una.',
      ctx:'Sayılmayan tekil dişil.',
      examples:[
        {
          en:'È una donna.',
          tr:'O bir kadın.',
          bd:[
            {
              ro:'una',
              tr:'bir (dişil)',
              role:'K',
              note:'Sadece dişil için una.'
            },
            {
              ro:'donna',
              tr:'kadın',
              role:'O',
              note:'Dişil.'
            }
          ]
        }
      ]
    },
    {
      id:'w8',
      en:'io sono',
      ro:'yo SO-no',
      tr:'ben ...im / ben ...yim',
      tip:'essere — 1. tekil.',
      ctx:'Kendini tanıtma.',
      examples:[
        {
          en:'Io sono Ali.',
          tr:'Ben Ali\'yim.',
          bd:[
            {
              ro:'Io',
              tr:'Ben',
              role:'S',
              note:'1. tekil özne (çoğu zaman düşer).'
            },
            {
              ro:'sono',
              tr:'...im',
              role:'V',
              note:'essere — io ile sono.'
            }
          ]
        }
      ]
    },
    {
      id:'w9',
      en:'tu sei',
      ro:'tu say',
      tr:'sen ...sin',
      tip:'essere — 2. tekil samimi.',
      ctx:'Arkadaşlarla.',
      examples:[
        {
          en:'Tu sei simpatico.',
          tr:'Sen sevimlisin.',
          bd:[
            {
              ro:'Tu',
              tr:'Sen',
              role:'S',
              note:'Samimi hitap.'
            },
            {
              ro:'sei',
              tr:'...sin',
              role:'V',
              note:'tu ile sei.'
            }
          ]
        }
      ]
    },
    {
      id:'w10',
      en:'lui/lei è',
      ro:'lu-i / lay eh',
      tr:'o ... (erkek/kadın)',
      tip:'essere — 3. tekil.',
      ctx:'Başkasından bahsederken.',
      examples:[
        {
          en:'Lui è studente.',
          tr:'O (erkek) öğrenci.',
          bd:[
            {
              ro:'Lui',
              tr:'O (erkek)',
              role:'S',
              note:'3. tekil eril.'
            },
            {
              ro:'è',
              tr:'...dir',
              role:'V',
              note:'lui/lei/Lei ile è.'
            }
          ]
        }
      ]
    },
    {
      id:'w11',
      en:'noi siamo',
      ro:'noy SYA-mo',
      tr:'biz ...iz',
      tip:'essere — 1. çoğul.',
      ctx:'Grup halinde.',
      examples:[
        {
          en:'Noi siamo amici.',
          tr:'Biz arkadaşız.',
          bd:[
            {
              ro:'Noi',
              tr:'Biz',
              role:'S',
              note:'1. çoğul.'
            },
            {
              ro:'siamo',
              tr:'...iz',
              role:'V',
              note:'noi ile siamo.'
            }
          ]
        }
      ]
    },
    {
      id:'w12',
      en:'voi siete',
      ro:'voy SYE-te',
      tr:'siz ...siniz',
      tip:'essere — 2. çoğul.',
      ctx:'Birden fazla kişiye.',
      examples:[
        {
          en:'Voi siete bravi.',
          tr:'Siz iyisiniz.',
          bd:[
            {
              ro:'Voi',
              tr:'Siz (çoğul)',
              role:'S',
              note:'2. çoğul.'
            },
            {
              ro:'siete',
              tr:'...siniz',
              role:'V',
              note:'voi ile siete.'
            }
          ]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Belirli Artikeller — il / lo / la / l\'',
      title_en:'Definite Articles',
      explanation:'İtalyancada isimler eril veya dişildir. Belirli artikel (the): il (çoğu eril), lo (s+ünsüz, z, gn, ps, x ile başlayan eril), la (dişil), l\' (ünlü ile başlayan). Çoğulda: i, gli, le. Türkçede artikel yok — isimle birlikte ezberle: il tavolo (masa), la porta (kapı).',
      table:[
        {
          pronoun:'Eril',
          form:'il / lo',
          example:'il libro, lo studente',
          tr:'kitap, öğrenci'
        },
        {
          pronoun:'Dişil',
          form:'la',
          example:'la donna, la porta',
          tr:'kadın, kapı'
        },
        {
          pronoun:'Ünlü',
          form:'l\'',
          example:'l\'amico, l\'amica',
          tr:'arkadaş'
        },
        {
          pronoun:'Çoğul',
          form:'i / gli / le',
          example:'i libri, gli studenti, le donne',
          tr:'kitaplar, öğrenciler, kadınlar'
        }
      ],
      note:'Sözlükte artikel ile ezberle: il cane (köpek), la gatta (dişi kedi).'
    },
    {
      id:'g2',
      title:'Belirsiz Artikeller — un / uno / una',
      title_en:'Indefinite Articles',
      explanation:'Belirsiz artikel "bir" anlamında: un (çoğu eril), uno (lo ile aynı kural), una (dişil). Çoğulda belirsiz artikel yok — sadece isim veya sayı: libri (kitaplar). Olumsuzda "non ho un ..." = ... yok.',
      table:[
        {
          pronoun:'Eril',
          form:'un / uno',
          example:'un libro, uno studente',
          tr:'bir kitap, bir öğrenci'
        },
        {
          pronoun:'Dişil',
          form:'una',
          example:'una donna, una porta',
          tr:'bir kadın, bir kapı'
        },
        {
          pronoun:'Olumlu',
          form:'È un/una ...',
          example:'È un tavolo.',
          tr:'Bu bir masa.'
        },
        {
          pronoun:'Meslek',
          form:'È un medico',
          example:'È un medico.',
          tr:'O bir doktor.'
        }
      ],
      note:'un + çoğu eril, uno + özel eril, una + dişil.'
    },
    {
      id:'g3',
      title:'Fiil: essere (olmak) — Tüm Çekimler',
      title_en:'Verb: essere (to be)',
      explanation:'essere = olmak. İtalyancanın en önemli fiili. Türkçedeki "-im, -sin, -dir" yapısının temeli. Düzensiz fiil — ezberle! Lei (resmi Siz) è alır — 3. tekil fiil kullanılır: Lei è italiano? (Siz İtalyan mısınız?). Loro = onlar → sono.',
      table:[
        {
          pronoun:'io',
          form:'sono',
          example:'Io sono Ali.',
          tr:'Ben Ali\'yim.'
        },
        {
          pronoun:'tu',
          form:'sei',
          example:'Tu sei gentile.',
          tr:'Sen naziksin.'
        },
        {
          pronoun:'lui/lei/Lei',
          form:'è',
          example:'Lei è professoressa.',
          tr:'Siz öğretmensiniz.'
        },
        {
          pronoun:'noi',
          form:'siamo',
          example:'Noi siamo amici.',
          tr:'Biz arkadaşız.'
        },
        {
          pronoun:'voi',
          form:'siete',
          example:'Voi siete benvenuti.',
          tr:'Hoş geldiniz.'
        },
        {
          pronoun:'loro',
          form:'sono',
          example:'Loro sono italiani.',
          tr:'Onlar İtalyan.'
        }
      ],
      note:'essere + sıfat/isim: Sono stanco (yorgunum). essere + meslek: Sono studente. Soru: Sei stanco? È lui?'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Io sono Ali.',
      tr:'Ben Ali\'yim.',
      prompt:'Kendini tanıt (essere)',
      gramNote:'io + sono — essere fiili 1. tekil.'
    },
    {
      id:'sp2',
      en:'È un libro.',
      tr:'Bu bir kitap.',
      prompt:'Belirsiz artikel kullan',
      gramNote:'È + un libro (eril).'
    },
    {
      id:'sp3',
      en:'Il tavolo è grande.',
      tr:'Masa büyük.',
      prompt:'il + isim + essere + sıfat'
    },
    {
      id:'sp4',
      en:'La donna è gentile.',
      tr:'Kadın nazik.',
      prompt:'la + isim + essere + sıfat'
    },
    {
      id:'sp5',
      en:'Noi siamo amici.',
      tr:'Biz arkadaşız.',
      prompt:'noi + siamo — essere çoğul'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Artikel Alıştırması',
      title_en:'Article Practice',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Cos\'è questo?',
          tr:'Bu ne?',
          gramNote:'Cos\'è = Bu nedir?',
          bd:[
            {
              ro:'Cos\'è',
              tr:'Bu nedir',
              role:'question',
              note:'cosa + è kısaltması.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'È un tavolo.',
          tr:'Bu bir masa.',
          gramNote:'È un ... = Bu bir ...',
          bd:[
            {
              ro:'È un tavolo',
              tr:'bir masa',
              role:'O',
              note:'tavolo eril → un.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'E quello?',
          tr:'Peki şu?',
          gramNote:'E = ve, peki.',
          bd:[
            {
              ro:'E quello',
              tr:'Peki şu',
              role:'question',
              note:'Başka bir şeyi sor.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'È la porta.',
          tr:'Bu kapı.',
          gramNote:'porta dişil → la.',
          bd:[
            {
              ro:'la porta',
              tr:'kapı',
              role:'O',
              note:'porta dişil → la belirli.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Il tavolo è grande?',
          tr:'Masa büyük mü?',
          gramNote:'Soru — fiil sona veya başa.',
          bd:[
            {
              ro:'È grande',
              tr:'büyük mü',
              role:'V',
              note:'Soru tonu veya ? ile.'
            },
            {
              ro:'il tavolo',
              tr:'masa',
              role:'S',
              note:'Eril özne.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Sì, è grande.',
          tr:'Evet, büyük.',
          gramNote:'è = o (masa) büyük.',
          bd:[
            {
              ro:'è grande',
              tr:'büyük',
              role:'V',
              note:'essere + sıfat.'
            }
          ]
        }
      ]
    },
    {
      id:'d2',
      title:'Kendini Tanıtma',
      title_en:'Self Introduction with essere',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Io sono Ali. Sono studente.',
          tr:'Ben Ali. Öğrenciyim.',
          gramNote:'İki cümle — isim + meslek.',
          bd:[
            {
              ro:'Io sono Ali',
              tr:'Ben Ali\'yim',
              role:'V',
              note:'essere + isim.'
            },
            {
              ro:'Sono studente',
              tr:'Öğrenciyim',
              role:'V',
              note:'essere + meslek — artikel yok.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Bene! Io sono Maria. Sono insegnante.',
          tr:'Güzel! Ben Maria. Öğretmenim.',
          gramNote:[
            {
              ro:'insegnante',
              tr:'öğretmen',
              role:'O',
              note:'Dişil/eril aynı form.'
            },
            {
              ro:'Sono insegnante',
              tr:'Öğretmenim',
              role:'V',
              note:'Meslek.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Lei è insegnante anche?',
          tr:'Siz de öğretmen misiniz?',
          gramNote:'Resmi soru — Lei + è.',
          bd:[
            {
              ro:'Lei è',
              tr:'Siz ... misiniz',
              role:'V',
              note:'Resmi soru.'
            },
            {
              ro:'anche',
              tr:'de / da',
              role:'K',
              note:'anche = de/da.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Sì, sono insegnante. E tu? Sei studente?',
          tr:'Evet, öğretmenim. Ya sen? Öğrenci misin?',
          gramNote:'tu\'ya geçiş — samimi ortam.',
          bd:[
            {
              ro:'Sei studente',
              tr:'Öğrenci misin',
              role:'V',
              note:'tu ile sei — samimi soru.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Sì, sono studente. Siamo nella lezione uno!',
          tr:'Evet, öğrenciyim. Birinci dersteyiz!',
          gramNote:[
            {
              ro:'Siamo',
              tr:'Biz ...iz',
              role:'V',
              note:'noi + siamo.'
            },
            {
              ro:'nella lezione uno',
              tr:'birinci derste',
              role:'K',
              note:'in + la lezione.'
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
      transcript:'È un uomo. L\'uomo è alto. La donna è gentile. Il bambino è piccolo.',
      tr:'Bu bir adam. Adam uzun boylu. Kadın nazik. Çocuk küçük.',
      questions:[
        {
          q:'Quale articolo ha "uomo"?',
          opts:[
            'la',
            'lo',
            'l\'',
            'una'
          ],
          answer:2,
          tr:'"uomo" hangi artikel alır?'
        },
        {
          q:'Come si dice "donna" in turco?',
          opts:[
            'çocuk',
            'kadın',
            'masa',
            'kapı'
          ],
          answer:1,
          tr:'"donna" Türkçede ne?'
        },
        {
          q:'Com\'è il bambino?',
          opts:[
            'alto',
            'piccolo',
            'gentile',
            'aperto'
          ],
          answer:1,
          tr:'Çocuk nasıl?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[2] = L2;
