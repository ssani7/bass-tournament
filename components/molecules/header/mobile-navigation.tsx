import { useState } from 'react';
import { HambergerIcon } from '../icons';
import { Modal } from '../modal';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export const MobileNav = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="flex justify-end w-full lg:hidden">
         <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
               <XMarkIcon className="h-7 w-7 text-white" />
            ) : (
               <HambergerIcon className="h-8 w-8" />
            )}
         </button>
         <Modal isOpen={isOpen} onClose={setIsOpen}>
            <Dialog.Title
               as="h3"
               className="text-lg font-medium leading-6 text-white"
            >
               Payment successful
            </Dialog.Title>
            <div className="mt-2">
               <p className="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent you
                  an email with all of the details of your order.
               </p>
            </div>

            <div className="mt-4">
               <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={() => setIsOpen(false)}
               >
                  Got it, thanks!
               </button>
            </div>
         </Modal>
      </div>
   );
};
