import React from 'react'

interface NavbarProps {
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
  activeComponent: string;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveComponent, activeComponent }) => {
  const getButtonClass = (componentName: string) => {
    const baseClass = 'text-8 transition-all duration-300 md:text-8 lg:text-8 xl:font-500 navbar-link relative'
    const inactiveClass = 'text-light-gray hover:text-light-gray-70 focus:text-light-gray-70'
    const activeClass = 'text-orange-yellow-crayola'
    
    return `${baseClass} ${componentName === activeComponent ? activeClass : inactiveClass}`
  }

  return (
    <nav className='fixed bottom-0 left-0 w-[100%] navbar border border-solid rounded-t-[12px] shadow-2 z-[5] md:rounded-t-[20px] md:rounded-b-[0] xl:absolute xl:bottom-auto xl:top-0 xl:left-auto xl:right-0 xl:w-max xl:rounded-tr-[20px] xl:rounded-bl-[20px] xl:rounded-tl-[0] xl:rounded-br-[0] xl:shadow-none'>
      <ul className='flex flex-wrap justify-center items-center navbar-list md:gap-[20px] xl:gap-[30px]'>
        {['About', 'Resume', 'Portfolio', 'Blog', 'Contact'].map((item) => (
          <li key={item} className="relative">
            <button 
              onClick={() => setActiveComponent(item)}
              className={getButtonClass(item)}
            >
              {item}
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-orange-yellow-crayola transform origin-left transition-transform duration-300 ${item === activeComponent ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar