import { forwardRef, MutableRefObject, ReactNode } from "react";
type TagProps = {
  children: ReactNode;
  className?: string;
};

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ children, className = "", ...props }, ref) => {
    const cls = `px-2 backdrop-blur-[10px] rounded-[10px] text-white font-semibold mr-2 text-md mb-[10px] ${className}`;
    return (
      <span
        {...props}
        className={cls}
        ref={ref as MutableRefObject<HTMLDivElement>}
      >
        {children}
      </span>
    );
  }
);

Tag.displayName = "Tag";
