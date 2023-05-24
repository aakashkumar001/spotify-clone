import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import SongItem from "@/components/SongItem";
import { getSongs } from "@/libs/supabaseClient";

export const revalidate = 0;

const list = [
  {
    name: 'Liked Songs',
    image: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
    author: 'Antonio'
  },
]

export default async function Home() {
  const songs = await getSongs();

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            {list.map((item) => (
              <ListItem key={item.name} {...item} />
            ))}
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest songs</h1>
          <p className="text-sm text-neutral-400 cursor-pointer hover:text-neutral-200 transition font-semibold">Show All</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
          {songs.map((item: any) => (
            <SongItem key={item.name} data={item} />
          ))}
        </div>
      </div>
      {/* <div className="mb-2 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest playlists</h1>
          <p className="text-sm text-neutral-400 cursor-pointer hover:text-neutral-200 transition font-semibold">Show All</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
          {list.map((item) => (
            <SongItem key={item.name} {...item} />
          ))}
        </div>
      </div> */}
    </div>
  )
}
