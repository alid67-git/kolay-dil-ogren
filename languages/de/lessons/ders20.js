// ders20.js — German Lesson 20: Daily Conversation Practice (beginner)
const L20 = {
  words:[
    {
      id:'w1',
      en:'Guten Tag!',
      ro:'GU-ten tak',
      tr:'İyi günler!'
    },
    {
      id:'w2',
      en:'Wie geht es Ihnen?',
      ro:'vee GAYT es EE-nen',
      tr:'Nasılsınız?'
    },
    {
      id:'w3',
      en:'Mir geht es gut.',
      ro:'meer GAYT es gut',
      tr:'İyiyim.'
    },
    {
      id:'w4',
      en:'Entschuldigung',
      ro:'ent-SHUL-di-gung',
      tr:'Pardon / Affedersiniz'
    },
    {
      id:'w5',
      en:'Kein Problem',
      ro:'kayn pro-BLAYM',
      tr:'Sorun değil'
    },
    {
      id:'w6',
      en:'Natürlich',
      ro:'na-TÜR-lich',
      tr:'Tabii ki'
    },
    {
      id:'w7',
      en:'Verstehen Sie?',
      ro:'fer-SHTAY-en zee',
      tr:'Anlıyor musunuz?'
    },
    {
      id:'w8',
      en:'Ich verstehe nicht.',
      ro:'ikh fer-SHTAY-e nikht',
      tr:'Anlamıyorum.'
    },
    {
      id:'w9',
      en:'Können Sie das wiederholen?',
      ro:'KÖ-nen zee das VEE-der-ho-len',
      tr:'Tekrar edebilir misiniz?'
    },
    {
      id:'w10',
      en:'Langsam, bitte.',
      ro:'LANG-zam, bit-te',
      tr:'Yavaş, lütfen.'
    },
    {
      id:'w11',
      en:'Einen Moment, bitte.',
      ro:'AY-nen mo-MENT, bit-te',
      tr:'Bir dakika, lütfen.'
    },
    {
      id:'w12',
      en:'Alles klar!',
      ro:'A-les klar',
      tr:'Tamam! / Anlaşıldı!'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Günlük Konuşma Kalıpları',
      title_en:'Daily Conversation Patterns',
      explanation:'Bu derste öğrendiğin tüm kalıpları birleştiriyoruz. Entschuldigung = pardon. Kein Problem = sorun değil. Langsam, bitte = yavaş, lütfen. Alles klar = tamam/anlaşıldı.',
      table:[
        {
          pronoun:'Anlama',
          form:'Verstehen Sie? / Ich verstehe nicht',
          example:'Entschuldigung, ich verstehe nicht.',
          tr:'Pardon, anlamıyorum.'
        },
        {
          pronoun:'Tekrar',
          form:'Können Sie wiederholen?',
          example:'Können Sie das bitte wiederholen?',
          tr:'Tekrar edebilir misiniz?'
        },
        {
          pronoun:'Onay',
          form:'Alles klar / Natürlich',
          example:'Alles klar, danke!',
          tr:'Tamam, teşekkürler!'
        },
        {
          pronoun:'Rica',
          form:'Bitte / Danke / Gern geschehen',
          example:'Danke! — Gern geschehen!',
          tr:'Teşekkürler! — Rica ederim!'
        }
      ],
      note:'Almanca öğrenirken "Langsam, bitte" cümlesini çok kullan — kimse alınmaz!'
    },
    {
      id:'g2',
      title:'Küçük Konuşma — Small Talk',
      title_en:'Small Talk',
      explanation:'Almanya\'da small talk kısa tutulur. Wie geht es Ihnen? → Mir geht es gut, danke. Schönes Wetter heute! = Bugün hava güzel! Schönes Wochenende! = İyi hafta sonları!',
      table:[
        {
          pronoun:'Hal hatır',
          form:'Wie geht es?',
          example:'Wie geht es Ihnen?',
          tr:'Nasılsınız?'
        },
        {
          pronoun:'Hava',
          form:'Schönes Wetter!',
          example:'Heute ist schönes Wetter.',
          tr:'Bugün hava güzel.'
        },
        {
          pronoun:'Hafta sonu',
          form:'Schönes Wochenende!',
          example:'Schönes Wochenende!',
          tr:'İyi hafta sonları!'
        },
        {
          pronoun:'Veda',
          form:'Bis bald / Mach\'s gut',
          example:'Bis bald!',
          tr:'Yakında görüşürüz!'
        }
      ],
      note:'Small talk sonrası asıl konuya geç — Almanya\'da verimlilik önemli.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Entschuldigung, ich verstehe nicht.',
      tr:'Pardon, anlamıyorum.',
      prompt:'Anlamadığını söyle'
    },
    {
      id:'sp2',
      en:'Können Sie bitte langsamer sprechen?',
      tr:'Lütfen daha yavaş konuşabilir misiniz?',
      prompt:'Yavaş konuş iste'
    },
    {
      id:'sp3',
      en:'Alles klar, danke!',
      tr:'Tamam, teşekkürler!',
      prompt:'Onayla'
    },
    {
      id:'sp4',
      en:'Schönes Wochenende!',
      tr:'İyi hafta sonları!',
      prompt:'Hafta sonu dileği'
    },
    {
      id:'sp5',
      en:'Es freut mich, Sie kennenzulernen.',
      tr:'Tanıştığımıza memnun oldum.',
      prompt:'Resmi tanışma'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Alltagssituation',
      title_en:'Daily Situation',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Guten Tag! Wie geht es Ihnen?',
          tr:'İyi günler! Nasılsınız?',
          gramNote:'Resmi günlük selam.',
          bd:[
            {
              ro:'Guten Tag',
              tr:'İyi günler',
              role:'greeting',
              note:'Standart gündüz selamı.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Mir geht es gut, danke. Und Ihnen?',
          tr:'İyiyim, teşekkürler. Ya siz?',
          gramNote:[
            {
              ro:'Mir geht es gut',
              tr:'İyiyim',
              role:'V',
              note:'Standart cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Auch gut. Entschuldigung, wo ist die Toilette?',
          tr:'Ben de iyiyim. Pardon, tuvalet nerede?',
          gramNote:[
            {
              ro:'Entschuldigung',
              tr:'Pardon',
              role:'courtesy',
              note:'Yol sormadan önce.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Geradeaus, dann links.',
          tr:'Düz, sonra sola.',
          gramNote:'Kısa yön tarifi.',
          bd:[
            {
              ro:'Geradeaus, dann links',
              tr:'Düz sonra sol',
              role:'direction',
              note:'Basit tarif.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Danke schön! Auf Wiedersehen!',
          tr:'Çok teşekkürler! Hoşça kalın!',
          gramNote:[
            {
              ro:'Danke schön',
              tr:'Çok teşekkürler',
              role:'courtesy',
              note:'Nezaket.'
            }
          ]
        }
      ]
    },
    {
      id:'d2',
      title:'Sprachkurs',
      title_en:'Language Course',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Verstehen Sie?',
          tr:'Anlıyor musunuz?',
          gramNote:'Öğretmen kontrol sorusu.',
          bd:[
            {
              ro:'Verstehen Sie',
              tr:'Anlıyor musunuz',
              role:'question',
              note:'Resmi form.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Nur ein bisschen. Können Sie langsamer sprechen?',
          tr:'Sadece biraz. Daha yavaş konuşabilir misiniz?',
          gramNote:[
            {
              ro:'Nur ein bisschen',
              tr:'Sadece biraz',
              role:'K',
              note:'Sınırlı anlama.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Natürlich! Kein Problem.',
          tr:'Tabii ki! Sorun değil.',
          gramNote:[
            {
              ro:'Kein Problem',
              tr:'Sorun değil',
              role:'phrase',
              note:'Günlük rahatlatma.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Danke! Jetzt verstehe ich.',
          tr:'Teşekkürler! Şimdi anlıyorum.',
          gramNote:[
            {
              ro:'Jetzt verstehe ich',
              tr:'Şimdi anlıyorum',
              role:'V',
              note:'Jetzt = şimdi.'
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
      transcript:'Ali lernt Deutsch. Manchmal versteht er nicht alles. Er sagt: Entschuldigung, können Sie das wiederholen? Langsam, bitte. Dann versteht er.',
      tr:'Ali Almanca öğreniyor. Bazen her şeyi anlamıyor. Diyor ki: Pardon, tekrar edebilir misiniz? Yavaş, lütfen. Sonra anlıyor.',
      questions:[
        {
          q:'Was lernt Ali?',
          opts:[
            'Englisch',
            'Deutsch',
            'Französisch',
            'Türkisch'
          ],
          answer:1,
          tr:'Ali ne öğreniyor?'
        },
        {
          q:'Was sagt Ali, wenn er nicht versteht?',
          opts:[
            'Auf Wiedersehen',
            'Langsam, bitte',
            'Guten Tag',
            'Prost'
          ],
          answer:1,
          tr:'Anlamadığında ne diyor?'
        },
        {
          q:'Versteht er am Ende?',
          opts:[
            'Nein',
            'Ja',
            'Vielleicht',
            'Nie'
          ],
          answer:1,
          tr:'Sonunda anlıyor mu?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[20] = L20;
