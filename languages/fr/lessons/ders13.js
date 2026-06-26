// ders13.js - French Lesson 13: Social Life (beginner)
const L13 = {
  words:[
    {
      id:'w1',
      en:'l\'ami / l\'amie',
      ro:'la-mi',
      tr:'arkadaş'
    },
    {
      id:'w2',
      en:'la fête',
      ro:'la fet',
      tr:'parti'
    },
    {
      id:'w3',
      en:'inviter',
      ro:'en-vi-te',
      tr:'davet etmek'
    },
    {
      id:'w4',
      en:'l\'invitation',
      ro:'len-vi-ta-syon',
      tr:'davet'
    },
    {
      id:'w5',
      en:'fêter',
      ro:'fe-te',
      tr:'kutlamak'
    },
    {
      id:'w6',
      en:'l\'anniversaire',
      ro:'la-ni-ver-ser',
      tr:'doğum günü'
    },
    {
      id:'w7',
      en:'Joyeux anniversaire !',
      ro:'jwa-yö a-ni-ver-ser',
      tr:'Doğum günün kutlu olsun!'
    },
    {
      id:'w8',
      en:'Santé !',
      ro:'son-te',
      tr:'Şerefe!'
    },
    {
      id:'w9',
      en:'se retrouver',
      ro:'sə ru-tru-ve',
      tr:'buluşmak'
    },
    {
      id:'w10',
      en:'en retard',
      ro:'on rə-tar',
      tr:'geç'
    },
    {
      id:'w11',
      en:'à l\'heure',
      ro:'a lör',
      tr:'zamanında'
    },
    {
      id:'w12',
      en:'ça te dit ?',
      ro:'sa tə di',
      tr:'ister misin?'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Sosyal Davetler',
      title_en:'Invitations',
      explanation:'Arkadaş çağırırken Ça te dit...? veya On se voit? kullanılabilir. Kabul için Oui, avec plaisir denir.',
      table:[
        {
          pronoun:'Davet',
          form:'Ça te dit... ?',
          example:'Ça te dit un café ?',
          tr:'Bir kahve ister misin?'
        },
        {
          pronoun:'Kabul',
          form:'Oui, avec plaisir',
          example:'Oui, avec plaisir !',
          tr:'Evet, memnuniyetle!'
        },
        {
          pronoun:'Red',
          form:'Je ne peux pas',
          example:'Désolé, je ne peux pas.',
          tr:'Üzgünüm, gelemem.'
        },
        {
          pronoun:'Kutlama',
          form:'Joyeux anniversaire',
          example:'Joyeux anniversaire !',
          tr:'Doğum günün kutlu olsun!'
        }
      ],
      note:'Samimi konuşmada tu formu yaygındır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Tu es libre samedi ?',
      tr:'Cumartesi müsait misin?',
      prompt:'Teklif et'
    },
    {
      id:'sp2',
      en:'Oui, avec plaisir !',
      tr:'Evet, memnuniyetle!',
      prompt:'Kabul et'
    },
    {
      id:'sp3',
      en:'Joyeux anniversaire !',
      tr:'Doğum günün kutlu olsun!',
      prompt:'Kutla'
    },
    {
      id:'sp4',
      en:'Santé !',
      tr:'Şerefe!',
      prompt:'Kadeh kaldır'
    },
    {
      id:'sp5',
      en:'Désolé, je ne peux pas venir.',
      tr:'Üzgünüm, gelemem.',
      prompt:'Reddet'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Invitation',
      title_en:'Invitation',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Salut Ali, je fais une fête samedi.',
          tr:'Selam Ali, cumartesi parti yapıyorum.',
          gramNote:'Davet açılışı.',
          bd:[
            {
              ro:'fête',
              tr:'parti',
              role:'O',
              note:'Sosyal etkinlik kelimesi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Super, à quelle heure ?',
          tr:'Harika, saat kaçta?',
          gramNote:'Saat sorusu.',
          bd:[
            {
              ro:'à quelle heure',
              tr:'saat kaçta',
              role:'question',
              note:'Zaman sorusu.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'À vingt heures, chez moi.',
          tr:'Saat yirmide, bende.',
          gramNote:'Yer ve zaman.',
          bd:[
            {
              ro:'chez moi',
              tr:'bende',
              role:'K',
              note:'Ev ifadesi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Parfait, à samedi !',
          tr:'Harika, cumartesi görüşürüz!',
          gramNote:'Kapanış.',
          bd:[
            {
              ro:'à samedi',
              tr:'cumartesiye kadar',
              role:'farewell',
              note:'Veda kalıbı.'
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
      transcript:'Lisa fête son anniversaire vendredi. La fête commence à dix-neuf heures.',
      tr:'Lisa cuma günü doğum gününü kutluyor. Parti 19:00\'da başlıyor.',
      questions:[
        {
          q:'Événement ?',
          opts:[
            'mariage',
            'anniversaire',
            'concert',
            'voyage'
          ],
          answer:1,
          tr:'Etkinlik ne?'
        },
        {
          q:'Quand ?',
          opts:[
            '18h',
            '19h',
            '20h',
            '21h'
          ],
          answer:1,
          tr:'Saat kaçta?'
        },
        {
          q:'Contexte ?',
          opts:[
            'social',
            'médical',
            'travail',
            'transport'
          ],
          answer:0,
          tr:'Bağlam?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[13] = L13;
