export const chapters = [
  {
    id: '1',
    title: 'ምዕራፍ 1: የጀርመንኛ ፊደላት (Alphabet)',
    author: 'Agegnehu Tech',
    content: 'በዚህ ምዕራፍ ስለ ጀርመንኛ ፊደላት አነባበብ እና ልዩ ምልክቶች በዝርዝር እንማራለን።',
    details: [
      { de: 'W (Wasser)', am: 'እንደ "ቭ" ይነበባል (ቫሰር)' },
      { de: 'V (Vater)', am: 'እንደ "ፍ" ይነበባል (ፋተር)' },
      { de: 'ß (Eszett)', am: 'እንደ "ሰ" ይነበባል' }
    ]
  },
  {
    id: '2',
    title: 'ምዕራፍ 2: ሰላምታዎች (Greetings)',
    author: 'Agegnehu Tech',
    content: 'መሰረታዊ የሆኑ የጀርመንኛ ሰላምታዎችን ከነሙሉ ማብራሪያቸው እዚህ ያገኛሉ።',
    details: [
      { de: 'Guten Tag', am: 'ደህና ዋሉ (ለቀን ሰላምታ)' },
      { de: 'Guten Abend', am: 'ደህና መሹ (ለማታ ሰላምታ)' },
      { de: 'Hallo', am: 'ሰላም (ለጓደኛ)' }
    ]
  },
  {
    id: '3',
    title: 'ምዕራፍ 3: ቁጥሮች (Numbers)',
    author: 'Agegnehu Tech',
    content: 'ከ 1 እስከ 100 ያሉ ቁጥሮች አነባበብ እና አጻጻፍ።',
    details: [
      { de: 'Eins', am: 'አንድ' },
      { de: 'Zwei', am: 'ሁለት' },
      { de: 'Elf', am: 'አስራ አንድ' }
    ]
  }
];

export const agegnehuTechBook = [
  {
    chapter: 1,
    title: "መግቢያና ፊደላት (Introduction & Alphabet)",
    content: "ጀርመንኛ 26 መደበኛ ፊደላት እና 4 ልዩ ፊደላት አሉት።",
    lessons: [
      { de: "A, B, C, D", en: "A, B, C, D", am: "አ፣ ቤ፣ ጼ፣ ዴ" },
      { de: "Ä, Ö, Ü", en: "A, O, U Umlauts", am: "ኤ፣ ኦ(ኡ)፣ ኡ(ኢ)" },
      { de: "ß", en: "Double S", am: "ኤስ-ጼት (ሰ)" }
    ],
    note: "ጀርመንኛ ላይ 'W' እንደ 'V' (ቭ) ይነበባል። ለምሳሌ፡ Wir (ቪር) ማለት 'እኛ' ማለት ነው።"
  },
  {
    chapter: 2,
    title: "ሰላምታዎች (Greetings)",
    content: "በማንኛውም ጊዜና ቦታ ሰዎችን እንዴት ሰላም እንደምንል የሚያሳይ።",
    lessons: [
      { de: "Guten Tag", en: "Good Day", am: "ደህና ዋሉ / ሰላም" },
      { de: "Wie geht es Ihnen?", en: "How are you? (Formal)", am: "እንዴት ነዎት?" },
      { de: "Auf Wiedersehen", en: "Goodbye", am: "ደህና ሁኑ" }
    ],
    note: "ለታላቅ ሰው ወይም ለማያውቁት ሰው 'Ihnen' (እርስዎ) መጠቀም የግድ ነው።"
  },
  {
    chapter: 3,
    title: "ቁጥሮች (Numbers - 1 to 1000)",
    content: "መሰረታዊ ቁጥሮችና የሰዓት አቆጣጠር።",
    lessons: [
      { de: "Eins, Zwei, Drei", en: "One, Two, Three", am: "አንድ፣ ሁለት፣ ሦስት" },
      { de: "Zehn, Zwanzig", en: "Ten, Twenty", am: "አስር፣ ሃያ" },
      { de: "Hundert, Tausend", en: "Hundred, Thousand", am: "መቶ፣ ሺህ" }
    ],
    note: "21 ሲባል 'Einundzwanzig' (አንድና ሃያ) ይባላል።"
  },
  {
    chapter: 4,
    title: "ሰዋስው፡ መስተዋድድ (Grammar: Articles)",
    content: "በጀርመንኛ ስሞች በጾታ ይከፈላሉ (Der, Die, Das)።",
    lessons: [
      { de: "Der Mann", en: "The Man", am: "ሰውየው (ተባዕታይ)" },
      { de: "Die Frau", en: "The Woman", am: "ሴቲቱ (አንስታይ)" },
      { de: "Das Kind", en: "The Child", am: "ልጁ (መካከለኛ)" }
    ],
    note: "ማንኛውም ስም (Noun) በጀርመንኛ ሲጻፍ መጀመሪያው ፊደል በትልቅ (Capital) መሆን አለበት።"
  },
  {
    chapter: 5,
    title: "ንግግሮች (Daily Conversations)",
    content: "በሥራ ቦታና በገበያ ውስጥ የሚደረጉ ንግግሮች።",
    lessons: [
      { de: "Was kostet das?", en: "How much does this cost?", am: "ዋጋው ስንት ነው?" },
      { de: "Ich brauche Hilfe.", en: "I need help.", am: "እርዳታ እፈልጋለሁ።" },
      { de: "Ich verstehe nicht.", en: "I don't understand.", am: "አልገባኝም።" }
    ],
    note: "እርዳታ ለመጠየቅ 'Entschuldigung' (ይቅርታ) በማለት ንግግር መጀመር ይቻላል።"
  },
  {
    chapter: 6,
    title: "መዝገበ-ቃላት (A-Z Dictionary)",
    content: "በብዛት ጥቅም ላይ የሚውሉ ቃላት ዝርዝር።",
    lessons: [
      { de: "Arbeit", en: "Work", am: "ሥራ" },
      { de: "Brot", en: "Bread", am: "ዳቦ" },
      { de: "Computer", en: "Computer", am: "ኮምፒውተር" },
      { de: "Dank", en: "Thanks", am: "ምስጋና" }
    ],
    note: "ይህ መዝገበ-ቃላት በየጊዜው የሚታደስና ሰፊ ዝርዝር ያለው ነው።"
  }
];

export const developerInfo = {
  name: "Agegnehu Shibiru",
  brandName: "Agegnehu Tech",
  emails: [
    "agegnehushibiru2002@outlook.com",
    "agegnehushibiru5@gmail.com"
  ],
  biographyAmharic: `አገኘሁ ሽቢሩ (Agegnehu Shibiru) በኢትዮጵያ ሲዳማ ክልል በሃንታቴ ከተማ የሚኖር ወጣት የቴክኖሎጂ ባለሙያ ነው። አገኘሁ በኢትዮጵያ ባሕር ኃይል ውስጥ በኮማንዶነት በማገልገል ላይ የሚገኝ የአገር መከላከያ ሠራዊት አባል ሲሆን፣ ከውትድርናው ጎን ለጎን በቴክኖሎጂ እና በሶፍትዌር ኢንጂነሪንግ ዘርፍ ሰፊ ዕውቀት ያለውና በተለያዩ የኦንላይን የትምህርት ተቋማት (እንደ ALX እና Saylor Academy) ራሱን እያበቃ የሚገኝ ታታሪ ወጣት ነው።`,
  originAmharic: `የ "Agegnehu Tech" አመጣጥ፦
አገኘሁ ይህንን የጀርመንኛ ቋንቋ መማሪያ መተግበሪያ የሰራው፣ ቋንቋው የሚኖረውን ሰፊ የዕድል በር በመረዳት እና ለኢትዮጵያውያን ወንድሞቹና እህቶቹ ያለ ምንም ኢንተርኔት (Offline) በቀላሉ የሚማሩበት መንገድ እንዲመቻች በማሰብ ነው። ይህ መተግበሪያ ከቋንቋ ትምህርት ባለፈ፣ ጠንክሮ የሚሰራ ሰው በየትኛውም የሥራ መስክ ላይ ሆኖ ዓለምን የሚቀይር የቴክኖሎጂ ውጤት ማፍራት እንደሚችል ማሳያ ነው።`,
  visionAmharic: `የወደፊት ራዕይ፦
አገኘሁ ወደፊት በሀገሩ በሃንታቴ ከተማ የቴክኖሎጂ ማዕከል (Silk Bet) በመክፈት የወጣቶችን የቴክኖሎጂ ተጠቃሚነት ለማሳደግ እና በዓለም አቀፍ ደረጃ ተወዳዳሪ የሆኑ የሶፍትዌር ውጤቶችን በ "Agegnehu Tech" ስር ለማፍራት ትልቅ እቅድ አለው።`,
  biographyEnglish: `Agegnehu Shibiru is a young tech enthusiast and software engineering passionate from Hantate, Sidama, Ethiopia. He proudly serves as a member of the Ethiopian Navy (Commando) while simultaneously pursuing his passion for technology and software engineering through renowned online institutions such as ALX and Saylor Academy.`,
  originEnglish: `The Story Behind Agegnehu Tech:
Agegnehu created this German language learning application with a clear vision — to open doors of opportunity for his fellow Ethiopians by providing an accessible, offline-first learning experience. This app is more than just a language tool; it is a testament that a dedicated individual, regardless of their field, can create technology that changes lives.`,
  visionEnglish: `Future Vision:
Agegnehu plans to establish a technology center ("Silk Bet") in his hometown of Hantate, empowering the youth with digital skills and producing world-class software products under the Agegnehu Tech brand.`
};
