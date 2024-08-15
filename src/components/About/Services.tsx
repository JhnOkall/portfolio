import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <section className='mb-[35px]'>

      <h3 className='text-white-2 capitalize text-2 mb-[20px]'>
        What I'm Doing
      </h3>

      <ul className='grid grid-cols-[1fr] gap-[20px] xl:grid-cols-2 xl:gap-x-[20px] xl:gap-y-[25px]'>

        <li className='relative bg-border-gradient-onyx p-[20px] rounded-[14px] shadow-2 z-[1] before:content-[""] before:absolute before:inset-[1px] before:bg-gradient-jet before:z-[-1] md:flex md:justify-start md:items-start md:gap-[18px] md:p-[30px]'>
          <div className='mb-[10px] md:mb-0 md:mt-[5px]'>
            <Image
            className='m-auto'
            src={'/assets/images/icon-design.svg'}
            alt='Design icon'
            width={40}
            height={'40'} />
          </div>
          <div className='text-center md:text-left'>
            <h4 className='text-white-2 capitalize text-4 mb-[7px]'>
              Web Design
            </h4>
            <p className='text-light-gray text-6 font-3 leading-[1.6]'>
              The most modern and high quality design made at a professional level.
            </p>
          </div>
        </li>

        <li className='relative bg-border-gradient-onyx p-[20px] rounded-[14px] shadow-2 z-[1] before:content-[""] before:absolute before:inset-[1px] before:bg-gradient-jet before:z-[-1] md:flex md:justify-start md:items-start md:gap-[18px] md:p-[30px]'>
          <div className='mb-[10px] md:mb-0 md:mt-[5px]'>
            <Image
            className='m-auto'
            src={'/assets/images/icon-dev.svg'}
            alt='Web Development Icon'
            width={40}
            height={'40'} />
          </div>
          <div className='text-center md:text-left'>
            <h4 className='text-white-2 capitalize text-4 mb-[7px]'>
              Web Development
            </h4>
            <p className='text-light-gray text-6 font-3 leading-[1.6]'>
              High-quality development of sites at the professional level.
            </p>
          </div>
        </li>

        <li className='relative bg-border-gradient-onyx p-[20px] rounded-[14px] shadow-2 z-[1] before:content-[""] before:absolute before:inset-[1px] before:bg-gradient-jet before:z-[-1] md:flex md:justify-start md:items-start md:gap-[18px] md:p-[30px]'>
          <div className='mb-[10px] md:mb-0 md:mt-[5px]'>
            <Image
            className='m-auto'
            src={'/assets/images/icon-app.svg'}
            alt='Mobile app icon'
            width={40}
            height={'40'} />
          </div>
          <div className='text-center md:text-left'>
            <h4 className='text-white-2 capitalize text-4 mb-[7px]'>
              Mobile Apps
            </h4>
            <p className='text-light-gray text-6 font-3 leading-[1.6]'>
              Professional development of applications for Android.
            </p>
          </div>
        </li>

        <li className='relative bg-border-gradient-onyx p-[20px] rounded-[14px] shadow-2 z-[1] before:content-[""] before:absolute before:inset-[1px] before:bg-gradient-jet before:z-[-1] md:flex md:justify-start md:items-start md:gap-[18px] md:p-[30px]'>
          <div className='mb-[10px] md:mb-0 md:mt-[5px]'>
            <Image
            className='m-auto'
            src={'/assets/images/icon-photo.svg'}
            alt='Camera icon'
            width={40}
            height={'40'} />
          </div>
          <div className='text-center md:text-left'>
            <h4 className='text-white-2 capitalize text-4 mb-[7px]'>
              Photography
            </h4>
            <p className='text-light-gray text-6 font-3 leading-[1.6]'>
              I make high quality photos of any category at a professional level
            </p>
          </div>
        </li>
        
      </ul>
    </section>
  )
}

export default Services