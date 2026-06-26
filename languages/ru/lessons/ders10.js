// ders10.js — Russian Lesson 10: Work (beginner)
const L10 = {
  words:[
    {
      id:'w1',
      en:'работа',
      ro:'rabota',
      tr:'iş',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'офис',
      ro:'ofis',
      tr:'ofis'
    },
    {
      id:'w3',
      en:'компания',
      ro:'kompaniya',
      tr:'şirket'
    },
    {
      id:'w4',
      en:'встреча',
      ro:'vstrecha',
      tr:'toplantı'
    },
    {
      id:'w5',
      en:'контракт',
      ro:'kontrakt',
      tr:'sözleşme'
    },
    {
      id:'w6',
      en:'зарплата',
      ro:'zarplata',
      tr:'maaş'
    },
    {
      id:'w7',
      en:'компьютер',
      ro:'kompyuter',
      tr:'bilgisayar'
    },
    {
      id:'w8',
      en:'интернет',
      ro:'internet',
      tr:'internet'
    },
    {
      id:'w9',
      en:'электронная почта',
      ro:'elektronnaya pochta',
      tr:'e-posta'
    },
    {
      id:'w10',
      en:'вопрос',
      ro:'vopros',
      tr:'soru'
    },
    {
      id:'w11',
      en:'ответ',
      ro:'otvet',
      tr:'cevap'
    },
    {
      id:'w12',
      en:'начинать',
      ro:'nachinat',
      tr:'başlamak'
    },
    {
      id:'w13',
      en:'заканчивать',
      ro:'zakanchivat',
      tr:'bitirmek'
    },
    {
      id:'w14',
      en:'помогать',
      ro:'pomogat',
      tr:'yardım etmek'
    },
    {
      id:'w15',
      en:'менеджер',
      ro:'menedzher',
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
          form:'работа',
          example:'работа',
          tr:'iş'
        },
        {
          pronoun:'Pratik',
          form:'офис',
          example:'офис',
          tr:'ofis'
        }
      ],
      note:'Kalıcı öğrenme için kelimeyi kısa bir cümle içinde tekrar et.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'работа',
      tr:'iş',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'офис',
      tr:'ofis',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'компания',
      tr:'şirket',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'встреча',
      tr:'toplantı',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'контракт',
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
          en:'работа',
          tr:'iş',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'rabota',
              tr:'iş',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'офис',
          tr:'ofis',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'ofis',
              tr:'ofis',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'компания',
          tr:'şirket',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'встреча',
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
      transcript:'У нас встреча в офисе.',
      tr:'У нас встреча в офисе.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'работа',
            'офис',
            'компания',
            'встреча'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'офис',
            'компания',
            'встреча',
            'контракт'
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
