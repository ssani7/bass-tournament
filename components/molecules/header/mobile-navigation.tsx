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
      name: 'Categories',
   });

   return (
      <div className={`flex justify-end w-full lg:hidden `}>
         <button className="z-[5002]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
               <XMarkIcon className="h-7 w-7 text-white" />
            ) : (
               <HambergerIcon className="h-8 w-8 text-white" />
            )}
         </button>
         <Modal isOpen={isOpen} onClose={setIsOpen}>
            <div
               className={`flex w-screen flex-shrink-0 transition-transform duration-[0.3s] ease-linear ${
                  inter.className
               } ${
                  isSelectGameMenu.selected
                     ? 'translate-x-[-100vw]'
                     : 'translate-x-[0px]'
               }`}
            >
               <Tab.Group>
                  <div className="w-screen flex-shrink-0 ">
                     <Tab.List className="text-white/70 mt-10 flex overflow-x-scroll">
                        <Tab as={'div'}>
                           {({ selected }) => (
                              <button
                                 className={`${
                                    selected
                                       ? 'text-white after:bg-white/30 after:absolute after:bottom-0 after:left-0 after:w-[calc(100%-20px)] after:h-[2px] after:rounded-[1.5px] after:content-[""]'
                                       : 'text-white/70'
                                 } relative pr-5 text-lg font-semibold pb-1 bg-transparent`}
                              >
                                 Games
                              </button>
                           )}
                        </Tab>
                        <Tab as={'div'}>
                           {({ selected }) => (
                              <button
                                 className={`${
                                    selected
                                       ? 'text-white after:bg-white/30 after:absolute after:bottom-0 after:left-0 after:w-[calc(100%-20px)] after:h-[2px] after:rounded-[1.5px] after:content-[""]'
                                       : 'text-white/70'
                                 } relative pr-5 text-lg font-semibold pb-1 `}
                              >
                                 Community
                              </button>
                           )}
                        </Tab>
                        <Tab as={'div'}>
                           {({ selected }) => (
                              <button
                                 className={`${
                                    selected
                                       ? 'text-whit after:bg-white/30 after:absolute after:bottom-0 after:left-0 after:w-[calc(100%-20px)] after:h-[2px] after:rounded-[1.5px] after:content-[""]'
                                       : 'text-white/70'
                                 } relative pr-5 text-lg font-semibold pb-1 `}
                              >
                                 Resources
                              </button>
                           )}
                        </Tab>
                     </Tab.List>
                     <Tab.Panels className="mt-9 text-white">
                        <Tab.Panel>
                           <div className="mt-9 flex flex-col items-start">
                              {MENUITEMS_GAMES.map(({ name, items }) => (
                                 <button
                                    key={name}
                                    className="text-2xl font-extrabold mb-6"
                                    onClick={() =>
                                       setSelectGamesMenu({
                                          name,
                                          selected: true,
                                       })
                                    }
                                 >
                                    {name}
                                 </button>
                              ))}
                              <Link
                                 className="hover:text-white text-[rgb(132,178,255)] font-medium text-lg pt-[10px]"
                                 href={'/'}
                              >
                                 All Games
                              </Link>
                           </div>
                        </Tab.Panel>
                        <Tab.Panel>
                           <div className="flex flex-col">
                              {MENUITEMS_COMMUNITY.map(({ name }) => (
                                 <Link
                                    key={name}
                                    className="text-2xl font-extrabold mb-6"
                                    href={name}
                                 >
                                    {name}
                                 </Link>
                              ))}
                           </div>
                        </Tab.Panel>
                        <Tab.Panel>
                           <div className="flex flex-col">
                              {MENUITEMS_RESOURCES.map((name) => (
                                 <Link
                                    key={name}
                                    className="text-[22px] font-extrabold mb-6"
                                    href={name}
                                 >
                                    {name}
                                 </Link>
                              ))}
                           </div>
                        </Tab.Panel>
                     </Tab.Panels>
                  </div>
               </Tab.Group>

               <div className="h-[756px] w-screen flex-shrink-0">
                  <div className="mb-9 ml-[15px] mt-10">
                     <button
                        className="flex bg-transparent text-white/70 text-l items-center"
                        onClick={() =>
                           setSelectGamesMenu({
                              ...isSelectGameMenu,
                              selected: false,
                           })
                        }
                     >
                        <ArrowLeftIcon className="h-5 w-5 mr-5" />
                        Back
                     </button>
                  </div>
                  <div className="flex flex-col h-full">
                     {MENUITEMS_GAMES.map(
                        ({ name, items }) =>
                           name === isSelectGameMenu.name &&
                           items.map(({ title }) => (
                              <Link
                                 className="text-white text-lg font-semibold ml-12 mb-4"
                                 key={title}
                                 href={title}
                              >
                                 {title}
                              </Link>
                           )),
                     )}
                  </div>
               </div>
            </div>
         </Modal>
      </div>
   );
};
