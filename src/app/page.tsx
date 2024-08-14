import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="m-[15px] mx-3 mb-[75px] min-w-[259px]">


      <aside className="bg-eerie-black-2 border border-jet rounded-[20px] p-[15px] shadow-1 z-[1] mb-[15px] max-h-[405px] overflow-hidden transition-2">

        <div className="relative flex justify-start items-center gap-[15px]">

          <figure className="bg-gradient-onyx rounded-[20px]">
            <Image
            src={'/assets/images/zi3wda~4.jpg'}
            alt="John Okall"
            width={80}
            height={80}
            ></Image>
          </figure>

          <div>
            <h1 className="text-white-2 text-fs-3 font-fw-500 tracking-[-0.25px] mb-[10px]">
              John Omollo Okall
            </h1>

            <p className="text-white-1 bg-onyx font-fs-8 font-fw-300 w-max p-[3px] px-[12px] rounded-[8px]">
              Web Developer
            </p>

          </div>



          <div className="w-[100%] h-[1px] bg-jet m-[16px] mx-0">

          </div>

          <ul className="grid grid-cols-[1fr] gap-[16px]">

            <li className="min-w-[100%] flex items-center gap-[16px]">
              <div>

              </div>
              <div>
                <p className="max-w-[calc(100%-46px)] text-light-gray-70 font-fs-8 mb-[2px] uppercase">
                  Email
                </p>
                <Link
                className="text-white-2 font-fs-7"
                href={"mailto:Jhnprimee@gmail.com"}>
                  Jhnprimee@gmail.com
                </Link>
              </div>
            </li>

            <li className="min-w-[100%] flex items-center gap-[16px]">
              <div>

              </div>
              <div>
                <p className="max-w-[calc(100%-46px)] text-light-gray-70 font-fs-8 mb-[2px] uppercase">
                  Phone
                </p>
                <Link
                className="text-white-2 font-fs-7"
                href={"tel:+254793464784"}>
                  +254 793 464784
                </Link>
              </div>
            </li>

            <li className="min-w-[100%] flex items-center gap-[16px]">
              <div>

              </div>
              <div>
                <p className="max-w-[calc(100%-46px)] text-light-gray-70 font-fs-8 mb-[2px] uppercase">
                  Birthday
                </p>
                <time datetime="2000-1-1">
                  January 01, 2000
                </time>
              </div>
            </li>

            <li className="min-w-[100%] flex items-center gap-[16px]">
              <div>

              </div>
              <div>
                <p className="max-w-[calc(100%-46px)] text-light-gray-70 font-fs-8 mb-[2px] uppercase">
                  Location
                </p>
                <address>
                  Parklands, Nairobi, Kenya
                </address>
              </div>
            </li>
          </ul>

          <div className="w-[100%] h-[1px] bg-jet m-[16px] mx-0"></div>

          <ul className="flex justify-start items-center gap-[15px] pb-[4px] pl-[7px]">
            <li>
              <Link
              className="text-light-gray-70 text-[18px]"
              href={'#'}
              >
                FaceBook
              </Link>
            </li>

            <li>
              <Link
              className="text-light-gray-70 text-[18px]"
              href={'#'}
              >
                Twitter
              </Link>
            </li>

            <li>
              <Link
              className="text-light-gray-70 text-[18px]"
              href={'#'}
              >
                Instagram
              </Link>
            </li>
          </ul>

        </div>

      </aside>



      <div className="relative w-max m-auto">
        <nav className="fixed bottom-0 left-0 w-[100%] bg-[hsla(240, 1%, 17%, 0.75)] backdrop-blur-[10px] border border-solid border-jet rounded-t-[12px] rounded-b-none shadow-2 z-5">
          <ul className="flex flex-wrap justify-center items-center px-[10px] py-0">

          </ul>
        </nav>
      </div>


    </main>
  );
}
