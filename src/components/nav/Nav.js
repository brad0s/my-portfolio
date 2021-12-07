import React, { useState, useEffect, useContext } from 'react';
import companyDark from '../../images/bw-logo-white.svg';
import companyLight from '../../images/bw-logo.svg';
import { ThemeContext } from '../../context/ThemeContext';
import { navData } from '../../data/data';

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <div className="Theme-switch">
      <input
        type="checkbox"
        id="switch"
        name="switch"
        className="Theme-switch__checkbox"
        onChange={() => toggleTheme()}
      />

      <label
        htmlFor="switch"
        className={
          theme === 'dark'
            ? 'Theme-switch__switch'
            : 'Theme-switch__switch Theme-switch__switch--light'
        }
      ></label>
    </div>
  );
};

function Nav() {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState();
  const [scrollNav, setscrollNav] = useState(false);
  const { theme, setTheme, nextTheme } = useContext(ThemeContext);
  const [NAVBAR_OFFSET] = useState(50);

  const handleOnBlur = (e) => {
    if (e.relatedTarget != null && !e.relatedTarget.className.includes('Nav')) {
      setExpanded(false);
    }
  };

  const toggleTheme = () => {
    window.sessionStorage.setItem('bradenTheme', nextTheme);
    setTheme(nextTheme);
  };

  useEffect(() => {
    const onScroll = (e) => {
      const scroll = e.target.documentElement.scrollTop;
      if (scroll > 450) {
        setscrollNav(true);
      } else {
        setscrollNav(false);
        setActive('home');
      }

      navData.forEach((item) => {
        const section = document.getElementById(item.url);
        const sectionTop = section.offsetTop;
        if (scroll >= sectionTop - NAVBAR_OFFSET) {
          setActive(item.id);
        }
      });
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <nav className={scrollNav ? 'Nav Nav--scroll' : 'Nav'}>
      <a href="#Home" className="Nav__brand" aria-label="Go to Home section">
        <img
          className="Nav__brand__logo"
          src={theme === 'dark' ? companyDark : companyLight}
          alt="Personal logo"
        />
      </a>
      <button
        className="Nav__toggler"
        onClick={() => setExpanded(!expanded)}
        onBlur={(e) => handleOnBlur(e)}
        aria-label="Expand navigation"
        aria-controls="Nav__navbar"
        aria-expanded={expanded}
      >
        <div
          className={
            expanded
              ? 'Nav__toggler__icon Nav__toggler__icon--expanded'
              : 'Nav__toggler__icon'
          }
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div
        id="Nav__navbar"
        className={
          expanded ? `Nav__navbar Nav__navbar--expanded` : `Nav__navbar`
        }
      >
        <ul className="Nav__navbar__list">
          {navData.map((link) => {
            const { id, url, text } = link;
            return (
              <li className="Nav__navbar__list__item" key={id}>
                <a
                  className={
                    id === active
                      ? 'Nav__navbar__list__item__link Nav__navbar__list__item__link--active'
                      : 'Nav__navbar__list__item__link'
                  }
                  href={`#${url}`}
                  onClick={() => {
                    setExpanded(false);
                  }}
                  aria-label={`Go to ${text} section`}
                >
                  {text}
                </a>
              </li>
            );
          })}
          <li className="Nav__navbar__list__item">
            <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
