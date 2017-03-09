import React from 'react';

const Skills = props => {
  const { skills } = props
  return (
    <div className="block">
      <div className="title">Skills</div>


    {skills.map((skillset, index) => {
      return (
        <div key={index} className="skillset">
          <span className="label-skill">{skillset.name}</span>
          <ul className="list-group">
            {skillset.keywords.map((skill, index) => {
              return <li key={index} className="list-group-item">{skill}</li>
            })}
          </ul>
        </div>
      )
    })}



    <div className="clear"></div>
    </div>
  )
}

export default Skills;


// "skills": [{
//   "name": "Network Administration",
//   "level": "Professional",
//   "keywords": [
//     "DHCP",
//     "DNS",
//     "Server administration",
//     "Fail over clustering",
//     "Exchange administration"
//   ]
// }, {
