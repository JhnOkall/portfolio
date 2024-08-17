import React from 'react'
import PortfolioNav from './PortfolioNav'
import Link from 'next/link'
import Image from 'next/image'

const ProjectCard = () => {
  return (
    <section>

      <PortfolioNav />

      <div className='relative mb-[25px] lg:hidden'>
        <button className='bg-eerie-black-2 text-light-gray flex justify-between items-center w-[100%] px-[12px] py-[16px] border border-solid border-jet rounded-[14px] text-6 font-300 active:opacity-[1] active:visible'>
          <div>
            Select category
          </div>
          <div className='active:rotate-180'>
            <ion-icon name="chevron-down"></ion-icon>
          </div>
        </button>

        <ul className='bg-eerie-black-2 absolute top-[calc(100%-6px)] w-[100%] p-[6px] border border-solid border-jet rounded-[14px] z-[2] opacity-0 invisible pointer-events-none active:opacity-[1] active:visible active:pointer-events-auto'>

          <li>
            <button className='bg-eerie-black-2 text-light-gray text-6 font-300 capitalize w-[100%] px-[8px] py-[10px] rounded-[8px] hover:bg-eerie-black-2'>
              All
            </button>
          </li>

          <li>
            <button className='bg-eerie-black-2 text-light-gray text-6 font-300 capitalize w-[100%] px-[8px] py-[10px] rounded-[8px] hover:bg-eerie-black-2'>
              Web design
            </button>
          </li>

          <li>
            <button className='bg-eerie-black-2 text-light-gray text-6 font-300 capitalize w-[100%] px-[8px] py-[10px] rounded-[8px] hover:bg-eerie-black-2'>
              Applications
            </button>
          </li>

          <li>
            <button className='bg-eerie-black-2 text-light-gray text-6 font-300 capitalize w-[100%] px-[8px] py-[10px] rounded-[8px] hover:bg-eerie-black-2'>
              Web development
            </button>
          </li>

        </ul>
      </div>

      <ul className='grid grid-cols-[1fr] gap-[30px] mb-[10px] lg:grid-cols-2 xl:grid-cols-3'>

        <li className='hover:animate-scaleUp'>
          <Link
          className='w-[100%]'
          href={'#'}>
            <figure className='relative w-[100%] h-[200px] rounded-[16px] overflow-hidden mb-[15px] before:content-[""] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%] before:bg-transparent before:z-[1] before:transition-1 sm:h-auto md:rounded-[16px]'>
              <div>
                <ion-icon name="eye-outline"></ion-icon>
              </div>
              <Image
              className='w-[100%] h-[100%] object-cover transition-1'
              src={'/assets/images/project-1.jpg'}
              alt='finance'
              loading='lazy'
              width={600}
              height={450}
              />
            </figure>
            <h3>
              Finance
            </h3>
            <p>
              Web development
            </p>
          </Link>
        </li>

      </ul>
    </section>
  )
}

export default ProjectCard