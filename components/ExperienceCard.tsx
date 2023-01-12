import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[330px] md:w-[600px] xl:[900px] snap-center bg-[#292929] p-[20px] md:opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
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
            src='https://cdn.sanity.io/images/ltuexkre/production/9498d51c38123b1af0bdf52739ed7e4afe287244-3083x3222.jpg'
            alt='company logo'
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-2xl md:text-3xl font-light'>Mobile Application Engineer</h4>
            <p className='font-semibold text-1xl md:text-2xl mt-1'>BINARYVEDA</p>
            <div className='flex space-x-2 my-2'>
                <img
                    className='h-10 w-10 rounded-full'
                    src='https://cdn-icons-png.flaticon.com/512/5968/5968242.png'
                />
                <img
                    className='h-10 w-10 rounded-full'
                    src='https://cdn-icons-png.flaticon.com/512/5968/5968242.png'
                />
                <img
                    className='h-10 w-10 rounded-full'
                    src='https://cdn-icons-png.flaticon.com/512/5968/5968242.png'
                />
            </div>
            <p className='uppercase py-5 text-gray-300'>Aug 2022 - Current</p>
            <ul className='list-disc space-y-4 ml-5 text-sm'>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </li>
                <li>At dolorum vero, nisi excepturi fugiat ipsum et nesciunt  </li>
                <li>doloribus, neque, enim molestias quos quam oluta tenetur consequatur.</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                {/* <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li> */}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard