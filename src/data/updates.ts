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
    dateEn: "24 August 2026",
    dateAr: "24 آب/أغسطس 2026",
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
    dateEn: "1 January 2026",
    dateAr: "1 كانون الثاني/يناير 2026",
    titleEn: "Presidential Proclamation 10998 blocks entry",
    titleAr: "الإعلان الرئاسي 10998 يمنع الدخول",
    bodyEn:
      "On this date Presidential Proclamation 10998 blocks entry. U.S. sanctions were terminated on 30 June 2025, and the Caesar Act was repealed on 18 December 2025. The block on entry remains. The aim is unchanged: study in the United States, then return to rebuild Syria.",
    bodyAr:
      "في هذا التاريخ يمنع الإعلان الرئاسي 10998 الدخول. أُنهيت العقوبات الأمريكية في 30 حزيران/يونيو 2025، وأُلغي قانون قيصر في 18 كانون الأول/ديسمبر 2025. ما زال المنع قائماً. الغاية لم تتغير: الدراسة في الولايات المتحدة، ثم العودة لإعادة إعمار سوريا.",
    image: {
      src: "/placeholders/proclamation.svg",
      altEn: "Placeholder plate for this note.",
      altAr: "لوحة نائبة لهذه المذكرة.",
    },
  },
];
