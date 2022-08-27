/// <reference types="vite-plugin-svgr/client" />
import React from 'react'

import logo from '../assets/logo.svg';

import { ReactComponent as Facebook } from '../assets/facebook-icon.svg'
import{ ReactComponent as Twitter } from '../assets/twitter-icon.svg';
import { ReactComponent as Instagram } from '../assets/instagram-icon.svg';

const dataLinks = [
  {
    id: 333,
    href: '/',
    name: 'Contato'
  },
  {
    id: 334,
    href: '/',
    name: 'Sobre'
  },
  {
    id: 335,
    href: '/',
    name: 'Dúvidas',
  },
  {
    id: 336,
    href: '/',
    name: 'Suporte'
  }
]

const Footer = () => {
  return (
    <footer className='bg-gray-200 dark:bg-zinc-500 py-12'>
        <div className='max-w-[1128px] h-full mx-auto px-4 sm:px-6'>
            <div className='flex flex-col items-center sm:flex-row sm:justify-between mb-4'>
                <a href="/"><img src={logo} alt="Logo" /></a>
                <nav className='mt-6 sm:mt-0'>
                  <ul className='flex gap-4'>
                    <li><a href="https://facebook.com" target='_blank' className='block p-2 group'><Facebook className='transition-colors group-hover:fill-[#acadff]'/></a></li>
                    <li><a href="https://twitter.com" target='_blank' className='block p-2 group'><Twitter className='transition-colors group-hover:fill-[#acadff]'/></a></li>
                    <li><a href="https://instagram.com" target='_blank' className='block p-2 group'><Instagram className='transition-colors group-hover:fill-[#acadff]'/></a></li>
                  </ul>
                </nav>
            </div>
            <div className='text-sm text-gray-400 dark:text-gray-500 flex flex-col items-center text-center sm:flex-row-reverse sm:justify-between sm:text-left'>
              <nav>
                <ul className='flex justify-between gap-6'>
                  {
                    dataLinks.map(link => {
                      return (
                        <li key={link.id}><a href={link.href} className='text-inherit transition-colors hover:text-zinc-200 dark:hover:text-gray-100'>{link.name}</a></li>
                      )
                    })
                  }
                </ul>
              </nav>
              <div>
                <span className='block mt-2 sm:mt-0'>Criado por <a href="https://github.com/cruip/open-react-template" target='blank_' className='text-zinc-200 dark:text-gray-100 transition-colors hover:text-purple-600'>Cruip</a>. Todos os direitos reservados</span>
                <span className='block mt-1'>Recriado por <a href="https://github.com/souzzs" target='blank_' className='text-zinc-200 dark:text-gray-100 transition-colors hover:text-purple-600'>Souzzs</a>.</span>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer