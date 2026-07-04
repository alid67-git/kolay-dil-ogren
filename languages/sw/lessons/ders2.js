// ders2.js — Swahili Lesson 2: Numbers & Money
const L2 = {
  words: [
    {id:'w1', sw:'moja', ro:'mo-ja', tr:'Bir (1)',
     tip:'Temel sayı.',
     ctx:'Sayma.',
     examples:[{
       sw:'Moja tu.', ro:'mo-ja tu', tr:'Sadece bir.',
       bd:[{ro:'moja',tr:'bir',role:'sayı',note:'1'}]
     }]
    },
    {id:'w2', sw:'mbili', ro:'mbi-li', tr:'İki (2)',
     tip:'Çift.',
     ctx:'Sayma.',
     examples:[{
       sw:'Mbili vitabu.', ro:'mbi-li vi-ta-bu', tr:'İki kitap.',
       bd:[{ro:'mbili',tr:'iki',role:'sayı',note:'2'}]
     }]
    },
    {id:'w3', sw:'tatu', ro:'ta-tu', tr:'Üç (3)',
     tip:'Üçlü.',
     ctx:'Sayma.',
     examples:[{
       sw:'Watoto watatu.', ro:'wa-to-to wa-ta-tu', tr:'Üç çocuk.',
       bd:[{ro:'tatu',tr:'üç',role:'sayı',note:'3'}]
     }]
    },
    {id:'w4', sw:'nne', ro:'nne', tr:'Dört (4)',
     tip:'Dörtlü.',
     ctx:'Sayma.',
     examples:[{
       sw:'Siku nne.', ro:'si-ku nne', tr:'Dört gün.',
       bd:[{ro:'nne',tr:'dört',role:'sayı',note:'4'}]
     }]
    },
    {id:'w5', sw:'tano', ro:'ta-no', tr:'Beş (5)',
     tip:'Beşli.',
     ctx:'Sayma.',
     examples:[{
       sw:'Shilingi tano.', ro:'shi-lin-gi ta-no', tr:'Beş şilin.',
       bd:[{ro:'tano',tr:'beş',role:'sayı',note:'5'}]
     }]
    },
    {id:'w6', sw:'sita', ro:'si-ta', tr:'Altı (6)',
     tip:'',
     ctx:'Sayma.',
     examples:[{
       sw:'Saa sita.', ro:'saa si-ta', tr:'Altı saat.',
       bd:[{ro:'sita',tr:'altı',role:'sayı',note:'6'}]
     }]
    },
    {id:'w7', sw:'saba', ro:'sa-ba', tr:'Yedi (7)',
     tip:'',
     ctx:'Sayma.',
     examples:[{
       sw:'Siku saba.', ro:'si-ku sa-ba', tr:'Yedi gün.',
       bd:[{ro:'saba',tr:'yedi',role:'sayı',note:'7'}]
     }]
    },
    {id:'w8', sw:'nane', ro:'na-ne', tr:'Sekiz (8)',
     tip:'',
     ctx:'Sayma.',
     examples:[{
       sw:'Watu wanane.', ro:'wa-tu wa-na-ne', tr:'Sekiz kişi.',
       bd:[{ro:'nane',tr:'sekiz',role:'sayı',note:'8'}]
     }]
    },
    {id:'w9', sw:'tisa', ro:'ti-sa', tr:'Dokuz (9)',
     tip:'',
     ctx:'Sayma.',
     examples:[{
       sw:'Dakika tisa.', ro:'da-ki-na ti-sa', tr:'Dokuz dakika.',
       bd:[{ro:'tisa',tr:'dokuz',role:'sayı',note:'9'}]
     }]
    },
    {id:'w10', sw:'kumi', ro:'ku-mi', tr:'On (10)',
     tip:'Onluk sistem temeli.',
     ctx:'Sayma.',
     examples:[{
       sw:'Shilingi kumi.', ro:'shi-lin-gi ku-mi', tr:'On şilin.',
       bd:[{ro:'kumi',tr:'on',role:'sayı',note:'10'}]
     }]
    },
    {id:'w11', sw:'ishirini', ro:'i-shi-ri-ni', tr:'Yirmi (20)',
     tip:'Onluk kat.',
     ctx:'Büyük sayılar.',
     examples:[{
       sw:'Ishirini na moja.', ro:'i-shi-ri-ni na mo-ja', tr:'Yirmi bir.',
       bd:[{ro:'ishirini na moja',tr:'yirmi bir',role:'sayı',note:'21'}]
     }]
    },
    {id:'w12', sw:'shilingi', ro:'shi-lin-gi', tr:'Şilin (para birimi)',
     tip:'Tanzanya para birimi.',
     ctx:'Alışveriş.',
     examples:[{
       sw:'Bei ni shilingi mia.', ro:'bei ni shi-lin-gi mi-a', tr:'Fiyat yüz şilin.',
       bd:[{ro:'shilingi',tr:'şilin',role:'para',note:'TZS'}]
     }]
    }
  ],
  grammar: [
    {id:'g1', title:'Svahili Sayıları', title_en:'Swahili Numbers',
     explanation:'1–10 temel sayılardır. 11+ için onluk + na + birlik: ishirini na moja = 21.',
     table:[
       {pronoun:'1–5', form:'moja, mbili, tatu, nne, tano', example:'Shilingi tano', tr:'Beş şilin'},
       {pronoun:'6–10', form:'sita, saba, nane, tisa, kumi', example:'Watu kumi', tr:'On kişi'},
       {pronoun:'21', form:'ishirini na moja', example:'Siku ishirini na moja', tr:'Yirmi bir gün'}
     ],
     note:'Sayılar isimlerle uyumlu önek alır (mfano: vitabu viwili = iki kitap).'
    }
  ],
  speaking: [
    {id:'sp1', sw:'Moja, mbili, tatu...', tr:'Bir, iki, üç...', prompt:'1-2-3 say'},
    {id:'sp2', sw:'Shilingi kumi, tafadhali.', tr:'On şilin lütfen.', prompt:'Para miktarı söyle'}
  ]
};
LESSONS[2] = L2;
