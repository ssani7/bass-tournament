import {
  Button,
  ButtonSize,
  ButtonVariant,
  Rating,
  Tag,
} from "@/components/atom";
import { MECHA_ARM, MECHA_ARM_COVER } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../card";
import { Cavet } from "../icons";

type Props = {
  src_bg: string;
  src: string;
  name: string;
  rating: string;
  tags: string[];
  description: string;
  className?: string;
};

export const GamesPromotions = (props: Props) => {
  const { src, name, rating, tags, src_bg, description, className } = props;
  return (
    <Card
      containerClassName={`relative mx-auto mt-[-20px] mb-[70px] z-[200] w-[1160px] px-[70px] pb-[50px] pt-0 flex ${className}`}
    >
      <div className="relative w-[433px] h-[24.5rem] flex flex-shrink-0">
        <div>
          <div className="absolute overflow-hidden h-[510px] w-[400px] left-[10px] bottom-[-75px] drop-shadow-xl bg-white rounded-[8px]">
            <Image
              src={src_bg}
              placeholder={"blur"}
              blurDataURL={src_bg}
              fill
              alt="game"
            />
          </div>

          <div className="z-[1] absolute h-[650px] w-[460px] left-[30px] bottom-[-75px] transition-[transform,translate] ease-[ease,ease] duration-[0.3s,0.3s] delay-[0s,0s] lg:hover:translate-y-[-9px] lg:hover:scale-[1.03] ">
            <Image
              src={src}
              placeholder={"blur"}
              blurDataURL={src}
              fill
              alt="hero"
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          className ? "mr-[90px]" : "pl-24"
        }    pt-20 z-[250] relative`}
      >
        <div className="flex flex-col max-w-[450px] relative">
          <h2 className="font-anton text-4xl tracking-[2px] font-bold uppercase text-slate-800 mb-5">
            {name}
          </h2>
          <div className="flex">
            <div className="mr-3">
              <div className="flex flex-col ">
                <span className="text-xs text-zinc-500 font-semibold text-center">
                  Rating
                </span>
                <span className="font-bold text-xl text-slate-700 text-center">
                  {rating}
                </span>
                <span>
                  <Rating />
                </span>
              </div>
            </div>
            <div className="flex self-center flex-wrap max-w-[350px]">
              {tags.map((tag) => (
                <Tag className=" text-black/75 bg-[rgb(47,47,51)]/10" key={tag}>
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
          <div className="text-gray-500 mt-15px text-[18px] mb-[20px]">
            {description}
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
