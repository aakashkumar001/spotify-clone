"use client";

import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import useLoginModal from "@/app/hooks/useLoginModal";
import useForgotModal from '@/app/hooks/useForgotModal';
import { useSupabase } from '@/app/providers/SupabaseProvider';

import Input from './Input';
import Modal from './Modal';
import Button from './Button';

const LoginModal = () => {
  const loginModal = useLoginModal();
  const forgotModal = useForgotModal();
  const { supabase } = useSupabase();

  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      setIsLoading(false);
      loginModal.onClose();
    }
  }

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    setIsLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (error) {
      setIsLoading(false);
      return toast.error(error.message);
    }

    toast.success('Logged in.')
    loginModal.onClose();

    setIsLoading(false);
  }

  const onForgot = () => {
    reset();
    setIsLoading(false);
    forgotModal.onOpen();
    loginModal.onClose();
  }

  return (
    <Modal 
      title="Welcome back" 
      description="Login to your account." 
      isOpen={loginModal.isOpen} 
      onChange={onChange} 
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-4">
          <Input
            id="email"
            type="email" 
            placeholder="Email"
            disabled={isLoading}
            {...register('email', { required: true })} 
          />
          <Input
            id="password"
            type="password" 
            placeholder="Password"
            disabled={isLoading}
            {...register('password', { required: true })}
          />
        </div>
        <Button
          disabled={isLoading}
          onClick={onForgot}
          className="
            mb-4
            text-xs
            bg-transparent
            text-neutral-400
            font-normal
            hover:text-white
          "
        >
          Forgot password?
        </Button>
        <Button disabled={isLoading} type="submit">
          Login
        </Button>
      </form>
    </Modal>
  );
}

export default LoginModal;