import classNames from 'classnames';
import React from 'react'
import useAnimateControl from '../../hooks/useAnimateControl';
import useVisibleElement from '../../hooks/useVisibleElement';

type DataFeatureCard = {
    image: string;
    title: string;
    description: string;
}

type BuildCardProps = {
    dataFeature: DataFeatureCard;
    indexFeature: number;
}

const BuildCompanyImageCards = ({dataFeature, indexFeature}: BuildCardProps) => {
    const refCard = React.useRef<null | HTMLDivElement>(null);
    const [showAnimateCard, setShowAnimateCard] = React.useState(false);
    const visibleCard = useVisibleElement({elementRef: refCard});
    useAnimateControl({elementRef: refCard, setShowElement: setShowAnimateCard, visible: visibleCard});

    const {image, title, description} = dataFeature;

    return (
        <div className={classNames('text-center opacity-0 transition-opacity-transform ease-element-up', {'animate-show-up-element': showAnimateCard})} data-animate-delay={200 * indexFeature} ref={refCard}>
            <div className='w-16 h-16 bg-purple-600 rounded-circle mx-auto'>
                <img src={image} alt={title} />
            </div>
            <h3 className='text-zinc-200 dark:text-gray-100 text-2xl font-bold mt-4 mb-2'>{title}</h3>
            <p className='text-gray-400 dark:text-gray-500 text-lg'>{description}</p>
        </div>
    )
}

export default BuildCompanyImageCards