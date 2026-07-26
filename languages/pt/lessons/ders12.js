var L12 = {
  words: [
    {en:"health", tr:"sağlık", pron:"ˈsɐudɨ", bd:"saúde"},
    {en:"doctor", tr:"doktor", pron:"ˈmɛdiku", bd:"médico"},
    {en:"hospital", tr:"hastane", pron:"uʃˈpitɐl", bd:"hospital"},
    {en:"health centre", tr:"sağlık merkezi", pron:"ˈsɛ̃tɾu dɨ ˈsɐudɨ", bd:"centro de saúde"},
    {en:"appointment", tr:"randevu", pron:"kõˈsultɐ", bd:"consulta"},
    {en:"prescription", tr:"reçete", pron:"ɾɨˈsɐɪ̯tɐ", bd:"receita médica"},
    {en:"medicine", tr:"ilaç", pron:"mɨdiˈkɐ̃mẽtu", bd:"medicamento"},
    {en:"tablet/pill", tr:"tablet/hap", pron:"kõ̃ˈpɾimidu", bd:"comprimido"},
    {en:"fever", tr:"ateş", pron:"ˈfɛbɾɨ", bd:"febre"},
    {en:"cold", tr:"nezle/soğuk algınlığı", pron:"kõʃtiˈpɐsɐ̃u̯", bd:"constipação"},
    {en:"flu", tr:"grip", pron:"ˈɡɾipɨ", bd:"gripe"},
    {en:"allergy", tr:"alerji", pron:"ɐˈlɛɾʒiɐ", bd:"alergia"},
    {en:"nurse", tr:"hemşire", pron:"ɨ̃feɾˈmɐɪ̯ɾu", bd:"enfermeiro/a"},
    {en:"emergency", tr:"acil durum", pron:"uɾʒẽˈsiɐ", bd:"urgência"},
    {en:"ambulance", tr:"ambulans", pron:"ɐ̃buˈlɐ̃sɐ", bd:"ambulância"},
    {en:"blood test", tr:"kan testi", pron:"ɐnɐˈlizɨʃ ɐu ˈsɐ̃ɡɨ", bd:"análises ao sangue"},
    {en:"x-ray", tr:"röntgen", pron:"ɾɐˈdjuɡɾɐfiɐ", bd:"radiografia"},
    {en:"insurance card", tr:"sağlık kartı", pron:"ˈkɐɾtɐ dɨ ˈuteɲtɨ", bd:"cartão de utente"},
    {en:"waiting room", tr:"bekleme odası", pron:"ˈsɐlɐ dɨ ɨʃˈpɛɾɐ", bd:"sala de espera"},
    {en:"national health service", tr:"ulusal sağlık sistemi", pron:"ˈsɛ̃s", bd:"SNS"}
  ],
  grammar: [
    {
      title: "SNS — Serviço Nacional de Saúde",
      explanation: "Portekiz'de sağlık sistemi SNS (Serviço Nacional de Saúde) adıyla bilinir. Devlet hastaneleri (hospitais públicos) ve sağlık merkezleri (centros de saúde) SNS bünyesindedir. Tüm Portekiz vatandaşları cartão de utente (hasta kimlik kartı) ile hizmet alır.",
      table: [
        {pronoun:"Centro de Saúde", form:"Aile hekimliği merkezi", example:"Tenho consulta no centro de saúde.", tr:"Sağlık merkezinde randevum var."},
        {pronoun:"Hospital público", form:"Devlet hastanesi", example:"Fui à urgência do hospital.", tr:"Hastanenin acil servisine gittim."},
        {pronoun:"Cartão de utente", form:"Hasta kimlik kartı", example:"Traga o cartão de utente.", tr:"Hasta kimlik kartınızı getirin."},
        {pronoun:"Médico de família", form:"Aile hekimi", example:"O meu médico de família é simpático.", tr:"Aile hekimim çok iyi biri."},
        {pronoun:"Urgência", form:"Acil servis", example:"Ligue para o 112 em emergências.", tr:"Acil durumlarda 112'yi arayın."},
        {pronoun:"Número de emergência", form:"112", example:"O número de emergência é o 112.", tr:"Acil servis numarası 112'dir."}
      ],
      note: "Portekiz'de acil durum numarası 112'dir (Brezilya'daki 190/192 değil). SNS ile Brezilya'daki SUS (Sistema Único de Saúde) farklı sistemlerdir."
    },
    {
      title: "Estar com — Sağlık Durumu İfade Etmek",
      explanation: "'Estar com' (bir şeye sahip olmak / bir durumda olmak) yapısı EP'de sağlık durumlarını belirtmek için kullanılır. 'Ter' ile de kullanılabilir.",
      table: [
        {pronoun:"estar com febre", form:"ateşi olmak", example:"Estou com muita febre desde ontem.", tr:"Dünden beri çok ateşim var."},
        {pronoun:"estar com gripe", form:"gribi olmak", example:"Estás com gripe? Fica em casa!", tr:"Gribin mi var? Evde kal!"},
        {pronoun:"estar constipado/a", form:"nezleli olmak", example:"Estou constipada e tenho tosse.", tr:"Nezlem var ve öksürüyorum."},
        {pronoun:"ter alergia a", form:"alerjisi olmak", example:"Tenho alergia ao pólen.", tr:"Polene alerjim var."},
        {pronoun:"sentir-se mal/bem", form:"iyi/kötü hissetmek", example:"Não me sinto bem hoje.", tr:"Bugün kendimi iyi hissetmiyorum."},
        {pronoun:"marcar consulta", form:"randevu almak", example:"Preciso de marcar uma consulta.", tr:"Randevu almam gerekiyor."}
      ],
      note: "EP'de 'estar constipado/a' = 'nezleli olmak'. BP'de 'constipado' = kabız. Aynı kelime, farklı anlam!"
    },
    {
      title: "Verbos de Saúde — Sağlık Fiilleri",
      explanation: "Sağlık bağlamında kullanılan temel fiiller ve kalıplar. 'Precisar de' (ihtiyacı olmak), 'receitar' (reçete yazmak), 'examinar' (muayene etmek).",
      table: [
        {pronoun:"consultar", form:"muayeneye gitmek", example:"Consultei o médico esta semana.", tr:"Bu hafta doktora gittim."},
        {pronoun:"receitar", form:"reçete yazmak", example:"O médico receitou-me antibióticos.", tr:"Doktor bana antibiyotik yazdı."},
        {pronoun:"tomar", form:"ilaç almak", example:"Toma os comprimidos às refeições.", tr:"Tabletleri yemeklerle birlikte al."},
        {pronoun:"melhorar", form:"iyileşmek", example:"Espero melhorar em breve.", tr:"Yakında iyileşmeyi umuyorum."},
        {pronoun:"descansar", form:"dinlenmek", example:"Precisa de descansar muito.", tr:"Çok dinlenmesi gerekiyor."},
        {pronoun:"internar", form:"hastaneye yatırmak", example:"Foi internado no hospital.", tr:"Hastaneye yatırıldı."}
      ],
      note: "EP'de 'Vá ao médico' (Doktora gidin — você için) veya 'Vai ao médico' (Doktora git — tu için) şeklinde emir kullanılır."
    }
  ],
  speaking: [
    {q:"Tens cartão de utente do SNS?", a:"Sim, tenho. Fica no centro de saúde da minha área."},
    {q:"O que fazes quando estás constipado?", a:"Fico em casa, bebo chá quente e tomo um medicamento para a febre."},
    {q:"Qual é o número de emergência em Portugal?", a:"O número de emergência em Portugal é o 112."},
    {q:"O teu médico de família fica perto de casa?", a:"Sim, o centro de saúde fica a dez minutos a pé."},
    {q:"Precisas de receita para comprar antibióticos?", a:"Sim, os antibióticos só se vendem com receita médica."}
  ],
  dialogues: [
    {
      title: "Na Consulta Médica",
      lines: [
        {speaker:"Médico", text:"Bom dia. Em que posso ajudá-lo?"},
        {speaker:"Paciente", text:"Bom dia, doutor. Dói-me muito a garganta e tenho febre há dois dias."},
        {speaker:"Médico", text:"Vou examiná-lo. Abra a boca, por favor. Sim, está inflamado."},
        {speaker:"Paciente", text:"É grave? Tenho alergia à penicilina."},
        {speaker:"Médico", text:"Não se preocupe. Vou receitar-lhe um antibiótico que não tem penicilina."},
        {speaker:"Paciente", text:"Obrigado, doutor. Quantos dias de repouso preciso?"}
      ]
    }
  ],
  listening: [{
    text: "O Serviço Nacional de Saúde português foi criado em 1979 e garante acesso universal à saúde. Os cidadãos registam-se num centro de saúde da sua área e têm um médico de família atribuído. Para situações urgentes, existe a urgência hospitalar ou o número 112 para emergências. Nos últimos anos, o SNS digital permite marcar consultas e ver resultados de análises online através do Portal do SNS.",
    questions: [
      {q:"Quando foi criado o SNS?", a:"Em 1979."},
      {q:"Qual é o número de emergência?", a:"112."},
      {q:"O que permite fazer o SNS digital?", a:"Marcar consultas e ver resultados de análises online."}
    ]
  }]
};
LESSONS[12] = L12;
