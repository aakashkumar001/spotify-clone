import { create } from 'zustand';

interface PlayerStore {
  ids: [];
  activeId?: string;
  setId: (id: string) => void;
  reset: () => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  activeId: undefined,
  setId: (id: string) => set({ activeId: id }),
  reset: () => set({ ids: [], activeId: undefined })
}));

export default usePlayer;
