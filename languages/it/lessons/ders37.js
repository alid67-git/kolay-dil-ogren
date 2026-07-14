// ders37.js — Italian Lesson 37: Parole interrogative (Soru Kelimeleri)
const L37 = {
  words:[
    {id:'w1',en:'chi?',ro:'chi',tr:'kim?',examples:[{it:'Chi ha chiamato? — Non so, numero sconosciuto.',tr:'Kim aradı? — Bilmiyorum, bilinmeyen numara.',bd:[{ro:'Chi ha chiamato?',tr:'kim aradı?'},{ro:'numero sconosciuto',tr:'bilinmeyen numara'}]}]},
    {id:'w2',en:'che cosa? / cosa?',ro:'cosa',tr:'ne? / ne şey?',examples:[{it:'Cosa stai facendo? — Sto guardando un film.',tr:'Ne yapıyorsun? — Film izliyorum.',bd:[{ro:'Cosa stai facendo?',tr:'ne yapıyorsun?'},{ro:'Sto guardando un film',tr:'film izliyorum'}]}]},
    {id:'w3',en:'dove? / da dove?',ro:'dove',tr:'nerede? / nereden?',examples:[{it:'Dove sei? Ti aspetto da mezz\'ora!',tr:'Nerdesin? Yarım saattir bekliyorum!',bd:[{ro:'Dove sei?',tr:'nerdesin?'},{ro:'Ti aspetto da mezz\'ora',tr:'yarım saattir bekliyorum'}]}]},
    {id:'w4',en:'quando?',ro:'quando',tr:'ne zaman?',examples:[{it:'Quando torni? — Torno la settimana prossima.',tr:'Ne zaman dönüyorsun? — Önümüzdeki hafta dönüyorum.',bd:[{ro:'Quando torni?',tr:'ne zaman dönüyorsun?'},{ro:'Torno la settimana prossima',tr:'önümüzdeki hafta dönüyorum'}]}]},
    {id:'w5',en:'come?',ro:'come',tr:'nasıl?',examples:[{it:'Come stai? Come va il lavoro?',tr:'Nasılsın? İş nasıl gidiyor?',bd:[{ro:'Come stai?',tr:'nasılsın?'},{ro:'Come va il lavoro?',tr:'iş nasıl gidiyor?'}]}]},
    {id:'w6',en:'perché?',ro:'perché',tr:'neden? / çünkü',examples:[{it:'Perché sei in ritardo? — Perché il treno ha fatto ritardo.',tr:'Neden geç kaldın? — Çünkü tren gecikmeli geldi.',bd:[{ro:'Perché sei in ritardo?',tr:'neden geç kaldın?'},{ro:'Perché il treno ha fatto ritardo',tr:'çünkü tren gecikmeli geldi'}]}]},
    {id:'w7',en:'quanto? / quanti?',ro:'quanto',tr:'ne kadar? / kaç?',examples:[{it:'Quanto costa questo biglietto? — Costa venticinque euro.',tr:'Bu bilet ne kadar? — Yirmi beş euro.',bd:[{ro:'Quanto costa questo biglietto?',tr:'bu bilet ne kadar?'},{ro:'Costa venticinque euro',tr:'yirmi beş euro'}]}]},
    {id:'w8',en:'quale? / quali?',ro:'quale',tr:'hangi? / hangisi?',examples:[{it:'Quale libro preferisci? — Preferisco il romanzo storico.',tr:'Hangi kitabı tercih edersin? — Tarihi romanı tercih ederim.',bd:[{ro:'Quale libro preferisci?',tr:'hangi kitabı tercih edersin?'},{ro:'il romanzo storico',tr:'tarihi roman'}]}]},
    {id:'w9',en:'di chi?',ro:'di chi',tr:'kimin?',examples:[{it:'Di chi sono queste chiavi? — Sono mie, grazie!',tr:'Bu anahtarlar kimin? — Benimkiler, teşekkürler!',bd:[{ro:'Di chi sono queste chiavi?',tr:'bu anahtarlar kimin?'},{ro:'Sono mie',tr:'benimkiler'}]}]},
    {id:'w10',en:'a chi? / per chi?',ro:'a chi',tr:'kime? / kim için?',examples:[{it:'A chi stai scrivendo? — Sto scrivendo a mia sorella.',tr:'Kime yazıyorsun? — Kız kardeşime yazıyorum.',bd:[{ro:'A chi stai scrivendo?',tr:'kime yazıyorsun?'},{ro:'Sto scrivendo a mia sorella',tr:'kız kardeşime yazıyorum'}]}]},
    {id:'w11',en:'con chi?',ro:'con chi',tr:'kimle?',examples:[{it:'Con chi sei andato alla festa? — Con i miei amici dell\'università.',tr:'Partiye kimle gittin? — Üniversite arkadaşlarımla.',bd:[{ro:'Con chi sei andato?',tr:'kimle gittin?'},{ro:'i miei amici dell\'università',tr:'üniversite arkadaşlarım'}]}]},
    {id:'w12',en:'da quanto tempo?',ro:'da quanto tempo',tr:'ne zamandır? / ne kadar süredir?',examples:[{it:'Da quanto tempo aspetti? — Da quasi un\'ora!',tr:'Ne zamandır bekliyorsun? — Neredeyse bir saattir!',bd:[{ro:'Da quanto tempo aspetti?',tr:'ne zamandır bekliyorsun?'},{ro:'Da quasi un\'ora',tr:'neredeyse bir saattir'}]}]},
    {id:'w13',en:'in che modo? / come mai?',ro:'in che modo',tr:'nasıl? (ne şekilde?) / neden acaba?',examples:[{it:'Come mai sei così stanco? — Ho lavorato fino a mezzanotte.',tr:'Neden bu kadar yorgunsun acaba? — Gece yarısına kadar çalıştım.',bd:[{ro:'Come mai sei così stanco?',tr:'neden bu kadar yorgunsun acaba?'},{ro:'Ho lavorato fino a mezzanotte',tr:'gece yarısına kadar çalıştım'}]}]},
    {id:'w14',en:'da dove vieni? / di dove sei?',ro:'da dove',tr:'nereden geliyorsun? / nerelisin?',examples:[{it:'Di dove sei? — Sono turco, di Istanbul.',tr:'Nerelisin? — Türküm, İstanbul\'dan.',bd:[{ro:'Di dove sei?',tr:'nerelisin?'},{ro:'Sono turco, di Istanbul',tr:'Türküm, İstanbul\'dan'}]}]},
    {id:'w15',en:'a che ora?',ro:'a che ora',tr:'saat kaçta?',examples:[{it:'A che ora parte il treno? — Parte alle diciassette e trenta.',tr:'Tren saat kaçta kalkıyor? — On yedi otuzda kalkıyor.',bd:[{ro:'A che ora parte il treno?',tr:'tren saat kaçta kalkıyor?'},{ro:'Parte alle diciassette e trenta',tr:'on yedi otuzda kalkıyor'}]}]},
    {id:'w16',en:'per quanto tempo?',ro:'per quanto tempo',tr:'ne kadar süre için?',examples:[{it:'Per quanto tempo rimarrai in Italia? — Tre settimane.',tr:'İtalya\'da ne kadar kalacaksın? — Üç hafta.',bd:[{ro:'Per quanto tempo rimarrai?',tr:'ne kadar kalacaksın?'},{ro:'Tre settimane',tr:'üç hafta'}]}]},
    {id:'w17',en:'quante volte?',ro:'quante volte',tr:'kaç kez?',examples:[{it:'Quante volte sei stato in Italia? — Tre volte.',tr:'İtalya\'ya kaç kez gittin? — Üç kez.',bd:[{ro:'Quante volte sei stato in Italia?',tr:'İtalya\'ya kaç kez gittin?'},{ro:'Tre volte',tr:'üç kez'}]}]},
    {id:'w18',en:'in quale / in che + sostantivo',ro:'in quale',tr:'hangi ... de/da?',examples:[{it:'In quale città preferiresti vivere? — A Bologna.',tr:'Hangi şehirde yaşamayı tercih ederdin? — Bologna\'da.',bd:[{ro:'In quale città preferiresti vivere?',tr:'hangi şehirde yaşamayı tercih ederdin?'},{ro:'A Bologna',tr:'Bologna\'da'}]}]},
    {id:'w19',en:'che tipo di?',ro:'che tipo di',tr:'ne tür? / nasıl bir?',examples:[{it:'Che tipo di musica ti piace? — Mi piace il jazz e la musica classica.',tr:'Ne tür müzik seversin? — Caz ve klasik müzik severim.',bd:[{ro:'Che tipo di musica ti piace?',tr:'ne tür müzik seversin?'},{ro:'il jazz e la musica classica',tr:'caz ve klasik müzik'}]}]},
    {id:'w20',en:'secondo te? / a tuo parere?',ro:'secondo te',tr:'sence? / senin görüşünce?',examples:[{it:'Secondo te, qual è la città più bella d\'Italia?',tr:'Sence İtalya\'nın en güzel şehri hangisi?',bd:[{ro:'Secondo te',tr:'sence'},{ro:'qual è la città più bella d\'Italia?',tr:'İtalya\'nın en güzel şehri hangisi?'}]}]}
  ],
  grammar:[
    {
      id:'g1',
      title:'Soru Kelimeleri ile Cümle Yapısı',
      title_en:'Question Word Sentence Structure',
      explanation:'İtalyanca\'da soru kelimelerinin kullanım kuralları.',
      table:[
        {pronoun:'Soru kelimesi + fiil + özne',form:'doğrudan soru',example:'Dove lavora tuo fratello?',tr:'Erkek kardeşin nerede çalışıyor?'},
        {pronoun:'Perché + soru',form:'neden sorusu',example:'Perché non sei venuto ieri?',tr:'Dün neden gelmedin?'},
        {pronoun:'Quanto + isim/sıfat',form:'miktar/derece',example:'Quante persone ci sono?',tr:'Kaç kişi var?'},
        {pronoun:'Quale di + çoğul',form:'seçim sorusu',example:'Quale di questi preferisci?',tr:'Bunlardan hangisini tercih edersin?'}
      ],
      note:'"Cosa" = "che cosa" kısaltması. İkisi de aynı. Günlük konuşmada "cosa" daha yaygın. "Che" = "cosa" gibi kullanılabilir: "Che hai detto?" (ne dedin?)'
    },
    {
      id:'g2',
      title:'Soru Ekleri: Non è vero? / Vero?',
      title_en:'Tag Questions: Right? / Isn\'t it?',
      explanation:'Onay almak veya anlaşmak için cümle sonuna eklenen soru yapıları.',
      table:[
        {pronoun:'vero? / no?',form:'değil mi? (genel)',example:'Fa caldo oggi, vero?',tr:'Bugün hava sıcak, değil mi?'},
        {pronoun:'non è vero?',form:'daha resmi değil mi?',example:'Hai capito, non è vero?',tr:'Anladın, değil mi?'},
        {pronoun:'giusto?',form:'doğru değil mi?',example:'Il treno parte alle tre, giusto?',tr:'Tren saat üçte kalkıyor, doğru mu?'},
        {pronoun:'dai?',form:'ama neden? / şaka mı?',example:'Dai! Non ci credo!',tr:'Hadi canım! İnanmıyorum!'}
      ],
      note:'"Eh?" = hm? (duyamadım) — İtalyanca\'da çok yaygın. "Capito?" = anladın mı? — Öğretmenler sık kullanır.'
    },
    {
      id:'g3',
      title:'Domande Indirette: Dolaylı Sorular',
      title_en:'Indirect Questions',
      explanation:'Başka cümlelere gömülmüş soru yapıları.',
      table:[
        {pronoun:'Sai dove...?',form:'... nerede bilir misin?',example:'Sai dove si trova la fermata?',tr:'Durağın nerede olduğunu biliyor musun?'},
        {pronoun:'Mi dici quando...?',form:'... ne zaman söyler misin?',example:'Mi dici quando arriva il treno?',tr:'Trenin ne zaman geleceğini söyler misin?'},
        {pronoun:'Non so se...',form:'... olup olmadığını bilmiyorum',example:'Non so se verrà alla festa.',tr:'Partiye gelip gelmeyeceğini bilmiyorum.'},
        {pronoun:'Mi chiedo perché...',form:'neden diye merak ediyorum',example:'Mi chiedo perché sia così triste.',tr:'Neden bu kadar üzgün olduğunu merak ediyorum.'}
      ],
      note:'Dolaylı sorularda kelime sırası düz: "Dove vai?" → "Mi chiedi dove vado" (nereye gittiğimi soruyorsun). Soru işareti YOK dolaylı sorularda.'
    }
  ],
  speaking:[
    {id:'sp1',en:'Scusa, mi puoi dire dove si trova il museo più vicino?',tr:'Özür dilerim, en yakın müzenin nerede olduğunu söyler misin?',prompt:'Yol sor'},
    {id:'sp2',en:'Perché l\'italiano ha così tante eccezioni grammaticali?!',tr:'İtalyancada neden bu kadar çok gramer istisnası var?!',prompt:'Şikâyet et (eğlenceli)'},
    {id:'sp3',en:'Secondo te, qual è il miglior modo per imparare una lingua?',tr:'Sence dil öğrenmenin en iyi yolu nedir?',prompt:'Görüş sor'},
    {id:'sp4',en:'A che ora apre questo ristorante? Ho una fame!',tr:'Bu restoran saat kaçta açılıyor? Çok acıktım!',prompt:'Merak et'},
    {id:'sp5',en:'Da quanto tempo studi l\'italiano? Parli benissimo!',tr:'Ne zamandır İtalyanca çalışıyorsun? Çok iyi konuşuyorsun!',prompt:'Iltifat et'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Soru Sorma Pratiği',
      title_en:'Question Practice',
      lines:[
        {speaker:'A',gender:'f',en:'Ciao! Sei nuovo in città, vero? Di dove sei?',tr:'Merhaba! Şehirde yenisin, değil mi? Nerelisin?',bd:[{ro:'Sei nuovo in città, vero?',tr:'şehirde yenisin, değil mi?',role:'tag_question'},{ro:'Di dove sei?',tr:'nerelisin?',role:'question'}]},
        {speaker:'B',gender:'m',en:'Sì, sono arrivato la settimana scorsa da Istanbul. Sono turco.',tr:'Evet, geçen hafta İstanbul\'dan geldim. Türküm.',bd:[{ro:'sono arrivato la settimana scorsa',tr:'geçen hafta geldim',role:'past'},{ro:'Sono turco',tr:'Türküm',role:'identity'}]},
        {speaker:'A',gender:'f',en:'Interessante! E quanto tempo rimarrai qui?',tr:'İlginç! Ve burada ne kadar kalacaksın?',bd:[{ro:'quanto tempo rimarrai qui?',tr:'burada ne kadar kalacaksın?',role:'question'}]},
        {speaker:'B',gender:'m',en:'Non lo so ancora. Dipende dal lavoro. Perché mi chiedi?',tr:'Henüz bilmiyorum. İşe bağlı. Neden soruyorsun?',bd:[{ro:'Non lo so ancora',tr:'henüz bilmiyorum',role:'uncertainty'},{ro:'Dipende dal lavoro',tr:'işe bağlı',role:'condition'},{ro:'Perché mi chiedi?',tr:'neden soruyorsun?',role:'question'}]},
        {speaker:'A',gender:'f',en:'Perché conosco bene la città e posso aiutarti! Cosa vorresti vedere?',tr:'Çünkü şehri iyi tanıyorum ve sana yardımcı olabilirim! Ne görmek istersin?',bd:[{ro:'posso aiutarti!',tr:'sana yardımcı olabilirim!',role:'offer'},{ro:'Cosa vorresti vedere?',tr:'ne görmek istersin?',role:'question'}]},
        {speaker:'B',gender:'m',en:'Meraviglioso! Innanzitutto, dove posso mangiare la pizza più buona?',tr:'Harika! Öncelikle, en iyi pizzayı nerede yiyebilirim?',bd:[{ro:'Innanzitutto',tr:'öncelikle',role:'priority'},{ro:'dove posso mangiare la pizza più buona?',tr:'en iyi pizzayı nerede yiyebilirim?',role:'question'}]}
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'Imparare a fare le domande giuste è fondamentale per comunicare in italiano. Le parole interrogative sono i mattoni delle conversazioni. Quando non capisci qualcosa, puoi chiedere: "Può ripetere più lentamente?" oppure "Come si dice in italiano?" Se hai bisogno di aiuto in strada, puoi dire: "Scusi, mi può aiutare?" o "Sai dov\'è la stazione?" Ricorda: i madrelingua italiani apprezzano molto quando gli stranieri cercano di parlare in italiano.',
      tr:'Doğru soruları sormayı öğrenmek İtalyanca iletişimde temel. Soru kelimeleri konuşmaların yapı taşları. Bir şeyi anlamadığında sorabilirsin: "Daha yavaş tekrar edebilir misiniz?" ya da "İtalyanca\'da nasıl deniyor?" Sokakta yardıma ihtiyacın olursa diyebilirsin: "Affedersiniz, yardımcı olur musunuz?" ya da "İstasyonun nerede olduğunu biliyor musun?" Unutma: İtalyan ana dil sahipleri yabancıların İtalyanca konuşmaya çalışmasını çok takdir ediyor.',
      questions:[
        {q:'Anlayamadığında ne diyebilirsin?',opts:['"Grazie!"','"Può ripetere più lentamente?"','"Buongiorno!"','"Arrivederci!"'],answer:1,tr:'"Daha yavaş tekrar edebilir misiniz?" (Può ripetere più lentamente?)'},
        {q:'Sokakta yardım istemek için ne diyebilirsin?',opts:['"Buonasera!"','"Mi piace molto!"','"Scusi, mi può aiutare?"','"Grazie mille!"'],answer:2,tr:'"Affedersiniz, yardımcı olur musunuz?" (Scusi, mi può aiutare?)'},
        {q:'İtalyanlar yabancılar hakkında ne düşünüyor?',opts:['Yabancı dil konuşmalarını tercih ediyor','İtalyanca konuşmaya çalışmayı çok takdir ediyor','Hiç takdir etmiyor','Sadece İngilizce kabul ediyor'],answer:1,tr:'İtalyanca konuşmaya çalışmayı çok takdir ediyor'}
      ]
    }
  ],
  tones:[]
};
LESSONS[37] = L37;
