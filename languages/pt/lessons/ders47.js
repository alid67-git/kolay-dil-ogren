const L47 = {
  title: "Gramática Avançada",
  words: [
    { en: "o gerúndio", tr: "gerund / süreç eki", pron: "u jerũndyu", bd: "eril; -ando/-endo/-indo; BP'de çok yaygın" },
    { en: "o infinitivo pessoal", pron: "o infinitivo pessoal", tr: "kişisel infinitif (BP özgü)", bd: "eril; 'para eu ir' = benim için gitmek" },
    { en: "o subjuntivo futuro", tr: "gelecek subjuntif", pron: "u subjũtivu futuru", bd: "eril; quando/se ile; 'quando vier'" },
    { en: "o mais-que-perfeito", tr: "geçmişin geçmişi", pron: "u mays ki perfeytu", bd: "eril; tinha feito = yapmıştı" },
    { en: "a oração relativa", tr: "sıfat cümlesi / ilgi zamiri cümlesi", pron: "a orasão relativa", bd: "dişil; que, quem, cujo, onde ile" },
    { en: "cujo / cuja", tr: "kimin / hangi", pron: "kuyu / kuya", bd: "ilgi zamiri; sahiplik; 'o livro cujo autor..'" },
    { en: "a voz passiva sintética", tr: "SE ile edilgen yapı", pron: "a vósh pasiva sĩtétika", bd: "dişil; 'vende-se casas'" },
    { en: "o discurso indireto", tr: "dolaylı anlatım", pron: "u dishkursu ĩdiretu", bd: "eril; zaman uyumu önemli" },
    { en: "o período composto", tr: "bileşik cümle", pron: "u períodu kõposhtu", bd: "eril; múltiplas orações" },
    { en: "a oração subordinada", tr: "bağımlı cümle / yantümce", pron: "a orasão subordĩnada", bd: "dişil; que, quando, porque ile" },
    { en: "a concordância verbal", tr: "fiil uyumu", pron: "a kõkordãnsya verbaw", bd: "dişil; sujeito-verbo uyumu" },
    { en: "a regência verbal", tr: "fiil yönetimi (bağımlı edat)", pron: "a rejẽnsya verbaw", bd: "dişil; gostar DE, precisar DE" },
    { en: "o acento gráfico", tr: "vurgu işareti / aksan", pron: "u asẽntu grátiku", bd: "eril; agudo, circunflexo, grave" },
    { en: "a crase", tr: "crase (à = a+a)", pron: "a krazi", bd: "dişil; à = artigo + preposição; 'vou à escola'" },
    { en: "a mesóclise", tr: "mesoklis (pronomi bölme)", pron: "a mezóklizi", bd: "dişil; resmi PT: 'dir-me-ia'; BP'de nadir" },
    { en: "o clítico", tr: "klitik (zayıf zamir)", pron: "u klítiku", bd: "eril; me, te, se, nos, lhe, o, a" },
    { en: "enclítico", tr: "klitik son ek", pron: "ẽnklítiku", bd: "sıfat; verbo-me (PT) vs. me-verbo (BP)" },
    { en: "A gramática não é o inimigo.", tr: "Gramer düşman değildir.", pron: "a gramatika não é u ĩnimígu", bd: "öğrenci motivasyonu" },
    { en: "Pratique e ficará natural.", tr: "Pratik yapın, doğal hale gelecek.", pron: "pratíki i fikará naturaw", bd: "tavsiye ifadesi" },
    { en: "Erro faz parte do aprendizado.", tr: "Hata öğrenmenin parçasıdır.", pron: "éru faz parti du aprendizadu", bd: "büyüme zihniyeti" }
  ],
  grammar: [
    {
      title: "Infinitivo Pessoal — BP'ye Özgü Yapı",
      explanation: "Portekizce'nin en özellikli yapılarından biri infinitivo pessoal'dır (kişisel infinitif). Türkçe veya İngilizce'de bulunmaz. Farklı öznelerin aynı cümlede infinitif kullanmasını sağlar: 'Para nós irmos' (bizim gitmemiz için). Çekim: ir (eu), ir (você), irmos (nós), irem (eles).",
      table: [
        { pronoun: "Para eu + inf.", form: "Benim için", example: "Para eu entender, preciso praticar.", tr: "Anlamam için pratik yapmam lazım." },
        { pronoun: "Para você + inf.", form: "Senin için", example: "Para você aprender, leia muito.", tr: "Öğrenmen için çok oku." },
        { pronoun: "Para nós + -mos", form: "Bizim için", example: "É bom para nós estudarmos.", tr: "Bizim çalışmamız iyi." },
        { pronoun: "Para eles + -em", form: "Onlar için", example: "Para eles virem, é muito longe.", tr: "Onların gelmesi için çok uzak." },
        { pronoun: "Depois de + inf.p.", form: "Sonra", example: "Depois de eles saírem, vou dormir.", tr: "Onlar gittikten sonra uyuyacağım." },
        { pronoun: "Ao + inf.p.", form: "Yaparken", example: "Ao chegarmos, todos aplaudiram.", tr: "Vardığımızda herkes alkışladı." }
      ],
      note: "Infinitivo pessoal sadece Portekizce'de var! Galice de var ama İspanyolca'da yok. BP'de 'Para a gente ir' = 'Para nós irmos' (informal)."
    },
    {
      title: "Subjuntivo Futuro — Gelecek Bağıntılı Yapı",
      explanation: "Türkçe veya İngilizce'de tam karşılığı olmayan bir yapı: SUBJUNTIVO FUTURO. QUANDO (ne zaman), SE (eğer), ASSIM QUE (hemen...olur olmaz) ile gelecek anlam taşıyan cümlelerde kullanılır. Yapı: -AR → -ar; -ER → -er; -IR → -ir. Düzensiz: for (ir/ser), tiver (ter), fizer (fazer), vier (vir).",
      table: [
        { pronoun: "Quando + subj.fut.", form: "Ne zaman... olursa", example: "Quando você vier, me avise.", tr: "Geldiğinde beni haberdar et." },
        { pronoun: "Se + subj.fut.", form: "Eğer... olursa", example: "Se você quiser, pode ficar.", tr: "İstersen, kalabilirsin." },
        { pronoun: "Assim que", form: "Hemen... olur olmaz", example: "Assim que terminar, vou descansar.", tr: "Bitirince hemen dinleneceğim." },
        { pronoun: "Enquanto", form: "...süresince", example: "Enquanto eu trabalhar, precisarei.", tr: "Çalıştığım sürece ihtiyacım olacak." },
        { pronoun: "Onde + subj.fut.", form: "Nerede... olursa", example: "Onde você for, te apoio.", tr: "Nereye gidersen, seni desteklerim." },
        { pronoun: "For (ir/ser)", form: "Düzensiz: ir/ser", example: "Quando for possível, venha.", tr: "Mümkün olduğunda gel." }
      ],
      note: "Subjuntivo Futuro'nun önemli düzensizleri: PODER → puder, SABER → souber, TER → tiver, SER/IR → for, VIR → vier, FAZER → fizer, QUERER → quiser."
    },
    {
      title: "Crase (À) — Brezilya Portekizcesi'nde Önemli Kural",
      explanation: "Crase (à) preposição 'a' + artigo 'a' birleşmesidir. Dişil isimlerle belirli bazı durumlarda zorunludur: 'Vou à escola' (okula gidiyorum). Eril veya çoğul: 'Vou ao mercado' (markete) = a+o=ao. Çoğul dişil: 'às' = a+as. Kural: IR A + dişil belirli isim = crase.",
      table: [
        { pronoun: "À (dişil tekilden önce)", form: "a + a = à", example: "Fui à farmácia.", tr: "Eczaneye gittim." },
        { pronoun: "Ao (eril tekilden önce)", form: "a + o = ao", example: "Fui ao hospital.", tr: "Hastaneye gittim." },
        { pronoun: "Às (dişil çoğul)", form: "a + as = às", example: "Cheguei às três da tarde.", tr: "Öğleden sonra üçte geldim." },
        { pronoun: "Aos (eril çoğul)", form: "a + os = aos", example: "Apresentei aos diretores.", tr: "Direktörlere sundum." },
        { pronoun: "À moda de", form: "Tarzında", example: "Feito à moda baiana.", tr: "Bahia tarzında yapılmış." },
        { pronoun: "À noite", form: "Geceleri / Gece", example: "Estudo à noite.", tr: "Geceleri çalışıyorum." }
      ],
      note: "Crase OLMAZ: erkek isimlerde (ao), belirsiz (a uma menina), fiil öncesi (a fazer, a partir), çoğul belirsiz (a casas). BP'de yazılı dilde önemli, konuşmada genellikle fark edilmez."
    }
  ],
  speaking: [
    { q: "'Gelince bana haber ver' cümlesini subjuntivo futuro ile söyleyin.", a: "Quando você vier, me manda uma mensagem!" },
    { q: "'Bizim oraya gitmemiz için çok geç' cümlesini infinitivo pessoal ile söyleyin.", a: "Para nós irmos agora, é muito tarde. Vamos amanhã." },
    { q: "'Okula gidiyorum' cümlesinde crase kullanın.", a: "Vou à escola de ônibus todos os dias." },
    { q: "Subjuntivo futuro ile bir koşul cümlesi kurun.", a: "Se você quiser aprender, pratique todos os dias. Ficará fluente!" },
    { q: "'Yapabildiğimizde yapalım' nasıl?", a: "Quando pudermos, fazemos isso juntos. Não tem pressa." }
  ],
  dialogues: [
    {
      title: "Gramer Dersi",
      lines: [
        { speaker: "Aluno", text: "Professora, quando uso o subjuntivo futuro?", tr: "Profesör, subjuntivo futuro'yu ne zaman kullanırım?" },
        { speaker: "Professora", text: "Sempre depois de 'quando', 'se' e 'assim que', quando a ação é futura.", tr: "Eylem gelecek zaman anlatıldığında her zaman 'quando', 'se' ve 'assim que' sonrasında." },
        { speaker: "Aluno", text: "Então: 'Quando eu terminar o trabalho, vou sair'?", tr: "Öyleyse: 'İşi bitirdiğimde çıkacağım'?" },
        { speaker: "Professora", text: "Perfeito! 'Terminar' aí é subjuntivo futuro. Muito bem!", tr: "Mükemmel! Oradaki 'terminar' subjuntivo futuro. Çok iyi!" },
        { speaker: "Aluno", text: "E a crase? Sempre me confundo com 'a' e 'à'.", tr: "Peki crase? 'a' ve 'à' konusunda hep karışıyorum." },
        { speaker: "Professora", text: "Simples! 'À' = preposição 'a' + artigo 'a'. 'Vou à escola' — escola é feminino e definido.", tr: "Basit! 'À' = edat 'a' + belirli artiko 'a'. 'Okula gidiyorum' — escola dişil ve belirli." }
      ]
    }
  ],
  listening: {
    text: "A gramática do português brasileiro e do português europeu apresenta diferenças significativas. No Brasil, os pronomes oblíquos têm posição diferente: no português europeu, 'Dê-me o livro'; no Brasil, 'Me dá o livro'. O gerúndio é muito mais comum no Brasil: 'estou estudando' (BR) vs. 'estou a estudar' (PT). O subjuntivo futuro, embora exista em ambas as variedades, é mais preservado no português europeu em situações onde o brasileiro usa o indicativo. Essas diferenças não impedem a comunicação, mas podem causar estranhamento.",
    questions: [
      { q: "Brezilya ve Portekiz Portekizcesi arasındaki zamir farkı ne?", a: "BP: 'Me dá o livro' / PE: 'Dê-me o livro' — zamir pozisyonu farklı" },
      { q: "Gerundio kullanımında fark nedir?", a: "BP: 'estou estudando' / PE: 'estou a estudar'" },
      { q: "Bu farklılıklar iletişimi etkiliyor mu?", a: "İletişimi engellemez ama yabancılık hissi yaratabilir" }
    ]
  }
};
LESSONS[47] = L47;
