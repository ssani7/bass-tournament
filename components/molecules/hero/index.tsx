import { Button, ButtonSize, ButtonVariant } from "@/components/atom/button";
import { Rating } from "@/components/atom/rating";
import { Tag } from "@/components/atom/tag";
import { HERO_IMAGE } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { Cavet } from "../icons";

export const Hero = () => {
  return (
    <section className="h-[650px] w-full relative">
      <div className="mx-auto max-w-4xl px-10 pt-[100px]">
        <div className="z-10 relative flex flex-col gap-3">
          <h1 className="text-5xl font-anton uppercase text-white tracking-wider">
            RAID: SHADOW <br /> LEGENDS
          </h1>
          <div className="flex">
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
              {["Cross-Platform", "MMORPG", "81+ Downloads"].map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
          <div className="text-white my-3 lg: max-w-lg text-lg">
            Collect over 400 Champions and take down your opponents in Raid:
            Shadow Legends. Explore 1+ million Champion builds in this dark
            fantasy Collection MMORPG!
          </div>
          <div className="flex">
            <Button
              className="shadow-lg"
              size={ButtonSize.EXTRA_LARGE}
              variant={ButtonVariant.PRIMARY}
            >
              Download
            </Button>
            <Link
              className="group ml-5 text-white font-semibold items-center inline-flex"
              href={"/"}
            >
              Learn More
              <Cavet className="group-hover:translate-x-1 ease-in duration-[0.3s] delay-[0s]" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 h-full w-full">
        <picture>
          <Image
            src={HERO_IMAGE}
            alt={"hero"}
            priority
            fill
            placeholder="blur"
            blurDataURL={HERO_IMAGE}
          />
        </picture>
      </div>
    </section>
  );
};
