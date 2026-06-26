// ders9.js - French Lesson 9: Hotel & Accommodation (beginner)
const L9 = {
  words:[
    {
      id:'w1',
      en:'l\'hôtel',
      ro:'lo-tel',
      tr:'otel'
    },
    {
      id:'w2',
      en:'la réception',
      ro:'la re-sep-syon',
      tr:'resepsiyon'
    },
    {
      id:'w3',
      en:'la chambre',
      ro:'la şambr',
      tr:'oda'
    },
    {
      id:'w4',
      en:'faire le check-in',
      ro:'fer luh çek-in',
      tr:'giriş yapmak'
    },
    {
      id:'w5',
      en:'faire le check-out',
      ro:'fer luh çek-aut',
      tr:'çıkış yapmak'
    },
    {
      id:'w6',
      en:'la clé',
      ro:'la kle',
      tr:'anahtar'
    },
    {
      id:'w7',
      en:'chambre simple',
      ro:'şambr senpl',
      tr:'tek kişilik oda'
    },
    {
      id:'w8',
      en:'chambre double',
      ro:'şambr dubl',
      tr:'çift kişilik oda'
    },
    {
      id:'w9',
      en:'le petit-déjeuner',
      ro:'luh pəti de-jöne',
      tr:'kahvaltı'
    },
    {
      id:'w10',
      en:'le Wi-Fi',
      ro:'luh wi-fi',
      tr:'wifi'
    },
    {
      id:'w11',
      en:'la climatisation',
      ro:'la klima-ti-za-syon',
      tr:'klima'
    },
    {
      id:'w12',
      en:'la réservation',
      ro:'la re-zer-va-syon',
      tr:'rezervasyon'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Otel İfadeleri',
      title_en:'Hotel phrases',
      explanation:'Check-in sırasında J\'ai une réservation au nom de... kalıbı yaygındır. Kahvaltı dahil mi sorusu için est inclus? kullanılır.',
      table:[
        {
          pronoun:'Rezervasyon',
          form:'J\'ai une réservation',
          example:'J\'ai une réservation au nom d\'Ali.',
          tr:'Ali adına rezervasyonum var.'
        },
        {
          pronoun:'Oda',
          form:'chambre simple/double',
          example:'Je voudrais une chambre double.',
          tr:'Çift kişilik oda isterim.'
        },
        {
          pronoun:'Kahvaltı',
          form:'est inclus ?',
          example:'Le petit-déjeuner est inclus ?',
          tr:'Kahvaltı dahil mi?'
        },
        {
          pronoun:'Çıkış',
          form:'check-out',
          example:'À quelle heure est le check-out ?',
          tr:'Çıkış saat kaçta?'
        }
      ],
      note:'Resepsiyonda nazik hitap için Bonjour/Bonsoir tercih edilir.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'J\'ai une réservation.',
      tr:'Rezervasyonum var.',
      prompt:'Check-in yap'
    },
    {
      id:'sp2',
      en:'Je voudrais une chambre simple.',
      tr:'Tek kişilik oda isterim.',
      prompt:'Oda iste'
    },
    {
      id:'sp3',
      en:'Le petit-déjeuner est inclus ?',
      tr:'Kahvaltı dahil mi?',
      prompt:'Kahvaltı sor'
    },
    {
      id:'sp4',
      en:'Je fais le check-out.',
      tr:'Check-out yapıyorum.',
      prompt:'Çıkış söyle'
    },
    {
      id:'sp5',
      en:'La chambre est confortable.',
      tr:'Oda konforlu.',
      prompt:'Odayı değerlendir'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'À la réception',
      title_en:'At reception',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Bonsoir, bienvenue à l\'hôtel.',
          tr:'İyi akşamlar, otele hoş geldiniz.',
          gramNote:'Karşılama.',
          bd:[
            {
              ro:'bienvenue',
              tr:'hoş geldiniz',
              role:'greeting',
              note:'Resepsiyon dili.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Bonsoir, j\'ai une réservation.',
          tr:'İyi akşamlar, rezervasyonum var.',
          gramNote:'Temel check-in ifadesi.',
          bd:[
            {
              ro:'réservation',
              tr:'rezervasyon',
              role:'O',
              note:'Ana kelime.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Oui, chambre simple pour deux nuits.',
          tr:'Evet, iki gecelik tek kişilik oda.',
          gramNote:'Süre belirtme.',
          bd:[
            {
              ro:'deux nuits',
              tr:'iki gece',
              role:'time',
              note:'Konaklama süresi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Parfait, merci beaucoup.',
          tr:'Harika, çok teşekkürler.',
          gramNote:'Kibar kapanış.',
          bd:[
            {
              ro:'Parfait',
              tr:'harika',
              role:'phrase',
              note:'Olumlu cevap.'
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
      transcript:'Ali a réservé une chambre simple pour trois nuits. Le petit-déjeuner est de 7h à 10h.',
      tr:'Ali üç gece için tek kişilik oda ayırttı. Kahvaltı 7-10 arası.',
      questions:[
        {
          q:'Type de chambre ?',
          opts:[
            'double',
            'simple',
            'suite',
            'familiale'
          ],
          answer:1,
          tr:'Oda tipi?'
        },
        {
          q:'Combien de nuits ?',
          opts:[
            '1',
            '2',
            '3',
            '4'
          ],
          answer:2,
          tr:'Kaç gece?'
        },
        {
          q:'Petit-déjeuner ?',
          opts:[
            '6-9',
            '7-10',
            '8-11',
            '9-12'
          ],
          answer:1,
          tr:'Kahvaltı saatleri?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[9] = L9;
