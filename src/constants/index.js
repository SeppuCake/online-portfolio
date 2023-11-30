import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  compurex,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  php,
  python,
  mysql,
  jquery,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Freelance Tech Advisor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "jQuery",
    icon: jquery,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: html,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full-Stack Junior Web Developer",
    company_name: "CompuRex Corporation Sdn. Bhd.",
    icon: compurex,
    iconBg: "#000000",
    date: "Jul 2018 - Jan 2019",
    points: [
      "Design and deploy SQL Database (MySQL, SQLLite)",
      "Built a responsive HTML, PHP, Laravel, JavaScript, jQuery based cross-browser compatibility",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Developed and worked with a team in building a scalable web application that connected other services provided by the company"
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Jul 2019 - Current",
    points: [
      "Developing and maintaining web applications based on clients' requirements.",
      "Collaborated with local students in achieving their project goals and provide support as an advisor.",
      "Provide private tutoring for students in developing their fundamentals in programming.",
      "Assisted and review projects assigned by clients for testing and debugging.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "e-Procurement",
    description:
      "Web-based platform with a responsive website and a dashboard for statistics displays such as number of orders, number of procurements, and generate reports.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "jQuery",
        color: "pink-text-gradient",
      },
      {
        name: "AJAX",
        color: "pink-text-gradient",
      },
      {
        name: "Laravel",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Anisotropic Diffusion Software",
    description:
      "A Java program to proof a concept in Anisotropic Diffusion using Perona-Malik, Conductance Estimation Methods and BLACK et al equations to process images through calculation.",
    tags: [
      {
        name: "Java",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Konbini Inventory",
    description:
      "Konbini Inventory aim to enhance and introduce an efficient, robust, and reliable performance in maintaining inventory in the retail industry. Inventory management has always been the key for retail industry to keep track of their stocks and sales performance for a product with the use of Near-Field Communications (NFC) technology.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Arduino",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Personal Projects",
    description:
      "My personal projects compiled over the course of my journey in improving and learning new programming languages",
    tags: [
      {
        name: "Java",
        color: "orange-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "Python",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
      {
        name: "Kali-Linux",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };