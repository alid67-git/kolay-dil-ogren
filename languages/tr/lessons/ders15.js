// ders15.js — Turkish Lesson 15: Education (beginner)
const L15 = {
  words:[
    {
      id:'w1',
      en:'Eğitim',
      ro:'e-i-tim',
      tr:'education',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Okul',
      ro:'o-kul',
      tr:'school'
    },
    {
      id:'w3',
      en:'Üniversite',
      ro:'ue-ni-ver-si-te',
      tr:'university'
    },
    {
      id:'w4',
      en:'Öğrenci',
      ro:'oe-ren-ji',
      tr:'student'
    },
    {
      id:'w5',
      en:'Öğretmen',
      ro:'oe-ret-men',
      tr:'teacher'
    },
    {
      id:'w6',
      en:'Ders',
      ro:'ders',
      tr:'lesson'
    },
    {
      id:'w7',
      en:'Sınav',
      ro:'suh-nav',
      tr:'exam'
    },
    {
      id:'w8',
      en:'Soru',
      ro:'so-ru',
      tr:'question'
    },
    {
      id:'w9',
      en:'Cevap',
      ro:'je-vap',
      tr:'answer'
    },
    {
      id:'w10',
      en:'Okumak',
      ro:'o-ku-mak',
      tr:'to read'
    },
    {
      id:'w11',
      en:'Yazmak',
      ro:'yaz-mak',
      tr:'to write'
    },
    {
      id:'w12',
      en:'Öğrenmek',
      ro:'oe-ren-mek',
      tr:'to learn'
    },
    {
      id:'w13',
      en:'Dil',
      ro:'dil',
      tr:'language'
    },
    {
      id:'w14',
      en:'Çalışmak',
      ro:'cha-lush-mak',
      tr:'to study'
    },
    {
      id:'w15',
      en:'Bugün',
      ro:'bu-guen',
      tr:'today'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Education — Temel',
      title_en:'Education — Basics',
      explanation:'Bu derste Education alanında sık kullanılan ifadeleri öğreniyorsun. Açıklamalar Türkçe verilir. Ali erkek öğrenci olarak örnek cümleleri kullanır.',
      table:[
        {
          pronoun:'Örnek 1',
          form:'Eğitim',
          example:'Eğitim',
          tr:'education'
        },
        {
          pronoun:'Örnek 2',
          form:'Okul',
          example:'Okul',
          tr:'school'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Eğitim',
      tr:'education',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Okul',
      tr:'school',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'Üniversite',
      tr:'university',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Öğrenci',
      tr:'student',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Öğretmen',
      tr:'teacher',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Education',
      title_en:'Education',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Eğitim',
          tr:'education',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'e-i-tim',
              tr:'education',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Okul',
          tr:'school',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'o-kul',
              tr:'school',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Üniversite',
          tr:'university',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Öğrenci',
          tr:'student',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Bugün üniversitede Türkçe dersi var.',
      tr:'There is a Turkish lesson at the university today.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'Eğitim',
            'Okul',
            'Üniversite',
            'Öğrenci'
          ],
          answer:0,
          tr:'Doğru kelimeyi seç.'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'Okul',
            'Üniversite',
            'Öğrenci',
            'Öğretmen'
          ],
          answer:1,
          tr:'İkinci ifadeyi seç.'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[15] = L15;
