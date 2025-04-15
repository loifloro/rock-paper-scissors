import { Character } from "@components/character";
import { usePick } from "@stores/usePick";
import className from "./Selection.module.css";

export default function Selection() {
    const updateUserPick = usePick((state) => state.updateUserPick);

    return (
        <div className={className.selection__container}>
            <div className={className.selection__first__row}>
                <Character
                    pick="paper"
                    imgPath="/icon-paper.svg"
                    size="md"
                    onClick={() => updateUserPick("paper")}
                />
                <Character
                    pick="scissors"
                    imgPath="/icon-scissors.svg"
                    size="md"
                    onClick={() => updateUserPick("scissors")}
                />
            </div>
            <div className={className.selection__second__row}>
                <Character
                    pick="rock"
                    imgPath="/icon-rock.svg"
                    size="md"
                    onClick={() => updateUserPick("rock")}
                />
            </div>
        </div>
    );
}
