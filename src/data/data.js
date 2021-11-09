import { nanoid } from 'nanoid';

export const headData = {
  title: `Braden Wright | Frontend Developer`,
  lang: `en`,
  description: `I'm Braden Wright. I am a frontend developer. Welcome to my website!`,
};

export const heroData = {
  header: {
    title: `Hi, I'm `,
    titleAccent: `Braden Wright`,
    subTitle: `I'm a `,
    subTitleAccent: `frontend developer`,
  },
  cta: `Know more!`,
};

export const aboutData = {
  title: `👋, I'm Braden. Nice to meet you!`,
  bio: [
    {
      id: nanoid(),
      paragraph: `I am an enthusiastic junior developer who has years of experience developing on the frontend. I enjoy working with javascript and javascript frontend frameworks like react. I have worked with java and php on the backend and used frameworks like spring and laravel. Most of my time has been spent at BYU-Hawaii where I worked a lot with CMSs.`,
    },
    {
      id: nanoid(),
      paragraph: `I enjoy learning new things and working with people who like to push each other to become better. I can put my head down and put in the work in order to deliver what is expected of me.`,
    },
    {
      id: nanoid(),
      paragraph: `Check out my resume to view all my qualifications!`,
    },
  ],
  resume: `https://docs.google.com/document/d/1JGp1HDxjFUPtvRqjD5t8BuzBNLiFWQBd3irOkpuySWw/preview`,
};

export const projectsData = [
  {
    id: nanoid(),
    title: `API-connected.`,
    subtitle: `Data driven.`,
    description: `I love the premier league so I used a football data api to create this site. This site demonstrates my skills for creating a website using react, styling with scss and working with apis.`,
    tags: [`react`, `scss`, `api`],
    image: ``,
    repo: `https://github.com/brad0s/epl-webapp`,
    url: `https://soccer-stats-lander.herokuapp.com/`,
  },
  {
    id: nanoid(),
    title: `Landing page.`,
    subtitle: `Pixel-perfect design.`,
    description: `While working at Martindale-Nolo, one of the projects I helped implement was a new LLC launch path. This was designed to have people use us to create their own LLCs. On this project, I worked with another frontend developer to create the sites with html, less, and js. Our graphic designer handed us the templates and we turned their templates into pixel perfect, mobile first sites.`,
    tags: [`js`, `less`, `php`],
    image: ``,
    repo: ``,
    url: `https://www.nolo.com/lander/entry/llc/llcname`,
  },
  {
    id: nanoid(),
    title: `Responsive Webpages.`,
    subtitle: `Mobile first design.`,
    description: `Landing pages are always so elegant and I love how they look. I was inspired by Shopify to recreate their landing page using react, html, js and scss.`,
    tags: [`react`, `scss`],
    image: ``,
    repo: `https://github.com/brad0s/landers/tree/main/src/components/shopify`,
    url: ``,
  },
];

export const experienceData = [
  {
    id: nanoid(),
    company: `BYU-Hawaii`,
    location: `Laie, HI`,
    jobTitle: `Developer`,
    dates: { start: `Feb 2020`, end: `Feb 2021` },
    info: [
      { point: `Created websites based on business needs using our CMS.` },
      {
        point: `Developed and pioneered new technology for creating websites and apps to increase productivity.`,
      },
      {
        point: `Integrated old systems with new ones to increase usability and security`,
      },
    ],
  },
  {
    id: nanoid(),
    company: `Martindale-Nolo`,
    location: `Pleasanton, CA`,
    jobTitle: `Frontend Dev Intern`,
    dates: { start: `Oct 2019`, end: `Feb 2020` },
    info: [
      {
        point: `Created responsive, mobile-first web applications using HTML5, CSS3, and JS following design specs.`,
      },
      {
        point: `Developed pixel-perfect designs and deployed projects to generate leads and boost sales.`,
      },
      {
        point: `Used Agile methodology to collaborate with teams on multiple projects and deliver projects on deadlines.`,
      },
    ],
  },
  {
    id: nanoid(),
    company: `BYU-Hawaii`,
    location: `Laie, HI `,
    jobTitle: `Student Developer`,
    dates: { start: `Dec 2016`, end: `Jun 2019` },
    info: [
      {
        point: `Created a full-stack Java application using Spring MVC architecture for web development and utilized the CRUD design pattern.`,
      },
      {
        point: `The application managed 3,500+ students’ tests for every class each semester.`,
      },
      {
        point: `Automated tasks and generated custom reports to improve productivity.`,
      },
      {
        point: `Worked closely with stakeholders for the needs and designs and executed those plans.`,
      },
    ],
  },
  {
    id: nanoid(),
    company: `Varian Medical Systems`,
    location: `Palo Alto, CA`,
    jobTitle: `Software Developer Intern`,
    dates: { start: `Jun 2017`, end: `Aug 2017` },
    info: [
      {
        point: `Utilized Bootstrap, JavaScript and Angular.js to create the application from scratch and finished within 3 months.`,
      },
      {
        point: `Majority of duties included front-end development and Quality Assurance testing.`,
      },
      {
        point: `Optimize and improve front-end performance by optimizing files.`,
      },
    ],
  },
];

export const educationData = [
  // {
  //   id: nanoid(),
  //   name: `BYU-Hawaii`,
  //   location: `Laie, HI`,
  //   degree: `B.S.`,
  //   major: `Computer Science`,
  //   date: {
  //     start: `Aug 2016`,
  //     end: `Jun 2019`,
  //   },
  // },
  // {
  //   id: nanoid(),
  //   name: `Utah Valley Univeristy`,
  //   location: `Orem, UT`,
  //   degree: `A.S.`,
  //   major: `Pre-Professional`,
  //   date: {
  //     start: `Aug 2015`,
  //     end: `Jun 2016`,
  //   },
  // },
];

export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: `Twitter`,
      url: `https://twitter.com/Braden23763605`,
    },
    {
      id: nanoid(),
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/wright-braden/',
    },
    {
      id: nanoid(),
      name: 'Github',
      url: 'https://github.com/brad0s',
    },
  ],
  copyright: 'Braden Wright',
};
