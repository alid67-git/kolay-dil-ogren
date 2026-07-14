// ders15.js — Italian Lesson 15: Education & School (Eğitim ve Okul)
const L15 = {
  words:[
    {
      id:'w1',
      en:'la scuola',
      ro:'la scuola',
      tr:'okul',
      tip:'İlkokuldan liseye kadar her okul.',
      ctx:'Eğitim hakkında konuşulurken.',
      examples:[
        {
          it:'Vado a scuola ogni giorno tranne il sabato.',
          tr:'Her gün okula gidiyorum, cumartesi hariç.',
          bd:[{ro:'Vado a scuola',tr:'okula gidiyorum'},{ro:'ogni giorno',tr:'her gün'},{ro:'tranne il sabato',tr:'cumartesi hariç'}]
        }
      ]
    },
    {
      id:'w2',
      en:'l\'università / la facoltà',
      ro:'l\'università',
      tr:'üniversite / fakülte',
      examples:[
        {
          it:'Studio all\'università di Bologna.',
          tr:'Bologna Üniversitesi\'nde okuyorum.',
          bd:[{ro:'Studio',tr:'okuyorum / çalışıyorum'},{ro:'all\'università di Bologna',tr:'Bologna Üniversitesi\'nde'}]
        }
      ]
    },
    {
      id:'w3',
      en:'il professore / la professoressa',
      ro:'il professore',
      tr:'öğretmen / profesör',
      examples:[
        {
          it:'Il professore di matematica spiega molto bene.',
          tr:'Matematik öğretmeni çok iyi anlatıyor.',
          bd:[{ro:'Il professore di matematica',tr:'matematik öğretmeni'},{ro:'spiega molto bene',tr:'çok iyi anlatıyor'}]
        }
      ]
    },
    {
      id:'w4',
      en:'lo studente / la studentessa',
      ro:'lo studente',
      tr:'öğrenci',
      examples:[
        {
          it:'Sono uno studente di lingue straniere.',
          tr:'Yabancı diller öğrencisiyim.',
          bd:[{ro:'Sono uno studente di',tr:'... öğrencisiyim'},{ro:'lingue straniere',tr:'yabancı diller'}]
        }
      ]
    },
    {
      id:'w5',
      en:'studiare / lo studio',
      ro:'studiare',
      tr:'çalışmak / ders çalışmak',
      examples:[
        {
          it:'Studio italiano da sei mesi.',
          tr:'Altı aydır İtalyanca çalışıyorum.',
          bd:[{ro:'Studio italiano',tr:'İtalyanca çalışıyorum'},{ro:'da sei mesi',tr:'altı aydır'}]
        }
      ]
    },
    {
      id:'w6',
      en:'l\'esame / l\'interrogazione',
      ro:'l\'esame',
      tr:'sınav / sözlü sınav',
      examples:[
        {
          it:'Domani ho l\'esame di storia, devo studiare!',
          tr:'Yarın tarih sınavım var, çalışmam gerekiyor!',
          bd:[{ro:'Domani ho l\'esame di storia',tr:'yarın tarih sınavım var'},{ro:'devo studiare',tr:'çalışmam gerekiyor'}]
        }
      ]
    },
    {
      id:'w7',
      en:'il voto / la valutazione',
      ro:'il voto',
      tr:'not / değerlendirme',
      examples:[
        {
          it:'Ho preso trenta e lode all\'esame!',
          tr:'Sınavdan 30 tam puan aldım! (En yüksek)',
          bd:[{ro:'Ho preso',tr:'aldım'},{ro:'trenta e lode',tr:'30 tam not (İtalya\'da max)'}]
        }
      ]
    },
    {
      id:'w8',
      en:'la classe / l\'aula',
      ro:'la classe',
      tr:'sınıf (yer)',
      examples:[
        {
          it:'La nostra aula è al primo piano.',
          tr:'Sınıfımız birinci katta.',
          bd:[{ro:'La nostra aula',tr:'sınıfımız'},{ro:'è al primo piano',tr:'birinci katta'}]
        }
      ]
    },
    {
      id:'w9',
      en:'la materia / la disciplina',
      ro:'la materia',
      tr:'ders / konu',
      examples:[
        {
          it:'La mia materia preferita è letteratura italiana.',
          tr:'En sevdiğim ders İtalyan edebiyatı.',
          bd:[{ro:'La mia materia preferita',tr:'en sevdiğim ders'},{ro:'letteratura italiana',tr:'İtalyan edebiyatı'}]
        }
      ]
    },
    {
      id:'w10',
      en:'i compiti / i compiti a casa',
      ro:'i compiti',
      tr:'ödev / ev ödevi',
      examples:[
        {
          it:'Ho tanti compiti oggi, non posso uscire.',
          tr:'Bugün çok ödevim var, çıkamıyorum.',
          bd:[{ro:'Ho tanti compiti',tr:'çok ödevim var'},{ro:'non posso uscire',tr:'çıkamıyorum'}]
        }
      ]
    },
    {
      id:'w11',
      en:'la biblioteca',
      ro:'la biblioteca',
      tr:'kütüphane',
      examples:[
        {
          it:'Vado in biblioteca a studiare per l\'esame.',
          tr:'Sınav için çalışmaya kütüphaneye gidiyorum.',
          bd:[{ro:'Vado in biblioteca',tr:'kütüphaneye gidiyorum'},{ro:'a studiare per l\'esame',tr:'sınav için çalışmak için'}]
        }
      ]
    },
    {
      id:'w12',
      en:'la laurea / la tesi',
      ro:'la laurea',
      tr:'lisans diploması / tez',
      examples:[
        {
          it:'Mi laureo in giugno con una tesi sull\'arte rinascimentale.',
          tr:'Haziranda Rönesans sanatı üzerine bir tezle mezun oluyorum.',
          bd:[{ro:'Mi laureo in giugno',tr:'haziranda mezun oluyorum'},{ro:'con una tesi',tr:'bir tezle'},{ro:'sull\'arte rinascimentale',tr:'Rönesans sanatı üzerine'}]
        }
      ]
    },
    {
      id:'w13',
      en:'iscriversi / l\'iscrizione',
      ro:'iscriversi',
      tr:'kayıt yaptırmak / kayıt',
      examples:[
        {
          it:'Mi sono iscritto al corso di italiano.',
          tr:'İtalyanca kursuna kayıt yaptırdım.',
          bd:[{ro:'Mi sono iscritto',tr:'kayıt yaptırdım'},{ro:'al corso di italiano',tr:'İtalyanca kursuna'}]
        }
      ]
    },
    {
      id:'w14',
      en:'la borsa di studio / la borsa',
      ro:'la borsa di studio',
      tr:'burs',
      examples:[
        {
          it:'Ho vinto una borsa di studio Erasmus.',
          tr:'Erasmus bursu kazandım.',
          bd:[{ro:'Ho vinto',tr:'kazandım'},{ro:'una borsa di studio Erasmus',tr:'Erasmus bursu'}]
        }
      ]
    },
    {
      id:'w15',
      en:'bocciato / promosso',
      ro:'bocciato',
      tr:'kalan / geçen (sınav)',
      examples:[
        {
          it:'Ho passato tutti gli esami! Non sono stato bocciato.',
          tr:'Tüm sınavları geçtim! Hiçbirinden kalmadım.',
          bd:[{ro:'Ho passato tutti gli esami',tr:'tüm sınavları geçtim'},{ro:'Non sono stato bocciato',tr:'kalmadım'}]
        }
      ]
    },
    {
      id:'w16',
      en:'il liceo / il liceo scientifico',
      ro:'il liceo',
      tr:'lise / fen lisesi',
      examples:[
        {
          it:'Ho frequentato il liceo scientifico a Milano.',
          tr:'Milano\'da fen lisesine gittim.',
          bd:[{ro:'Ho frequentato',tr:'gittim / devam ettim'},{ro:'il liceo scientifico',tr:'fen lisesi'},{ro:'a Milano',tr:'Milano\'da'}]
        }
      ]
    },
    {
      id:'w17',
      en:'ripetere / ripassare',
      ro:'ripetere',
      tr:'tekrar etmek / tekrar çalışmak',
      examples:[
        {
          it:'Devo ripassare tutti i verbi irregolari.',
          tr:'Tüm düzensiz fiilleri tekrar etmem gerekiyor.',
          bd:[{ro:'Devo ripassare',tr:'tekrar etmem gerekiyor'},{ro:'tutti i verbi irregolari',tr:'tüm düzensiz fiiller'}]
        }
      ]
    },
    {
      id:'w18',
      en:'la ricerca / la tesina',
      ro:'la ricerca',
      tr:'araştırma / küçük tez',
      examples:[
        {
          it:'Sto facendo una ricerca sulla cultura italiana.',
          tr:'İtalyan kültürü üzerine araştırma yapıyorum.',
          bd:[{ro:'Sto facendo una ricerca',tr:'araştırma yapıyorum'},{ro:'sulla cultura italiana',tr:'İtalyan kültürü üzerine'}]
        }
      ]
    },
    {
      id:'w19',
      en:'Che materia studi?',
      ro:'Che materia studi?',
      tr:'Ne okuyorsun? / Hangi ders?',
      examples:[
        {
          it:'Che cosa studi all\'università?',
          tr:'Üniversitede ne okuyorsun?',
          bd:[{ro:'Che cosa studi',tr:'ne okuyorsun'},{ro:'all\'università',tr:'üniversitede'}]
        }
      ]
    },
    {
      id:'w20',
      en:'In bocca al lupo per l\'esame!',
      ro:'In bocca al lupo',
      tr:'Sınav için iyi şanslar!',
      examples:[
        {
          it:'— Domani ho l\'esame! — In bocca al lupo! — Crepi!',
          tr:'— Yarın sınavım var! — İyi şanslar! — Sağ ol!',
          bd:[{ro:'In bocca al lupo',tr:'iyi şanslar',role:'idiom'},{ro:'Crepi!',tr:'sağ ol (yanıt)',role:'response'}]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'İtalyan Eğitim Sistemi',
      title_en:'Italian School System',
      explanation:'İtalya\'da eğitim sistemi şu şekilde işler: scuola primaria (ilkokul, 6-11), scuola media (ortaokul, 11-14), liceo/istituto tecnico (lise, 14-19), università (üniversite).',
      table:[
        {pronoun:'İlkokul',form:'la scuola primaria / elementare',example:'Ho frequentato la scuola elementare a Roma.',tr:'İlkokulu Roma\'da okudum.'},
        {pronoun:'Ortaokul',form:'la scuola media',example:'La scuola media dura tre anni.',tr:'Ortaokul üç yıl sürer.'},
        {pronoun:'Lise',form:'il liceo / l\'istituto tecnico',example:'Studio al liceo linguistico.',tr:'Dil lisesinde okuyorum.'},
        {pronoun:'Üniversite',form:'l\'università / la facoltà di...',example:'Studio alla Facoltà di Medicina.',tr:'Tıp Fakültesi\'nde okuyorum.'}
      ],
      note:'İtalya\'da not sistemi 0-10 (okul) veya 0-30 (üniversite). "30 e lode" = tam puan + övgü (en yüksek). "18" = üniversitede geçme notu.'
    },
    {
      id:'g2',
      title:'Ders Çalışma Fiilleri',
      title_en:'Study Verbs',
      explanation:'Eğitim ve öğrenimle ilgili en önemli fiiller.',
      table:[
        {pronoun:'studiare',form:'studio / studi / studia',example:'Quanto ore studi al giorno?',tr:'Günde kaç saat ders çalışıyorsun?'},
        {pronoun:'imparare',form:'imparo / impari / impara',example:'Sto imparando l\'italiano.',tr:'İtalyanca öğreniyorum.'},
        {pronoun:'capire',form:'capisco / capisci / capisce',example:'Non capisco questa regola.',tr:'Bu kuralı anlamıyorum.'},
        {pronoun:'spiegare',form:'spiego / spieghi / spiega',example:'Può spiegare ancora?',tr:'Tekrar açıklayabilir misiniz?'}
      ],
      note:'"Capire" -isco fiili: capisco, capisci, capisce, capiamo, capite, capiscono. "Finire", "preferire" de aynı şekilde çekimlenir.'
    },
    {
      id:'g3',
      title:'Sınıfta Kullanılan İfadeler',
      title_en:'Classroom Language',
      explanation:'Derste öğretmene veya arkadaşlara söylenebilecek yaygın ifadeler.',
      table:[
        {pronoun:'Anlamak',form:'Non capisco. / Può ripetere?',example:'Scusi, non ho capito. Può spiegare?',tr:'Özür dilerim, anlamadım. Açıklayabilir misiniz?'},
        {pronoun:'Soru',form:'Ho una domanda.',example:'Professore, ho una domanda.',tr:'Hocam, bir sorum var.'},
        {pronoun:'Yavaş',form:'Più lentamente, per favore.',example:'Parla troppo veloce, più lentamente.',tr:'Çok hızlı konuşuyor, daha yavaş.'},
        {pronoun:'Çeviri',form:'Come si dice... in italiano?',example:'Come si dice "homework" in italiano?',tr:'"Homework" İtalyanca\'da nasıl denir?'}
      ],
      note:'"Scusi / Scusa" (özür), "per favore" (lütfen) eklemek ifadeyi daha kibarca yapar. Sınıfta resmi hitap için "Lei" formu kullan.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Studio italiano all\'università.',tr:'Üniversitede İtalyanca okuyorum.',prompt:'Eğitimini tanıt'},
    {id:'sp2',en:'La mia materia preferita è la storia dell\'arte.',tr:'En sevdiğim ders sanat tarihi.',prompt:'Favori dersin söyle'},
    {id:'sp3',en:'Ho un esame domani, devo studiare.',tr:'Yarın sınavım var, çalışmam gerekiyor.',prompt:'Sınav hazırlığı hakkında konuş'},
    {id:'sp4',en:'Non capisco, può ripetere più lentamente?',tr:'Anlamadım, daha yavaş tekrar edebilir misiniz?',prompt:'Sınıfta açıklama iste'},
    {id:'sp5',en:'In bocca al lupo per l\'esame!',tr:'Sınav için iyi şanslar!',prompt:'Arkadaşını cesaretlendir'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Sınav Öncesi',
      title_en:'Before the Exam',
      lines:[
        {
          speaker:'A',gender:'m',
          en:'Ciao! Sei pronto per l\'esame di domani?',
          tr:'Merhaba! Yarınki sınava hazır mısın?',
          bd:[
            {ro:'Sei pronto per',tr:'hazır mısın',role:'question'},
            {ro:'l\'esame di domani',tr:'yarınki sınav',role:'noun'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'Non molto... Ho studiato tutta la settimana ma ci sono ancora alcune cose che non capisco.',
          tr:'Pek değil... Tüm hafta çalıştım ama hâlâ anlamadığım bazı şeyler var.',
          bd:[
            {ro:'Ho studiato tutta la settimana',tr:'tüm hafta çalıştım',role:'verb'},
            {ro:'alcune cose che non capisco',tr:'anlamadığım bazı şeyler',role:'issue'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'Cosa non capisci? Posso aiutarti.',
          tr:'Neyi anlamıyorsun? Yardım edebilirim.',
          bd:[
            {ro:'Cosa non capisci?',tr:'neyi anlamıyorsun?',role:'question'},
            {ro:'Posso aiutarti',tr:'yardım edebilirim',role:'offer'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'I verbi al congiuntivo. Non riesco a ricordare le forme.',
          tr:'Congiuntivo\'daki fiiller. Formları hatırlayamıyorum.',
          bd:[
            {ro:'I verbi al congiuntivo',tr:'congiuntivo\'daki fiiller',role:'topic'},
            {ro:'Non riesco a ricordare',tr:'hatırlayamıyorum',role:'problem'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'Dai, ti spiego! Studiamo insieme in biblioteca.',
          tr:'Hadi, açıklayayım! Kütüphanede birlikte çalışalım.',
          bd:[
            {ro:'Dai',tr:'hadi',role:'encouragement'},
            {ro:'ti spiego',tr:'açıklayayım',role:'offer'},
            {ro:'Studiamo insieme',tr:'birlikte çalışalım',role:'suggestion'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'Grazie mille! In bocca al lupo a tutti e due!',
          tr:'Çok teşekkürler! İkimize de iyi şanslar!',
          bd:[
            {ro:'Grazie mille',tr:'çok teşekkürler',role:'thanks'},
            {ro:'In bocca al lupo a tutti e due',tr:'ikimize de iyi şanslar',role:'wish'}
          ]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Buongiorno a tutti. Sono la vostra nuova professoressa di italiano, mi chiamo Maria Bianchi. Questo corso dura tre mesi, con lezioni tre volte a settimana. Alla fine del corso ci sarà un esame scritto e uno orale. Per superare l\'esame bisogna ottenere almeno diciotto su trenta.',
      tr:'Herkese günaydın. Ben yeni İtalyanca öğretmeninizim, adım Maria Bianchi. Bu kurs üç ay sürecek, haftada üç ders olacak. Kursun sonunda yazılı ve sözlü sınav yapılacak. Sınavı geçmek için otuz üzerinden en az on sekiz almak gerekiyor.',
      questions:[
        {
          q:'Öğretmenin adı nedir?',
          opts:['Maria Ferrari','Maria Rossi','Maria Bianchi','Maria Conti'],
          answer:2,
          tr:'Maria Bianchi'
        },
        {
          q:'Kurs ne kadar sürecek?',
          opts:['Bir ay','İki ay','Üç ay','Altı ay'],
          answer:2,
          tr:'Üç ay (tre mesi)'
        },
        {
          q:'Sınavı geçmek için minimum kaç puan gerekiyor?',
          opts:['On beş','On altı','On yedi','On sekiz'],
          answer:3,
          tr:'On sekiz (diciotto su trenta)'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[15] = L15;
