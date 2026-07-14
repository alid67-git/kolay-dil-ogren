// ders1.js — Swahili Lesson 1: Greetings & Introductions
const L1 = {
  words: [
    {id:'w1', sw:'Jambo', ro:'jam-bo', tr:'Merhaba',
     tip:'En yaygın selamlama.',
     ctx:'Günlük karşılaşmalarda.',
     examples:[{
       sw:'Jambo rafiki!', ro:'jam-bo ra-fi-ki', tr:'Merhaba arkadaş!',
       bd:[{ro:'Jambo',tr:'Merhaba',role:'selamlama',note:'Temel selam.'},{ro:'rafiki',tr:'arkadaş',role:'isim',note:'Samimi hitap.'}]
     }]
    },
    {id:'w2', sw:'Habari', ro:'ha-ba-ri', tr:'Selam / Haber',
     tip:'Genel selamlama kelimesi.',
     ctx:'Her saatte kullanılır.',
     examples:[{
       sw:'Habari yako?', ro:'ha-ba-ri ya-ko', tr:'Nasılsın?',
       bd:[{ro:'Habari',tr:'Selam',role:'selamlama',note:'Haber/selam.'},{ro:'yako',tr:'senin',role:'zamir',note:'Senin halin.'}]
     }]
    },
    {id:'w3', sw:'Habari za asubuhi', ro:'ha-ba-ri za a-su-bu-hi', tr:'Günaydın',
     tip:'Sabah selamı.',
     ctx:'Sabah erken saatlerde.',
     examples:[{
       sw:'Habari za asubuhi!', ro:'ha-ba-ri za a-su-bu-hi', tr:'Günaydın!',
       bd:[{ro:'Habari za asubuhi',tr:'Günaydın',role:'selamlama',note:'Sabah selamı.'}]
     }]
    },
    {id:'w4', sw:'Habari za mchana', ro:'ha-ba-ri za mcha-na', tr:'İyi günler',
     tip:'Öğleden sonra selamı.',
     ctx:'Gündüz kullanılır.',
     examples:[{
       sw:'Habari za mchana!', ro:'ha-ba-ri za mcha-na', tr:'İyi günler!',
       bd:[{ro:'Habari za mchana',tr:'İyi günler',role:'selamlama',note:'Öğle selamı.'}]
     }]
    },
    {id:'w5', sw:'Habari za jioni', ro:'ha-ba-ri za jo-ni', tr:'İyi akşamlar',
     tip:'Akşam selamı.',
     ctx:'Akşam saatlerinde.',
     examples:[{
       sw:'Habari za jioni!', ro:'ha-ba-ri za jo-ni', tr:'İyi akşamlar!',
       bd:[{ro:'Habari za jioni',tr:'İyi akşamlar',role:'selamlama',note:'Akşam selamı.'}]
     }]
    },
    {id:'w6', sw:'Sijambo', ro:'si-jam-bo', tr:'İyiyim (cevap)',
     tip:'Habari yako? sorusuna olumlu yanıt.',
     ctx:'Selamlaşma cevabı.',
     examples:[{
       sw:'Habari yako? — Sijambo.', ro:'ha-ba-ri ya-ko si-jam-bo', tr:'Nasılsın? — İyiyim.',
       bd:[{ro:'Sijambo',tr:'İyiyim',role:'yanıt',note:'Olumlu cevap.'}]
     }]
    },
    {id:'w7', sw:'Jina langu ni...', ro:'ji-na lan-gu ni', tr:'Benim adım...',
     tip:'Kendini tanıtma kalıbı.',
     ctx:'Tanışırken.',
     examples:[{
       sw:'Jina langu ni Amina.', ro:'ji-na lan-gu ni a-mi-na', tr:'Benim adım Amina.',
       bd:[{ro:'Jina langu ni',tr:'Benim adım',role:'tanıtma',note:'İsim söyleme.'},{ro:'Amina',tr:'Amina',role:'isim',note:'Kişi adı.'}]
     }]
    },
    {id:'w8', sw:'Jina lako nani?', ro:'ji-na la-ko na-ni', tr:'Adın ne?',
     tip:'Karşıdakinin adını sorma.',
     ctx:'Tanışma sırasında.',
     examples:[{
       sw:'Jina lako nani?', ro:'ji-na la-ko na-ni', tr:'Adın ne?',
       bd:[{ro:'Jina lako',tr:'Senin adın',role:'soru',note:'İsim sorusu.'},{ro:'nani',tr:'kim',role:'soru',note:'Kim/ne.'}]
     }]
    },
    {id:'w9', sw:'Asante', ro:'a-san-te', tr:'Teşekkür ederim',
     tip:'En yaygın teşekkür.',
     ctx:'Her durumda.',
     examples:[{
       sw:'Asante sana!', ro:'a-san-te sa-na', tr:'Sana teşekkürler!',
       bd:[{ro:'Asante',tr:'Teşekkürler',role:'nezaket',note:'Teşekkür.'},{ro:'sana',tr:'sana',role:'zamir',note:'Sana.'}]
     }]
    },
    {id:'w10', sw:'Karibu', ro:'ka-ri-bu', tr:'Hoş geldin / Buyurun',
     tip:'Karşılama ve davet.',
     ctx:'Ev veya mekâna girerken.',
     examples:[{
       sw:'Karibu nyumbani!', ro:'ka-ri-bu nyum-ba-ni', tr:'Eve hoş geldin!',
       bd:[{ro:'Karibu',tr:'Hoş geldin',role:'karşılama',note:'Davet.'},{ro:'nyumbani',tr:'eve',role:'yer',note:'Ev.'}]
     }]
    },
    {id:'w11', sw:'Ndiyo', ro:'ndi-yo', tr:'Evet',
     tip:'Onay.',
     ctx:'Olumlu yanıt.',
     examples:[{
       sw:'Ndiyo, nitaenda.', ro:'ndi-yo ni-ta-en-da', tr:'Evet, gideceğim.',
       bd:[{ro:'Ndiyo',tr:'Evet',role:'onay',note:'Olumlu.'}]
     }]
    },
    {id:'w12', sw:'Hapana', ro:'ha-pa-na', tr:'Hayır',
     tip:'Ret.',
     ctx:'Olumsuz yanıt.',
     examples:[{
       sw:'Hapana, sitaenda.', ro:'ha-pa-na si-ta-en-da', tr:'Hayır, gitmeyeceğim.',
       bd:[{ro:'Hapana',tr:'Hayır',role:'ret',note:'Olumsuz.'}]
     }]
    },
    {id:'w13', sw:'Kwaheri', ro:'kwa-he-ri', tr:'Hoşça kal / Görüşürüz',
     tip:'Veda.',
     ctx:'Ayrılırken.',
     examples:[{
       sw:'Kwaheri, tutaonana!', ro:'kwa-he-ri tu-ta-o-na-na', tr:'Hoşça kal, görüşürüz!',
       bd:[{ro:'Kwaheri',tr:'Hoşça kal',role:'veda',note:'Veda.'}]
     }]
    },
    {id:'w14', sw:'Tafadhali', ro:'ta-fa-dha-li', tr:'Lütfen',
     tip:'Nezaket.',
     ctx:'Rica ederken.',
     examples:[{
       sw:'Tafadhali, saidia.', ro:'ta-fa-dha-li sa-i-di-a', tr:'Lütfen yardım et.',
       bd:[{ro:'Tafadhali',tr:'Lütfen',role:'nezaket',note:'Rica.'}]
     }]
    },
    {id:'w15', sw:'Pole', ro:'po-le', tr:'Geçmiş olsun / Üzgünüm',
     tip:'Empati ve özür.',
     ctx:'Üzücü haber veya hata için.',
     examples:[{
       sw:'Pole sana.', ro:'po-le sa-na', tr:'Üzgünüm / Geçmiş olsun.',
       bd:[{ro:'Pole',tr:'Üzgünüm',role:'empati',note:'Acıma/özür.'}]
     }]
    }
  ],
  grammar: [
    {id:'g1', title:'Svahilice Selamlama', title_en:'Greetings in Swahili',
     explanation:'Svahilicede günün saatine göre habari za ... kalıbı kullanılır. Habari yako? sorusuna Sijambo veya Nzuri ile yanıt verilir.',
     table:[
       {pronoun:'Sabah', form:'Habari za asubuhi', example:'Habari za asubuhi!', tr:'Günaydın!'},
       {pronoun:'Öğle', form:'Habari za mchana', example:'Habari za mchana!', tr:'İyi günler!'},
       {pronoun:'Akşam', form:'Habari za jioni', example:'Habari za jioni!', tr:'İyi akşamlar!'},
       {pronoun:'Genel', form:'Jambo / Habari', example:'Jambo! Habari yako?', tr:'Merhaba! Nasılsın?'}
     ],
     note:'Jambo daha gayri resmi, Habari daha yaygındır. Cevap: Sijambo (iyiyim) veya Nzuri (güzel/iyi).'
    },
    {id:'g2', title:'Kendini Tanıtma — Jina langu ni', title_en:'Self-Introduction — My Name Is',
     explanation:'Svahilicede kendini tanıtmak için "Jina langu ni ..." kalıbı kullanılır. Jina = isim, langu = benim, ni = (to be). Adı sormak için: "Jina lako ni nani?" veya kısa olarak "Unaitwa nani?". Tanışma ifadesi: "Nafurahi kukutana nawe" = Tanıştığıma memnun oldum.',
     table:[
       {pronoun:'Benim adım', form:'Jina langu ni ...', example:'Jina langu ni Juma.', tr:'Benim adım Juma.'},
       {pronoun:'Adın ne?', form:'Jina lako ni nani?', example:'Jina lako ni nani?', tr:'Adın ne?'},
       {pronoun:'Kısa soru', form:'Unaitwa nani?', example:'Unaitwa nani?', tr:'Sen ne diye anılırsın? / Adın ne?'},
       {pronoun:'Nereden', form:'Ninatoka ...', example:'Ninatoka Uturuki.', tr:'Ben Türkiye\'den geliyorum.'},
       {pronoun:'Tanışma', form:'Nafurahi kukutana nawe.', example:'Nafurahi kukutana nawe!', tr:'Tanıştığıma memnun oldum!'},
       {pronoun:'Veda', form:'Kwaheri / Tutaonana', example:'Kwaheri!', tr:'Hoşça kal! / Görüşürüz!'}
     ],
     note:'"Jina langu ni" = isim belirtme. Fiil (ni) değişmez — Svahilicede bu yapı basittir. Lako = senin, langu = benim, lake = onun.'},
    {id:'g3', title:'Svahilice Temel Cümle Yapısı', title_en:'Basic Swahili Sentence Structure',
     explanation:'Svahilice, Bantu dili ailesinden gelir ve fiil öneki sistemi kullanır. Özne öneki fiile eklenir: Ni- (ben), U- (sen), A- (o), Tu- (biz), M- (siz), Wa- (onlar). "Ninasema Kiswahili" = Svahilice konuşuyorum. Olumsuz için "si-" öneki kullanılır: Sisemi (konuşmuyorum). Bu sistem başlangıçta karmaşık görünse de kalıplar sabittir.',
     table:[
       {pronoun:'Mimi (ben)', form:'Ni- + fiil', example:'Ninajua Kiswahili.', tr:'Svahilice biliyorum.'},
       {pronoun:'Wewe (sen)', form:'U- + fiil', example:'Unasema Kiswahili?', tr:'Svahilice konuşuyor musun?'},
       {pronoun:'Yeye (o)', form:'A- + fiil', example:'Anasema Kiswahili.', tr:'O Svahilice konuşuyor.'},
       {pronoun:'Sisi (biz)', form:'Tu- + fiil', example:'Tunajua Kiswahili.', tr:'Svahilice biliyoruz.'},
       {pronoun:'Olumsuz (ben)', form:'Si- + fiil', example:'Sijui Kiingereza.', tr:'İngilizce bilmiyorum.'},
       {pronoun:'Şimdiki zaman', form:'Ni + na + fiil', example:'Ninasoma. / Ninafurahi.', tr:'Okuyorum. / Mutluyum.'}
     ],
     note:'"Na-" eki şimdiki zamanı gösterir: ni-na-soma = ben-şimdi-oku-yorum. Olumsuz: si-ja-soma (henüz okumadım) veya si-somi (okumuyorum).'}
  ],
  speaking: [
    {id:'sp1', sw:'Jambo!', tr:'Merhaba!', prompt:'Birisini selamla'},
    {id:'sp2', sw:'Habari za asubuhi!', tr:'Günaydın!', prompt:'Sabah selamı ver'},
    {id:'sp3', sw:'Jina langu ni Ali.', tr:'Benim adım Ali.', prompt:'Kendini tanıt'},
    {id:'sp4', sw:'Asante sana!', tr:'Teşekkür ederim!', prompt:'Teşekkür et'},
    {id:'sp5', sw:'Kwaheri!', tr:'Hoşça kal!', prompt:'Vedalaş'}
  ],
  dialogues: [
    {id:'d1', title:'Tanışma', title_tr:'Tanışma Diyaloğu',
     lines:[
       {speaker:'A', gender:'m', sw:'Jambo!', tr:'Merhaba!',
        gramNote:'Selamlama.',
        bd:[{ro:'Jambo',tr:'Merhaba',role:'selamlama',note:'Selam.'}]},
       {speaker:'B', gender:'f', sw:'Jambo! Habari yako?', tr:'Merhaba! Nasılsın?',
        gramNote:'Selam + hal sorusu.',
        bd:[{ro:'Habari yako',tr:'Nasılsın',role:'soru',note:'Hal sorusu.'}]},
       {speaker:'A', gender:'m', sw:'Sijambo. Jina langu ni Juma.', tr:'İyiyim. Adım Juma.',
        gramNote:'Cevap + tanıtma.',
        bd:[{ro:'Jina langu ni Juma',tr:'Adım Juma',role:'tanıtma',note:'İsim.'}]},
       {speaker:'B', gender:'f', sw:'Nafurahi kukutana nawe. Jina langu ni Amina.', tr:'Tanıştığıma memnun oldum. Adım Amina.',
        gramNote:'Memnuniyet + isim.',
        bd:[{ro:'Nafurahi kukutana nawe',tr:'Tanıştığıma memnun oldum',role:'nezaket',note:'Tanışma.'}]},
       {speaker:'A', gender:'m', sw:'Kwaheri, Amina!', tr:'Hoşça kal Amina!',
        gramNote:'Veda.',
        bd:[{ro:'Kwaheri',tr:'Hoşça kal',role:'veda',note:'Veda.'}]}
     ]
    }
  ],
  listening: [
    {id:'li1', audio:'', transcript:'Jambo! Jina langu ni Amina. Nafurahi kukutana nawe.',
     tr:'Merhaba! Benim adım Amina. Tanıştığıma memnun oldum.',
     questions:[
       {q:'Konuşanın adı ne?', opts:["Amina","Juma","Ali","Fatuma"], answer:0, tr:'Konuşanın adı ne?'},
       {q:'Hangi selamlama kullanıldı?', opts:["Jambo","Kwaheri","Asante","Hapana"], answer:0, tr:'Hangi selamlama?'}
     ]
    }
  ]
};
LESSONS[1] = L1;
