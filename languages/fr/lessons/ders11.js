// ders11.js - French Lesson 11: Health (beginner)
const L11 = {
  words:[
    {
      id:'w1',
      en:'le médecin',
      ro:'luh med-sen',
      tr:'doktor'
    },
    {
      id:'w2',
      en:'l\'hôpital',
      ro:'lo-pi-tal',
      tr:'hastane'
    },
    {
      id:'w3',
      en:'la pharmacie',
      ro:'la far-ma-si',
      tr:'eczane'
    },
    {
      id:'w4',
      en:'malade',
      ro:'ma-lad',
      tr:'hasta'
    },
    {
      id:'w5',
      en:'la douleur',
      ro:'la du-lör',
      tr:'ağrı'
    },
    {
      id:'w6',
      en:'la fièvre',
      ro:'la fyevğ',
      tr:'ateş'
    },
    {
      id:'w7',
      en:'la toux',
      ro:'la tu',
      tr:'öksürük'
    },
    {
      id:'w8',
      en:'le rhume',
      ro:'luh rüm',
      tr:'nezle'
    },
    {
      id:'w9',
      en:'le médicament',
      ro:'luh me-di-ka-mon',
      tr:'ilaç'
    },
    {
      id:'w10',
      en:'le rendez-vous',
      ro:'luh ron-de-vu',
      tr:'randevu'
    },
    {
      id:'w11',
      en:'l\'assurance',
      ro:'la-sü-rans',
      tr:'sigorta'
    },
    {
      id:'w12',
      en:'Bon rétablissement !',
      ro:'bon re-tab-lis-mon',
      tr:'Geçmiş olsun!'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Sağlık Kalıpları',
      title_en:'Health phrases',
      explanation:'Ağrı belirtmek için J\'ai mal à..., randevu için Je voudrais un rendez-vous kalıpları kullanılır.',
      table:[
        {
          pronoun:'Ağrı',
          form:'J\'ai mal à...',
          example:'J\'ai mal à la tête.',
          tr:'Başım ağrıyor.'
        },
        {
          pronoun:'Hastalık',
          form:'Je suis malade',
          example:'Je suis malade.',
          tr:'Hastayım.'
        },
        {
          pronoun:'Randevu',
          form:'Je voudrais un rendez-vous',
          example:'Je voudrais un rendez-vous.',
          tr:'Randevu istiyorum.'
        },
        {
          pronoun:'İyi dilek',
          form:'Bon rétablissement',
          example:'Bon rétablissement !',
          tr:'Geçmiş olsun!'
        }
      ],
      note:'J\'ai + isim yapısı belirtilerde çok kullanılır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'J\'ai mal à la tête.',
      tr:'Başım ağrıyor.',
      prompt:'Belirti söyle'
    },
    {
      id:'sp2',
      en:'Je suis malade.',
      tr:'Hastayım.',
      prompt:'Durum belirt'
    },
    {
      id:'sp3',
      en:'Je voudrais un rendez-vous.',
      tr:'Randevu istiyorum.',
      prompt:'Randevu iste'
    },
    {
      id:'sp4',
      en:'J\'ai de la fièvre.',
      tr:'Ateşim var.',
      prompt:'Belirti belirt'
    },
    {
      id:'sp5',
      en:'Bon rétablissement !',
      tr:'Geçmiş olsun!',
      prompt:'İyi dilek söyle'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Chez le médecin',
      title_en:'At doctor',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Bonjour, qu\'est-ce que vous avez ?',
          tr:'Merhaba, neyiniz var?',
          gramNote:'Doktor sorusu.',
          bd:[
            {
              ro:'qu\'est-ce que',
              tr:'nedir',
              role:'question',
              note:'Soru kalıbı.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'J\'ai mal à la gorge.',
          tr:'Boğazım ağrıyor.',
          gramNote:'Şikayet cümlesi.',
          bd:[
            {
              ro:'J\'ai mal à',
              tr:'... ağrıyor',
              role:'V',
              note:'Temel ağrı yapısı.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Depuis quand ?',
          tr:'Ne zamandan beri?',
          gramNote:'Süre sorusu.',
          bd:[
            {
              ro:'depuis quand',
              tr:'ne zamandan beri',
              role:'question',
              note:'Süre ifadesi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Depuis hier soir.',
          tr:'Dün akşamdan beri.',
          gramNote:'Süre cevabı.',
          bd:[
            {
              ro:'depuis',
              tr:'...den beri',
              role:'K',
              note:'Zaman edatı.'
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
      transcript:'Ali est malade. Il a de la fièvre et de la toux. Le médecin conseille du repos.',
      tr:'Ali hasta. Ateşi ve öksürüğü var. Doktor dinlenme öneriyor.',
      questions:[
        {
          q:'Ali est...',
          opts:[
            'fatigué',
            'malade',
            'content',
            'occupé'
          ],
          answer:1,
          tr:'Ali nasıl?'
        },
        {
          q:'Symptômes ?',
          opts:[
            'fièvre et toux',
            'sport',
            'faim',
            'stress'
          ],
          answer:0,
          tr:'Belirtiler?'
        },
        {
          q:'Conseil ?',
          opts:[
            'repos',
            'voyage',
            'travail',
            'cinéma'
          ],
          answer:0,
          tr:'Öneri?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[11] = L11;
