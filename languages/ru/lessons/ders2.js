// ders2.js — Russian Lesson 2: Падежи & быть (beginner)
const L2 = {
  words:[
    {
      id:'w1',
      en:'я',
      ro:'ya',
      tr:'ben'
    },
    {
      id:'w2',
      en:'ты',
      ro:'ty',
      tr:'sen'
    },
    {
      id:'w3',
      en:'он',
      ro:'on',
      tr:'o (erkek)'
    },
    {
      id:'w4',
      en:'она',
      ro:'ona',
      tr:'o (kadın)'
    },
    {
      id:'w5',
      en:'это',
      ro:'eto',
      tr:'bu'
    },
    {
      id:'w6',
      en:'студент',
      ro:'student',
      tr:'öğrenci (erkek)'
    },
    {
      id:'w7',
      en:'студентка',
      ro:'studentka',
      tr:'öğrenci (kadın)'
    },
    {
      id:'w8',
      en:'учитель',
      ro:'uchitel',
      tr:'öğretmen'
    },
    {
      id:'w9',
      en:'книга',
      ro:'kniga',
      tr:'kitap'
    },
    {
      id:'w10',
      en:'город',
      ro:'gorod',
      tr:'şehir'
    },
    {
      id:'w11',
      en:'быть',
      ro:'byt',
      tr:'olmak'
    },
    {
      id:'w12',
      en:'есть',
      ro:'yest',
      tr:'var / olmak (yardımcı)'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Nominatif ve Cinsiyet',
      title_en:'Nominative and Gender',
      explanation:'Rusçada temel özne hali nominatiftir. Erkek-kadın biçimleri isimde değişebilir: студент / студентка. Sıfat ve zamir eşleşmesine dikkat et.',
      table:[
        {
          pronoun:'Ben',
          form:'я студент',
          example:'Я студент.',
          tr:'Ben öğrenciyim (erkek).'
        },
        {
          pronoun:'Kadın',
          form:'она студентка',
          example:'Она студентка.',
          tr:'O öğrencidir (kadın).'
        }
      ],
      note:'Ali erkek olduğu için öğrenci cümlelerinde студент formunu kullanır.'
    },
    {
      id:'g2',
      title:'быть fiili ve sıfır bağlaç',
      title_en:'быть and zero copula',
      explanation:'Rusçada şimdiki zamanda "olmak" fiili çoğu zaman düşer: Я студент. Geçmiş/gelecekte быть çekimi kullanılır.',
      table:[
        {
          pronoun:'Şimdiki',
          form:'Я студент.',
          example:'Я студент.',
          tr:'Ben öğrenciyim.'
        },
        {
          pronoun:'Varlık',
          form:'У меня есть книга.',
          example:'У меня есть книга.',
          tr:'Bende bir kitap var.'
        }
      ],
      note:'есть çoğu zaman "var" anlamı için kullanılır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Я студент.',
      tr:'Ben öğrenciyim.',
      prompt:'Kimliğini söyle'
    },
    {
      id:'sp2',
      en:'Это книга.',
      tr:'Bu bir kitap.',
      prompt:'Nesne tanıt'
    },
    {
      id:'sp3',
      en:'Это мой город.',
      tr:'Bu benim şehrim.',
      prompt:'Sahiplik kur'
    },
    {
      id:'sp4',
      en:'У меня есть вопрос.',
      tr:'Benim bir sorum var.',
      prompt:'есть kullan'
    },
    {
      id:'sp5',
      en:'Она учитель.',
      tr:'O öğretmen.',
      prompt:'3. tekil kur'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Sınıfta Tanışma',
      title_en:'In Class',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Я студент. Меня зовут Али.',
          tr:'Ben öğrenciyim. Benim adım Ali.',
          bd:[
            {
              ro:'ya student',
              tr:'Ben öğrenciyim',
              role:'V',
              note:'Şimdiki zamanda быть düşer.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Я учитель. Это книга.',
          tr:'Ben öğretmenim. Bu kitap.',
          bd:[]
        },
        {
          speaker:'A',
          gender:'m',
          en:'У меня есть вопрос.',
          tr:'Bir sorum var.',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Хорошо, спрашивайте.',
          tr:'Tamam, sorun.',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Я студент. Это моя книга. У меня есть тетрадь.',
      tr:'Ben öğrenciyim. Bu benim kitabım. Bende bir defter var.',
      questions:[
        {
          q:'Konuşan kişi kim?',
          opts:[
            'учитель',
            'студент',
            'врач',
            'инженер'
          ],
          answer:1,
          tr:'Kim konuşuyor?'
        },
        {
          q:'Ne var?',
          opts:[
            'машина',
            'тетрадь',
            'стол',
            'чай'
          ],
          answer:1,
          tr:'Hangi nesne var?'
        },
        {
          q:'Hangi yapı varlık bildiriyor?',
          opts:[
            'есть',
            'нет',
            'буду',
            'был'
          ],
          answer:0,
          tr:'Varlık fiili'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[2] = L2;
