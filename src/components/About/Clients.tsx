import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Clients = () => {
  return (
    <section className='mb-[15px]'>
        <h3 className='text-white-2 capitalize text-2'>
            Clients
        </h3>

        <ul className='flex justify-center items-center gap-[15px] p-[25px] pb-[25px] overflow-x-auto scroll-smooth overscroll-contain snap-mandatory scroll-px-[25px] md:gap-[50px] md:p-[45px] md:scroll-px-[45px] has-scrollbar'>

            <li className='min-w-[50%] snap-start sm:min-w-[calc(33.33%-10px)] md:min-w-[calc(33.33%-35px)] xl:min-w-[calc(25%-38px)]'>
                <Link
                href={'#'}>
                    <Image
                    className='grayscale-[1] hover:grayscale-0 transition-1'
                    src={'/assets/images/logo-1-color.png'}
                    alt='Client Logo'
                    width={100}
                    height={100}
                    />
                </Link>
            </li>

            <li className='min-w-[50%] snap-start sm:min-w-[calc(33.33%-10px)] md:min-w-[calc(33.33%-35px)] xl:min-w-[calc(25%-38px)]'>
                <Link
                href={'#'}>
                    <Image
                    className='grayscale-[1] hover:grayscale-0 transition-1'
                    src={'/assets/images/logo-2-color.png'}
                    alt='Client Logo'
                    width={100}
                    height={100}
                    />
                </Link>
            </li>

            <li className='min-w-[50%] snap-start sm:min-w-[calc(33.33%-10px)] md:min-w-[calc(33.33%-35px)] xl:min-w-[calc(25%-38px)]'>
                <Link
                href={'#'}>
                    <Image
                    className='grayscale-[1] hover:grayscale-0 transition-1'
                    src={'/assets/images/logo-3-color.png'}
                    alt='Client Logo'
                    width={100}
                    height={100}
                    />
                </Link>
            </li>

            <li className='min-w-[50%] snap-start sm:min-w-[calc(33.33%-10px)] md:min-w-[calc(33.33%-35px)] xl:min-w-[calc(25%-38px)]'>
                <Link
                href={'#'}>
                    <Image
                    className='grayscale-[1] hover:grayscale-0 transition-1'
                    src={'/assets/images/logo-4-color.png'}
                    alt='Client Logo'
                    width={100}
                    height={100}
                    />
                </Link>
            </li>

            <li className='min-w-[50%] snap-start sm:min-w-[calc(33.33%-10px)] md:min-w-[calc(33.33%-35px)] xl:min-w-[calc(25%-38px)]'>
                <Link
                href={'#'}>
                    <Image
                    className='grayscale-[1] hover:grayscale-0 transition-1'
                    src={'/assets/images/logo-5-color.png'}
                    alt='Client Logo'
                    width={100}
                    height={100}
                    />
                </Link>
            </li>

            <li className='min-w-[50%] snap-start sm:min-w-[calc(33.33%-10px)] md:min-w-[calc(33.33%-35px)] xl:min-w-[calc(25%-38px)]'>
                <Link
                href={'#'}>
                    <Image
                    className='grayscale-[1] hover:grayscale-0 transition-1'
                    src={'/assets/images/logo-6-color.png'}
                    alt='Client Logo'
                    width={100}
                    height={100}
                    />
                </Link>
            </li>
        </ul>
    </section>
  )
}

export default Clients