// ders15.js � Spanish Lesson 15: Education & School (beginner)
const L15 = {
  words:[
    {
      id:'w1',
      en:'el colegio',
      ro:'el ko-LE-hyo',
      tr:'okul'
    },
    {
      id:'w2',
      en:'la universidad',
      ro:'la u-ni-ver-si-DAD',
      tr:'üniversite'
    },
    {
      id:'w3',
      en:'el estudiante / la estudiante',
      ro:'el es-tu-DYAN-te',
      tr:'üniversite ö�xrencisi'
    },
    {
      id:'w4',
      en:'el profesor / la profesora',
      ro:'el pro-fe-SOR / la pro-fe-SO-ra',
      tr:'ö�xretmen'
    },
    {
      id:'w5',
      en:'el curso',
      ro:'el KUR-so',
      tr:'kurs'
    },
    {
      id:'w6',
      en:'el examen',
      ro:'el ek-SA-men',
      tr:'sınav'
    },
    {
      id:'w7',
      en:'aprender',
      ro:'a-pren-DER',
      tr:'ö�xrenmek'
    },
    {
      id:'w8',
      en:'estudiar',
      ro:'es-tu-DYAR',
      tr:'okumak (üniversite)'
    },
    {
      id:'w9',
      en:'los deberes',
      ro:'los de-BE-res',
      tr:'ev ödevi'
    },
    {
      id:'w10',
      en:'la clase',
      ro:'la KLA-se',
      tr:'sınıf'
    },
    {
      id:'w11',
      en:'el horario',
      ro:'el o-ra-RYO',
      tr:'ders programı'
    },
    {
      id:'w12',
      en:'aprobar',
      ro:'a-pro-BAR',
      tr:'geçmek (sınav)'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'E�xitim Hayatı',
      title_en:'Education',
      explanation:'Estudio ... en la universidad = �Sniversitede ... okuyorum. Aprendo español = İspanyolca ö�xreniyorum. El examen es el... = Sınav ... günü.',
      table:[
        {
          pronoun:'Okumak',
          form:'Estudio...',
          example:'Estudio medicina.',
          tr:'Tıp okuyorum.'
        },
        {
          pronoun:'��xrenmek',
          form:'Aprendo...',
          example:'Aprendo español.',
          tr:'İspanyolca ö�xreniyorum.'
        },
        {
          pronoun:'Sınav',
          form:'Tengo un examen',
          example:'La semana que viene tengo un examen.',
          tr:'Gelecek hafta sınavım var.'
        },
        {
          pronoun:'Ba�xarı',
          form:'He aprobado',
          example:'He aprobado el examen.',
          tr:'Sınavı geçtim.'
        }
      ],
      note:'İspanya\'da devlet üniversiteleri uygun fiyatlı � kaliteli e�xitim.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Aprendo español.',
      tr:'İspanyolca ö�xreniyorum.',
      prompt:'Ne ö�xrendi�xini söyle'
    },
    {
      id:'sp2',
      en:'Estudio en la universidad.',
      tr:'�Sniversitede okuyorum.',
      prompt:'E�xitim durumunu söyle'
    },
    {
      id:'sp3',
      en:'La semana que viene tengo un examen.',
      tr:'Gelecek hafta sınavım var.',
      prompt:'Sınav haberi ver'
    },
    {
      id:'sp4',
      en:'El curso empieza a las nueve.',
      tr:'Kurs saat dokuzda ba�xlıyor.',
      prompt:'Kurs saati söyle'
    },
    {
      id:'sp5',
      en:'¡He aprobado el examen!',
      tr:'Sınavı geçtim!',
      prompt:'Ba�xarı payla�x'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'En la universidad',
      title_en:'At University',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'¿Qué estudias?',
          tr:'Ne okuyorsun?',
          gramNote:'Samimi soru � tú formu.',
          bd:[
            {
              ro:'¿Qué estudias?',
              tr:'Ne okuyorsun',
              role:'question',
              note:'tú ile samimi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Estudio informática. ¿Y tú?',
          tr:'Bilgisayar okuyorum. Ya sen?',
          gramNote:[
            {
              ro:'informática',
              tr:'bilgisayar bilimi',
              role:'O',
              note:'Di�xil �  la informática.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Estudio medicina. ¡Difícil pero interesante!',
          tr:'Tıp okuyorum. Zor ama ilginç!',
          gramNote:[
            {
              ro:'Difícil pero interesante',
              tr:'Zor ama ilginç',
              role:'adj',
              note:'Pero = ama.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'¡Mucha suerte en el examen!',
          tr:'Sınavda ba�xarılar!',
          gramNote:'Suerte = �xans / ba�xarı.',
          bd:[
            {
              ro:'Mucha suerte',
              tr:'Ba�xarılar',
              role:'phrase',
              note:'Sınav öncesi iyi dilek.'
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
      transcript:'Ali asiste a un curso de español. El curso es los lunes y miércoles de seis a ocho. El mes que viene tiene un examen.',
      tr:'Ali bir İspanyolca kursuna gidiyor. Kurs pazartesi ve çar�xamba 18-20 arası. Gelecek ay sınavı var.',
      questions:[
        {
          q:'¿Qué idioma aprende Ali?',
          opts:[
            'inglés',
            'francés',
            'español',
            'turco'
          ],
          answer:2,
          tr:'Ali hangi dili ö�xreniyor?'
        },
        {
          q:'¿Qué días?',
          opts:[
            'Lu+Ma',
            'Lu+Mi',
            'Ma+Ju',
            'Mi+Vi'
          ],
          answer:1,
          tr:'Hangi günler?'
        },
        {
          q:'¿Cuándo es el examen?',
          opts:[
            'Esta semana',
            'La semana que viene',
            'El mes que viene',
            'El año que viene'
          ],
          answer:2,
          tr:'Sınav ne zaman?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[15] = L15;
