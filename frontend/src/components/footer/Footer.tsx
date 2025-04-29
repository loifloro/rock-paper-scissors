import { IconCirclesRelation } from "@tabler/icons-react";
import { RulesModal } from "@components/modal";
import { Portal, Toast } from "radix-ui";
import { usePick } from "@stores/usePick";
import { useScore } from "@stores/useScore";
import { useSocket } from "@stores/useSocket";
import { useState } from "react";
import className from "./Footer.module.css";
import ShareModal from "@components/modal/share-modal/ShareModal";

export default function Footer() {
    const socket = useSocket((state) => state.socket);
    const [isOpponentConnected, setIsOpponentConnected] = useState(false);
    const [open, setOpen] = useState(false);

    const resetPicks = usePick((state) => state.resetPicks);
    const resetLastScorer = useScore((state) => state.resetLastScorer);
    const updateScore = useScore((state) => state.updateScore);

    socket.on("opponent connected", () => {
        setIsOpponentConnected(true);

        updateScore(0);
        resetLastScorer();
        resetPicks();

        setOpen(true);

        setTimeout(() => {
            setOpen(false);
        }, 3000);
    });

    return (
        <>
            <footer className={className.footer}>
                <RulesModal />
                {!isOpponentConnected && <ShareModal />}
            </footer>
            <Portal.Root>
                <Toast.Provider swipeDirection="up">
                    <Toast.Root
                        className={className.toast__root}
                        open={open}
                        onOpenChange={setOpen}
                    >
                        <Toast.Title className={className.toast__title}>
                            Opponent Connected
                        </Toast.Title>
                        <Toast.Description
                            className={className.toast__description}
                        >
                            An opponent is connected with invitation link. Play
                            now!
                        </Toast.Description>
                        <Toast.Action
                            className={className.toast__action}
                            asChild
                            altText="Opponent connected"
                        >
                            <div className={className.toast__icon__container}>
                                <IconCirclesRelation stroke={1.5} />
                            </div>
                        </Toast.Action>
                    </Toast.Root>
                    <Toast.Viewport className={className.toast__viewport} />
                </Toast.Provider>
            </Portal.Root>
        </>
    );
}
