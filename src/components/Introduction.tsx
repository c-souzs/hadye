import React from 'react'
import Link from './Link'

import placeholderVideo from '../assets/video-placeholder.jpg';

const Introduction = () => {

    return (
        <section className='pt-20'>
            <div className='max-w-[944px] px-6 mx-auto'>
                <div>
                    <h1 className='text-4xl text-gray-100 font-extrabold text-center mb-4 sm:text-5xl'>Landing template for <p className='text-purple-600 inline-block'>startups</p></h1>
                    <p className='max-w-[620px] mx-auto text-xl text-gray-500 text-center mb-8'>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                    <div className='flex gap-4 flex-col justify-center items-center sm:flex-row'>
                        <Link href='/started' type='purple' text='Get started' mostStyles='max-w-[280px] w-full py-[11px] px-[31px] sm:w-fit'/>
                        <Link href='/https://www.github.com' target='_blank' type='neutral' text='View in Github' mostStyles='max-w-[280px] w-full py-[11px] px-[31px] sm:w-fit'/>
                    </div>
                </div>
                <img src={placeholderVideo} alt="Company video" className='mt-12 rounded shadow-image block max-w-full cursor-pointer'/>
            </div>
        </section>
    ) 
}

export default Introduction