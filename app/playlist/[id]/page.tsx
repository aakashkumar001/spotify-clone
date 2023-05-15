import Playlist from "@/app/components/MediaItem";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

const data = {
  name: 'Liked Songs',
  image: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
  author: 'Antonio'
}

const PlaylistId = () => {
  return ( 
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <div className="h-fit bg-gradient-to-b from-emerald-800 p-6">
        <div className="w-full mb-4">
          <div className="flex gap-x-2 items-center">
            <div className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition">
              <RxCaretLeft className="text-white" size={35} />
            </div>
            <div className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition">
              <RxCaretRight className="text-white" size={35} />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-x-5">
            <div className="relative h-32 w-32 lg:h-48 lg:w-48">
              <Image
                className="object-cover"
                fill
                src="https://seed-mix-image.spotifycdn.com/v6/img/artist/1Xyo4u8uXC1ZmMpatF05PJ/en/default"
                alt="Playlist"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 md:mt-0 overflow-hidden">
              <p className="hidden md:block font-semibold text-sm">Playlist</p>
              <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold truncate">The Weeknd Mix</h1>
              <p className="text-sm font-light">By Antonio</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 w-full p-6">
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><AiOutlineHeart size={25} /></div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><AiOutlineHeart size={25} /></div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><AiOutlineHeart size={25} /></div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><AiOutlineHeart size={25} /></div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><AiOutlineHeart size={25} /></div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><AiOutlineHeart size={25} /></div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><AiOutlineHeart size={25} /></div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><AiOutlineHeart size={25} /></div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><AiOutlineHeart size={25} /></div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><AiOutlineHeart size={25} /></div>
        </div>
      </div>
    </div>
  );
}
 
export default PlaylistId;
