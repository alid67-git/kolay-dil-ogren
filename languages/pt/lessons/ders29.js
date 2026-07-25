const L29 = {
  title: "Culinária Brasileira",
  words: [
    { en: "a feijoada", tr: "feijoada (milli yemek)", pron: "a feyjwada", bd: "dişil; siyah fasulye+et güveci" },
    { en: "o pão de queijo", tr: "peynirli ekmek (mısırlı)", pron: "u pão dshi keyju", bd: "eril; Minas Gerais'in simgesi" },
    { en: "a coxinha", tr: "coxinha (tavuklu hamur)", pron: "a koshĩnya", bd: "dişil; en sevilen atıştırmalık" },
    { en: "o brigadeiro", tr: "brigadeiro (çikolata topu)", pron: "u brigadeyru", bd: "eril; doğum günü vazgeçilmezi" },
    { en: "o açaí", tr: "açaí (orman meyvesi)", pron: "u asaí", bd: "eril; Amazon meyve kâsesi" },
    { en: "a caipirinha", tr: "caipirinha (kokteyl)", pron: "a kaypirínya", bd: "dişil; cachaça+limon+şeker" },
    { en: "a cachaça", tr: "cachaça (şeker kamışı rakısı)", pron: "a kashasa", bd: "dişil; pinga veya caninha da denir" },
    { en: "o churrasco", tr: "barbeküye/ızgara (Brezilya tarzı)", pron: "u shurrasku", bd: "eril; churrasqueiro = ızgara ustası" },
    { en: "a farofa", tr: "farofa (manyok unu kızartması)", pron: "a farofa", bd: "dişil; feijoada'nın yanına" },
    { en: "o quiabo", tr: "bamya", pron: "u kyabu", bd: "eril; Brezilya mutfağında çok yaygın" },
    { en: "o tapioca", tr: "tapioka (manyok nişastası krep)", pron: "u tapyoka", bd: "eril; BP kahvaltısı" },
    { en: "o tucupi", tr: "tucupi (sarı Amazon sosu)", pron: "u tukupi", bd: "eril; Amazon mutfağına özgü" },
    { en: "a moqueca", tr: "moqueca (balık güveci)", pron: "a mokkéka", bd: "dişil; hindistancevizi sütü+palmiye yağı" },
    { en: "o vatapá", tr: "vatapá (fıstıklı-hindistancevizli yemek)", pron: "u vatapá", bd: "eril; Bahia mutfağı" },
    { en: "o guaraná", tr: "guaraná (Amazon meyveli içecek)", pron: "u guarana", bd: "eril; Amazon'a özgü bitki" },
    { en: "temperar", tr: "baharatlamak / çeşni katmak", pron: "tẽmperar", bd: "düzenli -AR; tempero = baharat" },
    { en: "cozinhar", tr: "pişirmek / yemek yapmak", pron: "kozĩnyár", bd: "düzenli -AR" },
    { en: "grelhar", tr: "ızgara yapmak", pron: "grelyár", bd: "düzenli -AR" },
    { en: "fritar", tr: "kızartmak", pron: "fritár", bd: "düzenli -AR" },
    { en: "Bom apetite!", tr: "Afiyet olsun!", pron: "bõy apetítshi", bd: "yemek başlarken" }
  ],
  grammar: [
    {
      title: "Yemek Tarifi Anlatma — Gereçler ve Süreç",
      explanation: "Yemek tarifi anlatırken ADICIONAR (eklemek), MISTURAR (karıştırmak), COZINHAR (pişirmek), DEIXAR (bırakmak/bekletmek) gibi fiiller kullanılır. Tarifte emir kipi (imperativo) veya infinitivo kullanılır.",
      table: [
        { pronoun: "Eklemek", form: "Adicione / Coloque", example: "Adicione sal e pimenta.", tr: "Tuz ve karabiber ekleyin." },
        { pronoun: "Karıştırmak", form: "Misture / Mexa", example: "Misture bem os ingredientes.", tr: "Malzemeleri iyice karıştırın." },
        { pronoun: "Pişirmek", form: "Cozinhe / Ferva", example: "Cozinhe por vinte minutos.", tr: "Yirmi dakika pişirin." },
        { pronoun: "Kızartmak", form: "Frite", example: "Frite no azeite quente.", tr: "Sıcak zeytinyağında kızartın." },
        { pronoun: "Bekletmek", form: "Deixe descansar", example: "Deixe a massa descansar.", tr: "Hamuru dinlendirin." },
        { pronoun: "Servis", form: "Sirva com / acompanhado de", example: "Sirva com arroz e farofa.", tr: "Pirinç ve farofa ile servis edin." }
      ],
      note: "Tariflerde 'xícara' = çay bardağı, 'colher de sopa' = yemek kaşığı, 'colher de chá' = çay kaşığı. Bunlar ölçü birimleridir."
    },
    {
      title: "Yiyecek Hakkında Fikir Belirtme",
      explanation: "Bir yemeği değerlendirirken ACHAR (düşünmek/bulmak) çok kullanılır. 'Acho que está gostoso' = Bence lezzetli. ESTAR ile geçici özellikler, SER ile kalıcı nitelikler belirtilir.",
      table: [
        { pronoun: "Acho que...", form: "bence...", example: "Acho que a feijoada é perfeita.", tr: "Bence feijoada mükemmel." },
        { pronoun: "Na minha opinião", form: "benim görüşüme göre", example: "Na minha opinião, tem muito sal.", tr: "Benim görüşüme göre, çok tuzlu." },
        { pronoun: "Favorito", form: "Meu prato favorito é...", example: "Meu prato favorito é brigadeiro!", tr: "Favori yemeğim brigadeiro!" },
        { pronoun: "Experimenta!", form: "Dene!", example: "Experimenta o pão de queijo!", tr: "Peynirli ekmeği dene!" },
        { pronoun: "Prefiro", form: "tercih ederim", example: "Prefiro moqueca ao churrasco.", tr: "Churrascodan ziyade moquecayı tercih ederim." },
        { pronoun: "Combinação", form: "combinar com", example: "Açaí combina com granola.", tr: "Açaí granola ile çok gider." }
      ],
      note: "'Gostoso' = lezzetli (BP informal). 'Delicioso' = daha resmi. 'Saboroso' = lezzetli (tatmin edici)."
    },
    {
      title: "IMPERFECTO (Imperfeito) — Geçmiş Alışkanlıklar",
      explanation: "Geçmişteki düzenli alışkanlıkları veya süregelen durumları anlatmak için Pretérito Imperfeito kullanılır. '-AR' fiilleri için: -ava/-avas/-ava/-ávamos/-avam. '-ER/-IR' için: -ia/-ias/-ia/-íamos/-iam. 'De criança, comia brigadeiro todo dia' = Çocukken her gün brigadeiro yerdim.",
      table: [
        { pronoun: "-AR imper.", form: "-ava", example: "Minha vó cozinhava muito bem.", tr: "Büyükannem çok iyi yemek yapardı." },
        { pronoun: "-ER imper.", form: "-ia", example: "Comia feijoada todo sábado.", tr: "Her cumartesi feijoada yerdim." },
        { pronoun: "De criança", form: "geçmiş alışkanlık", example: "De criança, adorava brigadeiro.", tr: "Çocukken brigadeiro'ya bayılırdım." },
        { pronoun: "Quando era", form: "...iken", example: "Quando era pequeno, comia tudo.", tr: "Küçükken her şeyi yerdim." },
        { pronoun: "Antes", form: "eskiden", example: "Antes, não gostava de café.", tr: "Eskiden kahveyi sevmezdim." },
        { pronoun: "Sempre", form: "her zaman (geçmiş)", example: "Sempre almoçávamos juntos.", tr: "Her zaman birlikte öğle yemeği yerdik." }
      ],
      note: "Imperfeito vs Perfeito: Perfeito = tamamlanmış tek olay ('Comi feijoada ontem'). Imperfeito = alışkanlık/süreç ('Comia todo sábado')."
    }
  ],
  speaking: [
    { q: "Favori Brezilya yemeğiniz nedir?", a: "Meu prato favorito é [yemek]. Adoro [açıklama]." },
    { q: "'Çocukken çikolatayı çok severdim' nasıl?", a: "Quando era criança, adorava chocolate." },
    { q: "Bir yemek tarifi anlatın (basit).", a: "Primeiro, misture o feijão. Depois, adicione água e cozinhe." },
    { q: "'Bu çok tuzlu' nasıl?", a: "Está muito salgado!" },
    { q: "'Açaí granola ile harika gider' nasıl?", a: "Açaí combina muito bem com granola!" }
  ],
  dialogues: [
    {
      title: "Akşam Yemeği Hazırlığı",
      lines: [
        { speaker: "Mãe", text: "Filha, você vai aprender a fazer feijoada hoje!", tr: "Kızım, bugün feijoada yapmayı öğreneceksin!" },
        { speaker: "Filha", text: "Que emoção! Sempre adorei a sua feijoada.", tr: "Ne heyecan! Her zaman sizin feijoada'nıza bayıldım." },
        { speaker: "Mãe", text: "Primeiro, deixa o feijão preto de molho desde ontem.", tr: "Önce siyah fasulyeyi dünden beri ıslatıyoruz." },
        { speaker: "Filha", text: "Já fiz isso! E as carnes, como ficam?", tr: "Bunu yaptım! Etler nasıl pişiyor?" },
        { speaker: "Mãe", text: "Refoga a linguiça e o bacon primeiro. Depois junta tudo no feijão.", tr: "Önce sucuğu ve baconı kavur. Sonra hepsini fasulyeye ekle." },
        { speaker: "Filha", text: "Entendi! E a farofa, faço também?", tr: "Anladım! Farofayı da yapacak mıyım?" }
      ]
    }
  ],
  listening: {
    text: "A culinária brasileira é uma das mais diversas do mundo, refletindo as influências indígenas, africanas, europeias e asiáticas. A feijoada, considerada o prato nacional, surgiu das cozinhas dos escravizados que aproveitavam as partes menos nobres do porco. O churrasco gaúcho do sul é famoso mundialmente. A Bahia tem a culinária mais marcante, com pratos como moqueca, vatapá e acarajé — todos com influências africanas fortíssimas.",
    questions: [
      { q: "Brezilya mutfağı hangi kültürleri yansıtıyor?", a: "Yerli, Afrikalı, Avrupalı ve Asyalı etkiler" },
      { q: "Feijoada nereden geldi?", a: "Köle mutfaklarından, domuzun daha az değerli parçalarından" },
      { q: "Bahia mutfağının özelliği ne?", a: "Çok güçlü Afrikalı etkiler; moqueca, vatapá, acarajé" }
    ]
  }
};
LESSONS[29] = L29;
