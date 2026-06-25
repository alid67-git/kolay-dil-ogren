// ders2.js — German Lesson 2: Artikel & sein (beginner)
const L2 = {
  words:[
    {
      id:'w1',
      en:'der Mann',
      ro:'der MAN',
      tr:'adam (eril)',
      tip:'Eril artikel: der.',
      ctx:'Maskulin isimler der alır.',
      examples:[
        {
          en:'Der Mann ist groß.',
          tr:'Adam uzun boylu.',
          bd:[
            {
              ro:'Der',
              tr:'Belirli eril artikel',
              role:'K',
              note:'der = the (eril). Mann maskulin → der.'
            },
            {
              ro:'Mann',
              tr:'adam',
              role:'O',
              note:'Maskulin isim.'
            },
            {
              ro:'ist groß',
              tr:'uzun boylu',
              role:'V',
              note:'sein + sıfat.'
            }
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'die Frau',
      ro:'dee FRAU',
      tr:'kadın (dişil)',
      tip:'Dişil artikel: die.',
      ctx:'Feminin isimler die alır.',
      examples:[
        {
          en:'Die Frau ist nett.',
          tr:'Kadın nazik.',
          bd:[
            {
              ro:'Die',
              tr:'Belirli dişil artikel',
              role:'K',
              note:'die = the (dişil).'
            },
            {
              ro:'Frau',
              tr:'kadın',
              role:'O',
              note:'Feminin isim.'
            },
            {
              ro:'ist nett',
              tr:'nazik',
              role:'V',
              note:'sein + sıfat.'
            }
          ]
        }
      ]
    },
    {
      id:'w3',
      en:'das Kind',
      ro:'das KINT',
      tr:'çocuk (nötr)',
      tip:'Nötr artikel: das.',
      ctx:'Neutrum isimler das alır.',
      examples:[
        {
          en:'Das Kind spielt.',
          tr:'Çocuk oynuyor.',
          bd:[
            {
              ro:'Das',
              tr:'Belirli nötr artikel',
              role:'K',
              note:'das = the (nötr).'
            },
            {
              ro:'Kind',
              tr:'çocuk',
              role:'O',
              note:'Neutrum isim — cinsiyet belirtmez.'
            }
          ]
        }
      ]
    },
    {
      id:'w4',
      en:'ein Mann',
      ro:'ayn MAN',
      tr:'bir adam',
      tip:'Belirsiz eril artikel: ein.',
      ctx:'Sayılmayan tekil eril.',
      examples:[
        {
          en:'Das ist ein Mann.',
          tr:'Bu bir adam.',
          bd:[
            {
              ro:'ein',
              tr:'bir (eril)',
              role:'K',
              note:'Belirsiz artikel — eril ve nötr için ein.'
            },
            {
              ro:'Mann',
              tr:'adam',
              role:'O',
              note:'Maskulin.'
            }
          ]
        }
      ]
    },
    {
      id:'w5',
      en:'eine Frau',
      ro:'AY-ne FRAU',
      tr:'bir kadın',
      tip:'Belirsiz dişil artikel: eine.',
      ctx:'Sayılmayan tekil dişil.',
      examples:[
        {
          en:'Sie ist eine Lehrerin.',
          tr:'O bir öğretmen.',
          bd:[
            {
              ro:'eine',
              tr:'bir (dişil)',
              role:'K',
              note:'Belirsiz artikel — sadece dişil için eine.'
            },
            {
              ro:'Lehrerin',
              tr:'öğretmen (kadın)',
              role:'O',
              note:'Dişil meslek ismi -in eki alır.'
            }
          ]
        }
      ]
    },
    {
      id:'w6',
      en:'ich bin',
      ro:'ikh bin',
      tr:'ben ...im / ben ...yim',
      tip:'sein — 1. tekil.',
      ctx:'Kendini tanıtma, durum.',
      examples:[
        {
          en:'Ich bin Ali.',
          tr:'Ben Ali\'yim.',
          bd:[
            {
              ro:'Ich',
              tr:'Ben',
              role:'S',
              note:'1. tekil özne.'
            },
            {
              ro:'bin',
              tr:'...im / ...yim',
              role:'V',
              note:'sein fiili — ich ile bin. Türkçede "-im/-yim" eki karşılığı.'
            }
          ]
        }
      ]
    },
    {
      id:'w7',
      en:'du bist',
      ro:'du bist',
      tr:'sen ...sin',
      tip:'sein — 2. tekil samimi.',
      ctx:'Arkadaşlarla.',
      examples:[
        {
          en:'Du bist freundlich.',
          tr:'Sen dost canlısısın.',
          bd:[
            {
              ro:'Du',
              tr:'Sen',
              role:'S',
              note:'Samimi hitap.'
            },
            {
              ro:'bist',
              tr:'...sin',
              role:'V',
              note:'du ile bist.'
            }
          ]
        }
      ]
    },
    {
      id:'w8',
      en:'er ist / sie ist',
      ro:'er ist / zee ist',
      tr:'o ... (erkek/kadın)',
      tip:'sein — 3. tekil.',
      ctx:'Başkasından bahsederken.',
      examples:[
        {
          en:'Er ist Student.',
          tr:'O (erkek) öğrenci.',
          bd:[
            {
              ro:'Er',
              tr:'O (erkek)',
              role:'S',
              note:'3. tekil eril.'
            },
            {
              ro:'ist',
              tr:'...dir',
              role:'V',
              note:'er/sie/es ile ist.'
            },
            {
              ro:'Student',
              tr:'öğrenci (erkek)',
              role:'O',
              note:'Maskulin meslek.'
            }
          ]
        }
      ]
    },
    {
      id:'w9',
      en:'wir sind',
      ro:'veer zint',
      tr:'biz ...iz',
      tip:'sein — 1. çoğul.',
      ctx:'Grup halinde.',
      examples:[
        {
          en:'Wir sind Freunde.',
          tr:'Biz arkadaşız.',
          bd:[
            {
              ro:'Wir',
              tr:'Biz',
              role:'S',
              note:'1. çoğul.'
            },
            {
              ro:'sind',
              tr:'...iz',
              role:'V',
              note:'wir/sie/Sie ile sind.'
            }
          ]
        }
      ]
    },
    {
      id:'w10',
      en:'der Tisch',
      ro:'der TISH',
      tr:'masa',
      tip:'Maskulin — der.',
      ctx:'Ev eşyası.',
      examples:[
        {
          en:'Der Tisch ist groß.',
          tr:'Masa büyük.',
          bd:[
            {
              ro:'Der Tisch',
              tr:'masa',
              role:'O',
              note:'Tisch maskulin → der.'
            }
          ]
        }
      ]
    },
    {
      id:'w11',
      en:'die Tür',
      ro:'dee TÜR',
      tr:'kapı',
      tip:'Feminin — die.',
      ctx:'Ev eşyası.',
      examples:[
        {
          en:'Die Tür ist offen.',
          tr:'Kapı açık.',
          bd:[
            {
              ro:'Die Tür',
              tr:'kapı',
              role:'O',
              note:'Tür feminin → die.'
            }
          ]
        }
      ]
    },
    {
      id:'w12',
      en:'das Buch',
      ro:'das BUKH',
      tr:'kitap',
      tip:'Neutrum — das.',
      ctx:'Eşya.',
      examples:[
        {
          en:'Das Buch ist interessant.',
          tr:'Kitap ilginç.',
          bd:[
            {
              ro:'Das Buch',
              tr:'kitap',
              role:'O',
              note:'Buch neutrum → das.'
            }
          ]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Belirli Artikel — der / die / das',
      title_en:'Definite Articles',
      explanation:'Almancada her ismin cinsiyeti vardır: maskulin (eril), feminin (dişil), neutrum (nötr). Belirli artikel (the = the) cinsiyete göre değişir: der (eril), die (dişil), das (nötr). Çoğulda hepsi die olur. Türkçede artikel yok — bu Almanca\'nın en zor kısmı. İsimle birlikte artikelini ezberle: der Tisch, die Tür, das Buch.',
      table:[
        {
          pronoun:'Eril (m)',
          form:'der',
          example:'der Mann, der Tisch',
          tr:'adam, masa'
        },
        {
          pronoun:'Dişil (f)',
          form:'die',
          example:'die Frau, die Tür',
          tr:'kadın, kapı'
        },
        {
          pronoun:'Nötr (n)',
          form:'das',
          example:'das Kind, das Buch',
          tr:'çocuk, kitap'
        },
        {
          pronoun:'Çoğul',
          form:'die',
          example:'die Männer, die Kinder',
          tr:'adamlar, çocuklar'
        }
      ],
      note:'İpucu: Sözlükte her ismin yanında artikel yazar: der Hund (köpek), die Katze (kedi). Ezberle!'
    },
    {
      id:'g2',
      title:'Belirsiz Artikel — ein / eine',
      title_en:'Indefinite Articles',
      explanation:'Belirsiz artikel "bir" anlamında: ein (eril/nötr), eine (dişil). Çoğulda belirsiz artikel yok — sadece isim: Männer (adamlar). Olumsuzda "kein" kullanılır (sonraki derslerde).',
      table:[
        {
          pronoun:'Eril/Nötr',
          form:'ein',
          example:'ein Mann, ein Kind',
          tr:'bir adam, bir çocuk'
        },
        {
          pronoun:'Dişil',
          form:'eine',
          example:'eine Frau, eine Tür',
          tr:'bir kadın, bir kapı'
        },
        {
          pronoun:'Olumlu',
          form:'Das ist ein ...',
          example:'Das ist ein Buch.',
          tr:'Bu bir kitap.'
        },
        {
          pronoun:'Meslek',
          form:'Er ist ein ...',
          example:'Er ist ein Arzt.',
          tr:'O bir doktor.'
        }
      ],
      note:'ein + maskulin/nötr, eine + feminin. Artikel ismin cinsiyetini gösterir.'
    },
    {
      id:'g3',
      title:'Fiil: sein (olmak) — Tüm Çekimler',
      title_en:'Verb: sein (to be)',
      explanation:'sein = olmak. Almancanın en önemli fiili. Türkçedeki "-im, -sin, -dir" ve "var/yok" yapısının temeli. Düzensiz fiil — ezberle! Sie (resmi Siz) büyük harfle yazılır ve sind alır — sie (onlar) ile aynı fiil ama bağlamdan anlaşılır.',
      table:[
        {
          pronoun:'ich',
          form:'bin',
          example:'Ich bin Ali.',
          tr:'Ben Ali\'yim.'
        },
        {
          pronoun:'du',
          form:'bist',
          example:'Du bist nett.',
          tr:'Sen naziksin.'
        },
        {
          pronoun:'er/sie/es',
          form:'ist',
          example:'Er ist Lehrer.',
          tr:'O öğretmen.'
        },
        {
          pronoun:'wir',
          form:'sind',
          example:'Wir sind Freunde.',
          tr:'Biz arkadaşız.'
        },
        {
          pronoun:'ihr',
          form:'seid',
          example:'Ihr seid willkommen.',
          tr:'Hoş geldiniz.'
        },
        {
          pronoun:'sie/Sie',
          form:'sind',
          example:'Sie sind freundlich.',
          tr:'Siz naziksiniz / Onlar nazik.'
        }
      ],
      note:'sein + sıfat/isim: Ich bin müde (yorgunum). sein + meslek: Ich bin Student. Soru: Bist du müde? Ist er da?'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Ich bin Ali.',
      tr:'Ben Ali\'yim.',
      prompt:'Kendini tanıt (sein)',
      gramNote:'ich + bin — sein fiili 1. tekil.'
    },
    {
      id:'sp2',
      en:'Das ist ein Buch.',
      tr:'Bu bir kitap.',
      prompt:'Belirsiz artikel kullan',
      gramNote:'das (nötr) + ist + ein Buch (nötr).'
    },
    {
      id:'sp3',
      en:'Der Mann ist groß.',
      tr:'Adam uzun boylu.',
      prompt:'der + isim + sein + sıfat'
    },
    {
      id:'sp4',
      en:'Die Frau ist nett.',
      tr:'Kadın nazik.',
      prompt:'die + isim + sein + sıfat'
    },
    {
      id:'sp5',
      en:'Wir sind Freunde.',
      tr:'Biz arkadaşız.',
      prompt:'wir + sind — sein çoğul'
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
          en:'Was ist das?',
          tr:'Bu ne?',
          gramNote:'Was ist das? = Bu nedir? — tanımadığın bir şeyi sorarken.',
          bd:[
            {
              ro:'Was',
              tr:'Ne',
              role:'question',
              note:'Soru kelimesi.'
            },
            {
              ro:'ist das',
              tr:'bu ...dır',
              role:'V',
              note:'sein — das (nötr) ile ist.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Das ist ein Tisch.',
          tr:'Bu bir masa.',
          gramNote:'Das ist ein ... = Bu bir ... Tisch maskulin ama das ile başlarız.',
          bd:[
            {
              ro:'Das ist',
              tr:'Bu ...dır',
              role:'V',
              note:'Nötr gösteren das.'
            },
            {
              ro:'ein Tisch',
              tr:'bir masa',
              role:'O',
              note:'Tisch maskulin → ein (belirsiz).'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Und was ist das?',
          tr:'Peki bu ne?',
          gramNote:'Und = ve, peki.',
          bd:[
            {
              ro:'Und',
              tr:'Ve / peki',
              role:'K',
              note:'Bağlaç.'
            },
            {
              ro:'was ist das',
              tr:'bu ne',
              role:'question',
              note:'Tekrar soru.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Das ist die Tür.',
          tr:'Bu kapı.',
          gramNote:'Tür feminin → die (belirli). Tanıdığın şey için die.',
          bd:[
            {
              ro:'die Tür',
              tr:'kapı',
              role:'O',
              note:'Tür feminin → die belirli artikel.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Ist der Tisch groß?',
          tr:'Masa büyük mü?',
          gramNote:'Ja/Nein sorusu: fiil başa gelir.',
          bd:[
            {
              ro:'Ist',
              tr:'... mı?',
              role:'V',
              note:'Soru — fiil başta.'
            },
            {
              ro:'der Tisch',
              tr:'masa',
              role:'S',
              note:'Maskulin özne.'
            },
            {
              ro:'groß',
              tr:'büyük',
              role:'adj',
              note:'Sıfat — fiilden sonra.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Ja, er ist groß.',
          tr:'Evet, o büyük.',
          gramNote:'er = der Tisch (eril isimler er ile zamir)',
          bd:[
            {
              ro:'er',
              tr:'o (eril)',
              role:'S',
              note:'Maskulin isimler er zamir alır.'
            },
            {
              ro:'ist groß',
              tr:'büyük',
              role:'V',
              note:'sein + sıfat.'
            }
          ]
        }
      ]
    },
    {
      id:'d2',
      title:'Kendini Tanıtma',
      title_en:'Self Introduction with sein',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Ich bin Ali. Ich bin Student.',
          tr:'Ben Ali. Ben öğrenciyim.',
          gramNote:'Zwei Sätze mit sein — isim + meslek.',
          bd:[
            {
              ro:'Ich bin Ali',
              tr:'Ben Ali\'yim',
              role:'V',
              note:'sein + isim.'
            },
            {
              ro:'Ich bin Student',
              tr:'Öğrenciyim',
              role:'V',
              note:'sein + meslek — artikel yok.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Schön! Ich bin Maria. Ich bin Lehrerin.',
          tr:'Güzel! Ben Maria. Ben öğretmenim.',
          gramNote:'Lehrerin = kadın öğretmen (feminin).',
          bd:[
            {
              ro:'Schön',
              tr:'Güzel',
              role:'adj',
              note:'Olumlu tepki.'
            },
            {
              ro:'Lehrerin',
              tr:'öğretmen (kadın)',
              role:'O',
              note:'-in eki dişil meslek.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Sind Sie auch Lehrerin?',
          tr:'Siz de öğretmen misiniz?',
          gramNote:'Resmi soru — Sie + sind (fiil başta).',
          bd:[
            {
              ro:'Sind Sie',
              tr:'Misiniz',
              role:'V',
              note:'Resmi soru — fiil başta.'
            },
            {
              ro:'auch',
              tr:'de / da',
              role:'K',
              note:'auch = de/da.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Ja, ich bin Lehrerin. Und du? Bist du Student?',
          tr:'Evet, öğretmenim. Ya sen? Öğrenci misin?',
          gramNote:'du\'ya geçiş — samimi ortam. Bist du = sen ... misin?',
          bd:[
            {
              ro:'Bist du',
              tr:'Sen ... misin',
              role:'V',
              note:'du ile bist — samimi soru.'
            },
            {
              ro:'Student',
              tr:'öğrenci (erkek)',
              role:'O',
              note:'Ali erkek → Student.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Ja, ich bin Student. Wir sind in ders eins!',
          tr:'Evet, öğrenciyim. Birinci dersteyiz!',
          gramNote:[
            {
              ro:'Wir sind',
              tr:'Biz ...iz',
              role:'V',
              note:'wir + sind.'
            },
            {
              ro:'in ders eins',
              tr:'birinci derste',
              role:'K',
              note:'in + dativ — içinde.'
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
      transcript:'Das ist ein Mann. Der Mann ist groß. Die Frau ist nett. Das Kind ist klein.',
      tr:'Bu bir adam. Adam uzun boylu. Kadın nazik. Çocuk küçük.',
      questions:[
        {
          q:'Welcher Artikel hat "Mann"?',
          opts:[
            'die',
            'das',
            'der',
            'ein'
          ],
          answer:2,
          tr:'"Mann" hangi artikel alır?'
        },
        {
          q:'Wie heißt "Frau" auf Türkisch?',
          opts:[
            'çocuk',
            'kadın',
            'masa',
            'kapı'
          ],
          answer:1,
          tr:'"Frau" Türkçede ne?'
        },
        {
          q:'Was ist das Kind?',
          opts:[
            'groß',
            'klein',
            'nett',
            'offen'
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
