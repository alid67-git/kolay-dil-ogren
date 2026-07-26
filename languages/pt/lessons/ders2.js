const L2 = {
  title: "Artigos e Ser/Estar",
  words: [
    { en: "o / a", tr: "belirli artiko (eril/dişil)", pron: "u / a", bd: "EP: o (eril), a (dişil); os/as çoğul" },
    { en: "um / uma", tr: "belirsiz artiko", pron: "ũ / uma", bd: "eril: um livro; dişil: uma mesa" },
    { en: "o livro", tr: "kitap", pron: "u livru", bd: "eril; os livros = kitaplar" },
    { en: "a mesa", tr: "masa", pron: "a méza", bd: "dişil; as mesas = masalar" },
    { en: "o homem", tr: "adam / erkek", pron: "u omẽy", bd: "eril; os homens = erkekler" },
    { en: "a mulher", tr: "kadın", pron: "a mulyér", bd: "dişil; as mulheres" },
    { en: "o menino / a menina", tr: "erkek çocuk / kız çocuk", pron: "u mıninu / a mınina", bd: "cinsiyet çifti" },
    { en: "português / portuguesa", tr: "Portekizli (e/k)", pron: "purtuγésh / purtuγéza", bd: "milliyet sıfatı; cinsiyet uyumu" },
    { en: "feliz", tr: "mutlu", pron: "fılísh", bd: "tek form (e/k aynı); çoğul: felizes" },
    { en: "cansado / cansada", tr: "yorgun", pron: "kãzadu / kãzada", bd: "ESTAR ile; geçici durum" },
    { en: "médico / médica", tr: "doktor", pron: "médiku / médika", bd: "SER ile; meslek" },
    { en: "estudante", tr: "öğrenci", pron: "ıshtuddãnt", bd: "tek form; SER ile" },
    { en: "bonito / bonita", tr: "güzel / yakışıklı", pron: "bunitu / bunita", bd: "cinsiyet uyumu; SER veya ESTAR" },
    { en: "aqui", tr: "burada", pron: "akí", bd: "yer belirteci; ESTAR aqui" },
    { en: "ali / lá", tr: "orada / uzakta", pron: "alí / lá", bd: "uzaklık derecesi; ali = orta, lá = uzak" },
    { en: "hoje", tr: "bugün", pron: "oji", bd: "zaman zarfı; hoje estou bem" },
    { en: "sempre", tr: "her zaman", pron: "sẽmpr", bd: "zaman zarfı; SER ile kalıcı" },
    { en: "agora", tr: "şimdi", pron: "agóra", bd: "zaman zarfı; ESTAR ile geçici" },
    { en: "muito", tr: "çok", pron: "muytu", bd: "miktar zarfı; muito bem = çok iyi" },
    { en: "também", tr: "de / da", pron: "tãbẽy", bd: "ekleme; Eu também sou português." }
  ],
  grammar: [
    {
      title: "Artigos Definidos e Indefinidos",
      explanation: "Portekizce'de her ismin cinsiyeti vardır. Belirli artiko: o (eril tekil), a (dişil tekil), os (eril çoğul), as (dişil çoğul). Belirsiz: um (eril), uma (dişil), uns (eril çoğul), umas (dişil çoğul). EP'de artikolar çok kullanılır; özel isimlerde de: 'o João', 'a Maria'.",
      table: [
        { pronoun: "Eril tekil", form: "o / um", example: "o livro / um livro", tr: "kitap / bir kitap" },
        { pronoun: "Dişil tekil", form: "a / uma", example: "a mesa / uma mesa", tr: "masa / bir masa" },
        { pronoun: "Eril çoğul", form: "os / uns", example: "os livros / uns livros", tr: "kitaplar / bazı kitaplar" },
        { pronoun: "Dişil çoğul", form: "as / umas", example: "as mesas / umas mesas", tr: "masalar / bazı masalar" },
        { pronoun: "İsimle", form: "o/a + isim", example: "o João é simpático.", tr: "João sempatik." },
        { pronoun: "Contração", form: "de + o = do", example: "Sou do Porto.", tr: "Porto'luyum." }
      ],
      note: "EP'de özel isimlerden önce artiko kullanmak çok yaygındır: 'a Maria veio' (Maria geldi). Türkçe'de bu yok! Ayrıca de+o=do, de+a=da, em+o=no, em+a=na contrações (birleşimler) zorunludur."
    },
    {
      title: "SER ve ESTAR — İki Türlü 'Olmak'",
      explanation: "Portekizce'nin en önemli ayrımı: SER (kalıcı/tanımlayıcı) ve ESTAR (geçici/konum). SER: kimlik, milliyet, meslek, kalıcı özellik. ESTAR: ruh hali, konum, geçici durum. 'Sou português' (kalıcı — Portekizliyim) vs. 'Estou cansado' (geçici — yorgunum şu an).",
      table: [
        { pronoun: "SER — kimlik", form: "sou / és / é", example: "Sou estudante.", tr: "Öğrenciyim. (kalıcı)" },
        { pronoun: "SER — milliyet", form: "sou / és / é", example: "Ela é portuguesa.", tr: "O Portekizli." },
        { pronoun: "ESTAR — ruh hali", form: "estou / estás / está", example: "Estou feliz hoje.", tr: "Bugün mutluyum. (geçici)" },
        { pronoun: "ESTAR — konum", form: "estou / estás / está", example: "Estou em Lisboa.", tr: "Lizbon'dayım." },
        { pronoun: "SER — meslek", form: "é / são", example: "Ele é médico.", tr: "O doktor. (meslek = kalıcı)" },
        { pronoun: "ESTAR — durum", form: "está / estão", example: "Ela está doente.", tr: "O hasta. (geçici)" }
      ],
      note: "Kural: SER = KİMSİN? (kimlik, milliyet, meslek, kalıcı özellik). ESTAR = NASILSIN? NEREDESIN? (durum, konum, geçici hal). 'O café é bom' (kahve genelde iyi) vs. 'O café está quente' (kahve şu an sıcak)."
    },
    {
      title: "SER ve ESTAR Tam Çekim",
      explanation: "SER geniş zaman: sou, és, é, somos, sois, são. ESTAR geniş zaman: estou, estás, está, estamos, estais, estão. EP'de TU formu çok kullanılır: tu és (SER) ve tu estás (ESTAR). Olumsuz: não sou, não estou.",
      table: [
        { pronoun: "eu", form: "sou / estou", example: "Sou turco. Estou bem.", tr: "Türküm. İyiyim." },
        { pronoun: "tu", form: "és / estás", example: "Tu és simpático. Estás bem?", tr: "Sempatiksin. İyi misin?" },
        { pronoun: "você/ele/ela", form: "é / está", example: "Ele é alto. Está cansado.", tr: "Uzun boylu. Yorgun." },
        { pronoun: "nós", form: "somos / estamos", example: "Somos amigos. Estamos juntos.", tr: "Arkadaşız. Birlikteyiz." },
        { pronoun: "vocês", form: "são / estão", example: "Vocês são estudantes?", tr: "Siz öğrenci misiniz?" },
        { pronoun: "eles/elas", form: "são / estão", example: "Elas estão em casa.", tr: "Onlar evdeler." }
      ],
      note: "ESTAR ile konum: Estou EM Lisboa. Está NO escritório. (em + o = no; em + a = na). SER ile meslek: artiko kullanılmaz! 'Sou médico' (NOT 'Sou um médico')."
    }
  ],
  speaking: [
    { q: "'O güzel ama şu an yorgun' cümlesini SER/ESTAR ile söyleyin.", a: "Ela é bonita mas está cansada agora." },
    { q: "Kendinizi tanıtın (ülke, meslek, şimdiki hal).", a: "Sou turco/a, sou estudante e estou muito bem, obrigado/a!" },
    { q: "'Burada mısın?' sorusunu sorun.", a: "Estás aqui? / Está aqui?" },
    { q: "Portekizce'de 'masa' için cümle kurun.", a: "A mesa é grande. / Há uma mesa aqui." },
    { q: "'Meslek kalıcı, his geçici' örneği verin.", a: "Sou professor (kalıcı). Estou cansado hoje (geçici)." }
  ],
  dialogues: [
    {
      title: "SER mi ESTAR mı?",
      lines: [
        { speaker: "Rita", text: "Pedro, estás bem? Pareces cansado.", tr: "Pedro, iyi misin? Yorgun görünüyorsun." },
        { speaker: "Pedro", text: "Estou um pouco cansado, sim. Trabalhei muito hoje.", tr: "Biraz yorgunum, evet. Bugün çok çalıştım." },
        { speaker: "Rita", text: "Ah, és sempre tão trabalhador!", tr: "Ah, her zaman bu kadar çalışkansın!" },
        { speaker: "Pedro", text: "Sou, é verdade! Mas hoje estou mesmo exausto.", tr: "Evet, doğru! Ama bugün gerçekten bitkin düştüm." },
        { speaker: "Rita", text: "Descansa! Onde está a tua mochila?", tr: "Dinlen! Çantan nerede?" },
        { speaker: "Pedro", text: "Está ali, em cima da cadeira.", tr: "Orada, sandalyenin üstünde." }
      ]
    }
  ],
  listening: [{
    text: "Em português, a diferença entre SER e ESTAR é fundamental. SER é usado para características permanentes — a identidade, a nacionalidade, a profissão. ESTAR é usado para estados temporários — como nos sentimos, onde estamos neste momento. Esta distinção não existe em inglês ou turco, por isso é um dos maiores desafios para os aprendentes. Com a prática, torna-se natural. Em Portugal, ouvimos muito 'Como estás?' entre amigos e 'Como está?' em contextos formais, usando o pronome 'tu' ou 'você' respetivamente.",
    questions: [
      { q: "SER hangi durumlarda kullanılır?", a: "Kimlik, milliyet, meslek gibi kalıcı özellikler için" },
      { q: "ESTAR hangi durumlarda kullanılır?", a: "Geçici durumlar için — nasıl hissettiğimiz, nerede olduğumuz" },
      { q: "EP'de informal soru nasıl sorulur?", a: "'Como estás?' — tu ile informal; 'Como está?' — você ile resmi" }
    ]
  }]
};
LESSONS[2] = L2;
