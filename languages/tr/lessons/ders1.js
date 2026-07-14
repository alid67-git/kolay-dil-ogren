// ders1.js — Turkish Lesson 1: Greetings & Introductions (beginner)
const L1 = {
  words:[
    {
      id:'w1',
      en:'Merhaba',
      ro:'mer-ha-ba',
      tr:'hello', tr_th:'สวัสดี',
      tip:'En temel selamlaşma ifadesi.', tip_th:'สำนวนทักทายพื้นฐานที่สุด'
    },
    {
      id:'w2',
      en:'Günaydın',
      ro:'gue-naidun',
      tr:'good morning', tr_th:'สวัสดีตอนเช้า'
    },
    {
      id:'w3',
      en:'İyi akşamlar',
      ro:'ii ak-sham-lar',
      tr:'good evening', tr_th:'สวัสดีตอนเย็น'
    },
    {
      id:'w4',
      en:'Hoşça kal',
      ro:'hosh-cha kal',
      tr:'goodbye', tr_th:'ลาก่อน'
    },
    {
      id:'w5',
      en:'Teşekkürler',
      ro:'te-shek-kuer-ler',
      tr:'thanks', tr_th:'ขอบคุณ'
    },
    {
      id:'w6',
      en:'Lütfen',
      ro:'luet-fen',
      tr:'please', tr_th:'กรุณา'
    },
    {
      id:'w7',
      en:'Evet',
      ro:'e-vet',
      tr:'yes', tr_th:'ใช่'
    },
    {
      id:'w8',
      en:'Hayır',
      ro:'ha-yuhr',
      tr:'no', tr_th:'ไม่'
    },
    {
      id:'w9',
      en:'Adın ne?',
      ro:'a-duhn ne',
      tr:'what is your name?', tr_th:'คุณชื่ออะไร?'
    },
    {
      id:'w10',
      en:'Benim adım Ali.',
      ro:'be-nim a-duhm a-li',
      tr:'my name is Ali', tr_th:'ฉันชื่ออาลี'
    },
    {
      id:'w11',
      en:'Tanıştığıma memnun oldum.',
      ro:'ta-nush-tu-uh-ma mem-nun ol-dum',
      tr:'nice to meet you', tr_th:'ยินดีที่ได้รู้จัก'
    },
    {
      id:'w12',
      en:'Nasılsın?',
      ro:'na-suhl-suhn',
      tr:'how are you?', tr_th:'สบายดีไหม?'
    },
    {
      id:'w13',
      en:'İyiyim.',
      ro:'ii-yi-yim',
      tr:'I am fine', tr_th:'สบายดี'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Selamlaşma Kalıpları',
      title_en:'Greeting Patterns',
      explanation:'Türkçede selamlaşma çoğunlukla sabit kalıplarla yapılır. Günün saatine göre Günaydın / İyi akşamlar seçilir; genel selam olarak Merhaba her zaman kullanılabilir. Ali erkek öğrenci olarak ilk konuşmada net ve kısa kalıpları kullanır.',
      explanation_en:'Turkish greetings use fixed phrases. Use Günaydın in the morning, İyi akşamlar in the evening; Merhaba works any time. Short, clear phrases are best when meeting someone new.',
      explanation_de:'Türkische Begrüßungen sind feste Wendungen. Günaydın morgens, İyi akşamlar abends; Merhaba jederzeit. Kurze, klare Sätze beim Kennenlernen.',
      table:[
        {
          pronoun:'Genel',
          form:'Merhaba',
          example:'Merhaba!',
          tr:'hello', tr_th:'สวัสดี'
        },
        {
          pronoun:'Sabah',
          form:'Günaydın',
          example:'Günaydın!',
          tr:'good morning', tr_th:'สวัสดีตอนเช้า'
        },
        {
          pronoun:'Akşam',
          form:'İyi akşamlar',
          example:'İyi akşamlar!',
          tr:'good evening', tr_th:'สวัสดีตอนเย็น'
        },
        {
          pronoun:'Veda',
          form:'Hoşça kal',
          example:'Hoşça kal.',
          tr:'goodbye', tr_th:'ลาก่อน'
        }
      ],
      note:'Aynı kalıpları farklı kişilerle sesli tekrar ederek otomatikleştir.'
    },
    {
      id:'g2',
      title:'Tanışma ve Nezaket',
      title_en:'Introductions and Courtesy',
      explanation:'Tanışmada önce isim sorulur, sonra isim söylenir: Adın ne? / Benim adım Ali. Nezaket için Teşekkürler ve Lütfen çok önemlidir. Türkçede özne çoğu zaman düşebilir ama başlangıçta tam cümle ile çalışmak daha güvenlidir.',
      explanation_en:'When meeting someone: ask the name (Adın ne?), then give yours (Benim adım …). Teşekkürler and Lütfen are essential for politeness. Tanıştığıma memnun oldum = Nice to meet you (literally: I became pleased that I met you).',
      explanation_de:'Beim Kennenlernen: Name fragen (Adın ne?), dann eigenen Namen nennen. Teşekkürler und Lütfen sind wichtig. Tanıştığıma memnun oldum = Freut mich, dich kennenzulernen.',
      table:[
        {
          pronoun:'Soru',
          form:'Adın ne?',
          example:'Adın ne?',
          tr:'what is your name?', tr_th:'คุณชื่ออะไร?'
        },
        {
          pronoun:'Cevap',
          form:'Benim adım Ali.',
          example:'Benim adım Ali.',
          tr:'my name is Ali', tr_th:'ฉันชื่ออาลี'
        },
        {
          pronoun:'Nezaket',
          form:'Teşekkürler',
          example:'Teşekkürler.',
          tr:'thanks', tr_th:'ขอบคุณ'
        }
      ],
      note:'Ali erkek öğrenci örneklerinde birinci tekil konuşur formu kullanılır.'
    },
    {
      id:'g3',
      title:'Türkçede "To Be" — Ek Eylem ve Ünlü Uyumu',
      title_en:'Turkish To Be — Suffix System and Vowel Harmony',
      explanation_en:'In Turkish, "to be" is not a separate verb — it is a suffix added to nouns/adjectives. The suffix changes based on vowel harmony: after e/i → -im, after a/ı → -ım, after o/u → -um, after ö/ü → -üm. Negation uses "değil": öğrenci değilim (I am not a student). Questions add "mi/mı/mu/mü": öğrenci misin? (Are you a student?)',
      explanation:'Türkçede "to be" ayrı bir fiil değil, isme eklenen ektir. Ünlü uyumuna göre değişir: e/i sonrası -im, a/ı sonrası -ım, o/u sonrası -um, ö/ü sonrası -üm. Olumsuz "değil" ile yapılır. Soru eki mi/mı/mu/mü olup kelimeden ayrı yazılır.',
      table:[
        {pronoun:'Ben', form:'-im / -yim', example:'Ben öğrenciyim. / Ben iyiyim.', tr:'I am a student. / I am fine.'},
        {pronoun:'Sen', form:'-sin / -sın', example:'Sen öğrencisin.', tr:'You are a student.'},
        {pronoun:'O', form:'-(dir) — düşebilir', example:'O öğrenci (dir).', tr:'He/She is a student.'},
        {pronoun:'Biz', form:'-iz / -yiz', example:'Biz öğrenciyiz.', tr:'We are students.'},
        {pronoun:'Siz', form:'-siniz / -sınız', example:'Siz Türk müsünüz?', tr:'Are you Turkish?'},
        {pronoun:'Onlar', form:'-(dir)lar — düşebilir', example:'Onlar öğrenci.', tr:'They are students.'}
      ],
      note:'Vowel harmony key: öğrenciyim (e/i stem), Türküm (ü stem), iyiyim (i stem), doktorum (o/u stem). The 3rd person suffix -(dir) is often dropped in speech.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Merhaba!',
      tr:'hello', tr_th:'สวัสดี',
      prompt:'Selam ver'
    },
    {
      id:'sp2',
      en:'Benim adım Ali.',
      tr:'my name is Ali', tr_th:'ฉันชื่ออาลี',
      prompt:'Kendini tanıt'
    },
    {
      id:'sp3',
      en:'Nasılsın?',
      tr:'how are you?', tr_th:'สบายดีไหม?',
      prompt:'Hal hatır sor'
    },
    {
      id:'sp4',
      en:'İyiyim, teşekkürler.',
      tr:'I am fine, thanks', tr_th:'สบายดี ขอบคุณ',
      prompt:'Cevap ver'
    },
    {
      id:'sp5',
      en:'Hoşça kal.',
      tr:'goodbye', tr_th:'ลาก่อน',
      prompt:'Vedalaş'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'İlk Tanışma',
      title_en:'First Meeting',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Merhaba!',
          tr:'hello!', tr_th:'สวัสดี!',
          gramNote:'Ali konuşmayı başlatıyor.',
          bd:[
            {
              ro:'mer-ha-ba',
              tr:'hello', tr_th:'สวัสดี',
              role:'greeting',
              note:'Genel selamlaşma.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Günaydın!',
          tr:'good morning!', tr_th:'สวัสดีตอนเช้า!',
          gramNote:'Sabah selamı.',
          bd:[
            {
              ro:'gue-naidun',
              tr:'good morning', tr_th:'สวัสดีตอนเช้า',
              role:'greeting',
              note:'Sabah saatlerinde kullanılır.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Adın ne?',
          tr:'what is your name?', tr_th:'คุณชื่ออะไร?',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Benim adım Anna.',
          tr:'my name is Anna', tr_th:'ฉันชื่อแอนนา',
          bd:[]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Tanıştığıma memnun oldum.',
          tr:'nice to meet you', tr_th:'ยินดีที่ได้รู้จัก',
          gramNote:'Tanışma kalıbı — yeni biriyle tanışınca.',
          gramNote_en:'Meeting phrase when you meet someone new. Tanışmak = to meet; -dığıma = that I met; memnun = pleased; oldum = I am (pleased).',
          gramNote_de:'Begrüßung beim Kennenlernen. Tanışmak = kennenlernen; memnun = erfreut; oldum = ich bin.',
          bd:[
            {ro:'Tanıştığıma',tr:'that I met',role:'phrase',note:'Tanışmak fiilinden -dığıma',note_en:'From tanışmak (to meet) + -dığıma (that I …)',note_de:'Von tanışmak + -dığıma (dass ich …)'},
            {ro:'memnun',tr:'pleased',role:'adj',note:'Sıfat: memnun',note_en:'Adjective: pleased, glad',note_de:'Adjektiv: erfreut'},
            {ro:'oldum',tr:'I became',role:'V',note:'olumlu geçmiş: oldum',note_en:'Past of olmak: I became / I am',note_de:'Vergangenheit von olmak'}
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Ben de memnun oldum.',
          tr:'nice to meet you too',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Merhaba! Benim adım Ali. Nasılsın? İyiyim, teşekkürler.',
      tr:'Hello! My name is Ali. How are you? I am fine, thanks.',
      questions:[
        {
          q:'Hangisi selamlaşma ifadesidir?',
          opts:[
            'Merhaba',
            'Teşekkürler',
            'Hayır',
            'Lütfen'
          ],
          answer:0,
          tr:'Giriş selamını seç.'
        },
        {
          q:'Ali kendini nasıl tanıtıyor?',
          opts:[
            'Benim adım Ali.',
            'Adın ne?',
            'İyi akşamlar',
            'Hoşça kal'
          ],
          answer:0,
          tr:'Tanışma cümlesini seç.'
        },
        {
          q:'Nasılsın sorusuna uygun cevap hangisi?',
          opts:[
            'İyiyim.',
            'Adım Ali.',
            'Lütfen.',
            'Nerede?'
          ],
          answer:0,
          tr:'Doğru cevabı seç.'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[1] = L1;
