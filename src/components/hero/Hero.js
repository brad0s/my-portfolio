import React from 'react';
import Fade from 'react-reveal';
import heroImg from '../../images/top.svg';
import { heroData } from '../../data/data';

function Hero() {
  const { header, cta } = heroData;
  return (
    <section className="Hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="container">
        <div className="Hero__content">
          <Fade bottom duration={1000} delay={500}>
            <h1 className="Hero__content__title">
              {header.title}
              <span className="Hero__content__title--underline">
                {header.titleAccent}
              </span>
              .
              <br />
              {header.subTitle}{' '}
              <span className="Hero__content__title--accent">
                {header.subTitleAccent}
              </span>
              .
            </h1>
          </Fade>
          <Fade bottom duration={1000} delay={1000}>
            <button className="Hero__content__button">{cta}</button>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Hero;
