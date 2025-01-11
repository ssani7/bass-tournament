import { forwardRef, ReactNode } from 'react';

type CardVariant = 'white' | 'dark';

type CardProps = {
   containerClassName?: string;
   children: ReactNode;
   variant?: CardVariant;
};
const BACKGROUND: Record<CardVariant, string> = {
   white: 'bg-white',
   dark: 'bg-[rgb(34,37,43)]',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
   (
      {
         containerClassName = '',
         variant = 'white' as CardVariant,
         children,
         ...props
      },
      ref,
   ) => {
      const className = `rounded-lg  ${BACKGROUND[variant]} ${containerClassName}`;
      return (
         <div ref={ref} {...props} className={className}>
            {children}
         </div>
      );
   },
);

Card.displayName = 'Card';
