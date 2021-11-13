import { nanoid } from 'nanoid';

export const navData = [
  {
    id: `about`,
    url: `About`,
    text: `About`,
  },
  {
    id: `skills`,
    url: `Skills`,
    text: `Skills`,
  },
  {
    id: `projects`,
    url: `Projects`,
    text: `Projects`,
  },
  {
    id: `experience`,
    url: `Experience`,
    text: `Experience`,
  },
];

export const headData = {
  title: `Braden Wright | Front end Developer`,
  lang: `en`,
  description: `I'm Braden Wright. I am a front end developer. Welcome to my portfolio website!`,
};

export const heroData = {
  header: {
    title: `Hi, I'm `,
    titleAccent: `Braden Wright`,
    subTitle: `and I'm a `,
    subTitleAccent: `front end developer`,
  },
  cta: `Know more!`,
};

export const aboutData = {
  title: `👋, I'm Braden. Nice to meet you!`,
  bio: [
    {
      id: nanoid(),
      paragraph: `Front end developing and making aesthetic, functional user interfaces is my passion. I received my B.S. in Computer Science at Brigham Young University - Hawaii and I enjoy working with javascript and react.`,
    },
    {
      id: nanoid(),
      paragraph: `I love learning and challenging myself and look forward to continuing my journey as a developer - you can read some of my thoughts and experiences on my blog.`,
    },
    {
      id: nanoid(),
      paragraph: `Check out my resume to view all my qualifications!`,
    },
  ],
  resume: `https://docs.google.com/document/d/1JGp1HDxjFUPtvRqjD5t8BuzBNLiFWQBd3irOkpuySWw/preview`,
  blog: `https://brad0s.github.io/`,
};

export const projectsData = [
  {
    id: nanoid(),
    title: `API-connected.`,
    subtitle: `Data driven.`,
    description: `I love the premier league so I used a football data api to create this site. This site demonstrates my skills for creating a website using react, styling with scss and working with apis.`,
    tags: [`react`, `scss`, `api`, `js`],
    image: { filename: `soccer.png`, alt: 'Soccer states website screenshot' },
    repo: `https://github.com/brad0s/epl-webapp`,
    url: `https://soccer-stats-lander.herokuapp.com/`,
  },
  {
    id: nanoid(),
    title: `Responsive Webpages.`,
    subtitle: `Pixel-perfect design.`,
    description: `While working at Martindale-Nolo, one of the projects I helped implement was a new LLC launch path. This was designed to have people use us to create their own LLCs. On this project, I worked with another front end developer to create the sites with html, less, and js. Our graphic designer handed us the templates and we turned their templates into pixel perfect, mobile first sites.`,
    tags: [`js`, `less`, `php`],
    image: {
      filename: `llc.png`,
      alt: 'Nolo llc builder landing page screenshot',
    },
    repo: ``,
    url: `https://www.nolo.com/lander/entry/llc/llcname`,
  },
  {
    id: nanoid(),
    title: `Landing page.`,
    subtitle: `Mobile first design.`,
    description: `Landing pages are always so elegant and I love how they look. I was inspired by Shopify to recreate their landing page using react, html, js and scss.`,
    tags: [`react`, `scss`],
    image: {
      filename: `skopify.png`,
      alt: 'Ecommerce Landing page screenshot',
    },
    repo: `https://github.com/brad0s/skopify-lander`,
    url: `https://elegant-perlman-a14ab1.netlify.app/`,
  },
];

export const experienceData = [
  {
    id: nanoid(),
    company: `BYU-Hawaii`,
    location: `Laie, HI`,
    jobTitle: `Developer`,
    dates: { start: `Feb 2020`, end: `Feb 2021` },
  },
  {
    id: nanoid(),
    company: `Martindale-Nolo`,
    location: `Pleasanton, CA`,
    jobTitle: `Front End Developer Intern`,
    dates: { start: `Oct 2019`, end: `Feb 2020` },
  },
  {
    id: nanoid(),
    company: `BYU-Hawaii`,
    location: `Laie, HI `,
    jobTitle: `Student Developer`,
    dates: { start: `Dec 2016`, end: `Jun 2019` },
  },
  {
    id: nanoid(),
    company: `Varian Medical Systems`,
    location: `Palo Alto, CA`,
    jobTitle: `Software Developer Intern`,
    dates: { start: `Jun 2017`, end: `Aug 2017` },
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
