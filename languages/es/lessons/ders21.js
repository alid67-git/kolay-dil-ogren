// ders21.js � Spanish Lesson 21: Verbos básicos (vocabulary)
const L21 = {
  words:[
    {
      id:'w1',
      en:'ser',
      ro:'ser',
      tr:'olmak',
      examples:[
        {
          en:'�0l es médico.',
          tr:'O doktor.',
          bd:[
            {
              ro:'es',
              tr:'dır',
              role:'V',
              note:'ser fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'tener',
      ro:'te-NER',
      tr:'sahip olmak / var',
      examples:[
        {
          en:'Tengo tiempo.',
          tr:'Vaktim var.',
          bd:[
            {
              ro:'tengo',
              tr:'var',
              role:'V',
              note:'tener fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w3',
      en:'hacer',
      ro:'a-SER',
      tr:'yapmak',
      examples:[
        {
          en:'¿Qué haces?',
          tr:'Ne yapıyorsun?',
          bd:[
            {
              ro:'haces',
              tr:'yapıyorsun',
              role:'V',
              note:'hacer fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w4',
      en:'ir',
      ro:'ir',
      tr:'gitmek',
      examples:[
        {
          en:'Voy a casa.',
          tr:'Eve gidiyorum.',
          bd:[
            {
              ro:'voy',
              tr:'gidiyorum',
              role:'V',
              note:'ir fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w5',
      en:'venir',
      ro:'be-NIR',
      tr:'gelmek',
      examples:[
        {
          en:'¿Vienes conmigo?',
          tr:'Benimle gelir misin?',
          bd:[
            {
              ro:'vienes',
              tr:'gelir misin',
              role:'V',
              note:'venir fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w6',
      en:'ver',
      ro:'ver',
      tr:'görmek',
      examples:[
        {
          en:'Te veo.',
          tr:'Seni görüyorum.',
          bd:[
            {
              ro:'veo',
              tr:'görüyorum',
              role:'V',
              note:'ver fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w7',
      en:'saber',
      ro:'sa-BER',
      tr:'bilmek',
      examples:[
        {
          en:'Lo sé.',
          tr:'Biliyorum.',
          bd:[
            {
              ro:'sé',
              tr:'biliyorum',
              role:'V',
              note:'saber � düzensiz'
            }
          ]
        }
      ]
    },
    {
      id:'w8',
      en:'pensar',
      ro:'pen-SAR',
      tr:'dü�xünmek',
      examples:[
        {
          en:'Pienso que tienes razón.',
          tr:'Sanırım haklısın.',
          bd:[
            {
              ro:'pienso',
              tr:'sanırım',
              role:'V',
              note:'pensar fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w9',
      en:'querer',
      ro:'ke-RER',
      tr:'istemek',
      examples:[
        {
          en:'Quiero aprender español.',
          tr:'İspanyolca ö�xrenmek istiyorum.',
          bd:[
            {
              ro:'quiero',
              tr:'istiyorum',
              role:'V',
              note:'querer � düzensiz'
            }
          ]
        }
      ]
    },
    {
      id:'w10',
      en:'deber',
      ro:'de-BER',
      tr:'zorunda olmak / -meli',
      examples:[
        {
          en:'Debo trabajar.',
          tr:'�!alı�xmam lazım.',
          bd:[
            {
              ro:'debo',
              tr:'lazım',
              role:'V',
              note:'deber fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w11',
      en:'poder',
      ro:'po-DER',
      tr:'-ebilmek',
      examples:[
        {
          en:'Puedo nadar.',
          tr:'Yüzebilirim.',
          bd:[
            {
              ro:'puedo',
              tr:'ebilirim',
              role:'V',
              note:'poder � düzensiz'
            }
          ]
        }
      ]
    },
    {
      id:'w12',
      en:'gustar',
      ro:'gus-TAR',
      tr:'sevmek / ho�xlanmak',
      examples:[
        {
          en:'Me gusta el café.',
          tr:'Kahveyi severim.',
          bd:[
            {
              ro:'gusta',
              tr:'sever',
              role:'V',
              note:'gustar � özneye göre çekim'
            }
          ]
        }
      ]
    },
    {
      id:'w13',
      en:'decir',
      ro:'de-THIR',
      tr:'söylemek',
      examples:[
        {
          en:'¿Qué dices?',
          tr:'Ne diyorsun?',
          bd:[
            {
              ro:'dices',
              tr:'diyorsun',
              role:'V',
              note:'decir � düzensiz'
            }
          ]
        }
      ]
    },
    {
      id:'w14',
      en:'preguntar',
      ro:'pre-gun-TAR',
      tr:'sormak',
      examples:[
        {
          en:'¿Puedo preguntar?',
          tr:'Sorabilir miyim?',
          bd:[
            {
              ro:'preguntar',
              tr:'sormak',
              role:'V',
              note:'preguntar fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w15',
      en:'dar',
      ro:'dar',
      tr:'vermek',
      examples:[
        {
          en:'Dame el libro, por favor.',
          tr:'Lütfen kitabı ver.',
          bd:[
            {
              ro:'Dame',
              tr:'Ver',
              role:'V',
              note:'dar � düzensiz'
            }
          ]
        }
      ]
    },
    {
      id:'w16',
      en:'tomar',
      ro:'to-MAR',
      tr:'almak',
      examples:[
        {
          en:'Tomo el autobús.',
          tr:'Otobüse biniyorum.',
          bd:[
            {
              ro:'tomo',
              tr:'alıyorum',
              role:'V',
              note:'tomar fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w17',
      en:'encontrar',
      ro:'en-kon-TRAR',
      tr:'bulmak / be�xenmek',
      examples:[
        {
          en:'Lo encuentro bien.',
          tr:'Bunu iyi buluyorum.',
          bd:[
            {
              ro:'encuentro',
              tr:'buluyorum',
              role:'V',
              note:'encontrar fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w18',
      en:'quedarse',
      ro:'ke-DAR-se',
      tr:'kalmak',
      examples:[
        {
          en:'Me quedo en casa.',
          tr:'Evde kalıyorum.',
          bd:[
            {
              ro:'quedo',
              tr:'kalıyorum',
              role:'V',
              note:'quedarse fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w19',
      en:'estar',
      ro:'es-TAR',
      tr:'bulunmak / olmak (geçici)',
      examples:[
        {
          en:'Estoy cansado.',
          tr:'Yorgunum.',
          bd:[
            {
              ro:'estoy',
              tr:'...im',
              role:'V',
              note:'estar fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w20',
      en:'poner',
      ro:'po-NER',
      tr:'koymak',
      examples:[
        {
          en:'Ponlo en la mesa.',
          tr:'Masaya koy.',
          bd:[
            {
              ro:'Pon',
              tr:'Koy',
              role:'V',
              note:'poner � düzensiz'
            }
          ]
        }
      ]
    },
    {
      id:'w21',
      en:'traer',
      ro:'tra-ER',
      tr:'getirmek',
      examples:[
        {
          en:'Trae agua, por favor.',
          tr:'Lütfen su getir.',
          bd:[
            {
              ro:'Trae',
              tr:'Getir',
              role:'V',
              note:'traer � düzensiz'
            }
          ]
        }
      ]
    },
    {
      id:'w22',
      en:'ayudar',
      ro:'a-yu-DAR',
      tr:'yardım etmek',
      examples:[
        {
          en:'¿Puedes ayudarme?',
          tr:'Bana yardım edebilir misin?',
          bd:[
            {
              ro:'ayudar',
              tr:'yardım etmek',
              role:'V',
              note:'ayudar fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w23',
      en:'aprender',
      ro:'a-pren-DER',
      tr:'ö�xrenmek',
      examples:[
        {
          en:'Aprendo español.',
          tr:'İspanyolca ö�xreniyorum.',
          bd:[
            {
              ro:'aprendo',
              tr:'ö�xreniyorum',
              role:'V',
              note:'aprender fiili'
            }
          ]
        }
      ]
    },
    {
      id:'w24',
      en:'trabajar',
      ro:'tra-ba-HAR',
      tr:'çalı�xmak',
      examples:[
        {
          en:'Trabaja en Madrid.',
          tr:'Madrid\'de çalı�xıyor.',
          bd:[
            {
              ro:'trabaja',
              tr:'çalı�xıyor',
              role:'V',
              note:'trabajar fiili'
            }
          ]
        }
      ]
    }
  ],
  grammar:[],
  speaking:[],
  dialogues:[],
  listening:[],
  tones:[]
};
LESSONS[21] = L21;
