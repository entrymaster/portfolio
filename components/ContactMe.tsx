import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

export const ContactMe = (props: Props) => {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        window.location.href = `mailto:ayushsrivastavaayu@gmail.com?subject=${data.subject}&body=Hi, I'm ${data.name}. ${data.message}
        (${data.email})`
    };

  return (
    <div className='md:h-screen h-[600px] flex relative text-center md:text-left flex-col md:flex-row
    justify-evenly mx-auto items-center px-10'>
        <h3 className='absolute md:top-20 -top-5 ml-5 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
        <div className='flex flex-col space-y-3 md:space-y-5'>
            <h4 className='text-[20px] font-semibold text-center'>
                I have got what you need. <br className='md:hidden' />
                <span className='decoration-[#F7AB0A]/80 underline'>Let&apos;s Talk</span>
            </h4>
            <div className='space-y-3 md:space-y-5'>
                <div className='flex items-center space-x-3 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-6 w-6 animate-pulse' />
                    <p className='text-[20px]'>+91 7007030012</p>
                </div>

                <div className='flex items-center space-x-3 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-6 w-6 animate-pulse' />
                    <p className='text-[20px]'>ayushsrivastavaayu@gmail.com</p>
                </div>

                <div className='flex items-center space-x-3 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-6 w-6 animate-pulse' />
                    <p className='text-[20px]'>Lucknow, India</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-full mx-auto'>
                <div className='flex md:space-x-2 flex-col md:flex-row'>
                    <input {...register('name')} placeholder='Name' className='contactInput mb-2 md:mb-0' type="text"/>
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>
                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                <textarea {...register('message')} placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-[#F7AB0A] py-4 px-10 rounded-md text-black font-bold'>Submit</button>
            </form>
        </div>
    </div>
  )
}