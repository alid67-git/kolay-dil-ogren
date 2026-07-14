// ders31.js — Italian Lesson 31: Casa e mobili (Ev ve Mobilyalar)
const L31 = {
  words:[
    {id:'w1',en:'il salotto / il soggiorno',ro:'il salotto',tr:'oturma odası',examples:[{it:'Il salotto è la stanza dove la famiglia si riunisce la sera.',tr:'Oturma odası ailenin akşamları bir araya geldiği oda.',bd:[{ro:'Il salotto',tr:'oturma odası'},{ro:'si riunisce la sera',tr:'akşamları bir araya gelir'}]}]},
    {id:'w2',en:'la cucina',ro:'la cucina',tr:'mutfak',examples:[{it:'In Italia la cucina è il cuore della casa: si cucina e si mangia insieme.',tr:'İtalya\'da mutfak evin kalbidir: birlikte pişirilir ve yenilir.',bd:[{ro:'la cucina è il cuore della casa',tr:'mutfak evin kalbi'},{ro:'si cucina e si mangia insieme',tr:'birlikte pişirilir ve yenilir'}]}]},
    {id:'w3',en:'la camera da letto',ro:'la camera da letto',tr:'yatak odası',examples:[{it:'La mia camera da letto è piccola ma accogliente, con una grande finestra.',tr:'Yatak odam küçük ama sıcak, büyük bir penceresi var.',bd:[{ro:'La mia camera da letto è piccola ma accogliente',tr:'yatak odam küçük ama sıcak'},{ro:'con una grande finestra',tr:'büyük bir penceresi var'}]}]},
    {id:'w4',en:'il bagno / la doccia',ro:'il bagno',tr:'banyo / duş',examples:[{it:'Il bagno è occupato! Ho detto che mi faccio la doccia prima!',tr:'Banyo dolu! Önce ben duş alacağımı söyledim!',bd:[{ro:'Il bagno è occupato',tr:'banyo dolu'},{ro:'mi faccio la doccia',tr:'duş alıyorum'}]}]},
    {id:'w5',en:'il divano / il sofà',ro:'il divano',tr:'kanepe',examples:[{it:'Il divano è comodissimo, mi ci addormento spesso guardando la TV.',tr:'Kanepe çok rahat, TV izlerken sık sık üzerinde uykuya dalıyorum.',bd:[{ro:'Il divano è comodissimo',tr:'kanepe çok rahat'},{ro:'mi ci addormento spesso',tr:'sık sık üzerinde uykuya dalıyorum'}]}]},
    {id:'w6',en:'il letto / il materasso',ro:'il letto',tr:'yatak / şilte',examples:[{it:'Ho comprato un nuovo materasso ortopedico: dormo molto meglio adesso.',tr:'Yeni bir ortopedik şilte aldım: şimdi çok daha iyi uyuyorum.',bd:[{ro:'un nuovo materasso ortopedico',tr:'yeni bir ortopedik şilte'},{ro:'dormo molto meglio adesso',tr:'şimdi çok daha iyi uyuyorum'}]}]},
    {id:'w7',en:'il tavolo / la sedia',ro:'il tavolo',tr:'masa / sandalye',examples:[{it:'Il tavolo da pranzo può ospitare fino a otto persone per le feste.',tr:'Yemek masası kutlamalar için sekiz kişiye kadar alabilir.',bd:[{ro:'Il tavolo da pranzo',tr:'yemek masası'},{ro:'può ospitare fino a otto persone',tr:'sekiz kişiye kadar alabilir'}]}]},
    {id:'w8',en:'l\'armadio / il cassettone',ro:'l\'armadio',tr:'dolap / çekmeceli dolap',examples:[{it:'L\'armadio è pieno: devo eliminare i vestiti che non metto più.',tr:'Dolap dolu: artık giymediğim kıyafetleri atmam lazım.',bd:[{ro:'L\'armadio è pieno',tr:'dolap dolu'},{ro:'devo eliminare i vestiti',tr:'kıyafetleri atmam lazım'}]}]},
    {id:'w9',en:'la scrivania / la libreria',ro:'la scrivania',tr:'yazı masası / kitaplık',examples:[{it:'Ho una bella scrivania vicino alla finestra dove studio ogni sera.',tr:'Her akşam çalıştığım pencerenin yanında güzel bir yazı masam var.',bd:[{ro:'una bella scrivania vicino alla finestra',tr:'pencerenin yanında güzel bir yazı masası'},{ro:'dove studio ogni sera',tr:'her akşam çalıştığım'}]}]},
    {id:'w10',en:'la lampada / la luce',ro:'la lampada',tr:'lamba / ışık',examples:[{it:'Metti più luce in questa stanza, è troppo buia per leggere.',tr:'Bu odaya daha fazla ışık koy, okumak için çok karanlık.',bd:[{ro:'Metti più luce',tr:'daha fazla ışık koy'},{ro:'è troppo buia per leggere',tr:'okumak için çok karanlık'}]}]},
    {id:'w11',en:'la finestra / le tende',ro:'la finestra',tr:'pencere / perdeler',examples:[{it:'Apri le tende, entra un po\' di sole. Voglio vedere la luce!',tr:'Perdeleri aç, biraz güneş girsin. Işığı görmek istiyorum!',bd:[{ro:'Apri le tende',tr:'perdeleri aç'},{ro:'entra un po\' di sole',tr:'biraz güneş girer'}]}]},
    {id:'w12',en:'il pavimento / il soffitto',ro:'il pavimento',tr:'zemin / tavan',examples:[{it:'Il pavimento di marmo è bellissimo ma molto freddo in inverno.',tr:'Mermer zemin çok güzel ama kışın çok soğuk.',bd:[{ro:'Il pavimento di marmo',tr:'mermer zemin'},{ro:'molto freddo in inverno',tr:'kışın çok soğuk'}]}]},
    {id:'w13',en:'il muro / la parete',ro:'il muro',tr:'duvar',examples:[{it:'Sulle pareti del salotto ci sono dipinti di famiglia e foto ricordo.',tr:'Oturma odasının duvarlarında aile resimleri ve hatıra fotoğrafları var.',bd:[{ro:'Sulle pareti del salotto',tr:'oturma odasının duvarlarında'},{ro:'dipinti di famiglia e foto ricordo',tr:'aile resimleri ve hatıra fotoğrafları'}]}]},
    {id:'w14',en:'il frigorifero / il forno',ro:'il frigorifero',tr:'buzdolabı / fırın',examples:[{it:'Il frigorifero è vuoto, devo andare a fare la spesa domani.',tr:'Buzdolabı boş, yarın alışverişe gitmem lazım.',bd:[{ro:'Il frigorifero è vuoto',tr:'buzdolabı boş'},{ro:'devo andare a fare la spesa',tr:'alışverişe gitmem lazım'}]}]},
    {id:'w15',en:'la lavatrice / la lavastoviglie',ro:'la lavatrice',tr:'çamaşır makinesi / bulaşık makinesi',examples:[{it:'La lavatrice si è rotta, devo chiamare il tecnico.',tr:'Çamaşır makinesi bozuldu, teknisyen çağırmam lazım.',bd:[{ro:'La lavatrice si è rotta',tr:'çamaşır makinesi bozuldu'},{ro:'devo chiamare il tecnico',tr:'teknisyen çağırmam lazım'}]}]},
    {id:'w16',en:'il balcone / il terrazzo',ro:'il balcone',tr:'balkon / teras',examples:[{it:'D\'estate faccio colazione sul balcone guardando il mare.',tr:'Yazın denize bakarak balkonda kahvaltı yapıyorum.',bd:[{ro:'D\'estate faccio colazione sul balcone',tr:'yazın balkonda kahvaltı yapıyorum'},{ro:'guardando il mare',tr:'denize bakarak'}]}]},
    {id:'w17',en:'il giardino / il cortile',ro:'il giardino',tr:'bahçe / avlu',examples:[{it:'Abbiamo un piccolo giardino dove coltiviamo erbe aromatiche.',tr:'Aromatik otlar yetiştirdiğimiz küçük bir bahçemiz var.',bd:[{ro:'un piccolo giardino',tr:'küçük bir bahçe'},{ro:'dove coltiviamo erbe aromatiche',tr:'aromatik otlar yetiştirdiğimiz'}]}]},
    {id:'w18',en:'l\'ingresso / il corridoio',ro:'l\'ingresso',tr:'giriş / koridor',examples:[{it:'All\'ingresso ci sono gli appendiabiti per i cappotti degli ospiti.',tr:'Girişte misafirler için paltolara askılık var.',bd:[{ro:'All\'ingresso',tr:'girişte'},{ro:'gli appendiabiti per i cappotti degli ospiti',tr:'misafirler için paltolara askılık'}]}]},
    {id:'w19',en:'il riscaldamento / l\'aria condizionata',ro:'il riscaldamento',tr:'ısıtma / klima',examples:[{it:'In agosto l\'aria condizionata è indispensabile, fa troppo caldo.',tr:'Ağustosta klima vazgeçilmez, çok sıcak oluyor.',bd:[{ro:'In agosto l\'aria condizionata è indispensabile',tr:'ağustosta klima vazgeçilmez'},{ro:'fa troppo caldo',tr:'çok sıcak oluyor'}]}]},
    {id:'w20',en:'affittare / comprare casa',ro:'affittare',tr:'ev kiralamak / ev satın almak',examples:[{it:'In Italia è difficile comprare casa da giovani: i prezzi sono molto alti.',tr:'İtalya\'da genç yaşta ev almak zor: fiyatlar çok yüksek.',bd:[{ro:'comprare casa da giovani',tr:'genç yaşta ev almak'},{ro:'i prezzi sono molto alti',tr:'fiyatlar çok yüksek'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'C\'è / Ci Sono: Ev Eşyaları',
      title_en:'C\'è / Ci Sono: Household Items',
      explanation:'Evde ne olduğunu veya olmadığını anlatmak için c\'è ve ci sono.',
      table:[
        {pronoun:'c\'è',form:'tekil şey var',example:'C\'è un divano nel salotto.',tr:'Oturma odasında bir kanepe var.'},
        {pronoun:'ci sono',form:'çoğul şey var',example:'Ci sono tre camere da letto in questo appartamento.',tr:'Bu dairede üç yatak odası var.'},
        {pronoun:'non c\'è / non ci sono',form:'yok',example:'Non c\'è il balcone, mi dispiace.',tr:'Balkon yok, üzgünüm.'},
        {pronoun:'C\'è anche',form:'ayrıca / de var',example:'C\'è anche un grande giardino.',tr:'Ayrıca büyük bir bahçe de var.'}
      ],
      note:'"C\'è il riscaldamento centralizzato?" (merkezi ısıtma var mı?). Ev arama soruları için vazgeçilmez yapı.'
    },
    {
      id:'g2',
      title:'Verbi per la Casa: Ev İşleri',
      title_en:'Household Verbs',
      explanation:'Ev işlerini anlatmak için kullanılan temel fiiller.',
      table:[
        {pronoun:'pulire / fare le pulizie',form:'temizlemek',example:'Domenica faccio le pulizie di casa.',tr:'Pazar günü ev temizliği yapıyorum.'},
        {pronoun:'cucinare / preparare',form:'yemek pişirmek',example:'Mia madre cucina sempre piatti deliziosi.',tr:'Annem her zaman lezzetli yemekler pişirir.'},
        {pronoun:'riordinare / mettere in ordine',form:'toplamak / düzenlemek',example:'Riordino la mia camera ogni sera.',tr:'Her akşam odamı topluyorum.'},
        {pronoun:'riparare / aggiustare',form:'tamir etmek',example:'Devo riparare il rubinetto che perde.',tr:'Akan musluğu tamir etmem lazım.'}
      ],
      note:'"Fare la spesa" = alışveriş yapmak (market). "Fare il bucato" = çamaşır yıkamak. "Stirare" = ütü yapmak. "Passare l\'aspirapolvere" = elektrikli süpürge çekmek.'
    },
    {
      id:'g3',
      title:'Preposizioni di Luogo: Mobilyalar ve Konumlar',
      title_en:'Prepositions of Place: Furniture and Locations',
      explanation:'Eşyaların nerede olduğunu ifade etmek için konum edatları.',
      table:[
        {pronoun:'sopra / sotto',form:'üstünde / altında',example:'Il libro è sopra il tavolo. Le chiavi sono sotto il cuscino.',tr:'Kitap masanın üstünde. Anahtarlar yastığın altında.'},
        {pronoun:'dentro / fuori',form:'içinde / dışında',example:'Il gatto è dentro l\'armadio!',tr:'Kedi dolabın içinde!'},
        {pronoun:'davanti / dietro',form:'önünde / arkasında',example:'Il divano è davanti alla TV.',tr:'Kanepe TV\'nin önünde.'},
        {pronoun:'accanto a / di fianco a',form:'yanında',example:'La scrivania è accanto alla finestra.',tr:'Yazı masası pencerenin yanında.'}
      ],
      note:'"Dov\'è il...?" (nerede?) ile konum edatı kombinasyonu: "Il bagno è in fondo al corridoio" (banyo koridorun sonunda).'
    }
  ],
  speaking:[
    {id:'sp1',en:'Il mio appartamento preferito ha una cucina grande e un balcone con vista sul mare.',tr:'Favori dairem büyük bir mutfağa ve deniz manzaralı balkona sahip.',prompt:'İdeal evi tanımla'},
    {id:'sp2',en:'Devo ancora riordinare il salotto, è un disastro dopo la festa.',tr:'Oturma odasını toplamam hâlâ gerekiyor, parti sonrası felaket.',prompt:'Ev durumu anlat'},
    {id:'sp3',en:'Abito in un monolocale piccolo ma ben organizzato vicino all\'università.',tr:'Üniversiteye yakın küçük ama iyi organize edilmiş bir stüdyo dairede oturuyorum.',prompt:'Evinizi tanıtın'},
    {id:'sp4',en:'La mia camera preferita è la cucina: amo cucinare per gli amici.',tr:'Favori odam mutfak: arkadaşlarıma yemek pişirmeyi seviyorum.',prompt:'En sevdiğin odayı söyle'},
    {id:'sp5',en:'Il riscaldamento non funziona, fa un freddo tremendo in casa!',tr:'Isıtma çalışmıyor, evde korkunç soğuk var!',prompt:'Ev sorunu anlat'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Yeni Daire Arıyorum',
      title_en:'Looking for a New Apartment',
      lines:[
        {speaker:'A',gender:'f',en:'Buongiorno, ho visto il vostro annuncio per l\'appartamento in via Garibaldi.',tr:'Günaydın, Garibaldi Caddesi\'ndeki dairenizin ilanını gördüm.',bd:[{ro:'ho visto il vostro annuncio',tr:'ilanınızı gördüm',role:'intro'},{ro:'in via Garibaldi',tr:'Garibaldi Caddesi\'nde',role:'location'}]},
        {speaker:'B',gender:'m',en:'Certo, signorina. Vuole venire a vederlo? È libero da subito.',tr:'Tabii, hanımefendi. Görmeye gelmek ister misiniz? Hemen boş.',bd:[{ro:'Vuole venire a vederlo?',tr:'görmeye gelmek ister misiniz?',role:'question'},{ro:'libero da subito',tr:'hemen boş',role:'availability'}]},
        {speaker:'A',gender:'f',en:'Sì, ho qualche domanda prima. Quante camere da letto ci sono?',tr:'Evet, önce birkaç sorum var. Kaç yatak odası var?',bd:[{ro:'ho qualche domanda',tr:'birkaç sorum var',role:'question'},{ro:'Quante camere da letto ci sono?',tr:'kaç yatak odası var?',role:'question'}]},
        {speaker:'B',gender:'m',en:'Due camere da letto, un bagno e mezzo, cucina abitabile e soggiorno. C\'è anche il balcone con vista sul parco.',tr:'İki yatak odası, bir buçuk banyo, büyük mutfak ve oturma odası. Parka bakan balkon da var.',bd:[{ro:'cucina abitabile',tr:'büyük/yaşanabilir mutfak',role:'feature'},{ro:'vista sul parco',tr:'parka bakan',role:'view'}]},
        {speaker:'A',gender:'f',en:'Ottimo. E le spese condominiali sono incluse nell\'affitto?',tr:'Harika. Aidat kiraya dahil mi?',bd:[{ro:'le spese condominiali',tr:'aidat',role:'costs'},{ro:'incluse nell\'affitto',tr:'kiraya dahil',role:'question'}]},
        {speaker:'B',gender:'m',en:'No, l\'affitto è novecento euro, più le spese di circa centocinquanta euro al mese.',tr:'Hayır, kira dokuz yüz euro, artı aylık yaklaşık yüz elli euro gider.',bd:[{ro:'l\'affitto è novecento euro',tr:'kira dokuz yüz euro',role:'price'},{ro:'circa centocinquanta euro al mese',tr:'aylık yaklaşık yüz elli euro',role:'extra_costs'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Gli italiani hanno un rapporto speciale con la casa. La casa di proprietà è ancora un sogno per molti. Nelle grandi città come Milano e Roma, i prezzi degli immobili sono altissimi e gli affitti sono molto cari. Molti giovani continuano a vivere con i genitori fino ai trent\'anni o più, anche per ragioni economiche. Il "salotto buono" — la stanza dei momenti speciali — è ancora presente in molte case italiane tradizionali.',
      tr:'İtalyanlar evle özel bir ilişki içindedir. Kendi evi olmak hâlâ pek çoğu için bir rüya. Milano ve Roma gibi büyük şehirlerde gayrimenkul fiyatları çok yüksek ve kiralar çok pahalı. Pek çok genç, kısmen ekonomik nedenlerle otuz yaşına ve daha da ilerisine kadar aileleriyle yaşamaya devam ediyor. "Salotto buono" — özel anlar için oda — hâlâ pek çok geleneksel İtalyan evinde mevcut.',
      questions:[
        {q:'İtalyan gençler neden aileleriyle uzun süre yaşıyor?',opts:['Kültürel nedenler ve yüksek kiralar','Yasal zorunluluk','Dil bariyerleri','İş bulamadıkları için'],answer:0,tr:'Kültürel nedenler ve yüksek kiralar'},
        {q:'"Salotto buono" ne işe yarar?',opts:['Günlük yaşam odası','Özel anlar için oda','Çalışma odası','Depo'],answer:1,tr:'Özel anlar için oda'},
        {q:'Hangi şehirlerde gayrimenkul fiyatları çok yüksek?',opts:['Napoli ve Palermo','Torino ve Bologna','Milano ve Roma','Siena ve Perugia'],answer:2,tr:'Milano ve Roma'}
      ]
    }
  ],
  tones:[]
};
LESSONS[31] = L31;
