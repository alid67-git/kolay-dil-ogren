// ders15.js - French Lesson 15: Education & School (beginner)
const L15 = {
  words:[
    {
      id:'w1',
      en:'l\'école',
      ro:'le-kol',
      tr:'okul'
    },
    {
      id:'w2',
      en:'l\'université',
      ro:'lü-ni-ver-si-te',
      tr:'üniversite'
    },
    {
      id:'w3',
      en:'l\'étudiant',
      ro:'le-tu-dyan',
      tr:'öğrenci'
    },
    {
      id:'w4',
      en:'le professeur',
      ro:'luh pro-fe-sör',
      tr:'öğretmen'
    },
    {
      id:'w5',
      en:'le cours',
      ro:'luh kur',
      tr:'ders'
    },
    {
      id:'w6',
      en:'l\'examen',
      ro:'leg-za-mon',
      tr:'sınav'
    },
    {
      id:'w7',
      en:'apprendre',
      ro:'a-prondr',
      tr:'öğrenmek'
    },
    {
      id:'w8',
      en:'étudier',
      ro:'e-tu-dye',
      tr:'çalışmak'
    },
    {
      id:'w9',
      en:'les devoirs',
      ro:'le də-vwar',
      tr:'ödevler'
    },
    {
      id:'w10',
      en:'la classe',
      ro:'la klas',
      tr:'sınıf'
    },
    {
      id:'w11',
      en:'l\'emploi du temps',
      ro:'lon-plwa dü ton',
      tr:'ders programı'
    },
    {
      id:'w12',
      en:'réussir',
      ro:'re-u-sir',
      tr:'geçmek'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Eğitim Kalıpları',
      title_en:'Education phrases',
      explanation:'Ders ve sınav konuşmalarında J\'étudie..., J\'ai un examen..., J\'ai réussi kalıpları sık kullanılır.',
      table:[
        {
          pronoun:'Okumak',
          form:'J\'étudie...',
          example:'J\'étudie l\'informatique.',
          tr:'Bilişim okuyorum.'
        },
        {
          pronoun:'Öğrenmek',
          form:'J\'apprends...',
          example:'J\'apprends le français.',
          tr:'Fransızca öğreniyorum.'
        },
        {
          pronoun:'Sınav',
          form:'J\'ai un examen',
          example:'J\'ai un examen demain.',
          tr:'Yarın sınavım var.'
        },
        {
          pronoun:'Başarı',
          form:'J\'ai réussi',
          example:'J\'ai réussi l\'examen.',
          tr:'Sınavı geçtim.'
        }
      ],
      note:'Akademik bağlamda resmi hitap yaygındır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'J\'apprends le français.',
      tr:'Fransızca öğreniyorum.',
      prompt:'Dil söyle'
    },
    {
      id:'sp2',
      en:'J\'étudie à l\'université.',
      tr:'Üniversitede okuyorum.',
      prompt:'Durum söyle'
    },
    {
      id:'sp3',
      en:'J\'ai un examen la semaine prochaine.',
      tr:'Gelecek hafta sınavım var.',
      prompt:'Sınavdan bahset'
    },
    {
      id:'sp4',
      en:'Le cours commence à neuf heures.',
      tr:'Ders dokuzda başlıyor.',
      prompt:'Saat söyle'
    },
    {
      id:'sp5',
      en:'J\'ai réussi !',
      tr:'Geçtim!',
      prompt:'Başarı söyle'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'À l\'université',
      title_en:'At university',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Tu étudies quoi ?',
          tr:'Ne okuyorsun?',
          gramNote:'Samimi soru.',
          bd:[
            {
              ro:'quoi',
              tr:'ne',
              role:'question',
              note:'Soru kelimesi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'J\'étudie l\'informatique.',
          tr:'Bilişim okuyorum.',
          gramNote:'Bölüm cevabı.',
          bd:[
            {
              ro:'informatique',
              tr:'bilişim',
              role:'O',
              note:'Alan adı.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Moi, j\'étudie la médecine.',
          tr:'Ben tıp okuyorum.',
          gramNote:'Karşılaştırma.',
          bd:[
            {
              ro:'médecine',
              tr:'tıp',
              role:'O',
              note:'Bölüm adı.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Bon courage pour l\'examen !',
          tr:'Sınav için başarılar!',
          gramNote:'İyi dilek.',
          bd:[
            {
              ro:'Bon courage',
              tr:'başarılar',
              role:'phrase',
              note:'Sınav ifadesi.'
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
      transcript:'Ali suit un cours de français les lundis et mercredis.',
      tr:'Ali pazartesi ve çarşamba Fransızca kursuna katılıyor.',
      questions:[
        {
          q:'Matière ?',
          opts:[
            'maths',
            'français',
            'sport',
            'art'
          ],
          answer:1,
          tr:'Ders ne?'
        },
        {
          q:'Jours ?',
          opts:[
            'lundi-mercredi',
            'mardi-jeudi',
            'mercredi-vendredi',
            'samedi-dimanche'
          ],
          answer:0,
          tr:'Hangi günler?'
        },
        {
          q:'Contexte ?',
          opts:[
            'éducation',
            'voyage',
            'santé',
            'travail'
          ],
          answer:0,
          tr:'Bağlam?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[15] = L15;
