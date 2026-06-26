// ders17.js — Russian Lesson 17: Emotions (beginner)
const L17 = {
  words:[
    {
      id:'w1',
      en:'счастливый',
      ro:'schastlivyy',
      tr:'mutlu',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'грустный',
      ro:'grustnyy',
      tr:'üzgün'
    },
    {
      id:'w3',
      en:'уставший',
      ro:'ustavshiy',
      tr:'yorgun'
    },
    {
      id:'w4',
      en:'злой',
      ro:'zloy',
      tr:'kızgın'
    },
    {
      id:'w5',
      en:'как дела?',
      ro:'kak dela',
      tr:'nasılsın?'
    },
    {
      id:'w6',
      en:'я в порядке',
      ro:'ya v poryadke',
      tr:'iyiyim'
    },
    {
      id:'w7',
      en:'может быть',
      ro:'mozhet byt',
      tr:'belki'
    },
    {
      id:'w8',
      en:'уверен',
      ro:'uveren',
      tr:'emin'
    },
    {
      id:'w9',
      en:'мнение',
      ro:'mneniye',
      tr:'görüş'
    },
    {
      id:'w10',
      en:'согласен',
      ro:'soglasen',
      tr:'katılmak'
    },
    {
      id:'w11',
      en:'не согласен',
      ro:'ne soglasen',
      tr:'katılmamak'
    },
    {
      id:'w12',
      en:'спасибо',
      ro:'spasibo',
      tr:'teşekkür ederim'
    },
    {
      id:'w13',
      en:'удачи',
      ro:'udachi',
      tr:'başarılar'
    },
    {
      id:'w14',
      en:'поздравляю',
      ro:'pozdravlyayu',
      tr:'tebrikler'
    },
    {
      id:'w15',
      en:'увидимся',
      ro:'uvidimsya',
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
          form:'счастливый',
          example:'счастливый',
          tr:'mutlu'
        },
        {
          pronoun:'Pratik',
          form:'грустный',
          example:'грустный',
          tr:'üzgün'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'счастливый',
      tr:'mutlu',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'грустный',
      tr:'üzgün',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'уставший',
      tr:'yorgun',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'злой',
      tr:'kızgın',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'как дела?',
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
          en:'счастливый',
          tr:'mutlu',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'schastlivyy',
              tr:'mutlu',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'грустный',
          tr:'üzgün',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'grustnyy',
              tr:'üzgün',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'уставший',
          tr:'yorgun',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'злой',
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
      transcript:'Я устал, но счастлив.',
      tr:'Я устал, но счастлив.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'счастливый',
            'грустный',
            'уставший',
            'злой'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'грустный',
            'уставший',
            'злой',
            'как дела?'
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
