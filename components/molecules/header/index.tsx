import clsx from 'clsx';
import Link from 'next/link';
import { Logo } from '../icons';
import { DesktopNav } from './desktop-navigation';
import { MobileNav } from './mobile-navigation';
import { LANGUAGES } from '@/data/language';
import { useState } from 'react';
import { Modal } from '../modal';
import { Dialog } from '@headlessui/react';
import { XCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Button, ButtonVariant } from '@/components/atom';

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
   const [isOpenLoginModal, setLoginModal] = useState(false);
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
            <div className="mr-5 relative hidden lg:block">
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
               <button
                  className="rounded-md px-[17px] text-sm font-bold h-8 text-blue-400 bg-white"
                  onClick={() => setLoginModal(!isOpenLoginModal)}
               >
                  Log In
               </button>
            </div>
         </div>
         <Modal
            isOpen={isOpenLoginModal}
            onClose={setLoginModal}
            className="rounded bg-[rgb(43,44,48)] lg:w-[500px] lg:drop-shadow-2xl relative p-0"
         >
            <button
               className="absolute top-[10px] right-[10px]"
               onClick={() => setLoginModal(!isOpenLoginModal)}
            >
               <XMarkIcon className="p-1 h-7 w-7  text-white bg-black/30 rounded-full" />
            </button>
            <div className="px-[45px] pt-[45px] pb-[38px] min-h-[480px]">
               <div>
                  <Dialog.Title
                     className={
                        ' text-white text-3xl font-semibold leading-9 text-center mb-[10px]'
                     }
                  >
                     Great to see you again!
                  </Dialog.Title>
                  <Dialog.Description
                     className={
                        'text-lg mb-[35px] font-normal leading-5 text-center text-white/70'
                     }
                  >
                     Login into your Plaruim account
                  </Dialog.Description>
               </div>
               <div>
                  <input
                     className="h-[50px] px-5 rounded-md w-full font-semibold leading-5 relative outline-0"
                     placeholder="Enter you email"
                  />
               </div>
               <div className="mt-[35px] flex justify-between">
                  <button className="text-[rgb(56,151,255)] font-semibold bg-transparent text-lg mr-[10px]">
                     Create Account
                  </button>
                  <Button variant={ButtonVariant.PRIMARY} className="shadow-lg">
                     Next
                  </Button>
               </div>
               <div className="mt-[55px] text-center">
                  <div
                     className={clsx(
                        'before:h-[2px] before:bg-white/10 before:block before:mr-[10px] before:flex-grow-[1]',
                        'after:h-[2px] after:bg-white/10 after:block after:ml-[10px] after:flex-grow-[1]',
                        'flex items-center justify-center',
                        'text-center font-medium text-base',
                        'text-white/70',
                     )}
                  >
                     Log in with:{' '}
                  </div>
               </div>
            </div>
         </Modal>
      </header>
   );
};
