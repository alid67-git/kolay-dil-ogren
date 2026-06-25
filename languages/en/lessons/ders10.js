// ders10.js — English Lesson 10: Work & Business
const L10 = {
  words: [
    {id:'w1', en:'job / work', ro:'/dʒɒb / wɜːrk/', tr:'iş',
     examples:[{en:'What do you do for work?', ro:'/wɒt duː juː duː fər wɜːrk/', tr:'Ne iş yapıyorsunuz?',
       bd:[{ro:'What do you do',tr:'Ne yapıyorsunuz',role:'question'},{ro:'for work',tr:'iş olarak',role:'phrase'}]}]},
    {id:'w2', en:'company / firm', ro:'/ˈkʌmpəni / fɜːrm/', tr:'şirket / firma'},
    {id:'w3', en:'office', ro:'/ˈɒfɪs/', tr:'ofis'},
    {id:'w4', en:'meeting', ro:'/ˈmiːtɪŋ/', tr:'toplantı',
     examples:[{en:'I have a meeting at three o\'clock.', ro:'/aɪ hæv ə ˈmiːtɪŋ æt θriː əˈklɒk/', tr:'Saat üçte toplantım var.',
       bd:[{ro:'I have a meeting',tr:'toplantım var',role:'noun'},{ro:'at three o\'clock',tr:'saat üçte',role:'time'}]}]},
    {id:'w5', en:'colleague', ro:'/ˈkɒliːɡ/', tr:'iş arkadaşı'},
    {id:'w6', en:'manager / boss', ro:'/ˈmænɪdʒər / bɒs/', tr:'müdür / patron'},
    {id:'w7', en:'employee', ro:'/ɪmˈplɔɪiː/', tr:'çalışan'},
    {id:'w8', en:'deadline', ro:'/ˈdɛdlaɪn/', tr:'son teslim tarihi',
     examples:[{en:'The deadline is this Friday.', ro:'/ðə ˈdɛdlaɪn ɪz ðɪs ˈfraɪdeɪ/', tr:'Son teslim tarihi bu Cuma.',
       bd:[{ro:'The deadline',tr:'Son teslim tarihi',role:'noun'},{ro:'is this Friday',tr:'bu Cuma',role:'time'}]}]},
    {id:'w9', en:'project', ro:'/ˈprɒdʒɛkt/', tr:'proje'},
    {id:'w10', en:'report', ro:'/rɪˈpɔːrt/', tr:'rapor'},
    {id:'w11', en:'email', ro:'/ˈiːmeɪl/', tr:'e-posta'},
    {id:'w12', en:'presentation', ro:'/ˌprɛzənˈteɪʃən/', tr:'sunum'},
    {id:'w13', en:'salary / wage', ro:'/ˈsæləri / weɪdʒ/', tr:'maaş'},
    {id:'w14', en:'apply for a job', ro:'/əˈplaɪ fər ə dʒɒb/', tr:'iş başvurusu yapmak',
     examples:[{en:'I am applying for a marketing position.', ro:'/aɪ æm əˈplaɪɪŋ fər ə ˈmɑːrkɪtɪŋ pəˈzɪʃən/', tr:'Pazarlama pozisyonuna başvuruyorum.',
       bd:[{ro:'I am applying for',tr:'Başvuruyorum',role:'verb'},{ro:'a marketing position',tr:'pazarlama pozisyonu',role:'noun'}]}]},
    {id:'w15', en:'interview', ro:'/ˈɪntərvjuː/', tr:'iş görüşmesi / mülakat'},
    {id:'w16', en:'CV / resume', ro:'/ˌsiːˈviː / ˈrɛzjʊmeɪ/', tr:'özgeçmiş'},
    {id:'w17', en:'promotion', ro:'/prəˈmoʊʃən/', tr:'terfi'},
    {id:'w18', en:'overtime', ro:'/ˈoʊvərtaɪm/', tr:'fazla mesai'},
    {id:'w19', en:'work from home', ro:'/wɜːrk frɒm hoʊm/', tr:'evden çalışmak'},
    {id:'w20', en:"I'll send you an email.", ro:'/aɪl sɛnd juː ən ˈiːmeɪl/', tr:'Size bir e-posta göndereceğim.',
     examples:[{en:"I'll send you the report by email.", ro:'/aɪl sɛnd juː ðə rɪˈpɔːrt baɪ ˈiːmeɪl/', tr:'Size raporu e-posta ile göndereceğim.',
       bd:[{ro:"I'll send",tr:'Göndereceğim',role:'verb'},{ro:'you the report',tr:'size raporu',role:'object'},{ro:'by email',tr:'e-posta ile',role:'method'}]}]}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'Gelecek Zaman — will / going to', title_en:'Future Tense',
     explanation:'"will" anlık karar veya tahmin; "going to" önceden planlanan şeyler için kullanılır.',
     table:[
       {pronoun:'will (karar)', form:"I'll + verb", example:"I'll call you tomorrow.", tr:'Yarın seni ararım.'},
       {pronoun:'going to (plan)', form:'am/is/are going to', example:'I am going to send the report.', tr:'Raporu göndereceğim.'},
       {pronoun:'Olumsuz', form:"won't / not going to", example:"I won't be late.", tr:'Geç kalmayacağım.'},
       {pronoun:'Soru', form:'Will...? / Are...going to?', example:'Will you be at the meeting?', tr:'Toplantıda olacak mısın?'}
     ],
     note:'"Can you...?" ve "Could you...?" iş ortamında sık kullanılan kibar istek kalıplarıdır'}
  ],

  speaking: [
    {id:'sp1', en:'I work as a software engineer at a tech company.', ro:'/aɪ wɜːrk æz ə ˈsɒftweər ˌɛndʒɪˈnɪər æt ə tɛk ˈkʌmpəni/', tr:'Bir teknoloji şirketinde yazılım mühendisi olarak çalışıyorum.',
     tip:'İşinizi tanıtma.', prompt:'Mesleğinizi tanıtın'},
    {id:'sp2', en:'Could you send me the report by Friday, please?', ro:'/kʊd juː sɛnd miː ðə rɪˈpɔːrt baɪ ˈfraɪdeɪ pliːz/', tr:'Raporu Cuma\'ya kadar gönderebilir misiniz, lütfen?',
     tip:'Kibar istek.', prompt:'Kibar bir istek yapın'},
    {id:'sp3', en:"I'm afraid I can't make the meeting. Can we reschedule?", ro:'/aɪm əˈfreɪd aɪ kɑːnt meɪk ðə ˈmiːtɪŋ kæn wiː ˌriːˈʃɛdjuːl/', tr:'Toplantıya katılamayacağım. Erteleyebilir miyiz?',
     tip:'Toplantı erteleme.', prompt:'Toplantı erteleyin'}
  ],

  dialogues: [
    {id:'d1', title:'İş Görüşmesi', title_en:'Job Interview',
     lines:[
       {speaker:'A', gender:'f', en:'Good morning! Please sit down. Tell me about yourself.', ro:'/ɡʊd ˈmɔːrnɪŋ pliːz sɪt daʊn tɛl miː əˈbaʊt jɔːrsɛlf/', tr:'Günaydın! Lütfen oturun. Kendinizden bahsedin.'},
       {speaker:'B', gender:'m', en:"Good morning. I'm Ali. I have five years' experience in marketing.", ro:'/ɡʊd ˈmɔːrnɪŋ aɪm æli aɪ hæv faɪv jɪərz ɪkˈspɪərɪəns ɪn ˈmɑːrkɪtɪŋ/', tr:'Günaydın. Ben Ali. Pazarlamada beş yıl deneyimim var.'},
       {speaker:'A', gender:'f', en:'Why do you want to work for our company?', ro:'/waɪ duː juː wɒnt tə wɜːrk fər aʊər ˈkʌmpəni/', tr:'Neden şirketimizde çalışmak istiyorsunuz?'},
       {speaker:'B', gender:'m', en:"Your company has an excellent reputation. I believe I can contribute to your team's success.", ro:'/jɔːr ˈkʌmpəni hæz ən ˈɛksələnt ˌrɛpjʊˈteɪʃən aɪ bɪˈliːv aɪ kæn kənˈtrɪbjuːt tə jɔːr tiːmz səkˈsɛs/', tr:'Şirketinizin mükemmel bir itibarı var. Ekibinizin başarısına katkıda bulunabileceğime inanıyorum.'},
       {speaker:'A', gender:'f', en:'What is your greatest strength?', ro:'/wɒt ɪz jɔːr ˈɡreɪtɪst strɛŋθ/', tr:'En büyük güçlü yönünüz nedir?'},
       {speaker:'B', gender:'m', en:'I am very organised and I work well under pressure.', ro:'/aɪ æm ˈvɛri ˈɔːrɡənaɪzd ænd aɪ wɜːrk wɛl ˈʌndər ˈprɛʃər/', tr:'Çok düzenli biriyim ve baskı altında iyi çalışırım.'},
       {speaker:'A', gender:'f', en:'Excellent. We will contact you by Friday.', ro:'/ˈɛksələnt wiː wɪl ˈkɒntækt juː baɪ ˈfraɪdeɪ/', tr:'Mükemmel. Cuma\'ya kadar sizinle iletişime geçeceğiz.'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:"This is a reminder about tomorrow's all-staff meeting at ten am in the main conference room. Please bring your Q3 reports. The meeting will last approximately one hour. Lunch will be provided afterwards.",
     tr:'Yarın saat 10:00\'da ana toplantı odasında tüm personel toplantısı hatırlatması. Lütfen 3. çeyrek raporlarınızı getirin. Toplantı yaklaşık bir saat sürecek. Ardından öğle yemeği ikram edilecek.',
     questions:[
       {q:'What time is the meeting?', opts:['9am','10am','11am','12pm'], answer:1, tr:'Toplantı saat kaçta?'},
       {q:'What should staff bring?', opts:['ID cards','Q3 reports','laptops','contracts'], answer:1, tr:'Personel ne getirmeli?'},
       {q:'How long is the meeting?', opts:['30 min','45 min','1 hour','2 hours'], answer:2, tr:'Toplantı ne kadar sürecek?'}
     ]}
  ]
};
LESSONS[10] = L10;
