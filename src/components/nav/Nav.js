import React, { useState, useEffect } from 'react';
import company from '../../images/bw-logo-white.svg';
import { IoMdMenu } from 'react-icons/io';
import { navData } from '../../data/data';

function Nav() {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState();
  const [scrollNav, setscrollNav] = useState(false);
  const [sections] = useState(document.getElementsByTagName('section'));

  const handleOnBlur = (e) => {
    if (e.relatedTarget != null && !e.relatedTarget.className.includes('Nav')) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    const onScroll = (e) => {
      const scroll = e.target.documentElement.scrollTop;
      if (scroll > 450) {
        setscrollNav(true);
      } else {
        setscrollNav(false);
      }

      Array.from(sections).forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scroll >= sectionTop - 10) {
          setActive(section.id.toLocaleLowerCase());
        }
      });
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <nav className={scrollNav ? 'Nav Nav--scroll' : 'Nav'}>
      <a href="#Home" className="Nav__brand">
        <img
          className="Nav__brand__logo"
          src={company}
          alt="Personal logo"
          width="30px"
          height="30px"
        />
      </a>
      <button
        className="Nav__toggler"
        onClick={() => setExpanded(!expanded)}
        onBlur={(e) => handleOnBlur(e)}
      >
        <IoMdMenu className="Nav__toggler__icon" />
      </button>
      <div
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
                    setActive(id);
                    setExpanded(false);
                  }}
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
