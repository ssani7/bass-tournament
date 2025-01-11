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
import Image from 'next/image';

import logo from '../../../public/images/game/banner.webp';

export const Hero = () => {
   return (
      <div
         className={clsx(
            'max-md:bg-[rgb(29,46,73)]',
            'max-md:flex max-md:flex-col h-auto',
            'md:h-[720px] w-full relative md:block lg:block',
            "max-md:after:content['']",
            // 'max-md:after:absolute max-md:after:w-full max-md:after:bg-[rgb(29,46,73,0.4)]',
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
            <div className="z-10 relative flex flex-col md:gap-2 lg:gap-3 pt-20">
               <h1 className="mb-3 md:text-[32px] text-3xl font-bold lg:text-5xl font-anton uppercase text-white tracking-wider">
                  Bass : Fishing Hook Tournament
               </h1>
               <div className="text-white mb-5 md:mt-0 lg:my-3 md:text-base lg:text-lg">
                  Bass is a revolutionary Web3 fishing game that offers the
                  perfect blend of entertainment and blockchain technology.
                  Designed for both casual and competitive players, this game
                  combines the relaxing joy of fishing with the excitement of
                  earning blockchain rewards
               </div>
               <div className="flex flex-col lg:flex-row max-md:rounded-lg max-md:p-[10px] items-center gap-4">
                  <a href="https://h5-test-fh.dashfun.games/" target="_blank">
                     <Button
                        containerClassName="shadow-xl md:min-h-[50px] font-semibold w-40"
                        size={ButtonSize.EXTRA_LARGE}
                        variant={ButtonVariant.PRIMARY}
                     >
                        Try Now
                     </Button>
                  </a>
                  <a
                     className="max-md:text-[rgb(31,124,223)] max-md:items-center max-md:flex w-full max-md:justify-center  group ml-5 md:text-white lg:text-white font-semibold items-center inline-flex"
                     href={'https://www.bassweb3.com/'}
                     target="_blank"
                  >
                     Learn More
                     <Cavet className="group-hover:translate-x-1 ease-in duration-[0.3s] delay-[0s]" />
                  </a>
               </div>
            </div>
         </div>
         {/* <div className="max-md:-order-1 h-[320px] md:h-full relative md:absolute lg:absolute inset-0 lg:h-full w-full">
            <picture>
               <source media="(max-width: 767px)" srcSet={HERO_IMAGE_MOB} />
               <source media="(max-width: 1023px)" srcSet={HERO_IMAGE_TAB} />
               <img
                  className="object-cover object-[center_top] w-full h-full"
                  src={HERO_IMAGE_PC}
                  alt=""
               />
            </picture>
         </div> */}
         <div className="absolute w-full h-[900px] top-0">
            <div className="relative w-full h-full">
               <div className="absolute inset-0 bg-black opacity-60"></div>
               <Image
                  className="object-cover w-full h-full"
                  src={logo}
                  alt=""
               />
            </div>
         </div>
      </div>
   );
};
