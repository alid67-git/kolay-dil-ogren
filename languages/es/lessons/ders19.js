// ders19.js � Spanish Lesson 19: Entertainment & Hobbies (beginner)
const L19 = {
  words:[
    {
      id:'w1',
      en:'el hobby',
      ro:'el HO-bi',
      tr:'hobi'
    },
    {
      id:'w2',
      en:'leer',
      ro:'le-ER',
      tr:'okumak'
    },
    {
      id:'w3',
      en:'escuchar música',
      ro:'es-ku-CHAR mu-SI-ka',
      tr:'müzik dinlemek'
    },
    {
      id:'w4',
      en:'hacer deporte',
      ro:'a-SER de-POR-te',
      tr:'spor yapmak'
    },
    {
      id:'w5',
      en:'cocinar',
      ro:'ko-thi-NAR',
      tr:'yemek yapmak'
    },
    {
      id:'w6',
      en:'viajar',
      ro:'bya-HAR',
      tr:'seyahat etmek'
    },
    {
      id:'w7',
      en:'la película',
      ro:'la pe-LI-ku-la',
      tr:'film'
    },
    {
      id:'w8',
      en:'el concierto',
      ro:'el kon-THYER-to',
      tr:'konser'
    },
    {
      id:'w9',
      en:'el museo',
      ro:'el mu-SE-o',
      tr:'müze'
    },
    {
      id:'w10',
      en:'jugar',
      ro:'hu-GAR',
      tr:'oynamak'
    },
    {
      id:'w11',
      en:'hacer senderismo',
      ro:'a-SER sen-de-RIS-mo',
      tr:'yürüyü�x yapmak / trekking'
    },
    {
      id:'w12',
      en:'hacer fotos',
      ro:'a-SER FO-tos',
      tr:'foto�xraf çekmek'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Hobiler ve Bo�x Zaman',
      title_en:'Hobbies and Free Time',
      explanation:'¿Qué haces en tu tiempo libre? = Bo�x zamanında ne yapıyorsun? Me interesa... = ...ile ilgileniyorum. Me gusta = severek: Me gusta leer = okumayı severim.',
      table:[
        {
          pronoun:'Soru',
          form:'¿Cuáles son tus hobbies?',
          example:'¿Qué te gusta hacer?',
          tr:'Ne yapmaktan ho�xlanırsın?'
        },
        {
          pronoun:'Sevme',
          form:'Me gusta...',
          example:'Me gusta leer libros.',
          tr:'Kitap okumayı severim.'
        },
        {
          pronoun:'İlgi',
          form:'Me interesa...',
          example:'Me interesa la música.',
          tr:'Müzikle ilgileniyorum.'
        },
        {
          pronoun:'Davet',
          form:'¿Te apetece...?',
          example:'¿Te apetece ir al cine?',
          tr:'Sinemaya gitmek ister misin?'
        }
      ],
      note:'El fin de semana = hafta sonu. En el tiempo libre = bo�x zamanında.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Mi hobby es leer.',
      tr:'Hobim okumak.',
      prompt:'Hobini söyle'
    },
    {
      id:'sp2',
      en:'Me gusta hacer deporte.',
      tr:'Spor yapmayı severim.',
      prompt:'Spor hakkında konu�x'
    },
    {
      id:'sp3',
      en:'¿Te apetece ir al cine?',
      tr:'Sinemaya gitmek ister misin?',
      prompt:'Etkinlik teklif et'
    },
    {
      id:'sp4',
      en:'Me interesa la música.',
      tr:'Müzikle ilgileniyorum.',
      prompt:'İlgi alanını söyle'
    },
    {
      id:'sp5',
      en:'El fin de semana me gusta hacer senderismo.',
      tr:'Hafta sonu yürüyü�x yapmayı severim.',
      prompt:'Hafta sonu planı söyle'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Tiempo libre',
      title_en:'Free Time',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'¿Qué haces el fin de semana?',
          tr:'Hafta sonu ne yapıyorsun?',
          gramNote:'Bo�x zaman sorusu.',
          bd:[
            {
              ro:'el fin de semana',
              tr:'hafta sonu',
              role:'K',
              note:'el + fin de semana.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Voy de senderismo y me gusta leer.',
          tr:'Yürüyü�xe gidiyorum ve okumayı severim.',
          gramNote:[
            {
              ro:'senderismo',
              tr:'yürüyü�x',
              role:'O',
              note:'İspanya\'da popüler hobi.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'¡Qué bien! Voy al cine. ¿Quieres venir?',
          tr:'Harika! Ben sinemaya gidiyorum. Benimle gelmek ister misin?',
          gramNote:[
            {
              ro:'¿Quieres venir?',
              tr:'Gelmek ister misin',
              role:'V',
              note:'Davet.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'¡Claro! ¿Qué película?',
          tr:'Evet, memnuniyetle! Hangi film?',
          gramNote:[
            {
              ro:'¿Qué película?',
              tr:'Hangi film',
              role:'question',
              note:'Qué = hangi.'
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
      transcript:'El sábado Ali va al museo. Por la noche escucha música y lee un libro. El domingo hace deporte.',
      tr:'Cumartesi Ali müzeye gidiyor. Ak�xam müzik dinliyor ve kitap okuyor. Pazar spor yapıyor.',
      questions:[
        {
          q:'¿Adónde va Ali el sábado?',
          opts:[
            'cine',
            'museo',
            'concierto',
            'parque'
          ],
          answer:1,
          tr:'Cumartesi Ali nereye gidiyor?'
        },
        {
          q:'¿Qué hace el sábado por la noche?',
          opts:[
            'deporte',
            'música y leer',
            'cocinar',
            'viajar'
          ],
          answer:1,
          tr:'Cumartesi ak�xamı ne yapıyor?'
        },
        {
          q:'¿Qué hace el domingo?',
          opts:[
            'museo',
            'leer',
            'deporte',
            'cine'
          ],
          answer:2,
          tr:'Pazar ne yapıyor?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[19] = L19;
