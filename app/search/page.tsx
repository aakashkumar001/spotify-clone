import Playlist from "@/app/components/MediaItem";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import LikeButton from "../components/LikeButton";
import Input from "../components/Input";
import Header from "../components/Header";

const data = {
  name: 'Liked Songs',
  image: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
  author: 'Antonio'
}

const Search = () => {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <Input placeholder="What do you want to listen to?" />
        </div>
      </Header>
      <div className="flex flex-col gap-y-2 w-full px-6">
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><LikeButton /></div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><LikeButton /></div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><LikeButton /></div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><LikeButton /></div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><LikeButton /></div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><LikeButton /></div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><LikeButton /></div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><LikeButton /></div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><LikeButton /></div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1"><Playlist {...data} /></div>
          <div><LikeButton /></div>
        </div>
      </div>
    </div>
  );
}

export default Search;
