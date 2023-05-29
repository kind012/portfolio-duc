import collage from "../assets/images/college.png";
import learning from "../assets/images/self-learning.png";
import logo1 from "../assets/images/html.svg";
import logo2 from "../assets/images/css.svg";
import logo3 from "../assets/images/javascript.svg";
import logo4 from "../assets/images/reactjs.svg";
import logo5 from "../assets/images/tailwind-css.svg";
import logo6 from "../assets/images/figma.svg";
import logo7 from "../assets/images/pts.svg";
import logo8 from "../assets/images/vsc.svg";
import logo9 from "../assets/images/icons8-github-48.svg";
import logo10 from "../assets/images/sass.svg";
import logo11 from "../assets/images/redux.svg";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { GiSkills } from "react-icons/gi";

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
      link: "#study",
      icon: MdOutlinePermContactCalendar,
    },
    {
      link: "#skill",
      icon: GiSkills,
    },
    {
      link: "#project",
      icon: GoProject,
    },
  ],
  Study: {
    study_content: [
      {
        id: 1,
        timeline: "10/2020 - Present",
        img: collage,
        title: "Learning Can Tho Vocational College",
        name: "Can Tho Vocational College",
        desc: "“I learned the basics of HTML & CSS at school,and was assigned to do small projects.Proficient in HTML and CSS”",
      },
      {
        id: 2,
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
        id: 1,
        logo: logo1,
      },
      {
        id: 2,
        logo: logo2,
      },
      {
        id: 3,
        logo: logo3,
      },
      {
        id: 4,
        logo: logo4,
      },
      {
        id: 5,
        logo: logo5,
      },
      {
        id: 6,
        logo: logo6,
      },
      {
        id: 7,
        logo: logo7,
      },
      {
        id: 8,
        logo: logo8,
      },
      {
        id: 9,
        logo: logo9,
      },
      {
        id: 9,
        logo: logo10,
      },
      {
        logo: logo11,
      },
    ],
  },
};
