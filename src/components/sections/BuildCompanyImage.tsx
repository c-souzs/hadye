import React from 'react'

import featureIcon01 from '../../assets/feature-tile-icon-01.svg';
import featureIcon02 from '../../assets/feature-tile-icon-02.svg';
import featureIcon03 from '../../assets/feature-tile-icon-03.svg';
import featureIcon04 from '../../assets/feature-tile-icon-04.svg';
import featureIcon05 from '../../assets/feature-tile-icon-05.svg';
import featureIcon06 from '../../assets/feature-tile-icon-06.svg';


const dataFeatures = [
    {
        id: 447,
        image: featureIcon01,
        title: 'Distribuição de conteúdo',
        description: 'Fornecermos um canlendário semanal com posts para todas as redes sociais da empresa, aumentando a distribuição do conteúdo pelo SEO.',
    },
    {
        id: 448,
        image: featureIcon02,
        title: 'Fotografia',
        description: 'Através do nosso grupo de fotógrafos, atualizamos as imagens de todos os produtos, aumentando a credibilidade transmitida ao cliente.',
    },
    {
        id: 449,
        image: featureIcon03,
        title: 'Internacionalização',
        description: 'Após a estruturação da empresa no Brasil, utilizamos recursos de tráfego pago para que a empresa realize vendas pela mundo tudo.',
    },
    {
        id: 450,
        image: featureIcon04,
        title: 'Gestão de estoque',
        description: 'Com a nossa ferramenta avalizamos as vendas mensais, gerando um relátorio dos produtos informando quais foram mais vendidos inidicar reposição.',
    },
    {
        id: 451,
        image: featureIcon05,
        title: 'Feedback do cliente',
        description: 'Analisamos as avalições de cada cliente, coletando pontos para melhorar e aumentando a relação empresa-cliente.',
    },
    {
        id: 452,
        image: featureIcon06,
        title: 'Conversão',
        description: 'Uma boa estrtura não gera venda, por isso nossos profissionais ficam ativos em horários de picos de utilização das redes sociais.',
    }
]

const BuildCompanyImage = () => {
  return (
    <section className='py-12 sm:py-20'>
        <div className='max-w-[1128px] h-full mx-auto px-4 sm:px-6'>
            <h2 className='text-zinc-200 dark:text-gray-100 text-3xl font-extrabold text-center mb-4 sm:text-4xl'>Engajamento & conversão 🔥</h2>
            <p className='text-gray-400 dark:text-gray-500 text-xl text-center max-w-[620px] mx-auto'>Quando engajados, os colaboradores, além de cumprirem suas funções com excelência, se sentem mais valorizados e conectados aos objetivos corporativos.</p>
            <div className='pt-12 grid justify-center gap-8 grid-cols-sm-feature sm:grid-cols-2 sm:pt-20 sm:gap-16 lg:grid-cols-3'>
                {
                    dataFeatures.map(feature => {
                        const { id, image, title, description } = feature;
                        return (
                            <div key={id} className='text-center'>
                                <div className='w-16 h-16 bg-purple-600 rounded-circle mx-auto'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3 className='text-zinc-200 dark:text-gray-100 text-2xl font-bold mt-4 mb-2'>{title}</h3>
                                <p className='text-gray-400 dark:text-gray-500 text-lg'>{description}</p>
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