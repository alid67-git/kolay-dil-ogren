const L35 = {
  title: "Na Farmácia",
  words: [
    { en: "a farmácia", tr: "eczane", pron: "a farmásya", bd: "dişil; farmácia de plantão = nöbetçi eczane" },
    { en: "o remédio", tr: "ilaç", pron: "u remédyu", bd: "eril; tomar remédio = ilaç almak" },
    { en: "o medicamento", tr: "ilaç (daha resmi)", pron: "u medikamẽntu", bd: "eril; receita de medicamento = ilaç reçetesi" },
    { en: "a receita", tr: "reçete", pron: "a reseyta", bd: "dişil; receita médica = doktor reçetesi" },
    { en: "a dor de cabeça", tr: "baş ağrısı", pron: "a dor dshi kabésa", bd: "dişil; cefaleia = daha teknik" },
    { en: "a febre", tr: "ateş", pron: "a fébri", bd: "dişil; estar com febre = ateşi olmak" },
    { en: "a tosse", tr: "öksürük", pron: "a tossi", bd: "dişil; tossir = öksürmek" },
    { en: "o resfriado", tr: "nezle / soğuk algınlığı", pron: "u reshfriadu", bd: "eril; estar resfriado = nezleli olmak" },
    { en: "a alergia", tr: "alerji", pron: "a alerjiya", bd: "dişil; ter alergia a = ...alerjisi olmak" },
    { en: "o antiinflamatório", tr: "antienflamatuar", pron: "u ãtiĩflamatoryu", bd: "eril; para inflamação" },
    { en: "o analgésico", tr: "ağrı kesici", pron: "u analjéziku", bd: "eril; paracetamol, ibuprofeno" },
    { en: "o antibiótico", tr: "antibiyotik", pron: "u ãtibiotiku", bd: "eril; só com receita = sadece reçeteyle" },
    { en: "a pomada", tr: "merhem / krem", pron: "a pomada", bd: "dişil; pomada para queimadura = yanık için krem" },
    { en: "o curativo", tr: "yara bandı / pansuman", pron: "u kurativu", bd: "eril; fazer curativo = pansuman yapmak" },
    { en: "o comprimido", tr: "tablet / hap", pron: "u kõprimidu", bd: "eril; tomar dois comprimidos" },
    { en: "o xarope", tr: "şurup", pron: "u sharópi", bd: "eril; xarope para tosse = öksürük şurubu" },
    { en: "a cápsula", tr: "kapsül", pron: "a kapsula", bd: "dişil; cápsula de gelatina" },
    { en: "a dosagem", tr: "dozaj", pron: "a dozajẽy", bd: "dişil; dosagem correta = doğru dozaj" },
    { en: "Preciso de algo para...", tr: "...için bir şeye ihtiyacım var", pron: "presízu dshi awgu para", bd: "eczanede ilk cümle" },
    { en: "Posso comprar sem receita?", tr: "Reçetesiz alabilir miyim?", pron: "posu kõprár sẽy reseyta", bd: "serbest satış sorusu" }
  ],
  grammar: [
    {
      title: "Semptom Anlatma — ESTAR COM ve SENTIR",
      explanation: "Eczanede veya doktorda semptomları anlatmak için ESTAR COM (belirtisi olmak) ve SENTIR (hissetmek) kullanılır. 'Estou com febre' = Ateşim var. 'Sinto dor no peito' = Göğsümde ağrı var. 'Faz dois dias que' = İki gündür böyleyim.",
      table: [
        { pronoun: "Estar com febre", form: "Ateşi olmak", example: "Estou com febre desde ontem.", tr: "Dünden beri ateşim var." },
        { pronoun: "Estar com dor", form: "Ağrısı olmak", example: "Estou com dor de cabeça forte.", tr: "Çok şiddetli baş ağrım var." },
        { pronoun: "Sentir enjoo", form: "Mide bulantısı", example: "Estou sentindo enjoo.", tr: "Mide bulantısı hissediyorum." },
        { pronoun: "Faz X dias que", form: "Süredir böyle", example: "Faz três dias que estou tossindo.", tr: "Üç gündür öksürüyorum." },
        { pronoun: "Alergia a", form: "Alerji", example: "Tenho alergia a penicilina.", tr: "Penisiline alerjim var." },
        { pronoun: "Piorou", form: "Kötüleşti", example: "A dor piorou de noite.", tr: "Ağrı geceleri daha da kötüleşti." }
      ],
      note: "'Enjoo' = mide bulantısı (BP). 'Tonteira' = baş dönmesi. 'Fraqueza' = halsizlik. 'Coceira' = kaşıntı."
    },
    {
      title: "İlaç Kullanım Talimatları — Emir Kipi",
      explanation: "İlaç talimatları imperativo (emir kipi) veya infinitivo ile verilir. 'Tome dois comprimidos' = İki tablet alın. 'Não tome com leite' = Sütle içmeyin. 'Repita a cada oito horas' = Her sekiz saatte bir tekrarlayın.",
      table: [
        { pronoun: "Tome", form: "Alın (tome = tomar emir)", example: "Tome um comprimido de manhã.", tr: "Sabah bir tablet alın." },
        { pronoun: "Não tome", form: "Almayın", example: "Não tome com o estômago vazio.", tr: "Aç mideye almayın." },
        { pronoun: "Repita", form: "Tekrarlayın", example: "Repita a cada seis horas.", tr: "Her altı saatte bir tekrarlayın." },
        { pronoun: "Guarde", form: "Saklayın", example: "Guarde na geladeira.", tr: "Buzdolabında saklayın." },
        { pronoun: "Evite", form: "Kaçının", example: "Evite álcool durante o tratamento.", tr: "Tedavi süresince alkolden kaçının." },
        { pronoun: "Complete", form: "Tamamlayın", example: "Complete o ciclo de antibióticos.", tr: "Antibiyotik kürünü tamamlayın." }
      ],
      note: "Düzenli -AR imperativos: falar→fale, tomar→tome, guardar→guarde. -ER: beber→beba, comer→coma. -IR: abrir→abra."
    },
    {
      title: "Sağlık Sigortası ve Sistem — SUS ve Özel",
      explanation: "Brezilya'da iki sağlık sistemi var: SUS (Sistema Único de Saúde = Ulusal Sağlık Sistemi, ücretsiz) ve plano de saúde (özel sigorta). 'Tenho plano de saúde' = Özel sigortam var. Bu farkı anlatmak için SER (sistem türü) ve TER (sahiplik) kullanılır.",
      table: [
        { pronoun: "SUS", form: "público, gratuito", example: "Fui ao posto pelo SUS.", tr: "SUS ile sağlık merkezine gittim." },
        { pronoun: "Plano de saúde", form: "özel sigorta", example: "Meu plano cobre essa consulta.", tr: "Sigortam bu muayeneyi kapsıyor." },
        { pronoun: "Posto de saúde", form: "SUS klinik", example: "O posto fica perto de casa.", tr: "Klinik eve yakın." },
        { pronoun: "Consulta", form: "Muayene randevusu", example: "Marquei consulta para amanhã.", tr: "Yarın için muayene randevusu aldım." },
        { pronoun: "Particular", form: "Özel ödeme", example: "Vou pagar particular desta vez.", tr: "Bu sefer kendim ödeyeceğim." },
        { pronoun: "Farmácia popular", form: "Devlet eczanesi", example: "Na Farmácia Popular é mais barato.", tr: "Farmácia Popular'da daha ucuz." }
      ],
      note: "SUS = Brezilya anayasasında güvence altında evrensel sağlık hakkı. 'Farmácia Popular' = devletin sübvanse ettiği eczane programı."
    }
  ],
  speaking: [
    { q: "Eczaneye gidip baş ağrısı için bir şey isteyin.", a: "Boa tarde! Preciso de algo para dor de cabeça. Pode me recomendar?" },
    { q: "'Üç gündür öksürüyorum' nasıl?", a: "Faz três dias que estou tossindo. Está piorando." },
    { q: "Alerjinizi belirtin.", a: "Tenho alergia a aspirina. Tem uma alternativa?" },
    { q: "İlaç talimatını sorun.", a: "Como devo tomar esse remédio? Quantos comprimidos por dia?" },
    { q: "'Reçetesiz satılıyor mu?' nasıl?", a: "Posso comprar sem receita médica?" }
  ],
  dialogues: [
    {
      title: "Eczanede",
      lines: [
        { speaker: "Cliente", text: "Boa tarde! Estou com febre e dor de garganta há dois dias.", tr: "İyi günler! İki gündür ateşim ve boğaz ağrım var." },
        { speaker: "Farmacêutica", text: "Entendido. Você tem receita médica?", tr: "Anladım. Doktor reçeteniz var mı?" },
        { speaker: "Cliente", text: "Não. Fui ao médico, mas ainda não recebi a receita.", tr: "Hayır. Doktora gittim ama reçeteyi henüz almadım." },
        { speaker: "Farmacêutica", text: "Para febre, posso dar paracetamol sem receita. Para a garganta, temos pastilhas.", tr: "Ateş için, reçetesiz parasetamol verebilirim. Boğaz için pastillerimiz var." },
        { speaker: "Cliente", text: "Ótimo! Tenho alergia a ibuprofeno, tudo bem?", tr: "Harika! İbuprofene alerjim var, sorun olur mu?" },
        { speaker: "Farmacêutica", text: "Não tem problema! O paracetamol é diferente. Tome um comprimido a cada seis horas.", tr: "Sorun yok! Parasetamol farklı. Her altı saatte bir tablet alın." }
      ]
    }
  ],
  listening: {
    text: "O Sistema Único de Saúde, o SUS, é um dos maiores sistemas de saúde pública do mundo. Criado pela Constituição de 1988, garante atendimento gratuito a todos os brasileiros. O SUS realiza milhões de consultas, cirurgias e vacinas por ano. Porém, enfrenta desafios como superlotação e falta de recursos. Por isso, muitos brasileiros que podem pagar optam por planos de saúde privados. A Farmácia Popular, programa do governo, oferece medicamentos essenciais com até noventa por cento de desconto.",
    questions: [
      { q: "SUS ne zaman ve nasıl kuruldu?", a: "1988 Anayasası ile kuruldu, tüm Brezilyalılara ücretsiz sağlık hakkı tanıdı" },
      { q: "SUS'un karşılaştığı zorluklar neler?", a: "Aşırı kalabalık ve kaynak eksikliği" },
      { q: "Farmácia Popular programı ne sağlıyor?", a: "Temel ilaçlarda yüzde 90'a kadar indirim" }
    ]
  }
};
LESSONS[35] = L35;
