// ders15.js — Italian Lesson 15: Education & School (beginner)
const L15 = {
  words:[
    {
      id:'w1',
      en:'la scuola',
      ro:'la scu',
      tr:'okul',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'l\'università',
      ro:'l\'univ',
      tr:'üniversite'
    },
    {
      id:'w3',
      en:'il professore',
      ro:'il pro',
      tr:'öğretmen'
    },
    {
      id:'w4',
      en:'lo studente',
      ro:'lo stu',
      tr:'öğrenci'
    },
    {
      id:'w5',
      en:'la lezione',
      ro:'la lez',
      tr:'ders'
    },
    {
      id:'w6',
      en:'l\'esame',
      ro:'l\'esam',
      tr:'sınav'
    },
    {
      id:'w7',
      en:'i compiti',
      ro:'i comp',
      tr:'ödev'
    },
    {
      id:'w8',
      en:'studiare',
      ro:'studia',
      tr:'çalışmak'
    },
    {
      id:'w9',
      en:'imparare',
      ro:'impara',
      tr:'öğrenmek'
    },
    {
      id:'w10',
      en:'il libro',
      ro:'il lib',
      tr:'kitap'
    },
    {
      id:'w11',
      en:'il quaderno',
      ro:'il qua',
      tr:'defter'
    },
    {
      id:'w12',
      en:'la biblioteca',
      ro:'la bib',
      tr:'kütüphane'
    },
    {
      id:'w13',
      en:'la classe',
      ro:'la cla',
      tr:'sınıf'
    },
    {
      id:'w14',
      en:'il voto',
      ro:'il vot',
      tr:'not'
    },
    {
      id:'w15',
      en:'passare',
      ro:'passar',
      tr:'geçmek'
    },
    {
      id:'w16',
      en:'bocciare',
      ro:'boccia',
      tr:'kalmak'
    },
    {
      id:'w17',
      en:'il corso',
      ro:'il cor',
      tr:'kurs'
    },
    {
      id:'w18',
      en:'la materia',
      ro:'la mat',
      tr:'ders konusu'
    },
    {
      id:'w19',
      en:'la domanda',
      ro:'la dom',
      tr:'soru'
    },
    {
      id:'w20',
      en:'la risposta',
      ro:'la ris',
      tr:'cevap'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Education & School — Temel',
      title_en:'Education & School — Basics',
      explanation:'Bu derste Education & School konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'la scuola',
          example:'la scuola',
          tr:'okul'
        },
        {
          pronoun:'Pratik',
          form:'l\'università',
          example:'l\'università',
          tr:'üniversite'
        }
      ],
      note:'Kelime + artikel (varsa) birlikte ezberle.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'la scuola',
      tr:'okul',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'l\'università',
      tr:'üniversite',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'il professore',
      tr:'öğretmen',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'lo studente',
      tr:'öğrenci',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'la lezione',
      tr:'ders',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Education & School',
      title_en:'Education & School',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'la scuola',
          tr:'okul',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'la scuola',
              tr:'okul',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'l\'università',
          tr:'üniversite',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'l\'università',
              tr:'üniversite',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'il professore',
          tr:'öğretmen',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'lo studente',
          tr:'öğrenci',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'la scuola.',
      tr:'la scuola.',
      questions:[
        {
          q:'?',
          opts:[
            'la scuola',
            'l\'università',
            'il professore',
            'lo studente'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'??',
          opts:[
            'l\'università',
            'il professore',
            'lo studente',
            'la lezione'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[15] = L15;
