import React from 'react';
// import heroImg from '../../images/topography.svg';
import { heroData } from '../../data/data';

function Hero() {
  const { title, title2, titleAccent, cta } = heroData;
  return (
    <section className="Hero">
      <div className="Hero__content">
        <h1 className="Hero__content__title">
          {title}
          <br />
          {title2}{' '}
          <span className="Hero__content__title--accent">{titleAccent}</span>
        </h1>
        <button className="Hero__content__button">{cta}</button>
      </div>
    </section>
  );
}

export default Hero;
