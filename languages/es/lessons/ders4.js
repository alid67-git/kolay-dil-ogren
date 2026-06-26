// ders4.js � Spanish Lesson 4: Time & Date (beginner)
const L4 = {
  words:[
    {
      id:'w1',
      en:'¿Qué hora es?',
      ro:'kay O-ra es',
      tr:'Saat kaç?',
      tip:'Saat sormak.',
      examples:[
        {
          en:'Perdón, ¿qué hora es?',
          tr:'Pardon, saat kaç?',
          bd:[
            {
              ro:'¿Qué hora es?',
              tr:'Saat kaç',
              role:'question',
              note:'Resmi ortamda Perdón ekle.'
            }
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'Son las tres',
      ro:'son las tres',
      tr:'Saat üç',
      examples:[
        {
          en:'Son las tres.',
          tr:'Saat üç.',
          bd:[
            {
              ro:'Son las',
              tr:'Saat ...',
              role:'V',
              note:'2+ için Son las. 1:00 = Es la una.'
            }
          ]
        }
      ]
    },
    {
      id:'w3',
      en:'la mañana',
      ro:'la ma-NYA-na',
      tr:'sabah'
    },
    {
      id:'w4',
      en:'la tarde',
      ro:'la TAR-de',
      tr:'ö�xleden sonra'
    },
    {
      id:'w5',
      en:'la noche',
      ro:'la NO-che',
      tr:'ak�xam / gece'
    },
    {
      id:'w6',
      en:'hoy',
      ro:'oy',
      tr:'bugün'
    },
    {
      id:'w7',
      en:'mañana',
      ro:'ma-NYA-na',
      tr:'yarın'
    },
    {
      id:'w8',
      en:'ayer',
      ro:'a-YER',
      tr:'dün'
    },
    {
      id:'w9',
      en:'lunes',
      ro:'LU-nes',
      tr:'Pazartesi'
    },
    {
      id:'w10',
      en:'martes',
      ro:'MAR-tes',
      tr:'Salı'
    },
    {
      id:'w11',
      en:'miércoles',
      ro:'MYER-ko-les',
      tr:'�!ar�xamba'
    },
    {
      id:'w12',
      en:'jueves',
      ro:'HWE-ves',
      tr:'Per�xembe'
    },
    {
      id:'w13',
      en:'viernes',
      ro:'BYER-nes',
      tr:'Cuma'
    },
    {
      id:'w14',
      en:'sábado',
      ro:'SA-ba-do',
      tr:'Cumartesi'
    },
    {
      id:'w15',
      en:'domingo',
      ro:'do-MIN-go',
      tr:'Pazar'
    },
    {
      id:'w16',
      en:'enero',
      ro:'e-NE-ro',
      tr:'Ocak'
    },
    {
      id:'w17',
      en:'julio',
      ro:'HU-lyo',
      tr:'Temmuz'
    },
    {
      id:'w18',
      en:'¿Cuándo?',
      ro:'KWAN-do',
      tr:'Ne zaman?'
    },
    {
      id:'w19',
      en:'¿A qué hora?',
      ro:'a kay O-ra',
      tr:'Saat kaçta?'
    },
    {
      id:'w20',
      en:'la semana',
      ro:'la se-MA-na',
      tr:'hafta'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Saat Sorma ve Söyleme',
      title_en:'Telling Time',
      explanation:'İspanyolcada saat: ¿Qué hora es? Son las ... (2+), Es la una (1:00). y media = buçuk, y cuarto = çeyrek. A las ocho = saat sekizde.',
      table:[
        {
          pronoun:'Tam saat',
          form:'Son las ...',
          example:'Son las tres.',
          tr:'Saat üç.'
        },
        {
          pronoun:'1:00',
          form:'Es la una',
          example:'Es la una.',
          tr:'Saat bir.'
        },
        {
          pronoun:'Buçuk',
          form:'y media',
          example:'Son las tres y media.',
          tr:'Saat üç buçuk.'
        },
        {
          pronoun:'Randevu',
          form:'A las ...',
          example:'A las ocho.',
          tr:'Saat sekizde.'
        }
      ],
      note:'İspanyolcada saat Türkçe gibi � yarım üç = tres y media (3:30).'
    },
    {
      id:'g2',
      title:'Günler ve Aylar',
      title_en:'Days and Months',
      explanation:'Günler ve aylar İspanyolcada küçük harfle yazılır (Pazartesi hariç özel isim de�xil). el lunes = pazartesi günü. en julio = temmuz ayında.',
      table:[
        {
          pronoun:'Günler',
          form:'lunes ... domingo',
          example:'El lunes.',
          tr:'Pazartesi günü.'
        },
        {
          pronoun:'Aylar',
          form:'enero ... diciembre',
          example:'En julio.',
          tr:'Temmuz\'da.'
        },
        {
          pronoun:'Bugün',
          form:'hoy / mañana / ayer',
          example:'Hoy es viernes.',
          tr:'Bugün cuma.'
        },
        {
          pronoun:'Soru',
          form:'¿Cuándo?',
          example:'¿Cuándo empieza el curso?',
          tr:'Kurs ne zaman ba�xlıyor?'
        }
      ],
      note:'el + gün, en + ay, a las + saat � edatları ezberle.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'¿Qué hora es?',
      tr:'Saat kaç?',
      prompt:'Saat sor'
    },
    {
      id:'sp2',
      en:'Son las diez.',
      tr:'Saat on.',
      prompt:'Saati söyle'
    },
    {
      id:'sp3',
      en:'Hoy es lunes.',
      tr:'Bugün pazartesi.',
      prompt:'Bugünün gününü söyle'
    },
    {
      id:'sp4',
      en:'Mañana tengo tiempo.',
      tr:'Yarın vaktim var.',
      prompt:'Yarın hakkında konu�x'
    },
    {
      id:'sp5',
      en:'A las nueve, por favor.',
      tr:'Saat dokuzda, lütfen.',
      prompt:'Randevu saati belirt'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Concertar una cita',
      title_en:'Making an Appointment',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'¿Cuándo tiene tiempo?',
          tr:'Ne zaman müsait siniz?',
          gramNote:'Resmi randevu sorusu.',
          bd:[
            {
              ro:'¿Cuándo',
              tr:'Ne zaman',
              role:'question',
              note:'Zaman sorusu.'
            },
            {
              ro:'tiene tiempo',
              tr:'müsait misiniz',
              role:'V',
              note:'tener tiempo = vakti olmak.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'¿El martes a las diez?',
          tr:'Salı saat onda?',
          gramNote:'�neri � el + gün, a las + saat.',
          bd:[
            {
              ro:'El martes',
              tr:'Salı günü',
              role:'K',
              note:'el + gün.'
            },
            {
              ro:'a las diez',
              tr:'saat onda',
              role:'K',
              note:'a las + saat.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Sí, me viene bien. ¡Hasta el martes!',
          tr:'Evet, uyar. Salıya kadar!',
          gramNote:'Me viene bien = uyar, olur.',
          bd:[
            {
              ro:'Me viene bien',
              tr:'Uyar / olur',
              role:'V',
              note:'Günlük kabul ifadesi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Hasta el martes. ¡Adiós!',
          tr:'Salıya kadar. Ho�xça kalın!',
          gramNote:'Hasta = ...e kadar.',
          bd:[
            {
              ro:'Hasta el martes',
              tr:'Salıya kadar',
              role:'farewell',
              note:'Hasta + zaman = ...e kadar.'
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
      transcript:'Hoy es miércoles, quince de marzo. La clase empieza a las nueve y termina a las once.',
      tr:'Bugün çar�xamba, 15 Mart. Ders saat dokuzda ba�xlıyor ve saat on birde bitiyor.',
      questions:[
        {
          q:'¿Qué día es hoy?',
          opts:[
            'lunes',
            'martes',
            'miércoles',
            'viernes'
          ],
          answer:2,
          tr:'Bugün hangi gün?'
        },
        {
          q:'¿Cuándo empieza la clase?',
          opts:[
            '8:00',
            '9:00',
            '10:00',
            '11:00'
          ],
          answer:1,
          tr:'Ders ne zaman ba�xlıyor?'
        },
        {
          q:'¿Cuándo termina la clase?',
          opts:[
            '9:00',
            '10:00',
            '11:00',
            '12:00'
          ],
          answer:2,
          tr:'Ders ne zaman bitiyor?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[4] = L4;
