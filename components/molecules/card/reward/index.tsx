import { Reward } from '../../icons';

type Props = {
   title: string;
   description: string;
   reward: string;
};
export const RewardCard = ({ title, description, reward }: Props) => {
   return (
      <div className="flex flex-col w-56 justify-center">
         <div className="mx-auto mb-5">
            <Reward />
         </div>
         <div className="text-center mb-1 text-white/50 text-xs font-bold tracking-[1px]">
            {title}
         </div>
         <div className="text-center text-white text-base font-medium mb-5 flex flex-grow justify-center leading-5">
            {description}
         </div>
         <div className="text-center mb-1 text-white/50 text-xs font-semibold tracking-[1px]">
            {reward}
         </div>
      </div>
   );
};
