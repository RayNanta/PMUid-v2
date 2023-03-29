import React from 'react'
import { arrowTop, logo } from '../assets'
import { navLinks } from '../constants'
import styles from '../style'

const Footer = () => {
  return (
    <section className='px-6 sm:px-0'>
      <div className='w-full flex py-10 justify-between items-center navbar font-medium border-footer '>
        <div className='w-[123px]' >
          <img src={logo} alt="logo" className='w-[35px] h-[50px]' />
        </div>

        <ul className='list-none sm:flex hidden justify-center items-center '>
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-8'} ${index === navLinks.length - 1 ? 'hidden' : ''} text-white hover:text-hoverNav duration-300`}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        
        <a href="#about" className='flex justify-center items-center py-4 px-6 sm:w-[140px] text-blue rounded-lg stroke-blue hover:bg-hoverSeconday duration-300 z-[99]'>
          To Top
          <img src={arrowTop} className="w-5 ml-2" alt="to_top" />
        </a>
      </div>

      <div className={`${styles.paragraph} text-center py-7`}>
        2023 © All Rights Reserved. Projectmuid  -  Made With Love
      </div>
    </section>
  )
}

export default Footer