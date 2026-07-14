// ders14.js — Italian Lesson 14: Home & Living (Ev ve Yaşam)
const L14 = {
  words:[
    {
      id:'w1',
      en:'la casa / l\'abitazione',
      ro:'la casa',
      tr:'ev / konut',
      tip:'"Casa" = ev (genel); "abitazione" daha resmi.',
      ctx:'Ev ve konut konuşmaları.',
      examples:[
        {
          it:'Sono a casa, vieni a trovarmi!',
          tr:'Evdeyim, ziyarete gel!',
          bd:[{ro:'Sono a casa',tr:'evdeyim'},{ro:'vieni a trovarmi',tr:'ziyarete gel'}]
        }
      ]
    },
    {
      id:'w2',
      en:'l\'appartamento / il bilocale',
      ro:'l\'appartamento',
      tr:'daire / iki odalı daire',
      examples:[
        {
          it:'Ho preso in affitto un appartamento in centro.',
          tr:'Şehir merkezinde bir daire kiraladım.',
          bd:[{ro:'Ho preso in affitto',tr:'kiraladım'},{ro:'un appartamento in centro',tr:'şehir merkezinde bir daire'}]
        }
      ]
    },
    {
      id:'w3',
      en:'l\'affitto / il canone',
      ro:'l\'affitto',
      tr:'kira / kira bedeli',
      examples:[
        {
          it:'L\'affitto è di ottocento euro al mese.',
          tr:'Kira aylık sekiz yüz euro.',
          bd:[{ro:'L\'affitto è di',tr:'kira ... dir'},{ro:'ottocento euro al mese',tr:'aylık sekiz yüz euro'}]
        }
      ]
    },
    {
      id:'w4',
      en:'la cucina',
      ro:'la cucina',
      tr:'mutfak',
      examples:[
        {
          it:'La cucina è piccola ma ben attrezzata.',
          tr:'Mutfak küçük ama iyi donanımlı.',
          bd:[{ro:'La cucina è piccola',tr:'mutfak küçük'},{ro:'ma ben attrezzata',tr:'ama iyi donanımlı'}]
        }
      ]
    },
    {
      id:'w5',
      en:'il salotto / il soggiorno',
      ro:'il salotto',
      tr:'oturma odası',
      examples:[
        {
          it:'Il salotto è grande e luminoso.',
          tr:'Oturma odası geniş ve aydınlık.',
          bd:[{ro:'Il salotto è',tr:'oturma odası'},{ro:'grande e luminoso',tr:'geniş ve aydınlık'}]
        }
      ]
    },
    {
      id:'w6',
      en:'la camera da letto',
      ro:'la camera da letto',
      tr:'yatak odası',
      examples:[
        {
          it:'L\'appartamento ha due camere da letto.',
          tr:'Dairenin iki yatak odası var.',
          bd:[{ro:'L\'appartamento ha',tr:'dairenin var'},{ro:'due camere da letto',tr:'iki yatak odası'}]
        }
      ]
    },
    {
      id:'w7',
      en:'il bagno / la doccia',
      ro:'il bagno',
      tr:'banyo / duş',
      examples:[
        {
          it:'Il bagno è in fondo al corridoio.',
          tr:'Banyo koridorun sonunda.',
          bd:[{ro:'Il bagno è',tr:'banyo'},{ro:'in fondo al corridoio',tr:'koridorun sonunda'}]
        }
      ]
    },
    {
      id:'w8',
      en:'il balcone / il terrazzo',
      ro:'il balcone',
      tr:'balkon / teras',
      examples:[
        {
          it:'D\'estate mangiamo sul terrazzo.',
          tr:'Yazın terasta yemek yiyoruz.',
          bd:[{ro:'D\'estate',tr:'yazın'},{ro:'mangiamo sul terrazzo',tr:'terasta yemek yiyoruz'}]
        }
      ]
    },
    {
      id:'w9',
      en:'il garage / il parcheggio',
      ro:'il garage',
      tr:'garaj / otopark',
      examples:[
        {
          it:'L\'appartamento ha un garage in più.',
          tr:'Dairede ayrıca bir garaj var.',
          bd:[{ro:'ha un garage',tr:'garajı var'},{ro:'in più',tr:'ayrıca / bunun yanında'}]
        }
      ]
    },
    {
      id:'w10',
      en:'ammobiliato / vuoto',
      ro:'ammobiliato',
      tr:'eşyalı / boş',
      examples:[
        {
          it:'Cerco un appartamento ammobiliato.',
          tr:'Eşyalı bir daire arıyorum.',
          bd:[{ro:'Cerco',tr:'arıyorum'},{ro:'un appartamento ammobiliato',tr:'eşyalı bir daire'}]
        }
      ]
    },
    {
      id:'w11',
      en:'il proprietario / l\'inquilino',
      ro:'il proprietario',
      tr:'ev sahibi / kiracı',
      examples:[
        {
          it:'Il proprietario di casa è molto gentile.',
          tr:'Ev sahibi çok kibar.',
          bd:[{ro:'Il proprietario di casa',tr:'ev sahibi'},{ro:'è molto gentile',tr:'çok kibar'}]
        }
      ]
    },
    {
      id:'w12',
      en:'fare le pulizie / pulire',
      ro:'fare le pulizie',
      tr:'temizlik yapmak',
      examples:[
        {
          it:'Il sabato mattina faccio le pulizie di casa.',
          tr:'Cumartesi sabahı ev temizliği yapıyorum.',
          bd:[{ro:'Il sabato mattina',tr:'cumartesi sabahı'},{ro:'faccio le pulizie di casa',tr:'ev temizliği yapıyorum'}]
        }
      ]
    },
    {
      id:'w13',
      en:'fare la spesa / la spesa',
      ro:'fare la spesa',
      tr:'alışveriş yapmak (market)',
      examples:[
        {
          it:'Devo fare la spesa, il frigorifero è vuoto.',
          tr:'Alışveriş yapmam lazım, buzdolabı boş.',
          bd:[{ro:'Devo fare la spesa',tr:'alışveriş yapmalıyım'},{ro:'il frigorifero è vuoto',tr:'buzdolabı boş'}]
        }
      ]
    },
    {
      id:'w14',
      en:'cucinare / fare da mangiare',
      ro:'cucinare',
      tr:'yemek pişirmek',
      examples:[
        {
          it:'Stasera cucino io la pasta al ragù!',
          tr:'Bu akşam ragù soslu makarnayı ben pişiriyorum!',
          bd:[{ro:'Stasera cucino io',tr:'bu akşam ben pişiriyorum'},{ro:'la pasta al ragù',tr:'ragù soslu makarna'}]
        }
      ]
    },
    {
      id:'w15',
      en:'il riscaldamento / il condizionatore',
      ro:'il riscaldamento',
      tr:'ısıtma / klima',
      examples:[
        {
          it:'Il riscaldamento non funziona, fa freddo in casa.',
          tr:'Isıtma çalışmıyor, evde soğuk.',
          bd:[{ro:'Il riscaldamento non funziona',tr:'ısıtma çalışmıyor'},{ro:'fa freddo in casa',tr:'evde soğuk'}]
        }
      ]
    },
    {
      id:'w16',
      en:'le bollette / le utenze',
      ro:'le bollette',
      tr:'faturalar (elektrik, su, gaz)',
      examples:[
        {
          it:'Le bollette di luce e gas sono incluse nell\'affitto.',
          tr:'Elektrik ve gaz faturaları kiraya dahil.',
          bd:[{ro:'Le bollette di luce e gas',tr:'elektrik ve gaz faturaları'},{ro:'sono incluse',tr:'dahil'},{ro:'nell\'affitto',tr:'kiraya'}]
        }
      ]
    },
    {
      id:'w17',
      en:'vicino ai mezzi / ben collegato',
      ro:'vicino ai mezzi',
      tr:'ulaşıma yakın',
      examples:[
        {
          it:'L\'appartamento è comodo, vicino alla metro.',
          tr:'Daire kullanışlı, metroya yakın.',
          bd:[{ro:'è comodo',tr:'kullanışlı'},{ro:'vicino alla metro',tr:'metroya yakın'}]
        }
      ]
    },
    {
      id:'w18',
      en:'traslocare / il trasloco',
      ro:'traslocare',
      tr:'taşınmak / taşınma',
      examples:[
        {
          it:'Il mese prossimo mi trasferisco in un nuovo appartamento.',
          tr:'Gelecek ay yeni bir daireye taşınıyorum.',
          bd:[{ro:'Il mese prossimo',tr:'gelecek ay'},{ro:'mi trasferisco',tr:'taşınıyorum'},{ro:'in un nuovo appartamento',tr:'yeni bir daireye'}]
        }
      ]
    },
    {
      id:'w19',
      en:'cercare casa / l\'annuncio',
      ro:'cercare casa',
      tr:'ev aramak / ilan',
      examples:[
        {
          it:'Sto cercando casa da due mesi, è difficile.',
          tr:'İki aydır ev arıyorum, zor.',
          bd:[{ro:'Sto cercando casa',tr:'ev arıyorum'},{ro:'da due mesi',tr:'iki aydır'},{ro:'è difficile',tr:'zor'}]
        }
      ]
    },
    {
      id:'w20',
      en:'Benvenuto/a a casa!',
      ro:'Benvenuto a casa',
      tr:'Eve hoş geldin!',
      examples:[
        {
          it:'Entra, entra! Benvenuto a casa nostra!',
          tr:'Gir, gir! Evimize hoş geldin!',
          bd:[{ro:'Entra',tr:'gir'},{ro:'Benvenuto a casa nostra',tr:'evimize hoş geldin'}]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'Ev Tanımlama: C\'è / Ci sono',
      title_en:'Describing a Home: C\'è / Ci sono',
      explanation:'"C\'è" = "var (tekil)", "Ci sono" = "var (çoğul)". Bir evi tanımlarken bu yapılar çok kullanılır.',
      table:[
        {pronoun:'Tekil',form:'C\'è + isim (tekil)',example:'C\'è un balcone con vista sul giardino.',tr:'Bahçeye bakan bir balkon var.'},
        {pronoun:'Çoğul',form:'Ci sono + isim (çoğul)',example:'Ci sono tre camere da letto.',tr:'Üç yatak odası var.'},
        {pronoun:'Yok',form:'Non c\'è / Non ci sono',example:'Non c\'è il garage.',tr:'Garaj yok.'},
        {pronoun:'Soru',form:'C\'è...? / Ci sono...?',example:'C\'è l\'ascensore?',tr:'Asansör var mı?'}
      ],
      note:'"C\'è" = "ci è" kısaltması. Çok kullanışlı bir yapı — restoranda da, oteldo de, her yerde kullanılır.'
    },
    {
      id:'g2',
      title:'Ev Arama: İlan Dili',
      title_en:'House Hunting Vocabulary',
      explanation:'Ev ilanlarında sıkça karşılaşılan terimler ve kısaltmalar.',
      table:[
        {pronoun:'Büyüklük',form:'monolocale / bilocale / trilocale',example:'Affittasi bilocale in centro.',tr:'Şehir merkezinde iki oda kiralık.'},
        {pronoun:'Durum',form:'ristrutturato / da ristrutturare',example:'Appartamento appena ristrutturato.',tr:'Yeni tadilatlı daire.'},
        {pronoun:'Yön',form:'luminoso / soleggiato',example:'Appartamento luminoso al terzo piano.',tr:'Üçüncü katta aydınlık daire.'},
        {pronoun:'Dahil',form:'spese incluse / escluse',example:'Affitto 700€, spese escluse.',tr:'Kira 700€, faturalar hariç.'}
      ],
      note:'"Affittasi" = kiralık, "Vendesi" = satılık. İlan dilinde fiil başta gelir.'
    },
    {
      id:'g3',
      title:'Ev İşleri: Düzenli Aktiviteler',
      title_en:'Household Chores',
      explanation:'Ev işlerini anlatmak için kullanılan fiil ve ifadeler.',
      table:[
        {pronoun:'Temizlik',form:'fare le pulizie / pulire',example:'Pulisco il bagno ogni settimana.',tr:'Her hafta banyoyu temizliyorum.'},
        {pronoun:'Çamaşır',form:'fare il bucato / lavare',example:'Faccio il bucato due volte a settimana.',tr:'Haftada iki kez çamaşır yıkıyorum.'},
        {pronoun:'Alışveriş',form:'fare la spesa',example:'Faccio la spesa al supermercato.',tr:'Süpermarketten alışveriş yapıyorum.'},
        {pronoun:'Yemek',form:'cucinare / fare da mangiare',example:'Cucino io stasera!',tr:'Bu akşam ben pişiriyorum!'}
      ],
      note:'"Passare l\'aspirapolvere" = elektrikli süpürge çekmek. "Fare il letto" = yatak yapmak. "Sparecchiare" = masayı toplamak.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Cerco un appartamento ammobiliato vicino al centro.',tr:'Şehir merkezine yakın eşyalı bir daire arıyorum.',prompt:'Ev arama isteğini belirt'},
    {id:'sp2',en:'C\'è il garage e il balcone?',tr:'Garaj ve balkon var mı?',prompt:'Ev hakkında soru sor'},
    {id:'sp3',en:'L\'affitto è di settecento euro al mese, spese incluse.',tr:'Kira aylık yedi yüz euro, faturalar dahil.',prompt:'Kira bilgisi ver'},
    {id:'sp4',en:'Il sabato mattina faccio le pulizie e poi la spesa.',tr:'Cumartesi sabahı temizlik yapıp sonra alışveriş yapıyorum.',prompt:'Hafta sonu rutinini anlat'},
    {id:'sp5',en:'Benvenuto a casa nostra! Siediti!',tr:'Evimize hoş geldin! Otur!',prompt:'Misafiri karşıla'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Ev Görme',
      title_en:'Viewing a Flat',
      lines:[
        {
          speaker:'B',gender:'f',
          en:'Buongiorno! Prego, entri. Le mostro l\'appartamento.',
          tr:'Günaydın! Buyurun, girin. Size daireyi göstereyim.',
          gramNote:'Le mostro = size göstereyim (Lei formu)',
          bd:[
            {ro:'Prego, entri',tr:'buyurun girin',role:'invitation'},
            {ro:'Le mostro',tr:'size göstereyim',role:'verb',note:'Lei formu'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'Grazie. Com\'è strutturato l\'appartamento?',
          tr:'Teşekkürler. Daire nasıl bir yapıya sahip?',
          bd:[{ro:'Com\'è strutturato',tr:'nasıl yapılandırılmış',role:'question'}]
        },
        {
          speaker:'B',gender:'f',
          en:'È un trilocale: soggiorno, cucina, due camere da letto e un bagno.',
          tr:'Üç oda: oturma odası, mutfak, iki yatak odası ve bir banyo.',
          bd:[
            {ro:'È un trilocale',tr:'üç oda',role:'description'},
            {ro:'soggiorno',tr:'oturma odası',role:'room'},
            {ro:'cucina',tr:'mutfak',role:'room'},
            {ro:'due camere da letto',tr:'iki yatak odası',role:'room'},
            {ro:'un bagno',tr:'bir banyo',role:'room'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'C\'è il balcone? E il riscaldamento autonomo?',
          tr:'Balkon var mı? Bireysel ısıtma var mı?',
          bd:[
            {ro:'C\'è il balcone?',tr:'balkon var mı?',role:'question'},
            {ro:'il riscaldamento autonomo',tr:'bireysel ısıtma',role:'feature'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'Sì, c\'è un grande terrazzo e il riscaldamento è autonomo. L\'appartamento è molto luminoso.',
          tr:'Evet, büyük bir teras ve bireysel ısıtma var. Daire çok aydınlık.',
          bd:[
            {ro:'un grande terrazzo',tr:'büyük bir teras',role:'feature'},
            {ro:'il riscaldamento è autonomo',tr:'ısıtma bireysel',role:'feature'},
            {ro:'molto luminoso',tr:'çok aydınlık',role:'adjective'}
          ]
        },
        {
          speaker:'A',gender:'m',
          en:'Quant\'è l\'affitto mensile? Le spese sono incluse?',
          tr:'Aylık kira ne kadar? Faturalar dahil mi?',
          bd:[
            {ro:'Quant\'è l\'affitto mensile?',tr:'aylık kira ne kadar?',role:'price'},
            {ro:'Le spese sono incluse?',tr:'faturalar dahil mi?',role:'question'}
          ]
        },
        {
          speaker:'B',gender:'f',
          en:'Milleduecento euro al mese, spese di condominio incluse, luce e gas esclusi.',
          tr:'Aylık bin iki yüz euro, aidat dahil, elektrik ve gaz hariç.',
          bd:[
            {ro:'Milleduecento euro al mese',tr:'aylık bin iki yüz euro',role:'price'},
            {ro:'spese di condominio incluse',tr:'aidat dahil',role:'included'},
            {ro:'luce e gas esclusi',tr:'elektrik ve gaz hariç',role:'excluded'}
          ]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Affittasi appartamento ammobiliato al secondo piano. Bilocale con cucina separata, bagno e un piccolo balcone. Riscaldamento autonomo. Spese incluse. Ottocento euro al mese. Disponibile subito. Telefonare al numero 333-1234567.',
      tr:'İkinci katta eşyalı daire kiralık. Ayrı mutfaklı, banyolu ve küçük balkonlu iki oda. Bireysel ısıtma. Faturalar dahil. Aylık sekiz yüz euro. Hemen müsait. 333-1234567 numarasını arayın.',
      questions:[
        {
          q:'Daire kaç odalı?',
          opts:['Tek oda','İki oda','Üç oda','Dört oda'],
          answer:1,
          tr:'İki oda (bilocale)'
        },
        {
          q:'Faturalar dahil mi?',
          opts:['Hayır, hariç','Evet, dahil','Sadece elektrik dahil','Sadece gaz dahil'],
          answer:1,
          tr:'Evet, dahil (spese incluse)'
        },
        {
          q:'Aylık kira ne kadar?',
          opts:['Yedi yüz euro','Yedi yüz elli euro','Sekiz yüz euro','Bin euro'],
          answer:2,
          tr:'Sekiz yüz euro (ottocento euro)'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[14] = L14;
