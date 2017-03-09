import React from 'react';
import formatDate from './../formatDate';


const Work = props => {

  const { jobs } = props;
  console.log(jobs)



  return (
    <div className="block">
      <span className="title">Experience</span>
      {jobs.map((job, index) =>{
        return (
            <div key={index} className="job">
            <div className="company"><a href={job.website} target="_blank">{job.company}</a></div><div className="employment-term">{formatDate(job.startDate)} - {formatDate(job.endDate)}</div>
            <div className="job-title">{job.position}</div>
            <div className="job-summary">
            {job.summary}
            </div>
            <div className="job-highlights">
              <ul>
                {job.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Work;
