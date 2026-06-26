// ders2.js — Arabic Lesson 2: أدوات التعريف (beginner)
const L2 = {
  words:[
    {
      id:'w1',
      en:'الكتاب',
      ro:'al-kitāb',
      tr:'kitap (belirli)'
    },
    {
      id:'w2',
      en:'البيت',
      ro:'al-bayt',
      tr:'ev (belirli)'
    },
    {
      id:'w3',
      en:'المدرسة',
      ro:'al-madrasa',
      tr:'okul'
    },
    {
      id:'w4',
      en:'القمر',
      ro:'al-qamar',
      tr:'ay'
    },
    {
      id:'w5',
      en:'الشمس',
      ro:'ash-shams',
      tr:'güneş'
    },
    {
      id:'w6',
      en:'الرجل',
      ro:'ar-rajul',
      tr:'adam'
    },
    {
      id:'w7',
      en:'المرأة',
      ro:'al-marʾa',
      tr:'kadın'
    },
    {
      id:'w8',
      en:'طالب',
      ro:'ṭālib',
      tr:'öğrenci (erkek)'
    },
    {
      id:'w9',
      en:'معلم',
      ro:'muʿallim',
      tr:'öğretmen'
    },
    {
      id:'w10',
      en:'هذا',
      ro:'hādhā',
      tr:'bu (eril)'
    },
    {
      id:'w11',
      en:'هذه',
      ro:'hādhihi',
      tr:'bu (dişil)'
    },
    {
      id:'w12',
      en:'هو',
      ro:'huwa',
      tr:'o (erkek)'
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'ال Takısı',
      title_en:'Definite Article al-',
      explanation:'Arapçada belirli isimler çoğunlukla ال ile başlar: الكتاب, البيت. Türkçedeki "o/şu belirli nesne" hissi verir.',
      table:[
        {
          pronoun:'Belirli',
          form:'الكتاب',
          example:'هذا الكتاب جديد',
          tr:'Bu kitap yeni.'
        },
        {
          pronoun:'Belirsiz',
          form:'كتاب',
          example:'هذا كتاب',
          tr:'Bu bir kitap.'
        }
      ],
      note:'İsimle birlikte ezberle: kelime + ال.'
    },
    {
      id:'g2',
      title:'Güneş / Ay harfleri',
      title_en:'Sun and Moon Letters',
      explanation:'ال takısı sonrası bazı harflerde l sesi asimile olur: الشمس (ash-shams). Bazılarında korunur: القمر (al-qamar).',
      table:[
        {
          pronoun:'Sun letter',
          form:'الشمس',
          example:'ash-shams',
          tr:'Güneş (l sesi erir).'
        },
        {
          pronoun:'Moon letter',
          form:'القمر',
          example:'al-qamar',
          tr:'Ay (l sesi korunur).'
        }
      ],
      note:'Telaffuzda asimilasyon önemli, yazımda ال aynen kalır.'
    }
  ],
  speaking:[
    {
      id:'sp1',
      en:'هذا الطالب علي.',
      tr:'Bu öğrenci Ali.',
      prompt:'Tanıtım yap'
    },
    {
      id:'sp2',
      en:'هذه المدرسة كبيرة.',
      tr:'Bu okul büyük.',
      prompt:'Dişil örnek ver'
    },
    {
      id:'sp3',
      en:'البيت قريب.',
      tr:'Ev yakın.',
      prompt:'ال takısı kullan'
    },
    {
      id:'sp4',
      en:'الشمس حارة اليوم.',
      tr:'Güneş bugün sıcak.',
      prompt:'Sun letter telaffuz et'
    },
    {
      id:'sp5',
      en:'القمر جميل.',
      tr:'Ay güzel.',
      prompt:'Moon letter telaffuz et'
    }
  ],
  dialogues:[
    {
      id:'d1',
      title:'Sınıf Konuşması',
      title_en:'Class Talk',
      lines:[
        {
          speaker:'A',
          gender:'m',
          en:'أنا طالب. اسمي علي.',
          tr:'Ben öğrenciyim. Adım Ali.',
          bd:[
            {
              ro:'ṭālib',
              tr:'öğrenci',
              role:'O',
              note:'Erkek form.'
            }
          ]
        },
        {
          speaker:'B',
          gender:'f',
          en:'مرحباً يا علي. هذا الكتاب جديد.',
          tr:'Merhaba Ali. Bu kitap yeni.',
          bd:[]
        },
        {
          speaker:'A',
          gender:'m',
          en:'نعم، والكتاب على الطاولة.',
          tr:'Evet, kitap masanın üstünde.',
          bd:[]
        },
        {
          speaker:'B',
          gender:'f',
          en:'ممتاز.',
          tr:'Harika.',
          bd:[]
        }
      ]
    }
  ],
  listening:[
    {
      id:'li1',
      audio:'',
      transcript:'هذا الطالب في المدرسة. الكتاب على الطاولة والشمس ساطعة.',
      tr:'Bu öğrenci okulda. Kitap masanın üstünde ve güneş parlak.',
      questions:[
        {
          q:'Öğrenci nerede?',
          opts:[
            'البيت',
            'المدرسة',
            'المطار',
            'المطعم'
          ],
          answer:1,
          tr:'Öğrenci nerede?'
        },
        {
          q:'Hangi kelime sun letter örneği?',
          opts:[
            'القمر',
            'الكتاب',
            'الشمس',
            'البيت'
          ],
          answer:2,
          tr:'Sun letter seç'
        },
        {
          q:'Metinde hangi nesne var?',
          opts:[
            'سيارة',
            'قلم',
            'كتاب',
            'قطار'
          ],
          answer:2,
          tr:'Nesne seç'
        }
      ]
    }
  ],
  tones:[]
};
LESSONS[2] = L2;
