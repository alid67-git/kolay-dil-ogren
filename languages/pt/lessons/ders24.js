const L24 = {
  title: "No Banco e Finanças",
  words: [
    { en: "o banco", tr: "banka", pron: "u bãnku", bd: "eril" },
    { en: "a conta corrente", tr: "vadesiz hesap / cari hesap", pron: "a kõnta kohẽntshi", bd: "dişil" },
    { en: "a poupança", tr: "tasarruf hesabı", pron: "a popãnsa", bd: "dişil; guardar dinheiro = para biriktirmek" },
    { en: "o saldo", tr: "bakiye", pron: "u sawdu", bd: "eril; verificar saldo = bakiye kontrol etmek" },
    { en: "o saque", tr: "para çekme", pron: "u saki", bd: "eril; sacar = para çekmek" },
    { en: "o depósito", tr: "para yatırma", pron: "u depózitu", bd: "eril; depositar = yatırmak" },
    { en: "a transferência", tr: "havale / transfer", pron: "a trãsferẽnsia", bd: "dişil; transferir = transfer etmek" },
    { en: "o PIX", tr: "PIX (anlık ödeme sistemi)", pron: "u piksh", bd: "eril; Brezilya'ya özgü anlık transfer" },
    { en: "o cartão de crédito", tr: "kredi kartı", pron: "u kartão dshi kréditu", bd: "eril" },
    { en: "o cartão de débito", tr: "banka kartı / debit kart", pron: "u kartão dshi débitu", bd: "eril" },
    { en: "o caixa eletrônico / ATM", tr: "ATM / banka otomatı", pron: "u kaysha eletroniku", bd: "eril" },
    { en: "a taxa", tr: "ücret / vergi / faiz", pron: "a tasha", bd: "dişil; taxa de juros = faiz oranı" },
    { en: "o empréstimo", tr: "kredi / borç", pron: "u ẽmpréstimu", bd: "eril; pedir empréstimo = kredi çekmek" },
    { en: "a dívida", tr: "borç", pron: "a dzhívida", bd: "dişil; estar endividado = borçlu olmak" },
    { en: "o orçamento", tr: "bütçe", pron: "u orshamẽntu", bd: "eril; fazer orçamento = bütçe yapmak" },
    { en: "economizar", tr: "tasarruf etmek", pron: "ekonomizar", bd: "düzenli -AR" },
    { en: "investir", tr: "yatırım yapmak", pron: "ĩveshchír", bd: "düzensiz -IR; invisto = yatırım yapıyorum" },
    { en: "a inflação", tr: "enflasyon", pron: "a ĩflasão", bd: "dişil" },
    { en: "o câmbio", tr: "döviz kuru / kur", pron: "u kãmbyu", bd: "eril; casa de câmbio = döviz bürosu" },
    { en: "Qual é o câmbio hoje?", tr: "Bugün kur ne?", pron: "kuaw é u kãmbyu oji", bd: "döviz sorusu" }
  ],
  grammar: [
    {
      title: "PIX — Brezilya'nın Anlık Ödeme Sistemi",
      explanation: "PIX, Brezilya Merkez Bankası'nın 2020'de başlattığı anlık ödeme sistemidir. 7/24 çalışır, ücretsizdir ve saniyeler içinde tamamlanır. 'Mandar um PIX' = PIX göndermek. 'Chave PIX' = PIX anahtarı (CPF, telefon, e-posta veya chave aleatória).",
      table: [
        { pronoun: "PIX göndermek", form: "mandar um PIX", example: "Vou te mandar um PIX agora.", tr: "Sana şimdi PIX göndereceğim." },
        { pronoun: "PIX almak", form: "receber um PIX", example: "Recebi o PIX, obrigado!", tr: "PIX'i aldım, teşekkürler!" },
        { pronoun: "PIX anahtarı", form: "chave PIX", example: "Qual é sua chave PIX?", tr: "PIX anahtarın ne?" },
        { pronoun: "Hesap aktarma", form: "transferência bancária", example: "Prefiro transferência ao cheque.", tr: "Çekten ziyade havaleyi tercih ederim." },
        { pronoun: "Güvenilik", form: "é seguro?", example: "O PIX é totalmente seguro.", tr: "PIX tamamen güvenlidir." },
        { pronoun: "Limit", form: "limite de transferência", example: "Tem limite noturno.", tr: "Gece limiti var." }
      ],
      note: "PIX devrimsel bir sistem. Brezilya'da 'vai no PIX?' = Kartla mı ödeyeceksin? anlamında kullanılmaya başlandı."
    },
    {
      title: "Bankada Konuşma — Para ve Hesap İşlemleri",
      explanation: "Bankada işlem yaparken çeşitli kalıplar kullanılır. QUERER (istemek), PRECISAR (ihtiyaç duymak), PODER (yapabilmek) bu bağlamda çok işe yarar. Belge gösterme: 'Preciso apresentar o CPF' (CPF'mi sunmam gerekiyor).",
      table: [
        { pronoun: "Hesap açmak", form: "abrir uma conta", example: "Quero abrir uma conta corrente.", tr: "Cari hesap açmak istiyorum." },
        { pronoun: "Para çekmek", form: "sacar dinheiro", example: "Quero sacar duzentos reais.", tr: "İki yüz real çekmek istiyorum." },
        { pronoun: "Para yatırmak", form: "depositar", example: "Vou depositar este cheque.", tr: "Bu çeki yatıracağım." },
        { pronoun: "Bakiye kontrol", form: "verificar saldo", example: "Posso verificar meu saldo?", tr: "Bakiyemi kontrol edebilir miyim?" },
        { pronoun: "Bozuk para", form: "trocar dinheiro", example: "Pode me trocar essa nota?", tr: "Bu banknotu bozabilir misiniz?" },
        { pronoun: "Döviz bozdurma", form: "cambiar / trocar moeda", example: "Quero trocar dólares por reais.", tr: "Doları reale bozdurmak istiyorum." }
      ],
      note: "CPF = Cadastro de Pessoa Física (Türkiye'deki TC kimlik numarası gibi). Bankada her işlemde gereklidir."
    },
    {
      title: "Finansal Kelime Hazinesi — Bütçe ve Yatırım",
      explanation: "Kişisel finans yönetimi için anahtar kelimeler: renda (gelir), gasto/despesa (harcama), orçamento (bütçe), investimento (yatırım), reserva de emergência (acil fon). Brezilya'da finansal okuryazarlık giderek önem kazanmaktadır.",
      table: [
        { pronoun: "Gelir", form: "renda / salário", example: "Minha renda mensal é X.", tr: "Aylık gelirm X." },
        { pronoun: "Harcama", form: "gasto / despesa", example: "Meus gastos mensais são altos.", tr: "Aylık harcamalarım yüksek." },
        { pronoun: "Bütçe", form: "fazer um orçamento", example: "Preciso controlar o orçamento.", tr: "Bütçemi kontrol etmem gerekiyor." },
        { pronoun: "Yatırım", form: "investir em / aplicar", example: "Invisto em ações.", tr: "Hisse senetlerine yatırım yapıyorum." },
        { pronoun: "Acil fon", form: "reserva de emergência", example: "Tenho três salários de reserva.", tr: "Üç maaşlık acil fonum var." },
        { pronoun: "Faiz", form: "juros / taxa de juros", example: "A taxa de juros está alta.", tr: "Faiz oranı yüksek." }
      ],
      note: "Selic = Brezilya merkez bankasının temel faiz oranı. CDI = en yaygın yatırım göstergesi. Her ikisi de haberlerde çok çıkar."
    }
  ],
  speaking: [
    { q: "'PIX anahtarınız nedir?' nasıl sorarsınız?", a: "Qual é a sua chave PIX?" },
    { q: "Bankada 300 real çekmek istiyorsunuz.", a: "Quero sacar trezentos reais, por favor." },
    { q: "'Bakiyemi kontrol etmek istiyorum' nasıl?", a: "Gostaria de verificar meu saldo." },
    { q: "Dolar-Real kuru sorusu nasıl?", a: "Qual é o câmbio do dólar hoje?" },
    { q: "'Harcamalarım çok yüksek' nasıl?", a: "Meus gastos estão muito altos. Preciso economizar." }
  ],
  dialogues: [
    {
      title: "Banka Ziyareti",
      lines: [
        { speaker: "Atendente", text: "Bom dia! Em que posso ajudar?", tr: "Günaydın! Nasıl yardımcı olabilirim?" },
        { speaker: "Cliente", text: "Quero abrir uma conta corrente e uma poupança.", tr: "Cari hesap ve tasarruf hesabı açmak istiyorum." },
        { speaker: "Atendente", text: "Claro! Precisa de CPF, RG e comprovante de residência.", tr: "Tabii! CPF, nüfus cüzdanı ve ikametgah belgesi gerekiyor." },
        { speaker: "Cliente", text: "Tenho tudo aqui. Também quero um cartão de débito.", tr: "Hepsi yanımda. Ayrıca banka kartı da istiyorum." },
        { speaker: "Atendente", text: "Perfeito! O cartão chega em cinco dias úteis.", tr: "Mükemmel! Kart beş iş günü içinde gelir." },
        { speaker: "Cliente", text: "Posso usar o PIX desde já?", tr: "PIX'i hemen kullanabilir miyim?" }
      ]
    }
  ],
  listening: {
    text: "O PIX revolucionou os pagamentos no Brasil. Lançado em novembro de 2020, o PIX permite transferências instantâneas vinte e quatro horas por dia, sete dias por semana, sem cobrar nada para pessoas físicas. Em menos de dois anos, o PIX se tornou o meio de pagamento mais utilizado no Brasil, superando o cartão de crédito e o dinheiro em espécie. Hoje, quase todos os brasileiros têm uma chave PIX cadastrada.",
    questions: [
      { q: "PIX ne zaman başlatıldı?", a: "Kasım 2020" },
      { q: "PIX'in avantajı ne?", a: "7/24 anlık transfer, bireyler için ücretsiz" },
      { q: "PIX neyi geçti?", a: "Kredi kartı ve nakit parayı en çok kullanılan ödeme yöntemi olarak" }
    ]
  }
};
LESSONS[24] = L24;
