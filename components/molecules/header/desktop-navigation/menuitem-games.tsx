import { GENRES, MENUITEMS_GAMES } from '@/data/menuitems';
import clsx from 'clsx';
import Link from 'next/link';

export const MenuItemGames = () => {
   return (
      <div className="flex py-8 px-12">
         {/* {MENUITEMS_GAMES.map(({ name, items }) => (
            <div key={name}>
               <div className="text-xl font-semibold mb-3">{name}</div>
               <div className="flex flex-col">
                  {items.map(({ title }) => (
                     <div key={title} className="text-white/50 mb-2 w-[140px]">
                        <Link href={'/'} className="hover:text-white/70">
                           {title}
                        </Link>
                     </div>
                  ))}
               </div>
            </div>
         ))} */}
         <div>
            <div className="text-xl font-semibold mb-3">Genres</div>
            <div className="w-[450px]">
               {GENRES.map((genre) => (
                  <Link
                     key={genre}
                     href={'/'}
                     className={clsx(
                        'inline-flex rounded-[3px]',
                        'text-sm text-center',
                        'text-[rgb(147,188,255)] bg-[rgb(47,47,47)]',
                        'px-[10px] mb-1 mr-[5px] hover:text-white/90',
                     )}
                  >
                     {genre}
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
};
