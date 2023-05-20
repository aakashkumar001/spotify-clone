"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/navigation";

import MediaItem from "./MediaItem";

const list = [
  {
    name: 'Liked Songs',
    image: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
    author: 'Antonio'
  },
  {
    name: 'champagne & coke',
    image: "https://i.scdn.co/image/ab67706c0000f8e481bcb4ae4198afa5a6135ff0",
    author: 'Ilke Kartal'
  },
  {
    name: 'My Playlist #1',
    author: 'Antonio'
  },
]

const Library = () => {
  const router= useRouter();

  return ( 
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus size={20} className="text-neutral-400 cursor-pointer hover:text-white transition" />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {list.map((item) => (
          <MediaItem onClick={() => router.push('/playlist/123')} key={item.name} {...item} />
        ))}
      </div>
    </div>
   );
}
 
export default Library;