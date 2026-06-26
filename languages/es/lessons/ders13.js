// ders13.js � Spanish Lesson 13: Social Life (beginner)
const L13 = {
  words:[
    {
      id:'w1',
      en:'el amigo / la amiga',
      ro:'el a-MI-go / la a-MI-ga',
      tr:'erkek/kadın arkada�x'
    },
    {
      id:'w2',
      en:'la fiesta',
      ro:'la FYES-ta',
      tr:'parti'
    },
    {
      id:'w3',
      en:'invitar',
      ro:'in-bi-TAR',
      tr:'davet etmek'
    },
    {
      id:'w4',
      en:'la invitación',
      ro:'la in-bi-ta-THYON',
      tr:'davet'
    },
    {
      id:'w5',
      en:'celebrar',
      ro:'the-le-BRAR',
      tr:'kutlamak'
    },
    {
      id:'w6',
      en:'el cumpleaños',
      ro:'el kum-ple-a-NYOS',
      tr:'do�xum günü'
    },
    {
      id:'w7',
      en:'¡Feliz cumpleaños!',
      ro:'fe-LIS kum-ple-a-NYOS',
      tr:'İyi ki do�xdun!'
    },
    {
      id:'w8',
      en:'¡Salud!',
      ro:'sa-LUD',
      tr:'Şerefe!'
    },
    {
      id:'w9',
      en:'quedar',
      ro:'ke-DAR',
      tr:'bulu�xmak'
    },
    {
      id:'w10',
      en:'la cita',
      ro:'la THI-ta',
      tr:'bulu�xma / randevu'
    },
    {
      id:'w11',
      en:'tarde',
      ro:'TAR-de',
      tr:'geç'
    },
    {
      id:'w12',
      en:'puntual',
      ro:'pun-TWAL',
      tr:'dakik'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Sosyal Davetler',
      title_en:'Social Invitations',
      explanation:'¿Quieres...? = ... ister misin? (samimi). ¿Le apetece...? = İster misiniz? (resmi). ¡Feliz cumpleaños! = Do�xum günün kutlu olsun! ¡Salud! = Şerefe!',
      table:[
        {
          pronoun:'Davet',
          form:'¿Quieres...? / ¿Te apetece...?',
          example:'¿Te apetece ir al cine?',
          tr:'Sinemaya gitmek ister misin?'
        },
        {
          pronoun:'Kabul',
          form:'¡Claro! / ¡Me encanta!',
          example:'¡Sí, claro!',
          tr:'Evet, memnuniyetle!'
        },
        {
          pronoun:'Red',
          form:'Lo siento, no puedo.',
          example:'Lo siento, no tengo tiempo.',
          tr:'Maalesef vaktim yok.'
        },
        {
          pronoun:'Kutlama',
          form:'¡Feliz cumpleaños! / ¡Salud!',
          example:'¡Feliz cumpleaños!',
          tr:'Do�xum günün kutlu olsun!'
        }
      ],
      note:'İspanya\'da ser puntual (dakik) olmak sosyal görgü kuralıdır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'¿Tienes tiempo el sábado?',
      tr:'Cumartesi müsait misin?',
      prompt:'Bulu�xma teklif et'
    },
    {
      id:'sp2',
      en:'¡Claro! ¿Dónde quedamos?',
      tr:'Evet, memnuniyetle! Nerede bulu�xalım?',
      prompt:'Kabul et ve yer sor'
    },
    {
      id:'sp3',
      en:'¡Feliz cumpleaños!',
      tr:'Do�xum günün kutlu olsun!',
      prompt:'Do�xum günü kutla'
    },
    {
      id:'sp4',
      en:'¡Salud!',
      tr:'Şerefe!',
      prompt:'Kadeh kaldır'
    },
    {
      id:'sp5',
      en:'Lo siento, no puedo.',
      tr:'Maalesef gelemem.',
      prompt:'Daveti reddet'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Invitación',
      title_en:'Invitation',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'¡Hola Ali! El sábado doy una fiesta. ¿Vienes?',
          tr:'Hey Ali! Cumartesi parti veriyorum. Gelir misin?',
          gramNote:'Samimi davet.',
          bd:[
            {
              ro:'doy una fiesta',
              tr:'parti veriyorum',
              role:'V',
              note:'dar una fiesta = parti vermek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'¡Claro! ¿Llevo algo?',
          tr:'Evet, memnuniyetle! Bir �xey getireyim mi?',
          gramNote:'llevar = getirmek.',
          bd:[
            {
              ro:'¿Llevo algo?',
              tr:'bir �xey getireyim mi',
              role:'V',
              note:'Partiye katkı sorusu.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'No, gracias. ¡Solo tú! A las ocho en mi casa.',
          tr:'Hayır, te�xekkürler. Sadece sen! Saat sekizde bende.',
          gramNote:[
            {
              ro:'en mi casa',
              tr:'evimde',
              role:'K',
              note:'en + isim = ...de/-da.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'¡Genial! ¡Hasta el sábado!',
          tr:'Harika! Cumartesiye kadar!',
          gramNote:[
            {
              ro:'Hasta el sábado',
              tr:'Cumartesiye kadar',
              role:'farewell',
              note:'Hasta + gün.'
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
      transcript:'Laura celebra su cumpleaños el viernes. La fiesta empieza a las diecinueve. Ali trae una tarta.',
      tr:'Laura cuma günü do�xum gününü kutluyor. Parti saat 19:00\'da ba�xlıyor. Ali bir kek getiriyor.',
      questions:[
        {
          q:'¿Qué celebra Laura?',
          opts:[
            'boda',
            'cumpleaños',
            'graduación',
            'Año Nuevo'
          ],
          answer:1,
          tr:'Laura ne kutluyor?'
        },
        {
          q:'¿Cuándo empieza la fiesta?',
          opts:[
            '18:00',
            '19:00',
            '20:00',
            '21:00'
          ],
          answer:1,
          tr:'Parti ne zaman ba�xlıyor?'
        },
        {
          q:'¿Qué trae Ali?',
          opts:[
            'vino',
            'flores',
            'tarta',
            'pan'
          ],
          answer:2,
          tr:'Ali ne getiriyor?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[13] = L13;
