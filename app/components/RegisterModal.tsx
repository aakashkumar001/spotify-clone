"use client";

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from 'react-icons/io';

import useRegisterModal from "@/app/hooks/useRegisterModal";

import Input from './Input';
import Button from './Button';

const RegisterModal = () => {
  const registerModal = useRegisterModal();

  const onChange = (open: boolean) => {
    if (!open) {
      registerModal.onClose();
    }
  }

  return (
    <Dialog.Root open={registerModal.isOpen} defaultOpen={registerModal.isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0" />
        <Dialog.Content
          className="
            fixed 
            drop-shadow-md 
            border 
            border-neutral-700 
            top-[50%] 
            left-[50%] 
            max-h-full 
            h-full 
            md:h-auto 
            md:max-h-[85vh] 
            w-full 
            md:w-[90vw] 
            md:max-w-[450px] 
            translate-x-[-50%] 
            translate-y-[-50%] 
            rounded-md 
            bg-neutral-800 
            p-[25px] 
            focus:outline-none
          ">
          <Dialog.Title className="text-xl text-center font-bold mb-4">
            Welcome to Spotify
          </Dialog.Title>
          <Dialog.Description className="mb-5 text-sm leading-normal text-center">
            Create a new account.
          </Dialog.Description>
          <div className="flex flex-col gap-y-4 mb-8">
            <Input placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm password" />
          </div>
          <Button>Sign up</Button>
          <Dialog.Close asChild>
            <button
              className="
                text-neutral-400 
                hover:text-white 
                absolute 
                top-[10px] 
                right-[10px] 
                inline-flex 
                h-[25px] 
                w-[25px] 
                appearance-none 
                items-center 
                justify-center 
                rounded-full 
                focus:outline-none
              "
              aria-label="Close"
            >
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default RegisterModal;