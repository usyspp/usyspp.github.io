export type ScholarCase = {
  id: string;
  nameEn: string;
  nameAr: string;
  fieldEn: string;
  fieldAr: string;
  institution: string;
  sentenceEn: string;
  sentenceAr: string;
  bodyEn: string;
  bodyAr: string;
};

export const cases: ScholarCase[] = [
  {
    id: "faisal-durbaa",
    nameEn: "Faisal Durbaa",
    nameAr: "فيصل دربعة",
    fieldEn: "Computer science",
    fieldAr: "علوم الحاسوب",
    institution: "Harvard",
    sentenceEn:
      "Two F-1 visa refusals have forced him to defer his Harvard enrollment to Fall 2027.",
    sentenceAr:
      "رفض تأشيرته F-1 مرتين اضطره إلى تأجيل التحاق بجامعة هارفارد إلى خريف 2027.",
    bodyEn:
      "Awarded a full scholarship as an incoming Harvard freshman, with plans to major in computer science. His F-1 visa was refused twice at the U.S. Embassy in Ankara under Proclamation 10998, so he deferred from Fall 2026 to Fall 2027. Harvard's deferral rules bar him from enrolling elsewhere, and comparable study is unavailable in Syria, where he now lives.",
    bodyAr:
      "حصل على منحة دراسية كاملة كطالب جديد في هارفارد، ويعتزم التخصص في علوم الحاسوب. رُفضت تأشيرته F-1 مرتين في السفارة الأمريكية في أنقرة بموجب الإعلان 10998، فأجّل التحاقه من خريف 2026 إلى خريف 2027. وتمنعه قواعد التأجيل في هارفارد من الالتحاق بجهة أخرى، ولا تتوافر في سوريا، حيث يقيم الآن، دراسة مماثلة.",
  },
  {
    id: "yamen-alhilawi",
    nameEn: "Yamen Alhilawi",
    nameAr: "يمان الحلاوي",
    fieldEn: "Financial economics and politics",
    fieldAr: "الاقتصاد المالي والعلوم السياسية",
    institution: "Columbia",
    sentenceEn:
      "His F-1 visa could not be issued, so he cannot begin the Columbia half of his dual degree.",
    sentenceAr:
      "تعذّر إصدار تأشيرته F-1، فلا يستطيع بدء الجزء الدراسي في كولومبيا من شهادته المزدوجة.",
    bodyEn:
      "An incoming third-year student in the Sciences Po–Columbia dual BA, enrolled before Syria's designation. He was due to begin the Columbia years in Fall 2026, but his F-1 interview at the U.S. Consulate in Dhahran on August 18, 2026 ended without a visa because of Proclamation 10998. Columbia has offered a leave of absence, but he may have to leave the program if the delay continues.",
    bodyAr:
      "طالب مقبل على السنة الثالثة في البكالوريوس المزدوج بين سيانس بو وكولومبيا، والتحق به قبل إدراج سوريا في قرار المنع. كان مقرراً أن يبدأ سنواته في كولومبيا في خريف 2026، لكن مقابلة تأشيرته F-1 في القنصلية الأمريكية في الظهران بتاريخ 18 أغسطس 2026 انتهت دون إصدارها بسبب الإعلان 10998. عرضت كولومبيا عليه إجازة دراسية، لكنه قد يضطر إلى ترك البرنامج إذا طال التأخير.",
  },
  {
    id: "loulia-aljaafari",
    nameEn: "Loulia Aljaafari",
    nameAr: "لوليا الجعفري",
    fieldEn: "Electrical engineering",
    fieldAr: "الهندسة الكهربائية",
    institution: "Stanford",
    sentenceEn:
      "Proclamation 10998 forced her to defer her Stanford enrollment to Fall 2027.",
    sentenceAr:
      "اضطرها الإعلان 10998 إلى تأجيل التحاقها بجامعة ستانفورد إلى خريف 2027.",
    bodyEn:
      "Admitted to Stanford to study electrical engineering, she left Syria for Lebanon in 2012 after the Assad regime issued a warrant for her father, a doctor who treated civilians wounded in bombings. She was due to start in Fall 2026 and deferred to Fall 2027 in the hope of obtaining a visa. Without relief, she risks losing her admission.",
    bodyAr:
      "قُبلت في ستانفورد لدراسة الهندسة الكهربائية، وكانت قد غادرت سوريا إلى لبنان عام 2012 بعد أن أصدر نظام الأسد مذكرة توقيف بحق والدها، وهو طبيب عالج مدنيين أصيبوا في القصف. كان مقرراً أن تبدأ في خريف 2026، فأجّلت إلى خريف 2027 أملاً في الحصول على تأشيرة. وإن لم يتغير الوضع، فقد تفقد مقعدها.",
  },
  {
    id: "samir-zyada",
    nameEn: "Samir Zyada",
    nameAr: "سمير زيادة",
    fieldEn: "Undergraduate studies",
    fieldAr: "الدراسة الجامعية",
    institution: "Harvard",
    sentenceEn:
      "Proclamation 10998 forced him to defer his Harvard enrollment to Fall 2027.",
    sentenceAr:
      "اضطره الإعلان 10998 إلى تأجيل التحاقه بجامعة هارفارد إلى خريف 2027.",
    bodyEn:
      "A resident of Aleppo, admitted to Harvard as an incoming first-year undergraduate. He was due to start in Fall 2026 and deferred to Fall 2027 because the proclamation restricts the entry of Syrian citizens. Without relief, he risks losing his admission.",
    bodyAr:
      "مقيم في حلب، قُبل في هارفارد طالباً جديداً في مرحلة البكالوريوس. كان مقرراً أن يبدأ دراسته في خريف 2026، فأجّل إلى خريف 2027 لأن الإعلان يقيّد دخول المواطنين السوريين. وإن لم يتغير الوضع، فقد يفقد مقعده.",
  },
  {
    id: "tala-aljaafari",
    nameEn: "Tala Aljaafari",
    nameAr: "تالا الجعفري",
    fieldEn: "Electrical engineering and computer science",
    fieldAr: "الهندسة الكهربائية وعلوم الحاسوب",
    institution: "MIT",
    sentenceEn:
      "She cannot leave the United States to visit her parents without losing her place in the PhD.",
    sentenceAr:
      "لا تستطيع مغادرة الولايات المتحدة لزيارة والديها دون أن تفقد مكانها في برنامج الدكتوراه.",
    bodyEn:
      "A first-year PhD student in electrical engineering and computer science at MIT, who began in Spring 2026 and holds valid F-1 status. Her entry visa expired in March 2026, so leaving the country would require a new visa abroad, which the current restrictions make effectively unobtainable. Visiting her parents would therefore mean giving up her PhD.",
    bodyAr:
      "طالبة دكتوراه في السنة الأولى في الهندسة الكهربائية وعلوم الحاسوب في معهد MIT، بدأت في ربيع 2026 ووضعها الطلابي F-1 ساري. انتهت صلاحية تأشيرة دخولها في مارس 2026، فمغادرة البلاد تستلزم الحصول على تأشيرة جديدة في الخارج، وهو أمر يكاد يستحيل في ظل القيود الحالية. وزيارة والديها تعني بالتالي التخلي عن الدكتوراه.",
  },
  {
    id: "abdulla-daher",
    nameEn: "Abdulla Daher",
    nameAr: "عبدالله ظاهر",
    fieldEn: "Medicine",
    fieldAr: "الطب",
    institution: "Washington University in St. Louis",
    sentenceEn:
      "He withdrew from a surgery clerkship because the proclamation blocks his B-1/B-2 visa.",
    sentenceAr:
      "انسحب من تدريب سريري في الجراحة لأن الإعلان يمنع تأشيرته B-1/B-2.",
    bodyEn:
      "A sixth-year medical student in Poland, expected to graduate in summer 2027, who has passed USMLE Step 1 and is pursuing ECFMG certification. In June 2026 he withdrew from a summer surgery clerkship at Washington University in St. Louis, which required a B-1/B-2 visa. He also had to defer the NRMP residency cycle by a year, and clerkships are open only to current students.",
    bodyAr:
      "طالب طب في السنة السادسة في بولندا، يتوقع التخرج في صيف 2027، اجتاز الخطوة الأولى من امتحان USMLE ويسعى إلى شهادة ECFMG. في يونيو 2026 انسحب من تدريب سريري صيفي في الجراحة بجامعة واشنطن في سانت لويس، وكان يتطلب تأشيرة B-1/B-2. كما اضطر إلى تأجيل دورة المطابقة للإقامة الطبية (NRMP) عاماً، علماً أن التدريب السريري متاح للطلاب الحاليين فقط.",
  },
  {
    id: "maryam-mwafak-burghul",
    nameEn: "Maryam Mwafak Burghul",
    nameAr: "مريم موفق برغل",
    fieldEn: "Anthropology",
    fieldAr: "الأنثروبولوجيا",
    institution: "UT Austin",
    sentenceEn:
      "Her visa expired while she was abroad, so she cannot return to continue her PhD.",
    sentenceAr:
      "انتهت صلاحية تأشيرتها وهي خارج البلاد، فلا تستطيع العودة لمتابعة الدكتوراه.",
    bodyEn:
      "A fourth-year PhD candidate in anthropology at the University of Texas at Austin who has completed coursework, qualifying exams, and her prospectus, and is now in the fieldwork and dissertation stage. Her visa expired while she was in Qatar, and the proclamation now prevents her return. The university allowed remote enrollment for Fall 2026, but she must return afterward or forfeit the program.",
    bodyAr:
      "مرشحة دكتوراه في السنة الرابعة في الأنثروبولوجيا بجامعة تكساس في أوستن، أنهت المقررات والامتحانات التأهيلية ومقترح الأطروحة، وهي الآن في مرحلة العمل الميداني وكتابة الأطروحة. انتهت صلاحية تأشيرتها وهي في قطر، ويمنعها الإعلان الآن من العودة. سمحت الجامعة بالتسجيل عن بُعد في خريف 2026، لكن عليها العودة بعده وإلا خسرت البرنامج.",
  },
  {
    id: "ousama-shikfa",
    nameEn: "Ousama Shikfa",
    nameAr: "أسامة شكفة",
    fieldEn: "Ophthalmology research",
    fieldAr: "أبحاث طب العيون",
    institution: "University of Illinois Chicago",
    sentenceEn:
      "He cannot obtain the J-1 visa needed to start his sponsored postdoctoral appointment.",
    sentenceAr:
      "لا يستطيع الحصول على تأشيرة J-1 اللازمة لبدء منصبه البحثي المموَّل لما بعد الدكتوراه.",
    bodyEn:
      "A physician invited to join the University of Illinois Chicago as a postdoctoral research associate in ophthalmology, studying an amniotic membrane therapy for ocular burns. UIC completed the sponsorship and issued his DS-2019 for October 2026 to October 2027. Proclamation 10998 prevents him from obtaining the J-1 visa, so the appointment is at risk of delay or loss.",
    bodyAr:
      "طبيب مدعو للانضمام إلى جامعة إلينوي في شيكاغو باحثاً في مرحلة ما بعد الدكتوراه في طب العيون، لدراسة علاج بغشاء السلى لحروق العين. أتمّت الجامعة إجراءات الكفالة وأصدرت له نموذج DS-2019 للفترة من أكتوبر 2026 إلى أكتوبر 2027. ويمنعه الإعلان 10998 من الحصول على تأشيرة J-1، فيصبح المنصب عرضة للتأخير أو الفقدان.",
  },
  {
    id: "talah-nammor",
    nameEn: "Talah Nammor",
    nameAr: "تالة نمور",
    fieldEn: "Medicine",
    fieldAr: "الطب",
    institution: "U.S. clinical electives",
    sentenceEn:
      "The proclamation blocks the B-1/B-2 visa she needs for U.S. clinical electives.",
    sentenceAr:
      "يمنع الإعلان تأشيرة B-1/B-2 التي تحتاجها للتدريب السريري الاختياري في الولايات المتحدة.",
    bodyEn:
      "A senior medical student at Alfaisal University in Saudi Arabia, expected to graduate in 2027, who has passed USMLE Step 1 and will take Step 2 CK in December 2026. She planned U.S. clinical electives as preparation for residency, but they require a B-1/B-2 visa. These opportunities are open only to students, so they cannot be postponed past graduation.",
    bodyAr:
      "طالبة طب في السنة النهائية بجامعة الفيصل في السعودية، يُتوقع تخرجها عام 2027، اجتازت الخطوة الأولى من امتحان USMLE وستؤدي الخطوة 2 CK في ديسمبر 2026. خططت لتدريب سريري اختياري في الولايات المتحدة استعداداً للإقامة الطبية، لكنه يتطلب تأشيرة B-1/B-2. وهذه الفرص مخصصة للطلاب فقط، فلا يمكن تأجيلها إلى ما بعد التخرج.",
  },
  {
    id: "yamen-shayah",
    nameEn: "Yamen Shayah",
    nameAr: "يمان شيّاح",
    fieldEn: "Postgraduate medical training",
    fieldAr: "التدريب الطبي بعد التخرج",
    institution: "Wright Center for Graduate Medical Education",
    sentenceEn:
      "He cannot leave the United States to marry without losing his residency position.",
    sentenceAr:
      "لا يستطيع مغادرة الولايات المتحدة للزواج دون أن يفقد منصبه في الإقامة الطبية.",
    bodyEn:
      "A physician in the second year of postgraduate medical training at the Wright Center for Graduate Medical Education, in the U.S. on a J-1 visa since 2025. His visa stamp has expired and a new one cannot be issued, so leaving to marry his fiancée in Syria would bar his return under Proclamation 10998. That would end his residency, and staying means indefinite separation.",
    bodyAr:
      "طبيب في السنة الثانية من التدريب الطبي بعد التخرج في مركز رايت للتعليم الطبي العالي، ويقيم في الولايات المتحدة بتأشيرة J-1 منذ 2025. انتهت صلاحية ختم تأشيرته ولا يمكن إصدار ختم جديد، فمغادرته للزواج من خطيبته في سوريا تمنع عودته بموجب الإعلان 10998. وهذا يُنهي إقامته الطبية، أما البقاء فيعني انفصالاً عن أسرته إلى أجل غير مسمى.",
  },
];
