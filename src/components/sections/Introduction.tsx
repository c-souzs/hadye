import React from 'react'

import Link from '../elements/Link'
import Description from '../elements/Description';

import companyEnvironment from '../../assets/company-environment.jpg';
import classNames from 'classnames';
import useAnimateControl from '../../hooks/useAnimateControl';
import useVisibleElement from '../../hooks/useVisibleElement';

const Introduction = () => {
    const refTitle = React.useRef<null | HTMLHeadingElement>(null);
    const [showAnimateTitle, setShowAnimateTitle] = React.useState(false);
    const visibleTitle = useVisibleElement({elementRef: refTitle});
    useAnimateControl({elementRef: refTitle, setShowElement: setShowAnimateTitle, visible: visibleTitle});

    const refContainerDescription = React.useRef<null | HTMLDivElement>(null);
    const [showAnimateContainerDescription, setShowAnimateContainerDescription] = React.useState(false);
    const visibleContainerDescription = useVisibleElement({elementRef: refContainerDescription});
    useAnimateControl({elementRef: refContainerDescription, setShowElement: setShowAnimateContainerDescription, visible: visibleContainerDescription});

    const groupButtonsRef = React.useRef<null | HTMLDivElement>(null);
    const [showAnimateGroupButtons, setShowAnimateGroupButtons] = React.useState(false);
    const visibleGroupButton = useVisibleElement({elementRef: groupButtonsRef});
    useAnimateControl({elementRef: groupButtonsRef, setShowElement: setShowAnimateGroupButtons, visible: visibleGroupButton});

    const containerImageRef = React.useRef<null | HTMLDivElement>(null);
    const [showAnimateContainerImage, setShowAnimateContainerImage] = React.useState(false);
    const visibleContainerImage = useVisibleElement({elementRef: containerImageRef});
    useAnimateControl({elementRef: containerImageRef, setShowElement: setShowAnimateContainerImage, visible: visibleContainerImage});

    return (
        <section className='pt-20'>
            <div className='max-w-[960px] w-full px-6 mx-auto'>
                <div>
                    <h1 className={classNames('text-4xl text-zinc-200 dark:text-gray-100 font-extrabold text-center mb-4 sm:text-5xl transition-opacity-transform ease-element-up', {'animate-show-up-element': showAnimateTitle})} ref={refTitle}> <p className='text-purple-600 inline-block'>Hadye</p>, leve suas vendas ao <p className='text-purple-600 inline-block'>topo</p>🚀</h1>
                    <div className={classNames('opacity-0 transition-opacity-transform ease-element-up', {'animate-show-up-element': showAnimateContainerDescription})} ref={refContainerDescription} data-animate-delay="400">
                        <Description 
                            text='Atráves de estudos, aplicamos estratégias de vendas e tráfego pago para atrair mais pessoas, aumentando conversão de vendas.'
                            mostStyles='mb-8'
                        />
                    </div>
                    <div className={classNames('flex gap-4 flex-col justify-center items-center opacity-0 transition-opacity-transform ease-element-up sm:flex-row', {'animate-show-left-element': showAnimateGroupButtons})} data-animate-delay="600" ref={groupButtonsRef}>
                        <Link href='/' type='purple' text='Entrar em contato' mostStyles='max-w-[280px] w-full py-[11px] px-[31px] sm:w-fit'/>
                        <Link href='/' target='_blank' type='neutral' text='Nossos resultados' mostStyles='max-w-[280px] w-full py-[11px] px-[31px] sm:w-fit'/>
                    </div>
                </div>
                <div className={classNames('mt-12 rounded block relative opacity-0 transition-opacity-transform ease-element-up', {'animate-show-left-element': showAnimateContainerImage})} data-animate-delay="600" ref={containerImageRef}>
                    <img src={companyEnvironment} alt="Company video" className='max-h-[508px] w-full rounded'/>
                    <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10'/>
                </div>
            </div>
        </section>
    ) 
}

export default Introduction