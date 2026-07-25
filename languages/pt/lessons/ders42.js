const L42 = {
  title: "Mídia e Notícias",
  words: [
    { en: "a notícia", tr: "haber", pron: "a notísya", bd: "dişil; dar uma notícia = haber vermek" },
    { en: "o jornal", tr: "gazete", pron: "u jornaw", bd: "eril; jornal impresso = basılı gazete" },
    { en: "a revista", tr: "dergi", pron: "a revishta", bd: "dişil; revista semanal = haftalık dergi" },
    { en: "o telejornal", tr: "televizyon haberleri", pron: "u telèjornaw", bd: "eril; assistir ao telejornal" },
    { en: "a manchete", tr: "manşet", pron: "a mãshéti", bd: "dişil; manchete principal = ana manşet" },
    { en: "o repórter / a repórter", tr: "muhabir", pron: "u repórtér", bd: "tek form; reportagem = haber/röportaj" },
    { en: "a entrevista", tr: "röportaj / mülakat", pron: "a ẽtrevishta", bd: "dişil; conceder entrevista = röportaj vermek" },
    { en: "o editorial", tr: "editöryal / baş yazi", pron: "u editoryaw", bd: "eril; artigo de opinião da denir" },
    { en: "a cobertura", tr: "haber kapsamı", pron: "a kobértura", bd: "dişil; cobertura ao vivo = canlı yayın" },
    { en: "ao vivo", tr: "canlı yayın", pron: "ao vivu", bd: "değişmez ifade; transmissão ao vivo" },
    { en: "a censura", tr: "sansür", pron: "a sẽzura", bd: "dişil; censurar = sansürlemek" },
    { en: "a imparcialidade", tr: "tarafsızlık", pron: "a ĩparsyalidadshi", bd: "dişil; mídia imparcial = tarafsız medya" },
    { en: "o veículo de comunicação", tr: "iletişim aracı", pron: "u veyikulu dshi kõmunikasão", bd: "eril; imprensa = basın" },
    { en: "publicar", tr: "yayınlamak / yayımlamak", pron: "publikár", bd: "düzenli -AR; publicação = yayın" },
    { en: "noticiar", tr: "haber yapmak", pron: "notisyár", bd: "düzenli -AR; noticiar um fato = bir olayı habere taşımak" },
    { en: "investigar", tr: "soruşturmak", pron: "ĩvestigár", bd: "düzenli -AR; jornalismo investigativo = araştırmacı gazetecilik" },
    { en: "verificar", tr: "doğrulamak", pron: "verifikár", bd: "düzenli -AR; verificação de fatos = gerçek kontrolü" },
    { en: "A Globo noticiou que...", tr: "Globo şunu haberleştirdi ki...", pron: "a globu notisyu ki", bd: "Rede Globo = BR'nin en büyük TV kanalı" },
    { en: "Segundo fontes confiáveis...", tr: "Güvenilir kaynaklara göre...", pron: "segũdu fõtshi kõfjáveish", bd: "haber dili" },
    { en: "Ainda não foi confirmado.", tr: "Henüz doğrulanmadı.", pron: "ãĩnda não foy kõfirmadu", bd: "şüpheli haber için" }
  ],
  grammar: [
    {
      title: "Haber Dili — Geniş Zaman ve Edilgen Yapı",
      explanation: "Haber metinlerinde özellikle üç yapı yaygındır: Edilgen (voz passiva): 'O suspeito foi preso' (Şüpheli tutuklandı). Alıntı yapısı: 'Segundo o ministro...' (Bakana göre...). Tarihsel geniş zaman: 'O presidente anuncia...' (Cumhurbaşkanı açıklıyor — haber geniş zamanı).",
      table: [
        { pronoun: "Haber geniş zaman", form: "Şimdiki eylem", example: "O governo anuncia novas medidas.", tr: "Hükümet yeni tedbirler açıklıyor." },
        { pronoun: "Edilgen haber", form: "SER + particípio", example: "Três pessoas foram feridas.", tr: "Üç kişi yaralandı." },
        { pronoun: "Alıntı", form: "Segundo + kaynak", example: "Segundo o porta-voz,", tr: "Sözcüye göre," },
        { pronoun: "Dolaylı alıntı", form: "Afirmou que + ind.", example: "O ministro afirmou que vai agir.", tr: "Bakan harekete geçeceğini açıkladı." },
        { pronoun: "Soru haber", form: "Negação + ?", example: "O governo sabia do problema?", tr: "Hükümet sorunu biliyor muydu?" },
        { pronoun: "Gelecek haber", form: "Vai + inf.", example: "A decisão vai ser anunciada.", tr: "Karar açıklanacak." }
      ],
      note: "Haber Portekizcesinde 'conforme' (göre), 'de acordo com' (göre), 'segundo' (göre) — hepsi atıf için. 'Fontes afirmam que' = Kaynaklar belirtiyor ki."
    },
    {
      title: "Dolaylı Anlatım — Discurso Indireto",
      explanation: "Birinin sözlerini aktarırken discurso indireto (dolaylı anlatım) kullanılır. Zaman değişimi: diz → disse (dedi), vai → iria (gidecekti), é → era (idi). 'Ele disse que estava cansado' = O yorgun olduğunu söyledi. Soru aktarımında 'se' kullanılır.",
      table: [
        { pronoun: "Diz que (doğrudan)", form: "Söylüyor ki", example: "Ela diz: 'Estou feliz.'", tr: "O 'Mutluyum' diyor." },
        { pronoun: "Disse que (dolaylı)", form: "Söyledi ki", example: "Ela disse que estava feliz.", tr: "Mutlu olduğunu söyledi." },
        { pronoun: "Perguntou se", form: "Sordu mu?", example: "Perguntou se você viria.", tr: "Gelip gelmeyeceğinizi sordu." },
        { pronoun: "Afirmou que", form: "İddia etti ki", example: "O político afirmou que era inocente.", tr: "Politikacı masum olduğunu iddia etti." },
        { pronoun: "Negou que", form: "İnkar etti ki", example: "Ela negou que tivesse faltado.", tr: "Kaçırdığını inkar etti." },
        { pronoun: "Prometeu que", form: "Vaat etti ki", example: "Prometeu que cumpriria o prazo.", tr: "Süreye uyacağını vaat etti." }
      ],
      note: "Zaman uyumu (concordância dos tempos): Presente → Imperfeito. Pretérito → Mais-que-perfeito. Futuro → Condicional. Haber aktarımında kritiktir."
    },
    {
      title: "Brezilya Medyası — Büyük Kuruluşlar",
      explanation: "Brezilya'da medya ortamı: Rede Globo (TV, en büyük), Folha de S.Paulo ve O Estado de S. Paulo (gazeteler), Veja ve Piauí (dergiler), Rádio CBN (haber radyosu), Agência Brasil (devlet haber ajansı). Medya çoğulculuğu önemli bir tartışma konusudur.",
      table: [
        { pronoun: "Rede Globo", form: "En büyük TV", example: "Globo tem audiência nacional.", tr: "Globo ulusal izleyici kitlesine sahip." },
        { pronoun: "Folha de S.Paulo", form: "Büyük gazete", example: "A Folha é o jornal mais lido.", tr: "Folha en çok okunan gazete." },
        { pronoun: "Agência Brasil", form: "Devlet ajansı", example: "A Agência Brasil é pública.", tr: "Agência Brasil devlet kuruluşudur." },
        { pronoun: "Portal R7", form: "Record TV dijital", example: "R7 é um dos maiores portais.", tr: "R7 en büyük portallardan biri." },
        { pronoun: "Rádio CBN", form: "Haber radyosu", example: "CBN cobre 24 horas de notícias.", tr: "CBN 24 saat haber yayınlıyor." },
        { pronoun: "Piauí", form: "Araştırmacı dergi", example: "Piauí faz jornalismo investigativo.", tr: "Piauí araştırmacı gazetecilik yapıyor." }
      ],
      note: "Brezilya'da medya sahipliği tartışmalıdır. Rede Globo, Marinho ailesi tarafından kurulan ve Brezilya medyasına hakim olan bir kuruluştur."
    }
  ],
  speaking: [
    { q: "Bir haberi kısaca aktarın.", a: "Segundo o jornal, o governo anunciou novas medidas econômicas. Ainda não foi confirmado o impacto." },
    { q: "'Globo bu haberi yayınladı' nasıl?", a: "A Globo noticiou que [haber]. A cobertura foi ao vivo." },
    { q: "Sahte haberleri nasıl kontrol edersiniz?", a: "Sempre verifico a fonte antes de compartilhar. Busco confirmar em vários veículos confiáveis." },
    { q: "Birisinin söylediklerini dolaylı anlatın.", a: "Ele disse que estava preocupado com a situação e que ia agir imediatamente." },
    { q: "'Tarafsız medya çok önemli' nasıl?", a: "A imparcialidade na mídia é fundamental para a democracia. Sem ela, a desinformação aumenta." }
  ],
  dialogues: [
    {
      title: "Haber Tartışması",
      lines: [
        { speaker: "Felipe", text: "Viu a manchete do jornal hoje? Sobre a reforma tributária?", tr: "Bugünkü gazete manşetini gördünüz mü? Vergi reformu hakkında?" },
        { speaker: "Julia", text: "Vi! Mas ainda não foi confirmado. Ouvi versões diferentes em vários veículos.", tr: "Gördüm! Ama henüz doğrulanmadı. Farklı kaynaklarda farklı versiyonlar duydum." },
        { speaker: "Felipe", text: "Exato! Por isso verifico sempre em fontes diversas. A Globo noticiou diferente da Folha.", tr: "Aynen! Bu yüzden her zaman farklı kaynaklarda kontrol ediyorum. Globo, Folha'dan farklı haberleştirdi." },
        { speaker: "Julia", text: "Isso é complicado. Como saber qual é a versão mais próxima da verdade?", tr: "Bu karmaşık. Hangi versiyonun gerçeğe daha yakın olduğunu nasıl anlarsınız?" },
        { speaker: "Felipe", text: "Boa pergunta. Prefiro veículos com jornalismo investigativo. Como a Piauí.", tr: "Güzel soru. Araştırmacı gazetecilik yapan kuruluşları tercih ederim. Piauí gibi." },
        { speaker: "Julia", text: "Concordo! E sempre checar agências internacionais também. Reuters, AFP.", tr: "Katılıyorum! Uluslararası ajansları da kontrol etmek lazım. Reuters, AFP." }
      ]
    }
  ],
  listening: {
    text: "O Brasil tem uma das maiores indústrias midiáticas da América Latina. A Rede Globo é a maior emissora do hemisfério sul, atingindo milhões de lares. Com a chegada da internet, o jornalismo digital cresceu exponencialmente. Portais como UOL, G1 e R7 dominam o acesso online. Porém, o fenômeno das fake news se tornou um desafio enorme para a democracia brasileira, especialmente durante as eleições. O Superior Tribunal Eleitoral criou mecanismos para combater a desinformação e garantir eleições mais transparentes.",
    questions: [
      { q: "Rede Globo'nun önemi ne?", a: "Güney yarıkürenin en büyük yayıncısı, milyonlarca hanehalkına ulaşıyor" },
      { q: "Brezilya'daki en büyük dijital haber portalları hangileri?", a: "UOL, G1 ve R7" },
      { q: "Yüksek Seçim Mahkemesi ne yaptı?", a: "Dezenformasyonla mücadele mekanizmaları oluşturdu" }
    ]
  }
};
LESSONS[42] = L42;
