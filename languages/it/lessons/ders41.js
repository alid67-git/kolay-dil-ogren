// ders41.js — Italian Lesson 41: Vocabolario della salute avanzato (Sağlık Kelime Hazinesi - İleri)
const L41 = {
  words:[
    {id:'w1',en:'la diagnosi / diagnosticare',ro:'la diagnosi',tr:'teşhis / teşhis koymak',examples:[{it:'Il medico ha fatto la diagnosi rapidamente dopo gli esami del sangue.',tr:'Doktor kan testlerinden sonra hızla teşhis koydu.',bd:[{ro:'ha fatto la diagnosi rapidamente',tr:'hızla teşhis koydu'},{ro:'dopo gli esami del sangue',tr:'kan testlerinden sonra'}]}]},
    {id:'w2',en:'il sintomo / il segnale',ro:'il sintomo',tr:'belirti / işaret',examples:[{it:'I sintomi dell\'influenza includono febbre alta, tosse e dolori muscolari.',tr:'Grip belirtileri yüksek ateş, öksürük ve kas ağrısını içerir.',bd:[{ro:'I sintomi dell\'influenza includono',tr:'grip belirtileri içerir'},{ro:'febbre alta, tosse e dolori muscolari',tr:'yüksek ateş, öksürük ve kas ağrısı'}]}]},
    {id:'w3',en:'la terapia / il trattamento',ro:'la terapia',tr:'terapi / tedavi',examples:[{it:'Il medico ha prescritto una terapia antibiotica di dieci giorni.',tr:'Doktor on günlük antibiyotik tedavisi yazdı.',bd:[{ro:'ha prescritto una terapia antibiotica',tr:'antibiyotik tedavisi yazdı'},{ro:'di dieci giorni',tr:'on günlük'}]}]},
    {id:'w4',en:'la guarigione / guarire',ro:'la guarigione',tr:'iyileşme / iyileşmek',examples:[{it:'La guarigione completa richiede riposo e alimentazione corretta.',tr:'Tam iyileşme dinlenme ve doğru beslenme gerektiriyor.',bd:[{ro:'La guarigione completa',tr:'tam iyileşme'},{ro:'richiede riposo e alimentazione corretta',tr:'dinlenme ve doğru beslenme gerektiriyor'}]}]},
    {id:'w5',en:'l\'allergia / allergico',ro:'l\'allergia',tr:'alerji / alerjik',examples:[{it:'Sono allergico alle arachidi: devo sempre portare l\'EpiPen.',tr:'Yerfıstığına alerjim var: her zaman EpiPen taşımam lazım.',bd:[{ro:'Sono allergico alle arachidi',tr:'yerfıstığına alerjim var'},{ro:'devo sempre portare l\'EpiPen',tr:'her zaman EpiPen taşımam lazım'}]}]},
    {id:'w6',en:'la pressione / la pressione alta',ro:'la pressione',tr:'tansiyon / yüksek tansiyon',examples:[{it:'Mio padre ha la pressione alta e deve prendere farmaci ogni giorno.',tr:'Babamın yüksek tansiyonu var ve her gün ilaç alması lazım.',bd:[{ro:'ha la pressione alta',tr:'yüksek tansiyonu var'},{ro:'deve prendere farmaci ogni giorno',tr:'her gün ilaç alması lazım'}]}]},
    {id:'w7',en:'il diabete / l\'insulina',ro:'il diabete',tr:'diyabet / insülin',examples:[{it:'Il diabete di tipo 2 è spesso associato alla dieta e allo stile di vita.',tr:'Tip 2 diyabet genellikle diyet ve yaşam tarzıyla ilişkili.',bd:[{ro:'Il diabete di tipo 2',tr:'tip 2 diyabet'},{ro:'è spesso associato alla dieta',tr:'genellikle diyetle ilişkili'}]}]},
    {id:'w8',en:'la frattura / la lussazione',ro:'la frattura',tr:'kırık / çıkık',examples:[{it:'Ho una frattura al polso destro: mi sono caduto dalla bicicletta.',tr:'Sağ bileğimde kırık var: bisikletten düştüm.',bd:[{ro:'Ho una frattura al polso destro',tr:'sağ bileğimde kırık var'},{ro:'mi sono caduto dalla bicicletta',tr:'bisikletten düştüm'}]}]},
    {id:'w9',en:'la radiografia / l\'ecografia',ro:'la radiografia',tr:'röntgen / ultrason',examples:[{it:'Il medico ha ordinato una radiografia e un\'ecografia addominale.',tr:'Doktor bir röntgen ve karın ultrasonu istedi.',bd:[{ro:'una radiografia e un\'ecografia addominale',tr:'röntgen ve karın ultrasonu'},{ro:'ha ordinato',tr:'istedi'}]}]},
    {id:'w10',en:'l\'intervento chirurgico',ro:'l\'intervento',tr:'ameliyat / cerrahi müdahale',examples:[{it:'L\'intervento chirurgico è andato bene e si riprende velocemente.',tr:'Ameliyat iyi gitti ve hızla iyileşiyor.',bd:[{ro:'L\'intervento chirurgico è andato bene',tr:'ameliyat iyi gitti'},{ro:'si riprende velocemente',tr:'hızla iyileşiyor'}]}]},
    {id:'w11',en:'l\'anestesia / il chirurgo',ro:'l\'anestesia',tr:'anestezi / cerrah',examples:[{it:'L\'anestesia generale mi ha fatto dormire per quattro ore durante l\'operazione.',tr:'Genel anestezi operasyon sırasında dört saat uyuttu beni.',bd:[{ro:'L\'anestesia generale',tr:'genel anestezi'},{ro:'mi ha fatto dormire per quattro ore',tr:'dört saat uyuttu'}]}]},
    {id:'w12',en:'la riabilitazione / fisioterapia',ro:'la riabilitazione',tr:'rehabilitasyon / fizyoterapi',examples:[{it:'Dopo l\'operazione al ginocchio, ho fatto sei mesi di fisioterapia.',tr:'Diz ameliyatından sonra altı ay fizyoterapi yaptım.',bd:[{ro:'Dopo l\'operazione al ginocchio',tr:'diz ameliyatından sonra'},{ro:'ho fatto sei mesi di fisioterapia',tr:'altı ay fizyoterapi yaptım'}]}]},
    {id:'w13',en:'il pronto soccorso / l\'urgenza',ro:'il pronto soccorso',tr:'acil servis / acil durum',examples:[{it:'Abbiamo portato il bambino al pronto soccorso con febbre a quaranta.',tr:'Çocuğu kırk derece ateşle acil servise götürdük.',bd:[{ro:'al pronto soccorso',tr:'acil servise'},{ro:'febbre a quaranta',tr:'kırk derece ateşle'}]}]},
    {id:'w14',en:'la ricetta / la prescrizione medica',ro:'la ricetta',tr:'reçete',examples:[{it:'Per comprare questi antibiotici serve la ricetta del medico.',tr:'Bu antibiyotikleri almak için doktor reçetesi gerekiyor.',bd:[{ro:'Per comprare questi antibiotici',tr:'bu antibiyotikleri almak için'},{ro:'serve la ricetta del medico',tr:'doktor reçetesi gerekiyor'}]}]},
    {id:'w15',en:'il dosaggio / la compressa',ro:'il dosaggio',tr:'dozaj / tablet',examples:[{it:'Prendi una compressa ogni dodici ore, mai a stomaco vuoto.',tr:'Her on iki saatte bir tablet al, asla aç karnına.',bd:[{ro:'una compressa ogni dodici ore',tr:'her on iki saatte bir tablet'},{ro:'mai a stomaco vuoto',tr:'asla aç karnına'}]}]},
    {id:'w16',en:'l\'effetto collaterale',ro:'l\'effetto collaterale',tr:'yan etki',examples:[{it:'Questo farmaco può avere effetti collaterali come nausea e vertigini.',tr:'Bu ilaç bulantı ve baş dönmesi gibi yan etkiler yapabilir.',bd:[{ro:'effetti collaterali come nausea e vertigini',tr:'bulantı ve baş dönmesi gibi yan etkiler'},{ro:'può avere',tr:'yapabilir'}]}]},
    {id:'w17',en:'la donazione / trasfondere',ro:'la donazione',tr:'bağış / nakletmek',examples:[{it:'Ho donato il sangue per la prima volta: è semplice e salva vite!',tr:'İlk kez kan bağışladım: basit ve can kurtarıyor!',bd:[{ro:'Ho donato il sangue per la prima volta',tr:'ilk kez kan bağışladım'},{ro:'è semplice e salva vite',tr:'basit ve can kurtarıyor'}]}]},
    {id:'w18',en:'la salute mentale / lo stress',ro:'la salute mentale',tr:'ruh sağlığı / stres',examples:[{it:'La salute mentale è importante quanto quella fisica — non bisogna trascurarla.',tr:'Ruh sağlığı fiziksel sağlık kadar önemli — ihmal edilmemeli.',bd:[{ro:'La salute mentale è importante quanto quella fisica',tr:'ruh sağlığı fiziksel sağlık kadar önemli'},{ro:'non bisogna trascurarla',tr:'ihmal edilmemeli'}]}]},
    {id:'w19',en:'la prevenzione / lo screening',ro:'la prevenzione',tr:'önleme / tarama',examples:[{it:'La prevenzione è fondamentale: meglio fare check-up periodici.',tr:'Önleme temel: periyodik check-up yapmak daha iyi.',bd:[{ro:'La prevenzione è fondamentale',tr:'önleme temel'},{ro:'check-up periodici',tr:'periyodik check-up'}]}]},
    {id:'w20',en:'il benessere / la qualità della vita',ro:'il benessere',tr:'iyilik hali / yaşam kalitesi',examples:[{it:'Il benessere fisico e mentale determina la qualità della vita.',tr:'Fiziksel ve zihinsel iyilik hali yaşam kalitesini belirler.',bd:[{ro:'Il benessere fisico e mentale',tr:'fiziksel ve zihinsel iyilik hali'},{ro:'determina la qualità della vita',tr:'yaşam kalitesini belirler'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Stare + Gerundio: Süregelen Eylemler',
      title_en:'Stare + Gerundio: Ongoing Actions',
      explanation:'"Sto migliorando" = iyileşmekteyim. Sağlık bağlamında süregelen durumlar.',
      table:[
        {pronoun:'stare + gerundio',form:'şu an devam eden',example:'Sto migliorando, grazie alle medicine.',tr:'İlaçlar sayesinde iyileşiyorum.'},
        {pronoun:'stare male / bene',form:'kötü / iyi hissetmek',example:'Come stai? — Sto ancora male.',tr:'Nasılsın? — Hâlâ kötüyüm.'},
        {pronoun:'si sta riprendendo',form:'iyileşmekte',example:'Si sta riprendendo bene dopo l\'operazione.',tr:'Ameliyattan sonra iyi iyileşiyor.'},
        {pronoun:'stare peggio / meglio',form:'daha kötü/iyi',example:'Sto un po\' meglio oggi.',tr:'Bugün biraz daha iyiyim.'}
      ],
      note:'"Sentirsi" = hissetmek: "Mi sento meglio" (daha iyi hissediyorum). "Mi sento stanco" (yorgun hissediyorum). Sağlık konuşmalarında çok yaygın.'
    },
    {
      id:'g2',
      title:'Bisogna / Occorre: Tıbbi Tavsiye',
      title_en:'Bisogna / Occorre: Medical Advice',
      explanation:'Doktorun tavsiyelerini vermek için impersonale yapılar.',
      table:[
        {pronoun:'bisogna + inf.',form:'gerekli (genel)',example:'Bisogna riposare almeno otto ore.',tr:'En az sekiz saat dinlenmek gerekiyor.'},
        {pronoun:'occorre + inf.',form:'gerekli (resmi)',example:'Occorre fare degli esami del sangue.',tr:'Kan testleri yaptırmak gerekiyor.'},
        {pronoun:'è necessario + inf.',form:'gerekli',example:'È necessario smettere di fumare.',tr:'Sigara içmeyi bırakmak gerekli.'},
        {pronoun:'si deve + inf.',form:'yapılmalı',example:'Si deve prendere la medicina due volte al giorno.',tr:'İlaç günde iki kez alınmalı.'}
      ],
      note:'"Le consiglio di..." = tavsiye ederim (doktordan hastaya, kibarca). "Le prescrivo..." = reçete yazıyorum. "Torni tra una settimana" = bir haftaya tekrar gelin.'
    },
    {
      id:'g3',
      title:'Negazioni nel Contesto Medico',
      title_en:'Negations in Medical Context',
      explanation:'Sağlıkla ilgili konuşmalarda ne yapılmaması gerektiğini ifade etmek.',
      table:[
        {pronoun:'non ... mai',form:'asla ... yapmamalı',example:'Non deve mai prendere questo farmaco a stomaco vuoto.',tr:'Bu ilacı asla aç karnına almamalı.'},
        {pronoun:'evitare di',form:'kaçınmak',example:'Deve evitare gli sforzi fisici intensi.',tr:'Yoğun fiziksel efordan kaçınmalı.'},
        {pronoun:'è vietato',form:'yasak',example:'È vietato fumare in ospedale.',tr:'Hastanede sigara içmek yasak.'},
        {pronoun:'non è consigliato',form:'tavsiye edilmez',example:'Non è consigliato bere alcol con questo farmaco.',tr:'Bu ilaçla alkol içmek tavsiye edilmez.'}
      ],
      note:'"Controindicazioni" = kontrendikasyonlar. "In caso di reazione avversa, interrompere immediatamente" = olumsuz reaksiyon durumunda hemen bırakın.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Mi sento molto meglio oggi, grazie alle cure del medico.',tr:'Doktorun tedavileri sayesinde bugün çok daha iyiyim.',prompt:'İyileşme anlat'},
    {id:'sp2',en:'Ho un\'allergia al penicillina, quindi devo sempre dirlo al medico.',tr:'Penisilin alerjim var, bu yüzden her zaman doktora söylemem lazım.',prompt:'Alerji bildir'},
    {id:'sp3',en:'La prevenzione è più importante della cura: faccio controlli ogni anno.',tr:'Önleme tedaviden daha önemli: her yıl kontrol yaptırıyorum.',prompt:'Sağlık anlayışını anlat'},
    {id:'sp4',en:'Ho passato tre giorni al pronto soccorso — non me lo dimentico!',tr:'Üç gün acil serviste kaldım — unutamıyorum!',prompt:'Tıbbi deneyim anlat'},
    {id:'sp5',en:'In Italia il Sistema Sanitario Nazionale garantisce cure a tutti i cittadini.',tr:'İtalya\'da Ulusal Sağlık Sistemi tüm vatandaşlara sağlık hizmetini garanti ediyor.',prompt:'İtalyan sağlık sistemi'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Doktorda - Detaylı Muayene',
      title_en:'At the Doctor - Detailed Examination',
      lines:[
        {speaker:'B',gender:'f',en:'Dottoressa, mi sento molto stanca da settimane. Ho anche mal di testa frequente.',tr:'Doktor hanım, haftalardır çok yorgunum. Sık baş ağrısı da var.',bd:[{ro:'mi sento molto stanca da settimane',tr:'haftalardır çok yorgunum',role:'symptom'},{ro:'mal di testa frequente',tr:'sık baş ağrısı',role:'symptom'}]},
        {speaker:'A',gender:'f',en:'Capisco. Da quanto tempo esattamente? E ha altri sintomi? Difficoltà a dormire?',tr:'Anlıyorum. Tam olarak ne zamandır? Başka belirtiler var mı? Uyumakta güçlük?',bd:[{ro:'Da quanto tempo esattamente?',tr:'tam olarak ne zamandır?',role:'question'},{ro:'Difficoltà a dormire?',tr:'uyumakta güçlük?',role:'question'}]},
        {speaker:'B',gender:'f',en:'Sì, dormo male e mi sveglio di notte. Sto anche attraversando un periodo di forte stress al lavoro.',tr:'Evet, kötü uyuyorum ve geceleri uyanıyorum. Ayrıca işte yoğun stres yaşıyorum.',bd:[{ro:'dormo male e mi sveglio di notte',tr:'kötü uyuyorum ve geceleri uyanıyorum',role:'symptom'},{ro:'forte stress al lavoro',tr:'işte yoğun stres',role:'cause'}]},
        {speaker:'A',gender:'f',en:'Capisco. Questi sintomi possono essere legati allo stress. Le prescrivo degli esami del sangue per escludere altre cause.',tr:'Anlıyorum. Bu belirtiler stresle ilişkili olabilir. Diğer nedenleri ekarte etmek için kan testleri yazıyorum.',bd:[{ro:'possono essere legati allo stress',tr:'stresle ilişkili olabilir',role:'hypothesis'},{ro:'per escludere altre cause',tr:'diğer nedenleri ekarte etmek için',role:'purpose'}]},
        {speaker:'B',gender:'f',en:'Grazie dottoressa. C\'è qualcosa che posso fare subito?',tr:'Teşekkürler doktor hanım. Hemen yapabileceğim bir şey var mı?',bd:[{ro:'C\'è qualcosa che posso fare subito?',tr:'hemen yapabileceğim bir şey var mı?',role:'question'}]},
        {speaker:'A',gender:'f',en:'Sì: cerchi di dormire almeno sette ore, riduca lo stress e faccia attività fisica leggera. Torni tra una settimana con i risultati.',tr:'Evet: en az yedi saat uyumaya çalışın, stresi azaltın ve hafif egzersiz yapın. Sonuçlarla bir haftaya gelin.',bd:[{ro:'Torni tra una settimana con i risultati',tr:'sonuçlarla bir haftaya gelin',role:'instruction'},{ro:'faccia attività fisica leggera',tr:'hafif egzersiz yapın (kibarca)',role:'advice'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Il Sistema Sanitario Nazionale italiano, noto come SSN, garantisce cure mediche a tutti i cittadini e residenti legali. È finanziato attraverso le tasse. Ogni cittadino ha un medico di base, detto "medico di famiglia", che è il primo punto di contatto. Per visite specialistiche è necessaria una ricetta del medico di base. I pronto soccorso degli ospedali sono aperti ventiquattro ore su ventiquattro per le emergenze.',
      tr:'İtalya\'nın Ulusal Sağlık Sistemi (SSN), tüm vatandaşlara ve yasal ikamet eden kişilere tıbbi hizmet garanti ediyor. Vergilerle finanse ediliyor. Her vatandaşın ilk başvuru noktası olan bir aile hekimi var. Uzman muayeneleri için aile hekimi reçetesi gerekiyor. Hastanelerin acil servisleri acil durumlar için yirmi dört saat açık.',
      questions:[
        {q:'SSN kısaltması neyi temsil ediyor?',opts:['Servizio Sportivo Nazionale','Sistema Sanitario Nazionale','Scuola Superiore Nazionale','Società Scientifica Normale'],answer:1,tr:'Sistema Sanitario Nazionale (Ulusal Sağlık Sistemi)'},
        {q:'"Medico di famiglia" kimdir?',opts:['Hastane uzmanı','Acil servis doktoru','İlk başvuru hekimi','Cerrah'],answer:2,tr:'İlk başvuru hekimi (aile hekimi)'},
        {q:'Uzman için ne gerekli?',opts:['Doğrudan gidebilirsin','Aile hekimi reçetesi gerekli','Para ödemen gerekli','Randevu almak yeterli'],answer:1,tr:'Aile hekimi reçetesi gerekli (ricetta del medico di base)'}
      ]
    }
  ],
  tones:[]
};
LESSONS[41] = L41;
