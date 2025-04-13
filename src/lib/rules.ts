import { CharacterPick } from "@type/characterPick";

export function getPickWinner(
    userPick: CharacterPick,
    housePick: CharacterPick
): "user" | "house" {
    if (userPick === "lizard") {
        if (housePick === "spock") {
            return "user";
        }

        if (housePick === "paper") {
            return "user";
        }
    }

    if (userPick === "spock") {
        if (housePick === "scissors") {
            return "user";
        }

        if (housePick === "rock") {
            return "user";
        }
    }

    if (userPick === "paper") {
        if (housePick === "rock") {
            return "user";
        }

        if (housePick === "spock") {
            return "user";
        }
    }

    if (userPick === "scissors") {
        if (housePick === "paper") {
            return "user";
        }

        if (housePick === "lizard") {
            return "user";
        }
    }

    if (userPick === "rock") {
        if (housePick === "scissors") {
            return "user";
        }

        if (housePick === "lizard") {
            return "user";
        }
    }

    return "house";
}
