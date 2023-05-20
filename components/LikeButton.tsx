"use client";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";

const isFavorite = true;

const LikeButton = () => {
  const authModal = useAuthModal();
  const { user, isLoading } = useUser();

  const Icon = isFavorite ? AiFillHeart : AiOutlineHeart;

  const handleLike = () => {
    if (!user) {
      return authModal.onOpen();
    }
  }

  return (
    <button 
      className="
        cursor-pointer 
        hover:opacity-75 
        transition
      "
      onClick={handleLike}
    >
      <Icon color={isFavorite && '#22c55e'} size={25} />
    </button>
  );
}

export default LikeButton;
