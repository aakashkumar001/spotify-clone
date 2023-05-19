"use client";

import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useSupabase } from '@/app/providers/SupabaseProvider';

import Input from './Input';
import Modal from './Modal';
import Button from './Button';

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const { supabase } = useSupabase();

  const [isLoading, setIsLoading] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState(false);

  const {
    handleSubmit,
    register,
    watch,
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      setConfirmEmail(false);
      setIsLoading(false);
      reset();
      registerModal.onClose();
    }
  }

  const email = watch('email');

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    setIsLoading(true);

    const { error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    });

    if (error) {
      setIsLoading(false);
      return toast.error(error.message);
    }

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password
    });
  
    if (loginError) {
      setIsLoading(false);
      return setConfirmEmail(true);
    }

    reset();
    setConfirmEmail(false);
    registerModal.onClose();
    setIsLoading(false);
  }

  const resendEmail = async () => {
    const { error } = await supabase.auth.resend({ 
      email: email,
      type: 'signup'
    });

    if (error) {
      toast.error(error.message);
    }

    if (!error) {
      toast.success('Email has been sent.')
    }
  }

  let content = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-4 mb-8">
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
      <Button disabled={isLoading} type="submit">
        Sign up
      </Button>
    </form>
  );

  if (confirmEmail) {
    content = (
      <div className="flex flex-col gap-y-4">
        <p className="text-sm text-center text-neutral-400">
          Confirmation email has been sent. Please confirm your email.
        </p>
        <Button onClick={resendEmail}>Resend Email</Button>
        <Button 
          className="
            bg-transparent
            mt-4 
            text-neutral-400 
            text-xs 
            hover:text-white 
            font-medium
          "
          onClick={() => setConfirmEmail(false)}
        >
            Back
          </Button>
      </div>
    )
  }

  return (
    <Modal
      title="Welcome to Spotify"
      description="Create a new account."
      isOpen={registerModal.isOpen}
      onChange={onChange}
    >
      {content}
    </Modal>
  );
}

export default RegisterModal;