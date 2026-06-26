// ders3.js � Spanish Lesson 3: Numbers & Money (beginner)
const L3 = {
  words:[
    {
      id:'w1',
      en:'uno',
      ro:'U-no',
      tr:'bir',
      tip:'Temel sayı.',
      ctx:'Sayılar ve miktar.',
      examples:[
        {
          en:'Tengo un libro.',
          tr:'Bir kitabım var.',
          bd:[
            {
              ro:'uno',
              tr:'bir',
              role:'number',
              note:'uno = bir'
            }
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'dos',
      ro:'dos',
      tr:'iki',
      tip:'Sayma.',
      ctx:'Sayılar ve miktar.',
      examples:[
        {
          en:'Dos cafés, por favor.',
          tr:'İki kahve, lütfen.',
          bd:[
            {
              ro:'dos',
              tr:'iki',
              role:'number',
              note:'dos = iki'
            }
          ]
        }
      ]
    },
    {
      id:'w3',
      en:'tres',
      ro:'tres',
      tr:'üç',
      tip:'Sayma.',
      ctx:'Sayılar ve miktar.',
      examples:[
        {
          en:'Hay tres gatos.',
          tr:'Üç kedi var.',
          bd:[
            {
              ro:'tres',
              tr:'üç',
              role:'number',
              note:'tres = üç'
            }
          ]
        }
      ]
    },
    {
      id:'w4',
      en:'cuatro',
      ro:'KWA-tro',
      tr:'dört'
    },
    {
      id:'w5',
      en:'cinco',
      ro:'SIN-ko',
      tr:'be�x'
    },
    {
      id:'w6',
      en:'seis',
      ro:'says',
      tr:'altı'
    },
    {
      id:'w7',
      en:'siete',
      ro:'SYE-te',
      tr:'yedi'
    },
    {
      id:'w8',
      en:'ocho',
      ro:'O-cho',
      tr:'sekiz'
    },
    {
      id:'w9',
      en:'nueve',
      ro:'NWE-ve',
      tr:'dokuz'
    },
    {
      id:'w10',
      en:'diez',
      ro:'dyes',
      tr:'on'
    },
    {
      id:'w11',
      en:'once',
      ro:'ON-se',
      tr:'on bir'
    },
    {
      id:'w12',
      en:'doce',
      ro:'DO-se',
      tr:'on iki'
    },
    {
      id:'w13',
      en:'trece',
      ro:'TRE-se',
      tr:'on üç'
    },
    {
      id:'w14',
      en:'catorce',
      ro:'ka-TOR-se',
      tr:'on dört'
    },
    {
      id:'w15',
      en:'quince',
      ro:'KIN-se',
      tr:'on on be�x'
    },
    {
      id:'w16',
      en:'dieciséis',
      ro:'dye-si-SAYS',
      tr:'on altı'
    },
    {
      id:'w17',
      en:'diecisiete',
      ro:'dye-si-SYE-te',
      tr:'on yedi'
    },
    {
      id:'w18',
      en:'dieciocho',
      ro:'dye-si-O-cho',
      tr:'on sekiz'
    },
    {
      id:'w19',
      en:'diecinueve',
      ro:'dye-si-NWE-ve',
      tr:'on dokuz'
    },
    {
      id:'w20',
      en:'veinte',
      ro:'BAYN-te',
      tr:'yirmi'
    },
    {
      id:'w21',
      en:'treinta',
      ro:'TRAYN-ta',
      tr:'otuz'
    },
    {
      id:'w22',
      en:'cuarenta',
      ro:'kwa-REN-ta',
      tr:'kırk'
    },
    {
      id:'w23',
      en:'cien',
      ro:'syen',
      tr:'yüz'
    },
    {
      id:'w24',
      en:'mil',
      ro:'mil',
      tr:'bin'
    },
    {
      id:'w25',
      en:'¿Cuánto cuesta?',
      ro:'KWAN-to KWES-ta',
      tr:'Bu ne kadar? / Kaça?',
      tip:'Fiyat sormak.',
      ctx:'Alı�xveri�xte.',
      examples:[
        {
          en:'¿Cuánto cuesta esto?',
          tr:'Bu ne kadar?',
          bd:[
            {
              ro:'Cuánto',
              tr:'Ne kadar',
              role:'question',
              note:'Fiyat sorusu.'
            },
            {
              ro:'cuesta',
              tr:'... tutar',
              role:'V',
              note:'costar = mal olmak. 3. tekil.'
            }
          ]
        }
      ]
    },
    {
      id:'w26',
      en:'euro',
      ro:'E-u-ro',
      tr:'euro',
      examples:[
        {
          en:'Cuesta cinco euros.',
          tr:'Bu be�x euro.',
          bd:[
            {
              ro:'euros',
              tr:'euro',
              role:'currency',
              note:'Euro İspanya para birimi. �!o�xul: euros.'
            }
          ]
        }
      ]
    },
    {
      id:'w27',
      en:'céntimo',
      ro:'SEN-ti-mo',
      tr:'sent',
      examples:[
        {
          en:'Cuesta noventa y nueve céntimos.',
          tr:'Bu doksan dokuz sent.',
          bd:[
            {
              ro:'céntimo',
              tr:'sent',
              role:'currency',
              note:'1 Euro = 100 céntimos.'
            }
          ]
        }
      ]
    },
    {
      id:'w28',
      en:'la cuenta',
      ro:'la KWEN-ta',
      tr:'hesap / fatura',
      examples:[
        {
          en:'La cuenta, por favor.',
          tr:'Hesap, lütfen.',
          bd:[
            {
              ro:'cuenta',
              tr:'hesap',
              role:'O',
              note:'Di�xil �  la. Restoranda hesap isterken.'
            }
          ]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'İspanyolca Sayılar 1�20',
      title_en:'Spanish Numbers 1�20',
      explanation:'İspanyolca sayılar 1�15 düzensiz, 16�19: dieci + sayı (dieciséis = 16). 20 = veinte. Dikkat: uno bir sayı olarak kalır; artikel/nitelik olarak un/una kullanılır. 21�29 tek kelime: veintiuno, veintidós...',
      table:[
        {
          pronoun:'1',
          form:'uno',
          example:'Uno.',
          tr:'bir'
        },
        {
          pronoun:'2',
          form:'dos',
          example:'Dos.',
          tr:'iki'
        },
        {
          pronoun:'3',
          form:'tres',
          example:'Tres.',
          tr:'üç'
        },
        {
          pronoun:'4',
          form:'cuatro',
          example:'Cuatro.',
          tr:'dört'
        },
        {
          pronoun:'5',
          form:'cinco',
          example:'Cinco.',
          tr:'be�x'
        },
        {
          pronoun:'6',
          form:'seis',
          example:'Seis.',
          tr:'altı'
        },
        {
          pronoun:'7',
          form:'siete',
          example:'Siete.',
          tr:'yedi'
        },
        {
          pronoun:'8',
          form:'ocho',
          example:'Ocho.',
          tr:'sekiz'
        },
        {
          pronoun:'9',
          form:'nueve',
          example:'Nueve.',
          tr:'dokuz'
        },
        {
          pronoun:'10',
          form:'diez',
          example:'Diez.',
          tr:'on'
        },
        {
          pronoun:'11',
          form:'once',
          example:'Once.',
          tr:'on bir'
        },
        {
          pronoun:'12',
          form:'doce',
          example:'Doce.',
          tr:'on iki'
        },
        {
          pronoun:'13',
          form:'trece',
          example:'Trece.',
          tr:'on üç'
        },
        {
          pronoun:'14',
          form:'catorce',
          example:'Catorce.',
          tr:'on dört'
        },
        {
          pronoun:'15',
          form:'quince',
          example:'Quince.',
          tr:'on on be�x'
        },
        {
          pronoun:'16',
          form:'dieciséis',
          example:'Dieciséis.',
          tr:'on altı'
        },
        {
          pronoun:'17',
          form:'diecisiete',
          example:'Diecisiete.',
          tr:'on yedi'
        },
        {
          pronoun:'18',
          form:'dieciocho',
          example:'Dieciocho.',
          tr:'on sekiz'
        },
        {
          pronoun:'19',
          form:'diecinueve',
          example:'Diecinueve.',
          tr:'on dokuz'
        },
        {
          pronoun:'20',
          form:'veinte',
          example:'Veinte.',
          tr:'yirmi'
        }
      ],
      note:'21+: veintiuno (tek kelime) veya treinta y uno (otuz bir). Y = ve birle�xtirir.'
    },
    {
      id:'g2',
      title:'Bile�xik Sayılar 21�99',
      title_en:'Compound Numbers 21�99',
      explanation:'21�29: veinti- + sayı (veintidós). 31�39: treinta y dos... 41�49: cuarenta y uno... Her onluk + y + birler. 100 = cien (tek ba�xına), ciento (101+).',
      table:[
        {
          pronoun:'yirmi bir',
          form:'veintiuno',
          example:'veintiuno',
          tr:'yirmi bir'
        },
        {
          pronoun:'yirmi iki',
          form:'veintidós',
          example:'veintidós',
          tr:'yirmi iki'
        },
        {
          pronoun:'yirmi üç',
          form:'veintitrés',
          example:'veintitrés',
          tr:'yirmi üç'
        },
        {
          pronoun:'otuz',
          form:'treinta',
          example:'treinta',
          tr:'otuz'
        },
        {
          pronoun:'otuz bir',
          form:'treinta y uno',
          example:'treinta y uno',
          tr:'otuz bir'
        },
        {
          pronoun:'kırk',
          form:'cuarenta',
          example:'cuarenta',
          tr:'kırk'
        },
        {
          pronoun:'elli',
          form:'cincuenta',
          example:'cincuenta',
          tr:'elli'
        },
        {
          pronoun:'altmı�x',
          form:'sesenta',
          example:'sesenta',
          tr:'altmı�x'
        },
        {
          pronoun:'yetmi�x',
          form:'setenta',
          example:'setenta',
          tr:'yetmi�x'
        },
        {
          pronoun:'seksen',
          form:'ochenta',
          example:'ochenta',
          tr:'seksen'
        },
        {
          pronoun:'doksan',
          form:'noventa',
          example:'noventa',
          tr:'doksan'
        }
      ],
      note:'Ejemplo: 32 = treinta y dos. 99 = noventa y nueve. Fiyat: cinco euros con cincuenta céntimos.'
    },
    {
      id:'g3',
      title:'Para � Euro y Céntimo',
      title_en:'Money � Euro and Cent',
      explanation:'İspanya Euro (��) kullanır. Fiyat sormak: ¿Cuánto cuesta? / ¿Cuánto es? Cevap: Cuesta ... euros (y ... céntimos). Virgül ondalık için: 3,50 �� = tres euros con cincuenta céntimos.',
      table:[
        {
          pronoun:'Soru',
          form:'¿Cuánto cuesta...?',
          example:'¿Cuánto cuesta esto?',
          tr:'Bu ne kadar?'
        },
        {
          pronoun:'Cevap',
          form:'Cuesta...',
          example:'Cuesta diez euros.',
          tr:'Bu on euro.'
        },
        {
          pronoun:'Hesap',
          form:'La cuenta, por favor',
          example:'La cuenta, por favor.',
          tr:'Hesap, lütfen.'
        },
        {
          pronoun:'�deme',
          form:'En efectivo / con tarjeta',
          example:'¿Puedo pagar con tarjeta?',
          tr:'Kartla ödeyebilir miyim?'
        }
      ],
      note:'İspanya\'da nakit hâlâ yaygın. "¿Efectivo o tarjeta?" = Nakit mi kart mı?'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Dos cafés, por favor.',
      tr:'İki kahve, lütfen.',
      prompt:'Sayı ile sipari�x ver'
    },
    {
      id:'sp2',
      en:'Cuesta cinco euros.',
      tr:'Bu be�x euro.',
      prompt:'Fiyat söyle'
    },
    {
      id:'sp3',
      en:'¿Cuánto cuesta esto?',
      tr:'Bu ne kadar?',
      prompt:'Fiyat sor'
    },
    {
      id:'sp4',
      en:'Tengo veinte euros.',
      tr:'Yirmi eurom var.',
      prompt:'Paranı söyle'
    },
    {
      id:'sp5',
      en:'La cuenta, por favor.',
      tr:'Hesap, lütfen.',
      prompt:'Hesap iste'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'En el Café',
      title_en:'At the Café',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Dos cafés, por favor.',
          tr:'İki kahve, lütfen.',
          gramNote:'Sayı + isim. Café eril �  dos cafés.',
          bd:[
            {
              ro:'Dos cafés',
              tr:'İki kahve',
              role:'O',
              note:'Sayı + isim � ço�xulda artikel dü�xer.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'¿Algo más?',
          tr:'Ba�xka bir �xey?',
          gramNote:'Algo más = ba�xka bir �xey.',
          bd:[
            {
              ro:'Algo más',
              tr:'Ba�xka bir �xey',
              role:'question',
              note:'Sipari�x tamamlama sorusu.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'No, gracias. ¿Cuánto cuesta?',
          tr:'Hayır, te�xekkürler. Ne kadar?',
          gramNote:[
            {
              ro:'Cuánto cuesta',
              tr:'Ne kadar',
              role:'question',
              note:'Fiyat sorusu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Son seis euros con cincuenta.',
          tr:'Toplam altı euro elli.',
          gramNote:[
            {
              ro:'Son',
              tr:'Toplam ...',
              role:'V',
              note:'Ser � toplam fiyat.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Aquí tiene. ¡Gracias!',
          tr:'Buyurun. Te�xekkürler!',
          gramNote:'Aquí tiene = buyurun (para verirken).',
          bd:[
            {
              ro:'Aquí tiene',
              tr:'Buyurun',
              role:'K',
              note:'Para uzatırken.'
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
      transcript:'El café cuesta tres euros. El pan cuesta dos euros con cincuenta. En total son cinco euros con cincuenta.',
      tr:'Kahve üç euro. Ekmek iki euro elli. Toplam be�x euro elli.',
      questions:[
        {
          q:'¿Cuánto cuesta el café?',
          opts:[
            '2 ��',
            '3 ��',
            '5 ��',
            '6 ��'
          ],
          answer:1,
          tr:'Kahve ne kadar?'
        },
        {
          q:'¿Cuánto cuesta el pan?',
          opts:[
            '2,50 ��',
            '3 ��',
            '5 ��',
            '5,50 ��'
          ],
          answer:0,
          tr:'Ekmek ne kadar?'
        },
        {
          q:'¿Cuánto es en total?',
          opts:[
            '3 ��',
            '5,05 ��',
            '5,50 ��',
            '6 ��'
          ],
          answer:2,
          tr:'Toplam ne kadar?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[3] = L3;
