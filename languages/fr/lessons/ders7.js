// ders7.js - French Lesson 7: Directions (beginner)
const L7 = {
  words:[
    {
      id:'w1',
      en:'Où est... ?',
      ro:'u e',
      tr:'... nerede?'
    },
    {
      id:'w2',
      en:'à gauche',
      ro:'a goş',
      tr:'sol'
    },
    {
      id:'w3',
      en:'à droite',
      ro:'a drwat',
      tr:'sağ'
    },
    {
      id:'w4',
      en:'tout droit',
      ro:'tu drwa',
      tr:'düz'
    },
    {
      id:'w5',
      en:'le coin',
      ro:'luh kwan',
      tr:'köşe'
    },
    {
      id:'w6',
      en:'la rue',
      ro:'la rü',
      tr:'sokak'
    },
    {
      id:'w7',
      en:'la gare',
      ro:'la gar',
      tr:'istasyon'
    },
    {
      id:'w8',
      en:'l\'arrêt',
      ro:'la-re',
      tr:'durak'
    },
    {
      id:'w9',
      en:'le feu',
      ro:'luh fö',
      tr:'trafik lambası'
    },
    {
      id:'w10',
      en:'traverser',
      ro:'tra-ver-se',
      tr:'karşıdan geçmek'
    },
    {
      id:'w11',
      en:'le carrefour',
      ro:'luh kar-fur',
      tr:'kavşak'
    },
    {
      id:'w12',
      en:'près de',
      ro:'pre dü',
      tr:'yakında'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Yol Tarifi',
      title_en:'Directions',
      explanation:'Yol tarifi verirken tout droit, à gauche, à droite kalıpları kullanılır. Yer sormada Oû est... ? temel sorudur.',
      table:[
        {
          pronoun:'Soru',
          form:'Où est... ?',
          example:'Où est la gare ?',
          tr:'İstasyon nerede?'
        },
        {
          pronoun:'Düz',
          form:'tout droit',
          example:'Allez tout droit.',
          tr:'Dümdüz gidin.'
        },
        {
          pronoun:'Sola',
          form:'à gauche',
          example:'Tournez à gauche.',
          tr:'Sola dönün.'
        },
        {
          pronoun:'Sağa',
          form:'à droite',
          example:'Tournez à droite.',
          tr:'Sağa dönün.'
        }
      ],
      note:'Fransızcada kibar kullanım için Excusez-moi ile başlamak iyi olur.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Où est la gare ?',
      tr:'İstasyon nerede?',
      prompt:'Yer sor'
    },
    {
      id:'sp2',
      en:'Allez tout droit.',
      tr:'Düz gidin.',
      prompt:'Yön ver'
    },
    {
      id:'sp3',
      en:'Tournez à gauche.',
      tr:'Sola dönün.',
      prompt:'Yön ekle'
    },
    {
      id:'sp4',
      en:'C\'est près d\'ici.',
      tr:'Buraya yakın.',
      prompt:'Mesafe belirt'
    },
    {
      id:'sp5',
      en:'Merci pour votre aide.',
      tr:'Yardımınız için teşekkürler.',
      prompt:'Teşekkür et'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Demander le chemin',
      title_en:'Asking the way',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Excusez-moi, où est la station ?',
          tr:'Affedersiniz, istasyon nerede?',
          gramNote:'Nazik başlangıç.',
          bd:[
            {
              ro:'Excusez-moi',
              tr:'affedersiniz',
              role:'courtesy',
              note:'Yabancıya hitap.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Allez tout droit et tournez à droite.',
          tr:'Düz gidin ve sağa dönün.',
          gramNote:'Sıralı yön.',
          bd:[
            {
              ro:'tout droit',
              tr:'dümdüz',
              role:'direction',
              note:'İlk adım.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'C\'est loin ?',
          tr:'Uzak mı?',
          gramNote:'Mesafe sorusu.',
          bd:[
            {
              ro:'loin',
              tr:'uzak',
              role:'adj',
              note:'Mesafe sıfatı.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Non, cinq minutes à pied.',
          tr:'Hayır, yürüyerek beş dakika.',
          gramNote:'à pied = yürüyerek.',
          bd:[
            {
              ro:'à pied',
              tr:'yürüyerek',
              role:'K',
              note:'Ulaşım kalıbı.'
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
      transcript:'Allez tout droit jusqu\'au carrefour, puis tournez à gauche. La gare est près de la banque.',
      tr:'Kavşağa kadar düz gidin, sonra sola dönün. İstasyon bankanın yakınında.',
      questions:[
        {
          q:'Première direction ?',
          opts:[
            'à gauche',
            'à droite',
            'tout droit',
            'retour'
          ],
          answer:2,
          tr:'İlk yön ne?'
        },
        {
          q:'Puis ?',
          opts:[
            'à gauche',
            'à droite',
            'tout droit',
            'stop'
          ],
          answer:0,
          tr:'Sonra ne?'
        },
        {
          q:'La gare est...',
          opts:[
            'loin',
            'près de la banque',
            'dans le bus',
            'fermée'
          ],
          answer:1,
          tr:'İstasyon nerede?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[7] = L7;
