import Playlist from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import Input from "@/components/Input";
import Header from "@/components/Header";
import { getSongs } from "@/libs/supabaseClient";
import { Song } from "@/types";

export const revalidate = 0;

const Search = async () => {
  const songs = await getSongs();

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <Input placeholder="What do you want to listen to?" />
        </div>
      </Header>
      <div className="flex flex-col gap-y-2 w-full px-6">
        {songs.map((song: Song) => (
          <div key={song.id} className="flex items-center gap-x-4 w-full">
            <div className="flex-1"><Playlist data={song} /></div>
            <div><LikeButton /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
