import { Character } from "@components/character";
import { getPickWinner } from "@lib/rules";
import { getRandomHousePick } from "@lib/helpers";
import { usePick } from "@stores/usePick";
import { useScore } from "@stores/useScore";
import className from "./Revelation.module.css";

export default function Revelation() {
    const { userPick, updateHousePick, housePick, resetPicks } = usePick();
    const { lastScorer, updateLastScorer, addScore, resetLastScorer } =
        useScore();

    if (!lastScorer && userPick && !housePick) {
        const _housePick = getRandomHousePick(userPick);
        const winner = getPickWinner(userPick, _housePick);

        updateHousePick(_housePick);

        updateLastScorer(winner);

        if (winner === "user") {
            addScore();
        }
    }

    return (
        <div className={className.revelation}>
            <div
                className={`${className.revelation__item} ${className.revelation__user}`}
            >
                <p className={className.revelation__title}>You picked</p>
                <Character imgPath={`/icon-${userPick}.svg`} pick={userPick!} />
            </div>
            {lastScorer === "house" && (
                <div className={className.revelation__status}>
                    <p className={className.revelation__status__title}>
                        You Lose
                    </p>
                    <button
                        className={className.revelation__button}
                        onClick={() => {
                            resetLastScorer();
                            resetPicks();
                        }}
                    >
                        Play Again
                    </button>
                </div>
            )}
            {lastScorer === "user" && (
                <div className={className.revelation__status}>
                    <p className={className.revelation__status__title}>
                        You Won
                    </p>
                    <button
                        className={className.revelation__button}
                        onClick={() => {
                            resetLastScorer();
                            resetPicks();
                        }}
                    >
                        Play Again
                    </button>
                </div>
            )}
            <div
                className={`${className.revelation__item} ${className.revelation__house}`}
            >
                <p className={className.revelation__title}>The House Picked</p>
                {housePick ? (
                    <Character
                        imgPath={`/icon-${housePick}.svg`}
                        pick={housePick!}
                    />
                ) : (
                    <div className={className.revelation__placeholder}></div>
                )}
            </div>
        </div>
    );
}
