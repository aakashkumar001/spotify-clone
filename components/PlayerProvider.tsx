"use client";

import usePlayer from "@/hooks/usePlayer";

import Player from "./Player";

const PlayerProvider = () => {
  const player = usePlayer();

  if (!player.song) {
    return null;
  }

  return <Player key={player.song.id} />;
}
 
export default PlayerProvider;
