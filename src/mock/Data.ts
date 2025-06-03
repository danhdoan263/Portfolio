export type DataMockup = {
  id: number;
  title: string;
  icon: string;
  color: string;
  content?: string;
  data?: DataMockup[];
};


export const info = [
  {
    id: 1,
    title: "Bio",
    icon: "folder",
    color: "red",
    data: [
      {
        id: 1,
        title: "Dương Danh Đoàn",
        icon: "file-earmark-code",
        color: "blue",
        content:
          "Experienced in Frontend programming, applying popular frameworks such as ReactJs (main framework), VueJs, AdonisJs (SSR).\n\nCurrently aiming to program ReactNative and eventually become a backend developer.\n\nHave the ability to read and understand English at a relative level. In modern programming, I have used and applied AI in practical projects.\n\nWishing to become a fullstack engineer, I constantly learn and improve my abilities in new environments.",
      },
    ],
  },

  {
    id: 2,
    title: "Dương Danh Đoàn",
    icon: "file-earmark-code",
    color: "blue",
    content: "Portfolio Description\n\nThis is my personal portfolio showcasing my skills and projects.",
  },
];
export const info2 = [
  {
    id: 1,
    title: "+84 0399920267",
    icon: "file-earmark-code",
    color: "blue",
    content:
      "📞 Contact Information\n\nPhone: +84 0399920267\n\nThis is my phone number, please contact me if you need any help.\n\nAvailable: Monday - Friday (9:00 AM - 6:00 PM)",
  },
];

export const data = [
  {
    id: 1,
    title: "Personal Info",
    icon: "folder",
    color: "red",
    data: info,
  },
  {
    id: 2,
    title: "Contract",
    icon: "folder",
    color: "red",
    data: info2,
  },
];