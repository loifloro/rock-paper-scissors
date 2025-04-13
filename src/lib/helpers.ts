import { CharacterPick } from "@type/characterPick";
import { EasyCharacterPicks } from "./enums";

export function getRandomHousePick(userPick: CharacterPick): CharacterPick {
    const housePick =
        EasyCharacterPicks[
            Math.floor(Math.random() * EasyCharacterPicks.length)
        ];

    console.log(userPick, housePick);

    if (housePick === userPick) {
        return getRandomHousePick(userPick);
    }

    return housePick;
}
