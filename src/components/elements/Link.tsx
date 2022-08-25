import React, { AnchorHTMLAttributes } from 'react'
import classNames from 'classnames';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    type: 'purple' | 'neutral';
    href: string;
    text: string;
    mostStyles?: string;
}

const Link = ({ text, href, type, mostStyles, ...rest}: LinkProps) => {
    const typeIsPurple = type === 'purple';

    const classLinkFiltered = classNames({'bg-purple-500 hover:bg-purple-600': typeIsPurple}, {'bg-zinc-200 hover:bg-zinc-300': !typeIsPurple}, mostStyles);
    
    return (
        <a 
            href={href} 
            className={`${classLinkFiltered} cursor-pointer inline-block text-base text-center text-gray-100 font-semibold rounded transition-colors`} 
            {...rest}
        >
            {text}
        </a>
    )
}

export default Link;