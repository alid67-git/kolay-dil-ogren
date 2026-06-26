// ders20.js — Arabic Lesson 20: Daily Conversation (beginner)
const L20 = {
  words:[
    {
      id:'w1',
      en:'مرحباً',
      ro:'marhaban',
      tr:'merhaba',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'كيف حالك؟',
      ro:'kayfa ḥāluka?',
      tr:'nasılsın?'
    },
    {
      id:'w3',
      en:'أنا بخير',
      ro:'anā bikhayr',
      tr:'iyiyim'
    },
    {
      id:'w4',
      en:'شكراً',
      ro:'shukran',
      tr:'teşekkür ederim'
    },
    {
      id:'w5',
      en:'من فضلك',
      ro:'min faḍlik',
      tr:'lütfen'
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
      en:'أين؟',
      ro:'ayna?',
      tr:'nerede?'
    },
    {
      id:'w9',
      en:'متى؟',
      ro:'matā?',
      tr:'ne zaman?'
    },
    {
      id:'w10',
      en:'لماذا؟',
      ro:'limādhā?',
      tr:'neden?'
    },
    {
      id:'w11',
      en:'كيف؟',
      ro:'kayfa?',
      tr:'nasıl?'
    },
    {
      id:'w12',
      en:'هل يمكنك المساعدة؟',
      ro:'hal yumkinuka al-musāʿada?',
      tr:'yardım eder misiniz?'
    },
    {
      id:'w13',
      en:'لا أعرف',
      ro:'lā aʿrif',
      tr:'bilmiyorum'
    },
    {
      id:'w14',
      en:'بالطبع',
      ro:'biṭ-ṭabʿ',
      tr:'tabii ki'
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
      title:'Daily Conversation — Temel',
      title_en:'Daily Conversation — Basics',
      explanation:'Bu derste Daily Conversation konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'مرحباً',
          example:'مرحباً',
          tr:'merhaba'
        },
        {
          pronoun:'Pratik',
          form:'كيف حالك؟',
          example:'كيف حالك؟',
          tr:'nasılsın?'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'مرحباً',
      tr:'merhaba',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'كيف حالك؟',
      tr:'nasılsın?',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'أنا بخير',
      tr:'iyiyim',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'شكراً',
      tr:'teşekkür ederim',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'من فضلك',
      tr:'lütfen',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Daily Conversation',
      title_en:'Daily Conversation',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'مرحباً',
          tr:'merhaba',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'marhaban',
              tr:'merhaba',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'كيف حالك؟',
          tr:'nasılsın?',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'kayfa ḥāluka?',
              tr:'nasılsın?',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'أنا بخير',
          tr:'iyiyim',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'شكراً',
          tr:'teşekkür ederim',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'مرحباً! كيف حالك؟ كل شيء بخير.',
      tr:'مرحباً! كيف حالك؟ كل شيء بخير.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'مرحباً',
            'كيف حالك؟',
            'أنا بخير',
            'شكراً'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'كيف حالك؟',
            'أنا بخير',
            'شكراً',
            'من فضلك'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[20] = L20;
