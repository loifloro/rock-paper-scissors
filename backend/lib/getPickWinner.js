export function getPickWinner(playerPick, opponentPick) {
    if (playerPick === opponentPick) {
        return "tie";
    }

    if (playerPick === "lizard") {
        if (opponentPick === "spock") {
            return "win";
        }

        if (opponentPick === "paper") {
            return "win";
        }
    }

    if (playerPick === "spock") {
        if (opponentPick === "scissors") {
            return "win";
        }

        if (opponentPick === "rock") {
            return "win";
        }
    }

    if (playerPick === "paper") {
        if (opponentPick === "rock") {
            return "win";
        }

        if (opponentPick === "spock") {
            return "win";
        }
    }

    if (playerPick === "scissors") {
        if (opponentPick === "paper") {
            return "win";
        }

        if (opponentPick === "lizard") {
            return "win";
        }
    }

    if (playerPick === "rock") {
        if (opponentPick === "scissors") {
            return "win";
        }

        if (opponentPick === "lizard") {
            return "win";
        }
    }

    return "lose";
}
