import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from './Skill'
import { Skill as SkillType } from '../typings'

type Props = {
  skills: SkillType[]
}

export const Skills = ({ skills }: Props) => {
  
  const COLS = skills.length/3

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative flex-col text-center md:text-left
    xl:flex-row xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover over a skill for current proficiency
        </h3>

        <div className={`grid grid-cols-4 gap-3 md:gap-5 pt-20`}>
         {
          skills?.slice(0, COLS).map( skill => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))
         }
         {
          skills?.slice(COLS, 2*COLS).map( skill => (
            <Skill key={skill._id} skill={skill} />
          ))
         }
         {
          skills?.slice(2*COLS, skills.length).map( skill => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))
         }
        </div>

    </motion.div>
  )
}