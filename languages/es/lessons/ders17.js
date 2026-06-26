// ders17.js � Spanish Lesson 17: Emotions & Feelings (beginner)
const L17 = {
  words:[
    {
      id:'w1',
      en:'feliz',
      ro:'fe-LIS',
      tr:'mutlu'
    },
    {
      id:'w2',
      en:'triste',
      ro:'TRIS-te',
      tr:'üzgün'
    },
    {
      id:'w3',
      en:'cansado',
      ro:'kan-SA-do',
      tr:'yorgun'
    },
    {
      id:'w4',
      en:'nervioso',
      ro:'ner-BYO-so',
      tr:'gergin / sinirli'
    },
    {
      id:'w5',
      en:'emocionado',
      ro:'e-mo-thyo-NA-do',
      tr:'heyecanlı'
    },
    {
      id:'w6',
      en:'enfadado',
      ro:'en-fa-DA-do',
      tr:'kızgın'
    },
    {
      id:'w7',
      en:'tener miedo',
      ro:'te-ner MYE-do',
      tr:'korkmak'
    },
    {
      id:'w8',
      en:'alegrarse',
      ro:'a-le-grar-SE',
      tr:'sevinmek'
    },
    {
      id:'w9',
      en:'aburrirse',
      ro:'a-bu-RIR-se',
      tr:'sıkılmak'
    },
    {
      id:'w10',
      en:'orgulloso',
      ro:'or-gu-YO-so',
      tr:'gururlu'
    },
    {
      id:'w11',
      en:'sorprendido',
      ro:'sor-pren-DI-do',
      tr:'�xa�xırmı�x'
    },
    {
      id:'w12',
      en:'Me siento...',
      ro:'me SYEN-to',
      tr:'Kendimi ... hissediyorum'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Duyguları İfade Etme',
      title_en:'Expressing Emotions',
      explanation:'Estoy cansado = yorgunum. Tengo miedo = korkuyorum. Me alegro = sevindim. Tengo frío/calor = ü�xüyorum/sıcaklanıyorum. Reflexive fiiller: alegrarse, aburrirse.',
      table:[
        {
          pronoun:'Olumlu',
          form:'Estoy feliz / me alegro',
          example:'Me alegro por mañana.',
          tr:'Yarına seviniyorum.'
        },
        {
          pronoun:'Olumsuz',
          form:'Estoy triste / cansado',
          example:'Estoy muy cansado.',
          tr:'�!ok yorgunum.'
        },
        {
          pronoun:'Korku',
          form:'Tengo miedo de...',
          example:'Tengo miedo de las arañas.',
          tr:'�rümceklerden korkuyorum.'
        },
        {
          pronoun:'Sorma',
          form:'¿Cómo te sientes?',
          example:'¿Cómo te sientes?',
          tr:'Nasıl hissediyorsun?'
        }
      ],
      note:'sentirse = hissetmek. Me siento bien = kendimi iyi hissediyorum.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Estoy feliz.',
      tr:'Mutluyum.',
      prompt:'Duygu ifade et'
    },
    {
      id:'sp2',
      en:'Estoy cansado.',
      tr:'Yorgunum.',
      prompt:'Yorgunlu�xunu söyle'
    },
    {
      id:'sp3',
      en:'¡Me alegro!',
      tr:'Seviniyorum!',
      prompt:'Sevincini ifade et'
    },
    {
      id:'sp4',
      en:'¿Cómo te sientes?',
      tr:'Nasıl hissediyorsun?',
      prompt:'Duygu sor'
    },
    {
      id:'sp5',
      en:'Lo siento.',
      tr:'�Szgünüm.',
      prompt:'�zür dile'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Sentimientos',
      title_en:'Feelings',
      lines:[
        {
          speaker:'A',
          gender:'f',
          en:'Pareces triste. ¿Qué pasa?',
          tr:'�Szgün görünüyorsun. Ne oldu?',
          gramNote:'parecer = görünmek.',
          bd:[
            {
              ro:'pareces triste',
              tr:'üzgün görünüyorsun',
              role:'V',
              note:'Parecer = dı�x görünü�x.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Estoy un poco cansado. Mucho trabajo.',
          tr:'Biraz yorgunum. �!ok i�x.',
          gramNote:[
            {
              ro:'cansado',
              tr:'yorgun',
              role:'adj',
              note:'Estar + sıfat.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'f',
          en:'Lo entiendo. ¡Descansa un poco!',
          tr:'Anlıyorum. Biraz dinlen!',
          gramNote:'Descansar = dinlenmek.',
          bd:[
            {
              ro:'Descansa',
              tr:'Dinlen',
              role:'V',
              note:'Imperativo � tú formu.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'m',
          en:'Gracias. Eso ayuda.',
          tr:'Te�xekkürler. Bu yardımcı oluyor.',
          gramNote:[
            {
              ro:'Eso ayuda',
              tr:'Bu yardımcı oluyor',
              role:'V',
              note:'ayudar = yardım etmek.'
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
      transcript:'Ali está muy feliz hoy. Ha aprobado el examen. Sus amigos se alegran con él.',
      tr:'Ali bugün çok mutlu. Sınavı geçti. Arkada�xları onunla birlikte seviniyor.',
      questions:[
        {
          q:'¿Cómo se siente Ali?',
          opts:[
            'triste',
            'cansado',
            'feliz',
            'enfadado'
          ],
          answer:2,
          tr:'Ali nasıl hissediyor?'
        },
        {
          q:'¿Por qué?',
          opts:[
            'nuevo trabajo',
            'examen aprobado',
            'vacaciones',
            'fiesta'
          ],
          answer:1,
          tr:'Neden?'
        },
        {
          q:'¿Cómo reaccionan los amigos?',
          opts:[
            'están tristes',
            'se alegran',
            'están enfadados',
            'tienen miedo'
          ],
          answer:1,
          tr:'Arkada�xlar nasıl tepki veriyor?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[17] = L17;
