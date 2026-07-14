// ders1.js — Russian Lesson 1: Greetings & Introductions (beginner)
const L1 = {
  words:[
    {
      id:'w1',
      en:'привет',
      ro:'privet',
      tr:'merhaba',
      tip:'En yaygın selamlama.'
    },
    {
      id:'w2',
      en:'доброе утро',
      ro:'dobroye utro',
      tr:'günaydın'
    },
    {
      id:'w3',
      en:'добрый вечер',
      ro:'dobryy vecher',
      tr:'iyi akşamlar'
    },
    {
      id:'w4',
      en:'до свидания',
      ro:'do svidaniya',
      tr:'hoşça kal'
    },
    {
      id:'w5',
      en:'спасибо',
      ro:'spasibo',
      tr:'teşekkür ederim'
    },
    {
      id:'w6',
      en:'пожалуйста',
      ro:'pozhaluysta',
      tr:'lütfen'
    },
    {
      id:'w7',
      en:'да',
      ro:'da',
      tr:'evet'
    },
    {
      id:'w8',
      en:'нет',
      ro:'net',
      tr:'hayır'
    },
    {
      id:'w9',
      en:'как тебя зовут?',
      ro:'kak tebya zovut',
      tr:'adın ne?'
    },
    {
      id:'w10',
      en:'меня зовут Али',
      ro:'menya zovut Ali',
      tr:'benim adım Ali'
    },
    {
      id:'w11',
      en:'приятно познакомиться',
      ro:'priyatno poznakomitsya',
      tr:'tanıştığıma memnun oldum'
    },
    {
      id:'w12',
      en:'как дела?',
      ro:'kak dela',
      tr:'nasılsın?'
    },
    {
      id:'w13',
      en:'я в порядке',
      ro:'ya v poryadke',
      tr:'iyiyim'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Selamlama — Samimi ve Resmi Kullanım',
      title_en:'Greetings — Informal and Formal',
      explanation:'Rusçada selamlama samimi ve resmi olarak ayrılır. Привет (samimi) — arkadaş, yaşıt, aile. Здравствуйте (resmi, çoğul) — yabancı, yaşlı, resmi ortam. Günün saatine göre selamlamalar: Доброе утро (günaydın), Добрый день (iyi günler), Добрый вечер (iyi akşamlar). Yeni tanışmalarda Здравствуйте tercih edilir.',
      table:[
        {pronoun:'Samimi', form:'Привет!', example:'Привет! Как дела?', tr:'Selam! Nasılsın?'},
        {pronoun:'Resmi', form:'Здравствуйте!', example:'Здравствуйте!', tr:'İyi günler! (resmi)'},
        {pronoun:'Sabah', form:'Доброе утро!', example:'Доброе утро!', tr:'Günaydın!'},
        {pronoun:'Gündüz', form:'Добрый день!', example:'Добрый день!', tr:'İyi günler!'},
        {pronoun:'Akşam', form:'Добрый вечер!', example:'Добрый вечер!', tr:'İyi akşamlar!'},
        {pronoun:'Veda', form:'До свидания / Пока', example:'Пока!', tr:'Hoşça kal! (samimi)'}
      ],
      note:'Здравствуйте telaffuzu: zdras-TVUY-te — ilk "v" genellikle sessizdir. Kısa samimi versiyon: Здравствуй (tekil hitap).'
    },
    {
      id:'g2',
      title:'Kendini Tanıtma — Меня зовут',
      title_en:'Self-Introduction — My Name Is',
      explanation:'"Меня зовут ..." kalıbı Rusçada en yaygın tanıtma biçimidir; kelimenin tam anlamıyla "Beni ... diye çağırırlar" demektir. Alternatif olarak "Я ..." (Ben ...) de kullanılabilir. Resmi tanışmada "Очень приятно" veya "Приятно познакомиться" söylenir.',
      table:[
        {pronoun:'Soru (samimi)', form:'Как тебя зовут?', example:'Как тебя зовут?', tr:'Adın ne? (samimi)'},
        {pronoun:'Soru (resmi)', form:'Как вас зовут?', example:'Как вас зовут?', tr:'Adınız ne? (resmi)'},
        {pronoun:'Cevap', form:'Меня зовут Али.', example:'Меня зовут Али.', tr:'Benim adım Ali.'},
        {pronoun:'Nereden', form:'Я из Турции.', example:'Я из Турции.', tr:'Ben Türkiye\'den geliyorum.'},
        {pronoun:'Tanışma', form:'Очень приятно!', example:'Очень приятно!', tr:'Çok memnun oldum!'},
        {pronoun:'Karşılık', form:'Мне тоже.', example:'Мне тоже, приятно.', tr:'Ben de memnun oldum.'}
      ],
      note:'"Меня зовут" ve "Я + isim" eşdeğerdir. Resmi ortamda "Позвольте представиться, меня зовут..." daha şık.'
    },
    {
      id:'g3',
      title:'Şahıs Zamirleri ve Sıfır Copula',
      title_en:'Personal Pronouns and Zero Copula',
      explanation:'Rusçada "to be" fiili (быть) geniş zaman çekimde kullanılmaz — özne ile yüklem arasında bir şey gelmez (buna "sıfır copula" denir). Cümle: "Я студент" = "Ben öğrenciyim" (fiil yok). Olumsuzda "не" eklenir: "Я не студент". Soru için sadece tonlama değişir.',
      table:[
        {pronoun:'я (ben)', form:'Я студент.', example:'Я студент.', tr:'Ben öğrenciyim.'},
        {pronoun:'ты (sen)', form:'Ты студент?', example:'Ты студент?', tr:'Sen öğrenci misin?'},
        {pronoun:'он (o — erkek)', form:'Он студент.', example:'Он из России.', tr:'O öğrenci. / O Rusya\'dan.'},
        {pronoun:'она (o — kadın)', form:'Она студентка.', example:'Она студентка.', tr:'O (kadın) öğrenci.'},
        {pronoun:'мы (biz)', form:'Мы студенты.', example:'Мы студенты.', tr:'Biz öğrenciyiz.'},
        {pronoun:'вы / они (siz / onlar)', form:'Вы студенты? / Они студенты.', example:'Вы из Турции?', tr:'Siz Türkiye\'den misiniz?'}
      ],
      note:'Olumsuz: "не" fiilden önce → "Я не студент" (Ben öğrenci değilim). Soru tonlamayla: "Ты студент?" (Ses yükselir).'}
  ],
  speaking:[
    {
      id:'sp1',
      en:'привет',
      tr:'Merhaba',
      prompt:'Selam ver'
    },
    {
      id:'sp2',
      en:'меня зовут Али',
      tr:'Benim adım Ali',
      prompt:'Kendini tanıt'
    },
    {
      id:'sp3',
      en:'как дела?',
      tr:'Nasılsın?',
      prompt:'Hal hatır sor'
    },
    {
      id:'sp4',
      en:'я в порядке',
      tr:'İyiyim',
      prompt:'Cevap ver'
    },
    {
      id:'sp5',
      en:'спасибо до свидания',
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
          en:'привет',
          tr:'Merhaba',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'privet',
              tr:'Merhaba',
              role:'greeting',
              note:'Açılış selamı.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'доброе утро',
          tr:'Günaydın',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'dobroye utro',
              tr:'Günaydın',
              role:'greeting',
              note:'Sabah selamı.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'как тебя зовут?',
          tr:'Adın ne?',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'меня зовут Али',
          tr:'Benim adım Anna',
          bd:[]
        },
        {
          speaker:'A',
          gender:'m',
          en:'приятно познакомиться',
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
      transcript:'привет. меня зовут Али. приятно познакомиться.',
      tr:'Merhaba. Benim adım Ali. Memnun oldum.',
      questions:[
        {
          q:'Hangi ifade selamdır?',
          opts:[
            'привет',
            'спасибо',
            'до свидания',
            'да'
          ],
          answer:0,
          tr:'Selam ifadesini seç'
        },
        {
          q:'Ali adını nasıl söylüyor?',
          opts:[
            'меня зовут Али',
            'как тебя зовут?',
            'как дела?',
            'я в порядке'
          ],
          answer:0,
          tr:'Kendini tanıtma'
        },
        {
          q:'Tanışma ifadesi hangisi?',
          opts:[
            'приятно познакомиться',
            'пожалуйста',
            'нет',
            'доброе утро'
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
