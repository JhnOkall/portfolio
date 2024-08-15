import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed bottom-0 left-0 w-[100%] navbar border border-solid rounded-t-[12px] shadow-2 z-[5] md:rounded-t-[20px] md:rounded-b-[0] xl:absolute xl:bottom-auto xl:top-0 xl:left-auto xl:right-0 xl:w-max xl:rounded-tr-[20px] xl:rounded-bl-[20px] xl:rounded-tl-[0] xl:rounded-br-[0] xl:shadow-none'>

        <ul className='flex flex-wrap justify-center items-center navbar-list md:gap-[20px] xl:gap-[30px]'>

          <li>
            <button className='text-light-gray text-8 transition-1 hover:text-light-gray-70 focus:text-light-gray-70 active:text-orange-yellow-crayola md:text-8 lg:text-8 xl:font-500 navbar-link'>
              About
            </button>
          </li>

          <li>
            <button className='text-light-gray text-8 transition-1 hover:text-light-gray-70 focus:text-light-gray-70 active:text-orange-yellow-crayola md:text-8 lg:text-8 xl:font-500 navbar-link'>
              Resume
            </button>
          </li>

          <li>
            <button className='text-light-gray text-8 transition-1 hover:text-light-gray-70 focus:text-light-gray-70 active:text-orange-yellow-crayola md:text-8 lg:text-8 xl:font-500 navbar-link'>
              Portfolio
            </button>
          </li>

          <li>
            <button className='text-light-gray text-8 transition-1 hover:text-light-gray-70 focus:text-light-gray-70 active:text-orange-yellow-crayola md:text-8 lg:text-8 xl:font-500 navbar-link'>
              Blog
            </button>
          </li>

          <li>
            <button className='text-light-gray text-8 transition-1 hover:text-light-gray-70 focus:text-light-gray-70 active:text-orange-yellow-crayola md:text-8 lg:text-8 xl:font-500 navbar-link'>
              Contact
            </button>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar