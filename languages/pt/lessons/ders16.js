const L16 = {
  title: "Transporte e Viagem",
  words: [
    { en: "o transporte", tr: "ulaşım / taşıma", pron: "u trãshporti", bd: "eril" },
    { en: "o ônibus", tr: "otobüs", pron: "u onibush", bd: "eril; EP: autocarro" },
    { en: "o metrô", tr: "metro", pron: "u metró", bd: "eril; BP büyük şehirlerde yaygın" },
    { en: "o trem", tr: "tren", pron: "u trẽy", bd: "eril; intercidade = şehirlerarası" },
    { en: "o avião", tr: "uçak", pron: "u avião", bd: "eril; çoğul: aviões" },
    { en: "o carro", tr: "araba", pron: "u kahu", bd: "eril" },
    { en: "a moto", tr: "motosiklet", pron: "a motu", bd: "dişil; motocicleta = tam form" },
    { en: "a bicicleta / a bike", tr: "bisiklet", pron: "a bisikleta / a bike", bd: "dişil; bike BP günlük" },
    { en: "o táxi / o Uber", tr: "taksi / Uber", pron: "u táksi / u uber", bd: "eril; Uber BP'de çok yaygın" },
    { en: "a passagem", tr: "bilet", pron: "a pasajem", bd: "dişil; passagem de avião = uçak bileti" },
    { en: "a estação", tr: "istasyon / durak", pron: "a ıshtasão", bd: "dişil; ponto de ônibus = otobüs durağı" },
    { en: "a rodoviária", tr: "otogar", pron: "a hodovyárya", bd: "dişil; BP'ye özgü" },
    { en: "o aeroporto", tr: "havalimanı", pron: "u aeroportu", bd: "eril" },
    { en: "o trânsito", tr: "trafik / yoğunluk", pron: "u trãnzitu", bd: "eril; Tem trânsito. = Trafik var." },
    { en: "o engarrafamento", tr: "trafik sıkışıklığı", pron: "u ẽngarrafamẽntu", bd: "eril; 'congestionamento' de denir" },
    { en: "a viagem", tr: "yolculuk / seyahat", pron: "a vjajẽy", bd: "dişil; viajar = seyahat etmek" },
    { en: "Quanto tempo leva?", tr: "Ne kadar sürer?", pron: "kuãntu tẽmpu leva", bd: "yolculuk süresi sorusu" },
    { en: "Onde fica o ponto?", tr: "Durak nerede?", pron: "ôndshi fika u põntu", bd: "otobüs durağı sorusu" },
    { en: "Preciso trocar de linha.", tr: "Hat değiştirmem gerekiyor.", pron: "presizu trokar dshi linya", bd: "aktarma" },
    { en: "Boa viagem!", tr: "İyi yolculuklar!", pron: "boa vjajẽy", bd: "vedalaşma ifadesi" }
  ],
  grammar: [
    {
      title: "Ulaşım Araçları — de + araç",
      explanation: "Ulaşım araçlarını belirtmek için 'de + araç' preposisyonu kullanılır: 'de ônibus' (otobüsle), 'de metrô' (metroyla), 'de carro' (arabayla). Ancak 'a pé' (yürüyerek) için 'de' kullanılmaz.",
      table: [
        { pronoun: "Otobüsle", form: "de ônibus", example: "Vou de ônibus para o trabalho.", tr: "İşe otobüsle gidiyorum." },
        { pronoun: "Metroyla", form: "de metrô", example: "Prefiro de metrô.", tr: "Metroyu tercih ederim." },
        { pronoun: "Arabayla", form: "de carro", example: "Ele foi de carro.", tr: "Arabayla gitti." },
        { pronoun: "Uçakla", form: "de avião", example: "Viajamos de avião.", tr: "Uçakla seyahat ettik." },
        { pronoun: "Yürüyerek", form: "a pé", example: "Vou a pé, é pertinho.", tr: "Yürüyerek gidiyorum, yakın." },
        { pronoun: "Taksiyle", form: "de táxi / de Uber", example: "Chame um Uber.", tr: "Uber çağır." }
      ],
      note: "BP'de Uber çok yaygın. 'Chamar um Uber' (Uber çağırmak) günlük dilde sıkça kullanılır."
    },
    {
      title: "PEGAR — Almak / Binmek (Ulaşım)",
      explanation: "PEGAR (almak/tutmak/binmek) fiili BP'de çok çok yaygındır. 'Pegar o ônibus' = otobüse binmek. 'Pegar a estrada' = yola koyulmak. Bu fiil İngilizce 'take' gibi çok amaçlıdır.",
      table: [
        { pronoun: "Eu pego", form: "biniyorum / alıyorum", example: "Pego o metrô todo dia.", tr: "Her gün metroya biniyorum." },
        { pronoun: "Você pega", form: "biniyorsunuz", example: "Você pega qual linha?", tr: "Hangi hattı kullanıyorsunuz?" },
        { pronoun: "Nós pegamos", form: "biniyoruz", example: "Pegamos o trem das oito.", tr: "Sekiz saatlik trene biniyoruz." },
        { pronoun: "Pegar engarrafamento", form: "trafiğe yakalanmak", example: "Peguei muito trânsito.", tr: "Çok trafiğe takıldım." },
        { pronoun: "Pegar gripe", form: "grip olmak", example: "Peguei uma gripe.", tr: "Grip oldum." },
        { pronoun: "Pegar o caminho", form: "yol bulmak", example: "Pegou o caminho errado.", tr: "Yanlış yolu tuttu." }
      ],
      note: "PEGAR tam bir çok amaçlı fiildir BP'de. 'Pegar' aynı zamanda 'almak' anlamında da kullanılır: 'Pega minha caneta.' = Kalemimi al."
    },
    {
      title: "FICAR — Kalmak / Olmak (Konum ve Durum)",
      explanation: "FICAR (kalmak/olmak) hem konum hem de geçici durum için kullanılır. 'O aeroporto fica longe?' = Havalimanı uzak mı? 'Fico com raiva no trânsito.' = Trafikte sinirleniyorum.",
      table: [
        { pronoun: "Konum", form: "ficar + konum zarfı", example: "O terminal fica à esquerda.", tr: "Terminal solda." },
        { pronoun: "Mesafe", form: "ficar + perto/longe", example: "Fica longe daqui?", tr: "Buradan uzak mı?" },
        { pronoun: "Durum", form: "ficar + sıfat", example: "Fiquei perdido no metrô.", tr: "Metroda kayboldum." },
        { pronoun: "Bekleme", form: "ficar esperando", example: "Fiquei esperando uma hora.", tr: "Bir saat bekledim." },
        { pronoun: "Kalmak", form: "ficar em + yer", example: "Fico em casa hoje.", tr: "Bugün evde kalıyorum." },
        { pronoun: "Olmak (dönüşüm)", form: "ficar + sıfat", example: "Ficou feliz com a notícia.", tr: "Habere sevindi." }
      ],
      note: "FICAR vs ESTAR: her ikisi de 'olmak' anlamına gelir ama FICAR değişimi vurgular: 'Fiquei nervoso' (sinirle(n)dim)."
    }
  ],
  speaking: [
    { q: "'Havalimanına nasıl gidebilirim?' nasıl?", a: "Como posso ir ao aeroporto? De ônibus ou de metrô?" },
    { q: "Trene biniyorsunuz — nasıl söylersiniz?", a: "Pego o trem para o centro." },
    { q: "'Ulaşım uzak mı?' nasıl sorarsınız?", a: "Fica longe daqui?" },
    { q: "Trafik çok yoğun — nasıl söylersiniz?", a: "Tem muito trânsito / Peguei engarrafamento." },
    { q: "'İyi yolculuklar!' nasıl?", a: "Boa viagem!" }
  ],
  dialogues: [
    {
      title: "Yol Tarifi",
      lines: [
        { speaker: "Turista", text: "Com licença! Como chego ao centro histórico?", tr: "Affedersiniz! Tarihi merkeze nasıl gidebilirim?" },
        { speaker: "Morador", text: "Pode ir de metrô! Pega a linha verde.", tr: "Metroyla gidebilirsiniz! Yeşil hattı alın." },
        { speaker: "Turista", text: "Onde fica a estação mais próxima?", tr: "En yakın istasyon nerede?" },
        { speaker: "Morador", text: "Ali na esquina. Fica a dois minutos a pé.", tr: "Şurada köşede. Yürüyerek iki dakika." },
        { speaker: "Turista", text: "Preciso trocar de linha?", tr: "Hat değiştirmem gerekiyor mu?" },
        { speaker: "Morador", text: "Não! Direto até a estação Sé. Boa viagem!", tr: "Hayır! Sé İstasyonuna direkt. İyi yolculuklar!" }
      ]
    }
  ],
  listening: {
    text: "São Paulo tem um dos maiores sistemas de metrô da América Latina, com seis linhas e mais de cem estações. O metrô é rápido e eficiente, mas nas horas de pico fica muito cheio. Muitos paulistanos preferem usar o aplicativo de Uber ou de táxi para evitar o trânsito. A cidade tem fama de ter um dos piores trânsitos do mundo — em horário de pico, pode levar horas para percorrer poucos quilômetros.",
    questions: [
      { q: "São Paulo metrosunun kaç hattı var?", a: "Altı hat" },
      { q: "Metronun dezavantajı ne?", a: "Yoğun saatlerde çok kalabalık" },
      { q: "São Paulo neden ünlü?", a: "Dünyanın en kötü trafiklerinden biri" }
    ]
  }
};
LESSONS[16] = L16;
