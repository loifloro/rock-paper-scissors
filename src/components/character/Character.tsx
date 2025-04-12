import { CharacterPick } from "@type/characterPick";
import { usePick } from "@stores/usePick";
import classname from "./Character.module.css";

type CharacterProps = {
    imgPath: string;
    pick: CharacterPick;
};

export default function Character({ imgPath, pick }: CharacterProps) {
    const { updateUserPick } = usePick();

    return (
        <div
            className={`${classname.character__container} ${classname[`character__item--${pick}`]}`}
            onClick={() => updateUserPick(pick)}
        >
            <div className={classname.character__item}>
                <img src={imgPath} className={classname.character__icon} />
            </div>
        </div>
    );
}
