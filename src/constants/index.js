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
  apt_homepage,
  apt_bill_mgmt,
  apt_complaint_mgmt,
  apt_payment_mgmt,
  apt_overall_report,
  apt_sms_wa_msg_module,
  apt_report_gen_module,
  apt_users,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Front-End Developer", icon: web },
  { title: "Backend Developer", icon: backend },
  { title: "UI/UX Designer", icon: creator },
  { title: "Freelance Tech Advisor", icon: mobile },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "jQuery", icon: jquery },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "PHP", icon: php },
  { name: "Python", icon: python },
  { name: "MySQL", icon: mysql },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
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
      "Collaborated closely with stakeholders across the full software lifecycle - from requirements gathering to deployment and maintenance.",
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
    slug: "central-task-monitor",
    description:
      "A responsive web application and dashboard for task & service requisition management, featuring statistics on tasks, report generation, and full CRUD functionality with user access control (UAC) privileges.",
    longDescription:
      "The Central Task Monitor (CTM) is an internal web-based management information system (MIS) developed solely for Computer Forms Malaysia Berhad (CFM). Built as a solo project during my tenure as a Junior Programmer, CTM was designed to replace fragmented manual workflows by centralising service request tracking, task assignment, and departmental reporting into a single secure platform. The system supports multi-stage service request workflows - from submission through to resolution - with real-time status updates and role-specific dashboards for each department. Every feature was built with production reliability in mind, from the AJAX-powered live updates to the structured UAC system that controls what each role can see and do.",
    status: "Deployed (Internal)",
    duration: "Ongoing (2025 - Present)",
    team: "Solo Developer",
    tags: [
      { name: "PHP", color: "pink-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "jQuery", color: "blue-text-gradient" },
      { name: "AJAX", color: "pink-text-gradient" },
      { name: "HTML", color: "blue-text-gradient" },
    ],
    techStack: [
      { label: "Backend", value: "PHP (vanilla)" },
      { label: "Frontend", value: "HTML, CSS, JavaScript, jQuery" },
      { label: "Database", value: "MySQL" },
      { label: "Data Fetching", value: "AJAX (async live updates)" },
      { label: "Access Control", value: "Role-Based (UAC)" },
      { label: "Deployment", value: "Internal Apache Server" },
    ],
    features: [
      {
        title: "Service Requisition Workflow",
        desc: "Multi-stage SR lifecycle from submission to resolution with status tracking at every step.",
      },
      {
        title: "Role-Based Access Control",
        desc: "Department-aware UAC system restricts views and actions based on user role.",
      },
      {
        title: "Live Dashboard Statistics",
        desc: "AJAX-powered real-time task and SR counts displayed on role-specific dashboards.",
      },
      {
        title: "Full CRUD Management",
        desc: "Create, read, update, and delete operations across tasks, users, and departments.",
      },
      {
        title: "Report Generation",
        desc: "Export task and service request summaries for departmental review.",
      },
      {
        title: "Search & Filter",
        desc: "Query tasks and SRs by status, department, date range, and assignee.",
      },
    ],
    roles: [
      {
        label: "System Admin",
        desc: "Full system configuration and user management",
      },
      {
        label: "Department Manager",
        desc: "View and manage department tasks and SRs",
      },
      { label: "Staff / Requester", desc: "Submit and track service requests" },
      {
        label: "IT / Resolver",
        desc: "Receive, action, and close assigned requests",
      },
    ],
    image: cfm_ctm,
    gallery: [cfm_ctm_dashboard, cfm_ctm_sr, cfm_ctm_srform],
    source_code_link: "https://github.com/SeppuCake",
  },
  {
    name: "Tenant Management System",
    slug: "tenant-management-system",
    description:
      "A responsive web application and dashboard for low-cost apartment management, featuring statistics on units, tenant information, and full CRUD functionality with user access control (UAC) privileges.",
    longDescription:
      "Julia Apartment Management System (JMS) - also known as the Tenant Management System (TMS) - is a client-commissioned full-stack web application developed solo over 3-4 months using Laravel and Blade. The system was built to replace fragmented manual processes in a low-cost apartment complex with a unified, role-based platform that serves four distinct user types: Super Admins, Managers, Tenants, and Maintenance Crew. Key capabilities include tenant onboarding and profile management, bill generation and payment tracking, maintenance and complaint request workflows, and an analytics dashboard with PDF report exports. A standout feature is the dual messaging integration - automated SMS reminders via a Malaysian provider and a custom-built REST API that connects directly to the client's WhatsApp Business dashboard, syncing credit balances locally to enable WhatsApp notification broadcasts to tenants.",
    status: "Completed - Not Deployed (v1.0)",
    duration: "3-4 months",
    team: "Solo Developer (Client-Commissioned)",
    tags: [
      { name: "PHP", color: "pink-text-gradient" },
      { name: "Laravel", color: "orange-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "jQuery", color: "blue-text-gradient" },
      { name: "AJAX", color: "pink-text-gradient" },
      { name: "HTML", color: "blue-text-gradient" },
    ],
    techStack: [
      { label: "Framework", value: "Laravel (PHP)" },
      { label: "Frontend", value: "Blade Templates, Bootstrap, jQuery" },
      { label: "Database", value: "MySQL" },
      { label: "WhatsApp", value: "Custom REST API (self-built)" },
      { label: "Reports", value: "PDF Generation" },
      { label: "Access Control", value: "RBAC (4 user roles)" },
      { label: "Architecture", value: "MVC via Laravel" },
    ],
    features: [
      {
        title: "Tenant Management",
        desc: "Full tenant registration, profile management, and unit assignment with history tracking.",
      },
      {
        title: "Bill & Payment Tracking",
        desc: "Generate monthly bills, record payments, and monitor outstanding balances per unit.",
      },
      {
        title: "Maintenance Request Workflow",
        desc: "Tenants submit complaints, managers assign crew, and status is tracked end-to-end.",
      },
      {
        title: "Announcements & Notices",
        desc: "Broadcast notices to all tenants or specific units directly from the dashboard.",
      },
      {
        title: "SMS Reminders",
        desc: "Automated payment reminders and notice alerts sent via SMS Malaysian provider.",
      },
      {
        title: "WhatsApp Business Integration",
        desc: "Custom-built REST API syncs WhatsApp Business credits locally to enable WA broadcasts without leaving the system.",
      },
      {
        title: "Analytics Dashboard",
        desc: "At-a-glance statistics on occupancy, payment status, and maintenance requests.",
      },
      {
        title: "PDF Report Generation",
        desc: "Exportable billing summaries and occupancy reports for management review.",
      },
      {
        title: "RBAC Authentication",
        desc: "Role-gated login system with four distinct access levels controlling every module.",
      },
      {
        title: "Search, Filter & Pagination",
        desc: "Efficient data browsing across all modules with live search and paginated results.",
      },
    ],
    roles: [
      {
        label: "Super Admin",
        desc: "Full system access, configuration, and user management",
      },
      {
        label: "Manager / Staff",
        desc: "Day-to-day operations, billing, and announcements",
      },
      {
        label: "Tenant",
        desc: "View bills, submit maintenance requests, read notices",
      },
      {
        label: "Maintenance Crew",
        desc: "View and update status of assigned maintenance jobs",
      },
    ],
    image: apt_homepage,
    gallery: [
      apt_bill_mgmt,
      apt_complaint_mgmt,
      apt_payment_mgmt,
      apt_overall_report,
      apt_sms_wa_msg_module,
      apt_report_gen_module,
      apt_users,
    ],
    source_code_link: "https://github.com/SeppuCake",
  },
  {
    name: "e-Procurement System",
    slug: "e-procurement-system",
    description:
      "A full-stack procurement management web application built during internship, featuring a multi-stage approval workflow from order submission through HOD approval to supplier fulfilment, with a real-time dashboard, report generation, and role-based access control.",
    longDescription:
      "The e-Procurement System was built solo during my internship at Compurex Corporation Sdn Bhd as a commissioned internal product. Before this system existed, procurement was handled entirely through emails, phone calls, and paper forms — a fragmented process that made it nearly impossible for PICs working remotely or on client sites to review and approve staff requests in a timely manner. The system replaced this entirely with a structured, multi-stage digital workflow: staff submit procurement requests, HODs review and approve them, approved requests are listed for registered suppliers to view, and suppliers accept and fulfil the procurement — all tracked in one place. Built over 3-4 months as a self-taught intern with no AI assistance and no senior guidance, every feature was researched independently using Stack Overflow, official documentation, and developer forums. This project marks the turning point where my skills crossed from basic programming into full-stack web development. Notably, the entire MVC architecture was designed and built from scratch — not using Laravel's scaffolding, but inspired by its conventions — including a custom-written role-based access control system, input validation, and sanitisation layer, all implemented without third-party security libraries. Every architectural decision was researched, reasoned, and built independently.",
    status: "Completed — Handed Over (v1.0)",
    duration: "3-4 months",
    team: "Solo Developer (Internship)",
    tags: [
      { name: "PHP", color: "pink-text-gradient" },
      { name: "Laravel", color: "orange-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "jQuery", color: "blue-text-gradient" },
      { name: "AJAX", color: "pink-text-gradient" },
      { name: "HTML", color: "blue-text-gradient" },
    ],
    techStack: [
      {
        label: "Framework",
        value: "Custom Framework (Inspired by Laravel MVC Model)",
      },
      { label: "Frontend", value: "Blade Templates, Bootstrap, jQuery" },
      { label: "Database", value: "MySQL" },
      { label: "Data Fetching", value: "AJAX (async live updates)" },
      {
        label: "Access Control",
        value: "Custom-built RBAC (hand-written, no external library)",
      },
      {
        label: "Architecture",
        value: "Custom MVC Framework (self-built, Laravel-inspired)",
      },
      {
        label: "Security",
        value: "Self-implemented OWASP Top 10, input validation & sanitisation",
      },
      { label: "Reports", value: "PDF Generation" },
    ],
    features: [
      {
        title: "Multi-Stage Procurement Workflow",
        desc: "Full order lifecycle — staff submission → HOD approval → supplier procurement listing → supplier acceptance → fulfilment. Every stage is tracked with status updates.",
      },
      {
        title: "Remote-Accessible Approval",
        desc: "Designed specifically so PICs working remotely or on client sites can review and approve procurement requests without being physically present.",
      },
      {
        title: "Supplier Portal",
        desc: "Registered suppliers have their own access to view open procurement listings and accept or decline requests directly within the system.",
      },
      {
        title: "Real-Time Dashboard",
        desc: "Visualised procurement statistics, order traffic, and activity summaries via an interactive dashboard for at-a-glance operational awareness.",
      },
      {
        title: "Inventory & Product Management",
        desc: "Full CRUD management of products and inventory with structured categorisation and stock-level visibility.",
      },
      {
        title: "Budget & Cost Approval Workflows",
        desc: "Cost-aware approval routing ensures procurement requests are reviewed against budget constraints before progressing to the supplier stage.",
      },
      {
        title: "PDF Report Generation",
        desc: "Exportable procurement summaries and order reports for management review, audit trails, and record keeping.",
      },
      {
        title: "Role-Based Access Control",
        desc: "Four distinct user roles — Admin, Manager, Staff, and Supplier — each with tightly scoped permissions controlling what they can view and action.",
      },
      {
        title: "Self-Built Security Layer",
        desc: "Rather than relying on framework-provided security tools, the entire access control system, input validation, and sanitisation layer was written from scratch — applying OWASP Top 10 principles with full understanding of each implementation decision.",
      },
      {
        title: "Responsive UI",
        desc: "Fully responsive interface ensuring usability across desktop and mobile devices — critical for remote PICs accessing the system from client sites.",
      },
    ],
    roles: [
      {
        label: "Admin",
        desc: "Full system configuration, user management, and oversight of all procurement activity",
      },
      {
        label: "Manager / HOD",
        desc: "Review and approve or reject staff procurement requests before they reach suppliers",
      },
      {
        label: "Staff",
        desc: "Submit procurement requests, track approval status, and manage assigned orders",
      },
      {
        label: "Supplier",
        desc: "View open procurement listings and accept or decline requests for fulfilment",
      },
    ],
    image: eproc_dashboard,
    gallery: [
      eproc_login,
      eproc_orderlist,
      eproc_uac,
      eproc_report,
      eproc_crud,
      eproc_newuser,
      eproc_newprod,
      eproc_proddet,
    ],
    source_code_link: "https://github.com/SeppuCake",
  },
  {
    name: "Anisotropic Diffusion Software",
    slug: "anisotropic-diffusion-software",
    description:
      "A Java application that demonstrates Anisotropic Diffusion image processing using Perona-Malik, Conductance Estimation Methods, and BLACK et al. equations.",
    longDescription:
      "A Java desktop application built to demonstrate and prove the concept of Anisotropic Diffusion in image processing. More details coming soon.",
    status: "Completed",
    duration: "1 month",
    team: "Solo Developer (Client-Commissioned)",
    tags: [{ name: "Java", color: "orange-text-gradient" }],
    techStack: [{ label: "Language", value: "Java" }],
    features: [
      {
        title: "Perona-Malik Diffusion",
        desc: "Implements the classic anisotropic diffusion equation.",
      },
      {
        title: "Multiple Conductance Methods",
        desc: "Supports multiple conductance estimation approaches.",
      },
    ],
    roles: [],
    image: aniso,
    gallery: [],
    source_code_link: "https://github.com/SeppuCake",
  },
  {
    name: "Konbini Inventory",
    slug: "konbini-inventory",
    description:
      "An inventory management system for the retail industry using Near-Field Communications (NFC) technology to track stock and sales performance efficiently.",
    longDescription:
      "Konbini Inventory is a retail inventory management system powered by NFC technology. More details coming soon.",
    status: "Completed",
    duration: "3 month(s)",
    team: "Duo Developer (Client-Commissioned)",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "Arduino", color: "orange-text-gradient" },
    ],
    techStack: [
      { label: "Frontend", value: "HTML, CSS, JavaScript" },
      { label: "Database", value: "MySQL" },
      { label: "Hardware", value: "Arduino + NFC Module" },
    ],
    features: [
      {
        title: "NFC Stock Tracking",
        desc: "Scan items via NFC to update inventory in real time.",
      },
      {
        title: "Sales Performance",
        desc: "Track product sales and stock levels.",
      },
    ],
    roles: [],
    image: konbini,
    gallery: [],
    source_code_link: "https://github.com/SeppuCake",
  },
  {
    name: "Ocelot - Final Year Project",
    slug: "ocelot-final-year-project",
    description:
      "A cybersecurity handheld device project built on Android (Nexus 4) using Linux and NFC technology, designed to assist penetration testers with security features and pen-testing tools in the field.",
    longDescription:
      "Ocelot is a final year diploma project - a cybersecurity handheld device built on a Nexus 4 running Kali Linux. More details coming soon.",
    status: "Completed (Academic)",
    duration: "6 month(s)",
    team: "Team Project (University Final Year Project)",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Kali Linux", color: "blue-text-gradient" },
      { name: "JavaScript", color: "orange-text-gradient" },
      { name: "HTML", color: "orange-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
    ],
    techStack: [
      { label: "Platform", value: "Android (Nexus 4) + Kali Linux" },
      { label: "Language", value: "Python, JavaScript, HTML" },
      { label: "Database", value: "MySQL" },
      { label: "Hardware", value: "NFC Module" },
    ],
    features: [
      {
        title: "Pen-Testing Toolkit",
        desc: "Built-in tools for field penetration testing.",
      },
      {
        title: "NFC Integration",
        desc: "NFC-based data capture for security assessments.",
      },
    ],
    roles: [],
    image: personalproj,
    gallery: [],
    source_code_link: "https://github.com/SeppuCake",
  },
  {
    name: "Calradia RPG",
    slug: "calradia-rpg",
    description:
      "A text-based RPG written in Java using JOptionPane and JFrame, built to deepen understanding of OOP concepts through an interactive game with a basic GUI.",
    longDescription:
      "Calradia RPG is a personal Java project - a text-based role-playing game built to explore OOP concepts. More details coming soon.",
    status: "Completed",
    duration: "2 week(s)",
    team: "Duo Developer (University Project)",
    tags: [{ name: "Java", color: "orange-text-gradient" }],
    techStack: [{ label: "Language", value: "Java (JOptionPane, JFrame)" }],
    features: [
      {
        title: "Text-Based RPG",
        desc: "Interactive story-driven gameplay via dialog boxes.",
      },
      {
        title: "OOP Architecture",
        desc: "Built using Java OOP principles - classes, inheritance, encapsulation.",
      },
    ],
    roles: [],
    image: calradiaRPG,
    gallery: [],
    source_code_link: "https://github.com/SeppuCake",
  },
  {
    name: "Danmachi RPG",
    slug: "danmachi-rpg",
    description:
      "A text-based web RPG built with HTML, CSS, PHP, and MySQL - one of the first projects that sparked a passion for web development.",
    longDescription:
      "Danmachi RPG is one of the first web projects that ignited a passion for web development. More details coming soon.",
    status: "Completed",
    duration: "2 week(s)",
    team: "Group Project (University Project)",
    tags: [
      { name: "HTML", color: "orange-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "PHP", color: "pink-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
    ],
    techStack: [
      { label: "Frontend", value: "HTML, CSS, JavaScript" },
      { label: "Backend", value: "PHP" },
      { label: "Database", value: "MySQL" },
    ],
    features: [
      {
        title: "Web-Based RPG",
        desc: "Text-based RPG playable in the browser.",
      },
      {
        title: "Database-Driven",
        desc: "Player data and game state stored in MySQL.",
      },
    ],
    roles: [],
    image: danmachiRPG,
    gallery: [],
    source_code_link: "https://github.com/SeppuCake",
  },
];

export { services, technologies, experiences, testimonials, projects };
