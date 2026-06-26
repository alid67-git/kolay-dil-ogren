// ders8.js — Italian Lesson 8: Transport & Travel (beginner)
const L8 = {
  words:[
    {
      id:'w1',
      en:'il treno',
      ro:'il tre',
      tr:'tren',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'l\'autobus',
      ro:'l\'auto',
      tr:'otobüs'
    },
    {
      id:'w3',
      en:'la metropolitana',
      ro:'la met',
      tr:'metro'
    },
    {
      id:'w4',
      en:'l\'aereo',
      ro:'l\'aere',
      tr:'uçak'
    },
    {
      id:'w5',
      en:'l\'aeroporto',
      ro:'l\'aero',
      tr:'havaalanı'
    },
    {
      id:'w6',
      en:'il biglietto',
      ro:'il big',
      tr:'bilet'
    },
    {
      id:'w7',
      en:'salire',
      ro:'salire',
      tr:'binmek'
    },
    {
      id:'w8',
      en:'scendere',
      ro:'scende',
      tr:'inmek'
    },
    {
      id:'w9',
      en:'fare cambio',
      ro:'fare c',
      tr:'aktarma'
    },
    {
      id:'w10',
      en:'il binario',
      ro:'il bin',
      tr:'peron'
    },
    {
      id:'w11',
      en:'partire',
      ro:'partir',
      tr:'kalkmak'
    },
    {
      id:'w12',
      en:'arrivare',
      ro:'arriva',
      tr:'varmak'
    },
    {
      id:'w13',
      en:'il viaggio',
      ro:'il via',
      tr:'yolculuk'
    },
    {
      id:'w14',
      en:'il bagaglio',
      ro:'il bag',
      tr:'bagaj'
    },
    {
      id:'w15',
      en:'il passaporto',
      ro:'il pas',
      tr:'pasaport'
    },
    {
      id:'w16',
      en:'la frontiera',
      ro:'la fro',
      tr:'sınır'
    },
    {
      id:'w17',
      en:'la partenza',
      ro:'la par',
      tr:'kalkış'
    },
    {
      id:'w18',
      en:'l\'arrivo',
      ro:'l\'arri',
      tr:'varış'
    },
    {
      id:'w19',
      en:'in ritardo',
      ro:'in rit',
      tr:'gecikmeli'
    },
    {
      id:'w20',
      en:'A che ora parte?',
      ro:'A che ',
      tr:'Ne zaman kalkıyor?'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Transport & Travel — Temel',
      title_en:'Transport & Travel — Basics',
      explanation:'Bu derste Transport & Travel konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'il treno',
          example:'il treno',
          tr:'tren'
        },
        {
          pronoun:'Pratik',
          form:'l\'autobus',
          example:'l\'autobus',
          tr:'otobüs'
        }
      ],
      note:'Kelime + artikel (varsa) birlikte ezberle.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'il treno',
      tr:'tren',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'l\'autobus',
      tr:'otobüs',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'la metropolitana',
      tr:'metro',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'l\'aereo',
      tr:'uçak',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'l\'aeroporto',
      tr:'havaalanı',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Transport & Travel',
      title_en:'Transport & Travel',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'il treno',
          tr:'tren',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'il treno',
              tr:'tren',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'l\'autobus',
          tr:'otobüs',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'l\'autobus',
              tr:'otobüs',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'la metropolitana',
          tr:'metro',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'l\'aereo',
          tr:'uçak',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'il treno.',
      tr:'il treno.',
      questions:[
        {
          q:'?',
          opts:[
            'il treno',
            'l\'autobus',
            'la metropolitana',
            'l\'aereo'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'??',
          opts:[
            'l\'autobus',
            'la metropolitana',
            'l\'aereo',
            'l\'aeroporto'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[8] = L8;
