// ders3.js — German Lesson 3: Numbers & Money (beginner)
const L3 = {
  words:[
    {
      id:'w1',
      en:'eins',
      ro:'ayns',
      tr:'bir',
      tip:'Temel sayı.',
      ctx:'Sayılar ve miktar.',
      examples:[
        {
          en:'Ich habe ein Buch.',
          tr:'Bir kitabım var.',
          bd:[
            {
              ro:'eins',
              tr:'bir',
              role:'number',
              note:'eins = bir'
            }
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'zwei',
      ro:'tsvay',
      tr:'iki',
      tip:'Sayma.',
      ctx:'Sayılar ve miktar.',
      examples:[
        {
          en:'Zwei Kaffee, bitte.',
          tr:'İki kahve, lütfen.',
          bd:[
            {
              ro:'zwei',
              tr:'iki',
              role:'number',
              note:'zwei = iki'
            }
          ]
        }
      ]
    },
    {
      id:'w3',
      en:'drei',
      ro:'dray',
      tr:'üç',
      tip:'Sayma.',
      ctx:'Sayılar ve miktar.',
      examples:[
        {
          en:'Es gibt drei Katzen.',
          tr:'Üç kedi var.',
          bd:[
            {
              ro:'drei',
              tr:'üç',
              role:'number',
              note:'drei = üç'
            }
          ]
        }
      ]
    },
    {
      id:'w4',
      en:'vier',
      ro:'feer',
      tr:'dört'
    },
    {
      id:'w5',
      en:'fünf',
      ro:'fünf',
      tr:'beş'
    },
    {
      id:'w6',
      en:'sechs',
      ro:'zeks',
      tr:'altı'
    },
    {
      id:'w7',
      en:'sieben',
      ro:'ZEE-ben',
      tr:'yedi'
    },
    {
      id:'w8',
      en:'acht',
      ro:'aht',
      tr:'sekiz'
    },
    {
      id:'w9',
      en:'neun',
      ro:'noyn',
      tr:'dokuz'
    },
    {
      id:'w10',
      en:'zehn',
      ro:'tsayn',
      tr:'on'
    },
    {
      id:'w11',
      en:'elf',
      ro:'elf',
      tr:'on bir'
    },
    {
      id:'w12',
      en:'zwölf',
      ro:'tsvölf',
      tr:'on iki'
    },
    {
      id:'w13',
      en:'zwanzig',
      ro:'TSVAN-tsikh',
      tr:'yirmi'
    },
    {
      id:'w14',
      en:'dreißig',
      ro:'DRAY-sikh',
      tr:'otuz'
    },
    {
      id:'w15',
      en:'hundert',
      ro:'HUN-dert',
      tr:'yüz'
    },
    {
      id:'w16',
      en:'tausend',
      ro:'TAU-zent',
      tr:'bin'
    },
    {
      id:'w17',
      en:'Wie viel kostet das?',
      ro:'vee feel KOS-tet das',
      tr:'Bu ne kadar?',
      tip:'Fiyat sormak.',
      ctx:'Alışverişte.',
      examples:[
        {
          en:'Wie viel kostet das?',
          tr:'Bu ne kadar?',
          bd:[
            {
              ro:'Wie viel',
              tr:'Ne kadar',
              role:'question',
              note:'Fiyat sorusu.'
            },
            {
              ro:'kostet das',
              tr:'bu ... tutar',
              role:'V',
              note:'kosten = mal olmak.'
            }
          ]
        }
      ]
    },
    {
      id:'w18',
      en:'Euro',
      ro:'OY-ro',
      tr:'euro',
      examples:[
        {
          en:'Das kostet fünf Euro.',
          tr:'Bu beş euro.',
          bd:[
            {
              ro:'fünf Euro',
              tr:'beş euro',
              role:'currency',
              note:'Euro Almanya para birimi.'
            }
          ]
        }
      ]
    },
    {
      id:'w19',
      en:'Cent',
      ro:'tsent',
      tr:'sent',
      examples:[
        {
          en:'Das kostet neunundneunzig Cent.',
          tr:'Bu doksan dokuz sent.',
          bd:[
            {
              ro:'Cent',
              tr:'sent',
              role:'currency',
              note:'1 Euro = 100 Cent.'
            }
          ]
        }
      ]
    },
    {
      id:'w20',
      en:'die Rechnung',
      ro:'dee REKH-nung',
      tr:'hesap / fatura',
      examples:[
        {
          en:'Die Rechnung, bitte.',
          tr:'Hesap, lütfen.',
          bd:[
            {
              ro:'Rechnung',
              tr:'hesap',
              role:'O',
              note:'Feminin → die. Restoranda hesap isterken.'
            }
          ]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Almanca Sayılar 1–20',
      title_en:'German Numbers 1–20',
      explanation:'Almanca sayılar genelde düzenli. 13–19: sayı + zehn (dreizehn = 13). Dikkat: sechs → sechzehn, sieben → siebzehn. eins bir sayı olarak kalır; artikel olarak ein kullanılır.',
      table:[
        {
          pronoun:'1–10',
          form:'eins ... zehn',
          example:'eins, zwei, drei...',
          tr:'bir ... on'
        },
        {
          pronoun:'11–12',
          form:'elf, zwölf',
          example:'elf, zwölf',
          tr:'on bir, on iki'
        },
        {
          pronoun:'13–19',
          form:'-zehn',
          example:'dreizehn, vierzehn',
          tr:'on üç, on dört'
        },
        {
          pronoun:'Onluklar',
          form:'-zig',
          example:'zwanzig, dreißig',
          tr:'yirmi, otuz'
        }
      ],
      note:'21+: birler + und + onluk: einundzwanzig = 21, zweiunddreißig = 32'
    },
    {
      id:'g2',
      title:'Para — Euro und Cent',
      title_en:'Money — Euro and Cent',
      explanation:'Almanya Euro (€) kullanır. Fiyat sormak: Wie viel kostet das? / Was kostet das? Cevap: Das kostet ... Euro (und ... Cent). Virgül ondalık için: 3,50 € = drei Euro fünfzig.',
      table:[
        {
          pronoun:'Soru',
          form:'Wie viel kostet...?',
          example:'Wie viel kostet das?',
          tr:'Bu ne kadar?'
        },
        {
          pronoun:'Cevap',
          form:'Das kostet...',
          example:'Das kostet zehn Euro.',
          tr:'Bu on euro.'
        },
        {
          pronoun:'Hesap',
          form:'Die Rechnung, bitte',
          example:'Die Rechnung, bitte.',
          tr:'Hesap, lütfen.'
        },
        {
          pronoun:'Ödeme',
          form:'Bar / mit Karte',
          example:'Kann ich mit Karte zahlen?',
          tr:'Kartla ödeyebilir miyim?'
        }
      ],
      note:'Almanya\'da nakit hâlâ yaygın. "Bar oder Karte?" = Nakit mi kart mı?'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Zwei Kaffee, bitte.',
      tr:'İki kahve, lütfen.',
      prompt:'Sayı ile sipariş ver'
    },
    {
      id:'sp2',
      en:'Das kostet fünf Euro.',
      tr:'Bu beş euro.',
      prompt:'Fiyat söyle'
    },
    {
      id:'sp3',
      en:'Wie viel kostet das?',
      tr:'Bu ne kadar?',
      prompt:'Fiyat sor'
    },
    {
      id:'sp4',
      en:'Ich habe zwanzig Euro.',
      tr:'Yirmi eurom var.',
      prompt:'Paranı söyle'
    },
    {
      id:'sp5',
      en:'Die Rechnung, bitte.',
      tr:'Hesap, lütfen.',
      prompt:'Hesap iste'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Im Café',
      title_en:'At the Café',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Zwei Kaffee, bitte.',
          tr:'İki kahve, lütfen.',
          gramNote:'Sayı + isim. Kaffee maskulin → zwei Kaffee (çoğulda artikel yok).',
          bd:[
            {
              ro:'Zwei Kaffee',
              tr:'İki kahve',
              role:'O',
              note:'Sayı + isim — çoğulda artikel düşer.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Sonst noch etwas?',
          tr:'Başka bir şey?',
          gramNote:'Sonst = başka, noch = daha, etwas = bir şey.',
          bd:[
            {
              ro:'Sonst noch etwas',
              tr:'Başka bir şey',
              role:'question',
              note:'Sipariş tamamlama sorusu.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Nein, danke. Wie viel kostet das?',
          tr:'Hayır, teşekkürler. Ne kadar?',
          gramNote:[
            {
              ro:'Wie viel kostet das',
              tr:'Ne kadar',
              role:'question',
              note:'Fiyat sorusu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Das macht sechs Euro fünfzig.',
          tr:'Toplam altı euro elli.',
          gramNote:'Das macht = toplam ... tutar.',
          bd:[
            {
              ro:'Das macht',
              tr:'Toplam ... tutar',
              role:'V',
              note:'Alışverişte toplam fiyat.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Hier, bitte. Danke!',
          tr:'Buyurun. Teşekkürler!',
          gramNote:'Hier = burada, işte (para verirken).',
          bd:[
            {
              ro:'Hier',
              tr:'Buyurun / işte',
              role:'K',
              note:'Para uzatırken.'
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
      transcript:'Der Kaffee kostet drei Euro. Das Brot kostet zwei Euro fünfzig. Zusammen macht das fünf Euro fünfzig.',
      tr:'Kahve üç euro. Ekmek iki euro elli. Toplam beş euro elli.',
      questions:[
        {
          q:'Wie viel kostet der Kaffee?',
          opts:[
            '2 €',
            '3 €',
            '5 €',
            '6 €'
          ],
          answer:1,
          tr:'Kahve ne kadar?'
        },
        {
          q:'Wie viel kostet das Brot?',
          opts:[
            '2,50 €',
            '3 €',
            '5 €',
            '5,50 €'
          ],
          answer:0,
          tr:'Ekmek ne kadar?'
        },
        {
          q:'Wie viel kostet alles zusammen?',
          opts:[
            '3 €',
            '5,05 €',
            '5,50 €',
            '6 €'
          ],
          answer:2,
          tr:'Toplam ne kadar?'
        }
      ]
    }
  ],

  numbers: [
    {n:0, word:'null', tr:'sıfır'},
    {n:1, word:'eins', tr:'bir'},
    {n:2, word:'zwei', tr:'iki'},
    {n:3, word:'drei', tr:'üç'},
    {n:4, word:'vier', tr:'dört'},
    {n:5, word:'fünf', tr:'beş'},
    {n:6, word:'sechs', tr:'altı'},
    {n:7, word:'sieben', tr:'yedi'},
    {n:8, word:'acht', tr:'sekiz'},
    {n:9, word:'neun', tr:'dokuz'},
    {n:10, word:'zehn', tr:'on'},
    {n:11, word:'elf', tr:'on bir'},
    {n:12, word:'zwölf', tr:'on iki'},
    {n:13, word:'dreizehn', tr:'on üç'},
    {n:14, word:'vierzehn', tr:'on dört'},
    {n:15, word:'fünfzehn', tr:'on beş'},
    {n:16, word:'sechzehn', tr:'on altı'},
    {n:17, word:'siebzehn', tr:'on yedi'},
    {n:18, word:'achtzehn', tr:'on sekiz'},
    {n:19, word:'neunzehn', tr:'on dokuz'},
    {n:20, word:'zwanzig', tr:'yirmi'},
    {n:30, word:'dreißig', tr:'otuz'},
    {n:40, word:'vierzig', tr:'kırk'},
    {n:50, word:'fünfzig', tr:'elli'},
    {n:60, word:'sechzig', tr:'altmış'},
    {n:70, word:'siebzig', tr:'yetmiş'},
    {n:80, word:'achtzig', tr:'seksen'},
    {n:90, word:'neunzig', tr:'doksan'},
    {n:100, word:'hundert', tr:'yüz'},
    {n:1000, word:'tausend', tr:'bin'}
  ],

  compounds: [
    {n:21, word:'einundzwanzig', tr:'yirmi bir'},
    {n:32, word:'zweiunddreißig', tr:'otuz iki'},
    {n:105, word:'einhundertfünf', tr:'yüz beş'},
    {n:350, word:'dreihundertfünfzig', tr:'üç yüz elli'},
    {n:1835, word:'eintausendachthundertfünfunddreißig', tr:'bin sekiz yüz otuz beş'},
    {n:10000, word:'zehntausend', tr:'on bin'}
  ],

  tones:[]
};
LESSONS[3] = L3;
