import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export const About = (props: Props) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.2}} 
    className='h-screen flex flex-col relative text-center
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 ml-5 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img
            initial={{
                x: -200,
                opacity:0
            }}
            whileInView={{x:0, opacity:1}}
            transition={{
                duration: 1.2,
            }}
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:96 xl:w-[475px] xl:h-[570px]'
            // viewport={{once: true}}
            src='https://i.ibb.co/rk0VFt6/33-BCC6-C2-1-D74-4282-8-CA5-7-A8-B5130-AB28.jpg'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
            <p className='text-base'>Hardworking College Student with excellent problem-solving skills and ability to perform well in a team.
                I&apos;m passionate about writing efficient code and learning new technologies.</p>
        </div> 
    </motion.div>
  )
}