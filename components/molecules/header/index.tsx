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
        "fixed z-20 right-0 left-0 top-0",
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

            <li
              className={clsx(
                "cursor-pointer ",
                "from-[rgb(71,121,203)99%] to-[rgb(91,143,229)] ",
                "rounded-md px-5 py-2 font-bold",
                "bg-gradient-to-t hover:from-[rgb(97,156,255)] hover:to-[rgb(85,140,230)] "
              )}
            >
              Get Plarium Play
            </li>
          </ul>
        </nav>
        <div className="pl-2 flex-none">
          <button className="rounded-md px-3 font-bold h-8 text-blue-400 bg-white">
            Log In
          </button>
        </div>
      </div>
    </header>
  );
};
