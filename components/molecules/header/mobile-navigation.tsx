import { useState } from 'react';
import { HambergerIcon } from '../icons';
import { Modal } from '../modal';
import { Tab } from '@headlessui/react';
import { XMarkIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import {
   MENUITEMS_COMMUNITY,
   MENUITEMS_GAMES,
   MENUITEMS_RESOURCES,
} from '@/data/menuitems';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const MobileNav = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [isSelectGameMenu, setSelectGamesMenu] = useState({
      selected: false,
      name: 'Home',
   });

   const menuItems = [
      {
         name: 'Try the Game',
         link: 'https://h5-test-fh.dashfun.games/',
      },
      {
         name: 'Bass Website',
         link: 'https://www.bassweb3.com/',
      },
   ];

   return (
      <div className={`flex justify-end w-full lg:hidden `}>
         <button className="z-[5002]">
            {isOpen ? (
               <div onClick={() => setIsOpen(false)}>
                  <XMarkIcon className="h-7 w-7 text-white z-[999]" />
               </div>
            ) : (
               <div onClick={() => setIsOpen(true)}>
                  <HambergerIcon className="h-8 w-8 text-white" />
               </div>
            )}
         </button>
         <Modal
            isOpen={isOpen}
            onClose={setIsOpen}
            className="h-[calc(100vh-55px)] -z-10"
         >
            <div
               className={`flex w-screen flex-shrink-0 transition-transform duration-[0.3s] ease-linear ${inter.className} `}
            >
               <div>
                  <div className="mt-9 flex flex-col items-start">
                     <Link
                        href={'/'}
                        className="text-2xl font-extrabold mb-6"
                        onClick={() => {
                           setIsOpen(false);
                        }}
                     >
                        Home
                     </Link>
                     {menuItems.map(({ name, link }) => (
                        <a
                           key={name}
                           className="text-2xl font-extrabold mb-6"
                           target="_blank"
                           href={link}
                           onClick={() => {
                              setIsOpen(false);
                           }}
                        >
                           {name}
                        </a>
                     ))}
                  </div>
               </div>
            </div>
         </Modal>
      </div>
   );
};
