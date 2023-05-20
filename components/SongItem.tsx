import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import PlayButton from "./PlayButton";

interface SongItemProps {
  image?: string;
  name: string;
  author: string;
}

const SongItem: React.FC<SongItemProps> = ({
  image,
  name,
  author
}) => {
  return ( 
    <div className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3">
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          className="object-cover"
          src={image || '/images/music-placeholder.png'}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">
          {name}
        </p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">
          By {author}
        </p>
      </div>
      <div 
        className="
          absolute 
          bottom-24 
          right-5
        "
      >
        <PlayButton />
      </div>
    </div>
   );
}
 
export default SongItem;