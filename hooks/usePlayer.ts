import { create } from 'zustand';

import { Song } from '@/types';

interface PlayerStore {
  song?: Song;
  setSong: (song?: Song) => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  song: undefined,
  setSong: (song?: Song) => set({ song: song }),
}));

export default usePlayer;
