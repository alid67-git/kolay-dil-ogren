// ders17.js — German Lesson 17: Emotions & Feelings (beginner)
const L17 = {
  words:[
    {
      id:'w1',
      en:'glücklich',
      ro:'GLÜ-klich',
      tr:'mutlu'
    },
    {
      id:'w2',
      en:'traurig',
      ro:'TRAU-rikh',
      tr:'üzgün'
    },
    {
      id:'w3',
      en:'müde',
      ro:'MÜ-de',
      tr:'yorgun'
    },
    {
      id:'w4',
      en:'nervös',
      ro:'ner-VÖS',
      tr:'gergin / sinirli'
    },
    {
      id:'w5',
      en:'aufgeregt',
      ro:'AUF-ge-rekt',
      tr:'heyecanlı'
    },
    {
      id:'w6',
      en:'wütend',
      ro:'VÜ-tent',
      tr:'kızgın'
    },
    {
      id:'w7',
      en:'Angst haben',
      ro:'angst HA-ben',
      tr:'korkmak'
    },
    {
      id:'w8',
      en:'sich freuen',
      ro:'zikh FROY-en',
      tr:'sevinmek'
    },
    {
      id:'w9',
      en:'sich langweilen',
      ro:'zikh LANG-vay-len',
      tr:'sıkılmak'
    },
    {
      id:'w10',
      en:'stolz',
      ro:'shtolts',
      tr:'gururlu'
    },
    {
      id:'w11',
      en:'überrascht',
      ro:'ü-ber-RASST',
      tr:'şaşırmış'
    },
    {
      id:'w12',
      en:'Ich fühle mich...',
      ro:'ikh FÜ-le mikh',
      tr:'Kendimi ... hissediyorum'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Duyguları İfade Etme',
      title_en:'Expressing Emotions',
      explanation:'Ich bin müde = yorgunum. Ich habe Angst = korkuyorum. Es freut mich = sevindim. Mir ist kalt/warm = üşüyorum/sıcaklanıyorum. Reflexive fiiller: sich freuen, sich langweilen.',
      table:[
        {
          pronoun:'Olumlu',
          form:'Ich bin glücklich / freue mich',
          example:'Ich freue mich auf morgen.',
          tr:'Yarına seviniyorum.'
        },
        {
          pronoun:'Olumsuz',
          form:'Ich bin traurig / müde',
          example:'Ich bin sehr müde.',
          tr:'Çok yorgunum.'
        },
        {
          pronoun:'Korku',
          form:'Ich habe Angst vor...',
          example:'Ich habe Angst vor Spinnen.',
          tr:'Örümceklerden korkuyorum.'
        },
        {
          pronoun:'Sorma',
          form:'Wie fühlst du dich?',
          example:'Wie fühlst du dich?',
          tr:'Nasıl hissediyorsun?'
        }
      ],
      note:'sich fühlen = hissetmek (reflexiv). Ich fühle mich gut = kendimi iyi hissediyorum.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Ich bin glücklich.',
      tr:'Mutluyum.',
      prompt:'Duygu ifade et'
    },
    {
      id:'sp2',
      en:'Ich bin müde.',
      tr:'Yorgunum.',
      prompt:'Yorgunluğunu söyle'
    },
    {
      id:'sp3',
      en:'Ich freue mich!',
      tr:'Seviniyorum!',
      prompt:'Sevincini ifade et'
    },
    {
      id:'sp4',
      en:'Wie fühlst du dich?',
      tr:'Nasıl hissediyorsun?',
      prompt:'Duygu sor'
    },
    {
      id:'sp5',
      en:'Es tut mir leid.',
      tr:'Üzgünüm.',
      prompt:'Özür dile'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Gefühle',
      title_en:'Feelings',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Du siehst traurig aus. Was ist los?',
          tr:'Üzgün görünüyorsun. Ne oldu?',
          gramNote:'sich aussehen = görünmek.',
          bd:[
            {
              ro:'traurig aussehen',
              tr:'üzgün görünmek',
              role:'V',
              note:'Aussehen = dış görünüş.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Ich bin ein bisschen müde. Viel Arbeit.',
          tr:'Biraz yorgunum. Çok iş.',
          gramNote:[
            {
              ro:'müde',
              tr:'yorgun',
              role:'adj',
              note:'Sein + sıfat.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Das verstehe ich. Mach eine Pause!',
          tr:'Anlıyorum. Mola ver!',
          gramNote:'Pause machen = mola vermek.',
          bd:[
            {
              ro:'Mach eine Pause',
              tr:'Mola ver',
              role:'V',
              note:'Imperativ — du formu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Danke. Das hilft.',
          tr:'Teşekkürler. Bu yardımcı oluyor.',
          gramNote:[
            {
              ro:'Das hilft',
              tr:'Bu yardımcı oluyor',
              role:'V',
              note:'helfen = yardım etmek.'
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
      transcript:'Ali ist heute sehr glücklich. Er hat die Prüfung bestanden. Seine Freunde freuen sich mit ihm.',
      tr:'Ali bugün çok mutlu. Sınavı geçti. Arkadaşları onunla birlikte seviniyor.',
      questions:[
        {
          q:'Wie fühlt sich Ali?',
          opts:[
            'traurig',
            'müde',
            'glücklich',
            'wütend'
          ],
          answer:2,
          tr:'Ali nasıl hissediyor?'
        },
        {
          q:'Warum?',
          opts:[
            'Neuer Job',
            'Prüfung bestanden',
            'Urlaub',
            'Party'
          ],
          answer:1,
          tr:'Neden?'
        },
        {
          q:'Wie reagieren die Freunde?',
          opts:[
            'sie sind traurig',
            'sie freuen sich',
            'sie sind wütend',
            'sie haben Angst'
          ],
          answer:1,
          tr:'Arkadaşlar nasıl tepki veriyor?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[17] = L17;
