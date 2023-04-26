import { MENUITEMS_COMMUNITY } from '@/data/menuitems';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export const MenuItemCommunity = () => {
   return (
      <div className="inline-flex mt-16 ml-6 group">
         {MENUITEMS_COMMUNITY.map(({ name, icon }) => (
            <Link
               key={name}
               href={'/'}
               className={clsx(
                  'block relative mx-6 w-20',
                  'text-[rgb(210,210,210)] transition-[opacity,color]',
                  'ease-[ease,ease] duration-[0.3s,0.3s] delay-[0s,0s]',
                  'hover:text-[#fcfcfc]',
                  'group-hover:opacity-[0.6] hover:!opacity-100',
               )}
            >
               <Image
                  className="hover:!scale-[1.1] hover:translate-y-[-4px] transition-[transform] duration-[0.3s] ease-[ease] delay-[0s] translate-y-0"
                  src={icon}
                  alt="forum"
                  width={80}
                  height={80}
               />
               <span className="text-lg block text-center font-bold mt-3">
                  {name}
               </span>
            </Link>
         ))}
      </div>
   );
};
