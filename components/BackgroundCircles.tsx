import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
    initial={{
        opacity: 0,
    }}
    animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
    }}
    transition={{
        duration: 2.5
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#3d3d3d] rounded-full h-[120px] w-[120px] mt-50 animate-ping lg:h-[150px] lg:w-[150px]' />
        <div className='absolute border border-[#333333] rounded-full h-[180px] w-[180px] mt-50 lg:h-[250px] lg:w-[250px]' />
        <div className='absolute border border-[#333333] rounded-full h-[250px] w-[250px] mt-50 lg:h-[400px] lg:w-[400px]' />
        <div className='rounded-full border border-[#F7AB0A] opacity-20
        h-[300px] w-[300px] absolute mt-50 animate-pulse lg:h-[500px] lg:w-[500px]' />
        <div className='absolute border border-[#333333] rounded-full h-[360px] w-[360px] mt-50 lg:h-[625px] lg:w-[625px]' />
    </motion.div>
  )
}