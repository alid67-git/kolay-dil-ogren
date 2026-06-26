#!/usr/bin/env node
/** Generates _romance-L4-49.mjs with L4-L20 scenarios and L21-L49 vocab */
import { writeFileSync } from 'fs';
import { join, dirname } from 'url';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function words(...rows) {
  return rows.map(([en, ro, tr, o]) => [null, en, ro, tr, o || {}]);
}

function sp(...rows) {
  return rows.map(([id, en, tr, prompt], i) => `SP('${id}', '${en.replace(/'/g, "\\'")}', '${tr.replace(/'/g, "\\'")}', '${prompt.replace(/'/g, "\\'")}')`);
}

// Topic packs: [title, { es, it, fr }]
const TOPICS = {
  4: {
    title: 'Time & Date',
    es: {
      w: words(
        ['¿Qué hora es?', 'kay O-ra es', 'Saat kaç?', { tip: 'Saat sormak.', ex: { en: 'Perdón, ¿qué hora es?', tr: 'Pardon, saat kaç?', bd: [] } }],
        ['Son las tres', 'son las tres', 'Saat üç'], ['la mañana', 'la ma-NYA-na', 'sabah'], ['la tarde', 'la TAR-de', 'öğleden sonra'],
        ['la noche', 'la NO-che', 'akşam / gece'], ['hoy', 'oy', 'bugün'], ['mañana', 'ma-NYA-na', 'yarın'], ['ayer', 'a-YER', 'dün'],
        ['lunes', 'LU-nes', 'Pazartesi'], ['martes', 'MAR-tes', 'Salı'], ['miércoles', 'MYER-ko-les', 'Çarşamba'],
        ['jueves', 'HWE-ves', 'Perşembe'], ['viernes', 'BYER-nes', 'Cuma'], ['sábado', 'SA-ba-do', 'Cumartesi'],
        ['domingo', 'do-MIN-go', 'Pazar'], ['enero', 'e-NE-ro', 'Ocak'], ['julio', 'HU-lyo', 'Temmuz'],
        ['¿Cuándo?', 'KWAN-do', 'Ne zaman?'], ['¿A qué hora?', 'a kay O-ra', 'Saat kaçta?'], ['la semana', 'la se-MA-na', 'hafta']
      ),
      g: `[
    G('g1', 'Saat Sorma ve Söyleme', 'Telling Time',
      'İspanyolcada saat: ¿Qué hora es? Son las ... (2+), Es la una (1:00). y media = buçuk, y cuarto = çeyrek. A las ocho = saat sekizde.',
      [{ pronoun: 'Tam saat', form: 'Son las ...', example: 'Son las tres.', tr: 'Saat üç.' },
       { pronoun: '1:00', form: 'Es la una', example: 'Es la una.', tr: 'Saat bir.' },
       { pronoun: 'Buçuk', form: 'y media', example: 'Son las tres y media.', tr: 'Saat üç buçuk.' },
       { pronoun: 'Randevu', form: 'A las ...', example: 'A las ocho.', tr: 'Saat sekizde.' }],
      'İspanyolcada saat Türkçe gibi — yarım üç = tres y media (3:30).'),
    G('g2', 'Günler ve Aylar', 'Days and Months',
      'Günler ve aylar küçük harfle yazılır. el lunes = pazartesi günü. en julio = temmuz ayında.',
      [{ pronoun: 'Günler', form: 'lunes ... domingo', example: 'El lunes.', tr: 'Pazartesi günü.' },
       { pronoun: 'Aylar', form: 'enero ... diciembre', example: 'En julio.', tr: 'Temmuz\\'da.' },
       { pronoun: 'Bugün', form: 'hoy / mañana / ayer', example: 'Hoy es viernes.', tr: 'Bugün cuma.' },
       { pronoun: 'Soru', form: '¿Cuándo?', example: '¿Cuándo empieza el curso?', tr: 'Kurs ne zaman başlıyor?' }],
      'el + gün, en + ay, a las + saat — edatları ezberle.')]`,
      sp: `[
    SP('sp1', '¿Qué hora es?', 'Saat kaç?', 'Saat sor'),
    SP('sp2', 'Son las diez.', 'Saat on.', 'Saati söyle'),
    SP('sp3', 'Hoy es lunes.', 'Bugün pazartesi.', 'Bugünün gününü söyle'),
    SP('sp4', 'Mañana tengo tiempo.', 'Yarın vaktim var.', 'Yarın hakkında konuş'),
    SP('sp5', 'A las nueve, por favor.', 'Saat dokuzda, lütfen.', 'Randevu saati belirt')]`,
      dl: `[DL('d1', 'Concertar una cita', 'Making an Appointment', [
    LN('A', 'm', '¿Cuándo tiene tiempo?', 'Ne zaman müsait siniz?', 'Resmi randevu sorusu.',
      [BD('¿Cuándo', 'Ne zaman', 'question', 'Zaman sorusu.')]),
    LN('B', 'f', '¿El martes a las diez?', 'Salı saat onda?', 'el + gün, a las + saat.',
      [BD('El martes', 'Salı günü', 'K', 'el + gün.')]),
    LN('A', 'm', 'Sí, me viene bien. ¡Hasta el martes!', 'Evet, uyar. Salıya kadar!', null,
      [BD('Me viene bien', 'Uyar', 'V', 'Kabul ifadesi.')]),
    LN('B', 'f', 'Hasta el martes. ¡Adiós!', 'Salıya kadar. Hoşça kalın!', null, [])
  ])]`,
      li: `[LI('li1', 'Hoy es miércoles, quince de marzo. La clase empieza a las nueve y termina a las once.',
    'Bugün çarşamba, 15 Mart. Ders saat dokuzda başlıyor ve saat on birde bitiyor.',
    [Q('¿Qué día es hoy?', ['lunes', 'martes', 'miércoles', 'viernes'], 2, 'Bugün hangi gün?'),
     Q('¿Cuándo empieza la clase?', ['8:00', '9:00', '10:00', '11:00'], 1, 'Ders ne zaman başlıyor?'),
     Q('¿Cuándo termina la clase?', ['9:00', '10:00', '11:00', '12:00'], 2, 'Ders ne zaman bitiyor?')])]`
    },
    it: {
      w: words(
        ['Che ore sono?', 'kay O-re SO-no', 'Saat kaç?'], ['Sono le tre', 'SO-no le tre', 'Saat üç'],
        ['la mattina', 'la mat-TI-na', 'sabah'], ['il pomeriggio', 'il po-me-RID-jo', 'öğleden sonra'],
        ['la sera', 'la SE-ra', 'akşam'], ['la notte', 'la NOT-te', 'gece'], ['oggi', 'OD-dji', 'bugün'],
        ['domani', 'do-MA-ni', 'yarın'], ['ieri', 'YE-ri', 'dün'], ['lunedì', 'lu-ne-DI', 'Pazartesi'],
        ['martedì', 'mar-te-DI', 'Salı'], ['mercoledì', 'mer-ko-le-DI', 'Çarşamba'], ['giovedì', 'jo-ve-DI', 'Perşembe'],
        ['venerdì', 've-ner-DI', 'Cuma'], ['sabato', 'SA-ba-to', 'Cumartesi'], ['domenica', 'do-ME-ni-ka', 'Pazar'],
        ['gennaio', 'jen-NA-yo', 'Ocak'], ['luglio', 'LU-lyo', 'Temmuz'], ['Quando?', 'KWAN-do', 'Ne zaman?'],
        ['A che ora?', 'a kay O-ra', 'Saat kaçta?'], ['la settimana', 'la set-ti-MA-na', 'hafta']
      ),
      g: `[
    G('g1', 'Saat Sorma ve Söyleme', 'Telling Time',
      'İtalyancada saat: Che ore sono? / Che ora è? Sono le ... (2+), È l\\'una (1:00). e mezza = buçuk, e un quarto = çeyrek. Alle otto = saat sekizde.',
      [{ pronoun: 'Tam saat', form: 'Sono le ...', example: 'Sono le tre.', tr: 'Saat üç.' },
       { pronoun: '1:00', form: 'È l\\'una', example: 'È l\\'una.', tr: 'Saat bir.' },
       { pronoun: 'Buçuk', form: 'e mezza', example: 'Sono le tre e mezza.', tr: 'Saat üç buçuk.' },
       { pronoun: 'Randevu', form: 'Alle ...', example: 'Alle otto.', tr: 'Saat sekizde.' }],
      'İtalyancada saat ifadesi Türkçeye benzer.'),
    G('g2', 'Günler ve Aylar', 'Days and Months',
      'Günler ve aylar küçük harfle yazılır. il lunedì = pazartesi günü. a luglio = temmuz ayında.',
      [{ pronoun: 'Günler', form: 'lunedì ... domenica', example: 'Il lunedì.', tr: 'Pazartesi günü.' },
       { pronoun: 'Aylar', form: 'gennaio ... dicembre', example: 'A luglio.', tr: 'Temmuz\\'da.' },
       { pronoun: 'Bugün', form: 'oggi / domani / ieri', example: 'Oggi è venerdì.', tr: 'Bugün cuma.' },
       { pronoun: 'Soru', form: 'Quando?', example: 'Quando inizia il corso?', tr: 'Kurs ne zaman başlıyor?' }],
      'il/la + gün, a/in + ay, alle + saat.')]`,
      sp: `[
    SP('sp1', 'Che ore sono?', 'Saat kaç?', 'Saat sor'),
    SP('sp2', 'Sono le dieci.', 'Saat on.', 'Saati söyle'),
    SP('sp3', 'Oggi è lunedì.', 'Bugün pazartesi.', 'Bugünün gününü söyle'),
    SP('sp4', 'Domani ho tempo.', 'Yarın vaktim var.', 'Yarın hakkında konuş'),
    SP('sp5', 'Alle nove, per favore.', 'Saat dokuzda, lütfen.', 'Randevu saati belirt')]`,
      dl: `[DL('d1', 'Fissare un appuntamento', 'Making an Appointment', [
    LN('A', 'm', 'Quando ha tempo?', 'Ne zaman müsait siniz?', 'Resmi randevu sorusu.', []),
    LN('B', 'f', 'Martedì alle dieci?', 'Salı saat onda?', 'Gün + saat önerisi.', []),
    LN('A', 'm', 'Sì, va bene. A martedì!', 'Evet, uyar. Salıya kadar!', null, []),
    LN('B', 'f', 'A martedì. Arrivederci!', 'Salıya kadar. Hoşça kalın!', null, [])
  ])]`,
      li: `[LI('li1', 'Oggi è mercoledì, quindici marzo. La lezione inizia alle nove e finisce alle undici.',
    'Bugün çarşamba, 15 Mart. Ders saat dokuzda başlıyor ve saat on birde bitiyor.',
    [Q('Che giorno è oggi?', ['lunedì', 'martedì', 'mercoledì', 'venerdì'], 2, 'Bugün hangi gün?'),
     Q('Quando inizia la lezione?', ['8:00', '9:00', '10:00', '11:00'], 1, 'Ders ne zaman başlıyor?'),
     Q('Quando finisce la lezione?', ['9:00', '10:00', '11:00', '12:00'], 2, 'Ders ne zaman bitiyor?')])]`
    },
    fr: {
      w: words(
        ['Quelle heure est-il?', 'kel œr e-til', 'Saat kaç?'], ['Il est trois heures', 'il e trwa œr', 'Saat üç'],
        ['le matin', 'lə ma-TAN', 'sabah'], ['l\\'après-midi', 'la-prɛ-mi-DI', 'öğleden sonra'],
        ['le soir', 'lə SWAR', 'akşam'], ['la nuit', 'la NÜİ', 'gece'], ['aujourd\\'hui', 'o-ʒuʁ-DÜİ', 'bugün'],
        ['demain', 'də-MAN', 'yarın'], ['hier', 'YER', 'dün'], ['lundi', 'lən-DI', 'Pazartesi'],
        ['mardi', 'mar-DI', 'Salı'], ['mercredi', 'mɛʁ-krə-DI', 'Çarşamba'], ['jeudi', 'ʒə-DÜİ', 'Perşembe'],
        ['vendredi', 'vɑ̃-drə-DI', 'Cuma'], ['samedi', 'sam-DI', 'Cumartesi'], ['dimanche', 'di-Mɑ̃ʃ', 'Pazar'],
        ['janvier', 'ʒɑ̃-VYE', 'Ocak'], ['juillet', 'ʒüi-YE', 'Temmuz'], ['Quand?', 'kɑ̃', 'Ne zaman?'],
        ['À quelle heure?', 'a kel œr', 'Saat kaçta?'], ['la semaine', 'la sə-MEN', 'hafta']
      ),
      g: `[
    G('g1', 'Saat Sorma ve Söyleme', 'Telling Time',
      'Fransızcada saat: Quelle heure est-il? Il est ... heure(s). et demie = buçuk, et quart = çeyrek. À huit heures = saat sekizde.',
      [{ pronoun: 'Tam saat', form: 'Il est ... heure(s)', example: 'Il est trois heures.', tr: 'Saat üç.' },
       { pronoun: '1:00', form: 'Il est une heure', example: 'Il est une heure.', tr: 'Saat bir.' },
       { pronoun: 'Buçuk', form: 'et demie', example: 'Il est trois heures et demie.', tr: 'Saat üç buçuk.' },
       { pronoun: 'Randevu', form: 'À ... heures', example: 'À huit heures.', tr: 'Saat sekizde.' }],
      'Fransızcada 24 saat sistemi de yaygındır.'),
    G('g2', 'Günler ve Aylar', 'Days and Months',
      'Günler ve aylar küçük harfle yazılır. le lundi = pazartesi günü. en juillet = temmuz ayında.',
      [{ pronoun: 'Günler', form: 'lundi ... dimanche', example: 'Le lundi.', tr: 'Pazartesi günü.' },
       { pronoun: 'Aylar', form: 'janvier ... décembre', example: 'En juillet.', tr: 'Temmuz\\'da.' },
       { pronoun: 'Bugün', form: 'aujourd\\'hui / demain / hier', example: 'Aujourd\\'hui c\\'est vendredi.', tr: 'Bugün cuma.' },
       { pronoun: 'Soru', form: 'Quand?', example: 'Quand commence le cours?', tr: 'Kurs ne zaman başlıyor?' }],
      'le + gün, en + ay, à + saat.')]`,
      sp: `[
    SP('sp1', 'Quelle heure est-il?', 'Saat kaç?', 'Saat sor'),
    SP('sp2', 'Il est dix heures.', 'Saat on.', 'Saati söyle'),
    SP('sp3', 'Aujourd\\'hui c\\'est lundi.', 'Bugün pazartesi.', 'Bugünün gününü söyle'),
    SP('sp4', 'Demain j\\'ai le temps.', 'Yarın vaktim var.', 'Yarın hakkında konuş'),
    SP('sp5', 'À neuf heures, s\\'il vous plaît.', 'Saat dokuzda, lütfen.', 'Randevu saati belirt')]`,
      dl: `[DL('d1', 'Prendre rendez-vous', 'Making an Appointment', [
    LN('A', 'm', 'Quand êtes-vous libre?', 'Ne zaman müsait siniz?', 'Resmi randevu sorusu.', []),
    LN('B', 'f', 'Mardi à dix heures?', 'Salı saat onda?', 'Gün + saat önerisi.', []),
    LN('A', 'm', 'Oui, ça me va. À mardi!', 'Evet, uyar. Salıya kadar!', null, []),
    LN('B', 'f', 'À mardi. Au revoir!', 'Salıya kadar. Hoşça kalın!', null, [])
  ])]`,
      li: `[LI('li1', 'Aujourd\\'hui c\\'est mercredi, quinze mars. Le cours commence à neuf heures et finit à onze heures.',
    'Bugün çarşamba, 15 Mart. Ders saat dokuzda başlıyor ve saat on birde bitiyor.',
    [Q('Quel jour sommes-nous?', ['lundi', 'mardi', 'mercredi', 'vendredi'], 2, 'Bugün hangi gün?'),
     Q('Quand commence le cours?', ['8h', '9h', '10h', '11h'], 1, 'Ders ne zaman başlıyor?'),
     Q('Quand finit le cours?', ['9h', '10h', '11h', '12h'], 2, 'Ders ne zaman bitiyor?')])]`
    }
  }
};

// Generate simplified L5-L20 from template
const SIMPLE_TOPICS = [
  [5, 'Restaurant & Food', {
    es: ['Una mesa para dos, por favor.', 'la carta', 'pedir', 'Quisiera...', 'el entrante', 'el plato principal', 'el postre', 'la bebida', 'el agua', 'el café', 'el pan', 'la sopa', 'la ensalada', 'el pollo', 'el pescado', 'vegetariano', 'delicioso', 'la cuenta', 'la reserva', '¡Buen provecho!'],
    it: ['Un tavolo per due, per favore.', 'il menù', 'ordinare', 'Vorrei...', 'l\\'antipasto', 'il piatto principale', 'il dolce', 'la bevanda', 'l\\'acqua', 'il caffè', 'il pane', 'la zuppa', 'l\\'insalata', 'il pollo', 'il pesce', 'vegetariano', 'delizioso', 'il conto', 'la prenotazione', 'Buon appetito!'],
    fr: ['Une table pour deux, s\\'il vous plaît.', 'la carte', 'commander', 'Je voudrais...', 'l\\'entrée', 'le plat principal', 'le dessert', 'la boisson', 'l\\'eau', 'le café', 'le pain', 'la soupe', 'la salade', 'le poulet', 'le poisson', 'végétarien', 'délicieux', 'l\\'addition', 'la réservation', 'Bon appétit!']
  }],
  [6, 'Shopping', {
    es: ['¿Dónde encuentro...?', '¿Cuánto cuesta?', 'muy caro', 'barato', 'el descuento', 'la talla', 'el color', 'probarse', 'el probador', 'quedar bien', 'comprar', 'pagar', 'el recibo', 'cambiar', 'la oferta'],
    it: ['Dove trovo...?', 'Quanto costa?', 'troppo caro', 'economico', 'lo sconto', 'la taglia', 'il colore', 'provare', 'il camerino', 'andare bene', 'comprare', 'pagare', 'lo scontrino', 'cambiare', 'l\\'offerta'],
    fr: ['Où est-ce que je trouve...?', 'Combien ça coûte?', 'trop cher', 'bon marché', 'la réduction', 'la taille', 'la couleur', 'essayer', 'la cabine', 'aller bien', 'acheter', 'payer', 'le reçu', 'échanger', 'l\\'offre']
  }],
  [7, 'Directions', {
    es: ['¿Dónde está...?', 'a la izquierda', 'a la derecha', 'todo recto', 'la esquina', 'la calle', 'la estación', 'la parada', 'el semáforo', 'cruzar', 'el cruce', 'cerca'],
    it: ['Dov\\'è...?', 'a sinistra', 'a destra', 'dritto', 'l\\'angolo', 'la strada', 'la stazione', 'la fermata', 'il semaforo', 'attraversare', 'l\\'incrocio', 'vicino'],
    fr: ['Où est...?', 'à gauche', 'à droite', 'tout droit', 'le coin', 'la rue', 'la gare', 'l\\'arrêt', 'le feu', 'traverser', 'le carrefour', 'près de']
  }],
  [8, 'Transport & Travel', {
    es: ['el tren', 'el autobús', 'el metro', 'el avión', 'el aeropuerto', 'el billete', 'subir', 'bajar', 'hacer transbordo', 'el andén', 'salir', 'llegar'],
    it: ['il treno', 'l\\'autobus', 'la metropolitana', 'l\\'aereo', 'l\\'aeroporto', 'il biglietto', 'salire', 'scendere', 'fare cambio', 'il binario', 'partire', 'arrivare'],
    fr: ['le train', 'le bus', 'le métro', 'l\\'avion', 'l\\'aéroport', 'le billet', 'monter', 'descendre', 'changer', 'le quai', 'partir', 'arriver']
  }],
  [9, 'Hotel & Accommodation', {
    es: ['el hotel', 'la recepción', 'la habitación', 'hacer check-in', 'hacer check-out', 'la llave', 'habitación individual', 'habitación doble', 'el desayuno', 'wifi', 'el aire acondicionado', 'la reserva'],
    it: ['l\\'hotel', 'la reception', 'la camera', 'fare il check-in', 'fare il check-out', 'la chiave', 'camera singola', 'camera doppia', 'la colazione', 'wifi', 'l\\'aria condizionata', 'la prenotazione'],
    fr: ['l\\'hôtel', 'la réception', 'la chambre', 'faire le check-in', 'faire le check-out', 'la clé', 'chambre simple', 'chambre double', 'le petit-déjeuner', 'wifi', 'la climatisation', 'la réservation']
  }],
  [10, 'Work & Business', {
    es: ['el trabajo', 'la profesión', 'el compañero', 'el jefe', 'la oficina', 'la reunión', 'el contrato', 'el salario', 'la solicitud', 'la entrevista', 'tiempo completo / parcial', 'fin de jornada'],
    it: ['il lavoro', 'la professione', 'il collega', 'il capo', 'l\\'ufficio', 'la riunione', 'il contratto', 'lo stipendio', 'la domanda', 'il colloquio', 'tempo pieno / parziale', 'fine giornata'],
    fr: ['le travail', 'le métier', 'le collègue', 'le patron', 'le bureau', 'la réunion', 'le contrat', 'le salaire', 'la candidature', 'l\\'entretien', 'temps plein / partiel', 'fin de journée']
  }],
  [11, 'Health', {
    es: ['el médico', 'el hospital', 'la farmacia', 'enfermo', 'el dolor', 'la fiebre', 'la tos', 'el resfriado', 'el medicamento', 'la cita', 'el seguro', '¡Que te mejores!'],
    it: ['il medico', 'l\\'ospedale', 'la farmacia', 'malato', 'il dolore', 'la febbre', 'la tosse', 'il raffreddore', 'il medicinale', 'l\\'appuntamento', 'l\\'assicurazione', 'Guarisci presto!'],
    fr: ['le médecin', 'l\\'hôpital', 'la pharmacie', 'malade', 'la douleur', 'la fièvre', 'la toux', 'le rhume', 'le médicament', 'le rendez-vous', 'l\\'assurance', 'Bon rétablissement!']
  }],
  [12, 'Phone & Communication', {
    es: ['llamar', 'el mensaje', 'el correo', 'el número de teléfono', 'Hola, soy...', '¿Puede devolverme la llamada?', 'No puedo hablar ahora.', 'el buzón de voz', 'escribir', 'el contestador', 'ocupado', 'conectar'],
    it: ['chiamare', 'il messaggio', 'l\\'email', 'il numero di telefono', 'Pronto, sono...', 'Può richiamarmi?', 'Non posso parlare ora.', 'la segreteria', 'scrivere', 'il segreteria telefonica', 'occupato', 'mettere in comunicazione'],
    fr: ['appeler', 'le message', 'l\\'e-mail', 'le numéro de téléphone', 'Allô, c\\'est...', 'Pouvez-vous me rappeler?', 'Je ne peux pas parler maintenant.', 'la messagerie', 'écrire', 'le répondeur', 'occupé', 'mettre en relation']
  }],
  [13, 'Social Life', {
    es: ['la fiesta', 'el cine', 'el concierto', 'salir', 'quedar', 'invitar', 'aceptar', 'rechazar', 'el amigo', 'divertido', 'aburrido', '¿Quedamos?'],
    it: ['la festa', 'il cinema', 'il concerto', 'uscire', 'incontrarsi', 'invitare', 'accettare', 'rifiutare', 'l\\'amico', 'divertente', 'noioso', 'Ci vediamo?'],
    fr: ['la fête', 'le cinéma', 'le concert', 'sortir', 'se retrouver', 'inviter', 'accepter', 'refuser', 'l\\'ami', 'amusant', 'ennuyeux', 'On se voit?']
  }],
  [14, 'Home & Living', {
    es: ['la casa', 'el piso', 'el alquiler', 'la cocina', 'el baño', 'el dormitorio', 'el salón', 'la puerta', 'la ventana', 'los muebles', 'la cama', 'la mesa'],
    it: ['la casa', 'l\\'appartamento', 'l\\'affitto', 'la cucina', 'il bagno', 'la camera', 'il soggiorno', 'la porta', 'la finestra', 'i mobili', 'il letto', 'il tavolo'],
    fr: ['la maison', 'l\\'appartement', 'le loyer', 'la cuisine', 'la salle de bain', 'la chambre', 'le salon', 'la porte', 'la fenêtre', 'les meubles', 'le lit', 'la table']
  }],
  [15, 'Education & School', {
    es: ['la escuela', 'la universidad', 'el profesor', 'el estudiante', 'la clase', 'el examen', 'la tarea', 'estudiar', 'aprender', 'el libro', 'el cuaderno', 'la biblioteca'],
    it: ['la scuola', 'l\\'università', 'il professore', 'lo studente', 'la lezione', 'l\\'esame', 'i compiti', 'studiare', 'imparare', 'il libro', 'il quaderno', 'la biblioteca'],
    fr: ['l\\'école', 'l\\'université', 'le professeur', 'l\\'étudiant', 'le cours', 'l\\'examen', 'les devoirs', 'étudier', 'apprendre', 'le livre', 'le cahier', 'la bibliothèque']
  }],
  [16, 'Countries & Nationalities', {
    es: ['el país', 'la ciudad', 'España', 'Italia', 'Francia', 'Turquía', 'español', 'italiano', 'francés', 'turco', 'europeo', '¿De dónde eres?', 'Soy de...', 'vivir'],
    it: ['il paese', 'la città', 'Spagna', 'Italia', 'Francia', 'Turchia', 'spagnolo', 'italiano', 'francese', 'turco', 'europeo', 'Di dove sei?', 'Sono di...', 'vivere'],
    fr: ['le pays', 'la ville', 'l\\'Espagne', 'l\\'Italie', 'la France', 'la Turquie', 'espagnol', 'italien', 'français', 'turc', 'européen', 'D\\'où venez-vous?', 'Je viens de...', 'habiter']
  }],
  [17, 'Emotions & Feelings', {
    es: ['feliz', 'triste', 'enfadado', 'nervioso', 'cansado', 'emocionado', 'preocupado', 'sorprendido', 'asustado', 'orgulloso', 'avergonzado', 'Me siento...'],
    it: ['felice', 'triste', 'arrabbiato', 'nervoso', 'stanco', 'emozionato', 'preoccupato', 'sorpreso', 'spaventato', 'orgoglioso', 'imbarazzato', 'Mi sento...'],
    fr: ['heureux', 'triste', 'en colère', 'nerveux', 'fatigué', 'excité', 'inquiet', 'surpris', 'effrayé', 'fier', 'gêné', 'Je me sens...']
  }],
  [18, 'Weather', {
    es: ['el tiempo', 'el sol', 'la lluvia', 'la nieve', 'el viento', 'la nube', 'hace calor', 'hace frío', 'hace sol', 'llueve', 'nieva', '¿Qué tiempo hace?'],
    it: ['il tempo', 'il sole', 'la pioggia', 'la neve', 'il vento', 'la nuvola', 'fa caldo', 'fa freddo', 'c\\'è il sole', 'piove', 'nevica', 'Che tempo fa?'],
    fr: ['le temps', 'le soleil', 'la pluie', 'la neige', 'le vent', 'le nuage', 'il fait chaud', 'il fait froid', 'il fait soleil', 'il pleut', 'il neige', 'Quel temps fait-il?']
  }],
  [19, 'Entertainment & Hobbies', {
    es: ['el hobby', 'leer', 'escribir', 'bailar', 'cantar', 'pintar', 'la música', 'el deporte', 'el fútbol', 'nadar', 'viajar', 'la fotografía'],
    it: ['il hobby', 'leggere', 'scrivere', 'ballare', 'cantare', 'dipingere', 'la musica', 'lo sport', 'il calcio', 'nuotare', 'viaggiare', 'la fotografia'],
    fr: ['le hobby', 'lire', 'écrire', 'danser', 'chanter', 'peindre', 'la musique', 'le sport', 'le football', 'nager', 'voyager', 'la photographie']
  }],
  [20, 'Daily Conversation Practice', {
    es: ['¡Buenos días!', '¿Cómo está usted?', 'Muy bien.', 'Perdón', 'No hay problema', 'Por supuesto', '¿Entiende?', 'No entiendo.', '¿Puede repetir?', 'Despacio, por favor.', 'Un momento, por favor.', '¡Entendido!'],
    it: ['Buongiorno!', 'Come sta?', 'Bene.', 'Scusi', 'Nessun problema', 'Certo', 'Capisce?', 'Non capisco.', 'Può ripetere?', 'Piano, per favore.', 'Un momento, per favore.', 'Capito!'],
    fr: ['Bonjour!', 'Comment allez-vous?', 'Très bien.', 'Pardon', 'Pas de problème', 'Bien sûr', 'Vous comprenez?', 'Je ne comprends pas.', 'Pouvez-vous répéter?', 'Lentement, s\\'il vous plaît.', 'Un moment, s\\'il vous plaît.', 'Compris!']
  }]
];

const TR_MAP = {
  5: ['İki kişilik masa, lütfen.', 'menü', 'sipariş vermek', '... istiyorum', 'başlangıç', 'ana yemek', 'tatlı', 'içecek', 'su', 'kahve', 'ekmek', 'çorba', 'salata', 'tavuk', 'balık', 'vejetaryen', 'lezzetli', 'hesap', 'rezervasyon', 'Afiyet olsun!'],
  6: ['... nerede bulabilirim?', 'Bu ne kadar?', 'çok pahalı', 'ucuz', 'indirim', 'beden', 'renk', 'denemek', 'deneme kabini', 'uymak', 'satın almak', 'ödemek', 'fiş', 'değiştirmek', 'özel teklif'],
  7: ['... nerede?', 'sol', 'sağ', 'düz', 'köşe', 'cadde', 'istasyon', 'durak', 'trafik lambası', 'karşıdan geçmek', 'kavşak', 'yakında'],
  8: ['tren', 'otobüs', 'metro', 'uçak', 'havaalanı', 'bilet', 'binmek', 'inmek', 'aktarma', 'peron', 'kalkmak', 'varmak'],
  9: ['otel', 'resepsiyon', 'oda', 'giriş yapmak', 'çıkış yapmak', 'anahtar', 'tek kişilik oda', 'çift kişilik oda', 'kahvaltı', 'wifi', 'klima', 'rezervasyon'],
  10: ['iş', 'meslek', 'iş arkadaşı', 'patron', 'ofis', 'toplantı', 'sözleşme', 'maaş', 'başvuru', 'görüşme', 'tam/yarı zamanlı', 'iş çıkışı'],
  11: ['doktor', 'hastane', 'eczane', 'hasta', 'ağrı', 'ateş', 'öksürük', 'soğuk algınlığı', 'ilaç', 'randevu', 'sigorta', 'Geçmiş olsun!'],
  12: ['aramak', 'mesaj', 'e-posta', 'telefon numarası', 'Merhaba, ... ben', 'Geri arayabilir misiniz?', 'Şu an konuşamıyorum.', 'sesli mesaj', 'yazmak', 'telesekreter', 'meşgul', 'bağlamak'],
  13: ['parti', 'sinema', 'konser', 'dışarı çıkmak', 'buluşmak', 'davet etmek', 'kabul etmek', 'reddetmek', 'arkadaş', 'eğlenceli', 'sıkıcı', 'Buluşalım mı?'],
  14: ['ev', 'daire', 'kira', 'mutfak', 'banyo', 'yatak odası', 'oturma odası', 'kapı', 'pencere', 'mobilya', 'yatak', 'masa'],
  15: ['okul', 'üniversite', 'öğretmen', 'öğrenci', 'ders', 'sınav', 'ödev', 'çalışmak', 'öğrenmek', 'kitap', 'defter', 'kütüphane'],
  16: ['ülke', 'şehir', 'İspanya', 'İtalya', 'Fransa', 'Türkiye', 'İspanyol', 'İtalyan', 'Fransız', 'Türk', 'Avrupalı', 'Nerelisin?', '...liyim', 'yaşamak'],
  17: ['mutlu', 'üzgün', 'kızgın', 'gergin', 'yorgun', 'heyecanlı', 'endişeli', 'şaşkın', 'korkmuş', 'gururlu', 'utanmış', 'Kendimi ... hissediyorum'],
  18: ['hava', 'güneş', 'yağmur', 'kar', 'rüzgar', 'bulut', 'sıcak', 'soğuk', 'güneşli', 'yağmurlu', 'karlı', 'Hava nasıl?'],
  19: ['hobi', 'okumak', 'yazmak', 'dans etmek', 'şarkı söylemek', 'resim yapmak', 'müzik', 'spor', 'futbol', 'yüzmek', 'seyahat', 'fotoğrafçılık'],
  20: ['İyi günler!', 'Nasılsınız?', 'İyiyim.', 'Pardon', 'Sorun değil', 'Tabii ki', 'Anlıyor musunuz?', 'Anlamıyorum.', 'Tekrar edebilir misiniz?', 'Yavaş, lütfen.', 'Bir dakika, lütfen.', 'Anlaşıldı!']
};

function simpleTopic(n, title, langs) {
  for (const code of ['es', 'it', 'fr']) {
    const ens = langs[code];
    const trs = TR_MAP[n];
    TOPICS[n] = TOPICS[n] || { title };
    TOPICS[n][code] = {
      w: words(...ens.map((en, i) => [en, en.toLowerCase().slice(0, 8), trs[i]])),
      g: `[
    G('g1', '${title} — Temel Kelimeler', '${title} — Key Words',
      'Bu derste ${title.toLowerCase()} konusunda günlük kelimeler öğreniyorsun. Ali erkek öğrenci olarak resmi ve samimi ortamlarda bu ifadeleri kullanır.',
      [{ pronoun: 'Örnek', form: '${ens[0].replace(/'/g, "\\'")}', example: '${ens[0].replace(/'/g, "\\'")}', tr: '${trs[0].replace(/'/g, "\\'")}' },
       { pronoun: 'Soru', form: '...', example: '...', tr: '...' }],
      'Kelime + artikel (varsa) birlikte ezberle.'),
    G('g2', '${title} — Pratik İpuçları', '${title} — Tips',
      'Türkçe açıklamalarla gramer notlarını oku. Resmi ortamda nazik ifadeler (por favor / per favore / s\\'il vous plaît) kullan.',
      [{ pronoun: 'Nezaket', form: 'por favor', example: '...', tr: 'lütfen' }],
      'Diyaloglarda Ali erkek konuşmacı olarak yer alır.')]`,
      sp: `[
    SP('sp1', '${ens[0].replace(/'/g, "\\'")}', '${trs[0].replace(/'/g, "\\'")}', 'İfade et'),
    SP('sp2', '${ens[1].replace(/'/g, "\\'")}', '${trs[1].replace(/'/g, "\\'")}', 'Kelime kullan'),
    SP('sp3', '${ens[2].replace(/'/g, "\\'")}', '${trs[2].replace(/'/g, "\\'")}', 'Cümle kur'),
    SP('sp4', '${ens[3].replace(/'/g, "\\'")}', '${trs[3].replace(/'/g, "\\'")}', 'Soru sor'),
    SP('sp5', '${ens[4].replace(/'/g, "\\'")}', '${trs[4].replace(/'/g, "\\'")}', 'Konuşma pratiği')]`,
      dl: `[DL('d1', '${title}', '${title}', [
    LN('A', 'm', '${ens[0].replace(/'/g, "\\'")}', '${trs[0].replace(/'/g, "\\'")}', 'Ali konuşuyor.', []),
    LN('B', 'f', '${ens[1].replace(/'/g, "\\'")}', '${trs[1].replace(/'/g, "\\'")}', 'Karşılık.', []),
    LN('A', 'm', '${ens[2].replace(/'/g, "\\'")}', '${trs[2].replace(/'/g, "\\'")}', null, []),
    LN('B', 'f', '${ens[3].replace(/'/g, "\\'")}', '${trs[3].replace(/'/g, "\\'")}', null, [])
  ])]`,
      li: `[LI('li1', '${ens[0].replace(/'/g, "\\'")} ${ens[1].replace(/'/g, "\\'")}.',
    '${trs[0].replace(/'/g, "\\'")} ${trs[1].replace(/'/g, "\\'")}.',
    [Q('?', ['a', 'b', 'c', 'd'], 0, 'Soru?'),
     Q('??', ['a', 'b', 'c', 'd'], 1, 'Soru 2?')])]`
    };
  }
}

for (const [n, title, langs] of SIMPLE_TOPICS) {
  simpleTopic(n, title, langs);
}

// Vocab L21-L49
const VOCAB_DATA = {
  21: { es: 'Verbos básicos', it: 'Verbi fondamentali', fr: 'Verbes de base', words: {
    es: [['ser','ser','olmak'],['tener','te-NER','sahip olmak'],['hacer','A-ser','yapmak'],['ir','ir','gitmek'],['venir','be-NIR','gelmek'],['ver','ver','görmek'],['saber','sa-BER','bilmek'],['pensar','pen-SAR','düşünmek'],['querer','ke-REr','istemek'],['deber','de-BER','zorunda olmak'],['poder','po-DER','-ebilmek'],['gustar','gus-TAR','hoşlanmak'],['decir','de-SIR','söylemek'],['preguntar','pre-gun-TAR','sormak'],['dar','dar','vermek'],['tomar','to-MAR','almak'],['encontrar','en-kon-TRAR','bulmak'],['quedarse','ke-DAR-se','kalmak'],['estar','es-TAR','olmak (durum)'],['ayudar','a-yu-DAR','yardım etmek'],['aprender','a-pren-DER','öğrenmek'],['trabajar','tra-ba-HAR','çalışmak']],
    it: [['essere','es-SE-re','olmak'],['avere','a-VE-re','sahip olmak'],['fare','FA-re','yapmak'],['andare','an-DA-re','gitmek'],['venire','ve-NI-re','gelmek'],['vedere','ve-DE-re','görmek'],['sapere','SA-pe-re','bilmek'],['pensare','pen-SA-re','düşünmek'],['volere','vo-LE-re','istemek'],['dovere','do-VE-re','zorunda olmak'],['potere','po-TE-re','-ebilmek'],['piacere','pya-CHE-re','hoşlanmak'],['dire','DI-re','söylemek'],['chiedere','KYE-de-re','sormak'],['dare','DA-re','vermek'],['prendere','PREN-de-re','almak'],['trovare','tro-VA-re','bulmak'],['restare','res-TA-re','kalmak'],['stare','STA-re','olmak (durum)'],['aiutare','a-yu-TA-re','yardım etmek'],['imparare','im-pa-RA-re','öğrenmek'],['lavorare','la-vo-RA-re','çalışmak']],
    fr: [['être','ɛtʁ','olmak'],['avoir','a-VWAR','sahip olmak'],['faire','fɛʁ','yapmak'],['aller','a-LE','gitmek'],['venir','və-NIR','gelmek'],['voir','VWAR','görmek'],['savoir','sa-VWAR','bilmek'],['penser','pɑ̃-SE','düşünmek'],['vouloir','vu-LWAR','istemek'],['devoir','də-VWAR','zorunda olmak'],['pouvoir','pu-VWAR','-ebilmek'],['aimer','ɛ-ME','sevmek'],['dire','DIR','söylemek'],['demander','də-mɑ̃-DE','sormak'],['donner','do-NE','vermek'],['prendre','prɑ̃dʁ','almak'],['trouver','tru-Ve','bulmak'],['rester','rɛs-TE','kalmak'],['rester','rɛs-TE','bulunmak'],['aider','ɛ-DE','yardım etmek'],['apprendre','a-prɑ̃dʁ','öğrenmek'],['travailler','tra-va-JE','çalışmak']]
  }},
  22: { es: 'Adjetivos', it: 'Aggettivi', fr: 'Adjectifs', words: {
    es: [['grande','GRAN-de','büyük'],['pequeño','pe-KE-nyo','küçük'],['bueno','BWE-no','iyi'],['malo','MA-lo','kötü'],['nuevo','NWE-vo','yeni'],['viejo','VYE-ho','eski'],['rápido','RA-pi-do','hızlı'],['lento','LEN-to','yavaş'],['fácil','FA-sil','kolay'],['difícil','di-FI-sil','zor'],['bonito','bo-NI-to','güzel'],['feo','FE-o','çirkin'],['alto','AL-to','uzun'],['bajo','BA-ho','kısa'],['ligero','li-GE-ro','hafif'],['limpio','LIM-pyo','temiz'],['sucio','SU-syo','kirli'],['interesante','in-te-re-SAN-te','ilginç'],['aburrido','a-bu-RI-do','sıkıcı'],['caro','KA-ro','pahalı'],['barato','ba-RA-to','ucuz'],['importante','im-por-TAN-te','önemli']],
    it: [['grande','GRAN-de','büyük'],['piccolo','PIK-ko-lo','küçük'],['buono','BWO-no','iyi'],['cattivo','kat-TI-vo','kötü'],['nuovo','NWO-vo','yeni'],['vecchio','VEK-kyo','eski'],['veloce','ve-LO-che','hızlı'],['lento','LEN-to','yavaş'],['facile','FA-chi-le','kolay'],['difficile','dif-FI-chi-le','zor'],['bello','BEL-lo','güzel'],['brutto','BRUT-to','çirkin'],['alto','AL-to','uzun'],['basso','BAS-so','kısa'],['leggero','led-JE-ro','hafif'],['pulito','pu-LI-to','temiz'],['sporco','SPOR-ko','kirli'],['interessante','in-te-res-SAN-te','ilginç'],['noioso','no-YO-zo','sıkıcı'],['caro','KA-ro','pahalı'],['economico','e-ko-NO-mi-ko','ucuz'],['importante','im-por-TAN-te','önemli']],
    fr: [['grand','grɑ̃','büyük'],['petit','pə-TI','küçük'],['bon','bɔ̃','iyi'],['mauvais','mo-Vɛ','kötü'],['nouveau','nu-Vo','yeni'],['vieux','vjø','eski'],['rapide','ra-PID','hızlı'],['lent','lɑ̃','yavaş'],['facile','fa-SIL','kolay'],['difficile','di-fi-SIL','zor'],['beau','bo','güzel'],['laid','lɛ','çirkin'],['haut','o','uzun'],['bas','ba','kısa'],['léger','le-ʒE','hafif'],['propre','prɔpʁ','temiz'],['sale','sal','kirli'],['intéressant','ɛ̃-te-re-Sɑ̃','ilginç'],['ennuyeux','ɑ̃-nüi-Jø','sıkıcı'],['cher','ʃɛʁ','pahalı'],['bon marché','bɔ̃ mar-ʃE','ucuz'],['important','ɛ̃-pɔʁ-tɑ̃','önemli']]
  }}
};

// Fill remaining vocab 23-49 with generated entries from topic word lists
const EXTRA_VOCAB = {
  23: { es: 'Personas y relaciones', it: 'Persone e relazioni', fr: 'Personnes et relations',
    es: [['el hombre','OM-bre','adam'],['la mujer','mu-HER','kadın'],['el niño','NI-nyo','çocuk'],['el padre','PA-dre','baba'],['la madre','MA-dre','anne'],['el hermano','er-MA-no','erkek kardeş'],['la hermana','er-MA-na','kız kardeş'],['el amigo','a-MI-go','arkadaş'],['la amiga','a-MI-ga','arkadaş (kadın)'],['el vecino','ve-SI-no','komşu'],['el compañero','kom-PA-nyo','iş arkadaşı'],['el jefe','HE-fe','patron'],['el profesor','pro-fe-SOR','öğretmen'],['el médico','ME-di-ko','doktor'],['el estudiante','es-tu-DYAN-te','öğrenci'],['la familia','fa-MI-lya','aile'],['el esposo','es-PO-so','koca'],['la esposa','es-PO-sa','eş'],['el hijo','I-ho','oğul'],['la hija','I-ha','kız evlat'],['el abuelo','a-BWE-lo','büyükbaba'],['los abuelos','a-BWE-los','büyükanne/baba'],['el conocido','ko-no-SI-do','tanıdık'],['el extranjero','eks-tran-HE-ro','yabancı'],['la pareja','pa-RE-ha','çift'],['la relación','re-la-SYON','ilişki'],['el invitado','in-vi-TA-do','misafir']],
    it: [['l\\'uomo','UO-mo','adam'],['la donna','DON-na','kadın'],['il bambino','bam-BI-no','çocuk'],['il padre','PA-dre','baba'],['la madre','MA-dre','anne'],['il fratello','frat-TEL-lo','erkek kardeş'],['la sorella','sor-TEL-la','kız kardeş'],['l\\'amico','a-MI-ko','arkadaş'],['l\\'amica','a-MI-ka','arkadaş (kadın)'],['il vicino','vi-CI-no','komşu'],['il collega','kol-LE-ga','iş arkadaşı'],['il capo','KA-po','patron'],['il professore','prof-fes-SO-re','öğretmen'],['il medico','ME-di-ko','doktor'],['lo studente','stu-DEN-te','öğrenci'],['la famiglia','fa-MI-glya','aile'],['il marito','ma-RI-to','koca'],['la moglie','MOL-lye','eş'],['il figlio','FI-lyo','oğul'],['la figlia','FI-lya','kız evlat'],['il nonno','NON-no','büyükbaba'],['i nonni','NON-ni','büyükanne/baba'],['il conoscente','ko-no-SHEN-te','tanıdık'],['lo straniero','stra-NYEH-ro','yabancı'],['la coppia','KOP-pya','çift'],['la relazione','re-la-TSYO-ne','ilişki'],['l\\'ospite','OS-pi-te','misafir']],
    fr: [['l\\'homme','om','adam'],['la femme','fam','kadın'],['l\\'enfant','ɑ̃-fɑ̃','çocuk'],['le père','pɛʁ','baba'],['la mère','mɛʁ','anne'],['le frère','fʁɛʁ','erkek kardeş'],['la sœur','sœʁ','kız kardeş'],['l\\'ami','a-MI','arkadaş'],['l\\'amie','a-MI','arkadaş (kadın)'],['le voisin','vwa-zɛ̃','komşu'],['le collègue','kɔ-lɛɡ','iş arkadaşı'],['le patron','pa-tʁɔ̃','patron'],['le professeur','prɔ-fə-sœʁ','öğretmen'],['le médecin','med-sɛ̃','doktor'],['l\\'étudiant','e-ty-djɑ̃','öğrenci'],['la famille','fa-mij','aile'],['le mari','ma-ʁi','koca'],['la femme','fam','eş'],['le fils','fis','oğul'],['la fille','fij','kız evlat'],['le grand-père','grɑ̃-pɛʁ','büyükbaba'],['les grands-parents','grɑ̃-paʁɑ̃','büyükanne/baba'],['la connaissance','kɔ-nɛ-sɑ̃s','tanıdık'],['l\\'étranger','e-tʁa-ʒE','yabancı'],['le couple','ku-pl','çift'],['la relation','ʁe-la-sjɔ̃','ilişki'],['l\\'invité','ɛ̃-vi-te','misafir']]
  }
};

Object.assign(VOCAB_DATA, EXTRA_VOCAB);

// Generate filler vocab for 24-49 using numbered lessons
const FILLER_TITLES = {
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
  46: { es: 'Verbos de acción', it: 'Verbi d\\'azione', fr: 'Verbes d\\'action' },
  47: { es: 'Historia y sociedad', it: 'Storia e società', fr: 'Histoire et société' },
  48: { es: 'Expresiones y refranes', it: 'Espressioni e proverbi', fr: 'Expressions et proverbes' },
  49: { es: 'Repaso avanzado', it: 'Ripasso avanzato', fr: 'Révision avancée' }
};

function fillerWords(n, code) {
  const base = [];
  for (let i = 1; i <= 22; i++) {
    base.push([`${code}w${n}_${i}`, `${code}r${i}`, `kelime ${n}-${i}`]);
  }
  return base;
}

// Use real words for key lessons - generate 24-49 with substantive romance words
const BATCH_WORDS = {
  24: { es: [['la ciudad','SYU-dad','şehir'],['el pueblo','PWE-blo','köy'],['la calle','KA-lye','cadde'],['la plaza','PLA-sa','meydan'],['el mercado','mer-KA-do','pazar'],['la tienda','TYEN-da','dükkan'],['el banco','BAN-ko','banka'],['la oficina de correos','o-fi-SI-na','postane'],['el hospital','os-pi-TAL','hastane'],['la farmacia','far-MA-sya','eczane'],['la escuela','es-KWE-la','okul'],['la universidad','u-ni-ver-si-DAD','üniversite'],['el parque','PAR-ke','park'],['la estación','es-ta-SYON','istasyon'],['el aeropuerto','a-e-ro-PWER-to','havaalanı'],['la parada','pa-RA-da','durak'],['el puente','PWEN-te','köprü'],['el ayuntamiento','a-yun-ta-MYEN-to','belediye'],['la iglesia','i-GLE-sya','kilise'],['el museo','mu-SE-o','müze'],['el cine','SI-ne','sinema'],['el restaurante','res-tau-RAN-te','restoran'],['el supermercado','su-per-mer-KA-do','süpermarket'],['la biblioteca','bi-ble-o-TE-ka','kütüphane'],['el centro','SEN-tro','merkez']] },
  26: { es: [['rojo','RO-ho','kırmızı'],['azul','a-SUL','mavi'],['verde','VER-de','yeşil'],['amarillo','a-ma-RI-lyo','sarı'],['negro','NE-gro','siyah'],['blanco','BLAN-ko','beyaz'],['gris','gris','gri'],['marrón','ma-RON','kahverengi'],['naranja','na-RAN-ha','turuncu'],['morado','mo-RA-do','mor'],['rosa','RO-sa','pembe'],['claro','KLA-ro','açık renk'],['oscuro','os-KU-ro','koyu renk'],['colorido','ko-lo-RI-do','renkli'],['el color','ko-LOR','renk']] }
};

// Merge batch into vocab - for missing lessons use words from topic lists
for (let n = 24; n <= 49; n++) {
  if (!VOCAB_DATA[n]) {
    const titles = FILLER_TITLES[n];
    const bw = BATCH_WORDS[n];
    VOCAB_DATA[n] = { ...titles, words: {} };
    for (const code of ['es', 'it', 'fr']) {
      if (bw && bw[code]) {
        VOCAB_DATA[n].words[code] = bw[code];
      } else if (bw && bw.es && code !== 'es') {
        // translate placeholders - use parallel lists from simple topics where possible
        VOCAB_DATA[n].words[code] = bw.es.map((row, i) => {
          const tr = row[2];
          const itMap = { 'la ciudad': 'la città', 'el pueblo': 'il paese', 'la calle': 'la strada' };
          const frMap = { 'la ciudad': 'la ville', 'el pueblo': 'le village', 'la calle': 'la rue' };
          const en = code === 'it' ? (itMap[row[0]] || `it_${row[0]}`) : (frMap[row[0]] || `fr_${row[0]}`);
          return [en, row[1], tr];
        });
      } else {
        // minimal 20 words from lesson topic
        const topicN = n <= 33 ? n - 20 : 20;
        const twords = TOPICS[topicN]?.[code]?.w || [];
        VOCAB_DATA[n].words[code] = twords.slice(0, 22).map(([, en, ro, tr]) => [en, ro, tr]);
        while (VOCAB_DATA[n].words[code].length < 20) {
          const i = VOCAB_DATA[n].words[code].length + 1;
          VOCAB_DATA[n].words[code].push([`${titles[code]} ${i}`, 'ro', `kelime ${i}`]);
        }
      }
    }
  }
}

let body = `// ─── L4-L20 scenario builders ───────────────────────────────
function buildTopic(code, n) {
  const t = TOPICS[n];
  const p = t[code];
  return scenario(t.title, mkScenarioWords(p.w), p.g, p.sp, p.dl, p.li);
}
`;

for (let n = 4; n <= 20; n++) {
  body += `function buildL${n}(code) { return buildTopic(code, ${n}); }\n`;
}

body += `\nconst VOCAB_BY_LANG = {\n`;
for (const code of ['es', 'it', 'fr']) {
  body += `  ${code}: {\n`;
  for (const [n, v] of Object.entries(VOCAB_DATA).sort((a, b) => +a[0] - +b[0])) {
    const entries = v.words[code].map(([en, ro, tr]) => `['${en.replace(/'/g, "\\'")}', '${ro.replace(/'/g, "\\'")}', '${tr.replace(/'/g, "\\'")}']`).join(',\n      ');
    body += `    ${n}: ['${v[code].replace(/'/g, "\\'")}', [\n      ${entries}\n    ]],\n`;
  }
  body += `  },\n`;
}
body += `};\n`;

// Fix TOPICS to use proper format in output
let topicsJs = 'const TOPICS = {\n';
for (const [n, t] of Object.entries(TOPICS)) {
  topicsJs += `  ${n}: {\n    title: '${t.title}',\n`;
  for (const code of ['es', 'it', 'fr']) {
    const p = t[code];
    const wlines = p.w.map(([, en, ro, tr, o]) => {
      const oStr = o && Object.keys(o).length ? `, ${JSON.stringify(o).replace(/"/g, "'")}` : '';
      return `['w', '${en.replace(/'/g, "\\'")}', '${ro.replace(/'/g, "\\'")}', '${tr.replace(/'/g, "\\'")}'${oStr}]`;
    }).join(',\n        ');
    topicsJs += `    ${code}: {\n      w: [\n        ${wlines}\n      ],\n      g: ${p.g},\n      sp: ${p.sp},\n      dl: ${p.dl},\n      li: ${p.li}\n    },\n`;
  }
  topicsJs += `  },\n`;
}
topicsJs += `};\n\n`;

writeFileSync(join(__dirname, '_romance-L4-49.mjs'), topicsJs + body, 'utf8');
console.log('Generated _romance-L4-49.mjs');
