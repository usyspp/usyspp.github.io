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
    titleEn: "State Sponsor of Terrorism designation rescinded",
    titleAr: "أُلغي تصنيف الدولة الراعية للإرهاب",
    bodyEn:
      "On this date the State Sponsor of Terrorism designation was rescinded. Presidential Proclamation 10998 still blocks the entry and visa issuance of Syrian nationals, including students, doctors, engineers, and professionals already admitted to U.S. institutions.",
    bodyAr:
      "في هذا التاريخ أُلغي تصنيف الدولة الراعية للإرهاب. ما زال الإعلان الرئاسي 10998 يمنع دخول المواطنين السوريين وإصدار التأشيرات لهم، ومنهم طلاب وأطباء ومهندسون ومهنيون مقبولون أصلاً في مؤسسات أمريكية.",
    image: {
      src: "/placeholders/designation.svg",
      altEn: "Placeholder plate for this note.",
      altAr: "لوحة نائبة لهذه المذكرة.",
    },
  },
  {
    id: "2026-01-01-proclamation",
    date: "2026-01-01",
    dateEn: "January 2026",
    dateAr: "كانون الثاني 2026",
    titleEn: "Presidential Proclamation 10998 blocks entry",
    titleAr: "الإعلان الرئاسي 10998 يمنع الدخول",
    bodyEn:
      "On this date Presidential Proclamation 10998 blocks entry. U.S. sanctions were terminated in June 2025, and the Caesar Act was repealed in December 2025. The block on entry remains. The aim is unchanged: study in the United States, then return to rebuild Syria.",
    bodyAr:
      "في هذا التاريخ يمنع الإعلان الرئاسي 10998 الدخول. أُنهيت العقوبات الأمريكية في حزيران 2025، وأُلغي قانون قيصر في كانون الأول 2025. ما زال المنع قائماً. الغاية لم تتغير: الدراسة في الولايات المتحدة، ثم العودة لإعادة إعمار سوريا.",
    image: {
      src: "/placeholders/proclamation.svg",
      altEn: "Placeholder plate for this note.",
      altAr: "لوحة نائبة لهذه المذكرة.",
    },
  },
  {
    id: "2025-12-18-caesar",
    date: "2025-12-18",
    dateEn: "December 2025",
    dateAr: "كانون الأول 2025",
    titleEn: "Caesar Act repealed",
    titleAr: "أُلغي قانون قيصر",
    bodyEn:
      "On this date the Caesar Act was repealed. Presidential Proclamation 10998 still blocks the entry and visa issuance of Syrian nationals, including students, doctors, engineers, and professionals already admitted to U.S. institutions.",
    bodyAr:
      "في هذا التاريخ أُلغي قانون قيصر. ما زال الإعلان الرئاسي 10998 يمنع دخول المواطنين السوريين وإصدار التأشيرات لهم، ومنهم طلاب وأطباء ومهندسون ومهنيون مقبولون أصلاً في مؤسسات أمريكية.",
    image: {
      src: "/placeholders/caesar.svg",
      altEn: "Placeholder plate for this note.",
      altAr: "لوحة نائبة لهذه المذكرة.",
    },
  },
  {
    id: "2025-06-30-sanctions",
    date: "2025-06-30",
    dateEn: "June 2025",
    dateAr: "حزيران 2025",
    titleEn: "U.S. sanctions terminated",
    titleAr: "أُنهيت العقوبات الأمريكية",
    bodyEn:
      "On this date U.S. sanctions were terminated. Presidential Proclamation 10998 still blocks the entry and visa issuance of Syrian nationals, including students, doctors, engineers, and professionals already admitted to U.S. institutions.",
    bodyAr:
      "في هذا التاريخ أُنهيت العقوبات الأمريكية. ما زال الإعلان الرئاسي 10998 يمنع دخول المواطنين السوريين وإصدار التأشيرات لهم، ومنهم طلاب وأطباء ومهندسون ومهنيون مقبولون أصلاً في مؤسسات أمريكية.",
    image: {
      src: "/placeholders/sanctions.svg",
      altEn: "Placeholder plate for this note.",
      altAr: "لوحة نائبة لهذه المذكرة.",
    },
  },
  {
    id: "2024-12-08-liberation",
    date: "2024-12-08",
    dateEn: "December 2024",
    dateAr: "كانون الأول 2024",
    titleEn: "Syria’s liberation",
    titleAr: "تحرير سوريا",
    bodyEn:
      "On this date came Syria’s liberation. Presidential Proclamation 10998 still blocks the entry and visa issuance of Syrian nationals, including students, doctors, engineers, and professionals already admitted to U.S. institutions. The aim is unchanged: study in the United States, then return to rebuild Syria.",
    bodyAr:
      "في هذا التاريخ كان تحرير سوريا. ما زال الإعلان الرئاسي 10998 يمنع دخول المواطنين السوريين وإصدار التأشيرات لهم، ومنهم طلاب وأطباء ومهندسون ومهنيون مقبولون أصلاً في مؤسسات أمريكية. الغاية لم تتغير: الدراسة في الولايات المتحدة، ثم العودة لإعادة إعمار سوريا.",
    image: {
      src: "/placeholders/liberation.svg",
      altEn: "Placeholder plate for this note.",
      altAr: "لوحة نائبة لهذه المذكرة.",
    },
  },
];
