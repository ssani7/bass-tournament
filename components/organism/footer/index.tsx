import { Search } from "@/components/molecules";
import clsx from "clsx";
import Link from "next/link";
const categores = [
  {
    id: 1,
    name: "Categories",
    title: [
      {
        title: "Categories",
        name: "Popular Games",
      },
      {
        name: "New Games",
      },
      {
        name: "Download Games",
      },
      {
        name: "Free to Play Games",
      },
      {
        name: "Best Games",
      },
    ],
  },
  {
    id: 2,
    name: "Resources",
    title: [
      {
        title: "Resources",
        name: "Nickname Generator",
      },
      {
        title: "Resources",
        name: " Gaming Logo Maker",
      },
      {
        title: "Resources",
        name: "The Game Awards 2021",
      },
    ],
  },
  {
    id: 3,
    name: "Community",
    title: [
      {
        name: "Forum",
      },
      {
        name: "Support",
      },
      {
        name: "News",
      },
      {
        name: "Blog",
      },
      {
        name: "Become a partner",
      },
      {
        name: "Privacy request",
      },
    ],
  },
  {
    id: 5,
    name: "Corporate",
    title: [
      {
        name: "Company",
      },
      {
        name: "Careers",
      },
      {
        name: "Contacts",
      },
      {
        name: "About Us",
      },
    ],
  },
];

const footer = [
  {
    name: "Terms of Use",
  },
  {
    name: "Privacy and Cookie Policy",
  },
  {
    name: "Refund Policy",
  },
  {
    name: "Arbitration Agreement",
  },
  {
    name: "Video Guidelines",
  },
];
export const Footer = () => {
  return (
    <footer className="bg-[#191b1f] text-white pt-7 relative">
      <div className="max-w-[1440px] px-[70px] mb-16 mx-auto">
        <div className="flex">
          <div className="mr-24 w-80">
            <div>
              <div className="mb-5">
                <div className="text-lg font-semibold text-white/70 tracking-[0.45px]">
                  PLARIUM
                </div>
                <div className=" text-4xl font-bold mb-3">TAKE THE WORLD</div>
                <div className="text-base text-white/30">
                  © 2010-2023 Plarium
                </div>
              </div>
              <div className="flex">
                <Link
                  href={"/"}
                  className="h-10 w-10 bg-[#2f2f33] mr-3 p-[10px] rounded-md"
                >
                  <Search />
                </Link>
                <div className="h-10 w-full relative rounded-md bg-[#2f2f33] select-none max-w-[250px]">
                  <button
                    className={clsx(
                      "h-10 w-full text-lg",
                      "font-medium pl-4",
                      "cursor-pointer text-left",
                      "after:block after:absolute after:top-[17px]",
                      "after:right-[15px] after:content-['']",
                      "after:border-solid after:border-x-[6px] after:border-t-[7px]",
                      "after:border-t-white/25",
                      "after:border-x-transparent",
                      "after:border-b-transparent"
                    )}
                  >
                    <span>English</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-8">
            {categores.map(({ id, name, title }) => (
              <div key={id} className="w-44 ml-14">
                <div className="text-xl font-semibold mb-4">{name}</div>
                <ul>
                  {title.map((list) => (
                    <li key={list.name} className="mb-2">
                      <Link
                        href={"/"}
                        className="text-base mb-1 text-white/80 hover:text-[#fcfcfc]"
                      >
                        {list.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" h-16 bg-black">
        <div>
          <div className="flex max-w-[1140px] mx-auto py-4 justify-center">
            <div className="overflow-hidden">
              <ul className="flex flex-wrap">
                {footer.map(({ name }) => (
                  <li
                    key={name}
                    className="px-4 first:border-0 border-l border-solid border-l-[rgb(79,77,77)] "
                  >
                    <Link
                      href={"/"}
                      className="text-base text-white/70 hover:text-[#fcfcfc] "
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
