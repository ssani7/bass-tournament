import { Button, ButtonSize, ButtonVariant } from "@/components/atom/button";
import { Rating } from "@/components/atom/rating";
import { Tag } from "@/components/atom/tag";
import { MECHA_ARM, MECHA_ARM_COVER } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../card";
import { Cavet } from "../icons";

export const GamesPromotions = () => {
  return (
    <Card
      containerClassName={
        "mx-auto -mt-6 mb-[70px] z-[200] relative w-[1160px] px-[70px] pb-[50px] flex"
      }
    >
      <div className="relative w-[433px] h-[24.5rem] flex flex-shrink-0">
        <div>
          <span className="h-[510px] w-[400px] absolute left-[10px] bottom-[-75px] drop-shadow-xl bg-white rounded-lg">
            <Image
              className="rounded-[8px]"
              src={MECHA_ARM_COVER}
              placeholder={"blur"}
              blurDataURL={MECHA_ARM_COVER}
              fill
              alt="game"
            />
          </span>
          <span className="absolute z-50 left-8 bottom-[-75px] h-[650px] w-[460px]">
            <Image src={MECHA_ARM} fill alt="hero" />
          </span>
        </div>
      </div>
      <div className="pl-24  pt-20 z-[250]">
        <div className="flex flex-col max-w-[450px]">
          <h2 className="font-anton text-4xl tracking-[2px] font-bold uppercase text-slate-800 mb-5">
            Mecha Arm
          </h2>
          <div className="flex">
            <div className="mr-3">
              <div className="flex flex-col ">
                <span className="text-xs text-zinc-500 font-semibold text-center">
                  Rating
                </span>
                <span className="font-bold text-xl text-slate-700 text-center">
                  4.9
                </span>
                <span>
                  <Rating />
                </span>
              </div>
            </div>
            <div className="flex self-center flex-wrap max-w-[350px]">
              {["Cross-Platform", "Action", "81+ Downloads"].map((tag) => (
                <Tag className=" text-black/75 bg-[rgb(47,47,51)]/10" key={tag}>
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
          <div className="text-gray-500 mt-15px text-[18px] mb-[20px]">
            Jump into the world’s greatest PvP Mech sport with all guns blazing!
            Choose from 30+ weapons, master 22 maps, and enjoy team-based Mech
            mayhem.
          </div>
          <div className="flex">
            <Button
              variant={ButtonVariant.PRIMARY}
              size={ButtonSize.EXTRA_LARGE}
            >
              Download
            </Button>
            <Link
              className="group text-blue-500 inline-flex items-center ml-[1.23rem] font-semibold"
              href={"/"}
            >
              Learn More
              <Cavet
                fill={"currentColor"}
                className="group-hover:translate-x-1 ease-in duration-[0.3s] delay-[0s]"
              />
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};
