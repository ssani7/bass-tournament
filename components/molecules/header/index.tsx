import clsx from 'clsx';
import Link from 'next/link';
import { Logo } from '../icons';
import { DesktopNav } from './desktop-navigation';
import { MobileNav } from './mobile-navigation';
import { LANGUAGES } from '@/data/language';
import { useState } from 'react';

export type NavGroupProps = {
   name: string;
};

const navigation = [
   {
      name: 'Games',
   },
   {
      name: 'Community',
   },
   {
      name: 'Resources',
   },
];

export const Header = () => {
   const [langSwitcher, setLangSwitcher] = useState(false);
   return (
      <header
         className={clsx(
            'bg-[rgb(25,27,31)]',
            'h-[55px]',
            'fixed z-[5002] right-0 left-0 top-0',
            'block',
         )}
      >
         <div className="flex items-center mx-auto px-6 max-w-screen-2xl h-full">
            <Link
               href={'/'}
               className="h-6 flex-none flex items-center justify-center"
            >
               <Logo className="h-[30px] w-[40px] lg:h-[35px] lg:w-[50px]" />
            </Link>
            <DesktopNav navigation={navigation} />
            <MobileNav />
            <div className="mr-5 relative">
               <button onClick={() => setLangSwitcher(!langSwitcher)}>
                  <span className="uppercase text-white text-xs">EN</span>
               </button>
               <div
                  className={clsx(
                     'absolute w-[185px] bg-[#2f2f33] rounded left-[calc(50%-92.5px)] top-[calc(100%-5px)] right-0 bottom-auto transition-[visibility,opacity] duration-[0.3s,0.3s] delay-[0s]',
                     `${
                        langSwitcher
                           ? 'visible opacity-100'
                           : 'invisible opacity-0'
                     }`,
                  )}
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
            </div>

            <div className="hidden lg:block pl-2 flex-none">
               <button className="rounded-md px-[17px] text-sm font-bold h-8 text-blue-400 bg-white">
                  Log In
               </button>
            </div>
         </div>
      </header>
   );
};
