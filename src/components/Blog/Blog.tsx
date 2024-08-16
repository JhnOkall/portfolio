import React from 'react'
import BlogPost from './BlogPost'

const Blog = () => {
  return (
    <article className='bg-eerie-black-2 border border-solid border-jet rounded-[20px] p-[15px] shadow-1 z-[1] md:w-[520px] md:ms-auto md:me-auto lg:w-[768px] xl:w-[950px] 2xl:w-auto 2xl:min-h-[100%]'>
      <header>
        <h2 className='text-white-2 capitalize text-1 relative pb-[7px] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[3px] after:bg-text-gradient-yellow after:rounded-[3px] mb-[15px]'>
          Blog
        </h2>
      </header>

      <BlogPost />
    </article>
  )
}

export default Blog