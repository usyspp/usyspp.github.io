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
    id: "lina-haddad",
    nameEn: "Lina Haddad",
    nameAr: "لينا حداد",
    fieldEn: "Medicine",
    fieldAr: "الطب",
    institution: "Harvard",
    sentenceEn: "Her entry and visa are blocked, so the program cannot begin.",
    sentenceAr: "دخولها وتأشيرتها موقوفان، لذا لا يمكن للبرنامج أن يبدأ.",
    bodyEn:
      "Admitted to study medicine. Her entry and visa are blocked, so the program cannot begin. She will return to help rebuild Syria after this study.",
    bodyAr:
      "مقبولة لدراسة الطب. دخولها وتأشيرتها موقوفان، لذا لا يمكن للبرنامج أن يبدأ. ستعود للمشاركة في إعادة إعمار سوريا بعد هذه الدراسة.",
  },
  {
    id: "omar-khalil",
    nameEn: "Omar Khalil",
    nameAr: "عمر خليل",
    fieldEn: "Engineering",
    fieldAr: "الهندسة",
    institution: "Stanford",
    sentenceEn: "His visa issuance is stopped, and he remains outside the United States.",
    sentenceAr: "إصدار تأشيرته متوقف، وهو ما زال خارج الولايات المتحدة.",
    bodyEn:
      "Admitted to a graduate engineering program. His visa issuance is stopped, and he remains outside the United States. He will return to help rebuild Syria after this study.",
    bodyAr:
      "مقبول في برنامج دراسات عليا في الهندسة. إصدار تأشيرته متوقف، وهو ما زال خارج الولايات المتحدة. سيعود للمشاركة في إعادة إعمار سوريا بعد هذه الدراسة.",
  },
  {
    id: "rania-nasser",
    nameEn: "Rania Nasser",
    nameAr: "رانيا ناصر",
    fieldEn: "Public health",
    fieldAr: "الصحة العامة",
    institution: "Columbia",
    sentenceEn: "The proclamation blocks her entry, and the term she was admitted for cannot start.",
    sentenceAr: "الإعلان يمنع دخولها، والفصل الذي قُبلت فيه لا يمكن أن يبدأ.",
    bodyEn:
      "Admitted to study public health. The proclamation blocks her entry, and the term she was admitted for cannot start. She will return to help rebuild Syria after this study.",
    bodyAr:
      "مقبولة لدراسة الصحة العامة. الإعلان يمنع دخولها، والفصل الذي قُبلت فيه لا يمكن أن يبدأ. ستعود للمشاركة في إعادة إعمار سوريا بعد هذه الدراسة.",
  },
  {
    id: "yusuf-mansour",
    nameEn: "Yusuf Mansour",
    nameAr: "يوسف منصور",
    fieldEn: "Engineering",
    fieldAr: "الهندسة",
    institution: "Columbia",
    sentenceEn: "His admission stands, and the visa does not.",
    sentenceAr: "قبوله قائم، والتأشيرة ليست كذلك.",
    bodyEn:
      "Admitted to study engineering. His admission stands, and the visa does not. He will return to help rebuild Syria after this study.",
    bodyAr:
      "مقبول لدراسة الهندسة. قبوله قائم، والتأشيرة ليست كذلك. سيعود للمشاركة في إعادة إعمار سوريا بعد هذه الدراسة.",
  },
  {
    id: "hala-qassem",
    nameEn: "Hala Qassem",
    nameAr: "هالة قاسم",
    fieldEn: "Medicine",
    fieldAr: "الطب",
    institution: "Stanford",
    sentenceEn: "She is waiting outside the country while the proclamation blocks her visa.",
    sentenceAr: "تنتظر خارج البلاد بينما الإعلان يوقف تأشيرتها.",
    bodyEn:
      "Admitted to study medicine. She is waiting outside the country while the proclamation blocks her visa. She will return to help rebuild Syria after this study.",
    bodyAr:
      "مقبولة لدراسة الطب. تنتظر خارج البلاد بينما الإعلان يوقف تأشيرتها. ستعود للمشاركة في إعادة إعمار سوريا بعد هذه الدراسة.",
  },
];
