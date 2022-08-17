import React from 'react';
import { Slide } from 'react-reveal';
import * as Di from 'react-icons/di';

export const Skill = ({ icon, name }) => {
  return (
    <div className='Skill'>
      <div className='Skill__card'>
        {icon}
        <div className='Skill__card__name'>{name}</div>
      </div>
    </div>
  );
};

function Skills() {
  return (
    <section className='Skills' id='Skills'>
      <div className='container'>
        <Slide left>
          <h2 className='Skills__title'>Skills</h2>
        </Slide>
        <div className='Skills__content'>
          <Slide left>
            <Skill icon={<Di.DiJsBadge />} name='JavaScript' />
          </Slide>
          <Slide left>
            <Skill icon={<Di.DiReact />} name='React' />
          </Slide>
          <Slide left>
            <Skill icon={<Di.DiSass />} name='Sass' />
          </Slide>
          <Slide left>
            <Skill icon={<Di.DiLess />} name='Less' />
          </Slide>
          <Slide left>
            <Skill icon={<Di.DiMongodb />} name='MongoDB' />
          </Slide>
          <Slide left>
            <Skill icon={<Di.DiCss3 />} name='CSS' />
          </Slide>
          <Slide left>
            <Skill icon={<Di.DiHtml5 />} name='HTML' />
          </Slide>
          <Slide left>
            <Skill icon={<Di.DiGit />} name='Git' />
          </Slide>
          <Slide left>
            <Skill icon={<Di.DiBootstrap />} name='Bootstrap' />
          </Slide>
          <Slide left>
            <Skill icon={<Di.DiPhp />} name='PHP' />
          </Slide>
        </div>
      </div>
    </section>
  );
}

export default Skills;
