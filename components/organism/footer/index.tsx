import { Search } from "@/components/molecules";
import clsx from "clsx";
import Link from "next/link";

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
        </div>
      </div>
    </footer>
  );
};
