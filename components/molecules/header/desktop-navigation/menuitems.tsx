import {
  MECH_ARENA,
  RAID_SHADOW_LEGENDS,
} from "@/utils/constants/discovergames";
import Image from "next/image";

const discover_games = [
  {
    title: "Raid: Shadow Legends",
    description: " Epic Fantasy Collection RPG",
    img: RAID_SHADOW_LEGENDS,
  },
  {
    title: "Mech Arena",
    description: "Real-Time 5v5 Mech Combat",
    img: MECH_ARENA,
  },
];

export const MenuItems = () => {
  return (
    <div className="opacity-100 visible absolute left-0 top-[initial] min-w-full bg-[rgb(16,17,20)] z-[556]">
      <div className="flex max-w-[1440px] mx-auto px-6">
        <div className="w-440px flex-shrink-0">
          <div className="relative pt-8 pb-11 pl-12 h-full border-r border-white/10">
            <div className="relative z-10 text-lg font-bold mb-3">
              Discover Games
            </div>
            {discover_games.map(({ title, description, img }) => (
              <div key={title} className="relative flex cursor-pointer mb-5">
                <div className="relative h-16 w-16 rounded-md object-cover overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    placeholder="blur"
                    blurDataURL={img}
                  />
                </div>
                <div className="ml-4">
                  <div className="flex">
                    <div className="text-xl font-semibold">{title}</div>
                  </div>
                  <span className="text-base text-white/50">{description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
