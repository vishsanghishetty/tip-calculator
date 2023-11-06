import React from 'react'
import Avatar from './Avatar';
import Intro  from './Intro';
import SkillList from './SkillList';


export default function Card() {
  return (
      <div>
          <Avatar />   
          <Intro /> 
          <SkillList/>
      </div>
  )
}
