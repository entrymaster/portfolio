import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

const projects = [1,2,3,4,5];

export const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full
      justify-evenly mx-auto items-center z-0'
    >
        <h3 className='absolute top-20 ml-5 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden
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
                  src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
                  alt="project" 
                />
                <div className='space-y-10 px-5 md:px-10 max-w-5xl'>
                  <h4 className='text-2xl md:text-3xl font-semibold text-center'>Crop Recommendation System</h4>
                  <h6 className='text-center md:text-left'>Netflix 2.0 app that has a Log In and Log Out Authentication with Google. It has a beautiful Home Screen with all the movies looking just like Netflix. There is also a subscription page where you can see your active monthly subscription. We also use Stripe Payments for the monthly Netflix Subscriptions!</h6>
                </div>
              </div>
            ))
          }

        </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12' />
    </motion.div>
  )
}