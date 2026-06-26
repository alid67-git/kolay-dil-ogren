// ders12.js � Spanish Lesson 12: Phone & Communication (beginner)
const L12 = {
  words:[
    {
      id:'w1',
      en:'llamar',
      ro:'ya-MAR',
      tr:'telefon etmek / aramak'
    },
    {
      id:'w2',
      en:'el mensaje',
      ro:'el men-SA-he',
      tr:'mesaj'
    },
    {
      id:'w3',
      en:'el correo electrónico',
      ro:'el ko-RRE-o e-lek-TRO-ni-ko',
      tr:'e-posta'
    },
    {
      id:'w4',
      en:'el número de teléfono',
      ro:'el NU-me-ro de te-LE-fo-no',
      tr:'telefon numarası'
    },
    {
      id:'w5',
      en:'Hola, soy...',
      ro:'O-la, soy',
      tr:'Merhaba, ... ben',
      tip:'Telefonda kendini tanıtma.'
    },
    {
      id:'w6',
      en:'¿Puede devolverme la llamada?',
      ro:'PWE-de de-bol-ver-me la ya-MAR-da',
      tr:'Beni geri arayabilir misiniz?'
    },
    {
      id:'w7',
      en:'No puedo hablar ahora.',
      ro:'no PWE-do a-BLAR a-HO-ra',
      tr:'Şu an konu�xamıyorum.'
    },
    {
      id:'w8',
      en:'el buzón de voz',
      ro:'el bu-SON de boys',
      tr:'sesli mesaj'
    },
    {
      id:'w9',
      en:'escribir',
      ro:'es-kri-BIR',
      tr:'yazmak'
    },
    {
      id:'w10',
      en:'el contestador',
      ro:'el kon-tes-ta-DOR',
      tr:'telesekreter'
    },
    {
      id:'w11',
      en:'ocupado',
      ro:'o-ku-PA-do',
      tr:'me�xgul (hat)'
    },
    {
      id:'w12',
      en:'conectar',
      ro:'kon-e-KTAR',
      tr:'ba�xlamak (telefon)'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Telefonda Konu�xma',
      title_en:'Phone Conversations',
      explanation:'İspanya\'da telefonda: ¿Dígame? = Buyurun? Soy Ali = Ali ben. Hasta luego = Ho�xça kalın. ¿Puede hablar más despacio? = Daha yava�x konu�xabilir misiniz?',
      table:[
        {
          pronoun:'Tanıtma',
          form:'Soy... / Me llamo...',
          example:'Hola, soy Ali.',
          tr:'Merhaba, Ali ben.'
        },
        {
          pronoun:'Ba�xlama',
          form:'¿Puede pasarme con...?',
          example:'¿Puede pasarme con el señor García?',
          tr:'Beni Bay García\'ya ba�xlayabilir misiniz?'
        },
        {
          pronoun:'Me�xgul',
          form:'La línea está ocupada',
          example:'Está ocupado.',
          tr:'Hat me�xgul.'
        },
        {
          pronoun:'Veda',
          form:'Hasta luego / Adiós',
          example:'¡Hasta luego!',
          tr:'Ho�xça kalın! (telefon)'
        }
      ],
      note:'İspanya telefon numaraları +34 ile ba�xlar.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Hola, soy Ali.',
      tr:'Merhaba, Ali ben.',
      prompt:'Telefonda tanıt'
    },
    {
      id:'sp2',
      en:'¿Puede hablar más despacio, por favor?',
      tr:'Lütfen daha yava�x konu�xabilir misiniz?',
      prompt:'Yava�x konu�x iste'
    },
    {
      id:'sp3',
      en:'Llamo más tarde.',
      tr:'Sonra geri ararım.',
      prompt:'Geri arama sözü ver'
    },
    {
      id:'sp4',
      en:'¿Puede repetir, por favor?',
      tr:'Lütfen tekrar edebilir misiniz?',
      prompt:'Tekrar iste'
    },
    {
      id:'sp5',
      en:'¡Hasta luego!',
      tr:'Ho�xça kalın! (telefon)',
      prompt:'Telefonda vedala�x'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Llamada telefónica',
      title_en:'Phone Call',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Buenos días, empresa García. ¿En qué puedo ayudarle?',
          tr:'İyi günler, García Şirketi. Size nasıl yardımcı olabilirim?',
          gramNote:'Resmi telefon kar�xılama.',
          bd:[
            {
              ro:'¿En qué puedo ayudarle?',
              tr:'Ne yapabilirim',
              role:'question',
              note:'Resmi telefon kalıbı.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Buenos días. Soy Ali. ¿Puedo hablar con el señor López?',
          tr:'İyi günler. Ali ben. Bay López ile konu�xabilir miyim?',
          gramNote:[
            {
              ro:'Soy Ali',
              tr:'Ali ben',
              role:'phrase',
              note:'Telefonda tanıtma.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Un momento, por favor. Le paso.',
          tr:'Bir dakika, lütfen. Sizi ba�xlıyorum.',
          gramNote:[
            {
              ro:'Un momento',
              tr:'Bir dakika',
              role:'courtesy',
              note:'Bekletme ifadesi.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Gracias. ¡Hasta luego!',
          tr:'Te�xekkürler. Ho�xça kalın!',
          gramNote:[
            {
              ro:'Hasta luego',
              tr:'Ho�xça kalın',
              role:'farewell',
              note:'Telefon vedası.'
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
      transcript:'Ali llama a la consulta del médico. El horario de consulta es de ocho a doce. Para una cita, pulse el uno.',
      tr:'Ali doktor muayenehanesini arıyor. Muayene saatleri sekiz ile on iki arası. Randevu için bire basın.',
      questions:[
        {
          q:'¿A quién llama Ali?',
          opts:[
            'farmacia',
            'consulta médica',
            'hotel',
            'estación'
          ],
          answer:1,
          tr:'Ali kimi arıyor?'
        },
        {
          q:'¿Cuándo es la consulta?',
          opts:[
            '7�11',
            '8�12',
            '9�13',
            '10�14'
          ],
          answer:1,
          tr:'Muayene saatleri ne?'
        },
        {
          q:'¿Qué tecla para cita?',
          opts:[
            '0',
            '1',
            '2',
            '9'
          ],
          answer:1,
          tr:'Randevu için hangi tu�x?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[12] = L12;
