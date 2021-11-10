import React from 'react';
import { Fade } from 'react-reveal';
import { educationData } from '../../data/data';

const School = ({ school }) => {
  const { name, location, degree, major, date } = school;
  return (
    <div className="School" id="Education">
      <Fade bottom>
        <p className="School__name">{name}</p>
        <p className="School__dates">
          {date.start} - {date.end}
        </p>
        <p className="School__major">
          {degree} {major}
        </p>
        <p className="School__location">{location}</p>
      </Fade>
    </div>
  );
};

function Education() {
  return (
    <>
      {educationData.length > 0 && (
        <section className="Education">
          <div className="container">
            <Fade bottom>
              <h2 className="Education__title">Education</h2>
            </Fade>
            <div className="Education__content">
              {educationData.map((school) => (
                <School school={school} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Education;
