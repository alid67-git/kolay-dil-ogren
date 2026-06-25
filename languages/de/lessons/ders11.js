// ders11.js — German Lesson 11: Health (beginner)
const L11 = {
  words:[
    {
      id:'w1',
      en:'der Arzt / die Ärztin',
      ro:'der artst / dee ERT-sin',
      tr:'doktor'
    },
    {
      id:'w2',
      en:'das Krankenhaus',
      ro:'das KRANK-en-haus',
      tr:'hastane'
    },
    {
      id:'w3',
      en:'die Apotheke',
      ro:'dee a-po-TAY-ke',
      tr:'eczane'
    },
    {
      id:'w4',
      en:'krank',
      ro:'krank',
      tr:'hasta'
    },
    {
      id:'w5',
      en:'die Schmerzen',
      ro:'dee SHMER-tsen',
      tr:'ağrı'
    },
    {
      id:'w6',
      en:'das Fieber',
      ro:'das FEE-ber',
      tr:'ateş'
    },
    {
      id:'w7',
      en:'der Husten',
      ro:'der HUS-ten',
      tr:'öksürük'
    },
    {
      id:'w8',
      en:'die Erkältung',
      ro:'dee er-KEL-tung',
      tr:'soğuk algınlığı'
    },
    {
      id:'w9',
      en:'das Medikament',
      ro:'das me-di-ka-MENT',
      tr:'ilaç'
    },
    {
      id:'w10',
      en:'der Termin',
      ro:'der ter-MIN',
      tr:'randevu'
    },
    {
      id:'w11',
      en:'die Versicherung',
      ro:'dee fer-ZI-khe-rung',
      tr:'sigorta'
    },
    {
      id:'w12',
      en:'Gute Besserung!',
      ro:'GU-te BE-ser-ung',
      tr:'Geçmiş olsun!'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Doktorda',
      title_en:'At the Doctor',
      explanation:'Mir tut ... weh = ... ağrıyor. Ich bin krank = hastayım. Ich brauche einen Termin = randevuya ihtiyacım var. Gute Besserung! = Geçmiş olsun!',
      table:[
        {
          pronoun:'Ağrı',
          form:'Mir tut ... weh',
          example:'Mir tut der Kopf weh.',
          tr:'Başım ağrıyor.'
        },
        {
          pronoun:'Hastalık',
          form:'Ich bin krank / habe Fieber',
          example:'Ich habe Fieber.',
          tr:'Ateşim var.'
        },
        {
          pronoun:'Randevu',
          form:'Ich brauche einen Termin',
          example:'Kann ich einen Termin haben?',
          tr:'Randevu alabilir miyim?'
        },
        {
          pronoun:'İlaç',
          form:'Rezept / Medikament',
          example:'Brauche ich ein Rezept?',
          tr:'Reçete gerekli mi?'
        }
      ],
      note:'Almanya\'da Krankenversicherung (sağlık sigortası) zorunludur.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Mir tut der Kopf weh.',
      tr:'Başım ağrıyor.',
      prompt:'Ağrı belirt'
    },
    {
      id:'sp2',
      en:'Ich bin krank.',
      tr:'Hastayım.',
      prompt:'Hastalık söyle'
    },
    {
      id:'sp3',
      en:'Ich brauche einen Termin.',
      tr:'Randevuya ihtiyacım var.',
      prompt:'Randevu iste'
    },
    {
      id:'sp4',
      en:'Ich habe Fieber.',
      tr:'Ateşim var.',
      prompt:'Belirti söyle'
    },
    {
      id:'sp5',
      en:'Gute Besserung!',
      tr:'Geçmiş olsun!',
      prompt:'Tebrik/iyi dilek'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Beim Arzt',
      title_en:'At the Doctor',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Was fehlt Ihnen?',
          tr:'Sizin şikayetiniz ne?',
          gramNote:'Doktor sorusu.',
          bd:[
            {
              ro:'Was fehlt Ihnen',
              tr:'Ne şikayetiniz var',
              role:'question',
              note:'Resmi doktor sorusu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Mir tut die Kehle weh und ich habe Fieber.',
          tr:'Boğazım ağrıyor ve ateşim var.',
          gramNote:[
            {
              ro:'Mir tut die Kehle weh',
              tr:'Boğazım ağrıyor',
              role:'V',
              note:'weh tun + dativ.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Seit wann?',
          tr:'Ne zamandan beri?',
          gramNote:'Seit wann = ne zamandan beri.',
          bd:[
            {
              ro:'Seit wann',
              tr:'Ne zamandan beri',
              role:'question',
              note:'Süre sorusu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Seit gestern Abend.',
          tr:'Dün akşamdan beri.',
          gramNote:[
            {
              ro:'Seit gestern Abend',
              tr:'Dün akşamdan beri',
              role:'K',
              note:'seit + zaman.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Ich verschreibe Ihnen Medikamente. Gute Besserung!',
          tr:'Size ilaç yazıyorum. Geçmiş olsun!',
          gramNote:[
            {
              ro:'Gute Besserung',
              tr:'Geçmiş olsun',
              role:'phrase',
              note:'Standart iyi dilek.'
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
      transcript:'Ali ist krank. Er hat Fieber und Husten. Der Arzt sagt: Drei Tage Ruhe und viel trinken.',
      tr:'Ali hasta. Ateşi ve öksürüğü var. Doktor diyor: Üç gün dinlen ve bol su iç.',
      questions:[
        {
          q:'Was hat Ali?',
          opts:[
            'Kopfschmerzen',
            'Fieber und Husten',
            'Bauchschmerzen',
            'Allergie'
          ],
          answer:1,
          tr:'Ali\'nin şikayeti ne?'
        },
        {
          q:'Was empfiehlt der Arzt?',
          opts:[
            'Sport',
            'Ruhe und trinken',
            'Arbeiten',
            'Reisen'
          ],
          answer:1,
          tr:'Doktor ne öneriyor?'
        },
        {
          q:'Wie lange Ruhe?',
          opts:[
            '1 Tag',
            '2 Tage',
            '3 Tage',
            '5 Tage'
          ],
          answer:2,
          tr:'Kaç gün dinlenme?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[11] = L11;
