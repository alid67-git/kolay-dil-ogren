const L5 = {
  title: "Família e Relacionamentos",
  words: [
    { en: "a família", tr: "aile", pron: "a famílya", bd: "dişil" },
    { en: "o pai", tr: "baba", pron: "u pay", bd: "eril" },
    { en: "a mãe", tr: "anne", pron: "a mãy", bd: "dişil; til (~) burun sesi" },
    { en: "o filho", tr: "oğul", pron: "u filyu", bd: "eril" },
    { en: "a filha", tr: "kız çocuğu", pron: "a filya", bd: "dişil" },
    { en: "o irmão", tr: "erkek kardeş", pron: "u irmão", bd: "eril; çoğul: irmãos" },
    { en: "a irmã", tr: "kız kardeş", bd: "dişil; çoğul: irmãs", pron: "a irmã" },
    { en: "o avô", tr: "büyükbaba", pron: "u avô", bd: "eril; aksan: uzun o" },
    { en: "a avó", tr: "büyükanne", pron: "a avó", bd: "dişil; aksan: açık o" },
    { en: "o marido", tr: "koca / eş (erkek)", pron: "u maridu", bd: "eril" },
    { en: "a esposa / a mulher", tr: "karı / eş (kadın)", pron: "a ıspoza / a mulyér", bd: "dişil" },
    { en: "o tio", tr: "amca / dayı", pron: "u tiu", bd: "eril (her ikisi için)" },
    { en: "a tia", tr: "hala / teyze", pron: "a tia", bd: "dişil" },
    { en: "o primo / a prima", tr: "erkek / kız kuzen", pron: "u primu / a prima", bd: "cinsiyet uyumu" },
    { en: "o sobrinho / a sobrinha", tr: "erkek / kız yeğen", pron: "u sobrinyu / a sobrinya", bd: "cinsiyet uyumu" },
    { en: "o neto / a neta", tr: "erkek / kız torun", pron: "u nétu / a néta", bd: "cinsiyet uyumu" },
    { en: "os pais", tr: "ebeveynler (anne-baba)", pron: "us paysh", bd: "pais = pai çoğulu; AYRI: 'pais' de ülkeler" },
    { en: "os avós", tr: "büyükanne ve büyükbaba", pron: "us avósh", bd: "avô+avó çoğulu birleşik" },
    { en: "o namorado / a namorada", tr: "erkek / kız arkadaş", pron: "u namoradu / a namorada", bd: "namorar = sevgililik" },
    { en: "casado / casada", tr: "evli (eril/dişil)", pron: "kazadu / kazada", bd: "solteiro/solteira = bekar" }
  ],
  grammar: [
    {
      title: "Aile Hakkında Konuşmak — TER ve SER ile",
      explanation: "Aile üyelerinden bahsederken TER (sahip olmak) ve SER (olmak) kullanılır. 'Tenho um irmão' = Bir erkek kardeşim var. 'Sou filha única' = Tek çocuğum (kız). Possessif sıfatlar (meu, minha vb.) ise sahipliği belirtir.",
      table: [
        { pronoun: "Eu tenho", form: "sahip olmak", example: "Tenho dois irmãos.", tr: "İki erkek kardeşim var." },
        { pronoun: "Meu / Minha", form: "benim (e/d)", example: "meu pai / minha mãe", tr: "babam / annem" },
        { pronoun: "Seu / Sua", form: "sizin / onun", example: "seu irmão / sua irmã", tr: "erkek/kız kardeşi" },
        { pronoun: "Nosso / Nossa", form: "bizim", example: "nossa família", tr: "ailemiz" },
        { pronoun: "Soru: tem?", form: "Você tem...?", example: "Você tem filhos?", tr: "Çocuğunuz var mı?" },
        { pronoun: "Soy filho/a", form: "sıra", example: "Sou o mais velho.", tr: "En büyüğüm." }
      ],
      note: "Seu/Sua hem 'sizin' hem de 'onun' anlamına gelir. Belirsizlik durumunda 'dele/dela' (onun) tercih edilir."
    },
    {
      title: "İyelik Zamiri — Possessivos",
      explanation: "İyelik zamirleri hem isimden önce hem de sonra kullanılabilir. İsimlerin cinsiyetiyle uyum sağlarlar. Portekizcede iyelik zamiri genellikle belirli artikelle birlikte kullanılır: 'o meu pai' (babam — Avrupa BP) veya 'meu pai' (Brezilya BP — artikel çoğu zaman düşer).",
      table: [
        { pronoun: "1. tekil", form: "meu / minha", example: "meu carro / minha casa", tr: "arabam / evim" },
        { pronoun: "2. tekil", form: "seu / sua", example: "seu livro / sua caneta", tr: "kitabın / kaleminiz" },
        { pronoun: "3. tekil", form: "seu/sua veya dele/dela", example: "o carro dele / a casa dela", tr: "onun arabası / evi" },
        { pronoun: "1. çoğul", form: "nosso / nossa", example: "nosso time / nossa escola", tr: "takımımız / okulumuz" },
        { pronoun: "2. çoğul", form: "seu / sua (vocês)", example: "seus filhos", tr: "çocuklarınız" },
        { pronoun: "3. çoğul", form: "deles / delas", example: "a casa deles", tr: "onların evi (erkekler)" }
      ],
      note: "BP'de (Brezilya) 'seu pai' belirsiz olabilir. Netlik için: 'o pai dele' (onun babası) tercih edin."
    },
    {
      title: "İlişki Durumu ve Medeni Hal",
      explanation: "Medeni hal için SER fiili kullanılır. Brezilya'da 'namorado/a' sevgili demektir (nişanlı değil). 'Noivo/a' nişanlı, 'marido/esposa' evli çift anlamına gelir. 'Ficar com alguém' ise 'birileriyle olmak' (BP'ye özgü ifade) anlamındadır.",
      table: [
        { pronoun: "Bekar", form: "ser solteiro/a", example: "Sou solteira.", tr: "Bekarım. (kadın)" },
        { pronoun: "Evli", form: "ser casado/a", example: "Ele é casado.", tr: "O evlidir." },
        { pronoun: "Boşanmış", form: "ser divorciado/a", example: "Ela é divorciada.", tr: "O boşanmış." },
        { pronoun: "Nişanlı", form: "ser noivo/a", example: "Somos noivos.", tr: "Nişanlıyız." },
        { pronoun: "Sevgilisi var", form: "ter namorado/a", example: "Tenho namorada.", tr: "Kız arkadaşım var." },
        { pronoun: "Birlikte yaşıyor", form: "morar junto", example: "Moramos juntos.", tr: "Birlikte yaşıyoruz." }
      ],
      note: "BP günlük dil: 'Tô namorando' = Birileriyle çıkıyorum. 'Ficamos' = Öpüştük/birlikteyiz (tek seferlik)."
    }
  ],
  speaking: [
    { q: "Sua família é grande?", a: "Sim, tenho três irmãos e muitos primos! / Não, somos só três." },
    { q: "Seus pais moram com você?", a: "Sim, moramos juntos. / Não, moram em outra cidade." },
    { q: "'Annem güzel' nasıl dersiniz?", a: "Minha mãe é bonita." },
    { q: "Evli misiniz?", a: "Sim, sou casado/a. / Não, sou solteiro/a." },
    { q: "Kaç kardeşiniz var?", a: "Tenho [sayı] irmão(s)/irmã(s)." }
  ],
  dialogues: [
    {
      title: "Aile Fotoğrafı",
      lines: [
        { speaker: "Camila", text: "Quem são essas pessoas na foto?", tr: "Fotoğraftaki bu kişiler kimler?" },
        { speaker: "Rafael", text: "Essa é minha família! Esses são meus pais.", tr: "Bu benim ailem! Bunlar annem ve babam." },
        { speaker: "Camila", text: "E esses dois meninos?", tr: "Bu iki çocuk kimler?" },
        { speaker: "Rafael", text: "São meus irmãos. O mais velho tem vinte anos.", tr: "Erkek kardeşlerim. En büyüğü yirmi yaşında." },
        { speaker: "Camila", text: "Você tem irmã?", tr: "Kız kardeşiniz var mı?" },
        { speaker: "Rafael", text: "Não, somos três irmãos. Mas tenho muitas primas!", tr: "Hayır, üç erkek kardeşiz. Ama çok kız kuzenum var!" }
      ]
    }
  ],
  listening: {
    text: "Me chamo Beatriz e vou falar sobre minha família. Somos cinco: meus pais, meus dois irmãos e eu. Minha mãe é professora e meu pai é engenheiro. Meu irmão mais velho é casado e tem uma filha linda. Meu irmão mais novo ainda é solteiro. Nos finais de semana, toda a família se reúne na casa da minha avó.",
    questions: [
      { q: "Ailede kaç kişi var?", a: "Beş" },
      { q: "Büyük ağabeyinin durumu?", a: "Evli, bir kız çocuğu var" },
      { q: "Hafta sonları nerede toplanıyorlar?", a: "Büyükannenin evinde" }
    ]
  }
};
LESSONS[5] = L5;
