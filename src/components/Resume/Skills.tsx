import React from 'react'

const Skills = () => {
  return (
    <section>
      <h3 className='text-white-2 capitalize text-2 mb-[20px]'>
        My Skills
      </h3>
      <ul className='p-[20px] relative bg-gradient-onyx pt-[45px] rounded-[14px] shadow-2 cursor-pointer z-[1] before:content-[""] before:absolute before:inset-[1px] before:bg-gradient-jet before:z-[-1] md:p-30px md:pt-[25px]'>
        <li className='skills-item'>
          <div className='flex items-start gap-[5px] mb-[8px]'>
            <h5 className='text-white-2 capitalize text-7 font-500'>
              Web Design
            </h5>
            <data className='text-light-gray text-7 font-300' value="80">80%</data>
          </div>
          <div className='bg-jet w-[100%] h-[8px] rounded-[10px]'>
            <div className='bg-red-500 h-[100] w-[80%] rounded-[10px]'></div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Skills