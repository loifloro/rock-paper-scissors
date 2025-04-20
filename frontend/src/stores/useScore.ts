import { create } from "zustand";
import { Player } from "@type/player";

type Store = {
    score: number;
    lastScorer?: Player;
    updateScore: (newScore: number) => void;
    updateLastScorer: (newScore: Player) => void;
    resetLastScorer: () => void;
};

export const useScore = create<Store>()((set) => ({
    score: 0,
    updateScore: (newScore) => set({ score: newScore }),
    updateLastScorer: (newScorer) => set({ lastScorer: newScorer }),
    resetLastScorer: () => set(() => ({ lastScorer: undefined })),
}));
