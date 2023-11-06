import React from 'react';
import PropTypes from 'prop-types'; 
export default function Skill(props) {
  return (
      <div className='py-3 px-4'>
      <span className='px-0.5'>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  )
}

Skill.propTypes = { 
  skill: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired
}; 


