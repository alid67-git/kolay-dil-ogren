// ders20.js — Hausa Lesson 20: Mixed Vocabulary
const L20 = {
  words: [
    {id:'w1', ha:'Zuciya', ro:'zu-ci-ya', tr:'Kalp',
     tip:'Fiziksel kalp ve duygusal kalp anlamında kullanılır.',
     ctx:'Tıp ve duygusal ifadeler.',
     examples:[{
       ha:'Zuciyata tana cikin farin ciki.', ro:'zu-ci-ya-ta ta-na ci-kin fa-rin ci-ki', tr:'Kalbim mutluluk içinde.',
       bd:[{ro:'Zuciyata',tr:'Kalbim',role:'isim+iyelik',note:'Benim kalbim.'},{ro:'tana cikin farin ciki',tr:'mutluluk içinde',role:'durum',note:'Mutluluk.'}]
     }]
    },
    {id:'w2', ha:'Hannu', ro:'han-nu', tr:'El / Kol',
     tip:'"Hannu" el ve kol için kullanılır.',
     ctx:'Vücut parçaları.',
     examples:[{
       ha:'Hannu na yana ciwo.', ro:'han-nu na ya-na ci-wo', tr:'Elim ağrıyor.',
       bd:[{ro:'Hannu na',tr:'Elim',role:'isim+iyelik',note:'Benim elim.'},{ro:'yana ciwo',tr:'ağrıyor',role:'durum',note:'Ağrı.'}]
     }]
    },
    {id:'w3', ha:'Ƙafa', ro:'ka-fa', tr:'Ayak / Bacak',
     tip:'"Ƙafa" hem ayak hem de bacak için kullanılır.',
     ctx:'Vücut parçaları ve yürüme.',
     examples:[{
       ha:'Na tafi da ƙafa.', ro:'na ta-fi da ka-fa', tr:'Yürüyerek gittim.',
       bd:[{ro:'Na tafi',tr:'Gittim',role:'fiil',note:'Gitme.'},{ro:'da ƙafa',tr:'yürüyerek',role:'araç',note:'Yürüme.'}]
     }]
    },
    {id:'w4', ha:'Kai', ro:'kai', tr:'Baş / Kafa',
     tip:'"Kai" hem baş hem de "sen/kendin" anlamına gelir.',
     ctx:'Vücut parçaları.',
     examples:[{
       ha:'Ciwon kai ya kama ni.', ro:'ci-won kai ya ka-me ni', tr:'Baş ağrısı tuttu beni.',
       bd:[{ro:'Ciwon kai',tr:'Baş ağrısı',role:'semptom',note:'Ağrı.'},{ro:'ya kame ni',tr:'tuttu beni',role:'mecaz',note:'Baş ağrısı ifadesi.'}]
     }]
    },
    {id:'w5', ha:'Ido', ro:'i-do', tr:'Göz',
     tip:'Görme organı.',
     ctx:'Vücut parçaları ve görme.',
     examples:[{
       ha:'Idanuna suna gani daidai.', ro:'i-da-nu-na su-na ga-ni dai-dai', tr:'Gözlerim iyi görüyor.',
       bd:[{ro:'Idanuna',tr:'Gözlerim',role:'isim+iyelik',note:'Çoğul gözler.'},{ro:'suna gani daidai',tr:'iyi görüyor',role:'fiil',note:'Görme kapasitesi.'}]
     }]
    },
    {id:'w6', ha:'Kunnen', ro:'kun-nen', tr:'Kulak',
     tip:'İşitme organı.',
     ctx:'Vücut parçaları ve işitme.',
     examples:[{
       ha:'Kunnen na yana ji.', ro:'kun-nen na ya-na ji', tr:'Kulağım duyuyor.',
       bd:[{ro:'Kunnen na',tr:'Kulağım',role:'isim+iyelik',note:'Benim kulağım.'},{ro:'yana ji',tr:'duyuyor',role:'fiil',note:'İşitme.'}]
     }]
    },
    {id:'w7', ha:'Baki', ro:'ba-ki', tr:'Ağız / Siyah (renk)',
     tip:'"Baki" hem ağız hem de siyah renk anlamına gelir.',
     ctx:'Vücut parçaları ve renk.',
     examples:[{
       ha:'Yi bude baki don likita.', ro:'yi bu-de ba-ki don li-ki-ta', tr:'Doktor için ağzını aç.',
       bd:[{ro:'Yi bude baki',tr:'Ağzını aç',role:'emir',note:'Muayene emri.'},{ro:'don likita',tr:'doktor için',role:'amaç',note:'Muayene amacı.'}]
     }]
    },
    {id:'w8', ha:'Hanci', ro:'han-ci', tr:'Burun',
     tip:'Koku alma ve nefes alma organı.',
     ctx:'Vücut parçaları.',
     examples:[{
       ha:'Hancinsa babba ne.', ro:'han-cin-sa bab-ba ne', tr:'Burnu büyük.',
       bd:[{ro:'Hancinsa',tr:'Burnu',role:'isim+iyelik',note:'Onun burnu.'},{ro:'babba ne',tr:'büyük',role:'sıfat',note:'Boyut.'}]
     }]
    },
    {id:'w9', ha:'Gashi', ro:'ga-shi', tr:'Saç / Tüy',
     tip:'Baş saçı ve vücut tüyü.',
     ctx:'Fiziksel görünüm.',
     examples:[{
       ha:'Gashinta mai kyau ne.', ro:'ga-shin-ta mai kya-u ne', tr:'Saçı güzel.',
       bd:[{ro:'Gashinta',tr:'Onun saçı',role:'isim+iyelik',note:'Kadının saçı.'},{ro:'mai kyau ne',tr:'güzel',role:'sıfat',note:'Güzellik.'}]
     }]
    },
    {id:'w10', ha:'Haƙori', ro:'ha-ko-ri', tr:'Diş',
     tip:'Ağızdaki dişler.',
     ctx:'Diş sağlığı ve görünüm.',
     examples:[{
       ha:'Haƙorina suna ciwo.', ro:'ha-ko-ri-na su-na ci-wo', tr:'Dişlerim ağrıyor.',
       bd:[{ro:'Haƙorina',tr:'Dişlerim',role:'isim+iyelik',note:'Benim dişlerim.'},{ro:'suna ciwo',tr:'ağrıyor',role:'durum',note:'Diş ağrısı.'}]
     }]
    },
    {id:'w11', ha:'Riga', ro:'ri-ga', tr:'Kaftan / Giysi',
     tip:'Geleneksel Hausa elbisesi. Uzun giysi.',
     ctx:'Giyim ve gelenek.',
     examples:[{
       ha:'Riga sabbi ta yi kyau.', ro:'ri-ga sab-bi ta yi kya-u', tr:'Yeni kaftan güzel.',
       bd:[{ro:'Riga sabbi',tr:'Yeni kaftan',role:'isim+sıfat',note:'Yeni giysi.'},{ro:'ta yi kyau',tr:'güzel',role:'değerlendirme',note:'Beğeni.'}]
     }]
    },
    {id:'w12', ha:'Takalmi', ro:'ta-kal-mi', tr:'Ayakkabı',
     tip:'Her tür ayak giysisi.',
     ctx:'Giyim ve alışveriş.',
     examples:[{
       ha:'Takalmi baki da fari.', ro:'ta-kal-mi ba-ki da fa-ri', tr:'Siyah ve beyaz ayakkabı.',
       bd:[{ro:'Takalmi baki',tr:'Siyah ayakkabı',role:'isim+renk',note:'Renkli ayakkabı.'},{ro:'da fari',tr:'ve beyaz',role:'ek',note:'İkinci renk.'}]
     }]
    },
    {id:'w13', ha:'Rawani', ro:'ra-wa-ni', tr:'Sarık / Baş örtüsü',
     tip:'Erkek başlığı. Hausa kültüründe önemli.',
     ctx:'Geleneksel erkek giyimi.',
     examples:[{
       ha:'Sarki yana da rawani mai kyau.', ro:'sar-ki ya-na da ra-wa-ni mai kya-u', tr:'Hükümdarın güzel sarığı var.',
       bd:[{ro:'Sarki yana da rawani',tr:'Hükümdarın sarığı var',role:'sahiplik',note:'Sahip olma.'},{ro:'mai kyau',tr:'güzel',role:'sıfat',note:'Nitelik.'}]
     }]
    },
    {id:'w14', ha:'Agogo', ro:'a-go-go', tr:'Saat / Kol saati',
     tip:'Kol saati ve saat cihazı.',
     ctx:'Zaman ve aksesuar.',
     examples:[{
       ha:'Agogon a nawa yake yanzu?', ro:'a-go-gon a na-wa ya-ke yan-zu', tr:'Saat şimdi kaç?',
       bd:[{ro:'Agogon a nawa yake',tr:'Saat kaç',role:'soru',note:'Zaman sorusu.'},{ro:'yanzu',tr:'şimdi',role:'zaman',note:'Anlık.'}]
     }]
    },
    {id:'w15', ha:'Littafi', ro:'lit-ta-fi', tr:'Kitap',
     tip:'Her türlü kitap.',
     ctx:'Okuma ve eğitim.',
     examples:[{
       ha:'Littafi mai kyau ne wannan.', ro:'lit-ta-fi mai kya-u ne wan-nan', tr:'Bu güzel bir kitap.',
       bd:[{ro:'Littafi mai kyau ne',tr:'İyi kitap',role:'değerlendirme',note:'Kitap niteliği.'},{ro:'wannan',tr:'bu',role:'işaret zamiri',note:'Gösterme.'}]
     }]
    },
    {id:'w16', ha:'Alkalami', ro:'al-ka-la-mi', tr:'Kalem / Kâlem',
     tip:'Yazma aleti. Arapçadan alıntı.',
     ctx:'Yazma ve ofis.',
     examples:[{
       ha:'Ina so alkalami don rubuta.', ro:'i-na so al-ka-la-mi don ru-bu-ta', tr:'Yazmak için kalem istiyorum.',
       bd:[{ro:'Ina so alkalami',tr:'Kalem istiyorum',role:'istek',note:'Araç talebi.'},{ro:'don rubuta',tr:'yazmak için',role:'amaç',note:'Yazma amacı.'}]
     }]
    },
    {id:'w17', ha:'Tebur', ro:'te-bur', tr:'Masa',
     tip:'Yemek masası veya çalışma masası.',
     ctx:'Ev ve ofis.',
     examples:[{
       ha:'Abinci yana bisa tebur.', ro:'a-bin-ci ya-na bi-sa te-bur', tr:'Yemek masanın üstünde.',
       bd:[{ro:'Abinci yana bisa tebur',tr:'Yemek masada',role:'yer',note:'Konumsal ifade.'}]
     }]
    },
    {id:'w18', ha:'Kujera', ro:'ku-je-ra', tr:'Sandalye / Koltuk',
     tip:'Oturma eşyası.',
     ctx:'Ev ve ofis mobilyası.',
     examples:[{
       ha:'Zauna a kan kujera.', ro:'za-u-na a kan ku-je-ra', tr:'Sandalyeye otur.',
       bd:[{ro:'Zauna a kan kujera',tr:'Sandalyeye otur',role:'emir',note:'Oturma emri.'}]
     }]
    },
    {id:'w19', ha:'Gidan waya', ro:'gi-dan wa-ya', tr:'Telefon (sabit)',
     tip:'"Gidan waya" = tel evi = sabit telefon.',
     ctx:'İletişim ve haberleşme.',
     examples:[{
       ha:'Kira gidan waya na asibitin.', ro:'ki-ra gi-dan wa-ya na a-si-bi-tin', tr:'Hastanenin sabit hattını ara.',
       bd:[{ro:'Kira gidan waya',tr:'Ara (telefon)',role:'emir',note:'Telefon emri.'},{ro:'na asibitin',tr:'hastanenin',role:'iyelik',note:'Hastane hattı.'}]
     }]
    },
    {id:'w20', ha:'Wayar hannu', ro:'wa-yar han-nu', tr:'Cep telefonu',
     tip:'"Wayar hannu" = el telefonu = cep telefonu.',
     ctx:'Modern iletişim.',
     examples:[{
       ha:'Wayar hanna ta ɓace.', ro:'wa-yar han-na ta ba-ce', tr:'Cep telefonum kayboldu.',
       bd:[{ro:'Wayar hanna',tr:'Cep telefonum',role:'isim+iyelik',note:'Kişisel telefon.'},{ro:'ta ɓace',tr:'kayboldu',role:'fiil',note:'Kaybolma.'}]
     }]
    },
    {id:'w21', ha:'Telebijin', ro:'te-le-bi-jin', tr:'Televizyon',
     tip:'Televizyon. İngilizceden alıntı.',
     ctx:'Eğlence ve haber takibi.',
     examples:[{
       ha:'Muna kallo telebijin da dare.', ro:'mu-na kal-lo te-le-bi-jin da da-re', tr:'Geceleri televizyon izliyoruz.',
       bd:[{ro:'Muna kallo',tr:'İzliyoruz',role:'fiil',note:'Çoğul izleme.'},{ro:'telebijin da dare',tr:'geceleri televizyon',role:'nesne+zaman',note:'Gece eğlencesi.'}]
     }]
    },
    {id:'w22', ha:'Kwamfuta', ro:'kwam-fu-ta', tr:'Bilgisayar',
     tip:'Bilgisayar. İngilizceden alıntı.',
     ctx:'Teknoloji ve iş.',
     examples:[{
       ha:'Ina aiki da kwamfuta.', ro:'i-na ai-ki da kwam-fu-ta', tr:'Bilgisayarla çalışıyorum.',
       bd:[{ro:'Ina aiki da kwamfuta',tr:'Bilgisayarla çalışıyorum',role:'fiil+araç',note:'Teknoloji kullanımı.'}]
     }]
    },
    {id:'w23', ha:'Rediyo', ro:'re-di-yo', tr:'Radyo',
     tip:'Radyo alıcısı. İngilizceden alıntı.',
     ctx:'Haberler ve müzik.',
     examples:[{
       ha:'Ina sauraren rediyo da safiya.', ro:'i-na sau-ra-ren re-di-yo da sa-fi-ya', tr:'Sabah radyo dinliyorum.',
       bd:[{ro:'Ina sauraren rediyo',tr:'Radyo dinliyorum',role:'fiil',note:'Dinleme.'},{ro:'da safiya',tr:'sabah',role:'zaman',note:'Sabah vakti.'}]
     }]
    },
    {id:'w24', ha:'Direba', ro:'di-re-ba', tr:'Sürücü',
     tip:'Araç sürücüsü ve şoför.',
     ctx:'Ulaşım ve hizmet.',
     examples:[{
       ha:'Direba mai gwaninta.', ro:'di-re-ba mai gwa-nin-ta', tr:'Yetenekli sürücü.',
       bd:[{ro:'Direba mai gwaninta',tr:'Yetenekli sürücü',role:'isim+sıfat',note:'Nitelikli sürücü.'}]
     }]
    },
    {id:'w25', ha:'Mota', ro:'mo-ta', tr:'Araba / Taşıt',
     tip:'Her türlü motorlu taşıt.',
     ctx:'Ulaşım ve taşıt.',
     examples:[{
       ha:'Motata sabbi ce.', ro:'mo-ta-ta sab-bi ce', tr:'Arabam yeni.',
       bd:[{ro:'Motata',tr:'Arabam',role:'isim+iyelik',note:'Benim arabam.'},{ro:'sabbi ce',tr:'yeni',role:'sıfat',note:'Yaş/durumu.'}]
     }]
    },
  ],
  grammar: [
    {id:'g1', title:"Hausa'da Vücut Parçaları ve İyelik", title_en:'Body Parts and Possession in Hausa',
     explanation:"Vücut parçalarına iyelik ekleri eklenerek 'benim + organ' ifade edilir.",
     table:[
       {pronoun:'Baş (benim)', form:'Kaina', example:'Kaina yana ciwo.', tr:'Başım ağrıyor.'},
       {pronoun:'Elin (benim)', form:'Hannuna', example:'Hannuna mai tsawo.', tr:'Elim uzun.'},
       {pronoun:'Gözlerim', form:'Idanuna', example:'Idanuna suna gani.', tr:'Gözlerim görüyor.'},
       {pronoun:'Dişlerim', form:'Haƙorina', example:'Haƙorina suna ciwo.', tr:'Dişlerim ağrıyor.'},
       {pronoun:'Kalbim', form:'Zuciyata', example:'Zuciyata tana farin ciki.', tr:'Kalbim mutlu.'},
     ],
     note:"Vücut parçaları çoğunlukla '-na' (benim) iyelik ekiyle kullanılır: kaina (başım), hannuna (elim), idanuna (gözlerim)."
    },
    {id:'g2', title:'Teknoloji Kelimeleri', title_en:'Technology Vocabulary',
     explanation:"Modern teknoloji kelimeleri çoğunlukla İngilizceden alıntıdır ve Hausa sesibimine uyarlanmıştır.",
     table:[
       {pronoun:'Telefon', form:'Wayar hannu', example:'Ina amfani da wayar hannu.', tr:'Cep telefonu kullanıyorum.'},
       {pronoun:'Bilgisayar', form:'Kwamfuta', example:'Ina aiki da kwamfuta.', tr:'Bilgisayarla çalışıyorum.'},
       {pronoun:'TV', form:'Telebijin', example:'Kallo telebijin.', tr:'TV izle.'},
       {pronoun:'Radyo', form:'Rediyo', example:'Saurare rediyo.', tr:'Radyo dinle.'},
       {pronoun:'İnternet', form:'Intanet', example:'Ina amfani da intanet.', tr:'İnternet kullanıyorum.'},
     ],
     note:"'Amfani da' = kullanmak. 'Ina amfani da wayar hannu' = cep telefonu kullanıyorum."
    },
    {id:'g3', title:"Hausa'da Sahiplik: Yana Da / Tana Da", title_en:'Expressing Possession: Yana Da / Tana Da',
     explanation:"'Yana da' (sahip - erkek) ve 'tana da' (sahip - kadın) ile sahiplik ifade edilir.",
     table:[
       {pronoun:'Erkek sahiplik', form:'Yana da + nesne', example:'Yana da mota sabbi.', tr:'Yeni arabası var.'},
       {pronoun:'Kadın sahiplik', form:'Tana da + nesne', example:'Tana da wayar hannu.', tr:'Cep telefonu var.'},
       {pronoun:'Ben sahiplik', form:'Ina da + nesne', example:'Ina da littafi goma.', tr:'On kitabım var.'},
       {pronoun:'Sahip değil', form:'Babu + nesne', example:'Babu wayar hannu.', tr:'Cep telefonu yok.'},
     ],
     note:"'Babu' = yok. 'Akwai' = var. Bu iki kelime çok önemlidir: 'Akwai kuɗi?' = Para var mı? 'Babu kuɗi' = Para yok."
    },
  ],
  speaking: [
    {id:'sp1', ha:'Zuciyata tana farin ciki.', tr:'Kalbim mutlu.', prompt:'Duygunu kalp metaforuyla anlat'},
    {id:'sp2', ha:'Haƙorina suna ciwo, ina so ganin likita.', tr:'Dişlerim ağrıyor, doktor görmek istiyorum.', prompt:'Diş ağrısını bildir'},
    {id:'sp3', ha:'Ina aiki da kwamfuta da wayar hannu.', tr:'Bilgisayar ve cep telefonuyla çalışıyorum.', prompt:'Teknoloji kullanımını anlat'},
    {id:'sp4', ha:'Motata sabbi ne, yana da rengi ja.', tr:'Arabam yeni, kırmızı renkte.', prompt:'Arabani tarif et'},
    {id:'sp5', ha:'Muna kallo telebijin da dare.', tr:'Geceleri televizyon izliyoruz.', prompt:'Gece rutinini anlat'},
    {id:'sp6', ha:'Alkalami na ina ne?', tr:'Kalemim nerede?', prompt:'Kalemini ara'},
    {id:'sp7', ha:'Ina sauraren rediyo da safiya.', tr:'Sabah radyo dinliyorum.', prompt:'Sabah rutinini anlat'},
    {id:'sp8', ha:'Wayar hanna ta ɓace, ina nema.', tr:'Cep telefonum kayboldu, arıyorum.', prompt:'Kayıp telefonu bildir'},
  ],
  dialogues: [
    {id:'d1', title:'Gida — Ev Sohbeti', title_tr:'Ev Sohbeti Diyaloğu',
     lines:[
       {speaker:'A', gender:'m', ha:'Wayar hannunka ina take?', tr:'Cep telefonu nerede?',
        gramNote:'Cep telefonu yer sorusu.',
        bd:[{ro:'Wayar hannunka',tr:'Cep telefonun',role:'isim+iyelik',note:'Senin telefonun.'},{ro:'ina take',tr:'nerede',role:'soru',note:'Yer sorusu.'}]},
       {speaker:'B', gender:'f', ha:'Tana bisa tebur, kusa da alkalami na.', tr:'Masanın üstünde, kalemimin yanında.',
        gramNote:'Konum ifadesi.',
        bd:[{ro:'Tana bisa tebur',tr:'Masanın üstünde',role:'yer',note:'Konum.'},{ro:'kusa da alkalami na',tr:'kalemimin yanında',role:'referans',note:'Yakınlık referansı.'}]},
       {speaker:'A', gender:'m', ha:'Nagode. Kana kallo telebijin?', tr:'Teşekkürler. TV izliyor musun?',
        gramNote:'Teşekkür ve soru.',
        bd:[{ro:'Nagode',tr:'Teşekkürler',role:'nezaket',note:'Teşekkür.'},{ro:'Kana kallo telebijin',tr:'TV izliyor musun',role:'soru',note:'Aktivite sorusu.'}]},
       {speaker:'B', gender:'f', ha:"A'a, ina aiki da kwamfuta. Ina karanta labaran jarida a intanet.", tr:'Hayır, bilgisayarla çalışıyorum. İnternette gazete haberleri okuyorum.',
        gramNote:'Aktivite açıklaması.',
        bd:[{ro:"A'a",tr:'Hayır',role:'ret',note:'Olumsuz yanıt.'},{ro:'ina aiki da kwamfuta',tr:'bilgisayarla çalışıyorum',role:'aktivite',note:'Çalışma.'},{ro:'Ina karanta labaran jarida a intanet',tr:'internette gazete okuyorum',role:'ek aktivite',note:'Okuma.'}]},
       {speaker:'A', gender:'m', ha:'Kwamfutarku ta yi kyau. Sabbi ce ne?', tr:'Bilgisayarınız güzel. Yeni mi?',
        gramNote:'Nesne değerlendirmesi.',
        bd:[{ro:'Kwamfutarku ta yi kyau',tr:'Bilgisayarınız güzel',role:'beğeni',note:'Nitelik.'},{ro:'Sabbi ce ne',tr:'Yeni mi',role:'soru',note:'Yaş sorusu.'}]},
       {speaker:'B', gender:'f', ha:'Eh, na saye ta watan jiya. Mai arha ce.', tr:'Evet, geçen ay aldım. Ucuz.',
        gramNote:'Satın alma zamanı ve fiyat.',
        bd:[{ro:'Na saye ta watan jiya',tr:'Geçen ay aldım',role:'geçmiş',note:'Satın alma.'},{ro:'Mai arha ce',tr:'Ucuz',role:'fiyat',note:'Uygun fiyat.'}]},
     ]
    },
    {id:'d2', title:'Vücut ve Sağlık', title_tr:'Vücut Parçaları ve Sağlık Diyaloğu',
     lines:[
       {speaker:'A', gender:'f', ha:'Me yake damunka? Kana da lafiya?', tr:'Ne oluyor? İyi misin?',
        gramNote:'Sağlık sorusu.',
        bd:[{ro:'Me yake damunka',tr:'Ne oluyor sana',role:'soru',note:'Sorun sorusu.'},{ro:'Kana da lafiya',tr:'İyi misin',role:'sağlık sorusu',note:'Sağlık durumu.'}]},
       {speaker:'B', gender:'m', ha:'Kaina da haƙorina suna ciwo. Ban yi bacci da dare ba.', tr:'Başım ve dişlerim ağrıyor. Gece uyuyamadım.',
        gramNote:'Semptom listesi.',
        bd:[{ro:'Kaina da haƙorina suna ciwo',tr:'Başım ve dişlerim ağrıyor',role:'semptom',note:'Çoklu ağrı.'},{ro:'Ban yi bacci da dare ba',tr:'Gece uyuyamadım',role:'olumsuz',note:'Uyku sorunu.'}]},
       {speaker:'A', gender:'f', ha:'Yi hankali! Je asibitin yanzu. Kira likita.', tr:'Dikkat et! Hemen hastaneye git. Doktor ara.',
        gramNote:'Tavsiye ve yönlendirme.',
        bd:[{ro:'Yi hankali',tr:'Dikkat et',role:'uyarı',note:'Özen uyarısı.'},{ro:'Je asibitin yanzu',tr:'Hemen hastaneye git',role:'tavsiye',note:'Acil yönlendirme.'},{ro:'Kira likita',tr:'Doktor ara',role:'tavsiye',note:'Tıbbi yardım.'}]},
       {speaker:'B', gender:'m', ha:'Yauwa, zan je. Ina da wayar hannu, zan kira nan da nan.', tr:'Tamam, gideceğim. Cep telefonum var, hemen arayacağım.',
        gramNote:'Onay ve plan.',
        bd:[{ro:'Yauwa zan je',tr:'Tamam gideceğim',role:'kabul',note:'Plan onayı.'},{ro:'Ina da wayar hannu',tr:'Cep telefonum var',role:'sahiplik',note:'Araç.'},{ro:'zan kira nan da nan',tr:'hemen arayacağım',role:'plan',note:'Acil arama.'}]},
     ]
    },
  ],
  listening: [
    {id:'li1', audio:'', transcript:'Sunana Fatima. Ina aiki da kwamfuta a ofis. Da safiya ina sauraren rediyo. Da dare muna kallo telebijin. Ina da wayar hannu sabbi — na saye ta a watan jiya.',
     tr:"Adım Fatima. Ofiste bilgisayarla çalışıyorum. Sabah radyo dinliyorum. Geceleri televizyon izliyoruz. Yeni bir cep telefonum var — geçen ay satın aldım.",
     questions:[
       {q:"Fatima'nın mesleği ile ilgili ne söyleniyor?", opts:['Ofiste bilgisayarla çalışıyor','Okulda öğretmenlik yapıyor','Hastanede doktorluk yapıyor','Pazarda satıcılık yapıyor'], answer:0, tr:"Fatima'nın mesleği ile ilgili ne söyleniyor?"},
       {q:'Cep telefonu ne zaman alındı?', opts:['Geçen ay','Bu ay','Geçen yıl','Bu hafta'], answer:0, tr:'Cep telefonu ne zaman alındı?'},
     ]
    },
  ],
};
LESSONS[20] = L20;
