const L17 = {
  title: "No Aeroporto e em Viagem",
  words: [
    { en: "o aeroporto", tr: "havalimanı", pron: "u aeroportu", bd: "eril" },
    { en: "o voo", tr: "uçuş", pron: "u vo", bd: "eril; voo direto = direkt uçuş" },
    { en: "o check-in", tr: "check-in", pron: "u shekĩn", bd: "eril; fazer check-in = check-in yapmak" },
    { en: "a bagagem", tr: "bagaj", pron: "a bagajẽy", bd: "dişil; bagagem de mão = el bagajı" },
    { en: "o passaporte", tr: "pasaport", pron: "u pasaporti", bd: "eril" },
    { en: "o cartão de embarque", tr: "biniş kartı", pron: "u kartão dshi ẽmbarki", bd: "eril" },
    { en: "o portão", tr: "kapı (havalimanı)", pron: "u portão", bd: "eril; Portão B3 = B3 kapısı" },
    { en: "o embarque", tr: "biniş / giriş", pron: "u ẽmbarki", bd: "eril; sala de embarque = biniş salonu" },
    { en: "o desembarque", tr: "iniş / çıkış", pron: "u deshẽmbarki", bd: "eril" },
    { en: "a alfândega", tr: "gümrük", pron: "a awfãndjega", bd: "dişil" },
    { en: "a imigração", tr: "göçmenlik kontrolü", pron: "a imigrasaw", bd: "dişil" },
    { en: "o visto", tr: "vize", pron: "u vishtu", bd: "eril; visto de turismo = turist vizesi" },
    { en: "a escala", tr: "aktarma", pron: "a ıshkala", bd: "dişil; voo com escala = aktarmalı uçuş" },
    { en: "o atraso", tr: "gecikme", pron: "u atrazu", bd: "eril; Voo atrasado = Geciken uçuş" },
    { en: "a decolagem", tr: "kalkış (uçak)", pron: "a dzekolajẽy", bd: "dişil; decolar = kalkmak" },
    { en: "o pouso / o aterrissagem", tr: "iniş (uçak)", pron: "u pozu / u aterrisajẽy", bd: "eril; aterrissar = inmek" },
    { en: "a janela / o corredor", tr: "pencere / koridor (koltuk)", pron: "a janela / u koredór", bd: "uçakta koltuk seçimi" },
    { en: "O voo está atrasado.", tr: "Uçuş gecikiyor.", pron: "u vo ıshta atrazadu", bd: "havalimanı duyurusu" },
    { en: "Perdi o voo.", tr: "Uçuşumu kaçırdım.", pron: "perdi u vo", bd: "perder = kaybetmek/kaçırmak" },
    { en: "Minha bagagem sumiu.", tr: "Bagajım kayboldu.", pron: "minya bagajẽy sumiw", bd: "sumir = kaybolmak" }
  ],
  grammar: [
    {
      title: "Pretérito Perfeito — Geçmiş Zaman (Tanımı)",
      explanation: "Portekizcede tamamlanmış geçmiş olaylar için 'Pretérito Perfeito' kullanılır. Düzenli fiiller için -AR → -ei/-aste/-ou/-amos/-aram, -ER/-IR → -i/-este/-eu/-emos/-eram. Bu zaman Türkçe '-dı/-di' ve '-tı/-ti' eklerine karşılık gelir.",
      table: [
        { pronoun: "Eu falei", form: "konuştum (-AR)", example: "Falei com o agente.", tr: "Acenteyle konuştum." },
        { pronoun: "Você/Ele falou", form: "konuştu", example: "Ele perdeu o voo.", tr: "Uçuşunu kaçırdı." },
        { pronoun: "Nós falamos", form: "konuştuk", example: "Chegamos a tempo.", tr: "Zamanında yetiştik." },
        { pronoun: "Eles falaram", form: "konuştular", example: "Viajaram no verão.", tr: "Yazın seyahat ettiler." },
        { pronoun: "IR (düzensiz)", form: "fui / foi / fomos / foram", example: "Fui ao aeroporto.", tr: "Havalimanına gittim." },
        { pronoun: "TER (düzensiz)", form: "tive / teve / tivemos / tiveram", example: "Tive um atraso.", tr: "Bir gecikmem oldu." }
      ],
      note: "IR ve SER geçmişte aynı çekimi paylaşır: fui, foi, fomos, foram. Bağlam farkı belirler: 'Fui ao aeroporto' (gittim) vs 'Fui piloto' (pilottum)."
    },
    {
      title: "Havalimanında Sık Kullanılan Kalıplar",
      explanation: "Havalimanında görevliler ve yolcular belirli kalıplar kullanır. 'Embarque' = biniş, 'Voo' = uçuş, 'Portão' = kapı. Check-in masasında, güvenlik kontrolünde ve kapıda farklı sorular sorulur.",
      table: [
        { pronoun: "Check-in", form: "Quero fazer o check-in.", example: "Para o voo LA3421.", tr: "Check-in yapmak istiyorum. LA3421 uçuşu için." },
        { pronoun: "Bagaj", form: "Tenho uma mala para despachar.", example: "E uma bagagem de mão.", tr: "Bir bavul verecek, bir de el bagajım var." },
        { pronoun: "Koltuk", form: "Prefiro janela/corredor.", example: "Janela, por favor.", tr: "Pencere tarafı lütfen." },
        { pronoun: "Gecikme", form: "O voo está atrasado?", example: "Quanto tempo de atraso?", tr: "Uçuş gecikmeli mi? Kaç dakika?" },
        { pronoun: "Kayıp bagaj", form: "Minha bagagem não chegou.", example: "Preciso fazer um boletim.", tr: "Bagajım gelmedi. Tutanak tutmam lazım." },
        { pronoun: "Kapı", form: "Qual é o portão?", example: "O portão B7 fica onde?", tr: "B7 kapısı nerede?" }
      ],
      note: "BP'de 'mala' = bavul (çanta değil). 'Despachar bagagem' = bagaj vermek. 'Retirar bagagem' = bagaj almak."
    },
    {
      title: "Koşullu Geçmiş — Teria / Poderia / Deveria",
      explanation: "Koşullu geçmiş 'olması gerekirdi / yapabilirdi' anlamları için kullanılır. Havalimanında gecikme veya kaçırma durumlarında bu yapı önemlidir. Temel form: TER veya HAVER + particípio.",
      table: [
        { pronoun: "Deveria", form: "yapmalıydı", example: "Deveria ter chegado cedo.", tr: "Erken gelmeliydiniz." },
        { pronoun: "Poderia", form: "yapabilirdi", example: "Poderia ter avisado.", tr: "Haber verebilirdi." },
        { pronoun: "Teria", form: "olurdu (koşullu)", example: "Teria perdido o voo.", tr: "Uçuşu kaçırırdı." },
        { pronoun: "Precisaria", form: "gerekecekti", example: "Precisaria de um visto.", tr: "Vizesi olması gerekirdi." },
        { pronoun: "Gostaria de", form: "isterim (kibarca)", example: "Gostaria de uma poltrona de janela.", tr: "Pencere kenarı koltuk istiyorum (kibar)." },
        { pronoun: "Reclamação", form: "Gostaria de reclamar.", example: "Gostaria de falar com o supervisor.", tr: "Süpervizörle görüşmek istiyorum." }
      ],
      note: "'Gostaria de...' = nazik istekte bulunmak. Havalimanı gibi resmi ortamlarda 'quero' yerine 'gostaria' tercih edilir."
    }
  ],
  speaking: [
    { q: "'Uçuşum gecikti' nasıl söylersiniz?", a: "Meu voo está atrasado." },
    { q: "Pencere kenarı koltuk isteyin.", a: "Gostaria de uma poltrona de janela, por favor." },
    { q: "'Bagajım kayboldu' nasıl?", a: "Minha bagagem sumiu / não chegou." },
    { q: "Havalimanına nasıl gittiğinizi söyleyin.", a: "Fui ao aeroporto de táxi / de metrô." },
    { q: "Check-in nerede sorusu nasıl?", a: "Onde fica o balcão de check-in?" }
  ],
  dialogues: [
    {
      title: "Check-in Masasında",
      lines: [
        { speaker: "Atendente", text: "Bom dia! Seu passaporte e confirmação de voo, por favor.", tr: "Günaydın! Pasaportunuzu ve uçuş onayınızı lütfen." },
        { speaker: "Passageiro", text: "Aqui está. Voo para Lisboa, LA8721.", tr: "Buyurun. Lizbon uçuşu, LA8721." },
        { speaker: "Atendente", text: "Vai despachar bagagem?", tr: "Bagaj verecek misiniz?" },
        { speaker: "Passageiro", text: "Sim, esta mala. E tenho uma mochila de mão.", tr: "Evet, bu bavul. Bir de sırt çantam var el bagajı olarak." },
        { speaker: "Atendente", text: "Prefere janela ou corredor?", tr: "Pencere mi koridor mu tercih edersiniz?" },
        { speaker: "Passageiro", text: "Janela, por favor! Amo ver o pôr do sol nas nuvens.", tr: "Pencere lütfen! Bulutlardaki günbatımını izlemeyi seviyorum." }
      ]
    }
  ],
  listening: {
    text: "Atenção, passageiros do voo LATAM 3024 com destino a Buenos Aires. O embarque ocorrerá pelo Portão C12. Por favor, tenham em mãos o passaporte e o cartão de embarque. Pedimos que os passageiros das fileiras um a quinze embarquem primeiramente. O voo partirá no horário previsto, às dezesseis horas e quarenta e cinco minutos. Agradecemos a preferência pela LATAM Airlines.",
    questions: [
      { q: "Bu hangi uçuşun duyurusu?", a: "LATAM 3024, Buenos Aires'e" },
      { q: "Biniş hangi kapıdan?", a: "C12 kapısı" },
      { q: "Uçuş saati?", a: "16:45" }
    ]
  }
};
LESSONS[17] = L17;
