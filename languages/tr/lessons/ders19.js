// ders19.js — Turkish Lesson 19: Entertainment (beginner)
const L19 = {
  words:[
    {
      id:'w1',
      en:'Hobi',
      ro:'ho-bi',
      tr:'hobby',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Okumak',
      ro:'o-ku-mak',
      tr:'to read'
    },
    {
      id:'w3',
      en:'Müzik',
      ro:'mue-zik',
      tr:'music'
    },
    {
      id:'w4',
      en:'Sinema',
      ro:'si-ne-ma',
      tr:'cinema'
    },
    {
      id:'w5',
      en:'Tiyatro',
      ro:'ti-yat-ro',
      tr:'theater'
    },
    {
      id:'w6',
      en:'Müze',
      ro:'mue-ze',
      tr:'museum'
    },
    {
      id:'w7',
      en:'Parti',
      ro:'par-ti',
      tr:'party'
    },
    {
      id:'w8',
      en:'Arkadaş',
      ro:'ar-ka-dash',
      tr:'friend'
    },
    {
      id:'w9',
      en:'Davet etmek',
      ro:'da-vet et-mek',
      tr:'to invite'
    },
    {
      id:'w10',
      en:'Kutlamak',
      ro:'kut-la-mak',
      tr:'to celebrate'
    },
    {
      id:'w11',
      en:'Şarkı',
      ro:'shar-kuh',
      tr:'song'
    },
    {
      id:'w12',
      en:'Sanat',
      ro:'sa-nat',
      tr:'art'
    },
    {
      id:'w13',
      en:'Soru',
      ro:'so-ru',
      tr:'question'
    },
    {
      id:'w14',
      en:'Cevap',
      ro:'je-vap',
      tr:'answer'
    },
    {
      id:'w15',
      en:'Bugün',
      ro:'bu-guen',
      tr:'today'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Entertainment — Temel',
      title_en:'Entertainment — Basics',
      explanation:'Bu derste Entertainment alanında sık kullanılan ifadeleri öğreniyorsun. Açıklamalar Türkçe verilir. Ali erkek öğrenci olarak örnek cümleleri kullanır.',
      table:[
        {
          pronoun:'Örnek 1',
          form:'Hobi',
          example:'Hobi',
          tr:'hobby'
        },
        {
          pronoun:'Örnek 2',
          form:'Okumak',
          example:'Okumak',
          tr:'to read'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Hobi',
      tr:'hobby',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Okumak',
      tr:'to read',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'Müzik',
      tr:'music',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Sinema',
      tr:'cinema',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Tiyatro',
      tr:'theater',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Entertainment',
      title_en:'Entertainment',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Hobi',
          tr:'hobby',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'ho-bi',
              tr:'hobby',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Okumak',
          tr:'to read',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'o-ku-mak',
              tr:'to read',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Müzik',
          tr:'music',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Sinema',
          tr:'cinema',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Hafta sonu müzeye ve sinemaya gidiyorum.',
      tr:'On the weekend I am going to the museum and the cinema.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'Hobi',
            'Okumak',
            'Müzik',
            'Sinema'
          ],
          answer:0,
          tr:'Doğru kelimeyi seç.'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'Okumak',
            'Müzik',
            'Sinema',
            'Tiyatro'
          ],
          answer:1,
          tr:'İkinci ifadeyi seç.'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[19] = L19;
