import React from 'react';
import { educationData } from '../../data/data';

const School = ({ school }) => {
  const { name, location, degree, major, date } = school;
  return (
    <div className="School">
      <p className="School__name">{name}</p>
      <p className="School__dates">
        {date.start} - {date.end}
      </p>

      <p className="School__major">
        {degree} {major}
      </p>
      <p className="School__location">{location}</p>
    </div>
  );
};

function Education() {
  return (
    <>
      {educationData.length > 0 && (
        <section className="Education">
          <div className="container">
            <h2 className="Education__title">Education</h2>
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
