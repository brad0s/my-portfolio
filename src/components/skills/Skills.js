import React from 'react';
import { Fade } from 'react-reveal';
import * as Di from 'react-icons/di';

export const Skill = ({ icon, name }) => {
  return (
    <div className="Skill">
      <div className="Skill__card">
        {icon}
        <div className="Skill__card__name">{name}</div>
      </div>
    </div>
  );
};

function Skills() {
  return (
    <section className="Skills" id="Skills">
      <div className="container">
        <Fade bottom>
          <h2 className="Skills__title">Skills</h2>
        </Fade>
        <div className="Skills__content">
          <Fade bottom>
            <Skill icon={<Di.DiJsBadge />} name="JavaScript" />
            <Skill icon={<Di.DiReact />} name="React" />
            <Skill icon={<Di.DiSass />} name="Sass" />
            <Skill icon={<Di.DiLess />} name="Less" />
            <Skill icon={<Di.DiMongodb />} name="MongoDB" />
            <Skill icon={<Di.DiCss3 />} name="CSS" />
            <Skill icon={<Di.DiHtml5 />} name="HTML" />
            <Skill icon={<Di.DiGit />} name="Git" />
            <Skill icon={<Di.DiBootstrap />} name="Bootstrap" />
            <Skill icon={<Di.DiNodejsSmall />} name="Node" />
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Skills;
