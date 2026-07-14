// ders27.js — Italian Lesson 27: Espressioni di tempo (Zaman İfadeleri)
const L27 = {
  words:[
    {id:'w1',en:'adesso / ora',ro:'adesso',tr:'şimdi / şu an',examples:[{it:'Adesso non posso, sono in riunione. Ti chiamo dopo.',tr:'Şimdi yapamam, toplantıdayım. Seni sonra arayacağım.',bd:[{ro:'Adesso non posso',tr:'şimdi yapamam'},{ro:'Ti chiamo dopo',tr:'seni sonra arayacağım'}]}]},
    {id:'w2',en:'subito / immediatamente',ro:'subito',tr:'hemen / derhal',examples:[{it:'Arrivo subito, aspettami cinque minuti!',tr:'Hemen geliyorum, beni beş dakika bekle!',bd:[{ro:'Arrivo subito',tr:'hemen geliyorum'},{ro:'aspettami cinque minuti',tr:'beni beş dakika bekle'}]}]},
    {id:'w3',en:'presto / tardi',ro:'presto',tr:'erken / geç',examples:[{it:'Mi sono alzato presto stamattina per andare in palestra.',tr:'Bu sabah spor salonuna gitmek için erken kalktım.',bd:[{ro:'Mi sono alzato presto',tr:'erken kalktım'},{ro:'stamattina',tr:'bu sabah'}]}]},
    {id:'w4',en:'spesso / raramente / mai',ro:'spesso',tr:'sık sık / nadiren / hiç',examples:[{it:'Vado spesso al cinema ma raramente guardo i film d\'azione.',tr:'Sık sık sinemaya giderim ama aksiyon filmi nadiren izlerim.',bd:[{ro:'Vado spesso al cinema',tr:'sık sık sinemaya giderim'},{ro:'raramente guardo i film d\'azione',tr:'aksiyon filmi nadiren izlerim'}]}]},
    {id:'w5',en:'sempre / di solito / qualche volta',ro:'sempre',tr:'her zaman / genellikle / bazen',examples:[{it:'Di solito faccio colazione a casa ma qualche volta al bar.',tr:'Genellikle evde kahvaltı yaparım ama bazen barda.',bd:[{ro:'Di solito',tr:'genellikle'},{ro:'qualche volta al bar',tr:'bazen barda'}]}]},
    {id:'w6',en:'prima / dopo / poi',ro:'prima',tr:'önce / sonra / ardından',examples:[{it:'Prima faccio la doccia, poi mi vesto e poi faccio colazione.',tr:'Önce duş alıyorum, sonra giyiniyorum ve ardından kahvaltı yapıyorum.',bd:[{ro:'Prima faccio la doccia',tr:'önce duş alıyorum'},{ro:'poi mi vesto',tr:'sonra giyiniyorum'}]}]},
    {id:'w7',en:'già / ancora / non ancora',ro:'già',tr:'zaten / hâlâ / henüz değil',examples:[{it:'Hai già mangiato? — No, non ancora.',tr:'Zaten yedin mi? — Hayır, henüz değil.',bd:[{ro:'Hai già mangiato?',tr:'zaten yedin mi?'},{ro:'non ancora',tr:'henüz değil'}]}]},
    {id:'w8',en:'tra poco / fra poco',ro:'tra poco',tr:'az sonra / birazdan',examples:[{it:'Il treno parte tra poco, dobbiamo sbrigarci!',tr:'Tren birazdan kalkıyor, acele etmeliyiz!',bd:[{ro:'Il treno parte tra poco',tr:'tren birazdan kalkıyor'},{ro:'dobbiamo sbrigarci',tr:'acele etmeliyiz'}]}]},
    {id:'w9',en:'da quanto tempo? / da + time',ro:'da quanto tempo',tr:'ne zamandır? / -den beri',examples:[{it:'Abito a Roma da cinque anni. E tu da quanto tempo studi italiano?',tr:'Roma\'da beş yıldır oturuyorum. Sen ne zamandır İtalyanca çalışıyorsun?',bd:[{ro:'da cinque anni',tr:'beş yıldır'},{ro:'da quanto tempo',tr:'ne zamandır?'}]}]},
    {id:'w10',en:'per + durata',ro:'per',tr:'süre boyunca (-den/için)',examples:[{it:'Ho studiato per tre ore senza pausa.',tr:'Üç saat aralıksız çalıştım.',bd:[{ro:'per tre ore',tr:'üç saat'},{ro:'senza pausa',tr:'aralıksız'}]}]},
    {id:'w11',en:'fa / scorso / passato',ro:'fa',tr:'önce / geçen (zaman)',examples:[{it:'Sono andato in vacanza due settimane fa.',tr:'İki hafta önce tatile gittim.',bd:[{ro:'due settimane fa',tr:'iki hafta önce'},{ro:'Sono andato in vacanza',tr:'tatile gittim'}]}]},
    {id:'w12',en:'prossimo / futuro / fra',ro:'prossimo',tr:'gelecek / önümüzdeki (zaman)',examples:[{it:'La prossima settimana parto per la Sicilia.',tr:'Önümüzdeki hafta Sicilya\'ya gidiyorum.',bd:[{ro:'La prossima settimana',tr:'önümüzdeki hafta'},{ro:'parto per la Sicilia',tr:'Sicilya\'ya gidiyorum'}]}]},
    {id:'w13',en:'durante / nel frattempo',ro:'durante',tr:'süresince / bu arada',examples:[{it:'Durante le vacanze ho letto tre libri.',tr:'Tatil süresince üç kitap okudum.',bd:[{ro:'Durante le vacanze',tr:'tatil süresince'},{ro:'ho letto tre libri',tr:'üç kitap okudum'}]}]},
    {id:'w14',en:'all\'improvviso / d\'un tratto',ro:'all\'improvviso',tr:'aniden / birdenbire',examples:[{it:'All\'improvviso si è messo a piovere forte.',tr:'Aniden şiddetli yağmur başladı.',bd:[{ro:'All\'improvviso',tr:'aniden'},{ro:'si è messo a piovere forte',tr:'şiddetli yağmur başladı'}]}]},
    {id:'w15',en:'finalmente / alla fine',ro:'finalmente',tr:'sonunda / nihayet',examples:[{it:'Finalmente ho trovato le chiavi! Erano sotto il divano.',tr:'Sonunda anahtarları buldum! Koltuk altındaydı.',bd:[{ro:'Finalmente ho trovato le chiavi',tr:'sonunda anahtarları buldum'},{ro:'sotto il divano',tr:'koltuk altında'}]}]},
    {id:'w16',en:'intanto / nel mentre',ro:'intanto',tr:'bu arada / o sırada',examples:[{it:'Intanto che aspetti, puoi leggere questa rivista.',tr:'Beklerken bu dergiyi okuyabilirsin.',bd:[{ro:'Intanto che aspetti',tr:'beklerken'},{ro:'puoi leggere questa rivista',tr:'bu dergiyi okuyabilirsin'}]}]},
    {id:'w17',en:'appena / non appena',ro:'appena',tr:'yeni / hemen...r ...maz',examples:[{it:'Non appena arrivo a casa, ti mando un messaggio.',tr:'Eve varır varmaz sana mesaj atarım.',bd:[{ro:'Non appena arrivo a casa',tr:'eve varır varmaz'},{ro:'ti mando un messaggio',tr:'sana mesaj atarım'}]}]},
    {id:'w18',en:'a lungo / per un po\'',ro:'a lungo',tr:'uzun süre / bir süre',examples:[{it:'Ho aspettato a lungo davanti al medico.',tr:'Doktorun önünde uzun süre bekledim.',bd:[{ro:'Ho aspettato a lungo',tr:'uzun süre bekledim'},{ro:'davanti al medico',tr:'doktorun önünde'}]}]},
    {id:'w19',en:'all\'inizio / in principio',ro:'all\'inizio',tr:'başta / başlangıçta',examples:[{it:'All\'inizio l\'italiano mi sembrava difficile, ora va molto meglio.',tr:'Başta İtalyanca zor görünüyordu, şimdi çok daha iyi gidiyor.',bd:[{ro:'All\'inizio',tr:'başta'},{ro:'ora va molto meglio',tr:'şimdi çok daha iyi gidiyor'}]}]},
    {id:'w20',en:'continuamente / di continuo',ro:'continuamente',tr:'sürekli / kesintisiz',examples:[{it:'Quel bambino piange continuamente, deve essere stanco.',tr:'O çocuk sürekli ağlıyor, yorgun olmalı.',bd:[{ro:'piange continuamente',tr:'sürekli ağlıyor'},{ro:'deve essere stanco',tr:'yorgun olmalı'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Presente vs Passato Prossimo: Zaman Seçimi',
      title_en:'Present vs. Past: Choosing the Right Tense',
      explanation:'İtalyanca\'da şimdiki zaman (presente) ile yakın geçmiş (passato prossimo) arasındaki fark.',
      table:[
        {pronoun:'presente',form:'şu an / alışkanlık',example:'Studio italiano ogni giorno.',tr:'Her gün İtalyanca çalışıyorum.'},
        {pronoun:'passato prossimo',form:'tamamlanmış geçmiş',example:'Ho studiato ieri sera per due ore.',tr:'Dün akşam iki saat çalıştım.'},
        {pronoun:'sempre / ogni',form:'presente ile',example:'Vado sempre in palestra il mercoledì.',tr:'Her zaman çarşamba spor salonuna giderim.'},
        {pronoun:'ieri / la scorsa',form:'passato prossimo ile',example:'Ieri sono andato al cinema.',tr:'Dün sinemaya gittim.'}
      ],
      note:'"Da + tempo + presente" = ne zamandır yapmakta olmak: "Studio italiano da sei mesi" (altı aydır İtalyanca çalışıyorum — hâlâ devam ediyor).'
    },
    {
      id:'g2',
      title:'Sıklık Zarfları: Sempre / Mai / Spesso',
      title_en:'Frequency Adverbs',
      explanation:'Eylemlerin ne sıklıkta yapıldığını ifade eden zarflar ve yerleri.',
      table:[
        {pronoun:'sempre',form:'her zaman',example:'Prendo sempre il caffè al mattino.',tr:'Her sabah kahve içerim.'},
        {pronoun:'spesso / di solito',form:'sık sık / genellikle',example:'Di solito mangio a casa a mezzogiorno.',tr:'Genellikle öğlen evde yerim.'},
        {pronoun:'qualche volta / a volte',form:'bazen',example:'A volte vado a teatro.',tr:'Bazen tiyatroya giderim.'},
        {pronoun:'raramente / mai',form:'nadiren / hiç',example:'Non vado mai in discoteca.',tr:'Hiç diskoya gitmem.'}
      ],
      note:'"Mai" = hiç (olumsuzda): "Non mangio mai carne" (hiç et yemem). Olumlu: "Hai mai mangiato il sushi?" (hiç sushi yedin mi?)'
    },
    {
      id:'g3',
      title:'Da vs. Per: Süre İfadesi',
      title_en:'Da vs. Per: Duration',
      explanation:'"Da" = başlangıçtan bugüne süren eylem. "Per" = belirli bir süre boyunca tamamlanan eylem.',
      table:[
        {pronoun:'da + presente',form:'hâlâ devam eden',example:'Aspetto da un\'ora. (hâlâ bekliyorum)',tr:'Bir saattir bekliyorum.'},
        {pronoun:'per + passato',form:'tamamlanmış süre',example:'Ho aspettato per un\'ora. (bitti)',tr:'Bir saat bekledim.'},
        {pronoun:'fa',form:'geçmişte ne kadar önce',example:'Sono arrivato tre giorni fa.',tr:'Üç gün önce geldim.'},
        {pronoun:'tra / fra',form:'gelecekte ne kadar sonra',example:'Parto tra due giorni.',tr:'İki gün sonra gidiyorum.'}
      ],
      note:'"Quanto tempo ci vuole?" = ne kadar sürer? "Ci vogliono due ore" (iki saat sürer) — ci + volere yapısı süre sorularında.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Studio italiano da quasi un anno e mi sta piacendo moltissimo.',tr:'Neredeyse bir yıldır İtalyanca çalışıyorum ve çok seviyorum.',prompt:'Ne zamandır öğrendiğini anlat'},
    {id:'sp2',en:'Finalmente ho finito il progetto! Ho lavorato per tre settimane.',tr:'Sonunda projeyi bitirdim! Üç hafta çalıştım.',prompt:'Bitiş ifade et'},
    {id:'sp3',en:'Di solito mi sveglio tardi, ma domani devo alzarmi presto.',tr:'Genellikle geç uyanırım ama yarın erken kalkmam lazım.',prompt:'Alışkanlık ve istisna'},
    {id:'sp4',en:'Non appena finisce il corso, andiamo a festeggiare!',tr:'Kurs biter bitmez kutlamaya gideceğiz!',prompt:'Hemen sonra olacak şeyi anlat'},
    {id:'sp5',en:'A volte vorrei fermare il tempo — è passato così velocemente!',tr:'Bazen zamanı durdurmak istiyorum — çok hızlı geçti!',prompt:'Zaman hakkında düşünceni paylaş'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Zaman Geçti!',
      title_en:'Time Has Passed!',
      lines:[
        {speaker:'A',gender:'f',en:'Marco! Non ti vedo da una vita! Come stai?',tr:'Marco! Seni sonsuza kadar görmemiştim! Nasılsın?',bd:[{ro:'Non ti vedo da una vita',tr:'seni çok uzun zamandır görmemişim',role:'time_expression'},{ro:'Come stai?',tr:'nasılsın?',role:'greeting'}]},
        {speaker:'B',gender:'m',en:'Ciao Sofia! Sì, è passato un anno dall\'ultima volta! Sto benissimo, grazie.',tr:'Merhaba Sofia! Evet, son seferden bu yana bir yıl geçti! Çok iyiyim, teşekkürler.',bd:[{ro:'è passato un anno',tr:'bir yıl geçti',role:'time'},{ro:'dall\'ultima volta',tr:'son seferden bu yana',role:'time'}]},
        {speaker:'A',gender:'f',en:'Cosa hai fatto in questo anno? Sei ancora all\'università?',tr:'Bu yıl boyunca ne yaptın? Hâlâ üniversitede misin?',bd:[{ro:'Cosa hai fatto in questo anno?',tr:'bu yıl boyunca ne yaptın?',role:'question'},{ro:'ancora all\'università',tr:'hâlâ üniversitede',role:'status'}]},
        {speaker:'B',gender:'m',en:'No, mi sono laureato sei mesi fa! Da tre mesi lavoro in un\'azienda informatica.',tr:'Hayır, altı ay önce mezun oldum! Üç aydır bir IT şirketinde çalışıyorum.',bd:[{ro:'mi sono laureato sei mesi fa',tr:'altı ay önce mezun oldum',role:'past'},{ro:'Da tre mesi lavoro',tr:'üç aydır çalışıyorum',role:'duration'}]},
        {speaker:'A',gender:'f',en:'Complimenti! E stai bene in quel lavoro? Ti piace?',tr:'Tebrikler! O işte iyi misin? Beğeniyor musun?',bd:[{ro:'Complimenti!',tr:'tebrikler!',role:'congratulation'},{ro:'Ti piace?',tr:'beğeniyor musun?',role:'question'}]},
        {speaker:'B',gender:'m',en:'Sì, ci lavoro da poco ma già mi piace molto. Imparo cose nuove ogni giorno!',tr:'Evet, kısa süredir çalışıyorum ama zaten çok seviyorum. Her gün yeni şeyler öğreniyorum!',bd:[{ro:'ci lavoro da poco',tr:'kısa süredir çalışıyorum',role:'duration'},{ro:'Imparo cose nuove ogni giorno',tr:'her gün yeni şeyler öğreniyorum',role:'frequency'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'La gestione del tempo è fondamentale nella vita moderna. Gli italiani hanno una reputazione di essere più rilassati rispetto agli altri europei, ma questo non è sempre vero. In ufficio si lavora spesso fino a tardi. D\'altra parte, il pranzo rimane sacro: molti negozi chiudono ancora dalle tredici alle quindici. Il weekend è dedicato alla famiglia e agli amici. La domenica mattina i bar sono pieni di gente che prende il caffè.',
      tr:'Zaman yönetimi modern yaşamda temel öneme sahip. İtalyanların diğer Avrupalılara göre daha rahat oldukları bir üne sahip, ama bu her zaman doğru değil. Ofiste sık sık geç saate kadar çalışılıyor. Öte yandan öğle yemeği kutsal kalmaya devam ediyor: pek çok dükkan hâlâ saat 13\'ten 15\'e kadar kapanıyor. Hafta sonu aile ve arkadaşlara ayrılmış. Pazar sabahları barlar kahve içen insanlarla dolu.',
      questions:[
        {q:'İtalyanların öğle arası ne zaman?',opts:['12:00-13:00','13:00-15:00','14:00-16:00','15:00-17:00'],answer:1,tr:'13:00-15:00'},
        {q:'Hafta sonu ne için ayrılmış?',opts:['Çalışmak için','Alışveriş için','Aile ve arkadaşlar için','Spor için'],answer:2,tr:'Aile ve arkadaşlar için'},
        {q:'Pazar sabahı barlar nasıl?',opts:['Kapalı','Boş','Kalabalık','Sadece akşam açık'],answer:2,tr:'Kalabalık (pieni di gente)'}
      ]
    }
  ],
  tones:[]
};
LESSONS[27] = L27;
