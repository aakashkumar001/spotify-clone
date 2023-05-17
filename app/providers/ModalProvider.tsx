"use client";

import { useEffect, useState } from "react";

import RegisterModal from "../components/RegisterModal";
import LoginModal from "../components/LoginModal";

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
    </>
  );
}

export default ModalProvider;