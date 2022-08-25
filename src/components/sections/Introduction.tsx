import React from 'react'
import Link from '../elements/Link'

import placeholderVideo from '../../assets/video-placeholder.jpg';

const Introduction = () => {

    return (
        <section className='pt-20'>
            <div className='max-w-[960px] w-full px-6 mx-auto'>
                <div>
                    <h1 className='text-4xl text-gray-100 font-extrabold text-center mb-4 sm:text-5xl'> <p className='text-purple-600 inline-block'>Hadye</p>, leve suas vendas ao <p className='text-purple-600 inline-block'>topo</p>🚀</h1>
                    <p className='max-w-[630px] mx-auto text-xl text-gray-500 text-center mb-8'>Atráves de estudos, aplicamos estratégias de vendas e tráfego pago para atrair mais pessoas, aumentando conversão de vendas.</p>
                    <div className='flex gap-4 flex-col justify-center items-center sm:flex-row'>
                        <Link href='/' type='purple' text='Entrar em contato' mostStyles='max-w-[280px] w-full py-[11px] px-[31px] sm:w-fit'/>
                        <Link href='/' target='_blank' type='neutral' text='Nossos resultados' mostStyles='max-w-[280px] w-full py-[11px] px-[31px] sm:w-fit'/>
                    </div>
                </div>
                <img src={placeholderVideo} alt="Company video" className='mt-12 rounded shadow-image block max-w-full cursor-pointer'/>
            </div>
        </section>
    ) 
}

export default Introduction