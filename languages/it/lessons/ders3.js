// ders3.js — Italian Lesson 3: Numbers & Money (beginner)
const L3 = {
  words:[
    {
      id:'w1',
      en:'uno',
      ro:'U-no',
      tr:'bir',
      tip:'Temel sayı.',
      ctx:'Sayılar ve miktar.',
      examples:[
        {
          en:'Ho un libro.',
          tr:'Bir kitabım var.',
          bd:[
            {
              ro:'uno',
              tr:'bir',
              role:'number',
              note:'uno = bir'
            }
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'due',
      ro:'DU-e',
      tr:'iki',
      tip:'Sayma.',
      ctx:'Sayılar ve miktar.',
      examples:[
        {
          en:'Due caffè, per favore.',
          tr:'İki kahve, lütfen.',
          bd:[
            {
              ro:'due',
              tr:'iki',
              role:'number',
              note:'due = iki'
            }
          ]
        }
      ]
    },
    {
      id:'w3',
      en:'tre',
      ro:'tre',
      tr:'üç',
      tip:'Sayma.',
      ctx:'Sayılar ve miktar.',
      examples:[
        {
          en:'Ci sono tre gatti.',
          tr:'Üç kedi var.',
          bd:[
            {
              ro:'tre',
              tr:'üç',
              role:'number',
              note:'tre = üç'
            }
          ]
        }
      ]
    },
    {
      id:'w4',
      en:'quattro',
      ro:'KWAT-tro',
      tr:'dört',
      tip:'4 sayısı.',
      ctx:'Sayma, miktar.',
      examples:[{
        en:'Quattro stagioni, per favore.',
        tr:'Quattro Stagioni (pizza), lütfen.',
        bd:[{ro:'Quattro',tr:'dört',role:'number',note:'Ünlü pizza çeşidi — 4 malzeme.'}]
      }]
    },
    {
      id:'w5',
      en:'cinque',
      ro:'CHIN-kwe',
      tr:'beş',
      tip:'5 sayısı.',
      ctx:'Sayma, miktar.',
      examples:[{
        en:'Costa cinque euro.',
        tr:'Beş euro.',
        bd:[{ro:'cinque euro',tr:'beş euro',role:'number',note:'Miktar + para birimi.'}]
      }]
    },
    {
      id:'w6',
      en:'sei',
      ro:'say',
      tr:'altı',
      tip:'6 sayısı.',
      ctx:'Sayma, miktar.',
      examples:[{
        en:'Sei caffè, per favore.',
        tr:'Altı kahve, lütfen.',
        bd:[{ro:'Sei',tr:'altı',role:'number',note:'sei + isim (artikel düşer sayıyla).'}]
      }]
    },
    {
      id:'w7',
      en:'sette',
      ro:'SET-te',
      tr:'yedi',
      tip:'7 sayısı.',
      ctx:'Sayma, gün, saat.',
      examples:[{
        en:'Sono le sette.',
        tr:'Saat yedi.',
        bd:[{ro:'sette',tr:'yedi',role:'number',note:'Saati anlatmak.'}]
      }]
    },
    {
      id:'w8',
      en:'otto',
      ro:'OT-to',
      tr:'sekiz',
      tip:'8 sayısı.',
      ctx:'Saat, adet.',
      examples:[{
        en:'Alle otto di mattina.',
        tr:'Sabah sekizde.',
        bd:[{ro:'alle otto',tr:'sekizde',role:'time',note:'alle = saat (çoğul). otto = sekiz.'}]
      }]
    },
    {
      id:'w9',
      en:'nove',
      ro:'NO-ve',
      tr:'dokuz',
      tip:'9 sayısı.',
      ctx:'Sayma, saat.',
      examples:[{
        en:'La riunione è alle nove.',
        tr:'Toplantı saat dokuzda.',
        bd:[{ro:'alle nove',tr:'dokuzda',role:'time',note:'Saat ifadesi.'}]
      }]
    },
    {
      id:'w10',
      en:'dieci',
      ro:'DYE-chi',
      tr:'on',
      tip:'10 sayısı.',
      ctx:'Sayma, fiyat.',
      examples:[{
        en:'Costa dieci euro.',
        tr:'On euro.',
        bd:[{ro:'dieci euro',tr:'on euro',role:'currency',note:'Fiyat ifadesi.'}]
      }]
    },
    {
      id:'w11',
      en:'undici',
      ro:'UN-di-chi',
      tr:'on bir',
      tip:'11 — özel form.',
      ctx:'Sayma, saat.',
      examples:[{
        en:'Il treno parte alle undici.',
        tr:'Tren on birde kalkıyor.',
        bd:[{ro:'alle undici',tr:'on birde',role:'time',note:'undici: 11, özel form.'}]
      }]
    },
    {
      id:'w12',
      en:'dodici',
      ro:'DO-di-chi',
      tr:'on iki',
      tip:'12 — ögle saati.',
      ctx:'Öğle, sayma.',
      examples:[{
        en:'A mezzogiorno, cioè alle dodici.',
        tr:'Öğlen, yani on ikide.',
        bd:[{ro:'dodici',tr:'on iki',role:'number',note:'mezzogiorno = öğlen = 12:00.'}]
      }]
    },
    {
      id:'w13',
      en:'venti',
      ro:'VEN-ti',
      tr:'yirmi',
      tip:'20 onluğu.',
      ctx:'Yaş, fiyat, adet.',
      examples:[{
        en:'Ho venti anni.',
        tr:'Yirmi yaşındayım.',
        bd:[{ro:'venti anni',tr:'yirmi yaş',role:'number',note:'avere + yaş — İtalyancada yaş essere değil avere ile.'}]
      }]
    },
    {
      id:'w14',
      en:'trenta',
      ro:'TREN-ta',
      tr:'otuz',
      tip:'30 onluğu.',
      ctx:'Yaş, fiyat.',
      examples:[{
        en:'Costa trenta euro.',
        tr:'Otuz euro.',
        bd:[{ro:'trenta euro',tr:'otuz euro',role:'currency',note:'Onluk sayı + para.'}]
      }]
    },
    {
      id:'w15',
      en:'cento',
      ro:'CHEN-to',
      tr:'yüz',
      tip:'100.',
      ctx:'Büyük rakamlar.',
      examples:[{
        en:'Cento per cento italiano.',
        tr:'Yüzde yüz İtalyan.',
        bd:[{ro:'Cento per cento',tr:'Yüzde yüz',role:'phrase',note:'Deyimsel kullanım.'}]
      }]
    },
    {
      id:'w16',
      en:'mille',
      ro:'MIL-le',
      tr:'bin',
      tip:'1000. Çoğul: mila.',
      ctx:'Para, nüfus.',
      examples:[{
        en:'Grazie mille!',
        tr:'Çok teşekkürler! (Bin teşekkür!)',
        bd:[{ro:'mille',tr:'bin',role:'number',note:'Deyim: Grazie mille = çok teşekkürler.'}]
      }]
    },
    {
      id:'w17',
      en:'Quanto costa?',
      ro:'KWAN-to KOS-ta',
      tr:'Ne kadar? / Bu ne kadar?',
      tip:'Fiyat sormak.',
      ctx:'Alışverişte.',
      examples:[
        {
          en:'Quanto costa questo?',
          tr:'Bu ne kadar?',
          bd:[
            {
              ro:'Quanto costa',
              tr:'Ne kadar',
              role:'question',
              note:'Fiyat sorusu.'
            },
            {
              ro:'questo',
              tr:'bu',
              role:'O',
              note:'Gösterilen nesne.'
            }
          ]
        }
      ]
    },
    {
      id:'w18',
      en:'euro',
      ro:'EU-ro',
      tr:'euro',
      examples:[
        {
          en:'Costa cinque euro.',
          tr:'Bu beş euro.',
          bd:[
            {
              ro:'cinque euro',
              tr:'beş euro',
              role:'currency',
              note:'İtalya para birimi Euro.'
            }
          ]
        }
      ]
    },
    {
      id:'w19',
      en:'centesimo',
      ro:'chen-TE-zi-mo',
      tr:'sent',
      examples:[
        {
          en:'Costa novantanove centesimi.',
          tr:'Bu doksan dokuz sent.',
          bd:[
            {
              ro:'centesimo',
              tr:'sent',
              role:'currency',
              note:'1 Euro = 100 centesimi.'
            }
          ]
        }
      ]
    },
    {
      id:'w20',
      en:'il conto',
      ro:'il KON-to',
      tr:'hesap / fatura',
      examples:[
        {
          en:'Il conto, per favore.',
          tr:'Hesap, lütfen.',
          bd:[
            {
              ro:'il conto',
              tr:'hesap',
              role:'O',
              note:'Restoranda hesap isterken.'
            }
          ]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'İtalyanca Sayılar 1–20',
      title_en:'Italian Numbers 1–20',
      explanation:'İtalyanca sayılar: 1–10 düzenli. 11–16 özel (undici, dodici...). 17–19: dici + sayı (diciassette = 17). 20+: onluk + birler (ventuno = 21, trentadue = 32). Dikkat: ventuno (bir eki düşer), ventidue.',
      table:[
        {
          pronoun:'1–10',
          form:'uno ... dieci',
          example:'uno, due, tre...',
          tr:'bir ... on'
        },
        {
          pronoun:'11–16',
          form:'undici ... sedici',
          example:'undici, dodici',
          tr:'on bir, on iki'
        },
        {
          pronoun:'17–19',
          form:'dici + N',
          example:'diciassette, diciotto',
          tr:'on yedi, on sekiz'
        },
        {
          pronoun:'Onluklar',
          form:'-nta',
          example:'venti, trenta',
          tr:'yirmi, otuz'
        }
      ],
      note:'21+: ventuno, trentadue — birler + onluk (Almancanın tersi!).'
    },
    {
      id:'g2',
      title:'Para — Euro e centesimi',
      title_en:'Money — Euro and Cents',
      explanation:'İtalya Euro (€) kullanır. Fiyat sormak: Quanto costa? / Quanto viene? Cevap: Costa ... euro (e ... centesimi). Virgül ondalık: 3,50 € = tre euro e cinquanta centesimi.',
      table:[
        {
          pronoun:'Soru',
          form:'Quanto costa...?',
          example:'Quanto costa questo?',
          tr:'Bu ne kadar?'
        },
        {
          pronoun:'Cevap',
          form:'Costa...',
          example:'Costa dieci euro.',
          tr:'Bu on euro.'
        },
        {
          pronoun:'Hesap',
          form:'Il conto, per favore',
          example:'Il conto, per favore.',
          tr:'Hesap, lütfen.'
        },
        {
          pronoun:'Ödeme',
          form:'Contanti / con carta',
          example:'Posso pagare con carta?',
          tr:'Kartla ödeyebilir miyim?'
        }
      ],
      note:'İtalya\'da nakit hâlâ yaygın. "Contanti o carta?" = Nakit mi kart mı?'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Due caffè, per favore.',
      tr:'İki kahve, lütfen.',
      prompt:'Sayı ile sipariş ver'
    },
    {
      id:'sp2',
      en:'Costa cinque euro.',
      tr:'Bu beş euro.',
      prompt:'Fiyat söyle'
    },
    {
      id:'sp3',
      en:'Quanto costa questo?',
      tr:'Bu ne kadar?',
      prompt:'Fiyat sor'
    },
    {
      id:'sp4',
      en:'Ho venti euro.',
      tr:'Yirmi eurom var.',
      prompt:'Paranı söyle'
    },
    {
      id:'sp5',
      en:'Il conto, per favore.',
      tr:'Hesap, lütfen.',
      prompt:'Hesap iste'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Al bar',
      title_en:'At the Café',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Due caffè, per favore.',
          tr:'İki kahve, lütfen.',
          gramNote:'Sayı + isim.',
          bd:[
            {
              ro:'Due caffè',
              tr:'İki kahve',
              role:'O',
              note:'Sayı + isim — artikel düşer.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Altro?',
          tr:'Başka bir şey?',
          gramNote:'Altro = başka.',
          bd:[
            {
              ro:'Altro',
              tr:'Başka bir şey',
              role:'question',
              note:'Sipariş tamamlama.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'No, grazie. Quanto costa?',
          tr:'Hayır, teşekkürler. Ne kadar?',
          gramNote:[
            {
              ro:'Quanto costa',
              tr:'Ne kadar',
              role:'question',
              note:'Fiyat sorusu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Sei euro e cinquanta.',
          tr:'Toplam altı euro elli.',
          gramNote:[
            {
              ro:'Sei euro e cinquanta',
              tr:'6,50 euro',
              role:'currency',
              note:'e = ve (ondalık).'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Ecco, grazie!',
          tr:'Buyurun. Teşekkürler!',
          gramNote:'Ecco = işte, buyurun.',
          bd:[
            {
              ro:'Ecco',
              tr:'Buyurun / işte',
              role:'K',
              note:'Para verirken.'
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
      transcript:'Il caffè costa tre euro. Il pane costa due euro e cinquanta. In totale sono cinque euro e cinquanta.',
      tr:'Kahve üç euro. Ekmek iki euro elli. Toplam beş euro elli.',
      questions:[
        {
          q:'Quanto costa il caffè?',
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
          q:'Quanto costa il pane?',
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
          q:'Quanto costa tutto?',
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
  tones:[],
  numbers:[
    {
      n:0,
      word:'zero',
      tr:'sıfır'
    },
    {
      n:1,
      word:'uno',
      tr:'bir'
    },
    {
      n:2,
      word:'due',
      tr:'iki'
    },
    {
      n:3,
      word:'tre',
      tr:'üç'
    },
    {
      n:4,
      word:'quattro',
      tr:'dört'
    },
    {
      n:5,
      word:'cinque',
      tr:'beş'
    },
    {
      n:6,
      word:'sei',
      tr:'altı'
    },
    {
      n:7,
      word:'sette',
      tr:'yedi'
    },
    {
      n:8,
      word:'otto',
      tr:'sekiz'
    },
    {
      n:9,
      word:'nove',
      tr:'dokuz'
    },
    {
      n:10,
      word:'dieci',
      tr:'on'
    },
    {
      n:11,
      word:'undici',
      tr:'on bir'
    },
    {
      n:12,
      word:'dodici',
      tr:'on iki'
    },
    {
      n:13,
      word:'tredici',
      tr:'on üç'
    },
    {
      n:14,
      word:'quattordici',
      tr:'on dört'
    },
    {
      n:15,
      word:'quindici',
      tr:'on beş'
    },
    {
      n:16,
      word:'sedici',
      tr:'on altı'
    },
    {
      n:17,
      word:'diciassette',
      tr:'on yedi'
    },
    {
      n:18,
      word:'diciotto',
      tr:'on sekiz'
    },
    {
      n:19,
      word:'diciannove',
      tr:'on dokuz'
    },
    {
      n:20,
      word:'venti',
      tr:'yirmi'
    },
    {
      n:30,
      word:'trenta',
      tr:'otuz'
    },
    {
      n:40,
      word:'quaranta',
      tr:'kırk'
    },
    {
      n:50,
      word:'cinquanta',
      tr:'elli'
    },
    {
      n:60,
      word:'sessanta',
      tr:'altmış'
    },
    {
      n:70,
      word:'settanta',
      tr:'yetmiş'
    },
    {
      n:80,
      word:'ottanta',
      tr:'seksen'
    },
    {
      n:90,
      word:'novanta',
      tr:'doksan'
    },
    {
      n:100,
      word:'cento',
      tr:'yüz'
    },
    {
      n:1000,
      word:'mille',
      tr:'bin'
    }
  ],
  compounds:[
    {
      n:21,
      word:'ventuno',
      tr:'yirmi bir'
    },
    {
      n:32,
      word:'trentadue',
      tr:'otuz iki'
    },
    {
      n:105,
      word:'centocinque',
      tr:'yüz beş'
    },
    {
      n:350,
      word:'trecentocinquanta',
      tr:'üç yüz elli'
    },
    {
      n:1835,
      word:'milleottocentotrentacinque',
      tr:'bin sekiz yüz otuz beş'
    },
    {
      n:10000,
      word:'diecimila',
      tr:'on bin'
    }
  ]
};
LESSONS[3] = L3;
