// ders16.js — German Lesson 16: Countries & Nationalities (beginner)
const L16 = {
  words:[
    {
      id:'w1',
      en:'Deutschland',
      ro:'DOYTSH-lant',
      tr:'Almanya'
    },
    {
      id:'w2',
      en:'die Türkei',
      ro:'dee TÜR-kay',
      tr:'Türkiye'
    },
    {
      id:'w3',
      en:'Österreich',
      ro:'ÖS-ter-aykh',
      tr:'Avusturya'
    },
    {
      id:'w4',
      en:'die Schweiz',
      ro:'dee shvayts',
      tr:'İsviçre'
    },
    {
      id:'w5',
      en:'deutsch',
      ro:'doytsh',
      tr:'Alman'
    },
    {
      id:'w6',
      en:'türkisch',
      ro:'TÜR-kish',
      tr:'Türk'
    },
    {
      id:'w7',
      en:'Woher kommen Sie?',
      ro:'vo-HER KO-men zee',
      tr:'Nerelisiniz?'
    },
    {
      id:'w8',
      en:'Ich komme aus...',
      ro:'ikh KO-me aus',
      tr:'...den geliyorum'
    },
    {
      id:'w9',
      en:'Europa',
      ro:'oy-RO-pa',
      tr:'Avrupa'
    },
    {
      id:'w10',
      en:'die Sprache',
      ro:'dee SHPRA-khe',
      tr:'dil'
    },
    {
      id:'w11',
      en:'Englisch',
      ro:'ENG-lish',
      tr:'İngilizce'
    },
    {
      id:'w12',
      en:'die Hauptstadt',
      ro:'dee HAUPT-shtat',
      tr:'başkent'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Ülkeler ve Milliyetler',
      title_en:'Countries and Nationalities',
      explanation:'Woher kommen Sie? = Nerelisiniz? Ich komme aus der Türkei = Türkiye\'den geliyorum. Milliyet sıfatları küçük harfle: deutsch, türkisch. Ülkeler büyük harfle: Deutschland.',
      table:[
        {
          pronoun:'Soru',
          form:'Woher kommen Sie?',
          example:'Woher kommen Sie?',
          tr:'Nerelisiniz?'
        },
        {
          pronoun:'Cevap',
          form:'Ich komme aus...',
          example:'Ich komme aus der Türkei.',
          tr:'Türkiye\'den geliyorum.'
        },
        {
          pronoun:'Milliyet',
          form:'Ich bin ...',
          example:'Ich bin Türke.',
          tr:'Türküm.'
        },
        {
          pronoun:'Dil',
          form:'Ich spreche...',
          example:'Ich spreche Türkisch und Deutsch.',
          tr:'Türkçe ve Almanca konuşuyorum.'
        }
      ],
      note:'aus + dativ: aus der Türkei, aus Deutschland. aus + eril ülke: aus dem Iran.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Woher kommen Sie?',
      tr:'Nerelisiniz?',
      prompt:'Memleket sor'
    },
    {
      id:'sp2',
      en:'Ich komme aus der Türkei.',
      tr:'Türkiye\'den geliyorum.',
      prompt:'Memleketini söyle'
    },
    {
      id:'sp3',
      en:'Ich bin Türke.',
      tr:'Türküm.',
      prompt:'Milliyetini söyle'
    },
    {
      id:'sp4',
      en:'Ich spreche Türkisch und Deutsch.',
      tr:'Türkçe ve Almanca konuşuyorum.',
      prompt:'Dillerini söyle'
    },
    {
      id:'sp5',
      en:'Die Hauptstadt der Türkei ist Ankara.',
      tr:'Türkiye\'nin başkenti Ankara.',
      prompt:'Başkent söyle'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Herkunft',
      title_en:'Origin',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Woher kommen Sie?',
          tr:'Nerelisiniz?',
          gramNote:'Resmi memleket sorusu.',
          bd:[
            {
              ro:'Woher kommen Sie',
              tr:'Nerelisiniz',
              role:'question',
              note:'Woher = nereden.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Ich komme aus der Türkei, aus Istanbul.',
          tr:'Türkiye\'den, İstanbul\'dan geliyorum.',
          gramNote:[
            {
              ro:'aus der Türkei',
              tr:'Türkiye\'den',
              role:'K',
              note:'aus + dativ.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Ah, schön! Sprechen Sie schon Deutsch?',
          tr:'Ah, güzel! Zaten Almanca konuşuyor musunuz?',
          gramNote:[
            {
              ro:'schon',
              tr:'zaten / hâlihazırda',
              role:'K',
              note:'schon = already/zaten.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Ein bisschen. Ich lerne noch.',
          tr:'Biraz. Hâlâ öğreniyorum.',
          gramNote:[
            {
              ro:'Ein bisschen',
              tr:'Biraz',
              role:'K',
              note:'Miktar ifadesi.'
            },
            {
              ro:'noch',
              tr:'hâlâ',
              role:'K',
              note:'Devam eden eylem.'
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
      transcript:'Ali kommt aus der Türkei. Er wohnt jetzt in Berlin. Er spricht Türkisch, Deutsch und ein bisschen Englisch.',
      tr:'Ali Türkiye\'den geliyor. Şimdi Berlin\'de yaşıyor. Türkçe, Almanca ve biraz İngilizce konuşuyor.',
      questions:[
        {
          q:'Woher kommt Ali?',
          opts:[
            'Deutschland',
            'Österreich',
            'Türkei',
            'Schweiz'
          ],
          answer:2,
          tr:'Ali nereli?'
        },
        {
          q:'Wo wohnt er jetzt?',
          opts:[
            'Istanbul',
            'Ankara',
            'Berlin',
            'München'
          ],
          answer:2,
          tr:'Şimdi nerede yaşıyor?'
        },
        {
          q:'Wie viele Sprachen?',
          opts:[
            '1',
            '2',
            '3',
            '4'
          ],
          answer:2,
          tr:'Kaç dil konuşuyor?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[16] = L16;
