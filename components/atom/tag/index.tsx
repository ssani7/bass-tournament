import { forwardRef, MutableRefObject, ReactNode } from 'react';

type TAG_VARIANT = 'primary' | 'secondary' | 'default';

const FOREGROUND: Record<TAG_VARIANT, string> = {
   primary: 'text-slate-800',
   default: 'text-white',
   secondary: 'text-slate-800',
};

const BACKGROUNDS: Record<TAG_VARIANT, string> = {
   primary: 'bg-[rgb(47,47,51)]/10',
   default: 'backdrop-blur-[10px]',
   secondary: 'bg-white backdrop-blur-[10px]',
};
type TagProps = {
   children: ReactNode;
   className?: string;
   variant?: TAG_VARIANT;
};

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
   (
      {
         children,
         className = '',
         variant = 'default' as TAG_VARIANT,
         ...props
      },
      ref,
   ) => {
      const cls = `px-2 rounded-[10px] backdrop-blur-[10px] font-semibold mr-2 text-md mb-[10px] ${FOREGROUND[variant]} ${BACKGROUNDS[variant]} ${className}`;
      return (
         <span
            {...props}
            className={cls}
            ref={ref as MutableRefObject<HTMLDivElement>}
         >
            {children}
         </span>
      );
   },
);

Tag.displayName = 'Tag';
