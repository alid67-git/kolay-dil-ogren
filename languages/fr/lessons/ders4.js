// ders4.js - French Lesson 4: Time & Date (beginner)
const L4 = {
  words:[
    {
      id:'w1',
      en:'Quelle heure est-il ?',
      ro:'kel eur e-til',
      tr:'Saat kaç?'
    },
    {
      id:'w2',
      en:'Il est trois heures.',
      ro:'il e trwa eur',
      tr:'Saat üç.'
    },
    {
      id:'w3',
      en:'le matin',
      ro:'luh ma-tan',
      tr:'sabah'
    },
    {
      id:'w4',
      en:'l\'après-midi',
      ro:'la-pre-mi-di',
      tr:'öğleden sonra'
    },
    {
      id:'w5',
      en:'le soir',
      ro:'luh swar',
      tr:'akşam'
    },
    {
      id:'w6',
      en:'la nuit',
      ro:'la nwee',
      tr:'gece'
    },
    {
      id:'w7',
      en:'aujourd\'hui',
      ro:'o-jur-dwi',
      tr:'bugün'
    },
    {
      id:'w8',
      en:'demain',
      ro:'duh-man',
      tr:'yarın'
    },
    {
      id:'w9',
      en:'hier',
      ro:'yi-er',
      tr:'dün'
    },
    {
      id:'w10',
      en:'lundi',
      ro:'lun-di',
      tr:'Pazartesi'
    },
    {
      id:'w11',
      en:'mardi',
      ro:'mar-di',
      tr:'Salı'
    },
    {
      id:'w12',
      en:'mercredi',
      ro:'mer-kruh-di',
      tr:'Çarşamba'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Saat ve Tarih',
      title_en:'Time and Date',
      explanation:'Fransızcada saat sormak için "Quelle heure est-il ?" kullanılır. Cevapta "Il est ... heures" kalıbı gelir.',
      table:[
        {
          pronoun:'Soru',
          form:'Quelle heure est-il ?',
          example:'Quelle heure est-il ?',
          tr:'Saat kaç?'
        },
        {
          pronoun:'Cevap',
          form:'Il est ... heures',
          example:'Il est dix heures.',
          tr:'Saat on.'
        },
        {
          pronoun:'Randevu',
          form:'à ... heures',
          example:'À neuf heures.',
          tr:'Saat dokuzda.'
        },
        {
          pronoun:'Gün',
          form:'lundi, mardi...',
          example:'Aujourd\'hui, c\'est lundi.',
          tr:'Bugün pazartesi.'
        }
      ],
      note:'Saatte à, günde çoğunlukla article olmadan kullanım yaygındır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Quelle heure est-il ?',
      tr:'Saat kaç?',
      prompt:'Saat sor'
    },
    {
      id:'sp2',
      en:'Il est neuf heures.',
      tr:'Saat dokuz.',
      prompt:'Saat söyle'
    },
    {
      id:'sp3',
      en:'Aujourd\'hui, c\'est mardi.',
      tr:'Bugün salı.',
      prompt:'Günü söyle'
    },
    {
      id:'sp4',
      en:'Demain, je suis libre.',
      tr:'Yarın müsaitim.',
      prompt:'Yarını anlat'
    },
    {
      id:'sp5',
      en:'À dix heures, s\'il vous plaît.',
      tr:'Saat onda, lütfen.',
      prompt:'Saat belirt'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Rendez-vous',
      title_en:'Appointment',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Bonjour, vous êtes libre quand ?',
          tr:'Merhaba, ne zaman müsaitsiniz?',
          gramNote:'Nezaketli randevu sorusu.',
          bd:[
            {
              ro:'libre',
              tr:'müsait',
              role:'adj',
              note:'Sık kullanılır.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Je suis libre mardi à dix heures.',
          tr:'Salı saat onda müsaitim.',
          gramNote:'à + saat kullanımı.',
          bd:[
            {
              ro:'à dix heures',
              tr:'saat onda',
              role:'K',
              note:'Saat ifadesi.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Parfait, à mardi.',
          tr:'Harika, salı görüşürüz.',
          gramNote:'Parfait = harika.',
          bd:[
            {
              ro:'Parfait',
              tr:'harika',
              role:'phrase',
              note:'Onay ifadesi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'D\'accord, à mardi !',
          tr:'Tamam, salıya kadar!',
          gramNote:'D\'accord = tamam.',
          bd:[
            {
              ro:'D\'accord',
              tr:'tamam',
              role:'phrase',
              note:'Kabul ifadesi.'
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
      transcript:'Aujourd\'hui, c\'est mercredi. Le cours commence à neuf heures et finit à onze heures.',
      tr:'Bugün çarşamba. Ders dokuzda başlıyor ve on birde bitiyor.',
      questions:[
        {
          q:'Quel jour ?',
          opts:[
            'lundi',
            'mardi',
            'mercredi',
            'jeudi'
          ],
          answer:2,
          tr:'Hangi gün?'
        },
        {
          q:'Le cours commence à...',
          opts:[
            '8h',
            '9h',
            '10h',
            '11h'
          ],
          answer:1,
          tr:'Ders kaçta başlıyor?'
        },
        {
          q:'Le cours finit à...',
          opts:[
            '9h',
            '10h',
            '11h',
            '12h'
          ],
          answer:2,
          tr:'Ders kaçta bitiyor?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[4] = L4;
