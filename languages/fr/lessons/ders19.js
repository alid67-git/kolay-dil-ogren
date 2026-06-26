// ders19.js - French Lesson 19: Entertainment & Hobbies (beginner)
const L19 = {
  words:[
    {
      id:'w1',
      en:'le hobby',
      ro:'luh ho-bi',
      tr:'hobi'
    },
    {
      id:'w2',
      en:'lire',
      ro:'lir',
      tr:'okumak'
    },
    {
      id:'w3',
      en:'écouter de la musique',
      ro:'e-ku-te də la mü-zik',
      tr:'müzik dinlemek'
    },
    {
      id:'w4',
      en:'faire du sport',
      ro:'fer dü spor',
      tr:'spor yapmak'
    },
    {
      id:'w5',
      en:'cuisiner',
      ro:'kwi-zi-ne',
      tr:'yemek yapmak'
    },
    {
      id:'w6',
      en:'voyager',
      ro:'vwa-ya-je',
      tr:'seyahat etmek'
    },
    {
      id:'w7',
      en:'le film',
      ro:'luh film',
      tr:'film'
    },
    {
      id:'w8',
      en:'le concert',
      ro:'luh kon-ser',
      tr:'konser'
    },
    {
      id:'w9',
      en:'le musée',
      ro:'luh mü-ze',
      tr:'müze'
    },
    {
      id:'w10',
      en:'jouer',
      ro:'jwe',
      tr:'oynamak'
    },
    {
      id:'w11',
      en:'faire de la randonnée',
      ro:'fer də la ran-do-ne',
      tr:'yürüyüş yapmak'
    },
    {
      id:'w12',
      en:'photographier',
      ro:'fo-to-gra-fye',
      tr:'fotoğraf çekmek'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Hobi Konuşmaları',
      title_en:'Hobbies',
      explanation:'Boş zaman konuşmalarında J\'aime..., Je fais..., Ça te dit...? kalıpları kullanılır.',
      table:[
        {
          pronoun:'Hobi',
          form:'Mon hobby est...',
          example:'Mon hobby est lire.',
          tr:'Hobim okumak.'
        },
        {
          pronoun:'Sevme',
          form:'J\'aime...',
          example:'J\'aime voyager.',
          tr:'Seyahat etmeyi seviyorum.'
        },
        {
          pronoun:'Teklif',
          form:'Ça te dit... ?',
          example:'Ça te dit un film ?',
          tr:'Film ister misin?'
        },
        {
          pronoun:'Hafta sonu',
          form:'Le week-end...',
          example:'Le week-end, je fais du sport.',
          tr:'Hafta sonu spor yaparım.'
        }
      ],
      note:'Fransızcada loisir/hobby bağlamında faire fiili çok geçer.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Mon hobby est lire.',
      tr:'Hobim okumak.',
      prompt:'Hobini söyle'
    },
    {
      id:'sp2',
      en:'J\'aime faire du sport.',
      tr:'Spor yapmayı severim.',
      prompt:'Spor söyle'
    },
    {
      id:'sp3',
      en:'Ça te dit un concert ?',
      tr:'Konsere var mısın?',
      prompt:'Etkinlik teklif et'
    },
    {
      id:'sp4',
      en:'Je m\'intéresse à la musique.',
      tr:'Müzikle ilgileniyorum.',
      prompt:'İlgi alanı söyle'
    },
    {
      id:'sp5',
      en:'Le week-end, je voyage.',
      tr:'Hafta sonu seyahat ederim.',
      prompt:'Plan söyle'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Loisirs',
      title_en:'Free time',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Tu fais quoi ce week-end ?',
          tr:'Bu hafta sonu ne yapıyorsun?',
          gramNote:'Boş zaman sorusu.',
          bd:[
            {
              ro:'ce week-end',
              tr:'bu hafta sonu',
              role:'time',
              note:'Zaman ifadesi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Je vais au musée et je lis.',
          tr:'Müzeye gidiyorum ve okuyorum.',
          gramNote:'Plan cevabı.',
          bd:[
            {
              ro:'musée',
              tr:'müze',
              role:'O',
              note:'Kültür etkinliği.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Super, on va au cinéma après ?',
          tr:'Harika, sonra sinemaya gidelim mi?',
          gramNote:'Teklif.',
          bd:[
            {
              ro:'on va',
              tr:'gidelim',
              role:'V',
              note:'Birlikte plan.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Oui, avec plaisir !',
          tr:'Evet, memnuniyetle!',
          gramNote:'Kabul.',
          bd:[
            {
              ro:'avec plaisir',
              tr:'memnuniyetle',
              role:'phrase',
              note:'Pozitif cevap.'
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
      transcript:'Samedi, Ali va au musée. Le soir, il écoute de la musique et lit un livre.',
      tr:'Cumartesi Ali müzeye gidiyor. Akşam müzik dinliyor ve kitap okuyor.',
      questions:[
        {
          q:'Samedi ?',
          opts:[
            'musée',
            'hôpital',
            'gare',
            'bureau'
          ],
          answer:0,
          tr:'Cumartesi nereye?'
        },
        {
          q:'Le soir ?',
          opts:[
            'sport',
            'musique et lecture',
            'travail',
            'voyage'
          ],
          answer:1,
          tr:'Akşam ne yapıyor?'
        },
        {
          q:'Thème ?',
          opts:[
            'hobbies',
            'santé',
            'finance',
            'histoire'
          ],
          answer:0,
          tr:'Konu ne?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[19] = L19;
