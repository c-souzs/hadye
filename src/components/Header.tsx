import classNames from 'classnames';
import React from 'react'

import logo from '../assets/logo.svg';
import Link from './elements/Link';
import MenuMobile from './elements/MenuMobile';

const Header = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    
    // Classes de estilo filtradas
    const classStylesListFiltered = classNames({'visible h-[155px]': showMenu}, {'invisible h-0': !showMenu}); 

    return (
        <header className='bg-zinc-500 h-[80px] relative'>
            <div className='absolute top-0 w-full max-w-full bg-no-repeat bg-auto h-[286px] bg-decoration-header bg-top '/>
            <div className='max-w-[1128px] h-full mx-auto px-4 flex justify-between items-center 
            sm:px-6'>
                <a href="/"><img src={logo} alt="Logo" /></a>
                <nav className='flex'>
                    <ul className={`overflow-y-hidden text-base text-gray-100 text-center bg-[#0e0f11] absolute z-[999] left-0 right-0 top-[80px] p-6 transition-height ${classStylesListFiltered}
                    sm:flex sm:items-center sm:gap-x-8 sm:bg-transparent sm:visible sm:static sm:h-fit sm:p-0`}>
                        <li>
                            <a href="/" className='block font-medium px-8 py-3 transition-colors 
                            sm:py-0 sm:text-gray-500 sm:hover:text-gray-100'>
                                Pequeno empresário
                            </a>
                        </li>
                        <li>
                            <Link 
                                href='/'
                                text='Começe agora'
                                type='purple'
                                mostStyles='w-full max-w-[280px] h-9 py-[5px] px-[23px] my-3 mx-auto'
                            />
                        </li>
                    </ul>
                    <MenuMobile active={showMenu} setActive={setShowMenu}/>
                </nav>
            </div>
        </header>
    )
}

export default Header