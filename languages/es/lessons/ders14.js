// ders14.js � Spanish Lesson 14: Home & Living (beginner)
const L14 = {
  words:[
    {
      id:'w1',
      en:'el piso',
      ro:'el PI-so',
      tr:'daire / konut'
    },
    {
      id:'w2',
      en:'la casa',
      ro:'la KA-sa',
      tr:'ev'
    },
    {
      id:'w3',
      en:'la habitación',
      ro:'la a-bi-ta-THYON',
      tr:'oda'
    },
    {
      id:'w4',
      en:'la cocina',
      ro:'la ko-THI-na',
      tr:'mutfak'
    },
    {
      id:'w5',
      en:'el baño',
      ro:'el BAN-yo',
      tr:'banyo'
    },
    {
      id:'w6',
      en:'el balcón',
      ro:'el bal-KON',
      tr:'balkon'
    },
    {
      id:'w7',
      en:'el alquiler',
      ro:'el al-KI-ler',
      tr:'kira'
    },
    {
      id:'w8',
      en:'el casero / la casera',
      ro:'el ka-SER-o / la ka-SER-a',
      tr:'ev sahibi'
    },
    {
      id:'w9',
      en:'mudarse',
      ro:'mu-DAR-se',
      tr:'ta�xınmak'
    },
    {
      id:'w10',
      en:'los vecinos',
      ro:'los be-THI-nos',
      tr:'kom�xular'
    },
    {
      id:'w11',
      en:'la electricidad',
      ro:'la e-lek-thi-thi-DAD',
      tr:'elektrik'
    },
    {
      id:'w12',
      en:'la calefacción',
      ro:'la ka-le-fa-THYON',
      tr:'ısıtma'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Ev ve Konut',
      title_en:'Home and Housing',
      explanation:'Vivo en... = ...de ya�xıyorum. El alquiler es de... = Kira ... tutar. Gastos incluidos = ek masraflar dahil.',
      table:[
        {
          pronoun:'Adres',
          form:'Vivo en... / Mi dirección es...',
          example:'Vivo en Madrid.',
          tr:'Madrid\'de ya�xıyorum.'
        },
        {
          pronoun:'Kira',
          form:'El alquiler es de...',
          example:'El alquiler es de ochocientos euros.',
          tr:'Kira sekiz yüz euro.'
        },
        {
          pronoun:'Ta�xınma',
          form:'Me mudo',
          example:'El mes que viene me mudo.',
          tr:'Gelecek ay ta�xınıyorum.'
        },
        {
          pronoun:'Kom�xu',
          form:'los vecinos',
          example:'Mis vecinos son majos.',
          tr:'Kom�xularım nazik.'
        }
      ],
      note:'İspanya\'da ço�xu ki�xi kiralık oturur � piso de alquiler.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Vivo en un piso.',
      tr:'Bir dairede ya�xıyorum.',
      prompt:'Konut tipini söyle'
    },
    {
      id:'sp2',
      en:'El piso tiene tres habitaciones.',
      tr:'Dairenin üç odası var.',
      prompt:'Oda sayısı söyle'
    },
    {
      id:'sp3',
      en:'El alquiler es de seiscientos euros.',
      tr:'Kira altı yüz euro.',
      prompt:'Kira söyle'
    },
    {
      id:'sp4',
      en:'Me mudo el mes que viene.',
      tr:'Gelecek ay ta�xınıyorum.',
      prompt:'Ta�xınma haberi ver'
    },
    {
      id:'sp5',
      en:'Los vecinos son muy majos.',
      tr:'Kom�xular çok nazik.',
      prompt:'Kom�xulardan bahset'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Buscar piso',
      title_en:'Apartment Hunting',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Buenas tardes. Busco un piso.',
          tr:'İyi günler. Daire arıyorum.',
          gramNote:'Ev arama.',
          bd:[
            {
              ro:'Busco',
              tr:'Arıyorum',
              role:'V',
              note:'buscar + isim.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'¿Cuántas habitaciones necesita?',
          tr:'Kaç oda lazım?',
          gramNote:'Ev sahibi/emlak sorusu.',
          bd:[
            {
              ro:'¿Cuántas habitaciones',
              tr:'Kaç oda',
              role:'question',
              note:'Cuántas = kaç tane.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Dos habitaciones. ¿Cuánto es el alquiler?',
          tr:'İki oda. Kira ne kadar?',
          gramNote:'Fiyat sorusu.',
          bd:[
            {
              ro:'el alquiler',
              tr:'kira',
              role:'O',
              note:'Eril �  el.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Setecientos euros con gastos incluidos.',
          tr:'Yedi yüz euro masraflar dahil.',
          gramNote:[
            {
              ro:'gastos incluidos',
              tr:'masraflar dahil',
              role:'adj',
              note:'Ek masraflar dahil.'
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
      transcript:'Ali vive en un piso de dos habitaciones en Barcelona. El alquiler es de novecientos euros. La cocina es moderna y el balcón es grande.',
      tr:'Ali Barcelona\'da iki odalı bir dairede oturuyor. Kira dokuz yüz euro. Mutfak modern ve balkon büyük.',
      questions:[
        {
          q:'¿Dónde vive Ali?',
          opts:[
            'Madrid',
            'Valencia',
            'Barcelona',
            'Sevilla'
          ],
          answer:2,
          tr:'Ali nerede oturuyor?'
        },
        {
          q:'¿Cuántas habitaciones?',
          opts:[
            '1',
            '2',
            '3',
            '4'
          ],
          answer:1,
          tr:'Kaç oda?'
        },
        {
          q:'¿Cuánto es el alquiler?',
          opts:[
            '700 ��',
            '800 ��',
            '900 ��',
            '1000 ��'
          ],
          answer:2,
          tr:'Kira ne kadar?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[14] = L14;
