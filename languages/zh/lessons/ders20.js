// ders20.js — Chinese Lesson 20: Daily Conversation (beginner)
const L20 = {
  words:[
    {
      id:'w1',
      en:'你好',
      ro:'nǐ hǎo',
      tr:'merhaba',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'你好吗？',
      ro:'nǐ hǎo ma?',
      tr:'nasılsın?'
    },
    {
      id:'w3',
      en:'我很好',
      ro:'wǒ hěn hǎo',
      tr:'iyiyim'
    },
    {
      id:'w4',
      en:'谢谢',
      ro:'xièxie',
      tr:'teşekkür ederim'
    },
    {
      id:'w5',
      en:'请',
      ro:'qǐng',
      tr:'lütfen'
    },
    {
      id:'w6',
      en:'问题',
      ro:'wèntí',
      tr:'soru'
    },
    {
      id:'w7',
      en:'回答',
      ro:'huídá',
      tr:'cevap'
    },
    {
      id:'w8',
      en:'在哪里？',
      ro:'zài nǎlǐ?',
      tr:'nerede?'
    },
    {
      id:'w9',
      en:'什么时候？',
      ro:'shénme shíhou?',
      tr:'ne zaman?'
    },
    {
      id:'w10',
      en:'为什么？',
      ro:'wèishénme?',
      tr:'neden?'
    },
    {
      id:'w11',
      en:'怎么？',
      ro:'zěnme?',
      tr:'nasıl?'
    },
    {
      id:'w12',
      en:'你能帮我吗？',
      ro:'nǐ néng bāng wǒ ma?',
      tr:'yardım eder misiniz?'
    },
    {
      id:'w13',
      en:'我不知道',
      ro:'wǒ bù zhīdào',
      tr:'bilmiyorum'
    },
    {
      id:'w14',
      en:'当然',
      ro:'dāngrán',
      tr:'tabii ki'
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
      title:'Daily Conversation — Temel',
      title_en:'Daily Conversation — Basics',
      explanation:'Bu derste Daily Conversation konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'你好',
          example:'你好',
          tr:'merhaba'
        },
        {
          pronoun:'Pratik',
          form:'你好吗？',
          example:'你好吗？',
          tr:'nasılsın?'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'你好',
      tr:'merhaba',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'你好吗？',
      tr:'nasılsın?',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'我很好',
      tr:'iyiyim',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'谢谢',
      tr:'teşekkür ederim',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'请',
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
          en:'你好',
          tr:'merhaba',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'nǐ hǎo',
              tr:'merhaba',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'你好吗？',
          tr:'nasılsın?',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'nǐ hǎo ma?',
              tr:'nasılsın?',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'我很好',
          tr:'iyiyim',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'谢谢',
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
      transcript:'你好！你好吗？都很好。',
      tr:'你好！你好吗？都很好.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            '你好',
            '你好吗？',
            '我很好',
            '谢谢'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            '你好吗？',
            '我很好',
            '谢谢',
            '请'
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
