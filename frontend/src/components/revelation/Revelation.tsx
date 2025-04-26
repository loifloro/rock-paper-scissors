import { Character } from "@components/character";
import { CharacterPick } from "@type/characterPick";
import { getPickWinner } from "@lib/rules";
import { getRandomHousePick } from "@lib/helpers";
import { usePick } from "@stores/usePick";
import { useScore } from "@stores/useScore";
import { useSearchParams } from "react-router";
import { useSocket } from "@stores/useSocket";
import className from "./Revelation.module.css";

export default function Revelation() {
    const socket = useSocket((state) => state.socket);

    const { playerPick } = usePick();

    const resetPicks = usePick((state) => state.resetPicks);
    const updateOpponentPick = usePick((state) => state.updateOpponentPick);
    const opponentPick = usePick((state) => state.opponentPick);

    const lastScorer = useScore((state) => state.lastScorer);
    const updateScore = useScore((state) => state.updateScore);
    const score = useScore((state) => state.score);
    const updateLastScorer = useScore((state) => state.updateLastScorer);
    const resetLastScorer = useScore((state) => state.resetLastScorer);

    const [searchParams] = useSearchParams();

    const hasOpponent =
        searchParams.has("s") && searchParams.has("p") && searchParams.has("o");

    socket.on(
        "score",
        ({
            pickWinner,
            players,
        }: {
            players: [
                {
                    playerId: string;
                    opponentId: string;
                    score: number;
                    pick: CharacterPick;
                },
                {
                    playerId: string;
                    opponentId: string;
                    score: number;
                    pick: CharacterPick;
                },
            ];
            pickWinner: string;
        }) => {
            const currentPlayer = players.find(
                (item) => item.playerId === searchParams.get("p")
            );
            const opponent = players.find(
                (item) => item.playerId === searchParams.get("o")
            );

            if (
                searchParams.get("p") === currentPlayer?.playerId &&
                opponent?.pick
            ) {
                updateOpponentPick(opponent.pick);
            }

            if (pickWinner === currentPlayer?.playerId) {
                updateLastScorer("player");
                updateScore(currentPlayer.score);
            } else if (pickWinner === opponent?.playerId) {
                updateLastScorer("opponent");
            } else {
                updateLastScorer("tie");
            }
        }
    );

    const handleReset = () => {
        if (socket.connected && hasOpponent) {
            socket.emit("reset pick", searchParams.get("p"));
        }

        resetLastScorer();
        resetPicks();
    };

    socket.on("reset pick", () => {
        resetLastScorer();
        resetPicks();
    });

    if (!hasOpponent && !lastScorer && playerPick && !opponentPick) {
        const _housePick = getRandomHousePick(playerPick);
        const player = getPickWinner(playerPick, _housePick);

        updateOpponentPick(_housePick);

        updateLastScorer(player === "win" ? "player" : "opponent");

        if (player === "win") {
            updateScore(score + 1);
        }
    }

    return (
        <div className={className.revelation}>
            <div
                className={`${className.revelation__item} ${className.revelation__user}`}
            >
                <p className={className.revelation__title}>You picked</p>
                <Character
                    imgPath={`/icon-${playerPick}.svg`}
                    pick={playerPick!}
                />
            </div>
            {lastScorer === "tie" && (
                <div className={className.revelation__status}>
                    <p className={className.revelation__status__title}>
                        It's a tie
                    </p>
                    <button
                        className={className.revelation__button}
                        onClick={handleReset}
                    >
                        Play Again
                    </button>
                </div>
            )}
            {lastScorer === "opponent" && (
                <div className={className.revelation__status}>
                    <p className={className.revelation__status__title}>
                        You Lose
                    </p>
                    <button
                        className={className.revelation__button}
                        onClick={handleReset}
                    >
                        Play Again
                    </button>
                </div>
            )}
            {lastScorer === "player" && (
                <div className={className.revelation__status}>
                    <p className={className.revelation__status__title}>
                        You Won
                    </p>
                    <button
                        className={className.revelation__button}
                        onClick={handleReset}
                    >
                        Play Again
                    </button>
                </div>
            )}
            <div
                className={`${className.revelation__item} ${className.revelation__house}`}
            >
                <p className={className.revelation__title}>Opponent Picked</p>
                {opponentPick ? (
                    <Character
                        imgPath={`/icon-${opponentPick}.svg`}
                        pick={opponentPick!}
                    />
                ) : (
                    <div className={className.revelation__placeholder}></div>
                )}
            </div>
        </div>
    );
}
