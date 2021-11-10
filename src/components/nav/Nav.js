import React from 'react';
import company from '../../images/bw-logo-white.svg';
import { IoMdMenu } from 'react-icons/io';

function Nav() {
  return (
    <nav className="Nav">
      <a href="#" className="Nav__brand">
        <img
          className="Nav__brand__logo"
          src={company}
          alt="Personal logo"
          width="30px"
          height="30px"
        />
      </a>
      <button className="Nav__toggler">
        <IoMdMenu className="Nav__toggler__icon" />
      </button>
      <div className="Nav__navbar">
        <ul className="Nav__navbar__list">
          <li className="Nav__navbar__list__item">
            <a className="Nav__navbar__list__item__link" href="#">
              About
            </a>
          </li>
          <li className="Nav__navbar__list__item">
            <a className="Nav__navbar__list__item__link" href="#">
              Skills
            </a>
          </li>
          <li className="Nav__navbar__list__item">
            <a className="Nav__navbar__list__item__link" href="#">
              Projects
            </a>
          </li>
          <li className="Nav__navbar__list__item">
            <a className="Nav__navbar__list__item__link" href="#">
              Experience
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
