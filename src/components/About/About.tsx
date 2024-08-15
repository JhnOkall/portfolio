import React from 'react'
import Services from './Services'
import Testimonials from './Testimonials'

const About = () => {
  return (
    <article className='bg-eerie-black-2 border border-solid border-jet rounded-[20px] p-[15px] shadow-1 z-[1] md:w-[520px] md:ms-auto md:me-auto lg:w-[768px] xl:w-[950px] 2xl:w-auto 2xl:min-h-[100%]'>
      <header>
        <h2 className='text-white-2 capitalize text-1 relative pb-[7px] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[3px] after:bg-text-gradient-yellow after:rounded-[3px] mb-[15px]'>
          About Me
        </h2>
      </header>

      <section className='text-light-gray text-6 font-300 leading-[1.6] md:mb-[40px]'>
        <p className='mb-[15px]'>
        I'm Creative Director and UI/UX Designer from Nairobi, Kenya, working in web development and print media.
        I enjoy
        turning complex problems into simple, beautiful and intuitive designs.
        </p>
        <br />
        <p className='mb-[15px]'>
        My job is to build your website so that it is functional and user-friendly but at the same time attractive.
        Moreover, I
        add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
        across your
        message and identity in the most creative way. I created web design for many famous brand companies.
        </p>
      </section>

      <Services />
      
      <Testimonials />
    </article>
  )
}

export default About