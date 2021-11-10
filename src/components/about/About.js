import React from 'react';
import { Fade } from 'react-reveal';
import profile from '../../images/profile-circle.svg';
import { aboutData } from '../../data/data';

function About() {
  const { title, bio, resume } = aboutData;
  return (
    <section className="About">
      <div className="container">
        <div className="About__content">
          <Fade bottom>
            <h2 className="About__content__title">{title}</h2>
            <img
              className="About__content__pic"
              src={profile}
              alt="Personal Avatar"
            />
          </Fade>
        </div>
        <div className="About__bio">
          {bio.map((item) => (
            <Fade bottom key={item.id}>
              <p className="About__bio__text">{item.paragraph}</p>
            </Fade>
          ))}
          <Fade bottom>
            <a className="About__bio__resume" href={resume}>
              Resume
            </a>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default About;
