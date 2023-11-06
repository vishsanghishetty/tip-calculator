import React from 'react'
import Skill from './Skill'

export default function SkillList() {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <Skill  key={1} skill="React" emoji="💪"/>
      <Skill key={2} skill="HTML+CSS" emoji="💪"/>
      <Skill key={3} skill="JavaScript" emoji="💪"/>
      <Skill key={4} skill="Svelte" emoji="👶"/>
    </div>
  )
}
