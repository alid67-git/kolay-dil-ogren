// ders6.js � Spanish Lesson 6: Shopping (beginner)
const L6 = {
  words:[
    {
      id:'w1',
      en:'¿Dónde encuentro...?',
      ro:'DON-de en-KWEN-tro',
      tr:'... nerede bulabilirim?'
    },
    {
      id:'w2',
      en:'¿Cuánto cuesta?',
      ro:'KWAN-to KWES-ta',
      tr:'Bu ne kadar?'
    },
    {
      id:'w3',
      en:'muy caro',
      ro:'muy KA-ro',
      tr:'çok pahalı'
    },
    {
      id:'w4',
      en:'barato',
      ro:'ba-RA-to',
      tr:'ucuz'
    },
    {
      id:'w5',
      en:'el descuento',
      ro:'el des-KWEN-to',
      tr:'indirim'
    },
    {
      id:'w6',
      en:'la talla',
      ro:'la TA-ya',
      tr:'beden'
    },
    {
      id:'w7',
      en:'el color',
      ro:'el ko-LOR',
      tr:'renk'
    },
    {
      id:'w8',
      en:'probarse',
      ro:'pro-BAR-se',
      tr:'denemek (giysi)'
    },
    {
      id:'w9',
      en:'el probador',
      ro:'el pro-ba-DOR',
      tr:'deneme kabini'
    },
    {
      id:'w10',
      en:'quedar bien',
      ro:'ke-DAR byen',
      tr:'uymak / olmak (beden)'
    },
    {
      id:'w11',
      en:'comprar',
      ro:'kom-PRAR',
      tr:'satın almak'
    },
    {
      id:'w12',
      en:'pagar',
      ro:'pa-GAR',
      tr:'ödemek'
    },
    {
      id:'w13',
      en:'el ticket',
      ro:'el ti-KET',
      tr:'fi�x'
    },
    {
      id:'w14',
      en:'cambiar',
      ro:'kam-BYAR',
      tr:'de�xi�xtirmek (iade)'
    },
    {
      id:'w15',
      en:'la oferta',
      ro:'la o-FER-ta',
      tr:'özel teklif / indirim'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Alı�xveri�xte Faydalı İfadeler',
      title_en:'Useful Shopping Phrases',
      explanation:'Ma�xazada: Buenas tardes ile ba�xla. ¿Cuánto cuesta? = fiyat sor. ¿Puedo probármelo? = deneyebilir miyim? Es muy caro = çok pahalı.',
      table:[
        {
          pronoun:'Fiyat',
          form:'¿Cuánto cuesta...?',
          example:'¿Cuánto cuesta la chaqueta?',
          tr:'Ceket ne kadar?'
        },
        {
          pronoun:'Deneme',
          form:'¿Puedo probármelo?',
          example:'¿Puedo probármelo?',
          tr:'Deneyebilir miyim?'
        },
        {
          pronoun:'Beden',
          form:'¿Tiene talla M?',
          example:'¿Tiene talla L?',
          tr:'L beden var mı?'
        },
        {
          pronoun:'�deme',
          form:'¿Dónde puedo pagar?',
          example:'¿Dónde puedo pagar?',
          tr:'Nerede ödeyebilirim?'
        }
      ],
      note:'Domingos ço�xu ma�xaza kapalı � İspanya\'da dinlenme günü.'
    }
  ],
  speaking:[
    {
      id:'g2',
      title:'Satın Alma',
      title_en:'Making a Purchase',
      explanation:'İspanyolcada satın alma: Me lo llevo = Bunu alıyorum. ¿Puedo pagar con tarjeta? = Kartla ödeyebilir miyim? ¿Tiene en...? = ... var mı?',
      table:[
        {
          pronoun:'Satın alma',
          form:'Me lo llevo / Me quedo con...',
          example:'Me quedo con la chaqueta azul.',
          tr:'Mavi ceketi alıyorum.'
        },
        {
          pronoun:'�deme',
          form:'¿Efectivo o tarjeta?',
          example:'¿Puedo pagar con tarjeta?',
          tr:'Kartla ödeyebilir miyim?'
        },
        {
          pronoun:'Fi�x',
          form:'¿Me da un ticket?',
          example:'¿Me da un ticket, por favor?',
          tr:'Fi�x alabilir miyim?'
        },
        {
          pronoun:'İade',
          form:'¿Puedo cambiarlo?',
          example:'¿Puedo cambiarlo?',
          tr:'Bunu de�xi�xtirebilir miyim?'
        }
      ],
      note:'Ticket = fi�x. Derecho de devolución = iade hakkı (genelde 14 gün).'
    }
  ],
  dialogues:[
    {
      id:'sp1',
      en:'¿Cuánto cuesta?',
      tr:'Bu ne kadar?',
      prompt:'Fiyat sor'
    },
    {
      id:'sp2',
      en:'Es muy caro.',
      tr:'Bu çok pahalı.',
      prompt:'Pahalı de'
    },
    {
      id:'sp3',
      en:'¿Puedo probármelo?',
      tr:'Bunu deneyebilir miyim?',
      prompt:'Deneme iste'
    },
    {
      id:'sp4',
      en:'Me queda bien.',
      tr:'Bu bana uyuyor.',
      prompt:'Beden uygun de'
    },
    {
      id:'sp5',
      en:'Me lo llevo.',
      tr:'Bunu alıyorum.',
      prompt:'Satın al'
    }
  ],
  listening:[
    {
      id:'d1',
      title:'En la tienda',
      title_en:'In the Shop',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'¡Buenas tardes! ¿En qué puedo ayudarle?',
          tr:'İyi günler! Size nasıl yardımcı olabilirim?',
          gramNote:'Satı�x elemanı kar�xılama.',
          bd:[
            {
              ro:'¿En qué puedo ayudarle?',
              tr:'Nasıl yardım edebilirim',
              role:'modal',
              note:'Ma�xaza standart sorusu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Busco una chaqueta.',
          tr:'Ceket arıyorum.',
          gramNote:'buscar = aramak.',
          bd:[
            {
              ro:'Busco',
              tr:'arıyorum',
              role:'V',
              note:'buscar + isim.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'¿Qué talla necesita?',
          tr:'Hangi beden lazım?',
          gramNote:'necesitar = ihtiyaç duymak.',
          bd:[
            {
              ro:'¿Qué talla',
              tr:'Hangi beden',
              role:'question',
              note:'Qué = hangi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Talla M, por favor. ¿Puedo probármela?',
          tr:'M beden, lütfen. Deneyebilir miyim?',
          gramNote:[
            {
              ro:'probarse',
              tr:'denemek',
              role:'V',
              note:'Giysi denemek.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Claro. El probador está allí.',
          tr:'Tabii. Deneme kabini orada.',
          gramNote:[
            {
              ro:'probador',
              tr:'deneme kabini',
              role:'O',
              note:'Eril �  el.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'¡Me queda bien! ¿Cuánto cuesta?',
          tr:'Bu uydu! Ne kadar?',
          gramNote:[
            {
              ro:'¿Cuánto cuesta?',
              tr:'Ne kadar',
              role:'question',
              note:'Fiyat sorusu.'
            }
          ]
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[6] = L6;
