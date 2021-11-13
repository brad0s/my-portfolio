import React, { useContext } from 'react';
import { Fade } from 'react-reveal';
import profileDark from '../../images/profile-circle.svg';
import profileLight from '../../images/profile-circle-light.svg';
import { aboutData } from '../../data/data';
import { ThemeContext } from '../../context/ThemeContext';

function About() {
  const { title, bio, resume, blog } = aboutData;
  const { theme } = useContext(ThemeContext);
  return (
    <section className="About" id="About">
      <div className="container">
        <div className="About__content">
          <Fade bottom>
            <h2 className="About__content__title">{title}</h2>
            <img
              className="About__content__pic"
              src={theme === 'dark' ? profileDark : profileLight}
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
            <div className="About__bio__btn-group">
              {resume && (
                <a
                  className="About__bio__btn-group__link"
                  target="_blank"
                  rel="noreferrer"
                  href={resume}
                >
                  View my resume
                </a>
              )}
              {blog && (
                <a
                  className="About__bio__btn-group__link"
                  target="_blank"
                  rel="noreferrer"
                  href={blog}
                >
                  Read my blog
                </a>
              )}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default About;
