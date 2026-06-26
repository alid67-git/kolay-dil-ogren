// ders20.js — Italian Lesson 20: Daily Conversation Practice (beginner)
const L20 = {
  words:[
    {
      id:'w1',
      en:'Buongiorno!',
      ro:'Buongi',
      tr:'İyi günler!',
      tip:'Temel kelime.',
      ctx:'Günlük konuşma.'
    },
    {
      id:'w2',
      en:'Come sta?',
      ro:'Come s',
      tr:'Nasılsınız?'
    },
    {
      id:'w3',
      en:'Bene.',
      ro:'Bene.',
      tr:'İyiyim.'
    },
    {
      id:'w4',
      en:'Scusi',
      ro:'Scusi',
      tr:'Pardon'
    },
    {
      id:'w5',
      en:'Nessun problema',
      ro:'Nessun',
      tr:'Sorun değil'
    },
    {
      id:'w6',
      en:'Certo',
      ro:'Certo',
      tr:'Tabii ki'
    },
    {
      id:'w7',
      en:'Capisce?',
      ro:'Capisc',
      tr:'Anlıyor musunuz?'
    },
    {
      id:'w8',
      en:'Non capisco.',
      ro:'Non ca',
      tr:'Anlamıyorum.'
    },
    {
      id:'w9',
      en:'Può ripetere?',
      ro:'Può ri',
      tr:'Tekrar edebilir misiniz?'
    },
    {
      id:'w10',
      en:'Piano, per favore.',
      ro:'Piano,',
      tr:'Yavaş, lütfen.'
    },
    {
      id:'w11',
      en:'Un momento, per favore.',
      ro:'Un mom',
      tr:'Bir dakika, lütfen.'
    },
    {
      id:'w12',
      en:'Capito!',
      ro:'Capito',
      tr:'Anlaşıldı!'
    },
    {
      id:'w13',
      en:'Grazie',
      ro:'Grazie',
      tr:'Teşekkürler'
    },
    {
      id:'w14',
      en:'Prego',
      ro:'Prego',
      tr:'Rica ederim'
    },
    {
      id:'w15',
      en:'A dopo',
      ro:'A dopo',
      tr:'Görüşürüz'
    },
    {
      id:'w16',
      en:'Mi chiamo Ali',
      ro:'Mi chi',
      tr:'Benim adım Ali'
    },
    {
      id:'w17',
      en:'Piacere',
      ro:'Piacer',
      tr:'Memnun oldum'
    },
    {
      id:'w18',
      en:'Parla inglese?',
      ro:'Parla ',
      tr:'İngilizce biliyor musunuz?'
    },
    {
      id:'w19',
      en:'Un po\'',
      ro:'Un po\'',
      tr:'Biraz'
    },
    {
      id:'w20',
      en:'Può aiutarmi?',
      ro:'Può ai',
      tr:'Yardım edebilir misiniz?'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Daily Conversation Practice — Temel',
      title_en:'Daily Conversation Practice — Basics',
      explanation:'Bu derste Daily Conversation Practice konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.',
      table:[
        {
          pronoun:'Örnek',
          form:'Buongiorno!',
          example:'Buongiorno!',
          tr:'İyi günler!'
        },
        {
          pronoun:'Pratik',
          form:'Come sta?',
          example:'Come sta?',
          tr:'Nasılsınız?'
        }
      ],
      note:'Kelime + artikel (varsa) birlikte ezberle.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'Buongiorno!',
      tr:'İyi günler!',
      prompt:'İfade et'
    },
    {
      id:'sp2',
      en:'Come sta?',
      tr:'Nasılsınız?',
      prompt:'Kelime kullan'
    },
    {
      id:'sp3',
      en:'Bene.',
      tr:'İyiyim.',
      prompt:'Cümle kur'
    },
    {
      id:'sp4',
      en:'Scusi',
      tr:'Pardon',
      prompt:'Soru sor'
    },
    {
      id:'sp5',
      en:'Nessun problema',
      tr:'Sorun değil',
      prompt:'Konuşma pratiği'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Daily Conversation Practice',
      title_en:'Daily Conversation Practice',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'Buongiorno!',
          tr:'İyi günler!',
          gramNote:'Ali konuşuyor.',
          bd:[
            {
              ro:'Buongiorno!',
              tr:'İyi günler!',
              role:'phrase',
              note:'Örnek.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Come sta?',
          tr:'Nasılsınız?',
          gramNote:'Karşılık.',
          bd:[
            {
              ro:'Come sta?',
              tr:'Nasılsınız?',
              role:'phrase',
              note:'Cevap.'
            }
          ]
        },
        {
          speaker:'A',
          gender:'m',
          en:'Bene.',
          tr:'İyiyim.',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'Scusi',
          tr:'Pardon',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Buongiorno!.',
      tr:'Buongiorno!.',
      questions:[
        {
          q:'?',
          opts:[
            'Buongiorno!',
            'Come sta?',
            'Bene.',
            'Scusi'
          ],
          answer:0,
          tr:'Doğru kelime?'
        },
        {
          q:'??',
          opts:[
            'Come sta?',
            'Bene.',
            'Scusi',
            'Nessun problema'
          ],
          answer:1,
          tr:'İkinci soru?'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[20] = L20;
