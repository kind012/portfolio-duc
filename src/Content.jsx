import collage from "./assets/images/college.png";
import learning from "./assets/images/self-learning.png";
import logo1 from "./assets/images/html.svg";
import logo2 from "./assets/images/css.svg";
import logo3 from "./assets/images/javascript.svg";
import logo4 from "./assets/images/reactjs.svg";
import logo5 from "./assets/images/tailwind-css.svg";
import logo6 from "./assets/images/figma.svg";
import logo8 from "./assets/images/vsc.svg";
import logo9 from "./assets/images/icons8-github-48.svg";
import logo10 from "./assets/images/sass.svg";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#hero",
      icon: TbSmartHome,
    },
    {
      link: "#about",
      icon: BiUser,
    },
    {
      link: "#work",
      icon: RiServiceLine,
    },
    {
      link: "#skill",
      icon: RiProjectorLine,
    },
    {
      link: "#project",
      icon: MdOutlinePermContactCalendar,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  Work: {
    work_content: [
      {
        timeline: "10/2020 - Present",
        img: collage,
        title: "Learning Can Tho Vocational College",
        name: "Can Tho Vocational College",
        desc: "“I learned the basics of HTML & CSS at school,and was assigned to do small projects.Proficient in HTML and CSS”",
      },
      {
        timeline: "03/2022 - Present",
        img: learning,
        title: "Learning code in F8",
        name: "F8 Học Lập Trình Để Đi Làm",
        desc: "“I study Javasrcipt and ReactJS, do exercises and small projects at F8.Proficient in Javascript and ReactJS”",
      },
      {
        timeline: "03/2022 - Present",
        img: learning,
        title: "Learning code in F8",
        name: "F8 Học Lập Trình Để Đi Làm",
        desc: "“I study Javasrcipt and ReactJS, do exercises and small projects at F8.Proficient in Javascript and ReactJS”",
      },
      {
        timeline: "03/2022 - Present",
        img: learning,
        title: "Learning code in F8",
        name: "F8 Học Lập Trình Để Đi Làm",
        desc: "“I study Javasrcipt and ReactJS, do exercises and small projects at F8.Proficient in Javascript and ReactJS”",
      },
    ],
  },
  Skills: {
    skill_content: [
      {
        logo: logo1,
      },
      {
        logo: logo2,
      },
      {
        logo: logo3,
      },
      {
        logo: logo4,
      },
      {
        logo: logo5,
      },
      {
        logo: logo6,
      },
      {
        logo: logo8,
      },
      {
        logo: logo9,
      },
      {
        logo: logo10,
      },
    ],
  },
};
