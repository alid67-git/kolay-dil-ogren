// ders17.js — Italian Lesson 17: Emotions & Feelings (Duygular ve Hisler)
const L17 = {
  words:[
    {id:'w1',en:'felice / contento',ro:'felice',tr:'mutlu / sevinçli',examples:[{it:'Sono molto felice oggi!',tr:'Bugün çok mutluyum!',bd:[{ro:'Sono molto felice',tr:'çok mutluyum'},{ro:'oggi',tr:'bugün'}]}]},
    {id:'w2',en:'triste / malinconico',ro:'triste',tr:'üzgün / melankolik',examples:[{it:'Mi sento un po\' triste oggi.',tr:'Bugün biraz üzgün hissediyorum.',bd:[{ro:'Mi sento un po\' triste',tr:'biraz üzgün hissediyorum'},{ro:'oggi',tr:'bugün'}]}]},
    {id:'w3',en:'arrabbiato / adirato',ro:'arrabbiato',tr:'kızgın / sinirli',examples:[{it:'Sono arrabbiato con lui per quello che ha fatto.',tr:'Yaptığı şey için ona kızgınım.',bd:[{ro:'Sono arrabbiato con lui',tr:'ona kızgınım'},{ro:'per quello che ha fatto',tr:'yaptığı şey için'}]}]},
    {id:'w4',en:'stanco / esausto',ro:'stanco',tr:'yorgun / bitik',examples:[{it:'Sono stanchissimo, ho lavorato tutto il giorno.',tr:'Çok yorgunum, tüm gün çalıştım.',bd:[{ro:'Sono stanchissimo',tr:'çok yorgunum'},{ro:'ho lavorato tutto il giorno',tr:'tüm gün çalıştım'}]}]},
    {id:'w5',en:'preoccupato / ansioso',ro:'preoccupato',tr:'endişeli / kaygılı',examples:[{it:'Sono preoccupato per l\'esame di domani.',tr:'Yarınki sınav için endişeliyim.',bd:[{ro:'Sono preoccupato per',tr:'için endişeliyim'},{ro:'l\'esame di domani',tr:'yarınki sınav'}]}]},
    {id:'w6',en:'sorpreso / stupito',ro:'sorpreso',tr:'şaşırmış',examples:[{it:'Sono rimasto sorpreso dalla bella notizia.',tr:'Güzel haberden şaşırıp kaldım.',bd:[{ro:'Sono rimasto sorpreso',tr:'şaşırıp kaldım'},{ro:'dalla bella notizia',tr:'güzel haberden'}]}]},
    {id:'w7',en:'emozionato / commosso',ro:'emozionato',tr:'heyecanlı / duygulanmış',examples:[{it:'Sono emozionato per il mio primo giorno di lavoro.',tr:'İlk iş günüm için heyecanlıyım.',bd:[{ro:'Sono emozionato per',tr:'için heyecanlıyım'},{ro:'il mio primo giorno di lavoro',tr:'ilk iş günüm'}]}]},
    {id:'w8',en:'la gioia / la felicità',ro:'la gioia',tr:'sevinç / mutluluk',examples:[{it:'La nascita del bambino ha portato grande gioia.',tr:'Bebeğin doğumu büyük sevinç getirdi.',bd:[{ro:'La nascita del bambino',tr:'bebeğin doğumu'},{ro:'ha portato grande gioia',tr:'büyük sevinç getirdi'}]}]},
    {id:'w9',en:'la tristezza / il dolore',ro:'la tristezza',tr:'üzüntü / acı',examples:[{it:'La tristezza passerà, ci vuole tempo.',tr:'Üzüntü geçecek, zaman lazım.',bd:[{ro:'La tristezza passerà',tr:'üzüntü geçecek'},{ro:'ci vuole tempo',tr:'zaman lazım'}]}]},
    {id:'w10',en:'la rabbia / la frustrazione',ro:'la rabbia',tr:'öfke / hayal kırıklığı',examples:[{it:'Cerca di controllare la rabbia.',tr:'Öfkeni kontrol etmeye çalış.',bd:[{ro:'Cerca di controllare',tr:'kontrol etmeye çalış'},{ro:'la rabbia',tr:'öfkeni'}]}]},
    {id:'w11',en:'la paura / lo spavento',ro:'la paura',tr:'korku',examples:[{it:'Ho paura del buio.',tr:'Karanlıktan korkuyorum.',bd:[{ro:'Ho paura del buio',tr:'karanlıktan korkuyorum',note:'Ho paura di = den korkuyorum'}]}]},
    {id:'w12',en:'la speranza / il desiderio',ro:'la speranza',tr:'umut / arzu',examples:[{it:'Non perdere la speranza!',tr:'Umudu kaybetme!',bd:[{ro:'Non perdere',tr:'kaybetme'},{ro:'la speranza',tr:'umudu'}]}]},
    {id:'w13',en:'Come ti senti?',ro:'Come ti senti?',tr:'Nasıl hissediyorsun?',examples:[{it:'Come ti senti oggi? — Non molto bene.',tr:'Bugün nasıl hissediyorsun? — Pek iyi değil.',bd:[{ro:'Come ti senti oggi?',tr:'bugün nasıl hissediyorsun?'},{ro:'Non molto bene',tr:'pek iyi değil'}]}]},
    {id:'w14',en:'Mi sento...',ro:'Mi sento',tr:'... hissediyorum',examples:[{it:'Mi sento meglio dopo una buona dormita.',tr:'İyi bir uykudan sonra daha iyi hissediyorum.',bd:[{ro:'Mi sento meglio',tr:'daha iyi hissediyorum'},{ro:'dopo una buona dormita',tr:'iyi bir uykudan sonra'}]}]},
    {id:'w15',en:'innamorato / innamorata',ro:'innamorato',tr:'aşık',examples:[{it:'Sono innamorato di lei dal primo giorno.',tr:'İlk günden beri ona aşığım.',bd:[{ro:'Sono innamorato di lei',tr:'ona aşığım'},{ro:'dal primo giorno',tr:'ilk günden beri'}]}]},
    {id:'w16',en:'geloso / gelosa',ro:'geloso',tr:'kıskanç',examples:[{it:'Non essere geloso, ti voglio bene!',tr:'Kıskanma, seni seviyorum!',bd:[{ro:'Non essere geloso',tr:'kıskanma'},{ro:'ti voglio bene',tr:'seni seviyorum (sevgi)'}]}]},
    {id:'w17',en:'tranquillo / rilassato',ro:'tranquillo',tr:'sakin / rahat',examples:[{it:'Dopo le vacanze mi sento molto rilassato.',tr:'Tatilden sonra çok rahat hissediyorum.',bd:[{ro:'Dopo le vacanze',tr:'tatilden sonra'},{ro:'mi sento molto rilassato',tr:'çok rahat hissediyorum'}]}]},
    {id:'w18',en:'nervoso / agitato',ro:'nervoso',tr:'gergin / tedirgin',examples:[{it:'Mi sento nervoso prima di parlare in pubblico.',tr:'Topluluk önünde konuşmadan önce gergin hissediyorum.',bd:[{ro:'Mi sento nervoso',tr:'gergin hissediyorum'},{ro:'prima di parlare in pubblico',tr:'topluluk önünde konuşmadan önce'}]}]},
    {id:'w19',en:'vergognarsi / la vergogna',ro:'vergognarsi',tr:'utanmak / utanç',examples:[{it:'Mi sono vergognato di aver fatto un errore.',tr:'Hata yaptığım için utandım.',bd:[{ro:'Mi sono vergognato',tr:'utandım'},{ro:'di aver fatto un errore',tr:'hata yaptığım için'}]}]},
    {id:'w20',en:'sperare / sperare che...',ro:'sperare',tr:'ummak / umulmak ki',examples:[{it:'Spero che tutto vada bene!',tr:'Her şeyin yolunda gitmesini umuyorum!',bd:[{ro:'Spero che',tr:'umuyorum ki'},{ro:'tutto vada bene',tr:'her şey yolunda gitsin'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Duygu Bildirme: "Essere" ile Sıfat',
      title_en:'Expressing Emotions with "Essere"',
      explanation:'"Sono + sıfat" yapısıyla duygu bildirilebilir. Sıfatlar cinsiyete göre değişir: felice (tekil her iki cins), triste (değişmez), arrabbiato/arrabbiata (cinsiyete göre).',
      table:[
        {pronoun:'io (m)',form:'Sono + sıfat (m)',example:'Sono felice / triste / arrabbiato.',tr:'Mutluyum / Üzgünüm / Kızgınım.'},
        {pronoun:'io (f)',form:'Sono + sıfat (f)',example:'Sono felice / triste / arrabbiata.',tr:'Mutluyum / Üzgünüm / Kızgınım. (k)'},
        {pronoun:'mi sento',form:'Mi sento + sıfat',example:'Mi sento stanco. / Mi sento meglio.',tr:'Yorgun hissediyorum. / Daha iyi hissediyorum.'},
        {pronoun:'provo',form:'Provo + duygu ismi',example:'Provo una grande gioia!',tr:'Büyük bir sevinç duyuyorum!'}
      ],
      note:'"Mi sento" (hissediyorum) + sıfat çok yaygın. "Sono" daha kesin, "mi sento" daha geçici duygu için kullanılır.'
    },
    {
      id:'g2',
      title:'Duygular İçin "Avere" Yapısı',
      title_en:'"Avere" + Emotion Noun',
      explanation:'"Avere + duygu ismi" yapısıyla da duygu bildirilebilir. Bu yapıda isimler article almaz.',
      table:[
        {pronoun:'Korku',form:'avere paura (di)',example:'Ho paura dei ragni.',tr:'Örümceklerden korkuyorum.'},
        {pronoun:'Umut',form:'avere speranza',example:'Ho ancora speranza.',tr:'Hâlâ umut var.'},
        {pronoun:'Utanç',form:'avere vergogna (di)',example:'Non ho vergogna di piangere.',tr:'Ağlamaktan utanmıyorum.'},
        {pronoun:'Yas',form:'avere il cuore spezzato',example:'Ho il cuore spezzato.',tr:'Kalbim kırık.'}
      ],
      note:'"Ho paura di + infinitive" = den korkuyorum: "Ho paura di parlare in pubblico" (topluluk önünde konuşmaktan korkuyorum).'
    },
    {
      id:'g3',
      title:'Duygu Soruları: Come stai? / Come ti senti?',
      title_en:'Asking About Feelings',
      explanation:'Birinin durumunu sormak için kullanılan yaygın ifadeler ve yanıtları.',
      table:[
        {pronoun:'Soru (arkadaş)',form:'Come stai? / Come ti senti?',example:'Come stai oggi? Tutto bene?',tr:'Bugün nasılsın? Her şey yolunda mı?'},
        {pronoun:'Soru (kibar)',form:'Come sta? / Come si sente?',example:'Come si sente oggi, signora?',tr:'Bugün nasılsınız hanımefendi?'},
        {pronoun:'İyi yanıt',form:'Sto bene / benissimo / abbastanza bene',example:'Sto benissimo, grazie! E tu?',tr:'Çok iyiyim, teşekkürler! Ya sen?'},
        {pronoun:'Kötü yanıt',form:'Non sto bene / sto male / così così',example:'Non sto benissimo, sono un po\' giù.',tr:'Pek iyi değilim, biraz moralim bozuk.'}
      ],
      note:'"Essere giù" = moralinin bozuk olması. "Essere su di giri" = çok neşeli/enerjik olma. "Avere il morale basso" = morali bozuk.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Come ti senti oggi? — Mi sento un po\' stanco.',tr:'Bugün nasıl hissediyorsun? — Biraz yorgun hissediyorum.',prompt:'Duygunu ifade et'},
    {id:'sp2',en:'Sono molto emozionato per la partita stasera!',tr:'Bu akşamki maç için çok heyecanlıyım!',prompt:'Heyecanını anlat'},
    {id:'sp3',en:'Mi sento meglio oggi, grazie per avermelo chiesto.',tr:'Bugün daha iyi hissediyorum, sorduğun için teşekkürler.',prompt:'İyileştiğini anlat'},
    {id:'sp4',en:'Sono preoccupato per l\'esame di domani.',tr:'Yarınki sınav için endişeliyim.',prompt:'Endişeni ifade et'},
    {id:'sp5',en:'Spero che tutto vada bene!',tr:'Her şeyin yolunda gitmesini umuyorum!',prompt:'Birini umutla teselli et'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Nasılsın?',
      title_en:'How Are You?',
      lines:[
        {speaker:'B',gender:'f',en:'Ciao Ali! Come stai? Hai una faccia stanca...',tr:'Merhaba Ali! Nasılsın? Yorgun bir yüzün var...',bd:[{ro:'Come stai?',tr:'nasılsın?',role:'question'},{ro:'Hai una faccia stanca',tr:'yorgun yüzün var',role:'observation'}]},
        {speaker:'A',gender:'m',en:'Sto così così. Sono molto stanco e un po\' preoccupato.',tr:'Şöyle böyle. Çok yorgunum ve biraz endişeliyim.',bd:[{ro:'Sto così così',tr:'şöyle böyle',role:'response'},{ro:'sono molto stanco',tr:'çok yorgunum',role:'emotion'},{ro:'un po\' preoccupato',tr:'biraz endişeli',role:'emotion'}]},
        {speaker:'B',gender:'f',en:'Preoccupato? Perché?',tr:'Endişeli? Neden?',bd:[{ro:'Preoccupato? Perché?',tr:'endişeli? neden?',role:'question'}]},
        {speaker:'A',gender:'m',en:'Ho un esame importante la prossima settimana e non mi sento preparato.',tr:'Önümüzdeki hafta önemli bir sınavım var ve kendimi hazırlıklı hissetmiyorum.',bd:[{ro:'Ho un esame importante',tr:'önemli bir sınavım var'},{ro:'la prossima settimana',tr:'önümüzdeki hafta'},{ro:'non mi sento preparato',tr:'hazırlıklı hissetmiyorum'}]},
        {speaker:'B',gender:'f',en:'Non preoccuparti! Sei bravissimo. Sono sicura che andrà tutto bene!',tr:'Endişelenme! Çok iyisin. Eminim her şey yoluna girecek!',bd:[{ro:'Non preoccuparti!',tr:'endişelenme!',role:'comfort'},{ro:'Sono sicura che',tr:'eminim ki',role:'certainty'},{ro:'andrà tutto bene',tr:'her şey yoluna girecek',role:'reassurance'}]},
        {speaker:'A',gender:'m',en:'Grazie, mi hai fatto sentire meglio!',tr:'Teşekkürler, daha iyi hissettirdin!',bd:[{ro:'mi hai fatto sentire meglio',tr:'daha iyi hissettirdin',role:'gratitude'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Oggi mi sento un po\' strano. Stamattina ero felice perché il sole splendeva, ma dopo ho ricevuto una brutta notizia da un amico. Ora sono triste e preoccupato. Spero che domani le cose vadano meglio.',
      tr:'Bugün biraz tuhaf hissediyorum. Bu sabah güneş parlıyordu diye mutluydum, ama sonra bir arkadaşımdan kötü haber aldım. Şimdi üzgün ve endişeliyim. Umarım yarın işler daha iyi gider.',
      questions:[
        {q:'Sabah nasıl hissediyordu?',opts:['Üzgün','Kızgın','Mutlu','Yorgun'],answer:2,tr:'Mutlu (felice)'},
        {q:'Ruh halini ne değiştirdi?',opts:['Hava değişikliği','Kötü haber','İş stresi','Sınav kaygısı'],answer:1,tr:'Kötü haber (brutta notizia)'},
        {q:'Şu an nasıl hissediyor?',opts:['Mutlu','Sakin','Üzgün ve endişeli','Yorgun']  ,answer:2,tr:'Üzgün ve endişeli (triste e preoccupato)'}
      ]
    }
  ],
  tones:[]
};
LESSONS[17] = L17;
