// ders17.js — Turkish Lesson 17: Emotions (beginner)
const L17 = {
  words:[
    {
      id:'w1',
      en:'Mutlu',
      ro:'mut-lu',
      tr:'happy',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Üzgün',
      ro:'uez-guen',
      tr:'sad'
    },
    {
      id:'w3',
      en:'Yorgun',
      ro:'yor-gun',
      tr:'tired'
    },
    {
      id:'w4',
      en:'Kızgın',
      ro:'kuz-guhn',
      tr:'angry'
    },
    {
      id:'w5',
      en:'Nasılsın?',
      ro:'na-suhl-suhn',
      tr:'how are you?'
    },
    {
      id:'w6',
      en:'İyiyim.',
      ro:'ii-yi-yim',
      tr:'I am fine'
    },
    {
      id:'w7',
      en:'Belki',
      ro:'bel-ki',
      tr:'maybe'
    },
    {
      id:'w8',
      en:'Görüş',
      ro:'goe-ruesh',
      tr:'opinion'
    },
    {
      id:'w9',
      en:'Katılıyorum',
      ro:'ka-tuhr-luh-yo-rum',
      tr:'I agree'
    },
    {
      id:'w10',
      en:'Katılmıyorum',
      ro:'ka-tuhl-muh-yo-rum',
      tr:'I disagree'
    },
    {
      id:'w11',
      en:'Teşekkürler',
      ro:'te-shek-kuer-ler',
      tr:'thanks'
    },
    {
      id:'w12',
      en:'Bol şans!',
      ro:'bol shans',
      tr:'good luck'
    },
    {
      id:'w13',
      en:'Tebrikler!',
      ro:'teb-rik-ler',
      tr:'congratulations'
    },
    {
      id:'w14',
      en:'Görüşürüz.',
      ro:'goe-ru-shue-ruz',
      tr:'see you'
    },
    {
      id:'w15',
      en:'Arkadaş',
      ro:'ar-ka-dash',
      tr:'friend'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Emotions — Temel',
      title_en:'Emotions — Basics',
      explanation:'Bu derste Emotions alanında sık kullanılan ifadeleri öğreniyorsun. Açıklamalar Türkçe verilir. Ali erkek öğrenci olarak örnek cümleleri kullanır.',
      table:[
        {
          pronoun:'Örnek 1',
          form:'Mutlu',
          example:'Mutlu',
          tr:'happy'
        },
        {
          pronoun:'Örnek 2',
          form:'Üzgün',
          example:'Üzgün',
          tr:'sad'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Mutlu',
      tr:'happy',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Üzgün',
      tr:'sad',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'Yorgun',
      tr:'tired',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Kızgın',
      tr:'angry',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Nasılsın?',
      tr:'how are you?',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Emotions',
      title_en:'Emotions',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Mutlu',
          tr:'happy',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'mut-lu',
              tr:'happy',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Üzgün',
          tr:'sad',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'uez-guen',
              tr:'sad',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Yorgun',
          tr:'tired',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Kızgın',
          tr:'angry',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Biraz yorgunum ama mutluyum.',
      tr:'I am a little tired but happy.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'Mutlu',
            'Üzgün',
            'Yorgun',
            'Kızgın'
          ],
          answer:0,
          tr:'Doğru kelimeyi seç.'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'Üzgün',
            'Yorgun',
            'Kızgın',
            'Nasılsın?'
          ],
          answer:1,
          tr:'İkinci ifadeyi seç.'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[17] = L17;
