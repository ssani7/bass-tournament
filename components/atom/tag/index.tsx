import { ReactNode } from "react";

export const Tag = ({ children }: { children: ReactNode }) => {
  return (
    <span className="px-2 backdrop-blur-[10px] rounded-[10px] bg-white/[.15] text-white font-semibold mr-2 text-md mb-[10px]">
      {children}
    </span>
  );
};
