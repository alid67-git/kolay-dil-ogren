// ders2.js - French Lesson 2: Articles & être (beginner)
const L2 = {
  words:[
    {
      id:'w1',
      en:'le livre',
      ro:'lə li-VR',
      tr:'kitap (belirli)',
      tip:'`le` eril tekil belirli artikeldir.',
      ctx:'Belirli ve eril isimlerde kullanılır.',
      examples:[
        {
          en:'Le livre est intéressant.',
          tr:'Kitap ilginç.',
          bd:[
            {
              ro:'le',
              tr:'belirli artikel',
              role:'K',
              note:'Eril tekil isimlerden önce gelir.'
            },
            {
              ro:'livre',
              tr:'kitap',
              role:'O',
              note:'Eril isimdir.'
            }
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'la table',
      ro:'la TABL',
      tr:'masa (belirli)',
      tip:'`la` dişil tekil belirli artikeldir.',
      ctx:'Belirli ve dişil isimlerde.',
      examples:[
        {
          en:'La table est grande.',
          tr:'Masa büyük.',
          bd:[
            {
              ro:'la',
              tr:'belirli artikel',
              role:'K',
              note:'Dişil tekil isimlerden önce gelir.'
            },
            {
              ro:'table',
              tr:'masa',
              role:'O',
              note:'Dişil isimdir.'
            }
          ]
        }
      ]
    },
    {
      id:'w3',
      en:'l\'enfant',
      ro:'lan-FAN',
      tr:'çocuk (belirli)',
      tip:'Sesli harfle başlayan isimlerde `l\'` kullanılır.',
      ctx:'le/la yerine elizyon yapılır.',
      examples:[
        {
          en:'L\'enfant est content.',
          tr:'Çocuk mutlu.',
          bd:[
            {
              ro:'l\'',
              tr:'kısaltılmış artikel',
              role:'K',
              note:'le veya la sesli harf önünde düşer.'
            },
            {
              ro:'enfant',
              tr:'çocuk',
              role:'O',
              note:'Sesli harfle başladığı için l\' alır.'
            }
          ]
        }
      ]
    },
    {
      id:'w4',
      en:'un livre',
      ro:'en li-VR',
      tr:'bir kitap',
      tip:'`un` eril tekil belirsiz artikeldir.',
      ctx:'İlk kez bahsedilen eril isimlerde.',
      examples:[
        {
          en:'C\'est un livre.',
          tr:'Bu bir kitaptır.',
          bd:[
            {
              ro:'un',
              tr:'bir',
              role:'K',
              note:'Eril tekil belirsiz artikel.'
            },
            {
              ro:'livre',
              tr:'kitap',
              role:'O',
              note:'Eril isim.'
            }
          ]
        }
      ]
    },
    {
      id:'w5',
      en:'une table',
      ro:'ün TABL',
      tr:'bir masa',
      tip:'`une` dişil tekil belirsiz artikeldir.',
      ctx:'İlk kez bahsedilen dişil isimlerde.',
      examples:[
        {
          en:'C\'est une table.',
          tr:'Bu bir masadır.',
          bd:[
            {
              ro:'une',
              tr:'bir',
              role:'K',
              note:'Dişil tekil belirsiz artikel.'
            },
            {
              ro:'table',
              tr:'masa',
              role:'O',
              note:'Dişil isim.'
            }
          ]
        }
      ]
    },
    {
      id:'w6',
      en:'des livres',
      ro:'de li-VR',
      tr:'kitaplar / bazı kitaplar',
      tip:'`des` çoğul belirsiz artikeldir.',
      ctx:'Belirsiz çoğullarda kullanılır.',
      examples:[
        {
          en:'Ce sont des livres.',
          tr:'Bunlar kitaplar.',
          bd:[
            {
              ro:'des',
              tr:'bazı / -lar',
              role:'K',
              note:'Çoğul belirsiz artikel.'
            },
            {
              ro:'livres',
              tr:'kitaplar',
              role:'O',
              note:'livre kelimesinin çoğulu.'
            }
          ]
        }
      ]
    },
    {
      id:'w7',
      en:'je suis',
      ro:'jə sɥi',
      tr:'ben ...im',
      tip:'`être` fiilinin `je` çekimi.',
      ctx:'Kimlik, meslek, özellik bildirme.',
      examples:[
        {
          en:'Je suis étudiant.',
          tr:'Ben öğrenciyim.',
          bd:[
            {
              ro:'suis',
              tr:'...im',
              role:'V',
              note:'`être` fiilinin 1. tekil çekimi.'
            }
          ]
        }
      ]
    },
    {
      id:'w8',
      en:'tu es',
      ro:'tü e',
      tr:'sen ...sin',
      tip:'`être` fiilinin `tu` çekimi.',
      ctx:'Samimi hitapta kullanılır.',
      examples:[
        {
          en:'Tu es prêt.',
          tr:'Sen hazırsın.',
          bd:[
            {
              ro:'es',
              tr:'...sin',
              role:'V',
              note:'`tu` öznesiyle kullanılan çekim.'
            }
          ]
        }
      ]
    },
    {
      id:'w9',
      en:'il/elle est',
      ro:'il/el e',
      tr:'o ...dır',
      tip:'`il` erkek, `elle` kadın için üçüncü tekil.',
      ctx:'Kişiden bahsederken.',
      examples:[
        {
          en:'Elle est professeur.',
          tr:'O öğretmendir.',
          bd:[
            {
              ro:'est',
              tr:'...dır',
              role:'V',
              note:'3. tekil `être` çekimi.'
            }
          ]
        }
      ]
    },
    {
      id:'w10',
      en:'nous sommes',
      ro:'nu som',
      tr:'biz ...iz',
      tip:'`être` fiilinin 1. çoğul çekimi.',
      ctx:'Grup kendini tanıtırken.',
      examples:[
        {
          en:'Nous sommes amis.',
          tr:'Biz arkadaşız.',
          bd:[
            {
              ro:'sommes',
              tr:'...iz',
              role:'V',
              note:'`nous` ile kullanılır.'
            }
          ]
        }
      ]
    },
    {
      id:'w11',
      en:'vous êtes',
      ro:'vu zet',
      tr:'siz ...siniz',
      tip:'Resmi tekil ve çoğul için kullanılır.',
      ctx:'Nezaket ve çoğul hitap.',
      examples:[
        {
          en:'Vous êtes très gentil.',
          tr:'Siz çok naziksiniz.',
          bd:[
            {
              ro:'êtes',
              tr:'...siniz',
              role:'V',
              note:'`vous` çekimi; resmi tekil + çoğul.'
            }
          ]
        }
      ]
    },
    {
      id:'w12',
      en:'ils/elles sont',
      ro:'il/el son',
      tr:'onlar ...dır',
      tip:'`ils` erkek/karışık, `elles` kadın çoğul.',
      ctx:'Üçüncü çoğul anlatım.',
      examples:[
        {
          en:'Ils sont en classe.',
          tr:'Onlar sınıftalar.',
          bd:[
            {
              ro:'sont',
              tr:'...dırlar',
              role:'V',
              note:'3. çoğul `être` çekimi.'
            }
          ]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Belirli artikeller: le / la / l\' / les',
      title_en:'Definite articles',
      explanation:'Fransızcada belirli artikel Türkçedeki “-i belirli nesne” mantığına yakın bir kesinlik taşır, fakat cinsiyet ve sayı bilgisi de verir. `le` eril tekil, `la` dişil tekil, `les` çoğul formdur. İsim sesli harf veya sessiz h ile başlıyorsa `le` ve `la` yerine `l\'` gelir: `l\'enfant`, `l\'ami`, `l\'hôtel`. Bu dönüşüm (elision) telaffuzu kolaylaştırmak için zorunludur. Türkçede artikel olmadığı için en doğru öğrenme yöntemi her ismi artikeliyle ezberlemektir: `le livre`, `la table`, `l\'école`, `les livres`.',
      table:[
        {
          pronoun:'Eril tekil',
          form:'le',
          example:'le livre',
          tr:'kitap'
        },
        {
          pronoun:'Dişil tekil',
          form:'la',
          example:'la table',
          tr:'masa'
        },
        {
          pronoun:'Elision',
          form:'l\'',
          example:'l\'enfant',
          tr:'çocuk'
        },
        {
          pronoun:'Çoğul',
          form:'les',
          example:'les livres',
          tr:'kitaplar'
        }
      ],
      note:'Öğrenme ipucu: Yeni bir kelimeyi asla tek başına yazma; mutlaka artikeliyle not al. Bu alışkanlık ileride sıfat uyumu ve zamir seçiminde büyük hata payını azaltır.'
    },
    {
      id:'g2',
      title:'Belirsiz artikeller: un / une / des',
      title_en:'Indefinite articles',
      explanation:'Belirsiz artikel bir nesneden ilk kez söz ederken veya “herhangi bir” anlamı verirken kullanılır. `un` eril tekil, `une` dişil tekil, `des` çoğul belirsiz formdur. Türkçedeki “bir” kelimesi cinsiyet ayırmaz; Fransızcada ise cinsiyet zorunlu olarak artikelle birlikte görünür. Örnek: `un livre` (bir kitap), `une table` (bir masa), `des livres` (kitaplar / bazı kitaplar). Olumsuz cümlede çoğu durumda `des` yerine `de` görülür (`Je n\'ai pas de livres`) ama bu ayrıntı başlangıç seviyesinde sadece farkındalık olarak bilinmesi yeterlidir.',
      table:[
        {
          pronoun:'Eril tekil',
          form:'un',
          example:'un livre',
          tr:'bir kitap'
        },
        {
          pronoun:'Dişil tekil',
          form:'une',
          example:'une table',
          tr:'bir masa'
        },
        {
          pronoun:'Çoğul',
          form:'des',
          example:'des livres',
          tr:'kitaplar / bazı kitaplar'
        },
        {
          pronoun:'Yapı',
          form:'C\'est ...',
          example:'C\'est un livre.',
          tr:'Bu bir kitap.'
        }
      ],
      note:'Başlangıçta hedef: cinsiyeti mükemmel tahmin etmek değil, artikeli atlamamak. Fransızcada artikelsiz isim çoğu zaman eksik ve yapay duyulur.'
    },
    {
      id:'g3',
      title:'être fiili çekimi',
      title_en:'Conjugation of être',
      explanation:'`être` Fransızcanın en temel düzensiz fiilidir ve Türkçedeki ek-fiil işlevlerinin önemli bir kısmını karşılar. Kimlik, meslek, milliyet, durum ve tanımlama cümlelerinde çok sık geçer. Çekimler: `je suis`, `tu es`, `il/elle est`, `nous sommes`, `vous êtes`, `ils/elles sont`. Özellikle `vous êtes` formu hem resmi tekil hem çoğul için kullanıldığı için iletişimde stratejik öneme sahiptir. Soru yaparken tonlama, `est-ce que` veya devrik yapı kullanılabilir; başlangıçta önce doğru çekimi oturtmak en kritik adımdır.',
      table:[
        {
          pronoun:'je',
          form:'suis',
          example:'Je suis prêt.',
          tr:'Ben hazırım.'
        },
        {
          pronoun:'tu',
          form:'es',
          example:'Tu es étudiant.',
          tr:'Sen öğrencisin.'
        },
        {
          pronoun:'il/elle',
          form:'est',
          example:'Elle est médecin.',
          tr:'O doktordur.'
        },
        {
          pronoun:'nous',
          form:'sommes',
          example:'Nous sommes ici.',
          tr:'Biz buradayız.'
        },
        {
          pronoun:'vous',
          form:'êtes',
          example:'Vous êtes en retard.',
          tr:'Siz geç kaldınız.'
        },
        {
          pronoun:'ils/elles',
          form:'sont',
          example:'Ils sont contents.',
          tr:'Onlar mutlular.'
        }
      ],
      note:'Hızlı kontrol cümlesi: “Ben...”, “Sen...”, “O...” diye altı cümle kur ve her birine uygun `être` formunu yerleştir. Bu egzersiz akıcılığı hızla artırır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Le livre est sur la table.',
      tr:'Kitap masanın üstünde.',
      prompt:'Belirli artikellerle cümle kur'
    },
    {
      id:'sp2',
      en:'C\'est un livre.',
      tr:'Bu bir kitaptır.',
      prompt:'un artikelini kullan'
    },
    {
      id:'sp3',
      en:'C\'est une table.',
      tr:'Bu bir masadır.',
      prompt:'une artikelini kullan'
    },
    {
      id:'sp4',
      en:'Je suis étudiant.',
      tr:'Ben öğrenciyim.',
      prompt:'je suis yapısını söyle'
    },
    {
      id:'sp5',
      en:'Nous sommes prêts.',
      tr:'Biz hazırız.',
      prompt:'nous sommes çekimini kullan'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Sınıfta nesneler',
      title_en:'Objects in class',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Qu\'est-ce que c\'est?',
          tr:'Bu nedir?',
          gramNote:'Nesne tanımlama sorusu.',
          bd:[
            {
              ro:'Qu\'est-ce que c\'est?',
              tr:'Bu nedir?',
              role:'question',
              note:'Yeni bir nesneyi sorarken çok kullanılır.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'C\'est un livre.',
          tr:'Bu bir kitaptır.',
          gramNote:'`un` ile belirsiz tanım.',
          bd:[
            {
              ro:'un livre',
              tr:'bir kitap',
              role:'O',
              note:'Eril tekil isim + belirsiz artikel.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Et là?',
          tr:'Peki ya oradaki?',
          gramNote:'Devam sorusu.',
          bd:[
            {
              ro:'Et là?',
              tr:'Peki ya oradaki?',
              role:'question',
              note:'Kısa ve doğal takip sorusu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'C\'est la table.',
          tr:'Bu masadır.',
          gramNote:'Belirli nesneyi gösterir.',
          bd:[
            {
              ro:'la table',
              tr:'masa',
              role:'O',
              note:'Dişil tekil + belirli artikel.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'L\'enfant est où?',
          tr:'Çocuk nerede?',
          gramNote:'`l\'` kullanımı örneği.',
          bd:[
            {
              ro:'L\'enfant',
              tr:'çocuk',
              role:'O',
              note:'Sesli harfle başladığı için l\' kullanılır.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'L\'enfant est ici.',
          tr:'Çocuk burada.',
          gramNote:'`être` ile yer bildirimi.',
          bd:[
            {
              ro:'est ici',
              tr:'buradadır',
              role:'V',
              note:'3. tekil + yer zarfı.'
            }
          ]
        }
      ]
    },
    {
      id:'d2',
      title:'Kendini tanıtma',
      title_en:'Self introduction',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Bonjour, je suis Cem.',
          tr:'Merhaba, ben Cem.',
          gramNote:'`je suis` ile tanıtım.',
          bd:[
            {
              ro:'je suis',
              tr:'ben ...im',
              role:'V',
              note:'`être` 1. tekil.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Bonjour, je suis Elif.',
          tr:'Merhaba, ben Elif.',
          gramNote:'Paralel yapı.',
          bd:[
            {
              ro:'je suis Elif',
              tr:'ben Elifim',
              role:'phrase',
              note:'İsimle doğrudan kullanılabilir.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Vous êtes professeur?',
          tr:'Siz öğretmen misiniz?',
          gramNote:'Resmi soru formu.',
          bd:[
            {
              ro:'vous êtes',
              tr:'siz ...siniz',
              role:'V',
              note:'Resmi tekil veya çoğul olabilir.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Oui, je suis professeur.',
          tr:'Evet, ben öğretmenim.',
          gramNote:'Kısa olumlu cevap.',
          bd:[
            {
              ro:'Oui',
              tr:'Evet',
              role:'K',
              note:'Olumlu yanıt kalıbı.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Nous sommes voisins.',
          tr:'Biz komşuyuz.',
          gramNote:'`nous sommes` örneği.',
          bd:[
            {
              ro:'nous sommes',
              tr:'biz ...iz',
              role:'V',
              note:'1. çoğul çekim.'
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
      transcript:'C\'est un livre. La table est grande. Je suis étudiant. Vous êtes professeur. Ils sont en classe.',
      tr:'Bu bir kitaptır. Masa büyüktür. Ben öğrenciyim. Siz öğretmensiniz. Onlar sınıftalar.',
      questions:[
        {
          q:'Hangi cümlede dişil belirli artikel var?',
          opts:[
            'un livre',
            'la table',
            'je suis',
            'ils sont'
          ],
          answer:1,
          tr:'Dişil belirli artikel hangisi?'
        },
        {
          q:'`Vous êtes` ne anlama gelir?',
          opts:[
            'ben ...im',
            'sen ...sin',
            'siz ...siniz',
            'onlar ...dır'
          ],
          answer:2,
          tr:'`vous êtes` karşılığı nedir?'
        },
        {
          q:'Son cümledeki özne nedir?',
          opts:[
            'Je',
            'Vous',
            'Ils',
            'Tu'
          ],
          answer:2,
          tr:'Son cümlenin öznesi hangisi?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[2] = L2;
