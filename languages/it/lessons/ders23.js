// ders23.js — Italian Lesson 23: Persone e relazioni (Kişiler ve İlişkiler)
const L23 = {
  words:[
    {id:'w1',en:'la famiglia',ro:'la famiglia',tr:'aile',examples:[{it:'La mia famiglia è molto unita.',tr:'Ailem çok birbirine bağlı.',bd:[{ro:'La mia famiglia',tr:'ailem'},{ro:'è molto unita',tr:'çok birbirine bağlı'}]}]},
    {id:'w2',en:'il padre / la madre',ro:'il padre',tr:'baba / anne',examples:[{it:'Mio padre lavora come ingegnere, mia madre è insegnante.',tr:'Babam mühendis olarak çalışıyor, annem öğretmen.',bd:[{ro:'Mio padre',tr:'babam'},{ro:'mia madre è insegnante',tr:'annem öğretmen'}]}]},
    {id:'w3',en:'il fratello / la sorella',ro:'il fratello',tr:'erkek kardeş / kız kardeş',examples:[{it:'Ho un fratello maggiore e una sorella minore.',tr:'Bir büyük erkek kardeşim ve bir küçük kız kardeşim var.',bd:[{ro:'un fratello maggiore',tr:'büyük erkek kardeş'},{ro:'una sorella minore',tr:'küçük kız kardeş'}]}]},
    {id:'w4',en:'il marito / la moglie',ro:'il marito',tr:'koca / eş (kadın)',examples:[{it:'Mio marito cucina meglio di me!',tr:'Kocam benden iyi yemek pişiriyor!',bd:[{ro:'Mio marito',tr:'kocam'},{ro:'cucina meglio di me',tr:'benden iyi pişiriyor'}]}]},
    {id:'w5',en:'il fidanzato / la fidanzata',ro:'il fidanzato',tr:'nişanlı / sevgili',examples:[{it:'Mi sono fidanzato la scorsa estate.',tr:'Geçen yaz nişanlandım.',bd:[{ro:'Mi sono fidanzato',tr:'nişanlandım'},{ro:'la scorsa estate',tr:'geçen yaz'}]}]},
    {id:'w6',en:'il nonno / la nonna',ro:'il nonno',tr:'büyükbaba / büyükanne',examples:[{it:'Mia nonna ha novant\'anni e sta benissimo!',tr:'Büyükannem doksan yaşında ve çok iyi!',bd:[{ro:'Mia nonna ha novant\'anni',tr:'büyükannem doksan yaşında'},{ro:'sta benissimo',tr:'çok iyi'}]}]},
    {id:'w7',en:'il figlio / la figlia',ro:'il figlio',tr:'oğul / kız çocuk',examples:[{it:'Ho due figli: un maschio e una femmina.',tr:'İki çocuğum var: bir erkek bir kız.',bd:[{ro:'Ho due figli',tr:'iki çocuğum var'},{ro:'un maschio e una femmina',tr:'bir erkek bir kız'}]}]},
    {id:'w8',en:'lo zio / la zia',ro:'lo zio',tr:'amca/dayı/enişte / hala/teyze',examples:[{it:'Mia zia abita a Napoli e fa la cuoca.',tr:'Teyzem Napoli\'de yaşıyor ve aşçılık yapıyor.',bd:[{ro:'Mia zia abita a Napoli',tr:'teyzem Napoli\'de yaşıyor'},{ro:'fa la cuoca',tr:'aşçılık yapıyor'}]}]},
    {id:'w9',en:'il cugino / la cugina',ro:'il cugino',tr:'erkek/kız kuzen',examples:[{it:'Mio cugino è il mio migliore amico.',tr:'Kuzenim en iyi arkadaşım.',bd:[{ro:'Mio cugino',tr:'kuzenim'},{ro:'è il mio migliore amico',tr:'en iyi arkadaşım'}]}]},
    {id:'w10',en:'l\'amico / l\'amica',ro:'l\'amico',tr:'erkek/kadın arkadaş',examples:[{it:'Ho conosciuto la mia migliore amica all\'università.',tr:'En iyi arkadaşımı üniversitede tanıdım.',bd:[{ro:'Ho conosciuto',tr:'tanıdım'},{ro:'la mia migliore amica',tr:'en iyi arkadaşımı'},{ro:'all\'università',tr:'üniversitede'}]}]},
    {id:'w11',en:'il vicino / la vicina di casa',ro:'il vicino',tr:'komşu',examples:[{it:'I miei vicini di casa sono molto gentili.',tr:'Komşularım çok kibar.',bd:[{ro:'I miei vicini di casa',tr:'komşularım'},{ro:'sono molto gentili',tr:'çok kibar'}]}]},
    {id:'w12',en:'single / sposato',ro:'sposato',tr:'bekâr / evli',examples:[{it:'Sono single da due anni, non ho voglia di una relazione.',tr:'İki yıldır bekarım, bir ilişki istemiyorum.',bd:[{ro:'Sono single da due anni',tr:'iki yıldır bekarım'},{ro:'non ho voglia di',tr:'istemiyorum'}]}]},
    {id:'w13',en:'innamorarsi di',ro:'innamorarsi',tr:'âşık olmak',examples:[{it:'Mi sono innamorato di lei al primo sguardo.',tr:'İlk bakışta ona âşık oldum.',bd:[{ro:'Mi sono innamorato di lei',tr:'ona âşık oldum'},{ro:'al primo sguardo',tr:'ilk bakışta'}]}]},
    {id:'w14',en:'litigare / fare pace',ro:'litigare',tr:'kavga etmek / barışmak',examples:[{it:'Abbiamo litigato ma poi abbiamo fatto pace.',tr:'Kavga ettik ama sonra barıştık.',bd:[{ro:'Abbiamo litigato',tr:'kavga ettik'},{ro:'abbiamo fatto pace',tr:'barıştık'}]}]},
    {id:'w15',en:'fidarsi di / avere fiducia',ro:'fidarsi di',tr:'güvenmek',examples:[{it:'Mi fido di lui, è un amico fidato.',tr:'Ona güveniyorum, güvenilir bir arkadaş.',bd:[{ro:'Mi fido di lui',tr:'ona güveniyorum'},{ro:'un amico fidato',tr:'güvenilir bir arkadaş'}]}]},
    {id:'w16',en:'supportarsi / sostenersi',ro:'supportarsi',tr:'desteklemek / birbirini desteklemek',examples:[{it:'In una buona relazione ci si supporta sempre.',tr:'İyi bir ilişkide her zaman birbirini destekler.',bd:[{ro:'In una buona relazione',tr:'iyi bir ilişkide'},{ro:'ci si supporta sempre',tr:'her zaman desteklenir'}]}]},
    {id:'w17',en:'il rapporto / la relazione',ro:'il rapporto',tr:'ilişki / bağ',examples:[{it:'Ho un ottimo rapporto con i miei genitori.',tr:'Ailemle harika bir ilişkim var.',bd:[{ro:'Ho un ottimo rapporto',tr:'harika bir ilişkim var'},{ro:'con i miei genitori',tr:'ailemle'}]}]},
    {id:'w18',en:'presentare / conoscere qualcuno',ro:'presentare',tr:'tanıştırmak / birini tanımak',examples:[{it:'Ti presento il mio amico Marco!',tr:'Sana arkadaşım Marco\'yu tanıştırıyorum!',bd:[{ro:'Ti presento',tr:'sana tanıştırıyorum'},{ro:'il mio amico Marco',tr:'arkadaşım Marco\'yu'}]}]},
    {id:'w19',en:'crescere insieme / avere in comune',ro:'crescere insieme',tr:'birlikte büyümek / ortak şeylere sahip olmak',examples:[{it:'Abbiamo molte cose in comune, ecco perché siamo amici.',tr:'Pek çok ortak şeyimiz var, bu yüzden arkadaşız.',bd:[{ro:'Abbiamo molte cose in comune',tr:'pek çok ortak şeyimiz var'},{ro:'ecco perché',tr:'bu yüzden'}]}]},
    {id:'w20',en:'volersi bene / amarsi',ro:'volersi bene',tr:'birbirini sevmek',examples:[{it:'Ci vogliamo bene come fratelli.',tr:'Birbirimizi kardeş gibi seviyoruz.',bd:[{ro:'Ci vogliamo bene',tr:'birbirimizi seviyoruz'},{ro:'come fratelli',tr:'kardeşler gibi'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Aile Üyeleri: Sahiplik Sıfatları',
      title_en:'Family Members: Possessive Adjectives',
      explanation:'"Mio/mia/miei/mie" = benim. Aile üyeleri TEKİL ise article kullanılmaz: "mio padre" (babam), ama "il mio caro padre" (değerli babam) gibi sıfat eklenenIErde article gerekir.',
      table:[
        {pronoun:'mio/mia',form:'m.tek: mio / f.tek: mia / m.çoğ: miei / f.çoğ: mie',example:'mio padre / mia madre / miei fratelli / mie sorelle',tr:'babam / annem / erkek kardeşlerim / kız kardeşlerim'},
        {pronoun:'tuo/tua',form:'sen / sana ait',example:'Tua sorella è molto simpatica!',tr:'Kız kardeşin çok sempatik!'},
        {pronoun:'suo/sua',form:'onun',example:'Suo fratello abita a Milano.',tr:'Erkek kardeşi Milano\'da yaşıyor.'},
        {pronoun:'ÖZEL',form:'Tekil aile = article yok',example:'Mio zio ma: il mio caro zio',tr:'Amcam ama: değerli amcam (sıfatlı)'}
      ],
      note:'"Nonno" (büyükbaba), "nonna" (büyükanne), "nipote" (torun/yeğen), "suocero/suocera" (kayınpeder/kayınvalide).'
    },
    {
      id:'g2',
      title:'Kendinizi Tanıtma: Mi chiamo / Sono',
      title_en:'Introducing Yourself and Others',
      explanation:'Tanışma kalıpları ve birisini başkasına tanıştırma.',
      table:[
        {pronoun:'Kendinizi',form:'Mi chiamo... / Sono... / Il mio nome è...',example:'Mi chiamo Ali. Ho ventotto anni. Sono turco.',tr:'Adım Ali. Yirmi sekiz yaşındayım. Türküm.'},
        {pronoun:'Birini tanıt',form:'Ti presento... / Le presento...',example:'Ti presento la mia amica Sofia.',tr:'Sana arkadaşım Sofia\'yı tanıştırıyorum.'},
        {pronoun:'Tanıştıktan sonra',form:'Piacere / Molto piacere',example:'— Ciao, sono Marco. — Piacere, sono Ali.',tr:'— Merhaba, Ben Marco. — Memnun oldum, Ben Ali.'},
        {pronoun:'Bilgi alma',form:'Di dove sei? / Che lavoro fai?',example:'Di dove sei? — Sono turco, di Istanbul.',tr:'Nerelisin? — Türküm, İstanbul\'danlım.'}
      ],
      note:'"Piacere" = memnun oldum (tanışma sırasında). "Molto piacere" = çok memnun oldum. "Felice di conoscerti" = tanıştığıma sevindim.'
    },
    {
      id:'g3',
      title:'İlişki Fiilleri: Riflessivi',
      title_en:'Relationship Verbs: Reflexives',
      explanation:'İlişki fiilleri çoğunlukla dönüşlü veya karşılıklı anlam taşır.',
      table:[
        {pronoun:'innamorarsi',form:'mi innamoro / ti innamori',example:'Mi sono innamorato di lei.',tr:'Ona âşık oldum.'},
        {pronoun:'fidanzarsi',form:'mi fidanzo / ti fidanzi',example:'Si sono fidanzati la scorsa estate.',tr:'Geçen yaz nişanlandılar.'},
        {pronoun:'sposarsi',form:'mi sposo / ti sposi',example:'Quando vi sposate?',tr:'Ne zaman evleniyorsunuz?'},
        {pronoun:'conoscersi',form:'ci conosciamo',example:'Ci conosciamo da dieci anni.',tr:'On yıldır birbirimizi tanıyoruz.'}
      ],
      note:'"Ci" = birbirimizi (reciproco): "ci amiamo" (birbirimizi seviyoruz), "ci vediamo" (görüşürüz).'
    }
  ],
  speaking:[
    {id:'sp1',en:'Mia madre ha cinquant\'anni e lavora come medico.',tr:'Annem elli yaşında ve doktor olarak çalışıyor.',prompt:'Aile üyeni anlat'},
    {id:'sp2',en:'Ho conosciuto il mio migliore amico al liceo.',tr:'En iyi arkadaşımı lisede tanıdım.',prompt:'Arkadaşlığı anlat'},
    {id:'sp3',en:'Ti presento mia sorella, si chiama Leyla.',tr:'Sana kız kardeşimi tanıştırıyorum, adı Leyla.',prompt:'Birini tanıştır'},
    {id:'sp4',en:'Siamo amici da vent\'anni, ci conosciamo da sempre.',tr:'Yirmi yıldır arkadaşız, birbirimizi hep tanıyoruz.',prompt:'Uzun arkadaşlığı anlat'},
    {id:'sp5',en:'Litighiamo a volte, ma poi facciamo sempre pace.',tr:'Bazen kavga ederiz ama sonra hep barışırız.',prompt:'Bir ilişkiyi anlat'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Aileyi Tanıtmak',
      title_en:'Introducing the Family',
      lines:[
        {speaker:'B',gender:'f',en:'Hai fratelli o sorelle?',tr:'Erkek ya da kız kardeşin var mı?',bd:[{ro:'Hai fratelli o sorelle?',tr:'erkek ya da kız kardeşin var mı?',role:'question'}]},
        {speaker:'A',gender:'m',en:'Sì, ho una sorella più grande, si chiama Ayşe, ha trent\'anni.',tr:'Evet, adı Ayşe olan büyük bir kız kardeşim var, otuz yaşında.',bd:[{ro:'una sorella più grande',tr:'büyük bir kız kardeş'},{ro:'si chiama Ayşe',tr:'adı Ayşe'},{ro:'ha trent\'anni',tr:'otuz yaşında'}]},
        {speaker:'B',gender:'f',en:'E i tuoi genitori? Vivono con te?',tr:'Ya anneni baban? Seninle mi yaşıyorlar?',bd:[{ro:'E i tuoi genitori?',tr:'ya anneni baban?',role:'question'},{ro:'Vivono con te?',tr:'seninle mi yaşıyorlar?',role:'question'}]},
        {speaker:'A',gender:'m',en:'No, vivono in Turchia, ad Ankara. Vengono a trovarmi ogni anno.',tr:'Hayır, Türkiye\'de, Ankara\'da yaşıyorlar. Her yıl beni ziyarete geliyorlar.',bd:[{ro:'vivono in Turchia, ad Ankara',tr:'Türkiye\'de Ankara\'da yaşıyorlar'},{ro:'Vengono a trovarmi ogni anno',tr:'her yıl ziyarete geliyorlar'}]},
        {speaker:'B',gender:'f',en:'Che bello! E tu sei sposato?',tr:'Ne güzel! Ve sen evli misin?',bd:[{ro:'sei sposato?',tr:'evli misin?',role:'question'}]},
        {speaker:'A',gender:'m',en:'No, sono single per ora. Sto cercando la persona giusta!',tr:'Hayır, şimdilik bekarım. Doğru kişiyi arıyorum!',bd:[{ro:'sono single per ora',tr:'şimdilik bekarım'},{ro:'Sto cercando la persona giusta',tr:'doğru kişiyi arıyorum'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'La mia famiglia è piccola: io, mia moglie Giulia e i nostri due figli, Marco e Sofia. Mia moglie lavora in ospedale come infermiera. Marco ha dodici anni e Sofia ne ha otto. I nonni abitano vicino a noi e li vediamo spesso nel fine settimana.',
      tr:'Ailem küçük: ben, karım Giulia ve iki çocuğumuz Marco ve Sofia. Karım hastanede hemşire olarak çalışıyor. Marco on iki yaşında, Sofia sekiz. Büyükanne ve büyükbabalar yakınımızda yaşıyorlar ve onları hafta sonları sık görürüz.',
      questions:[
        {q:'Kaç kişilik aile?',opts:['İki','Üç','Dört','Beş'],answer:2,tr:'Dört (ben, karı, iki çocuk)'},
        {q:'Karı Giulia ne iş yapıyor?',opts:['Doktor','Hemşire','Öğretmen','Eczacı'],answer:1,tr:'Hemşire (infermiera)'},
        {q:'Büyükanne ve büyükbaba nerede yaşıyor?',opts:['Başka şehirde','Yurt dışında','Yakında','Aynı evde'],answer:2,tr:'Yakında (vicino a noi)'}
      ]
    }
  ],
  tones:[]
};
LESSONS[23] = L23;
