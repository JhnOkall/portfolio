import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <aside className='bg-eerie-black-2 border border-solid border-jet rounded-[15px] shadow-1 z-[1] mb-[15px] max-h-[112px] overflow-hidden transition-2 md:w-[520px] md:mx-auto md:p-[30px] md:max-h-[180px] md:mb-[30px] lg:w-[700px] xl:w-[950px] xl:shadow-5 2xl:w-auto 2xl:sticky top-[60px] 2xl:max-h-max 2xl:h-[100%] 2xl:mb-0 2xl:pt-[60px] 2xl:z-[1] active:max-h-405px md:active:max-h-584px'>
      
      <div className='relative flex justify-start items-center gap-[15px] md:gap-[25px] 2xl:flex-col'>

        <figure className='bg-gradient-onyx rounded-[20px] md:rounded-[30px]'>
          <Image
          className='block md:w-[120px] 2xl:w-[150px] rounded-[20px]'
          src={'/assets/images/zi3wda~4.jpg'}
          alt='John Okall'
          width={'80'}
          height={'80'}
          />
        </figure>

        <div>
          <h1 className='text-white-2 text-3 font-500 tracking-[-0.25px] mb-[10px] md:mb-[15px 2xl:text-center 2xl:whitespace-nowrap'>
            John Omollo Okall
          </h1>

          <p className='text-white-1 bg-onyx text-8 font-300 w-max p-[3px] px-[12px] rounded-[8x] md:p-[5px] md:px-[18px] 2xl:m-auto'>
            Web Developer
          </p>
        </div>

        <button className='absolute top-[-15px] right-[-15px] rounded-tl-[0] rounded-br-[0] rounded-tr-[15px] rounded-bl-[15px] text-[13px] text-orange-yellow-crayola bg-border-gradient-onyx p-[10px] shadow-2 transition-1 z-[1] info_more-btn hover:bg-gradient-yellow-1 focus:bg-gradient-yellow-1 hover:before:bg-gradient-yellow-2 focus:before:bg-gradient-yellow-2'>
          <span className='hidden md:block md:text-8'>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>

      </div>

      <div className='opacity-0 invisible transition-2 2xl:opacity-[1] 2xl:visible'>

        <div className='w-[100%] h-[1px] bg-jet m-[16px] mx-0 md:m-[32px] md:mx-0'></div>

        <ul className='grid grid-cols-[1fr] gap-[16px] md:gap-[20px] lg:grid-cols-2 lg:gap-y-[30px] lg:gap-x-[15px] 2xl:grid-cols-[1fr]'>
          <li className='min-w-[100%] flex items-center gap-[16px]'>
            <div className='relative bg-border-gradient-onyx w-[30px] h-[30px] rounded-[8px] flex justify-center items-center text-[16px] text-orange-yellow-crayola shadow-1 z-[1] md:w-[48px] md:h-[48px] md:rounded-[12px] md:text-[18px] before:absolute before:bg-eerie-black-1 before:content-none before:z-[1] before:inset-[1px]'>
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className='max-w-[100%] w-[calc(100%-46px)] md:max-w-[calc(100%-64px)] md:w-[calc(100%-64px)]'>
              <p className='text-light-gray-70 text-8 uppercase mb-[2px]'>
                Email
              </p>
              <Link
              className='2xl:whitespace-nowrap 2xl:overflow-hidden 2xl:text-ellipsis text-white-2 text-7'
              href={'mailto:Jhnprimee@gmail.com'}>
                Jhnprimee@gmail.com
              </Link>
            </div>
          </li>

          <li className='min-w-[100%] flex items-center gap-[16px]'>
            <div className='relative bg-border-gradient-onyx w-[30px] h-[30px] rounded-[8px] flex justify-center items-center text-[16px] text-orange-yellow-crayola shadow-1 z-[1] md:w-[48px] md:h-[48px] md:rounded-[12px] md:text-[18px] before:absolute before:bg-eerie-black-1 before:content-none before:z-[1] before:inset-[1px]'>
            <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className='max-w-[100%] w-[calc(100%-46px)] md:max-w-[calc(100%-64px)] md:w-[calc(100%-64px)]'>
              <p className='text-light-gray-70 text-8 uppercase mb-[2px]'>
                Phone
              </p>
              <Link
              className='2xl:whitespace-nowrap 2xl:overflow-hidden 2xl:text-ellipsis text-white-2 text-7'
              href={'tel:+254 793 464784'}>
                +254 793 464784
              </Link>
            </div>
          </li>

          <li className='min-w-[100%] flex items-center gap-[16px]'>
            <div className='relative bg-border-gradient-onyx w-[30px] h-[30px] rounded-[8px] flex justify-center items-center text-[16px] text-orange-yellow-crayola shadow-1 z-[1] md:w-[48px] md:h-[48px] md:rounded-[12px] md:text-[18px] before:absolute before:bg-eerie-black-1 before:content-none before:z-[1] before:inset-[1px]'>
            <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className='max-w-[100%] w-[calc(100%-46px)] md:max-w-[calc(100%-64px)] md:w-[calc(100%-64px)]'>
              <p className='text-light-gray-70 text-8 uppercase mb-[2px]'>
                Date of Birth
              </p>
              <time className='2xl:whitespace-nowrap 2xl:overflow-hidden 2xl:text-ellipsis text-white-2 text-7' dateTime="2000-1-1">Jan 01, 2000</time>
            </div>
          </li>

          <li className='min-w-[100%] flex items-center gap-[16px]'>
            <div className='relative bg-border-gradient-onyx w-[30px] h-[30px] rounded-[8px] flex justify-center items-center text-[16px] text-orange-yellow-crayola shadow-1 z-[1] md:w-[48px] md:h-[48px] md:rounded-[12px] md:text-[18px] before:absolute before:bg-eerie-black-1 before:content-none before:z-[1] before:inset-[1px]'>
            <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className='max-w-[100%] w-[calc(100%-46px)] md:max-w-[calc(100%-64px)] md:w-[calc(100%-64px)]'>
              <p className='text-light-gray-70 text-8 uppercase mb-[2px]'>
                Address
              </p>
              <address className='2xl:whitespace-nowrap 2xl:overflow-hidden 2xl:text-ellipsis text-white-2 text-7'>Parklands, Nairobi, Kenya</address>
            </div>
          </li>
        </ul>

        <div className='w-[100%] h-[1px] bg-jet m-[16px] mx-0 md:m-[32px] md:mx-0'></div>

        <ul className='flex justify-start items-center gap-[15px] pb-[4px] pl[7px] 2xl:justify-center'>
          <li>
            <Link
            href={'#'}
            className='text-light-gray-70 text-[18px] hover:text-[#1877F2] hover:text-[36px] transition-2'
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>
          </li>

          <li>
            <Link
            href={'#'}
            className='text-light-gray-70 text-[18px] hover:text-[#1DA1F2] hover:text-[36px] transition-2'
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </Link>
          </li>

          <li>
            <Link
            href={'#'}
            className='text-light-gray-70 text-[18px] hover:text-light-gray hover:text-[36px] transition-2'
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
          </li>
        </ul>

      </div>

    </aside>
  )
}

export default Sidebar