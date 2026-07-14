// ders1.js — Chinese Lesson 1: Greetings & Introductions (beginner)
const L1 = {
  words:[
    {
      id:'w1',
      en:'你好',
      ro:'nǐ hǎo',
      tr:'merhaba',
      tip:'En yaygın selamlama.'
    },
    {
      id:'w2',
      en:'早上好',
      ro:'zǎoshang hǎo',
      tr:'günaydın'
    },
    {
      id:'w3',
      en:'晚上好',
      ro:'wǎnshang hǎo',
      tr:'iyi akşamlar'
    },
    {
      id:'w4',
      en:'再见',
      ro:'zàijiàn',
      tr:'hoşça kal'
    },
    {
      id:'w5',
      en:'谢谢',
      ro:'xièxie',
      tr:'teşekkür ederim'
    },
    {
      id:'w6',
      en:'请',
      ro:'qǐng',
      tr:'lütfen'
    },
    {
      id:'w7',
      en:'是',
      ro:'shì',
      tr:'evet'
    },
    {
      id:'w8',
      en:'不',
      ro:'bù',
      tr:'hayır'
    },
    {
      id:'w9',
      en:'你叫什么名字？',
      ro:'nǐ jiào shénme míngzi?',
      tr:'adın ne?'
    },
    {
      id:'w10',
      en:'我叫阿里',
      ro:'wǒ jiào Ālǐ',
      tr:'benim adım Ali'
    },
    {
      id:'w11',
      en:'很高兴认识你',
      ro:'hěn gāoxìng rènshi nǐ',
      tr:'tanıştığıma memnun oldum'
    },
    {
      id:'w12',
      en:'你好吗？',
      ro:'nǐ hǎo ma?',
      tr:'nasılsın?'
    },
    {
      id:'w13',
      en:'我很好',
      ro:'wǒ hěn hǎo',
      tr:'iyiyim'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Selamlama Kalıpları — Saate Göre',
      title_en:'Greeting Patterns by Time of Day',
      explanation:'Çincenin selamlaşma kalıpları kısa ve sabittir. 你好 (nǐ hǎo) her zaman kullanılabilir. Günün saatine göre: 早上好 (zǎoshang hǎo) sabah, 下午好 (xiàwǔ hǎo) öğleden sonra, 晚上好 (wǎnshang hǎo) akşam. Vedalaşmak için 再见 (zàijiàn) veya samimi 拜拜 (bài bài) kullanılır.',
      table:[
        {pronoun:'Her zaman', form:'你好', example:'你好！', tr:'Merhaba! (nǐ hǎo)'},
        {pronoun:'Resmi / saygı', form:'您好', example:'您好！', tr:'İyi günler! (nín hǎo — saygılı)'},
        {pronoun:'Sabah', form:'早上好', example:'早上好！', tr:'Günaydın! (zǎoshang hǎo)'},
        {pronoun:'Öğleden sonra', form:'下午好', example:'下午好！', tr:'İyi günler! (xiàwǔ hǎo)'},
        {pronoun:'Akşam', form:'晚上好', example:'晚上好！', tr:'İyi akşamlar! (wǎnshang hǎo)'},
        {pronoun:'Veda', form:'再见 / 拜拜', example:'再见！', tr:'Hoşça kal! (zàijiàn)'}
      ],
      note:'你好 ve 您好 farkı: 你 samimi/nötr, 您 saygılı. Yaşlılar, öğretmenler, müşterilerle 您好 daha uygundur.'
    },
    {
      id:'g2',
      title:'Kendini Tanıtma — 我叫 ve 我是',
      title_en:'Self-Introduction — 我叫 and 我是',
      explanation:'Çincede isim söylemek için iki kalıp vardır: 我叫... (Wǒ jiào...) = "Benim adım..." ve 我是... (Wǒ shì...) = "Ben ...im". 我叫 isimlendirme için, 我是 kimlik/mensubiyet için kullanılır. Adın ne? için: 你叫什么名字？veya kısa olarak 你叫什么？',
      table:[
        {pronoun:'İsim sorma', form:'你叫什么名字？', example:'你叫什么名字？', tr:'Adın ne? (nǐ jiào shénme míngzi?)'},
        {pronoun:'İsim cevap', form:'我叫阿里。', example:'我叫阿里。', tr:'Benim adım Ali. (Wǒ jiào Ālǐ)'},
        {pronoun:'Kimlik', form:'我是学生。', example:'我是学生。', tr:'Ben öğrenciyim. (Wǒ shì xuésheng)'},
        {pronoun:'Nereden', form:'我是土耳其人。', example:'我是土耳其人。', tr:'Ben Türküm. (Wǒ shì Tǔěrqí rén)'},
        {pronoun:'Tanışma', form:'很高兴认识你！', example:'很高兴认识你！', tr:'Tanıştığıma memnun oldum!'},
        {pronoun:'Karşılık', form:'我也很高兴认识你！', example:'我也很高兴认识你！', tr:'Ben de memnun oldum! (wǒ yě)'}
      ],
      note:'我叫 vs 我是: 我叫Ali (adım Ali) ile 我是Ali (Ben Ali\'yim) aynı anlama gelir. 叫 daha doğal konuşma dili, 是 daha resmi.'
    },
    {
      id:'g3',
      title:'吗 Soru Eki ve 不 Olumsuzlama',
      title_en:'吗 Question Particle and 不 Negation',
      explanation:'Çincede soru sormak çok basittir: cümlenin sonuna 吗 (ma) eklenir, kelime sırası değişmez. Olumsuzlama için 不 (bù) fiilden önce gelir. 是 (shì) fiilinin olumsuzu 不是 (bú shì) = "değil". 叫 fiilinin olumsuzu 不叫 = "o adda değilim".',
      table:[
        {pronoun:'吗 sorusu', form:'...吗？', example:'你好吗？', tr:'İyi misin? (Nǐ hǎo ma?)'},
        {pronoun:'Cevap (evet)', form:'好 / 很好', example:'我很好，谢谢！', tr:'İyiyim, teşekkürler!'},
        {pronoun:'Olumsuz (不)', form:'不 + fiil', example:'我不叫李明。', tr:'Adım Li Ming değil.'},
        {pronoun:'Değil (不是)', form:'不是', example:'我不是学生。', tr:'Ben öğrenci değilim.'},
        {pronoun:'Teşekkür', form:'谢谢 / 谢谢你', example:'谢谢你！', tr:'Teşekkürler! (xièxiè)'},
        {pronoun:'Rica ederim', form:'不客气 / 不谢', example:'不客气！', tr:'Rica ederim! (bú kèqi)'}
      ],
      note:'吗 sorusu en kolay Çince soru tipidir — yapı değişmez, sadece 吗 eklenir. Olumsuzda 不好 (iyi değil), 不是 (değil), 不叫 kullanılır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'你好',
      tr:'Merhaba',
      prompt:'Selam ver'
    },
    {
      id:'sp2',
      en:'我叫阿里',
      tr:'Benim adım Ali',
      prompt:'Kendini tanıt'
    },
    {
      id:'sp3',
      en:'你好吗？',
      tr:'Nasılsın?',
      prompt:'Hal hatır sor'
    },
    {
      id:'sp4',
      en:'我很好',
      tr:'İyiyim',
      prompt:'Cevap ver'
    },
    {
      id:'sp5',
      en:'谢谢 再见',
      tr:'Teşekkürler, hoşça kal',
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
          en:'你好',
          tr:'Merhaba',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'nǐ hǎo',
              tr:'Merhaba',
              role:'greeting',
              note:'Açılış selamı.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'早上好',
          tr:'Günaydın',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'zǎoshang hǎo',
              tr:'Günaydın',
              role:'greeting',
              note:'Sabah selamı.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'你叫什么名字？',
          tr:'Adın ne?',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'我叫阿里',
          tr:'Benim adım Anna',
          bd:[]
        },
        {
          speaker:'A',
          gender:'m',
          en:'很高兴认识你',
          tr:'Memnun oldum',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'你好. 我叫阿里. 很高兴认识你.',
      tr:'Merhaba. Benim adım Ali. Memnun oldum.',
      questions:[
        {
          q:'Hangi ifade selamdır?',
          opts:[
            '你好',
            '谢谢',
            '再见',
            '是'
          ],
          answer:0,
          tr:'Selam ifadesini seç'
        },
        {
          q:'Ali adını nasıl söylüyor?',
          opts:[
            '我叫阿里',
            '你叫什么名字？',
            '你好吗？',
            '我很好'
          ],
          answer:0,
          tr:'Kendini tanıtma'
        },
        {
          q:'Tanışma ifadesi hangisi?',
          opts:[
            '很高兴认识你',
            '请',
            '不',
            '早上好'
          ],
          answer:0,
          tr:'Doğru kalıp'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[1] = L1;
