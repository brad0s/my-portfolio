import React from 'react';
import { Fade, Slide } from 'react-reveal';
import { experienceData } from '../../data/data';

const WorkItem = ({ work }) => {
  const { company, location, jobTitle, dates } = work;

  return (
    <Fade top>
      <li className='WorkItem'>
        <div className='WorkItem__content'>
          <p className='WorkItem__content__title'>{jobTitle}</p>
          <p className='WorkItem__content__dates'>
            {dates.start} - {dates.end}
          </p>
          <p className='WorkItem__content__company'>{company}</p>
          <p className='WorkItem__content__location'>{location}</p>
        </div>
      </li>
    </Fade>
  );
};

function Experience() {
  return (
    <section className='Work' id='Experience'>
      <div className='container'>
        <Fade top>
          <h2 className='Work__title'>Experience</h2>
        </Fade>

        <ol className='Work__timeline'>
          {experienceData.map((item) => (
            <WorkItem work={item} key={item.id} />
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
