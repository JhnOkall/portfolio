import React from 'react'

const Education = () => {
  return (
    <section className='mb-30px'>
      <div className='flex items-center gap-[15px] mb-[25px]'>
        <div className='relative bg-gradient-onyx w-[30px] h-[30px] rounded-[8px] flex justify-center items-center text-[16px] text-orange-yellow-crayola shadow-1 z-[1] before:content-[""] before:absolute before:inset-[1px] before:bg-eerie-black-1 before:z-[-1] md:w-[48px] md:h-[48px] md:rounded-[12px] md:text-[18px]'>
        <ion-icon name="book-outline"></ion-icon>
        </div>
        <h3 className='text-white-2 capitalize text-2'>
          Education
        </h3>
      </div>
      <ol className='text-6 ml-[45px] md:ml-[65px] timeline-list'>
        <li className='relative timeline-item'>
          <h4 className='text-white-2 capitalize text-6 leading-[1.3] mb-[7px]'>
            University
          </h4>
          <span className='text-vegas-gold font-400 leading-[1.6]'>
            2007 - 2008
          </span>
          <p className='text-light-gray font-300 leading-[1.6] 2xl:max-w-[700px]'>
          Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
          quas molestias
          exceptur.
          </p>
        </li>

        <li className='relative timeline-item'>
          <h4 className='text-white-2 capitalize text-6 leading-[1.3] mb-[7px]'>
            University
          </h4>
          <span className='text-vegas-gold font-400 leading-[1.6]'>
            2006 - 2007
          </span>
          <p className='text-light-gray font-300 leading-[1.6] 2xl:max-w-[700px]'>
          Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est
          omnis...
          </p>
        </li>

        <li className='relative timeline-item'>
          <h4 className='text-white-2 capitalize text-6 leading-[1.3] mb-[7px]'>
            High School
          </h4>
          <span className='text-vegas-gold font-400 leading-[1.6]'>
            2002 - 2004
          </span>
          <p className='text-light-gray font-300 leading-[1.6] 2xl:max-w-[700px]'>
          Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur
          magni dolores
          eos.
          </p>
        </li>
      </ol>
    </section>
  )
}

export default Education