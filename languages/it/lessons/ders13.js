// ders13.js — Italian Lesson 13: Social Life (beginner)
const L13 = {
  words:[
    {
      id:'w1',
      en:'la festa',
      ro:'la fes',
      tr:'parti',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'il cinema',
      ro:'il cin',
      tr:'sinema'
    },
    {
      id:'w3',
      en:'il concerto',
      ro:'il con',
      tr:'konser'
    },
    {
      id:'w4',
      en:'uscire',
      ro:'uscire',
      tr:'dışarı çıkmak'
    },
    {
      id:'w5',
      en:'incontrarsi',
      ro:'incont',
      tr:'buluşmak'
    },
    {
      id:'w6',
      en:'invitare',
      ro:'invita',
      tr:'davet etmek'
    },
    {
      id:'w7',
      en:'accettare',
      ro:'accett',
      tr:'kabul etmek'
    },
    {
      id:'w8',
      en:'rifiutare',
      ro:'rifiut',
      tr:'reddetmek'
    },
    {
      id:'w9',
      en:'l\'amico',
      ro:'l\'amic',
      tr:'arkadaş'
    },
    {
      id:'w10',
      en:'divertente',
      ro:'divert',
      tr:'eğlenceli'
    },
    {
      id:'w11',
      en:'noioso',
      ro:'noioso',
      tr:'sıkıcı'
    },
    {
      id:'w12',
      en:'Ci vediamo?',
      ro:'Ci ved',
      tr:'Buluşalım mı?'
    },
    {
      id:'w13',
      en:'il caffè',
      ro:'il caf',
      tr:'kahve'
    },
    {
      id:'w14',
      en:'la birra',
      ro:'la bir',
      tr:'bira'
    },
    {
      id:'w15',
      en:'festeggiare',
      ro:'festeg',
      tr:'kutlamak'
    },
    {
      id:'w16',
      en:'il compleanno',
      ro:'il com',
      tr:'doğum günü'
    },
    {
      id:'w17',
      en:'l\'invito',
      ro:'l\'invi',
      tr:'davet'
    },
    {
      id:'w18',
      en:'il programma',
      ro:'il pro',
      tr:'plan'
    },
    {
      id:'w19',
      en:'Cosa fai questo weekend?',
      ro:'Cosa f',
      tr:'Bu hafta sonu ne yapıyorsun?'
    },
    {
      id:'w20',
      en:'Ci vediamo',
      ro:'Ci ved',
      tr:'Görüşürüz'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Social Life — Temel',
      title_en:'Social Life — Basics',
      explanation:'Bu derste Social Life konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'la festa',
          example:'la festa',
          tr:'parti'
        },
        {
          pronoun:'Pratik',
          form:'il cinema',
          example:'il cinema',
          tr:'sinema'
        }
      ],
      note:'Kelime + artikel (varsa) birlikte ezberle.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'la festa',
      tr:'parti',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'il cinema',
      tr:'sinema',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'il concerto',
      tr:'konser',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'uscire',
      tr:'dışarı çıkmak',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'incontrarsi',
      tr:'buluşmak',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Social Life',
      title_en:'Social Life',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'la festa',
          tr:'parti',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'la festa',
              tr:'parti',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'il cinema',
          tr:'sinema',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'il cinema',
              tr:'sinema',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'il concerto',
          tr:'konser',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'uscire',
          tr:'dışarı çıkmak',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'la festa.',
      tr:'la festa.',
      questions:[
        {
          q:'?',
          opts:[
            'la festa',
            'il cinema',
            'il concerto',
            'uscire'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'??',
          opts:[
            'il cinema',
            'il concerto',
            'uscire',
            'incontrarsi'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[13] = L13;
