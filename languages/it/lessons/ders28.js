// ders28.js — Italian Lesson 28: Sport e movimento (Spor ve Hareket)
const L28 = {
  words:[
    {id:'w1',en:'il calcio',ro:'il calcio',tr:'futbol',examples:[{it:'In Italia il calcio è una vera religione, tutti seguono la Serie A.',tr:'İtalya\'da futbol gerçek bir din, herkes Seri A\'yı takip eder.',bd:[{ro:'il calcio è una vera religione',tr:'futbol gerçek bir din'},{ro:'Serie A',tr:'Seri A (İtalyan futbol ligi)'}]}]},
    {id:'w2',en:'il nuoto',ro:'il nuoto',tr:'yüzme',examples:[{it:'Faccio nuoto tre volte a settimana in piscina.',tr:'Haftada üç kez havuzda yüzme yapıyorum.',bd:[{ro:'Faccio nuoto',tr:'yüzme yapıyorum'},{ro:'in piscina',tr:'havuzda'}]}]},
    {id:'w3',en:'la corsa / correre',ro:'la corsa',tr:'koşu / koşmak',examples:[{it:'Mi piace correre la mattina presto, quando la città è silenziosa.',tr:'Şehrin sessiz olduğu sabah erken saatlerde koşmayı severim.',bd:[{ro:'correre la mattina presto',tr:'sabah erken koşmak'},{ro:'quando la città è silenziosa',tr:'şehir sessizken'}]}]},
    {id:'w4',en:'la palestra / il fitness',ro:'la palestra',tr:'spor salonu / fitness',examples:[{it:'Vado in palestra ogni lunedì, mercoledì e venerdì.',tr:'Her pazartesi, çarşamba ve cuma spor salonuna gidiyorum.',bd:[{ro:'Vado in palestra',tr:'spor salonuna gidiyorum'},{ro:'ogni lunedì, mercoledì e venerdì',tr:'her pazartesi, çarşamba ve cuma'}]}]},
    {id:'w5',en:'il ciclismo / la bicicletta',ro:'il ciclismo',tr:'bisiklet / bisiklet sporu',examples:[{it:'Il Giro d\'Italia è la corsa ciclistica più famosa del paese.',tr:'İtalya Turu ülkenin en ünlü bisiklet yarışı.',bd:[{ro:'Il Giro d\'Italia',tr:'İtalya Turu'},{ro:'la corsa ciclistica più famosa',tr:'en ünlü bisiklet yarışı'}]}]},
    {id:'w6',en:'il tennis',ro:'il tennis',tr:'tenis',examples:[{it:'Federer e Nadal sono i tennisti più famosi di sempre.',tr:'Federer ve Nadal tüm zamanların en ünlü tenisçileri.',bd:[{ro:'i tennisti più famosi di sempre',tr:'tüm zamanların en ünlü tenisçileri'},{ro:'Federer e Nadal',tr:'Federer ve Nadal'}]}]},
    {id:'w7',en:'la pallavolo / il basket',ro:'la pallavolo',tr:'voleybol / basketbol',examples:[{it:'La nazionale italiana di pallavolo è molto forte, ha vinto molti mondiali.',tr:'İtalyan voleybol milli takımı çok güçlü, çok fazla dünya şampiyonluğu kazandı.',bd:[{ro:'La nazionale italiana di pallavolo',tr:'İtalyan voleybol milli takımı'},{ro:'ha vinto molti mondiali',tr:'çok fazla dünya şampiyonluğu kazandı'}]}]},
    {id:'w8',en:'lo sci / lo snowboard',ro:'lo sci',tr:'kayak / snowboard',examples:[{it:'In inverno molti italiani vanno sulle Alpi a sciare.',tr:'Kışın pek çok İtalyan Alpler\'e kayağa gider.',bd:[{ro:'sulle Alpi a sciare',tr:'Alpler\'e kayağa'},{ro:'In inverno',tr:'kışın'}]}]},
    {id:'w9',en:'il nuoto in mare',ro:'nuotare in mare',tr:'denizde yüzme',examples:[{it:'D\'estate nuoto in mare tutti i giorni quando sono in vacanza.',tr:'Yazın tatildeyken her gün denizde yüzüyorum.',bd:[{ro:'D\'estate',tr:'yazın'},{ro:'tutti i giorni quando sono in vacanza',tr:'tatildeyken her gün'}]}]},
    {id:'w10',en:'fare yoga / pilates',ro:'fare yoga',tr:'yoga / pilates yapmak',examples:[{it:'Faccio yoga ogni mattina per rilassarmi e concentrarmi.',tr:'Rahatlamak ve konsantre olmak için her sabah yoga yapıyorum.',bd:[{ro:'per rilassarmi',tr:'rahatlamak için'},{ro:'e concentrarmi',tr:'konsantre olmak için'}]}]},
    {id:'w11',en:'l\'allenamento / allenarsi',ro:'l\'allenamento',tr:'antrenman / antrenman yapmak',examples:[{it:'Mi alleno con il mio personal trainer due volte a settimana.',tr:'Haftada iki kez kişisel antrenörümle antrenman yapıyorum.',bd:[{ro:'Mi alleno con il mio personal trainer',tr:'kişisel antrenörümle antrenman yapıyorum'},{ro:'due volte a settimana',tr:'haftada iki kez'}]}]},
    {id:'w12',en:'la gara / la competizione',ro:'la gara',tr:'yarışma / müsabaka',examples:[{it:'Ho partecipato alla mia prima gara di 10 km questo weekend.',tr:'Bu hafta sonu ilk 10 km yarışıma katıldım.',bd:[{ro:'Ho partecipato alla mia prima gara',tr:'ilk yarışıma katıldım'},{ro:'di 10 km',tr:'10 kilometre'}]}]},
    {id:'w13',en:'la squadra / il team',ro:'la squadra',tr:'takım',examples:[{it:'Gioco in una squadra di calcio amatoriale con i colleghi.',tr:'Meslektaşlarımla amatör bir futbol takımında oynuyorum.',bd:[{ro:'in una squadra di calcio amatoriale',tr:'amatör futbol takımında'},{ro:'con i colleghi',tr:'meslektaşlarla'}]}]},
    {id:'w14',en:'vincere / perdere / pareggiare',ro:'vincere',tr:'kazanmak / kaybetmek / berabere kalmak',examples:[{it:'Abbiamo vinto 3-1! Una bella vittoria contro la squadra più forte.',tr:'3-1 kazandık! En güçlü takıma karşı güzel bir galibiyet.',bd:[{ro:'Abbiamo vinto 3-1',tr:'3-1 kazandık'},{ro:'Una bella vittoria',tr:'güzel bir galibiyet'}]}]},
    {id:'w15',en:'il campione / la campionessa',ro:'il campione',tr:'şampiyon',examples:[{it:'Roger Federer è considerato uno dei più grandi campioni di tennis.',tr:'Roger Federer teniste en büyük şampiyonlardan biri olarak kabul edilir.',bd:[{ro:'è considerato',tr:'kabul edilir'},{ro:'uno dei più grandi campioni',tr:'en büyük şampiyonlardan biri'}]}]},
    {id:'w16',en:'l\'arbitro / il giudice',ro:'l\'arbitro',tr:'hakem',examples:[{it:'L\'arbitro ha fischiato un rigore molto contestato.',tr:'Hakem çok tartışmalı bir penaltı düdükledi.',bd:[{ro:'ha fischiato un rigore',tr:'penaltı düdükledi'},{ro:'molto contestato',tr:'çok tartışmalı'}]}]},
    {id:'w17',en:'lo stadio / il campo',ro:'lo stadio',tr:'stadyum / saha',examples:[{it:'Lo stadio di San Siro può contenere oltre ottantamila tifosi.',tr:'San Siro stadyumu seksen binden fazla taraftar alabilir.',bd:[{ro:'Lo stadio di San Siro',tr:'San Siro stadyumu'},{ro:'può contenere oltre ottantamila tifosi',tr:'seksen binden fazla taraftar alabilir'}]}]},
    {id:'w18',en:'il tifoso / tifare',ro:'il tifoso',tr:'taraftar / taraftarlık etmek',examples:[{it:'Tifo per la Juventus da quando ero bambino.',tr:'Çocukluktan beri Juventus\'u tutuyorum.',bd:[{ro:'Tifo per la Juventus',tr:'Juventus\'u tutuyorum'},{ro:'da quando ero bambino',tr:'çocukluktan beri'}]}]},
    {id:'w19',en:'il record / il primato',ro:'il record',tr:'rekor',examples:[{it:'Ha battuto il record mondiale nei 100 metri piani.',tr:'100 metre düz koşuda dünya rekorunu kırdı.',bd:[{ro:'ha battuto il record mondiale',tr:'dünya rekorunu kırdı'},{ro:'nei 100 metri piani',tr:'100 metre düz koşuda'}]}]},
    {id:'w20',en:'fare stretching / riscaldamento',ro:'fare stretching',tr:'germe / ısınma yapmak',examples:[{it:'Prima di correre bisogna sempre fare il riscaldamento per evitare infortuni.',tr:'Koşmadan önce sakatlığı önlemek için her zaman ısınma yapmalı.',bd:[{ro:'fare il riscaldamento',tr:'ısınma yapmak'},{ro:'per evitare infortuni',tr:'sakatlığı önlemek için'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Fare + Sport: Spor İfadeleri',
      title_en:'Fare + Sport: Talking About Sports',
      explanation:'"Fare" fiili çoğu spor ifadesinde kullanılır. Bazı sporlar için "giocare a" veya "praticare" da kullanılır.',
      table:[
        {pronoun:'fare + spor',form:'genellikle bireysel sporlar',example:'Faccio nuoto / Faccio yoga / Faccio footing.',tr:'Yüzüyorum / Yoga yapıyorum / Koşu yapıyorum.'},
        {pronoun:'giocare a + spor',form:'takım sporları',example:'Gioco a calcio / a tennis / a basket.',tr:'Futbol oynuyorum / Tenis oynuyorum / Basketbol oynuyorum.'},
        {pronoun:'andare a + spor',form:'yer gerektiren sporlar',example:'Vado a sciare / a nuotare / in palestra.',tr:'Kayağa gidiyorum / Yüzmeye gidiyorum / Spor salonuna gidiyorum.'},
        {pronoun:'praticare',form:'daha resmi ifade',example:'Pratico il nuoto da anni.',tr:'Yıllardır yüzme yapıyorum.'}
      ],
      note:'"Quanto spesso ti alleni?" (ne sıklıkla antrenman yapıyorsun?) — "Mi alleno tre volte a settimana" (haftada üç kez).'
    },
    {
      id:'g2',
      title:'Passato Prossimo ile Spor: Yarışma ve Geçmiş',
      title_en:'Past Tense with Sports: Races and Past Events',
      explanation:'Geçmişteki spor etkinliklerini anlatmak için passato prossimo kullanımı.',
      table:[
        {pronoun:'Ho + participio',form:'avere ile',example:'Ho vinto / Ho perso / Ho segnato.',tr:'Kazandım / Kaybettim / Gol attım.'},
        {pronoun:'Sono + participio',form:'essere ile',example:'Sono arrivato primo / terzo.',tr:'Birinci / üçüncü geldim.'},
        {pronoun:'Abbiamo',form:'biz / takım',example:'Abbiamo battuto la squadra avversaria.',tr:'Rakip takımı yendik.'},
        {pronoun:'Siamo',form:'essere ile çoğul',example:'Siamo arrivati in finale!',tr:'Finale çıktık!'}
      ],
      note:'"Segnare un gol" = gol atmak. "Parare" = kurtarmak (kaleci). "Dribblare" = dripling yapmak. "Passare la palla" = pas vermek.'
    },
    {
      id:'g3',
      title:'Comparativo dello Sport: En İyi / Daha İyi',
      title_en:'Sport Comparatives: Best / Better',
      explanation:'Sporcuları karşılaştırırken kullanılan yapılar.',
      table:[
        {pronoun:'migliore di',form:'daha iyi... dan',example:'Questa squadra è migliore della nostra.',tr:'Bu takım bizimkinden daha iyi.'},
        {pronoun:'il migliore',form:'en iyi',example:'È il migliore calciatore del mondo.',tr:'Dünyanın en iyi futbolcusu.'},
        {pronoun:'più veloce di',form:'daha hızlı... dan',example:'Bolt era più veloce di tutti.',tr:'Bolt herkesten daha hızlıydı.'},
        {pronoun:'a mio parere',form:'bence (görüş belirtmek)',example:'A mio parere il Milan è la squadra più forte.',tr:'Bence Milan en güçlü takım.'}
      ],
      note:'"Grande campione" → "un grande" — ünlü sporculara saygı ifadesi. İtalya\'da "lo Squalo" (Coppi), "il Divin Codino" (Baggio) gibi lakablar yaygın.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Tifo per l\'Inter, ma mio fratello è juventino! In casa è guerra!',tr:'Inter\'i tutuyorum ama erkek kardeşim Juventus taraftarı! Evde savaş!',prompt:'Spor tutkunu anlat'},
    {id:'sp2',en:'Ho iniziato a correre tre mesi fa e mi sento molto meglio.',tr:'Üç ay önce koşmaya başladım ve çok daha iyi hissediyorum.',prompt:'Spor başlangıcını anlat'},
    {id:'sp3',en:'Secondo me Valentino Rossi è il più grande pilota di moto di tutti i tempi.',tr:'Bence Valentino Rossi tüm zamanların en büyük motosiklet pilotu.',prompt:'Spor görüşünü belirt'},
    {id:'sp4',en:'Ho vinto la mia prima gara! Non ci credo ancora!',tr:'İlk yarışımı kazandım! Hâlâ inanamıyorum!',prompt:'Kazanma sevincini ifade et'},
    {id:'sp5',en:'Mi sono fatto male al ginocchio, non posso allenarmi per un mese.',tr:'Dizimi incittim, bir ay antrenman yapamıyorum.',prompt:'Sakatlık anlat'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Futbol Maçı Hakkında',
      title_en:'Talking About a Football Match',
      lines:[
        {speaker:'A',gender:'m',en:'Hai visto la partita ieri sera? Che risultato!',tr:'Dün akşam maçı gördün mü? Ne sonuç!',bd:[{ro:'Hai visto la partita?',tr:'maçı gördün mü?',role:'question'},{ro:'Che risultato!',tr:'ne sonuç!',role:'exclamation'}]},
        {speaker:'B',gender:'m',en:'Sì! 4-0! Non me lo aspettavo! La Juve ha giocato benissimo.',tr:'Evet! 4-0! Beklemiyor değildim! Juventus çok iyi oynadı.',bd:[{ro:'Non me lo aspettavo!',tr:'beklemiyordum!',role:'surprise'},{ro:'ha giocato benissimo',tr:'çok iyi oynadı',role:'past'}]},
        {speaker:'A',gender:'m',en:'Sì, soprattutto Dybala. Ha segnato due gol bellissimi!',tr:'Evet, özellikle Dybala. İki güzel gol attı!',bd:[{ro:'soprattutto Dybala',tr:'özellikle Dybala',role:'emphasis'},{ro:'Ha segnato due gol bellissimi',tr:'iki güzel gol attı',role:'past'}]},
        {speaker:'B',gender:'m',en:'Già, ma l\'altra squadra ha giocato malissimo. Non ha fatto niente.',tr:'Evet, ama diğer takım çok kötü oynadı. Hiçbir şey yapmadı.',bd:[{ro:'ha giocato malissimo',tr:'çok kötü oynadı',role:'criticism'},{ro:'Non ha fatto niente',tr:'hiçbir şey yapmadı',role:'past'}]},
        {speaker:'A',gender:'m',en:'Adesso la Juve è prima in classifica! Che stagione fantastica!',tr:'Şimdi Juventus lider! Ne harika bir sezon!',bd:[{ro:'è prima in classifica',tr:'lider (sıralamada birinci)',role:'standing'},{ro:'Che stagione fantastica!',tr:'ne harika bir sezon!',role:'exclamation'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Lo sport in Italia ha una lunga tradizione. Il calcio è lo sport più popolare, con milioni di tifosi appassionati. Ogni città ha la sua squadra del cuore e le rivalità sono fortissime. Il ciclismo è un altro sport amato: il Giro d\'Italia è una delle gare ciclistiche più importanti al mondo. La Formula 1 è molto seguita grazie alla Ferrari. E naturalmente il nuoto e l\'atletica hanno dato grandi campioni all\'Italia nelle Olimpiadi.',
      tr:'Spor İtalya\'da uzun bir geleneğe sahip. Futbol en popüler spor, milyonlarca tutkulu taraftarı var. Her şehrin gönlünün takımı var ve rekabetler çok güçlü. Bisiklet de sevilen bir spor: İtalya Turu dünyanın en önemli bisiklet yarışlarından biri. Ferrari sayesinde Formula 1 de çok takip ediliyor. Ve tabii yüzme ve atletizm Olimpiyatlarda İtalya\'ya büyük şampiyonlar kazandırdı.',
      questions:[
        {q:'İtalya\'da en popüler spor hangisi?',opts:['Tenis','Bisiklet','Futbol','Yüzme'],answer:2,tr:'Futbol (calcio)'},
        {q:'İtalya Turu ne tür bir yarışma?',opts:['Atletizm yarışı','Bisiklet yarışı','Otomobil yarışı','Yüzme yarışı'],answer:1,tr:'Bisiklet yarışı (gara ciclistica)'},
        {q:'Formula 1 neden çok takip ediliyor?',opts:['İtalyan pilotlar yüzünden','Ferrari yüzünden','Ucuz biletler yüzünden','Çok yavaş olduğu için'],answer:1,tr:'Ferrari yüzünden'}
      ]
    }
  ],
  tones:[]
};
LESSONS[28] = L28;
