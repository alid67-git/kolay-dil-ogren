// ders13.js — German Lesson 13: Social Life (beginner)
const L13 = {
  words:[
    {
      id:'w1',
      en:'der Freund / die Freundin',
      ro:'der froynt / dee FROYND-in',
      tr:'erkek/kadın arkadaş'
    },
    {
      id:'w2',
      en:'die Party',
      ro:'dee PAR-ty',
      tr:'parti'
    },
    {
      id:'w3',
      en:'einladen',
      ro:'AYN-la-den',
      tr:'davet etmek'
    },
    {
      id:'w4',
      en:'die Einladung',
      ro:'dee AYN-la-dung',
      tr:'davet'
    },
    {
      id:'w5',
      en:'feiern',
      ro:'FAY-ern',
      tr:'kutlamak'
    },
    {
      id:'w6',
      en:'der Geburtstag',
      ro:'der ge-BURTS-tak',
      tr:'doğum günü'
    },
    {
      id:'w7',
      en:'Alles Gute!',
      ro:'A-les GU-te',
      tr:'İyi ki doğdun! / Her şey gönlünce!'
    },
    {
      id:'w8',
      en:'Prost!',
      ro:'prost',
      tr:'Şerefe!'
    },
    {
      id:'w9',
      en:'sich treffen',
      ro:'zikh TREF-en',
      tr:'buluşmak'
    },
    {
      id:'w10',
      en:'der Termin',
      ro:'der ter-MIN',
      tr:'buluşma / randevu'
    },
    {
      id:'w11',
      en:'spät',
      ro:'shpayt',
      tr:'geç'
    },
    {
      id:'w12',
      en:'pünktlich',
      ro:'PÜNK-tlich',
      tr:'dakik'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Sosyal Davetler',
      title_en:'Social Invitations',
      explanation:'Möchtest du...? = ... ister misin? (samimi). Haben Sie Lust? = İster misiniz? (resmi). Alles Gute zum Geburtstag! = Doğum günün kutlu olsun! Prost! = Şerefe!',
      table:[
        {
          pronoun:'Davet',
          form:'Möchtest du...? / Lust haben',
          example:'Hast du Lust, ins Kino zu gehen?',
          tr:'Sinemaya gitmek ister misin?'
        },
        {
          pronoun:'Kabul',
          form:'Gerne! / Das klingt gut!',
          example:'Ja, gerne!',
          tr:'Evet, memnuniyetle!'
        },
        {
          pronoun:'Red',
          form:'Leider kann ich nicht.',
          example:'Tut mir leid, ich habe keine Zeit.',
          tr:'Maalesef vaktim yok.'
        },
        {
          pronoun:'Kutlama',
          form:'Alles Gute! / Prost!',
          example:'Alles Gute zum Geburtstag!',
          tr:'Doğum günün kutlu olsun!'
        }
      ],
      note:'Almanya\'da pünktlich (dakik) olmak sosyal görgü kuralıdır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Hast du am Samstag Zeit?',
      tr:'Cumartesi müsait misin?',
      prompt:'Buluşma teklif et'
    },
    {
      id:'sp2',
      en:'Ja, gerne! Wo treffen wir uns?',
      tr:'Evet, memnuniyetle! Nerede buluşalım?',
      prompt:'Kabul et ve yer sor'
    },
    {
      id:'sp3',
      en:'Alles Gute zum Geburtstag!',
      tr:'Doğum günün kutlu olsun!',
      prompt:'Doğum günü kutla'
    },
    {
      id:'sp4',
      en:'Prost!',
      tr:'Şerefe!',
      prompt:'Kadeh kaldır'
    },
    {
      id:'sp5',
      en:'Es tut mir leid, ich kann nicht.',
      tr:'Maalesef gelemem.',
      prompt:'Daveti reddet'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Einladung',
      title_en:'Invitation',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Hey Ali! Ich mache am Samstag eine Party. Kommst du?',
          tr:'Hey Ali! Cumartesi parti veriyorum. Gelir misin?',
          gramNote:'Samimi davet.',
          bd:[
            {
              ro:'Ich mache eine Party',
              tr:'Parti veriyorum',
              role:'V',
              note:'machen = yapmak/vermek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Ja, gerne! Soll ich etwas mitbringen?',
          tr:'Evet, memnuniyetle! Bir şey getireyim mi?',
          gramNote:'mitbringen = yanında getirmek.',
          bd:[
            {
              ro:'etwas mitbringen',
              tr:'bir şey getirmek',
              role:'V',
              note:'Partiye katkı sorusu.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Nein, danke. Nur du! Um acht Uhr bei mir.',
          tr:'Hayır, teşekkürler. Sadece sen! Saat sekizde bende.',
          gramNote:[
            {
              ro:'bei mir',
              tr:'bende / evimde',
              role:'K',
              note:'bei + dativ = ...de/-da.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Super! Bis Samstag!',
          tr:'Harika! Cumartesiye kadar!',
          gramNote:[
            {
              ro:'Bis Samstag',
              tr:'Cumartesiye kadar',
              role:'farewell',
              note:'Bis + gün.'
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
      transcript:'Lisa feiert am Freitag ihren Geburtstag. Die Party beginnt um neunzehn Uhr. Ali bringt einen Kuchen mit.',
      tr:'Lisa cuma günü doğum gününü kutluyor. Parti saat 19:00\'da başlıyor. Ali bir kek getiriyor.',
      questions:[
        {
          q:'Was feiert Lisa?',
          opts:[
            'Hochzeit',
            'Geburtstag',
            'Abschluss',
            'Neujahr'
          ],
          answer:1,
          tr:'Lisa ne kutluyor?'
        },
        {
          q:'Wann beginnt die Party?',
          opts:[
            '18 Uhr',
            '19 Uhr',
            '20 Uhr',
            '21 Uhr'
          ],
          answer:1,
          tr:'Parti ne zaman başlıyor?'
        },
        {
          q:'Was bringt Ali mit?',
          opts:[
            'Wein',
            'Blumen',
            'Kuchen',
            'Brot'
          ],
          answer:2,
          tr:'Ali ne getiriyor?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[13] = L13;
