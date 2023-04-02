import Link from 'next/link';
import { NickNameGenerator } from '../../icons';

const generators = [
   'Nickname Generator',
   'Fantasy Name Generator',
   'Elf Name Generator',
   'Gamertag Generator',
   'DND Name Generator',
   'Game Name Generator',
   'Clan Name Generator',
   'Superhero Name Generator',
   'RPG Name Generator',
];
export const MenuItemResources = () => {
   return (
      <>
         <div className="flex ml-12 mt-10 mb-12">
            <div className="flex flex-col relative rounded-lg bg-[rgb(37,37,40)] pt-5 pb-7 px-[70px]">
               <NickNameGenerator />
               <h2 className="text-lg mb-6 font-bold text-white">
                  Name Generators
               </h2>
               <div className="columns-2 column">
                  {generators.map((name) => (
                     <Link
                        key={name}
                        href={'/'}
                        className="flex text-base text-[rgb(147,188,255)] mb-1 break-inside-avoid hover:text-white"
                     >
                        {name}
                     </Link>
                  ))}
               </div>
            </div>
         </div>
         <div className="flex bg-[rgb(37,37,40)] rounded-lg px-10 pt-16 mt-[40px] mb-[50px] ml-5 flex-shrink-0">
            <div className="flex flex-col">
               <div className="self-center"></div>
               <div>
                  <span className="text-3xl font-black text-[237,248,252] uppercase">
                     Gaming Logo
                  </span>
                  <span className="text-3xl font-light text-[rgb(31,222,139)] uppercase pl-2">
                     Maker
                  </span>
               </div>
            </div>
         </div>
      </>
   );
};
