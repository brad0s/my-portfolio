import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal';
import { ThemeContext } from '../../context/ThemeContext';
import heroImageDark from '../../images/top.svg';
import heroImageLight from '../../images/top-light.svg';
import { heroData } from '../../data/data';

function Hero() {
  const { header, cta } = heroData;
  const { theme } = useContext(ThemeContext);
  const [bgInit, setBgInit] = useState(false);

  useEffect(() => {
    setTimeout(() => setBgInit(true), 500);
  }, []);

  return (
    <section className='Hero' id='Home'>
      <div
        className={`img-bg ${bgInit ? 'show' : ''}`}
        style={{ backgroundImage: `url(${theme === 'dark' ? heroImageDark : heroImageLight})` }}
      ></div>
      <div className='container'>
        <div className='Hero__content'>
          <Fade bottom duration={1000} delay={500}>
            <h1 className='Hero__content__title'>
              {header.title}
              <span className='Hero__content__title--underline'>{header.titleAccent}</span>
              <br />
              {header.subTitle}{' '}
              <span className='Hero__content__title--accent'>{header.subTitleAccent}</span>.
            </h1>
          </Fade>
          <Fade bottom duration={1000} delay={1000}>
            <a href='#About' className='Hero__content__button'>
              {cta}
            </a>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Hero;
