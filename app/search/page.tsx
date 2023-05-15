import Playlist from "@/app/components/MediaItem";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

const data = {
  name: 'Liked Songs',
  image: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
  author: 'Antonio'
}

const Search = () => {
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
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
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
 
export default Search;
