// ders14.js — German Lesson 14: Home & Living (beginner)
const L14 = {
  words:[
    {
      id:'w1',
      en:'die Wohnung',
      ro:'dee VON-ung',
      tr:'daire / konut'
    },
    {
      id:'w2',
      en:'das Haus',
      ro:'das haus',
      tr:'ev'
    },
    {
      id:'w3',
      en:'das Zimmer',
      ro:'das TSI-mer',
      tr:'oda'
    },
    {
      id:'w4',
      en:'die Küche',
      ro:'dee KÜ-she',
      tr:'mutfak'
    },
    {
      id:'w5',
      en:'das Bad',
      ro:'das bad',
      tr:'banyo'
    },
    {
      id:'w6',
      en:'der Balkon',
      ro:'der bal-KON',
      tr:'balkon'
    },
    {
      id:'w7',
      en:'die Miete',
      ro:'dee MEE-te',
      tr:'kira'
    },
    {
      id:'w8',
      en:'der Vermieter',
      ro:'der fer-MEE-ter',
      tr:'ev sahibi'
    },
    {
      id:'w9',
      en:'umziehen',
      ro:'UM-tsee-en',
      tr:'taşınmak'
    },
    {
      id:'w10',
      en:'die Nachbarn',
      ro:'dee NAKH-barn',
      tr:'komşular'
    },
    {
      id:'w11',
      en:'der Strom',
      ro:'der shtrom',
      tr:'elektrik'
    },
    {
      id:'w12',
      en:'die Heizung',
      ro:'dee HAY-tsung',
      tr:'ısıtma'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Ev ve Konut',
      title_en:'Home and Housing',
      explanation:'Ich wohne in... = ...de yaşıyorum. Die Miete beträgt... = Kira ... tutar. Nebenkosten = ek masraflar. Warmmiete = ısıtma dahil kira.',
      table:[
        {
          pronoun:'Adres',
          form:'Ich wohne in... / Meine Adresse ist...',
          example:'Ich wohne in Berlin.',
          tr:'Berlin\'de yaşıyorum.'
        },
        {
          pronoun:'Kira',
          form:'Die Miete beträgt...',
          example:'Die Miete beträgt achthundert Euro.',
          tr:'Kira sekiz yüz euro.'
        },
        {
          pronoun:'Taşınma',
          form:'Ich ziehe um',
          example:'Nächsten Monat ziehe ich um.',
          tr:'Gelecek ay taşınıyorum.'
        },
        {
          pronoun:'Komşu',
          form:'die Nachbarn',
          example:'Meine Nachbarn sind nett.',
          tr:'Komşularım nazik.'
        }
      ],
      note:'Almanya\'da çoğu kişi kiralık oturur — Mietwohnung.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Ich wohne in einer Wohnung.',
      tr:'Bir dairede yaşıyorum.',
      prompt:'Konut tipini söyle'
    },
    {
      id:'sp2',
      en:'Die Wohnung hat drei Zimmer.',
      tr:'Dairenin üç odası var.',
      prompt:'Oda sayısı söyle'
    },
    {
      id:'sp3',
      en:'Die Miete ist sechshundert Euro.',
      tr:'Kira altı yüz euro.',
      prompt:'Kira söyle'
    },
    {
      id:'sp4',
      en:'Ich ziehe nächsten Monat um.',
      tr:'Gelecek ay taşınıyorum.',
      prompt:'Taşınma haberi ver'
    },
    {
      id:'sp5',
      en:'Die Nachbarn sind sehr nett.',
      tr:'Komşular çok nazik.',
      prompt:'Komşulardan bahset'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Wohnungssuche',
      title_en:'Apartment Hunting',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Guten Tag. Ich suche eine Wohnung.',
          tr:'İyi günler. Daire arıyorum.',
          gramNote:'Ev arama.',
          bd:[
            {
              ro:'Ich suche',
              tr:'Arıyorum',
              role:'V',
              note:'suchen + aküsatif.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Wie viele Zimmer brauchen Sie?',
          tr:'Kaç oda lazım?',
          gramNote:'Ev sahibi/emlak sorusu.',
          bd:[
            {
              ro:'Wie viele Zimmer',
              tr:'Kaç oda',
              role:'question',
              note:'Wie viele = kaç tane.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Zwei Zimmer. Was kostet die Miete?',
          tr:'İki oda. Kira ne kadar?',
          gramNote:'Fiyat sorusu.',
          bd:[
            {
              ro:'die Miete',
              tr:'kira',
              role:'O',
              note:'Feminin → die.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Siebenhundert Euro warm, inklusive Nebenkosten.',
          tr:'Yedi yüz euro ısıtma dahil, ek masraflar dahil.',
          gramNote:[
            {
              ro:'warm',
              tr:'ısıtma dahil',
              role:'adj',
              note:'Warmmiete = Nebenkosten dahil.'
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
      transcript:'Ali wohnt in einer Zweizimmerwohnung in München. Die Miete beträgt neunhundert Euro. Die Küche ist modern und der Balkon ist groß.',
      tr:'Ali Münih\'te iki odalı bir dairede oturuyor. Kira dokuz yüz euro. Mutfak modern ve balkon büyük.',
      questions:[
        {
          q:'Wo wohnt Ali?',
          opts:[
            'Berlin',
            'Hamburg',
            'München',
            'Köln'
          ],
          answer:2,
          tr:'Ali nerede oturuyor?'
        },
        {
          q:'Wie viele Zimmer?',
          opts:[
            '1',
            '2',
            '3',
            '4'
          ],
          answer:1,
          tr:'Kaç oda?'
        },
        {
          q:'Wie viel ist die Miete?',
          opts:[
            '700 €',
            '800 €',
            '900 €',
            '1000 €'
          ],
          answer:2,
          tr:'Kira ne kadar?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[14] = L14;
