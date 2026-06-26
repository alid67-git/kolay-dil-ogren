// ders16.js � Spanish Lesson 16: Countries & Nationalities (beginner)
const L16 = {
  words:[
    {
      id:'w1',
      en:'Alemania',
      ro:'a-le-MAN-ya',
      tr:'Almanya'
    },
    {
      id:'w2',
      en:'Turquía',
      ro:'tur-KEE-a',
      tr:'Türkiye'
    },
    {
      id:'w3',
      en:'Austria',
      ro:'AUS-tria',
      tr:'Avusturya'
    },
    {
      id:'w4',
      en:'Suiza',
      ro:'SWI-sa',
      tr:'İsviçre'
    },
    {
      id:'w5',
      en:'alemán',
      ro:'a-le-MAN',
      tr:'Alman'
    },
    {
      id:'w6',
      en:'turco',
      ro:'TUR-ko',
      tr:'Türk'
    },
    {
      id:'w7',
      en:'¿De dónde es usted?',
      ro:'de DON-de es us-TED',
      tr:'Nerelisiniz?'
    },
    {
      id:'w8',
      en:'Soy de...',
      ro:'soy de',
      tr:'...den geliyorum'
    },
    {
      id:'w9',
      en:'Europa',
      ro:'e-u-RO-pa',
      tr:'Avrupa'
    },
    {
      id:'w10',
      en:'el idioma',
      ro:'el i-DYO-ma',
      tr:'dil'
    },
    {
      id:'w11',
      en:'inglés',
      ro:'in-GLES',
      tr:'İngilizce'
    },
    {
      id:'w12',
      en:'la capital',
      ro:'la ka-pi-TAL',
      tr:'ba�xkent'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'�Slkeler ve Milliyetler',
      title_en:'Countries and Nationalities',
      explanation:'¿De dónde es usted? = Nerelisiniz? Soy de Turquía = Türkiye\'den geliyorum. Milliyet sıfatları küçük harfle: alemán, turco. �Slkeler büyük harfle: España.',
      table:[
        {
          pronoun:'Soru',
          form:'¿De dónde es usted?',
          example:'¿De dónde es usted?',
          tr:'Nerelisiniz?'
        },
        {
          pronoun:'Cevap',
          form:'Soy de...',
          example:'Soy de Turquía.',
          tr:'Türkiye\'den geliyorum.'
        },
        {
          pronoun:'Milliyet',
          form:'Soy...',
          example:'Soy turco.',
          tr:'Türküm.'
        },
        {
          pronoun:'Dil',
          form:'Hablo...',
          example:'Hablo turco y español.',
          tr:'Türkçe ve İspanyolca konu�xuyorum.'
        }
      ],
      note:'de + ülke: de Turquía, de España. Soy + milliyet: soy turco/a.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'¿De dónde es usted?',
      tr:'Nerelisiniz?',
      prompt:'Memleket sor'
    },
    {
      id:'sp2',
      en:'Soy de Turquía.',
      tr:'Türkiye\'den geliyorum.',
      prompt:'Memleketini söyle'
    },
    {
      id:'sp3',
      en:'Soy turco.',
      tr:'Türküm.',
      prompt:'Milliyetini söyle'
    },
    {
      id:'sp4',
      en:'Hablo turco y español.',
      tr:'Türkçe ve İspanyolca konu�xuyorum.',
      prompt:'Dillerini söyle'
    },
    {
      id:'sp5',
      en:'La capital de Turquía es Ankara.',
      tr:'Türkiye\'nin ba�xkenti Ankara.',
      prompt:'Ba�xkent söyle'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Origen',
      title_en:'Origin',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'¿De dónde es usted?',
          tr:'Nerelisiniz?',
          gramNote:'Resmi memleket sorusu.',
          bd:[
            {
              ro:'¿De dónde es usted?',
              tr:'Nerelisiniz',
              role:'question',
              note:'De dónde = nereden.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Soy de Turquía, de Estambul.',
          tr:'Türkiye\'den, İstanbul\'dan geliyorum.',
          gramNote:[
            {
              ro:'de Turquía',
              tr:'Türkiye\'den',
              role:'K',
              note:'de + ülke.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'¡Ah, qué bien! ¿Ya habla español?',
          tr:'Ah, güzel! Zaten İspanyolca konu�xuyor musunuz?',
          gramNote:[
            {
              ro:'ya',
              tr:'zaten / hâlihazırda',
              role:'K',
              note:'ya = already/zaten.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Un poco. Todavía estoy aprendiendo.',
          tr:'Biraz. Hâlâ ö�xreniyorum.',
          gramNote:[
            {
              ro:'Un poco',
              tr:'Biraz',
              role:'K',
              note:'Miktar ifadesi.'
            },
            {
              ro:'todavía',
              tr:'hâlâ',
              role:'K',
              note:'Devam eden eylem.'
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
      transcript:'Ali es de Turquía. Ahora vive en Madrid. Habla turco, español y un poco de inglés.',
      tr:'Ali Türkiye\'den geliyor. Şimdi Madrid\'de ya�xıyor. Türkçe, İspanyolca ve biraz İngilizce konu�xuyor.',
      questions:[
        {
          q:'¿De dónde es Ali?',
          opts:[
            'Alemania',
            'Austria',
            'Turquía',
            'Suiza'
          ],
          answer:2,
          tr:'Ali nereli?'
        },
        {
          q:'¿Dónde vive ahora?',
          opts:[
            'Estambul',
            'Ankara',
            'Madrid',
            'Barcelona'
          ],
          answer:2,
          tr:'Şimdi nerede ya�xıyor?'
        },
        {
          q:'¿Cuántos idiomas?',
          opts:[
            '1',
            '2',
            '3',
            '4'
          ],
          answer:2,
          tr:'Kaç dil konu�xuyor?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[16] = L16;
