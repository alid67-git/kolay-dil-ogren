const L8 = {
  title: "No Restaurante",
  words: [
    { en: "o restaurante", tr: "restoran", pron: "u heshtaurãntshi", bd: "eril" },
    { en: "o cardápio / o menu", tr: "menü / yemek listesi", pron: "u kardápyu / u menu", bd: "BP: cardápio daha yaygın" },
    { en: "o garçom / o garçon", tr: "garson", pron: "u garsom", bd: "BP; EP: empregado de mesa" },
    { en: "a conta", tr: "hesap / fatura", pron: "a kõnta", bd: "dişil; A conta, por favor! = Hesap lütfen!" },
    { en: "a gorjeta", tr: "bahşiş", pron: "a gorjeta", bd: "dişil; BP'de genellikle gönüllü" },
    { en: "o prato", tr: "tabak / yemek (sipariş)", pron: "u pratu", bd: "eril; prato do dia = günün yemeği" },
    { en: "a entrada", tr: "başlangıç / önce gelen yemek", pron: "a ẽntrada", bd: "dişil; İngilizce starter" },
    { en: "o prato principal", tr: "ana yemek", pron: "u pratu prĩsipal", bd: "eril" },
    { en: "a sobremesa", tr: "tatlı", pron: "a sobremeza", bd: "dişil; pós-refeição" },
    { en: "a reserva", tr: "rezervasyon", pron: "a rezerva", bd: "dişil; Tenho uma reserva. = Rezervasyonum var." },
    { en: "a mesa", tr: "masa", pron: "a meza", bd: "dişil; Uma mesa para dois? = İki kişilik masa?" },
    { en: "grelhado / grelhada", tr: "ızgara", pron: "grelyadu / grelyada", bd: "pişirme yöntemi" },
    { en: "frito / frita", tr: "kızartma", pron: "fritu / frita", bd: "pişirme yöntemi" },
    { en: "cozido / cozida", tr: "haşlama / pişmiş", pron: "kozidu / kozida", bd: "pişirme yöntemi" },
    { en: "ao ponto", tr: "orta pişmiş (et)", pron: "aw põntu", bd: "et pişme derecesi; mal passado=az" },
    { en: "sem açúcar", tr: "şekersiz", pron: "sẽy asúkar", bd: "sem = -siz, -sız" },
    { en: "Está bom?", tr: "İyi mi? Nasıl?", pron: "ıshta bõ", bd: "garson sorar; Está ótimo! = Harika!" },
    { en: "Está faltando algo.", tr: "Bir şey eksik.", pron: "ıshta faltãndu algu", bd: "şikayet" },
    { en: "Pode repetir?", tr: "Tekrar edebilir misiniz?", pron: "pódshi repitír", bd: "anlamadıysanız" },
    { en: "Muito obrigado/a!", tr: "Çok teşekkürler!", pron: "muyntu obrigadu/a", bd: "konuşmacının cinsine göre" }
  ],
  grammar: [
    {
      title: "Restoran Dili — Sipariş Kalıpları",
      explanation: "Restoranda iletişim için belirli kalıplar vardır. BP'de 'Vou querer...' (İsteyeceğim = İstiyorum anlamında) çok yaygındır. Nazik sipariş için koşullu 'Gostaria de...' veya 'Poderia me trazer...?' kullanılır.",
      table: [
        { pronoun: "Sipariş verme", form: "Vou querer / Quero", example: "Vou querer o bife.", tr: "Bonfile alacağım." },
        { pronoun: "Kibarca", form: "Gostaria de...", example: "Gostaria de ver o cardápio.", tr: "Menüye bakmak isterim." },
        { pronoun: "Garson çağırma", form: "Com licença! / Garçom!", example: "Com licença, pode vir?", tr: "Affedersiniz, gelebilir misiniz?" },
        { pronoun: "Hesap isteme", form: "A conta, por favor!", example: "Pode trazer a conta?", tr: "Hesabı getirebilir misiniz?" },
        { pronoun: "Şikayet", form: "Está + soğuk/sıcak/eksik", example: "Está frio. / Está errado.", tr: "Soğuk. / Yanlış." },
        { pronoun: "Övgü", form: "Está delicioso!", example: "Parabéns ao chef!", tr: "Harika! Şefe tebrik!" }
      ],
      note: "BP'de garson'a 'garçom' denir ve 'mano'/'irmão' gibi hitaplarla çağırılmaması beklenir. 'Com licença' daha kibardır."
    },
    {
      title: "PODER — Yapabilmek (Rica ve İzin İsteme)",
      explanation: "PODER fiili 'yapabilmek' anlamına gelir ve restoran dahil pek çok durumda kullanılır. 'Pode me trazer?' = 'Getirebilir misiniz?' şeklinde. PODER düzensiz bir fiildir.",
      table: [
        { pronoun: "Eu", form: "posso", example: "Posso pagar com cartão?", tr: "Kartla ödeyebilir miyim?" },
        { pronoun: "Você / Ele / Ela", form: "pode", example: "Pode repetir, por favor?", tr: "Tekrar edebilir misiniz?" },
        { pronoun: "Nós", form: "podemos", example: "Podemos sentar aqui?", tr: "Buraya oturabilir miyiz?" },
        { pronoun: "Vocês / Eles", form: "podem", example: "Podem trazer mais pão?", tr: "Daha fazla ekmek getirebilirler mi?" },
        { pronoun: "Koşullu kibar", form: "poderia", example: "Poderia trazer a conta?", tr: "Hesabı getirebilir misiniz? (çok kibar)" },
        { pronoun: "Olumsuz", form: "não posso", example: "Não posso comer glúten.", tr: "Glüten yiyemem." }
      ],
      note: "QUERER (istemek) düzensiz: quero, quer, queremos, querem. SER: sou, é, somos, são. Tümü önemli kök fiillerdir."
    },
    {
      title: "Yiyecek Kısıtlamaları ve Alerjiler",
      explanation: "Yiyecek kısıtlamalarını belirtmek için 'ser alérgico/a a' (alerjisi olmak) veya 'não posso comer' (yiyememek) kullanılır. 'Sem' preposisyonu '-siz/-sız' anlamına gelir: sem glúten = glutensiz.",
      table: [
        { pronoun: "Alerji", form: "Sou alérgico/a a...", example: "Sou alérgico a nozes.", tr: "Fındık alerjim var." },
        { pronoun: "Yiyemem", form: "Não posso comer...", example: "Não posso comer carne.", tr: "Et yiyemem." },
        { pronoun: "Vejetaryen", form: "Sou vegetariano/a", example: "Tem opções vegetarianas?", tr: "Vejetaryen seçenek var mı?" },
        { pronoun: "-siz/-sız", form: "sem + isim", example: "sem sal / sem açúcar", tr: "tuzsuz / şekersiz" },
        { pronoun: "Laktoz intolerans", form: "sou intolerante a", example: "Sou intolerante a lactose.", tr: "Laktozu kaldıramıyorum." },
        { pronoun: "Tercih", form: "Prefiro...", example: "Prefiro frango ao peixe.", tr: "Balığa göre tavuğu tercih ederim." }
      ],
      note: "'Prefiro A a B' = 'A'yı B'ye tercih ederim.' Bu yapı çok kullanışlıdır. a = 'yerine' anlamında preposisyon."
    }
  ],
  speaking: [
    { q: "Como pede o cardápio?", a: "Poderia me trazer o cardápio, por favor?" },
    { q: "'Hesap lütfen' nasıl dersiniz?", a: "A conta, por favor!" },
    { q: "Vejetaryen olduğunuzu söyleyin.", a: "Sou vegetariano/a. Tem opções vegetarianas?" },
    { q: "Yemeği beğendim nasıl söylerim?", a: "Está delicioso! Parabéns ao chef!" },
    { q: "'Kartla ödeyebilir miyim?' nasıl?", a: "Posso pagar com cartão?" }
  ],
  dialogues: [
    {
      title: "Çıkış Anı",
      lines: [
        { speaker: "Cliente", text: "Com licença! Pode trazer a conta?", tr: "Affedersiniz! Hesabı getirebilir misiniz?" },
        { speaker: "Garçom", text: "Claro! Tudo bem com a refeição?", tr: "Tabii! Yemek nasıldı?" },
        { speaker: "Cliente", text: "Estava delicioso! O peixe estava perfeito.", tr: "Harikaydı! Balık mükemmeldi." },
        { speaker: "Garçom", text: "Fico feliz! A conta é de oitenta e cinco reais.", tr: "Sevindim! Hesap seksen beş real." },
        { speaker: "Cliente", text: "Posso pagar com cartão?", tr: "Kartla ödeyebilir miyim?" },
        { speaker: "Garçom", text: "Sim, aceitamos todos os cartões. Obrigado!", tr: "Evet, tüm kartları kabul ediyoruz. Teşekkürler!" }
      ]
    }
  ],
  listening: {
    text: "Ontem fui a um restaurante típico brasileiro com minha família. Fizemos uma reserva para seis pessoas. O garçom foi muito simpático e nos explicou todos os pratos. Pedi o frango grelhado com arroz, feijão e farofa. Estava delicioso! De sobremesa, tomamos sorvete de goiaba. A conta foi de duzentos e quarenta reais mas valeu muito a pena.",
    questions: [
      { q: "Kaç kişilik rezervasyon yapıldı?", a: "Altı kişilik" },
      { q: "Ne sipariş etti?", a: "Izgara tavuk, pirinç, fasulye ve farofa" },
      { q: "Tatlı ne?", a: "Guava dondurması" }
    ]
  }
};
LESSONS[8] = L8;
