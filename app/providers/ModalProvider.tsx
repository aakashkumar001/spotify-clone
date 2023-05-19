"use client";

import { useEffect, useState } from "react";

import RegisterModal from "@/app/components/RegisterModal";
import LoginModal from "@/app/components/LoginModal";
import ForgotModal from "@/app/components/ForgotModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <RegisterModal />
      <LoginModal />
      <ForgotModal />
    </>
  );
}

export default ModalProvider;