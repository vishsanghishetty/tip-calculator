import React from 'react';
import PropTypes from 'prop-types'; 
export default function Skill({ skill, level, color }) {
  return (
      <div className='py-3 px-4 m-1 rounded-lg' style={{backgroundColor: color}}>
      <span className='px-0.5'>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  )
}

Skill.propTypes = { 
  skill: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}; 


