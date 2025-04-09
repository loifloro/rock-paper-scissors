import header from "./Header.module.css";

export default function Header() {
    const score = 1;

    return (
        <header className={header.header}>
            <ul className={header.list}>
                <li className={header.list__item}>Rock</li>
                <li className={header.list__item}>Paper</li>
                <li className={header.list__item}>Scissors</li>
            </ul>
            <div className={header.score}>
                <p className={header.score__heading}>Score</p>
                <p className={header.score__total}>{score}</p>
            </div>
        </header>
    );
}
