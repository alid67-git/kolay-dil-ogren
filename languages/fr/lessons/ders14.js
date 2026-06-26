// ders14.js - French Lesson 14: Home & Living (beginner)
const L14 = {
  words:[
    {
      id:'w1',
      en:'l\'appartement',
      ro:'la-par-te-mon',
      tr:'daire'
    },
    {
      id:'w2',
      en:'la maison',
      ro:'la me-zon',
      tr:'ev'
    },
    {
      id:'w3',
      en:'la chambre',
      ro:'la şambr',
      tr:'oda'
    },
    {
      id:'w4',
      en:'la cuisine',
      ro:'la kwi-zin',
      tr:'mutfak'
    },
    {
      id:'w5',
      en:'la salle de bain',
      ro:'la sal də ben',
      tr:'banyo'
    },
    {
      id:'w6',
      en:'le balcon',
      ro:'luh bal-kon',
      tr:'balkon'
    },
    {
      id:'w7',
      en:'le loyer',
      ro:'luh lwa-ye',
      tr:'kira'
    },
    {
      id:'w8',
      en:'le propriétaire',
      ro:'luh pro-prye-ter',
      tr:'ev sahibi'
    },
    {
      id:'w9',
      en:'déménager',
      ro:'de-me-na-je',
      tr:'taşınmak'
    },
    {
      id:'w10',
      en:'les voisins',
      ro:'le vwa-zan',
      tr:'komşular'
    },
    {
      id:'w11',
      en:'l\'électricité',
      ro:'le-lek-tri-si-te',
      tr:'elektrik'
    },
    {
      id:'w12',
      en:'le chauffage',
      ro:'luh şo-faj',
      tr:'ısıtma'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Ev Konuşmaları',
      title_en:'Home phrases',
      explanation:'Adres belirtmek için J\'habite à..., kira için Le loyer est de... kullanılır.',
      table:[
        {
          pronoun:'Adres',
          form:'J\'habite à...',
          example:'J\'habite à Paris.',
          tr:'Paris\'te yaşıyorum.'
        },
        {
          pronoun:'Kira',
          form:'Le loyer est de...',
          example:'Le loyer est de 800 euros.',
          tr:'Kira 800 euro.'
        },
        {
          pronoun:'Taşınma',
          form:'Je déménage',
          example:'Je déménage bientôt.',
          tr:'Yakında taşınıyorum.'
        },
        {
          pronoun:'Komşu',
          form:'les voisins',
          example:'Mes voisins sont gentils.',
          tr:'Komşularım nazik.'
        }
      ],
      note:'Konut ilanlarında charges comprises ifadesi sık görünür.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'J\'habite dans un appartement.',
      tr:'Bir apartmanda yaşıyorum.',
      prompt:'Konut söyle'
    },
    {
      id:'sp2',
      en:'Il y a trois chambres.',
      tr:'Üç oda var.',
      prompt:'Oda sayısı söyle'
    },
    {
      id:'sp3',
      en:'Le loyer est de 700 euros.',
      tr:'Kira 700 euro.',
      prompt:'Kira belirt'
    },
    {
      id:'sp4',
      en:'Je déménage le mois prochain.',
      tr:'Gelecek ay taşınıyorum.',
      prompt:'Taşınma söyle'
    },
    {
      id:'sp5',
      en:'Mes voisins sont sympas.',
      tr:'Komşularım iyi.',
      prompt:'Komşu anlat'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Appartement',
      title_en:'Apartment',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Bonjour, je cherche un appartement.',
          tr:'Merhaba, bir daire arıyorum.',
          gramNote:'Arama başlangıcı.',
          bd:[
            {
              ro:'je cherche',
              tr:'arıyorum',
              role:'V',
              note:'Temel fiil.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Combien de pièces ?',
          tr:'Kaç oda?',
          gramNote:'Emlak sorusu.',
          bd:[
            {
              ro:'pièces',
              tr:'oda',
              role:'O',
              note:'İlan dili.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Deux pièces, s\'il vous plaît.',
          tr:'İki oda, lütfen.',
          gramNote:'Talep cümlesi.',
          bd:[
            {
              ro:'deux pièces',
              tr:'iki oda',
              role:'phrase',
              note:'Miktar ifadesi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Le loyer est de 750 euros.',
          tr:'Kira 750 euro.',
          gramNote:'Fiyat bilgisi.',
          bd:[
            {
              ro:'loyer',
              tr:'kira',
              role:'O',
              note:'Temel kelime.'
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
      transcript:'Ali habite dans un appartement de deux pièces. Le loyer est de neuf cents euros.',
      tr:'Ali iki odalı bir dairede yaşıyor. Kira 900 euro.',
      questions:[
        {
          q:'Type ?',
          opts:[
            'maison',
            'appartement',
            'hôtel',
            'bureau'
          ],
          answer:1,
          tr:'Konut tipi?'
        },
        {
          q:'Pièces ?',
          opts:[
            '1',
            '2',
            '3',
            '4'
          ],
          answer:1,
          tr:'Oda sayısı?'
        },
        {
          q:'Loyer ?',
          opts:[
            '700€',
            '800€',
            '900€',
            '1000€'
          ],
          answer:2,
          tr:'Kira?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[14] = L14;
