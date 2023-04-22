import { Search } from '@/components/molecules';
import { Accordion } from '@/components/molecules/accordion';
import { categores, footer } from '@/data/footer';
import clsx from 'clsx';
import Link from 'next/link';

export const Footer = () => {
   const lorem =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
   return (
      <footer className="bg-[#191b1f] text-white pt-7 relative">
         <div className="w-full lg:max-w-[1440px] px-8 lg:px-[70px] mb-16 mx-auto">
            <div className="flex flex-col lg:flex-row">
               <div className="mr-24 w-80 mb-8">
                  <div>
                     <div className="mb-5">
                        <div className="text-lg font-semibold text-white/70 tracking-[0.45px]">
                           PLARIUM
                        </div>
                        <div className="text-4xl font-bold mb-3">
                           TAKE THE WORLD
                        </div>
                        <div className="text-base text-white/30">
                           © 2010-2023 Plarium
                        </div>
                     </div>
                     <div className="flex">
                        <Link
                           href={'/'}
                           className="hidden lg:block h-10 w-10 bg-[#2f2f33] mr-3 p-[10px] rounded-md"
                        >
                           <Search />
                        </Link>
                        <div className="h-10 w-full relative rounded-md bg-[#2f2f33] select-none max-w-[250px]">
                           <button
                              className={clsx(
                                 'h-10 w-full text-lg',
                                 'font-medium pl-4',
                                 'cursor-pointer text-left',
                                 'after:block after:absolute after:top-[17px]',
                                 "after:right-[15px] after:content-['']",
                                 'after:border-solid after:border-x-[6px] after:border-t-[7px]',
                                 'after:border-t-white/25',
                                 'after:border-x-transparent',
                                 'after:border-b-transparent',
                              )}
                           >
                              <span>English</span>
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
         <div className="h-full lg:h-16 bg-transparent lg:bg-black">
            <div>
               <div className="flex lg:max-w-[1140px] px-8 py-8  mx-auto lg:py-4 justify-center">
                  <div className="overflow-hidden">
                     <ul className="flex flex-wrap">
                        {footer.map(({ name }) => (
                           <li
                              key={name}
                              className="px-4 pb-1 lg:first:border-0 lg:border-l border-solid border-l-[rgb(79,77,77)] "
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
