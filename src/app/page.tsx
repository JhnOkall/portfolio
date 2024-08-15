import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import About from '../components/About/About';
import Resume from '../components/Resume/Resume';
import Portfolio from '../components/Portfolio/Portfolio';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';

export default function Home() {
  return (
    <main className='m-[15px] mb-[75px] min-w-[259px] md:mt-[60px] md:mb-[100px] xl:mb-[60px] 2xl:max-w-[1200px] xl:flex xl:justify-center xl:items-center xl:gap-[25px] xl:mx-auto'>
      <Sidebar />

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
      
      <script
          type="module"
          src="https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.js"
        ></script>
    </main>
  );
}