// ders6.js — Italian Lesson 6: Shopping (beginner)
const L6 = {
  words:[
    {
      id:'w1',
      en:'Quanto costa?',
      ro:'KWAN-to KOS-ta',
      tr:'Ne kadar? / Fiyatı ne?',
      tip:'Alışverişte temel soru.',
      ctx:'Her türlü alışveriş.',
      examples:[{
        en:'Scusi, quanto costa questa borsa?',
        tr:'Affedersiniz, bu çanta ne kadar?',
        bd:[
          {ro:'Quanto costa',tr:'Ne kadar',role:'question',note:'Fiyat sorusu.'},
          {ro:'questa borsa',tr:'bu çanta',role:'O',note:'questa = bu (dişil).'}
        ]
      }]
    },
    {
      id:'w2',
      en:'Costa...',
      ro:'KOS-ta',
      tr:'... tutuyor / fiyatı ...',
      tip:'Fiyat cevabı.',
      ctx:'Mağaza, pazar.',
      examples:[{
        en:'Costa venticinque euro.',
        tr:'Yirmi beş euro.',
        bd:[
          {ro:'Costa',tr:'Fiyatı ...',role:'V',note:'costare = mal olmak.'},
          {ro:'venticinque euro',tr:'yirmi beş euro',role:'O',note:'Fiyat ifadesi.'}
        ]
      }]
    },
    {
      id:'w3',
      en:'Posso provare?',
      ro:'POS-so pro-VA-re',
      tr:'Deneyebilir miyim?',
      tip:'Giysi denemek.',
      ctx:'Giyim mağazası.',
      examples:[{
        en:'Posso provare questo vestito?',
        tr:'Bu elbiseyi deneyebilir miyim?',
        bd:[
          {ro:'Posso provare',tr:'Deneyebilir miyim',role:'question',note:'potere + inf.'},
          {ro:'questo vestito',tr:'bu elbise',role:'O',note:'vestito = elbise.'}
        ]
      }]
    },
    {
      id:'w4',
      en:'la taglia',
      ro:'la TA-lya',
      tr:'beden (kıyafet)',
      tip:'Kıyafet bedeni.',
      ctx:'Giyim mağazası.',
      examples:[{
        en:'Che taglia porta?',
        tr:'Kaç beden giyiyorsunuz?',
        bd:[
          {ro:'Che taglia',tr:'Kaç beden',role:'question',note:'taglia = beden (S/M/L veya 40/42...).'},
          {ro:'porta',tr:'giyiyor / kullanıyor',role:'V',note:'portare = taşımak, giymek.'}
        ]
      }]
    },
    {
      id:'w5',
      en:'il colore',
      ro:'il ko-LO-re',
      tr:'renk',
      tip:'Renk seçimi.',
      ctx:'Alışveriş.',
      examples:[{
        en:'L\'avete in un altro colore?',
        tr:'Başka rengi var mı?',
        bd:[
          {ro:'L\'avete',tr:'Var mı',role:'question',note:'lo avete = onu var mı.'},
          {ro:'in un altro colore',tr:'başka renkte',role:'phrase',note:'altro = başka.'}
        ]
      }]
    },
    {
      id:'w6',
      en:'Lo/La prendo.',
      ro:'lo / la PREN-do',
      tr:'Bunu alıyorum.',
      tip:'Satın alma kararı.',
      ctx:'Ödeme öncesi.',
      examples:[{
        en:'È perfetto. Lo prendo!',
        tr:'Mükemmel. Bunu alıyorum!',
        bd:[
          {ro:'Lo prendo',tr:'Bunu alıyorum',role:'phrase',note:'lo = onu (eril). la prendo (dişil).'}
        ]
      }]
    },
    {
      id:'w7',
      en:'lo sconto',
      ro:'lo SKON-to',
      tr:'indirim',
      tip:'Fiyat indirimi.',
      ctx:'Alışveriş, pazar.',
      examples:[{
        en:'C\'è uno sconto?',
        tr:'İndirim var mı?',
        bd:[
          {ro:'C\'è uno sconto',tr:'İndirim var mı',role:'question',note:'c\'è = var mı (tekil).'}
        ]
      }]
    },
    {
      id:'w8',
      en:'pagare con carta / in contanti',
      ro:'pa-GA-re kon KAR-ta',
      tr:'kartla / nakit ödemek',
      tip:'Ödeme yöntemleri.',
      ctx:'Kasa, ödeme.',
      examples:[{
        en:'Come vuole pagare? — Con carta, per favore.',
        tr:'Nasıl ödemek istiyorsunuz? — Kartla, lütfen.',
        bd:[
          {ro:'Come vuole pagare',tr:'Nasıl ödeyeceksiniz',role:'question',note:'volere + inf. (Lei).'},
          {ro:'Con carta',tr:'Kartla',role:'phrase',note:'contanti = nakit.'}
        ]
      }]
    },
    {
      id:'w9',
      en:'la ricevuta',
      ro:'la ri-che-VU-ta',
      tr:'fiş, makbuz',
      tip:'Alışveriş fişi.',
      ctx:'Kasa, iade.',
      examples:[{
        en:'Posso avere la ricevuta?',
        tr:'Fişi alabilir miyim?',
        bd:[
          {ro:'la ricevuta',tr:'fiş',role:'O',note:'scontrino da aynı anlam.'}
        ]
      }]
    },
    {
      id:'w10',
      en:'il mercato',
      ro:'il mer-KA-to',
      tr:'pazar yeri',
      tip:'Açık hava pazarı.',
      ctx:'Alışveriş.',
      examples:[{
        en:'Il sabato vado al mercato.',
        tr:'Cumartesi pazara gidiyorum.',
        bd:[
          {ro:'al mercato',tr:'pazara',role:'place',note:'al = a + il.'}
        ]
      }]
    },
    {
      id:'w11',
      en:'il negozio',
      ro:'il ne-GO-tsyo',
      tr:'dükkân, mağaza',
      tip:'Genel mağaza.',
      ctx:'Alışveriş.',
      examples:[{
        en:'Il negozio è aperto fino alle venti.',
        tr:'Mağaza saat yirmiye kadar açık.',
        bd:[
          {ro:'aperto',tr:'açık',role:'K',note:'chiuso = kapalı.'},
          {ro:'fino alle venti',tr:'saat yirmiye kadar',role:'time',note:'fino a = ... kadar.'}
        ]
      }]
    },
    {
      id:'w12',
      en:'Cerco...',
      ro:'CHER-ko',
      tr:'Arıyorum...',
      tip:'Ne aradığını söyleme.',
      ctx:'Mağaza girişinde.',
      examples:[{
        en:'Cerco un paio di scarpe nere.',
        tr:'Siyah bir çift ayakkabı arıyorum.',
        bd:[
          {ro:'Cerco',tr:'Arıyorum',role:'V',note:'cercare = aramak (io cerco).'},
          {ro:'un paio di scarpe',tr:'bir çift ayakkabı',role:'O',note:'paio = çift.'}
        ]
      }]
    },
    {
      id:'w13',
      en:'troppo caro/a',
      ro:'TROP-po KA-ro',
      tr:'çok pahalı',
      tip:'Fiyat şikayeti.',
      ctx:'Pazarlık.',
      examples:[{
        en:'È un po\' troppo caro per me.',
        tr:'Benim için biraz fazla pahalı.',
        bd:[
          {ro:'un po\' troppo caro',tr:'biraz fazla pahalı',role:'K',note:'un po\' = biraz. troppo = fazla.'}
        ]
      }]
    },
    {
      id:'w14',
      en:'Mi fa uno sconto?',
      ro:'mi fa U-no SKON-to',
      tr:'İndirim yapabilir misiniz?',
      tip:'Pazarlık kalıbı.',
      ctx:'Pazar, küçük dükkan.',
      examples:[{
        en:'È un po\' caro. Mi fa uno sconto?',
        tr:'Biraz pahalı. İndirim yapabilir misiniz?',
        bd:[
          {ro:'Mi fa uno sconto',tr:'İndirim yapabilir misiniz',role:'question',note:'fare uno sconto = indirim yapmak.'}
        ]
      }]
    },
    {
      id:'w15',
      en:'la borsa',
      ro:'la BOR-sa',
      tr:'çanta',
      tip:'El çantası.',
      ctx:'Mağaza, alışveriş.',
      examples:[{
        en:'Questa borsa è in pelle.',
        tr:'Bu çanta deriden.',
        bd:[
          {ro:'in pelle',tr:'deriden',role:'K',note:'in + malzeme: in pelle, in cotone, in lana...'}
        ]
      }]
    },
    {
      id:'w16',
      en:'il vestito / gli abiti',
      ro:'il ves-TI-to',
      tr:'elbise / giysi',
      tip:'vestito = elbise; abiti = kıyafetler.',
      ctx:'Giyim mağazası.',
      examples:[{
        en:'Vorrei comprare un vestito elegante.',
        tr:'Şık bir elbise almak istiyorum.',
        bd:[
          {ro:'comprare',tr:'satın almak',role:'V',note:'comprare = satın almak.'},
          {ro:'elegante',tr:'şık',role:'K',note:'Erkek-dişil değişmez: elegante.'}
        ]
      }]
    },
    {
      id:'w17',
      en:'la cassa',
      ro:'la KAS-sa',
      tr:'kasa',
      tip:'Mağazada ödeme noktası.',
      ctx:'Ödeme.',
      examples:[{
        en:'Dov\'è la cassa, per favore?',
        tr:'Kasa nerede, lütfen?',
        bd:[
          {ro:'Dov\'è',tr:'Nerede',role:'question',note:'dove + è = nerede.'}
        ]
      }]
    },
    {
      id:'w18',
      en:'stretto / largo',
      ro:'STRET-to / LAR-go',
      tr:'dar / geniş',
      tip:'Beden uyumu.',
      ctx:'Giyim.',
      examples:[{
        en:'Questa camicia è troppo stretta. Avete una taglia più grande?',
        tr:'Bu gömlek çok dar. Daha büyük beden var mı?',
        bd:[
          {ro:'troppo stretta',tr:'çok dar',role:'K',note:'stretto/a = dar.'},
          {ro:'una taglia più grande',tr:'daha büyük beden',role:'phrase',note:'più grande = daha büyük.'}
        ]
      }]
    },
    {
      id:'w19',
      en:'i saldi',
      ro:'i SAL-di',
      tr:'indirim sezonu',
      tip:'Yılda iki kez: kış ve yaz indirimleri.',
      ctx:'Sezonluk alışveriş.',
      examples:[{
        en:'I saldi invernali iniziano a gennaio.',
        tr:'Kış indirimleri Ocak\'ta başlıyor.',
        bd:[
          {ro:'i saldi invernali',tr:'kış indirimleri',role:'O',note:'invernale = kış (sıfat).'}
        ]
      }]
    },
    {
      id:'w20',
      en:'cambiare / rimborsare',
      ro:'kam-BYA-re',
      tr:'değiştirmek / iade almak',
      tip:'Ürün iadesi ve değişimi.',
      ctx:'Mağaza iadesi.',
      examples:[{
        en:'Vorrei cambiare questa giacca. È troppo grande.',
        tr:'Bu ceketi değiştirmek istiyorum. Çok büyük.',
        bd:[
          {ro:'cambiare',tr:'değiştirmek',role:'V',note:'cambiare = değiştirmek.'},
          {ro:'troppo grande',tr:'çok büyük',role:'K',note:'troppo + sıfat = çok.'}
        ]
      }]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'questo / quella — Bu / Şu, O',
      title_en:'Demonstrative Adjectives: questo / quello',
      explanation:'"questo" (bu) ve "quello" (şu/o) gösterme sıfatlarıdır ve isimlere göre çekimlenir. questo: eril tekil = questo, dişil tekil = questa, eril çoğul = questi, dişil çoğul = queste. quello: eril tekil = quello/quel, dişil tekil = quella.',
      table:[
        {pronoun:'Eril tekil',form:'questo / quello',example:'questo libro / quel libro',tr:'bu kitap / o kitap'},
        {pronoun:'Dişil tekil',form:'questa / quella',example:'questa borsa / quella borsa',tr:'bu çanta / o çanta'},
        {pronoun:'Eril çoğul',form:'questi / quei',example:'questi vestiti / quei vestiti',tr:'bu giysiler / o giysiler'},
        {pronoun:'Dişil çoğul',form:'queste / quelle',example:'queste borse / quelle borse',tr:'bu çantalar / o çantalar'}
      ],
      note:'Alışverişte en çok "questo/questa" kullanılır. "Quello/quella" = uzaktaki nesne için.'
    },
    {
      id:'g2',
      title:'Renk Sıfatları ve Cinsiyet Uyumu',
      title_en:'Color Adjectives',
      explanation:'İtalyancada sıfatlar isimlere cinsiyet ve sayıda uyar. Bitiş -o/-a: rosso/rossa (kırmızı), nero/nera (siyah), bianco/bianca (beyaz). Bitiş -e (değişmez): verde (yeşil), marrone (kahverengi). Renk ismin SONUNA gelir.',
      table:[
        {pronoun:'Kırmızı',form:'rosso/rossa',example:'un cappello rosso / una borsa rossa',tr:'kırmızı şapka / kırmızı çanta'},
        {pronoun:'Siyah',form:'nero/nera',example:'scarpe nere / un vestito nero',tr:'siyah ayakkabı / siyah elbise'},
        {pronoun:'Beyaz',form:'bianco/bianca',example:'una camicia bianca',tr:'beyaz gömlek'},
        {pronoun:'Değişmez',form:'verde / marrone',example:'una giacca verde',tr:'yeşil ceket'}
      ],
      note:'Rengi isimden SONRA söyle: "una borsa rossa" (kırmızı bir çanta).'
    },
    {
      id:'g3',
      title:'Fiyat Soruları ve Pazarlık',
      title_en:'Price Questions and Bargaining',
      explanation:'Fiyat sormak: "Quanto costa?" (tekil) / "Quanto costano?" (çoğul). Satın alırken: "Lo/La prendo" (eril/dişil). Çok pahalı: "È troppo caro/a". İndirim istemek: "Mi fa uno sconto?" Ödeme: "Pago con carta / in contanti".',
      table:[
        {pronoun:'Tekil fiyat',form:'Quanto costa?',example:'Quanto costa questa borsa?',tr:'Bu çanta ne kadar?'},
        {pronoun:'Çoğul fiyat',form:'Quanto costano?',example:'Quanto costano queste scarpe?',tr:'Bu ayakkabılar ne kadar?'},
        {pronoun:'Alıyorum',form:'Lo/La prendo.',example:'Perfetto, la prendo!',tr:'Mükemmel, bunu alıyorum!'},
        {pronoun:'İndirim',form:'Mi fa uno sconto?',example:'È caro. Mi fa uno sconto?',tr:'Pahalı. İndirim yapabilir misiniz?'}
      ],
      note:'"Lo prendo" = bunu alıyorum (eril nesne). "La prendo" = bunu alıyorum (dişil nesne).'
    }
  ],
  speaking:[
    {id:'sp1',en:'Quanto costa questa giacca?',tr:'Bu ceket ne kadar?',prompt:'Fiyat sor'},
    {id:'sp2',en:'L\'avete in nero e in taglia M?',tr:'Siyah ve M beden var mı?',prompt:'Renk ve beden sor'},
    {id:'sp3',en:'Posso provarlo nel camerino?',tr:'Soyunma odasında deneyebilir miyim?',prompt:'Deneme isteği'},
    {id:'sp4',en:'È un po\' troppo caro. Mi fa uno sconto?',tr:'Biraz fazla pahalı. İndirim yapabilir misiniz?',prompt:'Pazarlık et'},
    {id:'sp5',en:'Va bene, lo prendo! Posso pagare con carta?',tr:'Tamam, alıyorum! Kartla ödeyebilir miyim?',prompt:'Satın al ve ödeme sor'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Giyim Mağazasında',
      title_en:'At the Clothing Store',
      lines:[
        {speaker:'A',gender:'m',en:'Buongiorno. Cerco una camicia elegante.',tr:'Günaydın. Şık bir gömlek arıyorum.',
          bd:[{ro:'Cerco una camicia',tr:'Bir gömlek arıyorum',role:'phrase',note:'cercare = aramak.'}]},
        {speaker:'B',gender:'f',en:'Che colore preferisce? Blu o bianco?',tr:'Hangi rengi tercih edersiniz? Mavi mi beyaz mı?',
          bd:[{ro:'preferisce',tr:'tercih edersiniz',role:'V',note:'preferire — Lei formu.'}]},
        {speaker:'A',gender:'m',en:'Blu. Che taglia? Sono una M.',tr:'Mavi. Kaç beden? Ben M bedenim.',
          bd:[{ro:'Sono una M',tr:'M bedenim',role:'phrase',note:'essere + beden.'}]},
        {speaker:'B',gender:'f',en:'Ecco, provi questa.',tr:'İşte, şunu deneyin.',
          bd:[{ro:'provi',tr:'deneyin',role:'V',note:'provare — Lei emir: provi.'}]},
        {speaker:'A',gender:'m',en:'Hmm, è un po\' stretta. Avete una L?',tr:'Hmm, biraz dar. L var mı?',
          bd:[{ro:'stretta',tr:'dar',role:'K',note:'stretto/a = dar.'}]},
        {speaker:'B',gender:'f',en:'Eccola in L. Come va?',tr:'İşte L beden. Nasıl uydu?',
          bd:[]},
        {speaker:'A',gender:'m',en:'Perfetta! Quanto costa?',tr:'Mükemmel! Ne kadar?',
          bd:[{ro:'Perfetta',tr:'Mükemmel (dişil)',role:'K',note:'camicia dişil → perfetta.'}]},
        {speaker:'B',gender:'f',en:'Costa quaranta euro.',tr:'Kırk euro.',bd:[]},
        {speaker:'A',gender:'m',en:'Va bene, la prendo!',tr:'Tamam, alıyorum!',
          bd:[{ro:'la prendo',tr:'alıyorum (dişil)',role:'phrase',note:'la = camicia (dişil).'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Oggi sono ai saldi. Cerco un paio di scarpe nere. Costano sessanta euro, ma con lo sconto del venti percento vengono quarantotto euro. La prendo! Pago con carta.',
      tr:'Bugün indirim sezonundayım. Bir çift siyah ayakkabı arıyorum. Altmış euro, ama yüzde yirmi indirimle kırk sekiz euro oluyor. Alıyorum! Kartla ödüyorum.',
      questions:[
        {q:'Cosa cerca?',opts:['Una borsa','Una giacca','Scarpe nere','Un vestito'],answer:2,tr:'Ne arıyor?'},
        {q:'Quanto costano le scarpe senza sconto?',opts:['48 €','50 €','60 €','80 €'],answer:2,tr:'İndirimsiz fiyat ne?'},
        {q:'Come paga?',opts:['Con contanti','Con carta','Non paga','Con assegno'],answer:1,tr:'Nasıl ödüyor?'}
      ]
    }
  ],
  tones:[]
};
LESSONS[6] = L6;
