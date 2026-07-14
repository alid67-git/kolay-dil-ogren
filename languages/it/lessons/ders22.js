// ders22.js — Italian Lesson 22: Aggettivi (Sıfatlar)
const L22 = {
  words:[
    {id:'w1',en:'grande / piccolo',ro:'grande',tr:'büyük / küçük',examples:[{it:'Roma è una grande città con molti piccoli vicoli.',tr:'Roma büyük bir şehir, pek çok küçük sokağı var.',bd:[{ro:'una grande città',tr:'büyük bir şehir'},{ro:'piccoli vicoli',tr:'küçük sokaklar'}]}]},
    {id:'w2',en:'bello / brutto',ro:'bello',tr:'güzel / çirkin',examples:[{it:'Che bello! Questa chiesa è bellissima!',tr:'Ne güzel! Bu kilise çok güzel!',bd:[{ro:'Che bello!',tr:'ne güzel!'},{ro:'bellissima',tr:'çok güzel (superlativo)'}]}]},
    {id:'w3',en:'buono / cattivo',ro:'buono',tr:'iyi / kötü',examples:[{it:'Questa pizza è buonissima! E il servizio è ottimo.',tr:'Bu pizza çok iyi! Servis de mükemmel.',bd:[{ro:'buonissima',tr:'çok iyi'},{ro:'ottimo',tr:'mükemmel (buono\'nun en yüksek hali)'}]}]},
    {id:'w4',en:'nuovo / vecchio',ro:'nuovo',tr:'yeni / eski',examples:[{it:'Ho comprato un nuovo telefono. Il vecchio era rotto.',tr:'Yeni bir telefon aldım. Eskisi bozuktu.',bd:[{ro:'un nuovo telefono',tr:'yeni bir telefon'},{ro:'Il vecchio era rotto',tr:'eskisi bozuktu'}]}]},
    {id:'w5',en:'giovane / anziano',ro:'giovane',tr:'genç / yaşlı',examples:[{it:'Il mio professore è giovane ma molto esperto.',tr:'Öğretmenim genç ama çok deneyimli.',bd:[{ro:'Il mio professore è giovane',tr:'öğretmenim genç'},{ro:'ma molto esperto',tr:'ama çok deneyimli'}]}]},
    {id:'w6',en:'alto / basso',ro:'alto',tr:'uzun / kısa (boy)',examples:[{it:'Mio fratello è alto quasi due metri.',tr:'Erkek kardeşim neredeyse iki metre boyunda.',bd:[{ro:'Mio fratello è alto',tr:'erkek kardeşim uzun'},{ro:'quasi due metri',tr:'neredeyse iki metre'}]}]},
    {id:'w7',en:'lungo / corto',ro:'lungo',tr:'uzun / kısa (uzunluk)',examples:[{it:'Il Po è il fiume più lungo d\'Italia.',tr:'Po İtalya\'nın en uzun nehri.',bd:[{ro:'il fiume più lungo',tr:'en uzun nehir'},{ro:'d\'Italia',tr:'İtalya\'nın'}]}]},
    {id:'w8',en:'veloce / lento',ro:'veloce',tr:'hızlı / yavaş',examples:[{it:'Il treno ad alta velocità è molto veloce.',tr:'Yüksek hızlı tren çok hızlı.',bd:[{ro:'Il treno ad alta velocità',tr:'yüksek hızlı tren'},{ro:'è molto veloce',tr:'çok hızlı'}]}]},
    {id:'w9',en:'caldo / freddo',ro:'caldo',tr:'sıcak / soğuk',examples:[{it:'Il caffè è caldo, la birra è fredda.',tr:'Kahve sıcak, bira soğuk.',bd:[{ro:'Il caffè è caldo',tr:'kahve sıcak'},{ro:'la birra è fredda',tr:'bira soğuk'}]}]},
    {id:'w10',en:'facile / difficile',ro:'facile',tr:'kolay / zor',examples:[{it:'L\'italiano è difficile ma non impossibile!',tr:'İtalyanca zor ama imkânsız değil!',bd:[{ro:'L\'italiano è difficile',tr:'İtalyanca zor'},{ro:'ma non impossibile',tr:'ama imkânsız değil'}]}]},
    {id:'w11',en:'simpatico / antipatico',ro:'simpatico',tr:'sempatik / antipatik',examples:[{it:'Il mio coinquilino è simpaticissimo, ridiamo sempre.',tr:'Ev arkadaşım çok sempatik, hep güleriz.',bd:[{ro:'Il mio coinquilino è simpaticissimo',tr:'ev arkadaşım çok sempatik'},{ro:'ridiamo sempre',tr:'hep güleriz'}]}]},
    {id:'w12',en:'interessante / noioso',ro:'interessante',tr:'ilginç / sıkıcı',examples:[{it:'Questo libro è molto interessante, non riesco a smettere di leggere.',tr:'Bu kitap çok ilginç, okumayı bırakamıyorum.',bd:[{ro:'è molto interessante',tr:'çok ilginç'},{ro:'non riesco a smettere di leggere',tr:'okumayı bırakamıyorum'}]}]},
    {id:'w13',en:'felice / triste / arrabbiato',ro:'felice',tr:'mutlu / üzgün / kızgın',examples:[{it:'Sono felice quando mangio la pasta.',tr:'Makarna yediğimde mutluyum.',bd:[{ro:'Sono felice quando',tr:'mutluyum ne zaman'},{ro:'mangio la pasta',tr:'makarna yerim'}]}]},
    {id:'w14',en:'stanco / riposato',ro:'stanco',tr:'yorgun / dinlenmiş',examples:[{it:'Sono esausto, ho dormito solo quattro ore.',tr:'Bitiktim, sadece dört saat uyudum.',bd:[{ro:'Sono esausto',tr:'bitiktim'},{ro:'ho dormito solo quattro ore',tr:'sadece dört saat uyudum'}]}]},
    {id:'w15',en:'ricco / povero',ro:'ricco',tr:'zengin / fakir',examples:[{it:'Non sono ricco ma sono soddisfatto della mia vita.',tr:'Zengin değilim ama hayatımdan memnunum.',bd:[{ro:'Non sono ricco',tr:'zengin değilim'},{ro:'sono soddisfatto della mia vita',tr:'hayatımdan memnunum'}]}]},
    {id:'w16',en:'pulito / sporco',ro:'pulito',tr:'temiz / kirli',examples:[{it:'La mia camera è sempre pulita, odio il disordine.',tr:'Odam her zaman temiz, dağınıklıktan nefret ederim.',bd:[{ro:'è sempre pulita',tr:'her zaman temiz'},{ro:'odio il disordine',tr:'dağınıklıktan nefret ederim'}]}]},
    {id:'w17',en:'aperto / chiuso',ro:'aperto',tr:'açık / kapalı',examples:[{it:'Il negozio è aperto dalle nove alle venti.',tr:'Dükkan dokuzdan yirmiye kadar açık.',bd:[{ro:'Il negozio è aperto',tr:'dükkan açık'},{ro:'dalle nove alle venti',tr:'dokuzdan yirmiye'}]}]},
    {id:'w18',en:'libero / occupato',ro:'libero',tr:'boş / meşgul',examples:[{it:'Sei libero questo pomeriggio? — No, sono occupato.',tr:'Bu öğleden sonra boş musun? — Hayır, meşgulüm.',bd:[{ro:'Sei libero?',tr:'boş musun?'},{ro:'sono occupato',tr:'meşgulüm'}]}]},
    {id:'w19',en:'giusto / sbagliato',ro:'giusto',tr:'doğru / yanlış',examples:[{it:'La risposta è giusta! Bravo!',tr:'Cevap doğru! Aferin!',bd:[{ro:'La risposta è giusta',tr:'cevap doğru'},{ro:'Bravo!',tr:'aferin!'}]}]},
    {id:'w20',en:'importante / inutile',ro:'importante',tr:'önemli / gereksiz',examples:[{it:'È molto importante studiare la grammatica.',tr:'Dilbilgisi çalışmak çok önemli.',bd:[{ro:'È molto importante',tr:'çok önemli'},{ro:'studiare la grammatica',tr:'dilbilgisi çalışmak'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Sıfat Çekimi: Cinsiyet ve Sayı Uyumu',
      title_en:'Adjective Agreement: Gender and Number',
      explanation:'İtalyanca\'da sıfatlar başka işaret ettiği ismin cinsiyet ve sayısına göre değişir.',
      table:[
        {pronoun:'-o/-a sonu',form:'m.tek: -o / f.tek: -a / m.çoğ: -i / f.çoğ: -e',example:'alto/alta/alti/alte',tr:'uzun (erkek/kadın/erk.çoğul/kad.çoğul)'},
        {pronoun:'-e sonu',form:'tek: -e / çoğul: -i (her iki cins)',example:'grande/grandi, veloce/veloci',tr:'büyük/büyükler, hızlı/hızlılar'},
        {pronoun:'Yerleşim',form:'sıfat isimden sonra gelir (genel)',example:'un libro interessante',tr:'ilginç bir kitap'},
        {pronoun:'İsmin önünde',form:'bello, buono, grande (ton değişimi)',example:'un bel ragazzo, un buon caffè',tr:'yakışıklı bir delikanlı, güzel bir kahve'}
      ],
      note:'"Bello" ismin önüne gelince il/lo/la ile uyum gösterir: bel (m), bella (f), bei (m.pl), belli (vokalle başlayan), belle (f.pl).'
    },
    {
      id:'g2',
      title:'Karşılaştırma: più / meno / come',
      title_en:'Comparison: più / meno / come',
      explanation:'"Più ... di" = daha ... dan, "meno ... di" = daha az ... dan, "tanto ... quanto / così ... come" = ... kadar.',
      table:[
        {pronoun:'üstünlük',form:'più + sıfat + di',example:'Roma è più grande di Firenze.',tr:'Roma Floransa\'dan daha büyük.'},
        {pronoun:'aşağılık',form:'meno + sıfat + di',example:'Il vino è meno caro della birra.',tr:'Şarap biradan daha az pahalı.'},
        {pronoun:'eşitlik',form:'così + sıfat + come',example:'Sono così alto come mio fratello.',tr:'Erkek kardeşim kadar uzunum.'},
        {pronoun:'en üstünlük',form:'il/la più + sıfat',example:'È il più bello della classe.',tr:'Sınıfın en güzeli.'}
      ],
      note:'Düzensiz karşılaştırmalar: buono → migliore (daha iyi) → il migliore (en iyi). Cattivo → peggiore (daha kötü) → il peggiore (en kötü).'
    },
    {
      id:'g3',
      title:'Superlativi: -issimo Eki',
      title_en:'Superlatives: -issimo Suffix',
      explanation:'"Molto + sıfat" yerine "-issimo" eki de kullanılabilir. Bu daha kuvvetli ve yaygın bir ifade.',
      table:[
        {pronoun:'-issimo',form:'sıfat + -issimo/-issima/-issimi/-issime',example:'bellissimo / buonissimo / stanchissima',tr:'çok güzel / çok iyi / çok yorgun (f.)'},
        {pronoun:'Pratik',form:'interessante → interessantissimo',example:'Quel film è interessantissimo!',tr:'O film çok ilginç!'},
        {pronoun:'Molto',form:'molto + sıfat (alternatif)',example:'Molto bello = bellissimo',tr:'Çok güzel (ikisi eşdeğer)'},
        {pronoun:'Özel',form:'ottimo = il migliore / buonissimo',example:'Questo ristorante è ottimo!',tr:'Bu restoran mükemmel!'}
      ],
      note:'"Ottimo" = çok iyi/mükemmel (buono\'dan), "pessimo" = çok kötü (cattivo\'dan). Bunlar mutlak superlativo.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Questa città è bellissima, non me l\'aspettavo!',tr:'Bu şehir çok güzel, beklemiyordum!',prompt:'Şehri tanımla'},
    {id:'sp2',en:'Il mio italiano è ancora un po\' lento ma sta migliorando.',tr:'İtalyancam hâlâ biraz yavaş ama gelişiyor.',prompt:'Dil seviyeni tanımla'},
    {id:'sp3',en:'Questo esercizio è difficilissimo! Puoi aiutarmi?',tr:'Bu egzersiz çok zor! Yardımcı olabilir misin?',prompt:'Zorluk belirt'},
    {id:'sp4',en:'La pizza qui è ottima, molto meglio del solito!',tr:'Buradaki pizza mükemmel, her zamankinden çok daha iyi!',prompt:'Bir şeyi karşılaştır'},
    {id:'sp5',en:'Sono stanchissimo ma contentissimo, è stata una bella giornata.',tr:'Çok yorgunum ama çok mutluyum, güzel bir gündü.',prompt:'Zıt duygularını anlat'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Roma Hakkında',
      title_en:'About Rome',
      lines:[
        {speaker:'B',gender:'f',en:'Com\'è Roma? È la prima volta che ci vieni?',tr:'Roma nasıl? İlk kez mi geliyorsun?',bd:[{ro:'Com\'è Roma?',tr:'Roma nasıl?',role:'question'},{ro:'È la prima volta',tr:'ilk kez mi',role:'question'}]},
        {speaker:'A',gender:'m',en:'Sì, è la mia prima volta. Roma è bellissima! Le piazze sono enormi e i monumenti sono antichissimi.',tr:'Evet, ilk kez. Roma çok güzel! Meydanlar devasa ve anıtlar çok eski.',bd:[{ro:'bellissima',tr:'çok güzel',role:'adjective'},{ro:'enormi',tr:'devasa',role:'adjective'},{ro:'antichissimi',tr:'çok eski',role:'adjective'}]},
        {speaker:'B',gender:'f',en:'Sì! Roma è la città più bella d\'Italia, secondo me.',tr:'Evet! Bana göre Roma İtalya\'nın en güzel şehri.',bd:[{ro:'la città più bella d\'Italia',tr:'İtalya\'nın en güzel şehri',role:'superlative'},{ro:'secondo me',tr:'bana göre',role:'opinion'}]},
        {speaker:'A',gender:'m',en:'Il cibo qui è buonissimo! Ho mangiato la pasta cacio e pepe ieri: era deliziosa!',tr:'Buradaki yemekler çok iyi! Dün cacio e pepe makarna yedim: muhteşemdi!',bd:[{ro:'buonissimo',tr:'çok iyi',role:'adjective'},{ro:'era deliziosa',tr:'muhteşemdi',role:'adjective'}]},
        {speaker:'B',gender:'f',en:'Ah sì! È un piatto semplice ma buonissimo. Tipicamente romano!',tr:'Ah evet! Basit ama çok lezzetli bir yemek. Tipik Romalı!',bd:[{ro:'semplice',tr:'basit',role:'adjective'},{ro:'Tipicamente romano',tr:'tipik Romalı',role:'description'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Descrivo il mio appartamento ideale. Dovrebbe essere grande ma non enormissimo: tre camere da letto, un salotto luminoso, una cucina moderna e due bagni. Deve essere nuovo oppure appena ristrutturato, non vecchio. E soprattutto, deve essere in una zona tranquilla ma vicino ai mezzi pubblici.',
      tr:'İdeal dairemi tanımlıyorum. Büyük ama çok devasa olmayan olmalı: üç yatak odası, aydınlık oturma odası, modern mutfak ve iki banyo. Yeni ya da yeni tadilatlı olmalı, eski değil. Ve her şeyden önemlisi, sakin bir bölgede ama toplu taşımaya yakın olmalı.',
      questions:[
        {q:'İdeal dairede kaç yatak odası olmalı?',opts:['Bir','İki','Üç','Dört'],answer:2,tr:'Üç (tre camere da letto)'},
        {q:'Daire nasıl olmalı?',opts:['Çok eski','Yeni veya yeni tadilatlı','Eski ama büyük','Küçük ve modern'],answer:1,tr:'Yeni veya yeni tadilatlı (nuovo o appena ristrutturato)'},
        {q:'Konum için öncelik nedir?',opts:['Şehir merkezi','Deniz kenarı','Sakin ama toplu taşımaya yakın','Okula yakın'],answer:2,tr:'Sakin ama toplu taşımaya yakın (tranquilla ma vicino ai mezzi)'}
      ]
    }
  ],
  tones:[]
};
LESSONS[22] = L22;
