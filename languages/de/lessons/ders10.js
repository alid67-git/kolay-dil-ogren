// ders10.js — German Lesson 10: Work & Business (beginner)
const L10 = {
  words:[
    {
      id:'w1',
      en:'die Arbeit',
      ro:'dee AR-bayt',
      tr:'iş / çalışma'
    },
    {
      id:'w2',
      en:'der Beruf',
      ro:'der be-ROOF',
      tr:'meslek'
    },
    {
      id:'w3',
      en:'der Kollege / die Kollegin',
      ro:'der ko-LAY-ge / dee ko-LAY-gin',
      tr:'iş arkadaşı'
    },
    {
      id:'w4',
      en:'der Chef / die Chefin',
      ro:'der shef / dee she-fin',
      tr:'patron'
    },
    {
      id:'w5',
      en:'das Büro',
      ro:'das BÜ-ro',
      tr:'ofis'
    },
    {
      id:'w6',
      en:'die Besprechung',
      ro:'dee be-SHPRE-khung',
      tr:'toplantı'
    },
    {
      id:'w7',
      en:'der Vertrag',
      ro:'der fer-TRAK',
      tr:'sözleşme'
    },
    {
      id:'w8',
      en:'der Gehalt',
      ro:'der ge-HALT',
      tr:'maaş'
    },
    {
      id:'w9',
      en:'die Bewerbung',
      ro:'dee be-VER-bung',
      tr:'iş başvurusu'
    },
    {
      id:'w10',
      en:'das Vorstellungsgespräch',
      ro:'das FOR-shtel-lungs-ge-shprekh',
      tr:'iş görüşmesi'
    },
    {
      id:'w11',
      en:'Vollzeit / Teilzeit',
      ro:'fol-tsayt / TAYL-tsayt',
      tr:'tam zamanlı / yarı zamanlı'
    },
    {
      id:'w12',
      en:'der Feierabend',
      ro:'der FAY-er-a-bent',
      tr:'iş çıkışı / mesai sonu'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'İş Hayatında Temel İfadeler',
      title_en:'Basic Work Phrases',
      explanation:'Was machen Sie beruflich? = Ne iş yapıyorsunuz? Ich arbeite als... = ... olarak çalışıyorum. Ich habe eine Besprechung = Toplantım var.',
      table:[
        {
          pronoun:'Meslek sorma',
          form:'Was sind Sie von Beruf?',
          example:'Was sind Sie von Beruf?',
          tr:'Mesleğiniz ne?'
        },
        {
          pronoun:'Cevap',
          form:'Ich bin ... / Ich arbeite als...',
          example:'Ich arbeite als Ingenieur.',
          tr:'Mühendis olarak çalışıyorum.'
        },
        {
          pronoun:'Toplantı',
          form:'Ich habe eine Besprechung',
          example:'Um zehn Uhr habe ich eine Besprechung.',
          tr:'Saat onda toplantım var.'
        },
        {
          pronoun:'Mesai sonu',
          form:'Schönen Feierabend!',
          example:'Schönen Feierabend!',
          tr:'İyi akşamlar! (iş çıkışı)'
        }
      ],
      note:'Almanya\'da iş saatleri genelde 8–17 arası. Pünktlichkeit (dakiklik) çok önemli!'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Was sind Sie von Beruf?',
      tr:'Mesleğiniz ne?',
      prompt:'Meslek sor'
    },
    {
      id:'sp2',
      en:'Ich arbeite als Programmierer.',
      tr:'Yazılımcı olarak çalışıyorum.',
      prompt:'Mesleğini söyle'
    },
    {
      id:'sp3',
      en:'Ich habe um drei Uhr eine Besprechung.',
      tr:'Saat üçte toplantım var.',
      prompt:'Toplantı belirt'
    },
    {
      id:'sp4',
      en:'Schönen Feierabend!',
      tr:'İyi akşamlar! (iş çıkışı)',
      prompt:'Mesai sonu de'
    },
    {
      id:'sp5',
      en:'Können wir einen Termin vereinbaren?',
      tr:'Randevu ayarlayabilir miyiz?',
      prompt:'Randevu öner'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Im Büro',
      title_en:'At the Office',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Guten Morgen! Wie war Ihr Wochenende?',
          tr:'Günaydın! Hafta sonunuz nasıldı?',
          gramNote:'İş yerinde selam.',
          bd:[
            {
              ro:'Wie war',
              tr:'Nasıldı',
              role:'question',
              note:'Geçmiş zaman soru.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Ganz gut, danke. Und Ihnen?',
          tr:'Oldukça iyi, teşekkürler. Ya size?',
          gramNote:'Ganz gut = oldukça iyi.',
          bd:[
            {
              ro:'Ganz gut',
              tr:'Oldukça iyi',
              role:'adj',
              note:'Olumlu kısa cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Auch gut. Haben Sie heute Besprechungen?',
          tr:'Ben de iyi. Bugün toplantılarınız var mı?',
          gramNote:[
            {
              ro:'Besprechungen',
              tr:'toplantılar',
              role:'O',
              note:'Feminin çoğul → die.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Ja, um elf Uhr. Danach habe ich Zeit.',
          tr:'Evet, saat on birde. Sonra vaktim var.',
          gramNote:[
            {
              ro:'Danach',
              tr:'Sonra',
              role:'K',
              note:'Zaman sırası.'
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
      transcript:'Ali arbeitet als Ingenieur in Berlin. Er beginnt um acht Uhr und hat um zehn Uhr eine Besprechung. Feierabend ist um siebzehn Uhr.',
      tr:'Ali Berlin\'de mühendis olarak çalışıyor. Saat sekizde başlıyor ve saat onda toplantısı var. Mesai saat on yedide bitiyor.',
      questions:[
        {
          q:'Was ist Alis Beruf?',
          opts:[
            'Lehrer',
            'Arzt',
            'Ingenieur',
            'Koch'
          ],
          answer:2,
          tr:'Ali\'nin mesleği ne?'
        },
        {
          q:'Wann beginnt die Arbeit?',
          opts:[
            '7 Uhr',
            '8 Uhr',
            '9 Uhr',
            '10 Uhr'
          ],
          answer:1,
          tr:'İş ne zaman başlıyor?'
        },
        {
          q:'Wann ist Feierabend?',
          opts:[
            '16 Uhr',
            '17 Uhr',
            '18 Uhr',
            '19 Uhr'
          ],
          answer:1,
          tr:'Mesai ne zaman bitiyor?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[10] = L10;
