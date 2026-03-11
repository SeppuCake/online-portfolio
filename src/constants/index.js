import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  php,
  python,
  mysql,
  jquery,
  threejs,
  compurex,
  cfm,
  eproc_dashboard,
  eproc_login,
  cfm_ctm,
  cfm_ctm_dashboard,
  cfm_ctm_sr,
  cfm_ctm_srform,
  aniso,
  konbini,
  personalproj,
  calradiaRPG,
  danmachiRPG,
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
    title: "UI/UX Designer",
    icon: creator,
  },
  {
    title: "Freelance Tech Advisor",
    icon: mobile,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full-Stack Junior Programmer",
    company_name: "Computer Forms Malaysia Berhad (CFM)",
    icon: cfm,
    iconBg: "#000000",
    date: "May 2025 - Present",
    points: [
      "Designed, developed, and maintained internal web tools and automation systems (email blasts, SMS broadcasting, data purging, requisition workflows) end-to-end as a solo developer.",
      "Built reliable, scalable backend systems using PHP and MySQL.",
      "Debugged complex logic and data issues to improve system stability and performance.",
      "Collaborated closely with stakeholders across the full software lifecycle — from requirements gathering to deployment and maintenance.",
    ],
  },
  {
    title: "Freelance Web Developer & Tech Tutor",
    company_name: "Self-Employed",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Jul 2019 - May 2025",
    points: [
      "Developed and maintained web applications based on clients' requirements.",
      "Collaborated with local students to achieve their project goals and provided support as a technical advisor.",
      "Provided private tutoring for students in developing their programming fundamentals.",
      "Assisted and reviewed client projects for testing, debugging, and code quality.",
    ],
  },
  {
    title: "Junior Web Developer (Internship)",
    company_name: "CompuRex Corporation Sdn. Bhd.",
    icon: compurex,
    iconBg: "#000000",
    date: "Jul 2018 - Jan 2019",
    points: [
      "Designed and deployed SQL databases (MySQL, SQLite).",
      "Built responsive HTML, PHP, Laravel, JavaScript, and jQuery based web applications with cross-browser compatibility.",
      "Implemented cybersecurity policies including OWASP Top 10, RBAC, and input validation and sanitisation.",
      "Collaborated with teams to build a scalable SaaS web application and educated colleagues on secure coding practices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Hakeem's ability to independently manage the full development lifecycle is impressive. He delivered reliable systems with minimal supervision.",
    name: "Colleague / Stakeholder",
    designation: "",
    company: "CFM Tech Forms Sdn. Bhd.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

const projects = [
  {
    name: "Central Task Monitor",
    description:
      "A responsive web application and dashboard for task & service requisition management, featuring statistics on tasks, report generation, and full CRUD functionality with user access control (UAC) privileges.",
    tags: [
      { name: "PHP", color: "pink-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "jQuery", color: "blue-text-gradient" },
      { name: "AJAX", color: "pink-text-gradient" },
      { name: "HTML", color: "blue-text-gradient" },
    ],
    image: cfm_ctm,
    source_code_link: "https://github.com/SeppuCake",
  },
  {
    name: "e-Procurement System",
    description:
      "A responsive web application and dashboard for procurement management, featuring statistics on orders and procurements, report generation, and full CRUD functionality with user access control (UAC) privileges.",
    tags: [
      { name: "PHP", color: "pink-text-gradient" },
      { name: "Laravel", color: "orange-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "jQuery", color: "blue-text-gradient" },
      { name: "AJAX", color: "pink-text-gradient" },
      { name: "HTML", color: "blue-text-gradient" },
    ],
    image: eproc_dashboard,
    source_code_link: "https://github.com/SeppuCake",
  },
  {
    name: "Anisotropic Diffusion Software",
    description:
      "A Java application that demonstrates Anisotropic Diffusion image processing using Perona-Malik, Conductance Estimation Methods, and BLACK et al. equations.",
    tags: [{ name: "Java", color: "orange-text-gradient" }],
    image: aniso,
    source_code_link: "https://github.com/SeppuCake",
  },
  {
    name: "Konbini Inventory",
    description:
      "An inventory management system for the retail industry using Near-Field Communications (NFC) technology to track stock and sales performance efficiently.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "Arduino", color: "orange-text-gradient" },
    ],
    image: konbini,
    source_code_link: "https://github.com/SeppuCake",
  },
  {
    name: "Ocelot — Final Year Project",
    description:
      "A cybersecurity handheld device project built on Android (Nexus 4) using Linux and NFC technology, designed to assist penetration testers with security features and pen-testing tools in the field.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Kali Linux", color: "blue-text-gradient" },
      { name: "JavaScript", color: "orange-text-gradient" },
      { name: "HTML", color: "orange-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
    ],
    image: personalproj,
    source_code_link: "https://github.com/SeppuCake",
  },
  {
    name: "Calradia RPG",
    description:
      "A text-based RPG written in Java using JOptionPane and JFrame, built to deepen understanding of Object-Oriented Programming (OOP) concepts through an interactive game with a basic GUI.",
    tags: [{ name: "Java", color: "orange-text-gradient" }],
    image: calradiaRPG,
    source_code_link: "https://github.com/SeppuCake",
  },
  {
    name: "Danmachi RPG",
    description:
      "A text-based web RPG built with HTML, CSS, PHP, and MySQL — one of the first projects that sparked a passion for web development, combining front-end design with back-end database integration.",
    tags: [
      { name: "HTML", color: "orange-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "PHP", color: "pink-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
    ],
    image: danmachiRPG,
    source_code_link: "https://github.com/SeppuCake",
  },
];

export { services, technologies, experiences, testimonials, projects };
