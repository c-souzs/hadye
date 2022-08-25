import classNames from 'classnames';
import React from 'react'

import worflowImage01 from '../assets/features-split-image-01.png';
import worflowImage02 from '../assets/features-split-image-02.png';
import worflowImage03 from '../assets/features-split-image-03.png';

const dataWorflows = [
    {
        id: 777,
        image: worflowImage01,
        subtitle: 'Lightning fast workflow',
        title: 'Data-driven insights',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 778,
        image: worflowImage02,
        subtitle: 'Lightning fast workflow',
        title: 'Data-driven insights',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 779,
        image: worflowImage03,
        subtitle: 'Lightning fast workflow',
        title: 'Data-driven insights',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
]

const Workflows = () => {
  return (
    <section className='pt-20'>
        <div className='max-w-[1128px] h-full mx-auto px-4  sm:px-6 before:block before:h-[1px] before:bg-zinc-200'>
            <h1 className='text-gray-100 text-3xl font-extrabold text-center mb-4'>Workflow that just works</h1>
            <p className='text-gray-500 text-xl text-center max-w-[620px] mx-auto'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</p>
            <div className='mt-10'>
                {
                    dataWorflows.map((worflow, index) => {
                        const { id, subtitle, title, description, image } = worflow;
                        // true = alinhando a direita
                        // false = alinhado a esquerda
                        const positionItem = index % 2 === 0;
                        console.log(positionItem);
                        
                        return (
                            <div key={id} className='grid grid-cols-1 items-center gap-x-12 gap-y-8 py-8 lg:grid-cols-2'>
                                <div className={classNames({'lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2': !positionItem})}>
                                    <h4 className='text-sm text-purple-600 font-semibold uppercase mb-2'>{subtitle}</h4>
                                    <h3 className='text-3xl text-gray-100 font-bold mb-3'>{title}</h3>
                                    <p className='text-xl text-gray-500'>{description}</p>
                                </div>
                                <img src={image} alt={title} className='block w-full max-h-[450px] h-full object-cover rounded after:w-[50px] after:h-[50px] after:bg-green-600 after:block'/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Workflows