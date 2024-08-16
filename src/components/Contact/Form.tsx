import React from 'react'

const Form = () => {
  return (
    <section className='mb-[10px]'>
      <h3 className='text-white-2 capitalize text-2 mb-[20px]'>
        Contact Form
      </h3>

      <form action="#">
        <div className='grid grid-cols-[1fr] gap-[25px] mb-[25px] md:gap-[30px] md:mb-[30px] lg:grid-cols-2'>
          <input
          className='block w-[100%] bg-transparent text-white-2 text-6 font-400 py-[13px] px-[20px] border border-solid border-jet rounded-[14px] outline-none placeholder:font-500 focus:border-orange-yellow-crayola focus:invalid:border-bittersweet-shimmer md:py-[15px] md:px-[20px]'
          type="text"
          name='fullName'
          placeholder='Full Name'
          required/>

          <input
          className='block w-[100%] bg-transparent text-white-2 text-6 font-400 py-[13px] px-[20px] border border-solid border-jet rounded-[14px] outline-none placeholder:font-500 focus:border-orange-yellow-crayola focus:invalid:border-bittersweet-shimmer md:py-[15px] md:px-[20px]'
          type="email"
          name='email'
          placeholder='Email Address'
          required/>
        </div>

        <textarea
        className='block w-[100%] bg-transparent text-white-2 text-6 font-400 py-[13px] px-[20px] border border-solid border-jet rounded-[14px] outline-none placeholder:font-500 focus:border-orange-yellow-crayola focus:invalid:border-bittersweet-shimmer md:py-[15px] md:px-[20px] min-h-[100px] h-[120px] max-h-[200px] resize-y mb-[25px] md:mb-[30px] hide-resizer'
        name='message'
        placeholder='Your message'
        required >
        </textarea>

        <button
          className='relative w-[100%] bg-border-gradient-onyx text-orange-yellow-crayola flex justify-center items-center gap-[10px] py-[13px] px-[20px] rounded-[14px] text-6 capitalize shadow-3 z-[1] transition-1 before:content-[""] before:absolute before:inset-[1px] before:bg-gradient-jet before:z-[-1] before:transition-1 hover:bg-gradient-yellow-1 hover:before:bg-gradient-yellow-2 disabled:opacity-[0.7] disabled:cursor-not-allowed disabled:hover:bg-border-gradient-onyx disabled:hover:before:bg-gradient-jet md:py-[16px] md:px-[20px] lg:w-max lg:ml-auto'
          type='submit'
          disabled={true}>
            <ion-icon className='text-[16px] md:text-[18px]' name="paper-plane"></ion-icon>
            <span>Send Message</span>
        </button>

      </form>
    </section>
  )
}

export default Form