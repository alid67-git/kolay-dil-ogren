// ders13.js — Hausa Lesson 13: People & Family
const L13 = {
  words: [
    {id:'w1', ha:'Mutum', ro:'mu-tum', tr:'Kişi / Adam / İnsan',
     tip:'Genel insan ve kişi kelimesi.',
     ctx:'Birini tanımlarken veya hakkında konuşurken.',
     examples:[{
       ha:'Mutum mai kyau ne.', ro:'mu-tum mai kya-u ne', tr:'İyi bir insan.',
       bd:[{ro:'Mutum',tr:'Kişi/Adam',role:'isim',note:'İnsan.'},{ro:'mai kyau ne',tr:'iyi/güzel',role:'sıfat',note:'Nitelik.'}]
     }]
    },
    {id:'w2', ha:'Mace', ro:'ma-ce', tr:'Kadın',
     tip:'"Mutum" erkek, "mace" kadın.',
     ctx:'Kadını tanımlamak için.',
     examples:[{
       ha:'Mace mai hankali ne ita.', ro:'ma-ce mai han-ka-li ne i-ta', tr:'O akıllı bir kadın.',
       bd:[{ro:'Mace mai hankali',tr:'Akıllı kadın',role:'isim+sıfat',note:'Kişi tanımı.'},{ro:'ne ita',tr:'o',role:'zamir',note:'3. tekil kadın.'}]
     }]
    },
    {id:'w3', ha:'Yaro', ro:'ya-ro', tr:'Oğlan / Çocuk (erkek)',
     tip:'Erkek çocuk ve genç erkek.',
     ctx:'Erkek çocuktan bahsederken.',
     examples:[{
       ha:'Yaro dan shekara goma.', ro:'ya-ro dan she-ka-ra go-ma', tr:'On yaşında bir oğlan.',
       bd:[{ro:'Yaro',tr:'Oğlan',role:'isim',note:'Erkek çocuk.'},{ro:'dan shekara goma',tr:'on yaşında',role:'yaş',note:'Yaş ifadesi.'}]
     }]
    },
    {id:'w4', ha:'Yarinya', ro:'ya-rin-ya', tr:'Kız / Kız çocuk',
     tip:'Kız çocuk ve genç kadın.',
     ctx:'Kız çocuktan bahsederken.',
     examples:[{
       ha:'Yarinya mai hazaka.', ro:'ya-rin-ya mai ha-za-ka', tr:'Zeki bir kız.',
       bd:[{ro:'Yarinya',tr:'Kız çocuk',role:'isim',note:'Dişi çocuk.'},{ro:'mai hazaka',tr:'zeki',role:'sıfat',note:'Zeka.'}]
     }]
    },
    {id:'w5', ha:'Uba', ro:'u-ba', tr:'Baba',
     tip:'Aile reisi ve baba.',
     ctx:'Aile konuşmalarında.',
     examples:[{
       ha:'Ubana ya tafi aiki.', ro:'u-ba-na ya ta-fi ai-ki', tr:'Babam işe gitti.',
       bd:[{ro:'Ubana',tr:'Babam',role:'isim+iyelik',note:'Benim babam.'},{ro:'ya tafi aiki',tr:'işe gitti',role:'fiil',note:'Gitme.'}]
     }]
    },
    {id:'w6', ha:'Uwa', ro:'u-wa', tr:'Anne',
     tip:'Anne ve anne figürü.',
     ctx:'Aile konuşmalarında.',
     examples:[{
       ha:'Uwata tana dafa abinci.', ro:'u-wa-ta ta-na da-fa a-bin-ci', tr:'Annem yemek pişiriyor.',
       bd:[{ro:'Uwata',tr:'Annem',role:'isim+iyelik',note:'Benim annem.'},{ro:'tana dafa abinci',tr:'yemek pişiriyor',role:'fiil',note:'Pişirme.'}]
     }]
    },
    {id:'w7', ha:'Ɗa', ro:'da', tr:'Oğul',
     tip:'Erkek çocuk (ebeveyn perspektifinden).',
     ctx:'Oğuldan bahsederken.',
     examples:[{
       ha:'Ɗana ya zo gida.', ro:'da-na ya zo gi-da', tr:'Oğlum eve geldi.',
       bd:[{ro:'Ɗana',tr:'Oğlum',role:'isim+iyelik',note:'Benim oğlum.'},{ro:'ya zo gida',tr:'eve geldi',role:'fiil',note:'Gelme.'}]
     }]
    },
    {id:"w8", ha:"'Ya", ro:'ya', tr:'Kız (evlat)',
     tip:'Kız çocuk (ebeveyn perspektifinden).',
     ctx:'Kız çocuktan bahsederken.',
     examples:[{
       ha:"'Yata tana makaranta.", ro:'ya-ta ta-na ma-ka-ran-ta', tr:'Kızım okulda.',
       bd:[{ro:"'Yata",tr:'Kızım',role:'isim+iyelik',note:'Benim kızım.'},{ro:'tana makaranta',tr:'okulda',role:'yer',note:'Okul.'}]
     }]
    },
    {id:"w9", ha:"Ɗan'uwa", ro:"dan-u-wa", tr:'Erkek kardeş',
     tip:'"Ɗan" çocuk + "uwa" anne = anne çocuğu = kardeş.',
     ctx:'Kardeş ilişkisi.',
     examples:[{
       ha:"Ɗan'uwana ya zo yau.", ro:"dan-u-wa-na ya zo yau", tr:'Erkek kardeşim bugün geldi.',
       bd:[{ro:"Ɗan'uwana",tr:'Erkek kardeşim',role:'isim+iyelik',note:'Benim erkek kardeşim.'},{ro:'ya zo yau',tr:'bugün geldi',role:'fiil',note:'Geliş.'}]
     }]
    },
    {id:"w10", ha:"'Yar'uwa", ro:"yar-u-wa", tr:'Kız kardeş',
     tip:'"Yar" kız + "uwa" anne = kız kardeş.',
     ctx:'Kız kardeş ilişkisi.',
     examples:[{
       ha:"'Yar'uwata tana aiki a banki.", ro:"yar-u-wa-ta ta-na ai-ki a ban-ki", tr:'Kız kardeşim bankada çalışıyor.',
       bd:[{ro:"'Yar'uwata",tr:'Kız kardeşim',role:'isim+iyelik',note:'Benim kız kardeşim.'},{ro:'tana aiki a banki',tr:'bankada çalışıyor',role:'fiil+yer',note:'Meslek.'}]
     }]
    },
    {id:'w11', ha:'Kaka', ro:'ka-ka', tr:'Büyükanne / Büyükbaba',
     tip:'Her iki büyükanne ve büyükbaba için kullanılır.',
     ctx:'Büyüklerden bahsederken.',
     examples:[{
       ha:'Kakana tana gida.', ro:'ka-ka-na ta-na gi-da', tr:'Büyükannem evde.',
       bd:[{ro:'Kakana',tr:'Büyükannem',role:'isim+iyelik',note:'Benim büyükannem.'},{ro:'tana gida',tr:'evde',role:'yer',note:'Konum.'}]
     }]
    },
    {id:'w12', ha:'Jikan', ro:'ji-kan', tr:'Torun',
     tip:'Hem erkek hem kız torun için kullanılır.',
     ctx:'Torundan bahsederken.',
     examples:[{
       ha:'Jikana ya yi wasa.', ro:'ji-ka-na ya yi wa-sa', tr:'Torunum oynuyor.',
       bd:[{ro:'Jikana',tr:'Torunum',role:'isim+iyelik',note:'Benim torunum.'},{ro:'ya yi wasa',tr:'oynuyor',role:'fiil',note:'Oyun.'}]
     }]
    },
    {id:'w13', ha:'Aboki', ro:'a-bo-ki', tr:'Arkadaş (erkek)',
     tip:'Erkek arkadaş. Kadın arkadaş "Abokin kirki".',
     ctx:'Arkadaşlık ilişkisi.',
     examples:[{
       ha:'Abokinsa ya taimake shi.', ro:'a-bo-kin-sa ya tai-ma-ke shi', tr:'Arkadaşı ona yardım etti.',
       bd:[{ro:'Abokinsa',tr:'Arkadaşı',role:'isim+iyelik',note:'Onun arkadaşı.'},{ro:'ya taimake shi',tr:'yardım etti',role:'fiil',note:'Yardım etme.'}]
     }]
    },
    {id:'w14', ha:'Abokai', ro:'a-bo-kai', tr:'Arkadaşlar (çoğul)',
     tip:'"Aboki"nin çoğulu.',
     ctx:'Arkadaş grubu.',
     examples:[{
       ha:'Abokainka su zo.', ro:'a-bo-kai-na su zo', tr:'Arkadaşların geldi.',
       bd:[{ro:'Abokainka',tr:'Arkadaşların',role:'isim+iyelik',note:'Senin arkadaşların.'},{ro:'su zo',tr:'geldi',role:'fiil',note:'Çoğul geliş.'}]
     }]
    },
    {id:'w15', ha:'Miji', ro:'mi-ji', tr:'Koca / Erkek eş',
     tip:'Evli çiftte erkeğin unvanı.',
     ctx:'Evlilik ilişkisi.',
     examples:[{
       ha:'Mijinta ya tafi aiki.', ro:'mi-jin-ta ya ta-fi ai-ki', tr:'Kocası işe gitti.',
       bd:[{ro:'Mijinta',tr:'Kocası',role:'isim+iyelik',note:'Onun kocası.'},{ro:'ya tafi aiki',tr:'işe gitti',role:'fiil',note:'İşe gitme.'}]
     }]
    },
    {id:'w16', ha:'Mata', ro:'ma-ta', tr:'Kadın eş / Karı',
     tip:'Evli çiftte kadının unvanı.',
     ctx:'Evlilik ilişkisi.',
     examples:[{
       ha:'Matarsa tana gida.', ro:'ma-tar-sa ta-na gi-da', tr:'Karısı evde.',
       bd:[{ro:'Matarsa',tr:'Karısı',role:'isim+iyelik',note:'Onun karısı.'},{ro:'tana gida',tr:'evde',role:'yer',note:'Konum.'}]
     }]
    },
    {id:'w17', ha:'Mai gida', ro:'mai gi-da', tr:'Ev sahibi / Aile reisi',
     tip:'"Mai gida" = evin sahibi. Aile reisi anlamında kullanılır.',
     ctx:'Aile yapısı ve hiyerarşi.',
     examples:[{
       ha:'Mai gida ya yanke hukunci.', ro:'mai gi-da ya yan-ke hu-kun-ci', tr:'Aile reisi karar verdi.',
       bd:[{ro:'Mai gida',tr:'Aile reisi',role:'isim',note:'Ev sahibi.'},{ro:'ya yanke hukunci',tr:'karar verdi',role:'fiil',note:'Karar.'}]
     }]
    },
    {id:'w18', ha:'Bako', ro:'ba-ko', tr:'Misafir / Yabancı',
     tip:'"Bako" misafir ve yabancı anlamına gelir. Misafirperverlik önemlidir.',
     ctx:'Misafir ağırlama.',
     examples:[{
       ha:'Muna da bako yau.', ro:'mu-na da ba-ko yau', tr:'Bugün misafirimiz var.',
       bd:[{ro:'Muna da bako',tr:'Misafirimiz var',role:'bilgi',note:'Misafir bildirimi.'},{ro:'yau',tr:'bugün',role:'zaman',note:'Zaman.'}]
     }]
    },
    {id:'w19', ha:'Maƙwabci', ro:'ma-kwa-bci', tr:'Komşu',
     tip:'Yakın komşu ve çevre ilişkisi.',
     ctx:'Komşuluk ilişkileri.',
     examples:[{
       ha:'Maƙwabcinmu mutum mai kyau ne.', ro:'ma-kwa-bcin-mu mu-tum mai kya-u ne', tr:'Komşumuz iyi bir insan.',
       bd:[{ro:'Maƙwabcinmu',tr:'Komşumuz',role:'isim+iyelik',note:'Bizim komşumuz.'},{ro:'mutum mai kyau ne',tr:'iyi insan',role:'tanım',note:'Olumlu nitelik.'}]
     }]
    },
    {id:'w20', ha:'Sarki', ro:'sar-ki', tr:'Kral / Geleneksel Lider',
     tip:"Hausa geleneksel liderlik sistemi. Emiri veya yerel hükümdar.",
     ctx:'Geleneksel yönetim ve saygı ifadesi.',
     examples:[{
       ha:'Sarkin gari ya zo.', ro:'sar-kin ga-ri ya zo', tr:'Şehrin kralı geldi.',
       bd:[{ro:'Sarkin gari',tr:'Şehrin kralı',role:'isim',note:'Geleneksel lider.'},{ro:'ya zo',tr:'geldi',role:'fiil',note:'Geliş.'}]
     }]
    },
    {id:'w21', ha:'Talaka', ro:'ta-la-ka', tr:'Fakir / Sıradan insan',
     tip:'"Talaka" hem fakir hem de sıradan vatandaş anlamına gelir.',
     ctx:'Sosyal statü ifadesi.',
     examples:[{
       ha:'Talaka ne, amma mutum nagari.', ro:'ta-la-ka ne am-ma mu-tum na-ga-ri', tr:'Fakir ama iyi bir insan.',
       bd:[{ro:'Talaka ne',tr:'Fakir',role:'durum',note:'Ekonomik durum.'},{ro:'amma mutum nagari',tr:'ama iyi insan',role:'karşıt',note:'Karşıt nitelik.'}]
     }]
    },
    {id:'w22', ha:'Attajiri', ro:'at-ta-ji-ri', tr:'Zengin kişi',
     tip:'"Attajiri" serveti olan kişi.',
     ctx:'Ekonomik statü ifadesi.',
     examples:[{
       ha:'Ya zama attajiri.', ro:'ya za-ma at-ta-ji-ri', tr:'Zengin oldu.',
       bd:[{ro:'Ya zama',tr:'Oldu',role:'fiil',note:'Dönüşüm.'},{ro:'attajiri',tr:'zengin',role:'durum',note:'Ekonomik statü.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:"Hausa'da İyelik Ekleri", title_en:'Possessive Suffixes in Hausa',
     explanation:"Hausa'da aile kelimelerine iyelik ekleri eklenerek 'benim + aile üyesi' ifade edilir.",
     table:[
       {pronoun:'Ben (benim)', form:'-na / -ta', example:'Ubana (babam), Uwata (annem)', tr:'Babam / Annem'},
       {pronoun:'Sen (senin)', form:'-nka / -nki (erkek/kadın)', example:'Ubanka (baban)', tr:'Baban'},
       {pronoun:'O (onun)', form:'-nsa / -nta', example:'Ubansu (onun babası)', tr:'Onun babası'},
       {pronoun:'Biz (bizim)', form:'-nmu', example:'Ubanmu (babamız)', tr:'Babamız'},
     ],
     note:"İyelik ekleri cinsiyete ve kişiye göre değişir. '-na' benim, '-nka' erkek için senin, '-nki' kadın için senin."
    },
    {id:'g2', title:'Aile Üyeleri ile Cümle Kurma', title_en:'Sentences with Family Members',
     explanation:"Aile üyelerini anlatan cümleler 'isim + iyelik eki + fiil' şeklinde kurulur.",
     table:[
       {pronoun:'Annem...', form:"Uwata tana...", example:'Uwata tana gida.', tr:'Annem evde.'},
       {pronoun:'Babam...', form:'Ubana yana...', example:'Ubana yana aiki.', tr:'Babam çalışıyor.'},
       {pronoun:'Kardeşim...', form:"Ɗan'uwana ya...", example:"Ɗan'uwana ya zo.", tr:'Erkek kardeşim geldi.'},
       {pronoun:'Arkadaşım...', form:'Abokinsa ya...', example:'Abokinsa ya taimake.', tr:'Arkadaşı yardım etti.'},
     ],
     note:"'Yana' erkek için 'şimdiki zaman', 'tana' kadın için. 'Ya' erkek geçmiş, 'ta' kadın geçmiş zaman."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Ubana likita ne.', tr:'Babam doktor.', prompt:'Babanın mesleğini söyle'},
    {id:'sp2', ha:"Ɗan'uwana ya tafi Kano.", tr:"Erkek kardeşim Kano'ya gitti.", prompt:'Kardeşin hakkında söyle'},
    {id:'sp3', ha:'Muna da bako yau.', tr:'Bugün misafirimiz var.', prompt:'Misafir olduğunu bildir'},
    {id:'sp4', ha:'Abokainka su zo?', tr:'Arkadaşların geldi mi?', prompt:'Arkadaşlar hakkında sor'},
    {id:'sp5', ha:'Kakana tana zauna a ƙauye.', tr:'Büyükannem köyde yaşıyor.', prompt:'Büyükannen hakkında söyle'},
    {id:'sp6', ha:"'Yar'uwata tana makaranta.", tr:'Kız kardeşim okulda.', prompt:'Kız kardeşin hakkında söyle'},
  ],
  dialogues: [
    {id:'d1', title:'Iyali — Aile Konuşması', title_tr:'Aile Konuşma Diyaloğu',
     lines:[
       {speaker:'A', gender:'m', ha:'Musa, iyalinka yaya suke?', tr:'Musa, ailen nasıl?',
        gramNote:'Aile hal sorusu.',
        bd:[{ro:'iyalinka',tr:'ailen',role:'isim+iyelik',note:'Senin ailen.'},{ro:'yaya suke',tr:'nasıl',role:'soru',note:'Hal sorusu.'}]},
       {speaker:'B', gender:'m', ha:'Lafiya, nagode. Ubana da uwata suna nan. Yayan gida uku ne.', tr:'İyiler teşekkürler. Annem ve babam burada. Evde üç kardeş var.',
        gramNote:'Aile bilgisi.',
        bd:[{ro:'Ubana da uwata',tr:'Babam ve annem',role:'aile',note:'Ebeveynler.'},{ro:'Yayan gida uku ne',tr:'Evde üç kardeş',role:'bilgi',note:'Kardeş sayısı.'}]},
       {speaker:'A', gender:'m', ha:'Ni kuma ina da ɗan'uwa ɗaya da 'yar'uwa biyu.', tr:'Benim de bir erkek kardeşim ve iki kız kardeşim var.',
        gramNote:'Kardeşleri anlatma.',
        bd:[{ro:"Ina da ɗan'uwa ɗaya",tr:'Bir erkek kardeşim var',role:'bilgi',note:'Erkek kardeş.'},{ro:"da 'yar'uwa biyu",tr:'ve iki kız kardeş',role:'bilgi',note:'Kız kardeş sayısı.'}]},
       {speaker:'B', gender:'m', ha:'Nagode. Abokainka yaya suke?', tr:'Teşekkürler. Arkadaşların nasıl?',
        gramNote:'Arkadaş hal sorusu.',
        bd:[{ro:'Abokainka',tr:'Arkadaşların',role:'isim+iyelik',note:'Senin arkadaşların.'},{ro:'yaya suke',tr:'nasıl',role:'soru',note:'Çoğul hal sorusu.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:"Sunana Ibrahim. Ina da uba da uwa da ɗan'uwa biyu. Uwata tana gida yau. Ubana ya tafi aiki.",
     tr:"Adım İbrahim. Bir babam, bir annem ve iki erkek kardeşim var. Annem bugün evde. Babam işe gitti.",
     questions:[
       {q:'Kaç erkek kardeşi var?', opts:['İki','Bir','Üç','Yok'], answer:0, tr:'Kaç erkek kardeşi var?'},
       {q:'Babası nerede?', opts:['İşte','Evde','Okulda','Hastanede'], answer:0, tr:'Babası nerede?'},
     ]
    },
  ],
};
LESSONS[13] = L13;
