import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className='flex flex-col self-end rounded-lg items-center space-y-7 flex-shrink-0
    w-[330px] h-[600px] md:w-[600px] snap-center bg-[#292929] p-[20px] md:opacity-75 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity:1, y: 0 }}
            viewport={{once:true}}
            className='w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px]
            object-cover object-center'
            src={urlFor(experience?.companyImage).url()}
            alt='company logo'
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-2xl md:text-3xl font-light'>{experience?.jobTitle}</h4>
            <p className='font-semibold text-1xl md:text-2xl mt-1'>{experience?.company}</p>
            <div className='flex space-x-2 my-2'>
                {
                    experience.technologies && experience.technologies.map((technology) => (
                        <img
                            key={technology._id}
                            className='h-10 w-10 rounded-full'
                            src={urlFor(technology.image).url()}
                        />
                    ))
                }
            </div>
            <p className='uppercase py-5 text-gray-300'>{new Date(experience?.dateStarted).toDateString()} 
            - {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience?.dateEnded).toDateString()}</p>
            <ul className='list-disc space-y-4 ml-5 pb-5 text-xs md:text-[15px]'>
                {experience.points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard