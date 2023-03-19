import { RewardCard } from "@/components/molecules/card/reward";
import { reward } from "@/data/reward";

export const Benefits = () => {
  return (
    <section className="bg-[rgb(25,27,31)] relative pt-[140px] pb-[40px]">
      <div className="flex flex-col justify-center text-center text-white lg:mt-3">
        <div className="uppercase tracking-[3px] text-xl">
          OUR GAMES ARE ENJOYED BY OVER
        </div>
        <div className=" font-extrabold text-8xl leading-[100px] tracking-[2px] mb-3">
          435 000 000
        </div>
        <div className="uppercase tracking-[3px] text-xl">
          PLAYERS WORLDWIDE
        </div>
      </div>
      <div className="flex max-w-[1000px] mx-auto mt-24 mb-20">
        {reward.map((reward) => (
          <RewardCard key={reward.title} {...reward} />
        ))}
      </div>
    </section>
  );
};
