// ders4.js — Italian Lesson 4: Time & Date (beginner)
const L4 = {
  words:[
    {
      id:'w1',
      en:'Che ore sono?',
      ro:'kay O-re SO-no',
      tr:'Saat kaç?',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'Sono le tre',
      ro:'SO-no le tre',
      tr:'Saat üç'
    },
    {
      id:'w3',
      en:'la mattina',
      ro:'la mat-TI-na',
      tr:'sabah'
    },
    {
      id:'w4',
      en:'oggi',
      ro:'OD-dji',
      tr:'bugün'
    },
    {
      id:'w5',
      en:'lunedì',
      ro:'lu-ne-DI',
      tr:'Pazartesi'
    },
    {
      id:'w6',
      en:'gennaio',
      ro:'jen-NA-yo',
      tr:'Ocak'
    },
    {
      id:'w7',
      en:'Quando?',
      ro:'KWAN-do',
      tr:'Ne zaman?'
    },
    {
      id:'w8',
      en:'A che ora?',
      ro:'a kay O-ra',
      tr:'Saat kaçta?'
    },
    {
      id:'w9',
      en:'domani',
      ro:'do-MA-ni',
      tr:'yarın'
    },
    {
      id:'w10',
      en:'ieri',
      ro:'YE-ri',
      tr:'dün'
    },
    {
      id:'w11',
      en:'il pomeriggio',
      ro:'il po-me-RID-jo',
      tr:'öğleden sonra'
    },
    {
      id:'w12',
      en:'la sera',
      ro:'la SE-ra',
      tr:'akşam'
    },
    {
      id:'w13',
      en:'martedì',
      ro:'mar-te-DI',
      tr:'Salı'
    },
    {
      id:'w14',
      en:'mercoledì',
      ro:'mer-ko-le-DI',
      tr:'Çarşamba'
    },
    {
      id:'w15',
      en:'giovedì',
      ro:'jo-ve-DI',
      tr:'Perşembe'
    },
    {
      id:'w16',
      en:'venerdì',
      ro:'ve-ner-DI',
      tr:'Cuma'
    },
    {
      id:'w17',
      en:'sabato',
      ro:'SA-ba-to',
      tr:'Cumartesi'
    },
    {
      id:'w18',
      en:'domenica',
      ro:'do-ME-ni-ka',
      tr:'Pazar'
    },
    {
      id:'w19',
      en:'luglio',
      ro:'LU-lyo',
      tr:'Temmuz'
    },
    {
      id:'w20',
      en:'la settimana',
      ro:'la set-ti-MA-na',
      tr:'hafta'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Saat Sorma ve Söyleme',
      title_en:'Telling Time',
      explanation:'İtalyancada saat: Che ore sono? Sono le ... (2+), È l\'una (1:00). e mezza = buçuk. Alle otto = saat sekizde.',
      table:[
        {
          pronoun:'Tam saat',
          form:'Che ore sono?',
          example:'Che ore sono?',
          tr:'Saat kaç?'
        },
        {
          pronoun:'Bugün',
          form:'oggi',
          example:'oggi',
          tr:'bugün'
        }
      ],
      note:'Saat ifadelerini Türkçe açıklamalarla ezberle.'
    },
    {
      id:'g2',
      title:'Günler ve Aylar',
      title_en:'Days and Months',
      explanation:'Günler ve aylar küçük harfle yazılır. Randevu için gün + saat kombinasyonu kullanılır.',
      table:[
        {
          pronoun:'Günler',
          form:'lunedì',
          example:'lunedì',
          tr:'Pazartesi'
        },
        {
          pronoun:'Aylar',
          form:'gennaio',
          example:'gennaio',
          tr:'Ocak'
        }
      ],
      note:'el/il/le + gün, en/a + ay, a las/alle/à + saat.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Che ore sono?',
      tr:'Saat kaç?',
      prompt:'Saat sor'
    },
    {
      id:'sp2',
      en:'Sono le tre',
      tr:'Saat üç',
      prompt:'Saati söyle'
    },
    {
      id:'sp3',
      en:'oggi',
      tr:'bugün',
      prompt:'Bugünü söyle'
    },
    {
      id:'sp4',
      en:'domani',
      tr:'yarın',
      prompt:'Yarın hakkında konuş'
    },
    {
      id:'sp5',
      en:'A che ora?',
      tr:'Saat kaçta?',
      prompt:'Randevu saati belirt'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Randevu',
      title_en:'Appointment',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Quando??',
          tr:'Ne zaman??',
          gramNote:'Randevu sorusu.',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'lunedì A che ora?',
          tr:'Pazartesi',
          gramNote:'Öneri.',
          bd:[]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Sì, mi va bene.',
          tr:'Evet, uyar.',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'A dopo!',
          tr:'Görüşürüz!',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Oggi è mercoledì. La lezione inizia alle nove.',
      tr:'Oggi è mercoledì. La lezione inizia alle nove.',
      questions:[
        {
          q:'?',
          opts:[
            'Che ore sono?',
            'Sono le tre',
            'la mattina',
            'oggi'
          ],
          answer:0,
          tr:'İlk kelime?'
        },
        {
          q:'??',
          opts:[
            'Sono le tre',
            'la mattina',
            'oggi',
            'lunedì'
          ],
          answer:3,
          tr:'Dördüncü kelime?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[4] = L4;
