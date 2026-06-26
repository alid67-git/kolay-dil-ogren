// ders12.js — Italian Lesson 12: Phone & Communication (beginner)
const L12 = {
  words:[
    {
      id:'w1',
      en:'chiamare',
      ro:'chiama',
      tr:'aramak',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'il messaggio',
      ro:'il mes',
      tr:'mesaj'
    },
    {
      id:'w3',
      en:'l\'email',
      ro:'l\'emai',
      tr:'e-posta'
    },
    {
      id:'w4',
      en:'il numero di telefono',
      ro:'il num',
      tr:'telefon numarası'
    },
    {
      id:'w5',
      en:'Pronto, sono...',
      ro:'Pronto',
      tr:'Merhaba, ... ben'
    },
    {
      id:'w6',
      en:'Può richiamarmi?',
      ro:'Può ri',
      tr:'Geri arayabilir misiniz?'
    },
    {
      id:'w7',
      en:'Non posso parlare ora.',
      ro:'Non po',
      tr:'Şu an konuşamıyorum.'
    },
    {
      id:'w8',
      en:'la segreteria',
      ro:'la seg',
      tr:'sesli mesaj'
    },
    {
      id:'w9',
      en:'scrivere',
      ro:'scrive',
      tr:'yazmak'
    },
    {
      id:'w10',
      en:'il segreteria telefonica',
      ro:'il seg',
      tr:'telesekreter'
    },
    {
      id:'w11',
      en:'occupato',
      ro:'occupa',
      tr:'meşgul'
    },
    {
      id:'w12',
      en:'mettere in comunicazione',
      ro:'metter',
      tr:'bağlamak'
    },
    {
      id:'w13',
      en:'inviare',
      ro:'inviar',
      tr:'göndermek'
    },
    {
      id:'w14',
      en:'ricevere',
      ro:'riceve',
      tr:'almak'
    },
    {
      id:'w15',
      en:'la chiamata',
      ro:'la chi',
      tr:'arama'
    },
    {
      id:'w16',
      en:'riagganciare',
      ro:'riagga',
      tr:'kapatmak'
    },
    {
      id:'w17',
      en:'È...?',
      ro:'È...?',
      tr:'... var mı?'
    },
    {
      id:'w18',
      en:'Un momento',
      ro:'Un mom',
      tr:'Bir dakika'
    },
    {
      id:'w19',
      en:'Può ripetere?',
      ro:'Può ri',
      tr:'Tekrar edebilir misiniz?'
    },
    {
      id:'w20',
      en:'Arrivederci',
      ro:'Arrive',
      tr:'Hoşça kalın'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Phone & Communication — Temel',
      title_en:'Phone & Communication — Basics',
      explanation:'Bu derste Phone & Communication konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'chiamare',
          example:'chiamare',
          tr:'aramak'
        },
        {
          pronoun:'Pratik',
          form:'il messaggio',
          example:'il messaggio',
          tr:'mesaj'
        }
      ],
      note:'Kelime + artikel (varsa) birlikte ezberle.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'chiamare',
      tr:'aramak',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'il messaggio',
      tr:'mesaj',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'l\'email',
      tr:'e-posta',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'il numero di telefono',
      tr:'telefon numarası',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Pronto, sono...',
      tr:'Merhaba, ... ben',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Phone & Communication',
      title_en:'Phone & Communication',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'chiamare',
          tr:'aramak',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'chiamare',
              tr:'aramak',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'il messaggio',
          tr:'mesaj',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'il messaggio',
              tr:'mesaj',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'l\'email',
          tr:'e-posta',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'il numero di telefono',
          tr:'telefon numarası',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'chiamare.',
      tr:'chiamare.',
      questions:[
        {
          q:'?',
          opts:[
            'chiamare',
            'il messaggio',
            'l\'email',
            'il numero di telefono'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'??',
          opts:[
            'il messaggio',
            'l\'email',
            'il numero di telefono',
            'Pronto, sono...'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[12] = L12;
