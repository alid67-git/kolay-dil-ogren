const L12 = {
  title: "Saúde e Médico",
  words: [
    { en: "o médico / a médica", tr: "doktor (e/d)", pron: "u médzhiku / a médzhika", bd: "cinsiyet uyumu" },
    { en: "o hospital", tr: "hastane", pron: "u oshpital", bd: "eril" },
    { en: "a clínica", tr: "klinik / muayenehane", pron: "a klínika", bd: "dişil" },
    { en: "o remédio", tr: "ilaç", pron: "u hemedyu", bd: "eril; medicamento = daha resmi" },
    { en: "a receita", tr: "reçete", pron: "a hesayta", bd: "dişil; receita médica" },
    { en: "o comprimido", tr: "hap / tablet", pron: "u kõprimidu", bd: "eril" },
    { en: "o antibiótico", tr: "antibiyotik", pron: "u ãntibiotiku", bd: "eril" },
    { en: "a dor", tr: "ağrı", pron: "a dor", bd: "dişil; dores = ağrılar" },
    { en: "a febre", tr: "ateş (hastalık)", pron: "a fébri", bd: "dişil; ter febre = ateşi olmak" },
    { en: "a tosse", tr: "öksürük", pron: "a tosi", bd: "dişil; tossir = öksürmek" },
    { en: "o resfriado", tr: "soğuk algınlığı / nezle", pron: "u hezfriadu", bd: "eril; gripe = grip" },
    { en: "a gripe", tr: "grip / influenza", pron: "a grĩpi", bd: "dişil; gripe suína = domuz gribi" },
    { en: "o seguro de saúde", tr: "sağlık sigortası", pron: "u seguru dshi saúdshi", bd: "eril" },
    { en: "o plano de saúde", tr: "sağlık planı (BP özel)", pron: "u planu dshi saúdshi", bd: "eril; BP'ye özgü ifade" },
    { en: "a farmácia", tr: "eczane", pron: "a farmásya", bd: "dişil" },
    { en: "o curativo", tr: "yara bandı / pansuman", pron: "u kurativu", bd: "eril" },
    { en: "a injeção", tr: "enjeksiyon / iğne", pron: "a ĩjesão", bd: "dişil; levar uma injeção" },
    { en: "Preciso marcar consulta.", tr: "Randevu almam gerekiyor.", pron: "presizu markar kõsulta", bd: "marcar = ayarlamak" },
    { en: "Quanto tempo leva?", tr: "Ne kadar sürer?", pron: "kuãntu tẽmpu leva", bd: "bekleme süresi sorusu" },
    { en: "Quando posso ir?", tr: "Ne zaman gidebilirim?", pron: "kuãndu posu ir", bd: "randevu için" }
  ],
  grammar: [
    {
      title: "SENTIR-SE — Kendini Hissetmek",
      explanation: "Sağlık durumunu ifade etmek için SENTIR-SE (kendini hissetmek) dönüşlü fiili çok kullanılır. ESTAR + adjective de eşdeğerdir. 'Estou me sentindo mal' = Kendimi kötü hissediyorum (BP gerundium yapısı).",
      table: [
        { pronoun: "Eu", form: "me sinto / estou me sentindo", example: "Me sinto cansado.", tr: "Kendimi yorgun hissediyorum." },
        { pronoun: "Você / Ele", form: "se sente", example: "Como você se sente?", tr: "Kendinizi nasıl hissediyorsunuz?" },
        { pronoun: "Nós", form: "nos sentimos", example: "Nos sentimos bem agora.", tr: "Şimdi kendimizi iyi hissediyoruz." },
        { pronoun: "Olumsuz", form: "não me sinto bem", example: "Não me sinto bem hoje.", tr: "Bugün kendimi iyi hissetmiyorum." },
        { pronoun: "Sıfatla", form: "se sentir + sıfat", example: "Ela se sente fraca.", tr: "Kendini güçsüz hissediyor." },
        { pronoun: "İyileşmek", form: "ficar melhor", example: "Estou ficando melhor.", tr: "İyileşiyorum." }
      ],
      note: "Dönüşlü zamir: me (eu), se (você/ele/ela), nos (nós), se (vocês/eles). Gerúndio: -ando/-endo eki."
    },
    {
      title: "Doktor Muayenesinde Konuşma",
      explanation: "Doktora gittiğinizde semptomları ve süreyi aktarmanız gerekir. 'Há + zaman' = 'süredir' anlamını verir. 'Desde + tarih/gün' = 'o günden beri'. Semptomları açıklamak için ESTAR COM, SENTIR, DOER kullanılır.",
      table: [
        { pronoun: "Süredir", form: "há + zaman", example: "Estou com febre há dois dias.", tr: "İki gündür ateşim var." },
        { pronoun: "O günden beri", form: "desde + gün", example: "Dói desde ontem.", tr: "Dünden beri ağrıyor." },
        { pronoun: "Semptom listesi", form: "Tenho/Estou com...", example: "Tenho febre, tosse e dor de garganta.", tr: "Ateşim, öksürüğüm ve boğaz ağrım var." },
        { pronoun: "Allerji", form: "Sou alérgico/a a...", example: "Sou alérgico a penicilina.", tr: "Penisiline alerjim var." },
        { pronoun: "İlaç", form: "Tomo + ilaç", example: "Já tomo algum remédio?", tr: "Şu an ilaç kullanıyor musunuz?" },
        { pronoun: "Önceki hastalık", form: "Tive + hastalık", example: "Já tive Covid.", tr: "Daha önce Covid geçirdim." }
      ],
      note: "'Tive' = TER (sahip olmak) fiilinin geçmişi. Pretérito Perfeito: tive, teve, tivemos, tiveram."
    },
    {
      title: "İlaç ve Tedavi Talimatları",
      explanation: "Doktor veya eczacı ilaç kullanım talimatlarını açıklarken emir kipi (imperativo) veya 'tem que / deve' yapısı kullanır. 'Tome dois comprimidos de doze em doze horas' = Her 12 saatte iki tablet alın.",
      table: [
        { pronoun: "Tom emir", form: "tome / tome + sayı", example: "Tome um comprimido.", tr: "Bir tablet alın." },
        { pronoun: "Aralık", form: "de X em X horas", example: "de oito em oito horas", tr: "sekiz saatte bir" },
        { pronoun: "Yemekle", form: "com/após as refeições", example: "Tome após as refeições.", tr: "Yemeklerden sonra alın." },
        { pronoun: "Uyku", form: "Descanse bastante.", example: "Descanse e beba muita água.", tr: "Dinlenin ve bol su için." },
        { pronoun: "Tekrar kontrol", form: "Volte em + süre", example: "Volte em uma semana.", tr: "Bir hafta sonra tekrar gelin." },
        { pronoun: "Acil servis", form: "Vá à emergência", example: "Se piorar, vá à emergência.", tr: "Kötüleşirse acil servise gidin." }
      ],
      note: "Emir kipi (você için): FALAR → Fale! TOMAR → Tome! BEBER → Beba! Bu form hem emir hem de kibar rica içindir."
    }
  ],
  speaking: [
    { q: "Kendini iyi hissetmiyorsunuz — ne dersiniz?", a: "Não me sinto bem. Estou com febre e tosse." },
    { q: "'İki gündür baş ağrım var' nasıl?", a: "Estou com dor de cabeça há dois dias." },
    { q: "Penisiline alerjiniz var — doktora söyleyin.", a: "Sou alérgico/a a penicilina." },
    { q: "İlaç talimatı: 'Her 8 saatte bir tablet' nasıl?", a: "Tome um comprimido de oito em oito horas." },
    { q: "Randevu almak istiyorsunuz — ne söylersiniz?", a: "Preciso marcar uma consulta, por favor." }
  ],
  dialogues: [
    {
      title: "Eczanede",
      lines: [
        { speaker: "Farmacêutico", text: "Boa tarde! Em que posso ajudar?", tr: "İyi günler! Nasıl yardımcı olabilirim?" },
        { speaker: "Cliente", text: "Preciso de algo para dor de cabeça e febre.", tr: "Baş ağrısı ve ateş için bir şeye ihtiyacım var." },
        { speaker: "Farmacêutico", text: "Tem receita médica?", tr: "Reçeteniz var mı?" },
        { speaker: "Cliente", text: "Não, mas é um resfriado comum.", tr: "Hayır, ama sıradan bir nezle." },
        { speaker: "Farmacêutico", text: "Então posso indicar um paracetamol. Tome um comprimido de seis em seis horas.", tr: "O zaman parasetamol önerebilirim. Altı saatte bir tablet alın." },
        { speaker: "Cliente", text: "Posso tomar com o estômago vazio?", tr: "Aç karnına alabilir miyim?" }
      ]
    }
  ],
  listening: {
    text: "O sistema de saúde no Brasil tem duas opções: o SUS (Sistema Único de Saúde) público e gratuito, e os planos de saúde privados. O SUS atende todos os brasileiros de graça, mas as filas podem ser longas. Por isso, muitas famílias optam por um plano de saúde particular. Para marcar consulta pelo plano, basta ligar ou usar o aplicativo da operadora.",
    questions: [
      { q: "Brezilya'da sağlık sistemi kaç çeşit?", a: "İki: SUS (kamu) ve özel sağlık sigortası" },
      { q: "SUS'un dezavantajı ne?", a: "Kuyruklar/bekleme süreleri uzun olabilir" },
      { q: "Özel planda randevu nasıl alınır?", a: "Telefon veya uygulama ile" }
    ]
  }
};
LESSONS[12] = L12;
