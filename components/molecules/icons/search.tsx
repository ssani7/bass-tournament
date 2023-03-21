import { SVGProps } from "react";

type SvgProps = {
  width: string;
  height: string;
  etcProps: SVGProps<SVGElement>[];
};

export const Search = ({
  width = "20",
  height = "20",
  ...etcProps
}: Partial<SvgProps>) => {
  return (
    <svg
      {...etcProps}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
    >
      <defs>
        <linearGradient
          id="prefix__ahg"
          x1="-14.554%"
          x2="100%"
          y1="-57.183%"
          y2="238.199%"
        >
          <stop offset="0%" stop-color="#A3A0AD"></stop>
          <stop offset="100%" stop-color="#4E4964"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#prefix__ahg)"
        d="M16.584 14.575l-3.693-3.693c-.02-.02-.043-.034-.063-.052.726-1.102 1.15-2.422 1.15-3.84C13.978 3.13 10.85 0 6.99 0S0 3.13 0 6.99c0 3.86 3.13 6.988 6.99 6.988 1.418 0 2.738-.424 3.84-1.15.018.02.032.043.052.063l3.693 3.693c.555.555 1.454.555 2.009 0 .555-.555.555-1.454 0-2.01zm-9.595-3.02c-2.522 0-4.566-2.044-4.566-4.566s2.044-4.566 4.566-4.566 4.567 2.044 4.567 4.566-2.045 4.567-4.567 4.567z"
        transform="translate(1.5 1.5)"
      ></path>
    </svg>
  );
};
