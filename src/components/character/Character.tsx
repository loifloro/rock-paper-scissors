import { CharacterPick } from "@type/characterPick";
import className from "./Character.module.css";

type CharacterProps = {
    imgPath: string;
    pick: CharacterPick;
    size?: "md" | "lg";
    onClick?: () => void;
};

export default function Character({
    imgPath,
    pick,
    size = "lg",
    onClick,
}: CharacterProps) {
    return (
        <div
            className={`${className.character__container} ${size === "md" ? className["character__container--md"] : ""} ${className[`character__item--${pick}`]}`}
            onClick={onClick}
        >
            <div className={className.character__item}>
                <img src={imgPath} className={className.character__icon} />
            </div>
        </div>
    );
}
