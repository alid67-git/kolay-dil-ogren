// ders20.js — Turkish Lesson 20: Daily Conversation (beginner)
const L20 = {
  words:[
    {
      id:'w1',
      en:'Merhaba',
      ro:'mer-ha-ba',
      tr:'hello', tr_th:'สวัสดี',
      tip:'Temel kelime.',
      ctx:'Günlük kullanım.'
    },
    {
      id:'w2',
      en:'Nasılsın?',
      ro:'na-suhl-suhn',
      tr:'how are you?', tr_th:'สบายดีไหม?'
    },
    {
      id:'w3',
      en:'İyiyim.',
      ro:'ii-yi-yim',
      tr:'I am fine', tr_th:'สบายดี'
    },
    {
      id:'w4',
      en:'Teşekkürler',
      ro:'te-shek-kuer-ler',
      tr:'thanks', tr_th:'ขอบคุณ'
    },
    {
      id:'w5',
      en:'Lütfen',
      ro:'luet-fen',
      tr:'please', tr_th:'กรุณา'
    },
    {
      id:'w6',
      en:'Soru',
      ro:'so-ru',
      tr:'question', tr_th:'คำถาม'
    },
    {
      id:'w7',
      en:'Cevap',
      ro:'je-vap',
      tr:'answer', tr_th:'คำตอบ'
    },
    {
      id:'w8',
      en:'Nerede?',
      ro:'ne-re-de',
      tr:'where?', tr_th:'ที่ไหน?'
    },
    {
      id:'w9',
      en:'Ne zaman?',
      ro:'ne za-man',
      tr:'when?'
    },
    {
      id:'w10',
      en:'Neden?',
      ro:'ne-den',
      tr:'why?'
    },
    {
      id:'w11',
      en:'Nasıl?',
      ro:'na-suhl',
      tr:'how?'
    },
    {
      id:'w12',
      en:'Yardım eder misiniz?',
      ro:'yar-duhm e-der mi-si-niz',
      tr:'can you help me?'
    },
    {
      id:'w13',
      en:'Bilmiyorum.',
      ro:'bil-mi-yo-rum',
      tr:'I do not know'
    },
    {
      id:'w14',
      en:'Tabii ki.',
      ro:'ta-bii ki',
      tr:'of course'
    },
    {
      id:'w15',
      en:'Görüşürüz.',
      ro:'goe-ru-shue-ruz',
      tr:'see you', tr_th:'แล้วเจอกัน'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Daily Conversation — Temel',
      title_en:'Daily Conversation — Basics',
      explanation:'Bu derste Daily Conversation alanında sık kullanılan ifadeleri öğreniyorsun. Açıklamalar Türkçe verilir. Ali erkek öğrenci olarak örnek cümleleri kullanır.',
      table:[
        {
          pronoun:'Örnek 1',
          form:'Merhaba',
          example:'Merhaba',
          tr:'hello', tr_th:'สวัสดี'
        },
        {
          pronoun:'Örnek 2',
          form:'Nasılsın?',
          example:'Nasılsın?',
          tr:'how are you?', tr_th:'สบายดีไหม?'
        }
      ],
      note:'Kalıpları tek tek değil, kısa diyalog içinde tekrar ederek çalış.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Merhaba',
      tr:'hello', tr_th:'สวัสดี',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Nasılsın?',
      tr:'how are you?', tr_th:'สบายดีไหม?',
      prompt:'Kullan'
    },
    {
      id:'sp3',
      en:'İyiyim.',
      tr:'I am fine', tr_th:'สบายดี',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Teşekkürler',
      tr:'thanks', tr_th:'ขอบคุณ',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Lütfen',
      tr:'please', tr_th:'กรุณา',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Daily Conversation',
      title_en:'Daily Conversation',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Merhaba',
          tr:'hello', tr_th:'สวัสดี',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'mer-ha-ba',
              tr:'hello', tr_th:'สวัสดี',
              role:'phrase',
              note:'Örnek kullanım.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Nasılsın?',
          tr:'how are you?', tr_th:'สบายดีไหม?',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'na-suhl-suhn',
              tr:'how are you?', tr_th:'สบายดีไหม?',
              role:'phrase',
              note:'Doğal cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'İyiyim.',
          tr:'I am fine', tr_th:'สบายดี',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Teşekkürler',
          tr:'thanks', tr_th:'ขอบคุณ',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Merhaba! Nasılsın? Çok iyiyim.',
      tr:'Hello! How are you? I am very well.',
      questions:[
        {
          q:'Doğru ifade hangisi?',
          opts:[
            'Merhaba',
            'Nasılsın?',
            'İyiyim.',
            'Teşekkürler'
          ],
          answer:0,
          tr:'Doğru kelimeyi seç.', tr_th:'เลือกคำที่ถูกต้อง'
        },
        {
          q:'İkinci doğru seçenek hangisi?',
          opts:[
            'Nasılsın?',
            'İyiyim.',
            'Teşekkürler',
            'Lütfen'
          ],
          answer:1,
          tr:'İkinci ifadeyi seç.', tr_th:'เลือกประโยคที่สอง'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[20] = L20;
