// ders6.js — Italian Lesson 6: Shopping (beginner)
const L6 = {
  words:[
    {
      id:'w1',
      en:'Dove trovo...?',
      ro:'DO-ve TRO-vo',
      tr:'... nerede bulabilirim?',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'Quanto costa?',
      ro:'KWAN-to KOS-ta',
      tr:'Bu ne kadar?'
    },
    {
      id:'w3',
      en:'troppo caro',
      ro:'TROP-po KA-ro',
      tr:'çok pahalı'
    },
    {
      id:'w4',
      en:'economico',
      ro:'e-ko-NO-mi-ko',
      tr:'ucuz'
    },
    {
      id:'w5',
      en:'lo sconto',
      ro:'lo SKON-to',
      tr:'indirim'
    },
    {
      id:'w6',
      en:'la taglia',
      ro:'la TA-lya',
      tr:'beden'
    },
    {
      id:'w7',
      en:'il colore',
      ro:'il ko-LO-re',
      tr:'renk'
    },
    {
      id:'w8',
      en:'provare',
      ro:'pro-VA-re',
      tr:'denemek'
    },
    {
      id:'w9',
      en:'il camerino',
      ro:'il ka-me-RI-no',
      tr:'deneme kabini'
    },
    {
      id:'w10',
      en:'andare bene',
      ro:'an-DA-re BE-ne',
      tr:'uymak'
    },
    {
      id:'w11',
      en:'comprare',
      ro:'kom-PRA-re',
      tr:'satın almak'
    },
    {
      id:'w12',
      en:'pagare',
      ro:'pa-GA-re',
      tr:'ödemek'
    },
    {
      id:'w13',
      en:'lo scontrino',
      ro:'skon-TRI-no',
      tr:'fiş'
    },
    {
      id:'w14',
      en:'cambiare',
      ro:'kam-BYA-re',
      tr:'değiştirmek'
    },
    {
      id:'w15',
      en:'l\'offerta',
      ro:'lof-FER-ta',
      tr:'özel teklif'
    },
    {
      id:'w16',
      en:'il negozio',
      ro:'il ne-GO-tsyo',
      tr:'mağaza'
    },
    {
      id:'w17',
      en:'il prezzo',
      ro:'il PRET-tso',
      tr:'fiyat'
    },
    {
      id:'w18',
      en:'grande',
      ro:'GRAN-de',
      tr:'büyük'
    },
    {
      id:'w19',
      en:'piccolo',
      ro:'PIK-ko-lo',
      tr:'küçük'
    },
    {
      id:'w20',
      en:'Ha...?',
      ro:'a',
      tr:'... var mı?'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Shopping — Temel',
      title_en:'Shopping — Basics',
      explanation:'Bu derste Shopping konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'Dove trovo...?',
          example:'Dove trovo...?',
          tr:'... nerede bulabilirim?'
        },
        {
          pronoun:'Pratik',
          form:'Quanto costa?',
          example:'Quanto costa?',
          tr:'Bu ne kadar?'
        }
      ],
      note:'Kelime + artikel (varsa) birlikte ezberle.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Dove trovo...?',
      tr:'... nerede bulabilirim?',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Quanto costa?',
      tr:'Bu ne kadar?',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'troppo caro',
      tr:'çok pahalı',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'economico',
      tr:'ucuz',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'lo sconto',
      tr:'indirim',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Shopping',
      title_en:'Shopping',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Dove trovo...?',
          tr:'... nerede bulabilirim?',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'Dove trovo...?',
              tr:'... nerede bulabilirim?',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Quanto costa?',
          tr:'Bu ne kadar?',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'Quanto costa?',
              tr:'Bu ne kadar?',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'troppo caro',
          tr:'çok pahalı',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'economico',
          tr:'ucuz',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Quanto costa questa giacca?',
      tr:'Quanto costa questa giacca?.',
      questions:[
        {
          q:'?',
          opts:[
            'Dove trovo...?',
            'Quanto costa?',
            'troppo caro',
            'economico'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'??',
          opts:[
            'Quanto costa?',
            'troppo caro',
            'economico',
            'lo sconto'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[6] = L6;
