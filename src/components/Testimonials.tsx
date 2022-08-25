import React from 'react'

import quoteImage from '../assets/quote.svg';

const dataTestimonials = [
    {
        id: 555,
        client: 'Roman Level',
        projectName: 'AppName',
        descripiton: '— Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.'
    },
    {
        id: 556,
        client: 'Roman Level',
        projectName: 'AppName',
        descripiton: '— Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.'
    },
    {
        id: 557,
        client: 'Roman Level',
        projectName: 'AppName',
        descripiton: '— Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.'
    },
]

const Testimonials = () => {
  return (
    <section className='pt-8'>
        <div className='max-w-[1128px] h-full mx-auto px-4 sm:px-6 before:block before:h-[1px] before:bg-zinc-200'>
            <h1 className='text-gray-100 text-3xl font-extrabold text-center mb-4'>Customer testimonials</h1>
            <p className='text-gray-500 text-xl text-center max-w-[620px] mx-auto'>Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
            <div className='flex flex-wrap justify-center grid-cols-1 gap-y-6 gap-x-8 mt-20'>
                {
                    dataTestimonials.map(testimonial => {
                        const { id, descripiton, client, projectName } = testimonial;
                        return (
                            <div key={id} className='bg-zinc-200 px-6 py-8 min-w-[300px] max-w-[350px] w-full mx-auto rounded flex-1'>
                                <img src={quoteImage} alt="Quotation client" />
                                <p className='text-lg text-gray-500 mt-4 mb-8'>{descripiton}</p>
                                <div className='text-base text-gray-100 font-semibold'>
                                    <span>{client}</span>
                                    <span className='text-[#717d86] mx-1'>/</span>
                                    <a href='/' className='text-green-500 transition-colors hover:text-[#73efcc]'>{projectName}</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Testimonials