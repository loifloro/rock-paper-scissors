import { CharacterPick } from "@type/characterPick";
import { create } from "zustand";

type Store = {
    userPick: CharacterPick | null;
    housePick: CharacterPick | null;
    hasUserPick: () => boolean;
    updateUserPick: (newUserPick: CharacterPick) => void;
    updateHousePick: (newHousePick: CharacterPick) => void;
};

export const usePick = create<Store>()((set, get) => ({
    userPick: null,
    housePick: null,
    hasUserPick: () => get().userPick !== null,
    updateUserPick: (newUserPick) => set({ userPick: newUserPick }),
    updateHousePick: (newHousePick) => set({ userPick: newHousePick }),
}));
