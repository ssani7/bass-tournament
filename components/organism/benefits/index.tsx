import { RewardCard } from '@/components/molecules/card/reward';
import { reward } from '@/data/reward';

export const Benefits = ({}: any) => {
   return (
      <section className="bg-[rgb(25,27,31)] relative pt-[140px] pb-[40px]">
         <div className="flex flex-col justify-center text-center text-white lg:mt-3">
            <div className="uppercase tracking-[3px] text-xl">
               OUR GAMES ARE ENJOYED BY OVER
            </div>
            <div className="font-extrabold text-5xl md:text-8xl leading-[100px] tracking-[2px] mb-3">
               350,000
            </div>
            <div className="uppercase tracking-[3px] text-base md:text-xl">
               PLAYERS WORLDWIDE
            </div>
         </div>
         <div className="flex flex-col md:flex-row mx-auto mt-6  md:mt-24 mb-20 items-center justify-evenly">
            {reward.map((reward, _index) => (
               <RewardCard key={_index} {...reward} />
            ))}
         </div>
      </section>
   );
};
