import React from 'react'
import styles from '../style'

const Quotes = () => {
  return (
    <section id="quotes" className={`w-full ${styles.paddingY}`}>
      <div className='bg-card py-20 px-24 rounded-lg'>
        <h1 className={`${styles.headingQuotes} text-center`}>Privilege Means <span className='text-blue'>Nothing</span> If You Don't Help Others.</h1>
        <p className='font-nunitoSans font-semibold text-xl text-blue mt-12 px-6 py-5 bg-quotes-name rounded-lg text-center ss:w-44 mx-auto'>r a y n t</p>
      </div>

      <div className='z-0 hidden sm:block'>
          <div className='absolute right-16 w-[200px] h-[200px] bg-grad1' />     
          <div className='absolute right-10 w-[174px] h-[173px] bg-grad2' />     
          <div className='absolute right-20 top-15 w-[150px] h-[150px] bg-grad3' />     
      </div>
      
      <div className='z-0 '>
          <div className='absolute left-[-302.3px] top-[3649px] w-[360px] h-[360px] bg-grad1' />     
          <div className='absolute left-[-146.75px] top-[3885.63px] w-[174px] h-[173px] bg-grad2' />     
          <div className='absolute left-[-51.01px] top-[3837.68px] w-[300px] h-[300px] bg-grad3' />     
      </div>
    </section>
  )
}

export default Quotes