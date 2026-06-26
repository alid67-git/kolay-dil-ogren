// ders10.js - French Lesson 10: Work & Business (beginner)
const L10 = {
  words:[
    {
      id:'w1',
      en:'le travail',
      ro:'luh tra-vay',
      tr:'iş'
    },
    {
      id:'w2',
      en:'le métier',
      ro:'luh me-tye',
      tr:'meslek'
    },
    {
      id:'w3',
      en:'le collègue',
      ro:'luh ko-leg',
      tr:'iş arkadaşı'
    },
    {
      id:'w4',
      en:'le patron',
      ro:'luh pa-tron',
      tr:'patron'
    },
    {
      id:'w5',
      en:'le bureau',
      ro:'luh bü-ro',
      tr:'ofis'
    },
    {
      id:'w6',
      en:'la réunion',
      ro:'la re-yün-yon',
      tr:'toplantı'
    },
    {
      id:'w7',
      en:'le contrat',
      ro:'luh kon-tra',
      tr:'sözleşme'
    },
    {
      id:'w8',
      en:'le salaire',
      ro:'luh sa-ler',
      tr:'maaş'
    },
    {
      id:'w9',
      en:'la candidature',
      ro:'la kon-di-da-tür',
      tr:'başvuru'
    },
    {
      id:'w10',
      en:'l\'entretien',
      ro:'lon-tre-tyan',
      tr:'görüşme'
    },
    {
      id:'w11',
      en:'temps plein',
      ro:'ton plen',
      tr:'tam zamanlı'
    },
    {
      id:'w12',
      en:'temps partiel',
      ro:'ton par-syel',
      tr:'yarı zamanlı'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'İş Kalıpları',
      title_en:'Work phrases',
      explanation:'Meslek sormak için Quel est votre métier?, meslek söylemek için Je travaille comme... kullanılır.',
      table:[
        {
          pronoun:'Meslek',
          form:'Quel est votre métier ?',
          example:'Quel est votre métier ?',
          tr:'Mesleğiniz nedir?'
        },
        {
          pronoun:'Cevap',
          form:'Je travaille comme...',
          example:'Je travaille comme ingénieur.',
          tr:'Mühendis olarak çalışıyorum.'
        },
        {
          pronoun:'Toplantı',
          form:'J\'ai une réunion',
          example:'J\'ai une réunion à 15h.',
          tr:'15:00\'te toplantım var.'
        },
        {
          pronoun:'Veda',
          form:'Bonne journée',
          example:'Bonne journée !',
          tr:'İyi günler!'
        }
      ],
      note:'Resmi ortamda vous formu tercih edilir.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Quel est votre métier ?',
      tr:'Mesleğiniz nedir?',
      prompt:'Meslek sor'
    },
    {
      id:'sp2',
      en:'Je travaille comme développeur.',
      tr:'Geliştirici olarak çalışıyorum.',
      prompt:'Meslek söyle'
    },
    {
      id:'sp3',
      en:'J\'ai une réunion à trois heures.',
      tr:'Saat üçte toplantım var.',
      prompt:'Toplantı belirt'
    },
    {
      id:'sp4',
      en:'Je travaille à temps plein.',
      tr:'Tam zamanlı çalışıyorum.',
      prompt:'Çalışma türü söyle'
    },
    {
      id:'sp5',
      en:'Bonne journée !',
      tr:'İyi günler!',
      prompt:'Veda et'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Au bureau',
      title_en:'At office',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Bonjour, vous avez une réunion ?',
          tr:'Merhaba, toplantınız var mı?',
          gramNote:'İş yeri sorusu.',
          bd:[
            {
              ro:'réunion',
              tr:'toplantı',
              role:'O',
              note:'Ofis kelimesi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Oui, à onze heures.',
          tr:'Evet, saat on birde.',
          gramNote:'Saat belirtme.',
          bd:[
            {
              ro:'à onze heures',
              tr:'saat on birde',
              role:'K',
              note:'Saat kalıbı.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Après, vous êtes disponible ?',
          tr:'Sonra müsait misiniz?',
          gramNote:'Müsaitlik sorusu.',
          bd:[
            {
              ro:'disponible',
              tr:'müsait',
              role:'adj',
              note:'Takvim dili.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Oui, avec plaisir.',
          tr:'Evet, memnuniyetle.',
          gramNote:'Pozitif cevap.',
          bd:[
            {
              ro:'avec plaisir',
              tr:'memnuniyetle',
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
      transcript:'Ali travaille comme ingénieur. Il commence à huit heures et a une réunion à dix heures.',
      tr:'Ali mühendis olarak çalışıyor. Sekizde başlıyor ve onda toplantısı var.',
      questions:[
        {
          q:'Métier ?',
          opts:[
            'médecin',
            'ingénieur',
            'chef',
            'serveur'
          ],
          answer:1,
          tr:'Mesleği?'
        },
        {
          q:'Début ?',
          opts:[
            '7h',
            '8h',
            '9h',
            '10h'
          ],
          answer:1,
          tr:'Başlangıç saati?'
        },
        {
          q:'Réunion ?',
          opts:[
            '9h',
            '10h',
            '11h',
            '12h'
          ],
          answer:1,
          tr:'Toplantı saati?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[10] = L10;
