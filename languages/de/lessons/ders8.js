// ders8.js — German Lesson 8: Transport & Travel (beginner)
const L8 = {
  words:[
    {
      id:'w1',
      en:'der Zug',
      ro:'der tsuk',
      tr:'tren'
    },
    {
      id:'w2',
      en:'der Bus',
      ro:'der bus',
      tr:'otobüs'
    },
    {
      id:'w3',
      en:'die U-Bahn',
      ro:'dee U-bahn',
      tr:'metro'
    },
    {
      id:'w4',
      en:'das Flugzeug',
      ro:'das FLUK-tsayk',
      tr:'uçak'
    },
    {
      id:'w5',
      en:'der Flughafen',
      ro:'der FLUKH-ha-fen',
      tr:'havaalanı'
    },
    {
      id:'w6',
      en:'die Fahrkarte',
      ro:'dee FAR-kar-te',
      tr:'bilet'
    },
    {
      id:'w7',
      en:'einsteigen',
      ro:'AYN-shty-gen',
      tr:'binmek (araç)'
    },
    {
      id:'w8',
      en:'aussteigen',
      ro:'AUS-shty-gen',
      tr:'inmek (araç)'
    },
    {
      id:'w9',
      en:'umsteigen',
      ro:'UM-shty-gen',
      tr:'aktarma yapmak'
    },
    {
      id:'w10',
      en:'der Gleis',
      ro:'der glys',
      tr:'peron'
    },
    {
      id:'w11',
      en:'abfahren',
      ro:'AP-fah-ren',
      tr:'kalkmak (araç)'
    },
    {
      id:'w12',
      en:'ankommen',
      ro:'AN-ko-men',
      tr:'varmak'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Toplu Taşıma',
      title_en:'Public Transport',
      explanation:'Almanya\'da U-Bahn (metro), S-Bahn (banliyö), Bus, Tram. Fahrkarte = bilet. Einsteigen/Aussteigen = binmek/inmek. Bitte entwerten! = Bileti damgalayın!',
      table:[
        {
          pronoun:'Bilet',
          form:'die Fahrkarte',
          example:'Eine Fahrkarte, bitte.',
          tr:'Bir bilet, lütfen.'
        },
        {
          pronoun:'Peron',
          form:'Gleis ...',
          example:'Der Zug fährt von Gleis 3.',
          tr:'Tren 3. perondan kalkıyor.'
        },
        {
          pronoun:'Aktarma',
          form:'umsteigen',
          example:'In Berlin umsteigen.',
          tr:'Berlin\'de aktarma yap.'
        },
        {
          pronoun:'Gecikme',
          form:'Verspätung',
          example:'Der Zug hat Verspätung.',
          tr:'Tren gecikmeli.'
        }
      ],
      note:'Deutsche Bahn (DB) = tren şirketi. BVG/MVV = şehir içi ulaşım.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Eine Fahrkarte nach Berlin, bitte.',
      tr:'Berlin\'e bir bilet, lütfen.',
      prompt:'Bilet al'
    },
    {
      id:'sp2',
      en:'Wo muss ich umsteigen?',
      tr:'Nerede aktarma yapmalıyım?',
      prompt:'Aktarma sor'
    },
    {
      id:'sp3',
      en:'Der Zug fährt von Gleis 5.',
      tr:'Tren 5. perondan kalkıyor.',
      prompt:'Peron söyle'
    },
    {
      id:'sp4',
      en:'Wann kommt der nächste Bus?',
      tr:'Sonraki otobüs ne zaman geliyor?',
      prompt:'Otobüs saati sor'
    },
    {
      id:'sp5',
      en:'Ich steige hier aus.',
      tr:'Burada iniyorum.',
      prompt:'İneceğini söyle'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Am Bahnhof',
      title_en:'At the Train Station',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Eine Fahrkarte nach München, bitte.',
          tr:'Münih\'e bir bilet, lütfen.',
          gramNote:'Bilet alma.',
          bd:[
            {
              ro:'nach München',
              tr:'Münih\'e',
              role:'K',
              note:'nach + şehir = ...e/-a.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Einfach oder hin und zurück?',
          tr:'Tek yön mü gidiş-dönüş mü?',
          gramNote:'Bilet türü sorusu.',
          bd:[
            {
              ro:'hin und zurück',
              tr:'gidiş-dönüş',
              role:'K',
              note:'Standart bilet sorusu.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Hin und zurück, bitte.',
          tr:'Gidiş-dönüş, lütfen.',
          gramNote:'Cevap.',
          bd:[
            {
              ro:'Hin und zurück',
              tr:'Gidiş-dönüş',
              role:'O',
              note:'Bilet türü.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Das macht achtzig Euro. Gleis 7, Abfahrt um zehn Uhr.',
          tr:'Seksen euro. 7. peron, kalkış saat on.',
          gramNote:[
            {
              ro:'Gleis 7',
              tr:'7. peron',
              role:'O',
              note:'Gleis = peron.'
            },
            {
              ro:'Abfahrt',
              tr:'kalkış',
              role:'O',
              note:'abfahren = kalkmak.'
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
      transcript:'Der ICE nach Berlin fährt um vierzehn Uhr dreißig von Gleis 8 ab. Die Fahrt dauert vier Stunden.',
      tr:'Berlin ICE\'si saat 14:30\'da 8. perondan kalkıyor. Yolculuk dört saat sürüyor.',
      questions:[
        {
          q:'Wohin fährt der Zug?',
          opts:[
            'München',
            'Hamburg',
            'Berlin',
            'Köln'
          ],
          answer:2,
          tr:'Tren nereye gidiyor?'
        },
        {
          q:'Von welchem Gleis?',
          opts:[
            '5',
            '7',
            '8',
            '10'
          ],
          answer:2,
          tr:'Hangi perondan?'
        },
        {
          q:'Wie lange dauert die Fahrt?',
          opts:[
            '2 Std.',
            '3 Std.',
            '4 Std.',
            '5 Std.'
          ],
          answer:2,
          tr:'Yolculuk ne kadar sürer?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[8] = L8;
