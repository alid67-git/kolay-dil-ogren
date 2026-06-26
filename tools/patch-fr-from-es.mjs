#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.dirname(fileURLToPath(import.meta.url));
const es = fs.readFileSync(path.join(root, 'gen-spanish-lessons.mjs'), 'utf8');
let fr = fs.readFileSync(path.join(root, 'gen-french-lessons.mjs'), 'utf8');

function tr(s) {
  const map = [
    [/İspanyolcada/g, 'Fransızcada'], [/İspanyolca/g, 'Fransızca'], [/Spanish/g, 'French'],
    [/¿Qué hora es\?/g, 'Quelle heure est-il ?'], [/Es la una/g, "Il est une heure"],
    [/Son las /g, 'Il est '], [/A las /g, 'À '], [/ y media/g, ' et demie'],
    [/Buenos días/g, 'Bonjour'], [/Buenas tardes/g, 'Bonjour'], [/Buenas noches/g, 'Bonsoir'],
    [/¿Cuánto cuesta/g, 'Combien coûte'], [/Cuesta /g, 'Coûte '], [/La cuenta/g, "L'addition"],
    [/Por favor/g, "S'il vous plaît"], [/Gracias/g, 'Merci'], [/De nada/g, 'De rien'],
    [/¿Dónde está/g, 'Où est'], [/¿Dónde/g, 'Où'], [/a la derecha/g, 'à droite'],
    [/a la izquierda/g, 'à gauche'], [/todo recto/g, 'tout droit'], [/cerca/g, 'près'],
    [/¿Cómo te llamas/g, "Comment tu t'appelles"], [/Me llamo/g, "Je m'appelle"],
    [/Mucho gusto/g, 'Enchanté'], [/Hola/g, 'Bonjour'], [/Adiós/g, 'Au revoir'],
    [/Perdón/g, 'Pardon'], [/Disculpe/g, 'Excusez-moi'], [/Lo siento/g, 'Je suis désolé'],
    [/¿Habla/g, 'Parlez-vous'], [/inglés/g, 'anglais'], [/español/g, 'français'],
    [/un billete/g, 'un billet'], [/el tren/g, 'le train'], [/la estación/g, 'la gare'],
    [/el hotel/g, "l'hôtel"], [/habitación/g, 'chambre'], [/reserva/g, 'réservation'],
    [/el médico/g, 'le médecin'], [/la farmacia/g, 'la pharmacie'],
    [/tengo /g, "j'ai "], [/quiero /g, 'je veux '], [/necesito /g, "j'ai besoin de "],
    [/puedo /g, 'je peux '], [/estoy /g, 'je suis '], [/está /g, 'il est '],
    [/el hombre/g, "l'homme"], [/la mujer/g, 'la femme'], [/el niño/g, "l'enfant"],
    [/restaurante/g, 'restaurant'], [/tienda/g, 'magasin'], [/precio/g, 'prix'],
    [/hoy/g, "aujourd'hui"], [/mañana/g, 'demain'], [/ayer/g, 'hier'],
    [/lunes/g, 'lundi'], [/martes/g, 'mardi'], [/miércoles/g, 'mercredi'],
    [/jueves/g, 'jeudi'], [/viernes/g, 'vendredi'], [/sábado/g, 'samedi'], [/domingo/g, 'dimanche'],
    [/¿Entiende/g, 'Comprenez-vous'], [/más despacio/g, 'plus lentement'],
    [/teléfono/g, 'téléphone'], [/correo/g, 'e-mail'],
    [/ser /g, 'être '], [/Ser /g, 'Être '], [/soy/g, 'je suis'], [/eres/g, 'tu es'],
    [/somos/g, 'nous sommes'], [/son /g, 'ils '], [/un /g, 'un '], [/una /g, 'une '],
    [/el /g, 'le '], [/la /g, 'la '], [/los /g, 'les '], [/las /g, 'les '],
    [/Grundverben/g, 'Verbes essentiels'], [/Grundwörter/g, 'Mots essentiels'],
  ];
  let r = s;
  for (const [a, b] of map) r = r.replace(a, b);
  return r;
}

const esL4 = es.indexOf('const L4 = scenario');
const esVocab = es.indexOf('const VOCAB = {');
const esAll = es.indexOf('const ALL = {');
const scenarios = tr(es.slice(esL4, esVocab));
const vocab = tr(es.slice(esVocab, esAll));
const allAndRest = es.slice(esAll);

const headEnd = fr.indexOf('function mkFrScenario');
const head = fr.slice(0, headEnd);
const tailMatch = fr.match(/\/\/ ─── Write files[\s\S]*/);
const tail = tailMatch ? tailMatch[0] : es.match(/\/\/ ─── Write files[\s\S]*/)[0].replace('Spanish', 'French').replace('languages/es', 'languages/fr');

const out = head + scenarios + '\n' + vocab + '\n' + allAndRest.replace('Spanish', 'French').replace('languages/es', 'languages/fr') + '\n' + tail;
fs.writeFileSync(path.join(root, 'gen-french-lessons.mjs'), out);
console.log('Rebuilt gen-french-lessons.mjs');
