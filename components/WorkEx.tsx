import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
  experiences: Experience[];
}

export const WorkEx = ({ experiences }: Props) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 2.5 }}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-0 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-[20px] md:top-[50px] ml-5 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
        <div className='w-full md:h-full flex space-x-5 overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 p-10 snap-x snap-mandatory'>
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience._id}
                experience={experience}
              />
            ))}
        </div>
    </motion.div>
  )
}