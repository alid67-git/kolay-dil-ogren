// ders20.js - French Lesson 20: Daily Conversation Practice (beginner)
const L20 = {
  words:[
    {
      id:'w1',
      en:'Bonjour !',
      ro:'bon-jur',
      tr:'İyi günler!'
    },
    {
      id:'w2',
      en:'Comment allez-vous ?',
      ro:'ko-mon-ta-le-vu',
      tr:'Nasılsınız?'
    },
    {
      id:'w3',
      en:'Je vais bien.',
      ro:'jə ve byan',
      tr:'İyiyim.'
    },
    {
      id:'w4',
      en:'Pardon',
      ro:'par-don',
      tr:'Pardon'
    },
    {
      id:'w5',
      en:'Pas de problème',
      ro:'pa də pro-blem',
      tr:'Sorun değil'
    },
    {
      id:'w6',
      en:'Bien sûr',
      ro:'byan sür',
      tr:'Tabii ki'
    },
    {
      id:'w7',
      en:'Vous comprenez ?',
      ro:'vu kom-prə-ne',
      tr:'Anlıyor musunuz?'
    },
    {
      id:'w8',
      en:'Je ne comprends pas.',
      ro:'jə nə kom-pran pa',
      tr:'Anlamıyorum.'
    },
    {
      id:'w9',
      en:'Pouvez-vous répéter ?',
      ro:'pu-ve-vu re-pe-te',
      tr:'Tekrar edebilir misiniz?'
    },
    {
      id:'w10',
      en:'Lentement, s\'il vous plaît.',
      ro:'lon-tə-mon sil vu ple',
      tr:'Yavaş, lütfen.'
    },
    {
      id:'w11',
      en:'Un moment, s\'il vous plaît.',
      ro:'un mo-mon sil vu ple',
      tr:'Bir dakika, lütfen.'
    },
    {
      id:'w12',
      en:'D\'accord !',
      ro:'da-kor',
      tr:'Tamam!'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Günlük Konuşma',
      title_en:'Daily conversation',
      explanation:'Bu ders günlük hayatta en çok geçen kısa kalıpları bir araya getirir. Anlamadığında tekrar istemek ve kibarca konuşmak hedeflenir.',
      table:[
        {
          pronoun:'Selam',
          form:'Bonjour',
          example:'Bonjour !',
          tr:'Merhaba!'
        },
        {
          pronoun:'Anlama',
          form:'Je ne comprends pas',
          example:'Je ne comprends pas.',
          tr:'Anlamıyorum.'
        },
        {
          pronoun:'Tekrar',
          form:'Pouvez-vous répéter ?',
          example:'Pouvez-vous répéter ?',
          tr:'Tekrar eder misiniz?'
        },
        {
          pronoun:'Onay',
          form:'D\'accord',
          example:'D\'accord, merci.',
          tr:'Tamam, teşekkürler.'
        }
      ],
      note:'Yavaş konuşma talebi öğrenme sürecinde en kritik kalıplardan biridir.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Pardon, je ne comprends pas.',
      tr:'Pardon, anlamıyorum.',
      prompt:'Anlamadığını söyle'
    },
    {
      id:'sp2',
      en:'Pouvez-vous parler lentement ?',
      tr:'Yavaş konuşabilir misiniz?',
      prompt:'Yavaş konuş iste'
    },
    {
      id:'sp3',
      en:'D\'accord, merci.',
      tr:'Tamam, teşekkürler.',
      prompt:'Onayla'
    },
    {
      id:'sp4',
      en:'Bonne journée !',
      tr:'İyi günler!',
      prompt:'Kibar bitir'
    },
    {
      id:'sp5',
      en:'Ravi de vous rencontrer.',
      tr:'Tanıştığımıza memnun oldum.',
      prompt:'Tanışma söyle'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Situation quotidienne',
      title_en:'Daily situation',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Bonjour, comment allez-vous ?',
          tr:'Merhaba, nasılsınız?',
          gramNote:'Günlük selam.',
          bd:[
            {
              ro:'Bonjour',
              tr:'merhaba',
              role:'greeting',
              note:'Temel açılış.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Je vais bien, merci. Et vous ?',
          tr:'İyiyim, teşekkürler. Ya siz?',
          gramNote:'Standart cevap.',
          bd:[
            {
              ro:'Je vais bien',
              tr:'iyiyim',
              role:'phrase',
              note:'Kısa cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Pardon, pouvez-vous répéter ?',
          tr:'Pardon, tekrar eder misiniz?',
          gramNote:'Tekrar isteme.',
          bd:[
            {
              ro:'répéter',
              tr:'tekrar etmek',
              role:'V',
              note:'Öğrenme kalıbı.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Bien sûr, lentement.',
          tr:'Tabii ki, yavaşça.',
          gramNote:'Destekleyici cevap.',
          bd:[
            {
              ro:'Bien sûr',
              tr:'tabii ki',
              role:'phrase',
              note:'Nazik onay.'
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
      transcript:'Ali apprend le français. Quand il ne comprend pas, il dit: Pardon, pouvez-vous répéter, s\'il vous plaît ?',
      tr:'Ali Fransızca öğreniyor. Anlamadığında: Pardon, tekrar eder misiniz, lütfen? diyor.',
      questions:[
        {
          q:'Ali apprend...',
          opts:[
            'anglais',
            'français',
            'allemand',
            'espagnol'
          ],
          answer:1,
          tr:'Ali ne öğreniyor?'
        },
        {
          q:'Quand il ne comprend pas, il dit...',
          opts:[
            'merci',
            'bonjour',
            'pardon, répéter',
            'au revoir'
          ],
          answer:2,
          tr:'Anlamadığında ne diyor?'
        },
        {
          q:'Objectif ?',
          opts:[
            'politesse et communication',
            'sport',
            'voyage',
            'cuisine'
          ],
          answer:0,
          tr:'Amaç ne?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[20] = L20;
