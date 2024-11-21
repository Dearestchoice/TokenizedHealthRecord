import { Fragment, ReactNode } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModalProps {
  children: ReactNode;
  title?: string;
  open: boolean;
  closeModal: () => void;
}

export default function Modal({
  children = <p>Modal content goes here.</p>,
  open,
  closeModal,
}: ModalProps) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Transition show={open} as={Fragment}>
        <Dialog onClose={closeModal} className="relative z-50">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <DialogPanel className="mx-auto sm:min-w-[400px] rounded-2xl shadow-2xl bg-[#151515]">
                <div className="flex justify-end items-center">
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeModal}
                    className="h-6 w-6 p-0 text-white"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
                <div>{children}</div>
              </DialogPanel>
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </div>
  );
}
