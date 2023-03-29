import React from 'react'
import { arrowRight } from '../assets'
import styles from '../style'
import { projects } from '../constants'

const Projects = () => {
  return (
    <section id="showcase" className={`w-full flex flex-col ${styles.paddingY}`}>
      <div className='w-full flex flex-col md:flex-row md:items-center md:justify-between'>
        <div className='md:w-1/2'>
          <p className={`${styles.title} ss:text-center md:text-left`}>- S h o w c a s e</p>
          <h1 className={`${styles.heading} mt-4 ss:text-center md:text-left lg:max-w-lg`}>My Projects</h1>
        </div>
        
        <a href="https://www.instagram.com/projectmuu.id/" target={'_blank'} className='w-full py-4 mt-14 md:w-[137px] lg:px-6 flex justify-center items-center text-blue stroke-blue bg-dark-blue rounded-lg hover:bg-hoverSeconday duration-300'>
          Explore
          <img className='w-5 ml-2' src={arrowRight} alt="play_video" />
        </a>
      </div>

      <div className='flex flex-col sm:flex-wrap sm:flex-row sm:justify-between'>
        {projects.map((projects, index) => (
        <div className='bg-card py-7 px-7 mt-14 rounded-lg z-[99]'> 
          <img className='rounded-lg md:w-80 lg:w-80 xl:w-72 hover:scale-95 duration-300' src={projects.image} alt="image" />
          
          <div className='flex flex-col'>
            <h1 className={`${styles.headingInterests} mt-6`} >{projects.title}</h1>
            <p className={`${styles.paragraph} mt-2`}>{projects.subtitle}</p>
          </div>

          <div className='flex justify-between mt-11'>
            <div className='flex flex-col'>
              <p className={`${styles.paragraph}`}>Release Date</p>
              <div className='flex'>
                <img className='w-5' src={projects.iconRelease} alt="release_date" />
                <p className={`${styles.paragraph} ml-2`}>{projects.Release}</p>
              </div>
            </div>
            <div className='flex flex-col'>
              <p className={`${styles.paragraph}`}>Type</p>
              <div className='flex'>
                <img className='w-5' src={projects.iconType} alt="release_date" />
                <p className={`${styles.paragraph} ml-2`}>{projects.Type}</p>
              </div>
            </div>
          </div>

          <a href={projects.Link} target={'_blank'} className='w-full py-4 mt-14 flex justify-center items-center text-blue stroke-blue bg-dark-blue rounded-lg hover:bg-hoverSeconday duration-300'>Explore</a>

        </div>
         ))}
      </div>

      <div className='w-full flex justify-center'>
        <a href="https://www.instagram.com/projectmuu.id/" target={'_blank'} className='w-full py-4 mt-14 sm:w-[164px] lg:px-6 flex justify-center items-center text-blue stroke-blue bg-dark-blue rounded-lg hover:bg-hoverSeconday duration-300'>See All</a>
      </div>

    </section>
  )
}

export default Projects