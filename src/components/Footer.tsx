/// <reference types="vite-plugin-svgr/client" />
import React from 'react'
import logo from '../assets/logo.svg';
import { ReactComponent as Facebook } from '../assets/facebook-icon.svg'
import{ ReactComponent as Twitter } from '../assets/twitter-icon.svg';
import { ReactComponent as Instagram } from '../assets/instagram-icon.svg';

const Footer = () => {
  return (
    <footer className='bg-zinc-500 py-12'>
        <div className='max-w-[1128px] h-full mx-auto px-4 sm:px-6'>
            <div className='flex flex-col items-center sm:flex-row sm:justify-between mb-4'>
                <a href="/"><img src={logo} alt="Logo" /></a>
                <nav className='mt-6 sm:mt-0'>
                  <ul className='flex gap-4'>
                    <li><a href="https://facebook.com" target='_blank' className='block p-2 group'><Facebook className='transition-colors text-[#acadff] group-hover:fill-current'/></a></li>
                    <li><a href="https://twitter.com" target='_blank' className='block p-2 group'><Twitter className='transition-colors text-[#acadff] group-hover:fill-current'/></a></li>
                    <li><a href="https://instagram.com" target='_blank' className='block p-2 group'><Instagram className='transition-colors text-[#acadff] group-hover:fill-current'/></a></li>
                  </ul>
                </nav>
            </div>
            <div className='text-sm text-gray-500 flex flex-col items-center text-center sm:flex-row-reverse sm:justify-between sm:text-left'>
              <nav>
                <ul className='flex justify-between gap-6'>
                  <li><a href="/" className='text-inherit transition-colors hover:text-gray-100'>Contact</a></li>
                  <li><a href="/" className='text-inherit transition-colors hover:text-gray-100'>About us</a></li>
                  <li><a href="/" className='text-inherit transition-colors hover:text-gray-100'>FAQ's</a></li>
                  <li><a href="/" className='text-inherit transition-colors hover:text-gray-100'>Support</a></li>
                </ul>
              </nav>
              <div>
                <span className='block mt-2 sm:mt-0'>Made by <a href="https://github.com/cruip/open-react-template" target='blank_' className='text-gray-100 transition-colors hover:text-purple-600'>Cruip</a>. All right reserved</span>
                <span className='block mt-1'>Recreated by <a href="https://github.com/souzzs" target='blank_' className='text-gray-100 transition-colors hover:text-purple-600'>Souzzs</a>.</span>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer