// ders8.js � Spanish Lesson 8: Transport & Travel (beginner)
const L8 = {
  words:[
    {
      id:'w1',
      en:'el tren',
      ro:'el tren',
      tr:'tren'
    },
    {
      id:'w2',
      en:'el autobús',
      ro:'el au-to-BUS',
      tr:'otobüs'
    },
    {
      id:'w3',
      en:'el metro',
      ro:'el ME-tro',
      tr:'metro'
    },
    {
      id:'w4',
      en:'el avión',
      ro:'el a-BYON',
      tr:'uçak'
    },
    {
      id:'w5',
      en:'el aeropuerto',
      ro:'el a-e-ro-PWER-to',
      tr:'havaalanı'
    },
    {
      id:'w6',
      en:'el billete',
      ro:'el bi-YE-te',
      tr:'bilet'
    },
    {
      id:'w7',
      en:'subir',
      ro:'su-BIR',
      tr:'binmek (araç)'
    },
    {
      id:'w8',
      en:'bajar',
      ro:'ba-HAR',
      tr:'inmek (araç)'
    },
    {
      id:'w9',
      en:'hacer transbordo',
      ro:'a-SER trans-BOR-do',
      tr:'aktarma yapmak'
    },
    {
      id:'w10',
      en:'el andén',
      ro:'el an-DEN',
      tr:'peron'
    },
    {
      id:'w11',
      en:'salir',
      ro:'sa-LIR',
      tr:'kalkmak (araç)'
    },
    {
      id:'w12',
      en:'llegar',
      ro:'ye-GAR',
      tr:'varmak'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Toplu Ta�xıma',
      title_en:'Public Transport',
      explanation:'İspanya\'da metro, autobús, tranvía. Billete = bilet. Subir/Bajar = binmek/inmek. ¡Valide el billete! = Bileti damgalayın!',
      table:[
        {
          pronoun:'Bilet',
          form:'el billete',
          example:'Un billete, por favor.',
          tr:'Bir bilet, lütfen.'
        },
        {
          pronoun:'Peron',
          form:'andén ...',
          example:'El tren sale del andén 3.',
          tr:'Tren 3. perondan kalkıyor.'
        },
        {
          pronoun:'Aktarma',
          form:'hacer transbordo',
          example:'Hay que hacer transbordo en Madrid.',
          tr:'Madrid\'de aktarma yap.'
        },
        {
          pronoun:'Gecikme',
          form:'retraso',
          example:'El tren tiene retraso.',
          tr:'Tren gecikmeli.'
        }
      ],
      note:'Renfe = tren �xirketi. Metro de Madrid/Barcelona = �xehir içi ula�xım.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Un billete a Barcelona, por favor.',
      tr:'Barcelona\'ya bir bilet, lütfen.',
      prompt:'Bilet al'
    },
    {
      id:'sp2',
      en:'¿Dónde tengo que hacer transbordo?',
      tr:'Nerede aktarma yapmalıyım?',
      prompt:'Aktarma sor'
    },
    {
      id:'sp3',
      en:'El tren sale del andén 5.',
      tr:'Tren 5. perondan kalkıyor.',
      prompt:'Peron söyle'
    },
    {
      id:'sp4',
      en:'¿Cuándo pasa el próximo autobús?',
      tr:'Sonraki otobüs ne zaman geliyor?',
      prompt:'Otobüs saati sor'
    },
    {
      id:'sp5',
      en:'Bajo aquí.',
      tr:'Burada iniyorum.',
      prompt:'İnece�xini söyle'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'En la estación',
      title_en:'At the Train Station',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Un billete a Valencia, por favor.',
          tr:'Valencia\'ya bir bilet, lütfen.',
          gramNote:'Bilet alma.',
          bd:[
            {
              ro:'a Valencia',
              tr:'Valencia\'ya',
              role:'K',
              note:'a + �xehir = ...e/-a.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'¿Ida o ida y vuelta?',
          tr:'Tek yön mü gidi�x-dönü�x mü?',
          gramNote:'Bilet türü sorusu.',
          bd:[
            {
              ro:'ida y vuelta',
              tr:'gidi�x-dönü�x',
              role:'K',
              note:'Standart bilet sorusu.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Ida y vuelta, por favor.',
          tr:'Gidi�x-dönü�x, lütfen.',
          gramNote:'Cevap.',
          bd:[
            {
              ro:'Ida y vuelta',
              tr:'Gidi�x-dönü�x',
              role:'O',
              note:'Bilet türü.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Son ochenta euros. Andén 7, salida a las diez.',
          tr:'Seksen euro. 7. peron, kalkı�x saat on.',
          gramNote:[
            {
              ro:'Andén 7',
              tr:'7. peron',
              role:'O',
              note:'Andén = peron.'
            },
            {
              ro:'salida',
              tr:'kalkı�x',
              role:'O',
              note:'salir = kalkmak.'
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
      transcript:'El AVE a Madrid sale a las catorce treinta del andén 8. El viaje dura cuatro horas.',
      tr:'Madrid AVE\'si saat 14:30\'da 8. perondan kalkıyor. Yolculuk dört saat sürüyor.',
      questions:[
        {
          q:'¿A dónde va el tren?',
          opts:[
            'Valencia',
            'Sevilla',
            'Madrid',
            'Bilbao'
          ],
          answer:2,
          tr:'Tren nereye gidiyor?'
        },
        {
          q:'¿De qué andén?',
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
          q:'¿Cuánto dura el viaje?',
          opts:[
            '2 h',
            '3 h',
            '4 h',
            '5 h'
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
