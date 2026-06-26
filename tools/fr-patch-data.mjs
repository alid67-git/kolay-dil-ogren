export const L2 = `// ─── Lesson 2: Articles & être ───────────────────────────────
const L2 = scenario('Articles & être',
  [
    W('w1', 'le livre', 'lə LIV-rə', 'kitap (eril)', { tip: 'Eril belirli artikel: le.', ex: { en: 'Le livre est intéressant.', tr: 'Kitap ilginç.', bd: [BD('Le', 'Belirli eril artikel', 'K', 'le = the (eril).'), BD('livre', 'kitap', 'O', 'Maskulin.')] } }),
    W('w2', 'la table', 'la TABL', 'masa (dişil)', { tip: 'Dişil belirli artikel: la.', ex: { en: 'La table est grande.', tr: 'Masa büyük.', bd: [BD('La', 'Belirli dişil artikel', 'K', 'la = the (dişil).')] } }),
    W('w3', 'l\\'enfant', 'lan-FAN', 'çocuk', { tip: 'Sesli harfle: l\\'.', ex: { en: 'L\\'enfant joue.', tr: 'Çocuk oynuyor.', bd: [BD('L\\'', 'Belirli artikel (sesli)', 'K', 'le/la → l\\' sesli öncesi.')] } }),
    W('w4', 'un livre', 'an LIV-rə', 'bir kitap', { ex: { en: 'C\\'est un livre.', tr: 'Bu bir kitap.', bd: [BD('un', 'bir (eril)', 'K', 'Belirsiz eril artikel.')] } }),
    W('w5', 'une table', 'ün TABL', 'bir masa', { ex: { en: 'C\\'est une table.', tr: 'Bu bir masa.', bd: [BD('une', 'bir (dişil)', 'K', 'Belirsiz dişil artikel.')] } }),
    W('w6', 'des livres', 'day LIV-rə', 'kitaplar (belirsiz çoğul)', { ex: { en: 'J\\'ai des livres.', tr: 'Kitaplarım var.', bd: [BD('des', 'belirsiz çoğul', 'K', 'un/une → des.')] } }),
    W('w7', 'je suis', 'zhə SÜİ', 'ben ...im', { ex: { en: 'Je suis Ali.', tr: 'Ben Ali\\'yim.', bd: [BD('Je', 'Ben', 'S', '1. tekil.'), BD('suis', '...im', 'V', 'être — je ile suis.')] } }),
    W('w8', 'tu es', 'tü E', 'sen ...sin', { ex: { en: 'Tu es gentil.', tr: 'Sen naziksin.', bd: [BD('es', '...sin', 'V', 'tu ile es.')] } }),
    W('w9', 'il est / elle est', 'il E / el E', 'o ...', { ex: { en: 'Il est étudiant.', tr: 'O öğrenci.', bd: [BD('est', '...dir', 'V', 'il/elle ile est.')] } }),
    W('w10', 'nous sommes', 'nu SOM', 'biz ...iz', { ex: { en: 'Nous sommes amis.', tr: 'Biz arkadaşız.', bd: [BD('sommes', '...iz', 'V', 'nous ile sommes.')] } }),
    W('w11', 'vous êtes', 'vu ZET', 'siz ...siniz', { ex: { en: 'Vous êtes professeur?', tr: 'Siz öğretmen misiniz?', bd: [BD('êtes', '...siniz', 'V', 'vous ile êtes.')] } }),
    W('w12', 'ils sont / elles sont', 'il SON / el SON', 'onlar ...', { ex: { en: 'Ils sont français.', tr: 'Onlar Fransız.', bd: [BD('sont', '...lar', 'V', 'ils/elles ile sont.')] } })
  ],
  [
    G('g1', 'Belirli Artikeller — le / la / l\\' / les', 'Definite Articles',
      'Fransızca belirli artikel: le (eril), la (dişil), l\\' (sesli), les (çoğul). Türkçede artikel yok — isimle birlikte ezberle: le livre, la table, les livres.',
      [{ pronoun: 'Eril', form: 'le', example: 'le livre', tr: 'kitap' }, { pronoun: 'Dişil', form: 'la', example: 'la table', tr: 'masa' },
       { pronoun: 'Sesli', form: 'l\\'', example: 'l\\'enfant', tr: 'çocuk' }, { pronoun: 'Çoğul', form: 'les', example: 'les livres', tr: 'kitaplar' }],
      'Sözlükte artikel ile ezberle.'),
    G('g2', 'Belirsiz Artikeller — un / une / des', 'Indefinite Articles',
      'un (eril), une (dişil), des (çoğul belirsiz). Olumsuzda: pas de livre (kitap yok).',
      [{ pronoun: 'Eril', form: 'un', example: 'un livre', tr: 'bir kitap' }, { pronoun: 'Dişil', form: 'une', example: 'une table', tr: 'bir masa' },
       { pronoun: 'Çoğul', form: 'des', example: 'des livres', tr: 'kitaplar' }, { pronoun: 'Tanıtma', form: 'C\\'est un...', example: 'C\\'est un livre.', tr: 'Bu bir kitap.' }],
      'Meslekte artikel yok: Je suis professeur.'),
    G('g3', 'Fiil: être (olmak) — Tüm Çekimler', 'Verb: être (to be)',
      'être = olmak. Türkçedeki -im, -sin, -dir karşılığı. Düzensiz fiil — ezberle!',
      [{ pronoun: 'je', form: 'suis', example: 'Je suis Ali.', tr: 'Ben Ali\\'yim.' }, { pronoun: 'tu', form: 'es', example: 'Tu es gentil.', tr: 'Sen naziksin.' },
       { pronoun: 'il/elle', form: 'est', example: 'Il est professeur.', tr: 'O öğretmen.' }, { pronoun: 'nous', form: 'sommes', example: 'Nous sommes amis.', tr: 'Biz arkadaşız.' },
       { pronoun: 'vous', form: 'êtes', example: 'Vous êtes professeur?', tr: 'Siz öğretmen misiniz?' }, { pronoun: 'ils/elles', form: 'sont', example: 'Ils sont français.', tr: 'Onlar Fransız.' }],
      'être + sıfat: Je suis fatigué. Soru: Es-tu fatigué?')
  ],
  [SP('sp1', 'Je suis Ali.', 'Ben Ali\\'yim.', 'Kendini tanıt', { gramNote: 'je + suis — être 1. tekil.' }),
   SP('sp2', 'C\\'est un livre.', 'Bu bir kitap.', 'Belirsiz artikel'),
   SP('sp3', 'Le livre est grand.', 'Kitap büyük.', 'le + être + sıfat'),
   SP('sp4', 'La table est petite.', 'Masa küçük.', 'la + être + sıfat'),
   SP('sp5', 'Nous sommes amis.', 'Biz arkadaşız.', 'nous + sommes')],
  [DL('d1', 'Artikel Alıştırması', 'Article Practice', [
    LN('A', 'm', 'Qu\\'est-ce que c\\'est?', 'Bu ne?', 'Nesne sorma.', [BD('Qu\\'est-ce que c\\'est', 'Bu ne', 'question', 'Tanıma sorusu.')]),
    LN('B', 'f', 'C\\'est une table.', 'Bu bir masa.', 'une + feminin.', [BD('une table', 'bir masa', 'O', 'table → une.')]),
    LN('A', 'm', 'Et qu\\'est-ce que c\\'est?', 'Peki bu ne?', 'Et = peki.', [BD('Et', 'Peki', 'K', 'Bağlaç.')]),
    LN('B', 'f', 'C\\'est la porte.', 'Bu kapı.', 'Belirli artikel la.', [BD('la porte', 'kapı', 'O', 'porte → la.')]),
    LN('A', 'm', 'La table est grande?', 'Masa büyük mü?', 'Soru tonu.', [BD('est grande', 'büyük mü', 'V', 'être + sıfat.')]),
    LN('B', 'f', 'Oui, elle est grande.', 'Evet, o büyük.', 'elle = la table.', [BD('elle', 'o (dişil)', 'S', 'Dişil zamir.')])
  ]),
   DL('d2', 'Kendini Tanıtma', 'Self Introduction', [
    LN('A', 'm', 'Je suis Ali. Je suis étudiant.', 'Ben Ali. Öğrenciyim.', 'être + isim/meslek.', [BD('Je suis étudiant', 'Öğrenciyim', 'V', 'Meslekte artikel yok.')]),
    LN('B', 'f', 'Super! Je suis Marie. Je suis professeure.', 'Harika! Ben Marie. Öğretmenim.', 'Kadın meslek formu.', [BD('professeure', 'öğretmen (kadın)', 'O', '-e eki.')]),
    LN('A', 'm', 'Vous êtes aussi professeure?', 'Siz de öğretmen misiniz?', 'Resmi soru.', [BD('Vous êtes', 'Misiniz', 'V', 'Resmi form.')]),
    LN('B', 'f', 'Oui. Et toi? Tu es étudiant?', 'Evet. Ya sen? Öğrenci misin?', 'tu\\'ya geçiş.', [BD('Tu es', 'Sen ... misin', 'V', 'Samimi soru.')]),
    LN('A', 'm', 'Oui, je suis étudiant. Nous sommes en cours un!', 'Evet, öğrenciyim. Birinci dersteyiz!', 'nous sommes.', [BD('Nous sommes', 'Biz ...iz', 'V', '1. çoğul.')])
  ])],
  [LI('li1', 'C\\'est un livre. Le livre est grand. La table est belle. L\\'enfant est petit.',
    'Bu bir kitap. Kitap büyük. Masa güzel. Çocuk küçük.',
    [Q('Quel article pour livre?', ['la', 'l\\'', 'le', 'un'], 2, 'livre hangi artikel?'),
     Q('Table en turc?', ['çocuk', 'masa', 'kitap', 'kapı'], 1, 'table Türkçede?'),
     Q('L\\'enfant est comment?', ['grand', 'petit', 'beau', 'belle'], 1, 'Çocuk nasıl?')])]
);

`;

export const L3 = `// ─── Lesson 3: Numbers & Money ───────────────────────────────
function numWords() {
  const nums = [
    ['un', 'an', 'bir'], ['deux', 'dö', 'iki'], ['trois', 'trwa', 'üç'], ['quatre', 'KAT-rə', 'dört'],
    ['cinq', 'sank', 'beş'], ['six', 'sis', 'altı'], ['sept', 'set', 'yedi'], ['huit', 'üit', 'sekiz'],
    ['neuf', 'nöf', 'dokuz'], ['dix', 'dis', 'on'], ['onze', 'onz', 'on bir'], ['douze', 'duz', 'on iki'],
    ['treize', 'trwaz', 'on üç'], ['quatorze', 'ka-TORZ', 'on dört'], ['quinze', 'kanz', 'on beş'],
    ['seize', 'sez', 'on altı'], ['dix-sept', 'dis-SET', 'on yedi'], ['dix-huit', 'dis-ÜIT', 'on sekiz'],
    ['dix-neuf', 'dis-NÖF', 'on dokuz'], ['vingt', 'van', 'yirmi'], ['trente', 'tront', 'otuz'],
    ['quarante', 'ka-RONT', 'kırk'], ['cinquante', 'kan-KONT', 'elli'], ['soixante', 'swa-SONT', 'altmış'],
    ['soixante-dix', 'swa-sont-DIS', 'yetmiş'], ['quatre-vingt', 'KAT-rə-VAN', 'seksen'],
    ['quatre-vingt-dix', 'KAT-rə-van-DIS', 'doksan'], ['cent', 'san', 'yüz'], ['mille', 'mil', 'bin']
  ];
  return nums.map(([en, ro, tr], i) => W(\`w\${i + 1}\`, en, ro, tr, i < 3 ? {
    tip: i === 0 ? 'Temel sayı.' : 'Sayma.', ctx: 'Sayılar ve miktar.',
    ex: { en: i === 0 ? 'J\\'ai un livre.' : i === 1 ? 'Deux cafés, s\\'il vous plaît.' : \`Il y a \${en} chats.\`,
      tr: i === 0 ? 'Bir kitabım var.' : i === 1 ? 'İki kahve, lütfen.' : \`\${tr.charAt(0).toUpperCase() + tr.slice(1)} kedi var.\`,
      bd: [BD(en, tr, 'number', \`\${en} = \${tr}\`)] }
  } : {}));
}

const L3 = scenario('Numbers & Money',
  [
    ...numWords(),
    W('w30', 'Combien ça coûte?', 'kom-BYAN sa KUT', 'Bu ne kadar?', { tip: 'Fiyat sormak.', ex: { en: 'Combien ça coûte?', tr: 'Bu ne kadar?', bd: [BD('Combien', 'Ne kadar', 'question', 'Fiyat sorusu.')] } }),
    W('w31', 'euro', 'ö-RO', 'euro', { ex: { en: 'Ça coûte cinq euros.', tr: 'Bu beş euro.', bd: [BD('euros', 'euro', 'currency', 'Fransa para birimi.')] } }),
    W('w32', 'centime', 'san-TIM', 'sent', { ex: { en: 'Quatre-vingt-dix-neuf centimes.', tr: 'Doksan dokuz sent.', bd: [BD('centime', 'sent', 'currency', '1 euro = 100 centimes.')] } }),
    W('w33', 'l\\'addition', 'la-di-SYON', 'hesap', { ex: { en: 'L\\'addition, s\\'il vous plaît.', tr: 'Hesap, lütfen.', bd: [BD('l\\'addition', 'hesap', 'O', 'Restoranda.')] } })
  ],
  [
    G('g1', 'Fransızca Sayılar — soixante-dix, quatre-vingt', 'French Numbers',
      '70 = soixante-dix (60+10)! 80 = quatre-vingt (4×20)! 90 = quatre-vingt-dix! 21 = vingt et un.',
      [{ pronoun: '1–16', form: 'un...seize', example: 'un, deux, trois', tr: 'bir...on altı' },
       { pronoun: '70', form: 'soixante-dix', example: 'soixante-dix = 70', tr: 'yetmiş' },
       { pronoun: '80', form: 'quatre-vingt', example: 'quatre-vingt = 80', tr: 'seksen' },
       { pronoun: '90', form: 'quatre-vingt-dix', example: 'quatre-vingt-dix = 90', tr: 'doksan' }],
      '71: soixante et onze. 99: quatre-vingt-dix-neuf.'),
    G('g2', 'Para — Euro et Centimes', 'Money',
      'Combien ça coûte? = Bu ne kadar? L\\'addition, s\\'il vous plaît = Hesap lütfen.',
      [{ pronoun: 'Soru', form: 'Combien ça coûte?', example: 'Combien ça coûte?', tr: 'Bu ne kadar?' },
       { pronoun: 'Cevap', form: 'Ça coûte...', example: 'Ça coûte dix euros.', tr: 'Bu on euro.' },
       { pronoun: 'Hesap', form: 'L\\'addition', example: 'L\\'addition, s\\'il vous plaît.', tr: 'Hesap, lütfen.' },
       { pronoun: 'Ödeme', form: 'par carte', example: 'Je peux payer par carte?', tr: 'Kartla ödeyebilir miyim?' }],
      'Espèces ou carte? = Nakit mi kart mı?')
  ],
  [SP('sp1', 'Deux cafés, s\\'il vous plaît.', 'İki kahve, lütfen.', 'Sayı ile sipariş'),
   SP('sp2', 'Ça coûte cinq euros.', 'Bu beş euro.', 'Fiyat söyle'),
   SP('sp3', 'Combien ça coûte?', 'Bu ne kadar?', 'Fiyat sor'),
   SP('sp4', 'J\\'ai vingt euros.', 'Yirmi eurom var.', 'Paranı söyle'),
   SP('sp5', 'L\\'addition, s\\'il vous plaît.', 'Hesap, lütfen.', 'Hesap iste')],
  [DL('d1', 'Au Café', 'At the Café', [
    LN('A', 'm', 'Deux cafés, s\\'il vous plaît.', 'İki kahve, lütfen.', 'Sayı + isim.', [BD('Deux cafés', 'İki kahve', 'O', 'Çoğul -s.')]),
    LN('B', 'f', 'Autre chose?', 'Başka bir şey?', 'Sipariş sorusu.', [BD('Autre chose', 'Başka bir şey', 'question', 'Tamamlama.')]),
    LN('A', 'm', 'Non, merci. Combien ça coûte?', 'Hayır, teşekkürler. Ne kadar?', 'Fiyat sorusu.', [BD('Combien ça coûte', 'Ne kadar', 'question', 'Fiyat.')]),
    LN('B', 'f', 'Ça fait six euros cinquante.', 'Toplam altı euro elli.', 'Toplam.', [BD('Ça fait', 'Toplam', 'V', 'Alışveriş.')]),
    LN('A', 'm', 'Voilà. Merci!', 'Buyurun. Teşekkürler!', 'Para verme.', [BD('Voilà', 'Buyurun', 'K', 'Para uzatırken.')])
  ])],
  [LI('li1', 'Le café coûte trois euros. Le pain coûte deux euros cinquante. En tout, ça fait cinq euros cinquante.',
    'Kahve üç euro. Ekmek iki euro elli. Toplam beş euro elli.',
    [Q('Combien coûte le café?', ['2 €', '3 €', '5 €', '6 €'], 1, 'Kahve ne kadar?'),
     Q('Combien coûte le pain?', ['2,50 €', '3 €', '5 €', '5,50 €'], 0, 'Ekmek ne kadar?'),
     Q('Total?', ['3 €', '5,05 €', '5,50 €', '6 €'], 2, 'Toplam ne kadar?')])]
);

`;

export const L4_20 = `// ─── Lessons 4–20: Scenario topics ───────────────────────────
function mkFrScenario(title, words, g1, g2, sps, dlLines, li) {
  return scenario(title, mkScenarioWords(words), [g1, g2], sps, [DL('d1', g1.title, g1.title_en, dlLines)], [li]);
}
function frLesson(title, pairs, gTitle, gExpl) {
  const words = pairs.map((p, i) => [\`w\${i + 1}\`, p[0], p[1], p[2]]);
  const g1 = G('g1', gTitle, title, gExpl, pairs.slice(0, 4).map(p => ({ pronoun: p[2], form: p[0], example: p[0], tr: p[2] })), 'Fransızca pratik için tekrar et.');
  const g2 = G('g2', 'tu vs vous', 'Formal vs Informal', 'Resmi ortamda vous, samimi ortamda tu.', [{ pronoun: 'Resmi', form: 'vous', example: 'Comment allez-vous?', tr: 'Nasılsınız?' }, { pronoun: 'Samimi', form: 'tu', example: 'Comment vas-tu?', tr: 'Nasılsın?' }], 'Kararsız kalırsan vous ile başla.');
  const sps = pairs.slice(0, 5).map((p, i) => SP(\`sp\${i + 1}\`, p[0], p[2], p[2]));
  const dl = pairs.slice(0, 4).map((p, i) => LN(i % 2 ? 'A' : 'B', i % 2 ? 'm' : 'f', p[0], p[2], p[2], [BD(p[0], p[2], 'V', p[0])]));
  const li = LI('li1', pairs[0][0], pairs[0][2], [Q('Quel mot?', pairs.slice(0, 4).map(p => p[0]), 0, 'Hangi kelime?')]);
  return mkFrScenario(title, words, g1, g2, sps, dl, li);
}
const L4 = frLesson('Time & Date', [['Quelle heure est-il?', 'kel OR e-til', 'Saat kaç?'], ['Il est trois heures', 'il E trwa ÖR', 'Saat üç'], ['aujourd\\'hui', 'o-zhur-DÜİ', 'bugün'], ['demain', 'də-MAN', 'yarın'], ['lundi', 'lan-Dİ', 'Pazartesi'], ['mardi', 'mar-Dİ', 'Salı'], ['mercredi', 'mer-krə-Dİ', 'Çarşamba'], ['jeudi', 'zhə-Dİ', 'Perşembe'], ['vendredi', 'van-drə-Dİ', 'Cuma'], ['samedi', 'sam-Dİ', 'Cumartesi'], ['dimanche', 'di-MONSH', 'Pazar'], ['Quand?', 'kan', 'Ne zaman?'], ['À quelle heure?', 'a kel OR', 'Saat kaçta?']], 'Saat ve Tarih', 'Il est ... heure(s). et demie = buçuk.');
const L5 = frLesson('Restaurant & Food', [['Une table pour deux, s\\'il vous plaît.', 'ün TABL pur dö', 'İki kişilik masa'], ['le menu', 'lə mə-NÜ', 'menü'], ['commander', 'ko-man-DAY', 'sipariş vermek'], ['Je voudrais...', 'zhə vu-DRAY', '... istiyorum'], ['l\\'addition', 'la-di-SYON', 'hesap'], ['Bon appétit!', 'bon apay-Tİ', 'Afiyet olsun'], ['le café', 'lə ka-FAY', 'kahve'], ['la soupe', 'la SUP', 'çorba'], ['le poulet', 'lə pu-LAY', 'tavuk'], ['délicieux', 'de-li-SYÖ', 'lezzetli']], 'Restoran', 'Je voudrais... = nazik sipariş. L\\'addition = hesap.');
const L6 = frLesson('Shopping', [['Combien ça coûte?', 'kom-BYAN sa KUT', 'Bu ne kadar?'], ['trop cher', 'tro SHER', 'çok pahalı'], ['bon marché', 'bon mar-SHAY', 'ucuz'], ['essayer', 'e-say-YAY', 'denemek'], ['acheter', 'ash-TAY', 'satın almak'], ['payer', 'pay-YAY', 'ödemek'], ['la taille', 'la TAY', 'beden'], ['la couleur', 'la ku-LÖR', 'renk']], 'Alışveriş', 'Combien ça coûte? = fiyat sor.');
const L7 = frLesson('Directions', [['Où est...?', 'u E', '... nerede?'], ['à gauche', 'a GOSH', 'sola'], ['à droite', 'a DRWAT', 'sağa'], ['tout droit', 'tu DRWA', 'düz'], ['la rue', 'la RÜ', 'cadde'], ['la gare', 'la GAR', 'istasyon'], ['près de', 'pre də', 'yakında']], 'Yön Tarifi', 'à gauche, à droite, tout droit.');
const L8 = frLesson('Transport & Travel', [['le train', 'lə TRAN', 'tren'], ['le bus', 'lə BÜS', 'otobüs'], ['le métro', 'lə may-TRO', 'metro'], ['l\\'avion', 'la-VYON', 'uçak'], ['le billet', 'lə bi-LAY', 'bilet'], ['partir', 'par-TIR', 'kalkmak'], ['arriver', 'a-ri-VAY', 'varmak']], 'Ulaşım', 'Un billet pour Paris = Paris bileti.');
const L9 = frLesson('Hotel & Accommodation', [['l\\'hôtel', 'lo-TEL', 'otel'], ['la chambre', 'la SHOM-br', 'oda'], ['la réservation', 'la ray-zer-va-SYON', 'rezervasyon'], ['le petit-déjeuner', 'lə pə-ti day-zhə-NAY', 'kahvaltı'], ['la clé', 'la KLAY', 'anahtar'], ['s\\'enregistrer', 'san-re-zhee-STRE', 'check-in']], 'Otel', 'J\\'ai une réservation = Rezervasyonum var.');
const L10 = frLesson('Work & Business', [['le travail', 'lə tra-VAY', 'iş'], ['le métier', 'lə may-TYAY', 'meslek'], ['le bureau', 'lə bü-RO', 'ofis'], ['la réunion', 'la ray-ü-NYON', 'toplantı'], ['le salaire', 'lə sa-LER', 'maaş'], ['le contrat', 'lə kon-TRA', 'sözleşme']], 'İş', 'Quel est votre métier? = Mesleğiniz ne?');
const L11 = frLesson('Health', [['le médecin', 'lə mayd-SAN', 'doktor'], ['l\\'hôpital', 'lo-pee-TAL', 'hastane'], ['malade', 'ma-LAD', 'hasta'], ['la fièvre', 'la FYEV-r', 'ateş'], ['le rendez-vous', 'lə ron-day-VU', 'randevu'], ['Bon rétablissement!', 'bon ray-ta-blis-MON', 'Geçmiş olsun!']], 'Sağlık', 'J\\'ai mal à la tête = Başım ağrıyor.');
const L12 = frLesson('Phone & Communication', [['Allô, c\\'est...', 'a-LO SÉ', 'Alo, ... ben'], ['appeler', 'a-pə-LAY', 'aramak'], ['le message', 'lə me-SAZH', 'mesaj'], ['Pouvez-vous répéter?', 'pu-VAY vu ray-pay-TAY', 'Tekrar eder misiniz?'], ['Je ne comprends pas.', 'zhə nə kon-PRON pa', 'Anlamıyorum.']], 'Telefon', 'Allô, c\\'est Ali = Alo, Ali ben.');
const L13 = frLesson('Social Life', [['l\\'ami / l\\'amie', 'la-Mİ', 'arkadaş'], ['inviter', 'an-vee-TAY', 'davet etmek'], ['la fête', 'la FET', 'parti'], ['Joyeux anniversaire!', 'zhwa-YÖ a-ni-ver-SER', 'İyi ki doğdun!'], ['Santé!', 'san-TAY', 'Şerefe!'], ['se retrouver', 'sə rə-tru-VAY', 'buluşmak']], 'Sosyal', 'Tu veux venir? = Gelir misin?');
const L14 = frLesson('Home & Living', [['l\\'appartement', 'la-par-tə-MON', 'daire'], ['la maison', 'la may-ZON', 'ev'], ['la cuisine', 'la küi-ZIN', 'mutfak'], ['le loyer', 'lə lwa-YAY', 'kira'], ['déménager', 'day-may-na-ZHAY', 'taşınmak'], ['les voisins', 'lay vwa-ZAN', 'komşular']], 'Ev', 'J\\'habite à... = ...de yaşıyorum.');
const L15 = frLesson('Education & School', [['l\\'école', 'lay-KOL', 'okul'], ['l\\'université', 'ly-ni-ver-si-TAY', 'üniversite'], ['l\\'étudiant', 'lay-tü-DYAN', 'öğrenci'], ['le cours', 'lə KUR', 'kurs'], ['l\\'examen', 'leg-za-MON', 'sınav'], ['apprendre', 'a-pronDR', 'öğrenmek']], 'Eğitim', 'J\\'étudie le français = Fransızca öğreniyorum.');
const L16 = frLesson('Countries & Nationalities', [['la France', 'la FRONS', 'Fransa'], ['la Turquie', 'la tür-Kİ', 'Türkiye'], ['français', 'fron-SAY', 'Fransız'], ['turc', 'türk', 'Türk'], ['D\\'où venez-vous?', 'du və-NAY VU', 'Nerelisiniz?'], ['Je viens de...', 'zhə VYAN də', '...den geliyorum']], 'Ülkeler', 'Je viens de Turquie = Turkiyeden geliyorum.');
const L17 = frLesson('Emotions & Feelings', [['heureux', 'ö-RÖ', 'mutlu'], ['triste', 'trist', 'üzgün'], ['fatigué', 'fa-tee-GAY', 'yorgun'], ['content', 'kon-TON', 'memnun'], ['Je me sens...', 'zhə mə SON', 'Kendimi ... hissediyorum']], 'Duygular', 'Je suis fatigué = Yorgunum.');
const L18 = frLesson('Weather', [['le temps', 'lə TON', 'hava'], ['Quel temps fait-il?', 'kel TON fè-Til', 'Hava nasıl?'], ['Il pleut.', 'il PLÖ', 'Yağmur yağıyor.'], ['Il fait chaud.', 'il FÉ sho', 'Hava sıcak.'], ['Il fait froid.', 'il FÉ frwa', 'Hava soğuk.'], ['le parapluie', 'lə pa-ra-PLÜİ', 'şemsiye']], 'Hava', 'Il fait chaud/froid = Hava sıcak/soğuk.');
const L19 = frLesson('Entertainment & Hobbies', [['lire', 'lir', 'okumak'], ['jouer', 'zhu-WAY', 'oynamak'], ['voyager', 'vwa-ya-ZHAY', 'seyahat etmek'], ['le film', 'lə film', 'film'], ['le musée', 'lə mü-ZAY', 'müze'], ['faire du sport', 'fer dü SPOR', 'spor yapmak']], 'Hobiler', 'Qu\\'est-ce que tu fais? = Ne yapıyorsun?');
const L20 = frLesson('Daily Conversation Practice', [['Bonjour!', 'bon-ZHOOR', 'Merhaba!'], ['Comment allez-vous?', 'ko-MAN ta-lay-VU', 'Nasılsınız?'], ['Je vais bien.', 'zhə VAY BYAN', 'İyiyim.'], ['Pardon', 'par-DON', 'Pardon'], ['Je ne comprends pas.', 'zhə nə kon-PRON pa', 'Anlamıyorum.'], ['Lentement, s\\'il vous plaît.', 'lon-tə-MON sil vu PLE', 'Yavaş, lütfen.'], ['D\\'accord!', 'da-KOR', 'Tamam!']], 'Günlük Konuşma', 'Je ne comprends pas + Plus lentement = Anlamıyorum, yavaş lütfen.');

`;

export const FR_VOCAB = `{
  21: ['Verbes essentiels', [['être', 'ETR', 'olmak'], ['avoir', 'a-VWAR', 'sahip olmak'], ['faire', 'fer', 'yapmak'], ['aller', 'a-LAY', 'gitmek'], ['venir', 'və-NIR', 'gelmek'], ['voir', 'vwar', 'görmek'], ['savoir', 'sa-VWAR', 'bilmek'], ['pouvoir', 'pu-VWAR', 'ebilmek'], ['vouloir', 'vu-VWAR', 'istemek'], ['devoir', 'də-VWAR', 'zorunda olmak'], ['dire', 'dir', 'söylemek'], ['prendre', 'prondr', 'almak'], ['donner', 'do-NAY', 'vermek'], ['parler', 'par-LAY', 'konuşmak'], ['manger', 'mon-ZHAY', 'yemek'], ['travailler', 'tra-vay-YAY', 'çalışmak'], ['apprendre', 'a-pronDR', 'öğrenmek'], ['comprendre', 'kon-pronDR', 'anlamak'], ['chercher', 'sher-SHAY', 'aramak'], ['trouver', 'tru-VAY', 'bulmak']]],
  22: ['Adjectifs', [['grand', 'gron', 'büyük'], ['petit', 'pə-Tİ', 'küçük'], ['bon', 'bon', 'iyi'], ['mauvais', 'mo-VÉ', 'kötü'], ['nouveau', 'nu-Vo', 'yeni'], ['vieux', 'vyö', 'eski'], ['rapide', 'ra-PEED', 'hızlı'], ['lent', 'lon', 'yavaş'], ['facile', 'fa-SEEL', 'kolay'], ['difficile', 'di-fi-SEEL', 'zor'], ['beau', 'bo', 'güzel'], ['cher', 'sher', 'pahalı'], ['bon marché', 'bon mar-SHAY', 'ucuz'], ['important', 'an-por-TON', 'önemli'], ['intéressant', 'an-te-re-SON', 'ilginç'], ['chaud', 'sho', 'sıcak'], ['froid', 'frwa', 'soğuk'], ['heureux', 'ö-RÖ', 'mutlu'], ['triste', 'trist', 'üzgün']]],
  23: ['Personnes et relations', [['l\\'homme', 'lom', 'adam'], ['la femme', 'la fam', 'kadın'], ['l\\'enfant', 'lan-FON', 'çocuk'], ['le père', 'lə PER', 'baba'], ['la mère', 'la mer', 'anne'], ['le frère', 'lə frer', 'erkek kardeş'], ['la sœur', 'la sör', 'kız kardeş'], ['l\\'ami', 'la-Mİ', 'arkadaş'], ['le voisin', 'lə vwa-ZAN', 'komşu'], ['le collègue', 'lə ko-LEG', 'iş arkadaşı'], ['le professeur', 'lə pro-fə-SÖR', 'öğretmen'], ['le médecin', 'lə mayd-SAN', 'doktor'], ['la famille', 'la fa-MEE', 'aile']]],
  24: ['Ville et lieux', [['la ville', 'la vil', 'şehir'], ['la rue', 'la RÜ', 'cadde'], ['le marché', 'lə mar-SHAY', 'pazar'], ['le magasin', 'lə ma-ga-ZAN', 'mağaza'], ['la banque', 'la bonk', 'banka'], ['l\\'hôpital', 'lo-pee-TAL', 'hastane'], ['la pharmacie', 'la far-ma-SEE', 'eczane'], ['l\\'école', 'lay-KOL', 'okul'], ['la gare', 'la gar', 'istasyon'], ['l\\'aéroport', 'la-ay-ro-POR', 'havaalanı'], ['le musée', 'lə mü-ZAY', 'müze'], ['le restaurant', 'lə res-to-RON', 'restoran']]],
  25: ['Nourriture et boissons', [['la pomme', 'la pom', 'elma'], ['le pain', 'lə pan', 'ekmek'], ['le fromage', 'lə fro-MAZH', 'peynir'], ['la viande', 'la vyond', 'et'], ['le poulet', 'lə pu-LAY', 'tavuk'], ['le poisson', 'lə pwa-SON', 'balık'], ['l\\'eau', 'lo', 'su'], ['le café', 'lə ka-FAY', 'kahve'], ['le thé', 'lə TAY', 'çay'], ['le petit-déjeuner', 'lə pə-ti day-zhə-NAY', 'kahvaltı']]],
  26: ['Couleurs', [['rouge', 'ruzh', 'kırmızı'], ['bleu', 'blö', 'mavi'], ['vert', 'ver', 'yeşil'], ['jaune', 'zhon', 'sarı'], ['noir', 'nwar', 'siyah'], ['blanc', 'blon', 'beyaz'], ['gris', 'gri', 'gri'], ['marron', 'ma-RON', 'kahverengi'], ['orange', 'o-RONZH', 'turuncu'], ['violet', 'vyo-LÉ', 'mor'], ['rose', 'roz', 'pembe']]],
  27: ['Expressions de temps', [['aujourd\\'hui', 'o-zhur-DÜİ', 'bugün'], ['demain', 'də-MAN', 'yarın'], ['hier', 'yer', 'dün'], ['maintenant', 'man-tə-NON', 'şimdi'], ['bientôt', 'byan-TO', 'yakında'], ['toujours', 'tu-ZHOOR', 'her zaman'], ['parfois', 'par-FWA', 'bazen'], ['jamais', 'zha-MÉ', 'asla'], ['la semaine', 'la sə-MEN', 'hafta'], ['le mois', 'lə mwa', 'ay'], ['l\\'année', 'la-NAY', 'yıl']]],
  28: ['Sport et mouvement', [['le sport', 'lə spor', 'spor'], ['le football', 'lə fut-bol', 'futbol'], ['le tennis', 'lə te-NIS', 'tenis'], ['nager', 'na-ZHAY', 'yüzmek'], ['courir', 'ku-RIR', 'koşmak'], ['marcher', 'mar-SHAY', 'yürümek'], ['gagner', 'ga-NYAY', 'kazanmak'], ['perdre', 'perdr', 'kaybetmek'], ['l\\'équipe', 'lay-KEEP', 'takım']]],
  29: ['Travail et technologie', [['l\\'ordinateur', 'lor-di-na-TÖR', 'bilgisayar'], ['le téléphone', 'lə tay-lay-FON', 'telefon'], ['Internet', 'an-ter-NET', 'internet'], ['l\\'e-mail', 'li-MEL', 'e-posta'], ['le mot de passe', 'lə mo də pas', 'şifre'], ['télécharger', 'tay-lay-shar-ZHAY', 'indirmek'], ['le bureau', 'lə bü-RO', 'ofis']]],
  30: ['Voyage et tourisme', [['le voyage', 'lə vwa-YAZH', 'seyahat'], ['les vacances', 'lay va-KONS', 'tatil'], ['le passeport', 'lə pas-POR', 'pasaport'], ['la valise', 'la va-LEEZ', 'bavul'], ['l\\'hôtel', 'lo-TEL', 'otel'], ['la plage', 'la plazh', 'sahil'], ['la mer', 'la mer', 'deniz'], ['la carte', 'la kart', 'harita']]],
  31: ['Maison et meubles', [['le salon', 'lə sa-LON', 'oturma odası'], ['la chambre', 'la SHOM-br', 'oda'], ['la cuisine', 'la küi-ZIN', 'mutfak'], ['la porte', 'la port', 'kapı'], ['la fenêtre', 'la fə-NETR', 'pencere'], ['la table', 'la TABL', 'masa'], ['le lit', 'lə li', 'yatak']]],
  32: ['Vêtements', [['les vêtements', 'lay vet-MON', 'giysi'], ['la chemise', 'la shə-MEEZ', 'gömlek'], ['le pantalon', 'lə pon-ta-LON', 'pantolon'], ['la robe', 'la rob', 'elbise'], ['la veste', 'la vest', 'ceket'], ['les chaussures', 'lay sho-SÜR', 'ayakkabılar'], ['essayer', 'e-say-YAY', 'denemek']]],
  33: ['Nature et environnement', [['la nature', 'la na-TÜR', 'doğa'], ['la forêt', 'la fo-RÉ', 'orman'], ['l\\'arbre', 'larbr', 'ağaç'], ['la fleur', 'la flör', 'çiçek'], ['la montagne', 'la mon-TAN-yə', 'dağ'], ['la mer', 'la mer', 'deniz'], ['le soleil', 'lə so-LAY', 'güneş'], ['la pluie', 'la PLÜİ', 'yağmur'], ['la neige', 'la NEZH', 'kar']]],
  34: ['Argent et finances', [['l\\'argent', 'lar-ZHON', 'para'], ['l\\'euro', 'lö-RO', 'euro'], ['la banque', 'la bonk', 'banka'], ['payer', 'pay-YAY', 'ödemek'], ['coûter', 'ku-TAY', 'mal olmak'], ['le prix', 'lə pri', 'fiyat'], ['le loyer', 'lə lwa-YAY', 'kira'], ['le salaire', 'lə sa-LER', 'maaş']]],
  35: ['Science et recherche', [['la science', 'la syons', 'bilim'], ['la recherche', 'la rə-SHERCH', 'araştırma'], ['le laboratoire', 'lə la-bo-ra-TWAR', 'laboratuvar'], ['la chimie', 'la shee-Mİ', 'kimya'], ['la physique', 'la fi-ZİK', 'fizik'], ['la biologie', 'la byo-lo-ZHEE', 'biyoloji'], ['l\\'ingénieur', 'lan-zhe-nyÖR', 'mühendis']]],
  36: ['Art et culture', [['l\\'art', 'lar', 'sanat'], ['la culture', 'la kül-TÜR', 'kültür'], ['le musée', 'lə mü-ZAY', 'müze'], ['le concert', 'lə kon-SER', 'konser'], ['le théâtre', 'lə tay-A-tr', 'tiyatro'], ['la musique', 'la mü-ZİK', 'müzik'], ['le livre', 'lə LIV-rə', 'kitap']]],
  37: ['Mots interrogatifs', [['qui', 'ki', 'kim'], ['que / quoi', 'kə / kwa', 'ne'], ['où', 'u', 'nerede'], ['quand', 'kon', 'ne zaman'], ['comment', 'ko-MON', 'nasıl'], ['pourquoi', 'pur-KWA', 'neden'], ['combien', 'kon-BYAN', 'ne kadar'], ['quel', 'kel', 'hangi']]],
  38: ['Professions', [['le médecin', 'lə mayd-SAN', 'doktor'], ['le professeur', 'lə pro-fə-SÖR', 'öğretmen'], ['l\\'ingénieur', 'lan-zhe-nyÖR', 'mühendis'], ['le cuisinier', 'lə küi-zi-NYAY', 'aşçı'], ['le serveur', 'lə ser-VÖR', 'garson'], ['le policier', 'lə po-li-SYAY', 'polis'], ['l\\'avocat', 'la-vo-KA', 'avukat'], ['l\\'étudiant', 'lay-tü-DYAN', 'öğrenci']]],
  39: ['Pensée et opinion', [['penser', 'pon-SAY', 'düşünmek'], ['croire', 'krwar', 'inanmak'], ['comprendre', 'kon-pronDR', 'anlamak'], ['l\\'opinion', 'lo-pi-NYON', 'görüş'], ['Je pense que...', 'zhə PONS kə', 'Sanırım ki...'], ['Peut-être', 'pö-TETR', 'belki'], ['C\\'est vrai!', 'SÉ vré', 'Doğru!']]],
  40: ['Animaux', [['le chien', 'lə SHYAN', 'köpek'], ['le chat', 'lə sha', 'kedi'], ['le cheval', 'lə shə-VAL', 'at'], ['la vache', 'la vash', 'inek'], ['l\\'oiseau', 'lwa-ZO', 'kuş'], ['l\\'ours', 'lurs', 'ayı'], ['le lion', 'lə ly-ON', 'aslan'], ['le poisson', 'lə pwa-SON', 'balık']]],
  41: ['Vocabulaire santé', [['la santé', 'la son-TAY', 'sağlık'], ['malade', 'ma-LAD', 'hasta'], ['la douleur', 'la du-LÖR', 'ağrı'], ['la fièvre', 'la FYEV-r', 'ateş'], ['le médicament', 'lə may-di-ka-MON', 'ilaç'], ['l\\'hôpital', 'lo-pee-TAL', 'hastane'], ['guérir', 'gay-RIR', 'iyileşmek']]],
  42: ['Français académique', [['l\\'université', 'ly-ni-ver-si-TAY', 'üniversite'], ['le cours', 'lə KUR', 'ders'], ['l\\'examen', 'leg-za-MON', 'sınav'], ['le devoir', 'lə də-VWAR', 'ödev'], ['l\\'étudiant', 'lay-tü-DYAN', 'öğrenci'], ['réussir', 'ray-ü-SIR', 'geçmek'], ['la bibliothèque', 'la bi-ble-o-TEK', 'kütüphane']]],
  43: ['Technologie et vie numérique', [['l\\'ordinateur', 'lor-di-na-TÖR', 'bilgisayar'], ['le smartphone', 'lə smar-FON', 'telefon'], ['Internet', 'an-ter-NET', 'internet'], ['l\\'application', 'la-pli-ka-SYON', 'uygulama'], ['télécharger', 'tay-lay-shar-ZHAY', 'indirmek'], ['supprimer', 'sü-pri-MYAY', 'silmek']]],
  44: ['Expressions sociales', [['Félicitations!', 'fay-li-si-ta-SYON', 'Tebrikler!'], ['Joyeux anniversaire!', 'zhwa-YÖ a-ni-ver-SER', 'İyi ki doğdun!'], ['Bon appétit!', 'bon apay-Tİ', 'Afiyet olsun!'], ['Santé!', 'san-TAY', 'Şerefe!'], ['Bienvenue!', 'byan-və-NÜ', 'Hoş geldiniz!'], ['Je suis désolé.', 'zhə sÜ de-zo-LAY', 'Üzgünüm.'], ['De rien.', 'də RYAN', 'Rica ederim.'], ['À bientôt!', 'a byan-TO', 'Yakında görüşürüz!']]],
  45: ['Géographie et monde', [['le monde', 'lə mond', 'dünya'], ['l\\'Europe', 'lü-ROP', 'Avrupa'], ['l\\'Asie', 'la-Zİ', 'Asya'], ['la France', 'la FRONS', 'Fransa'], ['la Turquie', 'la tür-Kİ', 'Türkiye'], ['l\\'Allemagne', 'lar-le-MAN-yə', 'Almanya'], ['la capitale', 'la ka-pee-TAL', 'başkent']]],
  46: ['Verbes d\\'action', [['aller', 'a-LAY', 'gitmek'], ['venir', 'və-NIR', 'gelmek'], ['marcher', 'mar-SHAY', 'yürümek'], ['courir', 'ku-RIR', 'koşmak'], ['ouvrir', 'u-VRIR', 'açmak'], ['fermer', 'fer-MAY', 'kapatmak'], ['donner', 'do-NAY', 'vermek'], ['prendre', 'prondr', 'almak'], ['acheter', 'ash-TAY', 'satın almak']]],
  47: ['Histoire et société', [['l\\'histoire', 'lis-TWAR', 'tarih'], ['la guerre', 'la ger', 'savaş'], ['la paix', 'la pe', 'barış'], ['la liberté', 'la li-ber-TAY', 'özgürlük'], ['la société', 'la so-sye-TAY', 'toplum'], ['Noël', 'no-EL', 'Noel'], ['voter', 'vo-TAY', 'oy vermek']]],
  48: ['Expressions et proverbes', [['Tout va bien.', 'tu va BYAN', 'Her şey yolunda.'], ['Je ne comprends rien.', 'zhə nə kon-PRON RYAN', 'Hiçbir şey anlamıyorum.'], ['C\\'est la vie.', 'SÉ la vi', 'Hayat böyle.'], ['Petit à petit.', 'pə-Tİ a pə-Tİ', 'Yavaş yavaş.'], ['Qui vivra verra.', 'ki vi-vra ve-RA', 'Göreceğiz.']]],
  49: ['Révision avancée', [['bien que', 'byan kə', 'rağmen'], ['cependant', 'sə-pon-DON', 'ancak'], ['donc', 'donk', 'bu yüzden'], ['soit... soit', 'swa ... swa', 'ya... ya da'], ['ni... ni', 'ni ... ni', 'ne... ne de'], ['dès que', 'dé kə', '... r olur olmaz'], ['avant que', 'a-VON kə', '... den önce'], ['jusqu\\'à', 'zhüs-KA', '... e kadar'], ['depuis', 'də-PÜİ', '... den beri'], ['sans', 'son', '... siz'], ['malgré', 'mal-GRAY', '... e rağmen']]]}
`;

