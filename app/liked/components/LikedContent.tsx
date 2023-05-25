"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Song } from "@/types";
import { useUser } from "@/hooks/useUser";
import usePlayer from "@/hooks/usePlayer";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";

interface LikedContentProps {
  songs: Song[];
};

const LikedContent: React.FC<LikedContentProps> = ({
  songs
}) => {
  const player = usePlayer();
  const router = useRouter();
  const { isLoading, user } = useUser();

  const onPlay = (id: string) => {
    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  }

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, user, router]);

  return ( 
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song: any) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={(id) => onPlay(id)} data={song} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
}
 
export default LikedContent;
