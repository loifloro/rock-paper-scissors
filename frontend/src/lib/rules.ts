import { CharacterPick } from "@type/characterPick";

export function getPickWinner(
    userPick: CharacterPick,
    housePick: CharacterPick
): "win" | "lose" {
    if (userPick === "lizard") {
        if (housePick === "spock") {
            return "win";
        }

        if (housePick === "paper") {
            return "win";
        }
    }

    if (userPick === "spock") {
        if (housePick === "scissors") {
            return "win";
        }

        if (housePick === "rock") {
            return "win";
        }
    }

    if (userPick === "paper") {
        if (housePick === "rock") {
            return "win";
        }

        if (housePick === "spock") {
            return "win";
        }
    }

    if (userPick === "scissors") {
        if (housePick === "paper") {
            return "win";
        }

        if (housePick === "lizard") {
            return "win";
        }
    }

    if (userPick === "rock") {
        if (housePick === "scissors") {
            return "win";
        }

        if (housePick === "lizard") {
            return "win";
        }
    }

    return "lose";
}
