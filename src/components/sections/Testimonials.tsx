import React from 'react'

import Container from '../elements/Container';
import Description from '../elements/Description';
import Title from '../elements/Title';

import quoteImage from '../../assets/quote.svg';
import TestimonialCard from '../elements/TestimonialCard';

const dataTestimonials = [
    {
        id: 555,
        client: 'Alysson Souza',
        projectName: 'Sucos Vale',
        description: '— Parabenizo toda a Equipe da Hadye, por serem sempre extremamente atenciosos e profissionais, não é surpresa que dessa forma nos trazem bons resultados para a Sucos Vale, ficamos tranquilos em deixar as campanhas nas mãos de vocês pois sabemos que sempre nos apresentam ótima performance e bons resultados. Indico de olhos fechados!.'
    },
    {
        id: 556,
        client: 'Gabrielly Andrade',
        projectName: 'GA - Calçados',
        description: '— Sou cliente da Hadye desde 16/08/2017, quando pedi que desenvolvessem campanhas para minha empresa. Sempre fui atendido com muita rapidez e comprometimento com o resultado. Hoje, quase três anos depois, posso afirmar que essa parceria foi a melhor coisa que fiz, por isso recomendo, com muita satisfação. Indico super o serviço deles!. '
    },
    {
        id: 557,
        client: 'Eduarda Cristina',
        projectName: 'CC - Vestimentos',
        description: '— Conheci a Hadye há 2 anos, e na época, já sentimos empatia pela agência e pelos funcionários. No meio do caminho, testamos outra agência por outros motivos, mas ficou o desejo de voltar. Em 2019, voltamos a contratar a Hadye e isso mostra como todos nós acreditamos muito no trabalho e no atendimento. Quer melhorar as vendas de seu negócio? Entre em contato!'
    },
]

const Testimonials = () => {
  return (
    <section className='pt-12 sm:pt-20'>
        <Container mostStyles='before:w-full before:block before:h-[1px] before:bg-gray-300 dark:before:bg-zinc-200'>
            <div className='w-full pt-12'>
                <Title 
                    text='Relatos de nossos cliente 📝'
                />
                <Description 
                    text='Estabelecer credibilidade é um dos fatores mais importantes nos dias de hoje.'
                />
                <div className='flex flex-wrap justify-center grid-cols-1 gap-y-8 gap-x-8 pt-12'>
                    {
                        dataTestimonials.map(testimonial => <TestimonialCard key={testimonial.id} dataTestimonial={testimonial}/>)
                    }
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Testimonials