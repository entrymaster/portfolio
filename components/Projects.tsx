import { motion } from 'framer-motion';
import React from 'react'
import { urlFor } from '../sanity';
import { Project } from '../typings';

type Props = {
  projects: Project[];
}

export const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full
      justify-evenly mx-auto items-center z-0'
    >
        <h3 className='absolute top-20 ml-5 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
        <div className='h-full relative w-full flex overflow-x-scroll overflow-y-hidden
        snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 p-10'>
          {
            projects.map((project, index) => (
              <div className='w-screen max-h-screen flex-shrink-0 flex-col space-y-5
              justify-center items-center flex snap-center' key={index}>
                <motion.img
                  initial={{
                    y: -200,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1.2
                  }}
                  className='md:w-[480px] w-[300px]'
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  src={urlFor(project?.image).url()}
                  alt="project" 
                />
                <div className='space-y-10 px-5 md:px-10 max-w-5xl'>
                  <h4 className='text-2xl md:text-3xl font-semibold text-center'>{project?.title}</h4>
                  <h6 className='text-center md:text-left'>{project?.summary}</h6>
                </div>
              </div>
            ))
          }

        </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12' />
    </motion.div>
  )
}