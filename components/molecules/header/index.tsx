import clsx from 'clsx';
import Link from 'next/link';
import { Logo } from '../icons';
import { DesktopNav } from './desktop-navigation';
import { MobileNav } from './mobile-navigation';

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
            <div className="hidden lg:block pl-2 flex-none">
               <button className="rounded-md px-[17px] font-bold h-8 text-blue-400 bg-white">
                  Log In
               </button>
            </div>
         </div>
      </header>
   );
};
