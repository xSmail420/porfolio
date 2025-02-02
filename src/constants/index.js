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
  python,
  upwork,
  megapc,
  vastnewtelecom,
  ShopmyInfluence,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Scripting and Automation",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "AI/ML Engineer",
    company_name: "Vast New Telecom",
    icon: vastnewtelecom,
    iconBg: "#1E293B",
    date: "November 2024 - Present",
    points: [
      "Developing an AI-based text-to-speech and translation model for multilingual communication.",
      "Designing and optimizing AI systems for natural language processing (NLP) and speech synthesis.",
      "Building scalable pipelines for AI model training and deployment.",
      "Integrating AI modules into company products and services.",
      "Developing and maintaining high-performance REST APIs using FastAPI.",
      "Architecting and optimizing backend systems for robustness and scalability.",
      "Managing SQL (PostgreSQL), NoSQL (MongoDB), and vector databases (Qdrant).",
      "Utilizing DevOps tools like Docker and CI/CD for service monitoring and automation.",
    ],
  },
  {
    title: "Scripting and Automation",
    company_name: "Freelance on Upwork",
    icon: upwork,
    iconBg: "#383E56",
    date: "September 2022 - Present",
    points: [
      "Automation of processes and creation of scripts to improve workflows.",
      "Development and maintenance of data scrapers using modern frameworks and libraries.",
      "Collaborating with clients remotely to meet project specifications.",
      "Ensuring timely delivery and adherence to project requirements.",
    ],
  },
  {
    title: "Mobile Developer | Full Stack",
    company_name: "MegaPc",
    icon: megapc,
    iconBg: "#E6DEDD",
    date: "January 2024 - June 2024",
    points: [
      "Developed an AI-based solution for generating PC builds based on user preferences, budget, and purpose.",
      "Handled frontend and backend development, including website content design and UX/UI with Figma.",
      "Implemented database and server management, as well as DevOps practices.",
      "Collaborated with cross-functional teams to ensure project alignment with organizational goals.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "ShopMyInfluence",
    icon: ShopmyInfluence,
    iconBg: "#383E56",
    date: "January 2023 - March 2023",
    points: [
      "Developed a full-stack mobile app for tracking representatives' activities and managing daily tasks.",
      "Managed and analyzed data within the application.",
      "Ensured multi-platform compatibility and user experience consistency.",
      "Worked with team members to implement new features and enhancements.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "ShopMyInfluence",
    icon: ShopmyInfluence,
    iconBg: "#E6DEDD",
    date: "January 2022 - February 2022",
    points: [
      "Built an online showroom website.",
      "Managed database and server to maintain smooth functionality.",
      "Collaborated with team members to meet project deadlines and goals.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ismail proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ismail does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ismail optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movie Sweeper",
    description:
      "A Tinder-like mobile app for movie lovers, allowing users to discover the latest films with intuitive swipe gestures. Match with friends who like the same movies and organize watch parties effortlessly. The app offers personalized recommendations and movie details using Firebase and the MoviesDB API for real-time interactions.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/xSmail420",
  },
  {
    name: "2022 World Cup Explorer",
    description:
      "An immersive web application covering everything about the 2022 World Cup. Explore match schedules, stadiums, hotels, and ticket information. Users can also place friendly bets and access detailed statistics, all in one place. Powered by Angular and RESTful APIs, this platform delivers a smooth and engaging user experience.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/xSmail420",
  },
  {
    name: "PcBuilder.ai",
    description:
      "A smart solution for tech enthusiasts to build custom PC configurations using AI. Users can input their preferences, budget, and requirements to get tailored recommendations. The app is built with Flutter for seamless cross-platform functionality, Express.js for backend logic, and AWS S3 for reliable cloud storage.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "expressJs",
        color: "green-text-gradient",
      },
      {
        name: "AWS S3",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/xSmail420",
  },
];


export { services, technologies, experiences, testimonials, projects };
