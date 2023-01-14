import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

export const Skill = ({directionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            src='https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png'
            // initial={{
            //     x: directionLeft ? -100 : 100,
            //     opacity: 0,
            // }}
            // transition={{ duration: 1 }}
            // whileInView={{ opacity: 1, x: 0 }}
            className='rounded-full border border-gray-500 object-cover w-20 h-20
            xl:h-32 xl:w-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-[20px] font-semibold xl:text-3xl md:font-bold text-black opacity-100'>100%</p>
          </div>
        </div>
    </div>
  )
}