import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { BackgroundCircles } from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Ayush Srivastava",
            "<Developer />",
            "Tech Enthusiast"
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col lg:pt-36 lg:-space-y-[65px] items-center justify-center
    text-center overflow-hidden'>
            <BackgroundCircles />
            <div className='relative -top-[36px] lg:top-[10px]'>
                <img
                    src={'https://i.ibb.co/xs9y62B/ca0cd4e5-bc0e-476f-be49-e0cbd33cdd12.jpg'}
                    alt="Picture of the author"
                    className='relative rounded-full h-[75px] w-[75px] mx-auto object-cover lg:h-[100px] lg:w-[100px]'
                />
                <div className='pt-5'>
                    <h2 className='text-xs uppercase text-gray-500 pb-2 tracking-[10px] lg:tracking-[15px]'>Software Engineer</h2>
                    <h1 className='text-2xl lg:text-4xl font-semibold px-10'>
                        <span className='mr-0.5 italic'>
                            {text}
                        </span>
                        <Cursor cursorColor='#f7ab0a' />
                    </h1>

                    <div className='pt-5'>
                        <Link href="#about">
                            <button className='heroButton'>About</button>
                        </Link>
                        <Link href="#experience">
                            <button className='heroButton'>Experience</button>
                        </Link>
                        <Link href="#skills">
                            <button className='heroButton'>Skills</button>
                        </Link>
                        <Link href="#projects">
                            <button className='heroButton'>Projects</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
