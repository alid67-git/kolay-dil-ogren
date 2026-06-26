// ders5.js � Spanish Lesson 5: Restaurant & Food (beginner)
const L5 = {
  words:[
    {
      id:'w1',
      en:'Una mesa para dos, por favor.',
      ro:'U-na ME-sa pa-ra dos, por fa-VOR',
      tr:'İki ki�xilik masa, lütfen.',
      tip:'Masa isteme.',
      examples:[
        {
          en:'Buenas noches. Una mesa para dos, por favor.',
          tr:'İyi ak�xamlar. İki ki�xilik masa, lütfen.',
          bd:[
            {
              ro:'Una mesa',
              tr:'bir masa',
              role:'O',
              note:'Mesa di�xil �  una.'
            }
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'la carta',
      ro:'la KAR-ta',
      tr:'menü'
    },
    {
      id:'w3',
      en:'pedir',
      ro:'pe-DIR',
      tr:'sipari�x vermek'
    },
    {
      id:'w4',
      en:'Quisiera...',
      ro:'ki-SYE-ra',
      tr:'... alabilir miyim / ... istiyorum',
      tip:'Nazik sipari�x.',
      examples:[
        {
          en:'Quisiera un café.',
          tr:'Bir kahve istiyorum.',
          bd:[
            {
              ro:'Quisiera',
              tr:'İstiyorum',
              role:'modal',
              note:'Restoranda nazik sipari�x kalıbı.'
            }
          ]
        }
      ]
    },
    {
      id:'w5',
      en:'el entrante',
      ro:'el en-TRAN-te',
      tr:'ba�xlangıç yeme�xi'
    },
    {
      id:'w6',
      en:'el plato principal',
      ro:'el PLA-to prin-si-PAL',
      tr:'ana yemek'
    },
    {
      id:'w7',
      en:'el postre',
      ro:'el POS-tre',
      tr:'tatlı'
    },
    {
      id:'w8',
      en:'la bebida',
      ro:'la be-BI-da',
      tr:'içecek'
    },
    {
      id:'w9',
      en:'el agua',
      ro:'el A-gwa',
      tr:'su'
    },
    {
      id:'w10',
      en:'el café',
      ro:'el ka-FE',
      tr:'kahve'
    },
    {
      id:'w11',
      en:'el té',
      ro:'el tay',
      tr:'çay'
    },
    {
      id:'w12',
      en:'el zumo',
      ro:'el SU-mo',
      tr:'meyve suyu'
    },
    {
      id:'w13',
      en:'el pan',
      ro:'el pan',
      tr:'ekmek'
    },
    {
      id:'w14',
      en:'la sopa',
      ro:'la SO-pa',
      tr:'çorba'
    },
    {
      id:'w15',
      en:'la ensalada',
      ro:'la en-sa-LA-da',
      tr:'salata'
    },
    {
      id:'w16',
      en:'el pollo',
      ro:'el PO-yo',
      tr:'tavuk'
    },
    {
      id:'w17',
      en:'la carne de vaca',
      ro:'la KAR-ne de BA-ka',
      tr:'sı�xır eti'
    },
    {
      id:'w18',
      en:'el pescado',
      ro:'el pes-KA-do',
      tr:'balık'
    },
    {
      id:'w19',
      en:'vegetariano',
      ro:'ve-he-ta-RYA-no',
      tr:'vejetaryen'
    },
    {
      id:'w20',
      en:'delicioso',
      ro:'de-li-THYO-so',
      tr:'lezzetli'
    },
    {
      id:'w21',
      en:'la cuenta',
      ro:'la KWEN-ta',
      tr:'hesap'
    },
    {
      id:'w22',
      en:'la propina',
      ro:'la pro-PI-na',
      tr:'bah�xi�x'
    },
    {
      id:'w23',
      en:'la reserva',
      ro:'la re-SER-va',
      tr:'rezervasyon'
    },
    {
      id:'w24',
      en:'alérgico',
      ro:'a-LER-hi-ko',
      tr:'alerjik'
    },
    {
      id:'w25',
      en:'¡Buen provecho!',
      ro:'bwen pro-VE-cho',
      tr:'Afiyet olsun'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Restoranda Sipari�x Verme',
      title_en:'Ordering at a Restaurant',
      explanation:'İspanya\'da garsona el kaldırılır veya göz teması kurulur. Quisiera... = nazik sipari�x. ¿Algo más? = Ba�xka bir �xey? La cuenta, por favor = Hesap lütfen.',
      table:[
        {
          pronoun:'Nazik istek',
          form:'Quisiera...',
          example:'Quisiera la sopa.',
          tr:'�!orba istiyorum.'
        },
        {
          pronoun:'Soru',
          form:'¿Qué recomienda?',
          example:'¿Qué recomienda usted?',
          tr:'Ne tavsiye edersiniz?'
        },
        {
          pronoun:'Hesap',
          form:'La cuenta, por favor',
          example:'La cuenta, por favor.',
          tr:'Hesap, lütfen.'
        },
        {
          pronoun:'�zel istek',
          form:'Sin... / Con...',
          example:'Sin cebolla, por favor.',
          tr:'So�xansız, lütfen.'
        }
      ],
      note:'Propina (bah�xi�x) zorunlu de�xil ama %5-10 bırakılır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Una mesa para tres, por favor.',
      tr:'�Sç ki�xilik masa, lütfen.',
      prompt:'Masa iste'
    },
    {
      id:'sp2',
      en:'Quisiera la sopa, por favor.',
      tr:'�!orba istiyorum, lütfen.',
      prompt:'Yemek sipari�x et'
    },
    {
      id:'sp3',
      en:'La cuenta, por favor.',
      tr:'Hesap, lütfen.',
      prompt:'Hesap iste'
    },
    {
      id:'sp4',
      en:'¡Está muy rico!',
      tr:'Bu çok lezzetli!',
      prompt:'Yeme�xi öv'
    },
    {
      id:'sp5',
      en:'Soy alérgico a los frutos secos.',
      tr:'Kuruyemi�xe alerjim var.',
      prompt:'Alerji belirt'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'En el restaurante',
      title_en:'At the Restaurant',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'¡Buenas noches! ¿Tiene reserva?',
          tr:'İyi ak�xamlar! Rezervasyonunuz var mı?',
          gramNote:'Resmi kar�xılama.',
          bd:[
            {
              ro:'¿Tiene reserva?',
              tr:'Rezervasyon var mı',
              role:'question',
              note:'Resmi soru.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Sí, a nombre de Ali. Para dos personas.',
          tr:'Evet, Ali adına. İki ki�xilik.',
          gramNote:[
            {
              ro:'a nombre de',
              tr:'adına',
              role:'K',
              note:'a nombre de + isim.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Por aquí, su mesa. La carta.',
          tr:'Buyurun, masanız burada. Menü.',
          gramNote:[
            {
              ro:'carta',
              tr:'menü',
              role:'O',
              note:'Di�xil �  la.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Gracias. Quisiera el pollo y una ensalada.',
          tr:'Te�xekkürler. Tavuk ve salata istiyorum.',
          gramNote:[
            {
              ro:'Quisiera',
              tr:'İstiyorum',
              role:'modal',
              note:'Nazik sipari�x.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'¿Desea algo de beber?',
          tr:'Bir �xey içmek ister misiniz?',
          gramNote:'Desear = istemek (nazik).',
          bd:[
            {
              ro:'¿Desea',
              tr:'İster misiniz',
              role:'modal',
              note:'Resmi nazik istek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Sí, un agua y un café, por favor.',
          tr:'Evet, bir su ve bir kahve, lütfen.',
          gramNote:[
            {
              ro:'un agua',
              tr:'bir su',
              role:'O',
              note:'Agua di�xil ama un el ile.'
            },
            {
              ro:'un café',
              tr:'bir kahve',
              role:'O',
              note:'Eril �  un.'
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
      transcript:'Hoy hay salmón con verduras por catorce euros y pasta vegetariana por diez euros. De postre hay tarta de chocolate por cinco euros.',
      tr:'Bugün somon sebze ile on dört euro, vejetaryen makarna on euro. Tatlı olarak çikolatalı kek be�x euro.',
      questions:[
        {
          q:'¿Cuánto cuesta el salmón?',
          opts:[
            '10 ��',
            '12 ��',
            '14 ��',
            '16 ��'
          ],
          answer:2,
          tr:'Somon ne kadar?'
        },
        {
          q:'¿Qué opción vegetariana hay?',
          opts:[
            'sopa',
            'ensalada',
            'pasta',
            'pizza'
          ],
          answer:2,
          tr:'Hangi vejetaryen seçenek var?'
        },
        {
          q:'¿Cuál es el postre?',
          opts:[
            'helado',
            'tarta de queso',
            'tarta de manzana',
            'tarta de chocolate'
          ],
          answer:3,
          tr:'Tatlı ne?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[5] = L5;
