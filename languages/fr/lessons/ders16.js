// ders16.js - French Lesson 16: Countries & Nationalities (beginner)
const L16 = {
  words:[
    {
      id:'w1',
      en:'la France',
      ro:'la frans',
      tr:'Fransa'
    },
    {
      id:'w2',
      en:'la Turquie',
      ro:'la tur-ki',
      tr:'Türkiye'
    },
    {
      id:'w3',
      en:'l\'Allemagne',
      ro:'la-le-many',
      tr:'Almanya'
    },
    {
      id:'w4',
      en:'la Suisse',
      ro:'la süis',
      tr:'İsviçre'
    },
    {
      id:'w5',
      en:'français',
      ro:'fran-se',
      tr:'Fransız'
    },
    {
      id:'w6',
      en:'turc',
      ro:'türk',
      tr:'Türk'
    },
    {
      id:'w7',
      en:'Vous venez d\'où ?',
      ro:'vu və-ne du',
      tr:'Nerelisiniz?'
    },
    {
      id:'w8',
      en:'Je viens de...',
      ro:'jə vyan də',
      tr:'...den geliyorum'
    },
    {
      id:'w9',
      en:'l\'Europe',
      ro:'lö-rop',
      tr:'Avrupa'
    },
    {
      id:'w10',
      en:'la langue',
      ro:'la long',
      tr:'dil'
    },
    {
      id:'w11',
      en:'anglais',
      ro:'on-gle',
      tr:'İngilizce'
    },
    {
      id:'w12',
      en:'la capitale',
      ro:'la ka-pi-tal',
      tr:'başkent'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Ülkeler ve Milliyet',
      title_en:'Countries & nationalities',
      explanation:'Köken sormak için Vous venez d\'où?, cevap vermek için Je viens de... kullanılır.',
      table:[
        {
          pronoun:'Soru',
          form:'Vous venez d\'où ?',
          example:'Vous venez d\'où ?',
          tr:'Nerelisiniz?'
        },
        {
          pronoun:'Cevap',
          form:'Je viens de...',
          example:'Je viens de Turquie.',
          tr:'Türkiye\'den geliyorum.'
        },
        {
          pronoun:'Dil',
          form:'Je parle...',
          example:'Je parle turc et français.',
          tr:'Türkçe ve Fransızca konuşuyorum.'
        },
        {
          pronoun:'Başkent',
          form:'La capitale de ...',
          example:'La capitale de la France est Paris.',
          tr:'Fransa\'nın başkenti Paris\'tir.'
        }
      ],
      note:'Ülke isimlerinden önce article kullanımı önemlidir.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Vous venez d\'où ?',
      tr:'Nerelisiniz?',
      prompt:'Köken sor'
    },
    {
      id:'sp2',
      en:'Je viens de Turquie.',
      tr:'Türkiye\'den geliyorum.',
      prompt:'Köken söyle'
    },
    {
      id:'sp3',
      en:'Je suis turc.',
      tr:'Türküm.',
      prompt:'Milliyet söyle'
    },
    {
      id:'sp4',
      en:'Je parle turc et français.',
      tr:'Türkçe ve Fransızca konuşuyorum.',
      prompt:'Dil söyle'
    },
    {
      id:'sp5',
      en:'La capitale est Ankara.',
      tr:'Başkent Ankara.',
      prompt:'Başkent belirt'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Origine',
      title_en:'Origin',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Vous venez d\'où ?',
          tr:'Nerelisiniz?',
          gramNote:'Resmi soru.',
          bd:[
            {
              ro:'d\'où',
              tr:'nereden',
              role:'question',
              note:'Köken sorar.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Je viens de Turquie.',
          tr:'Türkiye\'den geliyorum.',
          gramNote:'Cevap kalıbı.',
          bd:[
            {
              ro:'Je viens de',
              tr:'...den geliyorum',
              role:'V',
              note:'Temel yapı.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Vous parlez français ?',
          tr:'Fransızca konuşuyor musunuz?',
          gramNote:'Dil sorusu.',
          bd:[
            {
              ro:'parlez',
              tr:'konuşuyorsunuz',
              role:'V',
              note:'parler fiili.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Un peu, j\'apprends encore.',
          tr:'Biraz, hâlâ öğreniyorum.',
          gramNote:'Mütevazı cevap.',
          bd:[
            {
              ro:'Un peu',
              tr:'biraz',
              role:'K',
              note:'Miktar ifadesi.'
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
      transcript:'Ali vient de Turquie et habite à Paris. Il parle turc, français et un peu anglais.',
      tr:'Ali Türkiye\'den geliyor ve Paris\'te yaşıyor. Türkçe, Fransızca ve biraz İngilizce konuşuyor.',
      questions:[
        {
          q:'Origine ?',
          opts:[
            'France',
            'Suisse',
            'Turquie',
            'Belgique'
          ],
          answer:2,
          tr:'Nereli?'
        },
        {
          q:'Ville actuelle ?',
          opts:[
            'Lyon',
            'Marseille',
            'Paris',
            'Nice'
          ],
          answer:2,
          tr:'Şu an hangi şehirde?'
        },
        {
          q:'Langues ?',
          opts:[
            '1',
            '2',
            '3',
            '4'
          ],
          answer:2,
          tr:'Kaç dil?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[16] = L16;
