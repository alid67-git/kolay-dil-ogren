const L6 = {
  title: "Casa e Móveis",
  words: [
    { en: "a casa", tr: "ev", pron: "a kaza", bd: "dişil" },
    { en: "o apartamento", tr: "daire", pron: "u apartamẽntu", bd: "eril" },
    { en: "o quarto", tr: "yatak odası", pron: "u kuartu", bd: "eril" },
    { en: "a sala de estar", tr: "oturma odası", pron: "a sala dshi ıshtar", bd: "dişil" },
    { en: "a cozinha", tr: "mutfak", pron: "a kozĩnya", bd: "dişil" },
    { en: "o banheiro", tr: "banyo / tuvalet", pron: "u banyeyru", bd: "BP: banheiro; EP: casa de banho" },
    { en: "a varanda", tr: "balkon / veranda", pron: "a varãnda", bd: "dişil" },
    { en: "o jardim", tr: "bahçe", pron: "u jardĩm", bd: "eril; çoğul: jardins" },
    { en: "a cama", tr: "yatak", pron: "a kama", bd: "dişil" },
    { en: "o sofá", tr: "kanepe / koltuk", pron: "u sofá", bd: "eril; aksan: vurgu burada" },
    { en: "a mesa", tr: "masa", pron: "a meza", bd: "dişil" },
    { en: "a cadeira", tr: "sandalye", pron: "a kadeyra", bd: "dişil" },
    { en: "o armário", tr: "dolap", pron: "u armáryu", bd: "eril" },
    { en: "a geladeira", tr: "buzdolabı", pron: "a jeladeyra", bd: "BP; EP: frigorífico" },
    { en: "o fogão", tr: "ocak / fırın", pron: "u fogão", bd: "eril; çoğul: fogões" },
    { en: "a janela", tr: "pencere", pron: "a janela", bd: "dişil" },
    { en: "a porta", tr: "kapı", pron: "a porta", bd: "dişil" },
    { en: "o chão", tr: "zemin / yer", pron: "u shão", bd: "eril" },
    { en: "o teto", tr: "tavan", pron: "u tétu", bd: "eril" },
    { en: "a parede", tr: "duvar", pron: "a paradshi", bd: "dişil" }
  ],
  grammar: [
    {
      title: "MORAR ve FICAR — Konum Bildirme",
      explanation: "Portekizcede 'oturmak/yaşamak' için MORAR kullanılır. 'Bulunmak/olmak' (konum) için FICAR veya ESTAR kullanılır. MORAR düzenli -AR fiillerini takip eder. Adres belirtirken 'em + şehir', 'em + semt' yapısı kullanılır.",
      table: [
        { pronoun: "Eu", form: "moro", example: "Moro em São Paulo.", tr: "São Paulo'da yaşıyorum." },
        { pronoun: "Você / Ele / Ela", form: "mora", example: "Ela mora num apartamento.", tr: "Bir dairede yaşıyor." },
        { pronoun: "Nós", form: "moramos", example: "Moramos perto do centro.", tr: "Merkeze yakın yaşıyoruz." },
        { pronoun: "Vocês / Eles / Elas", form: "moram", example: "Eles moram numa casa.", tr: "Bir evde yaşıyorlar." },
        { pronoun: "Konum: ficar", form: "fica em / fica perto", example: "O banco fica ali.", tr: "Banka şurada." },
        { pronoun: "Adres", form: "na Rua + isim", example: "Moro na Rua das Flores.", tr: "Çiçekler Sokağı'nda yaşıyorum." }
      ],
      note: "'Num' = em + um (bir'in içinde), 'numa' = em + uma. Bu birleşimler zorunludur ve ayrı yazılmaz."
    },
    {
      title: "Evin Bölümleri — Preposition: em + artigo",
      explanation: "Preposisyon 'em' artikelle birleşerek 'no/na/nos/nas' şeklini alır (em + o = no, em + a = na). Evin içindeki yerleri belirtirken bu birleşik formlar kullanılır.",
      table: [
        { pronoun: "em + o = no", form: "eril tekil", example: "no quarto / no banheiro", tr: "yatak odasında / banyoda" },
        { pronoun: "em + a = na", form: "dişil tekil", example: "na cozinha / na sala", tr: "mutfakta / oturma odasında" },
        { pronoun: "em + os = nos", form: "eril çoğul", example: "nos quartos", tr: "yatak odalarında" },
        { pronoun: "em + as = nas", form: "dişil çoğul", example: "nas janelas", tr: "pencerelerde" },
        { pronoun: "Soru: onde?", form: "Onde está/fica?", example: "Onde está o banheiro?", tr: "Banyo nerede?" },
        { pronoun: "Cevap", form: "É a primeira porta.", example: "Fica no corredor.", tr: "Koridorda." }
      ],
      note: "Diğer birleşimler: de + o = do, de + a = da, de + os = dos, de + as = das. para + o = para o (birleşmez!)"
    },
    {
      title: "TER ve HAVER — Var/Yok İfadesi",
      explanation: "Portekizcede 'var' demek için iki yol vardır: TEM (tem/há) ve HÁ. 'Tem' günlük Brezilya Portekizcesinde 'há'nın yerini almıştır. 'Há um banheiro' (resmi/Avrupa) = 'Tem um banheiro' (günlük BP) = Bir banyo var.",
      table: [
        { pronoun: "Var (tekil)", form: "tem / há", example: "Tem uma cama grande.", tr: "Büyük bir yatak var." },
        { pronoun: "Var (çoğul)", form: "tem / há", example: "Tem muitos quartos.", tr: "Çok oda var." },
        { pronoun: "Yok", form: "não tem / não há", example: "Não tem varanda.", tr: "Balkon yok." },
        { pronoun: "Soru", form: "Tem...?", example: "Tem garagem?", tr: "Garaj var mı?" },
        { pronoun: "Cevap evet", form: "Tem sim!", example: "Tem sim, é grande!", tr: "Var, hem de büyük!" },
        { pronoun: "Cevap hayır", form: "Não tem.", example: "Infelizmente não tem.", tr: "Maalesef yok." }
      ],
      note: "'Há' zaman ifadesinde de kullanılır: 'Há dois anos' = İki yıl önce / İki yıldır."
    }
  ],
  speaking: [
    { q: "Você mora em casa ou apartamento?", a: "Moro em (casa/apartamento). Tem [sayı] quartos." },
    { q: "Como se diz 'Mutfak nerede?'", a: "Onde fica a cozinha?" },
    { q: "'Oturma odasında' nasıl dersiniz?", a: "Na sala de estar." },
    { q: "Evinizde ne var? 3 şey sayın.", a: "Tem uma cama, uma mesa e um sofá." },
    { q: "'Garaj var mı?' sorusunu cevaplayın.", a: "Sim, tem garagem! / Não, infelizmente não tem." }
  ],
  dialogues: [
    {
      title: "Yeni Ev Arayışı",
      lines: [
        { speaker: "Imobiliária", text: "Bom dia! Posso ajudar?", tr: "Günaydın! Yardımcı olabilir miyim?" },
        { speaker: "Cliente", text: "Sim, estou procurando um apartamento para alugar.", tr: "Evet, kiralık daire arıyorum." },
        { speaker: "Imobiliária", text: "Quantos quartos precisa?", tr: "Kaç odalı istiyorsunuz?" },
        { speaker: "Cliente", text: "Preciso de dois quartos e uma cozinha grande.", tr: "İki yatak odası ve büyük bir mutfak istiyorum." },
        { speaker: "Imobiliária", text: "Temos um ótimo apartamento! Tem varanda e garagem.", tr: "Harika bir dairemiz var! Balkon ve garaj var." },
        { speaker: "Cliente", text: "Perfeito! Fica em que bairro?", tr: "Mükemmel! Hangi semtte?" }
      ]
    }
  ],
  listening: {
    text: "Meu apartamento novo fica no terceiro andar. Tem dois quartos, uma sala grande, uma cozinha moderna e um banheiro. Na sala tem um sofá cinza e uma televisão grande. A cozinha tem uma geladeira nova e um fogão elétrico. Não tem varanda, mas tem uma janela enorme com vista para o parque.",
    questions: [
      { q: "Daire kaçıncı katta?", a: "Üçüncü katta" },
      { q: "Kaç oda var?", a: "İki yatak odası, salon, mutfak, banyo" },
      { q: "Balkon var mı? Neden telafi ediyor?", a: "Yok, ama parka bakan büyük pencere var" }
    ]
  }
};
LESSONS[6] = L6;
