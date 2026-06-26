// ders17.js — Chinese Lesson 17: Emotions (beginner)
const L17 = {
  words:[
    {
      id:'w1',
      en:'高兴',
      ro:'gāoxìng',
      tr:'mutlu',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'难过',
      ro:'nánguò',
      tr:'üzgün'
    },
    {
      id:'w3',
      en:'累',
      ro:'lèi',
      tr:'yorgun'
    },
    {
      id:'w4',
      en:'生气',
      ro:'shēngqì',
      tr:'kızgın'
    },
    {
      id:'w5',
      en:'你好吗？',
      ro:'nǐ hǎo ma?',
      tr:'nasılsın?'
    },
    {
      id:'w6',
      en:'我很好',
      ro:'wǒ hěn hǎo',
      tr:'iyiyim'
    },
    {
      id:'w7',
      en:'也许',
      ro:'yěxǔ',
      tr:'belki'
    },
    {
      id:'w8',
      en:'确定',
      ro:'quèdìng',
      tr:'emin'
    },
    {
      id:'w9',
      en:'意见',
      ro:'yìjiàn',
      tr:'görüş'
    },
    {
      id:'w10',
      en:'同意',
      ro:'tóngyì',
      tr:'katılmak'
    },
    {
      id:'w11',
      en:'不同意',
      ro:'bù tóngyì',
      tr:'katılmamak'
    },
    {
      id:'w12',
      en:'谢谢',
      ro:'xièxie',
      tr:'teşekkür ederim'
    },
    {
      id:'w13',
      en:'祝你好运',
      ro:'zhù nǐ hǎoyùn',
      tr:'başarılar'
    },
    {
      id:'w14',
      en:'恭喜',
      ro:'gōngxǐ',
      tr:'tebrikler'
    },
    {
      id:'w15',
      en:'回头见',
      ro:'huítóu jiàn',
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
          form:'高兴',
          example:'高兴',
          tr:'mutlu'
        },
        {
          pronoun:'Pratik',
          form:'难过',
          example:'难过',
          tr:'üzgün'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'高兴',
      tr:'mutlu',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'难过',
      tr:'üzgün',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'累',
      tr:'yorgun',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'生气',
      tr:'kızgın',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'你好吗？',
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
          en:'高兴',
          tr:'mutlu',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'gāoxìng',
              tr:'mutlu',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'难过',
          tr:'üzgün',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'nánguò',
              tr:'üzgün',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'累',
          tr:'yorgun',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'生气',
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
      transcript:'我累了，但很高兴。',
      tr:'我累了，但很高兴.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            '高兴',
            '难过',
            '累',
            '生气'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            '难过',
            '累',
            '生气',
            '你好吗？'
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
