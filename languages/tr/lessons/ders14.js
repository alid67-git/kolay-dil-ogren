// ders14.js — Turkish Lesson 14: Home (beginner)
const L14 = {
  words:[
    {
      id:'w1',
      en:'Ev',
      ro:'ev',
      tr:'house', tr_th:'บ้าน',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Daire',
      ro:'da-i-re',
      tr:'apartment', tr_th:'อพาร์ตเมนต์'
    },
    {
      id:'w3',
      en:'Oda',
      ro:'o-da',
      tr:'room', tr_th:'ห้อง'
    },
    {
      id:'w4',
      en:'Mutfak',
      ro:'mut-fak',
      tr:'kitchen'
    },
    {
      id:'w5',
      en:'Banyo',
      ro:'ban-yo',
      tr:'bathroom'
    },
    {
      id:'w6',
      en:'Yatak',
      ro:'ya-tak',
      tr:'bed'
    },
    {
      id:'w7',
      en:'Masa',
      ro:'ma-sa',
      tr:'table', tr_th:'โต๊ะ'
    },
    {
      id:'w8',
      en:'Pencere',
      ro:'pen-je-re',
      tr:'window'
    },
    {
      id:'w9',
      en:'Kapı',
      ro:'ka-puh',
      tr:'door'
    },
    {
      id:'w10',
      en:'Anahtar',
      ro:'a-nah-tar',
      tr:'key', tr_th:'กุญแจ'
    },
    {
      id:'w11',
      en:'Temizlemek',
      ro:'te-miz-le-mek',
      tr:'to clean'
    },
    {
      id:'w12',
      en:'Açmak',
      ro:'ach-mak',
      tr:'to open'
    },
    {
      id:'w13',
      en:'Kapatmak',
      ro:'ka-pat-mak',
      tr:'to close'
    },
    {
      id:'w14',
      en:'Aile',
      ro:'a-i-le',
      tr:'family'
    },
    {
      id:'w15',
      en:'Fiyat',
      ro:'fi-yat',
      tr:'price', tr_th:'ราคา'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Home — Temel',
      title_en:'Home — Basics',
      explanation:'Bu derste Home alanında sık kullanılan ifadeleri öğreniyorsun. Açıklamalar Türkçe verilir. Ali erkek öğrenci olarak örnek cümleleri kullanır.',
      table:[
        {
          pronoun:'Örnek 1',
          form:'Ev',
          example:'Ev',
          tr:'house', tr_th:'บ้าน'
        },
        {
          pronoun:'Örnek 2',
          form:'Daire',
          example:'Daire',
          tr:'apartment', tr_th:'อพาร์ตเมนต์'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Ev',
      tr:'house', tr_th:'บ้าน',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Daire',
      tr:'apartment', tr_th:'อพาร์ตเมนต์',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'Oda',
      tr:'room', tr_th:'ห้อง',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Mutfak',
      tr:'kitchen',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Banyo',
      tr:'bathroom',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Home',
      title_en:'Home',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Ev',
          tr:'house', tr_th:'บ้าน',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'ev',
              tr:'house', tr_th:'บ้าน',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Daire',
          tr:'apartment', tr_th:'อพาร์ตเมนต์',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'da-i-re',
              tr:'apartment', tr_th:'อพาร์ตเมนต์',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Oda',
          tr:'room', tr_th:'ห้อง',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Mutfak',
          tr:'kitchen',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Evde mutfak küçük ama çok temiz.',
      tr:'At home the kitchen is small but very clean.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'Ev',
            'Daire',
            'Oda',
            'Mutfak'
          ],
          answer:0,
          tr:'Doğru kelimeyi seç.', tr_th:'เลือกคำที่ถูกต้อง'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'Daire',
            'Oda',
            'Mutfak',
            'Banyo'
          ],
          answer:1,
          tr:'İkinci ifadeyi seç.', tr_th:'เลือกประโยคที่สอง'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[14] = L14;
