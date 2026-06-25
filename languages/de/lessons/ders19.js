// ders19.js — German Lesson 19: Entertainment & Hobbies (beginner)
const L19 = {
  words:[
    {
      id:'w1',
      en:'das Hobby',
      ro:'das HO-bee',
      tr:'hobi'
    },
    {
      id:'w2',
      en:'lesen',
      ro:'LAY-zen',
      tr:'okumak'
    },
    {
      id:'w3',
      en:'Musik hören',
      ro:'mu-ZEEK HÖ-ren',
      tr:'müzik dinlemek'
    },
    {
      id:'w4',
      en:'Sport treiben',
      ro:'shtport TRAY-ben',
      tr:'spor yapmak'
    },
    {
      id:'w5',
      en:'kochen',
      ro:'KO-khen',
      tr:'yemek yapmak'
    },
    {
      id:'w6',
      en:'reisen',
      ro:'RAY-zen',
      tr:'seyahat etmek'
    },
    {
      id:'w7',
      en:'der Film',
      ro:'der film',
      tr:'film'
    },
    {
      id:'w8',
      en:'das Konzert',
      ro:'das kon-TSERT',
      tr:'konser'
    },
    {
      id:'w9',
      en:'das Museum',
      ro:'das mu-ZAY-um',
      tr:'müze'
    },
    {
      id:'w10',
      en:'spielen',
      ro:'SHPEE-len',
      tr:'oynamak'
    },
    {
      id:'w11',
      en:'wandern',
      ro:'VAN-dern',
      tr:'yürüyüş yapmak / trekking'
    },
    {
      id:'w12',
      en:'fotografieren',
      ro:'fo-to-gra-FEE-ren',
      tr:'fotoğraf çekmek'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Hobiler ve Boş Zaman',
      title_en:'Hobbies and Free Time',
      explanation:'Was machst du in deiner Freizeit? = Boş zamanında ne yapıyorsun? Ich interessiere mich für... = ...ile ilgileniyorum. gern = severek: Ich lese gern = okumayı severim.',
      table:[
        {
          pronoun:'Soru',
          form:'Was sind deine Hobbys?',
          example:'Was machst du gern?',
          tr:'Ne yapmaktan hoşlanırsın?'
        },
        {
          pronoun:'Sevme',
          form:'Ich ... gern',
          example:'Ich lese gern Bücher.',
          tr:'Kitap okumayı severim.'
        },
        {
          pronoun:'İlgi',
          form:'Ich interessiere mich für...',
          example:'Ich interessiere mich für Musik.',
          tr:'Müzikle ilgileniyorum.'
        },
        {
          pronoun:'Davet',
          form:'Lust auf...?',
          example:'Hast du Lust auf Kino?',
          tr:'Sinemaya gitmek ister misin?'
        }
      ],
      note:'Am Wochenende = hafta sonu. In der Freizeit = boş zamanında.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Mein Hobby ist Lesen.',
      tr:'Hobim okumak.',
      prompt:'Hobini söyle'
    },
    {
      id:'sp2',
      en:'Ich treibe gern Sport.',
      tr:'Spor yapmayı severim.',
      prompt:'Spor hakkında konuş'
    },
    {
      id:'sp3',
      en:'Hast du Lust auf Kino?',
      tr:'Sinemaya gitmek ister misin?',
      prompt:'Etkinlik teklif et'
    },
    {
      id:'sp4',
      en:'Ich interessiere mich für Musik.',
      tr:'Müzikle ilgileniyorum.',
      prompt:'İlgi alanını söyle'
    },
    {
      id:'sp5',
      en:'Am Wochenende wandere ich gern.',
      tr:'Hafta sonu yürüyüş yapmayı severim.',
      prompt:'Hafta sonu planı söyle'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Freizeit',
      title_en:'Free Time',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Was machst du am Wochenende?',
          tr:'Hafta sonu ne yapıyorsun?',
          gramNote:'Boş zaman sorusu.',
          bd:[
            {
              ro:'am Wochenende',
              tr:'hafta sonu',
              role:'K',
              note:'am + Wochenende.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Ich gehe wandern und lese gern.',
          tr:'Yürüyüşe gidiyorum ve okumayı severim.',
          gramNote:[
            {
              ro:'wandern',
              tr:'yürüyüş yapmak',
              role:'V',
              note:'Almanya\'da çok popüler hobi.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Cool! Ich gehe ins Kino. Willst du mitkommen?',
          tr:'Harika! Ben sinemaya gidiyorum. Benimle gelmek ister misin?',
          gramNote:[
            {
              ro:'mitkommen',
              tr:'birlikte gelmek',
              role:'V',
              note:'mit = ile/birlikte.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Ja, gerne! Welcher Film?',
          tr:'Evet, memnuniyetle! Hangi film?',
          gramNote:[
            {
              ro:'Welcher Film',
              tr:'Hangi film',
              role:'question',
              note:'Welcher = hangi (eril).'
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
      transcript:'Am Samstag geht Ali ins Museum. Am Abend hört er Musik und liest ein Buch. Sonntag treibt er Sport.',
      tr:'Cumartesi Ali müzeye gidiyor. Akşam müzik dinliyor ve kitap okuyor. Pazar spor yapıyor.',
      questions:[
        {
          q:'Wohin geht Ali am Samstag?',
          opts:[
            'Kino',
            'Museum',
            'Konzert',
            'Park'
          ],
          answer:1,
          tr:'Cumartesi Ali nereye gidiyor?'
        },
        {
          q:'Was macht er am Samstagabend?',
          opts:[
            'Sport',
            'Musik hören und lesen',
            'Kochen',
            'Reisen'
          ],
          answer:1,
          tr:'Cumartesi akşamı ne yapıyor?'
        },
        {
          q:'Was macht er am Sonntag?',
          opts:[
            'Museum',
            'Lesen',
            'Sport treiben',
            'Kino'
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
