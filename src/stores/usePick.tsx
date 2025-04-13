import { CharacterPick } from "@type/characterPick";
import { create } from "zustand";

type Store = {
    userPick: CharacterPick | null;
    housePick: CharacterPick | null;
    updateUserPick: (newUserPick: CharacterPick) => void;
    updateHousePick: (newHousePick: CharacterPick) => void;
    resetPicks: () => void;
};

export const usePick = create<Store>()((set) => ({
    userPick: null,
    housePick: null,
    resetPicks: () => set({ userPick: null, housePick: null }),
    updateUserPick: (newUserPick) => set({ userPick: newUserPick }),
    updateHousePick: (newHousePick) => set({ housePick: newHousePick }),
}));
