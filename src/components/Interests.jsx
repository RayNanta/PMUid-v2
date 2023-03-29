import React from 'react'
import { frontendIcon, illusIcon, threeDIcon, uiuxIcon } from '../assets'
import styles from '../style'

const Interests = () => {
  return (
    <section id="interests" className={`w-full flex flex-col md:flex-row  ${styles.paddingY}`}>
      <div className='flex flex-col md:w-1/2 xl:w-2/3'>
        <p className={`${styles.title} ss:text-center md:text-left`}>- I n t e r e s t s</p>
        <h1 className={`${styles.heading} mt-4 ss:text-center md:text-left lg:max-w-lg`}>My Interests</h1>
        <p className={`${styles.paragraph} mt-8 ss:text-center md:text-left lg:max-w-lg`}>Get to know what interests me by clicking this Projects Button below.</p>

        <a href="#showcase" className='w-full py-4 mt-14 lg:w-[164px] lg:px-6 flex justify-center items-center text-blue stroke-blue bg-dark-blue rounded-lg hover:bg-hoverSeconday duration-300'>Projects</a>
  
      </div>

      <div className='flex flex-col md:w-auto md:ml-12 xl:flex-wrap xl:flex-row xl:justify-between z-[99]'>
        <div className='flex flex-col px-5 py-9 bg-card rounded-lg mt-14 ss:items-center ss:text-center md:items-start md:text-start md:mt-0 xl:max-w-xs hover:scale-95 duration-300 '>
          <img className='w-14' src={uiuxIcon} alt="uiux" />
          <h1 className={`${styles.headingInterests} mt-5`}>UI/UX Design</h1>
          <p className={`${styles.paragraph} mt-5 `}>Interested on this field since 2020, I scored a lot of track records through competiton and projects.</p>
        </div>
        <div className='flex flex-col px-5 py-9 bg-card rounded-lg mt-14 ss:items-center ss:text-center md:items-start md:text-start xl:max-w-xs xl:ml-12 xl:mt-0 hover:scale-95 duration-300'>
          <img className='w-14' src={frontendIcon} alt="uiux" />
          <h1 className={`${styles.headingInterests} mt-5`}>Front End Web Dev</h1>
          <p className={`${styles.paragraph} mt-5`}>Using React JS as the framework, I created an involved project with Front End needs.</p>
        </div>
        <div className='flex flex-col px-5 py-9 bg-card rounded-lg mt-14 ss:items-center ss:text-center md:items-start md:text-start xl:max-w-xs hover:scale-95 duration-300'>
          <img className='w-14' src={illusIcon} alt="uiux" />
          <h1 className={`${styles.headingInterests} mt-5`}>Illustration</h1>
          <p className={`${styles.paragraph} mt-5`}>Basic and flat illustrations are some of the arts I've been passionate about for a long time.</p>
        </div>
        <div className='flex flex-col px-5 py-9 bg-card rounded-lg mt-14 ss:items-center ss:text-center md:items-start md:text-start xl:max-w-xs xl:ml-12 hover:scale-95 duration-300'>
          <img className='w-14' src={threeDIcon} alt="uiux" />
          <h1 className={`${styles.headingInterests} mt-5`}>3D Modelling</h1>
          <p className={`${styles.paragraph} mt-5`}>Using Blender as my main tool, I've done exercises and projects for many low poly 3D Asset needs.</p>
        </div>
      </div>

    </section>
  )
}

export default Interests