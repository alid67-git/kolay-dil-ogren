// ders5.js - French Lesson 5: Restaurant & Food (beginner)
const L5 = {
  words:[
    {
      id:'w1',
      en:'Une table pour deux, s\'il vous plaît.',
      ro:'ün tabl pur dö',
      tr:'İki kişilik masa, lütfen.'
    },
    {
      id:'w2',
      en:'la carte',
      ro:'la kart',
      tr:'menü'
    },
    {
      id:'w3',
      en:'Je voudrais...',
      ro:'juh vu-dre',
      tr:'... isterim'
    },
    {
      id:'w4',
      en:'l\'entrée',
      ro:'lon-tre',
      tr:'başlangıç'
    },
    {
      id:'w5',
      en:'le plat principal',
      ro:'luh pla prensipal',
      tr:'ana yemek'
    },
    {
      id:'w6',
      en:'le dessert',
      ro:'luh de-ser',
      tr:'tatlı'
    },
    {
      id:'w7',
      en:'la boisson',
      ro:'la bwa-son',
      tr:'içecek'
    },
    {
      id:'w8',
      en:'de l\'eau',
      ro:'dö lo',
      tr:'su'
    },
    {
      id:'w9',
      en:'le café',
      ro:'luh ka-fe',
      tr:'kahve'
    },
    {
      id:'w10',
      en:'la soupe',
      ro:'la sup',
      tr:'çorba'
    },
    {
      id:'w11',
      en:'la salade',
      ro:'la sa-lad',
      tr:'salata'
    },
    {
      id:'w12',
      en:'la note',
      ro:'la not',
      tr:'hesap'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Restoranda Sipariş',
      title_en:'Ordering',
      explanation:'Nazik istek için Je voudrais... kalıbı çok kullanılır. Hesap isterken La note, s\'il vous plaît denir.',
      table:[
        {
          pronoun:'Masa',
          form:'Une table pour...',
          example:'Une table pour trois.',
          tr:'Üç kişilik masa.'
        },
        {
          pronoun:'Sipariş',
          form:'Je voudrais...',
          example:'Je voudrais une soupe.',
          tr:'Bir çorba isterim.'
        },
        {
          pronoun:'Hesap',
          form:'La note',
          example:'La note, s\'il vous plaît.',
          tr:'Hesap, lütfen.'
        },
        {
          pronoun:'Su',
          form:'de l\'eau',
          example:'De l\'eau, s\'il vous plaît.',
          tr:'Su, lütfen.'
        }
      ],
      note:'Fransa\'da menü için çoğunlukla la carte kullanılır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Une table pour deux, s\'il vous plaît.',
      tr:'İki kişilik masa, lütfen.',
      prompt:'Masa iste'
    },
    {
      id:'sp2',
      en:'Je voudrais une soupe.',
      tr:'Bir çorba isterim.',
      prompt:'Sipariş ver'
    },
    {
      id:'sp3',
      en:'La note, s\'il vous plaît.',
      tr:'Hesap, lütfen.',
      prompt:'Hesap iste'
    },
    {
      id:'sp4',
      en:'C\'est délicieux !',
      tr:'Çok lezzetli!',
      prompt:'Yemeği yorumla'
    },
    {
      id:'sp5',
      en:'De l\'eau, s\'il vous plaît.',
      tr:'Su, lütfen.',
      prompt:'İçecek iste'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Au restaurant',
      title_en:'At the restaurant',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Bonsoir, vous avez une réservation ?',
          tr:'İyi akşamlar, rezervasyonunuz var mı?',
          gramNote:'Karşılama cümlesi.',
          bd:[
            {
              ro:'réservation',
              tr:'rezervasyon',
              role:'O',
              note:'Temel restoran kelimesi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Oui, au nom d\'Ali.',
          tr:'Evet, Ali adına.',
          gramNote:'au nom de = adına.',
          bd:[
            {
              ro:'au nom de',
              tr:'adına',
              role:'K',
              note:'Rezervasyon ifadesi.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Voici la carte.',
          tr:'Menü burada.',
          gramNote:'Voici = buyurun.',
          bd:[
            {
              ro:'Voici',
              tr:'buyurun',
              role:'phrase',
              note:'Sunum ifadesi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Merci, je voudrais une salade.',
          tr:'Teşekkürler, bir salata isterim.',
          gramNote:'Je voudrais kullanımı.',
          bd:[
            {
              ro:'Je voudrais',
              tr:'isterim',
              role:'modal',
              note:'Nazik sipariş.'
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
      transcript:'Le plat du jour est le poisson à quatorze euros. Le dessert est à cinq euros.',
      tr:'Günün yemeği balık ve 14 euro. Tatlı 5 euro.',
      questions:[
        {
          q:'Plat du jour ?',
          opts:[
            'salade',
            'poisson',
            'poulet',
            'pâtes'
          ],
          answer:1,
          tr:'Günün yemeği ne?'
        },
        {
          q:'Prix du plat ?',
          opts:[
            '10€',
            '12€',
            '14€',
            '16€'
          ],
          answer:2,
          tr:'Yemek kaç euro?'
        },
        {
          q:'Prix du dessert ?',
          opts:[
            '3€',
            '4€',
            '5€',
            '6€'
          ],
          answer:2,
          tr:'Tatlı kaç euro?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[5] = L5;
