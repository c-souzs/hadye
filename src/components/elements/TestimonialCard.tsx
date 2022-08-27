import React from 'react'
import useAnimateControl from '../../hooks/useAnimateControl';
import useVisibleElement from '../../hooks/useVisibleElement';

import quoteImage from '../../assets/quote.svg';
import classNames from 'classnames';

type TestimonialData = {
  client: string;
  projectName: string;
  description: string;
}

type TestimonialCardProps = {
  dataTestimonial: TestimonialData;
}

const TestimonialCard = ({dataTestimonial}: TestimonialCardProps) => {
    const refCard = React.useRef<null | HTMLDivElement>(null);
    const [showAnimateCard, setShowAnimateCard] = React.useState(false);
    const visibleCard = useVisibleElement({elementRef: refCard});
    useAnimateControl({elementRef: refCard, setShowElement: setShowAnimateCard, visible: visibleCard});

    const {client, description, projectName} = dataTestimonial;
    return (
      <div className={classNames('dark:bg-zinc-200 shadow-card-testimonials-light opacity-0 dark:shadow-none px-6 py-8 min-w-[300px] max-w-[450px] w-full mx-auto rounded flex-1', {'animate-show-left-element': showAnimateCard})} ref={refCard}>
          <img src={quoteImage} alt="Quotation client" />
          <p className='text-lg text-gray-400 dark:text-gray-500 mt-4'>{description}</p>
          <div className='text-base text-zinc-200 dark:text-gray-100 font-semibold pt-5 before:w-full before:block before:h-[1px] before:bg-[#CCCCCC] dark:before:bg-[#33363a] before:mb-4'>
            <span>{client}</span>
            <span className='text-[#717d86] mx-1'>/</span>
            <a href='/' className='text-green-500 transition-colors hover:text-[#73efcc]'>{projectName}</a>
          </div>
      </div>
    )
}

export default TestimonialCard