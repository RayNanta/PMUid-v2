import React from 'react'
import { useState } from 'react'

import {logo, close, menu} from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-10 justify-start items-center navbar font-medium'>
      <img src={logo} alt="logo" className='w-[35px] h-[50px]' />

      <ul className='list-none sm:flex hidden justify-start items-center flex-1 ml-10'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-8'} ${index === navLinks.length - 1 ? 'hidden' : ''} text-white z-[99] hover:text-hoverNav duration-300`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)}/>

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-glass absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
      </div>

      <a href='https://www.instagram.com/projectmuu.id/' target={'_blank'} className='px-6 py-4 text-white bg-blue rounded-lg hidden sm:block hover:bg-hoverPrimary duration-300 z-[99]'>
        Portfolio
      </a>

    </nav>
  )
}

export default Navbar