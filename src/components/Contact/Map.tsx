import React from 'react'

const Map = () => {
  return (
    <section className='relative h-[250px] w-[100%] rounded-[16px] mb-[30px] border border-solid border-jet overflow-hidden md:h-[380px] md:rounded-[18px]'>
        <figure className='h-[100%]'>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8550367616676!2d36.822186373727384!3d-1.2590613355943698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f171d8b99104b%3A0xb0d1db842f4228ab!2s89200%20Mtama%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1704629913892!5m2!1sen!2ske"
        width="600" 
        height="450"
        className="border-0 grayscale-[1] invert-[1] w-[100%] h-[100%] border-none"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
        </figure>
    </section>
  )
}

export default Map