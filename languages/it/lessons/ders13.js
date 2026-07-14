// ders13.js — Italian Lesson 13: Social Life (Sosyal Yaşam)
const L13 = {
  words:[
    {
      id:'w1',
      en:'la festa / il party',
      ro:'la festa',
      tr:'parti / kutlama',
      tip:'"Festa" hem parti hem bayram anlamına gelir.',
      ctx:'Davet ve eğlence konuşmaları.',
      examples:[
        {
          it:'Venerdì sera organizzo una festa a casa mia.',
          tr:'Cuma akşamı evimde bir parti düzenliyorum.',
          bd:[{ro:'Venerdì sera',tr:'cuma akşamı'},{ro:'organizzo una festa',tr:'parti düzenliyorum'},{ro:'a casa mia',tr:'evimde'}]
        }
      ]
    },
    {
      id:'w2',
      en:'il cinema',
      ro:'il cinema',
      tr:'sinema',
      examples:[
        {
          it:'Andiamo al cinema stasera? C\'è un bel film.',
          tr:'Bu akşam sinemaya gidelim mi? Güzel bir film var.',
          bd:[{ro:'Andiamo al cinema',tr:'sinemaya gidelim'},{ro:'C\'è un bel film',tr:'güzel bir film var'}]
        }
      ]
    },
    {
      id:'w3',
      en:'il concerto',
      ro:'il concerto',
      tr:'konser',
      examples:[
        {
          it:'Ho preso i biglietti per il concerto di sabato.',
          tr:'Cumartesi konseri için bilet aldım.',
          bd:[{ro:'Ho preso i biglietti',tr:'bilet aldım'},{ro:'per il concerto di sabato',tr:'cumartesi konseri için'}]
        }
      ]
    },
    {
      id:'w4',
      en:'uscire / uscire con gli amici',
      ro:'uscire',
      tr:'dışarı çıkmak / arkadaşlarla takılmak',
      examples:[
        {
          it:'Di solito esco con gli amici il sabato sera.',
          tr:'Genellikle cumartesi akşamı arkadaşlarımla çıkarım.',
          bd:[{ro:'Di solito',tr:'genellikle'},{ro:'esco con gli amici',tr:'arkadaşlarımla çıkarım'},{ro:'il sabato sera',tr:'cumartesi akşamı'}]
        }
      ]
    },
    {
      id:'w5',
      en:'invitare / l\'invito',
      ro:'invitare',
      tr:'davet etmek / davetiye',
      examples:[
        {
          it:'Ti invito alla mia festa di compleanno!',
          tr:'Seni doğum günü partim için davet ediyorum!',
          bd:[{ro:'Ti invito',tr:'seni davet ediyorum'},{ro:'alla mia festa di compleanno',tr:'doğum günü partim için'}]
        }
      ]
    },
    {
      id:'w6',
      en:'il compleanno / gli auguri',
      ro:'il compleanno',
      tr:'doğum günü / kutlama',
      examples:[
        {
          it:'Tanti auguri di buon compleanno!',
          tr:'İyi ki doğdun! / Doğum günün kutlu olsun!',
          bd:[{ro:'Tanti auguri',tr:'çok kutlama/iyi dilekler'},{ro:'di buon compleanno',tr:'doğum günün kutlu olsun'}]
        }
      ]
    },
    {
      id:'w7',
      en:'il bar / l\'aperitivo',
      ro:'il bar',
      tr:'bar / aperitif saati',
      examples:[
        {
          it:'Ci troviamo al bar per l\'aperitivo alle diciotto.',
          tr:'Akşam altıda aperitif için barda buluşuyoruz.',
          bd:[{ro:'Ci troviamo al bar',tr:'barda buluşuyoruz'},{ro:'per l\'aperitivo',tr:'aperitif için'},{ro:'alle diciotto',tr:'saat on sekizde'}]
        }
      ]
    },
    {
      id:'w8',
      en:'ballare / la discoteca',
      ro:'ballare',
      tr:'dans etmek / gece kulübü',
      examples:[
        {
          it:'Ti piace ballare? Andiamo in discoteca!',
          tr:'Dans etmeyi sever misin? Gece kulübüne gidelim!',
          bd:[{ro:'Ti piace ballare?',tr:'dans etmeyi sever misin?'},{ro:'Andiamo in discoteca',tr:'gece kulübüne gidelim'}]
        }
      ]
    },
    {
      id:'w9',
      en:'fare una passeggiata',
      ro:'una passeggiata',
      tr:'yürüyüşe çıkmak',
      examples:[
        {
          it:'Facciamo una passeggiata in centro dopo cena?',
          tr:'Akşam yemeğinden sonra şehir merkezinde yürüyelim mi?',
          bd:[{ro:'Facciamo una passeggiata',tr:'yürüyelim mi'},{ro:'in centro',tr:'şehir merkezinde'},{ro:'dopo cena',tr:'akşam yemeğinden sonra'}]
        }
      ]
    },
    {
      id:'w10',
      en:'la partita / lo sport',
      ro:'la partita',
      tr:'maç / spor',
      examples:[
        {
          it:'Guardiamo la partita insieme stasera?',
          tr:'Bu akşam birlikte maçı izleyelim mi?',
          bd:[{ro:'Guardiamo la partita',tr:'maçı izleyelim mi'},{ro:'insieme',tr:'birlikte'},{ro:'stasera',tr:'bu akşam'}]
        }
      ]
    },
    {
      id:'w11',
      en:'Ci vediamo! / Ci incontriamo!',
      ro:'Ci vediamo',
      tr:'Görüşürüz! / Buluşuruz!',
      examples:[
        {
          it:'Ci vediamo sabato in piazza alle cinque!',
          tr:'Cumartesi beşte meydanda görüşürüz!',
          bd:[{ro:'Ci vediamo',tr:'görüşürüz'},{ro:'sabato',tr:'cumartesi'},{ro:'in piazza alle cinque',tr:'meydanda beşte'}]
        }
      ]
    },
    {
      id:'w12',
      en:'accettare / rifiutare un invito',
      ro:'accettare',
      tr:'daveti kabul etmek / reddetmek',
      examples:[
        {
          it:'Con piacere, ci vengo volentieri!',
          tr:'Memnuniyetle, seve seve gelirim!',
          bd:[{ro:'Con piacere',tr:'memnuniyetle'},{ro:'ci vengo volentieri',tr:'seve seve gelirim'}]
        }
      ]
    },
    {
      id:'w13',
      en:'mi dispiace, non posso',
      ro:'mi dispiace',
      tr:'üzgünüm, gelemem',
      examples:[
        {
          it:'Mi dispiace, sabato non posso. Ho un altro impegno.',
          tr:'Üzgünüm, cumartesi gelemem. Başka bir işim var.',
          bd:[{ro:'Mi dispiace',tr:'üzgünüm'},{ro:'non posso',tr:'gelemem'},{ro:'Ho un altro impegno',tr:'başka bir işim var'}]
        }
      ]
    },
    {
      id:'w14',
      en:'il museo / la galleria d\'arte',
      ro:'il museo',
      tr:'müze / sanat galerisi',
      examples:[
        {
          it:'Domenica visito il museo degli Uffizi.',
          tr:'Pazar günü Uffizi müzesini ziyaret ediyorum.',
          bd:[{ro:'Domenica',tr:'pazar günü'},{ro:'visito',tr:'ziyaret ediyorum'},{ro:'il museo degli Uffizi',tr:'Uffizi müzesi'}]
        }
      ]
    },
    {
      id:'w15',
      en:'il teatro / lo spettacolo',
      ro:'il teatro',
      tr:'tiyatro / gösteri',
      examples:[
        {
          it:'Stasera c\'è uno spettacolo al teatro.',
          tr:'Bu akşam tiyatroda bir gösteri var.',
          bd:[{ro:'Stasera c\'è',tr:'bu akşam var'},{ro:'uno spettacolo',tr:'bir gösteri'},{ro:'al teatro',tr:'tiyatroda'}]
        }
      ]
    },
    {
      id:'w16',
      en:'fare un picnic',
      ro:'un picnic',
      tr:'piknik yapmak',
      examples:[
        {
          it:'Se fa bel tempo, facciamo un picnic al parco.',
          tr:'Hava güzel olursa, parkta piknik yapalım.',
          bd:[{ro:'Se fa bel tempo',tr:'hava güzel olursa'},{ro:'facciamo un picnic',tr:'piknik yapalım'},{ro:'al parco',tr:'parkta'}]
        }
      ]
    },
    {
      id:'w17',
      en:'fare un brindisi / cin cin!',
      ro:'cin cin',
      tr:'kadeh kaldırmak / şerefe!',
      examples:[
        {
          it:'Facciamo un brindisi! Cin cin! Salute!',
          tr:'Kadeh kaldıralım! Şerefe! Sağlığına!',
          bd:[{ro:'Facciamo un brindisi',tr:'kadeh kaldıralım'},{ro:'Cin cin / Salute',tr:'şerefe / sağlığınıza'}]
        }
      ]
    },
    {
      id:'w18',
      en:'divertirsi / divertente',
      ro:'divertirsi',
      tr:'eğlenmek / eğlenceli',
      examples:[
        {
          it:'Ci siamo divertiti tantissimo alla festa!',
          tr:'Partide çok eğlendik!',
          bd:[{ro:'Ci siamo divertiti',tr:'eğlendik'},{ro:'tantissimo',tr:'çok fazla'},{ro:'alla festa',tr:'partide'}]
        }
      ]
    },
    {
      id:'w19',
      en:'che ne pensi di...? / ti va di...?',
      ro:'ti va di',
      tr:'... ne düşünüyorsun? / ... ister misin?',
      examples:[
        {
          it:'Ti va di prendere un caffè insieme?',
          tr:'Birlikte kahve içmek ister misin?',
          bd:[{ro:'Ti va di',tr:'ister misin / ne dersin'},{ro:'prendere un caffè',tr:'kahve içmek'},{ro:'insieme',tr:'birlikte'}]
        }
      ]
    },
    {
      id:'w20',
      en:'che bella serata! / mi sono divertito!',
      ro:'che bella serata',
      tr:'ne güzel bir akşam! / çok eğlendim!',
      examples:[
        {
          it:'Che bella serata! Mi sono divertito tantissimo, grazie!',
          tr:'Ne güzel bir akşam! Çok eğlendim, teşekkürler!',
          bd:[{ro:'Che bella serata',tr:'ne güzel akşam'},{ro:'Mi sono divertito tantissimo',tr:'çok eğlendim'},{ro:'grazie',tr:'teşekkürler'}]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Davet Etme ve Kabul/Red: Ti va di...?',
      title_en:'Inviting and Responding',
      explanation:'"Ti va di...?" = "... ister misin?" (arkadaşça). "Le va di...?" = kibar form. Kabul için "Con piacere / Volentieri", red için "Mi dispiace, non posso".',
      table:[
        {pronoun:'Davet (arkadaş)',form:'Ti va di + infinitif?',example:'Ti va di venire al cinema?',tr:'Sinemaya gelir misin?'},
        {pronoun:'Davet (kibar)',form:'Le va di...?',example:'Le va di prendere un caffè?',tr:'Kahve içer misiniz?'},
        {pronoun:'Kabul',form:'Con piacere! / Volentieri! / Certo!',example:'Sì, volentieri! A che ora?',tr:'Evet, seve seve! Saat kaçta?'},
        {pronoun:'Red',form:'Mi dispiace, non posso.',example:'Purtroppo non posso, ho un impegno.',tr:'Üzgünüm yapamam, bir işim var.'}
      ],
      note:'"Ti va di" + infinitive. "Andiamo al...?" da davet ifadesidir: "Andiamo al cinema?" (sinemaya gidelim mi?)'
    },
    {
      id:'g2',
      title:'Önerme: "Perché non...?" ve "E se...?"',
      title_en:'Making Suggestions',
      explanation:'Bir şey önermek için çeşitli yapılar kullanılır.',
      table:[
        {pronoun:'Önerme 1',form:'Perché non + present?',example:'Perché non andiamo al parco?',tr:'Parka gitseydik olmaz mıydı?'},
        {pronoun:'Önerme 2',form:'E se + imperfetto?',example:'E se andassimo al mare?',tr:'Denize gitsek?'},
        {pronoun:'Önerme 3',form:'Che ne dici di + inf?',example:'Che ne dici di mangiare una pizza?',tr:'Pizza yesek ne dersin?'},
        {pronoun:'Önerme 4',form:'(Noi) + present (1. çoğul)',example:'Facciamo una gita in campagna!',tr:'Kıra gezi yapalım!'}
      ],
      note:'"Facciamo..." (yapma fiiliyle) = en doğal ve yaygın öneri formu. "Andiamo..." da çok yaygın.'
    },
    {
      id:'g3',
      title:'Sosyal Kalıplar: Toasts ve Kutlamalar',
      title_en:'Social Phrases: Toasts and Celebrations',
      explanation:'İtalyan sosyal yaşamında sık kullanılan kalıplar.',
      table:[
        {pronoun:'Kadeh',form:'Cin cin! / Salute!',example:'Facciamo un brindisi! Cin cin!',tr:'Şerefe! / Sağlığınıza!'},
        {pronoun:'Doğum günü',form:'Tanti auguri! / Buon compleanno!',example:'Tanti auguri e che tu possa festeggiarne molti altri!',tr:'İyi ki doğdun ve daha nicelerini kutlayasın!'},
        {pronoun:'Yeni yıl',form:'Buon anno! / Felice Anno Nuovo!',example:'Buon anno e buona fortuna!',tr:'İyi yıllar ve iyi şanslar!'},
        {pronoun:'Başarı',form:'In bocca al lupo! / Crepi!',example:'In bocca al lupo per l\'esame! — Crepi!',tr:'İyi şanslar sınavında! — Sağ ol!'}
      ],
      note:'"Auguri" = çok amaçlı kutlama. "Tanti auguri" = doğum günü, düğün, başarı gibi her durumda kullanılabilir.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Ti va di uscire stasera?',tr:'Bu akşam dışarı çıkmak ister misin?',prompt:'Arkadaşını davet et'},
    {id:'sp2',en:'Con piacere! A che ora ci troviamo?',tr:'Memnuniyetle! Saat kaçta buluşuruz?',prompt:'Daveti kabul et'},
    {id:'sp3',en:'Mi dispiace, stasera non posso.',tr:'Üzgünüm, bu akşam yapamam.',prompt:'Daveti kibarca reddet'},
    {id:'sp4',en:'Andiamo al cinema, poi prendiamo un gelato!',tr:'Sinemaya gidelim, sonra dondurma yiyelim!',prompt:'Plan öner'},
    {id:'sp5',en:'Che bella serata! Ci vediamo presto!',tr:'Ne güzel bir akşam! Yakında görüşürüz!',prompt:'Akşam sonunda veda et'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Haftasonu Planı',
      title_en:'Weekend Plans',
      lines:[
        {
          speaker:'A',gender:'m',
          en:'Ciao Giulia! Ti va di fare qualcosa sabato?',
          tr:'Merhaba Giulia! Cumartesi bir şey yapmak ister misin?',
          bd:[
            {ro:'Ti va di fare qualcosa',tr:'bir şey yapmak ister misin',role:'invitation'},
            {ro:'sabato',tr:'cumartesi',role:'time'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'Certo! Che hai in mente?',
          tr:'Tabii! Ne düşünüyorsun?',
          bd:[
            {ro:'Certo',tr:'tabii',role:'acceptance'},
            {ro:'Che hai in mente?',tr:'ne düşünüyorsun?',role:'question'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'Ho sentito che c\'è un bel concerto in piazza sabato sera. Poi possiamo andare a mangiare una pizza.',
          tr:'Cumartesi akşamı meydanda güzel bir konser olduğunu duydum. Sonra pizza yemeye gidebiliriz.',
          bd:[
            {ro:'Ho sentito che',tr:'duydum ki',role:'hearsay'},
            {ro:'c\'è un bel concerto',tr:'güzel bir konser var',role:'event'},
            {ro:'poi possiamo',tr:'sonra yapabiliriz',role:'plan'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'Ottima idea! A che ora comincia il concerto?',
          tr:'Harika bir fikir! Konser saat kaçta başlıyor?',
          bd:[
            {ro:'Ottima idea!',tr:'harika fikir!',role:'enthusiasm'},
            {ro:'A che ora comincia?',tr:'saat kaçta başlıyor?',role:'question'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'Alle nove. Ci troviamo in piazza alle otto e mezza?',
          tr:'Saat dokuzda. Meydanda sekiz buçukta buluşalım mı?',
          bd:[
            {ro:'Alle nove',tr:'saat dokuzda',role:'time'},
            {ro:'Ci troviamo in piazza',tr:'meydanda buluşalım',role:'meeting'},
            {ro:'alle otto e mezza',tr:'sekiz buçukta',role:'time'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'Perfetto! Non vedo l\'ora! Ci vediamo sabato.',
          tr:'Mükemmel! Sabırsızlanıyorum! Cumartesi görüşürüz.',
          bd:[
            {ro:'Non vedo l\'ora!',tr:'sabırsızlanıyorum!',role:'excitement',note:'lit: saatini göremiyorum'},
            {ro:'Ci vediamo sabato',tr:'cumartesi görüşürüz',role:'closing'}
          ]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Ragazzi, sabato sera faccio una festa a casa mia per il mio compleanno! Vi invito tutti! Si inizia alle otto e mezza. Portate qualcosa da bere o da mangiare. Ci sarà musica e balli. Non mancate!',
      tr:'Çocuklar, cumartesi akşamı doğum günüm için evimde parti yapıyorum! Hepinizi davet ediyorum! Sekiz buçukta başlıyor. İçecek veya yiyecek bir şey getirin. Müzik ve dans olacak. Gelmeyin kalmayın!',
      questions:[
        {
          q:'Parti ne için düzenleniyor?',
          opts:['Mezuniyet','Doğum günü','Yeni yıl','İş kutlaması'],
          answer:1,
          tr:'Doğum günü (compleanno)'
        },
        {
          q:'Parti saat kaçta başlıyor?',
          opts:['Sekiz','Sekiz buçuk','Dokuz','Dokuz buçuk'],
          answer:1,
          tr:'Sekiz buçukta (alle otto e mezza)'
        },
        {
          q:'Gelen misafirlerden ne getirmeleri isteniyor?',
          opts:['Hediye','İçecek veya yiyecek','Çiçek','Para'],
          answer:1,
          tr:'İçecek veya yiyecek (da bere o da mangiare)'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[13] = L13;
