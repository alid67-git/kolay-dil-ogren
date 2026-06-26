// ders20.js � Spanish Lesson 20: Daily Conversation Practice (beginner)
const L20 = {
  words:[
    {
      id:'w1',
      en:'¡Buenos días!',
      ro:'BWE-nos DEE-as',
      tr:'Günaydın / İyi günler!'
    },
    {
      id:'w2',
      en:'¿Cómo está usted?',
      ro:'KO-mo es-TA us-TED',
      tr:'Nasılsınız?'
    },
    {
      id:'w3',
      en:'Estoy bien.',
      ro:'es-TOY byen',
      tr:'İyiyim.'
    },
    {
      id:'w4',
      en:'Perdón',
      ro:'per-DON',
      tr:'Pardon / Affedersiniz'
    },
    {
      id:'w5',
      en:'No hay problema',
      ro:'no ay pro-BLE-ma',
      tr:'Sorun de�xil'
    },
    {
      id:'w6',
      en:'Por supuesto',
      ro:'por su-PWES-to',
      tr:'Tabii ki'
    },
    {
      id:'w7',
      en:'¿Entiende?',
      ro:'en-TYEN-de',
      tr:'Anlıyor musunuz?'
    },
    {
      id:'w8',
      en:'No entiendo.',
      ro:'no en-TYEN-do',
      tr:'Anlamıyorum.'
    },
    {
      id:'w9',
      en:'¿Puede repetir?',
      ro:'PWE-de re-pe-TIR',
      tr:'Tekrar edebilir misiniz?'
    },
    {
      id:'w10',
      en:'Despacio, por favor.',
      ro:'des-PA-thyo, por fa-VOR',
      tr:'Yava�x, lütfen.'
    },
    {
      id:'w11',
      en:'Un momento, por favor.',
      ro:'un mo-MEN-to, por fa-VOR',
      tr:'Bir dakika, lütfen.'
    },
    {
      id:'w12',
      en:'¡Entendido!',
      ro:'en-ten-DI-do',
      tr:'Tamam! / Anla�xıldı!'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Günlük Konu�xma Kalıpları',
      title_en:'Daily Conversation Patterns',
      explanation:'Bu derste ö�xrendi�xin tüm kalıpları birle�xtiriyoruz. Perdón = pardon. No hay problema = sorun de�xil. Despacio, por favor = yava�x, lütfen. Entendido = tamam/anla�xıldı.',
      table:[
        {
          pronoun:'Anlama',
          form:'¿Entiende? / No entiendo',
          example:'Perdón, no entiendo.',
          tr:'Pardon, anlamıyorum.'
        },
        {
          pronoun:'Tekrar',
          form:'¿Puede repetir?',
          example:'¿Puede repetir, por favor?',
          tr:'Tekrar edebilir misiniz?'
        },
        {
          pronoun:'Onay',
          form:'Entendido / Por supuesto',
          example:'¡Entendido, gracias!',
          tr:'Tamam, te�xekkürler!'
        },
        {
          pronoun:'Rica',
          form:'Por favor / Gracias / De nada',
          example:'¡Gracias! � ¡De nada!',
          tr:'Te�xekkürler! � Rica ederim!'
        }
      ],
      note:'İspanyolca ö�xrenirken "Despacio, por favor" cümlesini çok kullan � kimse alınmaz!'
    },
    {
      id:'g2',
      title:'Küçük Konu�xma � Small Talk',
      title_en:'Small Talk',
      explanation:'İspanya\'da small talk samimi tutulur. ¿Cómo está? �  Estoy bien, gracias. ¡Qué buen tiempo! = Bugün hava güzel! ¡Buen fin de semana! = İyi hafta sonları!',
      table:[
        {
          pronoun:'Hal hatır',
          form:'¿Cómo está?',
          example:'¿Cómo está usted?',
          tr:'Nasılsınız?'
        },
        {
          pronoun:'Hava',
          form:'¡Qué buen tiempo!',
          example:'Hoy hace buen tiempo.',
          tr:'Bugün hava güzel.'
        },
        {
          pronoun:'Hafta sonu',
          form:'¡Buen fin de semana!',
          example:'¡Buen fin de semana!',
          tr:'İyi hafta sonları!'
        },
        {
          pronoun:'Veda',
          form:'Hasta pronto / Cuídate',
          example:'¡Hasta pronto!',
          tr:'Yakında görü�xürüz!'
        }
      ],
      note:'Small talk sonrası asıl konuya geç � İspanya\'da da verimlilik önemli.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Perdón, no entiendo.',
      tr:'Pardon, anlamıyorum.',
      prompt:'Anlamadı�xını söyle'
    },
    {
      id:'sp2',
      en:'¿Puede hablar más despacio, por favor?',
      tr:'Lütfen daha yava�x konu�xabilir misiniz?',
      prompt:'Yava�x konu�x iste'
    },
    {
      id:'sp3',
      en:'¡Entendido, gracias!',
      tr:'Tamam, te�xekkürler!',
      prompt:'Onayla'
    },
    {
      id:'sp4',
      en:'¡Buen fin de semana!',
      tr:'İyi hafta sonları!',
      prompt:'Hafta sonu dile�xi'
    },
    {
      id:'sp5',
      en:'Encantado de conocerle.',
      tr:'Tanı�xtı�xımıza memnun oldum.',
      prompt:'Resmi tanı�xma'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Situación cotidiana',
      title_en:'Daily Situation',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'¡Buenos días! ¿Cómo está usted?',
          tr:'Günaydın! Nasılsınız?',
          gramNote:'Resmi günlük selam.',
          bd:[
            {
              ro:'Buenos días',
              tr:'Günaydın',
              role:'greeting',
              note:'Standart sabah selamı.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Estoy bien, gracias. ¿Y usted?',
          tr:'İyiyim, te�xekkürler. Ya siz?',
          gramNote:[
            {
              ro:'Estoy bien',
              tr:'İyiyim',
              role:'V',
              note:'Standart cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Bien también. Perdón, ¿dónde está el baño?',
          tr:'Ben de iyiyim. Pardon, tuvalet nerede?',
          gramNote:[
            {
              ro:'Perdón',
              tr:'Pardon',
              role:'courtesy',
              note:'Yol sormadan önce.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Todo recto, luego a la izquierda.',
          tr:'Düz, sonra sola.',
          gramNote:'Kısa yön tarifi.',
          bd:[
            {
              ro:'Todo recto, luego izquierda',
              tr:'Düz sonra sol',
              role:'direction',
              note:'Basit tarif.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'¡Muchas gracias! ¡Adiós!',
          tr:'�!ok te�xekkürler! Ho�xça kalın!',
          gramNote:[
            {
              ro:'Muchas gracias',
              tr:'�!ok te�xekkürler',
              role:'courtesy',
              note:'Nezaket.'
            }
          ]
        }
      ]
    },
    {
      id:'d2',
      title:'Clase de idiomas',
      title_en:'Language Course',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'¿Entiende?',
          tr:'Anlıyor musunuz?',
          gramNote:'��xretmen kontrol sorusu.',
          bd:[
            {
              ro:'¿Entiende?',
              tr:'Anlıyor musunuz',
              role:'question',
              note:'Resmi form.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Solo un poco. ¿Puede hablar más despacio?',
          tr:'Sadece biraz. Daha yava�x konu�xabilir misiniz?',
          gramNote:[
            {
              ro:'Solo un poco',
              tr:'Sadece biraz',
              role:'K',
              note:'Sınırlı anlama.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'¡Por supuesto! No hay problema.',
          tr:'Tabii ki! Sorun de�xil.',
          gramNote:[
            {
              ro:'No hay problema',
              tr:'Sorun de�xil',
              role:'phrase',
              note:'Günlük rahatlatma.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'¡Gracias! Ahora entiendo.',
          tr:'Te�xekkürler! Şimdi anlıyorum.',
          gramNote:[
            {
              ro:'Ahora entiendo',
              tr:'Şimdi anlıyorum',
              role:'V',
              note:'Ahora = �ximdi.'
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
      transcript:'Ali aprende español. A veces no entiende todo. Dice: Perdón, ¿puede repetir? Despacio, por favor. Luego entiende.',
      tr:'Ali İspanyolca ö�xreniyor. Bazen her �xeyi anlamıyor. Diyor ki: Pardon, tekrar edebilir misiniz? Yava�x, lütfen. Sonra anlıyor.',
      questions:[
        {
          q:'¿Qué aprende Ali?',
          opts:[
            'inglés',
            'español',
            'francés',
            'turco'
          ],
          answer:1,
          tr:'Ali ne ö�xreniyor?'
        },
        {
          q:'¿Qué dice cuando no entiende?',
          opts:[
            'Adiós',
            'Despacio, por favor',
            'Buenos días',
            'Salud'
          ],
          answer:1,
          tr:'Anlamadı�xında ne diyor?'
        },
        {
          q:'¿Entiende al final?',
          opts:[
            'No',
            'Sí',
            'Quizás',
            'Nunca'
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
