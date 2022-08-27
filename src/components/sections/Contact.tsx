import React from 'react'

import classNames from 'classnames';
import useVisibleElement from '../../hooks/useVisibleElement';
import useAnimateControl from '../../hooks/useAnimateControl';

import sendContact from '../../assets/send-contact.svg';

const Contact = () => {
    const refContact = React.useRef<null | HTMLHeadingElement>(null);
    const [showAnimateContact, setShowAnimateContact] = React.useState(false);
    const visibleContact = useVisibleElement({elementRef: refContact});
    useAnimateControl({elementRef: refContact, setShowElement: setShowAnimateContact, visible: visibleContact});

    return (
        <section className={classNames('pt-12 sm:pt-20 opacity-0', {'animate-show-up-element': showAnimateContact})} ref={refContact}>
            <div className='max-w-[1128px] h-full mx-auto px-4'>
                <div className='dark:bg-purple-600 bg-purple-100 bg-decoration-contact bg-no-repeat bg-cover bg-right-bottom py-12 px-4 flex flex-col gap-x-12 gap-y-4 sm:px-6 md:flex-row md:items-center md:justify-between'>
                    <h1 className='text-2xl font-bold text-gray-100 sm:text-3xl text-center'>Entre em contato por e-mail para uma melhor conversa</h1>
                    <form className='w-full lg:max-w-[50%]'>
                    <div className='relative flex items-center'>
                        <input placeholder='Your e-mail' className={`block text-base text-zinc-500 px-[15px] py-[10px] max-w-full w-full rounded outline-none`}/>
                        <img src={sendContact} alt='Icon decoration input' className='absolute right-[15px] cursor-pointer'/>
                    </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact