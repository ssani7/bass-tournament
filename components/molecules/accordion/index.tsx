import { useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

type AccordionProps = {
   title: string;
   items: {
      title?: string;
      name: string;
   }[];
};

export const Accordion = ({ title, items }: AccordionProps) => {
   const [expanded, setExpanded] = useState(false);
   const toggleExpanded = () => setExpanded((current) => !current);
   return (
      <div
         className="my-2 sm:my-4 md:my-6 shadow-sm cursor-pointer text-white"
         onClick={toggleExpanded}
      >
         <div className="text-left items-center flex flex-row mb-2 select-none justify-between">
            <h4 className="flex-1 text-xl font-semibold">{title}</h4>
            <div className="flex-none pl-2">
               {expanded ? (
                  <XMarkIcon className="h-5 w-5" />
               ) : (
                  <PlusIcon className="h-5 w-5" />
               )}
            </div>
         </div>
         <div
            className={`pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${
               expanded ? 'max-h-40' : 'max-h-0'
            }`}
         >
            <ul className="py-3">
               {items?.map(({ name }) => (
                  <li key={name} className="text-white/90">
                     {name}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};
