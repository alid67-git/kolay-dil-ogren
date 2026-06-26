// ders5.js — Italian Lesson 5: Restaurant & Food (beginner)
const L5 = {
  words:[
    {
      id:'w1',
      en:'Un tavolo per due, per favore.',
      ro:'un TA-vo-lo',
      tr:'İki kişilik masa, lütfen.',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'il menù',
      ro:'il me-NU',
      tr:'menü'
    },
    {
      id:'w3',
      en:'ordinare',
      ro:'or-di-NA-re',
      tr:'sipariş vermek'
    },
    {
      id:'w4',
      en:'Vorrei...',
      ro:'vor-REI',
      tr:'... istiyorum'
    },
    {
      id:'w5',
      en:'l\'acqua',
      ro:'LAK-kwa',
      tr:'su'
    },
    {
      id:'w6',
      en:'il caffè',
      ro:'il kaf-FE',
      tr:'kahve'
    },
    {
      id:'w7',
      en:'il pane',
      ro:'il PA-ne',
      tr:'ekmek'
    },
    {
      id:'w8',
      en:'la zuppa',
      ro:'la TSUP-pa',
      tr:'çorba'
    },
    {
      id:'w9',
      en:'l\'insalata',
      ro:'lin-sa-LA-ta',
      tr:'salata'
    },
    {
      id:'w10',
      en:'il pollo',
      ro:'il POL-lo',
      tr:'tavuk'
    },
    {
      id:'w11',
      en:'il pesce',
      ro:'il PE-she',
      tr:'balık'
    },
    {
      id:'w12',
      en:'vegetariano',
      ro:'ve-ge-ta-RYA-no',
      tr:'vejetaryen'
    },
    {
      id:'w13',
      en:'delizioso',
      ro:'de-LIT-syo-zo',
      tr:'lezzetli'
    },
    {
      id:'w14',
      en:'il conto',
      ro:'il KON-to',
      tr:'hesap'
    },
    {
      id:'w15',
      en:'la prenotazione',
      ro:'la pre-no-ta-TSYO-ne',
      tr:'rezervasyon'
    },
    {
      id:'w16',
      en:'il dolce',
      ro:'il DOL-che',
      tr:'tatlı'
    },
    {
      id:'w17',
      en:'l\'antipasto',
      ro:'lan-ti-PAS-to',
      tr:'başlangıç'
    },
    {
      id:'w18',
      en:'il piatto principale',
      ro:'il PYAT-to',
      tr:'ana yemek'
    },
    {
      id:'w19',
      en:'la bevanda',
      ro:'la be-VAN-da',
      tr:'içecek'
    },
    {
      id:'w20',
      en:'Buon appetito!',
      ro:'bwon ap-pe-TI-to',
      tr:'Afiyet olsun!'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Restaurant & Food — Temel',
      title_en:'Restaurant & Food — Basics',
      explanation:'Bu derste Restaurant & Food konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'Un tavolo per due, per favore.',
          example:'Un tavolo per due, per favore.',
          tr:'İki kişilik masa, lütfen.'
        },
        {
          pronoun:'Pratik',
          form:'il menù',
          example:'il menù',
          tr:'menü'
        }
      ],
      note:'Kelime + artikel (varsa) birlikte ezberle.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Un tavolo per due, per favore.',
      tr:'İki kişilik masa, lütfen.',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'il menù',
      tr:'menü',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'ordinare',
      tr:'sipariş vermek',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Vorrei...',
      tr:'... istiyorum',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'l\'acqua',
      tr:'su',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Restaurant & Food',
      title_en:'Restaurant & Food',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Un tavolo per due, per favore.',
          tr:'İki kişilik masa, lütfen.',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'Un tavolo per due, per favore.',
              tr:'İki kişilik masa, lütfen.',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'il menù',
          tr:'menü',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'il menù',
              tr:'menü',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'ordinare',
          tr:'sipariş vermek',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Vorrei...',
          tr:'... istiyorum',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Vorrei la zuppa e un caffè, per favore.',
      tr:'Vorrei la zuppa e un caffè, per favore.',
      questions:[
        {
          q:'?',
          opts:[
            'Un tavolo per due, per favore.',
            'il menù',
            'ordinare',
            'Vorrei...'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'??',
          opts:[
            'il menù',
            'ordinare',
            'Vorrei...',
            'l\'acqua'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[5] = L5;
