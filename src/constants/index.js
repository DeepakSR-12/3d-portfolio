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
  qapita,
  freelancer,
  tiger,
  freshworks,
  netflix,
  hulu,
  furniture,
  threejs,
} from "../assets";

export const personal = {
  firstName: "Deepak",
  lastName: "Rajkumar",
  description: `I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!`,
};

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
    id: "projects",
    title: "Projects",
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
    title: "Full Stack Developer",
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Qapita",
    icon: qapita,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Present",
    points: [
      `Developed and delivered a full ﬂedged grant letter template application to ease the exercising grants and shares to the employees with the approval functionality included.`,
      `Developed and delivered listed company feature conﬁguration to facilitate Fair Market Value calculation so that the shareholders can view their tax estimation during exercising their shares`,
      `Modiﬁed the organisation's landing page with a conﬁgurable dashboard feature so that diﬀerent users (of diﬀerent roles) will have diﬀerent layout - customisation`,
      `Segregated the entire organisation's stakeholders into two diﬀerent entities - Individual and Institutional, developed a conﬁguration pipeline so that the admin has full control.`,
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freshworks",
    icon: freshworks,
    iconBg: "#383E56",
    date: "Nov 2020 - Jan 2022",
    points: [
      `Reskinned entire organization's websites and played a major role in rebranding.`,
      `Worked with a team of 20 developers to improve software capabilities for corporate clients`,
      `Aided in training of new junior developers on HTML, Javascript and React platforms.`,
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Tiger Analytics",
    icon: tiger,
    iconBg: "#E6DEDD",
    date: "Jul 2019 - Nov 2020",
    points: [
      `Designed, built and managed a pricing portal as a web developer, which is a system that supports thousands of users, with UI for dashboard and pricing performance graphs.`,
      `Developed an optimizer module from scratch that utilizes data analytics code and yields results based on user inputs.`,
      `Contributed to each project delivery phase (analysis, development, test) in diﬀerent roles.`,
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "Jul 2019 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial: `Deepak is absolutely excellent, his depth of knowledge & his mentorship really meant a lot to us... I would definitely recommend.`,
    name: "Keerthana R",
    designation: "Senior React Developer",
    company: "Tiger Analytics",
    image: "",
  },
  {
    testimonial: `Learning with Deepak has been AWESOME, he makes learning React so easy and approachable, you'll finally feel like you know what's going on!`,
    name: "Aishwarya K",
    designation: "Frontend Developer",
    company: "Gofrugal: Retail ERP Software",
    image: "",
  },
  {
    testimonial: `Very helpful when building my website, I now have my e-commerce store built from scratch.`,
    name: "Vijay Siva",
    designation: "Network Engineer",
    company: "TCS",
    image: "",
  },
];

const projects = [
  {
    name: "The Shop - An ecommerce Application",
    description: `Developed a full ﬂedged ecommerce application with Nextjs, Tailwind CSS, Redux, Redux Saga, Stripe and Firebase (BaaS). This application has all the functionalities a regular ecommerce website has such as Authentication, Product listing, Add to cart, Checkout and Payment.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: furniture,
    source_code_link: "https://furniture-shop-mocha.vercel.app/",
  },
  {
    name: "Netflix - Clone",
    description:
      "Developed a netﬂix clone application with React js and ﬁrebase.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://netflix-clone-20646.web.app/",
  },
  {
    name: "Hulu - Clone",
    description:
      "Web application that enables users to search for various movies and stream them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: hulu,
    source_code_link: "https://hulu-deepaksr-12.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
