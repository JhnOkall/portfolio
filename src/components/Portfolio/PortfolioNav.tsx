import React from 'react'

const PortfolioNav = () => {
  return (
    <ul className='hidden lg:flex lg:justify-start items-center lg:gap-[25px] lg:pl-[5px] lg:mb-[30px]'>
        <li>
            <button className='text-light-gray text-5 transition-1 hover:text-light-gray-70 active:text-orange-yellow-crayola'>
                All
            </button>
        </li>

        <li>
            <button className='text-light-gray text-5 transition-1 hover:text-light-gray-70 active:text-orange-yellow-crayola'>
                Web design
            </button>
        </li>

        <li>
            <button className='text-light-gray text-5 transition-1 hover:text-light-gray-70 active:text-orange-yellow-crayola'>
                Applications
            </button>
        </li>

        <li>
            <button className='text-light-gray text-5 transition-1 hover:text-light-gray-70 active:text-orange-yellow-crayola'>
                Web development
            </button>
        </li>
    </ul>
  )
}

export default PortfolioNav