import { Button, ButtonSize, ButtonVariant } from '@/components/atom';
import { Partners } from '@/components/organism/partners';

import { Card } from '@/components/molecules';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import ss1 from '../../../public/images/game/g1.png';
import ss2 from '../../../public/images/game/g2.png';
import ss3 from '../../../public/images/game/g3.jpg';
import ss4 from '../../../public/images/game/g4.jpg';
import ss5 from '../../../public/images/game/g5.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const CrossPlatformSection = () => {
   return (
      <div className="pt-[40px] pb-[80px] bg-[#191b1f] flex justify-center w-full">
         <Card
            variant={'dark'}
            containerClassName={
               'rounded-[8px] lg:pr-[55px] pb-[45px] pt-[35px] lg:pl-[12px]'
            }
         >
            <div className="flex flex-col-reverse lg:flex-row md:w-full lg:max-w-[1240px]">
               <div className="relative w-full md:mx-8 md:h-auto md:w-[585px] lg:w-3/5 flex flex-shrink-0 justify-center items-center">
                  <div className="h-[400px] w-[400px] lg:h-[600px] lg:w-full lg:max-w-[80%] mx-auto mt-10">
                     <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                           clickable: true,
                        }}
                        autoplay={{
                           delay: 3000,
                           disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                     >
                        <SwiperSlide>
                           <Image src={ss1} height={720} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                           <Image src={ss2} height={720} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                           <Image src={ss3} height={720} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                           <Image src={ss4} height={720} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                           <Image src={ss5} height={720} alt="" />
                        </SwiperSlide>
                     </Swiper>
                  </div>
               </div>
               <div className="flex flex-col px-10 pt-16">
                  <div className="text-white font-extrabold text-4xl mb-4">
                     Play Bass with fun
                  </div>
                  <div className="text-white/80 mb-8">
                     Cast your line into beautifully crafted virtual waters,
                     explore unique fishing spots, and reel in rare catches that
                     can be tokenized as NFTs. Powered by a robust token
                     economy, players can earn rewards through daily quests,
                     tournaments, and trading their NFT catches
                  </div>
                  <div className="flex justify-center lg:justify-start">
                     <Button
                        containerClassName="sm:max-md:invisible"
                        variant={ButtonVariant.PRIMARY}
                        size={ButtonSize.EXTRA_LARGE}
                     >
                        Play Now
                     </Button>
                  </div>
               </div>
            </div>
         </Card>
      </div>
   );
};
