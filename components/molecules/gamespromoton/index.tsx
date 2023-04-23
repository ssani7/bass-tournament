import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '../card';
import { Cavet } from '../icons';
import {
   Button,
   ButtonSize,
   ButtonVariant,
   Rating,
   Tag,
} from '@/components/atom';

type TGamesPromProps = {
   src_bg: string;
   src: string;
   name: string;
   rating: string;
   tags: string[];
   description: string;
   className?: string;
};

export const GamesPromotions = (props: TGamesPromProps) => {
   const { src, name, rating, tags, src_bg, description, className } = props;
   return (
      <Card
         containerClassName={clsx(
            'w-[calc(100%-30px)]',
            'max-md:bg-[rgb(55,64,84)]',
            'px-0 md:px-[20px]',
            `relative mx-[15px] lg:mx-auto mt-[45px] lg:mt-[-20px] mb-[70px] z-[200] lg:w-[1160px] lg:px-[70px] pt-0 flex flex-col ${
               className
                  ? `lg:px-[80px] pb-[45px] my-[70px] md:flex-row-reverse ${className}`
                  : 'lg:px-[70px] pb-[50px] md:flex-row'
            }`,
         )}
      >
         <div className="relative w-full mx-auto md:w-[320px] lg:w-[433px] h-[340px] lg:h-[24.5rem] flex">
            <div>
               <div
                  className={clsx(
                     `${
                        className && 'md:left-[35px]'
                     } absolute overflow-hidden w-full  h-[355px] md:h-[350px] md:w-[285px] lg:h-[510px] lg:w-[400px] md:left-[10px] bottom-[-75px] drop-shadow-xl bg-white rounded-[8px]`,
                  )}
               >
                  <Image
                     className="max-md:object-cover"
                     src={src_bg}
                     placeholder={'blur'}
                     blurDataURL={src_bg}
                     fill
                     alt="game"
                  />
               </div>

               <div
                  className={clsx(
                     `${
                        className
                           ? 'left-[-15px] md:h-[620px] bottom-[-73px]'
                           : 'left-[30px] bottom-[-75px] md:h-[650px]'
                     }`,
                     'z-[1] absolute',
                     'w-[277px] md:h-[470px] lg:w-[460px]',
                     'h-[406px] md:w-[320px] lg:h-[620px]',
                     `transition-[transform,translate] ease-[ease,ease] duration-[0.3s,0.3s] delay-[0s,0s] lg:hover:translate-y-[-9px] lg:hover:scale-[1.03]`,
                  )}
               >
                  <Image
                     src={src}
                     placeholder={'blur'}
                     blurDataURL={src}
                     fill
                     alt="hero"
                  />
               </div>
            </div>
         </div>
         <div
            className={clsx(
               `px-[15px] mt-[-60px] relative ${
                  className ? 'md:mr-[90px]' : 'md:pl-24'
               } pt-20 z-[250]`,
            )}
         >
            <div className="flex flex-col w-full mx-auto  md:max-w-[315px] max-w-[475px] lg:max-w-[475px] relative">
               <h2 className="font-anton text-2xl md:text-[32px] lg:text-4xl tracking-[2px] font-bold uppercase text-white  md:text-slate-800 mb-5">
                  {name}
               </h2>
               <div className="hidden lg:flex">
                  <div className="mr-3">
                     <div className="flex flex-col ">
                        <span className="text-xs text-white md:text-zinc-500 font-semibold text-center">
                           Rating
                        </span>
                        <span className="font-bold text-xl text-white md:text-slate-700 text-center">
                           {rating}
                        </span>
                        <span>
                           <Rating />
                        </span>
                     </div>
                  </div>
                  <div className="flex self-center flex-wrap max-w-[350px]">
                     {tags.map((tag) => (
                        <Tag variant={'primary'} key={tag}>
                           {tag}
                        </Tag>
                     ))}
                  </div>
               </div>
               <div className="text-white md:text-gray-500 mt-15px text-base lg:text-[18px] mb-[20px]">
                  {description}
               </div>
               <div className="flex bg-white/80 max-md:rounded-lg p-[10px]">
                  <Button
                     containerClassName="hidden lg:block"
                     variant={ButtonVariant.PRIMARY}
                     size={ButtonSize.EXTRA_LARGE}
                  >
                     Download
                  </Button>
                  <Link
                     className="text-[rgb(31,124,223)] p-2 max-md:items-center max-md:flex w-full max-md:justify-center  group ml-5 font-semibold items-center inline-flex"
                     href={'/'}
                  >
                     Learn More
                     <Cavet
                        fill={'currentColor'}
                        className="group-hover:translate-x-1 ease-in duration-[0.3s] delay-[0s]"
                     />
                  </Link>
               </div>
            </div>
         </div>
      </Card>
   );
};
