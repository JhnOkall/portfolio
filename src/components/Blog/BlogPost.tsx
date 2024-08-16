import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogPost = () => {
  return (
    <section className='mb-10px'>
      <ul className='grid grid-cols-[1fr] gap-[20px] md:gap-[30px] lg:grid-cols-2'>

        <li className='relative bg-border-gradient-onyx h-[100%] shadow-4 rounded-[16px] z-[1] before:content-[""] before:absolute  before:inset-[1px] before:rounded-[16px] before:bg-eerie-black-1 before:z-[-1]'>
          <Link
          href={'#'}>
            <figure className='w-[100% h-[200px] rounded-[12px] overflow-hidden sm:h-auto md:rounded-[16px] xl:h-[230px]'>
              <Image
              className='w-[100%] h-[100%] object-cover transition-1 hover:scale-[1.1]'
                src={'/assets/images/blog-1.jpg'}
                alt='Design conference in 2022'
                loading='lazy'
                width={600}
                height={400}
              />
            </figure>
            <div className='p-[15px] md:p-[35px]'>
              <div className='flex justify-start items-center gap-[7px] mb-[10px]'>
                <p className='text-light-gray-70 text-6 font-300'>
                  Design
                </p>
                <span className='bg-light-gray-70 w-[4px] h-[4px] rounded-[4px]'></span>
                <time dateTime="2022-02-23">
                  23<sup>rd</sup> Feb 2022
                </time>
              </div>
              <h3 className='text-white-2 capitalize text-2 mb-[10px] leading-[1.3] transition-1 hover:text-orange-yellow-crayola'>
                Design conferences in 2022
              </h3>
              <p className='text-light-gray text-6 font-300 leading-[1.6]'>
                Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
              </p>
            </div>
          </Link>
        </li>

        <li className='relative bg-border-gradient-onyx h-[100%] shadow-4 rounded-[16px] z-[1] before:content-[""] before:absolute  before:inset-[1px] before:rounded-[16px] before:bg-eerie-black-1 before:z-[-1]'>
          <Link
          href={'#'}>
            <figure className='w-[100% h-[200px] rounded-[12px] overflow-hidden sm:h-auto md:rounded-[16px] xl:h-[230px]'>
              <Image
              className='w-[100%] h-[100%] object-cover transition-1 hover:scale-[1.1]'
                src={'/assets/images/blog-2.jpg'}
                alt='Best fonts every designer should know about'
                loading='lazy'
                width={600}
                height={400}
              />
            </figure>
            <div className='p-[15px] md:p-[35px]'>
              <div className='flex justify-start items-center gap-[7px] mb-[10px]'>
                <p className='text-light-gray-70 text-6 font-300'>
                  Design
                </p>
                <span className='bg-light-gray-70 w-[4px] h-[4px] rounded-[4px]'></span>
                <time dateTime="2022-02-23">
                  23<sup>rd</sup> Feb 2022
                </time>
              </div>
              <h3 className='text-white-2 capitalize text-2 mb-[10px] leading-[1.3] transition-1 hover:text-orange-yellow-crayola'>
                Best fonts every designer should know about
              </h3>
              <p className='text-light-gray text-6 font-300 leading-[1.6]'>
                Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.
              </p>
            </div>
          </Link>
        </li>

        <li className='relative bg-border-gradient-onyx h-[100%] shadow-4 rounded-[16px] z-[1] before:content-[""] before:absolute  before:inset-[1px] before:rounded-[16px] before:bg-eerie-black-1 before:z-[-1]'>
          <Link
          href={'#'}>
            <figure className='w-[100% h-[200px] rounded-[12px] overflow-hidden sm:h-auto md:rounded-[16px] xl:h-[230px]'>
              <Image
              className='w-[100%] h-[100%] object-cover transition-1 hover:scale-[1.1]'
                src={'/assets/images/blog-3.jpg'}
                alt='Design digest #80'
                loading='lazy'
                width={600}
                height={400}
              />
            </figure>
            <div className='p-[15px] md:p-[35px]'>
              <div className='flex justify-start items-center gap-[7px] mb-[10px]'>
                <p className='text-light-gray-70 text-6 font-300'>
                  Design
                </p>
                <span className='bg-light-gray-70 w-[4px] h-[4px] rounded-[4px]'></span>
                <time dateTime="2022-02-23">
                  23<sup>rd</sup> Feb 2022
                </time>
              </div>
              <h3 className='text-white-2 capitalize text-2 mb-[10px] leading-[1.3] transition-1 hover:text-orange-yellow-crayola'>
                Design digest #80
              </h3>
              <p className='text-light-gray text-6 font-300 leading-[1.6]'>
                Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.
              </p>
            </div>
          </Link>
        </li>

        <li className='relative bg-border-gradient-onyx h-[100%] shadow-4 rounded-[16px] z-[1] before:content-[""] before:absolute  before:inset-[1px] before:rounded-[16px] before:bg-eerie-black-1 before:z-[-1]'>
          <Link
          href={'#'}>
            <figure className='w-[100% h-[200px] rounded-[12px] overflow-hidden sm:h-auto md:rounded-[16px] xl:h-[230px]'>
              <Image
              className='w-[100%] h-[100%] object-cover transition-1 hover:scale-[1.1]'
                src={'/assets/images/blog-4.jpg'}
                alt='UI interactions of the week'
                loading='lazy'
                width={600}
                height={400}
              />
            </figure>
            <div className='p-[15px] md:p-[35px]'>
              <div className='flex justify-start items-center gap-[7px] mb-[10px]'>
                <p className='text-light-gray-70 text-6 font-300'>
                  Design
                </p>
                <span className='bg-light-gray-70 w-[4px] h-[4px] rounded-[4px]'></span>
                <time dateTime="2022-02-23">
                  23<sup>rd</sup> Feb 2022
                </time>
              </div>
              <h3 className='text-white-2 capitalize text-2 mb-[10px] leading-[1.3] transition-1 hover:text-orange-yellow-crayola'>
                UI interactions of the week
              </h3>
              <p className='text-light-gray text-6 font-300 leading-[1.6]'>
                Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.
              </p>
            </div>
          </Link>
        </li>

        <li className='relative bg-border-gradient-onyx h-[100%] shadow-4 rounded-[16px] z-[1] before:content-[""] before:absolute  before:inset-[1px] before:rounded-[16px] before:bg-eerie-black-1 before:z-[-1]'>
          <Link
          href={'#'}>
            <figure className='w-[100% h-[200px] rounded-[12px] overflow-hidden sm:h-auto md:rounded-[16px] xl:h-[230px]'>
              <Image
              className='w-[100%] h-[100%] object-cover transition-1 hover:scale-[1.1]'
                src={'/assets/images/blog-5.jpg'}
                alt='The forgotten art of spacing'
                loading='lazy'
                width={600}
                height={400}
              />
            </figure>
            <div className='p-[15px] md:p-[35px]'>
              <div className='flex justify-start items-center gap-[7px] mb-[10px]'>
                <p className='text-light-gray-70 text-6 font-300'>
                  Design
                </p>
                <span className='bg-light-gray-70 w-[4px] h-[4px] rounded-[4px]'></span>
                <time dateTime="2022-02-23">
                  23<sup>rd</sup> Feb 2022
                </time>
              </div>
              <h3 className='text-white-2 capitalize text-2 mb-[10px] leading-[1.3] transition-1 hover:text-orange-yellow-crayola'>
                The forgotten art of spacing
              </h3>
              <p className='text-light-gray text-6 font-300 leading-[1.6]'>
              Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Link>
        </li>

        <li className='relative bg-border-gradient-onyx h-[100%] shadow-4 rounded-[16px] z-[1] before:content-[""] before:absolute  before:inset-[1px] before:rounded-[16px] before:bg-eerie-black-1 before:z-[-1]'>
          <Link
          href={'#'}>
            <figure className='w-[100% h-[200px] rounded-[12px] overflow-hidden sm:h-auto md:rounded-[16px] xl:h-[230px]'>
              <Image
              className='w-[100%] h-[100%] object-cover transition-1 hover:scale-[1.1]'
                src={'/assets/images/blog-6.jpg'}
                alt='Design Digest #79'
                loading='lazy'
                width={600}
                height={400}
              />
            </figure>
            <div className='p-[15px] md:p-[35px]'>
              <div className='flex justify-start items-center gap-[7px] mb-[10px]'>
                <p className='text-light-gray-70 text-6 font-300'>
                  Design
                </p>
                <span className='bg-light-gray-70 w-[4px] h-[4px] rounded-[4px]'></span>
                <time dateTime="2022-02-23">
                  23<sup>rd</sup> Feb 2022
                </time>
              </div>
              <h3 className='text-white-2 capitalize text-2 mb-[10px] leading-[1.3] transition-1 hover:text-orange-yellow-crayola'>
                Design digest #79
              </h3>
              <p className='text-light-gray text-6 font-300 leading-[1.6]'>
                Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.
              </p>
            </div>
          </Link>
        </li>

      </ul>
    </section>
  )
}

export default BlogPost