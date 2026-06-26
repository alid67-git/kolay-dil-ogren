// ders12.js — Arabic Lesson 12: Phone (beginner)
const L12 = {
  words:[
    {
      id:'w1',
      en:'يتصل',
      ro:'yattaṣil',
      tr:'aramak',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'الرسالة',
      ro:'ar-risāla',
      tr:'mesaj'
    },
    {
      id:'w3',
      en:'البريد الإلكتروني',
      ro:'al-barīd al-iliktrūnī',
      tr:'e-posta'
    },
    {
      id:'w4',
      en:'رقم الهاتف',
      ro:'raqm al-hātif',
      tr:'telefon numarası'
    },
    {
      id:'w5',
      en:'هل يمكنك التكرار؟',
      ro:'hal yumkinuka at-tikrār?',
      tr:'tekrar eder misiniz?'
    },
    {
      id:'w6',
      en:'السؤال',
      ro:'as-suʾāl',
      tr:'soru'
    },
    {
      id:'w7',
      en:'الجواب',
      ro:'al-jawāb',
      tr:'cevap'
    },
    {
      id:'w8',
      en:'يساعد',
      ro:'yusāʿid',
      tr:'yardım etmek'
    },
    {
      id:'w9',
      en:'اليوم',
      ro:'al-yawm',
      tr:'bugün'
    },
    {
      id:'w10',
      en:'غداً',
      ro:'ghadan',
      tr:'yarın'
    },
    {
      id:'w11',
      en:'الإنترنت',
      ro:'al-internet',
      tr:'internet'
    },
    {
      id:'w12',
      en:'التطبيق',
      ro:'at-taṭbīq',
      tr:'uygulama'
    },
    {
      id:'w13',
      en:'يحمل',
      ro:'yuḥammil',
      tr:'indirmek'
    },
    {
      id:'w14',
      en:'يرفع',
      ro:'yarfaʿ',
      tr:'yüklemek'
    },
    {
      id:'w15',
      en:'ينقر',
      ro:'yanqur',
      tr:'tıklamak'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Phone — Temel',
      title_en:'Phone — Basics',
      explanation:'Bu derste Phone konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'يتصل',
          example:'يتصل',
          tr:'aramak'
        },
        {
          pronoun:'Pratik',
          form:'الرسالة',
          example:'الرسالة',
          tr:'mesaj'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'يتصل',
      tr:'aramak',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'الرسالة',
      tr:'mesaj',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'البريد الإلكتروني',
      tr:'e-posta',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'رقم الهاتف',
      tr:'telefon numarası',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'هل يمكنك التكرار؟',
      tr:'tekrar eder misiniz?',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Phone',
      title_en:'Phone',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'يتصل',
          tr:'aramak',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'yattaṣil',
              tr:'aramak',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'الرسالة',
          tr:'mesaj',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'ar-risāla',
              tr:'mesaj',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'البريد الإلكتروني',
          tr:'e-posta',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'رقم الهاتف',
          tr:'telefon numarası',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'اتصل بي مساءً.',
      tr:'اتصل بي مساءً.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'يتصل',
            'الرسالة',
            'البريد الإلكتروني',
            'رقم الهاتف'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'الرسالة',
            'البريد الإلكتروني',
            'رقم الهاتف',
            'هل يمكنك التكرار؟'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[12] = L12;
