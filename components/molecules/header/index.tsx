import clsx from "clsx";
import Link from "next/link";
import { Logo } from "../icons";

const navigation = [
  {
    name: "Games",
  },
  {
    name: "Community",
  },
  {
    name: "Resources",
  },
];
export const Header = () => {
  return (
    <header
      className={clsx(
        "bg-neutral-800",
        "h-12",
        "fixed z-10 right-0 left-0 top-0",
        "block"
      )}
    >
      <div className="flex items-center mx-auto px-6 max-w-screen-2xl h-full">
        <Link
          href={"/"}
          className="h-6 flex-none flex items-center justify-center"
        >
          <Logo />
        </Link>
        <nav className="flex grow justify-center h-full">
          <ul className={clsx("text-white", "flex items-center gap-5 h-full")}>
            {navigation.map((name) => (
              <li
                key={name.name}
                className="flex items-center p-5 h-full hover:bg-neutral-700 cursor-pointer text-start"
              >
                {name.name}
              </li>
            ))}

            <li className=" cursor-pointer hover:bg-blue-400 bg-blue-500 rounded-md px-6 py-1 font-bold">
              Get Plarium Play
            </li>
          </ul>
        </nav>
        <div className="pl-2 flex-none">
          <button className="rounded-md px-3 font-bold h-8 text-blue-400 bg-white">
            Log in
          </button>
        </div>
      </div>
    </header>
  );
};
