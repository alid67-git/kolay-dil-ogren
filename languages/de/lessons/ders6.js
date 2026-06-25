// ders6.js — German Lesson 6: Shopping (beginner)
const L6 = {
  words:[
    {
      id:'w1',
      en:'Wo finde ich...?',
      ro:'vo FIN-de ikh',
      tr:'... nerede bulabilirim?'
    },
    {
      id:'w2',
      en:'Wie viel kostet das?',
      ro:'vee feel KOS-tet das',
      tr:'Bu ne kadar?'
    },
    {
      id:'w3',
      en:'zu teuer',
      ro:'tsu TOY-er',
      tr:'çok pahalı'
    },
    {
      id:'w4',
      en:'billig',
      ro:'BIL-likh',
      tr:'ucuz'
    },
    {
      id:'w5',
      en:'der Rabatt',
      ro:'der ra-BAT',
      tr:'indirim'
    },
    {
      id:'w6',
      en:'die Größe',
      ro:'dee GRÖ-se',
      tr:'beden'
    },
    {
      id:'w7',
      en:'die Farbe',
      ro:'dee FAR-be',
      tr:'renk'
    },
    {
      id:'w8',
      en:'anprobieren',
      ro:'AN-pro-bee-ren',
      tr:'denemek (giysi)'
    },
    {
      id:'w9',
      en:'die Umkleidekabine',
      ro:'dee UM-kly-de-ka-BEE-ne',
      tr:'deneme kabini'
    },
    {
      id:'w10',
      en:'passen',
      ro:'PAS-sen',
      tr:'uymak / olmak (beden)'
    },
    {
      id:'w11',
      en:'kaufen',
      ro:'KAU-fen',
      tr:'satın almak'
    },
    {
      id:'w12',
      en:'bezahlen',
      ro:'be-TSA-len',
      tr:'ödemek'
    },
    {
      id:'w13',
      en:'die Quittung',
      ro:'dee kvi-TUNG',
      tr:'fiş'
    },
    {
      id:'w14',
      en:'umtauschen',
      ro:'UM-taush-en',
      tr:'değiştirmek (iade)'
    },
    {
      id:'w15',
      en:'das Sonderangebot',
      ro:'das ZON-der-an-ge-bot',
      tr:'özel teklif / indirim'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Alışverişte Faydalı İfadeler',
      title_en:'Useful Shopping Phrases',
      explanation:'Mağazada: Guten Tag ile başla. Wie viel kostet das? = fiyat sor. Kann ich das anprobieren? = deneyebilir miyim? Das ist zu teuer = çok pahalı.',
      table:[
        {
          pronoun:'Fiyat',
          form:'Wie viel kostet...?',
          example:'Wie viel kostet die Jacke?',
          tr:'Ceket ne kadar?'
        },
        {
          pronoun:'Deneme',
          form:'Kann ich anprobieren?',
          example:'Kann ich das anprobieren?',
          tr:'Deneyebilir miyim?'
        },
        {
          pronoun:'Beden',
          form:'Haben Sie Größe M?',
          example:'Haben Sie das in Größe L?',
          tr:'L beden var mı?'
        },
        {
          pronoun:'Ödeme',
          form:'Wo kann ich bezahlen?',
          example:'Wo kann ich bezahlen?',
          tr:'Nerede ödeyebilirim?'
        }
      ],
      note:'Sonntags çoğu mağaza kapalı — Almanya\'da dinlenme günü.'
    }
  ],
  speaking:[
    {
      id:'g2',
      title:'Satın Alma',
      title_en:'Making a Purchase',
      explanation:'Almancada satın alma: Ich nehme das = Bunu alıyorum. Kann ich mit Karte zahlen? = Kartla ödeyebilir miyim? Haben Sie das in ...? = ... var mı?',
      table:[
        {
          pronoun:'Satın alma',
          form:'Ich nehme...',
          example:'Ich nehme die blaue Jacke.',
          tr:'Mavi ceketi alıyorum.'
        },
        {
          pronoun:'Ödeme',
          form:'Bar oder mit Karte?',
          example:'Kann ich mit Karte zahlen?',
          tr:'Kartla ödeyebilir miyim?'
        },
        {
          pronoun:'Fiş',
          form:'Kann ich eine Quittung haben?',
          example:'Kann ich eine Quittung haben?',
          tr:'Fiş alabilir miyim?'
        },
        {
          pronoun:'İade',
          form:'Kann ich das umtauschen?',
          example:'Kann ich das umtauschen?',
          tr:'Bunu değiştirebilir miyim?'
        }
      ],
      note:'Kassenbon = fiş. Umtauschrecht = değişim hakkı (genelde 14 gün).'
    }
  ],
  dialogues:[
    {
      id:'sp1',
      en:'Wie viel kostet das?',
      tr:'Bu ne kadar?',
      prompt:'Fiyat sor'
    },
    {
      id:'sp2',
      en:'Das ist zu teuer.',
      tr:'Bu çok pahalı.',
      prompt:'Pahalı de'
    },
    {
      id:'sp3',
      en:'Kann ich das anprobieren?',
      tr:'Bunu deneyebilir miyim?',
      prompt:'Deneme iste'
    },
    {
      id:'sp4',
      en:'Das passt mir.',
      tr:'Bu bana uyuyor.',
      prompt:'Beden uygun de'
    },
    {
      id:'sp5',
      en:'Ich nehme das.',
      tr:'Bunu alıyorum.',
      prompt:'Satın al'
    }
  ],
  listening:[
    {
      id:'d1',
      title:'Im Geschäft',
      title_en:'In the Shop',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Guten Tag! Kann ich Ihnen helfen?',
          tr:'İyi günler! Yardımcı olabilir miyim?',
          gramNote:'Satış elemanı karşılama.',
          bd:[
            {
              ro:'Kann ich helfen',
              tr:'Yardım edebilir miyim',
              role:'modal',
              note:'Mağaza standart sorusu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Ja, ich suche eine Jacke.',
          tr:'Evet, ceket arıyorum.',
          gramNote:'suchen = aramak.',
          bd:[
            {
              ro:'ich suche',
              tr:'arıyorum',
              role:'V',
              note:'suchen + aküsatif.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Welche Größe brauchen Sie?',
          tr:'Hangi beden lazım?',
          gramNote:'brauchen = ihtiyaç duymak.',
          bd:[
            {
              ro:'Welche Größe',
              tr:'Hangi beden',
              role:'question',
              note:'Welche = hangi (dişil).'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Größe M, bitte. Kann ich die anprobieren?',
          tr:'M beden, lütfen. Deneyebilir miyim?',
          gramNote:[
            {
              ro:'anprobieren',
              tr:'denemek',
              role:'V',
              note:'Giysi denemek.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Natürlich. Die Umkleidekabine ist dort.',
          tr:'Tabii. Deneme kabini orada.',
          gramNote:[
            {
              ro:'Umkleidekabine',
              tr:'deneme kabini',
              role:'O',
              note:'Feminin → die.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Die passt! Wie viel kostet sie?',
          tr:'Bu uydu! Ne kadar?',
          gramNote:'Feminin zamir: sie = die Jacke.',
          bd:[
            {
              ro:'sie',
              tr:'o (dişil)',
              role:'S',
              note:'Dişil isimler sie zamir alır.'
            }
          ]
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[6] = L6;
