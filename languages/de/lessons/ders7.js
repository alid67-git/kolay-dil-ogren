// ders7.js — German Lesson 7: Directions (beginner)
const L7 = {
  words:[
    {
      id:'w1',
      en:'Wo ist...?',
      ro:'vo ist',
      tr:'... nerede?'
    },
    {
      id:'w2',
      en:'links',
      ro:'links',
      tr:'sol'
    },
    {
      id:'w3',
      en:'rechts',
      ro:'rekhts',
      tr:'sağ'
    },
    {
      id:'w4',
      en:'geradeaus',
      ro:'ge-RA-de-aus',
      tr:'düz / ileri'
    },
    {
      id:'w5',
      en:'die Ecke',
      ro:'dee E-ke',
      tr:'köşe'
    },
    {
      id:'w6',
      en:'die Straße',
      ro:'dee SHTra-se',
      tr:'cadde / sokak'
    },
    {
      id:'w7',
      en:'der Bahnhof',
      ro:'der BAHN-hof',
      tr:'tren istasyonu'
    },
    {
      id:'w8',
      en:'die Haltestelle',
      ro:'dee HAL-te-shtel-le',
      tr:'durak'
    },
    {
      id:'w9',
      en:'die Ampel',
      ro:'dee AM-pel',
      tr:'trafik lambası'
    },
    {
      id:'w10',
      en:'überqueren',
      ro:'ü-ber-KVAY-ren',
      tr:'karşıdan karşıya geçmek'
    },
    {
      id:'w11',
      en:'die Kreuzung',
      ro:'dee KROY-tsung',
      tr:'kavşak'
    },
    {
      id:'w12',
      en:'in der Nähe',
      ro:'in der NEE-e',
      tr:'yakında'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Yön Tarifi Verme',
      title_en:'Giving Directions',
      explanation:'Temel yönler: links (sol), rechts (sağ), geradeaus (düz). Gehen Sie... = ... gidin (resmi emir). An der Ecke = köşede. Die erste Straße = ilk sokak.',
      table:[
        {
          pronoun:'Yönler',
          form:'links / rechts / geradeaus',
          example:'Gehen Sie geradeaus.',
          tr:'Düz gidin.'
        },
        {
          pronoun:'Konum',
          form:'in der Nähe / weit weg',
          example:'Es ist in der Nähe.',
          tr:'Yakında.'
        },
        {
          pronoun:'Soru',
          form:'Wo ist...? / Wie komme ich...?',
          example:'Wo ist der Bahnhof?',
          tr:'Tren istasyonu nerede?'
        },
        {
          pronoun:'Mesafe',
          form:'ca. / ungefähr',
          example:'Es ist ca. fünf Minuten.',
          tr:'Yaklaşık beş dakika.'
        }
      ],
      note:'Almanya\'da yaya geçitlerine dikkat — kırmızıda geçme!'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Wo ist der Bahnhof?',
      tr:'Tren istasyonu nerede?',
      prompt:'Yer sor'
    },
    {
      id:'sp2',
      en:'Gehen Sie geradeaus.',
      tr:'Düz gidin.',
      prompt:'Yön tarif et'
    },
    {
      id:'sp3',
      en:'Dann links.',
      tr:'Sonra sola.',
      prompt:'Yön ekle'
    },
    {
      id:'sp4',
      en:'Es ist in der Nähe.',
      tr:'Yakında.',
      prompt:'Mesafe belirt'
    },
    {
      id:'sp5',
      en:'Danke für die Hilfe!',
      tr:'Yardım için teşekkürler!',
      prompt:'Teşekkür et'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Nach dem Weg fragen',
      title_en:'Asking for Directions',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Entschuldigung, wo ist der Bahnhof?',
          tr:'Pardon, tren istasyonu nerede?',
          gramNote:'Yol sorma — Entschuldigung ile başla.',
          bd:[
            {
              ro:'Entschuldigung',
              tr:'Pardon',
              role:'courtesy',
              note:'Yabancıya yaklaşırken.'
            },
            {
              ro:'wo ist',
              tr:'nerede',
              role:'question',
              note:'Wo + ist + isim.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Gehen Sie geradeaus, dann links.',
          tr:'Düz gidin, sonra sola.',
          gramNote:'dann = sonra.',
          bd:[
            {
              ro:'geradeaus',
              tr:'düz',
              role:'direction',
              note:'İleri git.'
            },
            {
              ro:'dann links',
              tr:'sonra sol',
              role:'direction',
              note:'Sıralı yön.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'An der Ampel?',
          tr:'Trafik lambasında mı?',
          gramNote:'Onay sorma.',
          bd:[
            {
              ro:'An der Ampel',
              tr:'Trafik lambasında',
              role:'K',
              note:'an + dativ — ...de/-da.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Ja, an der Ampel rechts. Dann sehen Sie den Bahnhof.',
          tr:'Evet, trafik lambasında sağa. Sonra istasyonu görürsünüz.',
          gramNote:[
            {
              ro:'sehen Sie',
              tr:'görürsünüz',
              role:'V',
              note:'Resmi emir / tavsiye.'
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
      transcript:'Gehen Sie geradeaus bis zur Kreuzung. Dann links. Der Bahnhof ist in fünf Minuten zu Fuß.',
      tr:'Kavşağa kadar düz gidin. Sonra sola. Tren istasyonu yürüyerek beş dakika.',
      questions:[
        {
          q:'Was macht man an der Kreuzung?',
          opts:[
            'rechts',
            'links',
            'zurück',
            'stehen'
          ],
          answer:1,
          tr:'Kavşakta ne yapılır?'
        },
        {
          q:'Wie lange braucht man zu Fuß?',
          opts:[
            '3 Min.',
            '5 Min.',
            '10 Min.',
            '15 Min.'
          ],
          answer:1,
          tr:'Yürüyerek ne kadar sürer?'
        },
        {
          q:'Wohin geht man zuerst?',
          opts:[
            'links',
            'rechts',
            'geradeaus',
            'zurück'
          ],
          answer:2,
          tr:'Önce nereye gidilir?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[7] = L7;
