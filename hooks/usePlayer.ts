import { create } from 'zustand';

interface PlayerStore {
  song?: Record<string, any>;
  setSong: (song: Record<string, any>) => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  song: undefined,
  setSong: (song: Record<string, any>) => set({ song: song })
}));

export default usePlayer;
