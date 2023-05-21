"use client";

import useSound from "use-sound";
import { useState } from "react";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";

import MediaItem from "./MediaItem";
import Slider from "./Slider";
import LikeButton from "./LikeButton";

const data = {
  name: 'Liked Songs',
  image: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
  author: 'Antonio'
}

const Player = () => {
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { pause }] = useSound(
    'https://tbvswgcbrilqlaxdsxii.supabase.co/storage/v1/object/sign/songs/song.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb25ncy9zb25nLm1wMyIsImlhdCI6MTY4NDYzMTE2OSwiZXhwIjoxNjg1MjM1OTY5fQ.H9MYFFVGao-YUPb-E4a7F3tbjZoaAxXSYNsyk7ExytU&t=2023-05-21T01%3A06%3A09.716Z',
    { 
      volume: volume,
      // interrupt: true,
      onplay: () => setIsPlaying(true),
      onend: () => setIsPlaying(false),
      onpause: () => setIsPlaying(false),
    }
  );

  const handlePlay = () => {
    if (!isPlaying) {
      play();
    } else {
      pause();
    }
  }

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  }

  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

  return (
    <div 
      className="
        fixed 
        bottom-0 
        bg-black 
        w-full 
        py-2 
        h-[80px] 
        px-4
      "
    >
      <div className="grid grid-cols-1 md:grid-cols-3">

        <div className="hidden md:flex w-full justify-start">
          <div className="flex items-center gap-x-4">
            <MediaItem {...data} />
            <LikeButton />
          </div>
        </div>

        <div 
          className="
            flex 
            justify-center 
            items-center 
            w-full 
            max-w-[722px] 
            gap-x-6
          "
        >
          <AiFillStepBackward 
            size={30} 
            className="
              text-neutral-400 
              cursor-pointer 
              hover:text-white 
              transition
            "
          />
          <div 
            onClick={handlePlay} 
            className="
              flex 
              items-center 
              justify-center 
              rounded-full 
              bg-white 
              p-1 
              cursor-pointer
            "
          >
            <Icon size={30} className="text-black" />
          </div>
          <AiFillStepForward 
            size={30} 
            className="
              text-neutral-400 
              cursor-pointer 
              hover:text-white 
              transition
            " 
          />
        </div>

        <div className="hidden md:flex w-full justify-end pr-2">
          <div className="flex items-center gap-x-2 w-[120px]">
            <VolumeIcon 
              onClick={toggleMute} 
              className="cursor-pointer" 
              size={34} 
            />
            <Slider 
              value={volume} 
              onChange={(value) => setVolume(value)}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Player;
