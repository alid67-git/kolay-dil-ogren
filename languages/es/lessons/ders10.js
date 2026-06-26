// ders10.js � Spanish Lesson 10: Work & Business (beginner)
const L10 = {
  words:[
    {
      id:'w1',
      en:'el trabajo',
      ro:'el tra-BA-ho',
      tr:'i�x / çalı�xma'
    },
    {
      id:'w2',
      en:'la profesión',
      ro:'la pro-fe-SYON',
      tr:'meslek'
    },
    {
      id:'w3',
      en:'el compañero / la compañera',
      ro:'el kom-pa-NYE-ro / la kom-pa-NYE-ra',
      tr:'i�x arkada�xı'
    },
    {
      id:'w4',
      en:'el jefe / la jefa',
      ro:'el HE-fe / la HE-fa',
      tr:'patron'
    },
    {
      id:'w5',
      en:'la oficina',
      ro:'la o-fi-THI-na',
      tr:'ofis'
    },
    {
      id:'w6',
      en:'la reunión',
      ro:'la re-u-NYON',
      tr:'toplantı'
    },
    {
      id:'w7',
      en:'el contrato',
      ro:'el kon-TRAK-to',
      tr:'sözle�xme'
    },
    {
      id:'w8',
      en:'el sueldo',
      ro:'el SWEL-do',
      tr:'maa�x'
    },
    {
      id:'w9',
      en:'la solicitud de empleo',
      ro:'la so-li-thi-TUD de em-PLE-o',
      tr:'i�x ba�xvurusu'
    },
    {
      id:'w10',
      en:'la entrevista de trabajo',
      ro:'la en-tre-VIS-ta de tra-BA-ho',
      tr:'i�x görü�xmesi'
    },
    {
      id:'w11',
      en:'a tiempo completo / a tiempo parcial',
      ro:'a TYEM-po kom-PLE-to / par-THYAL',
      tr:'tam zamanlı / yarı zamanlı'
    },
    {
      id:'w12',
      en:'la salida del trabajo',
      ro:'la sa-LI-da del tra-BA-ho',
      tr:'i�x çıkı�xı / mesai sonu'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'İ�x Hayatında Temel İfadeler',
      title_en:'Basic Work Phrases',
      explanation:'¿A qué se dedica? = Ne i�x yapıyorsunuz? Trabajo como... = ... olarak çalı�xıyorum. Tengo una reunión = Toplantım var.',
      table:[
        {
          pronoun:'Meslek sorma',
          form:'¿Cuál es su profesión?',
          example:'¿A qué se dedica usted?',
          tr:'Mesle�xiniz ne?'
        },
        {
          pronoun:'Cevap',
          form:'Soy... / Trabajo como...',
          example:'Trabajo como ingeniero.',
          tr:'Mühendis olarak çalı�xıyorum.'
        },
        {
          pronoun:'Toplantı',
          form:'Tengo una reunión',
          example:'A las diez tengo una reunión.',
          tr:'Saat onda toplantım var.'
        },
        {
          pronoun:'Mesai sonu',
          form:'¡Que tenga buena tarde!',
          example:'¡Hasta mañana!',
          tr:'İyi ak�xamlar! (i�x çıkı�xı)'
        }
      ],
      note:'İspanya\'da i�x saatleri genelde 9�18 arası. La puntualidad (dakiklik) çok önemli!'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'¿A qué se dedica usted?',
      tr:'Mesle�xiniz ne?',
      prompt:'Meslek sor'
    },
    {
      id:'sp2',
      en:'Trabajo como programador.',
      tr:'Yazılımcı olarak çalı�xıyorum.',
      prompt:'Mesle�xini söyle'
    },
    {
      id:'sp3',
      en:'Tengo una reunión a las tres.',
      tr:'Saat üçte toplantım var.',
      prompt:'Toplantı belirt'
    },
    {
      id:'sp4',
      en:'¡Hasta mañana!',
      tr:'Yarın görü�xürüz! (i�x çıkı�xı)',
      prompt:'Mesai sonu de'
    },
    {
      id:'sp5',
      en:'¿Podemos concertar una cita?',
      tr:'Randevu ayarlayabilir miyiz?',
      prompt:'Randevu öner'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'En la oficina',
      title_en:'At the Office',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'¡Buenos días! ¿Qué tal el fin de semana?',
          tr:'Günaydın! Hafta sonunuz nasıldı?',
          gramNote:'İ�x yerinde selam.',
          bd:[
            {
              ro:'¿Qué tal',
              tr:'Nasıldı',
              role:'question',
              note:'Hal hatır sorusu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Muy bien, gracias. ¿Y usted?',
          tr:'Oldukça iyi, te�xekkürler. Ya siz?',
          gramNote:'Muy bien = oldukça iyi.',
          bd:[
            {
              ro:'Muy bien',
              tr:'Oldukça iyi',
              role:'adj',
              note:'Olumlu kısa cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Bien también. ¿Tiene reuniones hoy?',
          tr:'Ben de iyiyim. Bugün toplantılarınız var mı?',
          gramNote:[
            {
              ro:'reuniones',
              tr:'toplantılar',
              role:'O',
              note:'Di�xil ço�xul �  las.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Sí, a las once. Después tengo tiempo.',
          tr:'Evet, saat on birde. Sonra vaktim var.',
          gramNote:[
            {
              ro:'Después',
              tr:'Sonra',
              role:'K',
              note:'Zaman sırası.'
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
      transcript:'Ali trabaja como ingeniero en Madrid. Empieza a las ocho y tiene una reunión a las diez. Termina a las cinco de la tarde.',
      tr:'Ali Madrid\'de mühendis olarak çalı�xıyor. Saat sekizde ba�xlıyor ve saat onda toplantısı var. Mesai saat be�xte bitiyor.',
      questions:[
        {
          q:'¿Cuál es la profesión de Ali?',
          opts:[
            'profesor',
            'médico',
            'ingeniero',
            'cocinero'
          ],
          answer:2,
          tr:'Ali\'nin mesle�xi ne?'
        },
        {
          q:'¿Cuándo empieza el trabajo?',
          opts:[
            '7:00',
            '8:00',
            '9:00',
            '10:00'
          ],
          answer:1,
          tr:'İ�x ne zaman ba�xlıyor?'
        },
        {
          q:'¿Cuándo termina?',
          opts:[
            '16:00',
            '17:00',
            '18:00',
            '19:00'
          ],
          answer:1,
          tr:'Mesai ne zaman bitiyor?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[10] = L10;
