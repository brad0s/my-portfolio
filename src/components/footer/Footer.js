import React from 'react';
import * as Fa from 'react-icons/fa';
import { footerData } from '../../data/data';

function Footer() {
  const { networks, copyright } = footerData;
  return (
    <footer className="Footer">
      <div className="Footer__networks">
        {networks.map((network) => {
          const { name, url } = network;
          const iconName = `Fa${name}`;
          const icon = Fa[iconName];
          return (
            <div className="Network" key={name}>
              <a
                href={url}
                className="Network__link"
                aria-label={`Link to ${name}`}
              >
                {React.createElement(icon) || <Fa.FaShareAltSquare />}
              </a>
            </div>
          );
        })}
      </div>
      <div className="Footer__copyright">
        <p>
          © {new Date().getFullYear()} - {copyright}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
