// ders6.js - French Lesson 6: Shopping (beginner)
const L6 = {
  words:[
    {
      id:'w1',
      en:'Où puis-je trouver... ?',
      ro:'u pwi-juh tru-ve',
      tr:'... nerede bulabilirim?'
    },
    {
      id:'w2',
      en:'Combien ça coûte ?',
      ro:'kon-byan sa kut',
      tr:'Bu ne kadar?'
    },
    {
      id:'w3',
      en:'trop cher',
      ro:'tro şer',
      tr:'çok pahalı'
    },
    {
      id:'w4',
      en:'bon marché',
      ro:'bon mar-şe',
      tr:'ucuz'
    },
    {
      id:'w5',
      en:'la réduction',
      ro:'la re-dük-syon',
      tr:'indirim'
    },
    {
      id:'w6',
      en:'la taille',
      ro:'la tay',
      tr:'beden'
    },
    {
      id:'w7',
      en:'la couleur',
      ro:'la ku-lör',
      tr:'renk'
    },
    {
      id:'w8',
      en:'essayer',
      ro:'e-se-ye',
      tr:'denemek'
    },
    {
      id:'w9',
      en:'la cabine',
      ro:'la ka-bin',
      tr:'deneme kabini'
    },
    {
      id:'w10',
      en:'ça me va',
      ro:'sa muh va',
      tr:'bana oluyor'
    },
    {
      id:'w11',
      en:'acheter',
      ro:'a-şte',
      tr:'satın almak'
    },
    {
      id:'w12',
      en:'payer',
      ro:'pe-ye',
      tr:'ödemek'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Alışveriş Kalıpları',
      title_en:'Shopping phrases',
      explanation:'Fiyat sormak için Combien ça coûte?, denemek için Je peux essayer? kullanılabilir.',
      table:[
        {
          pronoun:'Fiyat',
          form:'Combien ça coûte ?',
          example:'Combien ça coûte ?',
          tr:'Bu ne kadar?'
        },
        {
          pronoun:'Deneme',
          form:'Je peux essayer ?',
          example:'Je peux essayer ?',
          tr:'Deneyebilir miyim?'
        },
        {
          pronoun:'Uygunluk',
          form:'Ça me va',
          example:'Ça me va bien.',
          tr:'Bu bana oluyor.'
        },
        {
          pronoun:'Satın alma',
          form:'J\'achète',
          example:'J\'achète ça.',
          tr:'Bunu alıyorum.'
        }
      ],
      note:'bon marché günlük dilde ucuz anlamında çok kullanılır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Combien ça coûte ?',
      tr:'Bu ne kadar?',
      prompt:'Fiyat sor'
    },
    {
      id:'sp2',
      en:'C\'est trop cher.',
      tr:'Bu çok pahalı.',
      prompt:'Pahalı de'
    },
    {
      id:'sp3',
      en:'Je peux essayer ?',
      tr:'Deneyebilir miyim?',
      prompt:'Deneme iste'
    },
    {
      id:'sp4',
      en:'Ça me va.',
      tr:'Bu bana oluyor.',
      prompt:'Uygunluk söyle'
    },
    {
      id:'sp5',
      en:'Je prends ça.',
      tr:'Bunu alıyorum.',
      prompt:'Satın al'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Au magasin',
      title_en:'In the shop',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Bonjour, je peux vous aider ?',
          tr:'Merhaba, yardımcı olabilir miyim?',
          gramNote:'Satıcı açılışı.',
          bd:[
            {
              ro:'aider',
              tr:'yardım etmek',
              role:'V',
              note:'Mağaza kalıbı.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Oui, je cherche une veste.',
          tr:'Evet, bir ceket arıyorum.',
          gramNote:'Je cherche = arıyorum.',
          bd:[
            {
              ro:'je cherche',
              tr:'arıyorum',
              role:'V',
              note:'Sık kullanılır.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Quelle taille ?',
          tr:'Hangi beden?',
          gramNote:'Kısa soru kalıbı.',
          bd:[
            {
              ro:'taille',
              tr:'beden',
              role:'O',
              note:'Giyim alışverişi kelimesi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Taille M, merci.',
          tr:'M beden, teşekkürler.',
          gramNote:'Beden cevabı.',
          bd:[
            {
              ro:'Taille M',
              tr:'M beden',
              role:'phrase',
              note:'Standart cevap.'
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
      transcript:'La veste coûte quatre-vingt-dix euros. Aujourd\'hui il y a une réduction de vingt pour cent.',
      tr:'Ceket 90 euro. Bugün yüzde yirmi indirim var.',
      questions:[
        {
          q:'Prix de la veste ?',
          opts:[
            '70€',
            '80€',
            '90€',
            '100€'
          ],
          answer:2,
          tr:'Ceket fiyatı?'
        },
        {
          q:'Réduction ?',
          opts:[
            '10%',
            '15%',
            '20%',
            '30%'
          ],
          answer:2,
          tr:'İndirim oranı?'
        },
        {
          q:'Expression de prix ?',
          opts:[
            'Combien ça coûte',
            'Où est la gare',
            'Je suis malade',
            'Bonne nuit'
          ],
          answer:0,
          tr:'Fiyat ifadesi hangisi?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[6] = L6;
