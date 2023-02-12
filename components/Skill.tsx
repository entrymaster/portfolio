import React from 'react'
import { motion } from 'framer-motion'
import { Skill as SkillType } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    skill: SkillType;
    directionLeft?: boolean;
}

export const Skill = ({ skill, directionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            src={urlFor(skill?.image).url()}
            initial={{
                x: directionLeft ? -100 : 100,
                opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{once:true}}
            className='rounded-full border border-gray-500 object-cover w-20 h-20
            xl:h-32 xl:w-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-[20px] font-semibold xl:text-3xl md:font-bold text-black opacity-100'>{skill?.progress}%</p>
          </div>
        </div>
    </div>
  )
}