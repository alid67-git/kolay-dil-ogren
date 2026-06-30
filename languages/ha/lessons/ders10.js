// ders10.js — Hausa Lesson 10: Daily Conversation
const L10 = {
  words: [
    {id:'w1', ha:'Ina so', ro:'i-na so', tr:'İstiyorum / Seviyorum / Beğeniyorum',
     tip:'"Ina so" hem sevgi hem de istek bildirir.',
     ctx:'İstek ve beğeni ifadesi.',
     examples:[{
       ha:'Ina so Hausa harshe.', ro:'i-na so hau-sa har-she', tr:"Hausa dilini seviyorum.",
       bd:[{ro:'Ina so',tr:'Seviyorum/İstiyorum',role:'fiil',note:'Sevgi ve istek.'},{ro:'Hausa harshe',tr:'Hausa dili',role:'nesne',note:'Dil adı.'}]
     }]
    },
    {id:'w2', ha:'Ban so ba', ro:'ban so ba', tr:'İstemiyorum / Sevmiyorum',
     tip:'"Ba...ba" olumsuz kalıbı. "Ban so ba" = istemiyorum.',
     ctx:'Ret ve olumsuz tercih.',
     examples:[{
       ha:'Ban so yin haka ba.', ro:'ban so yin ha-ka ba', tr:'Bunu yapmak istemiyorum.',
       bd:[{ro:'Ban so',tr:'İstemiyorum',role:'olumsuz',note:'Ret.'},{ro:'yin haka',tr:'bunu yapmak',role:'fiil',note:'Eylem.'},{ro:'ba',tr:'(olumsuz sonu)',role:'olumsuz ek',note:'Ba...ba kalıbı.'}]
     }]
    },
    {id:'w3', ha:'Ina farin ciki', ro:'i-na fa-rin ci-ki', tr:'Mutluyum / Sevinçliyim',
     tip:'"Farin ciki" = beyaz kalp = mutluluk.',
     ctx:'Mutluluğu ifade ederken.',
     examples:[{
       ha:'Ina farin ciki da saduwa da ku.', ro:'i-na fa-rin ci-ki da sa-du-wa da ku', tr:'Sizinle tanışmaktan mutluyum.',
       bd:[{ro:'Ina farin ciki',tr:'Mutluyum',role:'duygu',note:'Sevinç.'},{ro:'da saduwa da ku',tr:'sizinle tanışmaktan',role:'neden',note:'Mutluluk sebebi.'}]
     }]
    },
    {id:'w4', ha:'Ina bakin ciki', ro:'i-na ba-kin ci-ki', tr:'Üzgünüm / Mutsuzum',
     tip:'"Bakin ciki" = siyah kalp = üzüntü.',
     ctx:'Üzüntü ve keder ifadesi.',
     examples:[{
       ha:'Ina bakin ciki da mutuwarsa.', ro:'i-na ba-kin ci-ki da mu-tu-war-sa', tr:'Onun ölümüne üzgünüm.',
       bd:[{ro:'Ina bakin ciki',tr:'Üzgünüm',role:'duygu',note:'Keder.'},{ro:'da mutuwarsa',tr:'onun ölümüne',role:'neden',note:'Üzüntü sebebi.'}]
     }]
    },
    {id:'w5', ha:'Na gaji', ro:'na ga-ji', tr:'Yoruldum',
     tip:'Fiziksel veya zihinsel yorgunluk.',
     ctx:'Yorgunluk bildirimi.',
     examples:[{
       ha:'Na gaji, ina so bacci.', ro:'na ga-ji i-na so bac-ci', tr:'Yoruldum, uyumak istiyorum.',
       bd:[{ro:'Na gaji',tr:'Yoruldum',role:'durum',note:'Yorgunluk.'},{ro:'ina so bacci',tr:'uyumak istiyorum',role:'istek',note:'Uyku ihtiyacı.'}]
     }]
    },
    {id:'w6', ha:'Ina da yunwa', ro:'i-na da yun-wa', tr:'Açım',
     tip:'"Yunwa" = açlık. "Ina da yunwa" = açlığım var.',
     ctx:'Yemek yeme isteği bildirimi.',
     examples:[{
       ha:'Ina da yunwa, ina so ci abinci.', ro:'i-na da yun-wa i-na so ci a-bin-ci', tr:'Açım, yemek yemek istiyorum.',
       bd:[{ro:'Ina da yunwa',tr:'Açım',role:'durum',note:'Açlık.'},{ro:'ina so ci abinci',tr:'yemek yemek istiyorum',role:'istek',note:'Yemek ihtiyacı.'}]
     }]
    },
    {id:'w7', ha:'Ina da ƙishi', ro:'i-na da ki-shi', tr:'Susadım / Susamıştım',
     tip:'"Ƙishi" = susuzluk.',
     ctx:'Su veya içecek ihtiyacı.',
     examples:[{
       ha:'Ina da ƙishi, kawo ruwa.', ro:'i-na da ki-shi ka-wo ru-wa', tr:'Susamıştım, su getir.',
       bd:[{ro:'Ina da ƙishi',tr:'Susamıştım',role:'durum',note:'Susuzluk.'},{ro:'kawo ruwa',tr:'su getir',role:'emir',note:'İstek.'}]
     }]
    },
    {id:'w8', ha:'Na ji', ro:'na ji', tr:'Anladım / Duydum',
     tip:'"Ji" = duymak ve anlamak.',
     ctx:'Anlama ve duyma bildirimi.',
     examples:[{
       ha:'Na ji, nagode.', ro:'na ji na-go-de', tr:'Anladım, teşekkürler.',
       bd:[{ro:'Na ji',tr:'Anladım',role:'onay',note:'Anlama.'},{ro:'nagode',tr:'teşekkürler',role:'nezaket',note:'Teşekkür.'}]
     }]
    },
    {id:'w9', ha:'Ban ji ba', ro:'ban ji ba', tr:'Anlamadım / Duymadım',
     tip:'Anlama veya duyma sorunu.',
     ctx:'İletişim sorunu bildirimi.',
     examples:[{
       ha:'Ban ji ba, sake fada.', ro:'ban ji ba sa-ke fa-da', tr:'Anlamadım, tekrar söyle.',
       bd:[{ro:'Ban ji ba',tr:'Anlamadım',role:'ret',note:'Anlama problemi.'},{ro:'sake fada',tr:'tekrar söyle',role:'istek',note:'Tekrar etme talebi.'}]
     }]
    },
    {id:'w10', ha:'Yi hankali', ro:'yi han-ka-li', tr:'Dikkat et / Sakın',
     tip:'Uyarı ve dikkat çağrısı.',
     ctx:'Tehlikeli durum uyarısı.',
     examples:[{
       ha:'Yi hankali! Babur ya zo.', ro:'yi han-ka-li ba-bur ya zo', tr:'Dikkat et! Motosiklet geliyor.',
       bd:[{ro:'Yi hankali',tr:'Dikkat et',role:'uyarı',note:'Tehlike uyarısı.'},{ro:'Babur ya zo',tr:'Motosiklet geliyor',role:'neden',note:'Tehlike nedeni.'}]
     }]
    },
    {id:'w11', ha:'Abin mamaki!', ro:'a-bin ma-ma-ki', tr:'İnanılmaz! / Harika!',
     tip:'Şaşkınlık ve hayranlık ifadesi.',
     ctx:'Olumlu şaşkınlık.',
     examples:[{
       ha:'Abin mamaki! Kyau sosai!', ro:'a-bin ma-ma-ki kya-u so-sai', tr:'İnanılmaz! Çok güzel!',
       bd:[{ro:'Abin mamaki',tr:'İnanılmaz/Harika',role:'duygu',note:'Şaşkınlık.'},{ro:'Kyau sosai',tr:'Çok güzel',role:'tamamlayıcı',note:'Beğeni.'}]
     }]
    },
    {id:'w12', ha:'Lallai ne', ro:'lal-lai ne', tr:'Tabii ki / Elbette / Mutlaka',
     tip:'Kesinlik ve onay ifadesi.',
     ctx:'Kesin onay verirken.',
     examples:[{
       ha:'Lallai ne zan zo.', ro:'lal-lai ne zan zo', tr:'Elbette geleceğim.',
       bd:[{ro:'Lallai ne',tr:'Elbette',role:'onay',note:'Kesin onay.'},{ro:'zan zo',tr:'geleceğim',role:'fiil',note:'Gelecek zaman.'}]
     }]
    },
    {id:'w13', ha:'Ko da yake', ro:'ko da ya-ke', tr:'Her ne kadar... olsa da / Olsa bile',
     tip:'Koşul ve karşıtlık bağlacı.',
     ctx:'Koşullu cümleler.',
     examples:[{
       ha:'Ko da yake ya gaji, ya yi aiki.', ro:'ko da ya-ke ya ga-ji ya yi ai-ki', tr:'Her ne kadar yorgun olsa da çalıştı.',
       bd:[{ro:'Ko da yake',tr:'Her ne kadar... olsa da',role:'bağlaç',note:'Karşıtlık.'},{ro:'ya gaji ya yi aiki',tr:'yorgunsa da çalıştı',role:'cümle',note:'Karşıt durum.'}]
     }]
    },
    {id:'w14', ha:'Sai haka', ro:'sai ha-ka', tr:'Böyle işte / Ne yapalım / Olur',
     tip:'Kabullenme ve boyun eğme ifadesi.',
     ctx:'Değiştirilemez durumları kabullenmek.',
     examples:[{
       ha:'Sai haka ne, babu magani.', ro:'sai ha-ka ne ba-bu ma-ga-ni', tr:'Böyle işte, çare yok.',
       bd:[{ro:'Sai haka ne',tr:'Böyle işte',role:'kabullenme',note:'Kader kabulü.'},{ro:'babu magani',tr:'çare yok',role:'tamamlayıcı',note:'Çaresizlik.'}]
     }]
    },
    {id:'w15', ha:'Taimaka', ro:'tai-ma-ka', tr:'Yardım et',
     tip:'Yardım istemek için.',
     ctx:'Yardım çağrısı.',
     examples:[{
       ha:'Taimaka mini da wannan.', ro:'tai-ma-ka mi-ni da wan-nan', tr:'Bununla bana yardım et.',
       bd:[{ro:'Taimaka mini',tr:'Bana yardım et',role:'istek',note:'Yardım talebi.'},{ro:'da wannan',tr:'bununla',role:'araç',note:'Yardım konusu.'}]
     }]
    },
    {id:'w16', ha:'Zan yi ƙoƙari', ro:'zan yi ko-ka-ri', tr:'Deneyeceğim / Çalışacağım',
     tip:'"Ƙoƙari" = çaba/gayret.',
     ctx:'Söz verme ve niyet bildirme.',
     examples:[{
       ha:'Zan yi ƙoƙari in koyi Hausa.', ro:'zan yi ko-ka-ri in koi hau-sa', tr:'Hausa öğrenmeye çalışacağım.',
       bd:[{ro:'Zan yi ƙoƙari',tr:'Çalışacağım/Deneyeceğim',role:'niyet',note:'Gelecek niyet.'},{ro:'in koyi Hausa',tr:'Hausa öğrenmek',role:'amaç',note:'Hedef.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:"Hausa'da Olumlu / Olumsuz Yapı", title_en:'Positive and Negative Structures in Hausa',
     explanation:"Hausa'da olumsuzluk 'Ba...ba' kalıbıyla oluşturulur. Fiil 'ba' ile çevrilir.",
     table:[
       {pronoun:'Olumlu', form:'Ina so', example:'Ina so kasuwa.', tr:'Pazarı seviyorum.'},
       {pronoun:'Olumsuz', form:'Ban so ba', example:'Ban so kasuwa ba.', tr:'Pazarı sevmiyorum.'},
       {pronoun:'Olumlu', form:'Na ji', example:'Na ji lafiya.', tr:'Anladım, iyiyim.'},
       {pronoun:'Olumsuz', form:'Ban ji ba', example:'Ban ji ba.', tr:'Anlamadım.'},
       {pronoun:'Olumlu', form:'Na zo', example:'Na zo yau.', tr:'Bugün geldim.'},
       {pronoun:'Olumsuz', form:'Ban zo ba', example:'Ban zo jiya ba.', tr:'Dün gelmedim.'},
     ],
     note:"'Ba' başa eklenir, 'ba' sona eklenir: Ban + fiil + ba = Fiil yapmadım."
    },
    {id:'g2', title:'Duygu ve Durum İfadeleri', title_en:'Expressing Emotions and States',
     explanation:"'Ina da + isim' sahiplik ve durum bildirir. 'Ina farin ciki' = mutluyum (beyaz kalbim var).",
     table:[
       {pronoun:'Mutlu', form:'Ina farin ciki', example:'Ina farin ciki yau.', tr:'Bugün mutluyum.'},
       {pronoun:'Üzgün', form:'Ina bakin ciki', example:'Ina bakin ciki.', tr:'Üzgünüm.'},
       {pronoun:'Yorgun', form:'Na gaji', example:'Na gaji sosai.', tr:'Çok yoruldum.'},
       {pronoun:'Açık', form:'Ina da yunwa', example:'Ina da yunwa.', tr:'Açım.'},
       {pronoun:'Susamış', form:'Ina da ƙishi', example:'Ina da ƙishi.', tr:'Susamıştım.'},
     ],
     note:"'Farin ciki' (mutluluk) ve 'bakin ciki' (üzüntü) kelime anlamı olarak 'beyaz kalp' ve 'siyah kalp' demektir."
    },
    {id:'g3', title:"Ba...ba Olumsuz Kalıbı", title_en:'The Ba...ba Negative Pattern',
     explanation:"Hausa'da olumsuzluk için en temel kalıp 'ba...ba'dır. Fiil bu iki 'ba' arasına alınır.",
     table:[
       {pronoun:'Ben - olumsuz', form:'Ban + fiil + ba', example:'Ban zo ba.', tr:'Gelmedim.'},
       {pronoun:'O (erkek) - olumsuz', form:"Bai + fiil + ba", example:'Bai zo ba.', tr:'Gelmedi (erkek).'},
       {pronoun:'O (kadın) - olumsuz', form:'Bata + fiil + ba', example:'Bata zo ba.', tr:'Gelmedi (kadın).'},
       {pronoun:'Biz - olumsuz', form:'Ban + fiil + ba', example:'Bamu zo ba.', tr:'Gelmedik.'},
     ],
     note:"Olumsuz kalıplar kişiye göre değişir. 'Ban' (ben), 'bai' (o - erkek), 'bata' (o - kadın), 'bamu' (biz)."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Ina so koyon Hausa.', tr:'Hausa öğrenmek istiyorum.', prompt:'İsteğini belirt'},
    {id:'sp2', ha:'Ban ji ba, sake fada.', tr:'Anlamadım, tekrar söyle.', prompt:'Anlamadığını belirt'},
    {id:'sp3', ha:'Ina farin ciki yau.', tr:'Bugün mutluyum.', prompt:'Mutluluğunu ifade et'},
    {id:'sp4', ha:'Na gaji, ina so bacci.', tr:'Yoruldum, uyumak istiyorum.', prompt:'Yorgunluğunu belirt'},
    {id:'sp5', ha:'Zan yi ƙoƙari, lallai ne.', tr:'Elbette deneyeceğim.', prompt:'Söz ver'},
    {id:'sp6', ha:'Yi hankali! Babur ya zo.', tr:'Dikkat et! Motosiklet geliyor.', prompt:'Uyarıda bulun'},
    {id:'sp7', ha:'Abin mamaki! Kyau sosai!', tr:'İnanılmaz! Çok güzel!', prompt:'Hayranlığını ifade et'},
    {id:'sp8', ha:'Ina da yunwa, kawo abinci.', tr:'Açım, yemek getir.', prompt:'Yemek iste'},
  ],
  dialogues: [
    {id:'d1', title:'Günlük Sohbet', title_tr:'Günlük Konuşma Diyaloğu',
     lines:[
       {speaker:'A', gender:'f', ha:'Ina kwana? Yaya kake yau?', tr:'Günaydın. Bugün nasılsın?',
        gramNote:'Sabah selamı ve hal sorusu.',
        bd:[{ro:'Ina kwana',tr:'Günaydın',role:'selamlama',note:'Sabah selamı.'},{ro:'Yaya kake yau',tr:'Bugün nasılsın',role:'soru',note:'Hal sorusu.'}]},
       {speaker:'B', gender:'m', ha:'Lafiya dai. Amma na gaji kadan. Yaya kike?', tr:'İyiyim sayılır. Ama biraz yorgunum. Sen nasılsın?',
        gramNote:'Yanıt ve karşı soru.',
        bd:[{ro:'Lafiya dai',tr:'İyiyim sayılır',role:'yanıt',note:'Kısmi iyilik.'},{ro:'Amma na gaji kadan',tr:'Ama biraz yorgunum',role:'ek bilgi',note:'Yorgunluk.'},{ro:'Yaya kike',tr:'Sen nasılsın',role:'soru',note:'Kadına yönelik.'}]},
       {speaker:'A', gender:'f', ha:'Ina farin ciki yau! Gobe zan tafi kasuwa.', tr:'Bugün mutluyum! Yarın pazara gidiyorum.',
        gramNote:'Duygu ve plan bildirimi.',
        bd:[{ro:'Ina farin ciki yau',tr:'Bugün mutluyum',role:'duygu',note:'Mutluluk.'},{ro:'Gobe zan tafi kasuwa',tr:'Yarın pazara gidiyorum',role:'plan',note:'Gelecek plan.'}]},
       {speaker:'B', gender:'m', ha:'Abin mamaki! Zan zo da ke.', tr:'Harika! Seninle geleceğim.',
        gramNote:'Şaşkınlık ve teklif.',
        bd:[{ro:'Abin mamaki',tr:'Harika',role:'duygu',note:'Şaşkınlık/beğeni.'},{ro:'Zan zo da ke',tr:'Seninle geleceğim',role:'teklif',note:'Birliktelik.'}]},
       {speaker:'A', gender:'f', ha:'Lallai ne! Nagode.', tr:'Elbette! Teşekkürler.',
        gramNote:'Onay ve teşekkür.',
        bd:[{ro:'Lallai ne',tr:'Elbette',role:'onay',note:'Kesin kabul.'},{ro:'Nagode',tr:'Teşekkürler',role:'nezaket',note:'Teşekkür.'}]},
     ]
    },
    {id:'d2', title:'İletişim Sorunu', title_tr:'Anlaşma Güçlüğü Diyaloğu',
     lines:[
       {speaker:'A', gender:'m', ha:'Don Allah, kana jin Hausa?', tr:'Lütfen, Hausa biliyor musun?',
        gramNote:'Dil sorusu.',
        bd:[{ro:'Don Allah',tr:'Lütfen',role:'nezaket',note:'Nazik istek.'},{ro:'kana jin Hausa',tr:'Hausa biliyor musun',role:'soru',note:'Dil yetkinliği sorusu.'}]},
       {speaker:'B', gender:'f', ha:'Kadan ne kawai. Ban ji sosai ba.', tr:'Sadece biraz. Çok anlayamıyorum.',
        gramNote:'Dil yetkinliği bildirimi.',
        bd:[{ro:'Kadan ne kawai',tr:'Sadece biraz',role:'yanıt',note:'Sınırlı yetenek.'},{ro:'Ban ji sosai ba',tr:'Çok anlayamıyorum',role:'olumsuz',note:'Anlama zorluğu.'}]},
       {speaker:'A', gender:'m', ha:'To, yi sannu sannu. Zan yi ƙoƙari.', tr:'Tamam, yavaş yavaş. Deneyeceğim.',
        gramNote:'Teşvik ve söz.',
        bd:[{ro:'Yi sannu sannu',tr:'Yavaş yavaş',role:'tavsiye',note:'Yavaş ilerleme.'},{ro:'Zan yi ƙoƙari',tr:'Deneyeceğim',role:'söz',note:'Niyet bildirimi.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:'Ina farin ciki yau. Amma ina da yunwa sosai. Ban ci abinci ba tukuna. Zan tafi kasuwa nan da nan.',
     tr:'Bugün mutluyum. Ama çok açım. Henüz yemek yemedim. Hemen pazara gidiyorum.',
     questions:[
       {q:"Konuşanın ruh hali nasıl?", opts:['Mutlu','Üzgün','Yorgun','Sinirlendi'], answer:0, tr:"Konuşanın ruh hali nasıl?"},
       {q:'Neden pazara gidiyor?', opts:['Açıkça belirtilmedi','Alışveriş için','Arkadaşla buluşmak için','Yemek yemek için'], answer:0, tr:'Neden pazara gidiyor?'},
     ]
    },
  ],
};
LESSONS[10] = L10;
