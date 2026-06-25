// ders9.js — German Lesson 9: Hotel & Accommodation (beginner)
const L9 = {
  words:[
    {
      id:'w1',
      en:'das Hotel',
      ro:'das ho-TEL',
      tr:'otel'
    },
    {
      id:'w2',
      en:'die Rezeption',
      ro:'dee re-tsep-TSI-ON',
      tr:'resepsiyon'
    },
    {
      id:'w3',
      en:'das Zimmer',
      ro:'das TSI-mer',
      tr:'oda'
    },
    {
      id:'w4',
      en:'einchecken',
      ro:'AYN-shek-en',
      tr:'giriş yapmak (otel)'
    },
    {
      id:'w5',
      en:'auschecken',
      ro:'AUS-shek-en',
      tr:'çıkış yapmak'
    },
    {
      id:'w6',
      en:'der Schlüssel',
      ro:'der SHLÜ-sel',
      tr:'anahtar'
    },
    {
      id:'w7',
      en:'das Einzelzimmer',
      ro:'das AYN-tsel-tsi-mer',
      tr:'tek kişilik oda'
    },
    {
      id:'w8',
      en:'das Doppelzimmer',
      ro:'das DO-pel-tsi-mer',
      tr:'çift kişilik oda'
    },
    {
      id:'w9',
      en:'Frühstück',
      ro:'FRÜ-shtük',
      tr:'kahvaltı'
    },
    {
      id:'w10',
      en:'WLAN / WiFi',
      ro:'vee-fee',
      tr:'kablosuz internet'
    },
    {
      id:'w11',
      en:'die Klimaanlage',
      ro:'dee KLEE-ma-an-la-ge',
      tr:'klima'
    },
    {
      id:'w12',
      en:'die Buchung',
      ro:'dee BUKH-ung',
      tr:'rezervasyon'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Otelde Check-in',
      title_en:'Hotel Check-in',
      explanation:'Ich habe eine Buchung = Rezervasyonum var. Unter dem Namen... = ... adına. Frühstück inbegriffen? = Kahvaltı dahil mi? Spätestens um 11 Uhr auschecken.',
      table:[
        {
          pronoun:'Rezervasyon',
          form:'Ich habe eine Buchung',
          example:'Ich habe eine Buchung auf Ali.',
          tr:'Ali adına rezervasyonum var.'
        },
        {
          pronoun:'Oda',
          form:'Ein Doppelzimmer',
          example:'Ein Doppelzimmer, bitte.',
          tr:'Çift kişilik oda, lütfen.'
        },
        {
          pronoun:'Kahvaltı',
          form:'Ist Frühstück dabei?',
          example:'Ist Frühstück inbegriffen?',
          tr:'Kahvaltı dahil mi?'
        },
        {
          pronoun:'Çıkış',
          form:'Wann muss ich auschecken?',
          example:'Bis wann kann ich auschecken?',
          tr:'En geç ne zaman çıkış yapmalıyım?'
        }
      ],
      note:'Almanya\'da otellerde genelde temizlik ve düzen önemlidir.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Ich habe eine Buchung.',
      tr:'Rezervasyonum var.',
      prompt:'Check-in yap'
    },
    {
      id:'sp2',
      en:'Ein Einzelzimmer, bitte.',
      tr:'Tek kişilik oda, lütfen.',
      prompt:'Oda iste'
    },
    {
      id:'sp3',
      en:'Wo ist das Frühstück?',
      tr:'Kahvaltı nerede?',
      prompt:'Kahvaltı sor'
    },
    {
      id:'sp4',
      en:'Kann ich auschecken?',
      tr:'Çıkış yapabilir miyim?',
      prompt:'Check-out yap'
    },
    {
      id:'sp5',
      en:'Das Zimmer ist sehr schön.',
      tr:'Oda çok güzel.',
      prompt:'Odayı öv'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Hotel Check-in',
      title_en:'Hotel Check-in',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Guten Abend! Willkommen im Hotel.',
          tr:'İyi akşamlar! Otele hoş geldiniz.',
          gramNote:'Resepsiyon karşılama.',
          bd:[
            {
              ro:'Willkommen',
              tr:'Hoş geldiniz',
              role:'greeting',
              note:'Otel karşılama.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Guten Abend. Ich habe eine Buchung auf den Namen Ali.',
          tr:'İyi akşamlar. Ali adına rezervasyonum var.',
          gramNote:[
            {
              ro:'Buchung auf den Namen',
              tr:'adına rezervasyon',
              role:'O',
              note:'auf + aküsatif — adına.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Ja, ein Einzelzimmer für zwei Nächte. Frühstück ist inbegriffen.',
          tr:'Evet, iki gece tek kişilik oda. Kahvaltı dahil.',
          gramNote:[
            {
              ro:'inbegriffen',
              tr:'dahil',
              role:'adj',
              note:'Fiyata dahil.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Perfekt. Gibt es WLAN?',
          tr:'Mükemmel. WiFi var mı?',
          gramNote:'Gibt es = var mı.',
          bd:[
            {
              ro:'Gibt es',
              tr:'Var mı',
              role:'question',
              note:'Es gibt = var (genel).'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Ja, das Passwort steht auf dem Zettel. Hier ist Ihr Schlüssel. Zimmer 305.',
          tr:'Evet, şifre kağıtta. Anahtarınız burada. Oda 305.',
          gramNote:[
            {
              ro:'Schlüssel',
              tr:'anahtar',
              role:'O',
              note:'Maskulin → der.'
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
      transcript:'Ali hat ein Einzelzimmer für drei Nächte gebucht. Frühstück ist von sieben bis zehn Uhr. Auschecken bis elf Uhr.',
      tr:'Ali üç gece tek kişilik oda ayırttı. Kahvaltı yedi ile on arası. Çıkış on bire kadar.',
      questions:[
        {
          q:'Wie viele Nächte?',
          opts:[
            '1',
            '2',
            '3',
            '4'
          ],
          answer:2,
          tr:'Kaç gece?'
        },
        {
          q:'Wann ist Frühstück?',
          opts:[
            '6–9',
            '7–10',
            '8–11',
            '9–12'
          ],
          answer:1,
          tr:'Kahvaltı ne zaman?'
        },
        {
          q:'Bis wann auschecken?',
          opts:[
            '10 Uhr',
            '11 Uhr',
            '12 Uhr',
            '13 Uhr'
          ],
          answer:1,
          tr:'En geç ne zaman çıkış?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[9] = L9;
