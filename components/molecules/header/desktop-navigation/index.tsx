import clsx from 'clsx';
import { useState } from 'react';
import { NavGroupProps } from '..';
import { MenuItems } from './menuitems';
import Link from 'next/link';
import { MenuItemGames } from './menuitem-games';
import { MenuItemCommunity } from './menuitem-community';
import { MenuItemResources } from './menuitem-resources';

const MENUS = {
   Games: 'Games',
   Community: 'Community',
   Resources: 'Resources',
};

export const DesktopNav = ({
   navigation,
   handleScrollTo,
   homeRef,
   partnerRef,
   aboutRef,
}: any) => {
   const [isOpenMenuItems, setIsOpenMenuItems] = useState(false);
   const [menu, setSelectedMenu] = useState(MENUS.Games);

   const shownMenu = (menu: string) => {
      setSelectedMenu(menu);
      setIsOpenMenuItems(true);
   };

   return (
      <nav className="hidden lg:flex grow justify-center h-full">
         <ul className={clsx('text-white', 'flex items-center gap-5 h-full')}>
            {navigation.map(({ name, ref }: any) => (
               <div key={name} className="static">
                  <div
                     onClick={() => handleScrollTo(ref)}
                     className={clsx(
                        'hover:bg-neutral-700',
                        'flex items-center text-left',
                        'text-[rgb(145,145,145)] relative',
                        'bg-transparent h-[calc(54px)] w-full font-bold',
                        'transition-[background-color] duration-[0.3s] delay-[0s] ease-[ease]',
                     )}
                     // onMouseOver={() => shownMenu(name)}
                  >
                     <span className="px-4 flex items-center w-full relative cursor-pointer text-start">
                        <span className="text-[rgb(234,234,234)]">{name}</span>
                     </span>
                  </div>
               </div>
            ))}

            {/* <div
               className={clsx(
                  'cursor-pointer flex items-center',
                  'from-[rgb(71,121,203)99%] to-[rgb(91,143,229)]',
                  'rounded-md px-[15px] font-bold text-center h-[35px]',
                  'bg-gradient-to-t hover:from-[rgb(97,156,255)] hover:to-[rgb(85,140,230)]',
               )}
            >
               Get Plarium Play
            </div> */}
         </ul>
      </nav>
   );
};
