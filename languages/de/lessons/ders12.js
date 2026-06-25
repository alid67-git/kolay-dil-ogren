// ders12.js — German Lesson 12: Phone & Communication (beginner)
const L12 = {
  words:[
    {
      id:'w1',
      en:'anrufen',
      ro:'AN-roo-fen',
      tr:'telefon etmek / aramak'
    },
    {
      id:'w2',
      en:'die Nachricht',
      ro:'dee NAKH-rikht',
      tr:'mesaj'
    },
    {
      id:'w3',
      en:'die E-Mail',
      ro:'dee EE-mayl',
      tr:'e-posta'
    },
    {
      id:'w4',
      en:'die Telefonnummer',
      ro:'dee te-le-FON-nu-mer',
      tr:'telefon numarası'
    },
    {
      id:'w5',
      en:'Hallo, hier ist...',
      ro:'HA-lo, heer ist',
      tr:'Merhaba, ... ben',
      tip:'Telefonda kendini tanıtma.'
    },
    {
      id:'w6',
      en:'Können Sie mich zurückrufen?',
      ro:'KÖ-nen zee mikh TSU-rük-roo-fen',
      tr:'Beni geri arayabilir misiniz?'
    },
    {
      id:'w7',
      en:'Ich kann gerade nicht sprechen.',
      ro:'ikh kan ge-RA-de nikht SHPRE-khen',
      tr:'Şu an konuşamıyorum.'
    },
    {
      id:'w8',
      en:'die Mailbox / die Mailbox',
      ro:'dee MELT-boks',
      tr:'sesli mesaj'
    },
    {
      id:'w9',
      en:'schreiben',
      ro:'SHREE-ben',
      tr:'yazmak'
    },
    {
      id:'w10',
      en:'der Anrufbeantworter',
      ro:'der AN-roof-be-ant-vor-ter',
      tr:'telesekreter'
    },
    {
      id:'w11',
      en:'besetzt',
      ro:'be-ZETST',
      tr:'meşgul (hat)'
    },
    {
      id:'w12',
      en:'verbinden',
      ro:'fer-BIN-den',
      tr:'bağlamak (telefon)'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Telefonda Konuşma',
      title_en:'Phone Conversations',
      explanation:'Almanya\'da telefonda: Name? = Kimin aradığı? Hier ist Ali = Ali ben. Auf Wiederhören = Hoşça kalın (telefonda). Können Sie bitte langsamer sprechen? = Daha yavaş konuşabilir misiniz?',
      table:[
        {
          pronoun:'Tanıtma',
          form:'Hier ist... / Mein Name ist...',
          example:'Hallo, hier ist Ali.',
          tr:'Merhaba, Ali ben.'
        },
        {
          pronoun:'Bağlama',
          form:'Können Sie mich verbinden?',
          example:'Können Sie mich mit Herrn Müller verbinden?',
          tr:'Beni Bay Müller\'e bağlayabilir misiniz?'
        },
        {
          pronoun:'Meşgul',
          form:'Die Leitung ist besetzt',
          example:'Es ist besetzt.',
          tr:'Hat meşgul.'
        },
        {
          pronoun:'Veda',
          form:'Auf Wiederhören',
          example:'Auf Wiederhören!',
          tr:'Hoşça kalın! (telefon)'
        }
      ],
      note:'Almanya\'da telefon numaraları +49 ile başlar.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Hallo, hier ist Ali.',
      tr:'Merhaba, Ali ben.',
      prompt:'Telefonda tanıt'
    },
    {
      id:'sp2',
      en:'Können Sie bitte langsamer sprechen?',
      tr:'Lütfen daha yavaş konuşabilir misiniz?',
      prompt:'Yavaş konuş iste'
    },
    {
      id:'sp3',
      en:'Ich rufe später zurück.',
      tr:'Sonra geri ararım.',
      prompt:'Geri arama sözü ver'
    },
    {
      id:'sp4',
      en:'Können Sie das bitte wiederholen?',
      tr:'Lütfen tekrar edebilir misiniz?',
      prompt:'Tekrar iste'
    },
    {
      id:'sp5',
      en:'Auf Wiederhören!',
      tr:'Hoşça kalın! (telefon)',
      prompt:'Telefonda vedalaş'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Telefongespräch',
      title_en:'Phone Call',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Guten Tag, Firma Müller. Was kann ich für Sie tun?',
          tr:'İyi günler, Müller Şirketi. Size nasıl yardımcı olabilirim?',
          gramNote:'Resmi telefon karşılama.',
          bd:[
            {
              ro:'Was kann ich tun',
              tr:'Ne yapabilirim',
              role:'question',
              note:'Resmi telefon kalıbı.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Guten Tag. Hier ist Ali. Kann ich Herrn Schmidt sprechen?',
          tr:'İyi günler. Ali ben. Bay Schmidt ile konuşabilir miyim?',
          gramNote:[
            {
              ro:'Hier ist Ali',
              tr:'Ali ben',
              role:'phrase',
              note:'Telefonda tanıtma.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Einen Moment, bitte. Ich verbinde Sie.',
          tr:'Bir dakika, lütfen. Sizi bağlıyorum.',
          gramNote:[
            {
              ro:'Einen Moment',
              tr:'Bir dakika',
              role:'courtesy',
              note:'Bekletme ifadesi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Danke. Auf Wiederhören!',
          tr:'Teşekkürler. Hoşça kalın!',
          gramNote:[
            {
              ro:'Auf Wiederhören',
              tr:'Hoşça kalın',
              role:'farewell',
              note:'Telefon vedası — hören = duymak.'
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
      transcript:'Ali ruft die Arztpraxis an. Die Sprechstunde ist von acht bis zwölf Uhr. Für einen Termin drücken Sie die eins.',
      tr:'Ali doktor muayenehanesini arıyor. Muayene saatleri sekiz ile on iki arası. Randevu için bire basın.',
      questions:[
        {
          q:'Wen ruft Ali an?',
          opts:[
            'Apotheke',
            'Arztpraxis',
            'Hotel',
            'Bahnhof'
          ],
          answer:1,
          tr:'Ali kimi arıyor?'
        },
        {
          q:'Wann ist Sprechstunde?',
          opts:[
            '7–11',
            '8–12',
            '9–13',
            '10–14'
          ],
          answer:1,
          tr:'Muayene saatleri ne?'
        },
        {
          q:'Für Termin welche Taste?',
          opts:[
            '0',
            '1',
            '2',
            '9'
          ],
          answer:1,
          tr:'Randevu için hangi tuş?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[12] = L12;
