// ders21.js — German Lesson 21: Grundverben (vocabulary)
const L21 = {
  words:[
    {
      id:'w1',
      en:'sein',
      ro:'zayn',
      tr:'olmak',
      examples:[
        {
          en:'Er ist Arzt.',
          tr:'O doktor.',
          bd:[
            {
              ro:'ist',
              tr:'dır',
              role:'V',
              note:'sein fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'haben',
      ro:'HA-ben',
      tr:'sahip olmak / var',
      examples:[
        {
          en:'Ich habe Zeit.',
          tr:'Vaktim var.',
          bd:[
            {
              ro:'habe',
              tr:'var',
              role:'V',
              note:'haben fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w3',
      en:'werden',
      ro:'VER-den',
      tr:'olmak / -ecek',
      examples:[
        {
          en:'Ich werde Arzt.',
          tr:'Doktor olacağım.',
          bd:[
            {
              ro:'werde',
              tr:'olacağım',
              role:'V',
              note:'werden fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w4',
      en:'machen',
      ro:'MA-khen',
      tr:'yapmak',
      examples:[
        {
          en:'Was machst du?',
          tr:'Ne yapıyorsun?',
          bd:[
            {
              ro:'machst',
              tr:'yapıyorsun',
              role:'V',
              note:'machen fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w5',
      en:'gehen',
      ro:'GAY-en',
      tr:'gitmek',
      examples:[
        {
          en:'Ich gehe nach Hause.',
          tr:'Eve gidiyorum.',
          bd:[
            {
              ro:'gehe',
              tr:'gidiyorum',
              role:'V',
              note:'gehen fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w6',
      en:'kommen',
      ro:'KO-men',
      tr:'gelmek',
      examples:[
        {
          en:'Kommst du mit?',
          tr:'Benimle gelir misin?',
          bd:[
            {
              ro:'Kommst du',
              tr:'Gelir misin',
              role:'V',
              note:'kommen fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w7',
      en:'sehen',
      ro:'ZAY-en',
      tr:'görmek',
      examples:[
        {
          en:'Ich sehe dich.',
          tr:'Seni görüyorum.',
          bd:[
            {
              ro:'sehe',
              tr:'görüyorum',
              role:'V',
              note:'sehen fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w8',
      en:'wissen',
      ro:'VIS-sen',
      tr:'bilmek',
      examples:[
        {
          en:'Ich weiß es.',
          tr:'Biliyorum.',
          bd:[
            {
              ro:'weiß',
              tr:'biliyorum',
              role:'V',
              note:'wissen — düzensiz'
            }
          ]
        }
      ]
    },
    {
      id:'w9',
      en:'denken',
      ro:'DEN-ken',
      tr:'düşünmek',
      examples:[
        {
          en:'Ich denke, du hast recht.',
          tr:'Sanırım haklısın.',
          bd:[
            {
              ro:'denke',
              tr:'sanırım',
              role:'V',
              note:'denken fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w10',
      en:'wollen',
      ro:'VOL-len',
      tr:'istemek',
      examples:[
        {
          en:'Ich will Deutsch lernen.',
          tr:'Almanca öğrenmek istiyorum.',
          bd:[
            {
              ro:'will',
              tr:'istiyorum',
              role:'V',
              note:'wollen — düzensiz'
            }
          ]
        }
      ]
    },
    {
      id:'w11',
      en:'müssen',
      ro:'MÜ-sen',
      tr:'zorunda olmak / -meli',
      examples:[
        {
          en:'Ich muss arbeiten.',
          tr:'Çalışmam lazım.',
          bd:[
            {
              ro:'muss',
              tr:'lazım',
              role:'V',
              note:'müssen — düzensiz'
            }
          ]
        }
      ]
    },
    {
      id:'w12',
      en:'können',
      ro:'KÖ-nen',
      tr:'-ebilmek',
      examples:[
        {
          en:'Ich kann schwimmen.',
          tr:'Yüzebilirim.',
          bd:[
            {
              ro:'kann',
              tr:'ebilirim',
              role:'V',
              note:'können — düzensiz'
            }
          ]
        }
      ]
    },
    {
      id:'w13',
      en:'mögen',
      ro:'MÖ-gen',
      tr:'sevmek / hoşlanmak',
      examples:[
        {
          en:'Ich mag Kaffee.',
          tr:'Kahveyi severim.',
          bd:[
            {
              ro:'mag',
              tr:'severim',
              role:'V',
              note:'mögen — düzensiz'
            }
          ]
        }
      ]
    },
    {
      id:'w14',
      en:'sagen',
      ro:'ZAH-gen',
      tr:'söylemek',
      examples:[
        {
          en:'Was sagst du?',
          tr:'Ne diyorsun?',
          bd:[
            {
              ro:'sagst',
              tr:'diyorsun',
              role:'V',
              note:'sagen fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w15',
      en:'fragen',
      ro:'FRAH-gen',
      tr:'sormak',
      examples:[
        {
          en:'Darf ich fragen?',
          tr:'Sorabilir miyim?',
          bd:[
            {
              ro:'fragen',
              tr:'sormak',
              role:'V',
              note:'fragen fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w16',
      en:'geben',
      ro:'GAY-ben',
      tr:'vermek',
      examples:[
        {
          en:'Gib mir bitte das Buch.',
          tr:'Lütfen kitabı ver.',
          bd:[
            {
              ro:'Gib',
              tr:'Ver',
              role:'V',
              note:'geben — düzensiz'
            }
          ]
        }
      ]
    },
    {
      id:'w17',
      en:'nehmen',
      ro:'NAY-men',
      tr:'almak',
      examples:[
        {
          en:'Ich nehme den Bus.',
          tr:'Otobüse biniyorum.',
          bd:[
            {
              ro:'nehme',
              tr:'alıyorum',
              role:'V',
              note:'nehmen — düzensiz'
            }
          ]
        }
      ]
    },
    {
      id:'w18',
      en:'finden',
      ro:'FIN-den',
      tr:'bulmak / beğenmek',
      examples:[
        {
          en:'Ich finde das gut.',
          tr:'Bunu iyi buluyorum.',
          bd:[
            {
              ro:'finde',
              tr:'buluyorum',
              role:'V',
              note:'finden fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w19',
      en:'bleiben',
      ro:'BLAY-ben',
      tr:'kalmak',
      examples:[
        {
          en:'Ich bleibe zu Hause.',
          tr:'Evde kalıyorum.',
          bd:[
            {
              ro:'bleibe',
              tr:'kalıyorum',
              role:'V',
              note:'bleiben fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w20',
      en:'stehen',
      ro:'SHTAY-en',
      tr:'durmak / yazılı olmak',
      examples:[
        {
          en:'Das steht im Buch.',
          tr:'Bu kitapta yazıyor.',
          bd:[
            {
              ro:'steht',
              tr:'yazıyor/duruyor',
              role:'V',
              note:'stehen fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w21',
      en:'liegen',
      ro:'LEE-gen',
      tr:'yatmak / bulunmak',
      examples:[
        {
          en:'Das Buch liegt auf dem Tisch.',
          tr:'Kitap masanın üstünde.',
          bd:[
            {
              ro:'liegt',
              tr:'bulunuyor',
              role:'V',
              note:'liegen fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w22',
      en:'bringen',
      ro:'BRING-en',
      tr:'getirmek',
      examples:[
        {
          en:'Bring bitte Wasser.',
          tr:'Lütfen su getir.',
          bd:[
            {
              ro:'Bring',
              tr:'Getir',
              role:'V',
              note:'bringen fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w23',
      en:'helfen',
      ro:'HEL-fen',
      tr:'yardım etmek',
      examples:[
        {
          en:'Kannst du mir helfen?',
          tr:'Bana yardım edebilir misin?',
          bd:[
            {
              ro:'helfen',
              tr:'yardım etmek',
              role:'V',
              note:'helfen — düzensiz'
            }
          ]
        }
      ]
    },
    {
      id:'w24',
      en:'lernen',
      ro:'LER-nen',
      tr:'öğrenmek',
      examples:[
        {
          en:'Ich lerne Deutsch.',
          tr:'Almanca öğreniyorum.',
          bd:[
            {
              ro:'lerne',
              tr:'öğreniyorum',
              role:'V',
              note:'lernen fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w25',
      en:'arbeiten',
      ro:'AR-bay-ten',
      tr:'çalışmak',
      examples:[
        {
          en:'Er arbeitet in Berlin.',
          tr:'Berlin\'de çalışıyor.',
          bd:[
            {
              ro:'arbeitet',
              tr:'çalışıyor',
              role:'V',
              note:'arbeiten fiili'
            }
          ]
        }
      ]
    }
  ],
  grammar:[],
  speaking:[],
  dialogues:[],
  listening:[],
  tones:[]
};
LESSONS[21] = L21;
