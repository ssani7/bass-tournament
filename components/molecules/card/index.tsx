import { forwardRef, ReactNode } from "react";

type CardProps = {
  containerClassName?: string;
  children: ReactNode;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ containerClassName = "", children, ...props }, ref) => {
    const className = `bg-white rounded-lg ${containerClassName}`;
    return (
      <div ref={ref} {...props} className={className}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
