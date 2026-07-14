// ders11.js — Italian Lesson 11: Health (Sağlık)
const L11 = {
  words:[
    {
      id:'w1',
      en:'il medico / il dottore',
      ro:'il medico',
      tr:'doktor / hekim',
      tip:'"Medico" = tıp doktoru; "dottore" daha genel.',
      ctx:'Sağlık sorunlarında kullanılır.',
      examples:[
        {
          it:'Ho bisogno di vedere un medico.',
          tr:'Bir doktor görmem gerekiyor.',
          bd:[{ro:'Ho bisogno di vedere',tr:'görmem gerekiyor'},{ro:'un medico',tr:'bir doktor'}]
        }
      ]
    },
    {
      id:'w2',
      en:'l\'ospedale',
      ro:'l\'ospedale',
      tr:'hastane',
      examples:[
        {
          it:'Mi portate all\'ospedale, per favore!',
          tr:'Lütfen beni hastaneye götürün!',
          bd:[{ro:'Mi portate',tr:'götürün (beni)'},{ro:'all\'ospedale',tr:'hastaneye'},{ro:'per favore',tr:'lütfen'}]
        }
      ]
    },
    {
      id:'w3',
      en:'la farmacia',
      ro:'la farmacia',
      tr:'eczane',
      examples:[
        {
          it:'Dov\'è la farmacia più vicina?',
          tr:'En yakın eczane nerede?',
          bd:[{ro:'Dov\'è',tr:'nerede'},{ro:'la farmacia',tr:'eczane'},{ro:'più vicina',tr:'en yakın'}]
        }
      ]
    },
    {
      id:'w4',
      en:'malato / malata',
      ro:'malato',
      tr:'hasta (sıfat)',
      examples:[
        {
          it:'Mi sento malato, non vengo a scuola.',
          tr:'Kendimi hasta hissediyorum, okula gelmiyorum.',
          bd:[{ro:'Mi sento malato',tr:'hasta hissediyorum'},{ro:'non vengo a scuola',tr:'okula gelmiyorum'}]
        }
      ]
    },
    {
      id:'w5',
      en:'Mi fa male...',
      ro:'Mi fa male',
      tr:'... ağrıyor',
      examples:[
        {
          it:'Mi fa male la testa.',
          tr:'Başım ağrıyor.',
          bd:[{ro:'Mi fa male',tr:'ağrıyor'},{ro:'la testa',tr:'başım'}]
        },
        {
          it:'Mi fanno male i piedi.',
          tr:'Ayaklarım ağrıyor.',
          bd:[{ro:'Mi fanno male',tr:'ağrıyor (çoğul)'},{ro:'i piedi',tr:'ayaklarım'}]
        }
      ]
    },
    {
      id:'w6',
      en:'la febbre',
      ro:'la febbre',
      tr:'ateş',
      examples:[
        {
          it:'Ho la febbre a trentotto e mezzo.',
          tr:'Otuz sekiz buçuk ateşim var.',
          bd:[{ro:'Ho la febbre a',tr:'ateşim var'},{ro:'trentotto e mezzo',tr:'otuz sekiz buçuk'}]
        }
      ]
    },
    {
      id:'w7',
      en:'la tosse',
      ro:'la tosse',
      tr:'öksürük',
      examples:[
        {
          it:'Ho la tosse da tre giorni.',
          tr:'Üç günden beri öksürüğüm var.',
          bd:[{ro:'Ho la tosse',tr:'öksürüğüm var'},{ro:'da tre giorni',tr:'üç günden beri'}]
        }
      ]
    },
    {
      id:'w8',
      en:'il raffreddore',
      ro:'il raffreddore',
      tr:'soğuk algınlığı',
      examples:[
        {
          it:'Ho preso il raffreddore sotto la pioggia.',
          tr:'Yağmur altında soğuk algınlığı kaptım.',
          bd:[{ro:'Ho preso il raffreddore',tr:'soğuk algınlığı kaptım'},{ro:'sotto la pioggia',tr:'yağmur altında'}]
        }
      ]
    },
    {
      id:'w9',
      en:'la medicina / il medicinale',
      ro:'la medicina',
      tr:'ilaç',
      examples:[
        {
          it:'Devo prendere questa medicina tre volte al giorno.',
          tr:'Bu ilacı günde üç kez almalıyım.',
          bd:[{ro:'Devo prendere',tr:'almalıyım'},{ro:'questa medicina',tr:'bu ilacı'},{ro:'tre volte al giorno',tr:'günde üç kez'}]
        }
      ]
    },
    {
      id:'w10',
      en:'l\'appuntamento dal medico',
      ro:'l\'appuntamento',
      tr:'doktor randevusu',
      examples:[
        {
          it:'Devo prendere un appuntamento dal medico.',
          tr:'Doktordan randevu almam gerekiyor.',
          bd:[{ro:'Devo prendere',tr:'almam gerekiyor'},{ro:'un appuntamento',tr:'bir randevu'},{ro:'dal medico',tr:'doktordan'}]
        }
      ]
    },
    {
      id:'w11',
      en:'la ricetta medica',
      ro:'la ricetta',
      tr:'reçete',
      examples:[
        {
          it:'Ho bisogno della ricetta per questo farmaco.',
          tr:'Bu ilaç için reçeteye ihtiyacım var.',
          bd:[{ro:'Ho bisogno della ricetta',tr:'reçeteye ihtiyacım var'},{ro:'per questo farmaco',tr:'bu ilaç için'}]
        }
      ]
    },
    {
      id:'w12',
      en:'l\'allergia',
      ro:'l\'allergia',
      tr:'alerji',
      examples:[
        {
          it:'Sono allergico alla penicillina.',
          tr:'Penisiline alerjim var.',
          bd:[{ro:'Sono allergico a',tr:'alerjim var'},{ro:'alla penicillina',tr:'penisiline'}]
        }
      ]
    },
    {
      id:'w13',
      en:'il pronto soccorso',
      ro:'il pronto soccorso',
      tr:'acil servis',
      examples:[
        {
          it:'Chiama il pronto soccorso, è urgente!',
          tr:'Acil servisi ara, acil!',
          bd:[{ro:'Chiama',tr:'ara'},{ro:'il pronto soccorso',tr:'acil servis'},{ro:'è urgente',tr:'acil'}]
        }
      ]
    },
    {
      id:'w14',
      en:'lo stomaco / il mal di stomaco',
      ro:'lo stomaco',
      tr:'mide / mide ağrısı',
      examples:[
        {
          it:'Ho mal di stomaco, forse ho mangiato qualcosa di strano.',
          tr:'Mide ağrım var, belki yanlış bir şey yedim.',
          bd:[{ro:'Ho mal di stomaco',tr:'mide ağrım var'},{ro:'forse ho mangiato',tr:'belki yedim'},{ro:'qualcosa di strano',tr:'yanlış bir şey'}]
        }
      ]
    },
    {
      id:'w15',
      en:'riposare / il riposo',
      ro:'riposare',
      tr:'dinlenmek / dinlenme',
      examples:[
        {
          it:'Il medico mi ha detto di riposare due giorni.',
          tr:'Doktor bana iki gün dinlenmemi söyledi.',
          bd:[{ro:'Il medico mi ha detto',tr:'doktor söyledi'},{ro:'di riposare',tr:'dinlenmemi'},{ro:'due giorni',tr:'iki gün'}]
        }
      ]
    },
    {
      id:'w16',
      en:'la pressione del sangue',
      ro:'la pressione',
      tr:'kan basıncı',
      examples:[
        {
          it:'La mia pressione è un po\' alta.',
          tr:'Tansiyonum biraz yüksek.',
          bd:[{ro:'La mia pressione',tr:'tansiyonum'},{ro:'è un po\' alta',tr:'biraz yüksek'}]
        }
      ]
    },
    {
      id:'w17',
      en:'la ferita / il taglio',
      ro:'la ferita',
      tr:'yara / kesik',
      examples:[
        {
          it:'Ho una ferita sul ginocchio, mi sono caduto.',
          tr:'Dizimde yara var, düştüm.',
          bd:[{ro:'Ho una ferita',tr:'yarum var'},{ro:'sul ginocchio',tr:'dizimde'},{ro:'mi sono caduto',tr:'düştüm'}]
        }
      ]
    },
    {
      id:'w18',
      en:'il mal di testa / il mal di schiena',
      ro:'mal di testa',
      tr:'baş ağrısı / sırt ağrısı',
      examples:[
        {
          it:'Ho un terribile mal di testa.',
          tr:'Korkunç bir baş ağrım var.',
          bd:[{ro:'Ho',tr:'var'},{ro:'un terribile',tr:'korkunç bir'},{ro:'mal di testa',tr:'baş ağrısı'}]
        }
      ]
    },
    {
      id:'w19',
      en:'Guarisci presto! / Che tu guarisca!',
      ro:'Guarisci presto',
      tr:'Geçmiş olsun!',
      examples:[
        {
          it:'— Sto male. — Guarisci presto! Prenditi cura di te.',
          tr:'— Hasta hissediyorum. — Geçmiş olsun! Kendine iyi bak.',
          bd:[{ro:'Guarisci presto',tr:'geçmiş olsun',role:'wish'},{ro:'Prenditi cura di te',tr:'kendine iyi bak',role:'care'}]
        }
      ]
    },
    {
      id:'w20',
      en:'Chiama il 118!',
      ro:'Chiama il 118',
      tr:'118\'i ara! (İtalya acil)',
      examples:[
        {
          it:'Chiama subito il 118, è un\'emergenza!',
          tr:'Hemen 118\'i ara, acil durum!',
          bd:[{ro:'Chiama subito',tr:'hemen ara'},{ro:'il 118',tr:'118 (acil)'},{ro:'è un\'emergenza',tr:'acil durum'}]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Ağrı ve Şikayet: "Mi fa male..." Yapısı',
      title_en:'Expressing Pain: "Mi fa male..."',
      explanation:'"Mi fa male + beyin bölümü" = "... ağrıyor". Tekil için "fa", çoğul için "fanno" kullanılır. Bu yapı İngilizce\'den farklı çalışır!',
      table:[
        {pronoun:'Tekil',form:'Mi fa male + (la/il/l\') + organ',example:'Mi fa male la schiena.',tr:'Sırtım ağrıyor.'},
        {pronoun:'Tekil',form:'Mi fa male...',example:'Mi fa male il dente.',tr:'Dişim ağrıyor.'},
        {pronoun:'Çoğul',form:'Mi fanno male + (i/le/gli) + organlar',example:'Mi fanno male le gambe.',tr:'Bacaklarım ağrıyor.'},
        {pronoun:'Alternatif',form:'Ho dolore a...',example:'Ho dolore alla spalla.',tr:'Omzum ağrıyor.'}
      ],
      note:'"Avere" ile de söylenebilir: "Ho mal di testa" (baş ağrım var), "Ho mal di schiena" (sırt ağrım var), "Ho mal di gola" (boğaz ağrım var).'
    },
    {
      id:'g2',
      title:'Doktorda Sık Kullanılan Kalıplar',
      title_en:'Common Phrases at the Doctor',
      explanation:'Doktor ziyaretinde kullanılan temel ifadeler.',
      table:[
        {pronoun:'Şikayet',form:'Ho... / Sento...',example:'Ho la febbre. / Sento freddo.',tr:'Ateşim var. / Üşüyorum.'},
        {pronoun:'Süre',form:'Da... / Da quanto?',example:'Ho mal di testa da ieri.',tr:'Dünden beri baş ağrım var.'},
        {pronoun:'Alerji',form:'Sono allergico/a a...',example:'Sono allergica al latte.',tr:'Süt alerjim var. (k)'},
        {pronoun:'İlaç',form:'Prendo... / Sto prendendo...',example:'Sto prendendo degli antidolorifici.',tr:'Ağrı kesici kullanıyorum.'}
      ],
      note:'"Da quanto tempo?" = "Ne zamandan beri?" Süre bildirirken "da" + süre: "da tre giorni" (üç günden beri), "da stamattina" (bu sabahtan beri).'
    },
    {
      id:'g3',
      title:'İtalya\'da Sağlık Sistemi: Pratik Bilgiler',
      title_en:'Italian Healthcare: Practical Info',
      explanation:'İtalya\'da sağlık sistemi SSN (Servizio Sanitario Nazionale) adıyla bilinir. Pratik terimler ve acil durum numaraları.',
      table:[
        {pronoun:'Acil',form:'il Pronto Soccorso / 118',example:'Chiama il 118! (ambulans)',tr:'118\'i ara!'},
        {pronoun:'Doktor',form:'il medico di base',example:'Il mio medico di base è il dottor Rossi.',tr:'Benim aile doktorum Dr. Rossi.'},
        {pronoun:'İlaç',form:'la ricetta / senza ricetta',example:'Questo farmaco è senza ricetta.',tr:'Bu ilaç reçetesiz.'},
        {pronoun:'Sigorta',form:'l\'assicurazione sanitaria',example:'Ho l\'assicurazione sanitaria.',tr:'Sağlık sigortam var.'}
      ],
      note:'118 = ambulans/acil, 112 = genel acil (Avrupa geneli). Eczanede "da banco" = reçetesiz; "con ricetta" = reçeteli.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Mi fa male la testa.',tr:'Başım ağrıyor.',prompt:'Ağrını anlat'},
    {id:'sp2',en:'Ho la febbre e la tosse.',tr:'Ateşim ve öksürüğüm var.',prompt:'Belirtileri sırala'},
    {id:'sp3',en:'Sono allergico alla penicillina.',tr:'Penisiline alerjim var.',prompt:'Alerjini söyle'},
    {id:'sp4',en:'Dov\'è la farmacia più vicina?',tr:'En yakın eczane nerede?',prompt:'Eczane sor'},
    {id:'sp5',en:'Ho bisogno di un appuntamento dal medico.',tr:'Doktordan randevu almam gerekiyor.',prompt:'Randevu iste'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Doktorda',
      title_en:'At the Doctor',
      lines:[
        {
          speaker:'B',gender:'f',
          en:'Buongiorno. Cosa le fa male?',
          tr:'Günaydın. Neyiniz ağrıyor?',
          gramNote:'Cosa le fa male? = Lei formu (kibar)',
          bd:[
            {ro:'Cosa le fa male?',tr:'neyiniz ağrıyor?',role:'question',note:'lei formu'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'Dottoressa, mi fa molto male la gola e ho la febbre da ieri sera.',
          tr:'Doktora Hanım, boğazım çok ağrıyor ve dün geceden beri ateşim var.',
          gramNote:'Dottoressa = kadın doktor',
          bd:[
            {ro:'Dottoressa',tr:'doktora hanım',role:'title'},
            {ro:'mi fa molto male la gola',tr:'boğazım çok ağrıyor',role:'complaint'},
            {ro:'ho la febbre da ieri sera',tr:'dün geceden beri ateşim var',role:'duration'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'Quanta febbre ha?',
          tr:'Kaç derece ateşiniz var?',
          bd:[{ro:'Quanta febbre ha?',tr:'kaç derece ateşiniz var?',role:'question'}]
        },
        {
          speaker:'A',gender:'m',
          en:'Trentasette e otto.',
          tr:'Otuz yedi sekiz.',
          bd:[{ro:'Trentasette e otto',tr:'37,8 derece',role:'temperature'}]
        },
        {
          speaker:'B',gender:'f',
          en:'Ha difficoltà a respirare? Ha la tosse?',
          tr:'Nefes almakta güçlük çekiyor musunuz? Öksürüğünüz var mı?',
          bd:[
            {ro:'Ha difficoltà a respirare?',tr:'nefes almakta güçlük mü?',role:'question'},
            {ro:'Ha la tosse?',tr:'öksürük var mı?',role:'question'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'Sì, ho la tosse secca e mi fanno male le orecchie.',
          tr:'Evet, kuru öksürüğüm var ve kulaklarım ağrıyor.',
          bd:[
            {ro:'ho la tosse secca',tr:'kuru öksürüğüm var',role:'symptom'},
            {ro:'mi fanno male le orecchie',tr:'kulaklarım ağrıyor',role:'pain',note:'fanno = çoğul'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'Sembra un\'influenza. Le prescrivo degli antibiotici e uno sciroppo per la tosse. Riposi e beva molti liquidi.',
          tr:'Grip gibi görünüyor. Antibiyotik ve öksürük şurubu yazıyorum. Dinlenin ve bol sıvı tüketin.',
          bd:[
            {ro:'Sembra un\'influenza',tr:'grip gibi görünüyor',role:'diagnosis'},
            {ro:'Le prescrivo',tr:'yazıyorum (size)',role:'prescription'},
            {ro:'degli antibiotici',tr:'antibiyotik',role:'medicine'},
            {ro:'uno sciroppo per la tosse',tr:'öksürük şurubu',role:'medicine'},
            {ro:'Riposi',tr:'dinlenin (kibar emir)',role:'advice'},
            {ro:'beva molti liquidi',tr:'bol sıvı tüketin',role:'advice'}
          ]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Buongiorno, sono Marco Rossi. Ho un appuntamento con il dottor Ferrari alle undici. Ho mal di schiena da una settimana e a volte sento anche un formicolio alle gambe.',
      tr:'Günaydın, Marco Rossi\'yim. Dr. Ferrari ile saat on birde randevum var. Bir haftadan beri sırt ağrım var ve bazen bacaklarımda uyuşma da hissediyorum.',
      questions:[
        {
          q:'Hastanın adı nedir?',
          opts:['Marco Ferrari','Marco Rossi','Dottore Rossi','Ali Marco'],
          answer:1,
          tr:'Marco Rossi'
        },
        {
          q:'Randevu saat kaçta?',
          opts:['Saat onda','Saat on birde','Saat on ikide','Saat dokuzda'],
          answer:1,
          tr:'Saat on birde (alle undici)'
        },
        {
          q:'Ne zamandan beri sırt ağrısı var?',
          opts:['İki günden beri','Üç günden beri','Beş günden beri','Bir haftadan beri'],
          answer:3,
          tr:'Bir haftadan beri (da una settimana)'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[11] = L11;
