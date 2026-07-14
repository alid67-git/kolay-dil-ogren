// ders4.js — Italian Lesson 4: Time & Date (beginner)
const L4 = {
  words:[
    {
      id:'w1',
      en:'Che ore sono?',
      ro:'kay O-re SO-no',
      tr:'Saat kaç?',
      tip:'Saat sorma kalıbı.',
      ctx:'Her durumda kullanılır.',
      examples:[
        {
          en:'Scusi, che ore sono?',
          tr:'Affedersiniz, saat kaç?',
          bd:[
            {ro:'Che ore sono',tr:'Saat kaç',role:'question',note:'Çoğul fiil: sono. 1 için È l\'una.'},
            {ro:'Scusi',tr:'Affedersiniz',role:'courtesy',note:'Resmi yabancıya.'}
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'Sono le tre.',
      ro:'SO-no le tre',
      tr:'Saat üç.',
      tip:'Saat söyleme (2+).',
      ctx:'Saat ifadesi.',
      examples:[
        {
          en:'Sono le tre e mezza.',
          tr:'Saat üç buçuk.',
          bd:[
            {ro:'Sono le tre',tr:'Saat üç',role:'time',note:'2+ için sono le.'},
            {ro:'e mezza',tr:'ve yarım (buçuk)',role:'time',note:'mezza = yarım.'}
          ]
        }
      ]
    },
    {
      id:'w3',
      en:'È l\'una.',
      ro:'e lu-NA',
      tr:'Saat bir.',
      tip:'Sadece saat 1 için "è l\'una".',
      ctx:'Saat 1 ifadesi.',
      examples:[
        {
          en:'È l\'una e un quarto.',
          tr:'Saat bir çeyrek geçiyor.',
          bd:[
            {ro:'È l\'una',tr:'Saat bir',role:'time',note:'1 için è l\'una (tekil).'},
            {ro:'un quarto',tr:'çeyrek',role:'time',note:'quarto = çeyrek.'}
          ]
        }
      ]
    },
    {
      id:'w4',
      en:'la mattina',
      ro:'la mat-TI-na',
      tr:'sabah',
      tip:'Günün bölümleri.',
      ctx:'Sabah saatleri.',
      examples:[
        {
          en:'Lavoro al mattino.',
          tr:'Sabahları çalışıyorum.',
          bd:[
            {ro:'al mattino',tr:'sabahları',role:'time',note:'mattina/mattino — sabah.'}
          ]
        }
      ]
    },
    {
      id:'w5',
      en:'il pomeriggio',
      ro:'il po-me-RID-jo',
      tr:'öğleden sonra',
      tip:'Öğle-akşam arası.',
      ctx:'14:00–18:00 arası.',
      examples:[
        {
          en:'L\'appuntamento è nel pomeriggio.',
          tr:'Randevu öğleden sonra.',
          bd:[
            {ro:'nel pomeriggio',tr:'öğleden sonra',role:'time',note:'nel = in+il (içinde).'}
          ]
        }
      ]
    },
    {
      id:'w6',
      en:'la sera',
      ro:'la SE-ra',
      tr:'akşam',
      tip:'Gece başlamadan akşam.',
      ctx:'18:00+',
      examples:[
        {
          en:'Ci vediamo di sera.',
          tr:'Akşam görüşürüz.',
          bd:[
            {ro:'di sera',tr:'akşam',role:'time',note:'di sera = akşamları.'}
          ]
        }
      ]
    },
    {
      id:'w7',
      en:'oggi',
      ro:'OD-dji',
      tr:'bugün',
      tip:'Zaman zarfı.',
      ctx:'Bugün olacak şeyler.',
      examples:[
        {
          en:'Oggi non ho lezione.',
          tr:'Bugün dersim yok.',
          bd:[
            {ro:'Oggi',tr:'bugün',role:'time',note:'Zaman zarfı, cümle başında.'},
            {ro:'non ho lezione',tr:'dersim yok',role:'V',note:'non ho = -im yok (avere olumsuz).'}
          ]
        }
      ]
    },
    {
      id:'w8',
      en:'domani',
      ro:'do-MA-ni',
      tr:'yarın',
      tip:'Zaman zarfı.',
      ctx:'Planlar için.',
      examples:[
        {
          en:'Domani parto per Roma.',
          tr:'Yarın Roma\'ya gidiyorum.',
          bd:[
            {ro:'Domani',tr:'Yarın',role:'time',note:'Gelecek için kullanılır.'},
            {ro:'parto per',tr:'... için yola çıkıyorum',role:'V',note:'partire fiili.'}
          ]
        }
      ]
    },
    {
      id:'w9',
      en:'ieri',
      ro:'YE-ri',
      tr:'dün',
      tip:'Zaman zarfı — geçmiş.',
      ctx:'Dün olan şeyler.',
      examples:[
        {
          en:'Ieri ho mangiato la pizza.',
          tr:'Dün pizza yedim.',
          bd:[
            {ro:'Ieri',tr:'Dün',role:'time',note:'Geçmiş zaman zarfı.'},
            {ro:'ho mangiato',tr:'yedim',role:'V',note:'passato prossimo: avere + mangiato.'}
          ]
        }
      ]
    },
    {
      id:'w10',
      en:'lunedì',
      ro:'lu-ne-DI',
      tr:'Pazartesi',
      tip:'Haftanın ilk günü. Küçük harf!',
      ctx:'Günlük plan.',
      examples:[
        {
          en:'Lunedì ho una riunione.',
          tr:'Pazartesi toplantım var.',
          bd:[
            {ro:'Lunedì',tr:'Pazartesi',role:'day',note:'İtalyancada günler küçük harfle yazılır.'},
            {ro:'ho una riunione',tr:'toplantım var',role:'V',note:'avere = sahip olmak.'}
          ]
        }
      ]
    },
    {
      id:'w11',
      en:'mercoledì',
      ro:'mer-ko-le-DI',
      tr:'Çarşamba',
      tip:'Haftanın ortası.',
      ctx:'Günlük plan.',
      examples:[
        {
          en:'Il corso è ogni mercoledì.',
          tr:'Kurs her Çarşamba.',
          bd:[
            {ro:'ogni mercoledì',tr:'her Çarşamba',role:'day',note:'ogni = her.'}
          ]
        }
      ]
    },
    {
      id:'w12',
      en:'venerdì',
      ro:'ve-ner-DI',
      tr:'Cuma',
      tip:'Hafta sonu öncesi.',
      ctx:'Günlük plan.',
      examples:[
        {
          en:'Venerdì sera usciamo.',
          tr:'Cuma akşamı dışarı çıkıyoruz.',
          bd:[
            {ro:'Venerdì sera',tr:'Cuma akşamı',role:'day',note:'Gün + zaman dilimi.'},
            {ro:'usciamo',tr:'çıkıyoruz',role:'V',note:'uscire = çıkmak (we go out).'}
          ]
        }
      ]
    },
    {
      id:'w13',
      en:'domenica',
      ro:'do-ME-ni-ka',
      tr:'Pazar',
      tip:'Haftanın son günü.',
      ctx:'Hafta sonu.',
      examples:[
        {
          en:'La domenica resto a casa.',
          tr:'Pazar günleri evde kalıyorum.',
          bd:[
            {ro:'La domenica',tr:'Pazar günleri (her Pazar)',role:'day',note:'La + gün = düzenli alışkanlık.'},
            {ro:'resto a casa',tr:'evde kalıyorum',role:'V',note:'restare = kalmak.'}
          ]
        }
      ]
    },
    {
      id:'w14',
      en:'Quando?',
      ro:'KWAN-do',
      tr:'Ne zaman?',
      tip:'Zaman soru kelimesi.',
      ctx:'Randevu, plan.',
      examples:[
        {
          en:'Quando arrivi?',
          tr:'Ne zaman geliyorsun?',
          bd:[
            {ro:'Quando',tr:'Ne zaman',role:'question',note:'Zaman sorusu.'},
            {ro:'arrivi',tr:'geliyorsun',role:'V',note:'arrivare = gelmek (tu formu).'}
          ]
        }
      ]
    },
    {
      id:'w15',
      en:'A che ora?',
      ro:'a kay O-ra',
      tr:'Saat kaçta?',
      tip:'Kesin saat sormak.',
      ctx:'Randevu saati.',
      examples:[
        {
          en:'A che ora parte il treno?',
          tr:'Tren saat kaçta kalkıyor?',
          bd:[
            {ro:'A che ora',tr:'Saat kaçta',role:'question',note:'Belirli saat için a che ora.'},
            {ro:'parte il treno',tr:'tren kalkıyor',role:'V',note:'partire fiili — kalkış.'}
          ]
        }
      ]
    },
    {
      id:'w16',
      en:'gennaio',
      ro:'jen-NA-yo',
      tr:'Ocak',
      tip:'Yılın ilk ayı. Küçük harf!',
      ctx:'Tarih, plan.',
      examples:[
        {
          en:'Il mio compleanno è in gennaio.',
          tr:'Doğum günüm Ocak\'ta.',
          bd:[
            {ro:'in gennaio',tr:'Ocak\'ta',role:'month',note:'Ay + in: in gennaio, in luglio...'}
          ]
        }
      ]
    },
    {
      id:'w17',
      en:'luglio',
      ro:'LU-lyo',
      tr:'Temmuz',
      tip:'Yaz ayı. Küçük harf!',
      ctx:'Tatil, yaz.',
      examples:[
        {
          en:'In luglio vado al mare.',
          tr:'Temmuz\'da denize gidiyorum.',
          bd:[
            {ro:'In luglio',tr:'Temmuz\'da',role:'month',note:'in + ay adı.'},
            {ro:'vado al mare',tr:'denize gidiyorum',role:'V',note:'andare = gitmek.'}
          ]
        }
      ]
    },
    {
      id:'w18',
      en:'la settimana',
      ro:'la set-ti-MA-na',
      tr:'hafta',
      tip:'Zaman birimi.',
      ctx:'Süre, sıklık.',
      examples:[
        {
          en:'Studio tre volte alla settimana.',
          tr:'Haftada üç kez çalışıyorum.',
          bd:[
            {ro:'alla settimana',tr:'haftada',role:'time',note:'alla settimana = haftaya / haftada.'},
            {ro:'tre volte',tr:'üç kez',role:'frequency',note:'N + volte = N kez.'}
          ]
        }
      ]
    },
    {
      id:'w19',
      en:'il mese',
      ro:'il ME-ze',
      tr:'ay',
      tip:'Zaman birimi.',
      ctx:'Süre, plan.',
      examples:[
        {
          en:'Il corso dura un mese.',
          tr:'Kurs bir ay sürüyor.',
          bd:[
            {ro:'dura un mese',tr:'bir ay sürüyor',role:'V',note:'durare = sürmek.'}
          ]
        }
      ]
    },
    {
      id:'w20',
      en:'l\'anno',
      ro:'LAN-no',
      tr:'yıl',
      tip:'Zaman birimi.',
      ctx:'Yıllık plan.',
      examples:[
        {
          en:'Quest\'anno vado in Italia.',
          tr:'Bu yıl İtalya\'ya gidiyorum.',
          bd:[
            {ro:'Quest\'anno',tr:'Bu yıl',role:'time',note:'quest\' = bu (ünlü öncesi).'},
            {ro:'vado in Italia',tr:'İtalya\'ya gidiyorum',role:'V',note:'andare in + ülke.'}
          ]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Saat Söyleme — Che ore sono?',
      title_en:'Telling Time in Italian',
      explanation:'İtalyancada saat sorulur: "Che ore sono?" (Saat kaç?). Cevap: saat 1 için "È l\'una", diğerleri için "Sono le + sayı". Yarım saat: e mezza. Çeyrek: e un quarto. Çeyrek kala: meno un quarto. Sabah/öğleden sonra için "di mattina / del pomeriggio" eklenir.',
      table:[
        {pronoun:'Saat 1',form:'È l\'una.',example:'È l\'una di notte.',tr:'Gece biri.'},
        {pronoun:'Saat 3',form:'Sono le tre.',example:'Sono le tre e mezza.',tr:'Üç buçuk.'},
        {pronoun:'Çeyrek geçe',form:'...e un quarto',example:'Sono le cinque e un quarto.',tr:'Beş on beş.'},
        {pronoun:'Çeyrek kala',form:'...meno un quarto',example:'Sono le sei meno un quarto.',tr:'Altıya çeyrek var.'},
        {pronoun:'Tam saat',form:'Sono le + N.',example:'Sono le otto.',tr:'Saat sekiz.'},
        {pronoun:'Öğlen',form:'È mezzogiorno.',example:'È mezzogiorno.',tr:'Öğlen.'}
      ],
      note:'Belirli saat için: "alle + saat" — Alle otto = Saat sekizde. È l\'una → all\'una.'
    },
    {
      id:'g2',
      title:'Günler ve Aylar — Küçük Harf!',
      title_en:'Days and Months',
      explanation:'İtalyancada haftanın günleri ve ayların adları KÜÇÜK harfle yazılır. Günler: lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica. Aylar: gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre. "Il" veya "La" + gün = her o gün (La domenica = her Pazar).',
      table:[
        {pronoun:'Pazartesi',form:'lunedì',example:'Lunedì ho lezione.',tr:'Pazartesi dersim var.'},
        {pronoun:'Cuma',form:'venerdì',example:'Venerdì sera usciamo.',tr:'Cuma akşamı çıkıyoruz.'},
        {pronoun:'Ocak\'ta',form:'in gennaio',example:'In gennaio nevica.',tr:'Ocak\'ta kar yağıyor.'},
        {pronoun:'Her Pazar',form:'la domenica',example:'La domenica resto a casa.',tr:'Her Pazar evde kalıyorum.'}
      ],
      note:'Tarih sorma: "Che giorno è oggi?" — "Oggi è lunedì." / "Quanti ne abbiamo oggi?" — "Oggi è il tre marzo."'
    },
    {
      id:'g3',
      title:'Zaman Zarfları ve Edatlar',
      title_en:'Time Adverbs and Prepositions',
      explanation:'Zaman anlatmak için önemli kelimeler: ieri (dün), oggi (bugün), domani (yarın). Sıklık: sempre (her zaman), spesso (sık sık), qualche volta (bazen), mai (hiç/asla). Edatlar: in + ay/yıl/mevsim, a + şehir/saat, alle + saat.',
      table:[
        {pronoun:'Dün',form:'ieri',example:'Ieri sono andato al cinema.',tr:'Dün sinemaya gittim.'},
        {pronoun:'Bugün',form:'oggi',example:'Oggi studio italiano.',tr:'Bugün İtalyanca çalışıyorum.'},
        {pronoun:'Yarın',form:'domani',example:'Domani parto.',tr:'Yarın yola çıkıyorum.'},
        {pronoun:'Her zaman',form:'sempre',example:'Bevo sempre il caffè.',tr:'Her zaman kahve içerim.'}
      ],
      note:'Yıl için: nel 2025 (= 2025\'te). Mevsim için: in primavera / in estate / in autunno / in inverno.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Che ore sono?',tr:'Saat kaç?',prompt:'Saat sor'},
    {id:'sp2',en:'Sono le tre e mezza.',tr:'Saat üç buçuk.',prompt:'Saati söyle'},
    {id:'sp3',en:'A che ora parte il treno?',tr:'Tren saat kaçta kalkıyor?',prompt:'Kalkış saatini sor'},
    {id:'sp4',en:'Oggi ho una lezione d\'italiano.',tr:'Bugün İtalyanca dersim var.',prompt:'Bugünkü planını söyle'},
    {id:'sp5',en:'La domenica resto a casa.',tr:'Her Pazar evde kalıyorum.',prompt:'Hafta sonu alışkanlığını anlat'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Randevu Ayarlama',
      title_en:'Making an Appointment',
      lines:[
        {speaker:'A',gender:'m',en:'Ciao! Quando sei libero?',tr:'Selam! Ne zaman müsaitsin?',
          gramNote:'libero = müsait, boş.',
          bd:[{ro:'Quando sei libero',tr:'Ne zaman müsaitsin',role:'question',note:'libero sıfatı + essere.'}]},
        {speaker:'B',gender:'f',en:'Venerdì pomeriggio. A che ora?',tr:'Cuma öğleden sonrası. Saat kaçta?',
          gramNote:'Gün + zaman dilimi + soru.',
          bd:[{ro:'Venerdì pomeriggio',tr:'Cuma öğleden sonrası',role:'time',note:'Gün + zaman.'}]},
        {speaker:'A',gender:'m',en:'Alle quattro va bene?',tr:'Saat dörde uyar mı?',
          gramNote:'alle = saat (belirli). va bene = uyar mı / tamam mı?',
          bd:[{ro:'Alle quattro',tr:'Saat dörde',role:'time',note:'alle + saat.'},
              {ro:'va bene',tr:'uyar mı / tamam mı',role:'question',note:'Günlük onay sorusu.'}]},
        {speaker:'B',gender:'f',en:'Sì, va benissimo!',tr:'Evet, çok uyar!',
          gramNote:'benissimo = çok iyi (bene\'nin superlatiği).',
          bd:[{ro:'benissimo',tr:'çok iyi / mükemmel',role:'K',note:'Güçlendirilmiş bene.'}]},
        {speaker:'A',gender:'m',en:'Perfetto. Ci vediamo venerdì alle quattro!',tr:'Harika. Cuma saat dörtte görüşürüz!',
          gramNote:'ci vediamo = görüşürüz (reflexive).',
          bd:[{ro:'Ci vediamo',tr:'Görüşürüz',role:'farewell',note:'vedersi = birbirini görmek.'}]}
      ]
    },
    {
      id:'d2',
      title:'Saat Sorma',
      title_en:'Asking the Time',
      lines:[
        {speaker:'A',gender:'f',en:'Scusi, che ore sono?',tr:'Affedersiniz, saat kaç?',
          bd:[{ro:'Scusi, che ore sono',tr:'Affedersiniz, saat kaç',role:'question',note:'Resmi soru.'}]},
        {speaker:'B',gender:'m',en:'Sono le undici e venti.',tr:'Saat on yirmi.',
          bd:[{ro:'Sono le undici e venti',tr:'Saat on yirmi',role:'time',note:'saat 11:20.'}]},
        {speaker:'A',gender:'f',en:'Grazie mille!',tr:'Çok teşekkürler!',
          bd:[{ro:'Grazie mille',tr:'Çok teşekkürler',role:'courtesy',note:'mille = bin → deyim.'}]},
        {speaker:'B',gender:'m',en:'Prego!',tr:'Rica ederim!',
          bd:[{ro:'Prego',tr:'Rica ederim',role:'courtesy',note:'Teşekküre cevap.'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Oggi è lunedì. La lezione di italiano inizia alle nove e finisce alle undici. Nel pomeriggio ho un appuntamento alle tre.',
      tr:'Bugün Pazartesi. İtalyanca dersi dokuzda başlıyor ve on birde bitiyor. Öğleden sonra saat üçte randevum var.',
      questions:[
        {q:'Che giorno è oggi?',opts:['Martedì','Lunedì','Mercoledì','Venerdì'],answer:1,tr:'Bugün hangi gün?'},
        {q:'A che ora inizia la lezione?',opts:['Alle otto','Alle nove','Alle dieci','Alle undici'],answer:1,tr:'Ders kaçta başlıyor?'},
        {q:'Quando è l\'appuntamento?',opts:['Alle due','Alle tre','Alle quattro','Di mattina'],answer:1,tr:'Randevu ne zaman?'}
      ]
    }
  ],
  tones:[]
};
LESSONS[4] = L4;
