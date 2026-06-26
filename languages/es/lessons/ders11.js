// ders11.js � Spanish Lesson 11: Health (beginner)
const L11 = {
  words:[
    {
      id:'w1',
      en:'el médico / la médica',
      ro:'el ME-di-ko / la ME-di-ka',
      tr:'doktor'
    },
    {
      id:'w2',
      en:'el hospital',
      ro:'el os-pi-TAL',
      tr:'hastane'
    },
    {
      id:'w3',
      en:'la farmacia',
      ro:'la far-MA-thya',
      tr:'eczane'
    },
    {
      id:'w4',
      en:'enfermo',
      ro:'en-FER-mo',
      tr:'hasta'
    },
    {
      id:'w5',
      en:'el dolor',
      ro:'el do-LOR',
      tr:'a�xrı'
    },
    {
      id:'w6',
      en:'la fiebre',
      ro:'la FYE-bre',
      tr:'ate�x'
    },
    {
      id:'w7',
      en:'la tos',
      ro:'la tos',
      tr:'öksürük'
    },
    {
      id:'w8',
      en:'el resfriado',
      ro:'el res-fri-A-do',
      tr:'so�xuk algınlı�xı'
    },
    {
      id:'w9',
      en:'el medicamento',
      ro:'el me-di-ka-MEN-to',
      tr:'ilaç'
    },
    {
      id:'w10',
      en:'la cita',
      ro:'la THI-ta',
      tr:'randevu'
    },
    {
      id:'w11',
      en:'el seguro',
      ro:'el se-GU-ro',
      tr:'sigorta'
    },
    {
      id:'w12',
      en:'¡Que te mejores!',
      ro:'ke te me-HO-res',
      tr:'Geçmi�x olsun!'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Doktorda',
      title_en:'At the Doctor',
      explanation:'Me duele... = ... a�xrıyor. Estoy enfermo = hastayım. Necesito una cita = randevuya ihtiyacım var. ¡Que te mejores! = Geçmi�x olsun!',
      table:[
        {
          pronoun:'A�xrı',
          form:'Me duele...',
          example:'Me duele la cabeza.',
          tr:'Ba�xım a�xrıyor.'
        },
        {
          pronoun:'Hastalık',
          form:'Estoy enfermo / tengo fiebre',
          example:'Tengo fiebre.',
          tr:'Ate�xim var.'
        },
        {
          pronoun:'Randevu',
          form:'Necesito una cita',
          example:'¿Puedo pedir una cita?',
          tr:'Randevu alabilir miyim?'
        },
        {
          pronoun:'İlaç',
          form:'receta / medicamento',
          example:'¿Necesito receta?',
          tr:'Reçete gerekli mi?'
        }
      ],
      note:'İspanya\'da el seguro médico (sa�xlık sigortası) zorunludur.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Me duele la cabeza.',
      tr:'Ba�xım a�xrıyor.',
      prompt:'A�xrı belirt'
    },
    {
      id:'sp2',
      en:'Estoy enfermo.',
      tr:'Hastayım.',
      prompt:'Hastalık söyle'
    },
    {
      id:'sp3',
      en:'Necesito una cita.',
      tr:'Randevuya ihtiyacım var.',
      prompt:'Randevu iste'
    },
    {
      id:'sp4',
      en:'Tengo fiebre.',
      tr:'Ate�xim var.',
      prompt:'Belirti söyle'
    },
    {
      id:'sp5',
      en:'¡Que te mejores!',
      tr:'Geçmi�x olsun!',
      prompt:'Tebrik/iyi dilek'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'En el médico',
      title_en:'At the Doctor',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'¿Qué le pasa?',
          tr:'Sizin �xikayetiniz ne?',
          gramNote:'Doktor sorusu.',
          bd:[
            {
              ro:'¿Qué le pasa?',
              tr:'Ne �xikayetiniz var',
              role:'question',
              note:'Resmi doktor sorusu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Me duele la garganta y tengo fiebre.',
          tr:'Bo�xazım a�xrıyor ve ate�xim var.',
          gramNote:[
            {
              ro:'Me duele la garganta',
              tr:'Bo�xazım a�xrıyor',
              role:'V',
              note:'doler + isim.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'¿Desde cuándo?',
          tr:'Ne zamandan beri?',
          gramNote:'Desde cuándo = ne zamandan beri.',
          bd:[
            {
              ro:'¿Desde cuándo?',
              tr:'Ne zamandan beri',
              role:'question',
              note:'Süre sorusu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Desde ayer por la noche.',
          tr:'Dün ak�xamdan beri.',
          gramNote:[
            {
              ro:'Desde ayer por la noche',
              tr:'Dün ak�xamdan beri',
              role:'K',
              note:'desde + zaman.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Le receto medicamentos. ¡Que se mejore!',
          tr:'Size ilaç yazıyorum. Geçmi�x olsun!',
          gramNote:[
            {
              ro:'Que se mejore',
              tr:'Geçmi�x olsun',
              role:'phrase',
              note:'Standart iyi dilek (resmi).'
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
      transcript:'Ali está enfermo. Tiene fiebre y tos. El médico dice: Tres días de reposo y beber mucha agua.',
      tr:'Ali hasta. Ate�xi ve öksürü�xü var. Doktor diyor: �Sç gün dinlen ve bol su iç.',
      questions:[
        {
          q:'¿Qué tiene Ali?',
          opts:[
            'dolor de cabeza',
            'fiebre y tos',
            'dolor de estómago',
            'alergia'
          ],
          answer:1,
          tr:'Ali\'nin �xikayeti ne?'
        },
        {
          q:'¿Qué recomienda el médico?',
          opts:[
            'deporte',
            'reposo y beber',
            'trabajar',
            'viajar'
          ],
          answer:1,
          tr:'Doktor ne öneriyor?'
        },
        {
          q:'¿Cuántos días de reposo?',
          opts:[
            '1',
            '2',
            '3',
            '5'
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
