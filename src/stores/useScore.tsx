import { create } from "zustand";

type Store = {
    score: number;
    addScore: () => void;
};

export const useScore = create<Store>()((set) => ({
    score: 0,
    addScore: () => set((state) => ({ score: state.score + 1 })),
}));
