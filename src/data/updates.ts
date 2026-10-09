export type UpdatePost = {
  id: string;
  date: string;
  dateEn: string;
  dateAr: string;
  titleEn: string;
  titleAr: string;
  bodyEn: string;
  bodyAr: string;
  image?: {
    src: string;
    altEn: string;
    altAr: string;
  };
};

/** Newest first. Add a post at the top of this list. */
export const updates: UpdatePost[] = [
  {
    id: "2026-08-24-designation",
    date: "2026-08-24",
    dateEn: "August 2026",
    dateAr: "آب 2026",
    titleEn: "Syria removed from the state sponsors of terrorism list",
    titleAr: "شطب سوريا من قائمة الدول الراعية للإرهاب",
    bodyEn:
      "The State Department rescinded Syria’s designation as a state sponsor of terrorism. Sanctions are gone, the Caesar Act is repealed, and now the designation has been lifted. The entry ban is the one measure that has not moved, and we are asking for an exemption for Syrians already admitted to U.S. institutions.",
    bodyAr:
      "ألغت وزارة الخارجية الأمريكية تصنيف سوريا دولةً راعية للإرهاب. فبعد رفع العقوبات وإلغاء قانون قيصر، زال التصنيف أيضاً، ولم يبقَ على حاله سوى حظر الدخول. ونحن نطالب باستثناء السوريين المقبولين في المؤسسات الأمريكية من هذا الحظر.",
    image: {
      src: "/images/designation.jpg",
      altEn: "A photo of Syrian President Ahmed Al-Sharaa and President Trump at the 2026 NATO summit.",
      altAr: "صورة للرئيس السوري أحمد الشرع والرئيس ترامب في قمة حلف الناتو لعام 2026.",
    },
  },
  {
    id: "2026-01-01-proclamation",
    date: "2026-01-01",
    dateEn: "January 2026",
    dateAr: "كانون الثاني 2026",
    titleEn: "Presidential Proclamation 10998 bars Syrians from entry",
    titleAr: "الإعلان الرئاسي 10998 يحظر دخول السوريين",
    bodyEn:
      "Weeks after the Caesar Act was repealed, a new proclamation suspended entry and visa issuance for Syrian nationals. It made no exception for people already admitted to U.S. universities and hospitals. Students, doctors, and researchers with acceptance letters and scholarships in hand were stopped before they could begin.",
    bodyAr:
      "بعد أسابيع من إلغاء قانون قيصر، صدر إعلان رئاسي يعلّق دخول المواطنين السوريين وإصدار التأشيرات لهم، من دون أي استثناء لمن قُبلوا في الجامعات والمستشفيات الأمريكية. فتوقّف طلاب وأطباء وباحثون عند عتبة مسيرتهم، وفي أيديهم خطابات القبول والمنح.",
    image: {
      src: "/images/proclamation.jpg",
      altEn: "A photo depicting President Trump signing a presidential proclamation.",
      altAr: "صورة تُظهر الرئيس ترامب وهو يوقّع على إعلان رئاسي.",
    },
  },
  {
    id: "2025-12-18-caesar",
    date: "2025-12-18",
    dateEn: "December 2025",
    dateAr: "كانون الأول 2025",
    titleEn: "Congress repeals the Caesar Act",
    titleAr: "الكونغرس يلغي قانون قيصر",
    bodyEn:
      "Congress repealed the Caesar Act, the most far-reaching U.S. sanctions law on Syria. With this vote, both the White House and Congress had acted on the change in Syria.",
    bodyAr:
      "ألغى الكونغرس قانون قيصر، أوسع قوانين العقوبات الأمريكية على سوريا نطاقاً. وبذلك يكون البيت الأبيض والكونغرس كلاهما قد أقرّا بالتحوّل الذي شهدته سوريا.",
    image: {
      src: "/images/caesar.jpg",
      altEn: "A photo of the Texas House of Representatives chamber in Austin.",
      altAr: "صورة لقاعة مجلس نواب تكساس في أوستن.",
    },
  },
  {
    id: "2025-06-30-sanctions",
    date: "2025-06-30",
    dateEn: "June 2025",
    dateAr: "حزيران 2025",
    titleEn: "U.S. sanctions on Syria end",
    titleAr: "رفع العقوبات الأمريكية عن سوريا",
    bodyEn:
      "Washington ended its sanctions program on Syria, opening the way to trade, investment, and reconstruction. The country we plan to return to began to reconnect with the world.",
    bodyAr:
      "أنهت واشنطن برنامج عقوباتها على سوريا، ففتحت الطريق أمام التجارة والاستثمار وإعادة الإعمار، وبدأ البلد الذي نعتزم العودة إليه يستعيد صلته بالعالم.",
    image: {
      src: "/images/sanctions.jpg",
      altEn: "A photo of the U.S. capitol in Washington.",
      altAr: "صورة لمبنى الكابيتول الأمريكي في واشنطن.",
    },
  },
  {
    id: "2024-12-08-liberation",
    date: "2024-12-08",
    dateEn: "December 2024",
    dateAr: "كانون الأول 2024",
    titleEn: "The Syrian revolution prevails",
    titleAr: "انتصار الثورة السورية",
    bodyEn:
      "After nearly fourteen years, the Syrian revolution prevailed and Syria was liberated. For the first time in a generation, Syrians abroad could plan a future at home, and the skills we planned to gain in the United States now had a country waiting for them.",
    bodyAr:
      "بعد قرابة أربعة عشر عاماً، انتصرت الثورة السورية وتحررت سوريا. ولأول مرة منذ جيل، صار بوسع السوريين في الخارج أن يخططوا لمستقبلهم في وطنهم، وصار للمعارف التي نسعى إلى اكتسابها في الولايات المتحدة وطنٌ ينتظرها.",
    image: {
      src: "/images/liberation.jpg",
      altEn: "Picture depicting crowd celebration after the Syrian liberation.",
      altAr: "صورة تُظهر احتفالاً بعد تحرير سوريا.",
    },
  },
];
