import { nanoid } from 'nanoid';

export const headData = {
  title: `Braden Wright | Frontend Developer`,
  lang: `en`,
  description: `I'm Braden Wright. I am a frontend developer. Welcome to my website!`,
};

export const heroData = {
  title: `Hi, I'm Braden Wright.`,
  title2: `I'm a `,
  titleAccent: `frontend developer.`,
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
