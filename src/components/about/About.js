import React from 'react';
import profile from '../../images/profile-circle.svg';
import { aboutData } from '../../data/data';

function About() {
  const { title, bio, resume } = aboutData;
  return (
    <section className="About">
      <div className="container">
        <div className="About__content">
          <h2 className="About__content__title">{title}</h2>
          <img
            className="About__content__pic"
            src={profile}
            alt="Personal Avatar"
          />
        </div>
        <div className="About__bio">
          {bio.map((item) => (
            <p className="About__bio__text" key={item.id}>
              {item.paragraph}
            </p>
          ))}
          <a className="About__bio__resume" href={resume}>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
