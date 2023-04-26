import { useState } from 'react';
import { HambergerIcon } from '../icons';
import { Modal } from '../modal';
import { Tab } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {
   MENUITEMS_COMMUNITY,
   MENUITEMS_GAMES,
   MENUITEMS_RESOURCES,
} from '@/data/menuitems';
import Link from 'next/link';

export const MobileNav = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="flex justify-end w-full lg:hidden">
         <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
               <XMarkIcon className="h-7 w-7 text-white" />
            ) : (
               <HambergerIcon className="h-8 w-8" />
            )}
         </button>
         <Modal isOpen={isOpen} onClose={setIsOpen}>
            <Tab.Group>
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
            </Tab.Group>
         </Modal>
      </div>
   );
};
