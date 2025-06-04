export type DataMockup = {
  id: number;
  title: string;
  icon: string;
  color: string;
  content?: string;
  data?: DataMockup[];
};


export const personalInfo = [
  {
    id: 1,
    title: "Bio",
    icon: "folder",
    color: "red",
    data: [
      {
        id: 1,
        title: "Summary",
        icon: "file-earmark-code",
        color: "blue",
        content:
          "Experienced in Frontend programming, applying popular frameworks such as ReactJs (main framework), VueJs, AdonisJs (SSR).\n\nCurrently aiming to program ReactNative and eventually become a backend developer.\n\nHave the ability to read and understand English at a relative level. In modern programming, I have used and applied AI in practical projects.\n\nWishing to become a fullstack engineer, I constantly learn and improve my abilities in new environments.",
      },
    ],
  },

  {
    id: 2,
    title: "University",
    icon: "file-earmark-code",
    color: "blue",
    content: "Graduated with a major in computer science from Greenwich University, UK, with FPT Vietnam Education Joint Venture.",
  },
  {
    id: 3,
    title: "Coursework",
    icon: "file-earmark-code",
    color: "blue",
    content: "> Human Computer Interaction and Design,\n > Mobile Application Design and Development,\n > Enterprise Web Software Development",
  },
];
export const contactInfo = [
  {
    id: 1,
    title: "+84 0399920267",
    icon: "file-earmark-code",
    color: "blue",
    content:
      "📞 Contact Information\n\nPhone: +84 0399920267\n\nThis is my phone number, please contact me if you need any help.\n\nAvailable: Monday - Friday (9:00 AM - 6:00 PM)",
  },
];
export const workExperience = [
  {
    id: 1,
    title: "Gira",
    icon: "file-earmark-code",
    color: "blue",
    content:
      " # Frontend Developer \n *02/2025– 05/2025* \n  * I was responsible for developing the user interface using a pre-designed design that resulted in a friendly user interface. \n * My job was to refactor the project structure based on the custom template of the previous project. Developed the project using ReactJS using TypeScript as the main language, developed commons, components, implemented Redux, and integrated the API.\n * Continuously worked closely with designers and business analysts to make changes and tweaks to the UX/UI design, completing the project 2 months ahead of schedule. Proactively coordinated cross-departmental collaboration to unify UX/UI changes, resulting in early delivery and 15% project cost savings. Additionally, optimized API calls using React Query, reducing data latency by 30%.\n *  ***Technologies: ReactJS, React hook form, React query, TypeScript, Redux, REST API, JWT, Axios, TailwindCSS, Icomoon.***",
  },
  {
    id:   2,
    title: "Gira - internship",
    icon: "file-earmark-code",
    color: "blue",
    content:
      " #  Fullstack Developer Intern \n *10/2024– 12/2024* \n  *  Focused on advanced ReactJS development, emphasizing code structure, maintenance, and component creation for education and e-commerce projects. \n * Received training in Git, Docker, and full-stack development with ReactJS, ExpressJS, and MongoDB.",
  }]

const skills = [
  {
    id: 1,
    title: "SKILLS",
    icon: "file-earmark-code",
    color: "red",
    content:"* ***Languages***:  JavaScript, TypeScript \n * ***Frameworks***: ReactJs, VueJs, NextJs, AdonisJs, ExpressJs \n * ***Databases***:  MongoDB, PostgreSQL, MySQL, SQL Server \n * ***Tools***: Git, Docker, Postman \n * ***Others***: Agile, Scrum"
  }
]
export const data = [
  {
    id: 1,
    title: "PERSONAL INFO",
    icon: "folder",
    color: "red",
    data: personalInfo,
  },
  {
    id: 2,
    title: "CONTACT",
    icon: "folder",
    color: "red",
    data: contactInfo,
  },
  {
    id: 3,
    title: "WORK & EXPERIENCE",
    icon: "folder",
    color: "red",
    data: workExperience,
  },
  {
    id: 4,
    title: "SKILLS",
    icon: "folder",
    color: "red",
    data: skills,
  }
];