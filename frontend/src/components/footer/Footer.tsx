import { RulesModal } from "@components/modal";
import { useSocket } from "@stores/useSocket";
import { useState } from "react";
import className from "./Footer.module.css";
import ShareModal from "@components/modal/share-modal/ShareModal";

export default function Footer() {
    const socket = useSocket((state) => state.socket);
    const [isOpponentConnected, setIsOpponentConnected] = useState(false);

    socket.on("opponent connected", () => {
        setIsOpponentConnected(true);
    });

    console.log(isOpponentConnected);

    return (
        <footer className={className.footer}>
            <RulesModal />
            {!isOpponentConnected && <ShareModal />}
        </footer>
    );
}
