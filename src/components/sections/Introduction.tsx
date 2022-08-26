import React from 'react'

import Link from '../elements/Link'
import Description from '../elements/Description';

import companyEnvironment from '../../assets/company-environment.jpg';

const Introduction = () => {
    return (
        <section className='pt-20'>
            <div className='max-w-[960px] w-full px-6 mx-auto'>
                <div>
                    <h1 className='text-4xl text-zinc-200 dark:text-gray-100 font-extrabold text-center mb-4 sm:text-5xl'> <p className='text-purple-600 inline-block'>Hadye</p>, leve suas vendas ao <p className='text-purple-600 inline-block'>topo</p>🚀</h1>
                    <Description 
                        text='Atráves de estudos, aplicamos estratégias de vendas e tráfego pago para atrair mais pessoas, aumentando conversão de vendas.'
                        mostStyles='mb-8'
                    />
                    <div className='flex gap-4 flex-col justify-center items-center sm:flex-row'>
                        <Link href='/' type='purple' text='Entrar em contato' mostStyles='max-w-[280px] w-full py-[11px] px-[31px] sm:w-fit'/>
                        <Link href='/' target='_blank' type='neutral' text='Nossos resultados' mostStyles='max-w-[280px] w-full py-[11px] px-[31px] sm:w-fit'/>
                    </div>
                </div>
                <div className='mt-12 rounded block relative'>
                    <img src={companyEnvironment} alt="Company video" className='max-h-[508px] w-full rounded'/>
                    <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10'/>
                </div>
            </div>
        </section>
    ) 
}

export default Introduction