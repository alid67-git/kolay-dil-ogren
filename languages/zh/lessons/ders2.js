// ders2.js — Chinese Lesson 2: 量词 & 是 (beginner)
const L2 = {
  words:[
    {
      id:'w1',
      en:'是',
      ro:'shì',
      tr:'olmak'
    },
    {
      id:'w2',
      en:'一个',
      ro:'yí gè',
      tr:'bir tane (genel)'
    },
    {
      id:'w3',
      en:'一位',
      ro:'yí wèi',
      tr:'bir kişi (saygılı)'
    },
    {
      id:'w4',
      en:'学生',
      ro:'xuéshēng',
      tr:'öğrenci'
    },
    {
      id:'w5',
      en:'老师',
      ro:'lǎoshī',
      tr:'öğretmen'
    },
    {
      id:'w6',
      en:'朋友',
      ro:'péngyou',
      tr:'arkadaş'
    },
    {
      id:'w7',
      en:'这是',
      ro:'zhè shì',
      tr:'bu ... dır'
    },
    {
      id:'w8',
      en:'那是',
      ro:'nà shì',
      tr:'şu ... dır'
    },
    {
      id:'w9',
      en:'一本书',
      ro:'yì běn shū',
      tr:'bir kitap'
    },
    {
      id:'w10',
      en:'一张桌子',
      ro:'yì zhāng zhuōzi',
      tr:'bir masa'
    },
    {
      id:'w11',
      en:'一个问题',
      ro:'yí gè wèntí',
      tr:'bir soru'
    },
    {
      id:'w12',
      en:'我不是老师',
      ro:'wǒ bú shì lǎoshī',
      tr:'ben öğretmen değilim'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'是 Kullanımı',
      title_en:'Using 是',
      explanation:'Çincede 是 isimleri eşitlemek için kullanılır: 我是学生. Sıfat cümlelerinde çoğu zaman 是 kullanılmaz.',
      table:[
        {
          pronoun:'Olumlu',
          form:'我是学生',
          example:'我是学生。',
          tr:'Ben öğrenciyim.'
        },
        {
          pronoun:'Olumsuz',
          form:'我不是老师',
          example:'我不是老师。',
          tr:'Ben öğretmen değilim.'
        }
      ],
      note:'Ali erkek öğrenci olduğu için örnek: 我是学生。'
    },
    {
      id:'g2',
      title:'量词 (Ölçü Sözcükleri)',
      title_en:'Measure Words',
      explanation:'Çince sayılabilir isimlerde sayı + ölçü sözcüğü + isim kullanılır: 一个学生, 一位老师, 一本书.',
      table:[
        {
          pronoun:'Genel',
          form:'个',
          example:'一个朋友',
          tr:'bir arkadaş'
        },
        {
          pronoun:'Kişi (saygılı)',
          form:'位',
          example:'一位老师',
          tr:'bir öğretmen'
        },
        {
          pronoun:'Kitap',
          form:'本',
          example:'一本书',
          tr:'bir kitap'
        }
      ],
      note:'Her isim için uygun ölçü sözcüğünü birlikte ezberle.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'我是学生。',
      tr:'Ben öğrenciyim.',
      prompt:'Kimliğini söyle'
    },
    {
      id:'sp2',
      en:'这是一位老师。',
      tr:'Bu bir öğretmen.',
      prompt:'量词 kullan'
    },
    {
      id:'sp3',
      en:'那是一个朋友。',
      tr:'Şu bir arkadaş.',
      prompt:'Gösterme yap'
    },
    {
      id:'sp4',
      en:'这是一本书。',
      tr:'Bu bir kitap.',
      prompt:'Nesne tanıt'
    },
    {
      id:'sp5',
      en:'我不是老师。',
      tr:'Ben öğretmen değilim.',
      prompt:'Olumsuz cümle kur'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Sınıf Tanışması',
      title_en:'Class Intro',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'你好，我是阿里。',
          tr:'Merhaba, ben Ali.',
          bd:[
            {
              ro:'wǒ shì',
              tr:'ben ...im',
              role:'V',
              note:'是 eşitleme fiili.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'你好，这是王老师。',
          tr:'Merhaba, bu Öğretmen Wang.',
          bd:[]
        },
        {
          speaker:'A',
          gender:'m',
          en:'王老师好！我是学生。',
          tr:'Merhaba Öğretmen Wang! Ben öğrenciyim.',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'很好。',
          tr:'Çok iyi.',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'我是学生。这是一位老师。那是一个朋友。',
      tr:'Ben öğrenciyim. Bu bir öğretmen. Şu bir arkadaş.',
      questions:[
        {
          q:'Öğretmen için hangi ölçü sözcüğü doğru?',
          opts:[
            '个',
            '位',
            '本',
            '张'
          ],
          answer:1,
          tr:'Doğru ölçü sözcüğü'
        },
        {
          q:'Olumsuz biçim hangisi?',
          opts:[
            '我是老师',
            '我不是老师',
            '你是老师',
            '他是老师'
          ],
          answer:1,
          tr:'Olumsuz cümle'
        },
        {
          q:'Bu ... dır kalıbı hangisi?',
          opts:[
            '那是',
            '这是',
            '不是',
            '好吗'
          ],
          answer:1,
          tr:'Gösterme kalıbı'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[2] = L2;
