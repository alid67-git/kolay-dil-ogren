// ders17.js - French Lesson 17: Emotions & Feelings (beginner)
const L17 = {
  words:[
    {
      id:'w1',
      en:'heureux',
      ro:'ö-rö',
      tr:'mutlu'
    },
    {
      id:'w2',
      en:'triste',
      ro:'trist',
      tr:'üzgün'
    },
    {
      id:'w3',
      en:'fatigué',
      ro:'fa-ti-ge',
      tr:'yorgun'
    },
    {
      id:'w4',
      en:'nerveux',
      ro:'ner-vö',
      tr:'gergin'
    },
    {
      id:'w5',
      en:'excité',
      ro:'ek-si-te',
      tr:'heyecanlı'
    },
    {
      id:'w6',
      en:'en colère',
      ro:'on ko-ler',
      tr:'kızgın'
    },
    {
      id:'w7',
      en:'avoir peur',
      ro:'a-vwar pör',
      tr:'korkmak'
    },
    {
      id:'w8',
      en:'se réjouir',
      ro:'sə re-jü-ir',
      tr:'sevinmek'
    },
    {
      id:'w9',
      en:'s\'ennuyer',
      ro:'sa-nü-ye',
      tr:'sıkılmak'
    },
    {
      id:'w10',
      en:'fier',
      ro:'fye',
      tr:'gururlu'
    },
    {
      id:'w11',
      en:'surpris',
      ro:'sür-pri',
      tr:'şaşırmış'
    },
    {
      id:'w12',
      en:'Je me sens...',
      ro:'jə mə son',
      tr:'Kendimi ... hissediyorum'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Duyguları Anlatma',
      title_en:'Expressing emotions',
      explanation:'Duygu anlatırken Je suis..., Je me sens... ve J\'ai peur kalıpları kullanılır.',
      table:[
        {
          pronoun:'Mutlu',
          form:'Je suis heureux',
          example:'Je suis heureux.',
          tr:'Mutluyum.'
        },
        {
          pronoun:'Üzgün',
          form:'Je suis triste',
          example:'Je suis triste.',
          tr:'Üzgünüm.'
        },
        {
          pronoun:'Korku',
          form:'J\'ai peur',
          example:'J\'ai peur.',
          tr:'Korkuyorum.'
        },
        {
          pronoun:'Soru',
          form:'Comment tu te sens ?',
          example:'Comment tu te sens ?',
          tr:'Nasıl hissediyorsun?'
        }
      ],
      note:'Refleksif yapılarda me/te zamirleri önemlidir.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Je suis heureux.',
      tr:'Mutluyum.',
      prompt:'Duygu söyle'
    },
    {
      id:'sp2',
      en:'Je suis fatigué.',
      tr:'Yorgunum.',
      prompt:'Durum söyle'
    },
    {
      id:'sp3',
      en:'J\'ai peur.',
      tr:'Korkuyorum.',
      prompt:'Korku söyle'
    },
    {
      id:'sp4',
      en:'Comment tu te sens ?',
      tr:'Nasıl hissediyorsun?',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Je me sens mieux.',
      tr:'Kendimi daha iyi hissediyorum.',
      prompt:'İyileşme söyle'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Émotions',
      title_en:'Emotions',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Tu as l\'air triste.',
          tr:'Üzgün görünüyorsun.',
          gramNote:'Gözlem cümlesi.',
          bd:[
            {
              ro:'avoir l\'air',
              tr:'gibi görünmek',
              role:'V',
              note:'Duygu betimler.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Oui, je suis fatigué.',
          tr:'Evet, yorgunum.',
          gramNote:'Kısa cevap.',
          bd:[
            {
              ro:'fatigué',
              tr:'yorgun',
              role:'adj',
              note:'Durum sıfatı.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Repose-toi un peu.',
          tr:'Biraz dinlen.',
          gramNote:'Öneri.',
          bd:[
            {
              ro:'Repose-toi',
              tr:'dinlen',
              role:'V',
              note:'Emir yapısı.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Merci, ça m\'aide.',
          tr:'Teşekkürler, bu yardımcı oluyor.',
          gramNote:'Olumlu kapanış.',
          bd:[
            {
              ro:'ça m\'aide',
              tr:'yardımcı oluyor',
              role:'V',
              note:'Yardım ifadesi.'
            }
          ]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Ali est très heureux aujourd\'hui. Il a réussi son examen et il est fier.',
      tr:'Ali bugün çok mutlu. Sınavı geçti ve gururlu.',
      questions:[
        {
          q:'Ali est...',
          opts:[
            'triste',
            'heureux',
            'fatigué',
            'malade'
          ],
          answer:1,
          tr:'Ali nasıl?'
        },
        {
          q:'Pourquoi ?',
          opts:[
            'examen réussi',
            'voyage',
            'retard',
            'pluie'
          ],
          answer:0,
          tr:'Neden?'
        },
        {
          q:'Sentiment final ?',
          opts:[
            'peur',
            'fierté',
            'colère',
            'ennui'
          ],
          answer:1,
          tr:'Son duygu?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[17] = L17;
