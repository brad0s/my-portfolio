import React from 'react';
import heroImg from '../../images/top.svg';
import { heroData } from '../../data/data';

function Hero() {
  const { header, cta } = heroData;
  return (
    <section className="Hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="container">
        <div className="Hero__content">
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
          <button className="Hero__content__button">{cta}</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
