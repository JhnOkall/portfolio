import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <section className='mb-[30px]'>

      <h3 className='text-white-2 capitalize text-2 mb-[20px] md:mb-[25px]'>
        Testimonials
      </h3>

      <ul className='flex justify-center items-center gap-[15px] p-[25px] pb-[25px] overflow-x-auto scroll-smooth overscroll-contain snap-mandatory scroll-px-[25px] md:gap-[50px] md:p-[45px] md:scroll-px-[45px] has-scrollbar'>

        <li className='min-w-[100%] snap-center md:min-w-[calc(50%-15px)]'>
          <div className='relative bg-border-gradient-onyx p-[15px] pt-[45px] rounded-[14px] shadow-2 cursor-pointer z-[1] before:content-[""] before:absolute before:inset-[1px] before:bg-gradient-jet before:z-[-1] md:p-[30px] md:pt-[25px]'>
            <figure className='absolute top-0 left-0 bg-gradient-onyx rounded-[14px] shadow-1 testimonials-avatar-box md:rounded-[20px]'>
              <Image
              className='md:w-[80px]'
              src={'/assets/images/avatar-1.png'}
              alt='Edward Munene'
              width={60}
              height={60} />
            </figure>
            <h4 className='text-white-2 capitalize text-4 mb-[7px] md:mb-[10px] md:ml-[95px]'>
              Edward Munene
            </h4>
            <div className='text-light-gray text-6 font-300 leading-[1.6] line-clamp-4 md:line-clamp-2'>
              <p>
              John was hired to create a corporate identity. We were very pleased with the work done. He has a
              lot of experience
              and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
              consectetur adipiscing
              elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </li>

        <li className='min-w-[100%] snap-center md:min-w-[calc(50%-15px)]'>
          <div className='relative bg-border-gradient-onyx p-[15px] pt-[45px] rounded-[14px] shadow-2 cursor-pointer z-[1] before:content-[""] before:absolute before:inset-[1px] before:bg-gradient-jet before:z-[-1] md:p-[30px] md:pt-[25px]'>
            <figure className='absolute top-0 left-0 bg-gradient-onyx rounded-[14px] shadow-1 testimonials-avatar-box md:rounded-[20px]'>
              <Image
              className='md:w-[80px]'
              src={'/assets/images/avatar-2.png'}
              alt='Mary Jasmine'
              width={60}
              height={60} />
            </figure>
            <h4 className='text-white-2 capitalize text-4 mb-[7px] md:mb-[10px] md:ml-[95px]'>
              Mary Jasmine
            </h4>
            <div className='text-light-gray text-6 font-300 leading-[1.6] line-clamp-4 md:line-clamp-2'>
              <p>
              John was hired to create a corporate identity. We were very pleased with the work done. He has a
              lot of experience
              and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
              consectetur adipiscing
              elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </li>

        <li className='min-w-[100%] snap-center md:min-w-[calc(50%-15px)]'>
          <div className='relative bg-border-gradient-onyx p-[15px] pt-[45px] rounded-[14px] shadow-2 cursor-pointer z-[1] before:content-[""] before:absolute before:inset-[1px] before:bg-gradient-jet before:z-[-1] md:p-[30px] md:pt-[25px]'>
            <figure className='absolute top-0 left-0 bg-gradient-onyx rounded-[14px] shadow-1 testimonials-avatar-box md:rounded-[20px]'>
              <Image
              className='md:w-[80px]'
              src={'/assets/images/avatar-3.png'}
              alt='Lisa Lynn'
              width={60}
              height={60} />
            </figure>
            <h4 className='text-white-2 capitalize text-4 mb-[7px] md:mb-[10px] md:ml-[95px]'>
              Lisa Lynn
            </h4>
            <div className='text-light-gray text-6 font-300 leading-[1.6] line-clamp-4 md:line-clamp-2'>
              <p>
              John was hired to create a corporate identity. We were very pleased with the work done. He has a
              lot of experience
              and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
              consectetur adipiscing
              elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </li>

        <li className='min-w-[100%] snap-center md:min-w-[calc(50%-15px)]'>
          <div className='relative bg-border-gradient-onyx p-[15px] pt-[45px] rounded-[14px] shadow-2 cursor-pointer z-[1] before:content-[""] before:absolute before:inset-[1px] before:bg-gradient-jet before:z-[-1] md:p-[30px] md:pt-[25px]'>
            <figure className='absolute top-0 left-0 bg-gradient-onyx rounded-[14px] shadow-1 testimonials-avatar-box md:rounded-[20px]'>
              <Image
              className='md:w-[80px]'
              src={'/assets/images/avatar-4.png'}
              alt='Denzel Otieno'
              width={60}
              height={60} />
            </figure>
            <h4 className='text-white-2 capitalize text-4 mb-[7px] md:mb-[10px] md:ml-[95px]'>
              Denzel Otieno
            </h4>
            <div className='text-light-gray text-6 font-300 leading-[1.6] line-clamp-4 md:line-clamp-2'>
              <p>
              John was hired to create a corporate identity. We were very pleased with the work done. He has a
              lot of experience
              and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
              consectetur adipiscing
              elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </li>

      </ul>
    </section>
  )
}

export default Testimonials