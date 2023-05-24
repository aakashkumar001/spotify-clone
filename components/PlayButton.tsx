"use client";

import { FaPlay } from "react-icons/fa";

import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";

interface PlayButtonProps {
  data: Song
}

const PlayButton: React.FC<PlayButtonProps> = ({
  data
}) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const subscribeModal = useSubscribeModal();
  const { user, isLoading, subscription } = useUser();

  const handlePlay = () => {
    if (!user) {
      return authModal.onOpen();
    }

    if (!subscription) {
      return subscribeModal.onOpen();
    }

    player.setId(data.id);
  }

  return ( 
    <button
      disabled={isLoading}
      onClick={handlePlay}
      className="
        transition 
        opacity-0 
        rounded-full 
        flex 
        items-center 
        justify-center 
        bg-green-500 
        p-4 
        drop-shadow-md 
        translate
        translate-y-1/4
        group-hover:opacity-100 
        group-hover:translate-y-0
        hover:scale-110
      "
    >
      <FaPlay className="text-black" />
    </button>
   );
}
 
export default PlayButton;
