import { Games, Games2 } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Card } from "../card";

export const AllGames = () => {
  return (
    <Card
      containerClassName={`relative mx-auto mt-[-20px] mb-[70px] z-[200] pt-0 flex "px-[70px] pb-[50px]`}
    >
      <div className="flex flex-col items-center justify-center h-full w-full py-16">
        <h2 className="text-4xl text-center font-extrabold pb-3">
          CHECK OUT ALL OUR GAMES
        </h2>
        <div className="max-w-[500px] text-[rgb(58,58,58)] text-center text-lg mx-auto mb-3">
          MMORPGs, Strategy games, Casual puzzlers, Shooters, and more.
          There&apos;s something for everyone!
        </div>
        <div className="mb-8">
          <Link className="text-blue-500 text-xl font-semibold" href={"/"}>
            See All Games
          </Link>
        </div>
        <div className="w-full block overflow-hidden relative">
          <div className="ml-[-95px] mb-5">
            <Swiper
              loop
              autoplay={{
                reverseDirection: true,
                delay: 1000,
                disableOnInteraction: false,
              }}
              speed={50000}
              spaceBetween={1}
              slidesPerView={10}
              modules={[Autoplay]}
            >
              {Games2.map(({ src }) => (
                <SwiperSlide key={src}>
                  <div className="relative h-[120px] w-[120px] rounded-[15px] overflow-hidden mr-[15px] flex-shrink-0 pointer-events-none">
                    <Image src={src} fill alt="games" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="ml-[-95px]">
            <Swiper
              loop
              autoplay={{
                delay: 100,
                disableOnInteraction: false,
              }}
              speed={10000}
              spaceBetween={20}
              slidesPerView={10}
              modules={[Autoplay]}
            >
              {Games.map(({ src }) => (
                <SwiperSlide key={src} className={"mr-5"}>
                  <div className="relative h-[120px] w-[120px] rounded-[15px] overflow-hidden flex-shrink-0 pointer-events-none">
                    <Image src={src} fill alt="games" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Card>
  );
};
