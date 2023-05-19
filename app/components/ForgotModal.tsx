"use client";

import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import useForgotModal from '@/app/hooks/useForgotModal';
import { useSupabase } from '@/app/providers/SupabaseProvider';

import Input from './Input';
import Modal from './Modal';
import Button from './Button';

const ForgotModal = () => {
  const forgotModal = useForgotModal();
  const { supabase } = useSupabase();

  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      setIsLoading(false);
      reset();
      forgotModal.onClose();
    }
  }

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    setIsLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email: values.email
    });

    if (error) {
      setIsLoading(false);
      return toast.error(error.message);
    }

    toast.success('Email has been sent.');

    reset();
    forgotModal.onClose();
    setIsLoading(false);
  }

  return (
    <Modal
      title="Login with email"
      description="We will send you a magic link."
      isOpen={forgotModal.isOpen}
      onChange={onChange}
    >
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="flex flex-col gap-y-4"
      >
        <Input
          id="email"
          type="email" 
          placeholder="Email"
          disabled={isLoading}
          {...register('email', { required: true })} 
        />
        <Button type="submit">Send email</Button>
      </form>
    </Modal>
  );
}

export default ForgotModal;