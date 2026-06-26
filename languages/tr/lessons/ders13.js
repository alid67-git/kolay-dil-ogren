// ders13.js — Turkish Lesson 13: Social (beginner)
const L13 = {
  words:[
    {
      id:'w1',
      en:'Arkadaş',
      ro:'ar-ka-dash',
      tr:'friend', tr_th:'เพื่อน',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Parti',
      ro:'par-ti',
      tr:'party', tr_th:'ปาร์ตี้'
    },
    {
      id:'w3',
      en:'Sinema',
      ro:'si-ne-ma',
      tr:'cinema', tr_th:'โรงภาพยนตร์'
    },
    {
      id:'w4',
      en:'Müzik',
      ro:'mue-zik',
      tr:'music', tr_th:'ดนตรี'
    },
    {
      id:'w5',
      en:'Davet etmek',
      ro:'da-vet et-mek',
      tr:'to invite'
    },
    {
      id:'w6',
      en:'Kutlamak',
      ro:'kut-la-mak',
      tr:'to celebrate'
    },
    {
      id:'w7',
      en:'Bugün',
      ro:'bu-guen',
      tr:'today', tr_th:'วันนี้'
    },
    {
      id:'w8',
      en:'Yarın',
      ro:'ya-ruhn',
      tr:'tomorrow', tr_th:'พรุ่งนี้'
    },
    {
      id:'w9',
      en:'Mutlu',
      ro:'mut-lu',
      tr:'happy', tr_th:'มีความสุข'
    },
    {
      id:'w10',
      en:'Soru',
      ro:'so-ru',
      tr:'question', tr_th:'คำถาม'
    },
    {
      id:'w11',
      en:'Cevap',
      ro:'je-vap',
      tr:'answer', tr_th:'คำตอบ'
    },
    {
      id:'w12',
      en:'Görüşürüz.',
      ro:'goe-ru-shue-ruz',
      tr:'see you', tr_th:'แล้วเจอกัน'
    },
    {
      id:'w13',
      en:'Teşekkürler',
      ro:'te-shek-kuer-ler',
      tr:'thanks', tr_th:'ขอบคุณ'
    },
    {
      id:'w14',
      en:'Hoşça kal',
      ro:'hosh-cha kal',
      tr:'goodbye', tr_th:'ลาก่อน'
    },
    {
      id:'w15',
      en:'Aile',
      ro:'a-i-le',
      tr:'family'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Social — Temel',
      title_en:'Social — Basics',
      explanation:'Bu derste Social alanında sık kullanılan ifadeleri öğreniyorsun. Açıklamalar Türkçe verilir. Ali erkek öğrenci olarak örnek cümleleri kullanır.',
      table:[
        {
          pronoun:'Örnek 1',
          form:'Arkadaş',
          example:'Arkadaş',
          tr:'friend', tr_th:'เพื่อน'
        },
        {
          pronoun:'Örnek 2',
          form:'Parti',
          example:'Parti',
          tr:'party', tr_th:'ปาร์ตี้'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Arkadaş',
      tr:'friend', tr_th:'เพื่อน',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Parti',
      tr:'party', tr_th:'ปาร์ตี้',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'Sinema',
      tr:'cinema', tr_th:'โรงภาพยนตร์',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Müzik',
      tr:'music', tr_th:'ดนตรี',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Davet etmek',
      tr:'to invite',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Social',
      title_en:'Social',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Arkadaş',
          tr:'friend', tr_th:'เพื่อน',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'ar-ka-dash',
              tr:'friend', tr_th:'เพื่อน',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Parti',
          tr:'party', tr_th:'ปาร์ตี้',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'par-ti',
              tr:'party', tr_th:'ปาร์ตี้',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Sinema',
          tr:'cinema', tr_th:'โรงภาพยนตร์',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Müzik',
          tr:'music', tr_th:'ดนตรี',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Yarın arkadaşlarla partiye gidiyoruz.',
      tr:'Tomorrow we are going to a party with friends.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'Arkadaş',
            'Parti',
            'Sinema',
            'Müzik'
          ],
          answer:0,
          tr:'Doğru kelimeyi seç.', tr_th:'เลือกคำที่ถูกต้อง'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'Parti',
            'Sinema',
            'Müzik',
            'Davet etmek'
          ],
          answer:1,
          tr:'İkinci ifadeyi seç.', tr_th:'เลือกประโยคที่สอง'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[13] = L13;
