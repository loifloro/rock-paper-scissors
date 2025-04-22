import { Character } from "@components/character";
import { CharacterPick } from "@type/characterPick";
import { usePick } from "@stores/usePick";
import { useSearchParams } from "react-router";
import className from "./Selection.module.css";
import { useSocket } from "@stores/useSocket";

export default function Selection() {
    const socket = useSocket((state) => state.socket);
    const [searchParams] = useSearchParams();

    const updatePlayerPick = usePick((state) => state.updatePlayerPick);

    const handlePlayerPick = (playerPick: CharacterPick) => {
        if (
            socket.connected &&
            searchParams.has("s") &&
            searchParams.has("p") &&
            searchParams.has("o")
        ) {
            socket.emit("player pick", {
                player: searchParams.get("p"),
                pick: playerPick,
            });
        }

        updatePlayerPick(playerPick);
    };

    return (
        <div className={className.selection__container}>
            <div className={className.selection__first__row}>
                <Character
                    pick="paper"
                    imgPath="/icon-paper.svg"
                    size="md"
                    onClick={() => handlePlayerPick("paper")}
                />
                <Character
                    pick="scissors"
                    imgPath="/icon-scissors.svg"
                    size="md"
                    onClick={() => handlePlayerPick("scissors")}
                />
            </div>
            <div className={className.selection__second__row}>
                <Character
                    pick="rock"
                    imgPath="/icon-rock.svg"
                    size="md"
                    onClick={() => handlePlayerPick("rock")}
                />
            </div>
        </div>
    );
}
