"use client"
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import About from '../components/About/About';
import Navbar from '../components/Navbar/Navbar';
import Resume from '../components/Resume/Resume';
import Portfolio from '../components/Portfolio/Portfolio';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';

export default function Home() {
  const [activeComponent, setActiveComponent] = useState('About');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 300); // 300ms transition
    return () => clearTimeout(timer);
  }, [activeComponent]);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Blog':
        return <Blog />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <main className='m-[15px] mb-[75px] min-w-[259px] md:mt-[60px] md:mb-[100px] xl:mb-[60px] 2xl:max-w-[1200px] 2xl:flex 2xl:justify-center 2xl:items-stretch 2xl:gap-[25px] 2xl:mx-auto'>
      <Sidebar />
      <div className='xl:relative xl:w-max xl:m-auto 2xl:min-w-[75%] 2xl:w-[75%] 2xl:m-0'>
        <Navbar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {renderActiveComponent()}
        </div>
      </div>
      
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