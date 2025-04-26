import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Revelation } from "@components/revelation";
import { Selection } from "@components/selection";
import { useEffect } from "react";
import { usePick } from "@stores/usePick";
import { useSocket } from "@stores/useSocket";
import { useSearchParams } from "react-router";

export default function App() {
    const { playerPick } = usePick();
    const [searchParams] = useSearchParams();

    const socket = useSocket((state) => state.socket);
    // const updateScore = useScore((state) => state.updateScore);

    // const [isWaitingForOpponent, setIsWaitingForOpponent] = useState(
    //     !searchParams.has("s") &&
    //         !searchParams.has("p") &&
    //         !searchParams.has("o")
    // );

    // socket.on("waiting for opponent", () => {
    //     setIsWaitingForOpponent(true);
    // });

    useEffect(() => {
        if (
            searchParams.has("s") &&
            searchParams.has("p") &&
            searchParams.has("o")
        ) {
            socket.emit("join room", {
                room: searchParams.get("s"),
                player: searchParams.get("p"),
                opponent: searchParams.get("o"),
            });
        }
    }, [searchParams, socket]);

    return (
        <>
            <Header />
            <main>
                {!playerPick && <Selection />}
                {playerPick && <Revelation />}
            </main>
            <Footer />
        </>
    );
}
