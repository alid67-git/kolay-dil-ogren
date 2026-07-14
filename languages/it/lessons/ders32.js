// ders32.js — Italian Lesson 32: Abbigliamento (Giyim)
const L32 = {
  words:[
    {id:'w1',en:'la maglietta / la t-shirt',ro:'la maglietta',tr:'tişört',examples:[{it:'Ho comprato tre magliette nuove in saldo: costano pochissimo.',tr:'İndirimde üç yeni tişört aldım: çok ucuza.',bd:[{ro:'in saldo',tr:'indirimde'},{ro:'costano pochissimo',tr:'çok ucuza mal oluyor'}]}]},
    {id:'w2',en:'la camicia / la blusa',ro:'la camicia',tr:'gömlek / bluz',examples:[{it:'Per il lavoro preferisco le camicie bianche, sono classiche e versatili.',tr:'İş için beyaz gömlekleri tercih ederim, klasik ve çok yönlü.',bd:[{ro:'le camicie bianche',tr:'beyaz gömlekler'},{ro:'classiche e versatili',tr:'klasik ve çok yönlü'}]}]},
    {id:'w3',en:'i pantaloni / i jeans',ro:'i pantaloni',tr:'pantolon / kot pantolon',examples:[{it:'Questi jeans sono troppo stretti, ho bisogno di una taglia più grande.',tr:'Bu kotlar çok dar, bir beden büyüğüne ihtiyacım var.',bd:[{ro:'troppo stretti',tr:'çok dar'},{ro:'una taglia più grande',tr:'bir beden büyük'}]}]},
    {id:'w4',en:'la gonna / il vestito',ro:'la gonna',tr:'etek / elbise',examples:[{it:'Ho messo il vestito rosso per la festa, è elegantissimo.',tr:'Parti için kırmızı elbiseyi giydim, çok şık.',bd:[{ro:'Ho messo il vestito rosso',tr:'kırmızı elbiseyi giydim'},{ro:'per la festa',tr:'parti için'}]}]},
    {id:'w5',en:'la giacca / il cappotto',ro:'la giacca',tr:'ceket / palto',examples:[{it:'In inverno indosso sempre il cappotto di lana, fa molto freddo.',tr:'Kışın her zaman yün palto giyerim, çok soğuk oluyor.',bd:[{ro:'il cappotto di lana',tr:'yün palto'},{ro:'fa molto freddo',tr:'çok soğuk oluyor'}]}]},
    {id:'w6',en:'le scarpe / i stivali',ro:'le scarpe',tr:'ayakkabı / çizmeler',examples:[{it:'Le scarpe italiane sono famose per la qualità artigianale.',tr:'İtalyan ayakkabıları el işçiliği kalitesiyle ünlüdür.',bd:[{ro:'Le scarpe italiane',tr:'İtalyan ayakkabıları'},{ro:'la qualità artigianale',tr:'el işçiliği kalitesi'}]}]},
    {id:'w7',en:'le calze / i calzini',ro:'le calze',tr:'çorap / kısa çorap',examples:[{it:'Non trovo il secondo calzino — dov\'è sparito?',tr:'İkinci çorabı bulamıyorum — nereye kayboldu?',bd:[{ro:'Non trovo il secondo calzino',tr:'ikinci çorabı bulamıyorum'},{ro:'dov\'è sparito?',tr:'nereye kayboldu?'}]}]},
    {id:'w8',en:'la borsa / lo zaino',ro:'la borsa',tr:'çanta / sırt çantası',examples:[{it:'Ho una borsa di cuoio italiano che ho comprato a Firenze.',tr:'Floransa\'da aldığım İtalyan deri çantam var.',bd:[{ro:'una borsa di cuoio italiano',tr:'İtalyan deri çanta'},{ro:'che ho comprato a Firenze',tr:'Floransa\'da aldığım'}]}]},
    {id:'w9',en:'il cappello / la sciarpa',ro:'il cappello',tr:'şapka / atkı',examples:[{it:'In montagna metto sempre il cappello e la sciarpa di lana.',tr:'Dağda her zaman şapka ve yün atkı takıyorum.',bd:[{ro:'il cappello e la sciarpa di lana',tr:'şapka ve yün atkı'},{ro:'In montagna',tr:'dağda'}]}]},
    {id:'w10',en:'i guanti / il berretto',ro:'i guanti',tr:'eldiven / bere',examples:[{it:'Ho dimenticato i guanti a casa — le mani mi si gelano!',tr:'Eldivenlerimi evde unuttum — ellerim donuyor!',bd:[{ro:'Ho dimenticato i guanti a casa',tr:'eldivenlerimi evde unuttum'},{ro:'le mani mi si gelano',tr:'ellerim donuyor'}]}]},
    {id:'w11',en:'la cintura / la cravatta',ro:'la cintura',tr:'kemer / kravat',examples:[{it:'Per un colloquio di lavoro, la cravatta è ancora importante.',tr:'İş görüşmesi için kravat hâlâ önemli.',bd:[{ro:'Per un colloquio di lavoro',tr:'iş görüşmesi için'},{ro:'la cravatta è ancora importante',tr:'kravat hâlâ önemli'}]}]},
    {id:'w12',en:'la taglia / la misura',ro:'la taglia',tr:'beden / ölçü',examples:[{it:'Che taglia porta in pantaloni? Devo comprarne un paio per mio marito.',tr:'Pantolonda hangi bedeni giyiyor? Kocam için bir çift almam lazım.',bd:[{ro:'Che taglia porta',tr:'hangi bedeni giyiyor'},{ro:'per mio marito',tr:'kocam için'}]}]},
    {id:'w13',en:'il cotone / la lana / la seta',ro:'il cotone',tr:'pamuk / yün / ipek',examples:[{it:'Preferisco i vestiti di cotone in estate: respirano meglio.',tr:'Yazın pamuklu kıyafetleri tercih ederim: daha iyi nefes alıyor.',bd:[{ro:'i vestiti di cotone',tr:'pamuklu kıyafetler'},{ro:'respirano meglio',tr:'daha iyi nefes alıyor'}]}]},
    {id:'w14',en:'elegante / casual / sportivo',ro:'elegante',tr:'şık / günlük / spor',examples:[{it:'Quel vestito è elegantissimo per una cena romantica!',tr:'O elbise romantik bir akşam yemeği için çok şık!',bd:[{ro:'elegantissimo',tr:'çok şık'},{ro:'per una cena romantica',tr:'romantik bir akşam yemeği için'}]}]},
    {id:'w15',en:'provare / stare bene',ro:'provare',tr:'denemek / yakışmak',examples:[{it:'Posso provare questa giacca? — Certo, il camerino è là.',tr:'Bu ceketi deneyebilir miyim? — Tabii, kabin orada.',bd:[{ro:'Posso provare questa giacca?',tr:'bu ceketi deneyebilir miyim?'},{ro:'Il camerino è là',tr:'kabin orada'}]}]},
    {id:'w16',en:'il saldo / lo sconto',ro:'il saldo',tr:'indirim / iskonto',examples:[{it:'Ho aspettato i saldi di gennaio per comprare quel cappotto.',tr:'O paltoyu almak için ocak indirimlerini bekledim.',bd:[{ro:'i saldi di gennaio',tr:'ocak indirimleri'},{ro:'per comprare quel cappotto',tr:'o paltoyu almak için'}]}]},
    {id:'w17',en:'la moda / il marchio',ro:'la moda',tr:'moda / marka',examples:[{it:'L\'Italia è capitale mondiale della moda: Gucci, Prada, Versace sono tutti italiani.',tr:'İtalya moda başkenti: Gucci, Prada, Versace hepsi İtalyan.',bd:[{ro:'L\'Italia è capitale mondiale della moda',tr:'İtalya moda başkenti'},{ro:'tutti italiani',tr:'hepsi İtalyan'}]}]},
    {id:'w18',en:'il guardaroba / il vestiario',ro:'il guardaroba',tr:'gardırop / giysi',examples:[{it:'Ogni stagione pulisco il mio guardaroba e donate i vestiti che non uso.',tr:'Her mevsim gardırobumu temizliyorum ve kullanmadığım kıyafetleri bağışlıyorum.',bd:[{ro:'pulisco il mio guardaroba',tr:'gardırobumu temizliyorum'},{ro:'donate i vestiti che non uso',tr:'kullanmadığım kıyafetleri bağışlıyorum'}]}]},
    {id:'w19',en:'stirare / lavare in lavatrice',ro:'stirare',tr:'ütü yapmak / makinede yıkamak',examples:[{it:'Questa camicia deve essere stirata, è tutta sgualcita.',tr:'Bu gömleğin ütülenmesi lazım, tamamen buruşmuş.',bd:[{ro:'deve essere stirata',tr:'ütülenmesi lazım'},{ro:'è tutta sgualcita',tr:'tamamen buruşmuş'}]}]},
    {id:'w20',en:'vestirsi / spogliarsi',ro:'vestirsi',tr:'giyinmek / soyunmak',examples:[{it:'La mattina mi vesto in fretta: cinque minuti e sono pronto.',tr:'Sabah aceleyle giyiniyorum: beş dakika ve hazırım.',bd:[{ro:'mi vesto in fretta',tr:'aceleyle giyiniyorum'},{ro:'cinque minuti e sono pronto',tr:'beş dakika ve hazırım'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Vestirsi: Giyinme Fiilleri ve Yapılar',
      title_en:'Getting Dressed: Verbs and Structures',
      explanation:'Giyim hakkında konuşmak için kullanılan temel fiil yapıları.',
      table:[
        {pronoun:'indossare / mettere',form:'giymek / takmak',example:'Oggi indosso il vestito verde.',tr:'Bugün yeşil elbise giyiyorum.'},
        {pronoun:'togliersi / levarsi',form:'çıkarmak / sökmek',example:'Togliti le scarpe prima di entrare.',tr:'İçeri girmeden önce ayakkabılarını çıkar.'},
        {pronoun:'vestirsi di / in',form:'renge/tarzla giyinmek',example:'Si veste sempre di nero.',tr:'Her zaman siyah giyer.'},
        {pronoun:'portare',form:'giymek/taşımak (aksesuarlar)',example:'Porta sempre gli occhiali da sole.',tr:'Her zaman güneş gözlüğü takıyor.'}
      ],
      note:'"Stare bene" = yakışmak: "Ti sta bene" (sana yakışıyor). "Come mi sta?" (nasıl duruyor?). "Fa molto caldo/freddo" ile giyim önerisi: "Metti la giacca, fa freddo!"'
    },
    {
      id:'g2',
      title:'Aggettivi di Abbigliamento: Kıyafet Sıfatları',
      title_en:'Clothing Adjectives',
      explanation:'Kıyafetleri tarif etmek için kullanılan sıfatlar ve kombinasyonları.',
      table:[
        {pronoun:'materiale',form:'malzeme',example:'una camicia di cotone / di seta / di lana',tr:'pamuklu / ipekli / yünlü gömlek'},
        {pronoun:'fantasia',form:'desen',example:'a righe / a quadri / tinta unita',tr:'çizgili / kareli / düz renk'},
        {pronoun:'fit',form:'beden uyumu',example:'stretto / largo / aderente / comodo',tr:'dar / geniş / yapışık / rahat'},
        {pronoun:'stile',form:'stil',example:'elegante / casual / formale / sportivo',tr:'şık / günlük / resmi / spor'}
      ],
      note:'"In saldo" = indirimde. "Fare shopping" = alışveriş yapmak. "Quanto costa?" / "Quanto viene?" = ne kadar?'
    },
    {
      id:'g3',
      title:'Comprare Vestiti: Mağazada Dil',
      title_en:'Buying Clothes: Shopping Language',
      explanation:'Kıyafet mağazasında ihtiyaç duyulan dil yapıları.',
      table:[
        {pronoun:'Cerco...',form:'arıyorum',example:'Cerco una giacca per il lavoro.',tr:'İş için ceket arıyorum.'},
        {pronoun:'Ce l\'ha in...?',form:'...\'da var mı?',example:'Ce l\'ha in taglia M / in blu?',tr:'M beden / mavi var mı?'},
        {pronoun:'È troppo...',form:'çok ...',example:'È troppo stretto / larga / lungo.',tr:'Çok dar / geniş / uzun.'},
        {pronoun:'Posso cambiarlo?',form:'değiştirebilir miyim?',example:'Posso cambiarlo se non va bene?',tr:'Olmaz ise değiştirebilir miyim?'}
      ],
      note:'"Fare un reso" = iade etmek. "Lo scontrino" = fiş — İtalya\'da iade için şart. "Accettate carte di credito?" (kredi kartı kabul ediyor musunuz?)'
    }
  ],
  speaking:[
    {id:'sp1',en:'Per me la moda è un\'arte: ogni giorno scelgo il mio outfit come un artista.',tr:'Benim için moda bir sanattır: her gün bir sanatçı gibi kıyafetimi seçiyorum.',prompt:'Moda anlayışını anlat'},
    {id:'sp2',en:'Ho trovato una giacca bellissima in saldo: cinquanta euro invece di duecento!',tr:'İndirimde güzel bir ceket buldum: iki yüz yerine elli euro!',prompt:'İndirim deneyimi'},
    {id:'sp3',en:'Non so cosa mettere per la festa. Mi aiuti a scegliere?',tr:'Parti için ne giysem bilmiyorum. Seçmeme yardım eder misin?',prompt:'Tavsiye iste'},
    {id:'sp4',en:'In Italia l\'abbigliamento fa la differenza: si nota subito chi è curato.',tr:'İtalya\'da giyim fark yaratır: bakımlı kişi hemen göze çarpar.',prompt:'İtalyan moda kültürü'},
    {id:'sp5',en:'Questo maglione è di cashmere puro, morbidissimo!',tr:'Bu kazak saf kaşmir, çok yumuşak!',prompt:'Kumaş kalitesi anlat'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Kıyafet Mağazasında',
      title_en:'In a Clothing Store',
      lines:[
        {speaker:'C',gender:'f',en:'Buongiorno! Posso aiutarla?',tr:'Günaydın! Yardımcı olabilir miyim?',bd:[{ro:'Posso aiutarla?',tr:'yardımcı olabilir miyim? (kibarca)',role:'greeting'}]},
        {speaker:'A',gender:'f',en:'Sì grazie. Cerco un vestito elegante per un matrimonio. Non troppo formale.',tr:'Evet teşekkürler. Bir düğün için şık ama çok resmi olmayan bir elbise arıyorum.',bd:[{ro:'per un matrimonio',tr:'bir düğün için',role:'occasion'},{ro:'Non troppo formale',tr:'çok resmi olmayan',role:'style'}]},
        {speaker:'C',gender:'f',en:'Che taglia porta?',tr:'Hangi bedeni giyiyor?',bd:[{ro:'Che taglia porta?',tr:'hangi bedeni giyiyor?',role:'question'}]},
        {speaker:'A',gender:'f',en:'La taglia 42. E vorrei qualcosa di colorato, non il solito nero.',tr:'42 beden. Ve olağan siyah değil, renkli bir şey istiyorum.',bd:[{ro:'La taglia 42',tr:'42 beden',role:'size'},{ro:'non il solito nero',tr:'olağan siyah değil',role:'preference'}]},
        {speaker:'C',gender:'f',en:'Allora, guardi questo vestito azzurro con fiori bianchi. È di seta, molto elegante.',tr:'O zaman bu çiçekli mavi elbiseye bakın. İpekten, çok şık.',bd:[{ro:'questo vestito azzurro con fiori bianchi',tr:'bu çiçekli mavi elbise',role:'item'},{ro:'È di seta',tr:'ipekten',role:'material'}]},
        {speaker:'A',gender:'f',en:'Oh, è bellissimo! Posso provarlo?',tr:'Oh, çok güzel! Deneyebilir miyim?',bd:[{ro:'Oh, è bellissimo!',tr:'oh, çok güzel!',role:'reaction'},{ro:'Posso provarlo?',tr:'deneyebilir miyim?',role:'request'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'L\'Italia è sinonimo di moda. Milano, con le sue settimane della moda, è una delle capitali mondiali del fashion. Marchi come Gucci, Versace, Prada e Armani sono conosciuti in tutto il mondo. La moda italiana si distingue per la qualità dei tessuti, l\'artigianalità e lo stile elegante. Il "Made in Italy" è un marchio di qualità riconosciuto globalmente. Anche la moda sostenibile sta crescendo in Italia, con designer che usano materiali ecologici.',
      tr:'İtalya moda demektir. Haftalık moda haftasıyla Milano dünyanın moda başkentlerinden biri. Gucci, Versace, Prada ve Armani gibi markalar tüm dünyada tanınıyor. İtalyan moda, kumaş kalitesiyle, el işçiliğiyle ve zarif stiliyle öne çıkıyor. "Made in Italy" küresel olarak tanınan bir kalite markası. Ekolojik malzeme kullanan tasarımcılarla sürdürülebilir moda da İtalya\'da büyüyor.',
      questions:[
        {q:'Milano moda haftalarda neden önemli?',opts:['Ucuz kıyafetler satıldığı için','Dünyanın moda başkentlerinden biri olduğu için','Sadece İtalyan tasarımcılar çalıştığı için','Köklü bir tarihi olmadığı için'],answer:1,tr:'Dünyanın moda başkentlerinden biri olduğu için'},
        {q:'"Made in Italy" ne anlama gelir?',opts:['Ucuz üretim','Küresel kalite markası','Sadece İtalyan malzemeleri','Moda değil, yemek anlamında'],answer:1,tr:'Küresel olarak tanınan kalite markası'},
        {q:'İtalyan modası neyle öne çıkıyor?',opts:['Düşük fiyatlar','Kumaş kalitesi ve el işçiliği','Hızlı üretim','Yalnızca spor kıyafetler'],answer:1,tr:'Kumaş kalitesi ve el işçiliği (tessuti e artigianalità)'}
      ]
    }
  ],
  tones:[]
};
LESSONS[32] = L32;
