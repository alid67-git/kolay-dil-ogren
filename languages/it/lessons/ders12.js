// ders12.js — Italian Lesson 12: Phone & Communication (Telefon ve İletişim)
const L12 = {
  words:[
    {
      id:'w1',
      en:'Pronto!',
      ro:'Pronto',
      tr:'Alo! (telefonda)',
      tip:'Sadece telefonda kullanılır, yüz yüze değil.',
      ctx:'Telefon konuşmaları.',
      examples:[
        {
          it:'Pronto? Chi parla?',
          tr:'Alo? Kim arıyor?',
          bd:[{ro:'Pronto',tr:'alo'},{ro:'Chi parla?',tr:'kim arıyor / kim bu?'}]
        }
      ]
    },
    {
      id:'w2',
      en:'chiamare / telefonare',
      ro:'chiamare',
      tr:'aramak',
      examples:[
        {
          it:'Ti chiamo stasera alle otto.',
          tr:'Bu akşam saat sekizde arıyorum.',
          bd:[{ro:'Ti chiamo',tr:'seni arıyorum'},{ro:'stasera',tr:'bu akşam'},{ro:'alle otto',tr:'saat sekizde'}]
        }
      ]
    },
    {
      id:'w3',
      en:'il messaggio / il messaggio vocale',
      ro:'il messaggio',
      tr:'mesaj / sesli mesaj',
      examples:[
        {
          it:'Ti mando un messaggio, ok?',
          tr:'Sana mesaj atıyorum, tamam mı?',
          bd:[{ro:'Ti mando',tr:'sana atıyorum'},{ro:'un messaggio',tr:'bir mesaj'}]
        }
      ]
    },
    {
      id:'w4',
      en:'il numero di telefono',
      ro:'il numero',
      tr:'telefon numarası',
      examples:[
        {
          it:'Qual è il tuo numero di telefono?',
          tr:'Telefon numaran nedir?',
          bd:[{ro:'Qual è',tr:'nedir'},{ro:'il tuo numero di telefono',tr:'telefon numaran'}]
        }
      ]
    },
    {
      id:'w5',
      en:'mandare un messaggio / un\'email',
      ro:'mandare',
      tr:'mesaj / e-posta göndermek',
      examples:[
        {
          it:'Ti mando subito l\'email con i dettagli.',
          tr:'Ayrıntılarla birlikte hemen e-posta gönderiyorum.',
          bd:[{ro:'Ti mando subito',tr:'hemen gönderiyorum'},{ro:'l\'email con i dettagli',tr:'ayrıntılarla e-posta'}]
        }
      ]
    },
    {
      id:'w6',
      en:'Può richiamarmi? / Mi richiami.',
      ro:'richiamarmi',
      tr:'Geri arayabilir misiniz?',
      examples:[
        {
          it:'Sono in riunione ora, può richiamarmi tra un\'ora?',
          tr:'Şu an toplantıdayım, bir saat sonra geri arayabilir misiniz?',
          bd:[{ro:'Sono in riunione',tr:'toplantıdayım'},{ro:'può richiamarmi',tr:'geri arayabilir misiniz'},{ro:'tra un\'ora',tr:'bir saat sonra'}]
        }
      ]
    },
    {
      id:'w7',
      en:'Non posso parlare adesso.',
      ro:'Non posso parlare',
      tr:'Şu an konuşamıyorum.',
      examples:[
        {
          it:'Non posso parlare adesso, ti richiamo dopo.',
          tr:'Şu an konuşamıyorum, sonra ararım.',
          bd:[{ro:'Non posso parlare adesso',tr:'şu an konuşamıyorum'},{ro:'ti richiamo dopo',tr:'sonra ararım'}]
        }
      ]
    },
    {
      id:'w8',
      en:'la linea è occupata',
      ro:'occupato',
      tr:'hat meşgul',
      examples:[
        {
          it:'Ho provato a chiamarti ma la linea era occupata.',
          tr:'Seni aramaya çalıştım ama hat meşguldü.',
          bd:[{ro:'Ho provato a chiamarti',tr:'aramaya çalıştım'},{ro:'la linea era occupata',tr:'hat meşguldü'}]
        }
      ]
    },
    {
      id:'w9',
      en:'lasciare un messaggio',
      ro:'lasciare un messaggio',
      tr:'mesaj bırakmak',
      examples:[
        {
          it:'Posso lasciare un messaggio per il signor Bianchi?',
          tr:'Bay Bianchi için mesaj bırakabilir miyim?',
          bd:[{ro:'Posso lasciare un messaggio',tr:'mesaj bırakabilir miyim'},{ro:'per il signor Bianchi',tr:'Bay Bianchi için'}]
        }
      ]
    },
    {
      id:'w10',
      en:'Un attimo! / Un momento!',
      ro:'Un attimo',
      tr:'Bir dakika! / Bir saniye!',
      examples:[
        {
          it:'Un attimo, per favore! Glielo passo subito.',
          tr:'Bir saniye lütfen! Hemen bağlıyorum.',
          bd:[{ro:'Un attimo',tr:'bir saniye'},{ro:'Glielo passo subito',tr:'hemen bağlıyorum'}]
        }
      ]
    },
    {
      id:'w11',
      en:'Può ripetere più lentamente?',
      ro:'Può ripetere',
      tr:'Daha yavaş tekrar edebilir misiniz?',
      examples:[
        {
          it:'Scusi, non ho capito bene. Può ripetere?',
          tr:'Özür dilerim, iyi anlayamadım. Tekrar edebilir misiniz?',
          bd:[{ro:'non ho capito bene',tr:'iyi anlayamadım'},{ro:'Può ripetere?',tr:'tekrar edebilir misiniz?'}]
        }
      ]
    },
    {
      id:'w12',
      en:'il cellulare / lo smartphone',
      ro:'il cellulare',
      tr:'cep telefonu',
      examples:[
        {
          it:'Il mio cellulare è scarico, ho bisogno di un caricatore.',
          tr:'Telefonum bitti, şarj aleti lazım.',
          bd:[{ro:'Il mio cellulare è scarico',tr:'telefonum bitti'},{ro:'ho bisogno di un caricatore',tr:'şarj aleti lazım'}]
        }
      ]
    },
    {
      id:'w13',
      en:'la connessione internet / il segnale',
      ro:'la connessione',
      tr:'internet bağlantısı / sinyal',
      examples:[
        {
          it:'Qui non c\'è segnale, non riesco a chiamare.',
          tr:'Burada sinyal yok, arayamıyorum.',
          bd:[{ro:'Qui non c\'è segnale',tr:'burada sinyal yok'},{ro:'non riesco a chiamare',tr:'arayamıyorum'}]
        }
      ]
    },
    {
      id:'w14',
      en:'chattare / mandare un voice message',
      ro:'chattare',
      tr:'mesajlaşmak / sesli mesaj atmak',
      examples:[
        {
          it:'Preferiamo chattare su WhatsApp.',
          tr:'WhatsApp\'ta mesajlaşmayı tercih ediyoruz.',
          bd:[{ro:'Preferiamo chattare',tr:'mesajlaşmayı tercih ediyoruz'},{ro:'su WhatsApp',tr:'WhatsApp\'ta'}]
        }
      ]
    },
    {
      id:'w15',
      en:'fare una videochiamata',
      ro:'videochiamata',
      tr:'görüntülü arama yapmak',
      examples:[
        {
          it:'Facciamo una videochiamata domenica?',
          tr:'Pazar günü görüntülü konuşalım mı?',
          bd:[{ro:'Facciamo una videochiamata',tr:'görüntülü konuşalım mı'},{ro:'domenica',tr:'pazar günü'}]
        }
      ]
    },
    {
      id:'w16',
      en:'rispondere / non rispondere',
      ro:'rispondere',
      tr:'cevap vermek / cevap vermemek',
      examples:[
        {
          it:'Ti ho chiamato tre volte ma non hai risposto.',
          tr:'Seni üç kez aradım ama cevap vermedin.',
          bd:[{ro:'Ti ho chiamato tre volte',tr:'seni üç kez aradım'},{ro:'non hai risposto',tr:'cevap vermedin'}]
        }
      ]
    },
    {
      id:'w17',
      en:'il prefisso / il codice del paese',
      ro:'il prefisso',
      tr:'alan kodu / ülke kodu',
      examples:[
        {
          it:'Il prefisso internazionale per l\'Italia è +39.',
          tr:'İtalya\'nın uluslararası alan kodu +39.',
          bd:[{ro:'Il prefisso internazionale',tr:'uluslararası alan kodu'},{ro:'per l\'Italia',tr:'İtalya için'},{ro:'+39',tr:'+39'}]
        }
      ]
    },
    {
      id:'w18',
      en:'È al telefono. / Sta parlando.',
      ro:'È al telefono',
      tr:'Telefonda. / Konuşuyor.',
      examples:[
        {
          it:'Il direttore è al telefono in questo momento.',
          tr:'Müdür şu an telefonda.',
          bd:[{ro:'Il direttore',tr:'müdür'},{ro:'è al telefono',tr:'telefonda'},{ro:'in questo momento',tr:'şu an'}]
        }
      ]
    },
    {
      id:'w19',
      en:'Sono io! / Chi è?',
      ro:'Sono io',
      tr:'Benim! / Kim var?',
      examples:[
        {
          it:'— Chi è? — Sono io, Marco!',
          tr:'— Kim bu? — Benim, Marco!',
          bd:[{ro:'Chi è?',tr:'kim bu?',role:'question'},{ro:'Sono io',tr:'benim',role:'identity'}]
        }
      ]
    },
    {
      id:'w20',
      en:'A presto! / Ci sentiamo!',
      ro:'Ci sentiamo',
      tr:'Görüşürüz! / Konuşuruz!',
      examples:[
        {
          it:'Ok, allora ci sentiamo domani. Ciao!',
          tr:'Tamam, o zaman yarın konuşuruz. Güle güle!',
          bd:[{ro:'ci sentiamo',tr:'konuşuruz (telefonda)'},{ro:'domani',tr:'yarın'},{ro:'Ciao',tr:'hoşça kal'}]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Telefonda Konuşma: Açılış Kalıpları',
      title_en:'Phone Conversation Openers',
      explanation:'"Pronto" sadece telefonda kullanılır. Kendini tanıtmak için "Sono..." veya "Qui parla..." denir. Birini sormak için "Posso parlare con...?" kalıbı kullanılır.',
      table:[
        {pronoun:'Açılış',form:'Pronto, sono...',example:'Pronto, sono Ali Yılmaz.',tr:'Alo, Ben Ali Yılmaz.'},
        {pronoun:'Bağlantı isteği',form:'Posso parlare con...?',example:'Posso parlare con la signora Ferrari?',tr:'Bayan Ferrari ile görüşebilir miyim?'},
        {pronoun:'Kim arıyor?',form:'Chi parla? / Chi è?',example:'Pronto? Chi parla?',tr:'Alo? Kim arıyor?'},
        {pronoun:'Bekleme',form:'Un momento / Un attimo',example:'Un attimo, glielo passo.',tr:'Bir saniye, bağlıyorum.'}
      ],
      note:'"Glielo passo" = "bağlıyorum" (lit: onu size veriyorum). "Rimanga in linea" = "hatta kalın".'
    },
    {
      id:'g2',
      title:'Mesaj Kalıpları: Yazılı İletişim',
      title_en:'Text and Written Communication',
      explanation:'İtalyan gençler ve iş dünyasında yaygın yazışma kalıpları.',
      table:[
        {pronoun:'Resmi e-posta',form:'Gentile/Spettabile..., Le scrivo per...',example:'Gentile Dott. Ferrari, Le scrivo per informarla...',tr:'Sayın Dr. Ferrari, sizi bilgilendirmek amacıyla yazıyorum...'},
        {pronoun:'Gayri resmi',form:'Ciao! / Salve!',example:'Ciao Marco! Come stai?',tr:'Merhaba Marco! Nasılsın?'},
        {pronoun:'Sonuç',form:'Cordiali saluti / A presto',example:'Cordiali saluti, Ali',tr:'Saygılarımla, Ali'},
        {pronoun:'WhatsApp',form:'Ti mando / Ti scrivo',example:'Ti mando la foto adesso.',tr:'Fotoğrafı şimdi gönderiyorum.'}
      ],
      note:'"Gentile" (resmi) → "Caro/Cara" (yarı resmi) → "Ciao" (samimi). İş yazışmalarında "Cordiali saluti" veya "Distinti saluti" kullanılır.'
    },
    {
      id:'g3',
      title:'Tekrar Sorma ve Anlama: Dikkat Kalıpları',
      title_en:'Asking for Clarification',
      explanation:'Anlamadığında veya tekrar ettirmek istediğinde kullanılan kibar ifadeler.',
      table:[
        {pronoun:'Tekrar',form:'Può ripetere, per favore?',example:'Non ho capito, può ripetere più lentamente?',tr:'Anlayamadım, daha yavaş tekrar edebilir misiniz?'},
        {pronoun:'Yazım',form:'Come si scrive?',example:'Come si scrive il suo cognome?',tr:'Soyadınız nasıl yazılıyor?'},
        {pronoun:'Onay',form:'Ha detto...?',example:'Ha detto venerdì o sabato?',tr:'Cuma mı dediniz, cumartesi mi?'},
        {pronoun:'Sinyal',form:'Non la sento bene.',example:'Non la sento bene, c\'è interferenza.',tr:'Sizi iyi duyamıyorum, parazit var.'}
      ],
      note:'"La" = sizi (Lei formu). "La sento" = sizi duyuyorum. "Ti sento" = seni duyuyorum (tu formu).'
    }
  ],
  speaking:[
    {id:'sp1',en:'Pronto, sono Ali. Posso parlare con Marco?',tr:'Alo, Ben Ali. Marco ile konuşabilir miyim?',prompt:'Telefon konuşması aç'},
    {id:'sp2',en:'Non posso parlare adesso. Ti richiamo dopo.',tr:'Şu an konuşamıyorum. Sonra ararım.',prompt:'Konuşamadığını söyle'},
    {id:'sp3',en:'Può ripetere più lentamente, per favore?',tr:'Daha yavaş tekrar edebilir misiniz lütfen?',prompt:'Tekrar iste'},
    {id:'sp4',en:'Facciamo una videochiamata stasera?',tr:'Bu akşam görüntülü konuşalım mı?',prompt:'Görüntülü arama teklif et'},
    {id:'sp5',en:'Ti mando subito il messaggio con l\'indirizzo.',tr:'Adresi hemen mesajla gönderiyorum.',prompt:'Mesaj göndereceğini söyle'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Telefon Konuşması',
      title_en:'Phone Conversation',
      lines:[
        {
          speaker:'B',gender:'f',
          en:'Pronto, buongiorno! Ristorante Da Luigi, dica pure.',
          tr:'Alo, günaydın! Da Luigi Restoranı, buyurun.',
          gramNote:'dica pure = buyurun, söyleyin (kibar)',
          bd:[
            {ro:'Pronto',tr:'alo',role:'opener'},
            {ro:'Ristorante Da Luigi',tr:'Da Luigi Restoranı',role:'identification'},
            {ro:'dica pure',tr:'buyurun söyleyin',role:'invitation'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'Buongiorno, vorrei prenotare un tavolo per questa sera.',
          tr:'Günaydın, bu akşam için masa rezervasyonu yapmak istiyorum.',
          bd:[
            {ro:'vorrei prenotare',tr:'rezervasyon yapmak istiyorum',role:'request'},
            {ro:'un tavolo',tr:'bir masa',role:'noun'},
            {ro:'per questa sera',tr:'bu akşam için',role:'time'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'Per quante persone?',
          tr:'Kaç kişi için?',
          bd:[{ro:'Per quante persone?',tr:'kaç kişi için?',role:'question'}]
        },
        {
          speaker:'A',gender:'m',
          en:'Per quattro persone, alle otto di sera.',
          tr:'Dört kişi, akşam sekizde.',
          bd:[
            {ro:'Per quattro persone',tr:'dört kişi için',role:'number'},
            {ro:'alle otto di sera',tr:'akşam sekizde',role:'time'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'Perfetto. A che nome?',
          tr:'Güzel. Hangi isim üzerine?',
          bd:[{ro:'A che nome?',tr:'hangi isim üzerine?',role:'question'}]
        },
        {
          speaker:'A',gender:'m',
          en:'A nome Ali. Come si scrive? A-L-I.',
          tr:'Ali adına. Nasıl yazılır? A-L-I.',
          bd:[
            {ro:'A nome Ali',tr:'Ali adına',role:'name'},
            {ro:'Come si scrive?',tr:'nasıl yazılır?',role:'clarification'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'Perfetto! L\'aspettiamo alle venti. Ci vediamo stasera!',
          tr:'Harika! Sizi yirmide bekliyoruz. Bu akşam görüşürüz!',
          bd:[
            {ro:'L\'aspettiamo',tr:'sizi bekliyoruz',role:'confirmation'},
            {ro:'alle venti',tr:'saat yirmide',role:'time'},
            {ro:'Ci vediamo stasera',tr:'bu akşam görüşürüz',role:'closing'}
          ]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Ciao Sofia! Ti chiamo perché domani non riesco a venire alla festa. Ho un po\' di febbre e mi fa male la gola. Ti mando un messaggio con il regalo virtuale. Ci sentiamo presto! Ciao!',
      tr:'Merhaba Sofia! Yarın partiye gelemeyeceğim için arıyorum. Biraz ateşim var ve boğazım ağrıyor. Sanal hediyeyle bir mesaj gönderiyorum. Yakında konuşuruz! Güle güle!',
      questions:[
        {
          q:'Arayan neden partiye gelemiyor?',
          opts:['İş toplantısı var','Hasta hissediyor','Başka bir daveti var','Ulaşım yok'],
          answer:1,
          tr:'Hasta hissediyor (febbre e mal di gola)'
        },
        {
          q:'Partiye gidemeyen kişi ne gönderecek?',
          opts:['Çiçek','Fiziksel hediye','Sanal hediye','Hiçbir şey'],
          answer:2,
          tr:'Sanal hediye (regalo virtuale)'
        },
        {
          q:'Partinin ne zaman olduğu belirtilmiş?',
          opts:['Bugün','Yarın','Bu hafta sonu','Bilgi verilmemiş'],
          answer:1,
          tr:'Yarın (domani)'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[12] = L12;
