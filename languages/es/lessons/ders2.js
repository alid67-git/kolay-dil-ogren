// ders2.js � Spanish Lesson 2: Artículos & ser (beginner)
const L2 = {
  words:[
    {
      id:'w1',
      en:'el hombre',
      ro:'el OM-bre',
      tr:'adam (eril)',
      tip:'Belirli eril artikel: el.',
      ctx:'Eril isimler el alır.',
      examples:[
        {
          en:'El hombre es alto.',
          tr:'Adam uzun boylu.',
          bd:[
            {
              ro:'El',
              tr:'Belirli eril artikel',
              role:'K',
              note:'el = the (eril). hombre maskulin �  el.'
            },
            {
              ro:'hombre',
              tr:'adam',
              role:'O',
              note:'Eril isim.'
            },
            {
              ro:'es alto',
              tr:'uzun boylu',
              role:'V',
              note:'ser + sıfat.'
            }
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'la mujer',
      ro:'la mu-HER',
      tr:'kadın (di�xil)',
      tip:'Belirli di�xil artikel: la.',
      ctx:'Di�xil isimler la alır.',
      examples:[
        {
          en:'La mujer es amable.',
          tr:'Kadın nazik.',
          bd:[
            {
              ro:'La',
              tr:'Belirli di�xil artikel',
              role:'K',
              note:'la = the (di�xil).'
            },
            {
              ro:'mujer',
              tr:'kadın',
              role:'O',
              note:'Di�xil isim.'
            },
            {
              ro:'es amable',
              tr:'nazik',
              role:'V',
              note:'ser + sıfat.'
            }
          ]
        }
      ]
    },
    {
      id:'w3',
      en:'los niños',
      ro:'los NIN-yos',
      tr:'çocuklar (eril ço�xul)',
      tip:'Belirli eril ço�xul: los.',
      ctx:'Eril ço�xul isimler los alır.',
      examples:[
        {
          en:'Los niños juegan.',
          tr:'�!ocuklar oynuyor.',
          bd:[
            {
              ro:'Los',
              tr:'Belirli eril ço�xul artikel',
              role:'K',
              note:'los = the (eril ço�xul).'
            },
            {
              ro:'niños',
              tr:'çocuklar',
              role:'O',
              note:'Niño ço�xulu.'
            }
          ]
        }
      ]
    },
    {
      id:'w4',
      en:'las mesas',
      ro:'las ME-sas',
      tr:'masalar (di�xil ço�xul)',
      tip:'Belirli di�xil ço�xul: las.',
      ctx:'Di�xil ço�xul isimler las alır.',
      examples:[
        {
          en:'Las mesas son grandes.',
          tr:'Masalar büyük.',
          bd:[
            {
              ro:'Las',
              tr:'Belirli di�xil ço�xul artikel',
              role:'K',
              note:'las = the (di�xil ço�xul).'
            },
            {
              ro:'mesas',
              tr:'masalar',
              role:'O',
              note:'Mesa ço�xulu.'
            }
          ]
        }
      ]
    },
    {
      id:'w5',
      en:'un hombre',
      ro:'un OM-bre',
      tr:'bir adam',
      tip:'Belirsiz eril artikel: un.',
      ctx:'Sayılmayan tekil eril.',
      examples:[
        {
          en:'Es un hombre.',
          tr:'Bu bir adam.',
          bd:[
            {
              ro:'un',
              tr:'bir (eril)',
              role:'K',
              note:'Belirsiz artikel � eril tekil için un.'
            },
            {
              ro:'hombre',
              tr:'adam',
              role:'O',
              note:'Eril.'
            }
          ]
        }
      ]
    },
    {
      id:'w6',
      en:'una mujer',
      ro:'U-na mu-HER',
      tr:'bir kadın',
      tip:'Belirsiz di�xil artikel: una.',
      ctx:'Sayılmayan tekil di�xil.',
      examples:[
        {
          en:'Es una profesora.',
          tr:'O bir ö�xretmen.',
          bd:[
            {
              ro:'una',
              tr:'bir (di�xil)',
              role:'K',
              note:'Belirsiz artikel � di�xil tekil için una.'
            },
            {
              ro:'profesora',
              tr:'ö�xretmen (kadın)',
              role:'O',
              note:'Di�xil meslek ismi -a eki alır.'
            }
          ]
        }
      ]
    },
    {
      id:'w7',
      en:'unos libros',
      ro:'U-nos LI-bros',
      tr:'bazı kitaplar / birkaç kitap',
      tip:'Belirsiz eril ço�xul: unos.',
      ctx:'Belirsiz eril ço�xul.',
      examples:[
        {
          en:'Unos libros son interesantes.',
          tr:'Bazı kitaplar ilginç.',
          bd:[
            {
              ro:'unos',
              tr:'bazı / birkaç (eril ço�xul)',
              role:'K',
              note:'Belirsiz ço�xul artikel.'
            },
            {
              ro:'libros',
              tr:'kitaplar',
              role:'O',
              note:'Libro ço�xulu.'
            }
          ]
        }
      ]
    },
    {
      id:'w8',
      en:'unas flores',
      ro:'U-nas FLO-res',
      tr:'bazı çiçekler',
      tip:'Belirsiz di�xil ço�xul: unas.',
      ctx:'Belirsiz di�xil ço�xul.',
      examples:[
        {
          en:'Unas flores son bonitas.',
          tr:'Bazı çiçekler güzel.',
          bd:[
            {
              ro:'unas',
              tr:'bazı (di�xil ço�xul)',
              role:'K',
              note:'Belirsiz di�xil ço�xul artikel.'
            },
            {
              ro:'flores',
              tr:'çiçekler',
              role:'O',
              note:'Flor ço�xulu.'
            }
          ]
        }
      ]
    },
    {
      id:'w9',
      en:'yo soy',
      ro:'yo soy',
      tr:'ben ...im / ben ...yim',
      tip:'ser � 1. tekil.',
      ctx:'Kendini tanıtma, kimlik.',
      examples:[
        {
          en:'Yo soy Ali.',
          tr:'Ben Ali\'yim.',
          bd:[
            {
              ro:'Yo',
              tr:'Ben',
              role:'S',
              note:'1. tekil özne � genelde dü�xer.'
            },
            {
              ro:'soy',
              tr:'...im / ...yim',
              role:'V',
              note:'ser fiili � yo ile soy. Türkçede "-im/-yim" eki kar�xılı�xı.'
            }
          ]
        }
      ]
    },
    {
      id:'w10',
      en:'tú eres',
      ro:'tu E-res',
      tr:'sen ...sin',
      tip:'ser � 2. tekil samimi.',
      ctx:'Arkada�xlarla.',
      examples:[
        {
          en:'Tú eres amable.',
          tr:'Sen naziksin.',
          bd:[
            {
              ro:'Tú',
              tr:'Sen',
              role:'S',
              note:'Samimi hitap.'
            },
            {
              ro:'eres',
              tr:'...sin',
              role:'V',
              note:'tú ile eres.'
            }
          ]
        }
      ]
    },
    {
      id:'w11',
      en:'él es / ella es',
      ro:'el es / E-ya es',
      tr:'o ... (erkek/kadın)',
      tip:'ser � 3. tekil.',
      ctx:'Ba�xkasından bahsederken.',
      examples:[
        {
          en:'�0l es estudiante.',
          tr:'O (erkek) ö�xrenci.',
          bd:[
            {
              ro:'�0l',
              tr:'O (erkek)',
              role:'S',
              note:'3. tekil eril.'
            },
            {
              ro:'es',
              tr:'...dir',
              role:'V',
              note:'él/ella/usted ile es.'
            },
            {
              ro:'estudiante',
              tr:'ö�xrenci',
              role:'O',
              note:'Cinsiyetsiz meslek ismi.'
            }
          ]
        }
      ]
    },
    {
      id:'w12',
      en:'nosotros somos',
      ro:'no-SO-tros SO-mos',
      tr:'biz ...iz',
      tip:'ser � 1. ço�xul.',
      ctx:'Grup halinde.',
      examples:[
        {
          en:'Nosotros somos amigos.',
          tr:'Biz arkada�xız.',
          bd:[
            {
              ro:'Nosotros',
              tr:'Biz',
              role:'S',
              note:'1. ço�xul.'
            },
            {
              ro:'somos',
              tr:'...iz',
              role:'V',
              note:'nosotros/vosotros/ellos/ustedes ile somos/son.'
            }
          ]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Belirli Artikel � el / la / los / las',
      title_en:'Definite Articles',
      explanation:'İspanyolcada her ismin cinsiyeti vardır: maskulin (eril) veya feminin (di�xil). Belirli artikel (the) cinsiyet ve sayıya göre de�xi�xir: el (eril tekil), la (di�xil tekil), los (eril ço�xul), las (di�xil ço�xul). Türkçede artikel yok � bu İspanyolcanın en zor kısmı. İsimle birlikte artikelini ezberle: el hombre, la mujer, los niños, las mesas. Almancadan fark: İspanyolcada nötr cinsiyet yok; her isim eril veya di�xildir.',
      table:[
        {
          pronoun:'Eril (m)',
          form:'el',
          example:'el hombre, el libro',
          tr:'adam, kitap'
        },
        {
          pronoun:'Di�xil (f)',
          form:'la',
          example:'la mujer, la puerta',
          tr:'kadın, kapı'
        },
        {
          pronoun:'Eril ço�xul',
          form:'los',
          example:'los hombres, los libros',
          tr:'adamlar, kitaplar'
        },
        {
          pronoun:'Di�xil ço�xul',
          form:'las',
          example:'las mujeres, las mesas',
          tr:'kadınlar, masalar'
        }
      ],
      note:'İpucu: Sözlükte her ismin yanında artikel yazar: el perro (köpek), la gata (di�xi kedi). -o ile biten ço�xu isim eril, -a ile biten ço�xu di�xil � ama istisnalar var (el día, la mano). Ezberle!'
    },
    {
      id:'g2',
      title:'Belirsiz Artikel � un / una / unos / unas',
      title_en:'Indefinite Articles',
      explanation:'Belirsiz artikel "bir" veya "bazı" anlamında: un (eril tekil), una (di�xil tekil), unos (eril ço�xul), unas (di�xil ço�xul). Türkçede "bir" tek kelime; İspanyolcada cinsiyet ve sayıya göre dört form var. Olumsuzda "no" kullanılır: No es un libro (Bu bir kitap de�xil). Meslek tanıtırken: Soy profesor (��xretmenim) � artikel genelde dü�xer.',
      table:[
        {
          pronoun:'Eril tekil',
          form:'un',
          example:'un hombre, un libro',
          tr:'bir adam, bir kitap'
        },
        {
          pronoun:'Di�xil tekil',
          form:'una',
          example:'una mujer, una mesa',
          tr:'bir kadın, bir masa'
        },
        {
          pronoun:'Eril ço�xul',
          form:'unos',
          example:'unos libros',
          tr:'bazı kitaplar'
        },
        {
          pronoun:'Di�xil ço�xul',
          form:'unas',
          example:'unas flores',
          tr:'bazı çiçekler'
        }
      ],
      note:'un + eril tekil, una + di�xil tekil. �!o�xulda unos/unas "bazı" anlamı da katar. Artikel ismin cinsiyetini gösterir � Türkçede kar�xılı�xı yoktur.'
    },
    {
      id:'g3',
      title:'Fiil: ser (olmak) � Tüm �!ekimler',
      title_en:'Verb: ser (to be)',
      explanation:'ser = olmak (kalıcı özellik, kimlik, meslek, milliyet). İspanyolcanın en önemli fiili. Türkçedeki "-im, -sin, -dir" yapısının temeli. Düzensiz fiil � ezberle! usted/él/ella hepsi "es" alır. vosotros (siz � sadece İspanya) "sois" alır. Latin Amerika\'da vosotros yerine ustedes kullanılır.',
      table:[
        {
          pronoun:'yo',
          form:'soy',
          example:'Yo soy Ali.',
          tr:'Ben Ali\'yim.'
        },
        {
          pronoun:'tú',
          form:'eres',
          example:'Tú eres amable.',
          tr:'Sen naziksin.'
        },
        {
          pronoun:'él/ella/usted',
          form:'es',
          example:'�0l es profesor.',
          tr:'O ö�xretmen.'
        },
        {
          pronoun:'nosotros',
          form:'somos',
          example:'Somos amigos.',
          tr:'Biz arkada�xız.'
        },
        {
          pronoun:'vosotros',
          form:'sois',
          example:'Sois bienvenidos.',
          tr:'Ho�x geldiniz.'
        },
        {
          pronoun:'ellos/ustedes',
          form:'son',
          example:'Son amables.',
          tr:'Onlar/Siz naziksiniz.'
        }
      ],
      note:'ser + sıfat/isim: Soy cansado (yorgunum � genel). ser + meslek: Soy estudiante. Soru: ¿Eres cansado? ¿Es él profesor? NOT: Geçici durumlar için estar kullanılır (sonraki derslerde).'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Yo soy Ali.',
      tr:'Ben Ali\'yim.',
      prompt:'Kendini tanıt (ser)',
      gramNote:'yo + soy � ser fiili 1. tekil.'
    },
    {
      id:'sp2',
      en:'Es un libro.',
      tr:'Bu bir kitap.',
      prompt:'Belirsiz artikel kullan',
      gramNote:'Es + un libro (eril). Yo genelde dü�xer.'
    },
    {
      id:'sp3',
      en:'El hombre es alto.',
      tr:'Adam uzun boylu.',
      prompt:'el + isim + ser + sıfat'
    },
    {
      id:'sp4',
      en:'La mujer es amable.',
      tr:'Kadın nazik.',
      prompt:'la + isim + ser + sıfat'
    },
    {
      id:'sp5',
      en:'Somos amigos.',
      tr:'Biz arkada�xız.',
      prompt:'nosotros + somos � ser ço�xul'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Artikel Alı�xtırması',
      title_en:'Article Practice',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'¿Qué es esto?',
          tr:'Bu ne?',
          gramNote:'¿Qué es esto? = Bu nedir? � tanımadı�xın bir �xeyi sorarken.',
          bd:[
            {
              ro:'Qué',
              tr:'Ne',
              role:'question',
              note:'Soru kelimesi.'
            },
            {
              ro:'es esto',
              tr:'bu ...dır',
              role:'V',
              note:'ser � esto (gösteren zamir) ile es.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Es una mesa.',
          tr:'Bu bir masa.',
          gramNote:'Es una ... = Bu bir ... mesa di�xil �  una.',
          bd:[
            {
              ro:'Es',
              tr:'Bu ...dır',
              role:'V',
              note:'ser 3. tekil.'
            },
            {
              ro:'una mesa',
              tr:'bir masa',
              role:'O',
              note:'Mesa di�xil �  una (belirsiz).'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'¿Y esto?',
          tr:'Peki bu?',
          gramNote:'Y = ve, peki.',
          bd:[
            {
              ro:'Y',
              tr:'Ve / peki',
              role:'K',
              note:'Ba�xlaç.'
            },
            {
              ro:'esto',
              tr:'bu',
              role:'question',
              note:'Tekrar soru.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Es la puerta.',
          tr:'Bu kapı.',
          gramNote:'Puerta di�xil �  la (belirli). Tanıdı�xın �xey için la.',
          bd:[
            {
              ro:'la puerta',
              tr:'kapı',
              role:'O',
              note:'Puerta di�xil �  la belirli artikel.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'¿Es grande la mesa?',
          tr:'Masa büyük mü?',
          gramNote:'Evet/Hayır sorusu: fiil ba�xa gelir veya tonlama.',
          bd:[
            {
              ro:'Es',
              tr:'... mı?',
              role:'V',
              note:'Soru tonu.'
            },
            {
              ro:'la mesa',
              tr:'masa',
              role:'S',
              note:'Di�xil özne.'
            },
            {
              ro:'grande',
              tr:'büyük',
              role:'adj',
              note:'Sıfat � fiilden sonra.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Sí, es grande.',
          tr:'Evet, o büyük.',
          gramNote:'Sí = evet.',
          bd:[
            {
              ro:'es grande',
              tr:'büyük',
              role:'V',
              note:'ser + sıfat.'
            }
          ]
        }
      ]
    },
    {
      id:'d2',
      title:'Kendini Tanıtma',
      title_en:'Self Introduction with ser',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Soy Ali. Soy estudiante.',
          tr:'Ben Ali. Ben ö�xrenciyim.',
          gramNote:'İki cümle ser ile � isim + meslek.',
          bd:[
            {
              ro:'Soy Ali',
              tr:'Ben Ali\'yim',
              role:'V',
              note:'ser + isim.'
            },
            {
              ro:'Soy estudiante',
              tr:'��xrenciyim',
              role:'V',
              note:'ser + meslek � artikel yok.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'¡Qué bien! Soy María. Soy profesora.',
          tr:'Güzel! Ben María. Ben ö�xretmenim.',
          gramNote:'Profesora = kadın ö�xretmen (di�xil).',
          bd:[
            {
              ro:'Qué bien',
              tr:'Güzel / ne güzel',
              role:'adj',
              note:'Olumlu tepki.'
            },
            {
              ro:'profesora',
              tr:'ö�xretmen (kadın)',
              role:'O',
              note:'-a eki di�xil meslek.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'¿Es usted también profesora?',
          tr:'Siz de ö�xretmen misiniz?',
          gramNote:'Resmi soru � usted + es.',
          bd:[
            {
              ro:'Es usted',
              tr:'Misiniz',
              role:'V',
              note:'Resmi soru.'
            },
            {
              ro:'también',
              tr:'de / da',
              role:'K',
              note:'también = de/da.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Sí, soy profesora. ¿Y tú? ¿Eres estudiante?',
          tr:'Evet, ö�xretmenim. Ya sen? ��xrenci misin?',
          gramNote:'tú\'ya geçi�x � samimi ortam. ¿Eres ...? = sen ... misin?',
          bd:[
            {
              ro:'¿Eres tú?',
              tr:'Sen ... misin',
              role:'V',
              note:'tú ile eres � samimi soru.'
            },
            {
              ro:'estudiante',
              tr:'ö�xrenci',
              role:'O',
              note:'Cinsiyetsiz meslek.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Sí, soy estudiante. ¡Estamos en la lección uno!',
          tr:'Evet, ö�xrenciyim. Birinci dersteyiz!',
          gramNote:[
            {
              ro:'Estamos',
              tr:'Biz ...deyiz',
              role:'V',
              note:'estar � geçici konum. ser de�xil!'
            },
            {
              ro:'lección uno',
              tr:'birinci ders',
              role:'K',
              note:'en + la = ...de/-da.'
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
      transcript:'Es un hombre. El hombre es alto. La mujer es amable. Los niños son pequeños.',
      tr:'Bu bir adam. Adam uzun boylu. Kadın nazik. �!ocuklar küçük.',
      questions:[
        {
          q:'¿Qué artículo usa "hombre"?',
          opts:[
            'la',
            'los',
            'el',
            'un'
          ],
          answer:2,
          tr:'"hombre" hangi artikel alır?'
        },
        {
          q:'¿Cómo se dice "mujer" en turco?',
          opts:[
            'çocuk',
            'kadın',
            'masa',
            'kapı'
          ],
          answer:1,
          tr:'"mujer" Türkçede ne?'
        },
        {
          q:'¿Cómo son los niños?',
          opts:[
            'grandes',
            'pequeños',
            'amables',
            'altos'
          ],
          answer:1,
          tr:'�!ocuklar nasıl?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[2] = L2;
