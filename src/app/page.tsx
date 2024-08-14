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
      <About />
      
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