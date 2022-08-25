import React from 'react'

import featureIcon01 from '../assets/feature-tile-icon-01.svg';
import featureIcon02 from '../assets/feature-tile-icon-02.svg';
import featureIcon03 from '../assets/feature-tile-icon-03.svg';
import featureIcon04 from '../assets/feature-tile-icon-04.svg';
import featureIcon05 from '../assets/feature-tile-icon-05.svg';
import featureIcon06 from '../assets/feature-tile-icon-06.svg';


const dataFeatures = [
    {
        id: 447,
        image: featureIcon01,
        title: 'Roubust Worflw',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat',
    },
    {
        id: 448,
        image: featureIcon02,
        title: 'Roubust Worflw',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat',
    },
    {
        id: 449,
        image: featureIcon03,
        title: 'Roubust Worflw',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat',
    },
    {
        id: 450,
        image: featureIcon04,
        title: 'Roubust Worflw',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat',
    },
    {
        id: 451,
        image: featureIcon05,
        title: 'Roubust Worflw',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat',
    },
    {
        id: 452,
        image: featureIcon06,
        title: 'Roubust Worflw',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat',
    }
]

const BuildCompanyImage = () => {
  return (
    <section className='py-20'>
        <div className='max-w-[1128px] h-full mx-auto px-4 sm:px-6'>
            <h2 className='text-gray-100 text-3xl font-extrabold text-center mb-4'>Build up whole picture</h2>
            <p className='text-gray-500 text-xl text-center max-w-[620px] mx-auto'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</p>
            <div className='pt-20 grid justify-center gap-16 grid-cols-sm-feature sm:grid-cols-2 lg:grid-cols-3'>
                {
                    dataFeatures.map(feature => {
                        const { id, image, title, description } = feature;
                        return (
                            <div key={id} className='text-center'>
                                <div className='w-16 h-16 bg-purple-600 rounded-circle mx-auto'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3 className='text-gray-100 text-2xl font-bold mt-4 mb-2'>{title}</h3>
                                <p className='text-gray-500 text-lg'>{description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default BuildCompanyImage