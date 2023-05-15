"use client";

import Image from "next/image";

interface MediaItemProps {
  name: string;
  image?: string;
  author: string;
  onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({
  name,
  image,
  author,
  onClick
}) => {
  const handleClick = () => {
    if (!onClick) {
      return null;
    }

    return onClick(name);
  };

  return ( 
    <div
      onClick={handleClick}
      className="
        flex 
        items-center 
        gap-x-3 
        cursor-pointer 
        hover:bg-neutral-800/50 
        w-full 
        p-2 
        rounded-md
      "
    >
      <div 
        className="
          relative 
          rounded-md 
          min-h-[48px] 
          min-w-[48px] 
          overflow-hidden
        "
      >
        <Image
          fill
          src={image || "/images/music-placeholder.png"}
          alt="MediaItem"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{name}</p>
        <p className="text-neutral-400 text-sm truncate">By {author}</p>
      </div>
    </div>
  );
}
 
export default MediaItem;
