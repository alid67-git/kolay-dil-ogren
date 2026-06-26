// ders2.js — Turkish Lesson 2: Ekler & -de/-da (beginner)
const L2 = {
  words:[
    {
      id:'w1',
      en:'Ev',
      ro:'ev',
      tr:'house', tr_th:'บ้าน'
    },
    {
      id:'w2',
      en:'Okul',
      ro:'o-kul',
      tr:'school', tr_th:'โรงเรียน'
    },
    {
      id:'w3',
      en:'Ofis',
      ro:'o-fis',
      tr:'office', tr_th:'สำนักงาน'
    },
    {
      id:'w4',
      en:'Park',
      ro:'park',
      tr:'park'
    },
    {
      id:'w5',
      en:'Otel',
      ro:'o-tel',
      tr:'hotel', tr_th:'โรงแรม'
    },
    {
      id:'w6',
      en:'Evde',
      ro:'ev-de',
      tr:'at home'
    },
    {
      id:'w7',
      en:'Okulda',
      ro:'o-kul-da',
      tr:'at school'
    },
    {
      id:'w8',
      en:'Ofiste',
      ro:'o-fis-te',
      tr:'at the office'
    },
    {
      id:'w9',
      en:'Parkta',
      ro:'park-ta',
      tr:'in the park'
    },
    {
      id:'w10',
      en:'Otelde',
      ro:'o-tel-de',
      tr:'at the hotel'
    },
    {
      id:'w11',
      en:'Ben evdeyim.',
      ro:'ben ev-de-yim',
      tr:'I am at home'
    },
    {
      id:'w12',
      en:'Ali okulda.',
      ro:'a-li o-kul-da',
      tr:'Ali is at school'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Büyük ve Küçük Ünlü Uyumu',
      title_en:'Vowel Harmony',
      explanation:'Türkçede ekler, kelimenin son ünlüsüne göre uyumlanır. Kalın ünlüler (a, ı, o, u) ve ince ünlüler (e, i, ö, ü) ek seçiminde belirleyicidir. Bu uyum Türkçeyi doğal konuşmanın temelidir.',
      table:[
        {
          pronoun:'Kalın',
          form:'a/ı/o/u',
          example:'okul-da',
          tr:'back vowel harmony'
        },
        {
          pronoun:'İnce',
          form:'e/i/ö/ü',
          example:'ev-de',
          tr:'front vowel harmony'
        },
        {
          pronoun:'Örnek',
          form:'ev-de / okul-da',
          example:'Ali evde.',
          tr:'Ali is at home.'
        }
      ],
      note:'Kelimeyi ezberlerken son ünlüyü fark et; doğru ek seçimi otomatikleşir.'
    },
    {
      id:'g2',
      title:'Bulunma Hali: -de/-da (-te/-ta)',
      title_en:'Locative Suffix',
      explanation:'Bulunma hali bir şeyin nerede olduğunu söyler. Temel biçim -de/-da şeklindedir. Sert ünsüzden sonra ses uyumu ile -te/-ta görülebilir (ör. parkta). Başlangıçta kalıbı bütün olarak öğrenmek en güvenli yöntemdir.',
      table:[
        {
          pronoun:'İnce',
          form:'-de',
          example:'evde',
          tr:'at home'
        },
        {
          pronoun:'Kalın',
          form:'-da',
          example:'okulda',
          tr:'at school'
        },
        {
          pronoun:'Sert ünsüz',
          form:'-te/-ta',
          example:'parkta',
          tr:'in the park'
        }
      ],
      note:'Ali erkek öğrenci örneklerinde konum bildirirken bu eki düzenli kullanır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Ben evdeyim.',
      tr:'I am at home',
      prompt:'Konum söyle'
    },
    {
      id:'sp2',
      en:'Ali okulda.',
      tr:'Ali is at school',
      prompt:'Konum bildir'
    },
    {
      id:'sp3',
      en:'Ofisteyim.',
      tr:'I am at the office',
      prompt:'Kısa cevap ver'
    },
    {
      id:'sp4',
      en:'Parkta buluşalım.',
      tr:'Let us meet in the park',
      prompt:'Öneri yap'
    },
    {
      id:'sp5',
      en:'Oteldeyiz.',
      tr:'We are at the hotel',
      prompt:'Çoğul cümle kur'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Neredesin?',
      title_en:'Where are you?',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Neredesin?',
          tr:'Where are you?',
          gramNote:'Ali soru soruyor.',
          bd:[
            {
              ro:'ne-re-de-sin',
              tr:'where are you?',
              role:'question',
              note:'Konum sorusu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Ben evdeyim.',
          tr:'I am at home',
          bd:[]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Ben de ofisteyim.',
          tr:'I am also at the office',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Akşam parkta buluşalım.',
          tr:'Let us meet in the park in the evening',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Ali okulda. Anna evde. Akşam parkta buluşuyorlar.',
      tr:'Ali is at school. Anna is at home. They meet in the park in the evening.',
      questions:[
        {
          q:'Ali nerede?',
          opts:[
            'Okulda',
            'Evde',
            'Otelde',
            'Markette'
          ],
          answer:0,
          tr:'Doğru konumu seç.'
        },
        {
          q:'Anna nerede?',
          opts:[
            'Ofiste',
            'Evde',
            'Parkta',
            'Trende'
          ],
          answer:1,
          tr:'Doğru konumu seç.'
        },
        {
          q:'Buluşma nerede?',
          opts:[
            'Otelde',
            'Restoranda',
            'Parkta',
            'Evde'
          ],
          answer:2,
          tr:'Doğru konumu seç.'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[2] = L2;
