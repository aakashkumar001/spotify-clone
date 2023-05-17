import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerWave } from "react-icons/hi2";
import { BsPlayFill } from "react-icons/bs";

import MediaItem from "./MediaItem";
import Slider from "./Slider";
import LikeButton from "./LikeButton";

const data = {
  name: 'Liked Songs',
  image: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
  author: 'Antonio'
}

const Player = () => {
  return (
    <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
      <div className="grid grid-cols-1 md:grid-cols-3">

        <div className="hidden md:flex w-full justify-start">
          <div className="flex items-center gap-x-4">
            <MediaItem {...data} />
            <LikeButton />
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-2 w-full max-w-[722px]">
          <div className="flex items-center gap-x-6">
            <AiFillStepBackward size={26} className="text-neutral-400 cursor-pointer hover:text-white transition" />
            <div className="flex items-center justify-center rounded-full bg-white p-1 cursor-pointer">
              <BsPlayFill size={24} className="text-black" />
            </div>
            <AiFillStepForward size={26} className="text-neutral-400 cursor-pointer hover:text-white transition" />
          </div>
          <div className="flex items-center w-full gap-x-2">
            <div className="text-xs text-neutral-400">00:53</div>
            <Slider />
            <div className="text-xs text-neutral-400">2:21</div>
          </div>
        </div>

        <div className="hidden md:flex w-full justify-end pr-2">
          <div className="flex items-center gap-x-2 w-[120px]">
            <HiSpeakerWave className="cursor-pointer" size={25} />
            <Slider />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Player;