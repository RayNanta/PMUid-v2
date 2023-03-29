import React from 'react'
import { play, profile } from '../assets'
import styles from '../style'
import { stats } from '../constants'

const Hero = () => {
  return (
    <section id="about" className={`w-full flex flex-col md:flex-row md:items-center ${styles.paddingY}`}>
      <div className='flex flex-col md:w-1/2'>
        <p className={`${styles.title} ss:text-center md:text-left`}>- A b o u t</p>
        <h1 className={`${styles.headingHero} mt-4 ss:text-center md:text-left lg:max-w-lg`}>Getting More Closer With <span className='text-blue'>Me!</span></h1>
        <p className={`${styles.paragraph} mt-8 ss:text-center md:text-left lg:max-w-lg`}>Hi There! This is an official portfolio account by Raynanta. Tons of project will be presented through this website.</p>

        <div className='flex mt-16 justify-between lg:justify-start'>
          <a href="#interests" className='w-full py-4 lg:w-[151px] lg:px-6 text-center text-white bg-blue rounded-lg hover:bg-hoverPrimary duration-300'>Explore More</a>
          <a href="" className='w-full py-4 lg:w-[164px] lg:px-6 flex justify-center items-center text-blue stroke-blue bg-dark-blue rounded-lg ml-6 lg:ml-12 hover:bg-hoverSeconday duration-300'>
            Play Video
            <img className='w-5 ml-2' src={play} alt="play_video" />
          </a>
        </div>

        <div className='flex mt-20 justify-between lg:justify-start'>
          {stats.map((stats, index) => (
            <div className='lg:mr-20'> 
              <h1 className={`${styles.headingStats}`}>{`${stats.value}`}</h1>
              <p className={`${styles.paragraph} mt-3`}>{`${stats.title}`}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='md:w-1/2 z-[99]'>
        <img className='mt-16 md:ml-auto md:w-96' src={profile} alt="profile_stats" />
      </div>

      <div>
          <div className='absolute left-[-73.3px] top-[-192px] w-[360px] h-[360px] bg-grad1' />     
          <div className='absolute left-[82.25px] top-[44.63px] w-[174px] h-[173px] bg-grad2' />     
          <div className='hidden sm:block absolute left-[177.99px] top-[-3.32px] w-[360px] h-[360px] bg-grad3' />     
      </div>

      <div className='hidden sm:block'>
          <div className='absolute top-0 right-20 w-[360px] h-[360px] bg-grad1' />     
          <div className='absolute right-40 w-[360px] h-[360px] bg-grad3' />     
      </div>
    </section>
  )
}

export default Hero