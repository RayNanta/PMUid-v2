import React from 'react'
import { milestones } from '../constants'
import styles from '../style'

const Milestones = () => {
  return (
    <section id="milestones" className={`w-full flex flex-col ${styles.paddingY}`}>
      <div className='w-full flex flex-col'>
        <div>
          <p className={`${styles.title} text-center`}>- M i l e s t o n e s</p>
          <h1 className={`${styles.heading} mt-4 text-center`}>My Milestones</h1>
        </div>
        
        <div className='w-full flex flex-col xs:items-center md:flex-wrap md:flex-row md:justify-between'>
        {milestones.map((milestones, index) => (
          <div className='bg-card py-7 px-5 mt-14 rounded-lg xs:w-96 lg:w-[400px] hover:scale-95 duration-300'>
            <div className='flex items-start'>
              <img className='w-14 ' src={milestones.logo} alt="icon" />
              <div className='flex flex-col ml-7'>
                <div className='flex flex-col'>
                  <h1 className={`${styles.headingInterests}`}>{milestones.title}</h1>
                  <p className={`${styles.paragraph}`}>{milestones.subtitle}</p>
                </div>
                <p className={`${styles.paragraph}`}>{milestones.timeloc}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

    </section>
  )
}

export default Milestones