// ders1.js — Arabic Lesson 1: Greetings & Introductions (beginner)
const L1 = {
  words:[
    {
      id:'w1',
      en:'مرحباً',
      ro:'marhaban',
      tr:'merhaba',
      tip:'En yaygın selamlama.'
    },
    {
      id:'w2',
      en:'صباح الخير',
      ro:'ṣabāḥ al-khayr',
      tr:'günaydın'
    },
    {
      id:'w3',
      en:'مساء الخير',
      ro:'masāʾ al-khayr',
      tr:'iyi akşamlar'
    },
    {
      id:'w4',
      en:'إلى اللقاء',
      ro:'ilā al-liqāʾ',
      tr:'hoşça kal'
    },
    {
      id:'w5',
      en:'شكراً',
      ro:'shukran',
      tr:'teşekkür ederim'
    },
    {
      id:'w6',
      en:'من فضلك',
      ro:'min faḍlik',
      tr:'lütfen'
    },
    {
      id:'w7',
      en:'نعم',
      ro:'naʿam',
      tr:'evet'
    },
    {
      id:'w8',
      en:'لا',
      ro:'lā',
      tr:'hayır'
    },
    {
      id:'w9',
      en:'ما اسمك؟',
      ro:'mā ismuka?',
      tr:'adın ne?'
    },
    {
      id:'w10',
      en:'اسمي علي',
      ro:'ismī ʿAlī',
      tr:'benim adım Ali'
    },
    {
      id:'w11',
      en:'تشرفت بلقائك',
      ro:'tasharraftu biliqāʾik',
      tr:'tanıştığıma memnun oldum'
    },
    {
      id:'w12',
      en:'كيف حالك؟',
      ro:'kayfa ḥāluka?',
      tr:'nasılsın?'
    },
    {
      id:'w13',
      en:'أنا بخير',
      ro:'anā bikhayr',
      tr:'iyiyim'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Selamlama Kalıpları ve Cevaplar',
      title_en:'Greeting Patterns and Responses',
      explanation:'Arapçada selamlaşmada klasik kalıp السلام عليكم (Selam sizin üzerinize olsun) çok yaygındır ve standart cevabı وعليكم السلام şeklindedir. Günlük kullanımda مرحباً da olur. Sabah selamına صباح الخير (Günaydın) cevabı صباح النور (Aydınlık sabahlar) şeklinde gelir. Arapçada selamlama bir ritüeldir — aceleyle geçilmez.',
      table:[
        {pronoun:'Selamlama', form:'السلام عليكم', example:'السلام عليكم!', tr:'Selamün aleyküm'},
        {pronoun:'Cevabı', form:'وعليكم السلام', example:'وعليكم السلام', tr:'Aleyküm selam'},
        {pronoun:'Sabah', form:'صباح الخير', example:'صباح الخير!', tr:'Günaydın'},
        {pronoun:'Sabah cevabı', form:'صباح النور', example:'صباح النور!', tr:'Aydınlık sabahlar'},
        {pronoun:'Akşam', form:'مساء الخير', example:'مساء الخير!', tr:'İyi akşamlar'},
        {pronoun:'Veda', form:'مع السلامة / إلى اللقاء', example:'مع السلامة!', tr:'Hoşça kal / Allah\'a emanet'}
      ],
      note:'Arapçada selamlama kalıpları çift yönlüdür: soran ve cevap veren için ayrı formlar vardır. Selamı almadan geçmek kaba sayılır.'
    },
    {
      id:'g2',
      title:'Kendini Tanıtma — اسمي ve أنا من',
      title_en:'Self-Introduction',
      explanation:'Tanışmada اسمي ... (Benim adım ...) ve أنا من ... (Ben ... denim) kalıpları kullanılır. ما اسمك؟ sorusu samimi, ما اسمكم؟ daha resmidir. تشرفت بلقائك (erkek muhatap) / تشرفت بلقائكِ (kadın muhatap) tanışma ifadesidir. Arapçada her zamir ve fiil erkek/kadın ayrımı gözetir.',
      table:[
        {pronoun:'Soru (samimi)', form:'ما اسمك؟', example:'ما اسمك؟', tr:'Adın ne?'},
        {pronoun:'Cevap', form:'اسمي علي', example:'اسمي علي.', tr:'Benim adım Ali.'},
        {pronoun:'Nereden', form:'أنا من تركيا', example:'أنا من تركيا.', tr:'Ben Türkiye\'den geliyorum.'},
        {pronoun:'Tanışma (erkek muhatap)', form:'تشرفت بلقائك', example:'تشرفت بلقائك.', tr:'Memnun oldum. (erkeğe)'},
        {pronoun:'Tanışma (kadın muhatap)', form:'تشرفت بلقائكِ', example:'تشرفت بلقائكِ.', tr:'Memnun oldum. (kadına)'},
        {pronoun:'Genel yanıt', form:'أنا أيضاً', example:'أنا أيضاً تشرفت.', tr:'Ben de memnun oldum.'}
      ],
      note:'اسمي ile أنا اسمي aynı anlama gelir — konuşma dilinde اسمي daha yaygındır. Yazı dilinde أنا tercih edilir.'
    },
    {
      id:'g3',
      title:'Cinsiyet Uyumu — Erkek ve Kadın Çekimi',
      title_en:'Gender Agreement — Masculine and Feminine',
      explanation:'Arapçada her isim eril (مذكر) veya dişil (مؤنث) olarak sınıflandırılır. Çoğu dişil isim sonda ة (te marbuta) ile biter. Hitap ekleri ve bazı fiiller cinsiyete göre değişir: أنتَ (erkek sen) ve أنتِ (kadın sen). Selamlaşmada da bu fark önemlidir.',
      table:[
        {pronoun:'Erkek sen', form:'أنتَ', example:'كيف حالكَ؟', tr:'Nasılsın? (erkeğe)'},
        {pronoun:'Kadın sen', form:'أنتِ', example:'كيف حالكِ؟', tr:'Nasılsın? (kadına)'},
        {pronoun:'Ben iyiyim', form:'أنا بخير', example:'أنا بخير، شكراً.', tr:'İyiyim, teşekkürler.'},
        {pronoun:'Teşekkür', form:'شكراً جزيلاً', example:'شكراً جزيلاً!', tr:'Çok teşekkürler!'},
        {pronoun:'Rica ederim', form:'عفواً', example:'عفواً.', tr:'Rica ederim / Pardon.'},
        {pronoun:'Lütfen', form:'من فضلك / من فضلكِ', example:'من فضلك!', tr:'Lütfen. (er/kad. ayrımı)'}
      ],
      note:'أنتَ (erkek) ve أنتِ (kadın) — yazıda hareke ile ayrılır; telaffuzda e/i sesi farklıdır. Günlük konuşmada bağlamdan anlaşılır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'مرحباً',
      tr:'Merhaba',
      prompt:'Selam ver'
    },
    {
      id:'sp2',
      en:'اسمي علي',
      tr:'Benim adım Ali',
      prompt:'Kendini tanıt'
    },
    {
      id:'sp3',
      en:'كيف حالك؟',
      tr:'Nasılsın?',
      prompt:'Hal hatır sor'
    },
    {
      id:'sp4',
      en:'أنا بخير',
      tr:'İyiyim',
      prompt:'Cevap ver'
    },
    {
      id:'sp5',
      en:'شكراً إلى اللقاء',
      tr:'Teşekkürler, hoşça kal',
      prompt:'Vedalaş'
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
          en:'مرحباً',
          tr:'Merhaba',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'marhaban',
              tr:'Merhaba',
              role:'greeting',
              note:'Açılış selamı.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'صباح الخير',
          tr:'Günaydın',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'ṣabāḥ al-khayr',
              tr:'Günaydın',
              role:'greeting',
              note:'Sabah selamı.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'ما اسمك؟',
          tr:'Adın ne?',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'اسمي آنا',
          tr:'Benim adım Anna',
          bd:[]
        },
        {
          speaker:'A',
          gender:'m',
          en:'تشرفت بلقائك',
          tr:'Memnun oldum',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'مرحباً. اسمي علي. تشرفت بلقائك.',
      tr:'Merhaba. Benim adım Ali. Memnun oldum.',
      questions:[
        {
          q:'Hangi ifade selamdır?',
          opts:[
            'مرحباً',
            'شكراً',
            'إلى اللقاء',
            'نعم'
          ],
          answer:0,
          tr:'Selam ifadesini seç'
        },
        {
          q:'Ali adını nasıl söylüyor?',
          opts:[
            'اسمي علي',
            'ما اسمك؟',
            'كيف حالك؟',
            'أنا بخير'
          ],
          answer:0,
          tr:'Kendini tanıtma'
        },
        {
          q:'Tanışma ifadesi hangisi?',
          opts:[
            'تشرفت بلقائك',
            'من فضلك',
            'لا',
            'صباح الخير'
          ],
          answer:0,
          tr:'Doğru kalıp'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[1] = L1;
