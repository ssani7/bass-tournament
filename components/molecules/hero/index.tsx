import { Button, ButtonSize, ButtonVariant } from '@/components/atom/button';
import { Rating, Tag } from '@/components/atom';
import clsx from 'clsx';
import Link from 'next/link';
import { Cavet } from '../icons';
import {
   HERO_IMAGE_MOB,
   HERO_IMAGE_PC,
   HERO_IMAGE_TAB,
} from '@/utils/constants';

export const Hero = () => {
   return (
      <div
         className={clsx(
            'max-md:bg-[rgb(29,46,73)]',
            'max-md:flex max-md:flex-col h-auto',
            'md:h-[490px] lg:h-[650px] w-full relative md:block lg:block',
            "max-md:after:content['']",
            'max-md:after:absolute max-md:after:w-full max-md:after:bg-[rgb(29,46,73,0.4)]',
            'max-md:after:h-[calc(100%-260px)]',
            'max-md:after:backdrop-saturate-[1%]',
            'max-md:after:backdrop-blur-[20px]',
            'max-md:after:inset-x-0',
            'max-md:after:bottom-0',
         )}
      >
         <div
            className={clsx(
               'max-sm:self-end max-sm:bg-transparent',
               'mx-auto max-md:px-4 max-md:py-5',
               'max-md:-mt-16 md:pt-[75px] md:pl-12',
               'lg:w-[1000px] lg:pl-[10px] lg:pt-[100px]',
            )}
         >
            <div className="z-10 relative flex flex-col md:gap-2 lg:gap-3">
               <h1 className="mb-3 md:text-[32px] lg:text-5xl font-anton uppercase text-white tracking-wider">
                  RAID: SHADOW <br /> LEGENDS
               </h1>
               <div className="hidden lg:flex">
                  <div className="mr-3">
                     <div className="flex flex-col ">
                        <span className="text-xs text-white/80 font-semibold text-center">
                           Rating
                        </span>
                        <span className="font-bold text-xl text-white text-center">
                           4.9
                        </span>
                        <span>
                           <Rating />
                        </span>
                     </div>
                  </div>
                  <div className="flex self-center flex-wrap max-w-[350px]">
                     {['Cross-Platform', 'MMORPG', '81+ Downloads'].map(
                        (tag) => (
                           <Tag key={tag}>{tag}</Tag>
                        ),
                     )}
                  </div>
               </div>
               <div className="text-white mb-5 md:mt-0 lg:my-3 lg: max-w-lg md:text-base lg:text-lg">
                  Collect over 400 Champions and take down your opponents in
                  Raid: Shadow Legends. Explore 1+ million Champion builds in
                  this dark fantasy Collection MMORPG!
               </div>
               <div className="flex max-md:bg-white/80 max-md:rounded-lg max-md:p-[10px]">
                  <Button
                     containerClassName="hidden md:block shadow-xl md:min-h-[50px] h-5 font-semibold text-5"
                     size={ButtonSize.EXTRA_LARGE}
                     variant={ButtonVariant.PRIMARY}
                  >
                     Download
                  </Button>
                  <Link
                     className="max-md:text-[rgb(31,124,223)] max-md:items-center max-md:flex w-full max-md:justify-center  group ml-5 md:text-white lg:text-white font-semibold items-center inline-flex"
                     href={'/'}
                  >
                     Learn More
                     <Cavet className="group-hover:translate-x-1 ease-in duration-[0.3s] delay-[0s]" />
                  </Link>
               </div>
            </div>
         </div>
         <div className="max-md:-order-1 h-[320px] md:h-full relative md:absolute lg:absolute inset-0 lg:h-full w-full">
            <picture>
               <source media="(max-width: 767px)" srcSet={HERO_IMAGE_MOB} />
               <source media="(max-width: 1023px)" srcSet={HERO_IMAGE_TAB} />
               <img
                  className="object-cover object-[center_top] w-full h-full"
                  src={HERO_IMAGE_PC}
                  alt=""
               />
            </picture>
         </div>
      </div>
   );
};
