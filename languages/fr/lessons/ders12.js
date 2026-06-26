// ders12.js - French Lesson 12: Phone & Communication (beginner)
const L12 = {
  words:[
    {
      id:'w1',
      en:'appeler',
      ro:'a-pə-le',
      tr:'aramak'
    },
    {
      id:'w2',
      en:'le message',
      ro:'luh me-saj',
      tr:'mesaj'
    },
    {
      id:'w3',
      en:'l\'e-mail',
      ro:'le-meyl',
      tr:'e-posta'
    },
    {
      id:'w4',
      en:'le numéro de téléphone',
      ro:'luh nü-me-ro də te-le-fon',
      tr:'telefon numarası'
    },
    {
      id:'w5',
      en:'Bonjour, c\'est...',
      ro:'bon-jur se',
      tr:'Merhaba, ... ben'
    },
    {
      id:'w6',
      en:'Vous pouvez me rappeler ?',
      ro:'vu pu-ve mə ra-ple',
      tr:'Beni geri arayabilir misiniz?'
    },
    {
      id:'w7',
      en:'Je ne peux pas parler maintenant.',
      ro:'jə nə pø pa parle man-tnan',
      tr:'Şimdi konuşamıyorum.'
    },
    {
      id:'w8',
      en:'la messagerie',
      ro:'la me-sa-jə-ri',
      tr:'sesli mesaj'
    },
    {
      id:'w9',
      en:'écrire',
      ro:'e-krir',
      tr:'yazmak'
    },
    {
      id:'w10',
      en:'le répondeur',
      ro:'luh re-pon-dör',
      tr:'telesekreter'
    },
    {
      id:'w11',
      en:'occupé',
      ro:'o-kü-pe',
      tr:'meşgul'
    },
    {
      id:'w12',
      en:'transférer',
      ro:'trans-fe-re',
      tr:'bağlamak'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Telefon Konuşması',
      title_en:'Phone conversation',
      explanation:'Telefonda tanıtım için Bonjour, c\'est... kalıbı kullanılır. Daha yavaş konuşma isteği için Plus lentement, s\'il vous plaît denebilir.',
      table:[
        {
          pronoun:'Tanıtım',
          form:'Bonjour, c\'est...',
          example:'Bonjour, c\'est Ali.',
          tr:'Merhaba, Ali ben.'
        },
        {
          pronoun:'Geri arama',
          form:'me rappeler',
          example:'Vous pouvez me rappeler ?',
          tr:'Beni geri arayabilir misiniz?'
        },
        {
          pronoun:'Meşgul',
          form:'occupé',
          example:'La ligne est occupée.',
          tr:'Hat meşgul.'
        },
        {
          pronoun:'Kapanış',
          form:'Bonne journée',
          example:'Merci, bonne journée.',
          tr:'Teşekkürler, iyi günler.'
        }
      ],
      note:'Resmi telefonlarda vous formu kullanılır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Bonjour, c\'est Ali.',
      tr:'Merhaba, Ali ben.',
      prompt:'Tanıtım yap'
    },
    {
      id:'sp2',
      en:'Pouvez-vous répéter ?',
      tr:'Tekrar eder misiniz?',
      prompt:'Tekrar iste'
    },
    {
      id:'sp3',
      en:'Je vous rappelle plus tard.',
      tr:'Sizi sonra ararım.',
      prompt:'Geri arama söyle'
    },
    {
      id:'sp4',
      en:'Je ne peux pas parler maintenant.',
      tr:'Şimdi konuşamıyorum.',
      prompt:'Durum belirt'
    },
    {
      id:'sp5',
      en:'Merci, bonne journée.',
      tr:'Teşekkürler, iyi günler.',
      prompt:'Kapat'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Appel',
      title_en:'Phone call',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Bonjour, société Martin.',
          tr:'Merhaba, Martin şirketi.',
          gramNote:'Resmi açılış.',
          bd:[
            {
              ro:'société',
              tr:'şirket',
              role:'O',
              note:'İş telefonu kelimesi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Bonjour, c\'est Ali.',
          tr:'Merhaba, Ali ben.',
          gramNote:'Kendini tanıtma.',
          bd:[
            {
              ro:'c\'est',
              tr:'... ben',
              role:'phrase',
              note:'Telefon kalıbı.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Un moment, je transfère.',
          tr:'Bir dakika, bağlıyorum.',
          gramNote:'Aktarma ifadesi.',
          bd:[
            {
              ro:'transfère',
              tr:'bağlıyorum',
              role:'V',
              note:'Telefon fiili.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Merci beaucoup.',
          tr:'Çok teşekkürler.',
          gramNote:'Kibar kapanış.',
          bd:[
            {
              ro:'Merci',
              tr:'teşekkür',
              role:'courtesy',
              note:'Standart nezaket.'
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
      transcript:'Ali appelle le cabinet médical. Pour un rendez-vous, tapez un.',
      tr:'Ali sağlık merkezini arıyor. Randevu için bire basın.',
      questions:[
        {
          q:'Ali appelle...',
          opts:[
            'banque',
            'cabinet médical',
            'hôtel',
            'école'
          ],
          answer:1,
          tr:'Ali nereyi arıyor?'
        },
        {
          q:'Pour rendez-vous ?',
          opts:[
            '0',
            '1',
            '2',
            '9'
          ],
          answer:1,
          tr:'Randevu tuşu?'
        },
        {
          q:'Sujet ?',
          opts:[
            'voyage',
            'santé',
            'sport',
            'musique'
          ],
          answer:1,
          tr:'Konu?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[12] = L12;
