import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
type ModalProps = {
   isOpen: boolean;
   onClose: (open: boolean) => void;
   children: React.ReactNode;
};

export const Modal = ({ isOpen = false, onClose, children }: ModalProps) => {
   return (
      <Dialog
         open={isOpen}
         className="fixed inset-0 z-[5001] flex items-center justify-center overflow-y-auto lg:hidden"
         onClose={() => onClose(isOpen)}
      >
         <div className="fixed inset-0 flex items-center justify-center">
            <Dialog.Panel className="mt-[55px] h-[calc(100vh-55px)] w-full bg-[rgb(16,17,20)] p-5">
               {children}
            </Dialog.Panel>
         </div>
      </Dialog>
   );
};
