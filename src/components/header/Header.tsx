import { useScore } from "@stores/useScore";
import className from "./Header.module.css";

export default function Header() {
    const { score } = useScore();

    return (
        <header>
            <nav className={className.nav}>
                <img src="/logo.svg" className={className.nav__logo} />
                <div className={className.score}>
                    <p className={className.score__heading}>Score</p>
                    <p className={className.score__total}>{score}</p>
                </div>
            </nav>
        </header>
    );
}
