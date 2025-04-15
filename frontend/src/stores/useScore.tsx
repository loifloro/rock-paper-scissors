import { create } from "zustand";
import { Player } from "@type/player";

type Store = {
    score: number;
    lastScorer?: Player;
    addScore: () => void;
    updateLastScorer: (newScore: Player) => void;
    resetLastScorer: () => void;
};

export const useScore = create<Store>()((set) => ({
    score: 0,
    addScore: () => set((state) => ({ score: state.score + 1 })),
    updateLastScorer: (newScorer) => set({ lastScorer: newScorer }),
    resetLastScorer: () => set(() => ({ lastScorer: undefined })),
}));
