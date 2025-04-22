import { Dialog } from "radix-ui";
import { useSearchParams } from "react-router";
import { useSocket } from "@stores/useSocket";
import { useState } from "react";
import { v4 } from "uuid";
import modal from "../Modal.module.css";
import share from "./ShareModal.module.css";

const className: CSSModuleClasses = {};
Object.assign(className, share, modal);

export default function ShareModal() {
    const [, setSearchParams] = useSearchParams();
    const [opponentId] = useState<string>(v4());
    const [roomId] = useState<string>(v4());
    const [playerId] = useState<string>(v4());
    const socket = useSocket((state) => state.socket);

    const handleInvitation = () => {
        setSearchParams((prev) => [
            ...prev.entries(),
            ["o", opponentId],
            ["s", roomId],
            ["p", playerId],
        ]);

        socket.emit("join room", {
            room: roomId,
            player: playerId,
            opponent: opponentId,
        });
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button
                    className={className.share__btn}
                    onClick={handleInvitation}
                >
                    Invite Opponent
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={className.modal__overlay} />
                <Dialog.Content
                    className={`${className.modal__content} ${className.share__content}`}
                >
                    <div className={className.share__header}>
                        <Dialog.Title className={className.share__title}>
                            Invite Opponent
                        </Dialog.Title>
                        <Dialog.Close
                            className={className.share__close__desktop}
                        >
                            <img src="/icon-close.svg" alt="Icon Close" />
                        </Dialog.Close>
                    </div>
                    <div className={className.share__img}>
                        {`${import.meta.env.VITE_SITE_URL}/?o=${playerId}&s=${roomId}&p=${opponentId}`}
                    </div>
                    <Dialog.Close className={className.share__close__mobile}>
                        <img src="/icon-close.svg" alt="Icon Close" />
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
