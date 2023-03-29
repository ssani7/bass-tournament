import Link from "next/link";

const menuitems_games = [
  {
    name: "Categories",
    items: [
      {
        title: "Popular Games",
      },
      {
        title: "Download Games",
      },
      {
        title: "New Games",
      },
      {
        title: "Free to Play Games",
      },

      {
        title: "Best Games",
      },
    ],
  },
  {
    name: "Platforms",
    items: [
      {
        title: "Browser Games",
      },
      {
        title: "PC Games",
      },
      {
        title: "Mac Games",
      },
      {
        title: "Mobile Games",
      },
      {
        title: "Flash Games",
      },
      {
        title: "HTML5 Games",
      },
    ],
  },
  {
    name: "OS",
    items: [
      {
        title: "Window Games",
      },
      {
        title: "iOS Games",
      },
      {
        title: "Andriod Games",
      },
    ],
  },
  {
    name: "Devices",
    items: [
      {
        title: "iPhone Games",
      },
      {
        title: "iPad Games",
      },
    ],
  },
];

export const MenuItemGames = () => {
  return (
    <div className="flex py-8 px-12">
      {menuitems_games.map((games) => (
        <div key={games.name}>
          <div className="text-xl font-semibold mb-3">{games.name}</div>
          <div className="flex flex-col">
            {games.items.map((item) => (
              <div key={item.title} className="text-white/50 mb-2 w-[140px]">
                <Link href={"/"} className="hover:text-white/70">
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
