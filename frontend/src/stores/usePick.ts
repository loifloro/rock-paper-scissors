import { CharacterPick } from "@type/characterPick";
import { create } from "zustand";

type Store = {
    playerPick: CharacterPick | null;
    opponentPick: CharacterPick | null;
    updatePlayerPick: (newPlayerPick: CharacterPick) => void;
    updateOpponentPick: (newOpponentPick: CharacterPick) => void;
    resetPicks: () => void;
};

export const usePick = create<Store>()((set) => ({
    playerPick: null,
    opponentPick: null,
    resetPicks: () => set({ playerPick: null, opponentPick: null }),
    updatePlayerPick: (newPlayerPick) => set({ playerPick: newPlayerPick }),
    updateOpponentPick: (newOpponentPick) =>
        set({ opponentPick: newOpponentPick }),
}));
