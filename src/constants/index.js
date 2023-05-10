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
  school,
  graduate,
  redhat,
  education,
  sslc,
  fitness,
  crown,
  cosmetics,
  dalle,
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
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "MERN Stack Developer",
    icon: backend,
  },
  {
    title: "JavaScript Developer",
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Master of Computer Applications",
    company_name: "APJ Abdul Kalam Technological University",
    college: "Amal Jyothi College of Engineering, Kanjirappally, Kottayam",
    icon: school,
    iconBg: "#383E56",
    date: "2019 - 2022",
    points: ["CGPA: 7.64"],
  },
  {
    title: "Redhat Certification",
    company_name: "RHCSA (RedHat Certified Administrator, RHEL 7)",
    college: "RHCE (Redhat Certified Engineer, RHEL 7)",

    icon: redhat,
    iconBg: "#E6DEDD",
    date: "2017",
    points: ["ID: 170-168-553"],
  },
  {
    title: "Bachelor of Computer Applications",
    company_name: "Mahatma Gandhi University, Kottayam ",
    college: "KMM College of Arts and Science, Thrikkakara, Ernakulam",
    icon: graduate,
    iconBg: "#E6DEDD",
    date: "2013 - 2016",
    points: ["CGPA: 5.68"],
  },

  {
    title: "Plus Two Computer Science",
    company_name: "Kerala State Board",
    college: "NSHSS, Mannar, Kurattikkadu, Alappuzha",
    icon: education,
    iconBg: "#383E56",
    date: "2011 - 2012",
    points: ["Percentage: 68"],
  },
  {
    title: "SSLC",
    company_name: "Kerala State Board",
    college: "SBHSS , Mannar,Kurattikadu, Alappuzha",
    icon: sslc,
    iconBg: "#E6DEDD",
    date: "2010",
    points: ["Percentage: 72.5"],
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
    name: "Fitness Web App",
    description:
      "Web-based platform that allows With the functionality to choose exercise categories and specific muscle groups, browse more than one thousand exercises with practical examples pull related videos from youtube, display similar exercises.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapid API",
        color: "green-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/Sujith175/Fitness-web-App.git",
    project_link: "https://sujithfitness.netlify.app",
  },
  {
    name: "Crown Clothing",
    description:
      "Stunning web app built using Reactjs, Google Firebase, Redux, and Stripe.This e-commerce platform is designed to provide you with a seamless shopping experience, from browsing products to securely completing your purchase.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "google firebase",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: crown,
    source_code_link: "https://github.com/Sujith175/crownclothing_learning.git",
    project_link: "https://sclothing.netlify.app",
  },
  {
    name: "Cosmetics Web App",
    description:
      "A comprehensive E-commerce UI that allows users to view products, check reviews, browse products by category and much more. Beautifull UI animations with framer motion makes this unique design.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer motion",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cosmetics,
    source_code_link:
      "https://github.com/Sujith175/Cosmetics-E-commerce-Front-End.git",
    project_link: "https://cosmetics-e-commerce-front-end.vercel.app",
  },
  {
    name: "Open AI Dall-e Clone",
    description:
      "Dive into the world of artificial intelligence. This web platform create original, realistic images and art from a text description.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "green-text-gradient",
      },
      {
        name: "Dall-e API",
        color: "pink-text-gradient",
      },
      {
        name: "Node Js",
        color: "green-text-gradient",
      },
    ],
    image: dalle,
    source_code_link:
      "https://github.com/Sujith175/Dall-e-Image-Generation-Project.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
