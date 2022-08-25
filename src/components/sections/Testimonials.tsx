import React from 'react'

import quoteImage from '../../assets/quote.svg';

const dataTestimonials = [
    {
        id: 555,
        client: 'Alysson Souza',
        projectName: 'Sucos Vale',
        descripiton: '— Parabenizo toda a Equipe da Hadye, por serem sempre extremamente atenciosos e profissionais, não é surpresa que dessa forma nos trazem bons resultados para a Sucos Vale, ficamos tranquilos em deixar as campanhas nas mãos de vocês pois sabemos que sempre nos apresentam ótima performance e bons resultados. Indico de olhos fechados!.'
    },
    {
        id: 556,
        client: 'Gabrielly Andrade',
        projectName: 'GA - Calçados',
        descripiton: '— Sou cliente da Hadye desde 16/08/2017, quando pedi que desenvolvessem campanhas para minha empresa. Sempre fui atendido com muita rapidez e comprometimento com o resultado. Hoje, quase três anos depois, posso afirmar que essa parceria foi a melhor coisa que fiz, por isso recomendo, com muita satisfação. Indico super o serviço deles!. '
    },
    {
        id: 557,
        client: 'Eduarda Cristina',
        projectName: 'CC - Vestimentos',
        descripiton: '— Conheci a Hadye há 2 anos, e na época, já sentimos empatia pela agência e pelos funcionários. No meio do caminho, testamos outra agência por outros motivos, mas ficou o desejo de voltar. Em 2019, voltamos a contratar a Hadye e isso mostra como todos nós acreditamos muito no trabalho e no atendimento. Quer melhorar as vendas de seu negócio? Entre em contato!'
    },
]

const Testimonials = () => {
  return (
    <section className='pt-12 sm:pt-20'>
        <div className='max-w-[1128px] h-full mx-auto px-4 sm:px-6 before:w-full before:block before:h-[1px] before:bg-zinc-200'>
            <div className='w-full pt-12'>
                <h1 className='text-gray-100 text-3xl font-extrabold text-center mb-4 sm:text-4xl'>Relatos de nossos cliente 📝</h1>
                <p className='text-gray-500 text-xl text-center max-w-[620px] mx-auto'>Estabelecer credibilidade é um dos fatores mais importantes nos dias de hoje.</p>
                <div className='flex flex-wrap justify-center grid-cols-1 gap-y-6 gap-x-8 pt-12'>
                    {
                        dataTestimonials.map(testimonial => {
                            const { id, descripiton, client, projectName } = testimonial;
                            return (
                                <div key={id} className='bg-zinc-200 px-6 py-8 min-w-[300px] max-w-[350px] w-full mx-auto rounded flex-1'>
                                    <img src={quoteImage} alt="Quotation client" />
                                    <p className='text-lg text-gray-500 mt-4'>{descripiton}</p>
                                    <div className='text-base text-gray-100 font-semibold pt-5 before:w-full before:block before:h-[1px] before:bg-[#33363a] before:mb-4'>
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
        </div>
    </section>
  )
}

export default Testimonials