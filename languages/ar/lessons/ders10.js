// ders10.js — Arabic Lesson 10: Work (beginner)
const L10 = {
  words:[
    {
      id:'w1',
      en:'العمل',
      ro:'al-ʿamal',
      tr:'iş',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'المكتب',
      ro:'al-maktab',
      tr:'ofis'
    },
    {
      id:'w3',
      en:'الشركة',
      ro:'ash-sharika',
      tr:'şirket'
    },
    {
      id:'w4',
      en:'الاجتماع',
      ro:'al-ijtimāʿ',
      tr:'toplantı'
    },
    {
      id:'w5',
      en:'العقد',
      ro:'al-ʿaqd',
      tr:'sözleşme'
    },
    {
      id:'w6',
      en:'الراتب',
      ro:'ar-rātib',
      tr:'maaş'
    },
    {
      id:'w7',
      en:'الحاسوب',
      ro:'al-ḥāsūb',
      tr:'bilgisayar'
    },
    {
      id:'w8',
      en:'الإنترنت',
      ro:'al-internet',
      tr:'internet'
    },
    {
      id:'w9',
      en:'البريد الإلكتروني',
      ro:'al-barīd al-iliktrūnī',
      tr:'e-posta'
    },
    {
      id:'w10',
      en:'السؤال',
      ro:'as-suʾāl',
      tr:'soru'
    },
    {
      id:'w11',
      en:'الجواب',
      ro:'al-jawāb',
      tr:'cevap'
    },
    {
      id:'w12',
      en:'يبدأ',
      ro:'yabdaʾ',
      tr:'başlamak'
    },
    {
      id:'w13',
      en:'ينهي',
      ro:'yunhī',
      tr:'bitirmek'
    },
    {
      id:'w14',
      en:'يساعد',
      ro:'yusāʿid',
      tr:'yardım etmek'
    },
    {
      id:'w15',
      en:'مدير',
      ro:'mudīr',
      tr:'yönetici'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Work — Temel',
      title_en:'Work — Basics',
      explanation:'Bu derste Work konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'العمل',
          example:'العمل',
          tr:'iş'
        },
        {
          pronoun:'Pratik',
          form:'المكتب',
          example:'المكتب',
          tr:'ofis'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'العمل',
      tr:'iş',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'المكتب',
      tr:'ofis',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'الشركة',
      tr:'şirket',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'الاجتماع',
      tr:'toplantı',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'العقد',
      tr:'sözleşme',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Work',
      title_en:'Work',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'العمل',
          tr:'iş',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'al-ʿamal',
              tr:'iş',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'المكتب',
          tr:'ofis',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'al-maktab',
              tr:'ofis',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'الشركة',
          tr:'şirket',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'الاجتماع',
          tr:'toplantı',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'لدينا اجتماع في المكتب.',
      tr:'لدينا اجتماع في المكتب.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'العمل',
            'المكتب',
            'الشركة',
            'الاجتماع'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'المكتب',
            'الشركة',
            'الاجتماع',
            'العقد'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[10] = L10;
