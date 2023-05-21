"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/navigation";

import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types";

import MediaItem from "./MediaItem";

interface LibraryProps {
  data: Song[];
}

const Library: React.FC<LibraryProps> = ({
  data
}) => {
  const uploadModal = useUploadModal();
  const router = useRouter();

  return ( 
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus onClick={uploadModal.onOpen} size={20} className="text-neutral-400 cursor-pointer hover:text-white transition" />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {data.map((item) => (
          <MediaItem onClick={() => router.push('/playlist/123')} key={item.id} data={item} />
        ))}
      </div>
    </div>
   );
}
 
export default Library;