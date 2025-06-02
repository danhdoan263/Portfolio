export type DataMockup = {
  id: number;
  title: string;
  icon: string;
  color: string;
  content?: string;
  data?: {
    title: string;
    icon: string;
    content?: string;
  }[];
};

export const data = [
  {
    id: 1,
    title: "Bio",
    icon: "folder",
    color: "red",
    data: [
      {
        title: "Dương Danh Đoàn",
        icon: "file-earmark-code",
        content:
          "Experienced in Frontend programming, applying popular frameworks such as ReactJs (main framework),VueJs, AdonisJs (SSR). Currently aiming to program ReactNative and eventually become a backend developer. Have the ability to read and understand English at a relative level. In modern programming, I have used and applied AI in practical projects. Wishing to become a fullstack engineer, I constantly learn and improve my abilities in new environments.",
      },
    ],
  },
  {
    id: 2,
    title: "Dương Danh Đoàn",
    icon: "file-earmark-code",
    color: "blue",

    content:
      "Experienced in Frontend programming, applying popular frameworks such as ReactJs (main framework),VueJs, AdonisJs (SSR). Currently aiming to program ReactNative and eventually become a backend developer. Have the ability to read and understand English at a relative level. In modern programming, I have used and applied AI in practical projects. Wishing to become a fullstack engineer, I constantly learn and improve my abilities in new environments.",
  },
];
