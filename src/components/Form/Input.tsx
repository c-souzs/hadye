import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    mostStyles?: string;
    icon?: string;
}

const Input = ({ placeholder, mostStyles, icon, ...rest }: InputProps) => {
  return (
    <div className='relative flex items-center'>
        <input placeholder={placeholder} className={`block text-base text-zinc-500 px-[15px] py-[10px] max-w-full w-full rounded outline-none border-2 border-transparent transition-colors hover:border-zinc-500 ${mostStyles}`} {...rest}/>
        {icon && <img src={icon} alt='Icon decoration input' className='absolute right-[15px] cursor-pointer'/>}
    </div>
  )
}

export default Input