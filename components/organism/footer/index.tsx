import { Search } from '@/components/molecules';
import { Accordion } from '@/components/molecules/accordion';
import { categores, footer } from '@/data/footer';
import { LANGUAGES } from '@/data/language';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

export const Footer = () => {
   const [visible, setVisible] = useState(false);

   return (
      <footer className="bg-[#191b1f] text-white pt-7 relative">
         <div className="w-full px-8  mb-16 mx-auto lg:max-w-[1440px] lg:px-[70px]">
            <div className="flex flex-col lg:flex-row">
               <div className="mr-24 w-full lg:w-80 mb-8">
                  <div className="w-full">
                     <div className="mb-5 w-full">
                        <div className="text-lg font-semibold text-white/70 tracking-[0.45px]">
                           PLARIUM
                        </div>
                        <div className="text-[30px] lg:text-4xl font-bold mb-3">
                           TAKE THE WORLD
                        </div>
                        <div className="text-base text-white/30">
                           © 2010-2023 Plarium
                        </div>
                     </div>
                     <div className="flex w-full">
                        <Link
                           href={'/'}
                           className="hidden lg:block h-10 w-10 bg-[#2f2f33] mr-3 p-[10px] rounded-md"
                        >
                           <Search />
                        </Link>
                        <div className="h-10 w-full relative rounded-md bg-[#2f2f33] select-none lg:max-w-[250px]">
                           <button
                              onClick={() => setVisible(!visible)}
                              className={clsx(
                                 'h-10 w-full text-lg',
                                 'font-medium pl-4',
                                 'cursor-pointer text-left',
                                 'after:block after:absolute after:top-[17px]',
                                 "after:right-[15px] after:content-['']",
                                 `${
                                    visible
                                       ? 'after:border-t-transparent after:border-r-transparent after:border-b-white/40 after:border-l-transparent after:border-x-[6px] after:border-b-[7px]'
                                       : 'after:border-solid after:border-x-[6px] after:border-t-[7px] after:border-t-white/25 after:border-x-transparent after:border-b-transparent'
                                 }`,
                              )}
                           >
                              <span>English</span>
                              <div
                                 className={`bg-[#2f2f33] absolute ${
                                    visible
                                       ? 'visible opacity-100'
                                       : 'opacity-0 invisible'
                                 } w-full bottom-[45px] right-0 rounded transition-[visibility,opacity] duration-[0.3s,0.3s] delay-[0s]`}
                              >
                                 {LANGUAGES.map((lang) => (
                                    <Link
                                       className="text-lg bg-transparent flex items-center text-white/60 font-medium px-[10px] leading-[40px] hover:text-white"
                                       key={lang}
                                       href={lang}
                                    >
                                       {lang}
                                    </Link>
                                 ))}
                              </div>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>

               <section className="lg:hidden">
                  {categores.map(({ id, name, title }) => {
                     return <Accordion key={id} title={name} items={title} />;
                  })}
               </section>

               <div className="hidden lg:flex justify-between mt-8">
                  {categores.map(({ id, name, title }) => (
                     <div key={id} className=" w-44 ml-14">
                        <div className="text-xl font-semibold mb-4">{name}</div>
                        <ul>
                           {title.map((list) => (
                              <li key={list.name} className="mb-2">
                                 <Link
                                    href={'/'}
                                    className="text-base mb-1 text-white/80 hover:text-[#fcfcfc]"
                                 >
                                    {list.name}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <div className="h-full bg-transparent lg:bg-black">
            <div>
               <div className="flex lg:max-w-[1140px] px-8 py-8  mx-auto lg:py-4 justify-center">
                  <div className="overflow-hidden">
                     <ul className="flex flex-wrap">
                        {footer.map(({ name }) => (
                           <li
                              key={name}
                              className="leading-8 px-4 pb-1 lg:first:border-0 lg:border-l border-solid border-l-[rgb(79,77,77)] "
                           >
                              <Link
                                 href={'/'}
                                 className="text-base text-white/70 hover:text-[#fcfcfc] "
                              >
                                 {name}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};
