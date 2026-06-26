// ders9.js — Italian Lesson 9: Hotel & Accommodation (beginner)
const L9 = {
  words:[
    {
      id:'w1',
      en:'l\'hotel',
      ro:'l\'hote',
      tr:'otel',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'la reception',
      ro:'la rec',
      tr:'resepsiyon'
    },
    {
      id:'w3',
      en:'la camera',
      ro:'la cam',
      tr:'oda'
    },
    {
      id:'w4',
      en:'fare il check-in',
      ro:'fare i',
      tr:'giriş yapmak'
    },
    {
      id:'w5',
      en:'fare il check-out',
      ro:'fare i',
      tr:'çıkış yapmak'
    },
    {
      id:'w6',
      en:'la chiave',
      ro:'la chi',
      tr:'anahtar'
    },
    {
      id:'w7',
      en:'camera singola',
      ro:'camera',
      tr:'tek kişilik oda'
    },
    {
      id:'w8',
      en:'camera doppia',
      ro:'camera',
      tr:'çift kişilik oda'
    },
    {
      id:'w9',
      en:'la colazione',
      ro:'la col',
      tr:'kahvaltı'
    },
    {
      id:'w10',
      en:'wifi',
      ro:'wifi',
      tr:'wifi'
    },
    {
      id:'w11',
      en:'l\'aria condizionata',
      ro:'l\'aria',
      tr:'klima'
    },
    {
      id:'w12',
      en:'la prenotazione',
      ro:'la pre',
      tr:'rezervasyon'
    },
    {
      id:'w13',
      en:'il letto',
      ro:'il let',
      tr:'yatak'
    },
    {
      id:'w14',
      en:'il bagno',
      ro:'il bag',
      tr:'banyo'
    },
    {
      id:'w15',
      en:'la doccia',
      ro:'la doc',
      tr:'duş'
    },
    {
      id:'w16',
      en:'l\'asciugamano',
      ro:'l\'asci',
      tr:'havlu'
    },
    {
      id:'w17',
      en:'la pulizia',
      ro:'la pul',
      tr:'temizlik'
    },
    {
      id:'w18',
      en:'una notte',
      ro:'una no',
      tr:'bir gece'
    },
    {
      id:'w19',
      en:'C\'è il wifi?',
      ro:'C\'è il',
      tr:'WiFi var mı?'
    },
    {
      id:'w20',
      en:'A che ora è la colazione?',
      ro:'A che ',
      tr:'Kahvaltı ne zaman?'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Hotel & Accommodation — Temel',
      title_en:'Hotel & Accommodation — Basics',
      explanation:'Bu derste Hotel & Accommodation konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'l\\\'hotel',
          example:'l\\\'hotel',
          tr:'otel'
        },
        {
          pronoun:'Pratik',
          form:'la reception',
          example:'la reception',
          tr:'resepsiyon'
        }
      ],
      note:'Kelime + artikel (varsa) birlikte ezberle.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'l\\\'hotel',
      tr:'otel',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'la reception',
      tr:'resepsiyon',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'la camera',
      tr:'oda',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'fare il check-in',
      tr:'giriş yapmak',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'fare il check-out',
      tr:'çıkış yapmak',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Hotel & Accommodation',
      title_en:'Hotel & Accommodation',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'l\'hotel',
          tr:'otel',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'l\'hotel',
              tr:'otel',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'la reception',
          tr:'resepsiyon',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'la reception',
              tr:'resepsiyon',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'la camera',
          tr:'oda',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'fare il check-in',
          tr:'giriş yapmak',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'l\'hotel.',
      tr:'l\'hotel.',
      questions:[
        {
          q:'?',
          opts:[
            'l\'hotel',
            'la reception',
            'la camera',
            'fare il check-in'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'??',
          opts:[
            'la reception',
            'la camera',
            'fare il check-in',
            'fare il check-out'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[9] = L9;
