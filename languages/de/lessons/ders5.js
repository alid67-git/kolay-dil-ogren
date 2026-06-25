// ders5.js — German Lesson 5: Restaurant & Food (beginner)
const L5 = {
  words:[
    {
      id:'w1',
      en:'Einen Tisch für zwei, bitte.',
      ro:'AY-nen tish führ tsvay, bit-te',
      tr:'İki kişilik masa, lütfen.',
      tip:'Masa isteme.',
      examples:[
        {
          en:'Guten Abend. Einen Tisch für zwei, bitte.',
          tr:'İyi akşamlar. İki kişilik masa, lütfen.',
          bd:[
            {
              ro:'Einen Tisch',
              tr:'bir masa (aküsatif)',
              role:'O',
              note:'Maskulin aküsatif: den → einen.'
            }
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'die Speisekarte',
      ro:'dee SHPY-ze-kar-te',
      tr:'menü'
    },
    {
      id:'w3',
      en:'bestellen',
      ro:'be-SHTEL-len',
      tr:'sipariş vermek'
    },
    {
      id:'w4',
      en:'Ich hätte gern...',
      ro:'ikh HET-te gern',
      tr:'... alabilir miyim / ... istiyorum',
      tip:'Nazik sipariş.',
      examples:[
        {
          en:'Ich hätte gern einen Kaffee.',
          tr:'Bir kahve istiyorum.',
          bd:[
            {
              ro:'Ich hätte gern',
              tr:'İstiyorum',
              role:'modal',
              note:'Restoranda nazik sipariş kalıbı.'
            }
          ]
        }
      ]
    },
    {
      id:'w5',
      en:'die Vorspeise',
      ro:'dee FOR-shpy-ze',
      tr:'başlangıç yemeği'
    },
    {
      id:'w6',
      en:'das Hauptgericht',
      ro:'das HAUPT-ge-rikht',
      tr:'ana yemek'
    },
    {
      id:'w7',
      en:'der Nachtisch',
      ro:'der NAKH-tish',
      tr:'tatlı'
    },
    {
      id:'w8',
      en:'das Getränk',
      ro:'das ge-TRENK',
      tr:'içecek'
    },
    {
      id:'w9',
      en:'das Wasser',
      ro:'das VAS-ser',
      tr:'su'
    },
    {
      id:'w10',
      en:'der Kaffee',
      ro:'der ka-FE',
      tr:'kahve'
    },
    {
      id:'w11',
      en:'der Tee',
      ro:'der tay',
      tr:'çay'
    },
    {
      id:'w12',
      en:'der Saft',
      ro:'der zaft',
      tr:'meyve suyu'
    },
    {
      id:'w13',
      en:'das Brot',
      ro:'das brot',
      tr:'ekmek'
    },
    {
      id:'w14',
      en:'die Suppe',
      ro:'dee ZU-pe',
      tr:'çorba'
    },
    {
      id:'w15',
      en:'der Salat',
      ro:'der za-LAT',
      tr:'salata'
    },
    {
      id:'w16',
      en:'das Hähnchen',
      ro:'das HEN-khen',
      tr:'tavuk'
    },
    {
      id:'w17',
      en:'das Rindfleisch',
      ro:'das RINT-flysh',
      tr:'sığır eti'
    },
    {
      id:'w18',
      en:'der Fisch',
      ro:'der fish',
      tr:'balık'
    },
    {
      id:'w19',
      en:'vegetarisch',
      ro:'ve-ge-TA-rish',
      tr:'vejetaryen'
    },
    {
      id:'w20',
      en:'lecker',
      ro:'LE-ker',
      tr:'lezzetli'
    },
    {
      id:'w21',
      en:'die Rechnung',
      ro:'dee REKH-nung',
      tr:'hesap'
    },
    {
      id:'w22',
      en:'das Trinkgeld',
      ro:'das TRINK-gelt',
      tr:'bahşiş'
    },
    {
      id:'w23',
      en:'die Reservierung',
      ro:'dee re-zer-vee-RUNG',
      tr:'rezervasyon'
    },
    {
      id:'w24',
      en:'allergisch',
      ro:'a-LER-gish',
      tr:'alerjik'
    },
    {
      id:'w25',
      en:'Guten Appetit!',
      ro:'GU-ten a-pe-TEET',
      tr:'Afiyet olsun'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Restoranda Sipariş Verme',
      title_en:'Ordering at a Restaurant',
      explanation:'Almanya\'da garsona el kaldırılır veya göz teması kurulur. Ich hätte gern... = nazik sipariş. Noch etwas? = Başka bir şey? Die Rechnung, bitte = Hesap lütfen.',
      table:[
        {
          pronoun:'Nazik istek',
          form:'Ich hätte gern...',
          example:'Ich hätte gern die Suppe.',
          tr:'Çorba istiyorum.'
        },
        {
          pronoun:'Soru',
          form:'Was empfehlen Sie?',
          example:'Was empfehlen Sie?',
          tr:'Ne tavsiye edersiniz?'
        },
        {
          pronoun:'Hesap',
          form:'Die Rechnung, bitte',
          example:'Die Rechnung, bitte.',
          tr:'Hesap, lütfen.'
        },
        {
          pronoun:'Özel istek',
          form:'Ohne... / Mit...',
          example:'Ohne Zwiebeln, bitte.',
          tr:'Soğansız, lütfen.'
        }
      ],
      note:'Trinkgeld (bahşiş) zorunlu değil ama %5-10 bırakılır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Einen Tisch für drei, bitte.',
      tr:'Üç kişilik masa, lütfen.',
      prompt:'Masa iste'
    },
    {
      id:'sp2',
      en:'Ich hätte gern die Suppe, bitte.',
      tr:'Çorba istiyorum, lütfen.',
      prompt:'Yemek sipariş et'
    },
    {
      id:'sp3',
      en:'Die Rechnung, bitte.',
      tr:'Hesap, lütfen.',
      prompt:'Hesap iste'
    },
    {
      id:'sp4',
      en:'Das schmeckt sehr gut!',
      tr:'Bu çok lezzetli!',
      prompt:'Yemeği öv'
    },
    {
      id:'sp5',
      en:'Ich bin allergisch gegen Nüsse.',
      tr:'Kuruyemişe alerjim var.',
      prompt:'Alerji belirt'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Im Restaurant',
      title_en:'At the Restaurant',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Guten Abend! Haben Sie reserviert?',
          tr:'İyi akşamlar! Rezervasyonunuz var mı?',
          gramNote:'Resmi karşılama.',
          bd:[
            {
              ro:'Haben Sie reserviert',
              tr:'Rezervasyon var mı',
              role:'question',
              note:'Resmi soru.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Ja, auf den Namen Ali. Für zwei Personen.',
          tr:'Evet, Ali adına. İki kişilik.',
          gramNote:[
            {
              ro:'auf den Namen',
              tr:'adına',
              role:'K',
              note:'auf + aküsatif — adına.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Bitte schön, hier ist Ihr Tisch. Die Speisekarte.',
          tr:'Buyurun, masanız burada. Menü.',
          gramNote:[
            {
              ro:'Speisekarte',
              tr:'menü',
              role:'O',
              note:'Feminin → die.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Danke. Ich hätte gern das Hähnchen und einen Salat.',
          tr:'Teşekkürler. Tavuk ve salata istiyorum.',
          gramNote:[
            {
              ro:'Ich hätte gern',
              tr:'İstiyorum',
              role:'modal',
              note:'Nazik sipariş.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Möchten Sie etwas trinken?',
          tr:'Bir şey içmek ister misiniz?',
          gramNote:'Möchten = istemek (nazik).',
          bd:[
            {
              ro:'Möchten Sie',
              tr:'İster misiniz',
              role:'modal',
              note:'Resmi nazik istek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Ja, ein Wasser und einen Kaffee, bitte.',
          tr:'Evet, bir su ve bir kahve, lütfen.',
          gramNote:[
            {
              ro:'ein Wasser',
              tr:'bir su',
              role:'O',
              note:'Neutrum → ein.'
            },
            {
              ro:'einen Kaffee',
              tr:'bir kahve',
              role:'O',
              note:'Maskulin aküsatif → einen.'
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
      transcript:'Heute gibt es Lachs mit Gemüse für vierzehn Euro und vegetarische Pasta für zehn Euro. Als Nachtisch gibt es Schokoladenkuchen für fünf Euro.',
      tr:'Bugün somon sebze ile on dört euro, vejetaryen makarna on euro. Tatlı olarak çikolatalı kek beş euro.',
      questions:[
        {
          q:'Wie viel kostet der Lachs?',
          opts:[
            '10 €',
            '12 €',
            '14 €',
            '16 €'
          ],
          answer:2,
          tr:'Somon ne kadar?'
        },
        {
          q:'Welche vegetarische Option gibt es?',
          opts:[
            'Suppe',
            'Salat',
            'Pasta',
            'Pizza'
          ],
          answer:2,
          tr:'Hangi vejetaryen seçenek var?'
        },
        {
          q:'Was ist der Nachtisch?',
          opts:[
            'Eis',
            'Käsekuchen',
            'Apfelkuchen',
            'Schokoladenkuchen'
          ],
          answer:3,
          tr:'Tatlı ne?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[5] = L5;
