// ders38.js — Italian Lesson 38: Professioni (Meslekler)
const L38 = {
  words:[
    {id:'w1',en:'il medico / il dottore',ro:'il medico',tr:'doktor / hekim',examples:[{it:'Mia sorella è medico, lavora in un pronto soccorso di notte.',tr:'Kız kardeşim doktor, gece acil serviste çalışıyor.',bd:[{ro:'è medico',tr:'doktordur'},{ro:'lavora in un pronto soccorso',tr:'acil serviste çalışıyor'}]}]},
    {id:'w2',en:'l\'avvocato',ro:'l\'avvocato',tr:'avukat',examples:[{it:'Ho bisogno di un avvocato per il contratto di affitto.',tr:'Kira sözleşmesi için bir avukata ihtiyacım var.',bd:[{ro:'Ho bisogno di un avvocato',tr:'bir avukata ihtiyacım var'},{ro:'per il contratto di affitto',tr:'kira sözleşmesi için'}]}]},
    {id:'w3',en:'l\'ingegnere',ro:'l\'ingegnere',tr:'mühendis',examples:[{it:'Lavoro come ingegnere civile in una grande azienda di costruzioni.',tr:'Büyük bir inşaat şirketinde inşaat mühendisi olarak çalışıyorum.',bd:[{ro:'ingegnere civile',tr:'inşaat mühendisi'},{ro:'azienda di costruzioni',tr:'inşaat şirketi'}]}]},
    {id:'w4',en:'l\'insegnante / il professore',ro:'l\'insegnante',tr:'öğretmen / profesör',examples:[{it:'Mia madre è insegnante di matematica alle medie da venticinque anni.',tr:'Annem yirmi beş yıldır ortaokulda matematik öğretmeni.',bd:[{ro:'insegnante di matematica alle medie',tr:'ortaokulda matematik öğretmeni'},{ro:'da venticinque anni',tr:'yirmi beş yıldır'}]}]},
    {id:'w5',en:'il cuoco / lo chef',ro:'il cuoco',tr:'aşçı / şef',examples:[{it:'Ho sempre sognato di diventare chef e aprire il mio ristorante.',tr:'Her zaman şef olmayı ve kendi restoranımı açmayı hayal ettim.',bd:[{ro:'Ho sempre sognato di diventare chef',tr:'her zaman şef olmayı hayal ettim'},{ro:'aprire il mio ristorante',tr:'kendi restoranımı açmak'}]}]},
    {id:'w6',en:'l\'architetto',ro:'l\'architetto',tr:'mimar',examples:[{it:'Il celebre architetto Renzo Piano ha progettato il Centro Pompidou a Parigi.',tr:'Ünlü mimar Renzo Piano Paris\'teki Pompidou Merkezi\'ni tasarladı.',bd:[{ro:'Il celebre architetto Renzo Piano',tr:'ünlü mimar Renzo Piano'},{ro:'ha progettato il Centro Pompidou',tr:'Pompidou Merkezi\'ni tasarladı'}]}]},
    {id:'w7',en:'l\'informatico / il programmatore',ro:'l\'informatico',tr:'bilişimci / programcı',examples:[{it:'Sono programmatore freelance e lavoro da casa per clienti internazionali.',tr:'Freelance programcıyım ve uluslararası müşteriler için evden çalışıyorum.',bd:[{ro:'programmatore freelance',tr:'freelance programcı'},{ro:'per clienti internazionali',tr:'uluslararası müşteriler için'}]}]},
    {id:'w8',en:'il giornalista / il redattore',ro:'il giornalista',tr:'gazeteci / editör',examples:[{it:'Il giornalista ha intervistato il sindaco sulla nuova legge.',tr:'Gazeteci, yeni yasa konusunda belediye başkanıyla röportaj yaptı.',bd:[{ro:'ha intervistato il sindaco',tr:'belediye başkanıyla röportaj yaptı'},{ro:'sulla nuova legge',tr:'yeni yasa konusunda'}]}]},
    {id:'w9',en:'il commerciante / il negoziante',ro:'il commerciante',tr:'tüccar / dükkan sahibi',examples:[{it:'Mio nonno era commerciante di tessuti: aveva un negozio in centro.',tr:'Büyükbabam kumaş tüccarıydı: merkezde bir dükkânı vardı.',bd:[{ro:'commerciante di tessuti',tr:'kumaş tüccarı'},{ro:'aveva un negozio in centro',tr:'merkezde dükkânı vardı'}]}]},
    {id:'w10',en:'l\'agricoltore / il contadino',ro:'l\'agricoltore',tr:'çiftçi',examples:[{it:'Gli agricoltori toscani producono vini e oli di alta qualità.',tr:'Toskana çiftçileri yüksek kaliteli şaraplar ve zeytinyağları üretiyor.',bd:[{ro:'Gli agricoltori toscani',tr:'Toskana çiftçileri'},{ro:'producono vini e oli di alta qualità',tr:'yüksek kaliteli şarap ve zeytinyağı üretiyor'}]}]},
    {id:'w11',en:'il meccanico / l\'elettricista',ro:'il meccanico',tr:'mekanik / elektrikçi',examples:[{it:'Ho portato la macchina dal meccanico: il motore faceva un rumore strano.',tr:'Arabayı mekanikçiye götürdüm: motor garip ses çıkarıyordu.',bd:[{ro:'Ho portato la macchina dal meccanico',tr:'arabayı mekanikçiye götürdüm'},{ro:'il motore faceva un rumore strano',tr:'motor garip ses çıkarıyordu'}]}]},
    {id:'w12',en:'l\'artista / il musicista',ro:'l\'artista',tr:'sanatçı / müzisyen',examples:[{it:'Da giovane volevo fare il musicista, ma poi ho scelto un percorso diverso.',tr:'Gençken müzisyen olmak istiyordum, ama sonra farklı bir yol seçtim.',bd:[{ro:'volevo fare il musicista',tr:'müzisyen olmak istiyordum'},{ro:'ho scelto un percorso diverso',tr:'farklı bir yol seçtim'}]}]},
    {id:'w13',en:'il pompiere / il poliziotto',ro:'il pompiere',tr:'itfaiyeci / polis',examples:[{it:'I pompieri sono intervenuti rapidamente per spegnere l\'incendio.',tr:'İtfaiyeciler yangını söndürmek için hızla müdahale etti.',bd:[{ro:'I pompieri sono intervenuti rapidamente',tr:'itfaiyeciler hızla müdahale etti'},{ro:'per spegnere l\'incendio',tr:'yangını söndürmek için'}]}]},
    {id:'w14',en:'il pilota / il capitano',ro:'il pilota',tr:'pilot / kaptan',examples:[{it:'Il pilota ha annunciato che atterreremo con mezz\'ora di ritardo.',tr:'Pilot, yarım saat gecikmeli ineceğimizi duyurdu.',bd:[{ro:'ha annunciato',tr:'duyurdu'},{ro:'atterreremo con mezz\'ora di ritardo',tr:'yarım saat gecikmeli ineceğiz'}]}]},
    {id:'w15',en:'il ricercatore / lo scienziato',ro:'il ricercatore',tr:'araştırmacı / bilim insanı',examples:[{it:'La ricercatrice ha pubblicato un articolo rivoluzionario sul cancro.',tr:'Araştırmacı, kanser hakkında devrimsel bir makale yayınladı.',bd:[{ro:'ha pubblicato un articolo rivoluzionario',tr:'devrimsel bir makale yayınladı'},{ro:'sul cancro',tr:'kanser hakkında'}]}]},
    {id:'w16',en:'il commesso / il cassiere',ro:'il commesso',tr:'satış elemanı / kasiyer',examples:[{it:'Ho lavorato come commessa in un negozio d\'abbigliamento durante l\'università.',tr:'Üniversite sırasında bir giyim mağazasında satış elemanı olarak çalıştım.',bd:[{ro:'Ho lavorato come commessa',tr:'satış elemanı olarak çalıştım'},{ro:'durante l\'università',tr:'üniversite sırasında'}]}]},
    {id:'w17',en:'il traduttore / l\'interprete',ro:'il traduttore',tr:'çevirmen / tercüman',examples:[{it:'Lavoro come interprete alle Nazioni Unite: traduco dall\'italiano all\'inglese.',tr:'Birleşmiş Milletler\'de tercüman olarak çalışıyorum: İtalyancadan İngilizceye çeviriyorum.',bd:[{ro:'interprete alle Nazioni Unite',tr:'Birleşmiş Milletler\'de tercüman'},{ro:'dall\'italiano all\'inglese',tr:'İtalyancadan İngilizceye'}]}]},
    {id:'w18',en:'il direttore / il manager',ro:'il direttore',tr:'direktör / müdür',examples:[{it:'La nuova direttrice ha cambiato completamente la struttura dell\'azienda.',tr:'Yeni direktör şirketin yapısını tamamen değiştirdi.',bd:[{ro:'La nuova direttrice',tr:'yeni direktör (kadın)'},{ro:'ha cambiato completamente la struttura',tr:'yapısını tamamen değiştirdi'}]}]},
    {id:'w19',en:'il volontario / il lavoratore autonomo',ro:'il volontario',tr:'gönüllü / serbest çalışan',examples:[{it:'Faccio volontariato ogni weekend in un rifugio per animali.',tr:'Her hafta sonu bir hayvan barınağında gönüllülük yapıyorum.',bd:[{ro:'Faccio volontariato',tr:'gönüllülük yapıyorum'},{ro:'in un rifugio per animali',tr:'bir hayvan barınağında'}]}]},
    {id:'w20',en:'la carriera / la promozione',ro:'la carriera',tr:'kariyer / terfi',examples:[{it:'Ho ricevuto una promozione! Ora sono responsabile del team di marketing.',tr:'Terfi aldım! Artık pazarlama ekibinin sorumlusuyum.',bd:[{ro:'Ho ricevuto una promozione',tr:'terfi aldım'},{ro:'responsabile del team di marketing',tr:'pazarlama ekibinin sorumlusu'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Mestieri: Essere + Professione',
      title_en:'Professions: Essere + Profession (No Article)',
      explanation:'İtalyanca\'da meslek belirtirken artikelsiz kullanım.',
      table:[
        {pronoun:'essere + mestiere',form:'articolo YOK',example:'Sono medico. È avvocato.',tr:'Doktorum. Avukattır.'},
        {pronoun:'fare il/la + mestiere',form:'fare ile',example:'Faccio il cuoco da dieci anni.',tr:'On yıldır aşçılık yapıyorum.'},
        {pronoun:'lavorare come',form:'olarak çalışmak',example:'Lavoro come ingegnere.',tr:'Mühendis olarak çalışıyorum.'},
        {pronoun:'La professione femminile',form:'dişil meslek isimleri',example:'avvocatessa, medichessa (tartışmalı), professoressa',tr:'Kadın avukat, kadın doktor, kadın profesör'}
      ],
      note:'Erkek: ingegnere, dottore, avvocato. Kadın: ingegnera, dottoressa, avvocatessa (veya avvocato — günümüzde tartışmalı, kadınların tercihi önemli).'
    },
    {
      id:'g2',
      title:'Volere Fare + Professione: Kariyer Hayalleri',
      title_en:'Career Dreams: Volere Fare',
      explanation:'Meslek hayalleri ve kariyer hedefleri anlatmak için yapılar.',
      table:[
        {pronoun:'voglio diventare',form:'olmak istiyorum',example:'Voglio diventare medico chirurgo.',tr:'Cerrah olmak istiyorum.'},
        {pronoun:'ho sempre sognato di',form:'her zaman hayal ettim',example:'Ho sempre sognato di fare l\'attore.',tr:'Her zaman aktör olmayı hayal ettim.'},
        {pronoun:'sto studiando per',form:'için okuyorum',example:'Sto studiando per diventare avvocato.',tr:'Avukat olmak için okuyorum.'},
        {pronoun:'mi piacerebbe lavorare',form:'çalışmak hoşuma giderdi',example:'Mi piacerebbe lavorare nel cinema.',tr:'Sinemada çalışmak hoşuma giderdi.'}
      ],
      note:'"Da grande voglio fare il/la..." = büyüyünce ... olmak istiyorum. Çocukların sık kullandığı ifade. Yetişkinler için: "In futuro mi piacerebbe..."'
    },
    {
      id:'g3',
      title:'Descrizione del Lavoro: İşi Tanımlama',
      title_en:'Describing Your Job',
      explanation:'İş ve görevleri tanımlamak için kullanılan yapılar.',
      table:[
        {pronoun:'Si occupa di',form:'ile ilgileniyor',example:'Si occupa di marketing e comunicazione.',tr:'Pazarlama ve iletişimle ilgileniyor.'},
        {pronoun:'Lavora con/per',form:'ile/için çalışıyor',example:'Lavora con un team internazionale.',tr:'Uluslararası bir takımla çalışıyor.'},
        {pronoun:'Ha la responsabilità di',form:'sorumluluğu var',example:'Ha la responsabilità di gestire il budget.',tr:'Bütçeyi yönetme sorumluluğu var.'},
        {pronoun:'Guadagna / prende',form:'kazanıyor',example:'Guadagna uno stipendio fisso mensile.',tr:'Aylık sabit maaş kazanıyor.'}
      ],
      note:'"Libero professionista" = serbest meslek. "Dipendente" = çalışan. "Datore di lavoro" = işveren. "Pensionato" = emekli.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Sono traduttrice freelance: traduco libri dall\'italiano al turco.',tr:'Freelance çevirmenim: İtalyancadan Türkçeye kitap çeviriyorum.',prompt:'Mesleğini anlat'},
    {id:'sp2',en:'Da piccola volevo fare la veterinaria per amore degli animali.',tr:'Küçükken hayvanlara olan sevgimden dolayı veteriner olmak istiyordum.',prompt:'Çocukluk hayali'},
    {id:'sp3',en:'Il mio capo è molto esigente ma giusto: imparo molto.',tr:'Patronum çok talepkâr ama adil: çok şey öğreniyorum.',prompt:'İş ortamı anlat'},
    {id:'sp4',en:'Ho cambiato carriera a quarant\'anni: ho lasciato la banca per aprire una gelateria!',tr:'Kırk yaşında kariyer değiştirdim: dondurma dükkanı açmak için bankayı bıraktım!',prompt:'Kariyer değişimi'},
    {id:'sp5',en:'In Italia trovare lavoro stabile è ancora difficile per i giovani.',tr:'İtalya\'da genç insanlar için istikrarlı iş bulmak hâlâ zor.',prompt:'İtalya\'da iş piyasası'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Mesleğini Sorma ve Söyleme',
      title_en:'Asking About and Describing Your Job',
      lines:[
        {speaker:'A',gender:'m',en:'Di che cosa ti occupi? Lavori qui a Milano?',tr:'Ne iş yapıyorsun? Milano\'da mı çalışıyorsun?',bd:[{ro:'Di che cosa ti occupi?',tr:'ne iş yapıyorsun?',role:'question'},{ro:'Lavori qui a Milano?',tr:'Milano\'da mı çalışıyorsun?',role:'question'}]},
        {speaker:'B',gender:'f',en:'Sì, lavoro come designer grafico in un\'agenzia pubblicitaria. E tu?',tr:'Evet, bir reklam ajansında grafik tasarımcı olarak çalışıyorum. Ya sen?',bd:[{ro:'designer grafico',tr:'grafik tasarımcı',role:'profession'},{ro:'agenzia pubblicitaria',tr:'reklam ajansı',role:'workplace'}]},
        {speaker:'A',gender:'m',en:'Io faccio il ricercatore all\'università. Studio l\'intelligenza artificiale.',tr:'Ben üniversitede araştırmacıyım. Yapay zekayı araştırıyorum.',bd:[{ro:'faccio il ricercatore all\'università',tr:'üniversitede araştırmacıyım',role:'profession'},{ro:'Studio l\'intelligenza artificiale',tr:'yapay zekayı araştırıyorum',role:'field'}]},
        {speaker:'B',gender:'f',en:'Interessante! Da quanto tempo lavori in questo settore?',tr:'İlginç! Bu alanda ne zamandır çalışıyorsun?',bd:[{ro:'Da quanto tempo lavori',tr:'ne zamandır çalışıyorsun?',role:'question'},{ro:'in questo settore',tr:'bu alanda',role:'sector'}]},
        {speaker:'A',gender:'m',en:'Da sette anni. Prima facevo il programmatore, poi ho deciso di dedicarmi alla ricerca.',tr:'Yedi yıldır. Önce programcıydım, sonra kendimi araştırmaya adamaya karar verdim.',bd:[{ro:'Prima facevo il programmatore',tr:'önce programcıydım',role:'past_job'},{ro:'ho deciso di dedicarmi alla ricerca',tr:'kendimi araştırmaya adamaya karar verdim',role:'decision'}]},
        {speaker:'B',gender:'f',en:'Che bello! Anch\'io ho sempre avuto la passione per la tecnologia e il design.',tr:'Ne güzel! Ben de her zaman teknoloji ve tasarım tutkusu taşıdım.',bd:[{ro:'Anch\'io ho sempre avuto la passione',tr:'ben de her zaman tutkusu taşıdım',role:'common_ground'},{ro:'per la tecnologia e il design',tr:'teknoloji ve tasarım için',role:'interest'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Il mercato del lavoro in Italia sta attraversando una fase di trasformazione. Alcune professioni tradizionali stanno diminuendo, mentre nuove figure professionali emergono, soprattutto nel settore digitale. Professioni come il social media manager, il data analyst e lo UX designer sono molto richieste. Allo stesso tempo, professioni come il medico, l\'insegnante e l\'ingegnere rimangono fondamentali e stabili. La formazione continua è diventata indispensabile per restare competitivi.',
      tr:'İtalya\'da iş piyasası bir dönüşüm sürecinden geçiyor. Bazı geleneksel meslekler azalırken, özellikle dijital sektörde yeni profesyonel figürler ortaya çıkıyor. Sosyal medya yöneticisi, veri analisti ve UX tasarımcısı gibi meslekler çok talep görüyor. Aynı zamanda doktor, öğretmen ve mühendis gibi meslekler temel ve istikrarlı olmaya devam ediyor. Rekabetçi kalmak için sürekli eğitim vazgeçilmez hale geldi.',
      questions:[
        {q:'Hangi meslekler çok talep görüyor?',opts:['Geleneksel zanaatlar','Sosyal medya yöneticisi, veri analisti','Tarım işçileri','Madenciler'],answer:1,tr:'Sosyal medya yöneticisi, veri analisti, UX tasarımcısı'},
        {q:'Rekabetçi kalmak için ne gerekli?',opts:['Çok para biriktirmek','Sürekli eğitim','Yurtdışına gitmek','Birden fazla iş yapmak'],answer:1,tr:'Sürekli eğitim (formazione continua)'},
        {q:'Hangi meslekler istikrarlı olmaya devam ediyor?',opts:['Sadece doktorlar','Doktor, öğretmen ve mühendis','Yalnızca programcılar','Sadece müzisyenler'],answer:1,tr:'Doktor, öğretmen ve mühendis (medico, insegnante e ingegnere)'}
      ]
    }
  ],
  tones:[]
};
LESSONS[38] = L38;
