import React from 'react';
import formatDate from './../formatDate';

const Education = props => {
  const {schools} = props

  return (

    <div className="block">
      <span className="title">Education</span>
      {schools.map(school =>{
        return (
          <div className="job">
            <div className="company">{school.institution}</div><div className="employment-term">{formatDate(school.startDate)} - {formatDate(school.endDate)}</div>
            <div className="job-title">{`${school.studyType} of ${school.area}`}</div>
          </div>
        )
      })}
    </div>

  )
}

export default Education;
