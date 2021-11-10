import React from 'react';
import { experienceData } from '../../data/data';

const WorkItem = ({ work }) => {
  const { company, location, jobTitle, dates, info } = work;
  console.log(info);
  return (
    <li className="WorkItem">
      <div className="WorkItem__content">
        <p className="WorkItem__content__title">{jobTitle}</p>
        <p className="WorkItem__content__dates">
          {dates.start} - {dates.end}
        </p>
        <p className="WorkItem__content__company">{company}</p>
        <p className="WorkItem__content__location">{location}</p>

        {/* <ul>
        {info.map((item) => (
          <li>{item.point}</li>
        ))}
      </ul> */}
      </div>
    </li>
  );
};

function Experience() {
  return (
    <section className="Work">
      <div className="container">
        <h2 className="Work__title">Experience</h2>
        <ol className="Work__timeline">
          {experienceData.map((item) => (
            <WorkItem work={item} key={item.id} />
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
