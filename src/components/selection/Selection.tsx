import { Character } from "@components/character";
import className from "./Selection.module.css";
import { usePick } from "@stores/usePick";

export default function Selection({ hard = false }: { hard?: boolean }) {
    const { userPick } = usePick();

    console.log(userPick);

    return (
        <div className={className.selection__container}>
            <div className={className.selection__first__row}>
                <Character pick="paper" imgPath="/icon-paper.svg" />
                <Character pick="scissors" imgPath="/icon-scissors.svg" />
            </div>
            <div className={className.selection__second__row}>
                <Character pick="rock" imgPath="/icon-rock.svg" />
            </div>
        </div>
    );
}
