import classNames from 'classnames';
import React from 'react'

type MenuMobileProps = {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuMobile = ({active, setActive}: MenuMobileProps) => {
    // Classes de estilo filtradas
    const classStylesMenuMobileFiltered = classNames({'border-t-transparent before:rotate-[135deg] after:rotate-[-135deg] after:top-[-7px]': active});

    return (
        <button 
            onClick={() => setActive(!active)} 
            className={`w-6 block text-gray-500 border-t-2 border-current after:block after:w-full after:h-[2px] after:bg-current after:mt-[5px] after:relative after:transition-transform after:duration-300 before:duration-300 before:transition-transform before:block before:w-full before:h-[2px] before:bg-current before:mt-[5px] before:relative sm:hidden ${classStylesMenuMobileFiltered}`}
        />
    )
}

export default MenuMobile