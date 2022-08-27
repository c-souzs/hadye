import classNames from 'classnames';
import React from 'react'
import useAnimateControl from '../../hooks/useAnimateControl';
import useVisibleElement from '../../hooks/useVisibleElement';

type DataWorkflow = {
    image: string;
    subtitle: string;
    title: string;
    description: string;
}

type WorkflowCardProps = {
    dataWorkflow: DataWorkflow;
    indexWorkflow: number;
    maxWorkflows: number;
}

const WorkflowCard = ({ dataWorkflow, indexWorkflow, maxWorkflows }: WorkflowCardProps) => {
    const refCard = React.useRef<null | HTMLDivElement>(null);
    const [showAnimateCard, setShowAnimateCard] = React.useState(false);
    const visibleCard = useVisibleElement({elementRef: refCard});
    useAnimateControl({elementRef: refCard, setShowElement: setShowAnimateCard, visible: visibleCard});

    const { subtitle, title, description, image } = dataWorkflow;
    const positionItem = indexWorkflow % 2 === 0;
    const lastElement = indexWorkflow === maxWorkflows - 1;

    const classFilteredPositionRight = classNames({'before:right-0 before:translate-x-[275px] before:bg-decoration-workflows-right-light dark:before:bg-decoration-workflows-right-dark': positionItem});
    const classFilteredPositionLeft = classNames({'before:left-0 before:translate-x-[-275px] before:bg-decoration-workflows-left-light dark:before:bg-decoration-workflows-left-dark': !positionItem});
    const classFilteredAlignRow = classNames({'lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2': !positionItem});

    const classFilteredAnimateLeft = classNames({'animate-show-left-element': showAnimateCard && positionItem});
    const classFilteredAnimateLeftInverted = classNames({'animate-show-right-element': showAnimateCard && !positionItem});

    const classFilteredAnimateRight = classNames({'animate-show-right-element': showAnimateCard && positionItem});
    const classFilteredAnimateRightInverted = classNames({'animate-show-left-element': showAnimateCard && !positionItem});


    return (
        <div className={classNames('text-center relative grid grid-cols-1 items-center gap-x-12 gap-y-8 py-6 lg:grid-cols-2 lg:text-left before:absolute before:hidden lg:before:block before:bottom-0 before:h-[255px] before:w-[385px] before:bg-no-repeat before:bg-center',  {'pb-0': lastElement}, classFilteredAlignRow, classFilteredPositionLeft, classFilteredPositionRight, {'opacity-100': showAnimateCard}, {'opacity-0': !showAnimateCard})} ref={refCard}>
            <div className={classNames({'transition-opacity-transform ease-element-up lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2': !positionItem}, classFilteredAnimateLeft, classFilteredAnimateLeftInverted)}>
                <h4 className='text-sm text-purple-600 font-semibold uppercase mb-2'>{subtitle}</h4>
                <h3 className='text-2xl sm:text-3xl text-zinc-200 dark:text-gray-100 font-bold mb-3'>{title}</h3>
                <p className='text-lg text-gray-400 dark:text-gray-500'>{description}</p>
            </div>
            <img src={image} alt={title} className={classNames('block w-full max-h-[450px] h-full object-cover rounded relative z-40 transition-opacity-transform ease-element-up', classFilteredAnimateRight, classFilteredAnimateRightInverted)}/>
        </div>
    )
}

export default WorkflowCard