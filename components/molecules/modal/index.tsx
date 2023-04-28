import { Dialog } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
type ModalProps = {
   isOpen: boolean;
   onClose: (open: boolean) => void;
   children: React.ReactNode;
   className?: string;
};

export const Modal = ({
   isOpen = false,
   onClose,
   children,
   className,
}: ModalProps) => {
   return (
      <Dialog
         open={isOpen}
         // className="fixed inset-0 z-[5001] flex items-center justify-center overflow-y-auto lg:hidden"
         onClose={() => onClose(isOpen)}
      >
         <div
            className="fixed inset-0 bg-black/30 z-[5000]"
            aria-hidden="true"
         />
         <div className="fixed inset-0 flex items-center justify-center z-[5001]">
            <Dialog.Panel
               className={clsx(
                  'mt-[55px] w-full bg-[rgb(16,17,20)] p-5',
                  className,
               )}
            >
               {children}
            </Dialog.Panel>
         </div>
      </Dialog>
   );
};
