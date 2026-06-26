// ders15.js — Turkish Lesson 15: Education (beginner)
const L15 = {
  words:[
    {
      id:'w1',
      en:'Eğitim',
      ro:'e-i-tim',
      tr:'education', tr_th:'การศึกษา',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Okul',
      ro:'o-kul',
      tr:'school', tr_th:'โรงเรียน'
    },
    {
      id:'w3',
      en:'Üniversite',
      ro:'ue-ni-ver-si-te',
      tr:'university', tr_th:'มหาวิทยาลัย'
    },
    {
      id:'w4',
      en:'Öğrenci',
      ro:'oe-ren-ji',
      tr:'student', tr_th:'นักเรียน'
    },
    {
      id:'w5',
      en:'Öğretmen',
      ro:'oe-ret-men',
      tr:'teacher', tr_th:'ครู'
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
      tr:'question', tr_th:'คำถาม'
    },
    {
      id:'w9',
      en:'Cevap',
      ro:'je-vap',
      tr:'answer', tr_th:'คำตอบ'
    },
    {
      id:'w10',
      en:'Okumak',
      ro:'o-ku-mak',
      tr:'to read', tr_th:'อ่าน'
    },
    {
      id:'w11',
      en:'Yazmak',
      ro:'yaz-mak',
      tr:'to write', tr_th:'เขียน'
    },
    {
      id:'w12',
      en:'Öğrenmek',
      ro:'oe-ren-mek',
      tr:'to learn', tr_th:'เรียน'
    },
    {
      id:'w13',
      en:'Dil',
      ro:'dil',
      tr:'language', tr_th:'ภาษา'
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
      tr:'today', tr_th:'วันนี้'
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
          tr:'education', tr_th:'การศึกษา'
        },
        {
          pronoun:'Örnek 2',
          form:'Okul',
          example:'Okul',
          tr:'school', tr_th:'โรงเรียน'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Eğitim',
      tr:'education', tr_th:'การศึกษา',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Okul',
      tr:'school', tr_th:'โรงเรียน',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'Üniversite',
      tr:'university', tr_th:'มหาวิทยาลัย',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Öğrenci',
      tr:'student', tr_th:'นักเรียน',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Öğretmen',
      tr:'teacher', tr_th:'ครู',
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
          tr:'education', tr_th:'การศึกษา',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'e-i-tim',
              tr:'education', tr_th:'การศึกษา',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Okul',
          tr:'school', tr_th:'โรงเรียน',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'o-kul',
              tr:'school', tr_th:'โรงเรียน',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Üniversite',
          tr:'university', tr_th:'มหาวิทยาลัย',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Öğrenci',
          tr:'student', tr_th:'นักเรียน',
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
          tr:'Doğru kelimeyi seç.', tr_th:'เลือกคำที่ถูกต้อง'
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
          tr:'İkinci ifadeyi seç.', tr_th:'เลือกประโยคที่สอง'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[15] = L15;
