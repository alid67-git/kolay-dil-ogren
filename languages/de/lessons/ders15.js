// ders15.js — German Lesson 15: Education & School (beginner)
const L15 = {
  words:[
    {
      id:'w1',
      en:'die Schule',
      ro:'dee SHOO-le',
      tr:'okul'
    },
    {
      id:'w2',
      en:'die Universität',
      ro:'dee u-ni-ver-zi-TET',
      tr:'üniversite'
    },
    {
      id:'w3',
      en:'der Student / die Studentin',
      ro:'der shtu-DENT / dee shtu-DEN-tin',
      tr:'üniversite öğrencisi'
    },
    {
      id:'w4',
      en:'der Lehrer / die Lehrerin',
      ro:'der LAY-rer / dee LAY-re-rin',
      tr:'öğretmen'
    },
    {
      id:'w5',
      en:'der Kurs',
      ro:'der kurs',
      tr:'kurs'
    },
    {
      id:'w6',
      en:'die Prüfung',
      ro:'dee PRÜ-fung',
      tr:'sınav'
    },
    {
      id:'w7',
      en:'lernen',
      ro:'LER-nen',
      tr:'öğrenmek'
    },
    {
      id:'w8',
      en:'studieren',
      ro:'shtu-DEE-ren',
      tr:'okumak (üniversite)'
    },
    {
      id:'w9',
      en:'die Hausaufgabe',
      ro:'dee HAUS-auf-ga-be',
      tr:'ev ödevi'
    },
    {
      id:'w10',
      en:'die Klasse',
      ro:'dee KLA-se',
      tr:'sınıf'
    },
    {
      id:'w11',
      en:'der Stundenplan',
      ro:'der SHTUN-den-plan',
      tr:'ders programı'
    },
    {
      id:'w12',
      en:'bestehen',
      ro:'be-SHTAY-en',
      tr:'geçmek (sınav)'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Eğitim Hayatı',
      title_en:'Education',
      explanation:'Ich studiere ... an der Universität = Üniversitede ... okuyorum. Ich lerne Deutsch = Almanca öğreniyorum. Die Prüfung ist am... = Sınav ... günü.',
      table:[
        {
          pronoun:'Okumak',
          form:'Ich studiere...',
          example:'Ich studiere Medizin.',
          tr:'Tıp okuyorum.'
        },
        {
          pronoun:'Öğrenmek',
          form:'Ich lerne...',
          example:'Ich lerne Deutsch.',
          tr:'Almanca öğreniyorum.'
        },
        {
          pronoun:'Sınav',
          form:'Ich habe eine Prüfung',
          example:'Nächste Woche habe ich eine Prüfung.',
          tr:'Gelecek hafta sınavım var.'
        },
        {
          pronoun:'Başarı',
          form:'Ich habe bestanden',
          example:'Ich habe die Prüfung bestanden.',
          tr:'Sınavı geçtim.'
        }
      ],
      note:'Almanya\'da eğitim ücretsiz (devlet üniversiteleri) — çok kaliteli.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Ich lerne Deutsch.',
      tr:'Almanca öğreniyorum.',
      prompt:'Ne öğrendiğini söyle'
    },
    {
      id:'sp2',
      en:'Ich studiere an der Universität.',
      tr:'Üniversitede okuyorum.',
      prompt:'Eğitim durumunu söyle'
    },
    {
      id:'sp3',
      en:'Nächste Woche habe ich eine Prüfung.',
      tr:'Gelecek hafta sınavım var.',
      prompt:'Sınav haberi ver'
    },
    {
      id:'sp4',
      en:'Der Kurs beginnt um neun Uhr.',
      tr:'Kurs saat dokuzda başlıyor.',
      prompt:'Kurs saati söyle'
    },
    {
      id:'sp5',
      en:'Ich habe die Prüfung bestanden!',
      tr:'Sınavı geçtim!',
      prompt:'Başarı paylaş'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'An der Uni',
      title_en:'At University',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Was studierst du?',
          tr:'Ne okuyorsun?',
          gramNote:'Samimi soru — du formu.',
          bd:[
            {
              ro:'Was studierst du',
              tr:'Ne okuyorsun',
              role:'question',
              note:'du ile samimi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Ich studiere Informatik. Und du?',
          tr:'Bilgisayar okuyorum. Ya sen?',
          gramNote:[
            {
              ro:'Informatik',
              tr:'bilgisayar bilimi',
              role:'O',
              note:'Neutrum → das Fach.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Ich studiere Medizin. Schwer, aber interessant!',
          tr:'Tıp okuyorum. Zor ama ilginç!',
          gramNote:[
            {
              ro:'Schwer, aber interessant',
              tr:'Zor ama ilginç',
              role:'adj',
              note:'Aber = ama.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Viel Erfolg bei der Prüfung!',
          tr:'Sınavda başarılar!',
          gramNote:'Erfolg = başarı.',
          bd:[
            {
              ro:'Viel Erfolg',
              tr:'Başarılar',
              role:'phrase',
              note:'Sınav öncesi iyi dilek.'
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
      transcript:'Ali besucht einen Deutschkurs. Der Kurs ist montags und mittwochs von achtzehn bis zwanzig Uhr. Nächsten Monat hat er eine Prüfung.',
      tr:'Ali bir Almanca kursuna gidiyor. Kurs pazartesi ve çarşamba 18-20 arası. Gelecek ay sınavı var.',
      questions:[
        {
          q:'Welche Sprache lernt Ali?',
          opts:[
            'Englisch',
            'Französisch',
            'Deutsch',
            'Türkisch'
          ],
          answer:2,
          tr:'Ali hangi dili öğreniyor?'
        },
        {
          q:'An welchen Tagen?',
          opts:[
            'Mo+Di',
            'Mo+Mi',
            'Di+Do',
            'Mi+Fr'
          ],
          answer:1,
          tr:'Hangi günler?'
        },
        {
          q:'Wann ist die Prüfung?',
          opts:[
            'Diese Woche',
            'Nächste Woche',
            'Nächsten Monat',
            'Nächstes Jahr'
          ],
          answer:2,
          tr:'Sınav ne zaman?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[15] = L15;
