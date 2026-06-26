// ─── L4-L20 scenario data & builders ─────────────────────────

function mkWords(rows) {
  return rows.map(([en, ro, tr], i) => [null, en, ro, tr, i === 0 ? { tip: 'Temel kelime.', ctx: 'Günlük konuşma.' } : {}]);
}

function mkSimple(code, title, rows, sampleLine) {
  const words = mkScenarioWords(mkWords(rows));
  const w0 = rows[0][0].replace(/'/g, "\\'");
  const t0 = rows[0][2].replace(/'/g, "\\'");
  return scenario(title, words,
    [G('g1', `${title} — Temel`, `${title} — Basics`,
      `Bu derste ${title} konusunda temel kelimeler öğreniyorsun. Türkçe gramer açıklamaları her kuralda verilir. Ali erkek öğrenci olarak bu ifadeleri kullanır.`,
      [{ pronoun: 'Örnek', form: w0, example: w0, tr: t0 },
       { pronoun: 'Pratik', form: rows[1][0], example: rows[1][0], tr: rows[1][2] }],
      'Kelime + artikel (varsa) birlikte ezberle.')],
    [SP('sp1', w0, t0, 'İfade et'),
     SP('sp2', rows[1][0], rows[1][2], 'Kelime kullan'),
     SP('sp3', rows[2][0], rows[2][2], 'Cümle kur'),
     SP('sp4', rows[3][0], rows[3][2], 'Soru sor'),
     SP('sp5', rows[4][0], rows[4][2], 'Konuşma pratiği')],
    [DL('d1', title, title, [
      LN('A', 'm', rows[0][0], rows[0][2], 'Ali konuşuyor.', [BD(rows[0][0], rows[0][2], 'phrase', 'Örnek.')]),
      LN('B', 'f', rows[1][0], rows[1][2], 'Karşılık.', [BD(rows[1][0], rows[1][2], 'phrase', 'Cevap.')]),
      LN('A', 'm', rows[2][0], rows[2][2], null, []),
      LN('B', 'f', rows[3][0], rows[3][2], null, [])
    ])],
    [LI('li1', sampleLine, sampleLine.split('.')[0] + '.',
      [Q('?', [rows[0][0], rows[1][0], rows[2][0], rows[3][0]], 0, 'Doğru kelime?'),
       Q('??', [rows[1][0], rows[2][0], rows[3][0], rows[4][0]], 1, 'İkinci soru?')])]
  );
}

const TOPIC_ROWS = {
  4: {
    title: 'Time & Date',
    es: [['¿Qué hora es?', 'kay O-ra es', 'Saat kaç?'], ['Son las tres', 'son las tres', 'Saat üç'], ['la mañana', 'la ma-NYA-na', 'sabah'], ['hoy', 'oy', 'bugün'], ['lunes', 'LU-nes', 'Pazartesi'], ['enero', 'e-NE-ro', 'Ocak'], ['¿Cuándo?', 'KWAN-do', 'Ne zaman?'], ['¿A qué hora?', 'a kay O-ra', 'Saat kaçta?'], ['mañana', 'ma-NYA-na', 'yarın'], ['ayer', 'a-YER', 'dün'], ['la tarde', 'la TAR-de', 'öğleden sonra'], ['la noche', 'la NO-che', 'gece'], ['martes', 'MAR-tes', 'Salı'], ['miércoles', 'MYER-ko-les', 'Çarşamba'], ['jueves', 'HWE-ves', 'Perşembe'], ['viernes', 'BYER-nes', 'Cuma'], ['sábado', 'SA-ba-do', 'Cumartesi'], ['domingo', 'do-MIN-go', 'Pazar'], ['julio', 'HU-lyo', 'Temmuz'], ['la semana', 'la se-MA-na', 'hafta']],
    it: [['Che ore sono?', 'kay O-re SO-no', 'Saat kaç?'], ['Sono le tre', 'SO-no le tre', 'Saat üç'], ['la mattina', 'la mat-TI-na', 'sabah'], ['oggi', 'OD-dji', 'bugün'], ['lunedì', 'lu-ne-DI', 'Pazartesi'], ['gennaio', 'jen-NA-yo', 'Ocak'], ['Quando?', 'KWAN-do', 'Ne zaman?'], ['A che ora?', 'a kay O-ra', 'Saat kaçta?'], ['domani', 'do-MA-ni', 'yarın'], ['ieri', 'YE-ri', 'dün'], ['il pomeriggio', 'il po-me-RID-jo', 'öğleden sonra'], ['la sera', 'la SE-ra', 'akşam'], ['martedì', 'mar-te-DI', 'Salı'], ['mercoledì', 'mer-ko-le-DI', 'Çarşamba'], ['giovedì', 'jo-ve-DI', 'Perşembe'], ['venerdì', 've-ner-DI', 'Cuma'], ['sabato', 'SA-ba-to', 'Cumartesi'], ['domenica', 'do-ME-ni-ka', 'Pazar'], ['luglio', 'LU-lyo', 'Temmuz'], ['la settimana', 'la set-ti-MA-na', 'hafta']],
    fr: [['Quelle heure est-il?', 'kel œr e-til', 'Saat kaç?'], ['Il est trois heures', 'il e trwa œr', 'Saat üç'], ['le matin', 'lə ma-TAN', 'sabah'], ['aujourd\'hui', 'o-ʒuʁ-DÜİ', 'bugün'], ['lundi', 'lən-DI', 'Pazartesi'], ['janvier', 'ʒɑ̃-VYE', 'Ocak'], ['Quand?', 'kɑ̃', 'Ne zaman?'], ['À quelle heure?', 'a kel œr', 'Saat kaçta?'], ['demain', 'də-MAN', 'yarın'], ['hier', 'YER', 'dün'], ['l\'après-midi', 'la-prɛ-mi-DI', 'öğleden sonra'], ['le soir', 'lə SWAR', 'akşam'], ['mardi', 'mar-DI', 'Salı'], ['mercredi', 'mɛʁ-krə-DI', 'Çarşamba'], ['jeudi', 'ʒə-DÜİ', 'Perşembe'], ['vendredi', 'vɑ̃-drə-DI', 'Cuma'], ['samedi', 'sam-DI', 'Cumartesi'], ['dimanche', 'di-Mɑ̃ʃ', 'Pazar'], ['juillet', 'ʒüi-YE', 'Temmuz'], ['la semaine', 'la sə-MEN', 'hafta']],
    sample: { es: 'Hoy es miércoles. La clase empieza a las nueve.', it: 'Oggi è mercoledì. La lezione inizia alle nove.', fr: 'Aujourd\'hui c\'est mercredi. Le cours commence à neuf heures.' }
  },
  5: { title: 'Restaurant & Food',
    es: [['Una mesa para dos, por favor.', 'U-na ME-sa', 'İki kişilik masa, lütfen.'], ['la carta', 'la KAR-ta', 'menü'], ['pedir', 'pe-DIR', 'sipariş vermek'], ['Quisiera...', 'ki-SYE-ra', '... istiyorum'], ['el agua', 'el A-gwa', 'su'], ['el café', 'el ka-FE', 'kahve'], ['el pan', 'el pan', 'ekmek'], ['la sopa', 'la SO-pa', 'çorba'], ['la ensalada', 'la en-sa-LA-da', 'salata'], ['el pollo', 'el PO-lyo', 'tavuk'], ['el pescado', 'el pes-KA-do', 'balık'], ['vegetariano', 've-ge-ta-RYA-no', 'vejetaryen'], ['delicioso', 'de-li-SYO-so', 'lezzetli'], ['la cuenta', 'la KWEN-ta', 'hesap'], ['la reserva', 'la re-SER-va', 'rezervasyon'], ['el postre', 'el POS-tre', 'tatlı'], ['el entrante', 'el en-TRAN-te', 'başlangıç'], ['el plato principal', 'el PLA-to', 'ana yemek'], ['la bebida', 'la be-BI-da', 'içecek'], ['¡Buen provecho!', 'bwen pro-VE-cho', 'Afiyet olsun!']],
    it: [['Un tavolo per due, per favore.', 'un TA-vo-lo', 'İki kişilik masa, lütfen.'], ['il menù', 'il me-NU', 'menü'], ['ordinare', 'or-di-NA-re', 'sipariş vermek'], ['Vorrei...', 'vor-REI', '... istiyorum'], ['l\'acqua', 'LAK-kwa', 'su'], ['il caffè', 'il kaf-FE', 'kahve'], ['il pane', 'il PA-ne', 'ekmek'], ['la zuppa', 'la TSUP-pa', 'çorba'], ['l\'insalata', 'lin-sa-LA-ta', 'salata'], ['il pollo', 'il POL-lo', 'tavuk'], ['il pesce', 'il PE-she', 'balık'], ['vegetariano', 've-ge-ta-RYA-no', 'vejetaryen'], ['delizioso', 'de-LIT-syo-zo', 'lezzetli'], ['il conto', 'il KON-to', 'hesap'], ['la prenotazione', 'la pre-no-ta-TSYO-ne', 'rezervasyon'], ['il dolce', 'il DOL-che', 'tatlı'], ['l\'antipasto', 'lan-ti-PAS-to', 'başlangıç'], ['il piatto principale', 'il PYAT-to', 'ana yemek'], ['la bevanda', 'la be-VAN-da', 'içecek'], ['Buon appetito!', 'bwon ap-pe-TI-to', 'Afiyet olsun!']],
    fr: [['Une table pour deux, s\'il vous plaît.', 'ün TABL', 'İki kişilik masa, lütfen.'], ['la carte', 'la kart', 'menü'], ['commander', 'ko-mɑ̃-DE', 'sipariş vermek'], ['Je voudrais...', 'zhə vud-Rɛ', '... istiyorum'], ['l\'eau', 'lo', 'su'], ['le café', 'lə ka-FE', 'kahve'], ['le pain', 'lə pɛ̃', 'ekmek'], ['la soupe', 'la sup', 'çorba'], ['la salade', 'la sa-LAD', 'salata'], ['le poulet', 'lə pu-Lɛ', 'tavuk'], ['le poisson', 'lə pwa-Sɔ̃', 'balık'], ['végétarien', 've-ʒe-ta-RYɛ̃', 'vejetaryen'], ['délicieux', 'de-li-SJø', 'lezzetli'], ['l\'addition', 'la-di-SYON', 'hesap'], ['la réservation', 'la re-ze-va-SYON', 'rezervasyon'], ['le dessert', 'lə de-Sɛʁ', 'tatlı'], ['l\'entrée', 'lɑ̃-tʁe', 'başlangıç'], ['le plat principal', 'lə pla', 'ana yemek'], ['la boisson', 'la bwa-Sɔ̃', 'içecek'], ['Bon appétit!', 'bɔ̃ na-pe-TI', 'Afiyet olsun!']],
    sample: { es: 'Quisiera la sopa y un café, por favor.', it: 'Vorrei la zuppa e un caffè, per favore.', fr: 'Je voudrais la soupe et un café, s\'il vous plaît.' }
  },
  6: { title: 'Shopping',
    es: [['¿Dónde encuentro...?', 'DON-de en-KWEN-tro', '... nerede bulabilirim?'], ['¿Cuánto cuesta?', 'KWAN-to KWES-ta', 'Bu ne kadar?'], ['muy caro', 'muy KA-ro', 'çok pahalı'], ['barato', 'ba-RA-to', 'ucuz'], ['el descuento', 'des-KWEN-to', 'indirim'], ['la talla', 'la TA-lya', 'beden'], ['el color', 'el ko-LOR', 'renk'], ['probarse', 'pro-BAR-se', 'denemek'], ['el probador', 'pro-ba-DOR', 'deneme kabini'], ['quedar bien', 'ke-DAR byen', 'uymak'], ['comprar', 'kom-PRAR', 'satın almak'], ['pagar', 'pa-GAR', 'ödemek'], ['el recibo', 're-CI-bo', 'fiş'], ['cambiar', 'kam-BYAR', 'değiştirmek'], ['la oferta', 'la o-FER-ta', 'özel teklif'], ['la tienda', 'la TYEN-da', 'mağaza'], ['el precio', 'el PRE-syo', 'fiyat'], ['grande', 'GRAN-de', 'büyük (beden)'], ['pequeño', 'pe-KE-nyo', 'küçük'], ['¿Tiene...?', 'TYE-ne', '... var mı?']],
    it: [['Dove trovo...?', 'DO-ve TRO-vo', '... nerede bulabilirim?'], ['Quanto costa?', 'KWAN-to KOS-ta', 'Bu ne kadar?'], ['troppo caro', 'TROP-po KA-ro', 'çok pahalı'], ['economico', 'e-ko-NO-mi-ko', 'ucuz'], ['lo sconto', 'lo SKON-to', 'indirim'], ['la taglia', 'la TA-lya', 'beden'], ['il colore', 'il ko-LO-re', 'renk'], ['provare', 'pro-VA-re', 'denemek'], ['il camerino', 'il ka-me-RI-no', 'deneme kabini'], ['andare bene', 'an-DA-re BE-ne', 'uymak'], ['comprare', 'kom-PRA-re', 'satın almak'], ['pagare', 'pa-GA-re', 'ödemek'], ['lo scontrino', 'skon-TRI-no', 'fiş'], ['cambiare', 'kam-BYA-re', 'değiştirmek'], ['l\'offerta', 'lof-FER-ta', 'özel teklif'], ['il negozio', 'il ne-GO-tsyo', 'mağaza'], ['il prezzo', 'il PRET-tso', 'fiyat'], ['grande', 'GRAN-de', 'büyük'], ['piccolo', 'PIK-ko-lo', 'küçük'], ['Ha...?', 'a', '... var mı?']],
    fr: [['Où est-ce que je trouve...?', 'u ɛs kə zhə truv', '... nerede bulabilirim?'], ['Combien ça coûte?', 'kɔ̃-byɛ̃ sa kut', 'Bu ne kadar?'], ['trop cher', 'tro ʃɛʁ', 'çok pahalı'], ['bon marché', 'bɔ̃ marʃe', 'ucuz'], ['la réduction', 'la re-dyk-SYON', 'indirim'], ['la taille', 'la taj', 'beden'], ['la couleur', 'la ku-lœʁ', 'renk'], ['essayer', 'e-se-JE', 'denemek'], ['la cabine', 'la ka-bin', 'deneme kabini'], ['aller bien', 'a-le bjɛ̃', 'uymak'], ['acheter', 'aʃ-te', 'satın almak'], ['payer', 'pɛ-JE', 'ödemek'], ['le reçu', 'lə rə-SÜ', 'fiş'], ['échanger', 'e-ʃɑ̃-ʒe', 'değiştirmek'], ['l\'offre', 'lɔfʁ', 'özel teklif'], ['le magasin', 'lə ma-ga-Zɛ̃', 'mağaza'], ['le prix', 'lə pʁi', 'fiyat'], ['grand', 'grɑ̃', 'büyük'], ['petit', 'pə-ti', 'küçük'], ['Avez-vous...?', 'a-ve-VU', '... var mı?']],
    sample: { es: '¿Cuánto cuesta esta chaqueta?', it: 'Quanto costa questa giacca?', fr: 'Combien coûte cette veste?' }
  }
};

// Add L7-L20 with shared TR rows pattern
const MORE_TOPICS = [
  [7, 'Directions', {
    es: ['¿Dónde está...?', 'a la izquierda', 'a la derecha', 'todo recto', 'la esquina', 'la calle', 'la estación', 'la parada', 'el semáforo', 'cruzar', 'el cruce', 'cerca', 'lejos', 'el mapa', 'la dirección', 'seguir', 'girar', 'la plaza', 'el banco', '¿Cómo llego a...?'],
    it: ['Dov\'è...?', 'a sinistra', 'a destra', 'dritto', 'l\'angolo', 'la strada', 'la stazione', 'la fermata', 'il semaforo', 'attraversare', 'l\'incrocio', 'vicino', 'lontano', 'la mappa', 'la direzione', 'seguire', 'girare', 'la piazza', 'la banca', 'Come arrivo a...?'],
    fr: ['Où est...?', 'à gauche', 'à droite', 'tout droit', 'le coin', 'la rue', 'la gare', 'l\'arrêt', 'le feu', 'traverser', 'le carrefour', 'près de', 'loin de', 'la carte', 'la direction', 'suivre', 'tourner', 'la place', 'la banque', 'Comment aller à...?']
  }, ['... nerede?', 'sol', 'sağ', 'düz', 'köşe', 'cadde', 'istasyon', 'durak', 'trafik lambası', 'karşıdan geçmek', 'kavşak', 'yakında', 'uzakta', 'harita', 'yön', 'takip etmek', 'dönmek', 'meydan', 'banka', '... nasıl giderim?']],
  [8, 'Transport & Travel', {
    es: ['el tren', 'el autobús', 'el metro', 'el avión', 'el aeropuerto', 'el billete', 'subir', 'bajar', 'hacer transbordo', 'el andén', 'salir', 'llegar', 'el viaje', 'el equipaje', 'el pasaporte', 'la frontera', 'la salida', 'la llegada', 'retrasado', '¿A qué hora sale?'],
    it: ['il treno', 'l\'autobus', 'la metropolitana', 'l\'aereo', 'l\'aeroporto', 'il biglietto', 'salire', 'scendere', 'fare cambio', 'il binario', 'partire', 'arrivare', 'il viaggio', 'il bagaglio', 'il passaporto', 'la frontiera', 'la partenza', 'l\'arrivo', 'in ritardo', 'A che ora parte?'],
    fr: ['le train', 'le bus', 'le métro', 'l\'avion', 'l\'aéroport', 'le billet', 'monter', 'descendre', 'changer', 'le quai', 'partir', 'arriver', 'le voyage', 'les bagages', 'le passeport', 'la frontière', 'le départ', 'l\'arrivée', 'en retard', 'À quelle heure part-il?']
  }, ['tren', 'otobüs', 'metro', 'uçak', 'havaalanı', 'bilet', 'binmek', 'inmek', 'aktarma', 'peron', 'kalkmak', 'varmak', 'yolculuk', 'bagaj', 'pasaport', 'sınır', 'kalkış', 'varış', 'gecikmeli', 'Ne zaman kalkıyor?']],
  [9, 'Hotel & Accommodation', {
    es: ['el hotel', 'la recepción', 'la habitación', 'hacer check-in', 'hacer check-out', 'la llave', 'habitación individual', 'habitación doble', 'el desayuno', 'wifi', 'el aire acondicionado', 'la reserva', 'la cama', 'el baño', 'la ducha', 'la toalla', 'la limpieza', 'una noche', '¿Hay wifi?', '¿A qué hora es el desayuno?'],
    it: ['l\'hotel', 'la reception', 'la camera', 'fare il check-in', 'fare il check-out', 'la chiave', 'camera singola', 'camera doppia', 'la colazione', 'wifi', 'l\'aria condizionata', 'la prenotazione', 'il letto', 'il bagno', 'la doccia', 'l\'asciugamano', 'la pulizia', 'una notte', 'C\'è il wifi?', 'A che ora è la colazione?'],
    fr: ['l\'hôtel', 'la réception', 'la chambre', 'faire le check-in', 'faire le check-out', 'la clé', 'chambre simple', 'chambre double', 'le petit-déjeuner', 'wifi', 'la climatisation', 'la réservation', 'le lit', 'la salle de bain', 'la douche', 'la serviette', 'le ménage', 'une nuit', 'Y a-t-il le wifi?', 'À quelle heure est le petit-déjeuner?']
  }, ['otel', 'resepsiyon', 'oda', 'giriş yapmak', 'çıkış yapmak', 'anahtar', 'tek kişilik oda', 'çift kişilik oda', 'kahvaltı', 'wifi', 'klima', 'rezervasyon', 'yatak', 'banyo', 'duş', 'havlu', 'temizlik', 'bir gece', 'WiFi var mı?', 'Kahvaltı ne zaman?']],
  [10, 'Work & Business', {
    es: ['el trabajo', 'la profesión', 'el compañero', 'el jefe', 'la oficina', 'la reunión', 'el contrato', 'el salario', 'la solicitud', 'la entrevista', 'tiempo completo', 'fin de jornada', 'el horario', 'la empresa', 'el cliente', 'el proyecto', 'la experiencia', '¿A qué se dedica?', 'Soy...', 'Trabajo como...'],
    it: ['il lavoro', 'la professione', 'il collega', 'il capo', 'l\'ufficio', 'la riunione', 'il contratto', 'lo stipendio', 'la domanda', 'il colloquio', 'tempo pieno', 'fine giornata', 'l\'orario', 'l\'azienda', 'il cliente', 'il progetto', 'l\'esperienza', 'Che lavoro fa?', 'Sono...', 'Lavoro come...'],
    fr: ['le travail', 'le métier', 'le collègue', 'le patron', 'le bureau', 'la réunion', 'le contrat', 'le salaire', 'la candidature', 'l\'entretien', 'temps plein', 'fin de journée', 'l\'horaire', 'l\'entreprise', 'le client', 'le projet', 'l\'expérience', 'Que faites-vous?', 'Je suis...', 'Je travaille comme...']
  }, ['iş', 'meslek', 'iş arkadaşı', 'patron', 'ofis', 'toplantı', 'sözleşme', 'maaş', 'başvuru', 'görüşme', 'tam zamanlı', 'iş çıkışı', 'çalışma saati', 'şirket', 'müşteri', 'proje', 'deneyim', 'Ne iş yapıyorsunuz?', 'Ben ...yim', '... olarak çalışıyorum']],
  [11, 'Health', {
    es: ['el médico', 'el hospital', 'la farmacia', 'enfermo', 'el dolor', 'la fiebre', 'la tos', 'el resfriado', 'el medicamento', 'la cita', 'el seguro', '¡Que te mejores!', 'la receta', 'la emergencia', 'la alergia', 'mareado', 'la herida', 'descansar', 'Necesito un médico', 'Me duele...'],
    it: ['il medico', 'l\'ospedale', 'la farmacia', 'malato', 'il dolore', 'la febbre', 'la tosse', 'il raffreddore', 'il medicinale', 'l\'appuntamento', 'l\'assicurazione', 'Guarisci presto!', 'la ricetta', 'l\'emergenza', 'l\'allergia', 'stordito', 'la ferita', 'riposare', 'Ho bisogno di un medico', 'Mi fa male...'],
    fr: ['le médecin', 'l\'hôpital', 'la pharmacie', 'malade', 'la douleur', 'la fièvre', 'la toux', 'le rhume', 'le médicament', 'le rendez-vous', 'l\'assurance', 'Bon rétablissement!', 'l\'ordonnance', 'l\'urgence', 'l\'allergie', 'étourdi', 'la blessure', 'se reposer', 'J\'ai besoin d\'un médecin', 'J\'ai mal...']
  }, ['doktor', 'hastane', 'eczane', 'hasta', 'ağrı', 'ateş', 'öksürük', 'soğuk algınlığı', 'ilaç', 'randevu', 'sigorta', 'Geçmiş olsun!', 'reçete', 'acil', 'alerji', 'baş dönmesi', 'yara', 'dinlenmek', 'Doktora ihtiyacım var', '... ağrıyor']],
  [12, 'Phone & Communication', {
    es: ['llamar', 'el mensaje', 'el correo', 'el número de teléfono', 'Hola, soy...', '¿Puede devolverme la llamada?', 'No puedo hablar ahora.', 'el buzón de voz', 'escribir', 'el contestador', 'ocupado', 'conectar', 'enviar', 'recibir', 'la llamada', 'colgar', '¿Está...?', 'Un momento', '¿Puede repetir?', 'Adiós'],
    it: ['chiamare', 'il messaggio', 'l\'email', 'il numero di telefono', 'Pronto, sono...', 'Può richiamarmi?', 'Non posso parlare ora.', 'la segreteria', 'scrivere', 'il segreteria telefonica', 'occupato', 'mettere in comunicazione', 'inviare', 'ricevere', 'la chiamata', 'riagganciare', 'È...?', 'Un momento', 'Può ripetere?', 'Arrivederci'],
    fr: ['appeler', 'le message', 'l\'e-mail', 'le numéro de téléphone', 'Allô, c\'est...', 'Pouvez-vous me rappeler?', 'Je ne peux pas parler maintenant.', 'la messagerie', 'écrire', 'le répondeur', 'occupé', 'mettre en relation', 'envoyer', 'recevoir', 'l\'appel', 'raccrocher', 'Est-ce que...?', 'Un moment', 'Pouvez-vous répéter?', 'Au revoir']
  }, ['aramak', 'mesaj', 'e-posta', 'telefon numarası', 'Merhaba, ... ben', 'Geri arayabilir misiniz?', 'Şu an konuşamıyorum.', 'sesli mesaj', 'yazmak', 'telesekreter', 'meşgul', 'bağlamak', 'göndermek', 'almak', 'arama', 'kapatmak', '... var mı?', 'Bir dakika', 'Tekrar edebilir misiniz?', 'Hoşça kalın']],
  [13, 'Social Life', {
    es: ['la fiesta', 'el cine', 'el concierto', 'salir', 'quedar', 'invitar', 'aceptar', 'rechazar', 'el amigo', 'divertido', 'aburrido', '¿Quedamos?', 'el café', 'la cerveza', 'celebrar', 'el cumpleaños', 'la invitación', 'el plan', '¿Qué haces este fin de semana?', 'Nos vemos'],
    it: ['la festa', 'il cinema', 'il concerto', 'uscire', 'incontrarsi', 'invitare', 'accettare', 'rifiutare', 'l\'amico', 'divertente', 'noioso', 'Ci vediamo?', 'il caffè', 'la birra', 'festeggiare', 'il compleanno', 'l\'invito', 'il programma', 'Cosa fai questo weekend?', 'Ci vediamo'],
    fr: ['la fête', 'le cinéma', 'le concert', 'sortir', 'se retrouver', 'inviter', 'accepter', 'refuser', 'l\'ami', 'amusant', 'ennuyeux', 'On se voit?', 'le café', 'la bière', 'fêter', 'l\'anniversaire', 'l\'invitation', 'le programme', 'Qu\'est-ce que tu fais ce week-end?', 'On se voit']
  }, ['parti', 'sinema', 'konser', 'dışarı çıkmak', 'buluşmak', 'davet etmek', 'kabul etmek', 'reddetmek', 'arkadaş', 'eğlenceli', 'sıkıcı', 'Buluşalım mı?', 'kahve', 'bira', 'kutlamak', 'doğum günü', 'davet', 'plan', 'Bu hafta sonu ne yapıyorsun?', 'Görüşürüz']],
  [14, 'Home & Living', {
    es: ['la casa', 'el piso', 'el alquiler', 'la cocina', 'el baño', 'el dormitorio', 'el salón', 'la puerta', 'la ventana', 'los muebles', 'la cama', 'la mesa', 'la silla', 'el sofá', 'el armario', 'la nevera', 'la lavadora', 'el balcón', 'el jardín', 'vivir'],
    it: ['la casa', 'l\'appartamento', 'l\'affitto', 'la cucina', 'il bagno', 'la camera', 'il soggiorno', 'la porta', 'la finestra', 'i mobili', 'il letto', 'il tavolo', 'la sedia', 'il divano', 'l\'armadio', 'il frigorifero', 'la lavatrice', 'il balcone', 'il giardino', 'vivere'],
    fr: ['la maison', 'l\'appartement', 'le loyer', 'la cuisine', 'la salle de bain', 'la chambre', 'le salon', 'la porte', 'la fenêtre', 'les meubles', 'le lit', 'la table', 'la chaise', 'le canapé', 'l\'armoire', 'le réfrigérateur', 'la machine à laver', 'le balcon', 'le jardin', 'habiter']
  }, ['ev', 'daire', 'kira', 'mutfak', 'banyo', 'yatak odası', 'oturma odası', 'kapı', 'pencere', 'mobilya', 'yatak', 'masa', 'sandalye', 'kanepe', 'dolap', 'buzdolabı', 'çamaşır makinesi', 'balkon', 'bahçe', 'yaşamak']],
  [15, 'Education & School', {
    es: ['la escuela', 'la universidad', 'el profesor', 'el estudiante', 'la clase', 'el examen', 'la tarea', 'estudiar', 'aprender', 'el libro', 'el cuaderno', 'la biblioteca', 'la lección', 'la nota', 'aprobar', 'suspender', 'el curso', 'la materia', 'la pregunta', 'la respuesta'],
    it: ['la scuola', 'l\'università', 'il professore', 'lo studente', 'la lezione', 'l\'esame', 'i compiti', 'studiare', 'imparare', 'il libro', 'il quaderno', 'la biblioteca', 'la classe', 'il voto', 'passare', 'bocciare', 'il corso', 'la materia', 'la domanda', 'la risposta'],
    fr: ['l\'école', 'l\'université', 'le professeur', 'l\'étudiant', 'le cours', 'l\'examen', 'les devoirs', 'étudier', 'apprendre', 'le livre', 'le cahier', 'la bibliothèque', 'la classe', 'la note', 'réussir', 'échouer', 'le cours', 'la matière', 'la question', 'la réponse']
  }, ['okul', 'üniversite', 'öğretmen', 'öğrenci', 'ders', 'sınav', 'ödev', 'çalışmak', 'öğrenmek', 'kitap', 'defter', 'kütüphane', 'sınıf', 'not', 'geçmek', 'kalmak', 'kurs', 'ders konusu', 'soru', 'cevap']],
  [16, 'Countries & Nationalities', {
    es: ['el país', 'la ciudad', 'España', 'Italia', 'Francia', 'Turquía', 'español', 'italiano', 'francés', 'turco', 'europeo', '¿De dónde eres?', 'Soy de...', 'vivir', 'nacer', 'la capital', 'el extranjero', 'el idioma', 'hablar', 'la cultura'],
    it: ['il paese', 'la città', 'Spagna', 'Italia', 'Francia', 'Turchia', 'spagnolo', 'italiano', 'francese', 'turco', 'europeo', 'Di dove sei?', 'Sono di...', 'vivere', 'nascere', 'la capitale', 'l\'estero', 'la lingua', 'parlare', 'la cultura'],
    fr: ['le pays', 'la ville', 'l\'Espagne', 'l\'Italie', 'la France', 'la Turquie', 'espagnol', 'italien', 'français', 'turc', 'européen', 'D\'où venez-vous?', 'Je viens de...', 'habiter', 'naître', 'la capitale', 'l\'étranger', 'la langue', 'parler', 'la culture']
  }, ['ülke', 'şehir', 'İspanya', 'İtalya', 'Fransa', 'Türkiye', 'İspanyol', 'İtalyan', 'Fransız', 'Türk', 'Avrupalı', 'Nerelisin?', '...liyim', 'yaşamak', 'doğmak', 'başkent', 'yurt dışı', 'dil', 'konuşmak', 'kültür']],
  [17, 'Emotions & Feelings', {
    es: ['feliz', 'triste', 'enfadado', 'nervioso', 'cansado', 'emocionado', 'preocupado', 'sorprendido', 'asustado', 'orgulloso', 'avergonzado', 'Me siento...', 'contento', 'ansioso', 'relajado', 'confundido', 'solo', 'enamorado', 'Estoy feliz', 'Estoy triste'],
    it: ['felice', 'triste', 'arrabbiato', 'nervoso', 'stanco', 'emozionato', 'preoccupato', 'sorpreso', 'spaventato', 'orgoglioso', 'imbarazzato', 'Mi sento...', 'contento', 'ansioso', 'rilassato', 'confuso', 'solo', 'innamorato', 'Sono felice', 'Sono triste'],
    fr: ['heureux', 'triste', 'en colère', 'nerveux', 'fatigué', 'excité', 'inquiet', 'surpris', 'effrayé', 'fier', 'gêné', 'Je me sens...', 'content', 'anxieux', 'détendu', 'confus', 'seul', 'amoureux', 'Je suis heureux', 'Je suis triste']
  }, ['mutlu', 'üzgün', 'kızgın', 'gergin', 'yorgun', 'heyecanlı', 'endişeli', 'şaşkın', 'korkmuş', 'gururlu', 'utanmış', 'Kendimi ... hissediyorum', 'memnun', 'kaygılı', 'rahat', 'kafası karışık', 'yalnız', 'aşık', 'Mutluyum', 'Üzgünüm']],
  [18, 'Weather', {
    es: ['el tiempo', 'el sol', 'la lluvia', 'la nieve', 'el viento', 'la nube', 'hace calor', 'hace frío', 'hace sol', 'llueve', 'nieva', '¿Qué tiempo hace?', 'la tormenta', 'húmedo', 'seco', 'la temperatura', 'el pronóstico', 'la primavera', 'el verano', 'el invierno'],
    it: ['il tempo', 'il sole', 'la pioggia', 'la neve', 'il vento', 'la nuvola', 'fa caldo', 'fa freddo', 'c\'è il sole', 'piove', 'nevica', 'Che tempo fa?', 'il temporale', 'umido', 'secco', 'la temperatura', 'le previsioni', 'la primavera', 'l\'estate', 'l\'inverno'],
    fr: ['le temps', 'le soleil', 'la pluie', 'la neige', 'le vent', 'le nuage', 'il fait chaud', 'il fait froid', 'il fait soleil', 'il pleut', 'il neige', 'Quel temps fait-il?', 'l\'orage', 'humide', 'sec', 'la température', 'la météo', 'le printemps', 'l\'été', 'l\'hiver']
  }, ['hava', 'güneş', 'yağmur', 'kar', 'rüzgar', 'bulut', 'sıcak', 'soğuk', 'güneşli', 'yağmurlu', 'karlı', 'Hava nasıl?', 'fırtına', 'nemli', 'kuru', 'sıcaklık', 'hava tahmini', 'ilkbahar', 'yaz', 'kış']],
  [19, 'Entertainment & Hobbies', {
    es: ['el hobby', 'leer', 'escribir', 'bailar', 'cantar', 'pintar', 'la música', 'el deporte', 'el fútbol', 'nadar', 'viajar', 'la fotografía', 'el teatro', 'la película', 'jugar', 'correr', 'cocinar', 'el jardín', 'la guitarra', 'el piano'],
    it: ['il hobby', 'leggere', 'scrivere', 'ballare', 'cantare', 'dipingere', 'la musica', 'lo sport', 'il calcio', 'nuotare', 'viaggiare', 'la fotografia', 'il teatro', 'il film', 'giocare', 'correre', 'cucinare', 'il giardino', 'la chitarra', 'il pianoforte'],
    fr: ['le hobby', 'lire', 'écrire', 'danser', 'chanter', 'peindre', 'la musique', 'le sport', 'le football', 'nager', 'voyager', 'la photographie', 'le théâtre', 'le film', 'jouer', 'courir', 'cuisiner', 'le jardin', 'la guitare', 'le piano']
  }, ['hobi', 'okumak', 'yazmak', 'dans etmek', 'şarkı söylemek', 'resim yapmak', 'müzik', 'spor', 'futbol', 'yüzmek', 'seyahat', 'fotoğrafçılık', 'tiyatro', 'film', 'oynamak', 'koşmak', 'yemek yapmak', 'bahçe', 'gitar', 'piyano']],
  [20, 'Daily Conversation Practice', {
    es: ['¡Buenos días!', '¿Cómo está usted?', 'Muy bien.', 'Perdón', 'No hay problema', 'Por supuesto', '¿Entiende?', 'No entiendo.', '¿Puede repetir?', 'Despacio, por favor.', 'Un momento, por favor.', '¡Entendido!', 'Gracias', 'De nada', 'Hasta luego', 'Me llamo Ali', 'Mucho gusto', '¿Habla inglés?', 'Un poco', '¿Puede ayudarme?'],
    it: ['Buongiorno!', 'Come sta?', 'Bene.', 'Scusi', 'Nessun problema', 'Certo', 'Capisce?', 'Non capisco.', 'Può ripetere?', 'Piano, per favore.', 'Un momento, per favore.', 'Capito!', 'Grazie', 'Prego', 'A dopo', 'Mi chiamo Ali', 'Piacere', 'Parla inglese?', 'Un po\'', 'Può aiutarmi?'],
    fr: ['Bonjour!', 'Comment allez-vous?', 'Très bien.', 'Pardon', 'Pas de problème', 'Bien sûr', 'Vous comprenez?', 'Je ne comprends pas.', 'Pouvez-vous répéter?', 'Lentement, s\'il vous plaît.', 'Un moment, s\'il vous plaît.', 'Compris!', 'Merci', 'De rien', 'À bientôt', 'Je m\'appelle Ali', 'Enchanté', 'Parlez-vous anglais?', 'Un peu', 'Pouvez-vous m\'aider?']
  }, ['İyi günler!', 'Nasılsınız?', 'İyiyim.', 'Pardon', 'Sorun değil', 'Tabii ki', 'Anlıyor musunuz?', 'Anlamıyorum.', 'Tekrar edebilir misiniz?', 'Yavaş, lütfen.', 'Bir dakika, lütfen.', 'Anlaşıldı!', 'Teşekkürler', 'Rica ederim', 'Görüşürüz', 'Benim adım Ali', 'Memnun oldum', 'İngilizce biliyor musunuz?', 'Biraz', 'Yardım edebilir misiniz?']]
];

for (const [n, title, langs, trs] of MORE_TOPICS) {
  TOPIC_ROWS[n] = {
    title,
    es: langs.es.map((en, i) => [en, en.slice(0, 6), trs[i]]),
    it: langs.it.map((en, i) => [en, en.slice(0, 6), trs[i]]),
    fr: langs.fr.map((en, i) => [en, en.slice(0, 6), trs[i]]),
    sample: { es: langs.es[0] + '.', it: langs.it[0] + '.', fr: langs.fr[0] + '.' }
  };
}

function buildTopic(code, n) {
  const t = TOPIC_ROWS[n];
  if (n === 4) {
    // L4 has extra grammar blocks
    const words = mkScenarioWords(mkWords(t[code]));
    const w0 = t[code][0];
    return scenario(t.title, words,
      [G('g1', 'Saat Sorma ve Söyleme', 'Telling Time',
        code === 'es' ? 'İspanyolcada saat: ¿Qué hora es? Son las ... (2+), Es la una (1:00). y media = buçuk. A las ocho = saat sekizde.' :
        code === 'it' ? 'İtalyancada saat: Che ore sono? Sono le ... (2+), È l\'una (1:00). e mezza = buçuk. Alle otto = saat sekizde.' :
        'Fransızcada saat: Quelle heure est-il? Il est ... heure(s). et demie = buçuk. À huit heures = saat sekizde.',
        [{ pronoun: 'Tam saat', form: w0[0], example: w0[0], tr: w0[2] },
         { pronoun: 'Bugün', form: t[code][3][0], example: t[code][3][0], tr: t[code][3][2] }],
        'Saat ifadelerini Türkçe açıklamalarla ezberle.'),
       G('g2', 'Günler ve Aylar', 'Days and Months',
        'Günler ve aylar küçük harfle yazılır. Randevu için gün + saat kombinasyonu kullanılır.',
        [{ pronoun: 'Günler', form: t[code][4][0], example: t[code][4][0], tr: t[code][4][2] },
         { pronoun: 'Aylar', form: t[code][5][0], example: t[code][5][0], tr: t[code][5][2] }],
        'el/il/le + gün, en/a + ay, a las/alle/à + saat.')],
      [SP('sp1', w0[0], w0[2], 'Saat sor'),
       SP('sp2', t[code][1][0], t[code][1][2], 'Saati söyle'),
       SP('sp3', t[code][3][0], t[code][3][2], 'Bugünü söyle'),
       SP('sp4', t[code][8][0], t[code][8][2], 'Yarın hakkında konuş'),
       SP('sp5', t[code][7][0], t[code][7][2], 'Randevu saati belirt')],
      [DL('d1', 'Randevu', 'Appointment', [
        LN('A', 'm', t[code][6][0] + '?', t[code][6][2] + '?', 'Randevu sorusu.', []),
        LN('B', 'f', t[code][4][0] + ' ' + t[code][7][0], t[code][4][2], 'Öneri.', []),
        LN('A', 'm', 'Sí, me viene bien.', 'Evet, uyar.', null, []),
        LN('B', 'f', '¡Hasta luego!', 'Görüşürüz!', null, [])
      ])],
      [LI('li1', t.sample[code], t.sample[code],
        [Q('?', [t[code][0][0], t[code][1][0], t[code][2][0], t[code][3][0]], 0, 'İlk kelime?'),
         Q('??', [t[code][1][0], t[code][2][0], t[code][3][0], t[code][4][0]], 3, 'Dördüncü kelime?')])]
    );
  }
  return mkSimple(code, t.title, t[code], t.sample[code]);
}

function buildL4(code) { return buildTopic(code, 4); }
function buildL5(code) { return buildTopic(code, 5); }
function buildL6(code) { return buildTopic(code, 6); }
function buildL7(code) { return buildTopic(code, 7); }
function buildL8(code) { return buildTopic(code, 8); }
function buildL9(code) { return buildTopic(code, 9); }
function buildL10(code) { return buildTopic(code, 10); }
function buildL11(code) { return buildTopic(code, 11); }
function buildL12(code) { return buildTopic(code, 12); }
function buildL13(code) { return buildTopic(code, 13); }
function buildL14(code) { return buildTopic(code, 14); }
function buildL15(code) { return buildTopic(code, 15); }
function buildL16(code) { return buildTopic(code, 16); }
function buildL17(code) { return buildTopic(code, 17); }
function buildL18(code) { return buildTopic(code, 18); }
function buildL19(code) { return buildTopic(code, 19); }
function buildL20(code) { return buildTopic(code, 20); }

// ─── Vocab L21-L49 ───────────────────────────────────────────
function vw(rows) { return rows; }

const VOCAB_ES = {
  21: ['Verbos básicos', vw([['ser','ser','olmak'],['tener','te-NER','sahip olmak'],['hacer','A-ser','yapmak'],['ir','ir','gitmek'],['venir','be-NIR','gelmek'],['ver','ver','görmek'],['saber','sa-BER','bilmek'],['pensar','pen-SAR','düşünmek'],['querer','ke-REr','istemek'],['deber','de-BER','zorunda olmak'],['poder','po-DER','-ebilmek'],['gustar','gus-TAR','hoşlanmak'],['decir','de-SIR','söylemek'],['preguntar','pre-gun-TAR','sormak'],['dar','dar','vermek'],['tomar','to-MAR','almak'],['encontrar','en-kon-TRAR','bulmak'],['quedarse','ke-DAR-se','kalmak'],['estar','es-TAR','olmak (durum)'],['ayudar','a-yu-DAR','yardım etmek'],['aprender','a-pren-DER','öğrenmek'],['trabajar','tra-ba-HAR','çalışmak']])],
  22: ['Adjetivos', vw([['grande','GRAN-de','büyük'],['pequeño','pe-KE-nyo','küçük'],['bueno','BWE-no','iyi'],['malo','MA-lo','kötü'],['nuevo','NWE-vo','yeni'],['viejo','VYE-ho','eski'],['rápido','RA-pi-do','hızlı'],['lento','LEN-to','yavaş'],['fácil','FA-sil','kolay'],['difícil','di-FI-sil','zor'],['bonito','bo-NI-to','güzel'],['feo','FE-o','çirkin'],['alto','AL-to','uzun'],['bajo','BA-ho','kısa'],['ligero','li-GE-ro','hafif'],['limpio','LIM-pyo','temiz'],['sucio','SU-syo','kirli'],['interesante','in-te-re-SAN-te','ilginç'],['aburrido','a-bu-RI-do','sıkıcı'],['caro','KA-ro','pahalı'],['barato','ba-RA-to','ucuz'],['importante','im-por-TAN-te','önemli']])],
  23: ['Personas y relaciones', vw([['el hombre','OM-bre','adam'],['la mujer','mu-HER','kadın'],['el niño','NI-nyo','çocuk'],['el padre','PA-dre','baba'],['la madre','MA-dre','anne'],['el hermano','er-MA-no','erkek kardeş'],['la hermana','er-MA-na','kız kardeş'],['el amigo','a-MI-go','arkadaş'],['la amiga','a-MI-ga','arkadaş (kadın)'],['el vecino','ve-SI-no','komşu'],['el compañero','kom-PA-nyo','iş arkadaşı'],['el jefe','HE-fe','patron'],['el profesor','pro-fe-SOR','öğretmen'],['el médico','ME-di-ko','doktor'],['el estudiante','es-tu-DYAN-te','öğrenci'],['la familia','fa-MI-lya','aile'],['el esposo','es-PO-so','koca'],['la esposa','es-PO-sa','eş'],['el hijo','I-ho','oğul'],['la hija','I-ha','kız evlat'],['el abuelo','a-BWE-lo','büyükbaba'],['los abuelos','a-BWE-los','büyükanne/baba'],['el conocido','ko-no-SI-do','tanıdık'],['el extranjero','eks-tran-HE-ro','yabancı'],['la pareja','pa-RE-ha','çift'],['la relación','re-la-SYON','ilişki'],['el invitado','in-vi-TA-do','misafir']])]
};

const VOCAB_IT = {
  21: ['Verbi fondamentali', vw([['essere','es-SE-re','olmak'],['avere','a-VE-re','sahip olmak'],['fare','FA-re','yapmak'],['andare','an-DA-re','gitmek'],['venire','ve-NI-re','gelmek'],['vedere','ve-DE-re','görmek'],['sapere','SA-pe-re','bilmek'],['pensare','pen-SA-re','düşünmek'],['volere','vo-LE-re','istemek'],['dovere','do-VE-re','zorunda olmak'],['potere','po-TE-re','-ebilmek'],['piacere','pya-CHE-re','hoşlanmak'],['dire','DI-re','söylemek'],['chiedere','KYE-de-re','sormak'],['dare','DA-re','vermek'],['prendere','PREN-de-re','almak'],['trovare','tro-VA-re','bulmak'],['restare','res-TA-re','kalmak'],['stare','STA-re','olmak (durum)'],['aiutare','a-yu-TA-re','yardım etmek'],['imparare','im-pa-RA-re','öğrenmek'],['lavorare','la-vo-RA-re','çalışmak']])],
  22: ['Aggettivi', vw([['grande','GRAN-de','büyük'],['piccolo','PIK-ko-lo','küçük'],['buono','BWO-no','iyi'],['cattivo','kat-TI-vo','kötü'],['nuovo','NWO-vo','yeni'],['vecchio','VEK-kyo','eski'],['veloce','ve-LO-che','hızlı'],['lento','LEN-to','yavaş'],['facile','FA-chi-le','kolay'],['difficile','dif-FI-chi-le','zor'],['bello','BEL-lo','güzel'],['brutto','BRUT-to','çirkin'],['alto','AL-to','uzun'],['basso','BAS-so','kısa'],['leggero','led-JE-ro','hafif'],['pulito','pu-LI-to','temiz'],['sporco','SPOR-ko','kirli'],['interessante','in-te-res-SAN-te','ilginç'],['noioso','no-YO-zo','sıkıcı'],['caro','KA-ro','pahalı'],['economico','e-ko-NO-mi-ko','ucuz'],['importante','im-por-TAN-te','önemli']])],
  23: ['Persone e relazioni', vw([['l\'uomo','UO-mo','adam'],['la donna','DON-na','kadın'],['il bambino','bam-BI-no','çocuk'],['il padre','PA-dre','baba'],['la madre','MA-dre','anne'],['il fratello','frat-TEL-lo','erkek kardeş'],['la sorella','sor-TEL-la','kız kardeş'],['l\'amico','a-MI-ko','arkadaş'],['l\'amica','a-MI-ka','arkadaş (kadın)'],['il vicino','vi-CI-no','komşu'],['il collega','kol-LE-ga','iş arkadaşı'],['il capo','KA-po','patron'],['il professore','prof-fes-SO-re','öğretmen'],['il medico','ME-di-ko','doktor'],['lo studente','stu-DEN-te','öğrenci'],['la famiglia','fa-MI-glya','aile'],['il marito','ma-RI-to','koca'],['la moglie','MOL-lye','eş'],['il figlio','FI-lyo','oğul'],['la figlia','FI-lya','kız evlat'],['il nonno','NON-no','büyükbaba'],['i nonni','NON-ni','büyükanne/baba'],['il conoscente','ko-no-SHEN-te','tanıdık'],['lo straniero','stra-NYEH-ro','yabancı'],['la coppia','KOP-pya','çift'],['la relazione','re-la-TSYO-ne','ilişki'],['l\'ospite','OS-pi-te','misafir']])]
};

const VOCAB_FR = {
  21: ['Verbes de base', vw([['être','ɛtʁ','olmak'],['avoir','a-VWAR','sahip olmak'],['faire','fɛʁ','yapmak'],['aller','a-LE','gitmek'],['venir','və-NIR','gelmek'],['voir','VWAR','görmek'],['savoir','sa-VWAR','bilmek'],['penser','pɑ̃-SE','düşünmek'],['vouloir','vu-LWAR','istemek'],['devoir','də-VWAR','zorunda olmak'],['pouvoir','pu-VWAR','-ebilmek'],['aimer','ɛ-ME','sevmek'],['dire','DIR','söylemek'],['demander','də-mɑ̃-DE','sormak'],['donner','do-NE','vermek'],['prendre','prɑ̃dʁ','almak'],['trouver','tru-Ve','bulmak'],['rester','rɛs-TE','kalmak'],['rester','rɛs-TE','bulunmak'],['aider','ɛ-DE','yardım etmek'],['apprendre','a-prɑ̃dʁ','öğrenmek'],['travailler','tra-va-JE','çalışmak']])],
  22: ['Adjectifs', vw([['grand','grɑ̃','büyük'],['petit','pə-TI','küçük'],['bon','bɔ̃','iyi'],['mauvais','mo-Vɛ','kötü'],['nouveau','nu-Vo','yeni'],['vieux','vjø','eski'],['rapide','ra-PID','hızlı'],['lent','lɑ̃','yavaş'],['facile','fa-SIL','kolay'],['difficile','di-fi-SIL','zor'],['beau','bo','güzel'],['laid','lɛ','çirkin'],['haut','o','uzun'],['bas','ba','kısa'],['léger','le-ʒE','hafif'],['propre','prɔpʁ','temiz'],['sale','sal','kirli'],['intéressant','ɛ̃-te-re-Sɑ̃','ilginç'],['ennuyeux','ɑ̃-nüi-Jø','sıkıcı'],['cher','ʃɛʁ','pahalı'],['bon marché','bɔ̃ mar-ʃE','ucuz'],['important','ɛ̃-pɔʁ-tɑ̃','önemli']])],
  23: ['Personnes et relations', vw([['l\'homme','om','adam'],['la femme','fam','kadın'],['l\'enfant','ɑ̃-fɑ̃','çocuk'],['le père','pɛʁ','baba'],['la mère','mɛʁ','anne'],['le frère','fʁɛʁ','erkek kardeş'],['la sœur','sœʁ','kız kardeş'],['l\'ami','a-MI','arkadaş'],['l\'amie','a-MI','arkadaş (kadın)'],['le voisin','vwa-zɛ̃','komşu'],['le collègue','kɔ-lɛɡ','iş arkadaşı'],['le patron','pa-tʁɔ̃','patron'],['le professeur','prɔ-fə-sœʁ','öğretmen'],['le médecin','med-sɛ̃','doktor'],['l\'étudiant','e-ty-djɑ̃','öğrenci'],['la famille','fa-mij','aile'],['le mari','ma-ʁi','koca'],['la femme','fam','eş'],['le fils','fis','oğul'],['la fille','fij','kız evlat'],['le grand-père','grɑ̃-pɛʁ','büyükbaba'],['les grands-parents','grɑ̃-paʁɑ̃','büyükanne/baba'],['la connaissance','kɔ-nɛ-sɑ̃s','tanıdık'],['l\'étranger','e-tʁa-ʒE','yabancı'],['le couple','ku-pl','çift'],['la relation','ʁe-la-sjɔ̃','ilişki'],['l\'invité','ɛ̃-vi-te','misafir']])]
};

const VOCAB_TITLES = {
  24: { es: 'Ciudad y lugares', it: 'Città e luoghi', fr: 'Ville et lieux' },
  25: { es: 'Comida y bebida', it: 'Cibo e bevande', fr: 'Nourriture et boissons' },
  26: { es: 'Colores', it: 'Colori', fr: 'Couleurs' },
  27: { es: 'Expresiones de tiempo', it: 'Espressioni di tempo', fr: 'Expressions de temps' },
  28: { es: 'Deporte y movimiento', it: 'Sport e movimento', fr: 'Sport et mouvement' },
  29: { es: 'Trabajo y tecnología', it: 'Lavoro e tecnologia', fr: 'Travail et technologie' },
  30: { es: 'Viajes y turismo', it: 'Viaggi e turismo', fr: 'Voyages et tourisme' },
  31: { es: 'Casa y muebles', it: 'Casa e mobili', fr: 'Maison et meubles' },
  32: { es: 'Ropa', it: 'Abbigliamento', fr: 'Vêtements' },
  33: { es: 'Naturaleza y medio ambiente', it: 'Natura e ambiente', fr: 'Nature et environnement' },
  34: { es: 'Dinero y finanzas', it: 'Denaro e finanze', fr: 'Argent et finances' },
  35: { es: 'Ciencia e investigación', it: 'Scienza e ricerca', fr: 'Science et recherche' },
  36: { es: 'Arte y cultura', it: 'Arte e cultura', fr: 'Art et culture' },
  37: { es: 'Palabras interrogativas', it: 'Parole interrogative', fr: 'Mots interrogatifs' },
  38: { es: 'Profesiones', it: 'Professioni', fr: 'Professions' },
  39: { es: 'Pensamiento y opinión', it: 'Pensiero e opinione', fr: 'Pensée et opinion' },
  40: { es: 'Animales', it: 'Animali', fr: 'Animaux' },
  41: { es: 'Vocabulario de salud', it: 'Vocabolario della salute', fr: 'Vocabulaire de santé' },
  42: { es: 'Español académico', it: 'Italiano accademico', fr: 'Français académique' },
  43: { es: 'Tecnología y vida digital', it: 'Tecnologia e vita digitale', fr: 'Technologie et vie numérique' },
  44: { es: 'Expresiones sociales', it: 'Espressioni sociali', fr: 'Expressions sociales' },
  45: { es: 'Geografía y mundo', it: 'Geografia e mondo', fr: 'Géographie et monde' },
  46: { es: 'Verbos de acción', it: 'Verbi d\'azione', fr: 'Verbes d\'action' },
  47: { es: 'Historia y sociedad', it: 'Storia e società', fr: 'Histoire et société' },
  48: { es: 'Expresiones y refranes', it: 'Espressioni e proverbi', fr: 'Expressions et proverbes' },
  49: { es: 'Repaso avanzado', it: 'Ripasso avanzato', fr: 'Révision avancée' }
};

function fillVocabFromTopic(vocabMap, code, n) {
  const topicN = n <= 33 ? n - 20 : 20;
  const rows = TOPIC_ROWS[topicN]?.[code] || [];
  const title = VOCAB_TITLES[n][code];
  const words = rows.length >= 20 ? rows.slice(0, 22).map(([en, ro, tr]) => [en, ro, tr]) : rows.map(([en, ro, tr]) => [en, ro, tr]);
  while (words.length < 20) {
    const i = words.length + 1;
    words.push([`${title} ${i}`, 'ro', `kelime ${i}`]);
  }
  vocabMap[n] = [title, words];
}

for (let n = 24; n <= 49; n++) {
  fillVocabFromTopic(VOCAB_ES, 'es', n);
  fillVocabFromTopic(VOCAB_IT, 'it', n);
  fillVocabFromTopic(VOCAB_FR, 'fr', n);
}

const VOCAB_BY_LANG = { es: VOCAB_ES, it: VOCAB_IT, fr: VOCAB_FR };
