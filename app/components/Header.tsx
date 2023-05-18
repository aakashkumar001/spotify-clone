"use client";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from "../hooks/useLoginModal";

import Button from "./Button";
import { twMerge } from "tailwind-merge";
import { useSupabase } from "../providers/SupabaseProvider";
import { useRouter } from "next/navigation";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  children,
  className,
}) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const { supabase, session } = useSupabase();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
    }
  }

  return (
    <div
      className={twMerge(`
        h-fit 
        bg-gradient-to-b 
        from-emerald-800 
        p-6
        `,
        className
      )}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="flex gap-x-2 items-center">
          <div onClick={() => router.back()} className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition">
            <RxCaretLeft className="text-white" size={35} />
          </div>
          <div onClick={() => router.forward()} className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition">
            <RxCaretRight className="text-white" size={35} />
          </div>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {session ? (
            <Button onClick={handleLogout} className="bg-white px-6 py-2">
              Logout
            </Button>
          ) : (
            <>
              <div>
                <Button onClick={registerModal.onOpen} className="bg-transparent text-neutral-300 font-medium">
                  Sign up
                </Button>
              </div>
              <div>
                <Button onClick={loginModal.onOpen} className="bg-white px-6 py-2">
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

export default Header;
