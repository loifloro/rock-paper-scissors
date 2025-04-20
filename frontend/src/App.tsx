import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Revelation } from "@components/revelation";
import { Selection } from "@components/selection";
import { usePick } from "@stores/usePick";
import { useSocket } from "@stores/useSocket";
import { useSearchParams } from "react-router";

export default function App() {
    const { playerPick } = usePick();
    const [searchParams] = useSearchParams();

    const socket = useSocket((state) => state.socket);

    function connectSocket() {
        socket.emit("join room", {
            room: searchParams.get("s"),
            player: searchParams.get("p"),
            opponent: searchParams.get("o"),
        });
    }

    if (!socket.id) {
        connectSocket();
    }

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
