// ders20.js — Italian Lesson 20: Daily Conversation Practice (Günlük Konuşma Pratiği)
const L20 = {
  words:[
    {id:'w1',en:'di solito / normalmente',ro:'di solito',tr:'genellikle / normalde',examples:[{it:'Di solito mi sveglio alle sette.',tr:'Genellikle saat yedide uyanırım.',bd:[{ro:'Di solito',tr:'genellikle'},{ro:'mi sveglio alle sette',tr:'saat yedide uyanırım'}]}]},
    {id:'w2',en:'la mattina / di mattina',ro:'la mattina',tr:'sabah / sabahları',examples:[{it:'Di mattina bevo sempre un caffè.',tr:'Sabahları her zaman bir kahve içerim.',bd:[{ro:'Di mattina',tr:'sabahları'},{ro:'bevo sempre un caffè',tr:'her zaman kahve içerim'}]}]},
    {id:'w3',en:'il pomeriggio / il mezzogiorno',ro:'il pomeriggio',tr:'öğleden sonra / öğle',examples:[{it:'Pranzo a mezzogiorno e poi ricomincio a lavorare.',tr:'Öğle yemeğini yiyorum ve sonra çalışmaya devam ediyorum.',bd:[{ro:'Pranzo a mezzogiorno',tr:'öğle yemeği yiyorum'},{ro:'poi ricomincio a lavorare',tr:'sonra çalışmaya devam ediyorum'}]}]},
    {id:'w4',en:'la sera / la notte',ro:'la sera',tr:'akşam / gece',examples:[{it:'La sera cucino e guardo un film.',tr:'Akşam yemek pişirir ve film izlerim.',bd:[{ro:'La sera',tr:'akşamleyin'},{ro:'cucino e guardo un film',tr:'yemek pişirip film izlerim'}]}]},
    {id:'w5',en:'alzarsi / svegliarsi',ro:'alzarsi',tr:'kalkmak / uyanmak',examples:[{it:'Mi sveglio alle sei e mi alzo subito.',tr:'Altıda uyanır ve hemen kalkarım.',bd:[{ro:'Mi sveglio alle sei',tr:'altıda uyanırım'},{ro:'mi alzo subito',tr:'hemen kalkarım'}]}]},
    {id:'w6',en:'fare colazione',ro:'fare colazione',tr:'kahvaltı yapmak',examples:[{it:'Faccio colazione con un cappuccino e un cornetto.',tr:'Kahvaltı olarak cappuccino ve cornetto yerim.',bd:[{ro:'Faccio colazione con',tr:'kahvaltıda ... yerim'},{ro:'un cappuccino e un cornetto',tr:'cappuccino ve cornetto'}]}]},
    {id:'w7',en:'andare al lavoro / in ufficio',ro:'andare al lavoro',tr:'işe gitmek',examples:[{it:'Vado al lavoro in metro, ci vogliono trenta minuti.',tr:'İşe metroyla gidiyorum, otuz dakika sürüyor.',bd:[{ro:'Vado al lavoro in metro',tr:'işe metroyla gidiyorum'},{ro:'ci vogliono trenta minuti',tr:'otuz dakika süruyor'}]}]},
    {id:'w8',en:'pranzare / il pranzo',ro:'pranzare',tr:'öğle yemeği yemek',examples:[{it:'Di solito pranzo in ufficio con i colleghi.',tr:'Genellikle ofiste iş arkadaşlarımla öğle yemeği yerim.',bd:[{ro:'Di solito pranzo in ufficio',tr:'genellikle ofiste öğle yerim'},{ro:'con i colleghi',tr:'iş arkadaşlarımla'}]}]},
    {id:'w9',en:'tornare a casa',ro:'tornare a casa',tr:'eve dönmek',examples:[{it:'Torno a casa alle diciotto e cucino la cena.',tr:'Saat on sekizde eve dönür ve akşam yemeği pişiririm.',bd:[{ro:'Torno a casa alle diciotto',tr:'saat on sekizde eve dönerim'},{ro:'e cucino la cena',tr:'ve akşam yemeği pişiririm'}]}]},
    {id:'w10',en:'cenare / la cena',ro:'cenare',tr:'akşam yemeği yemek',examples:[{it:'Ceniamo insieme stasera?',tr:'Bu akşam birlikte akşam yemeği yiyelim mi?',bd:[{ro:'Ceniamo insieme',tr:'birlikte akşam yemeği yiyelim mi'},{ro:'stasera',tr:'bu akşam'}]}]},
    {id:'w11',en:'andare a dormire / addormentarsi',ro:'andare a dormire',tr:'yatmaya gitmek / uyumak',examples:[{it:'Vado a dormire dopo mezzanotte di solito.',tr:'Genellikle gece yarısından sonra uyumaya gidiyorum.',bd:[{ro:'Vado a dormire',tr:'uyumaya gidiyorum'},{ro:'dopo mezzanotte',tr:'gece yarısından sonra'}]}]},
    {id:'w12',en:'fare una pausa caffè',ro:'pausa caffè',tr:'kahve molası vermek',examples:[{it:'Facciamo una pausa caffè? Ho bisogno di staccare.',tr:'Kahve molası verelim mi? Biraz zihin açmam gerekiyor.',bd:[{ro:'Facciamo una pausa caffè?',tr:'kahve molası verelim mi?'},{ro:'Ho bisogno di staccare',tr:'biraz zihin açmam gerekiyor'}]}]},
    {id:'w13',en:'prendere i mezzi / guidare',ro:'prendere i mezzi',tr:'toplu taşıma / araba kullanmak',examples:[{it:'Prendo i mezzi pubblici ogni giorno.',tr:'Her gün toplu taşıma kullanıyorum.',bd:[{ro:'Prendo i mezzi pubblici',tr:'toplu taşıma kullanıyorum'},{ro:'ogni giorno',tr:'her gün'}]}]},
    {id:'w14',en:'fare la spesa / fare acquisti',ro:'fare la spesa',tr:'alışveriş yapmak',examples:[{it:'Faccio la spesa al mercato ogni sabato.',tr:'Her cumartesi pazardan alışveriş yapıyorum.',bd:[{ro:'Faccio la spesa al mercato',tr:'pazardan alışveriş yapıyorum'},{ro:'ogni sabato',tr:'her cumartesi'}]}]},
    {id:'w15',en:'leggere le notizie',ro:'leggere le notizie',tr:'haberleri okumak',examples:[{it:'La mattina leggo le notizie sul telefono mentre bevo il caffè.',tr:'Sabah kahve içerken telefonda haberleri okurum.',bd:[{ro:'La mattina leggo le notizie',tr:'sabah haberleri okurum'},{ro:'mentre bevo il caffè',tr:'kahve içerken'}]}]},
    {id:'w16',en:'andare in palestra / fare attività fisica',ro:'la palestra',tr:'spor salonuna gitmek',examples:[{it:'Vado in palestra tre volte a settimana.',tr:'Haftada üç kez spor salonuna gidiyorum.',bd:[{ro:'Vado in palestra',tr:'spor salonuna gidiyorum'},{ro:'tre volte a settimana',tr:'haftada üç kez'}]}]},
    {id:'w17',en:'chiamare / sentire gli amici',ro:'sentire gli amici',tr:'arkadaşlarla konuşmak',examples:[{it:'Sento mia madre ogni sera per sapere come sta.',tr:'Nasıl olduğunu öğrenmek için her akşam annemi arıyorum.',bd:[{ro:'Sento mia madre ogni sera',tr:'her akşam annemi arıyorum'},{ro:'per sapere come sta',tr:'nasıl olduğunu öğrenmek için'}]}]},
    {id:'w18',en:'usare il computer / navigare in internet',ro:'navigare in internet',tr:'bilgisayar kullanmak / internette gezinmek',examples:[{it:'Passo troppo tempo a navigare in internet la sera.',tr:'Akşamları internette çok zaman geçiriyorum.',bd:[{ro:'Passo troppo tempo',tr:'çok zaman geçiriyorum'},{ro:'a navigare in internet',tr:'internette'},{ro:'la sera',tr:'akşamları'}]}]},
    {id:'w19',en:'riposarsi / rilassarsi',ro:'riposarsi',tr:'dinlenmek / gevşemek',examples:[{it:'Nel fine settimana cerco di riposarmi il più possibile.',tr:'Hafta sonunda mümkün olduğunca dinlenmeye çalışıyorum.',bd:[{ro:'Nel fine settimana',tr:'hafta sonunda'},{ro:'cerco di riposarmi',tr:'dinlenmeye çalışıyorum'},{ro:'il più possibile',tr:'mümkün olduğunca'}]}]},
    {id:'w20',en:'Com\'è la tua giornata tipica?',ro:'giornata tipica',tr:'Tipik günün nasıl?',examples:[{it:'Raccontami com\'è la tua giornata tipica!',tr:'Bana tipik gününü anlat!',bd:[{ro:'Raccontami',tr:'anlat bana'},{ro:'com\'è la tua giornata tipica',tr:'tipik günün nasıl'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Günlük Rutin: Riflessivi Fiiller',
      title_en:'Daily Routine: Reflexive Verbs',
      explanation:'Günlük rutinleri anlatırken çok sayıda "dönüşlü fiil" (verbi riflessivi) kullanılır. Bu fiiller mi-, ti-, si-, ci-, vi-, si- zamirleriyle kullanılır.',
      table:[
        {pronoun:'svegliarsi',form:'mi sveglio / ti svegli / si sveglia',example:'Mi sveglio presto ogni giorno.',tr:'Her gün erken uyanırım.'},
        {pronoun:'alzarsi',form:'mi alzo / ti alzi / si alza',example:'Mi alzo e faccio la doccia.',tr:'Kalkarım ve duş alırım.'},
        {pronoun:'lavarsi',form:'mi lavo / ti lavi / si lava',example:'Mi lavo i denti due volte al giorno.',tr:'Günde iki kez dişlerimi fırçalarım.'},
        {pronoun:'vestirsi',form:'mi vesto / ti vesti / si veste',example:'Mi vesto in cinque minuti.',tr:'Beş dakikada giyiniyorum.'}
      ],
      note:'Dönüşlü fiiller (-arsi/-ersi/-irsi ile biter): svegliarsi, alzarsi, lavarsi, vestirsi, addormentarsi, riposarsi...'
    },
    {
      id:'g2',
      title:'Zaman Zarfları: Rutin İfadeleri',
      title_en:'Time Adverbs for Routines',
      explanation:'Rutin aktiviteleri anlatırken sıklık zarflarını kullanmak konuşmayı doğallaştırır.',
      table:[
        {pronoun:'Her zaman',form:'sempre',example:'Bevo sempre un caffè al mattino.',tr:'Sabahları her zaman kahve içerim.'},
        {pronoun:'Genellikle',form:'di solito / normalmente',example:'Di solito pranzo alle tredici.',tr:'Genellikle saat on üçte öğle yerim.'},
        {pronoun:'Bazen',form:'a volte / qualche volta',example:'A volte cucino, a volte ordino pizza.',tr:'Bazen pişiririm, bazen pizza ısmarlarım.'},
        {pronoun:'Mai',form:'non... mai',example:'Non bevo mai alcolici la sera.',tr:'Akşam hiç alkol içmem.'}
      ],
      note:'Sıklık sırası: sempre (100%) > di solito (80%) > spesso (60%) > a volte (40%) > raramente (20%) > mai (0%).'
    },
    {
      id:'g3',
      title:'Rutin Anlatmak: Basit Geniş Zaman (Presente)',
      title_en:'Describing Routines: Present Tense',
      explanation:'Günlük rutin için presente indicativo (basit geniş zaman) kullanılır. "Di mattina/pomeriggio/sera" ile zaman dilimi belirtilir.',
      table:[
        {pronoun:'Sabah rutini',form:'Di mattina + presente',example:'Di mattina mi sveglio, faccio colazione e vado al lavoro.',tr:'Sabahları uyanırım, kahvaltı yaparım ve işe giderim.'},
        {pronoun:'Öğle rutini',form:'A mezzogiorno + presente',example:'A mezzogiorno pranzo velocemente.',tr:'Öğleyin hızlıca öğle yemeği yerim.'},
        {pronoun:'Akşam rutini',form:'La sera + presente',example:'La sera ceno, guardo la TV e vado a dormire.',tr:'Akşam yemek yerim, TV izlerim ve uyurum.'},
        {pronoun:'Hafta sonu',form:'Il sabato / la domenica + presente',example:'Il sabato faccio sport, la domenica mi riposo.',tr:'Cumartesi spor yaparım, pazar dinlenirim.'}
      ],
      note:'"Andare + a + infinitive" = gitmek ve yapmak. "Vado a mangiare" = yemeye gidiyorum. "Torno a + luogo" = ... e dönmek.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Di solito mi sveglio alle sette e faccio colazione.',tr:'Genellikle saat yedide uyanır ve kahvaltı yaparım.',prompt:'Sabah rutinini anlat'},
    {id:'sp2',en:'Il pomeriggio lavoro in ufficio e faccio una pausa caffè alle quattro.',tr:'Öğleden sonra ofiste çalışırım ve dörtte kahve molası veririm.',prompt:'Öğleden sonra ne yapıyorsun'},
    {id:'sp3',en:'La sera ceno con la famiglia e poi guardo un film.',tr:'Akşam aileyle yemek yerim ve sonra film izlerim.',prompt:'Akşam rutinini anlat'},
    {id:'sp4',en:'Il sabato faccio la spesa al mercato e poi cucinare qualcosa di speciale.',tr:'Cumartesi pazardan alışveriş yapar ve sonra özel bir şey pişiririm.',prompt:'Hafta sonu planını anlat'},
    {id:'sp5',en:'Vado in palestra tre volte a settimana, di solito martedì, giovedì e sabato.',tr:'Haftada üç kez spor salonuna giderim, genellikle salı, perşembe ve cumartesi.',prompt:'Spor rutinini anlat'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Günlük Rutinini Anlat',
      title_en:'Describing Your Daily Routine',
      lines:[
        {speaker:'B',gender:'f',en:'Ciao Ali! Com\'è la tua giornata tipica?',tr:'Merhaba Ali! Tipik günün nasıl?',bd:[{ro:'Com\'è la tua giornata tipica?',tr:'tipik günün nasıl?',role:'question'}]},
        {speaker:'A',gender:'m',en:'Beh, di solito mi sveglio alle sei e mezza. Faccio una doccia veloce, poi faccio colazione: un caffè e dei biscotti.',tr:'Şey, genellikle altı buçukta uyanırım. Hızlı bir duş alırım, sonra kahvaltı yaparım: bir kahve ve bisküvi.',bd:[{ro:'di solito mi sveglio',tr:'genellikle uyanırım',role:'routine'},{ro:'Faccio una doccia veloce',tr:'hızlı duş alırım',role:'routine'},{ro:'un caffè e dei biscotti',tr:'kahve ve bisküvi',role:'meal'}]},
        {speaker:'B',gender:'f',en:'E poi?',tr:'Sonra?',bd:[{ro:'E poi?',tr:'ve sonra?',role:'question'}]},
        {speaker:'A',gender:'m',en:'Vado al lavoro in metro. Alle tredici pranzo velocemente con i colleghi. Torno a casa verso le diciotto.',tr:'İşe metroyla gidiyorum. On üçte iş arkadaşlarımla hızlıca öğle yemeği yiyorum. Saat on sekiz civarında eve dönüyorum.',bd:[{ro:'Vado al lavoro in metro',tr:'işe metroyla gidiyorum',role:'transport'},{ro:'verso le diciotto',tr:'on sekiz civarında',role:'time'}]},
        {speaker:'B',gender:'f',en:'E la sera?',tr:'Akşam?',bd:[{ro:'E la sera?',tr:'akşam?',role:'question'}]},
        {speaker:'A',gender:'m',en:'La sera cucino, mangio, poi leggo un po\' o guardo una serie TV. Vado a letto verso le undici.',tr:'Akşam yemek pişiririm, yerim, sonra biraz kitap okurum veya dizi izlerim. Saat on bir civarında yatarım.',bd:[{ro:'La sera cucino, mangio',tr:'akşam yemek pişirip yerim',role:'routine'},{ro:'poi leggo un po\'',tr:'sonra biraz okurum',role:'routine'},{ro:'Vado a letto verso le undici',tr:'saat on birde yatarım',role:'routine'}]},
        {speaker:'B',gender:'f',en:'Che vita organizzata! Io invece sono molto più caotica!',tr:'Ne düzenli bir hayat! Ben ise çok daha kaotik biriyim!',bd:[{ro:'Che vita organizzata!',tr:'ne düzenli hayat!',role:'reaction'},{ro:'Io invece sono molto più caotica',tr:'ben ise çok daha kaotik',role:'contrast'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Mi chiamo Sofia. Mi sveglio sempre alle sei e mezza. Prima faccio una corsa di trenta minuti, poi faccio la doccia. A colazione bevo un tè verde e mangio frutta. Alle otto e mezza vado in ufficio a piedi. A pranzo mangio un panino in ufficio. Torno a casa alle sette di sera, cucino la cena e poi mi rilasso.',
      tr:'Adım Sofia. Her zaman altı buçukta uyanırım. Önce otuz dakika koşu yaparım, sonra duş alırım. Kahvaltıda yeşil çay içer ve meyve yerim. Sekiz buçukta ofise yürüyerek giderim. Öğle yemeğinde ofiste sandviç yerim. Akşam yedide eve döner, akşam yemeği pişirir ve dinlenirim.',
      questions:[
        {q:'Sofia sabah spor yapıyor mu?',opts:['Hayır','Evet, yüzüyor','Evet, koşuyor','Evet, bisiklet sürüyor'],answer:2,tr:'Evet, koşuyor (corsa)'},
        {q:'Ofise nasıl gidiyor?',opts:['Arabayla','Metroyla','Otobüsle','Yürüyerek'],answer:3,tr:'Yürüyerek (a piedi)'},
        {q:'Öğlen ne yiyor?',opts:['Salata','Makarna','Sandviç','Pizza'],answer:2,tr:'Sandviç (un panino)'}
      ]
    }
  ],
  tones:[]
};
LESSONS[20] = L20;
