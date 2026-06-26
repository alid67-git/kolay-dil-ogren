// ders1.js - French Lesson 1: Greetings & Introductions (beginner)
const L1 = {
  words:[
    {
      id:'w1',
      en:'Bonjour',
      ro:'bon-JUR',
      tr:'Merhaba / Günaydın',
      tip:'Günün en yaygın ve güvenli selamıdır.',
      ctx:'Sabah ve gündüz resmi-gayriresmi ortamlarda.',
      examples:[
        {
          en:'Bonjour, madame.',
          tr:'Merhaba hanımefendi.',
          bd:[
            {
              ro:'Bonjour',
              tr:'Merhaba',
              role:'greeting',
              note:'Fransızcada ilk temas için en nötr selamlama.'
            }
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'Bonsoir',
      ro:'bon-SUAR',
      tr:'İyi akşamlar',
      tip:'Akşam saatlerinde kullanılır.',
      ctx:'Genelde gün batımından sonra.',
      examples:[
        {
          en:'Bonsoir, monsieur.',
          tr:'İyi akşamlar beyefendi.',
          bd:[
            {
              ro:'Bonsoir',
              tr:'İyi akşamlar',
              role:'greeting',
              note:'Hem karşılama hem kısa selam için kullanılır.'
            }
          ]
        }
      ]
    },
    {
      id:'w3',
      en:'Salut',
      ro:'sa-LÜ',
      tr:'Selam',
      tip:'Samimi ve günlük selamdır.',
      ctx:'Arkadaş, aile, yakın çevre.',
      examples:[
        {
          en:'Salut, ça va?',
          tr:'Selam, nasılsın?',
          bd:[
            {
              ro:'Salut',
              tr:'Selam',
              role:'greeting',
              note:'Resmi ortamlarda tercih edilmez.'
            }
          ]
        }
      ]
    },
    {
      id:'w4',
      en:'Au revoir',
      ro:'o rə-VUAR',
      tr:'Hoşça kalın / Görüşmek üzere',
      tip:'Standart vedalaşma ifadesidir.',
      ctx:'Her ortamda güvenli vedadır.',
      examples:[
        {
          en:'Merci, au revoir.',
          tr:'Teşekkürler, hoşça kalın.',
          bd:[
            {
              ro:'Au revoir',
              tr:'Hoşça kalın',
              role:'farewell',
              note:'Resmi ve günlük kullanımda çok yaygındır.'
            }
          ]
        }
      ]
    },
    {
      id:'w5',
      en:'Comment tu t\'appelles?',
      ro:'ko-MAN tü ta-PEL',
      tr:'Adın ne? (samimi)',
      tip:'`tu` ile samimi hitap sorusudur.',
      ctx:'Yakın yaş grubu, arkadaş çevresi.',
      examples:[
        {
          en:'Comment tu t\'appelles?',
          tr:'Adın ne?',
          bd:[
            {
              ro:'tu t\'appelles',
              tr:'adın ...',
              role:'question',
              note:'s\'appeler fiilinin `tu` çekimiyle isim sorulur.'
            }
          ]
        }
      ]
    },
    {
      id:'w6',
      en:'Je m\'appelle',
      ro:'jə ma-PEL',
      tr:'Benim adım ...',
      tip:'Kendini tanıtmanın temel kalıbıdır.',
      ctx:'İlk tanışma anında.',
      examples:[
        {
          en:'Je m\'appelle Ali.',
          tr:'Benim adım Ali.',
          bd:[
            {
              ro:'Je m\'appelle',
              tr:'Benim adım ...',
              role:'phrase',
              note:'s\'appeler fiilinin `je` formu.'
            }
          ]
        }
      ]
    },
    {
      id:'w7',
      en:'Enchanté',
      ro:'AN-şan-TE',
      tr:'Memnun oldum',
      tip:'Tanışma sonrasında nezaket ifadesidir.',
      ctx:'Erkek konuşmacı formu; kadın için Enchantée.',
      examples:[
        {
          en:'Enchanté de faire votre connaissance.',
          tr:'Sizi tanıdığıma memnun oldum.',
          bd:[
            {
              ro:'Enchanté',
              tr:'Memnun oldum',
              role:'courtesy',
              note:'Yeni biriyle tanışınca doğal bir kapanış ifadesidir.'
            }
          ]
        }
      ]
    },
    {
      id:'w8',
      en:'S\'il vous plaît',
      ro:'sil vu PLE',
      tr:'Lütfen',
      tip:'İstek cümlelerini nazikleştirir.',
      ctx:'Resmi ve günlük tüm ortamlarda.',
      examples:[
        {
          en:'Un café, s\'il vous plaît.',
          tr:'Bir kahve, lütfen.',
          bd:[
            {
              ro:'S\'il vous plaît',
              tr:'Lütfen',
              role:'courtesy',
              note:'Sipariş veya ricada tonu yumuşatır.'
            }
          ]
        }
      ]
    },
    {
      id:'w9',
      en:'Merci',
      ro:'mer-SI',
      tr:'Teşekkür ederim',
      tip:'En temel teşekkür ifadesidir.',
      ctx:'Her durumda kullanılır.',
      examples:[
        {
          en:'Merci beaucoup.',
          tr:'Çok teşekkür ederim.',
          bd:[
            {
              ro:'Merci',
              tr:'Teşekkürler',
              role:'courtesy',
              note:'beaucoup eklenince vurgu artar.'
            }
          ]
        }
      ]
    },
    {
      id:'w10',
      en:'De rien',
      ro:'də ri-YAN',
      tr:'Rica ederim',
      tip:'Teşekküre verilen standart cevaptır.',
      ctx:'Günlük ve resmi kullanım.',
      examples:[
        {
          en:'Merci. - De rien.',
          tr:'Teşekkürler. - Rica ederim.',
          bd:[
            {
              ro:'De rien',
              tr:'Rica ederim',
              role:'courtesy',
              note:'Kelime anlamı “bir şey değil” gibi düşünülebilir.'
            }
          ]
        }
      ]
    },
    {
      id:'w11',
      en:'Pardon',
      ro:'par-DON',
      tr:'Pardon / Affedersiniz',
      tip:'Dikkat çekme veya hafif özür için kullanılır.',
      ctx:'Yol sorma, yanlışlıkla çarpma vb.',
      examples:[
        {
          en:'Pardon, où est la gare?',
          tr:'Affedersiniz, istasyon nerede?',
          bd:[
            {
              ro:'Pardon',
              tr:'Affedersiniz',
              role:'courtesy',
              note:'Kısa ve nazik bir giriş ifadesidir.'
            }
          ]
        }
      ]
    },
    {
      id:'w12',
      en:'Comment vous appelez-vous?',
      ro:'ko-MAN vu za-ple-VU',
      tr:'Adınız nedir? (resmi)',
      tip:'`vous` ile resmi hitap sorusudur.',
      ctx:'Tanımadığınız veya resmi kişilere.',
      examples:[
        {
          en:'Comment vous appelez-vous, monsieur?',
          tr:'Adınız nedir beyefendi?',
          bd:[
            {
              ro:'vous',
              tr:'siz',
              role:'pronoun',
              note:'Hem çoğul hem resmi tekil hitap için kullanılır.'
            }
          ]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'tu ve vous farkı',
      title_en:'tu vs vous',
      explanation:'Fransızcada hitap seçimi sosyal mesafe ve resmiyet düzeyini doğrudan gösterir. `tu` Türkçedeki “sen”e karşılık gelir ve arkadaşlar, aile üyeleri, çocuklar veya samimi ortamlar için uygundur. `vous` ise Türkçedeki “siz” gibi çalışır; resmi tekil hitapta, yeni tanışmalarda, iş ortamında, öğretmen-müşteri ilişkilerinde ve saygı göstermek istediğiniz durumlarda tercih edilir. En kritik nokta şudur: `vous` hem çoğul “siz” hem de resmi tekil “siz” olarak kullanılır; anlamı bağlamdan anlarsınız. Güvenli strateji: İlk temaslarda `vous` ile başlayın, karşı taraf “On peut se tutoyer” (senli konuşabiliriz) derse `tu`ya geçin.',
      table:[
        {
          pronoun:'Samimi',
          form:'Comment tu t\'appelles?',
          example:'Salut, comment tu t\'appelles?',
          tr:'Selam, adın ne?'
        },
        {
          pronoun:'Resmi',
          form:'Comment vous appelez-vous?',
          example:'Bonjour, comment vous appelez-vous?',
          tr:'Merhaba, adınız nedir?'
        },
        {
          pronoun:'Cevap',
          form:'Je m\'appelle ...',
          example:'Je m\'appelle Elif.',
          tr:'Benim adım Elif.'
        },
        {
          pronoun:'Nezaket',
          form:'S\'il vous plaît / Merci',
          example:'Un ticket, s\'il vous plaît.',
          tr:'Bir bilet, lütfen.'
        }
      ],
      note:'Yeni bir ülkede ilk günlerde otomatik olarak `vous` kullanmak iletişim kazalarını önler. Özellikle yaşça büyük kişilerle ve hizmet sektöründe `tu` kullanmak kaba algılanabilir.'
    },
    {
      id:'g2',
      title:'Günün saatine göre selamlama',
      title_en:'Time-based greetings',
      explanation:'Fransızcada selamlaşma saatle birlikte değişir ve doğru seçim doğal görünmenizi sağlar. `Bonjour` sabah başlayıp akşamüstüne kadar kullanılan genel selamdır; mağaza, okul, ofis gibi her yerde güvenlidir. `Bonsoir` akşam saatlerinde kullanılır ve “iyi akşamlar” tonundadır. `Salut` yalnızca samimi bağlamlarda kullanılır; resmi görüşmede kaçınılmalıdır. Vedalaşırken en nötr seçenek `Au revoir`dur. Türkçede tek bir “merhaba” çoğu durumda yeterli olsa da Fransızcada zaman uyumu sosyal açıdan daha görünür bir kuraldır.',
      table:[
        {
          pronoun:'Sabah/Gündüz',
          form:'Bonjour',
          example:'Bonjour, madame.',
          tr:'Merhaba hanımefendi.'
        },
        {
          pronoun:'Akşam',
          form:'Bonsoir',
          example:'Bonsoir, monsieur.',
          tr:'İyi akşamlar beyefendi.'
        },
        {
          pronoun:'Samimi',
          form:'Salut',
          example:'Salut, Thomas!',
          tr:'Selam, Thomas!'
        },
        {
          pronoun:'Veda',
          form:'Au revoir',
          example:'Merci, au revoir.',
          tr:'Teşekkürler, hoşça kalın.'
        }
      ],
      note:'Kuralı basit tut: Şüphede kalırsan gündüz `Bonjour`, akşam `Bonsoir`, ayrılırken `Au revoir` kullan. Bu üçlü günlük yaşamın büyük kısmını kapsar.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Bonjour, je m\'appelle Ali.',
      tr:'Merhaba, benim adım Ali.',
      prompt:'Kendini tanıt'
    },
    {
      id:'sp2',
      en:'Comment vous appelez-vous?',
      tr:'Adınız nedir?',
      prompt:'Resmi isim sorusu sor'
    },
    {
      id:'sp3',
      en:'Comment tu t\'appelles?',
      tr:'Adın ne?',
      prompt:'Samimi isim sorusu sor'
    },
    {
      id:'sp4',
      en:'Un café, s\'il vous plaît.',
      tr:'Bir kahve, lütfen.',
      prompt:'Nezaketle istek yap'
    },
    {
      id:'sp5',
      en:'Merci, au revoir.',
      tr:'Teşekkürler, hoşça kalın.',
      prompt:'Kibarca vedalaş'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'İlk tanışma (resmi)',
      title_en:'First meeting (formal)',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Bonjour.',
          tr:'Merhaba.',
          gramNote:'Resmi başlangıçta en güvenli selam.',
          bd:[
            {
              ro:'Bonjour',
              tr:'Merhaba',
              role:'greeting',
              note:'Gündüz her resmi ortamda kullanılabilir.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Bonjour, comment vous appelez-vous?',
          tr:'Merhaba, adınız nedir?',
          gramNote:'`vous` ile resmi soru.',
          bd:[
            {
              ro:'vous',
              tr:'siz',
              role:'pronoun',
              note:'Resmi hitap ve çoğul için aynı form.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Je m\'appelle Ali. Enchanté.',
          tr:'Benim adım Ali. Memnun oldum.',
          gramNote:'Kendini tanıtma + nezaket.',
          bd:[
            {
              ro:'Je m\'appelle',
              tr:'Benim adım ...',
              role:'phrase',
              note:'İsim söylemenin en temel kalıbı.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Je m\'appelle Claire. Enchantée.',
          tr:'Benim adım Claire. Memnun oldum.',
          gramNote:'Kadın konuşmacı Enchantée kullanır.',
          bd:[
            {
              ro:'Enchantée',
              tr:'Memnun oldum',
              role:'courtesy',
              note:'Kadın biçimi sonuna -e alır.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Merci, au revoir.',
          tr:'Teşekkürler, hoşça kalın.',
          gramNote:'Nazik kapanış.',
          bd:[
            {
              ro:'Au revoir',
              tr:'Hoşça kalın',
              role:'farewell',
              note:'Resmi vedalaşmada standarttır.'
            }
          ]
        }
      ]
    },
    {
      id:'d2',
      title:'Arkadaşça selamlaşma',
      title_en:'Friendly greeting',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Salut! Comment tu t\'appelles?',
          tr:'Selam! Adın ne?',
          gramNote:'`tu` ile samimi kullanım.',
          bd:[
            {
              ro:'Salut',
              tr:'Selam',
              role:'greeting',
              note:'Yakın ilişkilerde doğal selam.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Je m\'appelle Emre.',
          tr:'Benim adım Emre.',
          gramNote:'Kısa tanıtım.',
          bd:[
            {
              ro:'Je m\'appelle',
              tr:'Benim adım',
              role:'phrase',
              note:'Hızlı tanışma kalıbı.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Enchantée, Emre.',
          tr:'Memnun oldum, Emre.',
          gramNote:'Samimi ama kibar tepki.',
          bd:[
            {
              ro:'Enchantée',
              tr:'Memnun oldum',
              role:'courtesy',
              note:'Konuşan kadın ise bu formu kullanır.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Merci! À bientôt.',
          tr:'Teşekkürler! Yakında görüşürüz.',
          gramNote:'Dostça kapanış.',
          bd:[
            {
              ro:'À bientôt',
              tr:'Yakında görüşürüz',
              role:'farewell',
              note:'Yakın çevrede sık kullanılan bir vedadır.'
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
      transcript:'Bonjour! Je m\'appelle Léa. Comment vous appelez-vous? - Je m\'appelle Murat. Enchanté. Merci, au revoir.',
      tr:'Merhaba! Benim adım Léa. Adınız nedir? - Benim adım Murat. Memnun oldum. Teşekkürler, hoşça kalın.',
      questions:[
        {
          q:'İlk konuşmacının adı nedir?',
          opts:[
            'Léa',
            'Murat',
            'Claire',
            'Ali'
          ],
          answer:0,
          tr:'İlk konuşmacı kim?'
        },
        {
          q:'Konuşmada hangi resmi soru geçiyor?',
          opts:[
            'Comment tu t\'appelles?',
            'Comment vous appelez-vous?',
            'Ça va?',
            'Qui es-tu?'
          ],
          answer:1,
          tr:'Hangi resmi soru kullanıldı?'
        },
        {
          q:'Diyalog nasıl bitiyor?',
          opts:[
            'Salut',
            'Merci, au revoir',
            'Pardon',
            'Bonsoir'
          ],
          answer:1,
          tr:'Kapanış ifadesi nedir?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[1] = L1;
