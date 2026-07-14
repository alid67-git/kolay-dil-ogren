// ders18.js — Italian Lesson 18: Weather (Hava Durumu)
const L18 = {
  words:[
    {id:'w1',en:'il tempo / le previsioni',ro:'il tempo',tr:'hava / hava tahmini',examples:[{it:'Com\'è il tempo oggi? — È bello!',tr:'Bugün hava nasıl? — Güzel!',bd:[{ro:'Com\'è il tempo?',tr:'hava nasıl?'},{ro:'È bello',tr:'güzel'}]}]},
    {id:'w2',en:'fa bel tempo / fa brutto tempo',ro:'fa bel tempo',tr:'hava güzel / hava kötü',examples:[{it:'Oggi fa bel tempo, andiamo al parco!',tr:'Bugün hava güzel, parka gidelim!',bd:[{ro:'Oggi fa bel tempo',tr:'bugün hava güzel'},{ro:'andiamo al parco',tr:'parka gidelim'}]}]},
    {id:'w3',en:'il sole / c\'è il sole',ro:'il sole',tr:'güneş / güneşli',examples:[{it:'C\'è il sole ma fa freddo.',tr:'Güneş var ama hava soğuk.',bd:[{ro:'C\'è il sole',tr:'güneş var'},{ro:'ma fa freddo',tr:'ama soğuk'}]}]},
    {id:'w4',en:'la pioggia / piove',ro:'piove',tr:'yağmur / yağıyor',examples:[{it:'Piove a dirotto, prendi l\'ombrello!',tr:'Bardaktan boşanırcasına yağıyor, şemsiyeni al!',bd:[{ro:'Piove a dirotto',tr:'bardaktan boşanırcasına yağıyor'},{ro:'prendi l\'ombrello',tr:'şemsiyeni al'}]}]},
    {id:'w5',en:'la neve / nevica',ro:'nevica',tr:'kar / kar yağıyor',examples:[{it:'Stamattina nevicava, la strada è ghiacciata.',tr:'Bu sabah kar yağıyordu, yol buzluydu.',bd:[{ro:'Stamattina nevicava',tr:'bu sabah kar yağıyordu'},{ro:'la strada è ghiacciata',tr:'yol buzluydu'}]}]},
    {id:'w6',en:'il vento / c\'è vento',ro:'il vento',tr:'rüzgar / rüzgarlı',examples:[{it:'C\'è molto vento, non riesco ad aprire l\'ombrello.',tr:'Çok rüzgarlı, şemsiyemi açamıyorum.',bd:[{ro:'C\'è molto vento',tr:'çok rüzgarlı'},{ro:'non riesco ad aprire',tr:'açamıyorum'}]}]},
    {id:'w7',en:'nuvoloso / le nuvole',ro:'nuvoloso',tr:'bulutlu / bulutlar',examples:[{it:'Oggi è nuvoloso, non vedo il sole.',tr:'Bugün bulutlu, güneşi göremiyorum.',bd:[{ro:'Oggi è nuvoloso',tr:'bugün bulutlu'},{ro:'non vedo il sole',tr:'güneşi göremiyorum'}]}]},
    {id:'w8',en:'fa caldo / fa freddo',ro:'fa caldo',tr:'sıcak / soğuk (hava)',examples:[{it:'D\'estate fa molto caldo in Italia.',tr:'İtalya\'da yazın çok sıcak olur.',bd:[{ro:'D\'estate',tr:'yazın'},{ro:'fa molto caldo',tr:'çok sıcak'}]}]},
    {id:'w9',en:'la temperatura',ro:'la temperatura',tr:'sıcaklık',examples:[{it:'La temperatura oggi è di ventidue gradi.',tr:'Bugün sıcaklık yirmi iki derece.',bd:[{ro:'La temperatura oggi è di',tr:'bugünün sıcaklığı'},{ro:'ventidue gradi',tr:'yirmi iki derece'}]}]},
    {id:'w10',en:'la stagione',ro:'la stagione',tr:'mevsim',examples:[{it:'La mia stagione preferita è la primavera.',tr:'En sevdiğim mevsim ilkbahar.',bd:[{ro:'La mia stagione preferita',tr:'en sevdiğim mevsim'},{ro:'è la primavera',tr:'ilkbahardır'}]}]},
    {id:'w11',en:'la primavera / l\'estate',ro:'la primavera',tr:'ilkbahar / yaz',examples:[{it:'In primavera i fiori sbocciano.',tr:'İlkbaharda çiçekler açar.',bd:[{ro:'In primavera',tr:'ilkbaharda'},{ro:'i fiori sbocciano',tr:'çiçekler açar'}]}]},
    {id:'w12',en:'l\'autunno / l\'inverno',ro:'l\'autunno',tr:'sonbahar / kış',examples:[{it:'In autunno le foglie cadono dagli alberi.',tr:'Sonbaharda yapraklar ağaçlardan düşer.',bd:[{ro:'In autunno',tr:'sonbaharda'},{ro:'le foglie cadono',tr:'yapraklar düşer'},{ro:'dagli alberi',tr:'ağaçlardan'}]}]},
    {id:'w13',en:'il temporale / il tuono',ro:'il temporale',tr:'fırtına / gök gürültüsü',examples:[{it:'Si sta avvicinando un temporale.',tr:'Bir fırtına yaklaşıyor.',bd:[{ro:'Si sta avvicinando',tr:'yaklaşıyor'},{ro:'un temporale',tr:'bir fırtına'}]}]},
    {id:'w14',en:'il fulmine / il lampo',ro:'il fulmine',tr:'yıldırım / şimşek',examples:[{it:'Ho visto un lampo in cielo!',tr:'Gökyüzünde bir şimşek gördüm!',bd:[{ro:'Ho visto un lampo',tr:'bir şimşek gördüm'},{ro:'in cielo',tr:'gökyüzünde'}]}]},
    {id:'w15',en:'l\'ombrello',ro:'l\'ombrello',tr:'şemsiye',examples:[{it:'Ho dimenticato l\'ombrello e mi sono bagnato tutto.',tr:'Şemsiyemi unuttum ve tamamen ıslandım.',bd:[{ro:'Ho dimenticato l\'ombrello',tr:'şemsiyemi unuttum'},{ro:'mi sono bagnato tutto',tr:'tamamen ıslandım'}]}]},
    {id:'w16',en:'umido / secco',ro:'umido',tr:'nemli / kuru',examples:[{it:'L\'estate a Roma è calda e umida.',tr:'Roma\'da yaz sıcak ve nemlidir.',bd:[{ro:'L\'estate a Roma',tr:'Roma\'da yaz'},{ro:'è calda e umida',tr:'sıcak ve nemlidir'}]}]},
    {id:'w17',en:'il cielo / sereno',ro:'il cielo',tr:'gökyüzü / açık',examples:[{it:'Il cielo è sereno e azzurro oggi.',tr:'Bugün gökyüzü açık ve mavi.',bd:[{ro:'Il cielo è sereno e azzurro',tr:'gökyüzü açık ve mavi'},{ro:'oggi',tr:'bugün'}]}]},
    {id:'w18',en:'gelare / il ghiaccio',ro:'gelare',tr:'donmak / buz',examples:[{it:'Stanotte le temperature scenderanno sotto zero: attenzione al ghiaccio!',tr:'Bu gece sıcaklıklar sıfırın altına inecek: buz dikkat!',bd:[{ro:'le temperature scenderanno sotto zero',tr:'sıcaklıklar sıfırın altına inecek'},{ro:'attenzione al ghiaccio',tr:'buza dikkat'}]}]},
    {id:'w19',en:'che tempo fa?',ro:'che tempo fa?',tr:'hava nasıl?',examples:[{it:'Che tempo fa a Roma in questo periodo?',tr:'Bu dönemde Roma\'da hava nasıl?',bd:[{ro:'Che tempo fa',tr:'hava nasıl'},{ro:'a Roma in questo periodo',tr:'Roma\'da bu dönemde'}]}]},
    {id:'w20',en:'le previsioni del tempo',ro:'le previsioni',tr:'hava tahmini',examples:[{it:'Secondo le previsioni domani pioverà.',tr:'Tahminlere göre yarın yağmur yağacak.',bd:[{ro:'Secondo le previsioni',tr:'tahminlere göre'},{ro:'domani pioverà',tr:'yarın yağacak'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Hava Durumu: "Fa", "C\'è", "Piove"',
      title_en:'Weather Expressions',
      explanation:'İtalyanca\'da hava durumunu üç farklı yapıyla anlatabiliriz: "fa + sıfat", "c\'è + isim", ve fiil (piove, nevica).',
      table:[
        {pronoun:'"Fa" yapısı',form:'fa + sıcaklık sıfatı',example:'Fa caldo. / Fa freddo. / Fa fresco.',tr:'Sıcak. / Soğuk. / Serin.'},
        {pronoun:'"C\'è" yapısı',form:'c\'è + hava ismi',example:'C\'è il sole. / C\'è nebbia. / C\'è vento.',tr:'Güneşli. / Sisli. / Rüzgarlı.'},
        {pronoun:'Fiil yapısı',form:'piove / nevica / grandina',example:'Piove molto in autunno.',tr:'Sonbaharda çok yağmur yağar.'},
        {pronoun:'Sıfat yapısı',form:'è + sıfat',example:'È nuvoloso. / È sereno.',tr:'Bulutlu. / Açık.'}
      ],
      note:'"Fa bel tempo" = hava güzel, "fa brutto tempo" = hava kötü. Bunlar çok yaygın günlük ifadeler!'
    },
    {
      id:'g2',
      title:'Mevsimler ve Edatlar',
      title_en:'Seasons and Prepositions',
      explanation:'Mevsimlerle kullanılan edatlar dikkat gerektirir.',
      table:[
        {pronoun:'İlkbahar',form:'in primavera',example:'In primavera fa bel tempo.',tr:'İlkbaharda hava güzel olur.'},
        {pronoun:'Yaz',form:'in estate / d\'estate',example:'D\'estate fa molto caldo.',tr:'Yazın çok sıcak olur.'},
        {pronoun:'Sonbahar',form:'in autunno / d\'autunno',example:'In autunno piove spesso.',tr:'Sonbaharda sık yağmur yağar.'},
        {pronoun:'Kış',form:'in inverno / d\'inverno',example:'D\'inverno nevica sulle Alpi.',tr:'Kışın Alpler\'de kar yağar.'}
      ],
      note:'"In primavera" = ilkbaharda. "D\'estate / d\'autunno" da kullanılır. Her ikisi de doğru.'
    },
    {
      id:'g3',
      title:'Gelecek Hava: Futuro Semplice',
      title_en:'Future Weather Forecasts',
      explanation:'Hava tahminlerinde gelecek zaman (futuro semplice) kullanılır. Düzenli "-are" fiil: -erò, -erà, -eremo. "Piovere" → pioverà.',
      table:[
        {pronoun:'Pioverà',form:'pioverà (yağacak)',example:'Domani pioverà a partire dal pomeriggio.',tr:'Yarın öğleden itibaren yağmur yağacak.'},
        {pronoun:'Farà',form:'farà caldo/freddo',example:'Domani farà più freddo.',tr:'Yarın daha soğuk olacak.'},
        {pronoun:'Ci sarà',form:'ci sarà il sole',example:'Ci sarà il sole nel pomeriggio.',tr:'Öğleden sonra güneş olacak.'},
        {pronoun:'Nevicherà',form:'nevicherà (kar yağacak)',example:'Sulle montagne nevicherà.',tr:'Dağlarda kar yağacak.'}
      ],
      note:'"Secondo le previsioni..." (tahminlere göre) ve "forse" (belki) hava tahminlerinde çok kullanılır.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Che tempo fa oggi? — Fa bel tempo, c\'è il sole!',tr:'Bugün hava nasıl? — Hava güzel, güneşli!',prompt:'Hava durumunu anlat'},
    {id:'sp2',en:'Ho preso l\'ombrello perché le previsioni dicevano pioggia.',tr:'Tahminler yağmur diyordu diye şemsiye aldım.',prompt:'Hava tahminine göre hareket et'},
    {id:'sp3',en:'La mia stagione preferita è l\'autunno perché amo i colori delle foglie.',tr:'En sevdiğim mevsim sonbahar çünkü yaprak renklerini seviyorum.',prompt:'Favori mevsimini anlat'},
    {id:'sp4',en:'Fa molto caldo d\'estate, preferisco la primavera.',tr:'Yazın çok sıcak, ilkbaharı tercih ederim.',prompt:'Mevsim karşılaştır'},
    {id:'sp5',en:'Si sta avvicinando un temporale, sbrighiamoci!',tr:'Fırtına yaklaşıyor, hızlanalım!',prompt:'Acil hava durumunu bildir'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Hava Konuşması',
      title_en:'Talking About the Weather',
      lines:[
        {speaker:'A',gender:'m',en:'Che brutto tempo oggi! Piove da stamattina.',tr:'Ne kötü hava bugün! Sabahtan beri yağmur yağıyor.',bd:[{ro:'Che brutto tempo!',tr:'ne kötü hava!',role:'exclamation'},{ro:'Piove da stamattina',tr:'sabahtan beri yağıyor',role:'observation'}]},
        {speaker:'B',gender:'f',en:'Sì, è un disastro! Sai com\'è il tempo per domani?',tr:'Evet, berbat! Yarınki hava nasıl biliyor musun?',bd:[{ro:'è un disastro',tr:'berbat',role:'complaint'},{ro:'Sai com\'è il tempo per domani?',tr:'yarınki havayı biliyor musun?',role:'question'}]},
        {speaker:'A',gender:'m',en:'Ho controllato le previsioni: domani migliorerà. Al mattino sarà nuvoloso ma nel pomeriggio tornerà il sole.',tr:'Tahminlere baktım: yarın düzelecek. Sabah bulutlu olacak ama öğleden sonra güneş dönecek.',bd:[{ro:'Ho controllato le previsioni',tr:'tahminlere baktım',role:'action'},{ro:'domani migliorerà',tr:'yarın düzelecek',role:'future'},{ro:'tornerà il sole',tr:'güneş dönecek',role:'future'}]},
        {speaker:'B',gender:'f',en:'Meno male! Avevo programmato una gita fuori città.',tr:'Ne iyi! Şehir dışına bir gezi planlamıştım.',bd:[{ro:'Meno male!',tr:'ne iyi / çok şükür!',role:'relief'},{ro:'Avevo programmato una gita',tr:'bir gezi planlamıştım',role:'plan'}]},
        {speaker:'A',gender:'m',en:'Porta comunque una giacca, potrebbero esserci dei nuvoloni.',tr:'Yine de bir ceket götür, bulutlar gelebilir.',bd:[{ro:'Porta comunque una giacca',tr:'yine de bir ceket götür',role:'advice'},{ro:'potrebbero esserci dei nuvoloni',tr:'bulutlar gelebilir',role:'possibility'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Buongiorno! Ecco le previsioni del tempo per domani. Al nord Italia ci sarà bel tempo con sole e temperature intorno ai venti gradi. Al centro, in particolare a Roma, ci sarà qualche nuvola ma senza pioggia. Al sud, invece, arriverà un temporale nel pomeriggio.',
      tr:'Günaydın! Yarınki hava tahminleri. Kuzey İtalya\'da güneşli ve yaklaşık yirmi derece güzel hava olacak. Orta İtalya\'da, özellikle Roma\'da, birkaç bulut olacak ama yağmur yok. Güneyde ise öğleden sonra fırtına gelecek.',
      questions:[
        {q:'Kuzey İtalya\'da yarın hava nasıl olacak?',opts:['Yağmurlu','Karlı','Güneşli','Fırtınalı'],answer:2,tr:'Güneşli (bel tempo con sole)'},
        {q:'Roma\'da yağmur yağacak mı?',opts:['Evet, sabah','Evet, öğleden sonra','Hayır, yağmaz','Evet, gece'],answer:2,tr:'Hayır (senza pioggia)'},
        {q:'Güneyde ne olacak?',opts:['Güneşli hava','Kar','Fırtına','Serin rüzgar'],answer:2,tr:'Fırtına (un temporale)'}
      ]
    }
  ],
  tones:[]
};
LESSONS[18] = L18;
