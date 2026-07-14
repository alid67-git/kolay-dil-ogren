// ders26.js — Italian Lesson 26: Colori e descrizioni (Renkler ve Tanımlar)
const L26 = {
  words:[
    {id:'w1',en:'rosso',ro:'rosso',tr:'kırmızı',examples:[{it:'La Ferrari è rossa, il colore simbolo dell\'Italia.',tr:'Ferrari kırmızıdır, İtalya\'nın sembol rengi.',bd:[{ro:'La Ferrari è rossa',tr:'Ferrari kırmızıdır'},{ro:'il colore simbolo dell\'Italia',tr:'İtalya\'nın sembol rengi'}]}]},
    {id:'w2',en:'blu / azzurro',ro:'blu',tr:'mavi / gök mavisi',examples:[{it:'Il cielo oggi è di un azzurro intenso, senza nuvole.',tr:'Bugün gökyüzü bulut yok, yoğun bir gök mavisi.',bd:[{ro:'un azzurro intenso',tr:'yoğun gök mavisi'},{ro:'senza nuvole',tr:'bulut yok'}]}]},
    {id:'w3',en:'verde',ro:'verde',tr:'yeşil',examples:[{it:'Le campagne toscane sono verdi e bellissime in primavera.',tr:'Toskana kırları ilkbaharda yeşil ve çok güzel.',bd:[{ro:'Le campagne toscane',tr:'Toskana kırları'},{ro:'in primavera',tr:'ilkbaharda'}]}]},
    {id:'w4',en:'giallo',ro:'giallo',tr:'sarı',examples:[{it:'Il risotto alla milanese è giallo per lo zafferano.',tr:'Milano usulü risotto safran yüzünden sarı.',bd:[{ro:'è giallo',tr:'sarıdır'},{ro:'per lo zafferano',tr:'safran yüzünden'}]}]},
    {id:'w5',en:'arancione',ro:'arancione',tr:'turuncu',examples:[{it:'I tramonti italiani diventano arancioni e rosa sul mare.',tr:'İtalyan günbatımları deniz üzerinde turuncu ve pembeye döner.',bd:[{ro:'I tramonti',tr:'günbatımları'},{ro:'diventano arancioni e rosa',tr:'turuncu ve pembeye döner'}]}]},
    {id:'w6',en:'viola / lilla',ro:'viola',tr:'mor / leylak',examples:[{it:'Porta una giacca viola che si abbina bene ai pantaloni neri.',tr:'Siyah pantolonla iyi giden mor ceket giyiyor.',bd:[{ro:'una giacca viola',tr:'mor ceket'},{ro:'si abbina bene',tr:'iyi gidiyor/uyuyor'}]}]},
    {id:'w7',en:'rosa',ro:'rosa',tr:'pembe',examples:[{it:'Firenze in primavera è piena di fiori rosa e bianchi.',tr:'Floransa ilkbaharda pembe ve beyaz çiçeklerle dolu.',bd:[{ro:'piena di fiori rosa e bianchi',tr:'pembe ve beyaz çiçeklerle dolu'},{ro:'in primavera',tr:'ilkbaharda'}]}]},
    {id:'w8',en:'nero / bianco',ro:'nero',tr:'siyah / beyaz',examples:[{it:'La zebra è in bianco e nero. Che tipo di animale è?',tr:'Zebra siyah beyazdır. Ne tür bir hayvan?',bd:[{ro:'in bianco e nero',tr:'siyah beyaz'},{ro:'Che tipo di animale è?',tr:'ne tür bir hayvan?'}]}]},
    {id:'w9',en:'grigio',ro:'grigio',tr:'gri',examples:[{it:'Il cielo è grigio oggi, forse pioverà.',tr:'Bugün gökyüzü gri, belki yağmur yağacak.',bd:[{ro:'Il cielo è grigio',tr:'gökyüzü gri'},{ro:'forse pioverà',tr:'belki yağmur yağacak'}]}]},
    {id:'w10',en:'marrone / beige',ro:'marrone',tr:'kahverengi / bej',examples:[{it:'Indosso scarpe marroni e una cintura beige.',tr:'Kahverengi ayakkabı ve bej kemer takıyorum.',bd:[{ro:'scarpe marroni',tr:'kahverengi ayakkabı'},{ro:'una cintura beige',tr:'bej kemer'}]}]},
    {id:'w11',en:'chiaro / scuro',ro:'chiaro',tr:'açık / koyu (renk tonu)',examples:[{it:'Preferisco il blu scuro al blu chiaro per i vestiti formali.',tr:'Resmi kıyafetler için açık maviye göre koyu mavi tercih ederim.',bd:[{ro:'il blu scuro',tr:'koyu mavi'},{ro:'per i vestiti formali',tr:'resmi kıyafetler için'}]}]},
    {id:'w12',en:'brillante / opaco',ro:'brillante',tr:'parlak / mat',examples:[{it:'Questo colore brillante attira l\'attenzione.',tr:'Bu parlak renk dikkat çekiyor.',bd:[{ro:'questo colore brillante',tr:'bu parlak renk'},{ro:'attira l\'attenzione',tr:'dikkat çekiyor'}]}]},
    {id:'w13',en:'colorato / sgargiante',ro:'colorato',tr:'renkli / göz alıcı',examples:[{it:'Il Carnevale di Venezia è famosissimo per i costumi colorati.',tr:'Venedik Karnavalı renkli kostümleriyle çok ünlü.',bd:[{ro:'il Carnevale di Venezia',tr:'Venedik Karnavalı'},{ro:'costumi colorati',tr:'renkli kostümler'}]}]},
    {id:'w14',en:'a righe / a quadri / a pois',ro:'a righe',tr:'çizgili / kareli / puanlı',examples:[{it:'Indossa una camicia a righe blu e bianche.',tr:'Mavi beyaz çizgili gömlek giyiyor.',bd:[{ro:'una camicia a righe',tr:'çizgili gömlek'},{ro:'blu e bianche',tr:'mavi ve beyaz'}]}]},
    {id:'w15',en:'abbinare i colori',ro:'abbinare',tr:'renkleri uydurmak/kombine etmek',examples:[{it:'Non riesce ad abbinare bene i colori: indossa verde e viola insieme.',tr:'Renkleri iyi kombine edemiyor: yeşil ve moru birlikte giyiyor.',bd:[{ro:'Non riesce ad abbinare bene i colori',tr:'renkleri iyi kombine edemiyor'},{ro:'insieme',tr:'birlikte'}]}]},
    {id:'w16',en:'di che colore è?',ro:'di che colore',tr:'rengi ne?',examples:[{it:'Di che colore è la tua macchina? — È grigio metallizzato.',tr:'Arabanın rengi ne? — Metalik gri.',bd:[{ro:'Di che colore è?',tr:'rengi ne?'},{ro:'grigio metallizzato',tr:'metalik gri'}]}]},
    {id:'w17',en:'tinto / dipinto',ro:'tinto',tr:'boyalı / boyanmış',examples:[{it:'Ha i capelli tinti di rosso, è un colore molto vivace.',tr:'Saçları kırmızıya boyalı, çok canlı bir renk.',bd:[{ro:'i capelli tinti di rosso',tr:'saçları kırmızıya boyalı'},{ro:'molto vivace',tr:'çok canlı'}]}]},
    {id:'w18',en:'il colore primario / secondario',ro:'il colore primario',tr:'ana renk / ara renk',examples:[{it:'I colori primari sono rosso, giallo e blu.',tr:'Ana renkler kırmızı, sarı ve mavi.',bd:[{ro:'I colori primari',tr:'ana renkler'},{ro:'rosso, giallo e blu',tr:'kırmızı, sarı ve mavi'}]}]},
    {id:'w19',en:'l\'arcobaleno',ro:'l\'arcobaleno',tr:'gökkuşağı',examples:[{it:'Dopo la pioggia è apparso un arcobaleno meraviglioso.',tr:'Yağmurdan sonra harika bir gökkuşağı belirdi.',bd:[{ro:'Dopo la pioggia',tr:'yağmurdan sonra'},{ro:'è apparso un arcobaleno',tr:'gökkuşağı belirdi'}]}]},
    {id:'w20',en:'il tono / la sfumatura',ro:'la sfumatura',tr:'ton / nüans (renk)',examples:[{it:'Questa sfumatura di verde non mi piace, preferisco quella più chiara.',tr:'Bu yeşil tonu sevmiyorum, daha açığını tercih ederim.',bd:[{ro:'Questa sfumatura di verde',tr:'bu yeşil tonu'},{ro:'quella più chiara',tr:'daha açığını'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Renk Sıfatlarının Çekimi',
      title_en:'Color Adjective Agreement',
      explanation:'Renkler İtalyanca\'da isimle cinsiyet ve sayı uyumu gösterir (bazı renkler hariç).',
      table:[
        {pronoun:'-o/-a/-i/-e',form:'rosso/rossa/rossi/rosse',example:'Il vestito rosso. La borsa rossa. I guanti rossi.',tr:'Kırmızı elbise/çanta/eldiven.'},
        {pronoun:'değişmez renkler',form:'blu, rosa, viola, beige, lilla',example:'Una borsa blu. Un vestito rosa. Gli occhi viola.',tr:'Mavi çanta. Pembe elbise. Mor gözler.'},
        {pronoun:'-e/-i',form:'verde/verdi (m/f tekil aynı)',example:'Un prato verde. Una foglia verde. Foglie verdi.',tr:'Yeşil çimen. Yeşil yaprak. Yeşil yapraklar.'},
        {pronoun:'bileşik renkler',form:'giallo limone, rosso fragola',example:'Una giacca verde bottiglia.',tr:'Şişe yeşili ceket.'}
      ],
      note:'"Celeste" = açık mavi (gökyüzü mavisi). "Azzurro" da açık mavi ama daha resmi. İtalyan milli takımı rengi "azzurro" — bu yüzden takıma "gli Azzurri" denir.'
    },
    {
      id:'g2',
      title:'Tanımlama: Come + Essere',
      title_en:'Description: How to Use Come + Essere',
      explanation:'Birisini veya bir şeyi tarif etmek için temel yapılar.',
      table:[
        {pronoun:'È + renk',form:'tek renk tarif',example:'La sua macchina è blu metallizzato.',tr:'Onun arabası metalik mavi.'},
        {pronoun:'Ha + özellik',form:'sahip olma ile tarif',example:'Ha gli occhi verdi e i capelli castani.',tr:'Yeşil gözleri ve kastane saçları var.'},
        {pronoun:'Sembra + adj',form:'görünüyor gibi',example:'Questo vestito sembra troppo grande per te.',tr:'Bu elbise sana fazla büyük görünüyor.'},
        {pronoun:'Mi fa pensare a',form:'hatırlatıyor',example:'Questo colore mi fa pensare al mare.',tr:'Bu renk bana denizi hatırlatıyor.'}
      ],
      note:'Renk sorusu: "Di che colore è...?" = "...\'nin rengi ne?". Cevap: "È + renk" veya "Ha un colore + renk" şeklinde.'
    },
    {
      id:'g3',
      title:'Kıyafet ve Renkler: Indossare / Portare',
      title_en:'Clothing and Colors: Indossare / Portare',
      explanation:'"Indossare" = giymek (üstünde taşımak), "portare" da giysiyle kullanılır.',
      table:[
        {pronoun:'indossare',form:'üstünde olmak',example:'Indosso sempre i colori scuri in inverno.',tr:'Kışın her zaman koyu renk giyerim.'},
        {pronoun:'portare',form:'taşımak/giymek',example:'Porta sempre una cravatta rossa alle riunioni.',tr:'Toplantılarda her zaman kırmızı kravat takar.'},
        {pronoun:'vestirsi di',form:'renkle giyinmek',example:'Si veste sempre di nero, è il suo stile.',tr:'Her zaman siyah giyer, bu onun stili.'},
        {pronoun:'stare bene',form:'yakışmak',example:'Quel verde ti sta benissimo!',tr:'O yeşil sana çok yakışıyor!'}
      ],
      note:'"Stare bene" = yakışmak: "Ti sta bene il blu" (mavi sana yakışıyor). "Come mi sta?" (nasıl duruyorum/yakışıyor mu?)'
    }
  ],
  speaking:[
    {id:'sp1',en:'Di che colore sono gli occhi di Sophia Loren? Marroni o verdi?',tr:'Sophia Loren\'in gözleri ne renk? Kahverengi mi yeşil mi?',prompt:'Renk sor'},
    {id:'sp2',en:'Quella giacca azzurra ti sta benissimo, mettila!',tr:'O gök mavisi ceket sana çok yakışıyor, giy onu!',prompt:'Kıyafet öner'},
    {id:'sp3',en:'Non mi piace il colore beige, lo trovo troppo noioso.',tr:'Bej rengi sevmiyorum, çok sıkıcı buluyorum.',prompt:'Renk hakkında görüş belirt'},
    {id:'sp4',en:'Ho dipinto la mia stanza di un verde chiaro, molto rilassante.',tr:'Odamı açık yeşile boyadım, çok rahatlatıcı.',prompt:'Renk seçimi anlat'},
    {id:'sp5',en:'Il tramonto stasera è straordinario! Rosa, arancione e viola insieme.',tr:'Bu akşam günbatımı olağanüstü! Pembe, turuncu ve mor birlikte.',prompt:'Renkleri tarif et'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Kıyafet Alışverişi',
      title_en:'Clothes Shopping',
      lines:[
        {speaker:'C',gender:'f',en:'Buongiorno! Posso aiutarla?',tr:'Günaydın! Yardımcı olabilir miyim?',bd:[{ro:'Posso aiutarla?',tr:'yardımcı olabilir miyim? (kibarca)',role:'greeting'}]},
        {speaker:'A',gender:'m',en:'Sì, grazie. Sto cercando una camicia da lavoro. Qualcosa di elegante ma non troppo formale.',tr:'Evet, teşekkürler. İş için gömlek arıyorum. Şık ama fazla resmi olmayan bir şey.',bd:[{ro:'Sto cercando',tr:'arıyorum',role:'verb'},{ro:'elegante ma non troppo formale',tr:'şık ama fazla resmi olmayan',role:'description'}]},
        {speaker:'C',gender:'f',en:'Che taglia porta? E che colori preferisce?',tr:'Hangi beden giyiyor? Ve hangi renkleri tercih ediyor?',bd:[{ro:'Che taglia porta?',tr:'hangi beden giyiyor?',role:'size'},{ro:'che colori preferisce?',tr:'hangi renkleri tercih ediyor?',role:'color'}]},
        {speaker:'A',gender:'m',en:'Porto la taglia M. Preferisco i colori classici: blu, grigio o bianco.',tr:'M beden giyiyorum. Klasik renkleri tercih ederim: mavi, gri veya beyaz.',bd:[{ro:'Porto la taglia M',tr:'M beden giyiyorum',role:'size'},{ro:'colori classici',tr:'klasik renkler',role:'color'}]},
        {speaker:'C',gender:'f',en:'Allora, guardi queste! Abbiamo questa camicia azzurra in cotone, elegantissima. E questa grigia a righe sottili.',tr:'O zaman bunlara bakın! Bu pamuk gök mavisi gömleğimiz var, çok şık. Ve bu ince çizgili gri gömlek.',bd:[{ro:'in cotone',tr:'pamuktan',role:'material'},{ro:'a righe sottili',tr:'ince çizgili',role:'pattern'}]},
        {speaker:'A',gender:'m',en:'La camicia azzurra mi piace molto. Posso provarla?',tr:'Gök mavisi gömleği çok beğendim. Deneyebilir miyim?',bd:[{ro:'mi piace molto',tr:'çok beğendim',role:'preference'},{ro:'Posso provarla?',tr:'deneyebilir miyim?',role:'request'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Ogni colore ha un significato simbolico in Italia. Il rosso rappresenta passione e amore — pensate alle rose rosse di San Valentino. Il blu è il colore della squadra nazionale italiana. Il verde, il bianco e il rosso sono i colori della bandiera. Il nero è elegante ma anche associato al lutto. Il giallo è allegro e solare. I colori hanno un ruolo importante nella moda italiana, e l\'Italia è capitale mondiale della moda.',
      tr:'Her rengin İtalya\'da sembolik bir anlamı var. Kırmızı tutku ve aşkı temsil eder — Sevgililer Günü\'nün kırmızı gülleri aklınıza gelsin. Mavi, İtalyan milli takımının rengi. Yeşil, beyaz ve kırmızı ise bayrağın renkleri. Siyah şık ama aynı zamanda yasla ilişkili. Sarı neşeli ve güneşli. Renkler İtalyan modada önemli rol oynar ve İtalya moda başkenti.',
      questions:[
        {q:'Kırmızı neyi temsil eder?',opts:['Güç ve zafer','Tutku ve aşk','Doğa ve yeşillik','Huzur ve barış'],answer:1,tr:'Tutku ve aşk (passione e amore)'},
        {q:'İtalyan milli takımının rengi nedir?',opts:['Kırmızı','Yeşil','Mavi','Sarı'],answer:2,tr:'Mavi (blu/azzurro)'},
        {q:'İtalyan bayrağının renkleri neler?',opts:['Kırmızı, beyaz, mavi','Yeşil, beyaz, kırmızı','Sarı, mavi, yeşil','Siyah, beyaz, kırmızı'],answer:1,tr:'Yeşil, beyaz, kırmızı (verde, bianco, rosso)'}
      ]
    }
  ],
  tones:[]
};
LESSONS[26] = L26;
