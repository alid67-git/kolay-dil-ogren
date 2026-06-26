// ders9.js � Spanish Lesson 9: Hotel & Accommodation (beginner)
const L9 = {
  words:[
    {
      id:'w1',
      en:'el hotel',
      ro:'el o-TEL',
      tr:'otel'
    },
    {
      id:'w2',
      en:'la recepción',
      ro:'la re-sep-THYON',
      tr:'resepsiyon'
    },
    {
      id:'w3',
      en:'la habitación',
      ro:'la a-bi-ta-THYON',
      tr:'oda'
    },
    {
      id:'w4',
      en:'hacer el check-in',
      ro:'a-SER el chek-in',
      tr:'giri�x yapmak (otel)'
    },
    {
      id:'w5',
      en:'hacer el check-out',
      ro:'a-SER el chek-aut',
      tr:'çıkı�x yapmak'
    },
    {
      id:'w6',
      en:'la llave',
      ro:'la YA-ve',
      tr:'anahtar'
    },
    {
      id:'w7',
      en:'la habitación individual',
      ro:'la a-bi-ta-THYON in-di-bi-DWAL',
      tr:'tek ki�xilik oda'
    },
    {
      id:'w8',
      en:'la habitación doble',
      ro:'la a-bi-ta-THYON DO-ble',
      tr:'çift ki�xilik oda'
    },
    {
      id:'w9',
      en:'el desayuno',
      ro:'el de-sa-YU-no',
      tr:'kahvaltı'
    },
    {
      id:'w10',
      en:'el wifi',
      ro:'el wi-fi',
      tr:'kablosuz internet'
    },
    {
      id:'w11',
      en:'el aire acondicionado',
      ro:'el AY-re a-kon-di-thyo-NA-do',
      tr:'klima'
    },
    {
      id:'w12',
      en:'la reserva',
      ro:'la re-SER-va',
      tr:'rezervasyon'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Otelde Check-in',
      title_en:'Hotel Check-in',
      explanation:'Tengo una reserva = Rezervasyonum var. A nombre de... = ... adına. ¿El desayuno está incluido? = Kahvaltı dahil mi? Check-out antes de las once.',
      table:[
        {
          pronoun:'Rezervasyon',
          form:'Tengo una reserva',
          example:'Tengo una reserva a nombre de Ali.',
          tr:'Ali adına rezervasyonum var.'
        },
        {
          pronoun:'Oda',
          form:'Una habitación doble',
          example:'Una habitación doble, por favor.',
          tr:'�!ift ki�xilik oda, lütfen.'
        },
        {
          pronoun:'Kahvaltı',
          form:'¿Está incluido el desayuno?',
          example:'¿El desayuno está incluido?',
          tr:'Kahvaltı dahil mi?'
        },
        {
          pronoun:'�!ıkı�x',
          form:'¿Hasta qué hora puedo hacer el check-out?',
          example:'¿Hasta qué hora es el check-out?',
          tr:'En geç ne zaman çıkı�x yapmalıyım?'
        }
      ],
      note:'İspanya\'da otellerde genelde temizlik ve düzen önemlidir.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Tengo una reserva.',
      tr:'Rezervasyonum var.',
      prompt:'Check-in yap'
    },
    {
      id:'sp2',
      en:'Una habitación individual, por favor.',
      tr:'Tek ki�xilik oda, lütfen.',
      prompt:'Oda iste'
    },
    {
      id:'sp3',
      en:'¿Dónde está el desayuno?',
      tr:'Kahvaltı nerede?',
      prompt:'Kahvaltı sor'
    },
    {
      id:'sp4',
      en:'¿Puedo hacer el check-out?',
      tr:'�!ıkı�x yapabilir miyim?',
      prompt:'Check-out yap'
    },
    {
      id:'sp5',
      en:'La habitación es muy bonita.',
      tr:'Oda çok güzel.',
      prompt:'Odayı öv'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Check-in en el hotel',
      title_en:'Hotel Check-in',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'¡Buenas noches! Bienvenido al hotel.',
          tr:'İyi ak�xamlar! Otele ho�x geldiniz.',
          gramNote:'Resepsiyon kar�xılama.',
          bd:[
            {
              ro:'Bienvenido',
              tr:'Ho�x geldiniz',
              role:'greeting',
              note:'Otel kar�xılama.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Buenas noches. Tengo una reserva a nombre de Ali.',
          tr:'İyi ak�xamlar. Ali adına rezervasyonum var.',
          gramNote:[
            {
              ro:'a nombre de',
              tr:'adına rezervasyon',
              role:'O',
              note:'a nombre de + isim.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Sí, una habitación individual por dos noches. El desayuno está incluido.',
          tr:'Evet, iki gece tek ki�xilik oda. Kahvaltı dahil.',
          gramNote:[
            {
              ro:'incluido',
              tr:'dahil',
              role:'adj',
              note:'Fiyata dahil.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Perfecto. ¿Hay wifi?',
          tr:'Mükemmel. WiFi var mı?',
          gramNote:'¿Hay...? = var mı.',
          bd:[
            {
              ro:'¿Hay',
              tr:'Var mı',
              role:'question',
              note:'Hay = var (genel).'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Sí, la contraseña está en el papel. Aquí tiene su llave. Habitación 305.',
          tr:'Evet, �xifre ka�xıtta. Anahtarınız burada. Oda 305.',
          gramNote:[
            {
              ro:'llave',
              tr:'anahtar',
              role:'O',
              note:'Di�xil �  la.'
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
      transcript:'Ali ha reservado una habitación individual por tres noches. El desayuno es de siete a diez. El check-out es antes de las once.',
      tr:'Ali üç gece tek ki�xilik oda ayırttı. Kahvaltı yedi ile on arası. �!ıkı�x on bire kadar.',
      questions:[
        {
          q:'¿Cuántas noches?',
          opts:[
            '1',
            '2',
            '3',
            '4'
          ],
          answer:2,
          tr:'Kaç gece?'
        },
        {
          q:'¿Cuándo es el desayuno?',
          opts:[
            '6�9',
            '7�10',
            '8�11',
            '9�12'
          ],
          answer:1,
          tr:'Kahvaltı ne zaman?'
        },
        {
          q:'¿Hasta qué hora el check-out?',
          opts:[
            '10:00',
            '11:00',
            '12:00',
            '13:00'
          ],
          answer:1,
          tr:'En geç ne zaman çıkı�x?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[9] = L9;
