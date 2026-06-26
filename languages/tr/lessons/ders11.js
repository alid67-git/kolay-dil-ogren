// ders11.js — Turkish Lesson 11: Health (beginner)
const L11 = {
  words:[
    {
      id:'w1',
      en:'Doktor',
      ro:'dok-tor',
      tr:'doctor', tr_th:'หมอ',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Hastane',
      ro:'has-ta-ne',
      tr:'hospital', tr_th:'โรงพยาบาล'
    },
    {
      id:'w3',
      en:'Eczane',
      ro:'ej-za-ne',
      tr:'pharmacy', tr_th:'ร้านขายยา'
    },
    {
      id:'w4',
      en:'Ağrı',
      ro:'aa-ruh',
      tr:'pain'
    },
    {
      id:'w5',
      en:'Ateş',
      ro:'a-tesh',
      tr:'fever'
    },
    {
      id:'w6',
      en:'İlaç',
      ro:'i-lach',
      tr:'medicine'
    },
    {
      id:'w7',
      en:'Baş',
      ro:'bash',
      tr:'head'
    },
    {
      id:'w8',
      en:'Mide',
      ro:'mi-de',
      tr:'stomach'
    },
    {
      id:'w9',
      en:'Diş',
      ro:'dish',
      tr:'tooth'
    },
    {
      id:'w10',
      en:'El',
      ro:'el',
      tr:'hand'
    },
    {
      id:'w11',
      en:'Bacak',
      ro:'ba-jak',
      tr:'leg'
    },
    {
      id:'w12',
      en:'Yardım etmek',
      ro:'yar-duhm et-mek',
      tr:'to help', tr_th:'ช่วย'
    },
    {
      id:'w13',
      en:'Bugün',
      ro:'bu-guen',
      tr:'today', tr_th:'วันนี้'
    },
    {
      id:'w14',
      en:'Dinlenmek',
      ro:'din-len-mek',
      tr:'to rest'
    },
    {
      id:'w15',
      en:'Soru',
      ro:'so-ru',
      tr:'question', tr_th:'คำถาม'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Health — Temel',
      title_en:'Health — Basics',
      explanation:'Bu derste Health alanında sık kullanılan ifadeleri öğreniyorsun. Açıklamalar Türkçe verilir. Ali erkek öğrenci olarak örnek cümleleri kullanır.',
      table:[
        {
          pronoun:'Örnek 1',
          form:'Doktor',
          example:'Doktor',
          tr:'doctor', tr_th:'หมอ'
        },
        {
          pronoun:'Örnek 2',
          form:'Hastane',
          example:'Hastane',
          tr:'hospital', tr_th:'โรงพยาบาล'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Doktor',
      tr:'doctor', tr_th:'หมอ',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Hastane',
      tr:'hospital', tr_th:'โรงพยาบาล',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'Eczane',
      tr:'pharmacy', tr_th:'ร้านขายยา',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Ağrı',
      tr:'pain',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Ateş',
      tr:'fever',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Health',
      title_en:'Health',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Doktor',
          tr:'doctor', tr_th:'หมอ',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'dok-tor',
              tr:'doctor', tr_th:'หมอ',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Hastane',
          tr:'hospital', tr_th:'โรงพยาบาล',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'has-ta-ne',
              tr:'hospital', tr_th:'โรงพยาบาล',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Eczane',
          tr:'pharmacy', tr_th:'ร้านขายยา',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Ağrı',
          tr:'pain',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Başım ağrıyor, doktora gidiyorum.',
      tr:'My head hurts, I am going to the doctor.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'Doktor',
            'Hastane',
            'Eczane',
            'Ağrı'
          ],
          answer:0,
          tr:'Doğru kelimeyi seç.', tr_th:'เลือกคำที่ถูกต้อง'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'Hastane',
            'Eczane',
            'Ağrı',
            'Ateş'
          ],
          answer:1,
          tr:'İkinci ifadeyi seç.', tr_th:'เลือกประโยคที่สอง'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[11] = L11;
