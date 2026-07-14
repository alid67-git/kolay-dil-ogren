// ders33.js — Italian Lesson 33: Natura e ambiente (Doğa ve Çevre)
const L33 = {
  words:[
    {id:'w1',en:'il bosco / la foresta',ro:'il bosco',tr:'orman / büyük orman',examples:[{it:'Camminare nel bosco di sera è molto rilassante.',tr:'Akşamları ormanda yürümek çok rahatlayıcı.',bd:[{ro:'Camminare nel bosco',tr:'ormanda yürümek'},{ro:'molto rilassante',tr:'çok rahatlayıcı'}]}]},
    {id:'w2',en:'il mare / l\'oceano',ro:'il mare',tr:'deniz / okyanus',examples:[{it:'Il Mediterraneo è il mare che bagna le coste italiane.',tr:'Akdeniz İtalya kıyılarını yıkayan deniz.',bd:[{ro:'Il Mediterraneo',tr:'Akdeniz'},{ro:'che bagna le coste italiane',tr:'İtalya kıyılarını yıkayan'}]}]},
    {id:'w3',en:'la montagna / la collina',ro:'la montagna',tr:'dağ / tepe',examples:[{it:'Le Dolomiti sono tra le montagne più belle d\'Europa.',tr:'Dolomitler Avrupa\'nın en güzel dağları arasında.',bd:[{ro:'Le Dolomiti',tr:'Dolomitler'},{ro:'tra le montagne più belle d\'Europa',tr:'Avrupa\'nın en güzel dağları arasında'}]}]},
    {id:'w4',en:'il fiume / il lago',ro:'il fiume',tr:'nehir / göl',examples:[{it:'Il Tevere è il fiume che attraversa Roma fino al mare.',tr:'Tevere, Roma\'yı denize kadar geçen nehir.',bd:[{ro:'Il Tevere',tr:'Tevere nehri'},{ro:'che attraversa Roma',tr:'Roma\'yı geçen'}]}]},
    {id:'w5',en:'il fiore / la pianta',ro:'il fiore',tr:'çiçek / bitki',examples:[{it:'In primavera i prati italiani si riempiono di fiori selvatici colorati.',tr:'İlkbaharda İtalya çayırları renkli yabani çiçeklerle doluyor.',bd:[{ro:'i prati italiani',tr:'İtalya çayırları'},{ro:'fiori selvatici colorati',tr:'renkli yabani çiçekler'}]}]},
    {id:'w6',en:'l\'albero / il prato',ro:'l\'albero',tr:'ağaç / çayır',examples:[{it:'Sotto quell\'antico albero di ulivo si riposava per ore.',tr:'O antik zeytin ağacının altında saatlerce dinlenirdi.',bd:[{ro:'quell\'antico albero di ulivo',tr:'o antik zeytin ağacı'},{ro:'si riposava per ore',tr:'saatlerce dinlenirdi'}]}]},
    {id:'w7',en:'l\'animale / la fauna',ro:'l\'animale',tr:'hayvan / fauna',examples:[{it:'In Sardegna ci sono animali selvatici rari come il cervo sardo.',tr:'Sardunya\'da Sardinya geyiği gibi nadir vahşi hayvanlar var.',bd:[{ro:'animali selvatici rari',tr:'nadir vahşi hayvanlar'},{ro:'il cervo sardo',tr:'Sardinya geyiği'}]}]},
    {id:'w8',en:'il clima / il cambiamento climatico',ro:'il clima',tr:'iklim / iklim değişikliği',examples:[{it:'Il cambiamento climatico sta colpendo duramente le regioni italiane.',tr:'İklim değişikliği İtalya bölgelerini sert vurdu.',bd:[{ro:'Il cambiamento climatico',tr:'iklim değişikliği'},{ro:'sta colpendo duramente',tr:'sert vuruyor (şu an)'}]}]},
    {id:'w9',en:'l\'inquinamento / l\'aria pulita',ro:'l\'inquinamento',tr:'kirlilik / temiz hava',examples:[{it:'L\'inquinamento atmosferico nelle grandi città è un problema serio.',tr:'Büyük şehirlerde atmosfer kirliliği ciddi bir sorun.',bd:[{ro:'L\'inquinamento atmosferico',tr:'atmosfer kirliliği'},{ro:'un problema serio',tr:'ciddi bir sorun'}]}]},
    {id:'w10',en:'riciclare / i rifiuti',ro:'riciclare',tr:'geri dönüştürmek / çöp',examples:[{it:'In Italia è obbligatorio fare la raccolta differenziata dei rifiuti.',tr:'İtalya\'da çöpleri ayrı toplamak zorunlu.',bd:[{ro:'la raccolta differenziata dei rifiuti',tr:'çöpleri ayrı toplama'},{ro:'è obbligatorio',tr:'zorunlu'}]}]},
    {id:'w11',en:'l\'energia rinnovabile / il solare',ro:'l\'energia rinnovabile',tr:'yenilenebilir enerji / güneş enerjisi',examples:[{it:'Molte famiglie italiane hanno installato pannelli solari sul tetto.',tr:'Pek çok İtalyan aile çatıya güneş paneli kurdu.',bd:[{ro:'pannelli solari sul tetto',tr:'çatıda güneş panelleri'},{ro:'hanno installato',tr:'kurdu'}]}]},
    {id:'w12',en:'il terremoto / il vulcano',ro:'il terremoto',tr:'deprem / yanardağ',examples:[{it:'Il Vesuvio è il vulcano più famoso d\'Italia, ancora attivo.',tr:'Vezüv İtalya\'nın en ünlü yanardağı, hâlâ aktif.',bd:[{ro:'Il Vesuvio',tr:'Vezüv'},{ro:'ancora attivo',tr:'hâlâ aktif'}]}]},
    {id:'w13',en:'la siccità / l\'alluvione',ro:'la siccità',tr:'kuraklık / sel',examples:[{it:'Quest\'estate la siccità ha colpito il Sud Italia pesantemente.',tr:'Bu yaz kuraklık Güney İtalya\'yı ağır vurdu.',bd:[{ro:'la siccità ha colpito',tr:'kuraklık vurdu'},{ro:'il Sud Italia pesantemente',tr:'Güney İtalya\'yı ağır'}]}]},
    {id:'w14',en:'la biodiversità / l\'ecosistema',ro:'la biodiversità',tr:'biyoçeşitlilik / ekosistem',examples:[{it:'Il Parco Nazionale del Gran Paradiso protegge la biodiversità alpina.',tr:'Gran Paradiso Milli Parkı Alp biyoçeşitliliğini koruyor.',bd:[{ro:'Il Parco Nazionale del Gran Paradiso',tr:'Gran Paradiso Milli Parkı'},{ro:'protegge la biodiversità alpina',tr:'Alp biyoçeşitliliğini koruyor'}]}]},
    {id:'w15',en:'la costa / la spiaggia / la scogliera',ro:'la costa',tr:'kıyı / plaj / kayalık',examples:[{it:'Le scogliere di Positano sono tra le più spettacolari del Mediterraneo.',tr:'Positano kayalıkları Akdeniz\'in en muhteşemleri arasında.',bd:[{ro:'Le scogliere di Positano',tr:'Positano kayalıkları'},{ro:'tra le più spettacolari del Mediterraneo',tr:'Akdeniz\'in en muhteşemleri arasında'}]}]},
    {id:'w16',en:'la neve / il ghiaccio',ro:'la neve',tr:'kar / buz',examples:[{it:'In inverno le Alpi si coprono di neve e si trasformano in paradiso per gli sciatori.',tr:'Kışın Alpler karla örtülür ve kayakçılar için cennete dönüşür.',bd:[{ro:'si coprono di neve',tr:'karla örtülür'},{ro:'si trasformano in paradiso',tr:'cennete dönüşür'}]}]},
    {id:'w17',en:'il sole / la luna / le stelle',ro:'il sole',tr:'güneş / ay / yıldızlar',examples:[{it:'In una notte limpida di montagna si vedono migliaia di stelle.',tr:'Temiz bir dağ gecesinde binlerce yıldız görülür.',bd:[{ro:'In una notte limpida di montagna',tr:'temiz bir dağ gecesinde'},{ro:'migliaia di stelle',tr:'binlerce yıldız'}]}]},
    {id:'w18',en:'proteggere / preservare',ro:'proteggere',tr:'korumak / muhafaza etmek',examples:[{it:'Dobbiamo proteggere l\'ambiente per le generazioni future.',tr:'Gelecek nesiller için çevreyi korumalıyız.',bd:[{ro:'Dobbiamo proteggere l\'ambiente',tr:'çevreyi korumalıyız'},{ro:'per le generazioni future',tr:'gelecek nesiller için'}]}]},
    {id:'w19',en:'sostenibile / ecologico',ro:'sostenibile',tr:'sürdürülebilir / ekolojik',examples:[{it:'Acquisto solo prodotti biologici e cerco di avere uno stile di vita sostenibile.',tr:'Sadece organik ürünler satın alıyorum ve sürdürülebilir bir yaşam tarzı edinmeye çalışıyorum.',bd:[{ro:'prodotti biologici',tr:'organik ürünler'},{ro:'uno stile di vita sostenibile',tr:'sürdürülebilir bir yaşam tarzı'}]}]},
    {id:'w20',en:'la natura selvaggia / il paesaggio',ro:'il paesaggio',tr:'vahşi doğa / manzara / peyzaj',examples:[{it:'Il paesaggio toscano con cipressi e vigneti è unico al mondo.',tr:'Serviler ve bağlarıyla Toskana manzarası dünyada eşsiz.',bd:[{ro:'Il paesaggio toscano',tr:'Toskana manzarası'},{ro:'con cipressi e vigneti',tr:'serviler ve bağlarıyla'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Congiuntivo: Fikir ve Endişe İfadesi',
      title_en:'Subjunctive: Expressing Opinions and Concerns',
      explanation:'"Penso/Credo/Spero che..." sonrasında congiuntivo presente gelir.',
      table:[
        {pronoun:'Penso che',form:'+ congiuntivo',example:'Penso che il problema sia molto grave.',tr:'Sorunun çok ciddi olduğunu düşünüyorum.'},
        {pronoun:'Spero che',form:'+ congiuntivo',example:'Spero che la situazione migliori presto.',tr:'Durumun yakında düzeleceğini umuyorum.'},
        {pronoun:'È importante che',form:'+ congiuntivo',example:'È importante che tutti riciclino.',tr:'Herkesin geri dönüştürmesi önemli.'},
        {pronoun:'Credo che',form:'+ congiuntivo',example:'Credo che l\'ambiente sia in pericolo.',tr:'Çevrenin tehlikede olduğuna inanıyorum.'}
      ],
      note:'Congiuntivo presente: parlare → parli/parli/parli/parliamo/parliate/parlino. Essere → sia/sia/sia/siamo/siate/siano. Avere → abbia.'
    },
    {
      id:'g2',
      title:'Passivo: Çevresel Eylemler',
      title_en:'Passive Voice: Environmental Actions',
      explanation:'Çevre konularında passivo (edilgen çatı) sık kullanılır.',
      table:[
        {pronoun:'essere + participio',form:'geniş zaman passivo',example:'I rifiuti vengono riciclati ogni settimana.',tr:'Çöpler her hafta geri dönüştürülüyor.'},
        {pronoun:'si + verbo',form:'impersonale (halk aktif)',example:'In Italia si fa la raccolta differenziata.',tr:'İtalya\'da ayrı çöp toplama yapılıyor.'},
        {pronoun:'venire + participio',form:'eylem passivo',example:'Le foreste vengono protette dalla legge.',tr:'Ormanlar yasa tarafından korunuyor.'},
        {pronoun:'è stato + participio',form:'geçmiş passivo',example:'Il parco è stato creato nel 1922.',tr:'Park 1922\'de kuruldu.'}
      ],
      note:'"Si ricicla", "si risparmia", "si riduce" — impersonale yapı çevre bağlamında çok yaygın.'
    },
    {
      id:'g3',
      title:'Lessico Ambientale: Çevre Kelime Hazinesi',
      title_en:'Environmental Vocabulary in Context',
      explanation:'Çevre ve doğa konularında konuşmak için gerekli yapılar.',
      table:[
        {pronoun:'a causa di',form:'nedeniyle',example:'A causa dell\'inquinamento, l\'aria è irrespirabile.',tr:'Kirlilik nedeniyle hava solunaksız.'},
        {pronoun:'grazie a',form:'sayesinde',example:'Grazie alle energie rinnovabili, riduciamo le emissioni.',tr:'Yenilenebilir enerji sayesinde emisyonları azaltıyoruz.'},
        {pronoun:'bisogna + inf.',form:'gerekli (genelleştirilmiş)',example:'Bisogna ridurre i rifiuti plastici.',tr:'Plastik atıkları azaltmak gerekiyor.'},
        {pronoun:'se non facciamo',form:'koşul: yapmazsak',example:'Se non agiamo subito, le conseguenze saranno gravi.',tr:'Hemen harekete geçmezsek sonuçlar ağır olacak.'}
      ],
      note:'"L\'impronta ecologica" = ekolojik ayak izi. "Emissioni di CO2" = CO2 emisyonları. "Energia pulita" = temiz enerji. Bunlar gazete ve haberlerde çok yaygın.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Penso che il cambiamento climatico sia la sfida più grande del nostro tempo.',tr:'İklim değişikliğinin zamanımızın en büyük zorluğu olduğunu düşünüyorum.',prompt:'Çevre görüşünü belirt'},
    {id:'sp2',en:'Nel mio quartiere facciamo la raccolta differenziata ogni giorno.',tr:'Mahallemizde her gün ayrı çöp toplama yapıyoruz.',prompt:'Günlük çevre alışkanlığı'},
    {id:'sp3',en:'Il paesaggio della Toscana è così bello che mi viene da piangere.',tr:'Toskana manzarası o kadar güzel ki ağlayacak gibi oluyorum.',prompt:'Doğa güzelliği'},
    {id:'sp4',en:'Bisogna ridurre la plastica: uso sempre la borraccia e le borse riutilizzabili.',tr:'Plastiği azaltmak gerekiyor: her zaman matara ve yeniden kullanılabilir çanta kullanıyorum.',prompt:'Sürdürülebilir alışkanlık'},
    {id:'sp5',en:'Ho visto l\'Etna in eruzione — è stato uno spettacolo straordinario e un po\' spaventoso!',tr:'Etna\'yı patlarken gördüm — olağanüstü ve biraz korkutucu bir gösteriydi!',prompt:'Doğa olayı anlat'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Doğayı Korumak Hakkında',
      title_en:'About Protecting Nature',
      lines:[
        {speaker:'A',gender:'m',en:'Hai letto del nuovo rapporto sul clima? La situazione è peggiorata.',tr:'İklim hakkındaki yeni raporu okudun mu? Durum kötüleşti.',bd:[{ro:'Hai letto del nuovo rapporto?',tr:'yeni raporu okudun mu?',role:'question'},{ro:'la situazione è peggiorata',tr:'durum kötüleşti',role:'statement'}]},
        {speaker:'B',gender:'f',en:'Sì, è preoccupante. Penso che i governi debbano agire immediatamente.',tr:'Evet, endişe verici. Hükümetlerin hemen harekete geçmesi gerektiğini düşünüyorum.',bd:[{ro:'è preoccupante',tr:'endişe verici',role:'adjective'},{ro:'debbano agire immediatamente',tr:'hemen harekete geçmesi gerekiyor (congiuntivo)',role:'subjunctive'}]},
        {speaker:'A',gender:'m',en:'Anch\'io. Ma credo che ogni individuo possa fare qualcosa. Io ho installato i pannelli solari.',tr:'Ben de. Ama her bireyin bir şeyler yapabileceğine inanıyorum. Ben güneş paneli kurdum.',bd:[{ro:'ogni individuo possa fare qualcosa',tr:'her bireyin bir şeyler yapabileceğine (congiuntivo)',role:'subjunctive'},{ro:'ho installato i pannelli solari',tr:'güneş paneli kurdum',role:'past'}]},
        {speaker:'B',gender:'f',en:'Ottima idea! Io invece ho smesso di mangiare carne per ridurre le emissioni.',tr:'Harika fikir! Ben ise emisyonları azaltmak için et yemeyi bıraktım.',bd:[{ro:'ho smesso di mangiare carne',tr:'et yemeyi bıraktım',role:'past'},{ro:'per ridurre le emissioni',tr:'emisyonları azaltmak için',role:'purpose'}]},
        {speaker:'A',gender:'m',en:'Spero che le generazioni future abbiano un pianeta migliore del nostro.',tr:'Gelecek nesillerin bizimkinden daha iyi bir gezegene sahip olacağını umuyorum.',bd:[{ro:'Spero che le generazioni future abbiano',tr:'gelecek nesillerin sahip olmasını umuyorum (congiuntivo)',role:'subjunctive'},{ro:'un pianeta migliore',tr:'daha iyi bir gezegen',role:'hope'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'L\'Italia ha un patrimonio naturale straordinario. Dal Nord al Sud, il paesaggio cambia completamente: le Alpi con le loro vette innevate, la pianura padana, gli Appennini che attraversano tutta la penisola, e infine le coste meravigliose. L\'Italia ospita ventisette parchi nazionali. Tuttavia, il paese affronta sfide ambientali serie: l\'inquinamento nelle grandi città, il rischio idrogeologico, la siccità nel Sud e l\'erosione costiera.',
      tr:'İtalya olağanüstü bir doğal mirasa sahip. Kuzeyden Güneye manzara tamamen değişiyor: karlı zirveli Alpler, Po ovası, tüm yarımadayı kesen Apenin dağları ve son olarak muhteşem kıyılar. İtalya yirmi yedi milli parka ev sahipliği yapıyor. Ancak ülke ciddi çevresel zorluklarla karşı karşıya: büyük şehirlerde kirlilik, hidrolojik risk, Güney\'de kuraklık ve kıyı erozyonu.',
      questions:[
        {q:'İtalya\'da kaç milli park var?',opts:['On dört','Yirmi yedi','Kırk beş','Üç'],answer:1,tr:'Yirmi yedi (ventisette)'},
        {q:'Hangi coğrafi yapı tüm yarımadayı kesiyor?',opts:['Alpler','Po nehri','Apennin dağları','Akdeniz'],answer:2,tr:'Apennin dağları (gli Appennini)'},
        {q:'İtalya\'nın çevre sorunlarından biri nedir?',opts:['Çok fazla orman','Büyük şehirlerde kirlilik','Çok fazla yağış','Deniz kirliliği yok'],answer:1,tr:'Büyük şehirlerde kirlilik (inquinamento nelle grandi città)'}
      ]
    }
  ],
  tones:[]
};
LESSONS[33] = L33;
