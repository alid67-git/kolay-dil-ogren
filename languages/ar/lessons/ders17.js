// ders17.js — Arabic Lesson 17: Emotions (beginner)
const L17 = {
  words:[
    {
      id:'w1',
      en:'سعيد',
      ro:'saʿīd',
      tr:'mutlu',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'حزين',
      ro:'ḥazīn',
      tr:'üzgün'
    },
    {
      id:'w3',
      en:'متعب',
      ro:'mutaʿab',
      tr:'yorgun'
    },
    {
      id:'w4',
      en:'غاضب',
      ro:'ghāḍib',
      tr:'kızgın'
    },
    {
      id:'w5',
      en:'كيف حالك؟',
      ro:'kayfa ḥāluka?',
      tr:'nasılsın?'
    },
    {
      id:'w6',
      en:'أنا بخير',
      ro:'anā bikhayr',
      tr:'iyiyim'
    },
    {
      id:'w7',
      en:'ربما',
      ro:'rubbamā',
      tr:'belki'
    },
    {
      id:'w8',
      en:'متأكد',
      ro:'mutaʾakkid',
      tr:'emin'
    },
    {
      id:'w9',
      en:'الرأي',
      ro:'ar-raʾy',
      tr:'görüş'
    },
    {
      id:'w10',
      en:'أوافق',
      ro:'uwāfiq',
      tr:'katılmak'
    },
    {
      id:'w11',
      en:'لا أوافق',
      ro:'lā uwāfiq',
      tr:'katılmamak'
    },
    {
      id:'w12',
      en:'شكراً',
      ro:'shukran',
      tr:'teşekkür ederim'
    },
    {
      id:'w13',
      en:'بالتوفيق',
      ro:'bit-tawfīq',
      tr:'başarılar'
    },
    {
      id:'w14',
      en:'مبروك',
      ro:'mabrūk',
      tr:'tebrikler'
    },
    {
      id:'w15',
      en:'أراك لاحقاً',
      ro:'arāka lāḥiqan',
      tr:'görüşürüz'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Emotions — Temel',
      title_en:'Emotions — Basics',
      explanation:'Bu derste Emotions konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'سعيد',
          example:'سعيد',
          tr:'mutlu'
        },
        {
          pronoun:'Pratik',
          form:'حزين',
          example:'حزين',
          tr:'üzgün'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'سعيد',
      tr:'mutlu',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'حزين',
      tr:'üzgün',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'متعب',
      tr:'yorgun',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'غاضب',
      tr:'kızgın',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'كيف حالك؟',
      tr:'nasılsın?',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Emotions',
      title_en:'Emotions',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'سعيد',
          tr:'mutlu',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'saʿīd',
              tr:'mutlu',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'حزين',
          tr:'üzgün',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'ḥazīn',
              tr:'üzgün',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'متعب',
          tr:'yorgun',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'غاضب',
          tr:'kızgın',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'أنا متعب لكن سعيد.',
      tr:'أنا متعب لكن سعيد.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'سعيد',
            'حزين',
            'متعب',
            'غاضب'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'حزين',
            'متعب',
            'غاضب',
            'كيف حالك؟'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[17] = L17;
