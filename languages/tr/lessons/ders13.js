// ders13.js — Turkish Lesson 13: Social (beginner)
const L13 = {
  words:[
    {
      id:'w1',
      en:'Arkadaş',
      ro:'ar-ka-dash',
      tr:'friend',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Parti',
      ro:'par-ti',
      tr:'party'
    },
    {
      id:'w3',
      en:'Sinema',
      ro:'si-ne-ma',
      tr:'cinema'
    },
    {
      id:'w4',
      en:'Müzik',
      ro:'mue-zik',
      tr:'music'
    },
    {
      id:'w5',
      en:'Davet etmek',
      ro:'da-vet et-mek',
      tr:'to invite'
    },
    {
      id:'w6',
      en:'Kutlamak',
      ro:'kut-la-mak',
      tr:'to celebrate'
    },
    {
      id:'w7',
      en:'Bugün',
      ro:'bu-guen',
      tr:'today'
    },
    {
      id:'w8',
      en:'Yarın',
      ro:'ya-ruhn',
      tr:'tomorrow'
    },
    {
      id:'w9',
      en:'Mutlu',
      ro:'mut-lu',
      tr:'happy'
    },
    {
      id:'w10',
      en:'Soru',
      ro:'so-ru',
      tr:'question'
    },
    {
      id:'w11',
      en:'Cevap',
      ro:'je-vap',
      tr:'answer'
    },
    {
      id:'w12',
      en:'Görüşürüz.',
      ro:'goe-ru-shue-ruz',
      tr:'see you'
    },
    {
      id:'w13',
      en:'Teşekkürler',
      ro:'te-shek-kuer-ler',
      tr:'thanks'
    },
    {
      id:'w14',
      en:'Hoşça kal',
      ro:'hosh-cha kal',
      tr:'goodbye'
    },
    {
      id:'w15',
      en:'Aile',
      ro:'a-i-le',
      tr:'family'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Social — Temel',
      title_en:'Social — Basics',
      explanation:'Bu derste Social alanında sık kullanılan ifadeleri öğreniyorsun. Açıklamalar Türkçe verilir. Ali erkek öğrenci olarak örnek cümleleri kullanır.',
      table:[
        {
          pronoun:'Örnek 1',
          form:'Arkadaş',
          example:'Arkadaş',
          tr:'friend'
        },
        {
          pronoun:'Örnek 2',
          form:'Parti',
          example:'Parti',
          tr:'party'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Arkadaş',
      tr:'friend',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Parti',
      tr:'party',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'Sinema',
      tr:'cinema',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Müzik',
      tr:'music',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Davet etmek',
      tr:'to invite',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Social',
      title_en:'Social',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Arkadaş',
          tr:'friend',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'ar-ka-dash',
              tr:'friend',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Parti',
          tr:'party',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'par-ti',
              tr:'party',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Sinema',
          tr:'cinema',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Müzik',
          tr:'music',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Yarın arkadaşlarla partiye gidiyoruz.',
      tr:'Tomorrow we are going to a party with friends.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'Arkadaş',
            'Parti',
            'Sinema',
            'Müzik'
          ],
          answer:0,
          tr:'Doğru kelimeyi seç.'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'Parti',
            'Sinema',
            'Müzik',
            'Davet etmek'
          ],
          answer:1,
          tr:'İkinci ifadeyi seç.'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[13] = L13;
