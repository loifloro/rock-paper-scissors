import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Revelation } from "@components/revelation";
import { Selection } from "@components/selection";
import { usePick } from "@stores/usePick";
import { useEffect } from "react";
import { io } from "socket.io-client";

export default function App() {
    const { userPick } = usePick();

    const socket = io("localhost:3000");

    function connectSocket() {
        socket.on("connection", (socket) => {
            console.log(socket);
        });
    }

    useEffect(() => {
        connectSocket();
    }, []);

    return (
        <>
            <Header />
            <main>
                {!userPick && <Selection />}
                {userPick && <Revelation />}
            </main>
            <Footer />
        </>
    );
}
