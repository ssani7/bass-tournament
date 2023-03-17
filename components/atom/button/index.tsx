import { forwardRef, HTMLProps, MutableRefObject } from "react";
export enum ButtonSize {
  EXTRA_SMALL = "xs",
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
  EXTRA_LARGE = "xl",
}

export enum ButtonVariant {
  BASE = "base",
  PRIMARY = "primary",
  PRIMARY_MAIN = "primary-main",
  DEFAULT = "default",
  SECONDARY = "secondary",
  MUTED = "muted",
  DANGER = "danger",
  TERTIARY_MUTED = "tertiary-muted",
  MUTED_RED = "muted-red",
  MUTED_BLUE = "muted-blue",
  MUTED_VIOLET = "muted-violet",
}

const HEIGHTS: Record<ButtonSize, string> = {
  xs: "h-6",
  sm: "h-8",
  md: "h-10",
  lg: "h-11",
  xl: "h-14",
};

const PADDINGS: Record<ButtonSize, string> = {
  xs: "px-4",
  sm: "px-6",
  md: "px-6",
  lg: "px-6",
  xl: "px-8",
};

const TEXT_SIZE: Record<ButtonSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
  xl: "text-2xl",
};

const DISABLED: Record<ButtonVariant, string> = {
  primary: "border-violet-100 bg-violet-100 text-white",
  [ButtonVariant.PRIMARY_MAIN]: "border-gray-300 bg-gray-100 text-gray-300",
  default: "border-gray-300 bg-gray-100 text-gray-300",
  secondary: "border-gray-300 bg-gray-100 text-gray-300",
  muted: "border-transparent",
  danger: "border-red-100 bg-red-100 text-red-400 bg-gray-100",
  base: "border-gray-400 text-gray-400",
  [ButtonVariant.TERTIARY_MUTED]: "border-transparent",
  [ButtonVariant.MUTED_RED]: "border-transparent",
  [ButtonVariant.MUTED_BLUE]: "border-transparent",
  [ButtonVariant.MUTED_VIOLET]: "border-transparent",
};

const HOVER: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-t hover:to-[rgb(255,81,24)104%] hover:from-[rgb(255,104,27)-7%]",
  [ButtonVariant.PRIMARY_MAIN]:
    "hover:border-violet-500 hover:text-white hover:bg-violet-200",
  default: "hover:border-gray-300 hover:text-gray-500 hover:bg-gray-50",
  secondary: "hover:border-gray-300 hover:text-gray-500 hover:bg-gray-50",
  muted: "hover:no-underline",
  danger: "hover:border-red-500 hover:text-white hover:bg-red-400",
  base: "hover:border-gray-300 hover:text-gray-500 hover:bg-gray-50",
  [ButtonVariant.TERTIARY_MUTED]: "hover:no-underline",
  [ButtonVariant.MUTED_RED]: "hover:no-underline",
  [ButtonVariant.MUTED_BLUE]: "hover:no-underline",
  [ButtonVariant.MUTED_VIOLET]: "hover:no-underline",
};

const FOREGROUNDS: Record<ButtonVariant, string> = {
  primary: "text-white font-bold",
  [ButtonVariant.PRIMARY_MAIN]: "text-white font-bold",
  default: "font-bold text-primary",
  secondary: "text-gray-700 font-bold",
  muted: "text-gray-500 underline",
  danger: "text-white font-bold",
  base: "text-gray-700",
  [ButtonVariant.TERTIARY_MUTED]: "text-blue-500",
  [ButtonVariant.MUTED_RED]: "text-red-600",
  [ButtonVariant.MUTED_BLUE]: "text-blue-500",
  [ButtonVariant.MUTED_VIOLET]: "text-violet-500",
};

const BACKGROUNDS: Record<ButtonVariant, string> = {
  primary: "bg-gradient-to-t to-[rgb(250,84,0)105%] from-[rgb(250,62,0)-7%]",
  [ButtonVariant.PRIMARY_MAIN]: "bg-primary",
  default: "bg-white",
  secondary: "bg-white",
  muted: "",
  danger: "bg-red-500",
  base: "bg-white",
  [ButtonVariant.TERTIARY_MUTED]: "",
  [ButtonVariant.MUTED_RED]: "",
  [ButtonVariant.MUTED_BLUE]: "",
  [ButtonVariant.MUTED_VIOLET]: "",
};

const BORDER_COLORS: Record<ButtonVariant, string> = {
  primary: "border-primary-dark",
  [ButtonVariant.PRIMARY_MAIN]: "border-primary-dark",
  default: "border-gray-300",
  secondary: "border-gray-300",
  muted: "border-transparent",
  danger: "border-red-500",
  base: "border-gray-300",
  [ButtonVariant.TERTIARY_MUTED]: "border-transparent",
  [ButtonVariant.MUTED_RED]: "border-transparent",
  [ButtonVariant.MUTED_BLUE]: "border-transparent",
  [ButtonVariant.MUTED_VIOLET]: "border-transparent",
};

export type ButtonProps = Omit<
  HTMLProps<HTMLButtonElement | HTMLAnchorElement>,
  "size"
> & {
  block?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
  loading?: boolean;
  containerClassName?: string;
  rounded?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type,
      children: childrenProp,
      href,
      size = "md" as ButtonSize,
      variant = "default" as ButtonVariant,
      disabled,
      containerClassName = "",
      block = false,
      loading = false,
      rounded = true,
      ...props
    },
    ref
  ) => {
    const cls = `flex items-center justify-center shadow-lg
    ${HEIGHTS[size]} 
    ${PADDINGS[size]} 
    ${TEXT_SIZE[size]}
    ${FOREGROUNDS[variant]}
    ${
      disabled
        ? `cursor-not-allowed ${DISABLED[variant]}`
        : `disabled:cursor-not-allowed ${BACKGROUNDS[variant]} ${BORDER_COLORS[variant]} ${HOVER[variant]}`
    } 
    ${block ? "grid w-full" : "inline-grid"}
    ${rounded ? "rounded-md" : ""} 
    ${containerClassName}`;

    const children = childrenProp;

    return (
      <button
        {...(props as HTMLProps<HTMLButtonElement>)}
        ref={ref as MutableRefObject<HTMLButtonElement>}
        type={"button"}
        className={cls}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
