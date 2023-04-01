type ClassProps = {
   className: string;
};

export const Cavet = ({ ...etcProps }) => {
   return (
      <svg
         {...etcProps}
         xmlns="http://www.w3.org/2000/svg"
         width="20"
         height="20"
      >
         <path
            d="M6.464 3.464a1 1 0 011.327-.078l.087.078 5.657 5.657a1 1 0 01.078 1.327l-.078.087-5.657 5.657a1 1 0 01-1.492-1.327l.078-.087 4.95-4.95-4.95-4.95a1 1 0 01-.078-1.327l.078-.087z"
            fill="currentColor"
            fillRule="evenodd"
         ></path>
      </svg>
   );
};
