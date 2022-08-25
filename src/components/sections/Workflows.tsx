import classNames from 'classnames';
import React from 'react'

import worflowImage01 from '../../assets/features-split-image-01.png';
import worflowImage02 from '../../assets/features-split-image-02.png';
import worflowImage03 from '../../assets/features-split-image-03.png';

const dataWorflows = [
    {
        id: 777,
        image: worflowImage01,
        subtitle: 'Organização por plataforma',
        title: 'Sistemas automatizados',
        description: 'As plataformas de automação de marketing digital são ferramentas usadas na comunicação com consumidores que, de alguma forma, interagiram com a sua marca. Por meio delas, é possível analisar o engajamento do público e criar ações personalizadas, que ajudam a otimizar tempo e evitar gastos desnecessários.'
    },
    {
        id: 778,
        image: worflowImage02,
        subtitle: 'Comunicação e relatórios',
        title: 'Relação de setores',
        description: 'A comunicação no ambiente de trabalho faz toda a diferença no engajamento da equipe e nos resultados das startups. Quanto mais ágil for o dia a dia da empresa, mais eficiente deve ser o fluxo de informação e o diálogo entre as diferentes áreas.'
    },
    {
        id: 779,
        image: worflowImage03,
        subtitle: 'Nossos equipamentos',
        title: 'Organização no ambiente',
        description: 'A organização do ambiente de trabalho impacta positivamente o seu desenvolvimento e a sua produtividade diária. Já a desorganização costuma gerar atrasos e situações que prejudicam o seu desempenho.'
    },
]

const Workflows = () => {
  return (
    <section className='relative overflow-x-hidden'>
        <div className='max-w-[1128px] h-full mx-auto px-4 sm:px-6 before:w-full before:block before:h-[1px] before:bg-zinc-200'>
            <div className='w-full pt-12 sm:pt-20'>
                <h1 className='text-gray-100 text-3xl font-extrabold text-center mb-4 sm:text-4xl'>Nosso fluxo de trabalho 💻</h1>
                <p className='text-gray-500 text-xl text-center max-w-[620px] mx-auto'>Fluxo de trabalho também conhecido como workflow é o modo como os processos são realizados em uma empresa. Ele consiste em atividades realizadas em uma organização a partir de um padrão repetível e sequencial.</p>
                <div className='mt-12'>
                    {
                        dataWorflows.map((worflow, index) => {
                            const { id, subtitle, title, description, image } = worflow;
                            const positionItem = index % 2 === 0;
                            const lastElement = index === dataWorflows.length - 1;
                            
                            return (
                                <div key={id} className={classNames('text-center relative grid grid-cols-1 items-center gap-x-12 gap-y-8 py-8 lg:grid-cols-2 lg:text-left', {'pb-0': lastElement}, 'before:absolute before:hidden lg:before:block before:bottom-0 before:h-[255px] before:w-[385px] before:bg-no-repeat before:bg-center', {'before:right-0 before:translate-x-[275px] before:bg-decoration-workflows-right': positionItem}, {'before:left-0 before:translate-x-[-275px] before:bg-decoration-workflows-left': !positionItem})}>
                                    <div className={classNames({'lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2': !positionItem})}>
                                        <h4 className='text-sm text-purple-600 font-semibold uppercase mb-2'>{subtitle}</h4>
                                        <h3 className='text-3xl text-gray-100 font-bold mb-3'>{title}</h3>
                                        <p className='text-xl text-gray-500'>{description}</p>
                                    </div>
                                    <img src={image} alt={title} className='block w-full max-h-[450px] h-full object-cover rounded relative z-40'/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Workflows