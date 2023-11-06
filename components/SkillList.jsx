import React from 'react'
import Skill from './Skill'
import skills from '../skills'


export default function SkillList() {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {skills.map((skill) => 
        <Skill key={skill.key} skill={skill.skill} level={skill.level} color={skill.color} />        
    )}
    </div>
  )
}
