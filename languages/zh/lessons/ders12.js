// ders12.js — Chinese Lesson 12: Phone (beginner)
const L12 = {
  words:[
    {
      id:'w1',
      en:'打电话',
      ro:'dǎ diànhuà',
      tr:'aramak',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'消息',
      ro:'xiāoxi',
      tr:'mesaj'
    },
    {
      id:'w3',
      en:'电子邮件',
      ro:'diànzǐ yóujiàn',
      tr:'e-posta'
    },
    {
      id:'w4',
      en:'电话号码',
      ro:'diànhuà hàomǎ',
      tr:'telefon numarası'
    },
    {
      id:'w5',
      en:'请再说一遍',
      ro:'qǐng zài shuō yí biàn',
      tr:'tekrar eder misiniz?'
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
      en:'帮助',
      ro:'bāngzhù',
      tr:'yardım etmek'
    },
    {
      id:'w9',
      en:'今天',
      ro:'jīntiān',
      tr:'bugün'
    },
    {
      id:'w10',
      en:'明天',
      ro:'míngtiān',
      tr:'yarın'
    },
    {
      id:'w11',
      en:'互联网',
      ro:'hùliánwǎng',
      tr:'internet'
    },
    {
      id:'w12',
      en:'应用',
      ro:'yìngyòng',
      tr:'uygulama'
    },
    {
      id:'w13',
      en:'下载',
      ro:'xiàzài',
      tr:'indirmek'
    },
    {
      id:'w14',
      en:'上传',
      ro:'shàngchuán',
      tr:'yüklemek'
    },
    {
      id:'w15',
      en:'点击',
      ro:'diǎnjī',
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
          form:'打电话',
          example:'打电话',
          tr:'aramak'
        },
        {
          pronoun:'Pratik',
          form:'消息',
          example:'消息',
          tr:'mesaj'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'打电话',
      tr:'aramak',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'消息',
      tr:'mesaj',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'电子邮件',
      tr:'e-posta',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'电话号码',
      tr:'telefon numarası',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'请再说一遍',
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
          en:'打电话',
          tr:'aramak',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'dǎ diànhuà',
              tr:'aramak',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'消息',
          tr:'mesaj',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'xiāoxi',
              tr:'mesaj',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'电子邮件',
          tr:'e-posta',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'电话号码',
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
      transcript:'晚上给我打电话。',
      tr:'晚上给我打电话.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            '打电话',
            '消息',
            '电子邮件',
            '电话号码'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            '消息',
            '电子邮件',
            '电话号码',
            '请再说一遍'
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
