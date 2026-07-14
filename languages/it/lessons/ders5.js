// ders5.js — Italian Lesson 5: Restaurant & Food (beginner)
const L5 = {
  words:[
    {
      id:'w1',
      en:'Un tavolo per due, per favore.',
      ro:'un TA-vo-lo per DUE',
      tr:'İki kişilik masa, lütfen.',
      tip:'Restoranda masa ayırtmak.',
      ctx:'Girişte garsona.',
      examples:[
        {
          en:'Buonasera! Un tavolo per due, per favore.',
          tr:'İyi akşamlar! İki kişilik masa, lütfen.',
          bd:[
            {ro:'Un tavolo per due',tr:'İki kişilik masa',role:'phrase',note:'un tavolo = bir masa. per due = iki kişi için.'},
            {ro:'per favore',tr:'lütfen',role:'courtesy',note:'Her istekte eklenir.'}
          ]
        }
      ]
    },
    {
      id:'w2',
      en:'il menù',
      ro:'il me-NU',
      tr:'menü',
      tip:'Restoranın menüsü.',
      ctx:'Sipariş öncesi.',
      examples:[
        {
          en:'Posso vedere il menù, per favore?',
          tr:'Menüyü görebilir miyim, lütfen?',
          bd:[
            {ro:'Posso vedere',tr:'Görebilir miyim',role:'question',note:'potere (yapabilmek) + inf.'},
            {ro:'il menù',tr:'menü',role:'O',note:'İtalyancada "menù" aksanlı.'}
          ]
        }
      ]
    },
    {
      id:'w3',
      en:'ordinare',
      ro:'or-di-NA-re',
      tr:'sipariş vermek',
      tip:'Fiil: -are grubu.',
      ctx:'Garsonla konuşurken.',
      examples:[
        {
          en:'Siamo pronti a ordinare.',
          tr:'Sipariş vermeye hazırız.',
          bd:[
            {ro:'Siamo pronti',tr:'Hazırız',role:'phrase',note:'essere + pronti.'},
            {ro:'a ordinare',tr:'sipariş vermeye',role:'V',note:'a + inf. — hazır olmak için.'}
          ]
        }
      ]
    },
    {
      id:'w4',
      en:'Vorrei...',
      ro:'vor-REI',
      tr:'... istiyorum (nazik)',
      tip:'Vorrei = koşullu — kibar istek.',
      ctx:'Sipariş ve istek.',
      examples:[
        {
          en:'Vorrei la pasta al pomodoro.',
          tr:'Domates soslu makarna istiyorum.',
          bd:[
            {ro:'Vorrei',tr:'İstiyorum (nazik)',role:'V',note:'volere koşulluda. "Voglio" yerine daha kibar.'},
            {ro:'la pasta al pomodoro',tr:'domates soslu makarna',role:'O',note:'al = a + il.'}
          ]
        }
      ]
    },
    {
      id:'w5',
      en:'l\'acqua',
      ro:'LAK-kwa',
      tr:'su',
      tip:'l\' — ünlü ile başlayan eril isim.',
      ctx:'Restoran, günlük.',
      examples:[
        {
          en:'Vorrei dell\'acqua naturale, per favore.',
          tr:'Doğal su istiyorum, lütfen.',
          bd:[
            {ro:'dell\'acqua',tr:'su (biraz)',role:'O',note:'del/della/dell\' = belirsiz miktar.'},
            {ro:'naturale',tr:'doğal (gazsız)',role:'K',note:'frizzante = gazlı, naturale = gazsız.'}
          ]
        }
      ]
    },
    {
      id:'w6',
      en:'il vino',
      ro:'il VI-no',
      tr:'şarap',
      tip:'İtalya\'nın simgesi.',
      ctx:'Restoran.',
      examples:[
        {
          en:'Un bicchiere di vino rosso, per favore.',
          tr:'Bir bardak kırmızı şarap, lütfen.',
          bd:[
            {ro:'un bicchiere di',tr:'bir bardak',role:'O',note:'bicchiere = bardak. di + içecek.'},
            {ro:'vino rosso',tr:'kırmızı şarap',role:'O',note:'rosso = kırmızı. bianco = beyaz.'}
          ]
        }
      ]
    },
    {
      id:'w7',
      en:'il pane',
      ro:'il PA-ne',
      tr:'ekmek',
      tip:'İtalyan sofrasında temel.',
      ctx:'Restoran, fırın.',
      examples:[
        {
          en:'Potremmo avere del pane?',
          tr:'Biraz ekmek alabilir miyiz?',
          bd:[
            {ro:'Potremmo avere',tr:'Alabilir miyiz',role:'question',note:'Koşullu — çok nazik.'},
            {ro:'del pane',tr:'biraz ekmek',role:'O',note:'del = bölümleme eki (belirsiz miktar).'}
          ]
        }
      ]
    },
    {
      id:'w8',
      en:'la pasta',
      ro:'la PAS-ta',
      tr:'makarna',
      tip:'İtalya\'nın en önemli yemeği.',
      ctx:'Restoran, yemek.',
      examples:[
        {
          en:'La pasta è cotta al dente.',
          tr:'Makarna al dente pişmiş.',
          bd:[
            {ro:'cotta al dente',tr:'al dente pişmiş',role:'K',note:'al dente = İtalyanca klasik pişirme terimi.'}
          ]
        }
      ]
    },
    {
      id:'w9',
      en:'la pizza',
      ro:'la PIT-tsa',
      tr:'pizza',
      tip:'Napoli\'den dünyaya.',
      ctx:'Restoran, pizzeria.',
      examples:[
        {
          en:'Vorrei una pizza margherita.',
          tr:'Bir margherita pizza istiyorum.',
          bd:[
            {ro:'pizza margherita',tr:'margherita pizza',role:'O',note:'Domates + mozzarella + fesleğen. En klasik.'}
          ]
        }
      ]
    },
    {
      id:'w10',
      en:'il pollo',
      ro:'il POL-lo',
      tr:'tavuk',
      tip:'Yaygın protein kaynağı.',
      ctx:'Yemek siparişi.',
      examples:[
        {
          en:'Il pollo alla griglia, per favore.',
          tr:'Izgara tavuk, lütfen.',
          bd:[
            {ro:'alla griglia',tr:'ızgara (tarzında)',role:'K',note:'alla + pişirme yöntemi: alla griglia, al forno, fritto...'}
          ]
        }
      ]
    },
    {
      id:'w11',
      en:'il pesce',
      ro:'il PE-she',
      tr:'balık',
      tip:'Deniz ürünleri genel terimi.',
      ctx:'Restoran, pazar.',
      examples:[
        {
          en:'Oggi il pesce fresco è il branzino.',
          tr:'Bugün taze balık levrek.',
          bd:[
            {ro:'pesce fresco',tr:'taze balık',role:'O',note:'fresco = taze.'},
            {ro:'branzino',tr:'levrek',role:'O',note:'Yaygın İtalyan balığı.'}
          ]
        }
      ]
    },
    {
      id:'w12',
      en:'vegetariano/a',
      ro:'ve-ge-ta-RYA-no',
      tr:'vejetaryen',
      tip:'Erkek: -o, Kadın: -a.',
      ctx:'Diyet, tercih.',
      examples:[
        {
          en:'Sono vegetariano. Avete piatti vegetariani?',
          tr:'Vejetaryenim. Vejetaryen yemekleriniz var mı?',
          bd:[
            {ro:'Sono vegetariano',tr:'Vejetaryenim',role:'phrase',note:'essere + sıfat.'},
            {ro:'piatti vegetariani',tr:'vejetaryen yemekler',role:'O',note:'piatto = tabak/yemek. Çoğul: piatti.'}
          ]
        }
      ]
    },
    {
      id:'w13',
      en:'delizioso/a',
      ro:'de-LIT-syo-zo',
      tr:'lezzetli, nefis',
      tip:'Erkek: -o, Kadın: -a.',
      ctx:'Yemek değerlendirme.',
      examples:[
        {
          en:'La pasta è deliziosa!',
          tr:'Makarna nefis!',
          bd:[
            {ro:'è deliziosa',tr:'nefis',role:'K',note:'pasta dişil → deliziosa.'}
          ]
        }
      ]
    },
    {
      id:'w14',
      en:'il conto',
      ro:'il KON-to',
      tr:'hesap',
      tip:'Restoranda ödeme.',
      ctx:'Yemek sonu.',
      examples:[
        {
          en:'Il conto, per favore.',
          tr:'Hesap, lütfen.',
          bd:[
            {ro:'Il conto',tr:'Hesap',role:'phrase',note:'Restoran çıkışında klasik ifade.'}
          ]
        }
      ]
    },
    {
      id:'w15',
      en:'la prenotazione',
      ro:'la pre-no-ta-TSYO-ne',
      tr:'rezervasyon',
      tip:'Önceden yer ayırtma.',
      ctx:'Restoran, otel.',
      examples:[
        {
          en:'Ho una prenotazione a nome Ali.',
          tr:'Ali adına rezervasyonum var.',
          bd:[
            {ro:'a nome',tr:'adına',role:'phrase',note:'a nome + isim = ... adına.'},
            {ro:'prenotazione',tr:'rezervasyon',role:'O',note:'prenotare = önceden ayırtmak.'}
          ]
        }
      ]
    },
    {
      id:'w16',
      en:'il dolce',
      ro:'il DOL-che',
      tr:'tatlı, dessert',
      tip:'Tatlı = dolce (sıfat: tatlı).',
      ctx:'Yemek sonu.',
      examples:[
        {
          en:'Come dolce vorrei il tiramisù.',
          tr:'Tatlı olarak tiramisu istiyorum.',
          bd:[
            {ro:'Come dolce',tr:'Tatlı olarak',role:'phrase',note:'come = olarak.'},
            {ro:'tiramisù',tr:'tiramisu',role:'O',note:'İtalya\'nın en sevilen tatlısı.'}
          ]
        }
      ]
    },
    {
      id:'w17',
      en:'l\'antipasto',
      ro:'lan-ti-PAS-to',
      tr:'başlangıç yemeği',
      tip:'Yemekten önce gelen küçük tabak.',
      ctx:'Restoran menüsü.',
      examples:[
        {
          en:'Come antipasto prendiamo la bruschetta.',
          tr:'Başlangıç olarak bruschetta alıyoruz.',
          bd:[
            {ro:'Come antipasto',tr:'Başlangıç olarak',role:'phrase',note:'come = olarak.'},
            {ro:'bruschetta',tr:'bruschetta',role:'O',note:'Kızarmış ekmek + domates. Klasik antipasto.'}
          ]
        }
      ]
    },
    {
      id:'w18',
      en:'il primo / il secondo',
      ro:'il PRI-mo / il se-KON-do',
      tr:'birinci yemek / ana yemek',
      tip:'İtalyan menüsü sırası: antipasto → primo → secondo → dolce.',
      ctx:'Restoran menüsü.',
      examples:[
        {
          en:'Come primo prendo la pasta, come secondo il pollo.',
          tr:'Birinci olarak makarna, ana yemek olarak tavuk alıyorum.',
          bd:[
            {ro:'Come primo',tr:'Birinci yemek olarak',role:'phrase',note:'İtalyan menüsünde "primo" = makarna/çorba.'},
            {ro:'come secondo',tr:'ana yemek olarak',role:'phrase',note:'"Secondo" = et/balık.'}
          ]
        }
      ]
    },
    {
      id:'w19',
      en:'Buon appetito!',
      ro:'bwon ap-pe-TI-to',
      tr:'Afiyet olsun!',
      tip:'Yemek başlarken söylenir.',
      ctx:'Sofra kültürü.',
      examples:[
        {
          en:'— Buon appetito! — Grazie, altrettanto!',
          tr:'— Afiyet olsun! — Teşekkürler, size de!',
          bd:[
            {ro:'Buon appetito',tr:'Afiyet olsun',role:'greeting',note:'Yemek başlangıcında.'},
            {ro:'altrettanto',tr:'size de (aynı size)',role:'phrase',note:'Karşılık verme kalıbı.'}
          ]
        }
      ]
    },
    {
      id:'w20',
      en:'senza glutine / allergico a',
      ro:'SEN-tsa GLU-ti-ne',
      tr:'glutensiz / ... alerjisi var',
      tip:'Diyet kısıtlamaları.',
      ctx:'Restoran, sağlık.',
      examples:[
        {
          en:'Sono allergico al glutine. Avete piatti senza glutine?',
          tr:'Gluten alerjim var. Glutensiz yemekleriniz var mı?',
          bd:[
            {ro:'Sono allergico a',tr:'... alerjim var',role:'phrase',note:'allergico a + madde.'},
            {ro:'senza glutine',tr:'glutensiz',role:'K',note:'senza = -siz, -sız.'}
          ]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Vorrei — Kibar İstek Kalıbı',
      title_en:'Vorrei — Polite Request',
      explanation:'"Vorrei" kelimesi "volere" (istemek) fiilinin koşullu zamanıdır. "Voglio" (istiyorum) ile aynı anlamda ama çok daha kibar. Restoran, mağaza ve resmi ortamlarda mutlaka vorrei kullanılır. Ardından doğrudan isim gelir.',
      table:[
        {pronoun:'Kaba',form:'Voglio la pasta.',example:'Voglio la pasta.',tr:'Makarna istiyorum. (kaba)'},
        {pronoun:'Kibar',form:'Vorrei la pasta.',example:'Vorrei la pasta, per favore.',tr:'Makarna istiyorum. (nazik)'},
        {pronoun:'Çok kibar',form:'Potrei avere...?',example:'Potrei avere il menù?',tr:'Menüyü alabilir miyim?'},
        {pronoun:'Biz',form:'Vorremmo...',example:'Vorremmo ordinare.',tr:'Sipariş vermek istiyoruz.'}
      ],
      note:'"Vorrei" — hiçbir zaman "Voglio" deme. Türkçe "istiyorum"dan daha kibar.'
    },
    {
      id:'g2',
      title:'İtalyan Mutfağı Menü Sırası',
      title_en:'Italian Menu Order',
      explanation:'İtalyan restoranında yemekler belirli bir sırada gelir: Aperitivo → Antipasto → Primo piatto → Secondo piatto → Contorno → Dolce → Caffè. Birinci yemek (primo) genellikle makarna veya risotto. Ana yemek (secondo) et veya balık. Contorno = garnitür (salata, sebze). Türkiye\'den farklı olarak çorba çok az.',
      table:[
        {pronoun:'Aperitivo',form:'Aperol Spritz, Prosecco',example:'Prendiamo l\'aperitivo.',tr:'Aperatif alıyoruz.'},
        {pronoun:'Antipasto',form:'Bruschetta, affettati',example:'Come antipasto, la bruschetta.',tr:'Başlangıç olarak bruschetta.'},
        {pronoun:'Primo',form:'Pasta, risotto',example:'Come primo, la carbonara.',tr:'Birinci olarak carbonara.'},
        {pronoun:'Secondo',form:'Carne, pesce',example:'Come secondo, il branzino.',tr:'Ana yemek olarak levrek.'},
        {pronoun:'Dolce',form:'Tiramisù, panna cotta',example:'Come dolce, il tiramisù.',tr:'Tatlı olarak tiramisu.'}
      ],
      note:'Caffè = espresso (yemek sonunda). Cappuccino yemek sonunda içilmez — İtalyan kültüründe sadece sabah!'
    },
    {
      id:'g3',
      title:'del / della / dell\' — Bölümleme Eki',
      title_en:'Partitive Article del/della/dell\'',
      explanation:'Türkçede "biraz" ya da belirsiz miktar için İtalyancada "del/della/dell\'/dei/degli/delle" kullanılır. Eril tekil: del pane (biraz ekmek). Dişil tekil: della pasta (biraz makarna). Ünlü öncesi: dell\'acqua (biraz su).',
      table:[
        {pronoun:'Eril (il)',form:'del + isim',example:'del pane, del vino',tr:'biraz ekmek, biraz şarap'},
        {pronoun:'Dişil (la)',form:'della + isim',example:'della pasta, della carne',tr:'biraz makarna, biraz et'},
        {pronoun:'Ünlü (l\')',form:'dell\' + isim',example:'dell\'acqua, dell\'olio',tr:'biraz su, biraz yağ'},
        {pronoun:'Eril çoğul (i/gli)',form:'dei/degli + isim',example:'dei fiori, degli spaghetti',tr:'birkaç çiçek, biraz spagetti'}
      ],
      note:'Olumsuzda "del" kullanılmaz: "Non ho pane" (= Ekmeğim yok) — "del" düşer.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Un tavolo per due, per favore.',tr:'İki kişilik masa, lütfen.',prompt:'Restoranda masa iste'},
    {id:'sp2',en:'Vorrei la pasta al pomodoro e dell\'acqua naturale.',tr:'Domates soslu makarna ve doğal su istiyorum.',prompt:'Sipariş ver'},
    {id:'sp3',en:'Sono vegetariano. Avete piatti vegetariani?',tr:'Vejetaryenim. Vejetaryen yemekleriniz var mı?',prompt:'Diyet kısıtlamanı belirt'},
    {id:'sp4',en:'La pasta è deliziosa! Complimenti allo chef!',tr:'Makarna nefis! Şefe tebrikler!',prompt:'Yemeği değerlendir'},
    {id:'sp5',en:'Il conto, per favore. Possiamo pagare con carta?',tr:'Hesap, lütfen. Kartla ödeyebilir miyiz?',prompt:'Hesap iste ve ödeme sor'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Restoranda',
      title_en:'At the Restaurant',
      lines:[
        {speaker:'A',gender:'f',en:'Buonasera! Avete un tavolo per due?',tr:'İyi akşamlar! İki kişilik masanız var mı?',
          gramNote:'Avete = var mı? (avere fiili — voi formu).',
          bd:[{ro:'Avete un tavolo per due',tr:'İki kişilik masanız var mı',role:'question',note:'avere fiili ile varlık sorma.'}]},
        {speaker:'B',gender:'m',en:'Sì, certo! Prego, si accomodi.',tr:'Evet, tabii! Lütfen, buyurun oturun.',
          gramNote:'si accomodi = buyurun oturun (resmi, Lei formu).',
          bd:[{ro:'si accomodi',tr:'buyurun oturun',role:'courtesy',note:'Resmi davet — Lei formu.'}]},
        {speaker:'A',gender:'f',en:'Grazie. Posso vedere il menù?',tr:'Teşekkürler. Menüyü görebilir miyim?',
          bd:[{ro:'Posso vedere il menù',tr:'Menüyü görebilir miyim',role:'question',note:'potere + inf.'}]},
        {speaker:'B',gender:'m',en:'Ecco il menù. Cosa desidera?',tr:'İşte menü. Ne istersiniz?',
          gramNote:'desidera = istersiniz (Lei, resmi garson dili).',
          bd:[{ro:'Cosa desidera',tr:'Ne istersiniz',role:'question',note:'desiderare — resmi isteme.'}]},
        {speaker:'A',gender:'f',en:'Vorrei la pasta al pesto e un\'acqua minerale.',tr:'Pestolu makarna ve bir maden suyu istiyorum.',
          bd:[{ro:'Vorrei',tr:'İstiyorum (nazik)',role:'V',note:'Koşullu — kibar sipariş.'},
              {ro:'acqua minerale',tr:'maden suyu',role:'O',note:'minerale = mineral.'}]},
        {speaker:'B',gender:'m',en:'Benissimo. Altro?',tr:'Harika. Başka bir şey?',
          bd:[{ro:'Benissimo',tr:'Çok iyi / harika',role:'K',note:'bene\'nin pekiştirilmişi.'}]},
        {speaker:'A',gender:'f',en:'No, grazie. Ah, il conto alla fine separato, per favore.',tr:'Hayır, teşekkürler. Ah, hesabı ayrı ayrı yapar mısınız lütfen.',
          bd:[{ro:'il conto separato',tr:'ayrı hesap',role:'phrase',note:'separato = ayrı.'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Buonasera! Vorrei un tavolo per due. Abbiamo una prenotazione a nome Rossi. Come primo vorremmo la pasta al pomodoro, e come secondo il pollo alla griglia. Da bere, due bicchieri di vino bianco e dell\'acqua naturale. Grazie!',
      tr:'İyi akşamlar! İki kişilik masa istiyorum. Rossi adına rezervasyonumuz var. Birinci olarak domates soslu makarna, ana yemek olarak ızgara tavuk istiyoruz. İçecek olarak iki bardak beyaz şarap ve doğal su. Teşekkürler!',
      questions:[
        {q:'Per quante persone è il tavolo?',opts:['Per uno','Per due','Per tre','Per quattro'],answer:1,tr:'Masa kaç kişilik?'},
        {q:'Cosa prende come primo?',opts:['Pizza','Pasta al pomodoro','Pollo','Tiramisù'],answer:1,tr:'Birinci yemek olarak ne alıyor?'},
        {q:'Cosa bevono?',opts:['Birra e acqua','Vino rosso e aranciata','Vino bianco e acqua','Solo acqua'],answer:2,tr:'Ne içiyorlar?'}
      ]
    }
  ],
  tones:[]
};
LESSONS[5] = L5;
