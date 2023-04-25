import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
type ModalProps = {
   isOpen: boolean;
   onClose: (open: boolean) => void;

   children: React.ReactNode;
};

export const Modal = ({ isOpen = false, onClose, children }: ModalProps) => {
   return (
      <Transition
         show={isOpen}
         enter="transition duration-100 ease-out"
         enterFrom="transform scale-95 opacity-0"
         enterTo="transform scale-100 opacity-100"
         leave="transition duration-75 ease-out"
         leaveFrom="transform scale-100 opacity-100"
         leaveTo="transform scale-95 opacity-0"
         as={Fragment}
      >
         <Dialog
            className="fixed inset-0 z-10flex items-center justify-center overflow-y-auto lg:hidden"
            onClose={() => onClose(isOpen)}
         >
            <Transition.Child
               as={Fragment}
               enter="ease-out duration-300"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in duration-200"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <div className="fixed inset-0 text-white bg-opacity-25" />
            </Transition.Child>
            <div className=" fixed inset-0 flex items-center justify-center">
               <Dialog.Panel className="mt-[55px] h-[calc(100vh-55px)] w-full rounded bg-[rgb(16,17,20)] p-5">
                  {children}
               </Dialog.Panel>
            </div>
         </Dialog>
      </Transition>
   );
};
