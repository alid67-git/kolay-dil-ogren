// ders4.js — German Lesson 4: Time & Date (beginner)
const L4 = {
  words:[
    {
      id:'w1',
      en:'Wie spät ist es?',
      ro:'vee shpayt ist es',
      tr:'Saat kaç?',
      tip:'Saat sormak.',
      examples:[
        {
          en:'Entschuldigung, wie spät ist es?',
          tr:'Pardon, saat kaç?',
          bd:[
            {
              ro:'Wie spät ist es',
              tr:'Saat kaç',
              role:'question',
              note:'Resmi ortamda Entschuldigung ekle.'
            }
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'Es ist drei Uhr',
      ro:'es ist dray ur',
      tr:'Saat üç',
      examples:[
        {
          en:'Es ist drei Uhr.',
          tr:'Saat üç.',
          bd:[
            {
              ro:'Es ist',
              tr:'Saat ...',
              role:'V',
              note:'Es = nötr zamir. Uhr = saat.'
            }
          ]
        }
      ]
    },
    {
      id:'w3',
      en:'der Morgen',
      ro:'der MOR-gen',
      tr:'sabah'
    },
    {
      id:'w4',
      en:'der Nachmittag',
      ro:'der NAKH-mi-tak',
      tr:'öğleden sonra'
    },
    {
      id:'w5',
      en:'der Abend',
      ro:'der A-bent',
      tr:'akşam'
    },
    {
      id:'w6',
      en:'die Nacht',
      ro:'dee NAKHT',
      tr:'gece'
    },
    {
      id:'w7',
      en:'heute',
      ro:'HOY-te',
      tr:'bugün'
    },
    {
      id:'w8',
      en:'morgen',
      ro:'MOR-gen',
      tr:'yarın'
    },
    {
      id:'w9',
      en:'gestern',
      ro:'GES-tern',
      tr:'dün'
    },
    {
      id:'w10',
      en:'Montag',
      ro:'MON-tak',
      tr:'Pazartesi'
    },
    {
      id:'w11',
      en:'Dienstag',
      ro:'DEENS-tak',
      tr:'Salı'
    },
    {
      id:'w12',
      en:'Mittwoch',
      ro:'MIT-vokh',
      tr:'Çarşamba'
    },
    {
      id:'w13',
      en:'Donnerstag',
      ro:'DO-ner-stak',
      tr:'Perşembe'
    },
    {
      id:'w14',
      en:'Freitag',
      ro:'FRAY-tak',
      tr:'Cuma'
    },
    {
      id:'w15',
      en:'Samstag',
      ro:'ZAMS-tak',
      tr:'Cumartesi'
    },
    {
      id:'w16',
      en:'Sonntag',
      ro:'ZON-tak',
      tr:'Pazar'
    },
    {
      id:'w17',
      en:'der Januar',
      ro:'der YAN-oo-ar',
      tr:'Ocak'
    },
    {
      id:'w18',
      en:'der Juli',
      ro:'der YOO-lee',
      tr:'Temmuz'
    },
    {
      id:'w19',
      en:'Wann?',
      ro:'van',
      tr:'Ne zaman?'
    },
    {
      id:'w20',
      en:'Um wie viel Uhr?',
      ro:'um vee feel ur',
      tr:'Saat kaçta?'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Saat Sorma ve Söyleme',
      title_en:'Telling Time',
      explanation:'Almancada saat: Es ist ... Uhr. 15:00 = Es ist fünfzehn Uhr (resmi) veya Es ist drei Uhr (gündüz). Viertel nach = çeyrek geçe, halb = buçuk.',
      table:[
        {
          pronoun:'Tam saat',
          form:'Es ist ... Uhr',
          example:'Es ist drei Uhr.',
          tr:'Saat üç.'
        },
        {
          pronoun:'Buçuk',
          form:'halb ...',
          example:'Es ist halb vier.',
          tr:'Saat üç buçuk.'
        },
        {
          pronoun:'Soru',
          form:'Wie spät ist es?',
          example:'Wie spät ist es?',
          tr:'Saat kaç?'
        },
        {
          pronoun:'Randevu',
          form:'Um ... Uhr',
          example:'Um acht Uhr.',
          tr:'Saat sekizde.'
        }
      ],
      note:'halb vier = 3:30 (Almancada yarım dördüncü saate gidilir — Türkçeden farklı!)'
    },
    {
      id:'g2',
      title:'Günler ve Aylar',
      title_en:'Days and Months',
      explanation:'Günler ve aylar büyük harfle yazılır. am Montag = pazartesi günü. im Januar = ocak ayında. Wann? = ne zaman?',
      table:[
        {
          pronoun:'Günler',
          form:'Montag ... Sonntag',
          example:'Am Montag.',
          tr:'Pazartesi günü.'
        },
        {
          pronoun:'Aylar',
          form:'Januar ... Dezember',
          example:'Im Juli.',
          tr:'Temmuz\'da.'
        },
        {
          pronoun:'Bugün',
          form:'heute / morgen / gestern',
          example:'Heute ist Freitag.',
          tr:'Bugün cuma.'
        },
        {
          pronoun:'Soru',
          form:'Wann?',
          example:'Wann beginnt der Kurs?',
          tr:'Kurs ne zaman başlıyor?'
        }
      ],
      note:'am + gün, im + ay, um + saat — edatları ezberle.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Wie spät ist es?',
      tr:'Saat kaç?',
      prompt:'Saat sor'
    },
    {
      id:'sp2',
      en:'Es ist zehn Uhr.',
      tr:'Saat on.',
      prompt:'Saati söyle'
    },
    {
      id:'sp3',
      en:'Heute ist Montag.',
      tr:'Bugün pazartesi.',
      prompt:'Bugünün gününü söyle'
    },
    {
      id:'sp4',
      en:'Morgen habe ich Zeit.',
      tr:'Yarın vaktim var.',
      prompt:'Yarın hakkında konuş'
    },
    {
      id:'sp5',
      en:'Um neun Uhr, bitte.',
      tr:'Saat dokuzda, lütfen.',
      prompt:'Randevu saati belirt'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Termin vereinbaren',
      title_en:'Making an Appointment',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Wann haben Sie Zeit?',
          tr:'Ne zaman müsait siniz?',
          gramNote:'Resmi randevu sorusu.',
          bd:[
            {
              ro:'Wann',
              tr:'Ne zaman',
              role:'question',
              note:'Zaman sorusu.'
            },
            {
              ro:'haben Sie Zeit',
              tr:'müsait misiniz',
              role:'V',
              note:'Zeit haben = vakti olmak.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Am Dienstag um zehn Uhr?',
          tr:'Salı saat onda?',
          gramNote:'Öneri — am + gün, um + saat.',
          bd:[
            {
              ro:'Am Dienstag',
              tr:'Salı günü',
              role:'K',
              note:'am + gün.'
            },
            {
              ro:'um zehn Uhr',
              tr:'saat onda',
              role:'K',
              note:'um + saat.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Ja, das passt. Bis Dienstag!',
          tr:'Evet, uyar. Salıya kadar!',
          gramNote:'Das passt = uyar, olur.',
          bd:[
            {
              ro:'Das passt',
              tr:'Uyar / olur',
              role:'V',
              note:'Günlük kabul ifadesi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Bis Dienstag. Auf Wiedersehen!',
          tr:'Salıya kadar. Hoşça kalın!',
          gramNote:'Bis = ...e kadar.',
          bd:[
            {
              ro:'Bis Dienstag',
              tr:'Salıya kadar',
              role:'farewell',
              note:'Bis + zaman = ...e kadar.'
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
      transcript:'Heute ist Mittwoch, der fünfzehnte März. Der Unterricht beginnt um neun Uhr und endet um elf Uhr.',
      tr:'Bugün çarşamba, 15 Mart. Ders saat dokuzda başlıyor ve saat on birde bitiyor.',
      questions:[
        {
          q:'Welcher Tag ist heute?',
          opts:[
            'Montag',
            'Dienstag',
            'Mittwoch',
            'Freitag'
          ],
          answer:2,
          tr:'Bugün hangi gün?'
        },
        {
          q:'Wann beginnt der Unterricht?',
          opts:[
            '8 Uhr',
            '9 Uhr',
            '10 Uhr',
            '11 Uhr'
          ],
          answer:1,
          tr:'Ders ne zaman başlıyor?'
        },
        {
          q:'Wann endet der Unterricht?',
          opts:[
            '9 Uhr',
            '10 Uhr',
            '11 Uhr',
            '12 Uhr'
          ],
          answer:2,
          tr:'Ders ne zaman bitiyor?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[4] = L4;
