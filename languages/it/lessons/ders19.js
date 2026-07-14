// ders19.js — Italian Lesson 19: Entertainment & Hobbies (Eğlence ve Hobiler)
const L19 = {
  words:[
    {id:'w1',en:'il hobby / il passatempo',ro:'il hobby',tr:'hobi / boş zaman aktivitesi',examples:[{it:'Qual è il tuo hobby preferito?',tr:'En sevdiğin hobin nedir?',bd:[{ro:'Qual è il tuo hobby preferito?',tr:'en sevdiğin hobin nedir?'}]}]},
    {id:'w2',en:'leggere / la lettura',ro:'leggere',tr:'okumak / okuma',examples:[{it:'Mi piace leggere romanzi storici.',tr:'Tarihi romanlar okumayı severim.',bd:[{ro:'Mi piace leggere',tr:'okumayı severim'},{ro:'romanzi storici',tr:'tarihi romanlar'}]}]},
    {id:'w3',en:'ascoltare musica',ro:'ascoltare musica',tr:'müzik dinlemek',examples:[{it:'Ascolto musica mentre faccio jogging.',tr:'Koşarken müzik dinliyorum.',bd:[{ro:'Ascolto musica',tr:'müzik dinliyorum'},{ro:'mentre faccio jogging',tr:'koşarken'}]}]},
    {id:'w4',en:'giocare a / fare sport',ro:'giocare',tr:'oynamak / spor yapmak',examples:[{it:'Gioco a calcio ogni domenica.',tr:'Her pazar futbol oynuyorum.',bd:[{ro:'Gioco a calcio',tr:'futbol oynuyorum'},{ro:'ogni domenica',tr:'her pazar'}]}]},
    {id:'w5',en:'cucinare / la cucina creativa',ro:'cucinare',tr:'yemek yapmak / yaratıcı mutfak',examples:[{it:'Amo cucinare piatti tipici del sud Italia.',tr:'Güney İtalya\'nın tipik yemeklerini yapmayı seviyorum.',bd:[{ro:'Amo cucinare',tr:'yapmayı seviyorum'},{ro:'piatti tipici del sud Italia',tr:'Güney İtalya\'nın tipik yemekleri'}]}]},
    {id:'w6',en:'viaggiare / il viaggio',ro:'viaggiare',tr:'seyahat etmek',examples:[{it:'Il mio sogno è viaggiare in tutto il mondo.',tr:'Hayalim tüm dünyayı gezmek.',bd:[{ro:'Il mio sogno è',tr:'hayalim'},{ro:'viaggiare in tutto il mondo',tr:'tüm dünyayı gezmek'}]}]},
    {id:'w7',en:'fotografare / la fotografia',ro:'fotografare',tr:'fotoğraf çekmek',examples:[{it:'Fotografo i paesaggi durante i viaggi.',tr:'Seyahatler sırasında manzara fotoğrafı çekiyorum.',bd:[{ro:'Fotografo i paesaggi',tr:'manzara fotoğrafı çekiyorum'},{ro:'durante i viaggi',tr:'seyahatler sırasında'}]}]},
    {id:'w8',en:'dipingere / disegnare',ro:'dipingere',tr:'resim yapmak / çizmek',examples:[{it:'Ho imparato a dipingere con i colori ad olio.',tr:'Yağlı boya ile resim yapmayı öğrendim.',bd:[{ro:'Ho imparato a dipingere',tr:'resim yapmayı öğrendim'},{ro:'con i colori ad olio',tr:'yağlı boya ile'}]}]},
    {id:'w9',en:'suonare uno strumento',ro:'suonare',tr:'enstrüman çalmak',examples:[{it:'Suono la chitarra da dieci anni.',tr:'On yıldır gitar çalıyorum.',bd:[{ro:'Suono la chitarra',tr:'gitar çalıyorum'},{ro:'da dieci anni',tr:'on yıldır'}]}]},
    {id:'w10',en:'guardare film / la serie TV',ro:'guardare film',tr:'film izlemek / dizi izlemek',examples:[{it:'Amo guardare film italiani per migliorare la lingua.',tr:'Dili geliştirmek için İtalyan filmi izlemeyi seviyorum.',bd:[{ro:'Amo guardare film italiani',tr:'İtalyan filmi izlemeyi seviyorum'},{ro:'per migliorare la lingua',tr:'dili geliştirmek için'}]}]},
    {id:'w11',en:'fare yoga / meditare',ro:'fare yoga',tr:'yoga yapmak / meditasyon',examples:[{it:'Faccio yoga ogni mattina per rilassarmi.',tr:'Her sabah gevşemek için yoga yapıyorum.',bd:[{ro:'Faccio yoga ogni mattina',tr:'her sabah yoga yapıyorum'},{ro:'per rilassarmi',tr:'gevşemek için'}]}]},
    {id:'w12',en:'il giardinaggio / coltivare',ro:'il giardinaggio',tr:'bahçecilik',examples:[{it:'In estate mi dedico al giardinaggio.',tr:'Yazın bahçeciliğe ilgi gösteriyorum.',bd:[{ro:'In estate',tr:'yazın'},{ro:'mi dedico al giardinaggio',tr:'bahçeciliğe ilgi gösteriyorum'}]}]},
    {id:'w13',en:'ballare / la danza',ro:'ballare',tr:'dans etmek',examples:[{it:'Ho preso lezioni di salsa e ora ballo abbastanza bene.',tr:'Salsa dersleri aldım ve artık iyi dans ediyorum.',bd:[{ro:'Ho preso lezioni di salsa',tr:'salsa dersleri aldım'},{ro:'ballo abbastanza bene',tr:'iyi dans ediyorum'}]}]},
    {id:'w14',en:'mi piace / mi piacciono',ro:'mi piace',tr:'... seviyorum / beğeniyorum',examples:[{it:'Mi piace la musica jazz. Mi piacciono i documentari.',tr:'Caz müziği seviyorum. Belgeselleri seviyorum.',bd:[{ro:'Mi piace la musica jazz',tr:'caz müziği seviyorum (tekil)'},{ro:'Mi piacciono i documentari',tr:'belgeselleri seviyorum (çoğul)'}]}]},
    {id:'w15',en:'sono appassionato di...',ro:'appassionato di',tr:'... tutkunu / meraklısı',examples:[{it:'Sono appassionato di astronomia.',tr:'Astronomiye meraklıyım.',bd:[{ro:'Sono appassionato di',tr:'meraklıyım / tutkunu'},{ro:'astronomia',tr:'astronomi'}]}]},
    {id:'w16',en:'il weekend / il tempo libero',ro:'il tempo libero',tr:'hafta sonu / serbest zaman',examples:[{it:'Come passi il tempo libero?',tr:'Boş zamanını nasıl geçiriyorsun?',bd:[{ro:'Come passi',tr:'nasıl geçiriyorsun'},{ro:'il tempo libero',tr:'boş zamanını'}]}]},
    {id:'w17',en:'collezionare / la collezione',ro:'collezionare',tr:'koleksiyon yapmak',examples:[{it:'Coleziono francobolli da quando ero bambino.',tr:'Çocukken beri pul koleksiyonu yapıyorum.',bd:[{ro:'Colleziono francobolli',tr:'pul koleksiyonu yapıyorum'},{ro:'da quando ero bambino',tr:'çocukken beri'}]}]},
    {id:'w18',en:'praticare / dedicarsi a',ro:'praticare',tr:'yapmak / kendini adamak',examples:[{it:'Mi dedico alla pittura nel fine settimana.',tr:'Hafta sonları resme kendimi adıyorum.',bd:[{ro:'Mi dedico alla pittura',tr:'resme adıyorum kendimi'},{ro:'nel fine settimana',tr:'hafta sonları'}]}]},
    {id:'w19',en:'stare in compagnia',ro:'stare in compagnia',tr:'birlikte vakit geçirmek',examples:[{it:'Amo stare in compagnia degli amici.',tr:'Arkadaşlarla vakit geçirmeyi seviyorum.',bd:[{ro:'Amo stare in compagnia',tr:'vakit geçirmeyi seviyorum'},{ro:'degli amici',tr:'arkadaşlarla'}]}]},
    {id:'w20',en:'rilassarsi / riposarsi',ro:'rilassarsi',tr:'dinlenmek / gevşemek',examples:[{it:'Nel tempo libero mi piace semplicemente rilassarmi.',tr:'Boş zamanımda sadece dinlenmekten hoşlanıyorum.',bd:[{ro:'Nel tempo libero',tr:'boş zamanımda'},{ro:'mi piace semplicemente rilassarmi',tr:'sadece dinlenmekten hoşlanıyorum'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'"Mi piace" ile Hobi Anlatma',
      title_en:'Expressing Likes with "Mi piace"',
      explanation:'"Mi piace" = "severim". Tekil isim veya infinitive ile kullanılır. Çoğul isim için "mi piacciono".',
      table:[
        {pronoun:'Tekil',form:'Mi piace + infinitive',example:'Mi piace nuotare. / Mi piace il cinema.',tr:'Yüzmeyi seviyorum. / Sinemayı seviyorum.'},
        {pronoun:'Çoğul',form:'Mi piacciono + çoğul isim',example:'Mi piacciono i film horror.',tr:'Korku filmlerini seviyorum.'},
        {pronoun:'Çok sevmek',form:'Mi piace molto / tantissimo',example:'Mi piace tantissimo la musica classica.',tr:'Klasik müziği çok seviyorum.'},
        {pronoun:'Sevmemek',form:'Non mi piace...',example:'Non mi piace la violenza nei film.',tr:'Filmlerde şiddeti sevmiyorum.'}
      ],
      note:'"Piacere" fiili öznesi ve nesnesi İngilizce\'nin tersidir: "Mi piace la pizza" = "pizza beni seviyor" (lit) → "Pizzayı seviyorum". "Mi" = bana.'
    },
    {
      id:'g2',
      title:'Hobi Fiilleri: "Giocare a" vs "Fare"',
      title_en:'Hobby Verbs: "Giocare a" vs "Fare"',
      explanation:'"Giocare a" = oyun/spor oynamak. "Fare" = yapmak (sporla da kullanılır). "Suonare" = enstrüman çalmak.',
      table:[
        {pronoun:'Giocare a',form:'giocare a + spor/oyun',example:'Gioco a tennis. / Gioco a scacchi.',tr:'Tenis oynuyorum. / Satranç oynuyorum.'},
        {pronoun:'Fare',form:'fare + spor (artikelsiz)',example:'Faccio nuoto. / Faccio ginnastica.',tr:'Yüzme yapıyorum. / Jimnastik yapıyorum.'},
        {pronoun:'Suonare',form:'suonare + enstrüman',example:'Suono il pianoforte e la chitarra.',tr:'Piyano ve gitar çalıyorum.'},
        {pronoun:'Fare',form:'fare + hobi',example:'Faccio fotografia. / Faccio yoga.',tr:'Fotoğrafçılık yapıyorum. / Yoga yapıyorum.'}
      ],
      note:'"Fare" + spor → "fare nuoto / fare calcio" (yaygın). "Giocare a calcio" = "futbol oynamak" da kullanılır. İkisi de doğru.'
    },
    {
      id:'g3',
      title:'"Da quanto tempo?" — Süre İfadesi',
      title_en:'Expressing Duration',
      explanation:'Bir hobi veya aktivitenin ne kadar süredir yapıldığını "da + süre" ile ifade ederiz.',
      table:[
        {pronoun:'Yapı',form:'Faccio/suono/gioco + da + süre',example:'Studio italiano da sei mesi.',tr:'Altı aydır İtalyanca çalışıyorum.'},
        {pronoun:'Soru',form:'Da quanto tempo...?',example:'Da quanto tempo suoni la chitarra?',tr:'Ne kadar süredir gitar çalıyorsun?'},
        {pronoun:'Kısa süre',form:'da poco / da poco tempo',example:'Ho iniziato la yoga da poco.',tr:'Yogaya yakın zamanda başladım.'},
        {pronoun:'Uzun süre',form:'da anni / da molto tempo',example:'Dipingo da vent\'anni.',tr:'Yirmi yıldır resim yapıyorum.'}
      ],
      note:'"Da" + süre = "... dır / ... den beri". Türkçe\'deki -dır ekine benzer. "Da quando ero bambino" = çocukken beri.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Il mio hobby preferito è leggere libri di avventura.',tr:'En sevdiğim hobi macera kitabı okumak.',prompt:'Hobini tanıt'},
    {id:'sp2',en:'Gioco a calcio due volte a settimana.',tr:'Haftada iki kez futbol oynuyorum.',prompt:'Ne sıklıkla yaptığını söyle'},
    {id:'sp3',en:'Studio italiano da un anno perché amo la cultura italiana.',tr:'İtalyan kültürünü sevdiğim için bir yıldır İtalyanca çalışıyorum.',prompt:'Neden öğrendiğini anlat'},
    {id:'sp4',en:'Cosa fai nel tempo libero?',tr:'Boş zamanında ne yapıyorsun?',prompt:'Birine hobi sor'},
    {id:'sp5',en:'Sono appassionato di fotografia, porto sempre la macchina fotografica.',tr:'Fotoğrafçılığa meraklıyım, hep fotoğraf makinesi taşıyorum.',prompt:'Tutkunu anlat'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Hobilerden Konuşmak',
      title_en:'Talking About Hobbies',
      lines:[
        {speaker:'B',gender:'f',en:'Cosa fai di solito nel fine settimana?',tr:'Genellikle hafta sonunda ne yapıyorsun?',bd:[{ro:'Cosa fai di solito',tr:'genellikle ne yapıyorsun'},{ro:'nel fine settimana',tr:'hafta sonunda'}]},
        {speaker:'A',gender:'m',en:'Il sabato mattina faccio una lunga passeggiata in montagna. Nel pomeriggio, di solito leggo o ascolto musica.',tr:'Cumartesi sabahı dağda uzun bir yürüyüş yapıyorum. Öğleden sonra genellikle kitap okur veya müzik dinlerim.',bd:[{ro:'faccio una lunga passeggiata in montagna',tr:'dağda uzun yürüyüş yapıyorum'},{ro:'di solito leggo o ascolto musica',tr:'genellikle kitap okur veya müzik dinlerim'}]},
        {speaker:'B',gender:'f',en:'Che bello! Anch\'io amo la natura. Sai che ho iniziato la fotografia?',tr:'Ne güzel! Ben de doğayı severim. Fotoğrafçılığa başladığımı biliyor musun?',bd:[{ro:'Anch\'io amo la natura',tr:'ben de doğayı seviyorum'},{ro:'ho iniziato la fotografia',tr:'fotoğrafçılığa başladım'}]},
        {speaker:'A',gender:'m',en:'Davvero? Da quanto tempo?',tr:'Gerçekten mi? Ne kadar süredir?',bd:[{ro:'Davvero?',tr:'gerçekten mi?'},{ro:'Da quanto tempo?',tr:'ne kadar süredir?'}]},
        {speaker:'B',gender:'f',en:'Da tre mesi. È fantastico! Ho anche comprato una macchina fotografica professionale.',tr:'Üç aydır. Harika! Profesyonel bir fotoğraf makinesi de aldım.',bd:[{ro:'Da tre mesi',tr:'üç aydır'},{ro:'Ho anche comprato',tr:'ayrıca aldım'},{ro:'una macchina fotografica professionale',tr:'profesyonel bir fotoğraf makinesi'}]},
        {speaker:'A',gender:'m',en:'Sabato, se vuoi, puoi venire con me in montagna per fare qualche scatto!',tr:'Cumartesi, istersen dağda birkaç fotoğraf çekmek için benimle gelebilirsin!',bd:[{ro:'se vuoi',tr:'istersen'},{ro:'puoi venire con me',tr:'benimle gelebilirsin'},{ro:'fare qualche scatto',tr:'birkaç fotoğraf çekmek'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Ciao! Mi chiamo Lucia e vi parlo dei miei hobby. Amo leggere, soprattutto romanzi italiani del Novecento. Suono la chitarra classica da quando avevo dodici anni. Nel tempo libero, mi piace anche cucinare piatti regionali italiani. Il mio piatto preferito da cucinare è la lasagna.',
      tr:'Merhaba! Adım Lucia ve hobilerimi anlatacağım. Okumayı seviyorum, özellikle yirminci yüzyıl İtalyan romanlarını. On iki yaşımdan beri klasik gitar çalıyorum. Boş zamanımda İtalyan yöresel yemekleri pişirmeyi de seviyorum. Pişirmeyi en sevdiğim yemek lazanya.',
      questions:[
        {q:'Lucia ne tür kitapları sever?',opts:['Korku romanları','Aşk romanları','Yirminci yüzyıl İtalyan romanları','Bilim kurgu'],answer:2,tr:'Yirminci yüzyıl İtalyan romanları (romanzi italiani del Novecento)'},
        {q:'Kaç yaşından beri gitar çalıyor?',opts:['On','On bir','On iki','On üç'],answer:2,tr:'On iki (dodici anni)'},
        {q:'En sevdiği yemek nedir?',opts:['Pizza','Makarna','Lazanya','Risotto'],answer:2,tr:'Lazanya (lasagna)'}
      ]
    }
  ],
  tones:[]
};
LESSONS[19] = L19;
