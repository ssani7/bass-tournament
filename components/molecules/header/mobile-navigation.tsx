import { HambergerIcon } from "../icons";

export const MobileNav = () => {
  return (
    <div className=" flex justify-end w-full lg:hidden">
      <button>
        <HambergerIcon className="h-8 w-8" />
      </button>
    </div>
  );
};
